import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCvqBIbtvEfFbzHd8Z-MQkyp3hdF6-tPgg",
  authDomain: "recette-app-a8146.firebaseapp.com",
  databaseURL: "https://recette-app-a8146.firebaseio.com"
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base
