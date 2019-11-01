/// <reference types="react-scripts" />
/// <reference types="react-dom/experimental" />

declare module '*.module.less' {
    const classes: { [key: string]: string }
    export default classes
}
