import asyncHandler from "../middlewares/asyncHandler.js";
import Country from "../models/countryModel.js";

// ! crud operations
//TODO ==> create a new country
const createCountry = asyncHandler(async (req, res) => {
  try {
    const { name } = req.body;
    const country = await Country.findOne({ name: name });
    if (country) {
      return res.status(402).json({ message: "Country already exists" });
    }
    await Country.create({name: name});
    return res.status(201).json({ message: `${name} country added` });
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
});

//TODO ==> get all countires 
const getAllCountries = asyncHandler(async (req, res) => {
  try {
    const countries = await Country.find({});
    return res.json(countries);
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
});

export { createCountry, getAllCountries };
