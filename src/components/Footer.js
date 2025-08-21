import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      backgroundColor: '#1f2937',
      color: '#f9fafb',
      padding: '48px 0 24px 0',
      marginTop: 'auto'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 16px'
      }}>
        {/* 하단 Footer */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px',
          textAlign: 'center'
        }}>
          {/* 로고 및 저작권 */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px'
          }}>
            <div style={{
              fontSize: '24px',
              fontWeight: 'bold',
              color: '#ffffff'
            }}>
              리튬배터리
            </div>
            <p style={{
              color: '#9ca3af',
              fontSize: '14px'
            }}>
              © {currentYear} 리튬배터리 전문기업. All rights reserved.
            </p>
          </div>

          {/* 추가 정보 */}
          <div style={{
            display: 'flex',
            gap: '24px',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            <Link
              to="/"
              style={{
                color: '#9ca3af',
                textDecoration: 'none',
                fontSize: '12px',
                transition: 'color 0.2s'
              }}
              onMouseEnter={(e) => {
                e.target.style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = '#9ca3af';
              }}
            >
              개인정보처리방침
            </Link>
            <Link
              to="/"
              style={{
                color: '#9ca3af',
                textDecoration: 'none',
                fontSize: '12px',
                transition: 'color 0.2s'
              }}
              onMouseEnter={(e) => {
                e.target.style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = '#9ca3af';
              }}
            >
              이용약관
            </Link>
            <Link
              to="/"
              style={{
                color: '#9ca3af',
                textDecoration: 'none',
                fontSize: '12px',
                transition: 'color 0.2s'
              }}
              onMouseEnter={(e) => {
                e.target.style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = '#9ca3af';
              }}
            >
              사이트맵
            </Link>
          </div>

          {/* 인증 정보 */}
          <div style={{
            display: 'flex',
            gap: '16px',
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginTop: '8px'
          }}>
            <span style={{
              backgroundColor: '#374151',
              padding: '6px 12px',
              borderRadius: '4px',
              fontSize: '12px',
              color: '#d1d5db',
              fontWeight: '500'
            }}>
              KC 인증
            </span>
            <span style={{
              backgroundColor: '#374151',
              padding: '6px 12px',
              borderRadius: '4px',
              fontSize: '12px',
              color: '#d1d5db',
              fontWeight: '500'
            }}>
              CE 인증
            </span>
            <span style={{
              backgroundColor: '#374151',
              padding: '6px 12px',
              borderRadius: '4px',
              fontSize: '12px',
              color: '#d1d5db',
              fontWeight: '500'
            }}>
              UL 인증
            </span>
            <span style={{
              backgroundColor: '#374151',
              padding: '6px 12px',
              borderRadius: '4px',
              fontSize: '12px',
              color: '#d1d5db',
              fontWeight: '500'
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