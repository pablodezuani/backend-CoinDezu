import prismaClient from '../prisma/index'; // Verifique se o caminho está correto


class CreateMetaService {
  async execute(name: string, target_amount: number, user_id: string) {
    const goal = await prismaClient.goal.create({
      data: {
        name,
        target_amount,
        saved_amount: 0, // Inicializa como 0
        user_id,
      },
    });
    return goal;
  }
}

export { CreateMetaService };
