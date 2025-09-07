import { Document, type Types } from "mongoose";

export class Video extends Document {
  title: string;
  url: string;
  feedbacks: Types.ObjectId[];
}
