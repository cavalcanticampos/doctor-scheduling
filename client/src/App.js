import React from "react";
import styled from "styled-components";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { AppointmentsList, Login, Registration, NewAppointment } from "./pages";

const history = createBrowserHistory();

function App() {
  return (
    <Wrapper className="App">
      <BrowserRouter basename="/">
        <Switch>
          <Route
            exact={true}
            path={"/"}
            component={(props) => (
              <Login history={history} {...props}></Login>
            )}
          />
          <Route
            exact={true}
            path={"/user/register"}
            component={(props) => (
              <Registration history={history} {...props}></Registration>
            )}
          />
          <Route
            exact={true}
            path={"/appointments"}
            component={(props) => (
              <AppointmentsList history={history} {...props}></AppointmentsList>
            )}
          />
          <Route
            exact={true}
            path={"/appointments/create"}
            component={(props) => (
              <NewAppointment history={history} {...props}></NewAppointment>
            )}
          />
        </Switch>
      </BrowserRouter>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  background-color: white;
  color: black;
`;

export default App;
