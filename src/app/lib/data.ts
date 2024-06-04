export async function getTourPackages() {
  try {
    const response = await fetch('http://localhost:3000/api/tour_package', { cache: 'no-store' });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching tour packages:', error);
    return [];
  }
}
