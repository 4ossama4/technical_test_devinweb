//Js obfuscated
(function(_0xe3f4x1) {
    'use strict';
    _0xe3f4x1(window)['on']('load', function() {
        _0xe3f4x1('[data-loader="circle-side"]')['fadeOut']();
        _0xe3f4x1('#preloader')['delay'](350)['fadeOut']('slow');
        _0xe3f4x1('body')['delay'](350);
        _0xe3f4x1('.hero_in h1,.hero_in form')['addClass']('animated');
        _0xe3f4x1('.hero_single, .hero_in')['addClass']('start_bg_zoom');
        _0xe3f4x1(window)['scroll']()
    });
    _0xe3f4x1(window)['on']('scroll', function() {
        if (_0xe3f4x1(this)['scrollTop']() > 1) {
            _0xe3f4x1('.header')['addClass']('sticky')
        } else {
            _0xe3f4x1('.header')['removeClass']('sticky')
        }
    });
    _0xe3f4x1('#sidebar')['theiaStickySidebar']({
        additionalMarginTop: 150
    });
    var _0xe3f4x2 = _0xe3f4x1('nav#menu')['mmenu']({
        "\x65\x78\x74\x65\x6E\x73\x69\x6F\x6E\x73": ['pagedim-black'],
        counters: true,
        keyboardNavigation: {
            enable: true,
            enhance: true
        },
        navbar: {
            title: 'MENU'
        },
        navbars: [{
            position: 'bottom',
            content: ['<a href="#0">\xA9 2018 TopTravel</a>']
        }]
    }, {
        clone: true,
        classNames: {
            fixedElements: {
                fixed: 'menu_fixed',
                sticky: 'sticky'
            }
        }
    });
    var _0xe3f4x3 = _0xe3f4x1('#hamburger');
    var _0xe3f4x4 = _0xe3f4x2['data']('mmenu');
    _0xe3f4x3['on']('click', function() {
        _0xe3f4x4['open']()
    });
   
    var _0xe3f4x5 = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: true,
        live: true,
        callback: function(_0xe3f4x6) {},
        scrollContainer: null
    });
    _0xe3f4x5['init']();
    _0xe3f4x1('a[href^="#"].btn_explore')['on']('click', function(_0xe3f4x7) {
        _0xe3f4x7['preventDefault']();
        var _0xe3f4x8 = this['hash'];
        var _0xe3f4x9 = _0xe3f4x1(_0xe3f4x8);
        _0xe3f4x1('html, body')['stop']()['animate']({
            "\x73\x63\x72\x6F\x6C\x6C\x54\x6F\x70": _0xe3f4x9['offset']()['top']
        }, 800, 'swing', function() {
            window['location']['hash'] = _0xe3f4x8
        })
    });
    _0xe3f4x1('.video')['magnificPopup']({
        type: 'iframe'
    });
    _0xe3f4x1('.magnific-gallery')['each'](function() {
        _0xe3f4x1(this)['magnificPopup']({
            delegate: 'a',
            type: 'image',
            preloader: true,
            gallery: {
                enabled: true
            },
            removalDelay: 500,
            callbacks: {
                beforeOpen: function() {
                    this['st']['image']['markup'] = this['st']['image']['markup']['replace']('mfp-figure', 'mfp-figure mfp-with-anim');
                    this['st']['mainClass'] = this['st']['el']['attr']('data-effect')
                }
            },
            closeOnContentClick: true,
            midClick: true
        })
    });
    _0xe3f4x1('#sign-in')['magnificPopup']({
        type: 'inline',
        fixedContentPos: false,
        fixedBgPos: true,
        overflowY: 'auto',
        closeBtnInside: true,
        preloader: false,
        midClick: true,
        removalDelay: 300,
        closeMarkup: '<button title="%title%" type="button" class="mfp-close"></button>',
        mainClass: 'my-mfp-zoom-in'
    });
    _0xe3f4x1('#password')['hidePassword']('focus', {
        toggle: {
            className: 'my-toggle'
        }
    });
    _0xe3f4x1('#forgot')['click'](function() {
        _0xe3f4x1('#forgot_pw')['fadeToggle']('fast')
    });

    function _0xe3f4xa(_0xe3f4x7) {
        _0xe3f4x1(_0xe3f4x7['target'])['prev']('.card-header')['find']('i.indicator')['toggleClass']('ti-minus ti-plus')
    }
    _0xe3f4x1('.accordion_2')['on']('hidden.bs.collapse shown.bs.collapse', _0xe3f4xa);

    function _0xe3f4xb(_0xe3f4x7) {
        _0xe3f4x1(_0xe3f4x7['target'])['prev']('.panel-heading')['find']('.indicator')['toggleClass']('ti-minus ti-plus')
    }
    _0xe3f4x1('.custom-search-input-2 select, .custom-select-form select')['niceSelect']();
    _0xe3f4x1('input.icheck')['iCheck']({
        checkboxClass: 'icheckbox_square-grey',
        radioClass: 'iradio_square-grey'
    });
    var _0xe3f4xc = Array['prototype']['slice']['call'](document['querySelectorAll']('.js-switch'));
    _0xe3f4xc['forEach'](function(_0xe3f4xd) {
        var _0xe3f4xe = new Switchery(_0xe3f4xd, {
            size: 'small'
        })
    });
    _0xe3f4x1('.wish_bt')['on']('click', function(_0xe3f4x7) {
        _0xe3f4x7['preventDefault']();
        _0xe3f4x1(this)['toggleClass']('liked')
    });
    _0xe3f4x1(window)['bind']('load resize', function() {
        var _0xe3f4xf = _0xe3f4x1(window)['width']();
        if (_0xe3f4x1(this)['width']() < 991) {
            _0xe3f4x1('.collapse#collapseFilters')['removeClass']('show')
        } else {
            _0xe3f4x1('.collapse#collapseFilters')['addClass']('show')
        }
    });
    var _0xe3f4x10 = 800;
    var _0xe3f4x11 = 500;
    _0xe3f4x1(window)['scroll'](function() {
        if (_0xe3f4x1(window)['scrollTop']() >= _0xe3f4x10) {
            _0xe3f4x1('#toTop')['addClass']('visible')
        } else {
            _0xe3f4x1('#toTop')['removeClass']('visible')
        }
    });
    _0xe3f4x1('#toTop')['on']('click', function() {
        _0xe3f4x1('html, body')['animate']({
            scrollTop: 0
        }, _0xe3f4x11);
        return false
    });
    _0xe3f4x1('#carousel')['owlCarousel']({
        center: true,
        items: 2,
        loop: true,
        margin: 10,
        responsive: {
            0: {
                items: 1,
                dots: false
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });
    _0xe3f4x1('#reccomended')['owlCarousel']({
        center: true,
        items: 2,
        loop: true,
        margin: 0,
        responsive: {
            0: {
                items: 1
            },
            767: {
                items: 2
            },
            1000: {
                items: 3
            },
            1400: {
                items: 4
            }
        }
    });
    _0xe3f4x1(window)['bind']('load resize', function() {
        var _0xe3f4xf = _0xe3f4x1(window)['width']();
        if (_0xe3f4xf <= 991) {
            _0xe3f4x1('.sticky_horizontal')['stick_in_parent']({
                offset_top: 50
            })
        } else {
            _0xe3f4x1('.sticky_horizontal')['stick_in_parent']({
                offset_top: 67
            })
        }
    });
    var _0xe3f4x12 = _0xe3f4x1('.secondary_navv');
    _0xe3f4x12['find']('a')['on']('click', function(_0xe3f4x7) {
        _0xe3f4x7['preventDefault']();
        var _0xe3f4x8 = this['hash'];
        var _0xe3f4x9 = _0xe3f4x1(_0xe3f4x8);
        _0xe3f4x1('html, body')['animate']({
            "\x73\x63\x72\x6F\x6C\x6C\x54\x6F\x70": _0xe3f4x9['offset']()['top'] - 138
        }, 800, 'swing')
    });
    _0xe3f4x12['find']('ul li a')['on']('click', function() {
        _0xe3f4x12['find']('ul li a.active')['removeClass']('active');
        _0xe3f4x1(this)['addClass']('active')
    });
    _0xe3f4x1('#faq_box a[href^="#"]')['on']('click', function() {
        if (location['pathname']['replace'](/^\//, '') == this['pathname']['replace'](/^\//, '') || location['hostname'] == this['hostname']) {
            var _0xe3f4x8 = _0xe3f4x1(this['hash']);
            _0xe3f4x8 = _0xe3f4x8['length'] ? _0xe3f4x8 : _0xe3f4x1('[name=' + this['hash']['slice'](1) + ']');
            if (_0xe3f4x8['length']) {
                _0xe3f4x1('html,body')['animate']({
                    scrollTop: _0xe3f4x8['offset']()['top'] - 185
                }, 800);
                return false
            }
        }
    });
    _0xe3f4x1('ul#cat_nav li a')['on']('click', function() {
        _0xe3f4x1('ul#cat_nav li a.active')['removeClass']('active');
        _0xe3f4x1(this)['addClass']('active')
    });
    _0xe3f4x1('.btn_map, .btn_map_in')['on']('click', function() {
        var _0xe3f4x13 = _0xe3f4x1(this);
        _0xe3f4x13['text']() == _0xe3f4x13['data']('text-swap') ? _0xe3f4x13['text'](_0xe3f4x13['data']('text-original')) : _0xe3f4x13['text'](_0xe3f4x13['data']('text-swap'));
        _0xe3f4x1('html, body')['animate']({
            scrollTop: _0xe3f4x1('body')['offset']()['top'] + 385
        }, 600)
    });

    function _0xe3f4x14() {
        _0xe3f4x1('.panel-dropdown')['removeClass']('active')
    }
    _0xe3f4x1('.panel-dropdown a')['on']('click', function(_0xe3f4x7) {
        if (_0xe3f4x1(this)['parent']()['is']('.active')) {
            _0xe3f4x14()
        } else {
            _0xe3f4x14();
            _0xe3f4x1(this)['parent']()['addClass']('active')
        };
        _0xe3f4x7['preventDefault']()
    });
    var _0xe3f4x15 = false;
    _0xe3f4x1('.panel-dropdown')['hover'](function() {
        _0xe3f4x15 = true
    }, function() {
        _0xe3f4x15 = false
    });
    _0xe3f4x1('body')['mouseup'](function() {
        if (!_0xe3f4x15) {
            _0xe3f4x14()
        }
    })
})(window['jQuery'])