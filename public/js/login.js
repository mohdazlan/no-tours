/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';
import { updateSettings } from './updateSettings';
export const login = async (email, password) => {
  console.log(email, password);
  try {
    const res = await axios({
      method: 'POST',
      url: 'http://127.0.0.1:4000/api/v1/users/login',
      data: {
        email,
        password,
      },
    });
    if (res.data.status === 'success') {
      showAlert('success', 'Logged in successfully!');
      window.setTimeout(() => {
        location.assign('/');
      }, 1500);
    }
    console.log(res);
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};

export const logout = async () => {
  // const res = await axios({
  //   method: 'GET',
  //   url: 'http://127.0.0.1:4000/api/v1/users/login',
  // });
  // res.cookie('jwt', 'null', {
  //   expires: new Date(Date.now() - 10 * 1000),
  //   httpOnly: true,
  // });
  // location.reload();
  try {
    const res = await axios({
      method: 'GET',
      url: 'http://127.0.0.1:4000/api/v1/users/logout',
    });
    if ((res.data.status = 'success')) location.reload(true);
  } catch (err) {
    console.log(err.response);
    console.log('fuck this');
    showAlert('error', 'Error logging out! Try again');
  }
};
