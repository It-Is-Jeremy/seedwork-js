import IAggregateRepository from "./IAggregateRepository";
import Aggregate from "./Aggregate";
import Guid from "../ValueObjects/Guid";
import {AggregateNotFoundException} from "../Errors/AggregateNotFoundException";

abstract class AggregateRepositoryBase<T extends Aggregate> implements IAggregateRepository<T>{
    abstract getAll(): Promise<Aggregate[]>;

    abstract getByAggregateId(id: Guid): Promise<Aggregate>;

    abstract getByPredicate(predicate: (aggregate: Aggregate) => boolean): Promise<Aggregate[]>;

    abstract getFirstByPredicate(predicate: (aggregate: Aggregate) => boolean): Promise<Aggregate>;

    public async save(aggregate: Aggregate): Promise<void>{
        if(!await this.validate(aggregate)){
            throw new Error("Invalid aggregate entity version");
        }
        await this.upsert(aggregate);
    }

    protected abstract upsert(aggregate: Aggregate): Promise<void>;

    private async validate(proposedChange: Aggregate): Promise<boolean> {
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