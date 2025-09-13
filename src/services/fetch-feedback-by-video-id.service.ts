import type { FeedbackRepository } from "~/config/repositories/feedback.repository";
import type { FetchFeedbackByVideoIdResponse } from "~/dto/fetch-feedback-by-video-id.dto";

export class FetchFeedbackByVideoIdService {
  constructor(private feedbackRepository: FeedbackRepository) {}

  async execute(videoId: string): Promise<FetchFeedbackByVideoIdResponse[]> {
    const feedbacks = await this.feedbackRepository.findByVideoId(videoId);

    return feedbacks.map((feedback) => ({
      id: feedback._id?.toString() || "",
      rating: feedback.rating,
      comment: feedback.comment,
      user: feedback.user,
      video: {
        id: feedback.video.toString(),
      },
    }));
  }
}
