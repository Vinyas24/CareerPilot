import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Briefcase, BookOpen, FileText, Home, ArrowRight } from 'lucide-react';
import React from 'react';
import { Toaster } from '@/components/ui/sonner';

// Builder Imports
import { ResumeProvider } from './context/ResumeContext';
import Navbar from './components/layout/Navbar';
import Builder from './pages/builder/Builder';
import Preview from './pages/builder/Preview';

// Job Tracker Imports
import Navigation from './components/Navigation';
import JobHome from './pages/jobs/Home';
import JobDashboard from './pages/jobs/Dashboard';
import Saved from './pages/jobs/Saved';
import Digest from './pages/jobs/Digest';
import Settings from './pages/jobs/Settings';

// Placement Readiness Imports
import PrepDashboardLayout from './components/prep/dashboard/DashboardLayout';
import PrepDashboard from './pages/prep/Dashboard';
import PrepPractice from './pages/prep/Practice';
import PrepAssessments from './pages/prep/Assessments';
import PrepResources from './pages/prep/Resources';
import PrepProfile from './pages/prep/Profile';
import PrepResults from './pages/prep/Results';
import PrepHistory from './pages/prep/History';
import PrepLanding from './pages/prep/Landing';

const Sidebar = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Overview', icon: Home, color: 'text-gray-600', activeBg: 'bg-gray-100' },
    { path: '/career', label: 'Job Tracker', icon: Briefcase, color: 'text-career', activeBg: 'bg-career/10' },
    { path: '/prep', label: 'Interview Prep', icon: BookOpen, color: 'text-prep', activeBg: 'bg-prep/10' },
    { path: '/builder', label: 'Resume Builder', icon: FileText, color: 'text-builder', activeBg: 'bg-black/5' },
  ];

  return (
    <div className="w-64 bg-white border-r h-screen shadow-sm flex flex-col fixed no-print">
      <div className="p-6 border-b flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center font-serif font-bold text-lg">
          CP
        </div>
        <h1 className="text-2xl font-serif font-bold text-black tracking-tight">CareerPilot</h1>
      </div>
      <nav className="p-4 space-y-2 flex-1 relative z-10">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path));
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 p-3 rounded-xl transition-all font-medium ${
                isActive ? `${item.activeBg} ${item.color}` : 'text-gray-600 hover:bg-gray-50 hover:text-black'
              }`}
            >
              <item.icon size={20} className={isActive ? item.color : 'text-gray-400'} />
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="p-4 border-t text-xs text-gray-500 text-center font-medium">
        Unified Career Suite v1.0
      </div>
    </div>
  );
};

const DashboardHome = () => (
  <div className="p-10 space-y-8 max-w-7xl mx-auto">
    <header>
      <h2 className="text-4xl font-serif text-black mb-2">Welcome to your Career Hub</h2>
      <p className="text-lg text-gray-600">Your central dashboard for jobs, preparation, and presentation.</p>
    </header>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Job Tracker Card */}
      <Link to="/career" className="group rounded-2xl bg-white border border-gray-100 p-8 shadow-sm hover:shadow-md transition-all relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-career opacity-5 rounded-bl-full transition-transform group-hover:scale-110" />
        <div className="w-14 h-14 bg-career/10 rounded-xl flex items-center justify-center mb-6">
          <Briefcase className="text-career" size={28} />
        </div>
        <h3 className="text-2xl font-bold mb-2">Job Tracker</h3>
        <p className="text-gray-600 mb-6 line-clamp-2">Automated daily job matches and application tracking.</p>
        <div className="flex items-center text-career font-semibold group-hover:translate-x-1 transition-transform">
          Explore Jobs <ArrowRight size={18} className="ml-2" />
        </div>
      </Link>

      {/* Preparation Card */}
      <Link to="/prep" className="group rounded-2xl bg-white border border-gray-100 p-8 shadow-sm hover:shadow-md transition-all relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-prep opacity-5 rounded-bl-full transition-transform group-hover:scale-110" />
        <div className="w-14 h-14 bg-prep/10 rounded-xl flex items-center justify-center mb-6">
          <BookOpen className="text-prep" size={28} />
        </div>
        <h3 className="text-2xl font-bold mb-2">Placement Prep</h3>
        <p className="text-gray-600 mb-6 line-clamp-2">Practice problems and AI mock interviews to get ready.</p>
        <div className="flex items-center text-prep font-semibold group-hover:translate-x-1 transition-transform">
          Start Prepping <ArrowRight size={18} className="ml-2" />
        </div>
      </Link>

      {/* Resume Card */}
      <Link to="/builder" className="group rounded-2xl bg-white border border-gray-100 p-8 shadow-sm hover:shadow-md transition-all relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-black opacity-5 rounded-bl-full transition-transform group-hover:scale-110" />
        <div className="w-14 h-14 bg-black/5 rounded-xl flex items-center justify-center mb-6">
          <FileText className="text-black" size={28} />
        </div>
        <h3 className="text-2xl font-bold mb-2">Resume Builder</h3>
        <p className="text-gray-600 mb-6 line-clamp-2">Live preview and AI-suggested content for the perfect CV.</p>
        <div className="flex items-center text-black font-semibold group-hover:translate-x-1 transition-transform">
          Build Resume <ArrowRight size={18} className="ml-2" />
        </div>
      </Link>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <ResumeProvider>
        <div className="flex min-h-screen bg-[#f9f9f9]">
          <Sidebar />
          <main className="flex-1 ml-64 overflow-y-auto min-h-screen w-full relative">
            <Toaster position="top-center" />
            <Routes>
              <Route path="/" element={<DashboardHome />} />

              {/* Job Notification Tracker Routes */}
              <Route path="/career" element={<><Navigation /><JobHome /></>} />
              <Route path="/career/dashboard" element={<><Navigation /><JobDashboard /></>} />
              <Route path="/career/saved" element={<><Navigation /><Saved /></>} />
              <Route path="/career/digest" element={<><Navigation /><Digest /></>} />
              <Route path="/career/settings" element={<><Navigation /><Settings /></>} />

              {/* Placement Readiness Routes */}
              <Route path="/prep" element={<PrepLanding />} />
              <Route path="/prep/dashboard" element={<PrepDashboardLayout />}>
                <Route index element={<PrepDashboard />} />
                <Route path="results" element={<PrepResults />} />
                <Route path="history" element={<PrepHistory />} />
                <Route path="practice" element={<PrepPractice />} />
                <Route path="assessments" element={<PrepAssessments />} />
                <Route path="resources" element={<PrepResources />} />
                <Route path="profile" element={<PrepProfile />} />
              </Route>

              {/* AI Resume Builder Routes */}
              <Route path="/builder" element={<><Navbar /><Builder /></>} />
              <Route path="/preview" element={<><Navbar /><Preview /></>} />
            </Routes>
          </main>
        </div>
      </ResumeProvider>
    </Router>
  );
}

export default App;
