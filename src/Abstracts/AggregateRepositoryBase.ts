import IAggregateRepository from "./IAggregateRepository";
import Aggregate from "./Aggregate";
import Guid from "../ValueObjects/Guid";
import {AggregateNotFoundException} from "../Errors/AggregateNotFoundException";

abstract class AggregateRepositoryBase<T extends Aggregate> implements IAggregateRepository<T>{
    abstract getAll(): Promise<T[]>;

    abstract getByAggregateId(id: Guid): Promise<T>;

    abstract getByPredicate(predicate: (aggregate: T) => boolean): Promise<T[]>;

    abstract getFirstByPredicate(predicate: (aggregate: T) => boolean): Promise<T>;

    public async save(aggregate: T): Promise<void>{
        if(!await this.validate(aggregate)){
            throw new Error("Invalid aggregate entity version");
        }
        await this.upsert(aggregate);
        return;
    }

    protected abstract upsert(aggregate: T): Promise<void>;

    private async validate(proposedChange: T): Promise<boolean> {
        const currentAggregate = await this.getByAggregateId(proposedChange.Id);
        if(currentAggregate === undefined){
            throw new AggregateNotFoundException(proposedChange.Id);
        }

        if(currentAggregate.getEntityVersion() === proposedChange.getEntityVersion()){
            proposedChange.incrementEntityVersion();
            return true;
        }
        return false;
    }
}

export = AggregateRepositoryBase;