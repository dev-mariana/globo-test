import type { IVideosRepository } from "~/config/repositories/videos.interface";
import type { Video } from "~/models/video";

export class FetchVideosService {
  constructor(private readonly videosRepository: IVideosRepository) {}

  async execute(): Promise<Video[]> {
    return await this.videosRepository.findAll();
  }
}
