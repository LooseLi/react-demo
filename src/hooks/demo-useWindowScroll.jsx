import {useState} from 'react';

function useWindowScroll() {
  const [y, sety] = useState(0);
  window.addEventListener('scroll', () => {
    const top = document.documentElement.scrollTop;
    sety(top);
  });
  return [y];
}

export default useWindowScroll;
