export default function Header({ theme, onToggleTheme, onHome }) {
  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '24px 36px',
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
          padding: 4,
          color: 'var(--accent)',
          display: 'flex',
          alignItems: 'center',
          transition: 'opacity 0.2s',
          borderRadius: 6,
        }}
        onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
        onMouseLeave={e => e.currentTarget.style.opacity = '1'}
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="6" width="20" height="14" rx="3" />
          <path d="M2 10h20" />
          <path d="M16 14h.01" strokeWidth="2.5" />
          <path d="M2 6l4-3h12l4 3" />
        </svg>
      </button>

      <button
        onClick={onToggleTheme}
        aria-label="Toggle theme"
        style={{
          pointerEvents: 'auto',
          background: 'none',
          border: '1px solid var(--card-border)',
          borderRadius: '20px',
          padding: '6px 14px',
          cursor: 'pointer',
          fontFamily: 'var(--font)',
          fontSize: '0.85rem',
          color: 'var(--text-secondary)',
          transition: 'all 0.2s ease',
          backdropFilter: 'blur(8px)',
          backgroundColor: 'var(--surface)',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.color = 'var(--text-primary)'
          e.currentTarget.style.borderColor = 'var(--text-muted)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.color = 'var(--text-secondary)'
          e.currentTarget.style.borderColor = 'var(--card-border)'
        }}
      >
        {theme === 'dark' ? '☀ Light' : '◗ Dark'}
      </button>
    </header>
  )
}
