// Compiled by ClojureScript 1.10.520 {}
goog.provide('zframes.mapper');
goog.require('cljs.core');
zframes.mapper.operand = (function zframes$mapper$operand(ex){
return (function (e){
if(cljs.core.coll_QMARK_.call(null,ex)){
return cljs.core.get_in.call(null,e,ex);
} else {
if((ex instanceof cljs.core.Keyword)){
return cljs.core.get.call(null,e,ex);
} else {
return ex;
}
}
});
});
zframes.mapper.cmp = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"=","=",1152933628),cljs.core._EQ_,new cljs.core.Keyword(null,"<","<",-646864291),cljs.core._LT_,new cljs.core.Keyword(null,">",">",-555517146),cljs.core._GT_,new cljs.core.Keyword(null,"<=","<=",-395636158),cljs.core._LT__EQ_,new cljs.core.Keyword(null,">=",">=",-623615505),cljs.core._GT__EQ_], null);
zframes.mapper.pred = (function zframes$mapper$pred(p__12599){
var vec__12600 = p__12599;
var op = cljs.core.nth.call(null,vec__12600,(0),null);
var l = cljs.core.nth.call(null,vec__12600,(1),null);
var r = cljs.core.nth.call(null,vec__12600,(2),null);
return ((function (vec__12600,op,l,r){
return (function (p1__12598_SHARP_){
return cljs.core.get.call(null,zframes.mapper.cmp,op).call(null,zframes.mapper.operand.call(null,l).call(null,p1__12598_SHARP_),zframes.mapper.operand.call(null,r).call(null,p1__12598_SHARP_));
});
;})(vec__12600,op,l,r))
});
zframes.mapper.comp_expr = (function zframes$mapper$comp_expr(expr){
return (function (coll){
return cljs.core.filterv.call(null,zframes.mapper.pred.call(null,expr),coll);
});
});
zframes.mapper.and_expr = (function zframes$mapper$and_expr(p__12605){
var vec__12606 = p__12605;
var seq__12607 = cljs.core.seq.call(null,vec__12606);
var first__12608 = cljs.core.first.call(null,seq__12607);
var seq__12607__$1 = cljs.core.next.call(null,seq__12607);
var op = first__12608;
var exprs = seq__12607__$1;
return ((function (vec__12606,seq__12607,first__12608,seq__12607__$1,op,exprs){
return (function (coll){
return cljs.core.reduce.call(null,((function (vec__12606,seq__12607,first__12608,seq__12607__$1,op,exprs){
return (function (p1__12604_SHARP_,p2__12603_SHARP_){
return p2__12603_SHARP_.call(null,p1__12604_SHARP_);
});})(vec__12606,seq__12607,first__12608,seq__12607__$1,op,exprs))
,coll,cljs.core.map.call(null,zframes.mapper.comp_expr,exprs));
});
;})(vec__12606,seq__12607,first__12608,seq__12607__$1,op,exprs))
});
zframes.mapper.or_expr = (function zframes$mapper$or_expr(p__12611){
var vec__12612 = p__12611;
var seq__12613 = cljs.core.seq.call(null,vec__12612);
var first__12614 = cljs.core.first.call(null,seq__12613);
var seq__12613__$1 = cljs.core.next.call(null,seq__12613);
var op = first__12614;
var exprs = seq__12613__$1;
return ((function (vec__12612,seq__12613,first__12614,seq__12613__$1,op,exprs){
return (function (coll){
return cljs.core.reduce.call(null,((function (vec__12612,seq__12613,first__12614,seq__12613__$1,op,exprs){
return (function (p1__12609_SHARP_,p2__12610_SHARP_){
return cljs.core.concat.call(null,p1__12609_SHARP_,p2__12610_SHARP_.call(null,coll));
});})(vec__12612,seq__12613,first__12614,seq__12613__$1,op,exprs))
,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,zframes.mapper.comp_expr,exprs));
});
;})(vec__12612,seq__12613,first__12614,seq__12613__$1,op,exprs))
});
zframes.mapper.not_expr = (function zframes$mapper$not_expr(p__12616){
var vec__12617 = p__12616;
var op = cljs.core.nth.call(null,vec__12617,(0),null);
var l = cljs.core.nth.call(null,vec__12617,(1),null);
return ((function (vec__12617,op,l){
return (function (coll){
return cljs.core.filter.call(null,((function (vec__12617,op,l){
return (function (p1__12615_SHARP_){
return cljs.core.not.call(null,zframes.mapper.operand.call(null,l).call(null,p1__12615_SHARP_));
});})(vec__12617,op,l))
,coll);
});
;})(vec__12617,op,l))
});
zframes.mapper.contains_predicate = (function zframes$mapper$contains_predicate(p__12621){
var vec__12622 = p__12621;
var _ = cljs.core.nth.call(null,vec__12622,(0),null);
var l = cljs.core.nth.call(null,vec__12622,(1),null);
var r = cljs.core.nth.call(null,vec__12622,(2),null);
return ((function (vec__12622,_,l,r){
return (function (p1__12620_SHARP_){
return cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,r),zframes.mapper.operand.call(null,l).call(null,p1__12620_SHARP_));
});
;})(vec__12622,_,l,r))
});
zframes.mapper.in_expr = (function zframes$mapper$in_expr(args){
return (function (coll){
return cljs.core.filter.call(null,zframes.mapper.contains_predicate.call(null,args),coll);
});
});
zframes.mapper.not_in_expr = (function zframes$mapper$not_in_expr(args){
return (function (coll){
return cljs.core.remove.call(null,zframes.mapper.contains_predicate.call(null,args),coll);
});
});
zframes.mapper.query = (function zframes$mapper$query(m,q){
var G__12625 = cljs.core.first.call(null,q);
var G__12625__$1 = (((G__12625 instanceof cljs.core.Keyword))?G__12625.fqn:null);
switch (G__12625__$1) {
case "and":
return zframes.mapper.and_expr.call(null,q).call(null,m);

break;
case "or":
return zframes.mapper.or_expr.call(null,q).call(null,m);

break;
case "not":
return zframes.mapper.not_expr.call(null,q).call(null,m);

break;
case "in":
return zframes.mapper.in_expr.call(null,q).call(null,m);

break;
case "not-in":
return zframes.mapper.not_in_expr.call(null,q).call(null,m);

break;
default:
return zframes.mapper.comp_expr.call(null,q).call(null,m);

}
});
zframes.mapper.indexof = (function zframes$mapper$indexof(x,coll){
return cljs.core.first.call(null,cljs.core.keep_indexed.call(null,(function (p1__12628_SHARP_,p2__12627_SHARP_){
if(cljs.core._EQ_.call(null,p2__12627_SHARP_,x)){
return p1__12628_SHARP_;
} else {
return null;
}
}),coll));
});
zframes.mapper.find_idx = (function zframes$mapper$find_idx(m,expr){
return zframes.mapper.indexof.call(null,cljs.core.first.call(null,zframes.mapper.query.call(null,m,expr)),m);
});
zframes.mapper.getin = (function zframes$mapper$getin(m,path){
return cljs.core.reduce.call(null,(function (acc,p){
if(cljs.core.map_QMARK_.call(null,p)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(p))){
if(cljs.core.vector_QMARK_.call(null,acc)){
return cljs.core.mapv.call(null,(function (p1__12629_SHARP_){
return zframes.mapper.export$.call(null,p1__12629_SHARP_,new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(p));
}),acc);
} else {
return zframes.mapper.export$.call(null,acc,new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(p));
}
} else {
var res = cljs.core.vec.call(null,zframes.mapper.query.call(null,acc,new cljs.core.Keyword(null,"get","get",1683182755).cljs$core$IFn$_invoke$arity$1(p)));
if(cljs.core.empty_QMARK_.call(null,res)){
return new cljs.core.Keyword(null,"set","set",304602554).cljs$core$IFn$_invoke$arity$1(p);
} else {
return res;
}
}
} else {
if(((cljs.core._EQ_.call(null,p,new cljs.core.Keyword(null,"#","#",-275793773))) && (cljs.core.vector_QMARK_.call(null,acc)))){
return acc;
} else {
if(((cljs.core.vector_QMARK_.call(null,acc)) && ((p instanceof cljs.core.Keyword)))){
return cljs.core.mapv.call(null,p,acc);
} else {
return cljs.core.get.call(null,acc,p);
}
}
}
}),m,path);
});
/**
 * efficient deep merge
 */
