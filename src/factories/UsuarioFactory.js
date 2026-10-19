import { Cliente, Tecnico } from '../models/Usuario.js';

export class UsuarioFactory {
  static criarUsuario(tipo, id, nome, email, extra) {
    if (tipo.toUpperCase() === 'CLIENTE') {
      console.log(`[FACTORY] Criando Usuário Tipo: CLIENTE... > Objeto 'Cliente' criado (ID: ${id}, Nome: ${nome}).`);
      return new Cliente(id, nome, email, extra);
    } else if (tipo.toUpperCase() === 'TECNICO') {
      console.log(`[FACTORY] Criando Usuário Tipo: TECNICO... > Objeto 'Tecnico' criado (ID: ${id}, Nome: ${nome}).`);
      return new Tecnico(id, nome, email, extra);
    } else {
      throw new Error("Tipo de usuário inválido.");
    }
  }
}