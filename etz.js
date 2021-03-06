(function() {
	var getById, s, isAndroid, t, e, p, d, h, domBody, g, c, n, domCanvas, isChrome, v, canvasContext, l, w, b, u, x, C, y, T, L, M, setInnerHtml,
	isIE, F, k, O, z, N, _, arrMonths, E, isGecko, G, isOpera, H, devPixelRatio, B, R, redraw, V, Y, J, X, W, K, Z, j, Q, init, tt, supportsTouch, nt, ot, rt, at, it, lt, ct, ut, st, dt, loadCities, pt, ht, gt, vt, mt, wt, isWebkit, xt;
	v = [],
	G = 0,
	loadCities = function(t) {
			var e, n, o, r, a, i;
			0 === t && (t = 524287),
			v = [],
			a = [],
			e = 0,
			r = data.length;
			for (o = 0; o < r; o++)
				n = data[o], 
				a.push(((i = n)[3] = false, t & 1 << e && (v.push(i), i[3] = true), e += 1));
			return a
	},
	K = function() {
		var e, n, t, o, r;
		t = function(t) {
			return t[3] && (n += 1 << e), e += 1
		},
		n = e = 0,
		r = data.length; 
		for (o = 0; o < r; o++)
				t(data[o]);
		return n.toString(36)
	},
	T = function() {
		var t, e, n;
		return t = (e = new Date).getDate(), (n = e.getUTCDate()) === t ? 0 : n === t + 1 || 1 === n ? 1440 : n === t - 1 ? -1440 : void 0
	},
	H = {},
	function() {
		var t, e;
		t = 60 * (e = new Date).getUTCHours() + e.getUTCMinutes() - 720 + T(), H = {
			date: e,
			offset: t,
			cities: 524287
		}
	}(),
	vt = function() {
		var t, e, n, o, r;
		if ("" !== location.hash)
			return n = (r = location.hash.slice(1).split(","))[0], o = r[1], e = r[2], t = n.split("-"), H.date = new Date(t[0], t[1] - 1, t[2]), H.offset = parseInt(o), H.cities = parseInt(e, 36)
	},
	null != navigator.standalone || navigator.standalone || vt(), 
	loadCities(H.cities), 
	G = H.offset, 
	F = false, 
	getById = function(t) {
		return document.getElementById(t)
	},
	setInnerHtml = function(t, e) {
		return null == e && (e = ""), (getById(t) || t).innerHTML = e
	},
	l = function(t, e) {
		return (getById(t) || t).style.cssText += ";" + e
	},
	isIos = (dt = navigator.userAgent).match(/(iPhone\sOS)\s([\d_]+)/) 
		|| dt.match(/(iPad\sOS)\s([\d_]+)/), 
	isWebkit = -1 < dt.indexOf("AppleWebKit/"),
	isGecko = -1 < dt.indexOf("Gecko") && !isWebkit,
	isOpera = -1 < dt.indexOf("Opera"),
	isIE = -1 < dt.indexOf("MSIE"),
	isChrome = -1 < dt.indexOf("Chrome"),
	isAndroid = dt.match(/(Android)\s+([\d.]+)/) && isWebkit,
	dt.match(/(Android)\s+4([\d.]+)/),
	ut = isWebkit ? "webkitTransform"
		: isIE    ? "msTransform"
		: isGecko ? "MozTransform"
		: isOpera ? "OTransform"
		: "transform",
	st = isWebkit ? "-webkit-transform" 
		: isIE    ? "-ms-transform" 
		: isGecko ? "-moz-transform" 
		: isOpera ? "-o-transform" 
		: void 0,
	lt = isWebkit ? "-webkit-transition" 
		: isIE    ? "-ms-transition" 
		: isGecko ? "-moz-transition" 
		: isOpera ? "-o-transition" 
		: void 0, 
	t = function(t, e, n, o) {
		return null == n && (n = 1),
			null == o && (o = .5),
			l(t, lt + ":all " + o + "s; " + st + ":	" + e + "; opacity:" + n)
	},
	ct = function(t, e, n) {
		if (null == n && (n = false), !isNaN(e))
			return t = getById(t),
				n && (t.style.cssText += ";" + lt + ":all 0.4s;"),
				t.style[ut] = "translate3d(" + e + "px,0,0)"
	},
	ot = "left",
	arrMonths = "January February March April May June July August September October November December".split(" "),
	Date.prototype.addDays = function(t) {
		return new Date(this.getTime() + 1e3 * t * 60 * 60 * 24)
	},
	Function.prototype.delay = function(t) {
		return setTimeout(this, 1e3 * t)
	},
	supportsTouch = null != document.createTouch,
	devPixelRatio = window.devicePixelRatio || 1,
	domBody = getById("body"),
	domCanvas = getById("canvas"),
	canvasContext = domCanvas.getContext("2d"),
	1 < devPixelRatio && 1 < (canvasContext.webkitBackingStorePixelRatio || 1) && (devPixelRatio = 1),
	xt = M = h = d = X = O = null, 
	b = s = N = J = rt = g = null, 
	w = _ = null, 
	p = nt = null, 
	canvasContext.save(), 
	supportsTouch && (domBody.className = "supports-touch"),
	isChrome && (domBody.className = "chrome"),
	isIos && (domBody.className = "supports-touch with-initial-animation"),
	j = function(t, e, n) {
		return t.setAttribute("width", e * devPixelRatio), t.setAttribute("height", n * devPixelRatio), l(t, "height:" + n + "px; width:" + e + "px")
	},
	
	init = function() {
		var t, e, n;
		return e = function() {
				var t, e, n, a, o, r;
				a = getById("select_timezones"), 
				t = -1, 
				r = data.length;
				for (o = 0; o < r; o++)
					n = (e = data[o])[1], "" !== e[2] && (n += " " + e[2]),
					a.appendChild(new Option(n, t += 1, false, e[3]));
				return a.onchange = function() {
					var e, n, t, o, r;
					for (t = function(t) {return a.options[e].selected && (n += 1 << e), e += 1}, o = n = e = 0, r = data.length; o < r; o++)
						data[o], t();
					return loadCities(n), redraw(), wt()
				}
			},
			n = function(t) {
				return document.adoptNode((new DOMParser).parseFromString(t, "text/xml").firstChild)
			},
			t = function(t) {
				return '<svg class="action" width="36px" height="36px" viewBox="0 0 36 36" version="1.1" xmlns="http://www.w3.org/2000/svg">\n		<path fill="#FFFFFF" d="M23.077,10.154h-1.106c-0.508,0-1.047-0.397-1.198-0.883l-0.636-1.545c-0.239-0.447-0.141-1.107,0.216-1.467\nl0.788-0.785c0.359-0.359,0.359-0.947,0-1.307l-1.309-1.305c-0.358-0.359-0.945-0.359-1.305,0l-0.788,0.785\nc-0.356,0.358-1.019,0.457-1.467,0.217l-1.543-0.637c-0.483-0.149-0.881-0.688-0.881-1.197V0.924C13.849,0.417,13.432,0,12.924,0\nh-1.847c-0.508,0-0.924,0.417-0.924,0.924v1.107c0,0.509-0.396,1.048-0.881,1.197L7.728,3.865c-0.449,0.24-1.106,0.143-1.466-0.217\nL5.474,2.863c-0.359-0.359-0.945-0.359-1.304,0L2.864,4.168c-0.36,0.359-0.36,0.947,0,1.307L3.647,6.26\nc0.36,0.359,0.459,1.02,0.217,1.467L3.229,9.273c-0.152,0.484-0.688,0.881-1.197,0.881H0.924C0.416,10.154,0,10.568,0,11.077v1.846\nc0,0.509,0.416,0.925,0.924,0.925h1.108c0.509,0,1.045,0.396,1.195,0.881l0.637,1.547c0.241,0.447,0.144,1.109-0.217,1.467\nl-0.785,0.785c-0.358,0.359-0.358,0.947,0,1.307l1.308,1.307c0.358,0.357,0.944,0.357,1.304,0l0.788-0.787\nc0.357-0.357,1.017-0.455,1.462-0.213l1.549,0.635c0.485,0.152,0.881,0.689,0.881,1.197v1.105c0,0.506,0.416,0.922,0.924,0.922\nh1.847c0.508,0,0.925-0.416,0.925-0.922v-1.105c0-0.508,0.397-1.045,0.881-1.197l1.548-0.635c0.446-0.242,1.107-0.145,1.467,0.213\nl0.783,0.787c0.359,0.357,0.946,0.357,1.305,0l1.309-1.307c0.359-0.359,0.359-0.947,0-1.307l-0.788-0.785\nc-0.356-0.357-0.455-1.02-0.216-1.467l0.636-1.547c0.151-0.484,0.693-0.881,1.198-0.881h1.106c0.509,0,0.923-0.414,0.923-0.923\nv-1.848C24,10.568,23.586,10.154,23.077,10.154 M16.619,11.999c0,2.55-2.066,4.614-4.615,4.614c-2.552,0-4.617-2.064-4.617-4.614\nc0-2.549,2.065-4.615,4.617-4.615C14.553,7.384,16.619,9.45,16.619,11.999"/>\n      </svg>', t.appendChild(n('      <svg class="action" width="36px" height="36px" viewBox="0 0 36 36" version="1.1" xmlns="http://www.w3.org/2000/svg">\n        <path fill="#FFFFFF" d="M23.077,10.154h-1.106c-0.508,0-1.047-0.397-1.198-0.883l-0.636-1.545c-0.239-0.447-0.141-1.107,0.216-1.467\nl0.788-0.785c0.359-0.359,0.359-0.947,0-1.307l-1.309-1.305c-0.358-0.359-0.945-0.359-1.305,0l-0.788,0.785\nc-0.356,0.358-1.019,0.457-1.467,0.217l-1.543-0.637c-0.483-0.149-0.881-0.688-0.881-1.197V0.924C13.849,0.417,13.432,0,12.924,0\nh-1.847c-0.508,0-0.924,0.417-0.924,0.924v1.107c0,0.509-0.396,1.048-0.881,1.197L7.728,3.865c-0.449,0.24-1.106,0.143-1.466-0.217\nL5.474,2.863c-0.359-0.359-0.945-0.359-1.304,0L2.864,4.168c-0.36,0.359-0.36,0.947,0,1.307L3.647,6.26\nc0.36,0.359,0.459,1.02,0.217,1.467L3.229,9.273c-0.152,0.484-0.688,0.881-1.197,0.881H0.924C0.416,10.154,0,10.568,0,11.077v1.846\nc0,0.509,0.416,0.925,0.924,0.925h1.108c0.509,0,1.045,0.396,1.195,0.881l0.637,1.547c0.241,0.447,0.144,1.109-0.217,1.467\nl-0.785,0.785c-0.358,0.359-0.358,0.947,0,1.307l1.308,1.307c0.358,0.357,0.944,0.357,1.304,0l0.788-0.787\nc0.357-0.357,1.017-0.455,1.462-0.213l1.549,0.635c0.485,0.152,0.881,0.689,0.881,1.197v1.105c0,0.506,0.416,0.922,0.924,0.922\nh1.847c0.508,0,0.925-0.416,0.925-0.922v-1.105c0-0.508,0.397-1.045,0.881-1.197l1.548-0.635c0.446-0.242,1.107-0.145,1.467,0.213\nl0.783,0.787c0.359,0.357,0.946,0.357,1.305,0l1.309-1.307c0.359-0.359,0.359-0.947,0-1.307l-0.788-0.785\nc-0.356-0.357-0.455-1.02-0.216-1.467l0.636-1.547c0.151-0.484,0.693-0.881,1.198-0.881h1.106c0.509,0,0.923-0.414,0.923-0.923\nv-1.848C24,10.568,23.586,10.154,23.077,10.154 M16.619,11.999c0,2.55-2.066,4.614-4.615,4.614c-2.552,0-4.617-2.064-4.617-4.614\nc0-2.549,2.065-4.615,4.617-4.615C14.553,7.384,16.619,9.45,16.619,11.999"/>\n      </svg>'))
			},

			// Generates an engine icon
			function(t) {
				return '  <svg class="action" width="12px" height="10px" viewBox="0 0 12 10" version="1.1" xmlns="http://www.w3.org/2000/svg">\n<g><path d="M12,3.5L8,0v2.25c0,0-5,0.75-5,5C4.5,5,8,4.75,8,4.75V7L12,3.5z"/></g>\n<g><polygon points="10,7 9,8 9,9 1,9 1,3 3.5,3 4.5,2 0,2 0,10 10,10"/></g>\n</svg>', t.appendChild(n('  <svg class="action" width="12px" height="10px" viewBox="0 0 12 10" version="1.1" xmlns="http://www.w3.org/2000/svg">\n<g><path d="M12,3.5L8,0v2.25c0,0-5,0.75-5,5C4.5,5,8,4.75,8,4.75V7L12,3.5z"/></g>\n<g><polygon points="10,7 9,8 9,9 1,9 1,3 3.5,3 4.5,2 0,2 0,10 10,10"/></g>\n</svg>'))
			}(getById("action_icon")),
			t(getById("edit_icon")),
			navigator.standalone && (domBody.className += " standalone"),
			e(),
			supportsTouch 
				? (
					setInnerHtml("shortcut_link", "tap &amp; hold to share") //,
					//isAndroid ? getById("tap_to_add").style.display = "none" : void 0
				) 
				: setInnerHtml("shortcut_link", "link to this page")
	},

	tt = function() {
		var t, e, n, o, r, a, i, l, c, u;
		b = canvasContext.createLinearGradient(0, 0, h * devPixelRatio, 0),
		s = canvasContext.createLinearGradient(0, 0, h * devPixelRatio, 0),
		N = canvasContext.createLinearGradient(0, 0, h * devPixelRatio, 0),
		J = canvasContext.createLinearGradient(0, 0, 0, d * devPixelRatio),
		rt = canvasContext.createLinearGradient(0, 0, 0, d * devPixelRatio),
		g = canvasContext.createLinearGradient(0, d * devPixelRatio, 0, 0);
		for (r = (l = [
				[e = 0, "#4b4c4d"],
				[.2499, "#4b4c4d"],
				[.25, "#575b5c"],
				[.3299, "#575b5c"],
				[.33, "#6b7071"],
				[.7499, "#6b7071"],
				[.75, "#575b5c"],
				[.9099, "#575b5c"],
				[.91, "#4b4c4d"],
				[1, "#4b4c4d"]
		]).length; e < r; e++)
			t = l[e], b.addColorStop(t[0], t[1]);

		for (a = (c = [
				[n = 0, "#5485b1"],
				[.2499, "#5485b1"],
				[.25, "#3cafc5"],
				[.3299, "#3cafc5"],
				[.33, "#55c8e4"],
				[.7499, "#55c8e4"],
				[.75, "#3cafc5"],
				[.9099, "#3cafc5"],
				[.91, "#5485b1"],
				[1, "#5485b1"]
			]).length; n < a; n++) 
				t = c[n], s.addColorStop(t[0], t[1]);
		for (i = (u = [
				[o = 0, "#8abb29"],
				[.2499, "#8abb29"],
				[.25, "#a5df3b"],
				[.3299, "#a5df3b"],
				[.33, "#b8ff41"],
				[.7499, "#b8ff41"],
				[.75, "#a5df3b"],
				[.9099, "#a5df3b"],
				[.91, "#8abb29"],
				[1, "#8abb29"]
			]).length; o < i; o++) 
				t = u[o], N.addColorStop(t[0], t[1]);
		return J.addColorStop(0, "rgba(0,0,0,0)"),
				J.addColorStop(1, "rgba(0,0,0,0.4)"),
				rt.addColorStop(0, "rgba(255,255,255,0.3)"),
				rt.addColorStop(.025, "rgba(255,255,255,0)"),
				g.addColorStop(0, "rgba(255,255,255,0.3)"),
				g.addColorStop(.025, "rgba(255,255,255,0)")
		},
	Y = function(t, e, n, o) {
		return null == o && (o = canvasContext), 
			o.beginPath(),
			o.moveTo(n, 0),
			o.lineTo(t - n, 0),
			o.quadraticCurveTo(t, 0, t, n),
			o.lineTo(t, e - n),
			o.quadraticCurveTo(t, e, t - n, e),
			o.lineTo(n, e),
			o.quadraticCurveTo(0, e, 0, e - n),
			o.lineTo(0, n),
			o.quadraticCurveTo(0, 0, n, 0),
			o.fill()
	},
	c = {},
	x = function(t, e, n) {
		var canvas, canvasContextNew, a, i, l;
		return null == n && (n = b), 
			n === b && (a = "default"),
			n === s && (a = "active"),
			n === N && (a = "local"),
			c[a] || (
				canvas = document.createElement("canvas"),
				j(canvas, h * devPixelRatio, d * devPixelRatio),
				canvasContextNew = canvas.getContext("2d"),
				l = (h - 2) * devPixelRatio,
				i = d * devPixelRatio,
				canvasContextNew.fillStyle = n,
				canvasContextNew.clearRect(0, 0, l, i),
				Y(l, i, i / 2.5, canvasContextNew), canvasContextNew.fillStyle = J,
				Y(l, i, i / 2.5, canvasContextNew), canvasContextNew.fillStyle = rt,
				Y(l, i, i / 2.5, canvasContextNew), canvasContextNew.fillStyle = g,
				Y(l, i, i / 2.5, canvasContextNew),
				c[a] = canvas
			),
			canvasContext.clearRect(t, e, h, d), 
			canvasContext.drawImage(c[a], t, e, h * devPixelRatio, d * devPixelRatio)
	},
	Q = function(t) {
		return null == t && (t = H.date), _ = -(w = t).getTimezoneOffset() / 60, 60 * w.getUTCHours() + w.getUTCMinutes()
	},	
	B = function() {
		var t;
		return t = [window.innerWidth, 60 * v.length + 350], M = t[1], 480 < (xt = t[0]) && (M -= 100), X = 60, d = 24, O = xt / 2 - 3 * (h = xt / 3) / 2, j(domCanvas, xt, M), canvasContext.restore(), canvasContext.save(), canvasContext.scale(devPixelRatio, devPixelRatio), canvasContext.clearRect(0, 0, xt, M), l("header", "width:" + 3 * h + "px;left:" + (xt / 2 - 3 * h / 2) + "px"), l("line", "height:" + (M - 82 - 100) + "px"), l("cline", "height:" + (M - 82 - 100) + "px"), l("wrapper", "height:" + M + "px")
	},
	L = function(t, e) {
		var n;
		return 0 <= (n = e + 12) && n < 24 ? t === _ ? N : s : b
	},
	R = function() {
		var o, r, a, i, t, l, e, n, c, u, s, d;
		for (115, o = xt / 2 - h / 2, i = r = l = "", p = [], nt = [], e = function(t) {
				var e, n;
				return e = -t[0] / 24 * h,
					n = a * X + 115,
					p.push([{
						left: e + o - 2 * h,
						top: n + 20,
						gradient: L(t[0], t[0] + 48 + G / 60)
					}, {
						left: e + o - h,
						top: n + 20,
						gradient: L(t[0], t[0] + 24 + G / 60)
					},	{
						left: e + o,
						top: n + 20,
						gradient: L(t[0], t[0] + G / 60)
					},	{
						left: e + o + h,
						top: n + 20,
						gradient: L(t[0], t[0] - 24 + G / 60)
					},	{
						left: e + o + 2 * h,
						top: n + 20,
						gradient: L(t[0], t[0] - 48 + G / 60)
					}]),
					nt.push({
						offset: t[0]
					}), 
					x(p[a][1].left, p[a][1].top, p[a][1].gradient), 
					x(p[a][2].left, p[a][2].top, p[a][2].gradient), 
					x(p[a][3].left, p[a][3].top, p[a][3].gradient), 
					l += "<div style='left:" + O + "px;top:" + (n - 2) + "px'>" + t[1] + " <small>" + t[2] + "</small></div>", 
					i += "<div id='time_" + a + "' style='top:" + (n - 2) + "px'></div>",
					r += "<div style='left:" + p[a][1].left + "px;top:" + p[a][1].top + "px;width:" + h + "px'>\n  "
						+ C(w.addDays(-1)) + "\n</div>\n<div style='left:" + p[a][2].left + "px;top:" + p[a][2].top + "px;width:" + h + "px'>\n  " + C(w.addDays(0)) + "\n</div>\n<div style='left:" + p[a][3].left + "px;top:" + p[a][3].top + "px;width:" + h + "px'>\n  " + C(w.addDays(1)) + "\n</div>", 
					a += 1
			},
			n = a = 0,
			u = v.length; n < u; n++)
				e(v[n]);
		for (setInnerHtml("timezones", l), setInnerHtml("dates", r), setInnerHtml("times", i), d = [], c = a = 0, s = nt.length; c < s; c++)
			t = nt[c], d.push((t.timeEl = getById("time_" + a), a += 1));
		return d
	},
	V = function() {
		var t, e, n, o, r, a, i, l, c, u;
		for (r = [], n = e = 0, o = v.length; n < o; n++)
			t = v[n], r.push((a = t, u = c = l = i = void 0, i = p[e], L(a[0], a[0] + 48 + G / 60), l = L(a[0], a[0] + 24 + G / 60), c = L(a[0], a[0] + G / 60), u = L(a[0], a[0] - 24 + G / 60), L(a[0], a[0] - 48 + G / 60), i[1].gradient !== l && x(i[1].left, i[1].top, i[1].gradient = l), i[2].gradient !== c && x(i[2].left, i[2].top, i[2].gradient = c), i[3].gradient !== u && x(i[3].left, i[3].top, i[3].gradient = u), e += 1));
		return r
	},
	redraw = function() {
		return c = {}, B(), tt(), R(), V(), mt(), pt()
	},
	window.onorientationchange = redraw,
	window.onresize = redraw,
	C = function(t) {
		return arrMonths[t.getMonth()] + " " + t.getDate()
	},
	y = function(t) {
		var e, n, o;
		return t < 0 && (t = 24 - Math.abs(t % 24)), 24 <= t && (t %= 24), (e = Math.abs(60 * t % 60 | 0)) < 10 && (e = "0" + e), n = "am", 12 <= (t |= 0) && (t = (o = [t % 12, "pm"])[0], n = o[1]), 0 === t && (t = 12), t + ":" + e + " " + n
	},
	pt = function(t) {
		var e, n, o, r;
		if (n = new Date, r = T(), e = 60 * n.getUTCHours() + n.getUTCMinutes() - 720 + r, -n.getTimezoneOffset() / 60, l("cnow", "left:" + (o = xt / 2 + e / 60 / 24 * h) + "px"), setInnerHtml("clocaltime", y(e / 60 + _ + 12)), t) return l("now", "left:" + o + "px"), setInnerHtml("localtime", y(e / 60 + _ + 12))
	},
	gt = null,
	ht = function(t) {
		var e, n, o, r;
		if (t || gt !== G) {
			for (setInnerHtml("localtime", y((gt = G) / 60 + 12 + _)), r = [], n = 0, o = nt.length; n < o; n++) e = nt[n], r.push((domCanvas = e).timeEl.innerHTML = y(G / 60 + 12 + domCanvas.offset));
			var domCanvas;
			return r
		}
	},
	Z = function() {
		return w.getFullYear() + "-" + (w.getMonth() + 1) + "-" + w.getDate() + "," + G + "," + K()
	},
	mt = function(t) {
		var e, n;
		if (null == t && (t = G), l("now", "left:" + (e = xt / 2 + t / 60 / 24 * h) + "px"), xt - 100 < (n = e) && (n -= 85), l("times", "left:" + n + "px"), e < 200 && "left" === ot && (ct("timezones", xt - (xt <= 480 ? 120 : 200), true), ot = "right"), xt - (xt <= 480 ? 200 : 300) < e && "right" === ot) return ct("timezones", 0, true), ot = "left"
	},
	wt = function() {
		var t;
		return t = Z(), F = true, location.hash = t, getById("shortcut_link").setAttribute("href", location.protocol + '//' + location.host + location.pathname + "#" + t)
	},
	it = -1,
	z = -1,
	at = W = -1,
	n = u = false,
	E = function(t) {
		var e, n;
		if (u)
			return n = t.pageX, null != t.touches && (n = z), n < 50 && (n = 50), xt - 50 < n && (n = xt - 50), G = Math.round((n - xt / 2) / h * 24 * 60), G -= (e = G) % 15, V(), mt(e), isAndroid || ht(), null != t.touches ? t.preventDefault() : void 0
	},
	key("left", function() {
		if (G -= 15, G -= G % 15, V(), mt(), !isAndroid)
			return ht()
	}),
	key("right", function() {
		if (G += 15, G -= G % 15, V(), mt(), !isAndroid) return ht()
	}),
	domBody[supportsTouch ? "ontouchstart" : "onmousedown"] = function(t) {
		var e, n;
		if (1 !== (e = t.target).nodeType && (e = e.parentNode), (null == e.tagName || "A" !== (n = e.tagName) && "IMG" !== n && "SELECT" !== n && "INPUT" !== n) && !(null != t.touches && (W = document.body.scrollTop, at = Date.now(), it = z = t.touches[0].pageX, t.touches[0].pageY, t.touches[0].pageY < 50))) return u = true
	},
	domBody[supportsTouch ? "ontouchmove" : "onmousemove"] = function(t) {
		var e;
		if (null != t.touches) {
			if (z = t.touches[0].pageX, t.touches[0].pageY, n || document.body.scrollTop !== W) return void(n = true);
			if (Date.now() - at < 50) return;
			if (-10 < (e = it - z) && e < 10) return
		}
		return E(t)
	},
	domBody[supportsTouch ? "ontouchend" : "onmouseup"] = function(t) {
		return supportsTouch && (n || W !== document.body.scrollTop) || E(t), it = z = at = W = -1, u = n = false, wt()
	},
	window.onhashchange = function() {
		if (!F) return vt(), loadCities(H.cities), G = H.offset, Q(), mt(), ht(true), redraw();
		F = false
	},
	init(),
	Q(),
	redraw(),
	pt(true),
	ht(true),
	mt(),
	setInterval(pt, 1e3),
	isAndroid && setInterval(ht, 350),
	scrollTo(0, 1),
	isIos && function() {
		return t("wrapper", "scale(1)")
	}.delay(.5)
}).call(this);
