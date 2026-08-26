import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import Confetti from 'react-confetti'

export default function SuccessModal({ show, projectName, onClose }) {
  const [dims, setDims] = useState({ width: 0, height: 0 })
  useEffect(() => { setDims({ width: window.innerWidth, height: window.innerHeight }) }, [])
  if (!show) return null
  return (
    <AnimatePresence>
      <Confetti width={dims.width} height={dims.height} recycle={false} numberOfPieces={80} colors={['#23A38F', '#5681b5']} />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{ position: 'fixed', inset: 0, zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16, background: 'rgba(0,0,0,0.08)' }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ background: '#fff', borderRadius: 12, border: '1px solid #eee', padding: 24, maxWidth: 340, width: '100%', textAlign: 'center' }}
          onClick={(e) => e.stopPropagation()}
        >
          <h3 style={{ fontSize: 15, fontWeight: 600, color: '#111', marginBottom: 4 }}>Vote submitted</h3>
          <p style={{ fontSize: 12, color: '#999', marginBottom: 20 }}>{projectName}</p>
          <button onClick={onClose} style={{ width: '100%', padding: '10px 0', borderRadius: 8, fontSize: 12, fontWeight: 500, background: '#23A38F', color: '#fff', border: 'none', cursor: 'pointer' }}>Done</button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
