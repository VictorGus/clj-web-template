// Compiled by ClojureScript 1.10.520 {}
goog.provide('ui.routes');
goog.require('cljs.core');
ui.routes.routes = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,".",".",335144435),new cljs.core.Keyword("patients","index","patients/index",-161691117),"patients",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,".",".",335144435),new cljs.core.Keyword("patients","index","patients/index",-161691117),"create",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,".",".",335144435),new cljs.core.Keyword("ui.patient-workflow.card.model","create","ui.patient-workflow.card.model/create",-1068813488)], null)], null),"patient",cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"uid","uid",-1447769400)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,".",".",335144435),new cljs.core.Keyword("ui.patient-workflow.card.model","index-card","ui.patient-workflow.card.model/index-card",-4750880),"edit",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,".",".",335144435),new cljs.core.Keyword("ui.patient-workflow.card.model","edit","ui.patient-workflow.card.model/edit",1951274658)], null)], null)]),"audit",new cljs.core.PersistentArrayMap(null, 1, ["logs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,".",".",335144435),new cljs.core.Keyword("ui.audit.logs.model","logs","ui.audit.logs.model/logs",243953391)], null)], null),"login",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,".",".",335144435),new cljs.core.Keyword("ui.login.model","login","ui.login.model/login",-2002099855)], null)], null);
ui.routes.route_index_STAR_ = (function ui$routes$route_index_STAR_(route,pth){
return cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,".",".",335144435).cljs$core$IFn$_invoke$arity$1(route))],[cljs.core.assoc.call(null,cljs.core.select_keys.call(null,route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"breadcrumb","breadcrumb",1839971032),new cljs.core.Keyword(null,"audit-title","audit-title",-1624616843)], null)),new cljs.core.Keyword(null,"pth","pth",259580031),pth)]),cljs.core.reduce_kv.call(null,(function (acc,k,v){
if(((typeof k === 'string') || (cljs.core.vector_QMARK_.call(null,k)))){
return cljs.core.merge.call(null,acc,ui.routes.route_index_STAR_.call(null,v,cljs.core.into.call(null,pth,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,"/"], null))));
} else {
return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,route));
});
ui.routes.route_index = ui.routes.route_index_STAR_.call(null,ui.routes.routes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/"], null));

//# sourceMappingURL=routes.js.map
