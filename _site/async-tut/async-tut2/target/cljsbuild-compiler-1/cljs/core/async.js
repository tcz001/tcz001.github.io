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
if(typeof cljs.core.async.t25841 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25841 = (function (f,fn_handler,meta25842){
this.f = f;
this.fn_handler = fn_handler;
this.meta25842 = meta25842;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25841.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t25841.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t25841.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t25841.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25843){
var self__ = this;
var _25843__$1 = this;
return self__.meta25842;
});

cljs.core.async.t25841.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25843,meta25842__$1){
var self__ = this;
var _25843__$1 = this;
return (new cljs.core.async.t25841(self__.f,self__.fn_handler,meta25842__$1));
});

cljs.core.async.t25841.cljs$lang$type = true;

cljs.core.async.t25841.cljs$lang$ctorStr = "cljs.core.async/t25841";

cljs.core.async.t25841.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write(writer__4226__auto__,"cljs.core.async/t25841");
});

cljs.core.async.__GT_t25841 = (function __GT_t25841(f__$1,fn_handler__$1,meta25842){
return (new cljs.core.async.t25841(f__$1,fn_handler__$1,meta25842));
});

}

return (new cljs.core.async.t25841(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$29,20,cljs.core.constant$keyword$30,15,cljs.core.constant$keyword$31,3,cljs.core.constant$keyword$32,12,cljs.core.constant$keyword$33,"/Users/twer/dev/clojure/async-tut1/target/cljsbuild-compiler-1/cljs/core/async.cljs"], null)));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){
var G__25845 = buff;
if(G__25845){
var bit__4319__auto__ = null;
if(cljs.core.truth_((function (){var or__3638__auto__ = bit__4319__auto__;
if(cljs.core.truth_(or__3638__auto__)){
return or__3638__auto__;
} else {
return G__25845.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__25845.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__25845);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__25845);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){
return chan.cljs$core$IFn$_invoke$arity$1(null);
});
var chan__1 = (function (buf_or_n){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
return cljs.core.async.impl.channels.chan(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1));
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
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));

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
return take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler(fn1));
if(cljs.core.truth_(ret)){
var val_25856 = (function (){var G__25853 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25853) : cljs.core.deref.call(null,G__25853));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__25854_25857 = val_25856;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__25854_25857) : fn1.call(null,G__25854_25857));
} else {
cljs.core.async.impl.dispatch.run(((function (val_25856,ret){
return (function (){
var G__25855 = val_25856;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__25855) : fn1.call(null,G__25855));
});})(val_25856,ret))
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
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));

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
return put_BANG_.cljs$core$IFn$_invoke$arity$3(port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){
return put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler(fn0));
if(cljs.core.truth_((function (){var and__3626__auto__ = ret;
if(cljs.core.truth_(and__3626__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(fn0,cljs.core.async.nop);
} else {
return and__3626__auto__;
}
})())){
if(cljs.core.truth_(on_caller_QMARK_)){
(fn0.cljs$core$IFn$_invoke$arity$0 ? fn0.cljs$core$IFn$_invoke$arity$0() : fn0.call(null));
} else {
cljs.core.async.impl.dispatch.run(fn0);
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
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function random_array(n){
var a = (new Array(n));
var n__4525__auto___25865 = n;
var x_25866 = (0);
while(true){
if((x_25866 < n__4525__auto___25865)){
(a[x_25866] = (0));

var G__25867 = (x_25866 + (1));
x_25866 = G__25867;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__25868 = (i + (1));
i = G__25868;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = (function (){var G__25876 = true;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25876) : cljs.core.atom.call(null,G__25876));
})();
if(typeof cljs.core.async.t25877 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25877 = (function (flag,alt_flag,meta25878){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta25878 = meta25878;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25877.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t25877.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__25880 = self__.flag;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25880) : cljs.core.deref.call(null,G__25880));
});})(flag))
;

cljs.core.async.t25877.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__25881_25883 = self__.flag;
var G__25882_25884 = null;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25881_25883,G__25882_25884) : cljs.core.reset_BANG_.call(null,G__25881_25883,G__25882_25884));

return true;
});})(flag))
;

cljs.core.async.t25877.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_25879){
var self__ = this;
var _25879__$1 = this;
return self__.meta25878;
});})(flag))
;

cljs.core.async.t25877.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_25879,meta25878__$1){
var self__ = this;
var _25879__$1 = this;
return (new cljs.core.async.t25877(self__.flag,self__.alt_flag,meta25878__$1));
});})(flag))
;

cljs.core.async.t25877.cljs$lang$type = true;

cljs.core.async.t25877.cljs$lang$ctorStr = "cljs.core.async/t25877";

cljs.core.async.t25877.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write(writer__4226__auto__,"cljs.core.async/t25877");
});})(flag))
;

cljs.core.async.__GT_t25877 = ((function (flag){
return (function __GT_t25877(flag__$1,alt_flag__$1,meta25878){
return (new cljs.core.async.t25877(flag__$1,alt_flag__$1,meta25878));
});})(flag))
;

}

return (new cljs.core.async.t25877(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$29,15,cljs.core.constant$keyword$30,128,cljs.core.constant$keyword$31,5,cljs.core.constant$keyword$32,123,cljs.core.constant$keyword$33,"/Users/twer/dev/clojure/async-tut1/target/cljsbuild-compiler-1/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t25888 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25888 = (function (cb,flag,alt_handler,meta25889){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta25889 = meta25889;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25888.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t25888.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t25888.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t25888.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25890){
var self__ = this;
var _25890__$1 = this;
return self__.meta25889;
});

cljs.core.async.t25888.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25890,meta25889__$1){
var self__ = this;
var _25890__$1 = this;
return (new cljs.core.async.t25888(self__.cb,self__.flag,self__.alt_handler,meta25889__$1));
});

cljs.core.async.t25888.cljs$lang$type = true;

cljs.core.async.t25888.cljs$lang$ctorStr = "cljs.core.async/t25888";

cljs.core.async.t25888.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write(writer__4226__auto__,"cljs.core.async/t25888");
});

cljs.core.async.__GT_t25888 = (function __GT_t25888(cb__$1,flag__$1,alt_handler__$1,meta25889){
return (new cljs.core.async.t25888(cb__$1,flag__$1,alt_handler__$1,meta25889));
});

}

return (new cljs.core.async.t25888(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$29,11,cljs.core.constant$keyword$30,136,cljs.core.constant$keyword$31,3,cljs.core.constant$keyword$32,131,cljs.core.constant$keyword$33,"/Users/twer/dev/clojure/async-tut1/target/cljsbuild-compiler-1/cljs/core/async.cljs"], null)));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.constant$keyword$65.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(function (){var G__25897 = (0);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__25897) : port.call(null,G__25897));
})():null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (function (){var G__25898 = (1);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__25898) : port.call(null,G__25898));
})();
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){
var G__25899 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__25899) : fret.call(null,G__25899));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25891_SHARP_){
var G__25900 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25891_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__25900) : fret.call(null,G__25900));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__25901 = vbox;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25901) : cljs.core.deref.call(null,G__25901));
})(),(function (){var or__3638__auto__ = wport;
if(cljs.core.truth_(or__3638__auto__)){
return or__3638__auto__;
} else {
return port;
}
})()], null));
} else {
var G__25902 = (i + (1));
i = G__25902;
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
if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$28)){
var temp__4126__auto__ = (function (){var and__3626__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__3626__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__3626__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$28.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$28], null));
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
var alts_BANG___delegate = function (ports,p__25903){
var map__25905 = p__25903;
var map__25905__$1 = ((cljs.core.seq_QMARK_(map__25905))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25905):map__25905);
var opts = map__25905__$1;
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));

};
var alts_BANG_ = function (ports,var_args){
var p__25903 = null;
if (arguments.length > 1) {
  p__25903 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__25903);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__25906){
var ports = cljs.core.first(arglist__25906);
var p__25903 = cljs.core.rest(arglist__25906);
return alts_BANG___delegate(ports,p__25903);
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
if(typeof cljs.core.async.t25920 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25920 = (function (ch,f,map_LT_,meta25921){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta25921 = meta25921;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25920.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t25920.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
});

cljs.core.async.t25920.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t25920.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t25923 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25923 = (function (fn1,_,meta25921,map_LT_,f,ch,meta25924){
this.fn1 = fn1;
this._ = _;
this.meta25921 = meta25921;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta25924 = meta25924;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25923.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t25923.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t25923.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var G__25926 = self__.fn1;
return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(G__25926) : cljs.core.async.impl.protocols.lock_id.call(null,G__25926));
});})(___$1))
;

cljs.core.async.t25923.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__25907_SHARP_){
var G__25927 = (((p1__25907_SHARP_ == null))?null:(function (){var G__25928 = p1__25907_SHARP_;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__25928) : self__.f.call(null,G__25928));
})());
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__25927) : f1.call(null,G__25927));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t25923.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25925){
var self__ = this;
var _25925__$1 = this;
return self__.meta25924;
});})(___$1))
;

cljs.core.async.t25923.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25925,meta25924__$1){
var self__ = this;
var _25925__$1 = this;
return (new cljs.core.async.t25923(self__.fn1,self__._,self__.meta25921,self__.map_LT_,self__.f,self__.ch,meta25924__$1));
});})(___$1))
;

cljs.core.async.t25923.cljs$lang$type = true;

cljs.core.async.t25923.cljs$lang$ctorStr = "cljs.core.async/t25923";

cljs.core.async.t25923.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write(writer__4226__auto__,"cljs.core.async/t25923");
});})(___$1))
;

cljs.core.async.__GT_t25923 = ((function (___$1){
return (function __GT_t25923(fn1__$1,___$2,meta25921__$1,map_LT___$1,f__$1,ch__$1,meta25924){
return (new cljs.core.async.t25923(fn1__$1,___$2,meta25921__$1,map_LT___$1,f__$1,ch__$1,meta25924));
});})(___$1))
;

}

return (new cljs.core.async.t25923(fn1,___$1,self__.meta25921,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$29,46,cljs.core.constant$keyword$30,211,cljs.core.constant$keyword$31,10,cljs.core.constant$keyword$32,205,cljs.core.constant$keyword$33,"/Users/twer/dev/clojure/async-tut1/target/cljsbuild-compiler-1/cljs/core/async.cljs"], null)));
})()
);
if(cljs.core.truth_((function (){var and__3626__auto__ = ret;
if(cljs.core.truth_(and__3626__auto__)){
return !(((function (){var G__25929 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25929) : cljs.core.deref.call(null,G__25929));
})() == null));
} else {
return and__3626__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__25930 = (function (){var G__25931 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25931) : cljs.core.deref.call(null,G__25931));
})();
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__25930) : self__.f.call(null,G__25930));
})());
} else {
return ret;
}
});

cljs.core.async.t25920.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t25920.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t25920.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25922){
var self__ = this;
var _25922__$1 = this;
return self__.meta25921;
});

cljs.core.async.t25920.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25922,meta25921__$1){
var self__ = this;
var _25922__$1 = this;
return (new cljs.core.async.t25920(self__.ch,self__.f,self__.map_LT_,meta25921__$1));
});

cljs.core.async.t25920.cljs$lang$type = true;

cljs.core.async.t25920.cljs$lang$ctorStr = "cljs.core.async/t25920";

cljs.core.async.t25920.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write(writer__4226__auto__,"cljs.core.async/t25920");
});

cljs.core.async.__GT_t25920 = (function __GT_t25920(ch__$1,f__$1,map_LT___$1,meta25921){
return (new cljs.core.async.t25920(ch__$1,f__$1,map_LT___$1,meta25921));
});

}

return (new cljs.core.async.t25920(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$29,46,cljs.core.constant$keyword$30,217,cljs.core.constant$keyword$31,3,cljs.core.constant$keyword$32,197,cljs.core.constant$keyword$33,"/Users/twer/dev/clojure/async-tut1/target/cljsbuild-compiler-1/cljs/core/async.cljs"], null)));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t25936 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25936 = (function (ch,f,map_GT_,meta25937){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta25937 = meta25937;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25936.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t25936.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(function (){var G__25939 = val;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__25939) : self__.f.call(null,G__25939));
})(),fn0);
});

cljs.core.async.t25936.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t25936.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t25936.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t25936.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t25936.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25938){
var self__ = this;
var _25938__$1 = this;
return self__.meta25937;
});

cljs.core.async.t25936.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25938,meta25937__$1){
var self__ = this;
var _25938__$1 = this;
return (new cljs.core.async.t25936(self__.ch,self__.f,self__.map_GT_,meta25937__$1));
});

cljs.core.async.t25936.cljs$lang$type = true;

cljs.core.async.t25936.cljs$lang$ctorStr = "cljs.core.async/t25936";

cljs.core.async.t25936.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write(writer__4226__auto__,"cljs.core.async/t25936");
});

cljs.core.async.__GT_t25936 = (function __GT_t25936(ch__$1,f__$1,map_GT___$1,meta25937){
return (new cljs.core.async.t25936(ch__$1,f__$1,map_GT___$1,meta25937));
});

}

return (new cljs.core.async.t25936(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$29,34,cljs.core.constant$keyword$30,232,cljs.core.constant$keyword$31,3,cljs.core.constant$keyword$32,223,cljs.core.constant$keyword$33,"/Users/twer/dev/clojure/async-tut1/target/cljsbuild-compiler-1/cljs/core/async.cljs"], null)));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t25944 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25944 = (function (ch,p,filter_GT_,meta25945){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta25945 = meta25945;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25944.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t25944.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__25947 = val;
return (self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(G__25947) : self__.p.call(null,G__25947));
})())){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
} else {
return cljs.core.async.impl.channels.box(null);
}
});

cljs.core.async.t25944.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t25944.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t25944.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t25944.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t25944.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25946){
var self__ = this;
var _25946__$1 = this;
return self__.meta25945;
});

cljs.core.async.t25944.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25946,meta25945__$1){
var self__ = this;
var _25946__$1 = this;
return (new cljs.core.async.t25944(self__.ch,self__.p,self__.filter_GT_,meta25945__$1));
});

cljs.core.async.t25944.cljs$lang$type = true;

cljs.core.async.t25944.cljs$lang$ctorStr = "cljs.core.async/t25944";

cljs.core.async.t25944.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write(writer__4226__auto__,"cljs.core.async/t25944");
});

cljs.core.async.__GT_t25944 = (function __GT_t25944(ch__$1,p__$1,filter_GT___$1,meta25945){
return (new cljs.core.async.t25944(ch__$1,p__$1,filter_GT___$1,meta25945));
});

}

