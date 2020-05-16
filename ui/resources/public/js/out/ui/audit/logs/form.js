// Compiled by ClojureScript 1.10.520 {}
goog.provide('ui.audit.logs.form');
goog.require('cljs.core');
goog.require('re_frame.core');
ui.audit.logs.form.form_path = new cljs.core.Keyword("ui.audit.logs.form","logs","ui.audit.logs.form/logs",1032108334);
ui.audit.logs.form.path = new cljs.core.Keyword("ui.audit.logs.form","logs-filter","ui.audit.logs.form/logs-filter",-2020077932);
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("ui.audit.logs.form","search-user","ui.audit.logs.form/search-user",2106446289),(function (p__28462,p__28463){
var map__28464 = p__28462;
var map__28464__$1 = (((((!((map__28464 == null))))?(((((map__28464.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28464.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28464):map__28464);
var db = cljs.core.get.call(null,map__28464__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__28465 = p__28463;
var _ = cljs.core.nth.call(null,vec__28465,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("xhr","fetch","xhr/fetch",-1081850758),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"uri","uri",-774711847),"/Users/search",new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("ui.audit.logs.form","users-loaded","ui.audit.logs.form/users-loaded",-369216454)], null)], null)], null);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("ui.audit.logs.form","users","ui.audit.logs.form/users",-1015160631),(function (db,_){
return cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.audit.logs.form.path,new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"items","items",1031954938)], null));
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("ui.audit.logs.form","users-loaded","ui.audit.logs.form/users-loaded",-369216454),(function (p__28469,p__28470){
var map__28471 = p__28469;
var map__28471__$1 = (((((!((map__28471 == null))))?(((((map__28471.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28471.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28471):map__28471);
var db = cljs.core.get.call(null,map__28471__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__28472 = p__28470;
var _ = cljs.core.nth.call(null,vec__28472,(0),null);
var map__28475 = cljs.core.nth.call(null,vec__28472,(1),null);
var map__28475__$1 = (((((!((map__28475 == null))))?(((((map__28475.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28475.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28475):map__28475);
var data = cljs.core.get.call(null,map__28475__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.audit.logs.form.path,new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"items","items",1031954938)], null),cljs.core.mapv.call(null,((function (map__28471,map__28471__$1,db,vec__28472,_,map__28475,map__28475__$1,data){
return (function (el){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource","resource",251898836).cljs$core$IFn$_invoke$arity$1(el)),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(el)], null);
});})(map__28471,map__28471__$1,db,vec__28472,_,map__28475,map__28475__$1,data))
,data))], null);
}));

//# sourceMappingURL=form.js.map
