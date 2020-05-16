// Compiled by ClojureScript 1.10.520 {}
goog.provide('chrono.ops');
goog.require('cljs.core');
goog.require('chrono.util');
chrono.ops.gen_norm = (function chrono$ops$gen_norm(k,k_next,del,m){
return (function (x){
var temp__5733__auto__ = cljs.core.get.call(null,x,k);
if(cljs.core.truth_(temp__5733__auto__)){
var z = temp__5733__auto__;
var ds = cljs.core.quot.call(null,z,(m + del));
var s = (function (){var or__4131__auto__ = cljs.core.get.call(null,x,k_next);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return m;
}
})();
var r = (function (){var r = cljs.core.rem.call(null,z,(m + del));
var G__28059 = r;
if((r === (0))){
return ((G__28059 + m) + r);
} else {
return G__28059;
}
})();
if((z >= m)){
return cljs.core.assoc.call(null,x,k,r,k_next,(s + ds));
} else {
return cljs.core.assoc.call(null,x,k,((del + r) - m),k_next,((s + ds) + (-1)));
}
} else {
return x;
}
});
});
chrono.ops.normalize_ms = chrono.ops.gen_norm.call(null,new cljs.core.Keyword(null,"ms","ms",-1152709733),new cljs.core.Keyword(null,"sec","sec",-1580376553),(1000),(0));
chrono.ops.normalize_s = chrono.ops.gen_norm.call(null,new cljs.core.Keyword(null,"sec","sec",-1580376553),new cljs.core.Keyword(null,"min","min",444991522),(60),(0));
chrono.ops.normalize_mi = chrono.ops.gen_norm.call(null,new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"hour","hour",-555989214),(60),(0));
chrono.ops.normalize_h = chrono.ops.gen_norm.call(null,new cljs.core.Keyword(null,"hour","hour",-555989214),new cljs.core.Keyword(null,"day","day",-274800446),(24),(0));
chrono.ops.normalize_m = chrono.ops.gen_norm.call(null,new cljs.core.Keyword(null,"month","month",-1960248533),new cljs.core.Keyword(null,"year","year",335913393),(12),(1));
chrono.ops.days_and_months = (function chrono$ops$days_and_months(y,m,d){
if(((((1) <= d)) && ((d <= (27))))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,m,d], null);
} else {
if((d > (0))){
var num_days = chrono.util.days_in_month.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"year","year",335913393),y,new cljs.core.Keyword(null,"month","month",-1960248533),m], null));
var dd = (d - num_days);
if((d <= num_days)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,m,d], null);
} else {
if(cljs.core._EQ_.call(null,m,(12))){
return chrono.ops.days_and_months.call(null,(y + (1)),(1),dd);
} else {
return chrono.ops.days_and_months.call(null,y,(m + (1)),dd);
}
}
} else {
if((d <= (0))){
var vec__28060 = ((cljs.core._EQ_.call(null,m,(1)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [chrono.util.days_in_month.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"year","year",335913393),(y - (1)),new cljs.core.Keyword(null,"month","month",-1960248533),(12)], null)),(y - (1)),(12)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [chrono.util.days_in_month.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"year","year",335913393),y,new cljs.core.Keyword(null,"month","month",-1960248533),(m - (1))], null)),y,(m - (1))], null));
var num_days = cljs.core.nth.call(null,vec__28060,(0),null);
var ny = cljs.core.nth.call(null,vec__28060,(1),null);
var nm = cljs.core.nth.call(null,vec__28060,(2),null);
var dd = (num_days + d);
if(((0) < dd)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ny,nm,dd], null);
} else {
return chrono.ops.days_and_months.call(null,ny,nm,dd);
}
} else {
return null;
}
}
}
});
chrono.ops.normalize_d = (function chrono$ops$normalize_d(x){
if(cljs.core.truth_((function (){var and__4120__auto__ = new cljs.core.Keyword(null,"year","year",335913393).cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = new cljs.core.Keyword(null,"month","month",-1960248533).cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(and__4120__auto____$1)){
return new cljs.core.Keyword(null,"day","day",-274800446).cljs$core$IFn$_invoke$arity$1(x);
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())){
var vec__28063 = chrono.ops.days_and_months.call(null,new cljs.core.Keyword(null,"year","year",335913393).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"month","month",-1960248533).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"day","day",-274800446).cljs$core$IFn$_invoke$arity$1(x));
var y = cljs.core.nth.call(null,vec__28063,(0),null);
var m = cljs.core.nth.call(null,vec__28063,(1),null);
var d = cljs.core.nth.call(null,vec__28063,(2),null);
return cljs.core.assoc.call(null,x,new cljs.core.Keyword(null,"year","year",335913393),y,new cljs.core.Keyword(null,"month","month",-1960248533),m,new cljs.core.Keyword(null,"day","day",-274800446),d);
} else {
return x;
}
});
chrono.ops.normalize = (function chrono$ops$normalize(t){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,cljs.core.comp.call(null,cljs.core.zero_QMARK_,cljs.core.val),chrono.ops.normalize_d.call(null,chrono.ops.normalize_m.call(null,chrono.ops.normalize_h.call(null,chrono.ops.normalize_mi.call(null,chrono.ops.normalize_s.call(null,chrono.ops.normalize_ms.call(null,t))))))));
});
chrono.ops.defaults_units = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"year","year",335913393),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"month","month",-1960248533),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"day","day",-274800446),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hour","hour",-555989214),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sec","sec",-1580376553),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(0)], null)], null);
chrono.ops.after_QMARK_ = (function chrono$ops$after_QMARK_(t,t_SINGLEQUOTE_){
var G__28072 = chrono.ops.defaults_units;
var vec__28073 = G__28072;
var seq__28074 = cljs.core.seq.call(null,vec__28073);
var first__28075 = cljs.core.first.call(null,seq__28074);
var seq__28074__$1 = cljs.core.next.call(null,seq__28074);
var vec__28076 = first__28075;
var p = cljs.core.nth.call(null,vec__28076,(0),null);
var s = cljs.core.nth.call(null,vec__28076,(1),null);
var ps = seq__28074__$1;
var G__28072__$1 = G__28072;
while(true){
var vec__28085 = G__28072__$1;
var seq__28086 = cljs.core.seq.call(null,vec__28085);
var first__28087 = cljs.core.first.call(null,seq__28086);
var seq__28086__$1 = cljs.core.next.call(null,seq__28086);
var vec__28088 = first__28087;
var p__$1 = cljs.core.nth.call(null,vec__28088,(0),null);
var s__$1 = cljs.core.nth.call(null,vec__28088,(1),null);
var ps__$1 = seq__28086__$1;
var tp = cljs.core.get.call(null,t,p__$1,s__$1);
var tp_SINGLEQUOTE_ = cljs.core.get.call(null,t_SINGLEQUOTE_,p__$1,s__$1);
if((tp > tp_SINGLEQUOTE_)){
return true;
} else {
if(cljs.core._EQ_.call(null,tp,tp_SINGLEQUOTE_)){
var and__4120__auto__ = cljs.core.seq.call(null,ps__$1);
if(and__4120__auto__){
var G__28091 = ps__$1;
G__28072__$1 = G__28091;
continue;
} else {
return and__4120__auto__;
}
} else {
return false;

}
}
break;
}
});
chrono.ops.default_time = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"year","year",335913393),(0),new cljs.core.Keyword(null,"month","month",-1960248533),(1),new cljs.core.Keyword(null,"day","day",-274800446),(1),new cljs.core.Keyword(null,"hour","hour",-555989214),(0),new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"sec","sec",-1580376553),(0),new cljs.core.Keyword(null,"ms","ms",-1152709733),(0)], null);
chrono.ops.init_plus = (function chrono$ops$init_plus(r,i){
return cljs.core.reduce.call(null,(function (acc,k){
return cljs.core.assoc.call(null,acc,k,(cljs.core.get.call(null,r,k,(0)) + cljs.core.get.call(null,i,k,(0))));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.concat.call(null,cljs.core.keys.call(null,cljs.core.dissoc.call(null,r,new cljs.core.Keyword(null,"tz","tz",278339241))),cljs.core.keys.call(null,i))));
});
chrono.ops.plus = (function chrono$ops$plus(var_args){
var G__28096 = arguments.length;
switch (G__28096) {
case 0:
return chrono.ops.plus.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return chrono.ops.plus.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return chrono.ops.plus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___28098 = arguments.length;
var i__4731__auto___28099 = (0);
while(true){
if((i__4731__auto___28099 < len__4730__auto___28098)){
args_arr__4751__auto__.push((arguments[i__4731__auto___28099]));

var G__28100 = (i__4731__auto___28099 + (1));
i__4731__auto___28099 = G__28100;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((2)),(0),null));
return chrono.ops.plus.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4752__auto__);

}
});

