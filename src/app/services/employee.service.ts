import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EmployeeService {
    private baseapi = environment.apiUrl;
    constructor(private http: HttpClient) { }

    getallemployees() {
        return this.http.get(this.baseapi + "/employee/getall");
    }

    getEmployeeTimesheetById(empId: any) {
        return this.http.get(this.baseapi + "/employee/gettimesheetbyemployeeidasync?empId=" + empId);
    }

    updateTimeSheet(timesheet:any){
        return this.http.post(this.baseapi + "/employee/update", timesheet);
    }

    getallTasks(){
        return this.http.get(this.baseapi+ "/employee/getalltasks");
    }
}