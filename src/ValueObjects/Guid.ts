const {v4, validate} = require('uuid');
import InvalidGuidStringError = require('./InvalidGuidStringError');

class Guid {
  public readonly Id:string;

  public constructor(id:string = '') {
    if (!id) {
      this.Id = v4();
    } else {
      if (!validate(id)) {
        throw new InvalidGuidStringError(id);
      }

      this.Id = id;
    }
  }
}

export = Guid;
