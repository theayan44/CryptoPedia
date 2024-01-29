import ManageSearchRoundedIcon from '@mui/icons-material/ManageSearchRounded';
import "./style.css";
const SearchBar = ({ searchValue, handleSearch }) => {
    return (
        <div className='search-bar'>
            <ManageSearchRoundedIcon />
            <input type="text" placeholder="Search" value={searchValue} onChange={(e) => handleSearch(e)} />
        </div>
    )
}

export default SearchBar;