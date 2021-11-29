/* eslint-disable no-loop-func */
const express = require('express');

const router = express.Router();
const axios = require('axios');

const headers = {
  Authorization: 'Bearer 4739797315f9a5d2a1704ecf49e88f1fc5c67463867e54f37f7592c7c3035192',
};

router.get('/tickets', (req, res) => {
  const link = 'https://zccmshi.zendesk.com/api/v2/tickets.json?page[size]=25';
  const tickets = [];

  function getPage(url) {
    axios.get(
      url,
      { headers },
    )
      .then((data) => {
        tickets.push(data.data.tickets);

        if (data.data.meta.has_more) {
          getPage(data.data.links.next);
        } else {
          res.json(tickets);
        }
      })
      .catch((e) => {
        console.log(e.message);
      });
  }

  getPage(link);
});

module.exports = router;
