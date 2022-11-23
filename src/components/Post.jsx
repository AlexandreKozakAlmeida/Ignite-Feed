import styles from '../styles/Post.module.css';
import { Avatar } from './Avatar';
import { Comments } from './Comments';
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useState } from 'react';


export function Post({content, publishedAt, author}){

    const [comments, setComments] = useState([
        'Post muito bacana, hein?'
    ]);

    const [newCommentText, setNewCommentText] = useState('');

    const publishedDatedFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
       });
    
    const publishedDateRealtiveToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
       });
    
    function handleCreateNewComment() {
        event.preventDefault();
        setComments([...comments, newCommentText]);
        setNewCommentText('')        
    };

    function handleNewCommentChange() {
        event.target.setCustomValidity('')
       setNewCommentText(event.target.value);
    };

    function deleteComment(commentToDelete) {
        const commentsWithoutDeleteOne = comments.filter(comment => {
            return comment !== commentToDelete;
        })

        setComments(commentsWithoutDeleteOne);
    };

    function handleNewCommentInvalid() {
        event.target.setCustomValidity('Esse campo é obrigatório!')
    };

    const isNewCommentInputEmpty =  newCommentText.length === 0;
    

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
                    return <p key={line.content}>{line.content}</p>
                } else if (line.type === 'link') {
                    return <p key={line.content}><a href="#">{line.content} </a> </p>
                }
               })}
           </div>

           <form onSubmit={handleCreateNewComment}  className={styles.commentForm}>
                <strong>
                    Deixe seu Feedback
                </strong>
                <textarea
                 name='comment'
                 placeholder='Deixe um comentário'
                 onChange={handleNewCommentChange}
                 value={newCommentText}
                 onInvalid={handleNewCommentInvalid}
                 required
                 />
             <footer>
                   <button type='submit' disabled={isNewCommentInputEmpty }>Publicar</button>
             </footer>
           </form>

           <div className={styles.commentList}>
             {comments.map(comments => {
                return <Comments
                  key={comments}   
                  content={comments}
                  onDeleteComment={deleteComment}
                 />
             })}

           </div>
            
        </article>
    )
}