"use client"

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';

const Slider = dynamic(() => import('../components/Slider'), { ssr: false });

const slides = [
  {
    id: 1,
    src: '/images/mainSlider/main1.jpg',
    alt: 'Image 1',
    text: '사람중심장애인자립생활센터',
    description: '모두가 존중받는 사회를 만들어갑니다'
  },
  {
    id: 2,
    src: '/images/mainSlider/main2.jpg',
    alt: 'Image 2',
    text: '모두가 함께하는 사회',
    description: '차별없는 세상을 꿈꿉니다'
  },
  {
    id: 3,
    src: '/images/mainSlider/main3.jpg',
    alt: 'Image 3',
    text: '장애인의 권리를 존중합니다',
    description: '인권존중 사회를 실현합니다'
  },
  {
    id: 4,
    src: '/images/mainSlider/main4.jpg',
    alt: 'Image 4',
    text: '함께 만드는 더 나은 미래',
    description: '모두의 미래를 생각합니다'
  }
];

const programs = [
  {
    title: '자립생활지원',
    description: '개인별 맞춤 자립생활 프로그램을 제공합니다',
    stats: '연간 500명 지원'
  },
  {
    title: '권익옹호사업',
    description: '장애인의 권리와 이익을 보호합니다',
    stats: '상시 상담 가능'
  },
  {
    title: '교육프로그램',
    description: '다양한 교육과 훈련을 제공합니다',
    stats: '월 4회 정기교육'
  }
];

const NewsSection = () => {
  const news = [
    {
      date: '2024.03.15',
      title: '2024년 상반기 자립생활 프로그램 참가자 모집',
      category: '공지사항'
    },
    {
      date: '2024.03.10',
      title: '장애인 권익옹호 상담사 양성교육 개최',
      category: '교육'
    },
    {
      date: '2024.03.05',
      title: '제12회 장애인 자립생활 컨퍼런스 후기',
      category: '센터소식'
    }
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold">새소식</h3>
        <Link href="/community/notice">
          <button className="px-4 py-2 text-sm border rounded hover:bg-gray-50">
            더보기
          </button>
        </Link>
      </div>
      <div className="space-y-4">
        {news.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 hover:bg-gray-50 rounded cursor-pointer transition-colors"
          >
            <div>
              <span className="text-gray-500 text-sm">{item.date}</span>
              <h4 className="font-medium">{item.title}</h4>
            </div>
            <span className="text-blue-500 text-sm">{item.category}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="relative h-full w-full overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute w-full h-full transition-opacity duration-1000 ${currentSlide === index ? 'opacity-100' : 'opacity-0'
                }`}
            >
              <div className="relative w-full h-full">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  layout="fill"
                  objectFit="cover"
                  priority
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-center">
                  <div className="text-white">
                    <h1 className="text-5xl font-bold mb-4">{slide.text}</h1>
                    <p className="text-xl">{slide.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-white' : 'bg-white/50'
                }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">주요 프로그램</h2>
            <p className="text-gray-600">더 나은 미래를 위한 우리의 노력</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program) => (
              <div
                key={program.title}
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <p className="text-sm text-blue-500">{program.stats}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News & Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <NewsSection />
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="text-blue-500">📞</span>
                <span>02-1234-5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-blue-500">✉️</span>
                <span>info@example.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-blue-500">📍</span>
                <span>서울특별시 OO구 OO로 123</span>
              </div>
            </div>
            <button className="w-full mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">
              문의하기
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}