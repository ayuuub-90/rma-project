import mongoose from "mongoose";

const requestSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    is_pois: { type: Boolean, required: true, default: false },
  },
  {
    timestamps: true,
  }
);

const Request = mongoose.model("Request", requestSchema);
export default Request;
