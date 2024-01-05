import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-grid-display',
  templateUrl: './customer-list.component.html',
})
export class CustomerListComponent implements OnInit {
  constructor(private dataService: DataService) {}
  @Input() data: { id: string; name: string; email: string; contact: string }[];

  ngOnInit() {}

  handleDelete(id: string) {
    this.dataService.deleteCustomer(id);
  }

  handleEdit(param: {
    id: string;
    name: string;
    email: string;
    contact: string;
  }) {
    this.dataService.openModal();
    this.dataService.setEditData(param);
  }
}
