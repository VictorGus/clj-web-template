// Compiled by ClojureScript 1.10.520 {}
goog.provide('ui.pages');
goog.require('cljs.core');
goog.require('re_frame.core');
if((typeof ui !== 'undefined') && (typeof ui.pages !== 'undefined') && (typeof ui.pages.pages !== 'undefined')){
} else {
ui.pages.pages = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pages","get-in","pages/get-in",586559572),(function (db,p__12151){
var vec__12152 = p__12151;
var _ = cljs.core.nth.call(null,vec__12152,(0),null);
var path = cljs.core.nth.call(null,vec__12152,(1),null);
return cljs.core.get_in.call(null,db,path);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pages","data","pages/data",129617787),(function (db,p__12155){
var vec__12156 = p__12155;
var _ = cljs.core.nth.call(null,vec__12156,(0),null);
var pid = cljs.core.nth.call(null,vec__12156,(1),null);
return cljs.core.get.call(null,db,pid);
}));
ui.pages.reg_page = (function ui$pages$reg_page(key,page){
return cljs.core.swap_BANG_.call(null,ui.pages.pages,cljs.core.assoc,key,page);
});
ui.pages.subscribed_page = (function ui$pages$subscribed_page(page_idx,view){
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
ui.pages.reg_subs_page = (function ui$pages$reg_subs_page(var_args){
var args__4736__auto__ = [];
var len__4730__auto___12166 = arguments.length;
var i__4731__auto___12167 = (0);
while(true){
if((i__4731__auto___12167 < len__4730__auto___12166)){
args__4736__auto__.push((arguments[i__4731__auto___12167]));

var G__12168 = (i__4731__auto___12167 + (1));
i__4731__auto___12167 = G__12168;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return ui.pages.reg_subs_page.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

ui.pages.reg_subs_page.cljs$core$IFn$_invoke$arity$variadic = (function (key,f,p__12162){
var vec__12163 = p__12162;
var layout_key = cljs.core.nth.call(null,vec__12163,(0),null);
return cljs.core.swap_BANG_.call(null,ui.pages.pages,cljs.core.assoc,key,ui.pages.subscribed_page.call(null,key,f));
});

ui.pages.reg_subs_page.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
ui.pages.reg_subs_page.cljs$lang$applyTo = (function (seq12159){
var G__12160 = cljs.core.first.call(null,seq12159);
var seq12159__$1 = cljs.core.next.call(null,seq12159);
var G__12161 = cljs.core.first.call(null,seq12159__$1);
var seq12159__$2 = cljs.core.next.call(null,seq12159__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12160,G__12161,seq12159__$2);
});

re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"config","config",994861415),(function (db,path){
return cljs.core.get_in.call(null,db,path);
}));

//# sourceMappingURL=pages.js.map
