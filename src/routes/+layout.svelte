<script lang="ts">
  import favicon from '$lib/assets/favicon.svg';
  import '$lib/styles/global.scss';

  // フォント
  import '@fontsource/zen-kaku-gothic-new';
  import '@fontsource-variable/fira-code';
  import '@fontsource-variable/m-plus-1-code';
  import '@fontsource/zen-maru-gothic';

  let { children } = $props();
</script>

<svelte:head>
  <link
    rel="icon"
    href={favicon}
  />
</svelte:head>

{@render children()}
