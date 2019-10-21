import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.scss']
})
export class TimesheetComponent implements OnInit {

  private employeeId: number;
  private sub: any;
  timesheets: any;
  tasks: any;
  employees: any;
  editMode: boolean = false;
  disableEdit: boolean = false;
  editField: string;

  constructor(private route: ActivatedRoute,
    private employeeService: EmployeeService) { }

  ngOnInit() {

    this.employeeService.getallTasks().subscribe(data => {
      this.tasks = data;
    });

    this.employeeService.getallemployees().subscribe(data => {
      this.employees = data;

    });

    this.employeeId = this.route.snapshot.params['id'];
    this.refreshTimeSheet();

  }

  onEmployeeChange(empId) {
    this.employeeId = empId;
    this.refreshTimeSheet();
  }

  onEdit() {
    this.editMode = true;
  }

  private refreshTimeSheet() {
    this.employeeService.getEmployeeTimesheetById(this.employeeId).subscribe(data => {
      this.timesheets = data;
    });
  }

  onSaveChanges() {
    console.log(this.timesheets);
    this.employeeService.updateTimeSheet(this.timesheets).subscribe(r => {
      this.editMode = false;
      this.refreshTimeSheet();
    });
  }


  updateSelectList(id: number, property: string, value: number) {
    console.log(value)
    this.timesheets.timeSheetDetailVM[id][property] = value;
  }

  updateList(id: number, property: string, event: any) {
    const editField = event.target.textContent;
    this.timesheets.timeSheetDetailVM[id][property] = editField;
  }

  onAdd() {

    const tempTask = {
      id: 0,
      taskId: 1,
      taskName: "",
      sun: 0,
      mon: 0,
      tue: 0,
      wed: 0,
      thur: 0,
      fri: 0,
      sat: 0
    };

    this.timesheets.timeSheetDetailVM.push(tempTask);
  }

  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }





















}
