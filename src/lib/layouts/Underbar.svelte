<script lang="ts">
  import { page } from '$app/state';
  import Share from './UnderShare.svelte';
  import { pubDomain } from '$lib/envConfig';

  interface Props {
    showShare?: boolean;
    shareTitle?: string;
  }

  const { showShare = false, shareTitle = '' } = $props();

  const canonical = pubDomain + page.url.pathname;
</script>

<div class="root">
  <div class="left"></div>
  <div class="center">
    {#if showShare}
      <Share
        {shareTitle}
        shareUrl={canonical}
      />
      )
    {/if}
  </div>
  <div class="right"></div>
</div>

<style lang="scss">
  .root {
    height: 33px;
    border: none;
    display: flex;
    justify-content: space-between;
  }
</style>
