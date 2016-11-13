import fetch from 'isomorphic-fetch';

import { statusHandler } from './helpers.js';
import { getAuthToken } from '../services/auth';

export function getInfo() {
  return fetch('/info', {
    headers: {
      'X-Access-Token': getAuthToken(),
    },
  })
  .then(statusHandler)
  .then(response => response.json());
}
