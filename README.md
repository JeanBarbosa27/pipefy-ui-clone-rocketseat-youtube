# Pipefy UI Clone - (Rocketseat on YouTube)
This project was created to following
[a Rocketseat video that "clones" Pipefy interface](https://www.youtube.com/watch?v=awRtgpRsdTQ), for studying and React
practicing purposes.

## Third parties libraries used
- [React](https://github.com/facebook/react);
- [React Icons](https://react-icons.github.io/react-icons/);
- [React DnD](https://react-dnd.github.io/react-dnd/about)
- [Immer](https://github.com/immerjs/immer)

## Running locally
This is a React project, so to run it in your local machine you'll need to have Node and Yarn installed. With
this set, open your favorite shell and run the commands below:
1. `yarn`, to install the dependencies;
2. `yarn start`, to initialize the server.

After that the application will be available at [http://localhost:3000](http://localhost:3000) and it will
refresh when changes were done in the code.

## Roadmap
After following the whole video, my goal is implementing some other features in this project like:

- [x] Drop a card in a empty list;
- [x] Add list scrolling;
- [X] Deploy on Github Pages;
- [ ] Add responsivity;
- [ ] Adapt the project to use TypeScript;
- [ ] Open card details in a modal;
- [ ] Cards CRUD;
- [ ] Lists CRUD;
- [ ] Lists Drag and Drop;
- [ ] State Management;
- [ ] Explore other drag and drop options that are available in React DnD;
- [ ] Creating a Back-End to data persistence (probably using SQLite3 and Node with GraphQL);
- [ ] Connecting a GraphQL Client;
- [ ] Esquema de criação e login de usuários
- [ ] Criar um avatar default, caso o usuário logado não tenha imagem cadastrada

## Deploy
This app was deployed using Github Pages, but it's using [git tags](https://git-scm.com/book/en/v2/Git-Basics-Tagging)
to checkpoint project's [semantic versioning](https://semver.org/). After guaranting the correct version due to the
changes that were made, just run `yarn deploy` to deploy the changes to Github Pages and then it will be available at
[http://JeanBarbosa27.github.io/pipefy-ui-clone-rocketseat-youtube](http://JeanBarbosa27.github.io/pipefy-ui-clone-rocketseat-youtube).
