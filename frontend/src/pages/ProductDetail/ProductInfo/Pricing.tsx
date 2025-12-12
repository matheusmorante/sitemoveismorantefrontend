import { Product } from "../../../types/productsCatalog.type";
import { useState } from "react";
import AcceptedFlagsModal from "../AcceptedFlagsModal";
import CurrencyDisplay from "../../../components/CurrencyDisplay";

const Pricing = ({ product }: { product: Product }) => {
    const { price, promotionalPrice } = product.pricing;
    const [showAcceptedFlags, setShowAcceptedFlags] = useState(false);

    return (
        <>
            <div>
                <h1 className="text-lg">{product?.title}</h1>

                <div className="flex items-center text-center">
                    <span
                        className="flex text-xl items-center
                                     text-green-600 font-medium"
                    >
                        R$ {price}
                    </span>

                    {promotionalPrice && (
                        <span className="text-red-500 line-through text-sm ml-2">
                            R$ {promotionalPrice}
                        </span>
                    )}
                </div>
                <p className="text-sm">
                    Em até <b>10x sem juros</b> de <CurrencyDisplay value={price / 10} /> no
                    cartão de crédito.
                    <span
                        onClick={() => setShowAcceptedFlags(true)}
                        className="ml-2 underline text-blue-500"
                    >
                        Ver bandeiras aceitas.
                    </span>
                </p>
            </div>

            <AcceptedFlagsModal
                isOpen={showAcceptedFlags}
                onClose={() => setShowAcceptedFlags(false)}
            />
        </>
    )
}

export default Pricing