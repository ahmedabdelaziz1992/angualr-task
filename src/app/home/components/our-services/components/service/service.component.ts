// tslint:disable-next-line: variable-name
import { Component, OnInit, Input } from '@angular/core';
import { Service } from '../../models/service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html'
})
export class ServiceComponent implements OnInit {
  @Input('service')
  private _service: Service;
  public get service(): Service {
    return this._service;
  }
  public set service(value: Service) {
    this._service = value;
  }

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  onRemove(id: number) {
    this.dataService.removeService(id);
  }

}
