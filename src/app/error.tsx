// src/app/error.tsx
'use client';

import { useEffect } from 'react';

export default function ErrorPage() {
  useEffect(() => {
  }, []);

  return (
    <div>
      <h1>문제가 발생했습니다.</h1>
      <p>죄송합니다, 페이지를 로드하는 동안 문제가 발생했습니다.</p>
    </div>
  );
}
