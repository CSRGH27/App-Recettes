import React, { Component } from 'react'
import Header from './components/Header';
import recette from './recettes'
import Admin from './components/Admin';
import Card from './components/Card';
// CSS
import './App.css'

// Firebase
import base from './base';



class App extends Component {
  state = {
    pseudo: this.props.match.params.pseudo,
    recettes: {}
  }

  componentDidMount() {
    this.ref = base.syncState(`/${this.state.pseudo}/recettes`, {
      context: this,
      state: 'recettes'
    })
  }

  componentWillUnmount() {     //VA empecher 
    base.removeBinding(this.ref)
  }

  ajouterRecette = (recette) => {
    const recettes = this.state.recettes
    recettes[`recette-${Date.now()}`] = recette   //On remplace la cle primare des recettes
    this.setState({ recettes: recette })
  }

  majRecette = (key, newRecette) => {
    const recettes = this.state.recettes
    recettes[key] = newRecette   //On remplace la cle primare des recettes
    this.setState({ recettes: recette })
  }

  supprimerRecette = (key) => {

    recette[key] = null
    this.setState({ recettes: recette })

  }

  chargerExemple = () => {
    this.setState({ recettes: recette })
  }

  render() {
    const cards = Object.keys(this.state.recettes)
      .map(key =>
        <Card
          key={key}
          detail={this.state.recettes[key]} />)



    return (
      <div className='box'>
        <Header pseudo={this.state.pseudo}></Header>
        <div className='cards'>
          {cards}
        </div>
        <Admin
          pseudo={this.state.pseudo}
          recettes={this.state.recettes}
          ajouterRecette={this.ajouterRecette}
          majRecette={this.majRecette}
          supprimerRecette={this.supprimerRecette}
          chargerExemple={this.chargerExemple}></Admin>
      </div>
    )
  }
}

export default App
