import React, { Component } from 'react';

import Swipe from 'react-easy-swipe';

import {
  First, Second, Third, Fourth, Fifth, Sixth,
} from '../components';
import { get, next, pre } from '../api/count';

class Main extends Component {
  countLoop = undefined;

  state = {
    page: 0,
  };

  componentDidMount = () => {
    this.countLoop = setInterval(() => {
      get().then((res) => {
        this.setState({
          page: res.data.count,
        });
      });
    }, 300);
  };

  componentWillUnmount = () => {
    clearInterval(this.countLoop);
  };

  nextPage = () => {
    next().then((res) => {
      this.setState({
        page: res.data.count,
      });
    });
  };

  previousPage = (e) => {
    pre().then((res) => {
      this.setState({
        page: res.data.count,
      });
    });
    e.preventDefault();
    return false;
  };

  render() {
    const { page } = this.state;
    return (
      <Swipe onSwipeLeft={this.nextPage} onSwipeRight={this.previousPage}>
        <div className="main">
          {page === 0 ? (
            <div>
              <First />
            </div>
          ) : (
            undefined
          )}

          {page === 1 ? (
            <div>
              <Second />
            </div>
          ) : (
            undefined
          )}

          {page === 2 ? (
            <div>
              <Third />
            </div>
          ) : (
            undefined
          )}

          {page === 3 ? (
            <div>
              <Fourth />
            </div>
          ) : (
            undefined
          )}

          {page === 4 ? (
            <div>
              <Fifth />
            </div>
          ) : (
            undefined
          )}

          {page === 5 ? (
            <div>
              <Sixth />
            </div>
          ) : (
            undefined
          )}
        </div>
      </Swipe>
    );
  }
}

export default Main;
