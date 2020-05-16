// Compiled by ClojureScript 1.10.520 {}
goog.provide('day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug');
goog.require('cljs.core');
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug.has_console = (typeof console !== 'undefined');
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug.tracking = false;
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug.warnings !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug.track_console !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__15182__delegate = function (args){
return cljs.core.swap_BANG_.call(null,day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__15182 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15183__i = 0, G__15183__a = new Array(arguments.length -  0);
while (G__15183__i < G__15183__a.length) {G__15183__a[G__15183__i] = arguments[G__15183__i + 0]; ++G__15183__i;}
  args = new cljs.core.IndexedSeq(G__15183__a,0,null);
} 
return G__15182__delegate.call(this,args);};
G__15182.cljs$lang$maxFixedArity = 0;
G__15182.cljs$lang$applyTo = (function (arglist__15184){
var args = cljs.core.seq(arglist__15184);
return G__15182__delegate(args);
});
G__15182.cljs$core$IFn$_invoke$arity$variadic = G__15182__delegate;
return G__15182;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__15185__delegate = function (args){
return cljs.core.swap_BANG_.call(null,day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__15185 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15186__i = 0, G__15186__a = new Array(arguments.length -  0);
while (G__15186__i < G__15186__a.length) {G__15186__a[G__15186__i] = arguments[G__15186__i + 0]; ++G__15186__i;}
  args = new cljs.core.IndexedSeq(G__15186__a,0,null);
} 
return G__15185__delegate.call(this,args);};
G__15185.cljs$lang$maxFixedArity = 0;
G__15185.cljs$lang$applyTo = (function (arglist__15187){
var args = cljs.core.seq(arglist__15187);
return G__15185__delegate(args);
});
G__15185.cljs$core$IFn$_invoke$arity$variadic = G__15185__delegate;
return G__15185;
})()
;})(o))
;

return o;
})();
}
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug.track_warnings = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$debug$track_warnings(f){
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug.warnings,null);

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map
