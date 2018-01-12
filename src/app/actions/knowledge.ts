import { Action } from '@ngrx/store';
import { type } from '../utils';

export const ActionTypes = {
    CHANGE: type('[Knowledge] Change'),
};

export class SearchAction implements Action {
    type = ActionTypes.CHANGE;

    constructor(public payload: any) {}
}

export type Actions
    = SearchAction;