import z from "zod";
import { FeedbackRepository } from "~/config/repositories/feedback.repository";
import type { CreateFeedbackRequest } from "~/dto/create-feedback.dto";
import { CreateFeedbackService } from "~/services/create-feedback.service";

export async function createFeedbackResolver(
  parent: any,
  args: any,
  context: any,
  info: any
) {
  const createFeedbackBodySchema = z.object({
    rating: z.number().min(1).max(5),
    comment: z.string().min(1).max(500),
    user: z.string().min(1),
    videoId: z.string().min(1),
  });

  const parsedBody = createFeedbackBodySchema.parse(args.input);

  const feedbackRepository = new FeedbackRepository();
  const createFeedbackService = new CreateFeedbackService(feedbackRepository);

  try {
    const feedback: CreateFeedbackRequest = {
      rating: parsedBody.rating,
      comment: parsedBody.comment,
      user: parsedBody.user.toString(),
      videoId: parsedBody.videoId,
    };

    const createdFeedback = await createFeedbackService.execute(feedback);

    return createdFeedback;
  } catch (error) {
    throw error;
  }
}
