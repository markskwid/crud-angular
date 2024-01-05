import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as DataActions from '../store/app.action';
interface AppState {
  data: {
    data: [];
  };
}

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
})
export class IndexPageComponent implements OnInit {
  data$: Observable<any[]> = this.store.select(
    (state: AppState) => state.data.data
  );

  constructor(private dataService: DataService, private store: Store) {}

  customers: { id: number; name: string; email: string; contact: string }[] =
    [];
  isError: boolean = false;
  displayStyle: boolean = false; // meaning on the grid style
  isShow: boolean = false;

  setGrid() {
    this.displayStyle = false;
  }

  setTable() {
    this.displayStyle = true;
  }
  ngOnInit() {
    this.dataService.tryFetch().subscribe({
      next: (data) => {
        this.store.dispatch(DataActions.setData({ data: data }));
      },
    });
    // this.dataService.getSubject().subscribe({
    //   next: (data) => {
    //     this.customers = [...data];
    //   },
    //   error: (error) => console.log(error),
    // });
  }

  openModal() {
    this.dataService.openModal();
  }
}
