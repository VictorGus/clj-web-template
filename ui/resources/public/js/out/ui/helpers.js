// Compiled by ClojureScript 1.10.520 {}
goog.provide('ui.helpers');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('route_map.core');
goog.require('clojure.string');
goog.require('ui.routes');
ui.helpers.make_href = (function ui$helpers$make_href(uri,item){
var slashes = cljs.core.get.call(null,cljs.core.frequencies.call(null,uri),"/");
return ["#/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,"/",cljs.core.take_last.call(null,(slashes - (3)),clojure.string.split.call(null,uri,/\\//)))),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(item)].join('');
});
ui.helpers.vec_search = (function ui$helpers$vec_search(value,coll){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (el){
var target_QMARK_ = ((cljs.core.map_QMARK_.call(null,el))?cljs.core.first.call(null,cljs.core.filter.call(null,(function (el_inner){
if(((cljs.core.map_QMARK_.call(null,el_inner)) || (cljs.core.vector_QMARK_.call(null,el_inner)))){
return ui.helpers.vec_search.call(null,value,el_inner);
} else {
return cljs.core._EQ_.call(null,el_inner,value);
}
}),cljs.core.vals.call(null,el))):((cljs.core.vector_QMARK_.call(null,el))?ui.helpers.vec_search.call(null,value,el):cljs.core._EQ_.call(null,el,value)
));
return target_QMARK_;
}),(function (){var G__25981 = coll;
if(cljs.core.map_QMARK_.call(null,coll)){
return cljs.core.vals.call(null,G__25981);
} else {
return G__25981;
}
})()));
});

//# sourceMappingURL=helpers.js.map
