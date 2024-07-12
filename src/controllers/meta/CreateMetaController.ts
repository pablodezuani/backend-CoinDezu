import { Request, Response } from 'express';
import { CreateMetaService } from '../../services/CreateMetaService';

class CreateMetaController {
  async handle(req: Request, res: Response) {
    const { name, target_amount, user_id } = req.body;
    const createMetaService = new CreateMetaService();

    try {
      const goal = await createMetaService.execute(name, target_amount, user_id);
      return res.status(201).json(goal);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao adicionar a meta' });
    }
  }
}

export { CreateMetaController };
