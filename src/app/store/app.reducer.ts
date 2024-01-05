import { Action } from '@ngrx/store';
import * as DataActions from './app.action';

export interface DataState {
  data: any[];
}

export const initialState: DataState = {
  data: [],
};

export function appReducer(state = initialState, action: Action) {
  switch (action.type) {
    case DataActions.setData.type:
      const initialData = (action as any).data;
      return { data: initialData };

    case DataActions.addData.type:
      const newData = (action as any).data;
      return {
        ...state,
        data: [...state.data, { ...newData }],
      };

    case DataActions.updateData.type:
      const userIdToUpdate = (action as any).userId;
      const updatedData = (action as any).data;
      return {
        ...state,
        data: state.data.map((item) =>
          item.id === userIdToUpdate ? { ...item, ...updatedData } : item
        ),
      };

    case DataActions.deleteData.type:
      const userId = (action as any).userId;
      console.log(userId);
      return {
        ...state,
        data: state.data.filter((item) => item.id !== userId),
      };

    default:
      return state;
  }
}
