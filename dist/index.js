import "./index.css";
import { jsx as b, jsxs as O } from "react/jsx-runtime";
import { Button as Ye } from "react-aria-components";
import * as oe from "react";
import A, { useContext as ke, useState as K, useRef as C, useCallback as me, useEffect as Q, useMemo as et, useReducer as vr } from "react";
import { flushSync as xr } from "react-dom";
const Lo = ({
  primary: e = !1,
  size: t = "medium",
  backgroundColor: r,
  label: n,
  ...o
}) => {
  const i = e ? "storybook-button--primary" : "storybook-button--secondary";
  return /* @__PURE__ */ b(
    Ye,
    {
      type: "button",
      className: [
        "storybook-button",
        `storybook-button--${t}`,
        i
      ].join(" "),
      style: { backgroundColor: r },
      ...o,
      children: n
    }
  );
}, W = "custom/object", ye = {
  prefix: String(Math.round(Math.random() * 1e10)),
  current: 0
}, bt = /* @__PURE__ */ A.createContext(ye), $r = /* @__PURE__ */ A.createContext(!1);
let Ir = !!(typeof window < "u" && window.document && window.document.createElement), $e = /* @__PURE__ */ new WeakMap();
function Er(e = !1) {
  let t = ke(bt), r = C(null);
  if (r.current === null && !e) {
    var n, o;
    let i = (n = A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === null || n === void 0 || (o = n.ReactCurrentOwner) === null || o === void 0 ? void 0 : o.current;
    if (i) {
      let a = $e.get(i);
      a == null ? $e.set(i, {
        id: t.current,
        state: i.memoizedState
      }) : i.memoizedState !== a.state && (t.current = a.id, $e.delete(i));
    }
    r.current = ++t.current;
  }
  return r.current;
}
function Nr(e) {
  let t = ke(bt);
  t === ye && !Ir && console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");
  let r = Er(!!e), n = t === ye && process.env.NODE_ENV === "test" ? "react-aria" : `react-aria${t.prefix}`;
  return e || `${n}-${r}`;
}
function Ar(e) {
  let t = A.useId(), [r] = K(Fe()), n = r || process.env.NODE_ENV === "test" ? "react-aria" : `react-aria${ye.prefix}`;
  return e || `${n}-${t}`;
}
A.useId;
function jr() {
  return !1;
}
function zr() {
  return !0;
}
function Sr(e) {
  return () => {
  };
}
function Fe() {
  return typeof A.useSyncExternalStore == "function" ? A.useSyncExternalStore(Sr, jr, zr) : ke($r);
}
const ve = typeof document < "u" ? A.useLayoutEffect : () => {
};
function q(e) {
  const t = C(null);
  return ve(() => {
    t.current = e;
  }, [
    e
  ]), me((...r) => {
    const n = t.current;
    return n(...r);
  }, []);
}
function wr(e) {
  var t;
  return typeof window > "u" || window.navigator == null ? !1 : ((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.brands.some((r) => e.test(r.brand))) || e.test(window.navigator.userAgent);
}
function Dt(e) {
  var t;
  return typeof window < "u" && window.navigator != null ? e.test(((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.platform) || window.navigator.platform) : !1;
}
function Ze() {
  return Dt(/^Mac/i);
}
function Lr() {
  return Dt(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  Ze() && navigator.maxTouchPoints > 1;
}
function yt() {
  return wr(/Android/i);
}
let _ = /* @__PURE__ */ new Map(), tt = /* @__PURE__ */ new Set();
function rt() {
  if (typeof window > "u")
    return;
  let e = (r) => {
    let n = _.get(r.target);
    n || (n = /* @__PURE__ */ new Set(), _.set(r.target, n), r.target.addEventListener("transitioncancel", t)), n.add(r.propertyName);
  }, t = (r) => {
    let n = _.get(r.target);
    if (n && (n.delete(r.propertyName), n.size === 0 && (r.target.removeEventListener("transitioncancel", t), _.delete(r.target)), _.size === 0)) {
      for (let o of tt)
        o();
      tt.clear();
    }
  };
  document.body.addEventListener("transitionrun", e), document.body.addEventListener("transitionend", t);
}
typeof document < "u" && (document.readyState !== "loading" ? rt() : document.addEventListener("DOMContentLoaded", rt));
function Cr() {
  let e = C(/* @__PURE__ */ new Map()), t = me((o, i, a, u) => {
    let d = u != null && u.once ? (...l) => {
      e.current.delete(a), a(...l);
    } : a;
    e.current.set(a, {
      type: i,
      eventTarget: o,
      fn: d,
      options: u
    }), o.addEventListener(i, a, u);
  }, []), r = me((o, i, a, u) => {
    var d;
    let l = ((d = e.current.get(a)) === null || d === void 0 ? void 0 : d.fn) || a;
    o.removeEventListener(i, l, u), e.current.delete(a);
  }, []), n = me(() => {
    e.current.forEach((o, i) => {
      r(o.eventTarget, o.type, i, o.options);
    });
  }, [
    r
  ]);
  return Q(() => n, [
    n
  ]), {
    addGlobalListener: t,
    removeGlobalListener: r,
    removeAllGlobalListeners: n
  };
}
let Or = 0;
const Ie = /* @__PURE__ */ new Map();
function ft(e) {
  let [t, r] = K(void 0);
  return ve(() => {
    if (!e)
      return;
    let n = Ie.get(e);
    if (n)
      r(n.element.id);
    else {
      let o = `react-aria-description-${Or++}`;
      r(o);
      let i = document.createElement("div");
      i.id = o, i.style.display = "none", i.textContent = e, document.body.appendChild(i), n = {
        refCount: 0,
        element: i
      }, Ie.set(e, n);
    }
    return n.refCount++, () => {
      --n.refCount === 0 && (n.element.remove(), Ie.delete(e));
    };
  }, [
    e
  ]), {
    "aria-describedby": e ? t : void 0
  };
}
function Re(e) {
  return e.mozInputSource === 0 && e.isTrusted ? !0 : yt() && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType;
}
function Tt(e) {
  return !yt() && e.width === 0 && e.height === 0 || e.width === 1 && e.height === 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === "mouse";
}
const Pr = A.createContext(null);
Pr.displayName = "PressResponderContext";
let F = null, Se = /* @__PURE__ */ new Set(), nt = !1, Z = !1, we = !1;
function Ge(e, t) {
  for (let r of Se)
    r(e, t);
}
function Kr(e) {
  return !(e.metaKey || !Ze() && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
}
function ot(e) {
  Z = !0, Kr(e) && (F = "keyboard", Ge("keyboard", e));
}
function H(e) {
  F = "pointer", (e.type === "mousedown" || e.type === "pointerdown") && (Z = !0, Ge("pointer", e));
}
function Vr(e) {
  Re(e) && (Z = !0, F = "virtual");
}
function Qr(e) {
  e.target === window || e.target === document || (!Z && !we && (F = "virtual", Ge("virtual", e)), Z = !1, we = !1);
}
function Ur() {
  Z = !1, we = !0;
}
function Le() {
  if (typeof window > "u" || nt)
    return;
  let e = HTMLElement.prototype.focus;
  HTMLElement.prototype.focus = function() {
    Z = !0, e.apply(this, arguments);
  }, document.addEventListener("keydown", ot, !0), document.addEventListener("keyup", ot, !0), document.addEventListener("click", Vr, !0), window.addEventListener("focus", Qr, !0), window.addEventListener("blur", Ur, !1), typeof PointerEvent < "u" ? (document.addEventListener("pointerdown", H, !0), document.addEventListener("pointermove", H, !0), document.addEventListener("pointerup", H, !0)) : (document.addEventListener("mousedown", H, !0), document.addEventListener("mousemove", H, !0), document.addEventListener("mouseup", H, !0)), nt = !0;
}
typeof document < "u" && (document.readyState !== "loading" ? Le() : document.addEventListener("DOMContentLoaded", Le));
function Br() {
  return F;
}
function Yr() {
  Le();
  let [e, t] = K(F);
  return Q(() => {
    let r = () => {
      t(F);
    };
    return Se.add(r), () => {
      Se.delete(r);
    };
  }, []), Fe() ? null : e;
}
class Fr {
  /** Returns a localized string for the given key and locale. */
  getStringForLocale(t, r) {
    let n = this.strings[r];
    n || (n = Zr(r, this.strings, this.defaultLocale), this.strings[r] = n);
    let o = n[t];
    if (!o)
      throw new Error(`Could not find intl message ${t} in ${r} locale`);
    return o;
  }
  constructor(t, r = "en-US") {
    this.strings = {
      ...t
    }, this.defaultLocale = r;
  }
}
function Zr(e, t, r = "en-US") {
  if (t[e])
    return t[e];
  let n = Rr(e);
  if (t[n])
    return t[n];
  for (let o in t)
    if (o.startsWith(n + "-"))
      return t[o];
  return t[r];
}
function Rr(e) {
  return Intl.Locale ? new Intl.Locale(e).language : e.split("-")[0];
}
const at = /* @__PURE__ */ new Map(), it = /* @__PURE__ */ new Map();
class Gr {
  /** Formats a localized string for the given key with the provided variables. */
  format(t, r) {
    let n = this.strings.getStringForLocale(t, this.locale);
    return typeof n == "function" ? n(r, this) : n;
  }
  plural(t, r, n = "cardinal") {
    let o = r["=" + t];
    if (o)
      return typeof o == "function" ? o() : o;
    let i = this.locale + ":" + n, a = at.get(i);
    a || (a = new Intl.PluralRules(this.locale, {
      type: n
    }), at.set(i, a));
    let u = a.select(t);
    return o = r[u] || r.other, typeof o == "function" ? o() : o;
  }
  number(t) {
    let r = it.get(this.locale);
    return r || (r = new Intl.NumberFormat(this.locale), it.set(this.locale, r)), r.format(t);
  }
  select(t, r) {
    let n = t[r] || t.other;
    return typeof n == "function" ? n() : n;
  }
  constructor(t, r) {
    this.locale = t, this.strings = r;
  }
}
const Hr = /* @__PURE__ */ new Set([
  "Arab",
  "Syrc",
  "Samr",
  "Mand",
  "Thaa",
  "Mend",
  "Nkoo",
  "Adlm",
  "Rohg",
  "Hebr"
]), Wr = /* @__PURE__ */ new Set([
  "ae",
  "ar",
  "arc",
  "bcc",
  "bqi",
  "ckb",
  "dv",
  "fa",
  "glk",
  "he",
  "ku",
  "mzn",
  "nqo",
  "pnb",
  "ps",
  "sd",
  "ug",
  "ur",
  "yi"
]);
function Xr(e) {
  if (Intl.Locale) {
    let r = new Intl.Locale(e).maximize().script;
    return Hr.has(r);
  }
  let t = e.split("-")[0];
  return Wr.has(t);
}
function ht() {
  let e = typeof navigator < "u" && (navigator.language || navigator.userLanguage) || "en-US";
  try {
    Intl.DateTimeFormat.supportedLocalesOf([
      e
    ]);
  } catch {
    e = "en-US";
  }
  return {
    locale: e,
    direction: Xr(e) ? "rtl" : "ltr"
  };
}
let Ce = ht(), ne = /* @__PURE__ */ new Set();
function lt() {
  Ce = ht();
  for (let e of ne)
    e(Ce);
}
function Jr() {
  let e = Fe(), [t, r] = K(Ce);
  return Q(() => (ne.size === 0 && window.addEventListener("languagechange", lt), ne.add(r), () => {
    ne.delete(r), ne.size === 0 && window.removeEventListener("languagechange", lt);
  }), []), e ? {
    locale: "en-US",
    direction: "ltr"
  } : t;
}
const qr = /* @__PURE__ */ A.createContext(null);
function _r() {
  let e = Jr();
  return ke(qr) || e;
}
const ut = /* @__PURE__ */ new WeakMap();
function en(e) {
  let t = ut.get(e);
  return t || (t = new Fr(e), ut.set(e, t)), t;
}
function Mt(e) {
  let { locale: t } = _r(), r = et(() => en(e), [
    e
  ]);
  return et(() => new Gr(t, r), [
    t,
    r
  ]);
}
const kt = 7e3;
let Ee = null;
function se(e, t = "assertive", r = kt) {
  Ee || (Ee = new tn()), Ee.announce(e, t, r);
}
class tn {
  createLog(t) {
    let r = document.createElement("div");
    return r.setAttribute("role", "log"), r.setAttribute("aria-live", t), r.setAttribute("aria-relevant", "additions"), r;
  }
  destroy() {
    this.node && (document.body.removeChild(this.node), this.node = null);
  }
  announce(t, r = "assertive", n = kt) {
    if (!this.node)
      return;
    let o = document.createElement("div");
    o.textContent = t, r === "assertive" ? this.assertiveLog.appendChild(o) : this.politeLog.appendChild(o), t !== "" && setTimeout(() => {
      o.remove();
    }, n);
  }
  clear(t) {
    this.node && ((!t || t === "assertive") && (this.assertiveLog.innerHTML = ""), (!t || t === "polite") && (this.politeLog.innerHTML = ""));
  }
  constructor() {
    this.node = document.createElement("div"), this.node.dataset.liveAnnouncer = "true", Object.assign(this.node.style, {
      border: 0,
      clip: "rect(0 0 0 0)",
      clipPath: "inset(50%)",
      height: "1px",
      margin: "-1px",
      overflow: "hidden",
      padding: 0,
      position: "absolute",
      width: "1px",
      whiteSpace: "nowrap"
    }), this.assertiveLog = this.createLog("assertive"), this.node.appendChild(this.assertiveLog), this.politeLog = this.createLog("polite"), this.node.appendChild(this.politeLog), document.body.prepend(this.node);
  }
}
let ee = /* @__PURE__ */ new WeakMap(), L = [];
function rn(e, t = document.body) {
  let r = new Set(e), n = /* @__PURE__ */ new Set(), o = (d) => {
    for (let D of d.querySelectorAll("[data-live-announcer], [data-react-aria-top-layer]"))
      r.add(D);
    let l = (D) => {
      if (r.has(D) || n.has(D.parentElement) && D.parentElement.getAttribute("role") !== "row")
        return NodeFilter.FILTER_REJECT;
      for (let M of r)
        if (D.contains(M))
          return NodeFilter.FILTER_SKIP;
      return NodeFilter.FILTER_ACCEPT;
    }, s = document.createTreeWalker(d, NodeFilter.SHOW_ELEMENT, {
      acceptNode: l
    }), g = l(d);
    if (g === NodeFilter.FILTER_ACCEPT && i(d), g !== NodeFilter.FILTER_REJECT) {
      let D = s.nextNode();
      for (; D != null; )
        i(D), D = s.nextNode();
    }
  }, i = (d) => {
    var l;
    let s = (l = ee.get(d)) !== null && l !== void 0 ? l : 0;
    d.getAttribute("aria-hidden") === "true" && s === 0 || (s === 0 && d.setAttribute("aria-hidden", "true"), n.add(d), ee.set(d, s + 1));
  };
  L.length && L[L.length - 1].disconnect(), o(t);
  let a = new MutationObserver((d) => {
    for (let l of d)
      if (!(l.type !== "childList" || l.addedNodes.length === 0) && ![
        ...r,
        ...n
      ].some((s) => s.contains(l.target))) {
        for (let s of l.removedNodes)
          s instanceof Element && (r.delete(s), n.delete(s));
        for (let s of l.addedNodes)
          (s instanceof HTMLElement || s instanceof SVGElement) && (s.dataset.liveAnnouncer === "true" || s.dataset.reactAriaTopLayer === "true") ? r.add(s) : s instanceof Element && o(s);
      }
  });
  a.observe(t, {
    childList: !0,
    subtree: !0
  });
  let u = {
    observe() {
      a.observe(t, {
        childList: !0,
        subtree: !0
      });
    },
    disconnect() {
      a.disconnect();
    }
  };
  return L.push(u), () => {
    a.disconnect();
    for (let d of n) {
      let l = ee.get(d);
      l === 1 ? (d.removeAttribute("aria-hidden"), ee.delete(d)) : ee.set(d, l - 1);
    }
    u === L[L.length - 1] ? (L.pop(), L.length && L[L.length - 1].observe()) : L.splice(L.indexOf(u), 1);
  };
}
function vt(e) {
  return e && e.__esModule ? e.default : e;
}
var T;
(function(e) {
  e[e.none = 0] = "none", e[e.cancel = 0] = "cancel", e[e.move = 1] = "move", e[e.copy = 2] = "copy", e[e.link = 4] = "link", e[e.all = 7] = "all";
})(T || (T = {}));
const xt = {
  ...T,
  copyMove: T.copy | T.move,
  copyLink: T.copy | T.link,
  linkMove: T.link | T.move,
  all: T.all,
  uninitialized: T.all
}, $t = He(xt);
$t[T.all] = "all";
He(T);
const ae = {
  none: "cancel",
  link: "link",
  copy: "copy",
  move: "move"
}, Ne = He(ae);
function He(e) {
  let t = {};
  for (let r in e)
    t[e[r]] = r;
  return t;
}
const nn = /* @__PURE__ */ new Set([
  "text/plain",
  "text/uri-list",
  "text/html"
]), fe = "application/vnd.react-aria.items+json", Te = "application/octet-stream", on = Symbol();
function be(e) {
  let t = /* @__PURE__ */ new Set();
  for (let r of e)
    for (let n of Object.keys(r))
      t.add(n);
  return t;
}
function It(e) {
  return e || (e = "virtual"), e === "pointer" && (e = "virtual"), e === "virtual" && typeof window < "u" && "ontouchstart" in window && (e = "touch"), e;
}
function Et() {
  return It(Yr());
}
function Nt() {
  return It(Br());
}
function an(e, t) {
  let r = /* @__PURE__ */ new Map(), n = !1, o = [];
  for (let i of t) {
    let a = Object.keys(i);
    a.length > 1 && (n = !0);
    let u = {};
    for (let d of a) {
      let l = r.get(d);
      l ? n = !0 : (l = [], r.set(d, l));
      let s = i[d];
      u[d] = s, l.push(s);
    }
    o.push(u);
  }
  for (let [i, a] of r)
    if (nn.has(i)) {
      let u = a.join(`
`);
      e.items.add(u, i);
    } else
      e.items.add(a[0], i);
  if (n) {
    let i = JSON.stringify(o);
    e.items.add(i, fe);
  }
}
class ce {
  has(t) {
    return this.includesUnknownTypes || t === on && this.types.has(Te) ? !0 : typeof t == "string" && this.types.has(t);
  }
  constructor(t) {
    this.types = /* @__PURE__ */ new Set();
    let r = !1;
    for (let n of t.items)
      n.type !== fe && (n.kind === "file" && (r = !0), n.type ? this.types.add(n.type) : this.types.add(Te));
    this.includesUnknownTypes = !r && t.types.includes("Files");
  }
}
function ln(e) {
  let t = [], r = !1;
  if (e.types.includes(fe))
    try {
      let n = e.getData(fe), o = JSON.parse(n);
      for (let i of o)
        t.push({
          kind: "text",
          types: new Set(Object.keys(i)),
          getText: (a) => Promise.resolve(i[a])
        });
      r = !0;
    } catch {
    }
  if (!r) {
    let n = /* @__PURE__ */ new Map();
    for (let o of e.items)
      if (o.kind === "string")
        n.set(o.type || Te, e.getData(o.type));
      else if (o.kind === "file")
        if (typeof o.webkitGetAsEntry == "function") {
          let i = o.webkitGetAsEntry();
          if (!i)
            continue;
          i.isFile ? t.push(Oe(o.getAsFile())) : i.isDirectory && t.push(At(i));
        } else
          t.push(Oe(o.getAsFile()));
    n.size > 0 && t.push({
      kind: "text",
      types: new Set(n.keys()),
      getText: (o) => Promise.resolve(n.get(o))
    });
  }
  return t;
}
function un(e) {
  return typeof e.text == "function" ? e.text() : new Promise((t, r) => {
    let n = new FileReader();
    n.onload = () => {
      t(n.result);
    }, n.onerror = r, n.readAsText(e);
  });
}
function Oe(e) {
  return {
    kind: "file",
    type: e.type || Te,
    name: e.name,
    getText: () => un(e),
    getFile: () => Promise.resolve(e)
  };
}
function At(e) {
  return {
    kind: "directory",
    name: e.name,
    getEntries: () => dn(e)
  };
}
async function* dn(e) {
  let t = e.createReader(), r;
  do {
    r = await new Promise((n, o) => {
      t.readEntries(n, o);
    });
    for (let n of r)
      if (n.isFile) {
        let o = await sn(n);
        yield Oe(o);
      } else
        n.isDirectory && (yield At(n));
  } while (r.length > 0);
}
function sn(e) {
  return new Promise((t, r) => e.file(t, r));
}
let jt = {
  draggingKeys: /* @__PURE__ */ new Set()
};
function cn(e) {
  jt = e;
}
let De;
function he(e) {
  De = e;
}
let Pe = T.none;
function Ae(e) {
  Pe = e;
}
let Ke = /* @__PURE__ */ new Map(), je = /* @__PURE__ */ new Map(), w = null, Me = /* @__PURE__ */ new Set();
function pn(e) {
  return Ke.set(e.element, e), w == null || w.updateValidDropTargets(), () => {
    Ke.delete(e.element), w == null || w.updateValidDropTargets();
  };
}
function gn(e, t) {
  if (w)
    throw new Error("Cannot begin dragging while already dragging");
  w = new fn(e, t), requestAnimationFrame(() => {
    w.setup(), Nt() === "keyboard" && w.next();
  });
  for (let r of Me)
    r();
}
function mn() {
  let [e, t] = K(w);
  return Q(() => {
    let r = () => t(w);
    return Me.add(r), () => {
      Me.delete(r);
    };
  }, []), e;
}
function bn() {
  w = null;
  for (let e of Me)
    e();
}
const dt = [
  "pointerdown",
  "pointermove",
  "pointerenter",
  "pointerleave",
  "pointerover",
  "pointerout",
  "pointerup",
  "mousedown",
  "mousemove",
  "mouseenter",
  "mouseleave",
  "mouseover",
  "mouseout",
  "mouseup",
  "touchstart",
  "touchmove",
  "touchend",
  "focusin",
  "focusout"
], Dn = [
  "pointerup",
  "mouseup",
  "touchend"
], yn = {
  keyboard: "dragStartedKeyboard",
  touch: "dragStartedTouch",
  virtual: "dragStartedVirtual"
};
class fn {
  setup() {
    document.addEventListener("keydown", this.onKeyDown, !0), document.addEventListener("keyup", this.onKeyUp, !0), window.addEventListener("focus", this.onFocus, !0), window.addEventListener("blur", this.onBlur, !0), document.addEventListener("click", this.onClick, !0), document.addEventListener("pointerdown", this.onPointerDown, !0);
    for (let t of dt)
      document.addEventListener(t, this.cancelEvent, !0);
    this.mutationObserver = new MutationObserver(() => this.updateValidDropTargets()), this.updateValidDropTargets(), se(this.stringFormatter.format(yn[Nt()]));
  }
  teardown() {
    document.removeEventListener("keydown", this.onKeyDown, !0), document.removeEventListener("keyup", this.onKeyUp, !0), window.removeEventListener("focus", this.onFocus, !0), window.removeEventListener("blur", this.onBlur, !0), document.removeEventListener("click", this.onClick, !0), document.removeEventListener("pointerdown", this.onPointerDown, !0);
    for (let t of dt)
      document.removeEventListener(t, this.cancelEvent, !0);
    this.mutationObserver.disconnect(), this.restoreAriaHidden();
  }
  onKeyDown(t) {
    var r;
    if (this.cancelEvent(t), t.key === "Escape") {
      this.cancel();
      return;
    }
    t.key === "Tab" && !(t.metaKey || t.altKey || t.ctrlKey) && (t.shiftKey ? this.previous() : this.next()), typeof ((r = this.currentDropTarget) === null || r === void 0 ? void 0 : r.onKeyDown) == "function" && this.currentDropTarget.onKeyDown(t, this.dragTarget);
  }
  onKeyUp(t) {
    this.cancelEvent(t), t.key === "Enter" && (t.altKey ? this.activate() : this.drop());
  }
  onFocus(t) {
    if (t.target !== this.dragTarget.element && this.cancelEvent(t), !(t.target instanceof HTMLElement) || t.target === this.dragTarget.element)
      return;
    let r = this.validDropTargets.find((o) => o.element === t.target) || this.validDropTargets.find((o) => o.element.contains(t.target));
    if (!r) {
      this.currentDropTarget ? this.currentDropTarget.element.focus() : this.dragTarget.element.focus();
      return;
    }
    let n = je.get(t.target);
    this.setCurrentDropTarget(r, n);
  }
  onBlur(t) {
    t.target !== this.dragTarget.element && this.cancelEvent(t), (!t.relatedTarget || !(t.relatedTarget instanceof HTMLElement)) && (this.currentDropTarget ? this.currentDropTarget.element.focus() : this.dragTarget.element.focus());
  }
  onClick(t) {
    if (this.cancelEvent(t), Re(t) || this.isVirtualClick) {
      if (t.target === this.dragTarget.element) {
        this.cancel();
        return;
      }
      let r = this.validDropTargets.find((n) => n.element.contains(t.target));
      if (r) {
        let n = je.get(t.target);
        this.setCurrentDropTarget(r, n), this.drop(n);
      }
    }
  }
  onPointerDown(t) {
    this.cancelEvent(t), this.isVirtualClick = Tt(t);
  }
  cancelEvent(t) {
    var r;
    (t.type === "focusin" || t.type === "focusout") && t.target === ((r = this.dragTarget) === null || r === void 0 ? void 0 : r.element) || (Dn.includes(t.type) || t.preventDefault(), t.stopPropagation(), t.stopImmediatePropagation());
  }
  updateValidDropTargets() {
    if (!this.mutationObserver)
      return;
    if (this.mutationObserver.disconnect(), this.restoreAriaHidden && this.restoreAriaHidden(), this.validDropTargets = Tn(this.dragTarget), this.validDropTargets.length > 0) {
      let o = this.findNearestDropTarget();
      this.validDropTargets = [
        ...this.validDropTargets.slice(o),
        ...this.validDropTargets.slice(0, o)
      ];
    }
    this.currentDropTarget && !this.validDropTargets.includes(this.currentDropTarget) && this.setCurrentDropTarget(this.validDropTargets[0]);
    let t = be(this.dragTarget.items), r = [
      ...je.values()
    ].filter((o) => typeof o.getDropOperation == "function" ? o.getDropOperation(t, this.dragTarget.allowedDropOperations) !== "cancel" : !0), n = this.validDropTargets.filter((o) => !r.some((i) => o.element.contains(i.element)));
    this.restoreAriaHidden = rn([
      this.dragTarget.element,
      ...r.map((o) => o.element),
      ...n.map((o) => o.element)
    ]), this.mutationObserver.observe(document.body, {
      subtree: !0,
      attributes: !0,
      attributeFilter: [
        "aria-hidden"
      ]
    });
  }
  next() {
    if (!this.currentDropTarget) {
      this.setCurrentDropTarget(this.validDropTargets[0]);
      return;
    }
    let t = this.validDropTargets.indexOf(this.currentDropTarget);
    if (t < 0) {
      this.setCurrentDropTarget(this.validDropTargets[0]);
      return;
    }
    t === this.validDropTargets.length - 1 ? this.dragTarget.element.closest('[aria-hidden="true"]') ? this.setCurrentDropTarget(this.validDropTargets[0]) : (this.setCurrentDropTarget(null), this.dragTarget.element.focus()) : this.setCurrentDropTarget(this.validDropTargets[t + 1]);
  }
  previous() {
    if (!this.currentDropTarget) {
      this.setCurrentDropTarget(this.validDropTargets[this.validDropTargets.length - 1]);
      return;
    }
    let t = this.validDropTargets.indexOf(this.currentDropTarget);
    if (t < 0) {
      this.setCurrentDropTarget(this.validDropTargets[this.validDropTargets.length - 1]);
      return;
    }
    t === 0 ? this.dragTarget.element.closest('[aria-hidden="true"]') ? this.setCurrentDropTarget(this.validDropTargets[this.validDropTargets.length - 1]) : (this.setCurrentDropTarget(null), this.dragTarget.element.focus()) : this.setCurrentDropTarget(this.validDropTargets[t - 1]);
  }
  findNearestDropTarget() {
    let t = this.dragTarget.element.getBoundingClientRect(), r = 1 / 0, n = -1;
    for (let o = 0; o < this.validDropTargets.length; o++) {
      let a = this.validDropTargets[o].element.getBoundingClientRect(), u = a.left - t.left, d = a.top - t.top, l = u * u + d * d;
      l < r && (r = l, n = o);
    }
    return n;
  }
  setCurrentDropTarget(t, r) {
    if (t !== this.currentDropTarget) {
      if (this.currentDropTarget && typeof this.currentDropTarget.onDropExit == "function") {
        let n = this.currentDropTarget.element.getBoundingClientRect();
        this.currentDropTarget.onDropExit({
          type: "dropexit",
          x: n.left + n.width / 2,
          y: n.top + n.height / 2
        });
      }
      if (this.currentDropTarget = t, t) {
        if (typeof t.onDropEnter == "function") {
          let n = t.element.getBoundingClientRect();
          t.onDropEnter({
            type: "dropenter",
            x: n.left + n.width / 2,
            y: n.top + n.height / 2
          }, this.dragTarget);
        }
        r || t == null || t.element.focus();
      }
    }
    r !== this.currentDropItem && (r && typeof this.currentDropTarget.onDropTargetEnter == "function" && this.currentDropTarget.onDropTargetEnter(r == null ? void 0 : r.target), r == null || r.element.focus(), this.currentDropItem = r, this.initialFocused || (se(r == null ? void 0 : r.element.getAttribute("aria-label"), "polite"), this.initialFocused = !0));
  }
  end() {
    if (this.teardown(), bn(), typeof this.dragTarget.onDragEnd == "function") {
      let r = (this.currentDropTarget && this.dropOperation !== "cancel" ? this.currentDropTarget : this.dragTarget).element.getBoundingClientRect();
      this.dragTarget.onDragEnd({
        type: "dragend",
        x: r.x + r.width / 2,
        y: r.y + r.height / 2,
        dropOperation: this.dropOperation || "cancel"
      });
    }
    this.currentDropTarget && (this.dragTarget.element.contains(this.currentDropTarget.element) || (this.dragTarget.element.dispatchEvent(new FocusEvent("blur")), this.dragTarget.element.dispatchEvent(new FocusEvent("focusout", {
      bubbles: !0
    }))), xr(() => {
      this.currentDropTarget.element.blur();
    }), this.currentDropTarget.element.focus()), this.setCurrentDropTarget(null);
  }
  cancel() {
    this.setCurrentDropTarget(null), this.end(), this.dragTarget.element.closest('[aria-hidden="true"]') || this.dragTarget.element.focus(), se(this.stringFormatter.format("dropCanceled"));
  }
  drop(t) {
    if (!this.currentDropTarget) {
      this.cancel();
      return;
    }
    if (typeof (t == null ? void 0 : t.getDropOperation) == "function") {
      let r = be(this.dragTarget.items);
      this.dropOperation = t.getDropOperation(r, this.dragTarget.allowedDropOperations);
    } else if (typeof this.currentDropTarget.getDropOperation == "function") {
      let r = be(this.dragTarget.items);
      this.dropOperation = this.currentDropTarget.getDropOperation(r, this.dragTarget.allowedDropOperations);
    } else
      this.dropOperation = this.dragTarget.allowedDropOperations[0];
    if (typeof this.currentDropTarget.onDrop == "function") {
      let r = this.dragTarget.items.map((o) => ({
        kind: "text",
        types: new Set(Object.keys(o)),
        getText: (i) => Promise.resolve(o[i])
      })), n = this.currentDropTarget.element.getBoundingClientRect();
      this.currentDropTarget.onDrop({
        type: "drop",
        x: n.left + n.width / 2,
        y: n.top + n.height / 2,
        items: r,
        dropOperation: this.dropOperation
      }, t == null ? void 0 : t.target);
    }
    this.end(), se(this.stringFormatter.format("dropComplete"));
  }
  activate() {
    if (this.currentDropTarget && typeof this.currentDropTarget.onDropActivate == "function") {
      let t = this.currentDropTarget.element.getBoundingClientRect();
      this.currentDropTarget.onDropActivate({
        type: "dropactivate",
        x: t.left + t.width / 2,
        y: t.top + t.height / 2
      });
    }
  }
  constructor(t, r) {
    this.dragTarget = t, this.stringFormatter = r, this.onKeyDown = this.onKeyDown.bind(this), this.onKeyUp = this.onKeyUp.bind(this), this.onFocus = this.onFocus.bind(this), this.onBlur = this.onBlur.bind(this), this.onClick = this.onClick.bind(this), this.onPointerDown = this.onPointerDown.bind(this), this.cancelEvent = this.cancelEvent.bind(this), this.initialFocused = !1;
  }
}
function Tn(e) {
  let t = be(e.items);
  return [
    ...Ke.values()
  ].filter((r) => r.element.closest('[aria-hidden="true"]') ? !1 : typeof r.getDropOperation == "function" ? r.getDropOperation(t, e.allowedDropOperations) !== "cancel" : !0);
}
var We = {}, zt = {};
zt = {
  dragDescriptionKeyboard: "اضغط Enter لبدء السحب.",
  dragDescriptionKeyboardAlt: "اضغط على Alt + Enter لبدء السحب.",
  dragDescriptionLongPress: "اضغط باستمرار لبدء السحب.",
  dragDescriptionTouch: "اضغط مرتين لبدء السحب.",
  dragDescriptionVirtual: "انقر لبدء السحب.",
  dragItem: (e) => `اسحب ${e.itemText}`,
  dragSelectedItems: (e, t) => `اسحب ${t.plural(e.count, {
    one: () => `${t.number(e.count)} عنصر محدد`,
    other: () => `${t.number(e.count)} عناصر محددة`
  })}`,
  dragSelectedKeyboard: (e, t) => `اضغط على Enter للسحب ${t.plural(e.count, {
    one: "عدد العناصر المختارة",
    other: "عدد العناصر المختارة"
  })}.`,
  dragSelectedKeyboardAlt: (e, t) => `اضغط على مفتاحي Alt + Enter للسحب ${t.plural(e.count, {
    one: "عدد العناصر المختارة",
    other: "عدد العناصر المختارة"
  })}.`,
  dragSelectedLongPress: (e, t) => `اضغط باستمرار للسحب ${t.plural(e.count, {
    one: "عدد العناصر المختارة",
    other: "عدد العناصر المختارة"
  })}.`,
  dragStartedKeyboard: "بدأ السحب. اضغط Tab للانتقال إلى موضع الإفلات، ثم اضغط Enter للإفلات، أو اضغط Escape للإلغاء.",
  dragStartedTouch: "بدأ السحب. انتقل إلى موضع الإفلات، ثم اضغط مرتين للإفلات.",
  dragStartedVirtual: "بدأ السحب. انتقل إلى مكان الإفلات، ثم انقر أو اضغط Enter للإفلات.",
  dropCanceled: "تم إلغاء الإفلات.",
  dropComplete: "اكتمل الإفلات.",
  dropDescriptionKeyboard: "اضغط Enter للإفلات. اضغط Escape لإلغاء السحب.",
  dropDescriptionTouch: "اضغط مرتين للإفلات.",
  dropDescriptionVirtual: "انقر للإفلات.",
  dropIndicator: "مؤشر الإفلات",
  dropOnItem: (e) => `إفلات ${e.itemText}`,
  dropOnRoot: "الإفلات",
  endDragKeyboard: "السحب. اضغط Enter لإلغاء السحب.",
  endDragTouch: "السحب. اضغط مرتين لإلغاء السحب.",
  endDragVirtual: "السحب. انقر لإلغاء السحب.",
  insertAfter: (e) => `أدخل بعد ${e.itemText}`,
  insertBefore: (e) => `أدخل قبل ${e.itemText}`,
  insertBetween: (e) => `أدخل بين ${e.beforeItemText} و ${e.afterItemText}`
};
var St = {};
St = {
  dragDescriptionKeyboard: "Натиснете „Enter“, за да започнете да плъзгате.",
  dragDescriptionKeyboardAlt: "Натиснете Alt + Enter, за да започнете да плъзгате.",
  dragDescriptionLongPress: "Натиснете продължително, за да започнете да плъзгате.",
  dragDescriptionTouch: "Натиснете двукратно, за да започнете да плъзгате.",
  dragDescriptionVirtual: "Щракнете, за да започнете да плъзгате.",
  dragItem: (e) => `Плъзни ${e.itemText}`,
  dragSelectedItems: (e, t) => `Плъзни ${t.plural(e.count, {
    one: () => `${t.number(e.count)} избран елемент`,
    other: () => `${t.number(e.count)} избрани елемента`
  })}`,
  dragSelectedKeyboard: (e, t) => `Натиснете Enter, за да плъзнете ${t.plural(e.count, {
    one: () => `${t.number(e.count)} избран елемент`,
    other: () => `${t.number(e.count)} избрани елементи`
  })}.`,
  dragSelectedKeyboardAlt: (e, t) => `Натиснете Alt и Enter, за да плъзнете ${t.plural(e.count, {
    one: () => `${t.number(e.count)} избран елемент`,
    other: () => `${t.number(e.count)} избрани елементи`
  })}.`,
  dragSelectedLongPress: (e, t) => `Натиснете продължително, за да плъзнете ${t.plural(e.count, {
    one: () => `${t.number(e.count)} избран елемент`,
    other: () => `${t.number(e.count)} избрани елементи`
  })}.`,
  dragStartedKeyboard: "Започна плъзгане. Натиснете „Tab“, за да се придвижите до целта, след което натиснете „Enter“ за пускане или натиснете „Escape“ за отмяна.",
  dragStartedTouch: "Започна плъзгане. Придвижете се до целта, след което натиснете двукратно, за да пуснете.",
  dragStartedVirtual: "Започна плъзгане. Придвижете се до целта, след което щракнете или натиснете „Enter“ за пускане.",
  dropCanceled: "Пускането е отменено.",
  dropComplete: "Пускането е завършено.",
  dropDescriptionKeyboard: "Натиснете „Enter“ за пускане. Натиснете „Escape“ за отмяна на плъзгането.",
  dropDescriptionTouch: "Натиснете двукратно за пускане.",
  dropDescriptionVirtual: "Щракнете за пускане.",
  dropIndicator: "индикатор за пускане",
  dropOnItem: (e) => `Пусни върху ${e.itemText}`,
  dropOnRoot: "Пусни върху",
  endDragKeyboard: "Плъзгане. Натиснете „Enter“ за отмяна на плъзгането.",
  endDragTouch: "Плъзгане. Натиснете двукратно за отмяна на плъзгането.",
  endDragVirtual: "Плъзгане. Щракнете за отмяна.",
  insertAfter: (e) => `Вмъкни след ${e.itemText}`,
  insertBefore: (e) => `Вмъкни преди ${e.itemText}`,
  insertBetween: (e) => `Вмъкни между ${e.beforeItemText} и ${e.afterItemText}`
};
var wt = {};
wt = {
  dragDescriptionKeyboard: "Stisknutím klávesy Enter začnete s přetahováním.",
  dragDescriptionKeyboardAlt: "Stisknutím Alt + Enter zahájíte přetahování.",
  dragDescriptionLongPress: "Dlouhým stisknutím zahájíte přetahování.",
  dragDescriptionTouch: "Poklepáním začnete s přetahováním.",
  dragDescriptionVirtual: "Kliknutím začnete s přetahováním.",
  dragItem: (e) => `Přetáhnout ${e.itemText}`,
  dragSelectedItems: (e, t) => `Přetáhnout ${t.plural(e.count, {
    one: () => `${t.number(e.count)} vybranou položku`,
    few: () => `${t.number(e.count)} vybrané položky`,
    other: () => `${t.number(e.count)} vybraných položek`
  })}`,
  dragSelectedKeyboard: (e, t) => `Stisknutím klávesy Enter přetáhněte ${t.plural(e.count, {
    one: () => `${t.number(e.count)} vybranou položku`,
    other: () => `${t.number(e.count)} vybrané položky`
  })}.`,
  dragSelectedKeyboardAlt: (e, t) => `Stisknutím Alt + Enter přetáhněte ${t.plural(e.count, {
    one: () => `${t.number(e.count)} vybranou položku`,
    other: () => `${t.number(e.count)} vybrané položky`
  })}.`,
  dragSelectedLongPress: (e, t) => `Dlouhým stisknutím přetáhnete ${t.plural(e.count, {
    one: () => `${t.number(e.count)} vybranou položku`,
    other: () => `${t.number(e.count)} vybrané položky`
  })}.`,
  dragStartedKeyboard: "Začněte s přetahováním. Po stisknutí klávesy Tab najděte požadovaný cíl a stisknutím klávesy Enter přetažení dokončete nebo stisknutím klávesy Esc akci zrušte.",
  dragStartedTouch: "Začněte s přetahováním. Najděte požadovaný cíl a poklepáním přetažení dokončete.",
  dragStartedVirtual: "Začněte s přetahováním. Najděte požadovaný cíl a kliknutím nebo stisknutím klávesy Enter přetažení dokončete.",
  dropCanceled: "Přetažení bylo zrušeno.",
  dropComplete: "Přetažení bylo dokončeno.",
  dropDescriptionKeyboard: "Stisknutím klávesy Enter přetažení dokončete nebo stisknutím klávesy Esc akci zrušte.",
  dropDescriptionTouch: "Poklepáním přetažení dokončete.",
  dropDescriptionVirtual: "Kliknutím objekt přetáhněte.",
  dropIndicator: "indikátor přetažení",
  dropOnItem: (e) => `Přetáhnout na ${e.itemText}`,
  dropOnRoot: "Přetáhnout na",
  endDragKeyboard: "Probíhá přetahování. Stisknutím klávesy Enter přetažení zrušíte.",
  endDragTouch: "Probíhá přetahování. Poklepáním přetažení zrušíte.",
  endDragVirtual: "Probíhá přetahování. Kliknutím přetažení zrušíte.",
  insertAfter: (e) => `Vložit za ${e.itemText}`,
  insertBefore: (e) => `Vložit před ${e.itemText}`,
  insertBetween: (e) => `Vložit mezi ${e.beforeItemText} a ${e.afterItemText}`
};
var Lt = {};
Lt = {
  dragDescriptionKeyboard: "Tryk på Enter for at starte med at trække.",
  dragDescriptionKeyboardAlt: "Tryk på Alt + Enter for at starte med at trække.",
  dragDescriptionLongPress: "Tryk længe for at starte med at trække.",
  dragDescriptionTouch: "Dobbelttryk for at starte med at trække.",
  dragDescriptionVirtual: "Klik for at starte med at trække.",
  dragItem: (e) => `Træk ${e.itemText}`,
  dragSelectedItems: (e, t) => `Træk ${t.plural(e.count, {
    one: () => `${t.number(e.count)} valgt element`,
    other: () => `${t.number(e.count)} valgte elementer`
  })}`,
  dragSelectedKeyboard: (e, t) => `Tryk på Enter for at trække ${t.plural(e.count, {
    one: () => `${t.number(e.count)} valgte element`,
    other: () => `${t.number(e.count)} valgte elementer`
  })}.`,
  dragSelectedKeyboardAlt: (e, t) => `Tryk på Alt + Enter for at trække ${t.plural(e.count, {
    one: () => `${t.number(e.count)} valgte element`,
    other: () => `${t.number(e.count)} valgte elementer`
  })}.`,
  dragSelectedLongPress: (e, t) => `Tryk længe for at trække ${t.plural(e.count, {
    one: () => `${t.number(e.count)} valgte element`,
    other: () => `${t.number(e.count)} valgte elementer`
  })}.`,
  dragStartedKeyboard: "Startet med at trække. Tryk på Tab for at gå til et slip-mål, tryk derefter på Enter for at slippe, eller tryk på Escape for at annullere.",
  dragStartedTouch: "Startet med at trække. Gå til et slip-mål, og dobbelttryk derefter for at slippe.",
  dragStartedVirtual: "Startet med at trække. Gå til et slip-mål, og klik eller tryk derefter på enter for at slippe.",
  dropCanceled: "Slip annulleret.",
  dropComplete: "Slip fuldført.",
  dropDescriptionKeyboard: "Tryk på Enter for at slippe. Tryk på Escape for at annullere trækning.",
  dropDescriptionTouch: "Dobbelttryk for at slippe.",
  dropDescriptionVirtual: "Klik for at slippe.",
  dropIndicator: "slip-indikator",
  dropOnItem: (e) => `Slip på ${e.itemText}`,
  dropOnRoot: "Slip på",
  endDragKeyboard: "Trækning. Tryk på enter for at annullere træk.",
  endDragTouch: "Trækning. Dobbelttryk for at annullere træk.",
  endDragVirtual: "Trækning. Klik for at annullere trækning.",
  insertAfter: (e) => `Indsæt efter ${e.itemText}`,
  insertBefore: (e) => `Indsæt før ${e.itemText}`,
  insertBetween: (e) => `Indsæt mellem ${e.beforeItemText} og ${e.afterItemText}`
};
var Ct = {};
Ct = {
  dragDescriptionKeyboard: "Drücken Sie die Eingabetaste, um den Ziehvorgang zu starten.",
  dragDescriptionKeyboardAlt: "Alt + Eingabe drücken, um den Ziehvorgang zu starten.",
  dragDescriptionLongPress: "Lang drücken, um mit dem Ziehen zu beginnen.",
  dragDescriptionTouch: "Tippen Sie doppelt, um den Ziehvorgang zu starten.",
  dragDescriptionVirtual: "Zum Starten des Ziehvorgangs klicken.",
  dragItem: (e) => `${e.itemText} ziehen`,
  dragSelectedItems: (e, t) => `${t.plural(e.count, {
    one: () => `${t.number(e.count)} ausgewähltes Objekt`,
    other: () => `${t.number(e.count)} ausgewählte Objekte`
  })} ziehen`,
  dragSelectedKeyboard: (e, t) => `Eingabetaste drücken, um ${t.plural(e.count, {
    one: () => `${t.number(e.count)} ausgewähltes Element`,
    other: () => `${t.number(e.count)} ausgewählte Elemente`
  })} zu ziehen.`,
  dragSelectedKeyboardAlt: (e, t) => `Alt + Eingabetaste drücken, um ${t.plural(e.count, {
    one: () => `${t.number(e.count)} ausgewähltes Element`,
    other: () => `${t.number(e.count)} ausgewählte Elemente`
  })} zu ziehen.`,
  dragSelectedLongPress: (e, t) => `Lang drücken, um ${t.plural(e.count, {
    one: () => `${t.number(e.count)} ausgewähltes Element`,
    other: () => `${t.number(e.count)} ausgewählte Elemente`
  })} zu ziehen.`,
  dragStartedKeyboard: "Ziehvorgang gestartet. Drücken Sie die Tabulatortaste, um zu einem Ablegeziel zu navigieren und drücken Sie dann die Eingabetaste, um das Objekt abzulegen, oder Escape, um den Vorgang abzubrechen.",
  dragStartedTouch: "Ziehvorgang gestartet. Navigieren Sie zu einem Ablegeziel und tippen Sie doppelt, um das Objekt abzulegen.",
  dragStartedVirtual: "Ziehvorgang gestartet. Navigieren Sie zu einem Ablegeziel und klicken Sie oder drücken Sie die Eingabetaste, um das Objekt abzulegen.",
  dropCanceled: "Ablegen abgebrochen.",
  dropComplete: "Ablegen abgeschlossen.",
  dropDescriptionKeyboard: "Drücken Sie die Eingabetaste, um das Objekt abzulegen. Drücken Sie Escape, um den Vorgang abzubrechen.",
  dropDescriptionTouch: "Tippen Sie doppelt, um das Objekt abzulegen.",
  dropDescriptionVirtual: "Zum Ablegen klicken.",
  dropIndicator: "Ablegeanzeiger",
  dropOnItem: (e) => `Auf ${e.itemText} ablegen`,
  dropOnRoot: "Ablegen auf",
  endDragKeyboard: "Ziehvorgang läuft. Drücken Sie die Eingabetaste, um den Vorgang abzubrechen.",
  endDragTouch: "Ziehvorgang läuft. Tippen Sie doppelt, um den Vorgang abzubrechen.",
  endDragVirtual: "Ziehvorgang läuft. Klicken Sie, um den Vorgang abzubrechen.",
  insertAfter: (e) => `Nach ${e.itemText} einfügen`,
  insertBefore: (e) => `Vor ${e.itemText} einfügen`,
  insertBetween: (e) => `Zwischen ${e.beforeItemText} und ${e.afterItemText} einfügen`
};
var Ot = {};
Ot = {
  dragDescriptionKeyboard: "Πατήστε Enter για έναρξη της μεταφοράς.",
  dragDescriptionKeyboardAlt: "Πατήστε Alt + Enter για έναρξη της μεταφοράς.",
  dragDescriptionLongPress: "Πατήστε παρατεταμένα για να ξεκινήσετε τη μεταφορά.",
  dragDescriptionTouch: "Πατήστε δύο φορές για έναρξη της μεταφοράς.",
  dragDescriptionVirtual: "Κάντε κλικ για να ξεκινήσετε τη μεταφορά.",
  dragItem: (e) => `Μεταφορά ${e.itemText}`,
  dragSelectedItems: (e, t) => `Μεταφορά σε ${t.plural(e.count, {
    one: () => `${t.number(e.count)} επιλεγμένο στοιχείο`,
    other: () => `${t.number(e.count)} επιλεγμένα στοιχεία`
  })}`,
  dragSelectedKeyboard: (e, t) => `Πατήστε Enter για να σύρετε ${t.plural(e.count, {
    one: () => `${t.number(e.count)} επιλεγμένο στοιχείο`,
    other: () => `${t.number(e.count)} επιλεγμένα στοιχεία`
  })}.`,
  dragSelectedKeyboardAlt: (e, t) => `Πατήστε Alt + Enter για να σύρετε ${t.plural(e.count, {
    one: () => `${t.number(e.count)} επιλεγμένο στοιχείο`,
    other: () => `${t.number(e.count)} επιλεγμένα στοιχεία`
  })}.`,
  dragSelectedLongPress: (e, t) => `Πατήστε παρατεταμένα για να σύρετε ${t.plural(e.count, {
    one: () => `${t.number(e.count)} επιλεγμένο στοιχείο`,
    other: () => `${t.number(e.count)} επιλεγμένα στοιχεία`
  })}.`,
  dragStartedKeyboard: "Η μεταφορά ξεκίνησε. Πατήστε το πλήκτρο Tab για να μεταβείτε σε έναν προορισμό απόθεσης και, στη συνέχεια, πατήστε Enter για απόθεση ή πατήστε Escape για ακύρωση.",
  dragStartedTouch: "Η μεταφορά ξεκίνησε. Μεταβείτε σε έναν προορισμό απόθεσης και, στη συνέχεια, πατήστε δύο φορές για απόθεση.",
  dragStartedVirtual: "Η μεταφορά ξεκίνησε. Μεταβείτε σε έναν προορισμό απόθεσης και, στη συνέχεια, κάντε κλικ ή πατήστε Enter για απόθεση.",
  dropCanceled: "Η απόθεση ακυρώθηκε.",
  dropComplete: "Η απόθεση ολοκληρώθηκε.",
  dropDescriptionKeyboard: "Πατήστε Enter για απόθεση. Πατήστε Escape για ακύρωση της μεταφοράς.",
  dropDescriptionTouch: "Πατήστε δύο φορές για απόθεση.",
  dropDescriptionVirtual: "Κάντε κλικ για απόθεση.",
  dropIndicator: "δείκτης απόθεσης",
  dropOnItem: (e) => `Απόθεση σε ${e.itemText}`,
  dropOnRoot: "Απόθεση σε",
  endDragKeyboard: "Μεταφορά σε εξέλιξη. Πατήστε Enter για ακύρωση της μεταφοράς.",
  endDragTouch: "Μεταφορά σε εξέλιξη. Πατήστε δύο φορές για ακύρωση της μεταφοράς.",
  endDragVirtual: "Μεταφορά σε εξέλιξη. Κάντε κλικ για ακύρωση της μεταφοράς.",
  insertAfter: (e) => `Εισαγωγή μετά από ${e.itemText}`,
  insertBefore: (e) => `Εισαγωγή πριν από ${e.itemText}`,
  insertBetween: (e) => `Εισαγωγή μεταξύ ${e.beforeItemText} και ${e.afterItemText}`
};
var Pt = {};
Pt = {
  dragItem: (e) => `Drag ${e.itemText}`,
  dragSelectedItems: (e, t) => `Drag ${t.plural(e.count, {
    one: () => `${t.number(e.count)} selected item`,
    other: () => `${t.number(e.count)} selected items`
  })}`,
  dragDescriptionKeyboard: "Press Enter to start dragging.",
  dragDescriptionKeyboardAlt: "Press Alt + Enter to start dragging.",
  dragDescriptionTouch: "Double tap to start dragging.",
  dragDescriptionVirtual: "Click to start dragging.",
  dragDescriptionLongPress: "Long press to start dragging.",
  dragSelectedKeyboard: (e, t) => `Press Enter to drag ${t.plural(e.count, {
    one: () => `${t.number(e.count)} selected item`,
    other: () => `${t.number(e.count)} selected items`
  })}.`,
  dragSelectedKeyboardAlt: (e, t) => `Press Alt + Enter to drag ${t.plural(e.count, {
    one: () => `${t.number(e.count)} selected item`,
    other: () => `${t.number(e.count)} selected items`
  })}.`,
  dragSelectedLongPress: (e, t) => `Long press to drag ${t.plural(e.count, {
    one: () => `${t.number(e.count)} selected item`,
    other: () => `${t.number(e.count)} selected items`
  })}.`,
  dragStartedKeyboard: "Started dragging. Press Tab to navigate to a drop target, then press Enter to drop, or press Escape to cancel.",
  dragStartedTouch: "Started dragging. Navigate to a drop target, then double tap to drop.",
  dragStartedVirtual: "Started dragging. Navigate to a drop target, then click or press Enter to drop.",
  endDragKeyboard: "Dragging. Press Enter to cancel drag.",
  endDragTouch: "Dragging. Double tap to cancel drag.",
  endDragVirtual: "Dragging. Click to cancel drag.",
  dropDescriptionKeyboard: "Press Enter to drop. Press Escape to cancel drag.",
  dropDescriptionTouch: "Double tap to drop.",
  dropDescriptionVirtual: "Click to drop.",
  dropCanceled: "Drop canceled.",
  dropComplete: "Drop complete.",
  dropIndicator: "drop indicator",
  dropOnRoot: "Drop on",
  dropOnItem: (e) => `Drop on ${e.itemText}`,
  insertBefore: (e) => `Insert before ${e.itemText}`,
  insertBetween: (e) => `Insert between ${e.beforeItemText} and ${e.afterItemText}`,
  insertAfter: (e) => `Insert after ${e.itemText}`
};
var Kt = {};
Kt = {
  dragDescriptionKeyboard: "Pulse Intro para empezar a arrastrar.",
  dragDescriptionKeyboardAlt: "Pulse Intro para empezar a arrastrar.",
  dragDescriptionLongPress: "Mantenga pulsado para comenzar a arrastrar.",
  dragDescriptionTouch: "Pulse dos veces para iniciar el arrastre.",
  dragDescriptionVirtual: "Haga clic para iniciar el arrastre.",
  dragItem: (e) => `Arrastrar ${e.itemText}`,
  dragSelectedItems: (e, t) => `Arrastrar ${t.plural(e.count, {
    one: () => `${t.number(e.count)} elemento seleccionado`,
    other: () => `${t.number(e.count)} elementos seleccionados`
  })}`,
  dragSelectedKeyboard: (e, t) => `Pulse Intro para arrastrar ${t.plural(e.count, {
    one: () => `${t.number(e.count)} elemento seleccionado`,
    other: () => `${t.number(e.count)} elementos seleccionados`
  })}.`,
  dragSelectedKeyboardAlt: (e, t) => `Pulse Alt + Intro para arrastrar ${t.plural(e.count, {
    one: () => `${t.number(e.count)} elemento seleccionado`,
    other: () => `${t.number(e.count)} elementos seleccionados`
  })}.`,
  dragSelectedLongPress: (e, t) => `Mantenga pulsado para arrastrar ${t.plural(e.count, {
    one: () => `${t.number(e.count)} elemento seleccionado`,
    other: () => `${t.number(e.count)} elementos seleccionados`
  })}.`,
  dragStartedKeyboard: "Se ha empezado a arrastrar. Pulse el tabulador para ir al público destinatario donde se vaya a colocar y, a continuación, pulse Intro para soltar, o pulse Escape para cancelar.",
  dragStartedTouch: "Se ha empezado a arrastrar. Vaya al público destinatario donde se vaya a colocar y, a continuación, pulse dos veces para soltar.",
  dragStartedVirtual: "Se ha empezado a arrastrar. Vaya al público destinatario donde se vaya a colocar y, a continuación, haga clic o pulse Intro para soltar.",
  dropCanceled: "Se ha cancelado la colocación.",
  dropComplete: "Colocación finalizada.",
  dropDescriptionKeyboard: "Pulse Intro para soltar. Pulse Escape para cancelar el arrastre.",
  dropDescriptionTouch: "Pulse dos veces para soltar.",
  dropDescriptionVirtual: "Haga clic para soltar.",
  dropIndicator: "indicador de colocación",
  dropOnItem: (e) => `Soltar en ${e.itemText}`,
  dropOnRoot: "Soltar en",
  endDragKeyboard: "Arrastrando. Pulse Intro para cancelar el arrastre.",
  endDragTouch: "Arrastrando. Pulse dos veces para cancelar el arrastre.",
  endDragVirtual: "Arrastrando. Haga clic para cancelar el arrastre.",
  insertAfter: (e) => `Insertar después de ${e.itemText}`,
  insertBefore: (e) => `Insertar antes de ${e.itemText}`,
  insertBetween: (e) => `Insertar entre ${e.beforeItemText} y ${e.afterItemText}`
};
var Vt = {};
Vt = {
  dragDescriptionKeyboard: "Lohistamise alustamiseks vajutage klahvi Enter.",
  dragDescriptionKeyboardAlt: "Lohistamise alustamiseks vajutage klahvikombinatsiooni Alt + Enter.",
  dragDescriptionLongPress: "Vajutage pikalt lohistamise alustamiseks.",
  dragDescriptionTouch: "Topeltpuudutage lohistamise alustamiseks.",
  dragDescriptionVirtual: "Klõpsake lohistamise alustamiseks.",
  dragItem: (e) => `Lohista ${e.itemText}`,
  dragSelectedItems: (e, t) => `Lohista ${t.plural(e.count, {
    one: () => `${t.number(e.count)} valitud üksust`,
    other: () => `${t.number(e.count)} valitud üksust`
  })}`,
  dragSelectedKeyboard: (e, t) => `${t.plural(e.count, {
    one: () => `${t.number(e.count)} valitud üksuse`,
    other: () => `${t.number(e.count)} valitud üksuse`
  })} lohistamiseks vajutage sisestusklahvi Enter.`,
  dragSelectedKeyboardAlt: (e, t) => `Lohistamiseks vajutage klahvikombinatsiooni Alt + Enter ${t.plural(e.count, {
    one: () => `${t.number(e.count)} valitud üksuse`,
    other: () => `${t.number(e.count)} valitud üksuse`
  })} jaoks.`,
  dragSelectedLongPress: (e, t) => `Pikk vajutus ${t.plural(e.count, {
    one: () => `${t.number(e.count)} valitud üksuse`,
    other: () => `${t.number(e.count)} valitud üksuse`
  })} lohistamiseks.`,
  dragStartedKeyboard: "Alustati lohistamist. Kukutamise sihtmärgi juurde navigeerimiseks vajutage klahvi Tab, seejärel vajutage kukutamiseks klahvi Enter või loobumiseks klahvi Escape.",
  dragStartedTouch: "Alustati lohistamist. Navigeerige kukutamise sihtmärgi juurde ja topeltpuudutage kukutamiseks.",
  dragStartedVirtual: "Alustati lohistamist. Navigeerige kukutamise sihtmärgi juurde ja kukutamiseks klõpsake või vajutage klahvi Enter.",
  dropCanceled: "Lohistamisest loobuti.",
  dropComplete: "Lohistamine on tehtud.",
  dropDescriptionKeyboard: "Kukutamiseks vajutage klahvi Enter. Lohistamisest loobumiseks vajutage klahvi Escape.",
  dropDescriptionTouch: "Kukutamiseks topeltpuudutage.",
  dropDescriptionVirtual: "Kukutamiseks klõpsake.",
  dropIndicator: "lohistamise indikaator",
  dropOnItem: (e) => `Kukuta asukohta ${e.itemText}`,
  dropOnRoot: "Kukuta asukohta",
  endDragKeyboard: "Lohistamine. Lohistamisest loobumiseks vajutage klahvi Enter.",
  endDragTouch: "Lohistamine. Lohistamisest loobumiseks topeltpuudutage.",
  endDragVirtual: "Lohistamine. Lohistamisest loobumiseks klõpsake.",
  insertAfter: (e) => `Sisesta ${e.itemText} järele`,
  insertBefore: (e) => `Sisesta ${e.itemText} ette`,
  insertBetween: (e) => `Sisesta ${e.beforeItemText} ja ${e.afterItemText} vahele`
};
var Qt = {};
Qt = {
  dragDescriptionKeyboard: "Aloita vetäminen painamalla Enter-näppäintä.",
  dragDescriptionKeyboardAlt: "Aloita vetäminen painamalla Alt + Enter -näppäinyhdistelmää.",
  dragDescriptionLongPress: "Aloita vetäminen pitämällä painettuna.",
  dragDescriptionTouch: "Aloita vetäminen kaksoisnapauttamalla.",
  dragDescriptionVirtual: "Aloita vetäminen napsauttamalla.",
  dragItem: (e) => `Vedä kohdetta ${e.itemText}`,
  dragSelectedItems: (e, t) => `Vedä ${t.plural(e.count, {
    one: () => `${t.number(e.count)} valittua kohdetta`,
    other: () => `${t.number(e.count)} valittua kohdetta`
  })}`,
  dragSelectedKeyboard: (e, t) => `Vedä painamalla Enter ${t.plural(e.count, {
    one: () => `${t.number(e.count)} valittu kohde`,
    other: () => `${t.number(e.count)} valittua kohdetta`
  })}.`,
  dragSelectedKeyboardAlt: (e, t) => `Vedä painamalla Alt + Enter ${t.plural(e.count, {
    one: () => `${t.number(e.count)} valittu kohde`,
    other: () => `${t.number(e.count)} valittua kohdetta`
  })}.`,
  dragSelectedLongPress: (e, t) => `Vedä pitämällä painettuna ${t.plural(e.count, {
    one: () => `${t.number(e.count)} valittu kohde`,
    other: () => `${t.number(e.count)} valittua kohdetta`
  })}.`,
  dragStartedKeyboard: "Vetäminen aloitettu. Siirry pudotuskohteeseen painamalla sarkainnäppäintä ja sitten pudota painamalla Enter-näppäintä tai peruuta painamalla Escape-näppäintä.",
  dragStartedTouch: "Vetäminen aloitettu. Siirry pudotuskohteeseen ja pudota kaksoisnapauttamalla.",
  dragStartedVirtual: "Vetäminen aloitettu. Siirry pudotuskohteeseen ja pudota napsauttamalla tai painamalla Enter-näppäintä.",
  dropCanceled: "Pudotus peruutettu.",
  dropComplete: "Pudotus suoritettu.",
  dropDescriptionKeyboard: "Pudota painamalla Enter-näppäintä. Peruuta vetäminen painamalla Escape-näppäintä.",
  dropDescriptionTouch: "Pudota kaksoisnapauttamalla.",
  dropDescriptionVirtual: "Pudota napsauttamalla.",
  dropIndicator: "pudotuksen ilmaisin",
  dropOnItem: (e) => `Pudota kohteeseen ${e.itemText}`,
  dropOnRoot: "Pudota kohteeseen",
  endDragKeyboard: "Vedetään. Peruuta vetäminen painamalla Enter-näppäintä.",
  endDragTouch: "Vedetään. Peruuta vetäminen kaksoisnapauttamalla.",
  endDragVirtual: "Vedetään. Peruuta vetäminen napsauttamalla.",
  insertAfter: (e) => `Lisää kohteen ${e.itemText} jälkeen`,
  insertBefore: (e) => `Lisää ennen kohdetta ${e.itemText}`,
  insertBetween: (e) => `Lisää kohteiden ${e.beforeItemText} ja ${e.afterItemText} väliin`
};
var Ut = {};
Ut = {
  dragDescriptionKeyboard: "Appuyez sur Entrée pour commencer le déplacement.",
  dragDescriptionKeyboardAlt: "Appuyez sur Alt + Entrée pour commencer à faire glisser.",
  dragDescriptionLongPress: "Appuyez de manière prolongée pour commencer à faire glisser.",
  dragDescriptionTouch: "Touchez deux fois pour commencer le déplacement.",
  dragDescriptionVirtual: "Cliquez pour commencer le déplacement.",
  dragItem: (e) => `Déplacer ${e.itemText}`,
  dragSelectedItems: (e, t) => `Déplacer ${t.plural(e.count, {
    one: () => `${t.number(e.count)} élément sélectionné`,
    other: () => `${t.number(e.count)} éléments sélectionnés`
  })}`,
  dragSelectedKeyboard: (e, t) => `Appuyez sur Entrée pour faire glisser ${t.plural(e.count, {
    one: () => `${t.number(e.count)} élément sélectionné`,
    other: () => `${t.number(e.count)} éléments sélectionnés`
  })}.`,
  dragSelectedKeyboardAlt: (e, t) => `Appuyez sur Alt + Entrée pour faire glisser ${t.plural(e.count, {
    one: () => `${t.number(e.count)} élément sélectionné`,
    other: () => `${t.number(e.count)} éléments sélectionnés`
  })}.`,
  dragSelectedLongPress: (e, t) => `Appuyez de manière prolongée pour faire glisser ${t.plural(e.count, {
    one: () => `${t.number(e.count)} élément sélectionné`,
    other: () => `${t.number(e.count)} éléments sélectionnés`
  })}.`,
  dragStartedKeyboard: "Déplacement commencé. Appuyez sur Tabulation pour accéder à une cible de dépôt, puis appuyez sur Entrée pour déposer, ou appuyez sur Échap pour annuler.",
  dragStartedTouch: "Déplacement commencé. Accédez à une cible de dépôt, puis touchez deux fois pour déposer.",
  dragStartedVirtual: "Déplacement commencé. Accédez à une cible de dépôt, puis cliquez ou appuyez sur Entrée pour déposer.",
  dropCanceled: "Dépôt annulé.",
  dropComplete: "Dépôt terminé.",
  dropDescriptionKeyboard: "Appuyez sur Entrée pour déposer. Appuyez sur Échap pour annuler le déplacement.",
  dropDescriptionTouch: "Touchez deux fois pour déposer.",
  dropDescriptionVirtual: "Cliquez pour déposer.",
  dropIndicator: "indicateur de dépôt",
  dropOnItem: (e) => `Déposer sur ${e.itemText}`,
  dropOnRoot: "Déposer sur",
  endDragKeyboard: "Déplacement. Appuyez sur Entrée pour annuler le déplacement.",
  endDragTouch: "Déplacement. Touchez deux fois pour annuler le déplacement.",
  endDragVirtual: "Déplacement. Cliquez pour annuler le déplacement.",
  insertAfter: (e) => `Insérer après ${e.itemText}`,
  insertBefore: (e) => `Insérer avant ${e.itemText}`,
  insertBetween: (e) => `Insérer entre ${e.beforeItemText} et ${e.afterItemText}`
};
var Bt = {};
Bt = {
  dragDescriptionKeyboard: "הקש על Enter כדי להתחיל לגרור.",
  dragDescriptionKeyboardAlt: "הקש Alt + Enter כדי להתחיל לגרור.",
  dragDescriptionLongPress: "לחץ לחיצה ארוכה כדי להתחיל לגרור.",
  dragDescriptionTouch: "הקש פעמיים כדי להתחיל בגרירה.",
  dragDescriptionVirtual: "לחץ כדי להתחיל לגרור.",
  dragItem: (e) => `גרור את ${e.itemText}`,
  dragSelectedItems: (e, t) => `גרור ${t.plural(e.count, {
    one: () => `פריט נבחר ${t.number(e.count)}`,
    other: () => `${t.number(e.count)} פריטים שנבחרו`
  })}`,
  dragSelectedKeyboard: (e, t) => `הקש על Enter כדי לגרור ${t.plural(e.count, {
    one: () => `${t.number(e.count)} פריט שנבחר`,
    other: () => `${t.number(e.count)} פריטים שנבחרו`
  })}.`,
  dragSelectedKeyboardAlt: (e, t) => `הקש Alt + Enter כדי לגרור ${t.plural(e.count, {
    one: () => `${t.number(e.count)} פריט שנבחר`,
    other: () => `${t.number(e.count)} פריטים שנבחרו`
  })}.`,
  dragSelectedLongPress: (e, t) => `לחץ לחיצה ארוכה כדי לגרור ${t.plural(e.count, {
    one: () => `${t.number(e.count)} פריט שנבחר`,
    other: () => `${t.number(e.count)} פריטים שנבחרו`
  })}.`,
  dragStartedKeyboard: "התחלת לגרור. הקש על Tab כדי לנווט לנקודת הגרירה ולאחר מכן הקש על Enter כדי לשחרר או על Escape כדי לבטל.",
  dragStartedTouch: "התחלת לגרור. נווט לנקודת השחרור ולאחר מכן הקש פעמיים כדי לשחרר.",
  dragStartedVirtual: "התחלת לגרור. נווט לנקודת השחרור ולאחר מכן לחץ או הקש על Enter כדי לשחרר.",
  dropCanceled: "השחרור בוטל.",
  dropComplete: "השחרור הושלם.",
  dropDescriptionKeyboard: "הקש על Enter כדי לשחרר. הקש על Escape כדי לבטל את הגרירה.",
  dropDescriptionTouch: "הקש פעמיים כדי לשחרר.",
  dropDescriptionVirtual: "לחץ כדי לשחרר.",
  dropIndicator: "מחוון שחרור",
  dropOnItem: (e) => `שחרר על ${e.itemText}`,
  dropOnRoot: "שחרר על",
  endDragKeyboard: "גורר. הקש על Enter כדי לבטל את הגרירה.",
  endDragTouch: "גורר. הקש פעמיים כדי לבטל את הגרירה.",
  endDragVirtual: "גורר. לחץ כדי לבטל את הגרירה.",
  insertAfter: (e) => `הוסף אחרי ${e.itemText}`,
  insertBefore: (e) => `הוסף לפני ${e.itemText}`,
  insertBetween: (e) => `הוסף בין ${e.beforeItemText} לבין ${e.afterItemText}`
};
var Yt = {};
Yt = {
  dragDescriptionKeyboard: "Pritisnite Enter da biste počeli povlačiti.",
  dragDescriptionKeyboardAlt: "Pritisnite Alt + Enter za početak povlačenja.",
  dragDescriptionLongPress: "Dugo pritisnite za početak povlačenja.",
  dragDescriptionTouch: "Dvaput dodirnite da biste počeli povlačiti.",
  dragDescriptionVirtual: "Kliknite da biste počeli povlačiti.",
  dragItem: (e) => `Povucite stavku ${e.itemText}`,
  dragSelectedItems: (e, t) => `Povucite ${t.plural(e.count, {
    one: () => `${t.number(e.count)} odabranu stavku`,
    other: () => `ovoliko odabranih stavki: ${t.number(e.count)}`
  })}`,
  dragSelectedKeyboard: (e, t) => `Pritisnite Enter za povlačenje ${t.plural(e.count, {
    one: () => `${t.number(e.count)} odabrana stavka`,
    other: () => `${t.number(e.count)} odabrane stavke`
  })}.`,
  dragSelectedKeyboardAlt: (e, t) => `Pritisnite Alt + Enter za povlačenje ${t.plural(e.count, {
    one: () => `${t.number(e.count)} odabrana stavka`,
    other: () => `${t.number(e.count)} odabrane stavke`
  })}.`,
  dragSelectedLongPress: (e, t) => `Dugo pritisnite za povlačenje ${t.plural(e.count, {
    one: () => `${t.number(e.count)} odabrana stavka`,
    other: () => `${t.number(e.count)} odabrane stavke`
  })}.`,
  dragStartedKeyboard: "Počeli ste povlačiti. Pritisnite tipku tabulatora da biste došli do cilja ispuštanja, a zatim Enter da biste ispustili stavku ili Escape da biste prekinuli povlačenje.",
  dragStartedTouch: "Počeli ste povlačiti. Dođite do cilja ispuštanja, a zatim dvaput dodirnite da biste ispustili stavku.",
  dragStartedVirtual: "Počeli ste povlačiti. Dođite do cilja ispuštanja, a zatim kliknite ili pritisnite Enter da biste ispustili stavku.",
  dropCanceled: "Povlačenje je prekinuto.",
  dropComplete: "Ispuštanje je dovršeno.",
  dropDescriptionKeyboard: "Pritisnite Enter da biste ispustili stavku. Pritisnite Escape da biste prekinuli povlačenje.",
  dropDescriptionTouch: "Dvaput dodirnite da biste ispustili stavku.",
  dropDescriptionVirtual: "Kliknite da biste ispustili stavku.",
  dropIndicator: "pokazatelj ispuštanja",
  dropOnItem: (e) => `Ispustite na stavku ${e.itemText}`,
  dropOnRoot: "Ispustite na",
  endDragKeyboard: "Povlačenje. Pritisnite Enter da biste prekinuli povlačenje.",
  endDragTouch: "Povlačenje. Dvaput dodirnite da biste prekinuli povlačenje.",
  endDragVirtual: "Povlačenje. Kliknite da biste prekinuli povlačenje.",
  insertAfter: (e) => `Umetnite iza stavke ${e.itemText}`,
  insertBefore: (e) => `Ispustite ispred stavke ${e.itemText}`,
  insertBetween: (e) => `Umetnite između stavki ${e.beforeItemText} i ${e.afterItemText}`
};
var Ft = {};
Ft = {
  dragDescriptionKeyboard: "Nyomja le az Enter billentyűt a húzás megkezdéséhez.",
  dragDescriptionKeyboardAlt: "Nyomja le az Alt + Enter billentyűket a húzás megkezdéséhez.",
  dragDescriptionLongPress: "Hosszan nyomja meg a húzás elindításához.",
  dragDescriptionTouch: "Koppintson duplán a húzás megkezdéséhez.",
  dragDescriptionVirtual: "Kattintson a húzás megkezdéséhez.",
  dragItem: (e) => `${e.itemText} húzása`,
  dragSelectedItems: (e, t) => `${t.plural(e.count, {
    one: () => `${t.number(e.count)} kijelölt elem`,
    other: () => `${t.number(e.count)} kijelölt elem`
  })} húzása`,
  dragSelectedKeyboard: (e, t) => `Nyomja meg az Entert ${t.plural(e.count, {
    one: () => `${t.number(e.count)} kijelölt elem`,
    other: () => `${t.number(e.count)} kijelölt elem`
  })} húzásához.`,
  dragSelectedKeyboardAlt: (e, t) => `Nyomja meg az Alt + Enter billentyűket ${t.plural(e.count, {
    one: () => `${t.number(e.count)} kijelölt elem`,
    other: () => `${t.number(e.count)} kijelölt elem`
  })} húzásához.`,
  dragSelectedLongPress: (e, t) => `Tartsa lenyomva hosszan ${t.plural(e.count, {
    one: () => `${t.number(e.count)} kijelölt elem`,
    other: () => `${t.number(e.count)} kijelölt elem`
  })} húzásához.`,
  dragStartedKeyboard: "Húzás megkezdve. Nyomja le a Tab billentyűt az elengedési célhoz navigálásához, majd nyomja le az Enter billentyűt az elengedéshez, vagy nyomja le az Escape billentyűt a megszakításhoz.",
  dragStartedTouch: "Húzás megkezdve. Navigáljon egy elengedési célhoz, majd koppintson duplán az elengedéshez.",
  dragStartedVirtual: "Húzás megkezdve. Navigáljon egy elengedési célhoz, majd kattintson vagy nyomja le az Enter billentyűt az elengedéshez.",
  dropCanceled: "Elengedés megszakítva.",
  dropComplete: "Elengedés teljesítve.",
  dropDescriptionKeyboard: "Nyomja le az Enter billentyűt az elengedéshez. Nyomja le az Escape billentyűt a húzás megszakításához.",
  dropDescriptionTouch: "Koppintson duplán az elengedéshez.",
  dropDescriptionVirtual: "Kattintson az elengedéshez.",
  dropIndicator: "elengedésjelző",
  dropOnItem: (e) => `Elengedés erre: ${e.itemText}`,
  dropOnRoot: "Elengedés erre:",
  endDragKeyboard: "Húzás folyamatban. Nyomja le az Enter billentyűt a húzás megszakításához.",
  endDragTouch: "Húzás folyamatban. Koppintson duplán a húzás megszakításához.",
  endDragVirtual: "Húzás folyamatban. Kattintson a húzás megszakításához.",
  insertAfter: (e) => `Beszúrás ${e.itemText} után`,
  insertBefore: (e) => `Beszúrás ${e.itemText} elé`,
  insertBetween: (e) => `Beszúrás ${e.beforeItemText} és ${e.afterItemText} közé`
};
var Zt = {};
Zt = {
  dragDescriptionKeyboard: "Premi Invio per iniziare a trascinare.",
  dragDescriptionKeyboardAlt: "Premi Alt + Invio per iniziare a trascinare.",
  dragDescriptionLongPress: "Premi a lungo per iniziare a trascinare.",
  dragDescriptionTouch: "Tocca due volte per iniziare a trascinare.",
  dragDescriptionVirtual: "Fai clic per iniziare a trascinare.",
  dragItem: (e) => `Trascina ${e.itemText}`,
  dragSelectedItems: (e, t) => `Trascina ${t.plural(e.count, {
    one: () => `${t.number(e.count)} altro elemento selezionato`,
    other: () => `${t.number(e.count)} altri elementi selezionati`
  })}`,
  dragSelectedKeyboard: (e, t) => `Premi Invio per trascinare ${t.plural(e.count, {
    one: () => `${t.number(e.count)} elemento selezionato`,
    other: () => `${t.number(e.count)} elementi selezionati`
  })}.`,
  dragSelectedKeyboardAlt: (e, t) => `Premi Alt + Invio per trascinare ${t.plural(e.count, {
    one: () => `${t.number(e.count)} elemento selezionato`,
    other: () => `${t.number(e.count)} elementi selezionati`
  })}.`,
  dragSelectedLongPress: (e, t) => `Premi a lungo per trascinare ${t.plural(e.count, {
    one: () => `${t.number(e.count)} elemento selezionato`,
    other: () => `${t.number(e.count)} elementi selezionati`
  })}.`,
  dragStartedKeyboard: "Hai iniziato a trascinare. Premi Tab per arrivare sull’area di destinazione, quindi premi Invio per rilasciare o Esc per annullare.",
  dragStartedTouch: "Hai iniziato a trascinare. Arriva sull’area di destinazione, quindi tocca due volte per rilasciare.",
  dragStartedVirtual: "Hai iniziato a trascinare. Arriva sull’area di destinazione, quindi fai clic o premi Invio per rilasciare.",
  dropCanceled: "Rilascio annullato.",
  dropComplete: "Rilascio completato.",
  dropDescriptionKeyboard: "Premi Invio per rilasciare. Premi Esc per annullare.",
  dropDescriptionTouch: "Tocca due volte per rilasciare.",
  dropDescriptionVirtual: "Fai clic per rilasciare.",
  dropIndicator: "indicatore di rilascio",
  dropOnItem: (e) => `Rilascia su ${e.itemText}`,
  dropOnRoot: "Rilascia su",
  endDragKeyboard: "Trascinamento. Premi Invio per annullare.",
  endDragTouch: "Trascinamento. Tocca due volte per annullare.",
  endDragVirtual: "Trascinamento. Fai clic per annullare.",
  insertAfter: (e) => `Inserisci dopo ${e.itemText}`,
  insertBefore: (e) => `Inserisci prima di ${e.itemText}`,
  insertBetween: (e) => `Inserisci tra ${e.beforeItemText} e ${e.afterItemText}`
};
var Rt = {};
Rt = {
  dragDescriptionKeyboard: "Enter キーを押してドラッグを開始してください。",
  dragDescriptionKeyboardAlt: "Alt+Enter キーを押してドラッグを開始します。",
  dragDescriptionLongPress: "長押ししてドラッグを開始します。",
  dragDescriptionTouch: "ダブルタップしてドラッグを開始します。",
  dragDescriptionVirtual: "クリックしてドラッグを開始します。",
  dragItem: (e) => `${e.itemText} をドラッグ`,
  dragSelectedItems: (e, t) => `${t.plural(e.count, {
    one: () => `${t.number(e.count)} 個の選択項目`,
    other: () => `${t.number(e.count)} 個の選択項目`
  })} をドラッグ`,
  dragSelectedKeyboard: (e, t) => `Enter キーを押して、${t.plural(e.count, {
    one: () => `${t.number(e.count)} 選択した項目`,
    other: () => `${t.number(e.count)} 選択した項目`
  })}をドラッグします。`,
  dragSelectedKeyboardAlt: (e, t) => `Alt+Enter キーを押して、${t.plural(e.count, {
    one: () => `${t.number(e.count)} 選択した項目`,
    other: () => `${t.number(e.count)} 選択した項目`
  })}をドラッグします。`,
  dragSelectedLongPress: (e, t) => `長押しして、${t.plural(e.count, {
    one: () => `${t.number(e.count)} 選択した項目`,
    other: () => `${t.number(e.count)} 選択した項目`
  })}をドラッグします。`,
  dragStartedKeyboard: "ドラッグを開始します。Tab キーを押してドロップターゲットにいどうし、Enter キーを押してドロップするか、Esc キーを押してキャンセルします。",
  dragStartedTouch: "ドラッグを開始しました。ドロップのターゲットに移動し、ダブルタップしてドロップします。",
  dragStartedVirtual: "ドラッグを開始しました。ドロップのターゲットに移動し、クリックまたは Enter キーを押してドロップします。",
  dropCanceled: "ドロップがキャンセルされました。",
  dropComplete: "ドロップが完了しました。",
  dropDescriptionKeyboard: "Enter キーを押してドロップします。Esc キーを押してドラッグをキャンセルします。",
  dropDescriptionTouch: "ダブルタップしてドロップします。",
  dropDescriptionVirtual: "クリックしてドロップします。",
  dropIndicator: "ドロップインジケーター",
  dropOnItem: (e) => `${e.itemText} にドロップ`,
  dropOnRoot: "ドロップ場所",
  endDragKeyboard: "ドラッグしています。Enter キーを押してドラッグをキャンセルします。",
  endDragTouch: "ドラッグしています。ダブルタップしてドラッグをキャンセルします。",
  endDragVirtual: "ドラッグしています。クリックしてドラッグをキャンセルします。",
  insertAfter: (e) => `${e.itemText} の後に挿入`,
  insertBefore: (e) => `${e.itemText} の前に挿入`,
  insertBetween: (e) => `${e.beforeItemText} と ${e.afterItemText} の間に挿入`
};
var Gt = {};
Gt = {
  dragDescriptionKeyboard: "드래그를 시작하려면 Enter를 누르세요.",
  dragDescriptionKeyboardAlt: "드래그를 시작하려면 Alt + Enter를 누르십시오.",
  dragDescriptionLongPress: "드래그를 시작하려면 길게 누르십시오.",
  dragDescriptionTouch: "드래그를 시작하려면 더블 탭하세요.",
  dragDescriptionVirtual: "드래그를 시작하려면 클릭하세요.",
  dragItem: (e) => `${e.itemText} 드래그`,
  dragSelectedItems: (e, t) => `${t.plural(e.count, {
    one: () => `${t.number(e.count)}개 선택 항목`,
    other: () => `${t.number(e.count)}개 선택 항목`
  })} 드래그`,
  dragSelectedKeyboard: (e, t) => `${t.plural(e.count, {
    one: () => `${t.number(e.count)}개 선택 항목`,
    other: () => `${t.number(e.count)}개 선택 항목`
  })}을 드래그하려면 Enter를 누르십시오.`,
  dragSelectedKeyboardAlt: (e, t) => `${t.plural(e.count, {
    one: () => `${t.number(e.count)}개 선택 항목`,
    other: () => `${t.number(e.count)}개 선택 항목`
  })}을 드래그하려면 Alt + Enter를 누르십시오.`,
  dragSelectedLongPress: (e, t) => `${t.plural(e.count, {
    one: () => `${t.number(e.count)}개 선택 항목`,
    other: () => `${t.number(e.count)}개 선택 항목`
  })}을 드래그하려면 길게 누르십시오.`,
  dragStartedKeyboard: "드래그가 시작되었습니다. Tab을 눌러 드롭 대상으로 이동한 다음 Enter를 눌러 드롭하거나 Esc를 눌러 취소하세요.",
  dragStartedTouch: "드래그가 시작되었습니다. 드롭 대상으로 이동한 다음 더블 탭하여 드롭하세요.",
  dragStartedVirtual: "드래그가 시작되었습니다. 드롭 대상으로 이동한 다음 클릭하거나 Enter를 눌러 드롭하세요.",
  dropCanceled: "드롭이 취소되었습니다.",
  dropComplete: "드롭이 완료되었습니다.",
  dropDescriptionKeyboard: "드롭하려면 Enter를 누르세요. 드래그를 취소하려면 Esc를 누르세요.",
  dropDescriptionTouch: "더블 탭하여 드롭하세요.",
  dropDescriptionVirtual: "드롭하려면 클릭하세요.",
  dropIndicator: "드롭 표시기",
  dropOnItem: (e) => `${e.itemText}에 드롭`,
  dropOnRoot: "드롭 대상",
  endDragKeyboard: "드래그 중입니다. 드래그를 취소하려면 Enter를 누르세요.",
  endDragTouch: "드래그 중입니다. 드래그를 취소하려면 더블 탭하세요.",
  endDragVirtual: "드래그 중입니다. 드래그를 취소하려면 클릭하세요.",
  insertAfter: (e) => `${e.itemText} 이후에 삽입`,
  insertBefore: (e) => `${e.itemText} 이전에 삽입`,
  insertBetween: (e) => `${e.beforeItemText} 및 ${e.afterItemText} 사이에 삽입`
};
var Ht = {};
Ht = {
  dragDescriptionKeyboard: "Paspauskite „Enter“, kad pradėtumėte vilkti.",
  dragDescriptionKeyboardAlt: "Paspauskite „Alt + Enter“, kad pradėtumėte vilkti.",
  dragDescriptionLongPress: "Palaikykite nuspaudę, kad pradėtumėte vilkti.",
  dragDescriptionTouch: "Palieskite dukart, kad pradėtumėte vilkti.",
  dragDescriptionVirtual: "Spustelėkite, kad pradėtumėte vilkti.",
  dragItem: (e) => `Vilkti ${e.itemText}`,
  dragSelectedItems: (e, t) => `Vilkti ${t.plural(e.count, {
    one: () => `${t.number(e.count)} pasirinktą elementą`,
    other: () => `${t.number(e.count)} pasirinktus elementus`
  })}`,
  dragSelectedKeyboard: (e, t) => `Paspauskite „Enter“, jei norite nuvilkti ${t.plural(e.count, {
    one: () => `${t.number(e.count)} pasirinktą elementą`,
    other: () => `${t.number(e.count)} pasirinktus elementus`
  })}.`,
  dragSelectedKeyboardAlt: (e, t) => `Paspauskite „Alt + Enter“, kad nuvilktumėte ${t.plural(e.count, {
    one: () => `${t.number(e.count)} pasirinktą elementą`,
    other: () => `${t.number(e.count)} pasirinktus elementus`
  })}.`,
  dragSelectedLongPress: (e, t) => `Nuspaudę palaikykite, kad nuvilktumėte ${t.plural(e.count, {
    one: () => `${t.number(e.count)} pasirinktą elementą`,
    other: () => `${t.number(e.count)} pasirinktus elementus`
  })}.`,
  dragStartedKeyboard: "Pradėta vilkti. Paspauskite „Tab“, kad pereitumėte į tiesioginę paskirties vietą, tada paspauskite „Enter“, kad numestumėte, arba „Escape“, kad atšauktumėte.",
  dragStartedTouch: "Pradėta vilkti. Eikite į tiesioginę paskirties vietą, tada palieskite dukart, kad numestumėte.",
  dragStartedVirtual: "Pradėta vilkti. Eikite į tiesioginę paskirties vietą ir spustelėkite arba paspauskite „Enter“, kad numestumėte.",
  dropCanceled: "Numetimas atšauktas.",
  dropComplete: "Numesta.",
  dropDescriptionKeyboard: "Paspauskite „Enter“, kad numestumėte. Paspauskite „Escape“, kad atšauktumėte vilkimą.",
  dropDescriptionTouch: "Palieskite dukart, kad numestumėte.",
  dropDescriptionVirtual: "Spustelėkite, kad numestumėte.",
  dropIndicator: "numetimo indikatorius",
  dropOnItem: (e) => `Numesti ant ${e.itemText}`,
  dropOnRoot: "Numesti ant",
  endDragKeyboard: "Velkama. Paspauskite „Enter“, kad atšauktumėte vilkimą.",
  endDragTouch: "Velkama. Spustelėkite dukart, kad atšauktumėte vilkimą.",
  endDragVirtual: "Velkama. Spustelėkite, kad atšauktumėte vilkimą.",
  insertAfter: (e) => `Įterpti po ${e.itemText}`,
  insertBefore: (e) => `Įterpti prieš ${e.itemText}`,
  insertBetween: (e) => `Įterpti tarp ${e.beforeItemText} ir ${e.afterItemText}`
};
var Wt = {};
Wt = {
  dragDescriptionKeyboard: "Nospiediet Enter, lai sāktu vilkšanu.",
  dragDescriptionKeyboardAlt: "Nospiediet taustiņu kombināciju Alt+Enter, lai sāktu vilkšanu.",
  dragDescriptionLongPress: "Turiet nospiestu, lai sāktu vilkšanu.",
  dragDescriptionTouch: "Veiciet dubultskārienu, lai sāktu vilkšanu.",
  dragDescriptionVirtual: "Noklikšķiniet, lai sāktu vilkšanu.",
  dragItem: (e) => `Velciet ${e.itemText}`,
  dragSelectedItems: (e, t) => `Velciet ${t.plural(e.count, {
    one: () => `${t.number(e.count)} atlasīto vienumu`,
    other: () => `${t.number(e.count)} atlasītos vienumus`
  })}`,
  dragSelectedKeyboard: (e, t) => `Nospiediet taustiņu Enter, lai vilktu ${t.plural(e.count, {
    one: () => `${t.number(e.count)} atlasīto vienumu`,
    other: () => `${t.number(e.count)} atlasītos vienumus`
  })}.`,
  dragSelectedKeyboardAlt: (e, t) => `Nospiediet taustiņu kombināciju Alt+Enter, lai vilktu ${t.plural(e.count, {
    one: () => `${t.number(e.count)} atlasīto vienumu`,
    other: () => `${t.number(e.count)} atlasītos vienumus`
  })}.`,
  dragSelectedLongPress: (e, t) => `Turiet nospiestu, lai vilktu ${t.plural(e.count, {
    one: () => `${t.number(e.count)} atlasīto vienumu`,
    other: () => `${t.number(e.count)} atlasītos vienumus`
  })}.`,
  dragStartedKeyboard: "Uzsākta vilkšana. Nospiediet taustiņu Tab, lai pārietu uz nomešanas mērķi, pēc tam nospiediet Enter, lai nomestu, vai nospiediet Escape, lai atceltu.",
  dragStartedTouch: "Uzsākta vilkšana. Pārejiet uz nomešanas mērķi, pēc tam veiciet dubultskārienu, lai nomestu.",
  dragStartedVirtual: "Uzsākta vilkšana. Pārejiet uz nomešanas mērķi, pēc tam nospiediet Enter, lai nomestu.",
  dropCanceled: "Nomešana atcelta.",
  dropComplete: "Nomešana pabeigta.",
  dropDescriptionKeyboard: "Nospiediet Enter, lai nomestu. Nospiediet Escape, lai atceltu vilkšanu.",
  dropDescriptionTouch: "Veiciet dubultskārienu, lai nomestu.",
  dropDescriptionVirtual: "Noklikšķiniet, lai nomestu.",
  dropIndicator: "nomešanas indikators",
  dropOnItem: (e) => `Nometiet uz ${e.itemText}`,
  dropOnRoot: "Nometiet uz",
  endDragKeyboard: "Notiek vilkšana. Nospiediet Enter, lai atceltu vilkšanu.",
  endDragTouch: "Notiek vilkšana. Veiciet dubultskārienu, lai atceltu vilkšanu.",
  endDragVirtual: "Notiek vilkšana. Noklikšķiniet, lai atceltu vilkšanu.",
  insertAfter: (e) => `Ievietojiet pēc ${e.itemText}`,
  insertBefore: (e) => `Ievietojiet pirms ${e.itemText}`,
  insertBetween: (e) => `Ievietojiet starp ${e.beforeItemText} un ${e.afterItemText}`
};
var Xt = {};
Xt = {
  dragDescriptionKeyboard: "Trykk på Enter for å begynne å dra.",
  dragDescriptionKeyboardAlt: "Trykk på Alt + Enter for å begynne å dra.",
  dragDescriptionLongPress: "Trykk lenge for å begynne å dra.",
  dragDescriptionTouch: "Dobbelttrykk for å begynne å dra.",
  dragDescriptionVirtual: "Klikk for å begynne å dra.",
  dragItem: (e) => `Dra ${e.itemText}`,
  dragSelectedItems: (e, t) => `Dra ${t.plural(e.count, {
    one: () => `${t.number(e.count)} merket element`,
    other: () => `${t.number(e.count)} merkede elementer`
  })}`,
  dragSelectedKeyboard: (e, t) => `Trykk Enter for å dra ${t.plural(e.count, {
    one: () => `${t.number(e.count)} valgt element`,
    other: () => `${t.number(e.count)} valgte elementer`
  })}.`,
  dragSelectedKeyboardAlt: (e, t) => `Trykk på Alt + Enter for å dra ${t.plural(e.count, {
    one: () => `${t.number(e.count)} valgt element`,
    other: () => `${t.number(e.count)} valgte elementer`
  })}.`,
  dragSelectedLongPress: (e, t) => `Trykk lenge for å dra ${t.plural(e.count, {
    one: () => `${t.number(e.count)} valgt element`,
    other: () => `${t.number(e.count)} valgte elementer`
  })}.`,
  dragStartedKeyboard: "Begynte å dra. Trykk på Tab for å navigere til et mål, og trykk deretter på Enter for å slippe eller på Esc for å avbryte.",
  dragStartedTouch: "Begynte å dra. Naviger til et mål, og dobbelttrykk for å slippe.",
  dragStartedVirtual: "Begynte å dra. Naviger til et mål, og klikk eller trykk på Enter for å slippe.",
  dropCanceled: "Avbrøt slipping.",
  dropComplete: "Slippingen er fullført.",
  dropDescriptionKeyboard: "Trykk på Enter for å slippe. Trykk på Esc hvis du vil avbryte draingen.",
  dropDescriptionTouch: "Dobbelttrykk for å slippe.",
  dropDescriptionVirtual: "Klikk for å slippe.",
  dropIndicator: "slippeindikator",
  dropOnItem: (e) => `Slipp på ${e.itemText}`,
  dropOnRoot: "Slipp på",
  endDragKeyboard: "Drar. Trykk på Enter hvis du vil avbryte.",
  endDragTouch: "Drar. Dobbelttrykk hvis du vil avbryte.",
  endDragVirtual: "Drar. Klikk hvis du vil avbryte.",
  insertAfter: (e) => `Sett inn etter ${e.itemText}`,
  insertBefore: (e) => `Sett inn før ${e.itemText}`,
  insertBetween: (e) => `Sett inn mellom ${e.beforeItemText} og ${e.afterItemText}`
};
var Jt = {};
Jt = {
  dragDescriptionKeyboard: "Druk op Enter om te slepen.",
  dragDescriptionKeyboardAlt: "Druk op Alt + Enter om te slepen.",
  dragDescriptionLongPress: "Houd lang ingedrukt om te slepen.",
  dragDescriptionTouch: "Dubbeltik om te slepen.",
  dragDescriptionVirtual: "Klik om met slepen te starten.",
  dragItem: (e) => `${e.itemText} slepen`,
  dragSelectedItems: (e, t) => `${t.plural(e.count, {
    one: () => `${t.number(e.count)} geselecteerd item`,
    other: () => `${t.number(e.count)} geselecteerde items`
  })} slepen`,
  dragSelectedKeyboard: (e, t) => `Druk op Enter om ${t.plural(e.count, {
    one: () => `${t.number(e.count)} geselecteerd item`,
    other: () => `${t.number(e.count)} geselecteerde items`
  })} te slepen.`,
  dragSelectedKeyboardAlt: (e, t) => `Druk op Alt + Enter om ${t.plural(e.count, {
    one: () => `${t.number(e.count)} geselecteerd item`,
    other: () => `${t.number(e.count)} geselecteerde items`
  })} te slepen.`,
  dragSelectedLongPress: (e, t) => `Houd lang ingedrukt om ${t.plural(e.count, {
    one: () => `${t.number(e.count)} geselecteerd item`,
    other: () => `${t.number(e.count)} geselecteerde items`
  })} te slepen.`,
  dragStartedKeyboard: "Begonnen met slepen. Druk op Tab om naar een locatie te gaan. Druk dan op Enter om neer te zetten, of op Esc om te annuleren.",
  dragStartedTouch: "Begonnen met slepen. Ga naar de gewenste locatie en dubbeltik om neer te zetten.",
  dragStartedVirtual: "Begonnen met slepen. Ga naar de gewenste locatie en klik of druk op Enter om neer te zetten.",
  dropCanceled: "Neerzetten geannuleerd.",
  dropComplete: "Neerzetten voltooid.",
  dropDescriptionKeyboard: "Druk op Enter om neer te zetten. Druk op Esc om het slepen te annuleren.",
  dropDescriptionTouch: "Dubbeltik om neer te zetten.",
  dropDescriptionVirtual: "Klik om neer te zetten.",
  dropIndicator: "aanwijzer voor neerzetten",
  dropOnItem: (e) => `Neerzetten op ${e.itemText}`,
  dropOnRoot: "Neerzetten op",
  endDragKeyboard: "Bezig met slepen. Druk op Enter om te annuleren.",
  endDragTouch: "Bezig met slepen. Dubbeltik om te annuleren.",
  endDragVirtual: "Bezig met slepen. Klik om te annuleren.",
  insertAfter: (e) => `Plaatsen na ${e.itemText}`,
  insertBefore: (e) => `Plaatsen vóór ${e.itemText}`,
  insertBetween: (e) => `Plaatsen tussen ${e.beforeItemText} en ${e.afterItemText}`
};
var qt = {};
qt = {
  dragDescriptionKeyboard: "Naciśnij Enter, aby rozpocząć przeciąganie.",
  dragDescriptionKeyboardAlt: "Naciśnij Alt + Enter, aby rozpocząć przeciąganie.",
  dragDescriptionLongPress: "Naciśnij i przytrzymaj, aby rozpocząć przeciąganie.",
  dragDescriptionTouch: "Dotknij dwukrotnie, aby rozpocząć przeciąganie.",
  dragDescriptionVirtual: "Kliknij, aby rozpocząć przeciąganie.",
  dragItem: (e) => `Przeciągnij ${e.itemText}`,
  dragSelectedItems: (e, t) => `Przeciągnij ${t.plural(e.count, {
    one: () => `${t.number(e.count)} wybrany element`,
    other: () => `${t.number(e.count)} wybranych elementów`
  })}`,
  dragSelectedKeyboard: (e, t) => `Naciśnij Enter, aby przeciągnąć ${t.plural(e.count, {
    one: () => `${t.number(e.count)} wybrany element`,
    other: () => `${t.number(e.count)} wybrane(-ych) elementy(-ów)`
  })}.`,
  dragSelectedKeyboardAlt: (e, t) => `Naciśnij Alt + Enter, aby przeciągnąć ${t.plural(e.count, {
    one: () => `${t.number(e.count)} wybrany element`,
    other: () => `${t.number(e.count)} wybrane(-ych) elementy(-ów)`
  })}.`,
  dragSelectedLongPress: (e, t) => `Naciśnij i przytrzymaj, aby przeciągnąć ${t.plural(e.count, {
    one: () => `${t.number(e.count)} wybrany element`,
    other: () => `${t.number(e.count)} wybrane(-ych) elementy(-ów)`
  })}.`,
  dragStartedKeyboard: "Rozpoczęto przeciąganie. Naciśnij Tab, aby wybrać miejsce docelowe, a następnie naciśnij Enter, aby upuścić, lub Escape, aby anulować.",
  dragStartedTouch: "Rozpoczęto przeciąganie. Wybierz miejsce, w którym chcesz upuścić element, a następnie dotknij dwukrotnie, aby upuścić.F",
  dragStartedVirtual: "Rozpoczęto przeciąganie. Wybierz miejsce, w którym chcesz upuścić element, a następnie kliknij lub naciśnij Enter, aby upuścić.",
  dropCanceled: "Anulowano upuszczenie.",
  dropComplete: "Zakończono upuszczanie.",
  dropDescriptionKeyboard: "Naciśnij Enter, aby upuścić. Naciśnij Escape, aby anulować przeciągnięcie.",
  dropDescriptionTouch: "Dotknij dwukrotnie, aby upuścić.",
  dropDescriptionVirtual: "Kliknij, aby upuścić.",
  dropIndicator: "wskaźnik upuszczenia",
  dropOnItem: (e) => `Upuść na ${e.itemText}`,
  dropOnRoot: "Upuść",
  endDragKeyboard: "Przeciąganie. Naciśnij Enter, aby anulować przeciągnięcie.",
  endDragTouch: "Przeciąganie. Kliknij dwukrotnie, aby anulować przeciągnięcie.",
  endDragVirtual: "Przeciąganie. Kliknij, aby anulować przeciąganie.",
  insertAfter: (e) => `Umieść za ${e.itemText}`,
  insertBefore: (e) => `Umieść przed ${e.itemText}`,
  insertBetween: (e) => `Umieść między ${e.beforeItemText} i ${e.afterItemText}`
};
var _t = {};
_t = {
  dragDescriptionKeyboard: "Pressione Enter para começar a arrastar.",
  dragDescriptionKeyboardAlt: "Pressione Alt + Enter para começar a arrastar.",
  dragDescriptionLongPress: "Pressione e segure para começar a arrastar.",
  dragDescriptionTouch: "Toque duas vezes para começar a arrastar.",
  dragDescriptionVirtual: "Clique para começar a arrastar.",
  dragItem: (e) => `Arrastar ${e.itemText}`,
  dragSelectedItems: (e, t) => `Arrastar ${t.plural(e.count, {
    one: () => `${t.number(e.count)} item selecionado`,
    other: () => `${t.number(e.count)} itens selecionados`
  })}`,
  dragSelectedKeyboard: (e, t) => `Pressione Enter para arrastar ${t.plural(e.count, {
    one: () => `${t.number(e.count)} o item selecionado`,
    other: () => `${t.number(e.count)} os itens selecionados`
  })}.`,
  dragSelectedKeyboardAlt: (e, t) => `Pressione Alt + Enter para arrastar ${t.plural(e.count, {
    one: () => `${t.number(e.count)} o item selecionado`,
    other: () => `${t.number(e.count)} os itens selecionados`
  })}.`,
  dragSelectedLongPress: (e, t) => `Pressione e segure para arrastar ${t.plural(e.count, {
    one: () => `${t.number(e.count)} o item selecionado`,
    other: () => `${t.number(e.count)} os itens selecionados`
  })}.`,
  dragStartedKeyboard: "Comece a arrastar. Pressione Tab para navegar até um alvo e, em seguida, pressione Enter para soltar ou pressione Escape para cancelar.",
  dragStartedTouch: "Comece a arrastar. Navegue até um alvo e toque duas vezes para soltar.",
  dragStartedVirtual: "Comece a arrastar. Navegue até um alvo e clique ou pressione Enter para soltar.",
  dropCanceled: "Liberação cancelada.",
  dropComplete: "Liberação concluída.",
  dropDescriptionKeyboard: "Pressione Enter para soltar. Pressione Escape para cancelar.",
  dropDescriptionTouch: "Toque duas vezes para soltar.",
  dropDescriptionVirtual: "Clique para soltar.",
  dropIndicator: "indicador de liberação",
  dropOnItem: (e) => `Soltar em ${e.itemText}`,
  dropOnRoot: "Soltar",
  endDragKeyboard: "Arrastando. Pressione Enter para cancelar.",
  endDragTouch: "Arrastando. Toque duas vezes para cancelar.",
  endDragVirtual: "Arrastando. Clique para cancelar.",
  insertAfter: (e) => `Inserir após ${e.itemText}`,
  insertBefore: (e) => `Inserir antes de ${e.itemText}`,
  insertBetween: (e) => `Inserir entre ${e.beforeItemText} e ${e.afterItemText}`
};
var er = {};
er = {
  dragDescriptionKeyboard: "Prima Enter para iniciar o arrasto.",
  dragDescriptionKeyboardAlt: "Prima Alt + Enter para iniciar o arrasto.",
  dragDescriptionLongPress: "Prima longamente para começar a arrastar.",
  dragDescriptionTouch: "Faça duplo toque para começar a arrastar.",
  dragDescriptionVirtual: "Clique para iniciar o arrasto.",
  dragItem: (e) => `Arrastar ${e.itemText}`,
  dragSelectedItems: (e, t) => `Arrastar ${t.plural(e.count, {
    one: () => `${t.number(e.count)} item selecionado`,
    other: () => `${t.number(e.count)} itens selecionados`
  })}`,
  dragSelectedKeyboard: (e, t) => `Prima Enter para arrastar ${t.plural(e.count, {
    one: () => `${t.number(e.count)} o item selecionado`,
    other: () => `${t.number(e.count)} os itens selecionados`
  })}.`,
  dragSelectedKeyboardAlt: (e, t) => `Prima Alt + Enter para arrastar ${t.plural(e.count, {
    one: () => `${t.number(e.count)} o item selecionado`,
    other: () => `${t.number(e.count)} os itens selecionados`
  })}.`,
  dragSelectedLongPress: (e, t) => `Prima longamente para arrastar ${t.plural(e.count, {
    one: () => `${t.number(e.count)} o item selecionado`,
    other: () => `${t.number(e.count)} os itens selecionados`
  })}.`,
  dragStartedKeyboard: "Arrasto iniciado. Prima a tecla de tabulação para navegar para um destino para largar, e em seguida prima Enter para largar ou prima Escape para cancelar.",
  dragStartedTouch: "Arrasto iniciado. Navegue para um destino para largar, e em seguida faça duplo toque para largar.",
  dragStartedVirtual: "Arrasto iniciado. Navegue para um destino para largar, e em seguida clique ou prima Enter para largar.",
  dropCanceled: "Largar cancelado.",
  dropComplete: "Largar completo.",
  dropDescriptionKeyboard: "Prima Enter para largar. Prima Escape para cancelar o arrasto.",
  dropDescriptionTouch: "Faça duplo toque para largar.",
  dropDescriptionVirtual: "Clique para largar.",
  dropIndicator: "Indicador de largar",
  dropOnItem: (e) => `Largar em ${e.itemText}`,
  dropOnRoot: "Largar em",
  endDragKeyboard: "A arrastar. Prima Enter para cancelar o arrasto.",
  endDragTouch: "A arrastar. Faça duplo toque para cancelar o arrasto.",
  endDragVirtual: "A arrastar. Clique para cancelar o arrasto.",
  insertAfter: (e) => `Inserir depois de ${e.itemText}`,
  insertBefore: (e) => `Inserir antes de ${e.itemText}`,
  insertBetween: (e) => `Inserir entre ${e.beforeItemText} e ${e.afterItemText}`
};
var tr = {};
tr = {
  dragDescriptionKeyboard: "Apăsați pe Enter pentru a începe glisarea.",
  dragDescriptionKeyboardAlt: "Apăsați pe Alt + Enter pentru a începe glisarea.",
  dragDescriptionLongPress: "Apăsați lung pentru a începe glisarea.",
  dragDescriptionTouch: "Atingeți de două ori pentru a începe să glisați.",
  dragDescriptionVirtual: "Faceți clic pentru a începe glisarea.",
  dragItem: (e) => `Glisați ${e.itemText}`,
  dragSelectedItems: (e, t) => `Glisați ${t.plural(e.count, {
    one: () => `${t.number(e.count)} element selectat`,
    other: () => `${t.number(e.count)} elemente selectate`
  })}`,
  dragSelectedKeyboard: (e, t) => `Apăsați pe Enter pentru a glisa ${t.plural(e.count, {
    one: () => `${t.number(e.count)} element selectat`,
    other: () => `${t.number(e.count)} elemente selectate`
  })}.`,
  dragSelectedKeyboardAlt: (e, t) => `Apăsați pe Alt + Enter pentru a glisa ${t.plural(e.count, {
    one: () => `${t.number(e.count)} element selectat`,
    other: () => `${t.number(e.count)} elemente selectate`
  })}.`,
  dragSelectedLongPress: (e, t) => `Apăsați lung pentru a glisa ${t.plural(e.count, {
    one: () => `${t.number(e.count)} element selectat`,
    other: () => `${t.number(e.count)} elemente selectate`
  })}.`,
  dragStartedKeyboard: "A început glisarea. Apăsați pe Tab pentru a naviga la o țintă de fixare, apoi apăsați pe Enter pentru a fixa sau apăsați pe Escape pentru a anula glisarea.",
  dragStartedTouch: "A început glisarea. Navigați la o țintă de fixare, apoi atingeți de două ori pentru a fixa.",
  dragStartedVirtual: "A început glisarea. Navigați la o țintă de fixare, apoi faceți clic sau apăsați pe Enter pentru a fixa.",
  dropCanceled: "Fixare anulată.",
  dropComplete: "Fixare finalizată.",
  dropDescriptionKeyboard: "Apăsați pe Enter pentru a fixa. Apăsați pe Escape pentru a anula glisarea.",
  dropDescriptionTouch: "Atingeți de două ori pentru a fixa.",
  dropDescriptionVirtual: "Faceți clic pentru a fixa.",
  dropIndicator: "indicator de fixare",
  dropOnItem: (e) => `Fixați pe ${e.itemText}`,
  dropOnRoot: "Fixare pe",
  endDragKeyboard: "Se glisează. Apăsați pe Enter pentru a anula glisarea.",
  endDragTouch: "Se glisează. Atingeți de două ori pentru a anula glisarea.",
  endDragVirtual: "Se glisează. Faceți clic pentru a anula glisarea.",
  insertAfter: (e) => `Inserați după ${e.itemText}`,
  insertBefore: (e) => `Inserați înainte de ${e.itemText}`,
  insertBetween: (e) => `Inserați între ${e.beforeItemText} și ${e.afterItemText}`
};
var rr = {};
rr = {
  dragDescriptionKeyboard: "Нажмите клавишу Enter для начала перетаскивания.",
  dragDescriptionKeyboardAlt: "Нажмите Alt + Enter, чтобы начать перетаскивать.",
  dragDescriptionLongPress: "Нажмите и удерживайте, чтобы начать перетаскивать.",
  dragDescriptionTouch: "Дважды нажмите для начала перетаскивания.",
  dragDescriptionVirtual: "Щелкните для начала перетаскивания.",
  dragItem: (e) => `Перетащить ${e.itemText}`,
  dragSelectedItems: (e, t) => `Перетащить ${t.plural(e.count, {
    one: () => `${t.number(e.count)} выбранный элемент`,
    other: () => `${t.number(e.count)} выбранных элем`
  })}`,
  dragSelectedKeyboard: (e, t) => `Нажмите Enter для перетаскивания ${t.plural(e.count, {
    one: () => `${t.number(e.count)} выбранного элемента`,
    other: () => `${t.number(e.count)} выбранных элементов`
  })}.`,
  dragSelectedKeyboardAlt: (e, t) => `Нажмите Alt + Enter для перетаскивания ${t.plural(e.count, {
    one: () => `${t.number(e.count)} выбранного элемента`,
    other: () => `${t.number(e.count)} выбранных элементов`
  })}.`,
  dragSelectedLongPress: (e, t) => `Нажмите и удерживайте для перетаскивания ${t.plural(e.count, {
    one: () => `${t.number(e.count)} выбранного элемента`,
    other: () => `${t.number(e.count)} выбранных элементов`
  })}.`,
  dragStartedKeyboard: "Начато перетаскивание. Нажмите клавишу Tab для выбора цели, затем нажмите клавишу Enter, чтобы применить перетаскивание, или клавишу Escape для отмены действия.",
  dragStartedTouch: "Начато перетаскивание. Выберите цель, затем дважды нажмите, чтобы применить перетаскивание.",
  dragStartedVirtual: "Начато перетаскивание. Нажмите клавишу Tab для выбора цели, затем нажмите клавишу Enter, чтобы применить перетаскивание.",
  dropCanceled: "Перетаскивание отменено.",
  dropComplete: "Перетаскивание завершено.",
  dropDescriptionKeyboard: "Нажмите клавишу Enter, чтобы применить перетаскивание. Нажмите клавишу Escape для отмены.",
  dropDescriptionTouch: "Дважды нажмите, чтобы применить перетаскивание.",
  dropDescriptionVirtual: "Щелкните, чтобы применить перетаскивание.",
  dropIndicator: "индикатор перетаскивания",
  dropOnItem: (e) => `Перетащить на ${e.itemText}`,
  dropOnRoot: "Перетащить на",
  endDragKeyboard: "Перетаскивание. Нажмите клавишу Enter для отмены.",
  endDragTouch: "Перетаскивание. Дважды нажмите для отмены.",
  endDragVirtual: "Перетаскивание. Щелкните для отмены.",
  insertAfter: (e) => `Вставить после ${e.itemText}`,
  insertBefore: (e) => `Вставить перед ${e.itemText}`,
  insertBetween: (e) => `Вставить между ${e.beforeItemText} и ${e.afterItemText}`
};
var nr = {};
nr = {
  dragDescriptionKeyboard: "Stlačením klávesu Enter začnete presúvanie.",
  dragDescriptionKeyboardAlt: "Stlačením klávesov Alt + Enter začnete presúvanie.",
  dragDescriptionLongPress: "Dlhým stlačením začnete presúvanie.",
  dragDescriptionTouch: "Dvojitým kliknutím začnete presúvanie.",
  dragDescriptionVirtual: "Kliknutím začnete presúvanie.",
  dragItem: (e) => `Presunúť položku ${e.itemText}`,
  dragSelectedItems: (e, t) => `Presunúť ${t.plural(e.count, {
    one: () => `${t.number(e.count)} vybratú položku`,
    other: () => `${t.number(e.count)} vybraté položky`
  })}`,
  dragSelectedKeyboard: (e, t) => `Stlačením klávesu Enter presuniete ${t.plural(e.count, {
    one: () => `${t.number(e.count)} vybratú položku`,
    other: () => `${t.number(e.count)} vybratých položiek`
  })}.`,
  dragSelectedKeyboardAlt: (e, t) => `Stlačením klávesov Alt + Enter presuniete ${t.plural(e.count, {
    one: () => `${t.number(e.count)} vybratú položku`,
    other: () => `${t.number(e.count)} vybratých položiek`
  })}.`,
  dragSelectedLongPress: (e, t) => `Dlhým stlačením presuniete ${t.plural(e.count, {
    one: () => `${t.number(e.count)} vybratú položku`,
    other: () => `${t.number(e.count)} vybratých položiek`
  })}.`,
  dragStartedKeyboard: "Presúvanie sa začalo. Do cieľového umiestnenia prejdete stlačením klávesu Tab. Ak chcete položku umiestniť, stlačte kláves Enter alebo stlačte kláves Esc, ak chcete presúvanie zrušiť.",
  dragStartedTouch: "Presúvanie sa začalo. Prejdite na cieľové umiestnenie a dvojitým kliknutím umiestnite položku.",
  dragStartedVirtual: "Presúvanie sa začalo. Prejdite na cieľové umiestnenie a kliknutím alebo stlačením klávesu Enter umiestnite položku.",
  dropCanceled: "Umiestnenie zrušené.",
  dropComplete: "Umiestnenie dokončené.",
  dropDescriptionKeyboard: "Stlačením klávesu Enter umiestnite položku. Stlačením klávesu Esc zrušíte presúvanie.",
  dropDescriptionTouch: "Dvojitým kliknutím umiestnite položku.",
  dropDescriptionVirtual: "Kliknutím umiestnite položku.",
  dropIndicator: "indikátor umiestnenia",
  dropOnItem: (e) => `Umiestniť na položku ${e.itemText}`,
  dropOnRoot: "Umiestniť na",
  endDragKeyboard: "Prebieha presúvanie. Ak ho chcete zrušiť, stlačte kláves Enter.",
  endDragTouch: "Prebieha presúvanie. Dvojitým kliknutím ho môžete zrušiť.",
  endDragVirtual: "Prebieha presúvanie.",
  insertAfter: (e) => `Vložiť za položku ${e.itemText}`,
  insertBefore: (e) => `Vložiť pred položku ${e.itemText}`,
  insertBetween: (e) => `Vložiť medzi položky ${e.beforeItemText} a ${e.afterItemText}`
};
var or = {};
or = {
  dragDescriptionKeyboard: "Pritisnite tipko Enter za začetek vlečenja.",
  dragDescriptionKeyboardAlt: "Pritisnite tipki Alt + Enter za začetek vlečenja.",
  dragDescriptionLongPress: "Pritisnite in zadržite za začetek vlečenja.",
  dragDescriptionTouch: "Dvotapnite za začetek vlečenja.",
  dragDescriptionVirtual: "Kliknite za začetek vlečenja.",
  dragItem: (e) => `Povleci ${e.itemText}`,
  dragSelectedItems: (e, t) => `Povlecite ${t.plural(e.count, {
    one: () => `${t.number(e.count)} izbran element`,
    other: () => `izbrane elemente (${t.number(e.count)})`
  })}`,
  dragSelectedKeyboard: (e, t) => `Pritisnite tipko Enter, da povlečete ${t.plural(e.count, {
    one: () => `${t.number(e.count)} izbrani element`,
    other: () => `${t.number(e.count)} izbranih elementov`
  })}.`,
  dragSelectedKeyboardAlt: (e, t) => `Pritisnite tipki Alt + Enter, da povlečete ${t.plural(e.count, {
    one: () => `${t.number(e.count)} izbrani element`,
    other: () => `${t.number(e.count)} izbranih elementov`
  })}.`,
  dragSelectedLongPress: (e, t) => `Pritisnite in zadržite, da povlečete ${t.plural(e.count, {
    one: () => `${t.number(e.count)} izbrani element`,
    other: () => `${t.number(e.count)} izbranih elementov`
  })}.`,
  dragStartedKeyboard: "Vlečenje se je začelo. Pritisnite tipko Tab za pomik na mesto, kamor želite spustiti elemente, in pritisnite tipko Enter, da jih spustite, ali tipko Escape, da prekličete postopek.",
  dragStartedTouch: "Vlečenje se je začelo. Pomaknite se na mesto, kamor želite spustiti elemente, in dvotapnite, da jih spustite.",
  dragStartedVirtual: "Vlečenje se je začelo. Pomaknite se na mesto, kamor želite spustiti elemente, in kliknite ali pritisnite tipko Enter, da jih spustite.",
  dropCanceled: "Spust je preklican.",
  dropComplete: "Spust je končan.",
  dropDescriptionKeyboard: "Pritisnite tipko Enter, da spustite. Pritisnite tipko Escape, da prekličete vlečenje.",
  dropDescriptionTouch: "Dvotapnite, da spustite.",
  dropDescriptionVirtual: "Kliknite, da spustite.",
  dropIndicator: "indikator spusta",
  dropOnItem: (e) => `Spusti na mesto ${e.itemText}`,
  dropOnRoot: "Spusti na mesto",
  endDragKeyboard: "Vlečenje. Pritisnite tipko Enter za preklic vlečenja.",
  endDragTouch: "Vlečenje. Dvotapnite za preklic vlečenja.",
  endDragVirtual: "Vlečenje. Kliknite, da prekličete vlečenje.",
  insertAfter: (e) => `Vstavi za ${e.itemText}`,
  insertBefore: (e) => `Vstavi pred ${e.itemText}`,
  insertBetween: (e) => `Vstavi med ${e.beforeItemText} in ${e.afterItemText}`
};
var ar = {};
ar = {
  dragItem: (e) => `Prevucite ${e.itemText}`,
  dragSelectedItems: (e, t) => `Prevucite ${t.plural(e.count, {
    one: () => `${t.number(e.count)} izabranu stavku`,
    other: () => `${t.number(e.count)} izabrane stavke`
  })}`,
  dragDescriptionKeyboard: "Pritisnite Enter da biste započeli prevlačenje..",
  dragDescriptionKeyboardAlt: "Pritisnite Alt + Enter da biste započeli prevlačenje.",
  dragDescriptionLongPress: "Pritisnite dugo da biste započeli prevlačenje.",
  dragDescriptionTouch: "Dvaput dodirnite za otpuštanje.",
  dragDescriptionVirtual: "Kliknite da biste započeli prevlačenje.",
  dragStartedKeyboard: "Prevlačenje je započeto. Pritisnite Tab da biste otišli do cilja za otpuštanje, zatim pritisnite Enter za ispuštanje ili pritisnite Escape za otkazivanje.",
  dragStartedTouch: "Prevlačenje je započeto. Idite do cilja za otpuštanje, a zatim dvaput dodirnite za otpuštanje.",
  dragStartedVirtual: "Prevlačenje je započeto. Idite do cilja za otpuštanje, a zatim kliknite ili pritinite Enter za otpuštanje.",
  endDragKeyboard: "Prevlačenje u toku. Pritisnite Enter da biste otkazali prevlačenje.",
  endDragTouch: "Prevlačenje u toku. Dvaput dodirnite da biste otkazali prevlačenje.",
  endDragVirtual: "Prevlačenje u toku. Kliknite da biste otkazali prevlačenje.",
  dragSelectedKeyboard: (e, t) => `Pritisnite Enter da biste prevukli ${t.plural(e.count, {
    one: () => `${t.number(e.count)} izabranu stavku`,
    other: () => `${t.number(e.count)} izabranih stavki`
  })}.`,
  dragSelectedKeyboardAlt: (e, t) => `Pritisnite Alt + Enter da biste prevukli ${t.plural(e.count, {
    one: () => `${t.number(e.count)} izabranu stavku`,
    other: () => `${t.number(e.count)} izabranih stavki`
  })}.`,
  dragSelectedLongPress: (e, t) => `Pritisnite dugo da biste prevukli ${t.plural(e.count, {
    one: () => `${t.number(e.count)} izabranu stavku`,
    other: () => `${t.number(e.count)} izabranih stavki`
  })}.`,
  dropDescriptionKeyboard: "Pritisnite Enter da biste otpustili. Pritisnite Escape da biste otkazali prevlačenje.",
  dropDescriptionTouch: "Dvaput dodirnite za otpuštanje.",
  dropDescriptionVirtual: "Kliknite za otpuštanje.",
  dropCanceled: "Otpuštanje je otkazano.",
  dropComplete: "Prevlačenje je završeno.",
  dropIndicator: "Indikator otpuštanja",
  dropOnRoot: "Otpusti na",
  dropOnItem: (e) => `Otpusti na ${e.itemText}`,
  insertBefore: (e) => `Umetnite ispred ${e.itemText}`,
  insertBetween: (e) => `Umetnite između ${e.beforeItemText} i ${e.afterItemText}`,
  insertAfter: (e) => `Umetnite posle ${e.itemText}`
};
var ir = {};
ir = {
  dragDescriptionKeyboard: "Tryck på enter för att börja dra.",
  dragDescriptionKeyboardAlt: "Tryck på Alt + Retur för att börja dra.",
  dragDescriptionLongPress: "Tryck länge för att börja dra.",
  dragDescriptionTouch: "Dubbeltryck för att börja dra.",
  dragDescriptionVirtual: "Klicka för att börja dra.",
  dragItem: (e) => `Dra ${e.itemText}`,
  dragSelectedItems: (e, t) => `Dra ${t.plural(e.count, {
    one: () => `${t.number(e.count)} valt objekt`,
    other: () => `${t.number(e.count)} valda objekt`
  })}`,
  dragSelectedKeyboard: (e, t) => `Tryck på Retur för att dra ${t.plural(e.count, {
    one: () => `${t.number(e.count)} markerat objekt`,
    other: () => `${t.number(e.count)} markerade objekt`
  })}.`,
  dragSelectedKeyboardAlt: (e, t) => `Tryck på Alt + Retur för att dra ${t.plural(e.count, {
    one: () => `${t.number(e.count)} markerat objekt`,
    other: () => `${t.number(e.count)} markerade objekt`
  })}.`,
  dragSelectedLongPress: (e, t) => `Tryck länge för att dra ${t.plural(e.count, {
    one: () => `${t.number(e.count)} markerat objekt`,
    other: () => `${t.number(e.count)} markerade objekt`
  })}.`,
  dragStartedKeyboard: "Börja dra. Tryck på tabb för att navigera till målet, tryck på enter för att släppa eller på escape för att avbryta.",
  dragStartedTouch: "Börja dra. Navigera till ett mål och dubbeltryck för att släppa.",
  dragStartedVirtual: "Börja dra. Navigera till ett mål och klicka eller tryck på enter för att släppa.",
  dropCanceled: "Släppåtgärd avbröts.",
  dropComplete: "Släppåtgärd klar.",
  dropDescriptionKeyboard: "Tryck på enter för att släppa. Tryck på escape för att avbryta dragåtgärd.",
  dropDescriptionTouch: "Dubbeltryck för att släppa.",
  dropDescriptionVirtual: "Klicka för att släppa.",
  dropIndicator: "släppindikator",
  dropOnItem: (e) => `Släpp på ${e.itemText}`,
  dropOnRoot: "Släpp på",
  endDragKeyboard: "Drar. Tryck på enter för att avbryta dragåtgärd.",
  endDragTouch: "Drar. Dubbeltryck för att avbryta dragåtgärd.",
  endDragVirtual: "Drar. Klicka för att avbryta dragåtgärd.",
  insertAfter: (e) => `Infoga efter ${e.itemText}`,
  insertBefore: (e) => `Infoga före ${e.itemText}`,
  insertBetween: (e) => `Infoga mellan ${e.beforeItemText} och ${e.afterItemText}`
};
var lr = {};
lr = {
  dragDescriptionKeyboard: "Sürüklemeyi başlatmak için Enter'a basın.",
  dragDescriptionKeyboardAlt: "Sürüklemeyi başlatmak için Alt + Enter'a basın.",
  dragDescriptionLongPress: "Sürüklemeye başlamak için uzun basın.",
  dragDescriptionTouch: "Sürüklemeyi başlatmak için çift tıklayın.",
  dragDescriptionVirtual: "Sürüklemeyi başlatmak için tıklayın.",
  dragItem: (e) => `${e.itemText}’i sürükle`,
  dragSelectedItems: (e, t) => `Sürükle ${t.plural(e.count, {
    one: () => `${t.number(e.count)} seçili öge`,
    other: () => `${t.number(e.count)} seçili öge`
  })}`,
  dragSelectedKeyboard: (e, t) => `${t.plural(e.count, {
    one: () => `${t.number(e.count)} seçilmiş öğe`,
    other: () => `${t.number(e.count)} seçilmiş öğe`
  })} öğesini sürüklemek için Enter'a basın.`,
  dragSelectedKeyboardAlt: (e, t) => `${t.plural(e.count, {
    one: () => `${t.number(e.count)} seçilmiş öğe`,
    other: () => `${t.number(e.count)} seçilmiş öğe`
  })} öğesini sürüklemek için Alt + Enter tuşuna basın.`,
  dragSelectedLongPress: (e, t) => `${t.plural(e.count, {
    one: () => `${t.number(e.count)} seçilmiş öğe`,
    other: () => `${t.number(e.count)} seçilmiş öğe`
  })} öğesini sürüklemek için uzun basın.`,
  dragStartedKeyboard: "Sürükleme başlatıldı. Bir bırakma hedefine gitmek için Tab’a basın, ardından bırakmak için Enter’a basın veya iptal etmek için Escape’e basın.",
  dragStartedTouch: "Sürükleme başlatıldı. Bir bırakma hedefine gidin, ardından bırakmak için çift tıklayın.",
  dragStartedVirtual: "Sürükleme başlatıldı. Bir bırakma hedefine gidin, ardından bırakmak için Enter’a tıklayın veya basın.",
  dropCanceled: "Bırakma iptal edildi.",
  dropComplete: "Bırakma tamamlandı.",
  dropDescriptionKeyboard: "Bırakmak için Enter'a basın. Sürüklemeyi iptal etmek için Escape'e basın.",
  dropDescriptionTouch: "Bırakmak için çift tıklayın.",
  dropDescriptionVirtual: "Bırakmak için tıklayın.",
  dropIndicator: "bırakma göstergesi",
  dropOnItem: (e) => `${e.itemText} üzerine bırak`,
  dropOnRoot: "Bırakın",
  endDragKeyboard: "Sürükleme. Sürüklemeyi iptal etmek için Enter'a basın.",
  endDragTouch: "Sürükleme. Sürüklemeyi iptal etmek için çift tıklayın.",
  endDragVirtual: "Sürükleme. Sürüklemeyi iptal etmek için tıklayın.",
  insertAfter: (e) => `${e.itemText}’den sonra gir`,
  insertBefore: (e) => `${e.itemText}’den önce gir`,
  insertBetween: (e) => `${e.beforeItemText} ve ${e.afterItemText} arasına gir`
};
var ur = {};
ur = {
  dragDescriptionKeyboard: "Натисніть Enter, щоб почати перетягування.",
  dragDescriptionKeyboardAlt: "Натисніть Alt + Enter, щоб почати перетягування.",
  dragDescriptionLongPress: "Натисніть і утримуйте, щоб почати перетягування.",
  dragDescriptionTouch: "Натисніть двічі, щоб почати перетягування.",
  dragDescriptionVirtual: "Натисніть, щоб почати перетягування.",
  dragItem: (e) => `Перетягнути ${e.itemText}`,
  dragSelectedItems: (e, t) => `Перетягніть ${t.plural(e.count, {
    one: () => `${t.number(e.count)} вибраний елемент`,
    other: () => `${t.number(e.count)} вибраних елем`
  })}`,
  dragSelectedKeyboard: (e, t) => `Натисніть Enter, щоб перетягнути ${t.plural(e.count, {
    one: () => `${t.number(e.count)} вибраний елемент`,
    other: () => `${t.number(e.count)} вибраних елементи(-ів)`
  })}.`,
  dragSelectedKeyboardAlt: (e, t) => `Натисніть Alt + Enter, щоб перетягнути ${t.plural(e.count, {
    one: () => `${t.number(e.count)} вибраний елемент`,
    other: () => `${t.number(e.count)} вибраних елементи(-ів)`
  })}.`,
  dragSelectedLongPress: (e, t) => `Утримуйте, щоб перетягнути ${t.plural(e.count, {
    one: () => `${t.number(e.count)} вибраний елемент`,
    other: () => `${t.number(e.count)} вибраних елементи(-ів)`
  })}.`,
  dragStartedKeyboard: "Перетягування почалося. Натисніть Tab, щоб перейти до цілі перетягування, потім натисніть Enter, щоб перетягнути, або Escape, щоб скасувати.",
  dragStartedTouch: "Перетягування почалося. Перейдіть до цілі перетягування, потім натисніть двічі, щоб перетягнути.",
  dragStartedVirtual: "Перетягування почалося. Перейдіть до цілі перетягування, потім натисніть Enter, щоб перетягнути.",
  dropCanceled: "Перетягування скасовано.",
  dropComplete: "Перетягування завершено.",
  dropDescriptionKeyboard: "Натисніть Enter, щоб перетягнути. Натисніть Escape, щоб скасувати перетягування.",
  dropDescriptionTouch: "Натисніть двічі, щоб перетягнути.",
  dropDescriptionVirtual: "Натисніть, щоб перетягнути.",
  dropIndicator: "індикатор перетягування",
  dropOnItem: (e) => `Перетягнути на ${e.itemText}`,
  dropOnRoot: "Перетягнути на",
  endDragKeyboard: "Триває перетягування. Натисніть Enter, щоб скасувати перетягування.",
  endDragTouch: "Триває перетягування. Натисніть двічі, щоб скасувати перетягування.",
  endDragVirtual: "Триває перетягування. Натисніть, щоб скасувати перетягування.",
  insertAfter: (e) => `Вставити після ${e.itemText}`,
  insertBefore: (e) => `Вставити перед ${e.itemText}`,
  insertBetween: (e) => `Вставити між ${e.beforeItemText} і ${e.afterItemText}`
};
var dr = {};
dr = {
  dragDescriptionKeyboard: "按 Enter 开始拖动。",
  dragDescriptionKeyboardAlt: "按 Alt + Enter 开始拖动。",
  dragDescriptionLongPress: "长按以开始拖动。",
  dragDescriptionTouch: "双击开始拖动。",
  dragDescriptionVirtual: "单击开始拖动。",
  dragItem: (e) => `拖动 ${e.itemText}`,
  dragSelectedItems: (e, t) => `拖动 ${t.plural(e.count, {
    one: () => `${t.number(e.count)} 选中项目`,
    other: () => `${t.number(e.count)} 选中项目`
  })}`,
  dragSelectedKeyboard: (e, t) => `按 Enter 以拖动 ${t.plural(e.count, {
    one: () => `${t.number(e.count)} 个选定项`,
    other: () => `${t.number(e.count)} 个选定项`
  })}。`,
  dragSelectedKeyboardAlt: (e, t) => `按 Alt + Enter 以拖动 ${t.plural(e.count, {
    one: () => `${t.number(e.count)} 个选定项`,
    other: () => `${t.number(e.count)} 个选定项`
  })}。`,
  dragSelectedLongPress: (e, t) => `长按以拖动 ${t.plural(e.count, {
    one: () => `${t.number(e.count)} 个选定项`,
    other: () => `${t.number(e.count)} 个选定项`
  })}。`,
  dragStartedKeyboard: "已开始拖动。按 Tab 导航到放置目标，然后按 Enter 放置或按 Escape 取消。",
  dragStartedTouch: "已开始拖动。导航到放置目标，然后双击放置。",
  dragStartedVirtual: "已开始拖动。导航到放置目标，然后单击或按 Enter 放置。",
  dropCanceled: "放置已取消。",
  dropComplete: "放置已完成。",
  dropDescriptionKeyboard: "按 Enter 放置。按 Escape 取消拖动。",
  dropDescriptionTouch: "双击放置。",
  dropDescriptionVirtual: "单击放置。",
  dropIndicator: "放置标记",
  dropOnItem: (e) => `放置于 ${e.itemText}`,
  dropOnRoot: "放置于",
  endDragKeyboard: "正在拖动。按 Enter 取消拖动。",
  endDragTouch: "正在拖动。双击取消拖动。",
  endDragVirtual: "正在拖动。单击取消拖动。",
  insertAfter: (e) => `插入到 ${e.itemText} 之后`,
  insertBefore: (e) => `插入到 ${e.itemText} 之前`,
  insertBetween: (e) => `插入到 ${e.beforeItemText} 和 ${e.afterItemText} 之间`
};
var sr = {};
sr = {
  dragDescriptionKeyboard: "按 Enter 鍵以開始拖曳。",
  dragDescriptionKeyboardAlt: "按 Alt+Enter 鍵以開始拖曳。",
  dragDescriptionLongPress: "長按以開始拖曳。",
  dragDescriptionTouch: "輕點兩下以開始拖曳。",
  dragDescriptionVirtual: "按一下滑鼠以開始拖曳。",
  dragItem: (e) => `拖曳「${e.itemText}」`,
  dragSelectedItems: (e, t) => `拖曳 ${t.plural(e.count, {
    one: () => `${t.number(e.count)} 個選定項目`,
    other: () => `${t.number(e.count)} 個選定項目`
  })}`,
  dragSelectedKeyboard: (e, t) => `按 Enter 鍵以拖曳 ${t.plural(e.count, {
    one: () => `${t.number(e.count)} 個選定項目`,
    other: () => `${t.number(e.count)} 個選定項目`
  })}。`,
  dragSelectedKeyboardAlt: (e, t) => `按 Alt+Enter 鍵以拖曳 ${t.plural(e.count, {
    one: () => `${t.number(e.count)} 個選定項目`,
    other: () => `${t.number(e.count)} 個選定項目`
  })}。`,
  dragSelectedLongPress: (e, t) => `長按以拖曳 ${t.plural(e.count, {
    one: () => `${t.number(e.count)} 個選定項目`,
    other: () => `${t.number(e.count)} 個選定項目`
  })}。`,
  dragStartedKeyboard: "已開始拖曳。按 Tab 鍵以瀏覽至放置目標，然後按 Enter 鍵以放置，或按 Escape 鍵以取消。",
  dragStartedTouch: "已開始拖曳。瀏覽至放置目標，然後輕點兩下以放置。",
  dragStartedVirtual: "已開始拖曳。瀏覽至放置目標，然後按一下滑鼠或按 Enter 鍵以放置。",
  dropCanceled: "放置已取消。",
  dropComplete: "放置已完成。",
  dropDescriptionKeyboard: "按 Enter 鍵以放置。按 Escape 鍵以取消拖曳。",
  dropDescriptionTouch: "輕點兩下以放置。",
  dropDescriptionVirtual: "按一下滑鼠以放置。",
  dropIndicator: "放置指示器",
  dropOnItem: (e) => `放置在「${e.itemText}」上`,
  dropOnRoot: "放置在",
  endDragKeyboard: "拖曳中。按 Enter 鍵以取消拖曳。",
  endDragTouch: "拖曳中。輕點兩下以取消拖曳。",
  endDragVirtual: "拖曳中。按一下滑鼠以取消拖曳。",
  insertAfter: (e) => `插入至「${e.itemText}」之後`,
  insertBefore: (e) => `插入至「${e.itemText}」之前`,
  insertBetween: (e) => `插入至「${e.beforeItemText}」和「${e.afterItemText}」之間`
};
We = {
  "ar-AE": zt,
  "bg-BG": St,
  "cs-CZ": wt,
  "da-DK": Lt,
  "de-DE": Ct,
  "el-GR": Ot,
  "en-US": Pt,
  "es-ES": Kt,
  "et-EE": Vt,
  "fi-FI": Qt,
  "fr-FR": Ut,
  "he-IL": Bt,
  "hr-HR": Yt,
  "hu-HU": Ft,
  "it-IT": Zt,
  "ja-JP": Rt,
  "ko-KR": Gt,
  "lt-LT": Ht,
  "lv-LV": Wt,
  "nb-NO": Xt,
  "nl-NL": Jt,
  "pl-PL": qt,
  "pt-BR": _t,
  "pt-PT": er,
  "ro-RO": tr,
  "ru-RU": rr,
  "sk-SK": nr,
  "sl-SI": or,
  "sr-SP": ar,
  "sv-SE": ir,
  "tr-TR": lr,
  "uk-UA": ur,
  "zh-CN": dr,
  "zh-TW": sr
};
const st = {
  keyboard: {
    start: "dragDescriptionKeyboard",
    end: "endDragKeyboard"
  },
  touch: {
    start: "dragDescriptionTouch",
    end: "endDragTouch"
  },
  virtual: {
    start: "dragDescriptionVirtual",
    end: "endDragVirtual"
  }
};
function cr(e) {
  let { hasDragButton: t } = e, r = Mt(/* @__PURE__ */ vt(We)), n = C({
    options: e,
    x: 0,
    y: 0
  }).current;
  n.options = e;
  let o = C(!1), [i, a] = K(!1), u = (p) => {
    o.current = p, a(p);
  }, { addGlobalListener: d, removeAllGlobalListeners: l } = Cr(), s = C(null), g = (p) => {
    var m;
    if (p.defaultPrevented)
      return;
    if (p.stopPropagation(), s.current === "virtual") {
      p.preventDefault(), v(p.target), s.current = null;
      return;
    }
    typeof e.onDragStart == "function" && e.onDragStart({
      type: "dragstart",
      x: p.clientX,
      y: p.clientY
    });
    let $ = e.getItems();
    an(p.dataTransfer, $);
    let x = T.all;
    if (typeof e.getAllowedDropOperations == "function") {
      let j = e.getAllowedDropOperations();
      x = T.none;
      for (let z of j)
        x |= T[z] || T.none;
    }
    Ae(x), p.dataTransfer.effectAllowed = $t[x] || "none", typeof ((m = e.preview) === null || m === void 0 ? void 0 : m.current) == "function" && e.preview.current($, (j) => {
      let z = j.getBoundingClientRect(), G = p.currentTarget.getBoundingClientRect(), B = p.clientX - G.x, h = p.clientY - G.y;
      (B > z.width || h > z.height) && (B = z.width / 2, h = z.height / 2);
      let ie = 2 * Math.round(z.height / 2);
      j.style.height = `${ie}px`, p.dataTransfer.setDragImage(j, B, h);
    }), d(window, "drop", (j) => {
      j.preventDefault(), j.stopPropagation(), console.warn("Drags initiated from the React Aria useDrag hook may only be dropped on a target created with useDrop. This ensures that a keyboard and screen reader accessible alternative is available.");
    }, {
      once: !0
    }), n.x = p.clientX, n.y = p.clientY, requestAnimationFrame(() => {
      u(!0);
    });
  }, D = (p) => {
    p.stopPropagation(), !(p.clientX === n.x && p.clientY === n.y) && (typeof e.onDragMove == "function" && e.onDragMove({
      type: "dragmove",
      x: p.clientX,
      y: p.clientY
    }), n.x = p.clientX, n.y = p.clientY);
  }, M = (p) => {
    if (p.stopPropagation(), typeof e.onDragEnd == "function") {
      let m = {
        type: "dragend",
        x: p.clientX,
        y: p.clientY,
        dropOperation: ae[p.dataTransfer.dropEffect]
      };
      De && (m.dropOperation = ae[De]), e.onDragEnd(m);
    }
    u(!1), l(), Ae(T.none), he(void 0);
  };
  ve(() => () => {
    if (o.current) {
      if (typeof n.options.onDragEnd == "function") {
        let p = {
          type: "dragend",
          x: 0,
          y: 0,
          dropOperation: ae[De || "none"]
        };
        n.options.onDragEnd(p);
      }
      u(!1), Ae(T.none), he(void 0);
    }
  }, [
    n
  ]);
  let I = (p) => {
    p.pointerType !== "keyboard" && p.pointerType !== "virtual" || v(p.target);
  }, v = (p) => {
    if (typeof n.options.onDragStart == "function") {
      let m = p.getBoundingClientRect();
      n.options.onDragStart({
        type: "dragstart",
        x: m.x + m.width / 2,
        y: m.y + m.height / 2
      });
    }
    gn({
      element: p,
      items: n.options.getItems(),
      allowedDropOperations: typeof n.options.getAllowedDropOperations == "function" ? n.options.getAllowedDropOperations() : [
        "move",
        "copy",
        "link"
      ],
      onDragEnd(m) {
        u(!1), typeof n.options.onDragEnd == "function" && n.options.onDragEnd(m);
      }
    }, r), u(!0);
  }, E = Et(), N = i ? st[E].end : st[E].start, c = ft(r.format(N)), f;
  return t || (f = {
    ...c,
    onPointerDown(p) {
      if (s.current = Tt(p.nativeEvent) ? "virtual" : p.pointerType, p.width < 1 && p.height < 1)
        s.current = "virtual";
      else {
        let m = p.currentTarget.getBoundingClientRect(), $ = p.clientX - m.x, x = p.clientY - m.y, j = m.width / 2, z = m.height / 2;
        Math.abs($ - j) <= 0.5 && Math.abs(x - z) <= 0.5 ? s.current = "virtual" : s.current = p.pointerType;
      }
    },
    onKeyDownCapture(p) {
      p.target === p.currentTarget && p.key === "Enter" && (p.preventDefault(), p.stopPropagation());
    },
    onKeyUpCapture(p) {
      p.target === p.currentTarget && p.key === "Enter" && (p.preventDefault(), p.stopPropagation(), v(p.target));
    },
    onClick(p) {
      (Re(p.nativeEvent) || s.current === "virtual") && (p.preventDefault(), p.stopPropagation(), v(p.target));
    }
  }), {
    dragProps: {
      ...f,
      draggable: "true",
      onDragStart: g,
      onDrag: D,
      onDragEnd: M
    },
    dragButtonProps: {
      ...c,
      onPress: I
    },
    isDragging: i
  };
}
const hn = {
  keyboard: "dropDescriptionKeyboard",
  touch: "dropDescriptionTouch",
  virtual: "dropDescriptionVirtual"
};
function Mn() {
  let e = Mt(/* @__PURE__ */ vt(We)), t = Et(), r = mn();
  return {
    dropProps: {
      ...ft(r ? e.format(hn[t]) : ""),
      // Mobile Safari does not properly bubble click events on elements except links or inputs
      // unless there is an onclick handler bound directly to the element itself. By adding this
      // handler, React will take care of adding that for us, and we are able to handle document
      // level click events in the DragManager.
      // See https://www.quirksmode.org/blog/archives/2010/09/click_event_del.html
      onClick: () => {
      }
    }
  };
}
const kn = 800;
function pr(e) {
  let { hasDropButton: t } = e, [r, n] = K(!1), o = C({
    x: 0,
    y: 0,
    dragOverElements: /* @__PURE__ */ new Set(),
    dropEffect: "none",
    allowedOperations: T.all,
    dropActivateTimer: null
  }).current, i = (c) => {
    if (n(!0), typeof e.onDropEnter == "function") {
      let f = c.currentTarget.getBoundingClientRect();
      e.onDropEnter({
        type: "dropenter",
        x: c.clientX - f.x,
        y: c.clientY - f.y
      });
    }
  }, a = (c) => {
    if (n(!1), typeof e.onDropExit == "function") {
      let f = c.currentTarget.getBoundingClientRect();
      e.onDropExit({
        type: "dropexit",
        x: c.clientX - f.x,
        y: c.clientY - f.y
      });
    }
  }, u = (c) => {
    c.preventDefault(), c.stopPropagation();
    let f = ct(c);
    if (c.clientX === o.x && c.clientY === o.y && f === o.allowedOperations) {
      c.dataTransfer.dropEffect = o.dropEffect;
      return;
    }
    o.x = c.clientX, o.y = c.clientY;
    let p = o.dropEffect;
    if (f !== o.allowedOperations) {
      let m = ze(f), $ = m[0];
      if (typeof e.getDropOperation == "function") {
        let x = new ce(c.dataTransfer);
        $ = pe(f, e.getDropOperation(x, m));
      }
      o.dropEffect = Ne[$] || "none";
    }
    if (typeof e.getDropOperationForPoint == "function") {
      let m = new ce(c.dataTransfer), $ = c.currentTarget.getBoundingClientRect(), x = pe(f, e.getDropOperationForPoint(m, ze(f), o.x - $.x, o.y - $.y));
      o.dropEffect = Ne[x] || "none";
    }
    if (o.allowedOperations = f, c.dataTransfer.dropEffect = o.dropEffect, o.dropEffect === "none" && p !== "none" ? a(c) : o.dropEffect !== "none" && p === "none" && i(c), typeof e.onDropMove == "function" && o.dropEffect !== "none") {
      let m = c.currentTarget.getBoundingClientRect();
      e.onDropMove({
        type: "dropmove",
        x: o.x - m.x,
        y: o.y - m.y
      });
    }
    if (clearTimeout(o.dropActivateTimer), typeof e.onDropActivate == "function" && o.dropEffect !== "none") {
      let m = c.currentTarget.getBoundingClientRect();
      o.dropActivateTimer = setTimeout(() => {
        e.onDropActivate({
          type: "dropactivate",
          x: o.x - m.x,
          y: o.y - m.y
        });
      }, kn);
    }
  }, d = (c) => {
    if (c.preventDefault(), c.stopPropagation(), o.dragOverElements.add(c.target), o.dragOverElements.size > 1)
      return;
    let f = ct(c), p = ze(f), m = p[0];
    if (typeof e.getDropOperation == "function") {
      let $ = new ce(c.dataTransfer);
      m = pe(f, e.getDropOperation($, p));
    }
    if (typeof e.getDropOperationForPoint == "function") {
      let $ = new ce(c.dataTransfer), x = c.currentTarget.getBoundingClientRect();
      m = pe(f, e.getDropOperationForPoint($, p, c.clientX - x.x, c.clientY - x.y));
    }
    o.x = c.clientX, o.y = c.clientY, o.allowedOperations = f, o.dropEffect = Ne[m] || "none", c.dataTransfer.dropEffect = o.dropEffect, m !== "cancel" && i(c);
  }, l = (c) => {
    c.preventDefault(), c.stopPropagation(), o.dragOverElements.delete(c.target);
    for (let f of o.dragOverElements)
      c.currentTarget.contains(f) || o.dragOverElements.delete(f);
    o.dragOverElements.size > 0 || (o.dropEffect !== "none" && a(c), clearTimeout(o.dropActivateTimer));
  }, s = (c) => {
    if (c.preventDefault(), c.stopPropagation(), he(o.dropEffect), typeof e.onDrop == "function") {
      let p = ae[o.dropEffect], m = ln(c.dataTransfer), $ = c.currentTarget.getBoundingClientRect(), x = {
        type: "drop",
        x: c.clientX - $.x,
        y: c.clientY - $.y,
        items: m,
        dropOperation: p
      };
      e.onDrop(x);
    }
    let f = {
      ...jt
    };
    o.dragOverElements.clear(), a(c), clearTimeout(o.dropActivateTimer), f.draggingCollectionRef == null ? he(void 0) : cn(f);
  }, g = q((c) => {
    typeof e.onDropEnter == "function" && e.onDropEnter(c);
  }), D = q((c) => {
    typeof e.onDropExit == "function" && e.onDropExit(c);
  }), M = q((c) => {
    typeof e.onDropActivate == "function" && e.onDropActivate(c);
  }), I = q((c) => {
    typeof e.onDrop == "function" && e.onDrop(c);
  }), v = q((c, f) => e.getDropOperation ? e.getDropOperation(c, f) : f[0]), { ref: E } = e;
  ve(() => pn({
    element: E.current,
    getDropOperation: v,
    onDropEnter(c) {
      n(!0), g(c);
    },
    onDropExit(c) {
      n(!1), D(c);
    },
    onDrop: I,
    onDropActivate: M
  }), [
    E,
    v,
    g,
    D,
    I,
    M
  ]);
  let { dropProps: N } = Mn();
  return {
    dropProps: {
      ...!t && N,
      onDragEnter: d,
      onDragOver: u,
      onDragLeave: l,
      onDrop: s
    },
    dropButtonProps: {
      ...t && N
    },
    isDropTarget: r
  };
}
function ct(e) {
  let t = xt[e.dataTransfer.effectAllowed];
  Pe && (t &= Pe);
  let r = T.none;
  return Ze() ? (e.altKey && (r |= T.copy), e.ctrlKey && !Lr() && (r |= T.link), e.metaKey && (r |= T.move)) : (e.altKey && (r |= T.link), e.shiftKey && (r |= T.move), e.ctrlKey && (r |= T.copy)), r ? t & r : t;
}
function ze(e) {
  let t = [];
  return e & T.move && t.push("move"), e & T.copy && t.push("copy"), e & T.link && t.push("link"), t;
}
function pe(e, t) {
  let r = T[t];
  return e & r ? t : "cancel";
}
function vn(e) {
  const { item: t, children: r, dataType: n, ...o } = e;
  if (!r)
    return null;
  const { dragProps: i, isDragging: a } = cr({
    getItems: () => [
      {
        [n || W]: JSON.stringify(t)
      }
    ]
  });
  return /* @__PURE__ */ b("div", { ...i, role: "button", tabIndex: 0, ...o, children: r({ isDragging: a }) });
}
function xn(e) {
  const { children: t, target: r, onDropEvent: n, dataType: o, ...i } = e;
  if (!t)
    return null;
  const a = C(null), { dropProps: u, isDropTarget: d } = pr({
    ref: a,
    async onDrop(l) {
      const s = l.items.find(
        (g) => g.kind === "text" && g.types.has(o || W)
      );
      if (s) {
        const g = await s.getText(
          o || W
        );
        n(JSON.parse(g), r, l);
      }
    }
  });
  return /* @__PURE__ */ b("div", { ...i, ...u, ref: a, children: t({ isDropTarget: d }) });
}
function Co(e) {
  const {
    item: t,
    dataType: r,
    children: n,
    onDropEvent: o,
    dragNodeProps: i = {},
    targetNodeProps: a = {}
  } = e;
  return /* @__PURE__ */ b(
    xn,
    {
      onDropEvent: o,
      target: t,
      dataType: r,
      ...a,
      children: ({ isDropTarget: u }) => /* @__PURE__ */ b(
        vn,
        {
          item: t,
          dataType: r,
          ...i,
          children: ({ isDragging: d }) => n({ isDropTarget: u, isDragging: d })
        }
      )
    }
  );
}
function Oo(e) {
  const t = ["document-editor", `${e.mode}-mode`];
  return /* @__PURE__ */ b("div", { className: t.join(" "), children: e.children });
}
function Po(e) {
  const t = e.left || [], r = e.center || [], n = e.right || [];
  return /* @__PURE__ */ O("div", { className: "editor-toolbar", children: [
    /* @__PURE__ */ b("div", { className: "editor-toolbar--column editor-toolbar--left", children: t }),
    /* @__PURE__ */ b("div", { className: "editor-toolbar--column editor-toolbar--center", children: r }),
    /* @__PURE__ */ b("div", { className: "editor-toolbar--column editor-toolbar--right", children: n })
  ] });
}
function Ko(e) {
  return /* @__PURE__ */ b("div", { className: "editor-worksheet", children: /* @__PURE__ */ b("div", { className: "editor-worksheet--page", children: e.children }) });
}
const gr = {
  light: {
    color: "#222222",
    bgColor: "#FFFFFF",
    border: "#EEEEEE",
    shadow: "rgba(128,128,128,0.65)",
    inputColor: "#222222",
    inputBg: "#F6F6F6"
  },
  dark: {
    color: "#E6E6E6",
    bgColor: "#181818",
    border: "#181818",
    shadow: "rgba(0, 0, 0, 0.25)",
    inputColor: "#E6E6E6",
    inputBg: "#222222"
  }
}, mr = {
  huge: {
    fontSize: "36pt",
    fontWeight: "bold",
    padding: "6pt",
    margin: "30pt 0 0 0"
  },
  larger: {
    fontSize: "24pt",
    fontWeight: "bold",
    padding: "6pt",
    margin: "18pt 0 0 0"
  },
  large: {
    fontSize: "18pt",
    fontWeight: "bold",
    padding: "6pt",
    margin: "12pt 0 0 0"
  },
  medium: {
    fontSize: "11pt",
    fontWeight: "bold",
    padding: "6pt",
    margin: "5pt 0 0 0"
  },
  small: {
    fontSize: "10pt",
    fontWeight: "normal",
    padding: "6pt",
    margin: "0"
  },
  smaller: {
    fontSize: "9pt",
    fontWeight: "normal",
    padding: "6pt",
    margin: "0"
  },
  tiny: {
    fontSize: "8pt",
    fontWeight: "normal",
    padding: "6pt",
    margin: "0"
  }
}, Ve = (e = "light", t = !1) => {
  const r = gr[e];
  return {
    width: "100%",
    border: "none",
    boxSizing: "border-box",
    backgroundColor: t ? r.inputBg : r.bgColor,
    outline: "none",
    color: r.inputColor,
    resize: "none",
    fontFamily: "Roboto, sans-serif",
    overflow: "hidden",
    lineHeight: "1.5"
  };
}, Vo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  colorScheme: gr,
  inputStyle: Ve,
  typographySizes: mr
}, Symbol.toStringTag, { value: "Module" })), br = {
  light: {
    color: "#222222",
    bgColor: "#FFFFFF",
    border: "#EEEEEE",
    shadow: "rgba(128,128,128,0.65)",
    inputColor: "#222222",
    inputBg: "#F6F6F6"
  },
  dark: {
    color: "#CCCCCC",
    bgColor: "#0A0A0A",
    border: "#181818",
    shadow: "rgba(255, 255, 255, 0.25)",
    inputColor: "#CCCCCC",
    inputBg: "#1A1D1F"
  }
}, Dr = {
  chapter: {
    fontSize: "64pt",
    fontWeight: "bold",
    padding: "6pt 24pt",
    margin: "0",
    lineHeight: 1,
    textAlign: "right",
    borderLeft: "4px solid"
  },
  huge: {
    fontSize: "32pt",
    fontWeight: "normal",
    padding: "6pt",
    margin: "0 0 0 -6pt",
    lineHeight: 1
  },
  larger: {
    fontSize: "24pt",
    fontWeight: "bold",
    padding: "6pt",
    margin: "-12pt 0 0 0"
  },
  large: {
    fontSize: "18pt",
    fontWeight: "bold",
    padding: "6pt",
    margin: "-10.5pt 0 0 0"
  },
  medium: {
    fontSize: "11pt",
    fontWeight: "bold",
    padding: "6pt",
    margin: "-8pt 0 0 0"
  },
  small: {
    fontSize: "10pt",
    fontWeight: "normal",
    padding: "6pt",
    margin: "-6pt 0 0 0"
  },
  smaller: {
    fontSize: "9pt",
    fontWeight: "normal",
    padding: "6pt",
    margin: "-5pt 0 0 0"
  },
  tiny: {
    fontSize: "8pt",
    fontWeight: "normal",
    padding: "6pt",
    margin: "-8pt 0 0 0"
  }
}, Qe = (e = "light", t = !1) => {
  const r = br[e];
  return {
    width: "100%",
    border: "none",
    boxSizing: "border-box",
    backgroundColor: t ? r.inputBg : r.bgColor,
    outline: "none",
    color: r.inputColor,
    resize: "none",
    fontFamily: "Roboto, sans-serif",
    overflow: "hidden",
    lineHeight: "1.5"
  };
}, Qo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  colorScheme: br,
  inputStyle: Qe,
  typographySizes: Dr
}, Symbol.toStringTag, { value: "Module" }));
function Uo(e) {
  const [t, r] = K({
    value: e.value || "",
    hasFocus: !1,
    pressingEnter: !1
  });
  Q(() => {
    r({ ...t, value: e.value || "" });
  }, [e]);
  const n = (l) => {
    l.key === "Enter" && (r({ ...t, pressingEnter: !0 }), l.preventDefault());
  }, o = (l) => {
    l.key === "Enter" && (l.target && e.onSubmit && e.onSubmit(l.target.value), e.clearOnSubmit ? r({ ...t, value: "", pressingEnter: !1 }) : r({ ...t, pressingEnter: !1 }), l.preventDefault()), (l.key === "Backspace" || l.key === "Delete") && (e.onEmpty && l.target.value.length < 1 && e.onEmpty(e.id || ""), l.preventDefault());
  }, i = (l) => {
    if (!t.pressingEnter) {
      const s = l.target;
      r({ ...t, value: s.value }), s.style.height = "1px", s.style.height = s.scrollHeight + "px";
    }
  }, a = (l) => {
    var s;
    if (r({ ...t, hasFocus: l }), !l) {
      const g = ((s = u.current) == null ? void 0 : s.value) || "", D = e.value || "";
      g !== D && e.onSubmit && e.onSubmit(g);
    }
  }, u = C(null);
  Q(() => {
    const l = () => {
      u.current && (u.current.style.height = "1px", u.current.style.height = u.current.scrollHeight + "px");
    };
    return window.addEventListener("resize", l), l(), () => {
      window.removeEventListener("resize", l);
    };
  });
  const d = {
    ...Ve(e.theme, t.hasFocus),
    ...mr[e.size || "small"]
  };
  return /* @__PURE__ */ O("div", { children: [
    e.horizontalLine ? /* @__PURE__ */ b(
      "hr",
      {
        style: {
          borderColor: Ve(e.theme, !1).backgroundColor
        }
      },
      "line"
    ) : "",
    /* @__PURE__ */ b(
      "textarea",
      {
        ref: u,
        placeholder: e.placeholder || "",
        autoFocus: e.autoFocus || !1,
        onInput: i,
        onKeyDown: n,
        onKeyUp: o,
        style: d,
        value: t.value,
        onFocus: (l) => a(!0),
        onBlur: (l) => a(!1)
      },
      "text"
    )
  ] });
}
function Bo(e) {
  const [t, r] = K({
    value: e.value || "",
    hasFocus: !1,
    pressingEnter: !1
  });
  Q(() => {
    r({ ...t, value: e.value || "" });
  }, [e.value]);
  const n = (l) => {
    l.key === "Enter" && (r({ ...t, pressingEnter: !0 }), l.preventDefault());
  }, o = (l) => {
    l.key === "Enter" && (l.target && e.onSubmit && e.onSubmit(l.target.value), e.clearOnSubmit ? r({ ...t, value: "", pressingEnter: !1 }) : r({ ...t, pressingEnter: !1 }), l.preventDefault()), (l.key === "Backspace" || l.key === "Delete") && (e.onEmpty && l.target.value.length < 1 && e.onEmpty(e.id || ""), l.preventDefault());
  }, i = (l) => {
    if (!t.pressingEnter) {
      const s = l.target;
      r({ ...t, value: s.value }), s.style.height = "1px", s.style.height = s.scrollHeight + "px";
    }
  }, a = (l) => {
    var s;
    if (r({ ...t, hasFocus: l }), !l) {
      const g = ((s = u.current) == null ? void 0 : s.value) || "", D = e.value || "";
      g !== D && e.onSubmit && e.onSubmit(g);
    }
  }, u = C(null);
  Q(() => {
    const l = () => {
      u.current && (u.current.style.height = "1px", u.current.style.height = u.current.scrollHeight + "px");
    };
    return window.addEventListener("resize", l), l(), () => {
      window.removeEventListener("resize", l);
    };
  });
  const d = {
    ...Qe(e.theme, t.hasFocus),
    ...Dr[e.size || "small"]
  };
  return e.labelStyle && (d.textAlign = "center", d.textTransform = "uppercase", d.backgroundColor = "rgba(0, 0, 255, 0.05)", d.borderRadius = "8px", d.padding = "1px 0 4px 0", d.margin = "0", d.fontWeight = "bold", d.fontSize = "8pt", d.color = "#518EBE", d.border = "2px solid #518EBE", d.cursor = "pointer", d.lineHeight = "1.5"), /* @__PURE__ */ O("div", { children: [
    e.horizontalLine ? /* @__PURE__ */ b(
      "hr",
      {
        style: {
          borderColor: Qe(e.theme, !1).backgroundColor
        }
      },
      "line"
    ) : "",
    /* @__PURE__ */ b(
      "textarea",
      {
        ref: u,
        placeholder: e.placeholder || "",
        autoFocus: e.autoFocus || !1,
        onInput: i,
        onKeyDown: n,
        onKeyUp: o,
        style: d,
        value: t.value,
        onFocus: (l) => a(!0),
        onBlur: (l) => a(!1),
        tabIndex: e.labelStyle ? -1 : 1,
        spellCheck: t.hasFocus
      },
      "text"
    )
  ] });
}
function Yo(e) {
  const t = e.onClick || (() => {
    console.log("No onClick handler attached to button.");
  });
  return /* @__PURE__ */ b(
    "div",
    {
      onClick: t,
      className: "toolbar-button",
      style: { userSelect: "none" },
      children: e.children
    }
  );
}
function $n() {
  for (var e = 0, t, r, n = ""; e < arguments.length; )
    (t = arguments[e++]) && (r = yr(t)) && (n && (n += " "), n += r);
  return n;
}
function yr(e) {
  if (typeof e == "string")
    return e;
  for (var t, r = "", n = 0; n < e.length; n++)
    e[n] && (t = yr(e[n])) && (r && (r += " "), r += t);
  return r;
}
var Xe = "-";
function In(e) {
  var t = Nn(e), r = e.conflictingClassGroups, n = e.conflictingClassGroupModifiers, o = n === void 0 ? {} : n;
  function i(u) {
    var d = u.split(Xe);
    return d[0] === "" && d.length !== 1 && d.shift(), fr(d, t) || En(u);
  }
  function a(u, d) {
    var l = r[u] || [];
    return d && o[u] ? [].concat(l, o[u]) : l;
  }
  return {
    getClassGroupId: i,
    getConflictingClassGroupIds: a
  };
}
function fr(e, t) {
  var a;
  if (e.length === 0)
    return t.classGroupId;
  var r = e[0], n = t.nextPart.get(r), o = n ? fr(e.slice(1), n) : void 0;
  if (o)
    return o;
  if (t.validators.length !== 0) {
    var i = e.join(Xe);
    return (a = t.validators.find(function(u) {
      var d = u.validator;
      return d(i);
    })) == null ? void 0 : a.classGroupId;
  }
}
var pt = /^\[(.+)\]$/;
function En(e) {
  if (pt.test(e)) {
    var t = pt.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}
function Nn(e) {
  var t = e.theme, r = e.prefix, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  }, o = jn(Object.entries(e.classGroups), r);
  return o.forEach(function(i) {
    var a = i[0], u = i[1];
    Ue(u, n, a, t);
  }), n;
}
function Ue(e, t, r, n) {
  e.forEach(function(o) {
    if (typeof o == "string") {
      var i = o === "" ? t : gt(t, o);
      i.classGroupId = r;
      return;
    }
    if (typeof o == "function") {
      if (An(o)) {
        Ue(o(n), t, r, n);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: r
      });
      return;
    }
    Object.entries(o).forEach(function(a) {
      var u = a[0], d = a[1];
      Ue(d, gt(t, u), r, n);
    });
  });
}
function gt(e, t) {
  var r = e;
  return t.split(Xe).forEach(function(n) {
    r.nextPart.has(n) || r.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(n);
  }), r;
}
function An(e) {
  return e.isThemeGetter;
}
function jn(e, t) {
  return t ? e.map(function(r) {
    var n = r[0], o = r[1], i = o.map(function(a) {
      return typeof a == "string" ? t + a : typeof a == "object" ? Object.fromEntries(Object.entries(a).map(function(u) {
        var d = u[0], l = u[1];
        return [t + d, l];
      })) : a;
    });
    return [n, i];
  }) : e;
}
function zn(e) {
  if (e < 1)
    return {
      get: function() {
      },
      set: function() {
      }
    };
  var t = 0, r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  function o(i, a) {
    r.set(i, a), t++, t > e && (t = 0, n = r, r = /* @__PURE__ */ new Map());
  }
  return {
    get: function(a) {
      var u = r.get(a);
      if (u !== void 0)
        return u;
      if ((u = n.get(a)) !== void 0)
        return o(a, u), u;
    },
    set: function(a, u) {
      r.has(a) ? r.set(a, u) : o(a, u);
    }
  };
}
var Tr = "!";
function Sn(e) {
  var t = e.separator || ":", r = t.length === 1, n = t[0], o = t.length;
  return function(a) {
    for (var u = [], d = 0, l = 0, s, g = 0; g < a.length; g++) {
      var D = a[g];
      if (d === 0) {
        if (D === n && (r || a.slice(g, g + o) === t)) {
          u.push(a.slice(l, g)), l = g + o;
          continue;
        }
        if (D === "/") {
          s = g;
          continue;
        }
      }
      D === "[" ? d++ : D === "]" && d--;
    }
    var M = u.length === 0 ? a : a.substring(l), I = M.startsWith(Tr), v = I ? M.substring(1) : M, E = s && s > l ? s - l : void 0;
    return {
      modifiers: u,
      hasImportantModifier: I,
      baseClassName: v,
      maybePostfixModifierPosition: E
    };
  };
}
function wn(e) {
  if (e.length <= 1)
    return e;
  var t = [], r = [];
  return e.forEach(function(n) {
    var o = n[0] === "[";
    o ? (t.push.apply(t, r.sort().concat([n])), r = []) : r.push(n);
  }), t.push.apply(t, r.sort()), t;
}
function Ln(e) {
  return {
    cache: zn(e.cacheSize),
    splitModifiers: Sn(e),
    ...In(e)
  };
}
var Cn = /\s+/;
function On(e, t) {
  var r = t.splitModifiers, n = t.getClassGroupId, o = t.getConflictingClassGroupIds, i = /* @__PURE__ */ new Set();
  return e.trim().split(Cn).map(function(a) {
    var u = r(a), d = u.modifiers, l = u.hasImportantModifier, s = u.baseClassName, g = u.maybePostfixModifierPosition, D = n(g ? s.substring(0, g) : s), M = !!g;
    if (!D) {
      if (!g)
        return {
          isTailwindClass: !1,
          originalClassName: a
        };
      if (D = n(s), !D)
        return {
          isTailwindClass: !1,
          originalClassName: a
        };
      M = !1;
    }
    var I = wn(d).join(":"), v = l ? I + Tr : I;
    return {
      isTailwindClass: !0,
      modifierId: v,
      classGroupId: D,
      originalClassName: a,
      hasPostfixModifier: M
    };
  }).reverse().filter(function(a) {
    if (!a.isTailwindClass)
      return !0;
    var u = a.modifierId, d = a.classGroupId, l = a.hasPostfixModifier, s = u + d;
    return i.has(s) ? !1 : (i.add(s), o(d, l).forEach(function(g) {
      return i.add(u + g);
    }), !0);
  }).reverse().map(function(a) {
    return a.originalClassName;
  }).join(" ");
}
function Pn() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n, o, i, a = u;
  function u(l) {
    var s = t[0], g = t.slice(1), D = g.reduce(function(M, I) {
      return I(M);
    }, s());
    return n = Ln(D), o = n.cache.get, i = n.cache.set, a = d, d(l);
  }
  function d(l) {
    var s = o(l);
    if (s)
      return s;
    var g = On(l, n);
    return i(l, g), g;
  }
  return function() {
    return a($n.apply(null, arguments));
  };
}
function k(e) {
  var t = function(n) {
    return n[e] || [];
  };
  return t.isThemeGetter = !0, t;
}
var hr = /^\[(?:([a-z-]+):)?(.+)\]$/i, Kn = /^\d+\/\d+$/, Vn = /* @__PURE__ */ new Set(["px", "full", "screen"]), Qn = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Un = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Bn = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function P(e) {
  return Y(e) || Vn.has(e) || Kn.test(e) || Be(e);
}
function Be(e) {
  return R(e, "length", Hn);
}
function Yn(e) {
  return R(e, "size", Mr);
}
function Fn(e) {
  return R(e, "position", Mr);
}
function Zn(e) {
  return R(e, "url", Wn);
}
function ge(e) {
  return R(e, "number", Y);
}
function Y(e) {
  return !Number.isNaN(Number(e));
}
function Rn(e) {
  return e.endsWith("%") && Y(e.slice(0, -1));
}
function te(e) {
  return mt(e) || R(e, "number", mt);
}
function y(e) {
  return hr.test(e);
}
function re() {
  return !0;
}
function U(e) {
  return Qn.test(e);
}
function Gn(e) {
  return R(e, "", Xn);
}
function R(e, t, r) {
  var n = hr.exec(e);
  return n ? n[1] ? n[1] === t : r(n[2]) : !1;
}
function Hn(e) {
  return Un.test(e);
}
function Mr() {
  return !1;
}
function Wn(e) {
  return e.startsWith("url(");
}
function mt(e) {
  return Number.isInteger(Number(e));
}
function Xn(e) {
  return Bn.test(e);
}
function Jn() {
  var e = k("colors"), t = k("spacing"), r = k("blur"), n = k("brightness"), o = k("borderColor"), i = k("borderRadius"), a = k("borderSpacing"), u = k("borderWidth"), d = k("contrast"), l = k("grayscale"), s = k("hueRotate"), g = k("invert"), D = k("gap"), M = k("gradientColorStops"), I = k("gradientColorStopPositions"), v = k("inset"), E = k("margin"), N = k("opacity"), c = k("padding"), f = k("saturate"), p = k("scale"), m = k("sepia"), $ = k("skew"), x = k("space"), j = k("translate"), z = function() {
    return ["auto", "contain", "none"];
  }, G = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, B = function() {
    return ["auto", y, t];
  }, h = function() {
    return [y, t];
  }, ie = function() {
    return ["", P];
  }, le = function() {
    return ["auto", Y, y];
  }, Je = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, ue = function() {
    return ["solid", "dashed", "dotted", "double", "none"];
  }, qe = function() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  }, xe = function() {
    return ["start", "end", "center", "between", "around", "evenly", "stretch"];
  }, X = function() {
    return ["", "0", y];
  }, _e = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  }, J = function() {
    return [Y, ge];
  }, de = function() {
    return [Y, y];
  };
  return {
    cacheSize: 500,
    theme: {
      colors: [re],
      spacing: [P],
      blur: ["none", "", U, y],
      brightness: J(),
      borderColor: [e],
      borderRadius: ["none", "", "full", U, y],
      borderSpacing: h(),
      borderWidth: ie(),
      contrast: J(),
      grayscale: X(),
      hueRotate: de(),
      invert: X(),
      gap: h(),
      gradientColorStops: [e],
      gradientColorStopPositions: [Rn, Be],
      inset: B(),
      margin: B(),
      opacity: J(),
      padding: h(),
      saturate: J(),
      scale: J(),
      sepia: X(),
      skew: de(),
      space: h(),
      translate: h()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", y]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [U]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": _e()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": _e()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [].concat(Je(), [y])
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: G()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": G()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": G()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: z()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": z()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": z()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [v]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [v]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [v]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [v]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [v]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [v]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [v]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [v]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [v]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", te]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: B()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", y]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: X()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: X()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", te]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [re]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", te]
        }, y]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": le()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": le()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [re]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [te]
        }, y]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": le()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": le()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", y]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", y]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [D]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [D]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [D]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal"].concat(xe())
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal"].concat(xe(), ["baseline"])
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [].concat(xe(), ["baseline"])
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [c]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [c]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [c]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [c]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [c]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [c]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [c]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [c]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [c]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [E]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [E]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [E]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [E]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [E]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [E]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [E]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [E]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [E]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [x]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [x]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", y, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": ["min", "max", "fit", y, P]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
          screen: [U]
        }, U, y]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [y, t, "auto", "min", "max", "fit"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["min", "max", "fit", y, P]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [y, t, "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", U, Be]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", ge]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [re]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", y]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Y, ge]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", y, P]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", y]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", y]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [e]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [N]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [e]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [N]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [].concat(ue(), ["wavy"])
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", P]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", y, P]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [e]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: h()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", y]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", y]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [N]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [].concat(Je(), [Fn])
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", Yn]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Zn]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [e]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [I]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [I]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [I]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [M]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [M]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [M]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [i]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [i]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [i]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [i]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [i]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [i]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [i]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [i]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [i]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [i]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [i]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [i]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [i]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [i]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [i]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [u]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [u]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [u]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [u]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [u]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [u]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [u]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [u]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [u]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [N]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [].concat(ue(), ["hidden"])
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [u]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [u]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [N]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: ue()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [o]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [o]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [o]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [o]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [o]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [o]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [o]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [o]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [""].concat(ue())
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [y, P]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [P]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [e]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: ie()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [e]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [N]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [P]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [e]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", U, Gn]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [re]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [N]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": qe()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": qe()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [r]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [n]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [d]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", U, y]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [l]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [s]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [g]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [f]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [m]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [r]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [n]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [d]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [l]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [s]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [g]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [N]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [f]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [m]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [a]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [a]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [a]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", y]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: de()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", y]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: de()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", y]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [p]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [p]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [p]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [te, y]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [j]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [j]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [$]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [$]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", y]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", e]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: ["appearance-none"],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", y]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [e]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": h()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": h()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": h()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": h()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": h()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": h()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": h()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": h()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": h()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": h()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": h()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": h()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": h()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": h()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": h()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": h()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": h()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": h()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "pinch-zoom", "manipulation", {
          pan: ["x", "left", "right", "y", "up", "down"]
        }]
      }],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", y]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [e, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [P, ge]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [e, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}
