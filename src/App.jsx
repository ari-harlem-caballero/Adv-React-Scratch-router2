import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import DetailPage from "./views/Detail/DetailPage";
import ListPage from "./views/List/ListPage";

export default function App() {
  return (
    <Switch>
      <Route path='/ingredients/:name'>
        <DetailPage />
      </Route>
      <Route path='/'>
        <ListPage />
      </Route>
    </Switch>
  )
}
