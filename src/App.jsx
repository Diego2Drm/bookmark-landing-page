import { BookMark } from "./components/Bookmark"
import { Extensions } from "./components/Extensions"
import { Faqs } from "./components/Faqs"
import { Features } from "./components/Features"
import { Header } from "./components/Header"
import { Login } from "./components/Login"


function App() {
  return (
    <>
      <Header />
      <BookMark />
      <Features />
      <Extensions />
      <Faqs />
      <Login />
    </>
  )
}

export default App
