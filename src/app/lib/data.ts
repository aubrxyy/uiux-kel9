import pool from "../api/db"
import { sql } from "@vercel/postgres";

const fetchDatafromDB = async () => {
  const { rows, fields } = await sql`SELECT * FROM visitor`;
  

}