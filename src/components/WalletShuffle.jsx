const CARD_W = 108
const CARD_H = 68
const DURATION = '3.6s'

const cards = [
  {
    anim: 'walletCard1',
    gradient: 'linear-gradient(135deg, #c8a96e 0%, #8b6a1f 100%)',
    chipColor: 'rgba(255,255,255,0.25)',
  },
  {
    anim: 'walletCard2',
    gradient: 'linear-gradient(135deg, #3d3530 0%, #6b5a4e 100%)',
    chipColor: 'rgba(255,255,255,0.2)',
  },
  {
    anim: 'walletCard3',
    gradient: 'linear-gradient(135deg, #1a2a3a 0%, #2e4a66 100%)',
    chipColor: 'rgba(255,255,255,0.2)',
  },
]

export default function WalletShuffle() {
  return (
    <div style={{
      position: 'relative',
      width: CARD_W,
      height: CARD_H,
      marginBottom: 36,
    }}>
      {cards.map((card, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            width: CARD_W,
            height: CARD_H,
            borderRadius: 10,
            background: card.gradient,
            boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
            border: '1px solid rgba(255,255,255,0.1)',
            animation: `${card.anim} ${DURATION} cubic-bezier(0.45, 0, 0.55, 1) infinite`,
            transformOrigin: 'center center',
            willChange: 'transform',
          }}
        >
          {/* Chip */}
          <div style={{
            position: 'absolute',
            top: 14,
            left: 14,
            width: 18,
            height: 13,
            borderRadius: 2,
            background: card.chipColor,
            border: '1px solid rgba(255,255,255,0.15)',
          }} />
          {/* Stripe dots */}
          <div style={{
            position: 'absolute',
            bottom: 16,
            left: 14,
            display: 'flex',
            gap: 4,
          }}>
            {[0,1,2,3].map(d => (
              <div key={d} style={{
                width: 4,
                height: 4,
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.2)',
              }} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
