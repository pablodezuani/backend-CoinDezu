import { Request, Response } from 'express';
import { ChildService } from '../../services/child.service';


const childService = new ChildService();

export const ChildController = {
  async create(req: Request, res: Response) {
    try {
      const child = await childService.create(req.body);
      res.status(201).json(child);
    } catch (err) {
      res.status(400).json({ error: 'Erro ao criar criança', details: err });
    }
  },

  async getAll(req: Request, res: Response) {
    const children = await childService.findAll();
    res.json(children);
  },

  async getById(req: Request, res: Response) {
    const { id } = req.params;
    const child = await childService.findById(id);
    if (!child) return res.status(404).json({ error: 'Criança não encontrada' });
    res.json(child);
  },

  async update(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const updated = await childService.update(id, req.body);
      res.json(updated);
    } catch (err) {
      res.status(400).json({ error: 'Erro ao atualizar criança', details: err });
    }
  },

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    try {
      await childService.delete(id);
      res.status(204).send();
    } catch (err) {
      res.status(400).json({ error: 'Erro ao deletar criança', details: err });
    }
  },
};
