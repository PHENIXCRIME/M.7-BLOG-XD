import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Reset } from 'styled-reset'
import routes from './config/routes'
import withHelmet from './utils/withHelmet'
import GlobalStyles from './components/GlobalStyle'
import Navbar from './components/Navbar'

function App () {
  return (
    <>
      <GlobalStyles />
      <Reset />
      <Router>
        <Navbar />
        <Suspense fallback='...loading'>
          <Switch>
            {Object.keys(routes).map(routeKey => (
              <Route key={routeKey} {...routes[routeKey]} />
            ))}
          </Switch>
        </Suspense>
      </Router>
    </>
  )
}

export default withHelmet('Phenixcrime | Blog-App')(App)
