// Compiled by ClojureScript 1.10.520 {}
goog.provide('route_map.core');
goog.require('cljs.core');
goog.require('clojure.string');
route_map.core.pathify = (function route_map$core$pathify(path){
return cljs.core.filterv.call(null,(function (p1__11557_SHARP_){
return (!(clojure.string.blank_QMARK_.call(null,p1__11557_SHARP_)));
}),clojure.string.split.call(null,path,/\//));
});
route_map.core.is_glob_QMARK_ = (function route_map$core$is_glob_QMARK_(k){
return clojure.string.ends_with_QMARK_.call(null,cljs.core.name.call(null,k),"*");
});
route_map.core.get_params = (function route_map$core$get_params(node){
if(cljs.core.map_QMARK_.call(null,node)){
return cljs.core.filter.call(null,(function (p__11558){
var vec__11559 = p__11558;
var k = cljs.core.nth.call(null,vec__11559,(0),null);
var v = cljs.core.nth.call(null,vec__11559,(1),null);
return cljs.core.vector_QMARK_.call(null,k);
}),node);
} else {
return null;
}
});
route_map.core.get_param = (function route_map$core$get_param(node){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p__11562){
var vec__11563 = p__11562;
var k = cljs.core.nth.call(null,vec__11563,(0),null);
var v = cljs.core.nth.call(null,vec__11563,(1),null);
return cljs.core.vector_QMARK_.call(null,k);
}),node));
});
route_map.core.fn_param_QMARK_ = (function route_map$core$fn_param_QMARK_(k){
var and__4120__auto__ = cljs.core.vector_QMARK_.call(null,k);
if(and__4120__auto__){
var f = cljs.core.first.call(null,k);
return (((!((f instanceof cljs.core.Keyword)))) && (cljs.core.fn_QMARK_.call(null,f)));
} else {
return and__4120__auto__;
}
});
route_map.core.match_fn_params = (function route_map$core$match_fn_params(node,x){
if(cljs.core.map_QMARK_.call(null,node)){
return cljs.core.first.call(null,cljs.core.reduce.call(null,(function (acc,p__11566){
var vec__11567 = p__11566;
var k = cljs.core.nth.call(null,vec__11567,(0),null);
var v = cljs.core.nth.call(null,vec__11567,(1),null);
var temp__5733__auto__ = cljs.core.first.call(null,k).call(null,x);
if(cljs.core.truth_(temp__5733__auto__)){
var params = temp__5733__auto__;
return cljs.core.conj.call(null,acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [params,v], null));
} else {
return acc;
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.filter.call(null,(function (p__11570){
var vec__11571 = p__11570;
var k = cljs.core.nth.call(null,vec__11571,(0),null);
var v = cljs.core.nth.call(null,vec__11571,(1),null);
return route_map.core.fn_param_QMARK_.call(null,k);
}),node)));
} else {
return null;
}
});
route_map.core._match = (function route_map$core$_match(acc,node,p__11574,params,parents,wgt){
var vec__11575 = p__11574;
var seq__11576 = cljs.core.seq.call(null,vec__11575);
var first__11577 = cljs.core.first.call(null,seq__11576);
var seq__11576__$1 = cljs.core.next.call(null,seq__11576);
var x = first__11577;
var rpth = seq__11576__$1;
var pth = vec__11575;
if(cljs.core.empty_QMARK_.call(null,pth)){
if(cljs.core.truth_(node)){
if(((cljs.core.map_QMARK_.call(null,node)) && (cljs.core.contains_QMARK_.call(null,node,new cljs.core.Keyword(null,".",".",335144435))))){
return cljs.core.conj.call(null,acc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"parents","parents",-2027538891),cljs.core.conj.call(null,parents,cljs.core.assoc.call(null,node,new cljs.core.Keyword(null,"params","params",710516235),params)),new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Keyword(null,".",".",335144435).cljs$core$IFn$_invoke$arity$1(node),new cljs.core.Keyword(null,"w","w",354169001),wgt,new cljs.core.Keyword(null,"params","params",710516235),params], null));
} else {
return cljs.core.conj.call(null,acc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"parents","parents",-2027538891),parents,new cljs.core.Keyword(null,"match","match",1220059550),node,new cljs.core.Keyword(null,"w","w",354169001),wgt,new cljs.core.Keyword(null,"params","params",710516235),params], null));
}
} else {
return acc;
}
} else {
var node__$1 = ((cljs.core.var_QMARK_.call(null,node))?cljs.core.deref.call(null,node):node);
var pnode = (function (){var and__4120__auto__ = cljs.core.map_QMARK_.call(null,node__$1);
if(and__4120__auto__){
return cljs.core.assoc.call(null,node__$1,new cljs.core.Keyword(null,"params","params",710516235),params);
} else {
return and__4120__auto__;
}
})();
var acc__$1 = (function (){var temp__5733__auto__ = cljs.core.get.call(null,node__$1,x);
if(cljs.core.truth_(temp__5733__auto__)){
var branch = temp__5733__auto__;
return route_map.core._match.call(null,acc,branch,rpth,params,cljs.core.conj.call(null,parents,pnode),(wgt + (10)));
} else {
return acc;
}
})();
var acc__$2 = (((x instanceof cljs.core.Keyword))?acc__$1:cljs.core.reduce.call(null,((function (node__$1,pnode,acc__$1,vec__11575,seq__11576,first__11577,seq__11576__$1,x,rpth,pth){
return (function (acc__$2,p__11578){
var vec__11579 = p__11578;
var vec__11582 = cljs.core.nth.call(null,vec__11579,(0),null);
var k = cljs.core.nth.call(null,vec__11582,(0),null);
var branch = cljs.core.nth.call(null,vec__11579,(1),null);
if(cljs.core.fn_QMARK_.call(null,k)){
var temp__5733__auto__ = route_map.core.match_fn_params.call(null,node__$1,x);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__11585 = temp__5733__auto__;
var fparams = cljs.core.nth.call(null,vec__11585,(0),null);
var branch__$1 = cljs.core.nth.call(null,vec__11585,(1),null);
return route_map.core._match.call(null,acc__$2,branch__$1,rpth,cljs.core.merge.call(null,params,fparams),parents,(wgt + (10)));
} else {
return acc__$2;
}
} else {
if(route_map.core.is_glob_QMARK_.call(null,k)){
if((cljs.core.last.call(null,pth) instanceof cljs.core.Keyword)){
return route_map.core._match.call(null,acc__$2,branch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.last.call(null,pth)], null),cljs.core.assoc.call(null,params,k,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.butlast.call(null,pth))),cljs.core.conj.call(null,parents,pnode),(wgt + (1)));
} else {
return route_map.core._match.call(null,acc__$2,branch,cljs.core.PersistentVector.EMPTY,cljs.core.assoc.call(null,params,k,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,pth)),cljs.core.conj.call(null,parents,pnode),(wgt + (1)));
}
} else {
if(cljs.core.truth_((function (){var temp__5735__auto__ = new cljs.core.Keyword("route-map","enum","route-map/enum",1845578232).cljs$core$IFn$_invoke$arity$1(branch);
if(cljs.core.truth_(temp__5735__auto__)){
var opts = temp__5735__auto__;
return cljs.core.set_QMARK_.call(null,opts);
} else {
return null;
}
})())){
var opts = new cljs.core.Keyword("route-map","enum","route-map/enum",1845578232).cljs$core$IFn$_invoke$arity$1(branch);
if(cljs.core.contains_QMARK_.call(null,opts,x)){
return route_map.core._match.call(null,acc__$2,branch,rpth,cljs.core.assoc.call(null,params,k,x),cljs.core.conj.call(null,parents,pnode),(wgt + (5)));
} else {
return acc__$2;
}
} else {
if(cljs.core.truth_((function (){var temp__5735__auto__ = new cljs.core.Keyword("route-map","regexp","route-map/regexp",1508626074).cljs$core$IFn$_invoke$arity$1(branch);
if(cljs.core.truth_(temp__5735__auto__)){
var opts = temp__5735__auto__;
return cljs.core._EQ_.call(null,cljs.core.type.call(null,opts),java.util.regex.Pattern);
} else {
return null;
}
})())){
var opts = new cljs.core.Keyword("route-map","regexp","route-map/regexp",1508626074).cljs$core$IFn$_invoke$arity$1(branch);
if(cljs.core.truth_(cljs.core.re_find.call(null,opts,x))){
return route_map.core._match.call(null,acc__$2,branch,rpth,cljs.core.assoc.call(null,params,k,x),cljs.core.conj.call(null,parents,pnode),(wgt + (4)));
} else {
return acc__$2;
}
} else {
return route_map.core._match.call(null,acc__$2,branch,rpth,cljs.core.assoc.call(null,params,k,x),cljs.core.conj.call(null,parents,pnode),(wgt + (2)));

}
}
}
}
});})(node__$1,pnode,acc__$1,vec__11575,seq__11576,first__11577,seq__11576__$1,x,rpth,pth))
,acc__$1,route_map.core.get_params.call(null,node__$1)));
return acc__$2;
}
});
/**
 * path [:get "/your/path"] or just "/your/path"
 */
