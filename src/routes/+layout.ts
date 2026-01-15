// If you're using a fallback (i.e. SPA mode) you don't need to prerender all
// pages by setting this here, but should prerender as many as possible to

// avoid large performance and SEO impacts
export const prerender = true;
export const trailingSlash = 'always';
import { defaultTitle, defaultDescription } from '$lib/envConfig';
import type { LayoutLoad } from './$types';

// バケツリレー
export const load: LayoutLoad = async () => {
  return {
    title: defaultTitle,
    description: defaultDescription,
    showContent: true,
    fullScreen: false,
    topbarTitle: '',
    header: ''
  };
};
