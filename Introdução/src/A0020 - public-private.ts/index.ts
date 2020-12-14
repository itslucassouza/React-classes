export class Empresa {
  public readonly nome: string;
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;


  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  public adicionaColaborador(colaborador: Colaborador):void {
    this.colaboradores.push(colaborador);
  }

   public mostrarColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }

  public getNome(): string{
    return this.nome;
  }
}

export class Colaborador{
  constructor(public readonly nome: string,
    public readonly sobrenome: string,)
    {}
};

const empresa1 = new Empresa('Udemy', '11.11.111/0001-11');
const colaborador1 = new Colaborador('Lucas', 'Souza');


empresa1.adicionaColaborador(colaborador1)

console.log(empresa1)
