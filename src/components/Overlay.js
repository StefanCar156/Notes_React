import React from 'react'
import { useGlobalContext } from '../context'

const Overlay = () => {
    const { isOptionsActive } = useGlobalContext()
    return (
        <div className={`overlay ${isOptionsActive && `overlay-active`}`}></div>
    )
}

export default Overlay
