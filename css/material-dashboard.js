import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "noUi-target": {
        "WebkitTouchCallout": "none",
        "MsTouchAction": "none",
        "userSelect": "none",
        "boxSizing": "border-box",
        "borderRadius": 3
    },
    "noUi-target *": {
        "WebkitTouchCallout": "none",
        "MsTouchAction": "none",
        "userSelect": "none",
        "boxSizing": "border-box"
    },
    "noUi-base": {
        "width": "100%",
        "height": "100%",
        "position": "relative"
    },
    "noUi-origin": {
        "position": "absolute",
        "right": 0,
        "top": 0,
        "left": 0,
        "bottom": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "borderRadius": 0,
        "height": 2,
        "background": "#c8c8c8"
    },
    "noUi-handle": {
        "position": "relative",
        "zIndex": 1,
        "boxSizing": "border-box",
        "width": 14,
        "height": 14,
        "left": -10,
        "top": -6,
        "cursor": "pointer",
        "borderRadius": "100%",
        "transition": "all 0.2s ease-out",
        "border": "1px solid",
        "background": "#FFFFFF",
        "boxShadow": "0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)"
    },
    "noUi-stacking noUi-handle": {
        "zIndex": 10
    },
    "noUi-state-tap noUi-origin": {
        "transition": "left 0.3s, top 0.3s"
    },
    "noUi-state-drag *": {
        "cursor": "inherit !important"
    },
    "noUi-horizontal": {
        "height": 2,
        "marginTop": 15,
        "marginRight": 0,
        "marginBottom": 15,
        "marginLeft": 0
    },
    "noUi-vertical noUi-handle": {
        "marginLeft": 5,
        "cursor": "ns-resize"
    },
    "noUi-horizontalnoUi-extended": {
        "paddingTop": 0,
        "paddingRight": 15,
        "paddingBottom": 0,
        "paddingLeft": 15
    },
    "noUi-horizontalnoUi-extended noUi-origin": {
        "right": -15
    },
    "noUi-background": {
        "height": 2,
        "marginTop": 20,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": 0
    },
    "noUi-origin[style^=\"left: 0\"] noUi-handle": {
        "backgroundColor": "#fff",
        "border": "2px solid #c8c8c8"
    },
    "noUi-origin[style^=\"left: 0\"] noUi-handlenoUi-active": {
        "borderWidth": 1
    },
    "noUi-vertical": {
        "height": "100%",
        "width": 2,
        "marginTop": 0,
        "marginRight": 15,
        "marginBottom": 0,
        "marginLeft": 15,
        "display": "inline-block"
    },
    "noUi-handlenoUi-active": {
        "transform": "scale3d(2, 2, 1)"
    },
    "[disabled]noUi-slider": {
        "opacity": 0.5
    },
    "[disabled] noUi-handle": {
        "cursor": "not-allowed"
    },
    "slider": {
        "background": "#c8c8c8"
    },
    "slidernoUi-connect": {
        "backgroundColor": "#9c27b0"
    },
    "slider noUi-handle": {
        "borderColor": "#9c27b0"
    },
    "sliderslider-info noUi-connect": {
        "backgroundColor": "#00bcd4"
    },
    "sliderslider-infonoUi-connect": {
        "backgroundColor": "#00bcd4"
    },
    "sliderslider-info noUi-handle": {
        "borderColor": "#00bcd4"
    },
    "sliderslider-success noUi-connect": {
        "backgroundColor": "#4caf50"
    },
    "sliderslider-successnoUi-connect": {
        "backgroundColor": "#4caf50"
    },
    "sliderslider-success noUi-handle": {
        "borderColor": "#4caf50"
    },
    "sliderslider-warning noUi-connect": {
        "backgroundColor": "#ff9800"
    },
    "sliderslider-warningnoUi-connect": {
        "backgroundColor": "#ff9800"
    },
    "sliderslider-warning noUi-handle": {
        "borderColor": "#ff9800"
    },
    "sliderslider-danger noUi-connect": {
        "backgroundColor": "#f44336"
    },
    "sliderslider-dangernoUi-connect": {
        "backgroundColor": "#f44336"
    },
    "sliderslider-danger noUi-handle": {
        "borderColor": "#f44336"
    },
    "animated": {
        "WebkitAnimationDuration": "1s",
        "animationDuration": "1s",
        "WebkitAnimationFillMode": "both",
        "animationFillMode": "both"
    },
    "animatedinfinite": {
        "WebkitAnimationIterationCount": "infinite",
        "animationIterationCount": "infinite"
    },
    "animatedhinge": {
        "WebkitAnimationDuration": "2s",
        "animationDuration": "2s"
    },
    "animatedbounceIn": {
        "WebkitAnimationDuration": ".75s",
        "animationDuration": ".75s"
    },
    "animatedbounceOut": {
        "WebkitAnimationDuration": ".75s",
        "animationDuration": ".75s"
    },
    "animatedflipOutX": {
        "WebkitAnimationDuration": ".75s",
        "animationDuration": ".75s"
    },
    "animatedflipOutY": {
        "WebkitAnimationDuration": ".75s",
        "animationDuration": ".75s"
    },
    "shake": {
        "WebkitAnimationName": "shake",
        "animationName": "shake"
    },
    "fadeInDown": {
        "WebkitAnimationName": "fadeInDown",
        "animationName": "fadeInDown"
    },
    "fadeOut": {
        "WebkitAnimationName": "fadeOut",
        "animationName": "fadeOut"
    },
    "fadeOutDown": {
        "WebkitAnimationName": "fadeOutDown",
        "animationName": "fadeOutDown"
    },
    "fadeOutUp": {
        "WebkitAnimationName": "fadeOutUp",
        "animationName": "fadeOutUp"
    },
    "h1": {
        "fontSize": 3.8,
        "lineHeight": 1.5,
        "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
        "fontWeight": "300"
    },
    "h2": {
        "fontSize": 2.6,
        "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
        "fontWeight": "300",
        "lineHeight": 1.5
    },
    "h3": {
        "fontSize": 1.825,
        "lineHeight": 1.5,
        "marginTop": 20,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0,
        "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
        "fontWeight": "300"
    },
    "h4": {
        "fontSize": 1.3,
        "lineHeight": 1.5,
        "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
        "fontWeight": "300"
    },
    "h5": {
        "fontSize": 1.25,
        "lineHeight": 1.5,
        "marginBottom": 15,
        "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
        "fontWeight": "300"
    },
    "h6": {
        "fontSize": 1,
        "textTransform": "uppercase",
        "fontWeight": "300",
        "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
        "lineHeight": 1.5
    },
    "h2title": {
        "marginBottom": 30
    },
    "description": {
        "color": "#999999"
    },
    "card-description": {
        "color": "#999999"
    },
    "footer-big p": {
        "color": "#999999"
    },
    "text-warning": {
        "color": "#ff9800"
    },
    "text-primary": {
        "color": "#9c27b0"
    },
    "text-danger": {
        "color": "#f44336"
    },
    "text-success": {
        "color": "#4caf50"
    },
    "text-info": {
        "color": "#00bcd4"
    },
    "text-rose": {
        "color": "#e91e63"
    },
    "text-gray": {
        "color": "#999999"
    },
    "wrapper": {
        "position": "relative",
        "top": 0,
        "height": 100 * vh
    },
    "sidebar": {
        "position": "absolute",
        "top": 0,
        "bottom": 0,
        "left": 0,
        "zIndex": 1,
        "boxShadow": "0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
        "WebkitTransitionProperty": "top,bottom",
        "transitionProperty": "top,bottom",
        "WebkitTransitionDuration": ".2s,.2s",
        "transitionDuration": ".2s,.2s",
        "WebkitTransitionTimingFunction": "linear,linear",
        "transitionTimingFunction": "linear,linear",
        "WebkitOverflowScrolling": "touch"
    },
    "off-canvas-sidebar": {
        "position": "absolute",
        "top": 0,
        "bottom": 0,
        "left": 0,
        "zIndex": 1,
        "boxShadow": "0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
    },
    "sidebar sidebar-wrapper": {
        "position": "relative",
        "height": "calc(100vh - 75px)",
        "overflow": "auto",
        "width": 260,
        "zIndex": 4
    },
    "off-canvas-sidebar sidebar-wrapper": {
        "position": "relative",
        "height": "calc(100vh - 75px)",
        "overflow": "auto",
        "width": 260,
        "zIndex": 4
    },
    "sidebar logo-tim": {
        "borderRadius": "50%",
        "border": "1px solid #333",
        "display": "block",
        "height": 61,
        "width": 61,
        "float": "left",
        "overflow": "hidden"
    },
    "off-canvas-sidebar logo-tim": {
        "borderRadius": "50%",
        "border": "1px solid #333",
        "display": "block",
        "height": 61,
        "width": 61,
        "float": "left",
        "overflow": "hidden"
    },
    "sidebar logo-tim img": {
        "width": 60,
        "height": 60
    },
    "off-canvas-sidebar logo-tim img": {
        "width": 60,
        "height": 60
    },
    "sidebar nav": {
        "marginTop": 20
    },
    "off-canvas-sidebar nav": {
        "marginTop": 20
    },
    "sidebar nav li > a": {
        "marginTop": 10,
        "marginRight": 15,
        "marginBottom": 10,
        "marginLeft": 15,
        "borderRadius": 3,
        "color": "#3C4858",
        "WebkitTransition": "all 300ms linear",
        "MozTransition": "all 300ms linear",
        "OTransition": "all 300ms linear",
        "MsTransition": "all 300ms linear",
        "transition": "all 300ms linear"
    },
    "off-canvas-sidebar nav li > a": {
        "marginTop": 10,
        "marginRight": 15,
        "marginBottom": 10,
        "marginLeft": 15,
        "borderRadius": 3,
        "color": "#3C4858",
        "WebkitTransition": "all 300ms linear",
        "MozTransition": "all 300ms linear",
        "OTransition": "all 300ms linear",
        "MsTransition": "all 300ms linear",
        "transition": "all 300ms linear"
    },
    "sidebar nav li:hover > a": {
        "background": "rgba(200, 200, 200, 0.2)",
        "color": "#3C4858"
    },
    "off-canvas-sidebar nav li:hover > a": {
        "background": "rgba(200, 200, 200, 0.2)",
        "color": "#3C4858"
    },
    "sidebar nav liactive > a": {
        "color": "#FFFFFF"
    },
    "off-canvas-sidebar nav liactive > a": {
        "color": "#FFFFFF"
    },
    "sidebar nav liactive > a i": {
        "color": "#FFFFFF"
    },
    "off-canvas-sidebar nav liactive > a i": {
        "color": "#FFFFFF"
    },
    "sidebar nav p": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "lineHeight": 30,
        "fontSize": 14
    },
    "off-canvas-sidebar nav p": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "lineHeight": 30,
        "fontSize": 14
    },
    "sidebar nav i": {
        "fontSize": 24,
        "float": "left",
        "marginRight": 15,
        "lineHeight": 30,
        "width": 30,
        "textAlign": "center",
        "color": "#a9afbb"
    },
    "off-canvas-sidebar nav i": {
        "fontSize": 24,
        "float": "left",
        "marginRight": 15,
        "lineHeight": 30,
        "width": 30,
        "textAlign": "center",
        "color": "#a9afbb"
    },
    "sidebar sidebar-background": {
        "position": "absolute",
        "zIndex": 1,
        "height": "100%",
        "width": "100%",
        "display": "block",
        "top": 0,
        "left": 0,
        "backgroundSize": "cover",
        "backgroundPosition": "center center"
    },
    "off-canvas-sidebar sidebar-background": {
        "position": "absolute",
        "zIndex": 1,
        "height": "100%",
        "width": "100%",
        "display": "block",
        "top": 0,
        "left": 0,
        "backgroundSize": "cover",
        "backgroundPosition": "center center"
    },
    "sidebar sidebar-background:after": {
        "position": "absolute",
        "zIndex": 3,
        "width": "100%",
        "height": "100%",
        "content": "",
        "display": "block",
        "background": "#FFFFFF",
        "opacity": 0.93
    },
    "off-canvas-sidebar sidebar-background:after": {
        "position": "absolute",
        "zIndex": 3,
        "width": "100%",
        "height": "100%",
        "content": "",
        "display": "block",
        "background": "#FFFFFF",
        "opacity": 0.93
    },
    "sidebar logo": {
        "position": "relative",
        "paddingTop": 15,
        "paddingRight": 15,
        "paddingBottom": 15,
        "paddingLeft": 15,
        "zIndex": 4
    },
    "off-canvas-sidebar logo": {
        "position": "relative",
        "paddingTop": 15,
        "paddingRight": 15,
        "paddingBottom": 15,
        "paddingLeft": 15,
        "zIndex": 4
    },
    "sidebar logo:after": {
        "content": "''",
        "position": "absolute",
        "bottom": 0,
        "right": "10%",
        "height": 1,
        "width": "80%",
        "backgroundColor": "rgba(180, 180, 180, 0.3)"
    },
    "off-canvas-sidebar logo:after": {
        "content": "''",
        "position": "absolute",
        "bottom": 0,
        "right": "10%",
        "height": 1,
        "width": "80%",
        "backgroundColor": "rgba(180, 180, 180, 0.3)"
    },
    "sidebar logo p": {
        "float": "left",
        "fontSize": 20,
        "marginTop": 10,
        "marginRight": 10,
        "marginBottom": 10,
        "marginLeft": 10,
        "color": "#FFFFFF",
        "lineHeight": 20,
        "fontFamily": "\"Helvetica Neue\", Helvetica, Arial, sans-serif"
    },
    "off-canvas-sidebar logo p": {
        "float": "left",
        "fontSize": 20,
        "marginTop": 10,
        "marginRight": 10,
        "marginBottom": 10,
        "marginLeft": 10,
        "color": "#FFFFFF",
        "lineHeight": 20,
        "fontFamily": "\"Helvetica Neue\", Helvetica, Arial, sans-serif"
    },
    "sidebar logo simple-text": {
        "textTransform": "uppercase",
        "paddingTop": 5,
        "paddingRight": 0,
        "paddingBottom": 5,
        "paddingLeft": 0,
        "display": "block",
        "fontSize": 18,
        "color": "#3C4858",
        "textAlign": "center",
        "fontWeight": "400",
        "lineHeight": 30
    },
    "off-canvas-sidebar logo simple-text": {
        "textTransform": "uppercase",
        "paddingTop": 5,
        "paddingRight": 0,
        "paddingBottom": 5,
        "paddingLeft": 0,
        "display": "block",
        "fontSize": 18,
        "color": "#3C4858",
        "textAlign": "center",
        "fontWeight": "400",
        "lineHeight": 30
    },
    "sidebar:after": {
        "display": "block",
        "content": "",
        "position": "absolute",
        "width": "100%",
        "height": "100%",
        "top": 0,
        "left": 0,
        "zIndex": 3,
        "opacity": 1
    },
    "sidebar:before": {
        "display": "block",
        "content": "",
        "position": "absolute",
        "width": "100%",
        "height": "100%",
        "top": 0,
        "left": 0,
        "zIndex": 2,
        "opacity": 0.33
    },
    "off-canvas-sidebar:after": {
        "display": "block",
        "content": "",
        "position": "absolute",
        "width": "100%",
        "height": "100%",
        "top": 0,
        "left": 0,
        "zIndex": 3,
        "opacity": 1
    },
    "off-canvas-sidebar:before": {
        "display": "block",
        "content": "",
        "position": "absolute",
        "width": "100%",
        "height": "100%",
        "top": 0,
        "left": 0,
        "zIndex": 2,
        "opacity": 0.33
    },
    "sidebar[data-image]:after": {
        "opacity": 0.77
    },
    "sidebarhas-image:after": {
        "opacity": 0.77
    },
    "off-canvas-sidebar[data-image]:after": {
        "opacity": 0.77
    },
    "off-canvas-sidebarhas-image:after": {
        "opacity": 0.77
    },
    "sidebar[data-color=\"blue\"] nav liactive a": {
        "backgroundColor": "#00bcd4",
        "boxShadow": "0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2)"
    },
    "off-canvas-sidebar[data-color=\"blue\"] nav liactive a": {
        "backgroundColor": "#00bcd4",
        "boxShadow": "0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2)"
    },
    "sidebar[data-color=\"green\"] nav liactive a": {
        "backgroundColor": "#4caf50",
        "boxShadow": "0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2)"
    },
    "off-canvas-sidebar[data-color=\"green\"] nav liactive a": {
        "backgroundColor": "#4caf50",
        "boxShadow": "0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2)"
    },
    "sidebar[data-color=\"orange\"] nav liactive a": {
        "backgroundColor": "#ff9800",
        "boxShadow": "0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2)"
    },
    "off-canvas-sidebar[data-color=\"orange\"] nav liactive a": {
        "backgroundColor": "#ff9800",
        "boxShadow": "0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2)"
    },
    "sidebar[data-color=\"red\"] nav liactive a": {
        "backgroundColor": "#f44336",
        "boxShadow": "0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2)"
    },
    "off-canvas-sidebar[data-color=\"red\"] nav liactive a": {
        "backgroundColor": "#f44336",
        "boxShadow": "0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2)"
    },
    "sidebar[data-color=\"purple\"] nav liactive a": {
        "backgroundColor": "#2d6cdf",
        "boxShadow": "0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2)"
    },
    "off-canvas-sidebar[data-color=\"purple\"] nav liactive a": {
        "backgroundColor": "#2d6cdf",
        "boxShadow": "0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2)"
    },
    "off-canvas-sidebar nav > li > a": {
        "color": "#FFFFFF"
    },
    "off-canvas-sidebar nav > li > a:hover": {
        "color": "#FFFFFF"
    },
    "off-canvas-sidebar nav > li > a:focus": {
        "background": "rgba(200, 200, 200, 0.2)"
    },
    "main-panel": {
        "position": "relative",
        "zIndex": 2,
        "float": "right",
        "overflow": "auto",
        "width": "calc(100% - 260px)",
        "minHeight": "100%",
        "WebkitTransform": "translate3d(0px, 0, 0)",
        "MozTransform": "translate3d(0px, 0, 0)",
        "OTransform": "translate3d(0px, 0, 0)",
        "MsTransform": "translate3d(0px, 0, 0)",
        "transform": "translate3d(0px, 0, 0)",
        "WebkitTransition": "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)",
        "MozTransition": "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)",
        "OTransition": "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)",
        "MsTransition": "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)",
        "transition": "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)",
        "maxHeight": "100%",
        "height": "100%",
        "WebkitTransitionProperty": "top,bottom",
        "transitionProperty": "top,bottom",
        "WebkitTransitionDuration": ".2s,.2s",
        "transitionDuration": ".2s,.2s",
        "WebkitTransitionTimingFunction": "linear,linear",
        "transitionTimingFunction": "linear,linear",
        "WebkitOverflowScrolling": "touch"
    },
    "main-panel > content": {
        "marginTop": 70,
        "paddingTop": 30,
        "paddingRight": 15,
        "paddingBottom": 30,
        "paddingLeft": 15,
        "minHeight": "calc(100% - 123px)"
    },
    "main-panel > footer": {
        "borderTop": "1px solid #e7e7e7"
    },
    "main-panel > navbar": {
        "marginBottom": 0
    },
    "btn": {
        "border": "none",
        "borderRadius": 3,
        "position": "relative",
        "paddingTop": 12,
        "paddingRight": 30,
        "paddingBottom": 12,
        "paddingLeft": 30,
        "marginTop": 10,
        "marginRight": 1,
        "marginBottom": 10,
        "marginLeft": 1,
        "fontSize": 12,
        "fontWeight": "400",
        "textTransform": "uppercase",
        "letterSpacing": 0,
        "willChange": "box-shadow, transform",
        "transition": "box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
        "boxShadow": "0 2px 2px 0 rgba(153, 153, 153, 0.14), 0 3px 1px -2px rgba(153, 153, 153, 0.2), 0 1px 5px 0 rgba(153, 153, 153, 0.12)",
        "backgroundColor": "#999999",
        "color": "#FFFFFF"
    },
    "navbar navbar-nav > li > abtn": {
        "border": "none",
        "borderRadius": 3,
        "position": "relative",
        "paddingTop": 12,
        "paddingRight": 30,
        "paddingBottom": 12,
        "paddingLeft": 30,
        "marginTop": 2,
        "marginRight": 1,
        "marginBottom": 2,
        "marginLeft": 1,
        "fontSize": 12,
        "fontWeight": "400",
        "textTransform": "uppercase",
        "letterSpacing": 0,
        "willChange": "box-shadow, transform",
        "transition": "box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
        "boxShadow": "0 2px 2px 0 rgba(153, 153, 153, 0.14), 0 3px 1px -2px rgba(153, 153, 153, 0.2), 0 1px 5px 0 rgba(153, 153, 153, 0.12)",
        "backgroundColor": "#999999",
        "color": "#FFFFFF"
    },
    "btn::-moz-focus-inner": {
        "border": 0
    },
    "navbar navbar-nav > li > abtn::-moz-focus-inner": {
        "border": 0
    },
    "btnbtn-default": {
        "boxShadow": "0 2px 2px 0 rgba(153, 153, 153, 0.14), 0 3px 1px -2px rgba(153, 153, 153, 0.2), 0 1px 5px 0 rgba(153, 153, 153, 0.12)",
        "backgroundColor": "#999999",
        "color": "#FFFFFF"
    },
    "navbar navbar-nav > li > abtnbtn-default": {
        "boxShadow": "0 2px 2px 0 rgba(153, 153, 153, 0.14), 0 3px 1px -2px rgba(153, 153, 153, 0.2), 0 1px 5px 0 rgba(153, 153, 153, 0.12)",
        "backgroundColor": "#999999",
        "color": "#FFFFFF"
    },
    "btn:hover": {
        "backgroundColor": "#999999",
        "color": "#FFFFFF",
        "boxShadow": "0 14px 26px -12px rgba(153, 153, 153, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(153, 153, 153, 0.2)"
    },
    "btn:focus": {
        "backgroundColor": "#999999",
        "color": "#FFFFFF",
        "boxShadow": "0 14px 26px -12px rgba(153, 153, 153, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(153, 153, 153, 0.2)",
        "outline": 0
    },
    "btn:active": {
        "backgroundColor": "#999999",
        "color": "#FFFFFF",
        "boxShadow": "0 14px 26px -12px rgba(153, 153, 153, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(153, 153, 153, 0.2)",
        "outline": 0
    },
    "btnactive": {
        "backgroundColor": "#999999",
        "color": "#FFFFFF"
    },
    "btn:active:focus": {
        "backgroundColor": "#999999",
        "color": "#FFFFFF",
        "outline": 0
    },
    "btn:active:hover": {
        "backgroundColor": "#999999",
        "color": "#FFFFFF"
    },
    "btnactive:focus": {
        "backgroundColor": "#999999",
        "color": "#FFFFFF"
    },
    "btnactive:hover": {
        "backgroundColor": "#999999",
        "color": "#FFFFFF"
    },
    "open > btndropdown-toggle": {
        "backgroundColor": "#999999",
        "color": "#FFFFFF"
    },
    "open > btndropdown-toggle:focus": {
        "backgroundColor": "#999999",
        "color": "#FFFFFF"
    },
    "open > btndropdown-toggle:hover": {
        "backgroundColor": "#999999",
        "color": "#FFFFFF"
    },
    "btnbtn-default:hover": {
        "backgroundColor": "#999999",
        "color": "#FFFFFF",
        "boxShadow": "0 14px 26px -12px rgba(153, 153, 153, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(153, 153, 153, 0.2)"
    },
    "btnbtn-default:focus": {
        "backgroundColor": "#999999",
        "color": "#FFFFFF",
        "boxShadow": "0 14px 26px -12px rgba(153, 153, 153, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(153, 153, 153, 0.2)"
    },
    "btnbtn-default:active": {
        "backgroundColor": "#999999",
        "color": "#FFFFFF",
        "boxShadow": "0 14px 26px -12px rgba(153, 153, 153, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(153, 153, 153, 0.2)"
    },
    "btnbtn-defaultactive": {
        "backgroundColor": "#999999",
        "color": "#FFFFFF"
    },
    "btnbtn-default:active:focus": {
        "backgroundColor": "#999999",
        "color": "#FFFFFF"
    },
    "btnbtn-default:active:hover": {
        "backgroundColor": "#999999",
        "color": "#FFFFFF"
    },
    "btnbtn-defaultactive:focus": {
        "backgroundColor": "#999999",
        "color": "#FFFFFF"
    },
    "btnbtn-defaultactive:hover": {
        "backgroundColor": "#999999",
        "color": "#FFFFFF"
    },
    "open > btnbtn-defaultdropdown-toggle": {
        "backgroundColor": "#999999",
        "color": "#FFFFFF"
    },
    "open > btnbtn-defaultdropdown-toggle:focus": {
        "backgroundColor": "#999999",
        "color": "#FFFFFF"
    },
    "open > btnbtn-defaultdropdown-toggle:hover": {
        "backgroundColor": "#999999",
        "color": "#FFFFFF"
    },
    "navbar navbar-nav > li > abtn:hover": {
        "backgroundColor": "#999999",
        "color": "#FFFFFF",
        "boxShadow": "0 14px 26px -12px rgba(153, 153, 153, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(153, 153, 153, 0.2)"
    },
    "navbar navbar-nav > li > abtn:focus": {
        "backgroundColor": "#999999",
        "color": "#FFFFFF",
        "boxShadow": "0 14px 26px -12px rgba(153, 153, 153, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(153, 153, 153, 0.2)",
        "outline": 0
    },
    "navbar navbar-nav > li > abtn:active": {
        "backgroundColor": "#999999",
        "color": "#FFFFFF",
        "boxShadow": "0 14px 26px -12px rgba(153, 153, 153, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(153, 153, 153, 0.2)",
        "outline": 0
    },
    "navbar navbar-nav > li > abtnactive": {
        "backgroundColor": "#999999",
        "color": "#FFFFFF"
    },
    "navbar navbar-nav > li > abtn:active:focus": {
        "backgroundColor": "#999999",
        "color": "#FFFFFF",
        "outline": 0
    },
    "navbar navbar-nav > li > abtn:active:hover": {
        "backgroundColor": "#999999",
        "color": "#FFFFFF"
    },
    "navbar navbar-nav > li > abtnactive:focus": {
        "backgroundColor": "#999999",
        "color": "#FFFFFF"
    },
    "navbar navbar-nav > li > abtnactive:hover": {
        "backgroundColor": "#999999",
        "color": "#FFFFFF"
    },
    "open >    navbar navbar-nav > li > abtndropdown-toggle": {
        "backgroundColor": "#999999",
        "color": "#FFFFFF"
    },
    "open >    navbar navbar-nav > li > abtndropdown-toggle:focus": {
        "backgroundColor": "#999999",
        "color": "#FFFFFF"
    },
    "open >    navbar navbar-nav > li > abtndropdown-toggle:hover": {
        "backgroundColor": "#999999",
        "color": "#FFFFFF"
    },
    "navbar navbar-nav > li > abtnbtn-default:hover": {
        "backgroundColor": "#999999",
        "color": "#FFFFFF",
        "boxShadow": "0 14px 26px -12px rgba(153, 153, 153, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(153, 153, 153, 0.2)"
    },
    "navbar navbar-nav > li > abtnbtn-default:focus": {
        "backgroundColor": "#999999",
        "color": "#FFFFFF",
        "boxShadow": "0 14px 26px -12px rgba(153, 153, 153, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(153, 153, 153, 0.2)"
    },
    "navbar navbar-nav > li > abtnbtn-default:active": {
        "backgroundColor": "#999999",
        "color": "#FFFFFF",
        "boxShadow": "0 14px 26px -12px rgba(153, 153, 153, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(153, 153, 153, 0.2)"
    },
    "navbar navbar-nav > li > abtnbtn-defaultactive": {
        "backgroundColor": "#999999",
        "color": "#FFFFFF"
    },
    "navbar navbar-nav > li > abtnbtn-default:active:focus": {
        "backgroundColor": "#999999",
        "color": "#FFFFFF"
    },
    "navbar navbar-nav > li > abtnbtn-default:active:hover": {
        "backgroundColor": "#999999",
        "color": "#FFFFFF"
    },
    "navbar navbar-nav > li > abtnbtn-defaultactive:focus": {
        "backgroundColor": "#999999",
        "color": "#FFFFFF"
    },
    "navbar navbar-nav > li > abtnbtn-defaultactive:hover": {
        "backgroundColor": "#999999",
        "color": "#FFFFFF"
    },
    "open >    navbar navbar-nav > li > abtnbtn-defaultdropdown-toggle": {
        "backgroundColor": "#999999",
        "color": "#FFFFFF"
    },
    "open >    navbar navbar-nav > li > abtnbtn-defaultdropdown-toggle:focus": {
        "backgroundColor": "#999999",
        "color": "#FFFFFF"
    },
    "open >    navbar navbar-nav > li > abtnbtn-defaultdropdown-toggle:hover": {
        "backgroundColor": "#999999",
        "color": "#FFFFFF"
    },
    "btndisabled": {
        "boxShadow": "none"
    },
    "btndisabled:hover": {
        "boxShadow": "none"
    },
    "btndisabled:focus": {
        "boxShadow": "none"
    },
    "btndisabledfocus": {
        "boxShadow": "none"
    },
    "btndisabled:active": {
        "boxShadow": "none"
    },
    "btndisabledactive": {
        "boxShadow": "none"
    },
    "btn:disabled": {
        "boxShadow": "none"
    },
    "btn:disabled:hover": {
        "boxShadow": "none"
    },
    "btn:disabled:focus": {
        "boxShadow": "none"
    },
    "btn:disabledfocus": {
        "boxShadow": "none"
    },
    "btn:disabled:active": {
        "boxShadow": "none"
    },
    "btn:disabledactive": {
        "boxShadow": "none"
    },
    "btn[disabled]": {
        "boxShadow": "none"
    },
    "btn[disabled]:hover": {
        "boxShadow": "none"
    },
    "btn[disabled]:focus": {
        "boxShadow": "none"
    },
    "btn[disabled]focus": {
        "boxShadow": "none"
    },
    "btn[disabled]:active": {
        "boxShadow": "none"
    },
    "btn[disabled]active": {
        "boxShadow": "none"
    },
    "fieldset[disabled] btn": {
        "boxShadow": "none"
    },
    "fieldset[disabled] btn:hover": {
        "boxShadow": "none"
    },
    "fieldset[disabled] btn:focus": {
        "boxShadow": "none"
    },
    "fieldset[disabled] btnfocus": {
        "boxShadow": "none"
    },
    "fieldset[disabled] btn:active": {
        "boxShadow": "none"
    },
    "fieldset[disabled] btnactive": {
        "boxShadow": "none"
    },
    "btnbtn-defaultdisabled": {
        "boxShadow": "none"
    },
    "btnbtn-defaultdisabled:hover": {
        "boxShadow": "none"
    },
    "btnbtn-defaultdisabled:focus": {
        "boxShadow": "none"
    },
    "btnbtn-defaultdisabledfocus": {
        "boxShadow": "none"
    },
    "btnbtn-defaultdisabled:active": {
        "boxShadow": "none"
    },
    "btnbtn-defaultdisabledactive": {
        "boxShadow": "none"
    },
    "btnbtn-default:disabled": {
        "boxShadow": "none"
    },
    "btnbtn-default:disabled:hover": {
        "boxShadow": "none"
    },
    "btnbtn-default:disabled:focus": {
        "boxShadow": "none"
    },
    "btnbtn-default:disabledfocus": {
        "boxShadow": "none"
    },
    "btnbtn-default:disabled:active": {
        "boxShadow": "none"
    },
    "btnbtn-default:disabledactive": {
        "boxShadow": "none"
    },
    "btnbtn-default[disabled]": {
        "boxShadow": "none"
    },
    "btnbtn-default[disabled]:hover": {
        "boxShadow": "none"
    },
    "btnbtn-default[disabled]:focus": {
        "boxShadow": "none"
    },
    "btnbtn-default[disabled]focus": {
        "boxShadow": "none"
    },
    "btnbtn-default[disabled]:active": {
        "boxShadow": "none"
    },
    "btnbtn-default[disabled]active": {
        "boxShadow": "none"
    },
    "fieldset[disabled] btnbtn-default": {
        "boxShadow": "none"
    },
    "fieldset[disabled] btnbtn-default:hover": {
        "boxShadow": "none"
    },
    "fieldset[disabled] btnbtn-default:focus": {
        "boxShadow": "none"
    },
    "fieldset[disabled] btnbtn-defaultfocus": {
        "boxShadow": "none"
    },
    "fieldset[disabled] btnbtn-default:active": {
        "boxShadow": "none"
    },
    "fieldset[disabled] btnbtn-defaultactive": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtndisabled": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtndisabled:hover": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtndisabled:focus": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtndisabledfocus": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtndisabled:active": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtndisabledactive": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtn:disabled": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtn:disabled:hover": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtn:disabled:focus": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtn:disabledfocus": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtn:disabled:active": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtn:disabledactive": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtn[disabled]": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtn[disabled]:hover": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtn[disabled]:focus": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtn[disabled]focus": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtn[disabled]:active": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtn[disabled]active": {
        "boxShadow": "none"
    },
    "fieldset[disabled]    navbar navbar-nav > li > abtn": {
        "boxShadow": "none"
    },
    "fieldset[disabled]    navbar navbar-nav > li > abtn:hover": {
        "boxShadow": "none"
    },
    "fieldset[disabled]    navbar navbar-nav > li > abtn:focus": {
        "boxShadow": "none"
    },
    "fieldset[disabled]    navbar navbar-nav > li > abtnfocus": {
        "boxShadow": "none"
    },
    "fieldset[disabled]    navbar navbar-nav > li > abtn:active": {
        "boxShadow": "none"
    },
    "fieldset[disabled]    navbar navbar-nav > li > abtnactive": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-defaultdisabled": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-defaultdisabled:hover": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-defaultdisabled:focus": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-defaultdisabledfocus": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-defaultdisabled:active": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-defaultdisabledactive": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-default:disabled": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-default:disabled:hover": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-default:disabled:focus": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-default:disabledfocus": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-default:disabled:active": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-default:disabledactive": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-default[disabled]": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-default[disabled]:hover": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-default[disabled]:focus": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-default[disabled]focus": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-default[disabled]:active": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-default[disabled]active": {
        "boxShadow": "none"
    },
    "fieldset[disabled]    navbar navbar-nav > li > abtnbtn-default": {
        "boxShadow": "none"
    },
    "fieldset[disabled]    navbar navbar-nav > li > abtnbtn-default:hover": {
        "boxShadow": "none"
    },
    "fieldset[disabled]    navbar navbar-nav > li > abtnbtn-default:focus": {
        "boxShadow": "none"
    },
    "fieldset[disabled]    navbar navbar-nav > li > abtnbtn-defaultfocus": {
        "boxShadow": "none"
    },
    "fieldset[disabled]    navbar navbar-nav > li > abtnbtn-default:active": {
        "boxShadow": "none"
    },
    "fieldset[disabled]    navbar navbar-nav > li > abtnbtn-defaultactive": {
        "boxShadow": "none"
    },
    "btnbtn-simple": {
        "backgroundColor": "transparent",
        "color": "#999999",
        "boxShadow": "none"
    },
    "btnbtn-defaultbtn-simple": {
        "backgroundColor": "transparent",
        "color": "#999999",
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-simple": {
        "backgroundColor": "transparent",
        "color": "#999999",
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-defaultbtn-simple": {
        "backgroundColor": "transparent",
        "color": "#999999",
        "boxShadow": "none"
    },
    "btnbtn-simple:hover": {
        "backgroundColor": "transparent",
        "color": "#999999"
    },
    "btnbtn-simple:focus": {
        "backgroundColor": "transparent",
        "color": "#999999"
    },
    "btnbtn-simple:active": {
        "backgroundColor": "transparent",
        "color": "#999999"
    },
    "btnbtn-defaultbtn-simple:hover": {
        "backgroundColor": "transparent",
        "color": "#999999"
    },
    "btnbtn-defaultbtn-simple:focus": {
        "backgroundColor": "transparent",
        "color": "#999999"
    },
    "btnbtn-defaultbtn-simple:active": {
        "backgroundColor": "transparent",
        "color": "#999999"
    },
    "navbar navbar-nav > li > abtnbtn-simple:hover": {
        "backgroundColor": "transparent",
        "color": "#999999"
    },
    "navbar navbar-nav > li > abtnbtn-simple:focus": {
        "backgroundColor": "transparent",
        "color": "#999999"
    },
    "navbar navbar-nav > li > abtnbtn-simple:active": {
        "backgroundColor": "transparent",
        "color": "#999999"
    },
    "navbar navbar-nav > li > abtnbtn-defaultbtn-simple:hover": {
        "backgroundColor": "transparent",
        "color": "#999999"
    },
    "navbar navbar-nav > li > abtnbtn-defaultbtn-simple:focus": {
        "backgroundColor": "transparent",
        "color": "#999999"
    },
    "navbar navbar-nav > li > abtnbtn-defaultbtn-simple:active": {
        "backgroundColor": "transparent",
        "color": "#999999"
    },
    "btnbtn-primary": {
        "boxShadow": "0 2px 2px 0 rgba(156, 39, 176, 0.14), 0 3px 1px -2px rgba(156, 39, 176, 0.2), 0 1px 5px 0 rgba(156, 39, 176, 0.12)",
        "backgroundColor": "#9c27b0",
        "color": "#FFFFFF"
    },
    "navbar navbar-nav > li > abtnbtn-primary": {
        "boxShadow": "0 2px 2px 0 rgba(156, 39, 176, 0.14), 0 3px 1px -2px rgba(156, 39, 176, 0.2), 0 1px 5px 0 rgba(156, 39, 176, 0.12)",
        "backgroundColor": "#9c27b0",
        "color": "#FFFFFF"
    },
    "btnbtn-primary:hover": {
        "backgroundColor": "#9c27b0",
        "color": "#FFFFFF",
        "boxShadow": "0 14px 26px -12px rgba(156, 39, 176, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(156, 39, 176, 0.2)"
    },
    "btnbtn-primary:focus": {
        "backgroundColor": "#9c27b0",
        "color": "#FFFFFF",
        "boxShadow": "0 14px 26px -12px rgba(156, 39, 176, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(156, 39, 176, 0.2)"
    },
    "btnbtn-primary:active": {
        "backgroundColor": "#9c27b0",
        "color": "#FFFFFF",
        "boxShadow": "0 14px 26px -12px rgba(156, 39, 176, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(156, 39, 176, 0.2)"
    },
    "btnbtn-primaryactive": {
        "backgroundColor": "#9c27b0",
        "color": "#FFFFFF"
    },
    "btnbtn-primary:active:focus": {
        "backgroundColor": "#9c27b0",
        "color": "#FFFFFF"
    },
    "btnbtn-primary:active:hover": {
        "backgroundColor": "#9c27b0",
        "color": "#FFFFFF"
    },
    "btnbtn-primaryactive:focus": {
        "backgroundColor": "#9c27b0",
        "color": "#FFFFFF"
    },
    "btnbtn-primaryactive:hover": {
        "backgroundColor": "#9c27b0",
        "color": "#FFFFFF"
    },
    "open > btnbtn-primarydropdown-toggle": {
        "backgroundColor": "#9c27b0",
        "color": "#FFFFFF"
    },
    "open > btnbtn-primarydropdown-toggle:focus": {
        "backgroundColor": "#9c27b0",
        "color": "#FFFFFF"
    },
    "open > btnbtn-primarydropdown-toggle:hover": {
        "backgroundColor": "#9c27b0",
        "color": "#FFFFFF"
    },
    "navbar navbar-nav > li > abtnbtn-primary:hover": {
        "backgroundColor": "#9c27b0",
        "color": "#FFFFFF",
        "boxShadow": "0 14px 26px -12px rgba(156, 39, 176, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(156, 39, 176, 0.2)"
    },
    "navbar navbar-nav > li > abtnbtn-primary:focus": {
        "backgroundColor": "#9c27b0",
        "color": "#FFFFFF",
        "boxShadow": "0 14px 26px -12px rgba(156, 39, 176, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(156, 39, 176, 0.2)"
    },
    "navbar navbar-nav > li > abtnbtn-primary:active": {
        "backgroundColor": "#9c27b0",
        "color": "#FFFFFF",
        "boxShadow": "0 14px 26px -12px rgba(156, 39, 176, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(156, 39, 176, 0.2)"
    },
    "navbar navbar-nav > li > abtnbtn-primaryactive": {
        "backgroundColor": "#9c27b0",
        "color": "#FFFFFF"
    },
    "navbar navbar-nav > li > abtnbtn-primary:active:focus": {
        "backgroundColor": "#9c27b0",
        "color": "#FFFFFF"
    },
    "navbar navbar-nav > li > abtnbtn-primary:active:hover": {
        "backgroundColor": "#9c27b0",
        "color": "#FFFFFF"
    },
    "navbar navbar-nav > li > abtnbtn-primaryactive:focus": {
        "backgroundColor": "#9c27b0",
        "color": "#FFFFFF"
    },
    "navbar navbar-nav > li > abtnbtn-primaryactive:hover": {
        "backgroundColor": "#9c27b0",
        "color": "#FFFFFF"
    },
    "open >    navbar navbar-nav > li > abtnbtn-primarydropdown-toggle": {
        "backgroundColor": "#9c27b0",
        "color": "#FFFFFF"
    },
    "open >    navbar navbar-nav > li > abtnbtn-primarydropdown-toggle:focus": {
        "backgroundColor": "#9c27b0",
        "color": "#FFFFFF"
    },
    "open >    navbar navbar-nav > li > abtnbtn-primarydropdown-toggle:hover": {
        "backgroundColor": "#9c27b0",
        "color": "#FFFFFF"
    },
    "btnbtn-primarydisabled": {
        "boxShadow": "none"
    },
    "btnbtn-primarydisabled:hover": {
        "boxShadow": "none"
    },
    "btnbtn-primarydisabled:focus": {
        "boxShadow": "none"
    },
    "btnbtn-primarydisabledfocus": {
        "boxShadow": "none"
    },
    "btnbtn-primarydisabled:active": {
        "boxShadow": "none"
    },
    "btnbtn-primarydisabledactive": {
        "boxShadow": "none"
    },
    "btnbtn-primary:disabled": {
        "boxShadow": "none"
    },
    "btnbtn-primary:disabled:hover": {
        "boxShadow": "none"
    },
    "btnbtn-primary:disabled:focus": {
        "boxShadow": "none"
    },
    "btnbtn-primary:disabledfocus": {
        "boxShadow": "none"
    },
    "btnbtn-primary:disabled:active": {
        "boxShadow": "none"
    },
    "btnbtn-primary:disabledactive": {
        "boxShadow": "none"
    },
    "btnbtn-primary[disabled]": {
        "boxShadow": "none"
    },
    "btnbtn-primary[disabled]:hover": {
        "boxShadow": "none"
    },
    "btnbtn-primary[disabled]:focus": {
        "boxShadow": "none"
    },
    "btnbtn-primary[disabled]focus": {
        "boxShadow": "none"
    },
    "btnbtn-primary[disabled]:active": {
        "boxShadow": "none"
    },
    "btnbtn-primary[disabled]active": {
        "boxShadow": "none"
    },
    "fieldset[disabled] btnbtn-primary": {
        "boxShadow": "none"
    },
    "fieldset[disabled] btnbtn-primary:hover": {
        "boxShadow": "none"
    },
    "fieldset[disabled] btnbtn-primary:focus": {
        "boxShadow": "none"
    },
    "fieldset[disabled] btnbtn-primaryfocus": {
        "boxShadow": "none"
    },
    "fieldset[disabled] btnbtn-primary:active": {
        "boxShadow": "none"
    },
    "fieldset[disabled] btnbtn-primaryactive": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-primarydisabled": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-primarydisabled:hover": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-primarydisabled:focus": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-primarydisabledfocus": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-primarydisabled:active": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-primarydisabledactive": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-primary:disabled": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-primary:disabled:hover": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-primary:disabled:focus": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-primary:disabledfocus": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-primary:disabled:active": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-primary:disabledactive": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-primary[disabled]": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-primary[disabled]:hover": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-primary[disabled]:focus": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-primary[disabled]focus": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-primary[disabled]:active": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-primary[disabled]active": {
        "boxShadow": "none"
    },
    "fieldset[disabled]    navbar navbar-nav > li > abtnbtn-primary": {
        "boxShadow": "none"
    },
    "fieldset[disabled]    navbar navbar-nav > li > abtnbtn-primary:hover": {
        "boxShadow": "none"
    },
    "fieldset[disabled]    navbar navbar-nav > li > abtnbtn-primary:focus": {
        "boxShadow": "none"
    },
    "fieldset[disabled]    navbar navbar-nav > li > abtnbtn-primaryfocus": {
        "boxShadow": "none"
    },
    "fieldset[disabled]    navbar navbar-nav > li > abtnbtn-primary:active": {
        "boxShadow": "none"
    },
    "fieldset[disabled]    navbar navbar-nav > li > abtnbtn-primaryactive": {
        "boxShadow": "none"
    },
    "btnbtn-primarybtn-simple": {
        "backgroundColor": "transparent",
        "color": "#9c27b0",
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-primarybtn-simple": {
        "backgroundColor": "transparent",
        "color": "#9c27b0",
        "boxShadow": "none"
    },
    "btnbtn-primarybtn-simple:hover": {
        "backgroundColor": "transparent",
        "color": "#9c27b0"
    },
    "btnbtn-primarybtn-simple:focus": {
        "backgroundColor": "transparent",
        "color": "#9c27b0"
    },
    "btnbtn-primarybtn-simple:active": {
        "backgroundColor": "transparent",
        "color": "#9c27b0"
    },
    "navbar navbar-nav > li > abtnbtn-primarybtn-simple:hover": {
        "backgroundColor": "transparent",
        "color": "#9c27b0"
    },
    "navbar navbar-nav > li > abtnbtn-primarybtn-simple:focus": {
        "backgroundColor": "transparent",
        "color": "#9c27b0"
    },
    "navbar navbar-nav > li > abtnbtn-primarybtn-simple:active": {
        "backgroundColor": "transparent",
        "color": "#9c27b0"
    },
    "btnbtn-info": {
        "boxShadow": "0 2px 2px 0 rgba(0, 188, 212, 0.14), 0 3px 1px -2px rgba(0, 188, 212, 0.2), 0 1px 5px 0 rgba(0, 188, 212, 0.12)",
        "backgroundColor": "#00bcd4",
        "color": "#FFFFFF"
    },
    "navbar navbar-nav > li > abtnbtn-info": {
        "boxShadow": "0 2px 2px 0 rgba(0, 188, 212, 0.14), 0 3px 1px -2px rgba(0, 188, 212, 0.2), 0 1px 5px 0 rgba(0, 188, 212, 0.12)",
        "backgroundColor": "#00bcd4",
        "color": "#FFFFFF"
    },
    "btnbtn-info:hover": {
        "backgroundColor": "#00bcd4",
        "color": "#FFFFFF",
        "boxShadow": "0 14px 26px -12px rgba(0, 188, 212, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 188, 212, 0.2)"
    },
    "btnbtn-info:focus": {
        "backgroundColor": "#00bcd4",
        "color": "#FFFFFF",
        "boxShadow": "0 14px 26px -12px rgba(0, 188, 212, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 188, 212, 0.2)"
    },
    "btnbtn-info:active": {
        "backgroundColor": "#00bcd4",
        "color": "#FFFFFF",
        "boxShadow": "0 14px 26px -12px rgba(0, 188, 212, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 188, 212, 0.2)"
    },
    "btnbtn-infoactive": {
        "backgroundColor": "#00bcd4",
        "color": "#FFFFFF"
    },
    "btnbtn-info:active:focus": {
        "backgroundColor": "#00bcd4",
        "color": "#FFFFFF"
    },
    "btnbtn-info:active:hover": {
        "backgroundColor": "#00bcd4",
        "color": "#FFFFFF"
    },
    "btnbtn-infoactive:focus": {
        "backgroundColor": "#00bcd4",
        "color": "#FFFFFF"
    },
    "btnbtn-infoactive:hover": {
        "backgroundColor": "#00bcd4",
        "color": "#FFFFFF"
    },
    "open > btnbtn-infodropdown-toggle": {
        "backgroundColor": "#00bcd4",
        "color": "#FFFFFF"
    },
    "open > btnbtn-infodropdown-toggle:focus": {
        "backgroundColor": "#00bcd4",
        "color": "#FFFFFF"
    },
    "open > btnbtn-infodropdown-toggle:hover": {
        "backgroundColor": "#00bcd4",
        "color": "#FFFFFF"
    },
    "navbar navbar-nav > li > abtnbtn-info:hover": {
        "backgroundColor": "#00bcd4",
        "color": "#FFFFFF",
        "boxShadow": "0 14px 26px -12px rgba(0, 188, 212, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 188, 212, 0.2)"
    },
    "navbar navbar-nav > li > abtnbtn-info:focus": {
        "backgroundColor": "#00bcd4",
        "color": "#FFFFFF",
        "boxShadow": "0 14px 26px -12px rgba(0, 188, 212, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 188, 212, 0.2)"
    },
    "navbar navbar-nav > li > abtnbtn-info:active": {
        "backgroundColor": "#00bcd4",
        "color": "#FFFFFF",
        "boxShadow": "0 14px 26px -12px rgba(0, 188, 212, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 188, 212, 0.2)"
    },
    "navbar navbar-nav > li > abtnbtn-infoactive": {
        "backgroundColor": "#00bcd4",
        "color": "#FFFFFF"
    },
    "navbar navbar-nav > li > abtnbtn-info:active:focus": {
        "backgroundColor": "#00bcd4",
        "color": "#FFFFFF"
    },
    "navbar navbar-nav > li > abtnbtn-info:active:hover": {
        "backgroundColor": "#00bcd4",
        "color": "#FFFFFF"
    },
    "navbar navbar-nav > li > abtnbtn-infoactive:focus": {
        "backgroundColor": "#00bcd4",
        "color": "#FFFFFF"
    },
    "navbar navbar-nav > li > abtnbtn-infoactive:hover": {
        "backgroundColor": "#00bcd4",
        "color": "#FFFFFF"
    },
    "open >    navbar navbar-nav > li > abtnbtn-infodropdown-toggle": {
        "backgroundColor": "#00bcd4",
        "color": "#FFFFFF"
    },
    "open >    navbar navbar-nav > li > abtnbtn-infodropdown-toggle:focus": {
        "backgroundColor": "#00bcd4",
        "color": "#FFFFFF"
    },
    "open >    navbar navbar-nav > li > abtnbtn-infodropdown-toggle:hover": {
        "backgroundColor": "#00bcd4",
        "color": "#FFFFFF"
    },
    "btnbtn-infodisabled": {
        "boxShadow": "none"
    },
    "btnbtn-infodisabled:hover": {
        "boxShadow": "none"
    },
    "btnbtn-infodisabled:focus": {
        "boxShadow": "none"
    },
    "btnbtn-infodisabledfocus": {
        "boxShadow": "none"
    },
    "btnbtn-infodisabled:active": {
        "boxShadow": "none"
    },
    "btnbtn-infodisabledactive": {
        "boxShadow": "none"
    },
    "btnbtn-info:disabled": {
        "boxShadow": "none"
    },
    "btnbtn-info:disabled:hover": {
        "boxShadow": "none"
    },
    "btnbtn-info:disabled:focus": {
        "boxShadow": "none"
    },
    "btnbtn-info:disabledfocus": {
        "boxShadow": "none"
    },
    "btnbtn-info:disabled:active": {
        "boxShadow": "none"
    },
    "btnbtn-info:disabledactive": {
        "boxShadow": "none"
    },
    "btnbtn-info[disabled]": {
        "boxShadow": "none"
    },
    "btnbtn-info[disabled]:hover": {
        "boxShadow": "none"
    },
    "btnbtn-info[disabled]:focus": {
        "boxShadow": "none"
    },
    "btnbtn-info[disabled]focus": {
        "boxShadow": "none"
    },
    "btnbtn-info[disabled]:active": {
        "boxShadow": "none"
    },
    "btnbtn-info[disabled]active": {
        "boxShadow": "none"
    },
    "fieldset[disabled] btnbtn-info": {
        "boxShadow": "none"
    },
    "fieldset[disabled] btnbtn-info:hover": {
        "boxShadow": "none"
    },
    "fieldset[disabled] btnbtn-info:focus": {
        "boxShadow": "none"
    },
    "fieldset[disabled] btnbtn-infofocus": {
        "boxShadow": "none"
    },
    "fieldset[disabled] btnbtn-info:active": {
        "boxShadow": "none"
    },
    "fieldset[disabled] btnbtn-infoactive": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-infodisabled": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-infodisabled:hover": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-infodisabled:focus": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-infodisabledfocus": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-infodisabled:active": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-infodisabledactive": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-info:disabled": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-info:disabled:hover": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-info:disabled:focus": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-info:disabledfocus": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-info:disabled:active": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-info:disabledactive": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-info[disabled]": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-info[disabled]:hover": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-info[disabled]:focus": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-info[disabled]focus": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-info[disabled]:active": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-info[disabled]active": {
        "boxShadow": "none"
    },
    "fieldset[disabled]    navbar navbar-nav > li > abtnbtn-info": {
        "boxShadow": "none"
    },
    "fieldset[disabled]    navbar navbar-nav > li > abtnbtn-info:hover": {
        "boxShadow": "none"
    },
    "fieldset[disabled]    navbar navbar-nav > li > abtnbtn-info:focus": {
        "boxShadow": "none"
    },
    "fieldset[disabled]    navbar navbar-nav > li > abtnbtn-infofocus": {
        "boxShadow": "none"
    },
    "fieldset[disabled]    navbar navbar-nav > li > abtnbtn-info:active": {
        "boxShadow": "none"
    },
    "fieldset[disabled]    navbar navbar-nav > li > abtnbtn-infoactive": {
        "boxShadow": "none"
    },
    "btnbtn-infobtn-simple": {
        "backgroundColor": "transparent",
        "color": "#00bcd4",
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-infobtn-simple": {
        "backgroundColor": "transparent",
        "color": "#00bcd4",
        "boxShadow": "none"
    },
    "btnbtn-infobtn-simple:hover": {
        "backgroundColor": "transparent",
        "color": "#00bcd4"
    },
    "btnbtn-infobtn-simple:focus": {
        "backgroundColor": "transparent",
        "color": "#00bcd4"
    },
    "btnbtn-infobtn-simple:active": {
        "backgroundColor": "transparent",
        "color": "#00bcd4"
    },
    "navbar navbar-nav > li > abtnbtn-infobtn-simple:hover": {
        "backgroundColor": "transparent",
        "color": "#00bcd4"
    },
    "navbar navbar-nav > li > abtnbtn-infobtn-simple:focus": {
        "backgroundColor": "transparent",
        "color": "#00bcd4"
    },
    "navbar navbar-nav > li > abtnbtn-infobtn-simple:active": {
        "backgroundColor": "transparent",
        "color": "#00bcd4"
    },
    "btnbtn-success": {
        "boxShadow": "0 2px 2px 0 rgba(76, 175, 80, 0.14), 0 3px 1px -2px rgba(76, 175, 80, 0.2), 0 1px 5px 0 rgba(76, 175, 80, 0.12)",
        "backgroundColor": "#4caf50",
        "color": "#FFFFFF"
    },
    "navbar navbar-nav > li > abtnbtn-success": {
        "boxShadow": "0 2px 2px 0 rgba(76, 175, 80, 0.14), 0 3px 1px -2px rgba(76, 175, 80, 0.2), 0 1px 5px 0 rgba(76, 175, 80, 0.12)",
        "backgroundColor": "#4caf50",
        "color": "#FFFFFF"
    },
    "btnbtn-success:hover": {
        "backgroundColor": "#4caf50",
        "color": "#FFFFFF",
        "boxShadow": "0 14px 26px -12px rgba(76, 175, 80, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(76, 175, 80, 0.2)"
    },
    "btnbtn-success:focus": {
        "backgroundColor": "#4caf50",
        "color": "#FFFFFF",
        "boxShadow": "0 14px 26px -12px rgba(76, 175, 80, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(76, 175, 80, 0.2)"
    },
    "btnbtn-success:active": {
        "backgroundColor": "#4caf50",
        "color": "#FFFFFF",
        "boxShadow": "0 14px 26px -12px rgba(76, 175, 80, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(76, 175, 80, 0.2)"
    },
    "btnbtn-successactive": {
        "backgroundColor": "#4caf50",
        "color": "#FFFFFF"
    },
    "btnbtn-success:active:focus": {
        "backgroundColor": "#4caf50",
        "color": "#FFFFFF"
    },
    "btnbtn-success:active:hover": {
        "backgroundColor": "#4caf50",
        "color": "#FFFFFF"
    },
    "btnbtn-successactive:focus": {
        "backgroundColor": "#4caf50",
        "color": "#FFFFFF"
    },
    "btnbtn-successactive:hover": {
        "backgroundColor": "#4caf50",
        "color": "#FFFFFF"
    },
    "open > btnbtn-successdropdown-toggle": {
        "backgroundColor": "#4caf50",
        "color": "#FFFFFF"
    },
    "open > btnbtn-successdropdown-toggle:focus": {
        "backgroundColor": "#4caf50",
        "color": "#FFFFFF"
    },
    "open > btnbtn-successdropdown-toggle:hover": {
        "backgroundColor": "#4caf50",
        "color": "#FFFFFF"
    },
    "navbar navbar-nav > li > abtnbtn-success:hover": {
        "backgroundColor": "#4caf50",
        "color": "#FFFFFF",
        "boxShadow": "0 14px 26px -12px rgba(76, 175, 80, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(76, 175, 80, 0.2)"
    },
    "navbar navbar-nav > li > abtnbtn-success:focus": {
        "backgroundColor": "#4caf50",
        "color": "#FFFFFF",
        "boxShadow": "0 14px 26px -12px rgba(76, 175, 80, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(76, 175, 80, 0.2)"
    },
    "navbar navbar-nav > li > abtnbtn-success:active": {
        "backgroundColor": "#4caf50",
        "color": "#FFFFFF",
        "boxShadow": "0 14px 26px -12px rgba(76, 175, 80, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(76, 175, 80, 0.2)"
    },
    "navbar navbar-nav > li > abtnbtn-successactive": {
        "backgroundColor": "#4caf50",
        "color": "#FFFFFF"
    },
    "navbar navbar-nav > li > abtnbtn-success:active:focus": {
        "backgroundColor": "#4caf50",
        "color": "#FFFFFF"
    },
    "navbar navbar-nav > li > abtnbtn-success:active:hover": {
        "backgroundColor": "#4caf50",
        "color": "#FFFFFF"
    },
    "navbar navbar-nav > li > abtnbtn-successactive:focus": {
        "backgroundColor": "#4caf50",
        "color": "#FFFFFF"
    },
    "navbar navbar-nav > li > abtnbtn-successactive:hover": {
        "backgroundColor": "#4caf50",
        "color": "#FFFFFF"
    },
    "open >    navbar navbar-nav > li > abtnbtn-successdropdown-toggle": {
        "backgroundColor": "#4caf50",
        "color": "#FFFFFF"
    },
    "open >    navbar navbar-nav > li > abtnbtn-successdropdown-toggle:focus": {
        "backgroundColor": "#4caf50",
        "color": "#FFFFFF"
    },
    "open >    navbar navbar-nav > li > abtnbtn-successdropdown-toggle:hover": {
        "backgroundColor": "#4caf50",
        "color": "#FFFFFF"
    },
    "btnbtn-successdisabled": {
        "boxShadow": "none"
    },
    "btnbtn-successdisabled:hover": {
        "boxShadow": "none"
    },
    "btnbtn-successdisabled:focus": {
        "boxShadow": "none"
    },
    "btnbtn-successdisabledfocus": {
        "boxShadow": "none"
    },
    "btnbtn-successdisabled:active": {
        "boxShadow": "none"
    },
    "btnbtn-successdisabledactive": {
        "boxShadow": "none"
    },
    "btnbtn-success:disabled": {
        "boxShadow": "none"
    },
    "btnbtn-success:disabled:hover": {
        "boxShadow": "none"
    },
    "btnbtn-success:disabled:focus": {
        "boxShadow": "none"
    },
    "btnbtn-success:disabledfocus": {
        "boxShadow": "none"
    },
    "btnbtn-success:disabled:active": {
        "boxShadow": "none"
    },
    "btnbtn-success:disabledactive": {
        "boxShadow": "none"
    },
    "btnbtn-success[disabled]": {
        "boxShadow": "none"
    },
    "btnbtn-success[disabled]:hover": {
        "boxShadow": "none"
    },
    "btnbtn-success[disabled]:focus": {
        "boxShadow": "none"
    },
    "btnbtn-success[disabled]focus": {
        "boxShadow": "none"
    },
    "btnbtn-success[disabled]:active": {
        "boxShadow": "none"
    },
    "btnbtn-success[disabled]active": {
        "boxShadow": "none"
    },
    "fieldset[disabled] btnbtn-success": {
        "boxShadow": "none"
    },
    "fieldset[disabled] btnbtn-success:hover": {
        "boxShadow": "none"
    },
    "fieldset[disabled] btnbtn-success:focus": {
        "boxShadow": "none"
    },
    "fieldset[disabled] btnbtn-successfocus": {
        "boxShadow": "none"
    },
    "fieldset[disabled] btnbtn-success:active": {
        "boxShadow": "none"
    },
    "fieldset[disabled] btnbtn-successactive": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-successdisabled": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-successdisabled:hover": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-successdisabled:focus": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-successdisabledfocus": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-successdisabled:active": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-successdisabledactive": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-success:disabled": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-success:disabled:hover": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-success:disabled:focus": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-success:disabledfocus": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-success:disabled:active": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-success:disabledactive": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-success[disabled]": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-success[disabled]:hover": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-success[disabled]:focus": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-success[disabled]focus": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-success[disabled]:active": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-success[disabled]active": {
        "boxShadow": "none"
    },
    "fieldset[disabled]    navbar navbar-nav > li > abtnbtn-success": {
        "boxShadow": "none"
    },
    "fieldset[disabled]    navbar navbar-nav > li > abtnbtn-success:hover": {
        "boxShadow": "none"
    },
    "fieldset[disabled]    navbar navbar-nav > li > abtnbtn-success:focus": {
        "boxShadow": "none"
    },
    "fieldset[disabled]    navbar navbar-nav > li > abtnbtn-successfocus": {
        "boxShadow": "none"
    },
    "fieldset[disabled]    navbar navbar-nav > li > abtnbtn-success:active": {
        "boxShadow": "none"
    },
    "fieldset[disabled]    navbar navbar-nav > li > abtnbtn-successactive": {
        "boxShadow": "none"
    },
    "btnbtn-successbtn-simple": {
        "backgroundColor": "transparent",
        "color": "#4caf50",
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-successbtn-simple": {
        "backgroundColor": "transparent",
        "color": "#4caf50",
        "boxShadow": "none"
    },
    "btnbtn-successbtn-simple:hover": {
        "backgroundColor": "transparent",
        "color": "#4caf50"
    },
    "btnbtn-successbtn-simple:focus": {
        "backgroundColor": "transparent",
        "color": "#4caf50"
    },
    "btnbtn-successbtn-simple:active": {
        "backgroundColor": "transparent",
        "color": "#4caf50"
    },
    "navbar navbar-nav > li > abtnbtn-successbtn-simple:hover": {
        "backgroundColor": "transparent",
        "color": "#4caf50"
    },
    "navbar navbar-nav > li > abtnbtn-successbtn-simple:focus": {
        "backgroundColor": "transparent",
        "color": "#4caf50"
    },
    "navbar navbar-nav > li > abtnbtn-successbtn-simple:active": {
        "backgroundColor": "transparent",
        "color": "#4caf50"
    },
    "btnbtn-warning": {
        "boxShadow": "0 2px 2px 0 rgba(255, 152, 0, 0.14), 0 3px 1px -2px rgba(255, 152, 0, 0.2), 0 1px 5px 0 rgba(255, 152, 0, 0.12)",
        "backgroundColor": "#ff9800",
        "color": "#FFFFFF"
    },
    "navbar navbar-nav > li > abtnbtn-warning": {
        "boxShadow": "0 2px 2px 0 rgba(255, 152, 0, 0.14), 0 3px 1px -2px rgba(255, 152, 0, 0.2), 0 1px 5px 0 rgba(255, 152, 0, 0.12)",
        "backgroundColor": "#ff9800",
        "color": "#FFFFFF"
    },
    "btnbtn-warning:hover": {
        "backgroundColor": "#ff9800",
        "color": "#FFFFFF",
        "boxShadow": "0 14px 26px -12px rgba(255, 152, 0, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(255, 152, 0, 0.2)"
    },
    "btnbtn-warning:focus": {
        "backgroundColor": "#ff9800",
        "color": "#FFFFFF",
        "boxShadow": "0 14px 26px -12px rgba(255, 152, 0, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(255, 152, 0, 0.2)"
    },
    "btnbtn-warning:active": {
        "backgroundColor": "#ff9800",
        "color": "#FFFFFF",
        "boxShadow": "0 14px 26px -12px rgba(255, 152, 0, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(255, 152, 0, 0.2)"
    },
    "btnbtn-warningactive": {
        "backgroundColor": "#ff9800",
        "color": "#FFFFFF"
    },
    "btnbtn-warning:active:focus": {
        "backgroundColor": "#ff9800",
        "color": "#FFFFFF"
    },
    "btnbtn-warning:active:hover": {
        "backgroundColor": "#ff9800",
        "color": "#FFFFFF"
    },
    "btnbtn-warningactive:focus": {
        "backgroundColor": "#ff9800",
        "color": "#FFFFFF"
    },
    "btnbtn-warningactive:hover": {
        "backgroundColor": "#ff9800",
        "color": "#FFFFFF"
    },
    "open > btnbtn-warningdropdown-toggle": {
        "backgroundColor": "#ff9800",
        "color": "#FFFFFF"
    },
    "open > btnbtn-warningdropdown-toggle:focus": {
        "backgroundColor": "#ff9800",
        "color": "#FFFFFF"
    },
    "open > btnbtn-warningdropdown-toggle:hover": {
        "backgroundColor": "#ff9800",
        "color": "#FFFFFF"
    },
    "navbar navbar-nav > li > abtnbtn-warning:hover": {
        "backgroundColor": "#ff9800",
        "color": "#FFFFFF",
        "boxShadow": "0 14px 26px -12px rgba(255, 152, 0, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(255, 152, 0, 0.2)"
    },
    "navbar navbar-nav > li > abtnbtn-warning:focus": {
        "backgroundColor": "#ff9800",
        "color": "#FFFFFF",
        "boxShadow": "0 14px 26px -12px rgba(255, 152, 0, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(255, 152, 0, 0.2)"
    },
    "navbar navbar-nav > li > abtnbtn-warning:active": {
        "backgroundColor": "#ff9800",
        "color": "#FFFFFF",
        "boxShadow": "0 14px 26px -12px rgba(255, 152, 0, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(255, 152, 0, 0.2)"
    },
    "navbar navbar-nav > li > abtnbtn-warningactive": {
        "backgroundColor": "#ff9800",
        "color": "#FFFFFF"
    },
    "navbar navbar-nav > li > abtnbtn-warning:active:focus": {
        "backgroundColor": "#ff9800",
        "color": "#FFFFFF"
    },
    "navbar navbar-nav > li > abtnbtn-warning:active:hover": {
        "backgroundColor": "#ff9800",
        "color": "#FFFFFF"
    },
    "navbar navbar-nav > li > abtnbtn-warningactive:focus": {
        "backgroundColor": "#ff9800",
        "color": "#FFFFFF"
    },
    "navbar navbar-nav > li > abtnbtn-warningactive:hover": {
        "backgroundColor": "#ff9800",
        "color": "#FFFFFF"
    },
    "open >    navbar navbar-nav > li > abtnbtn-warningdropdown-toggle": {
        "backgroundColor": "#ff9800",
        "color": "#FFFFFF"
    },
    "open >    navbar navbar-nav > li > abtnbtn-warningdropdown-toggle:focus": {
        "backgroundColor": "#ff9800",
        "color": "#FFFFFF"
    },
    "open >    navbar navbar-nav > li > abtnbtn-warningdropdown-toggle:hover": {
        "backgroundColor": "#ff9800",
        "color": "#FFFFFF"
    },
    "btnbtn-warningdisabled": {
        "boxShadow": "none"
    },
    "btnbtn-warningdisabled:hover": {
        "boxShadow": "none"
    },
    "btnbtn-warningdisabled:focus": {
        "boxShadow": "none"
    },
    "btnbtn-warningdisabledfocus": {
        "boxShadow": "none"
    },
    "btnbtn-warningdisabled:active": {
        "boxShadow": "none"
    },
    "btnbtn-warningdisabledactive": {
        "boxShadow": "none"
    },
    "btnbtn-warning:disabled": {
        "boxShadow": "none"
    },
    "btnbtn-warning:disabled:hover": {
        "boxShadow": "none"
    },
    "btnbtn-warning:disabled:focus": {
        "boxShadow": "none"
    },
    "btnbtn-warning:disabledfocus": {
        "boxShadow": "none"
    },
    "btnbtn-warning:disabled:active": {
        "boxShadow": "none"
    },
    "btnbtn-warning:disabledactive": {
        "boxShadow": "none"
    },
    "btnbtn-warning[disabled]": {
        "boxShadow": "none"
    },
    "btnbtn-warning[disabled]:hover": {
        "boxShadow": "none"
    },
    "btnbtn-warning[disabled]:focus": {
        "boxShadow": "none"
    },
    "btnbtn-warning[disabled]focus": {
        "boxShadow": "none"
    },
    "btnbtn-warning[disabled]:active": {
        "boxShadow": "none"
    },
    "btnbtn-warning[disabled]active": {
        "boxShadow": "none"
    },
    "fieldset[disabled] btnbtn-warning": {
        "boxShadow": "none"
    },
    "fieldset[disabled] btnbtn-warning:hover": {
        "boxShadow": "none"
    },
    "fieldset[disabled] btnbtn-warning:focus": {
        "boxShadow": "none"
    },
    "fieldset[disabled] btnbtn-warningfocus": {
        "boxShadow": "none"
    },
    "fieldset[disabled] btnbtn-warning:active": {
        "boxShadow": "none"
    },
    "fieldset[disabled] btnbtn-warningactive": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-warningdisabled": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-warningdisabled:hover": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-warningdisabled:focus": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-warningdisabledfocus": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-warningdisabled:active": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-warningdisabledactive": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-warning:disabled": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-warning:disabled:hover": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-warning:disabled:focus": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-warning:disabledfocus": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-warning:disabled:active": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-warning:disabledactive": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-warning[disabled]": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-warning[disabled]:hover": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-warning[disabled]:focus": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-warning[disabled]focus": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-warning[disabled]:active": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-warning[disabled]active": {
        "boxShadow": "none"
    },
    "fieldset[disabled]    navbar navbar-nav > li > abtnbtn-warning": {
        "boxShadow": "none"
    },
    "fieldset[disabled]    navbar navbar-nav > li > abtnbtn-warning:hover": {
        "boxShadow": "none"
    },
    "fieldset[disabled]    navbar navbar-nav > li > abtnbtn-warning:focus": {
        "boxShadow": "none"
    },
    "fieldset[disabled]    navbar navbar-nav > li > abtnbtn-warningfocus": {
        "boxShadow": "none"
    },
    "fieldset[disabled]    navbar navbar-nav > li > abtnbtn-warning:active": {
        "boxShadow": "none"
    },
    "fieldset[disabled]    navbar navbar-nav > li > abtnbtn-warningactive": {
        "boxShadow": "none"
    },
    "btnbtn-warningbtn-simple": {
        "backgroundColor": "transparent",
        "color": "#ff9800",
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-warningbtn-simple": {
        "backgroundColor": "transparent",
        "color": "#ff9800",
        "boxShadow": "none"
    },
    "btnbtn-warningbtn-simple:hover": {
        "backgroundColor": "transparent",
        "color": "#ff9800"
    },
    "btnbtn-warningbtn-simple:focus": {
        "backgroundColor": "transparent",
        "color": "#ff9800"
    },
    "btnbtn-warningbtn-simple:active": {
        "backgroundColor": "transparent",
        "color": "#ff9800"
    },
    "navbar navbar-nav > li > abtnbtn-warningbtn-simple:hover": {
        "backgroundColor": "transparent",
        "color": "#ff9800"
    },
    "navbar navbar-nav > li > abtnbtn-warningbtn-simple:focus": {
        "backgroundColor": "transparent",
        "color": "#ff9800"
    },
    "navbar navbar-nav > li > abtnbtn-warningbtn-simple:active": {
        "backgroundColor": "transparent",
        "color": "#ff9800"
    },
    "btnbtn-danger": {
        "boxShadow": "0 2px 2px 0 rgba(244, 67, 54, 0.14), 0 3px 1px -2px rgba(244, 67, 54, 0.2), 0 1px 5px 0 rgba(244, 67, 54, 0.12)",
        "backgroundColor": "#f44336",
        "color": "#FFFFFF"
    },
    "navbar navbar-nav > li > abtnbtn-danger": {
        "boxShadow": "0 2px 2px 0 rgba(244, 67, 54, 0.14), 0 3px 1px -2px rgba(244, 67, 54, 0.2), 0 1px 5px 0 rgba(244, 67, 54, 0.12)",
        "backgroundColor": "#f44336",
        "color": "#FFFFFF"
    },
    "btnbtn-danger:hover": {
        "backgroundColor": "#f44336",
        "color": "#FFFFFF",
        "boxShadow": "0 14px 26px -12px rgba(244, 67, 54, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(244, 67, 54, 0.2)"
    },
    "btnbtn-danger:focus": {
        "backgroundColor": "#f44336",
        "color": "#FFFFFF",
        "boxShadow": "0 14px 26px -12px rgba(244, 67, 54, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(244, 67, 54, 0.2)"
    },
    "btnbtn-danger:active": {
        "backgroundColor": "#f44336",
        "color": "#FFFFFF",
        "boxShadow": "0 14px 26px -12px rgba(244, 67, 54, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(244, 67, 54, 0.2)"
    },
    "btnbtn-dangeractive": {
        "backgroundColor": "#f44336",
        "color": "#FFFFFF"
    },
    "btnbtn-danger:active:focus": {
        "backgroundColor": "#f44336",
        "color": "#FFFFFF"
    },
    "btnbtn-danger:active:hover": {
        "backgroundColor": "#f44336",
        "color": "#FFFFFF"
    },
    "btnbtn-dangeractive:focus": {
        "backgroundColor": "#f44336",
        "color": "#FFFFFF"
    },
    "btnbtn-dangeractive:hover": {
        "backgroundColor": "#f44336",
        "color": "#FFFFFF"
    },
    "open > btnbtn-dangerdropdown-toggle": {
        "backgroundColor": "#f44336",
        "color": "#FFFFFF"
    },
    "open > btnbtn-dangerdropdown-toggle:focus": {
        "backgroundColor": "#f44336",
        "color": "#FFFFFF"
    },
    "open > btnbtn-dangerdropdown-toggle:hover": {
        "backgroundColor": "#f44336",
        "color": "#FFFFFF"
    },
    "navbar navbar-nav > li > abtnbtn-danger:hover": {
        "backgroundColor": "#f44336",
        "color": "#FFFFFF",
        "boxShadow": "0 14px 26px -12px rgba(244, 67, 54, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(244, 67, 54, 0.2)"
    },
    "navbar navbar-nav > li > abtnbtn-danger:focus": {
        "backgroundColor": "#f44336",
        "color": "#FFFFFF",
        "boxShadow": "0 14px 26px -12px rgba(244, 67, 54, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(244, 67, 54, 0.2)"
    },
    "navbar navbar-nav > li > abtnbtn-danger:active": {
        "backgroundColor": "#f44336",
        "color": "#FFFFFF",
        "boxShadow": "0 14px 26px -12px rgba(244, 67, 54, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(244, 67, 54, 0.2)"
    },
    "navbar navbar-nav > li > abtnbtn-dangeractive": {
        "backgroundColor": "#f44336",
        "color": "#FFFFFF"
    },
    "navbar navbar-nav > li > abtnbtn-danger:active:focus": {
        "backgroundColor": "#f44336",
        "color": "#FFFFFF"
    },
    "navbar navbar-nav > li > abtnbtn-danger:active:hover": {
        "backgroundColor": "#f44336",
        "color": "#FFFFFF"
    },
    "navbar navbar-nav > li > abtnbtn-dangeractive:focus": {
        "backgroundColor": "#f44336",
        "color": "#FFFFFF"
    },
    "navbar navbar-nav > li > abtnbtn-dangeractive:hover": {
        "backgroundColor": "#f44336",
        "color": "#FFFFFF"
    },
    "open >    navbar navbar-nav > li > abtnbtn-dangerdropdown-toggle": {
        "backgroundColor": "#f44336",
        "color": "#FFFFFF"
    },
    "open >    navbar navbar-nav > li > abtnbtn-dangerdropdown-toggle:focus": {
        "backgroundColor": "#f44336",
        "color": "#FFFFFF"
    },
    "open >    navbar navbar-nav > li > abtnbtn-dangerdropdown-toggle:hover": {
        "backgroundColor": "#f44336",
        "color": "#FFFFFF"
    },
    "btnbtn-dangerdisabled": {
        "boxShadow": "none"
    },
    "btnbtn-dangerdisabled:hover": {
        "boxShadow": "none"
    },
    "btnbtn-dangerdisabled:focus": {
        "boxShadow": "none"
    },
    "btnbtn-dangerdisabledfocus": {
        "boxShadow": "none"
    },
    "btnbtn-dangerdisabled:active": {
        "boxShadow": "none"
    },
    "btnbtn-dangerdisabledactive": {
        "boxShadow": "none"
    },
    "btnbtn-danger:disabled": {
        "boxShadow": "none"
    },
    "btnbtn-danger:disabled:hover": {
        "boxShadow": "none"
    },
    "btnbtn-danger:disabled:focus": {
        "boxShadow": "none"
    },
    "btnbtn-danger:disabledfocus": {
        "boxShadow": "none"
    },
    "btnbtn-danger:disabled:active": {
        "boxShadow": "none"
    },
    "btnbtn-danger:disabledactive": {
        "boxShadow": "none"
    },
    "btnbtn-danger[disabled]": {
        "boxShadow": "none"
    },
    "btnbtn-danger[disabled]:hover": {
        "boxShadow": "none"
    },
    "btnbtn-danger[disabled]:focus": {
        "boxShadow": "none"
    },
    "btnbtn-danger[disabled]focus": {
        "boxShadow": "none"
    },
    "btnbtn-danger[disabled]:active": {
        "boxShadow": "none"
    },
    "btnbtn-danger[disabled]active": {
        "boxShadow": "none"
    },
    "fieldset[disabled] btnbtn-danger": {
        "boxShadow": "none"
    },
    "fieldset[disabled] btnbtn-danger:hover": {
        "boxShadow": "none"
    },
    "fieldset[disabled] btnbtn-danger:focus": {
        "boxShadow": "none"
    },
    "fieldset[disabled] btnbtn-dangerfocus": {
        "boxShadow": "none"
    },
    "fieldset[disabled] btnbtn-danger:active": {
        "boxShadow": "none"
    },
    "fieldset[disabled] btnbtn-dangeractive": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-dangerdisabled": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-dangerdisabled:hover": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-dangerdisabled:focus": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-dangerdisabledfocus": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-dangerdisabled:active": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-dangerdisabledactive": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-danger:disabled": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-danger:disabled:hover": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-danger:disabled:focus": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-danger:disabledfocus": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-danger:disabled:active": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-danger:disabledactive": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-danger[disabled]": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-danger[disabled]:hover": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-danger[disabled]:focus": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-danger[disabled]focus": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-danger[disabled]:active": {
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-danger[disabled]active": {
        "boxShadow": "none"
    },
    "fieldset[disabled]    navbar navbar-nav > li > abtnbtn-danger": {
        "boxShadow": "none"
    },
    "fieldset[disabled]    navbar navbar-nav > li > abtnbtn-danger:hover": {
        "boxShadow": "none"
    },
    "fieldset[disabled]    navbar navbar-nav > li > abtnbtn-danger:focus": {
        "boxShadow": "none"
    },
    "fieldset[disabled]    navbar navbar-nav > li > abtnbtn-dangerfocus": {
        "boxShadow": "none"
    },
    "fieldset[disabled]    navbar navbar-nav > li > abtnbtn-danger:active": {
        "boxShadow": "none"
    },
    "fieldset[disabled]    navbar navbar-nav > li > abtnbtn-dangeractive": {
        "boxShadow": "none"
    },
    "btnbtn-dangerbtn-simple": {
        "backgroundColor": "transparent",
        "color": "#f44336",
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-dangerbtn-simple": {
        "backgroundColor": "transparent",
        "color": "#f44336",
        "boxShadow": "none"
    },
    "btnbtn-dangerbtn-simple:hover": {
        "backgroundColor": "transparent",
        "color": "#f44336"
    },
    "btnbtn-dangerbtn-simple:focus": {
        "backgroundColor": "transparent",
        "color": "#f44336"
    },
    "btnbtn-dangerbtn-simple:active": {
        "backgroundColor": "transparent",
        "color": "#f44336"
    },
    "navbar navbar-nav > li > abtnbtn-dangerbtn-simple:hover": {
        "backgroundColor": "transparent",
        "color": "#f44336"
    },
    "navbar navbar-nav > li > abtnbtn-dangerbtn-simple:focus": {
        "backgroundColor": "transparent",
        "color": "#f44336"
    },
    "navbar navbar-nav > li > abtnbtn-dangerbtn-simple:active": {
        "backgroundColor": "transparent",
        "color": "#f44336"
    },
    "btnbtn-white": {
        "backgroundColor": "#FFFFFF",
        "color": "#999999"
    },
    "btnbtn-white:focus": {
        "backgroundColor": "#FFFFFF",
        "color": "#999999"
    },
    "btnbtn-white:hover": {
        "backgroundColor": "#FFFFFF",
        "color": "#999999"
    },
    "navbar navbar-nav > li > abtnbtn-white": {
        "backgroundColor": "#FFFFFF",
        "color": "#999999"
    },
    "navbar navbar-nav > li > abtnbtn-white:focus": {
        "backgroundColor": "#FFFFFF",
        "color": "#999999"
    },
    "navbar navbar-nav > li > abtnbtn-white:hover": {
        "backgroundColor": "#FFFFFF",
        "color": "#999999"
    },
    "btnbtn-whitebtn-simple": {
        "color": "#FFFFFF",
        "background": "transparent",
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-whitebtn-simple": {
        "color": "#FFFFFF",
        "background": "transparent",
        "boxShadow": "none"
    },
    "btnbtn-facebook": {
        "backgroundColor": "#3b5998",
        "color": "#fff",
        "boxShadow": "0 2px 2px 0 rgba(59, 89, 152, 0.14), 0 3px 1px -2px rgba(59, 89, 152, 0.2), 0 1px 5px 0 rgba(59, 89, 152, 0.12)"
    },
    "navbar navbar-nav > li > abtnbtn-facebook": {
        "backgroundColor": "#3b5998",
        "color": "#fff",
        "boxShadow": "0 2px 2px 0 rgba(59, 89, 152, 0.14), 0 3px 1px -2px rgba(59, 89, 152, 0.2), 0 1px 5px 0 rgba(59, 89, 152, 0.12)"
    },
    "btnbtn-facebook:focus": {
        "backgroundColor": "#3b5998",
        "color": "#fff",
        "boxShadow": "0 14px 26px -12px rgba(59, 89, 152, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(59, 89, 152, 0.2)"
    },
    "btnbtn-facebook:active": {
        "backgroundColor": "#3b5998",
        "color": "#fff",
        "boxShadow": "0 14px 26px -12px rgba(59, 89, 152, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(59, 89, 152, 0.2)"
    },
    "btnbtn-facebook:hover": {
        "backgroundColor": "#3b5998",
        "color": "#fff",
        "boxShadow": "0 14px 26px -12px rgba(59, 89, 152, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(59, 89, 152, 0.2)"
    },
    "navbar navbar-nav > li > abtnbtn-facebook:focus": {
        "backgroundColor": "#3b5998",
        "color": "#fff",
        "boxShadow": "0 14px 26px -12px rgba(59, 89, 152, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(59, 89, 152, 0.2)"
    },
    "navbar navbar-nav > li > abtnbtn-facebook:active": {
        "backgroundColor": "#3b5998",
        "color": "#fff",
        "boxShadow": "0 14px 26px -12px rgba(59, 89, 152, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(59, 89, 152, 0.2)"
    },
    "navbar navbar-nav > li > abtnbtn-facebook:hover": {
        "backgroundColor": "#3b5998",
        "color": "#fff",
        "boxShadow": "0 14px 26px -12px rgba(59, 89, 152, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(59, 89, 152, 0.2)"
    },
    "btnbtn-facebookbtn-simple": {
        "color": "#3b5998",
        "backgroundColor": "transparent",
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-facebookbtn-simple": {
        "color": "#3b5998",
        "backgroundColor": "transparent",
        "boxShadow": "none"
    },
    "btnbtn-twitter": {
        "backgroundColor": "#55acee",
        "color": "#fff",
        "boxShadow": "0 2px 2px 0 rgba(85, 172, 238, 0.14), 0 3px 1px -2px rgba(85, 172, 238, 0.2), 0 1px 5px 0 rgba(85, 172, 238, 0.12)"
    },
    "navbar navbar-nav > li > abtnbtn-twitter": {
        "backgroundColor": "#55acee",
        "color": "#fff",
        "boxShadow": "0 2px 2px 0 rgba(85, 172, 238, 0.14), 0 3px 1px -2px rgba(85, 172, 238, 0.2), 0 1px 5px 0 rgba(85, 172, 238, 0.12)"
    },
    "btnbtn-twitter:focus": {
        "backgroundColor": "#55acee",
        "color": "#fff",
        "boxShadow": "0 14px 26px -12px rgba(85, 172, 238, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(85, 172, 238, 0.2)"
    },
    "btnbtn-twitter:active": {
        "backgroundColor": "#55acee",
        "color": "#fff",
        "boxShadow": "0 14px 26px -12px rgba(85, 172, 238, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(85, 172, 238, 0.2)"
    },
    "btnbtn-twitter:hover": {
        "backgroundColor": "#55acee",
        "color": "#fff",
        "boxShadow": "0 14px 26px -12px rgba(85, 172, 238, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(85, 172, 238, 0.2)"
    },
    "navbar navbar-nav > li > abtnbtn-twitter:focus": {
        "backgroundColor": "#55acee",
        "color": "#fff",
        "boxShadow": "0 14px 26px -12px rgba(85, 172, 238, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(85, 172, 238, 0.2)"
    },
    "navbar navbar-nav > li > abtnbtn-twitter:active": {
        "backgroundColor": "#55acee",
        "color": "#fff",
        "boxShadow": "0 14px 26px -12px rgba(85, 172, 238, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(85, 172, 238, 0.2)"
    },
    "navbar navbar-nav > li > abtnbtn-twitter:hover": {
        "backgroundColor": "#55acee",
        "color": "#fff",
        "boxShadow": "0 14px 26px -12px rgba(85, 172, 238, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(85, 172, 238, 0.2)"
    },
    "btnbtn-twitterbtn-simple": {
        "color": "#55acee",
        "backgroundColor": "transparent",
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-twitterbtn-simple": {
        "color": "#55acee",
        "backgroundColor": "transparent",
        "boxShadow": "none"
    },
    "btnbtn-pinterest": {
        "backgroundColor": "#cc2127",
        "color": "#fff",
        "boxShadow": "0 2px 2px 0 rgba(204, 33, 39, 0.14), 0 3px 1px -2px rgba(204, 33, 39, 0.2), 0 1px 5px 0 rgba(204, 33, 39, 0.12)"
    },
    "navbar navbar-nav > li > abtnbtn-pinterest": {
        "backgroundColor": "#cc2127",
        "color": "#fff",
        "boxShadow": "0 2px 2px 0 rgba(204, 33, 39, 0.14), 0 3px 1px -2px rgba(204, 33, 39, 0.2), 0 1px 5px 0 rgba(204, 33, 39, 0.12)"
    },
    "btnbtn-pinterest:focus": {
        "backgroundColor": "#cc2127",
        "color": "#fff",
        "boxShadow": "0 14px 26px -12px rgba(204, 33, 39, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(204, 33, 39, 0.2)"
    },
    "btnbtn-pinterest:active": {
        "backgroundColor": "#cc2127",
        "color": "#fff",
        "boxShadow": "0 14px 26px -12px rgba(204, 33, 39, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(204, 33, 39, 0.2)"
    },
    "btnbtn-pinterest:hover": {
        "backgroundColor": "#cc2127",
        "color": "#fff",
        "boxShadow": "0 14px 26px -12px rgba(204, 33, 39, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(204, 33, 39, 0.2)"
    },
    "navbar navbar-nav > li > abtnbtn-pinterest:focus": {
        "backgroundColor": "#cc2127",
        "color": "#fff",
        "boxShadow": "0 14px 26px -12px rgba(204, 33, 39, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(204, 33, 39, 0.2)"
    },
    "navbar navbar-nav > li > abtnbtn-pinterest:active": {
        "backgroundColor": "#cc2127",
        "color": "#fff",
        "boxShadow": "0 14px 26px -12px rgba(204, 33, 39, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(204, 33, 39, 0.2)"
    },
    "navbar navbar-nav > li > abtnbtn-pinterest:hover": {
        "backgroundColor": "#cc2127",
        "color": "#fff",
        "boxShadow": "0 14px 26px -12px rgba(204, 33, 39, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(204, 33, 39, 0.2)"
    },
    "btnbtn-pinterestbtn-simple": {
        "color": "#cc2127",
        "backgroundColor": "transparent",
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-pinterestbtn-simple": {
        "color": "#cc2127",
        "backgroundColor": "transparent",
        "boxShadow": "none"
    },
    "btnbtn-google": {
        "backgroundColor": "#dd4b39",
        "color": "#fff",
        "boxShadow": "0 2px 2px 0 rgba(221, 75, 57, 0.14), 0 3px 1px -2px rgba(221, 75, 57, 0.2), 0 1px 5px 0 rgba(221, 75, 57, 0.12)"
    },
    "navbar navbar-nav > li > abtnbtn-google": {
        "backgroundColor": "#dd4b39",
        "color": "#fff",
        "boxShadow": "0 2px 2px 0 rgba(221, 75, 57, 0.14), 0 3px 1px -2px rgba(221, 75, 57, 0.2), 0 1px 5px 0 rgba(221, 75, 57, 0.12)"
    },
    "btnbtn-google:focus": {
        "backgroundColor": "#dd4b39",
        "color": "#fff",
        "boxShadow": "0 14px 26px -12px rgba(221, 75, 57, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(221, 75, 57, 0.2)"
    },
    "btnbtn-google:active": {
        "backgroundColor": "#dd4b39",
        "color": "#fff",
        "boxShadow": "0 14px 26px -12px rgba(221, 75, 57, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(221, 75, 57, 0.2)"
    },
    "btnbtn-google:hover": {
        "backgroundColor": "#dd4b39",
        "color": "#fff",
        "boxShadow": "0 14px 26px -12px rgba(221, 75, 57, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(221, 75, 57, 0.2)"
    },
    "navbar navbar-nav > li > abtnbtn-google:focus": {
        "backgroundColor": "#dd4b39",
        "color": "#fff",
        "boxShadow": "0 14px 26px -12px rgba(221, 75, 57, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(221, 75, 57, 0.2)"
    },
    "navbar navbar-nav > li > abtnbtn-google:active": {
        "backgroundColor": "#dd4b39",
        "color": "#fff",
        "boxShadow": "0 14px 26px -12px rgba(221, 75, 57, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(221, 75, 57, 0.2)"
    },
    "navbar navbar-nav > li > abtnbtn-google:hover": {
        "backgroundColor": "#dd4b39",
        "color": "#fff",
        "boxShadow": "0 14px 26px -12px rgba(221, 75, 57, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(221, 75, 57, 0.2)"
    },
    "btnbtn-googlebtn-simple": {
        "color": "#dd4b39",
        "backgroundColor": "transparent",
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-googlebtn-simple": {
        "color": "#dd4b39",
        "backgroundColor": "transparent",
        "boxShadow": "none"
    },
    "btnbtn-instagram": {
        "backgroundColor": "#125688",
        "color": "#fff",
        "boxShadow": "0 2px 2px 0 rgba(18, 86, 136, 0.14), 0 3px 1px -2px rgba(18, 86, 136, 0.2), 0 1px 5px 0 rgba(18, 86, 136, 0.12)"
    },
    "navbar navbar-nav > li > abtnbtn-instagram": {
        "backgroundColor": "#125688",
        "color": "#fff",
        "boxShadow": "0 2px 2px 0 rgba(18, 86, 136, 0.14), 0 3px 1px -2px rgba(18, 86, 136, 0.2), 0 1px 5px 0 rgba(18, 86, 136, 0.12)"
    },
    "btnbtn-instagram:focus": {
        "backgroundColor": "#125688",
        "color": "#fff",
        "boxShadow": "0 14px 26px -12px rgba(18, 86, 136, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(18, 86, 136, 0.2)"
    },
    "btnbtn-instagram:active": {
        "backgroundColor": "#125688",
        "color": "#fff",
        "boxShadow": "0 14px 26px -12px rgba(18, 86, 136, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(18, 86, 136, 0.2)"
    },
    "btnbtn-instagram:hover": {
        "backgroundColor": "#125688",
        "color": "#fff",
        "boxShadow": "0 14px 26px -12px rgba(18, 86, 136, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(18, 86, 136, 0.2)"
    },
    "navbar navbar-nav > li > abtnbtn-instagram:focus": {
        "backgroundColor": "#125688",
        "color": "#fff",
        "boxShadow": "0 14px 26px -12px rgba(18, 86, 136, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(18, 86, 136, 0.2)"
    },
    "navbar navbar-nav > li > abtnbtn-instagram:active": {
        "backgroundColor": "#125688",
        "color": "#fff",
        "boxShadow": "0 14px 26px -12px rgba(18, 86, 136, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(18, 86, 136, 0.2)"
    },
    "navbar navbar-nav > li > abtnbtn-instagram:hover": {
        "backgroundColor": "#125688",
        "color": "#fff",
        "boxShadow": "0 14px 26px -12px rgba(18, 86, 136, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(18, 86, 136, 0.2)"
    },
    "btnbtn-instagrambtn-simple": {
        "color": "#125688",
        "backgroundColor": "transparent",
        "boxShadow": "none"
    },
    "navbar navbar-nav > li > abtnbtn-instagrambtn-simple": {
        "color": "#125688",
        "backgroundColor": "transparent",
        "boxShadow": "none"
    },
    "btnbtn-round": {
        "borderRadius": 30
    },
    "navbar navbar-nav > li > abtnbtn-round": {
        "borderRadius": 30
    },
    "btn:not(btn-just-icon):not(btn-fab) fa": {
        "fontSize": 18,
        "marginTop": -2,
        "position": "relative",
        "top": 2
    },
    "navbar navbar-nav > li > abtn:not(btn-just-icon):not(btn-fab) fa": {
        "fontSize": 18,
        "marginTop": -2,
        "position": "relative",
        "top": 2
    },
    "btnbtn-fab": {
        "borderRadius": "50%",
        "fontSize": 24,
        "height": 56,
        "marginTop": "auto",
        "marginRight": "auto",
        "marginBottom": "auto",
        "marginLeft": "auto",
        "minWidth": 56,
        "width": 56,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "overflow": "hidden",
        "position": "relative",
        "lineHeight": "normal"
    },
    "navbar navbar-nav > li > abtnbtn-fab": {
        "borderRadius": "50%",
        "fontSize": 24,
        "height": 56,
        "marginTop": 5,
        "marginRight": 2,
        "marginBottom": 5,
        "marginLeft": 2,
        "minWidth": 56,
        "width": 56,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "overflow": "hidden",
        "position": "relative",
        "lineHeight": "normal"
    },
    "btnbtn-fab ripple-container": {
        "borderRadius": "50%"
    },
    "navbar navbar-nav > li > abtnbtn-fab ripple-container": {
        "borderRadius": "50%"
    },
    "btnbtn-fabbtn-fab-mini": {
        "height": 40,
        "minWidth": 40,
        "width": 40
    },
    "btn-group-sm btnbtn-fab": {
        "height": 40,
        "minWidth": 40,
        "width": 40
    },
    "navbar navbar-nav > li > abtnbtn-fabbtn-fab-mini": {
        "height": 40,
        "minWidth": 40,
        "width": 40
    },
    "btn-group-sm    navbar navbar-nav > li > abtnbtn-fab": {
        "height": 40,
        "minWidth": 40,
        "width": 40
    },
    "btnbtn-fabbtn-fab-minimaterial-icons": {
        "top": -3.5,
        "left": -3.5
    },
    "btn-group-sm btnbtn-fabmaterial-icons": {
        "top": -3.5,
        "left": -3.5
    },
    "navbar navbar-nav > li > abtnbtn-fabbtn-fab-minimaterial-icons": {
        "top": -3.5,
        "left": -3.5
    },
    "btn-group-sm      navbar navbar-nav > li > abtnbtn-fabmaterial-icons": {
        "top": -3.5,
        "left": -3.5
    },
    "btnbtn-fabbtn-fab-mini material-icons": {
        "fontSize": 17
    },
    "btn-group-sm btnbtn-fab material-icons": {
        "fontSize": 17
    },
    "navbar navbar-nav > li > abtnbtn-fabbtn-fab-mini material-icons": {
        "fontSize": 17
    },
    "btn-group-sm      navbar navbar-nav > li > abtnbtn-fab material-icons": {
        "fontSize": 17
    },
    "btnbtn-fab imaterial-icons": {
        "position": "absolute",
        "top": "50%",
        "left": "50%",
        "transform": "translate(-12px, -12px)",
        "lineHeight": 24,
        "width": 24,
        "fontSize": 24
    },
    "navbar navbar-nav > li > abtnbtn-fab imaterial-icons": {
        "position": "absolute",
        "top": "50%",
        "left": "50%",
        "transform": "translate(-12px, -12px)",
        "lineHeight": 24,
        "width": 24,
        "fontSize": 24
    },
    "btnbtn-lg": {
        "fontSize": 14,
        "paddingTop": 18,
        "paddingRight": 36,
        "paddingBottom": 18,
        "paddingLeft": 36
    },
    "btn-group-lg btn": {
        "fontSize": 14,
        "paddingTop": 18,
        "paddingRight": 36,
        "paddingBottom": 18,
        "paddingLeft": 36
    },
    "navbar navbar-nav > li > abtnbtn-lg": {
        "fontSize": 14,
        "paddingTop": 18,
        "paddingRight": 36,
        "paddingBottom": 18,
        "paddingLeft": 36
    },
    "btn-group-lg  navbar navbar-nav > li > abtn": {
        "fontSize": 14,
        "paddingTop": 18,
        "paddingRight": 36,
        "paddingBottom": 18,
        "paddingLeft": 36
    },
    "btnbtn-sm": {
        "paddingTop": 5,
        "paddingRight": 20,
        "paddingBottom": 5,
        "paddingLeft": 20,
        "fontSize": 11
    },
    "btn-group-sm btn": {
        "paddingTop": 5,
        "paddingRight": 20,
        "paddingBottom": 5,
        "paddingLeft": 20,
        "fontSize": 11
    },
    "navbar navbar-nav > li > abtnbtn-sm": {
        "paddingTop": 5,
        "paddingRight": 20,
        "paddingBottom": 5,
        "paddingLeft": 20,
        "fontSize": 11
    },
    "btn-group-sm  navbar navbar-nav > li > abtn": {
        "paddingTop": 5,
        "paddingRight": 20,
        "paddingBottom": 5,
        "paddingLeft": 20,
        "fontSize": 11
    },
    "btnbtn-xs": {
        "paddingTop": 4,
        "paddingRight": 15,
        "paddingBottom": 4,
        "paddingLeft": 15,
        "fontSize": 10
    },
    "btn-group-xs btn": {
        "paddingTop": 4,
        "paddingRight": 15,
        "paddingBottom": 4,
        "paddingLeft": 15,
        "fontSize": 10
    },
    "navbar navbar-nav > li > abtnbtn-xs": {
        "paddingTop": 4,
        "paddingRight": 15,
        "paddingBottom": 4,
        "paddingLeft": 15,
        "fontSize": 10
    },
    "btn-group-xs  navbar navbar-nav > li > abtn": {
        "paddingTop": 4,
        "paddingRight": 15,
        "paddingBottom": 4,
        "paddingLeft": 15,
        "fontSize": 10
    },
    "btnbtn-just-icon": {
        "fontSize": 20,
        "paddingTop": 12,
        "paddingRight": 12,
        "paddingBottom": 12,
        "paddingLeft": 12,
        "lineHeight": 1
    },
    "navbar navbar-nav > li > abtnbtn-just-icon": {
        "fontSize": 20,
        "paddingTop": 12,
        "paddingRight": 12,
        "paddingBottom": 12,
        "paddingLeft": 12,
        "lineHeight": 1
    },
    "btnbtn-just-icon i": {
        "width": 20
    },
    "navbar navbar-nav > li > abtnbtn-just-icon i": {
        "width": 20
    },
    "btnbtn-just-iconbtn-lg": {
        "fontSize": 22,
        "paddingTop": 13,
        "paddingRight": 18,
        "paddingBottom": 13,
        "paddingLeft": 18
    },
    "navbar navbar-nav > li > abtnbtn-just-iconbtn-lg": {
        "fontSize": 22,
        "paddingTop": 13,
        "paddingRight": 18,
        "paddingBottom": 13,
        "paddingLeft": 18
    },
    "btn material-icons": {
        "verticalAlign": "middle",
        "fontSize": 17,
        "top": -1,
        "position": "relative"
    },
    "navbar navbar-nav > li > a:not(btn) material-icons": {
        "marginTop": -3,
        "top": 0,
        "position": "relative",
        "marginRight": 3
    },
    "navbar navbar-nav > li > profile-photo": {
        "marginTop": 5,
        "marginRight": 2,
        "marginBottom": 5,
        "marginLeft": 2
    },
    "navbar-default:not(navbar-transparent) navbar-nav > li > abtnbtn-whitebtn-simple": {
        "color": "#555555"
    },
    "btn-group": {
        "position": "relative",
        "marginTop": 10,
        "marginRight": 1,
        "marginBottom": 10,
        "marginLeft": 1
    },
    "btn-group-vertical": {
        "position": "relative",
        "marginTop": 10,
        "marginRight": 1,
        "marginBottom": 10,
        "marginLeft": 1
    },
    "btn-groupopen > dropdown-togglebtn": {
        "backgroundColor": "#FFFFFF"
    },
    "btn-groupopen > dropdown-togglebtnbtn-default": {
        "backgroundColor": "#FFFFFF"
    },
    "btn-group-verticalopen > dropdown-togglebtn": {
        "backgroundColor": "#FFFFFF"
    },
    "btn-group-verticalopen > dropdown-togglebtnbtn-default": {
        "backgroundColor": "#FFFFFF"
    },
    "btn-groupopen > dropdown-togglebtnbtn-inverse": {
        "backgroundColor": "#212121"
    },
    "btn-group-verticalopen > dropdown-togglebtnbtn-inverse": {
        "backgroundColor": "#212121"
    },
    "btn-groupopen > dropdown-togglebtnbtn-primary": {
        "backgroundColor": "#9c27b0"
    },
    "btn-group-verticalopen > dropdown-togglebtnbtn-primary": {
        "backgroundColor": "#9c27b0"
    },
    "btn-groupopen > dropdown-togglebtnbtn-success": {
        "backgroundColor": "#4caf50"
    },
    "btn-group-verticalopen > dropdown-togglebtnbtn-success": {
        "backgroundColor": "#4caf50"
    },
    "btn-groupopen > dropdown-togglebtnbtn-info": {
        "backgroundColor": "#00bcd4"
    },
    "btn-group-verticalopen > dropdown-togglebtnbtn-info": {
        "backgroundColor": "#00bcd4"
    },
    "btn-groupopen > dropdown-togglebtnbtn-warning": {
        "backgroundColor": "#ff9800"
    },
    "btn-group-verticalopen > dropdown-togglebtnbtn-warning": {
        "backgroundColor": "#ff9800"
    },
    "btn-groupopen > dropdown-togglebtnbtn-danger": {
        "backgroundColor": "#f44336"
    },
    "btn-group-verticalopen > dropdown-togglebtnbtn-danger": {
        "backgroundColor": "#f44336"
    },
    "btn-groupopen > dropdown-togglebtnbtn-rose": {
        "backgroundColor": "#e91e63"
    },
    "btn-group-verticalopen > dropdown-togglebtnbtn-rose": {
        "backgroundColor": "#e91e63"
    },
    "btn-group dropdown-menu": {
        "borderRadius": "0 0 3px 3px"
    },
    "btn-group-vertical dropdown-menu": {
        "borderRadius": "0 0 3px 3px"
    },
    "btn-groupbtn-group-raised": {
        "boxShadow": "0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)"
    },
    "btn-group-verticalbtn-group-raised": {
        "boxShadow": "0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)"
    },
    "btn-group btn + btn": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "btn-group btn": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "btn-group btn:active": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "btn-group btn-group": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "btn-group-vertical btn + btn": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "btn-group-vertical btn": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "btn-group-vertical btn:active": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "btn-group-vertical btn-group": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "close": {
        "fontSize": "inherit",
        "color": "#FFFFFF",
        "opacity": 0.9,
        "textShadow": "none"
    },
    "close:hover": {
        "opacity": 1,
        "color": "#FFFFFF"
    },
    "close:focus": {
        "opacity": 1,
        "color": "#FFFFFF"
    },
    "close i": {
        "fontSize": 20
    },
    "body": {
        "backgroundColor": "#EEEEEE",
        "color": "#3C4858",
        "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
        "fontWeight": "300",
        "lineHeight": 1.5
    },
    "bodyinverse": {
        "background": "#333333",
        "color": "#ffffff"
    },
    "bodyinverse form-control": {
        "color": "#ffffff"
    },
    "bodyinverse modal": {
        "backgroundColor": "initial",
        "color": "initial"
    },
    "bodyinverse modal form-control": {
        "backgroundColor": "initial",
        "color": "initial"
    },
    "bodyinverse panel-default": {
        "backgroundColor": "initial",
        "color": "initial"
    },
    "bodyinverse panel-default form-control": {
        "backgroundColor": "initial",
        "color": "initial"
    },
    "bodyinverse card": {
        "backgroundColor": "initial",
        "color": "initial"
    },
    "bodyinverse card form-control": {
        "backgroundColor": "initial",
        "color": "initial"
    },
    "wrapperwrapper-full-page": {
        "height": "auto",
        "minHeight": 100 * vh
    },
    "blockquote p": {
        "fontStyle": "italic"
    },
    "life-of-material-dashboard": {
        "background": "#FFFFFF"
    },
    "serif-font": {
        "fontFamily": "\"Roboto Slab\", \"Times New Roman\", serif"
    },
    "page-header": {
        "height": 60 * vh,
        "backgroundPosition": "center center",
        "backgroundSize": "cover",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "borderBottomLeftRadius": 6,
        "borderBottomRightRadius": 6
    },
    "a": {
        "color": "#9c27b0"
    },
    "a:hover": {
        "color": "#89229b",
        "textDecoration": "none"
    },
    "a:focus": {
        "color": "#89229b",
        "textDecoration": "none",
        "outline": "0 !important"
    },
    "atext-info:hover": {
        "color": "#00a5bb"
    },
    "atext-info:focus": {
        "color": "#00a5bb"
    },
    "a material-icons": {
        "verticalAlign": "middle"
    },
    "animation-transition-general": {
        "WebkitTransition": "all 300ms linear",
        "MozTransition": "all 300ms linear",
        "OTransition": "all 300ms linear",
        "MsTransition": "all 300ms linear",
        "transition": "all 300ms linear"
    },
    "animation-transition-slow": {
        "WebkitTransition": "all 370ms linear",
        "MozTransition": "all 370ms linear",
        "OTransition": "all 370ms linear",
        "MsTransition": "all 370ms linear",
        "transition": "all 370ms linear"
    },
    "animation-transition-fast": {
        "WebkitTransition": "all 150ms ease 0s",
        "MozTransition": "all 150ms ease 0s",
        "OTransition": "all 150ms ease 0s",
        "MsTransition": "all 150ms ease 0s",
        "transition": "all 150ms ease 0s"
    },
    "navbar": {
        "WebkitTransition": "all 150ms ease 0s",
        "MozTransition": "all 150ms ease 0s",
        "OTransition": "all 150ms ease 0s",
        "MsTransition": "all 150ms ease 0s",
        "transition": "all 150ms ease 0s",
        "border": 0,
        "borderRadius": 3,
        "borderBottom": "1px solid #ededf3",
        "paddingTop": 10,
        "paddingRight": 0,
        "paddingBottom": 10,
        "paddingLeft": 0,
        "backgroundColor": "#FFFFFF",
        "color": "#555555"
    },
    "legend": {
        "borderBottom": 0,
        "marginBottom": 20,
        "fontSize": 21
    },
    "*": {
        "WebkitTapHighlightColor": "transparent"
    },
    "*:focus": {
        "outline": 0
    },
    "a:active": {
        "outline": "0 !important"
    },
    "button:active": {
        "outline": "0 !important"
    },
    "button:focus": {
        "outline": "0 !important"
    },
    "button:hover": {
        "outline": "0 !important"
    },
    "button::-moz-focus-inner": {
        "outline": "0 !important"
    },
    "input[type=\"reset\"]::-moz-focus-inner": {
        "outline": "0 !important"
    },
    "input[type=\"button\"]::-moz-focus-inner": {
        "outline": "0 !important"
    },
    "input[type=\"submit\"]::-moz-focus-inner": {
        "outline": "0 !important"
    },
    "select::-moz-focus-inner": {
        "outline": "0 !important"
    },
    "input[type=\"file\"] > input[type=\"button\"]::-moz-focus-inner": {
        "outline": "0 !important"
    },
    "output": {
        "paddingTop": 8,
        "fontSize": 14,
        "lineHeight": 1.42857
    },
    "form-control": {
        "height": 36,
        "paddingTop": 7,
        "paddingRight": 0,
        "paddingBottom": 7,
        "paddingLeft": 0,
        "fontSize": 14,
        "lineHeight": 1.42857,
        "border": 0,
        "backgroundImage": "linear-gradient(#9c27b0, #9c27b0), linear-gradient(#D2D2D2, #D2D2D2)",
        "backgroundSize": "0 2px, 100% 1px",
        "backgroundRepeat": "no-repeat",
        "backgroundPosition": "center bottom, center calc(100% - 1px)",
        "backgroundColor": "transparent",
        "transition": "background 0s ease-out",
        "float": "none",
        "boxShadow": "none",
        "borderRadius": 0,
        "fontWeight": "400",
        "marginBottom": 7
    },
    "radio label": {
        "minHeight": 20,
        "fontSize": 14,
        "lineHeight": 1.42857,
        "color": "rgba(0,0,0, 0.26)",
        "fontWeight": "400",
        "cursor": "pointer",
        "paddingLeft": 35,
        "position": "relative"
    },
    "checkbox label": {
        "minHeight": 20,
        "fontSize": 14,
        "lineHeight": 1.42857,
        "color": "rgba(0,0,0, 0.26)",
        "fontWeight": "400",
        "cursor": "pointer",
        "paddingLeft": 0
    },
    "form-control-static": {
        "paddingTop": 8,
        "paddingBottom": 8,
        "minHeight": 34
    },
    "input-sm input-sm": {
        "height": 24,
        "paddingTop": 3,
        "paddingRight": 0,
        "paddingBottom": 3,
        "paddingLeft": 0,
        "fontSize": 11,
        "lineHeight": 1.5,
        "borderRadius": 0
    },
    "input-sm selectinput-sm": {
        "height": 24,
        "lineHeight": 24
    },
    "input-sm textareainput-sm": {
        "height": "auto"
    },
    "input-sm select[multiple]input-sm": {
        "height": "auto"
    },
    "form-group-sm form-control": {
        "height": 24,
        "paddingTop": 3,
        "paddingRight": 0,
        "paddingBottom": 3,
        "paddingLeft": 0,
        "fontSize": 11,
        "lineHeight": 1.5
    },
    "form-group-sm selectform-control": {
        "height": 24,
        "lineHeight": 24
    },
    "form-group-sm textareaform-control": {
        "height": "auto"
    },
    "form-group-sm select[multiple]form-control": {
        "height": "auto"
    },
    "form-group-sm form-control-static": {
        "height": 24,
        "minHeight": 31,
        "paddingTop": 4,
        "paddingRight": 0,
        "paddingBottom": 4,
        "paddingLeft": 0,
        "fontSize": 11,
        "lineHeight": 1.5
    },
    "input-lg input-lg": {
        "height": 44,
        "paddingTop": 9,
        "paddingRight": 0,
        "paddingBottom": 9,
        "paddingLeft": 0,
        "fontSize": 18,
        "lineHeight": 1.33333,
        "borderRadius": 0
    },
    "input-lg selectinput-lg": {
        "height": 44,
        "lineHeight": 44
    },
    "input-lg textareainput-lg": {
        "height": "auto"
    },
    "input-lg select[multiple]input-lg": {
        "height": "auto"
    },
    "form-group-lg form-control": {
        "height": 44,
        "paddingTop": 9,
        "paddingRight": 0,
        "paddingBottom": 9,
        "paddingLeft": 0,
        "fontSize": 18,
        "lineHeight": 1.33333
    },
    "form-group-lg selectform-control": {
        "height": 44,
        "lineHeight": 44
    },
    "form-group-lg textareaform-control": {
        "height": "auto"
    },
    "form-group-lg select[multiple]form-control": {
        "height": "auto"
    },
    "form-group-lg form-control-static": {
        "height": 44,
        "minHeight": 38,
        "paddingTop": 10,
        "paddingRight": 0,
        "paddingBottom": 10,
        "paddingLeft": 0,
        "fontSize": 18,
        "lineHeight": 1.33333
    },
    "form-horizontal radio": {
        "paddingTop": 0,
        "minHeight": 28,
        "marginBottom": 10
    },
    "form-horizontal checkbox": {
        "paddingTop": 0,
        "minHeight": 28
    },
    "form-horizontal radio-inline": {
        "paddingTop": 0
    },
    "form-horizontal checkbox-inline": {
        "paddingTop": 0
    },
    "label": {
        "borderRadius": 2,
        "backgroundColor": "#FFFFFF",
        "fontSize": 14,
        "lineHeight": 1.42857,
        "color": "#AAAAAA",
        "fontWeight": "400"
    },
    "labellabel-default": {
        "backgroundColor": "#FFFFFF"
    },
    "labellabel-inverse": {
        "backgroundColor": "#212121"
    },
    "labellabel-primary": {
        "backgroundColor": "#9c27b0"
    },
    "labellabel-success": {
        "backgroundColor": "#4caf50"
    },
    "labellabel-info": {
        "backgroundColor": "#00bcd4"
    },
    "labellabel-warning": {
        "backgroundColor": "#ff9800"
    },
    "labellabel-danger": {
        "backgroundColor": "#f44336"
    },
    "labellabel-rose": {
        "backgroundColor": "#e91e63"
    },
    "form-group form-control": {
        "border": 0,
        "backgroundImage": "linear-gradient(#9c27b0, #9c27b0), linear-gradient(#D2D2D2, #D2D2D2)",
        "backgroundSize": "0 2px, 100% 1px",
        "backgroundRepeat": "no-repeat",
        "backgroundPosition": "center bottom, center calc(100% - 1px)",
        "backgroundColor": "transparent",
        "transition": "background 0s ease-out",
        "float": "none",
        "boxShadow": "none",
        "borderRadius": 0,
        "fontWeight": "400",
        "marginBottom": 7
    },
    "form-control::-moz-placeholder": {
        "color": "#AAAAAA",
        "fontWeight": "400",
        "fontSize": 14,
        "lineHeight": 1.42857
    },
    "form-group form-control::-moz-placeholder": {
        "color": "#AAAAAA",
        "fontWeight": "400",
        "fontSize": 14,
        "lineHeight": 1.42857
    },
    "form-control:-ms-input-placeholder": {
        "color": "#AAAAAA",
        "fontWeight": "400",
        "fontSize": 14,
        "lineHeight": 1.42857
    },
    "form-group form-control:-ms-input-placeholder": {
        "color": "#AAAAAA",
        "fontWeight": "400",
        "fontSize": 14,
        "lineHeight": 1.42857
    },
    "form-control::-webkit-input-placeholder": {
        "color": "#AAAAAA",
        "fontWeight": "400",
        "fontSize": 14,
        "lineHeight": 1.42857
    },
    "form-group form-control::-webkit-input-placeholder": {
        "color": "#AAAAAA",
        "fontWeight": "400",
        "fontSize": 14,
        "lineHeight": 1.42857
    },
    "form-control[readonly]": {
        "backgroundColor": "transparent"
    },
    "form-control[disabled]": {
        "backgroundColor": "transparent",
        "backgroundImage": "none",
        "borderBottom": "1px dotted #D2D2D2"
    },
    "fieldset[disabled] form-control": {
        "backgroundColor": "transparent",
        "backgroundImage": "none",
        "borderBottom": "1px dotted #D2D2D2"
    },
    "form-group form-control[readonly]": {
        "backgroundColor": "transparent"
    },
    "form-group form-control[disabled]": {
        "backgroundColor": "transparent",
        "backgroundImage": "none",
        "borderBottom": "1px dotted #D2D2D2"
    },
    "fieldset[disabled]  form-group form-control": {
        "backgroundColor": "transparent",
        "backgroundImage": "none",
        "borderBottom": "1px dotted #D2D2D2"
    },
    "form-group": {
        "position": "relative",
        "paddingBottom": 7,
        "marginTop": 27,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "form-grouplabel-static labelcontrol-label": {
        "position": "absolute",
        "pointerEvents": "none",
        "transition": "0.3s ease all",
        "top": -28,
        "left": 0,
        "fontSize": 11,
        "lineHeight": 1.07143
    },
    "form-grouplabel-placeholder labelcontrol-label": {
        "position": "absolute",
        "pointerEvents": "none",
        "transition": "0.3s ease all",
        "top": -7,
        "fontSize": 14,
        "lineHeight": 1.42857
    },
    "form-grouplabel-floating labelcontrol-label": {
        "position": "absolute",
        "pointerEvents": "none",
        "transition": "0.3s ease all",
        "willChange": "left, top, contents",
        "top": -7,
        "fontSize": 14,
        "lineHeight": 1.42857
    },
    "form-grouplabel-placeholder:not(is-empty) labelcontrol-label": {
        "display": "none"
    },
    "form-group help-block": {
        "position": "absolute",
        "display": "none",
        "marginTop": 0,
        "fontSize": 11
    },
    "form-groupis-focused form-control": {
        "outline": "none",
        "backgroundImage": "linear-gradient(#9c27b0, #9c27b0), linear-gradient(#D2D2D2, #D2D2D2)",
        "backgroundSize": "100% 2px, 100% 1px",
        "boxShadow": "none",
        "transitionDuration": "0.3s"
    },
    "form-groupis-focused form-control material-input:after": {
        "backgroundColor": "#9c27b0"
    },
    "form-groupis-focusedform-info form-control": {
        "backgroundImage": "linear-gradient(#00bcd4, #00bcd4), linear-gradient(#D2D2D2, #D2D2D2)"
    },
    "form-groupis-focusedform-success form-control": {
        "backgroundImage": "linear-gradient(#4caf50, #4caf50), linear-gradient(#D2D2D2, #D2D2D2)"
    },
    "form-groupis-focusedform-warning form-control": {
        "backgroundImage": "linear-gradient(#ff9800, #ff9800), linear-gradient(#D2D2D2, #D2D2D2)"
    },
    "form-groupis-focusedform-danger form-control": {
        "backgroundImage": "linear-gradient(#f44336, #f44336), linear-gradient(#D2D2D2, #D2D2D2)"
    },
    "form-groupis-focusedform-rose form-control": {
        "backgroundImage": "linear-gradient(#e91e63, #e91e63), linear-gradient(#D2D2D2, #D2D2D2)"
    },
    "form-groupis-focusedform-white form-control": {
        "backgroundImage": "linear-gradient(#FFFFFF, #FFFFFF), linear-gradient(#D2D2D2, #D2D2D2)"
    },
    "form-groupis-focusedlabel-placeholder label": {
        "color": "#AAAAAA"
    },
    "form-groupis-focusedlabel-placeholder labelcontrol-label": {
        "color": "#AAAAAA"
    },
    "form-groupis-focused help-block": {
        "display": "block"
    },
    "form-grouphas-warning form-control": {
        "boxShadow": "none"
    },
    "form-grouphas-warningis-focused form-control": {
        "backgroundImage": "linear-gradient(#ff9800, #ff9800), linear-gradient(#D2D2D2, #D2D2D2)"
    },
    "form-grouphas-warning labelcontrol-label": {
        "color": "#ff9800"
    },
    "form-grouphas-warning help-block": {
        "color": "#ff9800"
    },
    "form-grouphas-error form-control": {
        "boxShadow": "none"
    },
    "form-grouphas-erroris-focused form-control": {
        "backgroundImage": "linear-gradient(#f44336, #f44336), linear-gradient(#D2D2D2, #D2D2D2)"
    },
    "form-grouphas-error labelcontrol-label": {
        "color": "#f44336"
    },
    "form-grouphas-error help-block": {
        "color": "#f44336"
    },
    "form-grouphas-success form-control": {
        "boxShadow": "none"
    },
    "form-grouphas-successis-focused form-control": {
        "backgroundImage": "linear-gradient(#4caf50, #4caf50), linear-gradient(#D2D2D2, #D2D2D2)"
    },
    "form-grouphas-success labelcontrol-label": {
        "color": "#4caf50"
    },
    "form-grouphas-success help-block": {
        "color": "#4caf50"
    },
    "form-grouphas-info form-control": {
        "boxShadow": "none"
    },
    "form-grouphas-infois-focused form-control": {
        "backgroundImage": "linear-gradient(#00bcd4, #00bcd4), linear-gradient(#D2D2D2, #D2D2D2)"
    },
    "form-grouphas-info labelcontrol-label": {
        "color": "#00bcd4"
    },
    "form-grouphas-info help-block": {
        "color": "#00bcd4"
    },
    "form-group textarea": {
        "resize": "none"
    },
    "form-group textarea ~ form-control-highlight": {
        "marginTop": -11
    },
    "form-group select": {
        "appearance": "none"
    },
    "form-group select ~ material-input:after": {
        "display": "none"
    },
    "labelcontrol-label": {
        "fontSize": 11,
        "lineHeight": 1.07143,
        "color": "#AAAAAA",
        "fontWeight": "400",
        "marginTop": 16,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "help-block": {
        "marginTop": 0,
        "fontSize": 11
    },
    "form-group checkbox label": {
        "fontSize": 14,
        "lineHeight": 1.42857,
        "color": "#AAAAAA",
        "fontWeight": "400"
    },
    "form-group radio label": {
        "fontSize": 14,
        "lineHeight": 1.42857,
        "color": "#AAAAAA",
        "fontWeight": "400"
    },
    "form-group label": {
        "fontSize": 14,
        "lineHeight": 1.42857,
        "color": "#AAAAAA",
        "fontWeight": "400"
    },
    "form-group labelcontrol-label": {
        "fontSize": 11,
        "lineHeight": 1.07143,
        "color": "#AAAAAA",
        "fontWeight": "400",
        "marginTop": 16,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "form-grouplabel-floatingis-focused labelcontrol-label": {
        "top": -28,
        "left": 0,
        "fontSize": 11,
        "lineHeight": 1.07143
    },
    "form-grouplabel-floating:not(is-empty) labelcontrol-label": {
        "top": -28,
        "left": 0,
        "fontSize": 11,
        "lineHeight": 1.07143
    },
    "form-grouplabel-floating inputform-control:-webkit-autofill ~ labelcontrol-label labelcontrol-label": {
        "top": -28,
        "left": 0,
        "fontSize": 11,
        "lineHeight": 1.07143
    },
    "form-groupform-group-sm": {
        "paddingBottom": 3,
        "marginTop": 21,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "form-groupform-group-sm form-control": {
        "marginBottom": 3
    },
    "form-groupform-group-sm form-control::-moz-placeholder": {
        "fontSize": 11,
        "lineHeight": 1.5,
        "color": "#AAAAAA",
        "fontWeight": "400"
    },
    "form-groupform-group-sm form-control:-ms-input-placeholder": {
        "fontSize": 11,
        "lineHeight": 1.5,
        "color": "#AAAAAA",
        "fontWeight": "400"
    },
    "form-groupform-group-sm form-control::-webkit-input-placeholder": {
        "fontSize": 11,
        "lineHeight": 1.5,
        "color": "#AAAAAA",
        "fontWeight": "400"
    },
    "form-groupform-group-sm checkbox label": {
        "fontSize": 11,
        "lineHeight": 1.5,
        "color": "#AAAAAA",
        "fontWeight": "400"
    },
    "form-groupform-group-sm radio label": {
        "fontSize": 11,
        "lineHeight": 1.5,
        "color": "#AAAAAA",
        "fontWeight": "400"
    },
    "form-groupform-group-sm label": {
        "fontSize": 11,
        "lineHeight": 1.5,
        "color": "#AAAAAA",
        "fontWeight": "400"
    },
    "form-groupform-group-sm labelcontrol-label": {
        "fontSize": 9,
        "lineHeight": 1.125,
        "color": "#AAAAAA",
        "fontWeight": "400",
        "marginTop": 16,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "form-groupform-group-sm help-block": {
        "marginTop": 0,
        "fontSize": 9
    },
    "form-groupform-group-smlabel-floating labelcontrol-label": {
        "top": -11,
        "fontSize": 11,
        "lineHeight": 1.5
    },
    "form-groupform-group-smlabel-placeholder labelcontrol-label": {
        "top": -11,
        "fontSize": 11,
        "lineHeight": 1.5
    },
    "form-groupform-group-smlabel-static labelcontrol-label": {
        "top": -25,
        "left": 0,
        "fontSize": 9,
        "lineHeight": 1.125
    },
    "form-groupform-group-smlabel-floatingis-focused labelcontrol-label": {
        "top": -25,
        "left": 0,
        "fontSize": 9,
        "lineHeight": 1.125
    },
    "form-groupform-group-smlabel-floating:not(is-empty) labelcontrol-label": {
        "top": -25,
        "left": 0,
        "fontSize": 9,
        "lineHeight": 1.125
    },
    "form-groupform-group-smlabel-floating inputform-control:-webkit-autofill ~ labelcontrol-label labelcontrol-label": {
        "top": -25,
        "left": 0,
        "fontSize": 9,
        "lineHeight": 1.125
    },
    "form-groupform-group-lg": {
        "paddingBottom": 9,
        "marginTop": 30,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "form-groupform-group-lg form-control": {
        "marginBottom": 9
    },
    "form-groupform-group-lg form-control::-moz-placeholder": {
        "fontSize": 18,
        "lineHeight": 1.33333,
        "color": "#AAAAAA",
        "fontWeight": "400"
    },
    "form-groupform-group-lg form-control:-ms-input-placeholder": {
        "fontSize": 18,
        "lineHeight": 1.33333,
        "color": "#AAAAAA",
        "fontWeight": "400"
    },
    "form-groupform-group-lg form-control::-webkit-input-placeholder": {
        "fontSize": 18,
        "lineHeight": 1.33333,
        "color": "#AAAAAA",
        "fontWeight": "400"
    },
    "form-groupform-group-lg checkbox label": {
        "fontSize": 18,
        "lineHeight": 1.33333,
        "color": "#AAAAAA",
        "fontWeight": "400"
    },
    "form-groupform-group-lg radio label": {
        "fontSize": 18,
        "lineHeight": 1.33333,
        "color": "#AAAAAA",
        "fontWeight": "400"
    },
    "form-groupform-group-lg label": {
        "fontSize": 18,
        "lineHeight": 1.33333,
        "color": "#AAAAAA",
        "fontWeight": "400"
    },
    "form-groupform-group-lg labelcontrol-label": {
        "fontSize": 14,
        "lineHeight": 1,
        "color": "#AAAAAA",
        "fontWeight": "400",
        "marginTop": 16,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "form-groupform-group-lg help-block": {
        "marginTop": 0,
        "fontSize": 14
    },
    "form-groupform-group-lglabel-floating labelcontrol-label": {
        "top": -5,
        "fontSize": 18,
        "lineHeight": 1.33333
    },
    "form-groupform-group-lglabel-placeholder labelcontrol-label": {
        "top": -5,
        "fontSize": 18,
        "lineHeight": 1.33333
    },
    "form-groupform-group-lglabel-static labelcontrol-label": {
        "top": -32,
        "left": 0,
        "fontSize": 14,
        "lineHeight": 1
    },
    "form-groupform-group-lglabel-floatingis-focused labelcontrol-label": {
        "top": -32,
        "left": 0,
        "fontSize": 14,
        "lineHeight": 1
    },
    "form-groupform-group-lglabel-floating:not(is-empty) labelcontrol-label": {
        "top": -32,
        "left": 0,
        "fontSize": 14,
        "lineHeight": 1
    },
    "form-groupform-group-lglabel-floating inputform-control:-webkit-autofill ~ labelcontrol-label labelcontrol-label": {
        "top": -32,
        "left": 0,
        "fontSize": 14,
        "lineHeight": 1
    },
    "selectform-control": {
        "border": 0,
        "boxShadow": "none",
        "borderRadius": 0
    },
    "form-groupis-focused selectform-control": {
        "boxShadow": "none",
        "borderColor": "#D2D2D2"
    },
    "selectform-control[multiple]": {
        "height": 85
    },
    "form-groupis-focused selectform-control[multiple]": {
        "height": 85
    },
    "input-group-btn btn": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 7,
        "marginLeft": 0
    },
    "form-groupform-group-sm input-group-btn btn": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 3,
        "marginLeft": 0
    },
    "form-groupform-group-lg input-group-btn btn": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 9,
        "marginLeft": 0
    },
    "input-group input-group-btn": {
        "paddingTop": 0,
        "paddingRight": 12,
        "paddingBottom": 0,
        "paddingLeft": 12
    },
    "input-group input-group-addon": {
        "border": 0,
        "background": "transparent",
        "paddingTop": 6,
        "paddingRight": 15,
        "paddingBottom": 0,
        "paddingLeft": 15
    },
    "form-group input[type=file]": {
        "opacity": 0,
        "position": "absolute",
        "top": 0,
        "right": 0,
        "bottom": 0,
        "left": 0,
        "width": "100%",
        "height": "100%",
        "zIndex": 100
    },
    "form-control-feedback": {
        "opacity": 0
    },
    "has-success form-control-feedback": {
        "color": "#4caf50",
        "opacity": 1
    },
    "has-error form-control-feedback": {
        "color": "#f44336",
        "opacity": 1
    },
    "form-horizontal label": {
        "textAlign": "right"
    },
    "form-horizontal labelcontrol-label": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "form-newsletter input-group": {
        "float": "left",
        "width": "78%",
        "marginRight": "2%",
        "marginTop": 9
    },
    "form-newsletter form-group": {
        "float": "left",
        "width": "78%",
        "marginRight": "2%",
        "marginTop": 9
    },
    "form-newsletter btn": {
        "float": "left",
        "width": "20%",
        "marginTop": 9,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "alert": {
        "border": 0,
        "borderRadius": 3,
        "position": "relative",
        "paddingTop": 20,
        "paddingRight": 15,
        "paddingBottom": 20,
        "paddingLeft": 15,
        "lineHeight": 20,
        "backgroundColor": "white",
        "color": "#555555",
        "boxShadow": "0 12px 20px -10px rgba(255, 255, 255, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 255, 255, 0.2)"
    },
    "alert b": {
        "fontWeight": "500",
        "textTransform": "uppercase",
        "fontSize": 12
    },
    "alertalert-default": {
        "backgroundColor": "white",
        "color": "#555555",
        "borderRadius": 3,
        "boxShadow": "0 12px 20px -10px rgba(255, 255, 255, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 255, 255, 0.2)"
    },
    "alert a": {
        "color": "#555555"
    },
    "alert alert-link": {
        "color": "#555555"
    },
    "alertalert-default a": {
        "color": "#555555"
    },
    "alertalert-default alert-link": {
        "color": "#555555"
    },
    "alertalert-inverse": {
        "backgroundColor": "#2e2e2e",
        "color": "#fff",
        "borderRadius": 3,
        "boxShadow": "0 12px 20px -10px rgba(33, 33, 33, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(33, 33, 33, 0.2)"
    },
    "alertalert-inverse a": {
        "color": "#fff"
    },
    "alertalert-inverse alert-link": {
        "color": "#fff"
    },
    "alertalert-primary": {
        "backgroundColor": "#af2cc5",
        "color": "#ffffff",
        "borderRadius": 3,
        "boxShadow": "0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2)"
    },
    "alertalert-primary a": {
        "color": "#ffffff"
    },
    "alertalert-primary alert-link": {
        "color": "#ffffff"
    },
    "alertalert-success": {
        "backgroundColor": "#5cb860",
        "color": "#ffffff",
        "borderRadius": 3,
        "boxShadow": "0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2)"
    },
    "alertalert-success a": {
        "color": "#ffffff"
    },
    "alertalert-success alert-link": {
        "color": "#ffffff"
    },
    "alertalert-info": {
        "backgroundColor": "#00d3ee",
        "color": "#ffffff",
        "borderRadius": 3,
        "boxShadow": "0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2)"
    },
    "alertalert-info a": {
        "color": "#ffffff"
    },
    "alertalert-info alert-link": {
        "color": "#ffffff"
    },
    "alertalert-warning": {
        "backgroundColor": "#ffa21a",
        "color": "#ffffff",
        "borderRadius": 3,
        "boxShadow": "0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2)"
    },
    "alertalert-warning a": {
        "color": "#ffffff"
    },
    "alertalert-warning alert-link": {
        "color": "#ffffff"
    },
    "alertalert-danger": {
        "backgroundColor": "#f55a4e",
        "color": "#ffffff",
        "borderRadius": 3,
        "boxShadow": "0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2)"
    },
    "alertalert-danger a": {
        "color": "#ffffff"
    },
    "alertalert-danger alert-link": {
        "color": "#ffffff"
    },
    "alertalert-rose": {
        "backgroundColor": "#eb3573",
        "color": "#ffffff",
        "borderRadius": 3,
        "boxShadow": "0 12px 20px -10px rgba(233, 30, 99, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(233, 30, 99, 0.2)"
    },
    "alertalert-rose a": {
        "color": "#ffffff"
    },
    "alertalert-rose alert-link": {
        "color": "#ffffff"
    },
    "alert-info": {
        "color": "#ffffff"
    },
    "alert-danger": {
        "color": "#ffffff"
    },
    "alert-warning": {
        "color": "#ffffff"
    },
    "alert-success": {
        "color": "#ffffff"
    },
    "alert-default a": {
        "color": "rgba(0,0,0, 0.87)"
    },
    "alert-default alert-link": {
        "color": "rgba(0,0,0, 0.87)"
    },
    "alert i[data-notify=\"icon\"]": {
        "fontSize": 30,
        "display": "block",
        "left": 15,
        "position": "absolute",
        "top": "50%",
        "marginTop": -15
    },
    "alert span": {
        "display": "block",
        "maxWidth": "89%"
    },
    "alert alert-icon": {
        "display": "block",
        "float": "left",
        "marginRight": 15
    },
    "alert alert-icon i": {
        "marginTop": -7,
        "top": 5,
        "position": "relative"
    },
    "alertalert-with-icon": {
        "paddingLeft": 65
    },
    "table > thead > tr > th": {
        "borderBottomWidth": 1,
        "fontSize": 1,
        "fontWeight": "300",
        "paddingTop": 12,
        "paddingRight": 8,
        "paddingBottom": 4,
        "paddingLeft": 8,
        "verticalAlign": "middle"
    },
    "table radio": {
        "marginTop": 0,
        "marginBottom": 0,
        "marginLeft": 10,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "width": 15
    },
    "table checkbox": {
        "marginTop": 0,
        "marginBottom": 0,
        "marginLeft": 10,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "width": 15
    },
    "table radio icons": {
        "position": "relative"
    },
    "table checkbox icons": {
        "position": "relative"
    },
    "table > tbody > tr > th": {
        "paddingTop": 12,
        "paddingRight": 8,
        "paddingBottom": 12,
        "paddingLeft": 8,
        "verticalAlign": "middle"
    },
    "table > tfoot > tr > th": {
        "paddingTop": 12,
        "paddingRight": 8,
        "paddingBottom": 12,
        "paddingLeft": 8,
        "verticalAlign": "middle"
    },
    "table > thead > tr > td": {
        "paddingTop": 12,
        "paddingRight": 8,
        "paddingBottom": 12,
        "paddingLeft": 8,
        "verticalAlign": "middle"
    },
    "table > tbody > tr > td": {
        "paddingTop": 12,
        "paddingRight": 8,
        "paddingBottom": 12,
        "paddingLeft": 8,
        "verticalAlign": "middle"
    },
    "table > tfoot > tr > td": {
        "paddingTop": 12,
        "paddingRight": 8,
        "paddingBottom": 12,
        "paddingLeft": 8,
        "verticalAlign": "middle"
    },
    "table td-actions": {
        "display": "flex"
    },
    "table td-actions btn": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 5,
        "paddingRight": 5,
        "paddingBottom": 5,
        "paddingLeft": 5
    },
    "table > tbody > tr": {
        "position": "relative"
    },
    "form-groupis-focused checkbox label": {
        "color": "rgba(0,0,0, 0.26)"
    },
    "form-groupis-focused checkbox label:hover": {
        "color": "rgba(0,0,0, .54)"
    },
    "form-groupis-focused checkbox label:focus": {
        "color": "rgba(0,0,0, .54)"
    },
    "fieldset[disabled] form-groupis-focused checkbox label": {
        "color": "rgba(0,0,0, 0.26)"
    },
    "checkbox input[type=checkbox]": {
        "opacity": 0,
        "position": "absolute",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "zIndex": -1,
        "width": 0,
        "height": 0,
        "overflow": "hidden",
        "left": 0,
        "pointerEvents": "none"
    },
    "checkbox checkbox-material": {
        "verticalAlign": "middle",
        "position": "relative",
        "top": 3,
        "paddingRight": 5
    },
    "checkbox checkbox-material:before": {
        "display": "block",
        "position": "absolute",
        "left": 0,
        "content": "",
        "backgroundColor": "rgba(0, 0, 0, 0.84)",
        "height": 20,
        "width": 20,
        "borderRadius": "100%",
        "zIndex": 1,
        "opacity": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "transform": "scale3d(2.3, 2.3, 1)"
    },
    "checkbox checkbox-material check": {
        "position": "relative",
        "display": "inline-block",
        "width": 20,
        "height": 20,
        "border": "1px solid rgba(0,0,0, .54)",
        "overflow": "hidden",
        "zIndex": 1,
        "borderRadius": 3
    },
    "checkbox checkbox-material check:before": {
        "position": "absolute",
        "content": "",
        "transform": "rotate(45deg)",
        "display": "block",
        "marginTop": -3,
        "marginLeft": 7,
        "width": 0,
        "height": 0,
        "background": "red",
        "boxShadow": "0 0 0 0, 0 0 0 0, 0 0 0 0, 0 0 0 0, 0 0 0 0, 0 0 0 0, 0 0 0 0 inset",
        "animation": "checkbox-off 0.3s forwards"
    },
    "checkbox input[type=checkbox]:focus + checkbox-material check:after": {
        "opacity": 0.2
    },
    "checkbox input[type=checkbox]:checked + checkbox-material check": {
        "background": "#9c27b0"
    },
    "checkbox input[type=checkbox]:checked + checkbox-material check:before": {
        "color": "#FFFFFF",
        "boxShadow": "0 0 0 10px, 10px -10px 0 10px, 32px 0 0 20px, 0px 32px 0 20px, -5px 5px 0 10px, 20px -12px 0 11px",
        "animation": "checkbox-on 0.3s forwards"
    },
    "checkbox input[type=checkbox]:checked + checkbox-material:before": {
        "animation": "rippleOn 500ms"
    },
    "checkbox input[type=checkbox]:checked + checkbox-material check:after": {
        "animation": "rippleOn 500ms forwards"
    },
    "checkbox input[type=checkbox]:not(:checked) + checkbox-material:before": {
        "animation": "rippleOff 500ms"
    },
    "checkbox input[type=checkbox]:not(:checked) + checkbox-material check:after": {
        "animation": "rippleOff 500ms"
    },
    "fieldset[disabled] checkbox": {
        "opacity": 0.5
    },
    "fieldset[disabled] checkbox input[type=checkbox]": {
        "opacity": 0.5
    },
    "checkbox input[type=checkbox][disabled] ~ checkbox-material check": {
        "opacity": 0.26,
        "borderColor": "#000000"
    },
    "checkbox input[type=checkbox][disabled] + circle": {
        "opacity": 0.5
    },
    "checkbox input[type=checkbox][disabled] + checkbox-material check:after": {
        "backgroundColor": "rgba(0,0,0, 0.87)",
        "transform": "rotate(-45deg)"
    },
    "form-groupis-focused radio label": {
        "color": "rgba(0,0,0, 0.26)"
    },
    "form-groupis-focused radio label:hover": {
        "color": "rgba(0,0,0, .54)"
    },
    "form-groupis-focused radio label:focus": {
        "color": "rgba(0,0,0, .54)"
    },
    "fieldset[disabled] form-groupis-focused radio label": {
        "color": "rgba(0,0,0, 0.26)"
    },
    "radio label span": {
        "display": "block",
        "position": "absolute",
        "left": 10,
        "top": 2,
        "transitionDuration": "0.2s"
    },
    "radio label circle": {
        "border": "1px solid rgba(0,0,0, .54)",
        "height": 15,
        "width": 15,
        "borderRadius": "100%"
    },
    "radio label check": {
        "height": 15,
        "width": 15,
        "borderRadius": "100%",
        "backgroundColor": "#9c27b0",
        "transform": "scale3d(0, 0, 0)"
    },
    "radio label check:after": {
        "display": "block",
        "position": "absolute",
        "content": "",
        "backgroundColor": "rgba(0,0,0, 0.87)",
        "left": -18,
        "top": -18,
        "height": 50,
        "width": 50,
        "borderRadius": "100%",
        "zIndex": 1,
        "opacity": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "transform": "scale3d(1.5, 1.5, 1)"
    },
    "radio label input[type=radio]:not(:checked) ~ check:after": {
        "animation": "rippleOff 500ms"
    },
    "radio label input[type=radio]:checked ~ check:after": {
        "animation": "rippleOn 500ms"
    },
    "radio input[type=radio]": {
        "opacity": 0,
        "height": 0,
        "width": 0,
        "overflow": "hidden"
    },
    "radio input[type=radio]:checked ~ check": {
        "opacity": 1,
        "backgroundColor": "#9c27b0",
        "transform": "scale3d(0.65, 0.65, 1)"
    },
    "radio input[type=radio]:checked ~ circle": {
        "opacity": 1,
        "borderColor": "#9c27b0"
    },
    "radio input[type=radio][disabled] ~ check": {
        "opacity": 0.26,
        "backgroundColor": "#000000"
    },
    "radio input[type=radio][disabled] ~ circle": {
        "opacity": 0.26,
        "borderColor": "#000000"
    },
    "togglebutton": {
        "verticalAlign": "middle",
        "userSelect": "none"
    },
    "togglebutton label": {
        "userSelect": "none",
        "cursor": "pointer",
        "color": "rgba(0,0,0, 0.26)"
    },
    "togglebutton input": {
        "userSelect": "none"
    },
    "togglebutton toggle": {
        "userSelect": "none"
    },
    "form-groupis-focused togglebutton label": {
        "color": "rgba(0,0,0, 0.26)"
    },
    "form-groupis-focused togglebutton label:hover": {
        "color": "rgba(0,0,0, .54)"
    },
    "form-groupis-focused togglebutton label:focus": {
        "color": "rgba(0,0,0, .54)"
    },
    "fieldset[disabled] form-groupis-focused togglebutton label": {
        "color": "rgba(0,0,0, 0.26)"
    },
    "togglebutton label input[type=checkbox]": {
        "opacity": 0,
        "width": 0,
        "height": 0
    },
    "togglebutton label toggle": {
        "textAlign": "left",
        "marginLeft": 5,
        "content": "",
        "display": "inline-block",
        "width": 30,
        "height": 15,
        "backgroundColor": "rgba(80, 80, 80, 0.7)",
        "borderRadius": 15,
        "marginRight": 15,
        "transition": "background 0.3s ease",
        "verticalAlign": "middle"
    },
    "togglebutton label input[type=checkbox][disabled] + toggle": {
        "content": "",
        "display": "inline-block",
        "width": 30,
        "height": 15,
        "backgroundColor": "rgba(80, 80, 80, 0.7)",
        "borderRadius": 15,
        "marginRight": 15,
        "transition": "background 0.3s ease",
        "verticalAlign": "middle"
    },
    "togglebutton label toggle:after": {
        "content": "",
        "display": "inline-block",
        "width": 20,
        "height": 20,
        "backgroundColor": "#FFFFFF",
        "borderRadius": 20,
        "position": "relative",
        "boxShadow": "0 1px 3px 1px rgba(0, 0, 0, 0.4)",
        "left": -5,
        "top": -3,
        "border": "1px solid rgba(0,0,0, .54)",
        "transition": "left 0.3s ease, background 0.3s ease, box-shadow 0.1s ease"
    },
    "togglebutton label input[type=checkbox][disabled] + toggle:after": {
        "backgroundColor": "#BDBDBD"
    },
    "togglebutton label input[type=checkbox][disabled]:checked + toggle:after": {
        "backgroundColor": "#BDBDBD"
    },
    "togglebutton label input[type=checkbox] + toggle:active:after": {
        "boxShadow": "0 1px 3px 1px rgba(0, 0, 0, 0.4), 0 0 0 15px rgba(0, 0, 0, 0.1)"
    },
    "togglebutton label input[type=checkbox][disabled] + toggle:active:after": {
        "boxShadow": "0 1px 3px 1px rgba(0, 0, 0, 0.4), 0 0 0 15px rgba(0, 0, 0, 0.1)"
    },
    "togglebutton label input[type=checkbox]:checked + toggle:after": {
        "left": 15,
        "borderColor": "#9c27b0"
    },
    "togglebutton label input[type=checkbox]:checked + toggle": {
        "backgroundColor": "rgba(156, 39, 176, 0.7)"
    },
    "togglebutton label input[type=checkbox]:checked + toggle:active:after": {
        "boxShadow": "0 1px 3px 1px rgba(0, 0, 0, 0.4), 0 0 0 15px rgba(156, 39, 176, 0.1)"
    },
    "withripple": {
        "position": "relative"
    },
    "ripple-container": {
        "position": "absolute",
        "top": 0,
        "left": 0,
        "zIndex": 1,
        "width": "100%",
        "height": "100%",
        "overflow": "hidden",
        "borderRadius": "inherit",
        "pointerEvents": "none"
    },
    "disabled ripple-container": {
        "display": "none"
    },
    "ripple": {
        "position": "absolute",
        "width": 20,
        "height": 20,
        "marginLeft": -10,
        "marginTop": -10,
        "borderRadius": "100%",
        "backgroundColor": "rgba(0, 0, 0, 0.05)",
        "transform": "scale(1)",
        "transformOrigin": "50%",
        "opacity": 0,
        "pointerEvents": "none"
    },
    "rippleripple-on": {
        "transition": "opacity 0.15s ease-in 0s, transform 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.1s",
        "opacity": 0.1
    },
    "rippleripple-out": {
        "transition": "opacity 0.1s linear 0s !important",
        "opacity": 0
    },
    "section-dark nav-pills > li > a": {
        "color": "#999999"
    },
    "section-image nav-pills > li > a": {
        "color": "#999999"
    },
    "section-dark nav-pills > li > a:hover": {
        "backgroundColor": "#EEEEEE"
    },
    "section-dark nav-pills > li > a:focus": {
        "backgroundColor": "#EEEEEE"
    },
    "section-image nav-pills > li > a:hover": {
        "backgroundColor": "#EEEEEE"
    },
    "section-image nav-pills > li > a:focus": {
        "backgroundColor": "#EEEEEE"
    },
    "nav-pills > li > a": {
        "lineHeight": 24,
        "textTransform": "uppercase",
        "fontSize": 12,
        "fontWeight": "500",
        "minWidth": 100,
        "textAlign": "center",
        "color": "#555555",
        "transition": "all .3s"
    },
    "nav-pills > li > a:hover": {
        "backgroundColor": "rgba(200, 200, 200, 0.2)"
    },
    "nav-pills > li i": {
        "display": "block",
        "fontSize": 30,
        "paddingTop": 15,
        "paddingRight": 0,
        "paddingBottom": 15,
        "paddingLeft": 0
    },
    "nav-pills > liactive > a": {
        "backgroundColor": "#9c27b0",
        "color": "#FFFFFF",
        "boxShadow": "0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2)"
    },
    "nav-pills > liactive > a:focus": {
        "backgroundColor": "#9c27b0",
        "color": "#FFFFFF",
        "boxShadow": "0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2)"
    },
    "nav-pills > liactive > a:hover": {
        "backgroundColor": "#9c27b0",
        "color": "#FFFFFF",
        "boxShadow": "0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2)"
    },
    "nav-pills:not(nav-pills-icons) > li > a": {
        "borderRadius": 30
    },
    "nav-pillsnav-stacked > li + li": {
        "marginTop": 5
    },
    "nav-pillsnav-pills-info > liactive > a": {
        "backgroundColor": "#00bcd4",
        "boxShadow": "0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2)"
    },
    "nav-pillsnav-pills-info > liactive > a:focus": {
        "backgroundColor": "#00bcd4",
        "boxShadow": "0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2)"
    },
    "nav-pillsnav-pills-info > liactive > a:hover": {
        "backgroundColor": "#00bcd4",
        "boxShadow": "0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2)"
    },
    "nav-pillsnav-pills-success > liactive > a": {
        "backgroundColor": "#4caf50",
        "boxShadow": "0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2)"
    },
    "nav-pillsnav-pills-success > liactive > a:focus": {
        "backgroundColor": "#4caf50",
        "boxShadow": "0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2)"
    },
    "nav-pillsnav-pills-success > liactive > a:hover": {
        "backgroundColor": "#4caf50",
        "boxShadow": "0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2)"
    },
    "nav-pillsnav-pills-warning > liactive > a": {
        "backgroundColor": "#ff9800",
        "boxShadow": "0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2)"
    },
    "nav-pillsnav-pills-warning > liactive > a:focus": {
        "backgroundColor": "#ff9800",
        "boxShadow": "0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2)"
    },
    "nav-pillsnav-pills-warning > liactive > a:hover": {
        "backgroundColor": "#ff9800",
        "boxShadow": "0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2)"
    },
    "nav-pillsnav-pills-danger > liactive > a": {
        "backgroundColor": "#f44336",
        "boxShadow": "0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2)"
    },
    "nav-pillsnav-pills-danger > liactive > a:focus": {
        "backgroundColor": "#f44336",
        "boxShadow": "0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2)"
    },
    "nav-pillsnav-pills-danger > liactive > a:hover": {
        "backgroundColor": "#f44336",
        "boxShadow": "0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2)"
    },
    "tab-space": {
        "paddingTop": 20,
        "paddingRight": 0,
        "paddingBottom": 50,
        "paddingLeft": 0
    },
    "modal-content": {
        "boxShadow": "0 27px 24px 0 rgba(0, 0, 0, 0.2), 0 40px 77px 0 rgba(0, 0, 0, 0.22)",
        "borderRadius": 6,
        "border": "none"
    },
    "modal-content modal-header": {
        "borderBottom": "none",
        "paddingTop": 24,
        "paddingRight": 24,
        "paddingBottom": 0,
        "paddingLeft": 24
    },
    "modal-content modal-body": {
        "paddingTop": 24,
        "paddingRight": 24,
        "paddingBottom": 16,
        "paddingLeft": 24
    },
    "modal-content modal-footer": {
        "borderTop": "none",
        "paddingTop": 7,
        "paddingRight": 7,
        "paddingBottom": 7,
        "paddingLeft": 7
    },
    "modal-content modal-footertext-center": {
        "textAlign": "center"
    },
    "modal-content modal-footer button": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingLeft": 16,
        "paddingRight": 16,
        "width": "auto"
    },
    "modal-content modal-footer buttonpull-left": {
        "paddingLeft": 5,
        "paddingRight": 5,
        "position": "relative",
        "left": -5
    },
    "modal-content modal-footer button + button": {
        "marginBottom": 16
    },
    "modal-content modal-body + modal-footer": {
        "paddingTop": 0
    },
    "modal-backdrop": {
        "background": "rgba(0, 0, 0, 0.3)"
    },
    "modal modal-dialog": {
        "marginTop": 100
    },
    "modal modal-header close": {
        "color": "#999999"
    },
    "modal modal-header close:hover": {
        "opacity": 1
    },
    "modal modal-header close:focus": {
        "opacity": 1
    },
    "modal modal-header close i": {
        "fontSize": 16
    },
    "modal-notice instruction": {
        "marginBottom": 25
    },
    "modal-notice picture": {
        "maxWidth": 150
    },
    "modal-notice modal-content btn-raised": {
        "marginBottom": 15
    },
    "modal-small": {
        "width": 300
    },
    "modal-small modal-body": {
        "marginTop": 20
    },
    "navbar navbar-brand": {
        "position": "relative",
        "height": 50,
        "lineHeight": 30,
        "color": "inherit",
        "paddingTop": 10,
        "paddingRight": 15,
        "paddingBottom": 10,
        "paddingLeft": 15
    },
    "navbar navbar-brand:hover": {
        "color": "inherit",
        "backgroundColor": "transparent"
    },
    "navbar navbar-brand:focus": {
        "color": "inherit",
        "backgroundColor": "transparent"
    },
    "navbar notification": {
        "position": "absolute",
        "top": 5,
        "border": "1px solid #FFF",
        "right": 10,
        "fontSize": 9,
        "background": "#f44336",
        "color": "#FFFFFF",
        "minWidth": 20,
        "paddingTop": 0,
        "paddingRight": 5,
        "paddingBottom": 0,
        "paddingLeft": 5,
        "height": 20,
        "borderRadius": 10,
        "textAlign": "center",
        "lineHeight": 19,
        "verticalAlign": "middle",
        "display": "block"
    },
    "navbar navbar-text": {
        "color": "inherit",
        "marginTop": 15,
        "marginBottom": 15
    },
    "navbar navbar-nav > li > a": {
        "color": "inherit",
        "paddingTop": 15,
        "paddingBottom": 15,
        "fontWeight": "400",
        "fontSize": 12,
        "textTransform": "uppercase",
        "borderRadius": 3
    },
    "navbar navbar-nav > li > a:hover": {
        "color": "inherit",
        "backgroundColor": "transparent"
    },
    "navbar navbar-nav > li > a:focus": {
        "color": "inherit",
        "backgroundColor": "transparent"
    },
    "navbar navbar-nav > li > a material-icons": {
        "fontSize": 20
    },
    "navbar navbar-nav > li > a fa": {
        "fontSize": 20
    },
    "navbar navbar-nav > li > abtn:not(btn-just-icon) fa": {
        "position": "relative",
        "top": 2,
        "marginTop": -4,
        "marginRight": 4
    },
    "navbar navbar-nav > li > dropdown-menu": {
        "marginTop": -20
    },
    "navbar navbar-nav > liopen > dropdown-menu": {
        "marginTop": 0
    },
    "navbar navbar-nav > active > a": {
        "color": "inherit",
        "backgroundColor": "rgba(255, 255, 255, 0.1)"
    },
    "navbar navbar-nav > active > a:hover": {
        "color": "inherit",
        "backgroundColor": "rgba(255, 255, 255, 0.1)"
    },
    "navbar navbar-nav > active > a:focus": {
        "color": "inherit",
        "backgroundColor": "rgba(255, 255, 255, 0.1)"
    },
    "navbar navbar-nav > disabled > a": {
        "color": "inherit",
        "backgroundColor": "transparent",
        "opacity": 0.9
    },
    "navbar navbar-nav > disabled > a:hover": {
        "color": "inherit",
        "backgroundColor": "transparent",
        "opacity": 0.9
    },
    "navbar navbar-nav > disabled > a:focus": {
        "color": "inherit",
        "backgroundColor": "transparent",
        "opacity": 0.9
    },
    "navbar navbar-nav profile-photo": {
        "paddingTop": 0,
        "paddingRight": 5,
        "paddingBottom": 0,
        "paddingLeft": 5
    },
    "navbar navbar-nav profile-photo profile-photo-small": {
        "height": 40,
        "width": 40
    },
    "navbar navbar-toggle": {
        "border": 0
    },
    "navbar navbar-toggle:hover": {
        "backgroundColor": "transparent"
    },
    "navbar navbar-toggle:focus": {
        "backgroundColor": "transparent"
    },
    "navbar navbar-toggle icon-bar": {
        "backgroundColor": "inherit",
        "border": "1px solid"
    },
    "navbar navbar-default navbar-toggle": {
        "borderColor": "transparent"
    },
    "navbar navbar-inverse navbar-toggle": {
        "borderColor": "transparent"
    },
    "navbar navbar-collapse": {
        "borderTop": "none",
        "boxShadow": "none"
    },
    "navbar navbar-form": {
        "borderTop": "none",
        "boxShadow": "none",
        "marginTop": 4,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "navbar navbar-nav > open > a": {
        "backgroundColor": "transparent",
        "color": "inherit"
    },
    "navbar navbar-nav > open > a:hover": {
        "backgroundColor": "transparent",
        "color": "inherit"
    },
    "navbar navbar-nav > open > a:focus": {
        "backgroundColor": "transparent",
        "color": "inherit"
    },
    "navbarnavbar-default logo-container brand": {
        "color": "#555555"
    },
    "navbar navbar-link": {
        "color": "inherit"
    },
    "navbar navbar-link:hover": {
        "color": "inherit"
    },
    "navbar btn": {
        "marginTop": 0,
        "marginBottom": 0
    },
    "navbar btn-link": {
        "color": "inherit"
    },
    "navbar btn-link:hover": {
        "color": "inherit"
    },
    "navbar btn-link:focus": {
        "color": "inherit"
    },
    "navbar btn-link[disabled]:hover": {
        "color": "inherit"
    },
    "navbar btn-link[disabled]:focus": {
        "color": "inherit"
    },
    "fieldset[disabled] navbar btn-link:hover": {
        "color": "inherit"
    },
    "fieldset[disabled] navbar btn-link:focus": {
        "color": "inherit"
    },
    "navbar navbar-form form-group": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "navbar navbar-form form-group material-input:before": {
        "backgroundColor": "inherit"
    },
    "navbar navbar-form form-groupis-focused material-input:after": {
        "backgroundColor": "inherit"
    },
    "navbar navbar-form form-group form-control": {
        "borderColor": "inherit",
        "color": "inherit",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "height": 28,
        "fontSize": 14,
        "lineHeight": 1.42857
    },
    "navbar navbar-form form-control": {
        "borderColor": "inherit",
        "color": "inherit",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "height": 28,
        "fontSize": 14,
        "lineHeight": 1.42857
    },
    "navbarnavbar-default": {
        "backgroundColor": "#FFFFFF",
        "color": "#555555"
    },
    "navbar navbar-form form-group inputform-control::-moz-placeholder": {
        "color": "#555555"
    },
    "navbar navbar-form inputform-control::-moz-placeholder": {
        "color": "#555555"
    },
    "navbarnavbar-default navbar-form form-group inputform-control::-moz-placeholder": {
        "color": "#555555"
    },
    "navbarnavbar-default navbar-form inputform-control::-moz-placeholder": {
        "color": "#555555"
    },
    "navbar navbar-form form-group inputform-control:-ms-input-placeholder": {
        "color": "#555555"
    },
    "navbar navbar-form inputform-control:-ms-input-placeholder": {
        "color": "#555555"
    },
    "navbarnavbar-default navbar-form form-group inputform-control:-ms-input-placeholder": {
        "color": "#555555"
    },
    "navbarnavbar-default navbar-form inputform-control:-ms-input-placeholder": {
        "color": "#555555"
    },
    "navbar navbar-form form-group inputform-control::-webkit-input-placeholder": {
        "color": "#555555"
    },
    "navbar navbar-form inputform-control::-webkit-input-placeholder": {
        "color": "#555555"
    },
    "navbarnavbar-default navbar-form form-group inputform-control::-webkit-input-placeholder": {
        "color": "#555555"
    },
    "navbarnavbar-default navbar-form inputform-control::-webkit-input-placeholder": {
        "color": "#555555"
    },
    "navbar dropdown-menu": {
        "borderRadius": "3px !important"
    },
    "navbarnavbar-default dropdown-menu": {
        "borderRadius": "3px !important"
    },
    "navbar dropdown-menu li > a:hover": {
        "color": "#FFFFFF",
        "backgroundColor": "#FFFFFF",
        "boxShadow": "0 12px 20px -10px rgba(255, 255, 255, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 255, 255, 0.2)"
    },
    "navbar dropdown-menu li > a:focus": {
        "color": "#FFFFFF",
        "backgroundColor": "#FFFFFF",
        "boxShadow": "0 12px 20px -10px rgba(255, 255, 255, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 255, 255, 0.2)"
    },
    "navbarnavbar-default dropdown-menu li > a:hover": {
        "color": "#FFFFFF",
        "backgroundColor": "#FFFFFF",
        "boxShadow": "0 12px 20px -10px rgba(255, 255, 255, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 255, 255, 0.2)"
    },
    "navbarnavbar-default dropdown-menu li > a:focus": {
        "color": "#FFFFFF",
        "backgroundColor": "#FFFFFF",
        "boxShadow": "0 12px 20px -10px rgba(255, 255, 255, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 255, 255, 0.2)"
    },
    "navbar dropdown-menu active > a": {
        "backgroundColor": "#FFFFFF",
        "color": "#555555",
        "boxShadow": "0 12px 20px -10px rgba(255, 255, 255, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 255, 255, 0.2)"
    },
    "navbarnavbar-default dropdown-menu active > a": {
        "backgroundColor": "#FFFFFF",
        "color": "#555555",
        "boxShadow": "0 12px 20px -10px rgba(255, 255, 255, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 255, 255, 0.2)"
    },
    "navbar dropdown-menu active > a:hover": {
        "color": "#555555"
    },
    "navbar dropdown-menu active > a:focus": {
        "color": "#555555"
    },
    "navbarnavbar-default dropdown-menu active > a:hover": {
        "color": "#555555"
    },
    "navbarnavbar-default dropdown-menu active > a:focus": {
        "color": "#555555"
    },
    "navbarnavbar-inverse": {
        "backgroundColor": "#212121",
        "color": "#fff"
    },
    "navbarnavbar-inverse navbar-form form-group inputform-control::-moz-placeholder": {
        "color": "#fff"
    },
    "navbarnavbar-inverse navbar-form inputform-control::-moz-placeholder": {
        "color": "#fff"
    },
    "navbarnavbar-inverse navbar-form form-group inputform-control:-ms-input-placeholder": {
        "color": "#fff"
    },
    "navbarnavbar-inverse navbar-form inputform-control:-ms-input-placeholder": {
        "color": "#fff"
    },
    "navbarnavbar-inverse navbar-form form-group inputform-control::-webkit-input-placeholder": {
        "color": "#fff"
    },
    "navbarnavbar-inverse navbar-form inputform-control::-webkit-input-placeholder": {
        "color": "#fff"
    },
    "navbarnavbar-inverse dropdown-menu": {
        "borderRadius": "3px !important"
    },
    "navbarnavbar-inverse dropdown-menu li > a:hover": {
        "color": "#FFFFFF",
        "backgroundColor": "#212121",
        "boxShadow": "0 12px 20px -10px rgba(33, 33, 33, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(33, 33, 33, 0.2)"
    },
    "navbarnavbar-inverse dropdown-menu li > a:focus": {
        "color": "#FFFFFF",
        "backgroundColor": "#212121",
        "boxShadow": "0 12px 20px -10px rgba(33, 33, 33, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(33, 33, 33, 0.2)"
    },
    "navbarnavbar-inverse dropdown-menu active > a": {
        "backgroundColor": "#212121",
        "color": "#fff",
        "boxShadow": "0 12px 20px -10px rgba(33, 33, 33, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(33, 33, 33, 0.2)"
    },
    "navbarnavbar-inverse dropdown-menu active > a:hover": {
        "color": "#fff"
    },
    "navbarnavbar-inverse dropdown-menu active > a:focus": {
        "color": "#fff"
    },
    "navbarnavbar-primary": {
        "backgroundColor": "#9c27b0",
        "color": "#ffffff"
    },
    "navbarnavbar-primary navbar-form form-group inputform-control::-moz-placeholder": {
        "color": "#ffffff"
    },
    "navbarnavbar-primary navbar-form inputform-control::-moz-placeholder": {
        "color": "#ffffff"
    },
    "navbarnavbar-primary navbar-form form-group inputform-control:-ms-input-placeholder": {
        "color": "#ffffff"
    },
    "navbarnavbar-primary navbar-form inputform-control:-ms-input-placeholder": {
        "color": "#ffffff"
    },
    "navbarnavbar-primary navbar-form form-group inputform-control::-webkit-input-placeholder": {
        "color": "#ffffff"
    },
    "navbarnavbar-primary navbar-form inputform-control::-webkit-input-placeholder": {
        "color": "#ffffff"
    },
    "navbarnavbar-primary dropdown-menu": {
        "borderRadius": "3px !important"
    },
    "navbarnavbar-primary dropdown-menu li > a:hover": {
        "color": "#FFFFFF",
        "backgroundColor": "#9c27b0",
        "boxShadow": "0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2)"
    },
    "navbarnavbar-primary dropdown-menu li > a:focus": {
        "color": "#FFFFFF",
        "backgroundColor": "#9c27b0",
        "boxShadow": "0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2)"
    },
    "navbarnavbar-primary dropdown-menu active > a": {
        "backgroundColor": "#9c27b0",
        "color": "#ffffff",
        "boxShadow": "0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2)"
    },
    "navbarnavbar-primary dropdown-menu active > a:hover": {
        "color": "#ffffff"
    },
    "navbarnavbar-primary dropdown-menu active > a:focus": {
        "color": "#ffffff"
    },
    "navbarnavbar-success": {
        "backgroundColor": "#4caf50",
        "color": "#ffffff"
    },
    "navbarnavbar-success navbar-form form-group inputform-control::-moz-placeholder": {
        "color": "#ffffff"
    },
    "navbarnavbar-success navbar-form inputform-control::-moz-placeholder": {
        "color": "#ffffff"
    },
    "navbarnavbar-success navbar-form form-group inputform-control:-ms-input-placeholder": {
        "color": "#ffffff"
    },
    "navbarnavbar-success navbar-form inputform-control:-ms-input-placeholder": {
        "color": "#ffffff"
    },
    "navbarnavbar-success navbar-form form-group inputform-control::-webkit-input-placeholder": {
        "color": "#ffffff"
    },
    "navbarnavbar-success navbar-form inputform-control::-webkit-input-placeholder": {
        "color": "#ffffff"
    },
    "navbarnavbar-success dropdown-menu": {
        "borderRadius": "3px !important"
    },
    "navbarnavbar-success dropdown-menu li > a:hover": {
        "color": "#FFFFFF",
        "backgroundColor": "#4caf50",
        "boxShadow": "0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2)"
    },
    "navbarnavbar-success dropdown-menu li > a:focus": {
        "color": "#FFFFFF",
        "backgroundColor": "#4caf50",
        "boxShadow": "0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2)"
    },
    "navbarnavbar-success dropdown-menu active > a": {
        "backgroundColor": "#4caf50",
        "color": "#ffffff",
        "boxShadow": "0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2)"
    },
    "navbarnavbar-success dropdown-menu active > a:hover": {
        "color": "#ffffff"
    },
    "navbarnavbar-success dropdown-menu active > a:focus": {
        "color": "#ffffff"
    },
    "navbarnavbar-info": {
        "backgroundColor": "#00bcd4",
        "color": "#ffffff"
    },
    "navbarnavbar-info navbar-form form-group inputform-control::-moz-placeholder": {
        "color": "#ffffff"
    },
    "navbarnavbar-info navbar-form inputform-control::-moz-placeholder": {
        "color": "#ffffff"
    },
    "navbarnavbar-info navbar-form form-group inputform-control:-ms-input-placeholder": {
        "color": "#ffffff"
    },
    "navbarnavbar-info navbar-form inputform-control:-ms-input-placeholder": {
        "color": "#ffffff"
    },
    "navbarnavbar-info navbar-form form-group inputform-control::-webkit-input-placeholder": {
        "color": "#ffffff"
    },
    "navbarnavbar-info navbar-form inputform-control::-webkit-input-placeholder": {
        "color": "#ffffff"
    },
    "navbarnavbar-info dropdown-menu": {
        "borderRadius": "3px !important"
    },
    "navbarnavbar-info dropdown-menu li > a:hover": {
        "color": "#FFFFFF",
        "backgroundColor": "#00bcd4",
        "boxShadow": "0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2)"
    },
    "navbarnavbar-info dropdown-menu li > a:focus": {
        "color": "#FFFFFF",
        "backgroundColor": "#00bcd4",
        "boxShadow": "0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2)"
    },
    "navbarnavbar-info dropdown-menu active > a": {
        "backgroundColor": "#00bcd4",
        "color": "#ffffff",
        "boxShadow": "0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2)"
    },
    "navbarnavbar-info dropdown-menu active > a:hover": {
        "color": "#ffffff"
    },
    "navbarnavbar-info dropdown-menu active > a:focus": {
        "color": "#ffffff"
    },
    "navbarnavbar-warning": {
        "backgroundColor": "#ff9800",
        "color": "#ffffff"
    },
    "navbarnavbar-warning navbar-form form-group inputform-control::-moz-placeholder": {
        "color": "#ffffff"
    },
    "navbarnavbar-warning navbar-form inputform-control::-moz-placeholder": {
        "color": "#ffffff"
    },
    "navbarnavbar-warning navbar-form form-group inputform-control:-ms-input-placeholder": {
        "color": "#ffffff"
    },
    "navbarnavbar-warning navbar-form inputform-control:-ms-input-placeholder": {
        "color": "#ffffff"
    },
    "navbarnavbar-warning navbar-form form-group inputform-control::-webkit-input-placeholder": {
        "color": "#ffffff"
    },
    "navbarnavbar-warning navbar-form inputform-control::-webkit-input-placeholder": {
        "color": "#ffffff"
    },
    "navbarnavbar-warning dropdown-menu": {
        "borderRadius": "3px !important"
    },
    "navbarnavbar-warning dropdown-menu li > a:hover": {
        "color": "#FFFFFF",
        "backgroundColor": "#ff9800",
        "boxShadow": "0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2)"
    },
    "navbarnavbar-warning dropdown-menu li > a:focus": {
        "color": "#FFFFFF",
        "backgroundColor": "#ff9800",
        "boxShadow": "0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2)"
    },
    "navbarnavbar-warning dropdown-menu active > a": {
        "backgroundColor": "#ff9800",
        "color": "#ffffff",
        "boxShadow": "0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2)"
    },
    "navbarnavbar-warning dropdown-menu active > a:hover": {
        "color": "#ffffff"
    },
    "navbarnavbar-warning dropdown-menu active > a:focus": {
        "color": "#ffffff"
    },
    "navbarnavbar-danger": {
        "backgroundColor": "#f44336",
        "color": "#ffffff"
    },
    "navbarnavbar-danger navbar-form form-group inputform-control::-moz-placeholder": {
        "color": "#ffffff"
    },
    "navbarnavbar-danger navbar-form inputform-control::-moz-placeholder": {
        "color": "#ffffff"
    },
    "navbarnavbar-danger navbar-form form-group inputform-control:-ms-input-placeholder": {
        "color": "#ffffff"
    },
    "navbarnavbar-danger navbar-form inputform-control:-ms-input-placeholder": {
        "color": "#ffffff"
    },
    "navbarnavbar-danger navbar-form form-group inputform-control::-webkit-input-placeholder": {
        "color": "#ffffff"
    },
    "navbarnavbar-danger navbar-form inputform-control::-webkit-input-placeholder": {
        "color": "#ffffff"
    },
    "navbarnavbar-danger dropdown-menu": {
        "borderRadius": "3px !important"
    },
    "navbarnavbar-danger dropdown-menu li > a:hover": {
        "color": "#FFFFFF",
        "backgroundColor": "#f44336",
        "boxShadow": "0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2)"
    },
    "navbarnavbar-danger dropdown-menu li > a:focus": {
        "color": "#FFFFFF",
        "backgroundColor": "#f44336",
        "boxShadow": "0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2)"
    },
    "navbarnavbar-danger dropdown-menu active > a": {
        "backgroundColor": "#f44336",
        "color": "#ffffff",
        "boxShadow": "0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2)"
    },
    "navbarnavbar-danger dropdown-menu active > a:hover": {
        "color": "#ffffff"
    },
    "navbarnavbar-danger dropdown-menu active > a:focus": {
        "color": "#ffffff"
    },
    "navbarnavbar-rose": {
        "backgroundColor": "#e91e63",
        "color": "#ffffff"
    },
    "navbarnavbar-rose navbar-form form-group inputform-control::-moz-placeholder": {
        "color": "#ffffff"
    },
    "navbarnavbar-rose navbar-form inputform-control::-moz-placeholder": {
        "color": "#ffffff"
    },
    "navbarnavbar-rose navbar-form form-group inputform-control:-ms-input-placeholder": {
        "color": "#ffffff"
    },
    "navbarnavbar-rose navbar-form inputform-control:-ms-input-placeholder": {
        "color": "#ffffff"
    },
    "navbarnavbar-rose navbar-form form-group inputform-control::-webkit-input-placeholder": {
        "color": "#ffffff"
    },
    "navbarnavbar-rose navbar-form inputform-control::-webkit-input-placeholder": {
        "color": "#ffffff"
    },
    "navbarnavbar-rose dropdown-menu": {
        "borderRadius": "3px !important"
    },
    "navbarnavbar-rose dropdown-menu li > a:hover": {
        "color": "#FFFFFF",
        "backgroundColor": "#e91e63",
        "boxShadow": "0 12px 20px -10px rgba(233, 30, 99, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(233, 30, 99, 0.2)"
    },
    "navbarnavbar-rose dropdown-menu li > a:focus": {
        "color": "#FFFFFF",
        "backgroundColor": "#e91e63",
        "boxShadow": "0 12px 20px -10px rgba(233, 30, 99, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(233, 30, 99, 0.2)"
    },
    "navbarnavbar-rose dropdown-menu active > a": {
        "backgroundColor": "#e91e63",
        "color": "#ffffff",
        "boxShadow": "0 12px 20px -10px rgba(233, 30, 99, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(233, 30, 99, 0.2)"
    },
    "navbarnavbar-rose dropdown-menu active > a:hover": {
        "color": "#ffffff"
    },
    "navbarnavbar-rose dropdown-menu active > a:focus": {
        "color": "#ffffff"
    },
    "navbar-inverse": {
        "backgroundColor": "#3f51b5"
    },
    "navbarnavbar-transparent": {
        "backgroundColor": "transparent",
        "boxShadow": "none",
        "borderBottom": 0
    },
    "navbarnavbar-transparent logo-container brand": {
        "color": "#FFFFFF"
    },
    "navbar-fixed-top": {
        "borderRadius": 0
    },
    "navbar alert": {
        "borderRadius": 0,
        "left": 0,
        "position": "absolute",
        "right": 0,
        "top": 85,
        "width": "100%",
        "zIndex": 3,
        "transition": "all 0.3s"
    },
    "nav-align-center": {
        "textAlign": "center"
    },
    "nav-align-center nav-pills": {
        "display": "inline-block"
    },
    "navbar-absolute": {
        "position": "absolute",
        "width": "100%",
        "paddingTop": 10,
        "zIndex": 1029
    },
    "popover": {
        "color": "#555555",
        "lineHeight": 1.5,
        "background": "#FFFFFF",
        "border": "none",
        "borderRadius": 3,
        "boxShadow": "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "tooltip-inner": {
        "color": "#555555",
        "lineHeight": 1.5,
        "background": "#FFFFFF",
        "border": "none",
        "borderRadius": 3,
        "boxShadow": "0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2)",
        "paddingTop": 10,
        "paddingRight": 15,
        "paddingBottom": 10,
        "paddingLeft": 15,
        "minWidth": 130
    },
    "popoverleft > arrow": {
        "border": "none"
    },
    "popoverright > arrow": {
        "border": "none"
    },
    "popovertop > arrow": {
        "border": "none"
    },
    "popoverbottom > arrow": {
        "border": "none"
    },
    "popover-title": {
        "backgroundColor": "#FFFFFF",
        "border": "none",
        "paddingTop": 15,
        "paddingRight": 15,
        "paddingBottom": 5,
        "paddingLeft": 15,
        "fontSize": 1.3
    },
    "popover-content": {
        "paddingTop": 10,
        "paddingRight": 15,
        "paddingBottom": 15,
        "paddingLeft": 15,
        "lineHeight": 1.4
    },
    "tooltipin": {
        "opacity": 1,
        "WebkitTransform": "translate3d(0, 0px, 0)",
        "MozTransform": "translate3d(0, 0px, 0)",
        "OTransform": "translate3d(0, 0px, 0)",
        "MsTransform": "translate3d(0, 0px, 0)",
        "transform": "translate3d(0, 0px, 0)"
    },
    "tooltip": {
        "opacity": 0,
        "transition": "opacity, transform .2s ease",
        "WebkitTransform": "translate3d(0, 5px, 0)",
        "MozTransform": "translate3d(0, 5px, 0)",
        "OTransform": "translate3d(0, 5px, 0)",
        "MsTransform": "translate3d(0, 5px, 0)",
        "transform": "translate3d(0, 5px, 0)"
    },
    "tooltipleft tooltip-arrow": {
        "borderLeftColor": "#FFFFFF"
    },
    "tooltipright tooltip-arrow": {
        "borderRightColor": "#FFFFFF"
    },
    "tooltiptop tooltip-arrow": {
        "borderTopColor": "#FFFFFF"
    },
    "tooltipbottom tooltip-arrow": {
        "borderBottomColor": "#FFFFFF"
    },
    "footer": {
        "paddingTop": 15,
        "paddingRight": 0,
        "paddingBottom": 15,
        "paddingLeft": 0
    },
    "footer ul": {
        "marginBottom": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "listStyle": "none"
    },
    "footer ul li": {
        "display": "inline-block"
    },
    "footer ul li a": {
        "color": "inherit",
        "paddingTop": 15,
        "paddingRight": 15,
        "paddingBottom": 15,
        "paddingLeft": 15,
        "fontWeight": "500",
        "fontSize": 12,
        "textTransform": "uppercase",
        "borderRadius": 3,
        "textDecoration": "none",
        "position": "relative",
        "display": "block"
    },
    "footer ul li a:hover": {
        "textDecoration": "none"
    },
    "footer copyright": {
        "paddingTop": 15,
        "paddingRight": 0,
        "paddingBottom": 15,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "footer copyright material-icons": {
        "fontSize": 18,
        "position": "relative",
        "top": 3
    },
    "footer btn": {
        "marginTop": 0,
        "marginBottom": 0
    },
    "dropdown-menu": {
        "border": 0,
        "boxShadow": "0 2px 5px 0 rgba(0, 0, 0, 0.26)"
    },
    "dropdown-menu divider": {
        "backgroundColor": "rgba(0, 0, 0, 0.12)",
        "marginTop": 5,
        "marginRight": 0,
        "marginBottom": 5,
        "marginLeft": 0
    },
    "dropdown-menu li > a": {
        "fontSize": 13,
        "paddingTop": 10,
        "paddingRight": 20,
        "paddingBottom": 10,
        "paddingLeft": 20,
        "marginTop": 0,
        "marginRight": 5,
        "marginBottom": 0,
        "marginLeft": 5,
        "borderRadius": 2,
        "WebkitTransition": "all 150ms linear",
        "MozTransition": "all 150ms linear",
        "OTransition": "all 150ms linear",
        "MsTransition": "all 150ms linear",
        "transition": "all 150ms linear"
    },
    "dropdown-menu li > a:hover": {
        "boxShadow": "0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2)"
    },
    "dropdown-menu li > a:focus": {
        "boxShadow": "0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2)"
    },
    "dropdown-menudropdown-with-icons li > a": {
        "paddingTop": 12,
        "paddingRight": 20,
        "paddingBottom": 12,
        "paddingLeft": 12
    },
    "dropdown-menudropdown-with-icons li > a material-icons": {
        "verticalAlign": "middle",
        "fontSize": 24,
        "position": "relative",
        "marginTop": -4,
        "top": 1,
        "marginRight": 12,
        "opacity": 0.5
    },
    "dropdown-menu li": {
        "position": "relative"
    },
    "dropdown-menu li a:hover": {
        "backgroundColor": "#9c27b0",
        "color": "#FFFFFF"
    },
    "dropdown-menu li a:focus": {
        "backgroundColor": "#9c27b0",
        "color": "#FFFFFF"
    },
    "dropdown-menu li a:active": {
        "backgroundColor": "#9c27b0",
        "color": "#FFFFFF"
    },
    "navbar dropdown-menu li a:hover": {
        "backgroundColor": "#2d6cdf",
        "color": "#FFFFFF",
        "boxShadow": "0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2)"
    },
    "navbar dropdown-menu li a:focus": {
        "backgroundColor": "#2d6cdf",
        "color": "#FFFFFF",
        "boxShadow": "0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2)"
    },
    "navbar dropdown-menu li a:active": {
        "backgroundColor": "#2d6cdf",
        "color": "#FFFFFF",
        "boxShadow": "0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2)"
    },
    "navbarnavbar-default dropdown-menu li a:hover": {
        "backgroundColor": "#2d6cdf",
        "color": "#FFFFFF",
        "boxShadow": "0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2)"
    },
    "navbarnavbar-default dropdown-menu li a:focus": {
        "backgroundColor": "#2d6cdf",
        "color": "#FFFFFF",
        "boxShadow": "0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2)"
    },
    "navbarnavbar-default dropdown-menu li a:active": {
        "backgroundColor": "#2d6cdf",
        "color": "#FFFFFF",
        "boxShadow": "0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2)"
    },
    "card": {
        "display": "inline-block",
        "position": "relative",
        "width": "100%",
        "marginTop": 25,
        "marginRight": 0,
        "marginBottom": 25,
        "marginLeft": 0,
        "boxShadow": "0 1px 4px 0 rgba(0, 0, 0, 0.14)",
        "borderRadius": 3,
        "color": "rgba(0,0,0, 0.87)",
        "background": "#fff"
    },
    "card card-height-indicator": {
        "marginTop": "100%"
    },
    "card title": {
        "marginTop": 0,
        "marginBottom": 5
    },
    "card card-image": {
        "height": "60%",
        "position": "relative",
        "overflow": "hidden",
        "marginLeft": 15,
        "marginRight": 15,
        "marginTop": -30,
        "borderRadius": 6
    },
    "card card-image img": {
        "width": "100%",
        "height": "100%",
        "borderRadius": 6,
        "pointerEvents": "none"
    },
    "card card-image card-title": {
        "position": "absolute",
        "bottom": 15,
        "left": 15,
        "color": "#fff",
        "fontSize": 1.3,
        "textShadow": "0 2px 5px rgba(33, 33, 33, 0.5)"
    },
    "card category:not([class*=\"text-\"])": {
        "color": "#999999"
    },
    "card card-content": {
        "paddingTop": 15,
        "paddingRight": 20,
        "paddingBottom": 15,
        "paddingLeft": 20
    },
    "card card-content category": {
        "marginBottom": 0
    },
    "card card-header": {
        "boxShadow": "0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
        "marginTop": -20,
        "marginRight": 15,
        "marginBottom": 0,
        "marginLeft": 15,
        "borderRadius": 3,
        "paddingTop": 15,
        "paddingRight": 15,
        "paddingBottom": 15,
        "paddingLeft": 15,
        "backgroundColor": "#999999"
    },
    "card card-header title": {
        "color": "#FFFFFF"
    },
    "card card-header category": {
        "marginBottom": 0,
        "color": "rgba(255, 255, 255, 0.62)"
    },
    "card card-headercard-chart": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "minHeight": 160
    },
    "card card-headercard-chart + content h4": {
        "marginTop": 0
    },
    "card card-header ct-label": {
        "color": "rgba(255, 255, 255, 0.7)"
    },
    "card card-header ct-grid": {
        "stroke": "rgba(255, 255, 255, 0.2)"
    },
    "card card-header ct-series-a ct-point": {
        "stroke": "rgba(255, 255, 255, 0.8)"
    },
    "card card-header ct-series-a ct-line": {
        "stroke": "rgba(255, 255, 255, 0.8)"
    },
    "card card-header ct-series-a ct-bar": {
        "stroke": "rgba(255, 255, 255, 0.8)"
    },
    "card card-header ct-series-a ct-slice-donut": {
        "stroke": "rgba(255, 255, 255, 0.8)"
    },
    "card card-header ct-series-a ct-slice-pie": {
        "fill": "rgba(255, 255, 255, 0.4)"
    },
    "card card-header ct-series-a ct-area": {
        "fill": "rgba(255, 255, 255, 0.4)"
    },
    "card chart-title": {
        "position": "absolute",
        "top": 25,
        "width": "100%",
        "textAlign": "center"
    },
    "card chart-title h3": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "color": "#FFFFFF"
    },
    "card chart-title h6": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "color": "rgba(255, 255, 255, 0.4)"
    },
    "card card-footer": {
        "marginTop": 0,
        "marginRight": 20,
        "marginBottom": 10,
        "marginLeft": 20,
        "paddingTop": 10,
        "borderTop": "1px solid #eeeeee"
    },
    "card card-footer content": {
        "display": "block"
    },
    "card card-footer div": {
        "display": "inline-block"
    },
    "card card-footer author": {
        "color": "#999999"
    },
    "card card-footer stats": {
        "lineHeight": 22,
        "color": "#999999",
        "fontSize": 12
    },
    "card card-footer stats material-icons": {
        "position": "relative",
        "top": 4,
        "fontSize": 16
    },
    "card card-footer h6": {
        "color": "#999999"
    },
    "card img": {
        "width": "100%",
        "height": "auto"
    },
    "card category material-icons": {
        "position": "relative",
        "top": 6,
        "lineHeight": 0
    },
    "card category-social fa": {
        "fontSize": 24,
        "position": "relative",
        "marginTop": -4,
        "top": 2,
        "marginRight": 5
    },
    "card author avatar": {
        "width": 30,
        "height": 30,
        "overflow": "hidden",
        "borderRadius": "50%",
        "marginRight": 5
    },
    "card author a": {
        "color": "#3C4858",
        "textDecoration": "none"
    },
    "card author a ripple-container": {
        "display": "none"
    },
    "card table": {
        "marginBottom": 0
    },
    "card table tr:first-child td": {
        "borderTop": "none"
    },
    "card [data-background-color=\"purple\"]": {
        "background": "linear-gradient(60deg, #ab47bc, #8e24aa)",
        "boxShadow": "0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2)"
    },
    "card [data-background-color=\"blue\"]": {
        "background": "linear-gradient(60deg, #26c6da, #00acc1)",
        "boxShadow": "0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2)"
    },
    "card [data-background-color=\"green\"]": {
        "background": "linear-gradient(60deg, #66bb6a, #43a047)",
        "boxShadow": "0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2)"
    },
    "card [data-background-color=\"orange\"]": {
        "background": "linear-gradient(60deg, #ffa726, #fb8c00)",
        "boxShadow": "0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2)"
    },
    "card [data-background-color=\"red\"]": {
        "background": "linear-gradient(60deg, #ef5350, #e53935)",
        "boxShadow": "0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2)"
    },
    "card [data-background-color]": {
        "color": "#FFFFFF"
    },
    "card [data-background-color] a": {
        "color": "#FFFFFF"
    },
    "card-stats title": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "card-stats card-header": {
        "float": "left",
        "textAlign": "center"
    },
    "card-stats card-header i": {
        "fontSize": 36,
        "lineHeight": 56,
        "width": 56,
        "height": 56
    },
    "card-stats card-content": {
        "textAlign": "right",
        "paddingTop": 10
    },
    "card-nav-tabs header-raised": {
        "marginTop": -30
    },
    "card-nav-tabs nav-tabs": {
        "background": "transparent",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "card-nav-tabs nav-tabs-title": {
        "float": "left",
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 0,
        "lineHeight": 24
    },
    "card-plain": {
        "background": "transparent",
        "boxShadow": "none"
    },
    "card-plain card-header": {
        "marginLeft": 0,
        "marginRight": 0
    },
    "card-plain content": {
        "paddingLeft": 5,
        "paddingRight": 5
    },
    "card-plain card-image": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "borderRadius": 3
    },
    "card-plain card-image img": {
        "borderRadius": 3
    },
    "iframe-container": {
        "marginTop": 0,
        "marginRight": -20,
        "marginBottom": 0,
        "marginLeft": -20
    },
    "iframe-container iframe": {
        "width": "100%",
        "height": 500,
        "border": 0,
        "boxShadow": "0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
    },
    "card-profile": {
        "marginTop": 30,
        "textAlign": "center"
    },
    "card-testimonial": {
        "marginTop": 30,
        "textAlign": "center"
    },
    "card-profile btn-just-iconbtn-raised": {
        "marginLeft": 6,
        "marginRight": 6
    },
    "card-testimonial btn-just-iconbtn-raised": {
        "marginLeft": 6,
        "marginRight": 6
    },
    "card-profile card-avatar": {
        "maxWidth": 130,
        "maxHeight": 130,
        "marginTop": -50,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "borderRadius": "50%",
        "overflow": "hidden",
        "boxShadow": "0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
    },
    "card-testimonial card-avatar": {
        "maxWidth": 130,
        "maxHeight": 130,
        "marginTop": -50,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "borderRadius": "50%",
        "overflow": "hidden",
        "boxShadow": "0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
    },
    "card-profile card-avatar + content": {
        "marginTop": 15
    },
    "card-testimonial card-avatar + content": {
        "marginTop": 15
    },
    "card-profilecard-plain card-avatar": {
        "marginTop": 0
    },
    "card-testimonialcard-plain card-avatar": {
        "marginTop": 0
    },
    "nav-tabs": {
        "background": "#9c27b0",
        "border": 0,
        "borderRadius": 3,
        "paddingTop": 0,
        "paddingRight": 15,
        "paddingBottom": 0,
        "paddingLeft": 15
    },
    "nav-tabs > li > a": {
        "color": "#FFFFFF !important",
        "border": "0 !important",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "borderRadius": 3,
        "lineHeight": 24,
        "textTransform": "uppercase",
        "fontSize": 12,
        "backgroundColor": "transparent",
        "fontWeight": "500"
    },
    "nav-tabs > li > a:hover": {
        "backgroundColor": "transparent",
        "border": "0 !important",
        "color": "#FFFFFF !important",
        "fontWeight": "500"
    },
    "nav-tabs > li > a:focus": {
        "backgroundColor": "transparent",
        "border": "0 !important",
        "color": "#FFFFFF !important",
        "fontWeight": "500"
    },
    "nav-tabs > lidisabled > a": {
        "color": "rgba(255, 255, 255, 0.5)"
    },
    "nav-tabs > lidisabled > a:hover": {
        "color": "rgba(255, 255, 255, 0.5)"
    },
    "nav-tabs > li material-icons": {
        "marginTop": -1,
        "marginRight": 5,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "nav-tabs > liactive > a": {
        "backgroundColor": "rgba(255, 255, 255, 0.2)",
        "transition": "background-color .1s .2s"
    },
    "nav-tabs > liactive > a:hover": {
        "backgroundColor": "rgba(255, 255, 255, 0.2)",
        "transition": "background-color .1s .2s"
    },
    "nav-tabs > liactive > a:focus": {
        "backgroundColor": "rgba(255, 255, 255, 0.2)",
        "transition": "background-color .1s .2s"
    },
    "ct-label": {
        "fill": "rgba(0, 0, 0, 0.4)",
        "color": "rgba(0, 0, 0, 0.4)",
        "fontSize": 1.3,
        "lineHeight": 1
    },
    "ct-chart-line ct-label": {
        "display": "flex"
    },
    "ct-chart-bar ct-label": {
        "display": "flex"
    },
    "ct-labelct-horizontalct-start": {
        "WebkitBoxAlign": "flex-end",
        "WebkitAlignItems": "flex-end",
        "MsFlexAlign": "flex-end",
        "alignItems": "flex-end",
        "WebkitBoxPack": "flex-start",
        "WebkitJustifyContent": "flex-start",
        "MsFlexPack": "flex-start",
        "justifyContent": "flex-start",
        "textAlign": "left",
        "textAnchor": "start"
    },
    "ct-labelct-horizontalct-end": {
        "WebkitBoxAlign": "flex-start",
        "WebkitAlignItems": "flex-start",
        "MsFlexAlign": "flex-start",
        "alignItems": "flex-start",
        "WebkitBoxPack": "flex-start",
        "WebkitJustifyContent": "flex-start",
        "MsFlexPack": "flex-start",
        "justifyContent": "flex-start",
        "textAlign": "left",
        "textAnchor": "start"
    },
    "ct-labelct-verticalct-start": {
        "WebkitBoxAlign": "flex-end",
        "WebkitAlignItems": "flex-end",
        "MsFlexAlign": "flex-end",
        "alignItems": "flex-end",
        "WebkitBoxPack": "flex-end",
        "WebkitJustifyContent": "flex-end",
        "MsFlexPack": "flex-end",
        "justifyContent": "flex-end",
        "textAlign": "right",
        "textAnchor": "end"
    },
    "ct-labelct-verticalct-end": {
        "WebkitBoxAlign": "flex-end",
        "WebkitAlignItems": "flex-end",
        "MsFlexAlign": "flex-end",
        "alignItems": "flex-end",
        "WebkitBoxPack": "flex-start",
        "WebkitJustifyContent": "flex-start",
        "MsFlexPack": "flex-start",
        "justifyContent": "flex-start",
        "textAlign": "left",
        "textAnchor": "start"
    },
    "ct-chart-bar ct-labelct-horizontalct-start": {
        "WebkitBoxAlign": "flex-end",
        "WebkitAlignItems": "flex-end",
        "MsFlexAlign": "flex-end",
        "alignItems": "flex-end",
        "WebkitBoxPack": "center",
        "WebkitJustifyContent": "center",
        "MsFlexPack": "center",
        "justifyContent": "center",
        "textAlign": "center",
        "textAnchor": "start"
    },
    "ct-chart-bar ct-labelct-horizontalct-end": {
        "WebkitBoxAlign": "flex-start",
        "WebkitAlignItems": "flex-start",
        "MsFlexAlign": "flex-start",
        "alignItems": "flex-start",
        "WebkitBoxPack": "center",
        "WebkitJustifyContent": "center",
        "MsFlexPack": "center",
        "justifyContent": "center",
        "textAlign": "center",
        "textAnchor": "start"
    },
    "ct-chart-barct-horizontal-bars ct-labelct-horizontalct-start": {
        "WebkitBoxAlign": "flex-end",
        "WebkitAlignItems": "flex-end",
        "MsFlexAlign": "flex-end",
        "alignItems": "flex-end",
        "WebkitBoxPack": "flex-start",
        "WebkitJustifyContent": "flex-start",
        "MsFlexPack": "flex-start",
        "justifyContent": "flex-start",
        "textAlign": "left",
        "textAnchor": "start"
    },
    "ct-chart-barct-horizontal-bars ct-labelct-horizontalct-end": {
        "WebkitBoxAlign": "flex-start",
        "WebkitAlignItems": "flex-start",
        "MsFlexAlign": "flex-start",
        "alignItems": "flex-start",
        "WebkitBoxPack": "flex-start",
        "WebkitJustifyContent": "flex-start",
        "MsFlexPack": "flex-start",
        "justifyContent": "flex-start",
        "textAlign": "left",
        "textAnchor": "start"
    },
    "ct-chart-barct-horizontal-bars ct-labelct-verticalct-start": {
        "WebkitBoxAlign": "center",
        "WebkitAlignItems": "center",
        "MsFlexAlign": "center",
        "alignItems": "center",
        "WebkitBoxPack": "flex-end",
        "WebkitJustifyContent": "flex-end",
        "MsFlexPack": "flex-end",
        "justifyContent": "flex-end",
        "textAlign": "right",
        "textAnchor": "end"
    },
    "ct-chart-barct-horizontal-bars ct-labelct-verticalct-end": {
        "WebkitBoxAlign": "center",
        "WebkitAlignItems": "center",
        "MsFlexAlign": "center",
        "alignItems": "center",
        "WebkitBoxPack": "flex-start",
        "WebkitJustifyContent": "flex-start",
        "MsFlexPack": "flex-start",
        "justifyContent": "flex-start",
        "textAlign": "left",
        "textAnchor": "end"
    },
    "ct-grid": {
        "stroke": "rgba(0, 0, 0, 0.2)",
        "strokeWidth": 1,
        "strokeDasharray": 2
    },
    "ct-point": {
        "strokeWidth": 8,
        "strokeLinecap": "round"
    },
    "ct-line": {
        "fill": "none",
        "strokeWidth": 3
    },
    "ct-area": {
        "stroke": "none",
        "fillOpacity": 0.8
    },
    "ct-bar": {
        "fill": "none",
        "strokeWidth": 10
    },
    "ct-slice-donut": {
        "fill": "none",
        "strokeWidth": 60
    },
    "ct-series-a ct-point": {
        "stroke": "#00bcd4"
    },
    "ct-series-a ct-line": {
        "stroke": "#00bcd4"
    },
    "ct-series-a ct-bar": {
        "stroke": "#00bcd4"
    },
    "ct-series-a ct-slice-donut": {
        "stroke": "#00bcd4"
    },
    "ct-series-a ct-slice-pie": {
        "fill": "#00bcd4"
    },
    "ct-series-a ct-area": {
        "fill": "#00bcd4"
    },
    "ct-series-b ct-point": {
        "stroke": "#f44336"
    },
    "ct-series-b ct-line": {
        "stroke": "#f44336"
    },
    "ct-series-b ct-bar": {
        "stroke": "#f44336"
    },
    "ct-series-b ct-slice-donut": {
        "stroke": "#f44336"
    },
    "ct-series-b ct-slice-pie": {
        "fill": "#f44336"
    },
    "ct-series-b ct-area": {
        "fill": "#f44336"
    },
    "ct-series-c ct-point": {
        "stroke": "#ff9800"
    },
    "ct-series-c ct-line": {
        "stroke": "#ff9800"
    },
    "ct-series-c ct-bar": {
        "stroke": "#ff9800"
    },
    "ct-series-c ct-slice-donut": {
        "stroke": "#ff9800"
    },
    "ct-series-c ct-slice-pie": {
        "fill": "#ff9800"
    },
    "ct-series-c ct-area": {
        "fill": "#ff9800"
    },
    "ct-series-d ct-point": {
        "stroke": "#9c27b0"
    },
    "ct-series-d ct-line": {
        "stroke": "#9c27b0"
    },
    "ct-series-d ct-bar": {
        "stroke": "#9c27b0"
    },
    "ct-series-d ct-slice-donut": {
        "stroke": "#9c27b0"
    },
    "ct-series-d ct-slice-pie": {
        "fill": "#9c27b0"
    },
    "ct-series-d ct-area": {
        "fill": "#9c27b0"
    },
    "ct-series-e ct-point": {
        "stroke": "#4caf50"
    },
    "ct-series-e ct-line": {
        "stroke": "#4caf50"
    },
    "ct-series-e ct-bar": {
        "stroke": "#4caf50"
    },
    "ct-series-e ct-slice-donut": {
        "stroke": "#4caf50"
    },
    "ct-series-e ct-slice-pie": {
        "fill": "#4caf50"
    },
    "ct-series-e ct-area": {
        "fill": "#4caf50"
    },
    "ct-series-f ct-point": {
        "stroke": "#9C9B99"
    },
    "ct-series-f ct-line": {
        "stroke": "#9C9B99"
    },
    "ct-series-f ct-bar": {
        "stroke": "#9C9B99"
    },
    "ct-series-f ct-slice-donut": {
        "stroke": "#9C9B99"
    },
    "ct-series-f ct-slice-pie": {
        "fill": "#9C9B99"
    },
    "ct-series-f ct-area": {
        "fill": "#9C9B99"
    },
    "ct-series-g ct-point": {
        "stroke": "#999999"
    },
    "ct-series-g ct-line": {
        "stroke": "#999999"
    },
    "ct-series-g ct-bar": {
        "stroke": "#999999"
    },
    "ct-series-g ct-slice-donut": {
        "stroke": "#999999"
    },
    "ct-series-g ct-slice-pie": {
        "fill": "#999999"
    },
    "ct-series-g ct-area": {
        "fill": "#999999"
    },
    "ct-series-h ct-point": {
        "stroke": "#dd4b39"
    },
    "ct-series-h ct-line": {
        "stroke": "#dd4b39"
    },
    "ct-series-h ct-bar": {
        "stroke": "#dd4b39"
    },
    "ct-series-h ct-slice-donut": {
        "stroke": "#dd4b39"
    },
    "ct-series-h ct-slice-pie": {
        "fill": "#dd4b39"
    },
    "ct-series-h ct-area": {
        "fill": "#dd4b39"
    },
    "ct-series-i ct-point": {
        "stroke": "#35465c"
    },
    "ct-series-i ct-line": {
        "stroke": "#35465c"
    },
    "ct-series-i ct-bar": {
        "stroke": "#35465c"
    },
    "ct-series-i ct-slice-donut": {
        "stroke": "#35465c"
    },
    "ct-series-i ct-slice-pie": {
        "fill": "#35465c"
    },
    "ct-series-i ct-area": {
        "fill": "#35465c"
    },
    "ct-series-j ct-point": {
        "stroke": "#e52d27"
    },
    "ct-series-j ct-line": {
        "stroke": "#e52d27"
    },
    "ct-series-j ct-bar": {
        "stroke": "#e52d27"
    },
    "ct-series-j ct-slice-donut": {
        "stroke": "#e52d27"
    },
    "ct-series-j ct-slice-pie": {
        "fill": "#e52d27"
    },
    "ct-series-j ct-area": {
        "fill": "#e52d27"
    },
    "ct-series-k ct-point": {
        "stroke": "#55acee"
    },
    "ct-series-k ct-line": {
        "stroke": "#55acee"
    },
    "ct-series-k ct-bar": {
        "stroke": "#55acee"
    },
    "ct-series-k ct-slice-donut": {
        "stroke": "#55acee"
    },
    "ct-series-k ct-slice-pie": {
        "fill": "#55acee"
    },
    "ct-series-k ct-area": {
        "fill": "#55acee"
    },
    "ct-series-l ct-point": {
        "stroke": "#cc2127"
    },
    "ct-series-l ct-line": {
        "stroke": "#cc2127"
    },
    "ct-series-l ct-bar": {
        "stroke": "#cc2127"
    },
    "ct-series-l ct-slice-donut": {
        "stroke": "#cc2127"
    },
    "ct-series-l ct-slice-pie": {
        "fill": "#cc2127"
    },
    "ct-series-l ct-area": {
        "fill": "#cc2127"
    },
    "ct-series-m ct-point": {
        "stroke": "#1769ff"
    },
    "ct-series-m ct-line": {
        "stroke": "#1769ff"
    },
    "ct-series-m ct-bar": {
        "stroke": "#1769ff"
    },
    "ct-series-m ct-slice-donut": {
        "stroke": "#1769ff"
    },
    "ct-series-m ct-slice-pie": {
        "fill": "#1769ff"
    },
    "ct-series-m ct-area": {
        "fill": "#1769ff"
    },
    "ct-series-n ct-point": {
        "stroke": "#6188e2"
    },
    "ct-series-n ct-line": {
        "stroke": "#6188e2"
    },
    "ct-series-n ct-bar": {
        "stroke": "#6188e2"
    },
    "ct-series-n ct-slice-donut": {
        "stroke": "#6188e2"
    },
    "ct-series-n ct-slice-pie": {
        "fill": "#6188e2"
    },
    "ct-series-n ct-area": {
        "fill": "#6188e2"
    },
    "ct-series-o ct-point": {
        "stroke": "#a748ca"
    },
    "ct-series-o ct-line": {
        "stroke": "#a748ca"
    },
    "ct-series-o ct-bar": {
        "stroke": "#a748ca"
    },
    "ct-series-o ct-slice-donut": {
        "stroke": "#a748ca"
    },
    "ct-series-o ct-slice-pie": {
        "fill": "#a748ca"
    },
    "ct-series-o ct-area": {
        "fill": "#a748ca"
    },
    "ct-square": {
        "display": "block",
        "position": "relative",
        "width": "100%"
    },
    "ct-square:before": {
        "display": "block",
        "float": "left",
        "content": "",
        "width": 0,
        "height": 0,
        "paddingBottom": "100%"
    },
    "ct-square:after": {
        "content": "",
        "display": "table",
        "clear": "both"
    },
    "ct-square > svg": {
        "display": "block",
        "position": "absolute",
        "top": 0,
        "left": 0
    },
    "ct-minor-second": {
        "display": "block",
        "position": "relative",
        "width": "100%"
    },
    "ct-minor-second:before": {
        "display": "block",
        "float": "left",
        "content": "",
        "width": 0,
        "height": 0,
        "paddingBottom": "93.75%"
    },
    "ct-minor-second:after": {
        "content": "",
        "display": "table",
        "clear": "both"
    },
    "ct-minor-second > svg": {
        "display": "block",
        "position": "absolute",
        "top": 0,
        "left": 0
    },
    "ct-major-second": {
        "display": "block",
        "position": "relative",
        "width": "100%"
    },
    "ct-major-second:before": {
        "display": "block",
        "float": "left",
        "content": "",
        "width": 0,
        "height": 0,
        "paddingBottom": "88.88889%"
    },
    "ct-major-second:after": {
        "content": "",
        "display": "table",
        "clear": "both"
    },
    "ct-major-second > svg": {
        "display": "block",
        "position": "absolute",
        "top": 0,
        "left": 0
    },
    "ct-minor-third": {
        "display": "block",
        "position": "relative",
        "width": "100%"
    },
    "ct-minor-third:before": {
        "display": "block",
        "float": "left",
        "content": "",
        "width": 0,
        "height": 0,
        "paddingBottom": "83.33333%"
    },
    "ct-minor-third:after": {
        "content": "",
        "display": "table",
        "clear": "both"
    },
    "ct-minor-third > svg": {
        "display": "block",
        "position": "absolute",
        "top": 0,
        "left": 0
    },
    "ct-major-third": {
        "display": "block",
        "position": "relative",
        "width": "100%"
    },
    "ct-major-third:before": {
        "display": "block",
        "float": "left",
        "content": "",
        "width": 0,
        "height": 0,
        "paddingBottom": "80%"
    },
    "ct-major-third:after": {
        "content": "",
        "display": "table",
        "clear": "both"
    },
    "ct-major-third > svg": {
        "display": "block",
        "position": "absolute",
        "top": 0,
        "left": 0
    },
    "ct-perfect-fourth": {
        "display": "block",
        "position": "relative",
        "width": "100%"
    },
    "ct-perfect-fourth:before": {
        "display": "block",
        "float": "left",
        "content": "",
        "width": 0,
        "height": 0,
        "paddingBottom": "75%"
    },
    "ct-perfect-fourth:after": {
        "content": "",
        "display": "table",
        "clear": "both"
    },
    "ct-perfect-fourth > svg": {
        "display": "block",
        "position": "absolute",
        "top": 0,
        "left": 0
    },
    "ct-perfect-fifth": {
        "display": "block",
        "position": "relative",
        "width": "100%"
    },
    "ct-perfect-fifth:before": {
        "display": "block",
        "float": "left",
        "content": "",
        "width": 0,
        "height": 0,
        "paddingBottom": "66.66667%"
    },
    "ct-perfect-fifth:after": {
        "content": "",
        "display": "table",
        "clear": "both"
    },
    "ct-perfect-fifth > svg": {
        "display": "block",
        "position": "absolute",
        "top": 0,
        "left": 0
    },
    "ct-minor-sixth": {
        "display": "block",
        "position": "relative",
        "width": "100%"
    },
    "ct-minor-sixth:before": {
        "display": "block",
        "float": "left",
        "content": "",
        "width": 0,
        "height": 0,
        "paddingBottom": "62.5%"
    },
    "ct-minor-sixth:after": {
        "content": "",
        "display": "table",
        "clear": "both"
    },
    "ct-minor-sixth > svg": {
        "display": "block",
        "position": "absolute",
        "top": 0,
        "left": 0
    },
    "ct-golden-section": {
        "display": "block",
        "position": "relative",
        "width": "100%"
    },
    "ct-golden-section:before": {
        "display": "block",
        "float": "left",
        "content": "",
        "width": 0,
        "height": 0,
        "paddingBottom": "61.8047%"
    },
    "ct-golden-section:after": {
        "content": "",
        "display": "table",
        "clear": "both"
    },
    "ct-golden-section > svg": {
        "display": "block",
        "position": "absolute",
        "top": 0,
        "left": 0
    },
    "ct-major-sixth": {
        "display": "block",
        "position": "relative",
        "width": "100%"
    },
    "ct-major-sixth:before": {
        "display": "block",
        "float": "left",
        "content": "",
        "width": 0,
        "height": 0,
        "paddingBottom": "60%"
    },
    "ct-major-sixth:after": {
        "content": "",
        "display": "table",
        "clear": "both"
    },
    "ct-major-sixth > svg": {
        "display": "block",
        "position": "absolute",
        "top": 0,
        "left": 0
    },
    "ct-minor-seventh": {
        "display": "block",
        "position": "relative",
        "width": "100%"
    },
    "ct-minor-seventh:before": {
        "display": "block",
        "float": "left",
        "content": "",
        "width": 0,
        "height": 0,
        "paddingBottom": "56.25%"
    },
    "ct-minor-seventh:after": {
        "content": "",
        "display": "table",
        "clear": "both"
    },
    "ct-minor-seventh > svg": {
        "display": "block",
        "position": "absolute",
        "top": 0,
        "left": 0
    },
    "ct-major-seventh": {
        "display": "block",
        "position": "relative",
        "width": "100%"
    },
    "ct-major-seventh:before": {
        "display": "block",
        "float": "left",
        "content": "",
        "width": 0,
        "height": 0,
        "paddingBottom": "53.33333%"
    },
    "ct-major-seventh:after": {
        "content": "",
        "display": "table",
        "clear": "both"
    },
    "ct-major-seventh > svg": {
        "display": "block",
        "position": "absolute",
        "top": 0,
        "left": 0
    },
    "ct-octave": {
        "display": "block",
        "position": "relative",
        "width": "100%"
    },
    "ct-octave:before": {
        "display": "block",
        "float": "left",
        "content": "",
        "width": 0,
        "height": 0,
        "paddingBottom": "50%"
    },
    "ct-octave:after": {
        "content": "",
        "display": "table",
        "clear": "both"
    },
    "ct-octave > svg": {
        "display": "block",
        "position": "absolute",
        "top": 0,
        "left": 0
    },
    "ct-major-tenth": {
        "display": "block",
        "position": "relative",
        "width": "100%"
    },
    "ct-major-tenth:before": {
        "display": "block",
        "float": "left",
        "content": "",
        "width": 0,
        "height": 0,
        "paddingBottom": "40%"
    },
    "ct-major-tenth:after": {
        "content": "",
        "display": "table",
        "clear": "both"
    },
    "ct-major-tenth > svg": {
        "display": "block",
        "position": "absolute",
        "top": 0,
        "left": 0
    },
    "ct-major-eleventh": {
        "display": "block",
        "position": "relative",
        "width": "100%"
    },
    "ct-major-eleventh:before": {
        "display": "block",
        "float": "left",
        "content": "",
        "width": 0,
        "height": 0,
        "paddingBottom": "37.5%"
    },
    "ct-major-eleventh:after": {
        "content": "",
        "display": "table",
        "clear": "both"
    },
    "ct-major-eleventh > svg": {
        "display": "block",
        "position": "absolute",
        "top": 0,
        "left": 0
    },
    "ct-major-twelfth": {
        "display": "block",
        "position": "relative",
        "width": "100%"
    },
    "ct-major-twelfth:before": {
        "display": "block",
        "float": "left",
        "content": "",
        "width": 0,
        "height": 0,
        "paddingBottom": "33.33333%"
    },
    "ct-major-twelfth:after": {
        "content": "",
        "display": "table",
        "clear": "both"
    },
    "ct-major-twelfth > svg": {
        "display": "block",
        "position": "absolute",
        "top": 0,
        "left": 0
    },
    "ct-double-octave": {
        "display": "block",
        "position": "relative",
        "width": "100%"
    },
    "ct-double-octave:before": {
        "display": "block",
        "float": "left",
        "content": "",
        "width": 0,
        "height": 0,
        "paddingBottom": "25%"
    },
    "ct-double-octave:after": {
        "content": "",
        "display": "table",
        "clear": "both"
    },
    "ct-double-octave > svg": {
        "display": "block",
        "position": "absolute",
        "top": 0,
        "left": 0
    },
    "ct-blue": {
        "stroke": "#9c27b0 !important"
    },
    "ct-azure": {
        "stroke": "#00bcd4 !important"
    },
    "ct-green": {
        "stroke": "#4caf50 !important"
    },
    "ct-orange": {
        "stroke": "#ff9800 !important"
    },
    "ct-red": {
        "stroke": "#f44336 !important"
    },
    "ct-white": {
        "stroke": "#FFFFFF !important"
    },
    "ct-rose": {
        "stroke": "#e91e63 !important"
    }
});