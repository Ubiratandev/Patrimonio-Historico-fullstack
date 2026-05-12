import pkg from 'pg'; // Importa o pacote do PostgreSQL
const { Pool } = pkg;

const pool = new Pool({
connectionString : process.env.DATABASE_URL
});