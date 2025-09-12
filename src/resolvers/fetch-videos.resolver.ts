import { VideosRepository } from "~/config/repositories/videos.repository";
import { FetchVideosService } from "~/services/fetch-videos.service";

export async function fetchVideosResolver(
  parent: any,
  args: any,
  context: any,
  info: any
) {
  const videosRepository = new VideosRepository();
  const fetchVideosService = new FetchVideosService(videosRepository);

  try {
    const videos = await fetchVideosService.execute();

    return videos;
  } catch (error) {
    throw error;
  }
}
