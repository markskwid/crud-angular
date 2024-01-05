import { Component, OnInit, HostListener, Input } from '@angular/core';
import { DataService } from '../data.service';
import { Subscription } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent implements OnInit {
  myForm: FormGroup;
  isModalOpen: boolean = false;
  @Input() isOpen: boolean;

  isEdit: boolean = false;
  isSubmitted: boolean = false;
  private userId: string;

  modalSubscription: Subscription;
  editDataSubs: Subscription;

  closeModal() {
    this.dataService.closeModal();
    this.myForm.reset();
    this.dataService.setEditData({});
    this.isSubmitted = false;
  }

  constructor(private dataService: DataService) {}

  onSubmit(event: Event) {
    event.preventDefault();
    this.isSubmitted = true;
    if (this.myForm.valid) {
      if (this.isEdit) {
        //edited state
        const formValue = this.myForm.value;
        this.dataService.updateUser(this.userId, formValue);
        this.closeModal();
      } else {
        //submit form if it is all valid
        const formValue = this.myForm.value;
        this.dataService.addCustomer(formValue);
        this.closeModal();
      }
    } else {
      // handle error on form
      console.log('mali');
    }
  }

  clickBackdrop() {
    console.log('workig');
    this.isModalOpen = false;
  }

  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.pattern('^[A-Za-z0-9\\s]+$'),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      contact: new FormControl('', [
        Validators.required,
        Validators.minLength(11),
        Validators.maxLength(11),
        Validators.pattern('^09\\d{9}$'),
      ]),
    });
    this.modalSubscription = this.dataService
      .getModalSubject()
      .subscribe((state) => {
        this.isModalOpen = state;
      });

    this.dataService.getEditsubject().subscribe((data) => {
      if (data?.name && data) {
        this.isEdit = true;
        this.userId = data.id;
        // console.log(data);
        this.myForm.setValue({
          name: data.name,
          email: data.email,
          contact: data.contact,
        });
      } else {
        this.isEdit = false;
      }
    });
  }
}
