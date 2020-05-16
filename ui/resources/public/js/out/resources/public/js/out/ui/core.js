// Compiled by ClojureScript 1.10.520 {}
goog.provide('ui.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('route_map.core');
goog.require('ui.patient_workflow.views');
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("ui.core","initialize","ui.core/initialize",67390912),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.inject_cofx.call(null,new cljs.core.Keyword(null,"window-location","window-location",-1918888571))], null),(function (p__25138,_){
var map__25139 = p__25138;
var map__25139__$1 = (((((!((map__25139 == null))))?(((((map__25139.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25139.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25139):map__25139);
var location = cljs.core.get.call(null,map__25139__$1,new cljs.core.Keyword(null,"location","location",1815599388));
var db = cljs.core.get.call(null,map__25139__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"xhr","xhr",-177710851),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"base-url","base-url",9540398)], null),"http://localhost:9090"),new cljs.core.Keyword("route-map","routes","route-map/routes",-450527158),routes.routes),new cljs.core.Keyword("route-map","start","route-map/start",-726109997),cljs.core.PersistentArrayMap.EMPTY], null);
}));
ui.core.not_found_page = (function ui$core$not_found_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Not found"], null);
});
ui.core.mount_root = (function ui$core$mount_root(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui.core","initialize","ui.core/initialize",67390912)], null));

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.patient_workflow.views.search_input], null),document.getElementById("app"));
});
ui.core.re_render = (function ui$core$re_render(){
return ui.core.mount_root.call(null);
});

//# sourceMappingURL=core.js.map
