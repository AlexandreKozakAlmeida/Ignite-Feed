import styles from '../styles/Post.module.css';
import { Avatar } from './Avatar';
import { Comments } from './Comments';
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export function Post({content, publishedAt, author}){

   const publishedDatedFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
   })

   const publishedDateRealtiveToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
   })
   
    return (
        <article className={styles.post}>
           <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />

                    <div className={styles.authorInfo}>
                        <strong> {author.name} </strong>
                        <span>{author.role} </span> 
                    </div>
                </div>

                <time title={publishedDatedFormatted} dateTime={publishedAt.toISOString()}> {publishedDateRealtiveToNow} </time>
           </header>

           <div className={styles.content}>
               {content.map(line => {
                if (line.type === 'paragraph') {
                    return <p>{line.content}</p>
                } else if (line.type === 'link') {
                    return <p><a href="#">{line.content} </a> </p>
                }
               })}
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

           <div className={styles.commentList}>
               <Comments />
               <Comments />
               <Comments />

           </div>
            
        </article>
    )
}