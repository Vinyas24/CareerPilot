import React from 'react';
import { Outlet } from 'react-router-dom';
import PrepTopbar from './Sidebar';

const DashboardLayout = () => {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9f9f9' }}>
      <PrepTopbar />
      
      <main style={{
        padding: '32px 40px',
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
