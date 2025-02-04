import { TIMEOUT } from './config.js';
import { async } from 'regenerator-runtime';
const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const getJSON = async function (url) {
  try {
    const fetvhPro = fetch(url);
    const res = await Promise.race([fetvhPro, timeout(TIMEOUT)]);
    const data = res.json();

    if (!res.ok) throw new Error(`${data.message}  (${res.status})`);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
