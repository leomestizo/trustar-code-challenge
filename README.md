# NASA TechPort client

This project is part of the process to apply for the front-end developer position at TruSTAR. The project is a client to showcase NASA's latest TechPort projects.

## Getting started

Use [Yarn](https://yarnpkg.com/) to install the dependencies. To do so, execute the following command:
```
yarn
```

Next up, you have to add the environment variables. To do that, you have to create an `.env` file by copying the `.env.example` file:
```
cp .env.example .env
```

After that, just fill the values. `API_BASE_URL` corresponds to the URL of the NASA TechPort API and, as the name suggests, `API_KEY` is an API key that you can obtain from the [NASA API portal](https://api.nasa.gov/).

Once you finish setting the the environment variables, you can start the development server by running:
```
yarn start
```

## Note to the reviewers

You are going to see that the reducer functions have statements like the following one:
```
state.projectList = [];
```
This could be seen as a potential issue (mutating the state of the store directly). However, I am using [Redux Toolkit](https://redux-toolkit.js.org/) which in turn uses [Immer](https://immerjs.github.io/immer/docs/introduction) behind scenes. Immer allows you to write code that looks like mutable, but without compromising mutability. I just wanted to point this out in case you didn't know the library.

The project was created from scratch (no tools like Create React App were used). If you've got a question or if you see something weird about something I did, please let me know!