chrono.ops.plus.cljs$core$IFn$_invoke$arity$0 = (function (){
return chrono.ops.default_time;
});

chrono.ops.plus.cljs$core$IFn$_invoke$arity$1 = (function (x){
return x;
});

chrono.ops.plus.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return chrono.ops.normalize.call(null,chrono.ops.init_plus.call(null,x,y));
});

chrono.ops.plus.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
return cljs.core.reduce.call(null,chrono.ops.plus,chrono.ops.plus.call(null,x,y),more);
});

/** @this {Function} */
chrono.ops.plus.cljs$lang$applyTo = (function (seq28093){
var G__28094 = cljs.core.first.call(null,seq28093);
var seq28093__$1 = cljs.core.next.call(null,seq28093);
var G__28095 = cljs.core.first.call(null,seq28093__$1);
var seq28093__$2 = cljs.core.next.call(null,seq28093__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28094,G__28095,seq28093__$2);
});

chrono.ops.plus.cljs$lang$maxFixedArity = (2);

chrono.ops.eq_QMARK_ = (function chrono$ops$eq_QMARK_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___28102 = arguments.length;
var i__4731__auto___28103 = (0);
while(true){
if((i__4731__auto___28103 < len__4730__auto___28102)){
args__4736__auto__.push((arguments[i__4731__auto___28103]));

var G__28104 = (i__4731__auto___28103 + (1));
i__4731__auto___28103 = G__28104;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return chrono.ops.eq_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

chrono.ops.eq_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (ts){
return cljs.core.apply.call(null,cljs.core._EQ_,cljs.core.map.call(null,chrono.ops.normalize,ts));
});

chrono.ops.eq_QMARK_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
chrono.ops.eq_QMARK_.cljs$lang$applyTo = (function (seq28101){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28101));
});

