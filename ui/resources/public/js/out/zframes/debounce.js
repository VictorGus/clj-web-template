// Compiled by ClojureScript 1.10.520 {}
goog.provide('zframes.debounce');
goog.require('cljs.core');
goog.require('re_frame.core');
if((typeof zframes !== 'undefined') && (typeof zframes.debounce !== 'undefined') && (typeof zframes.debounce.debounce_events !== 'undefined')){
} else {
zframes.debounce.debounce_events = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
zframes.debounce.debounce = (function zframes$debounce$debounce(var_args){
var args__4736__auto__ = [];
var len__4730__auto___30924 = arguments.length;
var i__4731__auto___30925 = (0);
while(true){
if((i__4731__auto___30925 < len__4730__auto___30924)){
args__4736__auto__.push((arguments[i__4731__auto___30925]));

var G__30926 = (i__4731__auto___30925 + (1));
i__4731__auto___30925 = G__30926;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return zframes.debounce.debounce.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

zframes.debounce.debounce.cljs$core$IFn$_invoke$arity$variadic = (function (p__30920,ms){
var vec__30921 = p__30920;
var nm = cljs.core.nth.call(null,vec__30921,(0),null);
var ev = vec__30921;
var temp__5735__auto___30927 = cljs.core.get.call(null,cljs.core.deref.call(null,zframes.debounce.debounce_events),nm);
if(cljs.core.truth_(temp__5735__auto___30927)){
var h_30928 = temp__5735__auto___30927;
clearTimeout(h_30928);
} else {
}

return cljs.core.swap_BANG_.call(null,zframes.debounce.debounce_events,cljs.core.assoc,nm,setTimeout(((function (vec__30921,nm,ev){
return (function (){
return re_frame.core.dispatch.call(null,ev);
});})(vec__30921,nm,ev))
,(function (){var or__4131__auto__ = ms;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (400);
}
})()));
});

zframes.debounce.debounce.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
zframes.debounce.debounce.cljs$lang$applyTo = (function (seq30918){
var G__30919 = cljs.core.first.call(null,seq30918);
var seq30918__$1 = cljs.core.next.call(null,seq30918);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30919,seq30918__$1);
});


//# sourceMappingURL=debounce.js.map
