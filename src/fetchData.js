export default async function getOneItem(id) {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (!response.ok) {
      throw new Error('Unable to fetch data');
    }
    const result = await response.json();
    return result; 
  } catch (error) {
    console.error(`Error fetching one item (ID: ${id}):`, error);
    return null; 
  }
}

export async function get10Items() {
  let itemsarr = [];
  try {
    for (let i = 1; i <= 10; i++) {
      const item = await getOneItem(i);
      if (item) {
        itemsarr.push(item);
      }
    }
    console.log('Fetched items array:', itemsarr);
    return itemsarr;
  } catch (error) {
    console.error('Error fetching items:', error);
    return [];
  }
}

const checkUnique = (arr) => {
  const set = new Set(arr.map(item => item?.id));
  return set.size === arr.length;
}
