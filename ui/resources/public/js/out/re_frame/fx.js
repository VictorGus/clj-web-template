// Compiled by ClojureScript 1.10.520 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR__orig_val__19092 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__19093 = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__19093;

try{try{var seq__19094 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__19095 = null;
var count__19096 = (0);
var i__19097 = (0);
while(true){
if((i__19097 < count__19096)){
var vec__19104 = cljs.core._nth.call(null,chunk__19095,i__19097);
var effect_key = cljs.core.nth.call(null,vec__19104,(0),null);
var effect_value = cljs.core.nth.call(null,vec__19104,(1),null);
var temp__5718__auto___19126 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___19126)){
var effect_fn_19127 = temp__5718__auto___19126;
effect_fn_19127.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__19128 = seq__19094;
var G__19129 = chunk__19095;
var G__19130 = count__19096;
var G__19131 = (i__19097 + (1));
seq__19094 = G__19128;
chunk__19095 = G__19129;
count__19096 = G__19130;
i__19097 = G__19131;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__19094);
if(temp__5720__auto__){
var seq__19094__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19094__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__19094__$1);
var G__19132 = cljs.core.chunk_rest.call(null,seq__19094__$1);
var G__19133 = c__4550__auto__;
var G__19134 = cljs.core.count.call(null,c__4550__auto__);
var G__19135 = (0);
seq__19094 = G__19132;
chunk__19095 = G__19133;
count__19096 = G__19134;
i__19097 = G__19135;
continue;
} else {
var vec__19107 = cljs.core.first.call(null,seq__19094__$1);
var effect_key = cljs.core.nth.call(null,vec__19107,(0),null);
var effect_value = cljs.core.nth.call(null,vec__19107,(1),null);
var temp__5718__auto___19136 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___19136)){
var effect_fn_19137 = temp__5718__auto___19136;
effect_fn_19137.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__19138 = cljs.core.next.call(null,seq__19094__$1);
var G__19139 = null;
var G__19140 = (0);
var G__19141 = (0);
seq__19094 = G__19138;
chunk__19095 = G__19139;
count__19096 = G__19140;
i__19097 = G__19141;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__18632__auto___19142 = re_frame.interop.now.call(null);
var duration__18633__auto___19143 = (end__18632__auto___19142 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__18633__auto___19143,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__18632__auto___19142);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__19092;
}} else {
var seq__19110 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__19111 = null;
var count__19112 = (0);
var i__19113 = (0);
while(true){
if((i__19113 < count__19112)){
var vec__19120 = cljs.core._nth.call(null,chunk__19111,i__19113);
var effect_key = cljs.core.nth.call(null,vec__19120,(0),null);
var effect_value = cljs.core.nth.call(null,vec__19120,(1),null);
var temp__5718__auto___19144 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___19144)){
var effect_fn_19145 = temp__5718__auto___19144;
effect_fn_19145.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__19146 = seq__19110;
var G__19147 = chunk__19111;
var G__19148 = count__19112;
var G__19149 = (i__19113 + (1));
seq__19110 = G__19146;
chunk__19111 = G__19147;
count__19112 = G__19148;
i__19113 = G__19149;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__19110);
if(temp__5720__auto__){
var seq__19110__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19110__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__19110__$1);
var G__19150 = cljs.core.chunk_rest.call(null,seq__19110__$1);
var G__19151 = c__4550__auto__;
var G__19152 = cljs.core.count.call(null,c__4550__auto__);
var G__19153 = (0);
seq__19110 = G__19150;
chunk__19111 = G__19151;
count__19112 = G__19152;
i__19113 = G__19153;
continue;
} else {
var vec__19123 = cljs.core.first.call(null,seq__19110__$1);
var effect_key = cljs.core.nth.call(null,vec__19123,(0),null);
var effect_value = cljs.core.nth.call(null,vec__19123,(1),null);
var temp__5718__auto___19154 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___19154)){
var effect_fn_19155 = temp__5718__auto___19154;
effect_fn_19155.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__19156 = cljs.core.next.call(null,seq__19110__$1);
var G__19157 = null;
var G__19158 = (0);
var G__19159 = (0);
seq__19110 = G__19156;
chunk__19111 = G__19157;
count__19112 = G__19158;
i__19113 = G__19159;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__19160 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__19161 = null;
var count__19162 = (0);
var i__19163 = (0);
while(true){
if((i__19163 < count__19162)){
var map__19168 = cljs.core._nth.call(null,chunk__19161,i__19163);
var map__19168__$1 = (((((!((map__19168 == null))))?(((((map__19168.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19168.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19168):map__19168);
var effect = map__19168__$1;
var ms = cljs.core.get.call(null,map__19168__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__19168__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__19160,chunk__19161,count__19162,i__19163,map__19168,map__19168__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__19160,chunk__19161,count__19162,i__19163,map__19168,map__19168__$1,effect,ms,dispatch))
,ms);
}


var G__19172 = seq__19160;
var G__19173 = chunk__19161;
var G__19174 = count__19162;
var G__19175 = (i__19163 + (1));
seq__19160 = G__19172;
chunk__19161 = G__19173;
count__19162 = G__19174;
i__19163 = G__19175;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__19160);
if(temp__5720__auto__){
var seq__19160__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19160__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__19160__$1);
var G__19176 = cljs.core.chunk_rest.call(null,seq__19160__$1);
var G__19177 = c__4550__auto__;
var G__19178 = cljs.core.count.call(null,c__4550__auto__);
var G__19179 = (0);
seq__19160 = G__19176;
chunk__19161 = G__19177;
count__19162 = G__19178;
i__19163 = G__19179;
continue;
} else {
var map__19170 = cljs.core.first.call(null,seq__19160__$1);
var map__19170__$1 = (((((!((map__19170 == null))))?(((((map__19170.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19170.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19170):map__19170);
var effect = map__19170__$1;
var ms = cljs.core.get.call(null,map__19170__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__19170__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__19160,chunk__19161,count__19162,i__19163,map__19170,map__19170__$1,effect,ms,dispatch,seq__19160__$1,temp__5720__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__19160,chunk__19161,count__19162,i__19163,map__19170,map__19170__$1,effect,ms,dispatch,seq__19160__$1,temp__5720__auto__))
,ms);
}


var G__19180 = cljs.core.next.call(null,seq__19160__$1);
var G__19181 = null;
var G__19182 = (0);
var G__19183 = (0);
seq__19160 = G__19180;
chunk__19161 = G__19181;
count__19162 = G__19182;
i__19163 = G__19183;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value);
} else {
var seq__19184 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__19185 = null;
var count__19186 = (0);
var i__19187 = (0);
while(true){
if((i__19187 < count__19186)){
var event = cljs.core._nth.call(null,chunk__19185,i__19187);
re_frame.router.dispatch.call(null,event);


var G__19188 = seq__19184;
var G__19189 = chunk__19185;
var G__19190 = count__19186;
var G__19191 = (i__19187 + (1));
seq__19184 = G__19188;
chunk__19185 = G__19189;
count__19186 = G__19190;
i__19187 = G__19191;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__19184);
if(temp__5720__auto__){
var seq__19184__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19184__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__19184__$1);
var G__19192 = cljs.core.chunk_rest.call(null,seq__19184__$1);
var G__19193 = c__4550__auto__;
var G__19194 = cljs.core.count.call(null,c__4550__auto__);
var G__19195 = (0);
seq__19184 = G__19192;
chunk__19185 = G__19193;
count__19186 = G__19194;
i__19187 = G__19195;
continue;
} else {
var event = cljs.core.first.call(null,seq__19184__$1);
re_frame.router.dispatch.call(null,event);


var G__19196 = cljs.core.next.call(null,seq__19184__$1);
var G__19197 = null;
var G__19198 = (0);
var G__19199 = (0);
seq__19184 = G__19196;
chunk__19185 = G__19197;
count__19186 = G__19198;
i__19187 = G__19199;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__19200 = cljs.core.seq.call(null,value);
var chunk__19201 = null;
var count__19202 = (0);
var i__19203 = (0);
while(true){
if((i__19203 < count__19202)){
var event = cljs.core._nth.call(null,chunk__19201,i__19203);
clear_event.call(null,event);


var G__19204 = seq__19200;
var G__19205 = chunk__19201;
var G__19206 = count__19202;
var G__19207 = (i__19203 + (1));
seq__19200 = G__19204;
chunk__19201 = G__19205;
count__19202 = G__19206;
i__19203 = G__19207;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__19200);
if(temp__5720__auto__){
var seq__19200__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19200__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__19200__$1);
var G__19208 = cljs.core.chunk_rest.call(null,seq__19200__$1);
var G__19209 = c__4550__auto__;
var G__19210 = cljs.core.count.call(null,c__4550__auto__);
var G__19211 = (0);
seq__19200 = G__19208;
chunk__19201 = G__19209;
count__19202 = G__19210;
i__19203 = G__19211;
continue;
} else {
var event = cljs.core.first.call(null,seq__19200__$1);
clear_event.call(null,event);


var G__19212 = cljs.core.next.call(null,seq__19200__$1);
var G__19213 = null;
var G__19214 = (0);
var G__19215 = (0);
seq__19200 = G__19212;
chunk__19201 = G__19213;
count__19202 = G__19214;
i__19203 = G__19215;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref.call(null,re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map
