// Compiled by ClojureScript 0.0-2511
goog.provide('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.ioc_helpers.FN_IDX = (0);
cljs.core.async.impl.ioc_helpers.STATE_IDX = (1);
cljs.core.async.impl.ioc_helpers.VALUE_IDX = (2);
cljs.core.async.impl.ioc_helpers.BINDINGS_IDX = (3);
cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES = (4);
cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION = (5);
cljs.core.async.impl.ioc_helpers.USER_START_IDX = (6);
cljs.core.async.impl.ioc_helpers.aset_object = (function aset_object(arr,idx,o){
return (arr[idx][o]);
});
cljs.core.async.impl.ioc_helpers.aget_object = (function aget_object(arr,idx){
return (arr[idx]);
});
/**
* Returns true if the machine is in a finished state
*/
cljs.core.async.impl.ioc_helpers.finished_QMARK_ = (function finished_QMARK_(state_array){
return cljs.core.keyword_identical_QMARK_((state_array[cljs.core.async.impl.ioc_helpers.STATE_IDX]),cljs.core.constant$keyword$58);
});
cljs.core.async.impl.ioc_helpers.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.impl.ioc_helpers.t28657 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.impl.ioc_helpers.t28657 = (function (f,fn_handler,meta28658){
this.f = f;
this.fn_handler = fn_handler;
this.meta28658 = meta28658;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.impl.ioc_helpers.t28657.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.impl.ioc_helpers.t28657.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.impl.ioc_helpers.t28657.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.impl.ioc_helpers.t28657.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28659){
var self__ = this;
var _28659__$1 = this;
return self__.meta28658;
});

cljs.core.async.impl.ioc_helpers.t28657.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28659,meta28658__$1){
var self__ = this;
var _28659__$1 = this;
return (new cljs.core.async.impl.ioc_helpers.t28657(self__.f,self__.fn_handler,meta28658__$1));
});

cljs.core.async.impl.ioc_helpers.t28657.cljs$lang$type = true;

cljs.core.async.impl.ioc_helpers.t28657.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t28657";

cljs.core.async.impl.ioc_helpers.t28657.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write(writer__4226__auto__,"cljs.core.async.impl.ioc-helpers/t28657");
});

cljs.core.async.impl.ioc_helpers.__GT_t28657 = (function __GT_t28657(f__$1,fn_handler__$1,meta28658){
return (new cljs.core.async.impl.ioc_helpers.t28657(f__$1,fn_handler__$1,meta28658));
});

}

