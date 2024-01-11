'use strict';

function w(f, a, b, d) {
    f.A.oc(f.$a, a, b, d, void 0)
}

function H(f, a, b, d) {
    f.A.ca ? w(f, a, b, d) : f.A.ff()._OnMessageFromDOM({
        type: "event",
        component: f.$a,
        handler: a,
        dispatchOpts: d || null,
        data: b,
        responseId: null
    })
}

function J(f, a, b) {
    f.A.C(f.$a, a, b)
}

function L(f, a) {
    for (const [b, d] of a) J(f, b, d)
}

function M(f) {
    f.Rb || (f.A.Re(f.be), f.Rb = !0)
}
window.Ra = class {
    constructor(f, a) {
        this.A = f;
        this.$a = a;
        this.Rb = !1;
        this.be = () => this.Da()
    }
    gd() {}
    Da() {}
};

function N(f) {
    -1 !== f.Pa && (self.clearTimeout(f.Pa), f.Pa = -1)
}
window.Ie = class {
    constructor(f, a) {
        this.Nc = f;
        this.tg = a;
        this.Pa = -1;
        this.Sb = -Infinity;
        this.ce = () => {
            this.Pa = -1;
            this.Sb = Date.now();
            this.fb = !0;
            this.Nc();
            this.fb = !1
        };
        this.Ld = this.fb = !1
    }
    c() {
        N(this);
        this.ce = this.Nc = null
    }
};
"use strict";

