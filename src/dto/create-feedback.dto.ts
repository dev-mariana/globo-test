export class CreateFeedbackRequest {
  rating: number;
  comment: string;
  user: string;
  videoId: string;
}

export class CreateFeedbackResponse {
  id: string;
  rating: number;
  comment: string;
  user: string;
  video: {
    id: string;
  };
}
