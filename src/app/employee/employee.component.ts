import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';

@Component({
    selector: 'employee-list',
    templateUrl: 'employee.component.html',
    styleUrls: ['./employee.component.scss']
})

export class EmployeeListComponent implements OnInit {
    employees: any;
    constructor(private router: Router,
        private employeeService: EmployeeService) { }

    ngOnInit() {
        this.employeeService.getallemployees().subscribe(data => {
            this.employees = data;

        });
    }

    goToEmployeeTimesheet(empId: number) {
        console.log(empId);
        this.router.navigateByUrl('employees/' + empId);
    }
}