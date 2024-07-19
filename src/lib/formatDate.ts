export function formatDateToISO(date: number) {
  return new Date(date).toISOString()
}

export function formatDateToHuman(date: number) {
  return new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  })
}
