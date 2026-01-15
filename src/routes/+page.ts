import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
  console.log('PAGE LOAD RUNNING');
  return {
    topbarTitle: 'Welcome!',
    showContent: false,
    header: 'search'
  };
};
