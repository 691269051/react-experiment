import React, { Suspense } from 'react'
import Loading from 'component/loading'
import { Router } from '@reach/router'
import HookTest from 'pages/hookTest'

// const N404: React.FC<{}> = () => {
//     return <div>404</div>
// }

const Routers: React.FC<{}> = () => {
    return (
        <Suspense fallback={<Loading />}>
            <Router>
                {/* <Home path="/" name="userState" /> */}
                <HookTest path="/" name="hooksTest" />
            </Router>
        </Suspense>
    )
}
const App = Routers

export default App
