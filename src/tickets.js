import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { origin } from './origin';
import './tickets.css';

export default function Tickets() {
  const [tickets, setTickets] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    axios.get(`${origin}/tickets`)
      .then((res) => {
        setTickets(res.data);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  function getTimeString(date) {
    const hours = (date.getHours() + 1) % 12;
    const minutes = date.getMinutes() > 9 ? date.getMinutes() : `0${date.getMinutes()}`;
    const ampm = date.getHours() < 12 ? 'AM' : 'PM';

    return `${hours || 12}:${minutes} ${ampm}`;
  }

  function getDateString(date) {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();

    return `${month}/${day}/${year}`;
  }

  return (
    <div className="tickets-container">
      {tickets.length > 0 ? (
        <div>
          <div className="card card-header">
            <span className="ïd">ID</span>
            <span className="subject">Subject</span>
            <span className="requested">Date Requested</span>
            <span className="priority">Priority</span>
          </div>
          {tickets[page].map((t) => (
            <div className="card" key={t.id}>
              <span className="ïd">{t.id}</span>
              <span className="subject">{t.subject}</span>
              <span className="requested">{`${getDateString(new Date(t.created_at))} ${getTimeString(new Date(t.created_at))}`}</span>
              <span className="priority">{t.priority}</span>
            </div>
          ))}

          <div className="page-buttons">
            {page > 0 && (
            <button
              type="button"
              onClick={() => {
                setPage(page - 1);
              }}
            >
              {'<'}
            </button>
            )}
            {[...Array(tickets.length).keys()].map((i) => (
              <button
                type="button"
                onClick={() => {
                  setPage(i);
                }}
                key={i}
                className={i === page && 'active'}
              >
                {i + 1}
              </button>
            ))}
            {page < tickets.length && (
            <button
              type="button"
              onClick={() => {
                setPage(page + 1);
              }}
            >
              {'>'}
            </button>
            )}
          </div>
        </div>
      ) : <p>Loading...</p>}

    </div>
  );
}
