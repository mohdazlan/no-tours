/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

export const bookTour = async (tourId) => {
  const stripe = Stripe(
    'pk_test_51Il1z9IzU5fOmsJUilepYcUzPEQkiA27QGcZEGMd4V3HZndRTgKGvfQWveUAZBStKozD95ASk3RRfePhJ7XdoPiu00ZsEyLyOx'
  );
  try {
    // 1) Get checkout session from API
    const session = await axios(
      `http://localhost:4000/api/v1/bookings/checkout-session/${tourId}`
    );
    // 2) Create checkout form + charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
