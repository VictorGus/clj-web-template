// Compiled by ClojureScript 1.10.520 {}
goog.provide('ui.basic_components.form.model');
goog.require('cljs.core');
goog.require('re_frame.core');
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("ui.basic-components.form.model","form-values","ui.basic-components.form.model/form-values",1419954236),(function (db,p__81774){
var vec__81775 = p__81774;
var pid = cljs.core.nth.call(null,vec__81775,(0),null);
var path = cljs.core.nth.call(null,vec__81775,(1),null);
return cljs.core.get_in.call(null,db,path);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("ui.basic-components.form.model","init-form","ui.basic-components.form.model/init-form",-1463107824),(function (p__81778,p__81779){
var map__81780 = p__81778;
var map__81780__$1 = (((((!((map__81780 == null))))?(((((map__81780.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__81780.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__81780):map__81780);
var db = cljs.core.get.call(null,map__81780__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__81781 = p__81779;
var _ = cljs.core.nth.call(null,vec__81781,(0),null);
var path = cljs.core.nth.call(null,vec__81781,(1),null);
var form_schema = cljs.core.nth.call(null,vec__81781,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,path,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),form_schema], null))], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("ui.basic-components.form.model","form-set-value","ui.basic-components.form.model/form-set-value",-16795622),(function (p__81785,p__81786){
var map__81787 = p__81785;
var map__81787__$1 = (((((!((map__81787 == null))))?(((((map__81787.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__81787.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__81787):map__81787);
var db = cljs.core.get.call(null,map__81787__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__81788 = p__81786;
var _ = cljs.core.nth.call(null,vec__81788,(0),null);
var map__81791 = cljs.core.nth.call(null,vec__81788,(1),null);
var map__81791__$1 = (((((!((map__81791 == null))))?(((((map__81791.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__81791.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__81791):map__81791);
var path = cljs.core.get.call(null,map__81791__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var value = cljs.core.get.call(null,map__81791__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in.call(null,db,path,value)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("ui.basic-components.form.model","form-reset-value","ui.basic-components.form.model/form-reset-value",857578021),(function (p__81794,p__81795){
var map__81796 = p__81794;
var map__81796__$1 = (((((!((map__81796 == null))))?(((((map__81796.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__81796.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__81796):map__81796);
var db = cljs.core.get.call(null,map__81796__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__81797 = p__81795;
var _ = cljs.core.nth.call(null,vec__81797,(0),null);
var path = cljs.core.nth.call(null,vec__81797,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in.call(null,db,path,null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("ui.basic-components.form.model","remove-item","ui.basic-components.form.model/remove-item",-106079153),(function (p__81801,p__81802){
var map__81803 = p__81801;
var map__81803__$1 = (((((!((map__81803 == null))))?(((((map__81803.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__81803.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__81803):map__81803);
var db = cljs.core.get.call(null,map__81803__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__81804 = p__81802;
var _ = cljs.core.nth.call(null,vec__81804,(0),null);
var path = cljs.core.nth.call(null,vec__81804,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.call(null,db,cljs.core.butlast.call(null,path),cljs.core.dissoc,cljs.core.last.call(null,path))], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("ui.basic-components.form.model","eval-form","ui.basic-components.form.model/eval-form",956208658),(function (p__81808,p__81809){
var map__81810 = p__81808;
var map__81810__$1 = (((((!((map__81810 == null))))?(((((map__81810.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__81810.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__81810):map__81810);
var db = cljs.core.get.call(null,map__81810__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__81811 = p__81809;
var _ = cljs.core.nth.call(null,vec__81811,(0),null);
var path = cljs.core.nth.call(null,vec__81811,(1),null);
var form_schema = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,new cljs.core.Keyword(null,"schema","schema",-1582001791)], null));
var form_values = cljs.core.dissoc.call(null,cljs.core.get.call(null,db,path),new cljs.core.Keyword(null,"schema","schema",-1582001791));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,path,cljs.core.reduce_kv.call(null,((function (form_schema,form_values,map__81810,map__81810__$1,db,vec__81811,_,path){
return (function (acc,k,v){
if(cljs.core._EQ_.call(null,"array",cljs.core.get_in.call(null,form_schema,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Keyword(null,"type","type",1174270348)], null)))){
return cljs.core.assoc.call(null,acc,k,cljs.core.vec.call(null,cljs.core.vals.call(null,v)));
} else {
return cljs.core.assoc.call(null,acc,k,v);
}
});})(form_schema,form_values,map__81810,map__81810__$1,db,vec__81811,_,path))
,cljs.core.PersistentArrayMap.EMPTY,form_values))], null);
}));

//# sourceMappingURL=model.js.map
