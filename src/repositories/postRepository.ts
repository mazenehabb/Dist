import type { PostRepository } from "@/repositories/interfaces/PostRepository";
import { ApiPostRepository } from "@/repositories/api/ApiPostRepository";
import { MockPostRepository } from "@/repositories/mock/MockPostRepository";

export const postRepository: PostRepository =
  import.meta.env.VITE_DATA_SOURCE === "api"
    ? new ApiPostRepository()
    : new MockPostRepository();
