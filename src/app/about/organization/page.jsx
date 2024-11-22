import React from 'react';

const OrganizationBox = ({ title, isMain = false }) => (
    <div className={`
    p-4 rounded-lg shadow-md text-center
    ${isMain ? 'bg-blue-500 text-white' : 'bg-white border border-gray-200'}
    transition-transform hover:scale-105 duration-200
  `}>
        {title}
    </div>
);

export default function Organization() {
    return (
        <section id="about" className="py-12">
            <div className="container max-w-screen-xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-6 text-center">조직도</h2>
                <p className="text-center mb-12 text-gray-600">
                    장애인 자립생활센터는 장애인의 자립생활과 사회참여를 지원하는 비영리 단체입니다.
                </p>

                <div className="max-w-4xl mx-auto">
                    <div className="grid gap-4">
                        {/* 센터장 */}
                        <div className="flex justify-center mb-8">
                            <div className="w-48">
                                <OrganizationBox title="센터장" isMain={true} />
                            </div>
                        </div>

                        {/* 운영위원회 */}
                        <div className="flex justify-center mb-8">
                            <div className="w-48">
                                <OrganizationBox title="운영위원회" />
                            </div>
                        </div>

                        {/* 사무국장 */}
                        <div className="flex justify-center mb-8">
                            <div className="w-48">
                                <OrganizationBox title="사무국장" />
                            </div>
                        </div>

                        {/* 팀 단위 */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                                <OrganizationBox title="권익옹호팀" />
                            </div>
                            <div>
                                <OrganizationBox title="자립생활팀" />
                            </div>
                            <div>
                                <OrganizationBox title="운영지원팀" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}