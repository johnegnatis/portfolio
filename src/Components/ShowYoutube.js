import React from "react";
import YoutubeEmbed from './YoutubeEmbed'

export function ShowYoutube({youtube}) {
        return <YoutubeEmbed
            embedId={`${youtube}`}
            className ="p-5"
        />
}