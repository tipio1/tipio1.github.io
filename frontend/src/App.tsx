import { Header } from "./components/layout/header"
import { Home } from "./page/home"
import { Slider } from "./components/layout/slider"
import { Footer } from "./components/layout/footer"

function App() {
  return (
    <div className="body">
      <Header /><br></br>
      <div className="slideBloc">
      <Slider />
      </div>
      <Home />
      <Footer />
    </div>
  )
}

export default App
