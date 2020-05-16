// Compiled by ClojureScript 1.10.520 {}
goog.provide('ui.basic_components.form.view');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('ui.basic_components.form.model');
ui.basic_components.form.view.form_select = (function ui$basic_components$form$view$form_select(var_args){
var args__4736__auto__ = [];
var len__4730__auto___99654 = arguments.length;
var i__4731__auto___99655 = (0);
while(true){
if((i__4731__auto___99655 < len__4730__auto___99654)){
args__4736__auto__.push((arguments[i__4731__auto___99655]));

var G__99656 = (i__4731__auto___99655 + (1));
i__4731__auto___99655 = G__99656;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return ui.basic_components.form.view.form_select.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

ui.basic_components.form.view.form_select.cljs$core$IFn$_invoke$arity$variadic = (function (items,path,p__99640){
var vec__99641 = p__99640;
var selected = cljs.core.nth.call(null,vec__99641,(0),null);
var db_value = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui.basic-components.form.model","form-values","ui.basic-components.form.model/form-values",1419954236),path], null));
var selected__$1 = (function (){var or__4131__auto__ = selected;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.deref.call(null,db_value);
}
})();
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (db_value,selected__$1,vec__99641,selected){
return (function (this$){
var path__$1 = cljs.core.last.call(null,cljs.core.butlast.call(null,(this$.props["argv"])));
var value = cljs.core.last.call(null,(this$.props["argv"]));
if((value == null)){
return null;
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui.basic-components.form.model","form-set-value","ui.basic-components.form.model/form-set-value",-16795622),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),path__$1,new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4131__auto__ = value;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.deref.call(null,db_value);
}
})()], null)], null));
}
});})(db_value,selected__$1,vec__99641,selected))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (db_value,selected__$1,vec__99641,selected){
return (function (_,___$1,___$2){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select#use-input.form-control.selector","select#use-input.form-control.selector",-1946254297),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (db_value,selected__$1,vec__99641,selected){
return (function (p1__99636_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui.basic-components.form.model","form-set-value","ui.basic-components.form.model/form-set-value",-16795622),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"value","value",305978217),p1__99636_SHARP_.target.value], null)], null));
});})(db_value,selected__$1,vec__99641,selected))
], null),(function (){var iter__4523__auto__ = ((function (db_value,selected__$1,vec__99641,selected){
return (function ui$basic_components$form$view$iter__99644(s__99645){
return (new cljs.core.LazySeq(null,((function (db_value,selected__$1,vec__99641,selected){
return (function (){
var s__99645__$1 = s__99645;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__99645__$1);
if(temp__5735__auto__){
var s__99645__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__99645__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__99645__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__99647 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__99646 = (0);
while(true){
if((i__99646 < size__4522__auto__)){
var map__99648 = cljs.core._nth.call(null,c__4521__auto__,i__99646);
var map__99648__$1 = (((((!((map__99648 == null))))?(((((map__99648.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__99648.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__99648):map__99648);
var item = map__99648__$1;
var value = cljs.core.get.call(null,map__99648__$1,new cljs.core.Keyword(null,"value","value",305978217));
var display = cljs.core.get.call(null,map__99648__$1,new cljs.core.Keyword(null,"display","display",242065432));
cljs.core.chunk_append.call(null,b__99647,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option.selector-item","option.selector-item",2080167738),(function (){var G__99650 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4131__auto__ = value;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.deref.call(null,db_value);
}
})()], null);
if(cljs.core._EQ_.call(null,selected__$1,(function (){var or__4131__auto__ = value;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.deref.call(null,db_value);
}
})())){
return cljs.core.assoc.call(null,G__99650,new cljs.core.Keyword(null,"selected","selected",574897764),"selected");
} else {
return G__99650;
}
})(),display], null));

var G__99657 = (i__99646 + (1));
i__99646 = G__99657;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__99647),ui$basic_components$form$view$iter__99644.call(null,cljs.core.chunk_rest.call(null,s__99645__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__99647),null);
}
} else {
var map__99651 = cljs.core.first.call(null,s__99645__$2);
var map__99651__$1 = (((((!((map__99651 == null))))?(((((map__99651.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__99651.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__99651):map__99651);
var item = map__99651__$1;
var value = cljs.core.get.call(null,map__99651__$1,new cljs.core.Keyword(null,"value","value",305978217));
var display = cljs.core.get.call(null,map__99651__$1,new cljs.core.Keyword(null,"display","display",242065432));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option.selector-item","option.selector-item",2080167738),(function (){var G__99653 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4131__auto__ = value;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.deref.call(null,db_value);
}
})()], null);
if(cljs.core._EQ_.call(null,selected__$1,(function (){var or__4131__auto__ = value;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.deref.call(null,db_value);
}
})())){
return cljs.core.assoc.call(null,G__99653,new cljs.core.Keyword(null,"selected","selected",574897764),"selected");
} else {
return G__99653;
}
})(),display], null),ui$basic_components$form$view$iter__99644.call(null,cljs.core.rest.call(null,s__99645__$2)));
}
} else {
return null;
}
break;
}
});})(db_value,selected__$1,vec__99641,selected))
,null,null));
});})(db_value,selected__$1,vec__99641,selected))
;
return iter__4523__auto__.call(null,items);
})()], null);
});})(db_value,selected__$1,vec__99641,selected))
], null));
});

