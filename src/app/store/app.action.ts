import { createAction, props } from '@ngrx/store';

interface CustomerData {
  id: string;
  name: string;
  email: string;
  contact: string;
}

export const setData = createAction(
  '[Contact] SetData',
  props<{ data: any[] }>()
);

export const addData = createAction(
  '[Contact] AddData',
  props<{
    data: CustomerData;
  }>()
);

export const updateData = createAction(
  '[Contact] UpdateData',
  props<{
    userId: string;
    data: { name: string; email: string; contact: string };
  }>()
);

export const deleteData = createAction(
  '[Contact] DeleteData',
  props<{ userId: string }>()
);
