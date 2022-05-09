import React from 'react';
import NextHead from 'next/head';

const Head: React.FC<{ title: string }> = ({ title }) => (
  <NextHead>
    <title>{title}</title>
  </NextHead>
);

export default Head;
