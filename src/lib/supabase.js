import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export async function getProjects(category) {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('category', category)
    .order('created_at', { ascending: true })

  if (error) throw error
  return data
}

export async function submitVote(projectId, fingerprint, category) {
  const { data, error } = await supabase
    .from('votes')
    .insert({ project_id: projectId, fingerprint, category })
    .select()

  if (error) {
    if (error.code === '23505') {
      throw new Error('ALREADY_VOTED')
    }
    throw error
  }
  return data
}

export async function getVoteStatus(fingerprint) {
  const { data, error } = await supabase
    .from('votes')
    .select('project_id, category')
    .eq('fingerprint', fingerprint)

  if (error) throw error
  return data
}
