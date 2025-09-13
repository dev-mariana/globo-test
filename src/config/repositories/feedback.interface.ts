import type { Feedback } from "~/models/feedback";

export interface IFeedbackRepository {
  create(feedback: Partial<Feedback>): Promise<Feedback>;
}
