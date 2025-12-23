import img1 from './images//c32771_21fa0fd8abbc48aa8c46d40f42e72fe0~mv2.jpeg';
import img2 from './images/c32771_31e91ae6ad674ed18423037339adf7ab~mv2.jpeg';
import img3 from './images/c32771_414cff8189334e61ae9dbb3eb70a9acc~mv2.jpeg';
import img4 from './images/c32771_62fe8499ce4e4c5ea759605ee5f24c63~mv2.jpeg';
import img5 from './images/c32771_abcc05ea4f2346d69880d8bf51252209~mv2.jpeg';
import img6 from './images/c32771_bd6f6bb2ccf14df7938d953836a9e429~mv2.jpeg';
import img7 from './images/c32771_d305db0366824f1d88d230c7d848c1fc~mv2.jpeg';
import { Product } from '../../../../types/productsCatalog.type';

const cozinhaFlorenca: Product = {
  id: 32,
  title: 'Cozinha Modulada 6 Peças em MDF Florença',
  categoryId: 19,
  colors: [
    {name: 'Angelin/Cinza', linkedImages: [img1, img4, img6, img7]},
    {name: 'Canary/Off White', linkedImages: [img3, img2, img5, img6]}
  ],
  images: [img1, img2, img2, img3, img4, img4, img5, img6, img7],
  pricing: {
    price: 3599,
    promotionalPrice: 3299,
    paymentDiscountPercent: 5,
  },

  description: `A Cozinha Tokyo oferece praticidade e resistência, contando com espaço para micro-ondas ou forno elétrico e 2 gavetas com corrediças metálicas super resistentes. Sua estrutura é feita inteiramente em MDP de 12mm e 15mm, garantindo firmeza e durabilidade. Com um design moderno na cor Montana/Canela, possui 9 portas que proporcionam amplo espaço de armazenamento. Não acompanha tampo nem fundo.`,
  dimensions: '198 cm de altura, 184 cm de largura e 51 cm de profundidade',
};

export default cozinhaFlorenca;
