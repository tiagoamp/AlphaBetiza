import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch } from "react-router-dom";
import './Admin.css';

export default function Admin() {
    return (    
        <div className="container-responsavel">
        
            <Router>

                <div className="admin__menu">
                    <h2>Responsável</h2>

                    <h5>TO DO: Implementar...</h5>

                    {/* <ul>
                        <li> <Link to="/">Criança nome</Link> </li>
                        <li> <Link to="/tasks">Cadastro de Tarefas</Link> </li>
                        <li> <Link to="/topics">Relatório de atividades</Link> </li>
                    </ul> */}

                </div>

                <div className="admin__content">
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/topics">
                            <Topics />
                        </Route>
                    </Switch>
                </div>

            </Router>

        </div>
    )
}

function Home() {
    return (
      <div>
        <h2>Criança nome - idade - ptos</h2>
      </div>
    );
  }
  
  function Topics() {
    // The `path` lets us build <Route> paths that are
    // relative to the parent route, while the `url` lets
    // us build relative links.
    let { path, url } = useRouteMatch();
  
    return (
      <div>
        <h2>Topics</h2>
        <ul>
          <li>
            <Link to={`${url}/rendering`}>Rendering with React</Link>
          </li>
          <li>
            <Link to={`${url}/components`}>Components</Link>
          </li>
          <li>
            <Link to={`${url}/props-v-state`}>Props v. State</Link>
          </li>
        </ul>
  
        <Switch>
          <Route exact path={path}>
            <h3>Please select a topic.</h3>
          </Route>
          <Route path={`${path}/:topicId`}>
            <Topic />
          </Route>
        </Switch>
      </div>
    );
  }
  
  function Topic() {
    // The <Route> that rendered this component has a
    // path of `/topics/:topicId`. The `:topicId` portion
    // of the URL indicates a placeholder that we can
    // get from `useParams()`.
    let { topicId } = useParams();
  
    return (
      <div>
        <h3>{topicId}</h3>
      </div>
    );
  }
  