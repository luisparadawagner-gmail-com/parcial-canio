import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicios/servicio.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlumnoComponent } from './../alumno/alumno.component';
import { Alumno } from './../clases/Alumno';

@Component({
  selector: 'app-planilla',
  templateUrl: './planilla.component.html',
  styleUrls: ['./planilla.component.css']
})
export class PlanillaComponent implements OnInit {

  displayedColumns: string [] = [ 'nombre' , 'apellido' , 'edad' , 'materia', 'cursada', 'modificar'];    
  dataSource : any[] = [];

  param : any;

  constructor(private servicioService : ServicioService, private route: ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    this.getAlumnos();
  }

  getAlumnos(){
    this.servicioService.getAlumnos().subscribe((alumnos)=>{
      debugger;
      this.dataSource = alumnos;

      this.param = this.route.snapshot.params;
      if (Object.keys(this.param).length > 0){
        this.recibirAlumno(this.param);
      }
    });
  }

  recibirAlumno(alumno : AlumnoComponent){
    debugger;
    this.dataSource.push(alumno);
  }

  editar(alumno) {	
    let alumnoTemp : Alumno = {
      nombre : alumno.nombre,
      apellido : alumno.apellido,
      edad : alumno.edad,
      materia : alumno.materia,
      cursada : alumno.cursada
    }

    this.router.navigate(['/alumno-component', alumno]);
    debugger;	
  }

}
