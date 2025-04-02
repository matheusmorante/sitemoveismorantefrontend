import bancada1180 from './BANCADA 1180';
import bancada1285 from './BANCADA 1285-1315';
import bancadaAustin from './BANCADA AUSTIN';
import bancadaToledo from './BANCADA TOLEDO';
import cozinhaJully from './COZINHA C JULLY';
import cozinhaTokyo from './Cozinha Tokyo';
import guardaRoupaLasVegasCastanho from './GUARDA ROUPA LAS VEGAS';
import guardaRoupaLyonBranco from './GUARDA ROUPA LYON';
import guardaRoupaMarselha from './GUARDA ROUPA MARSELHA';
import guardaRoupaMiami from './GUARDA ROUPA MIAMI';
import guardaRoupaLasVegasOffWhite from './guardaroupalasvegas';
import mesaBari from './MESA BARI';
import multiusoCastro from './MULTIUSO CASTRO';
import penteadeiraGala from './PENTEADEIRA GALA';

export interface Product {
    id: number;
    title: string;
    images: string[];
    price: number;
    prevPrice: number | null;
    description: string;
    dimensions?: string;
}

export const productsData: Product[] = [
    bancada1180,
    bancada1285,
    guardaRoupaLasVegasCastanho,
    penteadeiraGala,
    multiusoCastro,
    bancadaAustin,
    cozinhaJully,
    bancadaToledo,
    mesaBari,
    cozinhaTokyo,
    guardaRoupaLasVegasOffWhite,
    guardaRoupaLyonBranco,
    guardaRoupaMarselha,
    guardaRoupaMiami
]
