import React, { PureComponent } from "react";
import "./App.css";
import AuthContext, { AuthProvider } from "./AuthContext";
import Child2 from "./Child3.js";
import Child3 from "./Child3.js";

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <h1>App Component</h1>
        <AuthProvider>
          <Child1 />
        </AuthProvider>
      </div>
    );
  }
}

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
        <Child2 />
        <Child3 />
      </div>
    );
  }
}

// 3 ways to use context
//
// 1. give child contextType => Child.contextType = AuthContext;

Child1.contextType = AuthContext;
