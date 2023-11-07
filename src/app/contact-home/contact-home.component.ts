import { Component, OnInit } from '@angular/core';

export interface Contact {
  id: number;
  name: string;
  sname1: string;
  sname2: string;
  phonenumber: number;
  email: string;
}

const ELEMENT_DATA: Contact[] = [
  {id: 1, name: 'Manolito', sname1: 'Chao', sname2: 'Pérez', phonenumber: 666555444, email: 'manu6767@gmail.com'},
  {id: 2, name: 'Eugenio', sname1: 'Pérez', sname2: 'Rivas', phonenumber: 888555111, email: 'ol456@gmail.com'},
  {id: 3, name: 'Gumersindo', sname1: 'Sindo', sname2: 'Pindo', phonenumber: 685945214, email: 'trambolico@gmail.com'},
  {id: 4, name: 'El Zanahorio', sname1: 'Pérez', sname2: 'Varela', phonenumber: 668945212, email: 'olakase@gmail.com'},
  {id: 5, name: 'Artista', sname1: 'Pérez', sname2: 'Pérez', phonenumber: 648522169, email: 'akidejajas@gmail.com'},
  {id: 6, name: 'Máquina', sname1: 'Crack', sname2: 'Pérez', phonenumber: 789456123, email: 'olahh_e@gmail.com'},
  {id: 7, name: 'Nicolai', sname1: 'García', sname2: 'Dimitri', phonenumber: 987654321, email: 'ollakase@gmail.com'},
  {id: 8, name: 'Mariano', sname1: 'Mariánez', sname2: 'Pérez', phonenumber: 211455877, email: 'marianico@gmail.com'},
  {id: 9, name: 'Emiliano', sname1: 'Pérez', sname2: 'Emiliánez', phonenumber: 129654835, email: 'olakases@gmail.com'},
  {id: 10, name: 'Jose', sname1: 'Batallas', sname2: 'Pérez', phonenumber: 621866945, email: 'eljosito@gmail.com'},
  {id: 11, name: 'Joshua', sname1: 'Pérez', sname2: 'Pérez', phonenumber: 668426551, email: 'yosu@gmail.com'},
];

@Component({
  selector: 'app-contact-home',
  templateUrl: './contact-home.component.html',
  styleUrls: ['./contact-home.component.css'],
})
export class ContactHomeComponent {

  displayedColumns: string[] = ['id', 'name', 'sname1', 'sname2', 'phonenumber', 'email'];
  contacts = ELEMENT_DATA;

}
