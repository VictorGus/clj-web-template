// Compiled by ClojureScript 1.10.520 {}
goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.subs');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.db');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.utils');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.registrar');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace');
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.subs.kind = new cljs.core.Keyword(null,"sub","sub",-2093760025);
if(cljs.core.truth_(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.registrar.kinds.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.subs.kind))){
} else {
throw (new Error("Assert failed: (day8.re-frame-10x.inlined-deps.re-frame.v0v10v9.re-frame.registrar/kinds kind)"));
}
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.subs.query__GT_reaction = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Causes all subscriptions to be removed from the cache.
 *   Does this by:
 *   1. running `on-dispose` on all cached subscriptions
 *   2. Each `on-dispose` will perform the removal of themselves.
 * 
 *   This is for development time use. Useful when reloading Figwheel code
 *   after a React exception, because React components won't have been
 *   cleaned up properly. And this, in turn, means the subscriptions within those
 *   components won't have been cleaned up correctly. So this forces the issue.
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.subs.clear_subscription_cache_BANG_ = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$subs$clear_subscription_cache_BANG_(){
var seq__12103_12119 = cljs.core.seq.call(null,cljs.core.deref.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.subs.query__GT_reaction));
var chunk__12104_12120 = null;
var count__12105_12121 = (0);
var i__12106_12122 = (0);
while(true){
if((i__12106_12122 < count__12105_12121)){
var vec__12113_12123 = cljs.core._nth.call(null,chunk__12104_12120,i__12106_12122);
var k_12124 = cljs.core.nth.call(null,vec__12113_12123,(0),null);
var rxn_12125 = cljs.core.nth.call(null,vec__12113_12123,(1),null);
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop.dispose_BANG_.call(null,rxn_12125);


var G__12126 = seq__12103_12119;
var G__12127 = chunk__12104_12120;
var G__12128 = count__12105_12121;
var G__12129 = (i__12106_12122 + (1));
seq__12103_12119 = G__12126;
chunk__12104_12120 = G__12127;
count__12105_12121 = G__12128;
i__12106_12122 = G__12129;
continue;
} else {
var temp__5720__auto___12130 = cljs.core.seq.call(null,seq__12103_12119);
if(temp__5720__auto___12130){
var seq__12103_12131__$1 = temp__5720__auto___12130;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12103_12131__$1)){
var c__4550__auto___12132 = cljs.core.chunk_first.call(null,seq__12103_12131__$1);
var G__12133 = cljs.core.chunk_rest.call(null,seq__12103_12131__$1);
var G__12134 = c__4550__auto___12132;
var G__12135 = cljs.core.count.call(null,c__4550__auto___12132);
var G__12136 = (0);
seq__12103_12119 = G__12133;
chunk__12104_12120 = G__12134;
count__12105_12121 = G__12135;
i__12106_12122 = G__12136;
continue;
} else {
var vec__12116_12137 = cljs.core.first.call(null,seq__12103_12131__$1);
var k_12138 = cljs.core.nth.call(null,vec__12116_12137,(0),null);
var rxn_12139 = cljs.core.nth.call(null,vec__12116_12137,(1),null);
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop.dispose_BANG_.call(null,rxn_12139);


var G__12140 = cljs.core.next.call(null,seq__12103_12131__$1);
var G__12141 = null;
var G__12142 = (0);
var G__12143 = (0);
seq__12103_12119 = G__12140;
chunk__12104_12120 = G__12141;
count__12105_12121 = G__12142;
i__12106_12122 = G__12143;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.deref.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.subs.query__GT_reaction)))){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Subscription cache should be empty after clearing it.");
} else {
return null;
}
});
/**
 * Unregisters all existing subscription handlers
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.subs.clear_all_handlers_BANG_ = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$subs$clear_all_handlers_BANG_(){
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.registrar.clear_handlers.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.subs.kind);

return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.subs.clear_subscription_cache_BANG_.call(null);
});
/**
 * cache the reaction r
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.subs.cache_and_return = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$subs$cache_and_return(query_v,dynv,r){
var cache_key = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_v,dynv], null);
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop.add_on_dispose_BANG_.call(null,r,((function (cache_key){
return (function (){
if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR__orig_val__12144 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__12145 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.utils.first_in_vector.call(null,query_v),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_v,new cljs.core.Keyword(null,"reaction","reaction",490869788),day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop.reagent_id.call(null,r)], null)], null));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__12145;

try{try{return cljs.core.swap_BANG_.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.subs.query__GT_reaction,((function (_STAR_current_trace_STAR__orig_val__12144,_STAR_current_trace_STAR__temp_val__12145,cache_key){
return (function (query_cache){
if(((cljs.core.contains_QMARK_.call(null,query_cache,cache_key)) && ((r === cljs.core.get.call(null,query_cache,cache_key))))){
return cljs.core.dissoc.call(null,query_cache,cache_key);
} else {
return query_cache;
}
});})(_STAR_current_trace_STAR__orig_val__12144,_STAR_current_trace_STAR__temp_val__12145,cache_key))
);
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__11421__auto___12146 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop.now.call(null);
var duration__11422__auto___12147 = (end__11421__auto___12146 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__11422__auto___12147,new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop.now.call(null)));

day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__11421__auto___12146);
} else {
}
}}finally {day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__12144;
}} else {
return cljs.core.swap_BANG_.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.subs.query__GT_reaction,((function (cache_key){
return (function (query_cache){
if(((cljs.core.contains_QMARK_.call(null,query_cache,cache_key)) && ((r === cljs.core.get.call(null,query_cache,cache_key))))){
return cljs.core.dissoc.call(null,query_cache,cache_key);
} else {
return query_cache;
}
});})(cache_key))
);
}
});})(cache_key))
);

cljs.core.swap_BANG_.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.subs.query__GT_reaction,((function (cache_key){
return (function (query_cache){
if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop.debug_enabled_QMARK_){
if(cljs.core.contains_QMARK_.call(null,query_cache,cache_key)){
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: Adding a new subscription to the cache while there is an existing subscription in the cache",cache_key);
} else {
}
} else {
}

return cljs.core.assoc.call(null,query_cache,cache_key,r);
});})(cache_key))
);

if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__11423__auto___12148 = cljs.core.merge.call(null,cljs.core.update.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reaction","reaction",490869788),day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop.reagent_id.call(null,r)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reaction","reaction",490869788),day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop.reagent_id.call(null,r)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_ = new_trace__11423__auto___12148;

} else {
}

return r;
});
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.subs.cache_lookup = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$subs$cache_lookup(var_args){
var G__12150 = arguments.length;
switch (G__12150) {
case 1:
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1 = (function (query_v){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.subs.cache_lookup.call(null,query_v,cljs.core.PersistentVector.EMPTY);
});

day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2 = (function (query_v,dyn_v){
return cljs.core.get.call(null,cljs.core.deref.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.subs.query__GT_reaction),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_v,dyn_v], null));
});

day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.subs.cache_lookup.cljs$lang$maxFixedArity = 2;

/**
 * Given a `query`, returns a Reagent `reaction` which, over
 *   time, reactively delivers a stream of values. So in FRP-ish terms,
 *   it returns a `Signal`.
 * 
 *   To obtain the returned Signal/Stream's current value, it must be `deref`ed.
 * 
 *   `query` is a vector of at least one element. The first element is the
 *   `query-id`, typically a namespaced keyword. The rest of the vector's
 *   elements are optional, additional values which parameterise the query
 *   performed.
 * 
 *   `dynv` is an optional 3rd argument, which is a vector of further input
 *   signals (atoms, reactions, etc), NOT values. This argument exists for
 *   historical reasons and is borderline deprecated these days.
 * 
 *   Example Usage:
 *   --------------
 * 
 *  (subscribe [:items])
 *  (subscribe [:items "blue" :small])
 *  (subscribe [:items {:colour "blue"  :size :small}])
 * 
 *   Note: for any given call to `subscribe` there must have been a previous call
 *   to `reg-sub`, registering the query handler (function) for the `query-id` given.
 * 
 *   Hint
 *   ----
 * 
 *   When used in a view function BE SURE to `deref` the returned value.
 *   In fact, to avoid any mistakes, some prefer to define:
 * 
 *   (def <sub  (comp deref day8.re-frame-10x.inlined-deps.re-frame.v0v10v9.re-frame.core/subscribe))
 * 
 *   And then, within their views, they call  `(<sub [:items :small])` rather
 *   than using `subscribe` directly.
 * 
 *   De-duplication
 *   --------------
 * 
 *   XXX
 *   
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.subs.subscribe = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$subs$subscribe(var_args){
var G__12153 = arguments.length;
switch (G__12153) {
case 1:
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1 = (function (query){
if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR__orig_val__12154 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__12155 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.utils.first_in_vector.call(null,query),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","create","sub/create",-1301317560),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query], null)], null));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__12155;

try{try{var temp__5718__auto__ = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.subs.cache_lookup.call(null,query);
if(cljs.core.truth_(temp__5718__auto__)){
var cached = temp__5718__auto__;
if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__11423__auto___12159 = cljs.core.merge.call(null,cljs.core.update.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_ = new_trace__11423__auto___12159;

} else {
}

return cached;
} else {
var query_id = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.utils.first_in_vector.call(null,query);
var handler_fn = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.registrar.get_handler.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.subs.kind,query_id);
if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__11423__auto___12160 = cljs.core.merge.call(null,cljs.core.update.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_ = new_trace__11423__auto___12160;

} else {
}

if((handler_fn == null)){
if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__11423__auto___12161 = cljs.core.merge.call(null,cljs.core.update.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_ = new_trace__11423__auto___12161;

} else {
}

return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["re-frame: no subscription handler registered for: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),". Returning a nil subscription."].join(''));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.subs.cache_and_return.call(null,query,cljs.core.PersistentVector.EMPTY,handler_fn.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.db.app_db,query));
}
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__11421__auto___12162 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop.now.call(null);
var duration__11422__auto___12163 = (end__11421__auto___12162 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__11422__auto___12163,new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop.now.call(null)));

day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__11421__auto___12162);
} else {
}
}}finally {day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__12154;
}} else {
var temp__5718__auto__ = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.subs.cache_lookup.call(null,query);
if(cljs.core.truth_(temp__5718__auto__)){
var cached = temp__5718__auto__;
if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__11423__auto___12164 = cljs.core.merge.call(null,cljs.core.update.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_ = new_trace__11423__auto___12164;

} else {
}

return cached;
} else {
var query_id = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.utils.first_in_vector.call(null,query);
var handler_fn = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.registrar.get_handler.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.subs.kind,query_id);
if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__11423__auto___12165 = cljs.core.merge.call(null,cljs.core.update.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_ = new_trace__11423__auto___12165;

} else {
}

if((handler_fn == null)){
if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__11423__auto___12166 = cljs.core.merge.call(null,cljs.core.update.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_ = new_trace__11423__auto___12166;

} else {
}

return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["re-frame: no subscription handler registered for: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),". Returning a nil subscription."].join(''));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.subs.cache_and_return.call(null,query,cljs.core.PersistentVector.EMPTY,handler_fn.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.db.app_db,query));
}
}
}
});

day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$2 = (function (query,dynv){
if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR__orig_val__12156 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__12157 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.utils.first_in_vector.call(null,query),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","create","sub/create",-1301317560),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query,new cljs.core.Keyword(null,"dyn-v","dyn-v",949994592),dynv], null)], null));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__12157;

try{try{var temp__5718__auto__ = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.subs.cache_lookup.call(null,query,dynv);
if(cljs.core.truth_(temp__5718__auto__)){
var cached = temp__5718__auto__;
if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__11423__auto___12167 = cljs.core.merge.call(null,cljs.core.update.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_ = new_trace__11423__auto___12167;

} else {
}

return cached;
} else {
var query_id = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.utils.first_in_vector.call(null,query);
var handler_fn = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.registrar.get_handler.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.subs.kind,query_id);
if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__11423__auto___12168 = cljs.core.merge.call(null,cljs.core.update.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_ = new_trace__11423__auto___12168;

} else {
}

if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop.debug_enabled_QMARK_){
var temp__5720__auto___12169 = cljs.core.not_empty.call(null,cljs.core.remove.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop.ratom_QMARK_,dynv));
if(cljs.core.truth_(temp__5720__auto___12169)){
var not_reactive_12170 = temp__5720__auto___12169;
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: your subscription's dynamic parameters that don't implement IReactiveAtom:",not_reactive_12170);
} else {
}
} else {
}

if((handler_fn == null)){
if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__11423__auto___12171 = cljs.core.merge.call(null,cljs.core.update.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_ = new_trace__11423__auto___12171;

} else {
}

return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["re-frame: no subscription handler registered for: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),". Returning a nil subscription."].join(''));
} else {
var dyn_vals = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop.make_reaction.call(null,((function (query_id,handler_fn,temp__5718__auto__,_STAR_current_trace_STAR__orig_val__12156,_STAR_current_trace_STAR__temp_val__12157){
return (function (){
return cljs.core.mapv.call(null,cljs.core.deref,dynv);
});})(query_id,handler_fn,temp__5718__auto__,_STAR_current_trace_STAR__orig_val__12156,_STAR_current_trace_STAR__temp_val__12157))
);
var sub = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop.make_reaction.call(null,((function (dyn_vals,query_id,handler_fn,temp__5718__auto__,_STAR_current_trace_STAR__orig_val__12156,_STAR_current_trace_STAR__temp_val__12157){
return (function (){
return handler_fn.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.db.app_db,query,cljs.core.deref.call(null,dyn_vals));
});})(dyn_vals,query_id,handler_fn,temp__5718__auto__,_STAR_current_trace_STAR__orig_val__12156,_STAR_current_trace_STAR__temp_val__12157))
);
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.subs.cache_and_return.call(null,query,dynv,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop.make_reaction.call(null,((function (dyn_vals,sub,query_id,handler_fn,temp__5718__auto__,_STAR_current_trace_STAR__orig_val__12156,_STAR_current_trace_STAR__temp_val__12157){
return (function (){
return cljs.core.deref.call(null,cljs.core.deref.call(null,sub));
});})(dyn_vals,sub,query_id,handler_fn,temp__5718__auto__,_STAR_current_trace_STAR__orig_val__12156,_STAR_current_trace_STAR__temp_val__12157))
));
}
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__11421__auto___12172 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop.now.call(null);
var duration__11422__auto___12173 = (end__11421__auto___12172 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__11422__auto___12173,new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop.now.call(null)));

day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__11421__auto___12172);
} else {
}
}}finally {day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__12156;
}} else {
var temp__5718__auto__ = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.subs.cache_lookup.call(null,query,dynv);
if(cljs.core.truth_(temp__5718__auto__)){
var cached = temp__5718__auto__;
if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__11423__auto___12174 = cljs.core.merge.call(null,cljs.core.update.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_ = new_trace__11423__auto___12174;

} else {
}

return cached;
} else {
var query_id = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.utils.first_in_vector.call(null,query);
var handler_fn = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.registrar.get_handler.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.subs.kind,query_id);
if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__11423__auto___12175 = cljs.core.merge.call(null,cljs.core.update.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_ = new_trace__11423__auto___12175;

} else {
}

if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop.debug_enabled_QMARK_){
var temp__5720__auto___12176 = cljs.core.not_empty.call(null,cljs.core.remove.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop.ratom_QMARK_,dynv));
if(cljs.core.truth_(temp__5720__auto___12176)){
var not_reactive_12177 = temp__5720__auto___12176;
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: your subscription's dynamic parameters that don't implement IReactiveAtom:",not_reactive_12177);
} else {
}
} else {
}

if((handler_fn == null)){
if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__11423__auto___12178 = cljs.core.merge.call(null,cljs.core.update.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_ = new_trace__11423__auto___12178;

} else {
}

return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["re-frame: no subscription handler registered for: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),". Returning a nil subscription."].join(''));
} else {
var dyn_vals = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop.make_reaction.call(null,((function (query_id,handler_fn,temp__5718__auto__){
return (function (){
return cljs.core.mapv.call(null,cljs.core.deref,dynv);
});})(query_id,handler_fn,temp__5718__auto__))
);
var sub = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop.make_reaction.call(null,((function (dyn_vals,query_id,handler_fn,temp__5718__auto__){
return (function (){
return handler_fn.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.db.app_db,query,cljs.core.deref.call(null,dyn_vals));
});})(dyn_vals,query_id,handler_fn,temp__5718__auto__))
);
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.subs.cache_and_return.call(null,query,dynv,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop.make_reaction.call(null,((function (dyn_vals,sub,query_id,handler_fn,temp__5718__auto__){
return (function (){
return cljs.core.deref.call(null,cljs.core.deref.call(null,sub));
});})(dyn_vals,sub,query_id,handler_fn,temp__5718__auto__))
));
}
}
}
});

day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.subs.subscribe.cljs$lang$maxFixedArity = 2;

/**
 * Returns a new version of 'm' in which 'f' has been applied to each value.
 *   (map-vals inc {:a 4, :b 2}) => {:a 5, :b 3}
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.subs.map_vals = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$subs$map_vals(f,m){
return cljs.core.into.call(null,cljs.core.empty.call(null,m),cljs.core.map.call(null,(function (p__12179){
var vec__12180 = p__12179;
var k = cljs.core.nth.call(null,vec__12180,(0),null);
var v = cljs.core.nth.call(null,vec__12180,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,v)], null);
})),m);
});
/**
 * Runs f over signals. Signals may take several
 *   forms, this function handles all of them.
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.subs.map_signals = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$subs$map_signals(f,signals){
if(cljs.core.sequential_QMARK_.call(null,signals)){
return cljs.core.map.call(null,f,signals);
} else {
if(cljs.core.map_QMARK_.call(null,signals)){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.subs.map_vals.call(null,f,signals);
} else {
if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop.deref_QMARK_.call(null,signals)){
return f.call(null,signals);
} else {
return cljs.core.List.EMPTY;

}
}
}
});
/**
 * Coerces x to a seq if it isn't one already
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.subs.to_seq = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$subs$to_seq(x){
if(cljs.core.sequential_QMARK_.call(null,x)){
return x;
} else {
return (new cljs.core.List(null,x,null,(1),null));
}
});
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.subs.deref_input_signals = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$subs$deref_input_signals(signals,query_id){
var dereffed_signals = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.subs.map_signals.call(null,cljs.core.deref,signals);
if(cljs.core.sequential_QMARK_.call(null,signals)){
cljs.core.map.call(null,cljs.core.deref,signals);
} else {
if(cljs.core.map_QMARK_.call(null,signals)){
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.subs.map_vals.call(null,cljs.core.deref,signals);
} else {
if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop.deref_QMARK_.call(null,signals)){
cljs.core.deref.call(null,signals);
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: in the reg-sub for",query_id,", the input-signals function returns:",signals);

}
}
}

if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__11423__auto___12183 = cljs.core.merge.call(null,cljs.core.update.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input-signals","input-signals",563633497),cljs.core.doall.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.subs.to_seq.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.subs.map_signals.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop.reagent_id,signals)))], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input-signals","input-signals",563633497),cljs.core.doall.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.subs.to_seq.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.subs.map_signals.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop.reagent_id,signals)))], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_ = new_trace__11423__auto___12183;

} else {
}

return dereffed_signals;
});
/**
 * For a given `query-id`, register two functions: a `computation` function and an `input signals` function.
 *   
 *   During program execution, a call to `subscribe`, such as `(subscribe [:sub-id 3 "blue"])`,
 *   will create a new `:sub-id` node in the Signal Graph. And, at that time, re-frame
 *   needs to know how to create the node.   By calling `reg-sub`, you are registering 
 *   'the template' or 'the mechanism' by which nodes in the Signal Graph can be created. 
 * 
 *   Repeating: calling `reg-sub` does not create a node. It only creates the template
 *   from which nodes can be created later. 
 *   
 *   `reg-sub` arguments are:  
 *  - a `query-id` (typically a namespaced keyword)
 *  - a function which returns the inputs required by this kind of node (can be supplied  in one of three ways) 
 *  - a function which computes the value of this kind of node 
 * 
 *   The `computation function` is always the last argument supplied and it is expected to have the signature: 
 *  `(input-values, query-vector) -> a-value`
 *   
 *   When `computation function` is called, the `query-vector` argument will be the vector supplied to the 
 *   the `subscribe` which caused the node to be created. So, if the call was `(subscribe [:sub-id 3 "blue"])`, 
 *   then the `query-vector` supplied to the computaton function will be `[:sub-id 3 "blue"]`.
 * 
 *   The arguments supplied between the `query-id` and the `computation-function` can vary in 3 ways, 
 *   but whatever is there defines the `input signals` part of the template, controlling what input 
 *  values "flow into" the `computation function` gets when it is called. 
 * 
 *   `reg-sub` can be called in one of three ways, because there are three ways to define the input signals part.
 *   But note, the 2nd method, in which a `signal-fn` is explicitly supplied, is the most canonical and instructive. The other 
 *   two are really just sugary variations. 
 * 
 *   1. No input signals given:
 *    ```clj
 *   (reg-sub
 *     :query-id
 *     a-computation-fn)   ;; has signature:  (fn [db query-vec]  ... ret-value)
 *   ```
 * 
 *   In the absence of an explicit `input-fn`, the node's input signal defaults to `app-db`
 *   and, as a result, the value within `app-db` (a map) is
 *   is given as the 1st argument when `a-computation-fn` is called.   
 *  
 * 
 *   2. A signal function is explicitly supplied:
 *   ```clj
 *   (reg-sub
 *     :query-id
 *     signal-fn     ;; <-- here
 *     computation-fn)
 *   ```
 *   
 *   This is the most canonical and instructive of the three variations.
 *   
 *   When a node is created from the template, the `signal-fn` will be called and it
 *   is expected to return the input signal(s) as either a singleton, if there is only
 *   one, or a sequence if there are many, or a map with the signals as the values.
 * 
 *   The values from returned nominated signals will be supplied as the 1st argument to  
 *   the `a-computation-fn` when it is called - and subject to what this `signal-fn` returns, 
 *   this value will be either a singleton, sequence or map of them (paralleling
 *   the structure returned by the `signal-fn`).
 * 
 *   This example `signal-fn` returns a vector of input signals.
 *     ```clj
 *     (fn [query-vec dynamic-vec]
 *       [(subscribe [:a-sub])
 *        (subscribe [:b-sub])])
 *     ```
 *   The associated computation function must be written
 *   to expect a vector of values for its first argument:
 *     ```clj
 *     (fn [[a b] query-vec]     ;; 1st argument is a seq of two values
 *       ....)
 *      ```
 * 
 *   If, on the other hand, the signal function was simpler and returned a singleton, like this:
 *      ```clj
 *      (fn [query-vec dynamic-vec]
 *        (subscribe [:a-sub]))
 *      ```
 *   then the associated computation function must be written to expect a single value
 *   as the 1st argument:
 *      ```clj
 *      (fn [a query-vec]       ;; 1st argument is a single value
 *        ...)
 *      ```
 *  
 *   Further Note: variation #1 above, in which an `input-fn` was not supplied, like this:
 *     ```clj
 *   (reg-sub
 *     :query-id
 *     a-computation-fn)   ;; has signature:  (fn [db query-vec]  ... ret-value)
 *   ```
 *   is the equivalent of using this
 *   2nd variation and explicitly suppling a `signal-fn` which returns `app-db`:
 *   ```clj
 *   (reg-sub
 *     :query-id
 *     (fn [_ _]  re-frame/app-db)   ;; <--- explicit input-fn 
 *     a-computation-fn)             ;; has signature:  (fn [db query-vec]  ... ret-value)
 *   ```
 *  
 *   3. Syntax Sugar
 * 
 *   ```clj
 *   (reg-sub
 *     :a-b-sub
 *     :<- [:a-sub]
 *     :<- [:b-sub]
 *     (fn [[a b] query-vec]    ;; 1st argument is a seq of two values
 *       {:a a :b b}))
 *   ```
 * 
 *   This 3rd variation is just syntactic sugar for the 2nd.  Instead of providing an
 *   `signals-fn` you provide one or more pairs of `:<-` and a subscription vector.
 * 
 *   If you supply only one pair a singleton will be supplied to the computation function, 
 *   as if you had supplied a `signal-fn` returning only a single value:
 * 
 *   ```clj
 *   (reg-sub
 *     :a-sub
 *     :<- [:a-sub]
 *     (fn [a query-vec]      ;; only one pair, so 1st argument is a single value
 *       ...))
 *   ```
 * 
 *   For further understanding, read `/docs`, and look at the detailed comments in
 *   /examples/todomvc/src/subs.cljs
 *   
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.subs.reg_sub = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$subs$reg_sub(var_args){
var args__4736__auto__ = [];
var len__4730__auto___12194 = arguments.length;
var i__4731__auto___12195 = (0);
while(true){
if((i__4731__auto___12195 < len__4730__auto___12194)){
args__4736__auto__.push((arguments[i__4731__auto___12195]));

var G__12196 = (i__4731__auto___12195 + (1));
i__4731__auto___12195 = G__12196;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic = (function (query_id,args){
var computation_fn = cljs.core.last.call(null,args);
var input_args = cljs.core.butlast.call(null,args);
var err_header = ["re-frame: reg-sub for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),", "].join('');
var inputs_fn = (function (){var G__12186 = cljs.core.count.call(null,input_args);
switch (G__12186) {
case (0):
return ((function (G__12186,computation_fn,input_args,err_header){
return (function() {
var G__12198 = null;
var G__12198__1 = (function (_){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.db.app_db;
});
var G__12198__2 = (function (_,___$1){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.db.app_db;
});
G__12198 = function(_,___$1){
switch(arguments.length){
case 1:
return G__12198__1.call(this,_);
case 2:
return G__12198__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12198.cljs$core$IFn$_invoke$arity$1 = G__12198__1;
G__12198.cljs$core$IFn$_invoke$arity$2 = G__12198__2;
return G__12198;
})()
;})(G__12186,computation_fn,input_args,err_header))

break;
case (1):
var f = cljs.core.first.call(null,input_args);
if(cljs.core.fn_QMARK_.call(null,f)){
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),err_header,"2nd argument expected to be an inputs function, got:",f);
}

return f;

break;
case (2):
var vec__12187 = input_args;
var marker = cljs.core.nth.call(null,vec__12187,(0),null);
var vec = cljs.core.nth.call(null,vec__12187,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"<-","<-",760412998),marker)){
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),err_header,"expected :<-, got:",marker);
}

return ((function (vec__12187,marker,vec,G__12186,computation_fn,input_args,err_header){
return (function() {
var day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$subs$inp_fn = null;
var day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$subs$inp_fn__1 = (function (_){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.subs.subscribe.call(null,vec);
});
var day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$subs$inp_fn__2 = (function (_,___$1){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.subs.subscribe.call(null,vec);
});
day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$subs$inp_fn = function(_,___$1){
switch(arguments.length){
case 1:
return day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$subs$inp_fn__1.call(this,_);
case 2:
return day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$subs$inp_fn__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$1 = day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$subs$inp_fn__1;
day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$2 = day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$subs$inp_fn__2;
return day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$subs$inp_fn;
})()
;})(vec__12187,marker,vec,G__12186,computation_fn,input_args,err_header))

break;
default:
var pairs = cljs.core.partition.call(null,(2),input_args);
var markers = cljs.core.map.call(null,cljs.core.first,pairs);
var vecs = cljs.core.map.call(null,cljs.core.last,pairs);
if(((cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"<-","<-",760412998),null], null), null),markers)) && (cljs.core.every_QMARK_.call(null,cljs.core.vector_QMARK_,vecs)))){
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),err_header,"expected pairs of :<- and vectors, got:",pairs);
}

return ((function (pairs,markers,vecs,G__12186,computation_fn,input_args,err_header){
return (function() {
var day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$subs$inp_fn = null;
var day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$subs$inp_fn__1 = (function (_){
return cljs.core.map.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.subs.subscribe,vecs);
});
var day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$subs$inp_fn__2 = (function (_,___$1){
return cljs.core.map.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.subs.subscribe,vecs);
});
day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$subs$inp_fn = function(_,___$1){
switch(arguments.length){
case 1:
return day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$subs$inp_fn__1.call(this,_);
case 2:
return day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$subs$inp_fn__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$1 = day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$subs$inp_fn__1;
day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$2 = day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$subs$inp_fn__2;
return day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$subs$inp_fn;
})()
;})(pairs,markers,vecs,G__12186,computation_fn,input_args,err_header))

}
})();
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.registrar.register_handler.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.subs.kind,query_id,((function (computation_fn,input_args,err_header,inputs_fn){
return (function() {
var day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$subs$subs_handler_fn = null;
var day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$subs$subs_handler_fn__2 = (function (db,query_vec){
var subscriptions = inputs_fn.call(null,query_vec);
var reaction_id = cljs.core.atom.call(null,null);
var reaction = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop.make_reaction.call(null,((function (subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn){
return (function (){
if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR__orig_val__12190 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__12191 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.utils.first_in_vector.call(null,query_vec),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","run","sub/run",-1821315581),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_vec,new cljs.core.Keyword(null,"reaction","reaction",490869788),cljs.core.deref.call(null,reaction_id)], null)], null));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__12191;

try{try{var subscription = computation_fn.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec);
if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__11423__auto___12199 = cljs.core.merge.call(null,cljs.core.update.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_ = new_trace__11423__auto___12199;

} else {
}

return subscription;
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__11421__auto___12200 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop.now.call(null);
var duration__11422__auto___12201 = (end__11421__auto___12200 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__11422__auto___12201,new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop.now.call(null)));

day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__11421__auto___12200);
} else {
}
}}finally {day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__12190;
}} else {
var subscription = computation_fn.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec);
if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__11423__auto___12202 = cljs.core.merge.call(null,cljs.core.update.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_ = new_trace__11423__auto___12202;

} else {
}

return subscription;
}
});})(subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn))
);
cljs.core.reset_BANG_.call(null,reaction_id,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop.reagent_id.call(null,reaction));

return reaction;
});
var day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$subs$subs_handler_fn__3 = (function (db,query_vec,dyn_vec){
var subscriptions = inputs_fn.call(null,query_vec,dyn_vec);
var reaction_id = cljs.core.atom.call(null,null);
var reaction = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop.make_reaction.call(null,((function (subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn){
return (function (){
if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR__orig_val__12192 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__12193 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.utils.first_in_vector.call(null,query_vec),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","run","sub/run",-1821315581),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_vec,new cljs.core.Keyword(null,"dyn-v","dyn-v",949994592),dyn_vec,new cljs.core.Keyword(null,"reaction","reaction",490869788),cljs.core.deref.call(null,reaction_id)], null)], null));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__12193;

try{try{var subscription = computation_fn.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec,dyn_vec);
if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__11423__auto___12203 = cljs.core.merge.call(null,cljs.core.update.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_ = new_trace__11423__auto___12203;

} else {
}

return subscription;
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__11421__auto___12204 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop.now.call(null);
var duration__11422__auto___12205 = (end__11421__auto___12204 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__11422__auto___12205,new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop.now.call(null)));

day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__11421__auto___12204);
} else {
}
}}finally {day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__12192;
}} else {
var subscription = computation_fn.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec,dyn_vec);
if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__11423__auto___12206 = cljs.core.merge.call(null,cljs.core.update.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_ = new_trace__11423__auto___12206;

} else {
}

return subscription;
}
});})(subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn))
);
cljs.core.reset_BANG_.call(null,reaction_id,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop.reagent_id.call(null,reaction));

return reaction;
});
day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$subs$subs_handler_fn = function(db,query_vec,dyn_vec){
switch(arguments.length){
case 2:
return day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$subs$subs_handler_fn__2.call(this,db,query_vec);
case 3:
return day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$subs$subs_handler_fn__3.call(this,db,query_vec,dyn_vec);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$subs$subs_handler_fn.cljs$core$IFn$_invoke$arity$2 = day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$subs$subs_handler_fn__2;
day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$subs$subs_handler_fn.cljs$core$IFn$_invoke$arity$3 = day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$subs$subs_handler_fn__3;
return day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$subs$subs_handler_fn;
})()
;})(computation_fn,input_args,err_header,inputs_fn))
);
});

day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.subs.reg_sub.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.subs.reg_sub.cljs$lang$applyTo = (function (seq12184){
var G__12185 = cljs.core.first.call(null,seq12184);
var seq12184__$1 = cljs.core.next.call(null,seq12184);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12185,seq12184__$1);
});


//# sourceMappingURL=subs.js.map
