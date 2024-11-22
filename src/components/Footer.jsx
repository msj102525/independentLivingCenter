import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-6 border-t">
      <div className="container mx-auto px-4">
        {/* 상단 연락처 및 주소 */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-700">
              주소: 서울특별시 강남구 역삼동 123-45 장애인 자립생활센터
            </p>
            <p className="text-sm text-gray-700">
              전화: 02-1234-5678 | 팩스: 02-8765-4321
            </p>
            <p className="text-sm text-gray-700">
              이메일: support@example.com
            </p>
          </div>
          {/* SNS 및 외부 링크 */}
          <div className="flex space-x-4">
            <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
              Facebook
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
              Twitter
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
              Instagram
            </a>
          </div>
        </div>

        {/* 하단 저작권 및 정책 */}
        <div className="mt-6 border-t pt-4 text-center">
          <p className="text-xs text-gray-500">
            © 2024 장애인 자립생활센터. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6 mt-2">
            <a
              href="#"
              className="text-xs text-gray-500 hover:text-gray-900 underline"
            >
              이용약관
            </a>
            <a
              href="#"
              className="text-xs text-gray-500 hover:text-gray-900 underline"
            >
              개인정보처리방침
            </a>
            <a
              href="#"
              className="text-xs text-gray-500 hover:text-gray-900 underline"
            >
              이메일무단수집거부
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
