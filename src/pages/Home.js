import React, { useState, useEffect } from 'react';
import MainImage from '../assets/main.png';
import HESSImage from '../assets/hess.png';
import GolfCartImage from '../assets/golfcart.png';
import BESSImage from '../assets/bess.png';
import PowerBankImage from '../assets/powerbank.png';
import SunwoodaImage from '../assets/sunwooda.png';
import KCImage from '../assets/kc.png';

import HyundaiLogo from '../assets/logos/hyundai-mobis.svg';
import SunwoodaLogo from '../assets/logos/sunwooda.png';
import CheryLogo from '../assets/logos/chery.webp';

const Home = () => {
  const [activeTab, setActiveTab] = useState(2);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const products = [
    {
      image: GolfCartImage,
      title: "골프카트용",
      subtitle: "초소형 전기차"
    },
    {
      image: BESSImage,
      title: "산업용 BESS",
      subtitle: "산업용 BESS"
    },
    {
      image: HESSImage,
      title: "가정용 HESS",
      subtitle: "가정용 HESS"
    },
    {
      image: PowerBankImage,
      title: "파워뱅크",
      subtitle: "파워뱅크"
    }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* 배경 이미지 */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `url(${MainImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.3,
        zIndex: 1
      }}></div>

      {/* 오버레이 */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(29, 78, 216, 0.7)',
        zIndex: 2
      }}></div>

      {/* 메인 컨텐츠 */}
      <div style={{
        position: 'relative',
        zIndex: 3,
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white',
        padding: isMobile ? '0 20px' : '0'
      }}>
        <div>
          <h1 style={{
            fontSize: isMobile ? '2rem' : '3rem',
            fontWeight: '300',
            marginBottom: '1rem',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
            lineHeight: isMobile ? '1.2' : '1'
          }}>
            우수한 품질로 미래를 준비합니다.
          </h1>
          <p style={{
            fontSize: isMobile ? '1.1rem' : '1.5rem',
            marginTop: '2rem',
            marginBottom: '2rem',
            opacity: 0.9,
            textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
            lineHeight: '1.4'
          }}>
            KYEVP는 최고의 리튬인산철배터리 회사로서 <br />
            전기차용 셀을 활용한 골프카트, 지게차와 같은 <br />
            각종특수차량전용 셀과 12V시동배터리를 공급합니다. <br />
          </p>
          <div style={{
            display: 'flex',
            gap: isMobile ? '15px' : '20px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            flexDirection: isMobile ? 'column' : 'row'
          }}>
            <button style={{
              backgroundColor: 'white',
              color: '#1d4ed8',
              border: 'none',
              padding: isMobile ? '12px 24px' : '15px 30px',
              borderRadius: '8px',
              fontSize: isMobile ? '1rem' : '1.1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              width: isMobile ? 'auto' : 'auto',
              minWidth: isMobile ? '200px' : 'auto'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 6px 12px rgba(0,0,0,0.2)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
            }}
            >
              <button 
                onClick={() => scrollToSection('product-section')}
                style={{ 
                  backgroundColor: 'transparent', 
                  border: 'none', 
                  color: 'inherit', 
                  width: '100%', 
                  height: '100%',
                  cursor: 'pointer',
                  fontSize: 'inherit',
                  fontWeight: 'inherit'
                }}
              >
                제품 보기
              </button>
            </button>
            <button style={{
              backgroundColor: 'transparent',
              color: 'white',
              border: '2px solid white',
              padding: isMobile ? '12px 24px' : '15px 30px',
              borderRadius: '8px',
              fontSize: isMobile ? '1rem' : '1.1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              width: isMobile ? 'auto' : 'auto',
              minWidth: isMobile ? '200px' : 'auto'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'white';
              e.target.style.color = '#1d4ed8';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = 'white';
            }}
            >
              <a href="mailto:john.kim@kyevp.com" style={{ textDecoration: 'none', color: 'inherit' }}>
                문의하기
              </a>
            </button>
          </div>
        </div>
      </div>

      {/* Section1 - 제품 소개 */}
      <div id="product-section" style={{
        position: 'relative',
        zIndex: 3,
        backgroundColor: 'white',
        padding: isMobile ? '60px 0' : '100px 0'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: isMobile ? '0 20px' : '0 40px',
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: 'center',
          gap: isMobile ? '40px' : '80px'
        }}>
          {/* 왼쪽 텍스트 영역 */}
          <div style={{
            flex: isMobile ? 'none' : '0 0 400px',
            textAlign: isMobile ? 'center' : 'left'
          }}>
            <h1 style={{
              fontSize: isMobile ? '3rem' : '4.5rem',
              fontWeight: 'bold',
              color: '#1f2937',
              marginBottom: '2rem',
              lineHeight: '1'
            }}>
              PRODUCT
            </h1>
            <p style={{
              fontSize: isMobile ? '0.9rem' : '1.1rem',
              color: '#4b5563',
              lineHeight: '1.8'
            }}>
              우리가 살아가고 있는 현대사회는 앞으로<br />
              다가올 미래사회의 변화를 예측할 수 없을<br />
              정도로 매우 빠르게 변하고 있습니다.<br />
              KYEVP는 미래를 준비하고 앞장서서<br />
              변화하는 시대의 흐름을 이끌어가는 기업이<br />
              되기위해 모두가 최선을 다하겠습니다.
            </p>
          </div>

          {/* 오른쪽 이미지 영역 - 모바일에서는 세로로 배치 */}
          <div style={{
            flex: '1',
            display: 'grid',
            gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
            gap: isMobile ? '20px' : '25px',
            alignItems: 'flex-start',
            width: '100%'
          }}>
            {products.map((product, index) => (
              <div key={index} style={{
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer'
              }}
              onClick={() => setActiveTab(index)}
              >
                {/* 이미지 */}
                <div style={{
                  width: '100%',
                  height: isMobile ? '200px' : '280px',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  marginBottom: '20px',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#f8fafc'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-5px)';
                  e.target.style.boxShadow = '0 12px 35px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 8px 25px rgba(0,0,0,0.1)';
                }}
                >
                  <img 
                    src={product.image} 
                    alt={product.title}
                    style={{
                      maxWidth: '90%',
                      maxHeight: '90%',
                      width: 'auto',
                      height: 'auto',
                      objectFit: 'contain'
                    }}
                  />
                </div>
                
                {/* 제목 */}
                <h3 style={{
                  fontSize: isMobile ? '1rem' : '1.1rem',
                  fontWeight: 'bold',
                  color: '#1f2937',
                  marginBottom: '5px',
                  textAlign: 'center'
                }}>
                  {product.subtitle}
                </h3>
                
                {/* 구분선 */}
                <div style={{
                  width: '100%',
                  height: '3px',
                  backgroundColor: activeTab === index ? '#3b82f6' : '#e5e7eb',
                  transition: 'background-color 0.3s ease'
                }}></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section2 - Sunwooda & KC Part */}
      <div style={{
        position: 'relative',
        zIndex: 3,
        minHeight: isMobile ? 'auto' : '100vh',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row'
      }}>
        {/* Sunwooda Part */}
        <div style={{
          flex: '1',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: isMobile ? '40px 20px' : '60px 40px',
          backgroundColor: '#f8fafc',
          position: 'relative',
          overflow: 'hidden',
          minHeight: isMobile ? '400px' : 'auto'
        }}>
          {/* 배경 이미지 */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${SunwoodaImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.2,
            zIndex: 1
          }}></div>
          
          {/* 컨텐츠 */}
          <div style={{
            position: 'relative',
            zIndex: 2,
            textAlign: 'center',
            maxWidth: '500px'
          }}>
            <h2 style={{
              fontSize: isMobile ? '1rem' : '1.2rem',
              color: '#6b7280',
              fontWeight: '500',
              fontWeight: 'bold',
              marginBottom: '1rem',
              textTransform: 'uppercase',
              letterSpacing: '2px'
            }}>
              Sunwooda
            </h2>
            <h1 style={{
              fontSize: isMobile ? '2.5rem' : '3.5rem',
              fontWeight: 'bold',
              color: '#1f2937',
              marginBottom: '2rem',
              lineHeight: '1.1'
            }}>
              혁신적인<br />
              배터리 기술
            </h1>
            <p style={{
              fontSize: isMobile ? '1rem' : '1.2rem',
              color: '#4b5563',
              lineHeight: '1.7',
              marginBottom: '2.5rem'
            }}>
              셀(CELL) 판매는 글로벌TOP10 에 해당되는 <br />
              SUNWODA셀을 전문적으로 판매하고 있습니다. <br />
              KS인증을 획득한 각종배터리에 알맞게 충전기를 <br />
              220V용과 380V용 2종류를 판매하고 있습니다.
            </p>
            <button style={{
              backgroundColor: '#3b82f6',
              color: 'white',
              border: 'none',
              padding: isMobile ? '12px 24px' : '15px 30px',
              borderRadius: '8px',
              fontSize: isMobile ? '0.9rem' : '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 6px rgba(59, 130, 246, 0.2)',
              width: isMobile ? '180px' : 'auto'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 6px 12px rgba(59, 130, 246, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 6px rgba(59, 130, 246, 0.2)';
            }}
            >
              <a href="/cell" style={{ textDecoration: 'none', color: 'inherit' }}>
                자세히 보기
              </a>
            </button>
          </div>
        </div>

        {/* KC Part */}
        <div style={{
          flex: '1',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: isMobile ? '40px 20px' : '60px 40px',
          backgroundColor: 'white',
          position: 'relative',
          overflow: 'hidden',
          minHeight: isMobile ? '400px' : 'auto'
        }}>
          {/* 배경 이미지 */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${KCImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.2,
            zIndex: 1
          }}></div>
          
          {/* 컨텐츠 */}
          <div style={{
            position: 'relative',
            zIndex: 2,
            textAlign: 'center',
            maxWidth: '500px'
          }}>
            <h2 style={{
              fontSize: isMobile ? '1rem' : '1.2rem',
              color: '#6b7280',
              fontWeight: '500',
              marginBottom: '1rem',
              textTransform: 'uppercase',
              letterSpacing: '2px'
            }}>
              KC
            </h2>
            <h1 style={{
              fontSize: isMobile ? '2.5rem' : '3.5rem',
              fontWeight: 'bold',
              color: '#1f2937',
              marginBottom: '2rem',
              lineHeight: '1.1'
            }}>
              품질 인증<br />
              안전 보장
            </h1>
            <p style={{
              fontSize: isMobile ? '1rem' : '1.1rem',
              color: '#4b5563',
              lineHeight: '1.7',
              marginBottom: '2.5rem'
            }}>
              KC 인증을 통과한 최고 품질의 배터리 제품이며<br />
              안전성과 신뢰성을 보장하여 고객에게 최고의 만족을 제공합니다. <br />
              리튬인산철배터리를 전문적으로 수리 및 품질보증을위해 <br />
              충청남도 당진에서 리튬배터리 전문 A/S센터를 운영중에 있습니다.
            </p>
            <button style={{
              backgroundColor: '#10b981',
              color: 'white',
              border: 'none',
              padding: isMobile ? '12px 24px' : '15px 30px',
              borderRadius: '8px',
              fontSize: isMobile ? '0.9rem' : '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 6px rgba(16, 185, 129, 0.2)',
              width: isMobile ? '180px' : 'auto'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 6px 12px rgba(16, 185, 129, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 6px rgba(16, 185, 129, 0.2)';
            }}
            >
              <a href="/support" style={{ textDecoration: 'none', color: 'inherit' }}>
              A/S 센터 보기
              </a>
            </button>
          </div>
        </div>
      </div>

      {/* Section3 - 파트너사 */}
      <div style={{
        position: 'relative',
        zIndex: 3,
        backgroundColor: 'white',
        padding: isMobile ? '60px 0' : '100px 0'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: isMobile ? '0 20px' : '0 40px'
        }}>
          {/* 제목 */}
          <div style={{
            textAlign: 'center',
            marginBottom: isMobile ? '50px' : '80px'
          }}>
            <h2 style={{
              fontSize: isMobile ? '1rem' : '1.1rem',
              color: '#6b7280',
              fontWeight: '400',
              marginBottom: '1rem'
            }}>
              KYEVP의 파트너사
            </h2>
            <h1 style={{
              fontSize: isMobile ? '3rem' : '4.5rem',
              fontWeight: 'bold',
              color: '#1f2937',
              lineHeight: '1'
            }}>
              PARTNER
            </h1>
          </div>

          {/* 파트너사 그리드 - 4개를 한 줄로 */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
            gap: isMobile ? '25px' : '40px',
            marginBottom: '40px'
          }}>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center'
            }}>
              <div style={{
                width: isMobile ? '100px' : '150px',
                height: isMobile ? '100px' : '150px',
                borderRadius: '50%',
                backgroundColor: '#f8fafc',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '15px',
                border: '2px solid #e5e7eb'
              }}><img src={HyundaiLogo} alt="Hyundai" style={{ width: '80%', height: '80%', objectFit: 'contain' }} /></div>
              <span style={{
                fontSize: isMobile ? '0.8rem' : '0.9rem',
                color: '#6b7280',
                fontWeight: '500'
              }}>현대모비스</span>
            </div>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center'
            }}>
              <div style={{
                width: isMobile ? '100px' : '150px',
                height: isMobile ? '100px' : '150px',
                borderRadius: '50%',
                backgroundColor: '#f8fafc',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '15px',
                border: '2px solid #e5e7eb',
                padding: '10px'
              }}><img src={SunwoodaLogo} alt="Sunwooda" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /></div>
              <span style={{
                fontSize: isMobile ? '0.7rem' : '0.8rem',
                color: '#6b7280',
                fontWeight: '500',
                textAlign: 'center',
                lineHeight: '1.2'
              }}>선우다전자</span>
            </div>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center'
            }}>
              <div style={{
                width: isMobile ? '100px' : '150px',
                height: isMobile ? '100px' : '150px',
                borderRadius: '50%',
                backgroundColor: '#f8fafc',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '15px',
                border: '2px solid #e5e7eb'
              }}>
                <span style={{
                  fontSize: isMobile ? '1rem' : '1.3rem',
                  fontWeight: 'bold',
                  color: '#6b7280'
                }}>UNIST</span>
              </div>
              <span style={{
                fontSize: isMobile ? '0.8rem' : '0.9rem',
                color: '#6b7280',
                fontWeight: '500'
              }}>UNIST</span>
            </div>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center'
            }}>
              <div style={{
                width: isMobile ? '100px' : '150px',
                height: isMobile ? '100px' : '150px',
                borderRadius: '50%',
                backgroundColor: '#f8fafc',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '15px',
                border: '2px solid #e5e7eb'
              }}><img src={CheryLogo} alt="Chery" style={{ width: '90%', height: '90%', objectFit: 'contain' }} /></div>
              <span style={{
                fontSize: isMobile ? '0.8rem' : '0.9rem',
                color: '#6b7280',
                fontWeight: '500'
              }}>체리자동차</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home; 