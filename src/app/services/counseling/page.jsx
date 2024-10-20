export default function Counseling() {
  return (
    <section id="services" className="py-12 text-gray-800">
      <div className="container max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">동료상담</h2>
        <p className="mb-6">
          장애인을 가진 사람들이 서로 대등한 입장이 되어, 서로의 이야기를 경청하고 이해하며 지지함으로써 장애 당사자의 역량을 높여줍니다.
        </p>
        <p className="mb-4">
          장애로 인해 겪게 되는 많은 어려움을 실제로 경험해 본 동료 상담가들이 함께 공감하고 지지합니다.
        </p>
        
        <div className="mt-6">
          <h3 className="text-2xl font-semibold mb-2">상담 유형</h3>
          <ul className="list-disc pl-5">
            <li className="mb-2">개별동료상담</li>
            <li>집단동료상담</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
