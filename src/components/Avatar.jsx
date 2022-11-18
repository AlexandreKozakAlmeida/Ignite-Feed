import styles from '../styles/Avatar.module.css'; 

export function Avatar({src, hasBorder = true}) {
  

    return (
        <div>
             <img className={ hasBorder ? styles.avatarWithBorder : styles.avatar} src={src} />
        </div>
    );
}