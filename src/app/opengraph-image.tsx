import { ImageResponse } from '@vercel/og';

export const runtime = 'edge';
export const alt = 'Primus Companies — Commercial Construction';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #6B2FA0 0%, #111111 100%)',
          padding: '60px',
        }}
      >
        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            color: 'white',
            textAlign: 'center',
            lineHeight: 1.2,
          }}
        >
          Primus Companies
        </div>
        <div
          style={{
            fontSize: 28,
            color: '#D4A843',
            marginTop: 20,
            textAlign: 'center',
          }}
        >
          Plan. Build. Develop. Grow.
        </div>
        <div
          style={{
            fontSize: 20,
            color: 'rgba(255,255,255,0.7)',
            marginTop: 16,
          }}
        >
          Commercial Construction · Cedar Rapids roots since 1973
        </div>
      </div>
    ),
    { ...size }
  );
}
