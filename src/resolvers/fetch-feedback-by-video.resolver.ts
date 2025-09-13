import z from "zod";
import { FeedbackRepository } from "~/config/repositories/feedback.repository";
import { FetchFeedbackByVideoIdService } from "~/services/fetch-feedback-by-video-id.service";

export async function fetchFeedbackByVideoResolver(
  parent: any,
  args: any,
  context: any,
  info: any
) {
  const fetchFeedbackParam = z.object({
    videoId: z.string().min(1),
  });

  const { videoId } = fetchFeedbackParam.parse(args);

  const feedbackRepository = new FeedbackRepository();
  const fetchFeedbackByVideoService = new FetchFeedbackByVideoIdService(
    feedbackRepository
  );

  try {
    const feedbacks = await fetchFeedbackByVideoService.execute(videoId);

    return feedbacks;
  } catch (error) {
    throw error;
  }
}
