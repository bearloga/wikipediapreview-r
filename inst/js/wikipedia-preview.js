var Ga = Object.defineProperty, Va = Object.defineProperties;
var Ka = Object.getOwnPropertyDescriptors;
var pr = Object.getOwnPropertySymbols;
var Ni = Object.prototype.hasOwnProperty, Ii = Object.prototype.propertyIsEnumerable;
var Ci = (e, r, i) => r in e ? Ga(e, r, { enumerable: !0, configurable: !0, writable: !0, value: i }) : e[r] = i, G = (e, r) => {
  for (var i in r || (r = {}))
    Ni.call(r, i) && Ci(e, i, r[i]);
  if (pr)
    for (var i of pr(r))
      Ii.call(r, i) && Ci(e, i, r[i]);
  return e;
}, _e = (e, r) => Va(e, Ka(r));
var Cr = (e, r) => {
  var i = {};
  for (var a in e)
    Ni.call(e, a) && r.indexOf(a) < 0 && (i[a] = e[a]);
  if (e != null && pr)
    for (var a of pr(e))
      r.indexOf(a) < 0 && Ii.call(e, a) && (i[a] = e[a]);
  return i;
};
var le = (e, r, i) => new Promise((a, n) => {
  var t = (c) => {
    try {
      s(i.next(c));
    } catch (d) {
      n(d);
    }
  }, l = (c) => {
    try {
      s(i.throw(c));
    } catch (d) {
      n(d);
    }
  }, s = (c) => c.done ? a(c.value) : Promise.resolve(c.value).then(t, l);
  s((i = i.apply(e, r)).next());
});
const Xa = (e, r, i = !0) => {
  const a = new XMLHttpRequest();
  a.open("GET", e), a.send(), a.addEventListener("load", () => {
    const n = i ? JSON.parse(a.responseText) : a.responseText;
    r(n);
  }), a.addEventListener("error", () => {
    r(!1, a.status);
  });
}, Nr = {}, Be = (e, r, i, a = !0, n = Xa) => {
  if (Nr[e] !== void 0) {
    i(Nr[e]);
    return;
  }
  n(e, (t, l) => {
    t ? i(Nr[e] = r(t)) : i(!1, l);
  }, a);
};
/*! @license DOMPurify 3.0.6 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.0.6/LICENSE */
const {
  entries: oa,
  setPrototypeOf: Di,
  isFrozen: Ja,
  getPrototypeOf: Za,
  getOwnPropertyDescriptor: la
} = Object;
let {
  freeze: X,
  seal: ne,
  create: sa
} = Object, {
  apply: Zr,
  construct: Qr
} = typeof Reflect != "undefined" && Reflect;
X || (X = function(r) {
  return r;
});
ne || (ne = function(r) {
  return r;
});
Zr || (Zr = function(r, i, a) {
  return r.apply(i, a);
});
Qr || (Qr = function(r, i) {
  return new r(...i);
});
const yr = ie(Array.prototype.forEach), Hi = ie(Array.prototype.pop), Ke = ie(Array.prototype.push), vr = ie(String.prototype.toLowerCase), Ir = ie(String.prototype.toString), Qa = ie(String.prototype.match), Xe = ie(String.prototype.replace), en = ie(String.prototype.indexOf), rn = ie(String.prototype.trim), ee = ie(RegExp.prototype.test), Je = an(TypeError);
function ie(e) {
  return function(r) {
    for (var i = arguments.length, a = new Array(i > 1 ? i - 1 : 0), n = 1; n < i; n++)
      a[n - 1] = arguments[n];
    return Zr(e, r, a);
  };
}
function an(e) {
  return function() {
    for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++)
      i[a] = arguments[a];
    return Qr(e, i);
  };
}
function A(e, r) {
  let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : vr;
  Di && Di(e, null);
  let a = r.length;
  for (; a--; ) {
    let n = r[a];
    if (typeof n == "string") {
      const t = i(n);
      t !== n && (Ja(r) || (r[a] = t), n = t);
    }
    e[n] = !0;
  }
  return e;
}
function Re(e) {
  const r = sa(null);
  for (const [i, a] of oa(e))
    la(e, i) !== void 0 && (r[i] = a);
  return r;
}
function _r(e, r) {
  for (; e !== null; ) {
    const a = la(e, r);
    if (a) {
      if (a.get)
        return ie(a.get);
      if (typeof a.value == "function")
        return ie(a.value);
    }
    e = Za(e);
  }
  function i(a) {
    return console.warn("fallback value for", a), null;
  }
  return i;
}
const Bi = X(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Dr = X(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Hr = X(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), nn = X(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Br = X(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), tn = X(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Ui = X(["#text"]), Fi = X(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), Ur = X(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Yi = X(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), hr = X(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), on = ne(/\{\{[\w\W]*|[\w\W]*\}\}/gm), ln = ne(/<%[\w\W]*|[\w\W]*%>/gm), sn = ne(/\${[\w\W]*}/gm), dn = ne(/^data-[\-\w.\u00B7-\uFFFF]/), gn = ne(/^aria-[\-\w]+$/), da = ne(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), cn = ne(/^(?:\w+script|data):/i), un = ne(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), ga = ne(/^html$/i);
var Gi = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  MUSTACHE_EXPR: on,
  ERB_EXPR: ln,
  TMPLIT_EXPR: sn,
  DATA_ATTR: dn,
  ARIA_ATTR: gn,
  IS_ALLOWED_URI: da,
  IS_SCRIPT_OR_DATA: cn,
  ATTR_WHITESPACE: un,
  DOCTYPE_NAME: ga
});
const mn = function() {
  return typeof window == "undefined" ? null : window;
}, fn = function(r, i) {
  if (typeof r != "object" || typeof r.createPolicy != "function")
    return null;
  let a = null;
  const n = "data-tt-policy-suffix";
  i && i.hasAttribute(n) && (a = i.getAttribute(n));
  const t = "dompurify" + (a ? "#" + a : "");
  try {
    return r.createPolicy(t, {
      createHTML(l) {
        return l;
      },
      createScriptURL(l) {
        return l;
      }
    });
  } catch (l) {
    return console.warn("TrustedTypes policy " + t + " could not be created."), null;
  }
};
function ca() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : mn();
  const r = (j) => ca(j);
  if (r.version = "3.0.6", r.removed = [], !e || !e.document || e.document.nodeType !== 9)
    return r.isSupported = !1, r;
  let {
    document: i
  } = e;
  const a = i, n = a.currentScript, {
    DocumentFragment: t,
    HTMLTemplateElement: l,
    Node: s,
    Element: c,
    NodeFilter: d,
    NamedNodeMap: p = e.NamedNodeMap || e.MozNamedAttrMap,
    HTMLFormElement: _,
    DOMParser: k,
    trustedTypes: g
  } = e, u = c.prototype, y = _r(u, "cloneNode"), f = _r(u, "nextSibling"), S = _r(u, "childNodes"), T = _r(u, "parentNode");
  if (typeof l == "function") {
    const j = i.createElement("template");
    j.content && j.content.ownerDocument && (i = j.content.ownerDocument);
  }
  let h, b = "";
  const {
    implementation: $,
    createNodeIterator: I,
    createDocumentFragment: E,
    getElementsByTagName: P
  } = i, {
    importNode: W
  } = a;
  let z = {};
  r.isSupported = typeof oa == "function" && typeof T == "function" && $ && $.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: M,
    ERB_EXPR: L,
    TMPLIT_EXPR: N,
    DATA_ATTR: oe,
    ARIA_ATTR: J,
    IS_SCRIPT_OR_DATA: ge,
    ATTR_WHITESPACE: ce
  } = Gi;
  let {
    IS_ALLOWED_URI: ye
  } = Gi, R = null;
  const pi = A({}, [...Bi, ...Dr, ...Hr, ...Br, ...Ui]);
  let D = null;
  const yi = A({}, [...Fi, ...Ur, ...Yi, ...hr]);
  let q = Object.seal(sa(null, {
    tagNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: !1
    }
  })), Ye = null, $r = null, _i = !0, Ar = !0, hi = !1, wi = !0, xe = !1, Te = !1, Er = !1, zr = !1, Me = !1, gr = !1, cr = !1, vi = !0, ki = !1;
  const Ca = "user-content-";
  let xr = !0, Ge = !1, Pe = {}, Le = null;
  const bi = A({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let ji = null;
  const Si = A({}, ["audio", "video", "img", "source", "image", "track"]);
  let Mr = null;
  const Ti = A({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), ur = "http://www.w3.org/1998/Math/MathML", mr = "http://www.w3.org/2000/svg", ue = "http://www.w3.org/1999/xhtml";
  let qe = ue, Pr = !1, Lr = null;
  const Na = A({}, [ur, mr, ue], Ir);
  let Oe = null;
  const Ia = ["application/xhtml+xml", "text/html"], Da = "text/html";
  let H = null, We = null;
  const Ha = i.createElement("form"), Oi = function(o) {
    return o instanceof RegExp || o instanceof Function;
  }, qr = function() {
    let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(We && We === o)) {
      if ((!o || typeof o != "object") && (o = {}), o = Re(o), Oe = // eslint-disable-next-line unicorn/prefer-includes
      Ia.indexOf(o.PARSER_MEDIA_TYPE) === -1 ? Oe = Da : Oe = o.PARSER_MEDIA_TYPE, H = Oe === "application/xhtml+xml" ? Ir : vr, R = "ALLOWED_TAGS" in o ? A({}, o.ALLOWED_TAGS, H) : pi, D = "ALLOWED_ATTR" in o ? A({}, o.ALLOWED_ATTR, H) : yi, Lr = "ALLOWED_NAMESPACES" in o ? A({}, o.ALLOWED_NAMESPACES, Ir) : Na, Mr = "ADD_URI_SAFE_ATTR" in o ? A(
        Re(Ti),
        // eslint-disable-line indent
        o.ADD_URI_SAFE_ATTR,
        // eslint-disable-line indent
        H
        // eslint-disable-line indent
      ) : Ti, ji = "ADD_DATA_URI_TAGS" in o ? A(
        Re(Si),
        // eslint-disable-line indent
        o.ADD_DATA_URI_TAGS,
        // eslint-disable-line indent
        H
        // eslint-disable-line indent
      ) : Si, Le = "FORBID_CONTENTS" in o ? A({}, o.FORBID_CONTENTS, H) : bi, Ye = "FORBID_TAGS" in o ? A({}, o.FORBID_TAGS, H) : {}, $r = "FORBID_ATTR" in o ? A({}, o.FORBID_ATTR, H) : {}, Pe = "USE_PROFILES" in o ? o.USE_PROFILES : !1, _i = o.ALLOW_ARIA_ATTR !== !1, Ar = o.ALLOW_DATA_ATTR !== !1, hi = o.ALLOW_UNKNOWN_PROTOCOLS || !1, wi = o.ALLOW_SELF_CLOSE_IN_ATTR !== !1, xe = o.SAFE_FOR_TEMPLATES || !1, Te = o.WHOLE_DOCUMENT || !1, Me = o.RETURN_DOM || !1, gr = o.RETURN_DOM_FRAGMENT || !1, cr = o.RETURN_TRUSTED_TYPE || !1, zr = o.FORCE_BODY || !1, vi = o.SANITIZE_DOM !== !1, ki = o.SANITIZE_NAMED_PROPS || !1, xr = o.KEEP_CONTENT !== !1, Ge = o.IN_PLACE || !1, ye = o.ALLOWED_URI_REGEXP || da, qe = o.NAMESPACE || ue, q = o.CUSTOM_ELEMENT_HANDLING || {}, o.CUSTOM_ELEMENT_HANDLING && Oi(o.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (q.tagNameCheck = o.CUSTOM_ELEMENT_HANDLING.tagNameCheck), o.CUSTOM_ELEMENT_HANDLING && Oi(o.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (q.attributeNameCheck = o.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), o.CUSTOM_ELEMENT_HANDLING && typeof o.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (q.allowCustomizedBuiltInElements = o.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), xe && (Ar = !1), gr && (Me = !0), Pe && (R = A({}, [...Ui]), D = [], Pe.html === !0 && (A(R, Bi), A(D, Fi)), Pe.svg === !0 && (A(R, Dr), A(D, Ur), A(D, hr)), Pe.svgFilters === !0 && (A(R, Hr), A(D, Ur), A(D, hr)), Pe.mathMl === !0 && (A(R, Br), A(D, Yi), A(D, hr))), o.ADD_TAGS && (R === pi && (R = Re(R)), A(R, o.ADD_TAGS, H)), o.ADD_ATTR && (D === yi && (D = Re(D)), A(D, o.ADD_ATTR, H)), o.ADD_URI_SAFE_ATTR && A(Mr, o.ADD_URI_SAFE_ATTR, H), o.FORBID_CONTENTS && (Le === bi && (Le = Re(Le)), A(Le, o.FORBID_CONTENTS, H)), xr && (R["#text"] = !0), Te && A(R, ["html", "head", "body"]), R.table && (A(R, ["tbody"]), delete Ye.tbody), o.TRUSTED_TYPES_POLICY) {
        if (typeof o.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw Je('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof o.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw Je('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        h = o.TRUSTED_TYPES_POLICY, b = h.createHTML("");
      } else
        h === void 0 && (h = fn(g, n)), h !== null && typeof b == "string" && (b = h.createHTML(""));
      X && X(o), We = o;
    }
  }, $i = A({}, ["mi", "mo", "mn", "ms", "mtext"]), Ai = A({}, ["foreignobject", "desc", "title", "annotation-xml"]), Ba = A({}, ["title", "style", "font", "a", "script"]), fr = A({}, Dr);
  A(fr, Hr), A(fr, nn);
  const Wr = A({}, Br);
  A(Wr, tn);
  const Ua = function(o) {
    let m = T(o);
    (!m || !m.tagName) && (m = {
      namespaceURI: qe,
      tagName: "template"
    });
    const v = vr(o.tagName), x = vr(m.tagName);
    return Lr[o.namespaceURI] ? o.namespaceURI === mr ? m.namespaceURI === ue ? v === "svg" : m.namespaceURI === ur ? v === "svg" && (x === "annotation-xml" || $i[x]) : !!fr[v] : o.namespaceURI === ur ? m.namespaceURI === ue ? v === "math" : m.namespaceURI === mr ? v === "math" && Ai[x] : !!Wr[v] : o.namespaceURI === ue ? m.namespaceURI === mr && !Ai[x] || m.namespaceURI === ur && !$i[x] ? !1 : !Wr[v] && (Ba[v] || !fr[v]) : !!(Oe === "application/xhtml+xml" && Lr[o.namespaceURI]) : !1;
  }, $e = function(o) {
    Ke(r.removed, {
      element: o
    });
    try {
      o.parentNode.removeChild(o);
    } catch (m) {
      o.remove();
    }
  }, Rr = function(o, m) {
    try {
      Ke(r.removed, {
        attribute: m.getAttributeNode(o),
        from: m
      });
    } catch (v) {
      Ke(r.removed, {
        attribute: null,
        from: m
      });
    }
    if (m.removeAttribute(o), o === "is" && !D[o])
      if (Me || gr)
        try {
          $e(m);
        } catch (v) {
        }
      else
        try {
          m.setAttribute(o, "");
        } catch (v) {
        }
  }, Ei = function(o) {
    let m = null, v = null;
    if (zr)
      o = "<remove></remove>" + o;
    else {
      const Y = Qa(o, /^[\r\n\t ]+/);
      v = Y && Y[0];
    }
    Oe === "application/xhtml+xml" && qe === ue && (o = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + o + "</body></html>");
    const x = h ? h.createHTML(o) : o;
    if (qe === ue)
      try {
        m = new k().parseFromString(x, Oe);
      } catch (Y) {
      }
    if (!m || !m.documentElement) {
      m = $.createDocument(qe, "template", null);
      try {
        m.documentElement.innerHTML = Pr ? b : x;
      } catch (Y) {
      }
    }
    const F = m.body || m.documentElement;
    return o && v && F.insertBefore(i.createTextNode(v), F.childNodes[0] || null), qe === ue ? P.call(m, Te ? "html" : "body")[0] : Te ? m.documentElement : F;
  }, zi = function(o) {
    return I.call(
      o.ownerDocument || o,
      o,
      // eslint-disable-next-line no-bitwise
      d.SHOW_ELEMENT | d.SHOW_COMMENT | d.SHOW_TEXT,
      null
    );
  }, Fa = function(o) {
    return o instanceof _ && (typeof o.nodeName != "string" || typeof o.textContent != "string" || typeof o.removeChild != "function" || !(o.attributes instanceof p) || typeof o.removeAttribute != "function" || typeof o.setAttribute != "function" || typeof o.namespaceURI != "string" || typeof o.insertBefore != "function" || typeof o.hasChildNodes != "function");
  }, xi = function(o) {
    return typeof s == "function" && o instanceof s;
  }, me = function(o, m, v) {
    z[o] && yr(z[o], (x) => {
      x.call(r, m, v, We);
    });
  }, Mi = function(o) {
    let m = null;
    if (me("beforeSanitizeElements", o, null), Fa(o))
      return $e(o), !0;
    const v = H(o.nodeName);
    if (me("uponSanitizeElement", o, {
      tagName: v,
      allowedTags: R
    }), o.hasChildNodes() && !xi(o.firstElementChild) && ee(/<[/\w]/g, o.innerHTML) && ee(/<[/\w]/g, o.textContent))
      return $e(o), !0;
    if (!R[v] || Ye[v]) {
      if (!Ye[v] && Li(v) && (q.tagNameCheck instanceof RegExp && ee(q.tagNameCheck, v) || q.tagNameCheck instanceof Function && q.tagNameCheck(v)))
        return !1;
      if (xr && !Le[v]) {
        const x = T(o) || o.parentNode, F = S(o) || o.childNodes;
        if (F && x) {
          const Y = F.length;
          for (let Z = Y - 1; Z >= 0; --Z)
            x.insertBefore(y(F[Z], !0), f(o));
        }
      }
      return $e(o), !0;
    }
    return o instanceof c && !Ua(o) || (v === "noscript" || v === "noembed" || v === "noframes") && ee(/<\/no(script|embed|frames)/i, o.innerHTML) ? ($e(o), !0) : (xe && o.nodeType === 3 && (m = o.textContent, yr([M, L, N], (x) => {
      m = Xe(m, x, " ");
    }), o.textContent !== m && (Ke(r.removed, {
      element: o.cloneNode()
    }), o.textContent = m)), me("afterSanitizeElements", o, null), !1);
  }, Pi = function(o, m, v) {
    if (vi && (m === "id" || m === "name") && (v in i || v in Ha))
      return !1;
    if (!(Ar && !$r[m] && ee(oe, m))) {
      if (!(_i && ee(J, m))) {
        if (!D[m] || $r[m]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(Li(o) && (q.tagNameCheck instanceof RegExp && ee(q.tagNameCheck, o) || q.tagNameCheck instanceof Function && q.tagNameCheck(o)) && (q.attributeNameCheck instanceof RegExp && ee(q.attributeNameCheck, m) || q.attributeNameCheck instanceof Function && q.attributeNameCheck(m)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            m === "is" && q.allowCustomizedBuiltInElements && (q.tagNameCheck instanceof RegExp && ee(q.tagNameCheck, v) || q.tagNameCheck instanceof Function && q.tagNameCheck(v)))
          )
            return !1;
        } else if (!Mr[m]) {
          if (!ee(ye, Xe(v, ce, ""))) {
            if (!((m === "src" || m === "xlink:href" || m === "href") && o !== "script" && en(v, "data:") === 0 && ji[o])) {
              if (!(hi && !ee(ge, Xe(v, ce, "")))) {
                if (v)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, Li = function(o) {
    return o.indexOf("-") > 0;
  }, qi = function(o) {
    me("beforeSanitizeAttributes", o, null);
    const {
      attributes: m
    } = o;
    if (!m)
      return;
    const v = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: D
    };
    let x = m.length;
    for (; x--; ) {
      const F = m[x], {
        name: Y,
        namespaceURI: Z,
        value: Ae
      } = F, Ve = H(Y);
      let Q = Y === "value" ? Ae : rn(Ae);
      if (v.attrName = Ve, v.attrValue = Q, v.keepAttr = !0, v.forceKeepAttr = void 0, me("uponSanitizeAttribute", o, v), Q = v.attrValue, v.forceKeepAttr || (Rr(Y, o), !v.keepAttr))
        continue;
      if (!wi && ee(/\/>/i, Q)) {
        Rr(Y, o);
        continue;
      }
      xe && yr([M, L, N], (Ri) => {
        Q = Xe(Q, Ri, " ");
      });
      const Wi = H(o.nodeName);
      if (Pi(Wi, Ve, Q)) {
        if (ki && (Ve === "id" || Ve === "name") && (Rr(Y, o), Q = Ca + Q), h && typeof g == "object" && typeof g.getAttributeType == "function" && !Z)
          switch (g.getAttributeType(Wi, Ve)) {
            case "TrustedHTML": {
              Q = h.createHTML(Q);
              break;
            }
            case "TrustedScriptURL": {
              Q = h.createScriptURL(Q);
              break;
            }
          }
        try {
          Z ? o.setAttributeNS(Z, Y, Q) : o.setAttribute(Y, Q), Hi(r.removed);
        } catch (Ri) {
        }
      }
    }
    me("afterSanitizeAttributes", o, null);
  }, Ya = function j(o) {
    let m = null;
    const v = zi(o);
    for (me("beforeSanitizeShadowDOM", o, null); m = v.nextNode(); )
      me("uponSanitizeShadowNode", m, null), !Mi(m) && (m.content instanceof t && j(m.content), qi(m));
    me("afterSanitizeShadowDOM", o, null);
  };
  return r.sanitize = function(j) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, m = null, v = null, x = null, F = null;
    if (Pr = !j, Pr && (j = "<!-->"), typeof j != "string" && !xi(j))
      if (typeof j.toString == "function") {
        if (j = j.toString(), typeof j != "string")
          throw Je("dirty is not a string, aborting");
      } else
        throw Je("toString is not a function");
    if (!r.isSupported)
      return j;
    if (Er || qr(o), r.removed = [], typeof j == "string" && (Ge = !1), Ge) {
      if (j.nodeName) {
        const Ae = H(j.nodeName);
        if (!R[Ae] || Ye[Ae])
          throw Je("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (j instanceof s)
      m = Ei("<!---->"), v = m.ownerDocument.importNode(j, !0), v.nodeType === 1 && v.nodeName === "BODY" || v.nodeName === "HTML" ? m = v : m.appendChild(v);
    else {
      if (!Me && !xe && !Te && // eslint-disable-next-line unicorn/prefer-includes
      j.indexOf("<") === -1)
        return h && cr ? h.createHTML(j) : j;
      if (m = Ei(j), !m)
        return Me ? null : cr ? b : "";
    }
    m && zr && $e(m.firstChild);
    const Y = zi(Ge ? j : m);
    for (; x = Y.nextNode(); )
      Mi(x) || (x.content instanceof t && Ya(x.content), qi(x));
    if (Ge)
      return j;
    if (Me) {
      if (gr)
        for (F = E.call(m.ownerDocument); m.firstChild; )
          F.appendChild(m.firstChild);
      else
        F = m;
      return (D.shadowroot || D.shadowrootmode) && (F = W.call(a, F, !0)), F;
    }
    let Z = Te ? m.outerHTML : m.innerHTML;
    return Te && R["!doctype"] && m.ownerDocument && m.ownerDocument.doctype && m.ownerDocument.doctype.name && ee(ga, m.ownerDocument.doctype.name) && (Z = "<!DOCTYPE " + m.ownerDocument.doctype.name + `>
` + Z), xe && yr([M, L, N], (Ae) => {
      Z = Xe(Z, Ae, " ");
    }), h && cr ? h.createHTML(Z) : Z;
  }, r.setConfig = function() {
    let j = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    qr(j), Er = !0;
  }, r.clearConfig = function() {
    We = null, Er = !1;
  }, r.isValidAttribute = function(j, o, m) {
    We || qr({});
    const v = H(j), x = H(o);
    return Pi(v, x, m);
  }, r.addHook = function(j, o) {
    typeof o == "function" && (z[j] = z[j] || [], Ke(z[j], o));
  }, r.removeHook = function(j) {
    if (z[j])
      return Hi(z[j]);
  }, r.removeHooks = function(j) {
    z[j] && (z[j] = []);
  }, r.removeAllHooks = function() {
    z = {};
  }, r;
}
var pn = ca();
const yn = (e) => {
  let i = e;
  for (let a = 0; a < 5; a++) {
    const n = decodeURIComponent(i);
    if (n === i)
      return n;
    i = n;
  }
  return i;
}, _n = (e) => {
  const r = [
    // https://zh.wikipedia.org/wiki/前岐镇"
    // https://en.wikipedia.org/wiki/Cat#Section
    /^https?:\/\/([\w-]{2,}\.)?(m\.)?wikipedia\.org\/wiki\/([^?]+)/,
    // https://en.wikipedia.org/w/index.php?title=Cat
    // https://zh.wikipedia.org/w/index.php?title=太阳帆&action=purge
    /^https?:\/\/([\w-]{2,}\.)?(m\.)?wikipedia\.org\/w\/index.php\?title=([^&]+)/
  ];
  for (let i = 0; i < r.length; i++) {
    const a = r[i].exec(e);
    if (a)
      return {
        lang: a[1] ? a[1].slice(0, -1) : "en",
        mobile: !!a[2],
        title: yn(a[3])
      };
  }
  return null;
}, U = "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0, ua = () => window.navigator.onLine, ma = (e) => ["ar", "arc", "arz", "dv", "fa", "ha", "he", "khw", "ks", "ku", "ps", "ur", "yi", "pnb", "ckb", "mzn", "glk", "ug", "sd", "azb", "lrc"].indexOf(e) === -1 ? "ltr" : "rtl", hn = {
  format: "json",
  formatversion: 2,
  origin: "*"
}, fa = (e, r) => (r = G(G({}, hn), r), `https://${e}.wikipedia.org/w/api.php` + "?" + Object.keys(r).map((a) => `${a}=${encodeURIComponent(r[a])}`).join("&")), wn = (e) => e.replace(/https:\/\/(.*?)\./, (r) => r + "m."), Vi = (e) => {
  const r = new window.DOMParser().parseFromString(e, "text/html");
  for (const i of r.querySelectorAll("span"))
    i.style.display === "none" && i.remove();
  return r.body.textContent || "";
}, vn = (e) => pn.sanitize(e), Ki = () => ({ height: window.innerHeight, width: window.innerWidth }), nr = () => "wprov=wppw2" + (U ? "t" : ""), br = (e, r, i, a = !0) => `https://${e}${i ? ".m" : ""}.wikipedia.org/wiki/${encodeURIComponent(r)}${a ? `?${nr()}` : ""}`, pa = () => {
  console.log("Wikipedia Preview - version 1.11.0 (3301b3b)");
}, ei = (...e) => {
  console.error.apply(console, e);
}, kn = (e) => typeof e == "string" ? document.querySelector(e) : e, bn = {
  "@metadata": {
    authors: [
      "MRidhaAJ"
    ]
  },
  "continue-reading": "إقره بعد",
  "gallery-loading-error": "صار شي غلط وإنته تحمل هاي الصورة",
  "gallery-loading-error-offline": "ماكو نت",
  "gallery-loading-error-refresh": "حدث",
  "gallery-loading-still": "بعده جاي يحمل",
  "gallery-unknown-author": "المؤلف ما تعرفه",
  "preview-error-message": "أكو مشكلة وإنته تعرض النتيجة",
  "preview-console-error-message": "العرض مو موجود لهاي المقالة '1$' (لغة:2$)",
  "read-on-wiki": "إقرا على ويكيبيديا",
  "read-more": "إقرا بعد على ويكيبيديا",
  "preview-disambiguation-message": "هاذ العنوان <strong>$1>/strong يشبه أكثر من مقالة وحدة على ويكيبيديا.",
  "preview-offline-message": "ماكو نت",
  "preview-offline-cta": "عيدها مرة ثانية"
}, jn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: bn
}, Symbol.toStringTag, { value: "Module" })), Sn = {
  "@metadata": {
    authors: [
      "Katelem"
    ]
  },
  "continue-reading": "Fo isi kifuk",
  "read-more": "Fuk owuwa ofifi me Wìkìpedia"
}, Tn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Sn
}, Symbol.toStringTag, { value: "Module" })), On = {
  "@metadata": {
    authors: [
      "Proabscorp!"
    ]
  },
  "continue-reading": "पढ़ना जारी रखौ",
  "gallery-loading-error": "हैय चित्र क लोड करै मँ त्रुटि होलौ छेलै",
  "gallery-loading-error-offline": "कोय इंटरनेट कनेक्शन उपलब्ध नाय छौं।",
  "gallery-loading-error-refresh": "टटका करौ",
  "gallery-loading-still": "अभीयो लोड होय रहलौ छौं",
  "gallery-unknown-author": "लेखक अज्ञात छौं",
  "preview-error-message": "हैय पूर्वावलोकन क प्रदर्शित करै घड़ियाँ एगो समस्या होलौं।",
  "preview-console-error-message": "लेख '$1' लेली पूर्वावलोकन अनुपलब्ध (भाषा: $2)",
  "read-on-wiki": "विकिपीडिया प पढ़ौ",
  "read-more": "विकिपीडिया प आरू पढ़ौ",
  "preview-disambiguation-message": "शीर्षक <strong>$1</strong> विकिपीडिया प एगो सँ अधिक लेख सँ संबंधित छै।",
  "preview-offline-message": "कोय इंटरनेट कनेक्शन उपलब्ध नाय छौं।",
  "preview-offline-cta": "फेनु प्रयास करौ"
}, $n = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: On
}, Symbol.toStringTag, { value: "Module" })), An = {
  "@metadata": {
    authors: [
      "Hhaboh162002",
      "Meno25",
      "NEHAOUA",
      "محمد أحمد عبد الفتاح"
    ]
  },
  "continue-reading": "مواصلة القراءة",
  "gallery-loading-error": "حدث خطأ أثناء تحميل هذه الصورة",
  "gallery-loading-error-offline": "لا يوجد اتصال متاح بالإنترنت.",
  "gallery-loading-error-refresh": "تحديث",
  "gallery-loading-still": "جاري التحميل",
  "gallery-unknown-author": "المؤلف غير معروف",
  "preview-error-message": "كانت هناك مشكلة في عرض هذه المعاينة.",
  "preview-console-error-message": "العرض غير متوفر للمقالة '$1' (اللغة: $2)",
  "read-on-wiki": "اقرأ على ويكيبيديا",
  "read-more": "اقرأ المزيد عن ويكيبيديا",
  "preview-disambiguation-message": "العنوان <strong>$1</strong> ذو صلة بأكثر من مقالة واحدة على ويكيبيديا.",
  "preview-offline-message": "لا يوجد اتصال متاح بالإنترنت.",
  "preview-offline-cta": "حاول مرة أخرى"
}, En = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: An
}, Symbol.toStringTag, { value: "Module" })), zn = {
  "@metadata": {
    authors: [
      "Mohsin Ali"
    ]
  },
  "continue-reading": "পঢ়া অব্যাহত ৰাখক",
  "gallery-loading-error": "এই ছবিখন ল'ড কৰোঁতে কিবা ত্ৰুটি ঘটিছে",
  "gallery-loading-error-offline": "ইণ্টাৰনেট সংযোগ উপলব্ধ নহয়।",
  "gallery-loading-error-refresh": "সতেজ কৰক",
  "gallery-loading-still": "এতিয়াও ল'ড হৈ আছে",
  "gallery-unknown-author": "লেখক অজ্ঞাত",
  "preview-error-message": "এই পূৰ্বলোকনটো দেখুৱাওঁতে কিবা সমস্যা হৈছে।",
  "preview-console-error-message": "প্ৰবন্ধ '$1'ৰ বাবে পূৰ্বলোকন উপলব্ধ নহয় (ভাষা: $2)",
  "read-on-wiki": "ৱিকিপিডিয়াত পঢ়ক",
  "read-more": "ৱিকিপিডিয়াত অধিক পঢ়ক",
  "preview-disambiguation-message": "<strong>$1</strong> শীৰ্ষকটো ৱিকিপিডিয়াৰ একাধিক প্ৰবন্ধৰ সৈতে সম্পৰ্কিত।",
  "preview-offline-message": "ইণ্টাৰনেট সংযোগ উপলব্ধ নহয়।",
  "preview-offline-cta": "আকৌ চেষ্টা কৰক"
}, xn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: zn
}, Symbol.toStringTag, { value: "Module" })), Mn = {
  "@metadata": {
    authors: [
      "Augustus A C",
      "Gazimagomedov",
      "Omarov M."
    ]
  },
  "continue-reading": "Жеги цӀализе",
  "gallery-loading-error": "Гьаб сурат жаниреххулаго мекъ лӀугьана",
  "gallery-loading-error-offline": "Интернеталде рухь гьечӀо.",
  "gallery-loading-error-refresh": "ЦӀигьабизе",
  "gallery-loading-still": "ГъоркьцӀай унеб буго",
  "gallery-unknown-author": "Автор лъларо",
  "preview-error-message": "Цебеккун хал гьабулеб мехалъ гъалатӀ лъугӀана",
  "preview-console-error-message": "'$1' макъалаялъул цебеккун хал гьабун бажаруларо (мацӀ: $2)",
  "read-on-wiki": "Википедиялда цӀализе",
  "read-more": "ЦӀикӀкӀун цӀале Википедиялда",
  "preview-disambiguation-message": "Гьаб <strong>$1</strong> абураб цӀар Википедиялда бугеб чанго гьумералъе данде ккола.",
  "preview-offline-message": "Интернеталде рухь гьечӀо.",
  "preview-offline-cta": "Цоги нухалъ хӀалбихье"
}, Pn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Mn
}, Symbol.toStringTag, { value: "Module" })), Ln = {
  "@metadata": {
    authors: [
      "AZISS",
      "Şeyx Şamil"
    ]
  },
  "continue-reading": "Oxumağa davam et",
  "gallery-loading-error": "Bu şəkili yükləyərkən xəta baş verdi",
  "gallery-loading-error-offline": "İnternet bağlantısı yoxdur.",
  "gallery-loading-error-refresh": "Yenilə",
  "gallery-loading-still": "Hələ yüklənir",
  "gallery-unknown-author": "Naməlum müəllif",
  "preview-error-message": "Səhifəyə ilkin baxış göstərilməsi ilə bağlı çətinlik yarandı",
  "preview-console-error-message": "' $1 ' məqaləsi üçün önizləmə mümkün deyil (Dil: $2 )",
  "read-on-wiki": "Vikipediyada oxu",
  "read-more": "Vikipediyada daha ətraflı oxu",
  "preview-disambiguation-message": "<strong>$1</strong> başlığı Vikipediyada birdən çox məqalə ilə bağlıdır.",
  "preview-offline-message": "İnternet bağlantısı yoxdur.",
  "preview-offline-cta": "Yenidən cəhd edin"
}, qn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ln
}, Symbol.toStringTag, { value: "Module" })), Wn = {
  "@metadata": {
    authors: [
      "Roustammr",
      "Sagan"
    ]
  },
  "continue-reading": "Уҡыуҙы дауам итергә",
  "gallery-loading-error": "Рәсемде йөкмәткән ваҡытта хата килеп сыҡты",
  "gallery-loading-error-offline": "Интернетҡа тоташыу юҡ",
  "gallery-loading-error-refresh": "Яңыртырға",
  "gallery-loading-still": "Тәйәү дауам ителә",
  "gallery-unknown-author": "Билдәһеҙ автор",
  "preview-error-message": "Алдан ҡараған ваҡытта хата килеп сыҡты",
  "preview-console-error-message": "'$1' мәҡәләһен алдан ҡарап булмай (Тел: $2)",
  "read-on-wiki": "Википедияла уҡырға",
  "read-more": "Был турала күберәк Википедияла уҡырға",
  "preview-disambiguation-message": "<strong>$1</strong> исеме Википедияла берҙән күберәк мәҡәлә исеменә ҡарай",
  "preview-offline-message": "Интернетҡа тоташыу юҡ",
  "preview-offline-cta": "Яңынан ҡабатлап ҡарарға"
}, Rn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Wn
}, Symbol.toStringTag, { value: "Module" })), Cn = {
  "@metadata": {
    authors: [
      "Chinamoonroll",
      "Joseagush"
    ]
  },
  "continue-reading": "Lanturang ngawacén",
  "gallery-loading-error": "Wénten sané iwang ri tatkala uah gambar",
  "gallery-loading-error-offline": "Nénten wénten konéksi internét.",
  "gallery-loading-error-refresh": "Segerang",
  "gallery-loading-still": "Tasih ngantosin",
  "gallery-unknown-author": "$1 Panyurat nénten kauningin",
  "preview-error-message": "Wénten pikobet rikala ngédengang pratayang puniki.",
  "preview-console-error-message": "Pracingak tqn kasedia antuk suratan '$1' (Basa: $2)",
  "read-on-wiki": "Wacén ring Wikipédia",
  "read-more": "Lanturang wacén ring Wikipédia",
  "preview-disambiguation-message": "Murda <strong>$1</strong> kakait langkung saking satunggal suratan ring Wikipédia.",
  "preview-offline-message": "Nénten wénten konéksi internét.",
  "preview-offline-cta": "Coba malih"
}, Nn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Cn
}, Symbol.toStringTag, { value: "Module" })), In = {
  "@metadata": {
    authors: [
      "Mucalexx"
    ]
  },
  "continue-reading": "Mi'm lessen weiderdoah",
  "gallery-loading-error": "Ban Loon voh dém Büdel hod's an Feeler geem.",
  "gallery-loading-error-offline": "Es is koah Internetvabindung vurhánden",
  "gallery-loading-error-refresh": "Aktualisian",
  "gallery-loading-still": "Werd noh gloon",
  "gallery-unknown-author": "Urheewer néd bekánnt",
  "preview-error-message": "Es hod a Próblém ba da Áhzoag vo dera Vurschau geem.",
  "preview-console-error-message": "Vurschau fier Artiké „$1“ néd vafiagbor (Sprooch: $2)",
  "read-on-wiki": "In da Wikipedia leesen",
  "read-more": "Mearer ba da Wikipedia",
  "preview-disambiguation-message": "Da Titel <strong>$1</strong> beziagt sé auf mearer ois wia oan Artiké a'da Wikipedia.",
  "preview-offline-message": "Es is koah Internetvabindung vurhánden",
  "preview-offline-cta": "Nohamoi vasuachen"
}, Dn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: In
}, Symbol.toStringTag, { value: "Module" })), Hn = {
  "@metadata": {
    authors: [
      "Moshtank"
    ]
  },
  "continue-reading": "وانگءِ دامدار",
  "gallery-loading-error": "اے اکسءِ گݔجگءِ ٹݔما مِشتِکے پݔش آتک",
  "gallery-loading-error-offline": "شمئی اینترنت کَھت اِنت۔",
  "gallery-loading-error-refresh": "نۏک کنگ",
  "gallery-loading-still": "ھنگت گݔجَگئن/لود بییگئن",
  "gallery-unknown-author": "ناپججارݔن لِککۏک",
  "preview-error-message": "اے پݔشسۏجءِ سۏج دیگ ٹݔما مِشتِکے پݔش آتک۔",
  "preview-console-error-message": "پݔشسۏج پہ '$1' ءِ نبشتانکا دسرسا نئت(زبان:$2)",
  "read-on-wiki": "ویکیپدیاءِ سرئی بوان",
  "read-more": "گݔشتر ویکی پدیاءِ سرا بوانی",
  "preview-disambiguation-message": "سرگال <strong>$1</strong> مہ ویکیپدیا گۏن گݔش چہ یک نبشتانکے امگرنچ اِنت۔",
  "preview-offline-message": "شمئی اینترنت کَھت اِنت۔",
  "preview-offline-cta": "پدا کۏشست کن"
}, Bn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Hn
}, Symbol.toStringTag, { value: "Module" })), Un = {
  "@metadata": {
    authors: [
      "Renessaince",
      "W"
    ]
  },
  "continue-reading": "Працягваць чытаньне",
  "gallery-loading-error": "Пры запампоўцы гэтага відарысу здарылася памылка.",
  "gallery-loading-error-offline": "Няма даступнага злучэньня зь Сецівам.",
  "gallery-loading-error-refresh": "Абнавіць",
  "gallery-loading-still": "Дагэтуль пампуецца",
  "gallery-unknown-author": "Творца невядомы(-ая)",
  "preview-error-message": "Падчас адлюстраваньня гэтага перадпрагляду ўзьнікла складанасьць.",
  "preview-console-error-message": "Прагляд для артыкулу '$1' немагчымы (мова: $2)",
  "read-on-wiki": "Чытаць у Вікіпэдыі",
  "read-more": "Чытаць больш у Вікіпэдыі",
  "preview-disambiguation-message": "Загаловак <strong>$1</strong> тычыцца больш як аднаго артыкула ў Вікіпэдыі.",
  "preview-offline-message": "Няма даступнага злучэньня зь Сецівам.",
  "preview-offline-cta": "Спрабаваць зноў"
}, Fn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Un
}, Symbol.toStringTag, { value: "Module" })), Yn = {
  "@metadata": {
    authors: [
      "Bangrapip"
    ]
  },
  "continue-reading": "Terus Ngebaca",
  "gallery-loading-error": "Ada ngablu pas munggah ni gambar",
  "gallery-loading-error-offline": "Kaga' ada bungselan internèt.",
  "gallery-loading-error-refresh": "Segerin",
  "gallery-loading-still": "Masing munggah",
  "gallery-unknown-author": "Mualip kaga' ditauin",
  "preview-error-message": "Ada mas'alah pas mampangin ni terawangan.",
  "preview-console-error-message": "Terawangan kaga' ada bakal artikel '$' (Basa: $2)",
  "read-on-wiki": "Baca di Wikipédi",
  "read-more": "Baca lebi lanjut pasal Wikipédi",
  "preview-disambiguation-message": "Judul <strong>$1</strong> ada kaètan ama lebi deri atu artikel di Wikipédi.",
  "preview-offline-message": "Kaga' ada bungselan internèt.",
  "preview-offline-cta": "Jal lagi"
}, Gn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Yn
}, Symbol.toStringTag, { value: "Module" })), Vn = {
  "@metadata": {
    authors: [
      "Ezagren"
    ]
  },
  "continue-reading": "Lanjutakan Mambaca",
  "gallery-loading-error": "Ada kasalahan wayah mamuat gambar ngini.",
  "gallery-loading-error-offline": "Kadada sambungan internét.",
  "gallery-loading-error-refresh": "Sigarakan",
  "gallery-loading-still": "Masih mamuat",
  "gallery-unknown-author": "$1 Panulis kada dipinandui",
  "preview-error-message": "Ada ungkara wayah manampaiakan titilikan ngini.",
  "preview-console-error-message": "Titilikan kadada gasan artikal '$1' (Basa: $2)",
  "read-on-wiki": "Baca di Wikipidia",
  "read-more": "Baca labih lanjut pasal Wikipidia",
  "preview-disambiguation-message": "Judul <strong>$1</strong> tarait lawan labih matan satu artikal di Wikipidia.",
  "preview-offline-message": "Kadada sambungan internét.",
  "preview-offline-cta": "Cubai pulang"
}, Kn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Vn
}, Symbol.toStringTag, { value: "Module" })), Xn = {
  "@metadata": {
    authors: [
      "Khun Chit Phuu",
      "ခွန်ဖန်ဒွဲ့"
    ]
  },
  "continue-reading": "အဝ်ႏထွားဒေါ့ꩻ သွုပ်ယင်းသွူ",
  "gallery-loading-error": "အဝ်ႏဒင်ႏထင်ႏရုက်ပွုံႏယိုကျာꩻ အမာႏအဝ်ႏထိုꩻသွူ။",
  "gallery-loading-error-offline": "အဉ်တာနဲတ်လိုင်ႏ အဲဉ်ထဝ်းသွူ။",
  "gallery-loading-error-refresh": "ကောႏချာယင်းအထျꩻ",
  "gallery-loading-still": "အဝ်ႏမာꩻနေဒွိုန်းထာꩻမာꩻတွင်ꩻ",
  "gallery-unknown-author": "ကေားတဲမ်းသား သေတဝ်း",
  "preview-error-message": "အဝ်ႏအွဉ်ႏနယ် ထွားကျိုႏရီးယိုတွင်ꩻ ကိစ္စတဗာႏ ပေါႏထိုꩻသွူ။",
  "preview-console-error-message": "ထွားကျိုႏရီး ရွမ်ဖြုဲင်ꩻ '$1' အတာႏ ထီႏတဝ်းတမုဲင်ꩻမုဲင်ꩻသွူ။ (ဘာႏသာႏငေါဝ်းငွါ: $2)",
  "read-on-wiki": "ဟော်ꩻထွားသွော့ꩻ ဝီခီပီးဒီးယားကို",
  "read-more": "ထွား‌ထဲင်းယင်း ဝီခီပီးဒီးယားကို",
  "preview-disambiguation-message": "ကတူႏစဲဉ်ႏ <strong>$1</strong> နဝ်ꩻ အဝ်ႏဆွိုက်စပ်တွမ်ႏရွမ်ဖြုဲင်ꩻ ဝီခီပီးဒီးယားလောင်း တဗာႏလွုမ်ꩻကာႏတဝ်းသွူ။",
  "preview-offline-message": "ထာꩻသွုပ်ဆွိုက် အဉ်တာနဲက် အဲဉ်ထဝ်းသွူ။",
  "preview-offline-cta": "ကျိုꩻစာꩻထဲင်း တလဲင်ႏဟုဲင်း"
}, Jn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Xn
}, Symbol.toStringTag, { value: "Module" })), Zn = {
  "@metadata": {
    authors: [
      "Titodutta",
      "Yahya",
      "আফতাবুজ্জামান"
    ]
  },
  "continue-reading": "পড়া অব্যাহত রাখুন",
  "gallery-loading-error": "এই ছবি লোড করার সময় একটি ত্রুটি হয়েছে",
  "gallery-loading-error-offline": "কোনও ইন্টারনেট সংযোগ নেই।",
  "gallery-loading-error-refresh": "পুনঃসতেজ করুন",
  "gallery-loading-still": "এখনও লোড হচ্ছে",
  "gallery-unknown-author": "লেখক অজানা",
  "preview-error-message": "প্রাকদর্শন দেখানোর সময় একটি সমস্যা হয়েছে।",
  "preview-console-error-message": "'$1' নিবন্ধের পূর্বরূপ অনুপলব্ধ (ভাষা: $2 )",
  "read-on-wiki": "উইকিপিডিয়ায় পড়ুন",
  "read-more": "উইকিপিডিয়ায় আরও পড়ুন",
  "preview-disambiguation-message": "<strong>$1</strong> শিরোনাম একাধিক উইকিপিডিয়া নিবন্ধের সাথে সম্পর্কিত।",
  "preview-offline-message": "কোনও ইন্টারনেট সংযোগ নেই।",
  "preview-offline-cta": "আবার চেষ্টা করুন"
}, Qn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Zn
}, Symbol.toStringTag, { value: "Module" })), et = {
  "@metadata": {
    authors: [
      "Adriendelucca",
      "Huñvreüs"
    ]
  },
  "continue-reading": "Kenderc'hel da lenn",
  "gallery-loading-error": "Ur fazi ez eus bet en ur gargañ ar skeudenn-mañ",
  "gallery-loading-error-offline": "Kennask internet ebet.",
  "gallery-loading-error-refresh": "Freskaat",
  "gallery-loading-still": "O kargañ",
  "gallery-unknown-author": "Aozer dianav",
  "preview-error-message": "Ur fazi zo bet en ur ziskouez an alberz-mañ",
  "preview-console-error-message": 'Rakwel ebet da gaout evit ar pennad "$1" (Yezh: $2)',
  "read-on-wiki": "Lenn war Wikipedia",
  "read-more": "Lenn muioc'h war Wikipedia",
  "preview-disambiguation-message": "An titl <strong>$1</strong> a zo liammet ouzh meur a bennad war Wikipedia.",
  "preview-offline-message": "Kennask internet ebet.",
  "preview-offline-cta": "Klask en-dro"
}, rt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: et
}, Symbol.toStringTag, { value: "Module" })), it = {
  "@metadata": {
    authors: [
      "Filipinayzd"
    ]
  },
  "continue-reading": "Padagusa a pagbasa",
  "gallery-loading-error": "Agko sala sa pagkarga kading imahe",
  "gallery-loading-error-offline": "Udang koneksyon sa internet.",
  "gallery-loading-error-refresh": "Uliton",
  "gallery-loading-still": "Kinakarga pa",
  "gallery-unknown-author": "Diri isi a kagsurat",
  "preview-error-message": "Agko sala mantang ipinapabayad ading patan-aw",
  "read-on-wiki": "Magbasa sa Wikipedia",
  "read-more": "Magbasa pa sa Wikipedia",
  "preview-disambiguation-message": "Ana titulong <strong>$1</strong> katakod sa dakul pa sa usad na artikulo sa Wikipedia.",
  "preview-offline-message": "Udang koneksyon sa internet.",
  "preview-offline-cta": "Purbari dayday"
}, at = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: it
}, Symbol.toStringTag, { value: "Module" })), nt = {
  "@metadata": {
    authors: [
      "Fitoschido",
      "Mguix"
    ]
  },
  "continue-reading": "Continua llegint",
  "gallery-loading-error": "S'ha produït un error en carregar aquesta imatge",
  "gallery-loading-error-offline": "Cap connexió d'internet disponible.",
  "gallery-loading-error-refresh": "Actualitzar",
  "gallery-loading-still": "carregant-se",
  "gallery-unknown-author": "Autoria desconeguda",
  "preview-error-message": "S'ha produït un problema en mostrar aquesta previsualització.",
  "preview-console-error-message": "Previsualització no disponible per a l'article '$1' (Idioma: $2)",
  "read-on-wiki": "Llegiu a la Viquipèdia",
  "read-more": "Llegeixi més en Viquipèdia",
  "preview-disambiguation-message": "El títol <strong>$1</strong> està enllaçat a més d'un article a la Viquipèdia.",
  "preview-offline-message": "Cap connexió d'internet disponible.",
  "preview-offline-cta": "Torneu-ho a provar"
}, tt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: nt
}, Symbol.toStringTag, { value: "Module" })), ot = {
  "@metadata": {
    authors: [
      "Умар"
    ]
  },
  "continue-reading": "Кхин дӀа йеша",
  "gallery-loading-error": "Сурт чудоккхуш гӀалат даьлла",
  "gallery-loading-error-offline": "Интернет йац.",
  "gallery-loading-error-refresh": "Карлайаккха",
  "gallery-loading-still": "Чуйаккхар дӀадоьдуш ду",
  "gallery-unknown-author": "Ца вевза автор.",
  "preview-error-message": "Хьалхе хьожуш гӀалат даьлла.",
  "preview-console-error-message": "Хьалхе хьажар '$1' йаззаман дац (мотт: $2)",
  "read-on-wiki": "Йеша Википедехь",
  "read-more": "Кхин сов йеша Википедехь",
  "preview-disambiguation-message": "<strong>$1</strong> цӀе йолуш цхьаналла а сов йаззам бу Википедехь.",
  "preview-offline-message": "Интернет йац.",
  "preview-offline-cta": "Кхин цӀа гӀорта"
}, lt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ot
}, Symbol.toStringTag, { value: "Module" })), st = {
  "@metadata": {
    authors: [
      "Halbast"
    ]
  },
  "continue-reading": "بەردەوام ببە لە خوێندنەوە",
  "gallery-loading-error": "ھەڵەیەک لە بارکردنی ئەم وێنەیە ڕوویدا",
  "gallery-loading-error-offline": "ھیچ پەیوەندییەکی ئینتەرنێت بەردەست نییە.",
  "gallery-loading-error-refresh": "نوێکردنەوە",
  "gallery-loading-still": "ھێشتا لە بارکردن دایە",
  "gallery-unknown-author": "نووسەر نەزانراوە",
  "preview-error-message": "کێشەیەک ھەبوو لە پیشاندنانی ئەم پێشبینییەدا.",
  "preview-console-error-message": "پێشبینی بەردەست نییە بۆ وتاری '$1' (زمان: $2)",
  "read-on-wiki": "بیخوێنەوە لە ویکیپیدیا",
  "read-more": "زیاتر بخوێنەوە لە ویکیپیدیا",
  "preview-disambiguation-message": "ناونیشانی <strong>$1</strong> پەیوەندیی بە زیاتر لە یەک وتارەوە ھەیە لە ویکیپیدیا.",
  "preview-offline-message": "ھیچ پەیوەندییەکی ئینتەرنێت بەردەست نییە.",
  "preview-offline-cta": "ھەوڵ بدەرەوە"
}, dt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: st
}, Symbol.toStringTag, { value: "Module" })), gt = {
  "@metadata": {
    authors: [
      "Antho201723"
    ]
  },
  "continue-reading": "Continua à leghje",
  "gallery-loading-error": "Caricamentu fiascatu di sta figura",
  "gallery-loading-error-offline": "Varuna cunnessione internet",
  "gallery-loading-error-refresh": "Attualizà",
  "gallery-loading-still": "Si carica",
  "gallery-unknown-author": "Autore scunisciutu",
  "preview-error-message": "Ci hè statu un prublema durante a visualisazione di l'anteprima.",
  "preview-console-error-message": "Anteprima indispunibile per l'articulu '$1' (Lingua: $2)",
  "read-on-wiki": "Leghje nant'à Wikipedia",
  "read-more": "Per sapene di più nant'à Wikipedia",
  "preview-disambiguation-message": "U titulu <strong>$1</strong> hè in leia incù più d'un articulu nant'à Wikipedia.",
  "preview-offline-message": "Varruna cunnession internet dispunibile.",
  "preview-offline-cta": "Turnà à pruvà"
}, ct = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: gt
}, Symbol.toStringTag, { value: "Module" })), ut = {
  "@metadata": {
    authors: [
      "TayfunEt.",
      "Zolgoyo"
    ]
  },
  "continue-reading": "Oqumağa devam et",
  "gallery-loading-error": "Resimni yükler ekende hata çıqqa berdi",
  "gallery-loading-error-offline": "İnternet bağlantısı qısıtlı.",
  "gallery-loading-error-refresh": "Yañart",
  "gallery-loading-still": "Daa yüklene",
  "gallery-unknown-author": "Yaratıcı bilinmey",
  "preview-error-message": "Bu önizlemeni körünti ettirken sorun çıqtı.",
  "preview-console-error-message": "'$1' maqalesi içün önizleme mümkün degil (Til: $2)",
  "read-on-wiki": "Vikipediyada oqu",
  "read-more": "Vikipediyada daa oqumağa mevcut",
  "preview-disambiguation-message": "<strong>$1</strong> Vikipediyada birden fazla maqalenen ilgili.",
  "preview-offline-message": "İnternet bağlantısı qısıtlı.",
  "preview-offline-cta": "Tekrar deneñiz"
}, mt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ut
}, Symbol.toStringTag, { value: "Module" })), ft = {
  "@metadata": {
    authors: [
      "Matěj Suchánek",
      "Robins7"
    ]
  },
  "continue-reading": "Pokračovat ve čtení",
  "gallery-loading-error": "Při načítání tohoto obrázku došlo k chybě",
  "gallery-loading-error-offline": "Není dostupné internetové připojení.",
  "gallery-loading-error-refresh": "Obnovit",
  "gallery-unknown-author": "Autor neznámý",
  "preview-error-message": "Při zobrazování tohoto náhledu se objevil problém.",
  "read-on-wiki": "Přečíst na Wikipedii",
  "read-more": "Přečíst více na Wikipedii",
  "preview-disambiguation-message": "Název <strong>$1</strong> souvisí s více než jedním článkem na Wikipedii.",
  "preview-offline-message": "Není dostupné internetové připojení.",
  "preview-offline-cta": "Zkusit znovu"
}, pt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ft
}, Symbol.toStringTag, { value: "Module" })), yt = {
  "@metadata": {
    authors: [
      "Afalau",
      "Robin Owain"
    ]
  },
  "continue-reading": "Parhau i Ddarllen",
  "gallery-loading-error": "Cafwyd nam yn llwytho'r ddelwedd hon",
  "gallery-loading-error-offline": "Dim cysylltiad rhyngrwyd.",
  "gallery-loading-error-refresh": "Adfywio",
  "gallery-loading-still": "Dal wrthi'n llwytho",
  "gallery-unknown-author": "Awdur anhysbys",
  "preview-error-message": "Gafwyd gwall tra'n ceisio arddangos y rhagolwg",
  "preview-console-error-message": "Nid yw'r rhagolwg ar gael am erthygl '$1' (Iaith: $2)",
  "read-on-wiki": "Darllen ar Wicipedia",
  "read-more": "Darllen rhagor ar Wicipedia",
  "preview-disambiguation-message": "Mae'r teitl <strong>$1</strong> yn berthnasol i fwy nag un erthygl ar Wicipedia.",
  "preview-offline-message": "Dim cysylltiad rhyngrwyd.",
  "preview-offline-cta": "Ceisiwch eto"
}, _t = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: yt
}, Symbol.toStringTag, { value: "Module" })), ht = {
  "@metadata": {
    authors: [
      "Peterleth",
      "Saederup92"
    ]
  },
  "continue-reading": "Fortsæt læsning",
  "gallery-loading-error": "Der opstod en fejl under indlæsning af dette billede",
  "gallery-loading-error-offline": "Ingen internetforbindelse tilgængelig.",
  "gallery-loading-error-refresh": "Genindlæs",
  "gallery-loading-still": "Indlæser stadig",
  "gallery-unknown-author": "Ukendt forfatter",
  "preview-error-message": "Der opstod et problem under visning af denne forhåndsvisning.",
  "preview-console-error-message": "Forhåndsvisning er ikke tilgængelig for artiklen '$1' (Sprog: $2)",
  "read-on-wiki": "Læs på Wikipedia",
  "read-more": "Læs mere på Wikipedia",
  "preview-disambiguation-message": "Titel <strong>$1</strong> er relateret til mere end én artikel på Wikipedia.",
  "preview-offline-message": "Ingen internetforbindelse tilgængelig.",
  "preview-offline-cta": "Prøv igen"
}, wt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ht
}, Symbol.toStringTag, { value: "Module" })), vt = {
  "@metadata": {
    authors: [
      "BPX-web",
      "DraconicDark",
      "Elliot",
      "ManuelFranz"
    ]
  },
  "continue-reading": "Mit dem Lesen fortfahren",
  "gallery-loading-error": "Beim Laden dieses Bildes gab es einen Fehler.",
  "gallery-loading-error-offline": "Es ist keine Internetverbindung vorhanden.",
  "gallery-loading-error-refresh": "Aktualisieren",
  "gallery-loading-still": "Wird noch geladen",
  "gallery-unknown-author": "Urheber unbekannt.",
  "preview-error-message": "Es gab ein Problem bei der Anzeige dieser Vorschau.",
  "preview-console-error-message": "Vorschau für Artikel „$1“ nicht verfügbar (Sprache: $2)",
  "read-on-wiki": "Auf Wikipedia lesen",
  "read-more": "Mehr bei Wikipedia",
  "preview-disambiguation-message": "Titel <strong>$1</strong> bezieht sich auf mehr als einen Artikel auf Wikipedia.",
  "preview-offline-message": "Es ist keine Internetverbindung vorhanden.",
  "preview-offline-cta": "Erneut versuchen"
}, kt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: vt
}, Symbol.toStringTag, { value: "Module" })), bt = {
  "@metadata": {
    authors: [
      "1917 Ekim Devrimi",
      "GolyatGeri",
      "Mirzali",
      "Orbot707"
    ]
  },
  "continue-reading": "Wanayışi dewam kerê",
  "gallery-loading-error": "No asange bar kerdış de xeta veciye",
  "gallery-loading-error-offline": "Gıreniyeyi interneti çıniyo",
  "gallery-loading-error-refresh": "Anewe kerê",
  "gallery-loading-still": "Hewna beno bar",
  "gallery-unknown-author": "Nuştekarê nêzanıyeni",
  "preview-error-message": "Mocnayışê nê verqayti de xırabiye esta.",
  "preview-console-error-message": "Verasayış serba pela '$1' nêguriyeno (Zıwan: $2)",
  "read-on-wiki": "Wikipediya de bıwanê",
  "read-more": "Wikipedia sero tayna bıwanê",
  "preview-disambiguation-message": "Serey <strong>$1</strong> yew ra zêde meqaleyê Wikipedia ya eleqeyıno.",
  "preview-offline-message": "Gıreniyeyi interneti çıniyo",
  "preview-offline-cta": "Anciya bıcerebne"
}, jt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: bt
}, Symbol.toStringTag, { value: "Module" })), St = {
  "@metadata": {
    authors: [
      "Geraki",
      "Norhorn"
    ]
  },
  "continue-reading": "Συνέχεια ανάγνωσης",
  "gallery-loading-error": "Παρουσιάστηκε σφάλμα κατά τη φόρτωση αυτής της εικόνας",
  "gallery-loading-error-offline": "Δεν υπάρχει διαθέσιμη σύνδεση στο διαδίκτυο.",
  "gallery-loading-error-refresh": "Ανανέωση",
  "gallery-loading-still": "Ακόμα φορτώνει",
  "gallery-unknown-author": "Άγνωστος συγγραφέας",
  "preview-error-message": "Υπήρξε κάποιο πρόβλημα κατά την εμφάνιση αυτής της προεπισκοπήσης.",
  "preview-console-error-message": "Η προεπισκόπηση δεν είναι διαθέσιμη για το λήμμα «$1» (Γλώσσα: $2)",
  "read-on-wiki": "Διαβάστε στη Βικιπαίδεια",
  "read-more": "Διαβάστε περισσότερα στη Βικιπαίδεια",
  "preview-disambiguation-message": "Ο τίτλος <strong>$1</strong> σχετίζεται με περισσότερα από ένα λήμματα στη Βικιπαίδεια.",
  "preview-offline-message": "Δεν υπάρχει διαθέσιμη σύνδεση στο διαδίκτυο.",
  "preview-offline-cta": "Δοκιμάστε ξανά"
}, Tt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: St
}, Symbol.toStringTag, { value: "Module" })), Ot = {
  "@metadata": {
    authors: [
      "Alefar"
    ]
  },
  "continue-reading": "Continue Reading",
  "gallery-loading-error": "There was an error loading this image!",
  "gallery-loading-error-offline": "No internet connection available!",
  "gallery-loading-error-refresh": "Refresh",
  "gallery-loading-still": "Still loading",
  "gallery-unknown-author": "Author unknown",
  "preview-error-message": "There was an issue while displaying this preview.",
  "read-on-wiki": "Read on Wikipedia",
  "read-more": "Read more on Wikipedia",
  "preview-offline-message": "No internet connection available!",
  "preview-offline-cta": "TRY AGAIN"
}, $t = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ot
}, Symbol.toStringTag, { value: "Module" })), ya = {
  "continue-reading": "Continue Reading",
  "gallery-loading-error": "There was an error loading this image",
  "gallery-loading-error-offline": "No internet connection available.",
  "gallery-loading-error-refresh": "Refresh",
  "gallery-loading-still": "Still loading",
  "gallery-unknown-author": "Author unknown",
  "preview-error-message": "There was an issue while displaying this preview.",
  "preview-console-error-message": "Preview unavailable for article '$1' (Language: $2)",
  "read-on-wiki": "Read on Wikipedia",
  "read-more": "Read more on Wikipedia",
  "preview-disambiguation-message": "Title <strong>$1</strong> is related to more than one article on Wikipedia.",
  "preview-offline-message": "No internet connection available.",
  "preview-offline-cta": "Try again"
}, At = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ya
}, Symbol.toStringTag, { value: "Module" })), Et = {
  "@metadata": {
    authors: [
      "Avengium",
      "Fitoschido",
      "Rodney Araujo"
    ]
  },
  "continue-reading": "Continuar leyendo",
  "gallery-loading-error": "Se produjo un error al cargar esta imagen",
  "gallery-loading-error-offline": "No hay conexión a internet disponible.",
  "gallery-loading-error-refresh": "Actualizar",
  "gallery-loading-still": "Todavía sigue cargando",
  "gallery-unknown-author": "Autor desconocido",
  "preview-error-message": "Hubo un problema al mostrar esta previsualización",
  "preview-console-error-message": "Vista previa no disponible para el artículo '$1' (Idioma: $2)",
  "read-on-wiki": "Ver en Wikipedia",
  "read-more": "Leer más en Wikipedia",
  "preview-disambiguation-message": "El título <strong>$1</strong> está relacionado a más de un artículo en Wikipedia.",
  "preview-offline-message": "No hay conexión a internet disponible.",
  "preview-offline-cta": "Reintentar"
}, zt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Et
}, Symbol.toStringTag, { value: "Module" })), xt = {
  "@metadata": {
    authors: [
      "Atzerritik",
      "Theklan"
    ]
  },
  "continue-reading": "Jarraitu irakurtzen",
  "gallery-loading-error": "Errore bat gertatu da irudi hau kargatzean",
  "gallery-loading-error-offline": "Ez dago Interneteko konexiorik eskuragarri.",
  "gallery-loading-error-refresh": "Eguneratu",
  "gallery-loading-still": "Oraindik kargatzen",
  "gallery-unknown-author": "Egile ezezaguna.",
  "preview-error-message": "Arazo bat izan zen aurreikuspen hau erakutsi bitartean.",
  "preview-console-error-message": 'Aurrebista ez dago erabilgarri " $1 " artikuluaren (Hizkuntza: $2 )',
  "read-on-wiki": "Wikipedian irakurri",
  "read-more": "Wikipedian gehiago irakurri",
  "preview-disambiguation-message": "<strong>$1</strong> izenburuarekin Wikipediako artikulu bat baino gehiago daude.",
  "preview-offline-message": "Ez dago Interneteko konexiorik eskuragarri.",
  "preview-offline-cta": "Saiatu berriro"
}, Mt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: xt
}, Symbol.toStringTag, { value: "Module" })), Pt = {
  "@metadata": {
    authors: [
      "Darafsh",
      "Jeeputer"
    ]
  },
  "continue-reading": "ادامهٔ مطالعه",
  "gallery-loading-error": "در هنگام بارگذاری این تصویر خطایی رخ داد",
  "gallery-loading-error-offline": "اتصال به اینترنت مقدور نیست.",
  "gallery-loading-error-refresh": "تازه‌سازی",
  "gallery-loading-still": "همچنان در حال بارگیری",
  "gallery-unknown-author": "مؤلف ناشناخته",
  "preview-error-message": "مشکلی هنگام نمایش این پیش‌نمایش پیش آمد.",
  "preview-console-error-message": "پیش‌نمایش برای مقالهٔ '$1' در دسترس نیست (زبان: $2)",
  "read-on-wiki": "در ویکی‌پدیا بخوانید",
  "read-more": "مطالعهٔ بیشتر در ویکی‌پدیا",
  "preview-disambiguation-message": "عنوان <strong>$1</strong> در ویکی‌پدیا با بیش از یک مقاله مرتبط است.",
  "preview-offline-message": "اتصال به اینترنت مقدور نیست.",
  "preview-offline-cta": "تلاش مجدد"
}, Lt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Pt
}, Symbol.toStringTag, { value: "Module" })), qt = {
  "@metadata": {
    authors: [
      "Gregorynelsonmensah1"
    ]
  },
  "continue-reading": "Toa w'akenkan do",
  "gallery-unknown-author": "Yennyim nyia a ɔkyerɛwee",
  "read-on-wiki": "Kenkan wɔ Wikipedia do",
  "read-more": "Kenkan bi ka ho wɔ Wikipedia do",
  "preview-offline-cta": "Yɛ no bio"
}, Wt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: qt
}, Symbol.toStringTag, { value: "Module" })), Rt = {
  "@metadata": {
    authors: [
      "Actuallyisjoha",
      "Alluk.",
      "Nike",
      "Pyscowicz",
      "SMAUG"
    ]
  },
  "continue-reading": "Jatka lukemista",
  "gallery-loading-error": "Kuvan lataaminen epäonnistui",
  "gallery-loading-error-offline": "Ei Internet-yhteyttä",
  "gallery-loading-error-refresh": "Päivitä",
  "gallery-loading-still": "Ladataan edelleen",
  "gallery-unknown-author": "Tuntematon tekijä",
  "preview-error-message": "Esikatselua ei voida näyttää",
  "preview-console-error-message": "Esikatselu ei ole saatavilla artikkelille ”$1” (kieli: $2)",
  "read-on-wiki": "Lue Wikipediassa",
  "read-more": "Lue lisää Wikipediassa",
  "preview-disambiguation-message": "Otsikko <strong>$1</strong> liittyy useampaan Wikipedia-artikkeliin.",
  "preview-offline-message": "Ei internet-yhteyttä.",
  "preview-offline-cta": "Yritä uudelleen"
}, Ct = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Rt
}, Symbol.toStringTag, { value: "Module" })), Nt = {
  "@metadata": {
    authors: [
      "Gomoko",
      "PhilW",
      "Verdy p",
      "Wladek92"
    ]
  },
  "continue-reading": "Continuer à lire",
  "gallery-loading-error": "Une erreur s’est produite durant le chargement de cette image.",
  "gallery-loading-error-offline": "Aucune connexion Internet disponible.",
  "gallery-loading-error-refresh": "Rafraîchir",
  "gallery-loading-still": "Chargement encore en cours",
  "gallery-unknown-author": "Auteur inconnu",
  "preview-error-message": "Un problème est survenu en affichant cet aperçu.",
  "preview-console-error-message": "Aperçu non disponible pour l’article « $1 » (langue : $2)",
  "read-on-wiki": "Lire sur Wikipédia",
  "read-more": "Lire davantage sur Wikipédia",
  "preview-disambiguation-message": "Le titre <strong>$1</strong> est lié à plus d’un article dans Wikipédia.",
  "preview-offline-message": "Aucune connexion Internet disponible.",
  "preview-offline-cta": "Essayez à nouveau"
}, It = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Nt
}, Symbol.toStringTag, { value: "Module" })), Dt = {
  "@metadata": {
    authors: [
      "Beunice",
      "Cinebeunice"
    ]
  },
  "continue-reading": "Continuer à lire",
  "gallery-loading-error": "Une erreur s’est produite durant le chargement de cette image.",
  "gallery-loading-error-offline": "Aucune connexion Internet disponible.",
  "gallery-loading-error-refresh": "Actualiser",
  "gallery-loading-still": "Chargement encore en cours",
  "gallery-unknown-author": "Auteur inconnu",
  "preview-error-message": "Un problème est survenu en affichant cet aperçu.",
  "preview-console-error-message": "Aperçu non disponible pour l’article '$1' (langue : $2)",
  "read-on-wiki": "Lire sur Wikipédia",
  "read-more": "Lire davantage sur Wikipédia",
  "preview-disambiguation-message": "Le titre <strong>$1</strong> est lié à plus d’un article dans Wikipédia.",
  "preview-offline-message": "Aucune connexion Internet disponible.",
  "preview-offline-cta": "Essayez à nouveau"
}, Ht = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Dt
}, Symbol.toStringTag, { value: "Module" })), Bt = {
  "@metadata": {
    authors: [
      "Histnou",
      "Istwalezanti"
    ]
  },
  "continue-reading": "Kontinyé li",
  "gallery-loading-error": "Té ni on érè lè nou té ka chajé imaj-lasa",
  "gallery-loading-error-offline": "Pa ni p'on entènèt.",
  "gallery-loading-error-refresh": "Aktiyalizé",
  "gallery-loading-still": "I toujou ka chajé",
  "gallery-unknown-author": "Nou pa konnèt otè-lasa",
  "preview-error-message": "Té ni on pwoblèm toupannan nou té ka afiché prévizyalizasyon-lasa",
  "read-on-wiki": "Li asi Wikipédya",
  "read-more": "Li plis asi Wikipédya",
  "preview-offline-message": "Pa ni p'on entènèt ba-w.",
  "preview-offline-cta": "Woukoumansé"
}, Ut = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Bt
}, Symbol.toStringTag, { value: "Module" })), Ft = {
  "@metadata": {
    authors: [
      "StarrySky"
    ]
  },
  "continue-reading": "Lean air adhart a’ leughadh",
  "gallery-loading-error": "Bha mearachd ann a' luchdadh an dealbh seo",
  "gallery-loading-error-offline": "Chan eil ceangal eadar-lìn ri fhaighinn.",
  "gallery-loading-error-refresh": "ùraich",
  "gallery-loading-still": "A’ luchdachadh fhathast",
  "gallery-unknown-author": "Ùghdar neo-aithnichte",
  "preview-error-message": "Bha duilgheadas ann fhad 's a bha sinn a' taisbeanadh an ro-shealladh seo.",
  "preview-console-error-message": "Chan eil ro-shealladh ri fhaighinn airson artaigil '$1' (Cànan: $2)",
  "read-on-wiki": "Leugh air Wikipedia",
  "read-more": "Leugh tuilleadh air Wikipedia",
  "preview-disambiguation-message": "Tha an tiotal <strong>$1</strong> co-cheangailte ri barrachd air aon artaigil air Wikipedia.",
  "preview-offline-message": "Chan eil ceangal eadar-lìn ri fhaighinn.",
  "preview-offline-cta": "Feuch a-rithist"
}, Yt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ft
}, Symbol.toStringTag, { value: "Module" })), Gt = {
  "@metadata": {
    authors: [
      "Maria zaos",
      "Toliño"
    ]
  },
  "continue-reading": "Continúe a ler",
  "gallery-loading-error": "Houbo un erro ó cargar esta imaxe",
  "gallery-loading-error-offline": "Non hai dispoñible ningunha conexión a internet.",
  "gallery-loading-error-refresh": "Refrescar",
  "gallery-loading-still": "Cargando",
  "gallery-unknown-author": "Autor descoñecido",
  "preview-error-message": "Houbo un problema ó amosar esta vista previa.",
  "preview-console-error-message": 'Vista previa dispoñible para o artigo "$1" (lingua: $2)',
  "read-on-wiki": "Ler na Wikipedia",
  "read-more": "Ler máis na Wikipedia",
  "preview-disambiguation-message": 'O título "<strong>$1</strong>" está relacionado con máis dun artigo na Wikipedia.',
  "preview-offline-message": "Non hai dispoñible ningunha conexión a internet.",
  "preview-offline-cta": "Ténteo de novo"
}, Vt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Gt
}, Symbol.toStringTag, { value: "Module" })), Kt = {
  "@metadata": {
    authors: [
      "شیخ"
    ]
  },
  "continue-reading": "خؤندنˇ دۊمباله",
  "gallery-loading-error": "سأب دأنه تصوير جؤرأکشئنه",
  "gallery-loading-error-refresh": "جؤنأگيتن",
  "gallery-loading-still": "هلئه جؤر أردره",
  "preview-error-message": "مۊشکيل دأنه پيش-نمايشˇ نۊشؤن دأن ئبه.",
  "read-on-wiki": "ويکيپديا مئنه خؤندن",
  "read-more": "ويکيپديا مئنه ويشته خؤندن"
}, Xt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Kt
}, Symbol.toStringTag, { value: "Module" })), Jt = {
  "@metadata": {
    authors: [
      "P. S. F. Freitas"
    ]
  },
  "continue-reading": "Emoñe'ẽve",
  "gallery-loading-error": "Oĩkuri peteĩ jejavy ojejupívo ko ta'anga",
  "gallery-loading-error-offline": "Ndaipóri internet joajuha ojeguerekóva.",
  "gallery-loading-error-refresh": "Embopyahu",
  "gallery-loading-still": "Omba'apo gueteri",
  "gallery-unknown-author": "Ndojekuaái ijapohára",
  "preview-error-message": "Oĩkuri peteĩ apuñuái ojehechauka aja ko kuatia recharã.",
  "preview-console-error-message": "Ndaipóri kuatia recharã '$1'-pe g̃uarã (Ñe'ẽ: $2)",
  "read-on-wiki": "Ehecha Vikipetãme",
  "read-more": "Ehechave Vikipetãme",
  "preview-disambiguation-message": "Ko <strong>$1</strong> ojoaju heta kuatiáre Vikipetãme.",
  "preview-offline-message": "Ndaipóri internet joajuha ojeguerekóva.",
  "preview-offline-cta": "Eñeha'ã jey"
}, Zt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Jt
}, Symbol.toStringTag, { value: "Module" })), Qt = {
  "@metadata": {
    authors: [
      "PastelKos"
    ]
  },
  "continue-reading": "Διατελεῖν τὸ ἀναγιγνώσκειν",
  "gallery-loading-error": "Ὑπῆρξε ἁμαρτία τῷ ἐπιφορτίζειν τήνδε τὴν εἰκόνα",
  "gallery-loading-error-offline": "Όὐ διατίθεται διαδυκτίου σύνδεσις.",
  "gallery-loading-error-refresh": "Ἀναψύχειν",
  "gallery-loading-still": "Ἔτι ἐπιφορτίζεται",
  "gallery-unknown-author": "Ἄδηλος συγγραφεύς",
  "preview-error-message": "Ὑπῆρξε ἀπορία τῷ προεπισκοπεῖν",
  "read-on-wiki": "Ἀναγιγνώσκειν τῇ Οὐικιπαιδείᾳ",
  "read-more": "Ἀναγιγνώσκειν πλείω τῇ Οὐικιπαιδείᾳ",
  "preview-disambiguation-message": "Ὁ τίτλος '''$1''' τείνει εἰς πολλὰς ἐγγραφὰς τῇ Οὐικιπαιδείᾳ",
  "preview-offline-message": "Όὐ διατίθεται διαδυκτίου σύνδεσις.",
  "preview-offline-cta": "Πάλιν πειρᾶν"
}, eo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Qt
}, Symbol.toStringTag, { value: "Module" })), ro = {
  "@metadata": {
    authors: [
      "CptViraj"
    ]
  },
  "continue-reading": "વાંચવાનું ચાલુ રાખો",
  "gallery-loading-error-offline": "કોઈ ઇન્ટરનેટ જોડાણ ઉપલબ્ધ નથી.",
  "gallery-loading-error-refresh": "તાજું કરો",
  "gallery-loading-still": "હજી લાવી રહ્યું છે",
  "gallery-unknown-author": "લેખક અજ્ઞાત",
  "read-on-wiki": "વિકિપીડિયા પર વાંચો",
  "read-more": "વિકિપીડિયા પર વધુ વાંચો",
  "preview-disambiguation-message": "શીર્ષક <strong>$1</strong> એ વિકિપીડિયા પર એકથી વધુ લેખને સંગત છે.",
  "preview-offline-message": "કોઈ ઇન્ટરનેટ જોડાણ ઉપલબ્ધ નથી.",
  "preview-offline-cta": "ફરી પ્રયત્ન કરો"
}, io = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ro
}, Symbol.toStringTag, { value: "Module" })), ao = {
  "@metadata": {
    authors: [
      "MacTire02"
    ]
  },
  "continue-reading": "Lhaih er oaie",
  "gallery-loading-error": "Va marranys ayn tra va'n jalloo laadey",
  "gallery-loading-error-offline": "Cha nel kiangley eddyr-voggyl ry-gheddyn.",
  "gallery-loading-error-refresh": "Ooree",
  "gallery-loading-still": "Foast laadey",
  "gallery-unknown-author": "Ughtar gyn fys",
  "preview-error-message": "Va marranys ayn taishbyney yn roie-haishbynys",
  "preview-console-error-message": "Cha nel roie-haishbynys ayn da'n art '$1' (Çhengey: $2)",
  "read-on-wiki": "Lhaih er Wikipedia",
  "read-more": "Lhaih tooilley er Wikipedia",
  "preview-disambiguation-message": "Ta'n enmys <strong>$1</strong> kianglt rish ny smoo na un art er Wikipedia.",
  "preview-offline-message": "Cha nel kiangley eddyr-voggyl ry-gheddyn.",
  "preview-offline-cta": "Jean reesht eh"
}, no = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ao
}, Symbol.toStringTag, { value: "Module" })), to = {
  "@metadata": {
    authors: [
      "Em-em"
    ]
  },
  "continue-reading": "Cigaba da karatu",
  "gallery-loading-error": "Akwai kuskure shigarwa a wannan hoto",
  "gallery-loading-error-offline": "Babu hadin intanet ayanzu.",
  "gallery-loading-error-refresh": "Daidaita",
  "gallery-loading-still": "Har yanzu yana shiga",
  "gallery-unknown-author": "Ba'a san mawallafi ba",
  "preview-error-message": "Akwai yar matsala sanda ake saukar wannan kwajin gani.",
  "preview-console-error-message": "Babu kwajin gani ga makalar '$1' (Language: $2)",
  "read-on-wiki": "Karanta a Wikipedia",
  "read-more": "Karanta kari a Wikipedia",
  "preview-disambiguation-message": "Lakabi <strong>$1</strong> ya danganci fiye da makala daya a Wikipedia.",
  "preview-offline-message": "Babu hadin intanet ayanzu.",
  "preview-offline-cta": "Sake gwadawa"
}, oo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: to
}, Symbol.toStringTag, { value: "Module" })), lo = {
  "@metadata": {
    authors: [
      "Amire80",
      "YaronSh"
    ]
  },
  "continue-reading": "המשך קריאה",
  "gallery-loading-error": "אירעה שגיאה בעת טעינת התמונה הזאת",
  "gallery-loading-error-offline": "אין חיבור זמין לאינטרנט.",
  "gallery-loading-error-refresh": "רענון",
  "gallery-loading-still": "עדיין בטעינה",
  "gallery-unknown-author": "היוצר אינו ידוע",
  "preview-error-message": "הייתה בעיה עם הצגת התצוגה המקדימה הזאת.",
  "preview-console-error-message": "אין תצוגה מקדימה זמינה לערך ‚$1’ (שפה: $2)",
  "read-on-wiki": "לקרוא בוויקיפדיה",
  "read-more": "לקרוא עוד בוויקיפדיה",
  "preview-disambiguation-message": "הכותרת <strong>$1</strong> קשורה ליותר מערך אחד בוויקיפדיה.",
  "preview-offline-message": "אין חיבור זמין לאינטרנט.",
  "preview-offline-cta": "לנסות שוב"
}, so = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: lo
}, Symbol.toStringTag, { value: "Module" })), go = {
  "@metadata": {
    authors: [
      "Abijeet Patro"
    ]
  },
  "continue-reading": "पढ़ना जारी रखें",
  "read-more": "विकिपीडिया पर अधिक पढ़ें"
}, co = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: go
}, Symbol.toStringTag, { value: "Module" })), uo = {
  "@metadata": {
    authors: [
      "Bugoslav",
      "Neptune, the Mystic"
    ]
  },
  "continue-reading": "Nastavite čitati",
  "gallery-loading-error": "Došlo je do pogreške pri učitavanju ove slike",
  "gallery-loading-error-refresh": "Učitaj ponovno",
  "gallery-unknown-author": "Nepoznat autor",
  "read-on-wiki": "Pročitajte na Wikipediji",
  "read-more": "Pročitajte više na Wikipediji",
  "preview-disambiguation-message": "Naslov <strong>$1</strong> povezan je s više članaka na Wikipediji.",
  "preview-offline-cta": "Pokušajte ponovo"
}, mo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: uo
}, Symbol.toStringTag, { value: "Module" })), fo = {
  "@metadata": {
    authors: [
      "Kitanago"
    ]
  },
  "continue-reading": "Kontinye li",
  "gallery-loading-error": "Te gen yon erè pandan w ap chaje imaj sa a.",
  "gallery-loading-error-offline": "Pa gen koneksyon entènèt ki disponib.",
  "gallery-loading-error-refresh": "Relanse",
  "gallery-loading-still": "L ap chaje",
  "gallery-unknown-author": "Otè a enkoni",
  "preview-error-message": "Te gen yon pwoblèm pandan w ap montre apèsi sa a.",
  "preview-console-error-message": "Apèsi pa disponib pou atik '$1' (Lang: $2 )",
  "read-on-wiki": "Li sou Wikipedya",
  "read-more": "Li plis sou Wikipedya",
  "preview-disambiguation-message": "Tit <strong>$1</strong> gen rapò ak plis pase yon atik sou Wikipedya.",
  "preview-offline-message": "Pa gen koneksyon entènèt ki disponib.",
  "preview-offline-cta": "Eseye ankò"
}, po = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: fo
}, Symbol.toStringTag, { value: "Module" })), yo = {
  "@metadata": {
    authors: [
      "Dj",
      "Hanna Tardos"
    ]
  },
  "gallery-loading-error": "Hiba történt a kép betöltésekor",
  "gallery-loading-error-offline": "Nincs internetkapcsolat.",
  "gallery-loading-error-refresh": "Frissítés",
  "gallery-loading-still": "Még mindig tölt",
  "gallery-unknown-author": "Ismeretlen szerző",
  "preview-error-message": "Hiba történt az előnézet megjelenítésekor.",
  "preview-console-error-message": 'A(z) "$1" szócikk előnézete nem érhető el (nyelv: $2)',
  "read-on-wiki": "Olvass a Wikipédián",
  "read-more": "Olvass tovább a Wikipédián",
  "preview-disambiguation-message": "<strong>$1</strong> cím egynél több cikkhez kapcsolódik a Wikipédián.",
  "preview-offline-message": "Nincs internetkapcsolat",
  "preview-offline-cta": "Próbáld újra"
}, _o = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: yo
}, Symbol.toStringTag, { value: "Module" })), ho = {
  "@metadata": {
    authors: [
      "Kareyac"
    ]
  },
  "continue-reading": "Շարունակել կարդալ",
  "gallery-loading-error-refresh": "Թարմացնել",
  "gallery-unknown-author": "Հեղինակը անհայտ է",
  "read-on-wiki": "Կարդալ Վիքպեդիայում",
  "preview-offline-cta": "Կրկին փորձել"
}, wo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ho
}, Symbol.toStringTag, { value: "Module" })), vo = {
  "@metadata": {
    authors: [
      "Azniv Stepanian",
      "Շահէն"
    ]
  },
  "continue-reading": "Շարունակել կարդալ",
  "gallery-loading-error": "Այս էջը չբացուեցաւ:",
  "gallery-loading-error-offline": "Համացանցի կապ չկայ:",
  "gallery-loading-error-refresh": "Թարմացնել",
  "gallery-loading-still": "Տակաւին կը բացուի",
  "gallery-unknown-author": "Հեղինակը անյայտ է",
  "preview-error-message": "Հարց մը կայ այս բաժինը բանալու:",
  "preview-console-error-message": "Այս բաժինը գոյութիւն չունի «$1» յօդուածին համար: (Լեզու՝ $2)",
  "read-on-wiki": "Կարդալ Ուիքիփետիայի վրայ",
  "read-more": "Կարդալ յաւելեալ Ուիքիփետիայի վրայ",
  "preview-disambiguation-message": "<strong>$1</strong> վերնագիրը կապուած է մէկէ աւելի Ուիքիփետիայի յօդուածի:",
  "preview-offline-message": "Համացանցի կապ չկայ:",
  "preview-offline-cta": "Կրկին փորձէ"
}, ko = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: vo
}, Symbol.toStringTag, { value: "Module" })), bo = {
  "@metadata": {
    authors: [
      "McDutchie"
    ]
  },
  "continue-reading": "Continuar a leger",
  "gallery-loading-error": "Un error occurreva durante le cargamento de iste imagine",
  "gallery-loading-error-offline": "Necun connexion a internet disponibile.",
  "gallery-loading-error-refresh": "Refrescar",
  "gallery-loading-still": "Cargamento ancora in curso",
  "gallery-unknown-author": "Autor incognite",
  "preview-error-message": "Un problema ha occurrite in le rendition de iste previsualisation.",
  "preview-console-error-message": "Previsualisation indisponibile pro le articulo '$1' (Lingua: $2)",
  "read-on-wiki": "Leger sur Wikipedia",
  "read-more": "Leger plus sur Wikipedia",
  "preview-disambiguation-message": "Le titulo <strong>$1</strong> es associate a plus de un articulo sur Wikipedia.",
  "preview-offline-message": "Necun connexion a internet disponibile.",
  "preview-offline-cta": "Reprobar"
}, jo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: bo
}, Symbol.toStringTag, { value: "Module" })), So = {
  "@metadata": {
    authors: [
      "Akmaie Ajam",
      "Daud I.F. Argana",
      "Herryz",
      "Joseagush",
      "Sonic Speedy"
    ]
  },
  "continue-reading": "Lanjutkan Membaca",
  "gallery-loading-error": "Terjadi kesalahan saat memuat gambar ini.",
  "gallery-loading-error-offline": "Tidak ada koneksi internet.",
  "gallery-loading-error-refresh": "Muat ulang",
  "gallery-loading-still": "Masih memuat",
  "gallery-unknown-author": "$1 Penulis tidak diketahui",
  "preview-error-message": "Ada masalah ketika menampilkan pratayang ini.",
  "preview-console-error-message": "Pratinjau tidak ada untuk artikel '$1' (Bahasa: $2)",
  "read-on-wiki": "Baca di Wikipedia",
  "read-more": "Baca lebih lanjut tentang Wikipedia",
  "preview-disambiguation-message": "Judul <strong>$1</strong> terkait dengan lebih dari satu artikel di Wikipedia.",
  "preview-offline-message": "Tidak ada koneksi internet.",
  "preview-offline-cta": "Coba lagi"
}, To = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: So
}, Symbol.toStringTag, { value: "Module" })), Oo = {
  "@metadata": {
    authors: [
      "Joao Xavier"
    ]
  },
  "continue-reading": "Durigar lektado",
  "gallery-loading-error": "Eventis eroro dum charjo di ca imajo",
  "gallery-loading-error-offline": "Nula konekto al interreto disponebla.",
  "gallery-loading-error-refresh": "Rinovigar",
  "gallery-loading-still": "Charjo duras",
  "gallery-unknown-author": "Nekonocata autoro",
  "preview-error-message": "Eventis problemo dum la montro di ca previdado.",
  "preview-console-error-message": "Previdado ne esas posibla por l'artiklo '$1' (Idiomo: $2)",
  "read-on-wiki": "Lektez che Wikipedio",
  "read-more": "Lektez pluse che Wikipedio",
  "preview-disambiguation-message": "La titulo <strong>$1</strong> uzesas en plu kam 1 artiklo che Wikipedio.",
  "preview-offline-message": "Nula konekto al interreto disponebla.",
  "preview-offline-cta": "Probez itere"
}, $o = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Oo
}, Symbol.toStringTag, { value: "Module" })), Ao = {
  "@metadata": {
    authors: [
      "Sveinki",
      "Sveinn í Felli"
    ]
  },
  "continue-reading": "Halda lestri áfram",
  "gallery-loading-error": "Upp kom villa við að hlaða inn þessari mynd",
  "gallery-loading-error-offline": "Engin internettenging er tiltæk.",
  "gallery-loading-error-refresh": "Endurlesa",
  "gallery-loading-still": "Ennþá að lesa inn",
  "gallery-unknown-author": "Óþekkur höfundur",
  "preview-error-message": "Það kom upp vandamál við að birta þessa forskoðun.",
  "preview-console-error-message": "Forskoðun er ekki til fyrir greinina '$1' (Tungumál: $2)",
  "read-on-wiki": "Lesa á Wikipedia",
  "read-more": "Lesta meira á Wikipedia",
  "preview-disambiguation-message": "Titillinn <strong>$1</strong> tengist fleiri en einni grein á Wikipedia.",
  "preview-offline-message": "Engin internettenging er tiltæk.",
  "preview-offline-cta": "Reyndu aftur"
}, Eo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ao
}, Symbol.toStringTag, { value: "Module" })), zo = {
  "@metadata": {
    authors: [
      "Ajeje Brazorf",
      "Beta16",
      "GpieroMW",
      "Luca.favorido"
    ]
  },
  "continue-reading": "Continua a leggere",
  "gallery-loading-error": "Si è verificato un errore durante il caricamento di questa immagine",
  "gallery-loading-error-offline": "Nessuna connessione internet disponibile.",
  "gallery-unknown-author": "Autore sconosciuto",
  "read-on-wiki": "Leggi su Wikipedia",
  "read-more": "Ulteriori informazioni su Wikipedia",
  "preview-offline-message": "Nessuna connessione internet disponibile.",
  "preview-offline-cta": "Riprova"
}, xo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: zo
}, Symbol.toStringTag, { value: "Module" })), Mo = {
  "@metadata": {
    authors: [
      "Omotecho",
      "RYOUMA1117",
      "そらたこ",
      "バレロン"
    ]
  },
  "continue-reading": "続けて読む",
  "gallery-loading-error": "画像の読み込み中にエラーが発生しました。",
  "gallery-loading-error-offline": "インターネット接続が見つかりません。",
  "gallery-loading-error-refresh": "更新",
  "gallery-loading-still": "読み込み中",
  "gallery-unknown-author": "作者不明",
  "preview-error-message": "プレビューを表示する際にエラーが発生しました。",
  "preview-console-error-message": "現在$1のプレビューは利用できません。（言語：$2）",
  "read-on-wiki": "ウィキペディアで読む",
  "read-more": "ウィキペディアでさらに読む",
  "preview-disambiguation-message": "標題<strong>$1</strong>はウィキペディアに複数の関連項目があります。",
  "preview-offline-message": "インターネット接続が見つかりません。",
  "preview-offline-cta": "もう一度お試しください"
}, Po = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Mo
}, Symbol.toStringTag, { value: "Module" })), Lo = {
  "@metadata": {
    authors: [
      "Ajiniyaz Nurniyazov"
    ]
  },
  "continue-reading": "Oqıwdı dawam etiw",
  "gallery-loading-error": "Bul súwretti júklewde qátelik júz berdi",
  "gallery-loading-error-offline": "Internet baylanısı joq.",
  "gallery-loading-error-refresh": "Jańalaw",
  "gallery-loading-still": "Ele júklenip atır",
  "gallery-unknown-author": "Avtor belgisiz",
  "preview-error-message": "Aldınnan kóriwdi kórsetiwde mashqala júz berdi.",
  "preview-console-error-message": '"$1" (Til: $2) maqalası ushın aldınnan kóriw ilajsız',
  "read-on-wiki": "Wikipediada oqıw",
  "read-more": "Wikipediada kóbirek oqıw",
  "preview-disambiguation-message": "Atama <strong>$1</strong> Wikipediadaǵı birneshe maqalaǵa tiyisli.",
  "preview-offline-message": "Internet baylanısı joq.",
  "preview-offline-cta": "Qayta urınıp kóriw"
}, qo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Lo
}, Symbol.toStringTag, { value: "Module" })), Wo = {
  "@metadata": {
    authors: [
      "Kambai Akau"
    ]
  },
  "continue-reading": "Ya a̠son di̠ fang",
  "gallery-loading-error": "Ghyuap ku nyia̱ mi̱ di̠n kpa̠t ghwughwu huni",
  "gallery-loading-error-offline": "A̱myim a̱cyetaneang ka bwuk.",
  "gallery-loading-error-refresh": "Bu shyim",
  "gallery-loading-still": "Ku ni̱ shyia̱ di̱ nyia̱ lodi",
  "gallery-unknown-author": "Á̠ lyen a̠tyulyuut wu bah",
  "preview-error-message": "A̱fi̱fa ku nshyia̱ mi̱ di̱n tyai nwuan-a̱son huni.",
  "preview-console-error-message": "Nwuan-a̱son nshyia̱ mat ati̱kut '$1' (A̱lyem: $2) bah",
  "read-on-wiki": "Fang mi̱ Wukipedia",
  "read-more": "Fang nkyang njhyang mi̱ Wukipedia",
  "preview-disambiguation-message": "A̠pyia̠ a̠lyiat <strong>$1</strong> byia̠ a̱meang ma̠ng ati̱kut a̱ swak a̱nyiung mi̠ Wukipedia.",
  "preview-offline-message": "A̱myim a̱cyetaneang ka bwuk.",
  "preview-offline-cta": "Bu kwan"
}, Ro = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Wo
}, Symbol.toStringTag, { value: "Module" })), Co = {
  "@metadata": {
    authors: [
      "Cgmbo"
    ]
  },
  "continue-reading": "Landa Kutanga",
  "gallery-loading-error": "Kifu me salama na ntangu ya kutula kifwanisu yai",
  "gallery-loading-error-offline": "Connection ya internet kele ve.",
  "gallery-loading-error-refresh": "Bandulula",
  "gallery-loading-still": "Yo ke landa kubaka bima",
  "gallery-unknown-author": "Munkwa na yo me zabana ve",
  "preview-error-message": "Kifu me salama na ntangu ya kusonga kima yai.",
  "read-on-wiki": "Tanga na Wikipedia",
  "read-more": "Tanga mambu mingi na Wikipedia",
  "preview-disambiguation-message": "Ntu-diambu <strong>$1</strong> ke na kuwakana ti masolo mingi na Wikipedia.",
  "preview-offline-message": "Connection ya internet kele ve.",
  "preview-offline-cta": "Meka diaka"
}, No = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Co
}, Symbol.toStringTag, { value: "Module" })), Io = {
  "@metadata": {
    authors: [
      "EWDAja"
    ]
  },
  "continue-reading": "توروسكو مباچا",
  "gallery-loading-error": "وات كسالهن هاراک مبوکاک گامبر سيج",
  "gallery-loading-error-offline": "مكّا كونيكسي اينترنيت",
  "gallery-loading-error-refresh": "موات اولڠ",
  "gallery-loading-still": "لوكوک مبوکاک",
  "gallery-unknown-author": "ڤنوليس مک تيكاڤنداي",
  "preview-error-message": "وات ماساله هارک نمڤيلكو ڤراتياڠ سيج",
  "preview-console-error-message": "ڤراتينجاو مكّا اونتوک ارتيكيل '$' (باس:2$)",
  "read-on-wiki": "باچ د ويكيڤيديا",
  "read-more": "باچ لوبيه لنجوت د ويكيڤيديا",
  "preview-disambiguation-message": "جودول <strong>$1</strong> تيكاهيک ريک ليو جک اوسي ارتيكيل ويكيڤيديا",
  "preview-offline-message": "مكّا كونيكسي اينترنيت",
  "preview-offline-cta": "چوبا لاگي"
}, Do = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Io
}, Symbol.toStringTag, { value: "Module" })), Ho = {
  "@metadata": {
    authors: [
      "Es Krim 5 Juta Rasa"
    ]
  },
  "continue-reading": "Torusko mbaca",
  "gallery-loading-error": "Uwat kasalahan harak mbukak gambar sija",
  "gallery-loading-error-offline": "Makka koneksi internet",
  "gallery-loading-error-refresh": "Muat ulang",
  "gallery-loading-still": "Lokok mbukak",
  "gallery-unknown-author": "Panulis mak tikapandai",
  "preview-error-message": "Uwat masalah harak nampilko pratayang sija.",
  "preview-console-error-message": "Pratinjau makka untuk artikel '$1' (Basa: $2)",
  "read-on-wiki": "Baca di Wikipedia",
  "read-more": "Baca lobih lanjut di Wikipedia",
  "preview-disambiguation-message": "Judul<strong>$1</strong> tikahik rik liyu jak osai artikel di Wikipedia.",
  "preview-offline-message": "Makka koneksi internet",
  "preview-offline-cta": "Cuba lagi"
}, Bo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ho
}, Symbol.toStringTag, { value: "Module" })), Uo = {
  "@metadata": {
    authors: [
      "1917 Ekim Devrimi"
    ]
  },
  "continue-reading": "Wanayışi dewam ke",
  "gallery-loading-error": "No resım barkerdış de xeta veciye",
  "gallery-loading-error-offline": "Gıreniyeyi interneti çıniyo",
  "gallery-loading-error-refresh": "Anewe ke",
  "gallery-loading-still": "Hewna beno bar",
  "gallery-unknown-author": "Nuştekarê nêzanıyeni",
  "preview-error-message": "Mocnayışê nê verqayti de xırabiye esta.",
  "read-on-wiki": "Wikipediya de bıwanê",
  "read-more": "Wikipedia sero tayna bıwanê",
  "preview-disambiguation-message": "Sernamey <strong>$1</strong> yew ra zêde meqaleyê Wikipedia ya eleqeyıno.",
  "preview-offline-message": "Gıreniyeyi interneti çıniyo",
  "preview-offline-cta": "Anciya bıcerebne"
}, Fo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Uo
}, Symbol.toStringTag, { value: "Module" })), Yo = {
  "@metadata": {
    authors: [
      "Darzz"
    ]
  },
  "continue-reading": "Оқуды жалғастыру",
  "gallery-loading-error": "Бұл сурет жүктелгенде, қате орын алды.",
  "gallery-loading-error-offline": "Интернет қосылымы жоқ.",
  "gallery-loading-error-refresh": "Жаңарту",
  "gallery-loading-still": "Әлі жүктелуде",
  "gallery-unknown-author": "Автор белгісіз",
  "preview-error-message": "Бұл алдын ала көру көрсетілгенде, қате орын алды.",
  "preview-console-error-message": '"$1" (тіл: $2) мақаласын алдын ала көру қолжетімсіз',
  "read-on-wiki": "Уикипедиядан оқу",
  "read-more": "Уикипедиядан көбірек оқу",
  "preview-disambiguation-message": "<strong>$1</strong> атауы Уикипедиядағы бірден көп мақалаға сілтейді.",
  "preview-offline-message": "Интернет қосылымы жоқ.",
  "preview-offline-cta": "Қайталау"
}, Go = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Yo
}, Symbol.toStringTag, { value: "Module" })), Vo = {
  "@metadata": {
    authors: [
      "Pokno Royal",
      "គីមស៊្រុន"
    ]
  },
  "continue-reading": "បន្តការអាន",
  "gallery-loading-error": "មានបញ្ហាក្នុងការផ្ទុករូបភាពនេះ",
  "gallery-loading-error-offline": "គ្មានបណ្ដាញអ៊ីនធើណិតទេ។",
  "gallery-loading-error-refresh": "ផ្ទុកឡើងវិញ",
  "gallery-loading-still": "កំពុងផ្ទុក",
  "gallery-unknown-author": "អ្នកនិពន្ធមិនស្គាល់",
  "preview-error-message": "មានបញ្ហាពេលបង្ហាញការមើលមុននេះ។",
  "preview-console-error-message": "គ្មានការមើលមុនសម្រាប់អត្ថបទ $1 (ភាសា៖ $2) ទេ",
  "read-on-wiki": "អាននៅលើវិគីភីឌា",
  "read-more": "អានបន្ថែមនៅលើវិគីភីឌា",
  "preview-disambiguation-message": "ចំណងជើង <strong>$1</strong> បានជាប់ទាក់ទងជាមួយអត្ថបទច្រើនជាងមួយនៅក្នុងវិគីភីឌា។",
  "preview-offline-message": "គ្មានបណ្ដាញអ៊ីនធើណិតទេ។",
  "preview-offline-cta": "ព្យាយាមម្ដងទៀត"
}, Ko = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Vo
}, Symbol.toStringTag, { value: "Module" })), Xo = {
  "@metadata": {
    authors: [
      "AVSmalnad77",
      "ಮಲ್ನಾಡಾಚ್ ಕೊಂಕ್ಣೊ"
    ]
  },
  "gallery-loading-error-offline": "ಇಂಟರ್ನೆಟ್ ಸಂಪರ್ಕ ಲಭ್ಯವಿಲ್ಲ.",
  "gallery-loading-error-refresh": "ಪುನಶ್ಚೇತನಗೊಳಿಸು",
  "gallery-loading-still": "ಇನ್ನೂ ಲೋಡ್ ಆಗುತ್ತಿದೆ",
  "read-on-wiki": "ವಿಕಿಪೀಡಿಯದಲ್ಲಿ ಓದು",
  "read-more": "ವಿಕಿಪೀಡಿಯದಲ್ಲಿ ಇನ್ನಷ್ಟು ಓದು",
  "preview-offline-message": "ಇಂಟರ್ನೆಟ್ ಸಂಪರ್ಕ ಲಭ್ಯವಿಲ್ಲ.",
  "preview-offline-cta": "ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ"
}, Jo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Xo
}, Symbol.toStringTag, { value: "Module" })), Zo = {
  "@metadata": {
    authors: [
      "Songhee",
      "Ykhwong",
      "그냥기여자"
    ]
  },
  "continue-reading": "계속 읽기",
  "gallery-loading-error": "이 이미지를 불러오는 동안 오류가 발생했습니다",
  "gallery-loading-error-offline": "인터넷이 연결되어 있지 않습니다.",
  "gallery-loading-error-refresh": "새로 고침",
  "gallery-loading-still": "계속 로딩 중",
  "gallery-unknown-author": "작자 미상",
  "preview-error-message": "이 미리보기를 표시하는 중 오류가 있었습니다.",
  "preview-console-error-message": "'$1' 문서를 미리 볼 수 없습니다 (언어: $2)",
  "read-on-wiki": "위키백과에서 보기",
  "read-more": "위키백과에서 추가 내용 읽기",
  "preview-disambiguation-message": "<strong>$1</strong> 항목은 위키백과 내 둘 이상의 문서와 연관되어 있습니다.",
  "preview-offline-message": "인터넷이 연결되어 있지 않습니다.",
  "preview-offline-cta": "다시 시도"
}, Qo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Zo
}, Symbol.toStringTag, { value: "Module" })), el = {
  "@metadata": {
    authors: [
      "Къарачайлы"
    ]
  },
  "continue-reading": "Окъугъанынгы андан ары бардыр",
  "gallery-loading-error": "Бу сурат джюклене тургъанлай халат болду",
  "gallery-loading-error-offline": "Интернетге байлам джокъду",
  "gallery-loading-error-refresh": "Джангырт",
  "gallery-loading-still": "Алкъын джюклене турады",
  "gallery-unknown-author": "Автору белгисизди",
  "preview-error-message": "Бу ал къарауну кёргюзген заманда проблема чыкъды",
  "preview-console-error-message": "'$1' (Тил: $2) статьяны ал къарауу ишлемейди",
  "read-on-wiki": "Википедияда окъу",
  "read-more": "Андан да асламысын Википедияда окъу",
  "preview-disambiguation-message": "<strong>$1</strong> башлыкъ Википедияда бирден аслам статья бла байламлыды.",
  "preview-offline-message": "Интернетге байлам джокъду",
  "preview-offline-cta": "Энтда сынаб кёр"
}, rl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: el
}, Symbol.toStringTag, { value: "Module" })), il = {
  "@metadata": {
    authors: [
      "Tajamul9"
    ]
  },
  "continue-reading": "پرُن جٲری تھاوُن",
  "gallery-loading-error": "شَکل لوڑ کَرنَس مَنٛز أس اَکھ غلطی.",
  "gallery-loading-error-offline": "اِنٹَرنیٹ رٲبطہٕ چھنہٕ مَیَسر.",
  "gallery-loading-error-refresh": "تازٕ کٕرو",
  "gallery-loading-still": "وُنہِ چھُ لوڈ گژھان",
  "gallery-unknown-author": "نامعلوم مُصنِف",
  "preview-error-message": "یہِ جَھلَک ہاوٕنس منٛز اوس اکھ ٹُھر.",
  "preview-console-error-message": "'$1' (زبان: $2) مَضموٗن کھأترٕ چھنہٕ جَھلَک مَیَسر",
  "read-on-wiki": "پٕریٚو وِکیٖپیٖڈیاہَس پؠٹھ",
  "read-more": "پییہٚ پٕریٚو وِکیٖپیٖڈیاہَس پؠٹھ",
  "preview-disambiguation-message": "ناو <مضبوط>$1</مضبوط> چھُ رلان اَکہِ کھۄٚتہٕ زیادٕ مَضموٗنن سٕتی وِکیٖمیڈِیاہَس پؠٹھ.",
  "preview-offline-message": "اِنٹَرنیٹ رٲبطہٕ چھنہٕ مَیَسر.",
  "preview-offline-cta": "بیٚیہِ کٔرِو کوشِش"
}, al = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: il
}, Symbol.toStringTag, { value: "Module" })), nl = {
  "@metadata": {
    authors: [
      "Bikarhêner"
    ]
  },
  "continue-reading": "Xwendinê Bidomîne",
  "gallery-loading-error": "Çewtiyeke derket di barkirina vê wêneyê de",
  "gallery-loading-error-offline": "Girêdaneke înternetê yê berdest tine ye.",
  "gallery-loading-error-refresh": "Nû bike",
  "gallery-loading-still": "Hê jî tê barkirin",
  "gallery-unknown-author": "Nivîskar nenas e",
  "preview-error-message": "Çewtiyeke derket holê gava pêşdîtin dihate nîşandin.",
  "preview-console-error-message": "Pêşdîtin ne berdest e ji bo gotara '$1' (Ziman: $2)",
  "read-on-wiki": "Li ser Wîkîpediyayê bixwîne",
  "read-more": "Zêdetir bixwîne li ser Wîkîpediyayê",
  "preview-disambiguation-message": "Sernavê <strong>$1</strong> eleqedarê ji yekî zêdetir gotaran e li ser Wîkîpediyayê.",
  "preview-offline-message": "Girêdaneke înternetê yê berdest nîne.",
  "preview-offline-cta": "Cardin biceribîne"
}, tl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: nl
}, Symbol.toStringTag, { value: "Module" })), ol = {
  "@metadata": {
    authors: [
      "Enye Lav"
    ]
  },
  "continue-reading": "Лыддьыны водзӧ",
  "gallery-loading-error": "Серпас пыртӧдігӧн мыйкӧ торксьӧма",
  "gallery-loading-error-offline": "Ӧтуввезкӧд йитӧд абу",
  "gallery-loading-error-refresh": "Выльмӧдны",
  "gallery-loading-still": "Век на пыртӧдам",
  "gallery-unknown-author": "Авторыс абу тӧдса",
  "preview-error-message": "Водзвыв видзӧдігӧн мыйкӧ абу лючки мунӧма",
  "preview-console-error-message": "'$1' статьясӧ водзвыв видзӧдны он вермы (кыв: $2)",
  "read-on-wiki": "Лыддьыны Википедияысь",
  "read-more": "Водзӧ лыддьыны Википедияысь",
  "preview-disambiguation-message": "Википедияын <strong>$1</strong> нима гижӧдыс ӧтиысь унджык.",
  "preview-offline-message": "Ӧтуввезкӧд йитчыны оз артмы",
  "preview-offline-cta": "Видлӧй нӧшта ӧтчыд"
}, ll = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ol
}, Symbol.toStringTag, { value: "Module" })), sl = {
  "@metadata": {
    authors: [
      "Les Meloures",
      "Robby",
      "Volvox"
    ]
  },
  "continue-reading": "Virufuere mat Liesen",
  "gallery-loading-error": "Feeler beim eropluede vum Bild",
  "gallery-loading-error-offline": "Et gëtt keng Internetverbindung",
  "gallery-loading-error-refresh": "Aktualiséieren",
  "gallery-loading-still": "Gëtt nach gelueden",
  "gallery-unknown-author": "Auteur onbekannt",
  "preview-error-message": "Et gouf e Probleem fir dëst ze weisen",
  "preview-console-error-message": "Virschau fir den Artikel '$1' net verfügbar (Sprooch: $2)",
  "read-on-wiki": "Op Wikipedia liesen",
  "read-more": "Liest méi op Wikipedia",
  "preview-disambiguation-message": "Den Titel <strong>$1</strong> bezitt sech op méi wéi een Artikel op Wikipedia.",
  "preview-offline-message": "Et gëtt keng Internetverbindung.",
  "preview-offline-cta": "Probéiert nach emol"
}, dl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: sl
}, Symbol.toStringTag, { value: "Module" })), gl = {
  "@metadata": {
    authors: [
      "Asenoner"
    ]
  },
  "continue-reading": "Liej inant",
  "gallery-loading-error": "L ie suzedù n fal a ciarië chësta foto",
  "gallery-loading-error-offline": "L ne ie deguna cunescion cun l'internet.",
  "gallery-loading-error-refresh": "Cëria da nuef",
  "gallery-loading-still": "Cëria mo for",
  "gallery-unknown-author": "Autor scunesciù",
  "preview-error-message": "L ie unì su n problem a mustré chësta preududa.",
  "preview-console-error-message": "Preududa nia da garat per l articul '$1' (Rujeneda: $2)",
  "read-on-wiki": "Liej sun Wikipedia",
  "read-more": "Liej de plu sun Wikipedia",
  "preview-disambiguation-message": "Titul <strong>$1</strong> ie culegà cun plu de un n articul sun Wikipedia.",
  "preview-offline-message": "L ne ie deguna cunescion cun l'internet.",
  "preview-offline-cta": "Prova mo n iede"
}, cl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: gl
}, Symbol.toStringTag, { value: "Module" })), ul = {
  "@metadata": {
    authors: [
      "Salvemm el lombard"
    ]
  },
  "continue-reading": "Va adree a lensger",
  "gallery-loading-error": "A gh'è stad un error in del caregà questa pagina chì",
  "gallery-loading-error-offline": "A gh'è nissuna conession a l'internet disponibil.",
  "gallery-loading-error-refresh": "Atualiza:",
  "gallery-loading-still": "An'mò 'dree a caregà",
  "gallery-unknown-author": "Autor minga conossud",
  "preview-error-message": "A gh'è stad on problema intanta che la vegniva mostrada la pagina de vedè prima.",
  "read-on-wiki": "Lensg in su Wikipedia",
  "read-more": "Lengs pussée su Wikipedia",
  "preview-disambiguation-message": "El titol <strong>$1</strong> l'è correlad con pussée de vun articol in su Wikipedia.",
  "preview-offline-message": "A gh'è nissuna coneesion a l'internet disponibil",
  "preview-offline-cta": "Provegh ancamò"
}, ml = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ul
}, Symbol.toStringTag, { value: "Module" })), fl = {
  "@metadata": {
    authors: [
      "Lookruk"
    ]
  },
  "continue-reading": "ອ່ານຕໍ່",
  "gallery-loading-error": "ເກີດຂໍ້ຜິດພາດຂະນະໂຫຼດຮູບນີ້",
  "gallery-loading-error-offline": "ບໍ່ມີການເຊື່ອມຕໍ່ອິນເຕີເນັດ",
  "gallery-loading-error-refresh": "ໂຫຼດໃໝ່",
  "gallery-loading-still": "ກຳລັງໂຫຼດຢູ່",
  "gallery-unknown-author": "ບໍ່ຮູ້ຈັກຜູ້ຂຽນ",
  "preview-error-message": "ມີບັນຫາໃນຂະນະທີ່ສະແດງຕົວຢ່າງນີ້",
  "preview-console-error-message": "ບໍ່ມີຕົວຢ່າງສໍາລັບບົດຄວາມ '$1' (ພາສາ: $2)",
  "read-on-wiki": "ອ່ານບົນວິກິພີເດຍ",
  "read-more": "ອ່ານເພີ່ມເຕີມບົນວິກິພີເດຍ",
  "preview-disambiguation-message": "ຫົວຂໍ້ <strong>$1</strong> ແມ່ນກ່ຽວຂ້ອງກັບບົດຄວມຫຼາຍກວ່າໜຶ່ງບົດຄວາມໃນວິກິພີເດຍ",
  "preview-offline-message": "ບໍ່ມີການເຊື່ອມຕໍ່ອິນເຕີເນັດ",
  "preview-offline-cta": "ລອງ​ອີກ​ຄັ້ງ"
}, pl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: fl
}, Symbol.toStringTag, { value: "Module" })), yl = {
  "@metadata": {
    authors: [
      "Nokeoo"
    ]
  },
  "continue-reading": "Skaityti toliau",
  "gallery-loading-error": "Įkeliant šį paveikslėlį įvyko klaida",
  "gallery-loading-error-offline": "Nėra interneto ryšio.",
  "gallery-loading-error-refresh": "Atnaujinti",
  "gallery-loading-still": "Vis dar kraunasi",
  "gallery-unknown-author": "Autorius nežinomas",
  "preview-error-message": "Rodant šią peržiūrą kilo problema.",
  "preview-console-error-message": "Straipsnio „$1“ peržiūra neprieinama (kalba: $2)",
  "read-on-wiki": "Skaitykite Vikipedijoje",
  "read-more": "Daugiau skaitykite Vikipedijoje",
  "preview-disambiguation-message": "Pavadinimas <strong>$1</strong> susijęs su daugiau nei vienu straipsniu Vikipedijoje.",
  "preview-offline-message": "Nėra interneto ryšio.",
  "preview-offline-cta": "Bandykite dar kartą"
}, _l = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: yl
}, Symbol.toStringTag, { value: "Module" })), hl = {
  "@metadata": {
    authors: [
      "Boesenbergia"
    ]
  },
  "continue-reading": "Terrosaghi Maca",
  "gallery-loading-error": "Bâḍâ sè sala bâkto mowa' ghâmbhâr sè arèya",
  "gallery-loading-error-offline": "Taḍâ' sambhungan internèt.",
  "gallery-loading-error-refresh": "Pa'anyar",
  "gallery-loading-still": "Ghi' mowa'",
  "gallery-unknown-author": "Sè meccè' ta' èkataowè",
  "preview-error-message": "Bâḍâ masalah bâkto ngangglaghi tangas arèya.",
  "read-on-wiki": "Bâca è Wikipèḍia",
  "read-more": "Bâca terrosana è Wikipèḍia",
  "preview-disambiguation-message": "Bhul-ombhul <strong>$1</strong> akaè' ka lebbi ḍâri sèttong serradhân è Wikipèḍia.",
  "preview-offline-message": "Taḍâ' sambhungan internèt.",
  "preview-offline-cta": "Jhâjhâl polè"
}, wl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: hl
}, Symbol.toStringTag, { value: "Module" })), vl = {
  "@metadata": {
    authors: [
      "ऐक्टिवेटेड्"
    ]
  },
  "continue-reading": "पढ़ेला जारी रखी",
  "gallery-loading-error": "इचित्र आरोपणमे त्रुटि होएल्",
  "gallery-loading-error-offline": "कोइयो अन्तर्जालसम्पर्क उपलब्ध नहई।",
  "gallery-loading-error-refresh": "नवीकरण",
  "gallery-loading-still": "अखनीयो आरोपित होइत्",
  "gallery-unknown-author": "अज्ञात लेखक",
  "preview-error-message": "इ झलक देखावेमे एगो समस्या होलै।",
  "preview-console-error-message": "लेख '$1' (भासा: $2) ला झलक अनुपलब्ध",
  "read-on-wiki": "बिकिपीडियापर पढ़ी",
  "read-more": "बिकिपीडियापर आउ पढ़ी",
  "preview-disambiguation-message": "सीर्सक <strong>$1</strong> बिकिपीडियापर एकसे बेसी लेखसे सम्बन्धित हई",
  "preview-offline-message": "कोइयो अन्तर्जालसम्पर्क उपलब्ध नहई।",
  "preview-offline-cta": "फिन प्रयास करी"
}, kl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: vl
}, Symbol.toStringTag, { value: "Module" })), bl = {
  "@metadata": {
    authors: [
      "Bjankuloski06"
    ]
  },
  "continue-reading": "Продолжете со читање",
  "gallery-loading-error": "Се јави грешка при вчитувањето на сликава.",
  "gallery-loading-error-offline": "Нема врска со семрежјето.",
  "gallery-loading-error-refresh": "Превчитај",
  "gallery-loading-still": "Сè уште се вчитува",
  "gallery-unknown-author": "Непознат автор",
  "preview-error-message": "Се јави проблем при приказот на прегледот.",
  "preview-console-error-message": "Прегледот е недостапен за статијата „$1“ (Јазик: $2)",
  "read-on-wiki": "Прочитајте на Википедија",
  "read-more": "Прочитајте повеќе на Википедија",
  "preview-disambiguation-message": "Насловот <strong>$1</strong> е поврзансо повеќе од една статија на Википедија.",
  "preview-offline-message": "Нема врска со семрежјето.",
  "preview-offline-cta": "Обиди се пак"
}, jl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: bl
}, Symbol.toStringTag, { value: "Module" })), Sl = {
  "@metadata": {
    authors: [
      "Kiran Gopi"
    ]
  },
  "continue-reading": "വായന തുടരുക",
  "gallery-loading-error": "ഈ ചിത്രം എടുക്കുന്നതിൽ പിഴവുണ്ടായി.",
  "gallery-loading-error-refresh": "പുതുക്കുക"
}, Tl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Sl
}, Symbol.toStringTag, { value: "Module" })), Ol = {
  "@metadata": {
    authors: [
      "Anand.orkhon"
    ]
  },
  "continue-reading": "Цааш унших",
  "gallery-loading-error": "Зургийг уншихад алдаа гарлаа",
  "gallery-loading-error-offline": "Интернэт холболт байхгүй байна.",
  "gallery-loading-error-refresh": "Дахин ачааллах",
  "gallery-loading-still": "Ачаалсаар байна",
  "gallery-unknown-author": "Зохиогч тодорхойгүй",
  "preview-error-message": "Урьдчилж харах явцад асуудал гарлаа.",
  "preview-console-error-message": "' $1 ' нийтлэлийг урьдчилан харах боломжгүй (Хэл: $2 )",
  "read-on-wiki": "Википедиа-аас уншаарай",
  "read-more": "Википедиа-аас дэлгэрэнгүй уншаарай",
  "preview-disambiguation-message": "<strong>$1</strong> гарчиг нь Википедиа дээрх нэгээс олон нийтлэлтэй холбоотой байна.",
  "preview-offline-message": "Интернэт холболт байхгүй байна.",
  "preview-offline-cta": "Дахин оролдоно уу"
}, $l = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ol
}, Symbol.toStringTag, { value: "Module" })), Al = {
  "@metadata": {
    authors: [
      "Laitei",
      "Taytay",
      "Teitei Para"
    ]
  },
  "continue-reading": "Reih pazao",
  "gallery-loading-error": "He hmâthlâ â khâ hai nota pâna sâkha a y",
  "gallery-loading-error-offline": "Internet azaona y vei.",
  "gallery-loading-error-refresh": "Pathieh",
  "gallery-loading-still": "A khâh hai chy",
  "gallery-unknown-author": "Rohtuh pahno leipa",
  "preview-error-message": "He mochhilina â palâ hai nota pâna sâkha a y.",
  "preview-console-error-message": "Châpaw '$1' châta mochhilina â hmô (Reihchâ: $2)",
  "read-on-wiki": "Wikipedia liata reih",
  "read-more": "Wikipedia liata reina mode",
  "preview-disambiguation-message": "Chôtlâhpi <strong>$1</strong> nata a zaopa châpawzy Wikipedia lia sâkha hlâ hluh a y.",
  "preview-offline-message": "Internet a zaona y vei.",
  "preview-offline-cta": "A zaoh via"
}, El = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Al
}, Symbol.toStringTag, { value: "Module" })), zl = {
  "@metadata": {
    authors: [
      "Tofeiku"
    ]
  },
  "continue-reading": "Teruskan Membaca",
  "gallery-loading-error": "Terdapat ralat memuatkan imej ini",
  "gallery-loading-error-offline": "Tiada sambungan Internet.",
  "gallery-loading-error-refresh": "Segar semula",
  "gallery-loading-still": "Masih memuatkan",
  "gallery-unknown-author": "Pengarang tidak diketahui",
  "preview-error-message": "Terdapat masalah ketika memaparkan pralihat ini.",
  "preview-console-error-message": "Pralihat tidak tersedia untuk rencana '$1' (Bahasa: $2)",
  "read-on-wiki": "Baca tentang Wikipedia",
  "read-more": "Baca lebih lanjut di Wikipedia",
  "preview-disambiguation-message": "Tajuk <strong>$1</strong> berkaitan dengan lebih daripada satu rencana di Wikipedia.",
  "preview-offline-message": "Tiada sambungan Internet.",
  "preview-offline-cta": "Cuba lagi"
}, xl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: zl
}, Symbol.toStringTag, { value: "Module" })), Ml = {
  "@metadata": {
    authors: [
      "Chrisportelli",
      "ToniSant"
    ]
  },
  "continue-reading": "Kompli Aqra",
  "gallery-loading-error": "L-istampa ma setgħetx titla'",
  "gallery-loading-error-offline": "Bħalissa m'hemmx konnessjoni tal-internet disponibbli.",
  "gallery-loading-error-refresh": "Aġġorna",
  "gallery-loading-still": "Għadha tielgħa",
  "gallery-unknown-author": "L-awtur mhuwiex magħruf",
  "preview-error-message": "Kien hemm problema biex titla' l-wirja minn qabel.",
  "preview-console-error-message": "Il-wirja minn qabel għall-artiklu '$1' (Lingwa: $2)",
  "read-on-wiki": "Aqra fuq il-Wikipedija",
  "read-more": "Aqra aktar fuq il-Wikipedija",
  "preview-disambiguation-message": "It-titlu <strong>$1</strong> għandu x'jaqsam ma' aktar minn artiklu wieħed fuq il-Wikipedija.",
  "preview-offline-message": "Bħalissa m'hemmx konnessjoni tal-internet disponibbli.",
  "preview-offline-cta": "Erġa' pprova"
}, Pl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ml
}, Symbol.toStringTag, { value: "Module" })), Ll = {
  "@metadata": {
    authors: [
      "Dr Lotus Black",
      "Sithu015"
    ]
  },
  "continue-reading": "ဆက်လက် ဖတ်ရှုရန်",
  "gallery-loading-error": "ဤ ပုံကို တင်ဆောင်စဉ် အမှား တစ်ခု ဖြစ်ခဲ့သည်။",
  "gallery-loading-error-offline": "အင်တာနက် ဆက်သွယ်မှု မရရှိပါ။",
  "gallery-loading-error-refresh": "ပြန်စရန်",
  "gallery-loading-still": "အလုပ် လုပ်နေတုန်းပါ",
  "gallery-unknown-author": "ဖန်တီးသူ မသိ",
  "preview-error-message": "ဤအကြိုမြင်ကွင်းကို ပြသနေစဥ် ကိစ္စတစ်ခုရှိခဲ့သည်။",
  "preview-console-error-message": "ဆောင်းပါး '$1' အတွက် အကြိုမြင်ကွင်း မရရှိနိုင်ပါ (ဘာသာစကား: $2)",
  "read-on-wiki": "ဝီကီပီးဒီးယား တွင် ဖတ်ရန်",
  "read-more": "ဝီကီပီးဒီးယားတွင် ပိုမို ဖတ်ပါ",
  "preview-disambiguation-message": "ခေါင်းစဥ် <strong>$1</strong> သည် ဝီကီပီးဒီးယား တွင် ‌ဆောင်းပါး တစ်ခုထပ် ပို၍ ဆက်စပ်နေသည်။",
  "preview-offline-message": "အင်တာနက် ဆက်သွယ်မှု မရရှိပါ။",
  "preview-offline-cta": "ထပ်မံ ကြိုးစားပါ"
}, ql = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ll
}, Symbol.toStringTag, { value: "Module" })), Wl = {
  "@metadata": {
    authors: [
      "محک"
    ]
  },
  "continue-reading": "بخوندستن دمباله",
  "gallery-loading-error": "عکس ره خاسته جورهکشه، خطا ور بخرده",
  "gallery-loading-error-offline": "اینترنت قطع بیه.",
  "gallery-loading-error-refresh": "نو هاکردن",
  "gallery-loading-still": "هنتا در لؤد وونه",
  "gallery-unknown-author": "بنویشته‌کس میّن نی‌یه",
  "preview-error-message": "خاسته پیش-پیش سراق هاده که خطا ور بخرده",
  "preview-console-error-message": "این '$1' مقاله وسه ننشنه پیش-پیش سراق هایرین (زوون: $2)",
  "read-on-wiki": "ویکی‌پدیا دله بخوندین",
  "read-more": "ویکی‌پدیا دله ویشته‌ته بخوندین",
  "preview-disambiguation-message": "ویکی‌پدیا  دله<strong>$1</strong> نومی چنتا مقاله کته.",
  "preview-offline-message": "اینترنت قطع بیه.",
  "preview-offline-cta": "أی هتج"
}, Rl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Wl
}, Symbol.toStringTag, { value: "Module" })), Cl = {
  "@metadata": {
    authors: [
      "Finizio",
      "Ruthven"
    ]
  },
  "continue-reading": "Continua 'a lettura",
  "gallery-loading-error": "Aggio sbagliato carrecanno sta figura",
  "gallery-loading-error-offline": "Interner nu funziona",
  "gallery-loading-error-refresh": "Agghiuorna",
  "gallery-loading-still": "Stong ancora carrecann'",
  "gallery-unknown-author": "Autore scanosciuto",
  "preview-error-message": "Sta nu problema facenno verè st'anteprimma",
  "preview-console-error-message": "L'anteprimma nun ce sta pe ll'articulo '$1' (Lengua: $2)",
  "read-on-wiki": "Liegge 'ncoppa a Wikipedia",
  "read-more": "Liegge 'e cchiù 'ncoppa a Wikipedia",
  "preview-disambiguation-message": "'O titulo <strong>$1</strong> s'arriferisce a cchiù 'e n'articulo ncopp’a Wikipedia",
  "preview-offline-message": "Internet nun funziona",
  "preview-offline-cta": "Prova n'ata vota"
}, Nl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Cl
}, Symbol.toStringTag, { value: "Module" })), Il = {
  "@metadata": {
    authors: [
      "EdoAug",
      "Jon Harald Søby",
      "Kingu"
    ]
  },
  "continue-reading": "Fortsett å lese",
  "gallery-loading-error": "Kunne ikke laste inn denne siden",
  "gallery-loading-error-offline": "Ikke tilkoblet Internett.",
  "gallery-loading-error-refresh": "Gjeoppfrisk",
  "gallery-loading-still": "Laster fremdeles …",
  "gallery-unknown-author": "Ukjent forfatter",
  "preview-error-message": "Kunne ikke forhåndsvise.",
  "preview-console-error-message": "Forhåndsvisning er ikke tilgjengelig for artikkelen «$1» (Språk: $2)",
  "read-on-wiki": "Les på Wikipedia",
  "read-more": "Les mer på Wikipedia",
  "preview-disambiguation-message": "Tittelen <strong>$1</strong> er tilknyttet mer enn én artikkel på Wikipedia.",
  "preview-offline-message": "Ingen tilgjengelige tilkoblinger til Internett.",
  "preview-offline-cta": "Prøv igjen"
}, Dl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Il
}, Symbol.toStringTag, { value: "Module" })), Hl = {
  "@metadata": {
    authors: [
      "Nirajan pant"
    ]
  },
  "continue-reading": "पढाइलाई निरन्तरता दिनुहोस्",
  "gallery-loading-error": "यस छबिलाई खोल्दा यहाँ केही त्रुटि हुन गएको छ",
  "gallery-loading-error-offline": "इन्टरनेट जडान उपलब्ध छैन्।",
  "gallery-loading-error-refresh": "पुन:ताजा",
  "gallery-loading-still": "अझै खुलिरहेको छ",
  "gallery-unknown-author": "अज्ञात लेखक",
  "preview-error-message": "यस पूर्वावलोकनलाई प्रदर्शन गर्दा यहाँ केही उलझन भइरहेको छ।",
  "preview-console-error-message": "लेख '$1' (भाषा: $2) का लागि पूर्वावलोकन उपलब्ध छैन्",
  "read-on-wiki": "विकिपिडियामा पढ्नुहोस्",
  "read-more": "थप विकिपिडियामा पढ्नुहोस्",
  "preview-disambiguation-message": "<strong>$1</strong> शीर्षक विकिपिडियामा रहेका एकभन्दा बढी लेखहरूसँग सम्बन्धित छ।",
  "preview-offline-message": "इन्टरनेट जडान उपलब्ध छैन्।",
  "preview-offline-cta": "पुन: प्रयास गर्नुहोस्"
}, Bl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Hl
}, Symbol.toStringTag, { value: "Module" })), Ul = {
  "@metadata": {
    authors: [
      "Anugrahgori",
      "Slaia"
    ]
  },
  "continue-reading": "Tohugö wombaso",
  "gallery-loading-error": "So zifasala me tehalö gambara andre",
  "gallery-loading-error-offline": "Lö hadöi jaringan internet.",
  "gallery-loading-error-refresh": "Fuli halö",
  "gallery-loading-still": "Muhalö na sa",
  "gallery-unknown-author": "Lö töi zamazökhi",
  "preview-error-message": "So zifasala götö wangoroma'ö khala-khala andre.",
  "preview-console-error-message": "Lö fangoroma'ö sura '$1' (Li: $2)",
  "read-on-wiki": "Baso yaŵa ba Wikipedia",
  "read-more": "Baso na sa yaŵa ba Wikipedia",
  "preview-disambiguation-message": "Högö <strong>$1</strong> no fakhai ba ha'uga ngawua zura ba Wikipedia",
  "preview-offline-message": "Lö hadöi jaringan internet.",
  "preview-offline-cta": "Fuli tesi"
}, Fl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ul
}, Symbol.toStringTag, { value: "Module" })), Yl = {
  "@metadata": {
    authors: [
      "Nskjnv"
    ]
  },
  "continue-reading": "సురుమ్ వాసిప్స అనేకద్",
  "gallery-loading-error": "ఈ బొమ్మన్ ఒలిపేకత్తి గల్తీ ఎద్దిన్",
  "gallery-loading-error-offline": "ఇంటర్నెట్ అంతె వరేద్",
  "gallery-loading-error-refresh": "పెన అదుం",
  "gallery-loading-still": "ఇంకా లోడ్ ఏర్సద్",
  "gallery-unknown-author": "వాయకన్ద్ ఎరుకతోద్",
  "preview-error-message": "ఇత్తి ఒలిపేకత్తి ఎద్దో గల్తీ ఎద్దిన్",
  "preview-console-error-message": "ఈ పేజీ పోదే గొట్టిక్ తొతె '$1' (గొట్టి: $2)",
  "read-on-wiki": "వికిపీడియాత్ వాసిపుర్",
  "read-more": "ఇంకా పెన వికీపీడియాత్ వాసిపుర్",
  "preview-disambiguation-message": "పేరొక్కద్ తెలుగు ఎన ఎక్కువ వికీపీడియా గొట్టిక్ అంచా",
  "preview-offline-message": "ఇంటర్నెట్ అంతె వరేద్",
  "preview-offline-cta": "పెన అదుం"
}, Gl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Yl
}, Symbol.toStringTag, { value: "Module" })), Vl = {
  "@metadata": {
    authors: [
      "Mainframe98",
      "Nickthijssen1994",
      "Romaine"
    ]
  },
  "continue-reading": "Verder lezen",
  "gallery-loading-error": "Er is een fout opgetreden bij het laden van deze afbeelding",
  "gallery-loading-error-offline": "Geen internetverbinding beschikbaar.",
  "gallery-loading-error-refresh": "Vernieuwen",
  "gallery-loading-still": "Nog steeds aan het laden",
  "gallery-unknown-author": "Auteur onbekend",
  "preview-error-message": "Er is een probleem opgetreden bij het weergeven van deze voorvertoning",
  "preview-console-error-message": "Voorbeeldweergave onbeschikbaar voor artikel '$1' (Taal: $2)",
  "read-on-wiki": "Op Wikipedia lezen",
  "read-more": "Meer lezen op Wikipedia",
  "preview-disambiguation-message": "De titel <strong>$1</strong> is gerelateerd aan meer dan één artikel op Wikipedia.",
  "preview-offline-message": "Geen internetverbinding beschikbaar.",
  "preview-offline-cta": "Probeer het opnieuw"
}, Kl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Vl
}, Symbol.toStringTag, { value: "Module" })), Xl = {
  "@metadata": {
    authors: [
      "Sophie"
    ]
  },
  "continue-reading": "Fortsett å lesa",
  "gallery-loading-error-offline": "Ikkje tilkopla på Internett.",
  "gallery-unknown-author": "Ukjend forfattar",
  "read-on-wiki": "Les på Wikipedia",
  "read-more": "Les meir på Wikipedia",
  "preview-offline-message": "Ikkje tilkopla på Internett.",
  "preview-offline-cta": "Prøv igjen"
}, Jl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Xl
}, Symbol.toStringTag, { value: "Module" })), Zl = {
  "@metadata": {
    authors: [
      "Noktonissian"
    ]
  },
  "continue-reading": "ᩋ᩵ᩣ᩠ᨶᨲᩬᩴ᩵ᨳᩯ᩠ᨾ",
  "gallery-loading-error": "ᨠᩮᩥ᩠ᨯᨠᩣ᩠ᩁᨹᩥ᩠ᨯᨻᩖᩣ᩠ᨯᨲᩬᩁᩉᩖᩰᩫᨯ᩺ᨽᩣ᩠ᨻᨶᩦ᩶",
  "gallery-loading-error-offline": "ᨷᩴᨾᩦᩈᩢᨬ᩠ᨬᩣ᩠ᨱᩋᩥ᩠ᨶᨴᩮᩬᩥᩁ᩺ᨶᩮᩢ᩠ᨴ",
  "gallery-loading-error-refresh": "ᩉᩖᩰᩫᨯ᩺ᨳᩯ᩠ᨾᩉ᩠ᨾᩱ᩵",
  "gallery-loading-still": "ᨿᩢ᩠ᨦᩉᩖᩰᩫᨯ᩺ᨷᩴᩓ᩠ᩅ",
  "gallery-unknown-author": "ᨷᩴ᩵ᩁᩪ᩶ᨧᩢ᩠ᨠᨹᩪ᩶ᨡ᩠ᨿᩁ",
  "preview-error-message": "ᨠᩣ᩠ᩁᩈᨯᩯ᩠ᨦᨹᩫ᩠ᩃᨲᩫ᩠ᩅᩀ᩵ᩣ᩠ᨦᨶᩦ᩶ᨾᩦᨷᩢᨬ᩠ᩉᩣ",
  "preview-console-error-message": 'ᨷᩴ᩵ᨾᩦᨲ᩠ᩅᩫᩀ᩵ᩣ᩠ᨦᨡᩬᨦᨷᩫ᩠ᨴᨤ᩠ᩅᩣ᩠ᨾ "$1" (ᨽᩣᩈᩣ: $2)',
  "read-on-wiki": "ᩋ᩵ᩣ᩠ᨶᨯᩱ᩶ᨶᩲᩅᩥᨠᩥᨽᩦᨯ᩠ᨿᩮ",
  "read-more": "ᩋ᩵ᩣ᩠ᨶᨲᩬᩴ᩵ᨯᩱ᩶ᨶᩲᩅᩥᨠᩥᨽᩦᨯ᩠ᨿᩮ",
  "preview-disambiguation-message": "ᩉ᩠ᩅᩫᨡᩬᩴ᩶ <strong>$1</strong> ᨠ᩠ᨿ᩵ᩅᨡᩬ᩶ᨦᨠᩢ᩠ᨷᨷᩫ᩠ᨴᨤ᩠ᩅᩣ᩠ᨾᨷᩫ᩠ᨶᩅᩥᨠᩥᨽᩦᨯ᩠ᨿᩮᨶᩢ᩠ᨠᩉᩖᩮᩬᩥᩋᨶᩧ᩠᩵ᨦᨷᩫ᩠ᨴᨤ᩠ᩅᩣ᩠ᨾ",
  "preview-offline-message": "ᨷᩴᨾᩦᩈᩢᨬ᩠ᨬᩣ᩠ᨱᩋᩥ᩠ᨶᨴᩮᩬᩥᩁ᩺ᨶᩮᩢ᩠ᨴ",
  "preview-offline-cta": "ᩃᩬᨦᨳᩯ᩠ᨾᩉ᩠ᨾᩱ᩵"
}, Ql = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Zl
}, Symbol.toStringTag, { value: "Module" })), es = {
  "@metadata": {
    authors: [
      "Lancine.kounfantoh.fofana"
    ]
  },
  "continue-reading": "ߘߐ߬ߞߊ߬ߙߊ߲߬ߠߌ߲ ߘߊߓߊ߲߫",
  "gallery-loading-error": "ߝߎ߬ߕߎ߲߬ߕߌ ߘߏ߫ ߕߘߍ߬ ߦߋ߫ ߦߋ߲߬ ߖߌ߬ߦߊ߬ߓߍ ߣߌ߲߬ ߟߊߢߎ߲߫ ߕߎߡߊ ߟߊ߫.",
  "gallery-loading-error-offline": "ߓߟߐߟߐ ߜߊ߲߬ߞߎ߲߬ߠߌ߲߫ ߕߍ߫ ߦߋ߲߬",
  "gallery-loading-error-refresh": "ߞߵߊ߬ ߟߊߛߎߡߊ߫",
  "gallery-loading-still": "ߊ߬ ߟߊߢߎ߲ ߦߴߌ ߘߐ߫ ߡߎߣߎ߲߬",
  "gallery-unknown-author": "ߛߓߍߦߟߊ߫ ߡߊߟߐ߲ߓߊߟߌ",
  "preview-error-message": "ߝߙߋߞߋ ߘߏ߫ ߕߘߍ߬ ߦߴߊ߬ ߘߐ߫ ߦߋߟߌ ߣߌ߲߬ ߠߊߓߊ߯ߙߊ߫ ߕߎߡߊ ߟߊ߫.",
  "preview-console-error-message": "ߢߍߦߋߟߌ߫ ߕߴߦߋ߲߬ ߞߎߡߘߊ «$1» ߢߍ߫ (ߞߊ߲:$2)",
  "read-on-wiki": "ߘߐ߬ߞߊ߬ߙߊ߲߬ߠߌ߲ ߞߍ߫ ߥߞߌߔߋߘߌߦߊ ߞߊ߲߬",
  "read-more": "ߘߏ߫ ߜߘߍ߫ ߟߎ߫ ߘߐߞߊ߬ߙߊ߲߫ ߥߞߌߔߋߘߌߦߊ ߞߊ߲߬",
  "preview-disambiguation-message": "ߞߎ߲߬ߕߐ߮ <strong>$1</strong> ߜߋ߲߭ߞߘߎ߬ߢߐ߲߮ ߞߊߛߌߦߊ߫ ߞߎߡߘߊ߫ ߞߋߟߋ߲߫ ߘߌ߫ ߥߞߌߔߋߘߌߦߊ ߣߌ߲߬ ߠߊ߫.",
  "preview-offline-message": "ߓߟߐߟߐ ߜߊ߲߬ߞߎ߲߬ߠߌ߲߫ ߕߍ߫ ߦߋ߲߬.",
  "preview-offline-cta": "ߊ߬ ߡߊߝߍߣߍ߲߫ ߕߎ߲߯"
}, rs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: es
}, Symbol.toStringTag, { value: "Module" })), is = {
  "@metadata": {
    authors: [
      "Kakonjo"
    ]
  },
  "continue-reading": "Gumizamu n'oshoma",
  "gallery-loading-error": "Habaho Enshobi omu kworeka ekishushani ekyi",
  "gallery-loading-error-offline": "Tihariho okukwatanisa kwa internet okuliho",
  "gallery-loading-error-refresh": "Garuza busya",
  "gallery-loading-still": "Kikiriyo Ni kiija",
  "gallery-unknown-author": "Nyakukikora tari kumanywa",
  "preview-error-message": "Ekyi nikyo Kya kiri ekizibu omu kworeka ebiriyo nibikorwa",
  "preview-console-error-message": "Ebiriyo nibikorwa tibiriho ahabwa orubaju '$1' (Orurimi:$2)",
  "read-on-wiki": "Shoma Ahari Wikipediya",
  "read-more": "Shoma bingi Ahari wikipediya",
  "preview-disambiguation-message": "Omutwe mukuru <strong>$1</strong> gwiine obuzaare nana Engingo enyiingi aha Wikipediya",
  "preview-offline-message": "Tihiine internet yoona eriho hati",
  "preview-offline-cta": "Gyezaho ogudi murundi"
}, as = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: is
}, Symbol.toStringTag, { value: "Module" })), ns = {
  "@metadata": {
    authors: [
      "BrennodAloisi",
      "Nicolas Eynaud"
    ]
  },
  "continue-reading": "Contunhar a legir",
  "gallery-loading-error": "Una error a agut luòc durant lo cargament d'aquel imatge.",
  "gallery-loading-error-offline": "Ges de connexion internet disponible",
  "gallery-loading-error-refresh": "Refrescar",
  "gallery-loading-still": "Cargament totjorn en cors",
  "gallery-unknown-author": "Autor desconegut",
  "read-on-wiki": "Legir sus Wikipèdia",
  "read-more": "Legir mai sus Wikipèdia",
  "preview-disambiguation-message": "Lo títol <strong>$1</strong> es liat a mai d'un article dins Wikipèdia.",
  "preview-offline-message": "Ges de connexion internet disponible.",
  "preview-offline-cta": "Ensajatz tornamai"
}, ts = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ns
}, Symbol.toStringTag, { value: "Module" })), os = {
  "@metadata": {
    authors: [
      "Maammee"
    ]
  },
  "continue-reading": "Dubbisuu itti fufi",
  "gallery-loading-error": "Dogoggara suura kana fee'utti ta'e",
  "gallery-loading-error-offline": "Konnekshiniin intarneetaa hin jiru.",
  "gallery-loading-error-refresh": "Haaromsi",
  "gallery-loading-still": "Ammayyu fe'aara",
  "gallery-unknown-author": "Barreessaan hin beekamu",
  "preview-error-message": "Yeroo yaalii kana agarsiisuu dhimma ta'e.",
  "read-on-wiki": "Wikipiidiyaa irra Dubbisi",
  "read-more": "Dabalata Wikipiidiyaa irra dubbisi",
  "preview-disambiguation-message": "Mata duree <strong>$1</strong> Wikipiidiyaa irra barruu tokko ol waliin walqabata.",
  "preview-offline-message": "Konnekshiniin intarneetaa hin jiru.",
  "preview-offline-cta": "Irra deebi'ii yaali"
}, ls = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: os
}, Symbol.toStringTag, { value: "Module" })), ss = {
  "@metadata": {
    authors: [
      "Kuldeepburjbhalaike"
    ]
  },
  "continue-reading": "ਪੜ੍ਹਨਾ ਜਾਰੀ ਰੱਖੋ",
  "gallery-loading-error": "ਇਸ ਚਿੱਤਰ ਨੂੰ ਲੋਡ ਕਰਨ ਵਿੱਚ ਇੱਕ ਤਰੁੱਟੀ ਆਈ ਸੀ",
  "gallery-loading-error-offline": "ਕੋਈ ਇੰਟਰਨੈਟ ਕਨੈਕਸ਼ਨ ਉਪਲਬਧ ਨਹੀਂ ਹੈ।",
  "gallery-loading-error-refresh": "ਤਾਜ਼ਾ ਕਰੋ",
  "gallery-loading-still": "ਹਾਲੇ ਵੀ ਲੋਡ ਹੋ ਰਿਹਾ ਹੈ",
  "gallery-unknown-author": "ਅਣਜਾਣ ਲੇਖਕ",
  "preview-error-message": "ਇਸ ਪੂਰਵ-ਝਲਕ ਨੂੰ ਪ੍ਰਦਰਸ਼ਿਤ ਕਰਨ ਦੌਰਾਨ ਕੋਈ ਸਮੱਸਿਆ ਆਈ ਸੀ।",
  "preview-console-error-message": "ਲੇਖ '$1' (ਭਾਸ਼ਾ: $2) ਲਈ ਪੂਰਵ-ਝਲਕ ਉਪਲਬਧ ਨਹੀਂ ਹੈ",
  "read-on-wiki": "ਵਿਕੀਪੀਡੀਆ 'ਤੇ ਪੜ੍ਹੋ",
  "read-more": "ਵਿਕੀਪੀਡੀਆ 'ਤੇ ਹੋਰ ਪੜ੍ਹੋ",
  "preview-disambiguation-message": "ਸਿਰਲੇਖ <strong>$1</strong> ਵਿਕੀਪੀਡੀਆ 'ਤੇ ਇੱਕ ਤੋਂ ਵੱਧ ਲੇਖਾਂ ਨਾਲ ਸਬੰਧਤ ਹੈ।",
  "preview-offline-message": "ਕੋਈ ਇੰਟਰਨੈਟ ਕਨੈਕਸ਼ਨ ਉਪਲਬਧ ਨਹੀਂ ਹੈ।",
  "preview-offline-cta": "ਫਿਰ ਕੋਸ਼ਿਸ਼ ਕਰੋ"
}, ds = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ss
}, Symbol.toStringTag, { value: "Module" })), gs = {
  "@metadata": {
    authors: [
      "ObaTango"
    ]
  },
  "continue-reading": "Sigui lesa",
  "gallery-loading-error": "Tabatin un eror ora di karga e imágen akí",
  "gallery-loading-error-offline": "No tin konekshon di internèt.",
  "gallery-loading-error-refresh": "Aktualisá",
  "gallery-loading-still": "Ainda ta karga",
  "gallery-unknown-author": "Outor deskonosí",
  "preview-error-message": "Tabatin un problema ora di mustra e bista previo akí.",
  "preview-console-error-message": "No tin bista previo pa artíkulo '$1' (Idioma: $2)",
  "read-on-wiki": "Lesa riba Wikipedia",
  "read-more": "Lesa mas riba Wikipedia",
  "preview-disambiguation-message": "E título <strong>$1</strong>ta relashoná ku mas di un artíkulo riba Wikipedia.",
  "preview-offline-message": "No tin konekshon di internèt disponibel.",
  "preview-offline-cta": "Purba di nobo"
}, cs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: gs
}, Symbol.toStringTag, { value: "Module" })), us = {
  "@metadata": {
    authors: [
      "Chrumps",
      "Krzyz23",
      "Rail"
    ]
  },
  "continue-reading": "Czytaj dalej",
  "gallery-loading-error": "Podczas ładowania tego obrazu wystąpił błąd",
  "gallery-loading-error-offline": "Nie ma dostępnego połączenia internetowego.",
  "gallery-loading-error-refresh": "Odśwież",
  "gallery-loading-still": "Wciąż wczytuję",
  "gallery-unknown-author": "Autor nieznany",
  "preview-error-message": "Wystąpił problem podczas wyświetlania podglądu.",
  "preview-console-error-message": "Podgląd niedostępny dla artykułu „$1” (język: $2)",
  "read-on-wiki": "Przeczytaj na Wikipedii",
  "read-more": "Przeczytaj więcej na Wikipedii",
  "preview-disambiguation-message": "Tytuł <strong>$1</strong> jest związany z więcej niż jednym artykułem na Wikipedii.",
  "preview-offline-message": "Nie ma dostępnego połączenia internetowego.",
  "preview-offline-cta": "Spróbuj ponownie"
}, ms = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: us
}, Symbol.toStringTag, { value: "Module" })), fs = {
  "@metadata": {
    authors: [
      "Abbas dhothar",
      "Bgo eiu"
    ]
  },
  "continue-reading": "ہور پڑھایو",
  "gallery-loading-error": "ایہہ تصویر لوڈ کر نہیں سکیا",
  "gallery-loading-error-offline": "انٹرنیٹ کنیکشن دستیاب نہیں ا‏‏ے۔",
  "gallery-loading-error-refresh": "تازہ کرو",
  "gallery-loading-still": "حالیہ لوڈ کردے",
  "gallery-unknown-author": "لیکھک نامعلوم",
  "preview-error-message": "ایہہ ویکھ نیہں سکیا۔",
  "read-on-wiki": "وِکیپیڈیا تے پڑھایو",
  "read-more": "ویکیپیڈیا اُتے ہور پڑھو",
  "preview-offline-message": "انٹرنیٹ کنیکشن دستیاب نئيں ا‏‏ے۔",
  "preview-offline-cta": "فیر کرو"
}, ps = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: fs
}, Symbol.toStringTag, { value: "Module" })), ys = {
  "@metadata": {
    authors: [
      "Eduardo Addad de Oliveira",
      "Eduardoaddad",
      "Juan90264",
      "LeFaith"
    ]
  },
  "continue-reading": "Continuar lendo",
  "gallery-loading-error": "Ocorreu um erro ao carregar esta imagem",
  "gallery-loading-error-offline": "Sem ligação à Internet disponível.",
  "gallery-loading-error-refresh": "Atualizar",
  "gallery-loading-still": "Ainda carregando",
  "gallery-unknown-author": "Autor desconhecido",
  "preview-error-message": "Ocorreu um problema ao exibir esta pré-visualização.",
  "preview-console-error-message": "Pré-visualização indisponível para o artigo '$1' (Idioma: $2)",
  "read-on-wiki": "Leia na Wikipédia",
  "read-more": "Leia mais na Wikipédia",
  "preview-disambiguation-message": "Título <strong>$1</strong> está relacionado a mais de um artigo na Wikipédia.",
  "preview-offline-message": "Sem ligação à Internet disponível.",
  "preview-offline-cta": "Tente novamente"
}, _s = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ys
}, Symbol.toStringTag, { value: "Module" })), hs = {
  "@metadata": {
    authors: [
      "Dvpita",
      "Hamilton Abreu"
    ]
  },
  "continue-reading": "Continuar a ler",
  "gallery-loading-error": "Ocorreu um erro ao carregar esta imagem",
  "gallery-loading-error-offline": "Não existe ligação à Internet.",
  "gallery-loading-error-refresh": "Atualizar",
  "gallery-loading-still": "Carregamento em curso",
  "gallery-unknown-author": "Autor desconhecido",
  "preview-error-message": "Ocorreu um erro durante a apresentação desta antevisão.",
  "preview-console-error-message": "Antevisão indisponível para o artigo '$1' (língua: $2)",
  "read-on-wiki": "Ler na Wikipédia",
  "read-more": "Leia mais na Wikipédia",
  "preview-disambiguation-message": "O título <strong>$1</strong> está relacionado com mais do que um artigo na Wikipédia.",
  "preview-offline-message": "Não existe ligação à Internet.",
  "preview-offline-cta": "Tente novamente"
}, ws = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: hs
}, Symbol.toStringTag, { value: "Module" })), vs = {
  "@metadata": {
    authors: [
      "Nike"
    ]
  },
  "continue-reading": "The message shown in the footer part of the preview popup that allows user to continue reading the summary",
  "gallery-loading-error": "Message shown with fullscreen gallery loading error",
  "gallery-loading-error-offline": "Message shown with fullscreen gallery when offline",
  "gallery-loading-error-refresh": "Message shown with fullscreen gallery loading error",
  "gallery-loading-still": "Message shown 5 seconds after a fullscreen gallery image starts loading",
  "gallery-unknown-author": "Message shown if image author is unknown",
  "preview-error-message": "Message shown with a preview loading error",
  "preview-console-error-message": `Message shown in the JavaScript console when a preview cannot be shown due to an error. Params: 
* $1 - Title of the article.
* $2 - Language code of the article.`,
  "read-on-wiki": "Message shown in the Call to Action (CTA) of a preview loading error or disambiguation page",
  "read-more": "The message shown in the footer part of the preview popup that brings user to the wikipedia page to read more about the article",
  "preview-disambiguation-message": `The message shown for disambiguation pages. Params: 
* $1 - Title of the disambiguation page.`,
  "preview-offline-message": "The message shown when offline",
  "preview-offline-cta": "The message shown as the call to action (CTA) when offline"
}, ks = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: vs
}, Symbol.toStringTag, { value: "Module" })), bs = {
  "@metadata": {
    authors: [
      "Ferdinand IF99"
    ]
  },
  "continue-reading": "Bandanya Usoma",
  "gallery-loading-error": "Habayemwo ikosa mu kwugurura iyi sanamu",
  "gallery-loading-error-offline": "Nta interinete ihari",
  "gallery-loading-error-refresh": "Subiramwo",
  "gallery-loading-still": "Biracuguruka"
}, js = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: bs
}, Symbol.toStringTag, { value: "Module" })), Ss = {
  "@metadata": {
    authors: [
      "NGC 54"
    ]
  },
  "continue-reading": "Continuă lectura",
  "gallery-loading-error": "A apărut o eroare la încărcarea acestei imagini",
  "gallery-loading-error-offline": "Nu este disponibilă nicio conexiune la internet.",
  "gallery-loading-error-refresh": "Reîmprospătează",
  "gallery-loading-still": "Încă se încarcă",
  "gallery-unknown-author": "Autor necunoscut",
  "preview-error-message": "A apărut o eroare la afișarea acestei previzualizări.",
  "preview-console-error-message": "Previzualizare indisponibilă pentru articolul '$1' (Limbă: $2)",
  "read-on-wiki": "Citiți pe Wikipedia",
  "read-more": "Citiți mai mult pe Wikipedia",
  "preview-disambiguation-message": "Titlul <strong>$1</strong> este legat de mai mult de un singur articol pe Wikipedia.",
  "preview-offline-message": "Nu este disponibilă nicio conexiune la internet.",
  "preview-offline-cta": "Reîncearcă"
}, Ts = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ss
}, Symbol.toStringTag, { value: "Module" })), Os = {
  "@metadata": {
    authors: [
      "Joetaras"
    ]
  },
  "continue-reading": "Condinue a leggere",
  "gallery-loading-error": "ha assute 'nerrore carecanne st'immaggine",
  "gallery-loading-error-offline": "Nisciuna connessione Indernette disponibbele.",
  "gallery-loading-error-refresh": "Aggiorne",
  "gallery-loading-still": "Stoche a careche angore",
  "gallery-unknown-author": "Autore scanusciute",
  "preview-error-message": "Ha assute 'nu probbleme sus a'u 'ndrucamende de l'andeprime.",
  "preview-console-error-message": "Andeprime indisponibbele pa vôsce '$1' (Lènghe: $2)",
  "read-on-wiki": "'Mbormaziune sus a Uicchipèdie",
  "read-more": "Otre 'mbormaziune sus a Uicchipèdie",
  "preview-disambiguation-message": "'U titole <strong>$1</strong> jè collegate a cchiù de 'na vôsce sus a Uicchipèdie.",
  "preview-offline-message": "Nisciuna connessione Indernette disponibbele.",
  "preview-offline-cta": "Pruève arrete"
}, $s = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Os
}, Symbol.toStringTag, { value: "Module" })), As = {
  "@metadata": {
    authors: [
      "Facenapalm",
      "Okras",
      "Pacha Tchernof"
    ]
  },
  "continue-reading": "Продолжить чтение",
  "gallery-loading-error": "Произошла ошибка при загрузке изображения",
  "gallery-loading-error-offline": "Нет подключения к Интернету.",
  "gallery-loading-error-refresh": "Обновить",
  "gallery-loading-still": "Загрузка продолжается",
  "gallery-unknown-author": "Автор неизвестен.",
  "preview-error-message": "Возникла проблема в ходе предпросмотра.",
  "preview-console-error-message": "Предпросмотр недоступен для статьи '$1'  (язык: $2)",
  "read-on-wiki": "Читать в Википедии",
  "read-more": "Читать далее в Википедии",
  "preview-disambiguation-message": "Название <strong>$1</strong> относится к более чем одной статье в Википедии.",
  "preview-offline-message": "Нет подключения к Интернету.",
  "preview-offline-cta": "Попробуйте ещё раз"
}, Es = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: As
}, Symbol.toStringTag, { value: "Module" })), zs = {
  "@metadata": {
    authors: [
      "Durga Soren"
    ]
  },
  "gallery-loading-error": "ᱪᱤᱛᱟ.ᱨ ᱞᱟᱫᱮᱜ ᱨᱮ ᱦᱩᱲᱟ.ᱜ ᱛᱟᱦᱮᱸ ᱠᱟᱱᱟ",
  "gallery-loading-still": "ᱱᱤᱛ ᱦᱚᱸ ᱞᱟᱫᱮᱜ ᱠᱟᱱ ᱜᱮᱭᱟ"
}, xs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: zs
}, Symbol.toStringTag, { value: "Module" })), Ms = {
  "@metadata": {
    authors: [
      "L2212"
    ]
  },
  "continue-reading": "Sighi a lèghere",
  "gallery-loading-error": "B'at àpidu una faddina in su carrigamentu de custa immàgine",
  "gallery-loading-error-offline": "Peruna connessione a ìnternet a disponimentu.",
  "gallery-loading-error-refresh": "Agiorna",
  "gallery-loading-still": "Galu carrighende",
  "gallery-unknown-author": "Autore disconnotu",
  "preview-error-message": "B'at àpidu unu problema in sa visualizatzione de custa antiprima.",
  "preview-console-error-message": "Antiprima no a disponimentu pro s'artìculu '$1' (Limba: $2)",
  "read-on-wiki": "Leghe in Wikipedia",
  "read-more": "Àteras informatziones in Wikipedia",
  "preview-disambiguation-message": "Su tìtulu <strong>$1</strong> est ligadu a prus de un'artìculu in Wikipedia.",
  "preview-offline-message": "Peruna connessione a ìnternet a disponimentu.",
  "preview-offline-cta": "Torra a proare"
}, Ps = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ms
}, Symbol.toStringTag, { value: "Module" })), Ls = {
  "@metadata": {
    authors: [
      "Ajeje Brazorf"
    ]
  },
  "continue-reading": "Cuntinua a lèggiri",
  "gallery-loading-error-offline": "Nuḍḍa cunnissioni Internet dispunìbbili.",
  "gallery-unknown-author": "Auturi scanusciuta",
  "preview-console-error-message": "Antiprima nun dispunìbbili pâ vuci '$1' (lingua: $2)",
  "read-on-wiki": "Leggi supra Wikipedia",
  "read-more": "Ulteriuri nfurmazziuni supra Wikipedia",
  "preview-offline-message": "Nuḍḍa cunnissioni Internet dispunìbbili."
}, qs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ls
}, Symbol.toStringTag, { value: "Module" })), Ws = {
  "@metadata": {
    authors: [
      "Mehtab ahmed"
    ]
  },
  "continue-reading": "پڙھڻ جاري رکو",
  "gallery-loading-error": "ھن عڪس کي لاھڻ ۾ ڪا چُڪَ ٿي.",
  "gallery-loading-error-offline": "ڪوبہ انٽرنيٽ ڪنيڪشن موجود ناهي.",
  "gallery-loading-error-refresh": "تازو ڪريو",
  "gallery-loading-still": "اڃا لوڊ ٿي رهيو آهي",
  "gallery-unknown-author": "مصنف اڻڄاتل",
  "preview-error-message": "ھي پيش-نگاھ ڏيکارڻ ۾ ڪو مسئلو ھيو.",
  "preview-console-error-message": "مضمون '$1' (ٻولي: $2) لاءِ پيش-نگاھ دستياب ناهي",
  "read-on-wiki": "وڪيپيڊيا تي پڙهو",
  "read-more": "وڪيپيڊيا تي وڌيڪ پڙھو",
  "preview-disambiguation-message": "عنوان <strong>$1</strong> وڪيپيڊيا تي هڪ کان وڌيڪ مضمونن سان لاڳاپيل آهي.",
  "preview-offline-message": "ڪوبہ انٽرنيٽ ڪنيڪشن موجود ناهي.",
  "preview-offline-cta": "ٻيھر ڪوشش ڪريو"
}, Rs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ws
}, Symbol.toStringTag, { value: "Module" })), Cs = {
  "@metadata": {
    authors: [
      "Vlad5250"
    ]
  },
  "continue-reading": "Nastavite čitati",
  "gallery-loading-error": "Došlo je do greške pri učitavanju ove slike",
  "gallery-loading-error-offline": "Internetska veza nije dostupna.",
  "gallery-loading-error-refresh": "Preučitaj",
  "gallery-loading-still": "I dalje se učitava",
  "gallery-unknown-author": "Nepoznat autor",
  "preview-error-message": "Došlo je do problema prilikom prikazivanja ovog pregleda.",
  "preview-console-error-message": "Pregled nije dostupan za članak '$1' (Jezik: $2)",
  "read-on-wiki": "Pročitajte na Wikipediji",
  "read-more": "Pročitajte više na Wikipediji",
  "preview-disambiguation-message": "Naslov <strong>$1</strong> povezan jes više članaka na Wikipediji.",
  "preview-offline-message": "Internetska veza nije dostupna.",
  "preview-offline-cta": "Pokušajte ponovo"
}, Ns = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Cs
}, Symbol.toStringTag, { value: "Module" })), Is = {
  "@metadata": {
    authors: [
      "Olve Utne"
    ]
  },
  "continue-reading": "Biso låhkåmin",
  "gallery-loading-error-refresh": "Lässti bielev åđđåsist",
  "gallery-loading-still": "Änj vil lässtimin",
  "gallery-unknown-author": "Namadis tjállej",
  "preview-error-message": "Ij máhte vuosedit dáv åvvdåvuosedimev.",
  "read-on-wiki": "Lågå Wikipedian",
  "read-more": "Lågå ienap Wikipedian",
  "preview-offline-cta": "Gähttjalada"
}, Ds = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Is
}, Symbol.toStringTag, { value: "Module" })), Hs = {
  "@metadata": {
    authors: [
      "Jaroslav.micek",
      "Yardom78"
    ]
  },
  "continue-reading": "Pokračovať v čítaní",
  "gallery-loading-error": "Pri načítavaní tohto obrázku došlo k chybe.",
  "gallery-loading-error-offline": "Nieje dostupné internetové pripojenie.",
  "gallery-loading-error-refresh": "Obnoviť",
  "gallery-loading-still": "Stále načítava",
  "gallery-unknown-author": "Autor neznámy",
  "preview-error-message": "Pri zobrazovaní tohto náhľadu sa objavil problém.",
  "preview-console-error-message": "Pre článok '$1' nie je dostupný náhľad (jazyk: $2)",
  "read-on-wiki": "Čítať na Wikipédii",
  "read-more": "Čítať viac na Wikipédii",
  "preview-disambiguation-message": "Názov  <strong>$1</strong> súvisí s viac než jedným artiklom na Wikipédii.",
  "preview-offline-message": "Nieje dostupné internetové pripojenie.",
  "preview-offline-cta": "Skúsiť znova"
}, Bs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Hs
}, Symbol.toStringTag, { value: "Module" })), Us = {
  "@metadata": {
    authors: [
      "Eleassar"
    ]
  },
  "continue-reading": "Nadaljuj branje",
  "gallery-loading-error": "Pri nalaganju te slike je prišlo do napake",
  "gallery-loading-error-offline": "Internetna povezava ni na voljo.",
  "gallery-loading-error-refresh": "Osveži",
  "gallery-loading-still": "Še vedno nalagam",
  "gallery-unknown-author": "Avtor neznan",
  "preview-error-message": "Pri prikazovanju tega predogleda je prišlo do napake.",
  "preview-console-error-message": "Predogled za članek »$1« (jezik: $2) ni na voljo",
  "read-on-wiki": "Berite v Wikipediji",
  "read-more": "Več o tem v Wikipediji",
  "preview-disambiguation-message": "Naslov <strong>$1<&strong> se povezuje z več kot enim člankom v Wikipediji.",
  "preview-offline-message": "Internetna povezava ni na voljo.",
  "preview-offline-cta": "Poskusite znova"
}, Fs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Us
}, Symbol.toStringTag, { value: "Module" })), Ys = {
  "@metadata": {
    authors: [
      "Seipinne"
    ]
  },
  "continue-reading": "Juáđhi luuhâm",
  "gallery-loading-error": "Kove luođđim ij luhostum",
  "gallery-loading-error-offline": "Ij internet-ohtâvuođâ",
  "gallery-loading-error-refresh": "Peivid",
  "gallery-loading-still": "Luođiimin vala-uv",
  "gallery-unknown-author": "Tubdâmettum tahhee",
  "preview-error-message": "Munekejâdem ij pyevti čäittiđ",
  "preview-console-error-message": "Munekejâdem ij lah ooláádmuddoost artikkâlân '$1' (Kielâ: $2)",
  "read-on-wiki": "Luuvâ Wikipediast",
  "read-more": "Luuvâ lase Wikipediast",
  "preview-disambiguation-message": "Paječaalâ <strong>$1</strong> lahta eenâb ko oohtân Wikipedia-artikkâlân.",
  "preview-offline-message": "Ij internet-ohtâvuođâ.",
  "preview-offline-cta": "Iirât uđđâsist"
}, Gs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ys
}, Symbol.toStringTag, { value: "Module" })), Vs = {
  "@metadata": {
    authors: [
      "Abdullahi"
    ]
  },
  "continue-reading": "Sii Akhri",
  "gallery-loading-error-refresh": "Cusbooneysii",
  "gallery-unknown-author": "Qoraha lama yaqaan",
  "read-on-wiki": "Ka akhri Wikipedia",
  "read-more": "Faahfaahin dheeraad ka aqri Wikipedia"
}, Ks = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Vs
}, Symbol.toStringTag, { value: "Module" })), Xs = {
  "@metadata": {
    authors: [
      "Kosovastar"
    ]
  },
  "continue-reading": "Vazhdo leximin",
  "gallery-loading-error": "Pati një gabim gjatë ngarkimit të këtij imazhi",
  "gallery-loading-error-refresh": "Rifresko",
  "gallery-loading-still": "Akoma po ngarkohet",
  "read-on-wiki": "Lexo në Wikipedia",
  "read-more": "Më shumë në Wikipedia"
}, Js = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Xs
}, Symbol.toStringTag, { value: "Module" })), Zs = {
  "@metadata": {
    authors: [
      "Kizule",
      "Milicevic01"
    ]
  },
  "continue-reading": "Настави читање",
  "gallery-loading-error": "Дошло је до грешке при учитавању ове слике",
  "gallery-loading-error-offline": "Нема интернета.",
  "gallery-loading-error-refresh": "Освежи",
  "gallery-loading-still": "Још се учитава",
  "gallery-unknown-author": "Непознат аутор",
  "preview-error-message": "Дошло је до грешке при приказивању овог прегледа.",
  "preview-console-error-message": "Преглед није доступан за чланак „$1” (језик: $2)",
  "read-on-wiki": "Види на Википедији",
  "read-more": "Види више на Википедији",
  "preview-disambiguation-message": "Наслов <strong>$1</strong> се односи на више од једног чланка на Википедији.",
  "preview-offline-message": "Нема доступне интернет конекције.",
  "preview-offline-cta": "Покушај поново"
}, Qs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Zs
}, Symbol.toStringTag, { value: "Module" })), ed = {
  "@metadata": {
    authors: []
  },
  "continue-reading": "Nastavi čitanje",
  "gallery-loading-error": "Došlo je do greške pri učitavanju ove slike",
  "gallery-loading-error-offline": "Nema interneta.",
  "gallery-loading-error-refresh": "Osveži",
  "gallery-loading-still": "Još se učitava",
  "gallery-unknown-author": "Nepoznat autor",
  "preview-error-message": "Došlo je do greške pri prikazivanju ovog pregleda.",
  "preview-console-error-message": "Pregled nije dostupan za članak '$1' (jezik: $2)",
  "read-on-wiki": "Vidi na Vikipediji",
  "read-more": "Vidi više na Vikipediji",
  "preview-disambiguation-message": "Naslov <strong>$1</strong> se odnosi na više od jednog članka na Vikipediji.",
  "preview-offline-message": "Nema dostupne internet konekcije.",
  "preview-offline-cta": "Pokušaj ponovo"
}, rd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ed
}, Symbol.toStringTag, { value: "Module" })), id = {
  "@metadata": {
    authors: [
      "Sabelöga",
      "WikiPhoenix"
    ]
  },
  "continue-reading": "Fortsätt läsa",
  "gallery-loading-error": "Ett fel inträffade när sidan laddades in.",
  "gallery-loading-error-offline": "Ingen internetanslutning är tillgänglig.",
  "gallery-loading-error-refresh": "Uppdatera",
  "gallery-loading-still": "Läser fortfarande in",
  "gallery-unknown-author": "Okänd författare",
  "preview-error-message": "Det uppstod ett problem när förhandsvisningen skulle visas.",
  "preview-console-error-message": 'Förhandsgranskning är inte tillgänglig för artikeln "$1" (Språk: $2)',
  "read-on-wiki": "Läs på Wikipedia",
  "read-more": "Läs mer på Wikipedia",
  "preview-disambiguation-message": "Titeln <strong>$1</strong> är relaterad till fler än en artikel på Wikipedia.",
  "preview-offline-message": "Ingen internetanslutning är tillgänglig.",
  "preview-offline-cta": "Försök igen"
}, ad = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: id
}, Symbol.toStringTag, { value: "Module" })), nd = {
  "@metadata": {
    authors: [
      "এম আবু সাঈদ"
    ]
  },
  "continue-reading": "ꠚꠠꠣ ꠍꠣꠟꠣꠁꠀ ꠎꠣꠅꠇꠣ",
  "gallery-loading-error": "ꠍꠛꠤꠉꠥ ꠟꠃꠒ ꠅꠀꠔ ꠡꠝꠂꠡꠡꠣ ꠅꠁꠉꠦꠍ",
  "gallery-loading-error-offline": "ꠁꠘ꠆ꠐꠣꠞꠘꠦꠐꠞ ꠡꠋꠉꠧ ꠚꠣꠞ ꠘꠣ",
  "gallery-loading-error-refresh": "ꠛꠣꠃꠇ꠆ꠇꠞꠧ",
  "gallery-loading-still": "ꠄꠛꠧ ꠟꠃꠒ ꠅꠞ",
  "gallery-unknown-author": "ꠅꠍꠤꠘ ꠟꠦꠈꠞꠣ",
  "preview-error-message": "ꠁ ꠀꠉ-ꠖꠦꠈꠘꠤ ꠖꠦꠈꠣꠘꠤꠞ ꠡꠝꠄꠇꠥ ꠄꠈꠣꠘ ꠡꠝꠂꠡꠡꠣ ꠅꠁꠍꠦ",
  "preview-console-error-message": "'$1' ꠚꠣꠔꠣ ꠈꠣꠘꠔꠣꠞ ꠀꠉ-ꠖꠦꠈꠘꠤ ꠘꠣꠄ (ꠝꠣꠔ: $2)",
  "read-on-wiki": "ꠃꠁꠇꠤꠙꠤꠒꠤꠀꠔ ꠚꠠꠇꠣ",
  "read-more": "ꠃꠁꠇꠤꠙꠤꠒꠤꠀꠔ ꠀꠞꠧ ꠚꠠꠇꠣ",
  "preview-disambiguation-message": "ꠐꠣꠁꠐꠦꠟ <strong>$1</strong> ꠁꠇꠣꠘ ꠃꠁꠇꠤꠙꠤꠒꠤꠀꠞ ꠄꠈ ꠔꠘꠦ ꠛꠦꠡꠤ ꠚꠣꠔꠣ ꠡꠝ꠆ꠙꠞꠇꠤꠔ",
  "preview-offline-message": "ꠁꠘ꠆ꠐꠣꠞꠘꠦꠐ ꠝꠤꠟꠦꠞ ꠘꠣ",
  "preview-offline-cta": "ꠢꠤꠛ꠆ꠛꠣꠞ ꠍꠦꠡꠐꠣ ꠈꠞꠂꠘ"
}, td = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: nd
}, Symbol.toStringTag, { value: "Module" })), od = {
  "@metadata": {
    authors: [
      "Krol111"
    ]
  },
  "continue-reading": "Czytej dalij",
  "gallery-loading-error": "We czasie ładowanio tego ôbrozka wystōmpiōł feler",
  "gallery-loading-error-offline": "Internec niydostympny.",
  "gallery-loading-error-refresh": "Ôdświyż",
  "gallery-loading-still": "Durch ładujã",
  "gallery-unknown-author": "Autor niyznōmy",
  "preview-error-message": "Wystōmpiōł feler przi wyświytlaniu podglōndu.",
  "preview-console-error-message": "Nie ma podglōndu lo artikla „$1” (godka: $2)",
  "read-on-wiki": "Przeczytej na Wikipedyji",
  "read-more": "Przeczytej wiyncyj na Wikipedyji",
  "preview-disambiguation-message": "Titel <strong>$1</strong> mo cosik ze wiyncyj jak jednym artiklym na Wikipedyji.",
  "preview-offline-message": "Internec niydostympny.",
  "preview-offline-cta": "Sprōbuj zaś"
}, ld = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: od
}, Symbol.toStringTag, { value: "Module" })), sd = {
  "@metadata": {
    authors: [
      "Fahimrazick",
      "Siddhan"
    ]
  },
  "continue-reading": "வாசிப்பைத் தொடர்",
  "gallery-loading-error": "இந்தப் படத்தை ஏற்றுவதில் பிழை இருந்தது",
  "gallery-loading-error-offline": "இணைய இணைப்பு இல்லை",
  "gallery-loading-error-refresh": "புதுப்பி",
  "gallery-loading-still": "இன்னும் ஏற்றப்படுகிறது",
  "gallery-unknown-author": "அறயப்படாத ஆசிரியர்",
  "preview-error-message": "இந்த மாதிரிக்காட்சியைக் காண்பிக்கும் போது சிக்கல் ஏற்பட்டது.",
  "preview-console-error-message": "'$1' கட்டுரைக்கான முன்னோட்டம் கிடைக்கவில்லை (மொழி: $2)",
  "read-on-wiki": "விக்கிபீடியாவில் வாசி",
  "read-more": "விக்கிபீடியாவில் மேலும் வாசி",
  "preview-disambiguation-message": "தலைப்பு <strong>$1</strong> என்பது விக்கிபீடியாவில் ஒன்றுக்கும் மேற்பட்ட கட்டுரைகளுடன் தொடர்புடையது.",
  "preview-offline-message": "இணைய இணைப்பு இல்லை",
  "preview-offline-cta": "மீண்டும் முயல்க"
}, dd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: sd
}, Symbol.toStringTag, { value: "Module" })), gd = {
  "@metadata": {
    authors: [
      "Chaduvari",
      "Veeven"
    ]
  },
  "continue-reading": "చదవడం కొనసాగించండి",
  "gallery-loading-error": "ఈ బొమ్మను చూపించడంలో పొరపాటు జరిగింది",
  "gallery-loading-error-offline": "అంతర్జాల అనుసంధానమేదీ అందుబాటులో లేదు.",
  "gallery-loading-error-refresh": "తాజాపరుచు",
  "gallery-loading-still": "ఇంకా లోడవుతోంది",
  "gallery-unknown-author": "గుర్తుతెలియని రచయిత",
  "preview-error-message": "ఈ మునుజూపు చూపుటలో ఏదో సమస్య వచ్చింది.",
  "preview-console-error-message": "'$1' వ్యాసానికి మునుజూపు అందుబాటులో లేదు (భాష: $2)",
  "read-on-wiki": "వికీపీడియాలో చదవండి",
  "read-more": "ఇంకా వికీపీడియాలో చదవండి",
  "preview-disambiguation-message": "<strong>$1</strong> పేరు ఒకటి కంటే ఎక్కువ వికీపీడియా వ్యాసాలకు సంబంధించివుంది.",
  "preview-offline-message": "అంతర్జాల అనుసందానమేదీ అందుబాటులో లేదు.",
  "preview-offline-cta": "మళ్ళీ ప్రయత్నించండి"
}, cd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: gd
}, Symbol.toStringTag, { value: "Module" })), ud = {
  "@metadata": {
    authors: [
      "Just Sayori",
      "Lookruk",
      "Patsagorn Y.",
      "Prame Tan"
    ]
  },
  "continue-reading": "อ่านต่อ",
  "gallery-loading-error": "เกิดข้อผิดพลาดขณะโหลดภาพนี้",
  "gallery-loading-error-offline": "ไม่มีสัญญาณอินเทอร์เน็ต",
  "gallery-loading-error-refresh": "รีเฟรช",
  "gallery-loading-still": "กำลังโหลดอยู่",
  "gallery-unknown-author": "ไม่รู้จักผู้เขียน",
  "preview-error-message": "มีปัญหาในการแสดงผลตัวอย่างนี้",
  "preview-console-error-message": 'ไม่มีตัวอย่างสำหรับบทความ "$1" (ภาษา: $2)',
  "read-on-wiki": "อ่านบนวิกิพีเดีย",
  "read-more": "อ่านเพิ่มเติมบนวิกิพีเดีย",
  "preview-disambiguation-message": "หัวข้อ <strong>$1</strong> เกี่ยวข้องกับบทความบนวิกิพีเดียมากกว่าหนึ่งบทความ",
  "preview-offline-message": "ไม่มีสัญญาณอินเทอร์เน็ต",
  "preview-offline-cta": "ลองอีกครั้ง"
}, md = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ud
}, Symbol.toStringTag, { value: "Module" })), fd = {
  "@metadata": {
    authors: [
      "Joanmp17"
    ]
  },
  "gallery-loading-error-refresh": "ኣሓድስ",
  "read-on-wiki": "ኣብ ዊኪፐድያ ኣንብብ",
  "read-more": "ተወሳኺ ኣብ ዊኪፐድያ ኣንብብ"
}, pd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: fd
}, Symbol.toStringTag, { value: "Module" })), yd = {
  "@metadata": {
    authors: [
      "Bbeshir"
    ]
  },
  "continue-reading": "ቅራኣት ዋስል",
  "gallery-unknown-author": "ለይት ኣማራ ኬትባይ",
  "read-on-wiki": "ዲብ ዊኪፐድያ ቅርእዎ",
  "read-more": "ዲብ ዊኪፐድያ ዚያደት ቅርኦ",
  "preview-offline-cta": "ካልእ ጅርብ"
}, _d = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: yd
}, Symbol.toStringTag, { value: "Module" })), hd = {
  "@metadata": {
    authors: [
      "TayfunEt.",
      "Zolgoyo"
    ]
  },
  "continue-reading": "Okaň",
  "gallery-loading-error": "Bu suraty ýüklemekde ýalňyşlyk boldy",
  "gallery-loading-error-offline": "Internet birikmesi ýok.",
  "gallery-loading-error-refresh": "Täzelendir",
  "gallery-loading-still": "Entegem ýükleýär",
  "gallery-unknown-author": "Awtory näbelli",
  "preview-error-message": "Bu deslapky syn görkezilende bir mesele ýüze çykdy.",
  "preview-console-error-message": "'$1' makalasy üçin deslapky syn (Dil: $2)",
  "read-on-wiki": "Wikipediýada okaň",
  "read-more": "Wikipediýada has giňişleýin okaň",
  "preview-disambiguation-message": "Ady <strong>$1</strong> Wikipediýada birden köp makala bilen baglanyşykly.",
  "preview-offline-message": "Internet birikmesi ýok.",
  "preview-offline-cta": "Täzeden synanş"
}, wd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: hd
}, Symbol.toStringTag, { value: "Module" })), vd = {
  "@metadata": {
    authors: [
      "GinawaSaHapon",
      "Mrkczr"
    ]
  },
  "continue-reading": "Magpatuloy sa pagbabasa",
  "gallery-loading-error": "Nagka-error habang nilo-load ang larawang ito",
  "gallery-loading-error-offline": "Hindi konektado sa internet.",
  "gallery-loading-error-refresh": "I-refresh",
  "gallery-loading-still": "Naglo-load pa rin",
  "gallery-unknown-author": "Di kilalang may-akda",
  "preview-error-message": "Nagkaroon ng isyu habang pinapakita ang pasilip na ito.",
  "preview-console-error-message": "Walang pasilip para sa artikulong '$1' (Wika: $2)",
  "read-on-wiki": "Basahin sa Wikipedia",
  "read-more": "Magbasa pa sa Wikipedia",
  "preview-disambiguation-message": "Nauugnay ang pamagat na <strong>$1</strong> sa higit sa isang artikulo sa Wikipedia.",
  "preview-offline-message": "Hindi konektado sa internet.",
  "preview-offline-cta": "Subukan muli"
}, kd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: vd
}, Symbol.toStringTag, { value: "Module" })), bd = {
  "@metadata": {
    authors: [
      "Patriot Kor",
      "Patriot Kur",
      "Гусейн"
    ]
  },
  "continue-reading": "Hande Dəvomkə",
  "gallery-loading-error": "Шикили әловә кардејәдә хәто беше",
  "gallery-loading-error-offline": "İnterneti əloğə ni.",
  "gallery-loading-error-refresh": "Nukardə",
  "gallery-loading-still": "Hələn bo",
  "gallery-unknown-author": "Noməlumə mıəllif",
  "preview-error-message": "Бә нав дијә карде хәто беше.",
  "preview-console-error-message": "Preview unavailable for article '$1' (Language: $2)",
  "read-on-wiki": "Byhand Vikipedijədə",
  "read-more": "Ve byhand Vikipedijədə",
  "preview-disambiguation-message": "Ном <strong>$1</strong> ујғуне бә и гыләјсә ве Википедиа мәғолә.",
  "preview-offline-message": "Interneti əloğə ni.",
  "preview-offline-cta": "Nubəsəton čəhd bykə"
}, jd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: bd
}, Symbol.toStringTag, { value: "Module" })), Sd = {
  "@metadata": {
    authors: [
      "SpanishSnake"
    ]
  },
  "continue-reading": "o awen lukin",
  "gallery-loading-error": "sitelen ni li kama la, pakala li kama.",
  "gallery-loading-error-offline": "linja ala li lon.",
  "gallery-loading-error-refresh": "o kama sin",
  "gallery-loading-still": "ijo li awen kama",
  "gallery-unknown-author": "jan pali li sona ala",
  "preview-error-message": "lukin li kama la, pakala li kama.",
  "preview-console-error-message": "$2 la, lukin pi lipu '$1' li lon ala",
  "read-on-wiki": "o lukin lon lipu Wikipesija",
  "read-more": "o lukin e mute lon lipu Wikipesija",
  "preview-disambiguation-message": "nimi <strong>$1</strong> li tawa lipu mute lon lipu Wikipesija.",
  "preview-offline-message": "linja ala li lon.",
  "preview-offline-cta": "o alasa sin"
}, Td = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Sd
}, Symbol.toStringTag, { value: "Module" })), Od = {
  "@metadata": {
    authors: [
      "Hedda",
      "MuratTheTurkish",
      "Sayginer"
    ]
  },
  "continue-reading": "Okumaya Devam Et",
  "gallery-loading-error": "Bu görsel yüklenirken bir hata oluştu",
  "gallery-loading-error-offline": "İnternet bağlantısı yok.",
  "gallery-loading-error-refresh": "Yenile",
  "gallery-loading-still": "Hâlâ yükleniyor",
  "gallery-unknown-author": "Yazar bilinmiyor",
  "preview-error-message": "Bu önizlemeyi görüntülerken bir sorun oluştu.",
  "preview-console-error-message": "'$1' (Dil: $2) maddesinin önizlemesi mevcut değil",
  "read-on-wiki": "Vikipedi'de oku",
  "read-more": "Vikipedi'de daha fazla okuyun",
  "preview-disambiguation-message": "<strong>$1</strong> başlığı, Vikipedi'deki birden fazla madde ile ilgilidir.",
  "preview-offline-message": "İnternet bağlantısı yok.",
  "preview-offline-cta": "Tekrar dene"
}, $d = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Od
}, Symbol.toStringTag, { value: "Module" })), Ad = {
  "@metadata": {
    authors: [
      "Run Li",
      "Ерней"
    ]
  },
  "continue-reading": "Укуны дәвам итү",
  "gallery-loading-error": "Рәсем төягәндә хата килеп чыкты",
  "gallery-loading-error-offline": "Итернетка тоташмаган",
  "gallery-loading-error-refresh": "Яңарту",
  "gallery-loading-still": "Төяү бара",
  "gallery-unknown-author": "Автор билгесез",
  "preview-error-message": "Алдан караганда хата килеп чыкты",
  "preview-console-error-message": "$2 телендәге '$1' мәкаләсен алдан карап булмый",
  "read-on-wiki": "Википедиядә уку",
  "read-more": "Википедиядә тулырак уку",
  "preview-disambiguation-message": "Википедиядә <strong>$1</strong> исемле берничә мәкалә бар",
  "preview-offline-message": "Итернетка тоташмаган",
  "preview-offline-cta": "Кабатлагыз"
}, Ed = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ad
}, Symbol.toStringTag, { value: "Module" })), zd = {
  "@metadata": {
    authors: [
      "Tumbuka Arch"
    ]
  },
  "continue-reading": "Pitilizgani kuŵelenga",
  "gallery-loading-error": "Panguwa suzgo pakuloda chithuzi ichi",
  "gallery-loading-error-offline": "Intaneti yachimbila.",
  "gallery-loading-error-refresh": "Yezgaso",
  "gallery-loading-still": "Ichali kuloda",
  "gallery-unknown-author": "Mlemba wambula zina",
  "preview-error-message": "Pasangika suzgo pakuoneska ichi",
  "preview-console-error-message": "Preview unavailable for article '$1' (Language: $2)",
  "read-on-wiki": "Ẇelengani pa Wikipedia",
  "read-more": "Ẇelengani vinandi pa Wikipedia",
  "preview-disambiguation-message": "Mutu uwu <strong>$1</strong> una vyakulemba vinandi pa Wikipedia.",
  "preview-offline-message": "Intaneti palije.",
  "preview-offline-cta": "Yezgaso"
}, xd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: zd
}, Symbol.toStringTag, { value: "Module" })), Md = {
  "@metadata": {
    authors: [
      "Riverman"
    ]
  },
  "continue-reading": "Номчуурун уламчылаар",
  "gallery-loading-error": "Чурукту чүдүрүп турда чазыг болу берген",
  "gallery-loading-error-offline": "Интернетке коштунулга чок.",
  "gallery-loading-error-refresh": "Чаартыр",
  "gallery-loading-still": "Ам-даа чүдүрүп тур",
  "gallery-unknown-author": "Автору билдинмес",
  "preview-error-message": "Пре-көрүлде көргүзүп турда проблема үнген.",
  "preview-console-error-message": "'$1' деп чүүл пре-көрүлдези болдунмас (Дыл: $2)",
  "read-on-wiki": "Википедияга номчуур",
  "read-more": "Википедияга ам-даа номчуур",
  "preview-disambiguation-message": "<strong>$1</strong> деп ат Википедияда чаңгыстан хөй чүүлге хамааржыр.",
  "preview-offline-message": "Интернетке коштунулга чок.",
  "preview-offline-cta": "Катап шенептиңер"
}, Pd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Md
}, Symbol.toStringTag, { value: "Module" })), Ld = {
  "@metadata": {
    authors: [
      "Kotwys"
    ]
  },
  "gallery-loading-error": "Та суредэз кыскыку янгыш кылдӥз",
  "gallery-loading-error-refresh": "Выльдоно",
  "gallery-loading-still": "Али но кыскиське"
}, qd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ld
}, Symbol.toStringTag, { value: "Module" })), Wd = {
  "@metadata": {
    authors: [
      "DDPAT",
      "Ice bulldog",
      "Piramidion"
    ]
  },
  "continue-reading": "Продовжити читання",
  "gallery-loading-error": "Сталася помилка при завантаженні цього зображення",
  "gallery-loading-error-offline": "Немає підключення до Інтернету.",
  "gallery-loading-error-refresh": "Оновити",
  "gallery-loading-still": "Все ще завантажується",
  "gallery-unknown-author": "Автор невідомий",
  "preview-error-message": "Сталася якась проблема під час показу цього попереднього перегляду.",
  "preview-console-error-message": "Попередній перегляд статті «$1» недоступний (мова: $2)",
  "read-on-wiki": "Читати у Вікіпедії",
  "read-more": "Читати більше у Вікіпедії",
  "preview-disambiguation-message": "Назва <strong>$1</strong> стосується більш ніж одної статті у Вікіпедії.",
  "preview-offline-message": "Немає підключення до Інтернету.",
  "preview-offline-cta": "Спробуйте ще раз"
}, Rd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Wd
}, Symbol.toStringTag, { value: "Module" })), Cd = {
  "@metadata": {
    authors: [
      "Zafar Shamsiddinov",
      "Шоҳидахоним"
    ]
  },
  "continue-reading": "O‘qishni davom ettirish",
  "gallery-loading-error": "Rasmni yuklashda xatolik",
  "gallery-loading-error-offline": "Tarmoqqa ulanish mavjud emas",
  "gallery-loading-error-refresh": "Yangilash",
  "gallery-loading-still": "Hali ham yuklanmoqda",
  "gallery-unknown-author": "Muallif nomaʼlum",
  "preview-error-message": "Oldindan koʻrishni namoyish qilishda xatolik yuz berdi.",
  "preview-console-error-message": "'$1' maqolasini oldindan koʻrib boʻlmaydi (Tili: $2)",
  "read-on-wiki": "Vikipediyada oʻqing",
  "read-more": "Vikipediada batafsil oʻqing",
  "preview-disambiguation-message": "<strong>$1</strong> sarlavhasi Vikipediyadagi bir nechta maqolalarga tegishlidir.",
  "preview-offline-message": "Internetga ulanilmagan.",
  "preview-offline-cta": "Qaytadan"
}, Nd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Cd
}, Symbol.toStringTag, { value: "Module" })), Id = {
  "@metadata": {
    authors: [
      "Keo010122",
      "Nguyễn Mạnh An"
    ]
  },
  "continue-reading": "Tiếp tục đọc",
  "gallery-loading-error": "Đã xảy ra lỗi khi tải hình ảnh này",
  "gallery-loading-error-offline": "Không có kết nối internet.",
  "gallery-loading-error-refresh": "Làm mới",
  "gallery-loading-still": "Đang tải",
  "gallery-unknown-author": "Tác giả không rõ",
  "preview-error-message": "Đã xảy ra sự cố khi hiển thị bản xem trước này.",
  "preview-console-error-message": "Không có bản xem trước cho bài viết '$1' (Ngôn ngữ: $2)",
  "read-on-wiki": "Đọc trên Wikipedia",
  "read-more": "Đọc thêm trên Wikipedia",
  "preview-disambiguation-message": "Tiêu đề <strong>$1</strong> có liên quan đến nhiều bài viết trên Wikipedia.",
  "preview-offline-message": "Không có kết nối internet.",
  "preview-offline-cta": "Thử lại"
}, Dd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Id
}, Symbol.toStringTag, { value: "Module" })), Hd = {
  "@metadata": {
    authors: [
      "Ella Lachow"
    ]
  },
  "continue-reading": "Nabbabuwaa Doomma",
  "gallery-loading-error": "Ha misiliyaa ehiishin balay de'ees",
  "gallery-loading-error-offline": "Interneetee gaytotettay baawa.",
  "gallery-loading-error-refresh": "Ooraxissa",
  "gallery-loading-still": "Hanno gaakkanawu ehiidi de'ees",
  "gallery-unknown-author": "Xaafidaagee erettenna",
  "preview-error-message": "Ha zari be'uwaa bessishin metoy merettiis.",
  "preview-console-error-message": "Xuufiya $1 (Doonaa:$2) zaari be'oy baawa",
  "read-on-wiki": "Wikkiimiidiyaan nabbaba",
  "read-more": "Daruwaa Wikkiipeediyaan nabbaba",
  "preview-disambiguation-message": "Huuphe yohoy <strong>$1</strong> Wikkiipeediyaan issuwaappe dariyaa xaafotuura gayttees.",
  "preview-offline-message": "Interneetee gaytotettay baawa.",
  "preview-offline-cta": "Zaara mala"
}, Bd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Hd
}, Symbol.toStringTag, { value: "Module" })), Ud = {
  "@metadata": {
    authors: [
      "Lea.Fakauvea"
    ]
  },
  "continue-reading": "Hoko atu tau lau",
  "gallery-loading-error": "Ne'e hala te fakahā o te pāki aeni",
  "gallery-loading-error-offline": "Mole ha'ele te neti.",
  "gallery-loading-error-refresh": "Fakafo'ou",
  "gallery-loading-still": "Kei lolotoga mai",
  "gallery-unknown-author": "Mole ilo'i pe ko ai ne'e ina tohi",
  "preview-error-message": "Ne'e tō hala tona fakahā atu fakatomu'a.",
  "read-on-wiki": "Lau i te Wikipedia",
  "read-more": "Fakakātoā atu tona lau i te Wikipedia",
  "preview-disambiguation-message": "Pāsina <strong>$1</strong> e 'alu tahi mo 'ihi ake pāsina o te Wikipedia.",
  "preview-offline-message": "Mole ha'ele te neti.",
  "preview-offline-cta": "Toe faiga'i."
}, Fd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ud
}, Symbol.toStringTag, { value: "Module" })), Yd = {
  "@metadata": {
    authors: [
      "Алия"
    ]
  },
  "continue-reading": "Цааран умшх",
  "gallery-loading-error": "Зургиг умшхд эндү һарла",
  "gallery-loading-error-offline": "Интернет холвлт бәәхш.",
  "gallery-loading-error-refresh": "Дәкн ацалх",
  "gallery-loading-still": "Ацалсар бәәнә",
  "gallery-unknown-author": "Зокаһач тодрха биш",
  "preview-error-message": "Урдчлҗ харх йовцд асудл һарла.",
  "preview-console-error-message": "' $1 ' өгүллиг урдчлн харх болмҗго (келн: $2)",
  "read-on-wiki": "Википедиаһас умштн",
  "read-more": "Википедиаһас делгрңгү умштн",
  "preview-disambiguation-message": "<strong>$1</strong> һарцгнь Википедиа деерк негнәс олн өгүллтә холвата бәәнә.",
  "preview-offline-message": "Интернет холвлт бәәхш.",
  "preview-offline-cta": "Дәкн орлдтн"
}, Gd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Yd
}, Symbol.toStringTag, { value: "Module" })), Vd = {
  "@metadata": {
    authors: [
      "Narazeni"
    ]
  },
  "continue-reading": "კითხირიშ გაგჷნძორაფა",
  "gallery-loading-error": "თე სურათიშ დინოხარგუაშ ბორჯის ჩილათაქ მოხვადჷ",
  "gallery-loading-error-offline": "ვა რე ინტერნეტწკჷმა ჭირინაფა",
  "gallery-loading-error-refresh": "გოახალაფა",
  "gallery-loading-still": "ასეშა იხარგჷ",
  "gallery-unknown-author": "ავტორი უჩინებუ რე",
  "preview-error-message": "თე გიწოთოლორაფაშ ძირაფაშ ბორჯის პრობლემაქ მუკორჩქინდჷ.",
  "preview-console-error-message": "გიწოთოლორაფა ვა რე ხემიოჭირონაფუ სტატიაშო '1' (ნინა: $2)",
  "read-on-wiki": "ვიკიპედიას კითხირი",
  "read-more": "უმოსიშ კითხირი ვიკიპედიას",
  "preview-disambiguation-message": "დუდჯოხო <strong>$1</strong> ვიკიპედიას ართშე უმოსი სტატიაწკჷმა რე მერსხილი.",
  "preview-offline-message": "ვა რე ინტერნეტწკჷმა რსხუ.",
  "preview-offline-cta": "კჷნ ქოცადით"
}, Kd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Vd
}, Symbol.toStringTag, { value: "Module" })), Xd = {
  "@metadata": {
    authors: [
      "Karapananguasú Kururú Teremembé",
      "Maracajá Teremembé"
    ]
  },
  "continue-reading": "E-kaçakiri umũgitá",
  "gallery-loading-error": "Umereçe'ana yepé yawiçawa ĩdé reiku'ana rewatá kuá çãgawa",
  "gallery-loading-error-offline": "Ti aikué yumũdiçawa internet upé yukuawa.",
  "gallery-loading-error-refresh": "Mukuiriwara",
  "gallery-loading-still": "Uwatá uikú raĩ",
  "gallery-unknown-author": "Munhãgara kanhẽma",
  "preview-error-message": "Umereçe'ana yepé iwaçuçawa umukameẽ ramẽ kuá maãgawa enũdé.",
  "preview-console-error-message": "Maãgawa enũdé yukuawaĩma kuatiara '$1' arã (Language: $2)",
  "read-on-wiki": "E-maã wikipedia upé",
  "read-more": "E-mũgitá píri Wikipedia upé",
  "preview-disambiguation-message": "Titapawa <strong>$1</strong> uikú umuatiana yepé píri kuatiara Wikipedia upé.",
  "preview-offline-message": "Ti aikué yumũdiçawa internet irũ yukuawa.",
  "preview-offline-cta": "E-çaá amũ ruê"
}, Jd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Xd
}, Symbol.toStringTag, { value: "Module" })), Zd = {
  "@metadata": {
    authors: [
      "Winston Sung"
    ]
  },
  "continue-reading": "繼續睇",
  "gallery-loading-error": "載入呢張圖嗰陣出現錯誤",
  "gallery-loading-error-offline": "上唔到網。",
  "gallery-loading-error-refresh": "重新整理",
  "gallery-loading-still": "仲載入緊",
  "gallery-unknown-author": "作者未知",
  "preview-error-message": "顯示呢個預覽嗰陣出現問題。",
  "preview-console-error-message": "文章「$1」無法預覽（語言：$2）",
  "read-on-wiki": "喺維基百科上面睇",
  "read-more": "喺維基百科上面睇多啲",
  "preview-disambiguation-message": "標題<strong>$1</strong>同維基百科入面多過一篇文章有關。",
  "preview-offline-message": "上唔到網。",
  "preview-offline-cta": "再試過"
}, Qd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Zd
}, Symbol.toStringTag, { value: "Module" })), eg = {
  "@metadata": {
    authors: [
      "Hakim1bal",
      "Ya2sine"
    ]
  },
  "continue-reading": "ⵙⵎⴷ ⵙⵓⵍ ⵜⵉⵖⵔⵉ",
  "gallery-loading-error-refresh": "ⵙⵎⴰⵢⵏⵓ",
  "gallery-loading-still": "ⵉⵙⵓⵍ ⵓⵣⴷⴰⵎ",
  "gallery-unknown-author": "ⴰⵎⴳⴰⵢ ⴰⵔⵉⵙⵎ",
  "read-on-wiki": "ⵖⵔ ⴳ ⵡⵉⴽⵉⴱⵉⴷⵢⴰ",
  "read-more": "ⵖⵔ ⵓⴳⴳⴰⵔ ⴳ ⵡⵉⴽⵉⴱⵉⴷⵢⴰ"
}, rg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: eg
}, Symbol.toStringTag, { value: "Module" })), ig = {
  "@metadata": {
    authors: [
      "Gerongfenh",
      "GuoPC",
      "Shizhao",
      "SkEy",
      "沈澄心"
    ]
  },
  "continue-reading": "继续阅读",
  "gallery-loading-error": "加载这个图像时出现了问题。",
  "gallery-loading-error-offline": "无可用的因特网连接",
  "gallery-loading-error-refresh": "刷新",
  "gallery-loading-still": "仍在读取",
  "gallery-unknown-author": "作者不明",
  "preview-error-message": "显示此预览时出现问题",
  "preview-console-error-message": "条目“$1”无法预览（语言：$2）",
  "read-on-wiki": "在维基百科上阅读",
  "read-more": "在维基百科上阅读更多内容",
  "preview-disambiguation-message": "在维基百科上，标题<strong>$1</strong>对应多篇条目。",
  "preview-offline-message": "无可用的因特网连接",
  "preview-offline-cta": "重试"
}, ag = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ig
}, Symbol.toStringTag, { value: "Module" })), ng = {
  "@metadata": {
    authors: [
      "Kly"
    ]
  },
  "continue-reading": "繼續閱讀",
  "gallery-loading-error": "載入此圖片時發生錯誤",
  "gallery-loading-error-offline": "沒有可用的網路連線。",
  "gallery-loading-error-refresh": "重新整理",
  "gallery-loading-still": "繼續載入",
  "gallery-unknown-author": "作者未知",
  "preview-error-message": "在顯示此預覽時出現問題。",
  "preview-console-error-message": "條目「$1」無法預覽（語言：$2）",
  "read-on-wiki": "在維基百科上閱讀",
  "read-more": "在維基百科閱讀更多條目",
  "preview-disambiguation-message": "標題<strong>$1</strong>與維基百科裡一個以上條目相關。",
  "preview-offline-message": "沒有可用的網路連線。",
  "preview-offline-cta": "再試一次"
}, tg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ng
}, Symbol.toStringTag, { value: "Module" })), og = {
  "@metadata": {
    authors: [
      "StarrySky",
      "捍粵者"
    ]
  },
  "continue-reading": "繼續閱讀",
  "gallery-loading-error": "載入此圖片時發生錯誤。",
  "gallery-loading-error-offline": "沒有可用的網路連線。",
  "gallery-loading-error-refresh": "刷新",
  "gallery-loading-still": "繼續載入",
  "gallery-unknown-author": "作者未知",
  "preview-error-message": "在顯示此預覽時出現問題。",
  "preview-console-error-message": "條目「$1」無法預覽（語言：$2）",
  "read-on-wiki": "在維基百科上閱讀",
  "read-more": "在維基百科上閱讀更多",
  "preview-disambiguation-message": "標題<strong>$1</strong>與維基百科一條以上條目有關。",
  "preview-offline-message": "沒有可用的網路連線。",
  "preview-offline-cta": "再試一次"
}, lg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: og
}, Symbol.toStringTag, { value: "Module" })), Ce = {
  en: ya
}, K = (e, r, ...i) => {
  if (!Ce[e])
    try {
      Ce[e] = sg(`./../i18n/${e}.json`).default;
    } catch (n) {
      Ce[e] = {};
    }
  let a = Ce[e] && Ce[e][r] || Ce.en[r] || r;
  return i.forEach((n, t) => {
    a = a.replace(new RegExp(`\\$${t + 1}`, "g"), n);
  }), a;
};
function sg(e) {
  switch (e) {
    case "./../i18n/acm":
    case "./../i18n/acm.json":
      return jn;
    case "./../i18n/ann":
    case "./../i18n/ann.json":
      return Tn;
    case "./../i18n/anp":
    case "./../i18n/anp.json":
      return $n;
    case "./../i18n/ar":
    case "./../i18n/ar.json":
      return En;
    case "./../i18n/as":
    case "./../i18n/as.json":
      return xn;
    case "./../i18n/av":
    case "./../i18n/av.json":
      return Pn;
    case "./../i18n/az":
    case "./../i18n/az.json":
      return qn;
    case "./../i18n/ba":
    case "./../i18n/ba.json":
      return Rn;
    case "./../i18n/ban":
    case "./../i18n/ban.json":
      return Nn;
    case "./../i18n/bar":
    case "./../i18n/bar.json":
      return Dn;
    case "./../i18n/bcc":
    case "./../i18n/bcc.json":
      return Bn;
    case "./../i18n/be-tarask":
    case "./../i18n/be-tarask.json":
      return Fn;
    case "./../i18n/bew":
    case "./../i18n/bew.json":
      return Gn;
    case "./../i18n/bjn":
    case "./../i18n/bjn.json":
      return Kn;
    case "./../i18n/blk":
    case "./../i18n/blk.json":
      return Jn;
    case "./../i18n/bn":
    case "./../i18n/bn.json":
      return Qn;
    case "./../i18n/br":
    case "./../i18n/br.json":
      return rt;
    case "./../i18n/bto":
    case "./../i18n/bto.json":
      return at;
    case "./../i18n/ca":
    case "./../i18n/ca.json":
      return tt;
    case "./../i18n/ce":
    case "./../i18n/ce.json":
      return lt;
    case "./../i18n/ckb":
    case "./../i18n/ckb.json":
      return dt;
    case "./../i18n/co":
    case "./../i18n/co.json":
      return ct;
    case "./../i18n/crh-latn":
    case "./../i18n/crh-latn.json":
      return mt;
    case "./../i18n/cs":
    case "./../i18n/cs.json":
      return pt;
    case "./../i18n/cy":
    case "./../i18n/cy.json":
      return _t;
    case "./../i18n/da":
    case "./../i18n/da.json":
      return wt;
    case "./../i18n/de":
    case "./../i18n/de.json":
      return kt;
    case "./../i18n/diq":
    case "./../i18n/diq.json":
      return jt;
    case "./../i18n/el":
    case "./../i18n/el.json":
      return Tt;
    case "./../i18n/en-gb":
    case "./../i18n/en-gb.json":
      return $t;
    case "./../i18n/en":
    case "./../i18n/en.json":
      return At;
    case "./../i18n/es":
    case "./../i18n/es.json":
      return zt;
    case "./../i18n/eu":
    case "./../i18n/eu.json":
      return Mt;
    case "./../i18n/fa":
    case "./../i18n/fa.json":
      return Lt;
    case "./../i18n/fat":
    case "./../i18n/fat.json":
      return Wt;
    case "./../i18n/fi":
    case "./../i18n/fi.json":
      return Ct;
    case "./../i18n/fr":
    case "./../i18n/fr.json":
      return It;
    case "./../i18n/frc":
    case "./../i18n/frc.json":
      return Ht;
    case "./../i18n/gcf":
    case "./../i18n/gcf.json":
      return Ut;
    case "./../i18n/gd":
    case "./../i18n/gd.json":
      return Yt;
    case "./../i18n/gl":
    case "./../i18n/gl.json":
      return Vt;
    case "./../i18n/glk":
    case "./../i18n/glk.json":
      return Xt;
    case "./../i18n/gn":
    case "./../i18n/gn.json":
      return Zt;
    case "./../i18n/grc":
    case "./../i18n/grc.json":
      return eo;
    case "./../i18n/gu":
    case "./../i18n/gu.json":
      return io;
    case "./../i18n/gv":
    case "./../i18n/gv.json":
      return no;
    case "./../i18n/ha":
    case "./../i18n/ha.json":
      return oo;
    case "./../i18n/he":
    case "./../i18n/he.json":
      return so;
    case "./../i18n/hi":
    case "./../i18n/hi.json":
      return co;
    case "./../i18n/hr":
    case "./../i18n/hr.json":
      return mo;
    case "./../i18n/ht":
    case "./../i18n/ht.json":
      return po;
    case "./../i18n/hu":
    case "./../i18n/hu.json":
      return _o;
    case "./../i18n/hy":
    case "./../i18n/hy.json":
      return wo;
    case "./../i18n/hyw":
    case "./../i18n/hyw.json":
      return ko;
    case "./../i18n/ia":
    case "./../i18n/ia.json":
      return jo;
    case "./../i18n/id":
    case "./../i18n/id.json":
      return To;
    case "./../i18n/io":
    case "./../i18n/io.json":
      return $o;
    case "./../i18n/is":
    case "./../i18n/is.json":
      return Eo;
    case "./../i18n/it":
    case "./../i18n/it.json":
      return xo;
    case "./../i18n/ja":
    case "./../i18n/ja.json":
      return Po;
    case "./../i18n/kaa":
    case "./../i18n/kaa.json":
      return qo;
    case "./../i18n/kcg":
    case "./../i18n/kcg.json":
      return Ro;
    case "./../i18n/kg":
    case "./../i18n/kg.json":
      return No;
    case "./../i18n/kge-arab":
    case "./../i18n/kge-arab.json":
      return Do;
    case "./../i18n/kge":
    case "./../i18n/kge.json":
      return Bo;
    case "./../i18n/kiu":
    case "./../i18n/kiu.json":
      return Fo;
    case "./../i18n/kk-cyrl":
    case "./../i18n/kk-cyrl.json":
      return Go;
    case "./../i18n/km":
    case "./../i18n/km.json":
      return Ko;
    case "./../i18n/kn":
    case "./../i18n/kn.json":
      return Jo;
    case "./../i18n/ko":
    case "./../i18n/ko.json":
      return Qo;
    case "./../i18n/krc":
    case "./../i18n/krc.json":
      return rl;
    case "./../i18n/ks-arab":
    case "./../i18n/ks-arab.json":
      return al;
    case "./../i18n/ku-latn":
    case "./../i18n/ku-latn.json":
      return tl;
    case "./../i18n/kv":
    case "./../i18n/kv.json":
      return ll;
    case "./../i18n/lb":
    case "./../i18n/lb.json":
      return dl;
    case "./../i18n/lld":
    case "./../i18n/lld.json":
      return cl;
    case "./../i18n/lmo":
    case "./../i18n/lmo.json":
      return ml;
    case "./../i18n/lo":
    case "./../i18n/lo.json":
      return pl;
    case "./../i18n/lt":
    case "./../i18n/lt.json":
      return _l;
    case "./../i18n/mad":
    case "./../i18n/mad.json":
      return wl;
    case "./../i18n/mag":
    case "./../i18n/mag.json":
      return kl;
    case "./../i18n/mk":
    case "./../i18n/mk.json":
      return jl;
    case "./../i18n/ml":
    case "./../i18n/ml.json":
      return Tl;
    case "./../i18n/mn":
    case "./../i18n/mn.json":
      return $l;
    case "./../i18n/mrh":
    case "./../i18n/mrh.json":
      return El;
    case "./../i18n/ms":
    case "./../i18n/ms.json":
      return xl;
    case "./../i18n/mt":
    case "./../i18n/mt.json":
      return Pl;
    case "./../i18n/my":
    case "./../i18n/my.json":
      return ql;
    case "./../i18n/mzn":
    case "./../i18n/mzn.json":
      return Rl;
    case "./../i18n/nap":
    case "./../i18n/nap.json":
      return Nl;
    case "./../i18n/nb":
    case "./../i18n/nb.json":
      return Dl;
    case "./../i18n/ne":
    case "./../i18n/ne.json":
      return Bl;
    case "./../i18n/nia":
    case "./../i18n/nia.json":
      return Fl;
    case "./../i18n/nit":
    case "./../i18n/nit.json":
      return Gl;
    case "./../i18n/nl":
    case "./../i18n/nl.json":
      return Kl;
    case "./../i18n/nn":
    case "./../i18n/nn.json":
      return Jl;
    case "./../i18n/nod":
    case "./../i18n/nod.json":
      return Ql;
    case "./../i18n/nqo":
    case "./../i18n/nqo.json":
      return rs;
    case "./../i18n/nyn":
    case "./../i18n/nyn.json":
      return as;
    case "./../i18n/oc":
    case "./../i18n/oc.json":
      return ts;
    case "./../i18n/om":
    case "./../i18n/om.json":
      return ls;
    case "./../i18n/pa":
    case "./../i18n/pa.json":
      return ds;
    case "./../i18n/pap":
    case "./../i18n/pap.json":
      return cs;
    case "./../i18n/pl":
    case "./../i18n/pl.json":
      return ms;
    case "./../i18n/pnb":
    case "./../i18n/pnb.json":
      return ps;
    case "./../i18n/pt-br":
    case "./../i18n/pt-br.json":
      return _s;
    case "./../i18n/pt":
    case "./../i18n/pt.json":
      return ws;
    case "./../i18n/qqq":
    case "./../i18n/qqq.json":
      return ks;
    case "./../i18n/rn":
    case "./../i18n/rn.json":
      return js;
    case "./../i18n/ro":
    case "./../i18n/ro.json":
      return Ts;
    case "./../i18n/roa-tara":
    case "./../i18n/roa-tara.json":
      return $s;
    case "./../i18n/ru":
    case "./../i18n/ru.json":
      return Es;
    case "./../i18n/sat":
    case "./../i18n/sat.json":
      return xs;
    case "./../i18n/sc":
    case "./../i18n/sc.json":
      return Ps;
    case "./../i18n/scn":
    case "./../i18n/scn.json":
      return qs;
    case "./../i18n/sd":
    case "./../i18n/sd.json":
      return Rs;
    case "./../i18n/sh":
    case "./../i18n/sh.json":
      return Ns;
    case "./../i18n/sje":
    case "./../i18n/sje.json":
      return Ds;
    case "./../i18n/sk":
    case "./../i18n/sk.json":
      return Bs;
    case "./../i18n/sl":
    case "./../i18n/sl.json":
      return Fs;
    case "./../i18n/smn":
    case "./../i18n/smn.json":
      return Gs;
    case "./../i18n/so":
    case "./../i18n/so.json":
      return Ks;
    case "./../i18n/sq":
    case "./../i18n/sq.json":
      return Js;
    case "./../i18n/sr-ec":
    case "./../i18n/sr-ec.json":
      return Qs;
    case "./../i18n/sr-el":
    case "./../i18n/sr-el.json":
      return rd;
    case "./../i18n/sv":
    case "./../i18n/sv.json":
      return ad;
    case "./../i18n/syl":
    case "./../i18n/syl.json":
      return td;
    case "./../i18n/szl":
    case "./../i18n/szl.json":
      return ld;
    case "./../i18n/ta":
    case "./../i18n/ta.json":
      return dd;
    case "./../i18n/te":
    case "./../i18n/te.json":
      return cd;
    case "./../i18n/th":
    case "./../i18n/th.json":
      return md;
    case "./../i18n/ti":
    case "./../i18n/ti.json":
      return pd;
    case "./../i18n/tig":
    case "./../i18n/tig.json":
      return _d;
    case "./../i18n/tk":
    case "./../i18n/tk.json":
      return wd;
    case "./../i18n/tl":
    case "./../i18n/tl.json":
      return kd;
    case "./../i18n/tly":
    case "./../i18n/tly.json":
      return jd;
    case "./../i18n/tok":
    case "./../i18n/tok.json":
      return Td;
    case "./../i18n/tr":
    case "./../i18n/tr.json":
      return $d;
    case "./../i18n/tt-cyrl":
    case "./../i18n/tt-cyrl.json":
      return Ed;
    case "./../i18n/tum":
    case "./../i18n/tum.json":
      return xd;
    case "./../i18n/tyv":
    case "./../i18n/tyv.json":
      return Pd;
    case "./../i18n/udm":
    case "./../i18n/udm.json":
      return qd;
    case "./../i18n/uk":
    case "./../i18n/uk.json":
      return Rd;
    case "./../i18n/uz":
    case "./../i18n/uz.json":
      return Nd;
    case "./../i18n/vi":
    case "./../i18n/vi.json":
      return Dd;
    case "./../i18n/wal":
    case "./../i18n/wal.json":
      return Bd;
    case "./../i18n/wls":
    case "./../i18n/wls.json":
      return Fd;
    case "./../i18n/xal":
    case "./../i18n/xal.json":
      return Gd;
    case "./../i18n/xmf":
    case "./../i18n/xmf.json":
      return Kd;
    case "./../i18n/yrl":
    case "./../i18n/yrl.json":
      return Jd;
    case "./../i18n/yue-hant":
    case "./../i18n/yue-hant.json":
      return Qd;
    case "./../i18n/zgh":
    case "./../i18n/zgh.json":
      return rg;
    case "./../i18n/zh-hans":
    case "./../i18n/zh-hans.json":
      return ag;
    case "./../i18n/zh-hant":
    case "./../i18n/zh-hant.json":
      return tg;
    case "./../i18n/zh-hk":
    case "./../i18n/zh-hk.json":
      return lg;
    default:
      throw new Error("Cann't found module: " + e);
  }
}
const dg = (e) => e.split("#")[0], gg = (e, r, i, a = Be) => {
  const t = fa(e, {
    action: "query",
    prop: "extracts|pageimages",
    exsentences: 4,
    explaintext: 1,
    exsectionformat: "plain",
    piprop: "thumbnail",
    pilimit: 1,
    titles: r
  }) + "&" + nr();
  a(t, (l) => {
    const s = l.query.pages[Object.keys(l.query.pages)[0]];
    return s.extract ? {
      title: r,
      extractHtml: "<p>" + s.extract + "</p>",
      imgUrl: s.thumbnail ? s.thumbnail.source : null,
      dir: ma(e),
      type: "standard"
    } : !1;
  }, i);
}, cg = (e, r, i, a = Be) => {
  const n = `https://${e}.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(r)}?${nr()}`;
  a(n, (t, l) => t ? t.type === "standard" || t.type === "disambiguation" ? {
    title: t.titles.canonical,
    extractHtml: vn(t.extract_html),
    imgUrl: t.thumbnail ? t.thumbnail.source : null,
    dir: t.dir,
    type: t.type
  } : t.type === "no-extract" && t.description ? {
    title: t.titles.canonical,
    extractHtml: "<p>" + t.description + "</p>",
    imgUrl: t.thumbnail ? t.thumbnail.source : null,
    dir: t.dir,
    type: "standard"
  } : (ei(K(e, "preview-console-error-message", r, e), t), !1) : (ei(K(e, "preview-console-error-message", r, e), l), !1), i);
}, ug = (e) => {
  if (!e)
    return null;
  const r = [
    "script",
    "meta",
    "style",
    "figure",
    "table",
    "sup.mw-ref",
    "sup.reference",
    ".pcs-collapse-table-container",
    ".thumb",
    ".hatnote",
    "[ role='navigation' ]",
    "#pcs-edit-section-add-title-description"
  ].join(",");
  for (const i of e.querySelectorAll(r))
    i.remove();
  for (const i of e.querySelectorAll("a"))
    i.outerHTML = i.innerHTML;
  for (const i of e.querySelectorAll("p"))
    i.innerHTML = i.innerHTML.replace(/\s\(.*?class=".*?(ext-phonos|IPA).*?".*?\)/g, "");
  return e.innerText.trim() === "" ? null : e.outerHTML;
}, mg = (e) => {
  const r = e.querySelector('meta[property="mw:leadImage"]');
  if (!r)
    return null;
  const i = r.getAttribute("content").split("/"), a = decodeURIComponent(i[i.length - 1]), n = e.querySelector('a[href*="' + a + '"]');
  if (!n)
    return null;
  const t = n.querySelector("span[data-src]");
  if (t)
    return t.getAttribute("data-src");
  const l = n.querySelector("img[src]");
  return l ? l.getAttribute("src") : null;
}, _a = (e, r, i, a = Be) => {
  const n = `https://${e}.wikipedia.org/api/rest_v1/page/mobile-html/${encodeURIComponent(r)}?${nr()}`;
  a(n, (t, l) => {
    if (!t)
      return ei(K(e, "preview-console-error-message", r, e), l), !1;
    const s = new DOMParser().parseFromString(t, "text/html"), c = mg(s);
    return {
      sections: Array.from(s.querySelectorAll("section")).map((p) => {
        const _ = p.querySelector("h2, h3, h4, h5, h6"), k = _ ? _.id : r, g = _ ? _.tagName.toLowerCase() : "h2", u = p.querySelector("figure span.mw-file-element"), y = u ? u.getAttribute("data-src") : c, f = ug(
          p.querySelector("p")
        );
        return f ? {
          id: k,
          level: g,
          imgUrl: y,
          extractHtml: f
        } : null;
      }).filter((p) => p),
      dir: s.body.getAttribute("dir")
    };
  }, i, !1);
}, fg = (e, r, i, a, n) => {
  _a(e, r, (t) => {
    for (const l of t.sections)
      if (l.id === i) {
        a({
          title: r + "#" + i,
          extractHtml: l.extractHtml,
          imgUrl: l.imgUrl,
          dir: t.dir,
          type: "standard"
        });
        return;
      }
    a(!1);
  }, n);
}, ha = (e, r, i, a = Be) => {
  const [n, t] = r.split("#");
  return t ? fg(e, n, t, i, a) : r.indexOf(":") === -1 ? cg(e, r, i, a) : gg(e, r, i, a);
}, pg = (e, r, i, a = Be) => {
  r = dg(r);
  const n = `https://${e}.wikipedia.org/api/rest_v1/page/media-list/${encodeURIComponent(r)}`;
  a(n, (t) => (t.items || []).reduce((c, d) => {
    if (d.showInGallery && d.type === "image") {
      const p = d && d.srcset && `https:${d.srcset[0].src}`, _ = {
        caption: d.caption && d.caption.text.trim(),
        thumb: p,
        title: d.title
      };
      return c.concat(_);
    }
    return c;
  }, []), i);
}, yg = (e, r, i, a = Be) => {
  const n = {
    action: "query",
    prop: "imageinfo",
    iiextmetadatafilter: "License|LicenseShortName|ImageDescription|Artist",
    iiextmetadatalanguage: e,
    iiextmetadatamultilang: 1,
    iiurlwidth: Ki().width,
    iiurlheight: Ki().height,
    iiprop: "url|extmetadata",
    titles: r
  }, t = fa(e, n);
  a(t, (l) => {
    const c = l.query.pages[0].imageinfo;
    if (!c)
      return {};
    const { Artist: d, ImageDescription: p, LicenseShortName: _ } = c[0].extmetadata, k = d && Vi(d.value), g = p && Vi(
      typeof p.value == "string" && p.value || p.value[e] || p.value[Object.keys(p.value)[0]]
    ), u = c[0].thumburl;
    return {
      author: k,
      description: g,
      license: _ && _.value,
      filePage: wn(c[0].descriptionshorturl),
      bestFitImageUrl: u
    };
  }, i);
}, Sr = 1, wa = 2, er = () => window.innerWidth, Fr = () => window.innerHeight, w = {
  screenX: null,
  originalMarginLeft: null,
  currentMarginLeft: null,
  originalTransition: null,
  imgOriginalTransition: null,
  durationStart: null,
  translateX: 0,
  translateY: 0,
  clientX: null,
  clientY: null,
  imageRect: {}
}, C = [];
let Qe = -1, rr = !1;
const tr = (e) => e.target.nodeName === "IMG" ? e.target : e.target.querySelector("img"), va = (e) => e ? Number(e.slice(e.indexOf("scale") + 6, -1)) : Sr, _g = (e) => {
  const i = new RegExp("translate3d\\((?<x>.*?)px, (?<y>.*?)px, (?<z>.*?)px").exec(e);
  return i ? `translate3d(${i.groups.x}px, ${i.groups.y}px, 0px)` : `translate3d(${w.translateX}px, ${w.translateY}px, 0px)`;
}, Yr = (e, r) => {
  const a = [
    `${r}-item-caption`,
    `${r}-item-caption-expand-cue`,
    `${r}-item-caption-text`,
    `${r}-item-attribution`,
    `${r}-button`
  ].find((n) => e.target.className.indexOf(n) > -1);
  return e.pointerType !== "touch" || a;
}, kr = () => rr, li = (e) => e.naturalHeight <= e.naturalWidth, hg = (e) => e.naturalWidth + 50 < er(), Gr = () => C.length, wg = (e, r = null) => {
  const i = {}, a = () => r.clientY > e.naturalHeight && !li(e) ? e.naturalHeight : r.clientY;
  return C.length === 2 ? (i.x = (C[0].clientX + C[1].clientX) / 2, i.y = (C[0].clientY + C[1].clientY) / 2) : (i.x = r.clientX, i.y = a()), i;
}, ka = (e, r) => {
  const i = wg(e, r);
  return li(e) ? i.y = i.y - e.naturalHeight : hg(e) && (i.x = e.naturalWidth / 2, i.y = e.naturalHeight / 2), `${i.x}px ${i.y}px`;
}, vg = (e) => {
  for (let r = 0; r < C.length; r++)
    if (C[r].pointerId === e.pointerId) {
      C.splice(r, 1);
      break;
    }
}, ba = (e) => {
  e && (e.style.transition = w.imgOriginalTransition, e.style.transform = `scale(${Sr})`, rr = !1, w.translateX = 0, w.translateY = 0);
}, kg = (e) => {
  const r = tr(e);
  w.clientX = null, w.clientY = null, w.translateX = 0, w.translateY = 0, r.style.transformOrigin = ka(r, e), kr() ? (r.style.transform = `scale(${Sr})`, rr = !1) : (r.style.transform = `scale(${wa})`, rr = !0);
}, bg = (e) => {
  const r = tr(e);
  if (!r)
    return;
  const i = r.getBoundingClientRect();
  if (w.imageRect.top = i.top, w.imageRect.bottom = i.bottom, w.imageRect.left = i.left, w.imageRect.right = i.right, C.length < 1) {
    const a = window.getComputedStyle(r);
    w.imgOriginalTransition = a.transition;
  }
  C.push(e);
}, jg = (e) => {
  const r = tr(e), i = r.style.transform, a = 0.01, n = 0.4;
  let t = va(i);
  const l = _g(i);
  for (let s = 0; s < C.length; s++)
    if (e.pointerId === C[s].pointerId) {
      C[s] = e;
      break;
    }
  if (C.length === 2) {
    const s = Math.abs(C[0].clientX - C[1].clientX), c = Math.abs(C[0].clientY - C[1].clientY), d = Math.sqrt(Math.pow(s, 2) + Math.pow(c, 2));
    Qe > 0 && (r.style.transformOrigin = ka(r), r.style.transition = "unset", d > Qe && (rr = !0, t + a < wa && (t += a, r.style.transform = `${l} scale(${t})`)), d < Qe && (t - a > Sr + n ? (t -= a, r.style.transform = `${l} scale(${t})`) : ba(r))), Qe = d;
  }
}, Sg = (e, r, i, a, n) => {
  const t = tr(e);
  if (!t)
    return;
  const l = t.style.transform, s = va(l), c = er() / 8, d = er() - c, p = li(t) ? Fr() / 4 : Fr() / 8, _ = Fr() - p, k = 80;
  t.style.transition = "unset", (!w.clientX || !w.clientY) && (w.clientX = e.clientX, w.clientY = e.clientY);
  const g = w.translateX + (e.clientX - w.clientX), u = w.translateY + (e.clientY - w.clientY), y = u - w.translateY >= 0, f = g - w.translateX >= 0, S = () => {
    const b = w.imageRect.left < c && f || w.imageRect.right > d && !f, $ = w.imageRect.top < p && y || w.imageRect.bottom > _ && !y;
    return b && $;
  }, T = () => {
    w.imageRect.top = w.imageRect.top + (u - w.translateY), w.imageRect.bottom = w.imageRect.bottom + (u - w.translateY), w.imageRect.left = w.imageRect.left + (g - w.translateX), w.imageRect.right = w.imageRect.right + (g - w.translateX), w.translateX = g, w.translateY = u, w.clientX = e.clientX, w.clientY = e.clientY;
  }, h = Math.abs(g) - Math.abs(w.translateX) > k;
  if (S())
    T(), t.style.transform = `translate3d(${g}px, ${u}px, 0px) scale(${s})`;
  else if (h) {
    const b = n === "ltr" && g < 0 || n === "rtl" && g > 0;
    !b && i[a - 1] ? r(-1) : b && i[a + 1] && r(1);
  }
}, Tg = (e) => {
  const r = tr(e);
  r && (r.style.transition = w.imgOriginalTransition), vg(e), w.clientX = null, w.clientY = null, C.length < 2 && (Qe = -1);
}, Og = (e, r, i) => {
  const a = window.getComputedStyle(r);
  w.durationStart = Date.now(), w.screenX = e.clientX, w.originalMarginLeft = +a[i].slice(0, -2), w.currentMarginLeft = +a[i].slice(0, -2), w.originalTransition = a.transition, r.style.transition = "unset";
}, $g = (e, r, i, a) => {
  const t = e.clientX - w.screenX;
  w.currentMarginLeft = w.originalMarginLeft + t * (a === "ltr" ? 1 : -1), r.style[i] = w.currentMarginLeft + "px", e.preventDefault();
}, Ag = (e, r, i, a, n) => {
  const t = w.originalMarginLeft - w.currentMarginLeft, l = Date.now() - w.durationStart;
  Math.abs(t / er()) > 0.4 || l <= 300 && Math.abs(t) > 5 ? i(t > 0 ? 1 : -1) : r.style[a] = -er() * n + "px";
};
let ri = [];
const ii = (e, r, i, a = void 0) => {
  e.addEventListener(r, i, a), ri.push([e, r, i, a]);
}, Eg = () => {
  ri.forEach((e) => {
    const [r, i, a, n] = e;
    r.removeEventListener(i, a, n);
  }), ri = [];
};
let V = 0, we = "", Tr, ai, ze;
const ir = () => window.innerWidth, O = "wp-gallery-fullscreen-slider", zg = (e, r, i, a = [], n = "") => {
  const t = a.map(
    () => `
		<div class="${O}-item">
				<div class="${O}-item-loading">
						<div class="${O}-item-loading-spinner">
								<div class="${O}-item-loading-spinner-animation">
										<div class="${O}-item-loading-spinner-animation-bounce"></div>
								</div>
						</div>
						<div class="${O}-item-loading-text">${K(e, "gallery-loading-still")}</div>
				</div>
				<div class="${O}-item-loading-error">
					<div class="${O}-item-loading-error-text">${K(e, "gallery-loading-error")}</div>
					<div class="${O}-item-loading-error-refresh">${K(e, "gallery-loading-error-refresh")}</div>
				</div>
		</div>
		`.trim()
  ).join("");
  return a.some((l, s) => l.thumb === n ? (V = s, !0) : !1), we = r, Tr = e, ai = a, ze = i, `
		<div class="${O}" style="${we === "ltr" ? "margin-left" : "margin-right"}:-${V * ir()}px">
				<div class="${O}-button previous"></div>
				<div class="${O}-button next"></div>
				${t}
		</div>
		`.trim();
}, xg = (e, r) => {
  const i = () => e.description ? e.description : r.caption ? r.caption : "", a = (c) => {
    const d = ["CC", "BY", "SA", "Fair", "Public"];
    let p = "";
    return d.forEach((_) => {
      c && c.indexOf(_) !== -1 && (p += `<div class="${O}-item-attribution-info-${_.toLowerCase()}"></div>`);
    }), p;
  }, n = e.author ? e.author : K(Tr, "gallery-unknown-author"), t = e.filePage, l = i();
  return `
		<div class="${O}-item-caption">
			${(ir() < 400 && l.length > 128 ? !0 : ir() > 400 && l.length > 142) ? `<div class="${O}-item-caption-expand-cue"></div>` : ""}
			${l ? `<div class="${O}-item-caption-text"><bdi>${l}</bdi></div>` : ""}
		</div>
		<div class="${O}-item-attribution">
			<div class="${O}-item-attribution-info">
				${a(e.license)}
				${n ? `<bdi class="${O}-item-attribution-info-author">${n}</bdi>` : ""}
			</div>
			${t ? `<div class="${O}-item-attribution-more-info">
				<a href="${t}" class="${O}-item-attribution-more-info-link" target="_blank"></a>
			</div>` : ""}
		</div>
	`.trim();
}, ja = (e, r = !1) => {
  const i = e.querySelector("img"), a = e.querySelector(`.${O}-item-loading`), n = e.querySelector(`.${O}-item-loading-error`);
  if (r && (ze.querySelector(`.${O}`).querySelectorAll(`.${O}-item`).forEach((s) => {
    const c = s.querySelector("img"), d = s.querySelector(`.${O}-item-caption`), p = s.querySelector(`.${O}-item-attribution`);
    c && s.removeChild(c), d && s.removeChild(d), p && s.removeChild(p);
  }), he(0, !0), a.style.visibility = "visible", n.style.visibility = "hidden"), i.complete)
    a.style.visibility = "hidden", n.style.visibility = "hidden", i.style.visibility = "visible";
  else {
    const t = e.querySelector(`.${O}-item-loading-text`), l = setTimeout(() => {
      t.style.visibility = "visible";
    }, 5e3);
    i.addEventListener("load", () => {
      a.style.visibility = "hidden", n.style.visibility = "hidden", t.style.visibility = "hidden", clearTimeout(l);
    }), i.addEventListener("error", () => {
      const s = e.querySelector(`.${O}-item-loading-error-refresh`);
      if (a.style.visibility = "hidden", i.style.visibility = "hidden", !ua()) {
        const c = e.querySelector(`.${O}-item-loading-error-text`);
        c.innerText = K(Tr, "gallery-loading-error-offline"), n.classList.add("offline");
      }
      n.style.visibility = "visible", clearTimeout(l), s.addEventListener("click", () => {
        ja(e, !0);
      });
    });
  }
}, Sa = (e, r = !1) => {
  const i = e.querySelector(`.${O}-item-caption-text`), a = e.querySelector(`.${O}-item-caption-expand-cue`), n = e.querySelector(".expanded");
  a && n || r && a ? (a.classList.remove("expanded"), i.style.maxHeight = "80px") : a && (a.classList.add("expanded"), i.style.maxHeight = "241px");
}, Vr = (e, r = !1) => {
  const n = ze.querySelector(`.${O}`).querySelectorAll(`.${O}-item`)[e];
  n && yg(
    Tr,
    ai[e].title,
    (t) => {
      const l = n.querySelector("img"), s = n.querySelector(`.${O}-item-caption`);
      l || (r ? n.insertAdjacentHTML("beforeend", `<img src="${t.bestFitImageUrl}?timestamp=${Date.now()}"/>`) : n.insertAdjacentHTML("beforeend", `<img src="${t.bestFitImageUrl}"/>`), ja(n)), s || (n.insertAdjacentHTML(
        "beforeend",
        xg(t, ai[e])
      ), n.querySelector(`.${O}-item-caption`).addEventListener("click", () => {
        Sa(n);
      }));
    }
  );
}, he = (e = 1, r = !1) => {
  const i = ze.querySelector(`.${O}`), a = i.querySelectorAll(`.${O}-item`), n = i.querySelector(".next"), t = i.querySelector(".previous"), l = V + e, s = a[l], c = a[V].querySelector("img");
  s && (Sa(a[V], !0), V += e, n.style.opacity = V === a.length - 1 ? "0.5" : "1", t.style.opacity = V === 0 ? "0.5" : "1", ba(c), Vr(V, r), Vr(V + 1, r), Vr(V - 1, r)), i.style[we === "ltr" ? "marginLeft" : "marginRight"] = -ir() * V + "px";
}, Kr = () => {
  he(-1);
}, Mg = () => {
  const e = ze.querySelector(`.${O}`), r = we === "ltr" ? "marginLeft" : "marginRight", i = e.querySelectorAll(`.${O}-item`);
  e.addEventListener("pointerdown", (a) => {
    Yr(a, O) || (bg(a), Gr() === 1 && !kr() && Og(a, e, r));
  }), e.addEventListener("pointermove", (a) => {
    Yr(a, O) || (Gr() > 1 ? jg(a) : kr() ? Sg(a, he, i, V, we) : $g(a, e, r, we));
  }), e.addEventListener("pointerout", (a) => {
    Yr(a, O) || (e.style.transition = w.originalTransition, Gr() === 1 && !kr() && Ag(a, e, he, r, V), Tg(a));
  });
}, Pg = () => {
  ze.querySelector(".wp-gallery-fullscreen").classList.toggle("wp-gallery-fullscreen-focus-mode");
}, Lg = () => {
  const e = ze.querySelector(`.${O}`), r = e.querySelectorAll(`.${O}-item`), i = e.querySelector(".next"), a = e.querySelector(".previous");
  let n = !1;
  he(0), Mg(), e.addEventListener("click", (s) => {
    (s.target.className === `${O}-item` || s.target.tagName === "IMG") && (n ? (clearTimeout(n), n = null, kg(s)) : n = setTimeout(() => {
      n = null, Pg();
    }, 300));
  });
  const t = function(s) {
    s.style.transition = "unset", s.style.marginLeft = -V * ir() + "px";
  };
  let l;
  ii(window, "resize", () => {
    const s = document.querySelector("." + O);
    t(s), clearTimeout(l), l = setTimeout(() => {
      s.style.removeProperty("transition");
    }, 100);
  }), r.length === 1 ? (a.style.visibility = "hidden", i.style.visibility = "hidden") : (i.addEventListener("click", () => {
    he();
  }), a.addEventListener("click", () => {
    Kr();
  }), ii(window, "keydown", ({ key: s }) => {
    switch (s) {
      case "ArrowRight":
      case "Right":
        we === "ltr" ? he() : Kr();
        break;
      case "ArrowLeft":
      case "Left":
        we === "ltr" ? Kr() : he();
        break;
    }
  }));
}, Ne = "wp-gallery-fullscreen", qg = (e, r) => `
		<div class="${Ne}" lang="${e}" dir="${r}">
			<div class="${Ne}-close"></div>
			<div class="${Ne}-main"></div>
		</div>
	`.trim(), Xi = (e) => {
  const r = e.querySelector(`.${Ne}`);
  e.removeChild(r), Eg();
}, Wg = (e, r, i, a, n = document.body) => {
  n.insertAdjacentHTML("beforeend", qg(i, a)), n.querySelector(`.${Ne}-main`).insertAdjacentHTML("beforeend", zg(i, a, n, e, r)), n.querySelector(`.${Ne}-close`).addEventListener("click", () => {
    Xi(n);
  }), ii(window, "keydown", ({ key: l }) => {
    (l === "Escape" || l === "Esc") && Xi(n);
  }), Lg();
}, Rg = (e, r) => {
  const i = document.createElement("div");
  return i.classList.add("wikipediapreview-gallery-row"), e.forEach((a) => {
    const n = document.createElement("div");
    n.classList.add("wikipediapreview-gallery-image"), n.style.backgroundImage = `url(${a.thumb})`, n.addEventListener("click", (t) => {
      const l = t.target.style.backgroundImage.slice(4, -1).replace(/"/g, "");
      Wg(e, l, r.lang, r.dir);
    }), i.appendChild(n);
  }), i;
}, Cg = (e) => {
  let r = [], i = [];
  const a = (g, u) => {
    const y = setTimeout(g, u);
    return i.push(y), y;
  }, n = () => {
    i.forEach((g) => {
      clearTimeout(g);
    }), i = [];
  }, t = (g, u, y, f = void 0) => {
    g.addEventListener(u, y, f), r.push([g, u, y, f]);
  }, l = () => {
    r.forEach((g) => {
      const [u, y, f, S] = g;
      u.removeEventListener(y, f, S);
    }), r = [];
  }, s = (g) => {
    const u = g.toElement || g.relatedTarget || g.target, y = e.element.currentTargetElement;
    if (u !== y && !e.element.contains(u)) {
      const f = a(e.hide, 300), S = () => {
        clearTimeout(f);
      };
      t(e.element, "mouseenter", S);
    }
  }, c = (g) => {
    const u = e.element.querySelector(".wikipediapreview-body"), y = e.element.querySelector(".wikipediapreview-header"), f = e.element.querySelector(".wikipediapreview-footer-cta") || e.element.querySelector(".wikipediapreview-footer-loading");
    if (u)
      if (e.element.style[2] === "bottom" || e.element.style.bottom) {
        const S = e.element.getBoundingClientRect().top, T = parseInt(
          window.getComputedStyle(u).maxHeight.slice(0, -2)
        );
        u.style.maxHeight = Math.min(g, T + S) + "px";
      } else {
        const S = e.element.getBoundingClientRect().top, T = window.getComputedStyle(y).height.slice(0, -2), h = f ? window.getComputedStyle(f).height.slice(0, -2) : 0, b = window.innerHeight - S - T - h;
        u.style.maxHeight = Math.min(g, b) + "px";
      }
  }, d = () => {
    const { lang: u, title: y } = e;
    e.element.component.wikipediapreview.classList.add("expanded"), U || c(496), !e.loading && u && y && pg(u, y, (f) => {
      const S = e.element.component.wikipediapreviewGallery;
      f && f.length > 0 ? S.appendChild(Rg(f, e)) : e.element.component.body.removeChild(S);
    });
  }, p = (g) => {
    let u, y, f, S;
    const T = g.querySelector(".wikipediapreview-header"), h = g.querySelector(".wikipediapreview-body"), b = (E) => {
      u = E.touches[0].clientY, f = window.getComputedStyle(h), S = Number(f.height.slice(0, -2));
    }, $ = (E, P) => {
      P && E.preventDefault();
      const W = E.touches[0].clientY, z = u - W, M = S + z, N = !g.querySelector(".wikipediapreview.expanded") && !P || P;
      h.style.transition = "auto", y = W, N && (h.style.maxHeight = M + "px");
    }, I = (E) => {
      const P = g.querySelector(".wikipediapreview.expanded"), W = u - y, z = Math.abs(W) > 80, M = !P && !E || E;
      h.style.transition = "all 0.25s ease-in-out", W < 0 && z && M ? e.hide() : W > 0 && z && M && !P ? (h.style.maxHeight = "70vh", d()) : h.style.maxHeight = S + "px";
    };
    t(h, "touchstart", b), t(h, "touchmove", (E) => {
      $(E, !1);
    }), t(h, "touchend", () => I(!1)), t(T, "touchstart", b), t(T, "touchmove", (E) => {
      $(E, !0);
    }), t(T, "touchend", () => I(!0));
  };
  return { onHide: () => {
    e.element.component.wikipediapreview.classList.remove("expanded"), e.lang = null, e.title = null, e.loading = !1;
    const g = e.element.querySelector(".wikipediapreview-body");
    g.style.transition = "auto", l(), n();
  }, onShow: (g) => {
    if (g.component = {
      body: g.querySelector(".wikipediapreview-body"),
      wikipediapreview: g.querySelector(".wikipediapreview"),
      wikipediapreviewGallery: g.querySelector(".wikipediapreview-gallery"),
      closeBtn: g.querySelector(".wikipediapreview-header-closebtn"),
      readMore: g.querySelector(".wikipediapreview-footer-cta-readmore"),
      content: g.querySelector(".wikipediapreview-body > p")
    }, g.component.content && g.component.content.getBoundingClientRect().height < 248 ? d() : U || c(248), U && t(g.component.closeBtn, "click", e.hide), g.component.readMore && t(g.component.readMore, "click", d), U) {
      const u = document.querySelector(".wp-dark-screen");
      t(u, "click", e.hide, !0), p(g);
    } else
      t(g, "mouseleave", s), t(g.currentTargetElement, "mouseleave", s);
  }, onExpand: d };
}, Ng = ["top", "right", "bottom", "left"], Ji = ["start", "end"], Zi = /* @__PURE__ */ Ng.reduce((e, r) => e.concat(r, r + "-" + Ji[0], r + "-" + Ji[1]), []), ve = Math.min, fe = Math.max, jr = Math.round, ke = (e) => ({
  x: e,
  y: e
}), Ig = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Dg = {
  start: "end",
  end: "start"
};
function ni(e, r, i) {
  return fe(e, ve(r, i));
}
function Ue(e, r) {
  return typeof e == "function" ? e(r) : e;
}
function be(e) {
  return e.split("-")[0];
}
function pe(e) {
  return e.split("-")[1];
}
function Ta(e) {
  return e === "x" ? "y" : "x";
}
function si(e) {
  return e === "y" ? "height" : "width";
}
function or(e) {
  return ["top", "bottom"].includes(be(e)) ? "y" : "x";
}
function di(e) {
  return Ta(or(e));
}
function Hg(e, r, i) {
  i === void 0 && (i = !1);
  const a = pe(e), n = di(e), t = si(n);
  let l = n === "x" ? a === (i ? "end" : "start") ? "right" : "left" : a === "start" ? "bottom" : "top";
  return r.reference[t] > r.floating[t] && (l = Qi(l)), [l, Qi(l)];
}
function Bg(e) {
  return e.replace(/start|end/g, (r) => Dg[r]);
}
function Qi(e) {
  return e.replace(/left|right|bottom|top/g, (r) => Ig[r]);
}
function Ug(e) {
  return G({
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }, e);
}
function gi(e) {
  return typeof e != "number" ? Ug(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function De(e) {
  const {
    x: r,
    y: i,
    width: a,
    height: n
  } = e;
  return {
    width: a,
    height: n,
    top: i,
    left: r,
    right: r + a,
    bottom: i + n,
    x: r,
    y: i
  };
}
function ea(e, r, i) {
  let {
    reference: a,
    floating: n
  } = e;
  const t = or(r), l = di(r), s = si(l), c = be(r), d = t === "y", p = a.x + a.width / 2 - n.width / 2, _ = a.y + a.height / 2 - n.height / 2, k = a[s] / 2 - n[s] / 2;
  let g;
  switch (c) {
    case "top":
      g = {
        x: p,
        y: a.y - n.height
      };
      break;
    case "bottom":
      g = {
        x: p,
        y: a.y + a.height
      };
      break;
    case "right":
      g = {
        x: a.x + a.width,
        y: _
      };
      break;
    case "left":
      g = {
        x: a.x - n.width,
        y: _
      };
      break;
    default:
      g = {
        x: a.x,
        y: a.y
      };
  }
  switch (pe(r)) {
    case "start":
      g[l] -= k * (i && d ? -1 : 1);
      break;
    case "end":
      g[l] += k * (i && d ? -1 : 1);
      break;
  }
  return g;
}
const Fg = (e, r, i) => le(void 0, null, function* () {
  const {
    placement: a = "bottom",
    strategy: n = "absolute",
    middleware: t = [],
    platform: l
  } = i, s = t.filter(Boolean), c = yield l.isRTL == null ? void 0 : l.isRTL(r);
  let d = yield l.getElementRects({
    reference: e,
    floating: r,
    strategy: n
  }), {
    x: p,
    y: _
  } = ea(d, a, c), k = a, g = {}, u = 0;
  for (let y = 0; y < s.length; y++) {
    const {
      name: f,
      fn: S
    } = s[y], {
      x: T,
      y: h,
      data: b,
      reset: $
    } = yield S({
      x: p,
      y: _,
      initialPlacement: a,
      placement: k,
      strategy: n,
      middlewareData: g,
      rects: d,
      platform: l,
      elements: {
        reference: e,
        floating: r
      }
    });
    p = T != null ? T : p, _ = h != null ? h : _, g = _e(G({}, g), {
      [f]: G(G({}, g[f]), b)
    }), $ && u <= 50 && (u++, typeof $ == "object" && ($.placement && (k = $.placement), $.rects && (d = $.rects === !0 ? yield l.getElementRects({
      reference: e,
      floating: r,
      strategy: n
    }) : $.rects), {
      x: p,
      y: _
    } = ea(d, k, c)), y = -1);
  }
  return {
    x: p,
    y: _,
    placement: k,
    strategy: n,
    middlewareData: g
  };
});
function Oa(e, r) {
  return le(this, null, function* () {
    var i;
    r === void 0 && (r = {});
    const {
      x: a,
      y: n,
      platform: t,
      rects: l,
      elements: s,
      strategy: c
    } = e, {
      boundary: d = "clippingAncestors",
      rootBoundary: p = "viewport",
      elementContext: _ = "floating",
      altBoundary: k = !1,
      padding: g = 0
    } = Ue(r, e), u = gi(g), f = s[k ? _ === "floating" ? "reference" : "floating" : _], S = De(yield t.getClippingRect({
      element: (i = yield t.isElement == null ? void 0 : t.isElement(f)) == null || i ? f : f.contextElement || (yield t.getDocumentElement == null ? void 0 : t.getDocumentElement(s.floating)),
      boundary: d,
      rootBoundary: p,
      strategy: c
    })), T = _ === "floating" ? {
      x: a,
      y: n,
      width: l.floating.width,
      height: l.floating.height
    } : l.reference, h = yield t.getOffsetParent == null ? void 0 : t.getOffsetParent(s.floating), b = (yield t.isElement == null ? void 0 : t.isElement(h)) ? (yield t.getScale == null ? void 0 : t.getScale(h)) || {
      x: 1,
      y: 1
    } : {
      x: 1,
      y: 1
    }, $ = De(t.convertOffsetParentRelativeRectToViewportRelativeRect ? yield t.convertOffsetParentRelativeRectToViewportRelativeRect({
      elements: s,
      rect: T,
      offsetParent: h,
      strategy: c
    }) : T);
    return {
      top: (S.top - $.top + u.top) / b.y,
      bottom: ($.bottom - S.bottom + u.bottom) / b.y,
      left: (S.left - $.left + u.left) / b.x,
      right: ($.right - S.right + u.right) / b.x
    };
  });
}
const Yg = (e) => ({
  name: "arrow",
  options: e,
  fn(i) {
    return le(this, null, function* () {
      const {
        x: a,
        y: n,
        placement: t,
        rects: l,
        platform: s,
        elements: c,
        middlewareData: d
      } = i, {
        element: p,
        padding: _ = 0
      } = Ue(e, i) || {};
      if (p == null)
        return {};
      const k = gi(_), g = {
        x: a,
        y: n
      }, u = di(t), y = si(u), f = yield s.getDimensions(p), S = u === "y", T = S ? "top" : "left", h = S ? "bottom" : "right", b = S ? "clientHeight" : "clientWidth", $ = l.reference[y] + l.reference[u] - g[u] - l.floating[y], I = g[u] - l.reference[u], E = yield s.getOffsetParent == null ? void 0 : s.getOffsetParent(p);
      let P = E ? E[b] : 0;
      (!P || !(yield s.isElement == null ? void 0 : s.isElement(E))) && (P = c.floating[b] || l.floating[y]);
      const W = $ / 2 - I / 2, z = P / 2 - f[y] / 2 - 1, M = ve(k[T], z), L = ve(k[h], z), N = M, oe = P - f[y] - L, J = P / 2 - f[y] / 2 + W, ge = ni(N, J, oe), ce = !d.arrow && pe(t) != null && J !== ge && l.reference[y] / 2 - (J < N ? M : L) - f[y] / 2 < 0, ye = ce ? J < N ? J - N : J - oe : 0;
      return {
        [u]: g[u] + ye,
        data: G({
          [u]: ge,
          centerOffset: J - ge - ye
        }, ce && {
          alignmentOffset: ye
        }),
        reset: ce
      };
    });
  }
});
function Gg(e, r, i) {
  return (e ? [...i.filter((n) => pe(n) === e), ...i.filter((n) => pe(n) !== e)] : i.filter((n) => be(n) === n)).filter((n) => e ? pe(n) === e || (r ? Bg(n) !== n : !1) : !0);
}
const Vg = function(e) {
  return e === void 0 && (e = {}), {
    name: "autoPlacement",
    options: e,
    fn(i) {
      return le(this, null, function* () {
        var a, n, t;
        const {
          rects: l,
          middlewareData: s,
          placement: c,
          platform: d,
          elements: p
        } = i, M = Ue(e, i), {
          crossAxis: _ = !1,
          alignment: k,
          allowedPlacements: g = Zi,
          autoAlignment: u = !0
        } = M, y = Cr(M, [
          "crossAxis",
          "alignment",
          "allowedPlacements",
          "autoAlignment"
        ]), f = k !== void 0 || g === Zi ? Gg(k || null, u, g) : g, S = yield Oa(i, y), T = ((a = s.autoPlacement) == null ? void 0 : a.index) || 0, h = f[T];
        if (h == null)
          return {};
        const b = Hg(h, l, yield d.isRTL == null ? void 0 : d.isRTL(p.floating));
        if (c !== h)
          return {
            reset: {
              placement: f[0]
            }
          };
        const $ = [S[be(h)], S[b[0]], S[b[1]]], I = [...((n = s.autoPlacement) == null ? void 0 : n.overflows) || [], {
          placement: h,
          overflows: $
        }], E = f[T + 1];
        if (E)
          return {
            data: {
              index: T + 1,
              overflows: I
            },
            reset: {
              placement: E
            }
          };
        const P = I.map((L) => {
          const N = pe(L.placement);
          return [L.placement, N && _ ? (
            // Check along the mainAxis and main crossAxis side.
            L.overflows.slice(0, 2).reduce((oe, J) => oe + J, 0)
          ) : (
            // Check only the mainAxis.
            L.overflows[0]
          ), L.overflows];
        }).sort((L, N) => L[1] - N[1]), z = ((t = P.filter((L) => L[2].slice(
          0,
          // Aligned placements should not check their opposite crossAxis
          // side.
          pe(L[0]) ? 2 : 3
        ).every((N) => N <= 0))[0]) == null ? void 0 : t[0]) || P[0][0];
        return z !== c ? {
          data: {
            index: T + 1,
            overflows: I
          },
          reset: {
            placement: z
          }
        } : {};
      });
    }
  };
};
function $a(e) {
  const r = ve(...e.map((t) => t.left)), i = ve(...e.map((t) => t.top)), a = fe(...e.map((t) => t.right)), n = fe(...e.map((t) => t.bottom));
  return {
    x: r,
    y: i,
    width: a - r,
    height: n - i
  };
}
function Kg(e) {
  const r = e.slice().sort((n, t) => n.y - t.y), i = [];
  let a = null;
  for (let n = 0; n < r.length; n++) {
    const t = r[n];
    !a || t.y - a.y > a.height / 2 ? i.push([t]) : i[i.length - 1].push(t), a = t;
  }
  return i.map((n) => De($a(n)));
}
const Xg = function(e) {
  return e === void 0 && (e = {}), {
    name: "inline",
    options: e,
    fn(i) {
      return le(this, null, function* () {
        const {
          placement: a,
          elements: n,
          rects: t,
          platform: l,
          strategy: s
        } = i, {
          padding: c = 2,
          x: d,
          y: p
        } = Ue(e, i), _ = Array.from((yield l.getClientRects == null ? void 0 : l.getClientRects(n.reference)) || []), k = Kg(_), g = De($a(_)), u = gi(c);
        function y() {
          if (k.length === 2 && k[0].left > k[1].right && d != null && p != null)
            return k.find((S) => d > S.left - u.left && d < S.right + u.right && p > S.top - u.top && p < S.bottom + u.bottom) || g;
          if (k.length >= 2) {
            if (or(a) === "y") {
              const M = k[0], L = k[k.length - 1], N = be(a) === "top", oe = M.top, J = L.bottom, ge = N ? M.left : L.left, ce = N ? M.right : L.right, ye = ce - ge, R = J - oe;
              return {
                top: oe,
                bottom: J,
                left: ge,
                right: ce,
                width: ye,
                height: R,
                x: ge,
                y: oe
              };
            }
            const S = be(a) === "left", T = fe(...k.map((M) => M.right)), h = ve(...k.map((M) => M.left)), b = k.filter((M) => S ? M.left === h : M.right === T), $ = b[0].top, I = b[b.length - 1].bottom, E = h, P = T, W = P - E, z = I - $;
            return {
              top: $,
              bottom: I,
              left: E,
              right: P,
              width: W,
              height: z,
              x: E,
              y: $
            };
          }
          return g;
        }
        const f = yield l.getElementRects({
          reference: {
            getBoundingClientRect: y
          },
          floating: n.floating,
          strategy: s
        });
        return t.reference.x !== f.reference.x || t.reference.y !== f.reference.y || t.reference.width !== f.reference.width || t.reference.height !== f.reference.height ? {
          reset: {
            rects: f
          }
        } : {};
      });
    }
  };
};
function Jg(e, r) {
  return le(this, null, function* () {
    const {
      placement: i,
      platform: a,
      elements: n
    } = e, t = yield a.isRTL == null ? void 0 : a.isRTL(n.floating), l = be(i), s = pe(i), c = or(i) === "y", d = ["left", "top"].includes(l) ? -1 : 1, p = t && c ? -1 : 1, _ = Ue(r, e);
    let {
      mainAxis: k,
      crossAxis: g,
      alignmentAxis: u
    } = typeof _ == "number" ? {
      mainAxis: _,
      crossAxis: 0,
      alignmentAxis: null
    } : G({
      mainAxis: 0,
      crossAxis: 0,
      alignmentAxis: null
    }, _);
    return s && typeof u == "number" && (g = s === "end" ? u * -1 : u), c ? {
      x: g * p,
      y: k * d
    } : {
      x: k * d,
      y: g * p
    };
  });
}
const Zg = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    fn(i) {
      return le(this, null, function* () {
        var a, n;
        const {
          x: t,
          y: l,
          placement: s,
          middlewareData: c
        } = i, d = yield Jg(i, e);
        return s === ((a = c.offset) == null ? void 0 : a.placement) && (n = c.arrow) != null && n.alignmentOffset ? {} : {
          x: t + d.x,
          y: l + d.y,
          data: _e(G({}, d), {
            placement: s
          })
        };
      });
    }
  };
}, Qg = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    fn(i) {
      return le(this, null, function* () {
        const {
          x: a,
          y: n,
          placement: t
        } = i, S = Ue(e, i), {
          mainAxis: l = !0,
          crossAxis: s = !1,
          limiter: c = {
            fn: (T) => {
              let {
                x: h,
                y: b
              } = T;
              return {
                x: h,
                y: b
              };
            }
          }
        } = S, d = Cr(S, [
          "mainAxis",
          "crossAxis",
          "limiter"
        ]), p = {
          x: a,
          y: n
        }, _ = yield Oa(i, d), k = or(be(t)), g = Ta(k);
        let u = p[g], y = p[k];
        if (l) {
          const T = g === "y" ? "top" : "left", h = g === "y" ? "bottom" : "right", b = u + _[T], $ = u - _[h];
          u = ni(b, u, $);
        }
        if (s) {
          const T = k === "y" ? "top" : "left", h = k === "y" ? "bottom" : "right", b = y + _[T], $ = y - _[h];
          y = ni(b, y, $);
        }
        const f = c.fn(_e(G({}, i), {
          [g]: u,
          [k]: y
        }));
        return _e(G({}, f), {
          data: {
            x: f.x - a,
            y: f.y - n
          }
        });
      });
    }
  };
};
function Fe(e) {
  return Aa(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function re(e) {
  var r;
  return (e == null || (r = e.ownerDocument) == null ? void 0 : r.defaultView) || window;
}
function Se(e) {
  var r;
  return (r = (Aa(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : r.documentElement;
}
function Aa(e) {
  return e instanceof Node || e instanceof re(e).Node;
}
function se(e) {
  return e instanceof Element || e instanceof re(e).Element;
}
function de(e) {
  return e instanceof HTMLElement || e instanceof re(e).HTMLElement;
}
function ra(e) {
  return typeof ShadowRoot == "undefined" ? !1 : e instanceof ShadowRoot || e instanceof re(e).ShadowRoot;
}
function lr(e) {
  const {
    overflow: r,
    overflowX: i,
    overflowY: a,
    display: n
  } = te(e);
  return /auto|scroll|overlay|hidden|clip/.test(r + a + i) && !["inline", "contents"].includes(n);
}
function ec(e) {
  return ["table", "td", "th"].includes(Fe(e));
}
function ci(e) {
  const r = ui(), i = te(e);
  return i.transform !== "none" || i.perspective !== "none" || (i.containerType ? i.containerType !== "normal" : !1) || !r && (i.backdropFilter ? i.backdropFilter !== "none" : !1) || !r && (i.filter ? i.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((a) => (i.willChange || "").includes(a)) || ["paint", "layout", "strict", "content"].some((a) => (i.contain || "").includes(a));
}
function rc(e) {
  let r = je(e);
  for (; de(r) && !He(r); ) {
    if (ci(r))
      return r;
    r = je(r);
  }
  return null;
}
function ui() {
  return typeof CSS == "undefined" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function He(e) {
  return ["html", "body", "#document"].includes(Fe(e));
}
function te(e) {
  return re(e).getComputedStyle(e);
}
function Or(e) {
  return se(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function je(e) {
  if (Fe(e) === "html")
    return e;
  const r = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    ra(e) && e.host || // Fallback.
    Se(e)
  );
  return ra(r) ? r.host : r;
}
function Ea(e) {
  const r = je(e);
  return He(r) ? e.ownerDocument ? e.ownerDocument.body : e.body : de(r) && lr(r) ? r : Ea(r);
}
function ti(e, r, i) {
  var a;
  r === void 0 && (r = []), i === void 0 && (i = !0);
  const n = Ea(e), t = n === ((a = e.ownerDocument) == null ? void 0 : a.body), l = re(n);
  return t ? r.concat(l, l.visualViewport || [], lr(n) ? n : [], l.frameElement && i ? ti(l.frameElement) : []) : r.concat(n, ti(n, [], i));
}
function za(e) {
  const r = te(e);
  let i = parseFloat(r.width) || 0, a = parseFloat(r.height) || 0;
  const n = de(e), t = n ? e.offsetWidth : i, l = n ? e.offsetHeight : a, s = jr(i) !== t || jr(a) !== l;
  return s && (i = t, a = l), {
    width: i,
    height: a,
    $: s
  };
}
function xa(e) {
  return se(e) ? e : e.contextElement;
}
function Ie(e) {
  const r = xa(e);
  if (!de(r))
    return ke(1);
  const i = r.getBoundingClientRect(), {
    width: a,
    height: n,
    $: t
  } = za(r);
  let l = (t ? jr(i.width) : i.width) / a, s = (t ? jr(i.height) : i.height) / n;
  return (!l || !Number.isFinite(l)) && (l = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: l,
    y: s
  };
}
const ic = /* @__PURE__ */ ke(0);
function Ma(e) {
  const r = re(e);
  return !ui() || !r.visualViewport ? ic : {
    x: r.visualViewport.offsetLeft,
    y: r.visualViewport.offsetTop
  };
}
function ac(e, r, i) {
  return r === void 0 && (r = !1), !i || r && i !== re(e) ? !1 : r;
}
function ar(e, r, i, a) {
  r === void 0 && (r = !1), i === void 0 && (i = !1);
  const n = e.getBoundingClientRect(), t = xa(e);
  let l = ke(1);
  r && (a ? se(a) && (l = Ie(a)) : l = Ie(e));
  const s = ac(t, i, a) ? Ma(t) : ke(0);
  let c = (n.left + s.x) / l.x, d = (n.top + s.y) / l.y, p = n.width / l.x, _ = n.height / l.y;
  if (t) {
    const k = re(t), g = a && se(a) ? re(a) : a;
    let u = k, y = u.frameElement;
    for (; y && a && g !== u; ) {
      const f = Ie(y), S = y.getBoundingClientRect(), T = te(y), h = S.left + (y.clientLeft + parseFloat(T.paddingLeft)) * f.x, b = S.top + (y.clientTop + parseFloat(T.paddingTop)) * f.y;
      c *= f.x, d *= f.y, p *= f.x, _ *= f.y, c += h, d += b, u = re(y), y = u.frameElement;
    }
  }
  return De({
    width: p,
    height: _,
    x: c,
    y: d
  });
}
const nc = [":popover-open", ":modal"];
function mi(e) {
  return nc.some((r) => {
    try {
      return e.matches(r);
    } catch (i) {
      return !1;
    }
  });
}
function tc(e) {
  let {
    elements: r,
    rect: i,
    offsetParent: a,
    strategy: n
  } = e;
  const t = n === "fixed", l = Se(a), s = r ? mi(r.floating) : !1;
  if (a === l || s && t)
    return i;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, d = ke(1);
  const p = ke(0), _ = de(a);
  if ((_ || !_ && !t) && ((Fe(a) !== "body" || lr(l)) && (c = Or(a)), de(a))) {
    const k = ar(a);
    d = Ie(a), p.x = k.x + a.clientLeft, p.y = k.y + a.clientTop;
  }
  return {
    width: i.width * d.x,
    height: i.height * d.y,
    x: i.x * d.x - c.scrollLeft * d.x + p.x,
    y: i.y * d.y - c.scrollTop * d.y + p.y
  };
}
function oc(e) {
  return Array.from(e.getClientRects());
}
function Pa(e) {
  return ar(Se(e)).left + Or(e).scrollLeft;
}
function lc(e) {
  const r = Se(e), i = Or(e), a = e.ownerDocument.body, n = fe(r.scrollWidth, r.clientWidth, a.scrollWidth, a.clientWidth), t = fe(r.scrollHeight, r.clientHeight, a.scrollHeight, a.clientHeight);
  let l = -i.scrollLeft + Pa(e);
  const s = -i.scrollTop;
  return te(a).direction === "rtl" && (l += fe(r.clientWidth, a.clientWidth) - n), {
    width: n,
    height: t,
    x: l,
    y: s
  };
}
function sc(e, r) {
  const i = re(e), a = Se(e), n = i.visualViewport;
  let t = a.clientWidth, l = a.clientHeight, s = 0, c = 0;
  if (n) {
    t = n.width, l = n.height;
    const d = ui();
    (!d || d && r === "fixed") && (s = n.offsetLeft, c = n.offsetTop);
  }
  return {
    width: t,
    height: l,
    x: s,
    y: c
  };
}
function dc(e, r) {
  const i = ar(e, !0, r === "fixed"), a = i.top + e.clientTop, n = i.left + e.clientLeft, t = de(e) ? Ie(e) : ke(1), l = e.clientWidth * t.x, s = e.clientHeight * t.y, c = n * t.x, d = a * t.y;
  return {
    width: l,
    height: s,
    x: c,
    y: d
  };
}
function ia(e, r, i) {
  let a;
  if (r === "viewport")
    a = sc(e, i);
  else if (r === "document")
    a = lc(Se(e));
  else if (se(r))
    a = dc(r, i);
  else {
    const n = Ma(e);
    a = _e(G({}, r), {
      x: r.x - n.x,
      y: r.y - n.y
    });
  }
  return De(a);
}
function La(e, r) {
  const i = je(e);
  return i === r || !se(i) || He(i) ? !1 : te(i).position === "fixed" || La(i, r);
}
function gc(e, r) {
  const i = r.get(e);
  if (i)
    return i;
  let a = ti(e, [], !1).filter((s) => se(s) && Fe(s) !== "body"), n = null;
  const t = te(e).position === "fixed";
  let l = t ? je(e) : e;
  for (; se(l) && !He(l); ) {
    const s = te(l), c = ci(l);
    !c && s.position === "fixed" && (n = null), (t ? !c && !n : !c && s.position === "static" && !!n && ["absolute", "fixed"].includes(n.position) || lr(l) && !c && La(e, l)) ? a = a.filter((p) => p !== l) : n = s, l = je(l);
  }
  return r.set(e, a), a;
}
function cc(e) {
  let {
    element: r,
    boundary: i,
    rootBoundary: a,
    strategy: n
  } = e;
  const l = [...i === "clippingAncestors" ? mi(r) ? [] : gc(r, this._c) : [].concat(i), a], s = l[0], c = l.reduce((d, p) => {
    const _ = ia(r, p, n);
    return d.top = fe(_.top, d.top), d.right = ve(_.right, d.right), d.bottom = ve(_.bottom, d.bottom), d.left = fe(_.left, d.left), d;
  }, ia(r, s, n));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function uc(e) {
  const {
    width: r,
    height: i
  } = za(e);
  return {
    width: r,
    height: i
  };
}
function mc(e, r, i) {
  const a = de(r), n = Se(r), t = i === "fixed", l = ar(e, !0, t, r);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = ke(0);
  if (a || !a && !t)
    if ((Fe(r) !== "body" || lr(n)) && (s = Or(r)), a) {
      const _ = ar(r, !0, t, r);
      c.x = _.x + r.clientLeft, c.y = _.y + r.clientTop;
    } else
      n && (c.x = Pa(n));
  const d = l.left + s.scrollLeft - c.x, p = l.top + s.scrollTop - c.y;
  return {
    x: d,
    y: p,
    width: l.width,
    height: l.height
  };
}
function Xr(e) {
  return te(e).position === "static";
}
function aa(e, r) {
  return !de(e) || te(e).position === "fixed" ? null : r ? r(e) : e.offsetParent;
}
function qa(e, r) {
  const i = re(e);
  if (mi(e))
    return i;
  if (!de(e)) {
    let n = je(e);
    for (; n && !He(n); ) {
      if (se(n) && !Xr(n))
        return n;
      n = je(n);
    }
    return i;
  }
  let a = aa(e, r);
  for (; a && ec(a) && Xr(a); )
    a = aa(a, r);
  return a && He(a) && Xr(a) && !ci(a) ? i : a || rc(e) || i;
}
const fc = function(e) {
  return le(this, null, function* () {
    const r = this.getOffsetParent || qa, i = this.getDimensions, a = yield i(e.floating);
    return {
      reference: mc(e.reference, yield r(e.floating), e.strategy),
      floating: {
        x: 0,
        y: 0,
        width: a.width,
        height: a.height
      }
    };
  });
};
function pc(e) {
  return te(e).direction === "rtl";
}
const yc = {
  convertOffsetParentRelativeRectToViewportRelativeRect: tc,
  getDocumentElement: Se,
  getClippingRect: cc,
  getOffsetParent: qa,
  getElementRects: fc,
  getClientRects: oc,
  getDimensions: uc,
  getScale: Ie,
  isElement: se,
  isRTL: pc
}, _c = Zg, hc = Vg, wc = Qg, vc = Yg, kc = Xg, bc = (e, r, i) => {
  const a = /* @__PURE__ */ new Map(), n = G({
    platform: yc
  }, i), t = _e(G({}, n.platform), {
    _c: a
  });
  return Fg(e, r, _e(G({}, n), {
    platform: t
  }));
};
let B, Jr;
const wr = (e) => e && e + "px", jc = (e, r = window) => {
  B || (B = r.document.createElement("div"), B.classList.add("wp-popup"), B.style.visibility = "hidden", e.appendChild(B), Jr = r.document.createElement("div"), Jr.classList.add("wp-popup-arrow"));
  const i = {
    /* onShow, onHide */
  };
  return { show: (l, s, { x: c, y: d }) => {
    B.innerHTML = l + Jr.outerHTML;
    const p = B.querySelector(".wp-popup-arrow");
    bc(s, B, {
      middleware: [
        kc({ x: c, y: d }),
        wc(),
        hc({
          allowedPlacements: ["top", "bottom"]
        }),
        _c(10),
        vc({ element: p })
      ]
    }).then(({ x: _, y: k, middlewareData: g, placement: u }) => {
      if (B.style.top = wr(k), B.style.left = wr(_), g.arrow && p) {
        const { x: y, y: f } = g.arrow;
        p.style.left = y !== null ? wr(y) : "", p.style.top = f !== null ? wr(f) : "", u === "left" ? (p.style.right = "-8px", p.style.transform = "rotate(90deg)") : u === "right" ? (p.style.left = "-8px", p.style.transform = "rotate(-90deg)") : u === "top" ? (p.style.bottom = "-8px", p.style.transform = "rotate(180deg)") : u === "bottom" && (p.style.top = "-8px");
      }
      B.currentTargetElement = s, B.style.visibility = "visible", i.onShow && i.onShow(B);
    });
  }, hide: () => {
    i.onHide && i.onHide(B), B.style.visibility = "hidden", B.currentTargetElement = null;
  }, subscribe: (l = {}) => {
    l.onShow && (i.onShow = l.onShow), l.onHide && (i.onHide = l.onHide);
  }, element: B };
};
let ae, Wa;
const Sc = (e) => {
  if (!e.querySelector(".wp-dark-screen")) {
    const r = e.createElement("div");
    r.classList.add("wp-dark-screen"), e.body.appendChild(r), Wa = e.body.style.overflow, e.body.style.overflow = "hidden";
  }
}, Tc = (e) => {
  const r = e.getElementsByClassName("wp-dark-screen");
  e.body.removeChild(r[0]), e.body.style.overflow = Wa;
}, Oc = (e, r = window) => {
  ae || (ae = r.document.createElement("div"), ae.classList.add("wp-touch-popup"), ae.style.visibility = "hidden", e.appendChild(ae));
  const i = {
    /* onShow, onHide */
  };
  return { show: (s) => {
    ae.innerHTML = s, ae.style.visibility = "visible", Sc(r.document), i.onShow && i.onShow(ae);
  }, hide: () => {
    i.onHide && i.onHide(ae), ae.style.visibility = "hidden", Tc(r.document);
  }, expand: () => {
    i.onExpand && i.onExpand();
  }, subscribe: (s = {}) => {
    s.onShow && (i.onShow = s.onShow), s.onHide && (i.onHide = s.onHide), s.onExpand && (i.onExpand = s.onExpand);
  }, element: ae };
}, sr = (e, r, i = "") => `
		<div class="wikipediapreview-header">
			${i ? `<div class="wikipediapreview-header-image" style="${`background-image:url('${i}');background-size:cover;`}"></div>` : ""}
			<div class="wikipediapreview-header-wordmark${i ? " wikipediapreview-header-wordmark-with-image" : ""} wikipediapreview-header-wordmark-${e}"></div>
			${r ? '<div class="wikipediapreview-header-closebtn"></div>' : ""}
		</div>
`.trim(), fi = (e, r, i) => `
		<div class="wikipediapreview-body wikipediapreview-body-${e}">
			<div class="wikipediapreview-body-message">
				<div class="wikipediapreview-body-icon"></div>
					${r}
			</div>
			<div class="wikipediapreview-body-action">
				${i}
			</div>
		</div>
`.trim(), Ra = (e, r, i) => `<a href="${br(e, r, i)}" target="_blank" class="wikipediapreview-cta-readonwiki">${K(e, "read-on-wiki")}</a>`, dr = (e, r, i, a, n, t) => {
  const l = t === "detect" ? "" : `wikipediapreview-${t}-theme`;
  return `
		<div class="wikipediapreview ${r ? "mobile" : ""} ${l}" lang="${e}" dir="${i}">
			${a}
			${n}
		</div>
	`.trim();
}, oi = (e, r, i, a) => {
  const n = r.imgUrl, t = `
			<div class="wikipediapreview-body">
				${r.extractHtml}
				<div class="wikipediapreview-gallery">
				</div>
			</div>
			<div class="wikipediapreview-footer">
				<span class="wikipediapreview-footer-cta wikipediapreview-footer-cta-readmore">${K(e, "continue-reading")}</span>
				<a href="${br(e, r.title, i)}" class="wikipediapreview-footer-cta wikipediapreview-footer-cta-readonwiki" target="_blank">${K(e, "read-more")}</a>
			</div>
		`.trim();
  return dr(
    e,
    i,
    r.dir,
    sr(e, i, n),
    t,
    a
  );
}, $c = (e, r, i, a) => {
  const n = `
		<div class="wikipediapreview-body wikipediapreview-body-loading">
			<div class="wikipediapreview-body-loading-line larger"></div>
			<div class="wikipediapreview-body-loading-line medium"></div>
			<div class="wikipediapreview-body-loading-line larger"></div>
			<div class="wikipediapreview-body-loading-line medium"></div>
			<div class="wikipediapreview-body-loading-line smaller"></div>
			<div class="wikipediapreview-body-loading-line larger"></div>
			<div class="wikipediapreview-body-loading-line medium"></div>
			<div class="wikipediapreview-body-loading-line larger"></div>
			<div class="wikipediapreview-body-loading-line medium"></div>
			<div class="wikipediapreview-body-loading-line smaller"></div>
		</div>
		<div class="wikipediapreview-footer-loading"></div>
	`.trim();
  return dr(r, e, i, sr(r, e), n, a);
}, Ac = (e, r, i, a, n) => {
  const t = `<span>${K(r, "preview-error-message")}</span>`, l = Ra(r, i, e);
  return dr(r, e, a, sr(r, e), fi("error", t, l), n);
}, Ec = (e, r, i, a, n) => {
  const t = `<span>${K(r, "preview-disambiguation-message", i)}</span>`, l = Ra(r, i, e);
  return dr(r, e, a, sr(r, e), fi("disambiguation", t, l), n);
}, zc = (e, r, i, a) => {
  const n = `<span>${K(r, "preview-offline-message")}</span>`, t = `<a>${K(r, "preview-offline-cta")}</a>`;
  return dr(r, e, i, sr(r, e), fi("offline", n, t), a);
}, Ze = (e, r, i) => {
  const a = e && e[r];
  if (a instanceof Function)
    try {
      a.apply(null, i);
    } catch (n) {
      console.log("Error invoking Wikipedia Preview custom callback", n);
    }
}, xc = (e, r, i) => {
  ha(r, e, (a) => {
    i(oi(r, a, U));
  });
}, na = (e, r) => {
  const i = [];
  (typeof e == "string" || e instanceof String) && Array.prototype.forEach.call(
    document.querySelectorAll(e),
    (a) => {
      i.push(a);
    }
  ), (e instanceof Document || e instanceof Element) && i.push(e), Array.isArray(e) && e.forEach((a) => {
    a instanceof Element && i.push(a);
  }), i.forEach((a) => r(a));
};
let ta, Ee;
function Mc({
  root: e = document,
  selector: r = "[data-wikipedia-preview]",
  lang: i = "en",
  detectLinks: a = !1,
  popupContainer: n = document.body,
  events: t = {},
  debug: l = !1,
  prefersColorScheme: s = "detect"
}) {
  n = kn(n) || document.body;
  const c = i, d = U ? Oc(n) : jc(n), p = Cg(d), _ = {}, k = [], g = [];
  Ee = s;
  const u = (y, f = !1) => {
    y.preventDefault();
    const S = Date.now(), { currentTarget: T } = f ? _ : y, h = f ? _.title : decodeURIComponent(T.getAttribute("data-wp-title") || T.textContent), b = f ? _.lang : T.getAttribute("data-wp-lang") || c, $ = f ? _.pointerPosition : { x: y.clientX, y: y.clientY }, I = ma(b);
    d.element.currentTargetElement === T && !f || (ta = S, d.element.style.visibility === "visible" && d.hide(), d.loading = !0, d.dir = I, d.show(
      $c(U, b, I, Ee),
      T,
      $
    ), ha(b, h, (E) => {
      if (S === ta && d.loading) {
        if (d.loading = !1, E) {
          if (d.lang = b, d.title = h, E.type === "standard")
            d.show(
              oi(b, E, U, Ee),
              T,
              $
            ), Ze(t, "onShow", [h, b, "standard"]);
          else if (E.type === "disambiguation") {
            const W = E.extractHtml ? oi(b, E, U, Ee) : (
              // fallback message when no extract is found on disambiguation page
              Ec(
                U,
                b,
                E.title,
                E.dir,
                Ee
              )
            );
            d.show(
              W,
              T,
              $
            ), Ze(t, "onShow", [h, b, "disambiguation"]);
          }
        } else if (ua())
          d.show(
            Ac(U, b, h, I, Ee),
            T,
            $
          ), Ze(t, "onShow", [h, b, "error"]);
        else {
          d.show(
            zc(U, b, I, Ee),
            T,
            $
          ), Ze(t, "onShow", [h, b, "offline"]);
          const W = document.querySelector(".wikipediapreview-body-action");
          _.lang = b, _.title = h, _.pointerPosition = $, _.target = T, W.addEventListener("click", (z) => {
            u(z, !0);
          });
        }
        const P = d.element.querySelector(".wikipediapreview-footer-cta-readonwiki, .wikipediapreview-cta-readonwiki");
        if (P && P.addEventListener("click", () => {
          Ze(t, "onWikiRead", [h, b]);
        }), T.tagName === "A") {
          const W = nr().split("="), z = new URL(T.href);
          z.searchParams.set(W[0], W[1]), T.href = z.href;
        }
      }
    }));
  };
  d.subscribe(p), na(e, (y) => {
    Array.prototype.forEach.call(
      y.querySelectorAll(r),
      (f) => {
        U ? f.addEventListener("click", u) : f.addEventListener("mouseenter", u), k.push({
          text: f.textContent,
          title: f.getAttribute("data-wp-title") || f.textContent,
          lang: f.getAttribute("data-wp-lang") || c
        });
      }
    );
  }), a && na(e, (y) => {
    Array.prototype.forEach.call(
      y.querySelectorAll("a"),
      (f) => {
        const S = _n(f.getAttribute("href"));
        S && (f.setAttribute("data-wp-title", S.title), f.setAttribute("data-wp-lang", S.lang), U ? f.addEventListener("click", u) : f.addEventListener("mouseenter", u), g.push({
          text: f.textContent,
          title: S.title,
          lang: S.lang
        }));
      }
    );
  }), l && (console.group("Wikipedia Preview [debug mode]"), console.group(`Searching for "${r}" inside ${e}, Total links found: ${k.length}`), k.forEach((y, f) => {
    console.log(f + 1, `${y.text} -> ${decodeURI(br(y.lang, y.title, U, !1))}`);
  }), console.groupEnd(), a && (console.group(`Searching for links to Wikipedia, Total links found: ${g.length}`), g.forEach((y, f) => {
    console.log(f + 1, `${y.text} -> ${decodeURI(br(y.lang, y.title, U, !1))}`);
  }), console.groupEnd()), console.groupEnd());
}
pa();
const Lc = { init: Mc, version: pa, getPreviewHtml: xc, getSections: _a };
export {
  Lc as default
};
//# sourceMappingURL=wikipedia-preview.js.map
