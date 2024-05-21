import { Post } from './Post'
import './styles.css'

export function App() {
  return (
    <div>
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