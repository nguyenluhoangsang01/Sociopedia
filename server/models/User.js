import { model, Schema } from "mongoose";

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    friends: {
      type: Array,
      default: [],
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      min: 8,
      max: 32,
    },
    picturePath: {
      type: String,
      default: "",
    },
    location: {
      type: String,
      trim: true,
    },
    occupation: {
      type: String,
      trim: true,
    },
    viewedProfile: {
      type: String,
      trim: true,
    },
    impressions: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model("User", userSchema);
