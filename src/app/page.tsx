import dynamic from 'next/dynamic';
import React from 'react';

const Slider = dynamic(() => import('../components/Slider'), { ssr: false });

const slides = [
  { id: 1, src: '/images/mainSlider/main1.jpg', alt: 'Image 1', text: '사람중심장애인자립생활센터' },
  { id: 2, src: '/images/mainSlider/main2.jpg', alt: 'Image 2', text: '모두가 함께하는 사회' },
  { id: 3, src: '/images/mainSlider/main3.jpg', alt: 'Image 3', text: '장애인의 권리를 존중합니다' },
  { id: 4, src: '/images/mainSlider/main4.jpg', alt: 'Image 4', text: '함께 만드는 더 나은 미래' },
];

export default function Home() {
  return (
    <main className='w-full'>
      <section id="hero1" className="py-12">
        <div className="w-full text-center">
          <Slider slides={slides} autoPlayDelay={5000} />
        </div>
      </section>
      <section id="hero2" className="py-12 text-center">
        <div className="container max-w-screen-xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">함께 만드는 자립생활</h2>
          <p>우리 센터는 장애인의 자립과 사회참여를 지원합니다.</p>
        </div>
      </section>

      {/* 기관 정보 섹션 추가 */}
      {/* <section id="partners" className="py-12">
        <div className="container max-w-screen-xl mx-auto border">
          <h3 className="text-2xl font-bold mb-4">기관 정보</h3>
          <div className="main-partner">
            <div className="row">
              <div className="col-sm-2 title">
                <h3>Family Site</h3>
              </div>
              <div className="col-sm-10">
                <ul className="flex justify-between">
                  <li className="">
                    <a href="https://www.humanrights.go.kr/" target="_blank" rel="noopener noreferrer">
                      <div className="w-48 h-16">
                        <img src="/images/mainSlider/main1.jpg" alt="국가인권위원회" className="block w-full h-auto" />
                      </div>
                    </a>
                    <p>국가인권위원회</p>
                    <p>연락처: 1331</p>
                  </li>
                  <li className="">
                    <a href="https://www.naapd.or.kr/" target="_blank" rel="noopener noreferrer">
                      <div className="w-48 h-16">
                        <img src="/images/mainSlider/main1.jpg" alt="중앙 장애인권익옹호기관" className="block w-full h-auto" />
                      </div>
                    </a>
                    <p>중앙 장애인권익옹호기관</p>
                    <p>연락처: 1644-8295</p>
                  </li>
                  <li>
                    <a href="http://saapd.or.kr" target="_blank" rel="noopener noreferrer">
                      <div className="w-48 h-16">
                        <img src="/images/mainSlider/main1.jpg" alt="서울시 장애인권익옹호기관" className="block w-full h-auto" />
                      </div>
                    </a>
                    <p>서울시 장애인권익옹호기관</p>
                    <p>연락처: 1644-8295</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </main>
  );
}
