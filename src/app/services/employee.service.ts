import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  selectedEmployee: Employee;
  employees: Employee[];
  //local
  //  readonly URLEMP = 'http://localhost:3200/api/employees';
  //heroku
  readonly URLEMP = '/api/employees';

  constructor(private http: HttpClient) {
    this.selectedEmployee = new Employee();
  }

  postEmployee(employee: Employee) {
    return this.http.post(this.URLEMP, employee);
  }

  getEmployees() {
    return this.http.get(this.URLEMP);
  }
  getAlumno(_id: string) {
    return this.http.get(this.URLEMP + `/${_id}`);
  }

  putEmployee(employee: Employee) {
    return this.http.put(this.URLEMP + `/${employee._id}`, employee);
  }

  deleteEmployee(_id: string) {
    return this.http.delete(this.URLEMP + `/${_id}`);
  }
}
