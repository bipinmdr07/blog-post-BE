export class Model {
  keys() {
    return {
      PK: this.pk(),
      SK: this.sk(),
    };
  }
}
