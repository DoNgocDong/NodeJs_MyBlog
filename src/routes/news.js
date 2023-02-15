import express from 'express';
import NewsController from '../controllers/NewsController.js';

const newsRouter = express.Router();

newsRouter.use('/:course', NewsController.course);
newsRouter.use('/', NewsController.index);

export default newsRouter;
