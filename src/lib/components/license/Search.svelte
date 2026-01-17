<script lang="ts">
  import licenseData from '$lib/data/license-data.json';
  const appName = __APP_NAME__;

  const rawEntries = Object.entries(licenseData);

  const licenseEntries = rawEntries.filter(
    ([pkgName]) => pkgName.split('@').slice(0, -1).join('@') !== appName
  );

  // 検索中のキーワード
  let searchWord = $state('');
  const searchKeywords = $derived(
    searchWord
      .split(/[ 　]+/)
      .filter((keyword) => keyword.length > 0)
      .map((keyword) => keyword.toLowerCase())
  );

  const filteredLicenseEntries = $derived.by(() => {
    if (searchKeywords.length === 0) {
      return licenseEntries;
    } else {
      return licenseEntries.filter(([pkgName]) => {
        const lowerPkgName = pkgName.toLowerCase();

        return searchKeywords.every((keyword) => lowerPkgName.includes(keyword));
      });
    }
  });
</script>

<div class="root">
  <h2>ライセンス一覧</h2>
  <div class="search-slot">
    <div class="search">
      <input
        type="search"
        placeholder="入力して検索"
        bind:value={searchWord}
      />
      {#if searchWord !== ''}
        <button
          aria-label="検索クエリを削除"
          onclick={() => (searchWord = '')}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="currentColor"
          >
            <path
              d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
            ></path>
          </svg>
        </button>
      {/if}
    </div>
    <p>{filteredLicenseEntries?.length || 0}個のライセンスを表示中</p>
    <ul>
      {#each filteredLicenseEntries as entry}
        <li>
          <a href={entry[0].replaceAll('/', '__')}>
            <h3>{entry[0]}</h3>
            <span>{entry[1].licenses} License</span>
          </a>
        </li>
        <div class='spacer'></div>
      {/each}
    </ul>
  </div>
</div>

<style lang="scss">
  .root {
    overflow: hidden;
    padding: 0 5px;
    height: calc(100dvh - var(--headerHeight));
    h2 {
      font-size: 18px;
      margin: 4px 0 8px 0;
      height: 20px;
    }
    .search-slot {
      height: calc(100% - 24px);
      .search {
        position: sticky;
        top: 0;
        z-index: 10;
        height: 50px;
        margin: 6px 0;
        input {
          background: var(--codeBack);
          color: var(--foreground);
          margin: 0;
          width: 100%;
          font-family: 'Fira Code Variable', 'Zen Kaku Gothic New', monospace;
          height: 40px;
          font-size: 16px;
          display: flex;
          align-items: center;
          border-radius: 10px;
          border: none;
          &:focus {
            outline: none;
            color: var(--themeColor);
          }
        }

        button {
          position: absolute;
          top: 0;
          right: 0;
          border: none;
          height: 40px;
          background: transparent;
          color: var(--foreground);
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
      p {
        font-size: 15px;
        text-align: center;
        margin: 0;
        height: 14px;
      }
      ul {
        height: calc(100dvh - 120px - var(--headerHeight));
        overflow-y: scroll;
        overflow-x: hidden;

        .spacer {
          height: 35px;
        }

        li {
          list-style-type: none;
          margin-left: -18px;
          a {
            text-decoration: none;
            h3 {
              font-size: 16px;
              margin-bottom: 0;
              filter: brightness(120%);
            }
            h3,
            span {
              font-family: 'Fira Code Variable', 'Zen Kaku Gothic New', monospace;
            }
            span {
              font-size: 15px;
              filter: brightness(120%);
            }
            &:hover {
              h3 {
                text-decoration: underline;
                filter: brightness(100%);
              }
            }
          }
        }
      }
    }
  }
</style>
