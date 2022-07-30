import Aggregate from "./Aggregate";
import Guid from "../ValueObjects/Guid";

interface IAggregateRepository<T extends Aggregate> {
    getByAggregateId(id: Guid): Promise<Aggregate>;
    save(aggregate: Aggregate): Promise<void>;
    deleteByAggregateId(id: Guid): Promise<void>;
    getByPredicate(predicate: (aggregate: Aggregate) => boolean): Promise<Aggregate[]>;
    getFirstByPredicate(predicate: (aggregate: Aggregate) => boolean): Promise<Aggregate>;
    getAll(): Promise<Aggregate[]>;
}