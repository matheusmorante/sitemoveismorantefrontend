import img4 from './images/08764b88e385f92e01f8aee3f6849338.jpeg';
import img2 from './images/48ceef17dc7648e5e25047df1eb445b4.jpeg';
import img1 from './images//9c44f27c5ff59503606891dcd0c2e1db.jpeg';
import img3 from './images/b179bc9580494bfff7d67510cd633ecb.jpeg';
import img5 from './images/bb03cfcd084b34fed3093994b45a8e58.jpeg';
import img6 from './images/daa6be14041aa919f58cea6167e8eda7.jpeg';

import { Product } from '../../../../types/productsCatalog.type';

const estanteOpen: Product = {
  id: 38,
  title: 'Estante Multiuso 4 Prateleiras Open Faimec',
  categoryId: 25,
  colors: [
    {name: 'Canela', linkedImages: [img1, img3, img6]},
    {name: 'Branco', linkedImages: [img4, img2, img5]}
  ],
  images: [img1, img2, img3, img4, img5, img6],
  pricing: {
    price: 249,
    paymentDiscountPercent: 5,
  },

  description: `
Perfeita para as cozinhas pequenas e com pouca área útil. A Fruteira Regia com 2 Cestos e 1 Gaveta - Móveis Fiorello, é ideal para dar apoio ao ambiente, conta com um gavetas e dois cestos, perfeita para armazenas suas frutas. Dimensões do Produto montado:

bObservações:
- Gaveta com corrediças metálicas;
- Pés em PVC e puxadores em ABS;`,
  dimensions: 'Altura: 89,5 cm Largura: 38 cm Profundidade: 39 cm',
};

export default estanteOpen;
