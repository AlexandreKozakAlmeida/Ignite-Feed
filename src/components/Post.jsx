import styles from '../styles/Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
           <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/98601344?v=4" />

                    <div className={styles.authorInfo}>
                        <strong> Alexandre </strong>
                        <span> Web Developer </span> 
                    </div>
                </div>

                <time title='17 de novembro às 17:27' dateTime='2022-11-17 17:26:21'>Publicado há 1h </time>
           </header>

           <div className={styles.content}>
                <p>
                    Fala galera
                </p>
                <p>
                    Acabei de subir mais um projeto no meu portifa. É um projeto que eu fiz no NLW Return, evento da rocketseat!!
                </p>
                <p>
                   <a href="#">
                        alexandrekozakalmeida.github.io/doctor-care
                   </a>
                </p>
                <p className={styles.hashtags}>
                   <a href="#"> #novoprojeto </a> 
                   <a href="#"> #nlw </a>
                   <a href="#"> #rocketseat </a>  
                </p>
           </div>

           <form className={styles.commentForm}>
                <strong>
                    Deixe seu Feedback
                </strong>
                <textarea placeholder='Deixe um comentário' />
             <footer>
                   <button type='submit'>Publicar</button>
             </footer>
           </form>
            
        </article>
    )
}