import Contact from "../models/contactModel.js";
import asyncHandler from "../middlewares/asyncHandler.js";

//! crud operations
//TODO ==> create a new contact
const createContact = asyncHandler(async (req, res) => {
  try {
    const { nom, prenom, email, object, message } = req.body;
    switch (true) {
      case !prenom:
        return res.status(404).json({ message: "prenom is required" });
      case !nom:
        return res.status(404).json({ message: "nom is required" });
      case !email:
        return res.status(404).json({ message: "email is required" });
      case !object:
        return res.status(404).json({ message: "object is required" });
      case !message:
        return res.status(404).json({ message: "message is required" });
    }

    const contact = await Contact.create({
      nom,
      prenom,
      email,
      object,
      message,
    });

    if (contact) return res.status(201).json(contact);
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
});

//TODO ==> get all contacts
const getAllContacts = asyncHandler(async (req, res) => {
  try {
    const contacts = await Contact.find({});
    return res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
});

//TODO ==> update a contact
const updateContact = asyncHandler(async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
});

//TODO ==> get contact by id
const getContactById = asyncHandler(async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
});

export { createContact, getAllContacts, getContactById, updateContact };
