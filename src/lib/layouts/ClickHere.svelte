<script lang="ts">
  let isOpen = $state(false);

  const urlScheme = 'js.dictionary4.dev/?q=<文字列>';

  function copyUrlScheme() {
    event?.preventDefault();
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(urlScheme)
        .then(() => {
          alert(`URLスキームをコピーしました．\nURLスキーム：${urlScheme}`);
        })
        .catch((err) => {
          console.error('コピーに失敗しました: ', err);
        });
    } else {
      alert('この環境では利用できません．');
    }
  }

  const appShareData = {
    title: 'JavaScript - Dictionary for Dev',
    text: 'JavaScriptのコードを辞書で検索しましょう．オリジナルの辞書も作れますよ．',
    url: 'https://js.dictionary4.dev'
  };

  function shareThisApp() {
    try {
      if (navigator.share) {
        navigator.share(appShareData);
        console.log('共有完了');
      } else {
        alert('このブラウザでは使用できないメニューです');
      }
    } catch (err) {
      alert('不明なエラー');
    }
  }
</script>

<div class="root">
  <button
    aria-label={isOpen ? 'メニューを閉じる' : 'メニューを開ける'}
    onclick={() => (isOpen = !isOpen)}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill="currentColor"
      ><path
        d="M240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400Z"
      /></svg
    >
  </button>

  <!-- 中身 -->
  <div
    class="menuSlot"
    class:hidden={!isOpen}
  >
    <div class="rowGr">
      <a href="/license/app/">このアプリについて</a>
      <a href="/license/contents/">コンテンツの著作権</a>
      <a href="/license/">その他のライセンス</a>
    </div>
    <div class="rowGr">
      <a href="/form/">フィードバック</a>
      <a href="/form/report/">バグ報告</a>
    </div>
    <div class="rowGr">
      <a onclick={shareThisApp}>このAppを共有</a>
      <a onclick={copyUrlScheme}>URLスキームをコピー</a>
    </div>
  </div>

  {#if isOpen}
    <div
      onclick={() => (isOpen = false)}
      class="back"
      aria-label="メニューを閉じる"
      role="button"
      tabindex="-1"
    ></div>
  {/if}
</div>

<style lang="scss">
  .root {
    button {
      border: none;
      background: transparent;
      color: var(--foreground);
    }
    position: relative;
  }
  .menuSlot {
    background: color-mix(in srgb, var(--codeBack) 80%);
    border: 1px solid var(--codeBack);
    width: 300px;
    height: 400px;
    max-height: calc(100dvh - 30px);
    max-width: calc(--100dvh - 30px);
    position: absolute;
    right: 7px;
    top: 50px;
    z-index: 1000;
    backdrop-filter: brightness(85%) blur(8px);
    transition: all 0.25s ease;
    border-radius: 20px;
    &.hidden {
      transform: translate3d(155px, -230px, 0) scale(0);
    }
    .rowGr {
      color: var(--foreground);
      margin: 21px 10px;
      display: flex;
      flex-direction: column;
      a,
      button {
        color: var(--foreground);
        font-size: 15px;
        padding: 7px 15px;
        height: 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-decoration: none;
        &:hover {
          border-radius: 30px;
          background: var(--codeBack);
        }
      }
    }
  }
  .back {
    position: fixed;
    top: 0;
    left: 0;
    background: transparent;
    width: 100vw;
    height: 100dvh;
    z-index: 800;
  }
</style>
