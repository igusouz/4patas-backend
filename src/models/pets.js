import mongoose from "mongoose";

const petsSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    nomeDoPet: { type: String, required: true },
    nomeDoTutor: { type: String},
    tipoDoPet: { type: String },
    enderecoDoPet: { type: String }
}, { versionKey: false });

const pets = mongoose.model("pets", petsSchema);

export default pets;