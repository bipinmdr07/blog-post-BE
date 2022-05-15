import { Model } from './model';
import { ulid } from 'ulid';

class Blog extends Model {
  constructor() {
    super('blogs');
  }

  async create(params) {
    const blogId = ulid();

    await super.create({
      blogId,
      ...params,
    });

    return await super.fetchByKey({
      blogId,
    });
  }
}

export default new Blog();
