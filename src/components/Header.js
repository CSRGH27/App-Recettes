import React from 'react'

const Header = ({ pseudo }) => {
    const formatPseudo = pseudo => /[aeiouy]/i.test(pseudo[0]) ? `d'${pseudo}` : `de ${pseudo}`  //Return a true if the fisrt letter of the param is a voyelle

    return (
        <header>
            <h1>La boite a recette de {formatPseudo(pseudo)}</h1>
        </header>
    )
}

export default Header
