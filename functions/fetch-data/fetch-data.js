const axios = require('axios')

const handler = async (event) => {
  const API_KEY = process.env.API_KEY
  const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`
  try {
    const { data } = await axios.get(url)
    console.log(data)
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
