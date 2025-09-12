import type { Video } from "~/models/video";

export interface IVideosRepository {
  findAll(): Promise<Video[]>;
}
