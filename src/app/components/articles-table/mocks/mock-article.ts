import {Article} from "../interfaces/article.interface";

export const mockArticleOne: Article = {
  articleName: 'Pizza Margherita',
  articleWholesaler: 'Pizzeria da Gino',
  orderedQuantity: 5,
  receivedQuantity: 4
};

export const mockArticleTwo: Article = {
  ...mockArticleOne,
  articleName: 'Pizza Prosciutto',
  receivedQuantity: 5
};

export const mockArticleThree: Article = {
  ...mockArticleOne,
  articleWholesaler: 'Pizzeria La Rota',
  orderedQuantity: 9,
  receivedQuantity: 8
};
