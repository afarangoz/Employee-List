import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {


 public employees:Employee[];
 public employeeSelected:Employee;
 public nombre:String;
 public documento:String;
 public cargo:String;
 public tipo_de_documento:String;
 
 

  constructor(employeeService:EmployeeService) { 
    this.employees = employeeService.getAllEmployees();
    this.employeeSelected = new Employee();
  }

  ngOnInit(): void {
  }

}
