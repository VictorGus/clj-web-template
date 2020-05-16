// Compiled by ClojureScript 1.10.520 {}
goog.provide('day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component');
goog.require('cljs.core');
goog.require('create_react_class');
goog.require('react');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.batching');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.interop');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug');
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.global$module$create_react_class = goog.global["createReactClass"];
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.global$module$react = goog.global["React"];
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.shallow_obj_to_map = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$shallow_obj_to_map(o){
var ks = cljs.core.js_keys.call(null,o);
var len = ks.length;
var m = cljs.core.PersistentArrayMap.EMPTY;
var i = (0);
while(true){
if((i < len)){
var k = (ks[i]);
var G__15616 = cljs.core.assoc.call(null,m,cljs.core.keyword.call(null,k),(o[k]));
var G__15617 = (i + (1));
m = G__15616;
i = G__15617;
continue;
} else {
return m;
}
break;
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.extract_props = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$extract_props(v){
var p = cljs.core.nth.call(null,v,(1),null);
if(cljs.core.map_QMARK_.call(null,p)){
return p;
} else {
return null;
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.extract_children = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$extract_children(v){
var p = cljs.core.nth.call(null,v,(1),null);
var first_child = (((((p == null)) || (cljs.core.map_QMARK_.call(null,p))))?(2):(1));
if((cljs.core.count.call(null,v) > first_child)){
return cljs.core.subvec.call(null,v,first_child);
} else {
return null;
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.props_argv = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$props_argv(c,p){
var temp__5722__auto__ = (p["argv"]);
if((temp__5722__auto__ == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c.constructor,day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.shallow_obj_to_map.call(null,p)], null);
} else {
var a = temp__5722__auto__;
return a;
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.get_argv = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$get_argv(c){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.props_argv.call(null,c,(c["props"]));
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.get_props = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$get_props(c){
var p = (c["props"]);
var temp__5722__auto__ = (p["argv"]);
if((temp__5722__auto__ == null)){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.shallow_obj_to_map.call(null,p);
} else {
var v = temp__5722__auto__;
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.extract_props.call(null,v);
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.get_children = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$get_children(c){
var p = (c["props"]);
var temp__5722__auto__ = (p["argv"]);
if((temp__5722__auto__ == null)){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.global$module$react.Children.toArray.call(null,(p["children"])));
} else {
var v = temp__5722__auto__;
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.extract_children.call(null,v);
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.reagent_class_QMARK_ = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$reagent_class_QMARK_(c){
return ((cljs.core.fn_QMARK_.call(null,c)) && ((!(((function (){var G__15619 = c;
var G__15619__$1 = (((G__15619 == null))?null:G__15619.prototype);
if((G__15619__$1 == null)){
return null;
} else {
return (G__15619__$1["reagentRender"]);
}
})() == null)))));
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.react_class_QMARK_ = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$react_class_QMARK_(c){
return ((cljs.core.fn_QMARK_.call(null,c)) && ((!(((function (){var G__15621 = c;
var G__15621__$1 = (((G__15621 == null))?null:G__15621.prototype);
if((G__15621__$1 == null)){
return null;
} else {
return (G__15621__$1["render"]);
}
})() == null)))));
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.reagent_component_QMARK_ = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$reagent_component_QMARK_(c){
return (!(((c["reagentRender"]) == null)));
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.cached_react_class = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$cached_react_class(c){
return (c["cljsReactClass"]);
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.cache_react_class = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$cache_react_class(c,constructor$){
return (c["cljsReactClass"] = constructor$);
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.state_atom = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$state_atom(this$){
var sa = (this$["cljsState"]);
if((!((sa == null)))){
return sa;
} else {
return (this$["cljsState"] = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.atom.call(null,null));
}
});
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.as_element !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.as_element = null;
}
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.wrap_render = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$wrap_render(c){
while(true){
var f = (c["reagentRender"]);
var _ = ((cljs.core.ifn_QMARK_.call(null,f))?null:(function(){throw (new Error(["Assert failed: ",["Expected something callable, not ",cljs.core.pr_str.call(null,f)].join(''),"\n","(clojure.core/ifn? f)"].join('')))})());
var res = (((c["cljsLegacyRender"]) === true)?f.call(c,c):(function (){var v = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.get_argv.call(null,c);
var n = cljs.core.count.call(null,v);
var G__15622 = n;
switch (G__15622) {
case (1):
return f.call(c);

break;
case (2):
return f.call(c,cljs.core.nth.call(null,v,(1)));

break;
case (3):
return f.call(c,cljs.core.nth.call(null,v,(1)),cljs.core.nth.call(null,v,(2)));

break;
case (4):
return f.call(c,cljs.core.nth.call(null,v,(1)),cljs.core.nth.call(null,v,(2)),cljs.core.nth.call(null,v,(3)));

break;
case (5):
return f.call(c,cljs.core.nth.call(null,v,(1)),cljs.core.nth.call(null,v,(2)),cljs.core.nth.call(null,v,(3)),cljs.core.nth.call(null,v,(4)));

break;
default:
return f.apply(c,cljs.core.into_array.call(null,v).slice((1)));

}
})());
if(cljs.core.vector_QMARK_.call(null,res)){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.as_element.call(null,res);
} else {
if(cljs.core.ifn_QMARK_.call(null,res)){
var f__$1 = ((day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.reagent_class_QMARK_.call(null,res))?((function (c,f,_,res){
return (function() { 
var G__15624__delegate = function (args){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.as_element.call(null,cljs.core.apply.call(null,cljs.core.vector,res,args));
};
var G__15624 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15625__i = 0, G__15625__a = new Array(arguments.length -  0);
while (G__15625__i < G__15625__a.length) {G__15625__a[G__15625__i] = arguments[G__15625__i + 0]; ++G__15625__i;}
  args = new cljs.core.IndexedSeq(G__15625__a,0,null);
} 
return G__15624__delegate.call(this,args);};
G__15624.cljs$lang$maxFixedArity = 0;
G__15624.cljs$lang$applyTo = (function (arglist__15626){
var args = cljs.core.seq(arglist__15626);
return G__15624__delegate(args);
});
G__15624.cljs$core$IFn$_invoke$arity$variadic = G__15624__delegate;
return G__15624;
})()
;})(c,f,_,res))
:res);
(c["reagentRender"] = f__$1);

var G__15627 = c;
c = G__15627;
continue;
} else {
return res;

}
}
break;
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.do_render = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$do_render(c){
var _STAR_current_component_STAR__orig_val__15628 = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__15629 = c;
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__15629;

try{var ok = [false];
try{var res = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.wrap_render.call(null,c);
(ok[(0)] = true);

return res;
}finally {if(cljs.core.truth_((ok[(0)]))){
} else {
if(cljs.core.truth_(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug.has_console)){
(cljs.core.truth_(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug.tracking)?day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug.track_console:console).error(["Error rendering component",cljs.core.str.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.comp_name.call(null))].join(''));
} else {
}
}
}
}finally {day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__15628;
}});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.rat_opts = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-cache","no-cache",1588056370),true], null);
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.static_fns = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$render(){
var c = this;
if(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util._STAR_non_reactive_STAR_){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.do_render.call(null,c);
} else {
var rat = (c["cljsRatom"]);
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.batching.mark_rendered.call(null,c);

if((rat == null)){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.run_in_reaction.call(null,((function (rat,c){
return (function (){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.do_render.call(null,c);
});})(rat,c))
,c,"cljsRatom",day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.batching.queue_render,day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.rat_opts);
} else {
return rat._run(false);
}
}
})], null);
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.custom_wrapper = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$custom_wrapper(key,f){
var G__15630 = key;
var G__15630__$1 = (((G__15630 instanceof cljs.core.Keyword))?G__15630.fqn:null);
switch (G__15630__$1) {
case "getDefaultProps":
throw (new Error("getDefaultProps not supported"));

break;
case "getInitialState":
return ((function (G__15630,G__15630__$1){
return (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$custom_wrapper_$_getInitialState(){
var c = this;
return cljs.core.reset_BANG_.call(null,day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.state_atom.call(null,c),f.call(c,c));
});
;})(G__15630,G__15630__$1))

break;
case "componentWillReceiveProps":
return ((function (G__15630,G__15630__$1){
return (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$custom_wrapper_$_componentWillReceiveProps(nextprops){
var c = this;
return f.call(c,c,day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.props_argv.call(null,c,nextprops));
});
;})(G__15630,G__15630__$1))

break;
case "shouldComponentUpdate":
return ((function (G__15630,G__15630__$1){
return (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$custom_wrapper_$_shouldComponentUpdate(nextprops,nextstate){
var or__4131__auto__ = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util._STAR_always_update_STAR_;
if(or__4131__auto__){
return or__4131__auto__;
} else {
var c = this;
var old_argv = (c["props"]["argv"]);
var new_argv = (nextprops["argv"]);
var noargv = (((old_argv == null)) || ((new_argv == null)));
if((f == null)){
var or__4131__auto____$1 = noargv;
if(or__4131__auto____$1){
return or__4131__auto____$1;
} else {
try{return cljs.core.not_EQ_.call(null,old_argv,new_argv);
}catch (e15634){var e = e15634;
if(cljs.core.truth_(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug.has_console)){
(cljs.core.truth_(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug.tracking)?day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug.track_console:console).warn(["Warning: ","Exception thrown while comparing argv's in shouldComponentUpdate: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(old_argv)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_argv)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join(''));
} else {
}

return false;
}}
} else {
if(noargv){
return f.call(c,c,day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.get_argv.call(null,c),day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.props_argv.call(null,c,nextprops));
} else {
return f.call(c,c,old_argv,new_argv);

}
}
}
});
;})(G__15630,G__15630__$1))

break;
case "componentWillUpdate":
return ((function (G__15630,G__15630__$1){
return (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$custom_wrapper_$_componentWillUpdate(nextprops){
var c = this;
return f.call(c,c,day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.props_argv.call(null,c,nextprops));
});
;})(G__15630,G__15630__$1))

break;
case "componentDidUpdate":
return ((function (G__15630,G__15630__$1){
return (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$custom_wrapper_$_componentDidUpdate(oldprops){
var c = this;
return f.call(c,c,day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.props_argv.call(null,c,oldprops));
});
;})(G__15630,G__15630__$1))

break;
case "componentWillMount":
return ((function (G__15630,G__15630__$1){
return (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$custom_wrapper_$_componentWillMount(){
var c = this;
(c["cljsMountOrder"] = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.batching.next_mount_count.call(null));

if((f == null)){
return null;
} else {
return f.call(c,c);
}
});
;})(G__15630,G__15630__$1))

break;
case "componentDidMount":
return ((function (G__15630,G__15630__$1){
return (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$custom_wrapper_$_componentDidMount(){
var c = this;
return f.call(c,c);
});
;})(G__15630,G__15630__$1))

break;
case "componentWillUnmount":
return ((function (G__15630,G__15630__$1){
return (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$custom_wrapper_$_componentWillUnmount(){
var c = this;
var G__15635_15637 = (c["cljsRatom"]);
if((G__15635_15637 == null)){
} else {
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.dispose_BANG_.call(null,G__15635_15637);
}

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.batching.mark_rendered.call(null,c);

if((f == null)){
return null;
} else {
return f.call(c,c);
}
});
;})(G__15630,G__15630__$1))

break;
case "componentDidCatch":
return ((function (G__15630,G__15630__$1){
return (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$custom_wrapper_$_componentDidCatch(error,info){
var c = this;
return f.call(c,c,error,info);
});
;})(G__15630,G__15630__$1))

break;
default:
return null;

}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.get_wrapper = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$get_wrapper(key,f,name){
var wrap = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.custom_wrapper.call(null,key,f);
if(cljs.core.truth_((function (){var and__4120__auto__ = wrap;
if(cljs.core.truth_(and__4120__auto__)){
return f;
} else {
return and__4120__auto__;
}
})())){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error(["Assert failed: ",["Expected something callable, not ",cljs.core.pr_str.call(null,f)].join(''),"\n","(clojure.core/ifn? f)"].join('')));
}
} else {
}

var or__4131__auto__ = wrap;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return f;
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.obligatory = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),null,new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619),null,new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),null], null);
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.dash_to_camel = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util.memoize_1.call(null,day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util.dash_to_camel);
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.camelify_map_keys = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$camelify_map_keys(fun_map){
return cljs.core.reduce_kv.call(null,(function (m,k,v){
return cljs.core.assoc.call(null,m,cljs.core.keyword.call(null,day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.dash_to_camel.call(null,k)),v);
}),cljs.core.PersistentArrayMap.EMPTY,fun_map);
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.add_obligatory = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$add_obligatory(fun_map){
return cljs.core.merge.call(null,day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.obligatory,fun_map);
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.wrap_funs = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$wrap_funs(fmap){
var renders_15639 = cljs.core.select_keys.call(null,fmap,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"reagentRender","reagentRender",-358306383),new cljs.core.Keyword(null,"componentFunction","componentFunction",825866104)], null));
var render_fun_15640 = cljs.core.first.call(null,cljs.core.vals.call(null,renders_15639));
if((cljs.core.count.call(null,renders_15639) > (0))){
} else {
throw (new Error(["Assert failed: ","Missing reagent-render","\n","(pos? (count renders))"].join('')));
}

if(((1) === cljs.core.count.call(null,renders_15639))){
} else {
throw (new Error(["Assert failed: ","Too many render functions supplied","\n","(== 1 (count renders))"].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,render_fun_15640)){
} else {
throw (new Error(["Assert failed: ",["Expected something callable, not ",cljs.core.pr_str.call(null,render_fun_15640)].join(''),"\n","(clojure.core/ifn? render-fun)"].join('')));
}


var render_fun = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reagentRender","reagentRender",-358306383).cljs$core$IFn$_invoke$arity$1(fmap);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"componentFunction","componentFunction",825866104).cljs$core$IFn$_invoke$arity$1(fmap);
}
})();
var legacy_render = (render_fun == null);
var render_fun__$1 = (function (){var or__4131__auto__ = render_fun;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(fmap);
}
})();
var name = cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"displayName","displayName",-809144601).cljs$core$IFn$_invoke$arity$1(fmap);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util.fun_name.call(null,render_fun__$1);
}
})());
var name__$1 = (function (){var G__15638 = name;
switch (G__15638) {
case "":
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.call(null,"reagent"));

break;
default:
return name;

}
})();
var fmap__$1 = cljs.core.reduce_kv.call(null,((function (render_fun,legacy_render,render_fun__$1,name,name__$1){
return (function (m,k,v){
return cljs.core.assoc.call(null,m,k,day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.get_wrapper.call(null,k,v,name__$1));
});})(render_fun,legacy_render,render_fun__$1,name,name__$1))
,cljs.core.PersistentArrayMap.EMPTY,fmap);
return cljs.core.assoc.call(null,fmap__$1,new cljs.core.Keyword(null,"displayName","displayName",-809144601),name__$1,new cljs.core.Keyword(null,"autobind","autobind",-570650245),false,new cljs.core.Keyword(null,"cljsLegacyRender","cljsLegacyRender",-1527295613),legacy_render,new cljs.core.Keyword(null,"reagentRender","reagentRender",-358306383),render_fun__$1,new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.static_fns));
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.map_to_js = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$map_to_js(m){
return cljs.core.reduce_kv.call(null,(function (o,k,v){
var G__15642 = o;
(G__15642[cljs.core.name.call(null,k)] = v);

return G__15642;
}),({}),m);
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.cljsify = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$cljsify(body){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.map_to_js.call(null,day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.wrap_funs.call(null,day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.add_obligatory.call(null,day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.camelify_map_keys.call(null,body))));
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.create_class = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$create_class(body){
if(cljs.core.map_QMARK_.call(null,body)){
} else {
throw (new Error("Assert failed: (map? body)"));
}

return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.global$module$create_react_class.call(null,day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.cljsify.call(null,body));
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.fiber_component_path = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$fiber_component_path(fiber){
var name = (function (){var G__15643 = fiber;
var G__15643__$1 = (((G__15643 == null))?null:(G__15643["type"]));
if((G__15643__$1 == null)){
return null;
} else {
return (G__15643__$1["displayName"]);
}
})();
var parent = (function (){var G__15644 = fiber;
if((G__15644 == null)){
return null;
} else {
return (G__15644["return"]);
}
})();
var path = (function (){var G__15645 = parent;
var G__15645__$1 = (((G__15645 == null))?null:day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.fiber_component_path.call(null,G__15645));
if((G__15645__$1 == null)){
return null;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15645__$1)," > "].join('');
}
})();
var res = [path,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('');
if(cljs.core.empty_QMARK_.call(null,res)){
return null;
} else {
return res;
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.component_path = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$component_path(c){
var temp__5718__auto__ = (function (){var or__4131__auto__ = (function (){var G__15647 = c;
if((G__15647 == null)){
return null;
} else {
return (G__15647["_reactInternalFiber"]);
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var G__15648 = c;
if((G__15648 == null)){
return null;
} else {
return G__15648._reactInternalFiber;
}
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var fiber = temp__5718__auto__;
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.fiber_component_path.call(null,fiber);
} else {
var instance = (function (){var or__4131__auto__ = (function (){var G__15650 = c;
if((G__15650 == null)){
return null;
} else {
return (G__15650["_reactInternalInstance"]);
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = (function (){var G__15652 = c;
if((G__15652 == null)){
return null;
} else {
return G__15652._reactInternalInstance;
}
})();
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return c;
}
}
})();
var elem = (function (){var or__4131__auto__ = (function (){var G__15654 = instance;
if((G__15654 == null)){
return null;
} else {
return (G__15654["_currentElement"]);
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var G__15655 = instance;
if((G__15655 == null)){
return null;
} else {
return G__15655._currentElement;
}
}
})();
var name = (function (){var G__15656 = elem;
var G__15656__$1 = (((G__15656 == null))?null:(G__15656["type"]));
if((G__15656__$1 == null)){
return null;
} else {
return (G__15656__$1["displayName"]);
}
})();
var owner = (function (){var or__4131__auto__ = (function (){var G__15658 = elem;
if((G__15658 == null)){
return null;
} else {
return (G__15658["_owner"]);
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var G__15659 = elem;
if((G__15659 == null)){
return null;
} else {
return G__15659._owner;
}
}
})();
var path = (function (){var G__15660 = owner;
var G__15660__$1 = (((G__15660 == null))?null:day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.component_path.call(null,G__15660));
if((G__15660__$1 == null)){
return null;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15660__$1)," > "].join('');
}
})();
var res = [path,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('');
if(cljs.core.empty_QMARK_.call(null,res)){
return null;
} else {
return res;
}
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.comp_name = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$comp_name(){
var c = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component._STAR_current_component_STAR_;
var n = (function (){var or__4131__auto__ = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.component_path.call(null,c);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var G__15661 = c;
var G__15661__$1 = (((G__15661 == null))?null:G__15661.constructor);
if((G__15661__$1 == null)){
return null;
} else {
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util.fun_name.call(null,G__15661__$1);
}
}
})();
if((!(cljs.core.empty_QMARK_.call(null,n)))){
return [" (in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),")"].join('');
} else {
return "";
}

});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.fn_to_class = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$fn_to_class(f){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error(["Assert failed: ",["Expected something callable, not ",cljs.core.pr_str.call(null,f)].join(''),"\n","(clojure.core/ifn? f)"].join('')));
}

if((!((!(((day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.react_class_QMARK_.call(null,f)) && ((!(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.reagent_class_QMARK_.call(null,f)))))))))){
if(cljs.core.truth_(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug.has_console)){
(cljs.core.truth_(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug.tracking)?day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug.track_console:console).warn(["Warning: ","Using native React classes directly in Hiccup forms ","is not supported. Use create-element or ","adapt-react-class instead: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var n = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util.fun_name.call(null,f);
if(cljs.core.empty_QMARK_.call(null,n)){
return f;
} else {
return n;
}
})()),day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.comp_name.call(null)].join(''));
} else {
}
} else {
}

if(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.reagent_class_QMARK_.call(null,f)){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.cache_react_class.call(null,f,f);
} else {
var spec = cljs.core.meta.call(null,f);
var withrender = cljs.core.assoc.call(null,spec,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),f);
var res = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.create_class.call(null,withrender);
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.cache_react_class.call(null,f,res);
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.as_class = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$as_class(tag){
var temp__5722__auto__ = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.cached_react_class.call(null,tag);
if((temp__5722__auto__ == null)){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.fn_to_class.call(null,tag);
} else {
var cached_class = temp__5722__auto__;
return cached_class;
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.reactify_component = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$component$reactify_component(comp){
if(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.react_class_QMARK_.call(null,comp)){
return comp;
} else {
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.as_class.call(null,comp);
}
});

//# sourceMappingURL=component.js.map
