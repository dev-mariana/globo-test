import type { Feedback } from "~/models/feedback";
import { FeedbackModel } from "../database/mongo/schema/feedback";
import type { IFeedbackRepository } from "./feedback.interface";

export class FeedbackRepository implements IFeedbackRepository {
  async create(feedback: Partial<Feedback>): Promise<Feedback> {
    return await FeedbackModel.create(feedback);
  }
}
