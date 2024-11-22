export default function Counseling() {
  return (
    <section id="services" className="py-12 text-gray-800">
      <div className="container max-w-screen-xl mx-auto px-4">
        {/* 상단 제목과 이미지 섹션 */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">동료상담</h2>
            <p className="mb-6">
              장애인을 가진 사람들이 서로 대등한 입장이 되어, 서로의 이야기를 경청하고 이해하며 지지함으로써 장애 당사자의 역량을 높여줍니다.
            </p>
            <img 
              src="/images/counseling/counseling0.jpg"
              alt="동료상담 활동 이미지" 
              className="w-full rounded-lg shadow-lg mb-6"
            />
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <p className="mb-6 text-lg">
              장애로 인해 겪게 되는 많은 어려움을 실제로 경험해 본 동료 상담가들이 함께 공감하고 지지합니다.
            </p>
            
            <div>
              <h3 className="text-2xl font-semibold mb-4">상담 유형</h3>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-2">개별동료상담</h4>
                  <p className="text-gray-600">1:1로 진행되는 맞춤형 상담 서비스</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-2">집단동료상담</h4>
                  <p className="text-gray-600">그룹으로 진행되는 상담 프로그램</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* 추가적인 상담 관련 정보 섹션 */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="p-6 bg-blue-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">상담 시간</h3>
            <p>평일 09:00 - 18:00</p>
            <p className="text-sm text-gray-600 mt-2">점심시간 12:00 - 13:00</p>
          </div>
          <div className="p-6 bg-green-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">예약 방법</h3>
            <p>전화 또는 방문 예약</p>
            <p className="text-sm text-gray-600 mt-2">상담은 예약제로 운영됩니다</p>
          </div>
          <div className="p-6 bg-yellow-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">문의 연락처</h3>
            <p className="text-lg font-semibold">02-1234-5678</p>
            <p className="text-sm text-gray-600 mt-2">이메일: counsel@center.org</p>
          </div>
        </div>
      </div>
    </section>
  );
}