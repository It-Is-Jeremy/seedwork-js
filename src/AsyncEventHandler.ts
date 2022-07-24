import IEvent from './Abstracts/IEvent';

export interface AsyncEventHandler<T extends IEvent>{
  apply: (event: T) => Promise<void>,
}
