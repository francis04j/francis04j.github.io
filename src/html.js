import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
      <title>Francis Adediran | Blog | About | Contact</title>      
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="HandheldFriendly" content="True" />
        <meta name="description" content="Hi I'm Francis Adediran. I author the content of this site and its blog. 
        I create coding courses, write blog, speak at events and work in Developer relations. When i'm not in tech, 
        i like running, travelling, discovering new cultures (cuisine, dance and language)" />
        <meta name="keywords" content="Francis Adediran, Software, Developer, engineer, runner, courses, travels"/>

        <meta property="og:title" content="Francis Adediran | Blog | About | Contact" />
        <meta name="og:description" content="Hi I'm Francis Adediran. I author the content of this site and its blog. 
        I create coding courses, write blog, speak at events and work in Developer relations. When i'm not in tech, 
        i like running, travelling, discovering new cultures (cuisine, dance and language)" />   
        <meta property="og:url" content="http://francisade.com/" />	   

        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" max-age={14400} />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