function O(f, a) {
    J(f, "get-element", b => {
        const d = f.ba.get(b.elementId);
        return a(d, b)
    })
}
window.Og = class extends self.Ra {
    constructor(f, a) {
        super(f, a);
        this.ba = new Map;
        this.Mc = !0;
        L(this, [
            ["create", () => {
                throw Error("required override");
            }],
            ["destroy", b => {
                {
                    b = b.elementId;
                    const d = this.ba.get(b);
                    this.Mc && d.parentElement.removeChild(d);
                    this.ba.delete(b)
                }
            }],
            ["set-visible", b => {
                this.Mc && (this.ba.get(b.elementId).style.display = b.isVisible ? "" : "none")
            }],
            ["update-position", b => {
                if (this.Mc) {
                    var d = this.ba.get(b.elementId);
                    d.style.left = b.left + "px";
                    d.style.top = b.top + "px";
                    d.style.width = b.width + "px";
                    d.style.height =
                        b.height + "px";
                    b = b.fontSize;
                    null !== b && (d.style.fontSize = b + "em")
                }
            }],
            ["update-state", b => {
                this.ba.get(b.elementId);
                throw Error("required override");
            }],
            ["focus", b => this.Gc(b)],
            ["set-css-style", b => {
                this.ba.get(b.elementId).style[b.prop] = b.val
            }],
            ["set-attribute", b => {
                this.ba.get(b.elementId).setAttribute(b.name, b.val)
            }],
            ["remove-attribute", b => {
                this.ba.get(b.elementId).removeAttribute(b.name)
            }]
        ]);
        O(this, b => b)
    }
    Gc(f) {
        var a = this.ba.get(f.elementId);
        f.focus ? a.focus() : a.blur()
    }
};
"use strict"; {
    const f = /(iphone|ipod|ipad|macos|macintosh|mac os x)/i.test(navigator.userAgent);
    let a = 0;

    function b(m) {
        const c = document.createElement("script");
        c.async = !1;
        c.type = "module";
        return m.Eg ? new Promise(k => {
            const l = "c3_resolve_" + a;
            ++a;
            self[l] = k;
            c.textContent = m.Ig + `\n\nself["${l}"]();`;
            document.head.appendChild(c)
        }) : new Promise((k, l) => {
            c.onload = k;
            c.onerror = l;
            c.src = m;
            document.head.appendChild(c)
        })
    }
    let d = !1,
        g = !1;

    function n() {
        if (!d) {
            try {
                new Worker("blob://", {
                    get type() {
                        g = !0
                    }
                })
            } catch (m) {}
            d = !0
        }
        return g
    }
    const q =
        /safari\//i.test(navigator.userAgent) && !/chrome\/|chromium\/|edg\//i.test(navigator.userAgent);
    let v = new Audio;
    const B = {
        "audio/webm; codecs=opus": !!v.canPlayType("audio/webm; codecs=opus") && !q,
        "audio/ogg; codecs=opus": !!v.canPlayType("audio/ogg; codecs=opus"),
        "audio/webm; codecs=vorbis": !!v.canPlayType("audio/webm; codecs=vorbis"),
        "audio/ogg; codecs=vorbis": !!v.canPlayType("audio/ogg; codecs=vorbis"),
        "audio/mp4": !!v.canPlayType("audio/mp4"),
        "audio/mpeg": !!v.canPlayType("audio/mpeg")
    };
    v = null;
    async function D(m) {
        m =
            await x(m);
        return (new TextDecoder("utf-8")).decode(m)
    }

    function x(m) {
        return new Promise((c, k) => {
            const l = new FileReader;
            l.onload = p => c(p.target.result);
            l.onerror = p => k(p);
            l.readAsArrayBuffer(m)
        })
    }
    const y = [];
    let C = 0;
    window.RealFile = window.File;
    const E = [],
        A = new Map,
        F = new Map;
    let I = 0;
    const K = [];
    self.runOnStartup = function(m) {
        if ("function" !== typeof m) throw Error("runOnStartup called without a function");
        K.push(m)
    };
    const e = new Set(["cordova", "playable-ad", "instant-games"]);
    let h = !1;
    window.ta = class m {
        constructor(c) {
            this.ca =
                c.Kg;
            this.oa = null;
            this.F = "";
            this.bc = c.Hg;
            this.ub = {};
            this.Ia = this.tb = null;
            this.Pb = [];
            this.ib = this.K = this.Na = null;
            this.Ma = -1;
            this.yg = () => this.Ef();
            this.La = [];
            this.s = c.de;
            this.gb = "file" === location.protocol.substr(0, 4);
            !this.ca || "undefined" !== typeof OffscreenCanvas && navigator.userActivation && n() || (this.ca = !1);
            if ("playable-ad" === this.s || "instant-games" === this.s) this.ca = !1;
            if ("cordova" === this.s && this.ca)
                if (/android/i.test(navigator.userAgent)) {
                    const k = /Chrome\/(\d+)/i.exec(navigator.userAgent);
                    k && 90 <= parseInt(k[1],
                        10) || (this.ca = !1)
                } else this.ca = !1;
            this.Ub = this.ha = null;
            "html5" !== this.s && "playable-ad" !== this.s || !this.gb || alert("Exported games won't work until you upload them. (When running on the file: protocol, browsers block many features from working for security reasons.)");
            this.C("runtime", "cordova-fetch-local-file", k => this.nf(k));
            this.C("runtime", "create-job-worker", () => this.pf());
            "cordova" === this.s ? document.addEventListener("deviceready", () => this.yd(c)) : this.yd(c)
        }
        c() {
            this.uc();
            this.oa && (this.oa = this.oa.onmessage =
                null);
            this.tb && (this.tb.terminate(), this.tb = null);
            this.Ia && (this.Ia.c(), this.Ia = null);
            this.K && (this.K.parentElement.removeChild(this.K), this.K = null)
        }
        De() {
            return f && "cordova" === this.s
        }
        nc() {
            const c = navigator.userAgent;
            return f && e.has(this.s) || navigator.standalone || /crios\/|fxios\/|edgios\//i.test(c)
        }
        async yd(c) {
            "macos-wkwebview" === this.s && this.Kc({
                type: "ready"
            });
            if ("playable-ad" === this.s) {
                this.ha = self.c3_base64files;
                this.Ub = {};
                await this.We();
                for (let l = 0, p = c.Qa.length; l < p; ++l) {
                    var k = c.Qa[l].toLowerCase();
                    this.Ub.hasOwnProperty(k) ? c.Qa[l] = {
                        Eg: !0,
                        Ig: this.Ub[k]
                    } : this.ha.hasOwnProperty(k) && (c.Qa[l] = URL.createObjectURL(this.ha[k]))
                }
            }
            c.zg ? this.F = c.zg : (k = location.origin, this.F = ("null" === k ? "file:///" : k) + location.pathname, k = this.F.lastIndexOf("/"), -1 !== k && (this.F = this.F.substr(0, k + 1)));
            c.Mg && (this.ub = c.Mg);
            k = new MessageChannel;
            this.oa = k.port1;
            this.oa.onmessage = l => this._OnMessageFromRuntime(l.data);
            window.c3_addPortMessageHandler && window.c3_addPortMessageHandler(l => this.Af(l));
            this.ib = new self.Ee(this);
            await P(this.ib);
            "object" === typeof window.StatusBar && window.StatusBar.hide();
            "object" === typeof window.AndroidFullScreen && window.AndroidFullScreen.immersiveMode();
            this.ca ? await this.hf(c, k.port2) : await this.gf(c, k.port2)
        }
        xc(c) {
            c = this.ub.hasOwnProperty(c) ? this.ub[c] : c.endsWith("/workermain.js") && this.ub.hasOwnProperty("workermain.js") ? this.ub["workermain.js"] : "playable-ad" === this.s && this.ha.hasOwnProperty(c.toLowerCase()) ? this.ha[c.toLowerCase()] : c;
            c instanceof Blob && (c = URL.createObjectURL(c));
            return c
        }
        async hc(c, k,
            l) {
            if (c.startsWith("blob:")) return new Worker(c, l);
            if ("cordova" === this.s && this.gb) return c = await this.wb(l.Dg ? c : this.bc + c), new Worker(URL.createObjectURL(new Blob([c], {
                type: "application/javascript"
            })), l);
            c = new URL(c, k);
            if (location.origin !== c.origin) {
                c = await fetch(c);
                if (!c.ok) throw Error("failed to fetch worker script");
                c = await c.blob();
                return new Worker(URL.createObjectURL(c), l)
            }
            return new Worker(c, l)
        }
        wa() {
            return Math.max(window.innerWidth, 1)
        }
        va() {
            return Math.max(window.innerHeight, 1)
        }
        xd(c) {
            var k =
                this.ib;
            return {
                baseUrl: this.F,
                windowInnerWidth: this.wa(),
                windowInnerHeight: this.va(),
                devicePixelRatio: window.devicePixelRatio,
                isFullscreen: m.Ua(),
                projectData: c.Tg,
                previewImageBlobs: window.cr_previewImageBlobs || this.ha,
                previewProjectFileBlobs: window.cr_previewProjectFileBlobs,
                previewProjectFileSWUrls: window.cr_previewProjectFiles,
                swClientId: window.Rg || "",
                exportType: c.de,
                isDebug: -1 < self.location.search.indexOf("debug"),
                ife: !!self.Sg,
                jobScheduler: {
                    inputPort: k.Tc,
                    outputPort: k.$c,
                    maxNumWorkers: k.vg
                },
                supportedAudioFormats: B,
                opusWasmScriptUrl: window.cr_opusWasmScriptUrl || this.bc + "opus.wasm.js",
                opusWasmBinaryUrl: window.cr_opusWasmBinaryUrl || this.bc + "opus.wasm.wasm",
                isFileProtocol: this.gb,
                isiOSCordova: this.De(),
                isiOSWebView: this.nc(),
                isFBInstantAvailable: "undefined" !== typeof self.FBInstant
            }
        }
        async hf(c, k) {
            var l = this.xc(c.Lg);
            this.tb = await this.hc(l, this.F, {
                type: "module",
                name: "Runtime",
                Dg: !0
            });
            this.K = document.createElement("canvas");
            this.K.style.display = "none";
            l = this.K.transferControlToOffscreen();
            document.body.appendChild(this.K);
            window.c3canvas = this.K;
            let p = c.fd || [],
                u = c.Qa;
            p = await Promise.all(p.map(r => this.Ea(r)));
            u = await Promise.all(u.map(r => this.Ea(r)));
            if ("cordova" === this.s)
                for (let r = 0, t = c.ec.length; r < t; ++r) {
                    const z = c.ec[r],
                        G = z[0];
                    if (G === c.dd || "scriptsInEvents.js" === G || G.endsWith("/scriptsInEvents.js")) z[1] = await this.Ea(G)
                }
            this.tb.postMessage(Object.assign(this.xd(c), {
                type: "init-runtime",
                isInWorker: !0,
                messagePort: k,
                canvas: l,
                workerDependencyScripts: p,
                engineScripts: u,
                projectScripts: c.ec,
                mainProjectScript: c.dd,
                projectScriptsStatus: self.C3_ProjectScriptsStatus
            }), [k, l, ...Q(this.ib)]);
            this.Pb = E.map(r => new r(this));
            this.wd();
            self.c3_callFunction = (r, t) => this.Na.jf(r, t);
            "preview" === this.s && (self.goToLastErrorScript = () => this.oc("runtime", "go-to-last-error-script"))
        }
        async gf(c, k) {
            this.K = document.createElement("canvas");
            this.K.style.display = "none";
            document.body.appendChild(this.K);
            window.c3canvas = this.K;
            this.Pb = E.map(r => new r(this));
            this.wd();
            var l = c.Qa.map(r => "string" === typeof r ? (new URL(r, this.F)).toString() : r);
            Array.isArray(c.fd) && l.unshift(...c.fd);
            l = await Promise.all(l.map(r =>
                this.Ea(r)));
            await Promise.all(l.map(r => b(r)));
            l = self.C3_ProjectScriptsStatus;
            const p = c.dd,
                u = c.ec;
            for (let [r, t] of u)
                if (t || (t = r), r === p) try {
                    t = await this.Ea(t), await b(t), "preview" !== this.s || l[r] || this.Gd(r, "main script did not run to completion")
                } catch (z) {
                    this.Gd(r, z)
                } else if ("scriptsInEvents.js" === r || r.endsWith("/scriptsInEvents.js")) t = await this.Ea(t), await b(t);
            "preview" === this.s && "object" !== typeof self.Ng.Pg ? (this.Ib(), console.error("[C3 runtime] Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax."),
                alert("Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax.")) : (c = Object.assign(this.xd(c), {
                isInWorker: !1,
                messagePort: k,
                canvas: this.K,
                runOnStartupFunctions: K
            }), this.Ad(), this.Ia = self.C3_CreateRuntime(c), await self.C3_InitRuntime(this.Ia, c))
        }
        Gd(c, k) {
            this.Ib();
            console.error(`[Preview] Failed to load project main script (${c}): `, k);
            alert(`Failed to load project main script (${c}). Check all your JavaScript code has valid syntax. Press F12 and check the console for error details.`)
        }
        Ad() {
            this.Ib()
        }
        Ib() {
            const c =
                window.Ag;
            c && (c.parentElement.removeChild(c), window.Ag = null)
        }
        async pf() {
            const c = await R(this.ib);
            return {
                outputPort: c,
                transferables: [c]
            }
        }
        ff() {
            if (this.ca) throw Error("not available in worker mode");
            return this.Ia
        }
        oc(c, k, l, p, u) {
            this.oa.postMessage({
                type: "event",
                component: c,
                handler: k,
                dispatchOpts: p || null,
                data: l,
                responseId: null
            }, u)
        }
        pd(c, k, l, p, u) {
            const r = I++,
                t = new Promise((z, G) => {
                    F.set(r, {
                        resolve: z,
                        reject: G
                    })
                });
            this.oa.postMessage({
                    type: "event",
                    component: c,
                    handler: k,
                    dispatchOpts: p || null,
                    data: l,
                    responseId: r
                },
                u);
            return t
        }["_OnMessageFromRuntime"](c) {
            const k = c.type;
            if ("event" === k) return this.uf(c);
            if ("result" === k) this.Hf(c);
            else if ("runtime-ready" === k) this.If();
            else if ("alert-error" === k) this.Ib(), alert(c.message);
            else if ("creating-runtime" === k) this.Ad();
            else throw Error(`unknown message '${k}'`);
        }
        uf(c) {
            const k = c.component,
                l = c.handler,
                p = c.data,
                u = c.responseId;
            if (c = A.get(k))
                if (c = c.get(l)) {
                    var r = null;
                    try {
                        r = c(p)
                    } catch (t) {
                        console.error(`Exception in '${k}' handler '${l}':`, t);
                        null !== u && this.Hb(u, !1, "" + t);
                        return
                    }
                    if (null ===
                        u) return r;
                    r && r.then ? r.then(t => this.Hb(u, !0, t)).catch(t => {
                        console.error(`Rejection from '${k}' handler '${l}':`, t);
                        this.Hb(u, !1, "" + t)
                    }) : this.Hb(u, !0, r)
                } else console.warn(`[DOM] No handler '${l}' for component '${k}'`);
            else console.warn(`[DOM] No event handlers for component '${k}'`)
        }
        Hb(c, k, l) {
            let p;
            l && l.transferables && (p = l.transferables);
            this.oa.postMessage({
                type: "result",
                responseId: c,
                isOk: k,
                result: l
            }, p)
        }
        Hf(c) {
            const k = c.responseId,
                l = c.isOk;
            c = c.result;
            const p = F.get(k);
            l ? p.resolve(c) : p.reject(c);
            F.delete(k)
        }
        C(c,
            k, l) {
            let p = A.get(c);
            p || (p = new Map, A.set(c, p));
            if (p.has(k)) throw Error(`[DOM] Component '${c}' already has handler '${k}'`);
            p.set(k, l)
        }
        static vb(c) {
            if (E.includes(c)) throw Error("DOM handler already added");
            E.push(c)
        }
        wd() {
            for (const c of this.Pb)
                if ("runtime" === c.$a) {
                    this.Na = c;
                    return
                }
            throw Error("cannot find runtime DOM handler");
        }
        Af(c) {
            this.oc("debugger", "message", c)
        }
        If() {
            for (const c of this.Pb) c.gd()
        }
        static Ua() {
            return !!(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement ||
                h)
        }
        static Jb(c) {
            h = !!c
        }
        Re(c) {
            this.La.push(c);
            this.Jc()
        }
        Uf(c) {
            c = this.La.indexOf(c);
            if (-1 === c) throw Error("invalid callback");
            this.La.splice(c, 1);
            this.La.length || this.uc()
        }
        Jc() {
            -1 === this.Ma && this.La.length && (this.Ma = requestAnimationFrame(this.yg))
        }
        uc() {
            -1 !== this.Ma && (cancelAnimationFrame(this.Ma), this.Ma = -1)
        }
        Ef() {
            this.Ma = -1;
            for (const c of this.La) c();
            this.Jc()
        }
        ua(c) {
            this.Na.ua(c)
        }
        Ca(c) {
            this.Na.Ca(c)
        }
        Ic() {
            this.Na.Ic()
        }
        Cb(c) {
            this.Na.Cb(c)
        }
        Ce() {
            return !!B["audio/webm; codecs=opus"]
        }
        async rg(c) {
            c = await this.pd("runtime",
                "opus-decode", {
                    arrayBuffer: c
                }, null, [c]);
            return new Float32Array(c)
        }
        Be(c) {
            return /^(?:[a-z\-]+:)?\/\//.test(c) || "data:" === c.substr(0, 5) || "blob:" === c.substr(0, 5)
        }
        od(c) {
            return !this.Be(c)
        }
        async Ea(c) {
            return "cordova" === this.s && (c.startsWith("file:") || this.gb && this.od(c)) ? (c.startsWith(this.F) && (c = c.substr(this.F.length)), c = await this.wb(c), URL.createObjectURL(new Blob([c], {
                type: "application/javascript"
            }))) : c
        }
        async nf(c) {
            const k = c.filename;
            switch (c.as) {
                case "text":
                    return await this.ue(k);
                case "buffer":
                    return await this.wb(k);
                default:
                    throw Error("unsupported type");
            }
        }
        kd(c) {
            const k = window.cordova.file.applicationDirectory + "www/" + c.toLowerCase();
            return new Promise((l, p) => {
                window.resolveLocalFileSystemURL(k, u => {
                    u.file(l, p)
                }, p)
            })
        }
        async ue(c) {
            c = await this.kd(c);
            return await D(c)
        }
        vc() {
            if (y.length && !(8 <= C)) {
                C++;
                var c = y.shift();
                this.Xe(c.filename, c.Jg, c.Cg)
            }
        }
        wb(c) {
            return new Promise((k, l) => {
                y.push({
                    filename: c,
                    Jg: p => {
                        C--;
                        this.vc();
                        k(p)
                    },
                    Cg: p => {
                        C--;
                        this.vc();
                        l(p)
                    }
                });
                this.vc()
            })
        }
        async Xe(c, k, l) {
            try {
                const p = await this.kd(c),
                    u = await x(p);
                k(u)
            } catch (p) {
                l(p)
            }
        }
        Kc(c) {
            if ("windows-webview2" === this.s) window.chrome.webview.postMessage(JSON.stringify(c));
            else if ("macos-wkwebview" === this.s) window.webkit.messageHandlers.C3Wrapper.postMessage(JSON.stringify(c));
            else throw Error("cannot send wrapper message");
        }
        async We() {
            const c = [];
            for (const [k, l] of Object.entries(this.ha)) c.push(this.Ve(k, l));
            await Promise.all(c)
        }
        async Ve(c, k) {
            if ("object" === typeof k) this.ha[c] = new Blob([k.str], {
                type: k.type
            }), this.Ub[c] = k.str;
            else {
                let l = await this.df(k);
                l || (l =
                    this.Ze(k));
                this.ha[c] = l
            }
        }
        async df(c) {
            try {
                return await (await fetch(c)).blob()
            } catch (k) {
                return console.warn("Failed to fetch a data: URI. Falling back to a slower workaround. This is probably because the Content Security Policy unnecessarily blocked it. Allow data: URIs in your CSP to avoid this.", k), null
            }
        }
        Ze(c) {
            c = this.Of(c);
            return this.Ue(c.data, c.Fg)
        }
        Of(c) {
            var k = c.indexOf(",");
            if (0 > k) throw new URIError("expected comma in data: uri");
            var l = c.substring(k + 1);
            k = c.substring(5, k).split(";");
            c = k[0] || "";
            const p = k[2];
            l = "base64" === k[1] || "base64" === p ? atob(l) : decodeURIComponent(l);
            return {
                Fg: c,
                data: l
            }
        }
        Ue(c, k) {
            var l = c.length;
            let p = l >> 2,
                u = new Uint8Array(l),
                r = new Uint32Array(u.buffer, 0, p),
                t, z;
            for (z = t = 0; t < p; ++t) r[t] = c.charCodeAt(z++) | c.charCodeAt(z++) << 8 | c.charCodeAt(z++) << 16 | c.charCodeAt(z++) << 24;
            for (l &= 3; l--;) u[z] = c.charCodeAt(z), ++z;
            return new Blob([u], {
                type: k
            })
        }
    }
}
"use strict"; {
    const f = self.ta;

    function a(e) {
        return e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents || e.originalEvent && e.originalEvent.sourceCapabilities && e.originalEvent.sourceCapabilities.firesTouchEvents
    }
    const b = new Map([
            ["OSLeft", "MetaLeft"],
            ["OSRight", "MetaRight"]
        ]),
        d = {
            dispatchRuntimeEvent: !0,
            dispatchUserScriptEvent: !0
        },
        g = {
            dispatchUserScriptEvent: !0
        },
        n = {
            dispatchRuntimeEvent: !0
        };

    function q(e) {
        return new Promise((h, m) => {
            const c = document.createElement("link");
            c.onload = () => h(c);
            c.onerror = k => m(k);
            c.rel =
                "stylesheet";
            c.href = e;
            document.head.appendChild(c)
        })
    }

    function v(e) {
        return new Promise((h, m) => {
            const c = new Image;
            c.onload = () => h(c);
            c.onerror = k => m(k);
            c.src = e
        })
    }
    async function B(e) {
        e = URL.createObjectURL(e);
        try {
            return await v(e)
        } finally {
            URL.revokeObjectURL(e)
        }
    }

    function D(e) {
        return new Promise((h, m) => {
            let c = new FileReader;
            c.onload = k => h(k.target.result);
            c.onerror = k => m(k);
            c.readAsText(e)
        })
    }
    async function x(e, h, m) {
        if (!/firefox/i.test(navigator.userAgent)) return await B(e);
        var c = await D(e);
        c = (new DOMParser).parseFromString(c,
            "image/svg+xml");
        const k = c.documentElement;
        if (k.hasAttribute("width") && k.hasAttribute("height")) {
            const l = k.getAttribute("width"),
                p = k.getAttribute("height");
            if (!l.includes("%") && !p.includes("%")) return await B(e)
        }
        k.setAttribute("width", h + "px");
        k.setAttribute("height", m + "px");
        c = (new XMLSerializer).serializeToString(c);
        e = new Blob([c], {
            type: "image/svg+xml"
        });
        return await B(e)
    }

    function y(e) {
        do {
            if (e.parentNode && e.hasAttribute("contenteditable")) return !0;
            e = e.parentNode
        } while (e);
        return !1
    }
    const C = new Set(["input",
            "textarea", "datalist", "select"
        ]),
        E = new Set(["canvas", "body", "html"]);

    function A(e) {
        E.has(e.target.tagName.toLowerCase()) && e.preventDefault()
    }

    function F(e) {
        (e.metaKey || e.ctrlKey) && e.preventDefault()
    }
    self.C3_GetSvgImageSize = async function(e) {
        e = await B(e);
        if (0 < e.width && 0 < e.height) return [e.width, e.height]; {
            e.style.position = "absolute";
            e.style.left = "0px";
            e.style.top = "0px";
            e.style.visibility = "hidden";
            document.body.appendChild(e);
            const h = e.getBoundingClientRect();
            document.body.removeChild(e);
            return [h.width,
                h.height
            ]
        }
    };
    self.C3_RasterSvgImageBlob = async function(e, h, m, c, k) {
        e = await x(e, h, m);
        const l = document.createElement("canvas");
        l.width = c;
        l.height = k;
        l.getContext("2d").drawImage(e, 0, 0, h, m);
        return l
    };
    let I = !1;
    document.addEventListener("pause", () => I = !0);
    document.addEventListener("resume", () => I = !1);

    function K() {
        try {
            return window.parent && window.parent.document.hasFocus()
        } catch (e) {
            return !1
        }
    }
    f.vb(class extends self.Ra {
        constructor(e) {
            super(e, "runtime");
            this.Qd = !0;
            this.Oa = -1;
            this.bd = "any";
            this.Hd = this.Id = !1;
            this.Wc =
                this.qb = this.ya = null;
            e.C("canvas", "update-size", c => this.Lf(c));
            e.C("runtime", "invoke-download", c => this.yf(c));
            e.C("runtime", "raster-svg-image", c => this.Ff(c));
            e.C("runtime", "get-svg-image-size", c => this.wf(c));
            e.C("runtime", "set-target-orientation", c => this.Jf(c));
            e.C("runtime", "register-sw", () => this.Gf());
            e.C("runtime", "post-to-debugger", c => this.Cd(c));
            e.C("runtime", "go-to-script", c => this.Cd(c));
            e.C("runtime", "before-start-ticking", () => this.mf());
            e.C("runtime", "debug-highlight", c => this.qf(c));
            e.C("runtime",
                "enable-device-orientation", () => this.Te());
            e.C("runtime", "enable-device-motion", () => this.Se());
            e.C("runtime", "add-stylesheet", c => this.lf(c));
            e.C("runtime", "alert", c => this.Bc(c));
            e.C("runtime", "hide-cordova-splash", () => this.xf());
            const h = new Set(["input", "textarea", "datalist"]);
            window.addEventListener("contextmenu", c => {
                const k = c.target;
                h.has(k.tagName.toLowerCase()) || y(k) || c.preventDefault()
            });
            const m = e.K;
            window.addEventListener("selectstart", A);
            window.addEventListener("gesturehold", A);
            m.addEventListener("selectstart",
                A);
            m.addEventListener("gesturehold", A);
            window.addEventListener("touchstart", A, {
                passive: !1
            });
            "undefined" !== typeof PointerEvent ? (window.addEventListener("pointerdown", A, {
                passive: !1
            }), m.addEventListener("pointerdown", A)) : m.addEventListener("touchstart", A);
            this.nb = 0;
            window.addEventListener("mousedown", c => {
                1 === c.button && c.preventDefault()
            });
            window.addEventListener("mousewheel", F, {
                passive: !1
            });
            window.addEventListener("wheel", F, {
                passive: !1
            });
            window.addEventListener("resize", () => this.Mf());
            window.addEventListener("fullscreenchange",
                () => this.Wa());
            window.addEventListener("webkitfullscreenchange", () => this.Wa());
            window.addEventListener("mozfullscreenchange", () => this.Wa());
            window.addEventListener("fullscreenerror", c => this.Dc(c));
            window.addEventListener("webkitfullscreenerror", c => this.Dc(c));
            window.addEventListener("mozfullscreenerror", c => this.Dc(c));
            e.nc() && window.addEventListener("focusout", () => {
                {
                    const l = document.activeElement;
                    if (l) {
                        var c = l.tagName.toLowerCase();
                        var k = new Set("email number password search tel text url".split(" "));
                        c = "textarea" === c ? !0 : "input" === c ? k.has(l.type.toLowerCase() || "text") : y(l)
                    } else c = !1
                }
                c || (document.scrollingElement.scrollTop = 0)
            });
            self.C3WrapperOnMessage = c => this.Nf(c);
            this.Ja = new Set;
            this.Vb = new WeakSet;
            this.na = !1
        }
        mf() {
            "cordova" === this.A.s ? (document.addEventListener("pause", () => this.Hc(!0)), document.addEventListener("resume", () => this.Hc(!1))) : document.addEventListener("visibilitychange", () => this.Hc(document.hidden));
            return {
                isSuspended: !(!document.hidden && !I)
            }
        }
        gd() {
            window.addEventListener("focus", () =>
                this.Ya("window-focus"));
            window.addEventListener("blur", () => {
                this.Ya("window-blur", {
                    parentHasFocus: K()
                });
                this.nb = 0
            });
            window.addEventListener("focusin", h => {
                h = h.target;
                (C.has(h.tagName.toLowerCase()) || y(h)) && this.Ya("keyboard-blur")
            });
            window.addEventListener("keydown", h => this.Bd("keydown", h));
            window.addEventListener("keyup", h => this.Bd("keyup", h));
            window.addEventListener("dblclick", h => this.Ec("dblclick", h, d));
            window.addEventListener("wheel", h => this.Cf(h));
            "undefined" !== typeof PointerEvent ? (window.addEventListener("pointerdown",
                h => {
                    this.yc(h);
                    this.Xa("pointerdown", h)
                }), this.A.ca && "undefined" !== typeof window.onpointerrawupdate && self === self.top ? (this.qb = new self.Ie(() => this.bf(), 5), this.qb.Ld = !0, window.addEventListener("pointerrawupdate", h => this.Df(h))) : window.addEventListener("pointermove", h => this.Xa("pointermove", h)), window.addEventListener("pointerup", h => this.Xa("pointerup", h)), window.addEventListener("pointercancel", h => this.Xa("pointercancel", h))) : (window.addEventListener("mousedown", h => {
                this.yc(h);
                this.Fc("pointerdown",
                    h)
            }), window.addEventListener("mousemove", h => this.Fc("pointermove", h)), window.addEventListener("mouseup", h => this.Fc("pointerup", h)), window.addEventListener("touchstart", h => {
                this.yc(h);
                this.Gb("pointerdown", h)
            }), window.addEventListener("touchmove", h => this.Gb("pointermove", h)), window.addEventListener("touchend", h => this.Gb("pointerup", h)), window.addEventListener("touchcancel", h => this.Gb("pointercancel", h)));
            const e = () => this.Ic();
            window.addEventListener("pointerup", e, !0);
            window.addEventListener("touchend",
                e, !0);
            window.addEventListener("click", e, !0);
            window.addEventListener("keydown", e, !0);
            window.addEventListener("gamepadconnected", e, !0)
        }
        Ya(e, h) {
            w(this, e, h || null, n)
        }
        wa() {
            return this.A.wa()
        }
        va() {
            return this.A.va()
        }
        Mf() {
            const e = this.wa(),
                h = this.va();
            this.Ya("window-resize", {
                innerWidth: e,
                innerHeight: h,
                devicePixelRatio: window.devicePixelRatio,
                isFullscreen: f.Ua()
            });
            this.A.nc() && (-1 !== this.Oa && clearTimeout(this.Oa), this.Dd(e, h, 0))
        }
        Vf(e, h, m) {
            -1 !== this.Oa && clearTimeout(this.Oa);
            this.Oa = setTimeout(() => this.Dd(e,
                h, m), 48)
        }
        Dd(e, h, m) {
            const c = this.wa(),
                k = this.va();
            this.Oa = -1;
            c != e || k != h ? this.Ya("window-resize", {
                innerWidth: c,
                innerHeight: k,
                devicePixelRatio: window.devicePixelRatio,
                isFullscreen: f.Ua()
            }) : 10 > m && this.Vf(c, k, m + 1)
        }
        Jf(e) {
            this.bd = e.targetOrientation
        }
        ng() {
            const e = this.bd;
            if (screen.orientation && screen.orientation.lock) screen.orientation.lock(e).catch(h => console.warn("[Construct 3] Failed to lock orientation: ", h));
            else try {
                let h = !1;
                screen.lockOrientation ? h = screen.lockOrientation(e) : screen.webkitLockOrientation ?
                    h = screen.webkitLockOrientation(e) : screen.mozLockOrientation ? h = screen.mozLockOrientation(e) : screen.msLockOrientation && (h = screen.msLockOrientation(e));
                h || console.warn("[Construct 3] Failed to lock orientation")
            } catch (h) {
                console.warn("[Construct 3] Failed to lock orientation: ", h)
            }
        }
        Wa() {
            const e = f.Ua();
            e && "any" !== this.bd && this.ng();
            w(this, "fullscreenchange", {
                isFullscreen: e,
                innerWidth: this.wa(),
                innerHeight: this.va()
            })
        }
        Dc(e) {
            console.warn("[Construct 3] Fullscreen request failed: ", e);
            w(this, "fullscreenerror", {
                isFullscreen: f.Ua(),
                innerWidth: this.wa(),
                innerHeight: this.va()
            })
        }
        Hc(e) {
            e ? this.A.uc() : this.A.Jc();
            w(this, "visibilitychange", {
                hidden: e
            })
        }
        Bd(e, h) {
            "Backspace" === h.key && A(h);
            const m = b.get(h.code) || h.code;
            H(this, e, {
                code: m,
                key: h.key,
                which: h.which,
                repeat: h.repeat,
                altKey: h.altKey,
                ctrlKey: h.ctrlKey,
                metaKey: h.metaKey,
                shiftKey: h.shiftKey,
                timeStamp: h.timeStamp
            }, d)
        }
        Cf(e) {
            w(this, "wheel", {
                clientX: e.clientX,
                clientY: e.clientY,
                pageX: e.pageX,
                pageY: e.pageY,
                deltaX: e.deltaX,
                deltaY: e.deltaY,
                deltaZ: e.deltaZ,
                deltaMode: e.deltaMode,
                timeStamp: e.timeStamp
            }, d)
        }
        Ec(e, h, m) {
            a(h) || H(this, e, {
                button: h.button,
                buttons: h.buttons,
                clientX: h.clientX,
                clientY: h.clientY,
                pageX: h.pageX,
                pageY: h.pageY,
                timeStamp: h.timeStamp
            }, m)
        }
        Fc(e, h) {
            if (!a(h)) {
                var m = this.nb;
                "pointerdown" === e && 0 !== m ? e = "pointermove" : "pointerup" === e && 0 !== h.buttons && (e = "pointermove");
                H(this, e, {
                    pointerId: 1,
                    pointerType: "mouse",
                    button: h.button,
                    buttons: h.buttons,
                    lastButtons: m,
                    clientX: h.clientX,
                    clientY: h.clientY,
                    pageX: h.pageX,
                    pageY: h.pageY,
                    width: 0,
                    height: 0,
                    pressure: 0,
                    tangentialPressure: 0,
                    tiltX: 0,
                    tiltY: 0,
                    twist: 0,
                    timeStamp: h.timeStamp
                }, d);
                this.nb = h.buttons;
                this.Ec(h.type, h, g)
            }
        }
        Xa(e, h) {
            if (this.qb && "pointermove" !== e) {
                var m = this.qb;
                m.fb || (N(m), m.Sb = Date.now())
            }
            m = 0;
            "mouse" === h.pointerType && (m = this.nb);
            H(this, e, {
                pointerId: h.pointerId,
                pointerType: h.pointerType,
                button: h.button,
                buttons: h.buttons,
                lastButtons: m,
                clientX: h.clientX,
                clientY: h.clientY,
                pageX: h.pageX,
                pageY: h.pageY,
                width: h.width || 0,
                height: h.height || 0,
                pressure: h.pressure || 0,
                tangentialPressure: h.tangentialPressure || 0,
                tiltX: h.tiltX || 0,
                tiltY: h.tiltY || 0,
                twist: h.twist || 0,
                timeStamp: h.timeStamp
            }, d);
            "mouse" === h.pointerType && (m = "mousemove", "pointerdown" === e ? m = "mousedown" : "pointerup" === e && (m = "mouseup"), this.Ec(m, h, g), this.nb = h.buttons)
        }
        Df(e) {
            this.Wc = e;
            e = this.qb;
            if (-1 === e.Pa) {
                var h = Date.now(),
                    m = h - e.Sb,
                    c = e.tg;
                m >= c && e.Ld ? (e.Sb = h, e.fb = !0, e.Nc(), e.fb = !1) : e.Pa = self.setTimeout(e.ce, Math.max(c - m, 4))
            }
        }
        bf() {
            this.Xa("pointermove", this.Wc);
            this.Wc = null
        }
        Gb(e, h) {
            for (let m = 0, c = h.changedTouches.length; m < c; ++m) {
                const k = h.changedTouches[m];
                H(this, e, {
                    pointerId: k.identifier,
                    pointerType: "touch",
                    button: 0,
                    buttons: 0,
                    lastButtons: 0,
                    clientX: k.clientX,
                    clientY: k.clientY,
                    pageX: k.pageX,
                    pageY: k.pageY,
                    width: 2 * (k.radiusX || k.webkitRadiusX || 0),
                    height: 2 * (k.radiusY || k.webkitRadiusY || 0),
                    pressure: k.force || k.webkitForce || 0,
                    tangentialPressure: 0,
                    tiltX: 0,
                    tiltY: 0,
                    twist: k.rotationAngle || 0,
                    timeStamp: h.timeStamp
                }, d)
            }
        }
        yc(e) {
            window !== window.top && window.focus();
            this.zd(e.target) && document.activeElement && !this.zd(document.activeElement) && document.activeElement.blur()
        }
        zd(e) {
            return !e || e === document ||
                e === window || e === document.body || "canvas" === e.tagName.toLowerCase()
        }
        Te() {
            this.Id || (this.Id = !0, window.addEventListener("deviceorientation", e => this.sf(e)), window.addEventListener("deviceorientationabsolute", e => this.tf(e)))
        }
        Se() {
            this.Hd || (this.Hd = !0, window.addEventListener("devicemotion", e => this.rf(e)))
        }
        sf(e) {
            w(this, "deviceorientation", {
                    absolute: !!e.absolute,
                    alpha: e.alpha || 0,
                    beta: e.beta || 0,
                    gamma: e.gamma || 0,
                    timeStamp: e.timeStamp,
                    webkitCompassHeading: e.webkitCompassHeading,
                    webkitCompassAccuracy: e.webkitCompassAccuracy
                },
                d)
        }
        tf(e) {
            w(this, "deviceorientationabsolute", {
                absolute: !!e.absolute,
                alpha: e.alpha || 0,
                beta: e.beta || 0,
                gamma: e.gamma || 0,
                timeStamp: e.timeStamp
            }, d)
        }
        rf(e) {
            let h = null;
            var m = e.acceleration;
            m && (h = {
                x: m.x || 0,
                y: m.y || 0,
                z: m.z || 0
            });
            m = null;
            var c = e.accelerationIncludingGravity;
            c && (m = {
                x: c.x || 0,
                y: c.y || 0,
                z: c.z || 0
            });
            c = null;
            const k = e.rotationRate;
            k && (c = {
                alpha: k.alpha || 0,
                beta: k.beta || 0,
                gamma: k.gamma || 0
            });
            w(this, "devicemotion", {
                    acceleration: h,
                    accelerationIncludingGravity: m,
                    rotationRate: c,
                    interval: e.interval,
                    timeStamp: e.timeStamp
                },
                d)
        }
        Lf(e) {
            const h = this.A.K;
            h.style.width = e.styleWidth + "px";
            h.style.height = e.styleHeight + "px";
            h.style.marginLeft = e.marginLeft + "px";
            h.style.marginTop = e.marginTop + "px";
            this.Qd && (h.style.display = "", this.Qd = !1)
        }
        yf(e) {
            const h = e.url;
            e = e.filename;
            const m = document.createElement("a"),
                c = document.body;
            m.textContent = e;
            m.href = h;
            m.download = e;
            c.appendChild(m);
            m.click();
            c.removeChild(m)
        }
        async Ff(e) {
            var h = e.imageBitmapOpts;
            e = await self.C3_RasterSvgImageBlob(e.blob, e.imageWidth, e.imageHeight, e.surfaceWidth, e.surfaceHeight);
            h = h ? await createImageBitmap(e, h) : await createImageBitmap(e);
            return {
                imageBitmap: h,
                transferables: [h]
            }
        }
        async wf(e) {
            return await self.C3_GetSvgImageSize(e.blob)
        }
        async lf(e) {
            await q(e.url)
        }
        Ic() {
            var e = [...this.Ja];
            this.Ja.clear();
            if (!this.na)
                for (const h of e)(e = h.play()) && e.catch(() => {
                    this.Vb.has(h) || this.Ja.add(h)
                })
        }
        ua(e) {
            if ("function" !== typeof e.play) throw Error("missing play function");
            this.Vb.delete(e);
            let h;
            try {
                h = e.play()
            } catch (m) {
                this.Ja.add(e);
                return
            }
            h && h.catch(() => {
                this.Vb.has(e) || this.Ja.add(e)
            })
        }
        Ca(e) {
            this.Ja.delete(e);
            this.Vb.add(e)
        }
        Cb(e) {
            this.na = !!e
        }
        xf() {
            navigator.splashscreen && navigator.splashscreen.hide && navigator.splashscreen.hide()
        }
        qf(e) {
            if (e.show) {
                this.ya || (this.ya = document.createElement("div"), this.ya.id = "inspectOutline", document.body.appendChild(this.ya));
                var h = this.ya;
                h.style.display = "";
                h.style.left = e.left - 1 + "px";
                h.style.top = e.top - 1 + "px";
                h.style.width = e.width + 2 + "px";
                h.style.height = e.height + 2 + "px";
                h.textContent = e.name
            } else this.ya && (this.ya.style.display = "none")
        }
        Gf() {
            window.C3_RegisterSW && window.C3_RegisterSW()
        }
        Cd(e) {
            window.c3_postToMessagePort &&
                (e.from = "runtime", window.c3_postToMessagePort(e))
        }
        jf(e, h) {
            return this.A.pd(this.$a, "js-invoke-function", {
                name: e,
                params: h
            }, void 0, void 0)
        }
        Bc(e) {
            alert(e.message)
        }
        Nf(e) {
            "entered-fullscreen" === e ? (f.Jb(!0), this.Wa()) : "exited-fullscreen" === e ? (f.Jb(!1), this.Wa()) : console.warn("Unknown wrapper message: ", e)
        }
    })
}
"use strict";
async function P(f) {
    if (f.sg) throw Error("already initialised");
    f.sg = !0;
    var a = f.ac.xc("dispatchworker.js");
    f.Pc = await f.ac.hc(a, f.F, {
        name: "DispatchWorker"
    });
    a = new MessageChannel;
    f.Tc = a.port1;
    f.Pc.postMessage({
        type: "_init",
        "in-port": a.port2
    }, [a.port2]);
    f.$c = await R(f)
}

