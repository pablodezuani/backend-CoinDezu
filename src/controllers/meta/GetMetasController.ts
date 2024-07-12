import { Request, Response } from 'express';
import { GetMetasService } from '../../services/GetMetasService.ts';

class GetMetasController {
  async handle(req: Request, res: Response) {
    const user_id = req.user_id; 

    try {
      const getMetasService = new GetMetasService();
      const metas = await getMetasService.execute(user_id);
      return res.json(metas);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao buscar metas' });
    }
  }
}

export { GetMetasController };