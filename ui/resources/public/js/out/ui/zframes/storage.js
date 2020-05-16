// Compiled by ClojureScript 1.10.520 {}
goog.provide('ui.zframes.storage');
goog.require('cljs.core');
goog.require('re_frame.core');
ui.zframes.storage.keywordize = (function ui$zframes$storage$keywordize(x){
return cljs.core.js__GT_clj.call(null,x,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
});
ui.zframes.storage.remove_item = (function ui$zframes$storage$remove_item(key){
return window.localStorage.removeItem(key);
});
ui.zframes.storage.set_item = (function ui$zframes$storage$set_item(key,val){
return window.localStorage.setItem(cljs.core.name.call(null,key),encodeURIComponent(JSON.stringify(cljs.core.clj__GT_js.call(null,val))));
});
ui.zframes.storage.get_item = (function ui$zframes$storage$get_item(key){
try{return ui.zframes.storage.keywordize.call(null,JSON.parse(decodeURIComponent(window.localStorage.getItem(cljs.core.name.call(null,key)))));
}catch (e47156){if((e47156 instanceof Object)){
var e = e47156;
ui.zframes.storage.remove_item.call(null,key);

return null;
} else {
throw e47156;

}
}});
re_frame.core.reg_cofx.call(null,new cljs.core.Keyword("storage","get","storage/get",-729607478),(function (coeffects,keys){
return cljs.core.reduce.call(null,(function (coef,k){
return cljs.core.assoc_in.call(null,coef,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"storage","storage",1867247511),k], null),ui.zframes.storage.get_item.call(null,k));
}),coeffects,keys);
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("storage","set","storage/set",-2122866619),(function (items){
var seq__47157 = cljs.core.seq.call(null,items);
var chunk__47158 = null;
var count__47159 = (0);
var i__47160 = (0);
while(true){
if((i__47160 < count__47159)){
var vec__47167 = cljs.core._nth.call(null,chunk__47158,i__47160);
var k = cljs.core.nth.call(null,vec__47167,(0),null);
var v = cljs.core.nth.call(null,vec__47167,(1),null);
ui.zframes.storage.set_item.call(null,k,v);


var G__47173 = seq__47157;
var G__47174 = chunk__47158;
var G__47175 = count__47159;
var G__47176 = (i__47160 + (1));
seq__47157 = G__47173;
chunk__47158 = G__47174;
count__47159 = G__47175;
i__47160 = G__47176;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__47157);
if(temp__5735__auto__){
var seq__47157__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47157__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__47157__$1);
var G__47177 = cljs.core.chunk_rest.call(null,seq__47157__$1);
var G__47178 = c__4550__auto__;
var G__47179 = cljs.core.count.call(null,c__4550__auto__);
var G__47180 = (0);
seq__47157 = G__47177;
chunk__47158 = G__47178;
count__47159 = G__47179;
i__47160 = G__47180;
continue;
} else {
var vec__47170 = cljs.core.first.call(null,seq__47157__$1);
var k = cljs.core.nth.call(null,vec__47170,(0),null);
var v = cljs.core.nth.call(null,vec__47170,(1),null);
ui.zframes.storage.set_item.call(null,k,v);


var G__47181 = cljs.core.next.call(null,seq__47157__$1);
var G__47182 = null;
var G__47183 = (0);
var G__47184 = (0);
seq__47157 = G__47181;
chunk__47158 = G__47182;
count__47159 = G__47183;
i__47160 = G__47184;
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
var seq__47185 = cljs.core.seq.call(null,keys);
var chunk__47186 = null;
var count__47187 = (0);
var i__47188 = (0);
while(true){
if((i__47188 < count__47187)){
var k = cljs.core._nth.call(null,chunk__47186,i__47188);
ui.zframes.storage.remove_item.call(null,cljs.core.name.call(null,k));


var G__47189 = seq__47185;
var G__47190 = chunk__47186;
var G__47191 = count__47187;
var G__47192 = (i__47188 + (1));
seq__47185 = G__47189;
chunk__47186 = G__47190;
count__47187 = G__47191;
i__47188 = G__47192;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__47185);
if(temp__5735__auto__){
var seq__47185__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47185__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__47185__$1);
var G__47193 = cljs.core.chunk_rest.call(null,seq__47185__$1);
var G__47194 = c__4550__auto__;
var G__47195 = cljs.core.count.call(null,c__4550__auto__);
var G__47196 = (0);
seq__47185 = G__47193;
chunk__47186 = G__47194;
count__47187 = G__47195;
i__47188 = G__47196;
continue;
} else {
var k = cljs.core.first.call(null,seq__47185__$1);
ui.zframes.storage.remove_item.call(null,cljs.core.name.call(null,k));


var G__47197 = cljs.core.next.call(null,seq__47185__$1);
var G__47198 = null;
var G__47199 = (0);
var G__47200 = (0);
seq__47185 = G__47197;
chunk__47186 = G__47198;
count__47187 = G__47199;
i__47188 = G__47200;
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
