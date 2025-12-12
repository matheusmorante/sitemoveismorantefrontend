import { Dispatch, SetStateAction } from "react";
import QuantityInput from "../../../../components/QuantityInput";

interface Props {
    quantity: number,
    setQuantity: Dispatch<SetStateAction<number>>
}

const QuantityControl = ({ quantity, setQuantity }: Props) => {

    return (
        <div className="flex border-2 p-2 justify-between">
            <button onClick={() => setQuantity(prev => Math.max(1, prev - 1))}>
                -
            </button>

            <QuantityInput
                quantity={quantity}
                onChange={(value: number) => setQuantity(value)}
            />
            <button
                onClick={() => setQuantity(prev => prev + 1)}>+</button>
        </div>
    )
}

export default QuantityControl