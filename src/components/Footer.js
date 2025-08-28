import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <footer style={{
      backgroundColor: '#1f2937',
      color: '#f9fafb',
      padding: isMobile ? '32px 0 24px 0' : '24px 0 24px 0',
      marginTop: 'auto'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: isMobile ? '0 20px' : '0 16px'
      }}>
        {/* 하단 Footer */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: isMobile ? '24px' : '16px',
          textAlign: 'center'
        }}>
          {/* 로고 및 저작권 */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: isMobile ? '12px' : '8px'
          }}>
            <p style={{
              fontSize: isMobile ? '1rem' : '0.9rem',
              fontWeight: 'bold',
              color: '#9ca3af',
            }}>
              주식회사 케이와이이브피 (KYEVP)
            </p>
            <p style={{
              fontSize: isMobile ? '0.9rem' : '0.9rem',
              color: '#9ca3af',
            }}>
              대표자명: 양지영
            </p>
            <p style={{
              fontSize: isMobile ? '0.9rem' : '0.9rem',
              color: '#9ca3af',
            }}>
              본사: 충청남도 당진시 솔산면 솔산로 513
            </p>
            <p style={{
              fontSize: isMobile ? '0.9rem' : '0.9rem',
              color: '#9ca3af',
            }}>
              사업품목: 전기차부품, 무역업
            </p>
            <p style={{
              fontSize: isMobile ? '0.9rem' : '0.9rem',
              color: '#9ca3af',
            }}>
              사업자등록번호: 875-86-01504
            </p>
          </div>

          {/* 인증 정보 */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, auto)',
            gap: isMobile ? '12px' : '16px',
            justifyContent: 'center',
            marginTop: isMobile ? '16px' : '8px',
            width: isMobile ? '100%' : 'auto',
            maxWidth: isMobile ? '300px' : 'none'
          }}>
            <span style={{
              backgroundColor: '#374151',
              padding: isMobile ? '8px 12px' : '6px 12px',
              borderRadius: '4px',
              fontSize: isMobile ? '13px' : '12px',
              color: '#d1d5db',
              fontWeight: '500',
              textAlign: 'center'
            }}>
              KC 인증
            </span>
            <span style={{
              backgroundColor: '#374151',
              padding: isMobile ? '8px 12px' : '6px 12px',
              borderRadius: '4px',
              fontSize: isMobile ? '13px' : '12px',
              color: '#d1d5db',
              fontWeight: '500',
              textAlign: 'center'
            }}>
              CE 인증
            </span>
            <span style={{
              backgroundColor: '#374151',
              padding: isMobile ? '8px 12px' : '6px 12px',
              borderRadius: '4px',
              fontSize: isMobile ? '13px' : '12px',
              color: '#d1d5db',
              fontWeight: '500',
              textAlign: 'center'
            }}>
              UL 인증
            </span>
            <span style={{
              backgroundColor: '#374151',
              padding: isMobile ? '8px 12px' : '6px 12px',
              borderRadius: '4px',
              fontSize: isMobile ? '13px' : '12px',
              color: '#d1d5db',
              fontWeight: '500',
              textAlign: 'center'
            }}>
              ISO 9001
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 