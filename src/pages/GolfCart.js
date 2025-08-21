import React from 'react';

const GolfCart = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          골프카트용 리튬 배터리
        </h1>
        <p className="text-lg text-center text-gray-600 mb-12">
          골프장 전동카트에 최적화된 고성능 리튬 배터리
        </p>

        {/* 제품 특징 */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-center mb-8 text-blue-600">
            제품 특징
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">긴 수명</h3>
              <p className="text-gray-600">기존 납축전지 대비 3-5배 긴 수명</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">빠른 충전</h3>
              <p className="text-gray-600">1-2시간 내 완전 충전 가능</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">가벼운 무게</h3>
              <p className="text-gray-600">기존 배터리 대비 50% 이상 가벼움</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">안전성</h3>
              <p className="text-gray-600">BMS 시스템으로 안전 보장</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">환경 친화적</h3>
              <p className="text-gray-600">친환경 소재 사용</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">유지보수 무료</h3>
              <p className="text-gray-600">정기 점검 및 유지보수 서비스</p>
            </div>
          </div>
        </section>

        {/* 제품 사양 */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-center mb-8 text-blue-600">
            제품 사양
          </h2>
          <div className="bg-white rounded-lg shadow-md p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">기본 사양</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 용량: 48V 100Ah</li>
                  <li>• 전압: 48V</li>
                  <li>• 충전 시간: 1-2시간</li>
                  <li>• 사용 시간: 18홀 완주 가능</li>
                  <li>• 수명: 2000회 충방전</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">물리적 특성</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 크기: 300 x 200 x 150mm</li>
                  <li>• 무게: 15kg</li>
                  <li>• 작동 온도: -20°C ~ 60°C</li>
                  <li>• 보호 등급: IP65</li>
                  <li>• 인증: KC, CE, UL</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 적용 모델 */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-center mb-8 text-blue-600">
            적용 가능 모델
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-md p-4 text-center">
              <h4 className="font-semibold text-gray-800">Yamaha</h4>
              <p className="text-sm text-gray-600">전 모델 호환</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 text-center">
              <h4 className="font-semibold text-gray-800">Club Car</h4>
              <p className="text-sm text-gray-600">전 모델 호환</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 text-center">
              <h4 className="font-semibold text-gray-800">EZ-GO</h4>
              <p className="text-sm text-gray-600">전 모델 호환</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 text-center">
              <h4 className="font-semibold text-gray-800">기타 브랜드</h4>
              <p className="text-sm text-gray-600">맞춤형 제작 가능</p>
            </div>
          </div>
        </section>

        {/* 문의 섹션 */}
        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-8 text-blue-600">
            문의 및 견적
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            골프카트용 리튬 배터리에 대한 자세한 정보나 견적을 원하시면 연락주세요.
          </p>
          <div className="bg-blue-50 rounded-lg p-6 max-w-2xl mx-auto">
            <p className="text-gray-700 mb-4">
              <strong>연락처:</strong> 02-1234-5678
            </p>
            <p className="text-gray-700">
              <strong>이메일:</strong> info@batterycompany.com
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default GolfCart; 