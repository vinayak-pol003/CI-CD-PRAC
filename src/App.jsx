function App() {
  return (
    <div className="dashboard">
      <header>
        <div className="logo">⚡</div>
        <h1>CI/CD Pipeline Dashboard</h1>
        <p>Build • Test • Deploy</p>
      </header>
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
          <span className="num">2m 14s</span>
          <span>Avg Build Time</span>
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
        <input type="text" placeholder="Search pipelines, commits..." />
      </div>
      <div className="section">
        <h2>Latest Commits</h2>
        <div className="commit">
          <span className="hash">a1b2c3d</span>
          <span className="msg">Update CI workflow config</span>
          <span className="status green">passed</span>
        </div>
        <div className="commit">
          <span className="hash">e4f5g6h</span>
          <span className="msg">Fix lint errors</span>
          <span className="status green">passed</span>
        </div>
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
        <button className="btn" onClick={() => alert('Deploy triggered!')}>Trigger Deploy</button>
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
      <footer>
        <p>Last updated: {new Date().toLocaleString()}</p>
      </footer>
    </div>
  )
}

export default App