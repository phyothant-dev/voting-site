import { motion, AnimatePresence } from 'framer-motion'

export default function ConfirmModal({ project, onConfirm, onCancel }) {
  if (!project) return null
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{ position: 'fixed', inset: 0, zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16, background: 'rgba(0,0,0,0.08)' }}
        onClick={onCancel}
      >
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ background: '#fff', borderRadius: 12, border: '1px solid #eee', padding: 24, maxWidth: 340, width: '100%' }}
          onClick={(e) => e.stopPropagation()}
        >
          <h3 style={{ fontSize: 15, fontWeight: 600, color: '#111', marginBottom: 4 }}>Confirm vote</h3>
          <p style={{ fontSize: 12, color: '#999', marginBottom: 20 }}>{project.title}</p>
          <div style={{ display: 'flex', gap: 8 }}>
            <button onClick={onCancel} style={{ flex: 1, padding: '10px 0', borderRadius: 8, fontSize: 12, fontWeight: 500, background: '#f5f5f5', border: 'none', cursor: 'pointer' }}>Cancel</button>
            <button onClick={onConfirm} style={{ flex: 1, padding: '10px 0', borderRadius: 8, fontSize: 12, fontWeight: 500, background: '#23A38F', color: '#fff', border: 'none', cursor: 'pointer' }}>Confirm</button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
