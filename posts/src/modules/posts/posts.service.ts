import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/modules/prisma/prisma.service';
import { CreatePostDto } from './dto/create-post.dto';

@Injectable()
export class PostsService {
  constructor(private prismaService: PrismaService) {}

  create(data: CreatePostDto) {
    return this.prismaService.post.create({
      data,
    });
  }

  findMany() {
    return this.prismaService.post.findMany();
  }
}
