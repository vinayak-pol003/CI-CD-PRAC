function App() {
  return (
    <div className="dashboard">
      <header>
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
        <button className="btn">Trigger Deploy</button>
      </div>
      <footer>
        <p>Last updated: {new Date().toLocaleString()}</p>
      </footer>
    </div>
  )
}

export default App