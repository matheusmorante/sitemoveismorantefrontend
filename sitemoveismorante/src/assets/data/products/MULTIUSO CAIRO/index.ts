import img1 from './images/232.jpeg';
import img2 from './images/3333.jpeg';
import img3 from './images/343.jpeg';
import img4 from './images/5454.jpeg';

const multiusoCairo = {
  id: 27,
  title: 'Multiuso Cairo para Forno',
  categoryId: 22,
  colors: [
    {name: 'Branco', linkedImages: [img1, img2]},
    {name: 'Freijó/Baunilha', linkedImages: [img3, img4]}
  ],
  images: [img1, img2, img3, img4],
   pricing: {
    price: 299,
  paymentDiscountPercent: 5,
  },
  
  description: `A Mesa de Computador Bari é ideal para quem busca um ambiente organizado e funcional, seja no escritório ou no home office. Seu design clean permite que itens essenciais, como materiais de papelaria e notebook, fiquem sempre ao alcance. Produzida 100% em MDP com acabamento em pintura UV, oferece durabilidade e resistência. Além disso, sua altura ergonômica proporciona conforto para o dia a dia, tornando as tarefas mais produtivas e agradáveis.`,
  dimensions: '(A x L x P) 75cm x 84,5cm x 45,2cm',
};

export default multiusoCairo;
