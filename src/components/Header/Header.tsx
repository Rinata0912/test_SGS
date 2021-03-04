import { Button } from '../Button/Button';
import styles from './Header.module.sass';

export function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          We Build <span className={styles.title_style_bold}>Brand</span>
        </h1>
        <p className={styles.subtitle}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat.
        </p>
        <div className={styles.learnMore}>
          <Button />
        </div>
      </div>
    </div>
  );
}