chrono.ops.not_eq_QMARK_ = cljs.core.complement.call(null,chrono.ops.eq_QMARK_);
chrono.ops.gt = (function chrono$ops$gt(var_args){
var G__28109 = arguments.length;
switch (G__28109) {
case 1:
return chrono.ops.gt.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return chrono.ops.gt.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___28111 = arguments.length;
var i__4731__auto___28112 = (0);
while(true){
if((i__4731__auto___28112 < len__4730__auto___28111)){
args_arr__4751__auto__.push((arguments[i__4731__auto___28112]));

var G__28113 = (i__4731__auto___28112 + (1));
i__4731__auto___28112 = G__28113;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((2)),(0),null));
return chrono.ops.gt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4752__auto__);

}
});

chrono.ops.gt.cljs$core$IFn$_invoke$arity$1 = (function (_){
return true;
});

chrono.ops.gt.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return chrono.ops.after_QMARK_.call(null,x,y);
});

chrono.ops.gt.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
while(true){
if(chrono.ops.gt.call(null,x,y)){
if(cljs.core.next.call(null,more)){
var G__28114 = y;
var G__28115 = cljs.core.first.call(null,more);
var G__28116 = cljs.core.next.call(null,more);
x = G__28114;
y = G__28115;
more = G__28116;
continue;
} else {
return chrono.ops.gt.call(null,y,cljs.core.first.call(null,more));
}
} else {
return false;
}
break;
}
});

