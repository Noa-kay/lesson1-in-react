import './App.css'
import Header from './components/Header/Header'
import Flower from './components/Flower/Flower'

function App() {
  const flowers = [
    {
      id: 'f-001',
      name: 'ורד',
      petalColor: '#f59fb1',
      centerColor: '#f3c969',
    },
    {
      id: 'f-002',
      name: 'חמנית',
      petalColor: '#f8d45c',
      centerColor: '#5d3b15',
    },
    {
      id: 'f-003',
      name: 'צבעוני',
      petalColor: '#f28c6a',
      centerColor: '#1f6f54',
    },
    {
      id: 'f-004',
      name: 'כלנית',
      petalColor: '#e56b6f',
      centerColor: '#2b2d42',
    },
  ]

  return (
    <div className="app">
      <Header />

      <section className="flower-section">
        <h2 className="section-title">פרחים לדוגמה</h2>
        <div className="flower-grid">
          <Flower name="סחלב" petalColor="#c9a1ff" centerColor="#6b2c84" />
          <Flower name="נורית" petalColor="#f7b267" />
          <Flower name="אירוס" centerColor="#3a506b" />
          <Flower name="נרקיס" />
        </div>
      </section>

      <section className="flower-section">
        <h2 className="section-title">פרחים מהמערך</h2>
        <div className="flower-grid">
          {flowers.map((flower) => (
            <Flower
              key={flower.id}
              name={flower.name}
              petalColor={flower.petalColor}
              centerColor={flower.centerColor}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default App
