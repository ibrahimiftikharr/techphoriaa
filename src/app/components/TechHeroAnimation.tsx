import { motion } from 'motion/react';

export function TechHeroAnimation() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg
        viewBox="0 0 800 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        {/* Background Grid */}
        <g opacity="0.15">
          {[...Array(20)].map((_, i) => (
            <motion.line
              key={`v-${i}`}
              x1={i * 40}
              y1="0"
              x2={i * 40}
              y2="600"
              stroke="url(#grid-gradient)"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: i * 0.05 }}
            />
          ))}
          {[...Array(15)].map((_, i) => (
            <motion.line
              key={`h-${i}`}
              x1="0"
              y1={i * 40}
              x2="800"
              y2={i * 40}
              stroke="url(#grid-gradient)"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: i * 0.05 }}
            />
          ))}
        </g>

        {/* Central Circle - Main Hub */}
        <motion.circle
          cx="400"
          cy="300"
          r="60"
          fill="url(#primary-gradient)"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />
        <motion.circle
          cx="400"
          cy="300"
          r="60"
          fill="none"
          stroke="url(#primary-gradient)"
          strokeWidth="2"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [1, 1.3, 1], opacity: [0.8, 0, 0.8] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Orbiting Elements */}
        {/* Code Symbol */}
        <motion.g
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: '400px 300px' }}
        >
          <motion.circle
            cx="400"
            cy="150"
            r="35"
            fill="url(#secondary-gradient)"
            whileHover={{ scale: 1.2 }}
          />
          <text x="400" y="160" textAnchor="middle" fontSize="30" fill="white" fontWeight="bold">
            {'</>'}
          </text>
        </motion.g>

        {/* Database Symbol */}
        <motion.g
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: '400px 300px' }}
        >
          <motion.circle
            cx="600"
            cy="300"
            r="35"
            fill="url(#tertiary-gradient)"
            whileHover={{ scale: 1.2 }}
          />
          <g transform="translate(580, 280)">
            <ellipse cx="20" cy="10" rx="15" ry="5" fill="white" opacity="0.9" />
            <rect x="5" y="10" width="30" height="20" fill="white" opacity="0.9" rx="2" />
            <ellipse cx="20" cy="30" rx="15" ry="5" fill="white" opacity="0.9" />
          </g>
        </motion.g>

        {/* Mobile Symbol */}
        <motion.g
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: '400px 300px' }}
        >
          <motion.circle
            cx="250"
            cy="400"
            r="35"
            fill="url(#quaternary-gradient)"
            whileHover={{ scale: 1.2 }}
          />
          <rect x="237" y="385" width="26" height="40" rx="3" fill="white" stroke="white" strokeWidth="2" />
          <circle cx="250" cy="421" r="2" fill="#667eea" />
        </motion.g>

        {/* AI/Brain Symbol */}
        <motion.g
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: '400px 300px' }}
        >
          <motion.circle
            cx="550"
            cy="420"
            r="35"
            fill="url(#quinary-gradient)"
            whileHover={{ scale: 1.2 }}
          />
          <text x="550" y="432" textAnchor="middle" fontSize="35" fill="white">
            🧠
          </text>
        </motion.g>

        {/* Cloud Symbol */}
        <motion.g
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: '400px 300px' }}
        >
          <motion.circle
            cx="200"
            cy="220"
            r="35"
            fill="url(#senary-gradient)"
            whileHover={{ scale: 1.2 }}
          />
          <g transform="translate(183, 208)">
            <circle cx="10" cy="15" r="8" fill="white" />
            <circle cx="22" cy="12" r="10" fill="white" />
            <circle cx="32" cy="15" r="8" fill="white" />
            <rect x="10" y="15" width="22" height="8" fill="white" />
          </g>
        </motion.g>

        {/* Security Shield */}
        <motion.g
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: '400px 300px' }}
        >
          <motion.circle
            cx="580"
            cy="180"
            r="35"
            fill="url(#septenary-gradient)"
            whileHover={{ scale: 1.2 }}
          />
          <path
            d="M 580 163 L 565 168 L 565 183 Q 565 198 580 203 Q 595 198 595 183 L 595 168 Z"
            fill="white"
            stroke="white"
            strokeWidth="2"
          />
          <text x="580" y="188" textAnchor="middle" fontSize="16" fill="#667eea" fontWeight="bold">
            ✓
          </text>
        </motion.g>

        {/* Connecting Lines */}
        <motion.line
          x1="400"
          y1="240"
          x2="400"
          y2="150"
          stroke="url(#line-gradient)"
          strokeWidth="2"
          strokeDasharray="5,5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
        />
        <motion.line
          x1="460"
          y1="300"
          x2="565"
          y2="300"
          stroke="url(#line-gradient)"
          strokeWidth="2"
          strokeDasharray="5,5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 1.2 }}
        />
        <motion.line
          x1="350"
          y1="340"
          x2="285"
          y2="400"
          stroke="url(#line-gradient)"
          strokeWidth="2"
          strokeDasharray="5,5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 1.4 }}
        />
        <motion.line
          x1="450"
          y1="340"
          x2="515"
          y2="385"
          stroke="url(#line-gradient)"
          strokeWidth="2"
          strokeDasharray="5,5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 1.6 }}
        />

        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.circle
            key={`particle-${i}`}
            cx={100 + Math.random() * 600}
            cy={50 + Math.random() * 500}
            r={2 + Math.random() * 3}
            fill="url(#particle-gradient)"
            initial={{ opacity: 0.3, y: 0 }}
            animate={{
              opacity: [0.3, 0.8, 0.3],
              y: [-20, 20, -20]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Gradients */}
        <defs>
          <linearGradient id="primary-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#667eea" />
            <stop offset="100%" stopColor="#764ba2" />
          </linearGradient>
          <linearGradient id="secondary-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00bcd4" />
            <stop offset="100%" stopColor="#2196f3" />
          </linearGradient>
          <linearGradient id="tertiary-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f093fb" />
            <stop offset="100%" stopColor="#f5576c" />
          </linearGradient>
          <linearGradient id="quaternary-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4facfe" />
            <stop offset="100%" stopColor="#00f2fe" />
          </linearGradient>
          <linearGradient id="quinary-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#43e97b" />
            <stop offset="100%" stopColor="#38f9d7" />
          </linearGradient>
          <linearGradient id="senary-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fa709a" />
            <stop offset="100%" stopColor="#fee140" />
          </linearGradient>
          <linearGradient id="septenary-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#30cfd0" />
            <stop offset="100%" stopColor="#330867" />
          </linearGradient>
          <linearGradient id="grid-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#667eea" />
            <stop offset="100%" stopColor="#00bcd4" />
          </linearGradient>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#667eea" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#00bcd4" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="particle-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#667eea" />
            <stop offset="100%" stopColor="#00bcd4" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
