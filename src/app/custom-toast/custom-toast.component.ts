import { Component, OnInit, OnDestroy } from '@angular/core';
import { ToastService } from './toast.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-custom-toast',
  template: `<div
    *ngIf="isShow"
    [ngClass]="isError ? 'error-toast' : 'toast'"
    class="flex"
  >
    <img
      src="../assets/images/check.svg"
      class="h-auto w-5 mr-1"
      *ngIf="!isError"
    />
    {{ message }}
  </div>`,
})
export class CustomToastComponent implements OnInit, OnDestroy {
  isShow: boolean = false;
  isError: boolean = false;
  message: string;

  toastSubscription: Subscription;
  constructor(private toastService: ToastService) {}

  ngOnInit() {
    this.toastSubscription = this.toastService.getToastState().subscribe({
      next: (data) => {
        if (data) {
          this.isError = data.error;
          this.message = data.message;
          this.isShow = true;

          setTimeout(() => {
            this.toastService.hide();
            this.isShow = false;
          }, 2000);
        }
      },
    });
  }

  ngOnDestroy() {
    this.toastSubscription.unsubscribe();
  }
}
