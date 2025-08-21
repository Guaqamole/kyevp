import React from 'react';

const PowerBank = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          파워뱅크 (Portable Power Bank)
        </h1>
        <p className="text-lg text-center text-gray-600 mb-12">
         휴대용 전원 공급 장치로 언제 어디서나 전력을 사용하세요
        </p>

        {/* 제품 특징 */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-center mb-8 text-blue-600">
            제품 특징
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">휴대성</h3>
              <p className="text-gray-600">가볍고 휴대하기 편한 설계</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">고용량</h3>
              <p className="text-gray-600">대용량 배터리로 장시간 사용</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">다양한 출력</h3>
              <p className="text-gray-600">DC, AC, USB 등 다양한 출력</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">빠른 충전</h3>
              <p className="text-gray-600">고속 충전 지원</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">안전성</h3>
              <p className="text-gray-600">과충전, 과방전 보호</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">다양한 용도</h3>
              <p className="text-gray-600">캠핑, 차량, 비상용 등</p>
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
                  <li>• 용량: 500Wh ~ 2000Wh</li>
                  <li>• 전압: 12V, 24V, 48V</li>
                  <li>• AC 출력: 220V, 110V</li>
                  <li>• DC 출력: 12V, 24V</li>
                  <li>• USB 출력: QC3.0, PD</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">물리적 특성</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 크기: 300 x 200 x 150mm</li>
                  <li>• 무게: 5kg ~ 20kg</li>
                  <li>• 작동 온도: -10°C ~ 50°C</li>
                  <li>• 보호 등급: IP54</li>
                  <li>• 충전 시간: 4-8시간</li>
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
              <h4 className="font-semibold text-gray-800">캠핑</h4>
              <p className="text-sm text-gray-600">야외 전력 공급</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 text-center">
              <h4 className="font-semibold text-gray-800">차량</h4>
              <p className="text-sm text-gray-600">카캠핑, 차량용</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 text-center">
              <h4 className="font-semibold text-gray-800">비상용</h4>
              <p className="text-sm text-gray-600">정전 시 비상 전력</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 text-center">
              <h4 className="font-semibold text-gray-800">업무용</h4>
              <p className="text-sm text-gray-600">현장 작업용</p>
            </div>
          </div>
        </section>

        {/* 문의 섹션 */}
        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-8 text-blue-600">
            문의 및 견적
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            파워뱅크에 대한 자세한 정보나 견적을 원하시면 연락주세요.
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

export default PowerBank; 