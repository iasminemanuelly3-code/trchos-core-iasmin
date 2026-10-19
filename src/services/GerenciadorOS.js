export class GerenciadorOS {
  static #instancia = null;

  constructor() {
    if (GerenciadorOS.#instancia) {
      return GerenciadorOS.#instancia;
    }
    this.ordensServico = [];
    console.log("[SINGLETON] Instância única do GerenciadorOS inicializada.");
    GerenciadorOS.#instancia = this;
  }

  static getInstancia() {
    if (!GerenciadorOS.#instancia) {
      GerenciadorOS.#instancia = new GerenciadorOS();
    }
    return GerenciadorOS.#instancia;
  }

  registrarOS(cliente, tecnico, descricao) {
    const novaOS = {
      id: this.ordensServico.length + 1,
      cliente: cliente.nome,
      tecnico: tecnico.nome,
      status: "ABERTA",
      descricao: descricao
    };
    this.ordensServico.push(novaOS);
    console.log(`[SISTEMA] Ordem de Serviço #${novaOS.id} registrada com sucesso!`);
    return novaOS;
  }

  listarOS() {
    return this.ordensServico;
  }
}