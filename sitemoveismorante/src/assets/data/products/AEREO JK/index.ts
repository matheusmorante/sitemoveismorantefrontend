import img1 from './images/2.jpeg';
import img2 from './images/4.jpeg';
import img3 from './images/6.jpeg';
import img4 from './images/c32771_03243a9517fa4488b818027b23e63567~mv2.jpeg';


const aereoPopVenezaDacheri = {
  id: 26,
  title: 'Aéreo Pop/Veneza 3 Portas Dacheri',
  categoryId: 17,
  images: [img1, img2, img3, img4],
  colors: [
    {name: 'Branco', linkedImages: [img2, img3]},
    {name: 'Freijó/Baunilha', linkedImages: [img1, img3]},
    {name: 'Freijó/Chumbo', linkedImages: [img4, img3]}
    ],
   pricing: {
    price: 299,
    paymentDiscountPercent: 5,
  },
 
  description: `
Armário aéreo, 3 portas, 4 opções de cores, MDP 15mm e 12mm, Suporte de Peso de até 5 kg, novo.
  `,
  dimensions: 'Altura: 54 cm | Largura: 120 cm | Profundidade: 29 cm ',
};

export default aereoPopVenezaDacheri;
