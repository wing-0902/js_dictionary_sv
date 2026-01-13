<script lang="ts">
  import favicon from '$lib/assets/favicon.svg';
  import '$lib/styles/global.scss';

  // フォント
  import '@fontsource/zen-kaku-gothic-new';
  import '@fontsource-variable/fira-code';
  import '@fontsource-variable/m-plus-1-code';
  import '@fontsource/zen-maru-gothic';

  let { children } = $props();

  // コンポーネント
  import SvHeader from '$lib/layouts/Header.svelte';
</script>

<svelte:head>
  <link
    rel="icon"
    href={favicon}
  />
</svelte:head>

<div class='body'>
  <header>
    <SvHeader />
  </header>
{@render children()}
</div>

<style lang="scss">
  .body {
    header {
      margin: 0;
      height: var(--headerHeight);
      width: 100vw;
      border-bottom: 1px solid var(--borderColor);
      box-sizing: border-box;
    }
    .contentSlot {
      display: flex;
      height: calc(100dvh - var(--headerHeight));
      .searchSlot {
        border-right: 0.5px solid var(--borderColor);
        width: var(--searchWidth);
        height: 100%;
        &.strictlyHidden {
          display: none;
        }
      }
      .content {
        border-left: 0.5px solid var(--borderColor);
        width: calc(100vw - var(--searchWidth));
        height: 100%;
        position: relative;
        &.showFull {
          width: 100vw;
          border: none;
        }
        .topbar {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 33px;
        }
        .余白 {
          height: 33px;
        }
        .slot {
          position: absolute;
          height: calc(100% - 66px);
          width: 100%;
          overflow-y: scroll;
          border-bottom: 0.5px solid var(--foreground);
        }
        .underbar {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 33px;
        }
      }
    }
  }
  @media (max-width: 830px) {
    body {
      .contentSlot {
        .hideSearchSlot {
          display: none !important;
        }
        .showSearchSlot {
          width: 100vw !important;
          border: none;
        }
        .showContent {
          width: 100vw !important;
          border: none;
        }
        .hideContent {
          display: none !important;
        }
      }
    }
  }
</style>