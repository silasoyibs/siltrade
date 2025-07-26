import toast from "react-hot-toast";
import SpinnerMini from "../ui/SpinnerMini";

function Test() {
  return (
    <div>
      <button onClick={() => toast("hello")}>toast</button>
      <button onClick={() => toast.success("sucess")}>toast</button>
      <button onClick={() => toast.error("error").error}>toast</button>
    </div>
  );
}

export default Test;
