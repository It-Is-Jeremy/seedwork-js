import AggregateBase from "../../src/Abstracts/AggregateBase";
import {IEvent} from "../../src/Abstracts/IEvent";

export class FakeAggregate extends AggregateBase{
    public constructor() {
        super();
    }


    protected handle(event: IEvent): void {

    }

}