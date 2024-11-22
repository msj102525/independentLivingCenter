export default function Ilp() {
  return (
    <section id="services" className="py-12 text-gray-800">
      <div className="container max-w-screen-xl mx-auto px-4">
        {/* 상단 제목과 이미지 섹션 */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">자립기술훈련(ILP)</h2>
            <p className="mb-6">
              장애인이 주도적으로 참여할 수 있는 프로그램을 지원하여 장애인의 자립생활 의지를 높이고 자립할 수 있도록 돕습니다.
              장애인 스스로 삶의 주체라는 자존감을 높이는 목적으로 진행하는 사업입니다.
            </p>
            <img 
              src="/images/ilp/ilp0.jpg"
              alt="자립생활 프로그램 활동 이미지" 
              className="w-full rounded-lg shadow-lg mb-6"
            />
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold mb-4">프로그램 목표</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                자립생활에 필요한 실용적인 기술 습득
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                일상생활 관리 능력 향상
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                사회참여 기회 확대
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                자기결정권 강화
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                지역사회 참여 활성화
              </li>
            </ul>
          </div>
        </div>

        {/* 주요 프로그램 설명 */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-2xl font-semibold mb-4">개인별 자립지원(ILS)</h3>
            <p className="mb-4">개인의 필요와 상황에 맞춘 1:1 맞춤형 자립지원 프로그램입니다.</p>
            <ul className="space-y-2 text-gray-600">
              <li>• 일상생활 기술 훈련</li>
              <li>• 금전관리 교육</li>
              <li>• 건강관리 지원</li>
              <li>• 의사소통 기술 향상</li>
              <li>• 지역사회 이용 방법 교육</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-2xl font-semibold mb-4">장애인 자조모임</h3>
            <p className="mb-4">동료들과 함께하는 그룹 활동을 통해 사회성을 기르고 자립을 위한 동기를 강화합니다.</p>
            <ul className="space-y-2 text-gray-600">
              <li>• 문화여가 활동</li>
              <li>• 동료지지 모임</li>
              <li>• 자립생활 경험 나누기</li>
              <li>• 지역사회 탐방</li>
              <li>• 취미활동 그룹</li>
            </ul>
          </div>
        </div>

        {/* 신청 안내 */}
        <div className="bg-blue-50 p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-6">프로그램 신청 안내</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold mb-2">신청 대상</h4>
              <p className="text-gray-600">만 18세 이상 등록 장애인</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold mb-2">신청 방법</h4>
              <p className="text-gray-600">전화 또는 방문 신청</p>
              <p className="text-sm text-gray-500 mt-2">담당자와 상담 후 결정</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold mb-2">문의</h4>
              <p className="text-gray-600">02-1234-5678</p>
              <p className="text-sm text-gray-500 mt-2">평일 09:00 - 18:00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}