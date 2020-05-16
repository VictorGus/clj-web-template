// Compiled by ClojureScript 1.10.520 {}
goog.provide('chrono.now');
goog.require('cljs.core');
goog.require('chrono.ops');
chrono.now.tz_offset = (function chrono$now$tz_offset(){
return chrono.ops.normalize.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"min","min",444991522)],[(- (new Date()).getTimezoneOffset())]));
});
chrono.now.local = (function chrono$now$local(){
var now = (new Date());
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"year","year",335913393),now.getFullYear(),new cljs.core.Keyword(null,"month","month",-1960248533),(now.getMonth() + (1)),new cljs.core.Keyword(null,"day","day",-274800446),now.getDate(),new cljs.core.Keyword(null,"hour","hour",-555989214),now.getHours(),new cljs.core.Keyword(null,"min","min",444991522),now.getMinutes(),new cljs.core.Keyword(null,"sec","sec",-1580376553),now.getSeconds(),new cljs.core.Keyword(null,"ms","ms",-1152709733),now.getMilliseconds()], null);
});
chrono.now.utc = (function chrono$now$utc(){
var now = (new Date());
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"year","year",335913393),now.getUTCFullYear(),new cljs.core.Keyword(null,"month","month",-1960248533),(now.getUTCMonth() + (1)),new cljs.core.Keyword(null,"day","day",-274800446),now.getUTCDate(),new cljs.core.Keyword(null,"hour","hour",-555989214),now.getUTCHours(),new cljs.core.Keyword(null,"min","min",444991522),now.getUTCMinutes(),new cljs.core.Keyword(null,"sec","sec",-1580376553),now.getUTCSeconds(),new cljs.core.Keyword(null,"ms","ms",-1152709733),now.getUTCMilliseconds()], null);
});
chrono.now.today = (function chrono$now$today(){
return cljs.core.select_keys.call(null,chrono.now.local.call(null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"month","month",-1960248533),new cljs.core.Keyword(null,"day","day",-274800446)], null));
});
chrono.now.utc_today = (function chrono$now$utc_today(){
return cljs.core.select_keys.call(null,chrono.now.utc.call(null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"month","month",-1960248533),new cljs.core.Keyword(null,"day","day",-274800446)], null));
});

//# sourceMappingURL=now.js.map
