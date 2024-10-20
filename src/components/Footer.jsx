export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white p-4 text-center">
        <div className="container max-w-screen-xl mx-auto">
          <p>&copy; 2024 장애인 자립생활센터. All rights reserved.</p>
          <ul className="flex justify-center space-x-4 mt-2">
            <li><a href="#" className="hover:underline">이용약관</a></li>
            <li><a href="#" className="hover:underline">개인정보처리방침</a></li>
            <li><a href="#" className="hover:underline">이메일무단수집거부</a></li>
          </ul>
        </div>
      </footer>
    );
  }
  