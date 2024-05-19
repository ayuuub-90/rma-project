import Tag from "../models/tagModel.js";
import asyncHandler from "../middlewares/asyncHandler.js";

//TODO ==> create a tag function
const createTag = asyncHandler(async (req, res) => {
  try {
    const { id, title, icon } = req.body;
    switch (true) {
      case !id:
        return res.status(404).json({ message: "id is required" });
      case !title:
        return res.status(404).json({ message: "title is required" });
      case !icon:
        return res.status(404).json({ message: "icon is required" });
    }

    const tag = await Tag.findOne({ id: id });
    if (tag) return res.status(404).json({ message: "Tag id already exists" });

    const response = await Tag.create({ id: id, title: title, icon: icon });
    return res.status(201).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
});

//TODO ==> get all tags function
const getAllTags = asyncHandler(async (req, res) => {
  try {
    const tags = await Tag.find({});
    return res.json(tags);
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
});

export { createTag, getAllTags };
