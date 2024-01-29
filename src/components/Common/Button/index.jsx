import React from 'react';
import "./style.css"
import { RWebShare } from 'react-web-share';

const Button = ({ text, outlineButton }) => {
    return (
        <>
            {
                text == "Share" ?
                    <RWebShare
                        data={{
                            text: "Crypto Tracker Website for Tracking Current Markets of Crypto Currencies.",
                            url: "https://cryptopedia-ayan.netlify.app/",
                            title: "CryptoTracker.",
                        }}
                    >
                        <button className={outlineButton ? "btn-outline" : "btn"}>{text}</button>
                    </RWebShare>
                    :
                    <button className={outlineButton ? "btn-outline" : "btn"}>{text}</button>
            }
        </>
    )
}

export default Button;