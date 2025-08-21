import React from 'react';

const HESS = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          가정용 HESS (Home Energy Storage System)
        </h1>
        <p className="text-lg text-center text-gray-600 mb-12">
          가정에서 사용하는 소형 에너지 저장 시스템
        </p>

        {/* 제품 특징 */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-center mb-8 text-blue-600">
            제품 특징
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">가정용 최적화</h3>
              <p className="text-gray-600">일반 가정에 맞는 소형 설계</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">태양광 연동</h3>
              <p className="text-gray-600">가정용 태양광 패널과 연동</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">전기요금 절약</h3>
              <p className="text-gray-600">시간대별 전기요금 차익 활용</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">비상 전력</h3>
              <p className="text-gray-600">정전 시 비상 전력 공급</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">스마트 제어</h3>
              <p className="text-gray-600">스마트폰 앱으로 원격 제어</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">설치 간편</h3>
              <p className="text-gray-600">벽면 설치로 공간 절약</p>
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
                  <li>• 용량: 5kWh ~ 20kWh</li>
                  <li>• 전압: 48V</li>
                  <li>• 출력: 3kW ~ 10kW</li>
                  <li>• 효율: 90% 이상</li>
                  <li>• 수명: 10년 이상</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">물리적 특성</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 크기: 600 x 400 x 200mm</li>
                  <li>• 무게: 50kg ~ 100kg</li>
                  <li>• 작동 온도: -10°C ~ 50°C</li>
                  <li>• 보호 등급: IP54</li>
                  <li>• 설치: 벽면 또는 바닥</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 적용 분야 */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-center mb-8 text-blue-600">
            적용 분야
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-md p-4 text-center">
              <h4 className="font-semibold text-gray-800">단독주택</h4>
              <p className="text-sm text-gray-600">태양광 연동</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 text-center">
              <h4 className="font-semibold text-gray-800">아파트</h4>
              <p className="text-sm text-gray-600">베란다 설치</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 text-center">
              <h4 className="font-semibold text-gray-800">상가</h4>
              <p className="text-sm text-gray-600">소형 상업시설</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 text-center">
              <h4 className="font-semibold text-gray-800">오피스</h4>
              <p className="text-sm text-gray-600">소규모 사무실</p>
            </div>
          </div>
        </section>

        {/* 문의 섹션 */}
        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-8 text-blue-600">
            문의 및 견적
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            가정용 HESS에 대한 자세한 정보나 견적을 원하시면 연락주세요.
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

export default HESS; 