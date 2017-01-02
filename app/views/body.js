// @flow
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './body.scss';
import classnames from 'classnames';

export default class AppBody extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  render() {
    return (
      <div>
        <nav className={styles.navbar}>
          <Link to="/">Home</Link>
          <Link to="/adjectives">Adjectives</Link>
          <Link to="/items">Items</Link>
          <Link to="/monsters">Monsters</Link>
          <Link to="/readmes">Readmes</Link>
          <Link to="/configure">Configure</Link>
        </nav>
        <div className={styles.container}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
