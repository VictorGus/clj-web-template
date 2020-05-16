// Compiled by ClojureScript 1.10.520 {}
goog.provide('chrono.util');
goog.require('cljs.core');
goog.require('clojure.string');
if((typeof chrono !== 'undefined') && (typeof chrono.util !== 'undefined') && (typeof chrono.util.locale !== 'undefined')){
} else {
chrono.util.locale = (function (){var method_table__4613__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"chrono.util","locale"),((function (method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__){
return (function (x){
return x;
});})(method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
chrono.util.parse_patterns = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"year","year",335913393),"(?:\\d\\d\\d\\d|\\d\\d\\d|\\d\\d|\\d)",new cljs.core.Keyword(null,"month","month",-1960248533),"(?:1[0-2]|0[1-9]|[1-9]|\\p{L}+\\.?)",new cljs.core.Keyword(null,"day","day",-274800446),"(?:3[0-1]|[1-2]\\d|0[1-9]|[1-9])",new cljs.core.Keyword(null,"hour","hour",-555989214),"(?:2[0-3]|[0-1]\\d|\\d)",new cljs.core.Keyword(null,"min","min",444991522),"(?:[0-5]\\d|\\d)",new cljs.core.Keyword(null,"sec","sec",-1580376553),"(?:[0-5]\\d|\\d)",new cljs.core.Keyword(null,"ms","ms",-1152709733),"(?:\\d\\d\\d|\\d\\d|\\d)"], null);
chrono.util.format_patterns = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"year","year",335913393),(4),new cljs.core.Keyword(null,"month","month",-1960248533),(2),new cljs.core.Keyword(null,"day","day",-274800446),(2),new cljs.core.Keyword(null,"hour","hour",-555989214),(2),new cljs.core.Keyword(null,"min","min",444991522),(2),new cljs.core.Keyword(null,"sec","sec",-1580376553),(2),new cljs.core.Keyword(null,"ms","ms",-1152709733),(3)], null);
chrono.util.sanitize = (function chrono$util$sanitize(s){
return clojure.string.replace.call(null,s,/[-.\+*?\[^\]$(){}=!<>|:\\]/,(function (p1__28037_SHARP_){
return ["\\",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28037_SHARP_)].join('');
}));
});
chrono.util.iso_fmt = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"year","year",335913393),"-",new cljs.core.Keyword(null,"month","month",-1960248533),"-",new cljs.core.Keyword(null,"day","day",-274800446),"T",new cljs.core.Keyword(null,"hour","hour",-555989214),":",new cljs.core.Keyword(null,"min","min",444991522),":",new cljs.core.Keyword(null,"sec","sec",-1580376553),".",new cljs.core.Keyword(null,"ms","ms",-1152709733)], null);
chrono.util.parse_name = (function chrono$util$parse_name(name,unit,lang){
return cljs.core.ffirst.call(null,cljs.core.doall.call(null,cljs.core.filter.call(null,(function (p1__28038_SHARP_){
return cljs.core.re_matches.call(null,cljs.core.re_pattern.call(null,new cljs.core.Keyword(null,"regex","regex",939488856).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,p1__28038_SHARP_))),name);
}),cljs.core.get.call(null,chrono.util.locale.call(null,lang),unit))));
});
chrono.util.parse_int = (function chrono$util$parse_int(x){
if(typeof x === 'string'){
return parseInt(x);
} else {
return null;
}
});
chrono.util.parse_val = (function chrono$util$parse_val(x,unit,lang){
var or__4131__auto__ = chrono.util.parse_int.call(null,x);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return chrono.util.parse_name.call(null,x,unit,lang);
}
});
chrono.util.leap_year_QMARK_ = (function chrono$util$leap_year_QMARK_(y){
return (((cljs.core.rem.call(null,y,(4)) === (0))) && ((((cljs.core.rem.call(null,y,(100)) > (0))) || ((cljs.core.rem.call(null,y,(400)) === (0))))));
});
chrono.util.days_in_month = (function chrono$util$days_in_month(p__28039){
var map__28040 = p__28039;
var map__28040__$1 = (((((!((map__28040 == null))))?(((((map__28040.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28040.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28040):map__28040);
var m = cljs.core.get.call(null,map__28040__$1,new cljs.core.Keyword(null,"month","month",-1960248533));
var y = cljs.core.get.call(null,map__28040__$1,new cljs.core.Keyword(null,"year","year",335913393));
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [(4),null,(6),null,(11),null,(9),null], null), null),m)){
return (30);
} else {
if(((chrono.util.leap_year_QMARK_.call(null,y)) && (cljs.core._EQ_.call(null,(2),m)))){
return (29);
} else {
if(cljs.core._EQ_.call(null,(2),m)){
return (28);
} else {
return (31);

}
}
}
});
chrono.util.simplify = (function chrono$util$simplify(var_args){
var G__28043 = arguments.length;
switch (G__28043) {
case 2:
return chrono.util.simplify.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return chrono.util.simplify.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

chrono.util.simplify.cljs$core$IFn$_invoke$arity$2 = (function (key,acc){
return chrono.util.simplify.call(null,key,null,acc);
});

chrono.util.simplify.cljs$core$IFn$_invoke$arity$3 = (function (key,max,p__28044){
var vec__28045 = p__28044;
var t = cljs.core.nth.call(null,vec__28045,(0),null);
var r = cljs.core.nth.call(null,vec__28045,(1),null);
var v = cljs.core.get.call(null,t,key);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.assoc.call(null,t,key,(cljs.core.truth_(v)?(cljs.core.truth_(max)?cljs.core.rem.call(null,(r + v),max):(r + v)):r)),(cljs.core.truth_((function (){var and__4120__auto__ = v;
if(cljs.core.truth_(and__4120__auto__)){
return max;
} else {
return and__4120__auto__;
}
})())?cljs.core.quot.call(null,(r + v),max):(0))],null));
});

chrono.util.simplify.cljs$lang$maxFixedArity = 3;

chrono.util.add_days = (function chrono$util$add_days(t,r){
return cljs.core.update.call(null,t,new cljs.core.Keyword(null,"day","day",-274800446),(function (p1__28049_SHARP_){
return (r + (function (){var or__4131__auto__ = p1__28049_SHARP_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})());
}));
});
chrono.util.simplify_month = (function chrono$util$simplify_month(f){
return cljs.core.update.call(null,cljs.core.update.call(null,f,new cljs.core.Keyword(null,"month","month",-1960248533),(function (p1__28050_SHARP_){
return cljs.core.rem.call(null,p1__28050_SHARP_,(12));
})),new cljs.core.Keyword(null,"year","year",335913393),(function (p1__28051_SHARP_){
return (p1__28051_SHARP_ + cljs.core.quot.call(null,new cljs.core.Keyword(null,"month","month",-1960248533).cljs$core$IFn$_invoke$arity$1(f),(12)));
}));
});
chrono.util.simplify_day = (function chrono$util$simplify_day(f){
return cljs.core.update.call(null,cljs.core.update.call(null,f,new cljs.core.Keyword(null,"day","day",-274800446),(function (p1__28052_SHARP_){
return (p1__28052_SHARP_ - chrono.util.days_in_month.call(null,f));
})),new cljs.core.Keyword(null,"month","month",-1960248533),cljs.core.inc);
});
chrono.util.simplify_date = (function chrono$util$simplify_date(f){
if(((12) < new cljs.core.Keyword(null,"month","month",-1960248533).cljs$core$IFn$_invoke$arity$1(f))){
return chrono.util.simplify_date.call(null,chrono.util.simplify_month.call(null,f));
} else {
if((chrono.util.days_in_month.call(null,f) < new cljs.core.Keyword(null,"day","day",-274800446).cljs$core$IFn$_invoke$arity$1(f))){
return chrono.util.simplify_date.call(null,chrono.util.simplify_day.call(null,f));
} else {
return f;

}
}
});
chrono.util.normalize = (function chrono$util$normalize(t){
var G__28053 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(t);
var G__28053__$1 = (((G__28053 instanceof cljs.core.Keyword))?G__28053.fqn:null);
switch (G__28053__$1) {
case "datetime":
return chrono.util.simplify_date.call(null,cljs.core.apply.call(null,chrono.util.add_days,chrono.util.simplify.call(null,new cljs.core.Keyword(null,"hour","hour",-555989214),(24),chrono.util.simplify.call(null,new cljs.core.Keyword(null,"minute","minute",-642875969),(60),chrono.util.simplify.call(null,new cljs.core.Keyword(null,"second","second",-444702010),(60),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,(0)], null))))));

break;
case "time":
return cljs.core.first.call(null,chrono.util.simplify.call(null,new cljs.core.Keyword(null,"hour","hour",-555989214),chrono.util.simplify.call(null,new cljs.core.Keyword(null,"minute","minute",-642875969),(60),chrono.util.simplify.call(null,new cljs.core.Keyword(null,"second","second",-444702010),(60),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,(0)], null)))));

break;
default:
return t;

}
});
chrono.util.pad_str = (function chrono$util$pad_str(p,n,s){
return clojure.string.join.call(null,cljs.core.reverse.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,cljs.core.reverse.call(null,s),cljs.core.repeat.call(null,p)))));
});
chrono.util.pad_zero = cljs.core.partial.call(null,chrono.util.pad_str,"0");

//# sourceMappingURL=util.js.map
