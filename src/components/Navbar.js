import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('scroll', handleScroll);
    };
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

  // 홈페이지인지 확인
  const isHomePage = location.pathname === '/';
  
  // navbar 배경색 결정: 홈페이지가 아니거나 스크롤된 경우 고정 색상 사용
  const getNavbarBackground = () => {
    if (!isHomePage) {
      return 'rgba(25, 119, 209, 0.95)'; // 다른 페이지에서는 고정된 파란색
    }
    return isScrolled ? 'rgba(25, 119, 209, 0.95)' : 'transparent';
  };

  const navItems = [
    { path: '/golfcart', label: 'GolfCart', name: '골프카트용' },
    // { path: '/forklift', label: 'Forklift', name: '지게차용' },
    { path: '/12vstart', label: '12VStart', name: '12V시동' },
    { path: '/bess', label: 'BESS', name: '산업용BESS' },
    { path: '/hess', label: 'HESS', name: '가정용HESS' },
    { path: '/powerbank', label: 'PowerBank', name: '파워뱅크' },
    { path: '/campingcar', label: 'CampingCar', name: '캠핑카용' },
    { path: '/cell', label: 'Cell', name: '셀(cell)' },
    { path: '/charger', label: 'Charger', name: '충전기' },
    { path: '/support', label: 'Support', name: 'A/S센터' }
  ];

  return (
    <>
      <nav style={{ 
        backgroundColor: getNavbarBackground(),
        color: 'white', 
        padding: '0',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.3s ease',
        backdropFilter: !isHomePage || isScrolled ? 'blur(10px)' : 'none',
        boxShadow: !isHomePage || isScrolled ? '0 2px 10px rgba(0,0,0,0.1)' : 'none'
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: '0 16px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: isMobile ? '60px' : '70px'
        }}>
          {/* 로고 */}
          <Link 
            to="/" 
            style={{ 
              fontSize: isMobile ? '24px' : '28px', 
              fontWeight: 'bold', 
              textDecoration: 'none', 
              color: 'white',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onClick={handleLinkClick}
          >
            <img src={Logo} alt="Logo" style={{ width: isMobile ? '90px' : '110px' }} />
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
                  padding: '12px 16px',
                  textDecoration: 'none',
                  color: 'white',
                  fontSize: '15px',
                  borderRadius: '6px',
                  backgroundColor: isActive(item.path) ? 'rgba(255,255,255,0.2)' : 'transparent',
                  transition: 'all 0.3s ease',
                  whiteSpace: 'nowrap',
                  textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
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
              display: isMobile ? 'flex' : 'none',
              backgroundColor: 'transparent',
              border: 'none',
              color: 'white',
              fontSize: '24px',
              cursor: 'pointer',
              padding: '12px',
              borderRadius: '6px',
              transition: 'all 0.3s ease',
              minWidth: '44px',
              minHeight: '44px',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'rgba(255,255,255,0.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
            }}
            aria-label="메뉴 열기"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* navbar 아래 구분선 */}
        <div style={{
          height: '3px',
          background: !isHomePage || isScrolled 
            ? 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)'
            : 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)',
          transition: 'all 0.3s ease'
        }}></div>

        {/* 모바일 메뉴 */}
        <div style={{
          display: isOpen && isMobile ? 'block' : 'none',
          backgroundColor: 'rgba(31, 41, 55, 0.98)',
          backdropFilter: 'blur(15px)',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          maxHeight: '70vh',
          overflowY: 'auto'
        }}>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={handleLinkClick}
              style={{
                display: 'block',
                padding: '18px 20px',
                textDecoration: 'none',
                color: 'white',
                borderBottom: '1px solid rgba(255,255,255,0.1)',
                backgroundColor: isActive(item.path) ? 'rgba(255,255,255,0.2)' : 'transparent',
                transition: 'background-color 0.3s ease',
                fontSize: '16px',
                fontWeight: '500',
                minHeight: '44px',
                display: 'flex',
                alignItems: 'center'
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
    </>
  );
};

export default Navbar; 