import { useState } from "react";
import "./style.css";

const CoinDescription = ({ name, desc }) => {
    const [shortDesc, setShortDesc] = useState(true);

    return (
        <div className="grey-wrapper">
            <h2 className="coin-name">{name}</h2>
            <p className="coin-desc"
                dangerouslySetInnerHTML={{ __html: shortDesc ? desc.slice(0, 400) + "..." : desc }}
            ></p>
            <p className="read-more" onClick={() => setShortDesc(!shortDesc)}>{shortDesc ? "Read More..." : "Read Less..."}</p>
        </div>
    )
}

export default CoinDescription;