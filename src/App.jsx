import { BookMark } from "./components/Bookmark"
import { Extensions } from "./components/Extensions"
import { Features } from "./components/Features"
import { Header } from "./components/Header"
import { Layout } from "./Layout"

function App() {
  return (
    <Layout>
      <Header />
      <BookMark />
      <Features/>
      <Extensions />
    </Layout>
  )
}

export default App
