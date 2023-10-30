import bcrypt from "bcryptjs";
import { Model, Schema, model } from "mongoose";
import { IUser, IUserMethods } from "./user.interface";

type UserModel = Model<IUser, {}, IUserMethods>;

const userSchema = new Schema<IUser, UserModel, IUserMethods>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profile: {
      type: String,
      default: "https://i.ibb.co/dpqfqsX/icons8-avatar-80.png",
    },
  },
  {
    timestamps: true,
  }
);

//password decoded
userSchema.method("matchPassword", async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
});

//password encoded
userSchema.pre("save", async function (next) {
  if (!this.isModified) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = model<IUser, UserModel>("User", userSchema);

export default User;
