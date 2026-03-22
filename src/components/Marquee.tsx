import { services } from '@/data/services'

export default function Marquee() {
  const serviceNames = services.map(s => s.title)

  return (
    <div className="overflow-hidden bg-[#1E1A16] py-4">
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .marquee-track {
          display: flex;
          gap: 32px;
          animation: marquee 60s linear infinite;
          white-space: nowrap;
        }

        .marquee-item {
          font-weight: 700;
          font-size: 12px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.5);
          flex-shrink: 0;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .marquee-dot {
          color: #C4602A;
          font-size: 14px;
          line-height: 1;
        }
      `}</style>

      <div className="marquee-track">
        {[0, 1].map((track) => (
          <div key={track}>
            {serviceNames.map((name, idx) => (
              <span key={`${track}-${idx}`} className="marquee-item">
                {name}
                {idx < serviceNames.length - 1 && <span className="marquee-dot">●</span>}
              </span>
            ))}
            {<span className="marquee-dot">●</span>}
          </div>
        ))}
      </div>
    </div>
  )
}
