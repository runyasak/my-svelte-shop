<script lang="ts">
  import {fetchProductById} from '../store/product';

  export let productId: number;

  const product = fetchProductById(productId);
</script>

<div class="flex min-h-[660px] h-[calc(100vh-8.5em)] items-center">
  {#if $product}
    <div class="flex gap-12">
      <img src={$product.image} alt={$product.title} class="w-[400px]" />
      <div class="flex flex-col gap-8 py-12">
        <div class="text-4xl">
          {$product.title}
        </div>
        <div>
          {$product.description}
        </div>
        <span class="text-teal-500 text-left text-4xl">
          ${$product.price}
        </span>
        <div class="mt-auto flex justify-end gap-8">
          <button class="btn btn-ghost">BUY NOW</button>
          <button class="btn btn-primary">ADD TO CART</button>
        </div>
      </div>
    </div>
  {/if}
</div>
