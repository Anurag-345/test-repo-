import React from 'react';
import { useSelector } from 'react-redux';

export const Header = () => {

    const name = useSelector((x) => {
      return x.name;
    });

  return (
    <div>{name}</div>
  )
}
