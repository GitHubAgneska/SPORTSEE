## SPORTSEE
## React dashboard analytics with ExpressJs micro API
---
### https://sportsee.herokuapp.com/
---

<p align="center">
    <img width="600px" src="./client/src/assets/imgs/sportSee.png" width="800" alt="app screenshot">
</p>

---

#### Class-based React architecture
---
#### STACK
- HTML5/CSS3/Javascript
- React
- Recharts library
- Styled Components
----
### Prerequisites

- [NodeJS](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)

<small>[ If you are working with several versions of NodeJS, we recommend you install [nvm](https://github.com/nvm-sh/nvm). This tool will allow you to easily manage your NodeJS versions. ]</small>

----
### Launching the project
- Fork the repository
- Clone it on your computer.
- The `npm i` command will allow you to install the dependencies.
- The `npm run start` command will allow you to run the micro API.
----

``` bash
SPORTSEE DATA FLOW

┌─────────────┐     ┌─────────────────┐
│ LOCAL DATA  ├────►│SERVED by Express│
└─────────────┘     │on 5000          │
                    └─────────┬───────┘
                              │
      ┌───────────────────────▼────────────────────────┐
      │API routes  : 5000/api/user/:id                 │
      │              5000/api/user/:id/activity        │
      │              5000/api/user/:id/average-session │
      │              5000/api/user/:id/performance     │
      └───────────────────────┬────────────────────────┘
                              │
                              │
                              │
                  ┌───────────┴───────────┐
                  │                       │
                  │  React client fetch   │
                  │                       │
                  └───────────────────────┘

```




