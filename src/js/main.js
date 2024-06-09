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
  date.innerText = formatDate(data.date)
  title.innerText = data.title
  img.src = data.url
  expl.innerText = data.explanation
}

function formatDate(date) {
  date = date.split('-')
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  let [year, month, day] = [ ...date ]
  let dateSuffix = 'th'
  if(day < 10){
    day = day.split('0').slice(1)
    if(day == 1){
      dateSuffix = 'st'
    }else if(day == 2){
      dateSuffix = 'nd'
    }else if (day == 3){
      dateSuffix = 'rd'
    }
  }
  return `${months[month - 1]} ${day}${dateSuffix}, ${year}`
}