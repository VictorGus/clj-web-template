// Compiled by ClojureScript 1.10.520 {}
goog.provide('ui.styles');
goog.require('cljs.core');
goog.require('garden.core');
ui.styles.style = (function ui$styles$style(var_args){
var args__4736__auto__ = [];
var len__4730__auto___18157 = arguments.length;
var i__4731__auto___18158 = (0);
while(true){
if((i__4731__auto___18158 < len__4730__auto___18157)){
args__4736__auto__.push((arguments[i__4731__auto___18158]));

var G__18159 = (i__4731__auto___18158 + (1));
i__4731__auto___18158 = G__18159;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return ui.styles.style.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

ui.styles.style.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),garden.core.css.call(null,styles)], null);
});

ui.styles.style.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
ui.styles.style.cljs$lang$applyTo = (function (seq18156){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18156));
});


//# sourceMappingURL=styles.js.map
