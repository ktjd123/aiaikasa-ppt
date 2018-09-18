import React, { Component } from 'react';
import classNames from 'classnames/bind';

import Title from '../Title';
import styles from './index.scss';

const cx = classNames.bind(styles);

export default class index extends Component {
  componentDidMount = () => {};

  render() {
    return (
      <div className={cx('second')}>
        <Title>
DB ERD
        </Title>

        <img src="/r-images/erd.png" alt="erd" className={cx('erd')} />
      </div>
    );
  }
}
