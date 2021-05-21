import Login from './components/Login'
import Users from './components/Users'
import Posts from './components/Posts'
import InputsGallery from './components/InputsGallery'
import { Route, Switch } from 'react-router-dom'
import React from 'react'
import Layout from './components/Layout'
function App() {
    return (
        <Layout>
            <Switch>
                <Route path="/users" component={Users} />
                <Route path="/login" component={Login} />
                <Route path="/posts" component={Posts} />
                <Route path="/inputs" component={InputsGallery} />
            </Switch>
        </Layout>
    )
}

export default App
