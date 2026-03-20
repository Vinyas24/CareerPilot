import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Code, FileText, BookOpen, User } from 'lucide-react';

const PrepTopbar = () => {
  const navItems = [
    { path: '/prep/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/prep/dashboard/practice', label: 'Practice', icon: Code },
    { path: '/prep/dashboard/assessments', label: 'Assessments', icon: FileText },
    { path: '/prep/dashboard/history', label: 'History', icon: BookOpen },
    { path: '/prep/dashboard/resources', label: 'Resources', icon: BookOpen },
    { path: '/prep/dashboard/profile', label: 'Profile', icon: User }
  ];

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
            backgroundColor: '#312e81',
            flexShrink: 0,
          }} />
          <span style={{
            fontSize: '13px',
            fontWeight: 600,
            color: '#111',
            letterSpacing: '-0.01em',
            whiteSpace: 'nowrap',
          }}>
            Interview Prep
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
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/prep/dashboard'}
                style={({ isActive }) => ({
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '12px 16px',
                  fontSize: '13px',
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? '#312e81' : '#666',
                  textDecoration: 'none',
                  borderBottom: isActive ? '2px solid #312e81' : '2px solid transparent',
                  transition: 'all 150ms ease',
                  whiteSpace: 'nowrap',
                })}
              >
                <Icon size={15} />
                {item.label}
              </NavLink>
            );
          })}
        </nav>

        {/* Profile Avatar */}
        <div style={{
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          backgroundColor: '#f0f0f0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px solid #e5e5e5',
          marginLeft: '16px',
          flexShrink: 0,
        }}>
          <User size={16} color="#888" />
        </div>
      </div>
    </div>
    <div style={{ height: '64px', flexShrink: 0 }} />
    </>
  );
};

export default PrepTopbar;
