import styles from './Header.module.sass';
import { ReactComponent as Logo } from '../../images/logo.svg';
import { Navigation } from '../Navigation/Navigation';

export function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.content}>
          <Logo className={styles.logo} />
          <div className={styles.brandInfo}>
            <span className={styles.brandName}>BLA BLA</span>
            <span className={styles.description}>One Page Flat Template</span>
          </div>
        </div>
        <Navigation />
      </div>
    </div>
  );
}
