import React from 'react';

//Fonksiyonel component
class Collapse extends React.Component {

  constructor() {
    //React.Component içerisinde hazir var olan constructor metodunun üzerine yazıyoruz.
    super();
    //React.Component içerisindeki constructor metoduna ait olan tüm öz. almamızı saglıyor

    //State'i oluşturmak için en uygun yerlerden bir tanesi constructor metodunun içerisidir.

    this.state = {
      showContent: false
    }
  }


  render() {
    return (
      <div>
        <p className="btn btn-primary w-100">
          Link with href
        </p>

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