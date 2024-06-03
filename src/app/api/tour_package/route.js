import { query } from '../../lib/db';

export async function GET(req) {
  try {
    const result = await query('SELECT * FROM project.tour_package');
    const tourPackages = result.rows;

    return new Response(JSON.stringify(tourPackages), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error fetching data:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
