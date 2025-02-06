const Search = ({search, handleSearch}) => {
    return (
        <form>
        find countries <input value={search} onChange={handleSearch} />
        </form>
    )
}

export default Search