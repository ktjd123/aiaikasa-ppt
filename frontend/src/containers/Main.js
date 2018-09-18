import React, { Component } from 'react';

import { First } from '../components';
import { get, next, pre } from '../api/count';

class Main extends Component {
  countLoop = undefined;

  state = {
    page: 1,
  };

  // componentDidMount = () => {
  //   this.countLoop = setInterval(() => {
  //     get().then((res) => {
  //       this.setState({
  //         page: res.data.count,
  //       });
  //     });
  //   }, 300);
  // };

  // componentWillUnmount = () => {
  //   clearInterval(this.countLoop);
  // };

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
      <div className="main" onClick={this.nextPage} onContextMenu={this.previousPage}>
        {page === 0 ? (
          <div>
            <First />
          </div>
        ) : (
          undefined
        )}

        {page === 5 ? (
          <div>
            <First />
          </div>
        ) : (
          undefined
        )}
      </div>
    );
  }
}

export default Main;
