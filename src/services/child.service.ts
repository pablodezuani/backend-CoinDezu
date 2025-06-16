import { prisma } from '../prisma';

export class ChildService {
  async create(data: any) {
    const child = await prisma.child.create({
      data,
    });
    return child;
  }

  async findAll() {
    return await prisma.child.findMany();
  }

  async findById(id: string) {
    return await prisma.child.findUnique({
      where: { id },
    });
  }

  async update(id: string, data: any) {
    return await prisma.child.update({
      where: { id },
      data,
    });
  }

  async delete(id: string) {
    return await prisma.child.delete({
      where: { id },
    });
  }
}
