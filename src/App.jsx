import { Post } from './Post'
import { Header } from './components/Header'
import './styles.css'

export function App() {
  return (
    <div>
      <Header />
      <Post
        author="Saulo Christian"
        content="Lorem Ipsum" 
      />
      <Post
        author="Luiz Guilherme"
        content="Video de gatinhos fofos" 
      />
    </div>
  )
}