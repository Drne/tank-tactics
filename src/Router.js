import {HashRouter as Router, Route, Switch} from "react-router-dom";
import AppBody from "./components/AppBody";
import Login from "./components/Login";
import ValidIdWrapper from "./components/ValidIDWrapper";
import LiveDataProvider from "./components/LiveDataProvider";
import GameStateProvider from "./components/GameStateProvider";
import AdminLogin from "./components/AdminLogin";
import {SnackbarProvider} from "notistack";
import KeyEventListener from "./components/KeyEventListener";

export default function AppRouter() {
    return (
        <Router style={{height: '100%'}} basename={"/tank-tactics"}>
            <Switch style={{height: '100%'}}>
                <Route exact path="/" style={{height: '100%'}}>
                    <Login/>
                </Route>
                <Route exact path="/admin">
                    <AdminLogin/>
                </Route>
                <Route path="/:id">
                    <ValidIdWrapper>
                        <SnackbarProvider anchorOrigin={{vertical: 'top', horizontal: 'center'}}>
                            <GameStateProvider>
                                <LiveDataProvider>
                                    <KeyEventListener>
                                        <AppBody/>
                                    </KeyEventListener>
                                </LiveDataProvider>
                            </GameStateProvider>
                        </SnackbarProvider>
                    </ValidIdWrapper>
                </Route>
            </Switch>
        </Router>
    )
}