<script lang="ts">
  const { title = '', href = '検索', notShow = false } = $props();

  import ReturnLink from './TopReturn.svelte';
</script>

<div class="root">
  <div class="return">
    <div class="returnLink">
      <ReturnLink
        {href}
        show={!notShow}
      />
    </div>
  </div>
  <div class="title">
    <p>{title}</p>
  </div>
  <div></div>
</div>

<style lang="scss">
  .root {
    height: 33px;
    border: 0 solid var(--foreground);
    border-bottom-width: 0.5px;
    display: flex;
    justify-content: space-between;
    .return {
      height: 100%;
      .returnLink {
        display: none;
        @media (max-width: 830px) {
          display: inline;
        }
      }
    }
    .title {
      display: flex;
      align-items: center;
      height: 100%;
    }
  }
</style>
