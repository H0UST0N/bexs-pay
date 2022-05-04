import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const BexsPay: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/home')
  }, [])

  return <></>
};

export default BexsPay;
