// Compiled by ClojureScript 1.10.520 {}
goog.provide('ui.zframes.modal');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('ui.styles');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("ui.zframes.modal","modal","ui.zframes.modal/modal",754837095),(function (db,p__30931){
var vec__30932 = p__30931;
var _ = cljs.core.nth.call(null,vec__30932,(0),null);
var modal = cljs.core.nth.call(null,vec__30932,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("ui.zframes.modal","modal","ui.zframes.modal/modal",754837095),modal);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("ui.zframes.modal","close","ui.zframes.modal/close",65224723),(function (db,p__30935){
var vec__30936 = p__30935;
var _ = cljs.core.nth.call(null,vec__30936,(0),null);
var modal = cljs.core.nth.call(null,vec__30936,(1),null);
return cljs.core.dissoc.call(null,db,new cljs.core.Keyword("ui.zframes.modal","modal","ui.zframes.modal/modal",754837095));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("ui.zframes.modal","modal","ui.zframes.modal/modal",754837095),(function (db,_){
return new cljs.core.Keyword("ui.zframes.modal","modal","ui.zframes.modal/modal",754837095).cljs$core$IFn$_invoke$arity$1(db);
}));
ui.zframes.modal.modal_styles = ui.styles.style.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".zmodal",".zmodal",-1138140066),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"99",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"13px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".bottom",".bottom",-1866052998),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"13px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".modal-content",".modal-content",245331270),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"0 0px 8px #000",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"0",new cljs.core.Keyword(null,"border","border",1444987323),"none",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgb(37, 37, 38)"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".modal-header",".modal-header",1135935272),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#007acc",new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"border","border",1444987323),"none",new cljs.core.Keyword(null,"padding","padding",1660304693),"3px 13px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"13px",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"0"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".modal-body",".modal-body",1596633899),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"#cccccc",new cljs.core.Keyword(null,"padding","padding",1660304693),"13px"], null)], null)], null));
ui.zframes.modal.modal = (function ui$zframes$modal$modal(){
var modal_STAR_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui.zframes.modal","modal","ui.zframes.modal/modal",754837095)], null));
return ((function (modal_STAR_){
return (function (){
var temp__5735__auto__ = cljs.core.deref.call(null,modal_STAR_);
if(cljs.core.truth_(temp__5735__auto__)){
var modal = temp__5735__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.zmodal","div.zmodal",-774293702),ui.zframes.modal.modal_styles,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-fade","div.modal-fade",-654242710),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transition","transition",765692007),"opacity .15s linear"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-dialog.modal-dialog-centered","div.modal-dialog.modal-dialog-centered",1807847498),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"role","role",-736691072),"document",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (modal,temp__5735__auto__,modal_STAR_){
return (function (p1__30939_SHARP_){
return p1__30939_SHARP_.preventDefault();
});})(modal,temp__5735__auto__,modal_STAR_))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-content","div.modal-content",-83470844),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-header.flex","div.modal-header.flex",-1328059815),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.grow","div.grow",-1895960225),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(modal)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ptbl","div.ptbl",1778494119),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-times","i.fa.fa-times",923360983),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(new cljs.core.Keyword(null,"persistent","persistent",885415113).cljs$core$IFn$_invoke$arity$1(modal))?null:((function (modal,temp__5735__auto__,modal_STAR_){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui.zframes.modal","modal","ui.zframes.modal/modal",754837095),null], null));
});})(modal,temp__5735__auto__,modal_STAR_))
)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-body","div.modal-body",-2141892968),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(modal)], null)], null)], null)], null)], null);
} else {
return null;
}
});
;})(modal_STAR_))
});
ui.zframes.modal.confirm_delete = (function ui$zframes$modal$confirm_delete(dispatch){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"title","title",636505583),"\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435",new cljs.core.Keyword(null,"body","body",-2049205669),"\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C?",new cljs.core.Keyword(null,"accept","accept",1874130431),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"\u0414\u0430",new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (){
return re_frame.core.dispatch.call(null,dispatch);
})], null),new cljs.core.Keyword(null,"cancel","cancel",-1964088360),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"\u041D\u0435\u0442"], null),new cljs.core.Keyword(null,"persistent","persistent",885415113),true], null);
});

//# sourceMappingURL=modal.js.map