ui.basic_components.form.view.form_select.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
ui.basic_components.form.view.form_select.cljs$lang$applyTo = (function (seq99637){
var G__99638 = cljs.core.first.call(null,seq99637);
var seq99637__$1 = cljs.core.next.call(null,seq99637);
var G__99639 = cljs.core.first.call(null,seq99637__$1);
var seq99637__$2 = cljs.core.next.call(null,seq99637__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__99638,G__99639,seq99637__$2);
});

ui.basic_components.form.view.combobox_input = (function ui$basic_components$form$view$combobox_input(var_args){
var args__4736__auto__ = [];
var len__4730__auto___99680 = arguments.length;
var i__4731__auto___99681 = (0);
while(true){
if((i__4731__auto___99681 < len__4730__auto___99680)){
args__4736__auto__.push((arguments[i__4731__auto___99681]));

var G__99682 = (i__4731__auto___99681 + (1));
i__4731__auto___99681 = G__99682;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return ui.basic_components.form.view.combobox_input.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

ui.basic_components.form.view.combobox_input.cljs$core$IFn$_invoke$arity$variadic = (function (path,p__99663){
var vec__99664 = p__99663;
var map__99667 = cljs.core.nth.call(null,vec__99664,(0),null);
var map__99667__$1 = (((((!((map__99667 == null))))?(((((map__99667.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__99667.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__99667):map__99667);
var items = cljs.core.get.call(null,map__99667__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var on_click = cljs.core.get.call(null,map__99667__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var selected = cljs.core.get.call(null,map__99667__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var db_value = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui.basic-components.form.model","form-values","ui.basic-components.form.model/form-values",1419954236),path], null)));
var selected__$1 = (function (){var or__4131__auto__ = selected;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return db_value;
}
})();
var v = reagent.core.atom.call(null,null);
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (db_value,selected__$1,v,vec__99664,map__99667,map__99667__$1,items,on_click,selected){
return (function (this$){
var path__$1 = cljs.core.last.call(null,cljs.core.butlast.call(null,(this$.props["argv"])));
var value = (function (){var G__99669 = cljs.core.last.call(null,(this$.props["argv"]));
if(cljs.core.map_QMARK_.call(null,cljs.core.last.call(null,(this$.props["argv"])))){
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.get.call(null,G__99669,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938)], null))));
} else {
return G__99669;
}
})();
if((value == null)){
return null;
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui.basic-components.form.model","form-set-value","ui.basic-components.form.model/form-set-value",-16795622),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),path__$1,new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4131__auto__ = value;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return db_value;
}
})()], null)], null));
}
});})(db_value,selected__$1,v,vec__99664,map__99667,map__99667__$1,items,on_click,selected))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (db_value,selected__$1,v,vec__99664,map__99667,map__99667__$1,items,on_click,selected){
return (function (_,___$1,___$2){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.custom-select","input.custom-select",-382929041),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"list","list",765357683),"combobox",new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4131__auto__ = cljs.core.deref.call(null,v);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.filter.call(null,((function (or__4131__auto__,db_value,selected__$1,v,vec__99664,map__99667,map__99667__$1,items,on_click,selected){
return (function (p1__99658_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__99658_SHARP_),db_value);
});})(or__4131__auto__,db_value,selected__$1,v,vec__99664,map__99667,map__99667__$1,items,on_click,selected))
,items)));
}
})(),new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (db_value,selected__$1,v,vec__99664,map__99667,map__99667__$1,items,on_click,selected){
return (function (p1__99659_SHARP_){
cljs.core.reset_BANG_.call(null,v,p1__99659_SHARP_.target.value);

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui.basic-components.form.model","form-set-value","ui.basic-components.form.model/form-set-value",-16795622),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"value","value",305978217),p1__99659_SHARP_.target.value], null)], null));
});})(db_value,selected__$1,v,vec__99664,map__99667,map__99667__$1,items,on_click,selected))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datalist","datalist",-1235043474),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"id","id",-1388402092),"combobox",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (db_value,selected__$1,v,vec__99664,map__99667,map__99667__$1,items,on_click,selected){
return (function (p1__99660_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui.basic-components.form.model","form-set-value","ui.basic-components.form.model/form-set-value",-16795622),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"value","value",305978217),p1__99660_SHARP_.target.value], null)], null));
});})(db_value,selected__$1,v,vec__99664,map__99667,map__99667__$1,items,on_click,selected))
], null),(function (){var iter__4523__auto__ = ((function (db_value,selected__$1,v,vec__99664,map__99667,map__99667__$1,items,on_click,selected){
return (function ui$basic_components$form$view$iter__99670(s__99671){
return (new cljs.core.LazySeq(null,((function (db_value,selected__$1,v,vec__99664,map__99667,map__99667__$1,items,on_click,selected){
return (function (){
var s__99671__$1 = s__99671;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__99671__$1);
if(temp__5735__auto__){
var s__99671__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__99671__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__99671__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__99673 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__99672 = (0);
while(true){
if((i__99672 < size__4522__auto__)){
var map__99674 = cljs.core._nth.call(null,c__4521__auto__,i__99672);
var map__99674__$1 = (((((!((map__99674 == null))))?(((((map__99674.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__99674.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__99674):map__99674);
var item = map__99674__$1;
var value = cljs.core.get.call(null,map__99674__$1,new cljs.core.Keyword(null,"value","value",305978217));
var display = cljs.core.get.call(null,map__99674__$1,new cljs.core.Keyword(null,"display","display",242065432));
cljs.core.chunk_append.call(null,b__99673,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option.selector-item","option.selector-item",2080167738),(function (){var G__99676 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4131__auto__ = value;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return db_value;
}
})()], null);
if(cljs.core._EQ_.call(null,selected__$1,(function (){var or__4131__auto__ = value;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return db_value;
}
})())){
return cljs.core.assoc.call(null,G__99676,new cljs.core.Keyword(null,"selected","selected",574897764),"selected");
} else {
return G__99676;
}
})(),display], null));

var G__99683 = (i__99672 + (1));
i__99672 = G__99683;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__99673),ui$basic_components$form$view$iter__99670.call(null,cljs.core.chunk_rest.call(null,s__99671__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__99673),null);
}
} else {
var map__99677 = cljs.core.first.call(null,s__99671__$2);
var map__99677__$1 = (((((!((map__99677 == null))))?(((((map__99677.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__99677.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__99677):map__99677);
var item = map__99677__$1;
var value = cljs.core.get.call(null,map__99677__$1,new cljs.core.Keyword(null,"value","value",305978217));
var display = cljs.core.get.call(null,map__99677__$1,new cljs.core.Keyword(null,"display","display",242065432));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option.selector-item","option.selector-item",2080167738),(function (){var G__99679 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4131__auto__ = value;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return db_value;
}
})()], null);
if(cljs.core._EQ_.call(null,selected__$1,(function (){var or__4131__auto__ = value;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return db_value;
}
})())){
return cljs.core.assoc.call(null,G__99679,new cljs.core.Keyword(null,"selected","selected",574897764),"selected");
} else {
return G__99679;
}
})(),display], null),ui$basic_components$form$view$iter__99670.call(null,cljs.core.rest.call(null,s__99671__$2)));
}
} else {
return null;
}
break;
}
});})(db_value,selected__$1,v,vec__99664,map__99667,map__99667__$1,items,on_click,selected))
,null,null));
});})(db_value,selected__$1,v,vec__99664,map__99667,map__99667__$1,items,on_click,selected))
;
return iter__4523__auto__.call(null,items);
})()], null)], null);
});})(db_value,selected__$1,v,vec__99664,map__99667,map__99667__$1,items,on_click,selected))
], null));
});

