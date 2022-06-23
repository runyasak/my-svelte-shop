import {readable} from 'svelte/store';
import type {Product} from './product.model';

export const fetchProducts = readable<Product[]>(null, set => {
  fetch('https://fakestoreapi.com/products/')
    .then(result => result.json())
    .then(result => set(result));
});
