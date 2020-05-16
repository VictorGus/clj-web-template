// Compiled by ClojureScript 1.10.520 {}
goog.provide('ui.patient_workflow.card.view');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('ui.pages');
goog.require('ui.helpers');
goog.require('ui.styles');
goog.require('ui.zframes.redirect');
goog.require('ui.basic_components.info_input');
goog.require('ui.patient_workflow.card.model');
ui.patient_workflow.card.view.card_style = ui.styles.style.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#patient-card-wrapper","#patient-card-wrapper",-594530213),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#patient-card","#patient-card",-24367830),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"8px",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid rgba(51, 51, 51, 0.1)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".patient-name",".patient-name",2044467719),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"24px",new cljs.core.Keyword(null,"margin","margin",-995903681),"0px",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"900"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".info-item",".info-item",74205877),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#label-item","#label-item",256180102),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),"23px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"15px"], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".patient-info",".patient-info",-6980647),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"5px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".patient-info-item",".patient-info-item",-507334320),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"8px",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"5px",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid rgba(51, 51, 51, 0.1)"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".card-title",".card-title",1927235738),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"700",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"20px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".card-title-inner",".card-title-inner",-66775523),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"600",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"0px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"16px"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".patient-title-wrapper",".patient-title-wrapper",-376024981),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".edit-button",".edit-button",810560167),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"right","right",-452581833),(0),new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".icon",".icon",1539505086),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"height","height",1025178622),"65px",new cljs.core.Keyword(null,"width","width",-384071477),"65px",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"10px",new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"10px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".icon.img",".icon.img",483450963),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"blue"], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".info-item",".info-item",74205877),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"10px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".info-header",".info-header",-856706906),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"22px",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"900",new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#0069d9"], null)], null));
ui.patient_workflow.card.view.encounter = (function ui$patient_workflow$card$view$encounter(item){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-body","div.card-body",1538579065),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5.card-title","h5.card-title",-2010521752),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"left"], null)], null),new cljs.core.Keyword(null,"e_type","e_type",2141416961).cljs$core$IFn$_invoke$arity$1(item)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-muted.pl-2","p.text-muted.pl-2",2019266410),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"right"], null)], null),new cljs.core.Keyword(null,"period_end","period_end",-795989226).cljs$core$IFn$_invoke$arity$1(item)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-muted","p.text-muted",1410245564),(function (){var G__24932 = new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(item);
if((G__24932 == null)){
return null;
} else {
return clojure.string.capitalize.call(null,G__24932);
}
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.info-item","span.info-item",1629790024),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-muted","span.text-muted",-1283719962),"Reason: "], null),(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reason","reason",-2070751759).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "Not defined";
}
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.info-item","span.info-item",1629790024),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-muted","span.text-muted",-1283719962),"Status: "], null),(function (){var G__24933 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(item);
if((G__24933 == null)){
return null;
} else {
return clojure.string.capitalize.call(null,G__24933);
}
})()], null)], null);
});
ui.patient_workflow.card.view.patient_card = (function ui$patient_workflow$card$view$patient_card(data){
return (function (data__$1){
cljs.core.println.call(null,ui.helpers.vec_search.call(null,"SB",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),(3)], null)),new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"patient","patient",1178852672).cljs$core$IFn$_invoke$arity$1(data__$1))));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#patient-card-wrapper","div#patient-card-wrapper",1737714335),ui.patient_workflow.card.view.card_style,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#patient-card","div#patient-card",409802903),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-md-6 offset-md-3"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.patient-title-wrapper","div.patient-title-wrapper",-762374661),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.icon","div.icon",1302290135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),((cljs.core._EQ_.call(null,"male",new cljs.core.Keyword(null,"gender","gender",-733930727).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"patient","patient",1178852672).cljs$core$IFn$_invoke$arity$1(data__$1)))))?"male.svg":"female.svg")], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.patient-name","p.patient-name",-1603248580),(function (){var name = new cljs.core.Keyword(null,"patient_name","patient_name",492788531).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"patient","patient",1178852672).cljs$core$IFn$_invoke$arity$1(data__$1)));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"given","given",716253602).cljs$core$IFn$_invoke$arity$1(name)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"family","family",-1313145692).cljs$core$IFn$_invoke$arity$1(name))].join('');
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-muted",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"0px"], null)], null),new cljs.core.Keyword(null,"birthdate","birthdate",-534621599).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"patient","patient",1178852672).cljs$core$IFn$_invoke$arity$1(data__$1)))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.edit-button.mt-2.mr-2","p.edit-button.mt-2.mr-2",2091364675),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-edit","i.fas.fa-edit",1608026704),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#0069d9"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui.zframes.redirect","redirect","ui.zframes.redirect/redirect",868608702),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uri","uri",-774711847),(2)], null)], null));
})], null)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card","div.card",-459317104),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-header.info-header","div.card-header.info-header",-1034867395),"Administrative info"], null),(cljs.core.truth_(new cljs.core.Keyword(null,"telecom","telecom",-409985543).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"patient","patient",1178852672).cljs$core$IFn$_invoke$arity$1(data__$1))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-body","div.card-body",1538579065),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5.card-title","h5.card-title",-2010521752),"Telecom"], null),(function (){var iter__4523__auto__ = (function ui$patient_workflow$card$view$patient_card_$_iter__24934(s__24935){
return (new cljs.core.LazySeq(null,(function (){
var s__24935__$1 = s__24935;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__24935__$1);
if(temp__5735__auto__){
var s__24935__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24935__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__24935__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__24937 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__24936 = (0);
while(true){
if((i__24936 < size__4522__auto__)){
var item = cljs.core._nth.call(null,c__4521__auto__,i__24936);
cljs.core.chunk_append.call(null,b__24937,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.info-item","span.info-item",1629790024),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-muted","span.text-muted",-1283719962),"Use: "], null),new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(item)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.info-item","span.info-item",1629790024),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-muted","span.text-muted",-1283719962),"Type: "], null),new cljs.core.Keyword(null,"system","system",-29381724).cljs$core$IFn$_invoke$arity$1(item)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.info-item","span.info-item",1629790024),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-muted","span.text-muted",-1283719962),"Phone nubmer: "], null),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(item)], null)], null));

