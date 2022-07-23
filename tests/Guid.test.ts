import Guid from '../src/ValueObjects/Guid';
import { InvalidGuidStringError } from '../src/ValueObjects/InvalidGuidStringError';
import {v4 as uuid } from 'uuid';
import {validate} from 'uuid';

describe('Guid tests', ()=>{
    it.each([['a'],['asdad'], ['hello world'],['1234']])
        ('Throws an InvalidGuidStringError when an invalid UUID string is passed',
            (invalidUuid: string)=>
        {
            //Arrange
            const invokeConstructor:()=>void = () => {new Guid(invalidUuid)};
            //Assert
            expect(invokeConstructor).toThrow(new InvalidGuidStringError(invalidUuid));
        });

    it('Constructs when a valid UUID string is supplied', ()=>{
        //Arrange
        const value:string = uuid();
        //Act
        const guid = new Guid(value);
        //Assert
        expect(guid).not.toBeNull();
        expect(guid.Id).toEqual(value);
    });

    it('Constructs when default parameter is used', ()=>{
        //Act
        const guid = new Guid();
        //Assert
        expect(guid).not.toBeNull();
        expect(validate(guid.Id)).toBeTruthy();
    });
});