ui.basic_components.form.view.combobox_input.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
ui.basic_components.form.view.combobox_input.cljs$lang$applyTo = (function (seq99661){
var G__99662 = cljs.core.first.call(null,seq99661);
var seq99661__$1 = cljs.core.next.call(null,seq99661);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__99662,seq99661__$1);
});

ui.basic_components.form.view.form_input = (function ui$basic_components$form$view$form_input(var_args){
var args__4736__auto__ = [];
var len__4730__auto___99691 = arguments.length;
var i__4731__auto___99692 = (0);
while(true){
if((i__4731__auto___99692 < len__4730__auto___99691)){
args__4736__auto__.push((arguments[i__4731__auto___99692]));

var G__99693 = (i__4731__auto___99692 + (1));
i__4731__auto___99692 = G__99693;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return ui.basic_components.form.view.form_input.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

ui.basic_components.form.view.form_input.cljs$core$IFn$_invoke$arity$variadic = (function (path,p__99687){
var vec__99688 = p__99687;
var placeholder = cljs.core.nth.call(null,vec__99688,(0),null);
var value = cljs.core.nth.call(null,vec__99688,(1),null);
var v = reagent.core.atom.call(null,value);
var db_value = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui.basic-components.form.model","form-values","ui.basic-components.form.model/form-values",1419954236),path], null));
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (v,db_value,vec__99688,placeholder,value){
return (function (this$){
if((value == null)){
return null;
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui.basic-components.form.model","form-set-value","ui.basic-components.form.model/form-set-value",-16795622),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4131__auto__ = value;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.deref.call(null,db_value);
}
})()], null)], null));
}
});})(v,db_value,vec__99688,placeholder,value))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (v,db_value,vec__99688,placeholder,value){
return (function (_,___$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4131__auto__ = cljs.core.deref.call(null,v);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.deref.call(null,db_value);
}
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (v,db_value,vec__99688,placeholder,value){
return (function (p1__99684_SHARP_){
cljs.core.reset_BANG_.call(null,v,p1__99684_SHARP_.target.value);

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui.basic-components.form.model","form-set-value","ui.basic-components.form.model/form-set-value",-16795622),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"value","value",305978217),p1__99684_SHARP_.target.value], null)], null));
});})(v,db_value,vec__99688,placeholder,value))
], null)], null);
});})(v,db_value,vec__99688,placeholder,value))
], null));
});

