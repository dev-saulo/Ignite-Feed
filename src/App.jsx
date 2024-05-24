import { Post } from './Post'
import { Header } from './components/Header'
import styles from './App.module.css'
import './global.css'
import { Sidebar } from './components/Sidebar'

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Saulo Christian"
            content="Lorem Ipsum" 
          />
          <Post
            author="Luiz Guilherme"
            content="Video de gatinhos fofos" 
          />
        </main>
      </div>
    </div>
  )
}