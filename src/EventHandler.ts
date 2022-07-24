import IAggregate = require("./Abstracts/IAggregate");

export interface AsyncEventHandler{
    apply: Promise<void>,
    loadContext: Promise<IAggregate>,
    onError: Promise<void>,
    handle: Promise<void>,
}

export interface SynchronousEventHandler{
    apply: void,
    loadContext: IAggregate,
    onError: void,
    handle: void,
}