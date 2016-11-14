import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import { listAccounts } from '../api/accounts.js';

export function* accountsFetch() {
  try {
    const accounts = yield call(listAccounts);
    yield put({
      type: 'ACCOUNTS_FETCH_SUCCEEDED',
      accounts,
    });
  } catch (e) {
    yield put({
      type: 'ACCOUNTS_FETCH_FAILED',
      message: e.message,
      level: 'error',
    });
  }
}

function* watchAccountsFetch() {
  yield* takeLatest('ACCOUNTS_FETCH_REQUESTED', accountsFetch);
}

export default function* watchers() {
  yield [
    watchAccountsFetch(),
  ];
}
