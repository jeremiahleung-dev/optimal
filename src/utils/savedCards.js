const KEY = 'optimal_saved'

export function getSavedIds() {
  try {
    return JSON.parse(localStorage.getItem(KEY) || '[]')
  } catch {
    return []
  }
}

export function toggleSaved(id, current) {
  const updated = current.includes(id)
    ? current.filter(s => s !== id)
    : [...current, id]
  try {
    localStorage.setItem(KEY, JSON.stringify(updated))
  } catch { /* silent */ }
  return updated
}

export function clearSaved() {
  try { localStorage.removeItem(KEY) } catch { /* silent */ }
  return []
}
