import mongoose from "mongoose";

const Count = mongoose.Schema({
  count: { type: Number, default: 0 }
});

export default mongoose.model("Count", Count);
