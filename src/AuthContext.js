import React, { PureComponent } from "react";

const AuthContext = React.createContext();

// for third method of using context in class components
// not necessary for Child1 and Child2 examples
export const AuthConsumer = AuthContext.Consumer;
// ---------------------------------------------


export class AuthProvider extends PureComponent {
  state = { name: "", isAuthenticated: false };

  logIn = () => {
    this.setState({ name: "Bob", isAuthenticated: true });
  };

  logOut = () => {
    this.setState({ name: "", isAuthenticated: false });
  };

  render() {
    const { name, isAuthenticated } = this.state;
    const { logIn, logOut } = this;
    return (
      <AuthContext.Provider
        value={{
          name,
          isAuthenticated,
          logIn,
          logOut,
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export default AuthContext;
