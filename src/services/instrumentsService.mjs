
import EventEmitter from 'eventemitter3';
import fetchCache from '../utils/fetchCache.mjs';

const ee = new EventEmitter();

const TYPE_CUSTOM = 0;
const TYPE_CRYPTO = 1;
const TYPE_CURRENCY = 2;
const TYPE_COMMODITY = 3;
const TYPE_STOCK = 4;
const TYPES = [
  'custom',
  'crypto',
  'currency',
  'commodity',
  'stock',
];

const map = new Map();

const getTypedId = (id, type) => `${TYPES[type]}_${id}`;

const addCrypto = async () => {
  const list = await fetchCache('https://api.coingecko.com/api/v3/coins/list');
  ee.emit('add', list.map(entry => {
    const id = getTypedId(entry.id, TYPE_CRYPTO);
    // if (map.has(id)) return;
    const obj = {
      ticker: entry.symbol,
      name: entry.name,
      id,
    };
    map.set(id, obj);
    return obj;
  }));
};

const match = phrase => {
  const lc = phrase.toLowerCase().trim();
  return [...map].filter(([key, e]) => {
    if (e.ticker.toLowerCase().includes(lc)) return true;
    if (e.name.toLowerCase().includes(lc)) return true;
    if (e.id.toLowerCase().includes(lc)) return true;
    return false;
  }).map(([key, e]) => e);
};

const init = () => {
  addCrypto();

};

const instrumentsService = {
  getAll: () => map,
  get: id => map.get(id),
  match: phrase => match(phrase),
  ee,
};

export { instrumentsService };

init();
