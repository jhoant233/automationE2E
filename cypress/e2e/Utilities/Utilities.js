import { faker } from '@faker-js/faker'

export class Utilities {


  generateFullNameRandom() {
    let name = faker.person.fullName()
    return name
  }

  obtainMonth() {
    const hoy = new Date();
    const mes = String(hoy.getMonth() + 1).padStart(2, '0');
    return mes;
  }

  obtainYear() {
    const hoy = new Date();
    const anio = hoy.getFullYear();
    return anio

  }

  generateRandomNumber() {
    let numero = Math.floor(Math.random() * (1000 - 1 + 1)) + 1
    return numero
  }


}

