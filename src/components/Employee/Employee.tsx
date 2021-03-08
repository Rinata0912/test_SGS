import styles from './Employee.module.sass';

interface Props {
  avatar: string;
  fullName: string;
  position: string;
  description: string;
}

export function Employee({ avatar, fullName, position, description }: Props) {
  return (
    <div className={styles.employee}>
      <div className={styles.avatarContainer}>
        <img src={avatar} alt="фото сотрудника" className={styles.avatar} />
        <ul className={styles.socialList}>
          <li className={styles.socialItem}>
            <a href="/" className={styles.socialLink}>
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li className={styles.socialItem}>
            <a href="/" className={styles.socialLink}>
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li className={styles.socialItem}>
            <a href="/" className={styles.socialLink}>
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li className={styles.socialItem}>
            <a href="/" className={styles.socialLink}>
              <i className="fab fa-dribbble"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.info}>
        <p className={styles.name}>{fullName}</p>
        <p className={styles.position}>{position}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}
