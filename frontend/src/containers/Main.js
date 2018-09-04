import React, { Component } from 'react';

import { First, Second, Third } from '../components';

class Main extends Component {
  state = {
    page: 2,
  };

  nextPage = () => {
    const { page } = this.state;
    this.setState({
      page: page + 1,
    });
  };

  previousPage = (e) => {
    const { page } = this.state;
    this.setState({
      page: page - 1,
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
      </div>
    );
  }
}

export default Main;
