import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import AppBody from "./components/AppBody";
import Login from "./components/Login";
import ValidIdWrapper from "./components/ValidIDWrapper";
import LiveDataProvider from "./components/LiveDataProvider";
import GameStateProvider from "./components/GameStateProvider";
import AdminLogin from "./components/AdminLogin";

export default function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Login/>
                </Route>
                <Route exact path="/admin">
                    <AdminLogin/>
                </Route>
                <Route path="/:id">
                    <ValidIdWrapper>
                        <GameStateProvider>
                            <LiveDataProvider>
                                <AppBody/>
                            </LiveDataProvider>
                        </GameStateProvider>
                    </ValidIdWrapper>
                </Route>
            </Switch>
        </Router>
    )
}