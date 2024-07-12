import prismaClient from '../prisma/index';

class GetMetasService {
  async execute(user_id: string) {
    const metas = await prismaClient.goal.findMany({
      where: {
        user_id,
      },
    });
    return metas;
  }
}

export { GetMetasService };
