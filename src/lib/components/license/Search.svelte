<script lang="ts">
  import licenseEntries from '$lib/data/license-dat.json';

  interface LicenseEntry {
    name: string;
    version: string;
    license: string;
    licenseText: string;
    author?: string;
    repository?: string;
  }

  const appName = __APP_NAME__;

  // 検索中のキーワード
  let searchWord = $state('');
  const searchKeywords = $derived(
    searchWord
      .split(/[ 　]+/)
      .filter((keyword) => keyword.length > 0)
      .map((keyword) => keyword.toLowerCase())
  );

  // 2. 検索ロジックの修正
  const filteredLicenseEntries = $derived.by(() => {
    if (searchKeywords.length === 0) {
      return licenseEntries;
    } else {
      return licenseEntries.filter((pkg) => {
        const lowerPkgName = pkg.name.toLowerCase();
        // パッケージ名だけでなく、ライセンス名でも検索できるようにすると便利
        const lowerLicense = pkg.license.toLowerCase();

        return searchKeywords.every((keyword) => 
          lowerPkgName.includes(keyword) || lowerLicense.includes(keyword)
        );
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
          </button>
      {/if}
    </div>
    <p>{filteredLicenseEntries.length}個のライセンスを表示中</p>
    <ul>
      {#each filteredLicenseEntries as pkg}
        <li>
          <a href={"/license/" + (pkg.name.replaceAll('/', '__'))}>
            <h3>{pkg.name}</h3>
            <span>{pkg.license} License</span>
            <small>v{pkg.version}</small>
          </a>
        </li>
      {/each}
      <div class='spacer'></div>
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