zframes.mapper.deep_merge = (function zframes$mapper$deep_merge(a,b){
var G__12636 = b;
var vec__12637 = G__12636;
var seq__12638 = cljs.core.seq.call(null,vec__12637);
var first__12639 = cljs.core.first.call(null,seq__12638);
var seq__12638__$1 = cljs.core.next.call(null,seq__12638);
var vec__12640 = first__12639;
var k = cljs.core.nth.call(null,vec__12640,(0),null);
var v = cljs.core.nth.call(null,vec__12640,(1),null);
var i = vec__12640;
var ks = seq__12638__$1;
var acc = a;
var G__12636__$1 = G__12636;
var acc__$1 = acc;
while(true){
var vec__12643 = G__12636__$1;
var seq__12644 = cljs.core.seq.call(null,vec__12643);
var first__12645 = cljs.core.first.call(null,seq__12644);
var seq__12644__$1 = cljs.core.next.call(null,seq__12644);
var vec__12646 = first__12645;
var k__$1 = cljs.core.nth.call(null,vec__12646,(0),null);
var v__$1 = cljs.core.nth.call(null,vec__12646,(1),null);
var i__$1 = vec__12646;
var ks__$1 = seq__12644__$1;
var acc__$2 = acc__$1;
if((i__$1 == null)){
return acc__$2;
} else {
var av = cljs.core.get.call(null,a,k__$1);
if(cljs.core._EQ_.call(null,v__$1,av)){
var G__12649 = ks__$1;
var G__12650 = acc__$2;
G__12636__$1 = G__12649;
acc__$1 = G__12650;
continue;
} else {
var G__12651 = ks__$1;
var G__12652 = ((((cljs.core.map_QMARK_.call(null,v__$1)) && (cljs.core.map_QMARK_.call(null,av))))?cljs.core.assoc.call(null,acc__$2,k__$1,zframes.mapper.deep_merge.call(null,av,v__$1)):cljs.core.assoc.call(null,acc__$2,k__$1,v__$1));
G__12636__$1 = G__12651;
acc__$1 = G__12652;
continue;
}
}
break;
}
});
zframes.mapper.setin = (function zframes$mapper$setin(m,p__12653,value){
var vec__12654 = p__12653;
var seq__12655 = cljs.core.seq.call(null,vec__12654);
var first__12656 = cljs.core.first.call(null,seq__12655);
var seq__12655__$1 = cljs.core.next.call(null,seq__12655);
var k = first__12656;
var ks = seq__12655__$1;
var path = vec__12654;
var v = ((ks)?((((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"#","#",-275793773),cljs.core.first.call(null,ks))) && (cljs.core.vector_QMARK_.call(null,value))))?cljs.core.vec.call(null,cljs.core.map.call(null,((function (vec__12654,seq__12655,first__12656,seq__12655__$1,k,ks,path){
return (function (x){
return zframes.mapper.setin.call(null,null,cljs.core.rest.call(null,ks),x);
});})(vec__12654,seq__12655,first__12656,seq__12655__$1,k,ks,path))
,value)):((cljs.core.map_QMARK_.call(null,k))?(cljs.core.truth_(new cljs.core.Keyword(null,"get","get",1683182755).cljs$core$IFn$_invoke$arity$1(k))?zframes.mapper.setin.call(null,zframes.mapper.query.call(null,m,new cljs.core.Keyword(null,"get","get",1683182755).cljs$core$IFn$_invoke$arity$1(k)),ks,value):null
):zframes.mapper.setin.call(null,cljs.core.get.call(null,m,k),ks,value))):(function (){var temp__5733__auto__ = new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(k);
if(cljs.core.truth_(temp__5733__auto__)){
var submap = temp__5733__auto__;
return zframes.mapper.import$.call(null,value,submap);
} else {
return value;
}
})());
if(cljs.core.integer_QMARK_.call(null,k)){
return cljs.core.assoc.call(null,(function (){var or__4131__auto__ = m;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.vec.call(null,cljs.core.repeat.call(null,k,null));
}
})(),k,v);
} else {
if(cljs.core.map_QMARK_.call(null,k)){
var set = new cljs.core.Keyword(null,"set","set",304602554).cljs$core$IFn$_invoke$arity$1(k);
var v__$1 = ((cljs.core.vector_QMARK_.call(null,v))?cljs.core.mapv.call(null,((function (set,v,vec__12654,seq__12655,first__12656,seq__12655__$1,k,ks,path){
return (function (x){
return zframes.mapper.deep_merge.call(null,set,x);
});})(set,v,vec__12654,seq__12655,first__12656,seq__12655__$1,k,ks,path))
,v):zframes.mapper.deep_merge.call(null,set,v));
var should_collection = new cljs.core.Keyword(null,"get","get",1683182755).cljs$core$IFn$_invoke$arity$1(k);
var idx = (function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"get","get",1683182755).cljs$core$IFn$_invoke$arity$1(k);
if(cljs.core.truth_(temp__5735__auto__)){
var getter = temp__5735__auto__;
return zframes.mapper.find_idx.call(null,m,getter);
} else {
return null;
}
})();
if(cljs.core.truth_(should_collection)){
if(cljs.core.truth_(idx)){
if(cljs.core.vector_QMARK_.call(null,v__$1)){
return cljs.core.assoc.call(null,m,idx,cljs.core.first.call(null,v__$1));
} else {
return cljs.core.assoc.call(null,m,idx,v__$1);
}
} else {
if(cljs.core.vector_QMARK_.call(null,v__$1)){
return cljs.core.vec.call(null,cljs.core.concat.call(null,(function (){var or__4131__auto__ = m;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),v__$1));
} else {
return cljs.core.conj.call(null,(function (){var or__4131__auto__ = m;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),v__$1);
}
}
} else {
return v__$1;
}
} else {
if(cljs.core.every_QMARK_.call(null,cljs.core.vector_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,v], null))){
return cljs.core.vec.call(null,cljs.core.concat.call(null,m,v));
} else {
if(cljs.core.every_QMARK_.call(null,cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,k], null))){
return v;
} else {
if(((cljs.core.vector_QMARK_.call(null,m)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"#","#",-275793773),k)))){
return cljs.core.conj.call(null,(function (){var or__4131__auto__ = m;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),v);
} else {
return cljs.core.assoc.call(null,m,k,v);

}
}
}
}
}
});
zframes.mapper.import$ = (function zframes$mapper$import(d,m){
return cljs.core.reduce.call(null,(function (acc,p__12657){
var vec__12658 = p__12657;
var t = cljs.core.nth.call(null,vec__12658,(0),null);
var f = cljs.core.nth.call(null,vec__12658,(1),null);
var data = zframes.mapper.getin.call(null,d,f);
if((!((data == null)))){
return zframes.mapper.setin.call(null,acc,t,data);
} else {
return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,m);
});
zframes.mapper.export$ = (function zframes$mapper$export(var_args){
var args__4736__auto__ = [];
var len__4730__auto___12672 = arguments.length;
var i__4731__auto___12673 = (0);
while(true){
if((i__4731__auto___12673 < len__4730__auto___12672)){
args__4736__auto__.push((arguments[i__4731__auto___12673]));

var G__12674 = (i__4731__auto___12673 + (1));
i__4731__auto___12673 = G__12674;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return zframes.mapper.export$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

zframes.mapper.export$.cljs$core$IFn$_invoke$arity$variadic = (function (d,m,p__12664){
var vec__12665 = p__12664;
var default$ = cljs.core.nth.call(null,vec__12665,(0),null);
return cljs.core.reduce.call(null,((function (vec__12665,default$){
return (function (acc,p__12668){
var vec__12669 = p__12668;
var t = cljs.core.nth.call(null,vec__12669,(0),null);
var f = cljs.core.nth.call(null,vec__12669,(1),null);
var data = zframes.mapper.getin.call(null,d,t);
if((!((data == null)))){
return zframes.mapper.setin.call(null,acc,f,data);
} else {
return acc;
}
});})(vec__12665,default$))
,(function (){var or__4131__auto__ = default$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),m);
});

zframes.mapper.export$.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
zframes.mapper.export$.cljs$lang$applyTo = (function (seq12661){
var G__12662 = cljs.core.first.call(null,seq12661);
var seq12661__$1 = cljs.core.next.call(null,seq12661);
var G__12663 = cljs.core.first.call(null,seq12661__$1);
var seq12661__$2 = cljs.core.next.call(null,seq12661__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12662,G__12663,seq12661__$2);
});


//# sourceMappingURL=mapper.js.map
