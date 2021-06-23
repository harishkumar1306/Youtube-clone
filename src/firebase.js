import firebase from 'firebase/app';

import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCk8m6xY9R1J3VLMzDqbXTMJ3y6Gh4aDXA",
    authDomain: "youtub-clone-project.firebaseapp.com",
    projectId: "youtub-clone-project",
    storageBucket: "youtub-clone-project.appspot.com",
    messagingSenderId: "348274884425",
    appId: "1:348274884425:web:4e612d9e4846f42486e498"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase.auth();