import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          리튬 배터리 전문 기업
        </h1>
        <p className="text-lg text-center text-gray-600 mb-12">
          최고 품질의 리튬 배터리 솔루션을 제공합니다
        </p>
        
        {/* 회사 비전 섹션 */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-center mb-8 text-blue-600">
            회사 비전
          </h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              우리는 혁신적인 리튬 배터리 기술을 통해 지속 가능한 미래를 만들어갑니다. 
              고품질 제품과 전문적인 서비스로 고객의 만족을 최우선으로 합니다.
            </p>
          </div>
        </section>

        {/* 주요 제품 카테고리 */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-center mb-8 text-blue-600">
            주요 제품
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">골프카트용 배터리</h3>
              <p className="text-gray-600">골프장에서 사용하는 전동카트에 최적화된 리튬 배터리</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">지게차용 배터리</h3>
              <p className="text-gray-600">산업용 지게차에 적용되는 고출력 리튬 배터리</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">산업용 BESS</h3>
              <p className="text-gray-600">대용량 에너지 저장 시스템</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">가정용 HESS</h3>
              <p className="text-gray-600">가정용 에너지 저장 시스템</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">파워뱅크</h3>
              <p className="text-gray-600">휴대용 전원 공급 장치</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">캠핑카용 배터리</h3>
              <p className="text-gray-600">캠핑카에 특화된 리튬 배터리</p>
            </div>
          </div>
        </section>

        {/* 회사 특징 */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-center mb-8 text-blue-600">
            왜 우리를 선택해야 할까요?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔋</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">고품질</h3>
              <p className="text-gray-600">최고 품질의 리튬 배터리 제품</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">고성능</h3>
              <p className="text-gray-600">뛰어난 성능과 안정성</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛠️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">전문 A/S</h3>
              <p className="text-gray-600">전문적인 기술 지원과 서비스</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home; 