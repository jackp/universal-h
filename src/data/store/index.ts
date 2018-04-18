import SessionStore from "./SessionStore";
import UserStore from "./UserStore";

class AppState {
  public session: SessionStore;
  public users: UserStore;

  constructor() {
    this.users = new UserStore(this);
    // Initialize SessionStore last as it injects initial data into other stores
    this.session = new SessionStore(this);
  }
}

export default AppState;