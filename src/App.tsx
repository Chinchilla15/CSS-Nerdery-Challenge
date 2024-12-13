import "./assets/styles/app.css";
import SidebarLeft from "./components/SidebarLeft";
import SidebarRight from "./components/SidebarRight";
import Main from "./components/Main";
import "./assets/styles/global.css";
import "./assets/styles/main.css";
import "./assets/styles/sidebar-left.css";
import "./assets/styles/sidebar-right.css";

function App() {
  return (
    <>
      <SidebarLeft />
      <Main />
      <SidebarRight />
    </>
  );
}

export default App;
