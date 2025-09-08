import { model, Schema } from "mongoose";
import type { Feedback } from "~/models/feedback";

const FeedbackSchema = new Schema<Feedback>({
  rating: { type: Number, required: true, min: 1, max: 5 },
  comment: { type: String, required: true },
  user: { type: String, required: true },
  video: { type: Schema.Types.ObjectId, ref: "Video", required: true },
});

export const FeedbackModel = model<Feedback>("Feedback", FeedbackSchema);
