import React from 'react'

const AdminForm = ({ id: key, majRecette, recettes, supprimerRecette }) => {
    const recette = recettes[key]

    const handleChange = (e, key) => {
        const { name, value } = e.target //on recupere le name et la clef
        const recette = recettes[key]  //on cree une const avec la recette qu'on modifie
        recette[name] = value  //sur cette recette on modifie un detail suivant le name de l'input
        majRecette(key, recette) //Puis on active la function majRecette
    }
    return (
        <div className="card">
            <form action="" className="admin-form">
                <input value={recette.nom} onChange={e => handleChange(e, key)} type="text" name="nom" placeholder="Nom de la recette" />
                <input value={recette.image} onChange={e => handleChange(e, key)} type="text" name="image" placeholder="Adresse de l'image" />
                <textarea value={recette.ingredients} onChange={e => handleChange(e, key)} name="ingredients" placeholder="Liste des ingredients" cols="30" rows="3" />
                <textarea value={recette.instructions} onChange={e => handleChange(e, key)} name="instructions" placeholder="Liste des instructions" cols="30" rows="15" />

            </form>
            <button onClick={() => supprimerRecette(key)}>Supprimer</button>
        </div>
    )
}

export default AdminForm


