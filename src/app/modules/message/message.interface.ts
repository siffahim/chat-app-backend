import { Types } from "mongoose";

export interface IMessage {
  sender: Types.ObjectId;
  content: string;
  chat: Types.ObjectId;
}
