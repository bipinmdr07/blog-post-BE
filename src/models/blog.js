import { Model } from './model';
import { ulid } from 'ulid';

class Blog extends Model {
  constructor({
    blogId = ulid(),
    title,
    content,
    createdAt = new Date().getTime(),
    updatedAt = new Date().getTime(),
  }) {
    this.blogId = blogId;
    this.title = title;
    this.content = content;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  pk() {
    return `BLOG#${this.userId}`;
  }

  sk() {
    return `BLOG#${this.blogId}`;
  }

  fromItem(item) {
    if (!item) throw new Error('No Item!');
    return new Blog({
      blogId: item.blogId,
      title: item.title,
      content: item.content,
      userId: item.userId,
      createdAt: item.createdAt,
      updatedAt: item.updatedAt,
    });
  }

  toItem() {
    return {
      ...this.keys(),
      blogId: this.blogId,
      title: this.title,
      content: this.content,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}

export default Blog;
