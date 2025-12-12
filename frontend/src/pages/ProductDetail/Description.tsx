import { Product } from "../../types/productsCatalog.type"

const Description = ({ product }: { product: Product }) => {
    return (
        <div className="mt-3 px-2">
            <h1 className="font-bold text-lg mt-4 lg:text-xl lg:mt-6">
                Descrição
            </h1>
            <p>{product.description}</p>
            <h1 className="mt-3 font-bold text-lg lg:text-xl lg:mt-6">
                Medidas
            </h1>
            <p>{product.dimensions}</p>
        </div>
    )
}

export default Description;