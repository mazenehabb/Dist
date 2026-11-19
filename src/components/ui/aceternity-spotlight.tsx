/**
 * A lightweight, Aceternity-inspired decorative treatment.  It is intentionally
 * CSS-led so it adds atmosphere without a rendering or interaction cost.
 */
export function AceternitySpotlight() {
  return (
    <div aria-hidden="true" className="aceternity-spotlight">
      <span className="aceternity-spotlight__grid" />
      <span className="aceternity-spotlight__glow aceternity-spotlight__glow--one" />
      <span className="aceternity-spotlight__glow aceternity-spotlight__glow--two" />
      <span className="aceternity-spotlight__beam" />
    </div>
  );
}
