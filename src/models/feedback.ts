import { Document, type Types } from "mongoose";

export class Feedback extends Document {
  rating: number;
  comment: string;
  user: string;
  video: Types.ObjectId;
}
