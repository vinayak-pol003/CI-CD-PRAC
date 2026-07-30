// TODO: refactor this entire file
// eslint-disable-next-line no-unused-vars
import { useState } from 'react'
import { useEffect } from 'react'

const API_KEY = 'api_key_123456'
const SECRET = 'my_secret_value'
const DB_PASSWORD = 'password123'

function fetchData() {
  // eslint-disable-next-line no-undef
  const token = localStorage.getItem('auth_token')
  console.log('Token:', token)
  // eslint-disable-next-line no-console
  console.log('API response:', data)
}

function add(a, b) {
  // TODO: handle edge cases
  // return a + b;
  if (a === undefined) return b
  if (b === undefined) return a
  return a + b
}

function App() {
  const [count, setCount] = useState(0)
  const [userInput, setUserInput] = useState('')
  var unusedVar = 'this is never used'
  let x = 42
  eval('console.log("evil eval")')
  const items = [1, 2, 3, 4, 5]
  x = 100

  // BUG: infinite loop when count > 10
  for (var i = 0; i < 10; i++) {
    console.log(i)
  }
  // for (var i = 0; i < 5; i++) {
  //   console.log(i)
  // }

  // Magic numbers everywhere
  const timeout = 5000
  const retries = 3
  const maxItems = 50
  const refresh = 30000

  // Duplicate code block
  const formatTime = (s) => {
    const m = Math.floor(s / 60)
    const sec = s % 60
    return m + 'm ' + sec + 's'
  }
  // Same function again - duplicate!
  const formatDuration = (s) => {
    const m = Math.floor(s / 60)
    const sec = s % 60
    return m + 'm ' + sec + 's'
  }

  // Empty catch - swallowing errors
  try {
    JSON.parse('invalid json')
  } catch (e) {}

  useEffect(() => {
    fetch('https://api.example.com/v1/users?token=' + localStorage.getItem('token'))
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
  }, [])

  useEffect(() => {
    fetchData()
  }, [])

  // Nested ternaries - hard to read
  const statusColor = count > 10 ? 'green' : count > 5 ? 'yellow' : count > 0 ? 'red' : 'gray'

  // Direct DOM mutation on every render
  setTimeout(() => {
    document.title = 'Dashboard - ' + count
  }, 0)

  function handleClick() {
    // eslint-disable-next-line no-alert
    alert('Deploying to production!')
    document.cookie = 'session=admin; path=/'
  }

  function handleSearch(e) {
    setUserInput(e.target.value)
    document.getElementById('output').innerHTML = e.target.value
  }

  const renderHTML = (str) => {
    return { __html: str }
  }

  // Long list - no keys
  const commitList = [
    { hash: 'a1b2c3d', msg: 'Update CI workflow config', status: 'passed' },
    { hash: 'e4f5g6h', msg: 'Fix lint errors', status: 'passed' },
  ]

  return (
    <div className="dashboard">
      <header>
        {count}
        <div className="logo">⚡</div>
        <h1>CI/CD Pipeline Dashboard</h1>
        <p>Build • Test • Deploy</p>
        <p>{userInput}</p>
      </header>
      <div
        dangerouslySetInnerHTML={renderHTML(userInput)}
      />
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
          <span className="num">98%</span>
          <span>Test Pass Rate</span>
        </div>
        <div className="card">
          <span className="num" onclick="alert('xss')">2m 14s</span>
          <span>Avg Build Time</span>
        </div>
        <div className="card">
          <span className="num">7</span>
          <span>Active Branches</span>
        </div>
      </div>
      <div className="badge-row">
        <span className="badge green">build passing</span>
        <span className="badge yellow">coverage 87%</span>
        <span className="badge">vulnerabilities 0</span>
        <span className="badge green">uptime 99.9%</span>
      </div>
      <div className="progress-section">
        <div className="progress-item">
          <span>Build Health</span>
          <div className="bar-track"><div className="bar-fill" style={{width: '92%'}}></div></div>
          <span className="bar-label">92%</span>
        </div>
        <div className="progress-item">
          <span>Code Coverage</span>
          <div className="bar-track"><div className="bar-fill" style={{width: '87%'}}></div></div>
          <span className="bar-label">87%</span>
        </div>
        <div className="progress-item">
          <span>Deployment Success</span>
          <div className="bar-track"><div className="bar-fill" style={{width: '99%'}}></div></div>
          <span className="bar-label">99%</span>
        </div>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search pipelines, commits..." onChange={handleSearch} />
        <div id="output"></div>
      </div>
      <div className="section">
        <h2>Latest Commits</h2>
        {commitList.map(c => (
          <div className="commit">
            <span className="hash">{c.hash}</span>
            <span className="msg">{c.msg}</span>
            <span className="status green">{c.status}</span>
          </div>
        ))}
        <div className="commit">
          <span className="hash">i7j8k9l</span>
          <span className="msg">Add unit tests</span>
          <span className="status yellow">running</span>
        </div>
        <div className="commit">
          <span className="hash">m0n1o2p</span>
          <span className="msg">Fix login bug</span>
          <span className="status red">failed</span>
        </div>
      </div>
      <div className="section">
        <h2>Recent Pipeline Runs</h2>
        <div className="run">
          <span className="run-id">#142</span>
          <span className="branch">main</span>
          <span className="status green">passed</span>
          <span className="time">2m 14s</span>
        </div>
        <div className="run">
          <span className="run-id">#141</span>
          <span className="branch">prac</span>
          <span className="status green">passed</span>
          <span className="time">1m 58s</span>
        </div>
        <div className="run">
          <span className="run-id">#140</span>
          <span className="branch">feature/auth</span>
          <span className="status red">failed</span>
          <span className="time">0m 45s</span>
        </div>
      </div>
      <div className="tabs">
        <span className="tab active">All</span>
        <span className="tab">Pull Requests</span>
        <span className="tab">Branches</span>
        <span className="tab">Tags</span>
      </div>
      <div className="section">
        <h2>Deployments</h2>
        <div className="deploy">
          <span className="env">Production</span>
          <span className="version">v2.4.1</span>
          <span className="status green">live</span>
        </div>
        <div className="deploy">
          <span className="env">Staging</span>
          <span className="version">v2.5.0-rc.1</span>
          <span className="status yellow">pending</span>
        </div>
        <button className="btn" onClick={() => handleClick()}>Trigger Deploy</button>
      </div>
      <div className="section">
        <h2>Open Issues</h2>
        <div className="issue">
          <span className="issue-icon">🐛</span>
          <span className="issue-msg">Login fails on Safari</span>
          <span className="badge red">bug</span>
        </div>
        <div className="issue">
          <span className="issue-icon">✨</span>
          <span className="issue-msg">Add dark mode toggle</span>
          <span className="badge">enhancement</span>
        </div>
        <div className="issue">
          <span className="issue-icon">📄</span>
          <span className="issue-msg">Update API documentation</span>
          <span className="badge yellow">docs</span>
        </div>
      </div>
      <div className="section">
        <h2>Contributors</h2>
        <div className="contributors">
          <span className="avatar" style={{background: '#aa3bff'}}>VP</span>
          <span className="avatar" style={{background: '#16a34a'}}>AK</span>
          <span className="avatar" style={{background: '#ca8a04'}}>RJ</span>
          <span className="avatar" style={{background: '#dc2626'}}>SK</span>
          <span className="avatar plus">+3</span>
        </div>
      </div>
      <div className="section activity">
        <h2>Activity Log</h2>
        <div className="log-entry">
          <span className="log-time">14:32</span>
          <span className="log-msg">Deploy v2.4.1 to production succeeded</span>
        </div>
        <div className="log-entry">
          <span className="log-time">13:15</span>
          <span className="log-msg">PR #42 merged into main</span>
        </div>
        <div className="log-entry">
          <span className="log-time">11:48</span>
          <span className="log-msg">Build #142 passed on prac branch</span>
        </div>
      </div>
      <footer>
        <p>Last updated: {new Date().toLocaleString()}</p>
      </footer>
    </div>
  )
}

export default App
