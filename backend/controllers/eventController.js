import Event from "../models/eventModel.js";
import PersonOfInterest from "../models/personOfInterestModel.js";
import Tag from "../models/tagModel.js";
import asyncHandler from "../middlewares/asyncHandler.js";

//! crud operations
//TODO ==> create a new event function
const createEvent = asyncHandler(async (req, res) => {
  try {
    const { 
        id, url, thumbnail, personOfInterests, title, description, subTitle, startDate, stopDate, tag
    } = req.body;

    switch(true){
        case !id: return res.status(404).json({message: "id is required"});
        case !url: return res.status(404).json({message: "url is required"});
        case !thumbnail: return res.status(404).json({message: "thumbnail is required"});
        case !personOfInterests: return res.status(404).json({message: "personOfInterests is required"});
        case !title: return res.status(404).json({message: "title is required"});
        case !startDate: return res.status(404).json({message: "startDate is required"});
        case !stopDate: return res.status(404).json({message: "stopDate is required"});
        case !tag: return res.status(404).json({message: "tag is required"});
    };

    const eventExist = await Event.findOne({id: id});
    if (eventExist) return res.status(403).json({message: "event already exists"});

    personOfInterests.map((person) => async () => {
        const checkPerson = await PersonOfInterest.findById(person._id);
        if(!checkPerson) return res.status(404).json({message: "person not found"});
    });

    const checkTag = await Tag.findById(tag);
    if(!checkTag) return res.status(404).json({message: "tag not found"});

    const event = await Event.create({
        id: id, url: url, thumbnail: thumbnail, personOfInterests: personOfInterests,
        title: title, description: description, subTitle: subTitle, startDate: startDate, 
        stopDate: stopDate, tag: tag,
    });

    if(!event) return res.status(404).json({message: "Error while creating event, Try again"});

    return res.status(201).json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
});

//TODO ==> get all events function
const getAllEvents = asyncHandler(async (req, res) => {
  try {
    const events = await Event.find({}).populate('tag').populate("personOfInterests");
    return res.json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
});

//TODO ==> get all events function
const getThreeEvents = asyncHandler(async (req, res) => {
  try {
    const events = await Event.find({})
      .populate('tag').populate("personOfInterests").limit(3);
    return res.json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
});

//TODO ==> get all events function
const getAllEventsComing = asyncHandler(async (req, res) => {
  try {
    const events = await Event.find({startDate: { $gt: new Date() }})
      .populate('tag').populate("personOfInterests");
    return res.json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
});

//TODO ==> get all events function
const getEventsFiltered = asyncHandler(async (req, res) => {
  try {
    const { checkedTags, checkedPois } = req.body;

    let args = {};
    if( checkedTags?.length > 0 ) args.tag = {$in: checkedTags};
    if( checkedPois?.length > 0 ) args.personOfInterests = {$in: checkedPois};

    const events = await Event.find(args).populate('tag').populate('personOfInterests');

    return res.json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
});

//TODO ==> get event by id function
const getEventById = asyncHandler(async (req, res) => {
  try {
    const event = await Event.findOne({id: req.params.id}).populate('tag').populate("personOfInterests");
    if (!event) return res.status(404).json({ message: "No event found" });

    return res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
});

export { createEvent, getAllEvents, getEventById, getAllEventsComing, getThreeEvents, getEventsFiltered };
