<script>
import { defineComponent } from 'vue';
import { instrumentsService as is } from '../services/instrumentsService.mjs';

// const getPrices = async () => {
//   const req = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100000&page=1&sparkline=false');
//   const prices = await req.json();
  
//   console.log(prices.map(e => ({
//     id: e.id,
//     symbol: e.symbol,
//     name: e.name,
//     price: e.current_price
//   })));
// };

// getPrices();

export default defineComponent({
  data() {
    const instruments = [];
    // is.ee.on('add', list => this.instruments.push(...list.slice(0, 100)));
    return {
      instruments,
      equation: '',
    };
  },
  watch: {
    equation(val) {
      this.instruments = is.match(val);
    },
  },
});
</script>

<style scoped>

.equation {
  --margin: 16px;
  --border: 1px;
  --padding: 8px;
  margin: var(--margin);
  padding: var(--padding);
  border: var(--border) solid #aaa;
  font-size: 1.5em;
  width: calc(100% - (var(--margin) + var(--padding) + var(--border)) * 2);
}
</style>

<template>
  <main>
    <input
      class="equation"
      type="text" 
      v-model="equation"
      placeholder="Type here…"
    />
    
    <pre>found: {{ instruments.length }}</pre>
    <pre>{{ instruments }}</pre>
  </main>
</template>
