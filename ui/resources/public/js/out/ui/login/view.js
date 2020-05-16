// Compiled by ClojureScript 1.10.520 {}
goog.provide('ui.login.view');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('ui.zframes.redirect');
goog.require('ui.zframes.flash');
goog.require('ui.login.model');
goog.require('ui.login.form');
goog.require('ui.styles');
goog.require('ui.basic_components.form.view');
goog.require('ui.pages');
ui.login.view.login_style = ui.styles.style.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".info-header",".info-header",-856706906),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"22px",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"900",new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#0069d9"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".flashes",".flashes",732744110),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"top","top",-1856271961),"20px",new cljs.core.Keyword(null,"right","right",-452581833),"20px",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"500px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(200)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"20px"], null)], null)], null));
ui.pages.reg_subs_page.call(null,ui.login.model.index,(function (_,___$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.zframes.flash.flashes], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container.d-flex.h-100","div.container.d-flex.h-100",488044601),ui.login.view.login_style,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.align-self-center.w-100","div.row.align-self-center.w-100",1170934355),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-6.mx-auto","div.col-6.mx-auto",991505852),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-body","div.card-body",1538579065),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-header.info-header","div.card-header.info-header",-1034867395),"Sign in form"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-body.border","div.card-body.border",-1118364163),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.text-muted","label.text-muted",2094313915),"Login"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.basic_components.form.view.form_input,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.login.form.form_path,new cljs.core.Keyword(null,"login","login",55217519)], null),"Enter login"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.text-muted","label.text-muted",2094313915),"Password"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.basic_components.form.view.form_password,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.login.form.form_path,new cljs.core.Keyword(null,"password","password",417022471)], null),"Enter password"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-outline-primary.btn-block.mt-3.mb-2","button.btn.btn-outline-primary.btn-block.mt-3.mb-2",-2050978406),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui.login.model","sign-in","ui.login.model/sign-in",-1609714256)], null));
})], null),"Sign in"], null)], null)], null)], null)], null)], null)], null);
}));

//# sourceMappingURL=view.js.map