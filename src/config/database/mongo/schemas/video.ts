import { model, Schema } from "mongoose";
import type { Video } from "~/models/video";

const VideoSchema = new Schema<Video>({
  title: { type: String, required: true },
  url: { type: String, required: true },
  feedbacks: [{ type: Schema.Types.ObjectId, ref: "Feedback", default: [] }],
});

export const VideoModel = model<Video>("Video", VideoSchema);
