import {readable} from 'svelte/store';
import type {Product} from './product.model';

export const fetchProducts = readable<Product[]>(null, set => {
  fetch('https://fakestoreapi.com/products/')
    .then(result => result.json())
    .then(result => set(result));
});

export const fetchProductById = (id: number) =>
  readable<Product>(null, set => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(result => result.json())
      .then(result => set(result));
  });
