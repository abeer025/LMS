import mongoose from "mongoose";

const { Schema } = mongoose;

const courseSchema = new Schema(
  {
    title: String,
    description: String,
    duration: String,
    eligbility: [String],
    thumbnail: String
  },
  {
    timestamps: true,
  }
);

export const CourseModal =
  mongoose.models.Course || mongoose.model("Course", courseSchema);
