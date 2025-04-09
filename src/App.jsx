import { BookMark } from "./components/Bookmark"
import { Features } from "./components/Features"
import { Header } from "./components/Header"
import { Layout } from "./Layout"

function App() {
  return (
    <Layout>
      <Header />
      <BookMark />
      <Features/>
    </Layout>
  )
}

export default App
