import Guid from "../ValueObjects/Guid";

export class AggregateNotFoundException implements Error {
    constructor(Id: Guid) {
        this.message = `Aggregate with id ${Id} not found`;
        this.name = "AggregateNotFoundException";
    }

    message: string;
    name: string;
}