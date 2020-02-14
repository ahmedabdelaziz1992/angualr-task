import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Service } from '../models/service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {
  data: Array<object> = [
    {
      id: 1,
      title: 'industrial automation',
      link: 'www.google.come',
      // tslint:disable-next-line: max-line-length
      summary: 'It is the use of various control systems for operating equipment such as machinery, processes in factories, boilers and heat treating ovens, switching on telephone networks, steering and stabtilization of ships, aircraft and other applications and vehicles with minimal or reduced human intervention, with some processes have been completely automated.'
    },
    {
      id: 2,
      title: 'digital transformation',
      link: 'www.google.come',
      // tslint:disable-next-line: max-line-length
      summary: 'It is the profound transformation of business and organizational activities, processes, competencies and models to fully leverage the changes and opportunities of a mix of digital technologies and their accelerating impact across society in a strategic and prioritized way, with present and future'
    },
    {
      id: 3,
      title: 'outsourcing',
      link: 'www.google.come',
      // tslint:disable-next-line: max-line-length
      summary: 'It is a practice used by different companies to reduce costs by transferring portions of work to outside suppliers rather than completing it internally. Outsourcing is an effective cost-saving strategy when used properly.'
    }
  ];

  constructor(private http: HttpClient) {
  }

  getAllServices() { // : Observable<Service[]>

    // const url = `http://localhost:4200/assets/api/data.json`;
    // return this.http.get<Service[]>(url);

    return of(this.data);
  }

  addService(object: Service) {
    this.data.push(object);
  }

  removeService(id: number) {
    this.data.map((item, i) => {
      if(item['id'] == id) {
        this.data.splice(i, 1);
      }
    });
  }

  getLength() {
    return Number(this.data.length);
  }

}