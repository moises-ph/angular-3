import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  users: any;

  constructor(public service: UsuariosService) { }

  ngOnInit(): void {

  }

  AllUsers():void{
    this.service.getUsers().subscribe(data=> this.users = data[0].Nombres);
  }

}
