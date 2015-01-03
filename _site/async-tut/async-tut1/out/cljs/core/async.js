// Compiled by ClojureScript 0.0-2511
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.t20581 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20581 = (function (f,fn_handler,meta20582){
this.f = f;
this.fn_handler = fn_handler;
this.meta20582 = meta20582;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20581.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t20581.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t20581.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t20581.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20583){
var self__ = this;
var _20583__$1 = this;
return self__.meta20582;
});

cljs.core.async.t20581.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20583,meta20582__$1){
var self__ = this;
var _20583__$1 = this;
return (new cljs.core.async.t20581(self__.f,self__.fn_handler,meta20582__$1));
});

cljs.core.async.t20581.cljs$lang$type = true;

cljs.core.async.t20581.cljs$lang$ctorStr = "cljs.core.async/t20581";

cljs.core.async.t20581.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write.call(null,writer__4226__auto__,"cljs.core.async/t20581");
});

cljs.core.async.__GT_t20581 = (function __GT_t20581(f__$1,fn_handler__$1,meta20582){
return (new cljs.core.async.t20581(f__$1,fn_handler__$1,meta20582));
});

}

return (new cljs.core.async.t20581(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),15,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),12,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/twer/dev/clojure/async-tut1/out/cljs/core/async.cljs"], null)));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){
var G__20585 = buff;
if(G__20585){
var bit__4319__auto__ = null;
if(cljs.core.truth_((function (){var or__3638__auto__ = bit__4319__auto__;
if(cljs.core.truth_(or__3638__auto__)){
return or__3638__auto__;
} else {
return G__20585.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__20585.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__20585);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__20585);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){
return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));

});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){
return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_20586 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_20586);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_20586,ret){
return (function (){
return fn1.call(null,val_20586);
});})(val_20586,ret))
);
}
} else {
}

return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){
return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));

});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){
return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){
return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));
if(cljs.core.truth_((function (){var and__3626__auto__ = ret;
if(cljs.core.truth_(and__3626__auto__)){
return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else {
return and__3626__auto__;
}
})())){
if(cljs.core.truth_(on_caller_QMARK_)){
fn0.call(null);
} else {
cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else {
}

return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){
var a = (new Array(n));
var n__4525__auto___20587 = n;
var x_20588 = (0);
while(true){
if((x_20588 < n__4525__auto___20587)){
(a[x_20588] = (0));

var G__20589 = (x_20588 + (1));
x_20588 = G__20589;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__20590 = (i + (1));
i = G__20590;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t20594 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20594 = (function (flag,alt_flag,meta20595){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta20595 = meta20595;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20594.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t20594.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t20594.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t20594.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_20596){
var self__ = this;
var _20596__$1 = this;
return self__.meta20595;
});})(flag))
;

cljs.core.async.t20594.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_20596,meta20595__$1){
var self__ = this;
var _20596__$1 = this;
return (new cljs.core.async.t20594(self__.flag,self__.alt_flag,meta20595__$1));
});})(flag))
;

cljs.core.async.t20594.cljs$lang$type = true;

cljs.core.async.t20594.cljs$lang$ctorStr = "cljs.core.async/t20594";

cljs.core.async.t20594.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write.call(null,writer__4226__auto__,"cljs.core.async/t20594");
});})(flag))
;

cljs.core.async.__GT_t20594 = ((function (flag){
return (function __GT_t20594(flag__$1,alt_flag__$1,meta20595){
return (new cljs.core.async.t20594(flag__$1,alt_flag__$1,meta20595));
});})(flag))
;

}

return (new cljs.core.async.t20594(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),128,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),123,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/twer/dev/clojure/async-tut1/out/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t20600 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20600 = (function (cb,flag,alt_handler,meta20601){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta20601 = meta20601;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20600.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t20600.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t20600.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t20600.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20602){
var self__ = this;
var _20602__$1 = this;
return self__.meta20601;
});

cljs.core.async.t20600.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20602,meta20601__$1){
var self__ = this;
var _20602__$1 = this;
return (new cljs.core.async.t20600(self__.cb,self__.flag,self__.alt_handler,meta20601__$1));
});

cljs.core.async.t20600.cljs$lang$type = true;

cljs.core.async.t20600.cljs$lang$ctorStr = "cljs.core.async/t20600";

cljs.core.async.t20600.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write.call(null,writer__4226__auto__,"cljs.core.async/t20600");
});

cljs.core.async.__GT_t20600 = (function __GT_t20600(cb__$1,flag__$1,alt_handler__$1,meta20601){
return (new cljs.core.async.t20600(cb__$1,flag__$1,alt_handler__$1,meta20601));
});

}

return (new cljs.core.async.t20600(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),136,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),131,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/twer/dev/clojure/async-tut1/out/cljs/core/async.cljs"], null)));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20603_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20603_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3638__auto__ = wport;
if(cljs.core.truth_(or__3638__auto__)){
return or__3638__auto__;
} else {
return port;
}
})()], null));
} else {
var G__20604 = (i + (1));
i = G__20604;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3638__auto__ = ret;
if(cljs.core.truth_(or__3638__auto__)){
return or__3638__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__3626__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3626__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3626__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__20605){
var map__20607 = p__20605;
var map__20607__$1 = ((cljs.core.seq_QMARK_.call(null,map__20607))?cljs.core.apply.call(null,cljs.core.hash_map,map__20607):map__20607);
var opts = map__20607__$1;
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));

};
var alts_BANG_ = function (ports,var_args){
var p__20605 = null;
if (arguments.length > 1) {
  p__20605 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__20605);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__20608){
var ports = cljs.core.first(arglist__20608);
var p__20605 = cljs.core.rest(arglist__20608);
return alts_BANG___delegate(ports,p__20605);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){
if(typeof cljs.core.async.t20616 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20616 = (function (ch,f,map_LT_,meta20617){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta20617 = meta20617;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20616.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t20616.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});

cljs.core.async.t20616.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t20616.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t20619 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20619 = (function (fn1,_,meta20617,map_LT_,f,ch,meta20620){
this.fn1 = fn1;
this._ = _;
this.meta20617 = meta20617;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta20620 = meta20620;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20619.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t20619.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t20619.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t20619.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__20609_SHARP_){
return f1.call(null,(((p1__20609_SHARP_ == null))?null:self__.f.call(null,p1__20609_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t20619.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_20621){
var self__ = this;
var _20621__$1 = this;
return self__.meta20620;
});})(___$1))
;

cljs.core.async.t20619.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_20621,meta20620__$1){
var self__ = this;
var _20621__$1 = this;
return (new cljs.core.async.t20619(self__.fn1,self__._,self__.meta20617,self__.map_LT_,self__.f,self__.ch,meta20620__$1));
});})(___$1))
;

cljs.core.async.t20619.cljs$lang$type = true;

cljs.core.async.t20619.cljs$lang$ctorStr = "cljs.core.async/t20619";

cljs.core.async.t20619.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write.call(null,writer__4226__auto__,"cljs.core.async/t20619");
});})(___$1))
;

cljs.core.async.__GT_t20619 = ((function (___$1){
return (function __GT_t20619(fn1__$1,___$2,meta20617__$1,map_LT___$1,f__$1,ch__$1,meta20620){
return (new cljs.core.async.t20619(fn1__$1,___$2,meta20617__$1,map_LT___$1,f__$1,ch__$1,meta20620));
});})(___$1))
;

}

return (new cljs.core.async.t20619(fn1,___$1,self__.meta20617,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),211,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),205,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/twer/dev/clojure/async-tut1/out/cljs/core/async.cljs"], null)));
})()
);
if(cljs.core.truth_((function (){var and__3626__auto__ = ret;
if(cljs.core.truth_(and__3626__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3626__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t20616.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t20616.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t20616.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20618){
var self__ = this;
var _20618__$1 = this;
return self__.meta20617;
});

cljs.core.async.t20616.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20618,meta20617__$1){
var self__ = this;
var _20618__$1 = this;
return (new cljs.core.async.t20616(self__.ch,self__.f,self__.map_LT_,meta20617__$1));
});

cljs.core.async.t20616.cljs$lang$type = true;

cljs.core.async.t20616.cljs$lang$ctorStr = "cljs.core.async/t20616";

cljs.core.async.t20616.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write.call(null,writer__4226__auto__,"cljs.core.async/t20616");
});

cljs.core.async.__GT_t20616 = (function __GT_t20616(ch__$1,f__$1,map_LT___$1,meta20617){
return (new cljs.core.async.t20616(ch__$1,f__$1,map_LT___$1,meta20617));
});

}

return (new cljs.core.async.t20616(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),217,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),197,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/twer/dev/clojure/async-tut1/out/cljs/core/async.cljs"], null)));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t20625 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20625 = (function (ch,f,map_GT_,meta20626){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta20626 = meta20626;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20625.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t20625.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});

cljs.core.async.t20625.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t20625.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t20625.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t20625.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t20625.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20627){
var self__ = this;
var _20627__$1 = this;
return self__.meta20626;
});

cljs.core.async.t20625.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20627,meta20626__$1){
var self__ = this;
var _20627__$1 = this;
return (new cljs.core.async.t20625(self__.ch,self__.f,self__.map_GT_,meta20626__$1));
});

cljs.core.async.t20625.cljs$lang$type = true;

cljs.core.async.t20625.cljs$lang$ctorStr = "cljs.core.async/t20625";

cljs.core.async.t20625.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write.call(null,writer__4226__auto__,"cljs.core.async/t20625");
});

cljs.core.async.__GT_t20625 = (function __GT_t20625(ch__$1,f__$1,map_GT___$1,meta20626){
return (new cljs.core.async.t20625(ch__$1,f__$1,map_GT___$1,meta20626));
});

}

return (new cljs.core.async.t20625(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),232,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),223,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/twer/dev/clojure/async-tut1/out/cljs/core/async.cljs"], null)));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t20631 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20631 = (function (ch,p,filter_GT_,meta20632){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta20632 = meta20632;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20631.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t20631.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else {
return cljs.core.async.impl.channels.box.call(null,null);
}
});

cljs.core.async.t20631.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t20631.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t20631.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t20631.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t20631.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20633){
var self__ = this;
var _20633__$1 = this;
return self__.meta20632;
});

cljs.core.async.t20631.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20633,meta20632__$1){
var self__ = this;
var _20633__$1 = this;
return (new cljs.core.async.t20631(self__.ch,self__.p,self__.filter_GT_,meta20632__$1));
});

cljs.core.async.t20631.cljs$lang$type = true;

cljs.core.async.t20631.cljs$lang$ctorStr = "cljs.core.async/t20631";

cljs.core.async.t20631.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write.call(null,writer__4226__auto__,"cljs.core.async/t20631");
});

cljs.core.async.__GT_t20631 = (function __GT_t20631(ch__$1,p__$1,filter_GT___$1,meta20632){
return (new cljs.core.async.t20631(ch__$1,p__$1,filter_GT___$1,meta20632));
});

}

