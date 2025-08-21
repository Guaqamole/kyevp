import React from 'react';

const Forklift = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          지게차용 리튬 배터리
        </h1>
        <p className="text-lg text-center text-gray-600 mb-12">
          산업용 지게차에 최적화된 고출력 리튬 배터리
        </p>

        {/* 제품 특징 */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-center mb-8 text-blue-600">
            제품 특징
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">고출력</h3>
              <p className="text-gray-600">지게차 작업에 필요한 고출력 제공</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">24시간 운영</h3>
              <p className="text-gray-600">교대 근무에도 안정적인 성능</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">빠른 충전</h3>
              <p className="text-gray-600">점심시간 충전으로 하루 사용 가능</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">안전성</h3>
              <p className="text-gray-600">산업용 안전 표준 준수</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">경제성</h3>
              <p className="text-gray-600">운영 비용 절감 효과</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">맞춤형</h3>
              <p className="text-gray-600">각 지게차 모델에 맞춤 제작</p>
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
                  <li>• 용량: 48V 200Ah ~ 600Ah</li>
                  <li>• 전압: 48V, 80V</li>
                  <li>• 충전 시간: 2-4시간</li>
                  <li>• 사용 시간: 8-12시간</li>
                  <li>• 수명: 3000회 충방전</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">물리적 특성</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 크기: 맞춤형 제작</li>
                  <li>• 무게: 기존 대비 30% 경량화</li>
                  <li>• 작동 온도: -20°C ~ 60°C</li>
                  <li>• 보호 등급: IP67</li>
                  <li>• 인증: KC, CE, UL, ISO</li>
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
              <h4 className="font-semibold text-gray-800">물류창고</h4>
              <p className="text-sm text-gray-600">24시간 운영 창고</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 text-center">
              <h4 className="font-semibold text-gray-800">제조공장</h4>
              <p className="text-sm text-gray-600">생산라인 운반</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 text-center">
              <h4 className="font-semibold text-gray-800">항만</h4>
              <p className="text-sm text-gray-600">컨테이너 운반</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 text-center">
              <h4 className="font-semibold text-gray-800">건설현장</h4>
              <p className="text-sm text-gray-600">자재 운반</p>
            </div>
          </div>
        </section>

        {/* 문의 섹션 */}
        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-8 text-blue-600">
            문의 및 견적
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            지게차용 리튬 배터리에 대한 자세한 정보나 견적을 원하시면 연락주세요.
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

export default Forklift; 