import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { Service } from './models/service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-our-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  services: Array<object>;
  submitted: boolean = false;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getAllServices().subscribe(res => {
      this.services = res;
    });
  }

  onSubmit(form: NgForm) {
    this.submitted = true;
    if(form.valid) {
      const body: Service = {
        id: +this.dataService.getLength() + 1,
        title: form.value.title,
        link: form.value.link,
        summary: form.value.summary
      };
      this.dataService.addService(body);
    }
  }

}
