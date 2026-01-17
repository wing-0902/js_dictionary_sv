<script lang="ts">
  import LicenseSearch from '$lib/components/license/Search.svelte';
  import NotFoundLeft from '$lib/components/NotFoundLeft.svelte';
  import PagefindNewEntrance from '$lib/components/search/Entrance.svelte';

  import { page } from '$app/state';
  let content = page.data.leftComponent;
</script>

<div class="root">
  {#if content === 'license'}
    <LicenseSearch />
  {:else if content === 'search'}
    <PagefindNewEntrance />
  {:else}
    <NotFoundLeft />
  {/if}
</div>

<style lang="scss">
  .root {
    height: calc(100dvh - var(--headerHeight));
    overflow: scroll;
  }
</style>
