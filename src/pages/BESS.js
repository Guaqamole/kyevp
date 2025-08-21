import React from 'react';

const BESS = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          산업용 BESS (Battery Energy Storage System)
        </h1>
        <p className="text-lg text-center text-gray-600 mb-12">
          대용량 에너지 저장 시스템으로 안정적인 전력 공급을 보장합니다
        </p>

        {/* 제품 특징 */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-center mb-8 text-blue-600">
            제품 특징
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">대용량 저장</h3>
              <p className="text-gray-600">수백 kWh ~ 수 MWh 용량</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">피크 부하 관리</h3>
              <p className="text-gray-600">전력 피크 시 부하 분산</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">재생에너지 연동</h3>
              <p className="text-gray-600">태양광, 풍력 발전 연동</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">UPS 기능</h3>
              <p className="text-gray-600">비상 전력 공급 시스템</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">스마트 제어</h3>
              <p className="text-gray-600">AI 기반 최적화 제어</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">원격 모니터링</h3>
              <p className="text-gray-600">실시간 상태 모니터링</p>
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
                  <li>• 용량: 100kWh ~ 10MWh</li>
                  <li>• 전압: 400V ~ 800V</li>
                  <li>• 출력: 50kW ~ 5MW</li>
                  <li>• 효율: 95% 이상</li>
                  <li>• 수명: 10년 이상</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">시스템 구성</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 리튬 배터리 팩</li>
                  <li>• BMS (배터리 관리 시스템)</li>
                  <li>• PCS (전력 변환 시스템)</li>
                  <li>• EMS (에너지 관리 시스템)</li>
                  <li>• 냉각 시스템</li>
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
              <h4 className="font-semibold text-gray-800">제조공장</h4>
              <p className="text-sm text-gray-600">전력 비용 절감</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 text-center">
              <h4 className="font-semibold text-gray-800">데이터센터</h4>
              <p className="text-sm text-gray-600">UPS 및 백업 전력</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 text-center">
              <h4 className="font-semibold text-gray-800">재생에너지</h4>
              <p className="text-sm text-gray-600">태양광/풍력 연동</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 text-center">
              <h4 className="font-semibold text-gray-800">상업시설</h4>
              <p className="text-sm text-gray-600">쇼핑몰, 호텔 등</p>
            </div>
          </div>
        </section>

        {/* 문의 섹션 */}
        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-8 text-blue-600">
            문의 및 견적
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            산업용 BESS에 대한 자세한 정보나 견적을 원하시면 연락주세요.
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

export default BESS; 