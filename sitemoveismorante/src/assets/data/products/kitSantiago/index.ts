import img1 from './images/c32771_4401e730f07840efbad2eecf8bb7494b~mv2.jpeg';
import img2 from './images/c32771_6bcf0de6261e456db9d11c420832d756~mv2.jpeg';
import img3 from './images/c32771_6eb8514830fa4ac8b9d1365a7da52e81~mv2.jpeg';
import img4 from './images/c32771_c19d17cb7952447680349a3ce6d764f5~mv2.jpeg';
import img5 from './images/c32771_ddb73824cee247ceaeda555105a36dd3~mv2c32771_4401e730f07840efbad2eecf8bb7494b~mv2.jpeg';

const kitSantiago = {
  id: 35,
  title: 'Kit de Cozinha Santiago',
  categoryId: 24,
  images: [img1, img2, img3, img4, img5],
  colors: [
    {name: 'Freijó/Baunilha', linkedImages: [img1, img2, img4] },
    {name: 'Freijó/Chumbo', linkedImages: [img3, img5, img4] }
  ],
  pricing: {
    price: 449,
    paymentDiscountPercent: 5,
  },
  description: `
Transforme sua cozinha com este elegante armário Santiago.
Este design moderno não só oferece amplo espaço de armazenamento, mas também adiciona um toque de frescor e luminosidade ao ambiente.
Não perca a oportunidade de renovar sua cozinha com este móvel que une beleza e utilidade!
Modelo: Kit Cozinha Santiago;
Material da estrutura: MDP em 12 mm e 15 mm;
Profundidade inferior: 35,5 cm;
Profundidade superior: 24 cm;
Quantidade de portas: 06 (dobradiças metálicas);
Quantidade de gavetas: 01 (corrediças metálicas);
Medidas interna da gaveta: 53,5 cm(L) x 28,3 cm(P) x 10
`,
  dimensions: '91 cm(L) x 191 cm(A) x 35,5 cm(P)',
};

export default kitSantiago;
