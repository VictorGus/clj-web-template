// Compiled by ClojureScript 1.10.520 {}
goog.provide('ui.zframes.redirect');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('ui.zframes.window_location');
goog.require('ui.zframes.routing');
goog.require('clojure.string');
ui.zframes.redirect.window_open = (function ui$zframes$redirect$window_open(url){
return window.open(url,"_blank").focus;
});
ui.zframes.redirect.page_redirect = (function ui$zframes$redirect$page_redirect(url){
return window.location.href = url;
});
ui.zframes.redirect.redirect = (function ui$zframes$redirect$redirect(url){
return window.location.hash = url;
});
ui.zframes.redirect.redirect_with_refresh = (function ui$zframes$redirect$redirect_with_refresh(url){
window.location.hash = url;

return location.reload();
});
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("ui.zframes.redirect","redirect","ui.zframes.redirect/redirect",868608702),(function (opts){
return ui.zframes.redirect.redirect.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"uri","uri",-774711847).cljs$core$IFn$_invoke$arity$1(opts)),(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5735__auto__)){
var params = temp__5735__auto__;
return ui.zframes.window_location.gen_query_string.call(null,params);
} else {
return null;
}
})()].join(''));
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("ui.zframes.redirect","redirect-with-refresh","ui.zframes.redirect/redirect-with-refresh",-37937814),(function (opts){
return ui.zframes.redirect.redirect_with_refresh.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"uri","uri",-774711847).cljs$core$IFn$_invoke$arity$1(opts)),(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5735__auto__)){
var params = temp__5735__auto__;
return ui.zframes.window_location.gen_query_string.call(null,params);
} else {
return null;
}
})()].join(''));
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("ui.zframes.redirect","redirect","ui.zframes.redirect/redirect",868608702),(function (fx,p__61201){
var vec__61202 = p__61201;
var _ = cljs.core.nth.call(null,vec__61202,(0),null);
var opts = cljs.core.nth.call(null,vec__61202,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui.zframes.redirect","redirect","ui.zframes.redirect/redirect",868608702),opts], null);
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("ui.zframes.redirect","page-redirect","ui.zframes.redirect/page-redirect",1004869306),(function (opts){
if(cljs.core.truth_(new cljs.core.Keyword(null,"_target","_target",-820699148).cljs$core$IFn$_invoke$arity$1(opts))){
return ui.zframes.redirect.window_open.call(null,new cljs.core.Keyword(null,"uri","uri",-774711847).cljs$core$IFn$_invoke$arity$1(opts));
} else {
return ui.zframes.redirect.page_redirect.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"uri","uri",-774711847).cljs$core$IFn$_invoke$arity$1(opts)),(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5735__auto__)){
var params = temp__5735__auto__;
return ["?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,"&",cljs.core.map.call(null,((function (params,temp__5735__auto__){
return (function (p__61217){
var vec__61218 = p__61217;
var k = cljs.core.nth.call(null,vec__61218,(0),null);
var v = cljs.core.nth.call(null,vec__61218,(1),null);
return [cljs.core.name.call(null,k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(v))].join('');
});})(params,temp__5735__auto__))
,params)))].join('');
} else {
return null;
}
})()].join(''));
}
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("ui.zframes.redirect","set-query-string","ui.zframes.redirect/set-query-string",-638672678),(function (params){
var loc = window.location;
history.pushState(({}),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(params),[ui.zframes.window_location.gen_query_string.call(null,cljs.core.dissoc.call(null,params,new cljs.core.Keyword(null,"title","title",636505583))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(loc.hash)].join(''));

ui.zframes.routing.dispatch_context.call(null,null);

return ui.zframes.routing.dispatch_routes.call(null,null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("ui.zframes.redirect","merge-params","ui.zframes.redirect/merge-params",1492488040),(function (p__61221,p__61222){
var map__61223 = p__61221;
var map__61223__$1 = (((((!((map__61223 == null))))?(((((map__61223.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61223.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61223):map__61223);
var db = cljs.core.get.call(null,map__61223__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__61224 = p__61222;
var _ = cljs.core.nth.call(null,vec__61224,(0),null);
var params = cljs.core.nth.call(null,vec__61224,(1),null);
var pth = cljs.core.get.call(null,db,new cljs.core.Keyword(null,"fragment-path","fragment-path",-1756101988));
var nil_keys = cljs.core.reduce.call(null,((function (pth,map__61223,map__61223__$1,db,vec__61224,_,params){
return (function (acc,p__61228){
var vec__61229 = p__61228;
var k = cljs.core.nth.call(null,vec__61229,(0),null);
var v = cljs.core.nth.call(null,vec__61229,(1),null);
if((v == null)){
return cljs.core.conj.call(null,acc,k);
} else {
return acc;
}
});})(pth,map__61223,map__61223__$1,db,vec__61224,_,params))
,cljs.core.PersistentVector.EMPTY,params);
var old_params = (function (){var or__4131__auto__ = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fragment-params","fragment-params",-332661138),new cljs.core.Keyword(null,"params","params",710516235)], null));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui.zframes.redirect","redirect","ui.zframes.redirect/redirect",868608702),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"uri","uri",-774711847),pth,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.apply.call(null,cljs.core.dissoc,cljs.core.merge.call(null,old_params,params),nil_keys)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("ui.zframes.redirect","set-params","ui.zframes.redirect/set-params",-1917461767),(function (p__61232,p__61233){
var map__61234 = p__61232;
var map__61234__$1 = (((((!((map__61234 == null))))?(((((map__61234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61234.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61234):map__61234);
var db = cljs.core.get.call(null,map__61234__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__61235 = p__61233;
var _ = cljs.core.nth.call(null,vec__61235,(0),null);
var params = cljs.core.nth.call(null,vec__61235,(1),null);
var pth = cljs.core.get.call(null,db,new cljs.core.Keyword(null,"fragment-path","fragment-path",-1756101988));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui.zframes.redirect","redirect","ui.zframes.redirect/redirect",868608702),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"uri","uri",-774711847),pth,new cljs.core.Keyword(null,"params","params",710516235),params], null)], null);
}));

//# sourceMappingURL=redirect.js.map
