import AggregateBase = require("../../src/Abstracts/AggregateBase");
import IEvent = require("../../src/Abstracts/IEvent");

class FakeAggregate extends AggregateBase{
    constructor() {
        super();
    }


    protected handle(event: IEvent): void {

    }

}

export = FakeAggregate;