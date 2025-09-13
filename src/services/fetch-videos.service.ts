import type { IVideosRepository } from "~/config/repositories/videos.interface";
import type { FetchVideosResponse } from "~/dto/fetch-videos.dto";

export class FetchVideosService {
  constructor(private readonly videosRepository: IVideosRepository) {}

  async execute(): Promise<FetchVideosResponse[]> {
    const videos = await this.videosRepository.findAll();

    return videos.map((video) => ({
      id: video._id?.toString() || "",
      title: video.title,
      url: video.url,
      feedbacks: video.feedbacks.map((feedback) => ({
        id: feedback.toString(),
      })),
    }));
  }
}
