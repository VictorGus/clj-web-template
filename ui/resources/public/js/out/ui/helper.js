// Compiled by ClojureScript 1.10.520 {}
goog.provide('ui.helper');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('route_map.core');
goog.require('chrono.core');
goog.require('chrono.now');
goog.require('clojure.string');
goog.require('ui.routes');
ui.helper.iso_fmt = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"year","year",335913393),"-",new cljs.core.Keyword(null,"month","month",-1960248533),"-",new cljs.core.Keyword(null,"day","day",-274800446),"T",new cljs.core.Keyword(null,"hour","hour",-555989214),":",new cljs.core.Keyword(null,"min","min",444991522),":",new cljs.core.Keyword(null,"sec","sec",-1580376553)], null);
ui.helper.iso_date = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"year","year",335913393),"-",new cljs.core.Keyword(null,"month","month",-1960248533),"-",new cljs.core.Keyword(null,"day","day",-274800446)], null);
ui.helper.day_ago = (function ui$helper$day_ago(){
return chrono.core.format.call(null,chrono.core._.call(null,chrono.now.local.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"day","day",-274800446),(1)], null)),ui.helper.iso_date);
});
ui.helper.day_ago_with_time = (function ui$helper$day_ago_with_time(){
return chrono.core.format.call(null,chrono.core._.call(null,chrono.now.local.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"day","day",-274800446),(1)], null)),ui.helper.iso_fmt);
});
ui.helper.tomorrow_date = (function ui$helper$tomorrow_date(){
return chrono.core.format.call(null,chrono.core._PLUS_.call(null,chrono.now.local.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"day","day",-274800446),(1)], null)),ui.helper.iso_date);
});
ui.helper.tomorrow_date_with_time = (function ui$helper$tomorrow_date_with_time(){
return chrono.core.format.call(null,chrono.core._PLUS_.call(null,chrono.now.local.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"day","day",-274800446),(1)], null)),ui.helper.iso_fmt);
});
ui.helper.vec_search = (function ui$helper$vec_search(value,coll){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (el){
var target_QMARK_ = ((cljs.core.map_QMARK_.call(null,el))?cljs.core.first.call(null,cljs.core.filter.call(null,(function (el_inner){
if(((cljs.core.map_QMARK_.call(null,el_inner)) || (cljs.core.vector_QMARK_.call(null,el_inner)))){
return ui.helper.vec_search.call(null,value,el_inner);
} else {
return cljs.core._EQ_.call(null,el_inner,value);
}
}),cljs.core.vals.call(null,el))):((cljs.core.vector_QMARK_.call(null,el))?ui.helper.vec_search.call(null,value,el):cljs.core._EQ_.call(null,el,value)
));
return target_QMARK_;
}),(function (){var G__34374 = coll;
if(cljs.core.map_QMARK_.call(null,coll)){
return cljs.core.vals.call(null,G__34374);
} else {
return G__34374;
}
})()));
});
ui.helper.href_without_domain = (function ui$helper$href_without_domain(uri){
var slash = cljs.core.first.call(null,String.fromCharCode((47)));
var slashes = cljs.core.get.call(null,cljs.core.frequencies.call(null,uri),slash);
return ["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,"/",cljs.core.take_last.call(null,(slashes - (3)),clojure.string.split.call(null,uri,cljs.core.re_pattern.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(slash))))))].join('');
});
ui.helper.make_href = (function ui$helper$make_href(uri,item){
return [ui.helper.href_without_domain.call(null,uri),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(item)].join('');
});
ui.helper.make_back_href = (function ui$helper$make_back_href(uri){
var uri__$1 = ui.helper.href_without_domain.call(null,uri);
var uri__$2 = clojure.string.split.call(null,uri__$1,cljs.core.re_pattern.call(null,"/"));
var uri__$3 = cljs.core.butlast.call(null,uri__$2);
return clojure.string.join.call(null,"/",uri__$3);
});
ui.helper.flatten_map = (function ui$helper$flatten_map(var_args){
var args__4736__auto__ = [];
var len__4730__auto___34381 = arguments.length;
var i__4731__auto___34382 = (0);
while(true){
if((i__4731__auto___34382 < len__4730__auto___34381)){
args__4736__auto__.push((arguments[i__4731__auto___34382]));

var G__34383 = (i__4731__auto___34382 + (1));
i__4731__auto___34382 = G__34383;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return ui.helper.flatten_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

ui.helper.flatten_map.cljs$core$IFn$_invoke$arity$variadic = (function (m,p__34377){
var vec__34378 = p__34377;
var path = cljs.core.nth.call(null,vec__34378,(0),null);
return cljs.core.reduce_kv.call(null,((function (vec__34378,path){
return (function (acc,k,v){
var path__$1 = cljs.core.conj.call(null,(function (){var or__4131__auto__ = path;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),k);
if(cljs.core.coll_QMARK_.call(null,v)){
return cljs.core.concat.call(null,acc,ui.helper.flatten_map.call(null,v,path__$1));
} else {
return cljs.core.conj.call(null,acc,path__$1);
}
});})(vec__34378,path))
,cljs.core.PersistentVector.EMPTY,m);
});

ui.helper.flatten_map.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
ui.helper.flatten_map.cljs$lang$applyTo = (function (seq34375){
var G__34376 = cljs.core.first.call(null,seq34375);
var seq34375__$1 = cljs.core.next.call(null,seq34375);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34376,seq34375__$1);
});

ui.helper.vec_remove = (function ui$helper$vec_remove(coll,pos){
return cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.subvec.call(null,coll,(0),pos),cljs.core.subvec.call(null,coll,(pos + (1)))));
});
ui.helper.convert_to_iso = (function ui$helper$convert_to_iso(date){
var iso = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"year","year",335913393),"-",new cljs.core.Keyword(null,"month","month",-1960248533),"-",new cljs.core.Keyword(null,"day","day",-274800446),"T",new cljs.core.Keyword(null,"hour","hour",-555989214),":",new cljs.core.Keyword(null,"min","min",444991522),":",new cljs.core.Keyword(null,"sec","sec",-1580376553)], null);
return chrono.core.format.call(null,chrono.core.parse.call(null,date),iso);
});

//# sourceMappingURL=helper.js.map
