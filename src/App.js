import React, { PureComponent } from "react";
import "./App.css";
import AuthContext, { AuthProvider } from "./AuthContext";

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <h1>App Component</h1>
        <AuthProvider>
          <Child />
        </AuthProvider>
      </div>
    );
  }
}

class Child extends PureComponent {
  render() {
    console.log(this.context);
    return (
      <div>
        <h1>Child Component</h1>
      </div>
    );
  }
}

// 3 ways to use context
// 1. give child contextType => Child.contextType = AuthContext;

Child.contextType = AuthContext;
