// Compiled by ClojureScript 1.10.520 {}
goog.provide('ui.zframes.flash');
goog.require('cljs.core');
goog.require('ui.styles');
goog.require('re_frame.core');
ui.zframes.flash.gen_uuid = (function ui$zframes$flash$gen_uuid(){
return cljs.core.random_uuid.call(null);
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("ui.zframes.flash","flash","ui.zframes.flash/flash",-846549149),(function (db,p__29453){
var vec__29454 = p__29453;
var _ = cljs.core.nth.call(null,vec__29454,(0),null);
var status = cljs.core.nth.call(null,vec__29454,(1),null);
var data_or_params = cljs.core.nth.call(null,vec__29454,(2),null);
var maybe_params = cljs.core.nth.call(null,vec__29454,(3),null);
var map__29457 = (function (){var or__4131__auto__ = maybe_params;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return data_or_params;
}
})();
var map__29457__$1 = (((((!((map__29457 == null))))?(((((map__29457.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29457.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29457):map__29457);
var opts = map__29457__$1;
var id = cljs.core.get.call(null,map__29457__$1,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.keyword.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(ui.zframes.flash.gen_uuid.call(null))));
var msg = cljs.core.get.call(null,map__29457__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var time = cljs.core.get.call(null,map__29457__$1,new cljs.core.Keyword(null,"time","time",1385887882),(8000));
setTimeout(((function (map__29457,map__29457__$1,opts,id,msg,time,vec__29454,_,status,data_or_params,maybe_params){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui.zframes.flash","remove-flash","ui.zframes.flash/remove-flash",-1534788344),id], null));
});})(map__29457,map__29457__$1,opts,id,msg,time,vec__29454,_,status,data_or_params,maybe_params))
,time);

return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flash","flash",934660619),id], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"st","st",1455255828),status,new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("ui.zframes.flash","add-flash","ui.zframes.flash/add-flash",2139525033),(function (db,p__29459){
var vec__29460 = p__29459;
var _ = cljs.core.nth.call(null,vec__29460,(0),null);
var map__29463 = cljs.core.nth.call(null,vec__29460,(1),null);
var map__29463__$1 = (((((!((map__29463 == null))))?(((((map__29463.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29463.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29463):map__29463);
var opts = map__29463__$1;
var status = cljs.core.get.call(null,map__29463__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var id = cljs.core.get.call(null,map__29463__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var msg = cljs.core.get.call(null,map__29463__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flash","flash",934660619),id], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"st","st",1455255828),status,new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("ui.zframes.flash","remove-flash","ui.zframes.flash/remove-flash",-1534788344),(function (db,p__29465){
var vec__29466 = p__29465;
var _ = cljs.core.nth.call(null,vec__29466,(0),null);
var id = cljs.core.nth.call(null,vec__29466,(1),null);
return cljs.core.update.call(null,db,new cljs.core.Keyword(null,"flash","flash",934660619),cljs.core.dissoc,id);
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("flash","flash","flash/flash",1027979771),(function (p__29469){
var vec__29470 = p__29469;
var seq__29471 = cljs.core.seq.call(null,vec__29470);
var first__29472 = cljs.core.first.call(null,seq__29471);
var seq__29471__$1 = cljs.core.next.call(null,seq__29471);
var status = first__29472;
var args = seq__29471__$1;
return re_frame.core.dispatch.call(null,cljs.core.apply.call(null,cljs.core.vector,new cljs.core.Keyword("ui.zframes.flash","flash","ui.zframes.flash/flash",-846549149),status,args));
}));
var seq__29473_29493 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"danger","danger",-624338030),new cljs.core.Keyword(null,"warning","warning",-1685650671),new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.Keyword(null,"light","light",1918998747),new cljs.core.Keyword(null,"dark","dark",1818973999),new cljs.core.Keyword(null,"secondary","secondary",-669381460),new cljs.core.Keyword(null,"info","info",-317069002)], null));
var chunk__29474_29494 = null;
var count__29475_29495 = (0);
var i__29476_29496 = (0);
while(true){
if((i__29476_29496 < count__29475_29495)){
var type_29497 = cljs.core._nth.call(null,chunk__29474_29494,i__29476_29496);
var ev_29498 = cljs.core.keyword.call(null,"flash",cljs.core.name.call(null,type_29497));
re_frame.core.reg_event_fx.call(null,ev_29498,((function (seq__29473_29493,chunk__29474_29494,count__29475_29495,i__29476_29496,ev_29498,type_29497){
return (function (_,p__29485){
var vec__29486 = p__29485;
var seq__29487 = cljs.core.seq.call(null,vec__29486);
var first__29488 = cljs.core.first.call(null,seq__29487);
var seq__29487__$1 = cljs.core.next.call(null,seq__29487);
var ___$1 = first__29488;
var args = seq__29487__$1;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("flash","flash","flash/flash",1027979771),cljs.core.vec.call(null,cljs.core.cons.call(null,type_29497,args))], null);
});})(seq__29473_29493,chunk__29474_29494,count__29475_29495,i__29476_29496,ev_29498,type_29497))
);


var G__29499 = seq__29473_29493;
var G__29500 = chunk__29474_29494;
var G__29501 = count__29475_29495;
var G__29502 = (i__29476_29496 + (1));
seq__29473_29493 = G__29499;
chunk__29474_29494 = G__29500;
count__29475_29495 = G__29501;
i__29476_29496 = G__29502;
continue;
} else {
var temp__5735__auto___29503 = cljs.core.seq.call(null,seq__29473_29493);
if(temp__5735__auto___29503){
var seq__29473_29504__$1 = temp__5735__auto___29503;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29473_29504__$1)){
var c__4550__auto___29505 = cljs.core.chunk_first.call(null,seq__29473_29504__$1);
var G__29506 = cljs.core.chunk_rest.call(null,seq__29473_29504__$1);
var G__29507 = c__4550__auto___29505;
var G__29508 = cljs.core.count.call(null,c__4550__auto___29505);
var G__29509 = (0);
seq__29473_29493 = G__29506;
chunk__29474_29494 = G__29507;
count__29475_29495 = G__29508;
i__29476_29496 = G__29509;
continue;
} else {
var type_29510 = cljs.core.first.call(null,seq__29473_29504__$1);
var ev_29511 = cljs.core.keyword.call(null,"flash",cljs.core.name.call(null,type_29510));
re_frame.core.reg_event_fx.call(null,ev_29511,((function (seq__29473_29493,chunk__29474_29494,count__29475_29495,i__29476_29496,ev_29511,type_29510,seq__29473_29504__$1,temp__5735__auto___29503){
return (function (_,p__29489){
var vec__29490 = p__29489;
var seq__29491 = cljs.core.seq.call(null,vec__29490);
var first__29492 = cljs.core.first.call(null,seq__29491);
var seq__29491__$1 = cljs.core.next.call(null,seq__29491);
var ___$1 = first__29492;
var args = seq__29491__$1;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("flash","flash","flash/flash",1027979771),cljs.core.vec.call(null,cljs.core.cons.call(null,type_29510,args))], null);
});})(seq__29473_29493,chunk__29474_29494,count__29475_29495,i__29476_29496,ev_29511,type_29510,seq__29473_29504__$1,temp__5735__auto___29503))
);


var G__29512 = cljs.core.next.call(null,seq__29473_29504__$1);
var G__29513 = null;
var G__29514 = (0);
var G__29515 = (0);
seq__29473_29493 = G__29512;
chunk__29474_29494 = G__29513;
count__29475_29495 = G__29514;
i__29476_29496 = G__29515;
continue;
}
} else {
}
}
break;
}
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("ui.zframes.flash","flashes","ui.zframes.flash/flashes",-352868140),(function (db,_){
return new cljs.core.Keyword(null,"flash","flash",934660619).cljs$core$IFn$_invoke$arity$1(db);
}));
ui.zframes.flash.flash_msg = (function ui$zframes$flash$flash_msg(id,f){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.alert.alert-dismissible","div.alert.alert-dismissible",-1191842267),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["alert-",cljs.core.name.call(null,new cljs.core.Keyword(null,"st","st",1455255828).cljs$core$IFn$_invoke$arity$1(f))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.close","button.close",-1545560743),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui.zframes.flash","remove-flash","ui.zframes.flash/remove-flash",-1534788344),id], null));
})], null),"\u00D7"], null),new cljs.core.Keyword(null,"msg","msg",-1386103444).cljs$core$IFn$_invoke$arity$1(f)], null);
});
ui.zframes.flash.styles = ui.styles.style.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".flashes",".flashes",732744110),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"top","top",-1856271961),"20px",new cljs.core.Keyword(null,"right","right",-452581833),"20px",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"500px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(200)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"20px"], null)], null)], null));
ui.zframes.flash.flashes = (function ui$zframes$flash$flashes(){
var flashes = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui.zframes.flash","flashes","ui.zframes.flash/flashes",-352868140)], null));
return ((function (flashes){
return (function (){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flashes","div.flashes",1418773157)], null),cljs.core.reduce_kv.call(null,((function (flashes){
return (function (acc,k,f){
return cljs.core.conj.call(null,acc,ui.zframes.flash.flash_msg.call(null,k,f));
});})(flashes))
,cljs.core.PersistentVector.EMPTY,cljs.core.deref.call(null,flashes)));
});
;})(flashes))
});

//# sourceMappingURL=flash.js.map
