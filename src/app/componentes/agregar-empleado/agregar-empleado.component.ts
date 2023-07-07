import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-agregar-empleado',
  templateUrl: './agregar-empleado.component.html',
  styleUrls: ['./agregar-empleado.component.css'],
})
export class AgregarEmpleadoComponent {

  formularioEmpleados:FormGroup;

  constructor(public formulario:FormBuilder ) {

    this.formularioEmpleados = this.formulario.group({
      nombre: [''],
      correo: ['']
    })
  }


  enviarDatos(): any {
    console.log('Entro...');
    console.log(this.formularioEmpleados.value);
  }
}
