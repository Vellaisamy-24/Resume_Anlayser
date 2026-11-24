import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    fileName: {
      type: String,
    },
    fileUrl: {
      type: String,
    },
    fileContent: {
      type: String,
      default: "",
    },
  },
  { timestamps: true },
);

const resume = mongoose.model("resume", resumeSchema);
export default resume;