function Q(f) {
    return [f.Tc, f.$c]
}
async function R(f) {
    const a = f.Rd.length;
    var b = f.ac.xc("jobworker.js");
    b = await f.ac.hc(b, f.F, {
        name: "JobWorker" + a
    });
    const d = new MessageChannel,
        g = new MessageChannel;
    f.Pc.postMessage({
        type: "_addJobWorker",
        port: d.port1
    }, [d.port1]);
    b.postMessage({
        type: "init",
        number: a,
        "dispatch-port": d.port2,
        "output-port": g.port2
    }, [d.port2, g.port2]);
    f.Rd.push(b);
    return g.port1
}
self.Ee = class {
    constructor(f) {
        this.ac = f;
        this.F = f.F;
        this.F = "preview" === f.s ? this.F + "workers/" : this.F + f.bc;
        this.vg = Math.min(navigator.hardwareConcurrency || 2, 16);
        this.Pc = null;
        this.Rd = [];
        this.$c = this.Tc = null
    }
};
"use strict";
window.C3_IsSupported && (window.c3_runtimeInterface = new self.ta({
    Kg: !1,
    Lg: "workermain.js",
    Qa: ["scripts/c3runtime.js"],
    ec: [],
    dd: "",
    Hg: "scripts/",
    fd: [],
    de: "html5"
}));
"use strict";
async function S(f, a) {
    a = a.type;
    let b = !0;
    0 === a ? b = await T() : 1 === a && (b = await U());
    w(f, "permission-result", {
        type: a,
        result: b
    })
}
async function T() {
    if (!self.DeviceOrientationEvent || !self.DeviceOrientationEvent.requestPermission) return !0;
    try {
        return "granted" === await self.DeviceOrientationEvent.requestPermission()
    } catch (f) {
        return console.warn("[Touch] Failed to request orientation permission: ", f), !1
    }
}
async function U() {
    if (!self.DeviceMotionEvent || !self.DeviceMotionEvent.requestPermission) return !0;
    try {
        return "granted" === await self.DeviceMotionEvent.requestPermission()
    } catch (f) {
        return console.warn("[Touch] Failed to request motion permission: ", f), !1
    }
}
self.ta.vb(class extends self.Ra {
    constructor(f) {
        super(f, "touch");
        J(this, "request-permission", a => S(this, a))
    }
});
"use strict"; {
    const f = 180 / Math.PI;
    self.da = class extends self.Ra {
        constructor(a) {
            super(a, "audio");
            this.Ob = this.f = null;
            this.Qb = this.Sc = !1;
            this.qa = () => this.og();
            this.$ = [];
            this.D = [];
            this.ga = null;
            this.Sd = "";
            this.Td = -1;
            this.pb = new Map;
            this.Xc = 1;
            this.na = !1;
            this.cd = 0;
            this.cc = 1;
            this.Qc = 0;
            this.Vd = "HRTF";
            this.Md = "inverse";
            this.Wd = 600;
            this.Ud = 1E4;
            this.Yd = 1;
            this.Od = this.ad = !1;
            this.ae = this.A.Ce();
            this.aa = new Map;
            this.Ga = new Set;
            this.Uc = !1;
            this.Yc = "";
            this.za = null;
            self.C3Audio_OnMicrophoneStream = (b, d) => this.Bf(b, d);
            this.Nb = null;
            self.C3Audio_GetOutputStream = () => this.vf();
            self.C3Audio_DOMInterface = this;
            L(this, [
                ["create-audio-context", b => this.Ye(b)],
                ["play", b => this.Pf(b)],
                ["stop", b => this.lg(b)],
                ["stop-all", () => this.mg()],
                ["set-paused", b => this.eg(b)],
                ["set-volume", b => this.jg(b)],
                ["fade-volume", b => this.cf(b)],
                ["set-master-volume", b => this.cg(b)],
                ["set-muted", b => this.dg(b)],
                ["set-silent", b => this.gg(b)],
                ["set-looping", b => this.bg(b)],
                ["set-playback-rate", b => this.fg(b)],
                ["seek", b => this.Wf(b)],
                ["preload", b => this.Qf(b)],
                ["unload", b =>
                    this.pg(b)
                ],
                ["unload-all", () => this.qg()],
                ["set-suspended", b => this.hg(b)],
                ["add-effect", b => this.ud(b)],
                ["set-effect-param", b => this.Zf(b)],
                ["remove-effects", b => this.Sf(b)],
                ["tick", b => this.Kf(b)],
                ["load-state", b => this.zf(b)]
            ])
        }
        async Ye(a) {
            a.isiOSCordova && (this.ad = !0);
            this.cd = a.timeScaleMode;
            this.Vd = ["equalpower", "HRTF", "soundfield"][a.panningModel];
            this.Md = ["linear", "inverse", "exponential"][a.distanceModel];
            this.Wd = a.refDistance;
            this.Ud = a.maxDistance;
            this.Yd = a.rolloffFactor;
            var b = {
                latencyHint: a.latencyHint
            };
            this.ae || (b.sampleRate = 48E3);
            if ("undefined" !== typeof AudioContext) this.f = new AudioContext(b);
            else if ("undefined" !== typeof webkitAudioContext) this.f = new webkitAudioContext(b);
            else throw Error("Web Audio API not supported");
            this.vd();
            this.f.onstatechange = () => {
                "running" !== this.f.state && this.vd()
            };
            this.Ob = this.f.createGain();
            this.Ob.connect(this.f.destination);
            b = a.listenerPos;
            this.f.listener.setPosition(b[0], b[1], b[2]);
            this.f.listener.setOrientation(0, 0, 1, 0, -1, 0);
            self.C3_GetAudioContextCurrentTime = () =>
                this.ic();
            try {
                await Promise.all(a.preloadList.map(d => this.Eb(d.originalUrl, d.url, d.type, !1)))
            } catch (d) {
                console.error("[Construct 3] Preloading sounds failed: ", d)
            }
            return {
                sampleRate: this.f.sampleRate
            }
        }
        vd() {
            this.Qb || (this.Sc = !1, window.addEventListener("pointerup", this.qa, !0), window.addEventListener("touchend", this.qa, !0), window.addEventListener("click", this.qa, !0), window.addEventListener("keydown", this.qa, !0), this.Qb = !0)
        }
        $e() {
            this.Qb && (this.Sc = !0, window.removeEventListener("pointerup", this.qa, !0), window.removeEventListener("touchend",
                this.qa, !0), window.removeEventListener("click", this.qa, !0), window.removeEventListener("keydown", this.qa, !0), this.Qb = !1)
        }
        og() {
            if (!this.Sc) {
                var a = this.f;
                "suspended" === a.state && a.resume && a.resume();
                var b = a.createBuffer(1, 220, 22050),
                    d = a.createBufferSource();
                d.buffer = b;
                d.connect(a.destination);
                d.start(0);
                "running" === a.state && this.$e()
            }
        }
        W() {
            return this.f
        }
        ic() {
            return this.f.currentTime
        }
        ra() {
            return this.Ob
        }
        md(a) {
            return (a = this.aa.get(a.toLowerCase())) ? a[0].P() : this.ra()
        }
        ee(a, b) {
            a = a.toLowerCase();
            let d = this.aa.get(a);
            d || (d = [], this.aa.set(a, d));
            b.ag(d.length);
            b.ig(a);
            d.push(b);
            this.Fd(a)
        }
        Fd(a) {
            let b = this.ra();
            const d = this.aa.get(a);
            if (d && d.length) {
                b = d[0].P();
                for (let g = 0, n = d.length; g < n; ++g) {
                    const q = d[g];
                    g + 1 === n ? q.S(this.ra()) : q.S(d[g + 1].P())
                }
            }
            for (const g of this.la(a)) g.Je(b);
            this.za && this.Yc === a && (this.za.disconnect(), this.za.connect(b))
        }
        yb() {
            return this.Xc
        }
        zb() {
            return this.na
        }
        $f() {
            this.Od = !0
        }
        we(a, b) {
            return b ? this.A.rg(a).then(d => {
                    const g = this.f.createBuffer(1, d.length, 48E3);
                    g.getChannelData(0).set(d);
                    return g
                }) :
                new Promise((d, g) => {
                    this.f.decodeAudioData(a, d, g)
                })
        }
        ua(a) {
            this.A.ua(a)
        }
        Ca(a) {
            this.A.Ca(a)
        }
        qd(a) {
            let b = 0;
            for (let d = 0, g = this.D.length; d < g; ++d) {
                const n = this.D[d];
                this.D[b] = n;
                n.L === a ? n.c() : ++b
            }
            this.D.length = b
        }
        Ke() {
            let a = 0;
            for (let b = 0, d = this.$.length; b < d; ++b) {
                const g = this.$[b];
                this.$[a] = g;
                g.sa() ? g.c() : ++a
            }
            this.$.length = a
        }* la(a) {
            if (a)
                for (const b of this.D) self.da.xe(b.Y, a) && (yield b);
            else this.ga && !this.ga.T() && (yield this.ga)
        }
        async Eb(a, b, d, g, n) {
            for (const q of this.$)
                if (q.Ta() === b) return await V(q), q;
            if (n) return null;
            g && (this.ad || this.Od) && this.Ke();
            n = "audio/webm; codecs=opus" === d && !this.ae;
            g && n && this.$f();
            a = !g || this.ad || n ? new self.se(this, a, b, d, g, n) : new self.qe(this, a, b, d, g);
            this.$.push(a);
            await V(a);
            return a
        }
        async wc(a, b, d, g, n) {
            for (const q of this.D)
                if (q.Ta() === b && (q.fc() || n)) return q.Me(g), q;
            a = await this.Eb(a, b, d, n);
            g = "html5" === a.Lc ? new self.re(a.i, a, g) : new self.te(a.i, a, g);
            this.D.push(g);
            return g
        }
        Qe(a) {
            let b = this.pb.get(a);
            if (!b) {
                let d = null;
                b = {
                    ed: 0,
                    Gg: new Promise(g => d = g),
                    resolve: d
                };
                this.pb.set(a,
                    b)
            }
            b.ed++
        }
        Tf(a) {
            const b = this.pb.get(a);
            if (!b) throw Error("expected pending tag");
            b.ed--;
            0 === b.ed && (b.resolve(), this.pb.delete(a))
        }
        tc(a) {
            a || (a = this.Sd);
            return (a = this.pb.get(a)) ? a.Gg : Promise.resolve()
        }
        Fb() {
            if (0 < this.Ga.size) M(this);
            else
                for (const a of this.D)
                    if (a.nd()) {
                        M(this);
                        break
                    }
        }
        Da() {
            for (var a of this.Ga) a.Da();
            a = this.ic();
            for (var b of this.D) b.Da(a);
            b = this.D.filter(d => d.nd()).map(d => d.Sa());
            w(this, "state", {
                tickCount: this.Td,
                audioInstances: b,
                analysers: [...this.Ga].map(d => d.ze())
            });
            0 === b.length &&
                0 === this.Ga.size && this.Rb && (this.A.Uf(this.be), this.Rb = !1)
        }
        pc(a, b, d) {
            w(this, "trigger", {
                type: a,
                tag: b,
                aiid: d
            })
        }
        async Pf(a) {
            const b = a.originalUrl,
                d = a.url,
                g = a.type,
                n = a.isMusic,
                q = a.tag,
                v = a.isLooping,
                B = a.vol,
                D = a.pos,
                x = a.panning;
            let y = a.off;
            0 < y && !a.trueClock && (this.f.getOutputTimestamp ? (a = this.f.getOutputTimestamp(), y = y - a.performanceTime / 1E3 + a.contextTime) : y = y - performance.now() / 1E3 + this.f.currentTime);
            this.Sd = q;
            this.Qe(q);
            try {
                this.ga = await this.wc(b, d, g, q, n), x ? (this.ga.Bb(!0), this.ga.Le(x.x, x.y, x.angle,
                    x.innerAngle, x.outerAngle, x.outerGain), x.hasOwnProperty("uid") && this.ga.Ne(x.uid)) : this.ga.Bb(!1), this.ga.Play(v, B, D, y)
            } catch (C) {
                console.error("[Construct 3] Audio: error starting playback: ", C);
                return
            } finally {
                this.Tf(q)
            }
            M(this)
        }
        lg(a) {
            a = a.tag;
            for (const b of this.la(a)) b.ma()
        }
        mg() {
            for (const a of this.D) a.ma()
        }
        eg(a) {
            const b = a.tag;
            a = a.paused;
            for (const d of this.la(b)) a ? d.Va() : d.Ab();
            this.Fb()
        }
        jg(a) {
            const b = a.tag;
            a = a.vol;
            for (const d of this.la(b)) d.Db(a)
        }
        async cf(a) {
            const b = a.tag,
                d = a.vol,
                g = a.duration;
            a = a.stopOnEnd;
            await this.tc(b);
            for (const n of this.la(b)) n.ye(d, g, a);
            this.Fb()
        }
        cg(a) {
            this.Xc = a.vol;
            for (const b of this.D) b.Lb()
        }
        dg(a) {
            const b = a.tag;
            a = a.isMuted;
            for (const d of this.la(b)) d.rd(a)
        }
        gg(a) {
            this.na = a.isSilent;
            this.A.Cb(this.na);
            for (const b of this.D) b.Kb()
        }
        bg(a) {
            const b = a.tag;
            a = a.isLooping;
            for (const d of this.la(b)) d.rc(a)
        }
        async fg(a) {
            const b = a.tag;
            a = a.rate;
            await this.tc(b);
            for (const d of this.la(b)) d.td(a)
        }
        async Wf(a) {
            const b = a.tag;
            a = a.pos;
            await this.tc(b);
            for (const d of this.la(b)) d.qc(a)
        }
        async Qf(a) {
            const b =
                a.originalUrl,
                d = a.url,
                g = a.type;
            a = a.isMusic;
            try {
                await this.wc(b, d, g, "", a)
            } catch (n) {
                console.error("[Construct 3] Audio: error preloading: ", n)
            }
        }
        async pg(a) {
            if (a = await this.Eb("", a.url, a.type, a.isMusic, !0)) a.c(), a = this.$.indexOf(a), -1 !== a && this.$.splice(a, 1)
        }
        qg() {
            for (const a of this.$) a.c();
            this.$.length = 0
        }
        hg(a) {
            a = a.isSuspended;
            !a && this.f.resume && this.f.resume();
            for (const b of this.D) b.sc(a);
            a && this.f.suspend && this.f.suspend()
        }
        Kf(a) {
            this.cc = a.timeScale;
            this.Qc = a.gameTime;
            this.Td = a.tickCount;
            if (0 !== this.cd)
                for (var b of this.D) b.Fa();
            (b = a.listenerPos) && this.f.listener.setPosition(b[0], b[1], b[2]);
            for (const d of a.instPans) {
                a = d.uid;
                for (const g of this.D) g.fa === a && g.sd(d.x, d.y, d.angle)
            }
        }
        async ud(a) {
            var b = a.type;
            const d = a.tag;
            var g = a.params;
            if ("filter" === b) g = new self.ke(this, ...g);
            else if ("delay" === b) g = new self.ie(this, ...g);
            else if ("convolution" === b) {
                b = null;
                try {
                    b = await this.Eb(a.bufferOriginalUrl, a.bufferUrl, a.bufferType, !1)
                } catch (n) {
                    console.log("[Construct 3] Audio: error loading convolution: ", n);
                    return
                }
                g = new self.he(this, b.Z,
                    ...g);
                g.Xf(a.bufferOriginalUrl, a.bufferType)
            } else if ("flanger" === b) g = new self.le(this, ...g);
            else if ("phaser" === b) g = new self.ne(this, ...g);
            else if ("gain" === b) g = new self.me(this, ...g);
            else if ("tremolo" === b) g = new self.pe(this, ...g);
            else if ("ringmod" === b) g = new self.oe(this, ...g);
            else if ("distortion" === b) g = new self.je(this, ...g);
            else if ("compressor" === b) g = new self.ge(this, ...g);
            else if ("analyser" === b) g = new self.fe(this, ...g);
            else throw Error("invalid effect type");
            this.ee(d, g);
            this.Ed()
        }
        Zf(a) {
            const b =
                a.index,
                d = a.param,
                g = a.value,
                n = a.ramp,
                q = a.time;
            a = this.aa.get(a.tag);
            !a || 0 > b || b >= a.length || (a[b].X(d, g, n, q), this.Ed())
        }
        Sf(a) {
            a = a.tag.toLowerCase();
            const b = this.aa.get(a);
            if (b && b.length) {
                for (const d of b) d.c();
                this.aa.delete(a);
                this.Fd(a)
            }
        }
        Pe(a) {
            this.Ga.add(a);
            this.Fb()
        }
        Rf(a) {
            this.Ga.delete(a)
        }
        Ed() {
            this.Uc || (this.Uc = !0, Promise.resolve().then(() => this.af()))
        }
        af() {
            const a = {};
            for (const [b, d] of this.aa) a[b] = d.map(g => g.Sa());
            w(this, "fxstate", {
                fxstate: a
            });
            this.Uc = !1
        }
        async zf(a) {
            const b = a.saveLoadMode;
            if (3 !==
                b)
                for (var d of this.D) d.sa() && 1 === b || (d.sa() || 2 !== b) && d.ma();
            for (const g of this.aa.values())
                for (const n of g) n.c();
            this.aa.clear();
            this.cc = a.timeScale;
            this.Qc = a.gameTime;
            d = a.listenerPos;
            this.f.listener.setPosition(d[0], d[1], d[2]);
            this.na = a.isSilent;
            this.A.Cb(this.na);
            this.Xc = a.masterVolume;
            d = [];
            for (const g of Object.values(a.effects)) d.push(Promise.all(g.map(n => this.ud(n))));
            await Promise.all(d);
            await Promise.all(a.playing.map(g => this.kf(g, b)));
            this.Fb()
        }
        async kf(a, b) {
            if (3 !== b) {
                var d = a.bufferOriginalUrl,
                    g = a.bufferUrl,
                    n = a.bufferType,
                    q = a.isMusic,
                    v = a.tag,
                    B = a.isLooping,
                    D = a.volume,
                    x = a.playbackTime;
                if (!q || 1 !== b)
                    if (q || 2 !== b) {
                        b = null;
                        try {
                            b = await this.wc(d, g, n, v, q)
                        } catch (y) {
                            console.error("[Construct 3] Audio: error loading audio state: ", y);
                            return
                        }
                        b.He(a.pan);
                        b.Play(B, D, x, 0);
                        a.isPlaying || b.Va();
                        b.Ac(a)
                    }
            }
        }
        Bf(a, b) {
            this.za && this.za.disconnect();
            this.Yc = b.toLowerCase();
            this.za = this.f.createMediaStreamSource(a);
            this.za.connect(this.md(this.Yc))
        }
        vf() {
            this.Nb || (this.Nb = this.f.createMediaStreamDestination(), this.Ob.connect(this.Nb));
            return this.Nb.stream
        }
        static xe(a, b) {
            return a.length !== b.length ? !1 : a === b ? !0 : a.toLowerCase() === b.toLowerCase()
        }
        static Oe(a) {
            return a * f
        }
        static ve(a) {
            return Math.pow(10, a / 20)
        }
        static ld(a) {
            return Math.max(Math.min(self.da.ve(a), 1), 0)
        }
        static Ge(a) {
            return Math.log(a) / Math.log(10) * 20
        }
        static Fe(a) {
            return self.da.Ge(Math.max(Math.min(a, 1), 0))
        }
        static Bg(a, b) {
            return 1 - Math.exp(-b * a)
        }
    };
    self.ta.vb(self.da)
}
"use strict";

