import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp(){
   return(
    <div>
     <h1>custom app</h1>
    </div>
   )
}

const anotherElement=(
  < a href="http://google.com" target="_blank">
    visit herer
  </a>
)

const reactElement= React.createElement(
  'a',
  {href:'http://google.com',target:'_blank'},
  'visit me'
)
ReactDOM.createRoot(document.getElementById('root')).render(
reactElement
)
