import { PureComponent } from "react";
import AuthContext from "./AuthContext";
import Child3 from "./Child3";

class Child2 extends PureComponent {
  render() {
    // console.log(this.context);
    const { name, isAuthenticated, logIn, logOut } = this.context;
    return (
      <div>
        <h1>Child3 Component</h1>
        <h2>User: {name}</h2>
        <h2>
          Authenticated: {isAuthenticated ? "Authenticated" : "Unauthenticated"}
        </h2>
        <button onClick={logIn}>Log In</button>
        <button onClick={logOut}>Log Out</button>
        <Child3 />
      </div>
    );
  }
}

Child2.contextType = AuthContext;
export default Child2;
