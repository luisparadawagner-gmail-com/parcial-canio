import { Component, OnInit } from '@angular/core';
import { Alumno } from './../clases/Alumno';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

interface Materia {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {

  param : any;
  alumno : any;
  alumnoForm : FormGroup;

  materias: Materia[] = [
    {value: 'mongo-0', viewValue: 'MongoDB'},
    {value: 'java-1', viewValue: 'Javascript'},
    {value: 'node-2', viewValue: 'NodeJS'}
  ];

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    debugger;		
    this.param = this.route.snapshot.params;

    if (Object.keys(this.param).length) {
      this.alumno = this.param;
    } 

    this.initForm(this.alumno);
  }

  nombreControl = new FormControl('User');

  initForm(modificado : Alumno){   
    this.alumnoForm = this.fb.group({
        nombre : [modificado ? modificado.nombre:'', Validators.required],
        apellido : [modificado ? modificado.apellido: '', Validators.required],
        edad : [modificado ? modificado.edad:''],
        materias : [modificado ? modificado.materia:''],
        cursada : [modificado ? modificado.cursada:'']
    });
  }

  enviarDatos(){
    let alumnoTemp : Alumno = this.alumnoForm.value;
    this.router.navigate(['planilla', alumnoTemp]);
    debugger;
  };

}
