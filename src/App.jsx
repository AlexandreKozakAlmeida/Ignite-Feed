import { Header } from './components/Header';
import './global.css';
import styles from './App.module.css';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

function App() {

  const posts = [
    {
      id: 1,
      author: {
        avatarUrl: 'https://avatars.githubusercontent.com/u/98601344?v=4',
        name: 'Alexandre',
        role: 'Web Developer'
      },
      content: [
        { type: 'paragraph', content: 'Fala galera'}, 
        {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que eu fiz no NLW Return, evento da rocketseat!!'},
        { type: 'link', content:'alexandrekozakalmeida.github.io/doctor-care' },
      ],
      publishedAt: new Date('2022-11-17 10:40:00'),
    },
    {
      id: 2,
      author: {
        avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuE2gcLbyQCAClJVDfmQlP9pygX49wQppCFul57ULA8HDMEPGJjsZ4Avj2KUOqBUM-v8c&usqp=CAU',
        name: 'André',
        role: 'Web Developer backend'
      },
      content: [
        { type: 'paragraph', content: 'Fala galera'}, 
        {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que eu fiz no NLW Return, evento da rocketseat!!'},
        { type: 'link', content:'andre.github.io/doctor-care' },
      ],
      publishedAt: new Date('2022-11-18 15:45:00'),
    },
  ]
 
  return (
    <div className="App">
      <Header />
      
      <div className={styles.wrapper}>
      <Sidebar />
        <main>
          {posts.map(post => {
           return (
           <Post 
            key={post.id}
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt} 
           />
           )
          })}
        </main>
      </div>
    </div>
  )
}

export default App
