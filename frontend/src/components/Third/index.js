import React, { Component } from 'react';
import classNames from 'classnames/bind';
import Title from '../Title';

import styles from './index.scss';

const cx = classNames.bind(styles);

export default class index extends Component {
  componentDidMount = () => {};

  render() {
    return (
      <div className={cx('third')}>
        <Title>
기능 - Upload
        </Title>
        <div className={cx('img-div')}>
          <img src="/r-images/upload-first.png" alt="first" />
          <img src="/r-images/upload-second.png" alt="second" />
        </div>
      </div>
    );
  }
}
