export default function ScaleSwitch({ toggle }) {
  return (
    <button 
      className="scaleSwitch"
      onClick={toggle}
    >
      C/F
    </button>
  );
}