import "./App.css";
import logo from "./assets/be-me.jpeg";

function App() {
  return (
    <>
      <div
        className="
        flex
        flex-col
        align-middle
        justify-center	
        h-screen
        items-center
        content-evenly
        p-8
        bg-orange-100
        text-cyan-700	 
      "
      >
        <div className="max-w-[100px]">
          <img
            src={logo}
            alt="logo"
            className="aspect-square
            rounded-full
          "
          />
        </div>

        <h1
          className="
          text-4xl"
        >
          Hola, Mundo
        </h1>
      </div>
    </>
  );
}

export default App;
