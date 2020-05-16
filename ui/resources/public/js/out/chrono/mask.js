// Compiled by ClojureScript 1.10.520 {}
goog.provide('chrono.mask');
goog.require('cljs.core');
goog.require('chrono.util');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('goog.string.format');
chrono.mask.format_str = (function chrono$mask$format_str(var_args){
var args__4736__auto__ = [];
var len__4730__auto___30863 = arguments.length;
var i__4731__auto___30864 = (0);
while(true){
if((i__4731__auto___30864 < len__4730__auto___30863)){
args__4736__auto__.push((arguments[i__4731__auto___30864]));

var G__30865 = (i__4731__auto___30864 + (1));
i__4731__auto___30864 = G__30865;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return chrono.mask.format_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

chrono.mask.format_str.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
});

chrono.mask.format_str.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
chrono.mask.format_str.cljs$lang$applyTo = (function (seq30861){
var G__30862 = cljs.core.first.call(null,seq30861);
var seq30861__$1 = cljs.core.next.call(null,seq30861);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30862,seq30861__$1);
});

chrono.mask.parse = (function chrono$mask$parse(s,fmt){
var fmt__$1 = cljs.core.map.call(null,(function (p1__30866_SHARP_){
var G__30869 = p1__30866_SHARP_;
if(cljs.core.vector_QMARK_.call(null,p1__30866_SHARP_)){
return cljs.core.first.call(null,G__30869);
} else {
return G__30869;
}
}),fmt);
var pat = cljs.core.map.call(null,((function (fmt__$1){
return (function (p1__30867_SHARP_){
var or__4131__auto__ = chrono.util.parse_patterns.call(null,p1__30867_SHARP_);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return chrono.util.sanitize.call(null,p1__30867_SHARP_);
}
});})(fmt__$1))
,fmt__$1);
var drop_pat = cljs.core.re_pattern.call(null,((function (fmt__$1,pat){
return (function (p1__30868_SHARP_){
return ["[","^0-9",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__30868_SHARP_),"]"].join('');
});})(fmt__$1,pat))
.call(null,clojure.string.join.call(null,cljs.core.remove.call(null,cljs.core.keyword_QMARK_,fmt__$1))));
var s__$1 = (function (){var G__30884 = s;
if((G__30884 == null)){
return null;
} else {
return clojure.string.replace.call(null,G__30884,drop_pat,"");
}
})();
var G__30876 = fmt__$1;
var vec__30878 = G__30876;
var seq__30879 = cljs.core.seq.call(null,vec__30878);
var first__30880 = cljs.core.first.call(null,seq__30879);
var seq__30879__$1 = cljs.core.next.call(null,seq__30879);
var f = first__30880;
var rest_f = seq__30879__$1;
var fmts = vec__30878;
var G__30877 = pat;
var vec__30881 = G__30877;
var seq__30882 = cljs.core.seq.call(null,vec__30881);
var first__30883 = cljs.core.first.call(null,seq__30882);
var seq__30882__$1 = cljs.core.next.call(null,seq__30882);
var p = first__30883;
var rest_p = seq__30882__$1;
var pats = vec__30881;
var acc = cljs.core.PersistentArrayMap.EMPTY;
var s__$2 = s__$1;
var G__30876__$1 = G__30876;
var G__30877__$1 = G__30877;
var acc__$1 = acc;
while(true){
var s__$3 = s__$2;
var vec__30895 = G__30876__$1;
var seq__30896 = cljs.core.seq.call(null,vec__30895);
var first__30897 = cljs.core.first.call(null,seq__30896);
var seq__30896__$1 = cljs.core.next.call(null,seq__30896);
var f__$1 = first__30897;
var rest_f__$1 = seq__30896__$1;
var fmts__$1 = vec__30895;
var vec__30898 = G__30877__$1;
var seq__30899 = cljs.core.seq.call(null,vec__30898);
var first__30900 = cljs.core.first.call(null,seq__30899);
var seq__30899__$1 = cljs.core.next.call(null,seq__30899);
var p__$1 = first__30900;
var rest_p__$1 = seq__30899__$1;
var pats__$1 = vec__30898;
var acc__$2 = acc__$1;
if(cljs.core.not.call(null,(function (){var and__4120__auto__ = s__$3;
if(cljs.core.truth_(and__4120__auto__)){
return f__$1;
} else {
return and__4120__auto__;
}
})())){
return acc__$2;
} else {
var ahead = "(.+)?";
var pat__$1 = cljs.core.re_pattern.call(null,["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1),")",ahead].join(''));
var vec__30901 = cljs.core.re_matches.call(null,pat__$1,s__$3);
var match_s = cljs.core.nth.call(null,vec__30901,(0),null);
var cur_s = cljs.core.nth.call(null,vec__30901,(1),null);
var rest_s = cljs.core.nth.call(null,vec__30901,(2),null);
var key_QMARK_ = cljs.core.contains_QMARK_.call(null,chrono.util.format_patterns,f__$1);
var f_len = chrono.util.format_patterns.call(null,f__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = match_s;
if(cljs.core.truth_(and__4120__auto__)){
return (((!(key_QMARK_))) || (cljs.core._EQ_.call(null,f_len,cljs.core.count.call(null,cur_s))) || ((!((rest_s == null)))) || (cljs.core.not.call(null,cljs.core.re_matches.call(null,cljs.core.re_pattern.call(null,p__$1),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cur_s),"0"].join('')))));
} else {
return and__4120__auto__;
}
})())){
var G__30905 = rest_s;
var G__30906 = rest_f__$1;
var G__30907 = rest_p__$1;
var G__30908 = (function (){var G__30904 = acc__$2;
if(key_QMARK_){
return cljs.core.assoc.call(null,G__30904,f__$1,chrono.util.parse_int.call(null,cur_s));
} else {
return G__30904;
}
})();
s__$2 = G__30905;
G__30876__$1 = G__30906;
G__30877__$1 = G__30907;
acc__$1 = G__30908;
continue;
} else {
if(cljs.core.not.call(null,(function (){var or__4131__auto__ = match_s;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return key_QMARK_;
}
})())){
var G__30909 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(f__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s__$3)].join('');
var G__30910 = fmts__$1;
var G__30911 = pats__$1;
var G__30912 = acc__$2;
s__$2 = G__30909;
G__30876__$1 = G__30910;
G__30877__$1 = G__30911;
acc__$1 = G__30912;
continue;
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = match_s;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.call(null,"0",s__$3);
}
})())){
return cljs.core.assoc.call(null,acc__$2,new cljs.core.Keyword(null,"not-parsed","not-parsed",-204364813),s__$3);
} else {
return acc__$2;

}
}
}
}
break;
}
});
chrono.mask.build = (function chrono$mask$build(t,fmt){
return cljs.core.reduce.call(null,(function (acc,f){
var kw = (function (){var G__30913 = f;
if(cljs.core.vector_QMARK_.call(null,f)){
return cljs.core.first.call(null,G__30913);
} else {
return G__30913;
}
})();
var v = cljs.core.get.call(null,t,kw);
if((!(cljs.core.contains_QMARK_.call(null,chrono.util.format_patterns,kw)))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(acc),cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join('');
} else {
if(typeof v === 'number'){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(acc),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chrono.mask.format_str.call(null,["%0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.vector_QMARK_.call(null,f))?cljs.core.second.call(null,f):chrono.util.format_patterns.call(null,f))),"d"].join(''),v))].join('');
} else {
if(typeof v === 'string'){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(acc),v].join('');
} else {
return cljs.core.reduced.call(null,acc);

}
}
}
}),"",fmt);
});
chrono.mask.clean_build = (function chrono$mask$clean_build(t,fmt){
var clean_fmt = cljs.core.reduce.call(null,(function (acc,f){
if((!((f instanceof cljs.core.Keyword)))){
return cljs.core.update.call(null,acc,new cljs.core.Keyword(null,"buff","buff",1391572698),cljs.core.conj,f);
} else {
if((!((cljs.core.get.call(null,t,f) == null)))){
return cljs.core.assoc.call(null,cljs.core.update.call(null,acc,new cljs.core.Keyword(null,"result","result",1415092211),cljs.core.concat,cljs.core.conj.call(null,new cljs.core.Keyword(null,"buff","buff",1391572698).cljs$core$IFn$_invoke$arity$1(acc),f)),new cljs.core.Keyword(null,"buff","buff",1391572698),cljs.core.PersistentVector.EMPTY);
} else {
return cljs.core.reduced.call(null,acc);

}
}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"result","result",1415092211),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"buff","buff",1391572698),cljs.core.PersistentVector.EMPTY], null),fmt);
return chrono.mask.build.call(null,t,cljs.core.vec.call(null,new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(clean_fmt)));
});
chrono.mask.resolve = (function chrono$mask$resolve(s,fmt){
var map__30914 = chrono.mask.parse.call(null,s,fmt);
var map__30914__$1 = (((((!((map__30914 == null))))?(((((map__30914.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30914.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30914):map__30914);
var p = map__30914__$1;
var not_parsed = cljs.core.get.call(null,map__30914__$1,new cljs.core.Keyword(null,"not-parsed","not-parsed",-204364813));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(chrono.mask.build.call(null,p,fmt)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(not_parsed)].join('');
});

//# sourceMappingURL=mask.js.map
