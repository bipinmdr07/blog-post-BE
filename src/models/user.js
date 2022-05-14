import { Model } from './model';
import { ulid } from 'ulid';

class User extends Model {
  constructor({
    userId = ulid(),
    name,
    email,
    username,
    avatarUrl,
    createdAt = new Date().getTime(),
    updatedAt = new Date().getTime(),
  }) {
    super();

    this.name = name;
    this.email = email;
    this.userId = userId;
    this.username = username;
    this.avatarUrl = avatarUrl;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  fromItem(item) {
    if (!item) throw new Error('No Item!');
    return new User({
      name: item.name,
      email: item.email,
      username: item.username,
      avatarUrl: item.avatarUrl,
      createdAt: item.createdAt,
      updatedAt: item.updatedAt,
    });
  }

  pk() {
    return `USER#${this.userId}`;
  }

  sk() {
    return `USER#${this.userId}`;
  }

  toItem() {
    return {
      ...this.keys(),
      name: this.name,
      email: this.email,
      username: this.username,
      avatarUrl: this.avatarUrl,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}

export default User;
