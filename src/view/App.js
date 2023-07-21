import '../demo.scss';
import ListTodo from './Todos/ListTodo';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from './Nav/Nav';
import Home from './Home/Home'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Ex from './example/Ex';
import User from './User/User';
import DetailUser from './User/DetailUser';
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/todo">
              <ListTodo />
            </Route>
            <Route path="/about">
              <Ex />
            </Route>
            <Route path="/user" exact>
              <User />
            </Route>
            <Route path="/user/:id">
              <DetailUser />
            </Route>
          </Switch>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <ToastContainer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

