"use server"

async function getData() {
    const res = await fetch(`https://www.googleapis.com/youtube/v3/videos?id=n61ULEU7CO0&key=${process.env.NEXT_YT_API_KEY}&part=player&fields=items(player)`)
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default getData;