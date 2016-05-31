import { configure } from '@kadira/storybook';

function loadStories() {
  require('../stories/components/layout/header');
}

configure(loadStories, module);
