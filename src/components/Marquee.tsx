import { services } from '@/data/services'

export default function Marquee() {
  const serviceNames = services.map(s => s.title)
  const marqueeText = serviceNames.join(' ● ')

  return (
    <div className="overflow-hidden bg-[#1E1A16] py-5">
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
          gap: 32px;
        }

        .marquee-text {
          font-weight: 700;
          font-size: 13px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.4);
          flex-shrink: 0;
        }

        .marquee-dot {
          color: #C4602A;
          margin: 0 8px;
        }
      `}</style>

      <div className="marquee-container">
        <span className="marquee-text">
          {marqueeText}
        </span>
        <span className="marquee-text">
          {marqueeText}
        </span>
      </div>
    </div>
  )
}
