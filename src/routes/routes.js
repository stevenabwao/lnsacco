import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from '../components/Home/home.js'
import Layout from '../hoc/Layout/layout';
import About from '../components/About/about'
import Resources from '../components/Resources/resources'
import Contact from '../components/Contact/contacts'
import Calculator from '../components/calculator/calculator'
import Loans from '../components/products/loans'
class Routes extends Component {

    render() {
        return (
            <Layout>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" exact component={About} />
                    <Route path="/contacts" exact component={Contact} />
                    <Route path="/resources" exact component={Resources} />
                    <Route path="/calculator" exact component={Calculator} />
                    <Route path="/loans" exact component={Loans} />
                </Switch>
            </Layout>

        )
    }
}
export default Routes

