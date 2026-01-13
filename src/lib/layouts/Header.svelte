<script lang="ts">
  import ClickHere from './ClickHere.svelte';
  import { page } from '$app/state';

  const isOnSearch = $derived(
    page.url.pathname === '/' || page.url.pathname.startsWith('/content/')
  );
</script>

<div class="root">
  <div class="dummy"></div>
  <div class="nav">
    <a href="/">
      <div
        class="linkInside"
        class:色付き={isOnSearch}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="currentColor"
          ><path
            d="M380-320q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l224 224q11 11 11 28t-11 28q-11 11-28 11t-28-11L532-372q-30 24-69 38t-83 14Zm0-80q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"
          /></svg
        >
        検索
      </div>
    </a>
  </div>
  <div class="clickHere">
    <ClickHere />
  </div>
</div>

<style lang="scss">
  .root {
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    .dummy {
    }
    .nav {
      display: flex;
      a {
        text-decoration: none;
        .linkInside {
          padding-right: 8px;
          padding-left: 8px;
          display: flex;
          flex-direction: row;
          align-items: center;
          color: var(--foreground);
          &.色付き {
            color: var(--themeColor);
          }
          text-decoration: none;
          span {
            @media (max-width: 830px) {
              display: none;
            }
          }
        }
      }
    }
    .clickHere {
    }
  }
</style>
