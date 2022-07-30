import Action from './Action';
import {Transition} from './Transition';

class State {
  public readonly name: string;
  private _transitions: Transition[] = [];

  constructor(stateName: string, transitions: Transition[]=[]) {
    this.name = stateName;
    this._transitions = transitions;
  }

  public accepts(action: Action): boolean {
    return this._transitions.some((t) => t.isValid(action));
  }

  public move(action: Action): State {
    if (!this.accepts(action)) {
      throw new Error(`Cannot transition ${this.name} through ${action}`);
    }
    return this._transitions.filter((t) => t.isValid(action))[0]._to;
  }

  getAcceptableActions(): Action[] {
    return [...this._transitions.map((t) => t.getAction())];
  }
}

export = State;
