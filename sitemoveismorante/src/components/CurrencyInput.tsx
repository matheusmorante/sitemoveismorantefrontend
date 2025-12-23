import { NumericFormat } from "react-number-format";

interface Props {
    value: string;
    placeholder?: string;
    className?: string;
    onChange: (value: string) => void;
    onBlur?: (value :string) =>void
}

const CurrencyInput = ({ value, placeholder, className, onChange, onBlur }: Props) => {


    return (
        <NumericFormat
            value={value}
            className={className}
            allowNegative={false}
            thousandSeparator="."
            decimalSeparator=","
            placeholder={placeholder}
            prefix="R$ "
            onBlur={() => onBlur?.(value)}
            onValueChange={(values) => {
                onChange(values.value)
            }}
        />
    )
}

export default CurrencyInput