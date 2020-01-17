module.exports = (function(t) {
    var e = {}
    function n(r) {
        if (e[r]) return e[r].exports
        var o = (e[r] = { i: r, l: !1, exports: {} })
        return t[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports
    }
    return (
        (n.m = t),
        (n.c = e),
        (n.d = function(t, e, r) {
            n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r })
        }),
        (n.r = function(t) {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(t, Symbol.toStringTag, {
                    value: 'Module',
                }),
                Object.defineProperty(t, '__esModule', { value: !0 })
        }),
        (n.t = function(t, e) {
            if ((1 & e && (t = n(t)), 8 & e)) return t
            if (4 & e && 'object' == typeof t && t && t.__esModule) return t
            var r = Object.create(null)
            if (
                (n.r(r),
                Object.defineProperty(r, 'default', {
                    enumerable: !0,
                    value: t,
                }),
                2 & e && 'string' != typeof t)
            )
                for (var o in t)
                    n.d(
                        r,
                        o,
                        function(e) {
                            return t[e]
                        }.bind(null, o)
                    )
            return r
        }),
        (n.n = function(t) {
            var e =
                t && t.__esModule
                    ? function() {
                          return t.default
                      }
                    : function() {
                          return t
                      }
            return n.d(e, 'a', e), e
        }),
        (n.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }),
        (n.p = ''),
        n((n.s = 28))
    )
})([
    function(t, e) {
        t.exports = require('path')
    },
    function(t, e, n) {
        var r = n(4),
            o = n(31),
            i = n(33),
            s = n(35),
            c = [],
            a = n(6)
        var u,
            l,
            f = function() {}
        function h(t) {
            o(t),
                (t.gracefulify = h),
                (t.FileReadStream = f),
                (t.FileWriteStream = y),
                (t.createReadStream = function(t, e) {
                    return new f(t, e)
                }),
                (t.createWriteStream = function(t, e) {
                    return new y(t, e)
                })
            var e = t.readFile
            t.readFile = function(t, n, r) {
                'function' == typeof n && ((r = n), (n = null))
                return (function t(n, r, o) {
                    return e(n, r, function(e) {
                        !e || ('EMFILE' !== e.code && 'ENFILE' !== e.code)
                            ? ('function' == typeof o &&
                                  o.apply(this, arguments),
                              d())
                            : p([t, [n, r, o]])
                    })
                })(t, n, r)
            }
            var n = t.writeFile
            t.writeFile = function(t, e, r, o) {
                'function' == typeof r && ((o = r), (r = null))
                return (function t(e, r, o, i) {
                    return n(e, r, o, function(n) {
                        !n || ('EMFILE' !== n.code && 'ENFILE' !== n.code)
                            ? ('function' == typeof i &&
                                  i.apply(this, arguments),
                              d())
                            : p([t, [e, r, o, i]])
                    })
                })(t, e, r, o)
            }
            var r = t.appendFile
            r &&
                (t.appendFile = function(t, e, n, o) {
                    'function' == typeof n && ((o = n), (n = null))
                    return (function t(e, n, o, i) {
                        return r(e, n, o, function(r) {
                            !r || ('EMFILE' !== r.code && 'ENFILE' !== r.code)
                                ? ('function' == typeof i &&
                                      i.apply(this, arguments),
                                  d())
                                : p([t, [e, n, o, i]])
                        })
                    })(t, e, n, o)
                })
            var s = t.readdir
            function c(e) {
                return s.apply(t, e)
            }
            if (
                ((t.readdir = function(t, e, n) {
                    var r = [t]
                    'function' != typeof e ? r.push(e) : (n = e)
                    return (
                        r.push(function(t, e) {
                            e && e.sort && e.sort()
                            !t || ('EMFILE' !== t.code && 'ENFILE' !== t.code)
                                ? ('function' == typeof n &&
                                      n.apply(this, arguments),
                                  d())
                                : p([c, [r]])
                        }),
                        c(r)
                    )
                }),
                'v0.8' === process.version.substr(0, 4))
            ) {
                var a = i(t)
                ;(f = a.ReadStream), (y = a.WriteStream)
            }
            var u = t.ReadStream
            u &&
                ((f.prototype = Object.create(u.prototype)),
                (f.prototype.open = function() {
                    var t = this
                    g(t.path, t.flags, t.mode, function(e, n) {
                        e
                            ? (t.autoClose && t.destroy(), t.emit('error', e))
                            : ((t.fd = n), t.emit('open', n), t.read())
                    })
                }))
            var l = t.WriteStream
            function f(t, e) {
                return this instanceof f
                    ? (u.apply(this, arguments), this)
                    : f.apply(Object.create(f.prototype), arguments)
            }
            function y(t, e) {
                return this instanceof y
                    ? (l.apply(this, arguments), this)
                    : y.apply(Object.create(y.prototype), arguments)
            }
            l &&
                ((y.prototype = Object.create(l.prototype)),
                (y.prototype.open = function() {
                    var t = this
                    g(t.path, t.flags, t.mode, function(e, n) {
                        e
                            ? (t.destroy(), t.emit('error', e))
                            : ((t.fd = n), t.emit('open', n))
                    })
                })),
                (t.ReadStream = f),
                (t.WriteStream = y)
            var m = t.open
            function g(t, e, n, r) {
                return (
                    'function' == typeof n && ((r = n), (n = null)),
                    (function t(e, n, r, o) {
                        return m(e, n, r, function(i, s) {
                            !i || ('EMFILE' !== i.code && 'ENFILE' !== i.code)
                                ? ('function' == typeof o &&
                                      o.apply(this, arguments),
                                  d())
                                : p([t, [e, n, r, o]])
                        })
                    })(t, e, n, r)
                )
            }
            return (t.open = g), t
        }
        function p(t) {
            f('ENQUEUE', t[0].name, t[1]), c.push(t)
        }
        function d() {
            var t = c.shift()
            t && (f('RETRY', t[0].name, t[1]), t[0].apply(null, t[1]))
        }
        a.debuglog
            ? (f = a.debuglog('gfs4'))
            : /\bgfs4\b/i.test(process.env.NODE_DEBUG || '') &&
              (f = function() {
                  var t = a.format.apply(a, arguments)
                  ;(t = 'GFS4: ' + t.split(/\n/).join('\nGFS4: ')),
                      console.error(t)
              }),
            /\bgfs4\b/i.test(process.env.NODE_DEBUG || '') &&
                process.on('exit', function() {
                    f(c), n(7).equal(c.length, 0)
                }),
            (t.exports = h(s(r))),
            process.env.TEST_GRACEFUL_FS_GLOBAL_PATCH &&
                !r.__patched &&
                ((t.exports = h(r)), (r.__patched = !0)),
            (t.exports.close =
                ((u = r.close),
                function(t, e) {
                    return u.call(r, t, function(t) {
                        t || d(),
                            'function' == typeof e && e.apply(this, arguments)
                    })
                })),
            (t.exports.closeSync =
                ((l = r.closeSync),
                function(t) {
                    var e = l.apply(r, arguments)
                    return d(), e
                })),
            /\bgraceful-fs\b/.test(r.closeSync.toString()) ||
                ((r.closeSync = t.exports.closeSync),
                (r.close = t.exports.close))
    },
    function(t, e, n) {
        'use strict'
        ;(e.fromCallback = function(t) {
            return Object.defineProperty(
                function() {
                    if ('function' != typeof arguments[arguments.length - 1])
                        return new Promise((e, n) => {
                            ;(arguments[arguments.length] = (t, r) => {
                                if (t) return n(t)
                                e(r)
                            }),
                                arguments.length++,
                                t.apply(this, arguments)
                        })
                    t.apply(this, arguments)
                },
                'name',
                { value: t.name }
            )
        }),
            (e.fromPromise = function(t) {
                return Object.defineProperty(
                    function() {
                        const e = arguments[arguments.length - 1]
                        if ('function' != typeof e)
                            return t.apply(this, arguments)
                        t.apply(this, arguments).then(t => e(null, t), e)
                    },
                    'name',
                    { value: t.name }
                )
            })
    },
    function(t, e, n) {
        'use strict'
        const r = (0, n(2).fromCallback)(n(37)),
            o = n(38)
        t.exports = {
            mkdirs: r,
            mkdirsSync: o,
            mkdirp: r,
            mkdirpSync: o,
            ensureDir: r,
            ensureDirSync: o,
        }
    },
    function(t, e) {
        t.exports = require('fs')
    },
    function(t, e, n) {
        'use strict'
        const r = n(2).fromPromise,
            o = n(14)
        t.exports = {
            pathExists: r(function(t) {
                return o
                    .access(t)
                    .then(() => !0)
                    .catch(() => !1)
            }),
            pathExistsSync: o.existsSync,
        }
    },
    function(t, e) {
        t.exports = require('util')
    },
    function(t, e) {
        t.exports = require('assert')
    },
    function(t, e, n) {
        'use strict'
        const r = n(2).fromCallback,
            o = n(41)
        t.exports = { remove: r(o), removeSync: o.sync }
    },
    function(t, e, n) {
        'use strict'
        const r = n(2).fromCallback,
            o = n(49)
        t.exports = {
            readJson: r(o.readFile),
            readJsonSync: o.readFileSync,
            writeJson: r(o.writeFile),
            writeJsonSync: o.writeFileSync,
        }
    },
    function(t, e, n) {
        t.exports = v
        var r = n(4),
            o = n(23),
            i = n(11),
            s = (i.Minimatch, n(72)),
            c = n(74).EventEmitter,
            a = n(0),
            u = n(7),
            l = n(12),
            f = n(75),
            h = n(24),
            p = (h.alphasort, h.alphasorti, h.setopts),
            d = h.ownProp,
            y = n(76),
            m = (n(6), h.childrenIgnored),
            g = h.isIgnored,
            b = n(26)
        function v(t, e, n) {
            if (
                ('function' == typeof e && ((n = e), (e = {})),
                e || (e = {}),
                e.sync)
            ) {
                if (n) throw new TypeError('callback provided to sync glob')
                return f(t, e)
            }
            return new S(t, e, n)
        }
        v.sync = f
        var w = (v.GlobSync = f.GlobSync)
        function S(t, e, n) {
            if (
                ('function' == typeof e && ((n = e), (e = null)), e && e.sync)
            ) {
                if (n) throw new TypeError('callback provided to sync glob')
                return new w(t, e)
            }
            if (!(this instanceof S)) return new S(t, e, n)
            p(this, t, e), (this._didRealPath = !1)
            var r = this.minimatch.set.length
            ;(this.matches = new Array(r)),
                'function' == typeof n &&
                    ((n = b(n)),
                    this.on('error', n),
                    this.on('end', function(t) {
                        n(null, t)
                    }))
            var o = this
            if (
                ((this._processing = 0),
                (this._emitQueue = []),
                (this._processQueue = []),
                (this.paused = !1),
                this.noprocess)
            )
                return this
            if (0 === r) return c()
            for (var i = !0, s = 0; s < r; s++)
                this._process(this.minimatch.set[s], s, !1, c)
            function c() {
                --o._processing,
                    o._processing <= 0 &&
                        (i
                            ? process.nextTick(function() {
                                  o._finish()
                              })
                            : o._finish())
            }
            i = !1
        }
        ;(v.glob = v),
            (v.hasMagic = function(t, e) {
                var n = (function(t, e) {
                    if (null === e || 'object' != typeof e) return t
                    for (var n = Object.keys(e), r = n.length; r--; )
                        t[n[r]] = e[n[r]]
                    return t
                })({}, e)
                n.noprocess = !0
                var r = new S(t, n).minimatch.set
                if (!t) return !1
                if (r.length > 1) return !0
                for (var o = 0; o < r[0].length; o++)
                    if ('string' != typeof r[0][o]) return !0
                return !1
            }),
            (v.Glob = S),
            s(S, c),
            (S.prototype._finish = function() {
                if ((u(this instanceof S), !this.aborted)) {
                    if (this.realpath && !this._didRealpath)
                        return this._realpath()
                    h.finish(this), this.emit('end', this.found)
                }
            }),
            (S.prototype._realpath = function() {
                if (!this._didRealpath) {
                    this._didRealpath = !0
                    var t = this.matches.length
                    if (0 === t) return this._finish()
                    for (var e = this, n = 0; n < this.matches.length; n++)
                        this._realpathSet(n, r)
                }
                function r() {
                    0 == --t && e._finish()
                }
            }),
            (S.prototype._realpathSet = function(t, e) {
                var n = this.matches[t]
                if (!n) return e()
                var r = Object.keys(n),
                    i = this,
                    s = r.length
                if (0 === s) return e()
                var c = (this.matches[t] = Object.create(null))
                r.forEach(function(n, r) {
                    ;(n = i._makeAbs(n)),
                        o.realpath(n, i.realpathCache, function(r, o) {
                            r
                                ? 'stat' === r.syscall
                                    ? (c[n] = !0)
                                    : i.emit('error', r)
                                : (c[o] = !0),
                                0 == --s && ((i.matches[t] = c), e())
                        })
                })
            }),
            (S.prototype._mark = function(t) {
                return h.mark(this, t)
            }),
            (S.prototype._makeAbs = function(t) {
                return h.makeAbs(this, t)
            }),
            (S.prototype.abort = function() {
                ;(this.aborted = !0), this.emit('abort')
            }),
            (S.prototype.pause = function() {
                this.paused || ((this.paused = !0), this.emit('pause'))
            }),
            (S.prototype.resume = function() {
                if (this.paused) {
                    if (
                        (this.emit('resume'),
                        (this.paused = !1),
                        this._emitQueue.length)
                    ) {
                        var t = this._emitQueue.slice(0)
                        this._emitQueue.length = 0
                        for (var e = 0; e < t.length; e++) {
                            var n = t[e]
                            this._emitMatch(n[0], n[1])
                        }
                    }
                    if (this._processQueue.length) {
                        var r = this._processQueue.slice(0)
                        this._processQueue.length = 0
                        for (e = 0; e < r.length; e++) {
                            var o = r[e]
                            this._processing--,
                                this._process(o[0], o[1], o[2], o[3])
                        }
                    }
                }
            }),
            (S.prototype._process = function(t, e, n, r) {
                if (
                    (u(this instanceof S),
                    u('function' == typeof r),
                    !this.aborted)
                )
                    if ((this._processing++, this.paused))
                        this._processQueue.push([t, e, n, r])
                    else {
                        for (var o, s = 0; 'string' == typeof t[s]; ) s++
                        switch (s) {
                            case t.length:
                                return void this._processSimple(
                                    t.join('/'),
                                    e,
                                    r
                                )
                            case 0:
                                o = null
                                break
                            default:
                                o = t.slice(0, s).join('/')
                        }
                        var c,
                            a = t.slice(s)
                        null === o
                            ? (c = '.')
                            : l(o) || l(t.join('/'))
                            ? ((o && l(o)) || (o = '/' + o), (c = o))
                            : (c = o)
                        var f = this._makeAbs(c)
                        if (m(this, c)) return r()
                        a[0] === i.GLOBSTAR
                            ? this._processGlobStar(o, c, f, a, e, n, r)
                            : this._processReaddir(o, c, f, a, e, n, r)
                    }
            }),
            (S.prototype._processReaddir = function(t, e, n, r, o, i, s) {
                var c = this
                this._readdir(n, i, function(a, u) {
                    return c._processReaddir2(t, e, n, r, o, i, u, s)
                })
            }),
            (S.prototype._processReaddir2 = function(t, e, n, r, o, i, s, c) {
                if (!s) return c()
                for (
                    var u = r[0],
                        l = !!this.minimatch.negate,
                        f = u._glob,
                        h = this.dot || '.' === f.charAt(0),
                        p = [],
                        d = 0;
                    d < s.length;
                    d++
                ) {
                    if ('.' !== (m = s[d]).charAt(0) || h)
                        (l && !t ? !m.match(u) : m.match(u)) && p.push(m)
                }
                var y = p.length
                if (0 === y) return c()
                if (1 === r.length && !this.mark && !this.stat) {
                    this.matches[o] || (this.matches[o] = Object.create(null))
                    for (d = 0; d < y; d++) {
                        var m = p[d]
                        t && (m = '/' !== t ? t + '/' + m : t + m),
                            '/' !== m.charAt(0) ||
                                this.nomount ||
                                (m = a.join(this.root, m)),
                            this._emitMatch(o, m)
                    }
                    return c()
                }
                r.shift()
                for (d = 0; d < y; d++) {
                    m = p[d]
                    t && (m = '/' !== t ? t + '/' + m : t + m),
                        this._process([m].concat(r), o, i, c)
                }
                c()
            }),
            (S.prototype._emitMatch = function(t, e) {
                if (!this.aborted && !g(this, e))
                    if (this.paused) this._emitQueue.push([t, e])
                    else {
                        var n = l(e) ? e : this._makeAbs(e)
                        if (
                            (this.mark && (e = this._mark(e)),
                            this.absolute && (e = n),
                            !this.matches[t][e])
                        ) {
                            if (this.nodir) {
                                var r = this.cache[n]
                                if ('DIR' === r || Array.isArray(r)) return
                            }
                            this.matches[t][e] = !0
                            var o = this.statCache[n]
                            o && this.emit('stat', e, o), this.emit('match', e)
                        }
                    }
            }),
            (S.prototype._readdirInGlobStar = function(t, e) {
                if (!this.aborted) {
                    if (this.follow) return this._readdir(t, !1, e)
                    var n = this,
                        o = y('lstat\0' + t, function(r, o) {
                            if (r && 'ENOENT' === r.code) return e()
                            var i = o && o.isSymbolicLink()
                            ;(n.symlinks[t] = i),
                                i || !o || o.isDirectory()
                                    ? n._readdir(t, !1, e)
                                    : ((n.cache[t] = 'FILE'), e())
                        })
                    o && r.lstat(t, o)
                }
            }),
            (S.prototype._readdir = function(t, e, n) {
                if (!this.aborted && (n = y('readdir\0' + t + '\0' + e, n))) {
                    if (e && !d(this.symlinks, t))
                        return this._readdirInGlobStar(t, n)
                    if (d(this.cache, t)) {
                        var o = this.cache[t]
                        if (!o || 'FILE' === o) return n()
                        if (Array.isArray(o)) return n(null, o)
                    }
                    r.readdir(
                        t,
                        (function(t, e, n) {
                            return function(r, o) {
                                r
                                    ? t._readdirError(e, r, n)
                                    : t._readdirEntries(e, o, n)
                            }
                        })(this, t, n)
                    )
                }
            }),
            (S.prototype._readdirEntries = function(t, e, n) {
                if (!this.aborted) {
                    if (!this.mark && !this.stat)
                        for (var r = 0; r < e.length; r++) {
                            var o = e[r]
                            ;(o = '/' === t ? t + o : t + '/' + o),
                                (this.cache[o] = !0)
                        }
                    return (this.cache[t] = e), n(null, e)
                }
            }),
            (S.prototype._readdirError = function(t, e, n) {
                if (!this.aborted) {
                    switch (e.code) {
                        case 'ENOTSUP':
                        case 'ENOTDIR':
                            var r = this._makeAbs(t)
                            if (((this.cache[r] = 'FILE'), r === this.cwdAbs)) {
                                var o = new Error(
                                    e.code + ' invalid cwd ' + this.cwd
                                )
                                ;(o.path = this.cwd),
                                    (o.code = e.code),
                                    this.emit('error', o),
                                    this.abort()
                            }
                            break
                        case 'ENOENT':
                        case 'ELOOP':
                        case 'ENAMETOOLONG':
                        case 'UNKNOWN':
                            this.cache[this._makeAbs(t)] = !1
                            break
                        default:
                            ;(this.cache[this._makeAbs(t)] = !1),
                                this.strict &&
                                    (this.emit('error', e), this.abort()),
                                this.silent || console.error('glob error', e)
                    }
                    return n()
                }
            }),
            (S.prototype._processGlobStar = function(t, e, n, r, o, i, s) {
                var c = this
                this._readdir(n, i, function(a, u) {
                    c._processGlobStar2(t, e, n, r, o, i, u, s)
                })
            }),
            (S.prototype._processGlobStar2 = function(t, e, n, r, o, i, s, c) {
                if (!s) return c()
                var a = r.slice(1),
                    u = t ? [t] : [],
                    l = u.concat(a)
                this._process(l, o, !1, c)
                var f = this.symlinks[n],
                    h = s.length
                if (f && i) return c()
                for (var p = 0; p < h; p++) {
                    if ('.' !== s[p].charAt(0) || this.dot) {
                        var d = u.concat(s[p], a)
                        this._process(d, o, !0, c)
                        var y = u.concat(s[p], r)
                        this._process(y, o, !0, c)
                    }
                }
                c()
            }),
            (S.prototype._processSimple = function(t, e, n) {
                var r = this
                this._stat(t, function(o, i) {
                    r._processSimple2(t, e, o, i, n)
                })
            }),
            (S.prototype._processSimple2 = function(t, e, n, r, o) {
                if (
                    (this.matches[e] || (this.matches[e] = Object.create(null)),
                    !r)
                )
                    return o()
                if (t && l(t) && !this.nomount) {
                    var i = /[\/\\]$/.test(t)
                    '/' === t.charAt(0)
                        ? (t = a.join(this.root, t))
                        : ((t = a.resolve(this.root, t)), i && (t += '/'))
                }
                'win32' === process.platform && (t = t.replace(/\\/g, '/')),
                    this._emitMatch(e, t),
                    o()
            }),
            (S.prototype._stat = function(t, e) {
                var n = this._makeAbs(t),
                    o = '/' === t.slice(-1)
                if (t.length > this.maxLength) return e()
                if (!this.stat && d(this.cache, n)) {
                    var i = this.cache[n]
                    if ((Array.isArray(i) && (i = 'DIR'), !o || 'DIR' === i))
                        return e(null, i)
                    if (o && 'FILE' === i) return e()
                }
                var s = this.statCache[n]
                if (void 0 !== s) {
                    if (!1 === s) return e(null, s)
                    var c = s.isDirectory() ? 'DIR' : 'FILE'
                    return o && 'FILE' === c ? e() : e(null, c, s)
                }
                var a = this,
                    u = y('stat\0' + n, function(o, i) {
                        if (i && i.isSymbolicLink())
                            return r.stat(n, function(r, o) {
                                r
                                    ? a._stat2(t, n, null, i, e)
                                    : a._stat2(t, n, r, o, e)
                            })
                        a._stat2(t, n, o, i, e)
                    })
                u && r.lstat(n, u)
            }),
            (S.prototype._stat2 = function(t, e, n, r, o) {
                if (n && ('ENOENT' === n.code || 'ENOTDIR' === n.code))
                    return (this.statCache[e] = !1), o()
                var i = '/' === t.slice(-1)
                if (
                    ((this.statCache[e] = r),
                    '/' === e.slice(-1) && r && !r.isDirectory())
                )
                    return o(null, !1, r)
                var s = !0
                return (
                    r && (s = r.isDirectory() ? 'DIR' : 'FILE'),
                    (this.cache[e] = this.cache[e] || s),
                    i && 'FILE' === s ? o() : o(null, s, r)
                )
            })
    },
    function(t, e, n) {
        ;(t.exports = d), (d.Minimatch = y)
        var r = { sep: '/' }
        try {
            r = n(0)
        } catch (t) {}
        var o = (d.GLOBSTAR = y.GLOBSTAR = {}),
            i = n(69),
            s = {
                '!': { open: '(?:(?!(?:', close: '))[^/]*?)' },
                '?': { open: '(?:', close: ')?' },
                '+': { open: '(?:', close: ')+' },
                '*': { open: '(?:', close: ')*' },
                '@': { open: '(?:', close: ')' },
            },
            c = '[^/]',
            a = c + '*?',
            u = '(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?',
            l = '(?:(?!(?:\\/|^)\\.).)*?',
            f = '().*{}+?[]^$\\!'.split('').reduce(function(t, e) {
                return (t[e] = !0), t
            }, {})
        var h = /\/+/
        function p(t, e) {
            ;(t = t || {}), (e = e || {})
            var n = {}
            return (
                Object.keys(e).forEach(function(t) {
                    n[t] = e[t]
                }),
                Object.keys(t).forEach(function(e) {
                    n[e] = t[e]
                }),
                n
            )
        }
        function d(t, e, n) {
            if ('string' != typeof e)
                throw new TypeError('glob pattern string required')
            return (
                n || (n = {}),
                !(!n.nocomment && '#' === e.charAt(0)) &&
                    ('' === e.trim() ? '' === t : new y(e, n).match(t))
            )
        }
        function y(t, e) {
            if (!(this instanceof y)) return new y(t, e)
            if ('string' != typeof t)
                throw new TypeError('glob pattern string required')
            e || (e = {}),
                (t = t.trim()),
                '/' !== r.sep && (t = t.split(r.sep).join('/')),
                (this.options = e),
                (this.set = []),
                (this.pattern = t),
                (this.regexp = null),
                (this.negate = !1),
                (this.comment = !1),
                (this.empty = !1),
                this.make()
        }
        function m(t, e) {
            if (
                (e || (e = this instanceof y ? this.options : {}),
                void 0 === (t = void 0 === t ? this.pattern : t))
            )
                throw new TypeError('undefined pattern')
            return e.nobrace || !t.match(/\{.*\}/) ? [t] : i(t)
        }
        ;(d.filter = function(t, e) {
            return (
                (e = e || {}),
                function(n, r, o) {
                    return d(n, t, e)
                }
            )
        }),
            (d.defaults = function(t) {
                if (!t || !Object.keys(t).length) return d
                var e = d,
                    n = function(n, r, o) {
                        return e.minimatch(n, r, p(t, o))
                    }
                return (
                    (n.Minimatch = function(n, r) {
                        return new e.Minimatch(n, p(t, r))
                    }),
                    n
                )
            }),
            (y.defaults = function(t) {
                return t && Object.keys(t).length ? d.defaults(t).Minimatch : y
            }),
            (y.prototype.debug = function() {}),
            (y.prototype.make = function() {
                if (this._made) return
                var t = this.pattern,
                    e = this.options
                if (!e.nocomment && '#' === t.charAt(0))
                    return void (this.comment = !0)
                if (!t) return void (this.empty = !0)
                this.parseNegate()
                var n = (this.globSet = this.braceExpand())
                e.debug && (this.debug = console.error)
                this.debug(this.pattern, n),
                    (n = this.globParts = n.map(function(t) {
                        return t.split(h)
                    })),
                    this.debug(this.pattern, n),
                    (n = n.map(function(t, e, n) {
                        return t.map(this.parse, this)
                    }, this)),
                    this.debug(this.pattern, n),
                    (n = n.filter(function(t) {
                        return -1 === t.indexOf(!1)
                    })),
                    this.debug(this.pattern, n),
                    (this.set = n)
            }),
            (y.prototype.parseNegate = function() {
                var t = this.pattern,
                    e = !1,
                    n = this.options,
                    r = 0
                if (n.nonegate) return
                for (var o = 0, i = t.length; o < i && '!' === t.charAt(o); o++)
                    (e = !e), r++
                r && (this.pattern = t.substr(r))
                this.negate = e
            }),
            (d.braceExpand = function(t, e) {
                return m(t, e)
            }),
            (y.prototype.braceExpand = m),
            (y.prototype.parse = function(t, e) {
                if (t.length > 65536) throw new TypeError('pattern is too long')
                var n = this.options
                if (!n.noglobstar && '**' === t) return o
                if ('' === t) return ''
                var r,
                    i = '',
                    u = !!n.nocase,
                    l = !1,
                    h = [],
                    p = [],
                    d = !1,
                    y = -1,
                    m = -1,
                    b =
                        '.' === t.charAt(0)
                            ? ''
                            : n.dot
                            ? '(?!(?:^|\\/)\\.{1,2}(?:$|\\/))'
                            : '(?!\\.)',
                    v = this
                function w() {
                    if (r) {
                        switch (r) {
                            case '*':
                                ;(i += a), (u = !0)
                                break
                            case '?':
                                ;(i += c), (u = !0)
                                break
                            default:
                                i += '\\' + r
                        }
                        v.debug('clearStateChar %j %j', r, i), (r = !1)
                    }
                }
                for (
                    var S, E = 0, k = t.length;
                    E < k && (S = t.charAt(E));
                    E++
                )
                    if ((this.debug('%s\t%s %s %j', t, E, i, S), l && f[S]))
                        (i += '\\' + S), (l = !1)
                    else
                        switch (S) {
                            case '/':
                                return !1
                            case '\\':
                                w(), (l = !0)
                                continue
                            case '?':
                            case '*':
                            case '+':
                            case '@':
                            case '!':
                                if (
                                    (this.debug(
                                        '%s\t%s %s %j <-- stateChar',
                                        t,
                                        E,
                                        i,
                                        S
                                    ),
                                    d)
                                ) {
                                    this.debug('  in class'),
                                        '!' === S && E === m + 1 && (S = '^'),
                                        (i += S)
                                    continue
                                }
                                v.debug('call clearStateChar %j', r),
                                    w(),
                                    (r = S),
                                    n.noext && w()
                                continue
                            case '(':
                                if (d) {
                                    i += '('
                                    continue
                                }
                                if (!r) {
                                    i += '\\('
                                    continue
                                }
                                h.push({
                                    type: r,
                                    start: E - 1,
                                    reStart: i.length,
                                    open: s[r].open,
                                    close: s[r].close,
                                }),
                                    (i += '!' === r ? '(?:(?!(?:' : '(?:'),
                                    this.debug('plType %j %j', r, i),
                                    (r = !1)
                                continue
                            case ')':
                                if (d || !h.length) {
                                    i += '\\)'
                                    continue
                                }
                                w(), (u = !0)
                                var x = h.pop()
                                ;(i += x.close),
                                    '!' === x.type && p.push(x),
                                    (x.reEnd = i.length)
                                continue
                            case '|':
                                if (d || !h.length || l) {
                                    ;(i += '\\|'), (l = !1)
                                    continue
                                }
                                w(), (i += '|')
                                continue
                            case '[':
                                if ((w(), d)) {
                                    i += '\\' + S
                                    continue
                                }
                                ;(d = !0), (m = E), (y = i.length), (i += S)
                                continue
                            case ']':
                                if (E === m + 1 || !d) {
                                    ;(i += '\\' + S), (l = !1)
                                    continue
                                }
                                if (d) {
                                    var O = t.substring(m + 1, E)
                                    try {
                                        RegExp('[' + O + ']')
                                    } catch (t) {
                                        var _ = this.parse(O, g)
                                        ;(i =
                                            i.substr(0, y) +
                                            '\\[' +
                                            _[0] +
                                            '\\]'),
                                            (u = u || _[1]),
                                            (d = !1)
                                        continue
                                    }
                                }
                                ;(u = !0), (d = !1), (i += S)
                                continue
                            default:
                                w(),
                                    l
                                        ? (l = !1)
                                        : !f[S] ||
                                          ('^' === S && d) ||
                                          (i += '\\'),
                                    (i += S)
                        }
                d &&
                    ((O = t.substr(m + 1)),
                    (_ = this.parse(O, g)),
                    (i = i.substr(0, y) + '\\[' + _[0]),
                    (u = u || _[1]))
                for (x = h.pop(); x; x = h.pop()) {
                    var j = i.slice(x.reStart + x.open.length)
                    this.debug('setting tail', i, x),
                        (j = j.replace(/((?:\\{2}){0,64})(\\?)\|/g, function(
                            t,
                            e,
                            n
                        ) {
                            return n || (n = '\\'), e + e + n + '|'
                        })),
                        this.debug('tail=%j\n   %s', j, j, x, i)
                    var M =
                        '*' === x.type ? a : '?' === x.type ? c : '\\' + x.type
                    ;(u = !0), (i = i.slice(0, x.reStart) + M + '\\(' + j)
                }
                w(), l && (i += '\\\\')
                var T = !1
                switch (i.charAt(0)) {
                    case '.':
                    case '[':
                    case '(':
                        T = !0
                }
                for (var N = p.length - 1; N > -1; N--) {
                    var A = p[N],
                        R = i.slice(0, A.reStart),
                        C = i.slice(A.reStart, A.reEnd - 8),
                        P = i.slice(A.reEnd - 8, A.reEnd),
                        I = i.slice(A.reEnd)
                    P += I
                    var F = R.split('(').length - 1,
                        L = I
                    for (E = 0; E < F; E++) L = L.replace(/\)[+*?]?/, '')
                    var D = ''
                    '' === (I = L) && e !== g && (D = '$'),
                        (i = R + C + I + D + P)
                }
                '' !== i && u && (i = '(?=.)' + i)
                T && (i = b + i)
                if (e === g) return [i, u]
                if (!u)
                    return (function(t) {
                        return t.replace(/\\(.)/g, '$1')
                    })(t)
                var $ = n.nocase ? 'i' : ''
                try {
                    var B = new RegExp('^' + i + '$', $)
                } catch (t) {
                    return new RegExp('$.')
                }
                return (B._glob = t), (B._src = i), B
            })
        var g = {}
        ;(d.makeRe = function(t, e) {
            return new y(t, e || {}).makeRe()
        }),
            (y.prototype.makeRe = function() {
                if (this.regexp || !1 === this.regexp) return this.regexp
                var t = this.set
                if (!t.length) return (this.regexp = !1), this.regexp
                var e = this.options,
                    n = e.noglobstar ? a : e.dot ? u : l,
                    r = e.nocase ? 'i' : '',
                    i = t
                        .map(function(t) {
                            return t
                                .map(function(t) {
                                    return t === o
                                        ? n
                                        : 'string' == typeof t
                                        ? (function(t) {
                                              return t.replace(
                                                  /[-[\]{}()*+?.,\\^$|#\s]/g,
                                                  '\\$&'
                                              )
                                          })(t)
                                        : t._src
                                })
                                .join('\\/')
                        })
                        .join('|')
                ;(i = '^(?:' + i + ')$'),
                    this.negate && (i = '^(?!' + i + ').*$')
                try {
                    this.regexp = new RegExp(i, r)
                } catch (t) {
                    this.regexp = !1
                }
                return this.regexp
            }),
            (d.match = function(t, e, n) {
                var r = new y(e, (n = n || {}))
                return (
                    (t = t.filter(function(t) {
                        return r.match(t)
                    })),
                    r.options.nonull && !t.length && t.push(e),
                    t
                )
            }),
            (y.prototype.match = function(t, e) {
                if ((this.debug('match', t, this.pattern), this.comment))
                    return !1
                if (this.empty) return '' === t
                if ('/' === t && e) return !0
                var n = this.options
                '/' !== r.sep && (t = t.split(r.sep).join('/'))
                ;(t = t.split(h)), this.debug(this.pattern, 'split', t)
                var o,
                    i,
                    s = this.set
                for (
                    this.debug(this.pattern, 'set', s), i = t.length - 1;
                    i >= 0 && !(o = t[i]);
                    i--
                );
                for (i = 0; i < s.length; i++) {
                    var c = s[i],
                        a = t
                    if (
                        (n.matchBase && 1 === c.length && (a = [o]),
                        this.matchOne(a, c, e))
                    )
                        return !!n.flipNegate || !this.negate
                }
                return !n.flipNegate && this.negate
            }),
            (y.prototype.matchOne = function(t, e, n) {
                var r = this.options
                this.debug('matchOne', { this: this, file: t, pattern: e }),
                    this.debug('matchOne', t.length, e.length)
                for (
                    var i = 0, s = 0, c = t.length, a = e.length;
                    i < c && s < a;
                    i++, s++
                ) {
                    this.debug('matchOne loop')
                    var u,
                        l = e[s],
                        f = t[i]
                    if ((this.debug(e, l, f), !1 === l)) return !1
                    if (l === o) {
                        this.debug('GLOBSTAR', [e, l, f])
                        var h = i,
                            p = s + 1
                        if (p === a) {
                            for (this.debug('** at the end'); i < c; i++)
                                if (
                                    '.' === t[i] ||
                                    '..' === t[i] ||
                                    (!r.dot && '.' === t[i].charAt(0))
                                )
                                    return !1
                            return !0
                        }
                        for (; h < c; ) {
                            var d = t[h]
                            if (
                                (this.debug('\nglobstar while', t, h, e, p, d),
                                this.matchOne(t.slice(h), e.slice(p), n))
                            )
                                return (
                                    this.debug(
                                        'globstar found match!',
                                        h,
                                        c,
                                        d
                                    ),
                                    !0
                                )
                            if (
                                '.' === d ||
                                '..' === d ||
                                (!r.dot && '.' === d.charAt(0))
                            ) {
                                this.debug('dot detected!', t, h, e, p)
                                break
                            }
                            this.debug(
                                'globstar swallow a segment, and continue'
                            ),
                                h++
                        }
                        return !(
                            !n ||
                            (this.debug('\n>>> no match, partial?', t, h, e, p),
                            h !== c)
                        )
                    }
                    if (
                        ('string' == typeof l
                            ? ((u = r.nocase
                                  ? f.toLowerCase() === l.toLowerCase()
                                  : f === l),
                              this.debug('string match', l, f, u))
                            : ((u = f.match(l)),
                              this.debug('pattern match', l, f, u)),
                        !u)
                    )
                        return !1
                }
                if (i === c && s === a) return !0
                if (i === c) return n
                if (s === a) return i === c - 1 && '' === t[i]
                throw new Error('wtf?')
            })
    },
    function(t, e, n) {
        'use strict'
        function r(t) {
            return '/' === t.charAt(0)
        }
        function o(t) {
            var e = /^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/.exec(
                    t
                ),
                n = e[1] || '',
                r = Boolean(n && ':' !== n.charAt(1))
            return Boolean(e[2] || r)
        }
        ;(t.exports = 'win32' === process.platform ? o : r),
            (t.exports.posix = r),
            (t.exports.win32 = o)
    },
    function(t, e, n) {
        'use strict'
        t.exports = Object.assign(
            {},
            n(14),
            n(15),
            n(20),
            n(40),
            n(42),
            n(48),
            n(3),
            n(52),
            n(53),
            n(54),
            n(5),
            n(8)
        )
        const r = n(4)
        Object.getOwnPropertyDescriptor(r, 'promises') &&
            Object.defineProperty(t.exports, 'promises', {
                get: () => r.promises,
            })
    },
    function(t, e, n) {
        'use strict'
        const r = n(2).fromCallback,
            o = n(1),
            i = [
                'access',
                'appendFile',
                'chmod',
                'chown',
                'close',
                'copyFile',
                'fchmod',
                'fchown',
                'fdatasync',
                'fstat',
                'fsync',
                'ftruncate',
                'futimes',
                'lchown',
                'lchmod',
                'link',
                'lstat',
                'mkdir',
                'mkdtemp',
                'open',
                'readFile',
                'readdir',
                'readlink',
                'realpath',
                'rename',
                'rmdir',
                'stat',
                'symlink',
                'truncate',
                'unlink',
                'utimes',
                'writeFile',
            ].filter(t => 'function' == typeof o[t])
        Object.keys(o).forEach(t => {
            'promises' !== t && (e[t] = o[t])
        }),
            i.forEach(t => {
                e[t] = r(o[t])
            }),
            (e.exists = function(t, e) {
                return 'function' == typeof e
                    ? o.exists(t, e)
                    : new Promise(e => o.exists(t, e))
            }),
            (e.read = function(t, e, n, r, i, s) {
                return 'function' == typeof s
                    ? o.read(t, e, n, r, i, s)
                    : new Promise((s, c) => {
                          o.read(t, e, n, r, i, (t, e, n) => {
                              if (t) return c(t)
                              s({ bytesRead: e, buffer: n })
                          })
                      })
            }),
            (e.write = function(t, e, ...n) {
                return 'function' == typeof n[n.length - 1]
                    ? o.write(t, e, ...n)
                    : new Promise((r, i) => {
                          o.write(t, e, ...n, (t, e, n) => {
                              if (t) return i(t)
                              r({ bytesWritten: e, buffer: n })
                          })
                      })
            })
    },
    function(t, e, n) {
        'use strict'
        t.exports = { copySync: n(36) }
    },
    function(t, e, n) {
        'use strict'
        const r = n(0)
        function o(t) {
            return (t = r.normalize(r.resolve(t)).split(r.sep)).length > 0
                ? t[0]
                : null
        }
        const i = /[<>:"|?*]/
        t.exports = {
            getRootPath: o,
            invalidWin32Path: function(t) {
                const e = o(t)
                return (t = t.replace(e, '')), i.test(t)
            },
        }
    },
    function(t, e, n) {
        'use strict'
        const r = n(1),
            o = n(18),
            i = n(0)
        t.exports = {
            hasMillisRes: function(t) {
                let e = i.join(
                    'millis-test' +
                        Date.now().toString() +
                        Math.random()
                            .toString()
                            .slice(2)
                )
                e = i.join(o.tmpdir(), e)
                const n = new Date(1435410243862)
                r.writeFile(
                    e,
                    'https://github.com/jprichardson/node-fs-extra/pull/141',
                    o => {
                        if (o) return t(o)
                        r.open(e, 'r+', (o, i) => {
                            if (o) return t(o)
                            r.futimes(i, n, n, n => {
                                if (n) return t(n)
                                r.close(i, n => {
                                    if (n) return t(n)
                                    r.stat(e, (e, n) => {
                                        if (e) return t(e)
                                        t(null, n.mtime > 1435410243e3)
                                    })
                                })
                            })
                        })
                    }
                )
            },
            hasMillisResSync: function() {
                let t = i.join(
                    'millis-test-sync' +
                        Date.now().toString() +
                        Math.random()
                            .toString()
                            .slice(2)
                )
                t = i.join(o.tmpdir(), t)
                const e = new Date(1435410243862)
                r.writeFileSync(
                    t,
                    'https://github.com/jprichardson/node-fs-extra/pull/141'
                )
                const n = r.openSync(t, 'r+')
                return (
                    r.futimesSync(n, e, e),
                    r.closeSync(n),
                    r.statSync(t).mtime > 1435410243e3
                )
            },
            timeRemoveMillis: function(t) {
                if ('number' == typeof t) return 1e3 * Math.floor(t / 1e3)
                if (t instanceof Date)
                    return new Date(1e3 * Math.floor(t.getTime() / 1e3))
                throw new Error(
                    'fs-extra: timeRemoveMillis() unknown parameter type'
                )
            },
            utimesMillis: function(t, e, n, o) {
                r.open(t, 'r+', (t, i) => {
                    if (t) return o(t)
                    r.futimes(i, e, n, t => {
                        r.close(i, e => {
                            o && o(t || e)
                        })
                    })
                })
            },
            utimesMillisSync: function(t, e, n) {
                const o = r.openSync(t, 'r+')
                return r.futimesSync(o, e, n), r.closeSync(o)
            },
        }
    },
    function(t, e) {
        t.exports = require('os')
    },
    function(t, e, n) {
        'use strict'
        t.exports = function(t) {
            if ('function' == typeof Buffer.allocUnsafe)
                try {
                    return Buffer.allocUnsafe(t)
                } catch (e) {
                    return new Buffer(t)
                }
            return new Buffer(t)
        }
    },
    function(t, e, n) {
        'use strict'
        const r = n(2).fromCallback
        t.exports = { copy: r(n(39)) }
    },
    function(t, e, n) {
        t.exports = n(55)
    },
    function(t, e, n) {
        var r = n(61),
            o = {}
        for (var i in r) r.hasOwnProperty(i) && (o[r[i]] = i)
        var s = (t.exports = {
            rgb: { channels: 3, labels: 'rgb' },
            hsl: { channels: 3, labels: 'hsl' },
            hsv: { channels: 3, labels: 'hsv' },
            hwb: { channels: 3, labels: 'hwb' },
            cmyk: { channels: 4, labels: 'cmyk' },
            xyz: { channels: 3, labels: 'xyz' },
            lab: { channels: 3, labels: 'lab' },
            lch: { channels: 3, labels: 'lch' },
            hex: { channels: 1, labels: ['hex'] },
            keyword: { channels: 1, labels: ['keyword'] },
            ansi16: { channels: 1, labels: ['ansi16'] },
            ansi256: { channels: 1, labels: ['ansi256'] },
            hcg: { channels: 3, labels: ['h', 'c', 'g'] },
            apple: { channels: 3, labels: ['r16', 'g16', 'b16'] },
            gray: { channels: 1, labels: ['gray'] },
        })
        for (var c in s)
            if (s.hasOwnProperty(c)) {
                if (!('channels' in s[c]))
                    throw new Error('missing channels property: ' + c)
                if (!('labels' in s[c]))
                    throw new Error('missing channel labels property: ' + c)
                if (s[c].labels.length !== s[c].channels)
                    throw new Error('channel and label counts mismatch: ' + c)
                var a = s[c].channels,
                    u = s[c].labels
                delete s[c].channels,
                    delete s[c].labels,
                    Object.defineProperty(s[c], 'channels', { value: a }),
                    Object.defineProperty(s[c], 'labels', { value: u })
            }
        ;(s.rgb.hsl = function(t) {
            var e,
                n,
                r = t[0] / 255,
                o = t[1] / 255,
                i = t[2] / 255,
                s = Math.min(r, o, i),
                c = Math.max(r, o, i),
                a = c - s
            return (
                c === s
                    ? (e = 0)
                    : r === c
                    ? (e = (o - i) / a)
                    : o === c
                    ? (e = 2 + (i - r) / a)
                    : i === c && (e = 4 + (r - o) / a),
                (e = Math.min(60 * e, 360)) < 0 && (e += 360),
                (n = (s + c) / 2),
                [
                    e,
                    100 *
                        (c === s
                            ? 0
                            : n <= 0.5
                            ? a / (c + s)
                            : a / (2 - c - s)),
                    100 * n,
                ]
            )
        }),
            (s.rgb.hsv = function(t) {
                var e,
                    n,
                    r,
                    o,
                    i,
                    s = t[0] / 255,
                    c = t[1] / 255,
                    a = t[2] / 255,
                    u = Math.max(s, c, a),
                    l = u - Math.min(s, c, a),
                    f = function(t) {
                        return (u - t) / 6 / l + 0.5
                    }
                return (
                    0 === l
                        ? (o = i = 0)
                        : ((i = l / u),
                          (e = f(s)),
                          (n = f(c)),
                          (r = f(a)),
                          s === u
                              ? (o = r - n)
                              : c === u
                              ? (o = 1 / 3 + e - r)
                              : a === u && (o = 2 / 3 + n - e),
                          o < 0 ? (o += 1) : o > 1 && (o -= 1)),
                    [360 * o, 100 * i, 100 * u]
                )
            }),
            (s.rgb.hwb = function(t) {
                var e = t[0],
                    n = t[1],
                    r = t[2]
                return [
                    s.rgb.hsl(t)[0],
                    100 * ((1 / 255) * Math.min(e, Math.min(n, r))),
                    100 * (r = 1 - (1 / 255) * Math.max(e, Math.max(n, r))),
                ]
            }),
            (s.rgb.cmyk = function(t) {
                var e,
                    n = t[0] / 255,
                    r = t[1] / 255,
                    o = t[2] / 255
                return [
                    100 *
                        ((1 - n - (e = Math.min(1 - n, 1 - r, 1 - o))) /
                            (1 - e) || 0),
                    100 * ((1 - r - e) / (1 - e) || 0),
                    100 * ((1 - o - e) / (1 - e) || 0),
                    100 * e,
                ]
            }),
            (s.rgb.keyword = function(t) {
                var e = o[t]
                if (e) return e
                var n,
                    i,
                    s,
                    c = 1 / 0
                for (var a in r)
                    if (r.hasOwnProperty(a)) {
                        var u = r[a],
                            l =
                                ((i = t),
                                (s = u),
                                Math.pow(i[0] - s[0], 2) +
                                    Math.pow(i[1] - s[1], 2) +
                                    Math.pow(i[2] - s[2], 2))
                        l < c && ((c = l), (n = a))
                    }
                return n
            }),
            (s.keyword.rgb = function(t) {
                return r[t]
            }),
            (s.rgb.xyz = function(t) {
                var e = t[0] / 255,
                    n = t[1] / 255,
                    r = t[2] / 255
                return [
                    100 *
                        (0.4124 *
                            (e =
                                e > 0.04045
                                    ? Math.pow((e + 0.055) / 1.055, 2.4)
                                    : e / 12.92) +
                            0.3576 *
                                (n =
                                    n > 0.04045
                                        ? Math.pow((n + 0.055) / 1.055, 2.4)
                                        : n / 12.92) +
                            0.1805 *
                                (r =
                                    r > 0.04045
                                        ? Math.pow((r + 0.055) / 1.055, 2.4)
                                        : r / 12.92)),
                    100 * (0.2126 * e + 0.7152 * n + 0.0722 * r),
                    100 * (0.0193 * e + 0.1192 * n + 0.9505 * r),
                ]
            }),
            (s.rgb.lab = function(t) {
                var e = s.rgb.xyz(t),
                    n = e[0],
                    r = e[1],
                    o = e[2]
                return (
                    (r /= 100),
                    (o /= 108.883),
                    (n =
                        (n /= 95.047) > 0.008856
                            ? Math.pow(n, 1 / 3)
                            : 7.787 * n + 16 / 116),
                    [
                        116 *
                            (r =
                                r > 0.008856
                                    ? Math.pow(r, 1 / 3)
                                    : 7.787 * r + 16 / 116) -
                            16,
                        500 * (n - r),
                        200 *
                            (r -
                                (o =
                                    o > 0.008856
                                        ? Math.pow(o, 1 / 3)
                                        : 7.787 * o + 16 / 116)),
                    ]
                )
            }),
            (s.hsl.rgb = function(t) {
                var e,
                    n,
                    r,
                    o,
                    i,
                    s = t[0] / 360,
                    c = t[1] / 100,
                    a = t[2] / 100
                if (0 === c) return [(i = 255 * a), i, i]
                ;(e = 2 * a - (n = a < 0.5 ? a * (1 + c) : a + c - a * c)),
                    (o = [0, 0, 0])
                for (var u = 0; u < 3; u++)
                    (r = s + (1 / 3) * -(u - 1)) < 0 && r++,
                        r > 1 && r--,
                        (i =
                            6 * r < 1
                                ? e + 6 * (n - e) * r
                                : 2 * r < 1
                                ? n
                                : 3 * r < 2
                                ? e + (n - e) * (2 / 3 - r) * 6
                                : e),
                        (o[u] = 255 * i)
                return o
            }),
            (s.hsl.hsv = function(t) {
                var e = t[0],
                    n = t[1] / 100,
                    r = t[2] / 100,
                    o = n,
                    i = Math.max(r, 0.01)
                return (
                    (n *= (r *= 2) <= 1 ? r : 2 - r),
                    (o *= i <= 1 ? i : 2 - i),
                    [
                        e,
                        100 * (0 === r ? (2 * o) / (i + o) : (2 * n) / (r + n)),
                        100 * ((r + n) / 2),
                    ]
                )
            }),
            (s.hsv.rgb = function(t) {
                var e = t[0] / 60,
                    n = t[1] / 100,
                    r = t[2] / 100,
                    o = Math.floor(e) % 6,
                    i = e - Math.floor(e),
                    s = 255 * r * (1 - n),
                    c = 255 * r * (1 - n * i),
                    a = 255 * r * (1 - n * (1 - i))
                switch (((r *= 255), o)) {
                    case 0:
                        return [r, a, s]
                    case 1:
                        return [c, r, s]
                    case 2:
                        return [s, r, a]
                    case 3:
                        return [s, c, r]
                    case 4:
                        return [a, s, r]
                    case 5:
                        return [r, s, c]
                }
            }),
            (s.hsv.hsl = function(t) {
                var e,
                    n,
                    r,
                    o = t[0],
                    i = t[1] / 100,
                    s = t[2] / 100,
                    c = Math.max(s, 0.01)
                return (
                    (r = (2 - i) * s),
                    (n = i * c),
                    [
                        o,
                        100 *
                            (n =
                                (n /= (e = (2 - i) * c) <= 1 ? e : 2 - e) || 0),
                        100 * (r /= 2),
                    ]
                )
            }),
            (s.hwb.rgb = function(t) {
                var e,
                    n,
                    r,
                    o,
                    i,
                    s,
                    c,
                    a = t[0] / 360,
                    u = t[1] / 100,
                    l = t[2] / 100,
                    f = u + l
                switch (
                    (f > 1 && ((u /= f), (l /= f)),
                    (r = 6 * a - (e = Math.floor(6 * a))),
                    0 != (1 & e) && (r = 1 - r),
                    (o = u + r * ((n = 1 - l) - u)),
                    e)
                ) {
                    default:
                    case 6:
                    case 0:
                        ;(i = n), (s = o), (c = u)
                        break
                    case 1:
                        ;(i = o), (s = n), (c = u)
                        break
                    case 2:
                        ;(i = u), (s = n), (c = o)
                        break
                    case 3:
                        ;(i = u), (s = o), (c = n)
                        break
                    case 4:
                        ;(i = o), (s = u), (c = n)
                        break
                    case 5:
                        ;(i = n), (s = u), (c = o)
                }
                return [255 * i, 255 * s, 255 * c]
            }),
            (s.cmyk.rgb = function(t) {
                var e = t[0] / 100,
                    n = t[1] / 100,
                    r = t[2] / 100,
                    o = t[3] / 100
                return [
                    255 * (1 - Math.min(1, e * (1 - o) + o)),
                    255 * (1 - Math.min(1, n * (1 - o) + o)),
                    255 * (1 - Math.min(1, r * (1 - o) + o)),
                ]
            }),
            (s.xyz.rgb = function(t) {
                var e,
                    n,
                    r,
                    o = t[0] / 100,
                    i = t[1] / 100,
                    s = t[2] / 100
                return (
                    (n = -0.9689 * o + 1.8758 * i + 0.0415 * s),
                    (r = 0.0557 * o + -0.204 * i + 1.057 * s),
                    (e =
                        (e = 3.2406 * o + -1.5372 * i + -0.4986 * s) > 0.0031308
                            ? 1.055 * Math.pow(e, 1 / 2.4) - 0.055
                            : 12.92 * e),
                    (n =
                        n > 0.0031308
                            ? 1.055 * Math.pow(n, 1 / 2.4) - 0.055
                            : 12.92 * n),
                    (r =
                        r > 0.0031308
                            ? 1.055 * Math.pow(r, 1 / 2.4) - 0.055
                            : 12.92 * r),
                    [
                        255 * (e = Math.min(Math.max(0, e), 1)),
                        255 * (n = Math.min(Math.max(0, n), 1)),
                        255 * (r = Math.min(Math.max(0, r), 1)),
                    ]
                )
            }),
            (s.xyz.lab = function(t) {
                var e = t[0],
                    n = t[1],
                    r = t[2]
                return (
                    (n /= 100),
                    (r /= 108.883),
                    (e =
                        (e /= 95.047) > 0.008856
                            ? Math.pow(e, 1 / 3)
                            : 7.787 * e + 16 / 116),
                    [
                        116 *
                            (n =
                                n > 0.008856
                                    ? Math.pow(n, 1 / 3)
                                    : 7.787 * n + 16 / 116) -
                            16,
                        500 * (e - n),
                        200 *
                            (n -
                                (r =
                                    r > 0.008856
                                        ? Math.pow(r, 1 / 3)
                                        : 7.787 * r + 16 / 116)),
                    ]
                )
            }),
            (s.lab.xyz = function(t) {
                var e,
                    n,
                    r,
                    o = t[0]
                ;(e = t[1] / 500 + (n = (o + 16) / 116)), (r = n - t[2] / 200)
                var i = Math.pow(n, 3),
                    s = Math.pow(e, 3),
                    c = Math.pow(r, 3)
                return (
                    (n = i > 0.008856 ? i : (n - 16 / 116) / 7.787),
                    (e = s > 0.008856 ? s : (e - 16 / 116) / 7.787),
                    (r = c > 0.008856 ? c : (r - 16 / 116) / 7.787),
                    [(e *= 95.047), (n *= 100), (r *= 108.883)]
                )
            }),
            (s.lab.lch = function(t) {
                var e,
                    n = t[0],
                    r = t[1],
                    o = t[2]
                return (
                    (e = (360 * Math.atan2(o, r)) / 2 / Math.PI) < 0 &&
                        (e += 360),
                    [n, Math.sqrt(r * r + o * o), e]
                )
            }),
            (s.lch.lab = function(t) {
                var e,
                    n = t[0],
                    r = t[1]
                return (
                    (e = (t[2] / 360) * 2 * Math.PI),
                    [n, r * Math.cos(e), r * Math.sin(e)]
                )
            }),
            (s.rgb.ansi16 = function(t) {
                var e = t[0],
                    n = t[1],
                    r = t[2],
                    o = 1 in arguments ? arguments[1] : s.rgb.hsv(t)[2]
                if (0 === (o = Math.round(o / 50))) return 30
                var i =
                    30 +
                    ((Math.round(r / 255) << 2) |
                        (Math.round(n / 255) << 1) |
                        Math.round(e / 255))
                return 2 === o && (i += 60), i
            }),
            (s.hsv.ansi16 = function(t) {
                return s.rgb.ansi16(s.hsv.rgb(t), t[2])
            }),
            (s.rgb.ansi256 = function(t) {
                var e = t[0],
                    n = t[1],
                    r = t[2]
                return e === n && n === r
                    ? e < 8
                        ? 16
                        : e > 248
                        ? 231
                        : Math.round(((e - 8) / 247) * 24) + 232
                    : 16 +
                          36 * Math.round((e / 255) * 5) +
                          6 * Math.round((n / 255) * 5) +
                          Math.round((r / 255) * 5)
            }),
            (s.ansi16.rgb = function(t) {
                var e = t % 10
                if (0 === e || 7 === e)
                    return t > 50 && (e += 3.5), [(e = (e / 10.5) * 255), e, e]
                var n = 0.5 * (1 + ~~(t > 50))
                return [
                    (1 & e) * n * 255,
                    ((e >> 1) & 1) * n * 255,
                    ((e >> 2) & 1) * n * 255,
                ]
            }),
            (s.ansi256.rgb = function(t) {
                if (t >= 232) {
                    var e = 10 * (t - 232) + 8
                    return [e, e, e]
                }
                var n
                return (
                    (t -= 16),
                    [
                        (Math.floor(t / 36) / 5) * 255,
                        (Math.floor((n = t % 36) / 6) / 5) * 255,
                        ((n % 6) / 5) * 255,
                    ]
                )
            }),
            (s.rgb.hex = function(t) {
                var e = (
                    ((255 & Math.round(t[0])) << 16) +
                    ((255 & Math.round(t[1])) << 8) +
                    (255 & Math.round(t[2]))
                )
                    .toString(16)
                    .toUpperCase()
                return '000000'.substring(e.length) + e
            }),
            (s.hex.rgb = function(t) {
                var e = t.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i)
                if (!e) return [0, 0, 0]
                var n = e[0]
                3 === e[0].length &&
                    (n = n
                        .split('')
                        .map(function(t) {
                            return t + t
                        })
                        .join(''))
                var r = parseInt(n, 16)
                return [(r >> 16) & 255, (r >> 8) & 255, 255 & r]
            }),
            (s.rgb.hcg = function(t) {
                var e,
                    n = t[0] / 255,
                    r = t[1] / 255,
                    o = t[2] / 255,
                    i = Math.max(Math.max(n, r), o),
                    s = Math.min(Math.min(n, r), o),
                    c = i - s
                return (
                    (e =
                        c <= 0
                            ? 0
                            : i === n
                            ? ((r - o) / c) % 6
                            : i === r
                            ? 2 + (o - n) / c
                            : 4 + (n - r) / c + 4),
                    (e /= 6),
                    [360 * (e %= 1), 100 * c, 100 * (c < 1 ? s / (1 - c) : 0)]
                )
            }),
            (s.hsl.hcg = function(t) {
                var e = t[1] / 100,
                    n = t[2] / 100,
                    r = 1,
                    o = 0
                return (
                    (r = n < 0.5 ? 2 * e * n : 2 * e * (1 - n)) < 1 &&
                        (o = (n - 0.5 * r) / (1 - r)),
                    [t[0], 100 * r, 100 * o]
                )
            }),
            (s.hsv.hcg = function(t) {
                var e = t[1] / 100,
                    n = t[2] / 100,
                    r = e * n,
                    o = 0
                return (
                    r < 1 && (o = (n - r) / (1 - r)), [t[0], 100 * r, 100 * o]
                )
            }),
            (s.hcg.rgb = function(t) {
                var e = t[0] / 360,
                    n = t[1] / 100,
                    r = t[2] / 100
                if (0 === n) return [255 * r, 255 * r, 255 * r]
                var o,
                    i = [0, 0, 0],
                    s = (e % 1) * 6,
                    c = s % 1,
                    a = 1 - c
                switch (Math.floor(s)) {
                    case 0:
                        ;(i[0] = 1), (i[1] = c), (i[2] = 0)
                        break
                    case 1:
                        ;(i[0] = a), (i[1] = 1), (i[2] = 0)
                        break
                    case 2:
                        ;(i[0] = 0), (i[1] = 1), (i[2] = c)
                        break
                    case 3:
                        ;(i[0] = 0), (i[1] = a), (i[2] = 1)
                        break
                    case 4:
                        ;(i[0] = c), (i[1] = 0), (i[2] = 1)
                        break
                    default:
                        ;(i[0] = 1), (i[1] = 0), (i[2] = a)
                }
                return (
                    (o = (1 - n) * r),
                    [
                        255 * (n * i[0] + o),
                        255 * (n * i[1] + o),
                        255 * (n * i[2] + o),
                    ]
                )
            }),
            (s.hcg.hsv = function(t) {
                var e = t[1] / 100,
                    n = e + (t[2] / 100) * (1 - e),
                    r = 0
                return n > 0 && (r = e / n), [t[0], 100 * r, 100 * n]
            }),
            (s.hcg.hsl = function(t) {
                var e = t[1] / 100,
                    n = (t[2] / 100) * (1 - e) + 0.5 * e,
                    r = 0
                return (
                    n > 0 && n < 0.5
                        ? (r = e / (2 * n))
                        : n >= 0.5 && n < 1 && (r = e / (2 * (1 - n))),
                    [t[0], 100 * r, 100 * n]
                )
            }),
            (s.hcg.hwb = function(t) {
                var e = t[1] / 100,
                    n = e + (t[2] / 100) * (1 - e)
                return [t[0], 100 * (n - e), 100 * (1 - n)]
            }),
            (s.hwb.hcg = function(t) {
                var e = t[1] / 100,
                    n = 1 - t[2] / 100,
                    r = n - e,
                    o = 0
                return (
                    r < 1 && (o = (n - r) / (1 - r)), [t[0], 100 * r, 100 * o]
                )
            }),
            (s.apple.rgb = function(t) {
                return [
                    (t[0] / 65535) * 255,
                    (t[1] / 65535) * 255,
                    (t[2] / 65535) * 255,
                ]
            }),
            (s.rgb.apple = function(t) {
                return [
                    (t[0] / 255) * 65535,
                    (t[1] / 255) * 65535,
                    (t[2] / 255) * 65535,
                ]
            }),
            (s.gray.rgb = function(t) {
                return [
                    (t[0] / 100) * 255,
                    (t[0] / 100) * 255,
                    (t[0] / 100) * 255,
                ]
            }),
            (s.gray.hsl = s.gray.hsv = function(t) {
                return [0, 0, t[0]]
            }),
            (s.gray.hwb = function(t) {
                return [0, 100, t[0]]
            }),
            (s.gray.cmyk = function(t) {
                return [0, 0, 0, t[0]]
            }),
            (s.gray.lab = function(t) {
                return [t[0], 0, 0]
            }),
            (s.gray.hex = function(t) {
                var e = 255 & Math.round((t[0] / 100) * 255),
                    n = ((e << 16) + (e << 8) + e).toString(16).toUpperCase()
                return '000000'.substring(n.length) + n
            }),
            (s.rgb.gray = function(t) {
                return [((t[0] + t[1] + t[2]) / 3 / 255) * 100]
            })
    },
    function(t, e, n) {
        ;(t.exports = l),
            (l.realpath = l),
            (l.sync = f),
            (l.realpathSync = f),
            (l.monkeypatch = function() {
                ;(r.realpath = l), (r.realpathSync = f)
            }),
            (l.unmonkeypatch = function() {
                ;(r.realpath = o), (r.realpathSync = i)
            })
        var r = n(4),
            o = r.realpath,
            i = r.realpathSync,
            s = process.version,
            c = /^v[0-5]\./.test(s),
            a = n(68)
        function u(t) {
            return (
                t &&
                'realpath' === t.syscall &&
                ('ELOOP' === t.code ||
                    'ENOMEM' === t.code ||
                    'ENAMETOOLONG' === t.code)
            )
        }
        function l(t, e, n) {
            if (c) return o(t, e, n)
            'function' == typeof e && ((n = e), (e = null)),
                o(t, e, function(r, o) {
                    u(r) ? a.realpath(t, e, n) : n(r, o)
                })
        }
        function f(t, e) {
            if (c) return i(t, e)
            try {
                return i(t, e)
            } catch (n) {
                if (u(n)) return a.realpathSync(t, e)
                throw n
            }
        }
    },
    function(t, e, n) {
        function r(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }
        ;(e.alphasort = u),
            (e.alphasorti = a),
            (e.setopts = function(t, e, n) {
                n || (n = {})
                if (n.matchBase && -1 === e.indexOf('/')) {
                    if (n.noglobstar)
                        throw new Error('base matching requires globstar')
                    e = '**/' + e
                }
                ;(t.silent = !!n.silent),
                    (t.pattern = e),
                    (t.strict = !1 !== n.strict),
                    (t.realpath = !!n.realpath),
                    (t.realpathCache = n.realpathCache || Object.create(null)),
                    (t.follow = !!n.follow),
                    (t.dot = !!n.dot),
                    (t.mark = !!n.mark),
                    (t.nodir = !!n.nodir),
                    t.nodir && (t.mark = !0)
                ;(t.sync = !!n.sync),
                    (t.nounique = !!n.nounique),
                    (t.nonull = !!n.nonull),
                    (t.nosort = !!n.nosort),
                    (t.nocase = !!n.nocase),
                    (t.stat = !!n.stat),
                    (t.noprocess = !!n.noprocess),
                    (t.absolute = !!n.absolute),
                    (t.maxLength = n.maxLength || 1 / 0),
                    (t.cache = n.cache || Object.create(null)),
                    (t.statCache = n.statCache || Object.create(null)),
                    (t.symlinks = n.symlinks || Object.create(null)),
                    (function(t, e) {
                        ;(t.ignore = e.ignore || []),
                            Array.isArray(t.ignore) || (t.ignore = [t.ignore])
                        t.ignore.length && (t.ignore = t.ignore.map(l))
                    })(t, n),
                    (t.changedCwd = !1)
                var i = process.cwd()
                r(n, 'cwd')
                    ? ((t.cwd = o.resolve(n.cwd)), (t.changedCwd = t.cwd !== i))
                    : (t.cwd = i)
                ;(t.root = n.root || o.resolve(t.cwd, '/')),
                    (t.root = o.resolve(t.root)),
                    'win32' === process.platform &&
                        (t.root = t.root.replace(/\\/g, '/'))
                ;(t.cwdAbs = s(t.cwd) ? t.cwd : f(t, t.cwd)),
                    'win32' === process.platform &&
                        (t.cwdAbs = t.cwdAbs.replace(/\\/g, '/'))
                ;(t.nomount = !!n.nomount),
                    (n.nonegate = !0),
                    (n.nocomment = !0),
                    (t.minimatch = new c(e, n)),
                    (t.options = t.minimatch.options)
            }),
            (e.ownProp = r),
            (e.makeAbs = f),
            (e.finish = function(t) {
                for (
                    var e = t.nounique,
                        n = e ? [] : Object.create(null),
                        r = 0,
                        o = t.matches.length;
                    r < o;
                    r++
                ) {
                    var i = t.matches[r]
                    if (i && 0 !== Object.keys(i).length) {
                        var s = Object.keys(i)
                        e
                            ? n.push.apply(n, s)
                            : s.forEach(function(t) {
                                  n[t] = !0
                              })
                    } else if (t.nonull) {
                        var c = t.minimatch.globSet[r]
                        e ? n.push(c) : (n[c] = !0)
                    }
                }
                e || (n = Object.keys(n))
                t.nosort || (n = n.sort(t.nocase ? a : u))
                if (t.mark) {
                    for (r = 0; r < n.length; r++) n[r] = t._mark(n[r])
                    t.nodir &&
                        (n = n.filter(function(e) {
                            var n = !/\/$/.test(e),
                                r = t.cache[e] || t.cache[f(t, e)]
                            return (
                                n &&
                                    r &&
                                    (n = 'DIR' !== r && !Array.isArray(r)),
                                n
                            )
                        }))
                }
                t.ignore.length &&
                    (n = n.filter(function(e) {
                        return !h(t, e)
                    }))
                t.found = n
            }),
            (e.mark = function(t, e) {
                var n = f(t, e),
                    r = t.cache[n],
                    o = e
                if (r) {
                    var i = 'DIR' === r || Array.isArray(r),
                        s = '/' === e.slice(-1)
                    if (
                        (i && !s ? (o += '/') : !i && s && (o = o.slice(0, -1)),
                        o !== e)
                    ) {
                        var c = f(t, o)
                        ;(t.statCache[c] = t.statCache[n]),
                            (t.cache[c] = t.cache[n])
                    }
                }
                return o
            }),
            (e.isIgnored = h),
            (e.childrenIgnored = function(t, e) {
                return (
                    !!t.ignore.length &&
                    t.ignore.some(function(t) {
                        return !(!t.gmatcher || !t.gmatcher.match(e))
                    })
                )
            })
        var o = n(0),
            i = n(11),
            s = n(12),
            c = i.Minimatch
        function a(t, e) {
            return t.toLowerCase().localeCompare(e.toLowerCase())
        }
        function u(t, e) {
            return t.localeCompare(e)
        }
        function l(t) {
            var e = null
            if ('/**' === t.slice(-3)) {
                var n = t.replace(/(\/\*\*)+$/, '')
                e = new c(n, { dot: !0 })
            }
            return { matcher: new c(t, { dot: !0 }), gmatcher: e }
        }
        function f(t, e) {
            var n = e
            return (
                (n =
                    '/' === e.charAt(0)
                        ? o.join(t.root, e)
                        : s(e) || '' === e
                        ? e
                        : t.changedCwd
                        ? o.resolve(t.cwd, e)
                        : o.resolve(e)),
                'win32' === process.platform && (n = n.replace(/\\/g, '/')),
                n
            )
        }
        function h(t, e) {
            return (
                !!t.ignore.length &&
                t.ignore.some(function(t) {
                    return (
                        t.matcher.match(e) ||
                        !(!t.gmatcher || !t.gmatcher.match(e))
                    )
                })
            )
        }
    },
    function(t, e) {
        t.exports = function t(e, n) {
            if (e && n) return t(e)(n)
            if ('function' != typeof e)
                throw new TypeError('need wrapper function')
            return (
                Object.keys(e).forEach(function(t) {
                    r[t] = e[t]
                }),
                r
            )
            function r() {
                for (
                    var t = new Array(arguments.length), n = 0;
                    n < t.length;
                    n++
                )
                    t[n] = arguments[n]
                var r = e.apply(this, t),
                    o = t[t.length - 1]
                return (
                    'function' == typeof r &&
                        r !== o &&
                        Object.keys(o).forEach(function(t) {
                            r[t] = o[t]
                        }),
                    r
                )
            }
        }
    },
    function(t, e, n) {
        var r = n(25)
        function o(t) {
            var e = function() {
                return e.called
                    ? e.value
                    : ((e.called = !0), (e.value = t.apply(this, arguments)))
            }
            return (e.called = !1), e
        }
        function i(t) {
            var e = function() {
                    if (e.called) throw new Error(e.onceError)
                    return (e.called = !0), (e.value = t.apply(this, arguments))
                },
                n = t.name || 'Function wrapped with `once`'
            return (
                (e.onceError = n + " shouldn't be called more than once"),
                (e.called = !1),
                e
            )
        }
        ;(t.exports = r(o)),
            (t.exports.strict = r(i)),
            (o.proto = o(function() {
                Object.defineProperty(Function.prototype, 'once', {
                    value: function() {
                        return o(this)
                    },
                    configurable: !0,
                }),
                    Object.defineProperty(Function.prototype, 'onceStrict', {
                        value: function() {
                            return i(this)
                        },
                        configurable: !0,
                    })
            }))
    },
    function(t, e, n) {
        'use strict'
        t.exports = function(t, e, n, r, o) {
            Array.isArray(e) || (e = [e])
            const i = Array.isArray(n),
                s = { file: r }
            o && ((s.numMatches = 0), (s.numReplacements = 0))
            const c = e.reduce((t, e, c) => {
                'function' == typeof e && (e = e(r))
                let a = (function(t, e, n) {
                    return e && void 0 === t[n] ? null : e ? t[n] : t
                })(n, i, c)
                if (null === a) return t
                if ('function' == typeof a) {
                    const t = a
                    a = (...e) => t(...e, r)
                }
                if (o) {
                    const n = t.match(e)
                    if (n) {
                        const t = n.filter(t => t !== a)
                        ;(s.numMatches += n.length),
                            (s.numReplacements += t.length)
                    }
                }
                return t.replace(e, a)
            }, t)
            return (s.hasChanged = c !== t), [s, c]
        }
    },
    function(t, e, n) {
        const r = n(29),
            o = n(30),
            i = n(82),
            s = /(^[A-Z])([a-zA-Z]+)$/,
            c = (t = '') => ({
                prompt: t,
                ignoreFocusOut: !0,
                valueSelection: [-1, -1],
                validateInput: t =>
                    s.test(t)
                        ? null
                        : 'Name must be capitalized and have no numbers, spaces, or special characters.',
            }),
            a = t => {
                const e = r.commands.registerCommand(
                    'templar.createFromTemplate',
                    ({ fsPath: t }) => {
                        const e = r.workspace.getConfiguration('templar'),
                            n = r.workspace.workspaceFolders.path,
                            i = o(t, n, e)
                        r.window
                            .showInputBox(c('Create new Component Folder'))
                            .then(t => {
                                i(t)
                                    .then(t =>
                                        r.window.showInformationMessage(t)
                                    )
                                    .catch(t => r.window.showErrorMessage(t))
                            })
                    }
                )
                t.subscriptions.push(e)
                const n = r.commands.registerCommand(
                    'templar.renameFolder',
                    ({ fsPath: t }) => {
                        const e = i(t)
                        r.window
                            .showInputBox(
                                c('What would you like to rename the folder?')
                            )
                            .then(t => {
                                e(t)
                                    .then(t =>
                                        r.window.showInformationMessage(t)
                                    )
                                    .catch(t => r.window.showErrorMessage(t))
                            })
                    }
                )
                t.subscriptions.push(n)
            }
        ;(e.activate = a),
            (t.exports = { activate: a, deactivate: function() {} })
    },
    function(t, e) {
        t.exports = require('vscode')
    },
    function(t, e, n) {
        const r = n(0),
            o = n(13),
            i = n(21),
            s = n(81),
            c = /(^[A-Z])([a-zA-Z]+)$/
        t.exports = (t, e, n) => e =>
            new Promise((a, u) => {
                const {
                    useCustomTemplate: l = !1,
                    pathToCustomTemplate: f = '',
                    generateStoriesFile: h = !0,
                    generateStylesFile: p = !0,
                    generateTestFile: d = !0,
                } = n
                let y = e,
                    m = r.join(t, e)
                if (o.existsSync(m))
                    throw 'A folder with that name already exists.'
                const g = (t, e, n) => {
                    const s = o.readdirSync(n),
                        c = new RegExp(t, 'g')
                    s.forEach(i => {
                        if (i.includes(t)) {
                            const t = r.resolve(n, i),
                                s = i.replace(c, e),
                                a = r.resolve(n, s)
                            o.renameSync(t, a),
                                i.includes('stories') &&
                                    'disabled' === h &&
                                    o.unlink(a),
                                i.includes('styles') &&
                                    'disabled' === p &&
                                    o.unlink(a),
                                i.includes('test') &&
                                    'disabled' === d &&
                                    o.unlink(a)
                        }
                    }),
                        i({ files: n + '/*.js', from: c, to: e })
                }
                try {
                    if (l) {
                        if (!o.existsSync(r.resolve(t, f)))
                            throw 'The custom template path could not be found.'
                        const e = r.resolve(t, f),
                            n = r.basename(e)
                        if (!c.test(n)) {
                            throw 'The template folder name you are trying to use should be capitalized and have no numbers, spaces, or special characters.'
                        }
                        o.copySync(e, m), g(n, y, m)
                    } else
                        o.mkdirSync(m),
                            Object.values(s).forEach(
                                ({ name: t, content: e }) => {
                                    o.writeFileSync(r.join(m, t), e)
                                }
                            ),
                            g('Template', y, m)
                    a(
                        `Your new component Folder "${y}" was succesfully created!`
                    )
                } catch (t) {
                    u(t)
                }
            })
    },
    function(t, e, n) {
        var r = n(32),
            o = process.cwd,
            i = null,
            s = process.env.GRACEFUL_FS_PLATFORM || process.platform
        process.cwd = function() {
            return i || (i = o.call(process)), i
        }
        try {
            process.cwd()
        } catch (t) {}
        var c = process.chdir
        ;(process.chdir = function(t) {
            ;(i = null), c.call(process, t)
        }),
            (t.exports = function(t) {
                r.hasOwnProperty('O_SYMLINK') &&
                    process.version.match(/^v0\.6\.[0-2]|^v0\.5\./) &&
                    (function(t) {
                        ;(t.lchmod = function(e, n, o) {
                            t.open(e, r.O_WRONLY | r.O_SYMLINK, n, function(
                                e,
                                r
                            ) {
                                e
                                    ? o && o(e)
                                    : t.fchmod(r, n, function(e) {
                                          t.close(r, function(t) {
                                              o && o(e || t)
                                          })
                                      })
                            })
                        }),
                            (t.lchmodSync = function(e, n) {
                                var o,
                                    i = t.openSync(
                                        e,
                                        r.O_WRONLY | r.O_SYMLINK,
                                        n
                                    ),
                                    s = !0
                                try {
                                    ;(o = t.fchmodSync(i, n)), (s = !1)
                                } finally {
                                    if (s)
                                        try {
                                            t.closeSync(i)
                                        } catch (t) {}
                                    else t.closeSync(i)
                                }
                                return o
                            })
                    })(t)
                t.lutimes ||
                    (function(t) {
                        r.hasOwnProperty('O_SYMLINK')
                            ? ((t.lutimes = function(e, n, o, i) {
                                  t.open(e, r.O_SYMLINK, function(e, r) {
                                      e
                                          ? i && i(e)
                                          : t.futimes(r, n, o, function(e) {
                                                t.close(r, function(t) {
                                                    i && i(e || t)
                                                })
                                            })
                                  })
                              }),
                              (t.lutimesSync = function(e, n, o) {
                                  var i,
                                      s = t.openSync(e, r.O_SYMLINK),
                                      c = !0
                                  try {
                                      ;(i = t.futimesSync(s, n, o)), (c = !1)
                                  } finally {
                                      if (c)
                                          try {
                                              t.closeSync(s)
                                          } catch (t) {}
                                      else t.closeSync(s)
                                  }
                                  return i
                              }))
                            : ((t.lutimes = function(t, e, n, r) {
                                  r && process.nextTick(r)
                              }),
                              (t.lutimesSync = function() {}))
                    })(t)
                ;(t.chown = i(t.chown)),
                    (t.fchown = i(t.fchown)),
                    (t.lchown = i(t.lchown)),
                    (t.chmod = n(t.chmod)),
                    (t.fchmod = n(t.fchmod)),
                    (t.lchmod = n(t.lchmod)),
                    (t.chownSync = c(t.chownSync)),
                    (t.fchownSync = c(t.fchownSync)),
                    (t.lchownSync = c(t.lchownSync)),
                    (t.chmodSync = o(t.chmodSync)),
                    (t.fchmodSync = o(t.fchmodSync)),
                    (t.lchmodSync = o(t.lchmodSync)),
                    (t.stat = a(t.stat)),
                    (t.fstat = a(t.fstat)),
                    (t.lstat = a(t.lstat)),
                    (t.statSync = u(t.statSync)),
                    (t.fstatSync = u(t.fstatSync)),
                    (t.lstatSync = u(t.lstatSync)),
                    t.lchmod ||
                        ((t.lchmod = function(t, e, n) {
                            n && process.nextTick(n)
                        }),
                        (t.lchmodSync = function() {}))
                t.lchown ||
                    ((t.lchown = function(t, e, n, r) {
                        r && process.nextTick(r)
                    }),
                    (t.lchownSync = function() {}))
                'win32' === s &&
                    (t.rename =
                        ((e = t.rename),
                        function(n, r, o) {
                            var i = Date.now(),
                                s = 0
                            e(n, r, function c(a) {
                                if (
                                    a &&
                                    ('EACCES' === a.code ||
                                        'EPERM' === a.code) &&
                                    Date.now() - i < 6e4
                                )
                                    return (
                                        setTimeout(function() {
                                            t.stat(r, function(t, i) {
                                                t && 'ENOENT' === t.code
                                                    ? e(n, r, c)
                                                    : o(a)
                                            })
                                        }, s),
                                        void (s < 100 && (s += 10))
                                    )
                                o && o(a)
                            })
                        }))
                var e
                function n(e) {
                    return e
                        ? function(n, r, o) {
                              return e.call(t, n, r, function(t) {
                                  l(t) && (t = null),
                                      o && o.apply(this, arguments)
                              })
                          }
                        : e
                }
                function o(e) {
                    return e
                        ? function(n, r) {
                              try {
                                  return e.call(t, n, r)
                              } catch (t) {
                                  if (!l(t)) throw t
                              }
                          }
                        : e
                }
                function i(e) {
                    return e
                        ? function(n, r, o, i) {
                              return e.call(t, n, r, o, function(t) {
                                  l(t) && (t = null),
                                      i && i.apply(this, arguments)
                              })
                          }
                        : e
                }
                function c(e) {
                    return e
                        ? function(n, r, o) {
                              try {
                                  return e.call(t, n, r, o)
                              } catch (t) {
                                  if (!l(t)) throw t
                              }
                          }
                        : e
                }
                function a(e) {
                    return e
                        ? function(n, r, o) {
                              function i(t, e) {
                                  e &&
                                      (e.uid < 0 && (e.uid += 4294967296),
                                      e.gid < 0 && (e.gid += 4294967296)),
                                      o && o.apply(this, arguments)
                              }
                              return (
                                  'function' == typeof r &&
                                      ((o = r), (r = null)),
                                  r ? e.call(t, n, r, i) : e.call(t, n, i)
                              )
                          }
                        : e
                }
                function u(e) {
                    return e
                        ? function(n, r) {
                              var o = r ? e.call(t, n, r) : e.call(t, n)
                              return (
                                  o.uid < 0 && (o.uid += 4294967296),
                                  o.gid < 0 && (o.gid += 4294967296),
                                  o
                              )
                          }
                        : e
                }
                function l(t) {
                    return (
                        !t ||
                        'ENOSYS' === t.code ||
                        !(
                            (process.getuid && 0 === process.getuid()) ||
                            ('EINVAL' !== t.code && 'EPERM' !== t.code)
                        )
                    )
                }
                ;(t.read =
                    ((h = t.read),
                    function(e, n, r, o, i, s) {
                        var c
                        if (s && 'function' == typeof s) {
                            var a = 0
                            c = function(u, l, f) {
                                if (u && 'EAGAIN' === u.code && a < 10)
                                    return a++, h.call(t, e, n, r, o, i, c)
                                s.apply(this, arguments)
                            }
                        }
                        return h.call(t, e, n, r, o, i, c)
                    })),
                    (t.readSync =
                        ((f = t.readSync),
                        function(e, n, r, o, i) {
                            for (var s = 0; ; )
                                try {
                                    return f.call(t, e, n, r, o, i)
                                } catch (t) {
                                    if ('EAGAIN' === t.code && s < 10) {
                                        s++
                                        continue
                                    }
                                    throw t
                                }
                        }))
                var f
                var h
            })
    },
    function(t, e) {
        t.exports = require('constants')
    },
    function(t, e, n) {
        var r = n(34).Stream
        t.exports = function(t) {
            return {
                ReadStream: function e(n, o) {
                    if (!(this instanceof e)) return new e(n, o)
                    r.call(this)
                    var i = this
                    ;(this.path = n),
                        (this.fd = null),
                        (this.readable = !0),
                        (this.paused = !1),
                        (this.flags = 'r'),
                        (this.mode = 438),
                        (this.bufferSize = 65536),
                        (o = o || {})
                    for (
                        var s = Object.keys(o), c = 0, a = s.length;
                        c < a;
                        c++
                    ) {
                        var u = s[c]
                        this[u] = o[u]
                    }
                    this.encoding && this.setEncoding(this.encoding)
                    if (void 0 !== this.start) {
                        if ('number' != typeof this.start)
                            throw TypeError('start must be a Number')
                        if (void 0 === this.end) this.end = 1 / 0
                        else if ('number' != typeof this.end)
                            throw TypeError('end must be a Number')
                        if (this.start > this.end)
                            throw new Error('start must be <= end')
                        this.pos = this.start
                    }
                    if (null !== this.fd)
                        return void process.nextTick(function() {
                            i._read()
                        })
                    t.open(this.path, this.flags, this.mode, function(t, e) {
                        if (t) return i.emit('error', t), void (i.readable = !1)
                        ;(i.fd = e), i.emit('open', e), i._read()
                    })
                },
                WriteStream: function e(n, o) {
                    if (!(this instanceof e)) return new e(n, o)
                    r.call(this),
                        (this.path = n),
                        (this.fd = null),
                        (this.writable = !0),
                        (this.flags = 'w'),
                        (this.encoding = 'binary'),
                        (this.mode = 438),
                        (this.bytesWritten = 0),
                        (o = o || {})
                    for (
                        var i = Object.keys(o), s = 0, c = i.length;
                        s < c;
                        s++
                    ) {
                        var a = i[s]
                        this[a] = o[a]
                    }
                    if (void 0 !== this.start) {
                        if ('number' != typeof this.start)
                            throw TypeError('start must be a Number')
                        if (this.start < 0)
                            throw new Error('start must be >= zero')
                        this.pos = this.start
                    }
                    ;(this.busy = !1),
                        (this._queue = []),
                        null === this.fd &&
                            ((this._open = t.open),
                            this._queue.push([
                                this._open,
                                this.path,
                                this.flags,
                                this.mode,
                                void 0,
                            ]),
                            this.flush())
                },
            }
        }
    },
    function(t, e) {
        t.exports = require('stream')
    },
    function(t, e, n) {
        'use strict'
        t.exports = function(t) {
            if (null === t || 'object' != typeof t) return t
            if (t instanceof Object) var e = { __proto__: t.__proto__ }
            else e = Object.create(null)
            return (
                Object.getOwnPropertyNames(t).forEach(function(n) {
                    Object.defineProperty(
                        e,
                        n,
                        Object.getOwnPropertyDescriptor(t, n)
                    )
                }),
                e
            )
        }
    },
    function(t, e, n) {
        'use strict'
        const r = n(1),
            o = n(0),
            i = n(3).mkdirsSync,
            s = n(17).utimesMillisSync,
            c = Symbol('notExist')
        function a(t, e, n, i) {
            if (!i.filter || i.filter(e, n))
                return (function(t, e, n, i) {
                    const s = (i.dereference ? r.statSync : r.lstatSync)(e)
                    if (s.isDirectory())
                        return (function(t, e, n, o, i) {
                            if (e === c)
                                return (function(t, e, n, o) {
                                    return (
                                        r.mkdirSync(n),
                                        l(e, n, o),
                                        r.chmodSync(n, t.mode)
                                    )
                                })(t, n, o, i)
                            if (e && !e.isDirectory())
                                throw new Error(
                                    `Cannot overwrite non-directory '${o}' with directory '${n}'.`
                                )
                            return l(n, o, i)
                        })(s, t, e, n, i)
                    if (
                        s.isFile() ||
                        s.isCharacterDevice() ||
                        s.isBlockDevice()
                    )
                        return (function(t, e, n, o, i) {
                            return e === c
                                ? u(t, n, o, i)
                                : (function(t, e, n, o) {
                                      if (o.overwrite)
                                          return r.unlinkSync(n), u(t, e, n, o)
                                      if (o.errorOnExist)
                                          throw new Error(
                                              `'${n}' already exists`
                                          )
                                  })(t, n, o, i)
                        })(s, t, e, n, i)
                    if (s.isSymbolicLink())
                        return (function(t, e, n, i) {
                            let s = r.readlinkSync(e)
                            i.dereference && (s = o.resolve(process.cwd(), s))
                            if (t === c) return r.symlinkSync(s, n)
                            {
                                let t
                                try {
                                    t = r.readlinkSync(n)
                                } catch (t) {
                                    if (
                                        'EINVAL' === t.code ||
                                        'UNKNOWN' === t.code
                                    )
                                        return r.symlinkSync(s, n)
                                    throw t
                                }
                                if (
                                    (i.dereference &&
                                        (t = o.resolve(process.cwd(), t)),
                                    f(s, t))
                                )
                                    throw new Error(
                                        `Cannot copy '${s}' to a subdirectory of itself, '${t}'.`
                                    )
                                if (r.statSync(n).isDirectory() && f(t, s))
                                    throw new Error(
                                        `Cannot overwrite '${t}' with '${s}'.`
                                    )
                                return (function(t, e) {
                                    return r.unlinkSync(e), r.symlinkSync(t, e)
                                })(s, n)
                            }
                        })(t, e, n, i)
                })(t, e, n, i)
        }
        function u(t, e, o, i) {
            return 'function' == typeof r.copyFileSync
                ? (r.copyFileSync(e, o),
                  r.chmodSync(o, t.mode),
                  i.preserveTimestamps ? s(o, t.atime, t.mtime) : void 0)
                : (function(t, e, o, i) {
                      const s = n(19)(65536),
                          c = r.openSync(e, 'r'),
                          a = r.openSync(o, 'w', t.mode)
                      let u = 0
                      for (; u < t.size; ) {
                          const t = r.readSync(c, s, 0, 65536, u)
                          r.writeSync(a, s, 0, t), (u += t)
                      }
                      i.preserveTimestamps && r.futimesSync(a, t.atime, t.mtime)
                      r.closeSync(c), r.closeSync(a)
                  })(t, e, o, i)
        }
        function l(t, e, n) {
            r.readdirSync(t).forEach(r =>
                (function(t, e, n, r) {
                    const i = o.join(e, t),
                        s = o.join(n, t)
                    return a(h(i, s), i, s, r)
                })(r, t, e, n)
            )
        }
        function f(t, e) {
            const n = o.resolve(t).split(o.sep),
                r = o.resolve(e).split(o.sep)
            return n.reduce((t, e, n) => t && r[n] === e, !0)
        }
        function h(t, e) {
            const { srcStat: n, destStat: o } = (function(t, e) {
                const n = r.statSync(t)
                let o
                try {
                    o = r.statSync(e)
                } catch (t) {
                    if ('ENOENT' === t.code) return { srcStat: n, destStat: c }
                    throw t
                }
                return { srcStat: n, destStat: o }
            })(t, e)
            if (o.ino && o.ino === n.ino)
                throw new Error('Source and destination must not be the same.')
            if (n.isDirectory() && f(t, e))
                throw new Error(
                    `Cannot copy '${t}' to a subdirectory of itself, '${e}'.`
                )
            return o
        }
        t.exports = function(t, e, n) {
            'function' == typeof n && (n = { filter: n }),
                ((n = n || {}).clobber = !('clobber' in n) || !!n.clobber),
                (n.overwrite = 'overwrite' in n ? !!n.overwrite : n.clobber),
                n.preserveTimestamps &&
                    'ia32' === process.arch &&
                    console.warn(
                        'fs-extra: Using the preserveTimestamps option in 32-bit node is not recommended;\n\n    see https://github.com/jprichardson/node-fs-extra/issues/269'
                    )
            const s = h(t, e)
            if (n.filter && !n.filter(t, e)) return
            const c = o.dirname(e)
            return r.existsSync(c) || i(c), a(s, t, e, n)
        }
    },
    function(t, e, n) {
        'use strict'
        const r = n(1),
            o = n(0),
            i = n(16).invalidWin32Path,
            s = parseInt('0777', 8)
        t.exports = function t(e, n, c, a) {
            if (
                ('function' == typeof n
                    ? ((c = n), (n = {}))
                    : (n && 'object' == typeof n) || (n = { mode: n }),
                'win32' === process.platform && i(e))
            ) {
                const t = new Error(
                    e + ' contains invalid WIN32 path characters.'
                )
                return (t.code = 'EINVAL'), c(t)
            }
            let u = n.mode
            const l = n.fs || r
            void 0 === u && (u = s & ~process.umask()),
                a || (a = null),
                (c = c || function() {}),
                (e = o.resolve(e)),
                l.mkdir(e, u, r => {
                    if (!r) return c(null, (a = a || e))
                    switch (r.code) {
                        case 'ENOENT':
                            if (o.dirname(e) === e) return c(r)
                            t(o.dirname(e), n, (r, o) => {
                                r ? c(r, o) : t(e, n, c, o)
                            })
                            break
                        default:
                            l.stat(e, (t, e) => {
                                t || !e.isDirectory() ? c(r, a) : c(null, a)
                            })
                    }
                })
        }
    },
    function(t, e, n) {
        'use strict'
        const r = n(1),
            o = n(0),
            i = n(16).invalidWin32Path,
            s = parseInt('0777', 8)
        t.exports = function t(e, n, c) {
            ;(n && 'object' == typeof n) || (n = { mode: n })
            let a = n.mode
            const u = n.fs || r
            if ('win32' === process.platform && i(e)) {
                const t = new Error(
                    e + ' contains invalid WIN32 path characters.'
                )
                throw ((t.code = 'EINVAL'), t)
            }
            void 0 === a && (a = s & ~process.umask()),
                c || (c = null),
                (e = o.resolve(e))
            try {
                u.mkdirSync(e, a), (c = c || e)
            } catch (r) {
                if ('ENOENT' === r.code) {
                    if (o.dirname(e) === e) throw r
                    ;(c = t(o.dirname(e), n, c)), t(e, n, c)
                } else {
                    let t
                    try {
                        t = u.statSync(e)
                    } catch (t) {
                        throw r
                    }
                    if (!t.isDirectory()) throw r
                }
            }
            return c
        }
    },
    function(t, e, n) {
        'use strict'
        const r = n(1),
            o = n(0),
            i = n(3).mkdirs,
            s = n(5).pathExists,
            c = n(17).utimesMillis,
            a = Symbol('notExist')
        function u(t, e, n, r, c) {
            const a = o.dirname(n)
            s(a, (o, s) =>
                o
                    ? c(o)
                    : s
                    ? f(t, e, n, r, c)
                    : void i(a, o => (o ? c(o) : f(t, e, n, r, c)))
            )
        }
        function l(t, e, n, r, o, i) {
            Promise.resolve(o.filter(n, r)).then(
                s => (s ? (e ? t(e, n, r, o, i) : t(n, r, o, i)) : i()),
                t => i(t)
            )
        }
        function f(t, e, n, r, o) {
            return r.filter ? l(h, t, e, n, r, o) : h(t, e, n, r, o)
        }
        function h(t, e, n, i, s) {
            ;(i.dereference ? r.stat : r.lstat)(e, (c, u) =>
                c
                    ? s(c)
                    : u.isDirectory()
                    ? (function(t, e, n, o, i, s) {
                          if (e === a)
                              return (function(t, e, n, o, i) {
                                  r.mkdir(n, s => {
                                      if (s) return i(s)
                                      y(e, n, o, e =>
                                          e ? i(e) : r.chmod(n, t.mode, i)
                                      )
                                  })
                              })(t, n, o, i, s)
                          if (e && !e.isDirectory())
                              return s(
                                  new Error(
                                      `Cannot overwrite non-directory '${o}' with directory '${n}'.`
                                  )
                              )
                          return y(n, o, i, s)
                      })(u, t, e, n, i, s)
                    : u.isFile() || u.isCharacterDevice() || u.isBlockDevice()
                    ? (function(t, e, n, o, i, s) {
                          return e === a
                              ? p(t, n, o, i, s)
                              : (function(t, e, n, o, i) {
                                    if (!o.overwrite)
                                        return o.errorOnExist
                                            ? i(
                                                  new Error(
                                                      `'${n}' already exists`
                                                  )
                                              )
                                            : i()
                                    r.unlink(n, r =>
                                        r ? i(r) : p(t, e, n, o, i)
                                    )
                                })(t, n, o, i, s)
                      })(u, t, e, n, i, s)
                    : u.isSymbolicLink()
                    ? (function(t, e, n, i, s) {
                          r.readlink(e, (e, c) =>
                              e
                                  ? s(e)
                                  : (i.dereference &&
                                        (c = o.resolve(process.cwd(), c)),
                                    t === a
                                        ? r.symlink(c, n, s)
                                        : void r.readlink(n, (e, a) =>
                                              e
                                                  ? 'EINVAL' === e.code ||
                                                    'UNKNOWN' === e.code
                                                      ? r.symlink(c, n, s)
                                                      : s(e)
                                                  : (i.dereference &&
                                                        (a = o.resolve(
                                                            process.cwd(),
                                                            a
                                                        )),
                                                    g(c, a)
                                                        ? s(
                                                              new Error(
                                                                  `Cannot copy '${c}' to a subdirectory of itself, '${a}'.`
                                                              )
                                                          )
                                                        : t.isDirectory() &&
                                                          g(a, c)
                                                        ? s(
                                                              new Error(
                                                                  `Cannot overwrite '${a}' with '${c}'.`
                                                              )
                                                          )
                                                        : (function(t, e, n) {
                                                              r.unlink(e, o =>
                                                                  o
                                                                      ? n(o)
                                                                      : r.symlink(
                                                                            t,
                                                                            e,
                                                                            n
                                                                        )
                                                              )
                                                          })(c, n, s))
                                          ))
                          )
                      })(t, e, n, i, s)
                    : void 0
            )
        }
        function p(t, e, n, o, i) {
            return 'function' == typeof r.copyFile
                ? r.copyFile(e, n, e => (e ? i(e) : d(t, n, o, i)))
                : (function(t, e, n, o, i) {
                      const s = r.createReadStream(e)
                      s.on('error', t => i(t)).once('open', () => {
                          const e = r.createWriteStream(n, { mode: t.mode })
                          e.on('error', t => i(t))
                              .on('open', () => s.pipe(e))
                              .once('close', () => d(t, n, o, i))
                      })
                  })(t, e, n, o, i)
        }
        function d(t, e, n, o) {
            r.chmod(e, t.mode, r =>
                r
                    ? o(r)
                    : n.preserveTimestamps
                    ? c(e, t.atime, t.mtime, o)
                    : o()
            )
        }
        function y(t, e, n, o) {
            r.readdir(t, (r, i) => (r ? o(r) : m(i, t, e, n, o)))
        }
        function m(t, e, n, r, i) {
            const s = t.pop()
            return s
                ? (function(t, e, n, r, i, s) {
                      const c = o.join(n, e),
                          a = o.join(r, e)
                      b(c, a, (e, o) => {
                          if (e) return s(e)
                          f(o, c, a, i, e => (e ? s(e) : m(t, n, r, i, s)))
                      })
                  })(t, s, e, n, r, i)
                : i()
        }
        function g(t, e) {
            const n = o.resolve(t).split(o.sep),
                r = o.resolve(e).split(o.sep)
            return n.reduce((t, e, n) => t && r[n] === e, !0)
        }
        function b(t, e, n) {
            !(function(t, e, n) {
                r.stat(t, (t, o) => {
                    if (t) return n(t)
                    r.stat(e, (t, e) =>
                        t
                            ? 'ENOENT' === t.code
                                ? n(null, { srcStat: o, destStat: a })
                                : n(t)
                            : n(null, { srcStat: o, destStat: e })
                    )
                })
            })(t, e, (r, o) => {
                if (r) return n(r)
                const { srcStat: i, destStat: s } = o
                return s.ino && s.ino === i.ino
                    ? n(
                          new Error(
                              'Source and destination must not be the same.'
                          )
                      )
                    : i.isDirectory() && g(t, e)
                    ? n(
                          new Error(
                              `Cannot copy '${t}' to a subdirectory of itself, '${e}'.`
                          )
                      )
                    : n(null, s)
            })
        }
        t.exports = function(t, e, n, r) {
            'function' != typeof n || r
                ? 'function' == typeof n && (n = { filter: n })
                : ((r = n), (n = {})),
                (r = r || function() {}),
                ((n = n || {}).clobber = !('clobber' in n) || !!n.clobber),
                (n.overwrite = 'overwrite' in n ? !!n.overwrite : n.clobber),
                n.preserveTimestamps &&
                    'ia32' === process.arch &&
                    console.warn(
                        'fs-extra: Using the preserveTimestamps option in 32-bit node is not recommended;\n\n    see https://github.com/jprichardson/node-fs-extra/issues/269'
                    ),
                b(t, e, (o, i) =>
                    o ? r(o) : n.filter ? l(u, i, t, e, n, r) : u(i, t, e, n, r)
                )
        }
    },
    function(t, e, n) {
        'use strict'
        const r = n(2).fromCallback,
            o = n(4),
            i = n(0),
            s = n(3),
            c = n(8),
            a = r(function(t, e) {
                ;(e = e || function() {}),
                    o.readdir(t, (n, r) => {
                        if (n) return s.mkdirs(t, e)
                        ;(r = r.map(e => i.join(t, e))),
                            (function t() {
                                const n = r.pop()
                                if (!n) return e()
                                c.remove(n, n => {
                                    if (n) return e(n)
                                    t()
                                })
                            })()
                    })
            })
        function u(t) {
            let e
            try {
                e = o.readdirSync(t)
            } catch (e) {
                return s.mkdirsSync(t)
            }
            e.forEach(e => {
                ;(e = i.join(t, e)), c.removeSync(e)
            })
        }
        t.exports = {
            emptyDirSync: u,
            emptydirSync: u,
            emptyDir: a,
            emptydir: a,
        }
    },
    function(t, e, n) {
        'use strict'
        const r = n(1),
            o = n(0),
            i = n(7),
            s = 'win32' === process.platform
        function c(t) {
            ;['unlink', 'chmod', 'stat', 'lstat', 'rmdir', 'readdir'].forEach(
                e => {
                    ;(t[e] = t[e] || r[e]), (t[(e += 'Sync')] = t[e] || r[e])
                }
            ),
                (t.maxBusyTries = t.maxBusyTries || 3)
        }
        function a(t, e, n) {
            let r = 0
            'function' == typeof e && ((n = e), (e = {})),
                i(t, 'rimraf: missing path'),
                i.strictEqual(
                    typeof t,
                    'string',
                    'rimraf: path should be a string'
                ),
                i.strictEqual(
                    typeof n,
                    'function',
                    'rimraf: callback function required'
                ),
                i(e, 'rimraf: invalid options argument provided'),
                i.strictEqual(
                    typeof e,
                    'object',
                    'rimraf: options should be object'
                ),
                c(e),
                u(t, e, function o(i) {
                    if (i) {
                        if (
                            ('EBUSY' === i.code ||
                                'ENOTEMPTY' === i.code ||
                                'EPERM' === i.code) &&
                            r < e.maxBusyTries
                        ) {
                            return r++, setTimeout(() => u(t, e, o), 100 * r)
                        }
                        'ENOENT' === i.code && (i = null)
                    }
                    n(i)
                })
        }
        function u(t, e, n) {
            i(t),
                i(e),
                i('function' == typeof n),
                e.lstat(t, (r, o) =>
                    r && 'ENOENT' === r.code
                        ? n(null)
                        : r && 'EPERM' === r.code && s
                        ? l(t, e, r, n)
                        : o && o.isDirectory()
                        ? h(t, e, r, n)
                        : void e.unlink(t, r => {
                              if (r) {
                                  if ('ENOENT' === r.code) return n(null)
                                  if ('EPERM' === r.code)
                                      return s ? l(t, e, r, n) : h(t, e, r, n)
                                  if ('EISDIR' === r.code) return h(t, e, r, n)
                              }
                              return n(r)
                          })
                )
        }
        function l(t, e, n, r) {
            i(t),
                i(e),
                i('function' == typeof r),
                n && i(n instanceof Error),
                e.chmod(t, 438, o => {
                    o
                        ? r('ENOENT' === o.code ? null : n)
                        : e.stat(t, (o, i) => {
                              o
                                  ? r('ENOENT' === o.code ? null : n)
                                  : i.isDirectory()
                                  ? h(t, e, n, r)
                                  : e.unlink(t, r)
                          })
                })
        }
        function f(t, e, n) {
            let r
            i(t), i(e), n && i(n instanceof Error)
            try {
                e.chmodSync(t, 438)
            } catch (t) {
                if ('ENOENT' === t.code) return
                throw n
            }
            try {
                r = e.statSync(t)
            } catch (t) {
                if ('ENOENT' === t.code) return
                throw n
            }
            r.isDirectory() ? d(t, e, n) : e.unlinkSync(t)
        }
        function h(t, e, n, r) {
            i(t),
                i(e),
                n && i(n instanceof Error),
                i('function' == typeof r),
                e.rmdir(t, s => {
                    !s ||
                    ('ENOTEMPTY' !== s.code &&
                        'EEXIST' !== s.code &&
                        'EPERM' !== s.code)
                        ? s && 'ENOTDIR' === s.code
                            ? r(n)
                            : r(s)
                        : (function(t, e, n) {
                              i(t),
                                  i(e),
                                  i('function' == typeof n),
                                  e.readdir(t, (r, i) => {
                                      if (r) return n(r)
                                      let s,
                                          c = i.length
                                      if (0 === c) return e.rmdir(t, n)
                                      i.forEach(r => {
                                          a(o.join(t, r), e, r => {
                                              if (!s)
                                                  return r
                                                      ? n((s = r))
                                                      : void (
                                                            0 == --c &&
                                                            e.rmdir(t, n)
                                                        )
                                          })
                                      })
                                  })
                          })(t, e, r)
                })
        }
        function p(t, e) {
            let n
            c((e = e || {})),
                i(t, 'rimraf: missing path'),
                i.strictEqual(
                    typeof t,
                    'string',
                    'rimraf: path should be a string'
                ),
                i(e, 'rimraf: missing options'),
                i.strictEqual(
                    typeof e,
                    'object',
                    'rimraf: options should be object'
                )
            try {
                n = e.lstatSync(t)
            } catch (n) {
                if ('ENOENT' === n.code) return
                'EPERM' === n.code && s && f(t, e, n)
            }
            try {
                n && n.isDirectory() ? d(t, e, null) : e.unlinkSync(t)
            } catch (n) {
                if ('ENOENT' === n.code) return
                if ('EPERM' === n.code) return s ? f(t, e, n) : d(t, e, n)
                if ('EISDIR' !== n.code) throw n
                d(t, e, n)
            }
        }
        function d(t, e, n) {
            i(t), i(e), n && i(n instanceof Error)
            try {
                e.rmdirSync(t)
            } catch (r) {
                if ('ENOTDIR' === r.code) throw n
                if (
                    'ENOTEMPTY' === r.code ||
                    'EEXIST' === r.code ||
                    'EPERM' === r.code
                )
                    !(function(t, e) {
                        if (
                            (i(t),
                            i(e),
                            e.readdirSync(t).forEach(n => p(o.join(t, n), e)),
                            !s)
                        ) {
                            return e.rmdirSync(t, e)
                        }
                        {
                            const n = Date.now()
                            do {
                                try {
                                    return e.rmdirSync(t, e)
                                } catch (t) {}
                            } while (Date.now() - n < 500)
                        }
                    })(t, e)
                else if ('ENOENT' !== r.code) throw r
            }
        }
        ;(t.exports = a), (a.sync = p)
    },
    function(t, e, n) {
        'use strict'
        const r = n(43),
            o = n(44),
            i = n(45)
        t.exports = {
            createFile: r.createFile,
            createFileSync: r.createFileSync,
            ensureFile: r.createFile,
            ensureFileSync: r.createFileSync,
            createLink: o.createLink,
            createLinkSync: o.createLinkSync,
            ensureLink: o.createLink,
            ensureLinkSync: o.createLinkSync,
            createSymlink: i.createSymlink,
            createSymlinkSync: i.createSymlinkSync,
            ensureSymlink: i.createSymlink,
            ensureSymlinkSync: i.createSymlinkSync,
        }
    },
    function(t, e, n) {
        'use strict'
        const r = n(2).fromCallback,
            o = n(0),
            i = n(1),
            s = n(3),
            c = n(5).pathExists
        t.exports = {
            createFile: r(function(t, e) {
                function n() {
                    i.writeFile(t, '', t => {
                        if (t) return e(t)
                        e()
                    })
                }
                i.stat(t, (r, i) => {
                    if (!r && i.isFile()) return e()
                    const a = o.dirname(t)
                    c(a, (t, r) =>
                        t
                            ? e(t)
                            : r
                            ? n()
                            : void s.mkdirs(a, t => {
                                  if (t) return e(t)
                                  n()
                              })
                    )
                })
            }),
            createFileSync: function(t) {
                let e
                try {
                    e = i.statSync(t)
                } catch (t) {}
                if (e && e.isFile()) return
                const n = o.dirname(t)
                i.existsSync(n) || s.mkdirsSync(n), i.writeFileSync(t, '')
            },
        }
    },
    function(t, e, n) {
        'use strict'
        const r = n(2).fromCallback,
            o = n(0),
            i = n(1),
            s = n(3),
            c = n(5).pathExists
        t.exports = {
            createLink: r(function(t, e, n) {
                function r(t, e) {
                    i.link(t, e, t => {
                        if (t) return n(t)
                        n(null)
                    })
                }
                c(e, (a, u) =>
                    a
                        ? n(a)
                        : u
                        ? n(null)
                        : void i.lstat(t, i => {
                              if (i)
                                  return (
                                      (i.message = i.message.replace(
                                          'lstat',
                                          'ensureLink'
                                      )),
                                      n(i)
                                  )
                              const a = o.dirname(e)
                              c(a, (o, i) =>
                                  o
                                      ? n(o)
                                      : i
                                      ? r(t, e)
                                      : void s.mkdirs(a, o => {
                                            if (o) return n(o)
                                            r(t, e)
                                        })
                              )
                          })
                )
            }),
            createLinkSync: function(t, e) {
                if (i.existsSync(e)) return
                try {
                    i.lstatSync(t)
                } catch (t) {
                    throw ((t.message = t.message.replace(
                        'lstat',
                        'ensureLink'
                    )),
                    t)
                }
                const n = o.dirname(e)
                return i.existsSync(n)
                    ? i.linkSync(t, e)
                    : (s.mkdirsSync(n), i.linkSync(t, e))
            },
        }
    },
    function(t, e, n) {
        'use strict'
        const r = n(2).fromCallback,
            o = n(0),
            i = n(1),
            s = n(3),
            c = s.mkdirs,
            a = s.mkdirsSync,
            u = n(46),
            l = u.symlinkPaths,
            f = u.symlinkPathsSync,
            h = n(47),
            p = h.symlinkType,
            d = h.symlinkTypeSync,
            y = n(5).pathExists
        t.exports = {
            createSymlink: r(function(t, e, n, r) {
                ;(r = 'function' == typeof n ? n : r),
                    (n = 'function' != typeof n && n),
                    y(e, (s, a) =>
                        s
                            ? r(s)
                            : a
                            ? r(null)
                            : void l(t, e, (s, a) => {
                                  if (s) return r(s)
                                  ;(t = a.toDst),
                                      p(a.toCwd, n, (n, s) => {
                                          if (n) return r(n)
                                          const a = o.dirname(e)
                                          y(a, (n, o) =>
                                              n
                                                  ? r(n)
                                                  : o
                                                  ? i.symlink(t, e, s, r)
                                                  : void c(a, n => {
                                                        if (n) return r(n)
                                                        i.symlink(t, e, s, r)
                                                    })
                                          )
                                      })
                              })
                    )
            }),
            createSymlinkSync: function(t, e, n) {
                if (i.existsSync(e)) return
                const r = f(t, e)
                ;(t = r.toDst), (n = d(r.toCwd, n))
                const s = o.dirname(e)
                return i.existsSync(s)
                    ? i.symlinkSync(t, e, n)
                    : (a(s), i.symlinkSync(t, e, n))
            },
        }
    },
    function(t, e, n) {
        'use strict'
        const r = n(0),
            o = n(1),
            i = n(5).pathExists
        t.exports = {
            symlinkPaths: function(t, e, n) {
                if (r.isAbsolute(t))
                    return o.lstat(t, e =>
                        e
                            ? ((e.message = e.message.replace(
                                  'lstat',
                                  'ensureSymlink'
                              )),
                              n(e))
                            : n(null, { toCwd: t, toDst: t })
                    )
                {
                    const s = r.dirname(e),
                        c = r.join(s, t)
                    return i(c, (e, i) =>
                        e
                            ? n(e)
                            : i
                            ? n(null, { toCwd: c, toDst: t })
                            : o.lstat(t, e =>
                                  e
                                      ? ((e.message = e.message.replace(
                                            'lstat',
                                            'ensureSymlink'
                                        )),
                                        n(e))
                                      : n(null, {
                                            toCwd: t,
                                            toDst: r.relative(s, t),
                                        })
                              )
                    )
                }
            },
            symlinkPathsSync: function(t, e) {
                let n
                if (r.isAbsolute(t)) {
                    if (((n = o.existsSync(t)), !n))
                        throw new Error('absolute srcpath does not exist')
                    return { toCwd: t, toDst: t }
                }
                {
                    const i = r.dirname(e),
                        s = r.join(i, t)
                    if (((n = o.existsSync(s)), n))
                        return { toCwd: s, toDst: t }
                    if (((n = o.existsSync(t)), !n))
                        throw new Error('relative srcpath does not exist')
                    return { toCwd: t, toDst: r.relative(i, t) }
                }
            },
        }
    },
    function(t, e, n) {
        'use strict'
        const r = n(1)
        t.exports = {
            symlinkType: function(t, e, n) {
                if (
                    ((n = 'function' == typeof e ? e : n),
                    (e = 'function' != typeof e && e))
                )
                    return n(null, e)
                r.lstat(t, (t, r) => {
                    if (t) return n(null, 'file')
                    ;(e = r && r.isDirectory() ? 'dir' : 'file'), n(null, e)
                })
            },
            symlinkTypeSync: function(t, e) {
                let n
                if (e) return e
                try {
                    n = r.lstatSync(t)
                } catch (t) {
                    return 'file'
                }
                return n && n.isDirectory() ? 'dir' : 'file'
            },
        }
    },
    function(t, e, n) {
        'use strict'
        const r = n(2).fromCallback,
            o = n(9)
        ;(o.outputJson = r(n(50))),
            (o.outputJsonSync = n(51)),
            (o.outputJSON = o.outputJson),
            (o.outputJSONSync = o.outputJsonSync),
            (o.writeJSON = o.writeJson),
            (o.writeJSONSync = o.writeJsonSync),
            (o.readJSON = o.readJson),
            (o.readJSONSync = o.readJsonSync),
            (t.exports = o)
    },
    function(t, e, n) {
        var r
        try {
            r = n(1)
        } catch (t) {
            r = n(4)
        }
        function o(t, e) {
            var n,
                r = '\n'
            return (
                'object' == typeof e &&
                    null !== e &&
                    (e.spaces && (n = e.spaces), e.EOL && (r = e.EOL)),
                JSON.stringify(t, e ? e.replacer : null, n).replace(/\n/g, r) +
                    r
            )
        }
        function i(t) {
            return (
                Buffer.isBuffer(t) && (t = t.toString('utf8')),
                (t = t.replace(/^\uFEFF/, ''))
            )
        }
        var s = {
            readFile: function(t, e, n) {
                null == n && ((n = e), (e = {})),
                    'string' == typeof e && (e = { encoding: e })
                var o = (e = e || {}).fs || r,
                    s = !0
                'throws' in e && (s = e.throws),
                    o.readFile(t, e, function(r, o) {
                        if (r) return n(r)
                        var c
                        o = i(o)
                        try {
                            c = JSON.parse(o, e ? e.reviver : null)
                        } catch (e) {
                            return s
                                ? ((e.message = t + ': ' + e.message), n(e))
                                : n(null, null)
                        }
                        n(null, c)
                    })
            },
            readFileSync: function(t, e) {
                'string' == typeof (e = e || {}) && (e = { encoding: e })
                var n = e.fs || r,
                    o = !0
                'throws' in e && (o = e.throws)
                try {
                    var s = n.readFileSync(t, e)
                    return (s = i(s)), JSON.parse(s, e.reviver)
                } catch (e) {
                    if (o) throw ((e.message = t + ': ' + e.message), e)
                    return null
                }
            },
            writeFile: function(t, e, n, i) {
                null == i && ((i = n), (n = {}))
                var s = (n = n || {}).fs || r,
                    c = ''
                try {
                    c = o(e, n)
                } catch (t) {
                    return void (i && i(t, null))
                }
                s.writeFile(t, c, n, i)
            },
            writeFileSync: function(t, e, n) {
                var i = (n = n || {}).fs || r,
                    s = o(e, n)
                return i.writeFileSync(t, s, n)
            },
        }
        t.exports = s
    },
    function(t, e, n) {
        'use strict'
        const r = n(0),
            o = n(3),
            i = n(5).pathExists,
            s = n(9)
        t.exports = function(t, e, n, c) {
            'function' == typeof n && ((c = n), (n = {}))
            const a = r.dirname(t)
            i(a, (r, i) =>
                r
                    ? c(r)
                    : i
                    ? s.writeJson(t, e, n, c)
                    : void o.mkdirs(a, r => {
                          if (r) return c(r)
                          s.writeJson(t, e, n, c)
                      })
            )
        }
    },
    function(t, e, n) {
        'use strict'
        const r = n(1),
            o = n(0),
            i = n(3),
            s = n(9)
        t.exports = function(t, e, n) {
            const c = o.dirname(t)
            r.existsSync(c) || i.mkdirsSync(c), s.writeJsonSync(t, e, n)
        }
    },
    function(t, e, n) {
        'use strict'
        const r = n(1),
            o = n(0),
            i = n(15).copySync,
            s = n(8).removeSync,
            c = n(3).mkdirsSync,
            a = n(19)
        function u(t, e, n) {
            return r.statSync(t).isDirectory()
                ? (function(t, e, n) {
                      const r = { overwrite: !1 }
                      n ? (s(e), o()) : o()
                      function o() {
                          return i(t, e, r), s(t)
                      }
                  })(t, e, n)
                : (function(t, e, n) {
                      const o = a(65536),
                          i = n ? 'w' : 'wx',
                          s = r.openSync(t, 'r'),
                          c = r.fstatSync(s),
                          u = r.openSync(e, i, c.mode)
                      let l = 0
                      for (; l < c.size; ) {
                          const t = r.readSync(s, o, 0, 65536, l)
                          r.writeSync(u, o, 0, t), (l += t)
                      }
                      return r.closeSync(s), r.closeSync(u), r.unlinkSync(t)
                  })(t, e, n)
        }
        t.exports = {
            moveSync: function t(e, n, i) {
                const a = (i = i || {}).overwrite || i.clobber || !1
                if (((e = o.resolve(e)), (n = o.resolve(n)), e === n))
                    return r.accessSync(e)
                if (
                    (function(t, e) {
                        try {
                            return (
                                r.statSync(t).isDirectory() &&
                                t !== e &&
                                e.indexOf(t) > -1 &&
                                e
                                    .split(o.dirname(t) + o.sep)[1]
                                    .split(o.sep)[0] === o.basename(t)
                            )
                        } catch (t) {
                            return !1
                        }
                    })(e, n)
                )
                    throw new Error(`Cannot move '${e}' into itself '${n}'.`)
                c(o.dirname(n)),
                    (function() {
                        if (a)
                            try {
                                r.renameSync(e, n)
                            } catch (r) {
                                if (
                                    'ENOTEMPTY' === r.code ||
                                    'EEXIST' === r.code ||
                                    'EPERM' === r.code
                                )
                                    return s(n), (i.overwrite = !1), t(e, n, i)
                                if ('EXDEV' !== r.code) throw r
                                return u(e, n, a)
                            }
                        else
                            try {
                                r.linkSync(e, n), r.unlinkSync(e)
                            } catch (t) {
                                if (
                                    'EXDEV' === t.code ||
                                    'EISDIR' === t.code ||
                                    'EPERM' === t.code ||
                                    'ENOTSUP' === t.code
                                )
                                    return u(e, n, a)
                                throw t
                            }
                    })()
            },
        }
    },
    function(t, e, n) {
        'use strict'
        const r = n(2).fromCallback,
            o = n(1),
            i = n(0),
            s = n(20).copy,
            c = n(8).remove,
            a = n(3).mkdirp,
            u = n(5).pathExists
        function l(t, e, n, r) {
            o.rename(t, e, o =>
                o
                    ? 'EXDEV' !== o.code
                        ? r(o)
                        : (function(t, e, n, r) {
                              s(t, e, { overwrite: n, errorOnExist: !0 }, e =>
                                  e ? r(e) : c(t, r)
                              )
                          })(t, e, n, r)
                    : r()
            )
        }
        t.exports = {
            move: r(function(t, e, n, r) {
                'function' == typeof n && ((r = n), (n = {}))
                const s = n.overwrite || n.clobber || !1
                if (((t = i.resolve(t)), (e = i.resolve(e)), t === e))
                    return o.access(t, r)
                o.stat(t, (n, o) =>
                    n
                        ? r(n)
                        : o.isDirectory() &&
                          (function(t, e) {
                              const n = t.split(i.sep),
                                  r = e.split(i.sep)
                              return n.reduce((t, e, n) => t && r[n] === e, !0)
                          })(t, e)
                        ? r(
                              new Error(
                                  `Cannot move '${t}' to a subdirectory of itself, '${e}'.`
                              )
                          )
                        : void a(i.dirname(e), n =>
                              n
                                  ? r(n)
                                  : (function(t, e, n, r) {
                                        if (n)
                                            return c(e, o =>
                                                o ? r(o) : l(t, e, n, r)
                                            )
                                        u(e, (o, i) =>
                                            o
                                                ? r(o)
                                                : i
                                                ? r(
                                                      new Error(
                                                          'dest already exists.'
                                                      )
                                                  )
                                                : l(t, e, n, r)
                                        )
                                    })(t, e, s, r)
                          )
                )
            }),
        }
    },
    function(t, e, n) {
        'use strict'
        const r = n(2).fromCallback,
            o = n(1),
            i = n(0),
            s = n(3),
            c = n(5).pathExists
        t.exports = {
            outputFile: r(function(t, e, n, r) {
                'function' == typeof n && ((r = n), (n = 'utf8'))
                const a = i.dirname(t)
                c(a, (i, c) =>
                    i
                        ? r(i)
                        : c
                        ? o.writeFile(t, e, n, r)
                        : void s.mkdirs(a, i => {
                              if (i) return r(i)
                              o.writeFile(t, e, n, r)
                          })
                )
            }),
            outputFileSync: function(t, ...e) {
                const n = i.dirname(t)
                if (o.existsSync(n)) return o.writeFileSync(t, ...e)
                s.mkdirsSync(n), o.writeFileSync(t, ...e)
            },
        }
    },
    function(t, e, n) {
        'use strict'
        const r = n(56),
            o = n(66),
            i = n(67),
            s = n(77),
            c = n(79),
            a = n(80)
        function u(t, e) {
            try {
                t = o(t)
            } catch (t) {
                return e ? e(t, null) : Promise.reject(t)
            }
            const { files: n, from: i, to: c, dry: u, verbose: l } = t
            return (
                u &&
                    l &&
                    console.log(r.yellow('Dry run, not making actual changes')),
                s(n, t)
                    .then(e => Promise.all(e.map(e => a(e, i, c, t))))
                    .then(t => (e && e(null, t), t))
                    .catch(t => {
                        if (!e) throw t
                        e(t)
                    })
            )
        }
        ;(u.sync = function(t) {
            t = o(t)
            const { files: e, from: n, to: s, dry: a, verbose: u } = t,
                l = i(e, t)
            return (
                a &&
                    u &&
                    console.log(r.yellow('Dry run, not making actual changes')),
                l.map(e => c(e, n, s, t))
            )
        }),
            (t.exports = u)
    },
    function(t, e, n) {
        'use strict'
        const r = n(57),
            o = n(58),
            i = n(63).stdout,
            s = n(65),
            c =
                'win32' === process.platform &&
                !(process.env.TERM || '').toLowerCase().startsWith('xterm'),
            a = ['ansi', 'ansi', 'ansi256', 'ansi16m'],
            u = new Set(['gray']),
            l = Object.create(null)
        function f(t, e) {
            e = e || {}
            const n = i ? i.level : 0
            ;(t.level = void 0 === e.level ? n : e.level),
                (t.enabled = 'enabled' in e ? e.enabled : t.level > 0)
        }
        function h(t) {
            if (!this || !(this instanceof h) || this.template) {
                const e = {}
                return (
                    f(e, t),
                    (e.template = function() {
                        const t = [].slice.call(arguments)
                        return m.apply(null, [e.template].concat(t))
                    }),
                    Object.setPrototypeOf(e, h.prototype),
                    Object.setPrototypeOf(e.template, e),
                    (e.template.constructor = h),
                    e.template
                )
            }
            f(this, t)
        }
        c && (o.blue.open = '[94m')
        for (const t of Object.keys(o))
            (o[t].closeRe = new RegExp(r(o[t].close), 'g')),
                (l[t] = {
                    get() {
                        const e = o[t]
                        return d.call(
                            this,
                            this._styles ? this._styles.concat(e) : [e],
                            this._empty,
                            t
                        )
                    },
                })
        ;(l.visible = {
            get() {
                return d.call(this, this._styles || [], !0, 'visible')
            },
        }),
            (o.color.closeRe = new RegExp(r(o.color.close), 'g'))
        for (const t of Object.keys(o.color.ansi))
            u.has(t) ||
                (l[t] = {
                    get() {
                        const e = this.level
                        return function() {
                            const n = o.color[a[e]][t].apply(null, arguments),
                                r = {
                                    open: n,
                                    close: o.color.close,
                                    closeRe: o.color.closeRe,
                                }
                            return d.call(
                                this,
                                this._styles ? this._styles.concat(r) : [r],
                                this._empty,
                                t
                            )
                        }
                    },
                })
        o.bgColor.closeRe = new RegExp(r(o.bgColor.close), 'g')
        for (const t of Object.keys(o.bgColor.ansi)) {
            if (u.has(t)) continue
            l['bg' + t[0].toUpperCase() + t.slice(1)] = {
                get() {
                    const e = this.level
                    return function() {
                        const n = o.bgColor[a[e]][t].apply(null, arguments),
                            r = {
                                open: n,
                                close: o.bgColor.close,
                                closeRe: o.bgColor.closeRe,
                            }
                        return d.call(
                            this,
                            this._styles ? this._styles.concat(r) : [r],
                            this._empty,
                            t
                        )
                    }
                },
            }
        }
        const p = Object.defineProperties(() => {}, l)
        function d(t, e, n) {
            const r = function() {
                return y.apply(r, arguments)
            }
            ;(r._styles = t), (r._empty = e)
            const o = this
            return (
                Object.defineProperty(r, 'level', {
                    enumerable: !0,
                    get: () => o.level,
                    set(t) {
                        o.level = t
                    },
                }),
                Object.defineProperty(r, 'enabled', {
                    enumerable: !0,
                    get: () => o.enabled,
                    set(t) {
                        o.enabled = t
                    },
                }),
                (r.hasGrey = this.hasGrey || 'gray' === n || 'grey' === n),
                (r.__proto__ = p),
                r
            )
        }
        function y() {
            const t = arguments,
                e = t.length
            let n = String(arguments[0])
            if (0 === e) return ''
            if (e > 1) for (let r = 1; r < e; r++) n += ' ' + t[r]
            if (!this.enabled || this.level <= 0 || !n)
                return this._empty ? '' : n
            const r = o.dim.open
            c && this.hasGrey && (o.dim.open = '')
            for (const t of this._styles.slice().reverse())
                (n = t.open + n.replace(t.closeRe, t.open) + t.close),
                    (n = n.replace(/\r?\n/g, `${t.close}$&${t.open}`))
            return (o.dim.open = r), n
        }
        function m(t, e) {
            if (!Array.isArray(e)) return [].slice.call(arguments, 1).join(' ')
            const n = [].slice.call(arguments, 2),
                r = [e.raw[0]]
            for (let t = 1; t < e.length; t++)
                r.push(String(n[t - 1]).replace(/[{}\\]/g, '\\$&')),
                    r.push(String(e.raw[t]))
            return s(t, r.join(''))
        }
        Object.defineProperties(h.prototype, l),
            (t.exports = h()),
            (t.exports.supportsColor = i),
            (t.exports.default = t.exports)
    },
    function(t, e, n) {
        'use strict'
        var r = /[|\\{}()[\]^$+*?.]/g
        t.exports = function(t) {
            if ('string' != typeof t) throw new TypeError('Expected a string')
            return t.replace(r, '\\$&')
        }
    },
    function(t, e, n) {
        'use strict'
        ;(function(t) {
            const e = n(60),
                r = (t, n) =>
                    function() {
                        const r = t.apply(e, arguments)
                        return `[${r + n}m`
                    },
                o = (t, n) =>
                    function() {
                        const r = t.apply(e, arguments)
                        return `[${38 + n};5;${r}m`
                    },
                i = (t, n) =>
                    function() {
                        const r = t.apply(e, arguments)
                        return `[${38 + n};2;${r[0]};${r[1]};${r[2]}m`
                    }
            Object.defineProperty(t, 'exports', {
                enumerable: !0,
                get: function() {
                    const t = new Map(),
                        n = {
                            modifier: {
                                reset: [0, 0],
                                bold: [1, 22],
                                dim: [2, 22],
                                italic: [3, 23],
                                underline: [4, 24],
                                inverse: [7, 27],
                                hidden: [8, 28],
                                strikethrough: [9, 29],
                            },
                            color: {
                                black: [30, 39],
                                red: [31, 39],
                                green: [32, 39],
                                yellow: [33, 39],
                                blue: [34, 39],
                                magenta: [35, 39],
                                cyan: [36, 39],
                                white: [37, 39],
                                gray: [90, 39],
                                redBright: [91, 39],
                                greenBright: [92, 39],
                                yellowBright: [93, 39],
                                blueBright: [94, 39],
                                magentaBright: [95, 39],
                                cyanBright: [96, 39],
                                whiteBright: [97, 39],
                            },
                            bgColor: {
                                bgBlack: [40, 49],
                                bgRed: [41, 49],
                                bgGreen: [42, 49],
                                bgYellow: [43, 49],
                                bgBlue: [44, 49],
                                bgMagenta: [45, 49],
                                bgCyan: [46, 49],
                                bgWhite: [47, 49],
                                bgBlackBright: [100, 49],
                                bgRedBright: [101, 49],
                                bgGreenBright: [102, 49],
                                bgYellowBright: [103, 49],
                                bgBlueBright: [104, 49],
                                bgMagentaBright: [105, 49],
                                bgCyanBright: [106, 49],
                                bgWhiteBright: [107, 49],
                            },
                        }
                    n.color.grey = n.color.gray
                    for (const e of Object.keys(n)) {
                        const r = n[e]
                        for (const e of Object.keys(r)) {
                            const o = r[e]
                            ;(n[e] = { open: `[${o[0]}m`, close: `[${o[1]}m` }),
                                (r[e] = n[e]),
                                t.set(o[0], o[1])
                        }
                        Object.defineProperty(n, e, {
                            value: r,
                            enumerable: !1,
                        }),
                            Object.defineProperty(n, 'codes', {
                                value: t,
                                enumerable: !1,
                            })
                    }
                    const s = t => t,
                        c = (t, e, n) => [t, e, n]
                    ;(n.color.close = '[39m'),
                        (n.bgColor.close = '[49m'),
                        (n.color.ansi = { ansi: r(s, 0) }),
                        (n.color.ansi256 = { ansi256: o(s, 0) }),
                        (n.color.ansi16m = { rgb: i(c, 0) }),
                        (n.bgColor.ansi = { ansi: r(s, 10) }),
                        (n.bgColor.ansi256 = { ansi256: o(s, 10) }),
                        (n.bgColor.ansi16m = { rgb: i(c, 10) })
                    for (let t of Object.keys(e)) {
                        if ('object' != typeof e[t]) continue
                        const s = e[t]
                        'ansi16' === t && (t = 'ansi'),
                            'ansi16' in s &&
                                ((n.color.ansi[t] = r(s.ansi16, 0)),
                                (n.bgColor.ansi[t] = r(s.ansi16, 10))),
                            'ansi256' in s &&
                                ((n.color.ansi256[t] = o(s.ansi256, 0)),
                                (n.bgColor.ansi256[t] = o(s.ansi256, 10))),
                            'rgb' in s &&
                                ((n.color.ansi16m[t] = i(s.rgb, 0)),
                                (n.bgColor.ansi16m[t] = i(s.rgb, 10)))
                    }
                    return n
                },
            })
        }.call(this, n(59)(t)))
    },
    function(t, e) {
        t.exports = function(t) {
            return (
                t.webpackPolyfill ||
                    ((t.deprecate = function() {}),
                    (t.paths = []),
                    t.children || (t.children = []),
                    Object.defineProperty(t, 'loaded', {
                        enumerable: !0,
                        get: function() {
                            return t.l
                        },
                    }),
                    Object.defineProperty(t, 'id', {
                        enumerable: !0,
                        get: function() {
                            return t.i
                        },
                    }),
                    (t.webpackPolyfill = 1)),
                t
            )
        }
    },
    function(t, e, n) {
        var r = n(22),
            o = n(62),
            i = {}
        Object.keys(r).forEach(function(t) {
            ;(i[t] = {}),
                Object.defineProperty(i[t], 'channels', {
                    value: r[t].channels,
                }),
                Object.defineProperty(i[t], 'labels', { value: r[t].labels })
            var e = o(t)
            Object.keys(e).forEach(function(n) {
                var r = e[n]
                ;(i[t][n] = (function(t) {
                    var e = function(e) {
                        if (null == e) return e
                        arguments.length > 1 &&
                            (e = Array.prototype.slice.call(arguments))
                        var n = t(e)
                        if ('object' == typeof n)
                            for (var r = n.length, o = 0; o < r; o++)
                                n[o] = Math.round(n[o])
                        return n
                    }
                    return 'conversion' in t && (e.conversion = t.conversion), e
                })(r)),
                    (i[t][n].raw = (function(t) {
                        var e = function(e) {
                            return null == e
                                ? e
                                : (arguments.length > 1 &&
                                      (e = Array.prototype.slice.call(
                                          arguments
                                      )),
                                  t(e))
                        }
                        return (
                            'conversion' in t && (e.conversion = t.conversion),
                            e
                        )
                    })(r))
            })
        }),
            (t.exports = i)
    },
    function(t, e, n) {
        'use strict'
        t.exports = {
            aliceblue: [240, 248, 255],
            antiquewhite: [250, 235, 215],
            aqua: [0, 255, 255],
            aquamarine: [127, 255, 212],
            azure: [240, 255, 255],
            beige: [245, 245, 220],
            bisque: [255, 228, 196],
            black: [0, 0, 0],
            blanchedalmond: [255, 235, 205],
            blue: [0, 0, 255],
            blueviolet: [138, 43, 226],
            brown: [165, 42, 42],
            burlywood: [222, 184, 135],
            cadetblue: [95, 158, 160],
            chartreuse: [127, 255, 0],
            chocolate: [210, 105, 30],
            coral: [255, 127, 80],
            cornflowerblue: [100, 149, 237],
            cornsilk: [255, 248, 220],
            crimson: [220, 20, 60],
            cyan: [0, 255, 255],
            darkblue: [0, 0, 139],
            darkcyan: [0, 139, 139],
            darkgoldenrod: [184, 134, 11],
            darkgray: [169, 169, 169],
            darkgreen: [0, 100, 0],
            darkgrey: [169, 169, 169],
            darkkhaki: [189, 183, 107],
            darkmagenta: [139, 0, 139],
            darkolivegreen: [85, 107, 47],
            darkorange: [255, 140, 0],
            darkorchid: [153, 50, 204],
            darkred: [139, 0, 0],
            darksalmon: [233, 150, 122],
            darkseagreen: [143, 188, 143],
            darkslateblue: [72, 61, 139],
            darkslategray: [47, 79, 79],
            darkslategrey: [47, 79, 79],
            darkturquoise: [0, 206, 209],
            darkviolet: [148, 0, 211],
            deeppink: [255, 20, 147],
            deepskyblue: [0, 191, 255],
            dimgray: [105, 105, 105],
            dimgrey: [105, 105, 105],
            dodgerblue: [30, 144, 255],
            firebrick: [178, 34, 34],
            floralwhite: [255, 250, 240],
            forestgreen: [34, 139, 34],
            fuchsia: [255, 0, 255],
            gainsboro: [220, 220, 220],
            ghostwhite: [248, 248, 255],
            gold: [255, 215, 0],
            goldenrod: [218, 165, 32],
            gray: [128, 128, 128],
            green: [0, 128, 0],
            greenyellow: [173, 255, 47],
            grey: [128, 128, 128],
            honeydew: [240, 255, 240],
            hotpink: [255, 105, 180],
            indianred: [205, 92, 92],
            indigo: [75, 0, 130],
            ivory: [255, 255, 240],
            khaki: [240, 230, 140],
            lavender: [230, 230, 250],
            lavenderblush: [255, 240, 245],
            lawngreen: [124, 252, 0],
            lemonchiffon: [255, 250, 205],
            lightblue: [173, 216, 230],
            lightcoral: [240, 128, 128],
            lightcyan: [224, 255, 255],
            lightgoldenrodyellow: [250, 250, 210],
            lightgray: [211, 211, 211],
            lightgreen: [144, 238, 144],
            lightgrey: [211, 211, 211],
            lightpink: [255, 182, 193],
            lightsalmon: [255, 160, 122],
            lightseagreen: [32, 178, 170],
            lightskyblue: [135, 206, 250],
            lightslategray: [119, 136, 153],
            lightslategrey: [119, 136, 153],
            lightsteelblue: [176, 196, 222],
            lightyellow: [255, 255, 224],
            lime: [0, 255, 0],
            limegreen: [50, 205, 50],
            linen: [250, 240, 230],
            magenta: [255, 0, 255],
            maroon: [128, 0, 0],
            mediumaquamarine: [102, 205, 170],
            mediumblue: [0, 0, 205],
            mediumorchid: [186, 85, 211],
            mediumpurple: [147, 112, 219],
            mediumseagreen: [60, 179, 113],
            mediumslateblue: [123, 104, 238],
            mediumspringgreen: [0, 250, 154],
            mediumturquoise: [72, 209, 204],
            mediumvioletred: [199, 21, 133],
            midnightblue: [25, 25, 112],
            mintcream: [245, 255, 250],
            mistyrose: [255, 228, 225],
            moccasin: [255, 228, 181],
            navajowhite: [255, 222, 173],
            navy: [0, 0, 128],
            oldlace: [253, 245, 230],
            olive: [128, 128, 0],
            olivedrab: [107, 142, 35],
            orange: [255, 165, 0],
            orangered: [255, 69, 0],
            orchid: [218, 112, 214],
            palegoldenrod: [238, 232, 170],
            palegreen: [152, 251, 152],
            paleturquoise: [175, 238, 238],
            palevioletred: [219, 112, 147],
            papayawhip: [255, 239, 213],
            peachpuff: [255, 218, 185],
            peru: [205, 133, 63],
            pink: [255, 192, 203],
            plum: [221, 160, 221],
            powderblue: [176, 224, 230],
            purple: [128, 0, 128],
            rebeccapurple: [102, 51, 153],
            red: [255, 0, 0],
            rosybrown: [188, 143, 143],
            royalblue: [65, 105, 225],
            saddlebrown: [139, 69, 19],
            salmon: [250, 128, 114],
            sandybrown: [244, 164, 96],
            seagreen: [46, 139, 87],
            seashell: [255, 245, 238],
            sienna: [160, 82, 45],
            silver: [192, 192, 192],
            skyblue: [135, 206, 235],
            slateblue: [106, 90, 205],
            slategray: [112, 128, 144],
            slategrey: [112, 128, 144],
            snow: [255, 250, 250],
            springgreen: [0, 255, 127],
            steelblue: [70, 130, 180],
            tan: [210, 180, 140],
            teal: [0, 128, 128],
            thistle: [216, 191, 216],
            tomato: [255, 99, 71],
            turquoise: [64, 224, 208],
            violet: [238, 130, 238],
            wheat: [245, 222, 179],
            white: [255, 255, 255],
            whitesmoke: [245, 245, 245],
            yellow: [255, 255, 0],
            yellowgreen: [154, 205, 50],
        }
    },
    function(t, e, n) {
        var r = n(22)
        function o(t) {
            var e = (function() {
                    for (
                        var t = {}, e = Object.keys(r), n = e.length, o = 0;
                        o < n;
                        o++
                    )
                        t[e[o]] = { distance: -1, parent: null }
                    return t
                })(),
                n = [t]
            for (e[t].distance = 0; n.length; )
                for (
                    var o = n.pop(), i = Object.keys(r[o]), s = i.length, c = 0;
                    c < s;
                    c++
                ) {
                    var a = i[c],
                        u = e[a]
                    ;-1 === u.distance &&
                        ((u.distance = e[o].distance + 1),
                        (u.parent = o),
                        n.unshift(a))
                }
            return e
        }
        function i(t, e) {
            return function(n) {
                return e(t(n))
            }
        }
        function s(t, e) {
            for (
                var n = [e[t].parent, t],
                    o = r[e[t].parent][t],
                    s = e[t].parent;
                e[s].parent;

            )
                n.unshift(e[s].parent),
                    (o = i(r[e[s].parent][s], o)),
                    (s = e[s].parent)
            return (o.conversion = n), o
        }
        t.exports = function(t) {
            for (
                var e = o(t), n = {}, r = Object.keys(e), i = r.length, c = 0;
                c < i;
                c++
            ) {
                var a = r[c]
                null !== e[a].parent && (n[a] = s(a, e))
            }
            return n
        }
    },
    function(t, e, n) {
        'use strict'
        const r = n(18),
            o = n(64),
            i = process.env
        let s
        function c(t) {
            return (function(t) {
                return (
                    0 !== t && {
                        level: t,
                        hasBasic: !0,
                        has256: t >= 2,
                        has16m: t >= 3,
                    }
                )
            })(
                (function(t) {
                    if (!1 === s) return 0
                    if (
                        o('color=16m') ||
                        o('color=full') ||
                        o('color=truecolor')
                    )
                        return 3
                    if (o('color=256')) return 2
                    if (t && !t.isTTY && !0 !== s) return 0
                    const e = s ? 1 : 0
                    if ('win32' === process.platform) {
                        const t = r.release().split('.')
                        return Number(process.versions.node.split('.')[0]) >=
                            8 &&
                            Number(t[0]) >= 10 &&
                            Number(t[2]) >= 10586
                            ? Number(t[2]) >= 14931
                                ? 3
                                : 2
                            : 1
                    }
                    if ('CI' in i)
                        return [
                            'TRAVIS',
                            'CIRCLECI',
                            'APPVEYOR',
                            'GITLAB_CI',
                        ].some(t => t in i) || 'codeship' === i.CI_NAME
                            ? 1
                            : e
                    if ('TEAMCITY_VERSION' in i)
                        return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(
                            i.TEAMCITY_VERSION
                        )
                            ? 1
                            : 0
                    if ('truecolor' === i.COLORTERM) return 3
                    if ('TERM_PROGRAM' in i) {
                        const t = parseInt(
                            (i.TERM_PROGRAM_VERSION || '').split('.')[0],
                            10
                        )
                        switch (i.TERM_PROGRAM) {
                            case 'iTerm.app':
                                return t >= 3 ? 3 : 2
                            case 'Apple_Terminal':
                                return 2
                        }
                    }
                    return /-256(color)?$/i.test(i.TERM)
                        ? 2
                        : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(
                              i.TERM
                          )
                        ? 1
                        : 'COLORTERM' in i
                        ? 1
                        : (i.TERM, e)
                })(t)
            )
        }
        o('no-color') || o('no-colors') || o('color=false')
            ? (s = !1)
            : (o('color') ||
                  o('colors') ||
                  o('color=true') ||
                  o('color=always')) &&
              (s = !0),
            'FORCE_COLOR' in i &&
                (s =
                    0 === i.FORCE_COLOR.length ||
                    0 !== parseInt(i.FORCE_COLOR, 10)),
            (t.exports = {
                supportsColor: c,
                stdout: c(process.stdout),
                stderr: c(process.stderr),
            })
    },
    function(t, e, n) {
        'use strict'
        t.exports = (t, e) => {
            e = e || process.argv
            const n = t.startsWith('-') ? '' : 1 === t.length ? '-' : '--',
                r = e.indexOf(n + t),
                o = e.indexOf('--')
            return -1 !== r && (-1 === o || r < o)
        }
    },
    function(t, e, n) {
        'use strict'
        const r = /(?:\\(u[a-f\d]{4}|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi,
            o = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g,
            i = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/,
            s = /\\(u[a-f\d]{4}|x[a-f\d]{2}|.)|([^\\])/gi,
            c = new Map([
                ['n', '\n'],
                ['r', '\r'],
                ['t', '\t'],
                ['b', '\b'],
                ['f', '\f'],
                ['v', '\v'],
                ['0', '\0'],
                ['\\', '\\'],
                ['e', ''],
                ['a', ''],
            ])
        function a(t) {
            return ('u' === t[0] && 5 === t.length) ||
                ('x' === t[0] && 3 === t.length)
                ? String.fromCharCode(parseInt(t.slice(1), 16))
                : c.get(t) || t
        }
        function u(t, e) {
            const n = [],
                r = e.trim().split(/\s*,\s*/g)
            let o
            for (const e of r)
                if (isNaN(e)) {
                    if (!(o = e.match(i)))
                        throw new Error(
                            `Invalid Chalk template style argument: ${e} (in style '${t}')`
                        )
                    n.push(o[2].replace(s, (t, e, n) => (e ? a(e) : n)))
                } else n.push(Number(e))
            return n
        }
        function l(t) {
            o.lastIndex = 0
            const e = []
            let n
            for (; null !== (n = o.exec(t)); ) {
                const t = n[1]
                if (n[2]) {
                    const r = u(t, n[2])
                    e.push([t].concat(r))
                } else e.push([t])
            }
            return e
        }
        function f(t, e) {
            const n = {}
            for (const t of e)
                for (const e of t.styles)
                    n[e[0]] = t.inverse ? null : e.slice(1)
            let r = t
            for (const t of Object.keys(n))
                if (Array.isArray(n[t])) {
                    if (!(t in r)) throw new Error(`Unknown Chalk style: ${t}`)
                    r = n[t].length > 0 ? r[t].apply(r, n[t]) : r[t]
                }
            return r
        }
        t.exports = (t, e) => {
            const n = [],
                o = []
            let i = []
            if (
                (e.replace(r, (e, r, s, c, u, h) => {
                    if (r) i.push(a(r))
                    else if (c) {
                        const e = i.join('')
                        ;(i = []),
                            o.push(0 === n.length ? e : f(t, n)(e)),
                            n.push({ inverse: s, styles: l(c) })
                    } else if (u) {
                        if (0 === n.length)
                            throw new Error(
                                'Found extraneous } in Chalk template literal'
                            )
                        o.push(f(t, n)(i.join(''))), (i = []), n.pop()
                    } else i.push(h)
                }),
                o.push(i.join('')),
                n.length > 0)
            ) {
                const t = `Chalk template literal is missing ${
                    n.length
                } closing bracket${1 === n.length ? '' : 's'} (\`}\`)`
                throw new Error(t)
            }
            return o.join('')
        }
    },
    function(t, e, n) {
        'use strict'
        const r = {
            ignore: [],
            encoding: 'utf-8',
            disableGlobs: !1,
            allowEmptyPaths: !1,
            countMatches: !1,
            isRegex: !1,
            verbose: !1,
            quiet: !1,
            dry: !1,
            glob: {},
            cwd: null,
        }
        t.exports = function(t) {
            if ('object' != typeof t || null === t)
                throw new Error('Must specify configuration object')
            t.glob = t.glob || {}
            const { files: e, from: n, to: o, ignore: i, encoding: s } = t
            if (void 0 === e) throw new Error('Must specify file or files')
            if (void 0 === n)
                throw new Error('Must specify string or regex to replace')
            if (void 0 === o)
                throw new Error(
                    'Must specify a replacement (can be blank string)'
                )
            return (
                Array.isArray(e) || (t.files = [e]),
                Array.isArray(i) || (t.ignore = void 0 === i ? [] : [i]),
                ('string' == typeof s && '' !== s) || (t.encoding = 'utf-8'),
                Object.assign({}, r, t)
            )
        }
    },
    function(t, e, n) {
        'use strict'
        const r = n(10)
        t.exports = function(t, e) {
            const { ignore: n, disableGlobs: o, glob: i, cwd: s } = e
            if (o) return t
            const c = Object.assign({ ignore: n }, i, { nodir: !0 })
            s && (c.cwd = s)
            const a = t.map(t => r.sync(t, c)),
                u = [].concat.apply([], a)
            return s ? u.map(t => `${s}${t}`) : u
        }
    },
    function(t, e, n) {
        var r = n(0),
            o = 'win32' === process.platform,
            i = n(4),
            s = process.env.NODE_DEBUG && /fs/.test(process.env.NODE_DEBUG)
        function c(t) {
            return 'function' == typeof t
                ? t
                : (function() {
                      var t
                      if (s) {
                          var e = new Error()
                          t = function(t) {
                              t && ((e.message = t.message), n((t = e)))
                          }
                      } else t = n
                      return t
                      function n(t) {
                          if (t) {
                              if (process.throwDeprecation) throw t
                              if (!process.noDeprecation) {
                                  var e =
                                      'fs: missing callback ' +
                                      (t.stack || t.message)
                                  process.traceDeprecation
                                      ? console.trace(e)
                                      : console.error(e)
                              }
                          }
                      }
                  })()
        }
        r.normalize
        if (o) var a = /(.*?)(?:[\/\\]+|$)/g
        else a = /(.*?)(?:[\/]+|$)/g
        if (o) var u = /^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/][^\\\/]+)?[\\\/]*/
        else u = /^[\/]*/
        ;(e.realpathSync = function(t, e) {
            if (
                ((t = r.resolve(t)),
                e && Object.prototype.hasOwnProperty.call(e, t))
            )
                return e[t]
            var n,
                s,
                c,
                l,
                f = t,
                h = {},
                p = {}
            function d() {
                var e = u.exec(t)
                ;(n = e[0].length),
                    (s = e[0]),
                    (c = e[0]),
                    (l = ''),
                    o && !p[c] && (i.lstatSync(c), (p[c] = !0))
            }
            for (d(); n < t.length; ) {
                a.lastIndex = n
                var y = a.exec(t)
                if (
                    ((l = s),
                    (s += y[0]),
                    (c = l + y[1]),
                    (n = a.lastIndex),
                    !(p[c] || (e && e[c] === c)))
                ) {
                    var m
                    if (e && Object.prototype.hasOwnProperty.call(e, c))
                        m = e[c]
                    else {
                        var g = i.lstatSync(c)
                        if (!g.isSymbolicLink()) {
                            ;(p[c] = !0), e && (e[c] = c)
                            continue
                        }
                        var b = null
                        if (!o) {
                            var v =
                                g.dev.toString(32) + ':' + g.ino.toString(32)
                            h.hasOwnProperty(v) && (b = h[v])
                        }
                        null === b && (i.statSync(c), (b = i.readlinkSync(c))),
                            (m = r.resolve(l, b)),
                            e && (e[c] = m),
                            o || (h[v] = b)
                    }
                    ;(t = r.resolve(m, t.slice(n))), d()
                }
            }
            return e && (e[f] = t), t
        }),
            (e.realpath = function(t, e, n) {
                if (
                    ('function' != typeof n && ((n = c(e)), (e = null)),
                    (t = r.resolve(t)),
                    e && Object.prototype.hasOwnProperty.call(e, t))
                )
                    return process.nextTick(n.bind(null, null, e[t]))
                var s,
                    l,
                    f,
                    h,
                    p = t,
                    d = {},
                    y = {}
                function m() {
                    var e = u.exec(t)
                    ;(s = e[0].length),
                        (l = e[0]),
                        (f = e[0]),
                        (h = ''),
                        o && !y[f]
                            ? i.lstat(f, function(t) {
                                  if (t) return n(t)
                                  ;(y[f] = !0), g()
                              })
                            : process.nextTick(g)
                }
                function g() {
                    if (s >= t.length) return e && (e[p] = t), n(null, t)
                    a.lastIndex = s
                    var r = a.exec(t)
                    return (
                        (h = l),
                        (l += r[0]),
                        (f = h + r[1]),
                        (s = a.lastIndex),
                        y[f] || (e && e[f] === f)
                            ? process.nextTick(g)
                            : e && Object.prototype.hasOwnProperty.call(e, f)
                            ? w(e[f])
                            : i.lstat(f, b)
                    )
                }
                function b(t, r) {
                    if (t) return n(t)
                    if (!r.isSymbolicLink())
                        return (y[f] = !0), e && (e[f] = f), process.nextTick(g)
                    if (!o) {
                        var s = r.dev.toString(32) + ':' + r.ino.toString(32)
                        if (d.hasOwnProperty(s)) return v(null, d[s], f)
                    }
                    i.stat(f, function(t) {
                        if (t) return n(t)
                        i.readlink(f, function(t, e) {
                            o || (d[s] = e), v(t, e)
                        })
                    })
                }
                function v(t, o, i) {
                    if (t) return n(t)
                    var s = r.resolve(h, o)
                    e && (e[i] = s), w(s)
                }
                function w(e) {
                    ;(t = r.resolve(e, t.slice(s))), m()
                }
                m()
            })
    },
    function(t, e, n) {
        var r = n(70),
            o = n(71)
        t.exports = function(t) {
            if (!t) return []
            '{}' === t.substr(0, 2) && (t = '\\{\\}' + t.substr(2))
            return (function t(e, n) {
                var i = [],
                    s = o('{', '}', e)
                if (!s || /\$$/.test(s.pre)) return [e]
                var a,
                    u = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(s.body),
                    f = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(s.body),
                    m = u || f,
                    g = s.body.indexOf(',') >= 0
                if (!m && !g)
                    return s.post.match(/,.*\}/)
                        ? ((e = s.pre + '{' + s.body + c + s.post), t(e))
                        : [e]
                if (m) a = s.body.split(/\.\./)
                else {
                    if (
                        1 ===
                        (a = (function t(e) {
                            if (!e) return ['']
                            var n = [],
                                r = o('{', '}', e)
                            if (!r) return e.split(',')
                            var i = r.pre,
                                s = r.body,
                                c = r.post,
                                a = i.split(',')
                            a[a.length - 1] += '{' + s + '}'
                            var u = t(c)
                            c.length &&
                                ((a[a.length - 1] += u.shift()),
                                a.push.apply(a, u))
                            return n.push.apply(n, a), n
                        })(s.body)).length
                    )
                        if (1 === (a = t(a[0], !1).map(h)).length)
                            return (w = s.post.length
                                ? t(s.post, !1)
                                : ['']).map(function(t) {
                                return s.pre + a[0] + t
                            })
                }
                var b,
                    v = s.pre,
                    w = s.post.length ? t(s.post, !1) : ['']
                if (m) {
                    var S = l(a[0]),
                        E = l(a[1]),
                        k = Math.max(a[0].length, a[1].length),
                        x = 3 == a.length ? Math.abs(l(a[2])) : 1,
                        O = d
                    E < S && ((x *= -1), (O = y))
                    var _ = a.some(p)
                    b = []
                    for (var j = S; O(j, E); j += x) {
                        var M
                        if (f) '\\' === (M = String.fromCharCode(j)) && (M = '')
                        else if (((M = String(j)), _)) {
                            var T = k - M.length
                            if (T > 0) {
                                var N = new Array(T + 1).join('0')
                                M = j < 0 ? '-' + N + M.slice(1) : N + M
                            }
                        }
                        b.push(M)
                    }
                } else
                    b = r(a, function(e) {
                        return t(e, !1)
                    })
                for (var A = 0; A < b.length; A++)
                    for (var R = 0; R < w.length; R++) {
                        var C = v + b[A] + w[R]
                        ;(!n || m || C) && i.push(C)
                    }
                return i
            })(
                (function(t) {
                    return t
                        .split('\\\\')
                        .join(i)
                        .split('\\{')
                        .join(s)
                        .split('\\}')
                        .join(c)
                        .split('\\,')
                        .join(a)
                        .split('\\.')
                        .join(u)
                })(t),
                !0
            ).map(f)
        }
        var i = '\0SLASH' + Math.random() + '\0',
            s = '\0OPEN' + Math.random() + '\0',
            c = '\0CLOSE' + Math.random() + '\0',
            a = '\0COMMA' + Math.random() + '\0',
            u = '\0PERIOD' + Math.random() + '\0'
        function l(t) {
            return parseInt(t, 10) == t ? parseInt(t, 10) : t.charCodeAt(0)
        }
        function f(t) {
            return t
                .split(i)
                .join('\\')
                .split(s)
                .join('{')
                .split(c)
                .join('}')
                .split(a)
                .join(',')
                .split(u)
                .join('.')
        }
        function h(t) {
            return '{' + t + '}'
        }
        function p(t) {
            return /^-?0\d/.test(t)
        }
        function d(t, e) {
            return t <= e
        }
        function y(t, e) {
            return t >= e
        }
    },
    function(t, e) {
        t.exports = function(t, e) {
            for (var r = [], o = 0; o < t.length; o++) {
                var i = e(t[o], o)
                n(i) ? r.push.apply(r, i) : r.push(i)
            }
            return r
        }
        var n =
            Array.isArray ||
            function(t) {
                return '[object Array]' === Object.prototype.toString.call(t)
            }
    },
    function(t, e, n) {
        'use strict'
        function r(t, e, n) {
            t instanceof RegExp && (t = o(t, n)),
                e instanceof RegExp && (e = o(e, n))
            var r = i(t, e, n)
            return (
                r && {
                    start: r[0],
                    end: r[1],
                    pre: n.slice(0, r[0]),
                    body: n.slice(r[0] + t.length, r[1]),
                    post: n.slice(r[1] + e.length),
                }
            )
        }
        function o(t, e) {
            var n = e.match(t)
            return n ? n[0] : null
        }
        function i(t, e, n) {
            var r,
                o,
                i,
                s,
                c,
                a = n.indexOf(t),
                u = n.indexOf(e, a + 1),
                l = a
            if (a >= 0 && u > 0) {
                for (r = [], i = n.length; l >= 0 && !c; )
                    l == a
                        ? (r.push(l), (a = n.indexOf(t, l + 1)))
                        : 1 == r.length
                        ? (c = [r.pop(), u])
                        : ((o = r.pop()) < i && ((i = o), (s = u)),
                          (u = n.indexOf(e, l + 1))),
                        (l = a < u && a >= 0 ? a : u)
                r.length && (c = [i, s])
            }
            return c
        }
        ;(t.exports = r), (r.range = i)
    },
    function(t, e, n) {
        try {
            var r = n(6)
            if ('function' != typeof r.inherits) throw ''
            t.exports = r.inherits
        } catch (e) {
            t.exports = n(73)
        }
    },
    function(t, e) {
        'function' == typeof Object.create
            ? (t.exports = function(t, e) {
                  e &&
                      ((t.super_ = e),
                      (t.prototype = Object.create(e.prototype, {
                          constructor: {
                              value: t,
                              enumerable: !1,
                              writable: !0,
                              configurable: !0,
                          },
                      })))
              })
            : (t.exports = function(t, e) {
                  if (e) {
                      t.super_ = e
                      var n = function() {}
                      ;(n.prototype = e.prototype),
                          (t.prototype = new n()),
                          (t.prototype.constructor = t)
                  }
              })
    },
    function(t, e) {
        t.exports = require('events')
    },
    function(t, e, n) {
        ;(t.exports = d), (d.GlobSync = y)
        var r = n(4),
            o = n(23),
            i = n(11),
            s = (i.Minimatch, n(10).Glob, n(6), n(0)),
            c = n(7),
            a = n(12),
            u = n(24),
            l = (u.alphasort, u.alphasorti, u.setopts),
            f = u.ownProp,
            h = u.childrenIgnored,
            p = u.isIgnored
        function d(t, e) {
            if ('function' == typeof e || 3 === arguments.length)
                throw new TypeError(
                    'callback provided to sync glob\nSee: https://github.com/isaacs/node-glob/issues/167'
                )
            return new y(t, e).found
        }
        function y(t, e) {
            if (!t) throw new Error('must provide pattern')
            if ('function' == typeof e || 3 === arguments.length)
                throw new TypeError(
                    'callback provided to sync glob\nSee: https://github.com/isaacs/node-glob/issues/167'
                )
            if (!(this instanceof y)) return new y(t, e)
            if ((l(this, t, e), this.noprocess)) return this
            var n = this.minimatch.set.length
            this.matches = new Array(n)
            for (var r = 0; r < n; r++)
                this._process(this.minimatch.set[r], r, !1)
            this._finish()
        }
        ;(y.prototype._finish = function() {
            if ((c(this instanceof y), this.realpath)) {
                var t = this
                this.matches.forEach(function(e, n) {
                    var r = (t.matches[n] = Object.create(null))
                    for (var i in e)
                        try {
                            ;(i = t._makeAbs(i)),
                                (r[o.realpathSync(i, t.realpathCache)] = !0)
                        } catch (e) {
                            if ('stat' !== e.syscall) throw e
                            r[t._makeAbs(i)] = !0
                        }
                })
            }
            u.finish(this)
        }),
            (y.prototype._process = function(t, e, n) {
                c(this instanceof y)
                for (var r, o = 0; 'string' == typeof t[o]; ) o++
                switch (o) {
                    case t.length:
                        return void this._processSimple(t.join('/'), e)
                    case 0:
                        r = null
                        break
                    default:
                        r = t.slice(0, o).join('/')
                }
                var s,
                    u = t.slice(o)
                null === r
                    ? (s = '.')
                    : a(r) || a(t.join('/'))
                    ? ((r && a(r)) || (r = '/' + r), (s = r))
                    : (s = r)
                var l = this._makeAbs(s)
                h(this, s) ||
                    (u[0] === i.GLOBSTAR
                        ? this._processGlobStar(r, s, l, u, e, n)
                        : this._processReaddir(r, s, l, u, e, n))
            }),
            (y.prototype._processReaddir = function(t, e, n, r, o, i) {
                var c = this._readdir(n, i)
                if (c) {
                    for (
                        var a = r[0],
                            u = !!this.minimatch.negate,
                            l = a._glob,
                            f = this.dot || '.' === l.charAt(0),
                            h = [],
                            p = 0;
                        p < c.length;
                        p++
                    ) {
                        if ('.' !== (m = c[p]).charAt(0) || f)
                            (u && !t ? !m.match(a) : m.match(a)) && h.push(m)
                    }
                    var d = h.length
                    if (0 !== d)
                        if (1 !== r.length || this.mark || this.stat) {
                            r.shift()
                            for (p = 0; p < d; p++) {
                                var y
                                m = h[p]
                                ;(y = t ? [t, m] : [m]),
                                    this._process(y.concat(r), o, i)
                            }
                        } else {
                            this.matches[o] ||
                                (this.matches[o] = Object.create(null))
                            for (var p = 0; p < d; p++) {
                                var m = h[p]
                                t &&
                                    (m =
                                        '/' !== t.slice(-1)
                                            ? t + '/' + m
                                            : t + m),
                                    '/' !== m.charAt(0) ||
                                        this.nomount ||
                                        (m = s.join(this.root, m)),
                                    this._emitMatch(o, m)
                            }
                        }
                }
            }),
            (y.prototype._emitMatch = function(t, e) {
                if (!p(this, e)) {
                    var n = this._makeAbs(e)
                    if (
                        (this.mark && (e = this._mark(e)),
                        this.absolute && (e = n),
                        !this.matches[t][e])
                    ) {
                        if (this.nodir) {
                            var r = this.cache[n]
                            if ('DIR' === r || Array.isArray(r)) return
                        }
                        ;(this.matches[t][e] = !0), this.stat && this._stat(e)
                    }
                }
            }),
            (y.prototype._readdirInGlobStar = function(t) {
                if (this.follow) return this._readdir(t, !1)
                var e, n
                try {
                    n = r.lstatSync(t)
                } catch (t) {
                    if ('ENOENT' === t.code) return null
                }
                var o = n && n.isSymbolicLink()
                return (
                    (this.symlinks[t] = o),
                    o || !n || n.isDirectory()
                        ? (e = this._readdir(t, !1))
                        : (this.cache[t] = 'FILE'),
                    e
                )
            }),
            (y.prototype._readdir = function(t, e) {
                if (e && !f(this.symlinks, t)) return this._readdirInGlobStar(t)
                if (f(this.cache, t)) {
                    var n = this.cache[t]
                    if (!n || 'FILE' === n) return null
                    if (Array.isArray(n)) return n
                }
                try {
                    return this._readdirEntries(t, r.readdirSync(t))
                } catch (e) {
                    return this._readdirError(t, e), null
                }
            }),
            (y.prototype._readdirEntries = function(t, e) {
                if (!this.mark && !this.stat)
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n]
                        ;(r = '/' === t ? t + r : t + '/' + r),
                            (this.cache[r] = !0)
                    }
                return (this.cache[t] = e), e
            }),
            (y.prototype._readdirError = function(t, e) {
                switch (e.code) {
                    case 'ENOTSUP':
                    case 'ENOTDIR':
                        var n = this._makeAbs(t)
                        if (((this.cache[n] = 'FILE'), n === this.cwdAbs)) {
                            var r = new Error(
                                e.code + ' invalid cwd ' + this.cwd
                            )
                            throw ((r.path = this.cwd), (r.code = e.code), r)
                        }
                        break
                    case 'ENOENT':
                    case 'ELOOP':
                    case 'ENAMETOOLONG':
                    case 'UNKNOWN':
                        this.cache[this._makeAbs(t)] = !1
                        break
                    default:
                        if (((this.cache[this._makeAbs(t)] = !1), this.strict))
                            throw e
                        this.silent || console.error('glob error', e)
                }
            }),
            (y.prototype._processGlobStar = function(t, e, n, r, o, i) {
                var s = this._readdir(n, i)
                if (s) {
                    var c = r.slice(1),
                        a = t ? [t] : [],
                        u = a.concat(c)
                    this._process(u, o, !1)
                    var l = s.length
                    if (!this.symlinks[n] || !i)
                        for (var f = 0; f < l; f++) {
                            if ('.' !== s[f].charAt(0) || this.dot) {
                                var h = a.concat(s[f], c)
                                this._process(h, o, !0)
                                var p = a.concat(s[f], r)
                                this._process(p, o, !0)
                            }
                        }
                }
            }),
            (y.prototype._processSimple = function(t, e) {
                var n = this._stat(t)
                if (
                    (this.matches[e] || (this.matches[e] = Object.create(null)),
                    n)
                ) {
                    if (t && a(t) && !this.nomount) {
                        var r = /[\/\\]$/.test(t)
                        '/' === t.charAt(0)
                            ? (t = s.join(this.root, t))
                            : ((t = s.resolve(this.root, t)), r && (t += '/'))
                    }
                    'win32' === process.platform && (t = t.replace(/\\/g, '/')),
                        this._emitMatch(e, t)
                }
            }),
            (y.prototype._stat = function(t) {
                var e = this._makeAbs(t),
                    n = '/' === t.slice(-1)
                if (t.length > this.maxLength) return !1
                if (!this.stat && f(this.cache, e)) {
                    var o = this.cache[e]
                    if ((Array.isArray(o) && (o = 'DIR'), !n || 'DIR' === o))
                        return o
                    if (n && 'FILE' === o) return !1
                }
                var i = this.statCache[e]
                if (!i) {
                    var s
                    try {
                        s = r.lstatSync(e)
                    } catch (t) {
                        if (t && ('ENOENT' === t.code || 'ENOTDIR' === t.code))
                            return (this.statCache[e] = !1), !1
                    }
                    if (s && s.isSymbolicLink())
                        try {
                            i = r.statSync(e)
                        } catch (t) {
                            i = s
                        }
                    else i = s
                }
                this.statCache[e] = i
                o = !0
                return (
                    i && (o = i.isDirectory() ? 'DIR' : 'FILE'),
                    (this.cache[e] = this.cache[e] || o),
                    (!n || 'FILE' !== o) && o
                )
            }),
            (y.prototype._mark = function(t) {
                return u.mark(this, t)
            }),
            (y.prototype._makeAbs = function(t) {
                return u.makeAbs(this, t)
            })
    },
    function(t, e, n) {
        var r = n(25),
            o = Object.create(null),
            i = n(26)
        function s(t) {
            for (var e = t.length, n = [], r = 0; r < e; r++) n[r] = t[r]
            return n
        }
        t.exports = r(function(t, e) {
            return o[t]
                ? (o[t].push(e), null)
                : ((o[t] = [e]),
                  (function(t) {
                      return i(function e() {
                          var n = o[t],
                              r = n.length,
                              i = s(arguments)
                          try {
                              for (var c = 0; c < r; c++) n[c].apply(null, i)
                          } finally {
                              n.length > r
                                  ? (n.splice(0, r),
                                    process.nextTick(function() {
                                        e.apply(null, i)
                                    }))
                                  : delete o[t]
                          }
                      })
                  })(t))
        })
    },
    function(t, e, n) {
        'use strict'
        const r = n(78)
        t.exports = function(t, e) {
            const {
                ignore: n,
                disableGlobs: o,
                allowEmptyPaths: i,
                glob: s,
            } = e
            return o
                ? Promise.resolve(t)
                : Promise.all(t.map(t => r(t, n, i, s))).then(t =>
                      [].concat.apply([], t)
                  )
        }
    },
    function(t, e, n) {
        'use strict'
        const r = n(10)
        t.exports = function(t, e, n, o) {
            return (
                (o = Object.assign({ ignore: e }, o, { nodir: !0 })),
                new Promise((e, i) => {
                    r(t, o, (r, o) =>
                        r
                            ? i(r)
                            : n || 0 !== o.length
                            ? void e(o)
                            : i(new Error('No files match the pattern: ' + t))
                    )
                })
            )
        }
    },
    function(t, e, n) {
        'use strict'
        const r = n(4),
            o = n(27)
        t.exports = function(t, e, n, i) {
            const { encoding: s, dry: c, countMatches: a } = i,
                u = r.readFileSync(t, s),
                [l, f] = o(u, e, n, t, a)
            return l.hasChanged && !c && r.writeFileSync(t, f, s), l
        }
    },
    function(t, e, n) {
        'use strict'
        const r = n(4),
            o = n(27)
        t.exports = function(t, e, n, i) {
            const { encoding: s, dry: c, countMatches: a } = i
            return new Promise((i, u) => {
                r.readFile(t, s, (l, f) => {
                    if (l) return u(l)
                    const [h, p] = o(f, e, n, t, a)
                    if (!h.hasChanged || c) return i(h)
                    r.writeFile(t, p, s, t => {
                        if (t) return u(t)
                        i(h)
                    })
                })
            })
        }
    },
    function(t, e) {
        const n = {
            EXPORT: {
                name: 'index.js',
                content: "export { default } from './Template';",
            },
            MAIN: {
                name: 'Template.js',
                content:
                    'import React from "react";\nimport PropTypes from "prop-types";\nimport { TemplateStyled } from "./Template.styles";\n\nconst Template = ({ children }) => {\n  return <TemplateStyled>{children}</TemplateStyled>;\n};\n\nTemplate.defaultProps = {\n  children: "Template"\n};\n\nTemplate.propTypes = {\n  children: PropTypes.oneOfType([\n    PropTypes.arrayOf(PropTypes.node),\n    PropTypes.node,\n    PropTypes.string\n  ])\n};\n\nexport default Template;\n    ',
            },
            STORIES: {
                name: 'Template.stories.js',
                content:
                    "import React from 'react';\nimport { storiesOf } from '@storybook/react';\n\nstoriesOf('Template', module)\n  .addDecorator(storyFn => <div>{storyFn()}</div>)\n  .add('Stories', () => <div />);",
            },
            STYLES: {
                name: 'Template.styles.js',
                content:
                    "import styled, { css } from 'styled-components';\n\nexport const TemplateStyled = styled.div`\n  ${({ theme = {} }) => {\n    return css``;\n  }}\n`;",
            },
            TEST: {
                name: 'Template.test.js',
                content:
                    "import React from 'react';\nimport Template from './Template';\n\nit('', () => {});\n    ",
            },
        }
        t.exports = n
    },
    function(t, e, n) {
        const r = n(0),
            o = n(13),
            i = n(21)
        t.exports = t => e =>
            new Promise((n, s) => {
                const c = r.basename(t),
                    a = e,
                    u = r.join(r.resolve(t, '../'), e)
                try {
                    o.renameSync(t, u)
                    const e = o.readdirSync(u),
                        r = new RegExp(c, 'g')
                    e.forEach(t => {
                        if (t.includes(c)) {
                            const e = u + '/' + t,
                                n = t.replace(r, a),
                                i = u + '/' + n
                            o.renameSync(e, i)
                        }
                    }),
                        i({ files: u + '/*.js', from: r, to: a }),
                        n(
                            `Your component Folder "${c}" was succesfully renamed to ${a}!`
                        )
                } catch (t) {
                    s(t)
                }
            })
    },
])
//# sourceMappingURL=index.js.map
