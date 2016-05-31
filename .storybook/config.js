import { configure } from '@kadira/storybook';

function loadStories() {
  require('../stories/components/layout');
  require('../stories/components/layout/footer');
  require('../stories/components/layout/header');
  require('../stories/components/cluster');
}

configure(loadStories, module);