ui.basic_components.form.view.form_input.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
ui.basic_components.form.view.form_input.cljs$lang$applyTo = (function (seq99685){
var G__99686 = cljs.core.first.call(null,seq99685);
var seq99685__$1 = cljs.core.next.call(null,seq99685);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__99686,seq99685__$1);
});

ui.basic_components.form.view.form_password = (function ui$basic_components$form$view$form_password(var_args){
var args__4736__auto__ = [];
var len__4730__auto___99701 = arguments.length;
var i__4731__auto___99702 = (0);
while(true){
if((i__4731__auto___99702 < len__4730__auto___99701)){
args__4736__auto__.push((arguments[i__4731__auto___99702]));

var G__99703 = (i__4731__auto___99702 + (1));
i__4731__auto___99702 = G__99703;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return ui.basic_components.form.view.form_password.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

ui.basic_components.form.view.form_password.cljs$core$IFn$_invoke$arity$variadic = (function (path,p__99697){
var vec__99698 = p__99697;
var placeholder = cljs.core.nth.call(null,vec__99698,(0),null);
var value = cljs.core.nth.call(null,vec__99698,(1),null);
var v = reagent.core.atom.call(null,value);
var db_value = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui.basic-components.form.model","form-values","ui.basic-components.form.model/form-values",1419954236),path], null));
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (v,db_value,vec__99698,placeholder,value){
return (function (this$){
if((value == null)){
return null;
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui.basic-components.form.model","form-set-value","ui.basic-components.form.model/form-set-value",-16795622),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4131__auto__ = value;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.deref.call(null,db_value);
}
})()], null)], null));
}
});})(v,db_value,vec__99698,placeholder,value))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (v,db_value,vec__99698,placeholder,value){
return (function (_,___$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"password",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4131__auto__ = cljs.core.deref.call(null,v);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.deref.call(null,db_value);
}
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (v,db_value,vec__99698,placeholder,value){
return (function (p1__99694_SHARP_){
cljs.core.reset_BANG_.call(null,v,p1__99694_SHARP_.target.value);

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui.basic-components.form.model","form-set-value","ui.basic-components.form.model/form-set-value",-16795622),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"value","value",305978217),p1__99694_SHARP_.target.value], null)], null));
});})(v,db_value,vec__99698,placeholder,value))
], null)], null);
});})(v,db_value,vec__99698,placeholder,value))
], null));
});

ui.basic_components.form.view.form_password.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
ui.basic_components.form.view.form_password.cljs$lang$applyTo = (function (seq99695){
var G__99696 = cljs.core.first.call(null,seq99695);
var seq99695__$1 = cljs.core.next.call(null,seq99695);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__99696,seq99695__$1);
});

