import React from 'react';
import ReactDOM from 'react-dom';
import Card from './components/Card';

const App = () => {
  return(
<div>
  <div className="card-group">
  {/* burada bir attribute ve bir attribute'a ait olan değer oluşturduğum zaman bir nesnenin key:value çiftini yazdırıyorum. Bir nesnenin içindeki value yazdırmak için key'inden faydalanırım.  */}
    <Card cardTitle="FB"/> 
    <Card cardTitle="GS"/>
    <Card cardTitle="BJK"/>
  </div>
</div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)