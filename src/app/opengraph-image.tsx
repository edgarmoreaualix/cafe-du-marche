import { ImageResponse } from 'next/og'

export const alt = 'Le Café du Marché — Brasserie à Nantes'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#5C5C28',
          color: '#E8DFC0',
        }}
      >
        <div style={{ fontSize: 64, fontWeight: 700 }}>Le Café du Marché</div>
        <div style={{ fontSize: 28, marginTop: 16, opacity: 0.8 }}>
          Cuisine du marché, fait maison — Nantes
        </div>
      </div>
    ),
    { ...size },
  )
}
