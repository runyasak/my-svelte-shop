<script lang="ts">
  import {fetchProductById} from '../store/product';

  export let productId: number;

  const product = fetchProductById(productId);
</script>

<div>{JSON.stringify($product)}</div>