return (new cljs.core.async.t20631(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),28,new cljs.core.Keyword(null,"end-line","end-line",1837326455),252,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),241,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/twer/dev/clojure/async-tut1/out/cljs/core/async.cljs"], null)));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){
return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18230__auto___20716 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18230__auto___20716,out){
return (function (){
var f__18231__auto__ = (function (){var switch__18215__auto__ = ((function (c__18230__auto___20716,out){
return (function (state_20695){
var state_val_20696 = (state_20695[(1)]);
if((state_val_20696 === (7))){
var inst_20691 = (state_20695[(2)]);
var state_20695__$1 = state_20695;
var statearr_20697_20717 = state_20695__$1;
(statearr_20697_20717[(2)] = inst_20691);

(statearr_20697_20717[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20696 === (1))){
var state_20695__$1 = state_20695;
var statearr_20698_20718 = state_20695__$1;
(statearr_20698_20718[(2)] = null);

(statearr_20698_20718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20696 === (4))){
var inst_20677 = (state_20695[(7)]);
var inst_20677__$1 = (state_20695[(2)]);
var inst_20678 = (inst_20677__$1 == null);
var state_20695__$1 = (function (){var statearr_20699 = state_20695;
(statearr_20699[(7)] = inst_20677__$1);

return statearr_20699;
})();
if(cljs.core.truth_(inst_20678)){
var statearr_20700_20719 = state_20695__$1;
(statearr_20700_20719[(1)] = (5));

} else {
var statearr_20701_20720 = state_20695__$1;
(statearr_20701_20720[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20696 === (6))){
var inst_20677 = (state_20695[(7)]);
var inst_20682 = p.call(null,inst_20677);
var state_20695__$1 = state_20695;
if(cljs.core.truth_(inst_20682)){
var statearr_20702_20721 = state_20695__$1;
(statearr_20702_20721[(1)] = (8));

} else {
var statearr_20703_20722 = state_20695__$1;
(statearr_20703_20722[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20696 === (3))){
var inst_20693 = (state_20695[(2)]);
var state_20695__$1 = state_20695;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20695__$1,inst_20693);
} else {
if((state_val_20696 === (2))){
var state_20695__$1 = state_20695;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20695__$1,(4),ch);
} else {
if((state_val_20696 === (11))){
var inst_20685 = (state_20695[(2)]);
var state_20695__$1 = state_20695;
var statearr_20704_20723 = state_20695__$1;
(statearr_20704_20723[(2)] = inst_20685);

(statearr_20704_20723[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20696 === (9))){
var state_20695__$1 = state_20695;
var statearr_20705_20724 = state_20695__$1;
(statearr_20705_20724[(2)] = null);

(statearr_20705_20724[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20696 === (5))){
var inst_20680 = cljs.core.async.close_BANG_.call(null,out);
var state_20695__$1 = state_20695;
var statearr_20706_20725 = state_20695__$1;
(statearr_20706_20725[(2)] = inst_20680);

(statearr_20706_20725[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20696 === (10))){
var inst_20688 = (state_20695[(2)]);
var state_20695__$1 = (function (){var statearr_20707 = state_20695;
(statearr_20707[(8)] = inst_20688);

return statearr_20707;
})();
var statearr_20708_20726 = state_20695__$1;
(statearr_20708_20726[(2)] = null);

(statearr_20708_20726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20696 === (8))){
var inst_20677 = (state_20695[(7)]);
var state_20695__$1 = state_20695;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20695__$1,(11),out,inst_20677);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__18230__auto___20716,out))
;
return ((function (switch__18215__auto__,c__18230__auto___20716,out){
return (function() {
var state_machine__18216__auto__ = null;
var state_machine__18216__auto____0 = (function (){
var statearr_20712 = [null,null,null,null,null,null,null,null,null];
(statearr_20712[(0)] = state_machine__18216__auto__);

(statearr_20712[(1)] = (1));

return statearr_20712;
});
var state_machine__18216__auto____1 = (function (state_20695){
while(true){
var ret_value__18217__auto__ = (function (){try{while(true){
var result__18218__auto__ = switch__18215__auto__.call(null,state_20695);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18218__auto__;
}
break;
}
}catch (e20713){if((e20713 instanceof Object)){
var ex__18219__auto__ = e20713;
var statearr_20714_20727 = state_20695;
(statearr_20714_20727[(5)] = ex__18219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20695);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20713;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20728 = state_20695;
state_20695 = G__20728;
continue;
} else {
return ret_value__18217__auto__;
}
break;
}
});
state_machine__18216__auto__ = function(state_20695){
switch(arguments.length){
case 0:
return state_machine__18216__auto____0.call(this);
case 1:
return state_machine__18216__auto____1.call(this,state_20695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18216__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18216__auto____0;
state_machine__18216__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18216__auto____1;
return state_machine__18216__auto__;
})()
;})(switch__18215__auto__,c__18230__auto___20716,out))
})();
var state__18232__auto__ = (function (){var statearr_20715 = f__18231__auto__.call(null);
(statearr_20715[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18230__auto___20716);

return statearr_20715;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18232__auto__);
});})(c__18230__auto___20716,out))
);


return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){
return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){
var c__18230__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18230__auto__){
return (function (){
var f__18231__auto__ = (function (){var switch__18215__auto__ = ((function (c__18230__auto__){
return (function (state_20880){
var state_val_20881 = (state_20880[(1)]);
if((state_val_20881 === (7))){
var inst_20876 = (state_20880[(2)]);
var state_20880__$1 = state_20880;
var statearr_20882_20919 = state_20880__$1;
(statearr_20882_20919[(2)] = inst_20876);

(statearr_20882_20919[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20881 === (20))){
var inst_20851 = (state_20880[(7)]);
var inst_20862 = (state_20880[(2)]);
var inst_20863 = cljs.core.next.call(null,inst_20851);
var inst_20837 = inst_20863;
var inst_20838 = null;
var inst_20839 = (0);
var inst_20840 = (0);
var state_20880__$1 = (function (){var statearr_20883 = state_20880;
(statearr_20883[(8)] = inst_20840);

(statearr_20883[(9)] = inst_20862);

(statearr_20883[(10)] = inst_20839);

(statearr_20883[(11)] = inst_20837);

(statearr_20883[(12)] = inst_20838);

return statearr_20883;
})();
var statearr_20884_20920 = state_20880__$1;
(statearr_20884_20920[(2)] = null);

(statearr_20884_20920[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20881 === (1))){
var state_20880__$1 = state_20880;
var statearr_20885_20921 = state_20880__$1;
(statearr_20885_20921[(2)] = null);

(statearr_20885_20921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20881 === (4))){
var inst_20826 = (state_20880[(13)]);
var inst_20826__$1 = (state_20880[(2)]);
var inst_20827 = (inst_20826__$1 == null);
var state_20880__$1 = (function (){var statearr_20889 = state_20880;
(statearr_20889[(13)] = inst_20826__$1);

return statearr_20889;
})();
if(cljs.core.truth_(inst_20827)){
var statearr_20890_20922 = state_20880__$1;
(statearr_20890_20922[(1)] = (5));

} else {
var statearr_20891_20923 = state_20880__$1;
(statearr_20891_20923[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20881 === (15))){
var state_20880__$1 = state_20880;
var statearr_20892_20924 = state_20880__$1;
(statearr_20892_20924[(2)] = null);

(statearr_20892_20924[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20881 === (13))){
var inst_20840 = (state_20880[(8)]);
var inst_20839 = (state_20880[(10)]);
var inst_20837 = (state_20880[(11)]);
var inst_20838 = (state_20880[(12)]);
var inst_20847 = (state_20880[(2)]);
var inst_20848 = (inst_20840 + (1));
var tmp20886 = inst_20839;
var tmp20887 = inst_20837;
var tmp20888 = inst_20838;
var inst_20837__$1 = tmp20887;
var inst_20838__$1 = tmp20888;
var inst_20839__$1 = tmp20886;
var inst_20840__$1 = inst_20848;
var state_20880__$1 = (function (){var statearr_20893 = state_20880;
(statearr_20893[(8)] = inst_20840__$1);

(statearr_20893[(10)] = inst_20839__$1);

(statearr_20893[(11)] = inst_20837__$1);

(statearr_20893[(14)] = inst_20847);

(statearr_20893[(12)] = inst_20838__$1);

return statearr_20893;
})();
var statearr_20894_20925 = state_20880__$1;
(statearr_20894_20925[(2)] = null);

(statearr_20894_20925[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20881 === (6))){
var inst_20826 = (state_20880[(13)]);
var inst_20831 = f.call(null,inst_20826);
var inst_20836 = cljs.core.seq.call(null,inst_20831);
var inst_20837 = inst_20836;
var inst_20838 = null;
var inst_20839 = (0);
var inst_20840 = (0);
var state_20880__$1 = (function (){var statearr_20895 = state_20880;
(statearr_20895[(8)] = inst_20840);

(statearr_20895[(10)] = inst_20839);

(statearr_20895[(11)] = inst_20837);

(statearr_20895[(12)] = inst_20838);

return statearr_20895;
})();
var statearr_20896_20926 = state_20880__$1;
(statearr_20896_20926[(2)] = null);

(statearr_20896_20926[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20881 === (17))){
var inst_20851 = (state_20880[(7)]);
var inst_20855 = cljs.core.chunk_first.call(null,inst_20851);
var inst_20856 = cljs.core.chunk_rest.call(null,inst_20851);
var inst_20857 = cljs.core.count.call(null,inst_20855);
var inst_20837 = inst_20856;
var inst_20838 = inst_20855;
var inst_20839 = inst_20857;
var inst_20840 = (0);
var state_20880__$1 = (function (){var statearr_20897 = state_20880;
(statearr_20897[(8)] = inst_20840);

(statearr_20897[(10)] = inst_20839);

(statearr_20897[(11)] = inst_20837);

(statearr_20897[(12)] = inst_20838);

return statearr_20897;
})();
var statearr_20898_20927 = state_20880__$1;
(statearr_20898_20927[(2)] = null);

(statearr_20898_20927[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20881 === (3))){
var inst_20878 = (state_20880[(2)]);
var state_20880__$1 = state_20880;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20880__$1,inst_20878);
} else {
if((state_val_20881 === (12))){
var inst_20871 = (state_20880[(2)]);
var state_20880__$1 = state_20880;
var statearr_20899_20928 = state_20880__$1;
(statearr_20899_20928[(2)] = inst_20871);

(statearr_20899_20928[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20881 === (2))){
var state_20880__$1 = state_20880;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20880__$1,(4),in$);
} else {
if((state_val_20881 === (19))){
var inst_20866 = (state_20880[(2)]);
var state_20880__$1 = state_20880;
var statearr_20900_20929 = state_20880__$1;
(statearr_20900_20929[(2)] = inst_20866);

(statearr_20900_20929[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20881 === (11))){
var inst_20851 = (state_20880[(7)]);
var inst_20837 = (state_20880[(11)]);
var inst_20851__$1 = cljs.core.seq.call(null,inst_20837);
var state_20880__$1 = (function (){var statearr_20901 = state_20880;
(statearr_20901[(7)] = inst_20851__$1);

return statearr_20901;
})();
if(inst_20851__$1){
var statearr_20902_20930 = state_20880__$1;
(statearr_20902_20930[(1)] = (14));

} else {
var statearr_20903_20931 = state_20880__$1;
(statearr_20903_20931[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20881 === (9))){
var inst_20873 = (state_20880[(2)]);
var state_20880__$1 = (function (){var statearr_20904 = state_20880;
(statearr_20904[(15)] = inst_20873);

return statearr_20904;
})();
var statearr_20905_20932 = state_20880__$1;
(statearr_20905_20932[(2)] = null);

(statearr_20905_20932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20881 === (5))){
var inst_20829 = cljs.core.async.close_BANG_.call(null,out);
var state_20880__$1 = state_20880;
var statearr_20906_20933 = state_20880__$1;
(statearr_20906_20933[(2)] = inst_20829);

(statearr_20906_20933[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20881 === (14))){
var inst_20851 = (state_20880[(7)]);
var inst_20853 = cljs.core.chunked_seq_QMARK_.call(null,inst_20851);
var state_20880__$1 = state_20880;
if(inst_20853){
var statearr_20907_20934 = state_20880__$1;
(statearr_20907_20934[(1)] = (17));

} else {
var statearr_20908_20935 = state_20880__$1;
(statearr_20908_20935[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20881 === (16))){
var inst_20869 = (state_20880[(2)]);
var state_20880__$1 = state_20880;
var statearr_20909_20936 = state_20880__$1;
(statearr_20909_20936[(2)] = inst_20869);

(statearr_20909_20936[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20881 === (10))){
var inst_20840 = (state_20880[(8)]);
var inst_20838 = (state_20880[(12)]);
var inst_20845 = cljs.core._nth.call(null,inst_20838,inst_20840);
var state_20880__$1 = state_20880;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20880__$1,(13),out,inst_20845);
} else {
if((state_val_20881 === (18))){
var inst_20851 = (state_20880[(7)]);
var inst_20860 = cljs.core.first.call(null,inst_20851);
var state_20880__$1 = state_20880;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20880__$1,(20),out,inst_20860);
} else {
if((state_val_20881 === (8))){
var inst_20840 = (state_20880[(8)]);
var inst_20839 = (state_20880[(10)]);
var inst_20842 = (inst_20840 < inst_20839);
var inst_20843 = inst_20842;
var state_20880__$1 = state_20880;
if(cljs.core.truth_(inst_20843)){
var statearr_20910_20937 = state_20880__$1;
(statearr_20910_20937[(1)] = (10));

} else {
var statearr_20911_20938 = state_20880__$1;
(statearr_20911_20938[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18230__auto__))
;
return ((function (switch__18215__auto__,c__18230__auto__){
return (function() {
var state_machine__18216__auto__ = null;
var state_machine__18216__auto____0 = (function (){
var statearr_20915 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20915[(0)] = state_machine__18216__auto__);

(statearr_20915[(1)] = (1));

return statearr_20915;
});
var state_machine__18216__auto____1 = (function (state_20880){
while(true){
var ret_value__18217__auto__ = (function (){try{while(true){
var result__18218__auto__ = switch__18215__auto__.call(null,state_20880);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18218__auto__;
}
break;
}
}catch (e20916){if((e20916 instanceof Object)){
var ex__18219__auto__ = e20916;
var statearr_20917_20939 = state_20880;
(statearr_20917_20939[(5)] = ex__18219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20880);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20916;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20940 = state_20880;
state_20880 = G__20940;
continue;
} else {
return ret_value__18217__auto__;
}
break;
}
});
state_machine__18216__auto__ = function(state_20880){
switch(arguments.length){
case 0:
return state_machine__18216__auto____0.call(this);
case 1:
return state_machine__18216__auto____1.call(this,state_20880);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18216__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18216__auto____0;
state_machine__18216__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18216__auto____1;
return state_machine__18216__auto__;
})()
;})(switch__18215__auto__,c__18230__auto__))
})();
var state__18232__auto__ = (function (){var statearr_20918 = f__18231__auto__.call(null);
(statearr_20918[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18230__auto__);

return statearr_20918;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18232__auto__);
});})(c__18230__auto__))
);

return c__18230__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){
return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){
return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){
return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){
var c__18230__auto___21021 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18230__auto___21021){
return (function (){
var f__18231__auto__ = (function (){var switch__18215__auto__ = ((function (c__18230__auto___21021){
return (function (state_21000){
var state_val_21001 = (state_21000[(1)]);
if((state_val_21001 === (7))){
var inst_20996 = (state_21000[(2)]);
var state_21000__$1 = state_21000;
var statearr_21002_21022 = state_21000__$1;
(statearr_21002_21022[(2)] = inst_20996);

(statearr_21002_21022[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21001 === (1))){
var state_21000__$1 = state_21000;
var statearr_21003_21023 = state_21000__$1;
(statearr_21003_21023[(2)] = null);

(statearr_21003_21023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21001 === (4))){
var inst_20983 = (state_21000[(7)]);
var inst_20983__$1 = (state_21000[(2)]);
var inst_20984 = (inst_20983__$1 == null);
var state_21000__$1 = (function (){var statearr_21004 = state_21000;
(statearr_21004[(7)] = inst_20983__$1);

return statearr_21004;
})();
if(cljs.core.truth_(inst_20984)){
var statearr_21005_21024 = state_21000__$1;
(statearr_21005_21024[(1)] = (5));

} else {
var statearr_21006_21025 = state_21000__$1;
(statearr_21006_21025[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21001 === (6))){
var inst_20983 = (state_21000[(7)]);
var state_21000__$1 = state_21000;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21000__$1,(11),to,inst_20983);
} else {
if((state_val_21001 === (3))){
var inst_20998 = (state_21000[(2)]);
var state_21000__$1 = state_21000;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21000__$1,inst_20998);
} else {
if((state_val_21001 === (2))){
var state_21000__$1 = state_21000;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21000__$1,(4),from);
} else {
if((state_val_21001 === (11))){
var inst_20993 = (state_21000[(2)]);
var state_21000__$1 = (function (){var statearr_21007 = state_21000;
(statearr_21007[(8)] = inst_20993);

return statearr_21007;
})();
var statearr_21008_21026 = state_21000__$1;
(statearr_21008_21026[(2)] = null);

(statearr_21008_21026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21001 === (9))){
var state_21000__$1 = state_21000;
var statearr_21009_21027 = state_21000__$1;
(statearr_21009_21027[(2)] = null);

(statearr_21009_21027[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21001 === (5))){
var state_21000__$1 = state_21000;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21010_21028 = state_21000__$1;
(statearr_21010_21028[(1)] = (8));

} else {
var statearr_21011_21029 = state_21000__$1;
(statearr_21011_21029[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21001 === (10))){
var inst_20990 = (state_21000[(2)]);
var state_21000__$1 = state_21000;
var statearr_21012_21030 = state_21000__$1;
(statearr_21012_21030[(2)] = inst_20990);

(statearr_21012_21030[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21001 === (8))){
var inst_20987 = cljs.core.async.close_BANG_.call(null,to);
var state_21000__$1 = state_21000;
var statearr_21013_21031 = state_21000__$1;
(statearr_21013_21031[(2)] = inst_20987);

(statearr_21013_21031[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__18230__auto___21021))
;
return ((function (switch__18215__auto__,c__18230__auto___21021){
return (function() {
var state_machine__18216__auto__ = null;
var state_machine__18216__auto____0 = (function (){
var statearr_21017 = [null,null,null,null,null,null,null,null,null];
(statearr_21017[(0)] = state_machine__18216__auto__);

(statearr_21017[(1)] = (1));

return statearr_21017;
});
var state_machine__18216__auto____1 = (function (state_21000){
while(true){
var ret_value__18217__auto__ = (function (){try{while(true){
var result__18218__auto__ = switch__18215__auto__.call(null,state_21000);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18218__auto__;
}
break;
}
}catch (e21018){if((e21018 instanceof Object)){
var ex__18219__auto__ = e21018;
var statearr_21019_21032 = state_21000;
(statearr_21019_21032[(5)] = ex__18219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21000);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21018;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21033 = state_21000;
state_21000 = G__21033;
continue;
} else {
return ret_value__18217__auto__;
}
break;
}
});
state_machine__18216__auto__ = function(state_21000){
switch(arguments.length){
case 0:
return state_machine__18216__auto____0.call(this);
case 1:
return state_machine__18216__auto____1.call(this,state_21000);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18216__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18216__auto____0;
state_machine__18216__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18216__auto____1;
return state_machine__18216__auto__;
})()
;})(switch__18215__auto__,c__18230__auto___21021))
})();
var state__18232__auto__ = (function (){var statearr_21020 = f__18231__auto__.call(null);
(statearr_21020[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18230__auto___21021);

return statearr_21020;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18232__auto__);
});})(c__18230__auto___21021))
);


return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){
return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__18230__auto___21120 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18230__auto___21120,tc,fc){
return (function (){
var f__18231__auto__ = (function (){var switch__18215__auto__ = ((function (c__18230__auto___21120,tc,fc){
return (function (state_21098){
var state_val_21099 = (state_21098[(1)]);
if((state_val_21099 === (7))){
var inst_21094 = (state_21098[(2)]);
var state_21098__$1 = state_21098;
var statearr_21100_21121 = state_21098__$1;
(statearr_21100_21121[(2)] = inst_21094);

(statearr_21100_21121[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21099 === (1))){
var state_21098__$1 = state_21098;
var statearr_21101_21122 = state_21098__$1;
(statearr_21101_21122[(2)] = null);

(statearr_21101_21122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21099 === (4))){
var inst_21079 = (state_21098[(7)]);
var inst_21079__$1 = (state_21098[(2)]);
var inst_21080 = (inst_21079__$1 == null);
var state_21098__$1 = (function (){var statearr_21102 = state_21098;
(statearr_21102[(7)] = inst_21079__$1);

return statearr_21102;
})();
if(cljs.core.truth_(inst_21080)){
var statearr_21103_21123 = state_21098__$1;
(statearr_21103_21123[(1)] = (5));

} else {
var statearr_21104_21124 = state_21098__$1;
(statearr_21104_21124[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21099 === (6))){
var inst_21079 = (state_21098[(7)]);
var inst_21085 = p.call(null,inst_21079);
var state_21098__$1 = state_21098;
if(cljs.core.truth_(inst_21085)){
var statearr_21105_21125 = state_21098__$1;
(statearr_21105_21125[(1)] = (9));

} else {
var statearr_21106_21126 = state_21098__$1;
(statearr_21106_21126[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21099 === (3))){
var inst_21096 = (state_21098[(2)]);
var state_21098__$1 = state_21098;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21098__$1,inst_21096);
} else {
if((state_val_21099 === (2))){
var state_21098__$1 = state_21098;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21098__$1,(4),ch);
} else {
if((state_val_21099 === (11))){
var inst_21079 = (state_21098[(7)]);
var inst_21089 = (state_21098[(2)]);
var state_21098__$1 = state_21098;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21098__$1,(8),inst_21089,inst_21079);
} else {
if((state_val_21099 === (9))){
var state_21098__$1 = state_21098;
var statearr_21107_21127 = state_21098__$1;
(statearr_21107_21127[(2)] = tc);

(statearr_21107_21127[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21099 === (5))){
var inst_21082 = cljs.core.async.close_BANG_.call(null,tc);
var inst_21083 = cljs.core.async.close_BANG_.call(null,fc);
var state_21098__$1 = (function (){var statearr_21108 = state_21098;
(statearr_21108[(8)] = inst_21082);

return statearr_21108;
})();
var statearr_21109_21128 = state_21098__$1;
(statearr_21109_21128[(2)] = inst_21083);

(statearr_21109_21128[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21099 === (10))){
var state_21098__$1 = state_21098;
var statearr_21110_21129 = state_21098__$1;
(statearr_21110_21129[(2)] = fc);

(statearr_21110_21129[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21099 === (8))){
var inst_21091 = (state_21098[(2)]);
var state_21098__$1 = (function (){var statearr_21111 = state_21098;
(statearr_21111[(9)] = inst_21091);

return statearr_21111;
})();
var statearr_21112_21130 = state_21098__$1;
(statearr_21112_21130[(2)] = null);

(statearr_21112_21130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__18230__auto___21120,tc,fc))
;
return ((function (switch__18215__auto__,c__18230__auto___21120,tc,fc){
return (function() {
var state_machine__18216__auto__ = null;
var state_machine__18216__auto____0 = (function (){
var statearr_21116 = [null,null,null,null,null,null,null,null,null,null];
(statearr_21116[(0)] = state_machine__18216__auto__);

(statearr_21116[(1)] = (1));

return statearr_21116;
});
var state_machine__18216__auto____1 = (function (state_21098){
while(true){
var ret_value__18217__auto__ = (function (){try{while(true){
var result__18218__auto__ = switch__18215__auto__.call(null,state_21098);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18218__auto__;
}
break;
}
}catch (e21117){if((e21117 instanceof Object)){
var ex__18219__auto__ = e21117;
var statearr_21118_21131 = state_21098;
(statearr_21118_21131[(5)] = ex__18219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21098);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21117;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21132 = state_21098;
state_21098 = G__21132;
continue;
} else {
return ret_value__18217__auto__;
}
break;
}
});
state_machine__18216__auto__ = function(state_21098){
switch(arguments.length){
case 0:
return state_machine__18216__auto____0.call(this);
case 1:
return state_machine__18216__auto____1.call(this,state_21098);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18216__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18216__auto____0;
state_machine__18216__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18216__auto____1;
return state_machine__18216__auto__;
})()
;})(switch__18215__auto__,c__18230__auto___21120,tc,fc))
})();
var state__18232__auto__ = (function (){var statearr_21119 = f__18231__auto__.call(null);
(statearr_21119[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18230__auto___21120);

return statearr_21119;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18232__auto__);
});})(c__18230__auto___21120,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){
var c__18230__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18230__auto__){
return (function (){
var f__18231__auto__ = (function (){var switch__18215__auto__ = ((function (c__18230__auto__){
return (function (state_21179){
var state_val_21180 = (state_21179[(1)]);
if((state_val_21180 === (7))){
var inst_21175 = (state_21179[(2)]);
var state_21179__$1 = state_21179;
var statearr_21181_21197 = state_21179__$1;
(statearr_21181_21197[(2)] = inst_21175);

(statearr_21181_21197[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21180 === (6))){
var inst_21168 = (state_21179[(7)]);
var inst_21165 = (state_21179[(8)]);
var inst_21172 = f.call(null,inst_21165,inst_21168);
var inst_21165__$1 = inst_21172;
var state_21179__$1 = (function (){var statearr_21182 = state_21179;
(statearr_21182[(8)] = inst_21165__$1);

return statearr_21182;
})();
var statearr_21183_21198 = state_21179__$1;
(statearr_21183_21198[(2)] = null);

(statearr_21183_21198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21180 === (5))){
var inst_21165 = (state_21179[(8)]);
var state_21179__$1 = state_21179;
var statearr_21184_21199 = state_21179__$1;
(statearr_21184_21199[(2)] = inst_21165);

(statearr_21184_21199[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21180 === (4))){
var inst_21168 = (state_21179[(7)]);
var inst_21168__$1 = (state_21179[(2)]);
var inst_21169 = (inst_21168__$1 == null);
var state_21179__$1 = (function (){var statearr_21185 = state_21179;
(statearr_21185[(7)] = inst_21168__$1);

return statearr_21185;
})();
if(cljs.core.truth_(inst_21169)){
var statearr_21186_21200 = state_21179__$1;
(statearr_21186_21200[(1)] = (5));

} else {
var statearr_21187_21201 = state_21179__$1;
(statearr_21187_21201[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21180 === (3))){
var inst_21177 = (state_21179[(2)]);
var state_21179__$1 = state_21179;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21179__$1,inst_21177);
} else {
if((state_val_21180 === (2))){
var state_21179__$1 = state_21179;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21179__$1,(4),ch);
} else {
if((state_val_21180 === (1))){
var inst_21165 = init;
var state_21179__$1 = (function (){var statearr_21188 = state_21179;
(statearr_21188[(8)] = inst_21165);

return statearr_21188;
})();
var statearr_21189_21202 = state_21179__$1;
(statearr_21189_21202[(2)] = null);

(statearr_21189_21202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__18230__auto__))
;
return ((function (switch__18215__auto__,c__18230__auto__){
return (function() {
var state_machine__18216__auto__ = null;
var state_machine__18216__auto____0 = (function (){
var statearr_21193 = [null,null,null,null,null,null,null,null,null];
(statearr_21193[(0)] = state_machine__18216__auto__);

(statearr_21193[(1)] = (1));

return statearr_21193;
});
var state_machine__18216__auto____1 = (function (state_21179){
while(true){
var ret_value__18217__auto__ = (function (){try{while(true){
var result__18218__auto__ = switch__18215__auto__.call(null,state_21179);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18218__auto__;
}
break;
}
}catch (e21194){if((e21194 instanceof Object)){
var ex__18219__auto__ = e21194;
var statearr_21195_21203 = state_21179;
(statearr_21195_21203[(5)] = ex__18219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21179);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21194;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21204 = state_21179;
state_21179 = G__21204;
continue;
} else {
return ret_value__18217__auto__;
}
break;
}
});
state_machine__18216__auto__ = function(state_21179){
switch(arguments.length){
case 0:
return state_machine__18216__auto____0.call(this);
case 1:
return state_machine__18216__auto____1.call(this,state_21179);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18216__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18216__auto____0;
state_machine__18216__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18216__auto____1;
return state_machine__18216__auto__;
})()
;})(switch__18215__auto__,c__18230__auto__))
})();
var state__18232__auto__ = (function (){var statearr_21196 = f__18231__auto__.call(null);
(statearr_21196[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18230__auto__);

return statearr_21196;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18232__auto__);
});})(c__18230__auto__))
);

return c__18230__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){
return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){
var c__18230__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18230__auto__){
return (function (){
var f__18231__auto__ = (function (){var switch__18215__auto__ = ((function (c__18230__auto__){
return (function (state_21266){
var state_val_21267 = (state_21266[(1)]);
if((state_val_21267 === (7))){
var inst_21247 = (state_21266[(7)]);
var inst_21252 = (state_21266[(2)]);
var inst_21253 = cljs.core.next.call(null,inst_21247);
var inst_21247__$1 = inst_21253;
var state_21266__$1 = (function (){var statearr_21268 = state_21266;
(statearr_21268[(7)] = inst_21247__$1);

(statearr_21268[(8)] = inst_21252);

return statearr_21268;
})();
var statearr_21269_21287 = state_21266__$1;
(statearr_21269_21287[(2)] = null);

(statearr_21269_21287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21267 === (1))){
var inst_21246 = cljs.core.seq.call(null,coll);
var inst_21247 = inst_21246;
var state_21266__$1 = (function (){var statearr_21270 = state_21266;
(statearr_21270[(7)] = inst_21247);

return statearr_21270;
})();
var statearr_21271_21288 = state_21266__$1;
(statearr_21271_21288[(2)] = null);

(statearr_21271_21288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21267 === (4))){
var inst_21247 = (state_21266[(7)]);
var inst_21250 = cljs.core.first.call(null,inst_21247);
var state_21266__$1 = state_21266;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21266__$1,(7),ch,inst_21250);
} else {
if((state_val_21267 === (6))){
var inst_21262 = (state_21266[(2)]);
var state_21266__$1 = state_21266;
var statearr_21272_21289 = state_21266__$1;
(statearr_21272_21289[(2)] = inst_21262);

(statearr_21272_21289[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21267 === (3))){
var inst_21264 = (state_21266[(2)]);
var state_21266__$1 = state_21266;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21266__$1,inst_21264);
} else {
if((state_val_21267 === (2))){
var inst_21247 = (state_21266[(7)]);
var state_21266__$1 = state_21266;
if(cljs.core.truth_(inst_21247)){
var statearr_21273_21290 = state_21266__$1;
(statearr_21273_21290[(1)] = (4));

} else {
var statearr_21274_21291 = state_21266__$1;
(statearr_21274_21291[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21267 === (9))){
var state_21266__$1 = state_21266;
var statearr_21275_21292 = state_21266__$1;
(statearr_21275_21292[(2)] = null);

(statearr_21275_21292[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21267 === (5))){
var state_21266__$1 = state_21266;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21276_21293 = state_21266__$1;
(statearr_21276_21293[(1)] = (8));

} else {
var statearr_21277_21294 = state_21266__$1;
(statearr_21277_21294[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21267 === (10))){
var inst_21260 = (state_21266[(2)]);
var state_21266__$1 = state_21266;
var statearr_21278_21295 = state_21266__$1;
(statearr_21278_21295[(2)] = inst_21260);

(statearr_21278_21295[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21267 === (8))){
var inst_21257 = cljs.core.async.close_BANG_.call(null,ch);
var state_21266__$1 = state_21266;
var statearr_21279_21296 = state_21266__$1;
(statearr_21279_21296[(2)] = inst_21257);

(statearr_21279_21296[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__18230__auto__))
;
return ((function (switch__18215__auto__,c__18230__auto__){
return (function() {
var state_machine__18216__auto__ = null;
var state_machine__18216__auto____0 = (function (){
var statearr_21283 = [null,null,null,null,null,null,null,null,null];
(statearr_21283[(0)] = state_machine__18216__auto__);

(statearr_21283[(1)] = (1));

return statearr_21283;
});
var state_machine__18216__auto____1 = (function (state_21266){
while(true){
var ret_value__18217__auto__ = (function (){try{while(true){
var result__18218__auto__ = switch__18215__auto__.call(null,state_21266);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18218__auto__;
}
break;
}
}catch (e21284){if((e21284 instanceof Object)){
var ex__18219__auto__ = e21284;
var statearr_21285_21297 = state_21266;
(statearr_21285_21297[(5)] = ex__18219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21266);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21284;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21298 = state_21266;
state_21266 = G__21298;
continue;
} else {
return ret_value__18217__auto__;
}
break;
}
});
state_machine__18216__auto__ = function(state_21266){
switch(arguments.length){
case 0:
return state_machine__18216__auto____0.call(this);
case 1:
return state_machine__18216__auto____1.call(this,state_21266);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18216__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18216__auto____0;
state_machine__18216__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18216__auto____1;
return state_machine__18216__auto__;
})()
;})(switch__18215__auto__,c__18230__auto__))
})();
var state__18232__auto__ = (function (){var statearr_21286 = f__18231__auto__.call(null);
(statearr_21286[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18230__auto__);

return statearr_21286;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18232__auto__);
});})(c__18230__auto__))
);

return c__18230__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj21300 = {};
return obj21300;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__3626__auto__ = _;
if(and__3626__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__3626__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4282__auto__ = (((_ == null))?null:_);
return (function (){var or__3638__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4282__auto__)]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj21302 = {};
return obj21302;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__3626__auto__ = m;
if(and__3626__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__3626__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4282__auto__ = (((m == null))?null:m);
return (function (){var or__3638__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4282__auto__)]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__3626__auto__ = m;
if(and__3626__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__3626__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4282__auto__ = (((m == null))?null:m);
return (function (){var or__3638__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4282__auto__)]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__3626__auto__ = m;
if(and__3626__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__3626__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4282__auto__ = (((m == null))?null:m);
return (function (){var or__3638__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4282__auto__)]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t21517 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21517 = (function (cs,ch,mult,meta21518){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta21518 = meta21518;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21517.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t21517.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t21517.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t21517.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t21517.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t21517.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t21517.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_21519){
var self__ = this;
var _21519__$1 = this;
return self__.meta21518;
});})(cs))
;

cljs.core.async.t21517.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_21519,meta21518__$1){
var self__ = this;
var _21519__$1 = this;
return (new cljs.core.async.t21517(self__.cs,self__.ch,self__.mult,meta21518__$1));
});})(cs))
;

cljs.core.async.t21517.cljs$lang$type = true;

cljs.core.async.t21517.cljs$lang$ctorStr = "cljs.core.async/t21517";

cljs.core.async.t21517.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write.call(null,writer__4226__auto__,"cljs.core.async/t21517");
});})(cs))
;

cljs.core.async.__GT_t21517 = ((function (cs){
return (function __GT_t21517(cs__$1,ch__$1,mult__$1,meta21518){
return (new cljs.core.async.t21517(cs__$1,ch__$1,mult__$1,meta21518));
});})(cs))
;

}

return (new cljs.core.async.t21517(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),431,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),424,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/twer/dev/clojure/async-tut1/out/cljs/core/async.cljs"], null)));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__18230__auto___21731 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18230__auto___21731,cs,m,dchan,dctr,done){
return (function (){
var f__18231__auto__ = (function (){var switch__18215__auto__ = ((function (c__18230__auto___21731,cs,m,dchan,dctr,done){
return (function (state_21649){
var state_val_21650 = (state_21649[(1)]);
if((state_val_21650 === (7))){
var inst_21645 = (state_21649[(2)]);
var state_21649__$1 = state_21649;
var statearr_21651_21732 = state_21649__$1;
(statearr_21651_21732[(2)] = inst_21645);

(statearr_21651_21732[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21650 === (20))){
var inst_21551 = (state_21649[(7)]);
var inst_21561 = cljs.core.first.call(null,inst_21551);
var inst_21562 = cljs.core.nth.call(null,inst_21561,(0),null);
var inst_21563 = cljs.core.nth.call(null,inst_21561,(1),null);
var state_21649__$1 = (function (){var statearr_21652 = state_21649;
(statearr_21652[(8)] = inst_21562);

return statearr_21652;
})();
if(cljs.core.truth_(inst_21563)){
var statearr_21653_21733 = state_21649__$1;
(statearr_21653_21733[(1)] = (22));

} else {
var statearr_21654_21734 = state_21649__$1;
(statearr_21654_21734[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21650 === (27))){
var inst_21593 = (state_21649[(9)]);
var inst_21591 = (state_21649[(10)]);
var inst_21598 = cljs.core._nth.call(null,inst_21591,inst_21593);
var state_21649__$1 = (function (){var statearr_21655 = state_21649;
(statearr_21655[(11)] = inst_21598);

return statearr_21655;
})();
var statearr_21656_21735 = state_21649__$1;
(statearr_21656_21735[(2)] = null);

(statearr_21656_21735[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21650 === (1))){
var state_21649__$1 = state_21649;
var statearr_21657_21736 = state_21649__$1;
(statearr_21657_21736[(2)] = null);

(statearr_21657_21736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21650 === (24))){
var inst_21551 = (state_21649[(7)]);
var inst_21568 = (state_21649[(2)]);
var inst_21569 = cljs.core.next.call(null,inst_21551);
var inst_21531 = inst_21569;
var inst_21532 = null;
var inst_21533 = (0);
var inst_21534 = (0);
var state_21649__$1 = (function (){var statearr_21658 = state_21649;
(statearr_21658[(12)] = inst_21532);

(statearr_21658[(13)] = inst_21531);

(statearr_21658[(14)] = inst_21533);

(statearr_21658[(15)] = inst_21568);

(statearr_21658[(16)] = inst_21534);

return statearr_21658;
})();
var statearr_21659_21737 = state_21649__$1;
(statearr_21659_21737[(2)] = null);

(statearr_21659_21737[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21650 === (39))){
var inst_21611 = (state_21649[(17)]);
var inst_21629 = (state_21649[(2)]);
var inst_21630 = cljs.core.next.call(null,inst_21611);
var inst_21590 = inst_21630;
var inst_21591 = null;
var inst_21592 = (0);
var inst_21593 = (0);
var state_21649__$1 = (function (){var statearr_21663 = state_21649;
(statearr_21663[(18)] = inst_21590);

(statearr_21663[(19)] = inst_21629);

(statearr_21663[(20)] = inst_21592);

(statearr_21663[(9)] = inst_21593);

(statearr_21663[(10)] = inst_21591);

return statearr_21663;
})();
var statearr_21664_21738 = state_21649__$1;
(statearr_21664_21738[(2)] = null);

(statearr_21664_21738[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21650 === (4))){
var inst_21522 = (state_21649[(21)]);
var inst_21522__$1 = (state_21649[(2)]);
var inst_21523 = (inst_21522__$1 == null);
var state_21649__$1 = (function (){var statearr_21665 = state_21649;
(statearr_21665[(21)] = inst_21522__$1);

return statearr_21665;
})();
if(cljs.core.truth_(inst_21523)){
var statearr_21666_21739 = state_21649__$1;
(statearr_21666_21739[(1)] = (5));

} else {
var statearr_21667_21740 = state_21649__$1;
(statearr_21667_21740[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21650 === (15))){
var inst_21532 = (state_21649[(12)]);
var inst_21531 = (state_21649[(13)]);
var inst_21533 = (state_21649[(14)]);
var inst_21534 = (state_21649[(16)]);
var inst_21547 = (state_21649[(2)]);
var inst_21548 = (inst_21534 + (1));
var tmp21660 = inst_21532;
var tmp21661 = inst_21531;
var tmp21662 = inst_21533;
var inst_21531__$1 = tmp21661;
var inst_21532__$1 = tmp21660;
var inst_21533__$1 = tmp21662;
var inst_21534__$1 = inst_21548;
var state_21649__$1 = (function (){var statearr_21668 = state_21649;
(statearr_21668[(12)] = inst_21532__$1);

(statearr_21668[(13)] = inst_21531__$1);

(statearr_21668[(14)] = inst_21533__$1);

(statearr_21668[(16)] = inst_21534__$1);

(statearr_21668[(22)] = inst_21547);

return statearr_21668;
})();
var statearr_21669_21741 = state_21649__$1;
(statearr_21669_21741[(2)] = null);

(statearr_21669_21741[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21650 === (21))){
var inst_21572 = (state_21649[(2)]);
var state_21649__$1 = state_21649;
var statearr_21670_21742 = state_21649__$1;
(statearr_21670_21742[(2)] = inst_21572);

(statearr_21670_21742[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21650 === (31))){
var inst_21598 = (state_21649[(11)]);
var inst_21599 = (state_21649[(2)]);
var inst_21600 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var inst_21601 = cljs.core.async.untap_STAR_.call(null,m,inst_21598);
var state_21649__$1 = (function (){var statearr_21671 = state_21649;
(statearr_21671[(23)] = inst_21600);

(statearr_21671[(24)] = inst_21599);

return statearr_21671;
})();
var statearr_21672_21743 = state_21649__$1;
(statearr_21672_21743[(2)] = inst_21601);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21649__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21650 === (32))){
var inst_21522 = (state_21649[(21)]);
var inst_21598 = (state_21649[(11)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_21649,(31),Object,null,(30));
var inst_21605 = cljs.core.async.put_BANG_.call(null,inst_21598,inst_21522,done);
var state_21649__$1 = state_21649;
var statearr_21673_21744 = state_21649__$1;
(statearr_21673_21744[(2)] = inst_21605);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21649__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21650 === (40))){
var inst_21620 = (state_21649[(25)]);
var inst_21621 = (state_21649[(2)]);
var inst_21622 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var inst_21623 = cljs.core.async.untap_STAR_.call(null,m,inst_21620);
var state_21649__$1 = (function (){var statearr_21674 = state_21649;
(statearr_21674[(26)] = inst_21621);

(statearr_21674[(27)] = inst_21622);

return statearr_21674;
})();
var statearr_21675_21745 = state_21649__$1;
(statearr_21675_21745[(2)] = inst_21623);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21649__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21650 === (33))){
var inst_21611 = (state_21649[(17)]);
var inst_21613 = cljs.core.chunked_seq_QMARK_.call(null,inst_21611);
var state_21649__$1 = state_21649;
if(inst_21613){
var statearr_21676_21746 = state_21649__$1;
(statearr_21676_21746[(1)] = (36));

} else {
var statearr_21677_21747 = state_21649__$1;
(statearr_21677_21747[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21650 === (13))){
var inst_21541 = (state_21649[(28)]);
var inst_21544 = cljs.core.async.close_BANG_.call(null,inst_21541);
var state_21649__$1 = state_21649;
var statearr_21678_21748 = state_21649__$1;
(statearr_21678_21748[(2)] = inst_21544);

(statearr_21678_21748[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21650 === (22))){
var inst_21562 = (state_21649[(8)]);
var inst_21565 = cljs.core.async.close_BANG_.call(null,inst_21562);
var state_21649__$1 = state_21649;
var statearr_21679_21749 = state_21649__$1;
(statearr_21679_21749[(2)] = inst_21565);

(statearr_21679_21749[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21650 === (36))){
var inst_21611 = (state_21649[(17)]);
var inst_21615 = cljs.core.chunk_first.call(null,inst_21611);
var inst_21616 = cljs.core.chunk_rest.call(null,inst_21611);
var inst_21617 = cljs.core.count.call(null,inst_21615);
var inst_21590 = inst_21616;
var inst_21591 = inst_21615;
var inst_21592 = inst_21617;
var inst_21593 = (0);
var state_21649__$1 = (function (){var statearr_21680 = state_21649;
(statearr_21680[(18)] = inst_21590);

(statearr_21680[(20)] = inst_21592);

(statearr_21680[(9)] = inst_21593);

(statearr_21680[(10)] = inst_21591);

return statearr_21680;
})();
var statearr_21681_21750 = state_21649__$1;
(statearr_21681_21750[(2)] = null);

(statearr_21681_21750[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21650 === (41))){
var inst_21620 = (state_21649[(25)]);
var inst_21522 = (state_21649[(21)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_21649,(40),Object,null,(39));
var inst_21627 = cljs.core.async.put_BANG_.call(null,inst_21620,inst_21522,done);
var state_21649__$1 = state_21649;
var statearr_21682_21751 = state_21649__$1;
(statearr_21682_21751[(2)] = inst_21627);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21649__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21650 === (29))){
var inst_21638 = (state_21649[(2)]);
var state_21649__$1 = state_21649;
var statearr_21683_21752 = state_21649__$1;
(statearr_21683_21752[(2)] = inst_21638);

(statearr_21683_21752[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21650 === (6))){
var inst_21581 = cljs.core.deref.call(null,cs);
var inst_21582 = cljs.core.keys.call(null,inst_21581);
var inst_21583 = cljs.core.count.call(null,inst_21582);
var inst_21584 = cljs.core.reset_BANG_.call(null,dctr,inst_21583);
var inst_21589 = cljs.core.seq.call(null,inst_21582);
var inst_21590 = inst_21589;
var inst_21591 = null;
var inst_21592 = (0);
var inst_21593 = (0);
var state_21649__$1 = (function (){var statearr_21684 = state_21649;
(statearr_21684[(18)] = inst_21590);

(statearr_21684[(20)] = inst_21592);

(statearr_21684[(29)] = inst_21584);

(statearr_21684[(9)] = inst_21593);

(statearr_21684[(10)] = inst_21591);

return statearr_21684;
})();
var statearr_21685_21753 = state_21649__$1;
(statearr_21685_21753[(2)] = null);

(statearr_21685_21753[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21650 === (28))){
var inst_21590 = (state_21649[(18)]);
var inst_21611 = (state_21649[(17)]);
var inst_21611__$1 = cljs.core.seq.call(null,inst_21590);
var state_21649__$1 = (function (){var statearr_21686 = state_21649;
(statearr_21686[(17)] = inst_21611__$1);

return statearr_21686;
})();
if(inst_21611__$1){
var statearr_21687_21754 = state_21649__$1;
(statearr_21687_21754[(1)] = (33));

} else {
var statearr_21688_21755 = state_21649__$1;
(statearr_21688_21755[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21650 === (25))){
var inst_21592 = (state_21649[(20)]);
var inst_21593 = (state_21649[(9)]);
var inst_21595 = (inst_21593 < inst_21592);
var inst_21596 = inst_21595;
var state_21649__$1 = state_21649;
if(cljs.core.truth_(inst_21596)){
var statearr_21689_21756 = state_21649__$1;
(statearr_21689_21756[(1)] = (27));

} else {
var statearr_21690_21757 = state_21649__$1;
(statearr_21690_21757[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21650 === (34))){
var state_21649__$1 = state_21649;
var statearr_21691_21758 = state_21649__$1;
(statearr_21691_21758[(2)] = null);

(statearr_21691_21758[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21650 === (17))){
var state_21649__$1 = state_21649;
var statearr_21692_21759 = state_21649__$1;
(statearr_21692_21759[(2)] = null);

(statearr_21692_21759[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21650 === (3))){
var inst_21647 = (state_21649[(2)]);
var state_21649__$1 = state_21649;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21649__$1,inst_21647);
} else {
if((state_val_21650 === (12))){
var inst_21577 = (state_21649[(2)]);
var state_21649__$1 = state_21649;
var statearr_21693_21760 = state_21649__$1;
(statearr_21693_21760[(2)] = inst_21577);

(statearr_21693_21760[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21650 === (2))){
var state_21649__$1 = state_21649;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21649__$1,(4),ch);
} else {
if((state_val_21650 === (23))){
var state_21649__$1 = state_21649;
var statearr_21694_21761 = state_21649__$1;
(statearr_21694_21761[(2)] = null);

(statearr_21694_21761[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21650 === (35))){
var inst_21636 = (state_21649[(2)]);
var state_21649__$1 = state_21649;
var statearr_21695_21762 = state_21649__$1;
(statearr_21695_21762[(2)] = inst_21636);

(statearr_21695_21762[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21650 === (19))){
var inst_21551 = (state_21649[(7)]);
var inst_21555 = cljs.core.chunk_first.call(null,inst_21551);
var inst_21556 = cljs.core.chunk_rest.call(null,inst_21551);
var inst_21557 = cljs.core.count.call(null,inst_21555);
var inst_21531 = inst_21556;
var inst_21532 = inst_21555;
var inst_21533 = inst_21557;
var inst_21534 = (0);
var state_21649__$1 = (function (){var statearr_21696 = state_21649;
(statearr_21696[(12)] = inst_21532);

(statearr_21696[(13)] = inst_21531);

(statearr_21696[(14)] = inst_21533);

(statearr_21696[(16)] = inst_21534);

return statearr_21696;
})();
var statearr_21697_21763 = state_21649__$1;
(statearr_21697_21763[(2)] = null);

(statearr_21697_21763[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21650 === (11))){
var inst_21531 = (state_21649[(13)]);
var inst_21551 = (state_21649[(7)]);
var inst_21551__$1 = cljs.core.seq.call(null,inst_21531);
var state_21649__$1 = (function (){var statearr_21698 = state_21649;
(statearr_21698[(7)] = inst_21551__$1);

return statearr_21698;
})();
if(inst_21551__$1){
var statearr_21699_21764 = state_21649__$1;
(statearr_21699_21764[(1)] = (16));

} else {
var statearr_21700_21765 = state_21649__$1;
(statearr_21700_21765[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21650 === (9))){
var inst_21579 = (state_21649[(2)]);
var state_21649__$1 = state_21649;
var statearr_21701_21766 = state_21649__$1;
(statearr_21701_21766[(2)] = inst_21579);

(statearr_21701_21766[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21650 === (5))){
var inst_21529 = cljs.core.deref.call(null,cs);
var inst_21530 = cljs.core.seq.call(null,inst_21529);
var inst_21531 = inst_21530;
var inst_21532 = null;
var inst_21533 = (0);
var inst_21534 = (0);
var state_21649__$1 = (function (){var statearr_21702 = state_21649;
(statearr_21702[(12)] = inst_21532);

(statearr_21702[(13)] = inst_21531);

(statearr_21702[(14)] = inst_21533);

(statearr_21702[(16)] = inst_21534);

return statearr_21702;
})();
var statearr_21703_21767 = state_21649__$1;
(statearr_21703_21767[(2)] = null);

(statearr_21703_21767[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21650 === (14))){
var state_21649__$1 = state_21649;
var statearr_21704_21768 = state_21649__$1;
(statearr_21704_21768[(2)] = null);

(statearr_21704_21768[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21650 === (26))){
var inst_21640 = (state_21649[(2)]);
var state_21649__$1 = (function (){var statearr_21705 = state_21649;
(statearr_21705[(30)] = inst_21640);

return statearr_21705;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21649__$1,(42),dchan);
} else {
if((state_val_21650 === (16))){
var inst_21551 = (state_21649[(7)]);
var inst_21553 = cljs.core.chunked_seq_QMARK_.call(null,inst_21551);
var state_21649__$1 = state_21649;
if(inst_21553){
var statearr_21709_21769 = state_21649__$1;
(statearr_21709_21769[(1)] = (19));

} else {
var statearr_21710_21770 = state_21649__$1;
(statearr_21710_21770[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21650 === (38))){
var inst_21633 = (state_21649[(2)]);
var state_21649__$1 = state_21649;
var statearr_21711_21771 = state_21649__$1;
(statearr_21711_21771[(2)] = inst_21633);

(statearr_21711_21771[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21650 === (30))){
var inst_21590 = (state_21649[(18)]);
var inst_21592 = (state_21649[(20)]);
var inst_21593 = (state_21649[(9)]);
var inst_21591 = (state_21649[(10)]);
var inst_21607 = (state_21649[(2)]);
var inst_21608 = (inst_21593 + (1));
var tmp21706 = inst_21590;
var tmp21707 = inst_21592;
var tmp21708 = inst_21591;
var inst_21590__$1 = tmp21706;
var inst_21591__$1 = tmp21708;
var inst_21592__$1 = tmp21707;
var inst_21593__$1 = inst_21608;
var state_21649__$1 = (function (){var statearr_21712 = state_21649;
(statearr_21712[(18)] = inst_21590__$1);

(statearr_21712[(31)] = inst_21607);

(statearr_21712[(20)] = inst_21592__$1);

(statearr_21712[(9)] = inst_21593__$1);

(statearr_21712[(10)] = inst_21591__$1);

return statearr_21712;
})();
var statearr_21713_21772 = state_21649__$1;
(statearr_21713_21772[(2)] = null);

(statearr_21713_21772[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21650 === (10))){
var inst_21532 = (state_21649[(12)]);
var inst_21534 = (state_21649[(16)]);
var inst_21540 = cljs.core._nth.call(null,inst_21532,inst_21534);
var inst_21541 = cljs.core.nth.call(null,inst_21540,(0),null);
var inst_21542 = cljs.core.nth.call(null,inst_21540,(1),null);
var state_21649__$1 = (function (){var statearr_21714 = state_21649;
(statearr_21714[(28)] = inst_21541);

return statearr_21714;
})();
if(cljs.core.truth_(inst_21542)){
var statearr_21715_21773 = state_21649__$1;
(statearr_21715_21773[(1)] = (13));

} else {
var statearr_21716_21774 = state_21649__$1;
(statearr_21716_21774[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21650 === (18))){
var inst_21575 = (state_21649[(2)]);
var state_21649__$1 = state_21649;
var statearr_21717_21775 = state_21649__$1;
(statearr_21717_21775[(2)] = inst_21575);

(statearr_21717_21775[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21650 === (42))){
var inst_21642 = (state_21649[(2)]);
var state_21649__$1 = (function (){var statearr_21718 = state_21649;
(statearr_21718[(32)] = inst_21642);

return statearr_21718;
})();
var statearr_21719_21776 = state_21649__$1;
(statearr_21719_21776[(2)] = null);

(statearr_21719_21776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21650 === (37))){
var inst_21611 = (state_21649[(17)]);
var inst_21620 = cljs.core.first.call(null,inst_21611);
var state_21649__$1 = (function (){var statearr_21720 = state_21649;
(statearr_21720[(25)] = inst_21620);

return statearr_21720;
})();
var statearr_21721_21777 = state_21649__$1;
(statearr_21721_21777[(2)] = null);

(statearr_21721_21777[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21650 === (8))){
var inst_21533 = (state_21649[(14)]);
var inst_21534 = (state_21649[(16)]);
var inst_21536 = (inst_21534 < inst_21533);
var inst_21537 = inst_21536;
var state_21649__$1 = state_21649;
if(cljs.core.truth_(inst_21537)){
var statearr_21722_21778 = state_21649__$1;
(statearr_21722_21778[(1)] = (10));

} else {
var statearr_21723_21779 = state_21649__$1;
(statearr_21723_21779[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18230__auto___21731,cs,m,dchan,dctr,done))
;
return ((function (switch__18215__auto__,c__18230__auto___21731,cs,m,dchan,dctr,done){
return (function() {
var state_machine__18216__auto__ = null;
var state_machine__18216__auto____0 = (function (){
var statearr_21727 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21727[(0)] = state_machine__18216__auto__);

(statearr_21727[(1)] = (1));

return statearr_21727;
});
var state_machine__18216__auto____1 = (function (state_21649){
while(true){
var ret_value__18217__auto__ = (function (){try{while(true){
var result__18218__auto__ = switch__18215__auto__.call(null,state_21649);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18218__auto__;
}
break;
}
}catch (e21728){if((e21728 instanceof Object)){
var ex__18219__auto__ = e21728;
var statearr_21729_21780 = state_21649;
(statearr_21729_21780[(5)] = ex__18219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21649);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21728;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21781 = state_21649;
state_21649 = G__21781;
continue;
} else {
return ret_value__18217__auto__;
}
break;
}
});
state_machine__18216__auto__ = function(state_21649){
switch(arguments.length){
case 0:
return state_machine__18216__auto____0.call(this);
case 1:
return state_machine__18216__auto____1.call(this,state_21649);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18216__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18216__auto____0;
state_machine__18216__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18216__auto____1;
return state_machine__18216__auto__;
})()
;})(switch__18215__auto__,c__18230__auto___21731,cs,m,dchan,dctr,done))
})();
var state__18232__auto__ = (function (){var statearr_21730 = f__18231__auto__.call(null);
(statearr_21730[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18230__auto___21731);

return statearr_21730;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18232__auto__);
});})(c__18230__auto___21731,cs,m,dchan,dctr,done))
);


return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){
return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj21783 = {};
return obj21783;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__3626__auto__ = m;
if(and__3626__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__3626__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4282__auto__ = (((m == null))?null:m);
return (function (){var or__3638__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4282__auto__)]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__3626__auto__ = m;
if(and__3626__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__3626__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4282__auto__ = (((m == null))?null:m);
return (function (){var or__3638__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4282__auto__)]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__3626__auto__ = m;
if(and__3626__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__3626__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4282__auto__ = (((m == null))?null:m);
return (function (){var or__3638__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4282__auto__)]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__3626__auto__ = m;
if(and__3626__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__3626__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4282__auto__ = (((m == null))?null:m);
return (function (){var or__3638__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4282__auto__)]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__3626__auto__ = m;
if(and__3626__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__3626__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4282__auto__ = (((m == null))?null:m);
return (function (){var or__3638__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4282__auto__)]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t21893 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21893 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta21894){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta21894 = meta21894;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21893.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t21893.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21893.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21893.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21893.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21893.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21893.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t21893.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21893.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21895){
var self__ = this;
var _21895__$1 = this;
return self__.meta21894;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21893.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21895,meta21894__$1){
var self__ = this;
var _21895__$1 = this;
return (new cljs.core.async.t21893(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta21894__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21893.cljs$lang$type = true;

cljs.core.async.t21893.cljs$lang$ctorStr = "cljs.core.async/t21893";

cljs.core.async.t21893.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write.call(null,writer__4226__auto__,"cljs.core.async/t21893");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t21893 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t21893(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21894){
return (new cljs.core.async.t21893(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21894));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t21893(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),534,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),523,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/twer/dev/clojure/async-tut1/out/cljs/core/async.cljs"], null)));
})()
;
var c__18230__auto___22002 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18230__auto___22002,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__18231__auto__ = (function (){var switch__18215__auto__ = ((function (c__18230__auto___22002,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_21960){
var state_val_21961 = (state_21960[(1)]);
if((state_val_21961 === (7))){
var inst_21909 = (state_21960[(7)]);
var inst_21914 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21909);
var state_21960__$1 = state_21960;
var statearr_21962_22003 = state_21960__$1;
(statearr_21962_22003[(2)] = inst_21914);

(statearr_21962_22003[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21961 === (20))){
var inst_21924 = (state_21960[(8)]);
var state_21960__$1 = state_21960;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21960__$1,(23),out,inst_21924);
} else {
if((state_val_21961 === (1))){
var inst_21899 = (state_21960[(9)]);
var inst_21899__$1 = calc_state.call(null);
var inst_21900 = cljs.core.seq_QMARK_.call(null,inst_21899__$1);
var state_21960__$1 = (function (){var statearr_21963 = state_21960;
(statearr_21963[(9)] = inst_21899__$1);

return statearr_21963;
})();
if(inst_21900){
var statearr_21964_22004 = state_21960__$1;
(statearr_21964_22004[(1)] = (2));

} else {
var statearr_21965_22005 = state_21960__$1;
(statearr_21965_22005[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21961 === (4))){
var inst_21899 = (state_21960[(9)]);
var inst_21905 = (state_21960[(2)]);
var inst_21906 = cljs.core.get.call(null,inst_21905,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_21907 = cljs.core.get.call(null,inst_21905,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_21908 = cljs.core.get.call(null,inst_21905,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_21909 = inst_21899;
var state_21960__$1 = (function (){var statearr_21966 = state_21960;
(statearr_21966[(10)] = inst_21908);

(statearr_21966[(7)] = inst_21909);

(statearr_21966[(11)] = inst_21906);

(statearr_21966[(12)] = inst_21907);

return statearr_21966;
})();
var statearr_21967_22006 = state_21960__$1;
(statearr_21967_22006[(2)] = null);

(statearr_21967_22006[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21961 === (15))){
var state_21960__$1 = state_21960;
var statearr_21968_22007 = state_21960__$1;
(statearr_21968_22007[(2)] = null);

(statearr_21968_22007[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21961 === (21))){
var state_21960__$1 = state_21960;
var statearr_21969_22008 = state_21960__$1;
(statearr_21969_22008[(2)] = null);

(statearr_21969_22008[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21961 === (13))){
var inst_21956 = (state_21960[(2)]);
var state_21960__$1 = state_21960;
var statearr_21970_22009 = state_21960__$1;
(statearr_21970_22009[(2)] = inst_21956);

(statearr_21970_22009[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21961 === (22))){
var inst_21917 = (state_21960[(13)]);
var inst_21953 = (state_21960[(2)]);
var inst_21909 = inst_21917;
var state_21960__$1 = (function (){var statearr_21971 = state_21960;
(statearr_21971[(7)] = inst_21909);

(statearr_21971[(14)] = inst_21953);

return statearr_21971;
})();
var statearr_21972_22010 = state_21960__$1;
(statearr_21972_22010[(2)] = null);

(statearr_21972_22010[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21961 === (6))){
var inst_21958 = (state_21960[(2)]);
var state_21960__$1 = state_21960;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21960__$1,inst_21958);
} else {
if((state_val_21961 === (17))){
var inst_21939 = (state_21960[(15)]);
var state_21960__$1 = state_21960;
var statearr_21973_22011 = state_21960__$1;
(statearr_21973_22011[(2)] = inst_21939);

(statearr_21973_22011[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21961 === (3))){
var inst_21899 = (state_21960[(9)]);
var state_21960__$1 = state_21960;
var statearr_21974_22012 = state_21960__$1;
(statearr_21974_22012[(2)] = inst_21899);

(statearr_21974_22012[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21961 === (12))){
var inst_21920 = (state_21960[(16)]);
var inst_21939 = (state_21960[(15)]);
var inst_21925 = (state_21960[(17)]);
var inst_21939__$1 = inst_21920.call(null,inst_21925);
var state_21960__$1 = (function (){var statearr_21975 = state_21960;
(statearr_21975[(15)] = inst_21939__$1);

return statearr_21975;
})();
if(cljs.core.truth_(inst_21939__$1)){
var statearr_21976_22013 = state_21960__$1;
(statearr_21976_22013[(1)] = (17));

} else {
var statearr_21977_22014 = state_21960__$1;
(statearr_21977_22014[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21961 === (2))){
var inst_21899 = (state_21960[(9)]);
var inst_21902 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21899);
var state_21960__$1 = state_21960;
var statearr_21978_22015 = state_21960__$1;
(statearr_21978_22015[(2)] = inst_21902);

(statearr_21978_22015[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21961 === (23))){
var inst_21950 = (state_21960[(2)]);
var state_21960__$1 = state_21960;
var statearr_21979_22016 = state_21960__$1;
(statearr_21979_22016[(2)] = inst_21950);

(statearr_21979_22016[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21961 === (19))){
var inst_21947 = (state_21960[(2)]);
var state_21960__$1 = state_21960;
if(cljs.core.truth_(inst_21947)){
var statearr_21980_22017 = state_21960__$1;
(statearr_21980_22017[(1)] = (20));

} else {
var statearr_21981_22018 = state_21960__$1;
(statearr_21981_22018[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21961 === (11))){
var inst_21924 = (state_21960[(8)]);
var inst_21930 = (inst_21924 == null);
var state_21960__$1 = state_21960;
if(cljs.core.truth_(inst_21930)){
var statearr_21982_22019 = state_21960__$1;
(statearr_21982_22019[(1)] = (14));

} else {
var statearr_21983_22020 = state_21960__$1;
(statearr_21983_22020[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21961 === (9))){
var inst_21917 = (state_21960[(13)]);
var inst_21917__$1 = (state_21960[(2)]);
var inst_21918 = cljs.core.get.call(null,inst_21917__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_21919 = cljs.core.get.call(null,inst_21917__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_21920 = cljs.core.get.call(null,inst_21917__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_21960__$1 = (function (){var statearr_21984 = state_21960;
(statearr_21984[(16)] = inst_21920);

(statearr_21984[(18)] = inst_21919);

(statearr_21984[(13)] = inst_21917__$1);

return statearr_21984;
})();
return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_21960__$1,(10),inst_21918);
} else {
if((state_val_21961 === (5))){
var inst_21909 = (state_21960[(7)]);
var inst_21912 = cljs.core.seq_QMARK_.call(null,inst_21909);
var state_21960__$1 = state_21960;
if(inst_21912){
var statearr_21985_22021 = state_21960__$1;
(statearr_21985_22021[(1)] = (7));

} else {
var statearr_21986_22022 = state_21960__$1;
(statearr_21986_22022[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21961 === (14))){
var inst_21925 = (state_21960[(17)]);
var inst_21932 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_21925);
var state_21960__$1 = state_21960;
var statearr_21987_22023 = state_21960__$1;
(statearr_21987_22023[(2)] = inst_21932);

(statearr_21987_22023[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21961 === (16))){
var inst_21935 = (state_21960[(2)]);
var inst_21936 = calc_state.call(null);
var inst_21909 = inst_21936;
var state_21960__$1 = (function (){var statearr_21988 = state_21960;
(statearr_21988[(7)] = inst_21909);

(statearr_21988[(19)] = inst_21935);

return statearr_21988;
})();
var statearr_21989_22024 = state_21960__$1;
(statearr_21989_22024[(2)] = null);

(statearr_21989_22024[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21961 === (10))){
var inst_21924 = (state_21960[(8)]);
var inst_21925 = (state_21960[(17)]);
var inst_21923 = (state_21960[(2)]);
var inst_21924__$1 = cljs.core.nth.call(null,inst_21923,(0),null);
var inst_21925__$1 = cljs.core.nth.call(null,inst_21923,(1),null);
var inst_21926 = (inst_21924__$1 == null);
var inst_21927 = cljs.core._EQ_.call(null,inst_21925__$1,change);
var inst_21928 = (inst_21926) || (inst_21927);
var state_21960__$1 = (function (){var statearr_21990 = state_21960;
(statearr_21990[(8)] = inst_21924__$1);

(statearr_21990[(17)] = inst_21925__$1);

return statearr_21990;
})();
if(cljs.core.truth_(inst_21928)){
var statearr_21991_22025 = state_21960__$1;
(statearr_21991_22025[(1)] = (11));

} else {
var statearr_21992_22026 = state_21960__$1;
(statearr_21992_22026[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21961 === (18))){
var inst_21920 = (state_21960[(16)]);
var inst_21919 = (state_21960[(18)]);
var inst_21925 = (state_21960[(17)]);
var inst_21942 = cljs.core.empty_QMARK_.call(null,inst_21920);
var inst_21943 = inst_21919.call(null,inst_21925);
var inst_21944 = cljs.core.not.call(null,inst_21943);
var inst_21945 = (inst_21942) && (inst_21944);
var state_21960__$1 = state_21960;
var statearr_21993_22027 = state_21960__$1;
(statearr_21993_22027[(2)] = inst_21945);

(statearr_21993_22027[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21961 === (8))){
var inst_21909 = (state_21960[(7)]);
var state_21960__$1 = state_21960;
var statearr_21994_22028 = state_21960__$1;
(statearr_21994_22028[(2)] = inst_21909);

(statearr_21994_22028[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18230__auto___22002,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__18215__auto__,c__18230__auto___22002,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__18216__auto__ = null;
var state_machine__18216__auto____0 = (function (){
var statearr_21998 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21998[(0)] = state_machine__18216__auto__);

(statearr_21998[(1)] = (1));

return statearr_21998;
});
var state_machine__18216__auto____1 = (function (state_21960){
while(true){
var ret_value__18217__auto__ = (function (){try{while(true){
var result__18218__auto__ = switch__18215__auto__.call(null,state_21960);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18218__auto__;
}
break;
}
}catch (e21999){if((e21999 instanceof Object)){
var ex__18219__auto__ = e21999;
var statearr_22000_22029 = state_21960;
(statearr_22000_22029[(5)] = ex__18219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21960);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21999;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22030 = state_21960;
state_21960 = G__22030;
continue;
} else {
return ret_value__18217__auto__;
}
break;
}
});
state_machine__18216__auto__ = function(state_21960){
switch(arguments.length){
case 0:
return state_machine__18216__auto____0.call(this);
case 1:
return state_machine__18216__auto____1.call(this,state_21960);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18216__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18216__auto____0;
state_machine__18216__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18216__auto____1;
return state_machine__18216__auto__;
})()
;})(switch__18215__auto__,c__18230__auto___22002,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__18232__auto__ = (function (){var statearr_22001 = f__18231__auto__.call(null);
(statearr_22001[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18230__auto___22002);

return statearr_22001;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18232__auto__);
});})(c__18230__auto___22002,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj22032 = {};
return obj22032;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__3626__auto__ = p;
if(and__3626__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__3626__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4282__auto__ = (((p == null))?null:p);
return (function (){var or__3638__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4282__auto__)]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__3626__auto__ = p;
if(and__3626__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__3626__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4282__auto__ = (((p == null))?null:p);
return (function (){var or__3638__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4282__auto__)]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){
if((function (){var and__3626__auto__ = p;
if(and__3626__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__3626__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4282__auto__ = (((p == null))?null:p);
return (function (){var or__3638__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4282__auto__)]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__3626__auto__ = p;
if(and__3626__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__3626__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4282__auto__ = (((p == null))?null:p);
return (function (){var or__3638__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4282__auto__)]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;

/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){
return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3638__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3638__auto__)){
return or__3638__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3638__auto__,mults){
return (function (p1__22033_SHARP_){
if(cljs.core.truth_(p1__22033_SHARP_.call(null,topic))){
return p1__22033_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__22033_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3638__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t22158 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22158 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta22159){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta22159 = meta22159;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22158.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t22158.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t22158.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t22158.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t22158.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t22158.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t22158.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t22158.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_22160){
var self__ = this;
var _22160__$1 = this;
return self__.meta22159;
});})(mults,ensure_mult))
;

cljs.core.async.t22158.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_22160,meta22159__$1){
var self__ = this;
var _22160__$1 = this;
return (new cljs.core.async.t22158(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta22159__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t22158.cljs$lang$type = true;

cljs.core.async.t22158.cljs$lang$ctorStr = "cljs.core.async/t22158";

cljs.core.async.t22158.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write.call(null,writer__4226__auto__,"cljs.core.async/t22158");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t22158 = ((function (mults,ensure_mult){
return (function __GT_t22158(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta22159){
return (new cljs.core.async.t22158(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta22159));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t22158(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),624,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),612,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/twer/dev/clojure/async-tut1/out/cljs/core/async.cljs"], null)));
})()
;
var c__18230__auto___22282 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18230__auto___22282,mults,ensure_mult,p){
return (function (){
var f__18231__auto__ = (function (){var switch__18215__auto__ = ((function (c__18230__auto___22282,mults,ensure_mult,p){
return (function (state_22234){
var state_val_22235 = (state_22234[(1)]);
if((state_val_22235 === (7))){
var inst_22230 = (state_22234[(2)]);
var state_22234__$1 = state_22234;
var statearr_22236_22283 = state_22234__$1;
(statearr_22236_22283[(2)] = inst_22230);

(statearr_22236_22283[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22235 === (20))){
var state_22234__$1 = state_22234;
var statearr_22237_22284 = state_22234__$1;
(statearr_22237_22284[(2)] = null);

(statearr_22237_22284[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22235 === (1))){
var state_22234__$1 = state_22234;
var statearr_22238_22285 = state_22234__$1;
(statearr_22238_22285[(2)] = null);

(statearr_22238_22285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22235 === (24))){
var inst_22213 = (state_22234[(7)]);
var inst_22163 = (state_22234[(8)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22234,(23),Object,null,(22));
var inst_22220 = cljs.core.async.muxch_STAR_.call(null,inst_22213);
var state_22234__$1 = state_22234;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22234__$1,(25),inst_22220,inst_22163);
} else {
if((state_val_22235 === (4))){
var inst_22163 = (state_22234[(8)]);
var inst_22163__$1 = (state_22234[(2)]);
var inst_22164 = (inst_22163__$1 == null);
var state_22234__$1 = (function (){var statearr_22239 = state_22234;
(statearr_22239[(8)] = inst_22163__$1);

return statearr_22239;
})();
if(cljs.core.truth_(inst_22164)){
var statearr_22240_22286 = state_22234__$1;
(statearr_22240_22286[(1)] = (5));

} else {
var statearr_22241_22287 = state_22234__$1;
(statearr_22241_22287[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22235 === (15))){
var inst_22205 = (state_22234[(2)]);
var state_22234__$1 = state_22234;
var statearr_22242_22288 = state_22234__$1;
(statearr_22242_22288[(2)] = inst_22205);

(statearr_22242_22288[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22235 === (21))){
var inst_22227 = (state_22234[(2)]);
var state_22234__$1 = (function (){var statearr_22243 = state_22234;
(statearr_22243[(9)] = inst_22227);

return statearr_22243;
})();
var statearr_22244_22289 = state_22234__$1;
(statearr_22244_22289[(2)] = null);

(statearr_22244_22289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22235 === (13))){
var inst_22187 = (state_22234[(10)]);
var inst_22189 = cljs.core.chunked_seq_QMARK_.call(null,inst_22187);
var state_22234__$1 = state_22234;
if(inst_22189){
var statearr_22245_22290 = state_22234__$1;
(statearr_22245_22290[(1)] = (16));

} else {
var statearr_22246_22291 = state_22234__$1;
(statearr_22246_22291[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22235 === (22))){
var inst_22224 = (state_22234[(2)]);
var state_22234__$1 = state_22234;
var statearr_22247_22292 = state_22234__$1;
(statearr_22247_22292[(2)] = inst_22224);

(statearr_22247_22292[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22235 === (6))){
var inst_22213 = (state_22234[(7)]);
var inst_22163 = (state_22234[(8)]);
var inst_22211 = (state_22234[(11)]);
var inst_22211__$1 = topic_fn.call(null,inst_22163);
var inst_22212 = cljs.core.deref.call(null,mults);
var inst_22213__$1 = cljs.core.get.call(null,inst_22212,inst_22211__$1);
var state_22234__$1 = (function (){var statearr_22248 = state_22234;
(statearr_22248[(7)] = inst_22213__$1);

(statearr_22248[(11)] = inst_22211__$1);

return statearr_22248;
})();
if(cljs.core.truth_(inst_22213__$1)){
var statearr_22249_22293 = state_22234__$1;
(statearr_22249_22293[(1)] = (19));

} else {
var statearr_22250_22294 = state_22234__$1;
(statearr_22250_22294[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22235 === (25))){
var inst_22222 = (state_22234[(2)]);
var state_22234__$1 = state_22234;
var statearr_22251_22295 = state_22234__$1;
(statearr_22251_22295[(2)] = inst_22222);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22234__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22235 === (17))){
var inst_22187 = (state_22234[(10)]);
var inst_22196 = cljs.core.first.call(null,inst_22187);
var inst_22197 = cljs.core.async.muxch_STAR_.call(null,inst_22196);
var inst_22198 = cljs.core.async.close_BANG_.call(null,inst_22197);
var inst_22199 = cljs.core.next.call(null,inst_22187);
var inst_22173 = inst_22199;
var inst_22174 = null;
var inst_22175 = (0);
var inst_22176 = (0);
var state_22234__$1 = (function (){var statearr_22252 = state_22234;
(statearr_22252[(12)] = inst_22175);

(statearr_22252[(13)] = inst_22173);

(statearr_22252[(14)] = inst_22176);

(statearr_22252[(15)] = inst_22174);

(statearr_22252[(16)] = inst_22198);

return statearr_22252;
})();
var statearr_22253_22296 = state_22234__$1;
(statearr_22253_22296[(2)] = null);

(statearr_22253_22296[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22235 === (3))){
var inst_22232 = (state_22234[(2)]);
var state_22234__$1 = state_22234;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22234__$1,inst_22232);
} else {
if((state_val_22235 === (12))){
var inst_22207 = (state_22234[(2)]);
var state_22234__$1 = state_22234;
var statearr_22254_22297 = state_22234__$1;
(statearr_22254_22297[(2)] = inst_22207);

(statearr_22254_22297[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22235 === (2))){
var state_22234__$1 = state_22234;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22234__$1,(4),ch);
} else {
if((state_val_22235 === (23))){
var inst_22211 = (state_22234[(11)]);
var inst_22215 = (state_22234[(2)]);
var inst_22216 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_22211);
var state_22234__$1 = (function (){var statearr_22255 = state_22234;
(statearr_22255[(17)] = inst_22215);

return statearr_22255;
})();
var statearr_22256_22298 = state_22234__$1;
(statearr_22256_22298[(2)] = inst_22216);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22234__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22235 === (19))){
var state_22234__$1 = state_22234;
var statearr_22257_22299 = state_22234__$1;
(statearr_22257_22299[(2)] = null);

(statearr_22257_22299[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22235 === (11))){
var inst_22173 = (state_22234[(13)]);
var inst_22187 = (state_22234[(10)]);
var inst_22187__$1 = cljs.core.seq.call(null,inst_22173);
var state_22234__$1 = (function (){var statearr_22258 = state_22234;
(statearr_22258[(10)] = inst_22187__$1);

return statearr_22258;
})();
if(inst_22187__$1){
var statearr_22259_22300 = state_22234__$1;
(statearr_22259_22300[(1)] = (13));

} else {
var statearr_22260_22301 = state_22234__$1;
(statearr_22260_22301[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22235 === (9))){
var inst_22209 = (state_22234[(2)]);
var state_22234__$1 = state_22234;
var statearr_22261_22302 = state_22234__$1;
(statearr_22261_22302[(2)] = inst_22209);

(statearr_22261_22302[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22235 === (5))){
var inst_22170 = cljs.core.deref.call(null,mults);
var inst_22171 = cljs.core.vals.call(null,inst_22170);
var inst_22172 = cljs.core.seq.call(null,inst_22171);
var inst_22173 = inst_22172;
var inst_22174 = null;
var inst_22175 = (0);
var inst_22176 = (0);
var state_22234__$1 = (function (){var statearr_22262 = state_22234;
(statearr_22262[(12)] = inst_22175);

(statearr_22262[(13)] = inst_22173);

(statearr_22262[(14)] = inst_22176);

(statearr_22262[(15)] = inst_22174);

return statearr_22262;
})();
var statearr_22263_22303 = state_22234__$1;
(statearr_22263_22303[(2)] = null);

(statearr_22263_22303[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22235 === (14))){
var state_22234__$1 = state_22234;
var statearr_22267_22304 = state_22234__$1;
(statearr_22267_22304[(2)] = null);

(statearr_22267_22304[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22235 === (16))){
var inst_22187 = (state_22234[(10)]);
var inst_22191 = cljs.core.chunk_first.call(null,inst_22187);
var inst_22192 = cljs.core.chunk_rest.call(null,inst_22187);
var inst_22193 = cljs.core.count.call(null,inst_22191);
var inst_22173 = inst_22192;
var inst_22174 = inst_22191;
var inst_22175 = inst_22193;
var inst_22176 = (0);
var state_22234__$1 = (function (){var statearr_22268 = state_22234;
(statearr_22268[(12)] = inst_22175);

(statearr_22268[(13)] = inst_22173);

(statearr_22268[(14)] = inst_22176);

(statearr_22268[(15)] = inst_22174);

return statearr_22268;
})();
var statearr_22269_22305 = state_22234__$1;
(statearr_22269_22305[(2)] = null);

(statearr_22269_22305[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22235 === (10))){
var inst_22175 = (state_22234[(12)]);
var inst_22173 = (state_22234[(13)]);
var inst_22176 = (state_22234[(14)]);
var inst_22174 = (state_22234[(15)]);
var inst_22181 = cljs.core._nth.call(null,inst_22174,inst_22176);
var inst_22182 = cljs.core.async.muxch_STAR_.call(null,inst_22181);
var inst_22183 = cljs.core.async.close_BANG_.call(null,inst_22182);
var inst_22184 = (inst_22176 + (1));
var tmp22264 = inst_22175;
var tmp22265 = inst_22173;
var tmp22266 = inst_22174;
var inst_22173__$1 = tmp22265;
var inst_22174__$1 = tmp22266;
var inst_22175__$1 = tmp22264;
var inst_22176__$1 = inst_22184;
var state_22234__$1 = (function (){var statearr_22270 = state_22234;
(statearr_22270[(12)] = inst_22175__$1);

(statearr_22270[(13)] = inst_22173__$1);

(statearr_22270[(14)] = inst_22176__$1);

(statearr_22270[(15)] = inst_22174__$1);

(statearr_22270[(18)] = inst_22183);

return statearr_22270;
})();
var statearr_22271_22306 = state_22234__$1;
(statearr_22271_22306[(2)] = null);

(statearr_22271_22306[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22235 === (18))){
var inst_22202 = (state_22234[(2)]);
var state_22234__$1 = state_22234;
var statearr_22272_22307 = state_22234__$1;
(statearr_22272_22307[(2)] = inst_22202);

(statearr_22272_22307[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22235 === (8))){
var inst_22175 = (state_22234[(12)]);
var inst_22176 = (state_22234[(14)]);
var inst_22178 = (inst_22176 < inst_22175);
var inst_22179 = inst_22178;
var state_22234__$1 = state_22234;
if(cljs.core.truth_(inst_22179)){
var statearr_22273_22308 = state_22234__$1;
(statearr_22273_22308[(1)] = (10));

} else {
var statearr_22274_22309 = state_22234__$1;
(statearr_22274_22309[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18230__auto___22282,mults,ensure_mult,p))
;
return ((function (switch__18215__auto__,c__18230__auto___22282,mults,ensure_mult,p){
return (function() {
var state_machine__18216__auto__ = null;
var state_machine__18216__auto____0 = (function (){
var statearr_22278 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22278[(0)] = state_machine__18216__auto__);

(statearr_22278[(1)] = (1));

return statearr_22278;
});
var state_machine__18216__auto____1 = (function (state_22234){
while(true){
var ret_value__18217__auto__ = (function (){try{while(true){
var result__18218__auto__ = switch__18215__auto__.call(null,state_22234);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18218__auto__;
}
break;
}
}catch (e22279){if((e22279 instanceof Object)){
var ex__18219__auto__ = e22279;
var statearr_22280_22310 = state_22234;
(statearr_22280_22310[(5)] = ex__18219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22234);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22279;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22311 = state_22234;
state_22234 = G__22311;
continue;
} else {
return ret_value__18217__auto__;
}
break;
}
});
state_machine__18216__auto__ = function(state_22234){
switch(arguments.length){
case 0:
return state_machine__18216__auto____0.call(this);
case 1:
return state_machine__18216__auto____1.call(this,state_22234);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18216__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18216__auto____0;
state_machine__18216__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18216__auto____1;
return state_machine__18216__auto__;
})()
;})(switch__18215__auto__,c__18230__auto___22282,mults,ensure_mult,p))
})();
var state__18232__auto__ = (function (){var statearr_22281 = f__18231__auto__.call(null);
(statearr_22281[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18230__auto___22282);

return statearr_22281;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18232__auto__);
});})(c__18230__auto___22282,mults,ensure_mult,p))
);


return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){
return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){
return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__18230__auto___22448 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18230__auto___22448,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__18231__auto__ = (function (){var switch__18215__auto__ = ((function (c__18230__auto___22448,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_22418){
var state_val_22419 = (state_22418[(1)]);
if((state_val_22419 === (7))){
var state_22418__$1 = state_22418;
var statearr_22420_22449 = state_22418__$1;
(statearr_22420_22449[(2)] = null);

(statearr_22420_22449[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22419 === (1))){
var state_22418__$1 = state_22418;
var statearr_22421_22450 = state_22418__$1;
(statearr_22421_22450[(2)] = null);

(statearr_22421_22450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22419 === (4))){
var inst_22382 = (state_22418[(7)]);
var inst_22384 = (inst_22382 < cnt);
var state_22418__$1 = state_22418;
if(cljs.core.truth_(inst_22384)){
var statearr_22422_22451 = state_22418__$1;
(statearr_22422_22451[(1)] = (6));

} else {
var statearr_22423_22452 = state_22418__$1;
(statearr_22423_22452[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22419 === (15))){
var inst_22414 = (state_22418[(2)]);
var state_22418__$1 = state_22418;
var statearr_22424_22453 = state_22418__$1;
(statearr_22424_22453[(2)] = inst_22414);

(statearr_22424_22453[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22419 === (13))){
var inst_22407 = cljs.core.async.close_BANG_.call(null,out);
var state_22418__$1 = state_22418;
var statearr_22425_22454 = state_22418__$1;
(statearr_22425_22454[(2)] = inst_22407);

(statearr_22425_22454[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22419 === (6))){
var state_22418__$1 = state_22418;
var statearr_22426_22455 = state_22418__$1;
(statearr_22426_22455[(2)] = null);

(statearr_22426_22455[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22419 === (3))){
var inst_22416 = (state_22418[(2)]);
var state_22418__$1 = state_22418;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22418__$1,inst_22416);
} else {
if((state_val_22419 === (12))){
var inst_22404 = (state_22418[(8)]);
var inst_22404__$1 = (state_22418[(2)]);
var inst_22405 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_22404__$1);
var state_22418__$1 = (function (){var statearr_22427 = state_22418;
(statearr_22427[(8)] = inst_22404__$1);

return statearr_22427;
})();
if(cljs.core.truth_(inst_22405)){
var statearr_22428_22456 = state_22418__$1;
(statearr_22428_22456[(1)] = (13));

} else {
var statearr_22429_22457 = state_22418__$1;
(statearr_22429_22457[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22419 === (2))){
var inst_22381 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_22382 = (0);
var state_22418__$1 = (function (){var statearr_22430 = state_22418;
(statearr_22430[(7)] = inst_22382);

(statearr_22430[(9)] = inst_22381);

return statearr_22430;
})();
var statearr_22431_22458 = state_22418__$1;
(statearr_22431_22458[(2)] = null);

(statearr_22431_22458[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22419 === (11))){
var inst_22382 = (state_22418[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22418,(10),Object,null,(9));
var inst_22391 = chs__$1.call(null,inst_22382);
var inst_22392 = done.call(null,inst_22382);
var inst_22393 = cljs.core.async.take_BANG_.call(null,inst_22391,inst_22392);
var state_22418__$1 = state_22418;
var statearr_22432_22459 = state_22418__$1;
(statearr_22432_22459[(2)] = inst_22393);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22418__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22419 === (9))){
var inst_22382 = (state_22418[(7)]);
var inst_22395 = (state_22418[(2)]);
var inst_22396 = (inst_22382 + (1));
var inst_22382__$1 = inst_22396;
var state_22418__$1 = (function (){var statearr_22433 = state_22418;
(statearr_22433[(7)] = inst_22382__$1);

(statearr_22433[(10)] = inst_22395);

return statearr_22433;
})();
var statearr_22434_22460 = state_22418__$1;
(statearr_22434_22460[(2)] = null);

(statearr_22434_22460[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22419 === (5))){
var inst_22402 = (state_22418[(2)]);
var state_22418__$1 = (function (){var statearr_22435 = state_22418;
(statearr_22435[(11)] = inst_22402);

return statearr_22435;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22418__$1,(12),dchan);
} else {
if((state_val_22419 === (14))){
var inst_22404 = (state_22418[(8)]);
var inst_22409 = cljs.core.apply.call(null,f,inst_22404);
var state_22418__$1 = state_22418;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22418__$1,(16),out,inst_22409);
} else {
if((state_val_22419 === (16))){
var inst_22411 = (state_22418[(2)]);
var state_22418__$1 = (function (){var statearr_22436 = state_22418;
(statearr_22436[(12)] = inst_22411);

return statearr_22436;
})();
var statearr_22437_22461 = state_22418__$1;
(statearr_22437_22461[(2)] = null);

(statearr_22437_22461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22419 === (10))){
var inst_22386 = (state_22418[(2)]);
var inst_22387 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_22418__$1 = (function (){var statearr_22438 = state_22418;
(statearr_22438[(13)] = inst_22386);

return statearr_22438;
})();
var statearr_22439_22462 = state_22418__$1;
(statearr_22439_22462[(2)] = inst_22387);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22418__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22419 === (8))){
var inst_22400 = (state_22418[(2)]);
var state_22418__$1 = state_22418;
var statearr_22440_22463 = state_22418__$1;
(statearr_22440_22463[(2)] = inst_22400);

(statearr_22440_22463[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18230__auto___22448,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__18215__auto__,c__18230__auto___22448,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__18216__auto__ = null;
var state_machine__18216__auto____0 = (function (){
var statearr_22444 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22444[(0)] = state_machine__18216__auto__);

(statearr_22444[(1)] = (1));

return statearr_22444;
});
var state_machine__18216__auto____1 = (function (state_22418){
while(true){
var ret_value__18217__auto__ = (function (){try{while(true){
var result__18218__auto__ = switch__18215__auto__.call(null,state_22418);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18218__auto__;
}
break;
}
}catch (e22445){if((e22445 instanceof Object)){
var ex__18219__auto__ = e22445;
var statearr_22446_22464 = state_22418;
(statearr_22446_22464[(5)] = ex__18219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22418);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22445;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22465 = state_22418;
state_22418 = G__22465;
continue;
} else {
return ret_value__18217__auto__;
}
break;
}
});
state_machine__18216__auto__ = function(state_22418){
switch(arguments.length){
case 0:
return state_machine__18216__auto____0.call(this);
case 1:
return state_machine__18216__auto____1.call(this,state_22418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18216__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18216__auto____0;
state_machine__18216__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18216__auto____1;
return state_machine__18216__auto__;
})()
;})(switch__18215__auto__,c__18230__auto___22448,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__18232__auto__ = (function (){var statearr_22447 = f__18231__auto__.call(null);
(statearr_22447[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18230__auto___22448);

return statearr_22447;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18232__auto__);
});})(c__18230__auto___22448,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){
return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18230__auto___22573 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18230__auto___22573,out){
return (function (){
var f__18231__auto__ = (function (){var switch__18215__auto__ = ((function (c__18230__auto___22573,out){
return (function (state_22549){
var state_val_22550 = (state_22549[(1)]);
if((state_val_22550 === (7))){
var inst_22529 = (state_22549[(7)]);
var inst_22528 = (state_22549[(8)]);
var inst_22528__$1 = (state_22549[(2)]);
var inst_22529__$1 = cljs.core.nth.call(null,inst_22528__$1,(0),null);
var inst_22530 = cljs.core.nth.call(null,inst_22528__$1,(1),null);
var inst_22531 = (inst_22529__$1 == null);
var state_22549__$1 = (function (){var statearr_22551 = state_22549;
(statearr_22551[(7)] = inst_22529__$1);

(statearr_22551[(8)] = inst_22528__$1);

(statearr_22551[(9)] = inst_22530);

return statearr_22551;
})();
if(cljs.core.truth_(inst_22531)){
var statearr_22552_22574 = state_22549__$1;
(statearr_22552_22574[(1)] = (8));

} else {
var statearr_22553_22575 = state_22549__$1;
(statearr_22553_22575[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22550 === (1))){
var inst_22520 = cljs.core.vec.call(null,chs);
var inst_22521 = inst_22520;
var state_22549__$1 = (function (){var statearr_22554 = state_22549;
(statearr_22554[(10)] = inst_22521);

return statearr_22554;
})();
var statearr_22555_22576 = state_22549__$1;
(statearr_22555_22576[(2)] = null);

(statearr_22555_22576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22550 === (4))){
var inst_22521 = (state_22549[(10)]);
var state_22549__$1 = state_22549;
return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_22549__$1,(7),inst_22521);
} else {
if((state_val_22550 === (6))){
var inst_22545 = (state_22549[(2)]);
var state_22549__$1 = state_22549;
var statearr_22556_22577 = state_22549__$1;
(statearr_22556_22577[(2)] = inst_22545);

(statearr_22556_22577[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22550 === (3))){
var inst_22547 = (state_22549[(2)]);
var state_22549__$1 = state_22549;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22549__$1,inst_22547);
} else {
if((state_val_22550 === (2))){
var inst_22521 = (state_22549[(10)]);
var inst_22523 = cljs.core.count.call(null,inst_22521);
var inst_22524 = (inst_22523 > (0));
var state_22549__$1 = state_22549;
if(cljs.core.truth_(inst_22524)){
var statearr_22558_22578 = state_22549__$1;
(statearr_22558_22578[(1)] = (4));

} else {
var statearr_22559_22579 = state_22549__$1;
(statearr_22559_22579[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22550 === (11))){
var inst_22521 = (state_22549[(10)]);
var inst_22538 = (state_22549[(2)]);
var tmp22557 = inst_22521;
var inst_22521__$1 = tmp22557;
var state_22549__$1 = (function (){var statearr_22560 = state_22549;
(statearr_22560[(10)] = inst_22521__$1);

(statearr_22560[(11)] = inst_22538);

return statearr_22560;
})();
var statearr_22561_22580 = state_22549__$1;
(statearr_22561_22580[(2)] = null);

(statearr_22561_22580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22550 === (9))){
var inst_22529 = (state_22549[(7)]);
var state_22549__$1 = state_22549;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22549__$1,(11),out,inst_22529);
} else {
if((state_val_22550 === (5))){
var inst_22543 = cljs.core.async.close_BANG_.call(null,out);
var state_22549__$1 = state_22549;
var statearr_22562_22581 = state_22549__$1;
(statearr_22562_22581[(2)] = inst_22543);

(statearr_22562_22581[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22550 === (10))){
var inst_22541 = (state_22549[(2)]);
var state_22549__$1 = state_22549;
var statearr_22563_22582 = state_22549__$1;
(statearr_22563_22582[(2)] = inst_22541);

(statearr_22563_22582[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22550 === (8))){
var inst_22529 = (state_22549[(7)]);
var inst_22528 = (state_22549[(8)]);
var inst_22521 = (state_22549[(10)]);
var inst_22530 = (state_22549[(9)]);
var inst_22533 = (function (){var c = inst_22530;
var v = inst_22529;
var vec__22526 = inst_22528;
var cs = inst_22521;
return ((function (c,v,vec__22526,cs,inst_22529,inst_22528,inst_22521,inst_22530,state_val_22550,c__18230__auto___22573,out){
return (function (p1__22466_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__22466_SHARP_);
});
;})(c,v,vec__22526,cs,inst_22529,inst_22528,inst_22521,inst_22530,state_val_22550,c__18230__auto___22573,out))
})();
var inst_22534 = cljs.core.filterv.call(null,inst_22533,inst_22521);
var inst_22521__$1 = inst_22534;
var state_22549__$1 = (function (){var statearr_22564 = state_22549;
(statearr_22564[(10)] = inst_22521__$1);

return statearr_22564;
})();
var statearr_22565_22583 = state_22549__$1;
(statearr_22565_22583[(2)] = null);

(statearr_22565_22583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__18230__auto___22573,out))
;
return ((function (switch__18215__auto__,c__18230__auto___22573,out){
return (function() {
var state_machine__18216__auto__ = null;
var state_machine__18216__auto____0 = (function (){
var statearr_22569 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22569[(0)] = state_machine__18216__auto__);

(statearr_22569[(1)] = (1));

return statearr_22569;
});
var state_machine__18216__auto____1 = (function (state_22549){
while(true){
var ret_value__18217__auto__ = (function (){try{while(true){
var result__18218__auto__ = switch__18215__auto__.call(null,state_22549);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18218__auto__;
}
break;
}
}catch (e22570){if((e22570 instanceof Object)){
var ex__18219__auto__ = e22570;
var statearr_22571_22584 = state_22549;
(statearr_22571_22584[(5)] = ex__18219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22549);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22570;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22585 = state_22549;
state_22549 = G__22585;
continue;
} else {
return ret_value__18217__auto__;
}
break;
}
});
state_machine__18216__auto__ = function(state_22549){
switch(arguments.length){
case 0:
return state_machine__18216__auto____0.call(this);
case 1:
return state_machine__18216__auto____1.call(this,state_22549);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18216__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18216__auto____0;
state_machine__18216__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18216__auto____1;
return state_machine__18216__auto__;
})()
;})(switch__18215__auto__,c__18230__auto___22573,out))
})();
var state__18232__auto__ = (function (){var statearr_22572 = f__18231__auto__.call(null);
(statearr_22572[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18230__auto___22573);

return statearr_22572;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18232__auto__);
});})(c__18230__auto___22573,out))
);


return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){
return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18230__auto___22678 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18230__auto___22678,out){
return (function (){
var f__18231__auto__ = (function (){var switch__18215__auto__ = ((function (c__18230__auto___22678,out){
return (function (state_22655){
var state_val_22656 = (state_22655[(1)]);
if((state_val_22656 === (7))){
var inst_22637 = (state_22655[(7)]);
var inst_22637__$1 = (state_22655[(2)]);
var inst_22638 = (inst_22637__$1 == null);
var inst_22639 = cljs.core.not.call(null,inst_22638);
var state_22655__$1 = (function (){var statearr_22657 = state_22655;
(statearr_22657[(7)] = inst_22637__$1);

return statearr_22657;
})();
if(inst_22639){
var statearr_22658_22679 = state_22655__$1;
(statearr_22658_22679[(1)] = (8));

} else {
var statearr_22659_22680 = state_22655__$1;
(statearr_22659_22680[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22656 === (1))){
var inst_22632 = (0);
var state_22655__$1 = (function (){var statearr_22660 = state_22655;
(statearr_22660[(8)] = inst_22632);

return statearr_22660;
})();
var statearr_22661_22681 = state_22655__$1;
(statearr_22661_22681[(2)] = null);

(statearr_22661_22681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22656 === (4))){
var state_22655__$1 = state_22655;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22655__$1,(7),ch);
} else {
if((state_val_22656 === (6))){
var inst_22650 = (state_22655[(2)]);
var state_22655__$1 = state_22655;
var statearr_22662_22682 = state_22655__$1;
(statearr_22662_22682[(2)] = inst_22650);

(statearr_22662_22682[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22656 === (3))){
var inst_22652 = (state_22655[(2)]);
var inst_22653 = cljs.core.async.close_BANG_.call(null,out);
var state_22655__$1 = (function (){var statearr_22663 = state_22655;
(statearr_22663[(9)] = inst_22652);

return statearr_22663;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22655__$1,inst_22653);
} else {
if((state_val_22656 === (2))){
var inst_22632 = (state_22655[(8)]);
var inst_22634 = (inst_22632 < n);
var state_22655__$1 = state_22655;
if(cljs.core.truth_(inst_22634)){
var statearr_22664_22683 = state_22655__$1;
(statearr_22664_22683[(1)] = (4));

} else {
var statearr_22665_22684 = state_22655__$1;
(statearr_22665_22684[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22656 === (11))){
var inst_22632 = (state_22655[(8)]);
var inst_22642 = (state_22655[(2)]);
var inst_22643 = (inst_22632 + (1));
var inst_22632__$1 = inst_22643;
var state_22655__$1 = (function (){var statearr_22666 = state_22655;
(statearr_22666[(10)] = inst_22642);

(statearr_22666[(8)] = inst_22632__$1);

return statearr_22666;
})();
var statearr_22667_22685 = state_22655__$1;
(statearr_22667_22685[(2)] = null);

(statearr_22667_22685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22656 === (9))){
var state_22655__$1 = state_22655;
var statearr_22668_22686 = state_22655__$1;
(statearr_22668_22686[(2)] = null);

(statearr_22668_22686[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22656 === (5))){
var state_22655__$1 = state_22655;
var statearr_22669_22687 = state_22655__$1;
(statearr_22669_22687[(2)] = null);

(statearr_22669_22687[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22656 === (10))){
var inst_22647 = (state_22655[(2)]);
var state_22655__$1 = state_22655;
var statearr_22670_22688 = state_22655__$1;
(statearr_22670_22688[(2)] = inst_22647);

(statearr_22670_22688[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22656 === (8))){
var inst_22637 = (state_22655[(7)]);
var state_22655__$1 = state_22655;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22655__$1,(11),out,inst_22637);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__18230__auto___22678,out))
;
return ((function (switch__18215__auto__,c__18230__auto___22678,out){
return (function() {
var state_machine__18216__auto__ = null;
var state_machine__18216__auto____0 = (function (){
var statearr_22674 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22674[(0)] = state_machine__18216__auto__);

(statearr_22674[(1)] = (1));

return statearr_22674;
});
var state_machine__18216__auto____1 = (function (state_22655){
while(true){
var ret_value__18217__auto__ = (function (){try{while(true){
var result__18218__auto__ = switch__18215__auto__.call(null,state_22655);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18218__auto__;
}
break;
}
}catch (e22675){if((e22675 instanceof Object)){
var ex__18219__auto__ = e22675;
var statearr_22676_22689 = state_22655;
(statearr_22676_22689[(5)] = ex__18219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22655);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22675;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22690 = state_22655;
state_22655 = G__22690;
continue;
} else {
return ret_value__18217__auto__;
}
break;
}
});
state_machine__18216__auto__ = function(state_22655){
switch(arguments.length){
case 0:
return state_machine__18216__auto____0.call(this);
case 1:
return state_machine__18216__auto____1.call(this,state_22655);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18216__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18216__auto____0;
state_machine__18216__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18216__auto____1;
return state_machine__18216__auto__;
})()
;})(switch__18215__auto__,c__18230__auto___22678,out))
})();
var state__18232__auto__ = (function (){var statearr_22677 = f__18231__auto__.call(null);
(statearr_22677[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18230__auto___22678);

return statearr_22677;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18232__auto__);
});})(c__18230__auto___22678,out))
);


return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){
return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18230__auto___22787 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18230__auto___22787,out){
return (function (){
var f__18231__auto__ = (function (){var switch__18215__auto__ = ((function (c__18230__auto___22787,out){
return (function (state_22762){
var state_val_22763 = (state_22762[(1)]);
if((state_val_22763 === (7))){
var inst_22757 = (state_22762[(2)]);
var state_22762__$1 = state_22762;
var statearr_22764_22788 = state_22762__$1;
(statearr_22764_22788[(2)] = inst_22757);

(statearr_22764_22788[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22763 === (1))){
var inst_22739 = null;
var state_22762__$1 = (function (){var statearr_22765 = state_22762;
(statearr_22765[(7)] = inst_22739);

return statearr_22765;
})();
var statearr_22766_22789 = state_22762__$1;
(statearr_22766_22789[(2)] = null);

(statearr_22766_22789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22763 === (4))){
var inst_22742 = (state_22762[(8)]);
var inst_22742__$1 = (state_22762[(2)]);
var inst_22743 = (inst_22742__$1 == null);
var inst_22744 = cljs.core.not.call(null,inst_22743);
var state_22762__$1 = (function (){var statearr_22767 = state_22762;
(statearr_22767[(8)] = inst_22742__$1);

return statearr_22767;
})();
if(inst_22744){
var statearr_22768_22790 = state_22762__$1;
(statearr_22768_22790[(1)] = (5));

} else {
var statearr_22769_22791 = state_22762__$1;
(statearr_22769_22791[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22763 === (6))){
var state_22762__$1 = state_22762;
var statearr_22770_22792 = state_22762__$1;
(statearr_22770_22792[(2)] = null);

(statearr_22770_22792[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22763 === (3))){
var inst_22759 = (state_22762[(2)]);
var inst_22760 = cljs.core.async.close_BANG_.call(null,out);
var state_22762__$1 = (function (){var statearr_22771 = state_22762;
(statearr_22771[(9)] = inst_22759);

return statearr_22771;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22762__$1,inst_22760);
} else {
if((state_val_22763 === (2))){
var state_22762__$1 = state_22762;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22762__$1,(4),ch);
} else {
if((state_val_22763 === (11))){
var inst_22742 = (state_22762[(8)]);
var inst_22751 = (state_22762[(2)]);
var inst_22739 = inst_22742;
var state_22762__$1 = (function (){var statearr_22772 = state_22762;
(statearr_22772[(7)] = inst_22739);

(statearr_22772[(10)] = inst_22751);

return statearr_22772;
})();
var statearr_22773_22793 = state_22762__$1;
(statearr_22773_22793[(2)] = null);

(statearr_22773_22793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22763 === (9))){
var inst_22742 = (state_22762[(8)]);
var state_22762__$1 = state_22762;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22762__$1,(11),out,inst_22742);
} else {
if((state_val_22763 === (5))){
var inst_22739 = (state_22762[(7)]);
var inst_22742 = (state_22762[(8)]);
var inst_22746 = cljs.core._EQ_.call(null,inst_22742,inst_22739);
var state_22762__$1 = state_22762;
if(inst_22746){
var statearr_22775_22794 = state_22762__$1;
(statearr_22775_22794[(1)] = (8));

} else {
var statearr_22776_22795 = state_22762__$1;
(statearr_22776_22795[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22763 === (10))){
var inst_22754 = (state_22762[(2)]);
var state_22762__$1 = state_22762;
var statearr_22777_22796 = state_22762__$1;
(statearr_22777_22796[(2)] = inst_22754);

(statearr_22777_22796[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22763 === (8))){
var inst_22739 = (state_22762[(7)]);
var tmp22774 = inst_22739;
var inst_22739__$1 = tmp22774;
var state_22762__$1 = (function (){var statearr_22778 = state_22762;
(statearr_22778[(7)] = inst_22739__$1);

return statearr_22778;
})();
var statearr_22779_22797 = state_22762__$1;
(statearr_22779_22797[(2)] = null);

(statearr_22779_22797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__18230__auto___22787,out))
;
return ((function (switch__18215__auto__,c__18230__auto___22787,out){
return (function() {
var state_machine__18216__auto__ = null;
var state_machine__18216__auto____0 = (function (){
var statearr_22783 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22783[(0)] = state_machine__18216__auto__);

(statearr_22783[(1)] = (1));

return statearr_22783;
});
var state_machine__18216__auto____1 = (function (state_22762){
while(true){
var ret_value__18217__auto__ = (function (){try{while(true){
var result__18218__auto__ = switch__18215__auto__.call(null,state_22762);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18218__auto__;
}
break;
}
}catch (e22784){if((e22784 instanceof Object)){
var ex__18219__auto__ = e22784;
var statearr_22785_22798 = state_22762;
(statearr_22785_22798[(5)] = ex__18219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22762);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22784;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22799 = state_22762;
state_22762 = G__22799;
continue;
} else {
return ret_value__18217__auto__;
}
break;
}
});
state_machine__18216__auto__ = function(state_22762){
switch(arguments.length){
case 0:
return state_machine__18216__auto____0.call(this);
case 1:
return state_machine__18216__auto____1.call(this,state_22762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18216__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18216__auto____0;
state_machine__18216__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18216__auto____1;
return state_machine__18216__auto__;
})()
;})(switch__18215__auto__,c__18230__auto___22787,out))
})();
var state__18232__auto__ = (function (){var statearr_22786 = f__18231__auto__.call(null);
(statearr_22786[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18230__auto___22787);

return statearr_22786;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18232__auto__);
});})(c__18230__auto___22787,out))
);


return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){
return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18230__auto___22934 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18230__auto___22934,out){
return (function (){
var f__18231__auto__ = (function (){var switch__18215__auto__ = ((function (c__18230__auto___22934,out){
return (function (state_22904){
var state_val_22905 = (state_22904[(1)]);
if((state_val_22905 === (7))){
var inst_22900 = (state_22904[(2)]);
var state_22904__$1 = state_22904;
var statearr_22906_22935 = state_22904__$1;
(statearr_22906_22935[(2)] = inst_22900);

(statearr_22906_22935[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22905 === (1))){
var inst_22867 = (new Array(n));
var inst_22868 = inst_22867;
var inst_22869 = (0);
var state_22904__$1 = (function (){var statearr_22907 = state_22904;
(statearr_22907[(7)] = inst_22869);

(statearr_22907[(8)] = inst_22868);

return statearr_22907;
})();
var statearr_22908_22936 = state_22904__$1;
(statearr_22908_22936[(2)] = null);

(statearr_22908_22936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22905 === (4))){
var inst_22872 = (state_22904[(9)]);
var inst_22872__$1 = (state_22904[(2)]);
var inst_22873 = (inst_22872__$1 == null);
var inst_22874 = cljs.core.not.call(null,inst_22873);
var state_22904__$1 = (function (){var statearr_22909 = state_22904;
(statearr_22909[(9)] = inst_22872__$1);

return statearr_22909;
})();
if(inst_22874){
var statearr_22910_22937 = state_22904__$1;
(statearr_22910_22937[(1)] = (5));

} else {
var statearr_22911_22938 = state_22904__$1;
(statearr_22911_22938[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22905 === (15))){
var inst_22894 = (state_22904[(2)]);
var state_22904__$1 = state_22904;
var statearr_22912_22939 = state_22904__$1;
(statearr_22912_22939[(2)] = inst_22894);

(statearr_22912_22939[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22905 === (13))){
var state_22904__$1 = state_22904;
var statearr_22913_22940 = state_22904__$1;
(statearr_22913_22940[(2)] = null);

(statearr_22913_22940[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22905 === (6))){
var inst_22869 = (state_22904[(7)]);
var inst_22890 = (inst_22869 > (0));
var state_22904__$1 = state_22904;
if(cljs.core.truth_(inst_22890)){
var statearr_22914_22941 = state_22904__$1;
(statearr_22914_22941[(1)] = (12));

} else {
var statearr_22915_22942 = state_22904__$1;
(statearr_22915_22942[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22905 === (3))){
var inst_22902 = (state_22904[(2)]);
var state_22904__$1 = state_22904;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22904__$1,inst_22902);
} else {
if((state_val_22905 === (12))){
var inst_22868 = (state_22904[(8)]);
var inst_22892 = cljs.core.vec.call(null,inst_22868);
var state_22904__$1 = state_22904;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22904__$1,(15),out,inst_22892);
} else {
if((state_val_22905 === (2))){
var state_22904__$1 = state_22904;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22904__$1,(4),ch);
} else {
if((state_val_22905 === (11))){
var inst_22884 = (state_22904[(2)]);
var inst_22885 = (new Array(n));
var inst_22868 = inst_22885;
var inst_22869 = (0);
var state_22904__$1 = (function (){var statearr_22916 = state_22904;
(statearr_22916[(7)] = inst_22869);

(statearr_22916[(10)] = inst_22884);

(statearr_22916[(8)] = inst_22868);

return statearr_22916;
})();
var statearr_22917_22943 = state_22904__$1;
(statearr_22917_22943[(2)] = null);

(statearr_22917_22943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22905 === (9))){
var inst_22868 = (state_22904[(8)]);
var inst_22882 = cljs.core.vec.call(null,inst_22868);
var state_22904__$1 = state_22904;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22904__$1,(11),out,inst_22882);
} else {
if((state_val_22905 === (5))){
var inst_22877 = (state_22904[(11)]);
var inst_22869 = (state_22904[(7)]);
var inst_22868 = (state_22904[(8)]);
var inst_22872 = (state_22904[(9)]);
var inst_22876 = (inst_22868[inst_22869] = inst_22872);
var inst_22877__$1 = (inst_22869 + (1));
var inst_22878 = (inst_22877__$1 < n);
var state_22904__$1 = (function (){var statearr_22918 = state_22904;
(statearr_22918[(11)] = inst_22877__$1);

(statearr_22918[(12)] = inst_22876);

return statearr_22918;
})();
if(cljs.core.truth_(inst_22878)){
var statearr_22919_22944 = state_22904__$1;
(statearr_22919_22944[(1)] = (8));

} else {
var statearr_22920_22945 = state_22904__$1;
(statearr_22920_22945[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22905 === (14))){
var inst_22897 = (state_22904[(2)]);
var inst_22898 = cljs.core.async.close_BANG_.call(null,out);
var state_22904__$1 = (function (){var statearr_22922 = state_22904;
(statearr_22922[(13)] = inst_22897);

return statearr_22922;
})();
var statearr_22923_22946 = state_22904__$1;
(statearr_22923_22946[(2)] = inst_22898);

(statearr_22923_22946[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22905 === (10))){
var inst_22888 = (state_22904[(2)]);
var state_22904__$1 = state_22904;
var statearr_22924_22947 = state_22904__$1;
(statearr_22924_22947[(2)] = inst_22888);

(statearr_22924_22947[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22905 === (8))){
var inst_22877 = (state_22904[(11)]);
var inst_22868 = (state_22904[(8)]);
var tmp22921 = inst_22868;
var inst_22868__$1 = tmp22921;
var inst_22869 = inst_22877;
var state_22904__$1 = (function (){var statearr_22925 = state_22904;
(statearr_22925[(7)] = inst_22869);

(statearr_22925[(8)] = inst_22868__$1);

return statearr_22925;
})();
var statearr_22926_22948 = state_22904__$1;
(statearr_22926_22948[(2)] = null);

(statearr_22926_22948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18230__auto___22934,out))
;
return ((function (switch__18215__auto__,c__18230__auto___22934,out){
return (function() {
var state_machine__18216__auto__ = null;
var state_machine__18216__auto____0 = (function (){
var statearr_22930 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22930[(0)] = state_machine__18216__auto__);

(statearr_22930[(1)] = (1));

return statearr_22930;
});
var state_machine__18216__auto____1 = (function (state_22904){
while(true){
var ret_value__18217__auto__ = (function (){try{while(true){
var result__18218__auto__ = switch__18215__auto__.call(null,state_22904);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18218__auto__;
}
break;
}
}catch (e22931){if((e22931 instanceof Object)){
var ex__18219__auto__ = e22931;
var statearr_22932_22949 = state_22904;
(statearr_22932_22949[(5)] = ex__18219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22904);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22931;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22950 = state_22904;
state_22904 = G__22950;
continue;
} else {
return ret_value__18217__auto__;
}
break;
}
});
state_machine__18216__auto__ = function(state_22904){
switch(arguments.length){
case 0:
return state_machine__18216__auto____0.call(this);
case 1:
return state_machine__18216__auto____1.call(this,state_22904);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18216__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18216__auto____0;
state_machine__18216__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18216__auto____1;
return state_machine__18216__auto__;
})()
;})(switch__18215__auto__,c__18230__auto___22934,out))
})();
var state__18232__auto__ = (function (){var statearr_22933 = f__18231__auto__.call(null);
(statearr_22933[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18230__auto___22934);

return statearr_22933;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18232__auto__);
});})(c__18230__auto___22934,out))
);


return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){
return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18230__auto___23093 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18230__auto___23093,out){
return (function (){
var f__18231__auto__ = (function (){var switch__18215__auto__ = ((function (c__18230__auto___23093,out){
return (function (state_23063){
var state_val_23064 = (state_23063[(1)]);
if((state_val_23064 === (7))){
var inst_23059 = (state_23063[(2)]);
var state_23063__$1 = state_23063;
var statearr_23065_23094 = state_23063__$1;
(statearr_23065_23094[(2)] = inst_23059);

(statearr_23065_23094[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23064 === (1))){
var inst_23022 = [];
var inst_23023 = inst_23022;
var inst_23024 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_23063__$1 = (function (){var statearr_23066 = state_23063;
(statearr_23066[(7)] = inst_23024);

(statearr_23066[(8)] = inst_23023);

return statearr_23066;
})();
var statearr_23067_23095 = state_23063__$1;
(statearr_23067_23095[(2)] = null);

(statearr_23067_23095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23064 === (4))){
var inst_23027 = (state_23063[(9)]);
var inst_23027__$1 = (state_23063[(2)]);
var inst_23028 = (inst_23027__$1 == null);
var inst_23029 = cljs.core.not.call(null,inst_23028);
var state_23063__$1 = (function (){var statearr_23068 = state_23063;
(statearr_23068[(9)] = inst_23027__$1);

return statearr_23068;
})();
if(inst_23029){
var statearr_23069_23096 = state_23063__$1;
(statearr_23069_23096[(1)] = (5));

} else {
var statearr_23070_23097 = state_23063__$1;
(statearr_23070_23097[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23064 === (15))){
var inst_23053 = (state_23063[(2)]);
var state_23063__$1 = state_23063;
var statearr_23071_23098 = state_23063__$1;
(statearr_23071_23098[(2)] = inst_23053);

(statearr_23071_23098[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23064 === (13))){
var state_23063__$1 = state_23063;
var statearr_23072_23099 = state_23063__$1;
(statearr_23072_23099[(2)] = null);

(statearr_23072_23099[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23064 === (6))){
var inst_23023 = (state_23063[(8)]);
var inst_23048 = inst_23023.length;
var inst_23049 = (inst_23048 > (0));
var state_23063__$1 = state_23063;
if(cljs.core.truth_(inst_23049)){
var statearr_23073_23100 = state_23063__$1;
(statearr_23073_23100[(1)] = (12));

} else {
var statearr_23074_23101 = state_23063__$1;
(statearr_23074_23101[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23064 === (3))){
var inst_23061 = (state_23063[(2)]);
var state_23063__$1 = state_23063;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23063__$1,inst_23061);
} else {
if((state_val_23064 === (12))){
var inst_23023 = (state_23063[(8)]);
var inst_23051 = cljs.core.vec.call(null,inst_23023);
var state_23063__$1 = state_23063;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23063__$1,(15),out,inst_23051);
} else {
if((state_val_23064 === (2))){
var state_23063__$1 = state_23063;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23063__$1,(4),ch);
} else {
if((state_val_23064 === (11))){
var inst_23027 = (state_23063[(9)]);
var inst_23031 = (state_23063[(10)]);
var inst_23041 = (state_23063[(2)]);
var inst_23042 = [];
var inst_23043 = inst_23042.push(inst_23027);
var inst_23023 = inst_23042;
var inst_23024 = inst_23031;
var state_23063__$1 = (function (){var statearr_23075 = state_23063;
(statearr_23075[(11)] = inst_23041);

(statearr_23075[(7)] = inst_23024);

(statearr_23075[(8)] = inst_23023);

(statearr_23075[(12)] = inst_23043);

return statearr_23075;
})();
var statearr_23076_23102 = state_23063__$1;
(statearr_23076_23102[(2)] = null);

(statearr_23076_23102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23064 === (9))){
var inst_23023 = (state_23063[(8)]);
var inst_23039 = cljs.core.vec.call(null,inst_23023);
var state_23063__$1 = state_23063;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23063__$1,(11),out,inst_23039);
} else {
if((state_val_23064 === (5))){
var inst_23027 = (state_23063[(9)]);
var inst_23024 = (state_23063[(7)]);
var inst_23031 = (state_23063[(10)]);
var inst_23031__$1 = f.call(null,inst_23027);
var inst_23032 = cljs.core._EQ_.call(null,inst_23031__$1,inst_23024);
var inst_23033 = cljs.core.keyword_identical_QMARK_.call(null,inst_23024,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_23034 = (inst_23032) || (inst_23033);
var state_23063__$1 = (function (){var statearr_23077 = state_23063;
(statearr_23077[(10)] = inst_23031__$1);

return statearr_23077;
})();
if(cljs.core.truth_(inst_23034)){
var statearr_23078_23103 = state_23063__$1;
(statearr_23078_23103[(1)] = (8));

} else {
var statearr_23079_23104 = state_23063__$1;
(statearr_23079_23104[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23064 === (14))){
var inst_23056 = (state_23063[(2)]);
var inst_23057 = cljs.core.async.close_BANG_.call(null,out);
var state_23063__$1 = (function (){var statearr_23081 = state_23063;
(statearr_23081[(13)] = inst_23056);

return statearr_23081;
})();
var statearr_23082_23105 = state_23063__$1;
(statearr_23082_23105[(2)] = inst_23057);

(statearr_23082_23105[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23064 === (10))){
var inst_23046 = (state_23063[(2)]);
var state_23063__$1 = state_23063;
var statearr_23083_23106 = state_23063__$1;
(statearr_23083_23106[(2)] = inst_23046);

(statearr_23083_23106[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23064 === (8))){
var inst_23027 = (state_23063[(9)]);
var inst_23023 = (state_23063[(8)]);
var inst_23031 = (state_23063[(10)]);
var inst_23036 = inst_23023.push(inst_23027);
var tmp23080 = inst_23023;
var inst_23023__$1 = tmp23080;
var inst_23024 = inst_23031;
var state_23063__$1 = (function (){var statearr_23084 = state_23063;
(statearr_23084[(7)] = inst_23024);

(statearr_23084[(8)] = inst_23023__$1);

(statearr_23084[(14)] = inst_23036);

return statearr_23084;
})();
var statearr_23085_23107 = state_23063__$1;
(statearr_23085_23107[(2)] = null);

(statearr_23085_23107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18230__auto___23093,out))
;
return ((function (switch__18215__auto__,c__18230__auto___23093,out){
return (function() {
var state_machine__18216__auto__ = null;
var state_machine__18216__auto____0 = (function (){
var statearr_23089 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23089[(0)] = state_machine__18216__auto__);

(statearr_23089[(1)] = (1));

return statearr_23089;
});
var state_machine__18216__auto____1 = (function (state_23063){
while(true){
var ret_value__18217__auto__ = (function (){try{while(true){
var result__18218__auto__ = switch__18215__auto__.call(null,state_23063);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18218__auto__;
}
break;
}
}catch (e23090){if((e23090 instanceof Object)){
var ex__18219__auto__ = e23090;
var statearr_23091_23108 = state_23063;
(statearr_23091_23108[(5)] = ex__18219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23063);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23090;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23109 = state_23063;
state_23063 = G__23109;
continue;
} else {
return ret_value__18217__auto__;
}
break;
}
});
state_machine__18216__auto__ = function(state_23063){
switch(arguments.length){
case 0:
return state_machine__18216__auto____0.call(this);
case 1:
return state_machine__18216__auto____1.call(this,state_23063);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18216__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18216__auto____0;
state_machine__18216__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18216__auto____1;
return state_machine__18216__auto__;
})()
;})(switch__18215__auto__,c__18230__auto___23093,out))
})();
var state__18232__auto__ = (function (){var statearr_23092 = f__18231__auto__.call(null);
(statearr_23092[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18230__auto___23093);

return statearr_23092;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18232__auto__);
});})(c__18230__auto___23093,out))
);


return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map