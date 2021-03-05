import styles from './Button.module.sass';

export function Button(prop: { text: String }) {
  const { text } = prop;
  return <button className={styles.button}>{text}</button>;
}
