$(document).ready(function () {
    $.blockUI.defaults = {
        // message displayed when blocking (use null for no message)
        message: '<h1>        sdvbsdfgbvsdbsdbsdbsdb   </h1>',

        title: null,	  // title string; only used when theme == true
        draggable: true,  // only used when theme == true (requires jquery-ui.js to be loaded)

        theme: false, // set to true to use with jQuery UI themes

        // styles for the message when blocking; if you wish to disable
        // these and use an external stylesheet then do this in your code:
        // $.blockUI.defaults.css = {};
        css: {
            padding: 0,
            margin: 0,
            width: '100%',
            left:'25%',
            height: '100%',
            top: '30%',          
            textAlign: 'center',
            color: '#000',
            cursor: 'wait',
            background: 'url("imgs/Rotating_golf_ball.gif")',
            color: 'transparent',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '50%'
        },

        // minimal style set used when themes are used
        themedCSS: {
            width: '60%',
            top: '40%',
            left: '35%'
        },

        // styles for the overlay
        overlayCSS: {
            backgroundColor: '#000',
            opacity: 0.6,
            cursor: 'wait'
        },

        // styles applied when using $.growlUI
        growlCSS: {
            width: '350px',
            top: '10px',
            left: '',
            right: '10px',
            border: 'none',
            padding: '5px',
            opacity: 0.6,
            cursor: 'default',
            color: '#fff',
            backgroundColor: '#000',
            '-webkit-border-radius': '10px',
            '-moz-border-radius': '10px',
            'border-radius': '10px'
        },

        // IE issues: 'about:blank' fails on HTTPS and javascript:false is s-l-o-w
        // (hat tip to Jorge H. N. de Vasconcelos)
        iframeSrc: /^https/i.test(window.location.href || '') ? 'javascript:false' : 'about:blank',

        // force usage of iframe in non-IE browsers (handy for blocking applets)
        forceIframe: false,

        // z-index for the blocking overlay
        baseZ: 1000,

        // set these to true to have the message automatically centered
        centerX: true, // <-- only effects element blocking (page block controlled via css above)
        centerY: true,

        // allow body element to be stetched in ie6; this makes blocking look better
        // on "short" pages.  disable if you wish to prevent changes to the body height
        allowBodyStretch: true,

        // enable if you want key and mouse events to be disabled for content that is blocked
        bindEvents: true,

        // be default blockUI will supress tab navigation from leaving blocking content
        // (if bindEvents is true)
        constrainTabKey: true,

        // fadeIn time in millis; set to 0 to disable fadeIn on block
        fadeIn: 200,

        // fadeOut time in millis; set to 0 to disable fadeOut on unblock
        fadeOut: 400,

        // time in millis to wait before auto-unblocking; set to 0 to disable auto-unblock
        timeout: 0,

        // disable if you don't want to show the overlay
        showOverlay: true,

        // if true, focus will be placed in the first available input field when
        // page blocking
        focusInput: true,

        // suppresses the use of overlay styles on FF/Linux (due to performance issues with opacity)
        applyPlatformOpacityRules: true,

        // callback method invoked when fadeIn has completed and blocking message is visible
        onBlock: null,

        // callback method invoked when unblocking has completed; the callback is
        // passed the element that has been unblocked (which is the window object for page
        // blocks) and the options that were passed to the unblock call:
        //	 onUnblock(element, options)
        onUnblock: null,

        
        quirksmodeOffsetHack: 4,

        // class name of the message block
        blockMsgClass: 'blockMsg'
    };
   
});
