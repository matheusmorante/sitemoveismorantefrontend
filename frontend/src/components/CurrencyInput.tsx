import { NumericFormat } from "react-number-format";

interface Props {
    value: number;
    className?: string;
    onChange: (value: string) => void
}

const CurrencyInput = ({ value, className, onChange }: Props) => {

    return (
        <NumericFormat
            value={value}
            className={className}
            thousandSeparator="."
            decimalSeparator=","
            prefix="R$ "
            onValueChange={(values) => {
                onChange(values.value)
            }}
        />
    )
}

export default CurrencyInput