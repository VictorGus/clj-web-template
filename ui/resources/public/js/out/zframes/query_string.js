// Compiled by ClojureScript 1.10.520 {}
goog.provide('zframes.query_string');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('clojure.string');
zframes.query_string.parse_querystring = (function zframes$query_string$parse_querystring(s){
return cljs.core.reduce.call(null,(function (acc,kv){
var vec__29538 = clojure.string.split.call(null,kv,/=/,(2));
var k = cljs.core.nth.call(null,vec__29538,(0),null);
var v = cljs.core.nth.call(null,vec__29538,(1),null);
return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k),decodeURIComponent(v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,clojure.string.replace.call(null,s,/^\?/,""),/&/));
});
zframes.query_string.get_query_string = (function zframes$query_string$get_query_string(){
var raw = window.location.search;
return zframes.query_string.parse_querystring.call(null,raw);
});
zframes.query_string.gen_query_string = (function zframes$query_string$gen_query_string(params){
return ["?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__29545){
var vec__29546 = p__29545;
var k = cljs.core.nth.call(null,vec__29546,(0),null);
var v = cljs.core.nth.call(null,vec__29546,(1),null);
return [cljs.core.name.call(null,k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(v))].join('');
}),params)))].join('');
});
re_frame.core.reg_cofx.call(null,new cljs.core.Keyword("zframes.query-string","query-string","zframes.query-string/query-string",-1980303785),(function (coeffects,key){
return cljs.core.assoc_in.call(null,coeffects,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-string","query-string",-1018845061)], null),zframes.query_string.get_query_string.call(null));
}));

//# sourceMappingURL=query_string.js.map
