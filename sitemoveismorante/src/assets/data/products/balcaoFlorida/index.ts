import { Product } from '../../../../types/productsCatalog.type';
import img5 from './images/c32771_159d7c8eb25d404eb44625629ea372e9~mv2.jpeg';
import img2 from './images/c32771_31125aeb37c4486fb53f9e9ed8ef36c2~mv2.jpeg';
import img3 from './images/c32771_3dac1d31d6d14ab5a34b8aeaa25fe30a~mv2.jpeg';
import img4 from './images/c32771_439d7168075e495690ab07e49b4ae2bd~mv2.jpeg';
import img1 from './images/c32771_9bd3f906c2554b3d9c090447f85bde90~mv2.jpeg';
import img6 from './images/c32771_a4613c8282fa427ab848bf6050d2dc25~mv2.jpeg';
import img7 from './images/c32771_bc69606f672c40809936c6b1e1dfee10~mv2.jpeg';
import img8 from './images/c32771_cfa78ccd8880470c9a5025e9fdfab78a~mv2.jpeg';
import img9 from './images/c32771_e032af2d7f1d41cf89b648ded309a9f4~mv2.jpeg';
import img10 from './images/c32771_f9b9c4155f05489099b197e576ff3ef5~mv2.jpeg';

const balcãoFlorida:  Product = {
  id: 31,
  title: 'Balcão para Cooktop Florida',
  categoryId: 20,
  images: [img1, img2, img3, img4, img5, img6, img7, img6,img8, img9, img10],
  pricing: {
    price: 649,
    paymentDiscountPercent: 5,
  },
  description: `
Material da estrutura: MDP;
Quantidade de portas: 01 (dobradiças metálicas);
Com puxador: Sim em plásticos;
Marcação para corte:
Fogão 4 bocas: 50 cm(L) x 36 cm(P);
Fogão 5 bocas: 61 cm(L) x 36 cm(P);
  `,
  dimensions: 'Largura: 80 cm Altura: 87 cm Profundidade: 53 cm',
};

export default balcãoFlorida;
