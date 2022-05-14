import BaseError from './error';

class TokenError extends BaseError {
  constructor(message) {
    super(message);
    this.name = 'TokenError';
  }

  toString() {
    return `Token Error: ${this.message}`;
  }
}

export default TokenError;
