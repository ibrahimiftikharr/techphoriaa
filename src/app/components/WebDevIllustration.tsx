import { motion } from 'motion/react';

export function WebDevIllustration() {
  return (
    <div className="relative w-full h-full">
      <svg
        viewBox="0 0 600 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        {/* Desk/Table */}
        <motion.rect
          x="50"
          y="380"
          width="500"
          height="15"
          rx="7"
          fill="url(#desk-gradient)"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ transformOrigin: 'center' }}
        />

        {/* Monitor */}
        <motion.g
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Monitor Stand */}
          <rect x="280" y="350" width="40" height="30" rx="3" fill="#4a5568" />
          <rect x="260" y="375" width="80" height="8" rx="4" fill="#4a5568" />
          
          {/* Monitor Frame */}
          <rect x="150" y="150" width="300" height="200" rx="8" fill="#2d3748" />
          
          {/* Screen */}
          <rect x="165" y="165" width="270" height="170" rx="4" fill="#1a202c" />
          
          {/* Browser Window */}
          <g>
            {/* Browser Top Bar */}
            <rect x="165" y="165" width="270" height="25" rx="4" fill="url(#primary-gradient)" />
            <circle cx="180" cy="177.5" r="4" fill="#ff5f56" />
            <circle cx="195" cy="177.5" r="4" fill="#ffbd2e" />
            <circle cx="210" cy="177.5" r="4" fill="#27c93f" />
            
            {/* Address Bar */}
            <rect x="230" y="172" width="180" height="11" rx="5.5" fill="#2d3748" />
            
            {/* Code Editor Content */}
            <g>
              {/* Line Numbers */}
              <text x="175" y="210" fontSize="10" fill="#718096" fontFamily="monospace">1</text>
              <text x="175" y="225" fontSize="10" fill="#718096" fontFamily="monospace">2</text>
              <text x="175" y="240" fontSize="10" fill="#718096" fontFamily="monospace">3</text>
              <text x="175" y="255" fontSize="10" fill="#718096" fontFamily="monospace">4</text>
              <text x="175" y="270" fontSize="10" fill="#718096" fontFamily="monospace">5</text>
              <text x="175" y="285" fontSize="10" fill="#718096" fontFamily="monospace">6</text>
              <text x="175" y="300" fontSize="10" fill="#718096" fontFamily="monospace">7</text>
              <text x="175" y="315" fontSize="10" fill="#718096" fontFamily="monospace">8</text>
              
              {/* Code Lines with Syntax Highlighting */}
              <motion.text
                x="195"
                y="210"
                fontSize="10"
                fill="#00bcd4"
                fontFamily="monospace"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                {'<div className="app">'}
              </motion.text>
              <motion.text
                x="205"
                y="225"
                fontSize="10"
                fill="#f093fb"
                fontFamily="monospace"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                {'<Header />'}
              </motion.text>
              <motion.text
                x="205"
                y="240"
                fontSize="10"
                fill="#43e97b"
                fontFamily="monospace"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.0 }}
              >
                {'<main>'}
              </motion.text>
              <motion.text
                x="215"
                y="255"
                fontSize="10"
                fill="#fbbf24"
                fontFamily="monospace"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
              >
                {'<h1>Welcome</h1>'}
              </motion.text>
              <motion.text
                x="215"
                y="270"
                fontSize="10"
                fill="#667eea"
                fontFamily="monospace"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                {'<Button />'}
              </motion.text>
              <motion.text
                x="205"
                y="285"
                fontSize="10"
                fill="#43e97b"
                fontFamily="monospace"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3 }}
              >
                {'</main>'}
              </motion.text>
              <motion.text
                x="205"
                y="300"
                fontSize="10"
                fill="#f093fb"
                fontFamily="monospace"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
              >
                {'<Footer />'}
              </motion.text>
              <motion.text
                x="195"
                y="315"
                fontSize="10"
                fill="#00bcd4"
                fontFamily="monospace"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
              >
                {'</div>'}
              </motion.text>
            </g>
          </g>
        </motion.g>

        {/* Coffee Cup */}
        <motion.g
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.6 }}
        >
          <ellipse cx="480" cy="365" rx="25" ry="8" fill="#4a5568" opacity="0.3" />
          <rect x="460" y="330" width="40" height="35" rx="5" fill="url(#coffee-gradient)" />
          <ellipse cx="480" cy="330" rx="20" ry="6" fill="#2d3748" />
          <path d="M 500 340 Q 510 340 510 350 Q 510 360 500 360" stroke="#667eea" strokeWidth="3" fill="none" />
          
          {/* Steam */}
          <motion.path
            d="M 475 320 Q 473 310 475 300"
            stroke="#cbd5e0"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 0.6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.path
            d="M 485 320 Q 487 310 485 300"
            stroke="#cbd5e0"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 0.6, 0] }}
            transition={{ duration: 2, delay: 0.3, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.g>

        {/* Notebook */}
        <motion.g
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.8 }}
        >
          <rect x="80" y="320" width="80" height="60" rx="4" fill="#f7fafc" stroke="#cbd5e0" strokeWidth="2" />
          <line x1="85" y1="335" x2="150" y2="335" stroke="#e2e8f0" strokeWidth="1.5" />
          <line x1="85" y1="345" x2="145" y2="345" stroke="#e2e8f0" strokeWidth="1.5" />
          <line x1="85" y1="355" x2="155" y2="355" stroke="#e2e8f0" strokeWidth="1.5" />
          <line x1="85" y1="365" x2="140" y2="365" stroke="#e2e8f0" strokeWidth="1.5" />
          
          {/* Pen */}
          <rect x="140" y="315" width="8" height="45" rx="1" fill="url(#pen-gradient)" transform="rotate(25 144 337)" />
          <circle cx="148" cy="310" r="3" fill="#667eea" />
        </motion.g>

        {/* Floating Code Symbols */}
        <motion.g
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 0.3 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <motion.text
            x="100"
            y="100"
            fontSize="40"
            fill="url(#primary-gradient)"
            fontFamily="monospace"
            fontWeight="bold"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            {'</>'}
          </motion.text>
          <motion.text
            x="460"
            y="120"
            fontSize="35"
            fill="url(#secondary-gradient)"
            fontFamily="monospace"
            fontWeight="bold"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3.5, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
          >
            {'{ }'}
          </motion.text>
        </motion.g>

        {/* Technology Icons */}
        <motion.g
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 2.2 }}
        >
          {/* React Icon */}
          <circle cx="520" cy="250" r="25" fill="url(#react-gradient)" opacity="0.9" />
          <text x="520" y="260" textAnchor="middle" fontSize="20" fill="white">⚛️</text>
        </motion.g>

        {/* Gradient Definitions */}
        <defs>
          <linearGradient id="primary-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#667eea" />
            <stop offset="100%" stopColor="#764ba2" />
          </linearGradient>
          <linearGradient id="secondary-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00bcd4" />
            <stop offset="100%" stopColor="#2196f3" />
          </linearGradient>
          <linearGradient id="desk-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#cbd5e0" />
            <stop offset="50%" stopColor="#e2e8f0" />
            <stop offset="100%" stopColor="#cbd5e0" />
          </linearGradient>
          <linearGradient id="coffee-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f093fb" />
            <stop offset="100%" stopColor="#f5576c" />
          </linearGradient>
          <linearGradient id="pen-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#667eea" />
            <stop offset="100%" stopColor="#764ba2" />
          </linearGradient>
          <linearGradient id="react-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00bcd4" />
            <stop offset="100%" stopColor="#2196f3" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
