'use client'

const Background = () => {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      <div
        className="absolute rounded-full"
        style={{
          width: 600,
          height: 600,
          top: '-15%',
          left: '-10%',
          background:
            'radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)',
          filter: 'blur(60px)',
          animation: 'float1 18s ease-in-out infinite',
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          width: 500,
          height: 500,
          top: '5%',
          right: '-8%',
          background:
            'radial-gradient(circle, rgba(74,158,255,0.08) 0%, transparent 70%)',
          filter: 'blur(80px)',
          animation: 'float2 22s ease-in-out infinite',
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          width: 400,
          height: 400,
          top: '40%',
          left: '-5%',
          background:
            'radial-gradient(circle, rgba(29,78,216,0.09) 0%, transparent 70%)',
          filter: 'blur(70px)',
          animation: 'float3 26s ease-in-out infinite',
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          width: 550,
          height: 550,
          bottom: '-10%',
          right: '-5%',
          background:
            'radial-gradient(circle, rgba(37,99,235,0.10) 0%, transparent 70%)',
          filter: 'blur(90px)',
          animation: 'float1 20s ease-in-out infinite reverse',
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          width: 350,
          height: 350,
          bottom: '15%',
          left: '20%',
          background:
            'radial-gradient(circle, rgba(74,158,255,0.06) 0%, transparent 70%)',
          filter: 'blur(60px)',
          animation: 'float2 30s ease-in-out infinite reverse',
        }}
      />

      <style>{`
        @keyframes float1 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33%       { transform: translate(30px, -20px) scale(1.05); }
          66%       { transform: translate(-20px, 15px) scale(0.97); }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33%       { transform: translate(-25px, 20px) scale(1.03); }
          66%       { transform: translate(20px, -15px) scale(0.98); }
        }
        @keyframes float3 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          50%       { transform: translate(15px, 25px) scale(1.04); }
        }
      `}</style>
    </div>
  )
}

export default Background
