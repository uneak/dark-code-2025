!function(e) {
    function t(o) {
        if (n[o])
            return n[o].exports;
        var r = n[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(r.exports, r, r.exports, t),
        r.l = !0,
        r.exports
    }
    var n = {};
    t.m = e,
    t.c = n,
    t.d = function(e, n, o) {
        t.o(e, n) || Object.defineProperty(e, n, {
            enumerable: !0,
            get: o
        })
    }
    ,
    t.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    t.t = function(e, n) {
        if (1 & n && (e = t(e)),
        8 & n)
            return e;
        if (4 & n && "object" == typeof e && e && e.__esModule)
            return e;
        var o = Object.create(null);
        if (t.r(o),
        Object.defineProperty(o, "default", {
            enumerable: !0,
            value: e
        }),
        2 & n && "string" != typeof e)
            for (var r in e)
                t.d(o, r, function(t) {
                    return e[t]
                }
                .bind(null, r));
        return o
    }
    ,
    t.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return t.d(n, "a", n),
        n
    }
    ,
    t.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    t.p = "/",
    t(t.s = 1)
}({
    "+w0D": function(e, t, n) {
        "use strict";
        function o(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, o)
            }
            return n
        }
        function r(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? o(Object(n), !0).forEach((function(t) {
                    a(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function a(e, t, n) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" != typeof e || !e)
                        return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var o = n.call(e, t || "default");
                        if ("object" != typeof o)
                            return o;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" == typeof t ? t : t + ""
            }(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function i(e, t) {
            return (i = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        n.d(t, "a", (function() {
            return d
        }
        ));
        var s = n("2mXy")
          , c = n("FdF9")
          , l = n("j9y7")
          , u = (n("pmfO"),
        n("3/o8"))
          , p = n("o1E3")
          , d = function(e) {
            function t() {
                return e.apply(this, arguments) || this
            }
            var n, o;
            return o = e,
            (n = t).prototype = Object.create(o.prototype),
            n.prototype.constructor = n,
            i(n, o),
            t.prototype.render = function() {
                var e = this
                  , t = this.props
                  , n = t.dev
                  , o = t.language
                  , a = t.vendors
                  , i = t.toggleCategory
                  , c = t.toggleStack
                  , d = t.isFirstLayer
                  , g = t.neutralPm
                  , f = t.isGlobalCmp
                  , h = t.createPrivacyPolicyDiv
                  , b = t.createIdentificationListDiv
                  , m = t.convertToRem
                  , v = r({}, this.props.pmData) || {};
                if (!f && d && v.categories) {
                    var y = v.categories.filter((function(e) {
                        return "SYSTEM_PURPOSE" === e.type && e.systemId > 3
                    }
                    ));
                    v.categories = y
                }
                if (v.categories && !v.categories.length)
                    return Object(s.h)("div", {
                        className: "no-cats-messagee"
                    }, "No categories to display");
                var O = r({}, this.props.settings)
                  , j = Object(p.x)(Boolean(n), O, "toggleText", o)
                  , C = Object(p.x)(Boolean(n), O, "toggleOffText", o)
                  , x = v.stacks && v.stacks.reduce((function(e, t) {
                    return e.concat(t.childCategories)
                }
                ), [])
                  , w = v.categories && v.categories.filter((function(e) {
                    return !x.includes(e._id)
                }
                )).filter((function(e) {
                    return !e.hide
                }
                ))
                  , k = r({}, O.descriptionSpacing, {}, O.descriptionFont)
                  , P = r({}, O.categoryNameSpacing)
                  , _ = r({}, O.categoryNameFont)
                  , L = r({}, O.stackCategoriesSpacing, {}, O.stackCategoriesFont)
                  , T = m ? Object(p.c)(k) : k
                  , S = m ? Object(p.c)(_) : _
                  , N = m ? Object(p.c)(L) : L
                  , I = {};
                I.minHeight = "auto" === O.minHeight.type ? "auto" : O.minHeight.value + O.minHeight.type,
                I.maxHeight = "auto" === O.maxHeight.type ? "auto" : O.maxHeight.value + O.maxHeight.type;
                var A = {
                    borderBottomColor: O.borderColor
                };
                return Object(s.h)("div", {
                    className: "categories-container"
                }, v.stacks && v.stacks.length > 0 && v.stacks.map((function(t) {
                    return Object(s.h)("div", {
                        className: "category-container stacks",
                        style: A
                    }, Object(s.h)("div", {
                        className: "description",
                        style: T
                    }, t.description || ""), Object(s.h)("ul", {
                        className: "stack-categories",
                        style: I
                    }, t.childCategories.map((function(e) {
                        var t = v.categories.find((function(t) {
                            return t._id === e
                        }
                        ));
                        return Object(s.h)("li", {
                            className: "stack-category",
                            style: N
                        }, t.name)
                    }
                    ))), Object(s.h)("div", {
                        className: "switch-container",
                        style: P
                    }, Object(s.h)("div", {
                        className: "name",
                        style: S
                    }, t.name), !d && (g ? Object(s.h)(l.a, {
                        settings: O,
                        toggleCategory: i,
                        toggleStack: c,
                        vendors: a,
                        value: t,
                        child: "stack",
                        dev: n,
                        language: o
                    }) : Object(s.h)(u.a, {
                        value: t,
                        checked: t.isNegative ? !t.enabled : t.enabled,
                        type: O.toggleType,
                        color: O.toggleColor,
                        colorActive: O.toggleActiveColor,
                        offColor: O.toggleOffColor,
                        offActiveColor: O.toggleOffActiveColor,
                        text: j,
                        offText: C,
                        toggle: c,
                        neutralPm: g,
                        child: "stack",
                        convertToRem: m
                    }))), t.privacyPolicySectionLink ? e.createPrivacyPolicyDiv(t) : null)
                }
                )), w && w.length > 0 && w.map((function(e, t) {
                    return Object(s.h)("div", {
                        className: "category-container"
                    }, Object(s.h)("div", {
                        className: "description",
                        style: T
                    }, e.description), Object(s.h)("div", {
                        className: "switch-container",
                        style: P
                    }, Object(s.h)("div", {
                        className: "name",
                        style: S
                    }, e.name), !d && !e.disclosureOnly && (g ? Object(s.h)(l.a, {
                        settings: O,
                        toggleCategory: i,
                        toggleStack: c,
                        vendors: a,
                        value: e,
                        enabled: e.isNegative ? !e.enabled : e.enabled,
                        child: "category",
                        dev: n,
                        language: o
                    }) : Object(s.h)(u.a, {
                        value: e,
                        checked: e.isNegative ? !e.enabled : e.enabled,
                        type: O.toggleType,
                        color: O.toggleColor,
                        colorActive: O.toggleActiveColor,
                        offColor: O.toggleOffColor,
                        offActiveColor: O.toggleOffActiveColor,
                        text: j,
                        offText: C,
                        toggle: i,
                        child: "category",
                        vendors: e.vendors || [],
                        convertToRem: m
                    }))), e.privacyPolicySectionLink ? h(e) : null, e.identificationList ? b(w, t) : null)
                }
                )))
            }
            ,
            t
        }(c.Component)
    },
    0: function() {},
    "0I1l": function(e, t, n) {
        "use strict";
        function o(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, o)
            }
            return n
        }
        function r(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? o(Object(n), !0).forEach((function(t) {
                    a(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function a(e, t, n) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" != typeof e || !e)
                        return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var o = n.call(e, t || "default");
                        if ("object" != typeof o)
                            return o;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" == typeof t ? t : t + ""
            }(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function i(e, t) {
            return (i = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        n.d(t, "a", (function() {
            return f
        }
        ));
        var s = n("2mXy")
          , c = n("FdF9")
          , l = n("j9y7")
          , u = (n("pmfO"),
        n("3/o8"))
          , p = n("YkAe")
          , d = n("o1E3")
          , g = n("cS3K")
          , f = function(e) {
            function t() {
                return e.apply(this, arguments) || this
            }
            var n, o;
            return o = e,
            (n = t).prototype = Object.create(o.prototype),
            n.prototype.constructor = n,
            i(n, o),
            t.prototype.render = function() {
                var e = this
                  , t = this.props
                  , n = t.dev
                  , o = t.language
                  , a = t.vendors
                  , i = t.toggleCategory
                  , c = t.toggleStack
                  , f = t.isFirstLayer
                  , h = t.neutralPm
                  , b = t.isGlobalCmp
                  , m = t.settings
                  , v = t.createIdentificationListDivForEachCat
                  , y = t.createPrivacyPolicyDiv
                  , O = t.convertToRem
                  , j = r({}, this.props.pmData) || {};
                if (!b && f && j.categories) {
                    var C = j.categories.filter((function(e) {
                        return "SYSTEM_PURPOSE" === e.type && e.systemId > 3
                    }
                    ));
                    j.categories = C
                }
                if (j.categories && !j.categories.length)
                    return Object(s.h)("div", {
                        className: "no-cats-messagee"
                    }, "No categories to display");
                var x = r({}, this.props.settings)
                  , w = Object(d.x)(Boolean(n), x, "toggleText", o)
                  , k = Object(d.x)(Boolean(n), x, "toggleOffText", o)
                  , P = j.stacks && j.stacks.reduce((function(e, t) {
                    return e.concat(t.childCategories)
                }
                ), [])
                  , _ = j.categories && j.categories.filter((function(e) {
                    return !P.includes(e._id)
                }
                )).filter((function(e) {
                    return !e.hide
                }
                ))
                  , L = r({}, x.descriptionSpacing, {}, x.descriptionFont)
                  , T = r({}, x.categoryNameSpacing)
                  , S = r({}, x.categoryNameFont)
                  , N = r({}, x.stackCategoriesSpacing, {}, x.stackCategoriesFont)
                  , I = O ? Object(d.c)(L) : L
                  , A = O ? Object(d.c)(S) : S
                  , B = O ? Object(d.c)(N) : N
                  , D = {};
                D.minHeight = "auto" === x.minHeight.type ? "auto" : x.minHeight.value + x.minHeight.type,
                D.maxHeight = "auto" === x.maxHeight.type ? "auto" : x.maxHeight.value + x.maxHeight.type;
                var E = {
                    borderBottomColor: x.borderColor
                };
                return Object(s.h)("div", {
                    className: "categories-container"
                }, j.stacks && j.stacks.length > 0 && j.stacks.map((function(t) {
                    return Object(s.h)("div", {
                        className: "category-container",
                        style: E
                    }, Object(s.h)("div", {
                        className: "description",
                        style: I
                    }, t.description || ""), Object(s.h)("ul", {
                        className: "stack-categories",
                        style: D
                    }, t.childCategories.map((function(e) {
                        var t = j.categories.find((function(t) {
                            return t._id === e
                        }
                        ));
                        return Object(s.h)("li", {
                            className: "stack-category",
                            style: B
                        }, t.name)
                    }
                    ))), Object(s.h)("div", {
                        className: "switch-container",
                        style: T
                    }, Object(s.h)("div", {
                        className: "name",
                        style: A
                    }, t.name), !f && (h ? Object(s.h)(l.a, {
                        settings: x,
                        toggleCategory: i,
                        toggleStack: c,
                        vendors: a,
                        value: t,
                        child: "stack",
                        dev: n,
                        language: o
                    }) : Object(s.h)(u.a, {
                        value: t,
                        checked: t.isNegative ? !t.enabled : t.enabled,
                        type: x.toggleType,
                        color: x.toggleColor,
                        colorActive: x.toggleActiveColor,
                        offColor: x.toggleOffColor,
                        offActiveColor: x.toggleOffActiveColor,
                        text: w,
                        offText: k,
                        toggleCategory: i,
                        toggleStack: c,
                        neutralPm: h,
                        child: "stack",
                        convertToRem: O
                    }))), t.privacyPolicySectionLink ? e.createPrivacyPolicyDiv(t) : null)
                }
                )), _ && _.length > 0 && _.map((function(t) {
                    return Object(s.h)(p.a, {
                        key: "category-" + t._id,
                        settings: m,
                        name: Object(s.h)("div", {
                            style: A
                        }, t.name),
                        accessName: t.name,
                        description: t.description,
                        child: "category",
                        language: o,
                        value: t,
                        vendors: t.vendors,
                        content: Object(s.h)(g.a, {
                            category: t,
                            language: o,
                            settings: m,
                            force: e.force,
                            dev: n,
                            vendors: a,
                            createIdentificationListDivForEachCat: v,
                            createPrivacyPolicyDiv: y,
                            convertToRem: O
                        }),
                        toggle: e.props.toggleCategory,
                        updateMe: e.state.forceUpdate,
                        dev: n,
                        isFirstLayer: f,
                        disclosureOnly: t.disclosureOnly,
                        neutralPm: h,
                        convertToRem: O
                    })
                }
                )))
            }
            ,
            t
        }(c.Component)
    },
    "0d0D": function(e, t, n) {
        "use strict";
        function o() {
            return (o = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n)
                        ({}).hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            }
            ).apply(null, arguments)
        }
        function r() {
            return (r = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n)
                        ({}).hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            }
            ).apply(null, arguments)
        }
        function a(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, o)
            }
            return n
        }
        function i(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? a(Object(n), !0).forEach((function(t) {
                    s(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function s(e, t, n) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" != typeof e || !e)
                        return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var o = n.call(e, t || "default");
                        if ("object" != typeof o)
                            return o;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" == typeof t ? t : t + ""
            }(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function c(e, t) {
            return (c = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        var l = n("2mXy")
          , u = n("FdF9")
          , p = function(e) {
            void 0 === e && (e = {}),
            o(this, {
                text: "Button",
                width: {
                    type: "auto",
                    value: 1
                },
                padding: {
                    paddingLeft: 15,
                    paddingRight: 15,
                    paddingTop: 10,
                    paddingBottom: 10
                },
                margin: {
                    marginLeft: 10,
                    marginRight: 10,
                    marginTop: 10,
                    marginBottom: 10
                },
                font: {
                    fontSize: 14,
                    fontWeight: "400",
                    color: "#ffffff",
                    fontFamily: "arial, helvetica, sans-serif"
                },
                background: "#1890ff",
                border: {
                    borderWidth: 0,
                    borderColor: "#000000",
                    borderTopLeftRadius: 5,
                    borderTopRightRadius: 5,
                    borderBottomLeftRadius: 5,
                    borderBottomRightRadius: 5,
                    borderStyle: "solid"
                },
                languages: {},
                selectedLanguage: "",
                startFocus: !1,
                action_type: "SHOW_ATT_MSG"
            }),
            o(this, e)
        }
          , d = n("o1E3")
          , g = n("YSmr");
        n("DBc/");
        n.d(t, "a", (function() {
            return f
        }
        ));
        var f = function(e) {
            function t() {
                for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++)
                    o[r] = arguments[r];
                return (t = e.call.apply(e, [this].concat(o)) || this).makeChoice = function(e, n) {
                    var o = t.props.language;
                    t.props.makeChoice(g.o[e], Object(d.v)(o, n, "text"))
                }
                ,
                t
            }
            var n, o;
            return o = e,
            (n = t).prototype = Object.create(o.prototype),
            n.prototype.constructor = n,
            c(n, o),
            t.prototype.render = function() {
                var e = this
                  , t = new p(this.props.component.settings)
                  , n = this.props
                  , o = n.language
                  , a = n.dev
                  , s = i({}, t.padding, {}, t.margin, {}, t.border, {}, t.font)
                  , c = t.padding
                  , u = c.paddingLeft
                  , g = c.paddingRight
                  , f = t.margin
                  , h = f.marginLeft
                  , b = f.marginRight;
                s.width = "auto" === t.width.type ? "auto" : t.width.value + t.width.type,
                "%" === t.width.type && (s.width = "calc(" + t.width.value + "% - " + (u + g + h + b) + "px"),
                s.background = t.background;
                var m = {}
                  , v = !1
                  , y = JSON.stringify(this.props.path);
                a && (m = i({}, a.hover),
                v = a.current === y);
                var O = "message-component message-button no-children focusable" + this.props.className
                  , j = Object(d.x)(a, t, "text", o);
                return Object(l.h)("button", r({
                    tabIndex: t.startFocus ? 1 : 0,
                    title: j,
                    "aria-label": j,
                    onClick: function() {
                        return e.makeChoice(t.action_type, t)
                    },
                    onKeyDown: function(n) {
                        return Object(d.s)(n.key) && e.makeChoice(t.action_type)
                    },
                    className: v ? O + " on-active" : O,
                    path: a ? y : null,
                    style: s
                }, m), j)
            }
            ,
            t
        }(u.Component)
    },
    1: function(e, t, n) {
        n("zS2S"),
        e.exports = n("Cwyy")
    },
    "1mLn": function(e, t, n) {
        "use strict";
        function o(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, o)
            }
            return n
        }
        function r(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? o(Object(n), !0).forEach((function(t) {
                    a(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function a(e, t, n) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" != typeof e || !e)
                        return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var o = n.call(e, t || "default");
                        if ("object" != typeof o)
                            return o;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" == typeof t ? t : t + ""
            }(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function i(e, t) {
            return (i = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function s() {
            return (s = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n)
                        ({}).hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            }
            ).apply(null, arguments)
        }
        function c() {
            return (c = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n)
                        ({}).hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            }
            ).apply(null, arguments)
        }
        function l(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, o)
            }
            return n
        }
        function u(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? l(Object(n), !0).forEach((function(t) {
                    p(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function p(e, t, n) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" != typeof e || !e)
                        return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var o = n.call(e, t || "default");
                        if ("object" != typeof o)
                            return o;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" == typeof t ? t : t + ""
            }(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function d(e, t) {
            return (d = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        var g = n("2mXy")
          , f = n("FdF9")
          , h = n("KOA+")
          , b = n("o1E3")
          , m = (n("5QLj"),
        function(e) {
            function t() {
                for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++)
                    o[r] = arguments[r];
                return (t = e.call.apply(e, [this].concat(o)) || this).state = {
                    open: !1
                },
                t.toggleAccordion = function() {
                    t.setState({
                        open: !t.state.open
                    })
                }
                ,
                t
            }
            var n, o;
            return o = e,
            (n = t).prototype = Object.create(o.prototype),
            n.prototype.constructor = n,
            i(n, o),
            t.prototype.render = function() {
                var e = this.props
                  , t = e.stack
                  , n = e.loading
                  , o = this.state.open
                  , a = "CUSTOM" === t.type ? Object(g.h)("p", {
                    style: r({}, this.props.panelStyles),
                    dangerouslySetInnerHTML: {
                        __html: Object(h.a)({
                            html: t.description
                        })
                    }
                }) : Object(g.h)("p", {
                    style: r({}, this.props.panelStyles)
                }, Object(b.h)(t.description));
                return Object(g.h)("div", {
                    className: "stack"
                }, Object(g.h)("button", {
                    tabIndex: "0",
                    className: o ? "accordion active focusable" : "accordion focusable",
                    style: this.props.accordionStyles,
                    "aria-expanded": o ? "true" : "false",
                    "aria-label": t.name,
                    onClick: n ? null : this.toggleAccordion
                }, t.name, n ? null : Object(g.h)("span", {
                    className: o ? "chevron up" : "chevron down"
                })), Object(g.h)("div", {
                    tabindex: "0",
                    style: {
                        display: o ? "block" : "none"
                    },
                    className: "panel",
                    "aria-hidden": o ? "false" : "true"
                }, a))
            }
            ,
            t
        }(f.Component))
          , v = function(e) {
            void 0 === e && (e = {}),
            s(this, {
                accordionsSpacing: {
                    paddingLeft: 20,
                    paddingRight: 20,
                    paddingTop: 20,
                    paddingBottom: 20
                },
                accordionsFont: {
                    fontSize: 14,
                    fontWeight: "600",
                    color: "#000000",
                    fontFamily: "arial, helvetica, sans-serif"
                },
                panelSpacing: {
                    paddingLeft: 20,
                    paddingRight: 20,
                    paddingTop: 20,
                    paddingBottom: 20
                },
                panelFont: {
                    fontSize: 13,
                    fontWeight: "400",
                    color: "#555555",
                    fontFamily: "arial, helvetica, sans-serif"
                },
                minHeight: {
                    type: "auto",
                    value: 1
                },
                maxHeight: {
                    type: "px",
                    value: 400
                }
            }),
            s(this, e)
        };
        n.d(t, "a", (function() {
            return O
        }
        ));
        var y = [{
            name: "Category Name",
            description: "Custom category #1 description",
            type: "CUSTOM"
        }, {
            name: "Stack Name",
            description: "Custom stack description",
            type: "CUSTOM_STACK"
        }, {
            name: "IAB Purpose",
            description: "IAB purpose description",
            type: "IAB_PURPOSE"
        }, {
            name: "IAB Stack",
            description: "IAB stack description",
            type: "IAB_STACK"
        }]
          , O = function(e) {
            function t() {
                for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++)
                    o[r] = arguments[r];
                return (t = e.call.apply(e, [this].concat(o)) || this).state = {
                    stacks: [{
                        name: "Loading...",
                        description: "",
                        type: ""
                    }],
                    loading: !0
                },
                t.componentDidMount = function() {
                    t.loadStacks(t.props.previewLanguage || t.props.language)
                }
                ,
                t.componentDidUpdate = function(e) {
                    var n = t.props
                      , o = n.stacksData
                      , r = n.language
                      , a = n.previewLanguage
                      , i = r;
                    o && t.state.stacks === y && !n.refetchStacks && t.setState({
                        stacks: o
                    }),
                    r === e.language && a === e.previewLanguage || (t.props.dev && a !== e.previewLanguage && (i = a),
                    t.loadStacks(i))
                }
                ,
                t.loadStacks = function(e) {
                    var n = t.props
                      , o = n.siteId
                      , r = n.preloadMsg
                      , a = n.setVendorCount;
                    if (o && !r || o && n.refetchStacks || !n.stacksData && r) {
                        var i = e || n.language;
                        fetch(n.cmpv2Origin + "/vendor-list/categories?siteId=" + o + (i ? "&consentLanguage=" + i.toLowerCase() : ""), {
                            insecure: !0
                        }).then((function(e) {
                            return e.json()
                        }
                        )).then((function(e) {
                            try {
                                t.setState({
                                    stacks: e.categories || y,
                                    loading: !1
                                }),
                                a(e.allVendorCount, e.iabVendorCount)
                            } catch (e) {
                                t.defaultStacks()
                            }
                        }
                        ))
                    } else
                        t.defaultStacks()
                }
                ,
                t.defaultStacks = function() {
                    t.setState({
                        stacks: y,
                        loading: !1
                    })
                }
                ,
                t
            }
            var n, o;
            return o = e,
            (n = t).prototype = Object.create(o.prototype),
            n.prototype.constructor = n,
            d(n, o),
            t.prototype.render = function() {
                var e = this
                  , t = new v(this.props.component.settings)
                  , n = u({}, t.accordionsSpacing, {}, t.accordionsFont)
                  , o = u({}, t.panelSpacing, {}, t.panelFont)
                  , r = {};
                r.minHeight = "auto" === t.minHeight.type ? "auto" : t.minHeight.value + t.minHeight.type,
                r.maxHeight = "auto" === t.maxHeight.type ? "auto" : t.maxHeight.value + t.maxHeight.type;
                var a = {}
                  , i = !1
                  , s = JSON.stringify(this.props.path);
                this.props.dev && (a = u({}, this.props.dev.hover),
                i = this.props.dev.current === s);
                var l = "message-component message-stacks no-children" + this.props.className;
                return Object(g.h)("div", c({
                    className: i ? l + " on-active" : l,
                    path: this.props.dev ? s : null
                }, a), Object(g.h)("div", {
                    className: "stack-container",
                    style: r
                }, this.state.stacks.map((function(t, r) {
                    return Object(g.h)(m, {
                        key: "stack-" + r,
                        stack: t,
                        panelStyles: o,
                        accordionStyles: n,
                        dev: e.props.dev,
                        loading: e.state.loading
                    })
                }
                ))))
            }
            ,
            t
        }(f.Component)
    },
    "2EdD": function(e, t, n) {
        "use strict";
        function o() {
            return (o = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n)
                        ({}).hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            }
            ).apply(null, arguments)
        }
        function r(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, o)
            }
            return n
        }
        function a(e, t, n) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" != typeof e || !e)
                        return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var o = n.call(e, t || "default");
                        if ("object" != typeof o)
                            return o;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" == typeof t ? t : t + ""
            }(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        n.d(t, "a", (function() {
            return u
        }
        ));
        var i = n("2mXy")
          , s = (n("FdF9"),
        n("eLgm"))
          , c = n("Asb/")
          , l = n("5oGf")
          , u = (n("wl5O"),
        function(e) {
            var t = e.component
              , n = e.path
              , u = e.dev
              , p = e.className
              , d = e.siteId
              , g = e.message
              , f = e.makeChoice
              , h = e.language
              , b = e.events
              , m = e.preloadMsg
              , v = e.stacksData
              , y = e.updateStacks
              , O = e.consentUUID
              , j = e.allSelectionsMade
              , C = e.shown
              , x = e.setVendorCount
              , w = e.vendorCount
              , k = new s.a(t.settings)
              , P = Object(l.c)(n, u)
              , _ = P.devActions
              , L = P.devClass
              , T = P.pathString
              , S = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? r(Object(n), !0).forEach((function(t) {
                        a(e, t, n[t])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }({}, k.padding, {}, k.margin, {}, k.border);
            u && (0 === t.children.length && (S.minHeight = "24px"),
            u.opts.hideRowColumnBorders || (L += " on-dev"));
            var N = k.padding
              , I = N.paddingTop
              , A = N.paddingBottom
              , B = k.margin
              , D = B.marginTop
              , E = B.marginBottom;
            return S.width = "auto" === k.width.type ? "auto" : k.width.value + k.width.type,
            S.height = "auto" === k.height.type ? "auto" : k.height.value + k.height.type,
            "%" === k.height.type && (S.height = "calc(" + k.height.value + "% - " + (I + A + D + E) + "px"),
            S.background = k.background,
            S.alignItems = k.align,
            S.justifyContent = k.vertical,
            Object(i.h)("div", o({
                style: S,
                className: "message-component message-column" + L + p,
                path: u ? T : null
            }, _), Object(i.h)(c.a, o({}, e, {
                path: n,
                dev: u,
                components: t.children,
                siteId: d,
                message: g,
                makeChoice: f,
                language: h,
                events: b,
                preloadMsg: m,
                stacksData: v,
                updateStacks: y,
                consentUUID: O,
                width: null,
                allSelectionsMade: j,
                shown: C,
                setVendorCount: x,
                vendorCount: w
            })))
        }
        )
    },
    "2mXy": function(e, t, n) {
        "use strict";
        function o(e, t) {
            for (var n in t)
                e[n] = t[n];
            return e
        }
        function r(e) {
            var t = e.parentNode;
            t && t.removeChild(e)
        }
        function a(e, t, n) {
            var r, a, s, c, l = arguments;
            if (t = o({}, t),
            arguments.length > 3)
                for (n = [n],
                r = 3; r < arguments.length; r++)
                    n.push(l[r]);
            if (null != n && (t.children = n),
            null != e && null != e.defaultProps)
                for (a in e.defaultProps)
                    void 0 === t[a] && (t[a] = e.defaultProps[a]);
            return c = t.key,
            null != (s = t.ref) && delete t.ref,
            null != c && delete t.key,
            i(e, t, c, s)
        }
        function i(e, t, n, o) {
            var r = {
                type: e,
                props: t,
                key: n,
                ref: o,
                __k: null,
                __: null,
                __b: 0,
                __e: null,
                __d: null,
                __c: null,
                constructor: void 0
            };
            return T.vnode && T.vnode(r),
            r
        }
        function s() {
            return {}
        }
        function c(e) {
            return e.children
        }
        function l(e, t) {
            this.props = e,
            this.context = t
        }
        function u(e, t) {
            if (null == t)
                return e.__ ? u(e.__, e.__.__k.indexOf(e) + 1) : null;
            for (var n; t < e.__k.length; t++)
                if (null != (n = e.__k[t]) && null != n.__e)
                    return n.__e;
            return "function" == typeof e.type ? u(e) : null
        }
        function p(e) {
            var t, n;
            if (null != (e = e.__) && null != e.__c) {
                for (e.__e = e.__c.base = null,
                t = 0; t < e.__k.length; t++)
                    if (null != (n = e.__k[t]) && null != n.__e) {
                        e.__e = e.__c.base = n.__e;
                        break
                    }
                return p(e)
            }
        }
        function d(e) {
            (!e.__d && (e.__d = !0) && 1 === N.push(e) || A !== T.debounceRendering) && ((A = T.debounceRendering) || I)(g)
        }
        function g() {
            var e, t, n, r, a, i, s;
            for (N.sort((function(e, t) {
                return t.__v.__b - e.__v.__b
            }
            )); e = N.pop(); )
                e.__d && (n = void 0,
                r = void 0,
                i = (a = (t = e).__v).__e,
                (s = t.__P) && (n = [],
                r = y(s, a, o({}, a), t.__n, void 0 !== s.ownerSVGElement, null, n, null == i ? u(a) : i),
                O(n, a),
                r != i && p(a)))
        }
        function f(e, t, n, o, a, i, s, c, l) {
            var p, d, g, f, b, m, v, O = n && n.__k || F, j = O.length;
            if (c == E && (c = null != i ? i[0] : j ? u(n, 0) : null),
            p = 0,
            t.__k = h(t.__k, (function(n) {
                if (null != n) {
                    if (n.__ = t,
                    n.__b = t.__b + 1,
                    null === (g = O[p]) || g && n.key == g.key && n.type === g.type)
                        O[p] = void 0;
                    else
                        for (d = 0; d < j; d++) {
                            if ((g = O[d]) && n.key == g.key && n.type === g.type) {
                                O[d] = void 0;
                                break
                            }
                            g = null
                        }
                    if (f = y(e, n, g = g || E, o, a, i, s, c, l),
                    (d = n.ref) && g.ref != d && (v || (v = []),
                    g.ref && v.push(g.ref, null, n),
                    v.push(d, n.__c || f, n)),
                    null != f) {
                        if (null == m && (m = f),
                        null != n.__d)
                            f = n.__d,
                            n.__d = null;
                        else if (i == g || f != c || null == f.parentNode) {
                            e: if (null == c || c.parentNode !== e)
                                e.appendChild(f);
                            else {
                                for (b = c,
                                d = 0; (b = b.nextSibling) && d < j; d += 2)
                                    if (b == f)
                                        break e;
                                e.insertBefore(f, c)
                            }
                            "option" == t.type && (e.value = "")
                        }
                        c = f.nextSibling,
                        "function" == typeof t.type && (t.__d = f)
                    }
                }
                return p++,
                n
            }
            )),
            t.__e = m,
            null != i && "function" != typeof t.type)
                for (p = i.length; p--; )
                    null != i[p] && r(i[p]);
            for (p = j; p--; )
                null != O[p] && x(O[p], O[p]);
            if (v)
                for (p = 0; p < v.length; p++)
                    C(v[p], v[++p], v[++p])
        }
        function h(e, t, n) {
            if (null == n && (n = []),
            null == e || "boolean" == typeof e)
                t && n.push(t(null));
            else if (Array.isArray(e))
                for (var o = 0; o < e.length; o++)
                    h(e[o], t, n);
            else
                n.push(t ? t("string" == typeof e || "number" == typeof e ? i(null, e, null, null) : null != e.__e || null != e.__c ? i(e.type, e.props, e.key, null) : e) : e);
            return n
        }
        function b(e, t, n) {
            "-" === t[0] ? e.setProperty(t, n) : e[t] = "number" == typeof n && !1 === V.test(t) ? n + "px" : null == n ? "" : n
        }
        function m(e, t, n, o, r) {
            var a, i, s, c, l;
            if (r ? "className" === t && (t = "class") : "class" === t && (t = "className"),
            "key" === t || "children" === t)
                ;
            else if ("style" === t)
                if (a = e.style,
                "string" == typeof n)
                    a.cssText = n;
                else {
                    if ("string" == typeof o && (a.cssText = "",
                    o = null),
                    o)
                        for (i in o)
                            n && i in n || b(a, i, "");
                    if (n)
                        for (s in n)
                            o && n[s] === o[s] || b(a, s, n[s])
                }
            else
                "o" === t[0] && "n" === t[1] ? (c = t !== (t = t.replace(/Capture$/, "")),
                l = t.toLowerCase(),
                t = (l in e ? l : t).slice(2),
                n ? (o || e.addEventListener(t, v, c),
                (e.l || (e.l = {}))[t] = n) : e.removeEventListener(t, v, c)) : "list" !== t && "tagName" !== t && "form" !== t && !r && t in e ? e[t] = null == n ? "" : n : "function" != typeof n && "dangerouslySetInnerHTML" !== t && (t !== (t = t.replace(/^xlink:?/, "")) ? null == n || !1 === n ? e.removeAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase()) : e.setAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase(), n) : null == n || !1 === n ? e.removeAttribute(t) : e.setAttribute(t, n))
        }
        function v(e) {
            this.l[e.type](T.event ? T.event(e) : e)
        }
        function y(e, t, n, r, a, i, s, u, p) {
            var d, g, b, m, v, y, O, C, x, k, P = t.type;
            if (void 0 !== t.constructor)
                return null;
            (d = T.__b) && d(t);
            try {
                e: if ("function" == typeof P) {
                    if (C = t.props,
                    x = (d = P.contextType) && r[d.__c],
                    k = d ? x ? x.props.value : d.__ : r,
                    n.__c ? O = (g = t.__c = n.__c).__ = g.__E : ("prototype"in P && P.prototype.render ? t.__c = g = new P(C,k) : (t.__c = g = new l(C,k),
                    g.constructor = P,
                    g.render = w),
                    x && x.sub(g),
                    g.props = C,
                    g.state || (g.state = {}),
                    g.context = k,
                    g.__n = r,
                    b = g.__d = !0,
                    g.__h = []),
                    null == g.__s && (g.__s = g.state),
                    null != P.getDerivedStateFromProps && (g.__s == g.state && (g.__s = o({}, g.__s)),
                    o(g.__s, P.getDerivedStateFromProps(C, g.__s))),
                    m = g.props,
                    v = g.state,
                    b)
                        null == P.getDerivedStateFromProps && null != g.componentWillMount && g.componentWillMount(),
                        null != g.componentDidMount && g.__h.push(g.componentDidMount);
                    else {
                        if (null == P.getDerivedStateFromProps && null == g.__e && null != g.componentWillReceiveProps && g.componentWillReceiveProps(C, k),
                        !g.__e && null != g.shouldComponentUpdate && !1 === g.shouldComponentUpdate(C, g.__s, k)) {
                            for (g.props = C,
                            g.state = g.__s,
                            g.__d = !1,
                            g.__v = t,
                            t.__e = n.__e,
                            t.__k = n.__k,
                            g.__h.length && s.push(g),
                            d = 0; d < t.__k.length; d++)
                                t.__k[d] && (t.__k[d].__ = t);
                            break e
                        }
                        null != g.componentWillUpdate && g.componentWillUpdate(C, g.__s, k),
                        null != g.componentDidUpdate && g.__h.push((function() {
                            g.componentDidUpdate(m, v, y)
                        }
                        ))
                    }
                    g.context = k,
                    g.props = C,
                    g.state = g.__s,
                    (d = T.__r) && d(t),
                    g.__d = !1,
                    g.__v = t,
                    g.__P = e,
                    d = g.render(g.props, g.state, g.context),
                    t.__k = h(null != d && d.type == c && null == d.key ? d.props.children : d),
                    null != g.getChildContext && (r = o(o({}, r), g.getChildContext())),
                    b || null == g.getSnapshotBeforeUpdate || (y = g.getSnapshotBeforeUpdate(m, v)),
                    f(e, t, n, r, a, i, s, u, p),
                    g.base = t.__e,
                    g.__h.length && s.push(g),
                    O && (g.__E = g.__ = null),
                    g.__e = null
                } else
                    t.__e = j(n.__e, t, n, r, a, i, s, p);
                (d = T.diffed) && d(t)
            } catch (e) {
                T.__e(e, t, n)
            }
            return t.__e
        }
        function O(e, t) {
            T.__c && T.__c(t, e),
            e.some((function(t) {
                try {
                    e = t.__h,
                    t.__h = [],
                    e.some((function(e) {
                        e.call(t)
                    }
                    ))
                } catch (e) {
                    T.__e(e, t.__v)
                }
            }
            ))
        }
        function j(e, t, n, o, r, a, i, s) {
            var c, l, u, p, d, g = n.props, h = t.props;
            if (r = "svg" === t.type || r,
            null == e && null != a)
                for (c = 0; c < a.length; c++)
                    if (null != (l = a[c]) && (null === t.type ? 3 === l.nodeType : l.localName === t.type)) {
                        e = l,
                        a[c] = null;
                        break
                    }
            if (null == e) {
                if (null === t.type)
                    return document.createTextNode(h);
                e = r ? document.createElementNS("http://www.w3.org/2000/svg", t.type) : document.createElement(t.type),
                a = null
            }
            if (null === t.type)
                null != a && (a[a.indexOf(e)] = null),
                g !== h && (e.data = h);
            else if (t !== n) {
                if (null != a && (a = F.slice.call(e.childNodes)),
                u = (g = n.props || E).dangerouslySetInnerHTML,
                p = h.dangerouslySetInnerHTML,
                !s) {
                    if (g === E)
                        for (g = {},
                        d = 0; d < e.attributes.length; d++)
                            g[e.attributes[d].name] = e.attributes[d].value;
                    (p || u) && (p && u && p.__html == u.__html || (e.innerHTML = p && p.__html || ""))
                }
                (function(e, t, n, o, r) {
                    var a;
                    for (a in n)
                        a in t || m(e, a, null, n[a], o);
                    for (a in t)
                        r && "function" != typeof t[a] || "value" === a || "checked" === a || n[a] === t[a] || m(e, a, t[a], n[a], o)
                }
                )(e, h, g, r, s),
                t.__k = t.props.children,
                p || f(e, t, n, o, "foreignObject" !== t.type && r, a, i, E, s),
                s || ("value"in h && void 0 !== h.value && h.value !== e.value && (e.value = null == h.value ? "" : h.value),
                "checked"in h && void 0 !== h.checked && h.checked !== e.checked && (e.checked = h.checked))
            }
            return e
        }
        function C(e, t, n) {
            try {
                "function" == typeof e ? e(t) : e.current = t
            } catch (e) {
                T.__e(e, n)
            }
        }
        function x(e, t, n) {
            var o, a, i;
            if (T.unmount && T.unmount(e),
            (o = e.ref) && C(o, null, t),
            n || "function" == typeof e.type || (n = null != (a = e.__e)),
            e.__e = e.__d = null,
            null != (o = e.__c)) {
                if (o.componentWillUnmount)
                    try {
                        o.componentWillUnmount()
                    } catch (e) {
                        T.__e(e, t)
                    }
                o.base = o.__P = null
            }
            if (o = e.__k)
                for (i = 0; i < o.length; i++)
                    o[i] && x(o[i], t, n);
            null != a && r(a)
        }
        function w(e, t, n) {
            return this.constructor(e, n)
        }
        function k(e, t, n) {
            var o, r, i;
            T.__ && T.__(e, t),
            r = (o = n === B) ? null : n && n.__k || t.__k,
            e = a(c, null, [e]),
            i = [],
            y(t, (o ? t : n || t).__k = e, r || E, E, void 0 !== t.ownerSVGElement, n && !o ? [n] : r ? null : F.slice.call(t.childNodes), i, n || E, o),
            O(i, e)
        }
        function P(e, t) {
            k(e, t, B)
        }
        function _(e, t) {
            return t = o(o({}, e.props), t),
            arguments.length > 2 && (t.children = F.slice.call(arguments, 2)),
            i(e.type, t, t.key || e.key, t.ref || e.ref)
        }
        function L(e) {
            var t = {}
              , n = {
                __c: "__cC" + D++,
                __: e,
                Consumer: function(e, t) {
                    return e.children(t)
                },
                Provider: function(e) {
                    var o, r = this;
                    return this.getChildContext || (o = [],
                    this.getChildContext = function() {
                        return t[n.__c] = r,
                        t
                    }
                    ,
                    this.shouldComponentUpdate = function(t) {
                        e.value !== t.value && o.some((function(e) {
                            e.context = t.value,
                            d(e)
                        }
                        ))
                    }
                    ,
                    this.sub = function(e) {
                        o.push(e);
                        var t = e.componentWillUnmount;
                        e.componentWillUnmount = function() {
                            o.splice(o.indexOf(e), 1),
                            t && t.call(e)
                        }
                    }
                    ),
                    e.children
                }
            };
            return n.Consumer.contextType = n,
            n
        }
        n.r(t),
        n.d(t, "render", (function() {
            return k
        }
        )),
        n.d(t, "hydrate", (function() {
            return P
        }
        )),
        n.d(t, "createElement", (function() {
            return a
        }
        )),
        n.d(t, "h", (function() {
            return a
        }
        )),
        n.d(t, "Fragment", (function() {
            return c
        }
        )),
        n.d(t, "createRef", (function() {
            return s
        }
        )),
        n.d(t, "isValidElement", (function() {
            return S
        }
        )),
        n.d(t, "Component", (function() {
            return l
        }
        )),
        n.d(t, "cloneElement", (function() {
            return _
        }
        )),
        n.d(t, "createContext", (function() {
            return L
        }
        )),
        n.d(t, "toChildArray", (function() {
            return h
        }
        )),
        n.d(t, "_unmount", (function() {
            return x
        }
        )),
        n.d(t, "options", (function() {
            return T
        }
        ));
        var T, S, N, I, A, B, D, E = {}, F = [], V = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;
        T = {
            __e: function(e, t) {
                for (var n; t = t.__; )
                    if ((n = t.__c) && !n.__)
                        try {
                            if (n.constructor && null != n.constructor.getDerivedStateFromError)
                                n.setState(n.constructor.getDerivedStateFromError(e));
                            else {
                                if (null == n.componentDidCatch)
                                    continue;
                                n.componentDidCatch(e)
                            }
                            return d(n.__E = n)
                        } catch (t) {
                            e = t
                        }
                throw e
            }
        },
        S = function(e) {
            return null != e && void 0 === e.constructor
        }
        ,
        l.prototype.setState = function(e, t) {
            var n;
            n = this.__s !== this.state ? this.__s : this.__s = o({}, this.state),
            "function" == typeof e && (e = e(n, this.props)),
            e && o(n, e),
            null != e && this.__v && (this.__e = !1,
            t && this.__h.push(t),
            d(this))
        }
        ,
        l.prototype.forceUpdate = function(e) {
            this.__v && (this.__e = !0,
            e && this.__h.push(e),
            d(this))
        }
        ,
        l.prototype.render = c,
        N = [],
        I = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout,
        B = E,
        D = 0
    },
    "3/o8": function(e, t, n) {
        "use strict";
        function o(e, t) {
            return (o = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        n.d(t, "a", (function() {
            return s
        }
        ));
        var r = n("2mXy")
          , a = n("FdF9")
          , i = n("o1E3")
          , s = function(e) {
            function t() {
                for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++)
                    o[r] = arguments[r];
                return (t = e.call.apply(e, [this].concat(o)) || this).state = {
                    isPurModelChecked: !1,
                    toggleDisplay: !0
                },
                t.toggle = function(e, n) {
                    var o = t.props
                      , r = o.child
                      , a = o.value
                      , i = o.vendors
                      , s = void 0 !== n ? n : !t.props.checked;
                    "stacks" === r ? t.props.toggle(e, a, s) : "vendor" === r ? (t.props.toggle(e, a._id, s),
                    t.setState({
                        checked: s
                    })) : "category" === r && t.props.toggle(e, a._id, a.isNegative ? !s : s, i),
                    t.setState({
                        checked: s
                    })
                }
                ,
                t
            }
            var n, a;
            return a = e,
            (n = t).prototype = Object.create(a.prototype),
            n.prototype.constructor = n,
            o(n, a),
            t.prototype.render = function() {
                var e = this
                  , t = this.props
                  , n = t.type
                  , o = t.color
                  , a = t.offColor
                  , s = t.text
                  , c = t.offText
                  , l = t.colorActive
                  , u = t.offActiveColor
                  , p = t.checked
                  , d = t.locked
                  , g = t.convertToRem
                  , f = g ? Object(i.c)(12) : void 0
                  , h = g ? "auto" : void 0
                  , b = g ? Object(i.c)(4) + " " + Object(i.c)(8) : void 0
                  , m = g ? "auto" : void 0
                  , v = Object(r.h)("button", {
                    className: d ? "pm-toggle locked" : "pm-toggle",
                    tabIndex: "0",
                    type: "button",
                    role: "switch",
                    "aria-checked": p ? "true" : "false",
                    onKeyDown: function(t) {
                        return Object(i.s)(t.key) && e.toggle(t, !p)
                    },
                    style: {
                        height: m
                    }
                }, Object(r.h)("span", {
                    className: "off",
                    style: {
                        backgroundColor: p ? "transparent" : a,
                        color: p ? "#000000" : u,
                        borderColor: p ? "#dddddd" : a,
                        fontSize: f,
                        height: h,
                        padding: b
                    },
                    onClick: function(t) {
                        return e.toggle(t, !1)
                    }
                }, c), Object(r.h)("span", {
                    className: "on",
                    style: {
                        backgroundColor: p ? o : "transparent",
                        color: p ? l : "#000000",
                        borderColor: p ? o : "#dddddd",
                        fontSize: f,
                        height: h,
                        padding: b
                    },
                    onClick: function(t) {
                        return e.toggle(t, !0)
                    }
                }, s))
                  , y = p ? "pm-switch checked" : "pm-switch"
                  , O = Object(r.h)("button", {
                    tabIndex: "0",
                    type: "button",
                    role: "switch",
                    "aria-checked": p ? "true" : "false",
                    className: d ? y + " locked" : y,
                    onKeyDown: function(t) {
                        t.stopPropagation(),
                        Object(i.s)(t.key) && e.toggle()
                    }
                }, Object(r.h)("span", {
                    className: "slider round",
                    style: {
                        backgroundColor: p ? o : a
                    },
                    onClick: function() {
                        return e.toggle()
                    }
                }));
                return "neutral" === n ? v : O
            }
            ,
            t
        }(a.Component)
    },
    "3u6x": function(e, t, n) {
        "use strict";
        (function(e) {
            var o = n("RSKk")
              , r = n("Pidg")
              , a = n.n(r);
            t.a = function(t) {
                var n = t.vendor
                  , r = t.arrowIconColor;
                return e("a", {
                    tabIndex: t.tabbable ? 0 : -1,
                    href: n.policyUrl,
                    target: "_blank",
                    className: "vendor-tag linked",
                    onKeyDown: function(e) {
                        return e.stopPropagation()
                    }
                }, e("span", {
                    role: "text"
                }, n.name), e("img", {
                    style: Object(o.a)(r),
                    src: a.a,
                    alt: ""
                }))
            }
        }
        ).call(this, n("2mXy").h)
    },
    "4KsG": function(e, t, n) {
        "use strict";
        function o(e, t) {
            return (o = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function r(e, t) {
            return (r = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function a(e, t) {
            return (a = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function i(e, t) {
            return (i = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function s(e, t) {
            return (s = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function c(e, t) {
            return (c = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function l(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, o)
            }
            return n
        }
        function u(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? l(Object(n), !0).forEach((function(t) {
                    p(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function p(e, t, n) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" != typeof e || !e)
                        return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var o = n.call(e, t || "default");
                        if ("object" != typeof o)
                            return o;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" == typeof t ? t : t + ""
            }(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function d(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, o)
            }
            return n
        }
        function g(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? d(Object(n), !0).forEach((function(t) {
                    f(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : d(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function f(e, t, n) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" != typeof e || !e)
                        return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var o = n.call(e, t || "default");
                        if ("object" != typeof o)
                            return o;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" == typeof t ? t : t + ""
            }(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function h(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, o)
            }
            return n
        }
        function b(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? h(Object(n), !0).forEach((function(t) {
                    m(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : h(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function m(e, t, n) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" != typeof e || !e)
                        return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var o = n.call(e, t || "default");
                        if ("object" != typeof o)
                            return o;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" == typeof t ? t : t + ""
            }(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function v(e, t) {
            return (v = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        var y = n("2mXy")
          , O = n("FdF9")
          , j = n("Tfwc")
          , C = n("RSKk")
          , x = n("3u6x")
          , w = n("Pidg")
          , k = n.n(w)
          , P = n("o1E3")
          , _ = function(e) {
            function t() {
                for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++)
                    o[r] = arguments[r];
                return (t = e.call.apply(e, [this].concat(o)) || this).state = {
                    open: !1
                },
                t.toggleAccordion = function(e) {
                    e.preventDefault(),
                    e.stopPropagation(),
                    t.setState({
                        open: !t.state.open
                    }, t.props.force)
                }
                ,
                t.openLink = function() {
                    return window.open(t.props.vendor.policyUrl, "_blank")
                }
                ,
                t
            }
            var n, r;
            return r = e,
            (n = t).prototype = Object.create(r.prototype),
            n.prototype.constructor = n,
            o(n, r),
            t.prototype.render = function() {
                var e = this
                  , t = this.props
                  , n = t.vendor
                  , o = t.settings
                  , r = t.language
                  , a = t.dev
                  , i = t.accordionOpen
                  , s = t.isSpecialPurposeOrFeature
                  , c = t.isApple
                  , l = t.isCustomVendorLabel1
                  , u = t.isCustomVendorLabel2
                  , p = t.isCustomVendorLabel3
                  , d = t.appleDataBrokerLetter
                  , g = t.customVendorLabel1Letter
                  , f = t.customVendorLabel2Letter
                  , h = t.customVendorLabel3Letter
                  , b = this.state.open
                  , m = n.cookies ? n.cookies.length : 0
                  , v = n.cookies || []
                  , O = Object(P.x)(Boolean(a), o, "cookieText", r)
                  , j = Object(P.x)(Boolean(a), o, "tableCookieText", r)
                  , w = Object(P.x)(Boolean(a), o, "tableDomainText", r)
                  , _ = Object(P.x)(Boolean(a), o, "tableDurationText", r)
                  , L = Object(P.x)(Boolean(a), o, "otherLetter", r);
                return Object(y.h)("div", {
                    className: "toggle-vendor"
                }, Object(y.h)("div", {
                    style: {
                        position: "relative"
                    }
                }, Object(y.h)("button", {
                    tabIndex: i || void 0 === i ? 0 : -1,
                    className: b ? "expand active" : "expand",
                    onClick: m > 0 ? this.toggleAccordion : this.openLink,
                    onKeyDown: function(t) {
                        t.stopPropagation(),
                        Object(P.s)(t.key) && (m > 0 ? e.toggleAccordion(t) : e.openLink())
                    }
                }, m > 0 ? Object(y.h)("span", {
                    className: "plusminus"
                }, b ? "-" : "+") : Object(y.h)("img", {
                    style: Object(C.a)(o.arrowIconColor),
                    src: k.a,
                    alt: ""
                }), Object(y.h)("span", {
                    style: {
                        padding: "0 5px"
                    }
                }, n.name), "IAB" !== n.vendorType && !s && Object(y.h)("span", {
                    tabIndex: "0",
                    className: "legend-key"
                }, L), m > 0 ? Object(y.h)("span", {
                    style: {
                        marginLeft: "5px"
                    }
                }, "(", m, " ", O, ")") : null, c && Object(y.h)("span", {
                    className: "legend-key apple-broker"
                }, d), l && Object(y.h)("span", {
                    tabIndex: "0",
                    className: "legend-key is-custom-vendor-label-1"
                }, g), u && Object(y.h)("span", {
                    tabIndex: "0",
                    className: "legend-key is-custom-vendor-label-2"
                }, f), p && Object(y.h)("span", {
                    tabIndex: "0",
                    className: "legend-key is-custom-vendor-label-3"
                }, h))), Object(y.h)("div", {
                    style: {
                        display: b ? "block" : "none"
                    },
                    className: "content"
                }, Object(y.h)("div", {
                    className: "inner-content"
                }, Object(y.h)(x.a, {
                    vendor: n,
                    tabbable: b,
                    arrowIconColor: o.arrowIconColor
                }), Object(y.h)("table", {
                    className: "tvtbl"
                }, Object(y.h)("tr", null, Object(y.h)("th", {
                    scope: "col",
                    tabIndex: "0"
                }, j), Object(y.h)("th", {
                    scope: "col",
                    tabIndex: "0"
                }, w), Object(y.h)("th", {
                    scope: "col",
                    tabIndex: "0"
                }, _)), v.map((function(e) {
                    return Object(y.h)("tr", null, Object(y.h)("td", null, Object(y.h)("span", {
                        tabIndex: "0"
                    }, e.name)), Object(y.h)("td", {
                        tabIndex: "0"
                    }, e.domain), Object(y.h)("td", null, Object(y.h)("span", {
                        tabIndex: "0"
                    }, e.cookieLifeSpan)))
                }
                ))))))
            }
            ,
            t
        }(O.Component)
          , L = n("sSoO")
          , T = n("Up9s")
          , S = function(e) {
            function t() {
                for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++)
                    o[r] = arguments[r];
                return (t = e.call.apply(e, [this].concat(o)) || this).state = {
                    open: !1,
                    consentAll: !1,
                    liAll: !1,
                    disclosureAll: !1,
                    vendorsAll: !1
                },
                t.toggleAccordion = function() {
                    var e = t.content
                      , n = !t.state.open;
                    t.setState({
                        open: n
                    }, t.props.force),
                    e.style.maxHeight = n ? e.scrollHeight + "px" : null
                }
                ,
                t.toggleConsentAll = function() {
                    t.setState({
                        consentAll: !t.state.consentAll
                    }, t.props.force)
                }
                ,
                t.toggleLiAll = function() {
                    t.setState({
                        liAll: !t.state.liAll
                    }, t.props.force)
                }
                ,
                t.toggleDisclosure = function() {
                    t.setState({
                        disclosureAll: !t.state.disclosureAll
                    }, t.props.force)
                }
                ,
                t.toggleVendors = function() {
                    t.setState({
                        vendorsAll: !t.state.vendorsAll
                    }, t.props.force)
                }
                ,
                t.openLink = function() {
                    return window.open(t.props.vendor.policyUrl, "_blank")
                }
                ,
                t
            }
            var n, o;
            o = e,
            (n = t).prototype = Object.create(o.prototype),
            n.prototype.constructor = n,
            r(n, o);
            var a = t.prototype;
            return a.shouldComponentUpdate = function(e, t) {
                var n = this.content;
                n && t.open && (n.style.maxHeight = n.scrollHeight + "px")
            }
            ,
            a.componentDidUpdate = function(e) {
                e.parentAccordionOpen && !this.props.parentAccordionOpen && (this.setState({
                    open: !1
                }),
                this.content.style.maxHeight = null)
            }
            ,
            a.render = function() {
                var e = this
                  , t = this.props
                  , n = t.purpose
                  , o = t.selected
                  , r = t.settings
                  , a = t.togglePurposeOrFeature
                  , i = t.toggleText
                  , s = t.toggleOffText
                  , c = t.language
                  , l = t.force
                  , u = t.dev
                  , p = t.parentAccordionOpen
                  , d = t.isSpecialPurpose
                  , g = t.isFeature
                  , f = t.usePurModel
                  , h = t.neutralPm
                  , b = t.vendors
                  , m = this.state
                  , v = m.open
                  , O = m.consentAll
                  , j = m.liAll
                  , C = m.disclosureAll
                  , x = m.vendorsAll
                  , w = function(e, t) {
                    return !!b && Boolean(e.map((function(e) {
                        return e.vendorId
                    }
                    )).map((function(e) {
                        return b.find((function(t) {
                            return t.vendorId === e
                        }
                        ))
                    }
                    )).some((function(e) {
                        return e[t]
                    }
                    )))
                }
                  , k = Object(P.x)(Boolean(u), r, "viewAllText", c)
                  , S = Object(P.x)(Boolean(u), r, "viewLessText", c)
                  , N = Object(P.x)(Boolean(u), r, "otherText", c)
                  , I = Object(P.x)(Boolean(u), r, "otherLetter", c)
                  , A = Object(P.x)(Boolean(u), r, "customPurposesLetter", c)
                  , B = Object(P.x)(Boolean(u), r, "purposeVendorTitle", c)
                  , D = Object(P.x)(Boolean(u), r, "requiredConsentLetter", c)
                  , E = Object(P.x)(Boolean(u), r, "appleDataBrokerText", c)
                  , F = Object(P.x)(Boolean(u), r, "appleDataBrokerLetter", c)
                  , V = w(n.requiringConsentVendors, "isApple")
                  , M = Object(P.x)(Boolean(u), r, "customVendorLabel1Text", c)
                  , R = Object(P.x)(Boolean(u), r, "customVendorLabel2Text", c)
                  , U = Object(P.x)(Boolean(u), r, "customVendorLabel3Text", c)
                  , H = Object(P.x)(Boolean(u), r, "customVendorLabel1Letter", c)
                  , z = Object(P.x)(Boolean(u), r, "customVendorLabel2Letter", c)
                  , q = Object(P.x)(Boolean(u), r, "customVendorLabel3Letter", c)
                  , K = w(n.requiringConsentVendors, "isCustomVendorLabel1")
                  , W = w(n.requiringConsentVendors, "isCustomVendorLabel2")
                  , G = w(n.requiringConsentVendors, "isCustomVendorLabel3");
                r.alphabetizeVendors && (n.requiringConsentVendors && n.requiringConsentVendors.sort((function(e, t) {
                    return e.name.toLowerCase() < t.name.toLowerCase() ? -1 : e.name.toLowerCase() > t.name.toLowerCase() ? 1 : 0
                }
                )),
                n.legIntVendors && n.legIntVendors.sort((function(e, t) {
                    return e.name.toLowerCase() < t.name.toLowerCase() ? -1 : e.name.toLowerCase() > t.name.toLowerCase() ? 1 : 0
                }
                )),
                n.disclosureOnlyVendors && n.disclosureOnlyVendors.sort((function(e, t) {
                    return e.name.toLowerCase() < t.name.toLowerCase() ? -1 : e.name.toLowerCase() > t.name.toLowerCase() ? 1 : 0
                }
                )),
                n.vendors && n.vendors.sort((function(e, t) {
                    return e.name.toLowerCase() < t.name.toLowerCase() ? -1 : e.name.toLowerCase() > t.name.toLowerCase() ? 1 : 0
                }
                )));
                var X = function() {
                    return Object(y.h)("div", {
                        className: "legend",
                        style: {
                            textAlign: "left"
                        }
                    }, Object(y.h)("span", {
                        className: "legend-key"
                    }, I), Object(y.h)("h2", {
                        class: "custom-header"
                    }, N), V && Object(y.h)("span", {
                        tabIndex: "0",
                        className: "legend-key apple-broker"
                    }, F), V && E, K && Object(y.h)("span", {
                        tabIndex: "0",
                        className: "legend-key is-custom-vendor-label-1"
                    }, H), K && M, W && Object(y.h)("span", {
                        tabIndex: "0",
                        className: "legend-key is-custom-vendor-label-2"
                    }, z), W && R, G && Object(y.h)("span", {
                        tabIndex: "0",
                        className: "legend-key is-custom-vendor-label-3"
                    }, q), G && U)
                }
                  , Y = p ? 0 : -1
                  , $ = !f || "li" === o;
                return Object(y.h)("div", {
                    className: "toggle-purpose"
                }, Object(y.h)("div", {
                    className: "stack-row",
                    style: {
                        position: "relative"
                    }
                }, Object(y.h)("button", {
                    tabIndex: Y,
                    className: v ? "opener active" : "opener",
                    onClick: function(t) {
                        return e.toggleAccordion(t)
                    }
                }, Object(y.h)("span", {
                    className: "plusminus"
                }, v ? "-" : "+"), Object(y.h)("span", null, n.name, "CUSTOM" === n.type && Object(y.h)("span", {
                    tabIndex: "0",
                    className: "legend-key inline"
                }, A), n.requireConsent && Object(y.h)("span", {
                    tabIndex: "0",
                    className: "legend-key inline required-consent"
                }, D))), a && $ && (h ? Object(y.h)(T.a, {
                    settings: r,
                    value: n,
                    toggle: a,
                    child: "purposes",
                    vendors: n.requiringConsentVendors,
                    dev: u,
                    language: c,
                    style: {
                        right: 8
                    }
                }) : Object(y.h)(L.a, {
                    type: r.toggleType,
                    color: r.toggleColor,
                    colorActive: r.toggleActiveColor,
                    offColor: r.toggleOffColor,
                    offActiveColor: r.toggleOffActiveColor,
                    text: i,
                    offText: s,
                    toggle: a,
                    child: "purposes",
                    vendors: "consent" === o ? n.requiringConsentVendors : n.legIntVendors,
                    value: n,
                    legInt: "li" === o,
                    checked: "li" === o ? n.legInt : n.active,
                    tabbable: p,
                    dev: u,
                    settings: r,
                    language: c
                }))), Object(y.h)("div", {
                    ref: function(t) {
                        return e.content = t
                    },
                    className: "main"
                }, Object(y.h)("p", {
                    tabIndex: v ? "0" : "-1",
                    className: "sub-purpose-description"
                }, Object(P.h)(n.description)), "consent" === o && Object(y.h)("div", {
                    className: "inner-main"
                }, X(), Object(y.h)("div", {
                    tabIndex: v ? "0" : "-1",
                    className: "pv-title"
                }, B, " (", n.requiringConsentVendors.length, ")"), n.requiringConsentVendors.slice(0, O ? n.requiringConsentVendors.length : 3).map((function(e) {
                    return Object(y.h)(_, {
                        vendor: e,
                        key: e.vendorId,
                        language: c,
                        settings: r,
                        force: l,
                        accordionOpen: v,
                        isSpecialPurpose: d,
                        isApple: w([e], "isApple"),
                        isCustomVendorLabel1: w([e], "isCustomVendorLabel1"),
                        isCustomVendorLabel2: w([e], "isCustomVendorLabel2"),
                        isCustomVendorLabel3: w([e], "isCustomVendorLabel3"),
                        appleDataBrokerLetter: F,
                        customVendorLabel1Letter: H,
                        customVendorLabel2Letter: z,
                        customVendorLabel3Letter: q
                    })
                }
                )), n.requiringConsentVendors.length > 3 && Object(y.h)("div", {
                    tabIndex: v ? 0 : -1,
                    className: "view-all",
                    onClick: this.toggleConsentAll,
                    onKeyDown: function(t) {
                        return Object(P.s)(t.key) && e.toggleConsentAll()
                    }
                }, O ? S : k)), "li" === o && Object(y.h)("div", {
                    className: "inner-main"
                }, X(), Object(y.h)("div", {
                    tabIndex: v ? "0" : "-1",
                    className: "pv-title"
                }, B, " (", n.legIntVendors.length, ")"), n.legIntVendors.slice(0, j ? n.legIntVendors.length : 3).map((function(e) {
                    return Object(y.h)(_, {
                        vendor: e,
                        key: e.vendorId,
                        language: c,
                        settings: r,
                        force: l,
                        accordionOpen: v,
                        isApple: w([e], "isApple"),
                        isCustomVendorLabel1: w([e], "isCustomVendorLabel1"),
                        isCustomVendorLabel2: w([e], "isCustomVendorLabel2"),
                        isCustomVendorLabel3: w([e], "isCustomVendorLabel3"),
                        appleDataBrokerLetter: F,
                        customVendorLabel1Letter: H,
                        customVendorLabel2Letter: z,
                        customVendorLabel3Letter: q
                    })
                }
                )), n.legIntVendors.length > 3 && Object(y.h)("div", {
                    tabIndex: v ? 0 : -1,
                    className: "view-all",
                    onClick: this.toggleLiAll,
                    onKeyDown: function(t) {
                        return Object(P.s)(t.key) && e.toggleLiAll()
                    }
                }, j ? S : k)), "disclosure" === o && Object(y.h)("div", {
                    className: "inner-main"
                }, X(), Object(y.h)("div", {
                    tabIndex: v ? "0" : "-1",
                    className: "pv-title"
                }, B, " (", n.disclosureOnlyVendors.length, ")"), n.disclosureOnlyVendors.slice(0, C ? n.disclosureOnlyVendors.length : 3).map((function(e) {
                    return Object(y.h)(_, {
                        vendor: e,
                        key: e.vendorId,
                        language: c,
                        settings: r,
                        force: l,
                        accordionOpen: v,
                        isApple: w([e], "isApple"),
                        isCustomVendorLabel1: w([e], "isCustomVendorLabel1"),
                        isCustomVendorLabel2: w([e], "isCustomVendorLabel2"),
                        isCustomVendorLabel3: w([e], "isCustomVendorLabel3"),
                        appleDataBrokerLetter: F,
                        customVendorLabel1Letter: H,
                        customVendorLabel2Letter: z,
                        customVendorLabel3Letter: q
                    })
                }
                )), n.disclosureOnlyVendors.length > 3 && Object(y.h)("div", {
                    tabIndex: v ? 0 : -1,
                    className: "view-all",
                    onClick: this.toggleDisclosure,
                    onKeyDown: function(t) {
                        return Object(P.s)(t.key) && e.toggleDisclosure()
                    }
                }, C ? S : k)), "vendors" === o && Object(y.h)("div", {
                    className: "inner-main"
                }, !d && !g && X(), Object(y.h)("div", {
                    tabIndex: v ? "0" : "-1",
                    className: "pv-title"
                }, B, " (", n.vendors.length, ")"), n.vendors.slice(0, x ? n.vendors.length : 3).map((function(e) {
                    return Object(y.h)(_, {
                        vendor: e,
                        key: e.vendorId,
                        language: c,
                        settings: r,
                        force: l,
                        accordionOpen: v,
                        isSpecialPurposeOrFeature: d || g,
                        isApple: w([e], "isApple"),
                        isCustomVendorLabel1: w([e], "isCustomVendorLabel1"),
                        isCustomVendorLabel2: w([e], "isCustomVendorLabel2"),
                        isCustomVendorLabel3: w([e], "isCustomVendorLabel3"),
                        appleDataBrokerLetter: F,
                        customVendorLabel1Letter: H,
                        customVendorLabel2Letter: z,
                        customVendorLabel3Letter: q
                    })
                }
                )), n.vendors.length > 3 && Object(y.h)("div", {
                    tabIndex: v ? 0 : -1,
                    className: "view-all",
                    onClick: this.toggleVendors,
                    onKeyDown: function(t) {
                        return Object(P.s)(t.key) && e.toggleVendors()
                    }
                }, x ? S : k))))
            }
            ,
            t
        }(O.Component)
          , N = function(e) {
            var t = e.disclosureOnlyPurposes
              , n = e.specialPurposesInfoText
              , o = e.specialPurposes
              , r = e.settings
              , a = e.force
              , i = e.updateMe
              , s = e.accordionOpen
              , c = e.language;
            return Object(y.h)("div", {
                className: "special-purposes-list"
            }, Object(y.h)("p", {
                style: "margin-bottom:15px;"
            }, Object(P.h)(n)), o.map((function(e) {
                return Object(y.h)(S, {
                    key: e._id,
                    purpose: e,
                    selected: "vendors",
                    settings: r,
                    force: a,
                    updateMe: i,
                    parentAccordionOpen: s,
                    isSpecialPurpose: !0,
                    language: c
                })
            }
            )), t.length > 0 && t.map((function(e) {
                return Object(y.h)(S, {
                    key: e._id,
                    purpose: e,
                    selected: "disclosure",
                    settings: r,
                    force: a,
                    updateMe: i,
                    parentAccordionOpen: s,
                    language: c
                })
            }
            )))
        }
          , I = function(e) {
            function t() {
                return e.apply(this, arguments) || this
            }
            var n, o;
            return o = e,
            (n = t).prototype = Object.create(o.prototype),
            n.prototype.constructor = n,
            a(n, o),
            t.prototype.render = function() {
                var e = this.props
                  , t = e.specialPurposes
                  , n = e.disclosureOnlyPurposes
                  , o = e.settings
                  , r = e.language
                  , a = e.force
                  , i = e.updateMe
                  , s = e.dev
                  , c = e.usePurModel
                  , l = e.neutralPm
                  , u = Object(P.x)(Boolean(s), o, "specialPurposesText", r)
                  , p = Object(P.x)(Boolean(s), o, "specialPurposesInfo", r);
                return Object(y.h)(j.a, {
                    settings: o,
                    name: u,
                    child: "specialPurposes-parent",
                    language: r,
                    value: null,
                    force: a,
                    updateMe: i,
                    description: null,
                    content: Object(y.h)(N, {
                        disclosureOnlyPurposes: n,
                        specialPurposesInfoText: p,
                        specialPurposes: t,
                        settings: o,
                        language: r,
                        force: a,
                        dev: s,
                        updateMe: i
                    }),
                    usePurModel: c,
                    neutralPm: l
                })
            }
            ,
            t
        }(O.Component)
          , A = function(e) {
            var t = e.featuresInfo
              , n = e.features
              , o = e.settings
              , r = e.force
              , a = e.updateMe
              , i = e.accordionOpen
              , s = e.language;
            return Object(y.h)("div", {
                className: "features-list"
            }, Object(y.h)("p", {
                style: "margin-bottom:15px;"
            }, Object(P.h)(t)), n.map((function(e) {
                return Object(y.h)(S, {
                    key: e._id,
                    purpose: e,
                    selected: "vendors",
                    settings: o,
                    force: r,
                    updateMe: a,
                    parentAccordionOpen: i,
                    isFeature: !0,
                    language: s
                })
            }
            )))
        }
          , B = function(e) {
            function t() {
                return e.apply(this, arguments) || this
            }
            var n, o;
            return o = e,
            (n = t).prototype = Object.create(o.prototype),
            n.prototype.constructor = n,
            i(n, o),
            t.prototype.render = function() {
                var e = this.props
                  , t = e.features
                  , n = e.settings
                  , o = e.language
                  , r = e.force
                  , a = e.updateMe
                  , i = e.dev
                  , s = e.usePurModel
                  , c = Object(P.x)(Boolean(i), n, "featuresText", o)
                  , l = Object(P.x)(Boolean(i), n, "featuresInfo", o);
                return Object(y.h)(j.a, {
                    settings: n,
                    name: c,
                    child: "features",
                    language: o,
                    value: null,
                    force: r,
                    description: null,
                    content: Object(y.h)(A, {
                        featuresInfo: l,
                        features: t,
                        settings: n,
                        language: o,
                        force: r,
                        updateMe: a
                    }),
                    usePurModel: s
                })
            }
            ,
            t
        }(O.Component)
          , D = n("KOA+")
          , E = function(e) {
            function t() {
                for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++)
                    o[r] = arguments[r];
                return (t = e.call.apply(e, [this].concat(o)) || this).state = {
                    consentAll: !1,
                    liAll: !1,
                    discolsureAll: !1
                },
                t.toggleConsentAll = function() {
                    t.setState({
                        consentAll: !t.state.consentAll
                    }, t.props.force)
                }
                ,
                t.toggleLiAll = function() {
                    t.setState({
                        liAll: !t.state.liAll
                    }, t.props.force)
                }
                ,
                t.toggleDisclosure = function() {
                    t.setState({
                        discolsureAll: !t.state.discolsureAll
                    }, t.props.force)
                }
                ,
                t
            }
            var n, o;
            return o = e,
            (n = t).prototype = Object.create(o.prototype),
            n.prototype.constructor = n,
            s(n, o),
            t.prototype.render = function() {
                var e = this
                  , t = this.props
                  , n = t.selected
                  , o = t.purpose
                  , r = t.settings
                  , a = t.language
                  , i = t.force
                  , s = t.dev
                  , c = t.disclosure
                  , l = t.isCustom
                  , u = t.accordionOpen
                  , p = t.vendors
                  , d = this.state
                  , g = d.consentAll
                  , f = d.liAll
                  , h = d.discolsureAll
                  , b = function(e, t) {
                    return !!p && Boolean(e.map((function(e) {
                        return e.vendorId
                    }
                    )).map((function(e) {
                        return p.find((function(t) {
                            return t.vendorId === e
                        }
                        ))
                    }
                    )).some((function(e) {
                        return e[t]
                    }
                    )))
                }
                  , m = Object(P.x)(Boolean(s), r, "viewAllText", a)
                  , v = Object(P.x)(Boolean(s), r, "viewLessText", a)
                  , O = Object(P.x)(Boolean(s), r, "otherText", a)
                  , j = Object(P.x)(Boolean(s), r, "otherLetter", a)
                  , C = Object(P.x)(Boolean(s), r, "appleDataBrokerText", a)
                  , x = Object(P.x)(Boolean(s), r, "appleDataBrokerLetter", a)
                  , w = b(o.requiringConsentVendors, "isApple")
                  , k = Object(P.x)(Boolean(s), r, "customVendorLabel1Text", a)
                  , L = Object(P.x)(Boolean(s), r, "customVendorLabel2Text", a)
                  , T = Object(P.x)(Boolean(s), r, "customVendorLabel3Text", a)
                  , S = Object(P.x)(Boolean(s), r, "customVendorLabel1Letter", a)
                  , N = Object(P.x)(Boolean(s), r, "customVendorLabel2Letter", a)
                  , I = Object(P.x)(Boolean(s), r, "customVendorLabel3Letter", a)
                  , A = b(o.requiringConsentVendors, "isCustomVendorLabel1")
                  , B = b(o.requiringConsentVendors, "isCustomVendorLabel2")
                  , E = b(o.requiringConsentVendors, "isCustomVendorLabel3")
                  , F = Object(P.x)(Boolean(s), r, "purposeVendorTitle", a)
                  , V = l ? Object(y.h)("p", {
                    style: "margin-bottom:15px;",
                    dangerouslySetInnerHTML: {
                        __html: Object(D.a)({
                            html: o.description
                        })
                    }
                }) : Object(y.h)("p", {
                    style: "margin-bottom:15px;"
                }, Object(P.h)(o.description));
                r.alphabetizeVendors && (o.requiringConsentVendors && o.requiringConsentVendors.sort((function(e, t) {
                    return e.name.toLowerCase() < t.name.toLowerCase() ? -1 : e.name.toLowerCase() > t.name.toLowerCase() ? 1 : 0
                }
                )),
                o.legIntVendors && o.legIntVendors.sort((function(e, t) {
                    return e.name.toLowerCase() < t.name.toLowerCase() ? -1 : e.name.toLowerCase() > t.name.toLowerCase() ? 1 : 0
                }
                )),
                o.disclosureOnlyVendors && o.disclosureOnlyVendors.sort((function(e, t) {
                    return e.name.toLowerCase() < t.name.toLowerCase() ? -1 : e.name.toLowerCase() > t.name.toLowerCase() ? 1 : 0
                }
                )));
                var M = function() {
                    return Object(y.h)("div", {
                        className: "legend"
                    }, Object(y.h)("span", {
                        tabIndex: "0",
                        className: "legend-key"
                    }, j), Object(y.h)("h2", {
                        class: "custom-header"
                    }, O), w && Object(y.h)("span", {
                        tabIndex: "0",
                        className: "legend-key apple-broker"
                    }, x), w && C, A && Object(y.h)("span", {
                        tabIndex: "0",
                        className: "legend-key is-custom-vendor-label-1"
                    }, S), A && k, B && Object(y.h)("span", {
                        tabIndex: "0",
                        className: "legend-key is-custom-vendor-label-2"
                    }, N), B && L, E && Object(y.h)("span", {
                        tabIndex: "0",
                        className: "legend-key is-custom-vendor-label-3"
                    }, I), E && T)
                };
                return Object(y.h)("div", {
                    className: "purpose-content"
                }, V, "consent" === n && Object(y.h)("div", null, Object(y.h)("div", {
                    className: "policies"
                }, M(), Object(y.h)("div", {
                    tabindex: "0",
                    className: "pv-title"
                }, F, " (", o.requiringConsentVendors.length, ")"), o.requiringConsentVendors.slice(0, g ? o.requiringConsentVendors.length : 3).map((function(e) {
                    return Object(y.h)(_, {
                        vendor: e,
                        key: e.vendorId,
                        language: a,
                        settings: r,
                        force: i,
                        isApple: b([e], "isApple"),
                        isCustomVendorLabel1: b([e], "isCustomVendorLabel1"),
                        isCustomVendorLabel2: b([e], "isCustomVendorLabel2"),
                        isCustomVendorLabel3: b([e], "isCustomVendorLabel3"),
                        appleDataBrokerLetter: x,
                        customVendorLabel1Letter: S,
                        customVendorLabel2Letter: N,
                        customVendorLabel3Letter: I
                    })
                }
                )), o.requiringConsentVendors.length > 3 && Object(y.h)("div", {
                    tabIndex: u ? 0 : -1,
                    className: "view-all",
                    onClick: this.toggleConsentAll,
                    onKeyDown: function(t) {
                        return Object(P.s)(t.key) && e.toggleConsentAll()
                    }
                }, g ? v : m))), "li" === n && Object(y.h)("div", {
                    style: {
                        position: "relative"
                    }
                }, Object(y.h)("div", {
                    className: "policies"
                }, M(), Object(y.h)("div", {
                    className: "pv-title"
                }, F, " (", o.legIntVendors.length, ")"), o.legIntVendors.slice(0, f ? o.legIntVendors.length : 3).map((function(e) {
                    return Object(y.h)(_, {
                        vendor: e,
                        key: e.vendorId,
                        language: a,
                        settings: r,
                        force: i,
                        accordionOpen: u,
                        isApple: b([e], "isApple"),
                        isCustomVendorLabel1: b([e], "isCustomVendorLabel1"),
                        isCustomVendorLabel2: b([e], "isCustomVendorLabel2"),
                        isCustomVendorLabel3: b([e], "isCustomVendorLabel3"),
                        appleDataBrokerLetter: x,
                        customVendorLabel1Letter: S,
                        customVendorLabel2Letter: N,
                        customVendorLabel3Letter: I
                    })
                }
                )), o.legIntVendors.length > 3 && Object(y.h)("div", {
                    tabIndex: u ? 0 : -1,
                    className: "view-all",
                    onClick: this.toggleLiAll,
                    onKeyDown: function(t) {
                        return Object(P.s)(t.key) && e.toggleLiAll()
                    }
                }, f ? v : m))), !0 === c && Object(y.h)("div", {
                    style: {
                        position: "relative"
                    }
                }, Object(y.h)("div", {
                    className: "policies"
                }, M(), Object(y.h)("div", {
                    className: "pv-title"
                }, F, " (", o.disclosureOnlyVendors.length, ")"), o.disclosureOnlyVendors.slice(0, h ? o.disclosureOnlyVendors.length : 3).map((function(e) {
                    return Object(y.h)(_, {
                        vendor: e,
                        key: e.vendorId,
                        language: a,
                        settings: r,
                        force: i,
                        accordionOpen: u,
                        isApple: b([e], "isApple"),
                        isCustomVendorLabel1: b([e], "isCustomVendorLabel1"),
                        isCustomVendorLabel2: b([e], "isCustomVendorLabel2"),
                        isCustomVendorLabel3: b([e], "isCustomVendorLabel3"),
                        appleDataBrokerLetter: x,
                        customVendorLabel1Letter: S,
                        customVendorLabel2Letter: N,
                        customVendorLabel3Letter: I
                    })
                }
                )), o.disclosureOnlyVendors.length > 3 ? Object(y.h)("div", {
                    tabIndex: u ? 0 : -1,
                    className: "view-all",
                    onClick: this.toggleDisclosure,
                    onKeyDown: function(t) {
                        return Object(P.s)(t.key) && e.toggleDisclosure()
                    }
                }, h ? v : m) : null)))
            }
            ,
            t
        }(O.Component)
          , F = function(e) {
            function t() {
                for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++)
                    o[r] = arguments[r];
                return (t = e.call.apply(e, [this].concat(o)) || this).state = {
                    vendorsAll: !1
                },
                t.toggleVendors = function() {
                    t.setState({
                        vendorsAll: !t.state.vendorsAll
                    }, t.props.force)
                }
                ,
                t
            }
            var n, o;
            return o = e,
            (n = t).prototype = Object.create(o.prototype),
            n.prototype.constructor = n,
            c(n, o),
            t.prototype.render = function() {
                var e = this
                  , t = this.props
                  , n = t.feature
                  , o = t.settings
                  , r = t.language
                  , a = t.force
                  , i = t.dev
                  , s = t.isCustom
                  , c = t.accordionOpen
                  , l = this.state.vendorsAll
                  , u = Object(P.x)(Boolean(i), o, "viewAllText", r)
                  , p = Object(P.x)(Boolean(i), o, "viewLessText", r)
                  , d = Object(P.x)(Boolean(i), o, "purposeVendorTitle", r);
                return Object(y.h)("div", {
                    className: "purpose-content"
                }, Object(y.h)("p", {
                    style: "margin-bottom:15px;"
                }, s ? n.description : Object(P.h)(n.description)), Object(y.h)("div", {
                    style: {
                        position: "relative"
                    }
                }, Object(y.h)("div", {
                    className: "policies"
                }, Object(y.h)("div", {
                    className: "pv-title"
                }, d, " (", n.vendors.length, ")"), n.vendors.slice(0, l ? n.vendors.length : 3).map((function(e) {
                    return Object(y.h)(_, {
                        vendor: e,
                        key: e.vendorId,
                        language: r,
                        settings: o,
                        force: a,
                        isSpecialPurposeOrFeature: !0
                    })
                }
                )), n.vendors.length > 3 && Object(y.h)("div", {
                    tabIndex: c ? 0 : -1,
                    className: "view-all",
                    onClick: this.toggleVendors,
                    onKeyDown: function(t) {
                        return Object(P.s)(t.key) && e.toggleVendors()
                    }
                }, l ? p : u))))
            }
            ,
            t
        }(O.Component)
          , V = function(e) {
            var t = e.stack
              , n = e.selected
              , o = e.toggleStack
              , r = e.language
              , a = e.settings
              , i = e.dev
              , s = e.usePurModel
              , c = e.neutralPm;
            Object(O.useEffect)((function(e) {
                s && o(e, t.categories, !0, "li" === n)
            }
            ), []);
            var l = {
                active: 0,
                rejected: 0,
                neutral: 0
            };
            t.categories.forEach((function(e) {
                "consent" === n && e.active ? l.active += 1 : "consent" === n && !1 === e.active ? l.rejected += 1 : "consent" === n && null === e.active && (l.neutral += 1),
                "li" === n && e.legInt ? l.active += 1 : "li" !== n || e.legInt || (l.rejected += 1)
            }
            ));
            var p = "partial";
            l.active > 0 && 0 === l.rejected && (p = "accepted"),
            l.rejected > 0 && 0 === l.active && (p = "rejected"),
            c && (p = l.rejected === t.categories.length ? "rejected" : l.active === t.categories.length ? "accepted" : "partial");
            var d = a.toggleOffColor;
            "accepted" === p && (d = a.toggleColor),
            "partial" === p && (d = a.toggleNeutralColor),
            delete u({}, a.accordionsFont).color;
            var g = "accepted" !== p;
            s && (p = "accepted");
            var f = Object(P.x)(Boolean(i), a, "toggleOnText", r)
              , h = Object(P.x)(Boolean(i), a, "toggleOffText", r)
              , b = Object(P.x)(Boolean(i), a, "requiredConsentLetter", r)
              , m = f || h ? " has-text" : ""
              , v = "accepted" === p ? " pm-switch checked" + m : " pm-switch" + m
              , j = "li" !== n && s ? "none" : "inline-flex"
              , C = function(e) {
                return o(e, t.categories, g, "li" === n)
            }
              , x = t.categories.some((function(e) {
                return e.requireConsent
            }
            ));
            return Object(y.h)("div", {
                className: "stack-title",
                style: {
                    display: c && "flex"
                }
            }, Object(y.h)("h3", {
                style: u({}, a.accordionsFont)
            }, t.name, x && Object(y.h)("span", {
                tabIndex: "0",
                className: "legend-key inline required-consent"
            }, b)), !c && Object(y.h)("label", {
                className: "pm-nswitch " + p + v,
                onKeyDown: function(e) {
                    return Object(P.s)(e.key) && C(e)
                },
                style: {
                    display: j
                }
            }, Object(y.h)("span", {
                tabIndex: "0",
                role: "switch",
                "aria-checked": String("rejected" !== p),
                className: "accepted" === p ? "slider round is-checked" : "slider round",
                style: {
                    backgroundColor: d
                },
                onClick: C
            }, "partial" === p ? null : "accepted" === p ? f : h)))
        }
          , M = function(e) {
            var t = e.stack
              , n = e.selected
              , o = e.settings
              , r = e.togglePurposeOrFeature
              , a = e.toggleText
              , i = e.toggleOffText
              , s = e.force
              , c = e.updateMe
              , l = e.accordionOpen
              , u = e.usePurModel
              , p = e.neutralPm
              , d = e.language
              , f = e.dev
              , h = e.vendors;
            return Object(y.h)("div", {
                className: "purpose-content"
            }, Object(y.h)("p", {
                style: g({}, o.panelFont),
                className: "stack-description",
                dangerouslySetInnerHTML: {
                    __html: Object(D.a)({
                        html: t.description
                    })
                }
            }), t.categories.map((function(e) {
                return Object(y.h)(S, {
                    key: e._id,
                    purpose: e,
                    selected: n,
                    settings: o,
                    togglePurposeOrFeature: r,
                    toggleText: a,
                    toggleOffText: i,
                    force: s,
                    updateMe: c,
                    parentAccordionOpen: l,
                    usePurModel: u,
                    neutralPm: p,
                    language: d,
                    dev: f,
                    vendors: h
                })
            }
            )))
        };
        t.a = function(e) {
            return function(t) {
                var n = Object(O.useState)(!1)
                  , o = n[0]
                  , r = n[1]
                  , a = t.dev
                  , i = t.settings
                  , s = t.language
                  , c = t.purposes
                  , l = t.selected
                  , u = t.stacks
                  , p = t.toggleStack
                  , d = t.togglePurposeOrFeature
                  , g = t.usePurModel
                  , f = t.neutralPm
                  , h = t.vendors
                  , m = t.specialFeatures
                  , v = t.specialPurposes
                  , C = t.features
                  , x = t.useStacks;
                if (t.inOrder) {
                    var w = Object(P.x)(Boolean(a), i, "toggleText", s)
                      , k = Object(P.x)(Boolean(a), i, "toggleOffText", s)
                      , _ = Object(P.x)(Boolean(a), i, "customPurposesLetter", s)
                      , L = Object(P.x)(Boolean(a), i, "requiredConsentLetter", s)
                      , T = c.filter((function(e) {
                        return e.disclosureOnly
                    }
                    ))
                      , S = c.filter((function(e) {
                        return !e.disclosureOnly
                    }
                    )).filter((function(e) {
                        return "consent" === l ? e.requiringConsentVendors.length : e.legIntVendors.length
                    }
                    )).reduce((function(e, t, n, o) {
                        var r = function(e) {
                            return o.length - 1 === n ? e.purposesAndStacks : e
                        };
                        if (e.stackedPurposes[t._id])
                            return r(e);
                        var a = u.find((function(e) {
                            return e.childCategories.includes(t._id)
                        }
                        ));
                        if (x && a) {
                            var i = b({}, a, {
                                categories: o.filter((function(e) {
                                    return a.childCategories.includes(e._id)
                                }
                                ))
                            });
                            return e.purposesAndStacks.push(b({}, i, {
                                isStack: !0
                            })),
                            i.childCategories.forEach((function(t) {
                                return e.stackedPurposes[t] = !0
                            }
                            )),
                            r(e)
                        }
                        return e.purposesAndStacks.push(t),
                        r(e)
                    }
                    ), {
                        stackedPurposes: {},
                        purposesAndStacks: []
                    }).map((function(e) {
                        return e.isStack ? Object(y.h)("div", {
                            style: {
                                borderColor: i.backgroundColor
                            },
                            className: "type-box"
                        }, Object(y.h)(j.a, {
                            key: e._id,
                            settings: i,
                            child: "purposes",
                            language: s,
                            value: e,
                            titleContent: Object(y.h)(V, {
                                stack: e,
                                selected: l,
                                toggleStack: p,
                                language: s,
                                settings: i,
                                dev: a,
                                usePurModel: g,
                                neutralPm: f
                            }),
                            content: Object(y.h)(M, {
                                stack: e,
                                selected: l,
                                settings: i,
                                togglePurposeOrFeature: d,
                                toggleText: w,
                                toggleOffText: k,
                                language: s,
                                updateMe: o,
                                dev: a,
                                isCustom: "CUSTOM_STACK" === e.type,
                                usePurModel: g,
                                force: function() {
                                    return r(!o)
                                },
                                neutralPm: f,
                                vendors: h
                            }),
                            toggle: !1,
                            toggleStack: p,
                            force: function() {
                                return r(!o)
                            },
                            updateMe: o,
                            dev: a,
                            usePurModel: g,
                            neutralPm: f
                        })) : Object(y.h)("div", {
                            style: {
                                borderColor: i.backgroundColor
                            },
                            className: "type-box"
                        }, Object(y.h)(j.a, {
                            key: e._id,
                            settings: i,
                            name: Object(y.h)("span", null, e.name, "IAB_PURPOSE" !== e.type && Object(y.h)("span", {
                                tabIndex: "0",
                                className: "legend-key inline"
                            }, _), e.requireConsent && Object(y.h)("span", {
                                tabIndex: "0",
                                className: "legend-key inline required-consent"
                            }, L)),
                            description: e.description,
                            child: "purposes",
                            language: s,
                            value: e,
                            selected: l,
                            vendors: "consent" === l ? e.requiringConsentVendors : e.legIntVendors,
                            content: Object(y.h)(E, {
                                selected: l,
                                purpose: e,
                                language: s,
                                settings: i,
                                force: function() {
                                    return r(!o)
                                },
                                dev: a,
                                isCustom: "CUSTOM" === e.type,
                                vendors: h
                            }),
                            toggle: d,
                            updateMe: o,
                            dev: a,
                            usePurModel: g,
                            neutralPm: f
                        }))
                    }
                    ));
                    return Object(y.h)("div", {
                        className: "pm-main"
                    }, S, "consent" === l && m.length > 0 && Object(y.h)("div", {
                        style: {
                            borderColor: i.backgroundColor
                        },
                        className: "type-box"
                    }, m.map((function(e) {
                        return Object(y.h)(j.a, {
                            key: "special-purpose-" + e._id,
                            settings: i,
                            name: e.name,
                            child: "features",
                            language: s,
                            value: e,
                            vendors: e.vendors,
                            description: e.description,
                            content: Object(y.h)(FeatureContent, {
                                selected: l,
                                feature: e,
                                language: s,
                                settings: i,
                                force: function() {
                                    return r(!o)
                                },
                                dev: a,
                                isCustom: "CUSTOM" === e.type
                            }),
                            toggle: d,
                            dev: a,
                            usePurModel: g,
                            neutralPm: f
                        })
                    }
                    ))), "consent" === l && (v.length > 0 || T.length > 0) && Object(y.h)("div", {
                        style: {
                            borderColor: i.backgroundColor
                        },
                        className: "type-box"
                    }, Object(y.h)(I, {
                        dev: a,
                        specialPurposes: v,
                        disclosureOnlyPurposes: T,
                        language: s,
                        settings: i,
                        force: function() {
                            return r(!o)
                        },
                        updateMe: o,
                        usePurModel: g,
                        neutralPm: f
                    })), "consent" === l && C.length > 0 && Object(y.h)("div", {
                        style: {
                            borderColor: i.backgroundColor
                        },
                        className: "type-box"
                    }, Object(y.h)(B, {
                        dev: a,
                        features: C,
                        language: s,
                        settings: i,
                        force: function() {
                            return r(!o)
                        },
                        updateMe: o,
                        usePurModel: g
                    })))
                }
                return Object(y.h)(e, t)
            }
        }(function(e) {
            function t() {
                for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++)
                    o[r] = arguments[r];
                return (t = e.call.apply(e, [this].concat(o)) || this).state = {
                    forceUpdate: !0
                },
                t.force = function() {
                    return t.setState({
                        forceUpdate: !t.state.forceUpdate
                    })
                }
                ,
                t
            }
            var n, o;
            return o = e,
            (n = t).prototype = Object.create(o.prototype),
            n.prototype.constructor = n,
            v(n, o),
            t.prototype.render = function() {
                var e = this
                  , t = this.props
                  , n = t.consentOnlyStacks
                  , o = t.stacks
                  , r = t.purposes
                  , a = t.specialPurposes
                  , i = t.specialFeatures
                  , s = t.features
                  , c = t.vendors
                  , l = t.settings
                  , u = t.language
                  , p = t.selected
                  , d = t.dev
                  , g = t.usePurModel
                  , f = t.neutralPm
                  , h = t.useStacks
                  , b = Object(P.x)(Boolean(d), l, "toggleText", u)
                  , m = Object(P.x)(Boolean(d), l, "toggleOffText", u)
                  , v = Object(P.x)(Boolean(d), l, "customPurposesLetter", u)
                  , O = Object(P.x)(Boolean(d), l, "requiredConsentLetter", u)
                  , C = o.filter((function(e) {
                    return e.childCategories.length > 0
                }
                )).map((function(e) {
                    return e.categories = e.childCategories.map((function(e) {
                        return r.find((function(t) {
                            return t._id === e
                        }
                        ))
                    }
                    )).filter((function(e) {
                        return void 0 !== e && (!("consent" === p && e.requiringConsentVendors.length <= 0) && !("li" === p && e.legIntVendors.length <= 0))
                    }
                    )),
                    e
                }
                ))
                  , x = [];
                C.forEach((function(e) {
                    var t = e.categories.map((function(e) {
                        return e._id
                    }
                    ));
                    x = [].concat(x, t)
                }
                ));
                var w = ("li" !== p || !n) && h
                  , k = []
                  , _ = null
                  , L = r.filter((function(e) {
                    return !0 === e.disclosureOnly ? (k.push(e),
                    !1) : !("consent" === p && e.requiringConsentVendors.length <= 0) && (!("li" === p && e.legIntVendors.length <= 0) && (w && 1 === e.iabId ? (_ = e,
                    !1) : !w || !x.find((function(t) {
                        return t === e._id
                    }
                    ))))
                }
                ));
                return Object(y.h)("div", {
                    className: "pm-main"
                }, !0 === w && Object(y.h)("div", {
                    style: {
                        borderColor: l.backgroundColor
                    },
                    className: "type-box"
                }, null !== _ && Object(y.h)(j.a, {
                    key: "purpose-" + _._id,
                    settings: l,
                    name: Object(y.h)("span", null, _.name, "IAB_PURPOSE" !== _.type && Object(y.h)("span", {
                        tabIndex: "0",
                        className: "legend-key inline"
                    }, v), _.requireConsent && Object(y.h)("span", {
                        tabIndex: "0",
                        className: "legend-key inline required-consent"
                    }, O)),
                    description: _.description,
                    child: "purposes",
                    language: u,
                    value: _,
                    selected: p,
                    vendors: "consent" === p ? _.requiringConsentVendors : _.legIntVendors,
                    content: Object(y.h)(E, {
                        dev: d,
                        selected: p,
                        purpose: _,
                        language: u,
                        settings: l,
                        force: this.force,
                        isCustom: "CUSTOM" === _.type,
                        vendors: c
                    }),
                    toggle: this.props.togglePurposeOrFeature,
                    updateMe: this.state.forceUpdate,
                    dev: d,
                    usePurModel: g,
                    neutralPm: this.props.neutralPm
                }), C.length > 0 && C.map((function(t) {
                    return t.categories.length > 0 ? Object(y.h)(j.a, {
                        key: "stack-" + t._id,
                        settings: l,
                        child: "purposes",
                        language: u,
                        value: t,
                        titleContent: Object(y.h)(V, {
                            stack: t,
                            selected: p,
                            toggleStack: e.props.toggleStack,
                            language: u,
                            settings: l,
                            dev: d,
                            usePurModel: g,
                            neutralPm: f
                        }),
                        content: Object(y.h)(M, {
                            stack: t,
                            selected: p,
                            settings: l,
                            togglePurposeOrFeature: e.props.togglePurposeOrFeature,
                            toggleText: b,
                            toggleOffText: m,
                            language: u,
                            updateMe: e.state.forceUpdate,
                            dev: d,
                            isCustom: "CUSTOM" === t.type,
                            usePurModel: g,
                            force: e.force,
                            neutralPm: f,
                            vendors: c
                        }),
                        toggle: !1,
                        toggleStack: e.props.toggleStack,
                        force: e.force,
                        updateMe: e.state.forceUpdate,
                        dev: d,
                        usePurModel: g,
                        neutralPm: e.props.neutralPm
                    }) : null
                }
                ))), Object(y.h)("div", {
                    style: {
                        borderColor: l.backgroundColor
                    },
                    className: L && L.length > 0 ? "type-box" : ""
                }, L.map((function(t) {
                    return Object(y.h)(j.a, {
                        key: "purpose-" + t._id,
                        settings: l,
                        name: Object(y.h)("span", null, t.name, "IAB_PURPOSE" !== t.type && Object(y.h)("span", {
                            tabIndex: "0",
                            className: "legend-key inline"
                        }, v), t.requireConsent && Object(y.h)("span", {
                            tabIndex: "0",
                            className: "legend-key inline required-consent"
                        }, O)),
                        description: t.description,
                        child: "purposes",
                        language: u,
                        value: t,
                        selected: p,
                        vendors: "consent" === p ? t.requiringConsentVendors : t.legIntVendors,
                        content: Object(y.h)(E, {
                            selected: p,
                            purpose: t,
                            language: u,
                            settings: l,
                            force: e.force,
                            dev: d,
                            isCustom: "CUSTOM" === t.type,
                            vendors: c
                        }),
                        toggle: e.props.togglePurposeOrFeature,
                        updateMe: e.state.forceUpdate,
                        dev: d,
                        usePurModel: g,
                        neutralPm: e.props.neutralPm
                    })
                }
                ))), "consent" === p && i.length > 0 && Object(y.h)("div", {
                    style: {
                        borderColor: l.backgroundColor
                    },
                    className: "type-box"
                }, i.map((function(t) {
                    return Object(y.h)(j.a, {
                        key: "special-purpose-" + t._id,
                        settings: l,
                        name: t.name,
                        child: "features",
                        language: u,
                        value: t,
                        vendors: t.vendors,
                        description: t.description,
                        content: Object(y.h)(F, {
                            selected: p,
                            feature: t,
                            language: u,
                            settings: l,
                            force: e.force,
                            dev: d,
                            isCustom: "CUSTOM" === t.type
                        }),
                        toggle: e.props.togglePurposeOrFeature,
                        dev: d,
                        usePurModel: g,
                        neutralPm: e.props.neutralPm
                    })
                }
                ))), "consent" === p && (a.length > 0 || k.length > 0) && Object(y.h)("div", {
                    style: {
                        borderColor: l.backgroundColor
                    },
                    className: "type-box"
                }, Object(y.h)(I, {
                    dev: d,
                    specialPurposes: a,
                    disclosureOnlyPurposes: k,
                    language: u,
                    settings: l,
                    force: this.force,
                    updateMe: this.state.forceUpdate,
                    usePurModel: g,
                    neutralPm: this.props.neutralPm
                })), "consent" === p && s.length > 0 && Object(y.h)("div", {
                    style: {
                        borderColor: l.backgroundColor
                    },
                    className: "type-box"
                }, Object(y.h)(B, {
                    dev: d,
                    features: s,
                    language: u,
                    settings: l,
                    force: this.force,
                    updateMe: this.state.forceUpdate,
                    usePurModel: g
                })))
            }
            ,
            t
        }(O.Component))
    },
    "4Q1r": function(e, t, n) {
        "use strict";
        function o(e, t) {
            return (o = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        n.d(t, "a", (function() {
            return l
        }
        ));
        var r = n("2mXy")
          , a = n("FdF9")
          , i = n("5ehb")
          , s = n("eeaA")
          , c = n("o1E3")
          , l = function(e) {
            function t() {
                for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++)
                    o[r] = arguments[r];
                return (t = e.call.apply(e, [this].concat(o)) || this).state = {
                    open: !1,
                    consentAll: !1,
                    liAll: !1
                },
                t.toggleAccordion = function() {
                    var e = t.content
                      , n = !t.state.open;
                    t.setState({
                        open: n
                    }, t.props.force),
                    e.style.maxHeight = n ? e.scrollHeight + "px" : null
                }
                ,
                t.toggleConsentAll = function() {
                    t.setState({
                        consentAll: !t.state.consentAll
                    }, t.props.force)
                }
                ,
                t.toggleLiAll = function() {
                    t.setState({
                        liAll: !t.state.liAll
                    }, t.props.force)
                }
                ,
                t.openLink = function() {
                    return window.open(t.props.vendor.policyUrl, "_blank")
                }
                ,
                t
            }
            var n, a;
            a = e,
            (n = t).prototype = Object.create(a.prototype),
            n.prototype.constructor = n,
            o(n, a);
            var l = t.prototype;
            return l.shouldComponentUpdate = function(e, t) {
                var n = this.content;
                n && t.open && (n.style.maxHeight = n.scrollHeight + "px")
            }
            ,
            l.render = function() {
                var e = this
                  , t = this.props
                  , n = t.purpose
                  , o = t.selected
                  , a = t.settings
                  , l = t.togglePurposeOrFeature
                  , u = t.toggleText
                  , p = t.toggleOffText
                  , d = t.language
                  , g = t.force
                  , f = t.dev
                  , h = t.parentAccordionOpen
                  , b = t.usePurModel
                  , m = t.vendors
                  , v = this.state
                  , y = v.open
                  , O = v.consentAll
                  , j = v.liAll
                  , C = function(e, t) {
                    return !!m && Boolean(e.map((function(e) {
                        return e.vendorId
                    }
                    )).map((function(e) {
                        return m.find((function(t) {
                            return t.vendorId === e
                        }
                        ))
                    }
                    )).some((function(e) {
                        return e[t]
                    }
                    )))
                }
                  , x = Object(c.x)(Boolean(f), a, "viewAllText", d)
                  , w = Object(c.x)(Boolean(f), a, "viewLessText", d)
                  , k = Object(c.x)(Boolean(f), a, "otherText", d)
                  , P = Object(c.x)(Boolean(f), a, "otherLetter", d)
                  , _ = Object(c.x)(Boolean(f), a, "customPurposesLetter", d)
                  , L = Object(c.x)(Boolean(f), a, "vendorTitleText", d)
                  , T = Object(c.x)(Boolean(f), a, "appleDataBrokerText", d)
                  , S = Object(c.x)(Boolean(f), a, "appleDataBrokerLetter", d)
                  , N = C(n.requiringConsentVendors, "isApple")
                  , I = Object(c.x)(Boolean(f), a, "customVendorLabel1Text", d)
                  , A = Object(c.x)(Boolean(f), a, "customVendorLabel2Text", d)
                  , B = Object(c.x)(Boolean(f), a, "customVendorLabel3Text", d)
                  , D = Object(c.x)(Boolean(f), a, "customVendorLabel1Letter", d)
                  , E = Object(c.x)(Boolean(f), a, "customVendorLabel2Letter", d)
                  , F = Object(c.x)(Boolean(f), a, "customVendorLabel3Letter", d)
                  , V = C(n.requiringConsentVendors, "isCustomVendorLabel1")
                  , M = C(n.requiringConsentVendors, "isCustomVendorLabel2")
                  , R = C(n.requiringConsentVendors, "isCustomVendorLabel3")
                  , U = h ? 0 : -1
                  , H = function() {
                    return Object(r.h)("div", {
                        style: {
                            display: "contents"
                        }
                    }, Object(r.h)("div", {
                        className: "legend"
                    }, Object(r.h)("span", {
                        tabIndex: "0",
                        className: "legend-key"
                    }, P), Object(r.h)("h2", {
                        class: "custom-header"
                    }, k), N && Object(r.h)("span", {
                        tabIndex: "0",
                        className: "legend-key apple-broker"
                    }, S), N && T, V && Object(r.h)("span", {
                        tabIndex: "0",
                        className: "legend-key is-custom-vendor-label-1"
                    }, D), V && I, M && Object(r.h)("span", {
                        tabIndex: "0",
                        className: "legend-key is-custom-vendor-label-2"
                    }, E), M && A, R && Object(r.h)("span", {
                        className: "legend-key is-custom-vendor-label-3",
                        "aria-hidden": !0
                    }, F), R && B))
                };
                return Object(r.h)("div", {
                    className: "toggle-purpose"
                }, Object(r.h)("div", {
                    className: "stack-row",
                    style: {
                        position: "relative"
                    }
                }, Object(r.h)("button", {
                    "aria-expanded": String(y),
                    tabIndex: U,
                    className: y ? "opener active" : "opener",
                    onClick: this.toggleAccordion
                }, Object(r.h)("span", {
                    className: "plusminus"
                }, y ? "-" : "+"), Object(r.h)("span", null, n.name, "CUSTOM" === n.type && Object(r.h)("span", {
                    tabIndex: "0",
                    className: "legend-key inline"
                }, _))), l && Object(r.h)(s.a, {
                    tabbable: 0 == U,
                    type: a.toggleType,
                    color: a.toggleColor,
                    colorActive: a.toggleActiveColor,
                    offColor: a.toggleOffColor,
                    offActiveColor: a.toggleOffActiveColor,
                    text: u,
                    offText: p,
                    toggle: l,
                    child: "purposes",
                    vendors: "consent" === o ? n.requiringConsentVendors : n.legIntVendors,
                    value: n,
                    legInt: "li" === o,
                    checked: "li" === o ? n.legInt : n.active,
                    usePurModel: b
                })), Object(r.h)("div", {
                    ref: function(t) {
                        return e.content = t
                    },
                    className: "main"
                }, Object(r.h)("p", {
                    tabIndex: y ? "0" : "-1",
                    className: "sub-purpose-description"
                }, Object(c.h)(n.description)), "consent" === o && Object(r.h)("div", {
                    className: "inner-main"
                }, Object(r.h)("div", {
                    style: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between"
                    }
                }, n.requiringConsentVendors.length, " ", L, H()), n.requiringConsentVendors.slice(0, O ? n.requiringConsentVendors.length : 3).map((function(e) {
                    return Object(r.h)(i.a, {
                        vendor: e,
                        key: e.vendorId,
                        language: d,
                        settings: a,
                        force: g,
                        accordionOpen: y,
                        isApple: C([e], "isApple"),
                        isCustomVendorLabel1: C([e], "isCustomVendorLabel1"),
                        isCustomVendorLabel2: C([e], "isCustomVendorLabel2"),
                        isCustomVendorLabel3: C([e], "isCustomVendorLabel3"),
                        appleDataBrokerLetter: S,
                        customVendorLabel1Letter: D,
                        customVendorLabel2Letter: E,
                        customVendorLabel3Letter: F
                    })
                }
                )), n.requiringConsentVendors.length > 3 ? Object(r.h)("div", {
                    tabindex: y ? "0" : "-1",
                    className: "view-all",
                    role: "button",
                    onClick: this.toggleConsentAll,
                    onKeyDown: function(t) {
                        return Object(c.s)(t.key) && e.toggleConsentAll()
                    }
                }, O ? w : x) : null), "li" === o && Object(r.h)("div", {
                    className: "inner-main"
                }, Object(r.h)("div", {
                    style: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between"
                    }
                }, Object(r.h)("div", {
                    className: "pv-title"
                }, n.legIntVendors.length, " ", L), H()), n.legIntVendors.slice(0, j ? n.legIntVendors.length : 3).map((function(e) {
                    return Object(r.h)(i.a, {
                        vendor: e,
                        key: e.vendorId,
                        language: d,
                        settings: a,
                        force: g,
                        accordionOpen: y,
                        isApple: C([e], "isApple"),
                        isCustomVendorLabel1: C([e], "isCustomVendorLabel1"),
                        isCustomVendorLabel2: C([e], "isCustomVendorLabel2"),
                        isCustomVendorLabel3: C([e], "isCustomVendorLabel3"),
                        appleDataBrokerLetter: S,
                        customVendorLabel1Letter: D,
                        customVendorLabel2Letter: E,
                        customVendorLabel3Letter: F
                    })
                }
                )), n.legIntVendors.length > 3 ? Object(r.h)("div", {
                    tabindex: "0",
                    className: "view-all",
                    role: "button",
                    onClick: this.toggleLiAll
                }, j ? w : x) : null)))
            }
            ,
            t
        }(a.Component)
    },
    "4Y0j": function(e, t, n) {
        "use strict";
        function o() {
            return (o = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n)
                        ({}).hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            }
            ).apply(null, arguments)
        }
        n.d(t, "a", (function() {
            return r
        }
        )),
        n.d(t, "b", (function() {
            return a
        }
        ));
        var r = function(e) {
            void 0 === e && (e = {}),
            o(this, {
                backgroundColor: "#ffffff",
                accordionsSpacing: {
                    paddingLeft: 20,
                    paddingRight: 40,
                    paddingTop: 16,
                    paddingBottom: 16
                },
                accordionsFont: {
                    fontSize: 13,
                    fontWeight: "500",
                    color: "#000000",
                    fontFamily: "arial, helvetica, sans-serif"
                },
                panelSpacing: {
                    paddingLeft: 20,
                    paddingRight: 20,
                    paddingTop: 5,
                    paddingBottom: 20
                },
                panelFont: {
                    fontSize: 13,
                    fontWeight: "400",
                    color: "#555555",
                    fontFamily: "arial, helvetica, sans-serif"
                },
                toggleColor: "#47d747",
                toggleOffColor: "#cccccc",
                toggleNeutralColor: "#FFA800",
                customPurposesText: "Custom Purposes",
                customPurposesLetter: "C",
                specialPurposesText: "Special Purposes",
                specialPurposesInfo: "We have a need to use your data for this processing purpose that is required for us to deliver services to you.",
                liText: "Manage Settings",
                liInfo: "We also work with some partners on the basis of legitimate interest and other legal bases without consent.",
                purposeVendorTitle: "Vendors",
                featuresText: "Features",
                featuresInfo: "Features are a use of the data that you have already agreed to share with us",
                iabConsent: "Consent Purposes",
                iabLegInt: "Legitimate Interest Purposes",
                iabFeatures: "Features",
                iabSpecialFeatures: "Special Features",
                iabSpecialPurposes: "Special Purposes",
                disclosurePurposes: "Disclosure Purposes",
                alphabetizeVendors: !1,
                vendorsText: "View All Providers",
                vendorsInfo: "You can find a list of all third-party providers.",
                searchText: "Search Site Vendors",
                otherText: "Other Site Vendors",
                otherLetter: "O",
                cookieText: "Cookie Information",
                tableCategoryText: "Category",
                tableCookieText: "Cookie",
                tableDomainText: "Domain",
                tableDurationText: "Duration",
                viewAllText: "View All",
                viewLessText: "View Less",
                toggleOnText: "",
                toggleOffText: "",
                minHeight: {
                    type: "auto",
                    value: 1
                },
                maxHeight: {
                    type: "px",
                    value: 400
                },
                languages: {},
                selectedLanguage: "",
                link: {
                    fontWeight: "400",
                    color: "#1890ff",
                    textDecoration: "underline"
                },
                hover: {
                    fontWeight: "400",
                    color: "#1890ff",
                    textDecoration: "underline"
                },
                appleDataBrokerText: "Apple Data Broker",
                appleDataBrokerLetter: "A",
                customVendorLabel1Text: "Label 1",
                customVendorLabel1Letter: "1",
                customVendorLabel2Text: "Label 2",
                customVendorLabel2Letter: "2",
                customVendorLabel3Text: "Label 3",
                customVendorLabel3Letter: "3",
                purposesTableHeaderText: "Purposes",
                retentionTableHeaderText: "Retention",
                purposeTitleText: "Purposes",
                privacyPolicyTitleText: "Privacy Policy",
                legitIntUrlTitleText: "URL disclosing legitimate interest",
                dataCategoriesTitleText: "Categories of data collected/processed",
                magnifyingGlassIconColor: "#000",
                arrowIconColor: "#000"
            }),
            o(this, e)
        }
          , a = {
            color: {
                backgroundColor: {
                    title: "Background Color",
                    type: "ColorPicker"
                }
            },
            height: {
                minHeight: {
                    title: "Min Scroll Height",
                    type: "Size"
                },
                maxHeight: {
                    title: "Max Scroll Height",
                    type: "Size"
                }
            },
            accordions: {
                accordionsSpacing: {
                    title: "Padding",
                    type: "Padding"
                },
                accordionsFont: {
                    title: "Font",
                    type: "Font"
                }
            },
            panel: {
                panelSpacing: {
                    title: "Padding",
                    type: "Padding"
                },
                panelFont: {
                    title: "Font",
                    type: "Font"
                }
            },
            "purpose content": {
                arrowIconColor: {
                    title: "Vendor Tag Arrow Color",
                    type: "ColorPicker"
                },
                customPurposesText: {
                    title: "Custom",
                    type: "InputLanguage"
                },
                customPurposesLetter: {
                    title: "Custom Icon",
                    type: "InputLanguage"
                },
                specialPurposesText: {
                    title: "Spec. Purposes",
                    type: "InputLanguage"
                },
                specialPurposesInfo: {
                    title: "Spec. Purposes Info",
                    type: "InputLanguage"
                },
                liText: {
                    title: "Leg. Interest",
                    type: "InputLanguage"
                },
                liInfo: {
                    title: "Leg. Interest Info",
                    type: "InputLanguage"
                }
            },
            "feature content": {
                featuresText: {
                    title: "Features",
                    type: "InputLanguage"
                },
                featuresInfo: {
                    title: "Features Info",
                    type: "InputLanguage"
                }
            },
            "vendor content": {
                arrowIconColor: {
                    title: "Vendor Tag Arrow Color",
                    type: "ColorPicker"
                },
                magnifyingGlassIconColor: {
                    title: "Magnifying Glass Icon Color",
                    type: "ColorPicker"
                },
                consentDisclosure: {
                    title: "Consent Signal Storage Disclosure",
                    type: "InputLanguage"
                },
                alphabetizeVendors: {
                    title: "Sort Vendors Alphabetically?",
                    type: "Switch"
                },
                vendorsText: {
                    title: "Vendors",
                    type: "InputLanguage"
                },
                vendorsInfo: {
                    title: "Vendors Info",
                    type: "InputLanguage"
                },
                purposeVendorTitle: {
                    title: "Vendor Title",
                    type: "InputLanguage"
                },
                searchText: {
                    title: "Search",
                    type: "InputLanguage"
                },
                otherText: {
                    title: "Others",
                    type: "InputLanguage"
                },
                otherLetter: {
                    title: "Other Icon",
                    type: "InputLanguage"
                },
                appleDataBrokerText: {
                    title: "Apple Data Broker Description",
                    type: "InputLanguage"
                },
                appleDataBrokerLetter: {
                    title: "Apple Data Broker Icon",
                    type: "InputLanguage"
                },
                customVendorLabel1Text: {
                    title: "Custom Label 1 Description",
                    type: "InputLanguage"
                },
                customVendorLabel1Letter: {
                    title: "Custom Label 1 Icon",
                    type: "InputLanguage"
                },
                customVendorLabel2Text: {
                    title: "Custom Label 2 Description",
                    type: "InputLanguage"
                },
                customVendorLabel2Letter: {
                    title: "Custom Label 2 Icon",
                    type: "InputLanguage"
                },
                customVendorLabel3Text: {
                    title: "Custom Label 3 Description",
                    type: "InputLanguage"
                },
                customVendorLabel3Letter: {
                    title: "Custom Label 3 Icon",
                    type: "InputLanguage"
                },
                purposeTitleText: {
                    title: "Purposes Title",
                    type: "InputLanguage"
                },
                purposesTableHeaderText: {
                    title: "Purposes Table Header",
                    type: "InputLanguage"
                },
                retentionTableHeaderText: {
                    title: "Retention Table Header",
                    type: "InputLanguage"
                },
                privacyPolicyTitleText: {
                    title: "Privacy Policy",
                    type: "InputLanguage"
                },
                legitIntUrlTitleText: {
                    title: "Legitimate Interest URL Title",
                    type: "InputLanguage"
                },
                dataCategoriesTitleText: {
                    title: "Categories of data collected/processed",
                    type: "InputLanguage"
                },
                disclosurePurposes: {
                    title: "Disclosure Purposes",
                    type: "InputLanguage"
                }
            },
            "IAB Categories": {
                iabConsent: {
                    title: "Consent Purposes",
                    type: "InputLanguage"
                },
                iabLegInt: {
                    title: "Legitimate Interest Purposes",
                    type: "InputLanguage"
                },
                iabFeatures: {
                    title: "Features",
                    type: "InputLanguage"
                },
                iabSpecialFeatures: {
                    title: "Special Features",
                    type: "InputLanguage"
                },
                iabSpecialPurposes: {
                    title: "Special Purposes",
                    type: "InputLanguage"
                }
            },
            "cookie content": {
                cookieText: {
                    title: "Cookie Info",
                    type: "InputLanguage"
                },
                tableCategoryText: {
                    title: "Category",
                    type: "InputLanguage"
                },
                tableCookieText: {
                    title: "Cookie",
                    type: "InputLanguage"
                },
                tableDomainText: {
                    title: "Domain",
                    type: "InputLanguage"
                },
                tableDurationText: {
                    title: "Duration",
                    type: "InputLanguage"
                }
            },
            "general content": {
                viewAllText: {
                    title: "View All",
                    type: "InputLanguage"
                },
                viewLessText: {
                    title: "View Less",
                    type: "InputLanguage"
                }
            },
            "toggle settings": {
                toggleColor: {
                    title: "ON Color",
                    type: "ColorPicker"
                },
                toggleOffColor: {
                    title: "OFF Color",
                    type: "ColorPicker"
                },
                toggleNeutralColor: {
                    title: "Neutral Color",
                    type: "ColorPicker"
                },
                toggleOnText: {
                    title: "Toggle ON Text",
                    type: "InputLanguage"
                },
                toggleOffText: {
                    title: "Toggle OFF Text",
                    type: "InputLanguage"
                }
            },
            links: {
                link: {
                    title: "Link Style",
                    type: "Links"
                },
                hover: {
                    title: "Hover Style",
                    type: "Links"
                }
            }
        }
    },
    "5Hd3": function(e, t, n) {
        e.exports = n.p + "a4e6bfc7a854c6ebc18a33b694e9dc37.svg"
    },
    "5QLj": function() {},
    "5ehb": function(e, t, n) {
        "use strict";
        function o(e, t) {
            return (o = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        n.d(t, "a", (function() {
            return p
        }
        ));
        var r = n("RSKk")
          , a = n("2mXy")
          , i = n("FdF9")
          , s = n("HbQw")
          , c = n.n(s)
          , l = n("o1E3")
          , u = function(e) {
            var t = e.vendor
              , n = e.arrowIconColor;
            return Object(a.h)("a", {
                href: t.policyUrl,
                target: "_blank",
                className: "vendor-tag linked"
            }, Object(a.h)("span", null, t.name), Object(a.h)("img", {
                style: Object(r.a)(n),
                src: c.a,
                alt: t.name
            }))
        }
          , p = function(e) {
            function t() {
                for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++)
                    o[r] = arguments[r];
                return (t = e.call.apply(e, [this].concat(o)) || this).state = {
                    open: !1
                },
                t.toggleAccordion = function() {
                    t.setState({
                        open: !t.state.open
                    }, t.props.force)
                }
                ,
                t.openLink = function() {
                    return window.open(t.props.vendor.policyUrl, "_blank")
                }
                ,
                t
            }
            var n, i;
            return i = e,
            (n = t).prototype = Object.create(i.prototype),
            n.prototype.constructor = n,
            o(n, i),
            t.prototype.render = function() {
                var e = this
                  , t = this.props
                  , n = t.vendor
                  , o = t.settings
                  , i = t.language
                  , s = t.dev
                  , p = t.accordionOpen
                  , d = t.isSpecialPurpose
                  , g = t.isApple
                  , f = t.isCustomVendorLabel1
                  , h = t.isCustomVendorLabel2
                  , b = t.isCustomVendorLabel3
                  , m = t.appleDataBrokerLetter
                  , v = t.customVendorLabel1Letter
                  , y = t.customVendorLabel2Letter
                  , O = t.customVendorLabel3Letter
                  , j = this.state.open
                  , C = n.cookies ? n.cookies.length : 0
                  , x = n.cookies || []
                  , w = Object(l.x)(Boolean(s), o, "cookieText", i)
                  , k = Object(l.x)(Boolean(s), o, "tableCookieText", i)
                  , P = Object(l.x)(Boolean(s), o, "tableDomainText", i)
                  , _ = Object(l.x)(Boolean(s), o, "tableDurationText", i)
                  , L = Object(l.x)(Boolean(s), o, "otherLetter", i);
                return Object(a.h)("div", {
                    className: "toggle-vendor"
                }, Object(a.h)("div", {
                    style: {
                        position: "relative"
                    }
                }, Object(a.h)("button", {
                    role: C ? "" : "link",
                    tabIndex: p || void 0 === p ? 0 : -1,
                    "aria-expanded": !!C && (j ? "true" : "false"),
                    className: j ? "expand active" : "expand",
                    onClick: C > 0 ? this.toggleAccordion : this.openLink
                }, C > 0 ? Object(a.h)("span", {
                    className: "plusminus"
                }, j ? "-" : "+") : Object(a.h)("img", {
                    style: Object(r.a)(o.arrowIconColor),
                    src: c.a,
                    alt: ""
                }), Object(a.h)("span", {
                    style: {
                        padding: "0 5px"
                    }
                }, n.name), "IAB" !== n.vendorType && !d && Object(a.h)("span", {
                    tabIndex: "0",
                    className: "legend-key"
                }, L), C > 0 ? Object(a.h)("span", {
                    style: {
                        marginLeft: "5px"
                    }
                }, "(", C, " ", w, ")") : null, g && Object(a.h)("span", {
                    className: "legend-key apple-broker"
                }, m), f && Object(a.h)("span", {
                    className: "legend-key is-custom-vendor-label-1",
                    "aria-hidden": !0
                }, v), h && Object(a.h)("span", {
                    className: "legend-key is-custom-vendor-label-2",
                    "aria-hidden": !0
                }, y), b && Object(a.h)("span", {
                    className: "legend-key is-custom-vendor-label-3",
                    "aria-hidden": !0
                }, O))), Object(a.h)("div", {
                    ref: function(t) {
                        return e.content = t
                    },
                    style: {
                        display: j ? "block" : "none"
                    },
                    id: n.name,
                    className: "content"
                }, Object(a.h)("div", {
                    className: "inner-content"
                }, Object(a.h)(u, {
                    vendor: n,
                    arrowIconColor: o.arrowIconColor
                }), C > 0 ? Object(a.h)("table", {
                    className: "tvtbl"
                }, Object(a.h)("tr", null, Object(a.h)("th", {
                    scope: "col",
                    tabIndex: "0"
                }, k), Object(a.h)("th", {
                    scope: "col",
                    tabIndex: "0"
                }, P), Object(a.h)("th", {
                    scope: "col",
                    tabIndex: "0"
                }, _)), x.map((function(e) {
                    return Object(a.h)("tr", null, Object(a.h)("td", {
                        tabIndex: "0"
                    }, Object(a.h)("span", null, e.name)), Object(a.h)("td", {
                        tabIndex: "0"
                    }, e.domain), Object(a.h)("td", {
                        tabIndex: "0"
                    }, Object(a.h)("span", null, e.cookieLifeSpan)))
                }
                ))) : null)))
            }
            ,
            t
        }(i.Component)
    },
    "5oGf": function(e, t, n) {
        "use strict";
        function o(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, o)
            }
            return n
        }
        function r(e, t, n) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" != typeof e || !e)
                        return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var o = n.call(e, t || "default");
                        if ("object" != typeof o)
                            return o;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" == typeof t ? t : t + ""
            }(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        n.d(t, "c", (function() {
            return s
        }
        )),
        n.d(t, "e", (function() {
            return c
        }
        )),
        n.d(t, "a", (function() {
            return l
        }
        )),
        n.d(t, "b", (function() {
            return u
        }
        )),
        n.d(t, "f", (function() {
            return p
        }
        )),
        n.d(t, "g", (function() {
            return d
        }
        )),
        n.d(t, "d", (function() {
            return g
        }
        ));
        n("2mXy");
        var a = n("FdF9")
          , i = n("gm8T")
          , s = (n("o1E3"),
        function(e, t) {
            t = t || {
                hover: {}
            };
            var n = JSON.stringify(e)
              , i = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? o(Object(n), !0).forEach((function(t) {
                        r(e, t, n[t])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }({}, t.hover)
              , s = Object(a.useState)("")
              , c = s[0]
              , l = s[1];
            return Object(a.useEffect)((function() {
                var e = "";
                t.current !== n && t.highlight !== n || (e += " on-active"),
                l(e)
            }
            ), [t.current, t.highlight, n]),
            {
                devActions: i,
                devClass: c,
                pathString: n
            }
        }
        )
          , c = function() {
            for (var e = Object(a.useContext)(i.g), t = arguments.length, n = new Array(t), o = 0; o < t; o++)
                n[o] = arguments[o];
            Object(a.useEffect)(e, n)
        }
          , l = function(e, t) {
            e && e.current && t && setTimeout((function() {
                for (var n, o = e.current.getBoundingClientRect(), r = o.left, s = o.right, c = t.getBoundingClientRect(), l = c.right, u = c.left, p = 0; p < t.children.length; p++) {
                    var d = t.children[p];
                    "switch" === d.getAttribute("role") && (n = d)
                }
                u < r ? (t.classList.remove("focusable"),
                n && n.classList.remove("focusable")) : l > s ? (t.classList.remove("focusable"),
                n && n.classList.remove("focusable")) : (t.classList.add("focusable"),
                n && n.classList.add("focusable")),
                Object(a.useContext)(i.g)()
            }
            ), 100)
        }
          , u = function(e, t) {
            var n = Object(a.useState)(0)
              , o = n[0]
              , r = n[1]
              , i = Object(a.useState)(!1)
              , s = i[0]
              , c = i[1]
              , l = Object(a.useState)(!1)
              , u = l[0]
              , p = l[1];
            Object(a.useEffect)((function() {
                t.current && e.current && setTimeout((function() {
                    for (var n = e.current.getBoundingClientRect(), r = n.left, a = n.right, i = t.current.children, s = 0; s < i.length; s++) {
                        var l = i[s].getBoundingClientRect()
                          , u = l.right;
                        if (l.left < r && p(!0),
                        u > a)
                            return c(!0),
                            void (o >= 0 && p(!1))
                    }
                    c(!1)
                }
                ), 100)
            }
            ), [o]);
            return {
                state: [o, function(n) {
                    return function(a) {
                        if ((13 === a.keyCode || void 0 === a.keyCode) && t.current && e.current) {
                            var i = function() {
                                var a = e.current.getBoundingClientRect()
                                  , i = a.left
                                  , s = a.right;
                                if ("left" === n) {
                                    if (o > 10)
                                        return {
                                            v: void 0
                                        };
                                    for (var c = t.current.children, l = function(e) {
                                        var t = c[e]
                                          , n = t.getBoundingClientRect().left;
                                        if (n < i)
                                            return r((function(e) {
                                                var o = Math.abs(i - n) + e + t.offsetWidth / 2;
                                                return o > 5 ? 5 : o
                                            }
                                            )),
                                            {
                                                v: {
                                                    v: void 0
                                                }
                                            }
                                    }, u = c.length - 1; u >= 0; u--) {
                                        var p = l(u);
                                        if ("object" == typeof p)
                                            return p.v
                                    }
                                } else if ("right" === n) {
                                    if (t.current.getBoundingClientRect().right / s < .75)
                                        return {
                                            v: void 0
                                        };
                                    for (var d = t.current.children, g = function(e) {
                                        var t = d[e]
                                          , n = t.getBoundingClientRect().right;
                                        if (n > s)
                                            return r((function(e) {
                                                return e - Math.abs(s - n) - t.offsetWidth / 2
                                            }
                                            )),
                                            {
                                                v: {
                                                    v: void 0
                                                }
                                            }
                                    }, f = 0; f < d.length; f++) {
                                        var h = g(f);
                                        if ("object" == typeof h)
                                            return h.v
                                    }
                                }
                            }();
                            if ("object" == typeof i)
                                return i.v
                        }
                    }
                }
                ],
                canGoRight: s,
                canGoLeft: u,
                resetAdjustment: function() {
                    return r(5)
                }
            }
        }
          , p = function(e) {
            return void 0 === e && (e = function() {}
            ),
            function() {
                var t = Object(a.useContext)(i.b)
                  , n = t.devOnClick
                  , o = t.dev;
                return o ? n.apply(void 0, arguments) : e.apply(void 0, arguments)
            }
        }
          , d = function(e) {
            return function(t) {
                var n = Object(a.useContext)(i.e);
                return Object(a.useContext)(i.b).dev ? e && e.languages && e.selectedLanguage && "object" == typeof e.languages[e.selectedLanguage] && e.languages[e.selectedLanguage][t] ? e.languages[e.selectedLanguage][t] : e.languages && e.languages[n] && e.languages[n][t] || e[t] : e && e.languages && e.languages[n] && e.languages[n][t] || e[t]
            }
        }
          , g = function(e, t, n) {
            var o = function() {
                var o = e.current
                  , r = t.current
                  , a = n.current;
                if (o && r && a) {
                    var i = o.clientHeight
                      , s = r.scrollHeight
                      , c = a.scrollHeight
                      , l = .5 * i;
                    s > l && c > l ? (r.style.flexShrink = "0",
                    a.style.flexShrink = "0",
                    r.style.flexBasis = "55%",
                    a.style.flexBasis = "45%") : (r.style.flexBasis = "auto",
                    a.style.flexBasis = "auto",
                    r.style.flexShrink = s > l ? "1" : "0",
                    a.style.flexShrink = s + c > i ? "1" : "0")
                }
            };
            return Object(a.useEffect)((function() {
                return o(),
                window.addEventListener("resize", o),
                function() {
                    return window.removeEventListener("resize", o)
                }
            }
            ), []),
            {
                parentRef: e,
                firstChildRef: t,
                secondChildRef: n
            }
        }
    },
    "6Ln/": function(e, t, n) {
        "use strict";
        function o() {
            return (o = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n)
                        ({}).hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            }
            ).apply(null, arguments)
        }
        function r(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, o)
            }
            return n
        }
        function a(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? r(Object(n), !0).forEach((function(t) {
                    i(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function i(e, t, n) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" != typeof e || !e)
                        return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var o = n.call(e, t || "default");
                        if ("object" != typeof o)
                            return o;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" == typeof t ? t : t + ""
            }(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        n.d(t, "a", (function() {
            return c
        }
        ));
        var s = n("4Y0j")
          , c = function(e) {
            void 0 === e && (e = {}),
            o(this, a({}, new s.a(e), {
                neutralButtonBackgroundColor: "gray",
                neutralButtonFontColor: "white",
                onButtonBackgroundColor: "green",
                onButtonFontColor: "white",
                onButtonText: "Accept",
                offButtonBackgroundColor: "red",
                offButtonFontColor: "white",
                offButtonText: "Reject",
                requiredConsentText: "Required For Consent",
                requiredConsentLetter: "R"
            }), e)
        };
        a({}, s.b, {
            "toggle settings": {
                neutralButtonBackgroundColor: {
                    title: "Neutral Button Background Color",
                    type: "ColorPicker"
                },
                neutralButtonFontColor: {
                    title: "Neutral Button Font Color",
                    type: "ColorPicker"
                },
                onButtonBackgroundColor: {
                    title: "On Button Background Color",
                    type: "ColorPicker"
                },
                onButtonFontColor: {
                    title: "ON Button Font Color",
                    type: "ColorPicker"
                },
                onButtonText: {
                    title: "ON Button Text",
                    type: "InputLanguage"
                },
                offButtonBackgroundColor: {
                    title: "Off Button Background Color",
                    type: "ColorPicker"
                },
                offButtonFontColor: {
                    title: "Off Button Font Color",
                    type: "ColorPicker"
                },
                offButtonText: {
                    title: "Off Button Text!",
                    type: "InputLanguage"
                },
                requiredConsentText: {
                    title: "Required Consent Tag Text",
                    type: "InputLanguage"
                }
            },
            "purpose content": a({}, s.b["purpose content"], {
                requiredConsentText: {
                    title: "Required Consent",
                    type: "InputLanguage"
                },
                requiredConsentLetter: {
                    title: "Custom Icon",
                    type: "InputLanguage"
                }
            })
        })
    },
    "78X1": function(e, t, n) {
        "use strict";
        function o(e, t) {
            return (o = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function r() {
            return (r = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n)
                        ({}).hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            }
            ).apply(null, arguments)
        }
        function a() {
            return (a = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n)
                        ({}).hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            }
            ).apply(null, arguments)
        }
        function i(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, o)
            }
            return n
        }
        function s(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? i(Object(n), !0).forEach((function(t) {
                    c(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function c(e, t, n) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" != typeof e || !e)
                        return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var o = n.call(e, t || "default");
                        if ("object" != typeof o)
                            return o;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" == typeof t ? t : t + ""
            }(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function l(e, t) {
            return (l = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        var u = n("2mXy")
          , p = n("FdF9")
          , d = n("o1E3")
          , g = function(e) {
            function t() {
                return e.apply(this, arguments) || this
            }
            var n, r;
            return r = e,
            (n = t).prototype = Object.create(r.prototype),
            n.prototype.constructor = n,
            o(n, r),
            t.prototype.render = function() {
                var e = this
                  , t = this.props
                  , n = t.checked
                  , o = t.value
                  , r = t.dev
                  , a = t.settings
                  , i = t.language
                  , s = t.page
                  , c = n ? a.toggleColor : a.toggleOffColor
                  , l = Object(d.x)(Boolean(r), a, "toggleOnText", i)
                  , p = Object(d.x)(Boolean(r), a, "toggleOffText", i)
                  , g = l || p ? " has-text" : ""
                  , f = n ? "cat-switch checked" + g : "cat-switch" + g;
                return Object(u.h)("button", {
                    className: f,
                    "aria-label": btnText,
                    tabIndex: "0",
                    type: "button",
                    role: "switch",
                    "aria-checked": n ? "true" : "false",
                    onKeyDown: function(t) {
                        return Object(d.s)(t.key) && e.props.toggle(o._id, !n, s)
                    }
                }, Object(u.h)("span", {
                    className: n ? "slider round is-checked" : "slider round",
                    style: {
                        backgroundColor: c
                    },
                    onClick: function() {
                        return e.props.toggle(o._id, !n, s)
                    }
                }, n ? l : p))
            }
            ,
            t
        }(p.Component)
          , f = function(e) {
            void 0 === e && (e = {}),
            r(this, {
                titleFont: {
                    fontSize: 14,
                    fontWeight: "700",
                    color: "#777777",
                    fontFamily: "arial, helvetica, sans-serif"
                },
                tableHeaderFont: {
                    fontSize: 16,
                    fontWeight: "700",
                    color: "#333333",
                    fontFamily: "arial, helvetica, sans-serif"
                },
                tableBodyFont: {
                    fontSize: 14,
                    fontWeight: "400",
                    color: "#555555",
                    fontFamily: "arial, helvetica, sans-serif"
                },
                useTitleFont: {
                    fontSize: 16,
                    fontWeight: "700",
                    color: "#333333",
                    fontFamily: "arial, helvetica, sans-serif"
                },
                useFont: {
                    fontSize: 14,
                    fontWeight: "400",
                    color: "#555555",
                    fontFamily: "arial, helvetica, sans-serif"
                },
                tableCellSpacing: {
                    paddingLeft: 8,
                    paddingRight: 8,
                    paddingTop: 12,
                    paddingBottom: 12
                },
                categoriesText: "Cookie Categories",
                descriptionText: "Description",
                consentText: "User Consent",
                liText: "Legitimate Interest",
                categoriesUseText: "Categories of Use",
                linkConsentText: "Manage options for Consent",
                linkLIText: "Manage options for Legitimate Interest",
                link: {
                    fontWeight: "400",
                    color: "#1890ff",
                    textDecoration: "none"
                },
                hover: {
                    fontWeight: "400",
                    color: "#0880ef",
                    textDecoration: "underline"
                },
                toggleColor: "#47d747",
                toggleOffColor: "#cccccc",
                toggleNeutralColor: "#FFA800",
                toggleOnText: "",
                toggleOffText: "",
                languages: {},
                selectedLanguage: ""
            }),
            r(this, e)
        }
          , h = n("KOA+");
        n("Pp7d");
        n.d(t, "a", (function() {
            return b
        }
        ));
        var b = function(e) {
            function t() {
                for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++)
                    o[r] = arguments[r];
                return (t = e.call.apply(e, [this].concat(o)) || this).state = {
                    page: "consent",
                    loading: !0
                },
                t.componentDidMount = function() {
                    t.loadStacks()
                }
                ,
                t.componentDidUpdate = function(e) {
                    t.props.language !== e.language && t.loadStacks()
                }
                ,
                t.loadStacks = function() {
                    var e = t.props
                      , n = e.siteId
                      , o = e.language;
                    n && !e.preloadMsg ? fetch((e.cmpv2Origin || "https://sourcepoint.mgr.consensu.org/tcfv2") + "/vendor-list/categories?siteId=" + n + (o ? "&consentLanguage=" + o.toLowerCase() : ""), {
                        insecure: !0
                    }).then((function(e) {
                        return e.json()
                    }
                    )).then((function(e) {
                        try {
                            t.props.updateStacks(e.categories),
                            t.setState({
                                loading: !1
                            }, t.getConsent)
                        } catch (e) {
                            t.defaultStacks()
                        }
                    }
                    )) : t.defaultStacks()
                }
                ,
                t.getConsent = function() {
                    var e = t.props;
                    fetch((e.cmpv2Origin || "https://sourcepoint.mgr.consensu.org/tcfv2") + "/consent/v3/" + e.siteId + "?consentUUID=" + e.consentUUID + "&consentLanguage=" + e.language + "&separateLegIntVendors=true", {
                        insecure: !0
                    }).then((function(e) {
                        return e ? e.json() : null
                    }
                    )).then((function(e) {
                        var n = [].concat(t.props.stacksData)
                          , o = e && e.legIntCategories || []
                          , r = e && e.categories || [];
                        n = n.map((function(e) {
                            return e.legInt = !!(o.indexOf(e._id) > -1 || e.hasLegInt),
                            e.consent = !!(r.indexOf(e._id) > -1 || e.hasConsent),
                            e
                        }
                        )),
                        t.props.updateStacks(n)
                    }
                    )).catch((function() {
                        return console.log("Error returning consent")
                    }
                    ))
                }
                ,
                t.defaultStacks = function() {
                    t.setState({
                        loading: !1
                    }, t.getConsent)
                }
                ,
                t.linkHover = function(e, t) {
                    e.target.style.color = t.color,
                    e.target.style.textDecoration = t.textDecoration,
                    e.target.style.fontWeight = t.fontWeight
                }
                ,
                t.togglePage = function() {
                    return t.setState({
                        page: "consent" === t.state.page ? "legInt" : "consent"
                    })
                }
                ,
                t.toggleCategory = function(e, n, o) {
                    var r = [].concat(t.props.stacksData);
                    r.map((function(t) {
                        return e === t._id && (t[o] = n),
                        t
                    }
                    )),
                    t.props.updateStacks(r)
                }
                ,
                t
            }
            var n, o;
            return o = e,
            (n = t).prototype = Object.create(o.prototype),
            n.prototype.constructor = n,
            l(n, o),
            t.prototype.render = function() {
                var e = this
                  , t = new f(this.props.component.settings)
                  , n = this.props
                  , o = n.language
                  , r = n.stacksData
                  , i = {}
                  , c = !1
                  , l = JSON.stringify(this.props.path);
                this.props.dev && (i = s({}, this.props.dev.hover),
                c = this.props.dev.current === l);
                var p = s({}, t.tableHeaderFont, {}, t.tableCellSpacing)
                  , b = s({}, t.tableBodyFont, {}, t.tableCellSpacing)
                  , m = s({}, t.useTitleFont)
                  , v = s({}, t.useFont)
                  , y = s({}, t.titleFont)
                  , O = {
                    style: t.link,
                    onMouseOver: function(n) {
                        return e.linkHover(n, t.hover)
                    },
                    onMouseOut: function(n) {
                        return e.linkHover(n, t.link)
                    }
                }
                  , j = Object(d.x)(Boolean(this.props.dev), t, "linkConsentText", o)
                  , C = Object(d.x)(Boolean(this.props.dev), t, "linkLIText", o)
                  , x = Object(d.x)(Boolean(this.props.dev), t, "categoriesText", o)
                  , w = Object(d.x)(Boolean(this.props.dev), t, "descriptionText", o)
                  , k = Object(d.x)(Boolean(this.props.dev), t, "consentText", o)
                  , P = Object(d.x)(Boolean(this.props.dev), t, "liText", o)
                  , _ = Object(d.x)(Boolean(this.props.dev), t, "categoriesUseText", o)
                  , L = (r || []).filter((function(e) {
                    return "CUSTOM" === e.type && e.hasConsent
                }
                ))
                  , T = (r || []).filter((function(e) {
                    return "CUSTOM" === e.type && e.hasLegInt
                }
                ))
                  , S = (r || []).filter((function(e) {
                    return "IAB_PURPOSE" === e.type || "IAB_STACK" === e.type
                }
                ))
                  , N = this.state.page;
                "consent" === this.state.page && L.length <= 0 && T.length > 0 && (N = "legInt");
                var I = "message-component message-stacks no-children" + this.props.className;
                return Object(u.h)("div", a({
                    className: c ? I + " on-active" : I,
                    path: this.props.dev ? l : null
                }, i), L && L.length > 0 || T && T.length > 0 || S && S.length > 0 ? Object(u.h)("div", {
                    className: "categories-container"
                }, S && S.length > 0 ? Object(u.h)("div", null, Object(u.h)("div", {
                    className: "page-use-title",
                    style: m
                }, _), Object(u.h)("div", {
                    className: "page-use",
                    style: v
                }, S.map((function(e) {
                    return Object(u.h)("div", null, Object(u.h)("span", null, Object(u.h)("b", null, e.name, ": ")), Object(u.h)("span", null, e.description))
                }
                )))) : null, L && L.length > 0 || T && T.length > 0 ? Object(u.h)("div", null, Object(u.h)("div", {
                    className: "page-title",
                    style: y
                }, "consent" === N ? k : P), Object(u.h)("table", {
                    className: "cat-tbl"
                }, Object(u.h)("thead", null, Object(u.h)("tr", null, Object(u.h)("th", {
                    scope: "col",
                    style: p
                }, x), Object(u.h)("th", {
                    scope: "col",
                    style: p
                }, w), Object(u.h)("th", {
                    scope: "col",
                    style: p
                }, "consent" === N ? k : P))), Object(u.h)("tbody", null, ("consent" === N ? L : T).map((function(n) {
                    return Object(u.h)("tr", {
                        key: "cat-" + n._id
                    }, Object(u.h)("td", {
                        style: b
                    }, n.name), Object(u.h)("td", {
                        style: b,
                        dangerouslySetInnerHTML: {
                            __html: Object(h.a)({
                                html: n.description
                            })
                        }
                    }), Object(u.h)("td", {
                        style: b
                    }, Object(u.h)(g, {
                        value: n,
                        checked: n[N],
                        toggle: e.toggleCategory,
                        page: N,
                        dev: e.props.dev,
                        settings: t,
                        language: o
                    })))
                }
                ))))) : null, "consent" === N && T.length > 0 || "legInt" === N && L.length > 0 ? Object(u.h)("div", {
                    className: "bottom-link"
                }, Object(u.h)("div", a({
                    tabIndex: "0"
                }, O, {
                    onClick: this.togglePage,
                    onKeyDown: function(t) {
                        return Object(d.s)(t.key) && e.togglePage
                    }
                }), "consent" === N ? C : j)) : null) : Object(u.h)("div", {
                    className: "no-categories"
                }, "This vendor list does not have any categories/purposes yet"))
            }
            ,
            t
        }(p.Component)
    },
    "7P9E": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return a
        }
        ));
        var o = n("2mXy")
          , r = n("FdF9")
          , a = (n("Fh2O"),
        function(e) {
            var t = e.children
              , n = e.veil
              , a = e.safeBottom;
            return a = !1 !== a,
            Object(o.h)(r.default.Fragment, null, n, Object(o.h)("div", {
                class: "message-safe-area-holder" + (a ? " message-safe-area-holder--safe-bottom" : "")
            }, Object(o.h)("div", {
                class: "message-safe-area"
            }, t)))
        }
        )
    },
    "8OL/": function(e, t, n) {
        "use strict";
        function o() {
            return (o = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n)
                        ({}).hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            }
            ).apply(null, arguments)
        }
        function r() {
            return (r = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n)
                        ({}).hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            }
            ).apply(null, arguments)
        }
        function a(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, o)
            }
            return n
        }
        function i(e, t, n) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" != typeof e || !e)
                        return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var o = n.call(e, t || "default");
                        if ("object" != typeof o)
                            return o;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" == typeof t ? t : t + ""
            }(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        var s = n("2mXy")
          , c = (n("FdF9"),
        function(e) {
            void 0 === e && (e = {}),
            o(this, {
                url: "",
                link: "",
                margin: {
                    marginLeft: 10,
                    marginRight: 10,
                    marginTop: 10,
                    marginBottom: 10
                },
                border: {
                    borderWidth: 0,
                    borderColor: "#000000",
                    borderTopLeftRadius: 5,
                    borderTopRightRadius: 5,
                    borderBottomLeftRadius: 5,
                    borderBottomRightRadius: 5,
                    borderStyle: "solid"
                },
                width: {
                    type: "auto",
                    value: 100
                },
                height: {
                    type: "auto",
                    value: 100
                },
                align: "left",
                alt: ""
            }),
            o(this, e)
        }
        )
          , l = n("jgXh")
          , u = n.n(l)
          , p = n("5oGf");
        n("CcD8");
        n.d(t, "a", (function() {
            return d
        }
        ));
        var d = function(e) {
            var t = e.path
              , n = e.dev
              , o = e.className
              , l = new c(e.component.settings)
              , d = Object(p.c)(t, n)
              , g = d.devActions
              , f = d.devClass
              , h = d.pathString
              , b = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? a(Object(n), !0).forEach((function(t) {
                        i(e, t, n[t])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }({}, l.margin, {}, l.border, {
                cursor: l.link ? "pointer" : ""
            })
              , m = l.margin
              , v = m.marginLeft
              , y = m.marginRight;
            b.width = "auto" === l.width.type ? "auto" : l.width.value + l.width.type,
            b.height = "auto" === l.height.type ? "auto" : l.height.value + l.height.type,
            "%" === l.width.type && (b.width = "calc(" + l.width.value + "% - " + (v + y) + "px"),
            "center" === l.align ? b.margin = "0 auto" : "right" === l.align ? b.marginLeft = "auto" : b.margin = null;
            var O = Object(s.h)("img", r({
                alt: l.alt,
                src: l.url || u.a,
                path: h,
                className: "message-component message-image no-children" + o + f,
                style: b
            }, g));
            return l.link ? Object(s.h)("a", {
                href: l.link,
                target: "_blank"
            }, O) : O
        }
    },
    Abvc: function(e, t, n) {
        "use strict";
        function o() {
            return (o = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n)
                        ({}).hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            }
            ).apply(null, arguments)
        }
        n.d(t, "a", (function() {
            return r
        }
        ));
        var r = function(e) {
            void 0 === e && (e = {});
            o(this, {
                align: "flex-start",
                vertical: "flex-start",
                width: {
                    type: "auto",
                    value: 1
                },
                height: {
                    type: "auto",
                    value: 1
                },
                background_url: null,
                padding: {
                    paddingLeft: 10,
                    paddingRight: 10,
                    paddingTop: 10,
                    paddingBottom: 10
                },
                margin: {
                    marginLeft: 10,
                    marginRight: 10,
                    marginTop: 10,
                    marginBottom: 10
                },
                border: {
                    borderWidth: 0,
                    borderColor: "#000000",
                    borderTopLeftRadius: 0,
                    borderTopRightRadius: 0,
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,
                    borderStyle: "solid"
                }
            }, e)
        }
    },
    "Asb/": function(e, t, n) {
        "use strict";
        var o = {};
        n.r(o),
        n.d(o, "Column", (function() {
            return a.a
        }
        )),
        n.d(o, "Image", (function() {
            return i.a
        }
        )),
        n.d(o, "Row", (function() {
            return s.a
        }
        )),
        n.d(o, "PrivacyManagerTCFv2", (function() {
            return c.a
        }
        )),
        n.d(o, "PMTCFv2Inline", (function() {
            return l.a
        }
        )),
        n.d(o, "PMCCPA", (function() {
            return u.a
        }
        )),
        n.d(o, "PMUSNeutral", (function() {
            return p.a
        }
        )),
        n.d(o, "PMUS", (function() {
            return d.a
        }
        )),
        n.d(o, "PMButton", (function() {
            return g.a
        }
        )),
        n.d(o, "IOSButton", (function() {
            return f.a
        }
        )),
        n.d(o, "Stacks", (function() {
            return h.a
        }
        )),
        n.d(o, "Categories", (function() {
            return b.a
        }
        )),
        n.d(o, "Text", (function() {
            return m.a
        }
        )),
        n.d(o, "Button", (function() {
            return v.a
        }
        ));
        var r = n("2mXy")
          , a = (n("FdF9"),
        n("2EdD"))
          , i = n("8OL/")
          , s = n("Rm/h")
          , c = n("yJvR")
          , l = n("hfBA")
          , u = n("BWpl")
          , p = n("OSPv")
          , d = n("Mb3r")
          , g = n("WIag")
          , f = n("0d0D")
          , h = n("1mLn")
          , b = n("78X1")
          , m = n("Jvnj")
          , v = n("Ig1F")
          , y = n("gm8T")
          , O = n("o1E3");
        t.a = function(e) {
            return e.components.map((function(t, n) {
                var a = o[t.type]
                  , i = [].concat(e.path);
                return i.push(n),
                Object(r.h)(y.a.Consumer, null, (function(n) {
                    return Object(r.h)(y.i.Consumer, null, (function(o) {
                        return Object(r.h)(a, {
                            path: i,
                            dev: e.dev,
                            key: "n-" + i,
                            component: t,
                            className: Object(O.b)(t.handle),
                            siteId: e.siteId,
                            message: e.message,
                            makeChoice: e.makeChoice,
                            updateStacks: e.updateStacks,
                            consentUUID: e.consentUUID,
                            language: e.language,
                            previewLanguage: e.previewLanguage,
                            cmpv2Origin: e.cmpv2Origin,
                            width: e.width,
                            events: e.events,
                            preview: e.preview,
                            preloadMsg: e.preloadMsg,
                            stacksData: e.stacksData,
                            refetchStacks: o,
                            defaultLanguage: n,
                            allSelectionsMade: e.allSelectionsMade,
                            neutralPm: e.neutralPm,
                            shown: e.shown,
                            pmData: e.pmData,
                            child: e.child,
                            vendors: e.vendors,
                            toggleCategory: e.toggleCategory,
                            toggleStack: e.toggleStack,
                            isFirstLayer: e.isFirstLayer,
                            setVendorCount: e.setVendorCount,
                            vendorCount: e.vendorCount,
                            isGlobalCmp: e.isGlobalCmp
                        })
                    }
                    ))
                }
                ))
            }
            ))
        }
    },
    BWpl: function(e, t, n) {
        "use strict";
        function o(e, t) {
            return (o = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function r(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, o)
            }
            return n
        }
        function a(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? r(Object(n), !0).forEach((function(t) {
                    i(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function i(e, t, n) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" != typeof e || !e)
                        return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var o = n.call(e, t || "default");
                        if ("object" != typeof o)
                            return o;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" == typeof t ? t : t + ""
            }(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function s(e, t) {
            return (s = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function c(e, t) {
            return (c = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function l(e, t) {
            return (l = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function u(e, t) {
            return (u = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function p(e, t) {
            return (p = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function d() {
            return (d = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n)
                        ({}).hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            }
            ).apply(null, arguments)
        }
        function g() {
            return (g = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n)
                        ({}).hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            }
            ).apply(null, arguments)
        }
        function f(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, o)
            }
            return n
        }
        function h(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? f(Object(n), !0).forEach((function(t) {
                    b(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : f(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function b(e, t, n) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" != typeof e || !e)
                        return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var o = n.call(e, t || "default");
                        if ("object" != typeof o)
                            return o;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" == typeof t ? t : t + ""
            }(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function m(e, t) {
            return (m = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        var v = n("2mXy")
          , y = n("FdF9")
          , O = n("o1E3")
          , j = function(e) {
            function t() {
                for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++)
                    o[r] = arguments[r];
                return (t = e.call.apply(e, [this].concat(o)) || this).state = {
                    isPurModelChecked: !1,
                    toggleDisplay: !0
                },
                t.toggle = function(e) {
                    var n = t.props
                      , o = n.child
                      , r = n.value
                      , a = n.consentType
                      , i = void 0 !== e ? e : !t.props.checked;
                    "purposes" === o || "features" === o ? (t.props.toggle(r._id, o, i, n.vendors, t.props.legInt),
                    t.setState({
                        checked: i
                    })) : "vendors" === o ? (t.props.toggle(r._id, i, a),
                    t.setState({
                        checked: i
                    })) : "stacks" === o && (t.props.toggle(r._id, i),
                    t.setState({
                        checked: i
                    }))
                }
                ,
                t.componentDidMount = function() {
                    t.props.usePurModel && t.toggle(!0)
                }
                ,
                t.componentDidUpdate = function(e) {
                    t.props.usePurModel !== e.usePurModel && t.setState({
                        isPurModelChecked: t.props.usePurModel,
                        toggleDisplay: !t.state.toggleDisplay
                    }, (function() {
                        t.props.selectedLi || t.toggle(t.state.isPurModelChecked)
                    }
                    ))
                }
                ,
                t
            }
            var n, r;
            return r = e,
            (n = t).prototype = Object.create(r.prototype),
            n.prototype.constructor = n,
            o(n, r),
            t.prototype.render = function() {
                var e = this
                  , t = this.props
                  , n = t.type
                  , o = t.color
                  , r = t.offColor
                  , a = t.text
                  , i = t.offText
                  , s = t.colorActive
                  , c = t.offActiveColor
                  , l = t.checked
                  , u = t.locked
                  , p = !this.props.usePurModel || this.state.toggleDisplay && !this.props.usePurModel ? "inline-flex" : "none"
                  , d = Object(v.h)("button", {
                    className: u ? "pm-toggle locked" : "pm-toggle",
                    tabIndex: "0",
                    type: "button",
                    role: "switch",
                    "aria-checked": l ? "true" : "false",
                    onKeyDown: function(t) {
                        return Object(O.s)(t.key) && e.toggle(!l)
                    },
                    style: {
                        display: p
                    }
                }, Object(v.h)("span", {
                    className: "off",
                    style: {
                        backgroundColor: l ? "transparent" : r,
                        color: l ? "#000000" : c,
                        borderColor: l ? "#dddddd" : r
                    },
                    onClick: function() {
                        return e.toggle(!1)
                    }
                }, i), Object(v.h)("span", {
                    className: "on",
                    style: {
                        backgroundColor: l ? o : "transparent",
                        color: l ? s : "#000000",
                        borderColor: l ? o : "#dddddd"
                    },
                    onClick: function() {
                        return e.toggle(!0)
                    }
                }, a))
                  , g = l ? "pm-switch checked" : "pm-switch"
                  , f = Object(v.h)("button", {
                    tabIndex: "0",
                    type: "button",
                    role: "switch",
                    "aria-checked": l ? "true" : "false",
                    className: u ? g + " locked" : g,
                    onKeyDown: function(t) {
                        t.stopPropagation(),
                        Object(O.s)(t.key) && e.toggle()
                    },
                    style: {
                        display: p
                    }
                }, Object(v.h)("span", {
                    className: "slider round",
                    style: {
                        backgroundColor: l ? o : r
                    },
                    onClick: function() {
                        return e.toggle()
                    }
                }));
                return "neutral" === n ? d : f
            }
            ,
            t
        }(y.Component)
          , C = function(e) {
            function t() {
                for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++)
                    o[r] = arguments[r];
                return (t = e.call.apply(e, [this].concat(o)) || this).state = {
                    open: !1
                },
                t.toggleAccordion = function(e) {
                    if (void 0 !== e && !["stack-toggle", "opener", "expand"].some((function(t) {
                        return e.target.className.includes(t)
                    }
                    ))) {
                        var n = t.panel
                          , o = !t.state.open;
                        t.setState({
                            open: o
                        }),
                        n.style.maxHeight = o ? n.scrollHeight + "px" : null
                    }
                }
                ,
                t
            }
            var n, o;
            o = e,
            (n = t).prototype = Object.create(o.prototype),
            n.prototype.constructor = n,
            s(n, o);
            var r = t.prototype;
            return r.shouldComponentUpdate = function(e, t) {
                var n = this.panel;
                n && t.open && setTimeout((function() {
                    n.style.maxHeight = n.scrollHeight + "px"
                }
                ), 100)
            }
            ,
            r.render = function() {
                var e = this
                  , t = this.props
                  , n = t.dev
                  , o = t.name
                  , r = t.accessName
                  , i = t.description
                  , s = t.content
                  , c = t.toggle
                  , l = t.child
                  , u = t.value
                  , p = t.language
                  , d = t.titleContent
                  , g = t.vendors
                  , f = t.isCustom
                  , h = t.locked
                  , b = t.consentType
                  , m = t.isApple
                  , C = t.appleDataBrokerLetter
                  , x = this.state.open
                  , w = this.props.settings || {}
                  , k = a({}, w.accordionsSpacing, {}, w.accordionsFont)
                  , P = a({}, w.panelSpacing, {}, w.panelFont)
                  , _ = Object(O.x)(Boolean(n), w, "toggleText", p)
                  , L = Object(O.x)(Boolean(n), w, "toggleOffText", p)
                  , T = i ? i.slice(3).slice(0, -4) : "";
                return Object(v.h)("div", {
                    className: "ccpa-stack",
                    tabindex: "0",
                    title: r || "Accordion",
                    onKeyDown: function(t) {
                        return Object(O.s)(t.key) && e.toggleAccordion(t)
                    }
                }, Object(v.h)("div", {
                    className: f ? "stack-row custom" : "stack-row",
                    style: {
                        position: "relative"
                    }
                }, Object(v.h)("div", {
                    className: x ? "accordion active" : "accordion",
                    style: k,
                    onClick: this.toggleAccordion
                }, Object(v.h)("span", {
                    className: x ? "chevron up" : "chevron down"
                }), x && !d ? Object(v.h)("b", null, o) : o, m && Object(v.h)("span", {
                    className: "legend-key apple-broker",
                    "aria-hidden": !0
                }, C), d || null), c && Object(v.h)(j, {
                    accessName: r + " Toggle" || !1,
                    type: w.toggleType,
                    color: w.toggleColor,
                    colorActive: w.toggleActiveColor,
                    offColor: w.toggleOffColor,
                    offActiveColor: w.toggleOffActiveColor,
                    text: _,
                    offText: L,
                    toggle: c,
                    child: l,
                    vendors: g,
                    value: u,
                    locked: h,
                    checked: u.enabled,
                    consentType: b
                })), Object(v.h)("div", {
                    ref: function(t) {
                        return e.panel = t
                    },
                    className: "panel"
                }, Object(v.h)("p", {
                    style: a({}, P)
                }, s ? y.default.cloneElement(s, {
                    accordionOpen: x
                }) : T)))
            }
            ,
            t
        }(y.Component)
          , x = n("KOA+")
          , w = n("RSKk")
          , k = n("ffVi")
          , P = n.n(k)
          , _ = function(e) {
            var t = e.vendor
              , n = e.arrowIconColor;
            return Object(v.h)("a", {
                tabIndex: "-1",
                href: t.policyUrl,
                target: "_blank",
                className: "vendor-tag linked"
            }, Object(v.h)("span", null, t.name), Object(v.h)("img", {
                style: n,
                src: P.a,
                alt: ""
            }))
        }
          , L = function(e) {
            function t() {
                for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++)
                    o[r] = arguments[r];
                return (t = e.call.apply(e, [this].concat(o)) || this).state = {
                    open: !1
                },
                t.toggleAccordion = function() {
                    var e = t.content
                      , n = !t.state.open;
                    t.setState({
                        open: n
                    }, t.props.force),
                    e.style.maxHeight = n ? e.scrollHeight + "px" : null
                }
                ,
                t.openLink = function() {
                    return window.open(t.props.vendor.policyUrl, "_blank")
                }
                ,
                t
            }
            var n, o;
            return o = e,
            (n = t).prototype = Object.create(o.prototype),
            n.prototype.constructor = n,
            c(n, o),
            t.prototype.render = function() {
                var e = this
                  , t = this.props
                  , n = t.vendor
                  , o = t.settings
                  , r = t.language
                  , a = t.dev
                  , i = t.accordionOpen
                  , s = t.isSpecialPurpose
                  , c = this.state.open
                  , l = n.cookies ? n.cookies.length : 0
                  , u = n.cookies || []
                  , p = Object(O.x)(Boolean(a), o, "cookieText", r)
                  , d = Object(O.x)(Boolean(a), o, "tableCookieText", r)
                  , g = Object(O.x)(Boolean(a), o, "tableDomainText", r)
                  , f = Object(O.x)(Boolean(a), o, "tableDurationText", r)
                  , h = Object(O.x)(Boolean(a), o, "otherLetter", r);
                return Object(v.h)("div", {
                    className: "toggle-vendor"
                }, Object(v.h)("div", {
                    style: {
                        position: "relative"
                    }
                }, Object(v.h)("button", {
                    tabIndex: i || void 0 === i ? 0 : -1,
                    className: c ? "expand active" : "expand",
                    onClick: l > 0 ? this.toggleAccordion : this.openLink
                }, l > 0 ? Object(v.h)("span", {
                    className: "plusminus"
                }, c ? "-" : "+") : Object(v.h)("img", {
                    style: Object(w.a)(o.arrowIconColor),
                    src: P.a,
                    alt: ""
                }), Object(v.h)("span", {
                    style: {
                        padding: "0 5px"
                    }
                }, n.name), "IAB" !== n.vendorType && !s && Object(v.h)("span", {
                    tabIndex: "0",
                    className: "legend-key"
                }, h), l > 0 ? Object(v.h)("span", {
                    style: {
                        marginLeft: "5px"
                    }
                }, "(", l, " ", p, ")") : null)), Object(v.h)("div", {
                    ref: function(t) {
                        return e.content = t
                    },
                    className: "content"
                }, Object(v.h)("div", {
                    className: "inner-content"
                }, Object(v.h)(_, {
                    vendor: n,
                    arrowIconColor: o.arrowIconColor
                }), l > 0 ? Object(v.h)("table", {
                    className: "tvtbl"
                }, Object(v.h)("tr", null, Object(v.h)("th", {
                    scope: "col"
                }, d), Object(v.h)("th", {
                    scope: "col"
                }, g), Object(v.h)("th", {
                    scope: "col"
                }, f)), u.map((function(e) {
                    return Object(v.h)("tr", null, Object(v.h)("td", null, Object(v.h)("span", null, e.name)), Object(v.h)("td", null, e.domain), Object(v.h)("td", null, Object(v.h)("span", null, e.cookieLifeSpan)))
                }
                ))) : null)))
            }
            ,
            t
        }(y.Component)
          , T = function(e) {
            function t() {
                for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++)
                    o[r] = arguments[r];
                return (t = e.call.apply(e, [this].concat(o)) || this).state = {
                    consentAll: !1
                },
                t.toggleConsentAll = function() {
                    t.setState({
                        consentAll: !t.state.consentAll
                    }, t.props.force)
                }
                ,
                t
            }
            var n, o;
            return o = e,
            (n = t).prototype = Object.create(o.prototype),
            n.prototype.constructor = n,
            l(n, o),
            t.prototype.render = function() {
                var e = this
                  , t = this.props
                  , n = t.purpose
                  , o = t.settings
                  , r = t.language
                  , a = t.force
                  , i = t.dev
                  , s = t.isCustom
                  , c = t.accordionOpen
                  , l = this.state.consentAll
                  , u = Object(O.x)(Boolean(i), o, "viewAllText", r)
                  , p = Object(O.x)(Boolean(i), o, "viewLessText", r)
                  , d = s ? Object(v.h)("p", {
                    style: "margin-bottom:15px;",
                    dangerouslySetInnerHTML: {
                        __html: Object(x.a)({
                            html: n.description
                        })
                    }
                }) : Object(v.h)("p", {
                    style: "margin-bottom:15px;"
                }, Object(O.h)(n.description));
                return o.alphabetizeVendors && n.requiringConsentVendors && n.requiringConsentVendors.sort((function(e, t) {
                    return e.name.toLowerCase() < t.name.toLowerCase() ? -1 : e.name.toLowerCase() > t.name.toLowerCase() ? 1 : 0
                }
                )),
                Object(v.h)("div", {
                    className: "purpose-content"
                }, d, Object(v.h)("div", null, Object(v.h)("div", {
                    className: "policies"
                }, n.requiringConsentVendors.slice(0, l ? n.requiringConsentVendors.length : 3).map((function(e) {
                    return Object(v.h)(L, {
                        vendor: e,
                        key: e._id,
                        language: r,
                        settings: o,
                        force: a,
                        accordionOpen: c
                    })
                }
                )), n.requiringConsentVendors.length > 3 && Object(v.h)("div", {
                    tabIndex: c ? 0 : -1,
                    className: "view-all",
                    onClick: this.toggleConsentAll,
                    onKeyDown: function(t) {
                        return Object(O.s)(t.key) && e.toggleConsentAll()
                    }
                }, l ? p : u))))
            }
            ,
            t
        }(y.Component)
          , S = function(e) {
            function t() {
                for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++)
                    o[r] = arguments[r];
                return (t = e.call.apply(e, [this].concat(o)) || this).state = {
                    forceUpdate: !0
                },
                t.force = function() {
                    return t.setState({
                        forceUpdate: !t.state.forceUpdate
                    })
                }
                ,
                t
            }
            var n, o;
            return o = e,
            (n = t).prototype = Object.create(o.prototype),
            n.prototype.constructor = n,
            u(n, o),
            t.prototype.render = function() {
                var e = this
                  , t = this.props
                  , n = t.purposes
                  , o = t.settings
                  , r = t.language
                  , a = t.dev;
                return Object(v.h)("div", {
                    className: "pm-purposes"
                }, n.map((function(t) {
                    return Object(v.h)(C, {
                        key: "purpose-" + t._id,
                        settings: o,
                        name: Object(v.h)("span", null, t.name),
                        accessName: t.name,
                        description: t.description,
                        child: "purposes",
                        language: r,
                        value: t,
                        vendors: t.requiringConsentVendors,
                        content: Object(v.h)(T, {
                            purpose: t,
                            language: r,
                            settings: o,
                            force: e.force,
                            dev: a
                        }),
                        toggle: e.props.toggleCategory,
                        updateMe: e.state.forceUpdate,
                        dev: a
                    })
                }
                )))
            }
            ,
            t
        }(y.Component)
          , N = n("5Hd3")
          , I = n.n(N)
          , A = n("fYZW")
          , B = function(e) {
            function t() {
                for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++)
                    o[r] = arguments[r];
                return (t = e.call.apply(e, [this].concat(o)) || this).state = {
                    filter: ""
                },
                t.updateFilter = function(e) {
                    return t.setState({
                        filter: e.target.value
                    })
                }
                ,
                t
            }
            var n, o;
            return o = e,
            (n = t).prototype = Object.create(o.prototype),
            n.prototype.constructor = n,
            p(n, o),
            t.prototype.render = function() {
                var e = this
                  , t = this.props
                  , n = t.settings
                  , o = t.language
                  , r = t.dev
                  , a = this.state.filter
                  , i = t.vendors.filter((function(e) {
                    return "" === a || e.name.toLowerCase().indexOf(a.toLowerCase()) >= 0
                }
                ))
                  , s = Object(O.x)(Boolean(r), n, "searchText", o);
                return Object(v.h)("div", {
                    className: "pm-features pm-vendors"
                }, Object(v.h)("div", {
                    className: "filter-container"
                }, Object(v.h)("img", {
                    src: I.a,
                    alt: ""
                }), Object(v.h)("input", {
                    className: "vendor-filter",
                    placeholder: s + "...",
                    name: "filter",
                    value: a,
                    onChange: this.updateFilter
                })), i.map((function(t) {
                    return Object(v.h)(C, {
                        key: "vendor-" + t._id,
                        settings: e.props.settings,
                        name: Object(v.h)("span", null, t.name),
                        description: t.name,
                        child: "vendors",
                        language: o,
                        value: t,
                        content: Object(v.h)(A.a, {
                            dev: r,
                            vendor: t,
                            settings: n,
                            language: o
                        }),
                        toggle: e.props.toggleVendor
                    })
                }
                )))
            }
            ,
            t
        }(y.Component)
          , D = function(e) {
            void 0 === e && (e = {}),
            d(this, {
                accordionsSpacing: {
                    paddingLeft: 16,
                    paddingRight: 16,
                    paddingTop: 16,
                    paddingBottom: 16
                },
                accordionsFont: {
                    fontSize: 13,
                    fontWeight: "500",
                    color: "#000000",
                    fontFamily: "arial, helvetica, sans-serif"
                },
                panelSpacing: {
                    paddingLeft: 20,
                    paddingRight: 20,
                    paddingTop: 5,
                    paddingBottom: 20
                },
                panelFont: {
                    fontSize: 13,
                    fontWeight: "400",
                    color: "#555555",
                    fontFamily: "arial, helvetica, sans-serif"
                },
                toggleType: "basic",
                toggleColor: "#47d747",
                toggleActiveColor: "#ffffff",
                toggleText: "On",
                toggleOffColor: "#cccccc",
                toggleOffActiveColor: "#ffffff",
                toggleOffText: "Off",
                purposesText: "Purposes",
                alphabetizeVendors: !1,
                vendorsText: "Site Vendors",
                vendorConsent: "Relying on consent for:",
                searchText: "Search Site Vendors",
                minHeight: {
                    type: "auto",
                    value: 1
                },
                maxHeight: {
                    type: "px",
                    value: 400
                },
                languages: {},
                selectedLanguage: "",
                viewAllText: "View All",
                viewLessText: "View Less",
                magnifyingGlassIconColor: "#000",
                arrowIconColor: "#000"
            }),
            d(this, e)
        };
        n("HD23");
        n.d(t, "a", (function() {
            return E
        }
        ));
        var E = function(e) {
            function t() {
                for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++)
                    o[r] = arguments[r];
                return (t = e.call.apply(e, [this].concat(o)) || this).state = {
                    tab: t.props.pmTab ? t.props.pmTab || "purposes" : t.props.message.defaultTab || "purposes",
                    loading: !0
                },
                t.changeTab = function(e) {
                    return t.setState({
                        tab: e
                    })
                }
                ,
                t.linkHover = function(e, t) {
                    e.target.style.color = t.color,
                    e.target.style.textDecoration = t.textDecoration,
                    e.target.style.fontWeight = t.fontWeight
                }
                ,
                t
            }
            var n, o;
            return o = e,
            (n = t).prototype = Object.create(o.prototype),
            n.prototype.constructor = n,
            m(n, o),
            t.prototype.render = function() {
                var e = this
                  , t = new D(this.props.component.settings)
                  , n = this.props.language
                  , o = this.state.tab
                  , r = this.props.pmData || {}
                  , a = {}
                  , i = !1
                  , s = JSON.stringify(this.props.path);
                this.props.dev && (a = h({}, this.props.dev.hover),
                i = this.props.dev.current === s);
                var c = {};
                c.minHeight = "auto" === t.minHeight.type ? "auto" : t.minHeight.value + t.minHeight.type,
                c.maxHeight = "auto" === t.maxHeight.type ? "auto" : t.maxHeight.value + t.maxHeight.type;
                h({}, t.accordionsFont);
                var l = "message-component message-stacks pm-ccpa no-children" + this.props.className
                  , u = Object(O.x)(Boolean(this.props.dev), t, "purposesText", n)
                  , p = Object(O.x)(Boolean(this.props.dev), t, "vendorsText", n);
                return t.alphabetizeVendors && (r.vendors || []).sort((function(e, t) {
                    return e.name.toLowerCase() < t.name.toLowerCase() ? -1 : e.name.toLowerCase() > t.name.toLowerCase() ? 1 : 0
                }
                )),
                Object(v.h)("div", g({
                    className: i ? l + " on-active" : l,
                    path: this.props.dev ? s : null
                }, a), Object(v.h)("div", {
                    className: "pm-tabs"
                }, r.categories && r.categories.length > 0 && Object(v.h)("button", {
                    className: o.includes("purposes") ? "pm-tab active" : "pm-tab",
                    onClick: function() {
                        return e.changeTab("purposes")
                    },
                    onKeyDown: function(t) {
                        return Object(O.s)(t.key) && e.changeTab("purposes")
                    },
                    title: u,
                    "aria-label": u
                }, u), r.vendors && r.vendors.length > 0 && Object(v.h)("button", {
                    className: o.includes("vendors") ? "pm-tab active" : "pm-tab",
                    onClick: function() {
                        return e.changeTab("vendors")
                    },
                    onKeyDown: function(t) {
                        return Object(O.s)(t.key) && e.changeTab("vendors")
                    },
                    title: p,
                    "aria-label": p
                }, p)), o.includes("purposes") && void 0 !== r.categories && Object(v.h)("div", {
                    className: "pm-section",
                    style: c
                }, Object(v.h)(S, {
                    dev: this.props.dev,
                    purposes: r.categories || [],
                    language: this.props.language,
                    settings: t,
                    toggleCategory: this.props.toggleCategory
                })), o.includes("vendors") && void 0 !== r.vendors && Object(v.h)("div", {
                    className: "pm-section",
                    style: c
                }, Object(v.h)(B, {
                    dev: this.props.dev,
                    vendors: r.vendors || [],
                    settings: t,
                    language: this.props.language,
                    toggleVendor: this.props.toggleVendor
                })))
            }
            ,
            t
        }(y.Component)
    },
    BlOF: function(e, t, n) {
        "use strict";
        (function(e) {
            var o = n("RSKk")
              , r = n("I/SG")
              , a = n.n(r)
              , i = n("o1E3");
            t.a = function(t) {
                var n = t.vendor
                  , r = t.arrowIconColor
                  , s = t.convertToRem ? {
                    fontSize: Object(i.c)(10)
                } : {};
                return e("a", {
                    href: n.policyUrl,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "vendor-tag linked",
                    style: s
                }, e("span", null, n.name), e("img", {
                    style: Object(o.a)(r),
                    src: a.a,
                    alt: ""
                }))
            }
        }
        ).call(this, n("2mXy").h)
    },
    CcD8: function() {},
    CujF: function() {},
    Cwyy: function(e, t, n) {
        "use strict";
        n.r(t);
        var o = n("2mXy")
          , r = function(e) {
            return e && e.default ? e.default : e
        };
        if ("function" == typeof r(n("XYkp"))) {
            var a = document.body.firstElementChild;
            0,
            function() {
                var e = r(n("XYkp"))
                  , t = {}
                  , i = document.querySelector('[type="__PREACT_CLI_DATA__"]');
                i && (t = JSON.parse(i.innerHTML).preRenderData);
                var s = {
                    preRenderData: t
                };
                a = Object(o.render)(Object(o.h)(e, {
                    CLI_DATA: s
                }), document.body, a)
            }()
        }
    },
    D2gz: function(e, t, n) {
        "use strict";
        function o() {
            return (o = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n)
                        ({}).hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            }
            ).apply(null, arguments)
        }
        function r(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, o)
            }
            return n
        }
        function a(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? r(Object(n), !0).forEach((function(t) {
                    i(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function i(e, t, n) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" != typeof e || !e)
                        return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var o = n.call(e, t || "default");
                        if ("object" != typeof o)
                            return o;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" == typeof t ? t : t + ""
            }(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        n.d(t, "a", (function() {
            return c
        }
        ));
        var s = n("FkMG")
          , c = function(e) {
            void 0 === e && (e = {}),
            o(this, a({}, new s.a(e), {
                neutralButtonBackgroundColor: "gray",
                neutralButtonFontColor: "white",
                onButtonBackgroundColor: "green",
                onButtonFontColor: "white",
                onButtonText: "Accept",
                offButtonBackgroundColor: "red",
                offButtonFontColor: "white",
                offButtonText: "Reject",
                requiredConsentText: "Required For Consent",
                requiredConsentLetter: "R"
            }), e)
        };
        a({}, s.b, {
            "toggle settings": {
                neutralButtonBackgroundColor: {
                    title: "Neutral Button Background Color",
                    type: "ColorPicker"
                },
                neutralButtonFontColor: {
                    title: "Neutral Button Font Color",
                    type: "ColorPicker"
                },
                onButtonBackgroundColor: {
                    title: "On Button Background Color",
                    type: "ColorPicker"
                },
                onButtonFontColor: {
                    title: "ON Button Font Color",
                    type: "ColorPicker"
                },
                onButtonText: {
                    title: "ON Button Text",
                    type: "InputLanguage"
                },
                offButtonBackgroundColor: {
                    title: "Off Button Background Color",
                    type: "ColorPicker"
                },
                offButtonFontColor: {
                    title: "Off Button Font Color",
                    type: "ColorPicker"
                },
                offButtonText: {
                    title: "Off Button Text!",
                    type: "InputLanguage"
                },
                requiredConsentText: {
                    title: "Required Consent Tag Text",
                    type: "InputLanguage"
                }
            }
        })
    },
    D44D: function(e, t, n) {
        "use strict";
        (function(e, o) {
            var r = n("FdF9")
              , a = n("gm8T");
            n("Hm76");
            t.a = function(t) {
                function n() {
                    var e = s.current;
                    e && (m(e.scrollTop === e.scrollHeight - e.offsetHeight),
                    O(0 === e.scrollTop))
                }
                var i = t.children
                  , s = t.pRef
                  , c = t.style
                  , l = t.settings
                  , u = void 0 === l ? {} : l
                  , p = t.resetScroll;
                if (!Object(r.useContext)(a.c))
                    return i;
                Object(r.useContext)(a.g)();
                var d = Object(r.useState)(!1)
                  , g = d[0]
                  , f = d[1]
                  , h = Object(r.useState)(!1)
                  , b = h[0]
                  , m = h[1]
                  , v = Object(r.useState)(!1)
                  , y = v[0]
                  , O = v[1];
                Object(r.useEffect)((function() {
                    setTimeout((function() {
                        var e = s.current;
                        e && f(e.scrollHeight > e.clientHeight)
                    }
                    ), 0)
                }
                ), [s, i]),
                Object(r.useEffect)((function() {
                    if (p) {
                        var e = s.current;
                        e && (e.scrollTop = 0,
                        n())
                    }
                }
                ), [p]);
                var j = function(e) {
                    return function() {
                        var t = s.current;
                        t && ("DOWN" === e ? t.scrollTop += .05 * t.scrollHeight : t.scrollTop -= .05 * t.scrollHeight,
                        n())
                    }
                };
                return e(o, null, e("div", {
                    className: g ? "wrap-container" : "",
                    style: g ? {
                        height: "calc(100% - 35px)"
                    } : {
                        height: "100%"
                    }
                }, g ? e("span", {
                    className: "text-container",
                    style: c
                }, e("button", {
                    tabIndex: "1",
                    className: "focusable scroll-arrow-container up",
                    onClick: j("UP"),
                    "aria-label": "scroll up"
                }, e("div", {
                    style: {
                        borderColor: u.arrowColor
                    },
                    className: "scroll-arrow up " + (y ? "fade" : null)
                })), e("button", {
                    tabIndex: "1",
                    className: "focusable scroll-arrow-container down",
                    onClick: j("DOWN"),
                    "aria-label": "scroll down"
                }, e("div", {
                    style: {
                        borderColor: u.arrowColor
                    },
                    className: "scroll-arrow down " + (b ? "fade" : null)
                })), i) : e("span", {
                    className: "text-container",
                    style: c
                }, i)))
            }
        }
        ).call(this, n("2mXy").h, n("2mXy").Fragment)
    },
    "DBc/": function() {},
    EgWA: function() {},
    FdF9: function(e, t, n) {
        "use strict";
        function o(e) {
            R.options.__h && R.options.__h(V);
            var t = V.__H || (V.__H = {
                t: [],
                u: []
            });
            return e >= t.t.length && t.t.push({}),
            t.t[e]
        }
        function r(e) {
            return a(v, e)
        }
        function a(e, t, n) {
            var r = o(F++);
            return r.__c || (r.__c = V,
            r.i = [n ? n(t) : v(void 0, t), function(t) {
                var n = e(r.i[0], t);
                r.i[0] !== n && (r.i[0] = n,
                r.__c.setState({}))
            }
            ]),
            r.i
        }
        function i(e, t) {
            var n = o(F++);
            m(n.o, t) && (n.i = e,
            n.o = t,
            V.__H.u.push(n))
        }
        function s(e, t) {
            var n = o(F++);
            m(n.o, t) && (n.i = e,
            n.o = t,
            V.__h.push(n))
        }
        function c(e) {
            return u((function() {
                return {
                    current: e
                }
            }
            ), [])
        }
        function l(e, t, n) {
            s((function() {
                "function" == typeof e ? e(t()) : e && (e.current = t())
            }
            ), null == n ? n : n.concat(e))
        }
        function u(e, t) {
            var n = o(F++);
            return m(n.o, t) ? (n.o = t,
            n.v = e,
            n.i = e()) : n.i
        }
        function p(e, t) {
            return u((function() {
                return e
            }
            ), t)
        }
        function d(e) {
            var t = V.context[e.__c];
            if (!t)
                return e.__;
            var n = o(F++);
            return null == n.i && (n.i = !0,
            t.sub(V)),
            t.props.value
        }
        function g(e, t) {
            R.options.useDebugValue && R.options.useDebugValue(t ? t(e) : e)
        }
        function f() {
            U.some((function(e) {
                e.__P && (e.__H.u.forEach(h),
                e.__H.u.forEach(b),
                e.__H.u = [])
            }
            )),
            U = []
        }
        function h(e) {
            e.m && e.m()
        }
        function b(e) {
            var t = e.i();
            "function" == typeof t && (e.m = t)
        }
        function m(e, t) {
            return !e || t.some((function(t, n) {
                return t !== e[n]
            }
            ))
        }
        function v(e, t) {
            return "function" == typeof t ? t(e) : t
        }
        function y(e, t) {
            for (var n in t)
                e[n] = t[n];
            return e
        }
        function O(e) {
            var t = e.parentNode;
            t && t.removeChild(e)
        }
        function j(e) {
            this.__u = [],
            this.__f = e.fallback
        }
        function C(e) {
            function t(t) {
                if (n || (n = e()).then((function(e) {
                    o = e.default
                }
                ), (function(e) {
                    r = e
                }
                )),
                r)
                    throw r;
                if (!o)
                    throw n;
                return Object(R.createElement)(o, t)
            }
            var n, o, r;
            return t.displayName = "Lazy",
            t.t = !0,
            t
        }
        function x(e) {
            return _.bind(null, e)
        }
        function w(e, t, n) {
            if (null == t.__k)
                for (; t.firstChild; )
                    O(t.firstChild);
            return Object(R.render)(e, t),
            "function" == typeof n && n(),
            e ? e.__c : null
        }
        function k(e) {
            var t = this
              , n = e.container
              , o = Object(R.h)(Q, {
                context: t.context
            }, e.vnode);
            return t.i && t.i !== n && (t.l.parentNode && t.i.removeChild(t.l),
            Object(R._unmount)(t.s),
            t.v = !1),
            e.vnode ? t.v ? (n.__k = t.__k,
            Object(R.render)(o, n),
            t.__k = n.__k) : (t.l = document.createTextNode(""),
            Object(R.hydrate)("", n),
            n.appendChild(t.l),
            t.v = !0,
            t.i = n,
            Object(R.render)(o, n, t.l),
            t.__k = this.l.__k) : t.v && (t.l.parentNode && t.i.removeChild(t.l),
            Object(R._unmount)(t.s)),
            t.s = o,
            t.componentWillUnmount = function() {
                t.l.parentNode && t.i.removeChild(t.l),
                Object(R._unmount)(t.s)
            }
            ,
            null
        }
        function P(e, t) {
            return Object(R.h)(k, {
                vnode: e,
                container: t
            })
        }
        function _() {
            var e = R.h.apply(void 0, arguments)
              , t = e.type
              , n = e.props;
            return "function" != typeof t && (n.defaultValue && (n.value || 0 === n.value || (n.value = n.defaultValue),
            delete n.defaultValue),
            Array.isArray(n.value) && n.multiple && "select" === t && (Object(R.toChildArray)(n.children).forEach((function(e) {
                -1 != n.value.indexOf(e.props.value) && (e.props.selected = !0)
            }
            )),
            delete n.value),
            function(e, t) {
                var n, o, r;
                for (r in t)
                    if (n = Y.test(r))
                        break;
                if (n)
                    for (r in o = e.props = {},
                    t)
                        o[Y.test(r) ? r.replace(/([A-Z0-9])/, "-$1").toLowerCase() : r] = t[r]
            }(e, n)),
            e.preactCompatNormalized = !1,
            L(e)
        }
        function L(e) {
            return e.preactCompatNormalized = !0,
            function(e) {
                var t = e.props;
                (t.class || t.className) && (ee.enumerable = "className"in t,
                t.className && (t.class = t.className),
                Object.defineProperty(t, "className", ee))
            }(e),
            e
        }
        function T(e) {
            return S(e) ? L(R.cloneElement.apply(null, arguments)) : e
        }
        function S(e) {
            return !!e && e.$$typeof === X
        }
        function N(e) {
            return !!e.__k && (Object(R.render)(null, e),
            !0)
        }
        function I(e, t) {
            for (var n in e)
                if ("__source" !== n && !(n in t))
                    return !0;
            for (var o in t)
                if ("__source" !== o && e[o] !== t[o])
                    return !0;
            return !1
        }
        function A(e) {
            return e && (e.base || 1 === e.nodeType && e) || null
        }
        function B(e, t) {
            function n(e) {
                var n = this.props.ref
                  , o = n == e.ref;
                return !o && n && (n.call ? n(null) : n.current = null),
                t ? !t(this.props, e) || !o : I(this.props, e)
            }
            function o(t) {
                return this.shouldComponentUpdate = n,
                Object(R.h)(e, y({}, t))
            }
            return o.prototype.isReactComponent = !0,
            o.displayName = "Memo(" + (e.displayName || e.name) + ")",
            o.t = !0,
            o
        }
        function D(e) {
            function t(t) {
                var n = y({}, t);
                return delete n.ref,
                e(n, t.ref)
            }
            return t.prototype.isReactComponent = !0,
            t.t = !0,
            t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")",
            t
        }
        function E(e, t) {
            e["UNSAFE_" + t] && !e[t] && Object.defineProperty(e, t, {
                configurable: !1,
                get: function() {
                    return this["UNSAFE_" + t]
                },
                set: function(e) {
                    this["UNSAFE_" + t] = e
                }
            })
        }
        n.r(t);
        var F, V, M, R = n("2mXy"), U = [], H = R.options.__r, z = R.options.diffed, q = R.options.__c, K = R.options.unmount;
        R.options.__r = function(e) {
            H && H(e),
            F = 0,
            (V = e.__c).__H && (V.__H.u.forEach(h),
            V.__H.u.forEach(b),
            V.__H.u = [])
        }
        ,
        R.options.diffed = function(e) {
            z && z(e);
            var t = e.__c;
            if (t) {
                var n = t.__H;
                n && n.u.length && (1 !== U.push(t) && M === R.options.requestAnimationFrame || ((M = R.options.requestAnimationFrame) || function(e) {
                    var t, n = function() {
                        clearTimeout(o),
                        cancelAnimationFrame(t),
                        setTimeout(e)
                    }, o = setTimeout(n, 100);
                    "undefined" != typeof window && (t = requestAnimationFrame(n))
                }
                )(f))
            }
        }
        ,
        R.options.__c = function(e, t) {
            t.some((function(e) {
                e.__h.forEach(h),
                e.__h = e.__h.filter((function(e) {
                    return !e.i || b(e)
                }
                ))
            }
            )),
            q && q(e, t)
        }
        ,
        R.options.unmount = function(e) {
            K && K(e);
            var t = e.__c;
            if (t) {
                var n = t.__H;
                n && n.t.forEach((function(e) {
                    return e.m && e.m()
                }
                ))
            }
        }
        ,
        n.d(t, "version", (function() {
            return G
        }
        )),
        n.d(t, "Children", (function() {
            return Z
        }
        )),
        n.d(t, "render", (function() {
            return w
        }
        )),
        n.d(t, "hydrate", (function() {
            return w
        }
        )),
        n.d(t, "unmountComponentAtNode", (function() {
            return N
        }
        )),
        n.d(t, "createPortal", (function() {
            return P
        }
        )),
        n.d(t, "createElement", (function() {
            return _
        }
        )),
        n.d(t, "createFactory", (function() {
            return x
        }
        )),
        n.d(t, "cloneElement", (function() {
            return T
        }
        )),
        n.d(t, "isValidElement", (function() {
            return S
        }
        )),
        n.d(t, "findDOMNode", (function() {
            return A
        }
        )),
        n.d(t, "PureComponent", (function() {
            return te
        }
        )),
        n.d(t, "memo", (function() {
            return B
        }
        )),
        n.d(t, "forwardRef", (function() {
            return D
        }
        )),
        n.d(t, "unstable_batchedUpdates", (function() {
            return oe
        }
        )),
        n.d(t, "Suspense", (function() {
            return j
        }
        )),
        n.d(t, "lazy", (function() {
            return C
        }
        )),
        n.d(t, "useState", (function() {
            return r
        }
        )),
        n.d(t, "useReducer", (function() {
            return a
        }
        )),
        n.d(t, "useEffect", (function() {
            return i
        }
        )),
        n.d(t, "useLayoutEffect", (function() {
            return s
        }
        )),
        n.d(t, "useRef", (function() {
            return c
        }
        )),
        n.d(t, "useImperativeHandle", (function() {
            return l
        }
        )),
        n.d(t, "useMemo", (function() {
            return u
        }
        )),
        n.d(t, "useCallback", (function() {
            return p
        }
        )),
        n.d(t, "useContext", (function() {
            return d
        }
        )),
        n.d(t, "useDebugValue", (function() {
            return g
        }
        )),
        n.d(t, "createContext", (function() {
            return R.createContext
        }
        )),
        n.d(t, "createRef", (function() {
            return R.createRef
        }
        )),
        n.d(t, "Fragment", (function() {
            return R.Fragment
        }
        )),
        n.d(t, "Component", (function() {
            return R.Component
        }
        ));
        var W = R.options.__e;
        R.options.__e = function(e, t, n) {
            if (e.then && n)
                for (var o, r = t; r = r.__; )
                    if ((o = r.__c) && o.o)
                        return n && (t.__e = n.__e,
                        t.__k = n.__k),
                        void o.o(e);
            W(e, t, n)
        }
        ,
        (j.prototype = new R.Component).o = function(e) {
            var t = this;
            t.__u.push(e);
            var n = function() {
                t.__u[t.__u.indexOf(e)] = t.__u[t.__u.length - 1],
                t.__u.pop(),
                0 == t.__u.length && (t.__f && Object(R._unmount)(t.__f),
                t.__v.__e = null,
                t.__v.__k = t.state.u,
                t.setState({
                    u: null
                }))
            };
            null == t.state.u && (t.__f = t.__f && Object(R.cloneElement)(t.__f),
            t.setState({
                u: t.__v.__k
            }),
            function e(t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    null != o && ("function" != typeof o.type && o.__e ? O(o.__e) : o.__k && e(o.__k))
                }
            }(t.__v.__k),
            t.__v.__k = []),
            e.then(n, n)
        }
        ,
        j.prototype.render = function(e, t) {
            return t.u ? this.__f : e.children
        }
        ;
        var G = "16.8.0"
          , X = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103
          , Y = /^(?:accent|alignment|arabic|baseline|cap|clip|color|fill|flood|font|glyph|horiz|marker|overline|paint|stop|strikethrough|stroke|text|underline|unicode|units|v|vector|vert|word|writing|x)[A-Z]/
          , $ = R.options.event;
        R.options.event = function(e) {
            return $ && (e = $(e)),
            e.persist = function() {}
            ,
            e.nativeEvent = e
        }
        ;
        var Q = function() {
            function e() {}
            var t = e.prototype;
            return t.getChildContext = function() {
                return this.props.context
            }
            ,
            t.render = function(e) {
                return e.children
            }
            ,
            e
        }()
          , J = function(e, t) {
            return e ? Object(R.toChildArray)(e).map(t) : null
        }
          , Z = {
            map: J,
            forEach: J,
            count: function(e) {
                return e ? Object(R.toChildArray)(e).length : 0
            },
            only: function(e) {
                if (1 !== (e = Object(R.toChildArray)(e)).length)
                    throw new Error("Children.only() expects only one child.");
                return e[0]
            },
            toArray: R.toChildArray
        }
          , ee = {
            configurable: !0,
            get: function() {
                return this.class
            }
        }
          , te = function(e) {
            function t(t) {
                var n;
                return (n = e.call(this, t) || this).isPureReactComponent = !0,
                n
            }
            var n, o;
            return o = e,
            (n = t).prototype = Object.create(o.prototype),
            n.prototype.constructor = n,
            n.__proto__ = o,
            t.prototype.shouldComponentUpdate = function(e, t) {
                return I(this.props, e) || I(this.state, t)
            }
            ,
            t
        }(R.Component);
        R.Component.prototype.isReactComponent = {};
        var ne = R.options.vnode;
        R.options.vnode = function(e) {
            e.$$typeof = X,
            function() {
                var t = e.type
                  , n = e.props;
                if (n && "string" == typeof t) {
                    var o = {};
                    for (var r in n)
                        /^on(Ani|Tra)/.test(r) && (n[r.toLowerCase()] = n[r],
                        delete n[r]),
                        o[r.toLowerCase()] = r;
                    if (o.ondoubleclick && (n.ondblclick = n[o.ondoubleclick],
                    delete n[o.ondoubleclick]),
                    o.onbeforeinput && (n.onbeforeinput = n[o.onbeforeinput],
                    delete n[o.onbeforeinput]),
                    o.onchange && ("textarea" === t || "input" === t.toLowerCase() && !/^fil|che|ra/i.test(n.type))) {
                        var a = o.oninput || "oninput";
                        n[a] || (n[a] = n[o.onchange],
                        delete n[o.onchange])
                    }
                }
            }();
            var t = e.type;
            t && t.t && e.ref && (e.props.ref = e.ref,
            e.ref = null),
            "function" == typeof t && !t.p && t.prototype && (E(t.prototype, "componentWillMount"),
            E(t.prototype, "componentWillReceiveProps"),
            E(t.prototype, "componentWillUpdate"),
            t.p = !0),
            ne && ne(e)
        }
        ;
        var oe = function(e, t) {
            return e(t)
        };
        t.default = {
            useState: r,
            useReducer: a,
            useEffect: i,
            useLayoutEffect: s,
            useRef: c,
            useImperativeHandle: l,
            useMemo: u,
            useCallback: p,
            useContext: d,
            useDebugValue: g,
            version: "16.8.0",
            Children: Z,
            render: w,
            hydrate: w,
            unmountComponentAtNode: N,
            createPortal: P,
            createElement: _,
            createContext: R.createContext,
            createFactory: x,
            cloneElement: T,
            createRef: R.createRef,
            Fragment: R.Fragment,
            isValidElement: S,
            findDOMNode: A,
            Component: R.Component,
            PureComponent: te,
            memo: B,
            forwardRef: D,
            unstable_batchedUpdates: oe,
            Suspense: j,
            lazy: C
        }
    },
    Fh2O: function() {},
    FkMG: function(e, t, n) {
        "use strict";
        function o() {
            return (o = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n)
                        ({}).hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            }
            ).apply(null, arguments)
        }
        var r;
        n.d(t, "a", (function() {
            return a
        }
        )),
        n.d(t, "b", (function() {
            return i
        }
        ));
        var a = function(e) {
            void 0 === e && (e = {}),
            o(this, {
                toggleType: "neutral",
                toggleColor: "#47d747",
                toggleActiveColor: "#ffffff",
                toggleText: "On",
                toggleOffColor: "#cccccc",
                toggleOffActiveColor: "#ffffff",
                toggleOffText: "Off",
                vendorsPlacement: ["underCategories"],
                purposesText: "Purposes",
                vendorsText: "Vendors",
                activeTabColor: "black",
                tabColor: "#555",
                tabBorderColor: "black",
                minHeight: {
                    type: "auto",
                    value: 1
                },
                maxHeight: {
                    type: "px",
                    value: 250
                },
                selectedLanguage: "",
                descriptionSpacing: {
                    paddingLeft: 0,
                    paddingRight: 0,
                    paddingTop: 16,
                    paddingBottom: 16
                },
                descriptionFont: {
                    fontSize: 13,
                    fontWeight: "500",
                    color: "#000000",
                    fontFamily: "arial, helvetica, sans-serif"
                },
                privacyPolicyNameSpacing: {
                    paddingLeft: 0,
                    paddingRight: 10,
                    paddingTop: 16,
                    paddingBottom: 16
                },
                privacyPolicyNameFont: {
                    fontSize: 14,
                    fontWeight: "500",
                    color: "#000000",
                    fontFamily: "arial, helvetica, sans-serif"
                },
                privacyPolicyText: "Privacy Policy:",
                vendorNameSpacing: {
                    paddingLeft: 0,
                    paddingRight: 0,
                    paddingTop: 16,
                    paddingBottom: 16
                },
                vendorNameFont: {
                    fontSize: 14,
                    fontWeight: "600",
                    color: "#000000",
                    fontFamily: "arial, helvetica, sans-serif"
                },
                categoriesVendorNameSpacing: {
                    paddingLeft: 0,
                    paddingRight: 0,
                    paddingTop: 16,
                    paddingBottom: 7
                },
                categoriesVendorNameFont: {
                    fontSize: 13,
                    fontWeight: "600",
                    color: "#000000",
                    fontFamily: "arial, helvetica, sans-serif"
                },
                vendorTitleNameSpacing: {
                    paddingLeft: 0,
                    paddingRight: 0,
                    paddingTop: 16,
                    paddingBottom: 16
                },
                vendorTitleNameFont: {
                    fontSize: 13,
                    fontWeight: "600",
                    color: "#000000",
                    fontFamily: "arial, helvetica, sans-serif"
                },
                categoryNameSpacing: {
                    paddingLeft: 0,
                    paddingRight: 0,
                    paddingTop: 16,
                    paddingBottom: 16
                },
                categoryNameFont: {
                    fontSize: 14,
                    fontWeight: "600",
                    color: "#000000",
                    fontFamily: "arial, helvetica, sans-serif"
                },
                stackCategoriesSpacing: {
                    paddingLeft: 0,
                    paddingRight: 15,
                    paddingTop: 0,
                    paddingBottom: 10
                },
                stackCategoriesFont: {
                    fontSize: 12,
                    fontWeight: "600",
                    color: "#000000",
                    fontFamily: "arial, helvetica, sans-serif"
                },
                borderColor: "gray",
                gpcVisible: !0,
                languages: {
                    EN: {
                        gpcText: "GPC is Enabled"
                    }
                },
                gpcSpacing: {
                    paddingLeft: 20,
                    paddingRight: 16,
                    paddingTop: 16,
                    paddingBottom: 16
                },
                gpcFont: {
                    fontSize: 13,
                    fontWeight: "600",
                    color: "#118d30",
                    fontFamily: "arial, helvetica, sans-serif"
                },
                pplSpacing: {
                    paddingLeft: 0,
                    paddingRight: 0,
                    paddingTop: 0,
                    paddingBottom: 0
                },
                pplFont: {
                    fontSize: 13,
                    fontWeight: "500",
                    color: "black",
                    fontFamily: "arial, helvetica, sans-serif"
                },
                linkStyle: {
                    fontWeight: "400",
                    color: "#0000ff",
                    textDecoration: "none"
                },
                linkHoverStyle: {
                    fontWeight: "400",
                    color: "#0000ff",
                    textDecoration: "underline"
                },
                identificationListSpacing: {
                    paddingLeft: 0,
                    paddingRight: 0,
                    paddingTop: 0,
                    paddingBottom: 0
                },
                identificationListFont: {
                    fontSize: 13,
                    fontWeight: "500",
                    color: "black",
                    fontFamily: "arial, helvetica, sans-serif"
                },
                background: "none",
                padding: {
                    paddingLeft: 0,
                    paddingRight: 0,
                    paddingTop: 10,
                    paddingBottom: 10
                },
                margin: {
                    marginLeft: 10,
                    marginRight: 10,
                    marginTop: 10,
                    marginBottom: 10
                },
                border: {
                    borderWidth: 0,
                    borderColor: "#000000",
                    borderTopLeftRadius: 0,
                    borderTopRightRadius: 0,
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,
                    borderStyle: "solid"
                },
                arrowIconColor: "#000"
            }),
            o(this, e)
        }
          , i = ((r = {
            "Vendor Settings": {
                vendorsPlacement: {
                    title: "Vendor Settings",
                    type: "VendorsPlacement"
                }
            },
            Tabs: {
                purposesText: {
                    title: "Purposes",
                    type: "InputLanguage"
                },
                vendorsText: {
                    title: "Vendors",
                    type: "InputLanguage"
                },
                activeTabColor: {
                    title: "Tab Active Color",
                    type: "ColorPicker"
                },
                tabColor: {
                    title: "Tag Inactive Color",
                    type: "ColorPicker"
                },
                tabBorderColor: {
                    title: "Tab Border Color",
                    type: "ColorPicker"
                }
            },
            height: {
                minHeight: {
                    title: "Min Scroll Height",
                    type: "Size"
                },
                maxHeight: {
                    title: "Max Scroll Height",
                    type: "Size"
                }
            },
            descriptions: {
                descriptionSpacing: {
                    title: "Padding",
                    type: "Padding"
                },
                descriptionFont: {
                    title: "Font",
                    type: "Font"
                }
            },
            "Category names": {
                categoryNameSpacing: {
                    title: "Padding",
                    type: "Padding"
                },
                categoryNameFont: {
                    title: "Font",
                    type: "Font"
                }
            },
            "Categories Vendor Title": {
                vendorTitleNameSpacing: {
                    title: "Padding",
                    type: "Padding"
                },
                vendorTitleNameFont: {
                    title: "Font",
                    type: "Font"
                }
            },
            "Categories Vendor Names": {
                categoriesVendorNameSpacing: {
                    title: "Padding",
                    type: "Padding"
                },
                categoriesVendorNameFont: {
                    title: "Font",
                    type: "Font"
                }
            },
            "Vendor names": {
                vendorNameSpacing: {
                    title: "Padding",
                    type: "Padding"
                },
                vendorNameFont: {
                    title: "Font",
                    type: "Font"
                }
            },
            "Vendor Privacy Policy": {
                privacyPolicyNameSpacing: {
                    title: "Padding",
                    type: "Padding"
                },
                privacyPolicyNameFont: {
                    title: "Font",
                    type: "Font"
                },
                privacyPolicyText: {
                    title: "Privacy Policy Text",
                    type: "InputLanguage"
                }
            },
            "Stack Categories": {
                stackCategoriesSpacing: {
                    title: "Padding",
                    type: "Padding"
                },
                stackCategoriesFont: {
                    title: "Font",
                    type: "Font"
                }
            },
            "Separator color": {
                borderColor: {
                    title: "Color",
                    type: "ColorPicker"
                }
            },
            "GPC Settings": {
                gpcVisible: {
                    title: "Show GPC?",
                    type: "Switch"
                },
                gpcText: {
                    title: "GPC Text",
                    type: "InputLanguage"
                },
                gpcSpacing: {
                    title: "Padding",
                    type: "Padding"
                },
                gpcFont: {
                    title: "Font",
                    type: "Font"
                }
            },
            "Toggle settings": {
                toggleType: {
                    title: "Type",
                    type: "ToggleType"
                },
                toggleColor: {
                    title: "ON Color",
                    type: "ColorPicker"
                },
                toggleActiveColor: {
                    title: "ON Active Text Color",
                    type: "ColorPicker"
                },
                toggleText: {
                    title: "ON Text",
                    type: "InputLanguage"
                },
                toggleOffColor: {
                    title: "OFF Color",
                    type: "ColorPicker"
                },
                toggleOffActiveColor: {
                    title: "OFF Active Text Color",
                    type: "ColorPicker"
                },
                toggleOffText: {
                    title: "OFF Text",
                    type: "InputLanguage"
                }
            }
        })["Separator color"] = {
            borderColor: {
                title: "Color",
                type: "ColorPicker"
            }
        },
        r["Privacy Policy link"] = {
            pplSpacing: {
                title: "Padding",
                type: "Padding"
            },
            pplFont: {
                title: "Font",
                type: "Font"
            },
            linkStyle: {
                title: "Link Style",
                type: "Links"
            },
            linkHoverStyle: {
                title: "Link Hover Style",
                type: "Links"
            }
        },
        r["Identification List"] = {
            identificationListSpacing: {
                title: "Padding",
                type: "Padding"
            },
            identificationListFont: {
                title: "Font",
                type: "Font"
            }
        },
        r.Spacing = {
            padding: {
                title: "Padding",
                type: "Padding"
            },
            margin: {
                title: "Margin",
                type: "Margin"
            }
        },
        r.Styles = {
            background: {
                title: "Background Color",
                type: "ColorPicker"
            },
            border: {
                title: "Border",
                type: "Border"
            }
        },
        r)
    },
    G9YQ: function(e, t, n) {
        "use strict";
        (function(e) {
            function o(e, t) {
                return (o = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t,
                    e
                }
                )(e, t)
            }
            n.d(t, "a", (function() {
                return g
            }
            ));
            var r = n("2mXy")
              , a = n("RSKk")
              , i = n("FdF9")
              , s = n("HbQw")
              , c = n.n(s)
              , l = n("H6Cw")
              , u = n("o1E3")
              , p = function(e) {
                var t = e.vendor
                  , n = e.accordionOpen
                  , o = e.arrowIconColor;
                return Object(r.h)("a", {
                    tabIndex: n ? 0 : -1,
                    href: t.policyUrl,
                    target: "_blank",
                    className: "vendor-tag linked"
                }, Object(r.h)("span", null, t.name), Object(r.h)("img", {
                    style: Object(a.a)(o),
                    src: c.a,
                    alt: ""
                }))
            }
              , d = function(e) {
                var t = e.feature
                  , n = e.accordionOpen
                  , o = e.settings;
                return o.alphabetizeVendors && t && t.vendors && t.vendors.sort((function(e, t) {
                    return e.name.toLowerCase() < t.name.toLowerCase() ? -1 : e.name.toLowerCase() > t.name.toLowerCase() ? 1 : 0
                }
                )),
                Object(r.h)("div", {
                    className: "feature-content"
                }, Object(u.h)(t.description), t.vendors.length > 0 && Object(r.h)("div", {
                    className: "policies"
                }, t.vendors.map((function(e) {
                    return Object(r.h)(p, {
                        vendor: e,
                        accordionOpen: n,
                        arrowIconColor: o.arrowIconColor
                    })
                }
                ))))
            }
              , g = function(t) {
                function n() {
                    return t.apply(this, arguments) || this
                }
                var a, i;
                return i = t,
                (a = n).prototype = Object.create(i.prototype),
                a.prototype.constructor = a,
                o(a, i),
                n.prototype.render = function() {
                    var t = this
                      , n = this.props
                      , o = n.features
                      , a = n.specialFeatures
                      , i = n.settings
                      , s = n.language
                      , c = n.dev
                      , p = Object(u.x)(Boolean(c), i, "featuresText", s)
                      , g = Object(u.x)(Boolean(c), i, "featuresInfo", s)
                      , f = Object(u.x)(Boolean(c), i, "specialFeaturesText", s)
                      , h = Object(u.x)(Boolean(c), i, "specialFeaturesInfo", s);
                    return Object(r.h)("div", {
                        className: "pm-features"
                    }, o.length > 0 && Object(r.h)(e, null, Object(r.h)("h2", {
                        id: "features-focus",
                        tabindex: "0",
                        className: "info-title"
                    }, p), Object(r.h)("p", {
                        className: "pm-sub-p"
                    }, g), o.map((function(e, n) {
                        return Object(r.h)(l.a, {
                            title: e.name,
                            key: "purpose-" + e._id,
                            settings: t.props.settings,
                            name: e.name,
                            child: "features",
                            language: s,
                            value: e,
                            description: e.description,
                            content: Object(r.h)(d, {
                                feature: e,
                                settings: i
                            }),
                            index: n
                        })
                    }
                    ))), a.length > 0 && Object(r.h)(e, null, Object(r.h)("h2", {
                        className: "info-title"
                    }, f), Object(r.h)("p", {
                        className: "pm-sub-p"
                    }, h), a.map((function(e, n) {
                        return Object(r.h)(l.a, {
                            key: "special-purpose-" + e._id,
                            settings: t.props.settings,
                            name: e.name,
                            child: "features",
                            language: s,
                            value: e,
                            vendors: e.vendors,
                            description: e.description,
                            content: Object(r.h)(d, {
                                feature: e,
                                settings: i
                            }),
                            toggle: t.props.togglePurposeOrFeature,
                            dev: c,
                            index: n
                        })
                    }
                    ))))
                }
                ,
                n
            }(i.Component)
        }
        ).call(this, n("2mXy").Fragment)
    },
    GeSn: function(e, t, n) {
        "use strict";
        function o(e) {
            return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function r(e, t) {
            return (r = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function a() {
            return (a = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }() ? Reflect.construct : function(e, t, n) {
                var o = [null];
                o.push.apply(o, t);
                var a = new (Function.bind.apply(e, o));
                return n && r(a, n.prototype),
                a
            }
            ).apply(null, arguments)
        }
        function i(e) {
            return function(e) {
                if (Array.isArray(e))
                    return s(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                    return Array.from(e)
            }(e) || function(e, t) {
                if (!e)
                    return;
                if ("string" == typeof e)
                    return s(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n)
                    return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                    return s(e, t)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function s(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, o = new Array(t); n < t; n++)
                o[n] = e[n];
            return o
        }
        function c(e) {
            return function(t) {
                for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
                    o[r - 1] = arguments[r];
                return j(e, t, o)
            }
        }
        function l(e, t, n) {
            n = n || _,
            g && g(e, null);
            for (var o = t.length; o--; ) {
                var r = t[o];
                if ("string" == typeof r) {
                    var a = n(r);
                    a !== r && (f(t) || (t[o] = a),
                    r = a)
                }
                e[r] = !0
            }
            return e
        }
        function u(e) {
            var t, n = y(null);
            for (t in e)
                j(d, e, [t]) && (n[t] = e[t]);
            return n
        }
        function p(e, t) {
            for (; null !== e; ) {
                var n = b(e, t);
                if (n) {
                    if (n.get)
                        return c(n.get);
                    if ("function" == typeof n.value)
                        return c(n.value)
                }
                e = h(e)
            }
            return function(e) {
                return console.warn("fallback value for", e),
                null
            }
        }
        n.d(t, "a", (function() {
            return te
        }
        ));
        var d = Object.hasOwnProperty
          , g = Object.setPrototypeOf
          , f = Object.isFrozen
          , h = Object.getPrototypeOf
          , b = Object.getOwnPropertyDescriptor
          , m = Object.freeze
          , v = Object.seal
          , y = Object.create
          , O = "undefined" != typeof Reflect && Reflect
          , j = O.apply
          , C = O.construct;
        j || (j = function(e, t, n) {
            return e.apply(t, n)
        }
        ),
        m || (m = function(e) {
            return e
        }
        ),
        v || (v = function(e) {
            return e
        }
        ),
        C || (C = function(e, t) {
            return a(e, i(t))
        }
        );
        var x, w = c(Array.prototype.forEach), k = c(Array.prototype.pop), P = c(Array.prototype.push), _ = c(String.prototype.toLowerCase), L = c(String.prototype.match), T = c(String.prototype.replace), S = c(String.prototype.indexOf), N = c(String.prototype.trim), I = c(RegExp.prototype.test), A = (x = TypeError,
        function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            return C(x, t)
        }
        ), B = m(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), D = m(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), E = m(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), F = m(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), V = m(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), M = m(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), R = m(["#text"]), U = m(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), H = m(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), z = m(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), q = m(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), K = v(/\{\{[\w\W]*|[\w\W]*\}\}/gm), W = v(/<%[\w\W]*|[\w\W]*%>/gm), G = v(/^data-[\-\w.\u00B7-\uFFFF]/), X = v(/^aria-[\-\w]+$/), Y = v(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i), $ = v(/^(?:\w+script|data):/i), Q = v(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g), J = v(/^html$/i), Z = function() {
            return "undefined" == typeof window ? null : window
        }, ee = function(e, t) {
            if ("object" !== o(e) || "function" != typeof e.createPolicy)
                return null;
            var n = null;
            t.currentScript && t.currentScript.hasAttribute("data-tt-policy-suffix") && (n = t.currentScript.getAttribute("data-tt-policy-suffix"));
            var r = "dompurify" + (n ? "#" + n : "");
            try {
                return e.createPolicy(r, {
                    createHTML: function(e) {
                        return e
                    },
                    createScriptURL: function(e) {
                        return e
                    }
                })
            } catch (e) {
                return console.warn("TrustedTypes policy " + r + " could not be created."),
                null
            }
        }, te = function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Z()
              , n = function(t) {
                return e(t)
            };
            if (n.version = "2.4.0",
            n.removed = [],
            !t || !t.document || 9 !== t.document.nodeType)
                return n.isSupported = !1,
                n;
            var r = t.document
              , a = t.document
              , s = t.DocumentFragment
              , c = t.HTMLTemplateElement
              , d = t.Node
              , g = t.Element
              , f = t.NodeFilter
              , h = t.NamedNodeMap
              , b = void 0 === h ? t.NamedNodeMap || t.MozNamedAttrMap : h
              , v = t.HTMLFormElement
              , y = t.DOMParser
              , O = t.trustedTypes
              , j = g.prototype
              , C = p(j, "cloneNode")
              , x = p(j, "nextSibling")
              , te = p(j, "childNodes")
              , ne = p(j, "parentNode");
            if ("function" == typeof c) {
                var oe = a.createElement("template");
                oe.content && oe.content.ownerDocument && (a = oe.content.ownerDocument)
            }
            var re = ee(O, r)
              , ae = re ? re.createHTML("") : ""
              , ie = a.implementation
              , se = a.createNodeIterator
              , ce = a.createDocumentFragment
              , le = a.getElementsByTagName
              , ue = r.importNode
              , pe = {};
            try {
                pe = u(a).documentMode ? a.documentMode : {}
            } catch (e) {}
            var de = {};
            n.isSupported = "function" == typeof ne && ie && void 0 !== ie.createHTMLDocument && 9 !== pe;
            var ge, fe, he = K, be = W, me = G, ve = X, ye = $, Oe = Q, je = Y, Ce = null, xe = l({}, [].concat(i(B), i(D), i(E), i(V), i(R))), we = null, ke = l({}, [].concat(i(U), i(H), i(z), i(q))), Pe = Object.seal(Object.create(null, {
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
            })), _e = null, Le = null, Te = !0, Se = !0, Ne = !1, Ie = !1, Ae = !1, Be = !1, De = !1, Ee = !1, Fe = !1, Ve = !1, Me = !0, Re = !1, Ue = !0, He = !1, ze = {}, qe = null, Ke = l({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), We = null, Ge = l({}, ["audio", "video", "img", "source", "image", "track"]), Xe = null, Ye = l({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), $e = "http://www.w3.org/1998/Math/MathML", Qe = "http://www.w3.org/2000/svg", Je = "http://www.w3.org/1999/xhtml", Ze = Je, et = !1, tt = ["application/xhtml+xml", "text/html"], nt = null, ot = a.createElement("form"), rt = function(e) {
                return e instanceof RegExp || e instanceof Function
            }, at = function(e) {
                nt && nt === e || (e && "object" === o(e) || (e = {}),
                e = u(e),
                ge = ge = -1 === tt.indexOf(e.PARSER_MEDIA_TYPE) ? "text/html" : e.PARSER_MEDIA_TYPE,
                fe = "application/xhtml+xml" === ge ? function(e) {
                    return e
                }
                : _,
                Ce = "ALLOWED_TAGS"in e ? l({}, e.ALLOWED_TAGS, fe) : xe,
                we = "ALLOWED_ATTR"in e ? l({}, e.ALLOWED_ATTR, fe) : ke,
                Xe = "ADD_URI_SAFE_ATTR"in e ? l(u(Ye), e.ADD_URI_SAFE_ATTR, fe) : Ye,
                We = "ADD_DATA_URI_TAGS"in e ? l(u(Ge), e.ADD_DATA_URI_TAGS, fe) : Ge,
                qe = "FORBID_CONTENTS"in e ? l({}, e.FORBID_CONTENTS, fe) : Ke,
                _e = "FORBID_TAGS"in e ? l({}, e.FORBID_TAGS, fe) : {},
                Le = "FORBID_ATTR"in e ? l({}, e.FORBID_ATTR, fe) : {},
                ze = "USE_PROFILES"in e && e.USE_PROFILES,
                Te = !1 !== e.ALLOW_ARIA_ATTR,
                Se = !1 !== e.ALLOW_DATA_ATTR,
                Ne = e.ALLOW_UNKNOWN_PROTOCOLS || !1,
                Ie = e.SAFE_FOR_TEMPLATES || !1,
                Ae = e.WHOLE_DOCUMENT || !1,
                Ee = e.RETURN_DOM || !1,
                Fe = e.RETURN_DOM_FRAGMENT || !1,
                Ve = e.RETURN_TRUSTED_TYPE || !1,
                De = e.FORCE_BODY || !1,
                Me = !1 !== e.SANITIZE_DOM,
                Re = e.SANITIZE_NAMED_PROPS || !1,
                Ue = !1 !== e.KEEP_CONTENT,
                He = e.IN_PLACE || !1,
                je = e.ALLOWED_URI_REGEXP || je,
                Ze = e.NAMESPACE || Je,
                e.CUSTOM_ELEMENT_HANDLING && rt(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (Pe.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),
                e.CUSTOM_ELEMENT_HANDLING && rt(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (Pe.attributeNameCheck = e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),
                e.CUSTOM_ELEMENT_HANDLING && "boolean" == typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (Pe.allowCustomizedBuiltInElements = e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),
                Ie && (Se = !1),
                Fe && (Ee = !0),
                ze && (Ce = l({}, i(R)),
                we = [],
                !0 === ze.html && (l(Ce, B),
                l(we, U)),
                !0 === ze.svg && (l(Ce, D),
                l(we, H),
                l(we, q)),
                !0 === ze.svgFilters && (l(Ce, E),
                l(we, H),
                l(we, q)),
                !0 === ze.mathMl && (l(Ce, V),
                l(we, z),
                l(we, q))),
                e.ADD_TAGS && (Ce === xe && (Ce = u(Ce)),
                l(Ce, e.ADD_TAGS, fe)),
                e.ADD_ATTR && (we === ke && (we = u(we)),
                l(we, e.ADD_ATTR, fe)),
                e.ADD_URI_SAFE_ATTR && l(Xe, e.ADD_URI_SAFE_ATTR, fe),
                e.FORBID_CONTENTS && (qe === Ke && (qe = u(qe)),
                l(qe, e.FORBID_CONTENTS, fe)),
                Ue && (Ce["#text"] = !0),
                Ae && l(Ce, ["html", "head", "body"]),
                Ce.table && (l(Ce, ["tbody"]),
                delete _e.tbody),
                m && m(e),
                nt = e)
            }, it = l({}, ["mi", "mo", "mn", "ms", "mtext"]), st = l({}, ["foreignobject", "desc", "title", "annotation-xml"]), ct = l({}, ["title", "style", "font", "a", "script"]), lt = l({}, D);
            l(lt, E),
            l(lt, F);
            var ut = l({}, V);
            l(ut, M);
            var pt = function(e) {
                P(n.removed, {
                    element: e
                });
                try {
                    e.parentNode.removeChild(e)
                } catch (t) {
                    try {
                        e.outerHTML = ae
                    } catch (t) {
                        e.remove()
                    }
                }
            }
              , dt = function(e, t) {
                try {
                    P(n.removed, {
                        attribute: t.getAttributeNode(e),
                        from: t
                    })
                } catch (e) {
                    P(n.removed, {
                        attribute: null,
                        from: t
                    })
                }
                if (t.removeAttribute(e),
                "is" === e && !we[e])
                    if (Ee || Fe)
                        try {
                            pt(t)
                        } catch (e) {}
                    else
                        try {
                            t.setAttribute(e, "")
                        } catch (e) {}
            }
              , gt = function(e) {
                var t, n;
                if (De)
                    e = "<remove></remove>" + e;
                else {
                    var o = L(e, /^[\r\n\t ]+/);
                    n = o && o[0]
                }
                "application/xhtml+xml" === ge && (e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>");
                var r = re ? re.createHTML(e) : e;
                if (Ze === Je)
                    try {
                        t = (new y).parseFromString(r, ge)
                    } catch (e) {}
                if (!t || !t.documentElement) {
                    t = ie.createDocument(Ze, "template", null);
                    try {
                        t.documentElement.innerHTML = et ? "" : r
                    } catch (e) {}
                }
                var i = t.body || t.documentElement;
                return e && n && i.insertBefore(a.createTextNode(n), i.childNodes[0] || null),
                Ze === Je ? le.call(t, Ae ? "html" : "body")[0] : Ae ? t.documentElement : i
            }
              , ft = function(e) {
                return se.call(e.ownerDocument || e, e, f.SHOW_ELEMENT | f.SHOW_COMMENT | f.SHOW_TEXT, null, !1)
            }
              , ht = function(e) {
                return "object" === o(d) ? e instanceof d : e && "object" === o(e) && "number" == typeof e.nodeType && "string" == typeof e.nodeName
            }
              , bt = function(e, t, o) {
                de[e] && w(de[e], (function(e) {
                    e.call(n, t, o, nt)
                }
                ))
            }
              , mt = function(e) {
                var t, o;
                if (bt("beforeSanitizeElements", e, null),
                (o = e)instanceof v && ("string" != typeof o.nodeName || "string" != typeof o.textContent || "function" != typeof o.removeChild || !(o.attributes instanceof b) || "function" != typeof o.removeAttribute || "function" != typeof o.setAttribute || "string" != typeof o.namespaceURI || "function" != typeof o.insertBefore))
                    return pt(e),
                    !0;
                if (I(/[\u0080-\uFFFF]/, e.nodeName))
                    return pt(e),
                    !0;
                var r = fe(e.nodeName);
                if (bt("uponSanitizeElement", e, {
                    tagName: r,
                    allowedTags: Ce
                }),
                e.hasChildNodes() && !ht(e.firstElementChild) && (!ht(e.content) || !ht(e.content.firstElementChild)) && I(/<[/\w]/g, e.innerHTML) && I(/<[/\w]/g, e.textContent))
                    return pt(e),
                    !0;
                if ("select" === r && I(/<template/i, e.innerHTML))
                    return pt(e),
                    !0;
                if (!Ce[r] || _e[r]) {
                    if (!_e[r] && yt(r)) {
                        if (Pe.tagNameCheck instanceof RegExp && I(Pe.tagNameCheck, r))
                            return !1;
                        if (Pe.tagNameCheck instanceof Function && Pe.tagNameCheck(r))
                            return !1
                    }
                    if (Ue && !qe[r]) {
                        var a = ne(e) || e.parentNode
                          , i = te(e) || e.childNodes;
                        if (i && a)
                            for (var s = i.length - 1; s >= 0; --s)
                                a.insertBefore(C(i[s], !0), x(e))
                    }
                    return pt(e),
                    !0
                }
                return e instanceof g && !function(e) {
                    var t = ne(e);
                    t && t.tagName || (t = {
                        namespaceURI: Je,
                        tagName: "template"
                    });
                    var n = _(e.tagName)
                      , o = _(t.tagName);
                    return e.namespaceURI === Qe ? t.namespaceURI === Je ? "svg" === n : t.namespaceURI === $e ? "svg" === n && ("annotation-xml" === o || it[o]) : Boolean(lt[n]) : e.namespaceURI === $e ? t.namespaceURI === Je ? "math" === n : t.namespaceURI === Qe ? "math" === n && st[o] : Boolean(ut[n]) : e.namespaceURI === Je && (!(t.namespaceURI === Qe && !st[o]) && (!(t.namespaceURI === $e && !it[o]) && (!ut[n] && (ct[n] || !lt[n]))))
                }(e) ? (pt(e),
                !0) : "noscript" !== r && "noembed" !== r || !I(/<\/no(script|embed)/i, e.innerHTML) ? (Ie && 3 === e.nodeType && (t = T(t = e.textContent, he, " "),
                t = T(t, be, " "),
                e.textContent !== t && (P(n.removed, {
                    element: e.cloneNode()
                }),
                e.textContent = t)),
                bt("afterSanitizeElements", e, null),
                !1) : (pt(e),
                !0)
            }
              , vt = function(e, t, n) {
                if (Me && ("id" === t || "name" === t) && (n in a || n in ot))
                    return !1;
                if (Se && !Le[t] && I(me, t))
                    ;
                else if (Te && I(ve, t))
                    ;
                else if (!we[t] || Le[t]) {
                    if (!(yt(e) && (Pe.tagNameCheck instanceof RegExp && I(Pe.tagNameCheck, e) || Pe.tagNameCheck instanceof Function && Pe.tagNameCheck(e)) && (Pe.attributeNameCheck instanceof RegExp && I(Pe.attributeNameCheck, t) || Pe.attributeNameCheck instanceof Function && Pe.attributeNameCheck(t)) || "is" === t && Pe.allowCustomizedBuiltInElements && (Pe.tagNameCheck instanceof RegExp && I(Pe.tagNameCheck, n) || Pe.tagNameCheck instanceof Function && Pe.tagNameCheck(n))))
                        return !1
                } else if (Xe[t])
                    ;
                else if (I(je, T(n, Oe, "")))
                    ;
                else if ("src" !== t && "xlink:href" !== t && "href" !== t || "script" === e || 0 !== S(n, "data:") || !We[e]) {
                    if (Ne && !I(ye, T(n, Oe, "")))
                        ;
                    else if (n)
                        return !1
                } else
                    ;return !0
            }
              , yt = function(e) {
                return e.indexOf("-") > 0
            }
              , Ot = function(e) {
                var t, r, a, i;
                bt("beforeSanitizeAttributes", e, null);
                var s = e.attributes;
                if (s) {
                    var c = {
                        attrName: "",
                        attrValue: "",
                        keepAttr: !0,
                        allowedAttributes: we
                    };
                    for (i = s.length; i--; ) {
                        t = s[i];
                        var l = t.name
                          , u = t.namespaceURI;
                        if (r = "value" === l ? t.value : N(t.value),
                        a = fe(l),
                        c.attrName = a,
                        c.attrValue = r,
                        c.keepAttr = !0,
                        c.forceKeepAttr = void 0,
                        bt("uponSanitizeAttribute", e, c),
                        r = c.attrValue,
                        !c.forceKeepAttr && (dt(l, e),
                        c.keepAttr))
                            if (I(/\/>/i, r))
                                dt(l, e);
                            else {
                                Ie && (r = T(r, he, " "),
                                r = T(r, be, " "));
                                var p = fe(e.nodeName);
                                if (vt(p, a, r)) {
                                    if (!Re || "id" !== a && "name" !== a || (dt(l, e),
                                    r = "user-content-" + r),
                                    re && "object" === o(O) && "function" == typeof O.getAttributeType)
                                        if (u)
                                            ;
                                        else
                                            switch (O.getAttributeType(p, a)) {
                                            case "TrustedHTML":
                                                r = re.createHTML(r);
                                                break;
                                            case "TrustedScriptURL":
                                                r = re.createScriptURL(r)
                                            }
                                    try {
                                        u ? e.setAttributeNS(u, l, r) : e.setAttribute(l, r),
                                        k(n.removed)
                                    } catch (e) {}
                                }
                            }
                    }
                    bt("afterSanitizeAttributes", e, null)
                }
            }
              , jt = function e(t) {
                var n, o = ft(t);
                for (bt("beforeSanitizeShadowDOM", t, null); n = o.nextNode(); )
                    bt("uponSanitizeShadowNode", n, null),
                    mt(n) || (n.content instanceof s && e(n.content),
                    Ot(n));
                bt("afterSanitizeShadowDOM", t, null)
            };
            return n.sanitize = function(e) {
                var a, i, c, l, u, p = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if ((et = !e) && (e = "\x3c!--\x3e"),
                "string" != typeof e && !ht(e)) {
                    if ("function" != typeof e.toString)
                        throw A("toString is not a function");
                    if ("string" != typeof (e = e.toString()))
                        throw A("dirty is not a string, aborting")
                }
                if (!n.isSupported) {
                    if ("object" === o(t.toStaticHTML) || "function" == typeof t.toStaticHTML) {
                        if ("string" == typeof e)
                            return t.toStaticHTML(e);
                        if (ht(e))
                            return t.toStaticHTML(e.outerHTML)
                    }
                    return e
                }
                if (Be || at(p),
                n.removed = [],
                "string" == typeof e && (He = !1),
                He) {
                    if (e.nodeName) {
                        var g = fe(e.nodeName);
                        if (!Ce[g] || _e[g])
                            throw A("root node is forbidden and cannot be sanitized in-place")
                    }
                } else if (e instanceof d)
                    1 === (i = (a = gt("\x3c!----\x3e")).ownerDocument.importNode(e, !0)).nodeType && "BODY" === i.nodeName ? a = i : "HTML" === i.nodeName ? a = i : a.appendChild(i);
                else {
                    if (!Ee && !Ie && !Ae && -1 === e.indexOf("<"))
                        return re && Ve ? re.createHTML(e) : e;
                    if (!(a = gt(e)))
                        return Ee ? null : Ve ? ae : ""
                }
                a && De && pt(a.firstChild);
                for (var f = ft(He ? e : a); c = f.nextNode(); )
                    3 === c.nodeType && c === l || mt(c) || (c.content instanceof s && jt(c.content),
                    Ot(c),
                    l = c);
                if (l = null,
                He)
                    return e;
                if (Ee) {
                    if (Fe)
                        for (u = ce.call(a.ownerDocument); a.firstChild; )
                            u.appendChild(a.firstChild);
                    else
                        u = a;
                    return we.shadowroot && (u = ue.call(r, u, !0)),
                    u
                }
                var h = Ae ? a.outerHTML : a.innerHTML;
                return Ae && Ce["!doctype"] && a.ownerDocument && a.ownerDocument.doctype && a.ownerDocument.doctype.name && I(J, a.ownerDocument.doctype.name) && (h = "<!DOCTYPE " + a.ownerDocument.doctype.name + ">\n" + h),
                Ie && (h = T(h, he, " "),
                h = T(h, be, " ")),
                re && Ve ? re.createHTML(h) : h
            }
            ,
            n.setConfig = function(e) {
                at(e),
                Be = !0
            }
            ,
            n.clearConfig = function() {
                nt = null,
                Be = !1
            }
            ,
            n.isValidAttribute = function(e, t, n) {
                nt || at({});
                var o = fe(e)
                  , r = fe(t);
                return vt(o, r, n)
            }
            ,
            n.addHook = function(e, t) {
                "function" == typeof t && (de[e] = de[e] || [],
                P(de[e], t))
            }
            ,
            n.removeHook = function(e) {
                if (de[e])
                    return k(de[e])
            }
            ,
            n.removeHooks = function(e) {
                de[e] && (de[e] = [])
            }
            ,
            n.removeAllHooks = function() {
                de = {}
            }
            ,
            n
        }()
    },
    H6Cw: function(e, t, n) {
        "use strict";
        function o(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, o)
            }
            return n
        }
        function r(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? o(Object(n), !0).forEach((function(t) {
                    a(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function a(e, t, n) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" != typeof e || !e)
                        return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var o = n.call(e, t || "default");
                        if ("object" != typeof o)
                            return o;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" == typeof t ? t : t + ""
            }(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function i(e, t) {
            return (i = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        n.d(t, "a", (function() {
            return d
        }
        ));
        var s = n("2mXy")
          , c = n("FdF9")
          , l = n("eeaA")
          , u = n("o1E3")
          , p = n("h6DV")
          , d = function(e) {
            function t() {
                for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++)
                    o[r] = arguments[r];
                return (t = e.call.apply(e, [this].concat(o)) || this).state = {
                    open: !1
                },
                t.toggleAccordion = function(e) {
                    if (void 0 !== e && !["stack-toggle", "opener", "expand"].some((function(t) {
                        return e.target.className.includes(t)
                    }
                    ))) {
                        t.setState({
                            open: !t.state.open
                        })
                    }
                }
                ,
                t
            }
            var n, o;
            o = e,
            (n = t).prototype = Object.create(o.prototype),
            n.prototype.constructor = n,
            i(n, o);
            var a = t.prototype;
            return a.shouldComponentUpdate = function(e, t) {
                var n = this.panel;
                n && t.open && setTimeout((function() {
                    n.style.maxHeight = n.scrollHeight + 1e3 + "px"
                }
                ), 100)
            }
            ,
            a.render = function() {
                var e = this
                  , t = this.props
                  , n = t.dev
                  , o = t.name
                  , a = t.accessName
                  , i = t.description
                  , d = t.content
                  , g = t.selected
                  , f = t.toggle
                  , h = t.child
                  , b = t.value
                  , m = t.language
                  , v = t.titleContent
                  , y = t.vendors
                  , O = t.isCustom
                  , j = t.locked
                  , C = t.consentType
                  , x = t.isApple
                  , w = t.isCustomVendorLabel1
                  , k = t.isCustomVendorLabel2
                  , P = t.isCustomVendorLabel3
                  , _ = t.appleDataBrokerLetter
                  , L = t.customVendorLabel1Letter
                  , T = t.customVendorLabel2Letter
                  , S = t.customVendorLabel3Letter
                  , N = t.usePurModel
                  , I = t.idfaStatus
                  , A = t.index
                  , B = t.key
                  , D = t.settings
                  , E = t.stack
                  , F = t.toggleStack
                  , V = t.title
                  , M = this.state.open
                  , R = this.props.settings || {}
                  , U = r({}, R.accordionsSpacing, {}, R.accordionsFont)
                  , H = r({}, R.panelSpacing, {}, R.panelFont)
                  , z = Object(u.x)(Boolean(n), R, "toggleText", m)
                  , q = Object(u.x)(Boolean(n), R, "toggleOffText", m)
                  , K = i ? i.slice(3).slice(0, -4) : ""
                  , W = Math.floor(1e5 * Math.random() + 1);
                return Object(s.h)("div", {
                    className: "tcfv2-stack",
                    id: 0 === A ? "features-focus" : B,
                    title: a || V
                }, Object(s.h)("div", {
                    className: O ? "stack-row custom" : "stack-row",
                    style: {
                        position: "relative"
                    }
                }, Object(s.h)("button", {
                    title: V,
                    className: (M ? "accordion active" : "accordion") + " focusable",
                    "aria-expanded": M ? "true" : "false",
                    style: U,
                    onClick: function(t) {
                        return e.toggleAccordion(t)
                    },
                    "aria-controls": W
                }, Object(s.h)("span", {
                    className: M ? "chevron up" : "chevron down"
                }), M && !v ? Object(s.h)("b", null, o) : o, x && Object(s.h)("span", {
                    className: "legend-key apple-broker"
                }, _), w && Object(s.h)("span", {
                    className: "legend-key is-custom-vendor-label-1",
                    "aria-hidden": !0
                }, L), k && Object(s.h)("span", {
                    className: "legend-key is-custom-vendor-label-2",
                    "aria-hidden": !0
                }, T), P && Object(s.h)("span", {
                    className: "legend-key is-custom-vendor-label-3",
                    "aria-hidden": !0
                }, S), v || null), f && Object(s.h)(l.a, {
                    accessName: a + " Toggle" || !1,
                    type: R.toggleType,
                    color: R.toggleColor,
                    colorActive: R.toggleActiveColor,
                    offColor: R.toggleOffColor,
                    offActiveColor: R.toggleOffActiveColor,
                    text: z,
                    offText: q,
                    toggle: f,
                    child: h,
                    vendors: y,
                    value: b,
                    locked: j,
                    legInt: "li" === g,
                    checked: "li" === g ? b.legInt : b.active,
                    consentType: C,
                    usePurModel: N,
                    selectedLi: "li" === g,
                    idfaStatus: I
                }), E && !N && Object(s.h)(p.a, {
                    stack: E,
                    selected: g,
                    language: m,
                    toggleStack: F,
                    settings: D,
                    dev: n
                })), Object(s.h)("div", {
                    id: W,
                    style: {
                        display: M ? "block" : "none"
                    },
                    className: "panel"
                }, Object(s.h)("p", {
                    style: r({}, H)
                }, d && M ? c.default.cloneElement(d, {
                    accordionOpen: M
                }) : K)))
            }
            ,
            t
        }(c.Component)
    },
    HD23: function() {},
    HbQw: function(e, t, n) {
        e.exports = n.p + "2700acc9ffd33b5bbb3866bd8b34ab32.svg"
    },
    Hm76: function() {},
    "I+oa": function(e, t, n) {
        e.exports = n.p + "a4e6bfc7a854c6ebc18a33b694e9dc37.svg"
    },
    "I/SG": function(e, t, n) {
        e.exports = n.p + "f652145c273ba2b2778ea64f52ed909e.svg"
    },
    Ig1F: function(e, t, n) {
        "use strict";
        function o() {
            return (o = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n)
                        ({}).hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            }
            ).apply(null, arguments)
        }
        function r() {
            return (r = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n)
                        ({}).hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            }
            ).apply(null, arguments)
        }
        function a(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, o)
            }
            return n
        }
        function i(e, t, n) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" != typeof e || !e)
                        return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var o = n.call(e, t || "default");
                        if ("object" != typeof o)
                            return o;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" == typeof t ? t : t + ""
            }(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        var s = n("2mXy")
          , c = n("FdF9")
          , l = function(e) {
            void 0 === e && (e = {}),
            o(this, {
                text: "Button",
                width: {
                    type: "auto",
                    value: 1
                },
                padding: {
                    paddingLeft: 15,
                    paddingRight: 15,
                    paddingTop: 10,
                    paddingBottom: 10
                },
                margin: {
                    marginLeft: 10,
                    marginRight: 10,
                    marginTop: 10,
                    marginBottom: 10
                },
                font: {
                    fontSize: 14,
                    fontWeight: "400",
                    color: "#ffffff",
                    fontFamily: "arial, helvetica, sans-serif"
                },
                background: "#1890ff",
                border: {
                    borderWidth: 0,
                    borderColor: "#000000",
                    borderTopLeftRadius: 5,
                    borderTopRightRadius: 5,
                    borderBottomLeftRadius: 5,
                    borderBottomRightRadius: 5,
                    borderStyle: "solid"
                },
                choice_option: {
                    type: null,
                    data: {}
                },
                languages: {},
                selectedLanguage: "",
                startFocus: !1
            }),
            o(this, e)
        }
          , u = n("o1E3")
          , p = n("5oGf");
        n("Q7tg");
        n.d(t, "a", (function() {
            return d
        }
        ));
        var d = function(e) {
            var t = e.component
              , n = e.makeChoice
              , o = e.dev
              , d = e.path
              , g = e.language
              , f = e.className
              , h = e.shown
              , b = e.neutralPm
              , m = e.allSelectionsMade
              , v = e.convertToRem
              , y = new l(t.settings)
              , O = Object(p.c)(d, o)
              , j = O.devActions
              , C = O.devClass
              , x = O.pathString
              , w = Object(c.useRef)();
            Object(c.useEffect)((function() {
                y.startFocus && (SpatialNavigation.clear(),
                SpatialNavigation.add({
                    selector: ".start-focus",
                    defaultElement: ".start-focus"
                }),
                setTimeout((function() {
                    return SpatialNavigation.focus()
                }
                ), 50))
            }
            ), [h]),
            Object(c.useEffect)((function() {
                w.current = h
            }
            ));
            var k = !o && b && y.choice_option && "SE" === y.choice_option.type && !m
              , P = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? a(Object(n), !0).forEach((function(t) {
                        i(e, t, n[t])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }({
                opacity: k ? .5 : 1
            }, y.padding, {}, y.margin, {}, y.border, {}, y.font, {
                background: y.background
            })
              , _ = v ? Object(u.c)(P) : P
              , L = y.padding
              , T = L.paddingLeft
              , S = L.paddingRight
              , N = y.margin
              , I = N.marginLeft
              , A = N.marginRight;
            _.width = "auto" === y.width.type ? "auto" : y.width.value + y.width.type,
            "%" === y.width.type && (_.width = "calc(" + y.width.value + "% - " + (T + S + I + A) + "px");
            var B, D, E = function() {
                var e = t.settings.choice_option.data
                  , o = t.settings.choice_option.type;
                e.button_text && n({
                    choiceId: e.button_text,
                    consentLanguage: Object(u.v)(g, y, "text"),
                    firstLayerSE: "SE" === o,
                    choiceData: e,
                    type: o
                })
            }, F = "message-component message-button no-children focusable" + f + C + (y.startFocus ? " start-focus" : "");
            F += " " + ((D = (B = t.settings.choice_option) ? B.type : null) ? "sp_choice_type_" + D : "");
            var V = Object(u.x)(o, y, "text", g);
            return Object(s.h)("button", r({
                "aria-disabled": k,
                disabled: k,
                title: V,
                "aria-label": V,
                onClick: E,
                onKeyDown: function(e) {
                    return Object(u.s)(e.key) && E()
                },
                className: F,
                path: o ? x : null,
                style: _
            }, j), V)
        }
    },
    Jvnj: function(e, t, n) {
        "use strict";
        function o() {
            return (o = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n)
                        ({}).hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            }
            ).apply(null, arguments)
        }
        function r() {
            return (r = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n)
                        ({}).hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            }
            ).apply(null, arguments)
        }
        function a(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, o)
            }
            return n
        }
        function i(e, t, n) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" != typeof e || !e)
                        return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var o = n.call(e, t || "default");
                        if ("object" != typeof o)
                            return o;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" == typeof t ? t : t + ""
            }(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        var s = n("2mXy")
          , c = n("FdF9")
          , l = n("GeSn")
          , u = n("KOA+")
          , p = function(e) {
            void 0 === e && (e = {});
            o(this, {
                color: "#000000",
                align: "left",
                font: {
                    fontSize: 14,
                    fontWeight: "400",
                    color: "#000000",
                    fontFamily: "arial, helvetica, sans-serif"
                },
                height: {
                    type: "percent",
                    value: 100
                },
                padding: {
                    paddingLeft: 15,
                    paddingRight: 15,
                    paddingTop: 10,
                    paddingBottom: 10
                },
                margin: {
                    marginLeft: 10,
                    marginRight: 10,
                    marginTop: 10,
                    marginBottom: 10
                },
                text: "Text",
                choice_options: [],
                width: {
                    type: "auto",
                    value: 100
                },
                link: {
                    fontWeight: "400",
                    color: "#0000ff",
                    textDecoration: "none"
                },
                hover: {
                    fontWeight: "400",
                    color: "#0000ff",
                    textDecoration: "underline"
                },
                languages: {},
                selectedLanguage: "",
                arrowColor: "#000000",
                startFocus: !1,
                heading: "p"
            }, e)
        }
          , d = n("o1E3")
          , g = n("5oGf")
          , f = n("gm8T")
          , h = n("D44D");
        n("CujF");
        n.d(t, "a", (function() {
            return b
        }
        ));
        var b = function(e) {
            function t(e) {
                var t;
                if ((void 0 === e.key || "Enter" === e.key || " " === e.key) && (this.dataset.choice ? t = this.dataset.choice : this.href && this.href.indexOf("$$$$:") >= 0 && (t = this.href.split("$$$$:")[1]),
                t)) {
                    e.preventDefault();
                    var r = (n.settings.choice_options || []).find((function(e) {
                        return e.data.button_text === t
                    }
                    ));
                    r && x ? y({
                        choiceId: r.type,
                        consentLanguage: Object(d.v)(o, S, "text"),
                        choiceData: r.data,
                        isAcceptLiOnly: "ACCEPT_LI_ONLY" === r.type
                    }) : r && r.data.button_text && y({
                        choiceId: r.data.button_text,
                        consentLanguage: Object(d.v)(o, S, "text"),
                        choiceData: r.data,
                        firstLayerSE: "SE" === r.type,
                        actionType: r.type
                    })
                }
            }
            var n = e.component
              , o = e.language
              , b = e.className
              , m = e.dev
              , v = e.path
              , y = e.makeChoice
              , O = e.vendorCount
              , j = void 0 === O ? {
                all: null,
                iab: null
            } : O
              , C = e.convertToRem
              , x = Object(c.useContext)(f.d)
              , w = Object(c.useContext)(f.j)
              , k = Object(g.c)(v, m)
              , P = k.devActions
              , _ = k.devClass
              , L = k.pathString
              , T = Object(c.useRef)(null);
            Object(c.useEffect)((function() {
                if (T.current)
                    for (var e = T.current.getElementsByTagName("A"), n = 0; n < e.length; n++)
                        e[n].addEventListener("click", t),
                        e[n].addEventListener("keypress", t);
                return function() {
                    if (T.current)
                        for (var e = T.current.getElementsByTagName("A"), n = 0; n < e.length; n++)
                            e[n].removeEventListener("click", t),
                            e[n].removeEventListener("keypress", t)
                }
            }
            ), [j]),
            Object(c.useEffect)((function() {
                document.getElementsByTagName("html")[0].lang = o && o.toLowerCase() || "EN"
            }
            ), []);
            var S = new p(n.settings)
              , N = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? a(Object(n), !0).forEach((function(t) {
                        i(e, t, n[t])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }({}, S.padding, {}, S.margin, {}, S.border, {}, S.font)
              , I = C ? Object(d.c)(N) : N;
            I.textAlign = S.align;
            var A = S.padding
              , B = A.paddingLeft
              , D = A.paddingRight
              , E = S.margin
              , F = E.marginLeft
              , V = E.marginRight;
            if (I.width = "auto" === S.width.type ? "auto" : S.width.value + S.width.type,
            I.height = "auto" === S.height.type ? "auto" : S.height.value + S.height.type,
            "%" === S.width.type) {
                var M = B + D + F + V;
                I.width = "calc(" + S.width.value + "% - " + (isNaN(M) ? 0 : M) + "px"
            }
            var R = "text-link-" + v.join("-")
              , U = l.a.sanitize("\n    ." + R + ":hover { color:" + S.hover.color + " !important; text-decoration:" + S.hover.textDecoration + " !important; font-weight: " + S.hover.fontWeight + " !important;  }\n  ")
              , H = "color:" + S.link.color + ";text-decoration:" + S.link.textDecoration + ";font-weight: " + S.link.fontWeight + ";"
              , z = Object(d.x)(m, S, "text", o).replace(/<a ([^>]*(href)[^>]*)>(.+?(?=<\/a))/g, (function(e, t, o, r) {
                (t = t.replace('aria-label="message-link"', "")).includes('href="javascript:void(0);"') && (t = t.replace('href="javascript:void(0);"', 'href="#"'));
                var a, i, s, c = t.split("$$$$:")[1], l = c ? c.split('"')[0] : null, u = (a = l,
                i = (n.settings.choice_options || []).find((function(e) {
                    return e.data.button_text === a
                }
                )),
                (s = i ? i.type || i.action_type : null) ? "sp_choice_type_" + s : "");
                return "<a aria-label='" + r + "' class='" + R + " " + u + " focusable' style='" + H + "' " + t + " >" + r
            }
            ));
            null === j.all && null === j.iab || (z = z.replace(/\$\$!VC-ALL!\$\$/g, j.all).replace(/\$\$!VC-IAB!\$\$/g, j.iab)),
            z = z.replace(/\$\$!UUID!\$\$/g, w);
            var q = ["h1", "h2", "h3", "p"].includes(S.heading) ? S.heading : "p"
              , K = ["h1", "h2", "h3", "p"].includes(q);
            return Object(c.useEffect)((function() {
                document.head && document.head.insertAdjacentHTML("beforeend", "<style>" + U + "</style>")
            }
            ), []),
            Object(s.h)(h.a, {
                pRef: T,
                settings: S
            }, Object(s.h)(q, r({
                tabindex: "0",
                className: "focusable message-component text no-children" + b + _,
                style: I,
                path: m ? L : null,
                ref: function(e) {
                    T.current = e,
                    e && S.font.size && e.style.setProperty("font-size", Settings.font.size + "px", "important")
                }
            }, P, {
                dangerouslySetInnerHTML: {
                    __html: Object(u.a)({
                        html: K ? z.replace(/^\<p\>/, "").replace(/\<\/p\>$/, "") : z
                    })
                }
            })))
        }
    },
    "KOA+": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return r
        }
        ));
        n("2mXy"),
        n("FdF9");
        var o = n("GeSn")
          , r = (n("gm8T"),
        function(e) {
            return o.a.sanitize(e.html, {
                ADD_ATTR: ["target"]
            })
        }
        )
    },
    KuTY: function(e, t, n) {
        "use strict";
        (function(e) {
            function o(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }
                    ))),
                    n.push.apply(n, o)
                }
                return n
            }
            function r(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? o(Object(n), !0).forEach((function(t) {
                        a(e, t, n[t])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }
            function a(e, t, n) {
                return (t = function(e) {
                    var t = function(e, t) {
                        if ("object" != typeof e || !e)
                            return e;
                        var n = e[Symbol.toPrimitive];
                        if (void 0 !== n) {
                            var o = n.call(e, t || "default");
                            if ("object" != typeof o)
                                return o;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === t ? String : Number)(e)
                    }(e, "string");
                    return "symbol" == typeof t ? t : t + ""
                }(t))in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n,
                e
            }
            var i = n("FdF9")
              , s = function(e) {
                return e.reduce((function(e, t) {
                    var n = e.find((function(e) {
                        return e.name === t.name && e.domain === t.domain
                    }
                    ));
                    return n ? (n.categories.push(t.categoryName),
                    e) : [].concat(e, [r({}, t, {
                        categories: [t.categoryName]
                    })])
                }
                ), [])
            }
              , c = function(t) {
                var n = t.categories
                  , o = Object(i.useState)(!1)
                  , r = o[0]
                  , a = o[1];
                return r ? n.map((function(t, n) {
                    return e("li", null, e("div", {
                        style: {
                            display: "flex"
                        }
                    }, e("p", {
                        tabindex: "0",
                        style: {
                            width: "85%"
                        }
                    }, t), 0 === n && e("button", {
                        className: "cookie-expander",
                        "aria-expanded": r,
                        "aria-controls": "section-id",
                        tabindex: "0",
                        style: {
                            all: "unset",
                            background: "purple",
                            color: "white",
                            width: 30,
                            height: 20,
                            borderRadius: 5,
                            cursor: "pointer",
                            textAlign: "center"
                        },
                        onClick: function() {
                            return a(!1)
                        }
                    }, "-")))
                }
                )) : e("li", null, e("div", {
                    style: {
                        display: "flex"
                    }
                }, e("p", {
                    tabindex: "0",
                    style: {
                        width: "85%"
                    }
                }, n[0]), n.length > 1 ? e("button", {
                    className: "cookie-expander",
                    tabindex: "0",
                    "aria-expanded": r,
                    "aria-controls": "section-id",
                    style: {
                        all: "unset",
                        background: "purple",
                        color: "white",
                        width: 30,
                        height: 20,
                        borderRadius: 5,
                        cursor: "pointer",
                        textAlign: "center"
                    },
                    onClick: function() {
                        return a(!0)
                    }
                }, "+", n.length - 1) : null))
            };
            t.a = function(t) {
                return s(t.cookies).map((function(t) {
                    return e("tr", null, e("td", {
                        tabindex: "0",
                        style: {
                            width: "20%"
                        }
                    }, e("span", null, t.name)), e("td", {
                        tabindex: "0",
                        className: "no-content"
                    }, t.domain), e("td", {
                        className: "category-td no-content"
                    }, e("ul", {
                        style: {
                            padding: 0,
                            margin: 0
                        }
                    }, e(c, {
                        categories: t.categories
                    }))), e("td", null, e("span", {
                        tabindex: "0"
                    }, t.cookieLifeSpan)))
                }
                ))
            }
        }
        ).call(this, n("2mXy").h)
    },
    "LX/k": function() {},
    Mb3r: function(e, t, n) {
        "use strict";
        (function(e) {
            function o() {
                return (o = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n)
                            ({}).hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                }
                ).apply(null, arguments)
            }
            function r(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }
                    ))),
                    n.push.apply(n, o)
                }
                return n
            }
            function a(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? r(Object(n), !0).forEach((function(t) {
                        i(e, t, n[t])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }
            function i(e, t, n) {
                return (t = function(e) {
                    var t = function(e, t) {
                        if ("object" != typeof e || !e)
                            return e;
                        var n = e[Symbol.toPrimitive];
                        if (void 0 !== n) {
                            var o = n.call(e, t || "default");
                            if ("object" != typeof o)
                                return o;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === t ? String : Number)(e)
                    }(e, "string");
                    return "symbol" == typeof t ? t : t + ""
                }(t))in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n,
                e
            }
            function s(e, t) {
                return (s = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t,
                    e
                }
                )(e, t)
            }
            n.d(t, "a", (function() {
                return b
            }
            ));
            var c = n("2mXy")
              , l = n("FdF9")
              , u = n("FkMG")
              , p = n("D2gz")
              , d = n("+w0D")
              , g = n("0I1l")
              , f = n("pYey")
              , h = (n("pmfO"),
            n("o1E3"))
              , b = function(t) {
                function n() {
                    for (var e, n = arguments.length, r = new Array(n), i = 0; i < n; i++)
                        r[i] = arguments[i];
                    return (e = t.call.apply(t, [this].concat(r)) || this).state = {
                        tab: e.props.pmTab ? e.props.pmTab || "categories" : e.props.message.defaultTab || "categories",
                        loading: !0
                    },
                    e.changeTab = function(t) {
                        return e.setState({
                            tab: t
                        })
                    }
                    ,
                    e.linkHover = function(e, t) {
                        e.target.style.color = t.color,
                        e.target.style.textDecoration = t.textDecoration,
                        e.target.style.fontWeight = t.fontWeight
                    }
                    ,
                    e.createPrivacyPolicyDiv = function(t) {
                        var n = t.privacyPolicySectionLink
                          , r = t.privacyPolicySectionText.split(/[\[\]]/)
                          , i = e.props.neutralPm ? new p.a(e.props.component.settings) : new u.a(e.props.component.settings)
                          , s = a({}, i.pplSpacing, {}, i.pplFont)
                          , l = {
                            style: i.linkStyle,
                            onMouseOver: function(t) {
                                return e.linkHover(t, i.linkHoverStyle)
                            },
                            onMouseOut: function(t) {
                                return e.linkHover(t, i.linkStyle)
                            }
                        };
                        return Object(c.h)("div", {
                            style: s
                        }, r[0], Object(c.h)("a", o({}, l, {
                            href: n,
                            target: "_blank"
                        }), r[1]), r[2])
                    }
                    ,
                    e.getIdentificationListStyles = function() {
                        var t = e.props.neutralPm ? new p.a(e.props.component.settings) : new u.a(e.props.component.settings);
                        return a({}, t.identificationListSpacing, {}, t.identificationListFont)
                    }
                    ,
                    e.createIdentificationListDiv = function(t, n) {
                        var o = e.getIdentificationListStyles();
                        return t.slice(n + 1).some((function(e) {
                            return e.identificationList
                        }
                        )) ? null : Object(c.h)("div", {
                            style: o
                        }, t[n].identificationList)
                    }
                    ,
                    e.createIdentificationListDivForEachCat = function(t) {
                        var n = e.getIdentificationListStyles();
                        return Object(c.h)("div", {
                            style: n
                        }, t.identificationList)
                    }
                    ,
                    e.supportsGPC = function() {
                        return "globalPrivacyControl"in navigator && navigator.globalPrivacyControl
                    }
                    ,
                    e.getTabStyle = function(t) {
                        var n = e.state.tab
                          , o = e.props.neutralPm ? new p.a(e.props.component.settings) : new u.a(e.props.component.settings)
                          , r = {
                            borderTopColor: o.tabBorderColor,
                            borderLeftColor: o.tabBorderColor,
                            borderRightColor: o.tabBorderColor,
                            color: o.tabColor
                        };
                        return a({}, r, n === t ? {
                            color: o.activeTabColor,
                            borderBottom: "1.3px solid " + e.props.message.background
                        } : {
                            borderBottomColor: o.tabBorderColor
                        })
                    }
                    ,
                    e
                }
                var r, i;
                i = t,
                (r = n).prototype = Object.create(i.prototype),
                r.prototype.constructor = r,
                s(r, i);
                var l = n.prototype;
                return l.componentDidUpdate = function(e) {
                    var t = this.props.component.settings.vendorsPlacement || []
                      , n = (e.component.settings.vendorsPlacement || []).includes("inTab")
                      , o = t.includes("inTab");
                    n && !o && "vendors" === this.state.tab && this.setState({
                        tab: "categories"
                    })
                }
                ,
                l.render = function() {
                    var t = this
                      , n = this.props
                      , r = n.language
                      , i = n.isFirstLayer
                      , s = n.neutralPm
                      , l = n.dev
                      , b = n.component
                      , m = n.isGlobalCmp
                      , v = n.pmData
                      , y = n.convertToRem
                      , O = this.state.tab
                      , j = a({}, this.props.pmData) || {};
                    if (!m && i && j.categories) {
                        var C = j.categories.filter((function(e) {
                            return "SYSTEM_PURPOSE" === e.type && e.systemId > 3
                        }
                        ));
                        j.categories = C
                    }
                    if (j.categories && !j.categories.length)
                        return Object(c.h)("div", {
                            className: "no-cats-messagee"
                        }, "No categories to display");
                    var x = s ? new p.a(b.settings) : new u.a(b.settings)
                      , w = {}
                      , k = !1
                      , P = JSON.stringify(this.props.path);
                    l && (w = a({}, l.hover),
                    k = l.current === P);
                    var _ = {};
                    _.minHeight = "auto" === x.minHeight.type ? "auto" : x.minHeight.value + x.minHeight.type,
                    _.maxHeight = "auto" === x.maxHeight.type ? "auto" : x.maxHeight.value + x.maxHeight.type;
                    var L = "message-component pm-us no-children" + this.props.className;
                    "vendors" === this.state.tab && (L += " vendors-tab"),
                    s && (L += " neutral-pm");
                    var T = {};
                    T.minHeight = "auto" === x.minHeight.type ? "auto" : x.minHeight.value + x.minHeight.type,
                    T.maxHeight = "auto" === x.maxHeight.type ? "auto" : x.maxHeight.value + x.maxHeight.type;
                    var S = a({}, x.gpcSpacing, {}, x.gpcFont)
                      , N = x.languages[r] && x.languages[r].gpcText || x.languages.EN.gpcText
                      , I = a({}, x.padding, {}, x.margin, {}, x.border);
                    I.background = x.background;
                    var A = x.vendorsPlacement.includes("inTab")
                      , B = x.vendorsPlacement.includes("underCategories")
                      , D = Object(h.x)(Boolean(l), x, "purposesText", r)
                      , E = Object(h.x)(Boolean(l), x, "vendorsText", r)
                      , F = y ? {
                        fontSize: Object(h.c)(16)
                    } : {}
                      , V = "categories" === this.state.tab ? m && B && !i ? Object(c.h)(g.a, {
                        isGlobalCmp: m,
                        isFirstLayer: i,
                        pmData: v,
                        settings: x,
                        toggleCategory: this.props.toggleCategory,
                        toggleStack: this.props.toggleStack,
                        vendors: j.vendors,
                        createIdentificationListDiv: this.createIdentificationListDiv,
                        createPrivacyPolicyDiv: this.createPrivacyPolicyDiv,
                        language: r,
                        convertToRem: y
                    }) : Object(c.h)(d.a, {
                        isGlobalCmp: m,
                        isFirstLayer: i,
                        pmData: v,
                        settings: x,
                        toggleCategory: this.props.toggleCategory,
                        toggleStack: this.props.toggleStack,
                        createIdentificationListDiv: this.createIdentificationListDiv,
                        createIdentificationListDivForEachCat: this.createIdentificationListDivForEachCat,
                        createPrivacyPolicyDiv: this.createPrivacyPolicyDiv,
                        language: r,
                        convertToRem: y
                    }) : Object(c.h)(f.a, {
                        isGlobalCmp: m,
                        isFirstLayer: i,
                        pmData: v,
                        settings: x,
                        toggleVendor: this.props.toggleVendor,
                        language: r,
                        convertToRem: y
                    });
                    return Object(c.h)("div", o({
                        style: I,
                        className: k ? L + " on-active pm-tcfv2-inline" : L + " pm-tcfv2-inline",
                        path: l ? P : null
                    }, w), A ? Object(c.h)(e, null, Object(c.h)("div", {
                        className: "pm-tabs",
                        role: "tablist",
                        style: a({
                            borderColor: x.tabBorderColor
                        }, F)
                    }, j.categories && j.categories.length > 0 && Object(c.h)("div", {
                        role: "tab",
                        tabIndex: "0",
                        className: "categories" === O ? "pm-tab active focusable" : "pm-tab focusable",
                        "aria-selected": "categories" === O ? "true" : "false",
                        onClick: function() {
                            return t.changeTab("categories")
                        },
                        onKeyDown: function(e) {
                            return Object(h.s)(e.key) && t.changeTab("categories")
                        },
                        title: D,
                        style: this.getTabStyle("categories")
                    }, D), j.vendors && j.vendors.length > 0 && Object(c.h)("div", {
                        role: "tab",
                        tabIndex: "0",
                        className: "vendors" === O ? "pm-tab active focusable" : "pm-tab focusable",
                        "aria-selected": "vendors" === O ? "true" : "false",
                        onClick: function() {
                            return t.changeTab("vendors")
                        },
                        onKeyDown: function(e) {
                            return Object(h.s)(e.key) && t.changeTab("vendors")
                        },
                        title: E,
                        style: this.getTabStyle("vendors")
                    }, E)), V) : V, function() {
                        var e = !i && x.gpcVisible && j.categories && j.categories.some((function(e) {
                            return e.respectGPC
                        }
                        ));
                        return l || (e = e && t.supportsGPC()),
                        e
                    }() ? Object(c.h)("div", {
                        className: "gpc",
                        style: S
                    }, Object(c.h)("span", null, "ⓘ"), " ", N) : null)
                }
                ,
                n
            }(l.Component)
        }
        ).call(this, n("2mXy").Fragment)
    },
    MjMI: function(e, t, n) {
        "use strict";
        (function(e, o) {
            n.d(t, "a", (function() {
                return d
            }
            ));
            var r = n("RSKk")
              , a = n("KOA+")
              , i = n("HbQw")
              , s = n.n(i)
              , c = n("o1E3")
              , l = n("d1XD")
              , u = n("KuTY")
              , p = function(t) {
                var n = t.vendorName
                  , o = t.style
                  , a = t.arrowIconColor;
                return e("a", {
                    style: void 0 === o ? {} : o,
                    href: t.url,
                    target: "_blank",
                    className: "vendor-tag linked"
                }, e("span", null, n), e("img", {
                    style: Object(r.a)(a),
                    src: s.a,
                    alt: n
                }))
            }
              , d = function(t) {
                var n = t.vendor
                  , r = t.settings
                  , i = t.language
                  , s = t.dev
                  , d = t.consentType
                  , g = t.accordionOpen
                  , f = Object(c.x)(Boolean(s), r, "cookieText", i)
                  , h = Object(c.x)(Boolean(s), r, "tableCookieText", i)
                  , b = Object(c.x)(Boolean(s), r, "tableCategoryText", i)
                  , m = Object(c.x)(Boolean(s), r, "tableDomainText", i)
                  , v = Object(c.x)(Boolean(s), r, "tableDurationText", i)
                  , y = Object(c.x)(Boolean(s), r, "iabConsent", i)
                  , O = Object(c.x)(Boolean(s), r, "iabLegInt", i)
                  , j = Object(c.x)(Boolean(s), r, "iabFeatures", i)
                  , C = Object(c.x)(Boolean(s), r, "iabSpecialFeatures", i)
                  , x = Object(c.x)(Boolean(s), r, "iabSpecialPurposes", i)
                  , w = Object(c.x)(Boolean(s), r, "privacyPolicyTitleText", i)
                  , k = Object(c.x)(Boolean(s), r, "legitIntUrlTitleText", i)
                  , P = Object(c.x)(Boolean(s), r, "purposeTitleText", i)
                  , _ = Object(c.x)(Boolean(s), r, "purposesTableHeaderText", i)
                  , L = Object(c.x)(Boolean(s), r, "retentionTableHeaderText", i)
                  , T = Object(c.x)(Boolean(s), r, "dataCategoriesTitleText", i)
                  , S = Object(c.x)(Boolean(s), r, "disclosurePurposes", i)
                  , N = n.consentCategories.some((function(e) {
                    return e.retention
                }
                ))
                  , I = n.legIntCategories.some((function(e) {
                    return e.retention
                }
                ))
                  , A = !!n.iabSpecialPurposesObjs;
                return e("div", {
                    className: "vendor-content"
                }, n.description && e("p", {
                    className: "pm-sub-p",
                    dangerouslySetInnerHTML: {
                        __html: Object(a.a)({
                            html: n.description
                        })
                    }
                }), n.cookieHeader && e("div", {
                    tabindex: "0",
                    className: "vendor-cookie-header"
                }, n.cookieHeader), e("div", {
                    style: {
                        flexDirection: "row",
                        alignItems: "center"
                    }
                }, e("div", {
                    tabindex: "0",
                    style: {
                        marginRight: 5
                    }
                }, w, ":"), e(p, {
                    style: {
                        margin: 0
                    },
                    vendorName: n.name,
                    url: n.policyUrl,
                    accordionOpen: g,
                    arrowIconColor: r.arrowIconColor
                })), n.legIntUrl && e("div", {
                    style: {
                        flexDirection: "row",
                        alignItems: "center"
                    }
                }, e("div", {
                    tabindex: "0",
                    style: {
                        marginRight: 5
                    }
                }, k, ":"), e(p, {
                    style: {
                        margin: 0
                    },
                    vendorName: n.name,
                    url: n.legIntUrl,
                    accordionOpen: g,
                    arrowIconColor: r.arrowIconColor
                })), e("hr", null), e("h4", {
                    className: "purpose-content",
                    tabindex: "0"
                }, P), e("div", null, "consent" === d && (N || A) && e("table", {
                    style: {
                        border: "1px solid #00000038",
                        borderRadius: 5,
                        borderCollapse: "collapse",
                        width: "100%"
                    }
                }, N && e(o, null, e("thead", null, e("tr", null, e("th", {
                    scope: "col",
                    tabindex: "0",
                    style: {
                        textAlign: "left",
                        padding: 10
                    }
                }, _), e("th", {
                    scope: "col",
                    tabindex: "0",
                    style: {
                        textAlign: "center",
                        padding: 10
                    }
                }, L))), e("tbody", null, n.consentCategories.map((function(t, n) {
                    return e("tr", {
                        key: "consent-" + n
                    }, e("td", {
                        tabindex: "0",
                        style: {
                            padding: 8
                        }
                    }, t.name), e("td", {
                        tabindex: "0",
                        style: {
                            textAlign: "center",
                            minWidth: 100,
                            padding: 8
                        }
                    }, t.retention || "-"))
                }
                )))), A && e(o, null, e("thead", null, e("tr", null, e("th", {
                    tabIndex: "0",
                    colSpan: 2,
                    style: {
                        textAlign: "left",
                        padding: 12,
                        backgroundColor: "#f0f0f0",
                        borderTop: "1px solid #ccc"
                    }
                }, x))), e("tbody", null, n.iabSpecialPurposesObjs.map((function(t, n) {
                    return e("tr", {
                        key: "special-" + n
                    }, e("td", {
                        tabIndex: "0",
                        style: {
                            padding: 8
                        }
                    }, t.name), e("td", {
                        tabIndex: "0",
                        style: {
                            textAlign: "center",
                            minWidth: 100,
                            padding: 8
                        }
                    }, t.retention || "-"))
                }
                ))))), "li" === d && (I || A) && e("table", {
                    style: {
                        border: "1px solid #00000038",
                        padding: 10,
                        borderRadius: 5
                    }
                }, I && e(o, null, e("tr", null, e("th", {
                    scope: "col",
                    tabIndex: "0",
                    style: {
                        textAlign: "left"
                    }
                }, O), e("th", {
                    scope: "col",
                    tabIndex: "0",
                    style: {
                        textAlign: "center"
                    }
                }, L)), n.legIntCategories.map((function(t) {
                    return e("tr", null, e("td", {
                        tabIndex: "0"
                    }, t.name), e("td", {
                        tabIndex: "0",
                        style: {
                            textAlign: "center",
                            minWidth: 100
                        }
                    }, t.retention || "-"))
                }
                ))), A && e(o, null, e("tr", null, e("th", {
                    tabIndex: "0",
                    style: {
                        textAlign: "left"
                    }
                }, x)), n.iabSpecialPurposesObjs.map((function(t) {
                    return e("tr", null, e("td", {
                        tabIndex: "0"
                    }, t.name), e("td", {
                        tabIndex: "0",
                        style: {
                            textAlign: "center",
                            minWidth: 100
                        }
                    }, t.retention || "-"))
                }
                )))), "consent" === d && !N && n.consentCategories.length > 0 && e("div", {
                    className: "vendor-info"
                }, e("div", {
                    className: "info-title"
                }, e("h4", {
                    tabindex: "0",
                    class: "vendor-purposes-header"
                }, y)), n.consentCategories.map((function(t) {
                    return e("div", {
                        tabIndex: "0"
                    }, "• ", t.name || t)
                }
                ))), "li" === d && !I && n.legIntCategories.length > 0 && e("div", {
                    className: "vendor-info"
                }, e("div", {
                    className: "info-title"
                }, e("h4", {
                    tabindex: "0",
                    class: "vendor-purposes-header"
                }, O)), n.legIntCategories.map((function(t) {
                    return e("div", {
                        tabindex: "0"
                    }, "• ", t.name || t)
                }
                ))), "li" === d && n.disclosureOnlyCategories.length > 0 && e("div", {
                    className: "vendor-info"
                }, e("div", {
                    className: "info-title"
                }, e("h4", {
                    tabindex: "0",
                    class: "vendor-purposes-header"
                }, S)), n.disclosureOnlyCategories.map((function(t) {
                    return e("div", {
                        tabindex: "0"
                    }, "• ", t.name || t)
                }
                ))), n.iabFeatures.length > 0 && e("div", {
                    className: "vendor-info"
                }, e("div", {
                    className: "info-title"
                }, e("h4", {
                    tabindex: "0",
                    class: "vendor-purposes-header"
                }, j)), n.iabFeatures.map((function(t) {
                    return e("div", {
                        tabindex: "0"
                    }, "• ", t.name || t)
                }
                ))), n.iabSpecialFeatures.length > 0 && e("div", {
                    className: "vendor-info"
                }, e("div", {
                    className: "info-title"
                }, e("h4", {
                    tabindex: "0",
                    class: "vendor-purposes-header"
                }, C)), n.iabSpecialFeatures.map((function(t) {
                    return e("div", {
                        tabindex: "0"
                    }, "• ", t.name || t)
                }
                ))), !A && n.iabSpecialPurposes.length > 0 && e("div", {
                    className: "vendor-info"
                }, e("div", {
                    className: "info-title"
                }, e("h4", {
                    tabindex: "0",
                    class: "vendor-purposes-header"
                }, x)), n.iabSpecialPurposes.map((function(t) {
                    return e("div", {
                        tabindex: "0"
                    }, "• ", t.name || t)
                }
                )))), n.iabDataCategories && n.iabDataCategories.length ? e("div", null, e("h4", {
                    tabindex: "0"
                }, T), n.iabDataCategories.map((function(t, o) {
                    return e(l.a, {
                        dataCategory: t,
                        first: 0 === o,
                        last: o === n.iabDataCategories.length - 1
                    })
                }
                ))) : null, n.cookies.length > 0 && e("div", {
                    className: "vendor-cookies"
                }, e("table", {
                    className: "tvtbl"
                }, e("caption", {
                    tabindex: "0",
                    className: "cookie-title",
                    style: {
                        textAlign: "left"
                    }
                }, f), e("tr", null, e("th", {
                    scope: "col",
                    tabindex: "0"
                }, h), e("th", {
                    scope: "col",
                    tabindex: "0"
                }, m), e("th", {
                    scope: "col",
                    tabindex: "0"
                }, b), e("th", {
                    scope: "col",
                    tabindex: "0"
                }, v)), n.cookies.length > 0 && e(u.a, {
                    cookies: n.cookies
                }))))
            }
        }
        ).call(this, n("2mXy").h, n("2mXy").Fragment)
    },
    NLdj: function(e, t, n) {
        "use strict";
        function o(e, t) {
            return (o = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        n.d(t, "a", (function() {
            return c
        }
        ));
        var r = n("2mXy")
          , a = n("FdF9")
          , i = n("5ehb")
          , s = n("o1E3")
          , c = function(e) {
            function t() {
                for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++)
                    o[r] = arguments[r];
                return (t = e.call.apply(e, [this].concat(o)) || this).state = {
                    all: !1
                },
                t.toggleAll = function() {
                    t.setState({
                        all: !t.state.all
                    }, t.props.force)
                }
                ,
                t
            }
            var n, a;
            return a = e,
            (n = t).prototype = Object.create(a.prototype),
            n.prototype.constructor = n,
            o(n, a),
            t.prototype.render = function() {
                var e = this
                  , t = this.props
                  , n = t.purpose
                  , o = t.language
                  , a = t.settings
                  , c = t.force
                  , l = t.dev
                  , u = t.accordionOpen
                  , p = this.state.all
                  , d = Object(s.x)(Boolean(l), a, "viewAllText", o)
                  , g = Object(s.x)(Boolean(l), a, "viewLessText", o)
                  , f = Object(s.x)(Boolean(l), a, "vendorTitleText", o);
                return a.alphabetizeVendors && n.vendors && n.vendors.sort((function(e, t) {
                    return e.name.toLowerCase() < t.name.toLowerCase() ? -1 : e.name.toLowerCase() > t.name.toLowerCase() ? 1 : 0
                }
                )),
                Object(r.h)("div", {
                    className: "purpose-content "
                }, Object(r.h)("p", {
                    tabindex: "0",
                    style: "margin-bottom:15px;"
                }, Object(s.h)(n.description)), Object(r.h)("div", null, n.vendors.length, " ", f, Object(r.h)("div", {
                    className: "policies"
                }, n.vendors.slice(0, p ? n.vendors.length : 3).map((function(e) {
                    return Object(r.h)(i.a, {
                        vendor: e,
                        key: e.vendorId,
                        language: o,
                        settings: a,
                        force: c,
                        dev: l,
                        accordionOpen: u,
                        isSpecialPurpose: !0
                    })
                }
                )), n.vendors.length > 3 ? Object(r.h)("div", {
                    tabindex: "0",
                    className: "view-all",
                    role: "button",
                    onClick: this.toggleAll,
                    onKeyDown: function(t) {
                        return Object(s.s)(t.key) && e.toggleAll()
                    }
                }, p ? g : d) : null)))
            }
            ,
            t
        }(a.Component)
    },
    OSPv: function(e, t, n) {
        "use strict";
        (function(e) {
            n.d(t, "a", (function() {
                return r
            }
            ));
            n("FdF9");
            var o = n("Mb3r")
              , r = function(t) {
                return e(o.a, t)
            }
        }
        ).call(this, n("2mXy").h)
    },
    Pidg: function(e, t, n) {
        e.exports = n.p + "2700acc9ffd33b5bbb3866bd8b34ab32.svg"
    },
    Pp7d: function() {},
    Q7tg: function() {},
    Qnqb: function(e) {
        !function(t, n) {
            "use strict";
            e.exports ? e.exports = n() : t.nacl ? t.nacl.util = n() : (t.nacl = {},
            t.nacl.util = n())
        }(this, (function() {
            "use strict";
            function e(e) {
                if (!/^(?:[A-Za-z0-9+\/]{2}[A-Za-z0-9+\/]{2})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/.test(e))
                    throw new TypeError("invalid encoding")
            }
            var t = {
                decodeUTF8: function(e) {
                    if ("string" != typeof e)
                        throw new TypeError("expected string");
                    var t, n = unescape(encodeURIComponent(e)), o = new Uint8Array(n.length);
                    for (t = 0; t < n.length; t++)
                        o[t] = n.charCodeAt(t);
                    return o
                },
                encodeUTF8: function(e) {
                    var t, n = [];
                    for (t = 0; t < e.length; t++)
                        n.push(String.fromCharCode(e[t]));
                    return decodeURIComponent(escape(n.join("")))
                }
            };
            return "undefined" == typeof atob ? void 0 !== Buffer.from ? (t.encodeBase64 = function(e) {
                return Buffer.from(e).toString("base64")
            }
            ,
            t.decodeBase64 = function(t) {
                return e(t),
                new Uint8Array(Array.prototype.slice.call(Buffer.from(t, "base64"), 0))
            }
            ) : (t.encodeBase64 = function(e) {
                return new Buffer(e).toString("base64")
            }
            ,
            t.decodeBase64 = function(t) {
                return e(t),
                new Uint8Array(Array.prototype.slice.call(new Buffer(t,"base64"), 0))
            }
            ) : (t.encodeBase64 = function(e) {
                var t, n = [], o = e.length;
                for (t = 0; t < o; t++)
                    n.push(String.fromCharCode(e[t]));
                return btoa(n.join(""))
            }
            ,
            t.decodeBase64 = function(t) {
                e(t);
                var n, o = atob(t), r = new Uint8Array(o.length);
                for (n = 0; n < o.length; n++)
                    r[n] = o.charCodeAt(n);
                return r
            }
            ),
            t
        }
        ))
    },
    RSKk: function(e, t, n) {
        "use strict";
        function o(e, t) {
            var n = "function" == typeof Symbol && e[Symbol.iterator];
            if (!n)
                return e;
            var o, r, a = n.call(e), i = [];
            try {
                for (; (void 0 === t || t-- > 0) && !(o = a.next()).done; )
                    i.push(o.value)
            } catch (e) {
                r = {
                    error: e
                }
            } finally {
                try {
                    o && !o.done && (n = a.return) && n.call(a)
                } finally {
                    if (r)
                        throw r.error
                }
            }
            return i
        }
        function r() {
            return (r = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n)
                        ({}).hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            }
            ).apply(null, arguments)
        }
        function a() {
            return (a = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n)
                        ({}).hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            }
            ).apply(null, arguments)
        }
        var i = function() {
            function e(e, t, n) {
                this.r = 0,
                this.g = 0,
                this.b = 0,
                this.set(e, t, n)
            }
            return e.prototype.set = function(e, t, n) {
                this.r = this.clamp(e),
                this.g = this.clamp(t),
                this.b = this.clamp(n)
            }
            ,
            e.prototype.hueRotate = function(e) {
                void 0 === e && (e = 0),
                e = e / 180 * Math.PI;
                var t = Math.sin(e)
                  , n = Math.cos(e);
                this.multiply([.213 + .787 * n - .213 * t, .715 - .715 * n - .715 * t, .072 - .072 * n + .928 * t, .213 - .213 * n + .143 * t, .715 + .285 * n + .14 * t, .072 - .072 * n - .283 * t, .213 - .213 * n - .787 * t, .715 - .715 * n + .715 * t, .072 + .928 * n + .072 * t])
            }
            ,
            e.prototype.grayscale = function(e) {
                void 0 === e && (e = 1),
                this.multiply([.2126 + .7874 * (1 - e), .7152 - .7152 * (1 - e), .0722 - .0722 * (1 - e), .2126 - .2126 * (1 - e), .7152 + .2848 * (1 - e), .0722 - .0722 * (1 - e), .2126 - .2126 * (1 - e), .7152 - .7152 * (1 - e), .0722 + .9278 * (1 - e)])
            }
            ,
            e.prototype.sepia = function(e) {
                void 0 === e && (e = 1),
                this.multiply([.393 + .607 * (1 - e), .769 - .769 * (1 - e), .189 - .189 * (1 - e), .349 - .349 * (1 - e), .686 + .314 * (1 - e), .168 - .168 * (1 - e), .272 - .272 * (1 - e), .534 - .534 * (1 - e), .131 + .869 * (1 - e)])
            }
            ,
            e.prototype.saturate = function(e) {
                void 0 === e && (e = 1),
                this.multiply([.213 + .787 * e, .715 - .715 * e, .072 - .072 * e, .213 - .213 * e, .715 + .285 * e, .072 - .072 * e, .213 - .213 * e, .715 - .715 * e, .072 + .928 * e])
            }
            ,
            e.prototype.multiply = function(e) {
                var t = this.clamp(this.r * e[0] + this.g * e[1] + this.b * e[2])
                  , n = this.clamp(this.r * e[3] + this.g * e[4] + this.b * e[5])
                  , o = this.clamp(this.r * e[6] + this.g * e[7] + this.b * e[8]);
                this.r = t,
                this.g = n,
                this.b = o
            }
            ,
            e.prototype.brightness = function(e) {
                void 0 === e && (e = 1),
                this.linear(e)
            }
            ,
            e.prototype.contrast = function(e) {
                void 0 === e && (e = 1),
                this.linear(e, -.5 * e + .5)
            }
            ,
            e.prototype.linear = function(e, t) {
                void 0 === e && (e = 1),
                void 0 === t && (t = 0),
                this.r = this.clamp(this.r * e + 255 * t),
                this.g = this.clamp(this.g * e + 255 * t),
                this.b = this.clamp(this.b * e + 255 * t)
            }
            ,
            e.prototype.invert = function(e) {
                void 0 === e && (e = 1),
                this.r = this.clamp(255 * (e + this.r / 255 * (1 - 2 * e))),
                this.g = this.clamp(255 * (e + this.g / 255 * (1 - 2 * e))),
                this.b = this.clamp(255 * (e + this.b / 255 * (1 - 2 * e)))
            }
            ,
            e.prototype.hsl = function() {
                var e = this.r / 255
                  , t = this.g / 255
                  , n = this.b / 255
                  , o = Math.max(e, t, n)
                  , r = Math.min(e, t, n)
                  , a = 0
                  , i = (o + r) / 2;
                if (o === r)
                    return {
                        h: 0,
                        s: 0,
                        l: 100 * i
                    };
                var s = o - r;
                return o === e ? a = (t - n) / s + (t < n ? 6 : 0) : o === t ? a = (n - e) / s + 2 : o === n && (a = (e - t) / s + 4),
                {
                    h: 100 * (a /= 6),
                    s: 100 * (i > .5 ? s / (2 - o - r) : s / (o + r)),
                    l: 100 * i
                }
            }
            ,
            e.prototype.clamp = function(e) {
                return Math.min(Math.max(e, 0), 255)
            }
            ,
            e
        }()
          , s = function() {
            function e(e, t) {
                this.target = e,
                this.targetHSL = e.hsl(),
                this.options = r({}, {
                    acceptanceLossPercentage: 5,
                    maxChecks: 15
                }, t),
                this.reusedColor = new i(0,0,0)
            }
            return e.prototype.solve = function() {
                var e = this.solveNarrow(this.solveWide());
                return {
                    values: e.values,
                    called: e.called,
                    loss: e.loss,
                    filter: this.css(e.values)
                }
            }
            ,
            e.prototype.solveWide = function() {
                for (var e = [60, 180, 18e3, 600, 1.2, 1.2], t = {
                    loss: 1 / 0
                }, n = 0; t.loss > this.options.acceptanceLossPercentage; ) {
                    var o = this.spsa({
                        A: 5,
                        a: e,
                        c: 15,
                        values: [50, 20, 3750, 50, 100, 100],
                        maxTriesInLoop: 1e3
                    });
                    if (o.loss < t.loss && (t = o),
                    (n += 1) >= this.options.maxChecks)
                        break
                }
                return r({}, t, {
                    called: n
                })
            }
            ,
            e.prototype.solveNarrow = function(e) {
                var t = e.loss
                  , n = t + 1;
                return this.spsa({
                    A: t,
                    a: [.25 * n, .25 * n, n, .25 * n, .2 * n, .2 * n],
                    c: 2,
                    values: e.values,
                    maxTriesInLoop: 500,
                    called: e.called
                })
            }
            ,
            e.prototype.fixValueByFilterIDX = function(e, t) {
                var n = 100;
                return 2 === t ? n = 7500 : 4 !== t && 5 !== t || (n = 200),
                3 === t ? e > n ? e %= n : e < 0 && (e = n + e % n) : e < 0 ? e = 0 : e > n && (e = n),
                e
            }
            ,
            e.prototype.spsa = function(e) {
                for (var t = e.A, n = e.a, o = e.c, r = e.values, a = e.maxTriesInLoop, i = void 0 === a ? 500 : a, s = e.called, c = void 0 === s ? 0 : s, l = null, u = 1 / 0, p = new Array(6), d = new Array(6), g = new Array(6), f = 0; f < i; f++) {
                    for (var h = o / Math.pow(f + 1, .16666666666666666), b = 0; b < 6; b++)
                        p[b] = Math.random() > .5 ? 1 : -1,
                        d[b] = r[b] + h * p[b],
                        g[b] = r[b] - h * p[b];
                    var m = this.loss(d) - this.loss(g);
                    for (b = 0; b < 6; b++) {
                        var v = m / (2 * h) * p[b]
                          , y = n[b] / Math.pow(t + f + 1, 1);
                        r[b] = this.fixValueByFilterIDX(r[b] - y * v, b)
                    }
                    var O = this.loss(r);
                    O < u && (l = r.slice(0),
                    u = O)
                }
                return {
                    values: l,
                    loss: u,
                    called: c
                }
            }
            ,
            e.prototype.loss = function(e) {
                var t = this.reusedColor;
                t.set(0, 0, 0),
                t.invert(e[0] / 100),
                t.sepia(e[1] / 100),
                t.saturate(e[2] / 100),
                t.hueRotate(3.6 * e[3]),
                t.brightness(e[4] / 100),
                t.contrast(e[5] / 100);
                var n = t.hsl();
                return Math.abs(t.r - this.target.r) + Math.abs(t.g - this.target.g) + Math.abs(t.b - this.target.b) + Math.abs(n.h - this.targetHSL.h) + Math.abs(n.s - this.targetHSL.s) + Math.abs(n.l - this.targetHSL.l)
            }
            ,
            e.prototype.css = function(e) {
                var t = function(t, n) {
                    return void 0 === n && (n = 1),
                    Math.round(e[t] * n)
                };
                return ["invert(".concat(t(0), "%)"), "sepia(".concat(t(1), "%)"), "saturate(".concat(t(2), "%)"), "hue-rotate(".concat(t(3, 3.6), "deg)"), "brightness(".concat(t(4), "%)"), "contrast(".concat(t(5), "%)")].join(" ")
            }
            ,
            e
        }();
        n.d(t, "a", (function() {
            return u
        }
        ));
        var c = function(e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        }
          , l = {}
          , u = function(e, t) {
            var n, r, u, p, d, g;
            if (void 0 === t && (t = {}),
            l[e] && !t.forceFilterRecalculation)
                return a({}, l[e], {
                    cache: !0
                });
            try {
                if (u = (n = o(4 === (g = e).length ? [parseInt("0x".concat(g[1]).concat(g[1])), parseInt("0x".concat(g[2]).concat(g[2])), parseInt("0x".concat(g[3]).concat(g[3]))] : 7 === g.length ? [parseInt("0x".concat(g[1]).concat(g[2])), parseInt("0x".concat(g[3]).concat(g[4])), parseInt("0x".concat(g[5]).concat(g[6]))] : [], 3))[1],
                p = n[2],
                !c(r = n[0]) || !c(u) || !c(p))
                    throw new Error("hextToRgb returned an invalid value for '".concat(e, "'"));
                d = new i(Number(r),Number(u),Number(p))
            } catch (e) {
                throw new Error("Color value should be in HEX format. ".concat(e))
            }
            var f = new s(d,a({}, {
                acceptanceLossPercentage: 5,
                maxChecks: 30,
                forceFilterRecalculation: !1
            }, t));
            return l[e] = a({}, f.solve(), {
                hex: e,
                rgb: [r, u, p],
                cache: !1
            })
        }
    },
    "Rm/h": function(e, t, n) {
        "use strict";
        function o() {
            return (o = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n)
                        ({}).hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            }
            ).apply(null, arguments)
        }
        function r(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, o)
            }
            return n
        }
        function a(e, t, n) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" != typeof e || !e)
                        return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var o = n.call(e, t || "default");
                        if ("object" != typeof o)
                            return o;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" == typeof t ? t : t + ""
            }(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        n.d(t, "a", (function() {
            return u
        }
        ));
        var i = n("2mXy")
          , s = (n("FdF9"),
        n("Abvc"))
          , c = n("Asb/")
          , l = n("5oGf")
          , u = (n("pMXK"),
        function(e) {
            var t = e.component
              , n = e.className
              , u = e.width
              , p = e.preview
              , d = e.dev
              , g = e.path
              , f = e.makeChoice
              , h = e.language
              , b = e.siteId
              , m = e.message
              , v = e.events
              , y = e.preloadMsg
              , O = e.stacksData
              , j = e.updateStacks
              , C = e.consentUUID
              , x = e.allSelectionsMade
              , w = e.shown
              , k = e.setVendorCount
              , P = e.vendorCount
              , _ = new s.a(t.settings)
              , L = Object(l.c)(g, d)
              , T = L.devActions
              , S = L.devClass
              , N = L.pathString
              , I = ""
              , A = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? r(Object(n), !0).forEach((function(t) {
                        a(e, t, n[t])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }({}, _.padding, {}, _.margin, {}, _.border, {
                display: _.display
            });
            d && (0 === t.children.length && (A.minHeight = "24px"),
            d.opts.hideRowColumnBorders || (S += " on-dev"));
            var B = _.padding
              , D = B.paddingLeft
              , E = B.paddingRight
              , F = _.margin
              , V = F.marginLeft
              , M = F.marginRight;
            return A.width = "auto" === _.width.type ? "auto" : _.width.value + _.width.type,
            A.height = "auto" === _.height.type ? "auto" : _.height.value + _.height.type,
            "%" === _.width.type && (A.width = "calc(" + _.width.value + "% - " + (D + E + V + M) + "px"),
            A.background = _.background,
            A.justifyContent = _.align,
            A.alignItems = _.vertical,
            u && u < 600 && !p && (A.flexDirection = "column",
            A.justifyContent = _.vertical,
            A.alignItems = _.align),
            _.background_url && _.background_url.length > 0 && (delete A.background,
            A.backgroundImage = "url(" + _.background_url + ")",
            I += " background-url"),
            Object(i.h)("div", o({
                className: "message-component message-row" + S + n + I,
                path: d ? N : null,
                style: A
            }, T), Object(i.h)(c.a, o({}, e, {
                path: g,
                dev: d,
                components: t.children,
                siteId: b,
                message: m,
                makeChoice: f,
                language: h,
                events: v,
                preloadMsg: y,
                stacksData: O,
                updateStacks: j,
                consentUUID: C,
                allSelectionsMade: x,
                neutralPm: e.neutralPm,
                shown: w,
                pmData: e.pmData,
                className: e.className,
                child: e.child,
                vendors: e.vendors,
                toggleCategory: e.toggleCategory,
                toggleStack: e.toggleStack,
                isFirstLayer: e.isFirstLayer,
                setVendorCount: k,
                vendorCount: P
            })))
        }
        )
    },
    Tfwc: function(e, t, n) {
        "use strict";
        function o(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, o)
            }
            return n
        }
        function r(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? o(Object(n), !0).forEach((function(t) {
                    a(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function a(e, t, n) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" != typeof e || !e)
                        return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var o = n.call(e, t || "default");
                        if ("object" != typeof o)
                            return o;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" == typeof t ? t : t + ""
            }(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function i(e, t) {
            return (i = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        n.d(t, "a", (function() {
            return d
        }
        ));
        var s = n("2mXy")
          , c = n("FdF9")
          , l = n("sSoO")
          , u = n("o1E3")
          , p = n("Up9s")
          , d = function(e) {
            function t() {
                for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++)
                    o[r] = arguments[r];
                return (t = e.call.apply(e, [this].concat(o)) || this).state = {
                    open: !1,
                    panelFocus: !1
                },
                t.toggleAccordion = function(e) {
                    if (void 0 !== e && !["stack-toggle", "opener", "pm-switch", "slider", "view-all"].some((function(t) {
                        return e.target.className.includes(t)
                    }
                    ))) {
                        var n = !t.state.open;
                        t.setState({
                            open: n
                        }, (function() {
                            t.props.force && t.props.force()
                        }
                        ));
                        var o = t.panel;
                        o.style.maxHeight = n ? o.scrollHeight + 1e3 + "px" : null
                    }
                }
                ,
                t
            }
            var n, o;
            o = e,
            (n = t).prototype = Object.create(o.prototype),
            n.prototype.constructor = n,
            i(n, o);
            var a = t.prototype;
            return a.shouldComponentUpdate = function(e, t) {
                var n = this.panel;
                return n && t.open && setTimeout((function() {
                    n.style.maxHeight = n.scrollHeight + 1e3 + "px"
                }
                ), 150),
                !0
            }
            ,
            a.render = function() {
                var e, t = this, n = this.props, o = n.dev, a = n.name, i = n.description, d = n.content, g = n.selected, f = n.toggle, h = n.child, b = n.value, m = n.language, v = n.titleContent, y = n.vendors, O = n.plus, j = n.isCustom, C = n.locked, x = n.isApple, w = n.isCustomVendorLabel1, k = n.isCustomVendorLabel2, P = n.isCustomVendorLabel3, _ = n.appleDataBrokerLetter, L = n.customVendorLabel1Letter, T = n.customVendorLabel2Letter, S = n.customVendorLabel3Letter, N = n.usePurModel, I = n.neutralPm, A = n.settings, B = void 0 === A ? {} : A, D = this.state, E = D.open, F = D.panelFocus, V = r({
                    paddingLeft: 3
                }, B.accordionsSpacing, {}, B.accordionsFont), M = r({}, B.panelSpacing, {}, B.panelFont), R = !1;
                if ("vendors" === h) {
                    var U = b.active
                      , H = b.legInt;
                    b.legIntCategories.length && b.consentCategories.length && (R = Boolean(U) !== Boolean(H)),
                    e = Boolean(U) || Boolean(H)
                } else
                    e = "li" === g ? b.legInt : "consent" === g ? b.active : b && (b.active || b.legInt);
                var z = Object(u.x)(Boolean(o), B, "toggleText", m)
                  , q = Object(u.x)(Boolean(o), B, "toggleOffText", m)
                  , K = i ? i.slice(3).slice(0, -4) : "";
                return Object(s.h)("div", {
                    className: O ? "tcfv2-stack plus focusable" : "tcfv2-stack focusable",
                    onKeyDown: function(e) {
                        return Object(u.s)(e.key) && t.toggleAccordion(e)
                    },
                    style: {
                        backgroundColor: B.backgroundColor
                    }
                }, Object(s.h)("div", {
                    className: j ? "stack-row custom" : "stack-row",
                    style: {
                        position: "relative",
                        backgroundColor: B.backgroundColor
                    }
                }, Object(s.h)("h2", {
                    tabIndex: "0",
                    role: "button",
                    "aria-expanded": E ? "true" : "false",
                    "aria-controls": "accordion-panel",
                    className: E ? "accordion active" : "accordion ",
                    style: V,
                    onClick: this.toggleAccordion,
                    onKeyDown: function(e) {
                        "Enter" !== e.key && " " !== e.key || (e.preventDefault(),
                        t.toggleAccordion())
                    },
                    lang: m,
                    id: "accordion-header"
                }, O ? Object(s.h)("span", {
                    className: "plus-minus"
                }, E ? "-" : "+") : Object(s.h)("span", {
                    className: E ? "chevron up" : "chevron down"
                }), E && !v ? Object(s.h)("span", {
                    style: {
                        width: 230
                    }
                }, Object(s.h)("b", null, a)) : Object(s.h)("span", {
                    style: {
                        width: 230
                    }
                }, a), b && b.required && Object(s.h)("span", {
                    style: {
                        paddingLeft: 5
                    }
                }, B.requiredTagText), x && Object(s.h)("span", {
                    tabIndex: "0",
                    className: "legend-key apple-broker"
                }, _), w && Object(s.h)("span", {
                    tabIndex: "0",
                    className: "legend-key is-custom-vendor-label-1"
                }, L), k && Object(s.h)("span", {
                    tabIndex: "0",
                    className: "legend-key is-custom-vendor-label-2"
                }, T), P && Object(s.h)("span", {
                    tabIndex: "0",
                    className: "legend-key is-custom-vendor-label-3"
                }, S), v || null), f ? I ? Object(s.h)(p.a, {
                    settings: B,
                    toggle: f,
                    vendors: y,
                    value: b,
                    child: h,
                    dev: o,
                    language: m
                }) : Object(s.h)(l.a, {
                    type: B.toggleType,
                    color: B.toggleColor,
                    colorActive: B.toggleActiveColor,
                    offColor: B.toggleOffColor,
                    neutralColor: B.toggleNeutralColor,
                    offActiveColor: B.toggleOffActiveColor,
                    text: z,
                    offText: q,
                    toggle: f,
                    child: h,
                    vendors: y,
                    value: b,
                    locked: C,
                    legInt: "li" === g,
                    checked: e,
                    tabbable: !0,
                    partialConsent: R,
                    consentType: "vendors" === h ? "all" : null,
                    dev: o,
                    settings: B,
                    language: m,
                    usePurModel: N
                }) : I && b && this.props.toggleStack && Object(s.h)(p.a, {
                    settings: B,
                    toggleStack: this.props.toggleStack,
                    vendors: y,
                    child: h,
                    dev: o,
                    language: m,
                    value: b
                })), Object(s.h)("div", {
                    id: "accordion-panel",
                    tabIndex: E ? 0 : -1,
                    ref: function(e) {
                        return t.panel = e
                    },
                    className: "panel " + (E ? "open" : ""),
                    "aria-hidden": F ? "false" : "true",
                    onFocus: function() {
                        return t.setState({
                            panelFocus: !0
                        })
                    },
                    onBlur: function() {
                        return t.setState({
                            panelFocus: !1
                        })
                    }
                }, E && Object(s.h)("p", {
                    style: r({}, M)
                }, Object(s.h)("div", null, d ? c.default.cloneElement(d, {
                    accordionOpen: E
                }) : K))))
            }
            ,
            t
        }(c.Component)
    },
    Up9s: function(e, t, n) {
        "use strict";
        (function(e) {
            n("FdF9");
            var o = n("o1E3");
            n("mLpX");
            t.a = function(t) {
                var n = t.child
                  , r = t.vendors
                  , a = t.value
                  , i = t.toggle
                  , s = t.settings
                  , c = t.dev
                  , l = t.language
                  , u = t.toggleStack
                  , p = t.style
                  , d = a.active;
                d = a.type && a.type.includes("STACK") ? a.categories.every((function(e) {
                    return e.active
                }
                )) : d,
                a.type && a.type.includes("STACK") && (d = a.categories.some((function(e) {
                    return null === e.active
                }
                )) ? null : !a.categories.every((function(e) {
                    return !1 === e.active
                }
                )) && (!!a.categories.every((function(e) {
                    return e.active
                }
                )) || null));
                var g = s.neutralButtonBackgroundColor
                  , f = s.neutralButtonFontColor
                  , h = function(e) {
                    e.stopPropagation(),
                    u ? u(e, a.categories, !0) : "purposes" === n || "features" === n ? i(a._id, n, !0, r) : "vendors" === n ? i(a.vendorId, !0) : "stacks" === n && i(a._id, !0)
                }
                  , b = function(e) {
                    e.stopPropagation(),
                    u ? u(e, a.categories, !1) : "purposes" === n || "features" === n ? i(a._id, n, !1, r) : "vendors" === n ? i(a.vendorId, !1) : "stacks" === n && i(a._id, !1)
                }
                  , m = {
                    background: !1 === d ? s.offButtonBackgroundColor : g,
                    color: !1 === d ? s.offButtonFontColor : f
                };
                return e("div", {
                    className: "pur-buttons-container",
                    style: p
                }, e("button", {
                    style: {
                        background: !0 === d ? s.onButtonBackgroundColor : g,
                        color: !0 === d ? s.onButtonFontColor : f
                    },
                    "aria-pressed": d,
                    onClick: h,
                    onKeyDown: function(e) {
                        return Object(o.s)(e.key) && h(e)
                    }
                }, Object(o.x)(c, s, "onButtonText", l)), e("button", {
                    style: m,
                    "aria-pressed": !1 === d,
                    onClick: b,
                    onKeyDown: function(e) {
                        return Object(o.s)(e.key) && b(e)
                    }
                }, Object(o.x)(c, s, "offButtonText", l)))
            }
        }
        ).call(this, n("2mXy").h)
    },
    WIag: function(e, t, n) {
        "use strict";
        function o() {
            return (o = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n)
                        ({}).hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            }
            ).apply(null, arguments)
        }
        function r() {
            return (r = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n)
                        ({}).hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            }
            ).apply(null, arguments)
        }
        function a(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, o)
            }
            return n
        }
        function i(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? a(Object(n), !0).forEach((function(t) {
                    s(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function s(e, t, n) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" != typeof e || !e)
                        return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var o = n.call(e, t || "default");
                        if ("object" != typeof o)
                            return o;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" == typeof t ? t : t + ""
            }(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function c(e, t) {
            return (c = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        var l = n("2mXy")
          , u = n("FdF9")
          , p = n("xc8A")
          , d = n.n(p)
          , g = function(e) {
            void 0 === e && (e = {}),
            o(this, {
                text: "Button",
                width: {
                    type: "auto",
                    value: 1
                },
                padding: {
                    paddingLeft: 15,
                    paddingRight: 15,
                    paddingTop: 10,
                    paddingBottom: 10
                },
                margin: {
                    marginLeft: 10,
                    marginRight: 10,
                    marginTop: 10,
                    marginBottom: 10
                },
                font: {
                    fontSize: 14,
                    fontWeight: "400",
                    color: "#ffffff",
                    disabledColor: "",
                    fontFamily: "arial, helvetica, sans-serif"
                },
                background: "#1890ff",
                disabledBackground: "",
                border: {
                    borderWidth: 0,
                    borderColor: "#000000",
                    borderTopLeftRadius: 5,
                    borderTopRightRadius: 5,
                    borderBottomLeftRadius: 5,
                    borderBottomRightRadius: 5,
                    borderStyle: "solid"
                },
                action_type: null,
                languages: {},
                selectedLanguage: "",
                startFocus: !1
            }),
            o(this, e)
        }
          , f = n("o1E3")
          , h = n("YSmr");
        n("LX/k");
        n.d(t, "a", (function() {
            return b
        }
        ));
        var b = function(e) {
            function t() {
                for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++)
                    o[r] = arguments[r];
                return (t = e.call.apply(e, [this].concat(o)) || this).componentDidUpdate = function(e) {
                    !e.shown && t.props.shown && (t.props.component.settings.startFocus && (d.a.clear(),
                    d.a.add({
                        selector: ".start-focus",
                        defaultElement: ".start-focus"
                    }),
                    setTimeout((function() {
                        d.a.focus()
                    }
                    ), 50)))
                }
                ,
                t.makeChoice = function(e) {
                    if (!(t.props.isOtt && "click" === e.type || t.props.isOtt && 13 !== e.keyCode)) {
                        var n = t.props
                          , o = n.language
                          , r = n.component.settings
                          , a = r.action_type;
                        return a ? t.props.makeChoice(9 === a.type ? {
                            choiceId: a.type,
                            consentLanguage: Object(f.v)(o, r, "text"),
                            isAcceptLiOnly: "ACCEPT_LI_ONLY" === a,
                            choiceData: a.data
                        } : {
                            choiceId: h.o[a],
                            consentLanguage: Object(f.v)(o, new g(r), "text"),
                            isAcceptLiOnly: "ACCEPT_LI_ONLY" === a
                        }) : void 0
                    }
                }
                ,
                t
            }
            var n, o;
            return o = e,
            (n = t).prototype = Object.create(o.prototype),
            n.prototype.constructor = n,
            c(n, o),
            t.prototype.render = function() {
                var e = this
                  , t = new g(this.props.component.settings)
                  , n = this.props
                  , o = n.language
                  , a = n.dev
                  , s = n.isOtt
                  , c = n.convertToRem
                  , u = n.neutralPm && "SAVE_AND_EXIT" === t.action_type && !n.allSelectionsMade
                  , p = !!t.disabledBackground
                  , d = i({}, t.font, {
                    color: u && t.font.disabledColor ? t.font.disabledColor : t.font.color
                })
                  , h = i({
                    opacity: u && !p ? .5 : 1
                }, t.padding, {}, t.margin, {}, t.border, {}, d)
                  , b = c ? Object(f.c)(h) : h
                  , m = t.padding
                  , v = m.paddingLeft
                  , y = m.paddingRight
                  , O = t.margin
                  , j = O.marginLeft
                  , C = O.marginRight;
                b.width = "auto" === t.width.type ? "auto" : t.width.value + t.width.type,
                "%" === t.width.type && (b.width = "calc(" + t.width.value + "% - " + (v + y + j + C) + "px"),
                b.background = u && p ? t.disabledBackground : t.background;
                var x = {}
                  , w = !1
                  , k = JSON.stringify(this.props.path);
                a && (x = i({}, a.hover),
                w = a.current === k);
                var P, _, L = "message-component message-button no-children focusable " + (t.startFocus ? "start-focus" : "") + this.props.className, T = Object(f.x)(a, t, "text", o);
                return L += " " + ((_ = (P = e.props.component.settings) ? P.action_type : null) ? "sp_choice_type_" + _ : ""),
                Object(l.h)("button", r({
                    "aria-disabled": u,
                    disabled: u,
                    title: T,
                    "aria-label": T,
                    onClick: s ? void 0 : this.makeChoice,
                    onKeyDown: function(t) {
                        return Object(f.s)(t.key) && e.makeChoice(t)
                    },
                    className: w ? L + " on-active" : L,
                    path: a ? k : null,
                    style: b
                }, x), T)
            }
            ,
            t
        }(u.Component)
    },
    WKRr: function(e, t, n) {
        !function(e) {
            "use strict";
            function t(e, t, n, o) {
                e[t] = n >> 24 & 255,
                e[t + 1] = n >> 16 & 255,
                e[t + 2] = n >> 8 & 255,
                e[t + 3] = 255 & n,
                e[t + 4] = o >> 24 & 255,
                e[t + 5] = o >> 16 & 255,
                e[t + 6] = o >> 8 & 255,
                e[t + 7] = 255 & o
            }
            function o(e, t, n, o, r) {
                var a, i = 0;
                for (a = 0; a < r; a++)
                    i |= e[t + a] ^ n[o + a];
                return (1 & i - 1 >>> 8) - 1
            }
            function r(e, t, n, r) {
                return o(e, t, n, r, 16)
            }
            function a(e, t, n, r) {
                return o(e, t, n, r, 32)
            }
            function i(e, t, n, o) {
                !function(e, t, n, o) {
                    for (var r, a = 255 & o[0] | (255 & o[1]) << 8 | (255 & o[2]) << 16 | (255 & o[3]) << 24, i = 255 & n[0] | (255 & n[1]) << 8 | (255 & n[2]) << 16 | (255 & n[3]) << 24, s = 255 & n[4] | (255 & n[5]) << 8 | (255 & n[6]) << 16 | (255 & n[7]) << 24, c = 255 & n[8] | (255 & n[9]) << 8 | (255 & n[10]) << 16 | (255 & n[11]) << 24, l = 255 & n[12] | (255 & n[13]) << 8 | (255 & n[14]) << 16 | (255 & n[15]) << 24, u = 255 & o[4] | (255 & o[5]) << 8 | (255 & o[6]) << 16 | (255 & o[7]) << 24, p = 255 & t[0] | (255 & t[1]) << 8 | (255 & t[2]) << 16 | (255 & t[3]) << 24, d = 255 & t[4] | (255 & t[5]) << 8 | (255 & t[6]) << 16 | (255 & t[7]) << 24, g = 255 & t[8] | (255 & t[9]) << 8 | (255 & t[10]) << 16 | (255 & t[11]) << 24, f = 255 & t[12] | (255 & t[13]) << 8 | (255 & t[14]) << 16 | (255 & t[15]) << 24, h = 255 & o[8] | (255 & o[9]) << 8 | (255 & o[10]) << 16 | (255 & o[11]) << 24, b = 255 & n[16] | (255 & n[17]) << 8 | (255 & n[18]) << 16 | (255 & n[19]) << 24, m = 255 & n[20] | (255 & n[21]) << 8 | (255 & n[22]) << 16 | (255 & n[23]) << 24, v = 255 & n[24] | (255 & n[25]) << 8 | (255 & n[26]) << 16 | (255 & n[27]) << 24, y = 255 & n[28] | (255 & n[29]) << 8 | (255 & n[30]) << 16 | (255 & n[31]) << 24, O = 255 & o[12] | (255 & o[13]) << 8 | (255 & o[14]) << 16 | (255 & o[15]) << 24, j = a, C = i, x = s, w = c, k = l, P = u, _ = p, L = d, T = g, S = f, N = h, I = b, A = m, B = v, D = y, E = O, F = 0; F < 20; F += 2)
                        j ^= (r = (A ^= (r = (T ^= (r = (k ^= (r = j + A | 0) << 7 | r >>> 25) + j | 0) << 9 | r >>> 23) + k | 0) << 13 | r >>> 19) + T | 0) << 18 | r >>> 14,
                        P ^= (r = (C ^= (r = (B ^= (r = (S ^= (r = P + C | 0) << 7 | r >>> 25) + P | 0) << 9 | r >>> 23) + S | 0) << 13 | r >>> 19) + B | 0) << 18 | r >>> 14,
                        N ^= (r = (_ ^= (r = (x ^= (r = (D ^= (r = N + _ | 0) << 7 | r >>> 25) + N | 0) << 9 | r >>> 23) + D | 0) << 13 | r >>> 19) + x | 0) << 18 | r >>> 14,
                        E ^= (r = (I ^= (r = (L ^= (r = (w ^= (r = E + I | 0) << 7 | r >>> 25) + E | 0) << 9 | r >>> 23) + w | 0) << 13 | r >>> 19) + L | 0) << 18 | r >>> 14,
                        j ^= (r = (w ^= (r = (x ^= (r = (C ^= (r = j + w | 0) << 7 | r >>> 25) + j | 0) << 9 | r >>> 23) + C | 0) << 13 | r >>> 19) + x | 0) << 18 | r >>> 14,
                        P ^= (r = (k ^= (r = (L ^= (r = (_ ^= (r = P + k | 0) << 7 | r >>> 25) + P | 0) << 9 | r >>> 23) + _ | 0) << 13 | r >>> 19) + L | 0) << 18 | r >>> 14,
                        N ^= (r = (S ^= (r = (T ^= (r = (I ^= (r = N + S | 0) << 7 | r >>> 25) + N | 0) << 9 | r >>> 23) + I | 0) << 13 | r >>> 19) + T | 0) << 18 | r >>> 14,
                        E ^= (r = (D ^= (r = (B ^= (r = (A ^= (r = E + D | 0) << 7 | r >>> 25) + E | 0) << 9 | r >>> 23) + A | 0) << 13 | r >>> 19) + B | 0) << 18 | r >>> 14;
                    C = C + i | 0,
                    x = x + s | 0,
                    w = w + c | 0,
                    k = k + l | 0,
                    P = P + u | 0,
                    _ = _ + p | 0,
                    L = L + d | 0,
                    T = T + g | 0,
                    S = S + f | 0,
                    N = N + h | 0,
                    I = I + b | 0,
                    A = A + m | 0,
                    B = B + v | 0,
                    D = D + y | 0,
                    E = E + O | 0,
                    e[0] = (j = j + a | 0) >>> 0 & 255,
                    e[1] = j >>> 8 & 255,
                    e[2] = j >>> 16 & 255,
                    e[3] = j >>> 24 & 255,
                    e[4] = C >>> 0 & 255,
                    e[5] = C >>> 8 & 255,
                    e[6] = C >>> 16 & 255,
                    e[7] = C >>> 24 & 255,
                    e[8] = x >>> 0 & 255,
                    e[9] = x >>> 8 & 255,
                    e[10] = x >>> 16 & 255,
                    e[11] = x >>> 24 & 255,
                    e[12] = w >>> 0 & 255,
                    e[13] = w >>> 8 & 255,
                    e[14] = w >>> 16 & 255,
                    e[15] = w >>> 24 & 255,
                    e[16] = k >>> 0 & 255,
                    e[17] = k >>> 8 & 255,
                    e[18] = k >>> 16 & 255,
                    e[19] = k >>> 24 & 255,
                    e[20] = P >>> 0 & 255,
                    e[21] = P >>> 8 & 255,
                    e[22] = P >>> 16 & 255,
                    e[23] = P >>> 24 & 255,
                    e[24] = _ >>> 0 & 255,
                    e[25] = _ >>> 8 & 255,
                    e[26] = _ >>> 16 & 255,
                    e[27] = _ >>> 24 & 255,
                    e[28] = L >>> 0 & 255,
                    e[29] = L >>> 8 & 255,
                    e[30] = L >>> 16 & 255,
                    e[31] = L >>> 24 & 255,
                    e[32] = T >>> 0 & 255,
                    e[33] = T >>> 8 & 255,
                    e[34] = T >>> 16 & 255,
                    e[35] = T >>> 24 & 255,
                    e[36] = S >>> 0 & 255,
                    e[37] = S >>> 8 & 255,
                    e[38] = S >>> 16 & 255,
                    e[39] = S >>> 24 & 255,
                    e[40] = N >>> 0 & 255,
                    e[41] = N >>> 8 & 255,
                    e[42] = N >>> 16 & 255,
                    e[43] = N >>> 24 & 255,
                    e[44] = I >>> 0 & 255,
                    e[45] = I >>> 8 & 255,
                    e[46] = I >>> 16 & 255,
                    e[47] = I >>> 24 & 255,
                    e[48] = A >>> 0 & 255,
                    e[49] = A >>> 8 & 255,
                    e[50] = A >>> 16 & 255,
                    e[51] = A >>> 24 & 255,
                    e[52] = B >>> 0 & 255,
                    e[53] = B >>> 8 & 255,
                    e[54] = B >>> 16 & 255,
                    e[55] = B >>> 24 & 255,
                    e[56] = D >>> 0 & 255,
                    e[57] = D >>> 8 & 255,
                    e[58] = D >>> 16 & 255,
                    e[59] = D >>> 24 & 255,
                    e[60] = E >>> 0 & 255,
                    e[61] = E >>> 8 & 255,
                    e[62] = E >>> 16 & 255,
                    e[63] = E >>> 24 & 255
                }(e, t, n, o)
            }
            function s(e, t, n, o) {
                !function(e, t, n, o) {
                    for (var r, a = 255 & o[0] | (255 & o[1]) << 8 | (255 & o[2]) << 16 | (255 & o[3]) << 24, i = 255 & n[0] | (255 & n[1]) << 8 | (255 & n[2]) << 16 | (255 & n[3]) << 24, s = 255 & n[4] | (255 & n[5]) << 8 | (255 & n[6]) << 16 | (255 & n[7]) << 24, c = 255 & n[8] | (255 & n[9]) << 8 | (255 & n[10]) << 16 | (255 & n[11]) << 24, l = 255 & n[12] | (255 & n[13]) << 8 | (255 & n[14]) << 16 | (255 & n[15]) << 24, u = 255 & o[4] | (255 & o[5]) << 8 | (255 & o[6]) << 16 | (255 & o[7]) << 24, p = 255 & t[0] | (255 & t[1]) << 8 | (255 & t[2]) << 16 | (255 & t[3]) << 24, d = 255 & t[4] | (255 & t[5]) << 8 | (255 & t[6]) << 16 | (255 & t[7]) << 24, g = 255 & t[8] | (255 & t[9]) << 8 | (255 & t[10]) << 16 | (255 & t[11]) << 24, f = 255 & t[12] | (255 & t[13]) << 8 | (255 & t[14]) << 16 | (255 & t[15]) << 24, h = 255 & o[8] | (255 & o[9]) << 8 | (255 & o[10]) << 16 | (255 & o[11]) << 24, b = 255 & n[16] | (255 & n[17]) << 8 | (255 & n[18]) << 16 | (255 & n[19]) << 24, m = 255 & n[20] | (255 & n[21]) << 8 | (255 & n[22]) << 16 | (255 & n[23]) << 24, v = 255 & n[24] | (255 & n[25]) << 8 | (255 & n[26]) << 16 | (255 & n[27]) << 24, y = 255 & n[28] | (255 & n[29]) << 8 | (255 & n[30]) << 16 | (255 & n[31]) << 24, O = 255 & o[12] | (255 & o[13]) << 8 | (255 & o[14]) << 16 | (255 & o[15]) << 24, j = 0; j < 20; j += 2)
                        a ^= (r = (m ^= (r = (g ^= (r = (l ^= (r = a + m | 0) << 7 | r >>> 25) + a | 0) << 9 | r >>> 23) + l | 0) << 13 | r >>> 19) + g | 0) << 18 | r >>> 14,
                        u ^= (r = (i ^= (r = (v ^= (r = (f ^= (r = u + i | 0) << 7 | r >>> 25) + u | 0) << 9 | r >>> 23) + f | 0) << 13 | r >>> 19) + v | 0) << 18 | r >>> 14,
                        h ^= (r = (p ^= (r = (s ^= (r = (y ^= (r = h + p | 0) << 7 | r >>> 25) + h | 0) << 9 | r >>> 23) + y | 0) << 13 | r >>> 19) + s | 0) << 18 | r >>> 14,
                        O ^= (r = (b ^= (r = (d ^= (r = (c ^= (r = O + b | 0) << 7 | r >>> 25) + O | 0) << 9 | r >>> 23) + c | 0) << 13 | r >>> 19) + d | 0) << 18 | r >>> 14,
                        a ^= (r = (c ^= (r = (s ^= (r = (i ^= (r = a + c | 0) << 7 | r >>> 25) + a | 0) << 9 | r >>> 23) + i | 0) << 13 | r >>> 19) + s | 0) << 18 | r >>> 14,
                        u ^= (r = (l ^= (r = (d ^= (r = (p ^= (r = u + l | 0) << 7 | r >>> 25) + u | 0) << 9 | r >>> 23) + p | 0) << 13 | r >>> 19) + d | 0) << 18 | r >>> 14,
                        h ^= (r = (f ^= (r = (g ^= (r = (b ^= (r = h + f | 0) << 7 | r >>> 25) + h | 0) << 9 | r >>> 23) + b | 0) << 13 | r >>> 19) + g | 0) << 18 | r >>> 14,
                        O ^= (r = (y ^= (r = (v ^= (r = (m ^= (r = O + y | 0) << 7 | r >>> 25) + O | 0) << 9 | r >>> 23) + m | 0) << 13 | r >>> 19) + v | 0) << 18 | r >>> 14;
                    e[0] = a >>> 0 & 255,
                    e[1] = a >>> 8 & 255,
                    e[2] = a >>> 16 & 255,
                    e[3] = a >>> 24 & 255,
                    e[4] = u >>> 0 & 255,
                    e[5] = u >>> 8 & 255,
                    e[6] = u >>> 16 & 255,
                    e[7] = u >>> 24 & 255,
                    e[8] = h >>> 0 & 255,
                    e[9] = h >>> 8 & 255,
                    e[10] = h >>> 16 & 255,
                    e[11] = h >>> 24 & 255,
                    e[12] = O >>> 0 & 255,
                    e[13] = O >>> 8 & 255,
                    e[14] = O >>> 16 & 255,
                    e[15] = O >>> 24 & 255,
                    e[16] = p >>> 0 & 255,
                    e[17] = p >>> 8 & 255,
                    e[18] = p >>> 16 & 255,
                    e[19] = p >>> 24 & 255,
                    e[20] = d >>> 0 & 255,
                    e[21] = d >>> 8 & 255,
                    e[22] = d >>> 16 & 255,
                    e[23] = d >>> 24 & 255,
                    e[24] = g >>> 0 & 255,
                    e[25] = g >>> 8 & 255,
                    e[26] = g >>> 16 & 255,
                    e[27] = g >>> 24 & 255,
                    e[28] = f >>> 0 & 255,
                    e[29] = f >>> 8 & 255,
                    e[30] = f >>> 16 & 255,
                    e[31] = f >>> 24 & 255
                }(e, t, n, o)
            }
            function c(e, t, n, o, r, a, s) {
                var c, l, u = new Uint8Array(16), p = new Uint8Array(64);
                for (l = 0; l < 16; l++)
                    u[l] = 0;
                for (l = 0; l < 8; l++)
                    u[l] = a[l];
                for (; r >= 64; ) {
                    for (i(p, u, s, ie),
                    l = 0; l < 64; l++)
                        e[t + l] = n[o + l] ^ p[l];
                    for (c = 1,
                    l = 8; l < 16; l++)
                        u[l] = 255 & (c = c + (255 & u[l]) | 0),
                        c >>>= 8;
                    r -= 64,
                    t += 64,
                    o += 64
                }
                if (r > 0)
                    for (i(p, u, s, ie),
                    l = 0; l < r; l++)
                        e[t + l] = n[o + l] ^ p[l];
                return 0
            }
            function l(e, t, n, o, r) {
                var a, s, c = new Uint8Array(16), l = new Uint8Array(64);
                for (s = 0; s < 16; s++)
                    c[s] = 0;
                for (s = 0; s < 8; s++)
                    c[s] = o[s];
                for (; n >= 64; ) {
                    for (i(l, c, r, ie),
                    s = 0; s < 64; s++)
                        e[t + s] = l[s];
                    for (a = 1,
                    s = 8; s < 16; s++)
                        c[s] = 255 & (a = a + (255 & c[s]) | 0),
                        a >>>= 8;
                    n -= 64,
                    t += 64
                }
                if (n > 0)
                    for (i(l, c, r, ie),
                    s = 0; s < n; s++)
                        e[t + s] = l[s];
                return 0
            }
            function u(e, t, n, o, r) {
                var a = new Uint8Array(32);
                s(a, o, r, ie);
                for (var i = new Uint8Array(8), c = 0; c < 8; c++)
                    i[c] = o[c + 16];
                return l(e, t, n, i, a)
            }
            function p(e, t, n, o, r, a, i) {
                var l = new Uint8Array(32);
                s(l, a, i, ie);
                for (var u = new Uint8Array(8), p = 0; p < 8; p++)
                    u[p] = a[p + 16];
                return c(e, t, n, o, r, u, l)
            }
            function d(e, t, n, o, r, a) {
                var i = new se(a);
                return i.update(n, o, r),
                i.finish(e, t),
                0
            }
            function g(e, t, n, o, a, i) {
                var s = new Uint8Array(16);
                return d(s, 0, n, o, a, i),
                r(e, t, s, 0)
            }
            function f(e, t, n, o, r) {
                var a;
                if (n < 32)
                    return -1;
                for (p(e, 0, t, 0, n, o, r),
                d(e, 16, e, 32, n - 32, e),
                a = 0; a < 16; a++)
                    e[a] = 0;
                return 0
            }
            function h(e, t, n, o, r) {
                var a, i = new Uint8Array(32);
                if (n < 32)
                    return -1;
                if (u(i, 0, 32, o, r),
                0 !== g(t, 16, t, 32, n - 32, i))
                    return -1;
                for (p(e, 0, t, 0, n, o, r),
                a = 0; a < 32; a++)
                    e[a] = 0;
                return 0
            }
            function b(e, t) {
                var n;
                for (n = 0; n < 16; n++)
                    e[n] = 0 | t[n]
            }
            function m(e) {
                var t, n, o = 1;
                for (t = 0; t < 16; t++)
                    n = e[t] + o + 65535,
                    o = Math.floor(n / 65536),
                    e[t] = n - 65536 * o;
                e[0] += o - 1 + 37 * (o - 1)
            }
            function v(e, t, n) {
                for (var o, r = ~(n - 1), a = 0; a < 16; a++)
                    e[a] ^= o = r & (e[a] ^ t[a]),
                    t[a] ^= o
            }
            function y(e, t) {
                var n, o, r, a = X(), i = X();
                for (n = 0; n < 16; n++)
                    i[n] = t[n];
                for (m(i),
                m(i),
                m(i),
                o = 0; o < 2; o++) {
                    for (a[0] = i[0] - 65517,
                    n = 1; n < 15; n++)
                        a[n] = i[n] - 65535 - (a[n - 1] >> 16 & 1),
                        a[n - 1] &= 65535;
                    a[15] = i[15] - 32767 - (a[14] >> 16 & 1),
                    r = a[15] >> 16 & 1,
                    a[14] &= 65535,
                    v(i, a, 1 - r)
                }
                for (n = 0; n < 16; n++)
                    e[2 * n] = 255 & i[n],
                    e[2 * n + 1] = i[n] >> 8
            }
            function O(e, t) {
                var n = new Uint8Array(32)
                  , o = new Uint8Array(32);
                return y(n, e),
                y(o, t),
                a(n, 0, o, 0)
            }
            function j(e) {
                var t = new Uint8Array(32);
                return y(t, e),
                1 & t[0]
            }
            function C(e, t) {
                var n;
                for (n = 0; n < 16; n++)
                    e[n] = t[2 * n] + (t[2 * n + 1] << 8);
                e[15] &= 32767
            }
            function x(e, t, n) {
                for (var o = 0; o < 16; o++)
                    e[o] = t[o] + n[o]
            }
            function w(e, t, n) {
                for (var o = 0; o < 16; o++)
                    e[o] = t[o] - n[o]
            }
            function k(e, t, n) {
                var o, r, a = 0, i = 0, s = 0, c = 0, l = 0, u = 0, p = 0, d = 0, g = 0, f = 0, h = 0, b = 0, m = 0, v = 0, y = 0, O = 0, j = 0, C = 0, x = 0, w = 0, k = 0, P = 0, _ = 0, L = 0, T = 0, S = 0, N = 0, I = 0, A = 0, B = 0, D = 0, E = n[0], F = n[1], V = n[2], M = n[3], R = n[4], U = n[5], H = n[6], z = n[7], q = n[8], K = n[9], W = n[10], G = n[11], X = n[12], Y = n[13], $ = n[14], Q = n[15];
                a += (o = t[0]) * E,
                i += o * F,
                s += o * V,
                c += o * M,
                l += o * R,
                u += o * U,
                p += o * H,
                d += o * z,
                g += o * q,
                f += o * K,
                h += o * W,
                b += o * G,
                m += o * X,
                v += o * Y,
                y += o * $,
                O += o * Q,
                i += (o = t[1]) * E,
                s += o * F,
                c += o * V,
                l += o * M,
                u += o * R,
                p += o * U,
                d += o * H,
                g += o * z,
                f += o * q,
                h += o * K,
                b += o * W,
                m += o * G,
                v += o * X,
                y += o * Y,
                O += o * $,
                j += o * Q,
                s += (o = t[2]) * E,
                c += o * F,
                l += o * V,
                u += o * M,
                p += o * R,
                d += o * U,
                g += o * H,
                f += o * z,
                h += o * q,
                b += o * K,
                m += o * W,
                v += o * G,
                y += o * X,
                O += o * Y,
                j += o * $,
                C += o * Q,
                c += (o = t[3]) * E,
                l += o * F,
                u += o * V,
                p += o * M,
                d += o * R,
                g += o * U,
                f += o * H,
                h += o * z,
                b += o * q,
                m += o * K,
                v += o * W,
                y += o * G,
                O += o * X,
                j += o * Y,
                C += o * $,
                x += o * Q,
                l += (o = t[4]) * E,
                u += o * F,
                p += o * V,
                d += o * M,
                g += o * R,
                f += o * U,
                h += o * H,
                b += o * z,
                m += o * q,
                v += o * K,
                y += o * W,
                O += o * G,
                j += o * X,
                C += o * Y,
                x += o * $,
                w += o * Q,
                u += (o = t[5]) * E,
                p += o * F,
                d += o * V,
                g += o * M,
                f += o * R,
                h += o * U,
                b += o * H,
                m += o * z,
                v += o * q,
                y += o * K,
                O += o * W,
                j += o * G,
                C += o * X,
                x += o * Y,
                w += o * $,
                k += o * Q,
                p += (o = t[6]) * E,
                d += o * F,
                g += o * V,
                f += o * M,
                h += o * R,
                b += o * U,
                m += o * H,
                v += o * z,
                y += o * q,
                O += o * K,
                j += o * W,
                C += o * G,
                x += o * X,
                w += o * Y,
                k += o * $,
                P += o * Q,
                d += (o = t[7]) * E,
                g += o * F,
                f += o * V,
                h += o * M,
                b += o * R,
                m += o * U,
                v += o * H,
                y += o * z,
                O += o * q,
                j += o * K,
                C += o * W,
                x += o * G,
                w += o * X,
                k += o * Y,
                P += o * $,
                _ += o * Q,
                g += (o = t[8]) * E,
                f += o * F,
                h += o * V,
                b += o * M,
                m += o * R,
                v += o * U,
                y += o * H,
                O += o * z,
                j += o * q,
                C += o * K,
                x += o * W,
                w += o * G,
                k += o * X,
                P += o * Y,
                _ += o * $,
                L += o * Q,
                f += (o = t[9]) * E,
                h += o * F,
                b += o * V,
                m += o * M,
                v += o * R,
                y += o * U,
                O += o * H,
                j += o * z,
                C += o * q,
                x += o * K,
                w += o * W,
                k += o * G,
                P += o * X,
                _ += o * Y,
                L += o * $,
                T += o * Q,
                h += (o = t[10]) * E,
                b += o * F,
                m += o * V,
                v += o * M,
                y += o * R,
                O += o * U,
                j += o * H,
                C += o * z,
                x += o * q,
                w += o * K,
                k += o * W,
                P += o * G,
                _ += o * X,
                L += o * Y,
                T += o * $,
                S += o * Q,
                b += (o = t[11]) * E,
                m += o * F,
                v += o * V,
                y += o * M,
                O += o * R,
                j += o * U,
                C += o * H,
                x += o * z,
                w += o * q,
                k += o * K,
                P += o * W,
                _ += o * G,
                L += o * X,
                T += o * Y,
                S += o * $,
                N += o * Q,
                m += (o = t[12]) * E,
                v += o * F,
                y += o * V,
                O += o * M,
                j += o * R,
                C += o * U,
                x += o * H,
                w += o * z,
                k += o * q,
                P += o * K,
                _ += o * W,
                L += o * G,
                T += o * X,
                S += o * Y,
                N += o * $,
                I += o * Q,
                v += (o = t[13]) * E,
                y += o * F,
                O += o * V,
                j += o * M,
                C += o * R,
                x += o * U,
                w += o * H,
                k += o * z,
                P += o * q,
                _ += o * K,
                L += o * W,
                T += o * G,
                S += o * X,
                N += o * Y,
                I += o * $,
                A += o * Q,
                y += (o = t[14]) * E,
                O += o * F,
                j += o * V,
                C += o * M,
                x += o * R,
                w += o * U,
                k += o * H,
                P += o * z,
                _ += o * q,
                L += o * K,
                T += o * W,
                S += o * G,
                N += o * X,
                I += o * Y,
                A += o * $,
                B += o * Q,
                O += (o = t[15]) * E,
                i += 38 * (C += o * V),
                s += 38 * (x += o * M),
                c += 38 * (w += o * R),
                l += 38 * (k += o * U),
                u += 38 * (P += o * H),
                p += 38 * (_ += o * z),
                d += 38 * (L += o * q),
                g += 38 * (T += o * K),
                f += 38 * (S += o * W),
                h += 38 * (N += o * G),
                b += 38 * (I += o * X),
                m += 38 * (A += o * Y),
                v += 38 * (B += o * $),
                y += 38 * (D += o * Q),
                a = (o = (a += 38 * (j += o * F)) + (r = 1) + 65535) - 65536 * (r = Math.floor(o / 65536)),
                i = (o = i + r + 65535) - 65536 * (r = Math.floor(o / 65536)),
                s = (o = s + r + 65535) - 65536 * (r = Math.floor(o / 65536)),
                c = (o = c + r + 65535) - 65536 * (r = Math.floor(o / 65536)),
                l = (o = l + r + 65535) - 65536 * (r = Math.floor(o / 65536)),
                u = (o = u + r + 65535) - 65536 * (r = Math.floor(o / 65536)),
                p = (o = p + r + 65535) - 65536 * (r = Math.floor(o / 65536)),
                d = (o = d + r + 65535) - 65536 * (r = Math.floor(o / 65536)),
                g = (o = g + r + 65535) - 65536 * (r = Math.floor(o / 65536)),
                f = (o = f + r + 65535) - 65536 * (r = Math.floor(o / 65536)),
                h = (o = h + r + 65535) - 65536 * (r = Math.floor(o / 65536)),
                b = (o = b + r + 65535) - 65536 * (r = Math.floor(o / 65536)),
                m = (o = m + r + 65535) - 65536 * (r = Math.floor(o / 65536)),
                v = (o = v + r + 65535) - 65536 * (r = Math.floor(o / 65536)),
                y = (o = y + r + 65535) - 65536 * (r = Math.floor(o / 65536)),
                O = (o = O + r + 65535) - 65536 * (r = Math.floor(o / 65536)),
                a = (o = (a += r - 1 + 37 * (r - 1)) + (r = 1) + 65535) - 65536 * (r = Math.floor(o / 65536)),
                i = (o = i + r + 65535) - 65536 * (r = Math.floor(o / 65536)),
                s = (o = s + r + 65535) - 65536 * (r = Math.floor(o / 65536)),
                c = (o = c + r + 65535) - 65536 * (r = Math.floor(o / 65536)),
                l = (o = l + r + 65535) - 65536 * (r = Math.floor(o / 65536)),
                u = (o = u + r + 65535) - 65536 * (r = Math.floor(o / 65536)),
                p = (o = p + r + 65535) - 65536 * (r = Math.floor(o / 65536)),
                d = (o = d + r + 65535) - 65536 * (r = Math.floor(o / 65536)),
                g = (o = g + r + 65535) - 65536 * (r = Math.floor(o / 65536)),
                f = (o = f + r + 65535) - 65536 * (r = Math.floor(o / 65536)),
                h = (o = h + r + 65535) - 65536 * (r = Math.floor(o / 65536)),
                b = (o = b + r + 65535) - 65536 * (r = Math.floor(o / 65536)),
                m = (o = m + r + 65535) - 65536 * (r = Math.floor(o / 65536)),
                v = (o = v + r + 65535) - 65536 * (r = Math.floor(o / 65536)),
                y = (o = y + r + 65535) - 65536 * (r = Math.floor(o / 65536)),
                O = (o = O + r + 65535) - 65536 * (r = Math.floor(o / 65536)),
                e[0] = a += r - 1 + 37 * (r - 1),
                e[1] = i,
                e[2] = s,
                e[3] = c,
                e[4] = l,
                e[5] = u,
                e[6] = p,
                e[7] = d,
                e[8] = g,
                e[9] = f,
                e[10] = h,
                e[11] = b,
                e[12] = m,
                e[13] = v,
                e[14] = y,
                e[15] = O
            }
            function P(e, t) {
                k(e, t, t)
            }
            function _(e, t) {
                var n, o = X();
                for (n = 0; n < 16; n++)
                    o[n] = t[n];
                for (n = 253; n >= 0; n--)
                    P(o, o),
                    2 !== n && 4 !== n && k(o, o, t);
                for (n = 0; n < 16; n++)
                    e[n] = o[n]
            }
            function L(e, t, n) {
                var o, r, a = new Uint8Array(32), i = new Float64Array(80), s = X(), c = X(), l = X(), u = X(), p = X(), d = X();
                for (r = 0; r < 31; r++)
                    a[r] = t[r];
                for (a[31] = 127 & t[31] | 64,
                a[0] &= 248,
                C(i, n),
                r = 0; r < 16; r++)
                    c[r] = i[r],
                    u[r] = s[r] = l[r] = 0;
                for (s[0] = u[0] = 1,
                r = 254; r >= 0; --r)
                    v(s, c, o = a[r >>> 3] >>> (7 & r) & 1),
                    v(l, u, o),
                    x(p, s, l),
                    w(s, s, l),
                    x(l, c, u),
                    w(c, c, u),
                    P(u, p),
                    P(d, s),
                    k(s, l, s),
                    k(l, c, p),
                    x(p, s, l),
                    w(s, s, l),
                    P(c, s),
                    w(l, u, d),
                    k(s, l, ee),
                    x(s, s, u),
                    k(l, l, s),
                    k(s, u, d),
                    k(u, c, i),
                    P(c, p),
                    v(s, c, o),
                    v(l, u, o);
                for (r = 0; r < 16; r++)
                    i[r + 16] = s[r],
                    i[r + 32] = l[r],
                    i[r + 48] = c[r],
                    i[r + 64] = u[r];
                var g = i.subarray(32)
                  , f = i.subarray(16);
                return _(g, g),
                k(f, f, g),
                y(e, f),
                0
            }
            function T(e, t) {
                return L(e, t, Q)
            }
            function S(e, t) {
                return Y(t, 32),
                T(e, t)
            }
            function N(e, t, n) {
                var o = new Uint8Array(32);
                return L(o, n, t),
                s(e, $, o, ie)
            }
            function I(e, t, n, o) {
                for (var r, a, i, s, c, l, u, p, d, g, f, h, b, m, v, y, O, j, C, x, w, k, P = new Int32Array(16), _ = new Int32Array(16), L = e[0], T = e[1], S = e[2], N = e[3], I = e[4], A = e[5], B = e[6], D = e[7], E = t[0], F = t[1], V = t[2], M = t[3], R = t[4], U = t[5], H = t[6], z = t[7], q = 0; o >= 128; ) {
                    for (v = 0; v < 16; v++)
                        P[v] = n[(y = 8 * v + q) + 0] << 24 | n[y + 1] << 16 | n[y + 2] << 8 | n[y + 3],
                        _[v] = n[y + 4] << 24 | n[y + 5] << 16 | n[y + 6] << 8 | n[y + 7];
                    for (v = 0; v < 80; v++)
                        if (r = T,
                        a = S,
                        i = I,
                        s = A,
                        c = B,
                        D,
                        u = F,
                        p = V,
                        d = R,
                        g = U,
                        f = H,
                        z,
                        C = 65535 & (j = z),
                        x = j >>> 16,
                        w = 65535 & (O = D),
                        k = O >>> 16,
                        C += 65535 & (j = (R >>> 14 | I << 18) ^ (R >>> 18 | I << 14) ^ (I >>> 9 | R << 23)),
                        x += j >>> 16,
                        w += 65535 & (O = (I >>> 14 | R << 18) ^ (I >>> 18 | R << 14) ^ (R >>> 9 | I << 23)),
                        k += O >>> 16,
                        C += 65535 & (j = R & U ^ ~R & H),
                        x += j >>> 16,
                        w += 65535 & (O = I & A ^ ~I & B),
                        k += O >>> 16,
                        C += 65535 & (j = ue[2 * v + 1]),
                        x += j >>> 16,
                        w += 65535 & (O = ue[2 * v]),
                        k += O >>> 16,
                        x += (j = _[v % 16]) >>> 16,
                        w += 65535 & (O = P[v % 16]),
                        k += O >>> 16,
                        w += (x += (C += 65535 & j) >>> 16) >>> 16,
                        C = 65535 & (j = m = 65535 & C | x << 16),
                        x = j >>> 16,
                        w = 65535 & (O = b = 65535 & w | (k += w >>> 16) << 16),
                        k = O >>> 16,
                        C += 65535 & (j = (E >>> 28 | L << 4) ^ (L >>> 2 | E << 30) ^ (L >>> 7 | E << 25)),
                        x += j >>> 16,
                        w += 65535 & (O = (L >>> 28 | E << 4) ^ (E >>> 2 | L << 30) ^ (E >>> 7 | L << 25)),
                        k += O >>> 16,
                        x += (j = E & F ^ E & V ^ F & V) >>> 16,
                        w += 65535 & (O = L & T ^ L & S ^ T & S),
                        k += O >>> 16,
                        l = 65535 & (w += (x += (C += 65535 & j) >>> 16) >>> 16) | (k += w >>> 16) << 16,
                        h = 65535 & C | x << 16,
                        C = 65535 & (j = M),
                        x = j >>> 16,
                        w = 65535 & (O = N),
                        k = O >>> 16,
                        x += (j = m) >>> 16,
                        w += 65535 & (O = b),
                        k += O >>> 16,
                        T = L,
                        S = r,
                        N = a,
                        I = 65535 & (w += (x += (C += 65535 & j) >>> 16) >>> 16) | (k += w >>> 16) << 16,
                        A = i,
                        B = s,
                        D = c,
                        L = l,
                        F = E,
                        V = u,
                        M = p,
                        R = 65535 & C | x << 16,
                        U = d,
                        H = g,
                        z = f,
                        E = h,
                        v % 16 == 15)
                            for (y = 0; y < 16; y++)
                                C = 65535 & (j = _[y]),
                                x = j >>> 16,
                                w = 65535 & (O = P[y]),
                                k = O >>> 16,
                                C += 65535 & (j = _[(y + 9) % 16]),
                                x += j >>> 16,
                                w += 65535 & (O = P[(y + 9) % 16]),
                                k += O >>> 16,
                                C += 65535 & (j = ((m = _[(y + 1) % 16]) >>> 1 | (b = P[(y + 1) % 16]) << 31) ^ (m >>> 8 | b << 24) ^ (m >>> 7 | b << 25)),
                                x += j >>> 16,
                                w += 65535 & (O = (b >>> 1 | m << 31) ^ (b >>> 8 | m << 24) ^ b >>> 7),
                                k += O >>> 16,
                                x += (j = ((m = _[(y + 14) % 16]) >>> 19 | (b = P[(y + 14) % 16]) << 13) ^ (b >>> 29 | m << 3) ^ (m >>> 6 | b << 26)) >>> 16,
                                w += 65535 & (O = (b >>> 19 | m << 13) ^ (m >>> 29 | b << 3) ^ b >>> 6),
                                k += O >>> 16,
                                P[y] = 65535 & (w += (x += (C += 65535 & j) >>> 16) >>> 16) | (k += w >>> 16) << 16,
                                _[y] = 65535 & C | x << 16;
                    C = 65535 & (j = E),
                    x = j >>> 16,
                    w = 65535 & (O = L),
                    k = O >>> 16,
                    x += (j = t[0]) >>> 16,
                    w += 65535 & (O = e[0]),
                    k += O >>> 16,
                    e[0] = L = 65535 & (w += (x += (C += 65535 & j) >>> 16) >>> 16) | (k += w >>> 16) << 16,
                    t[0] = E = 65535 & C | x << 16,
                    C = 65535 & (j = F),
                    x = j >>> 16,
                    w = 65535 & (O = T),
                    k = O >>> 16,
                    x += (j = t[1]) >>> 16,
                    w += 65535 & (O = e[1]),
                    k += O >>> 16,
                    e[1] = T = 65535 & (w += (x += (C += 65535 & j) >>> 16) >>> 16) | (k += w >>> 16) << 16,
                    t[1] = F = 65535 & C | x << 16,
                    C = 65535 & (j = V),
                    x = j >>> 16,
                    w = 65535 & (O = S),
                    k = O >>> 16,
                    x += (j = t[2]) >>> 16,
                    w += 65535 & (O = e[2]),
                    k += O >>> 16,
                    e[2] = S = 65535 & (w += (x += (C += 65535 & j) >>> 16) >>> 16) | (k += w >>> 16) << 16,
                    t[2] = V = 65535 & C | x << 16,
                    C = 65535 & (j = M),
                    x = j >>> 16,
                    w = 65535 & (O = N),
                    k = O >>> 16,
                    x += (j = t[3]) >>> 16,
                    w += 65535 & (O = e[3]),
                    k += O >>> 16,
                    e[3] = N = 65535 & (w += (x += (C += 65535 & j) >>> 16) >>> 16) | (k += w >>> 16) << 16,
                    t[3] = M = 65535 & C | x << 16,
                    C = 65535 & (j = R),
                    x = j >>> 16,
                    w = 65535 & (O = I),
                    k = O >>> 16,
                    x += (j = t[4]) >>> 16,
                    w += 65535 & (O = e[4]),
                    k += O >>> 16,
                    e[4] = I = 65535 & (w += (x += (C += 65535 & j) >>> 16) >>> 16) | (k += w >>> 16) << 16,
                    t[4] = R = 65535 & C | x << 16,
                    C = 65535 & (j = U),
                    x = j >>> 16,
                    w = 65535 & (O = A),
                    k = O >>> 16,
                    x += (j = t[5]) >>> 16,
                    w += 65535 & (O = e[5]),
                    k += O >>> 16,
                    e[5] = A = 65535 & (w += (x += (C += 65535 & j) >>> 16) >>> 16) | (k += w >>> 16) << 16,
                    t[5] = U = 65535 & C | x << 16,
                    C = 65535 & (j = H),
                    x = j >>> 16,
                    w = 65535 & (O = B),
                    k = O >>> 16,
                    x += (j = t[6]) >>> 16,
                    w += 65535 & (O = e[6]),
                    k += O >>> 16,
                    e[6] = B = 65535 & (w += (x += (C += 65535 & j) >>> 16) >>> 16) | (k += w >>> 16) << 16,
                    t[6] = H = 65535 & C | x << 16,
                    C = 65535 & (j = z),
                    x = j >>> 16,
                    w = 65535 & (O = D),
                    k = O >>> 16,
                    x += (j = t[7]) >>> 16,
                    w += 65535 & (O = e[7]),
                    k += O >>> 16,
                    e[7] = D = 65535 & (w += (x += (C += 65535 & j) >>> 16) >>> 16) | (k += w >>> 16) << 16,
                    t[7] = z = 65535 & C | x << 16,
                    q += 128,
                    o -= 128
                }
                return o
            }
            function A(e, n, o) {
                var r, a = new Int32Array(8), i = new Int32Array(8), s = new Uint8Array(256), c = o;
                for (a[0] = 1779033703,
                a[1] = 3144134277,
                a[2] = 1013904242,
                a[3] = 2773480762,
                a[4] = 1359893119,
                a[5] = 2600822924,
                a[6] = 528734635,
                a[7] = 1541459225,
                i[0] = 4089235720,
                i[1] = 2227873595,
                i[2] = 4271175723,
                i[3] = 1595750129,
                i[4] = 2917565137,
                i[5] = 725511199,
                i[6] = 4215389547,
                i[7] = 327033209,
                I(a, i, n, o),
                o %= 128,
                r = 0; r < o; r++)
                    s[r] = n[c - o + r];
                for (s[o] = 128,
                s[(o = 256 - 128 * (o < 112 ? 1 : 0)) - 9] = 0,
                t(s, o - 8, c / 536870912 | 0, c << 3),
                I(a, i, s, o),
                r = 0; r < 8; r++)
                    t(e, 8 * r, a[r], i[r]);
                return 0
            }
            function B(e, t) {
                var n = X()
                  , o = X()
                  , r = X()
                  , a = X()
                  , i = X()
                  , s = X()
                  , c = X()
                  , l = X()
                  , u = X();
                w(n, e[1], e[0]),
                w(u, t[1], t[0]),
                k(n, n, u),
                x(o, e[0], e[1]),
                x(u, t[0], t[1]),
                k(o, o, u),
                k(r, e[3], t[3]),
                k(r, r, ne),
                k(a, e[2], t[2]),
                x(a, a, a),
                w(i, o, n),
                w(s, a, r),
                x(c, a, r),
                x(l, o, n),
                k(e[0], i, s),
                k(e[1], l, c),
                k(e[2], c, s),
                k(e[3], i, l)
            }
            function D(e, t, n) {
                var o;
                for (o = 0; o < 4; o++)
                    v(e[o], t[o], n)
            }
            function E(e, t) {
                var n = X()
                  , o = X()
                  , r = X();
                _(r, t[2]),
                k(n, t[0], r),
                k(o, t[1], r),
                y(e, o),
                e[31] ^= j(n) << 7
            }
            function F(e, t, n) {
                var o, r;
                for (b(e[0], J),
                b(e[1], Z),
                b(e[2], Z),
                b(e[3], J),
                r = 255; r >= 0; --r)
                    D(e, t, o = n[r / 8 | 0] >> (7 & r) & 1),
                    B(t, e),
                    B(e, e),
                    D(e, t, o)
            }
            function V(e, t) {
                var n = [X(), X(), X(), X()];
                b(n[0], oe),
                b(n[1], re),
                b(n[2], Z),
                k(n[3], oe, re),
                F(e, n, t)
            }
            function M(e, t, n) {
                var o, r = new Uint8Array(64), a = [X(), X(), X(), X()];
                for (n || Y(t, 32),
                A(r, t, 32),
                r[0] &= 248,
                r[31] &= 127,
                r[31] |= 64,
                V(a, r),
                E(e, a),
                o = 0; o < 32; o++)
                    t[o + 32] = e[o];
                return 0
            }
            function R(e, t) {
                var n, o, r, a;
                for (o = 63; o >= 32; --o) {
                    for (n = 0,
                    r = o - 32,
                    a = o - 12; r < a; ++r)
                        t[r] += n - 16 * t[o] * pe[r - (o - 32)],
                        t[r] -= 256 * (n = t[r] + 128 >> 8);
                    t[r] += n,
                    t[o] = 0
                }
                for (n = 0,
                r = 0; r < 32; r++)
                    t[r] += n - (t[31] >> 4) * pe[r],
                    n = t[r] >> 8,
                    t[r] &= 255;
                for (r = 0; r < 32; r++)
                    t[r] -= n * pe[r];
                for (o = 0; o < 32; o++)
                    t[o + 1] += t[o] >> 8,
                    e[o] = 255 & t[o]
            }
            function U(e) {
                var t, n = new Float64Array(64);
                for (t = 0; t < 64; t++)
                    n[t] = e[t];
                for (t = 0; t < 64; t++)
                    e[t] = 0;
                R(e, n)
            }
            function H(e, t, n, o) {
                var r, a, i = new Uint8Array(64), s = new Uint8Array(64), c = new Uint8Array(64), l = new Float64Array(64), u = [X(), X(), X(), X()];
                A(i, o, 32),
                i[0] &= 248,
                i[31] &= 127,
                i[31] |= 64;
                var p = n + 64;
                for (r = 0; r < n; r++)
                    e[64 + r] = t[r];
                for (r = 0; r < 32; r++)
                    e[32 + r] = i[32 + r];
                for (A(c, e.subarray(32), n + 32),
                U(c),
                V(u, c),
                E(e, u),
                r = 32; r < 64; r++)
                    e[r] = o[r];
                for (A(s, e, n + 64),
                U(s),
                r = 0; r < 64; r++)
                    l[r] = 0;
                for (r = 0; r < 32; r++)
                    l[r] = c[r];
                for (r = 0; r < 32; r++)
                    for (a = 0; a < 32; a++)
                        l[r + a] += s[r] * i[a];
                return R(e.subarray(32), l),
                p
            }
            function z(e, t) {
                var n = X()
                  , o = X()
                  , r = X()
                  , a = X()
                  , i = X()
                  , s = X()
                  , c = X();
                return b(e[2], Z),
                C(e[1], t),
                P(r, e[1]),
                k(a, r, te),
                w(r, r, e[2]),
                x(a, e[2], a),
                P(i, a),
                P(s, i),
                k(c, s, i),
                k(n, c, r),
                k(n, n, a),
                function(e, t) {
                    var n, o = X();
                    for (n = 0; n < 16; n++)
                        o[n] = t[n];
                    for (n = 250; n >= 0; n--)
                        P(o, o),
                        1 !== n && k(o, o, t);
                    for (n = 0; n < 16; n++)
                        e[n] = o[n]
                }(n, n),
                k(n, n, r),
                k(n, n, a),
                k(n, n, a),
                k(e[0], n, a),
                P(o, e[0]),
                k(o, o, a),
                O(o, r) && k(e[0], e[0], ae),
                P(o, e[0]),
                k(o, o, a),
                O(o, r) ? -1 : (j(e[0]) === t[31] >> 7 && w(e[0], J, e[0]),
                k(e[3], e[0], e[1]),
                0)
            }
            function q(e, t, n, o) {
                var r, i = new Uint8Array(32), s = new Uint8Array(64), c = [X(), X(), X(), X()], l = [X(), X(), X(), X()];
                if (-1,
                n < 64)
                    return -1;
                if (z(l, o))
                    return -1;
                for (r = 0; r < n; r++)
                    e[r] = t[r];
                for (r = 0; r < 32; r++)
                    e[r + 32] = o[r];
                if (A(s, e, n),
                U(s),
                F(c, l, s),
                V(l, t.subarray(32)),
                B(c, l),
                E(i, c),
                n -= 64,
                a(t, 0, i, 0)) {
                    for (r = 0; r < n; r++)
                        e[r] = 0;
                    return -1
                }
                for (r = 0; r < n; r++)
                    e[r] = t[r + 64];
                return n
            }
            function K(e, t) {
                if (e.length !== de)
                    throw new Error("bad key size");
                if (t.length !== ge)
                    throw new Error("bad nonce size")
            }
            function W() {
                var e, t;
                for (t = 0; t < arguments.length; t++)
                    if ("[object Uint8Array]" !== (e = Object.prototype.toString.call(arguments[t])))
                        throw new TypeError("unexpected type " + e + ", use Uint8Array")
            }
            function G(e) {
                for (var t = 0; t < e.length; t++)
                    e[t] = 0
            }
            var X = function(e) {
                var t, n = new Float64Array(16);
                if (e)
                    for (t = 0; t < e.length; t++)
                        n[t] = e[t];
                return n
            }
              , Y = function() {
                throw new Error("no PRNG")
            }
              , $ = new Uint8Array(16)
              , Q = new Uint8Array(32);
            Q[0] = 9;
            var J = X()
              , Z = X([1])
              , ee = X([56129, 1])
              , te = X([30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119, 27886, 20995])
              , ne = X([61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239, 55772, 9222])
              , oe = X([54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502, 52590, 14035, 8553])
              , re = X([26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214])
              , ae = X([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139])
              , ie = new Uint8Array([101, 120, 112, 97, 110, 100, 32, 51, 50, 45, 98, 121, 116, 101, 32, 107])
              , se = function(e) {
                var t, n, o, r, a, i, s, c;
                this.buffer = new Uint8Array(16),
                this.r = new Uint16Array(10),
                this.h = new Uint16Array(10),
                this.pad = new Uint16Array(8),
                this.leftover = 0,
                this.fin = 0,
                this.r[0] = 8191 & (t = 255 & e[0] | (255 & e[1]) << 8),
                this.r[1] = 8191 & (t >>> 13 | (n = 255 & e[2] | (255 & e[3]) << 8) << 3),
                this.r[2] = 7939 & (n >>> 10 | (o = 255 & e[4] | (255 & e[5]) << 8) << 6),
                this.r[3] = 8191 & (o >>> 7 | (r = 255 & e[6] | (255 & e[7]) << 8) << 9),
                this.r[4] = 255 & (r >>> 4 | (a = 255 & e[8] | (255 & e[9]) << 8) << 12),
                this.r[5] = a >>> 1 & 8190,
                this.r[6] = 8191 & (a >>> 14 | (i = 255 & e[10] | (255 & e[11]) << 8) << 2),
                this.r[7] = 8065 & (i >>> 11 | (s = 255 & e[12] | (255 & e[13]) << 8) << 5),
                this.r[8] = 8191 & (s >>> 8 | (c = 255 & e[14] | (255 & e[15]) << 8) << 8),
                this.r[9] = c >>> 5 & 127,
                this.pad[0] = 255 & e[16] | (255 & e[17]) << 8,
                this.pad[1] = 255 & e[18] | (255 & e[19]) << 8,
                this.pad[2] = 255 & e[20] | (255 & e[21]) << 8,
                this.pad[3] = 255 & e[22] | (255 & e[23]) << 8,
                this.pad[4] = 255 & e[24] | (255 & e[25]) << 8,
                this.pad[5] = 255 & e[26] | (255 & e[27]) << 8,
                this.pad[6] = 255 & e[28] | (255 & e[29]) << 8,
                this.pad[7] = 255 & e[30] | (255 & e[31]) << 8
            };
            se.prototype.blocks = function(e, t, n) {
                for (var o, r, a, i, s, c, l, u, p, d, g, f, h, b, m, v, y, O, j, C = this.fin ? 0 : 2048, x = this.h[0], w = this.h[1], k = this.h[2], P = this.h[3], _ = this.h[4], L = this.h[5], T = this.h[6], S = this.h[7], N = this.h[8], I = this.h[9], A = this.r[0], B = this.r[1], D = this.r[2], E = this.r[3], F = this.r[4], V = this.r[5], M = this.r[6], R = this.r[7], U = this.r[8], H = this.r[9]; n >= 16; )
                    d = p = 0,
                    d += (x += 8191 & (o = 255 & e[t + 0] | (255 & e[t + 1]) << 8)) * A,
                    d += (w += 8191 & (o >>> 13 | (r = 255 & e[t + 2] | (255 & e[t + 3]) << 8) << 3)) * (5 * H),
                    d += (k += 8191 & (r >>> 10 | (a = 255 & e[t + 4] | (255 & e[t + 5]) << 8) << 6)) * (5 * U),
                    d += (P += 8191 & (a >>> 7 | (i = 255 & e[t + 6] | (255 & e[t + 7]) << 8) << 9)) * (5 * R),
                    p = (d += (_ += 8191 & (i >>> 4 | (s = 255 & e[t + 8] | (255 & e[t + 9]) << 8) << 12)) * (5 * M)) >>> 13,
                    d &= 8191,
                    d += (L += s >>> 1 & 8191) * (5 * V),
                    d += (T += 8191 & (s >>> 14 | (c = 255 & e[t + 10] | (255 & e[t + 11]) << 8) << 2)) * (5 * F),
                    d += (S += 8191 & (c >>> 11 | (l = 255 & e[t + 12] | (255 & e[t + 13]) << 8) << 5)) * (5 * E),
                    d += (N += 8191 & (l >>> 8 | (u = 255 & e[t + 14] | (255 & e[t + 15]) << 8) << 8)) * (5 * D),
                    g = p += (d += (I += u >>> 5 | C) * (5 * B)) >>> 13,
                    g += x * B,
                    g += w * A,
                    g += k * (5 * H),
                    g += P * (5 * U),
                    p = (g += _ * (5 * R)) >>> 13,
                    g &= 8191,
                    g += L * (5 * M),
                    g += T * (5 * V),
                    g += S * (5 * F),
                    g += N * (5 * E),
                    p += (g += I * (5 * D)) >>> 13,
                    g &= 8191,
                    f = p,
                    f += x * D,
                    f += w * B,
                    f += k * A,
                    f += P * (5 * H),
                    p = (f += _ * (5 * U)) >>> 13,
                    f &= 8191,
                    f += L * (5 * R),
                    f += T * (5 * M),
                    f += S * (5 * V),
                    f += N * (5 * F),
                    h = p += (f += I * (5 * E)) >>> 13,
                    h += x * E,
                    h += w * D,
                    h += k * B,
                    h += P * A,
                    p = (h += _ * (5 * H)) >>> 13,
                    h &= 8191,
                    h += L * (5 * U),
                    h += T * (5 * R),
                    h += S * (5 * M),
                    h += N * (5 * V),
                    b = p += (h += I * (5 * F)) >>> 13,
                    b += x * F,
                    b += w * E,
                    b += k * D,
                    b += P * B,
                    p = (b += _ * A) >>> 13,
                    b &= 8191,
                    b += L * (5 * H),
                    b += T * (5 * U),
                    b += S * (5 * R),
                    b += N * (5 * M),
                    m = p += (b += I * (5 * V)) >>> 13,
                    m += x * V,
                    m += w * F,
                    m += k * E,
                    m += P * D,
                    p = (m += _ * B) >>> 13,
                    m &= 8191,
                    m += L * A,
                    m += T * (5 * H),
                    m += S * (5 * U),
                    m += N * (5 * R),
                    v = p += (m += I * (5 * M)) >>> 13,
                    v += x * M,
                    v += w * V,
                    v += k * F,
                    v += P * E,
                    p = (v += _ * D) >>> 13,
                    v &= 8191,
                    v += L * B,
                    v += T * A,
                    v += S * (5 * H),
                    v += N * (5 * U),
                    y = p += (v += I * (5 * R)) >>> 13,
                    y += x * R,
                    y += w * M,
                    y += k * V,
                    y += P * F,
                    p = (y += _ * E) >>> 13,
                    y &= 8191,
                    y += L * D,
                    y += T * B,
                    y += S * A,
                    y += N * (5 * H),
                    O = p += (y += I * (5 * U)) >>> 13,
                    O += x * U,
                    O += w * R,
                    O += k * M,
                    O += P * V,
                    p = (O += _ * F) >>> 13,
                    O &= 8191,
                    O += L * E,
                    O += T * D,
                    O += S * B,
                    O += N * A,
                    j = p += (O += I * (5 * H)) >>> 13,
                    j += x * H,
                    j += w * U,
                    j += k * R,
                    j += P * M,
                    p = (j += _ * V) >>> 13,
                    j &= 8191,
                    j += L * F,
                    j += T * E,
                    j += S * D,
                    j += N * B,
                    x = d = 8191 & (p = (p = ((p += (j += I * A) >>> 13) << 2) + p | 0) + (d &= 8191) | 0),
                    w = g += p >>>= 13,
                    k = f &= 8191,
                    P = h &= 8191,
                    _ = b &= 8191,
                    L = m &= 8191,
                    T = v &= 8191,
                    S = y &= 8191,
                    N = O &= 8191,
                    I = j &= 8191,
                    t += 16,
                    n -= 16;
                this.h[0] = x,
                this.h[1] = w,
                this.h[2] = k,
                this.h[3] = P,
                this.h[4] = _,
                this.h[5] = L,
                this.h[6] = T,
                this.h[7] = S,
                this.h[8] = N,
                this.h[9] = I
            }
            ,
            se.prototype.finish = function(e, t) {
                var n, o, r, a, i = new Uint16Array(10);
                if (this.leftover) {
                    for (a = this.leftover,
                    this.buffer[a++] = 1; a < 16; a++)
                        this.buffer[a] = 0;
                    this.fin = 1,
                    this.blocks(this.buffer, 0, 16)
                }
                for (n = this.h[1] >>> 13,
                this.h[1] &= 8191,
                a = 2; a < 10; a++)
                    this.h[a] += n,
                    n = this.h[a] >>> 13,
                    this.h[a] &= 8191;
                for (this.h[0] += 5 * n,
                n = this.h[0] >>> 13,
                this.h[0] &= 8191,
                this.h[1] += n,
                n = this.h[1] >>> 13,
                this.h[1] &= 8191,
                this.h[2] += n,
                i[0] = this.h[0] + 5,
                n = i[0] >>> 13,
                i[0] &= 8191,
                a = 1; a < 10; a++)
                    i[a] = this.h[a] + n,
                    n = i[a] >>> 13,
                    i[a] &= 8191;
                for (i[9] -= 8192,
                o = (1 ^ n) - 1,
                a = 0; a < 10; a++)
                    i[a] &= o;
                for (o = ~o,
                a = 0; a < 10; a++)
                    this.h[a] = this.h[a] & o | i[a];
                for (this.h[0] = 65535 & (this.h[0] | this.h[1] << 13),
                this.h[1] = 65535 & (this.h[1] >>> 3 | this.h[2] << 10),
                this.h[2] = 65535 & (this.h[2] >>> 6 | this.h[3] << 7),
                this.h[3] = 65535 & (this.h[3] >>> 9 | this.h[4] << 4),
                this.h[4] = 65535 & (this.h[4] >>> 12 | this.h[5] << 1 | this.h[6] << 14),
                this.h[5] = 65535 & (this.h[6] >>> 2 | this.h[7] << 11),
                this.h[6] = 65535 & (this.h[7] >>> 5 | this.h[8] << 8),
                this.h[7] = 65535 & (this.h[8] >>> 8 | this.h[9] << 5),
                this.h[0] = 65535 & (r = this.h[0] + this.pad[0]),
                a = 1; a < 8; a++)
                    this.h[a] = 65535 & (r = (this.h[a] + this.pad[a] | 0) + (r >>> 16) | 0);
                e[t + 0] = this.h[0] >>> 0 & 255,
                e[t + 1] = this.h[0] >>> 8 & 255,
                e[t + 2] = this.h[1] >>> 0 & 255,
                e[t + 3] = this.h[1] >>> 8 & 255,
                e[t + 4] = this.h[2] >>> 0 & 255,
                e[t + 5] = this.h[2] >>> 8 & 255,
                e[t + 6] = this.h[3] >>> 0 & 255,
                e[t + 7] = this.h[3] >>> 8 & 255,
                e[t + 8] = this.h[4] >>> 0 & 255,
                e[t + 9] = this.h[4] >>> 8 & 255,
                e[t + 10] = this.h[5] >>> 0 & 255,
                e[t + 11] = this.h[5] >>> 8 & 255,
                e[t + 12] = this.h[6] >>> 0 & 255,
                e[t + 13] = this.h[6] >>> 8 & 255,
                e[t + 14] = this.h[7] >>> 0 & 255,
                e[t + 15] = this.h[7] >>> 8 & 255
            }
            ,
            se.prototype.update = function(e, t, n) {
                var o, r;
                if (this.leftover) {
                    for ((r = 16 - this.leftover) > n && (r = n),
                    o = 0; o < r; o++)
                        this.buffer[this.leftover + o] = e[t + o];
                    if (n -= r,
                    t += r,
                    this.leftover += r,
                    this.leftover < 16)
                        return;
                    this.blocks(this.buffer, 0, 16),
                    this.leftover = 0
                }
                if (n >= 16 && (this.blocks(e, t, r = n - n % 16),
                t += r,
                n -= r),
                n) {
                    for (o = 0; o < n; o++)
                        this.buffer[this.leftover + o] = e[t + o];
                    this.leftover += n
                }
            }
            ;
            var ce = f
              , le = h
              , ue = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591]
              , pe = new Float64Array([237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16])
              , de = 32
              , ge = 24
              , fe = 32
              , he = 32
              , be = ge;
            e.lowlevel = {
                crypto_core_hsalsa20: s,
                crypto_stream_xor: p,
                crypto_stream: u,
                crypto_stream_salsa20_xor: c,
                crypto_stream_salsa20: l,
                crypto_onetimeauth: d,
                crypto_onetimeauth_verify: g,
                crypto_verify_16: r,
                crypto_verify_32: a,
                crypto_secretbox: f,
                crypto_secretbox_open: h,
                crypto_scalarmult: L,
                crypto_scalarmult_base: T,
                crypto_box_beforenm: N,
                crypto_box_afternm: ce,
                crypto_box: function(e, t, n, o, r, a) {
                    var i = new Uint8Array(32);
                    return N(i, r, a),
                    ce(e, t, n, o, i)
                },
                crypto_box_open: function(e, t, n, o, r, a) {
                    var i = new Uint8Array(32);
                    return N(i, r, a),
                    le(e, t, n, o, i)
                },
                crypto_box_keypair: S,
                crypto_hash: A,
                crypto_sign: H,
                crypto_sign_keypair: M,
                crypto_sign_open: q,
                crypto_secretbox_KEYBYTES: de,
                crypto_secretbox_NONCEBYTES: ge,
                crypto_secretbox_ZEROBYTES: 32,
                crypto_secretbox_BOXZEROBYTES: 16,
                crypto_scalarmult_BYTES: 32,
                crypto_scalarmult_SCALARBYTES: 32,
                crypto_box_PUBLICKEYBYTES: fe,
                crypto_box_SECRETKEYBYTES: he,
                crypto_box_BEFORENMBYTES: 32,
                crypto_box_NONCEBYTES: be,
                crypto_box_ZEROBYTES: 32,
                crypto_box_BOXZEROBYTES: 16,
                crypto_sign_BYTES: 64,
                crypto_sign_PUBLICKEYBYTES: 32,
                crypto_sign_SECRETKEYBYTES: 64,
                crypto_sign_SEEDBYTES: 32,
                crypto_hash_BYTES: 64
            },
            e.util || (e.util = {},
            e.util.decodeUTF8 = e.util.encodeUTF8 = e.util.encodeBase64 = e.util.decodeBase64 = function() {
                throw new Error("nacl.util moved into separate package: https://github.com/dchest/tweetnacl-util-js")
            }
            ),
            e.randomBytes = function(e) {
                var t = new Uint8Array(e);
                return Y(t, e),
                t
            }
            ,
            e.secretbox = function(e, t, n) {
                W(e, t, n),
                K(n, t);
                for (var o = new Uint8Array(32 + e.length), r = new Uint8Array(o.length), a = 0; a < e.length; a++)
                    o[a + 32] = e[a];
                return f(r, o, o.length, t, n),
                r.subarray(16)
            }
            ,
            e.secretbox.open = function(e, t, n) {
                W(e, t, n),
                K(n, t);
                for (var o = new Uint8Array(16 + e.length), r = new Uint8Array(o.length), a = 0; a < e.length; a++)
                    o[a + 16] = e[a];
                return !(o.length < 32) && (0 === h(r, o, o.length, t, n) && r.subarray(32))
            }
            ,
            e.secretbox.keyLength = de,
            e.secretbox.nonceLength = ge,
            e.secretbox.overheadLength = 16,
            e.scalarMult = function(e, t) {
                if (W(e, t),
                32 !== e.length)
                    throw new Error("bad n size");
                if (32 !== t.length)
                    throw new Error("bad p size");
                var n = new Uint8Array(32);
                return L(n, e, t),
                n
            }
            ,
            e.scalarMult.base = function(e) {
                if (W(e),
                32 !== e.length)
                    throw new Error("bad n size");
                var t = new Uint8Array(32);
                return T(t, e),
                t
            }
            ,
            e.scalarMult.scalarLength = 32,
            e.scalarMult.groupElementLength = 32,
            e.box = function(t, n, o, r) {
                var a = e.box.before(o, r);
                return e.secretbox(t, n, a)
            }
            ,
            e.box.before = function(e, t) {
                W(e, t),
                function(e, t) {
                    if (e.length !== fe)
                        throw new Error("bad public key size");
                    if (t.length !== he)
                        throw new Error("bad secret key size")
                }(e, t);
                var n = new Uint8Array(32);
                return N(n, e, t),
                n
            }
            ,
            e.box.after = e.secretbox,
            e.box.open = function(t, n, o, r) {
                var a = e.box.before(o, r);
                return e.secretbox.open(t, n, a)
            }
            ,
            e.box.open.after = e.secretbox.open,
            e.box.keyPair = function() {
                var e = new Uint8Array(fe)
                  , t = new Uint8Array(he);
                return S(e, t),
                {
                    publicKey: e,
                    secretKey: t
                }
            }
            ,
            e.box.keyPair.fromSecretKey = function(e) {
                if (W(e),
                e.length !== he)
                    throw new Error("bad secret key size");
                var t = new Uint8Array(fe);
                return T(t, e),
                {
                    publicKey: t,
                    secretKey: new Uint8Array(e)
                }
            }
            ,
            e.box.publicKeyLength = fe,
            e.box.secretKeyLength = he,
            e.box.sharedKeyLength = 32,
            e.box.nonceLength = be,
            e.box.overheadLength = e.secretbox.overheadLength,
            e.sign = function(e, t) {
                if (W(e, t),
                64 !== t.length)
                    throw new Error("bad secret key size");
                var n = new Uint8Array(64 + e.length);
                return H(n, e, e.length, t),
                n
            }
            ,
            e.sign.open = function(e, t) {
                if (2 !== arguments.length)
                    throw new Error("nacl.sign.open accepts 2 arguments; did you mean to use nacl.sign.detached.verify?");
                if (W(e, t),
                32 !== t.length)
                    throw new Error("bad public key size");
                var n = new Uint8Array(e.length)
                  , o = q(n, e, e.length, t);
                if (o < 0)
                    return null;
                for (var r = new Uint8Array(o), a = 0; a < r.length; a++)
                    r[a] = n[a];
                return r
            }
            ,
            e.sign.detached = function(t, n) {
                for (var o = e.sign(t, n), r = new Uint8Array(64), a = 0; a < r.length; a++)
                    r[a] = o[a];
                return r
            }
            ,
            e.sign.detached.verify = function(e, t, n) {
                if (W(e, t, n),
                64 !== t.length)
                    throw new Error("bad signature size");
                if (32 !== n.length)
                    throw new Error("bad public key size");
                var o, r = new Uint8Array(64 + e.length), a = new Uint8Array(64 + e.length);
                for (o = 0; o < 64; o++)
                    r[o] = t[o];
                for (o = 0; o < e.length; o++)
                    r[o + 64] = e[o];
                return q(a, r, r.length, n) >= 0
            }
            ,
            e.sign.keyPair = function() {
                var e = new Uint8Array(32)
                  , t = new Uint8Array(64);
                return M(e, t),
                {
                    publicKey: e,
                    secretKey: t
                }
            }
            ,
            e.sign.keyPair.fromSecretKey = function(e) {
                if (W(e),
                64 !== e.length)
                    throw new Error("bad secret key size");
                for (var t = new Uint8Array(32), n = 0; n < t.length; n++)
                    t[n] = e[32 + n];
                return {
                    publicKey: t,
                    secretKey: new Uint8Array(e)
                }
            }
            ,
            e.sign.keyPair.fromSeed = function(e) {
                if (W(e),
                32 !== e.length)
                    throw new Error("bad seed size");
                for (var t = new Uint8Array(32), n = new Uint8Array(64), o = 0; o < 32; o++)
                    n[o] = e[o];
                return M(t, n, !0),
                {
                    publicKey: t,
                    secretKey: n
                }
            }
            ,
            e.sign.publicKeyLength = 32,
            e.sign.secretKeyLength = 64,
            e.sign.seedLength = 32,
            e.sign.signatureLength = 64,
            e.hash = function(e) {
                W(e);
                var t = new Uint8Array(64);
                return A(t, e, e.length),
                t
            }
            ,
            e.hash.hashLength = 64,
            e.verify = function(e, t) {
                return W(e, t),
                0 !== e.length && 0 !== t.length && (e.length === t.length && 0 === o(e, 0, t, 0, e.length))
            }
            ,
            e.setPRNG = function(e) {
                Y = e
            }
            ,
            function() {
                var t = "undefined" != typeof self ? self.crypto || self.msCrypto : null;
                if (t && t.getRandomValues) {
                    e.setPRNG((function(e, n) {
                        var o, r = new Uint8Array(n);
                        for (o = 0; o < n; o += 65536)
                            t.getRandomValues(r.subarray(o, o + Math.min(n - o, 65536)));
                        for (o = 0; o < n; o++)
                            e[o] = r[o];
                        G(r)
                    }
                    ))
                } else
                    (t = n(0)) && t.randomBytes && e.setPRNG((function(e, n) {
                        var o, r = t.randomBytes(n);
                        for (o = 0; o < n; o++)
                            e[o] = r[o];
                        G(r)
                    }
                    ))
            }()
        }(e.exports ? e.exports : self.nacl = self.nacl || {})
    },
    XYkp: function(e, t, n) {
        "use strict";
        function o() {
            return (o = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n)
                        ({}).hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            }
            ).apply(null, arguments)
        }
        function r(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, o)
            }
            return n
        }
        function a(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? r(Object(n), !0).forEach((function(t) {
                    i(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function i(e, t, n) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" != typeof e || !e)
                        return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var o = n.call(e, t || "default");
                        if ("object" != typeof o)
                            return o;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" == typeof t ? t : t + ""
            }(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function s(e, t) {
            return (s = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        n.r(t);
        var c = n("2mXy")
          , l = n("FdF9")
          , u = n("eLTm")
          , p = n("Asb/")
          , d = function(e) {
            void 0 === e && (e = {}),
            o(this, {
                width: {
                    type: "px",
                    value: 600
                },
                height: {
                    type: "auto",
                    value: 1
                },
                padding: {
                    paddingLeft: 10,
                    paddingRight: 10,
                    paddingTop: 10,
                    paddingBottom: 10
                },
                border: {
                    borderWidth: 0,
                    borderColor: "#000000",
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    borderStyle: "solid"
                },
                background: "#ffffff",
                closeAlign: "right",
                closeFont: {
                    fontSize: 16,
                    fontWeight: "500",
                    color: "#999999",
                    fontFamily: "arial, helvetica, sans-serif"
                },
                selected_privacy_manager: {
                    type: null,
                    data: {}
                },
                showClose: !0,
                showVeil: !0,
                lockScroll: !0,
                useSafeArea: !1,
                veilColor: "#000000",
                veilOpacity: .65,
                type: "modal",
                zIndex: 2147483e3,
                url: "",
                type_settings: {
                    targetType: "id",
                    targetName: "",
                    dismissable: !1
                },
                defaultLanguage: e.language || "EN",
                useBrowserDefault: !1,
                supportedLanguages: [],
                iframeTitle: "SP Consent Message"
            }, e)
        }
          , g = [{
            type: "Notice",
            name: "Notice",
            settings: {},
            children: []
        }]
          , f = n("o1E3")
          , h = n("7P9E")
          , b = n("YSmr")
          , m = (n("qD70"),
        n("gm8T"));
        n.d(t, "Notice", (function() {
            return v
        }
        ));
        var v = function(e) {
            function t(t) {
                var n;
                return (n = e.call(this, t) || this).componentDidMount = function() {
                    var e = n.props
                      , t = e.messageId
                      , o = e.preloadMsg;
                    if (window.addEventListener("keydown", n.handleFirstTab),
                    window.addEventListener("resize", n.updateWindowDimensions),
                    o && (window.addEventListener("message", n.loadPreloadedMsg, !1),
                    window.parent.postMessage({
                        name: "sp.readyForPreload",
                        messageId: n.props.messageId
                    }, "*")),
                    t && !o) {
                        new Promise((function(e, o) {
                            var r, i;
                            return Promise.resolve(fetch(n.props.mmsOrigin + "/message?message_id=" + t, {
                                insecure: !0
                            })).then(function(t) {
                                try {
                                    return Promise.resolve(t.json()).then(function(t) {
                                        try {
                                            return (r = t).message_json.includes("$$!VC-") ? Promise.resolve(fetch(n.props.cmpv2Origin + "/vendor-list/categories?siteId=" + r.site_id, {
                                                insecure: !0
                                            })).then(function(e) {
                                                try {
                                                    return Promise.resolve(e.json()).then(function(e) {
                                                        try {
                                                            return n.loadMessage(a({}, r, {
                                                                vendorCount: {
                                                                    iab: (i = e).iabVendorCount,
                                                                    all: i.allVendorCount
                                                                }
                                                            })),
                                                            s.call(this)
                                                        } catch (e) {
                                                            return o(e)
                                                        }
                                                    }
                                                    .bind(this), o)
                                                } catch (e) {
                                                    return o(e)
                                                }
                                            }
                                            .bind(this), o) : (n.loadMessage(r),
                                            s.call(this));
                                            function s() {
                                                return e()
                                            }
                                        } catch (e) {
                                            return o(e)
                                        }
                                    }
                                    .bind(this), o)
                                } catch (e) {
                                    return o(e)
                                }
                            }
                            .bind(this), o)
                        }
                        ))
                    } else
                        (n.props.dev || n.props.tiny || n.props.mini || n.props.full) && (n.setState({
                            loading: !1
                        }),
                        window.addEventListener("message", n.handleDev, !1),
                        n.props.siteId && fetch(n.props.cmpv2Origin + "/vendor-list/categories?siteId=" + n.props.siteId, {
                            insecure: !0
                        }).then((function(e) {
                            return e.json()
                        }
                        )).then((function(e) {
                            n.setState({
                                vendorCount: {
                                    iab: e.iabVendorCount,
                                    all: e.allVendorCount
                                }
                            })
                        }
                        )))
                }
                ,
                n.componentDidUpdate = function() {
                    var e = n.state.components
                      , t = new d(e[0].settings)
                      , o = Object(f.o)(t, n.props.consentLanguage, e[0]).toLowerCase();
                    o !== document.documentElement.lang && (document.documentElement.lang = o)
                }
                ,
                n.handleFirstTab = function(e) {
                    9 === e.keyCode && (document.body.classList.add("user-is-tabbing"),
                    window.removeEventListener("keydown", n.handleFirstTab))
                }
                ,
                n.updateWindowDimensions = function() {
                    if (!n.state.loading && ("top" === n.state.type || "bottom" === n.state.type || "inline" === n.state.type)) {
                        var e = new d((n.state.components ? n.state.components[0] : {}).settings || {});
                        window.parent.postMessage({
                            name: "sp.resizeMessage",
                            type: n.state.type,
                            height: n.noticeRef ? n.noticeRef.clientHeight + 2 * (e.border.borderWidth || 0) : 0,
                            heightSettings: e.height,
                            showVeil: e.showVeil,
                            messageId: n.props.messageId
                        }, "*")
                    }
                    n.setState({
                        width: window.innerWidth || n.state.width,
                        height: window.innerHeight || n.state.height
                    })
                }
                ,
                n.makeChoice = function(e) {
                    var t = e.choiceId
                      , o = e.consentLanguage
                      , r = e.choiceData;
                    if (!0 === e.firstLayerSE)
                        return n.saveAndExit(o);
                    var i = n.state.choices.find((function(e) {
                        return e.button_text === t
                    }
                    ))
                      , s = n.state.components ? n.state.components[0] : {};
                    i || (i = n.state.choices.find((function(e) {
                        return 15 === e.type
                    }
                    )));
                    var c = n.state.actions.concat(9 === i.type ? {
                        type: "choice",
                        data: a({}, i, {
                            customAction: r.js_fn_name
                        })
                    } : {
                        type: "choice",
                        data: i
                    });
                    n.setState({
                        actions: c
                    }, (function() {
                        i.type && (window.parent.postMessage({
                            name: "sp.hideMessage",
                            actions: c,
                            settings: s.settings || {},
                            consentLanguage: o,
                            messageId: n.props.messageId
                        }, "*"),
                        n.setState({
                            actions: []
                        }))
                    }
                    ))
                }
                ,
                n.saveAndExit = function(e) {
                    return new Promise((function(t, o) {
                        return Promise.resolve(fetch(n.props.cmpv2Origin + "/consent/v3/" + n.state.siteId + "/li-only")).then((function(r) {
                            try {
                                return Promise.resolve(r.json()).then((function(r) {
                                    try {
                                        return window.parent.postMessage({
                                            name: "sp.hideMessage",
                                            actionType: b.o.SAVE_AND_EXIT,
                                            messageId: n.props.messageId,
                                            fromPM: !0,
                                            payload: a({
                                                lan: e
                                            }, r)
                                        }, "*"),
                                        t()
                                    } catch (e) {
                                        return o(e)
                                    }
                                }
                                ), o)
                            } catch (e) {
                                return o(e)
                            }
                        }
                        ), o)
                    }
                    ))
                }
                ,
                n.makeCategoryChoice = function(e) {
                    window.parent.postMessage({
                        name: "sp.hideMessage",
                        fromPM: !0,
                        actionType: "SE",
                        consentLanguage: e,
                        messageId: n.props.messageId,
                        payload: {
                            lang: e,
                            categories: n.state.stacks.map((function(e) {
                                return {
                                    _id: e._id,
                                    consent: "CUSTOM" !== e.type || Boolean(e.consent),
                                    legInt: "CUSTOM" !== e.type || Boolean(e.legInt)
                                }
                            }
                            ))
                        }
                    }, "*")
                }
                ,
                n.dismissNotice = function() {
                    n.makeChoice({
                        choiceId: "Dismiss"
                    })
                }
                ,
                n.handleMessages = function(e) {
                    var t = e.data;
                    if ("sp.choiceAction" === t.name && t.type) {
                        var o = n.state.choices.find((function(e) {
                            return e.type === t.type
                        }
                        ));
                        o && window.parent.postMessage({
                            name: "sp.hideMessage",
                            actions: [{
                                type: "choice",
                                data: o
                            }],
                            settings: (n.state.components ? n.state.components[0] : {}).settings || {},
                            messageId: n.props.messageId
                        }, "*")
                    }
                }
                ,
                n.loadPreloadedMsg = function(e) {
                    var t = e.data;
                    if ((t.fromNativeSDK || !(b.v.indexOf(e.origin) > -1) || "localhost" === window.location.host) && "sp.loadMessage" === t.name) {
                        var o = t.message_json
                          , r = o.message_json_string
                          , i = o.signature;
                        if (!Object(f.F)(r, i))
                            throw new Error("Invalid signature: " + JSON.stringify(i));
                        t.message_json = t.message_json.message_json_string;
                        new Promise((function(e, o) {
                            function i() {
                                return e()
                            }
                            var s;
                            return r.includes("$$!VC-") ? Promise.resolve(fetch(n.props.cmpv2Origin + "/vendor-list/categories?siteId=" + t.site_id, {
                                insecure: !0
                            })).then(function(e) {
                                try {
                                    return Promise.resolve(e.json()).then(function(e) {
                                        try {
                                            return n.loadMessage(a({}, t, {
                                                vendorCount: {
                                                    iab: (s = e).iabVendorCount,
                                                    all: s.allVendorCount
                                                }
                                            })),
                                            i.call(this)
                                        } catch (e) {
                                            return o(e)
                                        }
                                    }
                                    .bind(this), o)
                                } catch (e) {
                                    return o(e)
                                }
                            }
                            .bind(this), o) : (n.loadMessage(t),
                            i.call(this))
                        }
                        ))
                    }
                }
                ,
                n.handleDev = function(e) {
                    if (Object(f.u)(e) && e.data && "string" == typeof e.data) {
                        var t = JSON.parse(e.data);
                        t.components[0].css && Object(f.a)(t.components[0].css),
                        n.state.vendorCount.all || fetch(n.props.cmpv2Origin + "/vendor-list/categories?siteId=" + t.siteId, {
                            insecure: !0
                        }).then((function(e) {
                            return e.json()
                        }
                        )).then((function(e) {
                            n.setState({
                                vendorCount: {
                                    iab: e.iabVendorCount,
                                    all: e.allVendorCount
                                }
                            })
                        }
                        )),
                        n.setState({
                            devOpts: t.devOpts || {},
                            components: t.components,
                            current: t.current,
                            siteId: t.siteId,
                            highlight: t.highlight
                        })
                    }
                }
                ,
                n.noticeSetCurrent = function(e, t) {
                    var o = t.target === t.currentTarget;
                    t.currentTarget.className.includes("text") && (o = !0),
                    t.currentTarget.className.includes("message-stacks") && (o = !0),
                    o && window.parent.postMessage({
                        action: "dev.setCurrent",
                        newCurrent: e,
                        messageId: n.props.messageId
                    }, "*")
                }
                ,
                n.updateStacks = function(e) {
                    return n.setState({
                        stacks: e
                    })
                }
                ,
                n.doAction = function(e) {
                    return window.parent.postMessage({
                        action: e
                    }, "*")
                }
                ,
                n.state = {
                    choices: [],
                    components: t.messageId ? [{}] : g,
                    stacks: null,
                    siteId: null,
                    current: [0],
                    loading: !0,
                    actions: [],
                    width: 0,
                    height: 0,
                    devOpts: {
                        hideRowColumnBorder: !1
                    },
                    highlight: null,
                    stacksLanguage: null,
                    shown: !1,
                    vendorCount: {
                        all: null,
                        iab: null
                    }
                },
                n
            }
            var n, o;
            o = e,
            (n = t).prototype = Object.create(o.prototype),
            n.prototype.constructor = n,
            s(n, o);
            var r = t.prototype;
            return r.loadMessage = function(e) {
                var t = this;
                try {
                    var n = "string" == typeof e.message_json ? JSON.parse(e.message_json) : e.message_json
                      , o = Array.isArray(n) ? n : [n]
                      , r = Promise.resolve();
                    o[0].css && (r = Object(f.a)(o[0].css)),
                    this.setState({
                        components: o,
                        choices: e.message_choice || [],
                        type: o[0].settings.type,
                        siteId: e.site_id || null,
                        stacks: e.categories || null,
                        stacksLanguage: e.language ? e.language.toUpperCase() : null,
                        loading: !1,
                        height: e.windowHeight || 0,
                        width: e.windowWidth || 0,
                        vendorCount: e.vendorCount
                    }, (function() {
                        window.addEventListener("message", t.handleMessages, !1),
                        r.then((function() {
                            window.parent.postMessage({
                                name: "sp.showMessage",
                                messageId: t.props.messageId,
                                actions: [],
                                settings: o[0].settings,
                                iframeTitle: Object(f.n)(o[0].settings, t.props.consentLanguage, o[0])
                            }, "*"),
                            t.updateWindowDimensions(),
                            t.setState({
                                shown: !0
                            })
                        }
                        )),
                        t.setState({
                            actions: []
                        })
                    }
                    ))
                } catch (e) {
                    throw Error("Could not parse message data: " + e)
                }
            }
            ,
            r.componentWillUnmount = function() {
                window.removeEventListener("message", this.handleDev),
                window.removeEventListener("message", this.handleMessages),
                window.removeEventListener("message", this.loadPreloadedMsg),
                window.removeEventListener("resize", this.updateWindowDimensions)
            }
            ,
            r.render = function() {
                var e = this
                  , t = this.state.components ? this.state.components[0] : {}
                  , n = t.children || []
                  , o = t.settings;
                Object(f.z)();
                var r = new d(t.settings || {})
                  , i = this.props.dev ? "message message-dev" : "message"
                  , s = a({}, r.padding, {}, r.border)
                  , l = a({}, r.closeFont)
                  , u = {};
                s.background = r.background;
                var g = r.padding
                  , b = g.paddingTop
                  , v = g.paddingBottom
                  , y = g.paddingLeft
                  , O = g.paddingRight;
                s.width = "auto" === r.width.type ? "auto" : r.width.value + r.width.type,
                s.height = "auto" === r.height.type ? "auto" : r.height.value + r.height.type,
                "%" === r.height.type && (s.height = "calc(" + r.height.value + "% - " + (b + v) + "px"),
                r.showVeil || "bottom" !== r.type || "%" !== r.height.type || this.props.dev || (s.height = "100%"),
                "%" !== r.width.type || "top" !== r.type && "bottom" !== r.type || (s.width = "calc(" + r.width.value + "% - " + (y + O) + "px"),
                r.showClose ? ("left" === r.closeAlign ? (l.right = "auto",
                l.left = "20px",
                l.textAlign = "left") : (l.left = "auto",
                l.right = "20px",
                l.textAlign = "right"),
                l.zIndex = 2147483646) : l.display = "none",
                u.display = r.showVeil ? "flex" : "none",
                u.background = r.veilColor,
                u.opacity = r.veilOpacity;
                var j = this.props.tiny || this.props.mini
                  , C = this.props.full
                  , x = "top" === r.type || "bottom" === r.type
                  , w = this.props.mini ? .4 : this.props.full ? 1 : .2;
                (j && (s.transform = "scale(" + w + ") translateX(-50%) translateY(-50%)",
                x && (s.transform = "scale(" + w + ") translateX(-50%)"),
                s.transformOrigin = "bottom" === r.type ? "left bottom" : "left top",
                i += " message-mini"),
                C && (i += " message-full"),
                !j || !x && "px" === r.width.type || this.props.full) || (s.width = 1 / w * (this.props.mini ? 364 : 160) * (100 / (x || "auto" === r.width.type ? 100 : r.width.value)) - (y + O) + "px");
                "modal" === r.type && (i += " type-modal"),
                "top" === r.type && (i += " type-top"),
                "bottom" === r.type && (i += " type-bottom"),
                "bottom" !== r.type || o.border || (i += " no-border");
                var k, P, _ = {
                    highlight: this.state.highlight,
                    current: JSON.stringify(this.state.current || [0]),
                    opts: this.state.devOpts,
                    add: function() {
                        return e.doAction("dev.add")
                    },
                    templates: function() {
                        return e.doAction("dev.templates")
                    },
                    hover: {
                        onClick: function(t) {
                            t.preventDefault();
                            var n = t.target && t.target.getAttribute("path") ? JSON.parse(t.target.getAttribute("path")) : null;
                            if (n)
                                e.noticeSetCurrent(n, t);
                            else if (!n && t.currentTarget && (t.currentTarget.className.includes("text") || t.currentTarget.className.includes("message-stacks"))) {
                                var o = t.currentTarget && t.currentTarget.getAttribute("path") ? JSON.parse(t.currentTarget.getAttribute("path")) : null;
                                o && e.noticeSetCurrent(o, t)
                            }
                        },
                        onMouseOver: function(e) {
                            e.preventDefault();
                            var t = e.target;
                            e.currentTarget.className.includes("text") && (t = e.currentTarget),
                            e.currentTarget.className.includes("message-stacks") && (t = e.currentTarget),
                            t.className.includes("message-component") && (t.id = "on-hover")
                        },
                        onMouseOut: function(e) {
                            e.preventDefault();
                            var t = e.target;
                            e.currentTarget.className.includes("text") && (t = e.currentTarget),
                            e.currentTarget.className.includes("message-stacks") && (t = e.currentTarget),
                            t.id = "no-hover"
                        }
                    }
                };
                this.props.dev && (k = P = r.previewLanguage || r.defaultLanguage);
                var L;
                k = r.useBrowserDefault ? Object(f.j)() : this.props.consentLanguage || r.defaultLanguage;
                var T = Object(f.t)(k, r, [t]);
                L = this.state.stacksLanguage !== (k = T ? k : r.language || r.defaultLanguage || "EN");
                var S = Object(f.b)(t.handle)
                  , N = Object(c.h)("div", {
                    id: "notice",
                    ref: function(t) {
                        return e.noticeRef = t
                    },
                    className: i,
                    style: s
                }, Object(c.h)("div", {
                    style: l
                }, Object(c.h)("span", {
                    tabIndex: "0",
                    className: "message-stacksclose",
                    onClick: this.dismissNotice
                }, "X")), Object(p.a)({
                    path: [0],
                    dev: this.props.dev ? _ : null,
                    components: n,
                    siteId: this.state.siteId,
                    message: r,
                    makeChoice: this.makeChoice,
                    updateStacks: this.updateStacks,
                    consentUUID: this.props.consentUUID,
                    cmpv2Origin: this.props.cmpv2Origin,
                    language: k,
                    previewLanguage: P,
                    width: this.state.width,
                    preview: j,
                    stacksData: this.state.stacks,
                    preloadMsg: this.props.preloadMsg,
                    shown: this.state.shown,
                    setVendorCount: function(t, n) {
                        return e.setState({
                            vendorCount: {
                                all: t,
                                iab: n
                            }
                        })
                    },
                    vendorCount: this.state.vendorCount
                }))
                  , I = Object(c.h)("div", {
                    id: "empty-message",
                    role: "presentation"
                }, Object(c.h)("button", {
                    onClick: this.props.dev ? _.add : null,
                    className: "empty-add"
                }, "+ Add Components"), Object(c.h)("div", {
                    className: "empty-or"
                }, "or"), Object(c.h)("button", {
                    className: "empty-template",
                    onClick: this.props.dev ? _.templates : null
                }, "Start from Template"))
                  , A = Object(c.h)("div", {
                    className: "message-container" + S
                }, r.useSafeArea ? "" : Object(c.h)("div", {
                    className: "message-overlay",
                    style: u
                }), n.length ? N : I);
                return A = r.useSafeArea ? Object(c.h)(h.a, {
                    safeBottom: "bottom" !== r.type,
                    veil: Object(c.h)("div", {
                        className: "message-overlay",
                        style: u
                    })
                }, A) : A,
                this.state.loading ? Object(c.h)("div", {
                    className: "loader-container"
                }, Object(c.h)("div", {
                    className: "loader"
                })) : Object(c.h)(m.a.Provider, {
                    value: r.language || r.defaultLanguage || this.props.dev ? r.previewLanguage : ""
                }, Object(c.h)(m.i.Provider, {
                    value: L
                }, this.props.mini || this.props.tiny || this.props.full ? N : A))
            }
            ,
            t
        }(l.default.Component);
        t.default = Object(u.a)(v)
    },
    YSmr: function(e, t, n) {
        "use strict";
        var o;
        n.d(t, "i", (function() {
            return a
        }
        )),
        n.d(t, "a", (function() {
            return i
        }
        )),
        n.d(t, "c", (function() {
            return s
        }
        )),
        n.d(t, "l", (function() {
            return c
        }
        )),
        n.d(t, "m", (function() {
            return l
        }
        )),
        n.d(t, "j", (function() {
            return u
        }
        )),
        n.d(t, "e", (function() {
            return p
        }
        )),
        n.d(t, "f", (function() {
            return d
        }
        )),
        n.d(t, "p", (function() {
            return g
        }
        )),
        n.d(t, "A", (function() {
            return f
        }
        )),
        n.d(t, "q", (function() {
            return h
        }
        )),
        n.d(t, "z", (function() {
            return b
        }
        )),
        n.d(t, "y", (function() {
            return m
        }
        )),
        n.d(t, "n", (function() {
            return v
        }
        )),
        n.d(t, "g", (function() {
            return y
        }
        )),
        n.d(t, "h", (function() {
            return O
        }
        )),
        n.d(t, "t", (function() {
            return j
        }
        )),
        n.d(t, "r", (function() {
            return C
        }
        )),
        n.d(t, "v", (function() {
            return x
        }
        )),
        n.d(t, "s", (function() {
            return r
        }
        )),
        n.d(t, "o", (function() {
            return w
        }
        )),
        n.d(t, "u", (function() {
            return k
        }
        )),
        n.d(t, "w", (function() {
            return P
        }
        )),
        n.d(t, "k", (function() {
            return _
        }
        )),
        n.d(t, "x", (function() {
            return L
        }
        )),
        n.d(t, "b", (function() {
            return T
        }
        )),
        n.d(t, "d", (function() {
            return S
        }
        ));
        try {
            o = {
                MMS_ORIGIN: "https://cdn.privacy-mgmt.com/mms/v2",
                CCPA_ORIGIN: "https://ccpa-service.sp-prod.net",
                USNAT_ORIGIN: "https://cdn.privacy-mgmt.com/usnat",
                USNAT_ORIGIN_BUILDER: "https://prod-usp-bg-origin.sp-prod.net/usnat",
                CMPV2_ORIGIN: "https://cdn.privacy-mgmt.com/consent/tcfv2",
                PREFERENCES_ORIGIN: "https://cdn.privacy-mgmt.com/preferences",
                GLOBAL_CMP_ORIGIN: "https://cdn.privacy-mgmt.com/global-cmp",
                GLOBAL_CMP_ORIGIN_BUILDER: "https://cdn.privacy-mgmt.com/global-cmp",
                PRODUCTION: !0
            }
        } catch (e) {
            o = {
                PRODUCTION: !0,
                MMS_ORIGIN: "https://cdn.privacy-mgmt.com/mms/v2",
                CCPA_ORIGIN: "https://ccpa-service.sp-prod.net",
                CMPV2_ORIGIN: "https://cdn.privacy-mgmt.com/consent/tcfv2",
                USNAT_ORIGIN: "https://cdn.privacy-mgmt.com/usnat",
                USNAT_ORIGIN_BUILDER: "https://prod-usp-bg-origin.sp-prod.net/usnat",
                PREFERENCES_ORIGIN: "https://cdn.privacy-mgmt.com/preferences",
                GLOBAL_CMP_ORIGIN: "https://cdn.privacy-mgmt.com/global-cmp",
                GLOBAL_CMP_ORIGIN_BUILDER: "https://prod-usp-bg-origin.sp-prod.net/global-cmp"
            }
        }
        var r, a = o.MMS_ORIGIN, i = o.CCPA_ORIGIN, s = o.CMPV2_ORIGIN, c = o.USNAT_ORIGIN, l = o.USNAT_ORIGIN_BUILDER, u = o.PREFERENCES_ORIGIN, p = o.GLOBAL_CMP_ORIGIN, d = o.GLOBAL_CMP_ORIGIN_BUILDER, g = {
            DELETE: "delete-my-data",
            DSAR: "dsar"
        }, f = {
            FORM: "form",
            SUCCESS: "success",
            error: {
                VERIFICATION: "verification",
                MAX_REQUESTS: "max-requests",
                ACTIVE_REQUEST: "active-request"
            }
        }, h = {
            HOME: "home",
            ONE_TIME_CODE: "one-time-code",
            CODE_SUCCESS: "code-success",
            REQUEST_PENDING: "request-pending"
        }, b = {
            HOME: "home",
            CATEGORIES: "categories",
            VENDORS: "vendors",
            CARD_DETAILS: "card_details",
            PRIVACY_POLICY: "privacy_policy",
            CUSTOM_VIEW: "custom_view"
        }, m = {
            HOME: "home",
            VENDORS: "vendors",
            CATEGORIES: "categories",
            PRIVACY_POLICY: "privacy_policy",
            CARD_DETAILS: "card_details",
            CUSTOM_VIEW: "custom_view"
        }, v = "VERIFICATION_FAILURE", y = "MAX_REQUESTS_EXCEEDED", O = "MFA_CODE_FAILURE", j = [], C = {
            FIRST_NAME: "first-name",
            LAST_NAME: "last-name",
            EMAIL: "email",
            PHONE: "phone",
            SSN: "ssn",
            REQUEST_ID: "request-id",
            MFA: "mfa"
        }, x = ["https://notice.sp-prod.net", "https://notice.sp-stage.net"];
        try {
            document.createElement("input").type = "date",
            r = !1
        } catch (e) {
            r = !0
        }
        var w = {
            SAVE_AND_EXIT: 1,
            REJECT_ALL: 13,
            ACCEPT_ALL: 11,
            CANCEL: 2,
            DISMISS: 15,
            SHOW_ATT_MSG: 16,
            99: "CUSTOM_VIEW",
            100: "HOME",
            ACCEPT_LI_ONLY: 1
        }
          , k = {
            categories: [],
            specialPurposes: [],
            features: [],
            specialFeatures: [],
            vendors: []
        }
          , P = {
            HOME: "HomeView",
            CATEGORIES: "CategoriesView",
            VENDORS: "VendorsView",
            PRIVACY_POLICY: "PrivacyPolicyView",
            VENDOR_DETAILS: "VendorDetailsView",
            CATEGORY_DETAILS: "CategoryDetailsView",
            CUSTOM: "CustomView"
        }
          , _ = "p7/rFOqX+iUCa+u60ELvX2bo5E+KZFe4KwT28iurjEA="
          , L = ["https://portal.sp-stage.net", "https://preprod-portal.sourcepoint.com", "https://portal.sourcepoint.com", "https://gpp-portal.sp-stage.net"]
          , T = {
            0: "email",
            1: "sms",
            2: "whatsapp",
            3: "phone",
            4: "mail"
        }
          , S = "0000-0000-0000"
    },
    YkAe: function(e, t, n) {
        "use strict";
        function o(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, o)
            }
            return n
        }
        function r(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? o(Object(n), !0).forEach((function(t) {
                    a(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function a(e, t, n) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" != typeof e || !e)
                        return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var o = n.call(e, t || "default");
                        if ("object" != typeof o)
                            return o;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" == typeof t ? t : t + ""
            }(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function i(e, t) {
            return (i = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        n.d(t, "a", (function() {
            return p
        }
        ));
        var s = n("2mXy")
          , c = n("FdF9")
          , l = n("3/o8")
          , u = n("o1E3")
          , p = function(e) {
            function t() {
                for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++)
                    o[r] = arguments[r];
                return (t = e.call.apply(e, [this].concat(o)) || this).state = {
                    open: !1
                },
                t.toggleAccordion = function(e) {
                    if (void 0 !== e && !["stack-toggle", "opener", "expand"].some((function(t) {
                        return e.target.className.includes(t)
                    }
                    ))) {
                        t.setState({
                            open: !t.state.open
                        })
                    }
                }
                ,
                t
            }
            var n, o;
            o = e,
            (n = t).prototype = Object.create(o.prototype),
            n.prototype.constructor = n,
            i(n, o);
            var a = t.prototype;
            return a.shouldComponentUpdate = function(e, t) {
                var n = this.panel;
                n && t.open && setTimeout((function() {
                    n.style.maxHeight = n.scrollHeight + 1e3 + "px"
                }
                ), 100)
            }
            ,
            a.render = function() {
                var e = this
                  , t = this.props
                  , n = t.dev
                  , o = t.name
                  , a = t.accessName
                  , i = t.description
                  , p = t.content
                  , d = t.child
                  , g = t.value
                  , f = t.language
                  , h = t.titleContent
                  , b = t.vendors
                  , m = t.index
                  , v = t.key
                  , y = t.isFirstLayer
                  , O = t.disclosureOnly
                  , j = t.neutralPm
                  , C = t.convertToRem
                  , x = this.state.open
                  , w = this.props.settings || {}
                  , k = r({}, w.nameSpacing)
                  , P = r({}, w.panelSpacing, {}, w.panelFont)
                  , _ = Object(u.x)(Boolean(n), w, "toggleText", f)
                  , L = Object(u.x)(Boolean(n), w, "toggleOffText", f)
                  , T = i ? i.slice(3).slice(0, -4) : ""
                  , S = Math.floor(1e5 * Math.random() + 1);
                return Object(s.h)("div", {
                    className: "tcfv2-stack",
                    id: 0 === m ? "features-focus" : v,
                    title: a || "Accordion"
                }, Object(s.h)("div", {
                    className: "vendor" !== d || i ? "stack-row" : "stack-row no-expand",
                    style: {
                        position: "relative"
                    }
                }, Object(s.h)("button", {
                    className: (x ? "accordion active" : "accordion") + " focusable",
                    "aria-expanded": x ? "true" : "false",
                    style: k,
                    onClick: "vendor" !== d || i ? function(t) {
                        return e.toggleAccordion(t)
                    }
                    : null,
                    "aria-controls": S
                }, "vendor" !== d || i ? Object(s.h)("span", {
                    className: x ? "chevron up" : "chevron down"
                }) : null, x && !h ? Object(s.h)("b", null, o) : o, h || null), !y && !O && (j ? Object(s.h)(NeutralButtons, {
                    settings: w,
                    toggleCategory: this.props.toggle,
                    toggleStack: this.props.toggleStack,
                    vendors: b,
                    value: category,
                    enabled: category.isNegative ? !category.enabled : category.enabled,
                    child: d,
                    dev: n,
                    language: f
                }) : Object(s.h)(l.a, {
                    value: g,
                    checked: g.isNegative ? !g.enabled : g.enabled,
                    type: w.toggleType,
                    color: w.toggleColor,
                    colorActive: w.toggleActiveColor,
                    offColor: w.toggleOffColor,
                    offActiveColor: w.toggleOffActiveColor,
                    text: _,
                    offText: L,
                    toggle: this.props.toggle,
                    child: d,
                    vendors: g.vendors || [],
                    convertToRem: C
                }))), Object(s.h)("div", {
                    id: S,
                    style: {
                        display: x ? "block" : "none"
                    },
                    className: "panel"
                }, Object(s.h)("p", {
                    style: r({}, P)
                }, p && x ? c.default.cloneElement(p, {
                    accordionOpen: x
                }) : T)))
            }
            ,
            t
        }(c.Component)
    },
    "anj/": function(e, t, n) {
        e.exports = n.p + "a4e6bfc7a854c6ebc18a33b694e9dc37.svg"
    },
    cS3K: function(e, t, n) {
        "use strict";
        (function(e) {
            function o(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }
                    ))),
                    n.push.apply(n, o)
                }
                return n
            }
            function r(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? o(Object(n), !0).forEach((function(t) {
                        a(e, t, n[t])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }
            function a(e, t, n) {
                return (t = function(e) {
                    var t = function(e, t) {
                        if ("object" != typeof e || !e)
                            return e;
                        var n = e[Symbol.toPrimitive];
                        if (void 0 !== n) {
                            var o = n.call(e, t || "default");
                            if ("object" != typeof o)
                                return o;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === t ? String : Number)(e)
                    }(e, "string");
                    return "symbol" == typeof t ? t : t + ""
                }(t))in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n,
                e
            }
            function i(e, t) {
                return (i = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t,
                    e
                }
                )(e, t)
            }
            n.d(t, "a", (function() {
                return p
            }
            ));
            var s = n("2mXy")
              , c = n("FdF9")
              , l = n("BlOF")
              , u = n("o1E3")
              , p = function(t) {
                function n() {
                    for (var e, n = arguments.length, o = new Array(n), r = 0; r < n; r++)
                        o[r] = arguments[r];
                    return (e = t.call.apply(t, [this].concat(o)) || this).state = {
                        consentAll: !1,
                        liAll: !1,
                        discolsureAll: !1
                    },
                    e
                }
                var o, a;
                return a = t,
                (o = n).prototype = Object.create(a.prototype),
                o.prototype.constructor = o,
                i(o, a),
                n.prototype.render = function() {
                    var t = this.props
                      , n = t.settings
                      , o = t.language
                      , a = t.dev
                      , i = t.vendors
                      , c = t.category
                      , p = t.convertToRem
                      , d = r({}, this.props.settings)
                      , g = (Object(u.x)(Boolean(a), d, "privacyPolicyText", o),
                    r({}, d.privacyPolicyNameFont, {}, d.privacyPolicyNameSpacing))
                      , f = r({}, d.descriptionSpacing, {}, d.descriptionFont)
                      , h = r({}, d.categoriesVendorNameFont, {}, d.categoriesVendorNameSpacing)
                      , b = r({}, d.vendorTitleNameFont, {}, d.vendorTitleNameSpacing)
                      , m = p ? Object(u.c)(g) : g
                      , v = p ? Object(u.c)(f) : f
                      , y = p ? Object(u.c)(h) : h
                      , O = p ? Object(u.c)(b) : b;
                    return Object(s.h)("div", {
                        className: "category-container"
                    }, c.description ? Object(s.h)("div", {
                        className: "description",
                        style: v
                    }, c.description) : null, c.privacyPolicySectionLink ? this.props.createPrivacyPolicyDiv(c) : null, c.identificationList ? this.props.createIdentificationListDivForEachCat(c) : null, c.vendors.length > 0 && Object(s.h)(e, null, Object(s.h)("div", {
                        tabIndex: 0,
                        className: "vendors",
                        style: O
                    }, "Vendors (" + c.vendors.length + ")"), c.vendors.map((function(t, o) {
                        var r = i.find((function(e) {
                            return e._id === t
                        }
                        ));
                        return r ? Object(s.h)("div", {
                            key: o,
                            className: "vendor-item"
                        }, Object(s.h)("div", {
                            className: "vendor-name",
                            style: y
                        }, r.name), r.policyUrl ? Object(s.h)(e, null, Object(s.h)("span", {
                            style: m
                        }, "Privacy policy:"), Object(s.h)(l.a, {
                            vendor: r,
                            arrowIconColor: n.arrowIconColor,
                            convertToRem: p
                        })) : null, r.description ? Object(s.h)("div", {
                            className: "vendor-description"
                        }, r.description) : null) : null
                    }
                    ))))
                }
                ,
                n
            }(c.Component)
        }
        ).call(this, n("2mXy").Fragment)
    },
    d1XD: function(e, t, n) {
        "use strict";
        (function(e, o) {
            var r = n("FdF9");
            t.a = function(t) {
                var n = t.dataCategory
                  , a = n.name
                  , i = n.description
                  , s = t.first
                  , c = t.last
                  , l = Object(r.useState)(!1)
                  , u = l[0]
                  , p = l[1];
                return e(o, null, e("button", {
                    className: "accord-button",
                    style: {
                        all: "unset",
                        cursor: "pointer",
                        padding: 10,
                        borderTop: s ? "1px solid" : null,
                        borderBottom: "1px solid",
                        position: "relative"
                    },
                    onClick: function() {
                        return p(!u)
                    }
                }, a, e("span", {
                    class: "chevron " + (u ? "up" : "down"),
                    style: {
                        position: "absolute",
                        right: "1%",
                        top: "35%"
                    }
                })), u && e("div", {
                    style: {
                        padding: 15,
                        borderBottom: c ? null : "1px solid"
                    }
                }, e("p", {
                    tabindex: "0"
                }, i)))
            }
        }
        ).call(this, n("2mXy").h, n("2mXy").Fragment)
    },
    d7zh: function(e, t, n) {
        "use strict";
        (function(e) {
            function o(e, t) {
                return (o = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t,
                    e
                }
                )(e, t)
            }
            function r(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }
                    ))),
                    n.push.apply(n, o)
                }
                return n
            }
            function a(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? r(Object(n), !0).forEach((function(t) {
                        i(e, t, n[t])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }
            function i(e, t, n) {
                return (t = function(e) {
                    var t = function(e, t) {
                        if ("object" != typeof e || !e)
                            return e;
                        var n = e[Symbol.toPrimitive];
                        if (void 0 !== n) {
                            var o = n.call(e, t || "default");
                            if ("object" != typeof o)
                                return o;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === t ? String : Number)(e)
                    }(e, "string");
                    return "symbol" == typeof t ? t : t + ""
                }(t))in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n,
                e
            }
            var s = n("2mXy")
              , c = n("FdF9")
              , l = n("H6Cw")
              , u = n("k/EF")
              , p = n("NLdj")
              , d = n("4Q1r")
              , g = n("j1Q3")
              , f = n("o1E3")
              , h = n("KOA+")
              , b = n("gNPm")
              , m = function(e) {
                var t = e.stack
                  , n = e.selected
                  , o = e.settings
                  , r = e.togglePurposeOrFeature
                  , i = e.toggleText
                  , c = e.toggleOffText
                  , l = e.force
                  , u = e.updateMe
                  , p = e.accordionOpen
                  , g = e.usePurModel
                  , f = e.language
                  , b = e.vendors;
                return Object(s.h)("div", {
                    className: "purpose-content"
                }, Object(s.h)("p", {
                    tabindex: "0",
                    style: a({}, o.panelFont),
                    className: "stack-description",
                    dangerouslySetInnerHTML: {
                        __html: Object(h.a)({
                            html: t.description
                        })
                    }
                }), t.categories.map((function(e) {
                    return Object(s.h)(d.a, {
                        key: e._id,
                        purpose: e,
                        selected: n,
                        settings: o,
                        togglePurposeOrFeature: r,
                        toggleText: i,
                        toggleOffText: c,
                        force: l,
                        updateMe: u,
                        parentAccordionOpen: p,
                        usePurModel: g,
                        language: f,
                        vendors: b
                    })
                }
                )))
            }
              , v = function(t) {
                function n() {
                    for (var e, n = arguments.length, o = new Array(n), r = 0; r < n; r++)
                        o[r] = arguments[r];
                    return (e = t.call.apply(t, [this].concat(o)) || this).state = {
                        selected: e.props.startWithLiToggled ? "li" : "consent",
                        forceUpdate: !0
                    },
                    e.force = function() {
                        return e.setState({
                            forceUpdate: !e.state.forceUpdate
                        })
                    }
                    ,
                    e
                }
                var r, a;
                return a = t,
                (r = n).prototype = Object.create(a.prototype),
                r.prototype.constructor = r,
                o(r, a),
                n.prototype.render = function() {
                    var t = this
                      , n = this.props
                      , o = n.stacks
                      , r = n.useStacks
                      , a = n.consentOnlyStacks
                      , i = n.purposes
                      , c = n.specialPurposes
                      , d = n.settings
                      , h = n.language
                      , b = n.dev
                      , v = n.usePurModel
                      , y = n.vendors
                      , O = this.state.selected
                      , j = Object(f.x)(Boolean(b), d, "purposesText", h)
                      , C = Object(f.x)(Boolean(b), d, "purposeInfo", h)
                      , x = Object(f.x)(Boolean(b), d, "customPurposesText", h)
                      , w = Object(f.x)(Boolean(b), d, "specialPurposesText", h)
                      , k = Object(f.x)(Boolean(b), d, "specialPurposesInfo", h)
                      , P = Object(f.x)(Boolean(b), d, "toggleText", h)
                      , _ = Object(f.x)(Boolean(b), d, "toggleOffText", h)
                      , L = Object(f.x)(Boolean(b), d, "consentText", h)
                      , T = Object(f.x)(Boolean(b), d, "liText", h)
                      , S = Object(f.x)(Boolean(b), d, "liInfo", h)
                      , N = Object(f.x)(Boolean(b), d, "customPurposesLetter", h)
                      , I = "consent" === O && d.specialOnly
                      , A = o.filter((function(e) {
                        return e.childCategories.length > 0
                    }
                    )).map((function(e) {
                        return e.categories = e.childCategories.map((function(e) {
                            return i.find((function(t) {
                                return t._id === e
                            }
                            ))
                        }
                        )).filter((function(e) {
                            return void 0 !== e && (!("consent" === O && e.requiringConsentVendors.length <= 0) && !("li" === O && e.legIntVendors.length <= 0))
                        }
                        )),
                        e
                    }
                    ))
                      , B = [];
                    A.forEach((function(e) {
                        var t = e.categories.map((function(e) {
                            return e._id
                        }
                        ));
                        B = [].concat(B, t)
                    }
                    ));
                    var D = []
                      , E = null
                      , F = ("li" !== O || !a) && r
                      , V = i.filter((function(e) {
                        return !0 === e.disclosureOnly ? (D.push(e),
                        !1) : !("consent" === O && e.requiringConsentVendors.length <= 0) && (!("li" === O && e.legIntVendors.length <= 0) && (F && 1 === e.iabId ? (E = e,
                        !1) : !F || !B.find((function(t) {
                            return t === e._id
                        }
                        ))))
                    }
                    ))
                      , M = i.some((function(e) {
                        return e.legIntVendors && e.legIntVendors.length
                    }
                    ));
                    return Object(s.h)("div", {
                        className: "pm-purposes"
                    }, M ? Object(s.h)("div", {
                        className: "pm-type-toggle"
                    }, Object(s.h)("div", {
                        id: "purposes-focus",
                        role: "tab",
                        "aria-selected": "li" !== O,
                        tabindex: "0",
                        className: "focusable",
                        title: L,
                        onClick: function() {
                            return t.setState({
                                selected: "consent"
                            })
                        },
                        onKeyDown: function(e) {
                            return Object(f.s)(e.key) && t.setState({
                                selected: "consent"
                            })
                        }
                    }, L), Object(s.h)("div", {
                        role: "tab",
                        "aria-selected": "li" === O,
                        tabindex: "0",
                        title: T,
                        onClick: function() {
                            return t.setState({
                                selected: "li"
                            })
                        },
                        onKeyDown: function(e) {
                            return Object(f.s)(e.key) && t.setState({
                                selected: "li"
                            })
                        }
                    }, T), Object(s.h)("span", {
                        className: "li" === O ? "selected li" : "selected consent"
                    })) : null, Object(s.h)("h2", {
                        tabindex: "0",
                        className: "info-title"
                    }, j), Object(s.h)("p", {
                        tabindex: "0",
                        className: "pm-sub-p"
                    }, "consent" === O ? C : S), Object(s.h)("div", {
                        className: "legend"
                    }, Object(s.h)("span", {
                        tabIndex: "0",
                        className: "legend-key"
                    }, N), Object(s.h)("h2", {
                        class: "custom-header"
                    }, x)), !0 === F && Object(s.h)(e, null, null !== E && Object(s.h)(l.a, {
                        key: "purpose-" + E._id,
                        settings: d,
                        name: Object(s.h)("span", null, E.name, "IAB_PURPOSE" !== E.type && Object(s.h)("span", {
                            tabIndex: "0",
                            className: "legend-key inline"
                        }, N)),
                        accessName: E.name,
                        description: E.description,
                        child: "purposes",
                        language: h,
                        value: E,
                        selected: O,
                        vendors: "consent" === O ? E.requiringConsentVendors : E.legIntVendors,
                        content: Object(s.h)(u.a, {
                            dev: b,
                            selected: O,
                            purpose: E,
                            language: h,
                            settings: d,
                            force: this.force,
                            isCustom: "CUSTOM" === E.type,
                            vendors: y
                        }),
                        toggle: this.props.togglePurposeOrFeature,
                        updateMe: this.state.forceUpdate,
                        dev: b,
                        usePurModel: v && "li" !== this.state.selected
                    }), A.length > 0 && A.map((function(e) {
                        return e.categories.length > 0 ? Object(s.h)(l.a, {
                            key: "stack-" + e._id,
                            settings: d,
                            accessName: e.name,
                            child: "purposes",
                            language: h,
                            value: e,
                            titleContent: Object(s.h)(g.a, {
                                stack: e,
                                selected: O,
                                language: h,
                                settings: d,
                                dev: b,
                                usePurModel: v
                            }),
                            content: Object(s.h)(m, {
                                stack: e,
                                selected: O,
                                settings: d,
                                togglePurposeOrFeature: t.props.togglePurposeOrFeature,
                                toggleText: P,
                                toggleOffText: _,
                                language: h,
                                force: t.force,
                                updateMe: t.state.forceUpdate,
                                dev: b,
                                isCustom: "CUSTOM" === e.type,
                                usePurModel: v && "li" !== t.state.selected,
                                vendors: y
                            }),
                            toggle: !1,
                            force: t.force,
                            updateMe: t.state.forceUpdate,
                            dev: b,
                            usePurModel: v && "li" !== t.state.selected,
                            stack: e,
                            selected: O,
                            toggleStack: t.props.toggleStack
                        }) : null
                    }
                    ))), V.map((function(e) {
                        return Object(s.h)(l.a, {
                            key: "purpose-" + e._id,
                            settings: d,
                            name: Object(s.h)("span", null, e.name, "IAB_PURPOSE" !== e.type && Object(s.h)("span", {
                                tabIndex: "0",
                                className: "legend-key inline"
                            }, N)),
                            accessName: e.name,
                            description: e.description,
                            child: "purposes",
                            language: h,
                            value: e,
                            selected: O,
                            vendors: "consent" === O ? e.requiringConsentVendors : e.legIntVendors,
                            content: Object(s.h)(u.a, {
                                selected: O,
                                purpose: e,
                                language: h,
                                settings: d,
                                force: t.force,
                                dev: b,
                                isCustom: "CUSTOM" === e.type,
                                vendors: y
                            }),
                            toggle: t.props.togglePurposeOrFeature,
                            updateMe: t.state.forceUpdate,
                            dev: b,
                            usePurModel: v && "li" !== t.state.selected
                        })
                    }
                    )), (c.length > 0 || D.length > 0) && !I && Object(s.h)("h2", {
                        className: "info-title"
                    }, w), (c.length > 0 || D.length > 0) && !I && Object(s.h)("p", {
                        className: "pm-sub-p"
                    }, k), c.length > 0 && !I && c.map((function(e) {
                        return Object(s.h)(l.a, {
                            key: "special-purpose-" + e._id,
                            settings: d,
                            name: e.name,
                            accessName: e.name,
                            child: "specialPurposes",
                            language: h,
                            value: e,
                            selected: O,
                            description: e.description,
                            content: Object(s.h)(p.a, {
                                purpose: e,
                                language: h,
                                settings: d,
                                force: t.force,
                                dev: b,
                                isCustom: "CUSTOM" === e.type,
                                vendors: y
                            }),
                            updateMe: t.state.forceUpdate,
                            dev: b,
                            usePurModel: v && "li" !== t.state.selected
                        })
                    }
                    )), D.length > 0 && D.map((function(e) {
                        return Object(s.h)(l.a, {
                            key: "purpose-" + e._id,
                            settings: d,
                            name: Object(s.h)("span", null, e.name, Object(s.h)("span", {
                                tabIndex: "0",
                                className: "legend-key inline"
                            }, N)),
                            accessName: e.name,
                            description: e.description,
                            child: "purposes",
                            language: h,
                            value: e,
                            selected: O,
                            content: Object(s.h)(u.a, {
                                disclosure: !0,
                                selected: O,
                                purpose: e,
                                language: h,
                                settings: d,
                                force: t.force,
                                dev: b,
                                isCustom: "CUSTOM" === e.type,
                                vendors: y
                            }),
                            toggle: !1,
                            updateMe: t.state.forceUpdate,
                            dev: b,
                            usePurModel: v && "li" !== t.state.selected
                        })
                    }
                    )))
                }
                ,
                n
            }(c.Component);
            t.a = Object(b.a)(v)
        }
        ).call(this, n("2mXy").Fragment)
    },
    dxvN: function(e, t, n) {
        "use strict";
        function o(e, t) {
            return (o = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        n.d(t, "a", (function() {
            return g
        }
        ));
        var r = n("RSKk")
          , a = n("2mXy")
          , i = n("FdF9")
          , s = n("I+oa")
          , c = n.n(s)
          , l = n("Tfwc")
          , u = n("t0Ov")
          , p = n("o1E3")
          , d = n("YSmr")
          , g = function(e) {
            function t() {
                for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++)
                    o[r] = arguments[r];
                return (t = e.call.apply(e, [this].concat(o)) || this).state = {
                    filter: ""
                },
                t.updateFilter = function(e) {
                    return t.setState({
                        filter: e.target.value
                    })
                }
                ,
                t
            }
            var n, i;
            return i = e,
            (n = t).prototype = Object.create(i.prototype),
            n.prototype.constructor = n,
            o(n, i),
            t.prototype.render = function() {
                var e = this
                  , t = this.props
                  , n = t.settings
                  , o = t.language
                  , i = t.dev
                  , s = t.toggleVendor
                  , g = t.usePurModel
                  , f = t.idfaStatus
                  , h = t.neutralPm
                  , b = this.state.filter
                  , m = t.vendors.filter((function(e) {
                    return "" === b || e.name.toLowerCase().indexOf(b.toLowerCase()) >= 0
                }
                ))
                  , v = Object(p.x)(Boolean(i), n, "searchText", o)
                  , y = Object(p.x)(Boolean(i), n, "otherText", o)
                  , O = Object(p.x)(Boolean(i), n, "otherLetter", o)
                  , j = Object(p.x)(Boolean(i), n, "appleDataBrokerText", o)
                  , C = Object(p.x)(Boolean(i), n, "appleDataBrokerLetter", o)
                  , x = Boolean(m.some((function(e) {
                    return e.isApple
                }
                )))
                  , w = "unknown" === f || "denied" === f
                  , k = Object(p.x)(Boolean(i), n, "customVendorLabel1Text", o)
                  , P = Object(p.x)(Boolean(i), n, "customVendorLabel2Text", o)
                  , _ = Object(p.x)(Boolean(i), n, "customVendorLabel3Text", o)
                  , L = Object(p.x)(Boolean(i), n, "customVendorLabel1Letter", o)
                  , T = Object(p.x)(Boolean(i), n, "customVendorLabel2Letter", o)
                  , S = Object(p.x)(Boolean(i), n, "customVendorLabel3Letter", o)
                  , N = Boolean(m.some((function(e) {
                    return e.isCustomVendorLabel1
                }
                )))
                  , I = Boolean(m.some((function(e) {
                    return e.isCustomVendorLabel2
                }
                )))
                  , A = Boolean(m.some((function(e) {
                    return e.isCustomVendorLabel3
                }
                )));
                return Object(a.h)("div", {
                    className: "pm-features"
                }, Object(a.h)("div", {
                    className: "filter-container"
                }, Object(a.h)("img", {
                    style: Object(r.a)(n.magnifyingGlassIconColor),
                    src: c.a,
                    alt: ""
                }), Object(a.h)("label", {
                    style: {
                        display: "none"
                    },
                    for: "search"
                }, v), Object(a.h)("input", {
                    id: "search",
                    className: "vendor-filter",
                    placeholder: v + "...",
                    name: "filter",
                    value: b,
                    onChange: this.updateFilter
                })), Object(a.h)("div", {
                    className: "legend"
                }, Object(a.h)("span", {
                    tabIndex: "0",
                    className: "legend-key"
                }, O), Object(a.h)("h2", {
                    class: "custom-header"
                }, y), x && Object(a.h)("span", {
                    tabIndex: "0",
                    className: "legend-key apple-broker"
                }, C), x && j, N && Object(a.h)("span", {
                    tabIndex: "0",
                    className: "legend-key is-custom-vendor-label-1"
                }, L), N && k, I && Object(a.h)("span", {
                    className: "legend-key is-custom-vendor-label-2",
                    "aria-hidden": !0
                }, T), I && P, A && Object(a.h)("span", {
                    className: "legend-key is-custom-vendor-label-3",
                    "aria-hidden": !0
                }, S), A && _), m.map((function(t) {
                    var r = !(t.disclosureOnlyCategories.length > 0 && t.legIntCategories <= 0 && t.consentCategories <= 0)
                      , c = (t.iabSpecialPurposes.length > 0 || t.iabFeatures.length > 0) && t.consentCategories <= 0 && t.legIntCategories.length <= 0 && t.iabSpecialFeatures <= 0
                      , p = t.isApple
                      , f = t.isCustomVendorLabel1
                      , b = t.isCustomVendorLabel2
                      , m = t.isCustomVendorLabel3
                      , v = p && w;
                    return Object(a.h)(l.a, {
                        key: "vendor-" + t.vendorId,
                        settings: e.props.settings,
                        name: Object(a.h)("span", null, Object(a.h)("span", {
                            role: "text"
                        }, t.name), "IAB" !== t.vendorType && Object(a.h)("span", {
                            tabIndex: "0",
                            className: "legend-key inline"
                        }, O)),
                        isCustom: "IAB" !== t.vendorType,
                        locked: d.t.includes(t.iabId) || v,
                        description: t.name,
                        child: "vendors",
                        language: o,
                        value: t,
                        content: Object(a.h)(u.a, {
                            dev: i,
                            vendor: t,
                            settings: n,
                            language: o,
                            toggleVendor: s,
                            usePurModel: g,
                            hideAppleToggle: v,
                            neutralPm: h
                        }),
                        toggle: r && !c ? e.props.toggleVendor : null,
                        isApple: p,
                        isCustomVendorLabel1: f,
                        isCustomVendorLabel2: b,
                        isCustomVendorLabel3: m,
                        appleDataBrokerLetter: C,
                        customVendorLabel1Letter: L,
                        customVendorLabel2Letter: T,
                        customVendorLabel3Letter: S,
                        usePurModel: g,
                        neutralPm: h
                    })
                }
                )))
            }
            ,
            t
        }(i.Component)
    },
    eLTm: function(e, t, n) {
        "use strict";
        function o() {
            return (o = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n)
                        ({}).hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            }
            ).apply(null, arguments)
        }
        var r = n("2mXy")
          , a = (n("FdF9"),
        n("gm8T"))
          , i = n("o1E3")
          , s = n("YSmr");
        n("EgWA");
        "true" === Object(i.p)("observe_cls") && Object(i.y)();
        t.a = function(e) {
            return function(t) {
                return Object(r.h)(a.h.Provider, {
                    value: Object(i.p)("preload_message")
                }, Object(r.h)(a.j.Provider, {
                    value: Object(i.p)("concatenatedUUID") || s.d
                }, Object(r.h)(e, o({}, t, {
                    messageId: Object(i.p)("message_id"),
                    dev: "dev" === Object(i.p)("type"),
                    mini: "mini" === Object(i.p)("type"),
                    tiny: "tiny" === Object(i.p)("type"),
                    full: "full" === Object(i.p)("type"),
                    ccpaType: Object(i.p)("ccpa_type"),
                    accountId: Object(i.p)("account_id") || 22,
                    ccpaOrigin: Object(i.q)("ccpa_origin"),
                    usnatOrigin: Object(i.q)("usnat_origin"),
                    usnatOriginBuilder: Object(i.q)("usnat_origin_builder"),
                    globalCmpOrigin: Object(i.q)("global_cmp_origin"),
                    globalCmpOriginBuilder: Object(i.q)("global_cmp_origin_builder"),
                    cmpv2Origin: Object(i.q)("consent_origin") || Object(i.q)("cmpv2_origin") || s.c,
                    consentUUID: Object(i.p)("consentUUID") || void 0,
                    preferencesUUID: Object(i.p)("preferencesUUID") || void 0,
                    ccpaUUID: Object(i.p)("ccpaUUID") || void 0,
                    uuid: Object(i.p)("uuid") || void 0,
                    requestUUID: Object(i.p)("requestUUID") || void 0,
                    mmsOrigin: Object(i.q)("mms_origin") || "https://cdn.sp-stage.net/mms/v2",
                    siteId: Object(i.p)("site_id"),
                    requestId: Object(i.p)("request_id"),
                    preloadMsg: Object(i.p)("preload_message"),
                    preloadConsent: Object(i.p)("preload_consent"),
                    pmTab: Object(i.p)("pmTab"),
                    consentLanguage: (Object(i.p)("consentLanguage") || "").toUpperCase() || null,
                    idfaStatus: Object(i.p)("idfaStatus"),
                    isCcpa: Object(i.p)("is_ccpa"),
                    isUsnatNotice: Object(i.p)("is_usnat_notice"),
                    isGlobalCmp: Object(i.p)("is_global_cmp"),
                    isGlobalCmpNotice: Object(i.p)("is_global_cmp_notice"),
                    currentView: Object(i.p)("view"),
                    preferencesOrigin: Object(i.q)("preferences_origin"),
                    email: Object(i.p)("id"),
                    hbbTvSupport: Object(i.p)("hbbTvSupport"),
                    geoOverride: Object(i.p)("geoOverride")
                }))))
            }
        }
    },
    eLgm: function(e, t, n) {
        "use strict";
        function o() {
            return (o = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n)
                        ({}).hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            }
            ).apply(null, arguments)
        }
        n.d(t, "a", (function() {
            return r
        }
        ));
        var r = function(e) {
            void 0 === e && (e = {}),
            o(this, {
                background: "none",
                align: "flex-start",
                vertical: "flex-start",
                width: {
                    type: "%",
                    value: 100
                },
                height: {
                    type: "auto",
                    value: 1
                },
                padding: {
                    paddingLeft: 10,
                    paddingRight: 10,
                    paddingTop: 10,
                    paddingBottom: 10
                },
                margin: {
                    marginLeft: 10,
                    marginRight: 10,
                    marginTop: 10,
                    marginBottom: 10
                },
                border: {
                    borderWidth: 0,
                    borderColor: "#000000",
                    borderTopLeftRadius: 0,
                    borderTopRightRadius: 0,
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,
                    borderStyle: "solid"
                }
            }),
            o(this, e)
        }
    },
    eeaA: function(e, t, n) {
        "use strict";
        function o(e, t) {
            return (o = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        n.d(t, "a", (function() {
            return s
        }
        ));
        var r = n("2mXy")
          , a = n("FdF9")
          , i = n("o1E3")
          , s = function(e) {
            function t() {
                for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++)
                    o[r] = arguments[r];
                return (t = e.call.apply(e, [this].concat(o)) || this).state = {
                    isPurModelChecked: !1,
                    toggleDisplay: !0
                },
                t.toggle = function(e) {
                    var n = t.props
                      , o = n.child
                      , r = n.value
                      , a = n.consentType
                      , i = void 0 !== e ? e : !t.props.checked;
                    "purposes" === o || "features" === o ? (t.props.toggle(r._id, o, i, n.vendors, t.props.legInt),
                    t.setState({
                        checked: i
                    })) : "vendors" === o ? (t.props.toggle(r.vendorId, i, a),
                    t.setState({
                        checked: i
                    })) : "stacks" === o && (t.props.toggle(r._id, i),
                    t.setState({
                        checked: i
                    }))
                }
                ,
                t.componentDidMount = function() {
                    t.props.usePurModel && "legInt" !== t.props.consentType && "all" !== t.props.consentType && t.toggle(!0)
                }
                ,
                t.componentDidUpdate = function(e) {
                    t.props.usePurModel === e.usePurModel || t.props.legInt || t.setState({
                        isPurModelChecked: t.props.usePurModel,
                        toggleDisplay: !t.state.toggleDisplay
                    }, (function() {
                        t.props.selectedLi || t.toggle(t.state.isPurModelChecked)
                    }
                    ))
                }
                ,
                t
            }
            var n, a;
            return a = e,
            (n = t).prototype = Object.create(a.prototype),
            n.prototype.constructor = n,
            o(n, a),
            t.prototype.render = function() {
                var e = this
                  , t = this.props
                  , n = t.type
                  , o = t.color
                  , a = t.offColor
                  , s = t.text
                  , c = t.offText
                  , l = t.colorActive
                  , u = t.offActiveColor
                  , p = t.checked
                  , d = t.value.name
                  , g = t.locked
                  , f = this.props.usePurModel && "legInt" === this.props.consentType || !this.props.usePurModel || this.state.toggleDisplay && !this.props.usePurModel ? "inline-flex" : "none"
                  , h = Object(r.h)("button", {
                    className: g ? "pm-toggle locked" : "pm-toggle",
                    tabIndex: "0",
                    type: "button",
                    role: "switch",
                    "aria-label": "" + d,
                    "aria-checked": p ? "true" : "false",
                    onKeyDown: function(t) {
                        return Object(i.s)(t.key) && e.toggle(!p)
                    },
                    style: {
                        display: f
                    }
                }, Object(r.h)("span", {
                    className: "off",
                    style: {
                        backgroundColor: p ? "transparent" : a,
                        color: p ? "#000000" : u,
                        borderColor: p ? "#dddddd" : a
                    },
                    onClick: function() {
                        return e.toggle(!1)
                    },
                    role: "switch",
                    "aria-checked": p ? "true" : "false"
                }, c), Object(r.h)("span", {
                    className: "on",
                    style: {
                        backgroundColor: p ? o : "transparent",
                        color: p ? l : "#000000",
                        borderColor: p ? o : "#dddddd"
                    },
                    role: "switch",
                    "aria-checked": p ? "true" : "false",
                    onClick: function() {
                        return e.toggle(!0)
                    }
                }, s))
                  , b = p ? "pm-switch checked" : "pm-switch"
                  , m = Object(r.h)("button", {
                    tabIndex: "0",
                    type: "button",
                    role: "switch",
                    "aria-checked": p ? "true" : "false",
                    "aria-label": "" + d,
                    className: g ? b + " locked" : b,
                    onClick: function(t) {
                        t.stopPropagation(),
                        e.toggle()
                    },
                    style: {
                        display: f
                    }
                }, Object(r.h)("span", {
                    className: "slider round",
                    style: {
                        backgroundColor: p ? o : a
                    }
                }));
                return "neutral" === n ? h : m
            }
            ,
            t
        }(a.Component)
    },
    evnV: function() {},
    fYZW: function(e, t, n) {
        "use strict";
        (function(e) {
            n.d(t, "a", (function() {
                return c
            }
            ));
            var o = n("KOA+")
              , r = n("ffVi")
              , a = n.n(r)
              , i = n("o1E3")
              , s = function(t) {
                var n = t.vendor;
                return e("a", {
                    tabIndex: t.accordionOpen ? 0 : -1,
                    href: n.policyUrl,
                    target: "_blank",
                    className: "vendor-tag linked"
                }, e("span", null, n.name), e("img", {
                    src: a.a,
                    alt: ""
                }))
            }
              , c = function(t) {
                var n = t.vendor
                  , r = t.settings
                  , a = t.language
                  , c = t.dev
                  , l = t.accordionOpen
                  , u = Object(i.x)(Boolean(c), r, "vendorConsent", a);
                return e("div", {
                    className: "vendor-content"
                }, n.description && e("p", {
                    className: "pm-sub-p",
                    dangerouslySetInnerHTML: {
                        __html: Object(o.a)({
                            html: n.description
                        })
                    }
                }), n.cookieHeader && e("div", {
                    className: "vendor-cookie-header"
                }, n.cookieHeader), e(s, {
                    vendor: n,
                    accordionOpen: l
                }), e("div", null, n.purposes.length > 0 && e("div", {
                    className: "vendor-info"
                }, e("h2", {
                    className: "info-title"
                }, u), n.purposes.map((function(t) {
                    return t ? e("div", null, "• ", t.name || t) : null
                }
                )))))
            }
        }
        ).call(this, n("2mXy").h)
    },
    ffVi: function(e, t, n) {
        e.exports = n.p + "2700acc9ffd33b5bbb3866bd8b34ab32.svg"
    },
    gNPm: function(e, t, n) {
        "use strict";
        function o(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, o)
            }
            return n
        }
        function r(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? o(Object(n), !0).forEach((function(t) {
                    a(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function a(e, t, n) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" != typeof e || !e)
                        return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var o = n.call(e, t || "default");
                        if ("object" != typeof o)
                            return o;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" == typeof t ? t : t + ""
            }(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        var i = n("2mXy")
          , s = n("FdF9")
          , c = n("H6Cw")
          , l = n("k/EF")
          , u = n("NLdj")
          , p = n("4Q1r")
          , d = n("j1Q3")
          , g = n("o1E3")
          , f = n("KOA+")
          , h = function(e) {
            var t = e.stack
              , n = e.selected
              , o = e.settings
              , a = e.togglePurposeOrFeature
              , s = e.toggleText
              , c = e.toggleOffText
              , l = e.force
              , u = e.updateMe
              , d = e.accordionOpen
              , g = e.usePurModel
              , h = e.language
              , b = e.vendors;
            return Object(i.h)("div", {
                className: "purpose-content"
            }, Object(i.h)("p", {
                tabindex: "0",
                style: r({}, o.panelFont),
                className: "stack-description",
                dangerouslySetInnerHTML: {
                    __html: Object(f.a)({
                        html: t.description
                    })
                }
            }), t.categories.map((function(e) {
                return Object(i.h)(p.a, {
                    key: e._id,
                    purpose: e,
                    selected: n,
                    settings: o,
                    togglePurposeOrFeature: a,
                    toggleText: s,
                    toggleOffText: c,
                    force: l,
                    updateMe: u,
                    parentAccordionOpen: d,
                    usePurModel: g,
                    language: h,
                    vendors: b
                })
            }
            )))
        };
        t.a = function(e) {
            return function(t) {
                var n = Object(s.useState)(t.startWithLiToggled ? "li" : "consent")
                  , o = n[0]
                  , a = n[1]
                  , p = Object(s.useState)(!0)
                  , f = p[0]
                  , b = p[1]
                  , m = function() {
                    return b(!f)
                }
                  , v = t.stacks
                  , y = t.useStacks
                  , O = t.purposes
                  , j = t.specialPurposes
                  , C = t.settings
                  , x = t.language
                  , w = t.dev
                  , k = t.usePurModel
                  , P = t.vendors
                  , _ = t.togglePurposeOrFeature
                  , L = t.toggleStack;
                if (t.inOrder) {
                    var T = Object(g.x)(Boolean(w), C, "purposesText", x)
                      , S = Object(g.x)(Boolean(w), C, "purposeInfo", x)
                      , N = Object(g.x)(Boolean(w), C, "customPurposesText", x)
                      , I = Object(g.x)(Boolean(w), C, "specialPurposesText", x)
                      , A = Object(g.x)(Boolean(w), C, "specialPurposesInfo", x)
                      , B = Object(g.x)(Boolean(w), C, "toggleText", x)
                      , D = Object(g.x)(Boolean(w), C, "toggleOffText", x)
                      , E = Object(g.x)(Boolean(w), C, "consentText", x)
                      , F = Object(g.x)(Boolean(w), C, "liText", x)
                      , V = Object(g.x)(Boolean(w), C, "liInfo", x)
                      , M = Object(g.x)(Boolean(w), C, "customPurposesLetter", x)
                      , R = "consent" === o && C.specialOnly
                      , U = O.filter((function(e) {
                        return e.disclosureOnly
                    }
                    ))
                      , H = O.some((function(e) {
                        return e.legIntVendors && e.legIntVendors.length
                    }
                    ))
                      , z = O.filter((function(e) {
                        return !e.disclosureOnly
                    }
                    )).filter((function(e) {
                        return "consent" === o ? e.requiringConsentVendors.length : e.legIntVendors.length
                    }
                    )).reduce((function(e, t, n, o) {
                        var a = function(e) {
                            return o.length - 1 === n ? e.purposesAndStacks : e
                        };
                        if (e.stackedPurposes[t._id])
                            return a(e);
                        var i = v.find((function(e) {
                            return e.childCategories.includes(t._id)
                        }
                        ));
                        if (y && i) {
                            var s = r({}, i, {
                                categories: o.filter((function(e) {
                                    return i.childCategories.includes(e._id)
                                }
                                ))
                            });
                            return e.purposesAndStacks.push(r({}, s, {
                                isStack: !0
                            })),
                            s.childCategories.forEach((function(t) {
                                return e.stackedPurposes[t] = !0
                            }
                            )),
                            a(e)
                        }
                        return e.purposesAndStacks.push(t),
                        a(e)
                    }
                    ), {
                        stackedPurposes: {},
                        purposesAndStacks: []
                    }).map((function(e) {
                        return e.isStack ? Object(i.h)(c.a, {
                            key: e._id,
                            settings: C,
                            accessName: e.name,
                            child: "purposes",
                            language: x,
                            value: e,
                            stack: e,
                            selected: o,
                            titleContent: Object(i.h)(d.a, {
                                stack: e,
                                selected: o,
                                language: x,
                                settings: C,
                                dev: w,
                                usePurModel: k
                            }),
                            content: Object(i.h)(h, {
                                stack: e,
                                selected: o,
                                settings: C,
                                togglePurposeOrFeature: _,
                                toggleText: B,
                                toggleOffText: D,
                                language: x,
                                force: m,
                                updateMe: f,
                                dev: w,
                                isCustom: "CUSTOM_STACK" === e.type,
                                usePurModel: k && "li" !== o,
                                vendors: P
                            }),
                            toggle: !1,
                            toggleStack: L,
                            force: m,
                            updateMe: f,
                            dev: w,
                            usePurModel: k && "li" !== o
                        }) : Object(i.h)(c.a, {
                            key: e._id,
                            settings: C,
                            name: Object(i.h)("span", null, e.name, "IAB_PURPOSE" !== e.type && Object(i.h)("span", {
                                tabIndex: "0",
                                className: "legend-key inline"
                            }, M)),
                            accessName: e.name,
                            description: e.description,
                            child: "purposes",
                            language: x,
                            value: e,
                            selected: o,
                            vendors: "consent" === o ? e.requiringConsentVendors : e.legIntVendors,
                            content: Object(i.h)(l.a, {
                                selected: o,
                                purpose: e,
                                language: x,
                                settings: C,
                                force: m,
                                dev: w,
                                isCustom: "CUSTOM" === e.type,
                                vendors: P
                            }),
                            toggle: _,
                            updateMe: f,
                            dev: w,
                            usePurModel: k
                        })
                    }
                    ));
                    return Object(i.h)("div", {
                        className: "pm-purposes"
                    }, H ? Object(i.h)("div", {
                        role: "tablist",
                        className: "pm-type-toggle"
                    }, Object(i.h)("div", {
                        id: "purposes-focus",
                        role: "tab",
                        "aria-selected": "li" !== o,
                        tabindex: "0",
                        className: "focusable",
                        title: E,
                        onClick: function() {
                            return a("consent")
                        },
                        onKeyDown: function(e) {
                            return Object(g.s)(e.key) && a("consent")
                        }
                    }, E), Object(i.h)("div", {
                        role: "tab",
                        "aria-selected": "li" === o,
                        tabindex: "0",
                        title: F,
                        onClick: function() {
                            return a("li")
                        },
                        onKeyDown: function(e) {
                            return Object(g.s)(e.key) && a("li")
                        }
                    }, F), Object(i.h)("span", {
                        className: "li" === o ? "selected li" : "selected consent"
                    })) : null, Object(i.h)("h2", {
                        tabindex: "0",
                        className: "info-title"
                    }, T), Object(i.h)("p", {
                        tabindex: "0",
                        className: "pm-sub-p"
                    }, "consent" === o ? S : V), Object(i.h)("div", {
                        className: "legend"
                    }, Object(i.h)("span", {
                        tabIndex: "0",
                        className: "legend-key"
                    }, M), Object(i.h)("h2", {
                        class: "custom-header"
                    }, N)), z, (j.length > 0 || U.length > 0) && !R && Object(i.h)("h2", {
                        className: "info-title"
                    }, I), (j.length > 0 || U.length > 0) && !R && Object(i.h)("p", {
                        className: "pm-sub-p"
                    }, A), j.length > 0 && !R && j.map((function(e) {
                        return Object(i.h)(c.a, {
                            key: "special-purpose-" + e._id,
                            settings: C,
                            name: e.name,
                            accessName: e.name,
                            child: "specialPurposes",
                            language: x,
                            value: e,
                            selected: o,
                            description: e.description,
                            content: Object(i.h)(u.a, {
                                purpose: e,
                                language: x,
                                settings: C,
                                force: m,
                                dev: w,
                                isCustom: "CUSTOM" === e.type,
                                vendors: P
                            }),
                            updateMe: f,
                            dev: w,
                            usePurModel: k && "li" !== o
                        })
                    }
                    )), U.length > 0 && U.map((function(e) {
                        return Object(i.h)(c.a, {
                            key: "purpose-" + e._id,
                            settings: C,
                            name: Object(i.h)("span", null, e.name, Object(i.h)("span", {
                                tabIndex: "0",
                                className: "legend-key inline"
                            }, M)),
                            accessName: e.name,
                            description: e.description,
                            child: "purposes",
                            language: x,
                            value: e,
                            selected: o,
                            content: Object(i.h)(l.a, {
                                disclosure: !0,
                                selected: o,
                                purpose: e,
                                language: x,
                                settings: C,
                                force: m,
                                dev: w,
                                isCustom: "CUSTOM" === e.type,
                                vendors: P
                            }),
                            toggle: !1,
                            updateMe: f,
                            dev: w,
                            usePurModel: k && "li" !== o
                        })
                    }
                    )))
                }
                return Object(i.h)(e, t)
            }
        }
    },
    gm8T: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return r
        }
        )),
        n.d(t, "e", (function() {
            return a
        }
        )),
        n.d(t, "g", (function() {
            return i
        }
        )),
        n.d(t, "i", (function() {
            return s
        }
        )),
        n.d(t, "h", (function() {
            return c
        }
        )),
        n.d(t, "c", (function() {
            return l
        }
        )),
        n.d(t, "b", (function() {
            return u
        }
        )),
        n.d(t, "d", (function() {
            return p
        }
        )),
        n.d(t, "k", (function() {
            return d
        }
        )),
        n.d(t, "j", (function() {
            return g
        }
        )),
        n.d(t, "f", (function() {
            return f
        }
        ));
        var o = n("FdF9")
          , r = Object(o.createContext)()
          , a = Object(o.createContext)()
          , i = Object(o.createContext)()
          , s = Object(o.createContext)()
          , c = Object(o.createContext)()
          , l = Object(o.createContext)()
          , u = Object(o.createContext)()
          , p = Object(o.createContext)()
          , d = Object(o.createContext)()
          , g = Object(o.createContext)()
          , f = Object(o.createContext)()
    },
    h6DV: function(e, t, n) {
        "use strict";
        (function(e) {
            function o(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }
                    ))),
                    n.push.apply(n, o)
                }
                return n
            }
            function r(e, t, n) {
                return (t = function(e) {
                    var t = function(e, t) {
                        if ("object" != typeof e || !e)
                            return e;
                        var n = e[Symbol.toPrimitive];
                        if (void 0 !== n) {
                            var o = n.call(e, t || "default");
                            if ("object" != typeof o)
                                return o;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === t ? String : Number)(e)
                    }(e, "string");
                    return "symbol" == typeof t ? t : t + ""
                }(t))in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n,
                e
            }
            n.d(t, "a", (function() {
                return i
            }
            ));
            var a = n("o1E3")
              , i = function(t) {
                var n = t.dev
                  , i = t.stack
                  , s = t.selected
                  , c = t.toggleStack
                  , l = t.language
                  , u = t.settings
                  , p = {
                    active: 0,
                    rejected: 0
                };
                i.categories.forEach((function(e) {
                    "consent" === s && e.active ? p.active += 1 : "consent" !== s || e.active || (p.rejected += 1),
                    "li" === s && e.legInt ? p.active += 1 : "li" !== s || e.legInt || (p.rejected += 1)
                }
                ));
                var d = Object(a.x)(Boolean(n), u, "acceptedAllText", l)
                  , g = Object(a.x)(Boolean(n), u, "rejectedAllText", l)
                  , f = Object(a.x)(Boolean(n), u, "partialConsentText", l)
                  , h = Object(a.x)(Boolean(n), u, "acceptAllText", l)
                  , b = Object(a.x)(Boolean(n), u, "rejectAllText", l)
                  , m = f;
                return p.active > 0 && 0 === p.rejected && (m = d),
                p.rejected > 0 && 0 === p.active && (m = g),
                delete function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? o(Object(n), !0).forEach((function(t) {
                            r(e, t, n[t])
                        }
                        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }
                        ))
                    }
                    return e
                }({}, u.accordionsFont).color,
                e("div", {
                    className: "stack-toggles"
                }, e("button", {
                    tabIndex: "0",
                    className: m === g ? "stack-toggle reject-toggle choice" : "stack-toggle reject-toggle",
                    onClick: function(e) {
                        return c(e, i.categories, !1, "li" === s)
                    },
                    onKeyDown: function(e) {
                        return Object(a.s)(e.key) && c(e, i.categories, !1, "li" === s)
                    }
                }, b), e("button", {
                    tabIndex: "0",
                    className: m === d ? "stack-toggle accept-toggle choice" : "stack-toggle accept-toggle",
                    onClick: function(e) {
                        return c(e, i.categories, !0, "li" === s)
                    },
                    onKeyDown: function(e) {
                        return Object(a.s)(e.key) && c(e, i.categories, !0, "li" === s)
                    }
                }, h))
            }
        }
        ).call(this, n("2mXy").h)
    },
    h8E1: function() {},
    hfBA: function(e, t, n) {
        "use strict";
        (function(e) {
            function o() {
                return (o = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n)
                            ({}).hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                }
                ).apply(null, arguments)
            }
            function r(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }
                    ))),
                    n.push.apply(n, o)
                }
                return n
            }
            function a(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? r(Object(n), !0).forEach((function(t) {
                        i(e, t, n[t])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }
            function i(e, t, n) {
                return (t = function(e) {
                    var t = function(e, t) {
                        if ("object" != typeof e || !e)
                            return e;
                        var n = e[Symbol.toPrimitive];
                        if (void 0 !== n) {
                            var o = n.call(e, t || "default");
                            if ("object" != typeof o)
                                return o;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === t ? String : Number)(e)
                    }(e, "string");
                    return "symbol" == typeof t ? t : t + ""
                }(t))in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n,
                e
            }
            function s(e, t) {
                return (s = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t,
                    e
                }
                )(e, t)
            }
            n.d(t, "a", (function() {
                return h
            }
            ));
            var c = n("2mXy")
              , l = n("FdF9")
              , u = n("4KsG")
              , p = n("dxvN")
              , d = n("4Y0j")
              , g = n("o1E3")
              , f = n("6Ln/")
              , h = (n("h8E1"),
            function(t) {
                function n() {
                    for (var e, n = arguments.length, o = new Array(n), r = 0; r < n; r++)
                        o[r] = arguments[r];
                    return (e = t.call.apply(t, [this].concat(o)) || this).state = {
                        page: e.props.pmTab ? e.props.pmTab.includes("li") ? "li" : e.props.pmTab.includes("purposes") ? "purposes" : "vendors" : e.props.message.defaultTab || "purposes",
                        loading: !0
                    },
                    e.backRef = l.default.createRef(),
                    e.changePage = function(t) {
                        return new Promise((function(n) {
                            return e.setState({
                                page: t
                            }, (function() {
                                e.backRef.current && e.backRef.current.focus()
                            }
                            )),
                            n()
                        }
                        ))
                    }
                    ,
                    e.linkHover = function(e, t) {
                        e.target.style.color = t.color,
                        e.target.style.textDecoration = t.textDecoration,
                        e.target.style.fontWeight = t.fontWeight
                    }
                    ,
                    e
                }
                var r, i;
                return i = t,
                (r = n).prototype = Object.create(i.prototype),
                r.prototype.constructor = r,
                s(r, i),
                n.prototype.render = function() {
                    var t = this
                      , n = this.props.neutralPm ? new f.a(this.props.component.settings) : new d.a(this.props.component.settings)
                      , r = this.props.language
                      , i = this.state.page
                      , s = this.props.pmData || {}
                      , l = {}
                      , h = !1
                      , b = JSON.stringify(this.props.path);
                    this.props.dev && (l = a({}, this.props.dev.hover),
                    h = this.props.dev.current === b);
                    var m = {};
                    m.minHeight = "auto" === n.minHeight.type ? "auto" : n.minHeight.value + n.minHeight.type,
                    m.maxHeight = "auto" === n.maxHeight.type ? "auto" : n.maxHeight.value + n.maxHeight.type;
                    var v = a({}, n.accordionsFont);
                    m.backgroundColor = n.backgroundColor;
                    var y = {
                        style: n.link,
                        onMouseOver: function(e) {
                            return t.linkHover(e, n.hover)
                        },
                        onMouseOut: function(e) {
                            return t.linkHover(e, n.link)
                        }
                    }
                      , O = "message-component message-stacks pm-tcfv2-inline no-children" + this.props.className
                      , j = Object(g.x)(Boolean(this.props.dev), n, "liText", r)
                      , C = Object(g.x)(Boolean(this.props.dev), n, "liInfo", r)
                      , x = Object(g.x)(Boolean(this.props.dev), n, "vendorsText", r)
                      , w = Object(g.x)(Boolean(this.props.dev), n, "vendorsInfo", r)
                      , k = Object(g.x)(Boolean(this.props.dev), n, "customPurposesText", r)
                      , P = Object(g.x)(Boolean(this.props.dev), n, "customPurposesLetter", r)
                      , _ = Object(g.x)(Boolean(this.props.dev), n, "requiredConsentText", r)
                      , L = Object(g.x)(Boolean(this.props.dev), n, "requiredConsentLetter", r)
                      , T = Object(g.x)(Boolean(this.props.dev), n, "consentDisclosure", r)
                      , S = this.props.message.useStacks
                      , N = this.props.message.consentOnlyStacks
                      , I = this.props.message.usePurModel;
                    return n.alphabetizeVendors && (s.vendors || []).sort((function(e, t) {
                        return e.name.toLowerCase() < t.name.toLowerCase() ? -1 : e.name.toLowerCase() > t.name.toLowerCase() ? 1 : 0
                    }
                    )),
                    Object(c.h)("div", o({
                        ref: this.backRef,
                        className: h ? O + " on-active" : O,
                        path: this.props.dev ? b : null
                    }, l), "purposes" === i && void 0 !== s.categories && void 0 !== s.features && Object(c.h)("div", {
                        className: "pm-section pm-main",
                        style: m
                    }, Object(c.h)(u.a, {
                        dev: this.props.dev,
                        stacks: s.stacks || [],
                        purposes: s.categories || [],
                        specialFeatures: s.specialFeatures || [],
                        features: s.features || [],
                        specialPurposes: s.specialPurposes || [],
                        vendors: s.vendors || [],
                        useStacks: S,
                        consentOnlyStacks: N,
                        language: this.props.language,
                        settings: n,
                        togglePurposeOrFeature: this.props.togglePurposeOrFeature,
                        toggleStack: this.props.toggleStack,
                        selected: "consent",
                        usePurModel: I,
                        neutralPm: this.props.neutralPm,
                        inOrder: this.props.inOrder
                    }), this.props.pmData.vendors && this.props.pmData.vendors.some((function(e) {
                        return e.legIntCategories.length
                    }
                    )) && Object(c.h)("div", {
                        style: {
                            borderColor: n.backgroundColor
                        },
                        className: "page-link bottom"
                    }, Object(c.h)("div", {
                        tabIndex: "0",
                        className: "page-desc",
                        style: v
                    }, C), Object(c.h)("div", o({
                        tabIndex: "0",
                        className: "page-action"
                    }, y, {
                        onClick: function() {
                            return t.changePage("li")
                        },
                        onKeyDown: function(e) {
                            return Object(g.s)(e.key) && t.changePage("li")
                        }
                    }), j)), Object(c.h)("div", {
                        style: {
                            borderColor: n.backgroundColor
                        },
                        className: "page-link bottom"
                    }, Object(c.h)("div", {
                        tabIndex: "0",
                        className: "page-desc",
                        style: v
                    }, w), Object(c.h)("div", o({
                        tabIndex: "0",
                        className: "page-action"
                    }, y, {
                        onClick: function() {
                            return t.changePage("vendors")
                        },
                        onKeyDown: function(e) {
                            return Object(g.s)(e.key) && t.changePage("vendors")
                        }
                    }), x)), Object(c.h)("div", {
                        className: "legend"
                    }, Object(c.h)("span", {
                        tabIndex: "0",
                        className: "legend-key"
                    }, P), Object(c.h)("h2", {
                        class: "custom-header"
                    }, k), this.props.neutralPm && Object(c.h)(e, null, Object(c.h)("span", {
                        tabIndex: "0",
                        className: "legend-key required-consent"
                    }, L), Object(c.h)("h2", {
                        class: "custom-header"
                    }, _)))), "li" === i && void 0 !== s.vendors && Object(c.h)("div", {
                        className: "pm-section pm-li",
                        style: m
                    }, Object(c.h)("div", {
                        id: "li-header",
                        className: "page-header"
                    }, Object(c.h)("div", {
                        ref: this.backRef,
                        tabIndex: "0",
                        className: "chevron left",
                        onClick: function() {
                            return t.changePage("purposes")
                        },
                        onKeyDown: function(e) {
                            return Object(g.s)(e.key) && t.changePage("purposes")
                        }
                    }), j), Object(c.h)("p", {
                        tabIndex: "0",
                        style: {
                            margin: 5
                        },
                        className: "page-information"
                    }, Object(g.h)(C)), Object(c.h)(u.a, {
                        dev: this.props.dev,
                        stacks: s.stacks || [],
                        purposes: s.categories || [],
                        specialFeatures: s.specialFeatures || [],
                        useStacks: S,
                        consentOnlyStacks: N,
                        language: this.props.language,
                        settings: n,
                        togglePurposeOrFeature: this.props.togglePurposeOrFeature,
                        toggleStack: this.props.toggleStack,
                        selected: "li",
                        vendors: s.vendors || []
                    })), "vendors" === i && void 0 !== s.vendors && Object(c.h)("div", {
                        className: "pm-section pm-vendors",
                        style: m
                    }, Object(c.h)("div", {
                        id: "vendors-header",
                        className: "page-header"
                    }, Object(c.h)("div", {
                        ref: this.backRef,
                        tabIndex: "0",
                        className: "chevron left",
                        onClick: function() {
                            return t.changePage("purposes")
                        },
                        onKeyDown: function(e) {
                            return Object(g.s)(e.key) && t.changePage("purposes")
                        }
                    }), x), Object(c.h)("div", {
                        tabIndex: "0",
                        className: "consent-disclouse"
                    }, T || s.defaultConsentDisclosure), Object(c.h)("p", {
                        tabindclassName: "page-information"
                    }, Object(g.h)(w)), Object(c.h)(p.a, {
                        dev: this.props.dev,
                        vendors: s.vendors || [],
                        settings: n,
                        language: this.props.language,
                        toggleVendor: this.props.toggleVendor,
                        usePurModel: I,
                        idfaStatus: this.props.idfaStatus,
                        neutralPm: this.props.neutralPm
                    })))
                }
                ,
                n
            }(l.Component))
        }
        ).call(this, n("2mXy").Fragment)
    },
    j1Q3: function(e, t, n) {
        "use strict";
        (function(e) {
            function o(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }
                    ))),
                    n.push.apply(n, o)
                }
                return n
            }
            function r(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? o(Object(n), !0).forEach((function(t) {
                        a(e, t, n[t])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }
            function a(e, t, n) {
                return (t = function(e) {
                    var t = function(e, t) {
                        if ("object" != typeof e || !e)
                            return e;
                        var n = e[Symbol.toPrimitive];
                        if (void 0 !== n) {
                            var o = n.call(e, t || "default");
                            if ("object" != typeof o)
                                return o;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === t ? String : Number)(e)
                    }(e, "string");
                    return "symbol" == typeof t ? t : t + ""
                }(t))in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n,
                e
            }
            n.d(t, "a", (function() {
                return c
            }
            ));
            var i = n("o1E3")
              , s = {
                partial: "yellow",
                accepted: "green",
                rejected: "grey"
            }
              , c = function(t) {
                var n = t.dev
                  , o = t.stack
                  , a = t.selected
                  , c = t.language
                  , l = t.settings
                  , u = t.usePurModel
                  , p = {
                    active: 0,
                    rejected: 0
                };
                o.categories.forEach((function(e) {
                    "consent" === a && e.active ? p.active += 1 : "consent" !== a || e.active || (p.rejected += 1),
                    "li" === a && e.legInt ? p.active += 1 : "li" !== a || e.legInt || (p.rejected += 1)
                }
                ));
                var d = Object(i.x)(Boolean(n), l, "statusText", c)
                  , g = Object(i.x)(Boolean(n), l, "acceptedAllText", c)
                  , f = Object(i.x)(Boolean(n), l, "rejectedAllText", c)
                  , h = Object(i.x)(Boolean(n), l, "partialConsentText", c)
                  , b = "partial";
                p.active > 0 && 0 === p.rejected && (h = g,
                b = "accepted"),
                p.rejected > 0 && 0 === p.active && (h = f,
                b = "rejected");
                var m = r({}, l.accordionsFont);
                return delete m.color,
                e("div", {
                    className: "stack-title"
                }, e("p", {
                    style: r({}, l.accordionsFont, {
                        margin: 0
                    })
                }, o.name), !u && e("div", {
                    tabIndex: "0",
                    className: "stack-status"
                }, e("span", null, d, ":"), e("span", {
                    style: r({}, m),
                    className: s[b]
                }, h)))
            }
        }
        ).call(this, n("2mXy").h)
    },
    j9y7: function(e, t, n) {
        "use strict";
        (function(e) {
            n("FdF9");
            var o = n("o1E3");
            n("mQs4");
            t.a = function(t) {
                var n = t.value
                  , r = t.toggleCategory
                  , a = t.settings
                  , i = t.dev
                  , s = t.language
                  , c = t.toggleStack
                  , l = n.enabled;
                null !== l && n.isNegative && (l = !l);
                var u = a.neutralButtonBackgroundColor
                  , p = a.neutralButtonFontColor
                  , d = function(e) {
                    e.stopPropagation(),
                    n.childCategories ? c(e, n, !0) : r(e, n._id, !n.isNegative)
                }
                  , g = function(e) {
                    e.stopPropagation(),
                    n.childCategories ? c(e, n, !1) : r(e, n._id, !!n.isNegative)
                }
                  , f = {
                    background: !1 === l ? a.offButtonBackgroundColor : u,
                    color: !1 === l ? a.offButtonFontColor : p
                };
                return e("div", {
                    className: "pur-buttons-container",
                    style: t.style
                }, e("button", {
                    style: {
                        background: !0 === l ? a.onButtonBackgroundColor : u,
                        color: !0 === l ? a.onButtonFontColor : p
                    },
                    "aria-pressed": l,
                    onClick: d,
                    onKeyDown: function(e) {
                        return Object(o.s)(e.key) && d(e)
                    }
                }, Object(o.x)(i, a, "onButtonText", s)), e("button", {
                    style: f,
                    "aria-pressed": !1 === l,
                    onClick: g,
                    onKeyDown: function(e) {
                        return Object(o.s)(e.key) && g(e)
                    }
                }, Object(o.x)(i, a, "offButtonText", s)))
            }
        }
        ).call(this, n("2mXy").h)
    },
    jgXh: function(e, t, n) {
        e.exports = n.p + "270b1804ded10442dc27e9e0098bb1f3.svg"
    },
    "k/EF": function(e, t, n) {
        "use strict";
        function o(e, t) {
            return (o = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        n.d(t, "a", (function() {
            return l
        }
        ));
        var r = n("2mXy")
          , a = n("FdF9")
          , i = n("KOA+")
          , s = n("5ehb")
          , c = n("o1E3")
          , l = function(e) {
            function t() {
                for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++)
                    o[r] = arguments[r];
                return (t = e.call.apply(e, [this].concat(o)) || this).state = {
                    consentAll: !1,
                    liAll: !1,
                    discolsureAll: !1
                },
                t.toggleConsentAll = function() {
                    t.setState({
                        consentAll: !t.state.consentAll
                    }, t.props.force)
                }
                ,
                t.toggleLiAll = function() {
                    t.setState({
                        liAll: !t.state.liAll
                    }, t.props.force)
                }
                ,
                t.toggleDisclosure = function() {
                    t.setState({
                        discolsureAll: !t.state.discolsureAll
                    }, t.props.force)
                }
                ,
                t
            }
            var n, a;
            return a = e,
            (n = t).prototype = Object.create(a.prototype),
            n.prototype.constructor = n,
            o(n, a),
            t.prototype.render = function() {
                var e = this
                  , t = this.props
                  , n = t.selected
                  , o = t.purpose
                  , a = t.settings
                  , l = t.language
                  , u = t.force
                  , p = t.dev
                  , d = t.disclosure
                  , g = t.isCustom
                  , f = t.accordionOpen
                  , h = t.vendors
                  , b = this.state
                  , m = b.consentAll
                  , v = b.liAll
                  , y = b.discolsureAll
                  , O = function(e, t) {
                    return !!h && Boolean(e.map((function(e) {
                        return e.vendorId
                    }
                    )).map((function(e) {
                        return h.find((function(t) {
                            return t.vendorId === e
                        }
                        ))
                    }
                    )).some((function(e) {
                        return e[t]
                    }
                    )))
                }
                  , j = Object(c.x)(Boolean(p), a, "viewAllText", l)
                  , C = Object(c.x)(Boolean(p), a, "viewLessText", l)
                  , x = Object(c.x)(Boolean(p), a, "otherText", l)
                  , w = Object(c.x)(Boolean(p), a, "otherLetter", l)
                  , k = Object(c.x)(Boolean(p), a, "vendorTitleText", l)
                  , P = Object(c.x)(Boolean(p), a, "appleDataBrokerText", l)
                  , _ = Object(c.x)(Boolean(p), a, "appleDataBrokerLetter", l)
                  , L = O(o.requiringConsentVendors, "isApple")
                  , T = Object(c.x)(Boolean(p), a, "customVendorLabel1Text", l)
                  , S = Object(c.x)(Boolean(p), a, "customVendorLabel2Text", l)
                  , N = Object(c.x)(Boolean(p), a, "customVendorLabel3Text", l)
                  , I = Object(c.x)(Boolean(p), a, "customVendorLabel1Letter", l)
                  , A = Object(c.x)(Boolean(p), a, "customVendorLabel2Letter", l)
                  , B = Object(c.x)(Boolean(p), a, "customVendorLabel3Letter", l)
                  , D = O(o.requiringConsentVendors, "isCustomVendorLabel1")
                  , E = O(o.requiringConsentVendors, "isCustomVendorLabel2")
                  , F = O(o.requiringConsentVendors, "isCustomVendorLabel3")
                  , V = g ? Object(r.h)("p", {
                    style: "margin-bottom:15px;",
                    dangerouslySetInnerHTML: {
                        __html: Object(i.a)({
                            html: o.description
                        })
                    }
                }) : Object(r.h)("p", {
                    style: "margin-bottom:15px;"
                }, Object(c.h)(o.description));
                return a.alphabetizeVendors && (o.requiringConsentVendors && o.requiringConsentVendors.sort((function(e, t) {
                    return e.name.toLowerCase() < t.name.toLowerCase() ? -1 : e.name.toLowerCase() > t.name.toLowerCase() ? 1 : 0
                }
                )),
                o.legIntVendors && o.legIntVendors.sort((function(e, t) {
                    return e.name.toLowerCase() < t.name.toLowerCase() ? -1 : e.name.toLowerCase() > t.name.toLowerCase() ? 1 : 0
                }
                )),
                o.disclosureOnlyVendors && o.disclosureOnlyVendors.sort((function(e, t) {
                    return e.name.toLowerCase() < t.name.toLowerCase() ? -1 : e.name.toLowerCase() > t.name.toLowerCase() ? 1 : 0
                }
                ))),
                Object(r.h)("div", {
                    className: "purpose-content"
                }, Object(r.h)("div", {
                    tabIndex: "0"
                }, V), Object(r.h)("div", {
                    className: "policies"
                }, Object(r.h)("div", {
                    tabIndex: "0",
                    style: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between"
                    }
                }, (o.disclosureOnly ? o.disclosureOnlyVendors : "consent" === n ? o.requiringConsentVendors : o.legIntVendors).length, " ", k, Object(r.h)("div", {
                    className: "legend"
                }, Object(r.h)("span", {
                    tabIndex: "0",
                    className: "legend-key"
                }, w), Object(r.h)("h2", {
                    class: "custom-header"
                }, x), L && Object(r.h)("span", {
                    className: "legend-key apple-broker",
                    "aria-hidden": !0
                }, _), L && P, D && Object(r.h)("span", {
                    className: "legend-key is-custom-vendor-label-1",
                    "aria-hidden": !0
                }, I), D && T, E && Object(r.h)("span", {
                    className: "legend-key is-custom-vendor-label-2",
                    "aria-hidden": !0
                }, A), E && S, F && Object(r.h)("span", {
                    className: "legend-key is-custom-vendor-label-3",
                    "aria-hidden": !0
                }, B), F && N))), "consent" === n && Object(r.h)("div", null, Object(r.h)("div", {
                    className: "policies"
                }, o.requiringConsentVendors.slice(0, m ? o.requiringConsentVendors.length : 3).map((function(e) {
                    return Object(r.h)(s.a, {
                        vendor: e,
                        key: e.vendorId,
                        language: l,
                        settings: a,
                        force: u,
                        accordionOpen: f,
                        isApple: O([e], "isApple"),
                        isCustomVendorLabel1: O([e], "isCustomVendorLabel1"),
                        isCustomVendorLabel2: O([e], "isCustomVendorLabel2"),
                        isCustomVendorLabel3: O([e], "isCustomVendorLabel3"),
                        appleDataBrokerLetter: _,
                        customVendorLabel1Letter: I,
                        customVendorLabel2Letter: A,
                        customVendorLabel3Letter: B
                    })
                }
                )), o.requiringConsentVendors.length > 3 && Object(r.h)("div", {
                    tabIndex: f ? 0 : -1,
                    className: "view-all",
                    role: "button",
                    onClick: this.toggleConsentAll,
                    onKeyDown: function(t) {
                        return Object(c.s)(t.key) && e.toggleConsentAll()
                    }
                }, m ? C : j))), "li" === n && Object(r.h)("div", {
                    style: {
                        position: "relative"
                    }
                }, Object(r.h)("div", {
                    className: "policies"
                }, o.legIntVendors.slice(0, v ? o.legIntVendors.length : 3).map((function(e) {
                    return Object(r.h)(s.a, {
                        vendor: e,
                        key: e.vendorId,
                        language: l,
                        settings: a,
                        force: u,
                        accordionOpen: f,
                        isApple: O([e], "isApple"),
                        isCustomVendorLabel1: O([e], "isCustomVendorLabel1"),
                        isCustomVendorLabel2: O([e], "isCustomVendorLabel2"),
                        isCustomVendorLabel3: O([e], "isCustomVendorLabel3"),
                        appleDataBrokerLetter: _,
                        customVendorLabel1Letter: I,
                        customVendorLabel2Letter: A,
                        customVendorLabel3Letter: B
                    })
                }
                )), o.legIntVendors.length > 3 ? Object(r.h)("div", {
                    tabIndex: f ? 0 : -1,
                    className: "view-all",
                    role: "button",
                    onClick: this.toggleLiAll,
                    onKeyDown: function(t) {
                        return Object(c.s)(t.key) && e.toggleLiAll()
                    }
                }, v ? C : j) : null)), !0 === d && Object(r.h)("div", {
                    style: {
                        position: "relative"
                    }
                }, Object(r.h)("div", {
                    className: "policies"
                }, o.disclosureOnlyVendors.slice(0, y ? o.disclosureOnlyVendors.length : 3).map((function(e) {
                    return Object(r.h)(s.a, {
                        vendor: e,
                        key: e.vendorId,
                        language: l,
                        settings: a,
                        force: u,
                        accordionOpen: f,
                        isApple: O([e], "isApple"),
                        isCustomVendorLabel1: O([e], "isCustomVendorLabel1"),
                        isCustomVendorLabel2: O([e], "isCustomVendorLabel2"),
                        isCustomVendorLabel3: O([e], "isCustomVendorLabel3"),
                        appleDataBrokerLetter: _,
                        customVendorLabel1Letter: I,
                        customVendorLabel2Letter: A,
                        customVendorLabel3Letter: B
                    })
                }
                )), o.disclosureOnlyVendors.length > 3 ? Object(r.h)("div", {
                    tabIndex: f ? 0 : -1,
                    className: "view-all",
                    role: "button",
                    onClick: this.toggleDisclosure,
                    onKeyDown: function(t) {
                        return Object(c.s)(t.key) && e.toggleDisclosure()
                    }
                }, y ? C : j) : null)))
            }
            ,
            t
        }(a.Component)
    },
    mLpX: function() {},
    mQs4: function() {},
    o1E3: function(e, t, n) {
        "use strict";
        function o(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, o)
            }
            return n
        }
        function r(e, t, n) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" != typeof e || !e)
                        return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var o = n.call(e, t || "default");
                        if ("object" != typeof o)
                            return o;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" == typeof t ? t : t + ""
            }(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        n.d(t, "p", (function() {
            return g
        }
        )),
        n.d(t, "c", (function() {
            return f
        }
        )),
        n.d(t, "m", (function() {
            return h
        }
        )),
        n.d(t, "k", (function() {
            return b
        }
        )),
        n.d(t, "d", (function() {
            return m
        }
        )),
        n.d(t, "i", (function() {
            return v
        }
        )),
        n.d(t, "D", (function() {
            return y
        }
        )),
        n.d(t, "E", (function() {
            return O
        }
        )),
        n.d(t, "C", (function() {
            return j
        }
        )),
        n.d(t, "a", (function() {
            return C
        }
        )),
        n.d(t, "b", (function() {
            return x
        }
        )),
        n.d(t, "j", (function() {
            return w
        }
        )),
        n.d(t, "f", (function() {
            return k
        }
        )),
        n.d(t, "g", (function() {
            return P
        }
        )),
        n.d(t, "w", (function() {
            return _
        }
        )),
        n.d(t, "x", (function() {
            return L
        }
        )),
        n.d(t, "v", (function() {
            return T
        }
        )),
        n.d(t, "h", (function() {
            return S
        }
        )),
        n.d(t, "t", (function() {
            return N
        }
        )),
        n.d(t, "l", (function() {
            return I
        }
        )),
        n.d(t, "s", (function() {
            return A
        }
        )),
        n.d(t, "z", (function() {
            return B
        }
        )),
        n.d(t, "o", (function() {
            return D
        }
        )),
        n.d(t, "n", (function() {
            return E
        }
        )),
        n.d(t, "y", (function() {
            return F
        }
        )),
        n.d(t, "r", (function() {
            return V
        }
        )),
        n.d(t, "q", (function() {
            return M
        }
        )),
        n.d(t, "F", (function() {
            return R
        }
        )),
        n.d(t, "u", (function() {
            return U
        }
        )),
        n.d(t, "e", (function() {
            return H
        }
        )),
        n.d(t, "B", (function() {
            return z
        }
        )),
        n.d(t, "A", (function() {
            return q
        }
        ));
        var a = n("2mXy")
          , i = n("FdF9")
          , s = n("WKRr")
          , c = n.n(s)
          , l = n("Qnqb")
          , u = n.n(l)
          , p = n("gm8T")
          , d = n("YSmr")
          , g = function(e, t) {
            t || (t = window.location.href),
            e = e.replace(/[\[\]]/g, "\\$&");
            var n = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)").exec(t);
            return n ? n[2] ? decodeURIComponent(n[2].replace(/\+/g, " ")) : "" : null
        }
          , f = function e(t, n) {
            if (void 0 === n && (n = 14),
            "object" != typeof t || null === t)
                return "number" == typeof t ? t / n + "rem" : "string" == typeof t && t.endsWith("px") ? parseFloat(t) / n + "rem" : t;
            for (var o = {}, r = 0, a = Object.entries(t); r < a.length; r++) {
                var i = a[r];
                o[i[0]] = e(i[1], n)
            }
            return o
        }
          , h = function e(t, n) {
            void 0 === n && (n = []);
            for (var o = null, r = 0; r < n.length; r++) {
                if (n[r].type === t)
                    return n[r];
                o || (o = e(t, n[r].children))
            }
            return o
        }
          , b = function e(t, n, o) {
            void 0 === n && (n = []),
            void 0 === o && (o = 0);
            for (var r = null, a = 0; a < n.length; a++) {
                if (n[a].id === t)
                    return n[a];
                r || (r = e(t, n[a].children, o + 1))
            }
            return r
        }
          , m = function e(t) {
            return t instanceof Array ? t.map((function(t) {
                return e(t)
            }
            )) : "object" == typeof t && null !== t ? Object.entries(t).reduce((function(t, n) {
                var a;
                return function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? o(Object(n), !0).forEach((function(t) {
                            r(e, t, n[t])
                        }
                        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }
                        ))
                    }
                    return e
                }({}, t, ((a = {})[n[0]] = e(n[1]),
                a))
            }
            ), {}) : t
        }
          , v = function(e) {
            return e ? 10 === e.length ? "+1" + e : "+" + e : ""
        }
          , y = function(e) {
            return !e || (/^\d{10}$/.test(e.trim()) || /^\d{11}$/.test(e.trim()))
        }
          , O = function(e) {
            return !e || /^\d{4}$/.test(e.trim())
        }
          , j = function(e) {
            return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(e)
        }
          , C = function(e) {
            return new Promise((function(t) {
                var n = document.getElementById("custom-styles");
                n && n.remove();
                var o = document.createElement("style");
                o.setAttribute("id", "custom-styles"),
                o.innerHTML = e,
                document.body.appendChild(o),
                t()
            }
            ))
        }
          , x = function(e) {
            return e ? " " + e.replace(".", "").replace("#", "") : ""
        }
          , w = function() {
            var e = navigator.languages && navigator.languages[0] || navigator.language || navigator.userLanguage;
            return e && (e = e.toUpperCase()).includes("-") && (e = e.replace("-", "_")),
            ["ZH_HANS", "ZH_HANT", "PT_BR", "PT_PT", "SR_CYRL", "SR_LATN"].includes(e) ? e : (e = e && e.length >= 2 ? e.substring(0, 2) : "EN",
            ["NO", "NB", "NN"].includes(e) ? "NO" : e)
        }
          , k = function(e) {
            return Object.values(e).reduce((function(e, t) {
                return t.error = t.required && "" === t.value,
                !t.error && e
            }
            ), !0)
        }
          , P = function(e) {
            return Object.values(e).reduce((function(e, t) {
                return t.error = null !== t.mustBeVal && t.value !== t.mustBeVal,
                !t.error && e
            }
            ), !0)
        }
          , _ = function(e) {
            return Object.entries(e).reduce((function(e, t) {
                return e + "&" + t[0] + "=" + t[1]
            }
            ), "?")
        }
          , L = function(e, t, n, o) {
            return e ? t.languages[t.selectedLanguage] && t.languages[t.selectedLanguage][n] ? t.languages[t.selectedLanguage][n] : t.languages[o] && t.languages[o][n] ? t.languages[o][n] : t[n] : t.languages[o] && t.languages[o][n] || t[n]
        }
          , T = function(e, t, n) {
            return t.languages[e] && void 0 !== t.languages[e][n] ? e : Object(i.useContext)(p.a)
        }
          , S = function(e) {
            void 0 === e && (e = "");
            var t = e.split(/\r\n|\r|\n/).map((function(e, t) {
                if (e)
                    return e.includes("<") && (e = e.replace(/(<([^>]+)>)/gi, "")),
                    "*" === e[0] && 0 !== t ? Object(a.h)("li", null, e.slice(1)) : Object(a.h)("div", null, 0 !== t && "" !== e.trim() && Object(a.h)("br", null), "" !== e.trim() && Object(a.h)("div", null, "*" === e[0] ? e.slice(1) : e))
            }
            ));
            return e ? t.reduce((function(e, n, o) {
                if (n && "div" === n.type) {
                    var r = t.slice(o + 1)
                      , i = r.map((function(e) {
                        return e && "div" === e.type
                    }
                    )).indexOf(!0);
                    e = [].concat(e, [n, Object(a.h)("ul", {
                        class: "description-bullet"
                    }, r.slice(0, -1 === i ? r.length + 1 : i))])
                }
                return e
            }
            ), []) : ""
        }
          , N = function(e, t, n) {
            return t.supportedLanguages && t.supportedLanguages.length ? t.supportedLanguages.includes(e) : !(!t.language && !t.defaultLanguage || e !== t.language && e !== t.defaultLanguage) || function e(t, n) {
                void 0 === n && (n = []);
                for (var o = !1, r = 0; r < n.length; r++) {
                    var a = n[r]
                      , i = a.settings;
                    if (i && i.languages && i.languages[t] && i.languages[t].text) {
                        if ("<p><br></p>" !== i.languages[t].text)
                            return !0
                    } else
                        o || (o = e(t, a.children))
                }
                return o
            }(e, n)
        }
          , I = function(e) {
            return function(t) {
                var n = function(e, t) {
                    return e.some((function(e) {
                        return e.id === t
                    }
                    )) ? t : {
                        CategoriesHeaderConsent: "CategoriesHeader",
                        CategoriesHeaderLegInt: "CategoriesHeader",
                        PurposesHeaderConsent: "PurposesHeader",
                        PurposesHeaderLegInt: "PurposesHeader",
                        PurposesDefinitionConsent: "PurposesDefinition",
                        PurposesDefinitionLegInt: "PurposesDefinition",
                        FeaturesHeaderConsent: "FeaturesHeader",
                        FeaturesHeaderLegInt: "FeaturesHeader",
                        FeaturesDefinitionConsent: "FeaturesDefinition",
                        FeaturesDefinitionLegInt: "FeaturesDefinition",
                        SpecialPurposesHeaderConsent: "SpecialPurposesHeader",
                        SpecialPurposesHeaderLegInt: "SpecialPurposesHeader",
                        SpecialPurposesDefinitionConsent: "SpecialPurposesDefinition",
                        SpecialPurposesDefinitionLegInt: "SpecialPurposesDefinition",
                        SpecialFeaturesHeaderConsent: "SpecialFeaturesHeader",
                        SpecialFeaturesHeaderLegInt: "SpecialFeaturesHeader",
                        SpecialFeaturesDefinitionConsent: "SpecialFeaturesDefinition",
                        SpecialFeaturesDefinitionLegInt: "SpecialFeaturesDefinition"
                    }[t]
                }(e, t)
                  , o = e.find((function(e) {
                    return e.id === n
                }
                ))
                  , r = e.map((function(e) {
                    return e.id
                }
                )).indexOf(n);
                if (!o)
                    throw Error("Bad ID: No component with ID " + t);
                return {
                    component: o,
                    path: JSON.stringify([0, r])
                }
            }
        }
          , A = function(e) {
            return " " === e || "Spacebar" === e || "Enter" === e || void 0 === e
        }
          , B = function() {
            var e = document.getElementsByClassName("focusable")
              , t = e[0]
              , n = e[e.length - 1]
              , o = "first-focusable-el";
            t && !t.className.includes(o) && (t.className += " " + o),
            n && !n.className.includes("last-focusable-el") && (n.className += " last-focusable-el");
            var r = document.getElementsByClassName("last-focusable-el");
            document.getElementsByClassName(o).length > 1 && document.getElementsByClassName(o)[0].focus(),
            r[0] && r[0].addEventListener("keydown", (function(e) {
                var t = "Tab" === e.code && !1 === e.shiftKey
                  , n = "ArrowRight" === e.code;
                if (e.target.className.includes("last-focusable-el") && (n || t))
                    try {
                        document.getElementsByClassName(o)[0].focus(),
                        e.preventDefault()
                    } catch (e) {}
            }
            )),
            t && t.addEventListener("keydown", (function(e) {
                var t = "Tab" === e.code && e.shiftKey;
                if (e.target.className.includes(o) && t)
                    try {
                        document.getElementsByClassName(o)[0].focus(),
                        e.preventDefault()
                    } catch (e) {}
            }
            ))
        }
          , D = function(e, t, n, o) {
            var r;
            return o ? r = e.previewLanguage || e.defaultLanguage : (r = e.useBrowserDefault ? w() : t || e.defaultLanguage,
            r = N(r, e, [n]) ? r : e.language || e.defaultLanguage || "EN")
        }
          , E = function(e, t, n) {
            var o = D(e, t, n)
              , r = e.iframeTitle && e.iframeTitle.replace(/^\<p\>/, "").replace(/\<\/p\>$/, "") || "SP Consent Message";
            return e.languages && e.languages[o] && e.languages[o].iframeTitle ? e.languages[o].iframeTitle.replace(/^\<p\>/, "").replace(/\<\/p\>$/, "") : r
        }
          , F = function() {
            console.log("Observing CLS (Cumulative Layout Shift)");
            var e = 0
              , t = 0
              , n = [];
            try {
                new PerformanceObserver((function(o) {
                    var r = o.getEntries()
                      , a = Array.isArray(r)
                      , i = 0;
                    for (r = a ? r : r[Symbol.iterator](); ; ) {
                        var s;
                        if (a) {
                            if (i >= r.length)
                                break;
                            s = r[i++]
                        } else {
                            if ((i = r.next()).done)
                                break;
                            s = i.value
                        }
                        var c = s;
                        if (!c.hadRecentInput)
                            t && c.startTime - n[n.length - 1].startTime < 1e3 && c.startTime - n[0].startTime < 5e3 ? (t += c.value,
                            n.push(c)) : (t = c.value,
                            n = [c]),
                            t > e && (e = t,
                            console.log("CLS:", e, n))
                    }
                }
                )).observe({
                    type: "layout-shift",
                    buffered: !0
                })
            } catch (e) {}
        }
          , V = function e(t, n) {
            return n.type === t || n.children.some((function(n) {
                return e(t, n)
            }
            ))
        }
          , M = function(e) {
            var t, n, o = g(e);
            "mms_origin" === e ? (t = d.i,
            n = "mms/v2") : "consent_origin" === e || "cmpv2_origin" === e ? (t = d.c,
            n = "consent/tcfv2") : "ccpa_origin" === e ? (t = d.a,
            n = null) : "usnat_origin" === e ? (t = d.l,
            n = null) : "usnat_origin_builder" === e ? (t = d.m,
            n = null) : "preferences_origin" === e ? (t = d.j,
            n = null) : "global_cmp_origin" === e ? (t = d.e,
            n = null) : "global_cmp_origin_builder" === e && (t = d.f,
            n = null);
            var r = window.location && "https://" + window.location.hostname;
            return n && (r += "/" + n),
            !o || o !== r && o !== r + "/" || (t = o),
            t
        }
          , R = function(e, t) {
            if (!e || !t)
                return !1;
            var n = u.a.decodeBase64(d.k)
              , o = new Uint8Array(t)
              , r = new Uint8Array(u.a.decodeUTF8(e));
            return c.a.sign.detached.verify(r, o, n)
        }
          , U = function(e) {
            var t = e.origin
              , n = [].concat(d.x);
            return n.includes(t) || {
                PRODUCTION: !0,
                DEV: !1,
                MMS_ORIGIN: "https://cdn.privacy-mgmt.com/mms/v2",
                CCPA_ORIGIN: "https://ccpa-service.sp-prod.net",
                CMPV2_ORIGIN: "https://cdn.privacy-mgmt.com/consent/tcfv2",
                USNAT_ORIGIN: "https://cdn.privacy-mgmt.com/usnat",
                USNAT_ORIGIN_BUILDER: "https://prod-usp-bg-origin.sp-prod.net/usnat",
                PREFERENCES_ORIGIN: "https://cdn.privacy-mgmt.com/preferences",
                GLOBAL_CMP_ORIGIN: "https://cdn.privacy-mgmt.com/global-cmp",
                GLOBAL_CMP_ORIGIN_BUILDER: "https://cdn.privacy-mgmt.com/global-cmp"
            } && "test" === {
                PRODUCTION: !0,
                DEV: !1,
                MMS_ORIGIN: "https://cdn.privacy-mgmt.com/mms/v2",
                CCPA_ORIGIN: "https://ccpa-service.sp-prod.net",
                CMPV2_ORIGIN: "https://cdn.privacy-mgmt.com/consent/tcfv2",
                USNAT_ORIGIN: "https://cdn.privacy-mgmt.com/usnat",
                USNAT_ORIGIN_BUILDER: "https://prod-usp-bg-origin.sp-prod.net/usnat",
                PREFERENCES_ORIGIN: "https://cdn.privacy-mgmt.com/preferences",
                GLOBAL_CMP_ORIGIN: "https://cdn.privacy-mgmt.com/global-cmp",
                GLOBAL_CMP_ORIGIN_BUILDER: "https://cdn.privacy-mgmt.com/global-cmp"
            }.NODE_ENV
        }
          , H = function(e, t, n, o) {
            var r = {
                name: "sp.userInteraction",
                messageId: e,
                type: t,
                timestamp: Date.now()
            };
            n && (r.keyCode = n),
            o && (r.ariaLabel = o),
            window.parent.postMessage(r, "*")
        }
          , z = function(e) {
            var t = document.createElement("div");
            return t.innerHTML = e,
            t.textContent || t.innerText || ""
        }
          , q = function(e, t) {
            var n = 0
              , o = null
              , r = 0
              , a = 0
              , i = function() {
                window.parent.postMessage({
                    name: "sp.userInactive",
                    messageId: e,
                    inactivitySeconds: t,
                    timestamp: Date.now()
                }, "*")
            }
              , s = function() {
                clearTimeout(o),
                o = setTimeout(i, 1e3 * t)
            }
              , c = function() {
                var e = Date.now();
                e - n >= 1e3 && (n = e,
                s())
            }
              , l = function() {
                s()
            }
              , u = function() {
                s()
            }
              , p = function(e) {
                var t = e.touches[0];
                r = t.clientX,
                a = t.clientY
            }
              , d = function(e) {
                var t = e.changedTouches[0]
                  , n = t.clientY - a
                  , o = Math.abs(t.clientX - r)
                  , i = Math.abs(n);
                Math.max(o, i) > 30 && s()
            };
            return document.addEventListener("scroll", c, !0),
            document.addEventListener("click", l),
            document.addEventListener("keydown", u),
            document.addEventListener("touchstart", p),
            document.addEventListener("touchend", d),
            s(),
            function() {
                clearTimeout(o),
                document.removeEventListener("scroll", c, !0),
                document.removeEventListener("click", l),
                document.removeEventListener("keydown", u),
                document.removeEventListener("touchstart", p),
                document.removeEventListener("touchend", d)
            }
        }
    },
    pMXK: function() {},
    pYey: function(e, t, n) {
        "use strict";
        (function(e) {
            function o(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }
                    ))),
                    n.push.apply(n, o)
                }
                return n
            }
            function r(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? o(Object(n), !0).forEach((function(t) {
                        a(e, t, n[t])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }
            function a(e, t, n) {
                return (t = function(e) {
                    var t = function(e, t) {
                        if ("object" != typeof e || !e)
                            return e;
                        var n = e[Symbol.toPrimitive];
                        if (void 0 !== n) {
                            var o = n.call(e, t || "default");
                            if ("object" != typeof o)
                                return o;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === t ? String : Number)(e)
                    }(e, "string");
                    return "symbol" == typeof t ? t : t + ""
                }(t))in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n,
                e
            }
            function i(e, t) {
                return (i = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t,
                    e
                }
                )(e, t)
            }
            n.d(t, "a", (function() {
                return d
            }
            ));
            var s = n("2mXy")
              , c = n("FdF9")
              , l = (n("j9y7"),
            n("BlOF"))
              , u = (n("pmfO"),
            n("3/o8"),
            n("o1E3"))
              , p = n("YkAe")
              , d = function(t) {
                function n() {
                    return t.apply(this, arguments) || this
                }
                var o, a;
                return a = t,
                (o = n).prototype = Object.create(a.prototype),
                o.prototype.constructor = o,
                i(o, a),
                n.prototype.render = function() {
                    var t = this
                      , n = r({}, this.props.pmData) || {}
                      , o = r({}, this.props.settings);
                    console.log("this.props.settingsprivacyPolicyText: ", this.props.settings.privacyPolicyText);
                    var a = this.props
                      , i = a.dev
                      , c = a.language
                      , d = a.isFirstLayer
                      , g = a.neutralPm
                      , f = a.settings
                      , h = a.convertToRem
                      , b = {};
                    b.minHeight = "auto" === o.minHeight.type ? "auto" : o.minHeight.value + o.minHeight.type,
                    b.maxHeight = "auto" === o.maxHeight.type ? "auto" : o.maxHeight.value + o.maxHeight.type;
                    var m = r({}, o.descriptionSpacing, {}, o.descriptionFont)
                      , v = r({}, o.vendorNameFont, {}, o.vendorNameSpacing)
                      , y = Object(u.x)(Boolean(i), o, "privacyPolicyText", c)
                      , O = r({}, o.privacyPolicyNameFont, {}, o.privacyPolicyNameSpacing)
                      , j = h ? Object(u.c)(m) : m
                      , C = h ? Object(u.c)(v) : v
                      , x = h ? Object(u.c)(O) : O
                      , w = {};
                    return w.minHeight = "auto" === o.minHeight.type ? "auto" : o.minHeight.value + o.minHeight.type,
                    w.maxHeight = "auto" === o.maxHeight.type ? "auto" : o.maxHeight.value + o.maxHeight.type,
                    n.vendors && n.vendors.length > 0 && n.vendors.map((function(n) {
                        return Object(s.h)(p.a, {
                            key: "vendor-" + n._id,
                            settings: f,
                            name: Object(s.h)(e, null, Object(s.h)("div", {
                                className: "vendor-name",
                                style: C
                            }, n.name), n.policyUrl ? Object(s.h)(e, null, Object(s.h)("span", {
                                style: x
                            }, y), Object(s.h)(l.a, {
                                vendor: n,
                                arrowIconColor: f.arrowIconColor,
                                convertToRem: h
                            })) : null),
                            accessName: n.name,
                            description: n.description,
                            child: "vendor",
                            language: c,
                            value: n,
                            content: Object(s.h)("div", {
                                style: j
                            }, n.description),
                            toggle: t.props.toggleVendor,
                            updateMe: t.state.forceUpdate,
                            dev: i,
                            isFirstLayer: d,
                            neutralPm: g,
                            convertToRem: h
                        })
                    }
                    ))
                }
                ,
                n
            }(c.Component)
        }
        ).call(this, n("2mXy").Fragment)
    },
    pmfO: function() {},
    qD70: function() {},
    sSoO: function(e, t, n) {
        "use strict";
        function o(e, t) {
            return (o = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        n.d(t, "a", (function() {
            return s
        }
        ));
        var r = n("2mXy")
          , a = n("FdF9")
          , i = n("o1E3")
          , s = function(e) {
            function t() {
                for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++)
                    o[r] = arguments[r];
                return (t = e.call.apply(e, [this].concat(o)) || this).state = {
                    isPurModelChecked: !1,
                    toggleDisplay: !0
                },
                t.toggle = function(e) {
                    var n = t.props
                      , o = n.child
                      , r = n.value
                      , a = n.consentType
                      , i = void 0 !== e ? e : !t.props.checked;
                    "purposes" === o || "features" === o ? (t.props.toggle(r._id, o, i, n.vendors, t.props.legInt),
                    t.setState({
                        checked: i
                    })) : "vendors" === o ? (t.props.toggle(r.vendorId, i, "consent" === a ? "active" : a),
                    t.setState({
                        checked: i
                    })) : "stacks" === o && (t.props.toggle(r._id, i),
                    t.setState({
                        checked: i
                    }))
                }
                ,
                t.componentDidMount = function() {
                    t.props.usePurModel && "legInt" !== t.props.consentType && "all" !== t.props.consentType && t.toggle(!0)
                }
                ,
                t.componentDidUpdate = function(e) {
                    t.props.usePurModel !== e.usePurModel && t.setState({
                        isPurModelChecked: t.props.usePurModel,
                        toggleDisplay: !t.state.toggleDisplay
                    }, (function() {
                        null !== t.props.value.legInt && t.toggle(t.state.isPurModelChecked)
                    }
                    ))
                }
                ,
                t
            }
            var n, a;
            return a = e,
            (n = t).prototype = Object.create(a.prototype),
            n.prototype.constructor = n,
            o(n, a),
            t.prototype.render = function() {
                var e = this
                  , t = this.props
                  , n = t.checked
                  , o = t.locked
                  , a = t.partialConsent
                  , s = t.dev
                  , c = t.settings
                  , l = t.language
                  , u = n ? a ? t.neutralColor : t.color : t.offColor
                  , p = Object(i.x)(Boolean(s), c, "toggleOnText", l)
                  , d = Object(i.x)(Boolean(s), c, "toggleOffText", l)
                  , g = p || d ? " has-text" : ""
                  , f = n ? "pm-switch checked" + g : "pm-switch" + g
                  , h = "vendors" === this.props.child && null !== this.props.value.legInt && "legInt" === this.props.consentType || this.props.usePurModel && "legInt" === this.props.consentType || !this.props.usePurModel || this.state.toggleDisplay && !this.props.usePurModel ? "inline-flex" : "none";
                return Object(r.h)("button", {
                    tabIndex: "0",
                    type: "button",
                    role: "switch",
                    "aria-checked": n ? "true" : "false",
                    className: (o ? f + " locked" : f) + (a ? " partial" : ""),
                    onClick: function(t) {
                        t.stopPropagation(),
                        e.toggle(!n)
                    },
                    style: {
                        display: h
                    }
                }, Object(r.h)("span", {
                    className: n ? "slider round is-checked" : "slider round",
                    style: {
                        backgroundColor: u
                    }
                }, a ? null : n ? p : d))
            }
            ,
            t
        }(a.Component)
    },
    t0Ov: function(e, t, n) {
        "use strict";
        (function(e) {
            n.d(t, "a", (function() {
                return d
            }
            ));
            var o = n("RSKk")
              , r = n("KOA+")
              , a = n("sSoO")
              , i = n("Pidg")
              , s = n.n(i)
              , c = n("o1E3")
              , l = n("KuTY")
              , u = n("d1XD")
              , p = function(t) {
                var n = t.style
                  , r = t.arrowIconColor;
                return e("a", {
                    style: void 0 === n ? {} : n,
                    href: t.url,
                    target: "_blank",
                    className: "vendor-tag linked",
                    onKeyDown: function(e) {
                        return e.stopPropagation()
                    }
                }, e("span", null, t.vendorName), e("img", {
                    style: Object(o.a)(r),
                    src: s.a,
                    alt: ""
                }))
            }
              , d = function(t) {
                var n = t.vendor
                  , o = t.settings
                  , i = t.language
                  , s = t.dev
                  , d = t.accordionOpen
                  , g = t.toggleVendor
                  , f = t.usePurModel
                  , h = t.hideAppleToggle
                  , b = t.neutralPm
                  , m = Object(c.x)(Boolean(s), o, "cookieText", i)
                  , v = Object(c.x)(Boolean(s), o, "tableCategoryText", i)
                  , y = Object(c.x)(Boolean(s), o, "tableCookieText", i)
                  , O = Object(c.x)(Boolean(s), o, "tableDomainText", i)
                  , j = Object(c.x)(Boolean(s), o, "tableDurationText", i)
                  , C = Object(c.x)(Boolean(s), o, "iabConsent", i)
                  , x = Object(c.x)(Boolean(s), o, "iabLegInt", i)
                  , w = Object(c.x)(Boolean(s), o, "iabFeatures", i)
                  , k = Object(c.x)(Boolean(s), o, "iabSpecialFeatures", i)
                  , P = Object(c.x)(Boolean(s), o, "iabSpecialPurposes", i)
                  , _ = Object(c.x)(Boolean(s), o, "purposesTableHeaderText", i)
                  , L = Object(c.x)(Boolean(s), o, "retentionTableHeaderText", i)
                  , T = Object(c.x)(Boolean(s), o, "purposeTitleText", i)
                  , S = Object(c.x)(Boolean(s), o, "privacyPolicyTitleText", i)
                  , N = Object(c.x)(Boolean(s), o, "legitIntUrlTitleText", i)
                  , I = Object(c.x)(Boolean(s), o, "dataCategoriesTitleText", i)
                  , A = Object(c.x)(Boolean(s), o, "disclosurePurposes", i)
                  , B = n.consentCategories.some((function(e) {
                    return e.retention
                }
                ))
                  , D = n.legIntCategories.some((function(e) {
                    return e.retention
                }
                ))
                  , E = !!n.iabSpecialPurposesObjs;
                return e("div", {
                    className: "vendor-content"
                }, n.description && e("p", {
                    className: "pm-sub-p",
                    dangerouslySetInnerHTML: {
                        __html: Object(r.a)({
                            html: n.description
                        })
                    }
                }), n.cookieHeader && e("div", {
                    className: "vendor-cookie-header"
                }, n.cookieHeader), e("div", {
                    style: {
                        flexDirection: "row",
                        alignItems: "center"
                    }
                }, e("div", {
                    tabindex: "0",
                    style: {
                        marginRight: 5
                    }
                }, S, ":"), e(p, {
                    vendorName: n.name,
                    url: n.policyUrl,
                    tabbable: d,
                    style: {
                        marginTop: 10
                    },
                    arrowIconColor: o.arrowIconColor
                })), n.legIntUrl && e("div", {
                    style: {
                        flexDirection: "row",
                        alignItems: "center"
                    }
                }, e("div", {
                    tabindex: "0",
                    style: {
                        marginRight: 5
                    }
                }, N, ":"), e(p, {
                    vendorName: n.name,
                    url: n.legIntUrl,
                    tabbable: d,
                    style: {
                        marginTop: 10
                    },
                    arrowIconColor: o.arrowIconColor
                })), e("h2", {
                    tabindex: "0"
                }, T), e("div", null, n.consentCategories.length > 0 && e("div", {
                    className: "vendor-info"
                }, !b && e("div", {
                    className: "vendor-header-container"
                }, e("div", {
                    className: "info-title"
                }, C), e("div", null, e(a.a, {
                    consentType: "consent",
                    child: "vendors",
                    value: n,
                    checked: n.active,
                    toggle: g,
                    dev: s,
                    settings: o,
                    language: i,
                    usePurModel: f
                }))), B ? e("table", {
                    style: {
                        border: "1px solid #00000038",
                        padding: 10,
                        borderRadius: 5,
                        width: "100%"
                    }
                }, e("tr", null, e("th", {
                    scope: "col",
                    style: {
                        textAlign: "left"
                    }
                }, _), e("th", {
                    scope: "col",
                    style: {
                        textAlign: "center"
                    }
                }, L)), n.consentCategories.map((function(t) {
                    return e("tr", null, e("td", null, t.name), e("td", {
                        style: {
                            textAlign: "center",
                            minWidth: 100
                        }
                    }, t.retention || "-"))
                }
                ))) : e("div", {
                    tabindex: "0",
                    className: "vendor-info"
                }, n.consentCategories.map((function(t) {
                    return e("div", null, "• ", t.name)
                }
                )))), n.legIntCategories.length > 0 && e("div", {
                    className: "vendor-info"
                }, e("div", {
                    className: "vendor-header-container"
                }, e("div", {
                    className: "info-title"
                }, x), e("div", null, e(a.a, {
                    consentType: "legInt",
                    child: "vendors",
                    value: n,
                    checked: n.legInt,
                    toggle: g,
                    dev: s,
                    settings: o,
                    language: i,
                    locked: h,
                    usePurModel: f
                }))), D ? e("table", {
                    style: {
                        border: "1px solid #00000038",
                        padding: 10,
                        borderRadius: 5,
                        width: "100%"
                    }
                }, e("tr", null, e("th", {
                    scope: "col",
                    style: {
                        textAlign: "left"
                    }
                }, _), e("th", {
                    scope: "col",
                    style: {
                        textAlign: "center"
                    }
                }, L)), n.legIntCategories.map((function(t) {
                    return e("tr", null, e("td", null, t.name), e("td", {
                        style: {
                            textAlign: "center",
                            minWidth: 100
                        }
                    }, t.retention || "-"))
                }
                ))) : e("div", {
                    className: "vendor-info"
                }, n.legIntCategories.map((function(t) {
                    return e("div", null, "• ", t.name)
                }
                )))), n.iabSpecialPurposes.length > 0 && e("div", {
                    className: "vendor-info"
                }, e("div", {
                    tabindex: "0",
                    className: "info-title"
                }, P), E ? e("table", {
                    style: {
                        border: "1px solid #00000038",
                        padding: 10,
                        borderRadius: 5,
                        width: "100%"
                    }
                }, e("tr", null, e("th", {
                    scope: "col",
                    tabindex: "0",
                    style: {
                        textAlign: "left"
                    }
                }, _), e("th", {
                    scope: "col",
                    tabindex: "0",
                    style: {
                        textAlign: "center"
                    }
                }, L)), n.iabSpecialPurposesObjs.map((function(t) {
                    return e("tr", null, e("td", {
                        tabindex: "0"
                    }, t.name), e("td", {
                        tabindex: "0",
                        style: {
                            textAlign: "center",
                            minWidth: 100
                        }
                    }, t.retention || "-"))
                }
                ))) : e("div", {
                    className: "vendor-info"
                }, n.iabSpecialPurposes.map((function(t) {
                    return e("div", {
                        tabindex: "0"
                    }, "• ", t.name || t)
                }
                )))), n.disclosureOnlyCategories.length > 0 && e("div", {
                    className: "vendor-info"
                }, e("div", {
                    className: "vendor-header-container"
                }, e("div", {
                    tabindex: "0",
                    className: "info-title"
                }, A)), e("div", null, n.disclosureOnlyCategories.map((function(t) {
                    return e("div", {
                        tabindex: "0"
                    }, "• ", t.name)
                }
                )))), n.iabFeatures.length > 0 && e("div", {
                    className: "vendor-info"
                }, e("div", {
                    tabindex: "0",
                    className: "info-title"
                }, w), n.iabFeatures.map((function(t) {
                    return e("div", {
                        tabindex: "0"
                    }, "• ", t.name || t)
                }
                ))), n.iabSpecialFeatures.length > 0 && e("div", {
                    className: "vendor-info"
                }, e("div", {
                    tabindex: "0",
                    className: "info-title"
                }, k), n.iabSpecialFeatures.map((function(t) {
                    return e("div", {
                        tabindex: "0"
                    }, "• ", t.name || t)
                }
                )))), n.iabDataCategories && n.iabDataCategories.length ? e("div", null, e("h3", {
                    tabindex: "0"
                }, I), n.iabDataCategories.map((function(t, o) {
                    return e(u.a, {
                        dataCategory: t,
                        first: 0 === o,
                        last: o === n.iabDataCategories.length - 1
                    })
                }
                ))) : null, n.cookies.length > 0 && e("div", {
                    className: "vendor-cookies"
                }, e("div", {
                    className: "cookie-title"
                }, m), e("table", {
                    tabindex: "0",
                    className: "tvtbl"
                }, e("tr", null, e("th", {
                    scope: "col",
                    tabindex: "0"
                }, y), e("th", {
                    scope: "col",
                    tabindex: "0"
                }, O), e("th", {
                    scope: "col",
                    tabindex: "0"
                }, v), e("th", {
                    scope: "col",
                    tabindex: "0"
                }, j)), n.cookies.length > 0 && e(l.a, {
                    cookies: n.cookies
                }))))
            }
        }
        ).call(this, n("2mXy").h)
    },
    wl5O: function() {},
    xc8A: function(e) {
        !function(t) {
            "use strict";
            function n(e) {
                var t = e.getBoundingClientRect()
                  , n = {
                    left: t.left,
                    top: t.top,
                    right: t.right,
                    bottom: t.bottom,
                    width: t.width,
                    height: t.height
                };
                return n.element = e,
                n.center = {
                    x: n.left + Math.floor(n.width / 2),
                    y: n.top + Math.floor(n.height / 2)
                },
                n.center.left = n.center.right = n.center.x,
                n.center.top = n.center.bottom = n.center.y,
                n
            }
            function o(e, t, n) {
                for (var o = [[], [], [], [], [], [], [], [], []], r = 0; r < e.length; r++) {
                    var a, i = e[r], s = i.center;
                    if (o[a = 3 * (s.y < t.top ? 0 : s.y <= t.bottom ? 1 : 2) + (s.x < t.left ? 0 : s.x <= t.right ? 1 : 2)].push(i),
                    -1 !== [0, 2, 6, 8].indexOf(a)) {
                        var c = n;
                        i.left <= t.right - t.width * c && (2 === a ? o[1].push(i) : 8 === a && o[7].push(i)),
                        i.right >= t.left + t.width * c && (0 === a ? o[1].push(i) : 6 === a && o[7].push(i)),
                        i.top <= t.bottom - t.height * c && (6 === a ? o[3].push(i) : 8 === a && o[5].push(i)),
                        i.bottom >= t.top + t.height * c && (0 === a ? o[3].push(i) : 2 === a && o[5].push(i))
                    }
                }
                return o
            }
            function r(e, t, r, a) {
                if (!(e && t && r && r.length))
                    return null;
                for (var i = [], s = 0; s < r.length; s++) {
                    var c = n(r[s]);
                    c && i.push(c)
                }
                if (!i.length)
                    return null;
                var l = n(e);
                if (!l)
                    return null;
                var u, p = function(e) {
                    return {
                        nearPlumbLineIsBetter: function(t) {
                            var n;
                            return (n = t.center.x < e.center.x ? e.center.x - t.right : t.left - e.center.x) < 0 ? 0 : n
                        },
                        nearHorizonIsBetter: function(t) {
                            var n;
                            return (n = t.center.y < e.center.y ? e.center.y - t.bottom : t.top - e.center.y) < 0 ? 0 : n
                        },
                        nearTargetLeftIsBetter: function(t) {
                            var n;
                            return (n = t.center.x < e.center.x ? e.left - t.right : t.left - e.left) < 0 ? 0 : n
                        },
                        nearTargetTopIsBetter: function(t) {
                            var n;
                            return (n = t.center.y < e.center.y ? e.top - t.bottom : t.top - e.top) < 0 ? 0 : n
                        },
                        topIsBetter: function(e) {
                            return e.top
                        },
                        bottomIsBetter: function(e) {
                            return -1 * e.bottom
                        },
                        leftIsBetter: function(e) {
                            return e.left
                        },
                        rightIsBetter: function(e) {
                            return -1 * e.right
                        }
                    }
                }(l), d = o(i, l, a.straightOverlapThreshold), g = o(d[4], l.center, a.straightOverlapThreshold);
                switch (t) {
                case "left":
                    u = [{
                        group: g[0].concat(g[3]).concat(g[6]),
                        distance: [p.nearPlumbLineIsBetter, p.topIsBetter]
                    }, {
                        group: d[3],
                        distance: [p.nearPlumbLineIsBetter, p.topIsBetter]
                    }, {
                        group: d[0].concat(d[6]),
                        distance: [p.nearHorizonIsBetter, p.rightIsBetter, p.nearTargetTopIsBetter]
                    }];
                    break;
                case "right":
                    u = [{
                        group: g[2].concat(g[5]).concat(g[8]),
                        distance: [p.nearPlumbLineIsBetter, p.topIsBetter]
                    }, {
                        group: d[5],
                        distance: [p.nearPlumbLineIsBetter, p.topIsBetter]
                    }, {
                        group: d[2].concat(d[8]),
                        distance: [p.nearHorizonIsBetter, p.leftIsBetter, p.nearTargetTopIsBetter]
                    }];
                    break;
                case "up":
                    u = [{
                        group: g[0].concat(g[1]).concat(g[2]),
                        distance: [p.nearHorizonIsBetter, p.leftIsBetter]
                    }, {
                        group: d[1],
                        distance: [p.nearHorizonIsBetter, p.leftIsBetter]
                    }, {
                        group: d[0].concat(d[2]),
                        distance: [p.nearPlumbLineIsBetter, p.bottomIsBetter, p.nearTargetLeftIsBetter]
                    }];
                    break;
                case "down":
                    u = [{
                        group: g[6].concat(g[7]).concat(g[8]),
                        distance: [p.nearHorizonIsBetter, p.leftIsBetter]
                    }, {
                        group: d[7],
                        distance: [p.nearHorizonIsBetter, p.leftIsBetter]
                    }, {
                        group: d[6].concat(d[8]),
                        distance: [p.nearPlumbLineIsBetter, p.topIsBetter, p.nearTargetLeftIsBetter]
                    }];
                    break;
                default:
                    return null
                }
                a.straightOnly && u.pop();
                var f = function(e) {
                    for (var t = null, n = 0; n < e.length; n++)
                        if (e[n].group.length) {
                            t = e[n];
                            break
                        }
                    if (!t)
                        return null;
                    var o = t.distance;
                    return t.group.sort((function(e, t) {
                        for (var n = 0; n < o.length; n++) {
                            var r = o[n]
                              , a = r(e) - r(t);
                            if (a)
                                return a
                        }
                        return 0
                    }
                    )),
                    t.group
                }(u);
                if (!f)
                    return null;
                var h = null;
                if (a.rememberSource && a.previous && a.previous.destination === e && a.previous.reverse === t)
                    for (var b = 0; b < f.length; b++)
                        if (f[b].element === a.previous.target) {
                            h = f[b].element;
                            break
                        }
                return h || (h = f[0].element),
                h
            }
            function a() {
                for (var e; e = I + String(++A),
                E[e]; )
                    ;
                return e
            }
            function i(e) {
                return t ? t(e).get() : "string" == typeof e ? [].slice.call(document.querySelectorAll(e)) : "object" == typeof e && e.length ? [].slice.call(e) : "object" == typeof e && 1 === e.nodeType ? [e] : []
            }
            function s(e, n) {
                return t ? t(e).is(n) : "string" == typeof n ? U.call(e, n) : "object" == typeof n && n.length ? n.indexOf(e) >= 0 : "object" == typeof n && 1 === n.nodeType && e === n
            }
            function c() {
                var e = document.activeElement;
                if (e && e !== document.body)
                    return e
            }
            function l(e) {
                e = e || {};
                for (var t = 1; t < arguments.length; t++)
                    if (arguments[t])
                        for (var n in arguments[t])
                            arguments[t].hasOwnProperty(n) && void 0 !== arguments[t][n] && (e[n] = arguments[t][n]);
                return e
            }
            function u(e, t) {
                Array.isArray(t) || (t = [t]);
                for (var n, o = 0; o < t.length; o++)
                    (n = e.indexOf(t[o])) >= 0 && e.splice(n, 1);
                return e
            }
            function p(e, t, n) {
                if (!e || !t || !E[t] || E[t].disabled)
                    return !1;
                if (e.offsetWidth <= 0 && e.offsetHeight <= 0 || e.hasAttribute("disabled"))
                    return !1;
                if (n && !s(e, E[t].selector))
                    return !1;
                if ("function" == typeof E[t].navigableFilter) {
                    if (!1 === E[t].navigableFilter(e, t))
                        return !1
                } else if ("function" == typeof L.navigableFilter && !1 === L.navigableFilter(e, t))
                    return !1;
                return !0
            }
            function d(e) {
                for (var t in E)
                    if (!E[t].disabled && s(e, E[t].selector))
                        return t
            }
            function g(e) {
                return i(E[e].selector).filter((function(t) {
                    return p(t, e)
                }
                ))
            }
            function f(e) {
                var n = E[e].defaultElement;
                return n ? ("string" == typeof n ? n = i(n)[0] : t && n instanceof t && (n = n.get(0)),
                p(n, e, !0) ? n : null) : null
            }
            function h(e) {
                var t = E[e].lastFocusedElement;
                return p(t, e, !0) ? t : null
            }
            function b(e, t, n, o) {
                arguments.length < 4 && (o = !0);
                var r = document.createEvent("CustomEvent");
                return r.initCustomEvent(N + t, !0, o, n),
                e.dispatchEvent(r)
            }
            function m(e, t, n) {
                if (!e)
                    return !1;
                var o = c()
                  , r = function() {
                    o && o.blur(),
                    e.focus(),
                    v(e, t)
                };
                if (R)
                    return r(),
                    !0;
                if (R = !0,
                D)
                    return r(),
                    R = !1,
                    !0;
                if (o) {
                    var a = {
                        nextElement: e,
                        nextSectionId: t,
                        direction: n,
                        native: !1
                    };
                    if (!b(o, "willunfocus", a))
                        return R = !1,
                        !1;
                    o.blur(),
                    b(o, "unfocused", a, !1)
                }
                var i = {
                    previousElement: o,
                    sectionId: t,
                    direction: n,
                    native: !1
                };
                return b(e, "willfocus", i) ? (e.focus(),
                b(e, "focused", i, !1),
                R = !1,
                v(e, t),
                !0) : (R = !1,
                !1)
            }
            function v(e, t) {
                t || (t = d(e)),
                t && (E[t].lastFocusedElement = e,
                M = t)
            }
            function y(e, t) {
                if ("@" == e.charAt(0))
                    return 1 == e.length ? O() : O(e.substr(1));
                var n = i(e)[0];
                if (n) {
                    var o = d(n);
                    if (p(n, o))
                        return m(n, o, t)
                }
                return !1
            }
            function O(e) {
                var t = []
                  , n = function(e) {
                    e && t.indexOf(e) < 0 && E[e] && !E[e].disabled && t.push(e)
                };
                e ? n(e) : (n(V),
                n(M),
                Object.keys(E).map(n));
                for (var o = 0; o < t.length; o++) {
                    var r, a = t[o];
                    if (r = "last-focused" == E[a].enterTo ? h(a) || f(a) || g(a)[0] : f(a) || h(a) || g(a)[0])
                        return m(r, a)
                }
                return !1
            }
            function j(e, t) {
                b(e, "navigatefailed", {
                    direction: t
                }, !1)
            }
            function C(e, n) {
                if (E[e].leaveFor && void 0 !== E[e].leaveFor[n]) {
                    var o = E[e].leaveFor[n];
                    if ("string" == typeof o)
                        return "" === o ? null : y(o, n);
                    t && o instanceof t && (o = o.get(0));
                    var r = d(o);
                    if (p(o, r))
                        return m(o, r, n)
                }
                return !1
            }
            function x(e, t, n) {
                var o = t.getAttribute("data-sn-" + e);
                if ("string" == typeof o)
                    return !("" === o || !y(o, e)) || (j(t, e),
                    !1);
                var a = {}
                  , i = [];
                for (var s in E)
                    a[s] = g(s),
                    i = i.concat(a[s]);
                var c, p = l({}, L, E[n]);
                if ("self-only" == p.restrict || "self-first" == p.restrict) {
                    var b = a[n];
                    (c = r(t, e, u(b, t), p)) || "self-first" != p.restrict || (c = r(t, e, u(i, b), p))
                } else
                    c = r(t, e, u(i, t), p);
                if (c) {
                    E[n].previous = {
                        target: t,
                        destination: c,
                        reverse: S[e]
                    };
                    var v = d(c);
                    if (n != v) {
                        var O, x = C(n, e);
                        if (x)
                            return !0;
                        if (null === x)
                            return j(t, e),
                            !1;
                        switch (E[v].enterTo) {
                        case "last-focused":
                            O = h(v) || f(v);
                            break;
                        case "default-element":
                            O = f(v)
                        }
                        O && (c = O)
                    }
                    return m(c, v, e)
                }
                return !!C(n, e) || (j(t, e),
                !1)
            }
            function w(e) {
                if (!(!F || D || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey)) {
                    var t, n = function() {
                        return e.preventDefault(),
                        e.stopPropagation(),
                        !1
                    }, o = T[e.keyCode];
                    if (!o)
                        return 13 == e.keyCode && (t = c()) && d(t) && !b(t, "enter-down") ? n() : void 0;
                    if (!(t = c()) && (M && (t = h(M)),
                    !t))
                        return O(),
                        n();
                    var r = d(t);
                    if (r)
                        return b(t, "willmove", {
                            direction: o,
                            sectionId: r,
                            cause: "keydown"
                        }) && x(o, t, r),
                        n()
                }
            }
            function k(e) {
                if (!(e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) && !D && F && 13 == e.keyCode) {
                    var t = c();
                    t && d(t) && (b(t, "enter-up") || (e.preventDefault(),
                    e.stopPropagation()))
                }
            }
            function P(e) {
                var t = e.target;
                if (t !== window && t !== document && F && !R) {
                    var n = d(t);
                    if (n) {
                        if (D)
                            return void v(t, n);
                        var o = {
                            sectionId: n,
                            native: !0
                        };
                        b(t, "willfocus", o) ? (b(t, "focused", o, !1),
                        v(t, n)) : (R = !0,
                        t.blur(),
                        R = !1)
                    }
                }
            }
            function _(e) {
                var t = e.target;
                if (t !== window && t !== document && !D && F && !R && d(t)) {
                    var n = {
                        native: !0
                    };
                    b(t, "willunfocus", n) ? b(t, "unfocused", n, !1) : (R = !0,
                    setTimeout((function() {
                        t.focus(),
                        R = !1
                    }
                    )))
                }
            }
            var L = {
                selector: "",
                straightOnly: !1,
                straightOverlapThreshold: .5,
                rememberSource: !1,
                disabled: !1,
                defaultElement: "",
                enterTo: "",
                leaveFor: null,
                restrict: "self-first",
                tabIndexIgnoreList: "a, input, select, textarea, button, iframe, [contentEditable=true]",
                navigableFilter: null
            }
              , T = {
                37: "left",
                38: "up",
                39: "right",
                40: "down"
            }
              , S = {
                left: "right",
                up: "down",
                right: "left",
                down: "up"
            }
              , N = "sn:"
              , I = "section-"
              , A = 0
              , B = !1
              , D = !1
              , E = {}
              , F = 0
              , V = ""
              , M = ""
              , R = !1
              , U = Element.prototype.matches || Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || function(e) {
                var t = (this.parentNode || this.document).querySelectorAll(e);
                return [].slice.call(t).indexOf(this) >= 0
            }
              , H = {
                init: function() {
                    B || (window.addEventListener("keydown", w),
                    window.addEventListener("keyup", k),
                    window.addEventListener("focus", P, !0),
                    window.addEventListener("blur", _, !0),
                    B = !0)
                },
                uninit: function() {
                    window.removeEventListener("blur", _, !0),
                    window.removeEventListener("focus", P, !0),
                    window.removeEventListener("keyup", k),
                    window.removeEventListener("keydown", w),
                    H.clear(),
                    A = 0,
                    B = !1
                },
                clear: function() {
                    E = {},
                    F = 0,
                    V = "",
                    M = "",
                    R = !1
                },
                set: function() {
                    var e, t;
                    if ("object" == typeof arguments[0])
                        t = arguments[0];
                    else {
                        if ("string" != typeof arguments[0] || "object" != typeof arguments[1])
                            return;
                        if (t = arguments[1],
                        !E[e = arguments[0]])
                            throw new Error('Section "' + e + "\" doesn't exist!")
                    }
                    for (var n in t)
                        void 0 !== L[n] && (e ? E[e][n] = t[n] : void 0 !== t[n] && (L[n] = t[n]));
                    e && (E[e] = l({}, E[e]))
                },
                add: function() {
                    var e, t = {};
                    if ("object" == typeof arguments[0] ? t = arguments[0] : "string" == typeof arguments[0] && "object" == typeof arguments[1] && (e = arguments[0],
                    t = arguments[1]),
                    e || (e = "string" == typeof t.id ? t.id : a()),
                    E[e])
                        throw new Error('Section "' + e + '" has already existed!');
                    return E[e] = {},
                    F++,
                    H.set(e, t),
                    e
                },
                remove: function(e) {
                    if (!e || "string" != typeof e)
                        throw new Error('Please assign the "sectionId"!');
                    return !!E[e] && (E[e] = void 0,
                    E = l({}, E),
                    F--,
                    M === e && (M = ""),
                    !0)
                },
                disable: function(e) {
                    return !!E[e] && (E[e].disabled = !0,
                    !0)
                },
                enable: function(e) {
                    return !!E[e] && (E[e].disabled = !1,
                    !0)
                },
                pause: function() {
                    D = !0
                },
                resume: function() {
                    D = !1
                },
                focus: function(e, n) {
                    var o = !1;
                    void 0 === n && "boolean" == typeof e && (n = e,
                    e = void 0);
                    var r = !D && n;
                    if (r && H.pause(),
                    e)
                        if ("string" == typeof e)
                            o = E[e] ? O(e) : y(e);
                        else {
                            t && e instanceof t && (e = e.get(0));
                            var a = d(e);
                            p(e, a) && (o = m(e, a))
                        }
                    else
                        o = O();
                    return r && H.resume(),
                    o
                },
                move: function(e, t) {
                    if (e = e.toLowerCase(),
                    !S[e])
                        return !1;
                    var n = t ? i(t)[0] : c();
                    if (!n)
                        return !1;
                    var o = d(n);
                    return !!o && (!!b(n, "willmove", {
                        direction: e,
                        sectionId: o,
                        cause: "api"
                    }) && x(e, n, o))
                },
                makeFocusable: function(e) {
                    var t = function(e) {
                        var t = void 0 !== e.tabIndexIgnoreList ? e.tabIndexIgnoreList : L.tabIndexIgnoreList;
                        i(e.selector).forEach((function(e) {
                            s(e, t) || e.getAttribute("tabindex") || e.setAttribute("tabindex", "-1")
                        }
                        ))
                    };
                    if (e) {
                        if (!E[e])
                            throw new Error('Section "' + e + "\" doesn't exist!");
                        t(E[e])
                    } else
                        for (var n in E)
                            t(E[n])
                },
                setDefaultSection: function(e) {
                    if (e) {
                        if (!E[e])
                            throw new Error('Section "' + e + "\" doesn't exist!");
                        V = e
                    } else
                        V = ""
                }
            };
            window.SpatialNavigation = H,
            e.exports = H,
            t && (t.SpatialNavigation = function() {
                if (H.init(),
                arguments.length > 0) {
                    if (t.isPlainObject(arguments[0]))
                        return H.add(arguments[0]);
                    if ("string" === t.type(arguments[0]) && t.isFunction(H[arguments[0]]))
                        return H[arguments[0]].apply(H, [].slice.call(arguments, 1))
                }
                return t.extend({}, H)
            }
            ,
            t.fn.SpatialNavigation = function() {
                var e;
                return (e = t.isPlainObject(arguments[0]) ? arguments[0] : {
                    id: arguments[0]
                }).selector = this,
                H.init(),
                e.id && H.remove(e.id),
                H.add(e),
                H.makeFocusable(e.id),
                this
            }
            )
        }(window.jQuery)
    },
    yJvR: function(e, t, n) {
        "use strict";
        function o(e, t) {
            return (o = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function r() {
            return (r = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n)
                        ({}).hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            }
            ).apply(null, arguments)
        }
        function a() {
            return (a = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n)
                        ({}).hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            }
            ).apply(null, arguments)
        }
        function i(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, o)
            }
            return n
        }
        function s(e, t, n) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" != typeof e || !e)
                        return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var o = n.call(e, t || "default");
                        if ("object" != typeof o)
                            return o;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" == typeof t ? t : t + ""
            }(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function c(e, t) {
            return (c = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        var l = n("2mXy")
          , u = n("FdF9")
          , p = n("d7zh")
          , d = n("G9YQ")
          , g = n("RSKk")
          , f = n("anj/")
          , h = n.n(f)
          , b = n("H6Cw")
          , m = n("MjMI")
          , v = n("o1E3")
          , y = n("YSmr")
          , O = function(e) {
            function t() {
                for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++)
                    o[r] = arguments[r];
                return (t = e.call.apply(e, [this].concat(o)) || this).state = {
                    filter: "",
                    selected: t.props.startWithLiToggled ? "li" : "consent"
                },
                t.updateFilter = function(e) {
                    return t.setState({
                        filter: e.target.value
                    })
                }
                ,
                t
            }
            var n, r;
            return r = e,
            (n = t).prototype = Object.create(r.prototype),
            n.prototype.constructor = n,
            o(n, r),
            t.prototype.render = function() {
                var e = this
                  , t = this.props
                  , n = t.vendors
                  , o = t.settings
                  , r = t.language
                  , a = t.dev
                  , i = t.usePurModel
                  , s = t.idfaStatus
                  , c = t.defaultConsentDisclosure
                  , u = this.state
                  , p = u.filter
                  , d = u.selected
                  , f = n.filter((function(e) {
                    return "consent" === d ? e.consentCategories.length : e.legIntCategories.length || e.disclosureOnlyCategories.length
                }
                )).filter((function(e) {
                    return "" === p || e.name.toLowerCase().indexOf(p.toLowerCase()) >= 0
                }
                ))
                  , O = Object(v.x)(Boolean(a), o, "searchText", r)
                  , j = Object(v.x)(Boolean(a), o, "otherText", r)
                  , C = Object(v.x)(Boolean(a), o, "otherLetter", r)
                  , x = Object(v.x)(Boolean(a), o, "vendorConsentText", r)
                  , w = Object(v.x)(Boolean(a), o, "vendorLiText", r)
                  , k = Object(v.x)(Boolean(a), o, "appleDataBrokerText", r)
                  , P = Object(v.x)(Boolean(a), o, "appleDataBrokerLetter", r)
                  , _ = Boolean(f.some((function(e) {
                    return e.isApple
                }
                )))
                  , L = Object(v.x)(Boolean(a), o, "customVendorLabel1Text", r)
                  , T = Object(v.x)(Boolean(a), o, "customVendorLabel2Text", r)
                  , S = Object(v.x)(Boolean(a), o, "customVendorLabel3Text", r)
                  , N = Object(v.x)(Boolean(a), o, "customVendorLabel1Letter", r)
                  , I = Object(v.x)(Boolean(a), o, "customVendorLabel2Letter", r)
                  , A = Object(v.x)(Boolean(a), o, "customVendorLabel3Letter", r)
                  , B = Boolean(f.some((function(e) {
                    return e.isCustomVendorLabel1
                }
                )))
                  , D = Boolean(f.some((function(e) {
                    return e.isCustomVendorLabel2
                }
                )))
                  , E = Boolean(f.some((function(e) {
                    return e.isCustomVendorLabel3
                }
                )))
                  , F = n.some((function(e) {
                    return e.legInt
                }
                ))
                  , V = Object(v.x)(Boolean(a), o, "consentDisclosure", r)
                  , M = Object(v.x)(Boolean(a), o, "vendorTitleText", r)
                  , R = Object(v.x)(Boolean(a), o, "vendorsFoundText", r)
                  , U = Object(v.x)(Boolean(a), o, "noVendorsFoundText", r);
                return Object(l.h)("div", {
                    className: "pm-features pm-vendors"
                }, Object(l.h)("div", {
                    className: "consent-disclouse"
                }, V || c), F ? Object(l.h)("div", {
                    role: "tablist",
                    className: "pm-type-toggle"
                }, Object(l.h)("div", {
                    title: x,
                    role: "tab",
                    "aria-selected": "li" !== d,
                    id: "vendors-focus",
                    tabindex: "0",
                    className: "focusable",
                    onClick: function() {
                        return e.setState({
                            selected: "consent"
                        })
                    },
                    onKeyDown: function(t) {
                        return Object(v.s)(t.key) && e.setState({
                            selected: "consent"
                        })
                    }
                }, x), Object(l.h)("div", {
                    title: w,
                    role: "tab",
                    "aria-selected": "li" === d,
                    tabindex: "0",
                    onClick: function() {
                        return e.setState({
                            selected: "li"
                        })
                    },
                    onKeyDown: function(t) {
                        return Object(v.s)(t.key) && e.setState({
                            selected: "li"
                        })
                    }
                }, w), Object(l.h)("span", {
                    className: "li" === d ? "selected li" : "selected consent"
                })) : null, Object(l.h)("div", {
                    className: "filter-container"
                }, Object(l.h)("img", {
                    style: Object(g.a)(o.magnifyingGlassIconColor),
                    src: h.a,
                    alt: ""
                }), Object(l.h)("input", {
                    className: "vendor-filter",
                    "aria-label": "vendors search filter",
                    placeholder: O + "...",
                    name: "filter",
                    value: p,
                    onChange: this.updateFilter
                }), Object(l.h)("div", {
                    role: "status",
                    "aria-live": "polite"
                }, f.length ? R : U)), Object(l.h)("div", {
                    style: {
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }
                }, Object(l.h)("h2", {
                    class: "vendors-count",
                    style: {
                        color: "#000"
                    }
                }, f.length, " ", M), Object(l.h)("div", {
                    className: "legend",
                    style: {
                        margin: 0
                    }
                }, Object(l.h)("span", {
                    tabIndex: "0",
                    className: "legend-key"
                }, C), Object(l.h)("p", {
                    class: "custom-header"
                }, j), _ && Object(l.h)("span", {
                    className: "legend-key apple-broker",
                    "aria-hidden": !0
                }, P), _ && k, B && Object(l.h)("span", {
                    className: "legend-key is-custom-vendor-label-1",
                    "aria-hidden": !0
                }, N), B && L, D && Object(l.h)("span", {
                    className: "legend-key is-custom-vendor-label-2",
                    "aria-hidden": !0
                }, I), D && T, E && Object(l.h)("span", {
                    className: "legend-key is-custom-vendor-label-3",
                    "aria-hidden": !0
                }, A), E && S)), f.map((function(t) {
                    var n = !(t.disclosureOnlyCategories.length > 0 && t.legIntCategories <= 0 && t.consentCategories <= 0)
                      , c = (t.iabSpecialPurposes.length > 0 || t.iabFeatures.length > 0) && t.consentCategories <= 0 && t.legIntCategories.length <= 0 && t.iabSpecialFeatures <= 0
                      , u = t.isApple
                      , p = t.isCustomVendorLabel1
                      , g = t.isCustomVendorLabel2
                      , f = t.isCustomVendorLabel3
                      , h = u && ("unknown" === s || "denied" === s);
                    return Object(l.h)(b.a, {
                        key: "vendor-" + t.vendorId,
                        settings: e.props.settings,
                        name: Object(l.h)("h3", {
                            className: "vendor-name"
                        }, t.name, "IAB" !== t.vendorType && Object(l.h)("span", {
                            tabIndex: "0",
                            className: "legend-key inline"
                        }, C)),
                        title: t.name,
                        isCustom: "IAB" !== t.vendorType,
                        locked: y.t.includes(t.iabId) || h,
                        description: t.name,
                        child: "vendors",
                        language: r,
                        value: t,
                        content: Object(l.h)(m.a, {
                            dev: a,
                            vendor: t,
                            settings: o,
                            language: r,
                            consentType: d
                        }),
                        toggle: n && !c ? e.props.toggleVendor : null,
                        consentType: "consent" === d ? "active" : "legInt",
                        selected: "consent" === d ? "active" : "li",
                        isApple: u,
                        appleDataBrokerLetter: P,
                        usePurModel: i && "li" !== e.state.selected,
                        isCustomVendorLabel1: p,
                        isCustomVendorLabel2: g,
                        isCustomVendorLabel3: f,
                        customVendorLabel1Letter: N,
                        customVendorLabel2Letter: I,
                        customVendorLabel3Letter: A
                    })
                }
                )))
            }
            ,
            t
        }(u.Component)
          , j = function(e) {
            void 0 === e && (e = {}),
            r(this, {
                accordionsSpacing: {
                    paddingLeft: 16,
                    paddingRight: 16,
                    paddingTop: 16,
                    paddingBottom: 16
                },
                accordionsFont: {
                    fontSize: 13,
                    fontWeight: "500",
                    color: "#000000",
                    fontFamily: "arial, helvetica, sans-serif"
                },
                panelSpacing: {
                    paddingLeft: 20,
                    paddingRight: 20,
                    paddingTop: 5,
                    paddingBottom: 20
                },
                panelFont: {
                    fontSize: 13,
                    fontWeight: "400",
                    color: "#555555",
                    fontFamily: "arial, helvetica, sans-serif"
                },
                toggleType: "basic",
                toggleColor: "#47d747",
                toggleActiveColor: "#ffffff",
                toggleText: "On",
                toggleOffColor: "#cccccc",
                toggleOffActiveColor: "#ffffff",
                toggleOffText: "Off",
                specialOnly: !1,
                purposesText: "Purposes",
                purposeInfo: "You give an affirmative action to indicate that we can use your data for this purpose.",
                customPurposesText: "Custom Purposes",
                customPurposesLetter: "C",
                specialPurposesText: "Special Purposes",
                specialPurposesInfo: "We have a need to use your data for this processing purpose that is required for us to deliver services to you.",
                consentText: "User Consent",
                liText: "Legitimate Interest",
                vendorConsentText: "User Consent",
                vendorLiText: "Legitimate Interest",
                liInfo: "We have a need to use your data for this processing purpose that is required for us to deliver services to you.",
                rejectAllText: "Reject All",
                acceptAllText: "Accept All",
                featuresText: "Features",
                featuresInfo: "Features are a use of the data that you have already agreed to share with us",
                specialFeaturesText: "Special Features",
                specialFeaturesInfo: "Special Features are processing purposes that require your explicit consent",
                iabConsent: "Consent Purposes",
                iabLegInt: "Legitimate Interest Purposes",
                iabFeatures: "Features",
                iabSpecialFeatures: "Special Features",
                iabSpecialPurposes: "Special Purposes",
                disclosurePurposes: "Disclosure Purposes",
                alphabetizeVendors: !1,
                vendorsText: "Site Vendors",
                searchText: "Search Site Vendors",
                otherText: "Other Site Vendors",
                otherLetter: "O",
                cookieText: "Cookie Information",
                tableCategoryText: "Category",
                tableCookieText: "Cookie",
                tableDomainText: "Domain",
                tableDurationText: "Duration",
                statusText: "Status",
                viewAllText: "View All",
                viewLessText: "View Less",
                acceptedAllText: "Accepted All",
                partialConsentText: "Partial Consent",
                rejectedAllText: "Rejected All",
                minHeight: {
                    type: "auto",
                    value: 1
                },
                maxHeight: {
                    type: "px",
                    value: 400
                },
                languages: {},
                selectedLanguage: "",
                appleDataBrokerText: "Apple Data Broker",
                appleDataBrokerLetter: "A",
                customVendorLabel1Text: "Label 1",
                customVendorLabel1Letter: "1",
                customVendorLabel2Text: "Label 2",
                customVendorLabel2Letter: "2",
                customVendorLabel3Text: "Label 3",
                customVendorLabel3Letter: "3",
                vendorTitleText: "Vendors",
                privacyPolicyTitleText: "Privacy Policy",
                legitIntUrlTitleText: "URL disclosing legitimate interest",
                purposeTitleText: "Purposes",
                purposesTableHeaderText: "Consent Purposes",
                retentionTableHeaderText: "Retention",
                dataCategoriesTitleText: "Categories of data collected/processed",
                magnifyingGlassIconColor: "#000",
                arrowIconColor: "#000",
                vendorsFoundText: "Vendors found",
                noVendorsFoundText: "No vendors found"
            }),
            r(this, e)
        }
          , C = (n("evnV"),
        n("xc8A"))
          , x = n.n(C);
        n.d(t, "a", (function() {
            return w
        }
        ));
        var w = function(e) {
            function t() {
                for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++)
                    o[r] = arguments[r];
                return (t = e.call.apply(e, [this].concat(o)) || this).state = {
                    tab: t.props.pmTab ? t.props.pmTab || "purposes" : t.props.message.defaultTab || "purposes",
                    loading: !0
                },
                t.componentDidMount = function() {
                    Object(v.z)()
                }
                ,
                t.changeTab = function(e) {
                    t.setState({
                        tab: e
                    });
                    var n = "#" + e + "-focus";
                    window.setTimeout((function() {
                        x.a.clear(),
                        x.a.add({
                            selector: n,
                            defaultElement: n
                        }),
                        x.a.focus()
                    }
                    ), 500)
                }
                ,
                t
            }
            var n, o;
            return o = e,
            (n = t).prototype = Object.create(o.prototype),
            n.prototype.constructor = n,
            c(n, o),
            t.prototype.render = function() {
                var e = this
                  , t = new j(this.props.component.settings)
                  , n = this.props.language
                  , o = this.state.tab
                  , r = this.props.pmData || {}
                  , c = {}
                  , u = !1
                  , g = JSON.stringify(this.props.path);
                this.props.dev && (c = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? i(Object(n), !0).forEach((function(t) {
                            s(e, t, n[t])
                        }
                        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }
                        ))
                    }
                    return e
                }({}, this.props.dev.hover),
                u = this.props.dev.current === g);
                var f = {};
                f.minHeight = "auto" === t.minHeight.type ? "auto" : t.minHeight.value + t.minHeight.type,
                f.maxHeight = "auto" === t.maxHeight.type ? "auto" : t.maxHeight.value + t.maxHeight.type;
                var h = "message-component message-stacks privacy-manager-tcfv2 no-children" + this.props.className
                  , b = Object(v.x)(Boolean(this.props.dev), t, "purposesText", n)
                  , m = Object(v.x)(Boolean(this.props.dev), t, "featuresText", n)
                  , y = Object(v.x)(Boolean(this.props.dev), t, "vendorsText", n)
                  , C = r.vendors || [];
                t.alphabetizeVendors && C.sort((function(e, t) {
                    return e.name.toLowerCase() < t.name.toLowerCase() ? -1 : e.name.toLowerCase() > t.name.toLowerCase() ? 1 : 0
                }
                ));
                var x = this.props.message.useStacks
                  , w = this.props.message.consentOnlyStacks
                  , k = this.props.message.usePurModel;
                return Object(l.h)("div", a({
                    className: u ? h + " on-active" : h,
                    path: this.props.dev ? g : null
                }, c), Object(l.h)("div", {
                    className: "pm-tabs",
                    role: "tablist"
                }, r.categories && r.categories.length > 0 && Object(l.h)("div", {
                    role: "tab",
                    tabindex: "0",
                    className: o.includes("purposes") ? "pm-tab active focusable" : "pm-tab focusable",
                    "aria-selected": o.includes("purposes") ? "true" : "false",
                    onClick: function() {
                        return e.changeTab("purposes")
                    },
                    onKeyDown: function(t) {
                        return Object(v.s)(t.key) && e.changeTab("purposes")
                    },
                    title: b
                }, b), r.features && r.features.length > 0 && Object(l.h)("div", {
                    role: "tab",
                    tabindex: "0",
                    className: "features" === o ? "pm-tab active focusable" : "pm-tab focusable",
                    "aria-selected": o.includes("features") ? "true" : "false",
                    onClick: function() {
                        return e.changeTab("features")
                    },
                    onKeyDown: function(t) {
                        return Object(v.s)(t.key) && e.changeTab("features")
                    },
                    title: m
                }, m), r.vendors && r.vendors.length > 0 && Object(l.h)("div", {
                    role: "tab",
                    tabindex: "0",
                    className: o.includes("vendors") ? "pm-tab active focusable" : "pm-tab focusable",
                    "aria-selected": o.includes("vendors") ? "true" : "false",
                    onClick: function() {
                        return e.changeTab("vendors")
                    },
                    onKeyDown: function(t) {
                        return Object(v.s)(t.key) && e.changeTab("vendors")
                    },
                    title: y
                }, y)), o.includes("purposes") && void 0 !== r.categories && Object(l.h)("div", {
                    className: "pm-section",
                    style: f
                }, Object(l.h)(p.a, {
                    dev: this.props.dev,
                    stacks: r.stacks || [],
                    useStacks: x,
                    consentOnlyStacks: w,
                    purposes: r.categories || [],
                    specialPurposes: r.specialPurposes || [],
                    vendors: r.vendors || [],
                    language: this.props.language,
                    settings: t,
                    togglePurposeOrFeature: this.props.togglePurposeOrFeature,
                    toggleStack: this.props.toggleStack,
                    startWithLiToggled: "purposes-li" === o,
                    usePurModel: k,
                    inOrder: this.props.inOrder
                })), "features" === o && void 0 !== r.features && Object(l.h)("div", {
                    className: "pm-section",
                    style: f
                }, Object(l.h)(d.a, {
                    dev: this.props.dev,
                    features: r.features || [],
                    specialFeatures: r.specialFeatures || [],
                    language: this.props.language,
                    settings: t,
                    togglePurposeOrFeature: this.props.togglePurposeOrFeature
                })), o.includes("vendors") && void 0 !== r.vendors && Object(l.h)("div", {
                    className: "pm-section",
                    style: f
                }, Object(l.h)(O, {
                    dev: this.props.dev,
                    vendors: C,
                    settings: t,
                    language: this.props.language,
                    toggleVendor: this.props.toggleVendor,
                    startWithLiToggled: "vendors-li" === o,
                    usePurModel: k,
                    idfaStatus: this.props.idfaStatus,
                    defaultConsentDisclosure: r.defaultConsentDisclosure
                })))
            }
            ,
            t
        }(u.Component)
    },
    zS2S: function(e, t, n) {
        "use strict";
        n.r(t);
        var o = n("o1E3")
          , r = function(e) {
            if (window.parent)
                try {
                    window.parent.postMessage(a(e), "*")
                } catch (e) {}
        };
        window.onerror = function() {
            i(arguments.length <= 0 ? void 0 : arguments[0]),
            r((arguments.length <= 4 ? void 0 : arguments[4]) || (arguments.length <= 0 ? void 0 : arguments[0]))
        }
        ,
        window.onunhandledrejection = function(e) {
            i(),
            r(e.reason)
        }
        ;
        var a = function(e) {
            switch (e.code) {
            case 1:
                return {
                    code: 1,
                    title: "Unable to fetch PM",
                    stackTrace: e.message
                };
            default:
                return {
                    code: 99,
                    title: "general error",
                    stackTrace: e
                }
            }
        }
          , i = function(e) {
            void 0 === e && (e = ""),
            e.includes("Invalid signature") ? window.parent.postMessage({
                name: "sp.renderingAppError",
                messageId: Object(o.p)("message_id"),
                fromPM: !1,
                invalidSignature: !0
            }, "*") : window.parent.postMessage({
                name: "sp.renderingAppError",
                messageId: Object(o.p)("message_id"),
                fromPM: window.__isPm
            }, "*")
        }
    }
});
