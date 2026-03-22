import { services } from '@/data/services'

export default function Marquee() {
  const serviceNames = services.map(s => s.title)
  const separator = ' \u00A0\u00A0●\u00A0\u00A0 '
  const track = serviceNames.join(separator) + separator

  return (
    <div className="overflow-hidden bg-[#1E1A16] py-5">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .marquee-track {
          display: flex;
          white-space: nowrap;
          animation: marquee 40s linear infinite;
        }

        .marquee-segment {
          font-family: 'Barlow', sans-serif;
          font-weight: 700;
          font-size: 13px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.4);
          flex-shrink: 0;
        }

        .marquee-segment .dot {
          color: #C4602A;
        }
      `}</style>

      <div className="marquee-track">
        <span className="marquee-segment" dangerouslySetInnerHTML={{
          __html: track.replace(/●/g, '<span class="dot">●</span>')
        }} />
        <span className="marquee-segment" dangerouslySetInnerHTML={{
          __html: track.replace(/●/g, '<span class="dot">●</span>')
        }} />
      </div>
    </div>
  )
}
