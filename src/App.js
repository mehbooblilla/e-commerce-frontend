import { Toaster } from "react-hot-toast";
import "./App.css";
import MainRoutes from "./Components/routes/MainRoutes";

function App() {
  return (
    <div>
      <MainRoutes />
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}

export default App;
