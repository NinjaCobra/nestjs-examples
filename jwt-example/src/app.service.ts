import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return { message: "Tudo ok por aqui!" };
  }

  getClientes() {
    console.log("Retornou todos clientes!");
    return [{ id: 1, nome: 'luiz' }];
  }
}
