// Compiled by ClojureScript 1.10.520 {}
goog.provide('app.routes');
goog.require('cljs.core');
app.routes.routes = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,".",".",335144435),new cljs.core.Keyword("patients","index","patients/index",-161691117)], null);
app.routes.route_index_STAR_ = (function app$routes$route_index_STAR_(route,pth){
return cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,".",".",335144435).cljs$core$IFn$_invoke$arity$1(route))],[cljs.core.assoc.call(null,cljs.core.select_keys.call(null,route,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"breadcrumb","breadcrumb",1839971032)], null)),new cljs.core.Keyword(null,"pth","pth",259580031),pth)]),cljs.core.reduce_kv.call(null,(function (acc,k,v){
if(((typeof k === 'string') || (cljs.core.vector_QMARK_.call(null,k)))){
return cljs.core.merge.call(null,acc,app.routes.route_index_STAR_.call(null,v,cljs.core.into.call(null,pth,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,"/"], null))));
} else {
return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,route));
});
app.routes.route_index = app.routes.route_index_STAR_.call(null,app.routes.routes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/"], null));

//# sourceMappingURL=routes.js.map
