import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import Edit from 'pages/Edit'
import StopWatch from 'pages/StopWatch'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={StopWatch} />
        <Route path="/Edit" component={Edit} />
        {/* Not Found */}
        <Route component={() => <Redirect to="/" />} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
