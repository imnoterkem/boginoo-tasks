import React from 'react';
import { HomeDefault, Login, SignUp, Move } from './pages';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './style/main.scss';
import { AuthContext, AuthProvider } from './Provider/provider'

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Switch>
                    <Route path="/" exact>
                        <HomeDefault />
                    </Route>
                    <Route path="/login" exact>
                        <Login />
                    </Route>
                    <Route path="/signup" exact>
                        <SignUp />
                    </Route>
                    <Route path="*" exact>
                        <Move/>
                    </Route>
                </Switch>
            </Router>
        </AuthProvider>
    )
}

export default App;