/** @this {Function} */
chrono.ops.gt.cljs$lang$applyTo = (function (seq28106){
var G__28107 = cljs.core.first.call(null,seq28106);
var seq28106__$1 = cljs.core.next.call(null,seq28106);
var G__28108 = cljs.core.first.call(null,seq28106__$1);
var seq28106__$2 = cljs.core.next.call(null,seq28106__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28107,G__28108,seq28106__$2);
});

chrono.ops.gt.cljs$lang$maxFixedArity = (2);

chrono.ops.gte = (function chrono$ops$gte(var_args){
var G__28121 = arguments.length;
switch (G__28121) {
case 1:
return chrono.ops.gte.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return chrono.ops.gte.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___28123 = arguments.length;
var i__4731__auto___28124 = (0);
while(true){
if((i__4731__auto___28124 < len__4730__auto___28123)){
args_arr__4751__auto__.push((arguments[i__4731__auto___28124]));

var G__28125 = (i__4731__auto___28124 + (1));
i__4731__auto___28124 = G__28125;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((2)),(0),null));
return chrono.ops.gte.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4752__auto__);

}
});

chrono.ops.gte.cljs$core$IFn$_invoke$arity$1 = (function (_){
return true;
});

chrono.ops.gte.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
var or__4131__auto__ = chrono.ops.gt.call(null,x,y);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return chrono.ops.eq_QMARK_.call(null,x,y);
}
});

chrono.ops.gte.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
while(true){
if(cljs.core.truth_(chrono.ops.gte.call(null,x,y))){
if(cljs.core.next.call(null,more)){
var G__28126 = y;
var G__28127 = cljs.core.first.call(null,more);
var G__28128 = cljs.core.next.call(null,more);
x = G__28126;
y = G__28127;
more = G__28128;
continue;
} else {
return chrono.ops.gte.call(null,y,cljs.core.first.call(null,more));
}
} else {
return false;
}
break;
}
});

/** @this {Function} */
chrono.ops.gte.cljs$lang$applyTo = (function (seq28118){
var G__28119 = cljs.core.first.call(null,seq28118);
var seq28118__$1 = cljs.core.next.call(null,seq28118);
var G__28120 = cljs.core.first.call(null,seq28118__$1);
var seq28118__$2 = cljs.core.next.call(null,seq28118__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28119,G__28120,seq28118__$2);
});

chrono.ops.gte.cljs$lang$maxFixedArity = (2);

chrono.ops.lt = (function chrono$ops$lt(var_args){
var G__28132 = arguments.length;
switch (G__28132) {
case 1:
return chrono.ops.lt.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___28134 = arguments.length;
var i__4731__auto___28135 = (0);
while(true){
if((i__4731__auto___28135 < len__4730__auto___28134)){
args_arr__4751__auto__.push((arguments[i__4731__auto___28135]));

var G__28136 = (i__4731__auto___28135 + (1));
i__4731__auto___28135 = G__28136;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((1)),(0),null));
return chrono.ops.lt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4752__auto__);

}
});

chrono.ops.lt.cljs$core$IFn$_invoke$arity$1 = (function (_){
return true;
});

chrono.ops.lt.cljs$core$IFn$_invoke$arity$variadic = (function (x,args){
return cljs.core.apply.call(null,cljs.core.complement.call(null,chrono.ops.gte),x,args);
});

/** @this {Function} */
chrono.ops.lt.cljs$lang$applyTo = (function (seq28130){
var G__28131 = cljs.core.first.call(null,seq28130);
var seq28130__$1 = cljs.core.next.call(null,seq28130);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28131,seq28130__$1);
});

chrono.ops.lt.cljs$lang$maxFixedArity = (1);