route_map.core.match = (function route_map$core$match(path,routes){
var path__$1 = ((cljs.core.vector_QMARK_.call(null,path))?(function (){var vec__11588 = path;
var meth = cljs.core.nth.call(null,vec__11588,(0),null);
var url = cljs.core.nth.call(null,vec__11588,(1),null);
return cljs.core.conj.call(null,route_map.core.pathify.call(null,url),cljs.core.keyword.call(null,clojure.string.upper_case.call(null,cljs.core.name.call(null,meth))));
})():route_map.core.pathify.call(null,path));
var result = route_map.core._match.call(null,cljs.core.PersistentVector.EMPTY,routes,path__$1,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentVector.EMPTY,(0));
return cljs.core.last.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"w","w",354169001),result));
});
route_map.core.wrap_route_map = (function route_map$core$wrap_route_map(h,routes){

return (function (p__11591){
var map__11592 = p__11591;
var map__11592__$1 = (((((!((map__11592 == null))))?(((((map__11592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11592.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11592):map__11592);
var req = map__11592__$1;
var meth = cljs.core.get.call(null,map__11592__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var uri = cljs.core.get.call(null,map__11592__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var temp__5733__auto__ = route_map.core.match.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [meth,uri], null),routes);
if(cljs.core.truth_(temp__5733__auto__)){
var match = temp__5733__auto__;
return h.call(null,cljs.core.assoc.call(null,req,new cljs.core.Keyword(null,"route-match","route-match",-1450985937),match));
} else {
return h.call(null,req);
}
});
});
route_map.core.first_not_nil = (function route_map$core$first_not_nil(coll){
var not_nils = cljs.core.filter.call(null,(function (p1__11594_SHARP_){
return cljs.core.not_EQ_.call(null,null,p1__11594_SHARP_);
}),coll);
var all_nils = (not_nils == null);
if(all_nils){
return null;
} else {
return cljs.core.first.call(null,not_nils);
}
});
route_map.core.get_static_paths = (function route_map$core$get_static_paths(routes){
return cljs.core.map.call(null,(function (p1__11595_SHARP_){
return cljs.core.first.call(null,p1__11595_SHARP_);
}),cljs.core.filter.call(null,(function (p1__11596_SHARP_){
var vec__11597 = p1__11596_SHARP_;
var k = cljs.core.nth.call(null,vec__11597,(0),null);
var _ = cljs.core.nth.call(null,vec__11597,(1),null);
return typeof k === 'string';
}),routes));
});
route_map.core.get_ways = (function route_map$core$get_ways(routes){
var params = cljs.core.first.call(null,route_map.core.get_param.call(null,routes));
var static_paths = route_map.core.get_static_paths.call(null,routes);
return cljs.core.filter.call(null,((function (params,static_paths){
return (function (p1__11600_SHARP_){
return cljs.core.not_EQ_.call(null,null,p1__11600_SHARP_);
});})(params,static_paths))
,cljs.core.concat.call(null,params,static_paths));
});
route_map.core.find_url = (function route_map$core$find_url(routes,name,auto_name,params,path){
var path_found = ((cljs.core._EQ_.call(null,name,new cljs.core.Keyword(null,".name",".name",1428237392).cljs$core$IFn$_invoke$arity$1(routes))) || (((cljs.core._EQ_.call(null,name,cljs.core.keyword.call(null,auto_name))) && (cljs.core._EQ_.call(null,(0),cljs.core.count.call(null,params))))));
if(path_found){
if(cljs.core._EQ_.call(null,"",path)){
return "/";
} else {
return path;
}
} else {
return route_map.core.first_not_nil.call(null,cljs.core.map.call(null,((function (path_found){
return (function (p1__11601_SHARP_){
var vec__11602 = ((typeof p1__11601_SHARP_ === 'string')?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11601_SHARP_,params,cljs.core.get.call(null,routes,p1__11601_SHARP_),((cljs.core._EQ_.call(null,"",auto_name))?p1__11601_SHARP_:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(auto_name),"-",p1__11601_SHARP_].join(''))], null):(((p1__11601_SHARP_ instanceof cljs.core.Keyword))?((cljs.core.map_QMARK_.call(null,params))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.call(null,params,p1__11601_SHARP_),cljs.core.dissoc.call(null,params,p1__11601_SHARP_),(cljs.core.truth_(cljs.core.get.call(null,params,p1__11601_SHARP_))?cljs.core.get.call(null,routes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11601_SHARP_], null)):null),auto_name], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,params),cljs.core.rest.call(null,params),cljs.core.get.call(null,routes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11601_SHARP_], null)),auto_name], null)):null));
var next_path = cljs.core.nth.call(null,vec__11602,(0),null);
var next_params = cljs.core.nth.call(null,vec__11602,(1),null);
var next_routes = cljs.core.nth.call(null,vec__11602,(2),null);
var next_auto_name = cljs.core.nth.call(null,vec__11602,(3),null);
return route_map.core.find_url.call(null,((cljs.core.var_QMARK_.call(null,next_routes))?cljs.core.deref.call(null,next_routes):next_routes),name,next_auto_name,next_params,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_path)].join(''));
});})(path_found))
,route_map.core.get_ways.call(null,routes)));
}
});
route_map.core.url = (function route_map$core$url(var_args){
var G__11606 = arguments.length;
switch (G__11606) {
case 2:
return route_map.core.url.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return route_map.core.url.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

route_map.core.url.cljs$core$IFn$_invoke$arity$2 = (function (routes,name){
return route_map.core.url.call(null,routes,name,cljs.core.PersistentVector.EMPTY);
});

route_map.core.url.cljs$core$IFn$_invoke$arity$3 = (function (routes,name,params){
return route_map.core.find_url.call(null,routes,name,"",params,"");
});

route_map.core.url.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=core.js.map
