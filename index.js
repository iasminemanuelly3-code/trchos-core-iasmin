import { UsuarioFactory } from './src/factories/UsuarioFactory.js';
import { GerenciadorOS } from './src/services/GerenciadorOS.js';

// Instância única do GerenciadorOS (Singleton)
const gerenciador = GerenciadorOS.getInstancia();

// Criação de usuários (Factory Method)
const cliente = UsuarioFactory.criarUsuario('CLIENTE', 101, 'Ana', 'ana@email.com', '81999999999');
const tecnico = UsuarioFactory.criarUsuario('TECNICO', 202, 'Carlos', 'carlos@email.com', 'Manutenção');

// Registrar e listar Ordem de Serviço
gerenciador.registrarOS(cliente, tecnico, 'Troca de Tela');

console.log('[SISTEMA] Lista de OS ativas:');
console.log(gerenciador.listarOS());