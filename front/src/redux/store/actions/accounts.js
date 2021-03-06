import axios from "axios";
import {
  GET_USER_ACCOUNTS,
  GET_USER_SINGLE_ACCOUNT,
  FETCH_BANKS,
  SET_MAIN_ACCOUNT,
  ERROR_ACCOUNT,
} from "../constants";
import { IP } from "../../../../config";

const get_user_accounts = (accounts) => {
  return {
    type: GET_USER_ACCOUNTS,
    accounts,
  };
};

const get_user_single_account = (account) => {
  return {
    type: GET_USER_SINGLE_ACCOUNT,
    account,
  };
};

const get_user_main_account = (account) => {
  return {
    type: SET_MAIN_ACCOUNT,
    account,
  };
};

const get_banks = (banks) => {
  return {
    type: FETCH_BANKS,
    banks,
  };
};

const error_message = (error) => {
  return {
    type: ERROR_ACCOUNT,
    error,
  };
};

export const fetchMainAccount = (userId) => (dispatch) => {
  return axios
    .get(`http://${IP}:1337/api/accounts/main/${userId}`)
    .then((res) => dispatch(get_user_main_account(res.data)));
};

export const fetchUserAccounts = (id) => (dispatch) =>
  axios
    .get(`http://${IP}:1337/api/accounts/${id}`)
    .then((res) => dispatch(get_user_accounts(res.data)));

export const setMainAccount = (id, userId) => (dispatch) => {
  return axios
    .patch(`http://${IP}:1337/api/accounts/${id}/${userId}`)
    .then((res) => dispatch(get_user_accounts(res.data)));
};

export const addAccounts = (name, cbu, accountNumber, user) => (dispatch) => {
  return axios
    .post(`http://${IP}:1337/api/accounts`, {
      nameEntity: name,
      cbu_cvu: cbu,
      accountNumber: accountNumber,
      user: user,
    })
    .then((res) => {
      console.log("REEEES:", res);
      if (res.data.length > 0) {
        return dispatch(get_user_accounts(res.data));
      } else {
        return dispatch(error_message(res.data));
      }
    });
};

export const fetchBanks = () => (dispatch) =>
  axios
    .get(`http://${IP}:1337/api/banks/`)
    .then((res) => dispatch(get_banks(res.data)))
    .catch((err) => console.log(err, "ERROR"));

export const fetchUserSingleAccount = (id) => (dispatch) =>
  axios
    .get(`http://${IP}:1337/api/accounts/user/${id}`)
    .then((res) => dispatch(get_user_single_account(res.data)));

export const deleteAccounts = (id, userId) => (dispatch) =>
  axios
    .patch(`http://${IP}:1337/api/accounts/${id}/${userId}/delete`)
    .then((res) => {
      dispatch(get_user_single_account({}));
      dispatch(get_user_accounts(res.data));
    });

export const deleteMainAccount = (id) => (dispatch) =>
  axios.patch(`http://${IP}:1337/api/accounts/main/${id}`).then((res) => {
    //dispatch(get_user_single_account({}));
    dispatch(get_user_main_account({}));
  });
