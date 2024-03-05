import {useEffect, useState} from 'react';
import Tours from './Tours';
import styles from './Home.module.css';

const URL = 'https://course-api.com/react-tours-project';

export default function Home() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(false);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(URL);
      const data = await response.json();
      setLoading(false);
      setTours(data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <p>Carregando...</p>
      </div>
    );
  }

  if (tours.length === 0) {
    return (
      <div className="noData">
        <p>No data</p>
        <button onClick={() => fetchTours()} className={styles.refresh}>
          Refresh
        </button>
      </div>
    );
  }

  return (
    <div className={styles.home}>
      <div className="container">
        <Tours tours={tours} removeTour={removeTour}></Tours>
      </div>
    </div>
  );
}
