// Compiled by ClojureScript 1.10.520 {}
goog.provide('day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util');
goog.require('day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color');
goog.require('day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types');
/**
 * Create a rule function for the given selector. The `selector`
 *   argument must be valid selector (ie. a keyword, string, or symbol).
 *   Additional arguments may consist of extra selectors or
 *   declarations.
 * 
 *   The returned function accepts any number of arguments which represent
 *   the rule's children.
 * 
 *   Ex.
 *    (let [text-field (rule "[type="text"])]
 *     (text-field {:border ["1px" :solid "black"]}))
 *    ;; => ["[type="text"] {:boder ["1px" :solid "black"]}]
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.rule = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$stylesheet$rule(var_args){
var args__4736__auto__ = [];
var len__4730__auto___15500 = arguments.length;
var i__4731__auto___15501 = (0);
while(true){
if((i__4731__auto___15501 < len__4730__auto___15500)){
args__4736__auto__.push((arguments[i__4731__auto___15501]));

var G__15502 = (i__4731__auto___15501 + (1));
i__4731__auto___15501 = G__15502;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic = (function (selector,more){
if((!((((selector instanceof cljs.core.Keyword)) || (typeof selector === 'string') || ((selector instanceof cljs.core.Symbol)))))){
throw cljs.core.ex_info.call(null,"Selector must be either a keyword, string, or symbol.",cljs.core.PersistentArrayMap.EMPTY);
} else {
return (function() { 
var G__15503__delegate = function (children){
return cljs.core.into.call(null,cljs.core.apply.call(null,cljs.core.vector,selector,more),children);
};
var G__15503 = function (var_args){
var children = null;
if (arguments.length > 0) {
var G__15504__i = 0, G__15504__a = new Array(arguments.length -  0);
while (G__15504__i < G__15504__a.length) {G__15504__a[G__15504__i] = arguments[G__15504__i + 0]; ++G__15504__i;}
  children = new cljs.core.IndexedSeq(G__15504__a,0,null);
} 
return G__15503__delegate.call(this,children);};
G__15503.cljs$lang$maxFixedArity = 0;
G__15503.cljs$lang$applyTo = (function (arglist__15505){
var children = cljs.core.seq(arglist__15505);
return G__15503__delegate(children);
});
G__15503.cljs$core$IFn$_invoke$arity$variadic = G__15503__delegate;
return G__15503;
})()
;
}
});

day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.rule.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.rule.cljs$lang$applyTo = (function (seq15498){
var G__15499 = cljs.core.first.call(null,seq15498);
var seq15498__$1 = cljs.core.next.call(null,seq15498);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15499,seq15498__$1);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.cssfn = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$stylesheet$cssfn(fn_name){
return (function() { 
var G__15506__delegate = function (args){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSFunction(fn_name,args,null,null,null));
};
var G__15506 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15507__i = 0, G__15507__a = new Array(arguments.length -  0);
while (G__15507__i < G__15507__a.length) {G__15507__a[G__15507__i] = arguments[G__15507__i + 0]; ++G__15507__i;}
  args = new cljs.core.IndexedSeq(G__15507__a,0,null);
} 
return G__15506__delegate.call(this,args);};
G__15506.cljs$lang$maxFixedArity = 0;
G__15506.cljs$lang$applyTo = (function (arglist__15508){
var args = cljs.core.seq(arglist__15508);
return G__15506__delegate(args);
});
G__15506.cljs$core$IFn$_invoke$arity$variadic = G__15506__delegate;
return G__15506;
})()
;
});
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_rule = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$stylesheet$at_rule(identifier,value){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSAtRule(identifier,value,null,null,null));
});
/**
 * Create a CSS @font-face rule.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_font_face = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$stylesheet$at_font_face(var_args){
var args__4736__auto__ = [];
var len__4730__auto___15510 = arguments.length;
var i__4731__auto___15511 = (0);
while(true){
if((i__4731__auto___15511 < len__4730__auto___15510)){
args__4736__auto__.push((arguments[i__4731__auto___15511]));

var G__15512 = (i__4731__auto___15511 + (1));
i__4731__auto___15511 = G__15512;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic = (function (font_properties){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["@font-face",font_properties], null);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_font_face.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_font_face.cljs$lang$applyTo = (function (seq15509){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15509));
});

/**
 * Create a CSS @import rule.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_import = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$stylesheet$at_import(var_args){
var G__15516 = arguments.length;
switch (G__15516) {
case 1:
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___15518 = arguments.length;
var i__4731__auto___15519 = (0);
while(true){
if((i__4731__auto___15519 < len__4730__auto___15518)){
args_arr__4751__auto__.push((arguments[i__4731__auto___15519]));

var G__15520 = (i__4731__auto___15519 + (1));
i__4731__auto___15519 = G__15520;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((1)),(0),null));
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4752__auto__);

}
});

day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1 = (function (url){
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),null], null));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic = (function (url,media_queries){
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries], null));
});

/** @this {Function} */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_import.cljs$lang$applyTo = (function (seq15514){
var G__15515 = cljs.core.first.call(null,seq15514);
var seq15514__$1 = cljs.core.next.call(null,seq15514);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15515,seq15514__$1);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_import.cljs$lang$maxFixedArity = (1);

/**
 * Create a CSS @media rule.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_media = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$stylesheet$at_media(var_args){
var args__4736__auto__ = [];
var len__4730__auto___15523 = arguments.length;
var i__4731__auto___15524 = (0);
while(true){
if((i__4731__auto___15524 < len__4730__auto___15523)){
args__4736__auto__.push((arguments[i__4731__auto___15524]));

var G__15525 = (i__4731__auto___15524 + (1));
i__4731__auto___15524 = G__15525;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic = (function (media_queries,rules){
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"media","media",-1066138403),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries,new cljs.core.Keyword(null,"rules","rules",1198912366),rules], null));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_media.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_media.cljs$lang$applyTo = (function (seq15521){
var G__15522 = cljs.core.first.call(null,seq15521);
var seq15521__$1 = cljs.core.next.call(null,seq15521);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15522,seq15521__$1);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_supports = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$stylesheet$at_supports(var_args){
var args__4736__auto__ = [];
var len__4730__auto___15528 = arguments.length;
var i__4731__auto___15529 = (0);
while(true){
if((i__4731__auto___15529 < len__4730__auto___15528)){
args__4736__auto__.push((arguments[i__4731__auto___15529]));

var G__15530 = (i__4731__auto___15529 + (1));
i__4731__auto___15529 = G__15530;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_supports.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_supports.cljs$core$IFn$_invoke$arity$variadic = (function (feature_queries,rules){

return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"feature","feature",27242652),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"feature-queries","feature-queries",-1340998408),feature_queries,new cljs.core.Keyword(null,"rules","rules",1198912366),rules], null));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_supports.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_supports.cljs$lang$applyTo = (function (seq15526){
var G__15527 = cljs.core.first.call(null,seq15526);
var seq15526__$1 = cljs.core.next.call(null,seq15526);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15527,seq15526__$1);
});

/**
 * Create a CSS @keyframes rule.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_keyframes = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$stylesheet$at_keyframes(var_args){
var args__4736__auto__ = [];
var len__4730__auto___15533 = arguments.length;
var i__4731__auto___15534 = (0);
while(true){
if((i__4731__auto___15534 < len__4730__auto___15533)){
args__4736__auto__.push((arguments[i__4731__auto___15534]));

var G__15535 = (i__4731__auto___15534 + (1));
i__4731__auto___15534 = G__15535;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic = (function (identifier,frames){
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"identifier","identifier",-805503498),identifier,new cljs.core.Keyword(null,"frames","frames",1765687497),frames], null));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_keyframes.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_keyframes.cljs$lang$applyTo = (function (seq15531){
var G__15532 = cljs.core.first.call(null,seq15531);
var seq15531__$1 = cljs.core.next.call(null,seq15531);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15532,seq15531__$1);
});

/**
 * Create a color from RGB values.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.rgb = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$stylesheet$rgb(r,g,b){
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.rgb.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null));
});
/**
 * Create a color from HSL values.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.hsl = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$stylesheet$hsl(h,s,l){
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.hsl.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,l], null));
});

//# sourceMappingURL=stylesheet.js.map
