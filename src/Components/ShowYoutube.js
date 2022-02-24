import React from "react";
import YoutubeEmbed from './YoutubeEmbed'

export function ShowYoutube({hasYoutube, youtube}) {
    if(hasYoutube === 'true')
        return <YoutubeEmbed
        embedId={`${youtube}`}
        className ="p-5"
    />
    else return <></>
}