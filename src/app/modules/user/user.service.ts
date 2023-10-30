import { generateToken } from "../../../config/generateToken";
import { ILoginUser, IUser } from "./user.interface";
import User from "./user.model";

export const createUserToDB = async (payload: IUser) => {
  const { name, email, password, profile } = payload;

  if (!name || !email || !password) {
    throw new Error("Please enter value");
  }

  const userExist = await User.findOne({ email });

  if (userExist) {
    throw new Error("User already exist");
  }

  const createUser = await User.create({
    name,
    email,
    password,
    profile,
  });

  if (!createUser) {
    throw new Error("Failed to create user");
  } else {
    return {
      _id: createUser._id,
      name: createUser.name,
      password: createUser.password,
      profile: createUser.profile,
      token: generateToken(createUser._id.toString()),
    };
  }
};

export const loginUserToDB = async (payload: ILoginUser) => {
  const { email, password } = payload;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    return {
      _id: user._id,
      name: user.name,
      password: user.password,
      profile: user.profile,
      token: generateToken(user._id.toString()),
    };
  } else {
    throw new Error("Invalid email or password");
  }
};
