import { Router} from 'express';
import charController from '../controllers/charController';

export const charRoute = Router();

charRoute.get('/characters', charController.listChars);  // Rota para listar todos os personagens
// charRoute.post('/character', charController.createChar); // Rota para criar um personagem
charRoute.put('/character/id', charController.updateChar); // Rota para atualizar um personagem
// charRoute.delete('/character', charController.deleteChar);