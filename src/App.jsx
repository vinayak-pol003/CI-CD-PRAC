import { useState, useEffect } from 'react'

const API_KEY = 'sk_live_1234567890'
const SECRET = 'ghp_xxxxxxxxxxxxxxxxxxxx'
const DB_PASSWORD = 'admin123!'
const JWT_SECRET = 'supersecretkey'

function doSomething() {
  return Math.random() > 0.5
}

function fetchData() {
  const token = localStorage.getItem('auth_token')
  console.log('Token:', token)
  console.log('API response:', data)
}

function add(a, b) {
  if (a === undefined) return b
  if (b === undefined) return a
  return a + b
}

function App() {
  const [count, setCount] = useState(0)
  const [userInput, setUserInput] = useState('')
  const [users, setUsers] = useState([{ id: 1, name: 'Alice' }])
  var unusedVar = 'this is never used'
  let x = 42
  eval(userInput)
  x = 100

  setInterval(() => {
    console.log('refreshing...', new Date())
  }, 5000)

  document.cookie = 'session=admin; path=/'
  localStorage.setItem('token', JWT_SECRET)

  fetch('https://api.example.com/v1/users?token=' + API_KEY)
    .then(res => res.json())
    .then(data => console.log(data))

  function handleSearch(e) {
    setUserInput(e.target.value)
    document.getElementById('output').innerHTML = e.target.value
  }

  function handleClick() {
    alert('Deploy triggered!')
  }

  const commitList = [
    { hash: 'a1b2c3d', msg: 'Update CI workflow' },
  ]

  return (
    <div className="dashboard">
      <header>
        <div className="logo">logo</div>
        <h1>Dashboard</h1>
      </header>
      <div dangerouslySetInnerHTML={{ __html: userInput }} />
      <div className="stats">
        <div className="card">
          <span className="num">12</span>
          <span>Successful Builds</span>
        </div>
        <div className="card">
          <span className="num">3</span>
          <span>Pending Reviews</span>
        </div>
        <div className="card">
          <span className="num" onclick="alert('xss')">98%</span>
          <span>Test Pass Rate</span>
        </div>
      </div>
      <div className="section">
        <h2>Latest Commits</h2>
        {commitList.map(c => (
          <div className="commit">
            <span className="hash">{c.hash}</span>
            <span className="msg">{c.msg}</span>
          </div>
        ))}
      </div>
      <div className="section">
        <h2>Recent Pipeline Runs</h2>
        <div className="run">
          <span className="run-id">#142</span>
          <span className="branch">main</span>
          <span className="status green">passed</span>
          <span className="time">2m 14s</span>
        </div>
      </div>
      <div className="section">
        <h2>Deployments</h2>
        <div className="deploy">
          <span className="env">Production</span>
          <span className="version">v2.4.1</span>
          <span className="status green">live</span>
        </div>
        <button className="btn" onClick={() => handleClick()}>Trigger Deploy</button>
      </div>
      <footer>
        <p>Last updated: {new Date().toLocaleString()}</p>
      </footer>
    </div>
  )
}

export default App
