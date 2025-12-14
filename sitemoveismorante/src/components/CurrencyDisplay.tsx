interface Props {
    value: number,
    className?:string
}

const CurrencyDisplay = ({value, className}: Props) => {
    const formatted = value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });

    return <span className={className}>{formatted}</span>;
}

export default CurrencyDisplay