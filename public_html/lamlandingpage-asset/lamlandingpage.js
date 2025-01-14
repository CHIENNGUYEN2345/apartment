String.prototype.replaceAll = function (t, e) {
    return this.valueOf().split(t).join(e)
}, String.prototype.format = function () {
    for (var t = this, e = 0; e < arguments.length; e++) {
        var i = new RegExp("\\{" + e + "\\}", "gi");
        t = t.replace(i, arguments[e])
    }
    return t.valueOf()
}, Array.prototype.removeSpace = function () {
    var t = [];
    return this.forEach(function (e) {
        (e = e.trim()).length > 0 && t.push(e)
    }), t
}, Array.prototype.random = function () {
    return this[Math.floor(Math.random() * this.length)]
}, Array.prototype.unique = function () {
    return this.filter(function (t, e, i) {
        return i.indexOf(t) == e
    })
}, Array.prototype.except = function (t) {
    var e = this;
    return Array.isArray(t) && t.forEach(function (t) {
        var i = e.indexOf(t);
        -1 != i && e.splice(i, 1)
    }), e
}, Array.prototype.only = function (t) {
    var e = [];
    return Array.isArray(t) && this.forEach(function (i) {
        -1 != t.indexOf(i) && e.push(i)
    }), e
}, Array.prototype.insert = function (t, e) {
    this.splice(t, 0, e)
};
var LadiPageScriptV2 = LadiPageScriptV2 || function () {
};
LadiPageScriptV2.prototype.init = function () {
    this.const = {
        DESKTOP: "desktop",
        MOBILE: "mobile",
        DOMAIN_GOOGLE_DOCS: "docs.google.com",
        POWERED_BY_IMAGE: "",
        STATIC_DOMAIN: "w.ladicdn.com",
        APP_RUNTIME_PREFIX: "_runtime",
        DATA_ACTION_TYPE: {
            link: "link",
            section: "section",
            email: "email",
            phone: "phone",
            popup: "popup",
            hidden_show: "hidden_show",
            lightbox_image: "lightbox_image",
            lightbox_video: "lightbox_video",
            lightbox_iframe: "lightbox_iframe"
        },
        COUNTDOWN_TYPE: {countdown: "countdown", daily: "daily", endtime: "endtime"},
        COUNTDOWN_ITEM_TYPE: {day: "day", hour: "hour", minute: "minute", seconds: "seconds"},
        VIDEO_TYPE: {youtube: "youtube"},
        TRACKING_NAME: "ladicid",
        PUBLISH_STYLE: {desktop_min_width: 768},
        ANIMATED_LIST: ["rotate-1", "rotate-2", "rotate-3", "type", "scale", "loading-bar", "slide", "clip", "zoom", "push"],
        POSITION_TYPE: {
            default: "default",
            top: "top",
            bottom: "bottom",
            top_left: "top_left",
            top_center: "top_center",
            top_right: "top_right",
            center_left: "center_left",
            center_right: "center_right",
            bottom_left: "bottom_left",
            bottom_center: "bottom_center",
            bottom_right: "bottom_right"
        },
        INPUT_TYPE: {
            tel: "tel",
            text: "text",
            select_multiple: "select_multiple",
            number: "number",
            email: "email",
            textarea: "textarea",
            select: "select",
            radio: "radio",
            checkbox: "checkbox",
            add_to_cart_variant_product: "add_to_cart_variant_product"
        },
        ADD_TO_CART_PRODUCT_TYPE: {combined: "combined", combobox: "combobox"},
        ADD_TO_CART_PRODUCT_TITLE: {left: "left", top: "top"},
        FORM_THANKYOU_TYPE: {default: "default", url: "url", popup: "popup"},
        GAME_RESULT_TYPE: {default: "default", popup: "popup"},
        PERCENT_TRACKING_SCROLL: [0, 25, 50, 75, 100],
        TIME_ONPAGE_TRACKING: [10, 30, 60, 120, 180, 300, 600],
        FORM_CONFIG_TYPE: {
            email: "EMAIL",
            mail_chimp: "MAIL_CHIMP",
            infusion_soft: "INFUSION_SOFT",
            active_campaign: "ACTIVE_CAMPAIGN",
            hubspot: "HUBSPOT",
            smtp: "SMTP",
            get_response: "GET_RESPONSE",
            google_sheet: "GOOGLE_SHEET",
            google_form: "GOOGLE_FORM",
            custom_api: "CUSTOM_API",
            ladisales: "LADISALES"
        },
        ADD_TO_CART_DETAIL_LAYOUT: {editable: "editable", viewonly: "viewonly"},
        WIDTH_SECTION_RESIZE: {},
        RESIZE_ADD_PIXEL: 300,
        RESIZE_RANGE: 50,
        LANG: {
            ALERT_TITLE: "Alert",
            ALERT_BUTTON_TEXT: "OK",
            GAME_RESULT_MESSAGE: "ChÃºc má»«ng báº¡n nháº­n Ä‘Æ°á»£c {{coupon_text}}. Nháº­p mÃ£: {{coupon_code}} Ä‘á»ƒ sá»­ dá»¥ng. Báº¡n cÃ²n {{spin_turn_left}} lÆ°á»£t quay.",
            GAME_MAX_TURN_MESSAGE: "Báº¡n Ä‘Ã£ háº¿t lÆ°á»£t quay.",
            FORM_SEND_DATA_ERROR: "ÄÃ£ xáº£y ra lá»—i, vui lÃ²ng thá»­ láº¡i!",
            FORM_SEND_DATA_NO_CONFIG: "Vui lÃ²ng kiá»ƒm tra láº¡i cáº¥u hÃ¬nh Form!",
            FORM_THANKYOU_MESSAGE_DEFAULT: "Cáº£m Æ¡n báº¡n Ä‘Ã£ quan tÃ¢m!",
            FORM_INPUT_REQUIRED_ERROR: "Vui lÃ²ng nháº­p Ä‘áº§y Ä‘á»§ cÃ¡c trÆ°á»ng thÃ´ng tin!",
            FORM_INPUT_EMAIL_REGEX: "Vui lÃ²ng nháº­p Ä‘Ãºng Ä‘á»‹nh dáº¡ng email!",
            FORM_INPUT_TEXT_REGEX: "Vui lÃ²ng nháº­p Ä‘Ãºng Ä‘á»‹nh dáº¡ng!"
        }
    }, this.runtime = {
        backdrop_popup_id: "backdrop-popup",
        lightbox_screen_id: "lightbox-screen",
        builder_section_popup_id: "SECTION_POPUP",
        ladipage_powered_by_classname: "ladipage_powered_by",
        current_element_mouse_down_carousel: null,
        current_element_mouse_down_carousel_position_x: 0,
        current_element_mouse_down_carousel_diff: 40,
        current_element_mouse_down_gallery_control: null,
        current_element_mouse_down_gallery_control_time: 0,
        current_element_mouse_down_gallery_control_time_click: 300,
        current_element_mouse_down_gallery_control_position_x: 0,
        current_element_mouse_down_gallery_view: null,
        current_element_mouse_down_gallery_view_position_x: 0,
        current_element_mouse_down_gallery_view_diff: 40,
        scroll_show_popup: {},
        scroll_depth: [],
        scroll_to_section: {},
        isMobileOnly: !1,
        interval_countdown: null,
        interval_gallery: null,
        timeout_gallery: {},
        interval_carousel: null,
        timenext_carousel: {},
        isClient: !1,
        isDesktop: !0,
        isIE: !1,
        device: this.const.DESKTOP,
        ladipage_id: null,
        tmp: {},
        tabindexForm: 0,
        eventData: {},
        timenow: 0,
        widthScrollBar: 0,
        replaceStr: {},
        replacePrefixStart: "{{",
        replacePrefixEnd: "}}"
    }, this.const.WIDTH_SECTION_RESIZE[this.const.DESKTOP] = 1440, this.const.WIDTH_SECTION_RESIZE[this.const.MOBILE] = 768
}, LadiPageScriptV2.prototype.run = function (t) {
    var e = this;
    this.runtime.isIE = !!document.documentMode, this.runtime.isIE = this.runtime.isIE ? this.runtime.isIE : !this.runtime.isIE && !!window.StyleMedia, this.runtime.isClient = t, this.runtime.timenow = this.getCookie("_timenow"), this.isEmpty(this.runtime.timenow) ? (this.runtime.timenow = Date.now(), this.setCookie(null, "_timenow", this.runtime.timenow, 0, !0, window.location.pathname)) : this.runtime.timenow = parseFloat(this.runtime.timenow) || 0;
    try {
        this.runtime.widthScrollBar = window.innerWidth - document.documentElement.clientWidth
    } catch (t) {
    }
    if (t) {
        if (this.isString(this.runtime.eventData)) try {
            var i = decodeURIComponent(this.runtime.eventData);
            this.runtime.eventData = JSON.parse(i)
        } catch (t) {
            String.prototype.decode = function () {
                return this.valueOf().replaceAll(/&amp;/g, "&").replaceAll(/&gt;/g, ">").replaceAll(/&lt;/g, "<").replaceAll(/&quot;/g, '"')
            };
            var a = this.runtime.eventData.decode();
            a = a.replaceAll("\r\n", "").replaceAll("\n", ""), this.runtime.eventData = JSON.parse(a)
        }
    } else this.runtime.eventData = LadiPage.generateEventDataAll(t), this.runtime.isMobileOnly = LadiPage.data.is_mobile_only, this.runtime.ladipage_id = LadiPage.publish.id;
    this.runtime.isMobileOnly && Object.keys(e.runtime.eventData).forEach(function (t) {
        Object.keys(e.runtime.eventData[t]).forEach(function (i) {
            if (i.toLowerCase().startsWith(e.const.MOBILE)) {
                var a = e.const.DESKTOP + i.substring(e.const.MOBILE.length);
                e.runtime.eventData[t][a] = e.runtime.eventData[t][i]
            }
        })
    });
    this.isNull(window.ladi_is_desktop) ? this.runtime.isDesktop = t ? !/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()) : LadiPage.isDesktop() : this.runtime.isDesktop = t ? window.ladi_is_desktop : LadiPage.isDesktop(), this.runtime.device = this.runtime.isDesktop ? this.const.DESKTOP : this.const.MOBILE, this.runtime.tmp.isFirstScroll = !0, this.runtime.tmp.capture_form_data_last = {}, this.runtime.tmp.runAfterLocation = [], this.runtime.tmp.product_info = {}, this.runtime.tmp.timeout_product_info = {}, this.runtime.tmp.add_to_cart_detail = [], this.runtime.tmp.add_to_cart_total_discount = 0, this.runtime.tmp.add_to_cart_fee_shipping = 0, this.runtime.tmp.is_click_add_to_cart = !1, this.runtime.tmp.is_click_check_price_discount = !1, this.runtime.tmp.current_use_coupon = null, this.changeTotalPriceAddToCartDetail();
    var n = e.getURLSearchParams(window.location.search, null, !0), r = "";
    Object.keys(n).forEach(function (t) {
        t != e.const.TRACKING_NAME && (e.setDataReplaceStr(t, n[t]), (e.isArray(n[t]) ? n[t] : [n[t]]).forEach(function (i) {
            e.isEmpty(r) ? r += "?" : r += "&", r += t + "=" + encodeURIComponent(i)
        }))
    });
    var o = this.runtime.isDesktop, l = Object.keys(this.runtime.eventData), s = {};
    s[this.const.TRACKING_NAME] = e.isEmpty(n[this.const.TRACKING_NAME]) ? e.getCookie(this.const.TRACKING_NAME) : n[this.const.TRACKING_NAME], this.historyReplaceState(window.location.pathname + r + window.location.hash), this.deleteCookie(this.const.TRACKING_NAME);
    var c, d = function (t, i, a, n) {
        if (e.isEmpty(e.runtime.timeout_gallery[t]) && e.isEmpty(e.runtime.current_element_mouse_down_gallery_view) && e.isEmpty(e.runtime.current_element_mouse_down_gallery_control)) {
            var r = document.getElementById(t);
            if (!(e.isEmpty(r) || e.runtime.tmp.gallery_playing_video && i)) {
                var o = r.getElementsByClassName("ladi-gallery-view-item"),
                    l = r.getElementsByClassName("ladi-gallery-control-item");
                if (0 != o.length && 0 != o.length) {
                    var s = r.getAttribute("data-is-next") || "true";
                    s = "true" == s.toLowerCase();
                    var c = parseFloat(r.getAttribute("data-current")) || 0,
                        d = parseFloat(r.getAttribute("data-max-item")) || 0;
                    i ? s ? c >= d - 1 ? (c = d - 2, s = !1) : c++ : c <= 0 ? (c = 1, s = !0) : c-- : s ? c++ : c--, c < 0 && (c = 0), c >= d - 1 && (c = d - 1), e.isEmpty(a) && (a = s ? "next" : "prev"), e.isEmpty(n) && (n = s ? "left" : "right"), e.runtime.tmp.gallery_playing_video && !o[c].classList.contains("selected") && e.stopAllVideo(!0), o[c].classList.add(a), r.querySelectorAll(".ladi-gallery-view-item.selected")[0].classList.add(n);
                    var u = 1e3 * (parseFloat(getComputedStyle(o[c]).transitionDuration) || 0);
                    e.runtime.timeout_gallery[t] = e.runTimeout(function () {
                        o[c].classList.add(n), e.runtime.timeout_gallery[t] = e.runTimeout(function () {
                            for (var i = 0; i < o.length; i++) i == c ? o[i].classList.add("selected") : o[i].classList.remove("selected"), o[i].style.removeProperty("left"), o[i].classList.remove(a), o[i].classList.remove(n);
                            delete e.runtime.timeout_gallery[t]
                        }, u - 5)
                    }, 5);
                    for (var p = 0; p < l.length; p++) (parseFloat(l[p].getAttribute("data-index")) || 0) == c ? l[p].classList.add("selected") : l[p].classList.remove("selected");
                    var m = e.getElementBoundingClientRect(r),
                        y = e.getElementBoundingClientRect(r.getElementsByClassName("ladi-gallery-control-item")[c]);
                    if (r.getElementsByClassName("ladi-gallery")[0].classList.contains("ladi-gallery-top") || r.getElementsByClassName("ladi-gallery")[0].classList.contains("ladi-gallery-bottom")) {
                        var g = parseFloat(getComputedStyle(r.getElementsByClassName("ladi-gallery-control")[0]).width) || 0,
                            _ = parseFloat(getComputedStyle(r.getElementsByClassName("ladi-gallery-control-item")[c]).width) || 0,
                            f = y.x - m.x - (g - _) / 2;
                        f = -(f -= parseFloat(r.getElementsByClassName("ladi-gallery-control-box")[0].style.getPropertyValue("left")) || 0) > 0 ? 0 : -f;
                        var h = parseFloat(getComputedStyle(r.getElementsByClassName("ladi-gallery-control-box")[0]).width) || 0;
                        f < (h = (h = -(h -= parseFloat(getComputedStyle(r.getElementsByClassName("ladi-gallery-control")[0]).width) || 0)) > 0 ? 0 : h) && (f = h), r.getElementsByClassName("ladi-gallery-control-box")[0].style.setProperty("left", f + "px")
                    } else {
                        var v = parseFloat(getComputedStyle(r.getElementsByClassName("ladi-gallery-control")[0]).height) || 0,
                            E = parseFloat(getComputedStyle(r.getElementsByClassName("ladi-gallery-control-item")[c]).height) || 0,
                            S = y.y - m.y - (v - E) / 2;
                        S = -(S -= parseFloat(r.getElementsByClassName("ladi-gallery-control-box")[0].style.getPropertyValue("top")) || 0) > 0 ? 0 : -S;
                        var A = parseFloat(getComputedStyle(r.getElementsByClassName("ladi-gallery-control-box")[0]).height) || 0;
                        S < (A = (A = -(A -= parseFloat(getComputedStyle(r.getElementsByClassName("ladi-gallery-control")[0]).height) || 0)) > 0 ? 0 : A) && (S = A), r.getElementsByClassName("ladi-gallery-control-box")[0].style.setProperty("top", S + "px")
                    }
                    r.setAttribute("data-is-next", s), r.setAttribute("data-current", c)
                }
            }
        }
    }, u = function (t, i) {
        if ("gallery" == i) {
            var a = document.getElementById(t);
            if (!e.isEmpty(a)) {
                var n = a.getElementsByClassName("ladi-gallery-control-item").length;
                a.setAttribute("data-max-item", n);
                var r = function (i) {
                    i.stopPropagation(), function (t, i) {
                        var a = i.getAttribute("data-video-type"), n = i.getAttribute("data-video-url"),
                            r = e.getVideoId(a, n), o = i.getAttribute("data-index"),
                            l = document.getElementById(t + "_" + o + "_player");
                        e.isEmpty(l) && (e.stopAllVideo(), e.runtime.tmp.gallery_playing_video = !0, a == e.const.VIDEO_TYPE.youtube && (l = document.createElement("iframe"), i.parentElement.insertBefore(l, i.nextSibling), l.outerHTML = '<iframe id="' + t + "_" + o + '_player" class="iframe-video-play" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" src="https://www.youtube.com/embed/' + r + '?autoplay=1&rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'))
                    }(t, i.target)
                };
                if (n > 0) {
                    for (var o = 0; o < n; o++) {
                        var l = a.getElementsByClassName("ladi-gallery-view-item")[o];
                        e.isEmpty(l) || l.classList.contains("play-video") && l.addEventListener("click", r)
                    }
                    if (n <= 1) for (var s = a.getElementsByClassName("ladi-gallery-view-arrow"), c = 0; c < s.length; c++) s[c].classList.add("ladi-hidden");
                    a.setAttribute("data-current", 0), a.setAttribute("data-is-next", !0)
                }
            }
        }
    }, p = function (t, i, a) {
        t.stopPropagation();
        var n = e.runtime.eventData[i], r = n[e.runtime.device + ".option.gallery_control.autoplay"],
            o = n[e.runtime.device + ".option.gallery_control.autoplay_time"], l = 0;
        r && !e.isEmpty(o) && (l = o);
        var s = parseFloat(t.target.getAttribute("data-index")) || 0, c = null, u = null;
        (parseFloat(a.getAttribute("data-current")) || 0) > s ? (c = "prev", u = "right") : (c = "next", u = "left");
        var p = a.getAttribute("data-is-next") || "true";
        (p = "true" == p.toLowerCase()) ? s-- : s++, a.setAttribute("data-current", s), a.setAttribute("data-next-time", Date.now() + 1e3 * l), d(i, !1, c, u)
    }, m = function (t, i) {
        if ((e.isEmpty(e.runtime.timenext_carousel[t]) || !(e.runtime.timenext_carousel[t] > Date.now())) && e.isEmpty(e.runtime.current_element_mouse_down_carousel)) {
            var a = document.getElementById(t);
            if (!e.isEmpty(a)) {
                var n = a.getAttribute("data-is-next") || "true";
                n = "true" == n.toLowerCase();
                var r = parseFloat(a.getAttribute("data-current")) || 0,
                    o = parseFloat(e.runtime.eventData[t][e.runtime.device + ".option.carousel_crop.width"]) || 0,
                    l = parseFloat(e.runtime.eventData[t][e.runtime.device + ".option.carousel_crop.width_item"]) || 0;
                l > a.clientWidth && (l = a.clientWidth);
                var s = Math.ceil(o / l);
                i ? n ? r >= s - 1 ? (r = s - 2, n = !1) : r++ : r <= 0 ? (r = 1, n = !0) : r-- : n ? r++ : r--, r < 0 && (r = 0), r >= s - 1 && (r = s - 1);
                var c = 1e3 * (parseFloat(getComputedStyle(a.getElementsByClassName("ladi-carousel-content")[0]).transitionDuration) || 0);
                e.runtime.timenext_carousel[t] = Date.now() + c;
                var d = e.getElementBoundingClientRect(a), u = d.x + r * l - d.x - (a.clientWidth - l) / 2;
                u = -u > 0 ? 0 : -u;
                var p = -(o - a.clientWidth);
                u < p && (u = p), a.getElementsByClassName("ladi-carousel-content")[0].style.setProperty("left", u + "px"), a.setAttribute("data-is-next", n), a.setAttribute("data-current", r)
            }
        }
    }, y = function (i, a) {
        if ("form" == a) {
            var n = e.runtime.eventData[i];
            if (n["option.is_add_to_cart"]) {
                var r = n["option.add_to_cart_product"], o = n["option.form_account_id"],
                    l = document.getElementById(i);
                if (!e.isEmpty(l)) {
                    var s = l.querySelector('[data-variant="true"]');
                    if (!e.isEmpty(s)) {
                        var c = e.runtime.eventData[s.id];
                        if (!e.isEmpty(c)) {
                            var d = s.clientHeight,
                                u = e.generateVariantProduct(r, !0, o, c["option.input_add_to_cart_variant_product_type"], c["option.input_add_to_cart_variant_product_title"], c["option.input_add_to_cart_variant_product_price"], c["option.input_tabindex"], t, !0, function (t) {
                                    y(i, a)
                                });
                            if (!e.isEmpty(u)) {
                                s.innerHTML = u;
                                for (var p = s.querySelectorAll("select.ladi-form-control"), m = 0; m < p.length; m++) p[m].addEventListener("change", e.runtime.tmp.generateLadiSaleProduct);
                                if (c["option.input_add_to_cart_variant_product_type"] != e.const.ADD_TO_CART_PRODUCT_TYPE.combined) {
                                    var g = (parseFloat(getComputedStyle(s).top) || 0) + (parseFloat(getComputedStyle(s).height) || 0),
                                        _ = "style_add_to_cart_" + i, f = "#" + s.id + " {height: auto;}";
                                    e.createStyleElement(_, f);
                                    var h = s.clientHeight - d, v = e.findAncestor(s, "ladi-element");
                                    if (!e.isEmpty(v)) {
                                        for (var E = v.getElementsByClassName("ladi-element"), S = (parseFloat(getComputedStyle(l).height) || 0) + h, A = 0; A < E.length; A++) if (E[A].id != s.id) {
                                            var L = (parseFloat(getComputedStyle(E[A]).top) || 0) + (parseFloat(getComputedStyle(E[A]).height) || 0);
                                            L > g ? (f += "#" + E[A].id + " {top: " + ((parseFloat(getComputedStyle(E[A]).top) || 0) + h) + "px;}", L + h > S && (S = L + h)) : L > S && (S = L)
                                        }
                                        var P = "#" + i + " {height: " + S + "px;}";
                                        e.createStyleElement(_, f + P)
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }, g = function (i, a) {
        var n = e.runtime.eventData[i];
        if (!(e.isEmpty(n) || e.isEmpty(n["option.form_account_id"]) || e.isEmpty(n["option.add_to_cart_product"]) || e.isEmpty(n["option.add_to_cart_product_key"]))) {
            var r = JSON.stringify(n),
                o = e.generateProductKey(r, !0, n["option.add_to_cart_product"], n["option.form_account_id"], n["option.add_to_cart_product_key"], function (t) {
                    g(i, a)
                });
            if (r !== o) {
                var l = null, s = null, c = null;
                if ("headline" != a && "paragraph" != a || window.ladi(i).value(o), "image" == a) {
                    if (l = document.getElementById(i), e.isEmpty(l)) return;
                    c = e.getOptimizeImage(o, l.clientWidth, l.clientHeight, !0, !1, t), s = "style_add_to_cart_image_" + i;
                    var d = "";
                    d = e.isEmpty(c) ? "#" + i + "  > .ladi-image > .ladi-image-background {background-image: none;}" : "#" + i + '  > .ladi-image > .ladi-image-background {background-image: url("' + c + '");}', e.createStyleElement(s, d)
                }
                if ("gallery" == a) {
                    if (!e.isArray(o)) return;
                    if (l = document.getElementById(i), e.isEmpty(l)) return;
                    for (var u = l.getElementsByClassName("ladi-gallery-view-item"); u.length < o.length;) {
                        var m = e.createTmpElement("div", '<div class="ladi-gallery-view-item" data-index="' + u.length + '"></div>', null, !0);
                        l.getElementsByClassName("ladi-gallery-view")[0].appendChild(m)
                    }
                    for (; u.length > o.length;) u[u.length - 1].parentElement.removeChild(u[u.length - 1]);
                    for (var y = l.getElementsByClassName("ladi-gallery-control-item"), _ = function (t) {
                        p(t, i, l)
                    }; y.length < o.length;) {
                        var f = e.createTmpElement("div", '<div class="ladi-gallery-control-item" data-index="' + y.length + '"></div>', null, !0);
                        f.addEventListener("click", _), l.getElementsByClassName("ladi-gallery-control-box")[0].appendChild(f)
                    }
                    for (; y.length > o.length;) y[y.length - 1].parentElement.removeChild(y[y.length - 1]);
                    s = "style_add_to_cart_gallery_" + i;
                    var h = "";
                    o.length <= 1 && (h += "#" + i + " .ladi-gallery .ladi-gallery-view .ladi-gallery-view-arrow {display: none;}", h += "#" + i + " > .ladi-gallery > .ladi-gallery-view {height: 100%;}", h += "#" + i + " > .ladi-gallery > .ladi-gallery-control {display: none;}");
                    var v = l.getElementsByClassName("ladi-gallery-view")[0],
                        E = l.getElementsByClassName("ladi-gallery-control-item")[0];
                    o.forEach(function (a, n) {
                        c = e.getOptimizeImage(a.src, v.clientWidth, v.clientHeight, !0, !1, t), h += "#" + i + ' .ladi-gallery .ladi-gallery-view-item[data-index="' + n + '"] {background-image: url("' + c + '");}', c = e.getOptimizeImage(a.src, E.clientWidth, E.clientHeight, !0, !1, t), h += "#" + i + ' .ladi-gallery .ladi-gallery-control-item[data-index="' + n + '"] {background-image: url("' + c + '");}'
                    }), l.setAttribute("data-max-item", o.length), e.isEmpty(h) || e.createStyleElement(s, h)
                }
            }
        }
    };
    this.runtime.tmp.generateLadiSaleProduct = function (t) {
        var i = function () {
            l.forEach(function (t) {
                var i = e.runtime.eventData[t];
                g(t, i.type)
            })
        }, a = function (n) {
            if (n && e.isEmpty(t)) i(); else {
                var r = t.target, o = e.findAncestor(r, "ladi-element");
                if (!e.isEmpty(o)) {
                    var l = e.findAncestor(o, "ladi-element");
                    if (!e.isEmpty(l)) {
                        var s = e.runtime.eventData[l.id];
                        if (!e.isEmpty(s)) {
                            var c = s["option.form_account_id"], d = s["option.add_to_cart_product"];
                            if (!e.isEmpty(c) && !e.isEmpty(d)) {
                                var u = e.generateVariantProduct(d, !1, c, null, null, null, null, !0, !0, function (t) {
                                    a(!1)
                                });
                                if (e.isObject(u) && e.isObject(u.store_info) && e.isObject(u.product)) {
                                    var p = e.getProductVariantIndex(l.id, d, c),
                                        m = document.querySelectorAll('[data-variant="true"]');
                                    if (-1 != p) for (var y = 0; y < m.length; y++) if (m[y].id != o.id) {
                                        var g = e.runtime.eventData[m[y].id];
                                        if (!e.isEmpty(g)) {
                                            var _ = null;
                                            if (g["option.input_add_to_cart_variant_product_type"] == e.const.ADD_TO_CART_PRODUCT_TYPE.combobox) {
                                                if (!e.isArray(u.product.variants)) continue;
                                                for (var f = u.product.variants[p], h = f.option_ids.split("/"), v = 0; v < h.length; v++) _ = document.querySelector("#" + m[y].id + ' .ladi-form-item [data-product-variant-id="' + h[v] + '"]'), e.isEmpty(_) || _.getAttribute("data-store-id") != u.store_info.id || _.getAttribute("data-product-id") != f.product_id || (_.value = f["option" + (v + 1)])
                                            }
                                            if (g["option.input_add_to_cart_variant_product_type"] == e.const.ADD_TO_CART_PRODUCT_TYPE.combined) {
                                                if (_ = m[y].querySelector("select.ladi-form-control"), e.isEmpty(_) || _.getAttribute("data-store-id") != u.store_info.id || _.getAttribute("data-product-id") != u.product.product_id) continue;
                                                _.value = p + ""
                                            }
                                        }
                                    }
                                    for (var E = 0; E < m.length; E++) {
                                        var S = e.findAncestor(m[E], "ladi-form");
                                        if (!e.isEmpty(S)) {
                                            var A = S.querySelector('input[name="quantity"]');
                                            e.isEmpty(A) || A.dispatchEvent(new Event("input"))
                                        }
                                    }
                                    i()
                                }
                            }
                        }
                    }
                }
            }
        };
        a(!0)
    }, this.runtime.tmp.generateAddToCartDetail = function () {
        l.forEach(function (i) {
            !function (i, a) {
                if ("add_to_cart_detail" == a) {
                    var n = e.runtime.eventData[i];
                    if (!e.isEmpty(n)) {
                        var r = document.getElementById(i);
                        e.isEmpty(r) || (r.getElementsByClassName("ladi-add-to-cart-detail")[0].innerHTML = e.generateAddToCartDetail(n["option.add_to_cart_detail_layout"], n["option.message_no_product"], t))
                    }
                }
            }(i, e.runtime.eventData[i].type)
        })
    }, this.runtime.tmp.generateLadiSaleProduct(), this.createAddToCartDetailData(), l.forEach(function (i) {
        var a = e.runtime.eventData[i], n = LadiPageApp[a.type + e.const.APP_RUNTIME_PREFIX];
        e.isEmpty(n) ? (function (t, i, a) {
            var n = document.getElementById(t);
            e.isEmpty(n) || (e.isEmpty(a) ? n.addEventListener("click", function (i) {
                e.runEventTracking(t, !1)
            }) : (a.type == e.const.DATA_ACTION_TYPE.link && n.addEventListener("click", function (i) {
                if ("true" == n.getAttribute("data-action") && !e.isEmpty(a.action)) {
                    var r = a.action, o = e.createTmpElement("a", "", {href: r, target: a.target});
                    r = e.getLinkUTMRedirect(o.href, window.location.search), r = e.convertDataReplaceStr(r), o.href = r, o.click()
                }
                e.runEventTracking(t, !1)
            }), a.type == e.const.DATA_ACTION_TYPE.email && n.addEventListener("click", function (i) {
                "true" != n.getAttribute("data-action") || e.isEmpty(a.action) || e.createTmpElement("a", "", {href: "mailto:" + a.action}).click(), e.runEventTracking(t, !1)
            }), a.type == e.const.DATA_ACTION_TYPE.phone && n.addEventListener("click", function (i) {
                "true" != n.getAttribute("data-action") || e.isEmpty(a.action) || e.createTmpElement("a", "", {href: "tel:" + a.action}).click(), e.runEventTracking(t, !1)
            }), a.type == e.const.DATA_ACTION_TYPE.section && n.addEventListener("click", function (i) {
                var r = document.getElementById(a.action);
                if (!e.isEmpty(r)) {
                    var o = e.findAncestor(n, "ladi-popup");
                    if (!e.isEmpty(o)) {
                        var l = e.findAncestor(o, "ladi-element");
                        l.hasAttribute("data-popup-backdrop") && window.ladi(l.id).hide()
                    }
                    window.ladi(a.action).scroll(), e.runEventTracking(t, !1)
                }
            }), a.type == e.const.DATA_ACTION_TYPE.popup && n.addEventListener("click", function (i) {
                var n = document.getElementById(a.action);
                e.isEmpty(n) || window.ladi(a.action).show(), e.runEventTracking(t, !1)
            }), a.type == e.const.DATA_ACTION_TYPE.hidden_show && n.addEventListener("click", function (i) {
                e.isArray(a.hidden_ids) && a.hidden_ids.forEach(function (t) {
                    window.ladi(t).hide()
                }), e.isArray(a.show_ids) && a.show_ids.forEach(function (t) {
                    window.ladi(t).show()
                }), e.runEventTracking(t, !1)
            }), a.type == e.const.DATA_ACTION_TYPE.lightbox_image && n.addEventListener("click", function (i) {
                lightbox_image(a.image_url), e.runEventTracking(t, !1)
            }), a.type == e.const.DATA_ACTION_TYPE.lightbox_video && n.addEventListener("click", function (i) {
                lightbox_video(a.video_url, a.video_type), e.runEventTracking(t, !1)
            }), a.type == e.const.DATA_ACTION_TYPE.lightbox_iframe && n.addEventListener("click", function (i) {
                lightbox_iframe(a.iframe_url), e.runEventTracking(t, !1)
            })))
        }(i, a.type, a["option.data_action"]), function (t, i, a, n, r, l) {
            if ("video" == i && !e.isEmpty(a)) {
                var s = document.getElementById(t);
                e.isEmpty(s) || ((o && r || !o && l) && e.playVideo(t, n, a), s.addEventListener("click", function (i) {
                    i.stopPropagation(), e.playVideo(t, n, a)
                }))
            }
        }(i, a.type, a["option.video_value"], a["option.video_type"], a[e.const.DESKTOP + ".option.video_autoplay"], a[e.const.MOBILE + ".option.video_autoplay"]), function (t, i, a, n) {
            "popup" == i && a && ((e.isEmpty(n) || n < 0) && (n = 0), e.runTimeout(function () {
                window.ladi(t).show()
            }, 1e3 * n))
        }(i, a.type, a["option.show_popup_welcome_page"], a["option.delay_popup_welcome_page"]), function (t, i, a, n, r, o, l) {
            if ("countdown" == i && !e.isEmpty(a)) {
                var s = document.getElementById(t);
                e.isEmpty(s) || (s.setAttribute("data-type", a), a != e.const.COUNTDOWN_TYPE.countdown || e.isEmpty(n) || s.setAttribute("data-minute", n), a != e.const.COUNTDOWN_TYPE.endtime || e.isEmpty(l) || s.setAttribute("data-endtime", l), a != e.const.COUNTDOWN_TYPE.daily || e.isEmpty(r) || e.isEmpty(o) || (s.setAttribute("data-daily-start", r), s.setAttribute("data-daily-end", o)))
            }
        }(i, a.type, a["option.countdown_type"], a["option.countdown_minute"], a["option.countdown_daily_start"], a["option.countdown_daily_end"], a["option.countdown_endtime"]), function (t, i, a) {
            if ("countdown_item" == i && !e.isEmpty(a)) {
                var n = document.getElementById(t);
                e.isEmpty(n) || n.setAttribute("data-item-type", a)
            }
        }(i, a.type, a["option.countdown_item_type"]), function (t, i, a, n) {
            if ("section" == i) {
                var r = document.getElementById(t);
                if (!e.isEmpty(r)) {
                    var l = r.getElementsByClassName("ladi-section-arrow-down")[0];
                    if (e.isEmpty(l)) {
                        if (o) {
                            if (e.isEmpty(a)) return void r.removeAttribute("data-opacity");
                            var s = (parseFloat(a) || 0) + 50;
                            if (s > r.clientHeight) return void r.removeAttribute("data-opacity");
                            r.style.setProperty("height", s + "px"), r.classList.add("overflow-hidden")
                        } else {
                            if (e.isEmpty(n)) return void r.removeAttribute("data-opacity");
                            var c = (parseFloat(n) || 0) + 50;
                            if (c > r.clientHeight) return void r.removeAttribute("data-opacity");
                            r.style.setProperty("height", c + "px"), r.classList.add("overflow-hidden")
                        }
                        (l = document.createElement("div")).className = "ladi-section-arrow-down", r.appendChild(l), r.removeAttribute("data-opacity"), l.addEventListener("click", function (t) {
                            t.stopPropagation(), r.classList.add("ladi-section-readmore"), r.style.removeProperty("height"), r.classList.remove("overflow-hidden"), l.parentElement.removeChild(l), e.runTimeout(function () {
                                r.classList.remove("ladi-section-readmore")
                            }, 1e3 * parseFloat(getComputedStyle(r).transitionDuration))
                        })
                    }
                }
            }
        }(i, a.type, a[e.const.DESKTOP + ".option.readmore_range"], a[e.const.MOBILE + ".option.readmore_range"]), function (t, i, a) {
            if ("form_item" == i) {
                var n = null;
                if (a == e.const.INPUT_TYPE.select || a == e.const.INPUT_TYPE.select_multiple) for (var r = document.getElementById(t).getElementsByClassName("ladi-form-control"), o = 0; o < r.length; o++) r[o].addEventListener("change", function (t) {
                    t.target.setAttribute("data-selected", t.target.value)
                });
                if (a == e.const.INPUT_TYPE.checkbox) {
                    n = document.getElementById(t).getElementsByClassName("ladi-form-checkbox-item");
                    for (var l = function (t) {
                        t.stopPropagation();
                        var i = e.findAncestor(t.target, "ladi-form-checkbox-item");
                        e.isEmpty(i) || i.getElementsByTagName("span")[0].setAttribute("data-checked", t.target.checked)
                    }, s = function (t) {
                        t.stopPropagation();
                        var i = e.findAncestor(t.target, "ladi-form-checkbox-item");
                        e.isEmpty(i) || i.getElementsByTagName("input")[0].click()
                    }, c = 0; c < n.length; c++) {
                        var d = n[c].getElementsByTagName("input")[0];
                        n[c].getElementsByTagName("span")[0].addEventListener("click", s), d.addEventListener("change", l)
                    }
                }
                if (a == e.const.INPUT_TYPE.radio) {
                    n = document.getElementById(t).getElementsByClassName("ladi-form-checkbox-item");
                    for (var u = function (t) {
                        var i = e.findAncestor(t.target, "ladi-form-checkbox-item"),
                            a = e.findAncestor(i, "ladi-form-checkbox");
                        if (!e.isEmpty(a)) {
                            for (var n = a.querySelectorAll(".ladi-form-checkbox-item span"), r = 0; r < n.length; r++) n[r].setAttribute("data-checked", !1);
                            e.isEmpty(i) || i.getElementsByTagName("span")[0].setAttribute("data-checked", t.target.checked)
                        }
                    }, p = function (t) {
                        t.stopPropagation();
                        var i = e.findAncestor(t.target, "ladi-form-checkbox-item");
                        e.isEmpty(i) || i.getElementsByTagName("input")[0].click()
                    }, m = 0; m < n.length; m++) {
                        var y = n[m].getElementsByTagName("input")[0];
                        n[m].getElementsByTagName("span")[0].addEventListener("click", p), y.addEventListener("change", u)
                    }
                }
            }
        }(i, a.type, a["option.input_type"]), u(i, a.type), e.startAutoScroll(i, a.type, a[e.const.DESKTOP + ".option.auto_scroll"], a[e.const.MOBILE + ".option.auto_scroll"]), y(i, a.type), function (t, i) {
            if ("form" == i) {
                var a = e.runtime.eventData[t];
                if (a["option.is_add_to_cart"]) {
                    var n = document.getElementById(t);
                    if (!e.isEmpty(n)) {
                        var r = n.querySelector('input[name="quantity"]');
                        if (!e.isEmpty(r)) {
                            var o = function (i) {
                                if (!e.isEmpty(i.target.value)) {
                                    var n = e.generateVariantProduct(a["option.add_to_cart_product"], !1, a["option.form_account_id"], null, null, null, null, !0, !0, function () {
                                        o(i)
                                    });
                                    if (!(e.isEmpty(n) || e.isEmpty(n.store_info) || e.isEmpty(n.product))) {
                                        var r = e.getProductVariantIndex(t, a["option.add_to_cart_product"], a["option.form_account_id"]);
                                        if (-1 != r) {
                                            var l = n.product.variants[r].quantity, s = parseInt(i.target.value) || 0;
                                            s <= 0 && (s = 0, (0 == n.product.variants[r].inventory_checked || l > 0) && (s = 1), i.target.value = s), 1 == n.product.variants[r].inventory_checked && (s > l || 0 == l) && (i.target.value = l)
                                        }
                                    }
                                }
                            };
                            r.addEventListener("input", o)
                        }
                    }
                }
            }
        }(i, a.type)) : n(a, t).run(i, o)
    }), function () {
        if (e.runtime.isClient && !e.runtime.isDesktop && !e.isEmpty(e.runtime.bodyFontSize)) {
            var t = (parseFloat(getComputedStyle(document.body).fontSize) || 0) / e.runtime.bodyFontSize;
            if (1 != t) for (var i = document.querySelectorAll(".ladi-paragraph, .ladi-list-paragraph, .ladi-headline, .ladi-countdown, .ladi-form"), a = 0; a < i.length; a++) {
                var n = (parseFloat(getComputedStyle(i[a]).fontSize) || 0) / (t * t);
                i[a].style.setProperty("font-size", n + "px")
            }
        }
    }(), function () {
        var i = document.getElementsByClassName("ladi-form"), a = null, n = null, r = null, o = null, l = null,
            c = null, d = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"],
            u = ["name", "email", "phone", "address", "ward", "district", "state", "country"],
            p = ["ward", "district", "state", "country"], m = ["email", "phone"], y = e.copy(p).reverse(),
            g = function (t, i, n) {
                if (i && e.isEmpty(a[n])) return !1;
                var r = [];
                if (o.forEach(function (t) {
                    e.isEmpty(a[t]) && r.push(t)
                }), i && (r = r.only([n])), r.length > 0) return i || e.showMessage(e.const.LANG.FORM_INPUT_REQUIRED_ERROR, null, function () {
                    var i = t.querySelector('[name="' + r[0] + '"]');
                    e.isEmpty(i) || i.focus()
                }), !1;
                var s = !0, c = 0, d = function () {
                    var i = t.querySelector('[name="' + l[c].name + '"]');
                    e.isEmpty(i) || i.focus()
                };
                for (c = 0; c < l.length; c++) if (!i || l[c].name == n) {
                    var u = a[l[c].name];
                    if (!e.isEmpty(u)) try {
                        if (!new RegExp("^" + l[c].pattern + "$", l[c].pattern_flag).test(u)) {
                            i || e.showMessage(l[c].title, null, d), s = !1;
                            break
                        }
                    } catch (t) {
                    }
                }
                return s
            }, _ = function (t, i) {
                a = {};
                for (var r = t.querySelectorAll(".ladi-element .ladi-form-item-container [name]"), s = {}, c = null, d = 0; d < r.length; d++) c = r[d].getAttribute("name"), s[c] = parseInt(r[d].getAttribute("tabindex")) || 0;
                var m = Object.keys(s).sort(function (t, e) {
                    return s[t] - s[e]
                });
                if (m.only(p).length == p.length) for (var g = 0; g < m.length; g++) {
                    var _ = p.indexOf(m[g]);
                    -1 != _ && (m[g] = y[_])
                }
                for (var f = 0; f < m.length; f++) a[m[f]] = "";
                n = Object.keys(a);
                for (var h = 0; h < r.length; h++) {
                    if (c = r[h].getAttribute("name"), r[h].required && -1 == o.indexOf(c) && o.push(c), "INPUT" == r[h].tagName) {
                        var v = r[h].getAttribute("type").trim().toLowerCase(), E = r[h].getAttribute("pattern"),
                            S = r[h].getAttribute("title");
                        if ("email" == v ? l.push({
                            name: c,
                            pattern: '(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))',
                            pattern_flag: "gi",
                            title: e.const.LANG.FORM_INPUT_EMAIL_REGEX
                        }) : e.isEmpty(E) || l.push({
                            name: c,
                            pattern: E,
                            title: e.isEmpty(S) ? e.const.LANG.FORM_INPUT_TEXT_REGEX : S
                        }), "checkbox" == v) {
                            e.isArray(a[c]) || (a[c] = []), r[h].checked && a[c].push(r[h].value);
                            continue
                        }
                        if ("radio" == v) {
                            r[h].checked && (a[c] = r[h].value);
                            continue
                        }
                    }
                    a[c] = r[h].value
                }
                i || u.forEach(function (t) {
                    e.isNull(a[t]) || (e.setCookie(null, "_ladipage_" + t, a[t], 365), e.isArray(e.runtime.DOMAIN_SET_COOKIE) && e.runtime.DOMAIN_SET_COOKIE.forEach(function (i) {
                        i != window.location.host && e.setCookie(i, "_ladipage_" + t, a[t], 365)
                    }))
                })
            }, f = function (t, i, o) {
                var l = {form_config_id: r, ladipage_id: e.runtime.ladipage_id, tracking_form: [], form_data: []};
                if (t) l.status_send = 1, l.data_key = i; else {
                    l.status_send = 2;
                    var s = e.getCookie("_checkout_token");
                    e.isEmpty(s)
                }
                e.isEmpty(e.runtime.time_zone) || (l.time_zone = e.runtime.time_zone), n.forEach(function (t) {
                    var i = a[t];
                    e.isArray(i) && 0 == i.length && (i = ""), l.form_data.push({name: t, value: i})
                }), l.tracking_form.push({name: "url_page", value: window.location.href}), d.forEach(function (t) {
                    var i = c[t];
                    i = e.isNull(i) ? "" : i, l.tracking_form.push({name: t, value: i})
                }), e.isFunction(o) && o(l)
            }, h = function (t) {
                t.reset();
                for (var i = t.querySelectorAll(".ladi-element .ladi-form-item-container .ladi-form-checkbox-item input"), a = 0; a < i.length; a++) {
                    var n = e.findAncestor(i[a], "ladi-form-checkbox-item").querySelector("span");
                    e.isEmpty(n) || n.setAttribute("data-checked", i[a].checked)
                }
            }, v = function (t) {
                _(t, !1), g(t, !1, null) && (f(!1, null, function (t) {
                    e.sendRequest("POST", e.const.API_FORM_DATA, JSON.stringify(t), !0, {"Content-Type": "application/json"})
                }), e.showMessage(e.const.LANG.FORM_SEND_DATA_NO_CONFIG), h(t))
            }, E = function (i, u, p, m) {
                c = e.getURLSearchParams(window.location.search), a = {}, n = [], r = null, o = [], l = [];
                var y = i.getElementsByClassName("ladi-form")[0];
                if (!e.isEmpty(y)) {
                    var E = e.runtime.eventData[i.id];
                    if (e.isEmpty(E) || (r = E["option.form_config_id"]), u) {
                        if (e.isEmpty(e.getCookie("_capture_" + i.id))) return;
                        if (_(y, u), !g(y, u, m)) return;
                        f(u, p, function (t) {
                            var i = t.form_data.findIndex(function (t) {
                                return t.name == m
                            }), a = -1 != i ? t.form_data[i].value : null;
                            !e.isEmpty(e.runtime.tmp.capture_form_data_last[p + "_" + m]) && e.equals(e.runtime.tmp.capture_form_data_last[p + "_" + m], a) || (e.runtime.tmp.capture_form_data_last[p + "_" + m] = a, e.sendRequest("POST", e.const.API_FORM_DATA, JSON.stringify(t), !0, {"Content-Type": "application/json"}))
                        })
                    } else if (e.isEmpty(E)) v(y); else if (e.isNull(e.runtime.tmp.form_sending) && (e.runtime.tmp.form_sending = {}), e.isNull(e.runtime.tmp.form_button_headline) && (e.runtime.tmp.form_button_headline = {}), !e.runtime.tmp.form_sending[i.id]) {
                        var S = E["option.form_send_ladipage"], A = E["option.form_api_data"],
                            L = E["option.thankyou_type"], P = E["option.thankyou_value"], w = E["option.is_add_to_cart"];
                        if (w || !e.isEmpty(r)) {
                            if (_(y, u), g(y, u, m)) if (w) console.log("click MUA NGAY Add To Cart"); else {
                                var b = 0, C = 0, T = [], N = !1, x = !1, k = !0, D = function (t) {
                                    t && h(y), delete e.runtime.tmp.form_sending[i.id], y.querySelector(".ladi-button > .ladi-element > .ladi-headline").innerHTML = e.runtime.tmp.form_button_headline[i.id]
                                }, I = function () {
                                    var n, r, o, l;
                                    n = function () {
                                        var n = e.findAncestor(i, "ladi-popup");
                                        if (!e.isEmpty(n)) {
                                            var r = e.findAncestor(n, "ladi-element").id;
                                            e.runRemovePopup(r, t)
                                        }
                                        var o = E["option.form_auto_funnel"];
                                        L == e.const.FORM_THANKYOU_TYPE.default && (P = e.isEmpty(P) ? e.const.LANG.FORM_THANKYOU_MESSAGE_DEFAULT : P, e.showMessage(P, a)), L == e.const.FORM_THANKYOU_TYPE.popup && (o && e.setDataReplaceElement(!1, !1, a, P), window.ladi(P).show()), L == e.const.FORM_THANKYOU_TYPE.url && window.ladi(P).open_url("_top", o ? a : null)
                                    }, r = null, o = !1, l = function () {
                                        o || (e.isFunction(n) && n(), e.removeTimeout(r), o = !0)
                                    }, e.isEmpty(s[e.const.TRACKING_NAME]) ? l() : (r = e.runTimeout(l, 3e3), e.sendRequest("POST", e.const.API_CHECKING_FORM, JSON.stringify(s), !0, {"Content-Type": "application/json"}, function (t, e, i) {
                                        i.readyState == XMLHttpRequest.DONE && l()
                                    })), e.deleteCookie("_capture_" + i.id), e.deleteCookie("_cart_token"), e.deleteCookie("_checkout_token"), e.createAddToCartDetailData()
                                }, O = function (t, a, n, r) {
                                    if (n.readyState == XMLHttpRequest.DONE) {
                                        if (r == e.const.API_FORM_DATA) {
                                            var o = {};
                                            try {
                                                o = JSON.parse(t)
                                            } catch (t) {
                                            }
                                            200 == o.code ? b++ : (C++, k = !1)
                                        } else 200 == a || 201 == a ? b++ : e.getElementAHref(r).host == e.const.DOMAIN_GOOGLE_DOCS ? b++ : C++;
                                        b + C == T.length && (k && !N && b >= 1 ? (N = !0, e.runEventTracking(i.id, !0), I(), D(!0)) : !x && C >= 1 && (x = !0, e.showMessage(e.const.LANG.FORM_SEND_DATA_ERROR), D(!1)))
                                    }
                                }, R = function (t) {

                                    var name = phone = address = email = message = quantity = color = size = field_1 = field_2 = field_3 = state = district = ward = '';
                                    $('.ladi-form').each(function () {
                                        if (name == '' || name == undefined) {
                                            name = $(this).find('input[name=name]').val();
                                        }
                                        if (phone == '' || phone == undefined) {
                                            phone = $(this).find('input[name=phone]').val();
                                        }
                                        if (email == '' || email == undefined) {
                                            email = $(this).find('input[name=email]').val();
                                        }
                                        if (address == '' || address == undefined) {
                                            address = $(this).find('input[name=address]').val();
                                        }

                                        if (quantity == '' || quantity == undefined) {
                                            quantity = $(this).find('input[name=quantity]').val();
                                        }

                                        if (color == '' || color == undefined) {
                                            color = $(this).find('select[name=color]').val();
                                        }
                                        if (color == '' || color == undefined) {
                                            color = $(this).find('input[name=color]').val();
                                        }

                                        if (size == '' || size == undefined) {
                                            size = $(this).find('select[name=size]').val();
                                        }
                                        if (size == '' || size == undefined) {
                                            size = $(this).find('input[name=size]').val();
                                        }

                                        if (message == '' || message == undefined) {
                                            message = $(this).find('textarea[name=message]').val();
                                        }
                                        if (message == '' || message == undefined) {
                                            message = $(this).find('input[name=message]').val();
                                        }

                                        if (field_1 == '' || field_1 == undefined) {
                                            field_1 = $(this).find('select[name=field_1]').val();
                                        }
                                        if (field_1 == '' || field_1 == undefined) {
                                            field_1 = $(this).find('input[name=field_1]').val();
                                        }
                                        if (field_1 == '' || field_1 == undefined) {
                                            field_1 = $(this).find('textarea[name=field_1]').val();
                                        }

                                        if (field_2 == '' || field_2 == undefined) {
                                            field_2 = $(this).find('select[name=field_2]').val();
                                        }
                                        if (field_2 == '' || field_2 == undefined) {
                                            field_2 = $(this).find('input[name=field_2]').val();
                                        }
                                        if (field_2 == '' || field_2 == undefined) {
                                            field_2 = $(this).find('textarea[name=field_2]').val();
                                        }

                                        if (field_3 == '' || field_3 == undefined) {
                                            field_3 = $(this).find('select[name=field_3]').val();
                                        }
                                        if (field_3 == '' || field_3 == undefined) {
                                            field_3 = $(this).find('input[name=field_3]').val();
                                        }
                                        if (field_3 == '' || field_3 == undefined) {
                                            field_3 = $(this).find('textarea[name=field_3]').val();
                                        }

                                        if (state == '' || state == undefined) {
                                            state = $(this).find('select[name=state]').val();
                                        }
                                        if (state == '' || state == undefined) {
                                            state = $(this).find('input[name=state]').val();
                                        }

                                        if (district == '' || district == undefined) {
                                            district = $(this).find('select[name=district]').val();
                                        }
                                        if (district == '' || district == undefined) {
                                            district = $(this).find('input[name=district]').val();
                                        }

                                        if (ward == '' || ward == undefined) {
                                            ward = $(this).find('select[name=ward]').val();
                                        }
                                        if (ward == '' || ward == undefined) {
                                            ward = $(this).find('input[name=ward]').val();
                                        }
                                    });

                                    var url = form_action;

                                    url += '?' + form_phone + '=' + phone;

                                    if (name != '' && form_name != '') {
                                        url += '&' + form_name + '=' + name;
                                    }

                                    if (address != '' && form_address != '') {
                                        url += '&' + form_address + '=' + address;
                                    }

                                    if (message != '' && form_message != '') {
                                        url += '&' + form_message + '=' + message;
                                    }

                                    if (email != '' && form_email != '') {
                                        url += '&' + form_email + '=' + email;
                                    }

                                    if (quantity != '' && form_quantity != '') {
                                        url += '&' + form_quantity + '=' + quantity;
                                    }

                                    if (color != '' && form_color != '') {
                                        url += '&' + form_color + '=' + color;
                                    }

                                    if (size != '' && form_size != '') {
                                        url += '&' + form_size + '=' + size;
                                    }

                                    if (typeof form_field_1 != "undefined") {
                                        if (field_1 != '' && form_field_1 != '') {
                                            url += '&' + form_field_1 + '=' + field_1;
                                        }
                                    }

                                    if (typeof form_field_2 != "undefined") {
                                        if (field_2 != '' && form_field_2 != '') {
                                            url += '&' + form_field_2 + '=' + field_2;
                                        }
                                    }

                                    if (typeof form_field_3 != "undefined") {
                                        if (field_3 != '' && form_field_3 != '') {
                                            url += '&' + form_field_3 + '=' + field_3;
                                        }
                                    }

                                    if (typeof form_state != "undefined") {
                                        if (state != '' && form_state != '') {
                                            url += '&' + form_state + '=' + state;
                                        }
                                    }

                                    if (typeof form_district != "undefined") {
                                        if (district != '' && form_district != '') {
                                            url += '&' + form_district + '=' + district;
                                        }
                                    }

                                    if (typeof form_ward != "undefined") {
                                        if (ward != '' && form_ward != '') {
                                            url += '&' + form_ward + '=' + ward;
                                        }
                                    }

                                    /*Lay ten mien*/
                                    // url += '&' + form_address + '=' + document.domain;

                                    T.push({
                                        url: url,
                                        type: 'POST',
                                        callback: O
                                    })
                                };
                                S && f(u, p, R), e.isArray(A) && A.forEach(function (t) {
                                    if (!e.isEmpty(t.api_url) && e.isArray(t.custom_fields) && 0 != t.custom_fields.length) {
                                        var i = e.getElementAHref(t.api_url).host == e.const.DOMAIN_GOOGLE_DOCS, n = {};
                                        t.custom_fields.forEach(function (t) {
                                            var i = a[t.ladi_name];
                                            e.isNull(i) || (e.isArray(i) ? 0 == i.length ? n[t.name] = "" : n[t.name] = JSON.stringify(i) : n[t.name] = i)
                                        }), i || (n.link = window.location.href, d.forEach(function (t) {
                                            var i = c[t];
                                            e.isNull(i) || (n[t] = i)
                                        }));
                                        var r = Object.keys(n).reduce(function (t, e) {
                                            return t.push(e + "=" + encodeURIComponent(n[e])), t
                                        }, []).join("&");
                                        T.push({
                                            url: t.api_url,
                                            data: r,
                                            async: !0,
                                            headers: {"Content-Type": "application/x-www-form-urlencoded"},
                                            callback: O
                                        })
                                    }
                                });
                                var B = function () {
                                    e.runtime.tmp.form_sending[i.id] = !0;
                                    var t = y.querySelector(".ladi-button > .ladi-element > .ladi-headline");
                                    e.isNull(e.runtime.tmp.form_button_headline[i.id]) && (e.runtime.tmp.form_button_headline[i.id] = t.innerHTML), t.innerHTML = "â— â— â—"
                                };
                                T.length > 0 ? B() : S ? v(y) : (B(), f(u, p, R)), T.forEach(function (t) {
                                    e.sendRequest("POST", t.url, t.data, t.async, t.headers, t.callback)
                                })
                            }
                        } else v(y)
                    }
                }
            }, S = function (t) {
                var i = e.findAncestor(t.target, "ladi-element");
                if (!e.isEmpty(i)) for (var a = i.querySelectorAll('[type="checkbox"]'), n = 0; n < a.length; n++) a[n].removeAttribute("required")
            }, A = function (t) {
                var i = e.findAncestor(t.target, "ladi-element");
                if (!e.isEmpty(i)) {
                    for (var a = i.querySelectorAll('[ladi-checkbox-required="true"]'), n = -1, r = 0; r < a.length; r++) if (0 == a[r].querySelectorAll('[type="checkbox"]:checked').length) {
                        n = r;
                        break
                    }
                    if (-1 == n) E(i, !1, null); else {
                        var o = a[n].querySelectorAll('[type="checkbox"]');
                        if (o.length > 0) {
                            o[0].setAttribute("required", "required");
                            for (var l = 0; l < o.length; l++) o[l].removeEventListener("change", S), o[l].addEventListener("change", S);
                            i.querySelector(".ladi-form").reportValidity()
                        }
                    }
                }
                return !1
            }, L = function (t) {
                var i = e.findAncestor(t.target, "ladi-form");
                if (!e.isEmpty(i)) {
                    var a = e.findAncestor(i, "ladi-element");
                    if (!e.isEmpty(a)) {
                        var n = e.runtime.eventData[a.id];
                        if (!e.isEmpty(n) && n["option.is_add_to_cart"] && !e.isEmpty(n["option.add_to_cart_product"]) && !e.isEmpty(n["option.form_account_id"])) {
                            var r = function () {
                                var t = e.generateVariantProduct(n["option.add_to_cart_product"], !1, n["option.form_account_id"], null, null, null, null, !0, !0, r);
                                if (!(e.isEmpty(t) || e.isEmpty(t.store_info) || e.isEmpty(t.product))) {
                                    var i = e.getProductVariantIndex(a.id, n["option.add_to_cart_product"], n["option.form_account_id"]);
                                    if (-1 != i) {
                                        var o = t.product.variants[i].product_id,
                                            l = t.product.variants[i].product_variant_id, s = t.product.name,
                                            c = t.product.variants[i].title, d = t.product.variants[i].price,
                                            u = t.product.variants[i].quantity,
                                            p = e.isEmpty(t.product.variants[i].thumb) ? "" : t.product.variants[i].thumb;
                                        p = e.isEmpty(p) && !e.isEmpty(t.product.variants[i].src) ? t.product.variants[i].src : p, p = e.isEmpty(p) && !e.isObject(t.product.image) ? t.product.image.src : p, e.isEmpty(p) || (p = "https://" + e.const.STATIC_DOMAIN + "/" + p);
                                        var m = e.runtime.tmp.add_to_cart_detail.findIndex(function (t) {
                                            return t.product_variant_id == l
                                        });
                                        -1 == m && (e.runtime.tmp.add_to_cart_detail.push({
                                            store_id: t.store_info.id,
                                            product_id: o,
                                            product_variant_id: l,
                                            name: s,
                                            title: c,
                                            price: d,
                                            image: p,
                                            quantity: 0,
                                            inventory_checked: t.product.variants[i].inventory_checked,
                                            available_quantity: u,
                                            currency: t.store_info.currency
                                        }), m = e.runtime.tmp.add_to_cart_detail.length - 1);
                                        var y = a.querySelector('input[name="quantity"]');
                                        if (!e.isEmpty(y) && !e.isEmpty(y.value)) {
                                            var g = parseInt(y.value) || 0;
                                            if (1 == t.product.variants[i].inventory_checked && e.runtime.tmp.add_to_cart_detail[m].quantity + g > u && (g = u - e.runtime.tmp.add_to_cart_detail[m].quantity), g > 0) {
                                                var _ = function () {
                                                    e.runtime.tmp.add_to_cart_detail[m].quantity += g, e.addAddToCartDetailCookie(t.store_info.id, {
                                                        type: "LP",
                                                        product_variant_id: l,
                                                        quantity: g,
                                                        ladipage_id: e.runtime.ladipage_id
                                                    }, null, function () {
                                                        e.runtime.tmp.add_to_cart_detail[m].quantity -= g
                                                    }, function () {
                                                        e.runtime.tmp.generateAddToCartDetail(), e.changeTotalPriceAddToCartDetail(), e.runtime.tmp.is_click_add_to_cart = !1
                                                    })
                                                };
                                                if (e.isEmpty(e.getCookie("_cart_token"))) if (e.runtime.tmp.is_click_add_to_cart) {
                                                    var f = function () {
                                                        e.runTimeout(function () {
                                                            if (e.runtime.tmp.is_click_add_to_cart) return f();
                                                            r()
                                                        }, 100)
                                                    };
                                                    f()
                                                } else e.runtime.tmp.is_click_add_to_cart = !0, _(); else _()
                                            }
                                        }
                                    }
                                }
                            };
                            r()
                        }
                    }
                }
            }, P = function (t) {
                var i = e.findAncestor(t.target, "ladi-form");
                if (!e.isEmpty(i)) {
                    var a = i.querySelectorAll('[type="submit"]')[0];
                    e.isEmpty(a) || a.click()
                }
            }, w = function (t) {
                var i = e.findAncestor(t.target, "ladi-form");
                if (!e.isEmpty(i)) {
                    var a = e.findAncestor(i, "ladi-element");
                    if (!e.isEmpty(a)) {
                        var n = e.runtime.eventData[a.id];
                        if (!e.isEmpty(n) && n["option.form_auto_capture"] && !e.isEmpty(n["option.form_config_id"])) {
                            var r = e.getCookie("_capture_" + a.id);
                            e.isEmpty(r) && (r = n["option.form_config_id"] + "|" + e.runtime.ladipage_id + "|" + Date.now() + "|" + e.randomId(), e.setCookie(null, "_capture_" + a.id, r, 3e5 / 864e5, !1, window.location.pathname)), E(a, !0, r, t.target.getAttribute("name"))
                        }
                    }
                }
            }, b = {};
        u.forEach(function (t) {
            b[t] = e.getCookie("_ladipage_" + t)
        });
        var C = 0, T = !1, N = !1, x = function (t) {
            for (var a = i[C].querySelectorAll('.ladi-element .ladi-form-item-container [name="' + t + '"]'), n = 0; n < a.length; n++) if (!e.isEmpty(b[t])) if ("SELECT" == a[n].tagName) a[n].querySelectorAll('option[value="' + b[t] + '"]').length > 0 && (a[n].value = b[t], T && a[n].dispatchEvent(new Event("change"))); else {
                if (N) {
                    var r = b[t].split(":");
                    a[n].value = 2 == r.length ? r[1] : r[0]
                } else a[n].value = b[t];
                T && a[n].dispatchEvent(new Event("change"))
            }
        };
        for (C = 0; C < i.length; C++) {
            i[C].onsubmit = A;
            for (var k = i[C].getElementsByClassName("ladi-button"), D = 0; D < k.length; D++) {
                var I = i[C].getElementsByClassName("ladi-button")[D];
                if (!e.isEmpty(I)) {
                    var O = e.findAncestor(I, "ladi-element");
                    !e.isEmpty(e.runtime.eventData[O.id]) && e.runtime.eventData[O.id]["option.is_add_to_cart"] ? O.addEventListener("click", L) : O.addEventListener("click", P)
                }
            }
            for (var R = i[C].querySelectorAll("[tabindex]"), B = 0, M = 0; M < R.length; M++) {
                var q = parseInt(R[M].getAttribute("tabindex")) || 0;
                q > B && (B = q), R[M].setAttribute("tabindex", e.runtime.tabindexForm + q)
            }
            e.runtime.tabindexForm += B;
            for (var V = 0; V < m.length; V++) {
                var F = i[C].querySelector('.ladi-element .ladi-form-item-container input[name="' + m[V] + '"]');
                e.isEmpty(F) || F.addEventListener("focusout", w)
            }
        }
        var H = function (t, a, n) {
            for (T = a, N = n, C = 0; C < i.length; C++) {
                var r = e.findAncestor(i[C], "ladi-element");
                !e.isEmpty(e.runtime.eventData[r.id]) && e.runtime.eventData[r.id]["option.form_auto_complete"] && t.forEach(x)
            }
        };
        H(e.copy(u).except(p));
        e.runtime.tmp.runAfterLocation.push(function () {
            var t = "", a = "", n = "", r = "", o = function (e) {
                var i = window.LadiLocation[a].data[e];
                t += '<option value="' + i.id + ":" + i.name + '">' + i.name + "</option>"
            }, l = function (t) {
                var i = window.LadiLocation[t.target.getAttribute("data-country")].data[t.target.value.split(":")[0]];
                n = "", e.isEmpty(i) || Object.keys(i.data).forEach(function (t) {
                    var e = i.data[t];
                    n += '<option value="' + e.id + ":" + e.name + '">' + e.name + "</option>"
                });
                var a = e.findAncestor(t.target, "ladi-element");
                if (!e.isEmpty(a)) {
                    var r = a.querySelector('select[name="district"]');
                    e.isEmpty(r) || (r.setAttribute("data-selected", ""), r.innerHTML = r.querySelector("option").outerHTML + n);
                    var o = a.querySelector('select[name="ward"]');
                    e.isEmpty(o) || (o.setAttribute("data-selected", ""), o.innerHTML = o.querySelector("option").outerHTML)
                }
            }, s = function (t) {
                var i = e.findAncestor(t.target, "ladi-element");
                if (!e.isEmpty(i)) {
                    var a = i.querySelector('select[name="ward"]');
                    if (!e.isEmpty(a)) {
                        a.setAttribute("data-selected", ""), r = "";
                        var n = i.querySelector('select[name="state"]');
                        if (!e.isEmpty(n)) {
                            var o = n.getAttribute("data-selected");
                            if (!e.isEmpty(o)) {
                                o = o.split(":")[0];
                                var l = window.LadiLocation[n.getAttribute("data-country")].data[o];
                                if (!e.isEmpty(l)) {
                                    var s = l.data[t.target.value.split(":")[0]];
                                    e.isEmpty(s) || Object.keys(s.data).forEach(function (t) {
                                        var e = s.data[t];
                                        r += '<option value="' + e.id + ":" + e.name + '">' + e.name + "</option>"
                                    })
                                }
                            }
                        }
                        a.innerHTML = a.querySelector("option").outerHTML + r
                    }
                    e.reloadFeeShipping()
                }
            };
            for (C = 0; C < i.length; C++) {
                var c = i[C].querySelectorAll('.ladi-element .ladi-form-item-container [name="state"]'), d = 0,
                    u = null;
                for (d = 0; d < c.length; d++) if (u = e.findAncestor(c[d], "ladi-element"), !e.isEmpty(u) && (a = e.runtime.eventData[u.id]["option.input_country"], !e.isEmpty(a) && (t = "", a = a.split(":")[0], !e.isEmpty(window.LadiLocation[a])))) {
                    var p = window.LadiLocation[a].data;
                    Object.keys(p).forEach(o), c[d].innerHTML = c[d].querySelector("option").outerHTML + t, c[d].setAttribute("data-country", a), c[d].addEventListener("change", l)
                }
                var m = i[C].querySelectorAll('.ladi-element .ladi-form-item-container [name="district"]');
                for (d = 0; d < m.length; d++) m[d].addEventListener("change", s)
            }
        }), e.runtime.tmp.runAfterLocation.push(function () {
            H(y, !0, !0)
        })
    }(), (c = function () {
        l.forEach(function (t) {
            if ("countdown" == e.runtime.eventData[t].type) {
                var i = document.getElementById(t);
                if (!e.isEmpty(i)) {
                    var a = i.getAttribute("data-type"), n = 0, r = 0, o = Date.now();
                    if (i.hasAttribute("data-date-start") || i.hasAttribute("data-date-end")) n = parseFloat(i.getAttribute("data-date-start")) || 0, r = parseFloat(i.getAttribute("data-date-end")) || 0; else {
                        if (a == e.const.COUNTDOWN_TYPE.countdown) {
                            var l = parseInt(i.getAttribute("data-minute")) || 0;
                            if (l <= 0) return;
                            for (r = e.runtime.timenow; r <= o;) r += 60 * l * 1e3
                        }
                        if (a == e.const.COUNTDOWN_TYPE.endtime && (r = parseInt(i.getAttribute("data-endtime")) || 0), a == e.const.COUNTDOWN_TYPE.daily) {
                            var s = i.getAttribute("data-daily-start"), c = i.getAttribute("data-daily-end");
                            if (!e.isEmpty(s) && !e.isEmpty(c)) {
                                var d = (new Date).toDateString();
                                n = new Date(d + " " + s).getTime(), r = new Date(d + " " + c).getTime()
                            }
                        }
                        i.setAttribute("data-date-start", n), i.setAttribute("data-date-end", r)
                    }
                    if (!(n > o)) {
                        var u = r - o;
                        u < 0 && (u = 0);
                        for (var p = e.getCountdownTime(u), m = i.querySelectorAll("[data-item-type]"), y = 0; y < m.length; y++) m[y].querySelectorAll(".ladi-countdown-text span")[0].textContent = p[m[y].getAttribute("data-item-type")]
                    }
                }
            }
        })
    })(), e.runtime.interval_countdown = e.runInterval(c, 1e3), l.forEach(function (t) {
        var i = e.runtime.eventData[t];
        if ("gallery" == i.type) {
            var a = document.getElementById(t);
            if (!e.isEmpty(a)) {
                var n = i[e.runtime.device + ".option.gallery_control.autoplay"],
                    r = i[e.runtime.device + ".option.gallery_control.autoplay_time"], o = 0;
                n && !e.isEmpty(r) && (o = r);
                var l = function (e) {
                    p(e, t, a)
                }, s = function (i) {
                    i.stopPropagation(), i = e.getEventCursorData(i), e.isEmpty(e.runtime.timeout_gallery[t]) && (e.runtime.current_element_mouse_down_gallery_view = t, e.runtime.current_element_mouse_down_gallery_view_position_x = i.pageX)
                }, c = function (i) {
                    i.stopPropagation(), i = e.getEventCursorData(i), (a.getElementsByClassName("ladi-gallery")[0].classList.contains("ladi-gallery-top") || a.getElementsByClassName("ladi-gallery")[0].classList.contains("ladi-gallery-bottom")) && (e.runtime.current_element_mouse_down_gallery_control = t, e.runtime.current_element_mouse_down_gallery_control_time = Date.now(), e.runtime.current_element_mouse_down_gallery_control_position_x = i.pageX, a.getElementsByClassName("ladi-gallery-control-box")[0].style.setProperty("transition-duration", "0ms"), a.getElementsByClassName("ladi-gallery-control-box")[0].setAttribute("data-left", getComputedStyle(a.getElementsByClassName("ladi-gallery-control-box")[0]).left))
                };
                a.getElementsByClassName("ladi-gallery-view-arrow-left")[0].addEventListener("click", function (e) {
                    e.stopPropagation(), a.setAttribute("data-is-next", !1), a.setAttribute("data-next-time", Date.now() + 1e3 * o), d(t, !1)
                }), a.getElementsByClassName("ladi-gallery-view-arrow-right")[0].addEventListener("click", function (e) {
                    e.stopPropagation(), a.setAttribute("data-is-next", !0), a.setAttribute("data-next-time", Date.now() + 1e3 * o), d(t, !1)
                }), a.getElementsByClassName("ladi-gallery-control-arrow-left")[0].addEventListener("click", function (t) {
                    t.stopPropagation();
                    var i = a.getElementsByClassName("ladi-gallery-control-item")[0];
                    if (!e.isEmpty(i)) {
                        var n = getComputedStyle(i);
                        if (a.getElementsByClassName("ladi-gallery")[0].classList.contains("ladi-gallery-top") || a.getElementsByClassName("ladi-gallery")[0].classList.contains("ladi-gallery-bottom")) {
                            var r = (parseFloat(n.width) || 0) + (parseFloat(n.marginRight) || 0);
                            (r += parseFloat(a.getElementsByClassName("ladi-gallery-control-box")[0].style.getPropertyValue("left")) || 0) > 0 && (r = 0), a.getElementsByClassName("ladi-gallery-control-box")[0].style.setProperty("left", r + "px")
                        } else {
                            var l = (parseFloat(n.height) || 0) + (parseFloat(n.marginBottom) || 0);
                            (l += parseFloat(a.getElementsByClassName("ladi-gallery-control-box")[0].style.getPropertyValue("top")) || 0) > 0 && (l = 0), a.getElementsByClassName("ladi-gallery-control-box")[0].style.setProperty("top", l + "px")
                        }
                        a.setAttribute("data-next-time", Date.now() + 1e3 * o)
                    }
                }), a.getElementsByClassName("ladi-gallery-control-arrow-right")[0].addEventListener("click", function (t) {
                    t.stopPropagation();
                    var i = a.getElementsByClassName("ladi-gallery-control-item")[0];
                    if (!e.isEmpty(i)) {
                        var n = getComputedStyle(i);
                        if (a.getElementsByClassName("ladi-gallery")[0].classList.contains("ladi-gallery-top") || a.getElementsByClassName("ladi-gallery")[0].classList.contains("ladi-gallery-bottom")) {
                            var r = (parseFloat(n.width) || 0) + (parseFloat(n.marginRight) || 0);
                            r = -r + (parseFloat(a.getElementsByClassName("ladi-gallery-control-box")[0].style.getPropertyValue("left")) || 0);
                            var l = parseFloat(getComputedStyle(a.getElementsByClassName("ladi-gallery-control-box")[0]).width) || 0;
                            r < (l = (l = -(l -= parseFloat(getComputedStyle(a.getElementsByClassName("ladi-gallery-control")[0]).width) || 0)) > 0 ? 0 : l) && (r = l), a.getElementsByClassName("ladi-gallery-control-box")[0].style.setProperty("left", r + "px")
                        } else {
                            var s = (parseFloat(n.height) || 0) + (parseFloat(n.marginBottom) || 0);
                            s = -s + (parseFloat(a.getElementsByClassName("ladi-gallery-control-box")[0].style.getPropertyValue("top")) || 0);
                            var c = parseFloat(getComputedStyle(a.getElementsByClassName("ladi-gallery-control-box")[0]).height) || 0;
                            s < (c = (c = -(c -= parseFloat(getComputedStyle(a.getElementsByClassName("ladi-gallery-control")[0]).height) || 0)) > 0 ? 0 : c) && (s = c), a.getElementsByClassName("ladi-gallery-control-box")[0].style.setProperty("top", s + "px")
                        }
                        a.setAttribute("data-next-time", Date.now() + 1e3 * o)
                    }
                }), a.getElementsByClassName("ladi-gallery-view")[0].addEventListener("mousedown", s), a.getElementsByClassName("ladi-gallery-view")[0].addEventListener("touchstart", s), a.getElementsByClassName("ladi-gallery-control")[0].addEventListener("mousedown", c), a.getElementsByClassName("ladi-gallery-control")[0].addEventListener("touchstart", c);
                for (var u = a.getElementsByClassName("ladi-gallery-control-item"), m = 0; m < u.length; m++) u[m].addEventListener("click", l)
            }
        }
    }), e.runtime.interval_gallery = e.runInterval(function () {
        l.forEach(function (t) {
            var i = e.runtime.eventData[t];
            if ("gallery" == i.type) {
                var a = document.getElementById(t);
                if (!e.isEmpty(a)) {
                    var n = i[e.runtime.device + ".option.gallery_control.autoplay"],
                        r = i[e.runtime.device + ".option.gallery_control.autoplay_time"], o = 0;
                    if (n && !e.isEmpty(r) && (o = r), o > 0) {
                        var l = a.getAttribute("data-next-time"), s = Date.now();
                        e.isEmpty(l) && (l = s + 1, a.setAttribute("data-next-time", l)), s >= l && (d(t, !0), a.setAttribute("data-next-time", s + 1e3 * o))
                    }
                }
            }
        })
    }, 1e3), l.forEach(function (t) {
        var i = e.runtime.eventData[t];
        if ("carousel" == i.type) {
            var a = document.getElementById(t);
            if (!e.isEmpty(a)) {
                var n = i[e.runtime.device + ".option.carousel_setting.autoplay"],
                    r = i[e.runtime.device + ".option.carousel_setting.autoplay_time"], o = 0;
                n && !e.isEmpty(r) && (o = r);
                var l = function (i) {
                    i.stopPropagation(), i = e.getEventCursorData(i), !e.isEmpty(e.runtime.timenext_carousel[t]) && e.runtime.timenext_carousel[t] > Date.now() || (e.runtime.timenext_carousel[t] = Date.now() + 864e5, e.runtime.current_element_mouse_down_carousel = t, e.runtime.current_element_mouse_down_carousel_position_x = i.pageX, a.getElementsByClassName("ladi-carousel-content")[0].style.setProperty("transition-duration", "0ms"), a.getElementsByClassName("ladi-carousel-content")[0].setAttribute("data-left", getComputedStyle(a.getElementsByClassName("ladi-carousel-content")[0]).left))
                };
                a.getElementsByClassName("ladi-carousel-arrow-left")[0].addEventListener("click", function (e) {
                    e.stopPropagation(), a.getElementsByClassName("ladi-carousel-content")[0].style.removeProperty("transition-duration"), a.setAttribute("data-is-next", !1), a.setAttribute("data-next-time", Date.now() + 1e3 * o), m(t, !1)
                }), a.getElementsByClassName("ladi-carousel-arrow-right")[0].addEventListener("click", function (e) {
                    e.stopPropagation(), a.getElementsByClassName("ladi-carousel-content")[0].style.removeProperty("transition-duration"), a.setAttribute("data-is-next", !0), a.setAttribute("data-next-time", Date.now() + 1e3 * o), m(t, !1)
                }), a.getElementsByClassName("ladi-carousel")[0].addEventListener("mousedown", l), a.getElementsByClassName("ladi-carousel")[0].addEventListener("touchstart", l)
            }
        }
    }), e.runtime.interval_carousel = e.runInterval(function () {
        l.forEach(function (t) {
            var i = e.runtime.eventData[t];
            if ("carousel" == i.type) {
                var a = document.getElementById(t);
                if (!e.isEmpty(a)) {
                    var n = i[e.runtime.device + ".option.carousel_setting.autoplay"],
                        r = i[e.runtime.device + ".option.carousel_setting.autoplay_time"], o = 0;
                    if (n && !e.isEmpty(r) && (o = r), o > 0) {
                        var l = a.getAttribute("data-next-time"), s = Date.now();
                        e.isEmpty(l) && (l = s + 1, a.setAttribute("data-next-time", l)), s >= l && (m(t, !0), a.setAttribute("data-next-time", s + 1e3 * o))
                    }
                }
            }
        })
    }, 1e3), function () {
        for (var t = document.querySelectorAll(".ladi-payment .ladi-button"), i = 0; i < t.length; i++) {
            var a = e.findAncestor(t[i], "ladi-element");
            !e.isEmpty(a) && e.isEmpty(e.findAncestor(t[i], "ladi-form")) && (a.style.setProperty("cursor", "pointer"), a.addEventListener("click", e.reloadPriceDiscount))
        }
    }(), function () {
        l.forEach(function (t) {
            var i = e.runtime.eventData[t];
            if (!e.isEmpty(i["option.data_action"])) {
                var a = document.getElementById(t);
                if (!e.isEmpty(a) && "true" != a.getAttribute("data-action") && i["option.data_action"].type == e.const.DATA_ACTION_TYPE.link) {
                    var n = e.getLinkUTMRedirect(a.href, window.location.search);
                    a.setAttribute("data-replace-href", n), a.href = e.convertDataReplaceStr(n)
                }
            }
        });
        for (var t = document.querySelectorAll(".ladi-headline a[href], .ladi-paragraph a[href], .ladi-list-paragraph a[href]"), i = 0; i < t.length; i++) {
            var a = e.getLinkUTMRedirect(t[i].href, window.location.search);
            t[i].setAttribute("data-replace-href", a), t[i].href = e.convertDataReplaceStr(a)
        }
    }(), t && e.const.TIME_ONPAGE_TRACKING.forEach(function (t) {
        e.runTimeout(function () {
            e.isFunction(window.gtag) && window.gtag("event", "TimeOnPage_" + t + "_seconds", {
                event_category: "LadiPageTimeOnPage",
                event_label: window.location.host + window.location.pathname,
                non_interaction: !0
            }), e.isFunction(window.fbq) && window.fbq("trackCustom", "TimeOnPage_" + t + "_seconds")
        }, 1e3 * t)
    }), function () {
        for (var t = 2500, i = 3800, a = 800, n = 50, r = 150, o = 500, l = 1300, s = 600, c = 1500, d = t, u = function (i, a, n, r) {
            e.isEmpty(i) || (i.classList.remove("in"), i.classList.add("out"));
            var o = e.isEmpty(i) ? null : i.nextSibling;
            if (e.isEmpty(o) ? n && e.runTimeout(function () {
                _(m(a))
            }, t) : e.runTimeout(function () {
                u(o, a, n, r)
            }, r), e.isEmpty(o) && document.querySelectorAll("html")[0].classList.contains("no-csstransitions")) {
                var l = m(a);
                y(a, l)
            }
        }, p = function (i, a, n, r) {
            var o = a.parentElement, l = o.parentElement;
            l.classList.contains("ladipage-animated-headline") || (l = l.parentElement), e.isEmpty(i) || (i.classList.add("in"), i.classList.remove("out"));
            var s = e.isEmpty(i) ? null : i.nextSibling;
            e.isEmpty(s) ? ((l.classList.contains("rotate-2") || l.classList.contains("rotate-3") || l.classList.contains("scale")) && o.style.setProperty("width", a.clientWidth + "px"), e.isEmpty(e.findAncestor(a, "type")) || e.runTimeout(function () {
                var t = e.findAncestor(a, "ladipage-animated-words-wrapper");
                e.isEmpty(t) || t.classList.add("waiting")
            }, 200), n || e.runTimeout(function () {
                _(a)
            }, t)) : e.runTimeout(function () {
                p(s, a, n, r)
            }, r)
        }, m = function (t) {
            var i = t.nextSibling;
            return e.isEmpty(i) || i.classList.contains("after") ? t.parentElement.firstChild : i
        }, y = function (t, e) {
            t.classList.remove("is-visible"), t.classList.add("is-hidden"), e.classList.remove("is-hidden"), e.classList.add("is-visible")
        }, g = function (t, i) {
            e.isEmpty(e.findAncestor(t, "type")) ? e.isEmpty(e.findAncestor(t, "clip")) || (e.findAncestor(t, "ladipage-animated-words-wrapper").style.setProperty("width", t.clientWidth + 5 + "px"), e.runTimeout(function () {
                _(t)
            }, s + c)) : (p(t.querySelectorAll("i")[0], t, !1, i), t.classList.add("is-visible"), t.classList.remove("is-hidden"))
        }, _ = function (c) {
            if (!e.isEmpty(c)) {
                var d = m(c);
                if (e.isEmpty(e.findAncestor(c, "type"))) if (e.isEmpty(e.findAncestor(c, "letters"))) e.isEmpty(e.findAncestor(c, "clip")) ? e.isEmpty(e.findAncestor(c, "loading-bar")) ? (y(c, d), e.runTimeout(function () {
                    _(d)
                }, t)) : (e.findAncestor(c, "ladipage-animated-words-wrapper").classList.remove("is-loading"), y(c, d), e.runTimeout(function () {
                    _(d)
                }, i), e.runTimeout(function () {
                    e.findAncestor(c, "ladipage-animated-words-wrapper").classList.add("is-loading")
                }, a)) : (e.findAncestor(c, "ladipage-animated-words-wrapper").style.setProperty("width", "2px"), e.runTimeout(function () {
                    y(c, d), g(d)
                }, s)); else {
                    var f = c.querySelectorAll("i").length >= d.querySelectorAll("i").length;
                    u(c.querySelectorAll("i")[0], c, f, n), p(d.querySelectorAll("i")[0], d, f, n)
                } else {
                    var h = e.findAncestor(c, "ladipage-animated-words-wrapper");
                    h.classList.add("selected"), h.classList.remove("waiting"), e.runTimeout(function () {
                        h.classList.remove("selected"), c.classList.remove("is-visible"), c.classList.add("is-hidden");
                        for (var t = c.querySelectorAll("i"), e = 0; e < t.length; e++) t[e].classList.remove("in"), t[e].classList.add("out")
                    }, o), e.runTimeout(function () {
                        g(d, r)
                    }, l)
                }
            }
        }, f = function (t) {
            var n = !1;
            if (e.const.ANIMATED_LIST.forEach(function (e) {
                t.classList.contains(e) && (n = !0)
            }), n) {
                var r = t.getElementsByClassName("ladipage-animated-words-wrapper")[0];
                if (!e.isEmpty(r)) {
                    var o = e.isEmpty(r.getAttribute("data-word")) ? [] : JSON.parse(r.getAttribute("data-word"));
                    if (0 != o.length) {
                        var l = r.textContent.trim();
                        if (r.textContent = "", r.innerHTML = r.innerHTML + '<b class="is-visible">' + l + "</b>", o.forEach(function (t) {
                            e.isEmpty(t) ? r.innerHTML = r.innerHTML + "<b>" + l + "</b>" : r.innerHTML = r.innerHTML + "<b>" + t.trim() + "</b>"
                        }), !e.isEmpty(e.findAncestor(r, "type")) || !e.isEmpty(e.findAncestor(r, "loading-bar")) || !e.isEmpty(e.findAncestor(r, "clip"))) {
                            r.innerHTML = r.innerHTML + '<div class="after"></div>';
                            for (var s = getComputedStyle(r).color, c = r.getElementsByClassName("after"), u = 0; u < c.length; u++) c[u].style.setProperty("background-color", s)
                        }
                        if (t.classList.contains("type") && r.classList.add("waiting"), (t.classList.contains("type") || t.classList.contains("rotate-2") || t.classList.contains("rotate-3") || t.classList.contains("scale")) && t.classList.add("letters"), function (t) {
                            for (var i = 0; i < t.length; i++) {
                                var a = t[i], n = a.textContent.trim().split(""),
                                    r = a.classList.contains("is-visible");
                                for (var o in n) {
                                    " " == n[o] && (n[o] = "&nbsp;");
                                    var l = e.findAncestor(a, "rotate-2");
                                    e.isEmpty(l) || (n[o] = "<em>" + n[o] + "</em>"), n[o] = r ? '<i class="in">' + n[o] + "</i>" : "<i>" + n[o] + "</i>"
                                }
                                var s = n.join("");
                                a.innerHTML = s, a.style.setProperty("opacity", 1)
                            }
                        }(document.querySelectorAll(".letters b")), t.classList.contains("loading-bar")) d = i, e.runTimeout(function () {
                            r.classList.add("is-loading")
                        }, a); else if (t.classList.contains("clip")) {
                            var p = r.clientWidth + 5;
                            r.style.setProperty("width", p + "px")
                        }
                        e.runTimeout(function () {
                            _(t.getElementsByClassName("is-visible")[0])
                        }, d)
                    }
                }
            }
        }, h = document.getElementsByClassName("ladipage-animated-headline"), v = 0; v < h.length; v++) f(h[v])
    }(), document.addEventListener("mouseleave", e.runEventMouseLeave), document.addEventListener("mousemove", e.runEventMouseMove), document.addEventListener("touchmove", e.runEventMouseMove), document.addEventListener("mouseup", e.runEventMouseUp), document.addEventListener("touchend", e.runEventMouseUp), window.addEventListener("scroll", e.runEventScroll), window.addEventListener("resize", e.runEventResize), window.addEventListener("orientationchange", e.runEventOrientationChange), document.getElementById(e.runtime.backdrop_popup_id).addEventListener("click", e.runEventBackdropClick), e.reloadLazyload(), function () {
        if (t) {
            var i = function () {
                if (e.runtime.ladipage_powered_by_classname = e.randomString(e.randomInt(6, 32)), e.runtime.isClient) {
                    var t = document.createElement(e.randomString(5));
                    document.body.insertBefore(t, document.body.childNodes[e.randomInt(0, document.body.childNodes.length)]), t.className = e.runtime.ladipage_powered_by_classname;
                    var i = "." + e.runtime.ladipage_powered_by_classname + ' {width: 200px; height: 40px; position: fixed; bottom: 0; right: 110px; margin: 0; padding: 0; z-index: 10000000000; background: url("' + e.const.POWERED_BY_IMAGE + '") no-repeat; background-size: contain; display: block;}',
                        a = document.createElement("style");
                    a.type = "text/css", document.head.insertBefore(a, document.head.childNodes[e.randomInt(0, document.head.childNodes.length)]), a.innerHTML = i
                }
            }, a = !1, n = e.isArray(e.runtime.DOMAIN_FREE) ? e.runtime.DOMAIN_FREE : [], r = window.location.href;
            ["/", ".", "/"].forEach(function (t) {
                for (; r.endsWith(t);) r = r.substr(0, r.length - t.length)
            });
            var o = e.getElementAHref(r).host.toLowerCase();
            if (n.forEach(function (t) {
                a || (a = o.endsWith(t.toLowerCase()))
            }), a) i(); else {
                var l = {domain: window.location.host};
                e.isEmpty(s[e.const.TRACKING_NAME]) || (l[e.const.TRACKING_NAME] = s[e.const.TRACKING_NAME]), e.sendRequest("POST", e.const.API_CHECK_VERIFY, JSON.stringify(l), !0, {"Content-Type": "application/json"}, function (t, e, a) {
                    a.readyState == XMLHttpRequest.DONE && 200 == e && 0 == JSON.parse(t).data && i()
                })
            }
        }
    }(), e.setDataReplaceStart(), t || e.runAfterLocation(), "complete" === document.readyState || "loading" !== document.readyState && !document.documentElement.doScroll ? e.documentLoaded() : document.addEventListener("DOMContentLoaded", e.documentLoaded)
}, LadiPageScriptV2.prototype.equals = function (t, e) {
    return typeof t == typeof e && JSON.stringify(t) == JSON.stringify(e)
}, LadiPageScriptV2.prototype.copy = function (t) {
    return this.isNull(t) ? t : JSON.parse(JSON.stringify(t))
}, LadiPageScriptV2.prototype.playVideo = function (t, e, i) {
    var a = document.getElementById(t);
    if (!this.isEmpty(a)) {
        var n = document.getElementById(t + "_player");
        if (this.isEmpty(n)) {
            var r = this.getVideoId(e, i), o = a.getElementsByClassName("ladi-video")[0];
            this.stopAllVideo(), e == this.const.VIDEO_TYPE.youtube && (o.innerHTML = o.innerHTML + '<iframe id="' + t + '_player" class="iframe-video-play" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" src="https://www.youtube.com/embed/' + r + '?autoplay=1&rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
        }
    }
}, LadiPageScriptV2.prototype.checkResizeImage = function (t) {
    var e = t.toLowerCase();
    return e.endsWith(".jpg") || e.endsWith(".png")
}, LadiPageScriptV2.prototype.getOptimizeImage = function (t, e, i, a, n, r) {
    if (this.isEmpty(t) || !r) return t;
    var o = t.split("/"), l = o.indexOf("");
    if (-1 != l && o.length > l + 1 && (o[l + 1] = o[l + 1].toLowerCase()), l = o.indexOf(this.const.STATIC_DOMAIN.toLowerCase()), this.checkResizeImage(t) && -1 != l && (o.length == l + 3 || o.length == l + 6 && "ls" == o[3] && "product" == o[5])) {
        var s = o[l + 1].toLowerCase(), c = !0;
        if (s.startsWith("s")) {
            var d = s.split("x");
            2 == d.length && parseFloat(d[1]) == d[1] && (c = !1)
        }
        if (c) {
            if (r || n) {
                if (e = parseInt(e) || 0, i = parseInt(i) || 0, a) {
                    var u = this.const.RESIZE_RANGE + this.const.RESIZE_ADD_PIXEL;
                    e = e - e % this.const.RESIZE_RANGE + u, i = i - i % this.const.RESIZE_RANGE + u
                }
            } else e = this.const.WIDTH_SECTION_RESIZE[LadiPage.data.device_screen], i = this.const.WIDTH_SECTION_RESIZE[LadiPage.data.device_screen];
            o.insert(l + 1, "s" + e + "x" + i)
        }
    }
    return t = o.join("/")
}, LadiPageScriptV2.prototype.historyReplaceState = function (t) {
    try {
        window.history.replaceState(null, null, t)
    } catch (t) {
    }
}, LadiPageScriptV2.prototype.resetViewport = function () {
    this.isEmpty(this.runtime.tmp.timeoutViewport) || this.removeTimeout(this.runtime.tmp.timeoutViewport), this.isFunction(window.ladi_viewport) && (this.runtime.tmp.timeoutViewport = this.runTimeout(window.ladi_viewport, 10))
}, LadiPageScriptV2.prototype.runEventResize = function (t) {
    var e = this;
    e instanceof LadiPageScriptV2 || (e = LadiPageScript), e.resetViewport()
}, LadiPageScriptV2.prototype.runEventOrientationChange = function (t) {
    var e = this;
    e instanceof LadiPageScriptV2 || (e = LadiPageScript), e.resetViewport()
}, LadiPageScriptV2.prototype.runAfterLocation = function () {
    var t = this;
    for (t instanceof LadiPageScriptV2 || (t = LadiPageScript); t.runtime.tmp.runAfterLocation.length > 0;) {
        t.runtime.tmp.runAfterLocation.shift()()
    }
    t.reloadFeeShipping()
}, LadiPageScriptV2.prototype.randomId = function (t) {
    var e = Date.now(), i = window.performance && window.performance.now && 1e3 * window.performance.now() || 0,
        a = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (t) {
            var a = 16 * Math.random();
            return e > 0 ? (a = (e + a) % 16 | 0, e = Math.floor(e / 16)) : (a = (i + a) % 16 | 0, i = Math.floor(i / 16)), ("x" === t ? a : 3 & a | 8).toString(16)
        });
    if (t) for (; "-" == a[0] || a[0] == parseInt(a[0]);) a = a.substr(1);
    return a
}, LadiPageScriptV2.prototype.removeLazyloadPopup = function (t) {
    var e = document.getElementById(t);
    if (!this.isEmpty(e)) for (var i = e.getElementsByClassName("ladi-lazyload"); i.length > 0;) i[0].classList.remove("ladi-lazyload")
}, LadiPageScriptV2.prototype.reloadLazyload = function () {
    var t = this;
    t instanceof LadiPageScriptV2 || (t = LadiPageScript);
    for (var e = document.getElementsByClassName("ladi-lazyload"), i = [], a = 0; a < e.length; a++) {
        var n = t.getElementBoundingClientRect(e[a]).y + window.scrollY;
        window.scrollY + t.getHeightDevice() > n && n + e[a].offsetHeight > window.scrollY && i.push(e[a])
    }
    i.forEach(function (t) {
        t.classList.remove("ladi-lazyload")
    });
    for (var r = document.querySelectorAll(".ladi-gallery .ladi-gallery-view-item.selected:not(.ladi-lazyload)"), o = 0; o < r.length; o++) if (t.isEmpty(r[o].getAttribute("data-lazyload"))) {
        r[o].setAttribute("data-lazyload", !0);
        for (var l = r[o].parentElement.getElementsByClassName("ladi-lazyload"); l.length > 0;) l[0].classList.remove("ladi-lazyload")
    }
}, LadiPageScriptV2.prototype.documentLoaded = function () {
    var t = this;
    t instanceof LadiPageScriptV2 || (t = LadiPageScript);
    var e = t.getURLSearchParams(window.location.search, null, !0), i = e.ladishow, a = e.ladihide, n = e.laditop;
    t.isEmpty(i) ? i = [] : t.isArray(i) || (i = i.split(",").removeSpace()), t.isEmpty(a) ? a = [] : t.isArray(a) || (a = a.split(",").removeSpace()), t.isEmpty(n) ? n = [] : t.isArray(n) || (n = n.split(",").removeSpace().reverse()), a.forEach(function (t) {
        window.ladi(t).hide()
    }), i.forEach(function (t) {
        window.ladi(t).show()
    }), n.forEach(function (t) {
        window.ladi(t).top()
    });
    var r = window.location.hash;
    if (!t.isEmpty(r)) try {
        var o = document.querySelector(r);
        t.isEmpty(o) || t.isEmpty(o.id) || t.runTimeout(function () {
            window.ladi(o.id).scroll()
        }, 100)
    } catch (t) {
    }
}, LadiPageScriptV2.prototype.getWidthDevice = function () {
    return window.outerWidth > 0 ? window.outerWidth : window.screen.width
}, LadiPageScriptV2.prototype.getHeightDevice = function (t) {
    return window.outerHeight > 0 && (t && window.outerHeight > window.innerHeight || !t && window.innerHeight > window.outerHeight) ? window.outerHeight : window.innerHeight
}, LadiPageScriptV2.prototype.startAutoScroll = function (t, e, i, a) {
    if (this.runtime.isDesktop ? i : a) {
        var n = document.getElementById(t);
        if (!this.isEmpty(n) && !n.classList.contains("ladi-auto-scroll")) {
            var r = 0;
            if ("section" != e) {
                if (n.clientWidth <= this.getWidthDevice()) return;
                r = (r = parseFloat(getComputedStyle(n).left) || 0) > 0 ? 0 : -1 * r
            } else {
                for (var o = n.querySelectorAll(".ladi-container > .ladi-element"), l = 0; l < o.length; l++) {
                    var s = parseFloat(getComputedStyle(o[l]).left) || 0;
                    s < r && (r = s)
                }
                r = r > 0 ? 0 : -1 * r, n.querySelector(".ladi-container").style.setProperty("margin-left", r + "px")
            }
            n.classList.add("ladi-auto-scroll"), n.scrollLeft = r
        }
    }
}, LadiPageScriptV2.prototype.stopAllVideo = function (t) {
    if (this.runtime.isDesktop || t) {
        var e = document.getElementsByClassName("iframe-video-play");
        if (e.length > 0) {
            if (e[0].classList.contains("lightbox-item")) document.getElementById(this.runtime.lightbox_screen_id).getElementsByClassName("lightbox-close")[0].click(); else e[0].parentElement.removeChild(e[0]);
            this.stopAllVideo(t)
        } else delete this.runtime.tmp.gallery_playing_video
    }
}, LadiPageScriptV2.prototype.getLinkUTMRedirect = function (t, e, i) {
    var a = this.createTmpElement("a", "", {href: t}), n = this, r = this.getURLSearchParams(e), o = r.utm_source;
    if (!this.isEmpty(o)) {
        o = "utm_source=" + encodeURIComponent(o);
        var l = r.utm_medium, s = r.utm_campaign, c = r.utm_term, d = r.utm_content;
        this.isEmpty(l) || (o += "&utm_medium=" + encodeURIComponent(l)), this.isEmpty(s) || (o += "&utm_campaign=" + encodeURIComponent(s)), this.isEmpty(c) || (o += "&utm_term=" + encodeURIComponent(c)), this.isEmpty(d) || (o += "&utm_content=" + encodeURIComponent(d)), this.isEmpty(a.href) || this.isEmpty(a.host) || !this.isEmpty(this.getURLSearchParams(a.search, "utm_source")) || (a.search = a.search + (this.isEmpty(a.search) ? "?" : "&") + o)
    }
    if (i) {
        var u = Object.keys(this.runtime.replaceStr), p = "";
        (u = u.except(["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"])).forEach(function (t) {
            var e = n.getDataReplaceStr(t);
            e = n.isEmpty(e) ? "" : e, n.isArray(e) ? e.forEach(function (e) {
                n.isEmpty(p) || (p += "&"), p += t + "=" + encodeURIComponent(e)
            }) : (n.isEmpty(p) || (p += "&"), p += t + "=" + encodeURIComponent(e))
        }), this.isEmpty(a.href) || (a.search = a.search + (this.isEmpty(a.search) ? "?" : "&") + p)
    }
    return a.href
}, LadiPageScriptV2.prototype.randomInt = function (t, e) {
    return t = Math.ceil(t), e = Math.floor(e), Math.floor(Math.random() * (e - t + 1)) + t
}, LadiPageScriptV2.prototype.randomString = function (t) {
    for (var e = "", i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", a = i.length, n = 0; n < t; n++) e += i.charAt(Math.floor(Math.random() * a));
    return e
}, LadiPageScriptV2.prototype.runCallback = function (t, e) {
    if (this.isFunction(e)) {
        var i = this;
        if (t) {
            var a = i.runInterval(function () {
                i.removeInterval(a), i.runCallback(!1, e)
            }, 0);
            return
        }
        e()
    }
}, LadiPageScriptV2.prototype.runTimeout = function (t, e) {
    if (this.isFunction(t)) {
        if (!this.isEmpty(e) && e > 0) return setTimeout(t, e);
        t()
    }
}, LadiPageScriptV2.prototype.removeTimeout = function (t) {
    return clearTimeout(t)
}, LadiPageScriptV2.prototype.removeInterval = function (t) {
    return clearInterval(t)
}, LadiPageScriptV2.prototype.runInterval = function (t, e) {
    if (this.isFunction(t)) return setInterval(t, e)
}, LadiPageScriptV2.prototype.deleteCookie = function (t) {
    document.cookie = t + "=; expires = Thu, 01 Jan 1970 00:00:00 GMT; path = /", "/" != window.location.pathname && (document.cookie = t + "=; expires = Thu, 01 Jan 1970 00:00:00 GMT; path = " + window.location.pathname)
}, LadiPageScriptV2.prototype.setCookie = function (t, e, i, a, n, r) {
    var o = "";
    if (n) o = "0"; else {
        var l = new Date;
        l.setTime(l.getTime() + 24 * a * 60 * 60 * 1e3), o = "expires = " + l.toUTCString()
    }
    var s = e + " = " + i;
    this.isEmpty(o) || (s += "; " + o), this.isEmpty(t) || (s += "; domain = " + t), this.isEmpty(r) || this.runtime.isIE || (s += "; path = " + r), document.cookie = s
}, LadiPageScriptV2.prototype.getCookie = function (t) {
    for (var e = t + "=", i = decodeURIComponent(document.cookie).split(";"), a = 0; a < i.length; a++) {
        for (var n = i[a]; " " == n.charAt(0);) n = n.substring(1);
        if (0 == n.indexOf(e)) return n.substring(e.length, n.length)
    }
    return ""
}, LadiPageScriptV2.prototype.getURLSearchParams = function (t, e, i) {
    var a = {};
    if (t = this.isNull(t) ? window.location.search : t, !this.isEmpty(t)) for (var n = t.substr(1).split("&"), r = 0; r < n.length; ++r) {
        var o = n[r].split("=", 2);
        this.isNull(a[o[0]]) ? 1 == o.length ? a[o[0]] = "" : a[o[0]] = decodeURIComponent(o[1].replace(/\+/g, " ")) : i && (this.isArray(a[o[0]]) || (a[o[0]] = [a[o[0]]]), 1 == o.length ? a[o[0]].push("") : a[o[0]].push(decodeURIComponent(o[1].replace(/\+/g, " "))))
    }
    return this.isEmpty(e) ? a : a[e]
}, LadiPageScriptV2.prototype.getVideoId = function (t, e) {
    if (this.isEmpty(e)) return e;
    if (t == this.const.VIDEO_TYPE.youtube) {
        var i = this.createTmpElement("a", "", {href: e});
        -1 != e.toLowerCase().indexOf("watch") ? e = this.getURLSearchParams(i.search, "v") : -1 != e.toLowerCase().indexOf("embed/") ? e = i.pathname.substring("/embed/".length) : -1 != e.toLowerCase().indexOf("youtu.be") && (e = i.pathname.substring("/".length))
    }
    return e
}, LadiPageScriptV2.prototype.sendRequest = function (t, e, i, a, n, r) {
    this.sendRequestWithOption(t, e, i, a, n, null, r)
}, LadiPageScriptV2.prototype.sendRequestWithOption = function (t, e, i, a, n, r, o) {
    var l = new XMLHttpRequest;
    try {
        this.isFunction(o) && (l.onreadystatechange = function () {
            var t = null;
            try {
                t = l.responseText
            } catch (t) {
            }
            o(t, l.status, l, e)
        }), l.open(t, e, a);
        this.isObject(n) && Object.keys(n).forEach(function (t) {
            l.setRequestHeader(t, n[t])
        }), this.isObject(r) && Object.keys(r).forEach(function (t) {
            l[t] = r[t]
        }), l.send(i)
    } catch (t) {
        this.isFunction(o) && o(t, 0, l, e)
    }
}, LadiPageScriptV2.prototype.runEventBackdropClick = function (t) {
    t.stopPropagation();
    var e = this;
    e instanceof LadiPageScriptV2 || (e = LadiPageScript);
    for (var i = null, a = document.querySelectorAll('[data-popup-backdrop="true"]'), n = 0; n < a.length; n++) "none" != getComputedStyle(a[n]).display && (i = a[n].id);
    e.runRemovePopup(i, e.runtime.isClient)
}, LadiPageScriptV2.prototype.runEventMouseMove = function (t) {
    t.stopPropagation();
    var e = this;
    e instanceof LadiPageScriptV2 || (e = LadiPageScript), t = e.getEventCursorData(t);
    var i = null, a = 0, n = 0, r = 0;
    e.isEmpty(e.runtime.current_element_mouse_down_carousel) || (i = document.getElementById(e.runtime.current_element_mouse_down_carousel), a = t.pageX - e.runtime.current_element_mouse_down_carousel_position_x, n = parseFloat(i.getElementsByClassName("ladi-carousel-content")[0].getAttribute("data-left")) || 0, (n += a) < (r = -((parseFloat(e.runtime.eventData[e.runtime.current_element_mouse_down_carousel][e.runtime.device + ".option.carousel_crop.width"]) || 0) - i.clientWidth)) && (n = r), n > 0 && (n = 0), i.getElementsByClassName("ladi-carousel-content")[0].style.setProperty("left", n + "px"));
    if (!e.isEmpty(e.runtime.current_element_mouse_down_gallery_view)) {
        i = document.getElementById(e.runtime.current_element_mouse_down_gallery_view), a = t.pageX - e.runtime.current_element_mouse_down_gallery_view_position_x;
        var o = parseFloat(i.getAttribute("data-current")) || 0;
        o == (parseFloat(i.getAttribute("data-max-item")) || 0) - 1 && a < 0 && (a = 0), a > 0 && 0 == o && (a = 0), a >= e.runtime.current_element_mouse_down_gallery_view_diff ? (e.runtime.current_element_mouse_down_gallery_view = null, e.runtime.current_element_mouse_down_gallery_view_position_x = 0, i.getElementsByClassName("ladi-gallery-view-arrow-left")[0].click()) : a <= -e.runtime.current_element_mouse_down_gallery_view_diff ? (e.runtime.current_element_mouse_down_gallery_view = null, e.runtime.current_element_mouse_down_gallery_view_position_x = 0, i.getElementsByClassName("ladi-gallery-view-arrow-right")[0].click()) : i.querySelectorAll(".ladi-gallery-view-item.selected").length > 0 && i.querySelectorAll(".ladi-gallery-view-item.selected")[0].style.setProperty("left", a + "px")
    }
    e.isEmpty(e.runtime.current_element_mouse_down_gallery_control) || (i = document.getElementById(e.runtime.current_element_mouse_down_gallery_control), a = t.pageX - e.runtime.current_element_mouse_down_gallery_control_position_x, n = parseFloat(i.getElementsByClassName("ladi-gallery-control-box")[0].getAttribute("data-left")) || 0, (n += a) < (r = (parseFloat(getComputedStyle(i.getElementsByClassName("ladi-gallery-control")[0]).width) || 0) - (parseFloat(getComputedStyle(i.getElementsByClassName("ladi-gallery-control-box")[0]).width) || 0)) && (n = r), n > 0 && (n = 0), i.getElementsByClassName("ladi-gallery-control-box")[0].style.setProperty("left", n + "px"))
}, LadiPageScriptV2.prototype.runEventMouseUp = function (t) {
    t.stopPropagation();
    var e = this;
    e instanceof LadiPageScriptV2 || (e = LadiPageScript), t = e.getEventCursorData(t);
    var i = null, a = 0;
    if (!e.isEmpty(e.runtime.current_element_mouse_down_carousel)) {
        delete e.runtime.timenext_carousel[e.runtime.current_element_mouse_down_carousel], a = t.pageX - e.runtime.current_element_mouse_down_carousel_position_x;
        var n = (i = document.getElementById(e.runtime.current_element_mouse_down_carousel)).getElementsByClassName("ladi-carousel-content")[0].getAttribute("data-left");
        i.getElementsByClassName("ladi-carousel-content")[0].removeAttribute("data-left"), i.getElementsByClassName("ladi-carousel-content")[0].style.removeProperty("transition-duration"), e.runtime.current_element_mouse_down_carousel = null, a >= e.runtime.current_element_mouse_down_carousel_diff ? i.getElementsByClassName("ladi-carousel-arrow-left")[0].click() : a <= -e.runtime.current_element_mouse_down_carousel_diff ? i.getElementsByClassName("ladi-carousel-arrow-right")[0].click() : i.getElementsByClassName("ladi-carousel-content").length > 0 && (i.getElementsByClassName("ladi-carousel-content")[0].style.setProperty("transition-duration", "100ms"), i.getElementsByClassName("ladi-carousel-content")[0].style.setProperty("left", n), e.runTimeout(function () {
            i.getElementsByClassName("ladi-carousel-content")[0].style.removeProperty("transition-duration")
        }, 1))
    }
    e.isEmpty(e.runtime.current_element_mouse_down_gallery_view) || (i = document.getElementById(e.runtime.current_element_mouse_down_gallery_view)).querySelectorAll(".ladi-gallery-view-item.selected").length > 0 && i.querySelectorAll(".ladi-gallery-view-item.selected")[0].style.removeProperty("left"), e.isEmpty(e.runtime.current_element_mouse_down_gallery_control) || ((i = document.getElementById(e.runtime.current_element_mouse_down_gallery_control)).getElementsByClassName("ladi-gallery-control-box")[0].removeAttribute("data-left"), i.getElementsByClassName("ladi-gallery-control-box")[0].style.removeProperty("transition-duration")), e.runtime.current_element_mouse_down_carousel_position_x = 0, e.runtime.current_element_mouse_down_gallery_view = null, e.runtime.current_element_mouse_down_gallery_view_position_x = 0;
    var r = 0;
    e.runtime.current_element_mouse_down_gallery_control_time + e.runtime.current_element_mouse_down_gallery_control_time_click < Date.now() && (r = 5), e.runTimeout(function () {
        e.runtime.current_element_mouse_down_gallery_control = null, e.runtime.current_element_mouse_down_gallery_control_time = 0, e.runtime.current_element_mouse_down_gallery_control_position_x = 0
    }, r)
}, LadiPageScriptV2.prototype.runEventMouseLeave = function (t) {
    var e = this;
    e instanceof LadiPageScriptV2 || (e = LadiPageScript), Object.keys(e.runtime.eventData).forEach(function (t) {
        var i = e.runtime.eventData[t];
        "popup" == i.type && i["option.show_popup_exit_page"] && window.ladi(t).show()
    })
}, LadiPageScriptV2.prototype.runEventScroll = function (t) {
    var e = this;
    if (e instanceof LadiPageScriptV2 || (e = LadiPageScript), !e.runtime.tmp.is_run_show_popup) {
        var i = e.runtime.isDesktop;
        if (Object.keys(e.runtime.eventData).forEach(function (t) {
            var a = e.runtime.eventData[t], n = null, r = null, o = a[e.runtime.device + ".style.animation-name"];
            if (!e.isEmpty(o) && (n = document.getElementById(t), !e.isEmpty(n) && !n.classList.contains("ladi-animation"))) {
                var l = parseFloat(a[e.runtime.device + ".style.animation-delay"]) || 0;
                r = e.getElementBoundingClientRect(n).y + window.scrollY;
                var s = window.scrollY > r && window.scrollY <= r + n.offsetHeight || window.scrollY + e.getHeightDevice(!0) >= r && window.scrollY + e.getHeightDevice(!0) <= r + n.offsetHeight || r >= window.scrollY && window.scrollY + e.getHeightDevice(!0) >= r + n.offsetHeight;
                e.runtime.tmp.isFirstScroll && l > 0 && !s && n.classList.add("ladi-animation-hidden"), s && (n.classList.add("ladi-animation"), e.runTimeout(function () {
                    n.classList.remove("ladi-animation-hidden")
                }, 1e3 * l))
            }
            var c = null, d = null, u = null;
            if (a[e.runtime.device + ".option.sticky"] && (c = a[e.runtime.device + ".option.sticky_position"], d = parseFloat(a[e.runtime.device + ".option.sticky_position_top"]), u = parseFloat(a[e.runtime.device + ".option.sticky_position_bottom"])), !e.isEmpty(c)) {
                var p = document.getElementById(t);
                if (!e.isEmpty(p) && -1 != ["default", "top", "bottom"].indexOf(c)) {
                    var m = e.getElementBoundingClientRect(p), y = p.getAttribute("data-top"),
                        g = p.getAttribute("data-left");
                    e.isEmpty(y) ? (p.setAttribute("data-top", m.y + window.scrollY), y = m.y) : y = parseFloat(y), e.isEmpty(g) ? (p.setAttribute("data-left", m.x + window.scrollX), g = m.x) : g = parseFloat(g);
                    var _ = null, f = null;
                    if ("default" == c && (d > y - window.scrollY ? (_ = d + "px", f = g + "px") : e.getHeightDevice() - u - p.clientHeight < y - window.scrollY && (_ = "calc(100% - " + (u + p.clientHeight) + "px)", f = g + "px")), "top" == c && (d > y - window.scrollY || e.getHeightDevice() - 0 < y - window.scrollY) && (_ = d + "px", f = g + "px"), "bottom" == c && (e.getHeightDevice() - u - p.clientHeight < y - window.scrollY || 0 > y + p.clientHeight - window.scrollY) && (_ = "calc(100% - " + (u + p.clientHeight) + "px)", f = g + "px"), e.isEmpty(_) || e.isEmpty(f)) p.style.removeProperty("top"), p.style.removeProperty("left"), p.style.removeProperty("width"), p.style.removeProperty("position"), p.style.removeProperty("z-index"); else if (p.style.setProperty("top", _), p.style.setProperty("left", f), "section" == a.type && (e.runtime.isMobileOnly ? p.style.setProperty("width", document.getElementsByClassName("ladi-wraper")[0].clientWidth + "px") : i && p.style.setProperty("width", "100%")), p.style.setProperty("position", "fixed"), p.style.setProperty("z-index", "90000040"), !p.hasAttribute("data-first")) {
                        p.setAttribute("data-first", !0), p.classList.contains("ladi-animation-hidden") && (p.classList.remove("ladi-animation-hidden"), p.classList.add("ladi-animation"));
                        for (var h = p.getElementsByClassName("ladi-animation-hidden"); h.length > 0;) h[0].classList.add("ladi-animation"), h[0].classList.remove("ladi-animation-hidden");
                        p.classList.remove("ladi-lazyload");
                        for (var v = p.getElementsByClassName("ladi-lazyload"); v.length > 0;) v[0].classList.remove("ladi-lazyload")
                    }
                }
            }
            if ("popup" == a.type) {
                if (!e.isEmpty(e.runtime.scroll_show_popup[t])) return;
                e.isEmpty(a["option.popup_welcome_page_scroll_to"]) || (n = document.getElementById(a["option.popup_welcome_page_scroll_to"]), e.isEmpty(n) || (r = n.offsetTop, (window.scrollY > r && window.scrollY <= r + n.offsetHeight || window.scrollY + e.getHeightDevice() >= r && window.scrollY + e.getHeightDevice() <= r + n.offsetHeight) && (e.runtime.scroll_show_popup[t] = !0, window.ladi(t).show())))
            }
            if ("section" == a.type) {
                if (!e.isEmpty(e.runtime.scroll_to_section[t])) return;
                n = document.getElementById(t), e.isEmpty(n) || (r = n.offsetTop, (window.scrollY > r && window.scrollY <= r + n.offsetHeight || window.scrollY + e.getHeightDevice() >= r && window.scrollY + e.getHeightDevice() <= r + n.offsetHeight) && (e.runtime.scroll_to_section[t] = !0, e.runEventTracking(t, !1)))
            }
        }), e.runtime.isClient) for (var a = Math.round((window.scrollY + e.getHeightDevice()) / document.body.clientHeight * 100), n = 1; n < e.const.PERCENT_TRACKING_SCROLL.length; n++) a > e.const.PERCENT_TRACKING_SCROLL[n - 1] && a <= e.const.PERCENT_TRACKING_SCROLL[n] && -1 == e.runtime.scroll_depth.indexOf(e.const.PERCENT_TRACKING_SCROLL[n]) && (e.runtime.scroll_depth.push(e.const.PERCENT_TRACKING_SCROLL[n]), e.isFunction(window.gtag) && window.gtag("event", "ScrollDepth_" + e.const.PERCENT_TRACKING_SCROLL[n] + "_percent", {
            event_category: "LadiPageScrollDepth",
            event_label: window.location.host + window.location.pathname,
            non_interaction: !0
        }), e.isFunction(window.fbq) && window.fbq("trackCustom", "ScrollDepth_" + e.const.PERCENT_TRACKING_SCROLL[n] + "_percent"));
        e.runtime.tmp.isFirstScroll = !1
    }
}, LadiPageScriptV2.prototype.runRemovePopup = function (t, e, i, a) {
    var n = this,
        r = document.querySelectorAll("#" + this.runtime.builder_section_popup_id + " .ladi-container > .ladi-element"),
        o = !1;
    e || LadiPagePlugin.getPlugin("popup").removeStyleShowPopupBuilder();
    var l = function () {
        var t = document.getElementById("style_popup");
        n.isEmpty(t) || t.parentElement.removeChild(t)
    }, s = [];
    if (this.isEmpty(t)) for (var c = 0; c < r.length; c++) s.push(r[c].id); else s.push(t);
    s.forEach(function (t) {
        var i = document.getElementById(t);
        if (!n.isEmpty(i)) {
            n.isEmpty(i.style.getPropertyValue("display")) || (o = !0), i.style.removeProperty("display"), i.style.removeProperty("z-index");
            var a = i.getElementsByClassName("popup-close")[0];
            if (n.isEmpty(a) || a.style.removeProperty("display"), i.hasAttribute("data-popup-backdrop")) {
                l(), e && (n.isEmpty(n.runtime.tmp.bodyScrollY) || window.scrollTo(0, n.runtime.tmp.bodyScrollY)), n.runtime.tmp.bodyScrollY = null;
                for (var s = 0; s < r.length; s++) r[s].style.removeProperty("z-index")
            }
        }
    }), o && this.isFunction(i) && i(), a && l()
}, LadiPageScriptV2.prototype.runShowPopup = function (t, e, i, a, n) {
    var r = "";
    if (!this.isEmpty(t)) {
        var o = document.getElementById(t), l = null;
        if (!a || !this.isEmpty(o) && !this.isEmpty(this.runtime.eventData[t])) {
            var s = this;
            this.runtime.tmp.is_run_show_popup = !0;
            var c = 0;
            a || LadiPagePlugin.getPlugin("popup").showStyleShowPopupBuilder(t), a && (e = this.runtime.eventData[t][this.runtime.device + ".option.popup_position"], i = this.runtime.eventData[t][this.runtime.device + ".option.popup_backdrop"]);
            var d = function () {
                if (a) {
                    var e = window.scrollY;
                    if (!s.isEmpty(s.runtime.tmp.bodyScrollY)) {
                        var i = getComputedStyle(document.body);
                        "fixed" == i.position && (parseFloat(i.top) || 0) == -1 * s.runtime.tmp.bodyScrollY && (e = s.runtime.tmp.bodyScrollY)
                    }
                    "block" != o.style.getPropertyValue("display") || s.isEmpty(s.runtime.tmp.bodyScrollY) || (e = s.runtime.tmp.bodyScrollY), r += "body {", r += "position: fixed !important;", r += "width: 100% !important;", r += "top: -" + e + "px", r += "}", s.runtime.tmp.bodyScrollY = e, l = function () {
                        s.runtime.tmp.bodyScrollY = e
                    }
                }
                for (var n = document.querySelectorAll("#" + s.runtime.builder_section_popup_id + " .ladi-container > .ladi-element"), d = 0; d < n.length; d++) n[d].id != t && n[d].style.setProperty("z-index", "1", "important");
                c = 500
            };
            e == this.const.POSITION_TYPE.default ? (r += "#" + this.runtime.backdrop_popup_id + " { display: block !important; " + i + "}", o.setAttribute("data-popup-backdrop", !0), d()) : a || (r += "#" + this.runtime.backdrop_popup_id + " { display: block !important;}", o.setAttribute("data-popup-backdrop", !0), d()), this.isFunction(n) && "block" != o.style.getPropertyValue("display") && (n(), this.isFunction(l) && l()), o.style.setProperty("display", "block", "important");
            var u = o.hasAttribute("data-scroll"), p = !1;
            if (!u && o.clientHeight > .9 * this.getHeightDevice() && (a ? (o.setAttribute("data-scroll", !0), o.getElementsByClassName("ladi-popup")[0].style.setProperty("height", o.clientHeight + "px", "important"), o.style.setProperty("max-height", .9 * this.getHeightDevice() + "px"), o.style.setProperty("overflow-y", "auto", "important"), o.style.setProperty("overflow-x", "hidden", "important"), u = !0) : p = !0), a || LadiPagePlugin.getPlugin("popup").styleShowPopupBuilderUpDown(t, p), s.isEmpty(r) || this.createStyleElement("style_popup", r), a && !this.isEmpty(o)) {
                var m = o.getElementsByClassName("popup-close")[0];
                this.isEmpty(m) && ((m = document.createElement("div")).className = "popup-close", o.appendChild(m), m.addEventListener("click", function (e) {
                    e.stopPropagation(), s.runRemovePopup(t, a)
                })), o.getElementsByClassName("popup-close")[0].style.setProperty("display", "block", "important");
                var y = function () {
                    var t = o.getElementsByClassName("popup-close")[0];
                    if (!s.isEmpty(t)) {
                        var e = s.getElementBoundingClientRect(o), i = 15, a = 15;
                        e.x + 30 - t.clientWidth > a && (a = e.x + 30 - t.clientWidth), e.y + 30 - t.clientHeight > i && (i = e.y + 30 - t.clientHeight), u && (a += s.runtime.widthScrollBar), t.style.setProperty("right", a + "px"), t.style.setProperty("top", i + "px"), t.style.setProperty("position", "fixed")
                    }
                };
                u && (y(), o.hasAttribute("data-resize-scroll") || (o.setAttribute("data-resize-scroll", !0), window.addEventListener("resize", y)))
            }
            a && this.runEventTracking(t, !1), s.runTimeout(function () {
                delete s.runtime.tmp.is_run_show_popup
            }, c)
        }
    }
}, LadiPageScriptV2.prototype.runEventTracking = function (t, e) {
    if (this.runtime.isClient && !this.isEmpty(t)) {
        var i = this.runtime.eventData[t], a = i.type, n = null, r = null, o = null, l = null;
        if (e && "form" == a ? (n = i["option.form_conversion_name"], r = i["option.form_google_ads_conversion"], o = i["option.form_google_ads_label"], l = i["option.form_event_custom_script"]) : (n = i["option.conversion_name"], r = i["option.google_ads_conversion"], o = i["option.google_ads_label"], l = i["option.event_custom_script"]), this.isFunction(window.fbq) && !this.isEmpty(n) && window.fbq("trackCustom", n), this.isFunction(window.gtag) && (this.isEmpty(r) || this.isEmpty(o) || window.gtag("event", "conversion", {send_to: "AW-" + r + "/" + o}), !this.isEmpty(n))) {
            var s = "";
            s = "section" == a ? "LadiPageSection" : "popup" == a ? "LadiPagePopup" : "form" == a ? "LadiPageConversion" : "LadiPageClick";
            var c = LadiPageApp[i.type + this.const.APP_RUNTIME_PREFIX];
            if (!this.isEmpty(c)) {
                var d = c(i, this.runtime.isClient);
                this.isFunction(d.getEventTrackingCategory) && (s = c(i, this.runtime.isClient).getEventTrackingCategory())
            }
            window.gtag("event", n, {event_category: s, event_label: window.location.host + window.location.pathname})
        }
        this.isEmpty(l) || this.runFunctionString(l)
    }
}, LadiPageScriptV2.prototype.runFunctionString = function (t) {
    try {
        new Function(t)()
    } catch (t) {
    }
}, LadiPageScriptV2.prototype.reloadFeeShipping = function () {
    var t = this;
    t instanceof LadiPageScriptV2 || (t = LadiPageScript), t.isEmpty(t.runtime.tmp.timeout_reload_fee_shipping) || t.removeTimeout(t.runtime.tmp.timeout_reload_fee_shipping);
    var e = function (e) {
        t.runtime.tmp.add_to_cart_fee_shipping = e, t.changeTotalPriceAddToCartDetail()
    };
    t.runtime.tmp.timeout_reload_fee_shipping = t.runTimeout(function () {
        var i = t.getCookie("_cart_token"), a = t.getCookie("_checkout_token");
        if (t.isEmpty(i) || t.isEmpty(a)) e(0); else {
            var n = document.getElementsByClassName("ladi-payment")[0];
            if (t.isEmpty(n)) e(0); else {
                var r = null, o = n.querySelector('.ladi-form-item select[name="state"]'),
                    l = n.querySelector('.ladi-form-item select[name="district"]');
                if (t.isEmpty(o) || t.isEmpty(l)) e(0); else {
                    var s = o.value, c = l.value;
                    if (t.isEmpty(s) || t.isEmpty(c)) return void e(0);
                    (r = {
                        state_id: s.split(":")[0],
                        district_id: c.split(":")[0]
                    }).state_id = parseInt(r.state_id) || r.state_id, r.district_id = parseInt(r.district_id) || r.district_id
                }
            }
        }
    }, 1e3)
}, LadiPageScriptV2.prototype.reloadPriceDiscount = function (t) {
    var e = this;
    if (e instanceof LadiPageScriptV2 || (e = LadiPageScript), !(e.runtime.tmp.is_click_check_price_discount || e.isEmpty(t) && e.isEmpty(e.runtime.tmp.current_use_coupon))) {
        e.isEmpty(e.runtime.tmp.timeout_reload_price_discount) || e.removeTimeout(e.runtime.tmp.timeout_reload_price_discount);
        var i = function (t) {
            e.runtime.tmp.add_to_cart_total_discount = t, e.runtime.tmp.is_click_check_price_discount = !1, e.changeTotalPriceAddToCartDetail()
        };
        e.runtime.tmp.timeout_reload_price_discount = e.runTimeout(function () {
            var a = e.getCookie("_cart_token"), n = e.getCookie("_checkout_token");
            if (e.isEmpty(a) || e.isEmpty(n)) i(0); else {
                var r = e.isEmpty(t) ? document.getElementsByClassName("ladi-payment")[0] : e.findAncestor(t.target, "ladi-payment");
                if (e.isEmpty(r)) i(0); else {
                    var o = {"Content-Type": "application/json", "cart-token": a}, l = null,
                        s = r.querySelector('.ladi-form-item input[name="email"]'),
                        c = r.querySelector('.ladi-form-item input[name="coupon"]');
                    if (e.isEmpty(s) || e.isEmpty(c)) i(0); else {
                        var d = s.value, u = c.value;
                        if (e.isEmpty(d) || e.isEmpty(u)) return void i(0);
                        if (e.isEmpty(t) && u != e.runtime.tmp.current_use_coupon) return void i(0);
                        l = {
                            discount_code: u,
                            email: d
                        }, e.runtime.tmp.is_click_check_price_discount = !0, e.runtime.tmp.current_use_coupon = null, e.sendRequest("POST", LadiPageScript.const.API_LADISALE_VALIDATE_DISCOUNT.format(n), JSON.stringify(l), !0, o, function (a, n, r) {
                            if (r.readyState == XMLHttpRequest.DONE) {
                                if (200 == n) try {
                                    var o = JSON.parse(a);
                                    if (200 == o.code) return e.isEmpty(o.data.discount_error) ? e.runtime.tmp.current_use_coupon = u : e.isEmpty(t) || e.showMessage(o.data.discount_error), void i(o.data.discount_price)
                                } catch (t) {
                                }
                                i(0)
                            }
                        })
                    }
                }
            }
        }, e.isEmpty(t) ? 1e3 : 0)
    }
}, LadiPageScriptV2.prototype.addAddToCartDetailCookie = function (t, e, i, a, n) {
    var r = this.getCookie("_cart_token"), o = {"Content-Type": "application/json", "store-id": t};
    this.isEmpty(r) || (o["cart-token"] = r);
    var l = this;
    this.sendRequest("POST", LadiPageScript.const.API_LADISALE_ADD, JSON.stringify(e), !0, o, function (t, e, r) {
        if (r.readyState == XMLHttpRequest.DONE) {
            if (200 == e) try {
                var o = JSON.parse(t);
                if (200 == o.code) return l.setCookie(null, "_cart_token", o.data.cart_token, 30, !1, window.location.pathname), l.setCookie(null, "_checkout_token", o.data.checkout_token, 30, !1, window.location.pathname), l.isFunction(i) && i(), l.isFunction(n) && n(), l.reloadPriceDiscount(), void l.reloadFeeShipping()
            } catch (t) {
            }
            l.isFunction(a) && a(), l.isFunction(n) && n()
        }
    })
}, LadiPageScriptV2.prototype.updateAddToCartDetailCookie = function (t, e, i, a) {
    var n = this.getCookie("_cart_token"), r = {"Content-Type": "application/json"};
    this.isEmpty(n) || (r["cart-token"] = n);
    var o = this;
    this.sendRequest("POST", LadiPageScript.const.API_LADISALE_UPDATE, JSON.stringify(t), !0, r, function (t, n, r) {
        if (r.readyState == XMLHttpRequest.DONE) {
            if (200 == n) try {
                if (200 == JSON.parse(t).code) return o.isFunction(e) && e(), o.isFunction(a) && a(), o.reloadPriceDiscount(), void o.reloadFeeShipping()
            } catch (t) {
            }
            o.isFunction(i) && i(), o.isFunction(a) && a()
        }
    })
}, LadiPageScriptV2.prototype.createAddToCartDetailData = function () {
    this.runtime.tmp.add_to_cart_detail = [], this.runtime.tmp.add_to_cart_total_discount = 0, this.runtime.tmp.add_to_cart_fee_shipping = 0;
    var t = this, e = function () {
        t.runtime.tmp.generateAddToCartDetail(), t.changeTotalPriceAddToCartDetail()
    }, i = this.getCookie("_cart_token"), a = {"Content-Type": "application/json"};
    if (!this.isEmpty(i)) return a["cart-token"] = i, void this.sendRequest("GET", LadiPageScript.const.API_LADISALE_SHOW, null, !0, a, function (i, a, n) {
        if (n.readyState == XMLHttpRequest.DONE) {
            if (200 == a) try {
                var r = JSON.parse(i);
                200 == r.code && r.data.items.forEach(function (e) {
                    var i = t.isEmpty(e.thumb) ? "" : e.thumb;
                    i = t.isEmpty(i) && !t.isEmpty(e.src) ? e.src : i, t.isEmpty(i) || (i = "https://" + t.const.STATIC_DOMAIN + "/" + i), t.runtime.tmp.add_to_cart_detail.push({
                        store_id: e.store_id,
                        product_id: e.product_id,
                        product_variant_id: e.product_variant_id,
                        name: e.product_name,
                        title: e.option_name,
                        price: e.price,
                        image: i,
                        quantity: e.quantity,
                        inventory_checked: e.inventory_checked,
                        available_quantity: e.available_quantity,
                        currency: r.data.store_info.currency
                    })
                })
            } catch (t) {
            }
            e()
        }
    });
    e()
}, LadiPageScriptV2.prototype.changeTotalPriceAddToCartDetail = function () {
    var t = 0, e = 0;
    this.runtime.tmp.add_to_cart_detail.forEach(function (i) {
        t += i.price * i.quantity, e += i.quantity
    });
    var i = this.runtime.tmp.add_to_cart_fee_shipping || 0, a = this.runtime.tmp.add_to_cart_total_discount || 0,
        n = t + i - a, r = this.formatNumber(t, 3), o = this.formatNumber(n, 3), l = this.formatNumber(i, 3),
        s = this.formatNumber(a, 3);
    this.runtime.tmp.add_to_cart_detail.length > 0 && !this.isEmpty(this.runtime.tmp.add_to_cart_detail[0].currency) && !this.isEmpty(this.runtime.tmp.add_to_cart_detail[0].currency.symbol) && (r += " " + this.runtime.tmp.add_to_cart_detail[0].currency.symbol, o += " " + this.runtime.tmp.add_to_cart_detail[0].currency.symbol, l += " " + this.runtime.tmp.add_to_cart_detail[0].currency.symbol, s += " " + this.runtime.tmp.add_to_cart_detail[0].currency.symbol), this.setDataReplaceStr("cart_total_price", r), this.setDataReplaceStr("cart_total_payment_price", o), this.setDataReplaceStr("cart_fee_shipping", l), this.setDataReplaceStr("cart_total_discount", s), this.setDataReplaceStr("cart_total_quantity", e), this.setDataReplaceElement(!1)
}, LadiPageScriptV2.prototype.removeAddToCartProduct = function (t) {
    var e = this.runtime.tmp.add_to_cart_detail.findIndex(function (e) {
        return e.product_variant_id == t
    }), i = this;
    -1 != e && this.updateAddToCartDetailCookie({type: "LP", product_variant_id: t, quantity: 0}, function () {
        i.runtime.tmp.add_to_cart_detail.splice(e, 1), i.runtime.tmp.generateAddToCartDetail(), i.changeTotalPriceAddToCartDetail(), 0 == i.runtime.tmp.add_to_cart_detail.length && (i.deleteCookie("_cart_token"), i.deleteCookie("_checkout_token"))
    })
}, LadiPageScriptV2.prototype.buttonAddToCartProductQuantity = function (t, e) {
    if (0 != this.runtime.tmp.add_to_cart_detail.length) {
        var i = this.findAncestor(t, "add-to-cart-detail-quantity");
        if (!this.isEmpty(i)) {
            var a = i.querySelector("input");
            if (!this.isEmpty(a)) {
                var n = parseInt(a.value) || 0;
                a.value = n + e < a.getAttribute("min") ? a.getAttribute("min") : n + e, a.value != n && a.dispatchEvent(new Event("change"))
            }
        }
    }
}, LadiPageScriptV2.prototype.changeAddToCartProductQuantity = function (t, e, i) {
    var a = this.runtime.tmp.add_to_cart_detail.findIndex(function (t) {
        return t.product_variant_id == e
    }), n = this;
    if (-1 != a) {
        var r = this.runtime.tmp.add_to_cart_detail[a].quantity;
        if (this.isEmpty(t.value)) i && (t.value = 1), this.runtime.tmp.add_to_cart_detail[a].quantity = 1; else {
            var o = parseInt(t.value) || 0;
            if (1 == this.runtime.tmp.add_to_cart_detail[a].inventory_checked) {
                var l = this.runtime.tmp.add_to_cart_detail[a].available_quantity;
                o > l && (o = l), o <= 0 && (o = 0, l > 0 && (o = 1))
            } else o = o <= 0 ? 1 : o;
            this.runtime.tmp.add_to_cart_detail[a].quantity = o, t.value = o
        }
        var s = this.runtime.tmp.add_to_cart_detail[a].quantity;
        if (r == s) return void (t.value = r);
        this.updateAddToCartDetailCookie({
            type: "LP",
            product_variant_id: this.runtime.tmp.add_to_cart_detail[a].product_variant_id,
            quantity: s
        }, null, function () {
            n.runtime.tmp.add_to_cart_detail[a].quantity -= s + r
        }, function () {
            n.changeTotalPriceAddToCartDetail();
            var i = n.formatNumber(n.runtime.tmp.add_to_cart_detail[a].price * n.runtime.tmp.add_to_cart_detail[a].quantity, 3);
            n.isObject(n.runtime.tmp.add_to_cart_detail[a].currency) && !n.isEmpty(n.runtime.tmp.add_to_cart_detail[a].currency.symbol) && (i += " " + n.runtime.tmp.add_to_cart_detail[a].currency.symbol);
            for (var r = document.querySelectorAll('.add-to-cart-detail-price [data-product-variant-id="' + e + '"]'), o = 0; o < r.length; o++) if (r[o].getAttribute("data-store-id") == n.runtime.tmp.add_to_cart_detail[a].store_id && r[o].getAttribute("data-product-id") == n.runtime.tmp.add_to_cart_detail[a].product_id) {
                r[o].innerHTML = i;
                var l = n.findAncestor(r[o], "add-to-cart-detail-row");
                if (!n.isEmpty(l)) {
                    var s = n.findAncestor(t, "ladi-element"), c = n.findAncestor(l, "ladi-element");
                    if (!n.isEmpty(s) && !n.isEmpty(c) && s.id == c.id) continue;
                    var d = l.querySelector(".add-to-cart-detail-quantity input");
                    n.isEmpty(d) || (d.value = n.runtime.tmp.add_to_cart_detail[a].quantity);
                    var u = l.querySelector(".add-to-cart-detail-image-quantity");
                    n.isEmpty(u) || (u.innerHTML = n.runtime.tmp.add_to_cart_detail[a].quantity)
                }
            }
        })
    }
}, LadiPageScriptV2.prototype.generateAddToCartDetail = function (t, e, i) {
    var a = this, n = [];
    n = i ? a.runtime.tmp.add_to_cart_detail : [{
        store_id: 0,
        product_id: 0,
        product_variant_id: 0,
        name: "LadiPage Product Name",
        title: "Product Variant",
        price: 999999,
        image: LadiPage.getRootScope().logoUrlColor,
        quantity: 1,
        inventory_checked: 0,
        available_quantity: 999,
        currency: {symbol: "VND"}
    }];
    var r = "";
    return r += "<tbody>", 0 == n.length ? r += '<tr><td class="add-to-cart-detail-no-product">' + e + "</td></tr>" : n.forEach(function (e) {
        r += '<tr class="add-to-cart-detail-row"><td class="add-to-cart-detail-image"><img src="' + e.image + '" />', t == a.const.ADD_TO_CART_DETAIL_LAYOUT.viewonly && (r += '<span class="add-to-cart-detail-image-quantity">' + e.quantity + "</span>"), r += "</td>", r += '<td class="add-to-cart-detail-title"><span class="add-to-cart-detail-title-name">' + e.name + '</span><span class="add-to-cart-detail-title-variant">' + e.title + "</span></td>", t == a.const.ADD_TO_CART_DETAIL_LAYOUT.editable && (r += '<td class="add-to-cart-detail-quantity"><button onclick="javascript: LadiPageScript.buttonAddToCartProductQuantity(this, -1);" type="button"><span>-</span></button><input' + (i ? "" : " disabled") + ' type="number" min="1" value="' + e.quantity + '" onchange="javascript: LadiPageScript.changeAddToCartProductQuantity(this, ' + e.product_variant_id + ', true);" /><button onclick="javascript: LadiPageScript.buttonAddToCartProductQuantity(this, 1);" type="button"><span>+</span></button></td>'), r += '<td class="add-to-cart-detail-price"><span data-store-id="' + e.store_id + '" data-product-id="' + e.product_id + '" data-product-variant-id="' + e.product_variant_id + '">' + a.formatNumber(e.price * e.quantity, 3), a.isObject(e.currency) && !a.isEmpty(e.currency.symbol) && (r += " " + e.currency.symbol), r += "</span></td>", t == a.const.ADD_TO_CART_DETAIL_LAYOUT.editable && (r += '<td class="add-to-cart-detail-action"><button onclick="javascript: LadiPageScript.removeAddToCartProduct(' + e.product_variant_id + ');" type="button"><span>X</span></button></td>', r += "</tr>")
    }), r += "</tbody>"
}, LadiPageScriptV2.prototype.getProductVariantIndex = function (t, e, i) {
    var a = this, n = -1, r = a.generateVariantProduct(e, !1, i, null, null, null, null, !0, !0);
    if (!(a.isObject(r) && a.isObject(r.store_info) && a.isObject(r.product) && a.isArray(r.product.variants))) return n;
    this.runtime.isClient ? Object.keys(this.runtime.eventData).forEach(function (o) {
        if ((a.isEmpty(t) || t == o) && -1 == n) {
            var l = a.runtime.eventData[o];
            if ("form" == l.type && l["option.is_add_to_cart"] && l["option.add_to_cart_product"] == e && l["option.form_account_id"] == i) {
                var s = document.getElementById(o);
                if (!a.isEmpty(s)) {
                    var c = s.querySelector('[data-variant="true"]');
                    if (!a.isEmpty(c)) {
                        var d = a.runtime.eventData[c.id];
                        if (!a.isEmpty(d)) {
                            if (d["option.input_add_to_cart_variant_product_type"] == a.const.ADD_TO_CART_PRODUCT_TYPE.combobox) {
                                var u = c.querySelectorAll(".ladi-form-item [data-product-variant-id]");
                                n = r.product.variants.findIndex(function (t) {
                                    for (var e = !0, i = null, a = function (t) {
                                        return t == i
                                    }, n = 0; n < u.length; n++) if (u[n].getAttribute("data-store-id") == r.store_info.id && u[n].getAttribute("data-product-id") == t.product_id) {
                                        i = u[n].getAttribute("data-product-variant-id");
                                        var o = u[n].value, l = t.option_ids.split("/").findIndex(a);
                                        if (-1 != l && t["option" + (l + 1)] != o) {
                                            e = !1;
                                            break
                                        }
                                    }
                                    return e
                                })
                            }
                            if (d["option.input_add_to_cart_variant_product_type"] == a.const.ADD_TO_CART_PRODUCT_TYPE.combined) {
                                var p = c.querySelector(".ladi-form-control");
                                if (p.getAttribute("data-store-id") != r.store_info.id || p.getAttribute("data-product-id") != r.product.product_id) return;
                                n = p.value, n = a.isEmpty(n) ? -1 : parseInt(n)
                            }
                        }
                    }
                }
            }
        }
    }) : n = LadiPage.getProductVariantIndex(t, r, e, i);
    return n
}, LadiPageScriptV2.prototype.generateProductKey = function (t, e, i, a, n, r) {
    var o = this, l = o.generateVariantProduct(i, !1, a, null, null, null, null, !0, !0, function (e) {
        o.generateProductKey(t, !1, i, a, n, r)
    });
    if (o.isObject(l) && o.isObject(l.product)) {
        var s = null;
        if (-1 != ["name", "description"].indexOf(n) && (s = l.product[n], t = s), -1 != ["image"].indexOf(n) && (s = l.product[n], o.isObject(s) && (t = s.src, o.isEmpty(t) || (t = "https://" + o.const.STATIC_DOMAIN + "/" + t))), -1 != ["images"].indexOf(n) && (s = l.product[n], o.isArray(s) && (t = [], s.forEach(function (e) {
            o.isEmpty(e.src) || t.push({src: "https://" + o.const.STATIC_DOMAIN + "/" + e.src})
        }))), o.isArray(l.product.variants) && l.product.variants.length > 0) {
            var c = o.getProductVariantIndex(null, i, a);
            if (-1 != c) {
                var d = l.product.variants[c];
                -1 != ["title", "sku"].indexOf(n) && (s = d[n], t = s), -1 != ["weight"].indexOf(n) && (s = d[n], o.isEmpty(d.weight_unit) || (s += d.weight_unit), t = s), -1 != ["price"].indexOf(n) && (s = o.formatNumber(d[n], 3), o.isObject(l.store_info) && o.isObject(l.store_info.currency) && !o.isEmpty(l.store_info.currency.symbol) && (s += " " + l.store_info.currency.symbol), t = s), -1 != ["src", "thumb"].indexOf(n) && (s = d[n], o.isEmpty(s) || (s = "https://" + o.const.STATIC_DOMAIN + "/" + s), t = s)
            }
        }
        !e && o.isFunction(r) && r(t)
    }
    return t
}, LadiPageScriptV2.prototype.generateVariantProduct = function (t, e, i, a, n, r, o, l, s, c) {
    var d = e ? "" : null, u = this;
    if (!u.isEmpty(t) && !u.isEmpty(i)) {
        u.isEmpty(u.runtime.tmp.product_info[i]) && (u.runtime.tmp.product_info[i] = {}), u.isEmpty(u.runtime.tmp.timeout_product_info[i]) && (u.runtime.tmp.timeout_product_info[i] = {});
        var p = u.runtime.tmp.product_info[i][t], m = function () {
            if (!e) return u.isObject(p) ? p : null;
            var t = "";
            if (u.isObject(p)) {
                if (!u.isObject(p.product)) return t;
                a == u.const.ADD_TO_CART_PRODUCT_TYPE.combined && (t += '<div class="ladi-form-item-container"><div class="ladi-form-item-background"></div><div class="ladi-form-item"><select data-store-id="' + p.store_info.id + '" data-product-id="' + p.product.product_id + '" required tabindex="' + o + '" class="ladi-form-control ladi-form-control-select" data-selected=""' + (l ? "" : ' onmousedown="javascript: event.preventDefault();"') + ">", u.isArray(p.product.variants) && p.product.variants.forEach(function (e, i) {
                    var a = e.title;
                    r && (a += " - " + u.formatNumber(e.price, 3), u.isObject(p.store_info) && u.isObject(p.store_info.currency) && !u.isEmpty(p.store_info.currency.symbol) && (a += " " + p.store_info.currency.symbol)), t += '<option value="' + i + '">' + a + "</option>"
                }), t += "</select></div></div>"), a == u.const.ADD_TO_CART_PRODUCT_TYPE.combobox && u.isArray(p.product.options) && p.product.options.forEach(function (e) {
                    t += '<div class="ladi-form-item-box">', u.isEmpty(n) || (t += '<div class="ladi-form-item-title"><span>' + e.name + "</span></div>"), t += '<div class="ladi-form-item-container"><div class="ladi-form-item-background"></div><div class="ladi-form-item"><select data-store-id="' + p.store_info.id + '" data-product-id="' + e.product_id + '" data-product-variant-id="' + e.product_option_id + '" required tabindex="' + o + '" class="ladi-form-control ladi-form-control-select" data-selected=""' + (l ? "" : ' onmousedown="javascript: event.preventDefault();"') + ">", e.values.forEach(function (e) {
                        t += '<option value="' + e.name + '">' + e.name + "</option>"
                    }), t += "</select></div></div></div>"
                })
            }
            return t
        };
        if (u.isNull(p)) {
            u.runtime.tmp.product_info[i][t] = !0;
            var y = {product_id: parseInt(t) || t, form_account_id: i};
            return u.sendRequest("POST", u.const.API_SHOW_PRODUCT, JSON.stringify(y), !0, {"Content-Type": "application/json"}, function (e, a, n) {
                if (n.readyState == XMLHttpRequest.DONE) try {
                    var r = JSON.parse(e);
                    p = r.data, u.isObject(p) ? (u.runtime.tmp.product_info[i][t] = p, d = m(), u.isFunction(c) && c(d)) : u.isEmpty(u.runtime.tmp.timeout_product_info[i]) || u.removeTimeout(u.runtime.tmp.timeout_product_info[i][t])
                } catch (e) {
                    u.isEmpty(u.runtime.tmp.timeout_product_info[i]) || u.removeTimeout(u.runtime.tmp.timeout_product_info[i][t])
                }
            }), d
        }
        !0 === p ? u.runtime.tmp.timeout_product_info[i][t] = u.runTimeout(function () {
            u.generateVariantProduct(t, e, i, a, n, r, o, l, !1, c)
        }, 100) : (d = m(), !s && u.isFunction(c) && c(d))
    }
    return d
}, LadiPageScriptV2.prototype.formatNumber = function (t, e, i, a) {
    if (void 0 != t) {
        void 0 == i && (i = 0), void 0 == a && (a = 0);
        var n = "\\d(?=(\\d{" + (e || 3) + "})+" + (a > 0 ? "\\." : "$") + ")";
        t = t.toFixed(Math.max(0, ~~a)).replace(new RegExp(n, "g"), "$&,");
        var r = null, o = null;
        i >= 1 && (o = (r = t.split("."))[0], t = o = new Array(i - o.length + 1).join("0") + o, 2 == r.length && (t += "." + r[1])), a >= 1 && 2 == (r = t.split(".")).length && (o = r[1], o = new Array(a - o.length + 1).join("0") + o, t = r[0] + "." + o)
    }
    return t
}, LadiPageScriptV2.prototype.setDataReplaceStr = function (t, e) {
    this.runtime.replaceStr[t] = e
}, LadiPageScriptV2.prototype.getDataReplaceStr = function (t, e) {
    var i = null;
    return this.isNull(e) || (i = e[t]), this.isNull(i) && (i = this.runtime.replaceStr[t]), i
}, LadiPageScriptV2.prototype.highlightText = function (t, e, i, a) {
    if (0 != e.length) {
        var n = i ? "gi" : "g", r = [];
        e.forEach(function (t) {
            r.push(t.replaceAll("|", "\\|"))
        }), r.sort(function (t, e) {
            return e.length - t.length
        });
        var o = this;
        Array.from(t.childNodes).forEach(function (t) {
            var l = new RegExp(r.join("|"), n);
            if (3 !== t.nodeType) o.highlightText(t, e, i, a); else if (l.test(t.textContent)) {
                var s = document.createDocumentFragment(), c = 0;
                t.textContent.replace(l, function (e, i) {
                    var n = document.createTextNode(t.textContent.slice(c, i)), r = null;
                    o.isFunction(a) ? r = a(e) : (r = document.createElement("span")).textContent = e, s.appendChild(n), s.appendChild(r), c = i + e.length
                });
                var d = document.createTextNode(t.textContent.slice(c));
                s.appendChild(d), t.parentNode.replaceChild(s, t)
            }
        })
    }
}, LadiPageScriptV2.prototype.convertDataReplaceStr = function (t, e, i, a) {
    for (var n = this, r = t, o = new RegExp(n.runtime.replacePrefixStart + "[^" + n.runtime.replacePrefixStart + "]*" + n.runtime.replacePrefixEnd, "gi"), l = null, s = [], c = function (t) {
        if (i) s.push(t); else {
            var e = t, o = e.split("|");
            e = (e = o.length > 1 ? o[o.length - 1] : e.substr(n.runtime.replacePrefixStart.length)).substr(0, e.length - n.runtime.replacePrefixEnd.length);
            var l = n.getDataReplaceStr(e, a);
            if (n.isEmpty(l)) if (o.length > 1) {
                var c = n.randomInt(0, o.length - 2);
                l = o[c], 0 == c && (l = l.substr(n.runtime.replacePrefixStart.length))
            } else l = "";
            r = r.replaceAll(t, l)
        }
    }; null !== (l = o.exec(t));) l.index === o.lastIndex && o.lastIndex++, l.forEach(c);
    return s = s.unique(), n.highlightText(e, s, !0, function (t) {
        var e = document.createElement("span");
        return e.setAttribute("data-replace-str", t), e
    }), r
}, LadiPageScriptV2.prototype.setDataReplaceElement = function (t, e, i, a, n) {
    for (var r = this.isEmpty(a) ? document : document.getElementById(a), o = r.querySelectorAll("span[data-replace-str]"), l = 0; l < o.length; l++) {
        var s = o[l].getAttribute("data-replace-str");
        o[l].innerHTML = this.convertDataReplaceStr(s, null, !1, i)
    }
    for (var c = r.querySelectorAll("a[data-replace-href]"), d = 0; d < c.length; d++) {
        var u = c[d].getAttribute("data-replace-href");
        u = this.convertDataReplaceStr(u, null, !1, i), c[d].href = u
    }
    if (t) for (var p = r.querySelectorAll(".ladi-element .ladi-form-item-container [name]"), m = 0; m < p.length; m++) {
        var y = p[m].getAttribute("name").trim();
        if (-1 != n.indexOf(y)) {
            var g = this.getDataReplaceStr(y, i);
            if (!this.isNull(g)) {
                var _ = this.isArray(g) ? g[0] : g;
                if ("INPUT" == p[m].tagName) {
                    var f = p[m].getAttribute("type").trim();
                    if ("checkbox" == f || "radio" == f) {
                        var h = !1;
                        if ("checkbox" == f) {
                            var v = g;
                            this.isArray(v) || (v = [v]), h = -1 != v.indexOf(p[m].getAttribute("value"))
                        }
                        "radio" == f && (h = p[m].getAttribute("value") == _.trim()), h ? (p[m].checked = !0, e && p[m].setAttribute("checked", "checked")) : (p[m].checked = !1, e && p[m].removeAttribute("checked"));
                        var E = this.findAncestor(p[m], "ladi-form-checkbox-item");
                        if (!this.isEmpty(E)) {
                            var S = E.querySelector("span");
                            this.isEmpty(S) || S.setAttribute("data-checked", p[m].checked)
                        }
                    } else p[m].value = _.trim(), e && p[m].setAttribute("value", p[m].value)
                }
                if ("TEXTAREA" == p[m].tagName && (p[m].value = _.trim(), e && (p[m].innerHTML = p[m].value)), "SELECT" == p[m].tagName) {
                    var A = p[m].querySelector('option[value="' + _.trim() + '"]');
                    if (!this.isEmpty(A) && (p[m].value = A.getAttribute("value"), e && !A.hasAttribute("selected"))) {
                        for (var L = p[m].querySelectorAll("option"), P = 0; P < L.length; P++) L[P].removeAttribute("selected");
                        A.setAttribute("selected", "selected")
                    }
                }
            }
        }
    }
}, LadiPageScriptV2.prototype.setDataReplaceStart = function () {
    for (var t = document.querySelectorAll(".ladi-headline, .ladi-paragraph, .ladi-list-paragraph ul"), e = 0; e < t.length; e++) this.convertDataReplaceStr(t[e].innerHTML, t[e], !0);
    this.setDataReplaceElement(!0, !0, null, null, Object.keys(this.runtime.replaceStr))
}, LadiPageScriptV2.prototype.showMessage = function (t, e, i) {
    if (this.isEmpty(t)) this.isFunction(i) && i(); else {
        var a = document.getElementsByClassName("ladipage-message")[0];
        if (this.isEmpty(a)) {
            var n = this;
            t = n.convertDataReplaceStr(t, null, !1, e), (a = document.createElement("div")).className = "ladipage-message", document.body.appendChild(a);
            var r = document.createElement("div");
            r.className = "ladipage-message-box", a.appendChild(r);
            var o = document.createElement("h1");
            r.appendChild(o), o.textContent = this.const.LANG.ALERT_TITLE;
            var l = document.createElement("div");
            l.className = "ladipage-message-text", r.appendChild(l), l.innerHTML = t;
            var s = document.createElement("button");
            s.className = "ladipage-message-close", r.appendChild(s), s.textContent = this.const.LANG.ALERT_BUTTON_TEXT, s.focus(), s.addEventListener("click", function (t) {
                t.stopPropagation(), a.parentElement.removeChild(a), n.isFunction(i) && i()
            })
        } else this.isFunction(i) && i()
    }
}, LadiPageScriptV2.prototype.findAncestor = function (t, e) {
    for (; (t = t.parentElement) && !t.classList.contains(e);) ;
    return t
}, LadiPageScriptV2.prototype.createStyleElement = function (t, e) {
    var i = document.getElementById(t);
    return this.isEmpty(i) && ((i = document.createElement("style")).id = t, i.type = "text/css", document.head.appendChild(i)), i.innerHTML != e && (i.innerHTML = e), i
}, LadiPageScriptV2.prototype.createTmpElement = function (t, e, i, a, n) {
    var r = document.createElement(t);
    this.isEmpty(i) || Object.keys(i).forEach(function (t) {
        r.setAttribute(t, i[t])
    });
    var o = document.createElement("div");
    return o.appendChild(r), a ? r.outerHTML = e : r.innerHTML = e, n ? o : o.firstChild
}, LadiPageScriptV2.prototype.getCountdownTime = function (t, e) {
    var i = Math.floor(t / 1e3), a = i % 86400, n = a % 3600, r = Math.floor(i / 86400), o = Math.floor(a / 3600),
        l = Math.floor(n / 60), s = n % 60;
    r = r < 0 ? 0 : r, o = o < 0 ? 0 : o, l = l < 0 ? 0 : l, s = s < 0 ? 0 : s, r = r < 10 ? "0" + r : r, o = o < 10 ? "0" + o : o, l = l < 10 ? "0" + l : l, s = s < 10 ? "0" + s : s;
    var c = {};
    return c[this.const.COUNTDOWN_ITEM_TYPE.day] = r, c[this.const.COUNTDOWN_ITEM_TYPE.hour] = o, c[this.const.COUNTDOWN_ITEM_TYPE.minute] = l, c[this.const.COUNTDOWN_ITEM_TYPE.seconds] = s, this.isEmpty(e) ? c : c[e]
}, LadiPageScriptV2.prototype.getElementBoundingClientRect = function (t) {
    var e = t.getBoundingClientRect();
    return (this.isNull(e.x) || this.isNull(e.y)) && (e.x = e.left, e.y = e.top), e
}, LadiPageScriptV2.prototype.getEventCursorData = function (t) {
    return (this.isNull(t.pageX) || this.isNull(t.pageY)) && (!this.isEmpty(t.touches) && t.touches.length > 0 ? (t.pageX = t.touches[0].pageX, t.pageY = t.touches[0].pageY) : !this.isEmpty(t.targetTouches) && t.targetTouches.length > 0 ? (t.pageX = t.targetTouches[0].pageX, t.pageY = t.targetTouches[0].pageY) : !this.isEmpty(t.changedTouches) && t.changedTouches.length > 0 && (t.pageX = t.changedTouches[0].pageX, t.pageY = t.changedTouches[0].pageY)), t
}, LadiPageScriptV2.prototype.getElementAHref = function (t, e) {
    var i = document.createElement("a");
    return !e || t.toLowerCase().startsWith("http://") || t.toLowerCase().startsWith("https://") || (t = "http://" + t), i.href = t, i
}, LadiPageScriptV2.prototype.loadScript = function (t, e, i) {
    var a = document.createElement("script");
    a.type = "text/javascript", e && (a.async = !0), a.src = t, a.onload = i, document.body.appendChild(a)
}, LadiPageScriptV2.prototype.isObject = function (t) {
    return !this.isFunction(t) && !this.isArray(t) && t instanceof Object
}, LadiPageScriptV2.prototype.isArray = function (t) {
    return t instanceof Array
}, LadiPageScriptV2.prototype.isFunction = function (t) {
    return "function" == typeof t || t instanceof Function
}, LadiPageScriptV2.prototype.isString = function (t) {
    return "string" == typeof t || t instanceof String
}, LadiPageScriptV2.prototype.isEmpty = function (t) {
    return !!this.isNull(t) || (this.isString(t) ? 0 == (t = t.trim()).length || "undefined" == t.toLowerCase() : !!this.isArray(t) && 0 == t.length)
}, LadiPageScriptV2.prototype.isNull = function (t) {
    return void 0 === t || void 0 == t
};
var Base64 = {
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", encode: function (t) {
        var e, i, a, n, r, o, l, s = "", c = 0;
        for (t = Base64._utf8_encode(t); c < t.length;) n = (e = t.charCodeAt(c++)) >> 2, r = (3 & e) << 4 | (i = t.charCodeAt(c++)) >> 4, o = (15 & i) << 2 | (a = t.charCodeAt(c++)) >> 6, l = 63 & a, isNaN(i) ? o = l = 64 : isNaN(a) && (l = 64), s = s + Base64._keyStr.charAt(n) + Base64._keyStr.charAt(r) + Base64._keyStr.charAt(o) + Base64._keyStr.charAt(l);
        return s
    }, decode: function (t) {
        var e, i, a, n, r, o, l = "", s = 0;
        for (t = t.replace(/[^A-Za-z0-9\+\/\=]/g, ""); s < t.length;) e = Base64._keyStr.indexOf(t.charAt(s++)) << 2 | (n = Base64._keyStr.indexOf(t.charAt(s++))) >> 4, i = (15 & n) << 4 | (r = Base64._keyStr.indexOf(t.charAt(s++))) >> 2, a = (3 & r) << 6 | (o = Base64._keyStr.indexOf(t.charAt(s++))), l += String.fromCharCode(e), 64 != r && (l += String.fromCharCode(i)), 64 != o && (l += String.fromCharCode(a));
        return l = Base64._utf8_decode(l)
    }, _utf8_encode: function (t) {
        t = t.replace(/\r\n/g, "\n");
        for (var e = "", i = 0; i < t.length; i++) {
            var a = t.charCodeAt(i);
            a < 128 ? e += String.fromCharCode(a) : a > 127 && a < 2048 ? (e += String.fromCharCode(a >> 6 | 192), e += String.fromCharCode(63 & a | 128)) : (e += String.fromCharCode(a >> 12 | 224), e += String.fromCharCode(a >> 6 & 63 | 128), e += String.fromCharCode(63 & a | 128))
        }
        return e
    }, _utf8_decode: function (t) {
        for (var e = "", i = 0, a = 0, n = 0; i < t.length;) (a = t.charCodeAt(i)) < 128 ? (e += String.fromCharCode(a), i++) : a > 191 && a < 224 ? (n = t.charCodeAt(i + 1), e += String.fromCharCode((31 & a) << 6 | 63 & n), i += 2) : (n = t.charCodeAt(i + 1), c3 = t.charCodeAt(i + 2), e += String.fromCharCode((15 & a) << 12 | (63 & n) << 6 | 63 & c3), i += 3);
        return e
    }
}, LadiPageScript = LadiPageScript || new LadiPageScriptV2;
LadiPageScript.init();
var lightbox_run = function (t, e) {
    var i = document.getElementById(LadiPageScript.runtime.lightbox_screen_id);
    if (!LadiPageScript.isEmpty(i)) {
        i.innerHTML = '<div class="lightbox-close"></div>' + t;
        var a = i.getElementsByClassName("lightbox-close")[0], n = i.getElementsByClassName("lightbox-item")[0],
            r = function () {
                var t = document.getElementById(LadiPageScript.runtime.backdrop_popup_id);
                return LadiPageScript.isEmpty(t) || "none" == getComputedStyle(t).display
            }, o = 0;
        r() ? (o = window.scrollY, LadiPageScript.runtime.tmp.bodyScrollY = o) : o = LadiPageScript.runtime.tmp.bodyScrollY;
        var l = function (t) {
            t.style.removeProperty("display"), t.innerHTML = "";
            var e = document.getElementById("style_lightbox");
            LadiPageScript.isEmpty(e) || e.parentElement.removeChild(e);
            var i = r();
            i && !LadiPageScript.isEmpty(LadiPageScript.runtime.tmp.bodyScrollY) && window.scrollTo(0, LadiPageScript.runtime.tmp.bodyScrollY), i && (LadiPageScript.runtime.tmp.bodyScrollY = null)
        };
        a.addEventListener("click", function (t) {
            t.stopPropagation(), l(i)
        }), i.style.setProperty("display", "block");
        var s = "body {";
        s += "position: fixed !important;", s += "width: 100% !important;", s += "top: -" + o + "px", s += "}", LadiPageScript.createStyleElement("style_lightbox", s);
        var c = function () {
            var t = i.getElementsByClassName("lightbox-close")[0], e = i.getElementsByClassName("lightbox-item")[0];
            if (!LadiPageScript.isEmpty(t) && !LadiPageScript.isEmpty(e)) {
                var a = LadiPageScript.getElementBoundingClientRect(e), n = 10, r = 10;
                a.x - 5 - t.clientWidth > r && (r = a.x - 5 - t.clientWidth), a.y - 5 - t.clientHeight > n && (n = a.y - 5 - t.clientHeight), r += LadiPageScript.runtime.widthScrollBar, t.style.setProperty("right", r + "px"), t.style.setProperty("top", n + "px")
            }
        };
        LadiPageScript.isEmpty(i.getAttribute("data-event-click")) && (i.setAttribute("data-event-click", !0), i.addEventListener("click", function (t) {
            t.stopPropagation(), l(t.target)
        }), window.addEventListener("resize", c)), a.style.setProperty("top", "-100px"), a.style.setProperty("right", "-100px"), n.onload = c, n.src = e
    }
}, lightbox_iframe = function (t, e) {
    if (!LadiPageScript.isEmpty(t)) {
        var i = document.getElementById(LadiPageScript.runtime.lightbox_screen_id);
        if (!LadiPageScript.isEmpty(i)) {
            var a = "", n = .9 * document.body.clientWidth, r = .5625 * n;
            r > .9 * LadiPageScript.getHeightDevice() && (n = 1.7778 * (r = .9 * LadiPageScript.getHeightDevice()));
            var o = "margin: auto; position: absolute; top: 0; left: 0; bottom: 0; right: 0; width: " + n + "px; height: " + r + "px; max-width: 90%; max-height: 90%;";
            a = '<iframe id="lightbox_iframe" class="lightbox-item" style="' + o + '" frameborder="0" allowfullscreen></iframe>';
            var l = t, s = LadiPageScript.createTmpElement("iframe", l, null, !0);
            LadiPageScript.isEmpty(s) || "IFRAME" != s.tagName || (l = s.src, s.removeAttribute("src"), s.setAttribute("style", o), s.removeAttribute("width"), s.removeAttribute("height"), s.classList.add("lightbox-item"), e || s.setAttribute("id", "lightbox_iframe"), a = s.outerHTML), lightbox_run(a, l)
        }
    }
}, lightbox_image = function (t) {
    if (!LadiPageScript.isEmpty(t)) {
        var e = document.getElementById(LadiPageScript.runtime.lightbox_screen_id);
        if (!LadiPageScript.isEmpty(e)) {
            lightbox_run('<img class="lightbox-item" style="margin: auto; position: absolute; top: 0; left: 0; bottom: 0; right: 0; object-fit: scale-down; max-width: 90%; max-height: 90%;" />', t)
        }
    }
}, lightbox_video = function (t, e) {
    if (!LadiPageScript.isEmpty(t) && !LadiPageScript.isEmpty(e) && e == LadiPageScript.const.VIDEO_TYPE.youtube) {
        LadiPageScript.stopAllVideo();
        var i = LadiPageScript.getVideoId(e, t);
        lightbox_iframe('<iframe id="lightbox_player" src="https://www.youtube.com/embed/' + i + '?autoplay=1&rel=0" class="iframe-video-play" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>', !0)
    }
}, LadiPageLibraryV2 = LadiPageLibraryV2 || function () {
};
LadiPageLibraryV2.prototype.open_url = function (t, e) {
    if (!LadiPageScript.isEmpty(this.id)) {
        var i = this.id, a = "";
        if (LadiPageScript.isObject(e)) Object.keys(e).forEach(function (t) {
            LadiPageScript.isEmpty(a) || (a += "&"), a += t + "=" + encodeURIComponent(e[t])
        });
        if (!LadiPageScript.isEmpty(a)) {
            var n = LadiPageScript.createTmpElement("a", "", {href: i});
            n.search = n.search + (LadiPageScript.isEmpty(n.search) ? "?" : "&") + a, i = n.href
        }
        i = LadiPageScript.getLinkUTMRedirect(i, window.location.search), window.open(i, t)
    }
}, LadiPageLibraryV2.prototype.submit = function () {
    var t = document.getElementById(this.id);
    if (!LadiPageScript.isEmpty(t)) {
        var e = t.querySelector('.ladi-form button[type="submit"]');
        LadiPageScript.isEmpty(e) || e.click()
    }
}, LadiPageLibraryV2.prototype.scroll = function () {
    var t = document.getElementById(this.id);
    if (!LadiPageScript.isEmpty(t)) {
        for (var e = document.querySelectorAll("#" + LadiPageScript.runtime.builder_section_popup_id + " .ladi-container > .ladi-element"), i = 0; i < e.length; i++) e[i].id != this.id && e[i].hasAttribute("data-popup-backdrop") && "block" == e[i].style.getPropertyValue("display") && LadiPageScript.runRemovePopup(e[i].id, !0);
        var a = function () {
            t.scrollIntoView({behavior: "smooth"})
        };
        try {
            if (!LadiPageScript.isNull(window.jQuery)) return void $("html, body").animate({scrollTop: $(t).offset().top});
            a()
        } catch (t) {
            a()
        }
    }
}, LadiPageLibraryV2.prototype.value = function (t) {
    if (!LadiPageScript.isEmpty(this.id)) {
        var e = document.querySelectorAll("#" + this.id + " > ." + ["ladi-button .ladi-headline", "ladi-headline", "ladi-paragraph", "ladi-list-paragraph"].join(", #" + this.id + " > .")),
            i = document.querySelectorAll("#" + this.id + " > ." + ["ladi-form-item-container .ladi-form-item > input", "ladi-form-item-container .ladi-form-item > textarea", "ladi-form-item-container .ladi-form-item > select"].join(", #" + this.id + " > .")),
            a = document.querySelectorAll("#" + this.id + " > ." + ["ladi-form-item-container .ladi-form-checkbox-item > input"].join(", #" + this.id + " > .")),
            n = 0;
        for (n = 0; n < e.length; n++) e[n].innerHTML = t;
        for (n = 0; n < i.length; n++) i[n].value = t;
        var r = LadiPageScript.isArray(t) ? t : [t];
        for (n = 0; n < a.length; n++) {
            var o = !1;
            "checkbox" == a[n].getAttribute("type").toLowerCase() && -1 != r.indexOf(a[n].value) && (o = !0), "radio" == a[n].getAttribute("type").toLowerCase() && r.length > 0 && r[0] == a[n].value && (o = !0), o ? a[n].checked || a[n].click() : a[n].checked && a[n].click()
        }
    }
}, LadiPageLibraryV2.prototype.top = function () {
    var t = document.getElementById(this.id);
    if (!LadiPageScript.isEmpty(t) && t.classList.contains("ladi-section")) try {
        t.parentElement.insertBefore(t, t.parentElement.firstChild), LadiPageScript.reloadLazyload()
    } catch (t) {
    }
}, LadiPageLibraryV2.prototype.play = function () {
    var t = document.getElementById(this.id);
    if (!LadiPageScript.isEmpty(t)) {
        var e = LadiPageScript.runtime.eventData[this.id];
        if (!LadiPageScript.isEmpty(e)) {
            var i = e["option.video_type"], a = e["option.video_value"];
            LadiPageScript.playVideo(this.id, i, a)
        }
    }
}, LadiPageLibraryV2.prototype.hide = function () {
    var t = document.getElementById(this.id);
    LadiPageScript.isEmpty(t) || (0 == t.getElementsByClassName("ladi-popup").length ? (t.style.setProperty("display", "none", "important"), LadiPageScript.reloadLazyload()) : LadiPageScript.runRemovePopup(this.id, !0, function () {
        for (var t = document.querySelectorAll("#" + LadiPageScript.runtime.builder_section_popup_id + " .ladi-container > .ladi-element"), e = 0; e < t.length; e++) t[e].id != this.id && t[e].hasAttribute("data-popup-backdrop") && "block" == t[e].style.getPropertyValue("display") && LadiPageScript.runRemovePopup(t[e].id, !0)
    }))
}, LadiPageLibraryV2.prototype.show = function () {
    var t = document.getElementById(this.id);
    if (!LadiPageScript.isEmpty(t)) if (0 == t.getElementsByClassName("ladi-popup").length) {
        t.style.setProperty("display", "block", "important");
        var e = LadiPageScript.runtime.eventData[this.id];
        LadiPageScript.isEmpty(e) || LadiPageScript.startAutoScroll(this.id, e.type, e[LadiPageScript.const.DESKTOP + ".option.auto_scroll"], e[LadiPageScript.const.MOBILE + ".option.auto_scroll"]), LadiPageScript.reloadLazyload()
    } else LadiPageScript.runShowPopup(this.id, null, null, !0, function () {
        for (var t = document.querySelectorAll("#" + LadiPageScript.runtime.builder_section_popup_id + " .ladi-container > .ladi-element"), e = 0; e < t.length; e++) t[e].id != this.id && t[e].hasAttribute("data-popup-backdrop") && "block" == t[e].style.getPropertyValue("display") && LadiPageScript.runRemovePopup(t[e].id, !0)
    }), LadiPageScript.removeLazyloadPopup(this.id)
}, ["start", "add_turn"].forEach(function (t) {
    LadiPageLibraryV2.prototype[t] = function () {
        var e = LadiPageScript.runtime.eventData[this.id];
        if (!LadiPageScript.isEmpty(e)) {
            var i = LadiPageApp[e.type + LadiPageScript.const.APP_RUNTIME_PREFIX];
            if (!LadiPageScript.isEmpty(i)) {
                var a = i(e, !0);
                LadiPageScript.isFunction(a[t]) && a[t](this.id)
            }
        }
    }
});
var LadiPageAppV2, ladi = ladi || function (t) {
    if (!LadiPageScript.isEmpty(t)) {
        var e = new LadiPageLibraryV2;
        return e.id = t, e
    }
};
LadiPageScript.const.API_CHECK_VERIFY = "https://la.ladipage.com/2.0/domain/check", LadiPageScript.const.API_CHECKING_FORM = "https://la.ladipage.com/2.0/elastic/tracking-form", LadiPageScript.const.API_SHOW_PRODUCT = "https://api.ladipage.com/2.0/product/detail", LadiPageScript.const.API_LADISALE_ADD = "https://api.ladisales.com/2.0/cart/add", LadiPageScript.const.API_LADISALE_UPDATE = "https://api.ladisales.com/2.0/cart/update", LadiPageScript.const.API_LADISALE_SHOW = "https://api.ladisales.com/2.0/cart/show", LadiPageScript.const.API_LADISALE_GET_SHIPPING = "https://api.ladisales.com/2.0/checkout/{0}/get-shipping", LadiPageScript.const.API_LADISALE_VALIDATE_DISCOUNT = "https://api.ladisales.com/2.0/checkout/{0}/validate-discount", LadiPageScript.const.API_FORM_DATA = "https://api.forms.ladipage.com/2.0/send-form", LadiPageScript.const.CDN_LIBRARY_JS_URL = "https://w.ladicdn.com/v2/source/", LadiPageScript.const.CDN_LIBRARY_CSS_URL = "https://w.ladicdn.com/v2/source/", (LadiPageAppV2 = LadiPageAppV2 || function () {
}).prototype.notify_runtime = function (t, e) {
    var i = function () {
        }, a = null, n = "top_left", r = "top_center", o = "top_right", l = "bottom_left", s = "bottom_center",
        c = "bottom_right";
    return i.prototype.run = function (e, i) {
        var d = t["option.sheet_id"];
        if (!LadiPageScript.isEmpty(d)) {
            var u = document.getElementById(e), p = i ? LadiPageScript.const.DESKTOP : LadiPageScript.const.MOBILE,
                m = t[p + ".option.position"], y = 1e3 * (parseFloat(t["option.time_show"]) || 5),
                g = 1e3 * (parseFloat(t["option.time_delay"]) || 10),
                _ = "https://static.ladipage.net/source/notify.svg",
                f = [{key: "gsx$title", className: ".ladi-notify-title"}, {
                    key: "gsx$content",
                    className: ".ladi-notify-content"
                }, {key: "gsx$time", className: ".ladi-notify-time"}, {
                    key: "gsx$image",
                    className: ".ladi-notify-image img"
                }], h = function () {
                    u.style.setProperty("opacity", 0), m != n && m != r && m != o || u.style.setProperty("top", -u.clientHeight - 100 + "px"), m != l && m != s && m != c || u.style.setProperty("bottom", -u.clientHeight - 100 + "px")
                };
            h(), f.forEach(function (t) {
                "gsx$image" == t.key ? u.querySelectorAll(t.className)[0].src = _ : u.querySelectorAll(t.className)[0].textContent = ""
            });
            var v = function (t) {
                t = t.sort(function () {
                    return .5 - Math.random()
                });
                var e = -1, i = function () {
                    if (e + 1 < t.length) {
                        var d = t[++e], p = Object.keys(d);
                        u.style.removeProperty("opacity"), m != n && m != r && m != o || u.style.removeProperty("top"), m != l && m != s && m != c || u.style.removeProperty("bottom"), f.forEach(function (t) {
                            -1 != p.indexOf(t.key) && ("gsx$image" == t.key ? u.querySelectorAll(t.className)[0].src = LadiPageScript.isEmpty(d[t.key].$t) ? _ : d[t.key].$t : u.querySelectorAll(t.className)[0].textContent = d[t.key].$t)
                        }), a = LadiPageScript.runTimeout(function () {
                            h(), a = LadiPageScript.runTimeout(i, g)
                        }, y)
                    } else v(t)
                };
                a = LadiPageScript.runTimeout(i, g)
            };
            LadiPageScript.sendRequest("GET", "https://spreadsheets.google.com/feeds/list/" + d + "/1/public/values?alt=json", null, !0, null, function (t, e, i) {
                if (i.readyState == XMLHttpRequest.DONE && 200 == e) {
                    u.querySelector(".ladi-notify").classList.remove("ladi-hidden");
                    var a = JSON.parse(t).feed.entry;
                    u.classList.add("ladi-notify-transition"), v(a)
                }
            })
        }
    }, i.prototype.stop = function (t, e) {
        LadiPageScript.removeTimeout(a), a = null
    }, new i
}, (LadiPageAppV2 = LadiPageAppV2 || function () {
}).prototype.spinlucky_runtime = function (t, e) {
    var i = function () {
    }, a = function (t) {
        return parseFloat(LadiPageScript.getCookie("_total_turn_" + t)) || 0
    };
    return i.prototype.getEventTrackingCategory = function () {
        return "LadiPageFinish"
    }, i.prototype.run = function (e, i) {
        var n = t["option.spinlucky_setting.list_value"], r = t["option.spinlucky_setting.result_popup_id"],
            o = t["option.spinlucky_setting.result_message"], l = t["option.spinlucky_setting.max_turn"], s = a(e);
        if (!LadiPageScript.isEmpty(n)) {
            LadiPageScript.setDataReplaceStr("spin_turn_left", l - s);
            var c = document.getElementById(e), d = c.getElementsByClassName("ladi-spin-lucky-start")[0],
                u = c.getElementsByClassName("ladi-spin-lucky-screen")[0], p = !1;
            d.addEventListener("click", function (t) {
                if (t.stopPropagation(), !p) if ((s = a(e)) >= l) LadiPageScript.showMessage(LadiPageScript.const.LANG.GAME_MAX_TURN_MESSAGE.format(l)); else {
                    p = !0;
                    var i = [], c = 0, d = 1;
                    n.forEach(function (t, e) {
                        var a = Base64.decode(t).split("|"), n = a[0].trim(), r = a[1].trim(),
                            o = parseFloat(a[2].trim()) || 0;
                        i.push({min: d, max: d + o - 1, value: n, text: r, percent: o, index: e}), d += o, c += o
                    });
                    for (var m = LadiPageScript.randomInt(1, c), y = null, g = 0; g < i.length; g++) if (i[g].min <= m && i[g].max >= m) {
                        y = i[g];
                        break
                    }
                    if (LadiPageScript.isEmpty(y)) p = !1; else {
                        var _ = parseFloat(u.getAttribute("data-rotate")) || 0,
                            f = y.index * (360 / i.length) + 360 * (4 + Math.ceil(_ / 360)) + 180 / i.length,
                            h = "rotate(" + f + "deg)";
                        u.setAttribute("data-rotate", f), u.style.setProperty("transform", h), u.style.setProperty("-webkit-transform", h), "NEXT_TURN" != y.value.toUpperCase() && (s++, LadiPageScript.setCookie(null, "_total_turn_" + e, s, 1, !1, window.location.pathname));
                        LadiPageScript.runTimeout(function () {
                            "NEXT_TURN" == y.value.toUpperCase() ? LadiPageScript.isEmpty(y.text) || LadiPageScript.showMessage(y.text) : (LadiPageScript.setDataReplaceStr("coupon", y.value), LadiPageScript.setDataReplaceStr("coupon_code", y.value), LadiPageScript.setDataReplaceStr("coupon_text", y.text), LadiPageScript.setDataReplaceStr("spin_turn_left", l - s), LadiPageScript.setDataReplaceElement(!0, !1, null, null, ["coupon"]), r == LadiPageScript.const.GAME_RESULT_TYPE.default ? LadiPageScript.isEmpty(o) || LadiPageScript.showMessage(o) : window.ladi(r).show(), LadiPageScript.runEventTracking(e, !1)), p = !1
                        }, 1e3 * parseFloat(getComputedStyle(u).transitionDuration) + 1e3)
                    }
                }
            })
        }
    }, i.prototype.stop = function (t, e) {
    }, i.prototype.start = function (t) {
        var e = document.getElementById(t);
        if (!LadiPageScript.isEmpty(e) && e.getElementsByClassName("ladi-spin-lucky").length > 0) {
            var i = e.getElementsByClassName("ladi-spin-lucky-start")[0];
            LadiPageScript.isEmpty(i) || i.click()
        }
    }, i.prototype.add_turn = function (e) {
        var i = t["option.spinlucky_setting.max_turn"], n = a(e);
        n > 0 && n--, LadiPageScript.setCookie(null, "_total_turn_" + e, n, 1, !1, window.location.pathname), LadiPageScript.setDataReplaceStr("spin_turn_left", i - n), LadiPageScript.setDataReplaceElement(!1)
    }, new i
};