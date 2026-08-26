import { motion } from 'framer-motion'

const s = {
  card: {
    border: '1px solid #f0f0f0',
    borderRadius: 12,
    overflow: 'hidden',
    transition: 'box-shadow 0.2s',
    cursor: 'pointer',
  },
  imgWrap: { width: '100%', aspectRatio: '16/10', background: '#fafafa', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  img: { width: '100%', height: '100%', objectFit: 'contain', display: 'block' },
  body: { padding: 16 },
  title: { fontSize: 14, fontWeight: 500, color: '#111', marginBottom: 4 },
  desc: { fontSize: 12, color: '#aaa', lineHeight: 1.5, marginBottom: 12, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' },
  btn: (voted) => ({
    width: '100%',
    padding: '8px 0',
    borderRadius: 8,
    fontSize: 12,
    fontWeight: 500,
    border: 'none',
    cursor: voted ? 'not-allowed' : 'pointer',
    background: voted ? '#f8f8f8' : '#23A38F',
    color: voted ? '#ccc' : '#fff',
    transition: 'all 0.15s',
  }),
  num: {
    width: '100%',
    aspectRatio: '16/10',
    background: '#fafafa',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 24,
    fontWeight: 600,
    color: '#e0e0e0',
  },
}

export default function ProjectCard({ project, hasVoted, onVote, onDetail, index }) {
  const imageUrl = project.image_url || project.image || project.photo || project.thumbnail

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04 }}
      style={s.card}
      onClick={() => onDetail(project)}
      onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.06)' }}
      onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none' }}
    >
      {imageUrl ? (
        <div style={s.imgWrap}>
          <img src={imageUrl} alt={project.title} style={s.img} />
        </div>
      ) : (
        <div style={s.num}>{String(index + 1).padStart(2, '0')}</div>
      )}
      <div style={s.body}>
        <div style={s.title}>{project.title}</div>
        {project.abstract && <div style={s.desc}>{project.abstract}</div>}
        <button
          onClick={(e) => { e.stopPropagation(); !hasVoted && onVote() }}
          disabled={hasVoted}
          style={s.btn(hasVoted)}
        >
          {hasVoted ? 'Voted' : 'Vote'}
        </button>
      </div>
    </motion.div>
  )
}
