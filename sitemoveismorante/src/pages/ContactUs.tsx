

const ContactUs = () => {
    return (
        <div className=' mt-3 px-2 md:px-20 lg:mt-5 lg:px-80 '>
            <div className="bg-white arround p-4 lg:grid grid-cols-2">
                <div>
                    <h1 className="text-center text-lg">Contate-nos</h1>
                    <p className="mt-4 lg:mt-5 ">
                        <i className="bi bi-geo-alt-fill mr-2 "></i>
                        Rua Astorga, 489, Guaraituba, Colombo - PR
                    </p>
                    <p className="mt-2 lg:mt-5 ">
                        <i className="bi bi-telephone-fill mr-2"></i>
                        Celular: (41) 99749-3547
                    </p>
                    <div id='contact' className="flex w-full justify-center my-5 gap-6 text-4xl
                     lg:mt-5 lg:gap-7 ">
                        <a href='https://wa.me/554197493547 '>
                            <i className="bi bi-whatsapp text-green-400" />
                        </a>
                        <a href='https://www.instagram.com/moveismorante/'>
                            <i className="bi bi-instagram text-pink-600" />
                        </a>
                        <a href='https://www.facebook.com/moveismorante'>
                            <i className="bi bi-facebook text-blue-600" />
                        </a>
                    </div>
                </div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.4043434189716!2d-49.170289523859786!3d-25.35776163003885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce9692d88460b%3A0x3c6a6333567871cb!2sM%C3%B3veis%20Morante!5e0!3m2!1spt-BR!2sbr!4v1744320792791!5m2!1spt-BR!2sbr"
                    className="w-full h-full mt-2 lg:mt-5"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>

        </div>
    )
}

export default ContactUs
