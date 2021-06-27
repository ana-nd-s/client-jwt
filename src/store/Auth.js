import { action } from "easy-peasy";

const AuthStore = {
  isAuthorised: false,

  setIsAuthorised: action((state, payload) => {
    state.isAuthorised = payload;
  })

};

export default AuthStore;
