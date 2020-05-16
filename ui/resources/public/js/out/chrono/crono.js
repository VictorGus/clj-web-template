// Compiled by ClojureScript 1.10.520 {}
goog.provide('chrono.crono');
goog.require('cljs.core');
goog.require('chrono.core');
goog.require('chrono.now');
chrono.crono.needed_for = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"month","month",-1960248533),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"yaer","yaer",433154378),new cljs.core.Keyword(null,"month","month",-1960248533)], null),new cljs.core.Keyword(null,"day","day",-274800446),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"month","month",-1960248533),new cljs.core.Keyword(null,"day","day",-274800446)], null),new cljs.core.Keyword(null,"hour","hour",-555989214),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"month","month",-1960248533),new cljs.core.Keyword(null,"day","day",-274800446),new cljs.core.Keyword(null,"hour","hour",-555989214)], null),new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"month","month",-1960248533),new cljs.core.Keyword(null,"day","day",-274800446),new cljs.core.Keyword(null,"hour","hour",-555989214),new cljs.core.Keyword(null,"min","min",444991522)], null)], null);
chrono.crono.next_time_assumption = (function chrono$crono$next_time_assumption(current_time,p__30833){
var map__30834 = p__30833;
var map__30834__$1 = (((((!((map__30834 == null))))?(((((map__30834.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30834.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30834):map__30834);
var every = cljs.core.get.call(null,map__30834__$1,new cljs.core.Keyword(null,"every","every",-2060295878));
var at = cljs.core.get.call(null,map__30834__$1,new cljs.core.Keyword(null,"at","at",1476951349));
return null;
});
chrono.crono.next_time = (function chrono$crono$next_time(var_args){
var G__30840 = arguments.length;
switch (G__30840) {
case 1:
return chrono.crono.next_time.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return chrono.crono.next_time.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

chrono.crono.next_time.cljs$core$IFn$_invoke$arity$1 = (function (cfg){
return chrono.crono.next_time.call(null,chrono.now.utc.call(null),cfg);
});

chrono.crono.next_time.cljs$core$IFn$_invoke$arity$2 = (function (current_time,p__30841){
var map__30842 = p__30841;
var map__30842__$1 = (((((!((map__30842 == null))))?(((((map__30842.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30842.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30842):map__30842);
var when = map__30842__$1;
var every = cljs.core.get.call(null,map__30842__$1,new cljs.core.Keyword(null,"every","every",-2060295878));
var at = cljs.core.get.call(null,map__30842__$1,new cljs.core.Keyword(null,"at","at",1476951349));
var assumptions = cljs.core.map.call(null,((function (map__30842,map__30842__$1,when,every,at){
return (function (p1__30836_SHARP_){
return cljs.core.merge.call(null,cljs.core.select_keys.call(null,current_time,cljs.core.get.call(null,chrono.crono.needed_for,every)),p1__30836_SHARP_);
});})(map__30842,map__30842__$1,when,every,at))
,((cljs.core.map_QMARK_.call(null,at))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [at], null):at));
if((cljs.core.first.call(null,cljs.core.filter.call(null,((function (assumptions,map__30842,map__30842__$1,when,every,at){
return (function (p1__30837_SHARP_){
return chrono.core._LT_.call(null,current_time,p1__30837_SHARP_);
});})(assumptions,map__30842,map__30842__$1,when,every,at))
,assumptions)) == null)){
return chrono.core._PLUS_.call(null,cljs.core.first.call(null,assumptions),cljs.core.PersistentArrayMap.createAsIfByAssoc([every,(1)]));
} else {
return cljs.core.first.call(null,cljs.core.filter.call(null,((function (assumptions,map__30842,map__30842__$1,when,every,at){
return (function (p1__30838_SHARP_){
return chrono.core._LT_.call(null,current_time,p1__30838_SHARP_);
});})(assumptions,map__30842,map__30842__$1,when,every,at))
,assumptions));
}
});

chrono.crono.next_time.cljs$lang$maxFixedArity = 2;

chrono.crono.now_QMARK_ = (function chrono$crono$now_QMARK_(var_args){
var G__30846 = arguments.length;
switch (G__30846) {
case 1:
return chrono.crono.now_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return chrono.crono.now_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

chrono.crono.now_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (cfg){
return chrono.crono.now_QMARK_.call(null,chrono.now.utc.call(null),cfg);
});

chrono.crono.now_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (current_time,p__30847){
var map__30848 = p__30847;
var map__30848__$1 = (((((!((map__30848 == null))))?(((((map__30848.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30848.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30848):map__30848);
var when = map__30848__$1;
var every = cljs.core.get.call(null,map__30848__$1,new cljs.core.Keyword(null,"every","every",-2060295878));
var until = cljs.core.get.call(null,map__30848__$1,new cljs.core.Keyword(null,"until","until",-1189166390));
if(cljs.core.truth_(until)){
var utmost_time = cljs.core.merge.call(null,cljs.core.select_keys.call(null,current_time,cljs.core.get.call(null,chrono.crono.needed_for,every)),until);
return chrono.core._LT_.call(null,current_time,utmost_time);
} else {
return true;
}
});

chrono.crono.now_QMARK_.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=crono.js.map
