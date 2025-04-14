import cardFlags from '../../assets/images/card-flags/bandeiras-de-cartao-de-credito-logo.png'
import senffCardFlag from '../../assets/images/card-flags/senff.png'

const AcceptedFlagsModal = () => {
    return (
        <div className='flex flex-col items-center p-3 m-3 h-80 z-40 bg-white'>
            <h1>Bandeiras com parcelamento em até 10x <b>sem juros</b>:</h1>
            <img className='w-90' src={cardFlags}/>
            <h1 className='mt-3'>Bandeira com parcelamento em até 10x <b>com juros de 10%</b>:</h1>
            <img className='w-40' src={senffCardFlag}/>
        </div>
    )
}

export default AcceptedFlagsModal
