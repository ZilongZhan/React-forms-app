export const InputField = ({label, type, value, handler}) => {
  return (
    <div>
      {label}:
      <input type={type} value={value} onChange={handler} required />
    </div>
  );
}