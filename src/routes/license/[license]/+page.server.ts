import licenses from "$lib/data/license-dat.json";
import { error } from "@sveltejs/kit";
export const prerender = true;

// vite-plugin-license の出力に合わせた型定義
type LicenseEntry = {
  name: string;
  version: string;
  license: string;
  licenseText: string;
  author?: string;
  repository?: string;
};

export function entries() {
  // 配列をループして、nameプロパティからURL用パスを生成
  return licenses.map((pkg) => ({
    license: pkg.name.replaceAll("/", "__")
  }));
}

export function load({ params }) {
  // パラメータの __ を / に戻して、配列内を検索
  const originalName = params.license.replaceAll("__", "/");
  const info = licenses.find((pkg) => pkg.name === originalName);

  if (!info) {
    // 404エラーを投げる（SvelteKit標準のerrorを使うのが一般的）
    throw error(404, { message: "Package Not Found" });
  }

  return {
    name: originalName,
    info
  };
}
