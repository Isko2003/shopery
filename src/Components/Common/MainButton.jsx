import React from 'react'

const MainButton = ({ title, classNames, url, icon }) => {
    return (
        <a className={classNames} href={url}>
            {title}
            {icon}
        </a>
    )
}

export default MainButton