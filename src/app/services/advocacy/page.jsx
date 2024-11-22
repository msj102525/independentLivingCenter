export default function Advocacy() {
  return (
    <section id="services" className="py-12 text-gray-800">
      <div className="container max-w-screen-xl mx-auto px-4">
        {/* 상단 제목과 설명 */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">권익옹호</h2>
            <p className="mb-6">
              장애인 자립생활센터는 장애인의 자립생활과 사회참여를 지원하는 비영리 단체입니다.
            </p>
            <img
              src="/images/advocacy/advocacy0.jpg"
              alt="권익옹호 활동 이미지"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold mb-2">기본이념</h3>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li><strong>존엄성과 다양성 존중:</strong> 누구나 갖게 되는 당연한 권리이며 개인이 가진 정체성 및 특성으로 인해 구분되지 않는 권리입니다.</li>
              <li><strong>역량강화:</strong> 개인이나 조직의 능력을 발전시키고, 최대한 활용할 수 있도록 지원하는 과정입니다.</li>
              <li><strong>자기 결정권의 존중:</strong> 자기결정 능력을 가지고 있는 것이 아니라, 자신의 의지에 따라 주체적인 결정권을 행사할 수 있는 조건을 갖추는 것입니다.</li>
            </ul>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-2">권익옹호 실천원칙</h3>
          <ol className="list-decimal pl-5 space-y-2">
            <li>목적의 명료성</li>
            <li>독립성</li>
            <li>사람 우선</li>
            <li>역량강화</li>
            <li>동등한 기회</li>
            <li>접근 가능성</li>
            <li>책임성</li>
            <li>비밀보장</li>
            <li>이의제기</li>
          </ol>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-2">장애인에 대한 차별과 억압에 도전</h3>
          <p>
            권익옹호는 장애인 이용자가 부당한 차별이나 인권 침해 상황에서 적절한 대안을 모색하여, 사회 구성원으로 당당하게 살아갈 수 있도록 지원하는 활동입니다.
          </p>
        </div>

        {/* 기관 정보 */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-4">유용한 기관 및 연락처</h3>
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b text-left">기관명</th>
                <th className="py-2 px-4 border-b">홈페이지</th>
                <th className="py-2 px-4 border-b">연락처</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b">국가인권위원회</td>
                <td className="py-2 px-4 border-b">
                  <a href="https://www.humanrights.go.kr/" className="text-blue-600" target="_blank" rel="noopener noreferrer">https://www.humanrights.go.kr/</a>
                </td>
                <td className="py-2 px-4 border-b">1331</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">중앙 장애인권익옹호기관</td>
                <td className="py-2 px-4 border-b">
                  <a href="https://www.naapd.or.kr/" className="text-blue-600" target="_blank" rel="noopener noreferrer">https://www.naapd.or.kr/</a>
                </td>
                <td className="py-2 px-4 border-b">1644-8295</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">서울시 장애인권익옹호기관</td>
                <td className="py-2 px-4 border-b">
                  <a href="http://saapd.or.kr" className="text-blue-600" target="_blank" rel="noopener noreferrer">http://saapd.or.kr</a>
                </td>
                <td className="py-2 px-4 border-b">1644-8295</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}