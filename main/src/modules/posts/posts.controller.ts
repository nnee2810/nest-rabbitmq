import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices/client';
import { CreatePostDto } from './dto/create-post.dto';

@Controller('posts')
export class PostsController {
  constructor(
    @Inject('POSTS_SERVICE')
    private postsService: ClientProxy,
  ) {}

  @Post()
  createPost(@Body() data: CreatePostDto) {
    return this.postsService.send('create-post', data);
  }

  @Get()
  async getAllPost() {
    return this.postsService.send('get-all-posts', '');
  }
}
