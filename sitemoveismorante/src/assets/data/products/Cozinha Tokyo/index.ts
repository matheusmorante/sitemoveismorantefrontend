import img1 from './images//Photoroom-20240903_233319.png';
import img2 from './images/Dacheri - Ambiente - Cozinha Tokyo - Montana-Avela.jpg';
import img3 from './images//Photoroom-20241113_124444.png';

const cozinhaTokyo = {
  id: 6,
  title: 'Cozinha Compacta Tokyo',
  categoryId: 18,
  images: [img1, img2, img2, img3],
  pricing: {
    price: 1299,
    promotionalPrice: 999,
    paymentDiscountPercent: 5,
  },

  description: `A Cozinha Tokyo oferece praticidade e resistência, contando com espaço para micro-ondas ou forno elétrico e 2 gavetas com corrediças metálicas super resistentes. Sua estrutura é feita inteiramente em MDP de 12mm e 15mm, garantindo firmeza e durabilidade. Com um design moderno na cor Montana/Canela, possui 9 portas que proporcionam amplo espaço de armazenamento. Não acompanha tampo nem fundo.`,
  dimensions: '198 cm de altura, 184 cm de largura e 51 cm de profundidade',
};

export default cozinhaTokyo;
