// Compiled by ClojureScript 1.10.520 {}
goog.provide('day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.dom');
goog.require('cljs.core');
goog.require('react_dom');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.batching');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.interop');
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.dom.global$module$react_dom = goog.global["ReactDOM"];
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.dom !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.dom.imported !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.dom.imported = null;
}
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.dom !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.dom.roots !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.dom.unmount_comp = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.dom.roots,cljs.core.dissoc,container);

return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.dom.global$module$react_dom.unmountComponentAtNode.call(null,container);
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.dom.render_comp = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__15808 = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__15809 = true;
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__15809;

try{return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.dom.global$module$react_dom.render.call(null,comp.call(null),container,((function (_STAR_always_update_STAR__orig_val__15808,_STAR_always_update_STAR__temp_val__15809){
return (function (){
var _STAR_always_update_STAR__orig_val__15810 = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__15811 = false;
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__15811;

try{cljs.core.swap_BANG_.call(null,day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.batching.flush_after_render.call(null);

if((!((callback == null)))){
return callback.call(null);
} else {
return null;
}
}finally {day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__15810;
}});})(_STAR_always_update_STAR__orig_val__15808,_STAR_always_update_STAR__temp_val__15809))
);
}finally {day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__15808;
}});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.dom.re_render_component = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$dom$re_render_component(comp,container){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.dom.render = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$dom$render(var_args){
var G__15813 = arguments.length;
switch (G__15813) {
case 2:
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.dom.render.call(null,comp,container,null);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.dom.render_comp.call(null,f,container,callback);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.dom.render.cljs$lang$maxFixedArity = 3;

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.dom.unmount_component_at_node = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$dom$unmount_component_at_node(container){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.dom.dom_node = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$dom$dom_node(this$){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.dom.global$module$react_dom.findDOMNode.call(null,this$);
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.find_dom_node = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.dom.force_update_all = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$dom$force_update_all(){
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.flush_BANG_.call(null);

var seq__15815_15819 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.dom.roots)));
var chunk__15816_15820 = null;
var count__15817_15821 = (0);
var i__15818_15822 = (0);
while(true){
if((i__15818_15822 < count__15817_15821)){
var v_15823 = cljs.core._nth.call(null,chunk__15816_15820,i__15818_15822);
cljs.core.apply.call(null,day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.dom.re_render_component,v_15823);


var G__15824 = seq__15815_15819;
var G__15825 = chunk__15816_15820;
var G__15826 = count__15817_15821;
var G__15827 = (i__15818_15822 + (1));
seq__15815_15819 = G__15824;
chunk__15816_15820 = G__15825;
count__15817_15821 = G__15826;
i__15818_15822 = G__15827;
continue;
} else {
var temp__5720__auto___15828 = cljs.core.seq.call(null,seq__15815_15819);
if(temp__5720__auto___15828){
var seq__15815_15829__$1 = temp__5720__auto___15828;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15815_15829__$1)){
var c__4550__auto___15830 = cljs.core.chunk_first.call(null,seq__15815_15829__$1);
var G__15831 = cljs.core.chunk_rest.call(null,seq__15815_15829__$1);
var G__15832 = c__4550__auto___15830;
var G__15833 = cljs.core.count.call(null,c__4550__auto___15830);
var G__15834 = (0);
seq__15815_15819 = G__15831;
chunk__15816_15820 = G__15832;
count__15817_15821 = G__15833;
i__15818_15822 = G__15834;
continue;
} else {
var v_15835 = cljs.core.first.call(null,seq__15815_15829__$1);
cljs.core.apply.call(null,day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.dom.re_render_component,v_15835);


var G__15836 = cljs.core.next.call(null,seq__15815_15829__$1);
var G__15837 = null;
var G__15838 = (0);
var G__15839 = (0);
seq__15815_15819 = G__15836;
chunk__15816_15820 = G__15837;
count__15817_15821 = G__15838;
i__15818_15822 = G__15839;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map
