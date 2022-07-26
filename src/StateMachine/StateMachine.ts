import State from './State';
import Action from './Action';

class StateMachine {
  private readonly _states: State[];

  constructor(states: State[]) {
    this._states = states;
  }

  public getAcceptableActions(stateName: string): Action[] {
    const state = this._states.find((s) => s.name === stateName);
    if (!state) {
      throw new Error(`State ${stateName} does not exist`);
    }
    return state.getAcceptableActions();
  }

  public move(stateName: string, actionName: string): string {
    const state = this._states.find((s) => s.name === stateName);
    if (!state) {
      throw new Error(`State ${stateName} does not exist`);
    }
    const action = new Action(actionName);
    const newState = this._states.find((s) => s.name === state.move(action).name);

    if(newState === undefined){
      throw new Error(`State ${stateName} does not exist`);
    }

    return newState.name;
  }
}

export = StateMachine;
