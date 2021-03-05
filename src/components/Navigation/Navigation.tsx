import { NAVIGATION_LIST } from 'utils/constants';
import styles from './Navigation.module.sass';

export function Navigation() {
  return (
    <ul className={styles.navigation}>
      {NAVIGATION_LIST.map((item) => (
        <li className={styles.item}>
          <a className={styles.link} href="/">
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
}
