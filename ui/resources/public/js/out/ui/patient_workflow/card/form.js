// Compiled by ClojureScript 1.10.520 {}
goog.provide('ui.patient_workflow.card.form');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('ui.basic_components.form.model');
ui.patient_workflow.card.form.form_path = new cljs.core.Keyword("ui.patient-workflow.card.form","form","ui.patient-workflow.card.form/form",959721060);
ui.patient_workflow.card.form.form_schema = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"gender","gender",-733930727),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"string"], null),new cljs.core.Keyword(null,"telecom","telecom",-409985543),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"array",new cljs.core.Keyword(null,"use","use",-1846382424),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"string"], null),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"string"], null),new cljs.core.Keyword(null,"system","system",-29381724),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"string"], null)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"array",new cljs.core.Keyword(null,"family","family",-1313145692),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"string"], null),new cljs.core.Keyword(null,"given","given",716253602),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"array"], null)], null),new cljs.core.Keyword(null,"address","address",559499426),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"array",new cljs.core.Keyword(null,"city","city",-393302614),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"string"], null),new cljs.core.Keyword(null,"country","country",312965309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"string"], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"string"], null),new cljs.core.Keyword(null,"postalCode","postalCode",717396150),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"string"], null)], null),new cljs.core.Keyword(null,"identifier","identifier",-805503498),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"collection",new cljs.core.Keyword(null,"validation","validation",-2141396518),cljs.core.nil_QMARK_], null)], null);
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("ui.patient-workflow.card.form","init","ui.patient-workflow.card.form/init",-298819889),(function (p__81904,_){
var map__81905 = p__81904;
var map__81905__$1 = (((((!((map__81905 == null))))?(((((map__81905.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__81905.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__81905):map__81905);
var db = cljs.core.get.call(null,map__81905__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui.basic-components.form.model","init-form","ui.basic-components.form.model/init-form",-1463107824),ui.patient_workflow.card.form.form_path,ui.patient_workflow.card.form.form_schema], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("ui.patient-workflow.card.form","eval","ui.patient-workflow.card.form/eval",1749474066),(function (p__81907,_){
var map__81908 = p__81907;
var map__81908__$1 = (((((!((map__81908 == null))))?(((((map__81908.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__81908.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__81908):map__81908);
var db = cljs.core.get.call(null,map__81908__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui.basic-components.form.model","eval-form","ui.basic-components.form.model/eval-form",956208658),ui.patient_workflow.card.form.form_path], null)], null);
}));

//# sourceMappingURL=form.js.map
