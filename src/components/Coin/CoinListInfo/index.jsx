import List from "../../Dashboard/List"
import "./style.css";

const CoinsListInfo = ({ coin }) => {
    return (
        <div className="grey-wrapper coin-list-info">
            <List coin={coin} />
        </div>
    )
}

export default CoinsListInfo