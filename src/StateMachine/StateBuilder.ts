import {Transition} from './Transition';
import {Action} from './Action';
import State from './State';

export default class StateBuilder {
  public readonly name: string;
  private readonly _transitions: Transition[] = [];

  public constructor(stateName: string) {
    this.name = stateName;
    this._transitions = [];
  }

  public register(on: Action, to: State): StateBuilder {
    this._transitions.push(new Transition(on, to));
    return this;
  }

  public build(): State {
    return new State(this.name, this._transitions);
  }
}
