import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import swal from 'sweetalert';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/service.index';
import { Usuario } from '../models/usuario.model';

declare function init_plugins();

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css']
})

export class RegisterComponent implements OnInit {

  forma: FormGroup;

  constructor(
              private _usuarioService: UsuarioService,
              private _router: Router) { }

  sonIguales( campo1: string, campo2: string) {
    return ( group: FormGroup ) => {
      let pass1 = group.controls[campo1].value;
      let pass2 = group.controls[campo2].value;

      if ( pass1 === pass2 ) {
        return null;
      }
      return {
        sonIguales: true
      };
    };
  }

  ngOnInit() {
    init_plugins();

    this.forma = new FormGroup({
        nombre: new FormControl( null, Validators.required ),
        apellido: new FormControl( null, Validators.required ),
        segundoapellido: new FormControl( null, Validators.required ),
        email: new FormControl( null, [Validators.required, Validators.email] ),
        password: new FormControl( null, Validators.required ),
        password2: new FormControl( null, Validators.required ),
        condiciones: new FormControl( false ),
    }, { validators: this.sonIguales('password', 'password2') } );

/*     this.forma.setValue({
      nombre: 'Test ',
      apellido: 'Teste',
      segundoapellido: 'Testeo',
      email: 'test@test.com',
      password: '1234',
      password2: '1234',
      condiciones: true
    }); */
  }

  registrarUsuario() {
    if ( this.forma.invalid ) {
      return;
    }
    if ( !this.forma.value.condiciones ) {
      swal('Importante!', 'Debe aceptar las condiciones', 'warning');
      return;
    }
    const usuario = new Usuario(
      this.forma.value.nombre,
      this.forma.value.apellido,
      this.forma.value.segundoapellido,
      this.forma.value.email,
      this.forma.value.password,
    );

    this._usuarioService.crearUsuario(usuario)
    .subscribe(
      resp => {
        this._router.navigate(['/login']);
    });

  }

}
