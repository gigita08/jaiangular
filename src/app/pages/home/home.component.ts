import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  jaiForm: FormGroup;

  constructor(private fb: FormBuilder, private route: Router) {
    // Configuración del formulario
    this.jaiForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      comments: ['']
    });
  }

  // Método para manejar la navegación
  irApagina(url: string): void {
    console.log(url);
    this.route.navigate([url]);
  }

  // Método para manejar el envío del formulario
  handleSubmit() {
    if (this.jaiForm.valid) {
      console.log('Formulario enviado:', this.jaiForm.value);
    } else {
      console.log('Formulario inválido');
    }
  }
}
