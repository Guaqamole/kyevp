import React from 'react';

const Support = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          A/S 센터
        </h1>
        <p className="text-lg text-center text-gray-600 mb-12">
          전문적인 기술 지원과 A/S 서비스를 제공합니다
        </p>

        {/* 서비스 특징 */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-center mb-8 text-blue-600">
            서비스 특징
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">전문 기술진</h3>
              <p className="text-gray-600">리튬 배터리 전문 엔지니어</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">빠른 대응</h3>
              <p className="text-gray-600">24시간 내 현장 방문</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">정기 점검</h3>
              <p className="text-gray-600">무료 정기 점검 서비스</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">부품 교체</h3>
              <p className="text-gray-600">정품 부품으로 교체</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">원격 지원</h3>
              <p className="text-gray-600">원격 진단 및 기술 지원</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">보증 서비스</h3>
              <p className="text-gray-600">제품 보증 기간 내 무료 수리</p>
            </div>
          </div>
        </section>

        {/* A/S 서비스 */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-center mb-8 text-blue-600">
            A/S 서비스
          </h2>
          <div className="bg-white rounded-lg shadow-md p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">정기 점검</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 배터리 상태 점검</li>
                  <li>• 성능 테스트</li>
                  <li>• 연결부 확인</li>
                  <li>• 청소 및 정리</li>
                  <li>• 점검 보고서 제공</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">수리 서비스</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 고장 진단</li>
                  <li>• 부품 교체</li>
                  <li>• 성능 복원</li>
                  <li>• 안전성 검증</li>
                  <li>• 수리 완료 보고</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 연락처 정보 */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-center mb-8 text-blue-600">
            연락처 정보
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">본사 A/S 센터</h3>
              <div className="space-y-2 text-gray-600">
                <p><strong>주소:</strong> 서울시 강남구 테헤란로 123</p>
                <p><strong>전화:</strong> 02-1234-5678</p>
                <p><strong>팩스:</strong> 02-1234-5679</p>
                <p><strong>이메일:</strong> as@batterycompany.com</p>
                <p><strong>운영시간:</strong> 평일 09:00-18:00</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">긴급 A/S</h3>
              <div className="space-y-2 text-gray-600">
                <p><strong>긴급 전화:</strong> 02-1234-9999</p>
                <p><strong>운영시간:</strong> 24시간</p>
                <p><strong>응답시간:</strong> 2시간 내</p>
                <p><strong>서비스:</strong> 현장 방문 수리</p>
                <p><strong>지역:</strong> 수도권 전 지역</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-center mb-8 text-blue-600">
            자주 묻는 질문
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Q: A/S 접수는 어떻게 하나요?</h3>
              <p className="text-gray-600">A: 전화(02-1234-5678) 또는 이메일(as@batterycompany.com)로 접수 가능합니다.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Q: 보증 기간은 얼마나 되나요?</h3>
              <p className="text-gray-600">A: 제품별로 다르며, 일반적으로 1-3년 보증을 제공합니다.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Q: 정기 점검은 언제 받을 수 있나요?</h3>
              <p className="text-gray-600">A: 구매 후 6개월마다 무료 정기 점검을 제공합니다.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Q: 부품 교체 비용은 얼마인가요?</h3>
              <p className="text-gray-600">A: 보증 기간 내에는 무료이며, 기간 외에는 부품 비용만 청구됩니다.</p>
            </div>
          </div>
        </section>

        {/* 문의 섹션 */}
        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-8 text-blue-600">
            A/S 문의
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            A/S 서비스에 대한 문의사항이 있으시면 언제든 연락주세요.
          </p>
          <div className="bg-blue-50 rounded-lg p-6 max-w-2xl mx-auto">
            <p className="text-gray-700 mb-4">
              <strong>일반 A/S:</strong> 02-1234-5678
            </p>
            <p className="text-gray-700 mb-4">
              <strong>긴급 A/S:</strong> 02-1234-9999
            </p>
            <p className="text-gray-700">
              <strong>이메일:</strong> as@batterycompany.com
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Support; 