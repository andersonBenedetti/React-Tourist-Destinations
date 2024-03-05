import styles from './Tours.module.css';
import Tour from './Tour';

export default function Tours({tours, removeTour}) {
  return (
    <div className={styles}>
      {tours.map((tour) => {
        return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
      })}
    </div>
  );
}
