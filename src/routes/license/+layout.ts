import type { LayoutLoad } from "./$types";

export const load: LayoutLoad = async () => {
    return {
        title: 'ライセンス一覧',
        leftComponent: 'license'
    }
}