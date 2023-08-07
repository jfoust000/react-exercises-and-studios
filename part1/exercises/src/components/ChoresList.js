import styles from './ChoresList.module.css';

export default function ChoresList () {
   return (
      <div>
         <h3 className={styles.choresHeading}>Today's Chores</h3>
         <ul className={styles.choresText}>
            <li>Go to the supermarket</li>
            <li>Workout</li>
            <li>Cook</li>
            <li>Study</li>
            <li>Clean</li>
         </ul>
      </div>
   );
}