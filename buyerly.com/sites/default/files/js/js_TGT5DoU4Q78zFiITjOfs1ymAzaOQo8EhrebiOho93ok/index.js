/*!
	Colorbox v1.4.27 - 2013-07-16
	jQuery lightbox and modal window plugin
	(c) 2013 Jack Moore - http://www.jacklmoore.com/colorbox
	license: http://www.opensource.org/licenses/mit-license.php
*/
(function(t,e,i){function o(i,o,n){var r=e.createElement(i);return o&&(r.id=te+o),n&&(r.style.cssText=n),t(r)}function n(){return i.innerHeight?i.innerHeight:t(i).height()}function r(t){var e=E.length,i=(j+t)%e;return 0>i?e+i:i}function l(t,e){return Math.round((/%/.test(t)?("x"===e?H.width():n())/100:1)*parseInt(t,10))}function h(t,e){return t.photo||t.photoRegex.test(e)}function s(t,e){return t.retinaUrl&&i.devicePixelRatio>1?e.replace(t.photoRegex,t.retinaSuffix):e}function a(t){"contains"in v[0]&&!v[0].contains(t.target)&&(t.stopPropagation(),v.focus())}function d(){var e,i=t.data(A,Z);null==i?(O=t.extend({},Y),console&&console.log&&console.log("Error: cboxElement missing settings object")):O=t.extend({},i);for(e in O)t.isFunction(O[e])&&"on"!==e.slice(0,2)&&(O[e]=O[e].call(A));O.rel=O.rel||A.rel||t(A).data("rel")||"nofollow",O.href=O.href||t(A).attr("href"),O.title=O.title||A.title,"string"==typeof O.href&&(O.href=t.trim(O.href))}function c(i,o){t(e).trigger(i),se.trigger(i),t.isFunction(o)&&o.call(A)}function u(){var t,e,i,o,n,r=te+"Slideshow_",l="click."+te;O.slideshow&&E[1]?(e=function(){clearTimeout(t)},i=function(){(O.loop||E[j+1])&&(t=setTimeout(J.next,O.slideshowSpeed))},o=function(){R.html(O.slideshowStop).unbind(l).one(l,n),se.bind(ne,i).bind(oe,e).bind(re,n),v.removeClass(r+"off").addClass(r+"on")},n=function(){e(),se.unbind(ne,i).unbind(oe,e).unbind(re,n),R.html(O.slideshowStart).unbind(l).one(l,function(){J.next(),o()}),v.removeClass(r+"on").addClass(r+"off")},O.slideshowAuto?o():n()):v.removeClass(r+"off "+r+"on")}function p(i){G||(A=i,d(),E=t(A),j=0,"nofollow"!==O.rel&&(E=t("."+ee).filter(function(){var e,i=t.data(this,Z);return i&&(e=t(this).data("rel")||i.rel||this.rel),e===O.rel}),j=E.index(A),-1===j&&(E=E.add(A),j=E.length-1)),g.css({opacity:parseFloat(O.opacity),cursor:O.overlayClose?"pointer":"auto",visibility:"visible"}).show(),V&&v.add(g).removeClass(V),O.className&&v.add(g).addClass(O.className),V=O.className,O.closeButton?P.html(O.close).appendTo(x):P.appendTo("<div/>"),$||($=q=!0,v.css({visibility:"hidden",display:"block"}),W=o(ae,"LoadedContent","width:0; height:0; overflow:hidden"),x.css({width:"",height:""}).append(W),_=b.height()+k.height()+x.outerHeight(!0)-x.height(),D=T.width()+C.width()+x.outerWidth(!0)-x.width(),N=W.outerHeight(!0),z=W.outerWidth(!0),O.w=l(O.initialWidth,"x"),O.h=l(O.initialHeight,"y"),J.position(),u(),c(ie,O.onOpen),B.add(S).hide(),v.focus(),O.trapFocus&&e.addEventListener&&(e.addEventListener("focus",a,!0),se.one(le,function(){e.removeEventListener("focus",a,!0)})),O.returnFocus&&se.one(le,function(){t(A).focus()})),w())}function f(){!v&&e.body&&(X=!1,H=t(i),v=o(ae).attr({id:Z,"class":t.support.opacity===!1?te+"IE":"",role:"dialog",tabindex:"-1"}).hide(),g=o(ae,"Overlay").hide(),L=t([o(ae,"LoadingOverlay")[0],o(ae,"LoadingGraphic")[0]]),y=o(ae,"Wrapper"),x=o(ae,"Content").append(S=o(ae,"Title"),M=o(ae,"Current"),K=t('<button type="button"/>').attr({id:te+"Previous"}),I=t('<button type="button"/>').attr({id:te+"Next"}),R=o("button","Slideshow"),L),P=t('<button type="button"/>').attr({id:te+"Close"}),y.append(o(ae).append(o(ae,"TopLeft"),b=o(ae,"TopCenter"),o(ae,"TopRight")),o(ae,!1,"clear:left").append(T=o(ae,"MiddleLeft"),x,C=o(ae,"MiddleRight")),o(ae,!1,"clear:left").append(o(ae,"BottomLeft"),k=o(ae,"BottomCenter"),o(ae,"BottomRight"))).find("div div").css({"float":"left"}),F=o(ae,!1,"position:absolute; width:9999px; visibility:hidden; display:none"),B=I.add(K).add(M).add(R),t(e.body).append(g,v.append(y,F)))}function m(){function i(t){t.which>1||t.shiftKey||t.altKey||t.metaKey||t.ctrlKey||(t.preventDefault(),p(this))}return v?(X||(X=!0,I.click(function(){J.next()}),K.click(function(){J.prev()}),P.click(function(){J.close()}),g.click(function(){O.overlayClose&&J.close()}),t(e).bind("keydown."+te,function(t){var e=t.keyCode;$&&O.escKey&&27===e&&(t.preventDefault(),J.close()),$&&O.arrowKey&&E[1]&&!t.altKey&&(37===e?(t.preventDefault(),K.click()):39===e&&(t.preventDefault(),I.click()))}),t.isFunction(t.fn.on)?t(e).on("click."+te,"."+ee,i):t("."+ee).live("click."+te,i)),!0):!1}function w(){var n,r,a,u=J.prep,p=++de;q=!0,U=!1,A=E[j],d(),c(he),c(oe,O.onLoad),O.h=O.height?l(O.height,"y")-N-_:O.innerHeight&&l(O.innerHeight,"y"),O.w=O.width?l(O.width,"x")-z-D:O.innerWidth&&l(O.innerWidth,"x"),O.mw=O.w,O.mh=O.h,O.maxWidth&&(O.mw=l(O.maxWidth,"x")-z-D,O.mw=O.w&&O.w<O.mw?O.w:O.mw),O.maxHeight&&(O.mh=l(O.maxHeight,"y")-N-_,O.mh=O.h&&O.h<O.mh?O.h:O.mh),n=O.href,Q=setTimeout(function(){L.show()},100),O.inline?(a=o(ae).hide().insertBefore(t(n)[0]),se.one(he,function(){a.replaceWith(W.children())}),u(t(n))):O.iframe?u(" "):O.html?u(O.html):h(O,n)?(n=s(O,n),U=e.createElement("img"),t(U).addClass(te+"Photo").bind("error",function(){O.title=!1,u(o(ae,"Error").html(O.imgError))}).one("load",function(){var e;p===de&&(U.alt=t(A).attr("alt")||t(A).attr("data-alt")||"",O.retinaImage&&i.devicePixelRatio>1&&(U.height=U.height/i.devicePixelRatio,U.width=U.width/i.devicePixelRatio),O.scalePhotos&&(r=function(){U.height-=U.height*e,U.width-=U.width*e},O.mw&&U.width>O.mw&&(e=(U.width-O.mw)/U.width,r()),O.mh&&U.height>O.mh&&(e=(U.height-O.mh)/U.height,r())),O.h&&(U.style.marginTop=Math.max(O.mh-U.height,0)/2+"px"),E[1]&&(O.loop||E[j+1])&&(U.style.cursor="pointer",U.onclick=function(){J.next()}),U.style.width=U.width+"px",U.style.height=U.height+"px",setTimeout(function(){u(U)},1))}),setTimeout(function(){U.src=n},1)):n&&F.load(n,O.data,function(e,i){p===de&&u("error"===i?o(ae,"Error").html(O.xhrError):t(this).contents())})}var g,v,y,x,b,T,C,k,E,H,W,F,L,S,M,R,I,K,P,B,O,_,D,N,z,A,j,U,$,q,G,Q,J,V,X,Y={transition:"elastic",speed:300,fadeOut:300,width:!1,initialWidth:"600",innerWidth:!1,maxWidth:!1,height:!1,initialHeight:"450",innerHeight:!1,maxHeight:!1,scalePhotos:!0,scrolling:!0,inline:!1,html:!1,iframe:!1,fastIframe:!0,photo:!1,href:!1,title:!1,rel:!1,opacity:.9,preloading:!0,className:!1,retinaImage:!1,retinaUrl:!1,retinaSuffix:"@2x.$1",current:"image {current} of {total}",previous:"previous",next:"next",close:"close",xhrError:"This content failed to load.",imgError:"This image failed to load.",open:!1,returnFocus:!0,trapFocus:!0,reposition:!0,loop:!0,slideshow:!1,slideshowAuto:!0,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",photoRegex:/\.(gif|png|jp(e|g|eg)|bmp|ico|webp)((#|\?).*)?$/i,onOpen:!1,onLoad:!1,onComplete:!1,onCleanup:!1,onClosed:!1,overlayClose:!0,escKey:!0,arrowKey:!0,top:!1,bottom:!1,left:!1,right:!1,fixed:!1,data:void 0,closeButton:!0},Z="colorbox",te="cbox",ee=te+"Element",ie=te+"_open",oe=te+"_load",ne=te+"_complete",re=te+"_cleanup",le=te+"_closed",he=te+"_purge",se=t("<a/>"),ae="div",de=0,ce={};t.colorbox||(t(f),J=t.fn[Z]=t[Z]=function(e,i){var o=this;if(e=e||{},f(),m()){if(t.isFunction(o))o=t("<a/>"),e.open=!0;else if(!o[0])return o;i&&(e.onComplete=i),o.each(function(){t.data(this,Z,t.extend({},t.data(this,Z)||Y,e))}).addClass(ee),(t.isFunction(e.open)&&e.open.call(o)||e.open)&&p(o[0])}return o},J.position=function(e,i){function o(){b[0].style.width=k[0].style.width=x[0].style.width=parseInt(v[0].style.width,10)-D+"px",x[0].style.height=T[0].style.height=C[0].style.height=parseInt(v[0].style.height,10)-_+"px"}var r,h,s,a=0,d=0,c=v.offset();if(H.unbind("resize."+te),v.css({top:-9e4,left:-9e4}),h=H.scrollTop(),s=H.scrollLeft(),O.fixed?(c.top-=h,c.left-=s,v.css({position:"fixed"})):(a=h,d=s,v.css({position:"absolute"})),d+=O.right!==!1?Math.max(H.width()-O.w-z-D-l(O.right,"x"),0):O.left!==!1?l(O.left,"x"):Math.round(Math.max(H.width()-O.w-z-D,0)/2),a+=O.bottom!==!1?Math.max(n()-O.h-N-_-l(O.bottom,"y"),0):O.top!==!1?l(O.top,"y"):Math.round(Math.max(n()-O.h-N-_,0)/2),v.css({top:c.top,left:c.left,visibility:"visible"}),y[0].style.width=y[0].style.height="9999px",r={width:O.w+z+D,height:O.h+N+_,top:a,left:d},e){var u=0;t.each(r,function(t){return r[t]!==ce[t]?(u=e,void 0):void 0}),e=u}ce=r,e||v.css(r),v.dequeue().animate(r,{duration:e||0,complete:function(){o(),q=!1,y[0].style.width=O.w+z+D+"px",y[0].style.height=O.h+N+_+"px",O.reposition&&setTimeout(function(){H.bind("resize."+te,J.position)},1),i&&i()},step:o})},J.resize=function(t){var e;$&&(t=t||{},t.width&&(O.w=l(t.width,"x")-z-D),t.innerWidth&&(O.w=l(t.innerWidth,"x")),W.css({width:O.w}),t.height&&(O.h=l(t.height,"y")-N-_),t.innerHeight&&(O.h=l(t.innerHeight,"y")),t.innerHeight||t.height||(e=W.scrollTop(),W.css({height:"auto"}),O.h=W.height()),W.css({height:O.h}),e&&W.scrollTop(e),J.position("none"===O.transition?0:O.speed))},J.prep=function(i){function n(){return O.w=O.w||W.width(),O.w=O.mw&&O.mw<O.w?O.mw:O.w,O.w}function l(){return O.h=O.h||W.height(),O.h=O.mh&&O.mh<O.h?O.mh:O.h,O.h}if($){var a,d="none"===O.transition?0:O.speed;W.empty().remove(),W=o(ae,"LoadedContent").append(i),W.hide().appendTo(F.show()).css({width:n(),overflow:O.scrolling?"auto":"hidden"}).css({height:l()}).prependTo(x),F.hide(),t(U).css({"float":"none"}),a=function(){function i(){t.support.opacity===!1&&v[0].style.removeAttribute("filter")}var n,l,a=E.length,u="frameBorder",p="allowTransparency";$&&(l=function(){clearTimeout(Q),L.hide(),c(ne,O.onComplete)},S.html(O.title).add(W).show(),a>1?("string"==typeof O.current&&M.html(O.current.replace("{current}",j+1).replace("{total}",a)).show(),I[O.loop||a-1>j?"show":"hide"]().html(O.next),K[O.loop||j?"show":"hide"]().html(O.previous),O.slideshow&&R.show(),O.preloading&&t.each([r(-1),r(1)],function(){var i,o,n=E[this],r=t.data(n,Z);r&&r.href?(i=r.href,t.isFunction(i)&&(i=i.call(n))):i=t(n).attr("href"),i&&h(r,i)&&(i=s(r,i),o=e.createElement("img"),o.src=i)})):B.hide(),O.iframe?(n=o("iframe")[0],u in n&&(n[u]=0),p in n&&(n[p]="true"),O.scrolling||(n.scrolling="no"),t(n).attr({src:O.href,name:(new Date).getTime(),"class":te+"Iframe",allowFullScreen:!0,webkitAllowFullScreen:!0,mozallowfullscreen:!0}).one("load",l).appendTo(W),se.one(he,function(){n.src="//about:blank"}),O.fastIframe&&t(n).trigger("load")):l(),"fade"===O.transition?v.fadeTo(d,1,i):i())},"fade"===O.transition?v.fadeTo(d,0,function(){J.position(0,a)}):J.position(d,a)}},J.next=function(){!q&&E[1]&&(O.loop||E[j+1])&&(j=r(1),p(E[j]))},J.prev=function(){!q&&E[1]&&(O.loop||j)&&(j=r(-1),p(E[j]))},J.close=function(){$&&!G&&(G=!0,$=!1,c(re,O.onCleanup),H.unbind("."+te),g.fadeTo(O.fadeOut||0,0),v.stop().fadeTo(O.fadeOut||0,0,function(){v.add(g).css({opacity:1,cursor:"auto"}).hide(),c(he),W.empty().remove(),setTimeout(function(){G=!1,c(le,O.onClosed)},1)}))},J.remove=function(){v&&(v.stop(),t.colorbox.close(),v.stop().remove(),g.remove(),G=!1,v=null,t("."+ee).removeData(Z).removeClass(ee),t(e).unbind("click."+te))},J.element=function(){return t(A)},J.settings=Y)})(jQuery,document,window);;
(function ($) {

Drupal.behaviors.initColorbox = {
  attach: function (context, settings) {
    if (!$.isFunction($.colorbox)) {
      return;
    }
    $('.colorbox', context)
      .once('init-colorbox')
      .colorbox(settings.colorbox);
  }
};

{
  $(document).bind('cbox_complete', function () {
    Drupal.attachBehaviors('#cboxLoadedContent');
  });
}

})(jQuery);
;
(function ($) {

Drupal.behaviors.initColorboxDefaultStyle = {
  attach: function (context, settings) {
    $(document).bind('cbox_complete', function () {
      // Only run if there is a title.
      if ($('#cboxTitle:empty', context).length == false) {
        $('#cboxLoadedContent img', context).bind('mouseover', function () {
          $('#cboxTitle', context).slideDown();
        });
        $('#cboxOverlay', context).bind('mouseover', function () {
          $('#cboxTitle', context).slideUp();
        });
      }
      else {
        $('#cboxTitle', context).hide();
      }
    });
  }
};

})(jQuery);
;
(function ($) {

Drupal.behaviors.initColorboxLoad = {
  attach: function (context, settings) {
    if (!$.isFunction($.colorbox)) {
      return;
    }
    $.urlParams = function (url) {
      var p = {},
          e,
          a = /\+/g,  // Regex for replacing addition symbol with a space
          r = /([^&=]+)=?([^&]*)/g,
          d = function (s) { return decodeURIComponent(s.replace(a, ' ')); },
          q = url.split('?');
      while (e = r.exec(q[1])) {
        e[1] = d(e[1]);
        e[2] = d(e[2]);
        switch (e[2].toLowerCase()) {
          case 'true':
          case 'yes':
            e[2] = true;
            break;
          case 'false':
          case 'no':
            e[2] = false;
            break;
        }
        if (e[1] == 'width') { e[1] = 'innerWidth'; }
        if (e[1] == 'height') { e[1] = 'innerHeight'; }
        p[e[1]] = e[2];
      }
      return p;
    };
    $('.colorbox-load', context)
      .once('init-colorbox-load', function () {
        var params = $.urlParams($(this).attr('href'));
        $(this).colorbox($.extend({}, settings.colorbox, params));
      });
  }
};

})(jQuery);
;
// $Id: fbconnect.js,v 1.4 2010/03/21 16:26:03 vectoroc Exp $

Drupal.fbconnect = Drupal.fbconnect || {};
Drupal.fbconnect.init = function () {
  Drupal.behaviors.fbconnect = function(context) {
    if (context != document) {
      jQuery(context).each(function() { FB.XFBML.parse(this); });
    }
    Drupal.fbconnect.initLogoutLinks(context);
  }

  if (Drupal.settings.fbconnect.loginout_mode == 'auto') {
    FB.Event.subscribe('auth.authResponseChange', Drupal.fbconnect.reload_ifUserConnected);
//    FB.Event.subscribe('auth.login', function(response) {
//      console.log('event auth.login');
//    });
  }

  Drupal.behaviors.fbconnect(document);
}

Drupal.fbconnect.logout = function(keep_fbaccount_logged) {
  var logout_url = Drupal.settings.basePath + 'user/logout';
  if (!keep_fbaccount_logged) {
    FB.logout(function(response) {
      window.location.href = logout_url;
    });
  }
  else {
    window.location.href = logout_url;
  }
}

Drupal.fbconnect.reload_ifUserConnected = function(state) {
  var user = Drupal.settings.fbconnect.user;

  if (!state.authResponse || user.uid) return;
  if (state.authResponse.uid != user.fbuid) {
    window.location.reload();
  }
};

Drupal.fbconnect.initLogoutLinks = function(context) {
  var loginout_mode = Drupal.settings.fbconnect.loginout_mode;
  var user          = Drupal.settings.fbconnect.user;
  var basePath      = Drupal.settings.basePath;
  var logout_url    = basePath + 'user/logout';
  var links         = jQuery('a[href="'+ logout_url +'"]', context).not('.logout_link_inited');

  if (loginout_mode == 'manual') return;

  links.addClass('logout_link_inited').bind('click',function() {
    var fbuid = FB.getAuthResponse() && FB.getAuthResponse().uid;

    if (!user.fbuid || user.fbuid != fbuid) return;
    if (loginout_mode == 'auto') {
      Drupal.fbconnect.logout();
    }
    else if (loginout_mode == 'ask') {
      var t_args  = {'!site_name' : Drupal.settings.fbconnect.invite_name};
      var buttons = [
          {
            'label': Drupal.t('Facebook and !site_name', t_args),
            'click': function() {
              this.close();
              Drupal.fbconnect.logout();
            }
          }, {
            'name': 'cancel',
            'label': Drupal.t('!site_name Only', t_args),
            'click': function() {
              this.close();
              Drupal.fbconnect.logout(true);
            }
          }
      ];

      var dialog = new Drupal.fbconnect.PopupDialog({
        'title'   : Drupal.t('Logout'),
        'message' : Drupal.t('Do you also want to logout from your Facebook account?'),
        'buttons' : buttons
      });
    }

    return false;
  });
};

Drupal.fbconnect.DoFastRegistration =  function(link) {
  FB.login(function(response) {
    if (response.authResponse && response.status == 'connected') {
      FB.api('/me/permissions', function(perms_response) {
        if(perms_response['data'][0]['email']) {
          window.location.href = link.href;
        }
      });
    }
  }, {scope:'email'});
};


function facebook_onlogin_ready() {
  // http://github.com/facebook/connect-js/issues/194
  if (!FB.getAuthResponse()) {
    return;
  }
  jQuery("#fbconnect-autoconnect-form").submit();
}

/**
 * Create a dialog.
 *
 * @param opts {Object} Options:
 * @see Drupal.fbconnect.PopupDialog.prototype.prepareDefaults
 *
 * @return {Object}
 */
Drupal.fbconnect.PopupDialog = function(options) {
  this.prepareDefaults(options);
  this.container = Drupal.theme('fb_popup_dialog', this.options);
  this.dialog = FB.Dialog.create({
    content : this.container,
    visible : false,
    loader  : true,
    onClose : this.__close_handler,
    closeIcon : true
  });

//  FB.XFBML.parse(dialog);

//  var popup = new FB.UI.PopupDialog(
//    oThis.options.title,
//    oThis.container,
//    oThis.options.showLoading,
//    oThis.options.hideUntilLoaded
//  );

  this.callback('load', this.dialog);
};

Drupal.fbconnect.PopupDialog.prototype.options = {};

Drupal.fbconnect.PopupDialog.prototype.createHandler = function(event, data) {
  var oThis = this;
  return function() { oThis.callback(event, data); };
};

Drupal.fbconnect.PopupDialog.prototype.callback = function(event, data) {
  data = data || {};
  switch (event) {
  case 'click':
    var btn = data;
    if (btn.click instanceof Function) btn.click.apply(this, [btn]);
    else if (btn.name == 'cancel') this.close();
    break;

  case 'close':
    this.close();
    /*var btn = this.findButton('cancel');
    if (btn) this.callback('click', btn); */
    break;

  case 'load':
    this.show();
    break;
  }
};

Drupal.fbconnect.PopupDialog.prototype.prepareDefaults = function(options) {
  var defaults = {
    'title'           : '',
    'message'         : ' - ',
    'buttons'         : {},
    'showLoading'     : false,
    'hideUntilLoaded' : false
  };
  jQuery.extend(this.options, defaults, options);

  this.__close_handler = this.createHandler('close', {});
  this.options.dialog = this;
  if (this.options.callback instanceof Function) {
    this.callback = this.options.callback;
  }
};

Drupal.fbconnect.PopupDialog.prototype.show = function() {
  if (this.dialog) {
    FB.Dialog.show(this.dialog);
  }
};

Drupal.fbconnect.PopupDialog.prototype.close = function() {
  if (this.dialog) {
    FB.Dialog.remove(this.dialog);
  }
};

Drupal.fbconnect.PopupDialog.prototype.findButton = function(name) {
  var button = null;
  jQuery.each(this.options.buttons, function(i, btn) {
    if (btn.name == name) {
      button = btn;
      return true;
    }
  });

  return button;
}

Drupal.theme.prototype.fb_popup_dialog_buttons = function(buttons, dialog) {
  buttons = buttons || {};
  var container = jQuery('<div class="dialog_buttons"></div>');

  jQuery.each(buttons, function(i, btn) {
    var button = jQuery('<input type="button" class="dialog_inputbutton">');
    if (!btn['name']) btn['name'] = i;
    if (btn.attr) button.attr(btn.attr);
    if (btn['class']) button.addClass(btn['class']);
    if (btn['name'] == 'cancel') button.addClass('dialog_inputaux');
    button.addClass('fb_button_' + i);
    button.attr('value', btn.label);
    button.click(dialog.createHandler('click', btn));
    button.appendTo(container);
  });

  return container.get(0);
};

Drupal.theme.prototype.fb_popup_dialog = function(options) {
  options = options || {buttons:{}};
  var container = document.createDocumentFragment();
  var elements  =  [
     '<h2 class="dialog_header"><span>',
    options.title.toString(),
    '</span></h2>',
       '<div class="dialog_stripes"></div>',
    '<div class="dialog_content">',
    options.message.toString(),
    '</div>'
  ];

  jQuery(elements.join("\n")).each(function() {
    container.appendChild(this);
  });
  if (options.buttons) {
    container.appendChild(
      Drupal.theme('fb_popup_dialog_buttons', options.buttons, options.dialog)
    );
  }

  return container;
};


Drupal.theme.prototype.fbml_name = function(fbuid, options) {
  var output = ['<fb:name uid="', fbuid, '"'];
  var defaults = {
    'useyou' : false,
    'linked' : false
  };

  options = jQuery.extend({}, defaults, options);

  output.push('" useyou="'+ (!!options.useyou ? 'true' : 'false') +'"');
  output.push('" linked="'+ (!!options.linked ? 'true' : 'false') +'"');
  output.push('></fb:name>');

  return output.join('');
};

Drupal.theme.prototype.fbml_profile_pic = function(fbuid, options) {
  var output = ['<fb:profile-pic uid="', fbuid, '"'];
  options = options || {};

  if (options.width)  output.push('" width="'+ options.width +'"');
  if (options.height) output.push('" height="'+ options.height +'"');
  if (options.size)   output.push('" size="'+ options.size +'"');

  output.push('" facebook-logo="'+ (!!options['facebook-logo'] ? 'true' : 'false') +'"')
  output.push('" linked="'+ (!!options.linked ? 'true' : 'false') +'"');
  output.push('></fb:profile-pic>');

  return output.join('');
};

jQuery(document).bind('fb:init', Drupal.fbconnect.init);
;
