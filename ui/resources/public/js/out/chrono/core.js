// Compiled by ClojureScript 1.10.520 {}
goog.provide('chrono.core');
goog.require('cljs.core');
goog.require('chrono.tz');
goog.require('chrono.ops');
goog.require('chrono.io');
chrono.core.datetime = (function chrono$core$datetime(t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"datetime","datetime",494675702),new cljs.core.Keyword(null,"year","year",335913393),(1900),new cljs.core.Keyword(null,"month","month",-1960248533),(1),new cljs.core.Keyword(null,"day","day",-274800446),(1)], null),t);
});
chrono.core.parse = chrono.io.parse;
chrono.core.format = chrono.io.format;
chrono.core.strict_parse = chrono.io.strict_parse;
chrono.core.timestamp = (function chrono$core$timestamp(t){
return null;
});
chrono.core.diff = (function chrono$core$diff(t,t_SINGLEQUOTE_){
return null;
});
chrono.core.normalize = chrono.ops.normalize;
chrono.core.date_convertable_QMARK_ = chrono.io.date_convertable_QMARK_;
chrono.core.date_valid_QMARK_ = chrono.io.date_valid_QMARK_;
chrono.core._PLUS_ = chrono.ops.plus;
chrono.core._ = chrono.ops.minus;
chrono.core._EQ_ = chrono.ops.eq_QMARK_;
chrono.core.not_EQ_ = chrono.ops.not_eq_QMARK_;
chrono.core.eq_QMARK_ = chrono.ops.eq_QMARK_;
chrono.core._GT_ = chrono.ops.gt;
chrono.core._GT__EQ_ = chrono.ops.gte;
chrono.core._LT_ = chrono.ops.lt;
chrono.core._LT__EQ_ = chrono.ops.lte;
chrono.core.compare = chrono.ops.cmp;

//# sourceMappingURL=core.js.map
