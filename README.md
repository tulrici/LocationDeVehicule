# Daemonic

## Description

Ce projet est une application React Native de base pour la gestion de la location de véhicules. Il est idéal pour démarrer un nouveau projet car il fournit une structure bien formatée avec une configuration simple et claire, incluant la navigation entre les écrans, la gestion des API, et l'utilisation de Tailwind CSS pour le style.

## Installation

Pour installer et exécuter ce projet localement, suivez ces étapes :

1. Clonez ce dépôt :
    ```bash
    git clone https://github.com/votre-utilisateur/LocationDeVehicule.git
    ```

2. Accédez au répertoire du projet :
    ```bash
    cd LocationDeVehicule
    ```

3. Installez les dépendances :
    ```bash
    npm install
    ```

4. Exécutez le projet :
    ```bash
    npm start
    ```

## Structure du Projet

La structure du projet est organisée comme suit :



```
LocationDceVehicule/
├── .expo/
├── .vscode/
├── assets/
├── node_modules/
├── src/
│ ├── api/
│ │ └── userApi.js
│ ├── components/
│ │ ├── ImageRound.js
│ │ ├── MenuRight.js
│ │ └── ButtonRedirection.js
│ ├── navigation/
│ │ └── AppNavigator.js
│ ├── screens/
│ │ ├── HomeScreen.js
│ │ ├── UserScreen.js
│ │ ├── HooksExampleScreen.js
│ │ ├── DemoMenu.js
│ │ └── CreateUserScreen.js
├── .gitignore
├── App.js
├── README.md
├── app.json
├── babel.config.js
├── package-lock.json
├── package.json
└── tailwind.config.js
```


### Fichiers et Dossiers Principaux

- `src/api/userApi.js` : Gère les appels API pour récupérer, créer, mettre à jour et supprimer des utilisateurs.
- `src/components/ImageRound.js` : Composant pour afficher des images rondes.
- `src/components/MenuRight.js` : Composant pour le menu latéral animé.
- `src/components/ButtonRedirection.js` : Composant pour les boutons de redirection dans le menu.
- `src/navigation/AppNavigator.js` : Gère la navigation entre les écrans.
- `src/screens/HomeScreen.js` : Écran d'accueil avec navigation vers différents écrans.
- `src/screens/UserScreen.js` : Écran affichant la liste des utilisateurs récupérés depuis l'API.
- `src/screens/HooksExampleScreen.js` : Écran démontrant l'utilisation de divers hooks React.
- `src/screens/DemoMenu.js` : Écran avec un menu latéral animé.
- `src/screens/CreateUserScreen.js` : Écran permettant la création d'un utilisateur.
- `App.js` : Point d'entrée principal de l'application.
- `tailwind.config.js` : Configuration de Tailwind CSS pour le projet.

## Utilisation

### Écran d'Accueil

L'écran d'accueil (`HomeScreen.js`) affiche un message de bienvenue et des boutons pour naviguer vers les écrans des utilisateurs, des exemples de hooks et du menu de démonstration.

### Écran des Utilisateurs

L'écran des utilisateurs (`UserScreen.js`) affiche une liste des utilisateurs récupérés depuis l'API. Vous pouvez actualiser la liste en appuyant sur le bouton "Refresh Users".

### Écran des Exemples de Hooks

L'écran des exemples de hooks (`HooksExampleScreen.js`) démontre l'utilisation de divers hooks React tels que `useState`, `useEffect`, `useContext`, `useReducer`, `useCallback`, `useMemo`, et `useRef`.

### Écran du Menu de Démonstration

L'écran du menu de démonstration (`DemoMenu.js`) inclut un menu latéral animé avec des boutons pour naviguer vers différents écrans.

### Écran de Création d'Utilisateur

L'écran de création d'utilisateur (`CreateUserScreen.js`) permet de remplir un formulaire pour créer un nouvel utilisateur. Le formulaire est validé avant l'envoi des données à l'API.

### API

L'API est gérée dans le fichier `src/api/userApi.js`. Les fonctions disponibles incluent :

- `getUserApi` : Récupère la liste des utilisateurs.
- `getUserById` : Récupère les détails d'un utilisateur par ID.
- `createUser` : Crée un nouvel utilisateur.
- `updateUser` : Met à jour les informations d'un utilisateur.
- `deleteUser` : Supprime un utilisateur.

## Configuration de Tailwind CSS

Le fichier `tailwind.config.js` est configuré pour inclure tous les fichiers JavaScript et TypeScript dans le projet :

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}", "./**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
