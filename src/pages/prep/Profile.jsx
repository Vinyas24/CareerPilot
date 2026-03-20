import React, { useState, useEffect } from 'react';
import { User, Mail, Phone, MapPin, Briefcase, Link as LinkIcon, Github, Linkedin, Save, Camera, CheckCircle2 } from 'lucide-react';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('personal');
  const [isSaving, setIsSaving] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  
  // Form State
  const [formData, setFormData] = useState({
    firstName: 'Alex',
    lastName: 'Morgan',
    email: 'alex.morgan@example.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    
    currentRole: 'Senior Frontend Developer',
    experience: '5+ Years',
    portfolio: 'https://alexmorgan.dev',
    github: 'https://github.com/alexmorgan',
    linkedin: 'https://linkedin.com/in/alexmorgan',
    
    preferredRoles: 'Frontend Engineer, Full Stack Developer, UI Engineer',
    preferredLocations: 'Remote, San Francisco, New York',
    expectedSalary: '$130,000 - $160,000',
    availability: '2 Weeks Notice'
  });

  // Load from localStorage if exists
  useEffect(() => {
    const saved = localStorage.getItem('careerPilotProfile');
    if (saved) {
      try {
        setFormData(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse saved profile');
      }
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    setIsSaving(true);
    
    // Simulate API call
    setTimeout(() => {
      localStorage.setItem('careerPilotProfile', JSON.stringify(formData));
      setIsSaving(false);
      setShowSuccess(true);
      
      setTimeout(() => setShowSuccess(false), 3000);
    }, 800);
  };

  const tabs = [
    { id: 'personal', label: 'Personal Information', icon: User },
    { id: 'professional', label: 'Professional Details', icon: Briefcase },
    { id: 'preferences', label: 'Job Preferences', icon: MapPin },
  ];

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', paddingBottom: '40px' }}>
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{ 
          fontSize: '32px', 
          fontWeight: 700, 
          fontFamily: 'Crimson Text, Georgia, serif',
          color: '#111',
          margin: '0 0 8px 0',
          letterSpacing: '-0.02em'
        }}>
          My Profile
        </h1>
        <p style={{ color: '#666', fontSize: '15px', margin: 0 }}>
          Manage your personal information, professional links, and career preferences.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(250px, 280px) 1fr', gap: '32px', alignItems: 'start' }}>
        
        {/* Left Column: Avatar & Nav */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Avatar Card */}
          <div style={{ 
            backgroundColor: '#fff', 
            borderRadius: '16px', 
            border: '1px solid #e5e5e5',
            padding: '32px 24px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
          }}>
            <div style={{ position: 'relative', marginBottom: '16px' }}>
              <div style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                backgroundColor: '#f3f4f6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '4px solid #fff',
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
              }}>
                <span style={{ fontSize: '32px', fontWeight: 600, color: '#312e81', fontFamily: 'Crimson Text, serif' }}>
                  {formData.firstName.charAt(0)}{formData.lastName.charAt(0)}
                </span>
              </div>
              <button style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: '#312e81',
                color: '#fff',
                border: '2px solid #fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}>
                <Camera size={14} />
              </button>
            </div>
            <h2 style={{ fontSize: '18px', fontWeight: 600, color: '#111', margin: '0 0 4px 0' }}>
              {formData.firstName} {formData.lastName}
            </h2>
            <p style={{ fontSize: '14px', color: '#666', margin: 0 }}>
              {formData.currentRole}
            </p>
          </div>

          {/* Navigation */}
          <div style={{ 
            backgroundColor: '#fff', 
            borderRadius: '16px', 
            border: '1px solid #e5e5e5',
            padding: '8px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
          }}>
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px 16px',
                  backgroundColor: activeTab === tab.id ? '#f5f3ff' : 'transparent',
                  color: activeTab === tab.id ? '#312e81' : '#4b5563',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: activeTab === tab.id ? 600 : 500,
                  cursor: 'pointer',
                  transition: 'all 150ms ease',
                  textAlign: 'left'
                }}
              >
                <tab.icon size={18} style={{ opacity: activeTab === tab.id ? 1 : 0.6 }} />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Form Area */}
        <div style={{ 
          backgroundColor: '#fff', 
          borderRadius: '16px', 
          border: '1px solid #e5e5e5',
          boxShadow: '0 2px 8px rgba(0,0,0,0.02)',
          overflow: 'hidden'
        }}>
          <div style={{ 
            padding: '24px 32px', 
            borderBottom: '1px solid #e5e5e5',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <h2 style={{ fontSize: '18px', fontWeight: 600, color: '#111', margin: 0 }}>
              {tabs.find(t => t.id === activeTab)?.label}
            </h2>
            {showSuccess && (
              <span style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '6px', 
                color: '#059669', 
                fontSize: '13px', 
                fontWeight: 500,
                backgroundColor: '#ecfdf5',
                padding: '4px 10px',
                borderRadius: '12px'
              }}>
                <CheckCircle2 size={14} /> Saved successfully
              </span>
            )}
          </div>

          <form onSubmit={handleSave} style={{ padding: '32px' }}>
            
            {/* Personal Info Tab */}
            {activeTab === 'personal' && (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '13px', fontWeight: 600, color: '#4b5563' }}>First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    style={{ padding: '10px 14px', borderRadius: '8px', border: '1px solid #d1d5db', fontSize: '14px', outline: 'none' }}
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '13px', fontWeight: 600, color: '#4b5563' }}>Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    style={{ padding: '10px 14px', borderRadius: '8px', border: '1px solid #d1d5db', fontSize: '14px', outline: 'none' }}
                  />
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '13px', fontWeight: 600, color: '#4b5563' }}>Email Address</label>
                  <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                    <Mail size={16} color="#9ca3af" style={{ position: 'absolute', left: '14px' }} />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      style={{ width: '100%', padding: '10px 14px 10px 38px', borderRadius: '8px', border: '1px solid #d1d5db', fontSize: '14px', outline: 'none' }}
                    />
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '13px', fontWeight: 600, color: '#4b5563' }}>Phone Number</label>
                  <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                    <Phone size={16} color="#9ca3af" style={{ position: 'absolute', left: '14px' }} />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      style={{ width: '100%', padding: '10px 14px 10px 38px', borderRadius: '8px', border: '1px solid #d1d5db', fontSize: '14px', outline: 'none' }}
                    />
                  </div>
                </div>

                <div style={{ gridColumn: 'span 2', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '13px', fontWeight: 600, color: '#4b5563' }}>Location</label>
                  <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                    <MapPin size={16} color="#9ca3af" style={{ position: 'absolute', left: '14px' }} />
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      style={{ width: '100%', padding: '10px 14px 10px 38px', borderRadius: '8px', border: '1px solid #d1d5db', fontSize: '14px', outline: 'none' }}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Professional Details Tab */}
            {activeTab === 'professional' && (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '24px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label style={{ fontSize: '13px', fontWeight: 600, color: '#4b5563' }}>Current Role</label>
                    <input
                      type="text"
                      name="currentRole"
                      value={formData.currentRole}
                      onChange={handleChange}
                      style={{ padding: '10px 14px', borderRadius: '8px', border: '1px solid #d1d5db', fontSize: '14px', outline: 'none' }}
                    />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label style={{ fontSize: '13px', fontWeight: 600, color: '#4b5563' }}>Years of Experience</label>
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      style={{ padding: '10px 14px', borderRadius: '8px', border: '1px solid #d1d5db', fontSize: '14px', outline: 'none', backgroundColor: '#fff' }}
                    >
                      <option>Entry Level (0-2 Yrs)</option>
                      <option>Mid Level (2-5 Yrs)</option>
                      <option>Senior (5+ Yrs)</option>
                      <option>Lead / Manager</option>
                    </select>
                  </div>
                </div>

                <div style={{ height: '1px', backgroundColor: '#f3f4f6', margin: '4px 0' }} />

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '13px', fontWeight: 600, color: '#4b5563' }}>Portfolio / Personal Website</label>
                  <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                    <LinkIcon size={16} color="#9ca3af" style={{ position: 'absolute', left: '14px' }} />
                    <input
                      type="url"
                      name="portfolio"
                      value={formData.portfolio}
                      onChange={handleChange}
                      style={{ width: '100%', padding: '10px 14px 10px 38px', borderRadius: '8px', border: '1px solid #d1d5db', fontSize: '14px', outline: 'none' }}
                    />
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '13px', fontWeight: 600, color: '#4b5563' }}>LinkedIn Profile</label>
                  <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                    <Linkedin size={16} color="#9ca3af" style={{ position: 'absolute', left: '14px' }} />
                    <input
                      type="url"
                      name="linkedin"
                      value={formData.linkedin}
                      onChange={handleChange}
                      style={{ width: '100%', padding: '10px 14px 10px 38px', borderRadius: '8px', border: '1px solid #d1d5db', fontSize: '14px', outline: 'none' }}
                    />
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '13px', fontWeight: 600, color: '#4b5563' }}>GitHub Profile</label>
                  <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                    <Github size={16} color="#9ca3af" style={{ position: 'absolute', left: '14px' }} />
                    <input
                      type="url"
                      name="github"
                      value={formData.github}
                      onChange={handleChange}
                      style={{ width: '100%', padding: '10px 14px 10px 38px', borderRadius: '8px', border: '1px solid #d1d5db', fontSize: '14px', outline: 'none' }}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Preferences Tab */}
            {activeTab === 'preferences' && (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '24px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '13px', fontWeight: 600, color: '#4b5563' }}>Preferred Roles</label>
                  <textarea
                    name="preferredRoles"
                    value={formData.preferredRoles}
                    onChange={handleChange}
                    rows={2}
                    placeholder="e.g. Frontend Engineer, Full Stack Developer"
                    style={{ padding: '10px 14px', borderRadius: '8px', border: '1px solid #d1d5db', fontSize: '14px', outline: 'none', resize: 'vertical' }}
                  />
                  <span style={{ fontSize: '12px', color: '#6b7280' }}>Separate multiple roles with commas</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '13px', fontWeight: 600, color: '#4b5563' }}>Preferred Target Locations</label>
                  <input
                    type="text"
                    name="preferredLocations"
                    value={formData.preferredLocations}
                    onChange={handleChange}
                    placeholder="e.g. Remote, San Francisco, New York"
                    style={{ padding: '10px 14px', borderRadius: '8px', border: '1px solid #d1d5db', fontSize: '14px', outline: 'none' }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label style={{ fontSize: '13px', fontWeight: 600, color: '#4b5563' }}>Expected Salary Range</label>
                    <input
                      type="text"
                      name="expectedSalary"
                      value={formData.expectedSalary}
                      onChange={handleChange}
                      placeholder="e.g. $130,000 - $160,000"
                      style={{ padding: '10px 14px', borderRadius: '8px', border: '1px solid #d1d5db', fontSize: '14px', outline: 'none' }}
                    />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label style={{ fontSize: '13px', fontWeight: 600, color: '#4b5563' }}>Availability / Notice Period</label>
                    <select
                      name="availability"
                      value={formData.availability}
                      onChange={handleChange}
                      style={{ padding: '10px 14px', borderRadius: '8px', border: '1px solid #d1d5db', fontSize: '14px', outline: 'none', backgroundColor: '#fff' }}
                    >
                      <option>Immediate / Open to work</option>
                      <option>1 Week Notice</option>
                      <option>2 Weeks Notice</option>
                      <option>1 Month Notice</option>
                      <option>Not looking at the moment</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            <div style={{ marginTop: '32px', display: 'flex', justifyContent: 'flex-end' }}>
              <button
                type="submit"
                disabled={isSaving}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 24px',
                  backgroundColor: '#312e81',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: 600,
                  cursor: isSaving ? 'not-allowed' : 'pointer',
                  opacity: isSaving ? 0.7 : 1,
                  transition: 'opacity 150ms ease'
                }}
              >
                {isSaving ? (
                  <>Saving...</>
                ) : (
                  <>
                    <Save size={16} />
                    Save Changes
                  </>
                )}
              </button>
            </div>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
