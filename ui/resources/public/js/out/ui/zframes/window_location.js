// Compiled by ClojureScript 1.10.520 {}
goog.provide('ui.zframes.window_location');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('clojure.string');
ui.zframes.window_location.url_decode = (function ui$zframes$window_location$url_decode(x){
return decodeURIComponent(x);
});
ui.zframes.window_location.url_encode = (function ui$zframes$window_location$url_encode(x){
return encodeURIComponent(x);
});
ui.zframes.window_location.parse_querystring = (function ui$zframes$window_location$parse_querystring(s){
return cljs.core.reduce.call(null,(function (acc,kv){
var vec__29662 = clojure.string.split.call(null,kv,/=/,(2));
var k = cljs.core.nth.call(null,vec__29662,(0),null);
var v = cljs.core.nth.call(null,vec__29662,(1),null);
return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k),((clojure.string.ends_with_QMARK_.call(null,k,"*"))?cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,clojure.string.split.call(null,v,/,/)):ui.zframes.window_location.url_decode.call(null,v)
));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,clojure.string.replace.call(null,s,/^\?/,""),/&/));
});
ui.zframes.window_location.gen_query_string = (function ui$zframes$window_location$gen_query_string(params){
return ["?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__29669){
var vec__29670 = p__29669;
var k = cljs.core.nth.call(null,vec__29670,(0),null);
var v = cljs.core.nth.call(null,vec__29670,(1),null);
if(cljs.core.set_QMARK_.call(null,v)){
return [cljs.core.name.call(null,k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,",",v))].join('');
} else {
return [cljs.core.name.call(null,k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ui.zframes.window_location.url_encode.call(null,v))].join('');

}
}),params)))].join('');
});
ui.zframes.window_location.get_location = (function ui$zframes$window_location$get_location(){
var loc = window.location;
var href = loc.href;
var hash = clojure.string.replace.call(null,(function (){var or__4131__auto__ = loc.hash;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})(),/^#/,"");
var hash_params = (function (){try{return ui.zframes.window_location.parse_querystring.call(null,hash);
}catch (e29673){if((e29673 instanceof Error)){
var e = e29673;
return console.log(e);
} else {
throw e29673;

}
}})();
var search = loc.search;
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"hash","hash",-13781596),new cljs.core.Keyword(null,"protocol","protocol",652470118),new cljs.core.Keyword(null,"hash-params","hash-params",-6787222),new cljs.core.Keyword(null,"hostname","hostname",2105669933),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"host","host",-1558485167),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"origin","origin",1037372088),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),new cljs.core.Keyword(null,"href","href",-793805698)],[hash,loc.protocol,hash_params,loc.hostname,search,loc.host,cljs.core.first.call(null,clojure.string.split.call(null,href,/#/)),loc.origin,ui.zframes.window_location.parse_querystring.call(null,search),href]);
});
ui.zframes.window_location.window_location = (function ui$zframes$window_location$window_location(var_args){
var args__4736__auto__ = [];
var len__4730__auto___29676 = arguments.length;
var i__4731__auto___29677 = (0);
while(true){
if((i__4731__auto___29677 < len__4730__auto___29676)){
args__4736__auto__.push((arguments[i__4731__auto___29677]));

var G__29678 = (i__4731__auto___29677 + (1));
i__4731__auto___29677 = G__29678;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return ui.zframes.window_location.window_location.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

ui.zframes.window_location.window_location.cljs$core$IFn$_invoke$arity$variadic = (function (coef,opts){
return cljs.core.assoc.call(null,coef,new cljs.core.Keyword(null,"location","location",1815599388),ui.zframes.window_location.get_location.call(null));
});

ui.zframes.window_location.window_location.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
ui.zframes.window_location.window_location.cljs$lang$applyTo = (function (seq29674){
var G__29675 = cljs.core.first.call(null,seq29674);
var seq29674__$1 = cljs.core.next.call(null,seq29674);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29675,seq29674__$1);
});

re_frame.core.reg_cofx.call(null,new cljs.core.Keyword(null,"window-location","window-location",-1918888571),ui.zframes.window_location.window_location);

//# sourceMappingURL=window_location.js.map
