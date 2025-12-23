import img4 from './images/5fe83e3c51489363ad9cfb80deebd1b1.jpeg';
import img2 from './images/45454.jpeg';
import img3 from './images/6b2a4a8b34d7dfdc6d6171022b10e452.jpeg';
import img1 from './images/6f1116f62364f52861be5178a473d64e.jpeg';
import img5 from './images/6f4dce411c220c6e29425874073c8fcc.jpeg';

import { Product } from '../../../../types/productsCatalog.type';

const fruteiraRegia: Product = {
  id: 33,
  title: 'Fruteira Regia com 2 Cestos e 1 Gaveta',
  categoryId: 23,
  colors: [
    {name: 'Dakar/Branco', linkedImages: [img1, img4]},
    {name: 'Branco', linkedImages: [img3, img2, img5]}
  ],
  images: [img1, img2, img3, img4, img4, img5],
  pricing: {
    price: 199,
    paymentDiscountPercent: 5,
  },

  description: `
Perfeita para as cozinhas pequenas e com pouca área útil. A Fruteira Regia com 2 Cestos e 1 Gaveta - Móveis Fiorello, é ideal para dar apoio ao ambiente, conta com um gavetas e dois cestos, perfeita para armazenas suas frutas. Dimensões do Produto montado:

bObservações:
- Gaveta com corrediças metálicas;
- Pés em PVC e puxadores em ABS;`,
  dimensions: 'Altura: 89,5 cm Largura: 38 cm Profundidade: 39 cm',
};

export default fruteiraRegia;
