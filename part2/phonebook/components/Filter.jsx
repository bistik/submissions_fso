const Filter = ({search, handleSearch}) => {
    return (
        <form>
        filter shown with <input value={search} onChange={handleSearch} />
        </form>
    )
}

export default Filter