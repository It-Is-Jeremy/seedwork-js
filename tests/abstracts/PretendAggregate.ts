import AggregateBase from "../../src/abstracts/AggregateBase";
import {IEvent} from "../../src/abstracts/Event";

export class FakeAggregate extends AggregateBase{
    public constructor() {
        super();
    }


    protected handle(event: IEvent): void {

    }

}