function V(f) {
    f.Tb || (f.Tb = f.zc());
    return f.Tb
}
self.hd = class {
    constructor(f, a, b, d, g) {
        this.i = f;
        this.xg = a;
        this.Aa = b;
        this.R = d;
        this.ug = g;
        this.Lc = "";
        this.Tb = null
    }
    c() {
        this.Tb = this.i = null
    }
    zc() {}
    W() {
        return this.i.W()
    }
    kc() {
        return this.xg
    }
    Ta() {
        return this.Aa
    }
    jc() {
        return this.R
    }
    sa() {
        return this.ug
    }
    ea() {}
};
"use strict";
self.qe = class extends self.hd {
    constructor(f, a, b, d, g) {
        super(f, a, b, d, g);
        this.Lc = "html5";
        this.J = new Audio;
        this.J.crossOrigin = "anonymous";
        this.J.autoplay = !1;
        this.J.preload = "auto";
        this.jb = this.kb = null;
        this.J.addEventListener("canplaythrough", () => !0);
        this.ob = this.W().createGain();
        this.mb = null;
        this.J.addEventListener("canplay", () => {
            this.kb && (this.kb(), this.jb = this.kb = null);
            !this.mb && this.J && (this.mb = this.W().createMediaElementSource(this.J), this.mb.connect(this.ob))
        });
        this.onended = null;
        this.J.addEventListener("ended",
            () => {
                if (this.onended) this.onended()
            });
        this.J.addEventListener("error", n => {
            console.error(`[Construct 3] Audio '${this.Aa}' error: `, n);
            this.jb && (this.jb(n), this.jb = this.kb = null)
        })
    }
    c() {
        this.i.qd(this);
        this.ob.disconnect();
        this.ob = null;
        this.mb.disconnect();
        this.mb = null;
        this.J && !this.J.paused && this.J.pause();
        this.J = this.onended = null;
        super.c()
    }
    zc() {
        return new Promise((f, a) => {
            this.kb = f;
            this.jb = a;
            this.J.src = this.Aa
        })
    }
    O() {
        return this.J
    }
    ea() {
        return this.J.duration
    }
};
"use strict";
async function W(f) {
    if (f.xa) return f.xa;
    var a = f.i.A;
    if ("cordova" === a.s && a.od(f.Aa) && a.gb) f.xa = await a.wb(f.Aa);
    else {
        a = await fetch(f.Aa);
        if (!a.ok) throw Error(`error fetching audio data: ${a.status} ${a.statusText}`);
        f.xa = await a.arrayBuffer()
    }
}
async function X(f) {
    if (f.Z) return f.Z;
    f.Z = await f.i.we(f.xa, f.wg);
    f.xa = null
}
self.se = class extends self.hd {
    constructor(f, a, b, d, g, n) {
        super(f, a, b, d, g);
        this.Lc = "webaudio";
        this.Z = this.xa = null;
        this.wg = !!n
    }
    c() {
        this.i.qd(this);
        this.Z = this.xa = null;
        super.c()
    }
    async zc() {
        try {
            await W(this), await X(this)
        } catch (f) {
            console.error(`[Construct 3] Failed to load audio '${this.Aa}': `, f)
        }
    }
    ea() {
        return this.Z ? this.Z.duration : 0
    }
};
"use strict"; {
    let f = 0;
    self.jd = class {
        constructor(a, b, d) {
            this.i = a;
            this.L = b;
            this.Y = d;
            this.Mb = f++;
            this.M = this.W().createGain();
            this.M.connect(this.ra());
            this.B = null;
            this.hb = !1;
            this.ja = [0, 0, 0];
            this.ia = [0, 0, 0];
            this.H = !0;
            this.V = this.ka = this.G = !1;
            this.sb = 1;
            this.Ha = !1;
            this.pa = 1;
            a = this.i.cd;
            this.Vc = 1 === a && !this.sa() || 2 === a;
            this.cb = this.fa = -1;
            this.$d = !1
        }
        c() {
            this.L = this.i = null;
            this.B && (this.B.disconnect(), this.B = null);
            this.M.disconnect();
            this.M = null
        }
        W() {
            return this.i.W()
        }
        ra() {
            return this.i.md(this.Y)
        }
        yb() {
            return this.i.yb()
        }
        xb() {
            return this.Vc ?
                this.i.Qc : performance.now() / 1E3
        }
        kc() {
            return this.L.kc()
        }
        Ta() {
            return this.L.Ta()
        }
        jc() {
            return this.L.jc()
        }
        sa() {
            return this.L.sa()
        }
        Me(a) {
            this.Y = a
        }
        T() {}
        fc() {}
        IsPlaying() {
            return !this.H && !this.G && !this.T()
        }
        nd() {
            return !this.H && !this.T()
        }
        Ba() {}
        ea() {
            return this.L.ea()
        }
        Play() {}
        ma() {}
        Va() {}
        Ab() {}
        Db(a) {
            this.sb = a;
            this.M.gain.cancelScheduledValues(0);
            this.cb = -1;
            this.M.gain.value = this.lc()
        }
        ye(a, b, d) {
            if (!this.Ha) {
                a *= this.yb();
                var g = this.M.gain;
                g.cancelScheduledValues(0);
                var n = this.i.ic();
                b = n + b;
                g.setValueAtTime(g.value,
                    n);
                g.linearRampToValueAtTime(a, b);
                this.sb = a;
                this.cb = b;
                this.$d = d
            }
        }
        Lb() {
            this.Db(this.sb)
        }
        Da(a) {
            -1 !== this.cb && a >= this.cb && (this.cb = -1, this.$d && this.ma(), this.i.pc("fade-ended", this.Y, this.Mb))
        }
        lc() {
            const a = this.sb * this.yb();
            return isFinite(a) ? a : 0
        }
        rd(a) {
            a = !!a;
            this.Ha !== a && (this.Ha = a, this.Kb())
        }
        zb() {
            return this.i.zb()
        }
        Kb() {}
        rc() {}
        td(a) {
            this.pa !== a && (this.pa = a, this.Fa())
        }
        Fa() {}
        qc() {}
        sc() {}
        Bb(a) {
            a = !!a;
            this.hb !== a && ((this.hb = a) ? (this.B || (this.B = this.W().createPanner(), this.B.panningModel = this.i.Vd, this.B.distanceModel =
                this.i.Md, this.B.refDistance = this.i.Wd, this.B.maxDistance = this.i.Ud, this.B.rolloffFactor = this.i.Yd), this.M.disconnect(), this.M.connect(this.B), this.B.connect(this.ra())) : (this.B.disconnect(), this.M.disconnect(), this.M.connect(this.ra())))
        }
        Le(a, b, d, g, n, q) {
            this.hb && (this.sd(a, b, d), a = self.da.Oe, this.B.coneInnerAngle = a(g), this.B.coneOuterAngle = a(n), this.B.coneOuterGain = q)
        }
        sd(a, b, d) {
            this.hb && (this.ja[0] = a, this.ja[1] = b, this.ja[2] = 0, this.ia[0] = Math.cos(d), this.ia[1] = Math.sin(d), this.ia[2] = 0, this.B.setPosition(...this.ja),
                this.B.setOrientation(...this.ia))
        }
        Ne(a) {
            this.fa = a
        }
        mc() {}
        Je(a) {
            const b = this.B || this.M;
            b.disconnect();
            b.connect(a)
        }
        Sa() {
            return {
                aiid: this.Mb,
                tag: this.Y,
                duration: this.ea(),
                volume: this.sb,
                isPlaying: this.IsPlaying(),
                playbackTime: this.Ba(),
                playbackRate: this.pa,
                uid: this.fa,
                bufferOriginalUrl: this.kc(),
                bufferUrl: "",
                bufferType: this.jc(),
                isMusic: this.sa(),
                isLooping: this.V,
                isMuted: this.Ha,
                resumePosition: this.mc(),
                pan: this.Ae()
            }
        }
        Ac(a) {
            this.td(a.playbackRate);
            this.rd(a.isMuted)
        }
        Ae() {
            if (!this.B) return null;
            const a =
                this.B;
            return {
                pos: this.ja,
                orient: this.ia,
                cia: a.coneInnerAngle,
                coa: a.coneOuterAngle,
                cog: a.coneOuterGain,
                uid: this.fa
            }
        }
        He(a) {
            if (a) {
                this.Bb(!0);
                a = this.B;
                var b = a.pos;
                this.ja[0] = b[0];
                this.ja[1] = b[1];
                this.ja[2] = b[2];
                b = a.orient;
                this.ia[0] = b[0];
                this.ia[1] = b[1];
                this.ia[2] = b[2];
                a.setPosition(...this.ja);
                a.setOrientation(...this.ia);
                a.coneInnerAngle = a.cia;
                a.coneOuterAngle = a.coa;
                a.coneOuterGain = a.cog;
                this.fa = a.uid
            } else this.Bb(!1)
        }
    }
}
"use strict";
self.re = class extends self.jd {
    constructor(f, a, b) {
        super(f, a, b);
        this.L.ob.connect(this.M);
        this.L.onended = () => this.Cc()
    }
    c() {
        this.ma();
        this.L.ob.disconnect();
        super.c()
    }
    O() {
        return this.L.O()
    }
    Cc() {
        this.H = !0;
        this.fa = -1;
        this.i.pc("ended", this.Y, this.Mb)
    }
    T() {
        return this.O().ended
    }
    fc() {
        return this.H ? !0 : this.T()
    }
    Ba() {
        let f = this.O().currentTime;
        this.V || (f = Math.min(f, this.ea()));
        return f
    }
    Play(f, a, b) {
        const d = this.O();
        1 !== d.playbackRate && (d.playbackRate = 1);
        d.loop !== f && (d.loop = f);
        this.Db(a);
        d.muted && (d.muted = !1);
        if (d.currentTime !== b) try {
            d.currentTime = b
        } catch (g) {
            console.warn(`[Construct 3] Exception seeking audio '${this.L.Ta()}' to position '${b}': `, g)
        }
        this.i.ua(d);
        this.G = this.H = !1;
        this.V = f;
        this.pa = 1
    }
    ma() {
        const f = this.O();
        f.paused || f.pause();
        this.i.Ca(f);
        this.H = !0;
        this.G = !1;
        this.fa = -1
    }
    Va() {
        if (!(this.G || this.H || this.T())) {
            var f = this.O();
            f.paused || f.pause();
            this.i.Ca(f);
            this.G = !0
        }
    }
    Ab() {
        !this.G || this.H || this.T() || (this.i.ua(this.O()), this.G = !1)
    }
    Kb() {
        this.O().muted = this.Ha || this.zb()
    }
    rc(f) {
        f = !!f;
        this.V !== f &&
            (this.V = f, this.O().loop = f)
    }
    Fa() {
        let f = this.pa;
        this.Vc && (f *= this.i.cc);
        try {
            this.O().playbackRate = f
        } catch (a) {
            console.warn(`[Construct 3] Unable to set playback rate '${f}':`, a)
        }
    }
    qc(f) {
        if (!this.H && !this.T()) try {
            this.O().currentTime = f
        } catch (a) {
            console.warn(`[Construct 3] Error seeking audio to '${f}': `, a)
        }
    }
    mc() {
        return this.Ba()
    }
    sc(f) {
        f ? this.IsPlaying() ? (this.O().pause(), this.ka = !0) : this.ka = !1 : this.ka && (this.i.ua(this.O()), this.ka = !1)
    }
};
"use strict";

