import React from 'react';

const Cell = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          리튬 배터리 셀 (Cell)
        </h1>
        <p className="text-lg text-center text-gray-600 mb-12">
          고품질 리튬 배터리 셀을 직접 구매하세요
        </p>

        {/* 제품 특징 */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-center mb-8 text-blue-600">
            제품 특징
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">고품질</h3>
              <p className="text-gray-600">A급 셀만 엄선하여 공급</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">다양한 용량</h3>
              <p className="text-gray-600">50Ah ~ 300Ah 다양한 용량</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">긴 수명</h3>
              <p className="text-gray-600">3000회 이상 충방전 수명</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">안전성</h3>
              <p className="text-gray-600">과충전, 과방전 보호</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">맞춤형</h3>
              <p className="text-gray-600">고객 요구사항에 맞춤 제작</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">기술 지원</h3>
              <p className="text-gray-600">셀 조립 및 설계 지원</p>
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
                  <li>• 용량: 50Ah ~ 300Ah</li>
                  <li>• 전압: 3.2V (LiFePO4)</li>
                  <li>• 충전 전압: 3.65V</li>
                  <li>• 방전 전압: 2.5V</li>
                  <li>• 수명: 3000회 이상</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">물리적 특성</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 크기: 맞춤형 제작</li>
                  <li>• 무게: 용량에 따라 변동</li>
                  <li>• 작동 온도: -20°C ~ 60°C</li>
                  <li>• 보호 등급: IP54</li>
                  <li>• 인증: KC, CE, UL</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 셀 타입 */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-center mb-8 text-blue-600">
            셀 타입
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-md p-4 text-center">
              <h4 className="font-semibold text-gray-800">원통형</h4>
              <p className="text-sm text-gray-600">18650, 21700 등</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 text-center">
              <h4 className="font-semibold text-gray-800">방형</h4>
              <p className="text-sm text-gray-600">Prismatic Cell</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 text-center">
              <h4 className="font-semibold text-gray-800">파우치</h4>
              <p className="text-sm text-gray-600">Pouch Cell</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 text-center">
              <h4 className="font-semibold text-gray-800">맞춤형</h4>
              <p className="text-sm text-gray-600">고객 요구사항</p>
            </div>
          </div>
        </section>

        {/* 문의 섹션 */}
        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-8 text-blue-600">
            문의 및 견적
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            리튬 배터리 셀에 대한 자세한 정보나 견적을 원하시면 연락주세요.
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

export default Cell; 