return (new cljs.core.async.impl.ioc_helpers.t28657(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$29,19,cljs.core.constant$keyword$30,30,cljs.core.constant$keyword$31,3,cljs.core.constant$keyword$32,27,cljs.core.constant$keyword$33,"/Users/twer/dev/clojure/async-tut1/target/cljsbuild-compiler-1/cljs/core/async/impl/ioc_helpers.cljs"], null)));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function run_state_machine(state){
return cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.FN_IDX).call(null,state);
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function run_state_machine_wrapped(state){
try{return cljs.core.async.impl.ioc_helpers.run_state_machine(state);
}catch (e28661){if((e28661 instanceof Object)){
var ex = e28661;
cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.USER_START_IDX).cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);

throw ex;
} else {
throw e28661;

}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function take_BANG_(state,blk,c){
var temp__4124__auto__ = c.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(null,cljs.core.async.impl.ioc_helpers.fn_handler((function (x){
var statearr_28665_28668 = state;
(statearr_28665_28668[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = x);

(statearr_28665_28668[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));
if(cljs.core.truth_(temp__4124__auto__)){
var cb = temp__4124__auto__;
var statearr_28666_28669 = state;
(statearr_28666_28669[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__28667 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28667) : cljs.core.deref.call(null,G__28667));
})());

(statearr_28666_28669[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.constant$keyword$59;
} else {
return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function put_BANG_(state,blk,c,val){
var temp__4124__auto__ = c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,val,cljs.core.async.impl.ioc_helpers.fn_handler((function (){
var statearr_28673_28676 = state;
(statearr_28673_28676[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = null);

(statearr_28673_28676[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));
if(cljs.core.truth_(temp__4124__auto__)){
var cb = temp__4124__auto__;
var statearr_28674_28677 = state;
(statearr_28674_28677[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__28675 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28675) : cljs.core.deref.call(null,G__28675));
})());

(statearr_28674_28677[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.constant$keyword$59;
} else {
return null;
}
});
/**
* @param {...*} var_args
*/
cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__28678){
var map__28684 = p__28678;
var map__28684__$1 = ((cljs.core.seq_QMARK_(map__28684))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28684):map__28684);
var opts = map__28684__$1;
var statearr_28685_28689 = state;
(statearr_28685_28689[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts(((function (map__28684,map__28684__$1,opts){
return (function (val){
var statearr_28686_28690 = state;
(statearr_28686_28690[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__28684,map__28684__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_28687_28691 = state;
(statearr_28687_28691[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__28688 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28688) : cljs.core.deref.call(null,G__28688));
})());


return cljs.core.constant$keyword$59;
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__28678 = null;
if (arguments.length > 3) {
  p__28678 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__28678);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__28692){
var state = cljs.core.first(arglist__28692);
arglist__28692 = cljs.core.next(arglist__28692);
var cont_block = cljs.core.first(arglist__28692);
arglist__28692 = cljs.core.next(arglist__28692);
var ports = cljs.core.first(arglist__28692);
var p__28678 = cljs.core.rest(arglist__28692);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__28678);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
cljs.core.async.impl.ioc_helpers.return_chan = (function return_chan(state,value){
var c = (state[cljs.core.async.impl.ioc_helpers.USER_START_IDX]);
if((value == null)){
} else {
c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,value,cljs.core.async.impl.ioc_helpers.fn_handler(((function (c){
return (function (){
return null;
});})(c))
));
}

c.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);

return c;
});

/**
* @constructor
* @param {*} catch_block
* @param {*} catch_exception
* @param {*} finally_block
* @param {*} continue_block
* @param {*} prev
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
cljs.core.async.impl.ioc_helpers.ExceptionFrame = (function (catch_block,catch_exception,finally_block,continue_block,prev,__meta,__extmap,__hash){
this.catch_block = catch_block;
this.catch_exception = catch_exception;
this.finally_block = finally_block;
this.continue_block = continue_block;
this.prev = prev;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4241__auto__,k__4242__auto__){
var self__ = this;
var this__4241__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4241__auto____$1,k__4242__auto__,null);
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4243__auto__,k28694,else__4244__auto__){
var self__ = this;
var this__4243__auto____$1 = this;
var G__28696 = (((k28694 instanceof cljs.core.Keyword))?k28694.fqn:null);
switch (G__28696) {
case "prev":
return self__.prev;

break;
case "continue-block":
return self__.continue_block;

break;
case "finally-block":
return self__.finally_block;

break;
case "catch-exception":
return self__.catch_exception;

break;
case "catch-block":
return self__.catch_block;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28694,else__4244__auto__);

}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4255__auto__,writer__4256__auto__,opts__4257__auto__){
var self__ = this;
var this__4255__auto____$1 = this;
var pr_pair__4258__auto__ = ((function (this__4255__auto____$1){
return (function (keyval__4259__auto__){
return cljs.core.pr_sequential_writer(writer__4256__auto__,cljs.core.pr_writer,""," ","",opts__4257__auto__,keyval__4259__auto__);
});})(this__4255__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4256__auto__,pr_pair__4258__auto__,"#cljs.core.async.impl.ioc-helpers.ExceptionFrame{",", ","}",opts__4257__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$60,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$61,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$62,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$63,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$64,self__.prev],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4239__auto__){
var self__ = this;
var this__4239__auto____$1 = this;
return self__.__meta;
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4235__auto__){
var self__ = this;
var this__4235__auto____$1 = this;
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4245__auto__){
var self__ = this;
var this__4245__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4236__auto__){
var self__ = this;
var this__4236__auto____$1 = this;
var h__4059__auto__ = self__.__hash;
if(!((h__4059__auto__ == null))){
return h__4059__auto__;
} else {
var h__4059__auto____$1 = cljs.core.hash_imap(this__4236__auto____$1);
self__.__hash = h__4059__auto____$1;

return h__4059__auto____$1;
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4237__auto__,other__4238__auto__){
var self__ = this;
var this__4237__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3626__auto__ = other__4238__auto__;
if(cljs.core.truth_(and__3626__auto__)){
return ((this__4237__auto____$1.constructor === other__4238__auto__.constructor)) && (cljs.core.equiv_map(this__4237__auto____$1,other__4238__auto__));
} else {
return and__3626__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4250__auto__,k__4251__auto__){
var self__ = this;
var this__4250__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$62,null,cljs.core.constant$keyword$60,null,cljs.core.constant$keyword$61,null,cljs.core.constant$keyword$64,null,cljs.core.constant$keyword$63,null], null), null),k__4251__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4250__auto____$1),self__.__meta),k__4251__auto__);
} else {
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4251__auto__)),null));
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4248__auto__,k__4249__auto__,G__28693){
var self__ = this;
var this__4248__auto____$1 = this;
var pred__28697 = cljs.core.keyword_identical_QMARK_;
var expr__28698 = k__4249__auto__;
if(cljs.core.truth_((function (){var G__28700 = cljs.core.constant$keyword$60;
var G__28701 = expr__28698;
return (pred__28697.cljs$core$IFn$_invoke$arity$2 ? pred__28697.cljs$core$IFn$_invoke$arity$2(G__28700,G__28701) : pred__28697.call(null,G__28700,G__28701));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(G__28693,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28702 = cljs.core.constant$keyword$61;
var G__28703 = expr__28698;
return (pred__28697.cljs$core$IFn$_invoke$arity$2 ? pred__28697.cljs$core$IFn$_invoke$arity$2(G__28702,G__28703) : pred__28697.call(null,G__28702,G__28703));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,G__28693,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28704 = cljs.core.constant$keyword$62;
var G__28705 = expr__28698;
return (pred__28697.cljs$core$IFn$_invoke$arity$2 ? pred__28697.cljs$core$IFn$_invoke$arity$2(G__28704,G__28705) : pred__28697.call(null,G__28704,G__28705));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,G__28693,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28706 = cljs.core.constant$keyword$63;
var G__28707 = expr__28698;
return (pred__28697.cljs$core$IFn$_invoke$arity$2 ? pred__28697.cljs$core$IFn$_invoke$arity$2(G__28706,G__28707) : pred__28697.call(null,G__28706,G__28707));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,G__28693,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28708 = cljs.core.constant$keyword$64;
var G__28709 = expr__28698;
return (pred__28697.cljs$core$IFn$_invoke$arity$2 ? pred__28697.cljs$core$IFn$_invoke$arity$2(G__28708,G__28709) : pred__28697.call(null,G__28708,G__28709));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,G__28693,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4249__auto__,G__28693),null));
}
}
}
}
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4253__auto__){
var self__ = this;
var this__4253__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$60,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$61,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$62,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$63,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$64,self__.prev],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4240__auto__,G__28693){
var self__ = this;
var this__4240__auto____$1 = this;
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,G__28693,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4246__auto__,entry__4247__auto__){
var self__ = this;
var this__4246__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4247__auto__)){
return cljs.core._assoc(this__4246__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4247__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4247__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4246__auto____$1,entry__4247__auto__);
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$type = true;

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrSeq = (function (this__4275__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrWriter = (function (this__4275__auto__,writer__4276__auto__){
return cljs.core._write(writer__4276__auto__,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});

cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame = (function __GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev,null,null,null));
});

cljs.core.async.impl.ioc_helpers.map__GT_ExceptionFrame = (function map__GT_ExceptionFrame(G__28695){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(cljs.core.constant$keyword$60.cljs$core$IFn$_invoke$arity$1(G__28695),cljs.core.constant$keyword$61.cljs$core$IFn$_invoke$arity$1(G__28695),cljs.core.constant$keyword$62.cljs$core$IFn$_invoke$arity$1(G__28695),cljs.core.constant$keyword$63.cljs$core$IFn$_invoke$arity$1(G__28695),cljs.core.constant$keyword$64.cljs$core$IFn$_invoke$arity$1(G__28695),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__28695,cljs.core.constant$keyword$60,cljs.core.array_seq([cljs.core.constant$keyword$61,cljs.core.constant$keyword$62,cljs.core.constant$keyword$63,cljs.core.constant$keyword$64], 0)),null));
});

cljs.core.async.impl.ioc_helpers.add_exception_frame = (function add_exception_frame(state,catch_block,catch_exception,finally_block,continue_block){
var statearr_28712 = state;
(statearr_28712[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES)));

return statearr_28712;
});
cljs.core.async.impl.ioc_helpers.process_exception = (function process_exception(state){
while(true){
var exception_frame = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES);
var catch_block = cljs.core.constant$keyword$60.cljs$core$IFn$_invoke$arity$1(exception_frame);
var catch_exception = cljs.core.constant$keyword$61.cljs$core$IFn$_invoke$arity$1(exception_frame);
var exception = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION);
if(cljs.core.truth_((function (){var and__3626__auto__ = exception;
if(cljs.core.truth_(and__3626__auto__)){
return cljs.core.not(exception_frame);
} else {
return and__3626__auto__;
}
})())){
throw exception;
} else {
if(cljs.core.truth_((function (){var and__3626__auto__ = exception;
if(cljs.core.truth_(and__3626__auto__)){
var and__3626__auto____$1 = catch_block;
if(cljs.core.truth_(and__3626__auto____$1)){
return (exception instanceof catch_exception);
} else {
return and__3626__auto____$1;
}
} else {
return and__3626__auto__;
}
})())){
var statearr_28718 = state;
(statearr_28718[cljs.core.async.impl.ioc_helpers.STATE_IDX] = catch_block);

(statearr_28718[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = exception);

(statearr_28718[cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION] = null);

(statearr_28718[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(exception_frame,cljs.core.constant$keyword$60,null,cljs.core.array_seq([cljs.core.constant$keyword$61,null], 0)));

return statearr_28718;
} else {
if(cljs.core.truth_((function (){var and__3626__auto__ = exception;
if(cljs.core.truth_(and__3626__auto__)){
return (cljs.core.not(catch_block)) && (cljs.core.not(cljs.core.constant$keyword$62.cljs$core$IFn$_invoke$arity$1(exception_frame)));
} else {
return and__3626__auto__;
}
})())){
var statearr_28719_28723 = state;
(statearr_28719_28723[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.constant$keyword$64.cljs$core$IFn$_invoke$arity$1(exception_frame));


var G__28724 = state;
state = G__28724;
continue;
} else {
if(cljs.core.truth_((function (){var and__3626__auto__ = exception;
if(cljs.core.truth_(and__3626__auto__)){
var and__3626__auto____$1 = cljs.core.not(catch_block);
if(and__3626__auto____$1){
return cljs.core.constant$keyword$62.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else {
return and__3626__auto____$1;
}
} else {
return and__3626__auto__;
}
})())){
var statearr_28720 = state;
(statearr_28720[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$62.cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_28720[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.constant$keyword$62,null));

return statearr_28720;
} else {
if(cljs.core.truth_((function (){var and__3626__auto__ = cljs.core.not(exception);
if(and__3626__auto__){
return cljs.core.constant$keyword$62.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else {
return and__3626__auto__;
}
})())){
var statearr_28721 = state;
(statearr_28721[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$62.cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_28721[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.constant$keyword$62,null));

return statearr_28721;
} else {
if((cljs.core.not(exception)) && (cljs.core.not(cljs.core.constant$keyword$62.cljs$core$IFn$_invoke$arity$1(exception_frame)))){
var statearr_28722 = state;
(statearr_28722[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$63.cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_28722[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.constant$keyword$64.cljs$core$IFn$_invoke$arity$1(exception_frame));

return statearr_28722;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("No matching clause"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([false], 0)))].join('')));


}
}
}
}
}
}
break;
}
});
