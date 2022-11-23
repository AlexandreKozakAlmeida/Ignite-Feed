import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import styles from '../styles/Comments.module.css';
import { Avatar } from './Avatar';

export function Comments({content, onDeleteComment}) {

    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
       onDeleteComment(content);
    }

    function handleLikeComment() {
        setLikeCount(likeCount + 1 )
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src={"https://avatars.githubusercontent.com/u/98601344?v=4"} />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong> Alexandre </strong>
                            <time title='17 de novembro à 18:40' dateTime='2022-11-17 18:40:30'>Cerca de 1h atrás </time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>
                       {content}
                    </p>
                </div>

                <footer>
                   
                   <button onClick={handleLikeComment}>  <ThumbsUp /> Aplaudir  <span>{likeCount}</span> </button> 
                </footer>
            </div>
        </div>
    )
}