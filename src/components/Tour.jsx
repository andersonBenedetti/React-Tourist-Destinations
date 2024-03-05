import {useState} from 'react';
import styles from './Tour.module.css';

export default function Tour({id, name, image, info, price, removeTour}) {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className={styles}>
      <article className={styles.singleTour}>
        <img className={styles.imgTour} src={image} alt={name} />
        <div className={styles.info}>
          <h3>{name}</h3>
          <span>$ {price}</span>
          <p>
            {readMore ? info : `${info.substring(0, 200)}...`}
            <button onClick={() => setReadMore(!readMore)}>
              {readMore ? 'Show less' : 'Read more'}
            </button>
          </p>
        </div>
        <button onClick={() => removeTour(id)} className={styles.delete}>
          Delete
        </button>
      </article>
    </div>
  );
}
