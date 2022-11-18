import styles from '../styles/Sidebar.module.css';
import {FaPencilAlt } from 'react-icons/fa';
import { Avatar } from './Avatar';

export function Sidebar () {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1542202229-7d93c33f5d07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" />
            <div className={styles.profile}>
                <Avatar src={"https://avatars.githubusercontent.com/u/98601344?v=4"} />
                <strong>
                    Alexandre
                </strong>
                <span>
                   Web Developer
                </span>
            </div>
            <footer>
                <a href="#">
                <FaPencilAlt />
                    Editar seu perfil
                </a>
            </footer>

        </aside>
    )
}