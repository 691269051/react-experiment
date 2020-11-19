import { Button } from 'antd'
import React, { useState } from 'react'
import {
    Link,
    useNavigate,
    useLocation,
    useParams,
    useMatch,
    Outlet,
} from 'react-router-dom'
import useSWR from 'swr'
import { ReactComponent as Excel } from './icon.svg'

interface ILinkButton {
    children: any
    href: string
    navigate: () => void
}

const LinkButton: React.FC<ILinkButton> = ({ children, href, navigate }) => {
    // navigate()
    return (
        <Button href={href} onClick={navigate} type="primary">
            {children}
        </Button>
    )
}
const RouterHookContainer = () => {
    const path = `/routerhooktest/${Math.random()}`
    const { id } = useParams()
    const location = useLocation()
    const navigate = useNavigate()
    const [num2, setNum2] = useState<number>(1)
    const { data, isValidating, error } = useSWR(
        'http://www.baidu.com',
        async (url) => {
            const data = await fetch(url)
                .then((data) => {
                    return data?.json()
                })
                .catch((error) => {
                    console.log(error)
                })

            return data ?? null
        },
        { suspense: true }
    )
    console.log(location, Outlet)
    return (
        <div>
            <Link to={path} replace={true}>
                goTo {path}
            </Link>
            id: {id}
            <div
                style={{ color: 'red' }}
                onClick={() => {
                    setNum2((num2) => num2 + 1)
                }}
            >
                <Excel />
                {num2}dd
            </div>
        </div>
    )
}

export default RouterHookContainer
