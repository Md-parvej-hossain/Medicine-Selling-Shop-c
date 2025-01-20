import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

const ChackOutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const handaleSubmite = async event => {
    event.preventDefault();
    if (!stripe || elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });
    if (error) {
      console.log('payment error', error);
    } else {
      console.log('payment method ', paymentMethod);
    }
  };
  return (
    <form onSubmit={handaleSubmite}>
      <CardElement
        id="my-card"
        iconStyle="solid"
        style={{
          base: {
            iconColor: '#c4f0ff',
            color: '#fff',
            fontSize: '16px',
          },
          invalid: {
            iconColor: '#FFC7EE',
            color: '#FFC7EE',
          },
        }}
      ></CardElement>
      <button
        className="btn btn-sm btn-primary my-4"
        type="submit"
        disabled={!stripe}
      >
        Pay
      </button>
    </form>
  );
};

export default ChackOutForm;
