import { createContext, useState } from "react";

export const WatchlistContext = createContext();

const WatchlistProvider = (props) => {
    const [toggle, setToggle] = useState(true);
    return (
        <WatchlistContext.Provider
            value={{ toggle, setToggle }}
        >
            {props.children}
        </WatchlistContext.Provider>
    )
}

export default WatchlistProvider;