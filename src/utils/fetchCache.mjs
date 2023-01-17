
import { get, set } from 'idb-keyval';

const tryCache = async (url, storeTime) => {
  const desc = await get(url);
  if (!desc) return false;
  if (+new Date + storeTime > desc.time) return false;
  return await get(desc.key);
};

const saveCache = async (url, data) => {
  let desc = await get(url);
  if (!desc) {
    desc = { key: Math.random() };
  }
  desc.time = +new Date;
  set(url, desc);
  set(desc.key, data);
};

const fetchJson = async (url) => {
  const req = await fetch(url);
  return await req.json();
};

const fetchCache = async (url, storeTime = 60 * 60 * 1e3, attemps = 2) => {
  const data = await tryCache(url, storeTime);
  if (data) return data;
  for (let i = 0; i < attemps; ++i) {
    const data = await fetchJson(url);
    saveCache(url, data);
    return data;
  }
};

export default fetchCache;
