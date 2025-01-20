import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import ChackOutForm from './ChackOutForm';
const stripePromise = loadStripe(`${import.meta.env.VITE_PAYMENT_DEV_KEY}`);
const Payment = () => {
  return (
    <div className="py-10">
      <Elements stripe={stripePromise}>
        <ChackOutForm></ChackOutForm>
      </Elements>
    </div>
  );
};

export default Payment;
