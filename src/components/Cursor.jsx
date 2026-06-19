import { useCursor } from '../hooks/useCursor';

export default function Cursor() {
  const { dotRef, ringRef } = useCursor();
  return (
    <>
      <div id="ks-cursor"      ref={dotRef}  />
      <div id="ks-cursor-ring" ref={ringRef} />
    </>
  );
}
