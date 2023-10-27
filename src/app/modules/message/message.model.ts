import { Schema, model } from "mongoose";
import { IMessage } from "./message.interface";

const messageModel = new Schema<IMessage>(
  {
    sender: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    content: {
      type: String,
      trim: true,
    },
    chat: {
      type: Schema.Types.ObjectId,
      ref: "Chat",
    },
  },
  {
    timestamps: true,
  }
);

const Message = model<IMessage>("Message", messageModel);

export default Message;
