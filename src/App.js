import React, { Component } from 'react';
import Card from './Card'
import './App.css'

const DATA = [
  {url: "https://cdn.tui.be/img/destinations/Header/frvacance-republique-dominicaine-punta-cana-large.jpg", desc: "Une photo de mes vacances"},
  {url: "https://www.sciencesetavenir.fr/assets/img/2019/03/21/cover-r4x3w1000-5c936acd26314-kitten-1517537-1920.jpg", desc: "Mon chaton"},
  {url: "https://images-na.ssl-images-amazon.com/images/I/5147RNMU7jL._SX210_.jpg", desc: "Un classique de Bernard Werberd"},
  {url: "https://images.indianexpress.com/2019/07/cooking_759.jpg?w=759", desc: "Petit plat"},
  
  {url: "https://cdn.tui.be/img/destinations/Header/frvacance-republique-dominicaine-punta-cana-large.jpg", desc: "Une photo de mes vacances"},
  {url: "https://www.sciencesetavenir.fr/assets/img/2019/03/21/cover-r4x3w1000-5c936acd26314-kitten-1517537-1920.jpg", desc: "Mon chaton"},
  {url: "https://images-na.ssl-images-amazon.com/images/I/5147RNMU7jL._SX210_.jpg", desc: "Un classique de Bernard Werberd"},
  {url: "https://images.indianexpress.com/2019/07/cooking_759.jpg?w=759", desc: "Petit plat"},
  
  {url: "https://cdn.tui.be/img/destinations/Header/frvacance-republique-dominicaine-punta-cana-large.jpg", desc: "Une photo de mes vacances"},
  {url: "https://www.sciencesetavenir.fr/assets/img/2019/03/21/cover-r4x3w1000-5c936acd26314-kitten-1517537-1920.jpg", desc: "Mon chaton"},
  {url: "https://images-na.ssl-images-amazon.com/images/I/5147RNMU7jL._SX210_.jpg", desc: "Un classique de Bernard Werberd"},
  {url: "https://images.indianexpress.com/2019/07/cooking_759.jpg?w=759", desc: "Petit plat"},

  {url: "https://images.indianexpress.com/2019/07/cooking_759.jpg?w=759", desc: "Petit plat"},

]

class App extends Component {
  

  render() {
    return (
      <div className="container">
        {DATA.map(({url, desc, index}) => (
          <Card url={url} desc={desc} key={index} />
        ))}
      </div>
    )
  }
}

export default App;
