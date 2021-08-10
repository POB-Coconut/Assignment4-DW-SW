import React from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'
import { useTransition, animated } from 'react-spring'
import { Main, Result, Filters } from 'pages'

function Routes() {
  const location = useLocation()
  const transitions = useTransition(location, (location) => location.pathname, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  })

  return transitions.map(({ item: location, props, key }) => (
    <animated.div key={key} className="absolute w-full" style={props}>
      <Switch location={location}>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/result">
          <Result />
        </Route>
        <Route path="/filters">
          <Filters />
        </Route>
      </Switch>
    </animated.div>
  ))
}

export default Routes
