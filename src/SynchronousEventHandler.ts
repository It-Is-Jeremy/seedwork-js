import IEvent from './Abstracts/IEvent';

export interface SynchronousEventHandler<T extends IEvent>{
    apply: (event: T) => void,
}
