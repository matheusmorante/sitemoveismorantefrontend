const Footer = () => {
  return (
    <footer
      className="flex flex-col items-center text-center justify-center py-5
             bg-red-400 gap-4 "
    >
      <div className="text-xl">Móveis Morante</div>
      <div>Astorga, 489, Guaraituba, Colombo - PR - 83410090</div>
      <div id="contact" className="flex gap-7 text-4xl">
        <a href="https://wa.me/554197493547 ">
          <i className="bi bi-whatsapp" />
        </a>
        <a href="https://www.instagram.com/moveismorante/">
          <i className="bi bi-instagram" />
        </a>
        <a href="https://www.facebook.com/moveismorante">
          <i className="bi bi-facebook" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
