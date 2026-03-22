import { services } from '@/data/services'

export default function Marquee() {
  const serviceNames = services.map(s => s.title)

  return (
    <div className="overflow-hidden bg-[#1E1A16] py-8">
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .marquee-container {
          display: flex;
          white-space: nowrap;
          animation: marquee 80s linear infinite;
          gap: 48px;
        }

        .marquee-text {
          font-weight: 700;
          font-size: 13px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.4);
          flex-shrink: 0;
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .marquee-dot {
          color: #C4602A !important;
          font-size: 16px;
          line-height: 1;
          font-weight: 900;
        }
      `}</style>

      <div className="marquee-container">
        <div className="marquee-text">
          {serviceNames.map((name, idx) => (
            <span key={`track1-${idx}`}>
              {name}
              {idx < serviceNames.length - 1 && <span className="marquee-dot">●</span>}
            </span>
          ))}
        </div>
        <div className="marquee-text">
          {serviceNames.map((name, idx) => (
            <span key={`track2-${idx}`}>
              {name}
              {idx < serviceNames.length - 1 && <span className="marquee-dot">●</span>}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
