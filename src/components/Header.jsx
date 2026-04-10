export default function Header({ onHome }) {
  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      padding: 'max(16px, env(safe-area-inset-top)) 24px 0',
      pointerEvents: 'none',
    }}>
      <button
        onClick={onHome}
        aria-label="Go to home"
        style={{
          pointerEvents: 'auto',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '10px 8px',
          fontFamily: 'var(--font-display)',
          fontSize: '1.05rem',
          fontWeight: 700,
          color: 'var(--text-primary)',
          letterSpacing: '-0.02em',
          transition: 'opacity 0.2s',
        }}
        onMouseEnter={e => e.currentTarget.style.opacity = '0.5'}
        onMouseLeave={e => e.currentTarget.style.opacity = '1'}
      >
        optimal
      </button>
    </header>
  )
}
