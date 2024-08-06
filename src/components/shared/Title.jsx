import React from 'react';
import { Helmet } from "react-helmet-async";

const Title = ({ title = "Synchronous", description = "This is a chat app called ChatoBot" }) => {
    return <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
    </Helmet>
}

export default Title;