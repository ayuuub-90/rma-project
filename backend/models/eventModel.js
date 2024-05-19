import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    
    //! url of the event's video
    url: { type: String, required: true },
    thumbnail: { type: String, required: true },

    //! array of person of intersts schema
    personOfInterests: [
      {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "PersonOfInterest",
      },
    ],

    title: { type: String, required: true },
    description: { type: String },
    subTitle: { type: String },
    startDate: { type: Date, required: true },
    stopDate: { type: Date, required: true },

    //! object from tags schema
    tag: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Tag",
    },
  },
  {
    timestamps: true,
  }
);

const Event = mongoose.model("Event", eventSchema);
export default Event;
