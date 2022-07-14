export default function Search({ handleSubmit, collectInput }) {
  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Search Giphy" onChange={collectInput} />
      <button>Get</button>
    </form>
  );
}