var G__24946 = (i__24936 + (1));
i__24936 = G__24946;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24937),ui$patient_workflow$card$view$patient_card_$_iter__24934.call(null,cljs.core.chunk_rest.call(null,s__24935__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24937),null);
}
} else {
var item = cljs.core.first.call(null,s__24935__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.info-item","span.info-item",1629790024),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-muted","span.text-muted",-1283719962),"Use: "], null),new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(item)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.info-item","span.info-item",1629790024),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-muted","span.text-muted",-1283719962),"Type: "], null),new cljs.core.Keyword(null,"system","system",-29381724).cljs$core$IFn$_invoke$arity$1(item)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.info-item","span.info-item",1629790024),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-muted","span.text-muted",-1283719962),"Phone nubmer: "], null),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(item)], null)], null),ui$patient_workflow$card$view$patient_card_$_iter__24934.call(null,cljs.core.rest.call(null,s__24935__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,new cljs.core.Keyword(null,"telecom","telecom",-409985543).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"patient","patient",1178852672).cljs$core$IFn$_invoke$arity$1(data__$1))));
})()], null):null),(cljs.core.truth_(new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"patient","patient",1178852672).cljs$core$IFn$_invoke$arity$1(data__$1))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-body","div.card-body",1538579065),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5.card-title","h5.card-title",-2010521752),"Address"], null),(function (){var iter__4523__auto__ = (function ui$patient_workflow$card$view$patient_card_$_iter__24938(s__24939){
return (new cljs.core.LazySeq(null,(function (){
var s__24939__$1 = s__24939;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__24939__$1);
if(temp__5735__auto__){
var s__24939__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24939__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__24939__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__24941 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__24940 = (0);
while(true){
if((i__24940 < size__4522__auto__)){
var item = cljs.core._nth.call(null,c__4521__auto__,i__24940);
cljs.core.chunk_append.call(null,b__24941,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.info-item","span.info-item",1629790024),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-muted","span.text-muted",-1283719962),"Country: "], null),new cljs.core.Keyword(null,"country","country",312965309).cljs$core$IFn$_invoke$arity$1(item)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.info-item","span.info-item",1629790024),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-muted","span.text-muted",-1283719962),"City: "], null),new cljs.core.Keyword(null,"city","city",-393302614).cljs$core$IFn$_invoke$arity$1(item)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.info-item","span.info-item",1629790024),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-muted","span.text-muted",-1283719962),"Postal code: "], null),new cljs.core.Keyword(null,"postalCode","postalCode",717396150).cljs$core$IFn$_invoke$arity$1(item)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.info-item","span.info-item",1629790024),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-muted","span.text-muted",-1283719962),"State: "], null),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(item)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.info-item","div.info-item",290672087),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-muted","span.text-muted",-1283719962),"Line: "], null),cljs.core.first.call(null,new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(item))], null)], null));