function Y(f) {
    f.j && f.j.disconnect();
    f.j = null;
    f.Za = null
}
self.te = class extends self.jd {
    constructor(f, a, b) {
        super(f, a, b);
        this.j = null;
        this.Wb = d => this.Cc(d);
        this.Rc = !0;
        this.Za = null;
        this.N = this.Xb = this.Yb = 0;
        this.Zc = 1
    }
    c() {
        this.ma();
        Y(this);
        this.Wb = null;
        super.c()
    }
    Cc(f) {
        this.G || this.ka || f.target !== this.Za || (this.H = this.Rc = !0, this.fa = -1, Y(this), this.i.pc("ended", this.Y, this.Mb))
    }
    T() {
        return !this.H && this.j && this.j.loop || this.G ? !1 : this.Rc
    }
    fc() {
        return !this.j || this.H ? !0 : this.T()
    }
    Ba() {
        let f;
        f = this.G ? this.N : this.Xb + (this.xb() - this.Yb) * this.pa;
        this.V || (f = Math.min(f, this.ea()));
        return f
    }
    Play(f, a, b, d) {
        this.Zc = 1;
        this.Db(a);
        Y(this);
        this.j = this.W().createBufferSource();
        this.j.buffer = this.L.Z;
        this.j.connect(this.M);
        this.Za = this.j;
        this.j.onended = this.Wb;
        this.j.loop = f;
        this.j.start(d, b);
        this.G = this.H = this.Rc = !1;
        this.V = f;
        this.pa = 1;
        this.Yb = this.xb();
        this.Xb = b
    }
    ma() {
        if (this.j) try {
            this.j.stop(0)
        } catch (f) {}
        this.H = !0;
        this.G = !1;
        this.fa = -1
    }
    Va() {
        this.G || this.H || this.T() || (this.N = this.Ba(), this.V && (this.N %= this.ea()), this.G = !0, this.j.stop(0))
    }
    Ab() {
        !this.G || this.H || this.T() || (Y(this), this.j =
            this.W().createBufferSource(), this.j.buffer = this.L.Z, this.j.connect(this.M), this.Za = this.j, this.j.onended = this.Wb, this.j.loop = this.V, this.Lb(), this.Fa(), this.j.start(0, this.N), this.Yb = this.xb(), this.Xb = this.N, this.G = !1)
    }
    lc() {
        return super.lc() * this.Zc
    }
    Kb() {
        this.Zc = this.Ha || this.zb() ? 0 : 1;
        this.Lb()
    }
    rc(f) {
        f = !!f;
        this.V !== f && (this.V = f, this.j && (this.j.loop = f))
    }
    Fa() {
        let f = this.pa;
        this.Vc && (f *= this.i.cc);
        this.j && (this.j.playbackRate.value = f)
    }
    qc(f) {
        this.H || this.T() || (this.G ? this.N = f : (this.Va(), this.N = f, this.Ab()))
    }
    mc() {
        return this.N
    }
    sc(f) {
        f ?
            this.IsPlaying() ? (this.ka = !0, this.N = this.Ba(), this.V && (this.N %= this.ea()), this.j.stop(0)) : this.ka = !1 : this.ka && (Y(this), this.j = this.W().createBufferSource(), this.j.buffer = this.L.Z, this.j.connect(this.M), this.Za = this.j, this.j.onended = this.Wb, this.j.loop = this.V, this.Lb(), this.Fa(), this.j.start(0, this.N), this.Yb = this.xb(), this.Xb = this.N, this.ka = !1)
    }
    Ac(f) {
        super.Ac(f);
        this.N = f.resumePosition
    }
};
"use strict"; {
    class f {
        constructor(a) {
            this.i = a;
            this.f = a.W();
            this.Pd = -1;
            this.R = this.Y = "";
            this.g = null
        }
        c() {
            this.f = null
        }
        ag(a) {
            this.Pd = a
        }
        ig(a) {
            this.Y = a
        }
        o() {
            return this.f.createGain()
        }
        P() {}
        S() {}
        m(a, b, d, g) {
            a.cancelScheduledValues(0);
            if (0 === g) a.value = b;
            else {
                var n = this.f.currentTime;
                g += n;
                switch (d) {
                    case 0:
                        a.setValueAtTime(b, g);
                        break;
                    case 1:
                        a.setValueAtTime(a.value, n);
                        a.linearRampToValueAtTime(b, g);
                        break;
                    case 2:
                        a.setValueAtTime(a.value, n), a.exponentialRampToValueAtTime(b, g)
                }
            }
        }
        Sa() {
            return {
                type: this.R,
                tag: this.Y,
                params: this.g
            }
        }
    }
    self.ke = class extends f {
        constructor(a, b, d, g, n, q, v) {
            super(a);
            this.R = "filter";
            this.g = [b, d, g, n, q, v];
            this.l = this.o();
            this.b = this.o();
            this.b.gain.value = v;
            this.a = this.o();
            this.a.gain.value = 1 - v;
            this.v = this.f.createBiquadFilter();
            this.v.type = b;
            this.v.frequency.value = d;
            this.v.detune.value = g;
            this.v.Q.value = n;
            this.v.gain.vlaue = q;
            this.l.connect(this.v);
            this.l.connect(this.a);
            this.v.connect(this.b)
        }
        c() {
            this.l.disconnect();
            this.v.disconnect();
            this.b.disconnect();
            this.a.disconnect();
            super.c()
        }
        S(a) {
            this.b.disconnect();
            this.b.connect(a);
            this.a.disconnect();
            this.a.connect(a)
        }
        P() {
            return this.l
        }
        X(a, b, d, g) {
            switch (a) {
                case 0:
                    b = Math.max(Math.min(b / 100, 1), 0);
                    this.g[5] = b;
                    this.m(this.b.gain, b, d, g);
                    this.m(this.a.gain, 1 - b, d, g);
                    break;
                case 1:
                    this.g[1] = b;
                    this.m(this.v.frequency, b, d, g);
                    break;
                case 2:
                    this.g[2] = b;
                    this.m(this.v.detune, b, d, g);
                    break;
                case 3:
                    this.g[3] = b;
                    this.m(this.v.Q, b, d, g);
                    break;
                case 4:
                    this.g[4] = b, this.m(this.v.gain, b, d, g)
            }
        }
    };
    self.ie = class extends f {
        constructor(a, b, d, g) {
            super(a);
            this.R = "delay";
            this.g = [b, d, g];
            this.l =
                this.o();
            this.b = this.o();
            this.b.gain.value = g;
            this.a = this.o();
            this.a.gain.value = 1 - g;
            this.lb = this.o();
            this.U = this.f.createDelay(b);
            this.U.delayTime.value = b;
            this.bb = this.o();
            this.bb.gain.value = d;
            this.l.connect(this.lb);
            this.l.connect(this.a);
            this.lb.connect(this.b);
            this.lb.connect(this.U);
            this.U.connect(this.bb);
            this.bb.connect(this.lb)
        }
        c() {
            this.l.disconnect();
            this.b.disconnect();
            this.a.disconnect();
            this.lb.disconnect();
            this.U.disconnect();
            this.bb.disconnect();
            super.c()
        }
        S(a) {
            this.b.disconnect();
            this.b.connect(a);
            this.a.disconnect();
            this.a.connect(a)
        }
        P() {
            return this.l
        }
        X(a, b, d, g) {
            const n = self.da.ld;
            switch (a) {
                case 0:
                    b = Math.max(Math.min(b / 100, 1), 0);
                    this.g[2] = b;
                    this.m(this.b.gain, b, d, g);
                    this.m(this.a.gain, 1 - b, d, g);
                    break;
                case 4:
                    this.g[1] = n(b);
                    this.m(this.bb.gain, n(b), d, g);
                    break;
                case 5:
                    this.g[0] = b, this.m(this.U.delayTime, b, d, g)
            }
        }
    };
    self.he = class extends f {
        constructor(a, b, d, g) {
            super(a);
            this.R = "convolution";
            this.g = [d, g];
            this.Kd = this.Jd = "";
            this.l = this.o();
            this.b = this.o();
            this.b.gain.value = g;
            this.a = this.o();
            this.a.gain.value =
                1 - g;
            this.ab = this.f.createConvolver();
            this.ab.normalize = d;
            this.ab.buffer = b;
            this.l.connect(this.ab);
            this.l.connect(this.a);
            this.ab.connect(this.b)
        }
        c() {
            this.l.disconnect();
            this.ab.disconnect();
            this.b.disconnect();
            this.a.disconnect();
            super.c()
        }
        S(a) {
            this.b.disconnect();
            this.b.connect(a);
            this.a.disconnect();
            this.a.connect(a)
        }
        P() {
            return this.l
        }
        X(a, b, d, g) {
            switch (a) {
                case 0:
                    b = Math.max(Math.min(b / 100, 1), 0), this.g[1] = b, this.m(this.b.gain, b, d, g), this.m(this.a.gain, 1 - b, d, g)
            }
        }
        Xf(a, b) {
            this.Jd = a;
            this.Kd = b
        }
        Sa() {
            const a =
                super.Sa();
            a.bufferOriginalUrl = this.Jd;
            a.bufferUrl = "";
            a.bufferType = this.Kd;
            return a
        }
    };
    self.le = class extends f {
        constructor(a, b, d, g, n, q) {
            super(a);
            this.R = "flanger";
            this.g = [b, d, g, n, q];
            this.l = this.o();
            this.a = this.o();
            this.a.gain.value = 1 - q / 2;
            this.b = this.o();
            this.b.gain.value = q / 2;
            this.eb = this.o();
            this.eb.gain.value = n;
            this.U = this.f.createDelay(b + d);
            this.U.delayTime.value = b;
            this.u = this.f.createOscillator();
            this.u.frequency.value = g;
            this.I = this.o();
            this.I.gain.value = d;
            this.l.connect(this.U);
            this.l.connect(this.a);
            this.U.connect(this.b);
            this.U.connect(this.eb);
            this.eb.connect(this.U);
            this.u.connect(this.I);
            this.I.connect(this.U.delayTime);
            this.u.start(0)
        }
        c() {
            this.u.stop(0);
            this.l.disconnect();
            this.U.disconnect();
            this.u.disconnect();
            this.I.disconnect();
            this.a.disconnect();
            this.b.disconnect();
            this.eb.disconnect();
            super.c()
        }
        S(a) {
            this.b.disconnect();
            this.b.connect(a);
            this.a.disconnect();
            this.a.connect(a)
        }
        P() {
            return this.l
        }
        X(a, b, d, g) {
            switch (a) {
                case 0:
                    b = Math.max(Math.min(b / 100, 1), 0);
                    this.g[4] = b;
                    this.m(this.b.gain,
                        b / 2, d, g);
                    this.m(this.a.gain, 1 - b / 2, d, g);
                    break;
                case 6:
                    this.g[1] = b / 1E3;
                    this.m(this.I.gain, b / 1E3, d, g);
                    break;
                case 7:
                    this.g[2] = b;
                    this.m(this.u.frequency, b, d, g);
                    break;
                case 8:
                    this.g[3] = b / 100, this.m(this.eb.gain, b / 100, d, g)
            }
        }
    };
    self.ne = class extends f {
        constructor(a, b, d, g, n, q, v) {
            super(a);
            this.R = "phaser";
            this.g = [b, d, g, n, q, v];
            this.l = this.o();
            this.a = this.o();
            this.a.gain.value = 1 - v / 2;
            this.b = this.o();
            this.b.gain.value = v / 2;
            this.v = this.f.createBiquadFilter();
            this.v.type = "allpass";
            this.v.frequency.value = b;
            this.v.detune.value =
                d;
            this.v.Q.value = g;
            this.u = this.f.createOscillator();
            this.u.frequency.value = q;
            this.I = this.o();
            this.I.gain.value = n;
            this.l.connect(this.v);
            this.l.connect(this.a);
            this.v.connect(this.b);
            this.u.connect(this.I);
            this.I.connect(this.v.frequency);
            this.u.start(0)
        }
        c() {
            this.u.stop(0);
            this.l.disconnect();
            this.v.disconnect();
            this.u.disconnect();
            this.I.disconnect();
            this.a.disconnect();
            this.b.disconnect();
            super.c()
        }
        S(a) {
            this.b.disconnect();
            this.b.connect(a);
            this.a.disconnect();
            this.a.connect(a)
        }
        P() {
            return this.l
        }
        X(a,
            b, d, g) {
            switch (a) {
                case 0:
                    b = Math.max(Math.min(b / 100, 1), 0);
                    this.g[5] = b;
                    this.m(this.b.gain, b / 2, d, g);
                    this.m(this.a.gain, 1 - b / 2, d, g);
                    break;
                case 1:
                    this.g[0] = b;
                    this.m(this.v.frequency, b, d, g);
                    break;
                case 2:
                    this.g[1] = b;
                    this.m(this.v.detune, b, d, g);
                    break;
                case 3:
                    this.g[2] = b;
                    this.m(this.v.Q, b, d, g);
                    break;
                case 6:
                    this.g[3] = b;
                    this.m(this.I.gain, b, d, g);
                    break;
                case 7:
                    this.g[4] = b, this.m(this.u.frequency, b, d, g)
            }
        }
    };
    self.me = class extends f {
        constructor(a, b) {
            super(a);
            this.R = "gain";
            this.g = [b];
            this.h = this.o();
            this.h.gain.value =
                b
        }
        c() {
            this.h.disconnect();
            super.c()
        }
        S(a) {
            this.h.disconnect();
            this.h.connect(a)
        }
        P() {
            return this.h
        }
        X(a, b, d, g) {
            const n = self.da.ld;
            switch (a) {
                case 4:
                    this.g[0] = n(b), this.m(this.h.gain, n(b), d, g)
            }
        }
    };
    self.pe = class extends f {
        constructor(a, b, d) {
            super(a);
            this.R = "tremolo";
            this.g = [b, d];
            this.h = this.o();
            this.h.gain.value = 1 - d / 2;
            this.u = this.f.createOscillator();
            this.u.frequency.value = b;
            this.I = this.o();
            this.I.gain.value = d / 2;
            this.u.connect(this.I);
            this.I.connect(this.h.gain);
            this.u.start(0)
        }
        c() {
            this.u.stop(0);
            this.u.disconnect();
            this.I.disconnect();
            this.h.disconnect();
            super.c()
        }
        S(a) {
            this.h.disconnect();
            this.h.connect(a)
        }
        P() {
            return this.h
        }
        X(a, b, d, g) {
            switch (a) {
                case 0:
                    b = Math.max(Math.min(b / 100, 1), 0);
                    this.g[1] = b;
                    this.m(this.h.gain, 1 - b / 2, d, g);
                    this.m(this.I.gain, b / 2, d, g);
                    break;
                case 7:
                    this.g[0] = b, this.m(this.u.frequency, b, d, g)
            }
        }
    };
    self.oe = class extends f {
        constructor(a, b, d) {
            super(a);
            this.R = "ringmod";
            this.g = [b, d];
            this.l = this.o();
            this.b = this.o();
            this.b.gain.value = d;
            this.a = this.o();
            this.a.gain.value = 1 - d;
            this.rb = this.o();
            this.rb.gain.value =
                0;
            this.u = this.f.createOscillator();
            this.u.frequency.value = b;
            this.u.connect(this.rb.gain);
            this.u.start(0);
            this.l.connect(this.rb);
            this.l.connect(this.a);
            this.rb.connect(this.b)
        }
        c() {
            this.u.stop(0);
            this.u.disconnect();
            this.rb.disconnect();
            this.l.disconnect();
            this.b.disconnect();
            this.a.disconnect();
            super.c()
        }
        S(a) {
            this.b.disconnect();
            this.b.connect(a);
            this.a.disconnect();
            this.a.connect(a)
        }
        P() {
            return this.l
        }
        X(a, b, d, g) {
            switch (a) {
                case 0:
                    b = Math.max(Math.min(b / 100, 1), 0);
                    this.g[1] = b;
                    this.m(this.b.gain, b, d, g);
                    this.m(this.a.gain, 1 - b, d, g);
                    break;
                case 7:
                    this.g[0] = b, this.m(this.u.frequency, b, d, g)
            }
        }
    };
    self.je = class extends f {
        constructor(a, b, d, g, n, q) {
            super(a);
            this.R = "distortion";
            this.g = [b, d, g, n, q];
            this.l = this.o();
            this.$b = this.o();
            this.Zb = this.o();
            this.Yf(g, n);
            this.b = this.o();
            this.b.gain.value = q;
            this.a = this.o();
            this.a.gain.value = 1 - q;
            this.dc = this.f.createWaveShaper();
            this.Oc = new Float32Array(65536);
            this.ef(b, d);
            this.dc.curve = this.Oc;
            this.l.connect(this.$b);
            this.l.connect(this.a);
            this.$b.connect(this.dc);
            this.dc.connect(this.Zb);
            this.Zb.connect(this.b)
        }
        c() {
            this.l.disconnect();
            this.$b.disconnect();
            this.dc.disconnect();
            this.Zb.disconnect();
            this.b.disconnect();
            this.a.disconnect();
            super.c()
        }
        Yf(a, b) {
            .01 > a && (a = .01);
            this.$b.gain.value = a;
            this.Zb.gain.value = Math.pow(1 / a, .6) * b
        }
        ef(a, b) {
            for (let d = 0; 32768 > d; ++d) {
                let g = d / 32768;
                g = this.kg(g, a, b);
                this.Oc[32768 + d] = g;
                this.Oc[32768 - d - 1] = -g
            }
        }
        kg(a, b, d) {
            d = 1.05 * d * b - b;
            const g = 0 > a ? -a : a;
            return (g < b ? g : b + d * self.da.Bg(g - b, 1 / d)) * (0 > a ? -1 : 1)
        }
        S(a) {
            this.b.disconnect();
            this.b.connect(a);
            this.a.disconnect();
            this.a.connect(a)
        }
        P() {
            return this.l
        }
        X(a, b, d, g) {
            switch (a) {
                case 0:
                    b = Math.max(Math.min(b / 100, 1), 0), this.g[4] = b, this.m(this.b.gain, b, d, g), this.m(this.a.gain, 1 - b, d, g)
            }
        }
    };
    self.ge = class extends f {
        constructor(a, b, d, g, n, q) {
            super(a);
            this.R = "compressor";
            this.g = [b, d, g, n, q];
            this.h = this.f.createDynamicsCompressor();
            this.h.threshold.value = b;
            this.h.knee.value = d;
            this.h.ratio.value = g;
            this.h.attack.value = n;
            this.h.release.value = q
        }
        c() {
            this.h.disconnect();
            super.c()
        }
        S(a) {
            this.h.disconnect();
            this.h.connect(a)
        }
        P() {
            return this.h
        }
        X() {}
    };
    self.fe = class extends f {
        constructor(a, b, d) {
            super(a);
            this.R = "analyser";
            this.g = [b, d];
            this.h = this.f.createAnalyser();
            this.h.fftSize = b;
            this.h.smoothingTimeConstant = d;
            this.Nd = new Float32Array(this.h.frequencyBinCount);
            this.Zd = new Uint8Array(b);
            this.Xd = this.Ka = 0;
            this.i.Pe(this)
        }
        c() {
            this.i.Rf(this);
            this.h.disconnect();
            super.c()
        }
        Da() {
            this.h.getFloatFrequencyData(this.Nd);
            this.h.getByteTimeDomainData(this.Zd);
            const a = this.h.fftSize;
            let b = this.Ka = 0;
            for (var d = 0; d < a; ++d) {
                let g = (this.Zd[d] - 128) / 128;
                0 > g && (g = -g);
                this.Ka < g && (this.Ka = g);
                b += g * g
            }
            d = self.da.Fe;
            this.Ka = d(this.Ka);
            this.Xd = d(Math.sqrt(b / a))
        }
        S(a) {
            this.h.disconnect();
            this.h.connect(a)
        }
        P() {
            return this.h
        }
        X() {}
        ze() {
            return {
                tag: this.Y,
                index: this.Pd,
                peak: this.Ka,
                rms: this.Xd,
                binCount: this.h.frequencyBinCount,
                freqBins: this.Nd
            }
        }
    }
}
"use strict";

