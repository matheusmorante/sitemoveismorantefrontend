import Labels from "./Labels";
import Values from "./Values";

const Summary = () => {
    return (
        <div className="flex p-2 border-t justify-between">
            <Labels/>
            <Values />
        </div>
    )
}

export default Summary
