# CarboX

> Carbon emissions tracker built with React, NodeJS and [Carbon Interface API](https://www.carboninterface.com/), using [Material-UI](https://material-ui.com/) and [ApexCharts](https://apexcharts.com/) to power the user experience and data visualization.

## Overview

CarboX is a single interface app that allows the user to collect electricity usage by location,
and estimates its carbon emissions over time.

It was created upon 2 main features: the Electricity Form and the Carbon Timeline.

## Live version

The live version is available at: <https://carbox.netlify.app/>

## Install

This project was created using [CRA](https://github.com/facebook/create-react-app).
To run the code, first install all the dependencies needed with:

`npm install`

After the installation, create a `.env` file with your [Carbon Interface API](https://www.carboninterface.com/)
key, following the example provided in the `.env.sample`.

Then, you will be able to start the project executing the command:

`npm start`

To run the server and/or client sides separately, you can also use:

`npm start:server` and/or `npm start:app`

It will open [http://localhost:3000](http://localhost:3000) (default),
so you can view the project in the browser.

### Demo

<!-- ![Demo](./demo.gif) -->

## Architecture

The project was architectured in the following way:

### `/server`

The `/server` includes the server-side codebase. A basic `server.ts` was created with [Express](https://expressjs.com/), so that the project can be scaled up at some point.

### `/src`

The `/src` contains all the client-side codebase.

```
.
├── components
│   ├── carbon
│   │   ├── CarbonEstimates.tsx
│   │   └── CarbonTimeline.tsx
│   ├── common
│   │   ├── Footer.tsx
│   │   └── NavBar.tsx
│   ├── electricity
│   │   └── ElectricityForm.tsx
│   └── Dashboard.tsx
├── constants
│   ├── locations.ts
│   └── units.ts
├── hooks
│   └── useInputState.tsx
├── styles
│   ├── CarbonEstimatesStyles.tsx
│   ├── DashboardStyles.tsx
│   ├── ElectricityFormStyles.tsx
│   ├── FooterStyles.tsx
│   ├── GlobalStyles.tsx
│   └── NavBarStyles.tsx
├── types
│   └── responseTypes.ts
├── utils
│   ├── apiCall.ts
│   ├── apiService.ts
│   └── domains.ts
├── _app.tsx
└── index.tsx

```

#### `/components`

This folder includes all the components used to build the project, dumb and smart ones.

While the dumb components used were clustered at the `/common` folder, smart components were
arranged according to the their features under `/carbon` and `electricity`.

#### `/utils` and `/types`

It contains all the functions and types used to fetch data from the [Carbon Interface API](https://www.carboninterface.com/).

#### `/hooks` and `/constants`

It includes the customized hooks, constants and types used to build this project.

#### `/styles`

Since the components were styled using [Material-UI](https://material-ui.com/)’s styling solution and best practises,
their files were clustered here. This way, the components’ logic and styles are cleanly separate.

## Contributing

Pull requests are welcome. For major changes, open an issue first to discuss what you would like to change.
Please make sure to include or update tests as appropriate.

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Copyright © 2021 Vasco Oliveira
