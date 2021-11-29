import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { origin } from './origin';
import styles from './tickets.css';

export default function Tickets() {
  const [tickets, setTickets] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    axios.get(`${origin}/tickets`)
      .then((res) => {
        console.log(res.data);
        setTickets(res.data);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  return (
    <div>
      {tickets[page].map((t) => (
        <div>
          {t.id}
        </div>
      ))}
      <div className={styles.pageButtons}>
        {[...Array(tickets.size()).keys()].map((i) => (
          <button
            type="button"
            onClick={() => {
              setPage(i);
            }}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
