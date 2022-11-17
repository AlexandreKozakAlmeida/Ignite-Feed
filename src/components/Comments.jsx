import { ThumbsUp, Trash } from 'phosphor-react';
import styles from '../styles/Comments.module.css';

export function Comments() {
    return (
        <div className={styles.comment}>
            <img src="https://avatars.githubusercontent.com/u/98601344?v=4" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong> Alexandre </strong>
                            <time title='17 de novembro à 18:40' dateTime='2022-11-17 18:40:30'>Cerca de 1h atrás </time>
                        </div>

                        <button title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>
                        Muito bom, parabéns!!!!
                    </p>
                </div>

                <footer>
                   
                   <button>  <ThumbsUp /> Aplaudir  <span>20</span> </button> 
                </footer>
            </div>
        </div>
    )
}