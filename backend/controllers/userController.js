import User from "../models/userModel.js";
import VerifiedUser from "../models/verifiedUserModel.js";
import asyncHandler from "../middlewares/asyncHandler.js";
import bcrypt from "bcrypt";
import generateToken from "../utils/generateToken.js";
import sendEmail from "../utils/sendEmail.js";
import crypto from "crypto";

// ! crud operations
//TODO ==> create a separate user verified to store token and email function
const verifiedUser = async (req, res) => {
  try {
    const { email } = req.body;
    // generate token
    const token = crypto.randomBytes(32).toString("hex");

    // get the message info ready to be sent
    const mssg = {
      to: email,
      from: {
        name: "rothschild medical academy",
        email: "medicalrothschild@gmail.com",
      },
      templateId: process.env.TEMPLATE_ID,
      dynamic_template_data: {
        registration_token: token,
      },
    };
    // sent the email to user
    sendEmail(mssg);
    // create the new (pending) verified user schema
    const verificationUser = await VerifiedUser.create({
      token: token,
      email: email,
      createdAt: Date.now(),
      expiresAt: Date.now() + 21600000,
    });
    if (verificationUser)
      return res.json({
        message: "We sent you a verification in your email, check it",
      });
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
};
//TODO ==> create a new user
const createUser = asyncHandler(async (req, res) => {
  try {
    const {
      email,
      password,
      titre,
      nom,
      prenom,
      profession,
      specialite,
      mode_exercice,
      num_RPPS,
      etablissement_exercice,
      pays_exercice,
      connu_ou,
    } = req.body;

    if (
      !email ||
      !password ||
      !titre ||
      !nom ||
      !prenom ||
      !profession ||
      !specialite ||
      !num_RPPS ||
      !etablissement_exercice ||
      !pays_exercice ||
      !connu_ou
    ) {
      return res.status(404).json({ message: "all fields are required" });
    }

    const emailDuplicated = await User.findOne({ email });
    if (emailDuplicated)
      return res.json({ message: "Try another email address" });

    const hash_password = await bcrypt.hash(password, 10);
    const user = await User.create({
      email: email,
      password: hash_password,
      titre: titre,
      nom: nom,
      prenom: prenom,
      profession: profession,
      specialite: specialite,
      mode_exercice: mode_exercice,
      num_RPPS: num_RPPS,
      etablissement_exercice: etablissement_exercice,
      pays_exercice: pays_exercice,
      connu_ou: connu_ou,
    });

    if (user) return res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
});

//TODO ==> verify email address function
const verifyEmail = async (req, res) => {
  try {
    // get the token from the url
    const { token } = req.params;
    // search with this token inside the verified user Schema
    const verifiedUser = await VerifiedUser.findOne({ token: token });
    if (!verifiedUser) return res.json({ error: "Token not valid or expired, try again" });

    // check if the token finish his expires time
    if (verifiedUser.expiresAt < Date.now()) {
      await verifiedUser.deleteOne();
      return res.json({ error: "Token has been expired" });
    }

    return res
      .status(200)
      .json({
        message: "Your email address has been verified",
        email: verifiedUser.email,
      });
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
};

//TODO ==> login user function
const loginUser = asyncHandler(async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(404).json({ message: "Invalid email or password" });

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const check_password = await bcrypt.compare(password, user.password);
    if (!check_password) {
      return res.status(404).json({ message: "Password is incorrect" });
    }
    generateToken(res, user._id);
    return res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
});

//TODO ==> logout a user by id
const logoutUser = asyncHandler(async (req, res) => {
  try {
    res.cookie("jwt_token", "", { httpOnly: true, expires: new Date(0) });
    res.json({ message: "logout successful" });
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
});

//TODO ==> update a user by id
const updateUser = asyncHandler(async (req, res) => {
  try {
    const {
      email,
      titre,
      nom,
      prenom,
      profession,
      specialite,
      mode_exercice,
      num_RPPS,
      etablissement_exercice,
      pays_exercice,
      connu_ou,
      password,
      confirmPassword,
    } = req.body;

    const user = await User.findById(req.user._id);
    if (!user)
      return res.status(404).json({ message: "User not found, Please login" });

    if (password !== "" && confirmPassword !== "") {
      if (confirmPassword === password) {
        const new_password = await bcrypt.hash(password, 10);
        user.password = new_password;
      } else return res.status(404).json({ message: "Password aren't match" });
    }

    switch (true) {
      case !email:
        return res.json({ message: "email is required" });
      case !titre:
        return res.json({ message: "titre is required" });
      case !nom:
        return res.json({ message: "nom is required" });
      case !prenom:
        return res.json({ message: "prenom is required" });
      case !profession:
        return res.json({ message: "profession is required" });
      case !specialite:
        return res.json({ message: "specialite is required" });
      case !mode_exercice:
        return res.json({ message: "mode_exercice is required" });
      case !num_RPPS:
        return res.json({ message: "num_RPPS is required" });
      case !etablissement_exercice:
        return res.json({ message: "etablissement_exercice is required" });
      case !pays_exercice:
        return res.json({ message: "pays_exercice is required" });
      case !connu_ou:
        return res.json({ message: "connu_ou is required" });
    }

    user.email = email;
    user.titre = titre;
    user.nom = nom;
    user.prenom = prenom;
    user.profession = profession;
    user.specialite = specialite;
    user.mode_exercice = mode_exercice;
    user.num_RPPS = num_RPPS;
    user.etablissement_exercice = etablissement_exercice;
    user.pays_exercice = pays_exercice;
    user.connu_ou = connu_ou;

    await user.save();
    return res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
});

//TODO ==> get a user by id
const getUserById = asyncHandler(async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (user) {
      return res.json(user);
    }
    return res.status(404).json({ message: "User not found" });
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
});

export {
  createUser,
  updateUser,
  getUserById,
  loginUser,
  logoutUser,
  verifyEmail,
  verifiedUser,
};
