fetch(`/.netlify/functions/fetch-data`)
  .then(res => { return res.json() })
  .then(data => {
    displayInfo(data)
  })

let date = document.getElementById('date')
let title = document.getElementById('photoTitle')
let img = document.getElementById('img')
let expl = document.getElementById('expl')

function displayInfo(data) {
  date.innerText = data.date
  title.innerText = data.title
  img.src = data.url
  expl.innerText = data.explanation
}