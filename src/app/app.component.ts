import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  jaiForm: FormGroup;
  name: FormControl;
  email: FormControl;
  comments: FormControl;

  constructor() {
    // Agregar el validador 'required' para hacer los campos obligatorios
    this.name = new FormControl('', [Validators.required]);
    this.email = new FormControl('', [Validators.required, Validators.email]); // También validamos que el email tenga formato correcto
    this.comments = new FormControl('', [Validators.required]);

    this.jaiForm = new FormGroup({
      name: this.name,
      email: this.email,
      comments: this.comments
    });
  }

  handleSubmit(): void {
    if (this.jaiForm.invalid) {
      // Si el formulario no es válido, muestra la alerta de campos incompletos
      alert('Por favor, completa todos los campos obligatorios.');
      return;
    }

    // Si el formulario es válido, muestra una alerta con los datos del formulario
    const formData = this.jaiForm.value;
    alert(`Información completada:\nNombre: ${formData.name}\nCorreo: ${formData.email}\nComentarios: ${formData.comments}`);
    console.log(formData);
  }
}
