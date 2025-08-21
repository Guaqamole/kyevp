import React from 'react';

const Charger = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          리튬 배터리 충전기
        </h1>
        <p className="text-lg text-center text-gray-600 mb-12">
          리튬 배터리에 최적화된 고성능 충전기
        </p>

        {/* 제품 특징 */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-center mb-8 text-blue-600">
            제품 특징
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">리튬 전용</h3>
              <p className="text-gray-600">리튬 배터리 특성에 최적화</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">스마트 충전</h3>
              <p className="text-gray-600">CC-CV 충전 알고리즘</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">다양한 출력</h3>
              <p className="text-gray-600">12V, 24V, 48V 등 다양한 전압</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">안전 보호</h3>
              <p className="text-gray-600">과충전, 단락, 과열 보호</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">LCD 디스플레이</h3>
              <p className="text-gray-600">충전 상태 실시간 확인</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">자동 정지</h3>
              <p className="text-gray-600">충전 완료 시 자동 정지</p>
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
                  <li>• 출력 전압: 12V, 24V, 48V</li>
                  <li>• 충전 전류: 5A ~ 50A</li>
                  <li>• 입력 전압: AC 220V</li>
                  <li>• 효율: 90% 이상</li>
                  <li>• 보호 기능: 과충전, 단락, 과열</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">물리적 특성</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 크기: 200 x 150 x 80mm</li>
                  <li>• 무게: 1kg ~ 3kg</li>
                  <li>• 작동 온도: -10°C ~ 50°C</li>
                  <li>• 보호 등급: IP54</li>
                  <li>• 인증: KC, CE, UL</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 충전기 타입 */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-center mb-8 text-blue-600">
            충전기 타입
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-md p-4 text-center">
              <h4 className="font-semibold text-gray-800">일반 충전기</h4>
              <p className="text-sm text-gray-600">기본 충전 기능</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 text-center">
              <h4 className="font-semibold text-gray-800">스마트 충전기</h4>
              <p className="text-sm text-gray-600">LCD 디스플레이</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 text-center">
              <h4 className="font-semibold text-gray-800">고출력 충전기</h4>
              <p className="text-sm text-gray-600">빠른 충전</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 text-center">
              <h4 className="font-semibold text-gray-800">맞춤형</h4>
              <p className="text-sm text-gray-600">특수 요구사항</p>
            </div>
          </div>
        </section>

        {/* 문의 섹션 */}
        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-8 text-blue-600">
            문의 및 견적
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            리튬 배터리 충전기에 대한 자세한 정보나 견적을 원하시면 연락주세요.
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

export default Charger; 