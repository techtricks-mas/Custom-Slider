import Switcher from "./Components/Switcher";

function App() {
  return (
    <div className="App">
      <div className="w-[600px] m-auto flex justify-center h-screen items-center gap-5">
        <Switcher></Switcher>
        <Switcher></Switcher>
        <Switcher></Switcher>
      </div>
    </div>
  );
}

export default App;
