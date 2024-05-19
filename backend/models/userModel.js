import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    // admin: { type: Boolean, required: true, default: false },
    password: { type: String, required: true },
    titre: { type: String, required: true },
    nom: { type: String, required: true },
    prenom: { type: String, required: true },
    profession: { type: String, required: true },
    specialite: { type: String, required: true },
    mode_exercice: { type: String, required: true },
    num_RPPS: { type: String, required: true },
    etablissement_exercice: { type: String, required: true },
    pays_exercice: { type: String, required: true },

    //! Comment avez-vous connu Rothschild Medical Academy variable.
    connu_ou: { type: String, required: true },

    //! variable to be used when the user verified his email address
    verified: { type: Boolean, required: true, default: false },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
export default User;
