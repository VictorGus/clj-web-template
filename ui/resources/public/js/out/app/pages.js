// Compiled by ClojureScript 1.10.520 {}
goog.provide('app.pages');
goog.require('cljs.core');
goog.require('re_frame.core');
if((typeof app !== 'undefined') && (typeof app.pages !== 'undefined') && (typeof app.pages.pages !== 'undefined')){
} else {
app.pages.pages = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pages","get-in","pages/get-in",586559572),(function (db,p__11376){
var vec__11377 = p__11376;
var _ = cljs.core.nth.call(null,vec__11377,(0),null);
var path = cljs.core.nth.call(null,vec__11377,(1),null);
return cljs.core.get_in.call(null,db,path);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pages","data","pages/data",129617787),(function (db,p__11380){
var vec__11381 = p__11380;
var _ = cljs.core.nth.call(null,vec__11381,(0),null);
var pid = cljs.core.nth.call(null,vec__11381,(1),null);
return cljs.core.get.call(null,db,pid);
}));
app.pages.reg_page = (function app$pages$reg_page(key,page){
return cljs.core.swap_BANG_.call(null,app.pages.pages,cljs.core.assoc,key,page);
});
app.pages.subscribed_page = (function app$pages$subscribed_page(page_idx,view){
return (function (params){
var m = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [page_idx], null));
return ((function (m){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [view,cljs.core.deref.call(null,m),params], null);
});
;})(m))
});
});
/**
 * register subscribed page under keyword for routing
 */
app.pages.reg_subs_page = (function app$pages$reg_subs_page(var_args){
var args__4736__auto__ = [];
var len__4730__auto___11391 = arguments.length;
var i__4731__auto___11392 = (0);
while(true){
if((i__4731__auto___11392 < len__4730__auto___11391)){
args__4736__auto__.push((arguments[i__4731__auto___11392]));

var G__11393 = (i__4731__auto___11392 + (1));
i__4731__auto___11392 = G__11393;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return app.pages.reg_subs_page.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

app.pages.reg_subs_page.cljs$core$IFn$_invoke$arity$variadic = (function (key,f,p__11387){
var vec__11388 = p__11387;
var layout_key = cljs.core.nth.call(null,vec__11388,(0),null);
return cljs.core.swap_BANG_.call(null,app.pages.pages,cljs.core.assoc,key,app.pages.subscribed_page.call(null,key,f));
});

app.pages.reg_subs_page.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
app.pages.reg_subs_page.cljs$lang$applyTo = (function (seq11384){
var G__11385 = cljs.core.first.call(null,seq11384);
var seq11384__$1 = cljs.core.next.call(null,seq11384);
var G__11386 = cljs.core.first.call(null,seq11384__$1);
var seq11384__$2 = cljs.core.next.call(null,seq11384__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11385,G__11386,seq11384__$2);
});

re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"config","config",994861415),(function (db,path){
return cljs.core.get_in.call(null,db,path);
}));

//# sourceMappingURL=pages.js.map
