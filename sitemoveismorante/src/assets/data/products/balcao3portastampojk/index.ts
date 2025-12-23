import { Product } from '../../../../types/productsCatalog.type';
import img5 from './images/18813571cdc524575ae0c8f561621025 (1).jpeg';
import img2 from './images/332bb2f34a8403dbac9c0ae54f054297 (1).jpeg';
import img3 from './images/357a192f55beb9cbc7b3174f8ff9cd5d.jpeg';
import img4 from './images/357a192f55beb9cbc7b3174f8ff9cd5d.jpeg';
import img1 from './images/cc85ca6f2c009d343d10daad030f49dd (1).jpg';
import img6 from './images/e0f549f99b681888b2aa69ca62f85075.jpeg';
import img7 from './images/eb0d52a564fda3849c3c38d1d20e9b00.jpeg';

const balcão3PortasLine:  Product = {
  id: 30,
  title: 'Balcão 3 Portas 1 Gaveta 150cm com Tampo Line',
  categoryId: 15,
  images: [img1, img2, img3, img4, img5, img6, img7],
  pricing: {
    promotionalPrice: 449,
    price: 649,
    paymentDiscountPercent: 5,
  },
  description: `
Produzido com MDP de 15 mm., tampo de 1500mm, três portas e uma gaveta, prateleira interna, dobradiças e corrediças telescópicas 100% metálicas. Pés reguláveis em plástico resistente. Acabamento em pintura com aplicação de textura sensível ao toque e secagem em luzes UV.
  `,
  dimensions: '(A x L x P) 86cm x 150cm x 53.3',
};

export default balcão3PortasLine;
