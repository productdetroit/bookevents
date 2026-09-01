/**
 * "The Count" — the Book Events mark. Three places, two taken.
 * Geometry is fixed by the brand sheet: 64x64 grid, radius 15,
 * three 11x26 units at radius 5.5, the third at 30% opacity.
 */
export function Mark({ size = 28 }: { size?: number }) {
  return (
    <svg viewBox="0 0 64 64" width={size} height={size} aria-hidden="true">
      <rect width="64" height="64" rx="15" fill="#B4552F" />
      <rect x="12" y="19" width="11" height="26" rx="5.5" fill="#FAF7F2" />
      <rect x="26.5" y="19" width="11" height="26" rx="5.5" fill="#FAF7F2" />
      <rect
        x="41"
        y="19"
        width="11"
        height="26"
        rx="5.5"
        fill="#FAF7F2"
        opacity="0.3"
      />
    </svg>
  );
}
