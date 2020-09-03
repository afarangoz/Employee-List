import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  public getAllEmployees():Employee[]{
    return this.employees;
  }

  employees:Employee[] = [
    {
      "id": "1",
      "tipo_de_documento": "C.C.",
      "documento": "181278128",
      "nombre": "Pedro Perez",
      "cargo": "Asesor Comercial",
      "lugar_nacimiento": "Bogota",
      "fecha_nacimiento": "14/03/1980",
      "salario": "$3.000.000",
      "tipo_de_Sangre": "A+"
     },
     {
      "id": "2",
      "tipo_de_documento": "C.C.",
      "documento": "82828822",
      "nombre": "Angelica Rodriguez",
      "cargo": "Asesor Comercial",
      "lugar_nacimiento": "Cali",
      "fecha_nacimiento": "14/03/1990",
      "salario": "$2.000.000",
      "tipo_de_Sangre": "A+"
    },
    {
     "id": "3",
     "tipo_de_documento": "C.C.",
     "documento": "109495325",
     "nombre": "Andres Felipe",
     "cargo": "Desarrollador",
     "lugar_nacimiento": "Armenia",
     "fecha_nacimiento": "13/12/1995",
     "salario": "$1.000.000",
     "tipo_de_Sangre": "O+"
    },
    {
     "id": "4",
     "tipo_de_documento": "C.C.",
     "documento": "1096354778",
     "nombre": "Emilia Leguizamon",
     "cargo": "Administrador",
     "lugar_nacimiento": "Manizales",
     "fecha_nacimiento": "31/08/1995",
     "salario": "$3.000.000",
     "tipo_de_Sangre": "O-"
    },
    {
     "id": "5",
     "tipo_de_documento": "C.C.",
     "documento": "41789633",
     "nombre": "Maria Zamora",
     "cargo": "Chef",
     "lugar_nacimiento": "Medellin",
     "fecha_nacimiento": "08/08/1980",
     "salario": "$3.500.000",
     "tipo_de_Sangre": "A-"
    },
    {
     "id": "6",
     "tipo_de_documento": "C.C.",
     "documento": "125698536",
     "nombre": "Juan Jose",
     "cargo": "Arquitecto",
     "lugar_nacimiento": "Pereira",
     "fecha_nacimiento": "01/08/2000",
     "salario": "$2.500.000",
     "tipo_de_Sangre": "A-"
    },
     {
      "id": "7",
      "tipo_de_documento": "C.C.",
      "documento": "125698536",
      "nombre": "David Leguizamon",
      "cargo": "Ingeniero",
      "lugar_nacimiento": "Armenia",
      "fecha_nacimiento": "06/05/1970",
      "salario": "$4.500.000",
      "tipo_de_Sangre": "A-"
    },
    {
     "id": "8",
     "tipo_de_documento": "C.C.",
     "documento": "478965822",
     "nombre": "Adriana Castrillon",
     "cargo": "Diseñadora",
     "lugar_nacimiento": "Pereira",
     "fecha_nacimiento": "02/05/1991",
     "salario": "$3.800.000",
     "tipo_de_Sangre": "O-"
    },
    {
     "id": "9",
     "tipo_de_documento": "C.C.",
     "documento": "56874526",
     "nombre": "Olga Arango",
     "cargo": "Sicóloga",
     "lugar_nacimiento": "Pereira",
     "fecha_nacimiento": "02/05/1968",
     "salario": "$5.800.000",
     "tipo_de_Sangre": "O-"
    },
    {
     "id": "10",
     "tipo_de_documento": "C.C.",
     "documento": "36589547",
     "nombre": "Jaime Villa",
     "cargo": "Analista de pruebas",
     "lugar_nacimiento": "Manizale",
     "fecha_nacimiento": "29/10/1992",
     "salario": "$2.900.000",
     "tipo_de_Sangre": "O-"
    }
 ]
}
