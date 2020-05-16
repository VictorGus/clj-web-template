// Compiled by ClojureScript 1.10.520 {}
goog.provide('zframes.cookies');
goog.require('cljs.core');
goog.require('goog.net.cookies');
goog.require('re_frame.core');
goog.require('cljs.reader');
/**
 * Returns the cookie after parsing it with cljs.reader/read-string.
 */
zframes.cookies.get_cookie = (function zframes$cookies$get_cookie(k){
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
zframes.cookies.set_cookie = (function zframes$cookies$set_cookie(k,v){
return goog.net.cookies.set(cljs.core.name.call(null,k),cljs.core.clj__GT_js.call(null,v));
});
zframes.cookies.remove_BANG_ = (function zframes$cookies$remove_BANG_(k){
return goog.net.cookies.remove(cljs.core.name.call(null,k));
});
zframes.cookies.watch_expires = (function zframes$cookies$watch_expires(k){
return null;
});
re_frame.core.reg_cofx.call(null,new cljs.core.Keyword("zframes.cookies","get","zframes.cookies/get",778690788),(function (coeffects,key){
return cljs.core.assoc_in.call(null,coeffects,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cookie","cookie",1772025619),key], null),zframes.cookies.get_cookie.call(null,key));
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("zframes.cookies","set","zframes.cookies/set",658608767),(function (p__30853){
var map__30854 = p__30853;
var map__30854__$1 = (((((!((map__30854 == null))))?(((((map__30854.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30854.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30854):map__30854);
var opts = map__30854__$1;
var k = cljs.core.get.call(null,map__30854__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var v = cljs.core.get.call(null,map__30854__$1,new cljs.core.Keyword(null,"value","value",305978217));
return zframes.cookies.set_cookie.call(null,k,v);
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("cookies","set","cookies/set",677814345),(function (p__30856){
var map__30857 = p__30856;
var map__30857__$1 = (((((!((map__30857 == null))))?(((((map__30857.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30857.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30857):map__30857);
var opts = map__30857__$1;
var k = cljs.core.get.call(null,map__30857__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var v = cljs.core.get.call(null,map__30857__$1,new cljs.core.Keyword(null,"value","value",305978217));
return zframes.cookies.set_cookie.call(null,k,v);
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("zframes.cookies","remove","zframes.cookies/remove",21101569),(function (k){
return goog.net.cookies.remove(cljs.core.name.call(null,k));
}));

//# sourceMappingURL=cookies.js.map
