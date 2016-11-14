import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import { listNetworks } from '../api/networks.js';

export function* networksFetch() {
  try {
    const networks = yield call(listNetworks);
    yield put({
      type: 'NETWORKS_FETCH_SUCCEEDED',
      networks,
    });
  } catch (e) {
    yield put({ type: 'NETWORKS_FETCH_FAILED', message: e.message, level: 'error' });
  }
}

function* watchNetworksFetch() {
  yield* takeLatest('NETWORKS_FETCH_REQUESTED', networksFetch);
}

export default function* watchers() {
  yield [
    watchNetworksFetch(),
  ];
}
