import State from './State';
import StateMachine from './StateMachine';
import StateBuilder from './StateBuilder';

class StateMachineBuilder {
  private readonly _states: StateBuilder[];

  public constructor() {
    this._states = [];
  }

  public configureState(stateName: string): StateBuilder {
    const match = this._states.find((s) => s.name === stateName)
    if (match !== undefined) {
      return match;
    }

    const state = new StateBuilder(stateName);
    this._states.push(state);
    return state;
  }

  public build(): StateMachine {
    return new StateMachine(this._states.map((s) => s.build()));
  }
}
export = StateMachineBuilder;
