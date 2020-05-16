// Compiled by ClojureScript 1.10.520 {}
goog.provide('chrono.io');
goog.require('cljs.core');
goog.require('chrono.util');
goog.require('chrono.ops');
goog.require('clojure.string');
chrono.io.format_str = (function chrono$io$format_str(v,p__28160,lang){
var vec__28161 = p__28160;
var seq__28162 = cljs.core.seq.call(null,vec__28161);
var first__28163 = cljs.core.first.call(null,seq__28162);
var seq__28162__$1 = cljs.core.next.call(null,seq__28162);
var fmt = first__28163;
var fmt_args = seq__28162__$1;
if(cljs.core.truth_((function (){var and__4120__auto__ = lang;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.contains_QMARK_.call(null,chrono.util.locale.call(null,lang),fmt);
} else {
return and__4120__auto__;
}
})())){
var short_QMARK_ = (!(cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,((function (vec__28161,seq__28162,first__28163,seq__28162__$1,fmt,fmt_args){
return (function (p1__28159_SHARP_){
return cljs.core._EQ_.call(null,p1__28159_SHARP_,new cljs.core.Keyword(null,"short","short",1928760516));
});})(vec__28161,seq__28162,first__28163,seq__28162__$1,fmt,fmt_args))
,fmt_args))));
return cljs.core.get_in.call(null,fmt.call(null,chrono.util.locale.call(null,lang)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,((short_QMARK_)?new cljs.core.Keyword(null,"short","short",1928760516):new cljs.core.Keyword(null,"name","name",1843675177))], null));
} else {
var width = (function (){var or__4131__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.integer_QMARK_,fmt_args));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return chrono.util.format_patterns.call(null,fmt);
}
})();
var G__28164 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(v);
if(cljs.core.truth_(width)){
return chrono.util.pad_zero.call(null,width,G__28164);
} else {
return G__28164;
}
}
});
chrono.io.internal_parse = (function chrono$io$internal_parse(s,fmt,strict_QMARK_){
var match = (function chrono$io$internal_parse_$_match(f,s__$1){
return cljs.core.re_matches.call(null,cljs.core.re_pattern.call(null,(function (){var $ = (function (){var or__4131__auto__ = chrono.util.parse_patterns.call(null,f);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return chrono.util.sanitize.call(null,f);
}
})();
return ["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1($),")","(.+)?"].join('');
})()),s__$1);
});
var match_collection = (function chrono$io$internal_parse_$_match_collection(process,s__$1,f,lang){
var G__28189 = f;
var vec__28190 = G__28189;
var seq__28191 = cljs.core.seq.call(null,vec__28190);
var first__28192 = cljs.core.first.call(null,seq__28191);
var seq__28191__$1 = cljs.core.next.call(null,seq__28191);
var f__$1 = first__28192;
var rest_f = seq__28191__$1;
var s__$2 = s__$1;
var acc = null;
var G__28189__$1 = G__28189;
var s__$3 = s__$2;
var acc__$1 = acc;
while(true){
var vec__28200 = G__28189__$1;
var seq__28201 = cljs.core.seq.call(null,vec__28200);
var first__28202 = cljs.core.first.call(null,seq__28201);
var seq__28201__$1 = cljs.core.next.call(null,seq__28201);
var f__$2 = first__28202;
var rest_f__$1 = seq__28201__$1;
var s__$4 = s__$3;
var acc__$2 = acc__$1;
var unit_QMARK_ = (f__$2 instanceof cljs.core.Keyword);
var vec__28203 = process.call(null,f__$2,s__$4);
var match_QMARK_ = cljs.core.nth.call(null,vec__28203,(0),null);
var s__$5 = cljs.core.nth.call(null,vec__28203,(1),null);
var rest_s = cljs.core.nth.call(null,vec__28203,(2),null);
var parsed_value = ((unit_QMARK_)?chrono.util.parse_val.call(null,s__$5,f__$2,lang):null);
var parsed_QMARK_ = (function (){var or__4131__auto__ = parsed_value;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (!(unit_QMARK_));
}
})();
var acc__$3 = (function (){var G__28206 = acc__$2;
if(cljs.core.truth_(parsed_value)){
return cljs.core.assoc.call(null,G__28206,f__$2,parsed_value);
} else {
return G__28206;
}
})();
if(cljs.core.truth_((function (){var and__4120__auto__ = parsed_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return (((!((rest_s == null)))) && ((!((rest_f__$1 == null)))));
} else {
return and__4120__auto__;
}
})())){
var G__28210 = rest_f__$1;
var G__28211 = rest_s;
var G__28212 = acc__$3;
G__28189__$1 = G__28210;
s__$3 = G__28211;
acc__$1 = G__28212;
continue;
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc__$3,rest_f__$1,rest_s], null);
}
break;
}
});
var lang = cljs.core.ffirst.call(null,cljs.core.meta.call(null,fmt));
var vec__28207 = match_collection.call(null,match,s,fmt,lang);
var acc = cljs.core.nth.call(null,vec__28207,(0),null);
var rest_f = cljs.core.nth.call(null,vec__28207,(1),null);
var rest_s = cljs.core.nth.call(null,vec__28207,(2),null);
if(cljs.core.not.call(null,(function (){var and__4120__auto__ = strict_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return (((!((rest_s == null)))) || ((!((rest_f == null)))));
} else {
return and__4120__auto__;
}
})())){
return acc;
} else {
return null;
}
});
chrono.io.parse = (function chrono$io$parse(var_args){
var G__28214 = arguments.length;
switch (G__28214) {
case 1:
return chrono.io.parse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return chrono.io.parse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

chrono.io.parse.cljs$core$IFn$_invoke$arity$1 = (function (s){
return chrono.io.parse.call(null,s,chrono.util.iso_fmt);
});

chrono.io.parse.cljs$core$IFn$_invoke$arity$2 = (function (s,fmt){
var G__28215 = s;
if((G__28215 == null)){
return null;
} else {
return chrono.io.internal_parse.call(null,G__28215,fmt,false);
}
});

chrono.io.parse.cljs$lang$maxFixedArity = 2;

chrono.io.strict_parse = (function chrono$io$strict_parse(var_args){
var G__28218 = arguments.length;
switch (G__28218) {
case 1:
return chrono.io.strict_parse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return chrono.io.strict_parse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

chrono.io.strict_parse.cljs$core$IFn$_invoke$arity$1 = (function (s){
return chrono.io.strict_parse.call(null,s,chrono.util.iso_fmt);
});

chrono.io.strict_parse.cljs$core$IFn$_invoke$arity$2 = (function (s,fmt){
return chrono.io.internal_parse.call(null,s,fmt,true);
});

chrono.io.strict_parse.cljs$lang$maxFixedArity = 2;

chrono.io.format = (function chrono$io$format(var_args){
var G__28221 = arguments.length;
switch (G__28221) {
case 1:
return chrono.io.format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return chrono.io.format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

chrono.io.format.cljs$core$IFn$_invoke$arity$1 = (function (date_coll){
return chrono.io.format.call(null,date_coll,chrono.util.iso_fmt);
});

chrono.io.format.cljs$core$IFn$_invoke$arity$2 = (function (date_coll,fmt_vec){
var lang = cljs.core.ffirst.call(null,cljs.core.meta.call(null,fmt_vec));
return clojure.string.join.call(null,cljs.core.mapv.call(null,((function (lang){
return (function (fmt){
var fmt__$1 = (function (){var G__28222 = fmt;
if((!(cljs.core.vector_QMARK_.call(null,fmt)))){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__28222],null));
} else {
return G__28222;
}
})();
var f = cljs.core.first.call(null,fmt__$1);
var v = cljs.core.get.call(null,date_coll,f);
var format_fn = (((f instanceof cljs.core.Keyword))?(function (){var or__4131__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.fn_QMARK_,fmt__$1));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return chrono.io.format_str;
}
})():cljs.core.constantly.call(null,(function (){var or__4131__auto__ = v;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return f;
}
})()));
return format_fn.call(null,(function (){var or__4131__auto__ = v;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})(),fmt__$1,lang);
});})(lang))
,fmt_vec));
});

chrono.io.format.cljs$lang$maxFixedArity = 2;

chrono.io.date_convertable_QMARK_ = (function chrono$io$date_convertable_QMARK_(value,in$,out){
return chrono.ops.eq_QMARK_.call(null,chrono.io.parse.call(null,value,in$),chrono.io.parse.call(null,chrono.io.format.call(null,chrono.io.parse.call(null,value,in$),out),out));
});
chrono.io.date_valid_QMARK_ = (function chrono$io$date_valid_QMARK_(value,fmt){
return cljs.core.not.call(null,isNaN(Date.parse(chrono.io.format.call(null,chrono.io.parse.call(null,value,fmt),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"year","year",335913393),"-",new cljs.core.Keyword(null,"month","month",-1960248533),"-",new cljs.core.Keyword(null,"day","day",-274800446)], null)))));
});

//# sourceMappingURL=io.js.map
