/// <reference types="react-scripts" />
///<reference types="react/next" />
/// <reference types="react-dom/next" />

declare module '*.module.less' {
    const classes: { [key: string]: string }
    export default classes
}
