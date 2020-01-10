import * as React from 'react'
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
        <Button onClick={navigate} type="primary">
            {children}
        </Button>
    )
}
const RouterHookContainer = () => {
    return (
        <div>
            <Link to="/add/12" replace={true} component={LinkButton}>
                goTo add/12
            </Link>
        </div>
    )
}

export default RouterHookContainer
