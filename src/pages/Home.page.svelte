<script lang="ts">
  import {fetchProducts} from '../store/product';
</script>

{#if $fetchProducts}
  <div class="flex gap-8 flex-wrap justify-center w-full">
    {#each $fetchProducts as product}
      <div class="shadow-lg rounded-lg w-full max-w-[16em] flex flex-col">
        <div class="flex flex-col gap-4 p-8">
          <div
            class="w-full min-h-[10em] bg-contain bg-no-repeat bg-center"
            style="background-image: url('{product.image}')"
          />
          <div class="flex flex-col gap-4">
            <span class="text-[#15202B] font-bold text-xl text-center">
              {product.title}
            </span>
            <span class="text-teal-500 text-center text-xl">
              ${product.price}
            </span>
          </div>
        </div>

        <button class="mt-auto bg-teal-500 text-white py-4 rounded-b-lg">
          ADD TO CART
        </button>
      </div>
    {/each}
  </div>
{:else}
  loading
{/if}
