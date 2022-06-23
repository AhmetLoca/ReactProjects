import React from 'react';
import ReactDOM from 'react-dom';
import Card from './components/Card';
import Collapse from './components/Collapse';


const App = () => {
  return (
    <div>
      <div className="card-group">

        <Collapse href="collapseExample1">
          <Card
            cardTitle="Card Title 1"
            cardText="Lorem Ipsum Text 1"
            updatedTime="Last Updated 1 min ago"
            image="https://picsum.photos/id/1/200/300"
          />
        </Collapse>

        {/* props nesnemin içinde 3 tane key:value çifti var. Buradaki JSX attributelarını Card.js'de props key değeri olarak yakalayacagım */}

        <Collapse href="collapseExample2">
          <Card
            cardTitle="Card Title 2"
            cardText="Lorem Ipsum Text 2"
            updatedTime="Last Updated 3 min ago"
            image="https://picsum.photos/id/10/200/300"
          />
        </Collapse>

        <Collapse href="collapseExample3">
          <Card
            cardTitle="Card Title 3"
            cardText="Lorem Ipsum Text 3"
            updatedTime="Last Updated 5 min ago"
            image="https://picsum.photos/id/100/200/300"
          />
        </Collapse>
      </div>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)