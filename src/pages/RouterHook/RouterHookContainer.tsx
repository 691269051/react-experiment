import React, { useState } from 'react'
import {
    useParams,
    useLocation,
    useHistory,
    useRouteMatch,
    Link,
    NavLink,
} from 'react-router-dom'
import { Button } from 'antd'

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
    const match = useRouteMatch()
    const location = useLocation()
    const history = useHistory()
    const [num2, setNum2] = useState<number>(1)
    console.log(match)
    console.log(location)
    console.log(history)
    return (
        <div>
            <Link to={path} replace={true} component={LinkButton}>
                goTo {path}
            </Link>
            id: {id}
            <div
                style={{ color: 'red' }}
                onClick={() => {
                    setNum2(num2 => num2 + 1)
                }}
            >
                {num2}ss2dd34
            </div>
        </div>
    )
}

export default RouterHookContainer
