import type { Video } from "~/models/video";
import { VideoModel } from "../database/mongo/schema/video";
import type { IVideosRepository } from "./videos.interface";

export class VideosRepository implements IVideosRepository {
  async findAll(): Promise<Video[]> {
    return await VideoModel.find();
  }
}
