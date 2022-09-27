import React, { useCallback } from 'react'
// import BraftEditor from '@uw/rcnext/pages/BraftEditor'
// import HookTest from '@uw/rcnext/pages/hookTest'
import RouterHook from '@uw/rcnext/pages/RouterHook'
import Slate from '@uw/rcnext/pages/Slate'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Redirect from './Redirect'

const NotFound: React.FC<{}> = () => {
    return <div>404</div>
}

const Routers: React.FC<{}> = () => {
    return (
        <Router>
            <Routes>
                {/* <Route path="/BraftEditor">
                        <BraftEditor />
                    </Route> */}
                {/* <Route path="/Slate" element={<Slate />} />
                <Route path="/hooktest" element={<HookTest />} /> */}
                <Route key="12" path="/routerhooktest" element={<RouterHook />} />
                {/* <Redirect path="/" to="login" /> */}
                {/* <Route path="*" element={<NotFound />} /> */}
            </Routes>
        </Router>
    )
}
const App = Routers

export default App
