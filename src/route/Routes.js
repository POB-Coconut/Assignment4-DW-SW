import React from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'
import { useTransition, animated } from 'react-spring'
import { ROUTES } from 'utils/constants'
import loadable from '@loadable/component'

const HOME = loadable(() => import('pages/Main'))
const RESULT = loadable(() => import('pages/RESULT'))
const FILTERS = loadable(() => import('pages/FILTERS'))
const NotFound = loadable(() => import('pages/NotFound'))

const Routes = () => {
  const location = useLocation()
  const transitions = useTransition(location, (location) => location.pathname, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  })

  return transitions.map(({ item: location, props, key }) => (
    <animated.div key={key} className="absolute w-full" style={props}>
      <Switch location={location}>
        <Route exact path={ROUTES.HOME} component={HOME} />
        <Route path={ROUTES.RESULT} component={RESULT} />
        <Route path={ROUTES.FILTERS} component={FILTERS} />
        <Route component={NotFound} />
      </Switch>
    </animated.div>
  ))
}

export default Routes
