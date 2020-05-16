// Compiled by ClojureScript 1.10.520 {}
goog.provide('ui.zframes.cookies');
goog.require('cljs.core');
goog.require('goog.net.cookies');
goog.require('re_frame.core');
goog.require('cljs.reader');
/**
 * Returns the cookie after parsing it with cljs.reader/read-string.
 */
ui.zframes.cookies.get_cookie = (function ui$zframes$cookies$get_cookie(k){
return cljs.reader.read_string.call(null,(function (){var or__4131__auto__ = goog.net.cookies.get(cljs.core.name.call(null,k));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "nil";
}
})());
});
/**
 * Stores the cookie value using pr-str.
 */
ui.zframes.cookies.set_cookie = (function ui$zframes$cookies$set_cookie(k,v){
return goog.net.cookies.set(cljs.core.name.call(null,k),cljs.core.clj__GT_js.call(null,v));
});
ui.zframes.cookies.remove_BANG_ = (function ui$zframes$cookies$remove_BANG_(k){
return goog.net.cookies.remove(cljs.core.name.call(null,k));
});
ui.zframes.cookies.watch_expires = (function ui$zframes$cookies$watch_expires(k){
return null;
});
re_frame.core.reg_cofx.call(null,new cljs.core.Keyword("ui.zframes.cookies","get","ui.zframes.cookies/get",-1161585346),(function (coeffects,key){
return cljs.core.assoc_in.call(null,coeffects,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cookie","cookie",1772025619),key], null),ui.zframes.cookies.get_cookie.call(null,key));
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("ui.zframes.cookies","set","ui.zframes.cookies/set",-1162651855),(function (p__47135){
var map__47136 = p__47135;
var map__47136__$1 = (((((!((map__47136 == null))))?(((((map__47136.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47136.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47136):map__47136);
var opts = map__47136__$1;
var k = cljs.core.get.call(null,map__47136__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var v = cljs.core.get.call(null,map__47136__$1,new cljs.core.Keyword(null,"value","value",305978217));
return ui.zframes.cookies.set_cookie.call(null,k,v);
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("cookies","set","cookies/set",677814345),(function (p__47138){
var map__47139 = p__47138;
var map__47139__$1 = (((((!((map__47139 == null))))?(((((map__47139.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47139.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47139):map__47139);
var opts = map__47139__$1;
var k = cljs.core.get.call(null,map__47139__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var v = cljs.core.get.call(null,map__47139__$1,new cljs.core.Keyword(null,"value","value",305978217));
return ui.zframes.cookies.set_cookie.call(null,k,v);
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("ui.zframes.cookies","remove","ui.zframes.cookies/remove",-1782851361),(function (k){
return goog.net.cookies.remove(cljs.core.name.call(null,k));
}));

//# sourceMappingURL=cookies.js.map
