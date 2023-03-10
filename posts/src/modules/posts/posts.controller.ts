import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { CreatePostDto } from './dto/create-post.dto';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @MessagePattern('create-post')
  createPost(data: CreatePostDto) {
    return this.postsService.create(data);
  }

  @MessagePattern('get-all-posts')
  getAllPosts() {
    return this.postsService.findMany();
  }
}
