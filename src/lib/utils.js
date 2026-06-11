/** Merge class names — shadcn-style utility for UI components */
export function cn(...inputs) {
  return inputs.filter(Boolean).join(' ')
}