return (new cljs.core.async.t25944(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$29,28,cljs.core.constant$keyword$30,252,cljs.core.constant$keyword$31,3,cljs.core.constant$keyword$32,241,cljs.core.constant$keyword$33,"/Users/twer/dev/clojure/async-tut1/target/cljsbuild-compiler-1/cljs/core/async.cljs"], null)));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
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
return filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__18230__auto___26035 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18230__auto___26035,out){
return (function (){
var f__18231__auto__ = (function (){var switch__18215__auto__ = ((function (c__18230__auto___26035,out){
return (function (state_26013){
var state_val_26014 = (state_26013[(1)]);
if((state_val_26014 === (7))){
var inst_26009 = (state_26013[(2)]);
var state_26013__$1 = state_26013;
var statearr_26015_26036 = state_26013__$1;
(statearr_26015_26036[(2)] = inst_26009);

(statearr_26015_26036[(1)] = (3));


return cljs.core.constant$keyword$59;
} else {
if((state_val_26014 === (1))){
var state_26013__$1 = state_26013;
var statearr_26016_26037 = state_26013__$1;
(statearr_26016_26037[(2)] = null);

(statearr_26016_26037[(1)] = (2));


return cljs.core.constant$keyword$59;
} else {
if((state_val_26014 === (4))){
var inst_25995 = (state_26013[(7)]);
var inst_25995__$1 = (state_26013[(2)]);
var inst_25996 = (inst_25995__$1 == null);
var state_26013__$1 = (function (){var statearr_26017 = state_26013;
(statearr_26017[(7)] = inst_25995__$1);

return statearr_26017;
})();
if(cljs.core.truth_(inst_25996)){
var statearr_26018_26038 = state_26013__$1;
(statearr_26018_26038[(1)] = (5));

} else {
var statearr_26019_26039 = state_26013__$1;
(statearr_26019_26039[(1)] = (6));

}

return cljs.core.constant$keyword$59;
} else {
if((state_val_26014 === (6))){
var inst_25995 = (state_26013[(7)]);
var inst_26000 = (function (){var G__26020 = inst_25995;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__26020) : p.call(null,G__26020));
})();
var state_26013__$1 = state_26013;
if(cljs.core.truth_(inst_26000)){
var statearr_26021_26040 = state_26013__$1;
(statearr_26021_26040[(1)] = (8));

} else {
var statearr_26022_26041 = state_26013__$1;
(statearr_26022_26041[(1)] = (9));

}

return cljs.core.constant$keyword$59;
} else {
if((state_val_26014 === (3))){
var inst_26011 = (state_26013[(2)]);
var state_26013__$1 = state_26013;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26013__$1,inst_26011);
} else {
if((state_val_26014 === (2))){
var state_26013__$1 = state_26013;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26013__$1,(4),ch);
} else {
if((state_val_26014 === (11))){
var inst_26003 = (state_26013[(2)]);
var state_26013__$1 = state_26013;
var statearr_26023_26042 = state_26013__$1;
(statearr_26023_26042[(2)] = inst_26003);

(statearr_26023_26042[(1)] = (10));


return cljs.core.constant$keyword$59;
} else {
if((state_val_26014 === (9))){
var state_26013__$1 = state_26013;
var statearr_26024_26043 = state_26013__$1;
(statearr_26024_26043[(2)] = null);

(statearr_26024_26043[(1)] = (10));


return cljs.core.constant$keyword$59;
} else {
if((state_val_26014 === (5))){
var inst_25998 = cljs.core.async.close_BANG_(out);
var state_26013__$1 = state_26013;
var statearr_26025_26044 = state_26013__$1;
(statearr_26025_26044[(2)] = inst_25998);

(statearr_26025_26044[(1)] = (7));


return cljs.core.constant$keyword$59;
} else {
if((state_val_26014 === (10))){
var inst_26006 = (state_26013[(2)]);
var state_26013__$1 = (function (){var statearr_26026 = state_26013;
(statearr_26026[(8)] = inst_26006);

return statearr_26026;
})();
var statearr_26027_26045 = state_26013__$1;
(statearr_26027_26045[(2)] = null);

(statearr_26027_26045[(1)] = (2));


return cljs.core.constant$keyword$59;
} else {
if((state_val_26014 === (8))){
var inst_25995 = (state_26013[(7)]);
var state_26013__$1 = state_26013;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26013__$1,(11),out,inst_25995);
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
});})(c__18230__auto___26035,out))
;
return ((function (switch__18215__auto__,c__18230__auto___26035,out){
return (function() {
var state_machine__18216__auto__ = null;
var state_machine__18216__auto____0 = (function (){
var statearr_26031 = [null,null,null,null,null,null,null,null,null];
(statearr_26031[(0)] = state_machine__18216__auto__);

(statearr_26031[(1)] = (1));

return statearr_26031;
});
var state_machine__18216__auto____1 = (function (state_26013){
while(true){
var ret_value__18217__auto__ = (function (){try{while(true){
var result__18218__auto__ = switch__18215__auto__(state_26013);
if(cljs.core.keyword_identical_QMARK_(result__18218__auto__,cljs.core.constant$keyword$59)){
continue;
} else {
return result__18218__auto__;
}
break;
}
}catch (e26032){if((e26032 instanceof Object)){
var ex__18219__auto__ = e26032;
var statearr_26033_26046 = state_26013;
(statearr_26033_26046[(5)] = ex__18219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26013);

return cljs.core.constant$keyword$59;
} else {
throw e26032;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18217__auto__,cljs.core.constant$keyword$59)){
var G__26047 = state_26013;
state_26013 = G__26047;
continue;
} else {
return ret_value__18217__auto__;
}
break;
}
});
state_machine__18216__auto__ = function(state_26013){
switch(arguments.length){
case 0:
return state_machine__18216__auto____0.call(this);
case 1:
return state_machine__18216__auto____1.call(this,state_26013);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18216__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18216__auto____0;
state_machine__18216__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18216__auto____1;
return state_machine__18216__auto__;
})()
;})(switch__18215__auto__,c__18230__auto___26035,out))
})();
var state__18232__auto__ = (function (){var statearr_26034 = (function (){return (f__18231__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18231__auto__.cljs$core$IFn$_invoke$arity$0() : f__18231__auto__.call(null));
})();
(statearr_26034[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18230__auto___26035);

return statearr_26034;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18232__auto__);
});})(c__18230__auto___26035,out))
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
return remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
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
var c__18230__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18230__auto__){
return (function (){
var f__18231__auto__ = (function (){var switch__18215__auto__ = ((function (c__18230__auto__){
return (function (state_26203){
var state_val_26204 = (state_26203[(1)]);
if((state_val_26204 === (7))){
var inst_26199 = (state_26203[(2)]);
var state_26203__$1 = state_26203;
var statearr_26205_26243 = state_26203__$1;
(statearr_26205_26243[(2)] = inst_26199);

(statearr_26205_26243[(1)] = (3));


return cljs.core.constant$keyword$59;
} else {
if((state_val_26204 === (20))){
var inst_26174 = (state_26203[(7)]);
var inst_26185 = (state_26203[(2)]);
var inst_26186 = cljs.core.next(inst_26174);
var inst_26160 = inst_26186;
var inst_26161 = null;
var inst_26162 = (0);
var inst_26163 = (0);
var state_26203__$1 = (function (){var statearr_26206 = state_26203;
(statearr_26206[(8)] = inst_26185);

(statearr_26206[(9)] = inst_26161);

(statearr_26206[(10)] = inst_26162);

(statearr_26206[(11)] = inst_26160);

(statearr_26206[(12)] = inst_26163);

return statearr_26206;
})();
var statearr_26207_26244 = state_26203__$1;
(statearr_26207_26244[(2)] = null);

(statearr_26207_26244[(1)] = (8));


return cljs.core.constant$keyword$59;
} else {
if((state_val_26204 === (1))){
var state_26203__$1 = state_26203;
var statearr_26208_26245 = state_26203__$1;
(statearr_26208_26245[(2)] = null);

(statearr_26208_26245[(1)] = (2));


return cljs.core.constant$keyword$59;
} else {
if((state_val_26204 === (4))){
var inst_26149 = (state_26203[(13)]);
var inst_26149__$1 = (state_26203[(2)]);
var inst_26150 = (inst_26149__$1 == null);
var state_26203__$1 = (function (){var statearr_26212 = state_26203;
(statearr_26212[(13)] = inst_26149__$1);

return statearr_26212;
})();
if(cljs.core.truth_(inst_26150)){
var statearr_26213_26246 = state_26203__$1;
(statearr_26213_26246[(1)] = (5));

} else {
var statearr_26214_26247 = state_26203__$1;
(statearr_26214_26247[(1)] = (6));

}

return cljs.core.constant$keyword$59;
} else {
if((state_val_26204 === (15))){
var state_26203__$1 = state_26203;
var statearr_26215_26248 = state_26203__$1;
(statearr_26215_26248[(2)] = null);

(statearr_26215_26248[(1)] = (16));


return cljs.core.constant$keyword$59;
} else {
if((state_val_26204 === (13))){
var inst_26161 = (state_26203[(9)]);
var inst_26162 = (state_26203[(10)]);
var inst_26160 = (state_26203[(11)]);
var inst_26163 = (state_26203[(12)]);
var inst_26170 = (state_26203[(2)]);
var inst_26171 = (inst_26163 + (1));
var tmp26209 = inst_26161;
var tmp26210 = inst_26162;
var tmp26211 = inst_26160;
var inst_26160__$1 = tmp26211;
var inst_26161__$1 = tmp26209;
var inst_26162__$1 = tmp26210;
var inst_26163__$1 = inst_26171;
var state_26203__$1 = (function (){var statearr_26216 = state_26203;
(statearr_26216[(9)] = inst_26161__$1);

(statearr_26216[(10)] = inst_26162__$1);

(statearr_26216[(11)] = inst_26160__$1);

(statearr_26216[(14)] = inst_26170);

(statearr_26216[(12)] = inst_26163__$1);

return statearr_26216;
})();
var statearr_26217_26249 = state_26203__$1;
(statearr_26217_26249[(2)] = null);

(statearr_26217_26249[(1)] = (8));


return cljs.core.constant$keyword$59;
} else {
if((state_val_26204 === (6))){
var inst_26149 = (state_26203[(13)]);
var inst_26154 = (function (){var G__26218 = inst_26149;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__26218) : f.call(null,G__26218));
})();
var inst_26159 = cljs.core.seq(inst_26154);
var inst_26160 = inst_26159;
var inst_26161 = null;
var inst_26162 = (0);
var inst_26163 = (0);
var state_26203__$1 = (function (){var statearr_26219 = state_26203;
(statearr_26219[(9)] = inst_26161);

(statearr_26219[(10)] = inst_26162);

(statearr_26219[(11)] = inst_26160);

(statearr_26219[(12)] = inst_26163);

return statearr_26219;
})();
var statearr_26220_26250 = state_26203__$1;
(statearr_26220_26250[(2)] = null);

(statearr_26220_26250[(1)] = (8));


return cljs.core.constant$keyword$59;
} else {
if((state_val_26204 === (17))){
var inst_26174 = (state_26203[(7)]);
var inst_26178 = cljs.core.chunk_first(inst_26174);
var inst_26179 = cljs.core.chunk_rest(inst_26174);
var inst_26180 = cljs.core.count(inst_26178);
var inst_26160 = inst_26179;
var inst_26161 = inst_26178;
var inst_26162 = inst_26180;
var inst_26163 = (0);
var state_26203__$1 = (function (){var statearr_26221 = state_26203;
(statearr_26221[(9)] = inst_26161);

(statearr_26221[(10)] = inst_26162);

(statearr_26221[(11)] = inst_26160);

(statearr_26221[(12)] = inst_26163);

return statearr_26221;
})();
var statearr_26222_26251 = state_26203__$1;
(statearr_26222_26251[(2)] = null);

(statearr_26222_26251[(1)] = (8));


return cljs.core.constant$keyword$59;
} else {
if((state_val_26204 === (3))){
var inst_26201 = (state_26203[(2)]);
var state_26203__$1 = state_26203;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26203__$1,inst_26201);
} else {
if((state_val_26204 === (12))){
var inst_26194 = (state_26203[(2)]);
var state_26203__$1 = state_26203;
var statearr_26223_26252 = state_26203__$1;
(statearr_26223_26252[(2)] = inst_26194);

(statearr_26223_26252[(1)] = (9));


return cljs.core.constant$keyword$59;
} else {
if((state_val_26204 === (2))){
var state_26203__$1 = state_26203;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26203__$1,(4),in$);
} else {
if((state_val_26204 === (19))){
var inst_26189 = (state_26203[(2)]);
var state_26203__$1 = state_26203;
var statearr_26224_26253 = state_26203__$1;
(statearr_26224_26253[(2)] = inst_26189);

(statearr_26224_26253[(1)] = (16));


return cljs.core.constant$keyword$59;
} else {
if((state_val_26204 === (11))){
var inst_26160 = (state_26203[(11)]);
var inst_26174 = (state_26203[(7)]);
var inst_26174__$1 = cljs.core.seq(inst_26160);
var state_26203__$1 = (function (){var statearr_26225 = state_26203;
(statearr_26225[(7)] = inst_26174__$1);

return statearr_26225;
})();
if(inst_26174__$1){
var statearr_26226_26254 = state_26203__$1;
(statearr_26226_26254[(1)] = (14));

} else {
var statearr_26227_26255 = state_26203__$1;
(statearr_26227_26255[(1)] = (15));

}

return cljs.core.constant$keyword$59;
} else {
if((state_val_26204 === (9))){
var inst_26196 = (state_26203[(2)]);
var state_26203__$1 = (function (){var statearr_26228 = state_26203;
(statearr_26228[(15)] = inst_26196);

return statearr_26228;
})();
var statearr_26229_26256 = state_26203__$1;
(statearr_26229_26256[(2)] = null);

(statearr_26229_26256[(1)] = (2));


return cljs.core.constant$keyword$59;
} else {
if((state_val_26204 === (5))){
var inst_26152 = cljs.core.async.close_BANG_(out);
var state_26203__$1 = state_26203;
var statearr_26230_26257 = state_26203__$1;
(statearr_26230_26257[(2)] = inst_26152);

(statearr_26230_26257[(1)] = (7));


return cljs.core.constant$keyword$59;
} else {
if((state_val_26204 === (14))){
var inst_26174 = (state_26203[(7)]);
var inst_26176 = cljs.core.chunked_seq_QMARK_(inst_26174);
var state_26203__$1 = state_26203;
if(inst_26176){
var statearr_26231_26258 = state_26203__$1;
(statearr_26231_26258[(1)] = (17));

} else {
var statearr_26232_26259 = state_26203__$1;
(statearr_26232_26259[(1)] = (18));

}

return cljs.core.constant$keyword$59;
} else {
if((state_val_26204 === (16))){
var inst_26192 = (state_26203[(2)]);
var state_26203__$1 = state_26203;
var statearr_26233_26260 = state_26203__$1;
(statearr_26233_26260[(2)] = inst_26192);

(statearr_26233_26260[(1)] = (12));


return cljs.core.constant$keyword$59;
} else {
if((state_val_26204 === (10))){
var inst_26161 = (state_26203[(9)]);
var inst_26163 = (state_26203[(12)]);
var inst_26168 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_26161,inst_26163);
var state_26203__$1 = state_26203;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26203__$1,(13),out,inst_26168);
} else {
if((state_val_26204 === (18))){
var inst_26174 = (state_26203[(7)]);
var inst_26183 = cljs.core.first(inst_26174);
var state_26203__$1 = state_26203;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26203__$1,(20),out,inst_26183);
} else {
if((state_val_26204 === (8))){
var inst_26162 = (state_26203[(10)]);
var inst_26163 = (state_26203[(12)]);
var inst_26165 = (inst_26163 < inst_26162);
var inst_26166 = inst_26165;
var state_26203__$1 = state_26203;
if(cljs.core.truth_(inst_26166)){
var statearr_26234_26261 = state_26203__$1;
(statearr_26234_26261[(1)] = (10));

} else {
var statearr_26235_26262 = state_26203__$1;
(statearr_26235_26262[(1)] = (11));

}

return cljs.core.constant$keyword$59;
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
var statearr_26239 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26239[(0)] = state_machine__18216__auto__);

(statearr_26239[(1)] = (1));

return statearr_26239;
});
var state_machine__18216__auto____1 = (function (state_26203){
while(true){
var ret_value__18217__auto__ = (function (){try{while(true){
var result__18218__auto__ = switch__18215__auto__(state_26203);
if(cljs.core.keyword_identical_QMARK_(result__18218__auto__,cljs.core.constant$keyword$59)){
continue;
} else {
return result__18218__auto__;
}
break;
}
}catch (e26240){if((e26240 instanceof Object)){
var ex__18219__auto__ = e26240;
var statearr_26241_26263 = state_26203;
(statearr_26241_26263[(5)] = ex__18219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26203);

return cljs.core.constant$keyword$59;
} else {
throw e26240;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18217__auto__,cljs.core.constant$keyword$59)){
var G__26264 = state_26203;
state_26203 = G__26264;
continue;
} else {
return ret_value__18217__auto__;
}
break;
}
});
state_machine__18216__auto__ = function(state_26203){
switch(arguments.length){
case 0:
return state_machine__18216__auto____0.call(this);
case 1:
return state_machine__18216__auto____1.call(this,state_26203);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18216__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18216__auto____0;
state_machine__18216__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18216__auto____1;
return state_machine__18216__auto__;
})()
;})(switch__18215__auto__,c__18230__auto__))
})();
var state__18232__auto__ = (function (){var statearr_26242 = (function (){return (f__18231__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18231__auto__.cljs$core$IFn$_invoke$arity$0() : f__18231__auto__.call(null));
})();
(statearr_26242[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18230__auto__);

return statearr_26242;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18232__auto__);
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
return mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

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
return mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

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
return pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){
var c__18230__auto___26354 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18230__auto___26354){
return (function (){
var f__18231__auto__ = (function (){var switch__18215__auto__ = ((function (c__18230__auto___26354){
return (function (state_26333){
var state_val_26334 = (state_26333[(1)]);
if((state_val_26334 === (7))){
var inst_26329 = (state_26333[(2)]);
var state_26333__$1 = state_26333;
var statearr_26335_26355 = state_26333__$1;
(statearr_26335_26355[(2)] = inst_26329);

(statearr_26335_26355[(1)] = (3));


return cljs.core.constant$keyword$59;
} else {
if((state_val_26334 === (1))){
var state_26333__$1 = state_26333;
var statearr_26336_26356 = state_26333__$1;
(statearr_26336_26356[(2)] = null);

(statearr_26336_26356[(1)] = (2));


return cljs.core.constant$keyword$59;
} else {
if((state_val_26334 === (4))){
var inst_26316 = (state_26333[(7)]);
var inst_26316__$1 = (state_26333[(2)]);
var inst_26317 = (inst_26316__$1 == null);
var state_26333__$1 = (function (){var statearr_26337 = state_26333;
(statearr_26337[(7)] = inst_26316__$1);

return statearr_26337;
})();
if(cljs.core.truth_(inst_26317)){
var statearr_26338_26357 = state_26333__$1;
(statearr_26338_26357[(1)] = (5));

} else {
var statearr_26339_26358 = state_26333__$1;
(statearr_26339_26358[(1)] = (6));

}

return cljs.core.constant$keyword$59;
} else {
if((state_val_26334 === (6))){
var inst_26316 = (state_26333[(7)]);
var state_26333__$1 = state_26333;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26333__$1,(11),to,inst_26316);
} else {
if((state_val_26334 === (3))){
var inst_26331 = (state_26333[(2)]);
var state_26333__$1 = state_26333;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26333__$1,inst_26331);
} else {
if((state_val_26334 === (2))){
var state_26333__$1 = state_26333;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26333__$1,(4),from);
} else {
if((state_val_26334 === (11))){
var inst_26326 = (state_26333[(2)]);
var state_26333__$1 = (function (){var statearr_26340 = state_26333;
(statearr_26340[(8)] = inst_26326);

return statearr_26340;
})();
var statearr_26341_26359 = state_26333__$1;
(statearr_26341_26359[(2)] = null);

(statearr_26341_26359[(1)] = (2));


return cljs.core.constant$keyword$59;
} else {
if((state_val_26334 === (9))){
var state_26333__$1 = state_26333;
var statearr_26342_26360 = state_26333__$1;
(statearr_26342_26360[(2)] = null);

(statearr_26342_26360[(1)] = (10));


return cljs.core.constant$keyword$59;
} else {
if((state_val_26334 === (5))){
var state_26333__$1 = state_26333;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26343_26361 = state_26333__$1;
(statearr_26343_26361[(1)] = (8));

} else {
var statearr_26344_26362 = state_26333__$1;
(statearr_26344_26362[(1)] = (9));

}

return cljs.core.constant$keyword$59;
} else {
if((state_val_26334 === (10))){
var inst_26323 = (state_26333[(2)]);
var state_26333__$1 = state_26333;
var statearr_26345_26363 = state_26333__$1;
(statearr_26345_26363[(2)] = inst_26323);

(statearr_26345_26363[(1)] = (7));


return cljs.core.constant$keyword$59;
} else {
if((state_val_26334 === (8))){
var inst_26320 = cljs.core.async.close_BANG_(to);
var state_26333__$1 = state_26333;
var statearr_26346_26364 = state_26333__$1;
(statearr_26346_26364[(2)] = inst_26320);

(statearr_26346_26364[(1)] = (10));


return cljs.core.constant$keyword$59;
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
});})(c__18230__auto___26354))
;
return ((function (switch__18215__auto__,c__18230__auto___26354){
return (function() {
var state_machine__18216__auto__ = null;
var state_machine__18216__auto____0 = (function (){
var statearr_26350 = [null,null,null,null,null,null,null,null,null];
(statearr_26350[(0)] = state_machine__18216__auto__);

(statearr_26350[(1)] = (1));

return statearr_26350;
});
var state_machine__18216__auto____1 = (function (state_26333){
while(true){
var ret_value__18217__auto__ = (function (){try{while(true){
var result__18218__auto__ = switch__18215__auto__(state_26333);
if(cljs.core.keyword_identical_QMARK_(result__18218__auto__,cljs.core.constant$keyword$59)){
continue;
} else {
return result__18218__auto__;
}
break;
}
}catch (e26351){if((e26351 instanceof Object)){
var ex__18219__auto__ = e26351;
var statearr_26352_26365 = state_26333;
(statearr_26352_26365[(5)] = ex__18219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26333);

return cljs.core.constant$keyword$59;
} else {
throw e26351;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18217__auto__,cljs.core.constant$keyword$59)){
var G__26366 = state_26333;
state_26333 = G__26366;
continue;
} else {
return ret_value__18217__auto__;
}
break;
}
});
state_machine__18216__auto__ = function(state_26333){
switch(arguments.length){
case 0:
return state_machine__18216__auto____0.call(this);
case 1:
return state_machine__18216__auto____1.call(this,state_26333);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18216__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18216__auto____0;
state_machine__18216__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18216__auto____1;
return state_machine__18216__auto__;
})()
;})(switch__18215__auto__,c__18230__auto___26354))
})();
var state__18232__auto__ = (function (){var statearr_26353 = (function (){return (f__18231__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18231__auto__.cljs$core$IFn$_invoke$arity$0() : f__18231__auto__.call(null));
})();
(statearr_26353[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18230__auto___26354);

return statearr_26353;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18232__auto__);
});})(c__18230__auto___26354))
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
return split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__18230__auto___26459 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18230__auto___26459,tc,fc){
return (function (){
var f__18231__auto__ = (function (){var switch__18215__auto__ = ((function (c__18230__auto___26459,tc,fc){
return (function (state_26436){
var state_val_26437 = (state_26436[(1)]);
if((state_val_26437 === (7))){
var inst_26432 = (state_26436[(2)]);
var state_26436__$1 = state_26436;
var statearr_26438_26460 = state_26436__$1;
(statearr_26438_26460[(2)] = inst_26432);

(statearr_26438_26460[(1)] = (3));


return cljs.core.constant$keyword$59;
} else {
if((state_val_26437 === (1))){
var state_26436__$1 = state_26436;
var statearr_26439_26461 = state_26436__$1;
(statearr_26439_26461[(2)] = null);

(statearr_26439_26461[(1)] = (2));


return cljs.core.constant$keyword$59;
} else {
if((state_val_26437 === (4))){
var inst_26417 = (state_26436[(7)]);
var inst_26417__$1 = (state_26436[(2)]);
var inst_26418 = (inst_26417__$1 == null);
var state_26436__$1 = (function (){var statearr_26440 = state_26436;
(statearr_26440[(7)] = inst_26417__$1);

return statearr_26440;
})();
if(cljs.core.truth_(inst_26418)){
var statearr_26441_26462 = state_26436__$1;
(statearr_26441_26462[(1)] = (5));

} else {
var statearr_26442_26463 = state_26436__$1;
(statearr_26442_26463[(1)] = (6));

}

return cljs.core.constant$keyword$59;
} else {
if((state_val_26437 === (6))){
var inst_26417 = (state_26436[(7)]);
var inst_26423 = (function (){var G__26443 = inst_26417;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__26443) : p.call(null,G__26443));
})();
var state_26436__$1 = state_26436;
if(cljs.core.truth_(inst_26423)){
var statearr_26444_26464 = state_26436__$1;
(statearr_26444_26464[(1)] = (9));

} else {
var statearr_26445_26465 = state_26436__$1;
(statearr_26445_26465[(1)] = (10));

}

return cljs.core.constant$keyword$59;
} else {
if((state_val_26437 === (3))){
var inst_26434 = (state_26436[(2)]);
var state_26436__$1 = state_26436;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26436__$1,inst_26434);
} else {
if((state_val_26437 === (2))){
var state_26436__$1 = state_26436;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26436__$1,(4),ch);
} else {
if((state_val_26437 === (11))){
var inst_26417 = (state_26436[(7)]);
var inst_26427 = (state_26436[(2)]);
var state_26436__$1 = state_26436;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26436__$1,(8),inst_26427,inst_26417);
} else {
if((state_val_26437 === (9))){
var state_26436__$1 = state_26436;
var statearr_26446_26466 = state_26436__$1;
(statearr_26446_26466[(2)] = tc);

(statearr_26446_26466[(1)] = (11));


return cljs.core.constant$keyword$59;
} else {
if((state_val_26437 === (5))){
var inst_26420 = cljs.core.async.close_BANG_(tc);
var inst_26421 = cljs.core.async.close_BANG_(fc);
var state_26436__$1 = (function (){var statearr_26447 = state_26436;
(statearr_26447[(8)] = inst_26420);

return statearr_26447;
})();
var statearr_26448_26467 = state_26436__$1;
(statearr_26448_26467[(2)] = inst_26421);

(statearr_26448_26467[(1)] = (7));


return cljs.core.constant$keyword$59;
} else {
if((state_val_26437 === (10))){
var state_26436__$1 = state_26436;
var statearr_26449_26468 = state_26436__$1;
(statearr_26449_26468[(2)] = fc);

(statearr_26449_26468[(1)] = (11));


return cljs.core.constant$keyword$59;
} else {
if((state_val_26437 === (8))){
var inst_26429 = (state_26436[(2)]);
var state_26436__$1 = (function (){var statearr_26450 = state_26436;
(statearr_26450[(9)] = inst_26429);

return statearr_26450;
})();
var statearr_26451_26469 = state_26436__$1;
(statearr_26451_26469[(2)] = null);

(statearr_26451_26469[(1)] = (2));


return cljs.core.constant$keyword$59;
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
});})(c__18230__auto___26459,tc,fc))
;
return ((function (switch__18215__auto__,c__18230__auto___26459,tc,fc){
return (function() {
var state_machine__18216__auto__ = null;
var state_machine__18216__auto____0 = (function (){
var statearr_26455 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26455[(0)] = state_machine__18216__auto__);

(statearr_26455[(1)] = (1));

return statearr_26455;
});
var state_machine__18216__auto____1 = (function (state_26436){
while(true){
var ret_value__18217__auto__ = (function (){try{while(true){
var result__18218__auto__ = switch__18215__auto__(state_26436);
if(cljs.core.keyword_identical_QMARK_(result__18218__auto__,cljs.core.constant$keyword$59)){
continue;
} else {
return result__18218__auto__;
}
break;
}
}catch (e26456){if((e26456 instanceof Object)){
var ex__18219__auto__ = e26456;
var statearr_26457_26470 = state_26436;
(statearr_26457_26470[(5)] = ex__18219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26436);

return cljs.core.constant$keyword$59;
} else {
throw e26456;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18217__auto__,cljs.core.constant$keyword$59)){
var G__26471 = state_26436;
state_26436 = G__26471;
continue;
} else {
return ret_value__18217__auto__;
}
break;
}
});
state_machine__18216__auto__ = function(state_26436){
switch(arguments.length){
case 0:
return state_machine__18216__auto____0.call(this);
case 1:
return state_machine__18216__auto____1.call(this,state_26436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18216__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18216__auto____0;
state_machine__18216__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18216__auto____1;
return state_machine__18216__auto__;
})()
;})(switch__18215__auto__,c__18230__auto___26459,tc,fc))
})();
var state__18232__auto__ = (function (){var statearr_26458 = (function (){return (f__18231__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18231__auto__.cljs$core$IFn$_invoke$arity$0() : f__18231__auto__.call(null));
})();
(statearr_26458[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18230__auto___26459);

return statearr_26458;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18232__auto__);
});})(c__18230__auto___26459,tc,fc))
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
var c__18230__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18230__auto__){
return (function (){
var f__18231__auto__ = (function (){var switch__18215__auto__ = ((function (c__18230__auto__){
return (function (state_26520){
var state_val_26521 = (state_26520[(1)]);
if((state_val_26521 === (7))){
var inst_26516 = (state_26520[(2)]);
var state_26520__$1 = state_26520;
var statearr_26522_26540 = state_26520__$1;
(statearr_26522_26540[(2)] = inst_26516);

(statearr_26522_26540[(1)] = (3));


return cljs.core.constant$keyword$59;
} else {
if((state_val_26521 === (6))){
var inst_26506 = (state_26520[(7)]);
var inst_26509 = (state_26520[(8)]);
var inst_26513 = (function (){var G__26523 = inst_26506;
var G__26524 = inst_26509;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__26523,G__26524) : f.call(null,G__26523,G__26524));
})();
var inst_26506__$1 = inst_26513;
var state_26520__$1 = (function (){var statearr_26525 = state_26520;
(statearr_26525[(7)] = inst_26506__$1);

return statearr_26525;
})();
var statearr_26526_26541 = state_26520__$1;
(statearr_26526_26541[(2)] = null);

(statearr_26526_26541[(1)] = (2));


return cljs.core.constant$keyword$59;
} else {
if((state_val_26521 === (5))){
var inst_26506 = (state_26520[(7)]);
var state_26520__$1 = state_26520;
var statearr_26527_26542 = state_26520__$1;
(statearr_26527_26542[(2)] = inst_26506);

(statearr_26527_26542[(1)] = (7));


return cljs.core.constant$keyword$59;
} else {
if((state_val_26521 === (4))){
var inst_26509 = (state_26520[(8)]);
var inst_26509__$1 = (state_26520[(2)]);
var inst_26510 = (inst_26509__$1 == null);
var state_26520__$1 = (function (){var statearr_26528 = state_26520;
(statearr_26528[(8)] = inst_26509__$1);

return statearr_26528;
})();
if(cljs.core.truth_(inst_26510)){
var statearr_26529_26543 = state_26520__$1;
(statearr_26529_26543[(1)] = (5));

} else {
var statearr_26530_26544 = state_26520__$1;
(statearr_26530_26544[(1)] = (6));

}

return cljs.core.constant$keyword$59;
} else {
if((state_val_26521 === (3))){
var inst_26518 = (state_26520[(2)]);
var state_26520__$1 = state_26520;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26520__$1,inst_26518);
} else {
if((state_val_26521 === (2))){
var state_26520__$1 = state_26520;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26520__$1,(4),ch);
} else {
if((state_val_26521 === (1))){
var inst_26506 = init;
var state_26520__$1 = (function (){var statearr_26531 = state_26520;
(statearr_26531[(7)] = inst_26506);

return statearr_26531;
})();
var statearr_26532_26545 = state_26520__$1;
(statearr_26532_26545[(2)] = null);

(statearr_26532_26545[(1)] = (2));


return cljs.core.constant$keyword$59;
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
var statearr_26536 = [null,null,null,null,null,null,null,null,null];
(statearr_26536[(0)] = state_machine__18216__auto__);

(statearr_26536[(1)] = (1));

return statearr_26536;
});
var state_machine__18216__auto____1 = (function (state_26520){
while(true){
var ret_value__18217__auto__ = (function (){try{while(true){
var result__18218__auto__ = switch__18215__auto__(state_26520);
if(cljs.core.keyword_identical_QMARK_(result__18218__auto__,cljs.core.constant$keyword$59)){
continue;
} else {
return result__18218__auto__;
}
break;
}
}catch (e26537){if((e26537 instanceof Object)){
var ex__18219__auto__ = e26537;
var statearr_26538_26546 = state_26520;
(statearr_26538_26546[(5)] = ex__18219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26520);

return cljs.core.constant$keyword$59;
} else {
throw e26537;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18217__auto__,cljs.core.constant$keyword$59)){
var G__26547 = state_26520;
state_26520 = G__26547;
continue;
} else {
return ret_value__18217__auto__;
}
break;
}
});
state_machine__18216__auto__ = function(state_26520){
switch(arguments.length){
case 0:
return state_machine__18216__auto____0.call(this);
case 1:
return state_machine__18216__auto____1.call(this,state_26520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18216__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18216__auto____0;
state_machine__18216__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18216__auto____1;
return state_machine__18216__auto__;
})()
;})(switch__18215__auto__,c__18230__auto__))
})();
var state__18232__auto__ = (function (){var statearr_26539 = (function (){return (f__18231__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18231__auto__.cljs$core$IFn$_invoke$arity$0() : f__18231__auto__.call(null));
})();
(statearr_26539[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18230__auto__);

return statearr_26539;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18232__auto__);
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
return onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){
var c__18230__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18230__auto__){
return (function (){
var f__18231__auto__ = (function (){var switch__18215__auto__ = ((function (c__18230__auto__){
return (function (state_26612){
var state_val_26613 = (state_26612[(1)]);
if((state_val_26613 === (7))){
var inst_26593 = (state_26612[(7)]);
var inst_26598 = (state_26612[(2)]);
var inst_26599 = cljs.core.next(inst_26593);
var inst_26593__$1 = inst_26599;
var state_26612__$1 = (function (){var statearr_26614 = state_26612;
(statearr_26614[(7)] = inst_26593__$1);

(statearr_26614[(8)] = inst_26598);

return statearr_26614;
})();
var statearr_26615_26633 = state_26612__$1;
(statearr_26615_26633[(2)] = null);

(statearr_26615_26633[(1)] = (2));


return cljs.core.constant$keyword$59;
} else {
if((state_val_26613 === (1))){
var inst_26592 = cljs.core.seq(coll);
var inst_26593 = inst_26592;
var state_26612__$1 = (function (){var statearr_26616 = state_26612;
(statearr_26616[(7)] = inst_26593);

return statearr_26616;
})();
var statearr_26617_26634 = state_26612__$1;
(statearr_26617_26634[(2)] = null);

(statearr_26617_26634[(1)] = (2));


return cljs.core.constant$keyword$59;
} else {
if((state_val_26613 === (4))){
var inst_26593 = (state_26612[(7)]);
var inst_26596 = cljs.core.first(inst_26593);
var state_26612__$1 = state_26612;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26612__$1,(7),ch,inst_26596);
} else {
if((state_val_26613 === (6))){
var inst_26608 = (state_26612[(2)]);
var state_26612__$1 = state_26612;
var statearr_26618_26635 = state_26612__$1;
(statearr_26618_26635[(2)] = inst_26608);

(statearr_26618_26635[(1)] = (3));


return cljs.core.constant$keyword$59;
} else {
if((state_val_26613 === (3))){
var inst_26610 = (state_26612[(2)]);
var state_26612__$1 = state_26612;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26612__$1,inst_26610);
} else {
if((state_val_26613 === (2))){
var inst_26593 = (state_26612[(7)]);
var state_26612__$1 = state_26612;
if(cljs.core.truth_(inst_26593)){
var statearr_26619_26636 = state_26612__$1;
(statearr_26619_26636[(1)] = (4));

} else {
var statearr_26620_26637 = state_26612__$1;
(statearr_26620_26637[(1)] = (5));

}

return cljs.core.constant$keyword$59;
} else {
if((state_val_26613 === (9))){
var state_26612__$1 = state_26612;
var statearr_26621_26638 = state_26612__$1;
(statearr_26621_26638[(2)] = null);

(statearr_26621_26638[(1)] = (10));


return cljs.core.constant$keyword$59;
} else {
if((state_val_26613 === (5))){
var state_26612__$1 = state_26612;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26622_26639 = state_26612__$1;
(statearr_26622_26639[(1)] = (8));

} else {
var statearr_26623_26640 = state_26612__$1;
(statearr_26623_26640[(1)] = (9));

}

return cljs.core.constant$keyword$59;
} else {
if((state_val_26613 === (10))){
var inst_26606 = (state_26612[(2)]);
var state_26612__$1 = state_26612;
var statearr_26624_26641 = state_26612__$1;
(statearr_26624_26641[(2)] = inst_26606);

(statearr_26624_26641[(1)] = (6));


return cljs.core.constant$keyword$59;
} else {
if((state_val_26613 === (8))){
var inst_26603 = cljs.core.async.close_BANG_(ch);
var state_26612__$1 = state_26612;
var statearr_26625_26642 = state_26612__$1;
(statearr_26625_26642[(2)] = inst_26603);

(statearr_26625_26642[(1)] = (10));


return cljs.core.constant$keyword$59;
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
var statearr_26629 = [null,null,null,null,null,null,null,null,null];
(statearr_26629[(0)] = state_machine__18216__auto__);

(statearr_26629[(1)] = (1));

return statearr_26629;
});
var state_machine__18216__auto____1 = (function (state_26612){
while(true){
var ret_value__18217__auto__ = (function (){try{while(true){
var result__18218__auto__ = switch__18215__auto__(state_26612);
if(cljs.core.keyword_identical_QMARK_(result__18218__auto__,cljs.core.constant$keyword$59)){
continue;
} else {
return result__18218__auto__;
}
break;
}
}catch (e26630){if((e26630 instanceof Object)){
var ex__18219__auto__ = e26630;
var statearr_26631_26643 = state_26612;
(statearr_26631_26643[(5)] = ex__18219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26612);

return cljs.core.constant$keyword$59;
} else {
throw e26630;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18217__auto__,cljs.core.constant$keyword$59)){
var G__26644 = state_26612;
state_26612 = G__26644;
continue;
} else {
return ret_value__18217__auto__;
}
break;
}
});
state_machine__18216__auto__ = function(state_26612){
switch(arguments.length){
case 0:
return state_machine__18216__auto____0.call(this);
case 1:
return state_machine__18216__auto____1.call(this,state_26612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18216__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18216__auto____0;
state_machine__18216__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18216__auto____1;
return state_machine__18216__auto__;
})()
;})(switch__18215__auto__,c__18230__auto__))
})();
var state__18232__auto__ = (function (){var statearr_26632 = (function (){return (f__18231__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18231__auto__.cljs$core$IFn$_invoke$arity$0() : f__18231__auto__.call(null));
})();
(statearr_26632[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18230__auto__);

return statearr_26632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18232__auto__);
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
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj26646 = {};
return obj26646;
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
return (function (){var or__3638__auto__ = (cljs.core.async.muxch_STAR_[(function (){var G__26650 = x__4282__auto__;
return goog.typeOf(G__26650);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj26652 = {};
return obj26652;
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
return (function (){var or__3638__auto__ = (cljs.core.async.tap_STAR_[(function (){var G__26656 = x__4282__auto__;
return goog.typeOf(G__26656);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
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
return (function (){var or__3638__auto__ = (cljs.core.async.untap_STAR_[(function (){var G__26660 = x__4282__auto__;
return goog.typeOf(G__26660);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
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
return (function (){var or__3638__auto__ = (cljs.core.async.untap_all_STAR_[(function (){var G__26664 = x__4282__auto__;
return goog.typeOf(G__26664);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
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
var cs = (function (){var G__26887 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26887) : cljs.core.atom.call(null,G__26887));
})();
var m = (function (){
if(typeof cljs.core.async.t26888 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26888 = (function (cs,ch,mult,meta26889){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta26889 = meta26889;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26888.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t26888.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t26888.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t26888.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__26891_27109 = self__.cs;
var G__26892_27110 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__26891_27109,G__26892_27110) : cljs.core.reset_BANG_.call(null,G__26891_27109,G__26892_27110));

return null;
});})(cs))
;

cljs.core.async.t26888.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t26888.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t26888.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_26890){
var self__ = this;
var _26890__$1 = this;
return self__.meta26889;
});})(cs))
;

cljs.core.async.t26888.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_26890,meta26889__$1){
var self__ = this;
var _26890__$1 = this;
return (new cljs.core.async.t26888(self__.cs,self__.ch,self__.mult,meta26889__$1));
});})(cs))
;

cljs.core.async.t26888.cljs$lang$type = true;

cljs.core.async.t26888.cljs$lang$ctorStr = "cljs.core.async/t26888";

cljs.core.async.t26888.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write(writer__4226__auto__,"cljs.core.async/t26888");
});})(cs))
;

cljs.core.async.__GT_t26888 = ((function (cs){
return (function __GT_t26888(cs__$1,ch__$1,mult__$1,meta26889){
return (new cljs.core.async.t26888(cs__$1,ch__$1,mult__$1,meta26889));
});})(cs))
;

}

return (new cljs.core.async.t26888(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$29,48,cljs.core.constant$keyword$30,431,cljs.core.constant$keyword$31,11,cljs.core.constant$keyword$32,424,cljs.core.constant$keyword$33,"/Users/twer/dev/clojure/async-tut1/target/cljsbuild-compiler-1/cljs/core/async.cljs"], null)));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (function (){var G__26893 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26893) : cljs.core.atom.call(null,G__26893));
})();
var done = ((function (cs,m,dchan,dctr){
return (function (){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__18230__auto___27111 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18230__auto___27111,cs,m,dchan,dctr,done){
return (function (){
var f__18231__auto__ = (function (){var switch__18215__auto__ = ((function (c__18230__auto___27111,cs,m,dchan,dctr,done){
return (function (state_27023){
var state_val_27024 = (state_27023[(1)]);
if((state_val_27024 === (7))){
var inst_27019 = (state_27023[(2)]);
var state_27023__$1 = state_27023;
var statearr_27025_27112 = state_27023__$1;
(statearr_27025_27112[(2)] = inst_27019);

(statearr_27025_27112[(1)] = (3));


return cljs.core.constant$keyword$59;
} else {
if((state_val_27024 === (20))){
var inst_26925 = (state_27023[(7)]);
var inst_26935 = cljs.core.first(inst_26925);
var inst_26936 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26935,(0),null);
var inst_26937 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26935,(1),null);
var state_27023__$1 = (function (){var statearr_27026 = state_27023;
(statearr_27026[(8)] = inst_26936);

return statearr_27026;
})();
if(cljs.core.truth_(inst_26937)){
var statearr_27027_27113 = state_27023__$1;
(statearr_27027_27113[(1)] = (22));

} else {
var statearr_27028_27114 = state_27023__$1;
(statearr_27028_27114[(1)] = (23));

}

return cljs.core.constant$keyword$59;
} else {
if((state_val_27024 === (27))){
var inst_26965 = (state_27023[(9)]);
var inst_26967 = (state_27023[(10)]);
var inst_26972 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_26965,inst_26967);
var state_27023__$1 = (function (){var statearr_27029 = state_27023;
(statearr_27029[(11)] = inst_26972);

return statearr_27029;
})();
var statearr_27030_27115 = state_27023__$1;
(statearr_27030_27115[(2)] = null);

(statearr_27030_27115[(1)] = (32));


return cljs.core.constant$keyword$59;
} else {
if((state_val_27024 === (1))){
var state_27023__$1 = state_27023;
var statearr_27031_27116 = state_27023__$1;
(statearr_27031_27116[(2)] = null);

(statearr_27031_27116[(1)] = (2));


return cljs.core.constant$keyword$59;
} else {
if((state_val_27024 === (24))){
var inst_26925 = (state_27023[(7)]);
var inst_26942 = (state_27023[(2)]);
var inst_26943 = cljs.core.next(inst_26925);
var inst_26905 = inst_26943;
var inst_26906 = null;
var inst_26907 = (0);
var inst_26908 = (0);
var state_27023__$1 = (function (){var statearr_27032 = state_27023;
(statearr_27032[(12)] = inst_26942);

(statearr_27032[(13)] = inst_26908);

(statearr_27032[(14)] = inst_26906);

(statearr_27032[(15)] = inst_26907);

(statearr_27032[(16)] = inst_26905);

return statearr_27032;
})();
var statearr_27033_27117 = state_27023__$1;
(statearr_27033_27117[(2)] = null);

(statearr_27033_27117[(1)] = (8));


return cljs.core.constant$keyword$59;
} else {
if((state_val_27024 === (39))){
var inst_26985 = (state_27023[(17)]);
var inst_27003 = (state_27023[(2)]);
var inst_27004 = cljs.core.next(inst_26985);
var inst_26964 = inst_27004;
var inst_26965 = null;
var inst_26966 = (0);
var inst_26967 = (0);
var state_27023__$1 = (function (){var statearr_27037 = state_27023;
(statearr_27037[(18)] = inst_26964);

(statearr_27037[(9)] = inst_26965);

(statearr_27037[(19)] = inst_26966);

(statearr_27037[(10)] = inst_26967);

(statearr_27037[(20)] = inst_27003);

return statearr_27037;
})();
var statearr_27038_27118 = state_27023__$1;
(statearr_27038_27118[(2)] = null);

(statearr_27038_27118[(1)] = (25));


return cljs.core.constant$keyword$59;
} else {
if((state_val_27024 === (4))){
var inst_26896 = (state_27023[(21)]);
var inst_26896__$1 = (state_27023[(2)]);
var inst_26897 = (inst_26896__$1 == null);
var state_27023__$1 = (function (){var statearr_27039 = state_27023;
(statearr_27039[(21)] = inst_26896__$1);

return statearr_27039;
})();
if(cljs.core.truth_(inst_26897)){
var statearr_27040_27119 = state_27023__$1;
(statearr_27040_27119[(1)] = (5));

} else {
var statearr_27041_27120 = state_27023__$1;
(statearr_27041_27120[(1)] = (6));

}

return cljs.core.constant$keyword$59;
} else {
if((state_val_27024 === (15))){
var inst_26908 = (state_27023[(13)]);
var inst_26906 = (state_27023[(14)]);
var inst_26907 = (state_27023[(15)]);
var inst_26905 = (state_27023[(16)]);
var inst_26921 = (state_27023[(2)]);
var inst_26922 = (inst_26908 + (1));
var tmp27034 = inst_26906;
var tmp27035 = inst_26907;
var tmp27036 = inst_26905;
var inst_26905__$1 = tmp27036;
var inst_26906__$1 = tmp27034;
var inst_26907__$1 = tmp27035;
var inst_26908__$1 = inst_26922;
var state_27023__$1 = (function (){var statearr_27042 = state_27023;
(statearr_27042[(13)] = inst_26908__$1);

(statearr_27042[(14)] = inst_26906__$1);

(statearr_27042[(15)] = inst_26907__$1);

(statearr_27042[(22)] = inst_26921);

(statearr_27042[(16)] = inst_26905__$1);

return statearr_27042;
})();
var statearr_27043_27121 = state_27023__$1;
(statearr_27043_27121[(2)] = null);

(statearr_27043_27121[(1)] = (8));


return cljs.core.constant$keyword$59;
} else {
if((state_val_27024 === (21))){
var inst_26946 = (state_27023[(2)]);
var state_27023__$1 = state_27023;
var statearr_27044_27122 = state_27023__$1;
(statearr_27044_27122[(2)] = inst_26946);

(statearr_27044_27122[(1)] = (18));


return cljs.core.constant$keyword$59;
} else {
if((state_val_27024 === (31))){
var inst_26972 = (state_27023[(11)]);
var inst_26973 = (state_27023[(2)]);
var inst_26974 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var inst_26975 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_26972);
var state_27023__$1 = (function (){var statearr_27045 = state_27023;
(statearr_27045[(23)] = inst_26974);

(statearr_27045[(24)] = inst_26973);

return statearr_27045;
})();
var statearr_27046_27123 = state_27023__$1;
(statearr_27046_27123[(2)] = inst_26975);


cljs.core.async.impl.ioc_helpers.process_exception(state_27023__$1);

return cljs.core.constant$keyword$59;
} else {
if((state_val_27024 === (32))){
var inst_26896 = (state_27023[(21)]);
var inst_26972 = (state_27023[(11)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_27023,(31),Object,null,(30));
var inst_26979 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_26972,inst_26896,done);
var state_27023__$1 = state_27023;
var statearr_27047_27124 = state_27023__$1;
(statearr_27047_27124[(2)] = inst_26979);


cljs.core.async.impl.ioc_helpers.process_exception(state_27023__$1);

return cljs.core.constant$keyword$59;
} else {
if((state_val_27024 === (40))){
var inst_26994 = (state_27023[(25)]);
var inst_26995 = (state_27023[(2)]);
var inst_26996 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var inst_26997 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_26994);
var state_27023__$1 = (function (){var statearr_27048 = state_27023;
(statearr_27048[(26)] = inst_26996);

(statearr_27048[(27)] = inst_26995);

return statearr_27048;
})();
var statearr_27049_27125 = state_27023__$1;
(statearr_27049_27125[(2)] = inst_26997);


cljs.core.async.impl.ioc_helpers.process_exception(state_27023__$1);

return cljs.core.constant$keyword$59;
} else {
if((state_val_27024 === (33))){
var inst_26985 = (state_27023[(17)]);
var inst_26987 = cljs.core.chunked_seq_QMARK_(inst_26985);
var state_27023__$1 = state_27023;
if(inst_26987){
var statearr_27050_27126 = state_27023__$1;
(statearr_27050_27126[(1)] = (36));

} else {
var statearr_27051_27127 = state_27023__$1;
(statearr_27051_27127[(1)] = (37));

}

return cljs.core.constant$keyword$59;
} else {
if((state_val_27024 === (13))){
var inst_26915 = (state_27023[(28)]);
var inst_26918 = cljs.core.async.close_BANG_(inst_26915);
var state_27023__$1 = state_27023;
var statearr_27052_27128 = state_27023__$1;
(statearr_27052_27128[(2)] = inst_26918);

(statearr_27052_27128[(1)] = (15));


return cljs.core.constant$keyword$59;
} else {
if((state_val_27024 === (22))){
var inst_26936 = (state_27023[(8)]);
var inst_26939 = cljs.core.async.close_BANG_(inst_26936);
var state_27023__$1 = state_27023;
var statearr_27053_27129 = state_27023__$1;
(statearr_27053_27129[(2)] = inst_26939);

(statearr_27053_27129[(1)] = (24));


return cljs.core.constant$keyword$59;
} else {
if((state_val_27024 === (36))){
var inst_26985 = (state_27023[(17)]);
var inst_26989 = cljs.core.chunk_first(inst_26985);
var inst_26990 = cljs.core.chunk_rest(inst_26985);
var inst_26991 = cljs.core.count(inst_26989);
var inst_26964 = inst_26990;
var inst_26965 = inst_26989;
var inst_26966 = inst_26991;
var inst_26967 = (0);
var state_27023__$1 = (function (){var statearr_27054 = state_27023;
(statearr_27054[(18)] = inst_26964);

(statearr_27054[(9)] = inst_26965);

(statearr_27054[(19)] = inst_26966);

(statearr_27054[(10)] = inst_26967);

return statearr_27054;
})();
var statearr_27055_27130 = state_27023__$1;
(statearr_27055_27130[(2)] = null);

(statearr_27055_27130[(1)] = (25));


return cljs.core.constant$keyword$59;
} else {
if((state_val_27024 === (41))){
var inst_26896 = (state_27023[(21)]);
var inst_26994 = (state_27023[(25)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_27023,(40),Object,null,(39));
var inst_27001 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_26994,inst_26896,done);
var state_27023__$1 = state_27023;
var statearr_27056_27131 = state_27023__$1;
(statearr_27056_27131[(2)] = inst_27001);


cljs.core.async.impl.ioc_helpers.process_exception(state_27023__$1);

return cljs.core.constant$keyword$59;
} else {
if((state_val_27024 === (29))){
var inst_27012 = (state_27023[(2)]);
var state_27023__$1 = state_27023;
var statearr_27057_27132 = state_27023__$1;
(statearr_27057_27132[(2)] = inst_27012);

(statearr_27057_27132[(1)] = (26));


return cljs.core.constant$keyword$59;
} else {
if((state_val_27024 === (6))){
var inst_26955 = (function (){var G__27058 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__27058) : cljs.core.deref.call(null,G__27058));
})();
var inst_26956 = cljs.core.keys(inst_26955);
var inst_26957 = cljs.core.count(inst_26956);
var inst_26958 = (function (){var G__27059 = dctr;
var G__27060 = inst_26957;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__27059,G__27060) : cljs.core.reset_BANG_.call(null,G__27059,G__27060));
})();
var inst_26963 = cljs.core.seq(inst_26956);
var inst_26964 = inst_26963;
var inst_26965 = null;
var inst_26966 = (0);
var inst_26967 = (0);
var state_27023__$1 = (function (){var statearr_27061 = state_27023;
(statearr_27061[(29)] = inst_26958);

(statearr_27061[(18)] = inst_26964);

(statearr_27061[(9)] = inst_26965);

(statearr_27061[(19)] = inst_26966);

(statearr_27061[(10)] = inst_26967);

return statearr_27061;
})();
var statearr_27062_27133 = state_27023__$1;
(statearr_27062_27133[(2)] = null);

(statearr_27062_27133[(1)] = (25));


return cljs.core.constant$keyword$59;
} else {
if((state_val_27024 === (28))){
var inst_26964 = (state_27023[(18)]);
var inst_26985 = (state_27023[(17)]);
var inst_26985__$1 = cljs.core.seq(inst_26964);
var state_27023__$1 = (function (){var statearr_27063 = state_27023;
(statearr_27063[(17)] = inst_26985__$1);

return statearr_27063;
})();
if(inst_26985__$1){
var statearr_27064_27134 = state_27023__$1;
(statearr_27064_27134[(1)] = (33));

} else {
var statearr_27065_27135 = state_27023__$1;
(statearr_27065_27135[(1)] = (34));

}

return cljs.core.constant$keyword$59;
} else {
if((state_val_27024 === (25))){
var inst_26966 = (state_27023[(19)]);
var inst_26967 = (state_27023[(10)]);
var inst_26969 = (inst_26967 < inst_26966);
var inst_26970 = inst_26969;
var state_27023__$1 = state_27023;
if(cljs.core.truth_(inst_26970)){
var statearr_27066_27136 = state_27023__$1;
(statearr_27066_27136[(1)] = (27));

} else {
var statearr_27067_27137 = state_27023__$1;
(statearr_27067_27137[(1)] = (28));

}

return cljs.core.constant$keyword$59;
} else {
if((state_val_27024 === (34))){
var state_27023__$1 = state_27023;
var statearr_27068_27138 = state_27023__$1;
(statearr_27068_27138[(2)] = null);

(statearr_27068_27138[(1)] = (35));


return cljs.core.constant$keyword$59;
} else {
if((state_val_27024 === (17))){
var state_27023__$1 = state_27023;
var statearr_27069_27139 = state_27023__$1;
(statearr_27069_27139[(2)] = null);

(statearr_27069_27139[(1)] = (18));


return cljs.core.constant$keyword$59;
} else {
if((state_val_27024 === (3))){
var inst_27021 = (state_27023[(2)]);
var state_27023__$1 = state_27023;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27023__$1,inst_27021);
} else {
if((state_val_27024 === (12))){
var inst_26951 = (state_27023[(2)]);
var state_27023__$1 = state_27023;
var statearr_27070_27140 = state_27023__$1;
(statearr_27070_27140[(2)] = inst_26951);

(statearr_27070_27140[(1)] = (9));


return cljs.core.constant$keyword$59;
} else {
if((state_val_27024 === (2))){
var state_27023__$1 = state_27023;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27023__$1,(4),ch);
} else {
if((state_val_27024 === (23))){
var state_27023__$1 = state_27023;
var statearr_27071_27141 = state_27023__$1;
(statearr_27071_27141[(2)] = null);

(statearr_27071_27141[(1)] = (24));


return cljs.core.constant$keyword$59;
} else {
if((state_val_27024 === (35))){
var inst_27010 = (state_27023[(2)]);
var state_27023__$1 = state_27023;
var statearr_27072_27142 = state_27023__$1;
(statearr_27072_27142[(2)] = inst_27010);

(statearr_27072_27142[(1)] = (29));


return cljs.core.constant$keyword$59;
} else {
if((state_val_27024 === (19))){
var inst_26925 = (state_27023[(7)]);
var inst_26929 = cljs.core.chunk_first(inst_26925);
var inst_26930 = cljs.core.chunk_rest(inst_26925);
var inst_26931 = cljs.core.count(inst_26929);
var inst_26905 = inst_26930;
var inst_26906 = inst_26929;
var inst_26907 = inst_26931;
var inst_26908 = (0);
var state_27023__$1 = (function (){var statearr_27073 = state_27023;
(statearr_27073[(13)] = inst_26908);

(statearr_27073[(14)] = inst_26906);

(statearr_27073[(15)] = inst_26907);

(statearr_27073[(16)] = inst_26905);

return statearr_27073;
})();
var statearr_27074_27143 = state_27023__$1;
(statearr_27074_27143[(2)] = null);

(statearr_27074_27143[(1)] = (8));


return cljs.core.constant$keyword$59;
} else {
if((state_val_27024 === (11))){
var inst_26925 = (state_27023[(7)]);
var inst_26905 = (state_27023[(16)]);
var inst_26925__$1 = cljs.core.seq(inst_26905);
var state_27023__$1 = (function (){var statearr_27075 = state_27023;
(statearr_27075[(7)] = inst_26925__$1);

return statearr_27075;
})();
if(inst_26925__$1){
var statearr_27076_27144 = state_27023__$1;
(statearr_27076_27144[(1)] = (16));

} else {
var statearr_27077_27145 = state_27023__$1;
(statearr_27077_27145[(1)] = (17));

}

return cljs.core.constant$keyword$59;
} else {
if((state_val_27024 === (9))){
var inst_26953 = (state_27023[(2)]);
var state_27023__$1 = state_27023;
var statearr_27078_27146 = state_27023__$1;
(statearr_27078_27146[(2)] = inst_26953);

(statearr_27078_27146[(1)] = (7));


return cljs.core.constant$keyword$59;
} else {
if((state_val_27024 === (5))){
var inst_26903 = (function (){var G__27079 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__27079) : cljs.core.deref.call(null,G__27079));
})();
var inst_26904 = cljs.core.seq(inst_26903);
var inst_26905 = inst_26904;
var inst_26906 = null;
var inst_26907 = (0);
var inst_26908 = (0);
var state_27023__$1 = (function (){var statearr_27080 = state_27023;
(statearr_27080[(13)] = inst_26908);

(statearr_27080[(14)] = inst_26906);

(statearr_27080[(15)] = inst_26907);

(statearr_27080[(16)] = inst_26905);

return statearr_27080;
})();
var statearr_27081_27147 = state_27023__$1;
(statearr_27081_27147[(2)] = null);

(statearr_27081_27147[(1)] = (8));


return cljs.core.constant$keyword$59;
} else {
if((state_val_27024 === (14))){
var state_27023__$1 = state_27023;
var statearr_27082_27148 = state_27023__$1;
(statearr_27082_27148[(2)] = null);

(statearr_27082_27148[(1)] = (15));


return cljs.core.constant$keyword$59;
} else {
if((state_val_27024 === (26))){
var inst_27014 = (state_27023[(2)]);
var state_27023__$1 = (function (){var statearr_27083 = state_27023;
(statearr_27083[(30)] = inst_27014);

return statearr_27083;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27023__$1,(42),dchan);
} else {
if((state_val_27024 === (16))){
var inst_26925 = (state_27023[(7)]);
var inst_26927 = cljs.core.chunked_seq_QMARK_(inst_26925);
var state_27023__$1 = state_27023;
if(inst_26927){
var statearr_27087_27149 = state_27023__$1;
(statearr_27087_27149[(1)] = (19));

} else {
var statearr_27088_27150 = state_27023__$1;
(statearr_27088_27150[(1)] = (20));

}

return cljs.core.constant$keyword$59;
} else {
if((state_val_27024 === (38))){
var inst_27007 = (state_27023[(2)]);
var state_27023__$1 = state_27023;
var statearr_27089_27151 = state_27023__$1;
(statearr_27089_27151[(2)] = inst_27007);

(statearr_27089_27151[(1)] = (35));


return cljs.core.constant$keyword$59;
} else {
if((state_val_27024 === (30))){
var inst_26964 = (state_27023[(18)]);
var inst_26965 = (state_27023[(9)]);
var inst_26966 = (state_27023[(19)]);
var inst_26967 = (state_27023[(10)]);
var inst_26981 = (state_27023[(2)]);
var inst_26982 = (inst_26967 + (1));
var tmp27084 = inst_26964;
var tmp27085 = inst_26965;
var tmp27086 = inst_26966;
var inst_26964__$1 = tmp27084;
var inst_26965__$1 = tmp27085;
var inst_26966__$1 = tmp27086;
var inst_26967__$1 = inst_26982;
var state_27023__$1 = (function (){var statearr_27090 = state_27023;
(statearr_27090[(18)] = inst_26964__$1);

(statearr_27090[(9)] = inst_26965__$1);

(statearr_27090[(31)] = inst_26981);

(statearr_27090[(19)] = inst_26966__$1);

(statearr_27090[(10)] = inst_26967__$1);

return statearr_27090;
})();
var statearr_27091_27152 = state_27023__$1;
(statearr_27091_27152[(2)] = null);

(statearr_27091_27152[(1)] = (25));


return cljs.core.constant$keyword$59;
} else {
if((state_val_27024 === (10))){
var inst_26908 = (state_27023[(13)]);
var inst_26906 = (state_27023[(14)]);
var inst_26914 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_26906,inst_26908);
var inst_26915 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26914,(0),null);
var inst_26916 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26914,(1),null);
var state_27023__$1 = (function (){var statearr_27092 = state_27023;
(statearr_27092[(28)] = inst_26915);

return statearr_27092;
})();
if(cljs.core.truth_(inst_26916)){
var statearr_27093_27153 = state_27023__$1;
(statearr_27093_27153[(1)] = (13));

} else {
var statearr_27094_27154 = state_27023__$1;
(statearr_27094_27154[(1)] = (14));

}

return cljs.core.constant$keyword$59;
} else {
if((state_val_27024 === (18))){
var inst_26949 = (state_27023[(2)]);
var state_27023__$1 = state_27023;
var statearr_27095_27155 = state_27023__$1;
(statearr_27095_27155[(2)] = inst_26949);

(statearr_27095_27155[(1)] = (12));


return cljs.core.constant$keyword$59;
} else {
if((state_val_27024 === (42))){
var inst_27016 = (state_27023[(2)]);
var state_27023__$1 = (function (){var statearr_27096 = state_27023;
(statearr_27096[(32)] = inst_27016);

return statearr_27096;
})();
var statearr_27097_27156 = state_27023__$1;
(statearr_27097_27156[(2)] = null);

(statearr_27097_27156[(1)] = (2));


return cljs.core.constant$keyword$59;
} else {
if((state_val_27024 === (37))){
var inst_26985 = (state_27023[(17)]);
var inst_26994 = cljs.core.first(inst_26985);
var state_27023__$1 = (function (){var statearr_27098 = state_27023;
(statearr_27098[(25)] = inst_26994);

return statearr_27098;
})();
var statearr_27099_27157 = state_27023__$1;
(statearr_27099_27157[(2)] = null);

(statearr_27099_27157[(1)] = (41));


return cljs.core.constant$keyword$59;
} else {
if((state_val_27024 === (8))){
var inst_26908 = (state_27023[(13)]);
var inst_26907 = (state_27023[(15)]);
var inst_26910 = (inst_26908 < inst_26907);
var inst_26911 = inst_26910;
var state_27023__$1 = state_27023;
if(cljs.core.truth_(inst_26911)){
var statearr_27100_27158 = state_27023__$1;
(statearr_27100_27158[(1)] = (10));

} else {
var statearr_27101_27159 = state_27023__$1;
(statearr_27101_27159[(1)] = (11));

}

return cljs.core.constant$keyword$59;
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
});})(c__18230__auto___27111,cs,m,dchan,dctr,done))
;
return ((function (switch__18215__auto__,c__18230__auto___27111,cs,m,dchan,dctr,done){
return (function() {
var state_machine__18216__auto__ = null;
var state_machine__18216__auto____0 = (function (){
var statearr_27105 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27105[(0)] = state_machine__18216__auto__);

(statearr_27105[(1)] = (1));

return statearr_27105;
});
var state_machine__18216__auto____1 = (function (state_27023){
while(true){
var ret_value__18217__auto__ = (function (){try{while(true){
var result__18218__auto__ = switch__18215__auto__(state_27023);
if(cljs.core.keyword_identical_QMARK_(result__18218__auto__,cljs.core.constant$keyword$59)){
continue;
} else {
return result__18218__auto__;
}
break;
}
}catch (e27106){if((e27106 instanceof Object)){
var ex__18219__auto__ = e27106;
var statearr_27107_27160 = state_27023;
(statearr_27107_27160[(5)] = ex__18219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27023);

return cljs.core.constant$keyword$59;
} else {
throw e27106;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18217__auto__,cljs.core.constant$keyword$59)){
var G__27161 = state_27023;
state_27023 = G__27161;
continue;
} else {
return ret_value__18217__auto__;
}
break;
}
});
state_machine__18216__auto__ = function(state_27023){
switch(arguments.length){
case 0:
return state_machine__18216__auto____0.call(this);
case 1:
return state_machine__18216__auto____1.call(this,state_27023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18216__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18216__auto____0;
state_machine__18216__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18216__auto____1;
return state_machine__18216__auto__;
})()
;})(switch__18215__auto__,c__18230__auto___27111,cs,m,dchan,dctr,done))
})();
var state__18232__auto__ = (function (){var statearr_27108 = (function (){return (f__18231__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18231__auto__.cljs$core$IFn$_invoke$arity$0() : f__18231__auto__.call(null));
})();
(statearr_27108[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18230__auto___27111);

return statearr_27108;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18232__auto__);
});})(c__18230__auto___27111,cs,m,dchan,dctr,done))
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
return tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

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
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

cljs.core.async.Mix = (function (){var obj27166 = {};
return obj27166;
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
return (function (){var or__3638__auto__ = (cljs.core.async.admix_STAR_[(function (){var G__27170 = x__4282__auto__;
return goog.typeOf(G__27170);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
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
return (function (){var or__3638__auto__ = (cljs.core.async.unmix_STAR_[(function (){var G__27174 = x__4282__auto__;
return goog.typeOf(G__27174);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
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
return (function (){var or__3638__auto__ = (cljs.core.async.unmix_all_STAR_[(function (){var G__27178 = x__4282__auto__;
return goog.typeOf(G__27178);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
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
return (function (){var or__3638__auto__ = (cljs.core.async.toggle_STAR_[(function (){var G__27182 = x__4282__auto__;
return goog.typeOf(G__27182);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
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
return (function (){var or__3638__auto__ = (cljs.core.async.solo_mode_STAR_[(function (){var G__27186 = x__4282__auto__;
return goog.typeOf(G__27186);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
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
var cs = (function (){var G__27310 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__27310) : cljs.core.atom.call(null,G__27310));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$66,null,cljs.core.constant$keyword$67,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$68);
var solo_mode = (function (){var G__27311 = cljs.core.constant$keyword$67;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__27311) : cljs.core.atom.call(null,G__27311));
})();
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((function (){var G__27312 = v;
return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(G__27312) : attr.call(null,G__27312));
})())){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = (function (){var G__27313 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__27313) : cljs.core.deref.call(null,G__27313));
})();
var mode = (function (){var G__27314 = solo_mode;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__27314) : cljs.core.deref.call(null,G__27314));
})();
var solos = pick(cljs.core.constant$keyword$68,chs);
var pauses = pick(cljs.core.constant$keyword$66,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$69,solos,cljs.core.constant$keyword$70,pick(cljs.core.constant$keyword$67,chs),cljs.core.constant$keyword$71,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$66)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t27315 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27315 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta27316){
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
this.meta27316 = meta27316;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27315.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t27315.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27315.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27315.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__27318_27433 = self__.cs;
var G__27319_27434 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__27318_27433,G__27319_27434) : cljs.core.reset_BANG_.call(null,G__27318_27433,G__27319_27434));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27315.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27315.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__27320 = mode;
return (self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(G__27320) : self__.solo_modes.call(null,G__27320));
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0)))].join('')));
}

var G__27321_27435 = self__.solo_mode;
var G__27322_27436 = mode;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__27321_27435,G__27322_27436) : cljs.core.reset_BANG_.call(null,G__27321_27435,G__27322_27436));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27315.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t27315.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27315.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27317){
var self__ = this;
var _27317__$1 = this;
return self__.meta27316;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27315.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27317,meta27316__$1){
var self__ = this;
var _27317__$1 = this;
return (new cljs.core.async.t27315(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta27316__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27315.cljs$lang$type = true;

cljs.core.async.t27315.cljs$lang$ctorStr = "cljs.core.async/t27315";

cljs.core.async.t27315.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write(writer__4226__auto__,"cljs.core.async/t27315");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t27315 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t27315(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27316){
return (new cljs.core.async.t27315(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27316));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t27315(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$29,25,cljs.core.constant$keyword$30,534,cljs.core.constant$keyword$31,11,cljs.core.constant$keyword$32,523,cljs.core.constant$keyword$33,"/Users/twer/dev/clojure/async-tut1/target/cljsbuild-compiler-1/cljs/core/async.cljs"], null)));
})()
;
var c__18230__auto___27437 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18230__auto___27437,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__18231__auto__ = (function (){var switch__18215__auto__ = ((function (c__18230__auto___27437,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_27389){
var state_val_27390 = (state_27389[(1)]);
if((state_val_27390 === (7))){
var inst_27336 = (state_27389[(7)]);
var inst_27341 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_27336);
var state_27389__$1 = state_27389;
var statearr_27391_27438 = state_27389__$1;
(statearr_27391_27438[(2)] = inst_27341);

(statearr_27391_27438[(1)] = (9));


return cljs.core.constant$keyword$59;
} else {
if((state_val_27390 === (20))){
var inst_27351 = (state_27389[(8)]);
var state_27389__$1 = state_27389;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27389__$1,(23),out,inst_27351);
} else {
if((state_val_27390 === (1))){
var inst_27326 = (state_27389[(9)]);
var inst_27326__$1 = calc_state();
var inst_27327 = cljs.core.seq_QMARK_(inst_27326__$1);
var state_27389__$1 = (function (){var statearr_27392 = state_27389;
(statearr_27392[(9)] = inst_27326__$1);

return statearr_27392;
})();
if(inst_27327){
var statearr_27393_27439 = state_27389__$1;
(statearr_27393_27439[(1)] = (2));

} else {
var statearr_27394_27440 = state_27389__$1;
(statearr_27394_27440[(1)] = (3));

}

return cljs.core.constant$keyword$59;
} else {
if((state_val_27390 === (4))){
var inst_27326 = (state_27389[(9)]);
var inst_27332 = (state_27389[(2)]);
var inst_27333 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_27332,cljs.core.constant$keyword$71);
var inst_27334 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_27332,cljs.core.constant$keyword$70);
var inst_27335 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_27332,cljs.core.constant$keyword$69);
var inst_27336 = inst_27326;
var state_27389__$1 = (function (){var statearr_27395 = state_27389;
(statearr_27395[(10)] = inst_27335);

(statearr_27395[(7)] = inst_27336);

(statearr_27395[(11)] = inst_27334);

(statearr_27395[(12)] = inst_27333);

return statearr_27395;
})();
var statearr_27396_27441 = state_27389__$1;
(statearr_27396_27441[(2)] = null);

(statearr_27396_27441[(1)] = (5));


return cljs.core.constant$keyword$59;
} else {
if((state_val_27390 === (15))){
var state_27389__$1 = state_27389;
var statearr_27397_27442 = state_27389__$1;
(statearr_27397_27442[(2)] = null);

(statearr_27397_27442[(1)] = (16));


return cljs.core.constant$keyword$59;
} else {
if((state_val_27390 === (21))){
var state_27389__$1 = state_27389;
var statearr_27398_27443 = state_27389__$1;
(statearr_27398_27443[(2)] = null);

(statearr_27398_27443[(1)] = (22));


return cljs.core.constant$keyword$59;
} else {
if((state_val_27390 === (13))){
var inst_27385 = (state_27389[(2)]);
var state_27389__$1 = state_27389;
var statearr_27399_27444 = state_27389__$1;
(statearr_27399_27444[(2)] = inst_27385);

(statearr_27399_27444[(1)] = (6));


return cljs.core.constant$keyword$59;
} else {
if((state_val_27390 === (22))){
var inst_27344 = (state_27389[(13)]);
var inst_27382 = (state_27389[(2)]);
var inst_27336 = inst_27344;
var state_27389__$1 = (function (){var statearr_27400 = state_27389;
(statearr_27400[(7)] = inst_27336);

(statearr_27400[(14)] = inst_27382);

return statearr_27400;
})();
var statearr_27401_27445 = state_27389__$1;
(statearr_27401_27445[(2)] = null);

(statearr_27401_27445[(1)] = (5));


return cljs.core.constant$keyword$59;
} else {
if((state_val_27390 === (6))){
var inst_27387 = (state_27389[(2)]);
var state_27389__$1 = state_27389;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27389__$1,inst_27387);
} else {
if((state_val_27390 === (17))){
var inst_27367 = (state_27389[(15)]);
var state_27389__$1 = state_27389;
var statearr_27402_27446 = state_27389__$1;
(statearr_27402_27446[(2)] = inst_27367);

(statearr_27402_27446[(1)] = (19));


return cljs.core.constant$keyword$59;
} else {
if((state_val_27390 === (3))){
var inst_27326 = (state_27389[(9)]);
var state_27389__$1 = state_27389;
var statearr_27403_27447 = state_27389__$1;
(statearr_27403_27447[(2)] = inst_27326);

(statearr_27403_27447[(1)] = (4));


return cljs.core.constant$keyword$59;
} else {
if((state_val_27390 === (12))){
var inst_27367 = (state_27389[(15)]);
var inst_27352 = (state_27389[(16)]);
var inst_27347 = (state_27389[(17)]);
var inst_27367__$1 = (function (){var G__27404 = inst_27352;
return (inst_27347.cljs$core$IFn$_invoke$arity$1 ? inst_27347.cljs$core$IFn$_invoke$arity$1(G__27404) : inst_27347.call(null,G__27404));
})();
var state_27389__$1 = (function (){var statearr_27405 = state_27389;
(statearr_27405[(15)] = inst_27367__$1);

return statearr_27405;
})();
if(cljs.core.truth_(inst_27367__$1)){
var statearr_27406_27448 = state_27389__$1;
(statearr_27406_27448[(1)] = (17));

} else {
var statearr_27407_27449 = state_27389__$1;
(statearr_27407_27449[(1)] = (18));

}

return cljs.core.constant$keyword$59;
} else {
if((state_val_27390 === (2))){
var inst_27326 = (state_27389[(9)]);
var inst_27329 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_27326);
var state_27389__$1 = state_27389;
var statearr_27408_27450 = state_27389__$1;
(statearr_27408_27450[(2)] = inst_27329);

(statearr_27408_27450[(1)] = (4));


return cljs.core.constant$keyword$59;
} else {
if((state_val_27390 === (23))){
var inst_27379 = (state_27389[(2)]);
var state_27389__$1 = state_27389;
var statearr_27409_27451 = state_27389__$1;
(statearr_27409_27451[(2)] = inst_27379);

(statearr_27409_27451[(1)] = (22));


return cljs.core.constant$keyword$59;
} else {
if((state_val_27390 === (19))){
var inst_27376 = (state_27389[(2)]);
var state_27389__$1 = state_27389;
if(cljs.core.truth_(inst_27376)){
var statearr_27410_27452 = state_27389__$1;
(statearr_27410_27452[(1)] = (20));

} else {
var statearr_27411_27453 = state_27389__$1;
(statearr_27411_27453[(1)] = (21));

}

return cljs.core.constant$keyword$59;
} else {
if((state_val_27390 === (11))){
var inst_27351 = (state_27389[(8)]);
var inst_27357 = (inst_27351 == null);
var state_27389__$1 = state_27389;
if(cljs.core.truth_(inst_27357)){
var statearr_27412_27454 = state_27389__$1;
(statearr_27412_27454[(1)] = (14));

} else {
var statearr_27413_27455 = state_27389__$1;
(statearr_27413_27455[(1)] = (15));

}

return cljs.core.constant$keyword$59;
} else {
if((state_val_27390 === (9))){
var inst_27344 = (state_27389[(13)]);
var inst_27344__$1 = (state_27389[(2)]);
var inst_27345 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_27344__$1,cljs.core.constant$keyword$71);
var inst_27346 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_27344__$1,cljs.core.constant$keyword$70);
var inst_27347 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_27344__$1,cljs.core.constant$keyword$69);
var state_27389__$1 = (function (){var statearr_27414 = state_27389;
(statearr_27414[(18)] = inst_27346);

(statearr_27414[(13)] = inst_27344__$1);

(statearr_27414[(17)] = inst_27347);

return statearr_27414;
})();
return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_27389__$1,(10),inst_27345);
} else {
if((state_val_27390 === (5))){
var inst_27336 = (state_27389[(7)]);
var inst_27339 = cljs.core.seq_QMARK_(inst_27336);
var state_27389__$1 = state_27389;
if(inst_27339){
var statearr_27415_27456 = state_27389__$1;
(statearr_27415_27456[(1)] = (7));

} else {
var statearr_27416_27457 = state_27389__$1;
(statearr_27416_27457[(1)] = (8));

}

return cljs.core.constant$keyword$59;
} else {
if((state_val_27390 === (14))){
var inst_27352 = (state_27389[(16)]);
var inst_27359 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_27352);
var state_27389__$1 = state_27389;
var statearr_27417_27458 = state_27389__$1;
(statearr_27417_27458[(2)] = inst_27359);

(statearr_27417_27458[(1)] = (16));


return cljs.core.constant$keyword$59;
} else {
if((state_val_27390 === (16))){
var inst_27362 = (state_27389[(2)]);
var inst_27363 = calc_state();
var inst_27336 = inst_27363;
var state_27389__$1 = (function (){var statearr_27418 = state_27389;
(statearr_27418[(7)] = inst_27336);

(statearr_27418[(19)] = inst_27362);

return statearr_27418;
})();
var statearr_27419_27459 = state_27389__$1;
(statearr_27419_27459[(2)] = null);

(statearr_27419_27459[(1)] = (5));


return cljs.core.constant$keyword$59;
} else {
if((state_val_27390 === (10))){
var inst_27352 = (state_27389[(16)]);
var inst_27351 = (state_27389[(8)]);
var inst_27350 = (state_27389[(2)]);
var inst_27351__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_27350,(0),null);
var inst_27352__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_27350,(1),null);
var inst_27353 = (inst_27351__$1 == null);
var inst_27354 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_27352__$1,change);
var inst_27355 = (inst_27353) || (inst_27354);
var state_27389__$1 = (function (){var statearr_27420 = state_27389;
(statearr_27420[(16)] = inst_27352__$1);

(statearr_27420[(8)] = inst_27351__$1);

return statearr_27420;
})();
if(cljs.core.truth_(inst_27355)){
var statearr_27421_27460 = state_27389__$1;
(statearr_27421_27460[(1)] = (11));

} else {
var statearr_27422_27461 = state_27389__$1;
(statearr_27422_27461[(1)] = (12));

}

return cljs.core.constant$keyword$59;
} else {
if((state_val_27390 === (18))){
var inst_27352 = (state_27389[(16)]);
var inst_27346 = (state_27389[(18)]);
var inst_27347 = (state_27389[(17)]);
var inst_27371 = cljs.core.empty_QMARK_(inst_27347);
var inst_27372 = (function (){var G__27423 = inst_27352;
return (inst_27346.cljs$core$IFn$_invoke$arity$1 ? inst_27346.cljs$core$IFn$_invoke$arity$1(G__27423) : inst_27346.call(null,G__27423));
})();
var inst_27373 = cljs.core.not(inst_27372);
var inst_27374 = (inst_27371) && (inst_27373);
var state_27389__$1 = state_27389;
var statearr_27424_27462 = state_27389__$1;
(statearr_27424_27462[(2)] = inst_27374);

(statearr_27424_27462[(1)] = (19));


return cljs.core.constant$keyword$59;
} else {
if((state_val_27390 === (8))){
var inst_27336 = (state_27389[(7)]);
var state_27389__$1 = state_27389;
var statearr_27425_27463 = state_27389__$1;
(statearr_27425_27463[(2)] = inst_27336);

(statearr_27425_27463[(1)] = (9));


return cljs.core.constant$keyword$59;
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
});})(c__18230__auto___27437,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__18215__auto__,c__18230__auto___27437,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__18216__auto__ = null;
var state_machine__18216__auto____0 = (function (){
var statearr_27429 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27429[(0)] = state_machine__18216__auto__);

(statearr_27429[(1)] = (1));

return statearr_27429;
});
var state_machine__18216__auto____1 = (function (state_27389){
while(true){
var ret_value__18217__auto__ = (function (){try{while(true){
var result__18218__auto__ = switch__18215__auto__(state_27389);
if(cljs.core.keyword_identical_QMARK_(result__18218__auto__,cljs.core.constant$keyword$59)){
continue;
} else {
return result__18218__auto__;
}
break;
}
}catch (e27430){if((e27430 instanceof Object)){
var ex__18219__auto__ = e27430;
var statearr_27431_27464 = state_27389;
(statearr_27431_27464[(5)] = ex__18219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27389);

return cljs.core.constant$keyword$59;
} else {
throw e27430;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18217__auto__,cljs.core.constant$keyword$59)){
var G__27465 = state_27389;
state_27389 = G__27465;
continue;
} else {
return ret_value__18217__auto__;
}
break;
}
});
state_machine__18216__auto__ = function(state_27389){
switch(arguments.length){
case 0:
return state_machine__18216__auto____0.call(this);
case 1:
return state_machine__18216__auto____1.call(this,state_27389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18216__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18216__auto____0;
state_machine__18216__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18216__auto____1;
return state_machine__18216__auto__;
})()
;})(switch__18215__auto__,c__18230__auto___27437,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__18232__auto__ = (function (){var statearr_27432 = (function (){return (f__18231__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18231__auto__.cljs$core$IFn$_invoke$arity$0() : f__18231__auto__.call(null));
})();
(statearr_27432[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18230__auto___27437);

return statearr_27432;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18232__auto__);
});})(c__18230__auto___27437,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
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
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

cljs.core.async.Pub = (function (){var obj27467 = {};
return obj27467;
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
return (function (){var or__3638__auto__ = (cljs.core.async.sub_STAR_[(function (){var G__27471 = x__4282__auto__;
return goog.typeOf(G__27471);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
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
return (function (){var or__3638__auto__ = (cljs.core.async.unsub_STAR_[(function (){var G__27475 = x__4282__auto__;
return goog.typeOf(G__27475);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
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
return (function (){var or__3638__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__27481 = x__4282__auto__;
return goog.typeOf(G__27481);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
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
return (function (){var or__3638__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__27483 = x__4282__auto__;
return goog.typeOf(G__27483);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
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
return pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__27624 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__27624) : cljs.core.atom.call(null,G__27624));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__3638__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__27626 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__27626) : cljs.core.deref.call(null,G__27626));
})(),topic);
if(cljs.core.truth_(or__3638__auto__)){
return or__3638__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3638__auto__,mults){
return (function (p1__27484_SHARP_){
if(cljs.core.truth_((function (){var G__27627 = topic;
return (p1__27484_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__27484_SHARP_.cljs$core$IFn$_invoke$arity$1(G__27627) : p1__27484_SHARP_.call(null,G__27627));
})())){
return p1__27484_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__27484_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((function (){var G__27628 = topic;
return (buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(G__27628) : buf_fn.call(null,G__27628));
})())));
}
});})(or__3638__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t27629 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27629 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta27630){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta27630 = meta27630;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27629.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t27629.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (function (){var G__27632 = topic;
return (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(G__27632) : self__.ensure_mult.call(null,G__27632));
})();
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t27629.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__27633 = self__.mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__27633) : cljs.core.deref.call(null,G__27633));
})(),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t27629.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__27634 = self__.mults;
var G__27635 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__27634,G__27635) : cljs.core.reset_BANG_.call(null,G__27634,G__27635));
});})(mults,ensure_mult))
;

cljs.core.async.t27629.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t27629.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t27629.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t27629.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_27631){
var self__ = this;
var _27631__$1 = this;
return self__.meta27630;
});})(mults,ensure_mult))
;

cljs.core.async.t27629.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_27631,meta27630__$1){
var self__ = this;
var _27631__$1 = this;
return (new cljs.core.async.t27629(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta27630__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t27629.cljs$lang$type = true;

cljs.core.async.t27629.cljs$lang$ctorStr = "cljs.core.async/t27629";

cljs.core.async.t27629.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write(writer__4226__auto__,"cljs.core.async/t27629");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t27629 = ((function (mults,ensure_mult){
return (function __GT_t27629(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta27630){
return (new cljs.core.async.t27629(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta27630));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t27629(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$29,65,cljs.core.constant$keyword$30,624,cljs.core.constant$keyword$31,14,cljs.core.constant$keyword$32,612,cljs.core.constant$keyword$33,"/Users/twer/dev/clojure/async-tut1/target/cljsbuild-compiler-1/cljs/core/async.cljs"], null)));
})()
;
var c__18230__auto___27760 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18230__auto___27760,mults,ensure_mult,p){
return (function (){
var f__18231__auto__ = (function (){var switch__18215__auto__ = ((function (c__18230__auto___27760,mults,ensure_mult,p){
return (function (state_27709){
var state_val_27710 = (state_27709[(1)]);
if((state_val_27710 === (7))){
var inst_27705 = (state_27709[(2)]);
var state_27709__$1 = state_27709;
var statearr_27711_27761 = state_27709__$1;
(statearr_27711_27761[(2)] = inst_27705);

(statearr_27711_27761[(1)] = (3));


return cljs.core.constant$keyword$59;
} else {
if((state_val_27710 === (20))){
var state_27709__$1 = state_27709;
var statearr_27712_27762 = state_27709__$1;
(statearr_27712_27762[(2)] = null);

(statearr_27712_27762[(1)] = (21));


return cljs.core.constant$keyword$59;
} else {
if((state_val_27710 === (1))){
var state_27709__$1 = state_27709;
var statearr_27713_27763 = state_27709__$1;
(statearr_27713_27763[(2)] = null);

(statearr_27713_27763[(1)] = (2));


return cljs.core.constant$keyword$59;
} else {
if((state_val_27710 === (24))){
var inst_27688 = (state_27709[(7)]);
var inst_27638 = (state_27709[(8)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_27709,(23),Object,null,(22));
var inst_27695 = cljs.core.async.muxch_STAR_(inst_27688);
var state_27709__$1 = state_27709;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27709__$1,(25),inst_27695,inst_27638);
} else {
if((state_val_27710 === (4))){
var inst_27638 = (state_27709[(8)]);
var inst_27638__$1 = (state_27709[(2)]);
var inst_27639 = (inst_27638__$1 == null);
var state_27709__$1 = (function (){var statearr_27714 = state_27709;
(statearr_27714[(8)] = inst_27638__$1);

return statearr_27714;
})();
if(cljs.core.truth_(inst_27639)){
var statearr_27715_27764 = state_27709__$1;
(statearr_27715_27764[(1)] = (5));

} else {
var statearr_27716_27765 = state_27709__$1;
(statearr_27716_27765[(1)] = (6));

}

return cljs.core.constant$keyword$59;
} else {
if((state_val_27710 === (15))){
var inst_27680 = (state_27709[(2)]);
var state_27709__$1 = state_27709;
var statearr_27717_27766 = state_27709__$1;
(statearr_27717_27766[(2)] = inst_27680);

(statearr_27717_27766[(1)] = (12));


return cljs.core.constant$keyword$59;
} else {
if((state_val_27710 === (21))){
var inst_27702 = (state_27709[(2)]);
var state_27709__$1 = (function (){var statearr_27718 = state_27709;
(statearr_27718[(9)] = inst_27702);

return statearr_27718;
})();
var statearr_27719_27767 = state_27709__$1;
(statearr_27719_27767[(2)] = null);

(statearr_27719_27767[(1)] = (2));


return cljs.core.constant$keyword$59;
} else {
if((state_val_27710 === (13))){
var inst_27662 = (state_27709[(10)]);
var inst_27664 = cljs.core.chunked_seq_QMARK_(inst_27662);
var state_27709__$1 = state_27709;
if(inst_27664){
var statearr_27720_27768 = state_27709__$1;
(statearr_27720_27768[(1)] = (16));

} else {
var statearr_27721_27769 = state_27709__$1;
(statearr_27721_27769[(1)] = (17));

}

return cljs.core.constant$keyword$59;
} else {
if((state_val_27710 === (22))){
var inst_27699 = (state_27709[(2)]);
var state_27709__$1 = state_27709;
var statearr_27722_27770 = state_27709__$1;
(statearr_27722_27770[(2)] = inst_27699);

(statearr_27722_27770[(1)] = (21));


return cljs.core.constant$keyword$59;
} else {
if((state_val_27710 === (6))){
var inst_27688 = (state_27709[(7)]);
var inst_27686 = (state_27709[(11)]);
var inst_27638 = (state_27709[(8)]);
var inst_27686__$1 = (function (){var G__27723 = inst_27638;
return (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(G__27723) : topic_fn.call(null,G__27723));
})();
var inst_27687 = (function (){var G__27724 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__27724) : cljs.core.deref.call(null,G__27724));
})();
var inst_27688__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_27687,inst_27686__$1);
var state_27709__$1 = (function (){var statearr_27725 = state_27709;
(statearr_27725[(7)] = inst_27688__$1);

(statearr_27725[(11)] = inst_27686__$1);

return statearr_27725;
})();
if(cljs.core.truth_(inst_27688__$1)){
var statearr_27726_27771 = state_27709__$1;
(statearr_27726_27771[(1)] = (19));

} else {
var statearr_27727_27772 = state_27709__$1;
(statearr_27727_27772[(1)] = (20));

}

return cljs.core.constant$keyword$59;
} else {
if((state_val_27710 === (25))){
var inst_27697 = (state_27709[(2)]);
var state_27709__$1 = state_27709;
var statearr_27728_27773 = state_27709__$1;
(statearr_27728_27773[(2)] = inst_27697);


cljs.core.async.impl.ioc_helpers.process_exception(state_27709__$1);

return cljs.core.constant$keyword$59;
} else {
if((state_val_27710 === (17))){
var inst_27662 = (state_27709[(10)]);
var inst_27671 = cljs.core.first(inst_27662);
var inst_27672 = cljs.core.async.muxch_STAR_(inst_27671);
var inst_27673 = cljs.core.async.close_BANG_(inst_27672);
var inst_27674 = cljs.core.next(inst_27662);
var inst_27648 = inst_27674;
var inst_27649 = null;
var inst_27650 = (0);
var inst_27651 = (0);
var state_27709__$1 = (function (){var statearr_27729 = state_27709;
(statearr_27729[(12)] = inst_27651);

(statearr_27729[(13)] = inst_27648);

(statearr_27729[(14)] = inst_27673);

(statearr_27729[(15)] = inst_27649);

(statearr_27729[(16)] = inst_27650);

return statearr_27729;
})();
var statearr_27730_27774 = state_27709__$1;
(statearr_27730_27774[(2)] = null);

(statearr_27730_27774[(1)] = (8));


return cljs.core.constant$keyword$59;
} else {
if((state_val_27710 === (3))){
var inst_27707 = (state_27709[(2)]);
var state_27709__$1 = state_27709;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27709__$1,inst_27707);
} else {
if((state_val_27710 === (12))){
var inst_27682 = (state_27709[(2)]);
var state_27709__$1 = state_27709;
var statearr_27731_27775 = state_27709__$1;
(statearr_27731_27775[(2)] = inst_27682);

(statearr_27731_27775[(1)] = (9));


return cljs.core.constant$keyword$59;
} else {
if((state_val_27710 === (2))){
var state_27709__$1 = state_27709;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27709__$1,(4),ch);
} else {
if((state_val_27710 === (23))){
var inst_27686 = (state_27709[(11)]);
var inst_27690 = (state_27709[(2)]);
var inst_27691 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_27686);
var state_27709__$1 = (function (){var statearr_27732 = state_27709;
(statearr_27732[(17)] = inst_27690);

return statearr_27732;
})();
var statearr_27733_27776 = state_27709__$1;
(statearr_27733_27776[(2)] = inst_27691);


cljs.core.async.impl.ioc_helpers.process_exception(state_27709__$1);

return cljs.core.constant$keyword$59;
} else {
if((state_val_27710 === (19))){
var state_27709__$1 = state_27709;
var statearr_27734_27777 = state_27709__$1;
(statearr_27734_27777[(2)] = null);

(statearr_27734_27777[(1)] = (24));


return cljs.core.constant$keyword$59;
} else {
if((state_val_27710 === (11))){
var inst_27648 = (state_27709[(13)]);
var inst_27662 = (state_27709[(10)]);
var inst_27662__$1 = cljs.core.seq(inst_27648);
var state_27709__$1 = (function (){var statearr_27735 = state_27709;
(statearr_27735[(10)] = inst_27662__$1);

return statearr_27735;
})();
if(inst_27662__$1){
var statearr_27736_27778 = state_27709__$1;
(statearr_27736_27778[(1)] = (13));

} else {
var statearr_27737_27779 = state_27709__$1;
(statearr_27737_27779[(1)] = (14));

}

return cljs.core.constant$keyword$59;
} else {
if((state_val_27710 === (9))){
var inst_27684 = (state_27709[(2)]);
var state_27709__$1 = state_27709;
var statearr_27738_27780 = state_27709__$1;
(statearr_27738_27780[(2)] = inst_27684);

(statearr_27738_27780[(1)] = (7));


return cljs.core.constant$keyword$59;
} else {
if((state_val_27710 === (5))){
var inst_27645 = (function (){var G__27739 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__27739) : cljs.core.deref.call(null,G__27739));
})();
var inst_27646 = cljs.core.vals(inst_27645);
var inst_27647 = cljs.core.seq(inst_27646);
var inst_27648 = inst_27647;
var inst_27649 = null;
var inst_27650 = (0);
var inst_27651 = (0);
var state_27709__$1 = (function (){var statearr_27740 = state_27709;
(statearr_27740[(12)] = inst_27651);

(statearr_27740[(13)] = inst_27648);

(statearr_27740[(15)] = inst_27649);

(statearr_27740[(16)] = inst_27650);

return statearr_27740;
})();
var statearr_27741_27781 = state_27709__$1;
(statearr_27741_27781[(2)] = null);

(statearr_27741_27781[(1)] = (8));


return cljs.core.constant$keyword$59;
} else {
if((state_val_27710 === (14))){
var state_27709__$1 = state_27709;
var statearr_27745_27782 = state_27709__$1;
(statearr_27745_27782[(2)] = null);

(statearr_27745_27782[(1)] = (15));


return cljs.core.constant$keyword$59;
} else {
if((state_val_27710 === (16))){
var inst_27662 = (state_27709[(10)]);
var inst_27666 = cljs.core.chunk_first(inst_27662);
var inst_27667 = cljs.core.chunk_rest(inst_27662);
var inst_27668 = cljs.core.count(inst_27666);
var inst_27648 = inst_27667;
var inst_27649 = inst_27666;
var inst_27650 = inst_27668;
var inst_27651 = (0);
var state_27709__$1 = (function (){var statearr_27746 = state_27709;
(statearr_27746[(12)] = inst_27651);

(statearr_27746[(13)] = inst_27648);

(statearr_27746[(15)] = inst_27649);

(statearr_27746[(16)] = inst_27650);

return statearr_27746;
})();
var statearr_27747_27783 = state_27709__$1;
(statearr_27747_27783[(2)] = null);

(statearr_27747_27783[(1)] = (8));


return cljs.core.constant$keyword$59;
} else {
if((state_val_27710 === (10))){
var inst_27651 = (state_27709[(12)]);
var inst_27648 = (state_27709[(13)]);
var inst_27649 = (state_27709[(15)]);
var inst_27650 = (state_27709[(16)]);
var inst_27656 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_27649,inst_27651);
var inst_27657 = cljs.core.async.muxch_STAR_(inst_27656);
var inst_27658 = cljs.core.async.close_BANG_(inst_27657);
var inst_27659 = (inst_27651 + (1));
var tmp27742 = inst_27648;
var tmp27743 = inst_27649;
var tmp27744 = inst_27650;
var inst_27648__$1 = tmp27742;
var inst_27649__$1 = tmp27743;
var inst_27650__$1 = tmp27744;
var inst_27651__$1 = inst_27659;
var state_27709__$1 = (function (){var statearr_27748 = state_27709;
(statearr_27748[(18)] = inst_27658);

(statearr_27748[(12)] = inst_27651__$1);

(statearr_27748[(13)] = inst_27648__$1);

(statearr_27748[(15)] = inst_27649__$1);

(statearr_27748[(16)] = inst_27650__$1);

return statearr_27748;
})();
var statearr_27749_27784 = state_27709__$1;
(statearr_27749_27784[(2)] = null);

(statearr_27749_27784[(1)] = (8));


return cljs.core.constant$keyword$59;
} else {
if((state_val_27710 === (18))){
var inst_27677 = (state_27709[(2)]);
var state_27709__$1 = state_27709;
var statearr_27750_27785 = state_27709__$1;
(statearr_27750_27785[(2)] = inst_27677);

(statearr_27750_27785[(1)] = (15));


return cljs.core.constant$keyword$59;
} else {
if((state_val_27710 === (8))){
var inst_27651 = (state_27709[(12)]);
var inst_27650 = (state_27709[(16)]);
var inst_27653 = (inst_27651 < inst_27650);
var inst_27654 = inst_27653;
var state_27709__$1 = state_27709;
if(cljs.core.truth_(inst_27654)){
var statearr_27751_27786 = state_27709__$1;
(statearr_27751_27786[(1)] = (10));

} else {
var statearr_27752_27787 = state_27709__$1;
(statearr_27752_27787[(1)] = (11));

}

return cljs.core.constant$keyword$59;
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
});})(c__18230__auto___27760,mults,ensure_mult,p))
;
return ((function (switch__18215__auto__,c__18230__auto___27760,mults,ensure_mult,p){
return (function() {
var state_machine__18216__auto__ = null;
var state_machine__18216__auto____0 = (function (){
var statearr_27756 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27756[(0)] = state_machine__18216__auto__);

(statearr_27756[(1)] = (1));

return statearr_27756;
});
var state_machine__18216__auto____1 = (function (state_27709){
while(true){
var ret_value__18217__auto__ = (function (){try{while(true){
var result__18218__auto__ = switch__18215__auto__(state_27709);
if(cljs.core.keyword_identical_QMARK_(result__18218__auto__,cljs.core.constant$keyword$59)){
continue;
} else {
return result__18218__auto__;
}
break;
}
}catch (e27757){if((e27757 instanceof Object)){
var ex__18219__auto__ = e27757;
var statearr_27758_27788 = state_27709;
(statearr_27758_27788[(5)] = ex__18219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27709);

return cljs.core.constant$keyword$59;
} else {
throw e27757;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18217__auto__,cljs.core.constant$keyword$59)){
var G__27789 = state_27709;
state_27709 = G__27789;
continue;
} else {
return ret_value__18217__auto__;
}
break;
}
});
state_machine__18216__auto__ = function(state_27709){
switch(arguments.length){
case 0:
return state_machine__18216__auto____0.call(this);
case 1:
return state_machine__18216__auto____1.call(this,state_27709);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18216__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18216__auto____0;
state_machine__18216__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18216__auto____1;
return state_machine__18216__auto__;
})()
;})(switch__18215__auto__,c__18230__auto___27760,mults,ensure_mult,p))
})();
var state__18232__auto__ = (function (){var statearr_27759 = (function (){return (f__18231__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18231__auto__.cljs$core$IFn$_invoke$arity$0() : f__18231__auto__.call(null));
})();
(statearr_27759[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18230__auto___27760);

return statearr_27759;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18232__auto__);
});})(c__18230__auto___27760,mults,ensure_mult,p))
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
return sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
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
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});
var unsub_all__2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
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
return map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (function (){var G__27870 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__27870) : cljs.core.atom.call(null,G__27870));
})();
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__18230__auto___27943 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18230__auto___27943,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__18231__auto__ = (function (){var switch__18215__auto__ = ((function (c__18230__auto___27943,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_27909){
var state_val_27910 = (state_27909[(1)]);
if((state_val_27910 === (7))){
var state_27909__$1 = state_27909;
var statearr_27911_27944 = state_27909__$1;
(statearr_27911_27944[(2)] = null);

(statearr_27911_27944[(1)] = (8));


return cljs.core.constant$keyword$59;
} else {
if((state_val_27910 === (1))){
var state_27909__$1 = state_27909;
var statearr_27912_27945 = state_27909__$1;
(statearr_27912_27945[(2)] = null);

(statearr_27912_27945[(1)] = (2));


return cljs.core.constant$keyword$59;
} else {
if((state_val_27910 === (4))){
var inst_27873 = (state_27909[(7)]);
var inst_27875 = (inst_27873 < cnt);
var state_27909__$1 = state_27909;
if(cljs.core.truth_(inst_27875)){
var statearr_27913_27946 = state_27909__$1;
(statearr_27913_27946[(1)] = (6));

} else {
var statearr_27914_27947 = state_27909__$1;
(statearr_27914_27947[(1)] = (7));

}

return cljs.core.constant$keyword$59;
} else {
if((state_val_27910 === (15))){
var inst_27905 = (state_27909[(2)]);
var state_27909__$1 = state_27909;
var statearr_27915_27948 = state_27909__$1;
(statearr_27915_27948[(2)] = inst_27905);

(statearr_27915_27948[(1)] = (3));


return cljs.core.constant$keyword$59;
} else {
if((state_val_27910 === (13))){
var inst_27898 = cljs.core.async.close_BANG_(out);
var state_27909__$1 = state_27909;
var statearr_27916_27949 = state_27909__$1;
(statearr_27916_27949[(2)] = inst_27898);

(statearr_27916_27949[(1)] = (15));


return cljs.core.constant$keyword$59;
} else {
if((state_val_27910 === (6))){
var state_27909__$1 = state_27909;
var statearr_27917_27950 = state_27909__$1;
(statearr_27917_27950[(2)] = null);

(statearr_27917_27950[(1)] = (11));


return cljs.core.constant$keyword$59;
} else {
if((state_val_27910 === (3))){
var inst_27907 = (state_27909[(2)]);
var state_27909__$1 = state_27909;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27909__$1,inst_27907);
} else {
if((state_val_27910 === (12))){
var inst_27895 = (state_27909[(8)]);
var inst_27895__$1 = (state_27909[(2)]);
var inst_27896 = cljs.core.some(cljs.core.nil_QMARK_,inst_27895__$1);
var state_27909__$1 = (function (){var statearr_27918 = state_27909;
(statearr_27918[(8)] = inst_27895__$1);

return statearr_27918;
})();
if(cljs.core.truth_(inst_27896)){
var statearr_27919_27951 = state_27909__$1;
(statearr_27919_27951[(1)] = (13));

} else {
var statearr_27920_27952 = state_27909__$1;
(statearr_27920_27952[(1)] = (14));

}

return cljs.core.constant$keyword$59;
} else {
if((state_val_27910 === (2))){
var inst_27872 = (function (){var G__27921 = dctr;
var G__27922 = cnt;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__27921,G__27922) : cljs.core.reset_BANG_.call(null,G__27921,G__27922));
})();
var inst_27873 = (0);
var state_27909__$1 = (function (){var statearr_27923 = state_27909;
(statearr_27923[(7)] = inst_27873);

(statearr_27923[(9)] = inst_27872);

return statearr_27923;
})();
var statearr_27924_27953 = state_27909__$1;
(statearr_27924_27953[(2)] = null);

(statearr_27924_27953[(1)] = (4));


return cljs.core.constant$keyword$59;
} else {
if((state_val_27910 === (11))){
var inst_27873 = (state_27909[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_27909,(10),Object,null,(9));
var inst_27882 = (function (){var G__27925 = inst_27873;
return (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(G__27925) : chs__$1.call(null,G__27925));
})();
var inst_27883 = (function (){var G__27926 = inst_27873;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__27926) : done.call(null,G__27926));
})();
var inst_27884 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_27882,inst_27883);
var state_27909__$1 = state_27909;
var statearr_27927_27954 = state_27909__$1;
(statearr_27927_27954[(2)] = inst_27884);


cljs.core.async.impl.ioc_helpers.process_exception(state_27909__$1);

return cljs.core.constant$keyword$59;
} else {
if((state_val_27910 === (9))){
var inst_27873 = (state_27909[(7)]);
var inst_27886 = (state_27909[(2)]);
var inst_27887 = (inst_27873 + (1));
var inst_27873__$1 = inst_27887;
var state_27909__$1 = (function (){var statearr_27928 = state_27909;
(statearr_27928[(10)] = inst_27886);

(statearr_27928[(7)] = inst_27873__$1);

return statearr_27928;
})();
var statearr_27929_27955 = state_27909__$1;
(statearr_27929_27955[(2)] = null);

(statearr_27929_27955[(1)] = (4));


return cljs.core.constant$keyword$59;
} else {
if((state_val_27910 === (5))){
var inst_27893 = (state_27909[(2)]);
var state_27909__$1 = (function (){var statearr_27930 = state_27909;
(statearr_27930[(11)] = inst_27893);

return statearr_27930;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27909__$1,(12),dchan);
} else {
if((state_val_27910 === (14))){
var inst_27895 = (state_27909[(8)]);
var inst_27900 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_27895);
var state_27909__$1 = state_27909;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27909__$1,(16),out,inst_27900);
} else {
if((state_val_27910 === (16))){
var inst_27902 = (state_27909[(2)]);
var state_27909__$1 = (function (){var statearr_27931 = state_27909;
(statearr_27931[(12)] = inst_27902);

return statearr_27931;
})();
var statearr_27932_27956 = state_27909__$1;
(statearr_27932_27956[(2)] = null);

(statearr_27932_27956[(1)] = (2));


return cljs.core.constant$keyword$59;
} else {
if((state_val_27910 === (10))){
var inst_27877 = (state_27909[(2)]);
var inst_27878 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_27909__$1 = (function (){var statearr_27933 = state_27909;
(statearr_27933[(13)] = inst_27877);

return statearr_27933;
})();
var statearr_27934_27957 = state_27909__$1;
(statearr_27934_27957[(2)] = inst_27878);


cljs.core.async.impl.ioc_helpers.process_exception(state_27909__$1);

return cljs.core.constant$keyword$59;
} else {
if((state_val_27910 === (8))){
var inst_27891 = (state_27909[(2)]);
var state_27909__$1 = state_27909;
var statearr_27935_27958 = state_27909__$1;
(statearr_27935_27958[(2)] = inst_27891);

(statearr_27935_27958[(1)] = (5));


return cljs.core.constant$keyword$59;
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
});})(c__18230__auto___27943,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__18215__auto__,c__18230__auto___27943,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__18216__auto__ = null;
var state_machine__18216__auto____0 = (function (){
var statearr_27939 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27939[(0)] = state_machine__18216__auto__);

(statearr_27939[(1)] = (1));

return statearr_27939;
});
var state_machine__18216__auto____1 = (function (state_27909){
while(true){
var ret_value__18217__auto__ = (function (){try{while(true){
var result__18218__auto__ = switch__18215__auto__(state_27909);
if(cljs.core.keyword_identical_QMARK_(result__18218__auto__,cljs.core.constant$keyword$59)){
continue;
} else {
return result__18218__auto__;
}
break;
}
}catch (e27940){if((e27940 instanceof Object)){
var ex__18219__auto__ = e27940;
var statearr_27941_27959 = state_27909;
(statearr_27941_27959[(5)] = ex__18219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27909);

return cljs.core.constant$keyword$59;
} else {
throw e27940;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18217__auto__,cljs.core.constant$keyword$59)){
var G__27960 = state_27909;
state_27909 = G__27960;
continue;
} else {
return ret_value__18217__auto__;
}
break;
}
});
state_machine__18216__auto__ = function(state_27909){
switch(arguments.length){
case 0:
return state_machine__18216__auto____0.call(this);
case 1:
return state_machine__18216__auto____1.call(this,state_27909);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18216__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18216__auto____0;
state_machine__18216__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18216__auto____1;
return state_machine__18216__auto__;
})()
;})(switch__18215__auto__,c__18230__auto___27943,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__18232__auto__ = (function (){var statearr_27942 = (function (){return (f__18231__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18231__auto__.cljs$core$IFn$_invoke$arity$0() : f__18231__auto__.call(null));
})();
(statearr_27942[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18230__auto___27943);

return statearr_27942;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18232__auto__);
});})(c__18230__auto___27943,chs__$1,out,cnt,rets,dchan,dctr,done))
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
return merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});
var merge__2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__18230__auto___28070 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18230__auto___28070,out){
return (function (){
var f__18231__auto__ = (function (){var switch__18215__auto__ = ((function (c__18230__auto___28070,out){
return (function (state_28046){
var state_val_28047 = (state_28046[(1)]);
if((state_val_28047 === (7))){
var inst_28025 = (state_28046[(7)]);
var inst_28026 = (state_28046[(8)]);
var inst_28025__$1 = (state_28046[(2)]);
var inst_28026__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28025__$1,(0),null);
var inst_28027 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28025__$1,(1),null);
var inst_28028 = (inst_28026__$1 == null);
var state_28046__$1 = (function (){var statearr_28048 = state_28046;
(statearr_28048[(7)] = inst_28025__$1);

(statearr_28048[(9)] = inst_28027);

(statearr_28048[(8)] = inst_28026__$1);

return statearr_28048;
})();
if(cljs.core.truth_(inst_28028)){
var statearr_28049_28071 = state_28046__$1;
(statearr_28049_28071[(1)] = (8));

} else {
var statearr_28050_28072 = state_28046__$1;
(statearr_28050_28072[(1)] = (9));

}

return cljs.core.constant$keyword$59;
} else {
if((state_val_28047 === (1))){
var inst_28017 = cljs.core.vec(chs);
var inst_28018 = inst_28017;
var state_28046__$1 = (function (){var statearr_28051 = state_28046;
(statearr_28051[(10)] = inst_28018);

return statearr_28051;
})();
var statearr_28052_28073 = state_28046__$1;
(statearr_28052_28073[(2)] = null);

(statearr_28052_28073[(1)] = (2));


return cljs.core.constant$keyword$59;
} else {
if((state_val_28047 === (4))){
var inst_28018 = (state_28046[(10)]);
var state_28046__$1 = state_28046;
return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_28046__$1,(7),inst_28018);
} else {
if((state_val_28047 === (6))){
var inst_28042 = (state_28046[(2)]);
var state_28046__$1 = state_28046;
var statearr_28053_28074 = state_28046__$1;
(statearr_28053_28074[(2)] = inst_28042);

(statearr_28053_28074[(1)] = (3));


return cljs.core.constant$keyword$59;
} else {
if((state_val_28047 === (3))){
var inst_28044 = (state_28046[(2)]);
var state_28046__$1 = state_28046;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28046__$1,inst_28044);
} else {
if((state_val_28047 === (2))){
var inst_28018 = (state_28046[(10)]);
var inst_28020 = cljs.core.count(inst_28018);
var inst_28021 = (inst_28020 > (0));
var state_28046__$1 = state_28046;
if(cljs.core.truth_(inst_28021)){
var statearr_28055_28075 = state_28046__$1;
(statearr_28055_28075[(1)] = (4));

} else {
var statearr_28056_28076 = state_28046__$1;
(statearr_28056_28076[(1)] = (5));

}

return cljs.core.constant$keyword$59;
} else {
if((state_val_28047 === (11))){
var inst_28018 = (state_28046[(10)]);
var inst_28035 = (state_28046[(2)]);
var tmp28054 = inst_28018;
var inst_28018__$1 = tmp28054;
var state_28046__$1 = (function (){var statearr_28057 = state_28046;
(statearr_28057[(10)] = inst_28018__$1);

(statearr_28057[(11)] = inst_28035);

return statearr_28057;
})();
var statearr_28058_28077 = state_28046__$1;
(statearr_28058_28077[(2)] = null);

(statearr_28058_28077[(1)] = (2));


return cljs.core.constant$keyword$59;
} else {
if((state_val_28047 === (9))){
var inst_28026 = (state_28046[(8)]);
var state_28046__$1 = state_28046;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28046__$1,(11),out,inst_28026);
} else {
if((state_val_28047 === (5))){
var inst_28040 = cljs.core.async.close_BANG_(out);
var state_28046__$1 = state_28046;
var statearr_28059_28078 = state_28046__$1;
(statearr_28059_28078[(2)] = inst_28040);

(statearr_28059_28078[(1)] = (6));


return cljs.core.constant$keyword$59;
} else {
if((state_val_28047 === (10))){
var inst_28038 = (state_28046[(2)]);
var state_28046__$1 = state_28046;
var statearr_28060_28079 = state_28046__$1;
(statearr_28060_28079[(2)] = inst_28038);

(statearr_28060_28079[(1)] = (6));


return cljs.core.constant$keyword$59;
} else {
if((state_val_28047 === (8))){
var inst_28018 = (state_28046[(10)]);
var inst_28025 = (state_28046[(7)]);
var inst_28027 = (state_28046[(9)]);
var inst_28026 = (state_28046[(8)]);
var inst_28030 = (function (){var c = inst_28027;
var v = inst_28026;
var vec__28023 = inst_28025;
var cs = inst_28018;
return ((function (c,v,vec__28023,cs,inst_28018,inst_28025,inst_28027,inst_28026,state_val_28047,c__18230__auto___28070,out){
return (function (p1__27961_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__27961_SHARP_);
});
;})(c,v,vec__28023,cs,inst_28018,inst_28025,inst_28027,inst_28026,state_val_28047,c__18230__auto___28070,out))
})();
var inst_28031 = cljs.core.filterv(inst_28030,inst_28018);
var inst_28018__$1 = inst_28031;
var state_28046__$1 = (function (){var statearr_28061 = state_28046;
(statearr_28061[(10)] = inst_28018__$1);

return statearr_28061;
})();
var statearr_28062_28080 = state_28046__$1;
(statearr_28062_28080[(2)] = null);

(statearr_28062_28080[(1)] = (2));


return cljs.core.constant$keyword$59;
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
});})(c__18230__auto___28070,out))
;
return ((function (switch__18215__auto__,c__18230__auto___28070,out){
return (function() {
var state_machine__18216__auto__ = null;
var state_machine__18216__auto____0 = (function (){
var statearr_28066 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28066[(0)] = state_machine__18216__auto__);

(statearr_28066[(1)] = (1));

return statearr_28066;
});
var state_machine__18216__auto____1 = (function (state_28046){
while(true){
var ret_value__18217__auto__ = (function (){try{while(true){
var result__18218__auto__ = switch__18215__auto__(state_28046);
if(cljs.core.keyword_identical_QMARK_(result__18218__auto__,cljs.core.constant$keyword$59)){
continue;
} else {
return result__18218__auto__;
}
break;
}
}catch (e28067){if((e28067 instanceof Object)){
var ex__18219__auto__ = e28067;
var statearr_28068_28081 = state_28046;
(statearr_28068_28081[(5)] = ex__18219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28046);

return cljs.core.constant$keyword$59;
} else {
throw e28067;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18217__auto__,cljs.core.constant$keyword$59)){
var G__28082 = state_28046;
state_28046 = G__28082;
continue;
} else {
return ret_value__18217__auto__;
}
break;
}
});
state_machine__18216__auto__ = function(state_28046){
switch(arguments.length){
case 0:
return state_machine__18216__auto____0.call(this);
case 1:
return state_machine__18216__auto____1.call(this,state_28046);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18216__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18216__auto____0;
state_machine__18216__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18216__auto____1;
return state_machine__18216__auto__;
})()
;})(switch__18215__auto__,c__18230__auto___28070,out))
})();
var state__18232__auto__ = (function (){var statearr_28069 = (function (){return (f__18231__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18231__auto__.cljs$core$IFn$_invoke$arity$0() : f__18231__auto__.call(null));
})();
(statearr_28069[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18230__auto___28070);

return statearr_28069;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18232__auto__);
});})(c__18230__auto___28070,out))
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
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
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
return take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__18230__auto___28178 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18230__auto___28178,out){
return (function (){
var f__18231__auto__ = (function (){var switch__18215__auto__ = ((function (c__18230__auto___28178,out){
return (function (state_28155){
var state_val_28156 = (state_28155[(1)]);
if((state_val_28156 === (7))){
var inst_28137 = (state_28155[(7)]);
var inst_28137__$1 = (state_28155[(2)]);
var inst_28138 = (inst_28137__$1 == null);
var inst_28139 = cljs.core.not(inst_28138);
var state_28155__$1 = (function (){var statearr_28157 = state_28155;
(statearr_28157[(7)] = inst_28137__$1);

return statearr_28157;
})();
if(inst_28139){
var statearr_28158_28179 = state_28155__$1;
(statearr_28158_28179[(1)] = (8));

} else {
var statearr_28159_28180 = state_28155__$1;
(statearr_28159_28180[(1)] = (9));

}

return cljs.core.constant$keyword$59;
} else {
if((state_val_28156 === (1))){
var inst_28132 = (0);
var state_28155__$1 = (function (){var statearr_28160 = state_28155;
(statearr_28160[(8)] = inst_28132);

return statearr_28160;
})();
var statearr_28161_28181 = state_28155__$1;
(statearr_28161_28181[(2)] = null);

(statearr_28161_28181[(1)] = (2));


return cljs.core.constant$keyword$59;
} else {
if((state_val_28156 === (4))){
var state_28155__$1 = state_28155;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28155__$1,(7),ch);
} else {
if((state_val_28156 === (6))){
var inst_28150 = (state_28155[(2)]);
var state_28155__$1 = state_28155;
var statearr_28162_28182 = state_28155__$1;
(statearr_28162_28182[(2)] = inst_28150);

(statearr_28162_28182[(1)] = (3));


return cljs.core.constant$keyword$59;
} else {
if((state_val_28156 === (3))){
var inst_28152 = (state_28155[(2)]);
var inst_28153 = cljs.core.async.close_BANG_(out);
var state_28155__$1 = (function (){var statearr_28163 = state_28155;
(statearr_28163[(9)] = inst_28152);

return statearr_28163;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_28155__$1,inst_28153);
} else {
if((state_val_28156 === (2))){
var inst_28132 = (state_28155[(8)]);
var inst_28134 = (inst_28132 < n);
var state_28155__$1 = state_28155;
if(cljs.core.truth_(inst_28134)){
var statearr_28164_28183 = state_28155__$1;
(statearr_28164_28183[(1)] = (4));

} else {
var statearr_28165_28184 = state_28155__$1;
(statearr_28165_28184[(1)] = (5));

}

return cljs.core.constant$keyword$59;
} else {
if((state_val_28156 === (11))){
var inst_28132 = (state_28155[(8)]);
var inst_28142 = (state_28155[(2)]);
var inst_28143 = (inst_28132 + (1));
var inst_28132__$1 = inst_28143;
var state_28155__$1 = (function (){var statearr_28166 = state_28155;
(statearr_28166[(8)] = inst_28132__$1);

(statearr_28166[(10)] = inst_28142);

return statearr_28166;
})();
var statearr_28167_28185 = state_28155__$1;
(statearr_28167_28185[(2)] = null);

(statearr_28167_28185[(1)] = (2));


return cljs.core.constant$keyword$59;
} else {
if((state_val_28156 === (9))){
var state_28155__$1 = state_28155;
var statearr_28168_28186 = state_28155__$1;
(statearr_28168_28186[(2)] = null);

(statearr_28168_28186[(1)] = (10));


return cljs.core.constant$keyword$59;
} else {
if((state_val_28156 === (5))){
var state_28155__$1 = state_28155;
var statearr_28169_28187 = state_28155__$1;
(statearr_28169_28187[(2)] = null);

(statearr_28169_28187[(1)] = (6));


return cljs.core.constant$keyword$59;
} else {
if((state_val_28156 === (10))){
var inst_28147 = (state_28155[(2)]);
var state_28155__$1 = state_28155;
var statearr_28170_28188 = state_28155__$1;
(statearr_28170_28188[(2)] = inst_28147);

(statearr_28170_28188[(1)] = (6));


return cljs.core.constant$keyword$59;
} else {
if((state_val_28156 === (8))){
var inst_28137 = (state_28155[(7)]);
var state_28155__$1 = state_28155;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28155__$1,(11),out,inst_28137);
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
});})(c__18230__auto___28178,out))
;
return ((function (switch__18215__auto__,c__18230__auto___28178,out){
return (function() {
var state_machine__18216__auto__ = null;
var state_machine__18216__auto____0 = (function (){
var statearr_28174 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28174[(0)] = state_machine__18216__auto__);

(statearr_28174[(1)] = (1));

return statearr_28174;
});
var state_machine__18216__auto____1 = (function (state_28155){
while(true){
var ret_value__18217__auto__ = (function (){try{while(true){
var result__18218__auto__ = switch__18215__auto__(state_28155);
if(cljs.core.keyword_identical_QMARK_(result__18218__auto__,cljs.core.constant$keyword$59)){
continue;
} else {
return result__18218__auto__;
}
break;
}
}catch (e28175){if((e28175 instanceof Object)){
var ex__18219__auto__ = e28175;
var statearr_28176_28189 = state_28155;
(statearr_28176_28189[(5)] = ex__18219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28155);

return cljs.core.constant$keyword$59;
} else {
throw e28175;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18217__auto__,cljs.core.constant$keyword$59)){
var G__28190 = state_28155;
state_28155 = G__28190;
continue;
} else {
return ret_value__18217__auto__;
}
break;
}
});
state_machine__18216__auto__ = function(state_28155){
switch(arguments.length){
case 0:
return state_machine__18216__auto____0.call(this);
case 1:
return state_machine__18216__auto____1.call(this,state_28155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18216__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18216__auto____0;
state_machine__18216__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18216__auto____1;
return state_machine__18216__auto__;
})()
;})(switch__18215__auto__,c__18230__auto___28178,out))
})();
var state__18232__auto__ = (function (){var statearr_28177 = (function (){return (f__18231__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18231__auto__.cljs$core$IFn$_invoke$arity$0() : f__18231__auto__.call(null));
})();
(statearr_28177[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18230__auto___28178);

return statearr_28177;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18232__auto__);
});})(c__18230__auto___28178,out))
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
return unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});
var unique__2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__18230__auto___28289 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18230__auto___28289,out){
return (function (){
var f__18231__auto__ = (function (){var switch__18215__auto__ = ((function (c__18230__auto___28289,out){
return (function (state_28264){
var state_val_28265 = (state_28264[(1)]);
if((state_val_28265 === (7))){
var inst_28259 = (state_28264[(2)]);
var state_28264__$1 = state_28264;
var statearr_28266_28290 = state_28264__$1;
(statearr_28266_28290[(2)] = inst_28259);

(statearr_28266_28290[(1)] = (3));


return cljs.core.constant$keyword$59;
} else {
if((state_val_28265 === (1))){
var inst_28241 = null;
var state_28264__$1 = (function (){var statearr_28267 = state_28264;
(statearr_28267[(7)] = inst_28241);

return statearr_28267;
})();
var statearr_28268_28291 = state_28264__$1;
(statearr_28268_28291[(2)] = null);

(statearr_28268_28291[(1)] = (2));


return cljs.core.constant$keyword$59;
} else {
if((state_val_28265 === (4))){
var inst_28244 = (state_28264[(8)]);
var inst_28244__$1 = (state_28264[(2)]);
var inst_28245 = (inst_28244__$1 == null);
var inst_28246 = cljs.core.not(inst_28245);
var state_28264__$1 = (function (){var statearr_28269 = state_28264;
(statearr_28269[(8)] = inst_28244__$1);

return statearr_28269;
})();
if(inst_28246){
var statearr_28270_28292 = state_28264__$1;
(statearr_28270_28292[(1)] = (5));

} else {
var statearr_28271_28293 = state_28264__$1;
(statearr_28271_28293[(1)] = (6));

}

return cljs.core.constant$keyword$59;
} else {
if((state_val_28265 === (6))){
var state_28264__$1 = state_28264;
var statearr_28272_28294 = state_28264__$1;
(statearr_28272_28294[(2)] = null);

(statearr_28272_28294[(1)] = (7));


return cljs.core.constant$keyword$59;
} else {
if((state_val_28265 === (3))){
var inst_28261 = (state_28264[(2)]);
var inst_28262 = cljs.core.async.close_BANG_(out);
var state_28264__$1 = (function (){var statearr_28273 = state_28264;
(statearr_28273[(9)] = inst_28261);

return statearr_28273;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_28264__$1,inst_28262);
} else {
if((state_val_28265 === (2))){
var state_28264__$1 = state_28264;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28264__$1,(4),ch);
} else {
if((state_val_28265 === (11))){
var inst_28244 = (state_28264[(8)]);
var inst_28253 = (state_28264[(2)]);
var inst_28241 = inst_28244;
var state_28264__$1 = (function (){var statearr_28274 = state_28264;
(statearr_28274[(10)] = inst_28253);

(statearr_28274[(7)] = inst_28241);

return statearr_28274;
})();
var statearr_28275_28295 = state_28264__$1;
(statearr_28275_28295[(2)] = null);

(statearr_28275_28295[(1)] = (2));


return cljs.core.constant$keyword$59;
} else {
if((state_val_28265 === (9))){
var inst_28244 = (state_28264[(8)]);
var state_28264__$1 = state_28264;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28264__$1,(11),out,inst_28244);
} else {
if((state_val_28265 === (5))){
var inst_28241 = (state_28264[(7)]);
var inst_28244 = (state_28264[(8)]);
var inst_28248 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_28244,inst_28241);
var state_28264__$1 = state_28264;
if(inst_28248){
var statearr_28277_28296 = state_28264__$1;
(statearr_28277_28296[(1)] = (8));

} else {
var statearr_28278_28297 = state_28264__$1;
(statearr_28278_28297[(1)] = (9));

}

return cljs.core.constant$keyword$59;
} else {
if((state_val_28265 === (10))){
var inst_28256 = (state_28264[(2)]);
var state_28264__$1 = state_28264;
var statearr_28279_28298 = state_28264__$1;
(statearr_28279_28298[(2)] = inst_28256);

(statearr_28279_28298[(1)] = (7));


return cljs.core.constant$keyword$59;
} else {
if((state_val_28265 === (8))){
var inst_28241 = (state_28264[(7)]);
var tmp28276 = inst_28241;
var inst_28241__$1 = tmp28276;
var state_28264__$1 = (function (){var statearr_28280 = state_28264;
(statearr_28280[(7)] = inst_28241__$1);

return statearr_28280;
})();
var statearr_28281_28299 = state_28264__$1;
(statearr_28281_28299[(2)] = null);

(statearr_28281_28299[(1)] = (2));


return cljs.core.constant$keyword$59;
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
});})(c__18230__auto___28289,out))
;
return ((function (switch__18215__auto__,c__18230__auto___28289,out){
return (function() {
var state_machine__18216__auto__ = null;
var state_machine__18216__auto____0 = (function (){
var statearr_28285 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28285[(0)] = state_machine__18216__auto__);

(statearr_28285[(1)] = (1));

return statearr_28285;
});
var state_machine__18216__auto____1 = (function (state_28264){
while(true){
var ret_value__18217__auto__ = (function (){try{while(true){
var result__18218__auto__ = switch__18215__auto__(state_28264);
if(cljs.core.keyword_identical_QMARK_(result__18218__auto__,cljs.core.constant$keyword$59)){
continue;
} else {
return result__18218__auto__;
}
break;
}
}catch (e28286){if((e28286 instanceof Object)){
var ex__18219__auto__ = e28286;
var statearr_28287_28300 = state_28264;
(statearr_28287_28300[(5)] = ex__18219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28264);

return cljs.core.constant$keyword$59;
} else {
throw e28286;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18217__auto__,cljs.core.constant$keyword$59)){
var G__28301 = state_28264;
state_28264 = G__28301;
continue;
} else {
return ret_value__18217__auto__;
}
break;
}
});
state_machine__18216__auto__ = function(state_28264){
switch(arguments.length){
case 0:
return state_machine__18216__auto____0.call(this);
case 1:
return state_machine__18216__auto____1.call(this,state_28264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18216__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18216__auto____0;
state_machine__18216__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18216__auto____1;
return state_machine__18216__auto__;
})()
;})(switch__18215__auto__,c__18230__auto___28289,out))
})();
var state__18232__auto__ = (function (){var statearr_28288 = (function (){return (f__18231__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18231__auto__.cljs$core$IFn$_invoke$arity$0() : f__18231__auto__.call(null));
})();
(statearr_28288[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18230__auto___28289);

return statearr_28288;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18232__auto__);
});})(c__18230__auto___28289,out))
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
return partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__18230__auto___28439 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18230__auto___28439,out){
return (function (){
var f__18231__auto__ = (function (){var switch__18215__auto__ = ((function (c__18230__auto___28439,out){
return (function (state_28409){
var state_val_28410 = (state_28409[(1)]);
if((state_val_28410 === (7))){
var inst_28405 = (state_28409[(2)]);
var state_28409__$1 = state_28409;
var statearr_28411_28440 = state_28409__$1;
(statearr_28411_28440[(2)] = inst_28405);

(statearr_28411_28440[(1)] = (3));


return cljs.core.constant$keyword$59;
} else {
if((state_val_28410 === (1))){
var inst_28372 = (new Array(n));
var inst_28373 = inst_28372;
var inst_28374 = (0);
var state_28409__$1 = (function (){var statearr_28412 = state_28409;
(statearr_28412[(7)] = inst_28373);

(statearr_28412[(8)] = inst_28374);

return statearr_28412;
})();
var statearr_28413_28441 = state_28409__$1;
(statearr_28413_28441[(2)] = null);

(statearr_28413_28441[(1)] = (2));


return cljs.core.constant$keyword$59;
} else {
if((state_val_28410 === (4))){
var inst_28377 = (state_28409[(9)]);
var inst_28377__$1 = (state_28409[(2)]);
var inst_28378 = (inst_28377__$1 == null);
var inst_28379 = cljs.core.not(inst_28378);
var state_28409__$1 = (function (){var statearr_28414 = state_28409;
(statearr_28414[(9)] = inst_28377__$1);

return statearr_28414;
})();
if(inst_28379){
var statearr_28415_28442 = state_28409__$1;
(statearr_28415_28442[(1)] = (5));

} else {
var statearr_28416_28443 = state_28409__$1;
(statearr_28416_28443[(1)] = (6));

}

return cljs.core.constant$keyword$59;
} else {
if((state_val_28410 === (15))){
var inst_28399 = (state_28409[(2)]);
var state_28409__$1 = state_28409;
var statearr_28417_28444 = state_28409__$1;
(statearr_28417_28444[(2)] = inst_28399);

(statearr_28417_28444[(1)] = (14));


return cljs.core.constant$keyword$59;
} else {
if((state_val_28410 === (13))){
var state_28409__$1 = state_28409;
var statearr_28418_28445 = state_28409__$1;
(statearr_28418_28445[(2)] = null);

(statearr_28418_28445[(1)] = (14));


return cljs.core.constant$keyword$59;
} else {
if((state_val_28410 === (6))){
var inst_28374 = (state_28409[(8)]);
var inst_28395 = (inst_28374 > (0));
var state_28409__$1 = state_28409;
if(cljs.core.truth_(inst_28395)){
var statearr_28419_28446 = state_28409__$1;
(statearr_28419_28446[(1)] = (12));

} else {
var statearr_28420_28447 = state_28409__$1;
(statearr_28420_28447[(1)] = (13));

}

return cljs.core.constant$keyword$59;
} else {
if((state_val_28410 === (3))){
var inst_28407 = (state_28409[(2)]);
var state_28409__$1 = state_28409;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28409__$1,inst_28407);
} else {
if((state_val_28410 === (12))){
var inst_28373 = (state_28409[(7)]);
var inst_28397 = cljs.core.vec(inst_28373);
var state_28409__$1 = state_28409;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28409__$1,(15),out,inst_28397);
} else {
if((state_val_28410 === (2))){
var state_28409__$1 = state_28409;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28409__$1,(4),ch);
} else {
if((state_val_28410 === (11))){
var inst_28389 = (state_28409[(2)]);
var inst_28390 = (new Array(n));
var inst_28373 = inst_28390;
var inst_28374 = (0);
var state_28409__$1 = (function (){var statearr_28421 = state_28409;
(statearr_28421[(7)] = inst_28373);

(statearr_28421[(10)] = inst_28389);

(statearr_28421[(8)] = inst_28374);

return statearr_28421;
})();
var statearr_28422_28448 = state_28409__$1;
(statearr_28422_28448[(2)] = null);

(statearr_28422_28448[(1)] = (2));


return cljs.core.constant$keyword$59;
} else {
if((state_val_28410 === (9))){
var inst_28373 = (state_28409[(7)]);
var inst_28387 = cljs.core.vec(inst_28373);
var state_28409__$1 = state_28409;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28409__$1,(11),out,inst_28387);
} else {
if((state_val_28410 === (5))){
var inst_28373 = (state_28409[(7)]);
var inst_28382 = (state_28409[(11)]);
var inst_28374 = (state_28409[(8)]);
var inst_28377 = (state_28409[(9)]);
var inst_28381 = (inst_28373[inst_28374] = inst_28377);
var inst_28382__$1 = (inst_28374 + (1));
var inst_28383 = (inst_28382__$1 < n);
var state_28409__$1 = (function (){var statearr_28423 = state_28409;
(statearr_28423[(11)] = inst_28382__$1);

(statearr_28423[(12)] = inst_28381);

return statearr_28423;
})();
if(cljs.core.truth_(inst_28383)){
var statearr_28424_28449 = state_28409__$1;
(statearr_28424_28449[(1)] = (8));

} else {
var statearr_28425_28450 = state_28409__$1;
(statearr_28425_28450[(1)] = (9));

}

return cljs.core.constant$keyword$59;
} else {
if((state_val_28410 === (14))){
var inst_28402 = (state_28409[(2)]);
var inst_28403 = cljs.core.async.close_BANG_(out);
var state_28409__$1 = (function (){var statearr_28427 = state_28409;
(statearr_28427[(13)] = inst_28402);

return statearr_28427;
})();
var statearr_28428_28451 = state_28409__$1;
(statearr_28428_28451[(2)] = inst_28403);

(statearr_28428_28451[(1)] = (7));


return cljs.core.constant$keyword$59;
} else {
if((state_val_28410 === (10))){
var inst_28393 = (state_28409[(2)]);
var state_28409__$1 = state_28409;
var statearr_28429_28452 = state_28409__$1;
(statearr_28429_28452[(2)] = inst_28393);

(statearr_28429_28452[(1)] = (7));


return cljs.core.constant$keyword$59;
} else {
if((state_val_28410 === (8))){
var inst_28373 = (state_28409[(7)]);
var inst_28382 = (state_28409[(11)]);
var tmp28426 = inst_28373;
var inst_28373__$1 = tmp28426;
var inst_28374 = inst_28382;
var state_28409__$1 = (function (){var statearr_28430 = state_28409;
(statearr_28430[(7)] = inst_28373__$1);

(statearr_28430[(8)] = inst_28374);

return statearr_28430;
})();
var statearr_28431_28453 = state_28409__$1;
(statearr_28431_28453[(2)] = null);

(statearr_28431_28453[(1)] = (2));


return cljs.core.constant$keyword$59;
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
});})(c__18230__auto___28439,out))
;
return ((function (switch__18215__auto__,c__18230__auto___28439,out){
return (function() {
var state_machine__18216__auto__ = null;
var state_machine__18216__auto____0 = (function (){
var statearr_28435 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28435[(0)] = state_machine__18216__auto__);

(statearr_28435[(1)] = (1));

return statearr_28435;
});
var state_machine__18216__auto____1 = (function (state_28409){
while(true){
var ret_value__18217__auto__ = (function (){try{while(true){
var result__18218__auto__ = switch__18215__auto__(state_28409);
if(cljs.core.keyword_identical_QMARK_(result__18218__auto__,cljs.core.constant$keyword$59)){
continue;
} else {
return result__18218__auto__;
}
break;
}
}catch (e28436){if((e28436 instanceof Object)){
var ex__18219__auto__ = e28436;
var statearr_28437_28454 = state_28409;
(statearr_28437_28454[(5)] = ex__18219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28409);

return cljs.core.constant$keyword$59;
} else {
throw e28436;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18217__auto__,cljs.core.constant$keyword$59)){
var G__28455 = state_28409;
state_28409 = G__28455;
continue;
} else {
return ret_value__18217__auto__;
}
break;
}
});
state_machine__18216__auto__ = function(state_28409){
switch(arguments.length){
case 0:
return state_machine__18216__auto____0.call(this);
case 1:
return state_machine__18216__auto____1.call(this,state_28409);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18216__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18216__auto____0;
state_machine__18216__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18216__auto____1;
return state_machine__18216__auto__;
})()
;})(switch__18215__auto__,c__18230__auto___28439,out))
})();
var state__18232__auto__ = (function (){var statearr_28438 = (function (){return (f__18231__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18231__auto__.cljs$core$IFn$_invoke$arity$0() : f__18231__auto__.call(null));
})();
(statearr_28438[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18230__auto___28439);

return statearr_28438;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18232__auto__);
});})(c__18230__auto___28439,out))
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
return partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__18230__auto___28603 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18230__auto___28603,out){
return (function (){
var f__18231__auto__ = (function (){var switch__18215__auto__ = ((function (c__18230__auto___28603,out){
return (function (state_28572){
var state_val_28573 = (state_28572[(1)]);
if((state_val_28573 === (7))){
var inst_28568 = (state_28572[(2)]);
var state_28572__$1 = state_28572;
var statearr_28574_28604 = state_28572__$1;
(statearr_28574_28604[(2)] = inst_28568);

(statearr_28574_28604[(1)] = (3));


return cljs.core.constant$keyword$59;
} else {
if((state_val_28573 === (1))){
var inst_28531 = [];
var inst_28532 = inst_28531;
var inst_28533 = cljs.core.constant$keyword$72;
var state_28572__$1 = (function (){var statearr_28575 = state_28572;
(statearr_28575[(7)] = inst_28532);

(statearr_28575[(8)] = inst_28533);

return statearr_28575;
})();
var statearr_28576_28605 = state_28572__$1;
(statearr_28576_28605[(2)] = null);

(statearr_28576_28605[(1)] = (2));


return cljs.core.constant$keyword$59;
} else {
if((state_val_28573 === (4))){
var inst_28536 = (state_28572[(9)]);
var inst_28536__$1 = (state_28572[(2)]);
var inst_28537 = (inst_28536__$1 == null);
var inst_28538 = cljs.core.not(inst_28537);
var state_28572__$1 = (function (){var statearr_28577 = state_28572;
(statearr_28577[(9)] = inst_28536__$1);

return statearr_28577;
})();
if(inst_28538){
var statearr_28578_28606 = state_28572__$1;
(statearr_28578_28606[(1)] = (5));

} else {
var statearr_28579_28607 = state_28572__$1;
(statearr_28579_28607[(1)] = (6));

}

return cljs.core.constant$keyword$59;
} else {
if((state_val_28573 === (15))){
var inst_28562 = (state_28572[(2)]);
var state_28572__$1 = state_28572;
var statearr_28580_28608 = state_28572__$1;
(statearr_28580_28608[(2)] = inst_28562);

(statearr_28580_28608[(1)] = (14));


return cljs.core.constant$keyword$59;
} else {
if((state_val_28573 === (13))){
var state_28572__$1 = state_28572;
var statearr_28581_28609 = state_28572__$1;
(statearr_28581_28609[(2)] = null);

(statearr_28581_28609[(1)] = (14));


return cljs.core.constant$keyword$59;
} else {
if((state_val_28573 === (6))){
var inst_28532 = (state_28572[(7)]);
var inst_28557 = inst_28532.length;
var inst_28558 = (inst_28557 > (0));
var state_28572__$1 = state_28572;
if(cljs.core.truth_(inst_28558)){
var statearr_28582_28610 = state_28572__$1;
(statearr_28582_28610[(1)] = (12));

} else {
var statearr_28583_28611 = state_28572__$1;
(statearr_28583_28611[(1)] = (13));

}

return cljs.core.constant$keyword$59;
} else {
if((state_val_28573 === (3))){
var inst_28570 = (state_28572[(2)]);
var state_28572__$1 = state_28572;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28572__$1,inst_28570);
} else {
if((state_val_28573 === (12))){
var inst_28532 = (state_28572[(7)]);
var inst_28560 = cljs.core.vec(inst_28532);
var state_28572__$1 = state_28572;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28572__$1,(15),out,inst_28560);
} else {
if((state_val_28573 === (2))){
var state_28572__$1 = state_28572;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28572__$1,(4),ch);
} else {
if((state_val_28573 === (11))){
var inst_28540 = (state_28572[(10)]);
var inst_28536 = (state_28572[(9)]);
var inst_28550 = (state_28572[(2)]);
var inst_28551 = [];
var inst_28552 = inst_28551.push(inst_28536);
var inst_28532 = inst_28551;
var inst_28533 = inst_28540;
var state_28572__$1 = (function (){var statearr_28584 = state_28572;
(statearr_28584[(11)] = inst_28552);

(statearr_28584[(7)] = inst_28532);

(statearr_28584[(12)] = inst_28550);

(statearr_28584[(8)] = inst_28533);

return statearr_28584;
})();
var statearr_28585_28612 = state_28572__$1;
(statearr_28585_28612[(2)] = null);

(statearr_28585_28612[(1)] = (2));


return cljs.core.constant$keyword$59;
} else {
if((state_val_28573 === (9))){
var inst_28532 = (state_28572[(7)]);
var inst_28548 = cljs.core.vec(inst_28532);
var state_28572__$1 = state_28572;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28572__$1,(11),out,inst_28548);
} else {
if((state_val_28573 === (5))){
var inst_28540 = (state_28572[(10)]);
var inst_28533 = (state_28572[(8)]);
var inst_28536 = (state_28572[(9)]);
var inst_28540__$1 = (function (){var G__28586 = inst_28536;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__28586) : f.call(null,G__28586));
})();
var inst_28541 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_28540__$1,inst_28533);
var inst_28542 = cljs.core.keyword_identical_QMARK_(inst_28533,cljs.core.constant$keyword$72);
var inst_28543 = (inst_28541) || (inst_28542);
var state_28572__$1 = (function (){var statearr_28587 = state_28572;
(statearr_28587[(10)] = inst_28540__$1);

return statearr_28587;
})();
if(cljs.core.truth_(inst_28543)){
var statearr_28588_28613 = state_28572__$1;
(statearr_28588_28613[(1)] = (8));

} else {
var statearr_28589_28614 = state_28572__$1;
(statearr_28589_28614[(1)] = (9));

}

return cljs.core.constant$keyword$59;
} else {
if((state_val_28573 === (14))){
var inst_28565 = (state_28572[(2)]);
var inst_28566 = cljs.core.async.close_BANG_(out);
var state_28572__$1 = (function (){var statearr_28591 = state_28572;
(statearr_28591[(13)] = inst_28565);

return statearr_28591;
})();
var statearr_28592_28615 = state_28572__$1;
(statearr_28592_28615[(2)] = inst_28566);

(statearr_28592_28615[(1)] = (7));


return cljs.core.constant$keyword$59;
} else {
if((state_val_28573 === (10))){
var inst_28555 = (state_28572[(2)]);
var state_28572__$1 = state_28572;
var statearr_28593_28616 = state_28572__$1;
(statearr_28593_28616[(2)] = inst_28555);

(statearr_28593_28616[(1)] = (7));


return cljs.core.constant$keyword$59;
} else {
if((state_val_28573 === (8))){
var inst_28532 = (state_28572[(7)]);
var inst_28540 = (state_28572[(10)]);
var inst_28536 = (state_28572[(9)]);
var inst_28545 = inst_28532.push(inst_28536);
var tmp28590 = inst_28532;
var inst_28532__$1 = tmp28590;
var inst_28533 = inst_28540;
var state_28572__$1 = (function (){var statearr_28594 = state_28572;
(statearr_28594[(14)] = inst_28545);

(statearr_28594[(7)] = inst_28532__$1);

(statearr_28594[(8)] = inst_28533);

return statearr_28594;
})();
var statearr_28595_28617 = state_28572__$1;
(statearr_28595_28617[(2)] = null);

(statearr_28595_28617[(1)] = (2));


return cljs.core.constant$keyword$59;
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
});})(c__18230__auto___28603,out))
;
return ((function (switch__18215__auto__,c__18230__auto___28603,out){
return (function() {
var state_machine__18216__auto__ = null;
var state_machine__18216__auto____0 = (function (){
var statearr_28599 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28599[(0)] = state_machine__18216__auto__);

(statearr_28599[(1)] = (1));

return statearr_28599;
});
var state_machine__18216__auto____1 = (function (state_28572){
while(true){
var ret_value__18217__auto__ = (function (){try{while(true){
var result__18218__auto__ = switch__18215__auto__(state_28572);
if(cljs.core.keyword_identical_QMARK_(result__18218__auto__,cljs.core.constant$keyword$59)){
continue;
} else {
return result__18218__auto__;
}
break;
}
}catch (e28600){if((e28600 instanceof Object)){
var ex__18219__auto__ = e28600;
var statearr_28601_28618 = state_28572;
(statearr_28601_28618[(5)] = ex__18219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28572);

return cljs.core.constant$keyword$59;
} else {
throw e28600;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18217__auto__,cljs.core.constant$keyword$59)){
var G__28619 = state_28572;
state_28572 = G__28619;
continue;
} else {
return ret_value__18217__auto__;
}
break;
}
});
state_machine__18216__auto__ = function(state_28572){
switch(arguments.length){
case 0:
return state_machine__18216__auto____0.call(this);
case 1:
return state_machine__18216__auto____1.call(this,state_28572);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18216__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18216__auto____0;
state_machine__18216__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18216__auto____1;
return state_machine__18216__auto__;
})()
;})(switch__18215__auto__,c__18230__auto___28603,out))
})();
var state__18232__auto__ = (function (){var statearr_28602 = (function (){return (f__18231__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18231__auto__.cljs$core$IFn$_invoke$arity$0() : f__18231__auto__.call(null));
})();
(statearr_28602[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18230__auto___28603);

return statearr_28602;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18232__auto__);
});})(c__18230__auto___28603,out))
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
