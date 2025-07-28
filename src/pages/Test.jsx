import { signout } from "../services/apiAuth";

function Test() {
  return <button onClick={signout}>LogOut</button>;
}

export default Test;
