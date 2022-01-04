import { Component, OnInit } from '@angular/core';
import { UserService } from '../../auth/user/user.service';
import { MascotasService } from '../mascotas.service';
import { Mascotas } from '../mascota';
import { switchMap, Observable } from 'rxjs';

@Component({
  selector: 'app-lista-mascotas',
  templateUrl: './lista-mascotas.component.html',
  styleUrls: ['./lista-mascotas.component.css'],
})
export class ListaMascotasComponent implements OnInit {
  mascotas$!: Observable<Mascotas>;

  constructor(
    private userService: UserService,
    private mascotasService: MascotasService
  ) {}

  ngOnInit(): void {
    // this.userService.returnUsuario().subscribe((usuario) => {
    //   const userName = usuario.name ?? '';
    //   this.mascotasService.listaDeUsuario(userName).subscribe((mascotas) => {
    //     console.log(mascotas);
    //     this.mascotas = mascotas;
    //   });
    // });

    this.mascotas$ = this.userService.returnUsuario().pipe(
      switchMap((usuario) => {
        const userName = usuario.name ?? '';
        return this.mascotasService.listaDeUsuario(userName);
      })
    );
  }
}
