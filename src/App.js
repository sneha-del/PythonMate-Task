import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  // const data = useSelector((state) => state.signupReducer);
  // console.log(data);

  return (
    <Layout>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login"></Redirect>
        </Route>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </Layout>
  );
}

export default App;