ui.basic_components.form.view.form_date_input = (function ui$basic_components$form$view$form_date_input(var_args){
var args__4736__auto__ = [];
var len__4730__auto___99711 = arguments.length;
var i__4731__auto___99712 = (0);
while(true){
if((i__4731__auto___99712 < len__4730__auto___99711)){
args__4736__auto__.push((arguments[i__4731__auto___99712]));

var G__99713 = (i__4731__auto___99712 + (1));
i__4731__auto___99712 = G__99713;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return ui.basic_components.form.view.form_date_input.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

ui.basic_components.form.view.form_date_input.cljs$core$IFn$_invoke$arity$variadic = (function (path,p__99707){
var vec__99708 = p__99707;
var value = cljs.core.nth.call(null,vec__99708,(0),null);
var v = reagent.core.atom.call(null,value);
var db_value = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui.basic-components.form.model","form-values","ui.basic-components.form.model/form-values",1419954236),path], null));
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (v,db_value,vec__99708,value){
return (function (this$){
if((value == null)){
return null;
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui.basic-components.form.model","form-set-value","ui.basic-components.form.model/form-set-value",-16795622),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4131__auto__ = value;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.deref.call(null,db_value);
}
})()], null)], null));
}
});})(v,db_value,vec__99708,value))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (v,db_value,vec__99708,value){
return (function (_,___$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"date",new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4131__auto__ = cljs.core.deref.call(null,v);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.deref.call(null,db_value);
}
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (v,db_value,vec__99708,value){
return (function (p1__99704_SHARP_){
cljs.core.reset_BANG_.call(null,v,p1__99704_SHARP_.target.value);

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui.basic-components.form.model","form-set-value","ui.basic-components.form.model/form-set-value",-16795622),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"value","value",305978217),p1__99704_SHARP_.target.value], null)], null));
});})(v,db_value,vec__99708,value))
], null)], null);
});})(v,db_value,vec__99708,value))
], null));
});

ui.basic_components.form.view.form_date_input.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
ui.basic_components.form.view.form_date_input.cljs$lang$applyTo = (function (seq99705){
var G__99706 = cljs.core.first.call(null,seq99705);
var seq99705__$1 = cljs.core.next.call(null,seq99705);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__99706,seq99705__$1);
});

ui.basic_components.form.view.form_datetime_input = (function ui$basic_components$form$view$form_datetime_input(var_args){
var args__4736__auto__ = [];
var len__4730__auto___99721 = arguments.length;
var i__4731__auto___99722 = (0);
while(true){
if((i__4731__auto___99722 < len__4730__auto___99721)){
args__4736__auto__.push((arguments[i__4731__auto___99722]));

var G__99723 = (i__4731__auto___99722 + (1));
i__4731__auto___99722 = G__99723;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return ui.basic_components.form.view.form_datetime_input.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

ui.basic_components.form.view.form_datetime_input.cljs$core$IFn$_invoke$arity$variadic = (function (path,p__99717){
var vec__99718 = p__99717;
var value = cljs.core.nth.call(null,vec__99718,(0),null);
var v = reagent.core.atom.call(null,value);
var db_value = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui.basic-components.form.model","form-values","ui.basic-components.form.model/form-values",1419954236),path], null));
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (v,db_value,vec__99718,value){
return (function (this$){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui.basic-components.form.model","form-set-value","ui.basic-components.form.model/form-set-value",-16795622),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4131__auto__ = value;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.deref.call(null,db_value);
}
})()], null)], null));
});})(v,db_value,vec__99718,value))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (v,db_value,vec__99718,value){
return (function (_,___$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"datetime-local",new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4131__auto__ = cljs.core.deref.call(null,v);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.deref.call(null,db_value);
}
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (v,db_value,vec__99718,value){
return (function (p1__99714_SHARP_){
cljs.core.reset_BANG_.call(null,v,p1__99714_SHARP_.target.value);

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui.basic-components.form.model","form-set-value","ui.basic-components.form.model/form-set-value",-16795622),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"value","value",305978217),p1__99714_SHARP_.target.value], null)], null));
});})(v,db_value,vec__99718,value))
], null)], null);
});})(v,db_value,vec__99718,value))
], null));
});

ui.basic_components.form.view.form_datetime_input.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
ui.basic_components.form.view.form_datetime_input.cljs$lang$applyTo = (function (seq99715){
var G__99716 = cljs.core.first.call(null,seq99715);
var seq99715__$1 = cljs.core.next.call(null,seq99715);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__99716,seq99715__$1);
});


//# sourceMappingURL=view.js.map
