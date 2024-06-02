import Board from "./Component/Board";
import Heder from "./Component/Header";
function App() {

  return (
    <main> 
    <Heder />
    <div className="flex justify-center pt-40">
    <Board/>
    </div>
    </main>
  )
}

export default App;
