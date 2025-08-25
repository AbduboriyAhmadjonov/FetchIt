const helmet = require('helmet');
const cors = require('cors');
const express = require('express');

module.exports = [
  helmet(),
  cors(),
  express.json({ limit: '10mb' }),
  express.urlencoded({ extended: true }),
];
