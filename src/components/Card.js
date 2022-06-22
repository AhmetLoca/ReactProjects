import React from 'react';

const Card = (props) => {
  return (
      <div className="card">
        <img src="..." className="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">{props.cardTitle}</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
     </div>
  );
};

export default Card;



/*
First Class Functions

first class functions'ta bir değişkene bir anonim fonksiyonu atayabilriiz.
Biz sonradan bu değişkeni kullanarak fonksiyonumuzu çalıştırabiliriz.

const Test = function(){
  console.log("Test First Class");
}

Test()

*/