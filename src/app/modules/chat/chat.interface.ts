import { Types } from "mongoose";
import { IUser } from "../user/user.interface";

export interface IChat {
  chatName: string;
  isGroupChat: boolean;
  users: Array<Types.ObjectId | IUser>;
  latestMessage: Types.ObjectId;
  groupAdmin: Types.ObjectId;
}
