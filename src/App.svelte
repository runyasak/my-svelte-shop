<script lang="ts">
  import {Route, Router} from 'svelte-navigator';
  import Home from './pages/Home.page.svelte';
  import ProductDetail from './pages/ProductDetail.page.svelte';
</script>

<div
  class="bg-[#15202B] p-4 font-bold text-center text-white text-4xl shadow-lg"
>
  MY SHOP
</div>

<div class="mx-auto container p-8">
  <Router primary={false}>
    <Route path="/">
      <Home />
    </Route>

    <Route path="products/*">
      <Route path=":id" let:params>
        <ProductDetail productId={Number(params.id)} />
      </Route>
    </Route>
  </Router>
</div>
