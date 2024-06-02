import mongoose from "mongoose";

const verifiedUserSchema = new mongoose.Schema({
  token: { type: String, required: true },
  email: { type: String, required: true },
  createdAt: { type: Date },
  expiresAt: { type: Date },
});

const VerifiedUser = mongoose.model("VerifiedUser", verifiedUserSchema);
export default VerifiedUser;
