// Compiled by ClojureScript 1.10.520 {}
goog.provide('ui.zframes.debounce');
goog.require('cljs.core');
goog.require('re_frame.core');
if((typeof ui !== 'undefined') && (typeof ui.zframes !== 'undefined') && (typeof ui.zframes.debounce !== 'undefined') && (typeof ui.zframes.debounce.debounce_events !== 'undefined')){
} else {
ui.zframes.debounce.debounce_events = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
ui.zframes.debounce.debounce = (function ui$zframes$debounce$debounce(var_args){
var args__4736__auto__ = [];
var len__4730__auto___47149 = arguments.length;
var i__4731__auto___47150 = (0);
while(true){
if((i__4731__auto___47150 < len__4730__auto___47149)){
args__4736__auto__.push((arguments[i__4731__auto___47150]));

var G__47151 = (i__4731__auto___47150 + (1));
i__4731__auto___47150 = G__47151;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return ui.zframes.debounce.debounce.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

ui.zframes.debounce.debounce.cljs$core$IFn$_invoke$arity$variadic = (function (p__47145,ms){
var vec__47146 = p__47145;
var nm = cljs.core.nth.call(null,vec__47146,(0),null);
var ev = vec__47146;
var temp__5735__auto___47152 = cljs.core.get.call(null,cljs.core.deref.call(null,ui.zframes.debounce.debounce_events),nm);
if(cljs.core.truth_(temp__5735__auto___47152)){
var h_47153 = temp__5735__auto___47152;
clearTimeout(h_47153);
} else {
}

return cljs.core.swap_BANG_.call(null,ui.zframes.debounce.debounce_events,cljs.core.assoc,nm,setTimeout(((function (vec__47146,nm,ev){
return (function (){
return re_frame.core.dispatch.call(null,ev);
});})(vec__47146,nm,ev))
,(function (){var or__4131__auto__ = ms;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (400);
}
})()));
});

ui.zframes.debounce.debounce.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
ui.zframes.debounce.debounce.cljs$lang$applyTo = (function (seq47143){
var G__47144 = cljs.core.first.call(null,seq47143);
var seq47143__$1 = cljs.core.next.call(null,seq47143);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47144,seq47143__$1);
});


//# sourceMappingURL=debounce.js.map
