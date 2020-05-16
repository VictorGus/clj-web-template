// Compiled by ClojureScript 1.10.520 {}
goog.provide('app.styles');
goog.require('cljs.core');
goog.require('garden.core');
app.styles.style = (function app$styles$style(var_args){
var args__4736__auto__ = [];
var len__4730__auto___21241 = arguments.length;
var i__4731__auto___21242 = (0);
while(true){
if((i__4731__auto___21242 < len__4730__auto___21241)){
args__4736__auto__.push((arguments[i__4731__auto___21242]));

var G__21243 = (i__4731__auto___21242 + (1));
i__4731__auto___21242 = G__21243;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return app.styles.style.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

app.styles.style.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),garden.core.css.call(null,styles)], null);
});

app.styles.style.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
app.styles.style.cljs$lang$applyTo = (function (seq21240){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21240));
});


//# sourceMappingURL=styles.js.map
