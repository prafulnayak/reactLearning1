import Header from "./assets/components/Header/Header";
import CoreConcepts from "./assets/components/CoreConcepts";
import Examples from "./assets/components/Examples";

function App() {

  return (
    <>
      <Header />
      <main>
        <CoreConcepts/>
        <Examples/>
        <h2>Time to get started!</h2>
      </main>
    </>
  );
}

export default App;
