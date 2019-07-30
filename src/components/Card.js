import React from 'react'

const Card = ({ detail }) => {
    const ingredients = detail.ingredients
        .split(',')  //Avec split on demande de couper la liste a chaue virgule
        .map(item => <li key={item}>{item}</li>)

    const instructions = detail.instructions
        .split('\n')  //Avec split on demande de couper la liste a chaue virgule
        .map(item => <li key={item}>{item}</li>)

    const requireImage = (chemin) => {    //Permet de gerer si l'admin s'est rropmpe dans le nom de l'image
        try {
            return require(`../img/${chemin}`)
        } catch (err) {
            return require(`../img/default.jpeg`)
        }

    }
    return (
        <div className="card">
            <div className="image">
                <img src={requireImage(detail.image)} alt={detail.nom} />
            </div>
            <div className="recette">
                <h2>{detail.nom}</h2>
                <ul className="liste-ingredients">
                    {ingredients}
                </ul>
                <ol className="liste-instructions">
                    {instructions}
                </ol>
            </div>
        </div>
    )
}

export default Card
