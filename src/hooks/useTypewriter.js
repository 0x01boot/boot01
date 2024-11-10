// src/hooks/useTypewriter.js
import { useState, useEffect } from 'react';

const useTypewriter = (text, options = {}) => {
  const {
    delay = 50,
    onComplete = () => {}
  } = options;

  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let i = 0;
    setDisplayText('');
    setIsTyping(true);

    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayText(prev => prev + text.charAt(i));
        i++;
      } else {
        setIsTyping(false);
        clearInterval(interval);
        onComplete();
      }
    }, delay);

    return () => clearInterval(interval);
  }, [text, delay, onComplete]);

  return { text: displayText, isTyping };
};

export default useTypewriter;