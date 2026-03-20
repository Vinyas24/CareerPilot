import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9f9f9' }}>
      <div 
        style={{ 
          textAlign: 'center', 
          paddingTop: '100px',
          paddingBottom: '100px',
          maxWidth: '700px',
          margin: '0 auto',
          padding: '100px 40px',
        }}
      >
        <div style={{
          width: '48px',
          height: '48px',
          borderRadius: '12px',
          backgroundColor: 'rgba(139, 0, 0, 0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 32px',
        }}>
          <span style={{ fontSize: '22px' }}>🎯</span>
        </div>
        <h1 
          style={{ 
            fontFamily: 'Crimson Text, Georgia, serif',
            fontSize: '52px',
            lineHeight: '1.1',
            marginBottom: '20px',
            letterSpacing: '-0.03em',
            color: '#111',
            fontWeight: 700,
          }}
          data-testid="landing-headline"
        >
          Stop Missing The Right Jobs.
        </h1>
        <p 
          style={{ 
            fontSize: '18px',
            lineHeight: '1.6',
            maxWidth: '480px',
            margin: '0 auto 48px',
            color: '#666',
          }}
          data-testid="landing-subtext"
        >
          Precision-matched job discovery delivered daily at 9AM.
        </p>
        <button
          onClick={() => navigate('/career/dashboard')}
          style={{ 
            fontSize: '15px', 
            padding: '14px 36px',
            backgroundColor: '#8B0000',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 150ms ease',
            fontFamily: 'Inter, sans-serif',
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#6B0000'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#8B0000'}
          data-testid="start-tracking-btn"
        >
          Start Tracking →
        </button>
      </div>
    </div>
  );
};

export default Home;