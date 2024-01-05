import { Subject, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private toast = new BehaviorSubject<any>(null);

  getToastState() {
    return this.toast.asObservable();
  }

  show(message: string = '', success: boolean = false, error: boolean = false) {
    this.toast.next({ message, success, error });
  }

  hide() {
    this.toast.next(null);
  }
}
