import { useNavigate } from 'react-router-dom';
import img1 from '../assets/images/brasil-card/brasil-card.jpg';
import img2 from '../assets/images/brasil-card//human-2.png';
import Layout from '../components/Layout';

const CreditCard = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <div className="fixed inset-0 bg-white overflow-auto z-10 pb-4 md:px-20 lg:px-40">
        <i className="ml-1 bi bi-arrow-left text-md" onClick={() => navigate('/')} />
        <div className="p-3">
          <img src={img1} className="w-full" />
          <p className="mt-3">
            O <strong>crediário Brasilcard</strong> é uma forma de pagamento parcelado que funciona
            como um carnê digital. Em vez de pagar à vista, você pode dividir suas compras em{' '}
            <strong>parcelas fixas mensais</strong>, diretamente com a loja, usando o cartão
            Brasilcard.
          </p>

          <p>
            A <strong>análise de crédito</strong> é feita{' '}
            <strong>sem a necessidade de comprovante de renda ou residência</strong>. Basta
            preencher um formulário com as informações solicitadas. Se aprovado, você terá acesso a
            um valor de crédito para compras a partir de <strong>R$400</strong>.
          </p>

          <p>
            Após a aprovação, é feita uma <strong>simulação</strong> para você escolher o número de
            parcelas, que pode variar de
            <strong> 1x a 36x</strong>. O valor mínimo das parcelas depende da sua renda. Os valores
            das parcelas, na simulação, já estarão incluindo o juros.
          </p>

          <img src={img2} className="w-full my-3" />

          <p>
            Além do crédito aprovado, você também recebe um{' '}
            <strong>cartão de crédito sem anuidade e sem custo de adesão</strong>, com limite
            inicial reduzido. Esse limite pode aumentar conforme o pagamento das faturas em dia.
          </p>

          <p>
            O cartão tem uma <strong>taxa de R$14,99 por mês</strong>, mas{' '}
            <strong>somente se estiver sendo utilizado</strong>. No caso do crediário aprovado, o
            cliente já estará o ultilizando para esta compra, no entanto, o valor das parcelas não
            muda, pois já tera incluído o custo do cartão.{' '}
            <strong> Então não haverá surpresas na fatura.</strong>
          </p>

          <p>
            Você pode escolher como prefere receber suas faturas:{' '}
            <strong> e-mail, SMS ou Correios</strong>.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default CreditCard;
