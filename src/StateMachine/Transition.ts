import State from './State';
import {Action} from './Action';

export class Transition {
  private readonly _on: Action;
  public readonly _to: State;

  constructor(on: Action, to: State) {
    this._to = to;
    this._on = on;
  }

  public isValid(action: Action): boolean {
    return this._on === action;
  }

  public getAction(): Action {
    return this._on;
  }
}
