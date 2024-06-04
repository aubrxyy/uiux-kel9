import { NextResponse } from 'next/server';
import { query } from '../../lib/db';

export async function GET() {
  try {
    const result = await query('SELECT * FROM project.tour_package');
    const tourPackages = result.rows;
    return NextResponse.json(tourPackages);
  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
