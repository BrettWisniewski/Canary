import React, { useEffect, useState } from 'react';

const UserAgent = () => {
  const [userAgent, setUserAgent] = useState('');
  useEffect(() => {
    const userAgentString = navigator.userAgent;
    setUserAgent(userAgentString);
  }, []);

  return (
      <>{userAgent}</>
  );
};

export default UserAgent;
