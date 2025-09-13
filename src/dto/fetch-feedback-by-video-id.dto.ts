export class FetchFeedbackByVideoIdResponse {
  id: string;
  rating: number;
  comment: string;
  user: string;
  video: {
    id: string;
  };
}
