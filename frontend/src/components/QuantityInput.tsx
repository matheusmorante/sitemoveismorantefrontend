interface Props {
    quantity: number,
    onChange: (value: number) => void
}

const QuantityInput = ({ quantity, onChange }: Props) => {
    return (
        <input
            type="number"
            className=" text-center border rounded appearance-none w-[3em]
                bg-transparent border-none outline-none 
                [&::-webkit-inner-spin-button]:appearance-none
                [&::-webkit-outer-spin-button]:appearance-none
                [-moz-appearance:textfield]"
            value={quantity}
            onChange={e => {
                const value = Math.max(1, Number(e.target.value) || 1);
                onChange(value);
            }}
        />
    )
}

export default QuantityInput