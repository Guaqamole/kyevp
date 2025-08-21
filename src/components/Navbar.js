import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const navItems = [
    { path: '/golfcart', label: 'GolfCart', name: '골프카트용' },
    { path: '/forklift', label: 'Forklift', name: '지게차용' },
    { path: '/bess', label: 'BESS', name: '산업용BESS' },
    { path: '/hess', label: 'HESS', name: '가정용HESS' },
    { path: '/powerbank', label: 'PowerBank', name: '파워뱅크' },
    { path: '/campingcar', label: 'CampingCar', name: '캠핑카용' },
    { path: '/cell', label: 'Cell', name: '셀(cell)' },
    { path: '/charger', label: 'Charger', name: '충전기' },
    { path: '/support', label: 'Support', name: 'A/S센터' }
  ];

  return (
    <nav style={{ 
      backgroundColor: '#1e40af', 
      color: 'white', 
      padding: '0',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '0 16px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '64px'
      }}>
        {/* 로고 */}
        <Link 
          to="/" 
          style={{ 
            fontSize: '24px', 
            fontWeight: 'bold', 
            textDecoration: 'none', 
            color: 'white' 
          }}
          onClick={handleLinkClick}
        >
          리튬배터리
        </Link>

        {/* 데스크톱 네비게이션 */}
        <div style={{ 
          display: isMobile ? 'none' : 'flex',
          gap: '0',
          flexWrap: 'wrap'
        }}>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              style={{
                padding: '8px 12px',
                textDecoration: 'none',
                color: 'white',
                fontSize: '14px',
                borderRadius: '4px',
                backgroundColor: isActive(item.path) ? 'rgba(255,255,255,0.2)' : 'transparent',
                transition: 'background-color 0.2s',
                whiteSpace: 'nowrap'
              }}
              onMouseEnter={(e) => {
                if (!isActive(item.path)) {
                  e.target.style.backgroundColor = 'rgba(255,255,255,0.1)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive(item.path)) {
                  e.target.style.backgroundColor = 'transparent';
                }
              }}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* 모바일 햄버거 버튼 */}
        <button
          onClick={handleToggle}
          style={{
            display: isMobile ? 'block' : 'none',
            backgroundColor: 'transparent',
            border: 'none',
            color: 'white',
            fontSize: '24px',
            cursor: 'pointer',
            padding: '4px'
          }}
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* 모바일 메뉴 */}
      <div style={{
        display: isOpen && isMobile ? 'block' : 'none',
        backgroundColor: '#1e40af',
        borderTop: '1px solid rgba(255,255,255,0.1)'
      }}>
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            onClick={handleLinkClick}
            style={{
              display: 'block',
              padding: '12px 16px',
              textDecoration: 'none',
              color: 'white',
              borderBottom: '1px solid rgba(255,255,255,0.1)',
              backgroundColor: isActive(item.path) ? 'rgba(255,255,255,0.2)' : 'transparent'
            }}
            onMouseEnter={(e) => {
              if (!isActive(item.path)) {
                e.target.style.backgroundColor = 'rgba(255,255,255,0.1)';
              }
            }}
            onMouseLeave={(e) => {
              if (!isActive(item.path)) {
                e.target.style.backgroundColor = isActive(item.path) ? 'rgba(255,255,255,0.2)' : 'transparent';
              }
            }}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar; 