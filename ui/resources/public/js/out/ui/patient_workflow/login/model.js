// Compiled by ClojureScript 1.10.520 {}
goog.provide('ui.patient_workflow.login.model');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('ui.pages');
ui.patient_workflow.login.model.index = new cljs.core.Keyword("ui.patient-workflow.login.model","login","ui.patient-workflow.login.model/login",106960070);
re_frame.core.reg_event_fx.call(null,ui.patient_workflow.login.model.index,(function (p__34313,p__34314){
var map__34315 = p__34313;
var map__34315__$1 = (((((!((map__34315 == null))))?(((((map__34315.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34315.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34315):map__34315);
var db = cljs.core.get.call(null,map__34315__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__34316 = p__34314;
var pid = cljs.core.nth.call(null,vec__34316,(0),null);
var phase = cljs.core.nth.call(null,vec__34316,(1),null);
var params = cljs.core.nth.call(null,vec__34316,(2),null);
return cljs.core.PersistentArrayMap.EMPTY;
}));
re_frame.core.reg_sub.call(null,ui.patient_workflow.login.model.index,(function (db){
return cljs.core.PersistentArrayMap.EMPTY;
}));

//# sourceMappingURL=model.js.map
