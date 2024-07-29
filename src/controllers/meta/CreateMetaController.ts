import { Request, Response } from 'express';
import { CreateMetaService } from '../../services/CreateMetaService';

class CreateMetaController {
  async handle(req: Request, res: Response) {
    const { name, target_amount } = req.body;
    const user_id = req.user_id; // Obtendo user_id do middleware

    const createMetaService = new CreateMetaService();

    try {
      const goal = await createMetaService.execute(name, target_amount, user_id);
      return res.status(201).json(goal);
    } catch (error) {
      return res.status(400).json({ error: 'Erro ao criar meta' });
    }
  }
}

export { CreateMetaController };
