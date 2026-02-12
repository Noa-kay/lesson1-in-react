function Flower({ name, petalColor, centerColor }) {
  const petalColorValue = petalColor || '#f3a9c8'
  const centerColorValue = centerColor || '#f1c453'

  const cardStyle = {
    backgroundColor: petalColorValue,
    color: centerColorValue,
    border: `2px solid ${centerColorValue}`,
  }

  const flowerBaseStyle = {
    position: 'relative',
    width: '120px',
    height: '120px',
    margin: '0 auto 12px',
  }

  const petalBaseStyle = {
    position: 'absolute',
    width: '52px',
    height: '52px',
    backgroundColor: petalColorValue,
    borderRadius: '50%',
  }

  const petals = [
    { top: '0px', left: '34px' },
    { top: '34px', left: '0px' },
    { top: '68px', left: '34px' },
    { top: '34px', left: '68px' },
    { top: '12px', left: '12px', transform: 'rotate(45deg)' },
  ]

  const centerStyle = {
    position: 'absolute',
    top: '38px',
    left: '38px',
    width: '44px',
    height: '44px',
    backgroundColor: centerColorValue,
    borderRadius: '50%',
  }

  const handleClick = () => {
    alert(`אני פרח מסוג ${name}`)
  }

  return (
    <article className="flower-card" style={cardStyle} onClick={handleClick}>
      <div style={flowerBaseStyle}>
        {petals.map((petal, index) => (
          <span key={`petal-${index}`} style={{ ...petalBaseStyle, ...petal }} />
        ))}
        <span style={centerStyle} />
      </div>
      <p className="flower-name">{name}</p>
      <p className="flower-details">
        צבע עלי כותרת: {petalColorValue} | צבע מרכז: {centerColorValue}
      </p>
    </article>
  )
}

export default Flower
