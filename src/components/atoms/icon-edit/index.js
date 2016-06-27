import React from 'react';
import cssModules from 'react-css-modules';
import styles from './icon-edit.scss';


function IconEdit() {
  return (
    <div styleName="icon">
      <form>
        <div styleName="icon-close">x</div>
        <h3>Title</h3>
        <div styleName="input-group">
          <input styleName="input" placeholder="one" />
          <input styleName="input" placeholder="two" />
          <input styleName="input" placeholder="one" />
          <input styleName="input" placeholder="two" />
          <input styleName="input" placeholder="one" />
          <input styleName="input" placeholder="two" />
        </div>
        <button styleName="button">Save</button>
        <button styleName="button">Cancel</button>
      </form>
    </div>
  );
}


export default cssModules(IconEdit, styles);
