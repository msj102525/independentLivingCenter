import Link from 'next/link';

export default function Header() {
  return (
    <header className="p-4 div-underline">
      <div className="text-bold py-4">
        <div className="container max-w-screen-xl mx-auto flex justify-between items-center">
          <h1 className='text-sm'>
            <Link className='text-sm' href="/">장애인 자립생활센터</Link>
          </h1>
          <nav className="group">
            <ul className="flex cursor-default">
              {/* 센터소개 */}
              <li className="relative w-44 text-center text-lg group">
                센터소개
                {/* <Link href="/about" className="hover:text-green-500">센터소개</Link> */}
                <ul className="absolute left-0 py-4 w-full bg-[rgba(255,255,255,0.7)] invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
                  <li className='text-lg py-2'><Link href="/about/greeting" className="text-lg hover:text-green-500">인사말</Link></li>
                  <li className='text-lg py-2'><Link href="/about/organization" className="text-lg hover:text-green-500">조직도</Link></li>
                  <li className='text-lg py-2'><Link href="/about/location" className="text-lg hover:text-green-500">오시는 길</Link></li>
                </ul>
              </li>

              {/* 사업소개 */}
              <li className="relative w-44 text-center text-lg group">
                사업소개
                {/* <Link href="/services" className="hover:text-green-500">사업소개</Link> */}
                <ul className="absolute left-0 py-4 w-full text-center bg-[rgba(255,255,255,0.7)] invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
                  <li className='text-lg py-2'><Link href="/services/advocacy" className="text-lg hover:text-green-500">권익옹호</Link></li>
                  <li className='text-lg py-2'><Link href="/services/counseling" className="text-lg hover:text-green-500">동료상담</Link></li>
                  <li className='text-lg py-2'><Link href="/services/ilp" className="text-lg hover:text-green-500">자립기술훈련 (ILP)</Link></li>
                </ul>
              </li>

              {/* 커뮤니티 */}
              <li className="relative w-44 text-center text-lg group">
                커뮤니티
                {/* <Link href="/community" className="hover:text-green-500">커뮤니티</Link> */}
                <ul className="absolute left-0 py-4 w-full text-center bg-[rgba(255,255,255,0.7)] invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
                  <li className='text-lg py-2'><Link href="/community/notice" className="text-lg hover:text-green-500">공지사항</Link></li>
                  <li className='text-lg py-2'><Link href="/community/news" className="text-lg hover:text-green-500">복지뉴스</Link></li>
                  <li className='text-lg py-2'><Link href="/community/resources" className="text-lg hover:text-green-500">자료실</Link></li>
                </ul>
              </li>

              {/* 후원&자원봉사 */}
              <li className='w-44 text-center text-lg'>
                <Link href="/support" className="text-lg hover:text-green-500">후원&자원봉사</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
