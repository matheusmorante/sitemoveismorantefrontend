

const ContactUs = () => {
    return (
        <div  className='p-3'>
            <h1>Contate-Nos</h1>
            <p>
                Nossa loja fica no endereço:
            </p>
            <p >
                <i className="bi bi-geo-alt-fill"></i>
                Rua Astorga, 489, Guaraituba, Colombo - PR
            </p>
            <p>
                <i className="bi bi-telephone-fill"></i>
                Celular: 41997493547
            </p>
            <div id='contact' className="flex justify-center w-full pt-3 gap-7       text-4xl">
                <a href='#'>
                    <i className="bi bi-whatsapp text-green-400" />
                </a>
                <a href='#'>
                    <i className="bi bi-instagram text-pink-600" />
                </a>
                <a href='#'>
                    <i className="bi bi-facebook text-blue-600" />
                </a>
            </div>
        </div>
    )
}

export default ContactUs
