// Compiled by ClojureScript 1.10.520 {}
goog.provide('ui.patient_workflow.model');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('clojure.string');
ui.patient_workflow.model.index = new cljs.core.Keyword("patients","index","patients/index",-161691117);
re_frame.core.reg_event_fx.call(null,ui.patient_workflow.model.index,(function (p__29999,p__30000){
var map__30001 = p__29999;
var map__30001__$1 = (((((!((map__30001 == null))))?(((((map__30001.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30001.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30001):map__30001);
var db = cljs.core.get.call(null,map__30001__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__30002 = p__30000;
var pid = cljs.core.nth.call(null,vec__30002,(0),null);
var phase = cljs.core.nth.call(null,vec__30002,(1),null);
var params = cljs.core.nth.call(null,vec__30002,(2),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"deinit","deinit",-385511679),phase)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"params","params",710516235),phase)) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"init","init",-1875481434),phase)))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui.patient-workflow.model","set-loading-status-true","ui.patient-workflow.model/set-loading-status-true",-1805008947)], null),new cljs.core.Keyword("xhr","fetch","xhr/fetch",-1081850758),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"uri","uri",-774711847),"/Patient/search",new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"q","q",689001697),(cljs.core.truth_(cljs.core.get_in.call(null,params,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"q","q",689001697)], null)))?clojure.string.replace.call(null,cljs.core.get_in.call(null,params,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"q","q",689001697)], null)),/ /,"%20"):"%20")], null),new cljs.core.Keyword(null,"req-id","req-id",-471642231),(function (){var or__4131__auto__ = pid;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "pid";
}
})(),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("ui.patient-workflow.model","save-results","ui.patient-workflow.model/save-results",515053688)], null)], null)], null);
} else {
return null;
}
}
}));
re_frame.core.reg_sub.call(null,ui.patient_workflow.model.index,(function (db){
return new cljs.core.Keyword("patients","index","patients/index",-161691117).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("ui.patient-workflow.model","patient-data","ui.patient-workflow.model/patient-data",841393379),(function (db,_){
return new cljs.core.Keyword("ui.patient-workflow.model","patients","ui.patient-workflow.model/patients",-56310137).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("ui.patient-workflow.model","loading-status","ui.patient-workflow.model/loading-status",-1350898417),(function (db,_){
return new cljs.core.Keyword("ui.patient-workflow.model","loading","ui.patient-workflow.model/loading",49659927).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("ui.patient-workflow.model","set-loading-status-false","ui.patient-workflow.model/set-loading-status-false",-1056424102),(function (p__30006,_){
var map__30007 = p__30006;
var map__30007__$1 = (((((!((map__30007 == null))))?(((((map__30007.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30007.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30007):map__30007);
var db = cljs.core.get.call(null,map__30007__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword("ui.patient-workflow.model","loading","ui.patient-workflow.model/loading",49659927),false)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("ui.patient-workflow.model","set-loading-status-true","ui.patient-workflow.model/set-loading-status-true",-1805008947),(function (p__30009,_){
var map__30010 = p__30009;
var map__30010__$1 = (((((!((map__30010 == null))))?(((((map__30010.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30010.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30010):map__30010);
var db = cljs.core.get.call(null,map__30010__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword("ui.patient-workflow.model","loading","ui.patient-workflow.model/loading",49659927),true)], null);
}));
ui.patient_workflow.model.sort_by_birthdate = (function ui$patient_workflow$model$sort_by_birthdate(sort_order,data){
return cljs.core.vec.call(null,cljs.core.sort.call(null,(function (current,next){
var c = Date.parse(new cljs.core.Keyword(null,"birthdate","birthdate",-534621599).cljs$core$IFn$_invoke$arity$1(current));
var n = Date.parse(new cljs.core.Keyword(null,"birthdate","birthdate",-534621599).cljs$core$IFn$_invoke$arity$1(next));
if(cljs.core.truth_(sort_order)){
return (c < n);
} else {
return (c > n);
}
}),data));
});
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("ui.patient-workflow.model","sort-patients","ui.patient-workflow.model/sort-patients",-570601794),(function (p__30012,p__30013){
var map__30014 = p__30012;
var map__30014__$1 = (((((!((map__30014 == null))))?(((((map__30014.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30014.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30014):map__30014);
var db = cljs.core.get.call(null,map__30014__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__30015 = p__30013;
var _ = cljs.core.nth.call(null,vec__30015,(0),null);
var params = cljs.core.nth.call(null,vec__30015,(1),null);
var sort_order = cljs.core.nth.call(null,vec__30015,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("patients","index","patients/index",-161691117),new cljs.core.Keyword(null,"data","data",-232669377)], null),cljs.core.partial.call(null,ui.patient_workflow.model.sort_by_birthdate,sort_order))], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("ui.patient-workflow.model","save-results","ui.patient-workflow.model/save-results",515053688),(function (p__30019,p__30020){
var map__30021 = p__30019;
var map__30021__$1 = (((((!((map__30021 == null))))?(((((map__30021.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30021.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30021):map__30021);
var db = cljs.core.get.call(null,map__30021__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__30022 = p__30020;
var _ = cljs.core.nth.call(null,vec__30022,(0),null);
var map__30025 = cljs.core.nth.call(null,vec__30022,(1),null);
var map__30025__$1 = (((((!((map__30025 == null))))?(((((map__30025.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30025.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30025):map__30025);
var data = cljs.core.get.call(null,map__30025__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var req = cljs.core.get.call(null,map__30025__$1,new cljs.core.Keyword(null,"request","request",1772954723));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("patients","index","patients/index",-161691117),new cljs.core.Keyword(null,"data","data",-232669377)], null),data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("patients","index","patients/index",-161691117),new cljs.core.Keyword(null,"q","q",689001697)], null),cljs.core.get_in.call(null,req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"q","q",689001697)], null))),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui.patient-workflow.model","set-loading-status-false","ui.patient-workflow.model/set-loading-status-false",-1056424102)], null)], null);
}));

//# sourceMappingURL=model.js.map
