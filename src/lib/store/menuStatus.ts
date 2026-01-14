import { page } from '$app/state';
import { derived } from 'svelte/store';

export const headerHighlight = derived(page, ($page) => {
  if ($page.url.pathname.startsWith('/content')) return 'search';
  if ($page.url.pathname === '/') return 'search';
  if ($page.url.pathname === '/404') return 'search';
  return 'other';
});