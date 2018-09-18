import React, { Component } from 'react';
import classNames from 'classnames/bind';

import styles from './index.scss';

import Title from '../Title';

const cx = classNames.bind(styles);

export default class index extends Component {
  componentDidMount = () => {};

  render() {
    return (
      <div className={cx('fourth')}>
        <Title>
공정보고 - Upload - Frontend
        </Title>
        <div className={cx('imgs')}>
          <img src="/r-images/f-u-1.png" alt="1" />
          <img src="/r-images/f-u-2.png" alt="1" />
        </div>
      </div>
    );
  }
}
