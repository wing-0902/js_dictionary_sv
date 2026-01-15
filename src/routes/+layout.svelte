<script lang="ts">
  import '$lib/styles/global.scss';
  import { page } from '$app/state';

  // フォント
  import '@fontsource/zen-kaku-gothic-new';
  import '@fontsource-variable/fira-code';
  import '@fontsource-variable/m-plus-1-code';
  import '@fontsource/zen-maru-gothic';
  // アイコン
  import '@fontsource-variable/material-symbols-rounded';
  import '$lib/styles/icons.scss';

  import type { PageData } from './$types';
  const { children, data } = $props<{ data: PageData }>();

  // コンポーネント
  import SvHeader from '$lib/layouts/Header.svelte';
  import SvTopbar from '$lib/layouts/Topbar.svelte';
  import SvSidebar from '$lib/layouts/Sidebar.svelte';
  import SvUnderbar from '$lib/layouts/Underbar.svelte';

  // SEO
  import { pubDomain, defaultTitle } from '$lib/envConfig';
  const canonical = pubDomain + page.url.pathname;

  const title = $derived(
    page.data.title === defaultTitle ? defaultTitle : `${page.data.title} | ${defaultTitle}`
  );
</script>

<svelte:head>
  <link
    rel="canonical"
    href={canonical}
  />
  <title>{title}</title>
</svelte:head>

<div class="body">
  <header>
    <SvHeader headerContent={page.data.header} />
  </header>
  <div class="contentSlot">
    <section
      class="searchSlot"
      class:hideSearchSlot={page.data.showContent}
      class:showSearchSlot={!page.data.showContent}
      class:strictlyHidden={page.data.fullScreen}
    >
      <SvSidebar />
    </section>
    <section
      class="content"
      class:showContent={page.data.showContent}
      class:hideContent={!page.data.showContent}
      class:showFull={page.data.fullScreen}
    >
      <div class="topbar">
        <SvTopbar
          title={page.data.topbarTitle || page.data.title}
          href={page.data.header}
          notShow={page.data.fullScreen}
        />
      </div>
      <div class="余白"></div>
      <div class="slot">
        {@render children()}
      </div>
      <div class="underbar">
        <SvUnderbar showShare={page.data.showShare} shareTitle={title} />
      </div>
    </section>
  </div>
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
    .body {
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
