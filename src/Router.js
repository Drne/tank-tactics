import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import AppBody from "./components/AppBody";
import Login from "./components/Login";
import ValidIdWrapper from "./components/ValidIDWrapper";
import LiveDataProvider from "./components/LiveDataProvider";
import GameStateProvider from "./components/GameStateProvider";
import AdminLogin from "./components/AdminLogin";
import {SnackbarProvider} from "notistack";

export default function AppRouter() {
    return (
        <Router style={{height: '100%'}}>
            <Switch style={{height: '100%'}}>
                <Route exact path="/" style={{height: '100%'}}>
                    <Login/>
                </Route>
                <Route exact path="/admin">
                    <AdminLogin/>
                </Route>
                <Route path="/:id">
                    <ValidIdWrapper>
                        <SnackbarProvider anchorOrigin={{ vertical: 'top', horizontal: 'center'}}>
                            <GameStateProvider>
                                <LiveDataProvider>
                                    <AppBody/>
                                </LiveDataProvider>
                            </GameStateProvider>
                        </SnackbarProvider>
                    </ValidIdWrapper>
                </Route>
            </Switch>
        </Router>
    )
}