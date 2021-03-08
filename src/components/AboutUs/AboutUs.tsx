import { Employee } from 'components/Employee/Employee';
import { EMPLOYEES } from 'utils/constants';
import styles from './AboutUs.module.sass';

export function AboutUs() {
  return (
    <div className={styles.aboutUs}>
      <div className={styles.container}>
        <h2 className={styles.title}>About Us</h2>
        <p className={styles.subtitle}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
        </p>
        <div className={styles.employeeList}>
          {EMPLOYEES.map((employee) => (
            <Employee
              avatar={employee.avatar}
              fullName={employee.fullName}
              position={employee.position}
              description={employee.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
