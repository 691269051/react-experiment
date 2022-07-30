import { useEffect, useState, useRef } from 'react'

import produce from 'immer'

//判断浏览器内核 返回true表示内核为webkit
function isWebKit(): boolean {
    var nav = window.navigator.userAgent.toLowerCase() //获取浏览器
    if (nav.indexOf('applewebkit/') > -1) {
        return true
    }
    return false
}

interface props {
    lineClamp: number
    style: React.CSSProperties
    Wrap: unknown
    children:React.ReactNode
}

const one: React.CSSProperties = {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
}

const more: React.CSSProperties = {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    WebkitBoxOrient: 'vertical',
    // WebkitLineClamp:'',
}

const useCreateStyle: (lineClamp: number) => React.CSSProperties = (lineClamp) => {
    if (lineClamp === 1) {
        return one
    }

    if (isWebKit() && Number(more['WebkitLineClamp']) !== lineClamp) {
        produce(more, (draftMore) => {
            draftMore['WebkitLineClamp'] = lineClamp
        })
        return more
    }
    return {}
}

const Text: React.FC<props> = ({
    lineClamp,
    children,
    style,
    ...outerProps
}): JSX.Element => {
    const dom = useRef<HTMLParagraphElement>(null)
    const a = () => {
        console.log('dom', dom)
    }
    useEffect(() => {}, [lineClamp])

    return (
        <p {...outerProps} ref={dom} style={style}>
            {children}
        </p>
    )
}

export default Text
