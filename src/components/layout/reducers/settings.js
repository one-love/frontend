import { SETTINGS_SHOW } from '../constants';

export default function settingsShow(state = { status: 'initial' }, action) {
  switch (action.type) {
    case SETTINGS_SHOW:
      return action.payload;
    default:
      return state;
  }
}
