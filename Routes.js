import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import AssignDiv from "./component/hrd/assigndivisi/assigndiv";
import InputDiv from "./component/hrd/inputdivisi/inputdiv";
import InputEmp from "./component/hrd/inputkaryawan/inputemp";
import ListCV from "./component/hrd/listcv/listcv";
import ListDiv from "./component/hrd/listdivisi/listdiv";
import ListEmp from "./component/hrd/listkaryawan/listemp";
import history from "./history";

export default class Routes extends Component {
    render () {
        return (
            <Router history = {history}>
                <Switch>
                    <Route path="/" exact component={InputEmp} />
                    <Route path="/ListEmp" component={ListEmp} />
                    <Route path="/InputDiv" exact component={InputDiv} />
                    <Route path="/ListDiv" exact component={ListDiv} />
                    <Route path="/AssignDiv" exact component={AssignDiv} />
                    <Route path="/ListCV" exact component={ListCV} />
                </Switch>
            </Router>
        )
    }
}