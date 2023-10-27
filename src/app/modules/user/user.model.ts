import { Schema, model } from "mongoose";
import { IUser } from "./user.interface";

const userSchema = new Schema<IUser>(
  {
    name: {
      firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    profile: {
      type: String,
      required: true,
      default: "https://i.ibb.co/dpqfqsX/icons8-avatar-80.png",
    },
  },
  {
    timestamps: true,
  }
);

const User = model<IUser>("User", userSchema);

export default User;
