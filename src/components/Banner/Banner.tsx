import { Button } from '../Button/Button';
import styles from './Banner.module.sass';

export function Banner() {
  return (
    <div className={styles.banner}>
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
          <Button text="LEARN MORE" />
        </div>
      </div>
    </div>
  );
}
