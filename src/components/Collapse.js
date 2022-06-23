import React from 'react';

//Fonksiyonel component
const Collapse = (props) => {

  return (
    //diez ile index.js'den gelen linki birleştirdim. 
    <div>
      <a className="btn btn-primary" data-toggle="collapse" href={"#".concat(props.href)} role="button" aria-expanded="false" aria-controls="collapseExample">
        Link with href
      </a>
      <div className="collapse" id={props.href}>
        {props.children}
      </div>
    </div >
  );
};

export default Collapse;