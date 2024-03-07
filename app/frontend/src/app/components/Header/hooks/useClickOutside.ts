'use client'

import { useEffect } from "react";

export const useClickOutside = (ref: React.RefObject<HTMLElement>, callback: () => void) => {
  const handleClick = (e: MouseEvent) => {
    const event = e.target as Node;
    if (ref.current && !ref.current.contains(event)) {
      callback();
    }
  };
  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
};