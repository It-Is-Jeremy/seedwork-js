export class InvalidGuidStringError implements Error {
  constructor(id: string) {
    this.name = 'Invalid Guid string provided';
    this.message = `The following Guid provided was invalid - ${id}`;
  }

  message: string;
  name: string;
}
