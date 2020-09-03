import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../models/employee.model';

@Pipe({
  name: 'employeeFilter'
})
export class EmployeeFilterPipe implements PipeTransform {

  transform(list: Employee[], nombre: String, cargo: String, documento: String, tipo_de_documento: String): Employee[] {
    list=[... nombre ? list.filter(employee =>  employee.nombre.toLowerCase().includes(nombre.toLowerCase().toString())): list];
    list=[... cargo ? list.filter(employee =>  employee.cargo.toLowerCase().includes(cargo.toLowerCase().toString())): list];
    list=[... documento ? list.filter(employee =>  employee.documento.includes(documento.toString())): list];
    list=[... tipo_de_documento ? list.filter(employee =>  employee.tipo_de_documento.toLowerCase().includes(tipo_de_documento.toLowerCase().toString())): list];
    return list;
  }

}
