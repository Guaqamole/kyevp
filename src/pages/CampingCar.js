import React from 'react';

const CampingCar = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          캠핑카용 리튬 배터리
        </h1>
        <p className="text-lg text-center text-gray-600 mb-12">
          캠핑카에 최적화된 고성능 리튬 배터리 시스템
        </p>

        {/* 제품 특징 */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-center mb-8 text-blue-600">
            제품 특징
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">캠핑카 전용</h3>
              <p className="text-gray-600">캠핑카 공간에 최적화된 설계</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">고용량</h3>
              <p className="text-gray-600">장거리 여행에 충분한 용량</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">다양한 출력</h3>
              <p className="text-gray-600">12V, 24V, 220V 출력 지원</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">충전 시스템</h3>
              <p className="text-gray-600">엔진 충전, 태양광 충전 지원</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">안전성</h3>
              <p className="text-gray-600">진동, 충격에 강한 설계</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">스마트 모니터링</h3>
              <p className="text-gray-600">배터리 상태 실시간 확인</p>
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
                  <li>• 용량: 100Ah ~ 400Ah</li>
                  <li>• 전압: 12V, 24V</li>
                  <li>• 충전 방식: 엔진, 태양광, 외부</li>
                  <li>• 사용 시간: 2-7일</li>
                  <li>• 수명: 3000회 충방전</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">물리적 특성</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 크기: 맞춤형 제작</li>
                  <li>• 무게: 기존 대비 40% 경량화</li>
                  <li>• 작동 온도: -20°C ~ 60°C</li>
                  <li>• 보호 등급: IP65</li>
                  <li>• 진동 저항: 5G</li>
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
              <h4 className="font-semibold text-gray-800">캠핑카</h4>
              <p className="text-sm text-gray-600">레저용 캠핑카</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 text-center">
              <h4 className="font-semibold text-gray-800">카라반</h4>
              <p className="text-sm text-gray-600">견인형 캠핑카</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 text-center">
              <h4 className="font-semibold text-gray-800">모터홈</h4>
              <p className="text-sm text-gray-600">대형 캠핑카</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 text-center">
              <h4 className="font-semibold text-gray-800">상업용</h4>
              <p className="text-sm text-gray-600">이동식 상점</p>
            </div>
          </div>
        </section>

        {/* 문의 섹션 */}
        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-8 text-blue-600">
            문의 및 견적
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            캠핑카용 리튬 배터리에 대한 자세한 정보나 견적을 원하시면 연락주세요.
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

export default CampingCar; 