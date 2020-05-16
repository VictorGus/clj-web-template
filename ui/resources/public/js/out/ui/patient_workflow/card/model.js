// Compiled by ClojureScript 1.10.520 {}
goog.provide('ui.patient_workflow.card.model');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('ui.helper');
goog.require('ui.basic_components.form.model');
goog.require('ui.zframes.flash');
goog.require('ui.patient_workflow.card.form');
ui.patient_workflow.card.model.index_card = new cljs.core.Keyword("ui.patient-workflow.card.model","index-card","ui.patient-workflow.card.model/index-card",-4750880);
ui.patient_workflow.card.model.edit = new cljs.core.Keyword("ui.patient-workflow.card.model","edit","ui.patient-workflow.card.model/edit",1951274658);
ui.patient_workflow.card.model.create = new cljs.core.Keyword("ui.patient-workflow.card.model","create","ui.patient-workflow.card.model/create",-1068813488);
re_frame.core.reg_event_fx.call(null,ui.patient_workflow.card.model.index_card,(function (p__81922,p__81923){
var map__81924 = p__81922;
var map__81924__$1 = (((((!((map__81924 == null))))?(((((map__81924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__81924.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__81924):map__81924);
var db = cljs.core.get.call(null,map__81924__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__81925 = p__81923;
var pid = cljs.core.nth.call(null,vec__81925,(0),null);
var phase = cljs.core.nth.call(null,vec__81925,(1),null);
var params = cljs.core.nth.call(null,vec__81925,(2),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"deinit","deinit",-385511679),phase)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"params","params",710516235),phase)) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"init","init",-1875481434),phase)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("xhr","fetch","xhr/fetch",-1081850758),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"uri","uri",-774711847),["/Patient/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("route-map","current-route","route-map/current-route",-917537088),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null))),"/ehr"].join(''),new cljs.core.Keyword(null,"req-id","req-id",-471642231),ui.patient_workflow.card.model.index_card], null)], null);
} else {
return null;
}
}
}));
re_frame.core.reg_sub.call(null,ui.patient_workflow.card.model.index_card,new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pages","data","pages/data",129617787),ui.patient_workflow.card.model.index_card], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("xhr","response","xhr/response",-1068297090),ui.patient_workflow.card.model.index_card], null),(function (p__81929,p__81930){
var vec__81931 = p__81929;
var page = cljs.core.nth.call(null,vec__81931,(0),null);
var map__81934 = cljs.core.nth.call(null,vec__81931,(1),null);
var map__81934__$1 = (((((!((map__81934 == null))))?(((((map__81934.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__81934.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__81934):map__81934);
var resp = cljs.core.get.call(null,map__81934__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var vec__81935 = p__81930;
var pid = cljs.core.nth.call(null,vec__81935,(0),null);
return cljs.core.merge.call(null,page,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),resp], null));
}));
re_frame.core.reg_event_fx.call(null,ui.patient_workflow.card.model.edit,(function (p__81939,p__81940){
var map__81941 = p__81939;
var map__81941__$1 = (((((!((map__81941 == null))))?(((((map__81941.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__81941.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__81941):map__81941);
var db = cljs.core.get.call(null,map__81941__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__81942 = p__81940;
var pid = cljs.core.nth.call(null,vec__81942,(0),null);
var phase = cljs.core.nth.call(null,vec__81942,(1),null);
var params = cljs.core.nth.call(null,vec__81942,(2),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"deinit","deinit",-385511679),phase)){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui.patient-workflow.card.form","init","ui.patient-workflow.card.form/init",-298819889)], null));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.dissoc.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"xhr","xhr",-177710851),new cljs.core.Keyword(null,"req","req",-326448303),ui.patient_workflow.card.model.edit], null))], null);
} else {
if(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"params","params",710516235),phase)) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"init","init",-1875481434),phase)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("xhr","fetch","xhr/fetch",-1081850758),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"uri","uri",-774711847),["/Patient/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("route-map","current-route","route-map/current-route",-917537088),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null))),"/ehr"].join(''),new cljs.core.Keyword(null,"req-id","req-id",-471642231),ui.patient_workflow.card.model.edit], null)], null);
} else {
return null;
}
}
}));
re_frame.core.reg_event_fx.call(null,ui.patient_workflow.card.model.create,(function (p__81946,p__81947){
var map__81948 = p__81946;
var map__81948__$1 = (((((!((map__81948 == null))))?(((((map__81948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__81948.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__81948):map__81948);
var db = cljs.core.get.call(null,map__81948__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__81949 = p__81947;
var pid = cljs.core.nth.call(null,vec__81949,(0),null);
var phase = cljs.core.nth.call(null,vec__81949,(1),null);
var params = cljs.core.nth.call(null,vec__81949,(2),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"deinit","deinit",-385511679),phase)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"params","params",710516235),phase)) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"init","init",-1875481434),phase)))){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui.patient-workflow.card.form","init","ui.patient-workflow.card.form/init",-298819889)], null));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.patient_workflow.card.model.create,new cljs.core.Keyword(null,"create-items","create-items",-1318881728),new cljs.core.Keyword(null,"address","address",559499426)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.patient_workflow.card.model.create,new cljs.core.Keyword(null,"create-items","create-items",-1318881728),new cljs.core.Keyword(null,"telecom","telecom",-409985543)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null))], null);
} else {
return null;
}
}
}));
re_frame.core.reg_sub.call(null,ui.patient_workflow.card.model.create,(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("ui.patient-workflow.card.model","create-items","ui.patient-workflow.card.model/create-items",-922422008),(function (db,_){
return cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.patient_workflow.card.model.create,new cljs.core.Keyword(null,"create-items","create-items",-1318881728)], null));
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("ui.patient-workflow.card.model","add-create-item","ui.patient-workflow.card.model/add-create-item",1570552020),(function (p__81953,p__81954){
var map__81955 = p__81953;
var map__81955__$1 = (((((!((map__81955 == null))))?(((((map__81955.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__81955.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__81955):map__81955);
var db = cljs.core.get.call(null,map__81955__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__81956 = p__81954;
var _ = cljs.core.nth.call(null,vec__81956,(0),null);
var path = cljs.core.nth.call(null,vec__81956,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.patient_workflow.card.model.create,new cljs.core.Keyword(null,"create-items","create-items",-1318881728),path], null),cljs.core.conj,cljs.core.PersistentArrayMap.EMPTY)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("ui.patient-workflow.card.model","remove-create-item","ui.patient-workflow.card.model/remove-create-item",1691532879),(function (p__81960,p__81961){
var map__81962 = p__81960;
var map__81962__$1 = (((((!((map__81962 == null))))?(((((map__81962.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__81962.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__81962):map__81962);
var db = cljs.core.get.call(null,map__81962__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__81963 = p__81961;
var _ = cljs.core.nth.call(null,vec__81963,(0),null);
var path = cljs.core.nth.call(null,vec__81963,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.patient_workflow.card.model.create,new cljs.core.Keyword(null,"create-items","create-items",-1318881728),cljs.core.first.call(null,path)], null),ui.helper.vec_remove,cljs.core.second.call(null,path))], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("ui.patient-workflow.card.model","add-item","ui.patient-workflow.card.model/add-item",1888481899),(function (p__81967,p__81968){
var map__81969 = p__81967;
var map__81969__$1 = (((((!((map__81969 == null))))?(((((map__81969.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__81969.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__81969):map__81969);
var db = cljs.core.get.call(null,map__81969__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__81970 = p__81968;
var _ = cljs.core.nth.call(null,vec__81970,(0),null);
var path = cljs.core.nth.call(null,vec__81970,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"xhr","xhr",-177710851),new cljs.core.Keyword(null,"req","req",-326448303),ui.patient_workflow.card.model.edit,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"patient","patient",1178852672),(0),path], null),cljs.core.conj,cljs.core.PersistentArrayMap.EMPTY)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("ui.patient-workflow.card.model","remove-item","ui.patient-workflow.card.model/remove-item",751097073),(function (p__81974,p__81975){
var map__81976 = p__81974;
var map__81976__$1 = (((((!((map__81976 == null))))?(((((map__81976.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__81976.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__81976):map__81976);
var db = cljs.core.get.call(null,map__81976__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__81977 = p__81975;
var _ = cljs.core.nth.call(null,vec__81977,(0),null);
var path = cljs.core.nth.call(null,vec__81977,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui.basic-components.form.model","remove-item","ui.basic-components.form.model/remove-item",-106079153),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.patient_workflow.card.form.form_path], null),path)], null),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"xhr","xhr",-177710851),new cljs.core.Keyword(null,"req","req",-326448303),ui.patient_workflow.card.model.edit,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"patient","patient",1178852672),(0),cljs.core.first.call(null,path)], null),ui.helper.vec_remove,cljs.core.second.call(null,path))], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("ui.patient-workflow.card.model","apply-changes","ui.patient-workflow.card.model/apply-changes",-1435506602),(function (p__81981,p__81982){
var map__81983 = p__81981;
var map__81983__$1 = (((((!((map__81983 == null))))?(((((map__81983.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__81983.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__81983):map__81983);
var db = cljs.core.get.call(null,map__81983__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__81984 = p__81982;
var _ = cljs.core.nth.call(null,vec__81984,(0),null);
var map__81987 = cljs.core.nth.call(null,vec__81984,(1),null);
var map__81987__$1 = (((((!((map__81987 == null))))?(((((map__81987.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__81987.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__81987):map__81987);
var method = cljs.core.get.call(null,map__81987__$1,new cljs.core.Keyword(null,"method","method",55703592));
var uri = cljs.core.get.call(null,map__81987__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var redirect_url = cljs.core.get.call(null,map__81987__$1,new cljs.core.Keyword(null,"redirect-url","redirect-url",1795705632));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(0),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui.patient-workflow.card.form","eval","ui.patient-workflow.card.form/eval",1749474066)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(300),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui.patient-workflow.card.model","send-data","ui.patient-workflow.card.model/send-data",2144971953),(function (){var or__4131__auto__ = method;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "PUT";
}
})(),uri,redirect_url], null)], null)], null)], null);
}));
ui.patient_workflow.card.model.normalize_identifiers = (function ui$patient_workflow$card$model$normalize_identifiers(identifiers){
return cljs.core.reduce_kv.call(null,(function (acc,k,v){
var G__81990 = k;
var G__81990__$1 = (((G__81990 instanceof cljs.core.Keyword))?G__81990.fqn:null);
switch (G__81990__$1) {
case "MR":
return cljs.core.conj.call(null,acc,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"Medical Record Number",new cljs.core.Keyword(null,"coding","coding",1900940726),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"code","code",1586293142),"MR",new cljs.core.Keyword(null,"system","system",-29381724),"http://hl7.org/fhir/v2/0203",new cljs.core.Keyword(null,"display","display",242065432),"Medical Record Number"], null)], null)], null),new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"system","system",-29381724),"http://hospital.smarthealthit.org"], null));

break;
case "SB":
return cljs.core.conj.call(null,acc,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"Social Security Number",new cljs.core.Keyword(null,"coding","coding",1900940726),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"code","code",1586293142),"SB",new cljs.core.Keyword(null,"system","system",-29381724),"http://hl7.org/fhir/identifier-type",new cljs.core.Keyword(null,"display","display",242065432),"Social Security Number"], null)], null)], null),new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"system","system",-29381724),"http://hl7.org/fhir/sid/us-ssn"], null));

break;
case "DL":
return cljs.core.conj.call(null,acc,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"Driver's License",new cljs.core.Keyword(null,"coding","coding",1900940726),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"code","code",1586293142),"DL",new cljs.core.Keyword(null,"system","system",-29381724),"http://hl7.org/fhir/v2/0203",new cljs.core.Keyword(null,"display","display",242065432),"Driver's License"], null)], null)], null),new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"system","system",-29381724),"urn:oid:2.16.840.1.113883.4.3.25"], null));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__81990__$1)].join('')));

}
}),cljs.core.PersistentVector.EMPTY,identifiers);
});
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("ui.patient-workflow.card.model","delete-patient","ui.patient-workflow.card.model/delete-patient",161480223),(function (p__81992,_){
var map__81993 = p__81992;
var map__81993__$1 = (((((!((map__81993 == null))))?(((((map__81993.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__81993.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__81993):map__81993);
var db = cljs.core.get.call(null,map__81993__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("xhr","fetch","xhr/fetch",-1081850758),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"uri","uri",-774711847),["/Patient/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("route-map","current-route","route-map/current-route",-917537088),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)))].join(''),new cljs.core.Keyword(null,"method","method",55703592),"DELETE"], null),new cljs.core.Keyword("ui.zframes.redirect","redirect","ui.zframes.redirect/redirect",868608702),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uri","uri",-774711847),"/patients"], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("ui.patient-workflow.card.model","send-data","ui.patient-workflow.card.model/send-data",2144971953),(function (p__81996,p__81997){
var map__81998 = p__81996;
var map__81998__$1 = (((((!((map__81998 == null))))?(((((map__81998.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__81998.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__81998):map__81998);
var db = cljs.core.get.call(null,map__81998__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__81999 = p__81997;
var pid = cljs.core.nth.call(null,vec__81999,(0),null);
var method = cljs.core.nth.call(null,vec__81999,(1),null);
var uri = cljs.core.nth.call(null,vec__81999,(2),null);
var redirect_url = cljs.core.nth.call(null,vec__81999,(3),null);
var form_values = cljs.core.get.call(null,db,ui.patient_workflow.card.form.form_path);
if(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.filter.call(null,cljs.core.second,cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.patient_workflow.card.form.form_path,new cljs.core.Keyword(null,"identifier","identifier",-805503498)], null)))))){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("xhr","fetch","xhr/fetch",-1081850758),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"uri","uri",-774711847),(function (){var or__4131__auto__ = uri;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return ["/Patient/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("route-map","current-route","route-map/current-route",-917537088),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)))].join('');
}
})(),new cljs.core.Keyword(null,"method","method",55703592),method,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update.call(null,form_values,new cljs.core.Keyword(null,"identifier","identifier",-805503498),ui.patient_workflow.card.model.normalize_identifiers),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),(0),new cljs.core.Keyword(null,"given","given",716253602)], null),cljs.core.comp.call(null,cljs.core.vec,cljs.core.vals)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"address","address",559499426)], null),cljs.core.partial.call(null,cljs.core.map,((function (form_values,map__81998,map__81998__$1,db,vec__81999,pid,method,uri,redirect_url){
return (function (p1__81995_SHARP_){
return cljs.core.update.call(null,p1__81995_SHARP_,new cljs.core.Keyword(null,"line","line",212345235),cljs.core.comp.call(null,cljs.core.vec,cljs.core.vals));
});})(form_values,map__81998,map__81998__$1,db,vec__81999,pid,method,uri,redirect_url))
))], null)),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("flash","success","flash/success",1921050498),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"msg","msg",-1386103444),"Successfully saved"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui.patient-workflow.card.form","init","ui.patient-workflow.card.form/init",-298819889)], null)], null),new cljs.core.Keyword("ui.zframes.redirect","redirect","ui.zframes.redirect/redirect",868608702),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uri","uri",-774711847),redirect_url], null));
} else {
return cljs.core.assoc.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("flash","danger","flash/danger",-654742654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"msg","msg",-1386103444),"All identifiers must be supplied"], null)], null)], null));

}
}));
re_frame.core.reg_sub.call(null,ui.patient_workflow.card.model.edit,new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pages","data","pages/data",129617787),ui.patient_workflow.card.model.edit], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("xhr","response","xhr/response",-1068297090),ui.patient_workflow.card.model.edit], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("xhr","response","xhr/response",-1068297090),ui.patient_workflow.card.model.index_card], null),(function (p__82003,p__82004){
var vec__82005 = p__82003;
var page = cljs.core.nth.call(null,vec__82005,(0),null);
var map__82008 = cljs.core.nth.call(null,vec__82005,(1),null);
var map__82008__$1 = (((((!((map__82008 == null))))?(((((map__82008.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82008.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82008):map__82008);
var resp = cljs.core.get.call(null,map__82008__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__82009 = cljs.core.nth.call(null,vec__82005,(2),null);
var map__82009__$1 = (((((!((map__82009 == null))))?(((((map__82009.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82009.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82009):map__82009);
var ehr = cljs.core.get.call(null,map__82009__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var vec__82010 = p__82004;
var pid = cljs.core.nth.call(null,vec__82010,(0),null);
return cljs.core.merge.call(null,page,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),(function (){var or__4131__auto__ = ehr;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return resp;
}
})()], null));
}));

//# sourceMappingURL=model.js.map
