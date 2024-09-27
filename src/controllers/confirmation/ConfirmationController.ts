import { Request, Response } from 'express';
import { CreateConfirmationService } from '../../services/confirmation/confirmationService';

class ConfirmationController {
  async create(req: Request, res: Response) {
    const { nome, tipo_presenca, acompanhantes, aceita_termos } = req.body;

    const createConfirmationService = new CreateConfirmationService();

    try {
      const confirmation = await createConfirmationService.execute({
        nome,
        tipo_presenca,
        acompanhantes,
        aceita_termos,
      });

      return res.status(201).json({
        message: "Confirmação de presença salva com sucesso!",
        confirmation,
      });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
}

export { ConfirmationController };