var G__24947 = (i__24940 + (1));
i__24940 = G__24947;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24941),ui$patient_workflow$card$view$patient_card_$_iter__24938.call(null,cljs.core.chunk_rest.call(null,s__24939__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24941),null);
}
} else {
var item = cljs.core.first.call(null,s__24939__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.info-item","span.info-item",1629790024),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-muted","span.text-muted",-1283719962),"Country: "], null),new cljs.core.Keyword(null,"country","country",312965309).cljs$core$IFn$_invoke$arity$1(item)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.info-item","span.info-item",1629790024),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-muted","span.text-muted",-1283719962),"City: "], null),new cljs.core.Keyword(null,"city","city",-393302614).cljs$core$IFn$_invoke$arity$1(item)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.info-item","span.info-item",1629790024),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-muted","span.text-muted",-1283719962),"Postal code: "], null),new cljs.core.Keyword(null,"postalCode","postalCode",717396150).cljs$core$IFn$_invoke$arity$1(item)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.info-item","span.info-item",1629790024),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-muted","span.text-muted",-1283719962),"State: "], null),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(item)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.info-item","div.info-item",290672087),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-muted","span.text-muted",-1283719962),"Line: "], null),cljs.core.first.call(null,new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(item))], null)], null),ui$patient_workflow$card$view$patient_card_$_iter__24938.call(null,cljs.core.rest.call(null,s__24939__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"patient","patient",1178852672).cljs$core$IFn$_invoke$arity$1(data__$1))));
})()], null):null),(cljs.core.truth_(new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"patient","patient",1178852672).cljs$core$IFn$_invoke$arity$1(data__$1))))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-body","div.card-body",1538579065),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5.card-title","h5.card-title",-2010521752),"Identifiers"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.info-item","span.info-item",1629790024),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-muted","span.text-muted",-1283719962),"SSN: "], null),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.info-item","span.info-item",1629790024),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-muted","span.text-muted",-1283719962),"MRN: "], null),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.info-item","span.info-item",1629790024),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-muted","span.text-muted",-1283719962),"Driver Licence: "], null),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY)], null)], null):null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card","div.card",-459317104),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-header.info-header","div.card-header.info-header",-1034867395),"Recent encounters"], null),(function (){var iter__4523__auto__ = (function ui$patient_workflow$card$view$patient_card_$_iter__24942(s__24943){
return (new cljs.core.LazySeq(null,(function (){
var s__24943__$1 = s__24943;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__24943__$1);
if(temp__5735__auto__){
var s__24943__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24943__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__24943__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__24945 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__24944 = (0);
while(true){
if((i__24944 < size__4522__auto__)){
var item = cljs.core._nth.call(null,c__4521__auto__,i__24944);
cljs.core.chunk_append.call(null,b__24945,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.patient_workflow.card.view.encounter,item], null));

var G__24948 = (i__24944 + (1));
i__24944 = G__24948;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24945),ui$patient_workflow$card$view$patient_card_$_iter__24942.call(null,cljs.core.chunk_rest.call(null,s__24943__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24945),null);
}
} else {
var item = cljs.core.first.call(null,s__24943__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.patient_workflow.card.view.encounter,item], null),ui$patient_workflow$card$view$patient_card_$_iter__24942.call(null,cljs.core.rest.call(null,s__24943__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,new cljs.core.Keyword(null,"encounter","encounter",726495847).cljs$core$IFn$_invoke$arity$1(data__$1));
})()], null)], null)], null)], null);
});
});
ui.pages.reg_subs_page.call(null,ui.patient_workflow.card.model.index_card,(function (p__24949,params){
var map__24950 = p__24949;
var map__24950__$1 = (((((!((map__24950 == null))))?(((((map__24950.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24950.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24950):map__24950);
var page = map__24950__$1;
var data = cljs.core.get.call(null,map__24950__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aria-label","aria-label",455891514),"breadcrumb"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol.breadcrumb","ol.breadcrumb",-488493135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.breadcrumb-item","li.breadcrumb-item",2016782862),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),"Patients"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.breadcrumb-item.active","li.breadcrumb-item.active",1316312542),"8e369267-1e8a-438f-8ae8-a100fe2103fe"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.patient_workflow.card.view.patient_card,data], null)], null);
}));

//# sourceMappingURL=view.js.map
