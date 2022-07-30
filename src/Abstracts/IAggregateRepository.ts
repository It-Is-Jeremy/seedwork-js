import Aggregate from "./Aggregate";
import Guid from "../ValueObjects/Guid";

interface IAggregateRepository<T extends Aggregate> {
    getByAggregateId(id: Guid): Promise<T>;
    getByPredicate(predicate: (aggregate: T) => boolean): Promise<T[]>;
    getFirstByPredicate(predicate: (aggregate: T) => boolean): Promise<T>;
    getAll(): Promise<T[]>;
    save(aggregate: T): Promise<void>;
}

export = IAggregateRepository;