import React, { PureComponent } from "react";
import "./App.css";
import AuthContext, { AuthProvider, AuthConsumer } from "./AuthContext";

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <h1>App Component</h1>
        <AuthProvider>
          <Child1 />
          <Child2 />
          <Child3 />
        </AuthProvider>
      </div>
    );
  }
}

// 1. give child contextType => Child.contextType = AuthContext;
class Child1 extends PureComponent {
  render() {
    // console.log(this.context);
    const { name, isAuthenticated, logIn, logOut } = this.context;
    return (
      <div>
        <h1>Child Component</h1>
        <h2>User: {name}</h2>
        <h2>
          Authenticated: {isAuthenticated ? "Authenticated" : "Unauthenticated"}
        </h2>
        <button onClick={logIn}>Log In</button>
        <button onClick={logOut}>Log Out</button>
      </div>
    );
  }
}

Child1.contextType = AuthContext;



// 2. write static contextType = AuthContext inside the class component
class Child2 extends PureComponent {
  static contextType = AuthContext
  render() {
    const { name, isAuthenticated, logIn, logOut } = this.context;
    return (
      <div>
        <h1>Child Component</h1>
        <h2>User: {name}</h2>
        <h2>
          Authenticated: {isAuthenticated ? "Authenticated" : "Unauthenticated"}
        </h2>
        <button onClick={logIn}>Log In</button>
        <button onClick={logOut}>Log Out</button>
      </div>
    );
  }
}

// 3. use AuthConsumer;
class Child3 extends PureComponent {
  static contextType = AuthContext
  render() {
      <AuthConsumer>
        {props => {
          const { name, isAuthenticated, logIn, logOut } = props
          return(
            <div>
              <h1>Child Component</h1>
              <h2>User: {name}</h2>
              <h2>
                Authenticated: {isAuthenticated ? "Authenticated" : "Unauthenticated"}
              </h2>
              <button onClick={logIn}>Log In</button>
              <button onClick={logOut}>Log Out</button>
            </div>
          )
        }}
      </AuthConsumer>
  }
}

