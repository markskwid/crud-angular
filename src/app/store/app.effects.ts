// import { createEffect, ofType } from '@ngrx/effects';
// import { Actions } from '@ngrx/effects';
// import { DataService } from '../data.service';
// import { Store } from '@ngrx/store';
// import { SET_INITIAL_DATA } from './app.action';
// import {
//   mergeMap,
//   map,
//   catchError,
//   tap,
//   withLatestFrom,
//   switchMap,
// } from 'rxjs/operators';
// import { EMPTY, pipe, of } from 'rxjs';
// import { Injectable } from '@angular/core';
// import * as DataActions from './app.action';
// @Injectable()
// export class ContactEffects {
//   fetchData$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(DataActions.fetchData),
//       switchMap(() =>
//         this.dataService
//           .fetchData()
//           .pipe(map((data) => new DataActions.SetData(data)))
//       )
//     )
//   );

//   // addData$ = createEffect(() =>
//   //   this.actions$.pipe(
//   //     ofType('[Contact] Add Data'),
//   //     mergeMap((action: any) =>
//   //       this.dataService.addCustomer(action.payload.value).pipe(
//   //         // Handle success if needed
//   //         // map(result => ({ type: '[Contact] Add Data Success', result })),
//   //         catchError((error) =>
//   //           of({ type: '[Contact] Add Data Failure', error })
//   //         )
//   //       )
//   //     )
//   //   )
//   // );
//   constructor(private actions$: Actions, private dataService: DataService) {}
// }
