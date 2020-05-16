// Compiled by ClojureScript 1.10.520 {}
goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.router');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.db');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interceptor');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.events');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.registrar');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace');
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.registrar.kinds.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (day8.re-frame-10x.inlined-deps.re-frame.v0v10v9.re-frame.registrar/kinds kind)"));
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
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.reg_fx = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$fx$reg_fx(id,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.registrar.register_handler.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.kind,id,handler);
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
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.do_fx = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$fx$do_fx_after(context){
if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR__orig_val__11861 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__11862 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__11862;

try{try{var seq__11863 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__11864 = null;
var count__11865 = (0);
var i__11866 = (0);
while(true){
if((i__11866 < count__11865)){
var vec__11873 = cljs.core._nth.call(null,chunk__11864,i__11866);
var effect_key = cljs.core.nth.call(null,vec__11873,(0),null);
var effect_value = cljs.core.nth.call(null,vec__11873,(1),null);
var temp__5718__auto___11895 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.registrar.get_handler.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___11895)){
var effect_fn_11896 = temp__5718__auto___11895;
effect_fn_11896.call(null,effect_value);
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__11897 = seq__11863;
var G__11898 = chunk__11864;
var G__11899 = count__11865;
var G__11900 = (i__11866 + (1));
seq__11863 = G__11897;
chunk__11864 = G__11898;
count__11865 = G__11899;
i__11866 = G__11900;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__11863);
if(temp__5720__auto__){
var seq__11863__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11863__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__11863__$1);
var G__11901 = cljs.core.chunk_rest.call(null,seq__11863__$1);
var G__11902 = c__4550__auto__;
var G__11903 = cljs.core.count.call(null,c__4550__auto__);
var G__11904 = (0);
seq__11863 = G__11901;
chunk__11864 = G__11902;
count__11865 = G__11903;
i__11866 = G__11904;
continue;
} else {
var vec__11876 = cljs.core.first.call(null,seq__11863__$1);
var effect_key = cljs.core.nth.call(null,vec__11876,(0),null);
var effect_value = cljs.core.nth.call(null,vec__11876,(1),null);
var temp__5718__auto___11905 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.registrar.get_handler.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___11905)){
var effect_fn_11906 = temp__5718__auto___11905;
effect_fn_11906.call(null,effect_value);
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__11907 = cljs.core.next.call(null,seq__11863__$1);
var G__11908 = null;
var G__11909 = (0);
var G__11910 = (0);
seq__11863 = G__11907;
chunk__11864 = G__11908;
count__11865 = G__11909;
i__11866 = G__11910;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__11421__auto___11911 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop.now.call(null);
var duration__11422__auto___11912 = (end__11421__auto___11911 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__11422__auto___11912,new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop.now.call(null)));

day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__11421__auto___11911);
} else {
}
}}finally {day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__11861;
}} else {
var seq__11879 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__11880 = null;
var count__11881 = (0);
var i__11882 = (0);
while(true){
if((i__11882 < count__11881)){
var vec__11889 = cljs.core._nth.call(null,chunk__11880,i__11882);
var effect_key = cljs.core.nth.call(null,vec__11889,(0),null);
var effect_value = cljs.core.nth.call(null,vec__11889,(1),null);
var temp__5718__auto___11913 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.registrar.get_handler.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___11913)){
var effect_fn_11914 = temp__5718__auto___11913;
effect_fn_11914.call(null,effect_value);
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__11915 = seq__11879;
var G__11916 = chunk__11880;
var G__11917 = count__11881;
var G__11918 = (i__11882 + (1));
seq__11879 = G__11915;
chunk__11880 = G__11916;
count__11881 = G__11917;
i__11882 = G__11918;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__11879);
if(temp__5720__auto__){
var seq__11879__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11879__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__11879__$1);
var G__11919 = cljs.core.chunk_rest.call(null,seq__11879__$1);
var G__11920 = c__4550__auto__;
var G__11921 = cljs.core.count.call(null,c__4550__auto__);
var G__11922 = (0);
seq__11879 = G__11919;
chunk__11880 = G__11920;
count__11881 = G__11921;
i__11882 = G__11922;
continue;
} else {
var vec__11892 = cljs.core.first.call(null,seq__11879__$1);
var effect_key = cljs.core.nth.call(null,vec__11892,(0),null);
var effect_value = cljs.core.nth.call(null,vec__11892,(1),null);
var temp__5718__auto___11923 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.registrar.get_handler.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___11923)){
var effect_fn_11924 = temp__5718__auto___11923;
effect_fn_11924.call(null,effect_value);
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__11925 = cljs.core.next.call(null,seq__11879__$1);
var G__11926 = null;
var G__11927 = (0);
var G__11928 = (0);
seq__11879 = G__11925;
chunk__11880 = G__11926;
count__11881 = G__11927;
i__11882 = G__11928;
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
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__11929 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__11930 = null;
var count__11931 = (0);
var i__11932 = (0);
while(true){
if((i__11932 < count__11931)){
var map__11937 = cljs.core._nth.call(null,chunk__11930,i__11932);
var map__11937__$1 = (((((!((map__11937 == null))))?(((((map__11937.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11937.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11937):map__11937);
var effect = map__11937__$1;
var ms = cljs.core.get.call(null,map__11937__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__11937__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop.set_timeout_BANG_.call(null,((function (seq__11929,chunk__11930,count__11931,i__11932,map__11937,map__11937__$1,effect,ms,dispatch){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.router.dispatch.call(null,dispatch);
});})(seq__11929,chunk__11930,count__11931,i__11932,map__11937,map__11937__$1,effect,ms,dispatch))
,ms);
}


var G__11941 = seq__11929;
var G__11942 = chunk__11930;
var G__11943 = count__11931;
var G__11944 = (i__11932 + (1));
seq__11929 = G__11941;
chunk__11930 = G__11942;
count__11931 = G__11943;
i__11932 = G__11944;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__11929);
if(temp__5720__auto__){
var seq__11929__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11929__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__11929__$1);
var G__11945 = cljs.core.chunk_rest.call(null,seq__11929__$1);
var G__11946 = c__4550__auto__;
var G__11947 = cljs.core.count.call(null,c__4550__auto__);
var G__11948 = (0);
seq__11929 = G__11945;
chunk__11930 = G__11946;
count__11931 = G__11947;
i__11932 = G__11948;
continue;
} else {
var map__11939 = cljs.core.first.call(null,seq__11929__$1);
var map__11939__$1 = (((((!((map__11939 == null))))?(((((map__11939.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11939.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11939):map__11939);
var effect = map__11939__$1;
var ms = cljs.core.get.call(null,map__11939__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__11939__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop.set_timeout_BANG_.call(null,((function (seq__11929,chunk__11930,count__11931,i__11932,map__11939,map__11939__$1,effect,ms,dispatch,seq__11929__$1,temp__5720__auto__){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.router.dispatch.call(null,dispatch);
});})(seq__11929,chunk__11930,count__11931,i__11932,map__11939,map__11939__$1,effect,ms,dispatch,seq__11929__$1,temp__5720__auto__))
,ms);
}


var G__11949 = cljs.core.next.call(null,seq__11929__$1);
var G__11950 = null;
var G__11951 = (0);
var G__11952 = (0);
seq__11929 = G__11949;
chunk__11930 = G__11950;
count__11931 = G__11951;
i__11932 = G__11952;
continue;
}
} else {
return null;
}
}
break;
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_.call(null,value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.router.dispatch.call(null,value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_.call(null,value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value);
} else {
var seq__11953 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__11954 = null;
var count__11955 = (0);
var i__11956 = (0);
while(true){
if((i__11956 < count__11955)){
var event = cljs.core._nth.call(null,chunk__11954,i__11956);
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.router.dispatch.call(null,event);


var G__11957 = seq__11953;
var G__11958 = chunk__11954;
var G__11959 = count__11955;
var G__11960 = (i__11956 + (1));
seq__11953 = G__11957;
chunk__11954 = G__11958;
count__11955 = G__11959;
i__11956 = G__11960;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__11953);
if(temp__5720__auto__){
var seq__11953__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11953__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__11953__$1);
var G__11961 = cljs.core.chunk_rest.call(null,seq__11953__$1);
var G__11962 = c__4550__auto__;
var G__11963 = cljs.core.count.call(null,c__4550__auto__);
var G__11964 = (0);
seq__11953 = G__11961;
chunk__11954 = G__11962;
count__11955 = G__11963;
i__11956 = G__11964;
continue;
} else {
var event = cljs.core.first.call(null,seq__11953__$1);
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.router.dispatch.call(null,event);


var G__11965 = cljs.core.next.call(null,seq__11953__$1);
var G__11966 = null;
var G__11967 = (0);
var G__11968 = (0);
seq__11953 = G__11965;
chunk__11954 = G__11966;
count__11955 = G__11967;
i__11956 = G__11968;
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
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__11969 = cljs.core.seq.call(null,value);
var chunk__11970 = null;
var count__11971 = (0);
var i__11972 = (0);
while(true){
if((i__11972 < count__11971)){
var event = cljs.core._nth.call(null,chunk__11970,i__11972);
clear_event.call(null,event);


var G__11973 = seq__11969;
var G__11974 = chunk__11970;
var G__11975 = count__11971;
var G__11976 = (i__11972 + (1));
seq__11969 = G__11973;
chunk__11970 = G__11974;
count__11971 = G__11975;
i__11972 = G__11976;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__11969);
if(temp__5720__auto__){
var seq__11969__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11969__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__11969__$1);
var G__11977 = cljs.core.chunk_rest.call(null,seq__11969__$1);
var G__11978 = c__4550__auto__;
var G__11979 = cljs.core.count.call(null,c__4550__auto__);
var G__11980 = (0);
seq__11969 = G__11977;
chunk__11970 = G__11978;
count__11971 = G__11979;
i__11972 = G__11980;
continue;
} else {
var event = cljs.core.first.call(null,seq__11969__$1);
clear_event.call(null,event);


var G__11981 = cljs.core.next.call(null,seq__11969__$1);
var G__11982 = null;
var G__11983 = (0);
var G__11984 = (0);
seq__11969 = G__11981;
chunk__11970 = G__11982;
count__11971 = G__11983;
i__11972 = G__11984;
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
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map
