// Compiled by ClojureScript 1.10.520 {}
goog.provide('zframes.storage');
goog.require('cljs.core');
goog.require('re_frame.core');
zframes.storage.keywordize = (function zframes$storage$keywordize(x){
return cljs.core.js__GT_clj.call(null,x,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
});
zframes.storage.remove_item = (function zframes$storage$remove_item(key){
return window.localStorage.removeItem(key);
});
zframes.storage.set_item = (function zframes$storage$set_item(key,val){
return window.localStorage.setItem(cljs.core.name.call(null,key),encodeURIComponent(JSON.stringify(cljs.core.clj__GT_js.call(null,val))));
});
zframes.storage.get_item = (function zframes$storage$get_item(key){
try{return zframes.storage.keywordize.call(null,JSON.parse(decodeURIComponent(window.localStorage.getItem(cljs.core.name.call(null,key)))));
}catch (e29551){if((e29551 instanceof Object)){
var e = e29551;
zframes.storage.remove_item.call(null,key);

return null;
} else {
throw e29551;

}
}});
re_frame.core.reg_cofx.call(null,new cljs.core.Keyword("storage","get","storage/get",-729607478),(function (coeffects,keys){
return cljs.core.reduce.call(null,(function (coef,k){
return cljs.core.assoc_in.call(null,coef,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"storage","storage",1867247511),k], null),zframes.storage.get_item.call(null,k));
}),coeffects,keys);
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("storage","set","storage/set",-2122866619),(function (items){
var seq__29552 = cljs.core.seq.call(null,items);
var chunk__29553 = null;
var count__29554 = (0);
var i__29555 = (0);
while(true){
if((i__29555 < count__29554)){
var vec__29562 = cljs.core._nth.call(null,chunk__29553,i__29555);
var k = cljs.core.nth.call(null,vec__29562,(0),null);
var v = cljs.core.nth.call(null,vec__29562,(1),null);
zframes.storage.set_item.call(null,k,v);


var G__29568 = seq__29552;
var G__29569 = chunk__29553;
var G__29570 = count__29554;
var G__29571 = (i__29555 + (1));
seq__29552 = G__29568;
chunk__29553 = G__29569;
count__29554 = G__29570;
i__29555 = G__29571;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__29552);
if(temp__5735__auto__){
var seq__29552__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29552__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__29552__$1);
var G__29572 = cljs.core.chunk_rest.call(null,seq__29552__$1);
var G__29573 = c__4550__auto__;
var G__29574 = cljs.core.count.call(null,c__4550__auto__);
var G__29575 = (0);
seq__29552 = G__29572;
chunk__29553 = G__29573;
count__29554 = G__29574;
i__29555 = G__29575;
continue;
} else {
var vec__29565 = cljs.core.first.call(null,seq__29552__$1);
var k = cljs.core.nth.call(null,vec__29565,(0),null);
var v = cljs.core.nth.call(null,vec__29565,(1),null);
zframes.storage.set_item.call(null,k,v);


var G__29576 = cljs.core.next.call(null,seq__29552__$1);
var G__29577 = null;
var G__29578 = (0);
var G__29579 = (0);
seq__29552 = G__29576;
chunk__29553 = G__29577;
count__29554 = G__29578;
i__29555 = G__29579;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("storage","remove","storage/remove",1735937899),(function (keys){
var seq__29580 = cljs.core.seq.call(null,keys);
var chunk__29581 = null;
var count__29582 = (0);
var i__29583 = (0);
while(true){
if((i__29583 < count__29582)){
var k = cljs.core._nth.call(null,chunk__29581,i__29583);
zframes.storage.remove_item.call(null,cljs.core.name.call(null,k));


var G__29584 = seq__29580;
var G__29585 = chunk__29581;
var G__29586 = count__29582;
var G__29587 = (i__29583 + (1));
seq__29580 = G__29584;
chunk__29581 = G__29585;
count__29582 = G__29586;
i__29583 = G__29587;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__29580);
if(temp__5735__auto__){
var seq__29580__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29580__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__29580__$1);
var G__29588 = cljs.core.chunk_rest.call(null,seq__29580__$1);
var G__29589 = c__4550__auto__;
var G__29590 = cljs.core.count.call(null,c__4550__auto__);
var G__29591 = (0);
seq__29580 = G__29588;
chunk__29581 = G__29589;
count__29582 = G__29590;
i__29583 = G__29591;
continue;
} else {
var k = cljs.core.first.call(null,seq__29580__$1);
zframes.storage.remove_item.call(null,cljs.core.name.call(null,k));


var G__29592 = cljs.core.next.call(null,seq__29580__$1);
var G__29593 = null;
var G__29594 = (0);
var G__29595 = (0);
seq__29580 = G__29592;
chunk__29581 = G__29593;
count__29582 = G__29594;
i__29583 = G__29595;
continue;
}
} else {
return null;
}
}
break;
}
}));

//# sourceMappingURL=storage.js.map
