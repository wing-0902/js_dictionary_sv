<script lang="ts">
  import LicenseSearch from '$lib/components/license/Search.svelte';
  import NotFoundLeft from '$lib/components/NotFoundLeft.svelte';
  import PagefindNewEntrance from '$lib/components/search/Entrance.svelte';

  import { page } from '$app/state';
</script>

<div class="root">
  {#if page.data.leftComponent === 'license'}
    <LicenseSearch />
  {:else if page.data.leftComponent === 'search'}
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
