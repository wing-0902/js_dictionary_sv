import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
  return {
    title: 'Not Found',
    header: 'search',
    leftComponent: 'search'
  };
};
