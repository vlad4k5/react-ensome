import 'normalize.css'
import './assets/styles/global.scss'
import Header from "./components/Header/Header"
import Home from './pages/Home/Home'

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
      </main>
    </div>
  )
}

export default App
