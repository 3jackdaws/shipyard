import { takeEvery } from 'redux-saga';
import { put } from 'redux-saga/effects';

function* newEvent(action) {
  switch (action.event.Type) {
    case 'container':
      yield put({ type: 'CONTAINERS_FETCH_REQUESTED' });
      return;
    case 'service':
      yield put({ type: 'SERVICES_FETCH_REQUESTED' });
      return;
    case 'node':
      yield put({ type: 'NODES_FETCH_REQUESTED' });
      return;
    case 'volume':
      yield put({ type: 'VOLUMES_FETCH_REQUESTED' });
      return;
    case 'network':
      yield put({ type: 'NETWORKS_FETCH_REQUESTED' });
      return;
    case 'image':
      yield put({ type: 'IMAGES_FETCH_REQUESTED' });
      return;
    default:
      return;
  }
}

function* watchNewEvent() {
  yield* takeEvery('NEW_EVENT', newEvent);
}

export default function* watchers() {
  yield [
    watchNewEvent(),
  ];
}