var V = /* @__PURE__ */ Pn(Jn);
function qn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ b("div", { className: V("flex-shrink-0", e), ...t });
}
function _n({ className: e, ...t }) {
  return /* @__PURE__ */ b("div", { className: V("flex-shrink-0", e), ...t });
}
const eo = ({
  collapsed: e = !1,
  maxWidth: t = "304px",
  minWidth: r = "80px",
  className: n,
  children: o,
  ...i
}) => /* @__PURE__ */ b(
  "div",
  {
    ...i,
    className: V(
      "group group/sidebar flex flex-col h-full bg-neutral-1 overflow-hidden",
      n,
      e && "collapsed"
    ),
    style: {
      width: e ? r : t
    },
    children: o
  }
);
function to({ className: e, ...t }) {
  const [r, n] = K(!1);
  function o(a) {
    n(
      a.scrollHeight - a.scrollTop - a.clientHeight > 1
    );
  }
  const i = C(null);
  return Q(() => {
    if (!i.current)
      return;
    const a = new ResizeObserver(
      (u) => {
        const d = u.pop();
        if (!d)
          return;
        const { target: l } = d;
        o(l);
      }
    );
    return a.observe(i.current), () => {
      a.disconnect();
    };
  }, [i.current]), /* @__PURE__ */ b(
    "div",
    {
      className: V(
        "flex-1 overflow-auto no-scrollbar transition-shadow",
        e
      ),
      style: {
        boxShadow: r ? "inset 0px -33px 32px -16px rgba(0,0,0,0.1)" : "none"
      },
      ref: i,
      onScroll: (a) => o(a.currentTarget),
      ...t
    }
  );
}
const ro = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwIDE2TDEwIDEyLjhMMTAgMTEuMkwxMCA4TDE0IDEyTDEwIDE2WiIgZmlsbD0iIzQwNDQ0NiIvPgo8L3N2Zz4K", no = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAyNCAyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0LjAwOTggNC42NDQ1M0MxNC4wMDk4IDMuNTM5NTMgMTMuMTE0NCAyLjY0NDUzIDEyLjAwOTggMi42NDQ1M0MxMC45MDUyIDIuNjQ0NTMgMTAuMDA5OCAzLjUzOTUzIDEwLjAwOTggNC42NDQ1M0MxMC4wMDk4IDUuNzQ5NTIgMTAuOTA1MiA2LjY0NDUyIDEyLjAwOTggNi42NDQ1MkMxMy4xMTQ0IDYuNjQ0NTIgMTQuMDA5OCA1Ljc0OTUyIDE0LjAwOTggNC42NDQ1M1pNMTQuMDA5OCAxMi42NDQ1QzE0LjAwOTggMTEuNTM5NSAxMy4xMTQ0IDEwLjY0NDUgMTIuMDA5OCAxMC42NDQ1QzEwLjkwNTIgMTAuNjQ0NSAxMC4wMDk4IDExLjUzOTUgMTAuMDA5OCAxMi42NDQ1QzEwLjAwOTggMTMuNzQ5NSAxMC45MDUyIDE0LjY0NDUgMTIuMDA5OCAxNC42NDQ1QzEzLjExNDQgMTQuNjQ0NSAxNC4wMDk4IDEzLjc0OTUgMTQuMDA5OCAxMi42NDQ1Wk0xNC4wMDk4IDIwLjY0NDVDMTQuMDA5OCAxOS41Mzk1IDEzLjExNDQgMTguNjQ0NSAxMi4wMDk4IDE4LjY0NDVDMTAuOTA1MiAxOC42NDQ1IDEwLjAwOTggMTkuNTM5NSAxMC4wMDk4IDIwLjY0NDVDMTAuMDA5OCAyMS43NDk1IDEwLjkwNTIgMjIuNjQ0NSAxMi4wMDk4IDIyLjY0NDVDMTMuMTE0NCAyMi42NDQ1IDE0LjAwOTggMjEuNzQ5NSAxNC4wMDk4IDIwLjY0NDVaIiBmaWxsPSIjNkY3NjdFIi8+Cjwvc3ZnPgo=", kr = (e, t) => A.Children.map(e, (r) => {
  if (A.isValidElement(r)) {
    if (r.type === A.Fragment)
      return kr(r.props.children, t);
    const n = {
      level: t + 1
    };
    return A.cloneElement(r, {
      ...r.props,
      ...n
    });
  }
  return r;
}), oo = (e) => {
  const {
    icon: t,
    label: r,
    onClick: n,
    children: o,
    initialOpen: i,
    expandedIcon: a,
    secondaryIcon: u,
    onOptionsClick: d,
    level: l = 0,
    buttonProps: s = {},
    optionsButtonProps: g = {},
    ...D
  } = e, [M, I] = K(i), v = () => {
    I(!M);
  };
  Q(() => {
    I(i);
  }, [i]);
  const E = (x) => {
    v(), n && n(x);
  }, N = (x) => {
    x.stopPropagation(), d && d(x);
  }, {
    className: c,
    style: f,
    ...p
  } = s, {
    className: m,
    ...$
  } = g;
  return /* @__PURE__ */ O("div", { ...D, children: [
    /* @__PURE__ */ O(
      "div",
      {
        role: "button",
        onClick: E,
        style: {
          paddingLeft: `${l * 10}px`,
          ...f
        },
        className: V(
          "flex flex-row w-full cursor-pointer select-none group focus:outline-none",
          c
        ),
        ...p,
        children: [
          /* @__PURE__ */ b(
            "img",
            {
              src: ro,
              className: V(
                M && "rotate-90",
                "transition ease delay-50"
              )
            }
          ),
          t && /* @__PURE__ */ b("img", { src: M && a || t }),
          r && /* @__PURE__ */ b("div", { className: "ml-1 flex flex-1", children: r }),
          d && /* @__PURE__ */ b(
            "div",
            {
              role: "button",
              onClick: N,
              className: V(
                "w-6 h-6 mx-3 hidden group-hover:inline-block focus:outline-none",
                m
              ),
              ...$,
              children: /* @__PURE__ */ b("img", { src: no, className: "w-6 h-6" })
            }
          ),
          u && /* @__PURE__ */ b(
            "img",
            {
              src: u,
              className: "flex self-end w-6 h-6 mx-3 group-hover:hidden"
            }
          )
        ]
      }
    ),
    o && /* @__PURE__ */ b("div", { className: V(!M && "hidden"), children: kr(o, l) })
  ] });
};
function ao(e, t) {
  return (r, n) => {
    try {
      return e(r, n);
    } catch (o) {
      return t == null || t(o), r;
    }
  };
}
function Fo(e, t) {
  return (r, n) => io(e, t(r), n);
}
function io(e, t, r) {
  const [n, o] = vr(
    ao(e, r),
    t
  );
  return [n, o];
}
function lo(e) {
  const { data: t, onDropEvent: r, dataType: n } = e, o = C(null), { dragProps: i, isDragging: a } = cr({
    getItems: () => [
      {
        [n || W]: JSON.stringify(t)
      }
    ]
  }), { dropProps: u, isDropTarget: d } = pr({
    ref: o,
    async onDrop(l) {
      const s = l.items.find(
        (g) => g.kind === "text" && g.types.has(n || W)
      );
      if (s) {
        const g = await s.getText(
          n || W
        );
        r == null || r(JSON.parse(g), t, l);
      }
    }
  });
  return { dragProps: i, dropProps: u, isDropTarget: d, isDragging: a };
}
const uo = (e) => /* @__PURE__ */ oe.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.5 2C13.1894 2 13.8136 2.27905 14.2659 2.73036C14.2834 2.74784 14.3007 2.76559 14.3177 2.78358C14.7174 3.20678 14.971 3.76953 14.9977 4.39107L14.9985 4.41205C14.9995 4.44124 15 4.47056 15 4.5L15 4.51426C15 4.55491 15.0247 4.59145 15.0623 4.60702C15.0998 4.62261 15.1431 4.61423 15.1719 4.58546L15.182 4.57538C15.2028 4.55456 15.2239 4.53419 15.2452 4.51426L15.2607 4.5C15.719 4.07934 16.2962 3.86073 16.8782 3.84417C16.9029 3.84346 16.9277 3.84312 16.9524 3.84315C17.5913 3.84382 18.23 4.0879 18.7175 4.57538L19.4246 5.28249C19.9121 5.76997 20.1562 6.40868 20.1569 7.0476C20.1569 7.07234 20.1565 7.09709 20.1558 7.12182C20.1393 7.70375 19.9207 8.281 19.5 8.73935L19.4857 8.75476C19.4658 8.77611 19.4454 8.7972 19.4246 8.81802L19.4145 8.82811C19.3858 8.85687 19.3774 8.90017 19.393 8.93775C19.4085 8.97529 19.4451 9 19.4857 9L19.5 9C19.5294 9 19.5588 9.00051 19.5879 9.00152L19.6089 9.00233C20.2305 9.02898 20.7932 9.28257 21.2164 9.68233C21.2344 9.69933 21.2522 9.71659 21.2696 9.73411C21.721 10.1864 22 10.8106 22 11.5L22 12.5C22 13.1894 21.721 13.8136 21.2696 14.2659C21.2522 14.2834 21.2344 14.3007 21.2164 14.3177C20.7932 14.7174 20.2305 14.971 19.6089 14.9977L19.5879 14.9985C19.5588 14.9995 19.5294 15 19.5 15L19.4857 15C19.4451 15 19.4085 15.0247 19.393 15.0623C19.3774 15.0998 19.3858 15.1431 19.4145 15.1719L19.4246 15.182C19.4454 15.2028 19.4658 15.2239 19.4857 15.2452L19.5 15.2607C19.9207 15.719 20.1393 16.2962 20.1558 16.8782C20.1565 16.9029 20.1569 16.9277 20.1569 16.9524C20.1562 17.5913 19.9121 18.23 19.4246 18.7175L18.7175 19.4246C18.23 19.9121 17.5913 20.1562 16.9524 20.1568C16.9277 20.1569 16.9029 20.1565 16.8782 20.1558C16.2963 20.1393 15.719 19.9207 15.2607 19.5L15.2452 19.4857C15.2239 19.4658 15.2028 19.4454 15.182 19.4246L15.1719 19.4145C15.1431 19.3858 15.0998 19.3774 15.0623 19.393C15.0247 19.4085 15 19.4451 15 19.4857L15 19.5C15 19.5294 14.9995 19.5588 14.9985 19.5879L14.9977 19.6089C14.971 20.2305 14.7174 20.7932 14.3177 21.2164C14.3007 21.2344 14.2834 21.2522 14.2659 21.2696C13.8136 21.7209 13.1894 22 12.5 22L11.5 22C10.8106 22 10.1864 21.7209 9.73411 21.2696C9.71659 21.2522 9.69933 21.2344 9.68233 21.2164C9.28257 20.7932 9.02898 20.2305 9.00233 19.6089L9.00152 19.5879C9.00051 19.5588 9 19.5294 9 19.5L9 19.4857C9 19.4451 8.97529 19.4085 8.93774 19.393C8.90017 19.3774 8.85687 19.3858 8.8281 19.4145L8.81802 19.4246C8.7972 19.4454 8.77611 19.4658 8.75475 19.4857L8.73934 19.5C8.281 19.9207 7.70375 20.1393 7.12182 20.1558C7.09708 20.1565 7.07234 20.1569 7.0476 20.1568C6.40868 20.1562 5.76997 19.9121 5.28249 19.4246L4.57538 18.7175C4.0879 18.23 3.84382 17.5913 3.84315 16.9524C3.84312 16.9277 3.84346 16.9029 3.84417 16.8782C3.86073 16.2962 4.07934 15.719 4.5 15.2607L4.51426 15.2452C4.53419 15.2239 4.55456 15.2028 4.57538 15.182L4.58546 15.1719C4.61423 15.1431 4.62261 15.0998 4.60702 15.0623C4.59145 15.0247 4.55491 15 4.51426 15L4.5 15C4.47056 15 4.44125 14.9995 4.41205 14.9985L4.39107 14.9977C3.76953 14.971 3.20678 14.7174 2.78358 14.3177C2.76558 14.3007 2.74784 14.2834 2.73036 14.2659C2.27905 13.8136 2 13.1894 2 12.5L2 11.5C2 10.8106 2.27905 10.1864 2.73036 9.73411C2.74784 9.71659 2.76558 9.69933 2.78358 9.68233C3.20678 9.28257 3.76953 9.02898 4.39107 9.00233L4.41205 9.00152C4.44125 9.00051 4.47056 9 4.5 9L4.51426 9C4.55491 9 4.59145 8.97529 4.60702 8.93775C4.62261 8.90017 4.61423 8.85687 4.58546 8.82811L4.57538 8.81802C4.55456 8.7972 4.53419 8.77611 4.51426 8.75476L4.5 8.73935C4.07934 8.281 3.86073 7.70375 3.84417 7.12182C3.84346 7.09709 3.84312 7.07234 3.84315 7.0476C3.84382 6.40868 4.0879 5.76997 4.57538 5.28249L5.28249 4.57538C5.76997 4.0879 6.40868 3.84382 7.0476 3.84315C7.07234 3.84312 7.09709 3.84346 7.12182 3.84417C7.70375 3.86073 8.281 4.07934 8.73934 4.5L8.75476 4.51426C8.77611 4.53419 8.7972 4.55456 8.81802 4.57538L8.8281 4.58546C8.85687 4.61423 8.90017 4.62261 8.93775 4.60702C8.97529 4.59145 9 4.55491 9 4.51426L9 4.5C9 4.47056 9.00051 4.44124 9.00152 4.41205L9.00233 4.39107C9.02898 3.76953 9.28257 3.20678 9.68233 2.78358C9.69933 2.76559 9.71659 2.74784 9.73411 2.73036C10.1864 2.27905 10.8106 2 11.5 2L12.5 2ZM11 19.5C11 19.7761 11.2239 20 11.5 20L12.5 20C12.7761 20 13 19.7761 13 19.5L13 19.4857C13 18.6262 13.5212 17.8669 14.2962 17.5455C15.0727 17.2235 15.9787 17.3929 16.5861 18.0003L16.5962 18.0104C16.7915 18.2057 17.108 18.2057 17.3033 18.0104L18.0104 17.3033C18.2057 17.108 18.2057 16.7915 18.0104 16.5962L18.0003 16.5861C17.3929 15.9787 17.2235 15.0727 17.5455 14.2961C17.8669 13.5212 18.6262 13 19.4857 13L19.5 13C19.7761 13 20 12.7761 20 12.5L20 11.5C20 11.2239 19.7761 11 19.5 11L19.4857 11C18.6262 11 17.8669 10.4788 17.5455 9.70385C17.2235 8.92727 17.3929 8.02132 18.0003 7.41389L18.0104 7.40381C18.2057 7.20854 18.2057 6.89196 18.0104 6.6967L17.3033 5.98959C17.108 5.79433 16.7915 5.79433 16.5962 5.98959L16.5861 5.99968C15.9787 6.60711 15.0727 6.77651 14.2962 6.45448C13.5212 6.13311 13 5.37381 13 4.51426L13 4.5C13 4.22386 12.7761 4 12.5 4L11.5 4C11.2239 4 11 4.22386 11 4.5L11 4.51426C11 5.37381 10.4788 6.13311 9.70384 6.45448C8.92725 6.77651 8.02132 6.60711 7.41389 5.99968L7.40381 5.98959C7.20854 5.79433 6.89196 5.79433 6.6967 5.98959L5.98959 6.6967C5.79433 6.89196 5.79433 7.20854 5.98959 7.40381L5.99967 7.41389C6.60711 8.02132 6.77651 8.92727 6.45448 9.70385C6.13311 10.4788 5.37382 11 4.51426 11L4.5 11C4.22386 11 4 11.2239 4 11.5L4 12.5C4 12.7761 4.22386 13 4.5 13L4.51426 13C5.37382 13 6.13311 13.5212 6.45447 14.2961C6.77651 15.0727 6.60711 15.9787 5.99968 16.5861L5.98959 16.5962C5.79433 16.7915 5.79433 17.108 5.98959 17.3033L6.6967 18.0104C6.89196 18.2057 7.20854 18.2057 7.4038 18.0104L7.41389 18.0003C8.02132 17.3929 8.92726 17.2235 9.70384 17.5455C10.4788 17.8669 11 18.6262 11 19.4857L11 19.5Z", fill: "#909193" }), /* @__PURE__ */ oe.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z", fill: "#909193" })), so = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABUHSURBVHgBxZwLsBTVmcf/X8+VN+EiT+XhuGo2aojomhQxqIMpS+NuIrqP6K6bYGk2tSYG0FR2XUHErCVruQKL+EiZCDFiJXEX7pYmbtzIGETxfUW0QKIODwHFxyW85d4+Oaf7PL5zuufembkD+aihT5/uOX36N//v+06f7r6EP6EVJ5ZaC0BJyKJcPY0IRSGSMiDLEMnSWIf8VEjIZYSKiLEpAsqdQHulvdyBP5ERjqAxYOfK1amqCtRzF/geIrM1qVFgy3LZ1iWhHkmgRwTgiRNLCtp0+SnJQ7b6R6XM/17JFLQaHUBhl4KvyoKEuUQW2t5qL6/AYbbDBlCpTbrYdHlCM4Co1R0tBEa8mvWMk8sx4RdEsNRUlTLnHiVVub69XMFhsKYDdOAgwaE1OYSFYWDJpSB39EBu7n/hll5PHSThARasjitTVOT3l7z9cnkummxNBSjhTZPw5shmi7Z5MjjkPwPSUyLrQjfxMNwiSGi+amnUp//X5ISFaIBLRRLmvvVyeQmaZE0BKMEVZUMPSBgl06yDRRoSX0/3ybq0XwKFHRSBQ4tgS0Z5DmOyKd0u21xxVIyZzXDrXgP8s8+VposIN5NKDiamkYNj4ZFWG/l+a3F66gyVqf4LYemSl0FcJIQFl8KLDWBhFdohm53ZWzU2DDCJdTHmiIhm+BAMJArc1qjQKZCMAikPmKoRVXvrQeQq8yDGDrAsxD7AtBxhwdsvlmeiQWsIYOKyAsvl1yeScVHywVnXTY4Q6YORc2Hr2npLZtwShkSeSATC4YyLeByoXncxkEFk2+VgXHThkkoDLl03QA1vpUoURJE+ySirOk9xzKUpx61ZVyhIJHkQuZuqJBK6rQImAje2S8Fd29XJqorogymVNfVBrAtgCo9WqmIKL3BZVeetq2VkwVCQlREoMq33e0aszHOtiYt+8jBAhWYTe/sk6waiCCCm36ngqPog1gzQwiOpPA+OLEdGaRFz3Xx4PCM7pYKp1HUqPYbwABIx9yXBIp6D5bmyiDMqdBDjQIVyGUuIdSixJoAGnjyholEaX6ZgosB1o3xwFKgvyLpEbI2CXhJLHEaBxNwzqYuzEOOYqVDtGzMVxjrfGKCqKpYQqSaIEWowCW95Fp6BEMG6c7JNlQt6P7MtSrclLi6nE6hgv5fsg4L+jqxXZUSsrUj/OGY/1z5FkV2ioJfJp8DKsq92G+mP/nHVNlWf/N7ak5LDynM9JJarkUZPbAo97SDHefPlQaZaWBZi5OBBA9HwdC9kPwrWlUl/OHBK9nGx1Ko4InuC0OswY0sinbOMgiPdNUoUSHw/YmEiMvXwtqcKIZ2cvBgyGlHcr2Pbpv9DowCLE0rTqEDzDBCrpqRnBasOdyIFu18UGRWRU5RRjIWl2+LuTy6WGqWTBpEqJoAYcUjwIDmYsJA5MBY/0u08P6WlSa2ji7s6tlfWVGNEVeHJuBcJekUetdXGM+ZWVllWQRE7YXcmdpuOfSbj+jHRnJc7IWInZntKJqHoeEc6rhHLwKTSSZxJJN4QJzbZWCeRmNWpZWwSSrLsQAtOrxYPW1DFIhHNR3J5FsY3piymSB4bBw0chLPPOg1nTPhz9O3XhxEwJcr9CanbyhTenj37sXjpf+OTQ4cSiGd9fgK+PPlMuL3MWDGV0/4DB/Haho148vkXsGffXj0KIj3yidIkkp6xLqvziO1oScJsRScekKUpyLFcBRYnnjctEvJLHqCCVk7BuqyLaU6B5517Jq675nKMPXYkmm3b3/sQN9x6L9a/tdmq7ed334LiuGN6/O7Ojz7GLXf/CE+9+JJVoc3CcaDCrtgpUNcBXVdWXli1JGw3NwYOHXX88mRyINKQoDOelziy8M4563QsuG0mPjV4IJptGzZuxoybFmHT1vds/Jp6wdn46vlfqun7A/v3x0XnTMaGyia8s22bn0CY8atvMlNmqU1sHXn80o4dlQN8/8wwRmbdOfKrRZNVfXhhBjbwIgwaNBCzf3AlDof9pvwCrvnX+Xhv58cW3hD5I111+V+hXrt+2j9isOwrvGFNlQ/P3qCiDHgzwvY8gCpxCIqmgY3ziPgVhomDrmxATjn7LzBi2FA02+5/8FHMvX0J9u8/aBOQKvz9JedjZAPHGzd6FM4584wAlh4vGqje0IeVIaaHY8NAgVFJkSZ2bQuqAo/cuFDVTzj5BDTTPt61B9+/6R78ZNmvbGIwbnfMyGHSdSejUTv95M+4gTP5iqNwnUMkGdYCFXoApcvP8WZLzFDEDaRgxm1uKJLW9e/fF82yd7fvxLdm3IHVL6yzihP6o8qXfe08HN06GI1a3759sipzVyG+8uxHb0vv91izAE+Y8OWpiZ+DWKwjO96zv47nzuxXa5K99sY7Et5/JhCV2Ul4HfsGDuyHiy9oXH2pMSB2AK6uZAKX9a5eLMjW4pmlkmnJjgPlkOhinlEtnDxgTJF8iqq31var1bjz7l/ik85O3aZxXT3jIsufPnE8+vXtpdoNPDMzHWuIgtwO6dSP3o+SoWE6kFegY6XCstozUaAKjHLTtFB9/J8HzHNhf4qqEYvlWOu+pY/itgUP4+ChTjfvx5o0sy8D+/dDU0yryruE9JIGsi5slgIlk0wSBRa6CiWhrxPt/xk1umvY1AMI8D6N2e7d+/HDO36K3z2zlimZz/npjwa6sbI1GQD3OmxohQsDxZQjfVBBgeuSVWCSTPqopyywItlduW/QW+ea5sPc2oNGQKMAN23egauuvR1PrV5rE4R3RW/AmXOSi+0ffIjXN1bQNMvGOF9tvMzOU16klNQyBQhR8uIbBSCtm5opH/KP3gC/VWvW4erpd8ori/ft9wXC6RChs6+bPFDLux76H3R2daFhy4XmIJkZIG8aDb4iZSRMRBcpX5arRQNJwEH0lrYM+PdCeK9qs2WPPInvz74Xu3bvzWzz7nCw3ympo7T+pTfexG0/ehC9MUFk2xfEvEm7sCAmjrxYCCoqdjIGtkz0rgCtVIOPV4+AV+3w7rjrl/j58nL6LQ0m05Qncq1L5tpKkW3l1eg/oB+u/8bXexcPlSjs7QDtZZTGWLsMBvK2nzIOtkSISwhuS3o7BSuur9zFe7b9Bz7BTbc9gPLTa+3XzUjB3CziSYTv40HUJ6JO+OHH/z8ZwH/n7y5BvUb6ZJIZGdLnoUES+bNe4OdskomyGHLOFFTMNh1cjZCDJeC1WLPd8+P/lfBeZb1PzesomKsSm9tj8c9OnuoJ0vvbHsWCh3+Bek14xzbK0xXQs+A2HprhDmsg7dNpkfz2cSa25btnaMRKtYHcvuNDtP16dXdN6ZMSCLOw8NZFADWFsOSxx/EfDy5DXRY4WuIFduiia8mf3gobUOJTAFszDQumvibY+o1bsE/OpqTti7Af2eybLHkSEb4izfQ927bsiSew8BePoFajHtZtPUswTKDaRFHNYxe9QatdETnNU889ybGdH+4K9hWZss2I5h+/30FmP7KwXVZ29uPHHsM9y2t7qtdLXpSzkRc1ubzwpZJ2qxeAqrCivJZrFOjggf3zN4QuTH62s9nPYXX76T2ca6d2T9sKPPTEb9CTJfFcoAYTPKeFLl2MuvueV6S89Zp6gM+eUkShELnd7Xf9rGoDu0FFruwlErhEg6A/qrx4+XLs2ru3pr6xg+ZsABOKsEX+u0fezuihMW31RsdxY0bi3LM+h0wjXusBTA0ruSFJzm3tPl6fOAWB3Xv3ofzKy+jWRB0bhL/CH+qMEJ5E0BmzyO1ubQJM7Mbrr0Bx/Ci/X5R1W5ccmAsT/KGN3h6C5N3Z9sEH6M5E6L8ie07eehWlynEgKpnGUY2NSAabRHWQ0/apwQPwX/O+i/HjHESX1fTwxSQFDpXX6f2FFyOF7w5mN6oenTKJkq9zDYnMF7xt8kfoiMiPOtm93N5uK/9pRHXcoR0zahjuvWMGTigem361myTi3FX4617/3KrfA4ETx4xBjyZc/4UQOWDNueuye0jdLCuRPIlKoioDKQSVSVXcZepX4ohhQ7Bo3rUYlyiRfd9zYa0ssEELG9aAcn4yVjF62DCcftJJqNk8NxVGXeDwBNtH2HWpQFnaBPs9d5kE+zwJ4LZ4rfhHrsOtFcT7bp+B8WO1O+e4adIqy7xWjfZ4QaM6U/Y96ih899K/xrAhQ9CtGS8ywrNPq7p6DtSes7BfTp5oVYGi3bmpaZwPV2P4bsyVkVV9raYgLr71Wow9dgQ8ILnjUOEOz6pcMf3XR8K75eqrcfHkWm46ifQRGO51Go4IXNaCM8q022mTupSrcCUJDgw+/VCF6XHjetlZS2LivBnJMMdANLEuEx68ATZYf9O1McOH42ezZ+OiSZNQkwnvF0h1giDe6XoOlBiXKIrLEQooC/agtaPMoPkBAC6YZnRYt40ecTQWzb0WgwYNQHYyIRjSwJegWTv1+OPxkxtuwMnHHYeaLThP71npOAAJf7tNop0t7ZF6tzZJJFZ5bimCpc1Y8JfInFx9NvaYEbjsq1P8QTTC6SuwowqbwadOPhtLZ92YKLAu85TGFZcDlG83SpSeq9iZe1BtFopwH/fF2GalVKUxy1KiN+ysXWIf1WAK5M7KB9vKfeQ471/+4XL88J+uThJHXWbVB60XDSuEF/vwePwT/L4wRFfZ0jWAPPUJ/TRnEB89FfbOhh89xJ8kyJy0+6GOHT4M99/wA1xx4QVozKq4LnvtwT4XaFw65vtJcDHaVEvpkwmFQll0ig65V2t6I8lATGctoOvUP1L16h6xjo/pdFmMppl+cNKeqKdEOUAeOxYLr/sexo3qxQOcRiz8Ud7gI/g+sfE89kFLWTWVKFD5sgRR9lQlhK8+mHcrYg03tkpthgrflDfMvbEku2Qzv2HpjIl4cO6s3sFLLFSUr74MUGGgai8gscT8XQb3jLToWiigXmeI3Y0eQQmoZD1Wjz50yfVCGkRJKzRpP/LHaA3YiidWpQUb55z6lBdc9bWL8O1LL0bfPnXGu2oWumeiEe66sQ+ZxcNIRG2mGXvFXVn3dFlu7bBS1cozH6NAq77YV2dvFLhl+/to++3TqZaZqtXxBg3oj1u/8y1877K/aSI8MKXFDlwc1jl47LUwmX1X2Wlv//lAiIWerIOEwl03hksqqu7gwU/QqC1+aDkOdh4Cj3XKjj92FJbOvRF/OfmLaKbt239AOhwDZSAxcBaaVV7aLVk7l7flz/m0tCxIVGhUZ1/Uk7iY8ixEk5nlAV5+bQMasVfX/x6Pr3rOtmPi6Rknfxo//ffZOHFcDbMqddraDW+CP52PrtgNWUKIPBtL9RXQp8zb8gAmyUSp0LqQVpiBmUDsSg7iQ+zC7555CVu2vYd67fb7lmWGEn97fgl3/dtMDBnU/Kf93//oI/x2zXPMbWMNKU5AuriXgiPfI5eGL2VnZx2VCtX1sVWfeojHh5i4s4GIFOLu3Xtw5+KfoR57bOWzWPf7tyDMeFMmjeu+8XXM+vY0DOzXpOcAA5tz193Ys2dPCq+LuW1X8L6IXrIEUtnc/szNYXuZ90TUexBDR47dJdPsVHMrL505TtOjvZlO7k6deQ7nnU3v4o0Nb+PzZ5yKgQP6d3sihzo7cf2ti/CHPXuT744eMQyLZs3EV85ubrwztnn7DsxauAhPPvu8dV8LJ/aVp9yZ2PWwfvxj5h92bGkP26VqBzzus19aieTPmLD35PhrXeTXE7mnVtXEwJRzvoAJp5yE/v36InMDVi7Wrt+IR3690o73rrniUhwzcrjL5d7sM7LTW6EJXtQnL/9Tye2l19/AU8+/KG827XGZlg9VgqSRujRSj0tGG1ix5dVnch/AqQqw+JlJRdFSeAXe+3LuRRvz/hwxeHZ78Ois/wyeLrOHX/mNo+w0vgMogixtl0JvMdesZqAMlkFj9vpW5hLNJJHY254oUTplRPHplfY1lTxOVV937fhga8fQEeMPypO6kDuvvRFkzf30ZEbW5lQVB70e7u+mrvI/3mQFvHEYcy0wQMJC8IYe2kVF7IPMXGH42dbtL+J/3rx2TRlVrNv3hTt2blkzZPi4oRLYJDYRksIKtOs9+GCuX8mBhAfSLUU1gBYehwUfYsyXImd77C7LkFUdV6SnPKtkLNz62rPz0I31+Mb60DEnrEFX14VSiaMztyF4nMpVmwZLsDCI8qDpNhDnKM+dmHNJXzHeNLvNpExlQazjFwsu3jGQSFy3fcvaZ3t88LBHgElWHjZGvfY+VajnaIhlYmEgpSsOB5v6TsxNg7nt5jsBTAYqMwNitpnZktgHKgJImVgXM3B6jEdMsQ6eqEQRvtKxY2uPf8iRUKMlSSWilYKoGD6M7t5SB0sU5o/y8IQCbyl4UNW7JID5zfJEvSls+7vpdbNklQjjpKdScAUiV8HSQxS8KdWSRsMAsxAZHA4JDpzLzAygGUDaD3mwBFliOb1zedgC82Kl/i92MEUOUHuPJ2ZloZVXqB1ebhd7shQiVspJnaIB4D/VD6tMmNcFkB3OJJg4RL2bt0zKIoiqwluY+GshWfcH/IwtdCjmsQ42LJB6yuCQhLe+dnhhV2u2BGKBlstjT8wAMxEyT3XgEOGAg7LwyMXTrIkMQD549tQGwM/mPuh0sEDtUZe4pF54vLsN2fhTvqhmb6YjT3lAVoG6COS4M5CvwIyxoVGyDNxXr4ugPlScFXJMC1v29b25UmnsL//2CqCycadOmiZjx3zpj62+4hgNW+3q0/cv3C5uSTm9YyoUQUG4bYIr0HNlOHB6XR69Q84lzH339ecWoBfWa4DKdHKZL2dVpnpuag5RFaarznTFW81xYyZD302Z+my98BUr7/8UOunKRlw2tKYANJaoUYg5slhEbnwLfJR4tV+XZwYXH9mIMKl42Zl/Mb0ZLrP83C2vr1mCJllTARobe8qkm6WLfJM0SEFcZIE6e+iNCDZltMjVxmGyeuWuMgTKWDdgQaOxrpodFoDKlFt3FVBCokhRDORmi34crKU7ottVnnFl+4cNnLHDBpDbuAlfmIpOeSlI+CbDl6/E7nok9HYvDbNtMNCojIgWbl1XfRalWXZEABorFkutXYP3lRRMeabnikSZeZ2wlKqsO9NMK0JQG7WIcmH3gPLhUlueHVGAoSmgnYMOTJQTASU5YjxOzvkVpXJaVewUwStoClL6dx/UXyOP5AevikjeJTvCwEL7I6IVG2Tw6vcCAAAAAElFTkSuQmCC", co = ({
  username: e,
  address: t
}) => /* @__PURE__ */ O("div", { className: "flex gap-2 bg-white py-[10px] px-3 collapsed:px-1 collapsed:justify-center", children: [
  /* @__PURE__ */ b(
    "img",
    {
      src: so,
      alt: e,
      width: 40,
      height: 40,
      className: "object-contain"
    }
  ),
  /* @__PURE__ */ O("div", { className: "collapsed:hidden", children: [
    /* @__PURE__ */ b("p", { className: "font-semibold text-sm text-[#404446]", children: e }),
    /* @__PURE__ */ b("p", { className: "font-semibold text-xs text-[#94A3B8]", children: t })
  ] })
] }), po = ({
  username: e,
  address: t,
  ...r
}) => /* @__PURE__ */ O(_n, { ...r, children: [
  /* @__PURE__ */ b(co, { username: e, address: t }),
  /* @__PURE__ */ O(Ye, { className: "flex gap-3 py-3 w-full px-5 collapsed:px-3", children: [
    /* @__PURE__ */ b(uo, {}),
    /* @__PURE__ */ b("span", { className: "font-semibold text-sm leading-6 text-[#404446] collapsed:hidden", children: "Settings" })
  ] })
] }), go = (e) => /* @__PURE__ */ oe.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { d: "M8 1L0.999998 8M0.999998 8L8 15M0.999998 8L15 8", stroke: "#7C878E", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })), mo = ({
  onToggle: e,
  ...t
}) => /* @__PURE__ */ O(qn, { ...t, children: [
  /* @__PURE__ */ b(
    "input",
    {
      placeholder: "Create new document",
      className: "flex-1 border border-neutral-3 rounded-md py-3 px-5 leading-none placeholder-shown:bg-transparent collapsed:hidden"
    }
  ),
  /* @__PURE__ */ b(
    Ye,
    {
      className: "border border-neutral-3 rounded-md p-3 collapsed:rotate-180",
      onPress: () => e(),
      children: /* @__PURE__ */ b(go, {})
    }
  )
] }), Zo = ({
  onToggle: e,
  username: t,
  address: r,
  collapsed: n = !1,
  maxWidth: o = "304px",
  minWidth: i = "58px",
  ...a
}) => /* @__PURE__ */ O(
  eo,
  {
    ...a,
    collapsed: n,
    maxWidth: o,
    minWidth: i,
    children: [
      /* @__PURE__ */ O(to, { children: [
        /* @__PURE__ */ b(
          mo,
          {
            className: "pt-11 px-2 flex gap-4 justify-center",
            onToggle: e
          }
        ),
        n ? null : a.children
      ] }),
      /* @__PURE__ */ b(
        po,
        {
          username: t,
          address: r,
          className: "border-t border-[#2326271A] p-4 collapsed:p-1"
        }
      )
    ]
  }
), bo = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDJDNi40NzAwNSAyIDIgNi40NzAwNSAyIDEyQzIgMTcuNTMgNi40NzAwNSAyMiAxMiAyMkMxNy41MyAyMiAyMiAxNy41MyAyMiAxMkMyMiA2LjQ3MDA1IDE3LjUzIDIgMTIgMlpNMTEuMDU1MyAxNi41MTYxQzEwLjgyNDkgMTYuNzQ2NSAxMC41MDIzIDE2Ljg4NDggMTAuMTU2NyAxNi44ODQ4QzkuODExMDYgMTYuODg0OCA5LjQ4ODQ4IDE2Ljc0NjUgOS4yNTgwNiAxNi41MTYxTDUuNjg2NjQgMTIuOTQ0N0w3LjQ4Mzg3IDExLjE0NzVMMTAuMTU2NyAxMy44MjAzTDE2LjUxNjEgNy40NjA4M0wxOC4zMTM0IDkuMjU4MDZMMTEuMDU1MyAxNi41MTYxWiIgZmlsbD0iIzM0QTg1MyIvPgo8L3N2Zz4K", Do = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiIGZpbGw9IiNFREVERUQiLz4KPHBhdGggZD0iTTEwLjE1NzUgMTYuODg0OUMxMC41MDMyIDE2Ljg4NDkgMTAuODI1NyAxNi43NDY3IDExLjA1NjIgMTYuNTE2MkwxOC4zMTQyIDkuMjU4MTdMMTYuNTE3IDcuNDYwOTRMMTAuMTU3NSAxMy44MjA0TDcuNDg0NzMgMTEuMTQ3Nkw1LjY4NzUgMTIuOTQ0OEw5LjI1ODkzIDE2LjUxNjJDOS40ODkzNCAxNi43NDY3IDkuODExOTIgMTYuODg0OSAxMC4xNTc1IDE2Ljg4NDlaIiBmaWxsPSIjMzRBODUzIi8+CjxwYXRoIGQ9Ik0yLjUxMzY3IDEyQzIuNTEzNjcgNi43NTMxNCA2Ljc2NzAxIDIuNSAxMi4wMTM3IDIuNUMxNy4yNjAzIDIuNSAyMS41MTM3IDYuNzUzMTQgMjEuNTEzNyAxMkMyMS41MTM3IDE3LjI0NjggMTcuMjYwMyAyMS41IDEyLjAxMzcgMjEuNUM2Ljc2NzAxIDIxLjUgMi41MTM2NyAxNy4yNDY4IDIuNTEzNjcgMTJaIiBzdHJva2U9IiMzNEE4NTMiLz4KPC9zdmc+Cg==", yo = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjAxMzcgMy45OTA0M0MxMC44Mjc3IDQuMDAwNDMgOS41OTE2NyA0LjMzOTQyIDguNTEzNjcgNC45NTk0MkM4LjAzNDY3IDUuMjM0NDIgNy44NjM2NyA1Ljg1NTQyIDguMTM4NjcgNi4zMzQ0MkM4LjQxMzY3IDYuODEzNDIgOS4wMzQ2NyA2Ljk1MzQ3IDkuNTEzNjcgNi42Nzg0N0MxMC4yOTI3IDYuMjMwNDcgMTEuMTcxNyA1Ljk5NzQyIDEyLjAxMzcgNS45OTA0MkMxNC42OTQ3IDUuOTY5NDIgMTcuMDM0NyA4LjI3NzQyIDE3LjAxMzcgMTAuOTkwNEMxNy4wMTM3IDExLjA1MDQgMTcuMDEzNyAxMS44NTM0IDE3LjAxMzcgMTIuMDg0NEMxNy4wMTM3IDEyLjU1MDQgMTcuMzA5NyAxMi45Nzk0IDE3Ljc2MzcgMTMuMDg0NEMxOS4wNzk3IDEzLjM4ODQgMjAuMDEzNyAxNC4zOTA0IDIwLjAxMzcgMTUuNDkwNEMyMC4wMTM3IDE1Ljg0NjQgMTkuOTM1NyAxNi4yMDM0IDE5Ljc2MzcgMTYuNTIyNEMxOS41MDE3IDE3LjAwNzQgMTkuNjgzNyAxNy42MDM0IDIwLjE2OTcgMTcuODY1NEMyMC42NTU3IDE4LjEyODQgMjEuMjUxNyAxNy45NDU0IDIxLjUxMzcgMTcuNDU5NEMyMS44NDE3IDE2Ljg1MjQgMjIuMDEzNyAxNi4xODI0IDIyLjAxMzcgMTUuNDkwNEMyMi4wMTM3IDEzLjY3NjQgMjAuODIxNyAxMi4xMDk1IDE5LjAwOTcgMTEuMzc2NUMxOS4wMTE3IDExLjE5ODUgMTkuMDEzNyAxMS4wMTc0IDE5LjAxMzcgMTAuOTkwNEMxOS4wNDM3IDcuMTU1NDIgMTUuODA0NyAzLjk2MTQzIDEyLjAxMzcgMy45OTA0M1pNNS4wMTM2NyA1Ljk5MDQyQzQuNzU3NjcgNS45OTA0MiA0LjQ4OTY4IDYuMDc2NDcgNC4yOTQ2OCA2LjI3MjQ3QzMuOTA0NjggNi42NjI0NyAzLjkwNDY4IDcuMzE5NDEgNC4yOTQ2OCA3LjcwOTQxTDUuNDAyNjggOC44MDU0MkM1LjI5NDY4IDkuMDMwNDIgNS4yNDY2NyA5LjI4NDQ1IDUuMTkwNjcgOS41NDM0NUMzLjI4NjY3IDEwLjM3MzUgMi4wMTM2NyAxMi4yMDg0IDIuMDEzNjcgMTQuMzY1NEMyLjAxMzY3IDE3LjM3NTQgNC4zODk2OCAxOS45OTA0IDcuMzI1NjggMTkuOTkwNEgxNi41NzU3TDE3LjI5NDcgMjAuNzA5NEMxNy42ODU3IDIxLjEwMDQgMTguMzQxNyAyMS4xMDA0IDE4LjczMjcgMjAuNzA5NEMxOS4xMjI3IDIwLjMxOTQgMTkuMTIyNyAxOS42NjI0IDE4LjczMjcgMTkuMjcyNEwxNy43MzI3IDE4LjI3MjRMNS43MzI2NyA2LjI3MjQ3QzUuNTM2NjcgNi4wNzY0NyA1LjI2OTY3IDUuOTkwNDIgNS4wMTM2NyA1Ljk5MDQyWk03LjA0MTY5IDEwLjQ0OTVMMTQuNTc1NyAxNy45OTA0SDcuMzI1NjhDNS41Mzg2OCAxNy45OTA0IDQuMDEzNjcgMTYuMzEyNCA0LjAxMzY3IDE0LjM2NTRDNC4wMTM2NyAxMi44NzM0IDQuOTQ3NjcgMTEuNjYyNCA2LjM1NzY3IDExLjI0MDRDNi43MTU2NyAxMS4xMzM0IDYuOTkzNjkgMTAuODAyNSA3LjA0MTY5IDEwLjQ0OTVaIiBmaWxsPSIjMzkzRTQ0Ii8+Cjwvc3ZnPgo=", fo = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9ImZvbGRlcjItZmlsbCI+CjxwYXRoIGlkPSJWZWN0b3IiIGQ9Ik01Ljk5ODA0IDIuOTkwMjNDNC4yNDQwNCAyLjk5MTIzIDMuMDA4MDUgNC4yMTcyMyAyLjk5ODA1IDUuOTkwMjNWNy45OTAyM0MyLjk5OTA1IDguMDMwMjMgMi45OTgwNSAxNi45OTAyIDIuOTk4MDUgMTYuOTkwMkMyLjk5ODA1IDE5LjE5OTIgNC43ODkwNCAyMC45OTAyIDYuOTk4MDQgMjAuOTkwMkgxNi45OThDMTkuMjA3IDIwLjk5MDIgMjAuOTk4IDE5LjE5OTIgMjAuOTk4IDE2Ljk5MDJWMTAuOTkwMkMyMC45OTcgMTAuOTA1MiAyMC45OTggOS4xNDgyNCAyMC45OTggOS4wMjEyNEMyMS4wMDUgNy4yODAyNCAxOS43MiA1Ljk5NzIzIDE3Ljk5OCA1Ljk5MDIzQzE3LjcyNiA1Ljk4OTIzIDE3LjA1MSA1Ljk4OTIzIDE3LjA2MSA1Ljk5MDIzQzE2LjEzOCA1Ljk4NzIzIDE1LjkyNSA1LjgwMzI0IDE1LjM0MiA0LjkyODI0QzE0LjQyNSAzLjU1MzI0IDEzLjY1MyAyLjk5MDIzIDExLjk5OCAyLjk5MDIzSDUuOTk4MDRaTTUuOTk4MDQgNC45OTAyM0gxMS45OThDMTIuODQzIDQuOTkwMjMgMTMuMDcxIDUuMTc3MjMgMTMuNjU0IDYuMDUyMjNDMTQuNTcxIDcuNDI3MjMgMTUuMzQzIDcuOTkwMjMgMTYuOTk4IDcuOTkwMjNDMTYuOTcyIDcuOTkxMjMgMTcuNzIyIDcuOTg5MjMgMTcuOTk4IDcuOTkwMjNDMTguNjIyIDcuOTkzMjMgMTkuMDAxIDguMzkxMjQgMTguOTk4IDkuMDIxMjRDMTguOTk4IDkuMDg1MjQgMTguOTk3IDkuNTI2MjMgMTguOTk4IDkuOTkwMjNDMTguMzU4IDkuOTkwMjMgMTguMTk4IDkuOTkwMjMgMTQuOTk4IDkuOTkwMjNDMTQuMTUzIDkuOTkwMjMgMTMuOTI1IDkuODAzMjQgMTMuMzQyIDguOTI4MjRDMTIuNDI1IDcuNTUzMjQgMTEuNjUzIDYuOTkwMjMgOS45OTgwNCA2Ljk5MDIzQzkuMTEzMDQgNi45OTAyMyA2LjQzNDA0IDYuOTkwMjMgNC45OTgwNCA2Ljk5MDIzVjUuOTkwMjNDNS4wMDIwNCA1LjMyNjIzIDUuMzQwMDQgNC45OTAyMyA1Ljk5ODA0IDQuOTkwMjNaIiBmaWxsPSIjNkM3Mjc1Ii8+CjwvZz4KPC9zdmc+Cg==", To = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9ImZvbGRlci1vcGVuLWZpbGwiPgo8cGF0aCBpZD0iVmVjdG9yIiBkPSJNNS45OTgwNSAyLjk5MDIzQzQuMzg3MDUgMi45OTAyMyAzLjAxMjA1IDQuMjc3MjMgMi45OTgwNSA1Ljk5MDIzVjE2Ljk5MDJDMi45OTgwNSAxOC4xMDQyIDMuNDUxMDUgMTkuMTA4MiA0LjE4NjA1IDE5LjgzNDJDNC41NDQwNSAyMC4xODcyIDQuOTY1MDUgMjAuNDc5MiA1LjQzNjA1IDIwLjY3ODJDNS45MTkwNSAyMC44ODEyIDYuNDU0MDUgMjAuOTkwMiA2Ljk5ODA1IDIwLjk5MDJIOC45OTgwNUgxNS45OThDMTcuMDUyIDIwLjk5MDIgMTguMDM4MSAyMC41ODUyIDE4Ljc3OTEgMTkuODY1MkMxOS4xNzcxIDE5LjQ3OTIgMTkuNjMzMSAxOC4zNDMyIDIwLjQzNjEgMTUuOTkwMkMyMC41MDAxIDE1LjgwMDIgMjEuOTQ3IDExLjMzNzIgMjEuOTY3IDExLjI3MTJDMjIuMTY1IDEwLjYyODIgMjEuNjcxIDkuOTkwMjMgMjAuOTk4IDkuOTkwMjNDMjAuODczIDkuOTkwMjMgMjAuMjEyIDkuOTkwMjMgMTkuOTk4IDkuOTkwMjNWOC45OTAyM0MxOS45OTggNy4zMzMyMyAxOC42NTUgNS45OTAyMyAxNi45OTggNS45OTAyM0gxNC45OThDMTQuMTUzIDUuOTkwMjMgMTMuOTI1IDUuODAzMjQgMTMuMzQyIDQuOTI4MjRDMTIuNDI1IDMuNTUzMjQgMTEuNjUzIDIuOTkwMjMgOS45OTgwNSAyLjk5MDIzQzkuMTIzMDUgMi45OTAyMyA2Ljg3MzA1IDIuOTkwMjMgNS45OTgwNSAyLjk5MDIzWk01Ljk5ODA1IDQuOTkwMjNDNi44NzMwNSA0Ljk5MDIzIDkuMTIzMDUgNC45OTAyMyA5Ljk5ODA1IDQuOTkwMjNDMTAuODQzIDQuOTkwMjMgMTEuMDcxMSA1LjE3NzIzIDExLjY1NDEgNi4wNTIyM0MxMi41NzExIDcuNDI3MjMgMTMuMzQzIDcuOTkwMjMgMTQuOTk4IDcuOTkwMjNIMTYuOTk4QzE3LjU1IDcuOTkwMjMgMTcuOTk4IDguNDM4MjMgMTcuOTk4IDguOTkwMjNWOS45OTAyM0MxNC41MjkgOS45OTAyMyA5LjI0ODA1IDkuOTkwMjMgNy45OTgwNSA5Ljk5MDIzQzcuNTg0MDUgOS45OTAyMyA3LjIwOTA0IDEwLjI1OTIgNy4wNjAwNCAxMC42NDYyQzcuMDYwMDQgMTAuNjQ2MiA1LjkwMjA1IDEzLjY3MTIgNC45OTgwNSAxNi4wMjEyVjUuOTkwMjNDNS4wMDMwNSA1LjQxMzIzIDUuNDU4MDUgNC45OTAyMyA1Ljk5ODA1IDQuOTkwMjNaIiBmaWxsPSIjNkM3Mjc1Ii8+CjwvZz4KPC9zdmc+Cg==", ho = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAyNCAyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuMjQ5NTYgNC42ODk0NUM1LjE3MTU2IDQuNjg5NDUgMy4yNzA1OCA2LjQwMDQ1IDIuOTM3NTggOC41MzM0NUwxLjk5OTU2IDE1LjU2NDVDMS45ODc1NiAxNS42NTQ1IDIuMDUwNTggMTUuNzI4NSAyLjA2MjU4IDE1LjgxNDVDMi4wNDg1OCAxNS45NDE1IDEuOTk5NTYgMTYuMDU4NSAxLjk5OTU2IDE2LjE4OTVWMTcuMTg5NUMxLjk5OTU2IDE5LjEyMjUgMy41NjY1NiAyMC42ODk1IDUuNDk5NTYgMjAuNjg5NUgxOC40OTk2QzIwLjQzMjYgMjAuNjg5NSAyMS45OTk2IDE5LjEyMjUgMjEuOTk5NiAxNy4xODk1VjE2LjE4OTVDMjEuOTk5NiAxNi4wNTg1IDIxLjk1MTYgMTUuOTQxNSAyMS45Mzc2IDE1LjgxNDVDMjEuOTQ5NiAxNS43Mjg1IDIyLjAxMjYgMTUuNjU0NSAyMS45OTk2IDE1LjU2NDVMMjAuOTk5NiA4LjU2NDQ1QzIwLjY2NDYgNi40MTU0NSAxOC43OTY2IDQuNjg5NDUgMTYuNzE4NiA0LjY4OTQ1SDcuMjQ5NTZaTTUuNDk5NTYgMTQuNjg5NUgxOC40OTk2QzE5LjMyODYgMTQuNjg5NSAxOS45OTk2IDE1LjM2MTUgMTkuOTk5NiAxNi4xODk1VjE3LjE4OTVDMTkuOTk5NiAxOC4wMTc1IDE5LjMyODYgMTguNjg5NSAxOC40OTk2IDE4LjY4OTVINS40OTk1NkM0LjY3MTU2IDE4LjY4OTUgMy45OTk1NiAxOC4wMTc1IDMuOTk5NTYgMTcuMTg5NVYxNi4xODk1QzMuOTk5NTYgMTUuMzYxNSA0LjY3MTU2IDE0LjY4OTUgNS40OTk1NiAxNC42ODk1Wk01Ljk5OTU2IDE1LjY4OTVDNS40NDc1NiAxNS42ODk1IDQuOTk5NTYgMTYuMTM3NSA0Ljk5OTU2IDE2LjY4OTVDNC45OTk1NiAxNy4yNDE1IDUuNDQ3NTYgMTcuNjg5NSA1Ljk5OTU2IDE3LjY4OTVDNi41NTI1NiAxNy42ODk1IDYuOTk5NTYgMTcuMjQxNSA2Ljk5OTU2IDE2LjY4OTVDNi45OTk1NiAxNi4xMzc1IDYuNTUyNTYgMTUuNjg5NSA1Ljk5OTU2IDE1LjY4OTVaTTguOTk5NTYgMTUuNjg5NUM4LjQ0NzU2IDE1LjY4OTUgNy45OTk1NiAxNi4xMzc1IDcuOTk5NTYgMTYuNjg5NUM3Ljk5OTU2IDE3LjI0MTUgOC40NDc1NiAxNy42ODk1IDguOTk5NTYgMTcuNjg5NUM5LjU1MjU2IDE3LjY4OTUgOS45OTk1NiAxNy4yNDE1IDkuOTk5NTYgMTYuNjg5NUM5Ljk5OTU2IDE2LjEzNzUgOS41NTI1NiAxNS42ODk1IDguOTk5NTYgMTUuNjg5NVoiIGZpbGw9IiM0MDQ0NDYiLz4KPC9zdmc+Cg==", Mo = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEuODgxMzQgOC42NTY0NFYxOC4zMjUxSDBWNy4wOTMzNkMwIDYuMTkzMjYgMS4wMzQ3NCA1LjY4MDAzIDEuNzU3NDggNi4yMjEzNEwxMC42OTM4IDEyLjkxMkMxMC45Njk4IDEzLjExNzkgMTEuMTMxMyAxMy40NDA5IDExLjEzMTMgMTMuNzg0VjE4LjMyMzVIOS4yNDk5MlYxNC4xNzRMMS44ODEzNCA4LjY1NjQ0WiIgZmlsbD0iIzIzMTUzNiIvPgo8cGF0aCBkPSJNMjIuMDYwNSAxOC4zMjUxVjguNjU1OTlMMTQuNDYxNiAxNC4xNzM4VjE4LjMyNTFIMTIuNTIxNVYxMy43ODU0QzEyLjUyMTUgMTMuNDQyMiAxMi42ODggMTMuMTE5MyAxMi45NzI2IDEyLjkxMzNMMjIuMTg4MiA2LjIyMjMzQzIyLjkzMzUgNS42Nzk0NCAyNC4wMDA2IDYuMTkyNjkgMjQuMDAwNiA3LjA5MjgzVjE4LjMyNTFIMjIuMDYwNVoiIGZpbGw9IiMyMzE1MzYiLz4KPC9zdmc+Cg==", ko = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjk5OCAxLjk1MzEyQzcuNjM2MDUgMS45NTMxMiAzLjk5ODA1IDMuNTEyMTMgMy45OTgwNSA1Ljk1MzEyQzMuOTk4MDUgOC4zOTQxMiA3LjYzNjA1IDkuOTUzMTIgMTEuOTk4IDkuOTUzMTJDMTYuMzYgOS45NTMxMiAxOS45OTggOC4zOTQxMiAxOS45OTggNS45NTMxMkMxOS45OTggMy41MTIxMyAxNi4zNiAxLjk1MzEyIDExLjk5OCAxLjk1MzEyWk0zLjk5ODA1IDkuNTc4MTJWMTEuOTUzMUMzLjk5ODA1IDE0LjM5NDEgNy42MzYwNSAxNS45NTMxIDExLjk5OCAxNS45NTMxQzE2LjM2IDE1Ljk1MzEgMTkuOTk4IDE0LjM5NDEgMTkuOTk4IDExLjk1MzFWOS41NzgxMkMxOC4xODQgMTEuMDY4MSAxNS4zNTYgMTEuOTUzMSAxMS45OTggMTEuOTUzMUM4LjY0MDA1IDExLjk1MzEgNS44MTIwNSAxMS4wNjgxIDMuOTk4MDUgOS41NzgxMlpNMy45OTgwNSAxNS41NzgxVjE3Ljk1MzFDMy45OTgwNSAyMC4zOTQxIDcuNjM2MDUgMjEuOTUzMSAxMS45OTggMjEuOTUzMUMxNi4zNiAyMS45NTMxIDE5Ljk5OCAyMC4zOTQxIDE5Ljk5OCAxNy45NTMxVjE1LjU3ODFDMTguMTg0IDE3LjA2ODEgMTUuMzU2IDE3Ljk1MzEgMTEuOTk4IDE3Ljk1MzFDOC42NDAwNSAxNy45NTMxIDUuODEyMDUgMTcuMDY4MSAzLjk5ODA1IDE1LjU3ODFaIiBmaWxsPSIjNDA0NDQ2Ii8+Cjwvc3ZnPgo=", vo = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjcxOSAyLjAwMzk2QzkuMTE1ODMgMi4wNzcyIDYuNjQzOSAzLjE2MzA0IDQuODI4ODkgNS4wMzA1N0MzLjAxMzg4IDYuODk4MSAxLjk5ODk4IDkuNCAyIDEyLjAwNDJDMi4wMDExOSAxNC42NTU3IDMuMDU1MzEgMTcuMTk4MSA0LjkzMDU5IDE5LjA3MjZDNi44MDU4OCAyMC45NDcgOS4zNDg4MSAyMiAxMi4wMDAzIDIyQzE0LjY1MTcgMjIgMTcuMTk0NyAyMC45NDcgMTkuMDcgMTkuMDcyNkMyMC45NDUyIDE3LjE5ODEgMjEuOTk5NCAxNC42NTU3IDIyLjAwMDUgMTIuMDA0MkMyMi4wMDExIDEwLjY2NyAyMS43MzM0IDkuMzQzMTcgMjEuMjEzMyA4LjExMTE4QzIwLjY5MzMgNi44NzkxOSAxOS45MzE0IDUuNzY0MDEgMTguOTcyOCA0LjgzMTYyQzE4LjAxNDIgMy44OTkyNCAxNi44NzgzIDMuMTY4NjEgMTUuNjMyNCAyLjY4MjkxQzE0LjM4NjQgMi4xOTcyMiAxMy4wNTU3IDEuOTY2MzUgMTEuNzE5IDIuMDAzOTZaTTEyLjAwMDMgNy4wMDQwNkMxMy4zODAzIDcuMDA0MDYgMTQuNjI0NiA3LjUxMDMyIDE1LjUzMTYgOC40MTAzNUwxNy4wMDA0IDcuMDA0MDZWMTEuMDA0MkgxNi45MDY3SDE1LjMxMjlIMTMuMDAwNEwxNC40Mzc5IDkuNTA0MTZDMTMuODIwOSA4LjkwNDE0IDEyLjk2OTYgOC41MDQxIDEyLjAzMTYgOC41MDQxQzEwLjQ4MjUgOC41MDQxIDkuMTk1MjUgOS42MDQxMiA4Ljc1MDI0IDExLjAwNDJINy4wOTM5NEM3LjU1OTk1IDguNzA0MTQgOS41ODQyMSA3LjAwNDA2IDEyLjAwMDMgNy4wMDQwNlpNNy4wMDAxNCAxMy4wMDQzSDcuMDkzODRIOC42ODc2M0gxMS4wMDAyTDkuNTYyNjYgMTQuNDEwNUMxMC4xNzk3IDE1LjAxMDYgMTEuMDMwOSAxNS40MTA2IDExLjk2OSAxNS40MTA2QzEzLjUxOCAxNS40MTA2IDE0LjgwNTMgMTQuNDA0MyAxNS4yNTAzIDEzLjAwNDNIMTYuOTA2NkMxNi40NDA2IDE1LjIwNDMgMTQuNDE2MyAxNy4wMDQzIDEyLjAwMDIgMTcuMDA0M0MxMC42MjAyIDE3LjAwNDMgOS4zNzU5IDE2LjQwNDMgOC40Njg4OCAxNS41MDQzTDcuMDAwMDkgMTcuMDA0M0w3LjAwMDE0IDEzLjAwNDNaIiBmaWxsPSIjM0U5MEYwIi8+Cjwvc3ZnPgo=";
var xo = /* @__PURE__ */ ((e) => (e.Folder = "folder", e.File = "file", e.LocalDrive = "local-drive", e.NetworkDrive = "network-drive", e.PublicDrive = "public-drive", e))(xo || {}), $o = /* @__PURE__ */ ((e) => (e.Available = "available", e.AvailableOffline = "available-offline", e.Syncing = "syncing", e.Offline = "offline", e))($o || {});
const Io = (e) => {
  switch (e) {
    case "available":
      return Do;
    case "available-offline":
      return bo;
    case "syncing":
      return vo;
    case "offline":
      return yo;
  }
}, Eo = (e) => {
  switch (e) {
    case "folder":
      return {
        icon: fo,
        expandedIcon: To
      };
    case "file":
      return {};
    case "local-drive":
      return { icon: ho };
    case "network-drive":
      return { icon: ko };
    case "public-drive":
      return { icon: Mo };
  }
}, No = (e) => {
  const {
    item: t,
    onClick: r,
    children: n,
    onDropEvent: o,
    onOptionsClick: i,
    optionsButtonProps: a,
    level: u = 0,
    buttonProps: d = {},
    ...l
  } = e, { dragProps: s, dropProps: g, isDropTarget: D } = lo(
    {
      data: t,
      onDropEvent: o
    }
  ), { className: M, ...I } = d;
  return /* @__PURE__ */ b(
    oo,
    {
      ...o && { ...s, ...g },
      level: u,
      onClick: r,
      label: t.label,
      initialOpen: t.expanded,
      className: V(D && "rounded-lg bg-[#F4F4F4]"),
      buttonProps: {
        className: V(
          "py-3 rounded-lg hover:bg-[#F1F5F9]",
          typeof M == "string" && M
        ),
        ...I
      },
      onOptionsClick: i,
      optionsButtonProps: a,
      ...t.status && { secondaryIcon: Io(t.status) },
      ...Eo(t.type),
      ...l,
      children: n
    }
  );
}, Ro = (e) => {
  const {
    items: t,
    onItemClick: r,
    onDropEvent: n,
    onItemOptionsClick: o,
    ...i
  } = e, a = (u, d = 0) => {
    var l;
    return /* @__PURE__ */ b(
      No,
      {
        item: u,
        onDropEvent: n,
        onClick: (s) => r == null ? void 0 : r(s, u),
        onOptionsClick: (s) => o == null ? void 0 : o(s, u),
        ...i,
        children: (l = u.children) == null ? void 0 : l.map((s) => a(s, d + 1))
      },
      u.id
    );
  };
  return a(t);
};
export {
  Lo as Button,
  W as CUSTOM_OBJECT_FORMAT,
  Zo as ConnectSidebar,
  po as ConnectSidebarFooter,
  mo as ConnectSidebarHeader,
  Ro as ConnectTreeView,
  No as ConnectTreeViewItem,
  Oo as DocumentEditor,
  vn as Draggable,
  Co as DraggableTarget,
  xn as DropTarget,
  Po as EditorToolbar,
  Ko as EditorWorksheet,
  $o as ItemStatus,
  xo as ItemType,
  eo as Sidebar,
  _n as SidebarFooter,
  qn as SidebarHeader,
  to as SidebarPanel,
  co as SidebarUser,
  Uo as TextInput,
  Bo as TextInputVariant,
  Yo as ToolbarButton,
  oo as TreeViewItem,
  Fo as createUseDocumentReducer,
  Vo as styles,
  Qo as stylesVariant,
  io as useDocumentReducer,
  lo as useDraggableTarget,
  ao as wrapReducer
};
//# sourceMappingURL=index.js.map
