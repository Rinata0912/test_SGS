import { Button } from 'components/Button/Button';
import { FILTER_LIST, PROJECTS } from 'utils/constants';
import styles from './Portfolio.module.sass';
import { ReactComponent as Search } from 'images/search.svg';

export function Portfolio() {
  return (
    <div className={styles.portfolio}>
      <div className={styles.container}>
        <h2 className={styles.title}>Portfolio</h2>
        <p className={styles.subtitle}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
        </p>
        <ul className={styles.filterList}>
          {FILTER_LIST.map((filter) => (
            <li className={styles.filter}>
              <Button text={filter.name} />
            </li>
          ))}
        </ul>
        <div className={styles.portfolioList}>
          {PROJECTS.map((project) => (
            <div className={styles.portfolioItem}>
              <img
                src={project.image}
                alt="картинка"
                className={styles.portfolioImg}
              />
              <div className={styles.hoverLayer}>
                <div className={styles.hoverSmallLayer}>
                  <Search className={styles.searchIcon} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