function Z(f) {
    window.C3_RegisterSW && window.OfflineClientInfo && window.OfflineClientInfo.SetMessageCallback(a => w(f, "sw-message", a.data))
}

function aa(f) {
    f = f.orientation;
    if (screen.orientation && screen.orientation.lock) screen.orientation.lock(f).catch(a => console.warn("[Construct 3] Failed to lock orientation: ", a));
    else try {
        let a = !1;
        screen.lockOrientation ? a = screen.lockOrientation(f) : screen.webkitLockOrientation ? a = screen.webkitLockOrientation(f) : screen.mozLockOrientation ? a = screen.mozLockOrientation(f) : screen.msLockOrientation && (a = screen.msLockOrientation(f));
        a || console.warn("[Construct 3] Failed to lock orientation")
    } catch (a) {
        console.warn("[Construct 3] Failed to lock orientation: ",
            a)
    }
}
self.ta.vb(class extends self.Ra {
    constructor(f) {
        super(f, "browser");
        this.s = "";
        L(this, [
            ["get-initial-state", a => {
                this.s = a.exportType;
                return {
                    location: location.toString(),
                    isOnline: !!navigator.onLine,
                    referrer: document.referrer,
                    title: document.title,
                    isCookieEnabled: !!navigator.cookieEnabled,
                    screenWidth: screen.width,
                    screenHeight: screen.height,
                    windowOuterWidth: window.outerWidth,
                    windowOuterHeight: window.outerHeight,
                    isScirraArcade: "undefined" !== typeof window.is_scirra_arcade
                }
            }],
            ["ready-for-sw-messages", () => Z(this)],
            ["alert", a => this.Bc(a)],
            ["close", () => {
                navigator.app && navigator.app.exitApp ? navigator.app.exitApp() : navigator.device && navigator.device.exitApp ? navigator.device.exitApp() : window.close()
            }],
            ["set-focus", a => this.Gc(a)],
            ["vibrate", a => {
                navigator.vibrate && navigator.vibrate(a.pattern)
            }],
            ["lock-orientation", a => aa(a)],
            ["unlock-orientation", () => {
                try {
                    screen.orientation && screen.orientation.unlock ? screen.orientation.unlock() : screen.unlockOrientation ? screen.unlockOrientation() : screen.webkitUnlockOrientation ? screen.webkitUnlockOrientation() :
                        screen.mozUnlockOrientation ? screen.mozUnlockOrientation() : screen.msUnlockOrientation && screen.msUnlockOrientation()
                } catch (a) {}
            }],
            ["navigate", a => {
                var b = a.type;
                if ("back" === b) navigator.app && navigator.app.backHistory ? navigator.app.backHistory() : window.history.back();
                else if ("forward" === b) window.history.forward();
                else if ("reload" === b) location.reload();
                else if ("url" === b) {
                    b = a.url;
                    const d = a.target;
                    a = a.exportType;
                    self.cordova && self.cordova.InAppBrowser ? self.cordova.InAppBrowser.open(b, "_system") : "preview" ===
                        a || "windows-webview2" === a ? window.open(b, "_blank") : this.Qg || (2 === d ? window.top.location = b : 1 === d ? window.parent.location = b : window.location = b)
                } else "new-window" === b && (b = a.url, a = a.tag, self.cordova && self.cordova.InAppBrowser ? self.cordova.InAppBrowser.open(b, "_system") : window.open(b, a))
            }],
            ["request-fullscreen", a => {
                if ("windows-webview2" === this.s || "macos-wkwebview" === this.s) self.ta.Jb(!0), this.A.Kc({
                    type: "set-fullscreen",
                    fullscreen: !0
                });
                else {
                    const b = {
                        navigationUI: "auto"
                    };
                    a = a.navUI;
                    1 === a ? b.navigationUI = "hide" :
                        2 === a && (b.navigationUI = "show");
                    a = document.documentElement;
                    a.requestFullscreen ? a.requestFullscreen(b) : a.mozRequestFullScreen ? a.mozRequestFullScreen(b) : a.msRequestFullscreen ? a.msRequestFullscreen(b) : a.webkitRequestFullScreen && ("undefined" !== typeof Element.ALLOW_KEYBOARD_INPUT ? a.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT) : a.webkitRequestFullScreen())
                }
            }],
            ["exit-fullscreen", () => {
                "windows-webview2" === this.s || "macos-wkwebview" === this.s ? (self.ta.Jb(!1), this.A.Kc({
                        type: "set-fullscreen",
                        fullscreen: !1
                    })) :
                    document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.msExitFullscreen ? document.msExitFullscreen() : document.webkitCancelFullScreen && document.webkitCancelFullScreen()
            }],
            ["set-hash", a => {
                location.hash = a.hash
            }]
        ]);
        window.addEventListener("online", () => {
            w(this, "online-state", {
                isOnline: !0
            })
        });
        window.addEventListener("offline", () => {
            w(this, "online-state", {
                isOnline: !1
            })
        });
        window.addEventListener("hashchange", () => {
            w(this, "hashchange", {
                location: location.toString()
            })
        });
        document.addEventListener("backbutton", () => {
            w(this, "backbutton")
        })
    }
    Bc(f) {
        alert(f.message)
    }
    Gc(f) {
        f = f.isFocus;
        if ("nwjs" === this.s) {
            const a = "nwjs" === this.s ? nw.Window.get() : null;
            f ? a.focus() : a.blur()
        } else f ? window.focus() : window.blur()
    }
});