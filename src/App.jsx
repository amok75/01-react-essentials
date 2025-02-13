import { Header } from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept";
import Examples from "./components/Examples";

function App() {
  console.log("App run");

  return (
    <>
      <Header />
      <main>
        <CoreConcept />
        <Examples />
        <h2>Time to get started!</h2>
      </main>
    </>
  );
}

export default App;