chrono.ops.lte = (function chrono$ops$lte(var_args){
var G__28140 = arguments.length;
switch (G__28140) {
case 1:
return chrono.ops.lte.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___28142 = arguments.length;
var i__4731__auto___28143 = (0);
while(true){
if((i__4731__auto___28143 < len__4730__auto___28142)){
args_arr__4751__auto__.push((arguments[i__4731__auto___28143]));

var G__28144 = (i__4731__auto___28143 + (1));
i__4731__auto___28143 = G__28144;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((1)),(0),null));
return chrono.ops.lte.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4752__auto__);

}
});

chrono.ops.lte.cljs$core$IFn$_invoke$arity$1 = (function (_){
return true;
});

chrono.ops.lte.cljs$core$IFn$_invoke$arity$variadic = (function (x,args){
return cljs.core.apply.call(null,cljs.core.complement.call(null,chrono.ops.gt),x,args);
});

/** @this {Function} */
chrono.ops.lte.cljs$lang$applyTo = (function (seq28138){
var G__28139 = cljs.core.first.call(null,seq28138);
var seq28138__$1 = cljs.core.next.call(null,seq28138);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28139,seq28138__$1);
});

chrono.ops.lte.cljs$lang$maxFixedArity = (1);

chrono.ops.invert = (function chrono$ops$invert(x){
return cljs.core.reduce.call(null,(function (x__$1,k){
var G__28145 = x__$1;
if(cljs.core.contains_QMARK_.call(null,x__$1,k)){
return cljs.core.update.call(null,G__28145,k,cljs.core._);
} else {
return G__28145;
}
}),x,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"month","month",-1960248533),new cljs.core.Keyword(null,"day","day",-274800446),new cljs.core.Keyword(null,"hour","hour",-555989214),new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"sec","sec",-1580376553),new cljs.core.Keyword(null,"ms","ms",-1152709733)], null));
});
chrono.ops.minus = (function chrono$ops$minus(var_args){
var G__28150 = arguments.length;
switch (G__28150) {
case 0:
return chrono.ops.minus.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return chrono.ops.minus.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return chrono.ops.minus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___28152 = arguments.length;
var i__4731__auto___28153 = (0);
while(true){
if((i__4731__auto___28153 < len__4730__auto___28152)){
args_arr__4751__auto__.push((arguments[i__4731__auto___28153]));

var G__28154 = (i__4731__auto___28153 + (1));
i__4731__auto___28153 = G__28154;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((2)),(0),null));
return chrono.ops.minus.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4752__auto__);

}
});

chrono.ops.minus.cljs$core$IFn$_invoke$arity$0 = (function (){
return chrono.ops.default_time;
});

chrono.ops.minus.cljs$core$IFn$_invoke$arity$1 = (function (x){
return x;
});

chrono.ops.minus.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return chrono.ops.normalize.call(null,chrono.ops.init_plus.call(null,x,chrono.ops.invert.call(null,y)));
});

chrono.ops.minus.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
return cljs.core.reduce.call(null,chrono.ops.minus,chrono.ops.minus.call(null,x,y),more);
});

/** @this {Function} */
chrono.ops.minus.cljs$lang$applyTo = (function (seq28147){
var G__28148 = cljs.core.first.call(null,seq28147);
var seq28147__$1 = cljs.core.next.call(null,seq28147);
var G__28149 = cljs.core.first.call(null,seq28147__$1);
var seq28147__$2 = cljs.core.next.call(null,seq28147__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28148,G__28149,seq28147__$2);
});

chrono.ops.minus.cljs$lang$maxFixedArity = (2);

chrono.ops.cmp = (function chrono$ops$cmp(x,y){
if(cljs.core.truth_(chrono.ops.eq_QMARK_.call(null,x,y))){
return (0);
} else {
if(chrono.ops.gt.call(null,x,y)){
return (1);
} else {
if(cljs.core.truth_(chrono.ops.lt.call(null,x,y))){
return (-1);
} else {
return null;
}
}
}
});

//# sourceMappingURL=ops.js.map
