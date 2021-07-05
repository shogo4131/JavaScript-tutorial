import { call, put, select } from 'redux-saga/effects';
import {
  DELETE_USERS_SUCCESS,
  DELETE_USERS_FAIL,
} from '../../../../constants/ActionTypes';
import api from '../../../../api/api';

export default function* run() {
  const { deleteUserID } = yield select((state) => state.home);

  try {
    const res = yield call(api.delete, `/users/${deleteUserID}`);
    yield put({ type: DELETE_USERS_SUCCESS, payload: res.data });
  } catch (e) {
    yield put({
      type: DELETE_USERS_FAIL,
      payload: 'データを取得できませんでした',
    });
  }
}