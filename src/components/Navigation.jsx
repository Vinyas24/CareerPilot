import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Bookmark, Newspaper, Settings } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: '/career/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/career/saved', label: 'Saved', icon: Bookmark },
    { path: '/career/digest', label: 'Digest', icon: Newspaper },
    { path: '/career/settings', label: 'Settings', icon: Settings },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
    <div style={{
      position: 'fixed',
      top: 0,
      left: '256px',
      right: 0,
      height: '64px',
      zIndex: 30,
      backgroundColor: 'rgba(249, 249, 249, 0.85)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      borderBottom: '1px solid #e5e5e5',
    }}>
      <div style={{
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 40px',
        maxWidth: '1400px',
        margin: '0 auto',
      }}>
        {/* Module Title */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          paddingRight: '32px',
          borderRight: '1px solid #e5e5e5',
          marginRight: '8px',
        }}>
          <div style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: '#8B0000',
            flexShrink: 0,
          }} />
          <span style={{
            fontSize: '13px',
            fontWeight: 600,
            color: '#111',
            letterSpacing: '-0.01em',
            whiteSpace: 'nowrap',
          }}>
            Job Tracker
          </span>
        </div>

        {/* Nav Tabs */}
        <nav style={{
          display: 'flex',
          gap: '4px',
          flex: 1,
          overflowX: 'auto',
        }}>
          {navItems.map((item) => {
            const active = isActive(item.path);
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                data-testid={`nav-${item.label.toLowerCase()}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '12px 16px',
                  fontSize: '13px',
                  fontWeight: active ? 600 : 500,
                  color: active ? '#8B0000' : '#666',
                  textDecoration: 'none',
                  borderBottom: active ? '2px solid #8B0000' : '2px solid transparent',
                  transition: 'all 150ms ease',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) => {
                  if (!active) {
                    e.currentTarget.style.color = '#333';
                    e.currentTarget.style.borderBottomColor = '#ccc';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!active) {
                    e.currentTarget.style.color = '#666';
                    e.currentTarget.style.borderBottomColor = 'transparent';
                  }
                }}
              >
                <Icon size={15} style={{ opacity: active ? 1 : 0.5 }} />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
    <div style={{ height: '64px', flexShrink: 0 }} />
    </>
  );
};

export default Navigation;