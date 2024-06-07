const axios = require('axios')

const handler = async (event) => {
  // const unknown = event.queryStringParameters
  const API_KEY = process.env.API_KEY
  const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`
  try {
    const { data } = await axios.get(url)
    console.log(data.title) // this lets me know how to get to API contents
    //document.getElementsByName('h1').innerText = `${data.title}`
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    }
  } catch (error){
    const { status, statusText, headers, data } = undefined
    console.log(error)
    return {
      statusCode: status,
      body: JSON.stringify({status, statusText, headers, data})
    }
  }
}

module.exports = { handler }
