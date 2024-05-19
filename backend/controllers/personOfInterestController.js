import PersonOfInterest from "../models/personOfInterestModel.js";
import asyncHandler from "../middlewares/asyncHandler.js";

//! crud operations

//TODO ==> create a new person of interests function
const createPOIs = asyncHandler(async (req, res) => {
  try {
    const { firstname, lastname, civility, email, image } = req.body;
    switch(true) {
        case !firstname: return res.status(404).json({message: "firstname is required"});
        case !lastname: return res.status(404).json({message: "lastname is required"});
        case !civility: return res.status(404).json({message: "civility is required"});
        case !email: return res.status(404).json({message: "email is required"});
        // case !image: return res.status(404).json({message: "image is required"});
    };
    const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/;
    const isValidEmail = emailRegex.test(email);
    
    if(!isValidEmail) return res.status(403).json({message: 'Invalid email address'});

    const person = await PersonOfInterest.findOne({email: email});
    if(person) return res.status(403).json({message: "Person of interest's email address already exists"});

    const POIs = await PersonOfInterest.create({
        firstname: firstname, lastname: lastname, email: email, civility: civility, image: image
    });

    return res.status(201).json(POIs);

  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
});

//TODO ==> get all person of interests function
const getAllPOIs = asyncHandler(async (req, res) => {
  try {
    const POIs = await PersonOfInterest.find({});
    return res.json(POIs);
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
});

export { createPOIs, getAllPOIs };
