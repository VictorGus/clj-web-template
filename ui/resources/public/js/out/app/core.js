// Compiled by ClojureScript 1.10.520 {}
goog.provide('app.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('zframes.xhr');
goog.require('zframes.redirect');
goog.require('zframes.flash');
goog.require('zframes.cookies');
goog.require('app.routes');
goog.require('app.pages');
goog.require('app.layout');
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("app.core","initialize","app.core/initialize",1664650061),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.inject_cofx.call(null,new cljs.core.Keyword(null,"window-location","window-location",-1918888571))], null),(function (p__20958,_){
var map__20959 = p__20958;
var map__20959__$1 = (((((!((map__20959 == null))))?(((((map__20959.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20959.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20959):map__20959);
var location = cljs.core.get.call(null,map__20959__$1,new cljs.core.Keyword(null,"location","location",1815599388));
var db = cljs.core.get.call(null,map__20959__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"xhr","xhr",-177710851),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"base-url","base-url",9540398)], null),"http://localhost:9090"),new cljs.core.Keyword("route-map","start","route-map/start",-726109997),cljs.core.PersistentArrayMap.EMPTY], null);
}));
app.core.not_found_page = (function app$core$not_found_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Not found"], null);
});
app.core.current_page = (function app$core$current_page(){
var route = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("route-map","current-route","route-map/current-route",-917537088)], null));
return ((function (route){
return (function (){
var page = cljs.core.get.call(null,cljs.core.deref.call(null,app.pages.pages),new cljs.core.Keyword(null,"match","match",1220059550).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,route)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,route));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.layout.layout,(cljs.core.truth_(page)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [page,params], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.core.not_found_page], null))], null);
});
;})(route))
});
app.core.mount_root = (function app$core$mount_root(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.core","initialize","app.core/initialize",1664650061)], null));

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.core.current_page], null),document.getElementById("app"));
});
app.core.re_render = (function app$core$re_render(){
return app.core.mount_root.call(null);
});

//# sourceMappingURL=core.js.map
