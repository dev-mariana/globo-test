import { Types } from "mongoose";
import type { FeedbackRepository } from "~/config/repositories/feedback.repository";
import type {
  CreateFeedbackRequest,
  CreateFeedbackResponse,
} from "~/dto/create-feedback.dto";

export class CreateFeedbackService {
  constructor(private feedbackRepository: FeedbackRepository) {}

  async execute(dto: CreateFeedbackRequest): Promise<CreateFeedbackResponse> {
    const createdFeedback = await this.feedbackRepository.create({
      rating: dto.rating,
      comment: dto.comment,
      user: dto.user,
      video: new Types.ObjectId(dto.videoId),
    });

    return {
      id: createdFeedback._id?.toString() || "",
      rating: createdFeedback.rating,
      comment: createdFeedback.comment,
      user: createdFeedback.user,
      video: {
        id: createdFeedback.video.toString(),
      },
    };
  }
}
