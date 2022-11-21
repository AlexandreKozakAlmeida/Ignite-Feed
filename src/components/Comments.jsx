import { ThumbsUp, Trash } from 'phosphor-react';
import styles from '../styles/Comments.module.css';
import { Avatar } from './Avatar';

export function Comments({content, onDeleteComment}) {

    function handleDeleteComment() {
       onDeleteComment(content);
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
                   
                   <button>  <ThumbsUp /> Aplaudir  <span>20</span> </button> 
                </footer>
            </div>
        </div>
    )
}