import prismaClient from '../../prisma';

interface ConfirmationRequest {
  nome: string;
  tipo_presenca: string;
  acompanhantes?: string[];
  aceita_termos: boolean;
}

class CreateConfirmationService {
  async execute({ nome, tipo_presenca, acompanhantes, aceita_termos }: ConfirmationRequest) {
    // Verificar se os termos foram aceitos
    if (!aceita_termos) {
      throw new Error("Você deve aceitar os termos e condições.");
    }

    // Verificar se nome e tipo de presença foram enviados
    if (!nome || !tipo_presenca) {
      throw new Error("Nome e tipo de presença são obrigatórios.");
    }

    // Inserir os dados no banco
    const confirmacao = await prismaClient.confirmacao.create({
      data: {
        nome,
        tipoPresenca: tipo_presenca,
        acompanhantes: acompanhantes ? acompanhantes.join(', ') : null,
        aceitaTermos: !!aceita_termos,
      },
      select: {
        id: true,
        nome: true,
        tipoPresenca: true,
        acompanhantes: true,
        aceitaTermos: true,
      },
    });

    return confirmacao;
  }
}

export { CreateConfirmationService };
