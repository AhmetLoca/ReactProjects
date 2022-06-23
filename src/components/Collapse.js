// -> ilk constructor -> state initialization
// render metodu ilk defa calıstı.
//onClick event'i calıstı.(showMore metodu calıstı)
//showMore metodu setState yardımıyla bizim state'imizi update etti.
//setState metodu render() metodunu trigger ediyor !
//son olarak render metodu güncel JSX'i sayfada gösteriyor.

import React from 'react';
class Collapse extends React.Component {
  constructor() {
    super();

    this.state = {
      showContent: false
    }
  }

  showMore = () => {
    this.setState({ showContent: !this.state.showContent })

  }

  render() {
    return (
      <div>
        <button className="btn btn-primary w-100" onClick={this.showMore}>
          Link with href
        </button>
        {
          this.state.showContent ? (
            <div className="collapse show">
              {this.props.children}
            </div>
          ) : null
        }
      </div>
    );
  }
};

export default Collapse;