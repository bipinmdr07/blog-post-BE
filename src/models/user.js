import { Model } from './model';
import { ulid } from 'ulid';

class User extends Model {
  constructor() {
    super('users');
  }

  async create(params) {
    const userId = ulid();

    await super.create({
      userId,
      ...params,
    });

    return await super.fetchByKey({
      userId,
    });
  }
}

export default new User();
