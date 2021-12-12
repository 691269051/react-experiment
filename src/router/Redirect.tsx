import { useEffect } from 'react'
import type { FC } from 'react'
import { useNavigate, Route } from 'react-router-dom'

interface Props {
    path?: string
    to: string
}

const GoTo: FC<Props> = ({ to }) => {
    const navigate = useNavigate()
    useEffect(() => {
        navigate(to, { replace: true })
    })
    return <></>
}

const Redirect: FC<Props> = ({ path = '/', to }) => {
    return <Route path={path} element={<GoTo path={path} to={to} />} />
}
export default Redirect
