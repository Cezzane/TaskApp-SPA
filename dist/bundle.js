!(function (e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var o = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          n.d(
            r,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
          );
      return r;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 9));
})([
  function (e, t) {
    e.exports =
      '<div class="row"> <h2 class="col-12">Dashboard</h2> <div class="col-md-3"> <div class="card task"></div> <div class="card taskFinished"></div> <div class="taskForm card p-2"> <form action=""> <div class="form-group"> <label for="taskTitle">Task Title</label> <input type="text" name="" class="form-control" id="taskTitle" placeholder="Title" required/> </div> <div class="form-group"> <label for="DEscription">Description</label> <textarea name="" id="Description" cols="30" rows="3" class="form-control" placeholder="Description" requried></textarea> </div> <input type="submit" class="btn btnSubmit w-100" value="Add Task"/> </form> </div> </div> </div> ';
  },
  function (e, t) {
    e.exports = "<h1>Tasks</h1> ";
  },
  function (e, t) {
    e.exports =
      '<div class="row"> <div class="col-md-3 pendent"></div> </div> ';
  },
  function (e, t) {
    e.exports = "<h1>Friends</h1> ";
  },
  function (e, t) {
    e.exports =
      '<div class="hero"> <span><i class="fas fa-rainbow logo"></i></span> <h1 class="title">Take your notes everywhere</h1> <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus cum velit deserunt temporibus voluptas odio deleniti, eaque aspernatur praesentium molestiae nobis mollitia quam quo ratione doloremque obcaecati rerum. Magnam, quam! </p> <a class="btn boton">START</a> </div> ';
  },
  function (e, t, n) {
    "use strict";
    e.exports = function (e) {
      var t = [];
      return (
        (t.toString = function () {
          return this.map(function (t) {
            var n = (function (e, t) {
              var n = e[1] || "",
                r = e[3];
              if (!r) return n;
              if (t && "function" == typeof btoa) {
                var o =
                    ((a = r),
                    (c = btoa(unescape(encodeURIComponent(JSON.stringify(a))))),
                    (s = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                      c
                    )),
                    "/*# ".concat(s, " */")),
                  i = r.sources.map(function (e) {
                    return "/*# sourceURL="
                      .concat(r.sourceRoot || "")
                      .concat(e, " */");
                  });
                return [n].concat(i).concat([o]).join("\n");
              }
              var a, c, s;
              return [n].join("\n");
            })(t, e);
            return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n;
          }).join("");
        }),
        (t.i = function (e, n, r) {
          "string" == typeof e && (e = [[null, e, ""]]);
          var o = {};
          if (r)
            for (var i = 0; i < this.length; i++) {
              var a = this[i][0];
              null != a && (o[a] = !0);
            }
          for (var c = 0; c < e.length; c++) {
            var s = [].concat(e[c]);
            (r && o[s[0]]) ||
              (n &&
                (s[2]
                  ? (s[2] = "".concat(n, " and ").concat(s[2]))
                  : (s[2] = n)),
              t.push(s));
          }
        }),
        t
      );
    };
  },
  function (e, t, n) {
    var r = n(7),
      o = n(8);
    "string" == typeof (o = o.__esModule ? o.default : o) &&
      (o = [[e.i, o, ""]]);
    var i = { insert: "head", singleton: !1 };
    r(o, i);
    e.exports = o.locals || {};
  },
  function (e, t, n) {
    "use strict";
    var r,
      o = function () {
        return (
          void 0 === r &&
            (r = Boolean(window && document && document.all && !window.atob)),
          r
        );
      },
      i = (function () {
        var e = {};
        return function (t) {
          if (void 0 === e[t]) {
            var n = document.querySelector(t);
            if (
              window.HTMLIFrameElement &&
              n instanceof window.HTMLIFrameElement
            )
              try {
                n = n.contentDocument.head;
              } catch (e) {
                n = null;
              }
            e[t] = n;
          }
          return e[t];
        };
      })(),
      a = [];
    function c(e) {
      for (var t = -1, n = 0; n < a.length; n++)
        if (a[n].identifier === e) {
          t = n;
          break;
        }
      return t;
    }
    function s(e, t) {
      for (var n = {}, r = [], o = 0; o < e.length; o++) {
        var i = e[o],
          s = t.base ? i[0] + t.base : i[0],
          l = n[s] || 0,
          u = "".concat(s, " ").concat(l);
        n[s] = l + 1;
        var d = c(u),
          f = { css: i[1], media: i[2], sourceMap: i[3] };
        -1 !== d
          ? (a[d].references++, a[d].updater(f))
          : a.push({ identifier: u, updater: v(f, t), references: 1 }),
          r.push(u);
      }
      return r;
    }
    function l(e) {
      var t = document.createElement("style"),
        r = e.attributes || {};
      if (void 0 === r.nonce) {
        var o = n.nc;
        o && (r.nonce = o);
      }
      if (
        (Object.keys(r).forEach(function (e) {
          t.setAttribute(e, r[e]);
        }),
        "function" == typeof e.insert)
      )
        e.insert(t);
      else {
        var a = i(e.insert || "head");
        if (!a)
          throw new Error(
            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
          );
        a.appendChild(t);
      }
      return t;
    }
    var u,
      d =
        ((u = []),
        function (e, t) {
          return (u[e] = t), u.filter(Boolean).join("\n");
        });
    function f(e, t, n, r) {
      var o = n
        ? ""
        : r.media
        ? "@media ".concat(r.media, " {").concat(r.css, "}")
        : r.css;
      if (e.styleSheet) e.styleSheet.cssText = d(t, o);
      else {
        var i = document.createTextNode(o),
          a = e.childNodes;
        a[t] && e.removeChild(a[t]),
          a.length ? e.insertBefore(i, a[t]) : e.appendChild(i);
      }
    }
    function p(e, t, n) {
      var r = n.css,
        o = n.media,
        i = n.sourceMap;
      if (
        (o ? e.setAttribute("media", o) : e.removeAttribute("media"),
        i &&
          btoa &&
          (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
            btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
            " */"
          )),
        e.styleSheet)
      )
        e.styleSheet.cssText = r;
      else {
        for (; e.firstChild; ) e.removeChild(e.firstChild);
        e.appendChild(document.createTextNode(r));
      }
    }
    var m = null,
      h = 0;
    function v(e, t) {
      var n, r, o;
      if (t.singleton) {
        var i = h++;
        (n = m || (m = l(t))),
          (r = f.bind(null, n, i, !1)),
          (o = f.bind(null, n, i, !0));
      } else
        (n = l(t)),
          (r = p.bind(null, n, t)),
          (o = function () {
            !(function (e) {
              if (null === e.parentNode) return !1;
              e.parentNode.removeChild(e);
            })(n);
          });
      return (
        r(e),
        function (t) {
          if (t) {
            if (
              t.css === e.css &&
              t.media === e.media &&
              t.sourceMap === e.sourceMap
            )
              return;
            r((e = t));
          } else o();
        }
      );
    }
    e.exports = function (e, t) {
      (t = t || {}).singleton ||
        "boolean" == typeof t.singleton ||
        (t.singleton = o());
      var n = s((e = e || []), t);
      return function (e) {
        if (
          ((e = e || []),
          "[object Array]" === Object.prototype.toString.call(e))
        ) {
          for (var r = 0; r < n.length; r++) {
            var o = c(n[r]);
            a[o].references--;
          }
          for (var i = s(e, t), l = 0; l < n.length; l++) {
            var u = c(n[l]);
            0 === a[u].references && (a[u].updater(), a.splice(u, 1));
          }
          n = i;
        }
      };
    };
  },
  function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n(5),
      o = n.n(r)()(!1);
    o.push([
      e.i,
      'body{background:#41295a;background:-webkit-linear-gradient(to right, #2f0743, #41295a);background:linear-gradient(to right, #2f0743, #41295a)}.hero{transition:all ease-in 1s;height:600px;width:70%;margin:auto;display:flex;justify-content:center;align-items:center;flex-direction:column}.hero span{font-size:100px;color:#ffb347}.hero h1{color:#fff;font-size:60px;text-align:center}.hero p{margin-top:1vw;color:#dff9fb;font-family:"Rubik",sans-serif;text-align:center}.hero .boton{font-family:"Rubik",sans-serif;font-weight:400;transition:transform linear .3s;margin-top:1vw;background:#e0eafc;background:-webkit-linear-gradient(to right, #cfdef3, #e0eafc);background:linear-gradient(to right, #cfdef3, #e0eafc);color:#2f0f4d;border:none;border-radius:30px;padding:10px 30px;outline:none}.hero .boton:hover{background:#ffb347;transform:translateY(-5px)}.home .task,.home .taskFinished{height:100px}.home .card{margin-bottom:2vw}.home textarea{resize:none}',
      "",
    ]),
      (t.default = o);
  },
  function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n(0),
      o = n.n(r),
      i = n(1),
      a = n.n(i),
      c = n(2),
      s = n.n(c),
      l = n(3),
      u = n.n(l),
      d = n(4),
      f = n.n(d);
    let p = document.getElementById("root");
    const m = (e) => {
      switch (((p.innerHTML = ""), e)) {
        case "#/":
          return p.appendChild(
            (() => {
              const e = document.createElement("div");
              return (e.innerHTML = f.a), e;
            })()
          );
        case "#/Home":
          return p.appendChild(
            (() => {
              const e = document.createElement("div");
              return (e.innerHTML = o.a), e.classList.add("home"), e;
            })()
          );
        case "#/Tasks":
          return p.appendChild(
            (() => {
              const e = document.createElement("div");
              return (e.innerHTML = a.a), e;
            })()
          );
        case "#/Taks_Completed":
          return p.appendChild(
            (() => {
              const e = document.createElement("div");
              return (e.innerHTML = s.a), e;
            })()
          );
        case "#/Friends":
          return p.appendChild(
            (() => {
              const e = document.createElement("div");
              return (e.innerHTML = u.a), e;
            })()
          );
      }
    };
    n(6),
      m(window.location.hash),
      window.addEventListener("hashchange", () => {
        console.log(window.location.hash), m(window.location.hash);
      });
  },
]);