/**
 * 代码完全copy自react-loadable
 */

import React from 'react';

function load(loader) {
    let promise = loader();

    let state = {
        loading: true,
        loaded: null,
        error: null
    };

    state.promise = promise
        .then(loaded => {
            state.loading = false;
            state.loaded = loaded;
            return loaded;
        })
        .catch(err => {
            state.loading = false;
            state.error = err;
            throw err;
        });

    return state;
}

function loadMap(obj) {
    let state = {
        loading: false,
        loaded: {},
        error: null
    };

    let promises = [];

    try {
        Object.keys(obj).forEach(key => {
            let result = load(obj[key]);

            if (!result.loading) {
                state.loaded[key] = result.loaded;
                state.error = result.error;
            } else {
                state.loading = true;
            }

            promises.push(result.promise);

            result.promise
                .then(res => {
                    state.loaded[key] = res;
                })
                .catch(err => {
                    state.error = err;
                });
        });
    } catch (err) {
        state.error = err;
    }

    state.promise = Promise.all(promises)
        .then(res => {
            state.loading = false;
            return res;
        })
        .catch(err => {
            state.loading = false;
            throw err;
        });

    return state;
}

function resolve(obj) {
    return obj && obj.__esModule ? obj.default : obj;
}

function render(loaded, props) {

    const Components = resolve(loaded);

    return <Components {...props}/>;
}

function createLoadComponent(loadFn, options) {
    if (!options.loading) {
        throw new Error('Load必须配置loading');
    }

    let opts = Object.assign(
        {
            loader: null,
            loading: null,
            delay: 200,
            timeout: null,
            render: render,
            webpack: null,
            modules: null
        },
        options
    );

    let res = null;

    function init() {
        if (!res) {
            res = loadFn(opts.loader);
        }
        return res.promise;
    }

    return class LoadComponent extends React.Component {
        constructor(props) {
            super(props);
            init();

            this.state = {
                error: res.error,
                pastDelay: false,
                timedOut: false,
                loading: res.loading,
                loaded: res.loaded
            };

            this._mounted = true;
            this._loadModule();
        }

        static preload() {
            return init();
        }

        _loadModule() {
            if (!res.loading) {
                return;
            }

            if (typeof opts.delay === 'number') {
                if (opts.delay === 0) {
                    this.setState({ pastDelay: true });
                } else {
                    this._delay = setTimeout(() => {
                        this.setState({ pastDelay: true });
                    }, opts.delay);
                }
            }

            if (typeof opts.timeout === 'number') {
                this._timeout = setTimeout(() => {
                    this.setState({ timedOut: true });
                }, opts.timeout);
            }

            let update = () => {
                if (!this._mounted) {
                    return;
                }

                this.setState({
                    error: res.error,
                    loaded: res.loaded,
                    loading: res.loading
                });

                this._clearTimeouts();
            };

            res.promise
                .then(() => {
                    update();
                })
                .catch(err => {
                    update();
                    throw err;
                });
        }
        _clearTimeouts() {
            clearTimeout(this._delay);
            clearTimeout(this._timeout);
        }

        componentWillUnmount() {
            this._mounted = false;
            this._clearTimeouts();
        }

        retry = () => {
            this.setState({ error: null, loading: true, timedOut: false });
            res = loadFn(opts.loader);
            this._loadModule();
        };

        render() {
            // console.log(opts.loading.toString())
            if (this.state.loading || this.state.error) {
                // return React.createElement(opts.loading, {
                //     isLoading: this.state.loading,
                //     pastDelay: this.state.pastDelay,
                //     timedOut: this.state.timedOut,
                //     error: this.state.error,
                //     retry: this.retry
                // });
                return (
                    <opts.loading
                        isLoading={this.state.loading}
                        pastDelay={this.state.pastDelay}
                        timedOut={this.state.timedOut}
                        error={this.state.error}
                        retry={this.retry}
                    />
                );
            } else if (this.state.loaded) {
                return opts.render(this.state.loaded, this.props);
            } else {
                return null;
            }
        }
    };
}

function Load(opts) {
    return createLoadComponent(load, opts);
}

function LoadMap(opts) {
    if (typeof opts.render !== 'function') {
        throw new Error('Load 需要配置 一个`render(loaded, props)` 函数');
    }

    return createLoadComponent(loadMap, opts);
}

Load.Map = LoadMap;

export default Load;
