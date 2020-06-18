import { useEffect } from 'react';

const useOutsideClick = (ref, callback) => {
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (callback && ref && ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [ref, callback]);
};

export default useOutsideClick;
