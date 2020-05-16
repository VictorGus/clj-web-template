// Compiled by ClojureScript 1.10.520 {}
goog.provide('chrono.tz');
goog.require('cljs.core');
goog.require('chrono.calendar');
goog.require('chrono.ops');
chrono.tz.from_utc = (function chrono$tz$from_utc(t,tz){
return null;
});
chrono.tz._STAR_more_or_eq = (function chrono$tz$_STAR_more_or_eq(y,m,dw,d){
var dw_SINGLEQUOTE_ = chrono.calendar.day_of_week.call(null,y,m,d);
if(cljs.core._EQ_.call(null,dw_SINGLEQUOTE_,dw)){
return d;
} else {
if((dw_SINGLEQUOTE_ > dw)){
return ((d + ((7) - dw_SINGLEQUOTE_)) + dw);
} else {
if((dw_SINGLEQUOTE_ < dw)){
return (d + (dw - dw_SINGLEQUOTE_));
} else {
return null;
}
}
}
});
chrono.tz.more_or_eq = cljs.core.memoize.call(null,chrono.tz._STAR_more_or_eq);
if((typeof chrono !== 'undefined') && (typeof chrono.tz !== 'undefined') && (typeof chrono.tz.day_saving !== 'undefined')){
} else {
/**
 * [tz y]
 */
chrono.tz.day_saving = (function (){var method_table__4613__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"chrono.tz","day-saving"),((function (method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__){
return (function (tz,_){
return tz;
});})(method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
cljs.core._add_method.call(null,chrono.tz.day_saving,new cljs.core.Keyword(null,"ny","ny",1701791641),(function (_,y){
if((y > (2006))){
} else {
throw (new Error(["Assert failed: ","Not impl.","\n","(> y 2006)"].join('')));
}

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"offset","offset",296498311),(5),new cljs.core.Keyword(null,"ds","ds",-257415859),(-1),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"year","year",335913393),y,new cljs.core.Keyword(null,"month","month",-1960248533),(3),new cljs.core.Keyword(null,"day","day",-274800446),chrono.tz.more_or_eq.call(null,y,(3),(0),(8)),new cljs.core.Keyword(null,"hour","hour",-555989214),(2),new cljs.core.Keyword(null,"min","min",444991522),(0)], null),new cljs.core.Keyword(null,"out","out",-910545517),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"year","year",335913393),y,new cljs.core.Keyword(null,"month","month",-1960248533),(11),new cljs.core.Keyword(null,"day","day",-274800446),chrono.tz.more_or_eq.call(null,y,(11),(0),(1)),new cljs.core.Keyword(null,"hour","hour",-555989214),(2),new cljs.core.Keyword(null,"min","min",444991522),(0)], null)], null);
}));
chrono.tz._STAR_day_saving_with_utc = (function chrono$tz$_STAR_day_saving_with_utc(tz,y){
var ds = chrono.tz.day_saving.call(null,tz,y);
return cljs.core.assoc.call(null,ds,new cljs.core.Keyword(null,"in-utc","in-utc",793477293),chrono.ops.plus.call(null,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(ds),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hour","hour",-555989214),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(ds)], null)),new cljs.core.Keyword(null,"out-utc","out-utc",1081666062),chrono.ops.plus.call(null,new cljs.core.Keyword(null,"out","out",-910545517).cljs$core$IFn$_invoke$arity$1(ds),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hour","hour",-555989214),(new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(ds) + new cljs.core.Keyword(null,"ds","ds",-257415859).cljs$core$IFn$_invoke$arity$1(ds))], null)));
});
chrono.tz.day_saving_with_utc = cljs.core.memoize.call(null,chrono.tz._STAR_day_saving_with_utc);
chrono.tz.to_utc = (function chrono$tz$to_utc(t){
var ds = chrono.tz.day_saving_with_utc.call(null,new cljs.core.Keyword(null,"tz","tz",278339241).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"year","year",335913393).cljs$core$IFn$_invoke$arity$1(t));
var off = (cljs.core.truth_((function (){var or__4131__auto__ = chrono.ops.lte.call(null,t,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(ds));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return chrono.ops.gt.call(null,t,new cljs.core.Keyword(null,"out","out",-910545517).cljs$core$IFn$_invoke$arity$1(ds));
}
})())?new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(ds):(new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(ds) + new cljs.core.Keyword(null,"ds","ds",-257415859).cljs$core$IFn$_invoke$arity$1(ds)));
return chrono.ops.plus.call(null,cljs.core.dissoc.call(null,t,new cljs.core.Keyword(null,"tz","tz",278339241)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hour","hour",-555989214),off], null));
});
chrono.tz.to_tz = (function chrono$tz$to_tz(t,tz){
var ds = chrono.tz.day_saving_with_utc.call(null,tz,new cljs.core.Keyword(null,"year","year",335913393).cljs$core$IFn$_invoke$arity$1(t));
var off = (cljs.core.truth_((function (){var or__4131__auto__ = chrono.ops.lte.call(null,t,new cljs.core.Keyword(null,"in-utc","in-utc",793477293).cljs$core$IFn$_invoke$arity$1(ds));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return chrono.ops.gt.call(null,t,new cljs.core.Keyword(null,"out-utc","out-utc",1081666062).cljs$core$IFn$_invoke$arity$1(ds));
}
})())?new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(ds):(new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(ds) + new cljs.core.Keyword(null,"ds","ds",-257415859).cljs$core$IFn$_invoke$arity$1(ds)));
return cljs.core.assoc.call(null,chrono.ops.plus.call(null,t,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hour","hour",-555989214),(- off)], null)),new cljs.core.Keyword(null,"tz","tz",278339241),tz);
});
chrono.tz._STAR_ddd = (function chrono$tz$_STAR_ddd(y){
return (((((365) * y) + cljs.core.quot.call(null,y,(4))) + cljs.core.quot.call(null,y,(-100))) + cljs.core.quot.call(null,y,(400)));
});
chrono.tz._STAR_mmm = (function chrono$tz$_STAR_mmm(m){
return cljs.core.quot.call(null,(((306) * m) + (5)),(10));
});
chrono.tz.g = (function chrono$tz$g(y,m,d){
var m__$1 = cljs.core.rem.call(null,(m + (9)),(12));
var y__$1 = (y - cljs.core.quot.call(null,m__$1,(10)));
return ((chrono.tz._STAR_ddd.call(null,y__$1) + chrono.tz._STAR_mmm.call(null,m__$1)) + (d - (1)));
});
chrono.tz.d = (function chrono$tz$d(g){
var y = cljs.core.quot.call(null,(((10000) * g) + (14780)),(3652425));
var ddd = (g - chrono.tz._STAR_ddd.call(null,y));
var y__$1 = (((ddd < (0)))?(y - (1)):y);
var ddd__$1 = (((ddd < (0)))?(g - chrono.tz._STAR_ddd.call(null,y__$1)):ddd);
var mi = cljs.core.quot.call(null,(((100) * ddd__$1) + (52)),(3060));
var mm = (cljs.core.rem.call(null,(mi + (2)),(12)) + (1));
var y__$2 = (y__$1 + cljs.core.quot.call(null,(mi + (2)),(12)));
var dd = ((ddd__$1 + (- chrono.tz._STAR_mmm.call(null,mi))) + (1));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [y__$2,mm,dd], null);
});

//# sourceMappingURL=tz.js.map
