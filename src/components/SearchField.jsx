export default function SearchField({ handleInput, filter }) {
  return (
    <input
      type="text"
      placeholder="Search plant..."
      value={filter}
      onChange={handleInput}
    />
  );
}