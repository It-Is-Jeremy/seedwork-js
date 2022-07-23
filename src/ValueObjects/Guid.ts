import {v4 as uuid, validate} from 'uuid';
import {InvalidGuidStringError} from './InvalidGuidStringError';

export default class Guid {
  public readonly Id:string;

  public constructor(id:string = '') {
    if (!id) {
      this.Id = uuid();
    } else {
      if (!validate(id)) {
        throw new InvalidGuidStringError(id);
      }

      this.Id = id;
    }
  }
}
