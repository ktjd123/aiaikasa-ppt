import React, { Component } from 'react';
import classNames from 'classnames/bind';

import styles from './index.scss';

const cx = classNames.bind(styles);

export default class index extends Component {
  componentDidMount = () => {};

  render() {
    return (
      <div className={cx('sixth')}>
다음주 계획
      </div>
    );
  }
}
