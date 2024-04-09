var n = globalThis
  , e = {}
  , t = {}
  , o = n.parcelRequireffaf;
null == o && ((o = function(n) {
    if (n in e)
        return e[n].exports;
    if (n in t) {
        var o = t[n];
        delete t[n];
        var i = {
            id: n,
            exports: {}
        };
        return e[n] = i,
        o.call(i.exports, i, i.exports),
        i.exports
    }
    var r = Error("Cannot find module '" + n + "'");
    throw r.code = "MODULE_NOT_FOUND",
    r
}
).register = function(n, e) {
    t[n] = e
}
,
n.parcelRequireffaf = o),
(0,
o.register)("fZjoV", function(n, e) {
    Object.defineProperty(n.exports, "default", {
        get: ()=>o,
        set: void 0,
        enumerable: !0,
        configurable: !0
    });
    let t = function() {
        let n = "no platform"
          , e = "POCInterface"
          , t = "no user state"
          , o = null
          , i = null
          , r = null
          , l = null
          , c = null
          , u = function(n, e) {
            let t = document.getElementById(n);
            t ? t.innerText = e : console.warn(`Missing node with id "${n}"`)
        }
          , a = function() {
            u("platform_holder", n)
        }
          , d = function() {
            u("status_holder", t)
        }
          , f = function() {
            void 0 !== window.webkit && void 0 !== window.webkit.messageHandlers ? n = "iOS" : void 0 !== window[e] ? n = "Android" : console.warn("No platform detected."),
            a()
        }
          , s = function() {
            document.getElementById("exit_button")?.addEventListener("click", function(n) {
                n.preventDefault(),
                y()
            })
        }
          , p = function() {
            let n = document.getElementById("link_input");
            document.getElementById("link_button")?.addEventListener("click", function(e) {
                e.preventDefault(),
                v(n.value)
            })
        }
          , h = function(t, o, i=!1) {
            if ("iOS" === n) {
                let n = null == o ? "nil" : o;
                window.webkit.messageHandlers[t].postMessage(n)
            } else if ("Android" === n) {
                var r;
                let n = [];
                n = i || "object" != typeof (r = o) || Array.isArray(r) || null === r ? null == o ? [] : Array.isArray(o) ? o : [o] : Object.values(o);
                try {
                    window[e][t](...n)
                } catch (o) {
                    console.warn(o),
                    n.length || window[e][t](null)
                }
            } else
                console.error(`Invalid handle: ${n}`)
        }
          , w = function(n) {
            h("onGameInitialized", n)
        }
          , y = function() {
            h("exit")
        }
          , v = function(n) {
            h("openDeeplink", n)
        };
        return {
            init: function(n) {
                d(),
                f(),
                s(),
                p(),
                w(n)
            },
            onExit: y,
            onOpenDeeplink: v,
            setUserState: function(n) {
                null != o ? o(n) : (t = n,
                d())
            },
            attachSetStateFunction: n=>o = n,
            detachSetStateFunction: ()=>o = null,
            encryptContent: function(n, e) {
                h("encryptContent", {
                    contentId: n,
                    content: e
                })
            },
            onContentEncrypted: (n,e)=>i?.(n, e),
            attachOnContentEncrypted: n=>i = n,
            decryptContent: function(n, e) {
                h("decryptContent", {
                    contentId: n,
                    content: e
                })
            },
            onContentDecrypted: (n,e)=>r?.(n, e),
            attachOnContentDecrypted: n=>r = n,
            onAuthRefreshed: n=>l?.(n),
            attachOnAuthRefreshed: n=>l = n,
            onInit: n=>c?.(n),
            attachOnInit: n=>c = n,
            refreshAuth: function() {
                h("refreshAuth")
            },
            close: function() {
                h("close")
            },
            share: function(n) {
                h("share", n)
            }
        }
    }();
    window.TheApp = t;
    var o = t
}),
o("fZjoV");
//# sourceMappingURL=index.721f9003.js.map
