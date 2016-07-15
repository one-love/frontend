import React from 'react';
import cssModules from 'react-css-modules';
import store from '../../../store';
import styles from './icon.scss';


const Icon = React.createClass({
  propTypes: {
    alt: React.PropTypes.string,
    name: React.PropTypes.string,
    img: React.PropTypes.string,
    path: React.PropTypes.string,
    iconId: React.PropTypes.string,
    close: React.PropTypes.func,
  },

  handleClose(event) {
    event.preventDefault();
    store.dispatch(this.props.close(this.props.iconId));
  },

  render() {
    let name = 'IconName';
    if (this.props.name) {
      name = this.props.name;
    }
    let content = (
      <div>
        <img
          src={this.props.img}
          alt={this.props.alt ? this.props.alt : 'icon'}
          styleName="icon-img"
        />
        <div>
          {name}
        </div>
      </div>
    );
    return (
      <div styleName="icon">
        <div styleName="icon-close" onClick={this.handleClose}>x</div>
        {content}
      </div>
    );
  },
});


export default cssModules(Icon, styles);
