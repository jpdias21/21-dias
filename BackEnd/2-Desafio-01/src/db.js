// src/db.js
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: "postgresql://postgres:052002Joao%40@db.xradffjfmtjwlmgwvkjm.supabase.co:5432/postgres", 
  ssl: { rejectUnauthorized: false }
});

module.exports = pool;