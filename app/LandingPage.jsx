import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function LandingPage() {
  const [emojis, setEmojis] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const id = Math.random().toString(36).substring(2);
      const newEmoji = {
        id,
        symbol: ['🔥', '💥', '⚡', '🎯', '🚀'][Math.floor(Math.random() * 5)],
        left: Math.random() * 100,
        top: 100,
      };
      setEmojis(prev => [...prev, newEmoji]);
      setTimeout(() => {
        setEmojis(prev => prev.filter(e => e.id !== id));
      }, 3000);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const audio = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');
    audio.loop = true;
    audio.volume = 0.2;
    audio.play();
    return () => audio.pause();
  }, []);

  return (
    <motion.div 
      className="min-h-screen relative flex flex-col items-center justify-center text-center p-8 animate-pulse overflow-hidden"
      animate={{ rotate: [0, 1, -1, 0] }}
      transition={{ repeat: Infinity, duration: 10 }}
      style={{ 
        background: 'linear-gradient(90deg, #ff0000, #00ff00, #0000ff, #ff0000)', 
        backgroundSize: '600% 600%', 
        animation: 'backgroundShift 8s ease infinite', 
        color: '#000',
        direction: 'rtl',
        border: '10px solid',
        borderImage: 'linear-gradient(45deg, #ff0, #f0f, #0ff, #ff0) 1',
        animationName: 'backgroundShift, borderFlash',
        animationDuration: '8s, 0.5s',
        animationIterationCount: 'infinite, infinite',
        animationTimingFunction: 'ease, steps(2)' 
      }}
    >
      <style>
        {`
          @keyframes backgroundShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          @keyframes borderFlash {
            0%, 100% { border-color: #ff0; }
            25% { border-color: #f0f; }
            50% { border-color: #0ff; }
            75% { border-color: #0f0; }
          }
          ::-webkit-scrollbar {
            width: 0px;
            background: transparent;
          }
        `}
      </style>

      {emojis.map(emoji => (
        <motion.div
          key={emoji.id}
          initial={{ top: '100%', left: `${emoji.left}%`, opacity: 1, rotate: 0 }}
          animate={{ top: '0%', opacity: 0, rotate: 360 }}
          transition={{ duration: 3 }}
          className="absolute text-4xl"
          style={{ left: `${emoji.left}%`, top: `${emoji.top}%`, position: 'absolute' }}
        >
          {emoji.symbol}
        </motion.div>
      ))}

      <motion.h1 
        className="text-6xl font-bold mb-4"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 5, -5, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        style={{ color: '#ff0000', textShadow: '2px 2px #00ff00' }}
      >
        Добро пожаловать на XPLAY.GG
      </motion.h1>

      <motion.p 
        className="text-2xl mb-6"
        animate={{ y: [0, -10, 0], opacity: [1, 0.5, 1] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        style={{ color: '#00f', backgroundColor: '#fff700', padding: '1rem', borderRadius: '1rem' }}
      >
        Наши сервера в CS2 — как швейцарские часы, только быстрее!
      </motion.p>

      <div className="grid grid-cols-2 gap-6">
        <div className="p-6 rounded-lg shadow-lg text-xl font-bold" style={{ backgroundColor: '#00ffcc', color: '#ff0080', border: '4px dashed #ff0' }}>
          <p>✅ Мгновенный отклик</p>
          <p>🚀 Пинг в минус уходит</p>
        </div>
        <div className="p-6 rounded-lg shadow-lg text-xl font-bold" style={{ backgroundColor: '#ff6600', color: '#00ffff', border: '4px dotted #0f0' }}>
          <p>🎯 Точные хедшоты сами летят</p>
          <p>🔥 Без лагов, даже если конец света</p>
        </div>
      </div>

      <motion.button 
        className="mt-10 px-8 py-4 rounded-xl text-2xl font-extrabold"
        whileHover={{ scale: 1.2, rotate: 10 }}
        whileTap={{ scale: 0.9 }}
        style={{ backgroundColor: '#ff00cc', color: '#00ff00', border: '3px solid #0000ff' }}
        onMouseEnter={() => new Audio('https://www.soundjay.com/button/beep-07.wav').play()}
      >
        Зайти на сервер
      </motion.button>
    </motion.div>
  );
}
