export function formatRuntime(mins: number) {
  const HH = Math.floor(mins / 60)
  const MM = mins % 60
  const res = `${HH > 0 ? `${HH}h` : ''} ${MM > 0 ? `${MM}m` : ''}`.trim()
  return res
}
