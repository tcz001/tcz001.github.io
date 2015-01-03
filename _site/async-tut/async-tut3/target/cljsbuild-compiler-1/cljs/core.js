// Compiled by ClojureScript 0.0-2511
goog.provide('cljs.core');
goog.require('goog.string.StringBuffer');
goog.require('goog.array');
goog.require('goog.object');
goog.require('goog.string');
cljs.core._STAR_clojurescript_version_STAR_ = "0.0-2511";
cljs.core._STAR_unchecked_if_STAR_ = false;
/**
* Each runtime environment provides a different way to print output.
* Whatever function *print-fn* is bound to will be passed any
* Strings which should be printed.
*/
cljs.core._STAR_print_fn_STAR_ = (function _STAR_print_fn_STAR_(_){
throw (new Error("No *print-fn* fn set for evaluation environment"));
});
/**
* Set *print-fn* to f.
*/
cljs.core.set_print_fn_BANG_ = (function set_print_fn_BANG_(f){
return cljs.core._STAR_print_fn_STAR_ = f;
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core._STAR_print_length_STAR_ = null;
cljs.core._STAR_print_level_STAR_ = null;
cljs.core.pr_opts = (function pr_opts(){
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$22,cljs.core._STAR_flush_on_newline_STAR_,cljs.core.constant$keyword$23,cljs.core._STAR_print_readably_STAR_,cljs.core.constant$keyword$24,cljs.core._STAR_print_meta_STAR_,cljs.core.constant$keyword$25,cljs.core._STAR_print_dup_STAR_,cljs.core.constant$keyword$26,cljs.core._STAR_print_length_STAR_], null);
});
/**
* Set *print-fn* to console.log
*/
cljs.core.enable_console_print_BANG_ = (function enable_console_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11317__delegate = function (args){
return console.log.apply(console,(function (){var G__11316 = args;
return (cljs.core.into_array.cljs$core$IFn$_invoke$arity$1 ? cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(G__11316) : cljs.core.into_array.call(null,G__11316));
})());
};
var G__11317 = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__11317__delegate.call(this,args);};
G__11317.cljs$lang$maxFixedArity = 0;
G__11317.cljs$lang$applyTo = (function (arglist__11318){
var args = cljs.core.seq(arglist__11318);
return G__11317__delegate(args);
});
G__11317.cljs$core$IFn$_invoke$arity$variadic = G__11317__delegate;
return G__11317;
})()
;
});
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){
return (x != null && x !== false);
});
cljs.core.not_native = null;

/**
* Tests if 2 arguments are the same object
*/
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
/**
* Returns true if x is nil, false otherwise.
*/
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return (x == null);
});
cljs.core.array_QMARK_ = (function array_QMARK_(x){
return x instanceof Array;
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return typeof n === 'number';
});
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){
if(cljs.core.truth_(x)){
return false;
} else {
return true;
}
});
/**
* Returns true if x is not nil, false otherwise.
*/
cljs.core.some_QMARK_ = (function some_QMARK_(x){
return !((x == null));
});
cljs.core.object_QMARK_ = (function object_QMARK_(x){
if(!((x == null))){
return (x.constructor === Object);
} else {
return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){
var G__11320 = x;
return goog.isString(G__11320);
});
/**
* Internal - do not use!
*/
cljs.core.native_satisfies_QMARK_ = (function native_satisfies_QMARK_(p,x){
var x__$1 = (((x == null))?null:x);
if((p[(function (){var G__11322 = x__$1;
return goog.typeOf(G__11322);
})()])){
return true;
} else {
if((p["_"])){
return true;
} else {
return false;

}
}
});
cljs.core.is_proto_ = (function is_proto_(x){
return (x.constructor.prototype === x);
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.type = (function type(x){
if((x == null)){
return null;
} else {
return x.constructor;
}
});
cljs.core.missing_protocol = (function missing_protocol(proto,obj){
var ty = cljs.core.type(obj);
var ty__$1 = (cljs.core.truth_((function (){var and__3626__auto__ = ty;
if(cljs.core.truth_(and__3626__auto__)){
return ty.cljs$lang$type;
} else {
return and__3626__auto__;
}
})())?ty.cljs$lang$ctorStr:(function (){var G__11324 = obj;
return goog.typeOf(G__11324);
})());
return (new Error(["No protocol method ",proto," defined for type ",ty__$1,": ",obj].join("")));
});
cljs.core.type__GT_str = (function type__GT_str(ty){
var temp__4124__auto__ = ty.cljs$lang$ctorStr;
if(cljs.core.truth_(temp__4124__auto__)){
var s = temp__4124__auto__;
return s;
} else {
return [cljs.core.str(ty)].join('');
}
});
if((typeof Symbol !== 'undefined') && (((function (){var G__11326 = Symbol;
return goog.typeOf(G__11326);
})() === "function"))){
cljs.core.ITER_SYMBOL = Symbol.iterator;
} else {
cljs.core.ITER_SYMBOL = "@@iterator";
}
cljs.core.make_array = (function() {
var make_array = null;
var make_array__1 = (function (size){
return (new Array(size));
});
var make_array__2 = (function (type,size){
return make_array.cljs$core$IFn$_invoke$arity$1(size);
});
make_array = function(type,size){
switch(arguments.length){
case 1:
return make_array__1.call(this,type);
case 2:
return make_array__2.call(this,type,size);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
make_array.cljs$core$IFn$_invoke$arity$1 = make_array__1;
make_array.cljs$core$IFn$_invoke$arity$2 = make_array__2;
return make_array;
})()
;
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(arr){
var len = arr.length;
var new_arr = (new Array(len));
var n__4525__auto___11328 = len;
var i_11329 = (0);
while(true){
if((i_11329 < n__4525__auto___11328)){
(new_arr[i_11329] = (arr[i_11329]));

var G__11330 = (i_11329 + (1));
i_11329 = G__11330;
continue;
} else {
}
break;
}

return new_arr;
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){
return Array.prototype.slice.call(arguments);
});
/**
* Returns the value at the index.
* @param {...*} var_args
*/
cljs.core.aget = (function() {
var aget = null;
var aget__2 = (function (array,i){
return (array[i]);
});
var aget__3 = (function() { 
var G__11339__delegate = function (array,i,idxs){
var G__11336 = aget;
var G__11337 = aget.cljs$core$IFn$_invoke$arity$2(array,i);
var G__11338 = idxs;
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$3 ? cljs.core.apply.cljs$core$IFn$_invoke$arity$3(G__11336,G__11337,G__11338) : cljs.core.apply.call(null,G__11336,G__11337,G__11338));
};
var G__11339 = function (array,i,var_args){
var idxs = null;
if (arguments.length > 2) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11339__delegate.call(this,array,i,idxs);};
G__11339.cljs$lang$maxFixedArity = 2;
G__11339.cljs$lang$applyTo = (function (arglist__11340){
var array = cljs.core.first(arglist__11340);
arglist__11340 = cljs.core.next(arglist__11340);
var i = cljs.core.first(arglist__11340);
var idxs = cljs.core.rest(arglist__11340);
return G__11339__delegate(array,i,idxs);
});
G__11339.cljs$core$IFn$_invoke$arity$variadic = G__11339__delegate;
return G__11339;
})()
;
aget = function(array,i,var_args){
var idxs = var_args;
switch(arguments.length){
case 2:
return aget__2.call(this,array,i);
default:
return aget__3.cljs$core$IFn$_invoke$arity$variadic(array,i, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
aget.cljs$lang$maxFixedArity = 2;
aget.cljs$lang$applyTo = aget__3.cljs$lang$applyTo;
aget.cljs$core$IFn$_invoke$arity$2 = aget__2;
aget.cljs$core$IFn$_invoke$arity$variadic = aget__3.cljs$core$IFn$_invoke$arity$variadic;
return aget;
})()
;
/**
* Sets the value at the index.
* @param {...*} var_args
*/
cljs.core.aset = (function() {
var aset = null;
var aset__3 = (function (array,i,val){
return (array[i] = val);
});
var aset__4 = (function() { 
var G__11349__delegate = function (array,idx,idx2,idxv){
var G__11345 = aset;
var G__11346 = (array[idx]);
var G__11347 = idx2;
var G__11348 = idxv;
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$4 ? cljs.core.apply.cljs$core$IFn$_invoke$arity$4(G__11345,G__11346,G__11347,G__11348) : cljs.core.apply.call(null,G__11345,G__11346,G__11347,G__11348));
};
var G__11349 = function (array,idx,idx2,var_args){
var idxv = null;
if (arguments.length > 3) {
  idxv = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11349__delegate.call(this,array,idx,idx2,idxv);};
G__11349.cljs$lang$maxFixedArity = 3;
G__11349.cljs$lang$applyTo = (function (arglist__11350){
var array = cljs.core.first(arglist__11350);
arglist__11350 = cljs.core.next(arglist__11350);
var idx = cljs.core.first(arglist__11350);
arglist__11350 = cljs.core.next(arglist__11350);
var idx2 = cljs.core.first(arglist__11350);
var idxv = cljs.core.rest(arglist__11350);
return G__11349__delegate(array,idx,idx2,idxv);
});
G__11349.cljs$core$IFn$_invoke$arity$variadic = G__11349__delegate;
return G__11349;
})()
;
aset = function(array,idx,idx2,var_args){
var idxv = var_args;
switch(arguments.length){
case 3:
return aset__3.call(this,array,idx,idx2);
default:
return aset__4.cljs$core$IFn$_invoke$arity$variadic(array,idx,idx2, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
aset.cljs$lang$maxFixedArity = 3;
aset.cljs$lang$applyTo = aset__4.cljs$lang$applyTo;
aset.cljs$core$IFn$_invoke$arity$3 = aset__3;
aset.cljs$core$IFn$_invoke$arity$variadic = aset__4.cljs$core$IFn$_invoke$arity$variadic;
return aset;
})()
;
/**
* Returns the length of the array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){
return array.length;
});
cljs.core.into_array = (function() {
var into_array = null;
var into_array__1 = (function (aseq){
return into_array.cljs$core$IFn$_invoke$arity$2(null,aseq);
});
var into_array__2 = (function (type,aseq){
var G__11356 = (function (a,x){
a.push(x);

return a;
});
var G__11357 = [];
var G__11358 = aseq;
return (cljs.core.reduce.cljs$core$IFn$_invoke$arity$3 ? cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(G__11356,G__11357,G__11358) : cljs.core.reduce.call(null,G__11356,G__11357,G__11358));
});
into_array = function(type,aseq){
switch(arguments.length){
case 1:
return into_array__1.call(this,type);
case 2:
return into_array__2.call(this,type,aseq);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
into_array.cljs$core$IFn$_invoke$arity$1 = into_array__1;
into_array.cljs$core$IFn$_invoke$arity$2 = into_array__2;
return into_array;
})()
;
/**
* Invoke JavaScript object method via string. Needed when the
* string is not a valid unquoted property name.
* @param {...*} var_args
*/
cljs.core.js_invoke = (function() { 
var js_invoke__delegate = function (obj,s,args){
return (obj[s]).apply(obj,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(args));
};
var js_invoke = function (obj,s,var_args){
var args = null;
if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return js_invoke__delegate.call(this,obj,s,args);};
js_invoke.cljs$lang$maxFixedArity = 2;
js_invoke.cljs$lang$applyTo = (function (arglist__11359){
var obj = cljs.core.first(arglist__11359);
arglist__11359 = cljs.core.next(arglist__11359);
var s = cljs.core.first(arglist__11359);
var args = cljs.core.rest(arglist__11359);
return js_invoke__delegate(obj,s,args);
});
js_invoke.cljs$core$IFn$_invoke$arity$variadic = js_invoke__delegate;
return js_invoke;
})()
;

cljs.core.Fn = (function (){var obj11361 = {};
return obj11361;
})();


cljs.core.IFn = (function (){var obj11363 = {};
return obj11363;
})();

cljs.core._invoke = (function() {
var _invoke = null;
var _invoke__1 = (function (this$){
if((function (){var and__3626__auto__ = this$;
if(and__3626__auto__){
return this$.cljs$core$IFn$_invoke$arity$1;
} else {
return and__3626__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else {
var x__4282__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3638__auto__ = (cljs.core._invoke[(function (){var G__11409 = x__4282__auto__;
return goog.typeOf(G__11409);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core._invoke["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){
if((function (){var and__3626__auto__ = this$;
if(and__3626__auto__){
return this$.cljs$core$IFn$_invoke$arity$2;
} else {
return and__3626__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else {
var x__4282__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3638__auto__ = (cljs.core._invoke[(function (){var G__11411 = x__4282__auto__;
return goog.typeOf(G__11411);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core._invoke["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){
if((function (){var and__3626__auto__ = this$;
if(and__3626__auto__){
return this$.cljs$core$IFn$_invoke$arity$3;
} else {
return and__3626__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else {
var x__4282__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3638__auto__ = (cljs.core._invoke[(function (){var G__11413 = x__4282__auto__;
return goog.typeOf(G__11413);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core._invoke["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){
if((function (){var and__3626__auto__ = this$;
if(and__3626__auto__){
return this$.cljs$core$IFn$_invoke$arity$4;
} else {
return and__3626__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else {
var x__4282__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3638__auto__ = (cljs.core._invoke[(function (){var G__11415 = x__4282__auto__;
return goog.typeOf(G__11415);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core._invoke["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){
if((function (){var and__3626__auto__ = this$;
if(and__3626__auto__){
return this$.cljs$core$IFn$_invoke$arity$5;
} else {
return and__3626__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else {
var x__4282__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3638__auto__ = (cljs.core._invoke[(function (){var G__11417 = x__4282__auto__;
return goog.typeOf(G__11417);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core._invoke["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){
if((function (){var and__3626__auto__ = this$;
if(and__3626__auto__){
return this$.cljs$core$IFn$_invoke$arity$6;
} else {
return and__3626__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else {
var x__4282__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3638__auto__ = (cljs.core._invoke[(function (){var G__11419 = x__4282__auto__;
return goog.typeOf(G__11419);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core._invoke["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){
if((function (){var and__3626__auto__ = this$;
if(and__3626__auto__){
return this$.cljs$core$IFn$_invoke$arity$7;
} else {
return and__3626__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else {
var x__4282__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3638__auto__ = (cljs.core._invoke[(function (){var G__11421 = x__4282__auto__;
return goog.typeOf(G__11421);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core._invoke["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){
if((function (){var and__3626__auto__ = this$;
if(and__3626__auto__){
return this$.cljs$core$IFn$_invoke$arity$8;
} else {
return and__3626__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else {
var x__4282__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3638__auto__ = (cljs.core._invoke[(function (){var G__11423 = x__4282__auto__;
return goog.typeOf(G__11423);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core._invoke["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){
if((function (){var and__3626__auto__ = this$;
if(and__3626__auto__){
return this$.cljs$core$IFn$_invoke$arity$9;
} else {
return and__3626__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else {
var x__4282__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3638__auto__ = (cljs.core._invoke[(function (){var G__11425 = x__4282__auto__;
return goog.typeOf(G__11425);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core._invoke["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){
if((function (){var and__3626__auto__ = this$;
if(and__3626__auto__){
return this$.cljs$core$IFn$_invoke$arity$10;
} else {
return and__3626__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else {
var x__4282__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3638__auto__ = (cljs.core._invoke[(function (){var G__11427 = x__4282__auto__;
return goog.typeOf(G__11427);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core._invoke["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if((function (){var and__3626__auto__ = this$;
if(and__3626__auto__){
return this$.cljs$core$IFn$_invoke$arity$11;
} else {
return and__3626__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else {
var x__4282__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3638__auto__ = (cljs.core._invoke[(function (){var G__11429 = x__4282__auto__;
return goog.typeOf(G__11429);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core._invoke["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if((function (){var and__3626__auto__ = this$;
if(and__3626__auto__){
return this$.cljs$core$IFn$_invoke$arity$12;
} else {
return and__3626__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else {
var x__4282__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3638__auto__ = (cljs.core._invoke[(function (){var G__11431 = x__4282__auto__;
return goog.typeOf(G__11431);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core._invoke["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if((function (){var and__3626__auto__ = this$;
if(and__3626__auto__){
return this$.cljs$core$IFn$_invoke$arity$13;
} else {
return and__3626__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else {
var x__4282__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3638__auto__ = (cljs.core._invoke[(function (){var G__11433 = x__4282__auto__;
return goog.typeOf(G__11433);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core._invoke["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if((function (){var and__3626__auto__ = this$;
if(and__3626__auto__){
return this$.cljs$core$IFn$_invoke$arity$14;
} else {
return and__3626__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else {
var x__4282__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3638__auto__ = (cljs.core._invoke[(function (){var G__11435 = x__4282__auto__;
return goog.typeOf(G__11435);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core._invoke["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if((function (){var and__3626__auto__ = this$;
if(and__3626__auto__){
return this$.cljs$core$IFn$_invoke$arity$15;
} else {
return and__3626__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else {
var x__4282__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3638__auto__ = (cljs.core._invoke[(function (){var G__11437 = x__4282__auto__;
return goog.typeOf(G__11437);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core._invoke["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if((function (){var and__3626__auto__ = this$;
if(and__3626__auto__){
return this$.cljs$core$IFn$_invoke$arity$16;
} else {
return and__3626__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else {
var x__4282__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3638__auto__ = (cljs.core._invoke[(function (){var G__11439 = x__4282__auto__;
return goog.typeOf(G__11439);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core._invoke["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if((function (){var and__3626__auto__ = this$;
if(and__3626__auto__){
return this$.cljs$core$IFn$_invoke$arity$17;
} else {
return and__3626__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else {
var x__4282__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3638__auto__ = (cljs.core._invoke[(function (){var G__11441 = x__4282__auto__;
return goog.typeOf(G__11441);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core._invoke["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if((function (){var and__3626__auto__ = this$;
if(and__3626__auto__){
return this$.cljs$core$IFn$_invoke$arity$18;
} else {
return and__3626__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else {
var x__4282__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3638__auto__ = (cljs.core._invoke[(function (){var G__11443 = x__4282__auto__;
return goog.typeOf(G__11443);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core._invoke["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
if((function (){var and__3626__auto__ = this$;
if(and__3626__auto__){
return this$.cljs$core$IFn$_invoke$arity$19;
} else {
return and__3626__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
} else {
var x__4282__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3638__auto__ = (cljs.core._invoke[(function (){var G__11445 = x__4282__auto__;
return goog.typeOf(G__11445);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core._invoke["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
if((function (){var and__3626__auto__ = this$;
if(and__3626__auto__){
return this$.cljs$core$IFn$_invoke$arity$20;
} else {
return and__3626__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
} else {
var x__4282__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3638__auto__ = (cljs.core._invoke[(function (){var G__11447 = x__4282__auto__;
return goog.typeOf(G__11447);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core._invoke["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
if((function (){var and__3626__auto__ = this$;
if(and__3626__auto__){
return this$.cljs$core$IFn$_invoke$arity$21;
} else {
return and__3626__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
} else {
var x__4282__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3638__auto__ = (cljs.core._invoke[(function (){var G__11449 = x__4282__auto__;
return goog.typeOf(G__11449);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core._invoke["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
}
});
var _invoke__22 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
if((function (){var and__3626__auto__ = this$;
if(and__3626__auto__){
return this$.cljs$core$IFn$_invoke$arity$22;
} else {
return and__3626__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$22(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
} else {
var x__4282__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3638__auto__ = (cljs.core._invoke[(function (){var G__11451 = x__4282__auto__;
return goog.typeOf(G__11451);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core._invoke["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
});
_invoke = function(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
switch(arguments.length){
case 1:
return _invoke__1.call(this,this$);
case 2:
return _invoke__2.call(this,this$,a);
case 3:
return _invoke__3.call(this,this$,a,b);
case 4:
return _invoke__4.call(this,this$,a,b,c);
case 5:
return _invoke__5.call(this,this$,a,b,c,d);
case 6:
return _invoke__6.call(this,this$,a,b,c,d,e);
case 7:
return _invoke__7.call(this,this$,a,b,c,d,e,f);
case 8:
return _invoke__8.call(this,this$,a,b,c,d,e,f,g);
case 9:
return _invoke__9.call(this,this$,a,b,c,d,e,f,g,h);
case 10:
return _invoke__10.call(this,this$,a,b,c,d,e,f,g,h,i);
case 11:
return _invoke__11.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case 12:
return _invoke__12.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return _invoke__13.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return _invoke__14.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return _invoke__15.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return _invoke__16.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return _invoke__17.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return _invoke__18.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return _invoke__19.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return _invoke__20.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return _invoke__21.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
case 22:
return _invoke__22.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_invoke.cljs$core$IFn$_invoke$arity$1 = _invoke__1;
_invoke.cljs$core$IFn$_invoke$arity$2 = _invoke__2;
_invoke.cljs$core$IFn$_invoke$arity$3 = _invoke__3;
_invoke.cljs$core$IFn$_invoke$arity$4 = _invoke__4;
_invoke.cljs$core$IFn$_invoke$arity$5 = _invoke__5;
_invoke.cljs$core$IFn$_invoke$arity$6 = _invoke__6;
_invoke.cljs$core$IFn$_invoke$arity$7 = _invoke__7;
_invoke.cljs$core$IFn$_invoke$arity$8 = _invoke__8;
_invoke.cljs$core$IFn$_invoke$arity$9 = _invoke__9;
_invoke.cljs$core$IFn$_invoke$arity$10 = _invoke__10;
_invoke.cljs$core$IFn$_invoke$arity$11 = _invoke__11;
_invoke.cljs$core$IFn$_invoke$arity$12 = _invoke__12;
_invoke.cljs$core$IFn$_invoke$arity$13 = _invoke__13;
_invoke.cljs$core$IFn$_invoke$arity$14 = _invoke__14;
_invoke.cljs$core$IFn$_invoke$arity$15 = _invoke__15;
_invoke.cljs$core$IFn$_invoke$arity$16 = _invoke__16;
_invoke.cljs$core$IFn$_invoke$arity$17 = _invoke__17;
_invoke.cljs$core$IFn$_invoke$arity$18 = _invoke__18;
_invoke.cljs$core$IFn$_invoke$arity$19 = _invoke__19;
_invoke.cljs$core$IFn$_invoke$arity$20 = _invoke__20;
_invoke.cljs$core$IFn$_invoke$arity$21 = _invoke__21;
_invoke.cljs$core$IFn$_invoke$arity$22 = _invoke__22;
return _invoke;
})()
;


cljs.core.ICloneable = (function (){var obj11453 = {};
return obj11453;
})();

cljs.core._clone = (function _clone(value){
if((function (){var and__3626__auto__ = value;
if(and__3626__auto__){
return value.cljs$core$ICloneable$_clone$arity$1;
} else {
return and__3626__auto__;
}
})()){
return value.cljs$core$ICloneable$_clone$arity$1(value);
} else {
var x__4282__auto__ = (((value == null))?null:value);
return (function (){var or__3638__auto__ = (cljs.core._clone[(function (){var G__11457 = x__4282__auto__;
return goog.typeOf(G__11457);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core._clone["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("ICloneable.-clone",value);
}
}
})().call(null,value);
}
});


cljs.core.ICounted = (function (){var obj11459 = {};
return obj11459;
})();

cljs.core._count = (function _count(coll){
if((function (){var and__3626__auto__ = coll;
if(and__3626__auto__){
return coll.cljs$core$ICounted$_count$arity$1;
} else {
return and__3626__auto__;
}
})()){
return coll.cljs$core$ICounted$_count$arity$1(coll);
} else {
var x__4282__auto__ = (((coll == null))?null:coll);
return (function (){var or__3638__auto__ = (cljs.core._count[(function (){var G__11463 = x__4282__auto__;
return goog.typeOf(G__11463);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core._count["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("ICounted.-count",coll);
}
}
})().call(null,coll);
}
});


cljs.core.IEmptyableCollection = (function (){var obj11465 = {};
return obj11465;
})();

cljs.core._empty = (function _empty(coll){
if((function (){var and__3626__auto__ = coll;
if(and__3626__auto__){
return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else {
return and__3626__auto__;
}
})()){
return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else {
var x__4282__auto__ = (((coll == null))?null:coll);
return (function (){var or__3638__auto__ = (cljs.core._empty[(function (){var G__11469 = x__4282__auto__;
return goog.typeOf(G__11469);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core._empty["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});


cljs.core.ICollection = (function (){var obj11471 = {};
return obj11471;
})();

cljs.core._conj = (function _conj(coll,o){
if((function (){var and__3626__auto__ = coll;
if(and__3626__auto__){
return coll.cljs$core$ICollection$_conj$arity$2;
} else {
return and__3626__auto__;
}
})()){
return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else {
var x__4282__auto__ = (((coll == null))?null:coll);
return (function (){var or__3638__auto__ = (cljs.core._conj[(function (){var G__11475 = x__4282__auto__;
return goog.typeOf(G__11475);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core._conj["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});


cljs.core.IIndexed = (function (){var obj11477 = {};
return obj11477;
})();

cljs.core._nth = (function() {
var _nth = null;
var _nth__2 = (function (coll,n){
if((function (){var and__3626__auto__ = coll;
if(and__3626__auto__){
return coll.cljs$core$IIndexed$_nth$arity$2;
} else {
return and__3626__auto__;
}
})()){
return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else {
var x__4282__auto__ = (((coll == null))?null:coll);
return (function (){var or__3638__auto__ = (cljs.core._nth[(function (){var G__11483 = x__4282__auto__;
return goog.typeOf(G__11483);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core._nth["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){
if((function (){var and__3626__auto__ = coll;
if(and__3626__auto__){
return coll.cljs$core$IIndexed$_nth$arity$3;
} else {
return and__3626__auto__;
}
})()){
return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else {
var x__4282__auto__ = (((coll == null))?null:coll);
return (function (){var or__3638__auto__ = (cljs.core._nth[(function (){var G__11485 = x__4282__auto__;
return goog.typeOf(G__11485);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core._nth["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return _nth__2.call(this,coll,n);
case 3:
return _nth__3.call(this,coll,n,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_nth.cljs$core$IFn$_invoke$arity$2 = _nth__2;
_nth.cljs$core$IFn$_invoke$arity$3 = _nth__3;
return _nth;
})()
;


cljs.core.ASeq = (function (){var obj11487 = {};
return obj11487;
})();


cljs.core.ISeq = (function (){var obj11489 = {};
return obj11489;
})();

cljs.core._first = (function _first(coll){
if((function (){var and__3626__auto__ = coll;
if(and__3626__auto__){
return coll.cljs$core$ISeq$_first$arity$1;
} else {
return and__3626__auto__;
}
})()){
return coll.cljs$core$ISeq$_first$arity$1(coll);
} else {
var x__4282__auto__ = (((coll == null))?null:coll);
return (function (){var or__3638__auto__ = (cljs.core._first[(function (){var G__11493 = x__4282__auto__;
return goog.typeOf(G__11493);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core._first["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("ISeq.-first",coll);
}
}
})().call(null,coll);
}
});

cljs.core._rest = (function _rest(coll){
if((function (){var and__3626__auto__ = coll;
if(and__3626__auto__){
return coll.cljs$core$ISeq$_rest$arity$1;
} else {
return and__3626__auto__;
}
})()){
return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else {
var x__4282__auto__ = (((coll == null))?null:coll);
return (function (){var or__3638__auto__ = (cljs.core._rest[(function (){var G__11497 = x__4282__auto__;
return goog.typeOf(G__11497);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core._rest["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});


cljs.core.INext = (function (){var obj11499 = {};
return obj11499;
})();

cljs.core._next = (function _next(coll){
if((function (){var and__3626__auto__ = coll;
if(and__3626__auto__){
return coll.cljs$core$INext$_next$arity$1;
} else {
return and__3626__auto__;
}
})()){
return coll.cljs$core$INext$_next$arity$1(coll);
} else {
var x__4282__auto__ = (((coll == null))?null:coll);
return (function (){var or__3638__auto__ = (cljs.core._next[(function (){var G__11503 = x__4282__auto__;
return goog.typeOf(G__11503);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core._next["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("INext.-next",coll);
}
}
})().call(null,coll);
}
});


cljs.core.ILookup = (function (){var obj11505 = {};
return obj11505;
})();

cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__2 = (function (o,k){
if((function (){var and__3626__auto__ = o;
if(and__3626__auto__){
return o.cljs$core$ILookup$_lookup$arity$2;
} else {
return and__3626__auto__;
}
})()){
return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else {
var x__4282__auto__ = (((o == null))?null:o);
return (function (){var or__3638__auto__ = (cljs.core._lookup[(function (){var G__11511 = x__4282__auto__;
return goog.typeOf(G__11511);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core._lookup["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){
if((function (){var and__3626__auto__ = o;
if(and__3626__auto__){
return o.cljs$core$ILookup$_lookup$arity$3;
} else {
return and__3626__auto__;
}
})()){
return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else {
var x__4282__auto__ = (((o == null))?null:o);
return (function (){var or__3638__auto__ = (cljs.core._lookup[(function (){var G__11513 = x__4282__auto__;
return goog.typeOf(G__11513);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core._lookup["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case 2:
return _lookup__2.call(this,o,k);
case 3:
return _lookup__3.call(this,o,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_lookup.cljs$core$IFn$_invoke$arity$2 = _lookup__2;
_lookup.cljs$core$IFn$_invoke$arity$3 = _lookup__3;
return _lookup;
})()
;


cljs.core.IAssociative = (function (){var obj11515 = {};
return obj11515;
})();

cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if((function (){var and__3626__auto__ = coll;
if(and__3626__auto__){
return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else {
return and__3626__auto__;
}
})()){
return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else {
var x__4282__auto__ = (((coll == null))?null:coll);
return (function (){var or__3638__auto__ = (cljs.core._contains_key_QMARK_[(function (){var G__11519 = x__4282__auto__;
return goog.typeOf(G__11519);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core._contains_key_QMARK_["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});

cljs.core._assoc = (function _assoc(coll,k,v){
if((function (){var and__3626__auto__ = coll;
if(and__3626__auto__){
return coll.cljs$core$IAssociative$_assoc$arity$3;
} else {
return and__3626__auto__;
}
})()){
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else {
var x__4282__auto__ = (((coll == null))?null:coll);
return (function (){var or__3638__auto__ = (cljs.core._assoc[(function (){var G__11523 = x__4282__auto__;
return goog.typeOf(G__11523);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core._assoc["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});


cljs.core.IMap = (function (){var obj11525 = {};
return obj11525;
})();

cljs.core._dissoc = (function _dissoc(coll,k){
if((function (){var and__3626__auto__ = coll;
if(and__3626__auto__){
return coll.cljs$core$IMap$_dissoc$arity$2;
} else {
return and__3626__auto__;
}
})()){
return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else {
var x__4282__auto__ = (((coll == null))?null:coll);
return (function (){var or__3638__auto__ = (cljs.core._dissoc[(function (){var G__11529 = x__4282__auto__;
return goog.typeOf(G__11529);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core._dissoc["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});


cljs.core.IMapEntry = (function (){var obj11531 = {};
return obj11531;
})();

cljs.core._key = (function _key(coll){
if((function (){var and__3626__auto__ = coll;
if(and__3626__auto__){
return coll.cljs$core$IMapEntry$_key$arity$1;
} else {
return and__3626__auto__;
}
})()){
return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else {
var x__4282__auto__ = (((coll == null))?null:coll);
return (function (){var or__3638__auto__ = (cljs.core._key[(function (){var G__11535 = x__4282__auto__;
return goog.typeOf(G__11535);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core._key["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});

cljs.core._val = (function _val(coll){
if((function (){var and__3626__auto__ = coll;
if(and__3626__auto__){
return coll.cljs$core$IMapEntry$_val$arity$1;
} else {
return and__3626__auto__;
}
})()){
return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else {
var x__4282__auto__ = (((coll == null))?null:coll);
return (function (){var or__3638__auto__ = (cljs.core._val[(function (){var G__11539 = x__4282__auto__;
return goog.typeOf(G__11539);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core._val["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});


cljs.core.ISet = (function (){var obj11541 = {};
return obj11541;
})();

cljs.core._disjoin = (function _disjoin(coll,v){
if((function (){var and__3626__auto__ = coll;
if(and__3626__auto__){
return coll.cljs$core$ISet$_disjoin$arity$2;
} else {
return and__3626__auto__;
}
})()){
return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else {
var x__4282__auto__ = (((coll == null))?null:coll);
return (function (){var or__3638__auto__ = (cljs.core._disjoin[(function (){var G__11545 = x__4282__auto__;
return goog.typeOf(G__11545);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core._disjoin["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});


cljs.core.IStack = (function (){var obj11547 = {};
return obj11547;
})();

cljs.core._peek = (function _peek(coll){
if((function (){var and__3626__auto__ = coll;
if(and__3626__auto__){
return coll.cljs$core$IStack$_peek$arity$1;
} else {
return and__3626__auto__;
}
})()){
return coll.cljs$core$IStack$_peek$arity$1(coll);
} else {
var x__4282__auto__ = (((coll == null))?null:coll);
return (function (){var or__3638__auto__ = (cljs.core._peek[(function (){var G__11551 = x__4282__auto__;
return goog.typeOf(G__11551);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core._peek["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("IStack.-peek",coll);
}
}
})().call(null,coll);
}
});

cljs.core._pop = (function _pop(coll){
if((function (){var and__3626__auto__ = coll;
if(and__3626__auto__){
return coll.cljs$core$IStack$_pop$arity$1;
} else {
return and__3626__auto__;
}
})()){
return coll.cljs$core$IStack$_pop$arity$1(coll);
} else {
var x__4282__auto__ = (((coll == null))?null:coll);
return (function (){var or__3638__auto__ = (cljs.core._pop[(function (){var G__11555 = x__4282__auto__;
return goog.typeOf(G__11555);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core._pop["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("IStack.-pop",coll);
}
}
})().call(null,coll);
}
});


cljs.core.IVector = (function (){var obj11557 = {};
return obj11557;
})();

cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if((function (){var and__3626__auto__ = coll;
if(and__3626__auto__){
return coll.cljs$core$IVector$_assoc_n$arity$3;
} else {
return and__3626__auto__;
}
})()){
return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else {
var x__4282__auto__ = (((coll == null))?null:coll);
return (function (){var or__3638__auto__ = (cljs.core._assoc_n[(function (){var G__11561 = x__4282__auto__;
return goog.typeOf(G__11561);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core._assoc_n["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});


cljs.core.IDeref = (function (){var obj11563 = {};
return obj11563;
})();

cljs.core._deref = (function _deref(o){
if((function (){var and__3626__auto__ = o;
if(and__3626__auto__){
return o.cljs$core$IDeref$_deref$arity$1;
} else {
return and__3626__auto__;
}
})()){
return o.cljs$core$IDeref$_deref$arity$1(o);
} else {
var x__4282__auto__ = (((o == null))?null:o);
return (function (){var or__3638__auto__ = (cljs.core._deref[(function (){var G__11567 = x__4282__auto__;
return goog.typeOf(G__11567);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core._deref["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("IDeref.-deref",o);
}
}
})().call(null,o);
}
});


cljs.core.IDerefWithTimeout = (function (){var obj11569 = {};
return obj11569;
})();

cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if((function (){var and__3626__auto__ = o;
if(and__3626__auto__){
return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else {
return and__3626__auto__;
}
})()){
return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else {
var x__4282__auto__ = (((o == null))?null:o);
return (function (){var or__3638__auto__ = (cljs.core._deref_with_timeout[(function (){var G__11573 = x__4282__auto__;
return goog.typeOf(G__11573);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core._deref_with_timeout["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});


cljs.core.IMeta = (function (){var obj11575 = {};
return obj11575;
})();

cljs.core._meta = (function _meta(o){
if((function (){var and__3626__auto__ = o;
if(and__3626__auto__){
return o.cljs$core$IMeta$_meta$arity$1;
} else {
return and__3626__auto__;
}
})()){
return o.cljs$core$IMeta$_meta$arity$1(o);
} else {
var x__4282__auto__ = (((o == null))?null:o);
return (function (){var or__3638__auto__ = (cljs.core._meta[(function (){var G__11579 = x__4282__auto__;
return goog.typeOf(G__11579);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core._meta["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("IMeta.-meta",o);
}
}
})().call(null,o);
}
});


cljs.core.IWithMeta = (function (){var obj11581 = {};
return obj11581;
})();

cljs.core._with_meta = (function _with_meta(o,meta){
if((function (){var and__3626__auto__ = o;
if(and__3626__auto__){
return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else {
return and__3626__auto__;
}
})()){
return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else {
var x__4282__auto__ = (((o == null))?null:o);
return (function (){var or__3638__auto__ = (cljs.core._with_meta[(function (){var G__11585 = x__4282__auto__;
return goog.typeOf(G__11585);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core._with_meta["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});


cljs.core.IReduce = (function (){var obj11587 = {};
return obj11587;
})();

cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__2 = (function (coll,f){
if((function (){var and__3626__auto__ = coll;
if(and__3626__auto__){
return coll.cljs$core$IReduce$_reduce$arity$2;
} else {
return and__3626__auto__;
}
})()){
return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else {
var x__4282__auto__ = (((coll == null))?null:coll);
return (function (){var or__3638__auto__ = (cljs.core._reduce[(function (){var G__11593 = x__4282__auto__;
return goog.typeOf(G__11593);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core._reduce["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){
if((function (){var and__3626__auto__ = coll;
if(and__3626__auto__){
return coll.cljs$core$IReduce$_reduce$arity$3;
} else {
return and__3626__auto__;
}
})()){
return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else {
var x__4282__auto__ = (((coll == null))?null:coll);
return (function (){var or__3638__auto__ = (cljs.core._reduce[(function (){var G__11595 = x__4282__auto__;
return goog.typeOf(G__11595);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core._reduce["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case 2:
return _reduce__2.call(this,coll,f);
case 3:
return _reduce__3.call(this,coll,f,start);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_reduce.cljs$core$IFn$_invoke$arity$2 = _reduce__2;
_reduce.cljs$core$IFn$_invoke$arity$3 = _reduce__3;
return _reduce;
})()
;


cljs.core.IKVReduce = (function (){var obj11597 = {};
return obj11597;
})();

cljs.core._kv_reduce = (function _kv_reduce(coll,f,init){
if((function (){var and__3626__auto__ = coll;
if(and__3626__auto__){
return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else {
return and__3626__auto__;
}
})()){
return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else {
var x__4282__auto__ = (((coll == null))?null:coll);
return (function (){var or__3638__auto__ = (cljs.core._kv_reduce[(function (){var G__11601 = x__4282__auto__;
return goog.typeOf(G__11601);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core._kv_reduce["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});


cljs.core.IEquiv = (function (){var obj11603 = {};
return obj11603;
})();

cljs.core._equiv = (function _equiv(o,other){
if((function (){var and__3626__auto__ = o;
if(and__3626__auto__){
return o.cljs$core$IEquiv$_equiv$arity$2;
} else {
return and__3626__auto__;
}
})()){
return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else {
var x__4282__auto__ = (((o == null))?null:o);
return (function (){var or__3638__auto__ = (cljs.core._equiv[(function (){var G__11607 = x__4282__auto__;
return goog.typeOf(G__11607);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core._equiv["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});


cljs.core.IHash = (function (){var obj11609 = {};
return obj11609;
})();

cljs.core._hash = (function _hash(o){
if((function (){var and__3626__auto__ = o;
if(and__3626__auto__){
return o.cljs$core$IHash$_hash$arity$1;
} else {
return and__3626__auto__;
}
})()){
return o.cljs$core$IHash$_hash$arity$1(o);
} else {
var x__4282__auto__ = (((o == null))?null:o);
return (function (){var or__3638__auto__ = (cljs.core._hash[(function (){var G__11613 = x__4282__auto__;
return goog.typeOf(G__11613);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core._hash["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("IHash.-hash",o);
}
}
})().call(null,o);
}
});


cljs.core.ISeqable = (function (){var obj11615 = {};
return obj11615;
})();

cljs.core._seq = (function _seq(o){
if((function (){var and__3626__auto__ = o;
if(and__3626__auto__){
return o.cljs$core$ISeqable$_seq$arity$1;
} else {
return and__3626__auto__;
}
})()){
return o.cljs$core$ISeqable$_seq$arity$1(o);
} else {
var x__4282__auto__ = (((o == null))?null:o);
return (function (){var or__3638__auto__ = (cljs.core._seq[(function (){var G__11619 = x__4282__auto__;
return goog.typeOf(G__11619);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core._seq["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("ISeqable.-seq",o);
}
}
})().call(null,o);
}
});


cljs.core.ISequential = (function (){var obj11621 = {};
return obj11621;
})();


cljs.core.IList = (function (){var obj11623 = {};
return obj11623;
})();


cljs.core.IRecord = (function (){var obj11625 = {};
return obj11625;
})();


cljs.core.IReversible = (function (){var obj11627 = {};
return obj11627;
})();

cljs.core._rseq = (function _rseq(coll){
if((function (){var and__3626__auto__ = coll;
if(and__3626__auto__){
return coll.cljs$core$IReversible$_rseq$arity$1;
} else {
return and__3626__auto__;
}
})()){
return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else {
var x__4282__auto__ = (((coll == null))?null:coll);
return (function (){var or__3638__auto__ = (cljs.core._rseq[(function (){var G__11631 = x__4282__auto__;
return goog.typeOf(G__11631);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core._rseq["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});


cljs.core.ISorted = (function (){var obj11633 = {};
return obj11633;
})();

cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){
if((function (){var and__3626__auto__ = coll;
if(and__3626__auto__){
return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else {
return and__3626__auto__;
}
})()){
return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else {
var x__4282__auto__ = (((coll == null))?null:coll);
return (function (){var or__3638__auto__ = (cljs.core._sorted_seq[(function (){var G__11637 = x__4282__auto__;
return goog.typeOf(G__11637);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core._sorted_seq["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});

cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){
if((function (){var and__3626__auto__ = coll;
if(and__3626__auto__){
return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else {
return and__3626__auto__;
}
})()){
return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else {
var x__4282__auto__ = (((coll == null))?null:coll);
return (function (){var or__3638__auto__ = (cljs.core._sorted_seq_from[(function (){var G__11641 = x__4282__auto__;
return goog.typeOf(G__11641);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core._sorted_seq_from["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});

cljs.core._entry_key = (function _entry_key(coll,entry){
if((function (){var and__3626__auto__ = coll;
if(and__3626__auto__){
return coll.cljs$core$ISorted$_entry_key$arity$2;
} else {
return and__3626__auto__;
}
})()){
return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else {
var x__4282__auto__ = (((coll == null))?null:coll);
return (function (){var or__3638__auto__ = (cljs.core._entry_key[(function (){var G__11645 = x__4282__auto__;
return goog.typeOf(G__11645);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core._entry_key["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});

cljs.core._comparator = (function _comparator(coll){
if((function (){var and__3626__auto__ = coll;
if(and__3626__auto__){
return coll.cljs$core$ISorted$_comparator$arity$1;
} else {
return and__3626__auto__;
}
})()){
return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else {
var x__4282__auto__ = (((coll == null))?null:coll);
return (function (){var or__3638__auto__ = (cljs.core._comparator[(function (){var G__11649 = x__4282__auto__;
return goog.typeOf(G__11649);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core._comparator["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});


cljs.core.IWriter = (function (){var obj11651 = {};
return obj11651;
})();

cljs.core._write = (function _write(writer,s){
if((function (){var and__3626__auto__ = writer;
if(and__3626__auto__){
return writer.cljs$core$IWriter$_write$arity$2;
} else {
return and__3626__auto__;
}
})()){
return writer.cljs$core$IWriter$_write$arity$2(writer,s);
} else {
var x__4282__auto__ = (((writer == null))?null:writer);
return (function (){var or__3638__auto__ = (cljs.core._write[(function (){var G__11655 = x__4282__auto__;
return goog.typeOf(G__11655);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core._write["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("IWriter.-write",writer);
}
}
})().call(null,writer,s);
}
});

cljs.core._flush = (function _flush(writer){
if((function (){var and__3626__auto__ = writer;
if(and__3626__auto__){
return writer.cljs$core$IWriter$_flush$arity$1;
} else {
return and__3626__auto__;
}
})()){
return writer.cljs$core$IWriter$_flush$arity$1(writer);
} else {
var x__4282__auto__ = (((writer == null))?null:writer);
return (function (){var or__3638__auto__ = (cljs.core._flush[(function (){var G__11659 = x__4282__auto__;
return goog.typeOf(G__11659);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core._flush["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("IWriter.-flush",writer);
}
}
})().call(null,writer);
}
});


cljs.core.IPrintWithWriter = (function (){var obj11661 = {};
return obj11661;
})();

cljs.core._pr_writer = (function _pr_writer(o,writer,opts){
if((function (){var and__3626__auto__ = o;
if(and__3626__auto__){
return o.cljs$core$IPrintWithWriter$_pr_writer$arity$3;
} else {
return and__3626__auto__;
}
})()){
return o.cljs$core$IPrintWithWriter$_pr_writer$arity$3(o,writer,opts);
} else {
var x__4282__auto__ = (((o == null))?null:o);
return (function (){var or__3638__auto__ = (cljs.core._pr_writer[(function (){var G__11665 = x__4282__auto__;
return goog.typeOf(G__11665);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core._pr_writer["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("IPrintWithWriter.-pr-writer",o);
}
}
})().call(null,o,writer,opts);
}
});


cljs.core.IPending = (function (){var obj11667 = {};
return obj11667;
})();

cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if((function (){var and__3626__auto__ = d;
if(and__3626__auto__){
return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else {
return and__3626__auto__;
}
})()){
return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else {
var x__4282__auto__ = (((d == null))?null:d);
return (function (){var or__3638__auto__ = (cljs.core._realized_QMARK_[(function (){var G__11671 = x__4282__auto__;
return goog.typeOf(G__11671);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core._realized_QMARK_["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("IPending.-realized?",d);
}
}
})().call(null,d);
}
});


cljs.core.IWatchable = (function (){var obj11673 = {};
return obj11673;
})();

cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if((function (){var and__3626__auto__ = this$;
if(and__3626__auto__){
return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else {
return and__3626__auto__;
}
})()){
return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else {
var x__4282__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3638__auto__ = (cljs.core._notify_watches[(function (){var G__11677 = x__4282__auto__;
return goog.typeOf(G__11677);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core._notify_watches["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});

cljs.core._add_watch = (function _add_watch(this$,key,f){
if((function (){var and__3626__auto__ = this$;
if(and__3626__auto__){
return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else {
return and__3626__auto__;
}
})()){
return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else {
var x__4282__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3638__auto__ = (cljs.core._add_watch[(function (){var G__11681 = x__4282__auto__;
return goog.typeOf(G__11681);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core._add_watch["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});

cljs.core._remove_watch = (function _remove_watch(this$,key){
if((function (){var and__3626__auto__ = this$;
if(and__3626__auto__){
return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else {
return and__3626__auto__;
}
})()){
return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else {
var x__4282__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3638__auto__ = (cljs.core._remove_watch[(function (){var G__11685 = x__4282__auto__;
return goog.typeOf(G__11685);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core._remove_watch["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});


cljs.core.IEditableCollection = (function (){var obj11687 = {};
return obj11687;
})();

cljs.core._as_transient = (function _as_transient(coll){
if((function (){var and__3626__auto__ = coll;
if(and__3626__auto__){
return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else {
return and__3626__auto__;
}
})()){
return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else {
var x__4282__auto__ = (((coll == null))?null:coll);
return (function (){var or__3638__auto__ = (cljs.core._as_transient[(function (){var G__11691 = x__4282__auto__;
return goog.typeOf(G__11691);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core._as_transient["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});


cljs.core.ITransientCollection = (function (){var obj11693 = {};
return obj11693;
})();

cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){
if((function (){var and__3626__auto__ = tcoll;
if(and__3626__auto__){
return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else {
return and__3626__auto__;
}
})()){
return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else {
var x__4282__auto__ = (((tcoll == null))?null:tcoll);
return (function (){var or__3638__auto__ = (cljs.core._conj_BANG_[(function (){var G__11697 = x__4282__auto__;
return goog.typeOf(G__11697);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core._conj_BANG_["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});

cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){
if((function (){var and__3626__auto__ = tcoll;
if(and__3626__auto__){
return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else {
return and__3626__auto__;
}
})()){
return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else {
var x__4282__auto__ = (((tcoll == null))?null:tcoll);
return (function (){var or__3638__auto__ = (cljs.core._persistent_BANG_[(function (){var G__11701 = x__4282__auto__;
return goog.typeOf(G__11701);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core._persistent_BANG_["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});


cljs.core.ITransientAssociative = (function (){var obj11703 = {};
return obj11703;
})();

cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){
if((function (){var and__3626__auto__ = tcoll;
if(and__3626__auto__){
return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else {
return and__3626__auto__;
}
})()){
return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else {
var x__4282__auto__ = (((tcoll == null))?null:tcoll);
return (function (){var or__3638__auto__ = (cljs.core._assoc_BANG_[(function (){var G__11707 = x__4282__auto__;
return goog.typeOf(G__11707);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core._assoc_BANG_["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});


cljs.core.ITransientMap = (function (){var obj11709 = {};
return obj11709;
})();

cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){
if((function (){var and__3626__auto__ = tcoll;
if(and__3626__auto__){
return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else {
return and__3626__auto__;
}
})()){
return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else {
var x__4282__auto__ = (((tcoll == null))?null:tcoll);
return (function (){var or__3638__auto__ = (cljs.core._dissoc_BANG_[(function (){var G__11713 = x__4282__auto__;
return goog.typeOf(G__11713);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core._dissoc_BANG_["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});


cljs.core.ITransientVector = (function (){var obj11715 = {};
return obj11715;
})();

cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){
if((function (){var and__3626__auto__ = tcoll;
if(and__3626__auto__){
return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else {
return and__3626__auto__;
}
})()){
return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else {
var x__4282__auto__ = (((tcoll == null))?null:tcoll);
return (function (){var or__3638__auto__ = (cljs.core._assoc_n_BANG_[(function (){var G__11719 = x__4282__auto__;
return goog.typeOf(G__11719);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core._assoc_n_BANG_["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});

cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){
if((function (){var and__3626__auto__ = tcoll;
if(and__3626__auto__){
return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else {
return and__3626__auto__;
}
})()){
return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else {
var x__4282__auto__ = (((tcoll == null))?null:tcoll);
return (function (){var or__3638__auto__ = (cljs.core._pop_BANG_[(function (){var G__11723 = x__4282__auto__;
return goog.typeOf(G__11723);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core._pop_BANG_["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});


cljs.core.ITransientSet = (function (){var obj11725 = {};
return obj11725;
})();

cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){
if((function (){var and__3626__auto__ = tcoll;
if(and__3626__auto__){
return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else {
return and__3626__auto__;
}
})()){
return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else {
var x__4282__auto__ = (((tcoll == null))?null:tcoll);
return (function (){var or__3638__auto__ = (cljs.core._disjoin_BANG_[(function (){var G__11729 = x__4282__auto__;
return goog.typeOf(G__11729);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core._disjoin_BANG_["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});


cljs.core.IComparable = (function (){var obj11731 = {};
return obj11731;
})();

cljs.core._compare = (function _compare(x,y){
if((function (){var and__3626__auto__ = x;
if(and__3626__auto__){
return x.cljs$core$IComparable$_compare$arity$2;
} else {
return and__3626__auto__;
}
})()){
return x.cljs$core$IComparable$_compare$arity$2(x,y);
} else {
var x__4282__auto__ = (((x == null))?null:x);
return (function (){var or__3638__auto__ = (cljs.core._compare[(function (){var G__11735 = x__4282__auto__;
return goog.typeOf(G__11735);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core._compare["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("IComparable.-compare",x);
}
}
})().call(null,x,y);
}
});


cljs.core.IChunk = (function (){var obj11737 = {};
return obj11737;
})();

cljs.core._drop_first = (function _drop_first(coll){
if((function (){var and__3626__auto__ = coll;
if(and__3626__auto__){
return coll.cljs$core$IChunk$_drop_first$arity$1;
} else {
return and__3626__auto__;
}
})()){
return coll.cljs$core$IChunk$_drop_first$arity$1(coll);
} else {
var x__4282__auto__ = (((coll == null))?null:coll);
return (function (){var or__3638__auto__ = (cljs.core._drop_first[(function (){var G__11741 = x__4282__auto__;
return goog.typeOf(G__11741);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core._drop_first["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("IChunk.-drop-first",coll);
}
}
})().call(null,coll);
}
});


cljs.core.IChunkedSeq = (function (){var obj11743 = {};
return obj11743;
})();

cljs.core._chunked_first = (function _chunked_first(coll){
if((function (){var and__3626__auto__ = coll;
if(and__3626__auto__){
return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1;
} else {
return and__3626__auto__;
}
})()){
return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1(coll);
} else {
var x__4282__auto__ = (((coll == null))?null:coll);
return (function (){var or__3638__auto__ = (cljs.core._chunked_first[(function (){var G__11747 = x__4282__auto__;
return goog.typeOf(G__11747);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core._chunked_first["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("IChunkedSeq.-chunked-first",coll);
}
}
})().call(null,coll);
}
});

cljs.core._chunked_rest = (function _chunked_rest(coll){
if((function (){var and__3626__auto__ = coll;
if(and__3626__auto__){
return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1;
} else {
return and__3626__auto__;
}
})()){
return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
} else {
var x__4282__auto__ = (((coll == null))?null:coll);
return (function (){var or__3638__auto__ = (cljs.core._chunked_rest[(function (){var G__11751 = x__4282__auto__;
return goog.typeOf(G__11751);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core._chunked_rest["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("IChunkedSeq.-chunked-rest",coll);
}
}
})().call(null,coll);
}
});


cljs.core.IChunkedNext = (function (){var obj11753 = {};
return obj11753;
})();

cljs.core._chunked_next = (function _chunked_next(coll){
if((function (){var and__3626__auto__ = coll;
if(and__3626__auto__){
return coll.cljs$core$IChunkedNext$_chunked_next$arity$1;
} else {
return and__3626__auto__;
}
})()){
return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
} else {
var x__4282__auto__ = (((coll == null))?null:coll);
return (function (){var or__3638__auto__ = (cljs.core._chunked_next[(function (){var G__11757 = x__4282__auto__;
return goog.typeOf(G__11757);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core._chunked_next["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("IChunkedNext.-chunked-next",coll);
}
}
})().call(null,coll);
}
});


cljs.core.INamed = (function (){var obj11759 = {};
return obj11759;
})();

cljs.core._name = (function _name(x){
if((function (){var and__3626__auto__ = x;
if(and__3626__auto__){
return x.cljs$core$INamed$_name$arity$1;
} else {
return and__3626__auto__;
}
})()){
return x.cljs$core$INamed$_name$arity$1(x);
} else {
var x__4282__auto__ = (((x == null))?null:x);
return (function (){var or__3638__auto__ = (cljs.core._name[(function (){var G__11763 = x__4282__auto__;
return goog.typeOf(G__11763);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core._name["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("INamed.-name",x);
}
}
})().call(null,x);
}
});

cljs.core._namespace = (function _namespace(x){
if((function (){var and__3626__auto__ = x;
if(and__3626__auto__){
return x.cljs$core$INamed$_namespace$arity$1;
} else {
return and__3626__auto__;
}
})()){
return x.cljs$core$INamed$_namespace$arity$1(x);
} else {
var x__4282__auto__ = (((x == null))?null:x);
return (function (){var or__3638__auto__ = (cljs.core._namespace[(function (){var G__11767 = x__4282__auto__;
return goog.typeOf(G__11767);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core._namespace["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("INamed.-namespace",x);
}
}
})().call(null,x);
}
});


cljs.core.IAtom = (function (){var obj11769 = {};
return obj11769;
})();


cljs.core.IReset = (function (){var obj11771 = {};
return obj11771;
})();

cljs.core._reset_BANG_ = (function _reset_BANG_(o,new_value){
if((function (){var and__3626__auto__ = o;
if(and__3626__auto__){
return o.cljs$core$IReset$_reset_BANG_$arity$2;
} else {
return and__3626__auto__;
}
})()){
return o.cljs$core$IReset$_reset_BANG_$arity$2(o,new_value);
} else {
var x__4282__auto__ = (((o == null))?null:o);
return (function (){var or__3638__auto__ = (cljs.core._reset_BANG_[(function (){var G__11775 = x__4282__auto__;
return goog.typeOf(G__11775);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core._reset_BANG_["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("IReset.-reset!",o);
}
}
})().call(null,o,new_value);
}
});


cljs.core.ISwap = (function (){var obj11777 = {};
return obj11777;
})();

cljs.core._swap_BANG_ = (function() {
var _swap_BANG_ = null;
var _swap_BANG___2 = (function (o,f){
if((function (){var and__3626__auto__ = o;
if(and__3626__auto__){
return o.cljs$core$ISwap$_swap_BANG_$arity$2;
} else {
return and__3626__auto__;
}
})()){
return o.cljs$core$ISwap$_swap_BANG_$arity$2(o,f);
} else {
var x__4282__auto__ = (((o == null))?null:o);
return (function (){var or__3638__auto__ = (cljs.core._swap_BANG_[(function (){var G__11787 = x__4282__auto__;
return goog.typeOf(G__11787);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core._swap_BANG_["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("ISwap.-swap!",o);
}
}
})().call(null,o,f);
}
});
var _swap_BANG___3 = (function (o,f,a){
if((function (){var and__3626__auto__ = o;
if(and__3626__auto__){
return o.cljs$core$ISwap$_swap_BANG_$arity$3;
} else {
return and__3626__auto__;
}
})()){
return o.cljs$core$ISwap$_swap_BANG_$arity$3(o,f,a);
} else {
var x__4282__auto__ = (((o == null))?null:o);
return (function (){var or__3638__auto__ = (cljs.core._swap_BANG_[(function (){var G__11789 = x__4282__auto__;
return goog.typeOf(G__11789);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core._swap_BANG_["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("ISwap.-swap!",o);
}
}
})().call(null,o,f,a);
}
});
var _swap_BANG___4 = (function (o,f,a,b){
if((function (){var and__3626__auto__ = o;
if(and__3626__auto__){
return o.cljs$core$ISwap$_swap_BANG_$arity$4;
} else {
return and__3626__auto__;
}
})()){
return o.cljs$core$ISwap$_swap_BANG_$arity$4(o,f,a,b);
} else {
var x__4282__auto__ = (((o == null))?null:o);
return (function (){var or__3638__auto__ = (cljs.core._swap_BANG_[(function (){var G__11791 = x__4282__auto__;
return goog.typeOf(G__11791);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core._swap_BANG_["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("ISwap.-swap!",o);
}
}
})().call(null,o,f,a,b);
}
});
var _swap_BANG___5 = (function (o,f,a,b,xs){
if((function (){var and__3626__auto__ = o;
if(and__3626__auto__){
return o.cljs$core$ISwap$_swap_BANG_$arity$5;
} else {
return and__3626__auto__;
}
})()){
return o.cljs$core$ISwap$_swap_BANG_$arity$5(o,f,a,b,xs);
} else {
var x__4282__auto__ = (((o == null))?null:o);
return (function (){var or__3638__auto__ = (cljs.core._swap_BANG_[(function (){var G__11793 = x__4282__auto__;
return goog.typeOf(G__11793);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core._swap_BANG_["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("ISwap.-swap!",o);
}
}
})().call(null,o,f,a,b,xs);
}
});
_swap_BANG_ = function(o,f,a,b,xs){
switch(arguments.length){
case 2:
return _swap_BANG___2.call(this,o,f);
case 3:
return _swap_BANG___3.call(this,o,f,a);
case 4:
return _swap_BANG___4.call(this,o,f,a,b);
case 5:
return _swap_BANG___5.call(this,o,f,a,b,xs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_swap_BANG_.cljs$core$IFn$_invoke$arity$2 = _swap_BANG___2;
_swap_BANG_.cljs$core$IFn$_invoke$arity$3 = _swap_BANG___3;
_swap_BANG_.cljs$core$IFn$_invoke$arity$4 = _swap_BANG___4;
_swap_BANG_.cljs$core$IFn$_invoke$arity$5 = _swap_BANG___5;
return _swap_BANG_;
})()
;


cljs.core.IVolatile = (function (){var obj11795 = {};
return obj11795;
})();

cljs.core._vreset_BANG_ = (function _vreset_BANG_(o,new_value){
if((function (){var and__3626__auto__ = o;
if(and__3626__auto__){
return o.cljs$core$IVolatile$_vreset_BANG_$arity$2;
} else {
return and__3626__auto__;
}
})()){
return o.cljs$core$IVolatile$_vreset_BANG_$arity$2(o,new_value);
} else {
var x__4282__auto__ = (((o == null))?null:o);
return (function (){var or__3638__auto__ = (cljs.core._vreset_BANG_[(function (){var G__11799 = x__4282__auto__;
return goog.typeOf(G__11799);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core._vreset_BANG_["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("IVolatile.-vreset!",o);
}
}
})().call(null,o,new_value);
}
});


cljs.core.IIterable = (function (){var obj11801 = {};
return obj11801;
})();

cljs.core._iterator = (function _iterator(coll){
if((function (){var and__3626__auto__ = coll;
if(and__3626__auto__){
return coll.cljs$core$IIterable$_iterator$arity$1;
} else {
return and__3626__auto__;
}
})()){
return coll.cljs$core$IIterable$_iterator$arity$1(coll);
} else {
var x__4282__auto__ = (((coll == null))?null:coll);
return (function (){var or__3638__auto__ = (cljs.core._iterator[(function (){var G__11805 = x__4282__auto__;
return goog.typeOf(G__11805);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core._iterator["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("IIterable.-iterator",coll);
}
}
})().call(null,coll);
}
});


/**
* @constructor
*/
cljs.core.StringBufferWriter = (function (sb){
this.sb = sb;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1073741824;
})
cljs.core.StringBufferWriter.prototype.cljs$core$IWriter$_write$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
return self__.sb.append(s);
});

cljs.core.StringBufferWriter.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
});

cljs.core.StringBufferWriter.cljs$lang$type = true;

cljs.core.StringBufferWriter.cljs$lang$ctorStr = "cljs.core/StringBufferWriter";

cljs.core.StringBufferWriter.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write(writer__4226__auto__,"cljs.core/StringBufferWriter");
});

cljs.core.__GT_StringBufferWriter = (function __GT_StringBufferWriter(sb){
return (new cljs.core.StringBufferWriter(sb));
});

/**
* Support so that collections can implement toString without
* loading all the printing machinery.
*/
cljs.core.pr_str_STAR_ = (function pr_str_STAR_(obj){
var sb = (new goog.string.StringBuffer());
var writer = (new cljs.core.StringBufferWriter(sb));
obj.cljs$core$IPrintWithWriter$_pr_writer$arity$3(null,writer,cljs.core.pr_opts());

writer.cljs$core$IWriter$_flush$arity$1(null);

return [cljs.core.str(sb)].join('');
});
cljs.core.int_rotate_left = (function int_rotate_left(x,n){
return ((x << n) | (x >>> (- n)));
});
if((typeof Math.imul !== 'undefined') && (!(((function (){var G__11808 = (4294967295);
var G__11809 = (5);
return (Math.imul.cljs$core$IFn$_invoke$arity$2 ? Math.imul.cljs$core$IFn$_invoke$arity$2(G__11808,G__11809) : Math.imul.call(null,G__11808,G__11809));
})() === (0))))){
cljs.core.imul = (function imul(a,b){
var G__11812 = a;
var G__11813 = b;
return (Math.imul.cljs$core$IFn$_invoke$arity$2 ? Math.imul.cljs$core$IFn$_invoke$arity$2(G__11812,G__11813) : Math.imul.call(null,G__11812,G__11813));
});
} else {
cljs.core.imul = (function imul(a,b){
var ah = ((a >>> (16)) & (65535));
var al = (a & (65535));
var bh = ((b >>> (16)) & (65535));
var bl = (b & (65535));
return (((al * bl) + ((((ah * bl) + (al * bh)) << (16)) >>> (0))) | (0));
});
}
cljs.core.m3_seed = (0);
cljs.core.m3_C1 = (3432918353);
cljs.core.m3_C2 = (461845907);
cljs.core.m3_mix_K1 = (function m3_mix_K1(k1){
return cljs.core.imul(cljs.core.int_rotate_left(cljs.core.imul(k1,cljs.core.m3_C1),(15)),cljs.core.m3_C2);
});
cljs.core.m3_mix_H1 = (function m3_mix_H1(h1,k1){
return (cljs.core.imul(cljs.core.int_rotate_left((h1 ^ k1),(13)),(5)) + (3864292196));
});
cljs.core.m3_fmix = (function m3_fmix(h1,len){
var h1__$1 = h1;
var h1__$2 = (h1__$1 ^ len);
var h1__$3 = (h1__$2 ^ (h1__$2 >>> (16)));
var h1__$4 = cljs.core.imul(h1__$3,(2246822507));
var h1__$5 = (h1__$4 ^ (h1__$4 >>> (13)));
var h1__$6 = cljs.core.imul(h1__$5,(3266489909));
var h1__$7 = (h1__$6 ^ (h1__$6 >>> (16)));
return h1__$7;
});
cljs.core.m3_hash_int = (function m3_hash_int(in$){
if((in$ === (0))){
return in$;
} else {
var k1 = cljs.core.m3_mix_K1(in$);
var h1 = cljs.core.m3_mix_H1(cljs.core.m3_seed,k1);
return cljs.core.m3_fmix(h1,(4));
}
});
cljs.core.m3_hash_unencoded_chars = (function m3_hash_unencoded_chars(in$){
var h1 = (function (){var i = (1);
var h1 = cljs.core.m3_seed;
while(true){
if((i < in$.length)){
var G__11814 = (i + (2));
var G__11815 = cljs.core.m3_mix_H1(h1,cljs.core.m3_mix_K1((in$.charCodeAt((i - (1))) | (in$.charCodeAt(i) << (16)))));
i = G__11814;
h1 = G__11815;
continue;
} else {
return h1;
}
break;
}
})();
var h1__$1 = ((((in$.length & (1)) === (1)))?(h1 ^ cljs.core.m3_mix_K1(in$.charCodeAt((in$.length - (1))))):h1);
return cljs.core.m3_fmix(h1__$1,cljs.core.imul((2),in$.length));
});



cljs.core.string_hash_cache = (function (){var obj11817 = {};
return obj11817;
})();
cljs.core.string_hash_cache_count = (0);
cljs.core.hash_string_STAR_ = (function hash_string_STAR_(s){
if(!((s == null))){
var len = s.length;
if((len > (0))){
var i = (0);
var hash = (0);
while(true){
if((i < len)){
var G__11818 = (i + (1));
var G__11819 = (cljs.core.imul((31),hash) + s.charCodeAt(i));
i = G__11818;
hash = G__11819;
continue;
} else {
return hash;
}
break;
}
} else {
return (0);
}
} else {
return (0);
}
});
cljs.core.add_to_string_hash_cache = (function add_to_string_hash_cache(k){
var h = cljs.core.hash_string_STAR_(k);
(cljs.core.string_hash_cache[k] = h);

cljs.core.string_hash_cache_count = (cljs.core.string_hash_cache_count + (1));

return h;
});
cljs.core.hash_string = (function hash_string(k){
if((cljs.core.string_hash_cache_count > (255))){
cljs.core.string_hash_cache = (function (){var obj11823 = {};
return obj11823;
})();

cljs.core.string_hash_cache_count = (0);
} else {
}

var h = (cljs.core.string_hash_cache[k]);
if(typeof h === 'number'){
return h;
} else {
return cljs.core.add_to_string_hash_cache(k);
}
});
cljs.core.hash = (function hash(o){
if((function (){var G__11826 = o;
if(G__11826){
var bit__4312__auto__ = (G__11826.cljs$lang$protocol_mask$partition0$ & (4194304));
if((bit__4312__auto__) || (G__11826.cljs$core$IHash$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return o.cljs$core$IHash$_hash$arity$1(null);
} else {
if(typeof o === 'number'){
return ((function (){var G__11827 = o;
return (Math.floor.cljs$core$IFn$_invoke$arity$1 ? Math.floor.cljs$core$IFn$_invoke$arity$1(G__11827) : Math.floor.call(null,G__11827));
})() % (2147483647));
} else {
if(o === true){
return (1);
} else {
if(o === false){
return (0);
} else {
if(typeof o === 'string'){
return cljs.core.m3_hash_int(cljs.core.hash_string(o));
} else {
if((o instanceof Date)){
return o.valueOf();
} else {
if((o == null)){
return (0);
} else {
return cljs.core._hash(o);

}
}
}
}
}
}
}
});
cljs.core.hash_combine = (function hash_combine(seed,hash){
return (seed ^ (((hash + (2654435769)) + (seed << (6))) + (seed >> (2))));
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){
return (o instanceof t);
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
return (x instanceof cljs.core.Symbol);
});
cljs.core.hash_symbol = (function hash_symbol(sym){
return cljs.core.hash_combine(cljs.core.m3_hash_unencoded_chars(sym.name),cljs.core.hash_string(sym.ns));
});
cljs.core.compare_symbols = (function compare_symbols(a,b){
if((a.str === b.str)){
return (0);
} else {
if(cljs.core.truth_((function (){var and__3626__auto__ = cljs.core.not(a.ns);
if(and__3626__auto__){
return b.ns;
} else {
return and__3626__auto__;
}
})())){
return (-1);
} else {
if(cljs.core.truth_(a.ns)){
if(cljs.core.not(b.ns)){
return (1);
} else {
var nsc = (function (){var G__11834 = a.ns;
var G__11835 = b.ns;
return goog.array.defaultCompare(G__11834,G__11835);
})();
if(((0) === nsc)){
var G__11836 = a.name;
var G__11837 = b.name;
return goog.array.defaultCompare(G__11836,G__11837);
} else {
return nsc;
}
}
} else {
var G__11838 = a.name;
var G__11839 = b.name;
return goog.array.defaultCompare(G__11838,G__11839);

}
}
}
});

/**
* @constructor
*/
cljs.core.Symbol = (function (ns,name,str,_hash,_meta){
this.ns = ns;
this.name = name;
this.str = str;
this._hash = _hash;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition0$ = 2154168321;
this.cljs$lang$protocol_mask$partition1$ = 4096;
})
cljs.core.Symbol.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (o,writer,_){
var self__ = this;
var o__$1 = this;
return cljs.core._write(writer,self__.str);
});

cljs.core.Symbol.prototype.cljs$core$INamed$_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.name;
});

cljs.core.Symbol.prototype.cljs$core$INamed$_namespace$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ns;
});

cljs.core.Symbol.prototype.cljs$core$IHash$_hash$arity$1 = (function (sym){
var self__ = this;
var sym__$1 = this;
var h__4059__auto__ = self__._hash;
if(!((h__4059__auto__ == null))){
return h__4059__auto__;
} else {
var h__4059__auto____$1 = cljs.core.hash_symbol(sym__$1);
self__._hash = h__4059__auto____$1;

return h__4059__auto____$1;
}
});

cljs.core.Symbol.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new cljs.core.Symbol(self__.ns,self__.name,self__.str,self__._hash,new_meta));
});

cljs.core.Symbol.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__._meta;
});

cljs.core.Symbol.prototype.call = (function() {
var G__11841 = null;
var G__11841__2 = (function (self__,coll){
var self__ = this;
var self____$1 = this;
var sym = self____$1;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll,sym,null);
});
var G__11841__3 = (function (self__,coll,not_found){
var self__ = this;
var self____$1 = this;
var sym = self____$1;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll,sym,not_found);
});
G__11841 = function(self__,coll,not_found){
switch(arguments.length){
case 2:
return G__11841__2.call(this,self__,coll);
case 3:
return G__11841__3.call(this,self__,coll,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__11841.cljs$core$IFn$_invoke$arity$2 = G__11841__2;
G__11841.cljs$core$IFn$_invoke$arity$3 = G__11841__3;
return G__11841;
})()
;

cljs.core.Symbol.prototype.apply = (function (self__,args11840){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args11840)));
});

cljs.core.Symbol.prototype.cljs$core$IFn$_invoke$arity$1 = (function (coll){
var self__ = this;
var sym = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll,sym,null);
});

cljs.core.Symbol.prototype.cljs$core$IFn$_invoke$arity$2 = (function (coll,not_found){
var self__ = this;
var sym = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll,sym,not_found);
});

cljs.core.Symbol.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if((other instanceof cljs.core.Symbol)){
return (self__.str === other.str);
} else {
return false;
}
});

cljs.core.Symbol.prototype.toString = (function (){
var self__ = this;
var _ = this;
return self__.str;
});

cljs.core.Symbol.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.Symbol.cljs$lang$type = true;

cljs.core.Symbol.cljs$lang$ctorStr = "cljs.core/Symbol";

cljs.core.Symbol.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write(writer__4226__auto__,"cljs.core/Symbol");
});

cljs.core.__GT_Symbol = (function __GT_Symbol(ns,name,str,_hash,_meta){
return (new cljs.core.Symbol(ns,name,str,_hash,_meta));
});

cljs.core.symbol = (function() {
var symbol = null;
var symbol__1 = (function (name){
if((name instanceof cljs.core.Symbol)){
return name;
} else {
return symbol.cljs$core$IFn$_invoke$arity$2(null,name);
}
});
var symbol__2 = (function (ns,name){
var sym_str = ((!((ns == null)))?[cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(name)].join(''):name);
return (new cljs.core.Symbol(ns,name,sym_str,null,null));
});
symbol = function(ns,name){
switch(arguments.length){
case 1:
return symbol__1.call(this,ns);
case 2:
return symbol__2.call(this,ns,name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
symbol.cljs$core$IFn$_invoke$arity$1 = symbol__1;
symbol.cljs$core$IFn$_invoke$arity$2 = symbol__2;
return symbol;
})()
;

/**
* @constructor
*/
cljs.core.Var = (function (val,sym,_meta){
this.val = val;
this.sym = sym;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 163840;
})
cljs.core.Var.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__._meta;
});

cljs.core.Var.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.val;
});

cljs.core.Var.cljs$lang$type = true;

cljs.core.Var.cljs$lang$ctorStr = "cljs.core/Var";

cljs.core.Var.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write(writer__4226__auto__,"cljs.core/Var");
});

cljs.core.__GT_Var = (function __GT_Var(val,sym,_meta){
return (new cljs.core.Var(val,sym,_meta));
});



cljs.core.iterable_QMARK_ = (function iterable_QMARK_(x){
var G__11845 = x;
if(G__11845){
var bit__4319__auto__ = null;
if(cljs.core.truth_((function (){var or__3638__auto__ = bit__4319__auto__;
if(cljs.core.truth_(or__3638__auto__)){
return or__3638__auto__;
} else {
return G__11845.cljs$core$IIterable$;
}
})())){
return true;
} else {
if((!G__11845.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IIterable,G__11845);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IIterable,G__11845);
}
});
cljs.core.clone = (function clone(value){
return cljs.core._clone(value);
});
cljs.core.cloneable_QMARK_ = (function cloneable_QMARK_(value){
var G__11847 = value;
if(G__11847){
var bit__4319__auto__ = (G__11847.cljs$lang$protocol_mask$partition1$ & (8192));
if((bit__4319__auto__) || (G__11847.cljs$core$ICloneable$)){
return true;
} else {
if((!G__11847.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ICloneable,G__11847);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ICloneable,G__11847);
}
});
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){
if((coll == null)){
return null;
} else {
if((function (){var G__11849 = coll;
if(G__11849){
var bit__4312__auto__ = (G__11849.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4312__auto__) || (G__11849.cljs$core$ISeqable$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return coll.cljs$core$ISeqable$_seq$arity$1(null);
} else {
if(coll instanceof Array){
if((coll.length === (0))){
return null;
} else {
return (new cljs.core.IndexedSeq(coll,(0)));
}
} else {
if(typeof coll === 'string'){
if((coll.length === (0))){
return null;
} else {
return (new cljs.core.IndexedSeq(coll,(0)));
}
} else {
if(cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,coll)){
return cljs.core._seq(coll);
} else {
throw (new Error([cljs.core.str(coll),cljs.core.str(" is not ISeqable")].join('')));

}
}
}
}
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){
if((coll == null)){
return null;
} else {
if((function (){var G__11851 = coll;
if(G__11851){
var bit__4312__auto__ = (G__11851.cljs$lang$protocol_mask$partition0$ & (64));
if((bit__4312__auto__) || (G__11851.cljs$core$ISeq$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return coll.cljs$core$ISeq$_first$arity$1(null);
} else {
var s = cljs.core.seq(coll);
if((s == null)){
return null;
} else {
return cljs.core._first(s);
}
}
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){
if(!((coll == null))){
if((function (){var G__11853 = coll;
if(G__11853){
var bit__4312__auto__ = (G__11853.cljs$lang$protocol_mask$partition0$ & (64));
if((bit__4312__auto__) || (G__11853.cljs$core$ISeq$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return coll.cljs$core$ISeq$_rest$arity$1(null);
} else {
var s = cljs.core.seq(coll);
if(s){
return cljs.core._rest(s);
} else {
return cljs.core.List.EMPTY;
}
}
} else {
return cljs.core.List.EMPTY;
}
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){
if((coll == null)){
return null;
} else {
if((function (){var G__11855 = coll;
if(G__11855){
var bit__4312__auto__ = (G__11855.cljs$lang$protocol_mask$partition0$ & (128));
if((bit__4312__auto__) || (G__11855.cljs$core$INext$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return coll.cljs$core$INext$_next$arity$1(null);
} else {
return cljs.core.seq(cljs.core.rest(coll));
}
}
});
/**
* Equality. Returns true if x equals y, false if not. Compares
* numbers and collections in a type-independent manner.  Clojure's immutable data
* structures define -equiv (and thus =) as a value, not an identity,
* comparison.
* @param {...*} var_args
*/
cljs.core._EQ_ = (function() {
var _EQ_ = null;
var _EQ___1 = (function (x){
return true;
});
var _EQ___2 = (function (x,y){
if((x == null)){
return (y == null);
} else {
return ((x === y)) || (cljs.core._equiv(x,y));
}
});
var _EQ___3 = (function() { 
var G__11860__delegate = function (x,y,more){
while(true){
if(_EQ_.cljs$core$IFn$_invoke$arity$2(x,y)){
if(cljs.core.next(more)){
var G__11861 = y;
var G__11862 = cljs.core.first(more);
var G__11863 = cljs.core.next(more);
x = G__11861;
y = G__11862;
more = G__11863;
continue;
} else {
return _EQ_.cljs$core$IFn$_invoke$arity$2(y,cljs.core.first(more));
}
} else {
return false;
}
break;
}
};
var G__11860 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11860__delegate.call(this,x,y,more);};
G__11860.cljs$lang$maxFixedArity = 2;
G__11860.cljs$lang$applyTo = (function (arglist__11864){
var x = cljs.core.first(arglist__11864);
arglist__11864 = cljs.core.next(arglist__11864);
var y = cljs.core.first(arglist__11864);
var more = cljs.core.rest(arglist__11864);
return G__11860__delegate(x,y,more);
});
G__11860.cljs$core$IFn$_invoke$arity$variadic = G__11860__delegate;
return G__11860;
})()
;
_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ___1.call(this,x);
case 2:
return _EQ___2.call(this,x,y);
default:
return _EQ___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_EQ_.cljs$lang$maxFixedArity = 2;
_EQ_.cljs$lang$applyTo = _EQ___3.cljs$lang$applyTo;
_EQ_.cljs$core$IFn$_invoke$arity$1 = _EQ___1;
_EQ_.cljs$core$IFn$_invoke$arity$2 = _EQ___2;
_EQ_.cljs$core$IFn$_invoke$arity$variadic = _EQ___3.cljs$core$IFn$_invoke$arity$variadic;
return _EQ_;
})()
;

/**
* @constructor
*/
cljs.core.ES6Iterator = (function (s){
this.s = s;
})
cljs.core.ES6Iterator.prototype.next = (function (){
var self__ = this;
var _ = this;
if(!((self__.s == null))){
var x = cljs.core.first(self__.s);
self__.s = cljs.core.next(self__.s);

return {"done": false, "value": x};
} else {
return {"done": true, "value": null};
}
});

cljs.core.ES6Iterator.cljs$lang$type = true;

cljs.core.ES6Iterator.cljs$lang$ctorStr = "cljs.core/ES6Iterator";

cljs.core.ES6Iterator.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write(writer__4226__auto__,"cljs.core/ES6Iterator");
});

cljs.core.__GT_ES6Iterator = (function __GT_ES6Iterator(s){
return (new cljs.core.ES6Iterator(s));
});

cljs.core.es6_iterator = (function es6_iterator(coll){
return (new cljs.core.ES6Iterator(cljs.core.seq(coll)));
});

/**
* @constructor
*/
cljs.core.ES6IteratorSeq = (function (value,iter,_rest){
this.value = value;
this.iter = iter;
this._rest = _rest;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 8388672;
})
cljs.core.ES6IteratorSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

cljs.core.ES6IteratorSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if((self__._rest == null)){
self__._rest = (function (){var G__11865 = self__.iter;
return (cljs.core.es6_iterator_seq.cljs$core$IFn$_invoke$arity$1 ? cljs.core.es6_iterator_seq.cljs$core$IFn$_invoke$arity$1(G__11865) : cljs.core.es6_iterator_seq.call(null,G__11865));
})();
} else {
}

return self__._rest;
});

cljs.core.ES6IteratorSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
});

cljs.core.ES6IteratorSeq.cljs$lang$type = true;

cljs.core.ES6IteratorSeq.cljs$lang$ctorStr = "cljs.core/ES6IteratorSeq";

cljs.core.ES6IteratorSeq.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write(writer__4226__auto__,"cljs.core/ES6IteratorSeq");
});

cljs.core.__GT_ES6IteratorSeq = (function __GT_ES6IteratorSeq(value,iter,_rest){
return (new cljs.core.ES6IteratorSeq(value,iter,_rest));
});

cljs.core.es6_iterator_seq = (function es6_iterator_seq(iter){
var v = iter.next();
if(cljs.core.truth_(v.done)){
return cljs.core.List.EMPTY;
} else {
return (new cljs.core.ES6IteratorSeq(v.value,iter,null));
}
});
/**
* Mix final collection hash for ordered or unordered collections.
* hash-basis is the combined collection hash, count is the number
* of elements included in the basis. Note this is the hash code
* consistent with =, different from .hashCode.
* See http://clojure.org/data_structures#hash for full algorithms.
*/
cljs.core.mix_collection_hash = (function mix_collection_hash(hash_basis,count){
var h1 = cljs.core.m3_seed;
var k1 = cljs.core.m3_mix_K1(hash_basis);
var h1__$1 = cljs.core.m3_mix_H1(h1,k1);
return cljs.core.m3_fmix(h1__$1,count);
});
/**
* Returns the hash code, consistent with =, for an external ordered
* collection implementing Iterable.
* See http://clojure.org/data_structures#hash for full algorithms.
*/
cljs.core.hash_ordered_coll = (function hash_ordered_coll(coll){
var n = (0);
var hash_code = (1);
var coll__$1 = cljs.core.seq(coll);
while(true){
if(!((coll__$1 == null))){
var G__11866 = (n + (1));
var G__11867 = ((cljs.core.imul((31),hash_code) + cljs.core.hash(cljs.core.first(coll__$1))) | (0));
var G__11868 = cljs.core.next(coll__$1);
n = G__11866;
hash_code = G__11867;
coll__$1 = G__11868;
continue;
} else {
return cljs.core.mix_collection_hash(hash_code,n);
}
break;
}
});
/**
* Returns the hash code, consistent with =, for an external unordered
* collection implementing Iterable. For maps, the iterator should
* return map entries whose hash is computed as
* (hash-ordered-coll [k v]).
* See http://clojure.org/data_structures#hash for full algorithms.
*/
cljs.core.hash_unordered_coll = (function hash_unordered_coll(coll){
var n = (0);
var hash_code = (0);
var coll__$1 = cljs.core.seq(coll);
while(true){
if(!((coll__$1 == null))){
var G__11869 = (n + (1));
var G__11870 = ((hash_code + cljs.core.hash(cljs.core.first(coll__$1))) | (0));
var G__11871 = cljs.core.next(coll__$1);
n = G__11869;
hash_code = G__11870;
coll__$1 = G__11871;
continue;
} else {
return cljs.core.mix_collection_hash(hash_code,n);
}
break;
}
});


(cljs.core.ICounted["null"] = true);

(cljs.core._count["null"] = (function (_){
return (0);
}));
Date.prototype.cljs$core$IEquiv$ = true;

Date.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var o__$1 = this;
return ((other instanceof Date)) && ((o__$1.toString() === other.toString()));
});
(cljs.core.IEquiv["number"] = true);

(cljs.core._equiv["number"] = (function (x,o){
return (x === o);
}));
(cljs.core.IMeta["function"] = true);

(cljs.core._meta["function"] = (function (_){
return null;
}));

(cljs.core.Fn["function"] = true);
(cljs.core.IHash["_"] = true);

(cljs.core._hash["_"] = (function (o){
var G__11872 = o;
return goog.getUid(G__11872);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){
return (x + (1));
});

/**
* @constructor
*/
cljs.core.Reduced = (function (val){
this.val = val;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32768;
})
cljs.core.Reduced.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){
var self__ = this;
var o__$1 = this;
return self__.val;
});

cljs.core.Reduced.cljs$lang$type = true;

cljs.core.Reduced.cljs$lang$ctorStr = "cljs.core/Reduced";

cljs.core.Reduced.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write(writer__4226__auto__,"cljs.core/Reduced");
});

cljs.core.__GT_Reduced = (function __GT_Reduced(val){
return (new cljs.core.Reduced(val));
});

/**
* Wraps x in a way such that a reduce will terminate with the value x
*/
cljs.core.reduced = (function reduced(x){
return (new cljs.core.Reduced(x));
});
/**
* Returns true if x is the result of a call to reduced
*/
cljs.core.reduced_QMARK_ = (function reduced_QMARK_(r){
return (r instanceof cljs.core.Reduced);
});
/**
* If x is already reduced?, returns it, else returns (reduced x)
*/
cljs.core.ensure_reduced = (function ensure_reduced(x){
if(cljs.core.reduced_QMARK_(x)){
return x;
} else {
return cljs.core.reduced(x);
}
});
/**
* If x is reduced?, returns (deref x), else returns x
*/
cljs.core.unreduced = (function unreduced(x){
if(cljs.core.reduced_QMARK_(x)){
var G__11874 = x;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11874) : cljs.core.deref.call(null,G__11874));
} else {
return x;
}
});
cljs.core.deref = (function deref(o){
return cljs.core._deref(o);
});
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__2 = (function (cicoll,f){
var cnt = cljs.core._count(cicoll);
if((cnt === (0))){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
var val = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(cicoll,(0));
var n = (1);
while(true){
if((n < cnt)){
var nval = (function (){var G__11881 = val;
var G__11882 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(cicoll,n);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__11881,G__11882) : f.call(null,G__11881,G__11882));
})();
if(cljs.core.reduced_QMARK_(nval)){
return cljs.core.deref(nval);
} else {
var G__11887 = nval;
var G__11888 = (n + (1));
val = G__11887;
n = G__11888;
continue;
}
} else {
return val;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){
var cnt = cljs.core._count(cicoll);
var val__$1 = val;
var n = (0);
while(true){
if((n < cnt)){
var nval = (function (){var G__11883 = val__$1;
var G__11884 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(cicoll,n);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__11883,G__11884) : f.call(null,G__11883,G__11884));
})();
if(cljs.core.reduced_QMARK_(nval)){
return cljs.core.deref(nval);
} else {
var G__11889 = nval;
var G__11890 = (n + (1));
val__$1 = G__11889;
n = G__11890;
continue;
}
} else {
return val__$1;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){
var cnt = cljs.core._count(cicoll);
var val__$1 = val;
var n = idx;
while(true){
if((n < cnt)){
var nval = (function (){var G__11885 = val__$1;
var G__11886 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(cicoll,n);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__11885,G__11886) : f.call(null,G__11885,G__11886));
})();
if(cljs.core.reduced_QMARK_(nval)){
return cljs.core.deref(nval);
} else {
var G__11891 = nval;
var G__11892 = (n + (1));
val__$1 = G__11891;
n = G__11892;
continue;
}
} else {
return val__$1;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case 2:
return ci_reduce__2.call(this,cicoll,f);
case 3:
return ci_reduce__3.call(this,cicoll,f,val);
case 4:
return ci_reduce__4.call(this,cicoll,f,val,idx);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ci_reduce.cljs$core$IFn$_invoke$arity$2 = ci_reduce__2;
ci_reduce.cljs$core$IFn$_invoke$arity$3 = ci_reduce__3;
ci_reduce.cljs$core$IFn$_invoke$arity$4 = ci_reduce__4;
return ci_reduce;
})()
;
cljs.core.array_reduce = (function() {
var array_reduce = null;
var array_reduce__2 = (function (arr,f){
var cnt = arr.length;
if((arr.length === (0))){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
var val = (arr[(0)]);
var n = (1);
while(true){
if((n < cnt)){
var nval = (function (){var G__11899 = val;
var G__11900 = (arr[n]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__11899,G__11900) : f.call(null,G__11899,G__11900));
})();
if(cljs.core.reduced_QMARK_(nval)){
return cljs.core.deref(nval);
} else {
var G__11905 = nval;
var G__11906 = (n + (1));
val = G__11905;
n = G__11906;
continue;
}
} else {
return val;
}
break;
}
}
});
var array_reduce__3 = (function (arr,f,val){
var cnt = arr.length;
var val__$1 = val;
var n = (0);
while(true){
if((n < cnt)){
var nval = (function (){var G__11901 = val__$1;
var G__11902 = (arr[n]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__11901,G__11902) : f.call(null,G__11901,G__11902));
})();
if(cljs.core.reduced_QMARK_(nval)){
return cljs.core.deref(nval);
} else {
var G__11907 = nval;
var G__11908 = (n + (1));
val__$1 = G__11907;
n = G__11908;
continue;
}
} else {
return val__$1;
}
break;
}
});
var array_reduce__4 = (function (arr,f,val,idx){
var cnt = arr.length;
var val__$1 = val;
var n = idx;
while(true){
if((n < cnt)){
var nval = (function (){var G__11903 = val__$1;
var G__11904 = (arr[n]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__11903,G__11904) : f.call(null,G__11903,G__11904));
})();
if(cljs.core.reduced_QMARK_(nval)){
return cljs.core.deref(nval);
} else {
var G__11909 = nval;
var G__11910 = (n + (1));
val__$1 = G__11909;
n = G__11910;
continue;
}
} else {
return val__$1;
}
break;
}
});
array_reduce = function(arr,f,val,idx){
switch(arguments.length){
case 2:
return array_reduce__2.call(this,arr,f);
case 3:
return array_reduce__3.call(this,arr,f,val);
case 4:
return array_reduce__4.call(this,arr,f,val,idx);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
array_reduce.cljs$core$IFn$_invoke$arity$2 = array_reduce__2;
array_reduce.cljs$core$IFn$_invoke$arity$3 = array_reduce__3;
array_reduce.cljs$core$IFn$_invoke$arity$4 = array_reduce__4;
return array_reduce;
})()
;



/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var G__11912 = x;
if(G__11912){
var bit__4319__auto__ = (G__11912.cljs$lang$protocol_mask$partition0$ & (2));
if((bit__4319__auto__) || (G__11912.cljs$core$ICounted$)){
return true;
} else {
if((!G__11912.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ICounted,G__11912);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ICounted,G__11912);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){
var G__11914 = x;
if(G__11914){
var bit__4319__auto__ = (G__11914.cljs$lang$protocol_mask$partition0$ & (16));
if((bit__4319__auto__) || (G__11914.cljs$core$IIndexed$)){
return true;
} else {
if((!G__11914.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IIndexed,G__11914);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IIndexed,G__11914);
}
});

/**
* @constructor
*/
cljs.core.IndexedSeqIterator = (function (arr,i){
this.arr = arr;
this.i = i;
})
cljs.core.IndexedSeqIterator.prototype.hasNext = (function (){
var self__ = this;
var _ = this;
return (self__.i < self__.arr.length);
});

cljs.core.IndexedSeqIterator.prototype.next = (function (){
var self__ = this;
var _ = this;
var ret = (self__.arr[self__.i]);
self__.i = (self__.i + (1));

return ret;
});

cljs.core.IndexedSeqIterator.cljs$lang$type = true;

cljs.core.IndexedSeqIterator.cljs$lang$ctorStr = "cljs.core/IndexedSeqIterator";

cljs.core.IndexedSeqIterator.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write(writer__4226__auto__,"cljs.core/IndexedSeqIterator");
});

cljs.core.__GT_IndexedSeqIterator = (function __GT_IndexedSeqIterator(arr,i){
return (new cljs.core.IndexedSeqIterator(arr,i));
});


/**
* @constructor
*/
cljs.core.IndexedSeq = (function (arr,i){
this.arr = arr;
this.i = i;
this.cljs$lang$protocol_mask$partition0$ = 166199550;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.IndexedSeq.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.IndexedSeq.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var self__ = this;
var coll__$1 = this;
var i__$1 = (n + self__.i);
if((i__$1 < self__.arr.length)){
return (self__.arr[i__$1]);
} else {
return null;
}
});

cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var self__ = this;
var coll__$1 = this;
var i__$1 = (n + self__.i);
if((i__$1 < self__.arr.length)){
return (self__.arr[i__$1]);
} else {
return not_found;
}
});

cljs.core.IndexedSeq.prototype.cljs$core$IIterable$ = true;

cljs.core.IndexedSeq.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.IndexedSeqIterator(self__.arr,self__.i));
});

cljs.core.IndexedSeq.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.IndexedSeq(self__.arr,self__.i));
});

cljs.core.IndexedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(((self__.i + (1)) < self__.arr.length)){
return (new cljs.core.IndexedSeq(self__.arr,(self__.i + (1))));
} else {
return null;
}
});

cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.arr.length - self__.i);
});

cljs.core.IndexedSeq.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var c = cljs.core._count(coll__$1);
if((c > (0))){
return (new cljs.core.RSeq(coll__$1,(c - (1)),null));
} else {
return null;
}
});

cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.hash_ordered_coll(coll__$1);
});

cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
var G__11915 = coll__$1;
var G__11916 = other;
return (cljs.core.equiv_sequential.cljs$core$IFn$_invoke$arity$2 ? cljs.core.equiv_sequential.cljs$core$IFn$_invoke$arity$2(G__11915,G__11916) : cljs.core.equiv_sequential.call(null,G__11915,G__11916));
});

cljs.core.IndexedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.List.EMPTY;
});

cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$4(self__.arr,f,(self__.arr[self__.i]),(self__.i + (1)));
});

cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$4(self__.arr,f,start,self__.i);
});

cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.arr[self__.i]);
});

cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(((self__.i + (1)) < self__.arr.length)){
return (new cljs.core.IndexedSeq(self__.arr,(self__.i + (1))));
} else {
return cljs.core.List.EMPTY;
}
});

cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
});

cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
var G__11917 = o;
var G__11918 = coll__$1;
return (cljs.core.cons.cljs$core$IFn$_invoke$arity$2 ? cljs.core.cons.cljs$core$IFn$_invoke$arity$2(G__11917,G__11918) : cljs.core.cons.call(null,G__11917,G__11918));
});

cljs.core.IndexedSeq.cljs$lang$type = true;

cljs.core.IndexedSeq.cljs$lang$ctorStr = "cljs.core/IndexedSeq";

cljs.core.IndexedSeq.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write(writer__4226__auto__,"cljs.core/IndexedSeq");
});

cljs.core.__GT_IndexedSeq = (function __GT_IndexedSeq(arr,i){
return (new cljs.core.IndexedSeq(arr,i));
});

(cljs.core.IndexedSeq.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4616__auto__ = this;
return cljs.core.es6_iterator(this__4616__auto__);
}));
cljs.core.prim_seq = (function() {
var prim_seq = null;
var prim_seq__1 = (function (prim){
return prim_seq.cljs$core$IFn$_invoke$arity$2(prim,(0));
});
var prim_seq__2 = (function (prim,i){
if((i < prim.length)){
return (new cljs.core.IndexedSeq(prim,i));
} else {
return null;
}
});
prim_seq = function(prim,i){
switch(arguments.length){
case 1:
return prim_seq__1.call(this,prim);
case 2:
return prim_seq__2.call(this,prim,i);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prim_seq.cljs$core$IFn$_invoke$arity$1 = prim_seq__1;
prim_seq.cljs$core$IFn$_invoke$arity$2 = prim_seq__2;
return prim_seq;
})()
;
cljs.core.array_seq = (function() {
var array_seq = null;
var array_seq__1 = (function (array){
return cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(array,(0));
});
var array_seq__2 = (function (array,i){
return cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(array,i);
});
array_seq = function(array,i){
switch(arguments.length){
case 1:
return array_seq__1.call(this,array);
case 2:
return array_seq__2.call(this,array,i);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
array_seq.cljs$core$IFn$_invoke$arity$1 = array_seq__1;
array_seq.cljs$core$IFn$_invoke$arity$2 = array_seq__2;
return array_seq;
})()
;


/**
* @constructor
*/
cljs.core.RSeq = (function (ci,i,meta){
this.ci = ci;
this.i = i;
this.meta = meta;
this.cljs$lang$protocol_mask$partition0$ = 32374990;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.RSeq.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.RSeq.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.RSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.RSeq.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.RSeq(self__.ci,self__.i,self__.meta));
});

cljs.core.RSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.i > (0))){
return (new cljs.core.RSeq(self__.ci,(self__.i - (1)),null));
} else {
return null;
}
});

cljs.core.RSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (self__.i + (1));
});

cljs.core.RSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.hash_ordered_coll(coll__$1);
});

cljs.core.RSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
var G__11921 = coll__$1;
var G__11922 = other;
return (cljs.core.equiv_sequential.cljs$core$IFn$_invoke$arity$2 ? cljs.core.equiv_sequential.cljs$core$IFn$_invoke$arity$2(G__11921,G__11922) : cljs.core.equiv_sequential.call(null,G__11921,G__11922));
});

cljs.core.RSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var G__11923 = cljs.core.List.EMPTY;
var G__11924 = self__.meta;
return (cljs.core.with_meta.cljs$core$IFn$_invoke$arity$2 ? cljs.core.with_meta.cljs$core$IFn$_invoke$arity$2(G__11923,G__11924) : cljs.core.with_meta.call(null,G__11923,G__11924));
});

cljs.core.RSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (col,f){
var self__ = this;
var col__$1 = this;
var G__11925 = f;
var G__11926 = col__$1;
return (cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2 ? cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(G__11925,G__11926) : cljs.core.seq_reduce.call(null,G__11925,G__11926));
});

cljs.core.RSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (col,f,start){
var self__ = this;
var col__$1 = this;
var G__11927 = f;
var G__11928 = start;
var G__11929 = col__$1;
return (cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3 ? cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(G__11927,G__11928,G__11929) : cljs.core.seq_reduce.call(null,G__11927,G__11928,G__11929));
});

cljs.core.RSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(self__.ci,self__.i);
});

cljs.core.RSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.i > (0))){
return (new cljs.core.RSeq(self__.ci,(self__.i - (1)),null));
} else {
return cljs.core.List.EMPTY;
}
});

cljs.core.RSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return coll__$1;
});

cljs.core.RSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.RSeq(self__.ci,self__.i,new_meta));
});

cljs.core.RSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
var G__11930 = o;
var G__11931 = coll__$1;
return (cljs.core.cons.cljs$core$IFn$_invoke$arity$2 ? cljs.core.cons.cljs$core$IFn$_invoke$arity$2(G__11930,G__11931) : cljs.core.cons.call(null,G__11930,G__11931));
});

cljs.core.RSeq.cljs$lang$type = true;

cljs.core.RSeq.cljs$lang$ctorStr = "cljs.core/RSeq";

cljs.core.RSeq.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write(writer__4226__auto__,"cljs.core/RSeq");
});

cljs.core.__GT_RSeq = (function __GT_RSeq(ci,i,meta){
return (new cljs.core.RSeq(ci,i,meta));
});

(cljs.core.RSeq.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4616__auto__ = this;
return cljs.core.es6_iterator(this__4616__auto__);
}));
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){
return cljs.core.first(cljs.core.next(coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){
return cljs.core.first(cljs.core.first(coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){
return cljs.core.next(cljs.core.first(coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){
return cljs.core.first(cljs.core.next(coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){
return cljs.core.next(cljs.core.next(coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){
while(true){
var sn = cljs.core.next(s);
if(!((sn == null))){
var G__11932 = sn;
s = G__11932;
continue;
} else {
return cljs.core.first(s);
}
break;
}
});
(cljs.core.IEquiv["_"] = true);

(cljs.core._equiv["_"] = (function (x,o){
return (x === o);
}));
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__0 = (function (){
return cljs.core.PersistentVector.EMPTY;
});
var conj__1 = (function (coll){
return coll;
});
var conj__2 = (function (coll,x){
if(!((coll == null))){
return cljs.core._conj(coll,x);
} else {
return cljs.core._conj(cljs.core.List.EMPTY,x);
}
});
var conj__3 = (function() { 
var G__11937__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs)){
var G__11938 = conj.cljs$core$IFn$_invoke$arity$2(coll,x);
var G__11939 = cljs.core.first(xs);
var G__11940 = cljs.core.next(xs);
coll = G__11938;
x = G__11939;
xs = G__11940;
continue;
} else {
return conj.cljs$core$IFn$_invoke$arity$2(coll,x);
}
break;
}
};
var G__11937 = function (coll,x,var_args){
var xs = null;
if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11937__delegate.call(this,coll,x,xs);};
G__11937.cljs$lang$maxFixedArity = 2;
G__11937.cljs$lang$applyTo = (function (arglist__11941){
var coll = cljs.core.first(arglist__11941);
arglist__11941 = cljs.core.next(arglist__11941);
var x = cljs.core.first(arglist__11941);
var xs = cljs.core.rest(arglist__11941);
return G__11937__delegate(coll,x,xs);
});
G__11937.cljs$core$IFn$_invoke$arity$variadic = G__11937__delegate;
return G__11937;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 0:
return conj__0.call(this);
case 1:
return conj__1.call(this,coll);
case 2:
return conj__2.call(this,coll,x);
default:
return conj__3.cljs$core$IFn$_invoke$arity$variadic(coll,x, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__3.cljs$lang$applyTo;
conj.cljs$core$IFn$_invoke$arity$0 = conj__0;
conj.cljs$core$IFn$_invoke$arity$1 = conj__1;
conj.cljs$core$IFn$_invoke$arity$2 = conj__2;
conj.cljs$core$IFn$_invoke$arity$variadic = conj__3.cljs$core$IFn$_invoke$arity$variadic;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){
if((coll == null)){
return null;
} else {
return cljs.core._empty(coll);
}
});
cljs.core.accumulating_seq_count = (function accumulating_seq_count(coll){
var s = cljs.core.seq(coll);
var acc = (0);
while(true){
if(cljs.core.counted_QMARK_(s)){
return (acc + cljs.core._count(s));
} else {
var G__11942 = cljs.core.next(s);
var G__11943 = (acc + (1));
s = G__11942;
acc = G__11943;
continue;
}
break;
}
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){
if(!((coll == null))){
if((function (){var G__11945 = coll;
if(G__11945){
var bit__4312__auto__ = (G__11945.cljs$lang$protocol_mask$partition0$ & (2));
if((bit__4312__auto__) || (G__11945.cljs$core$ICounted$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return coll.cljs$core$ICounted$_count$arity$1(null);
} else {
if(coll instanceof Array){
return coll.length;
} else {
if(typeof coll === 'string'){
return coll.length;
} else {
if(cljs.core.native_satisfies_QMARK_(cljs.core.ICounted,coll)){
return cljs.core._count(coll);
} else {
return cljs.core.accumulating_seq_count(coll);

}
}
}
}
} else {
return (0);
}
});
cljs.core.linear_traversal_nth = (function() {
var linear_traversal_nth = null;
var linear_traversal_nth__2 = (function (coll,n){
while(true){
if((coll == null)){
throw (new Error("Index out of bounds"));
} else {
if((n === (0))){
if(cljs.core.seq(coll)){
return cljs.core.first(coll);
} else {
throw (new Error("Index out of bounds"));
}
} else {
if(cljs.core.indexed_QMARK_(coll)){
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(coll,n);
} else {
if(cljs.core.seq(coll)){
var G__11946 = cljs.core.next(coll);
var G__11947 = (n - (1));
coll = G__11946;
n = G__11947;
continue;
} else {
throw (new Error("Index out of bounds"));

}
}
}
}
break;
}
});
var linear_traversal_nth__3 = (function (coll,n,not_found){
while(true){
if((coll == null)){
return not_found;
} else {
if((n === (0))){
if(cljs.core.seq(coll)){
return cljs.core.first(coll);
} else {
return not_found;
}
} else {
if(cljs.core.indexed_QMARK_(coll)){
return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(coll,n,not_found);
} else {
if(cljs.core.seq(coll)){
var G__11948 = cljs.core.next(coll);
var G__11949 = (n - (1));
var G__11950 = not_found;
coll = G__11948;
n = G__11949;
not_found = G__11950;
continue;
} else {
return not_found;

}
}
}
}
break;
}
});
linear_traversal_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return linear_traversal_nth__2.call(this,coll,n);
case 3:
return linear_traversal_nth__3.call(this,coll,n,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
linear_traversal_nth.cljs$core$IFn$_invoke$arity$2 = linear_traversal_nth__2;
linear_traversal_nth.cljs$core$IFn$_invoke$arity$3 = linear_traversal_nth__3;
return linear_traversal_nth;
})()
;
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__2 = (function (coll,n){
if(!(typeof n === 'number')){
throw (new Error("index argument to nth must be a number"));
} else {
if((coll == null)){
return coll;
} else {
if((function (){var G__11955 = coll;
if(G__11955){
var bit__4312__auto__ = (G__11955.cljs$lang$protocol_mask$partition0$ & (16));
if((bit__4312__auto__) || (G__11955.cljs$core$IIndexed$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return coll.cljs$core$IIndexed$_nth$arity$2(null,n);
} else {
if(coll instanceof Array){
if((n < coll.length)){
return (coll[n]);
} else {
return null;
}
} else {
if(typeof coll === 'string'){
if((n < coll.length)){
return (coll[n]);
} else {
return null;
}
} else {
if(cljs.core.native_satisfies_QMARK_(cljs.core.IIndexed,coll)){
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(coll,n);
} else {
if((function (){var G__11956 = coll;
if(G__11956){
var bit__4319__auto__ = (G__11956.cljs$lang$protocol_mask$partition0$ & (64));
if((bit__4319__auto__) || (G__11956.cljs$core$ISeq$)){
return true;
} else {
if((!G__11956.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ISeq,G__11956);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ISeq,G__11956);
}
})()){
return cljs.core.linear_traversal_nth.cljs$core$IFn$_invoke$arity$2(coll,n);
} else {
throw (new Error([cljs.core.str("nth not supported on this type "),cljs.core.str(cljs.core.type__GT_str(cljs.core.type(coll)))].join('')));

}
}
}
}
}
}
}
});
var nth__3 = (function (coll,n,not_found){
if(!(typeof n === 'number')){
throw (new Error("index argument to nth must be a number."));
} else {
if((coll == null)){
return not_found;
} else {
if((function (){var G__11957 = coll;
if(G__11957){
var bit__4312__auto__ = (G__11957.cljs$lang$protocol_mask$partition0$ & (16));
if((bit__4312__auto__) || (G__11957.cljs$core$IIndexed$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return coll.cljs$core$IIndexed$_nth$arity$3(null,n,not_found);
} else {
if(coll instanceof Array){
if((n < coll.length)){
return (coll[n]);
} else {
return not_found;
}
} else {
if(typeof coll === 'string'){
if((n < coll.length)){
return (coll[n]);
} else {
return not_found;
}
} else {
if(cljs.core.native_satisfies_QMARK_(cljs.core.IIndexed,coll)){
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(coll,n);
} else {
if((function (){var G__11958 = coll;
if(G__11958){
var bit__4319__auto__ = (G__11958.cljs$lang$protocol_mask$partition0$ & (64));
if((bit__4319__auto__) || (G__11958.cljs$core$ISeq$)){
return true;
} else {
if((!G__11958.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ISeq,G__11958);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ISeq,G__11958);
}
})()){
return cljs.core.linear_traversal_nth.cljs$core$IFn$_invoke$arity$3(coll,n,not_found);
} else {
throw (new Error([cljs.core.str("nth not supported on this type "),cljs.core.str(cljs.core.type__GT_str(cljs.core.type(coll)))].join('')));

}
}
}
}
}
}
}
});
nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return nth__2.call(this,coll,n);
case 3:
return nth__3.call(this,coll,n,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
nth.cljs$core$IFn$_invoke$arity$2 = nth__2;
nth.cljs$core$IFn$_invoke$arity$3 = nth__3;
return nth;
})()
;
/**
* Returns the nth rest of coll, coll when n is 0.
*/
cljs.core.nthrest = (function nthrest(coll,n){
var n__$1 = n;
var xs = coll;
while(true){
if(((n__$1 > (0))) && (cljs.core.seq(xs))){
var G__11959 = (n__$1 - (1));
var G__11960 = cljs.core.rest(xs);
n__$1 = G__11959;
xs = G__11960;
continue;
} else {
return xs;
}
break;
}
});
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__2 = (function (o,k){
if((o == null)){
return null;
} else {
if((function (){var G__11963 = o;
if(G__11963){
var bit__4312__auto__ = (G__11963.cljs$lang$protocol_mask$partition0$ & (256));
if((bit__4312__auto__) || (G__11963.cljs$core$ILookup$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return o.cljs$core$ILookup$_lookup$arity$2(null,k);
} else {
if(o instanceof Array){
if((k < o.length)){
return (o[k]);
} else {
return null;
}
} else {
if(typeof o === 'string'){
if((k < o.length)){
return (o[k]);
} else {
return null;
}
} else {
if(cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,o)){
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o,k);
} else {
return null;

}
}
}
}
}
});
var get__3 = (function (o,k,not_found){
if(!((o == null))){
if((function (){var G__11964 = o;
if(G__11964){
var bit__4312__auto__ = (G__11964.cljs$lang$protocol_mask$partition0$ & (256));
if((bit__4312__auto__) || (G__11964.cljs$core$ILookup$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return o.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
} else {
if(o instanceof Array){
if((k < o.length)){
return (o[k]);
} else {
return not_found;
}
} else {
if(typeof o === 'string'){
if((k < o.length)){
return (o[k]);
} else {
return not_found;
}
} else {
if(cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,o)){
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(o,k,not_found);
} else {
return not_found;

}
}
}
}
} else {
return not_found;
}
});
get = function(o,k,not_found){
switch(arguments.length){
case 2:
return get__2.call(this,o,k);
case 3:
return get__3.call(this,o,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get.cljs$core$IFn$_invoke$arity$2 = get__2;
get.cljs$core$IFn$_invoke$arity$3 = get__3;
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__3 = (function (coll,k,v){
if(!((coll == null))){
return cljs.core._assoc(coll,k,v);
} else {
return cljs.core.PersistentHashMap.fromArrays([k],[v]);
}
});
var assoc__4 = (function() { 
var G__11968__delegate = function (coll,k,v,kvs){
while(true){
var ret = assoc.cljs$core$IFn$_invoke$arity$3(coll,k,v);
if(cljs.core.truth_(kvs)){
var G__11969 = ret;
var G__11970 = cljs.core.first(kvs);
var G__11971 = cljs.core.second(kvs);
var G__11972 = cljs.core.nnext(kvs);
coll = G__11969;
k = G__11970;
v = G__11971;
kvs = G__11972;
continue;
} else {
return ret;
}
break;
}
};
var G__11968 = function (coll,k,v,var_args){
var kvs = null;
if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11968__delegate.call(this,coll,k,v,kvs);};
G__11968.cljs$lang$maxFixedArity = 3;
G__11968.cljs$lang$applyTo = (function (arglist__11973){
var coll = cljs.core.first(arglist__11973);
arglist__11973 = cljs.core.next(arglist__11973);
var k = cljs.core.first(arglist__11973);
arglist__11973 = cljs.core.next(arglist__11973);
var v = cljs.core.first(arglist__11973);
var kvs = cljs.core.rest(arglist__11973);
return G__11968__delegate(coll,k,v,kvs);
});
G__11968.cljs$core$IFn$_invoke$arity$variadic = G__11968__delegate;
return G__11968;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 3:
return assoc__3.call(this,coll,k,v);
default:
return assoc__4.cljs$core$IFn$_invoke$arity$variadic(coll,k,v, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__4.cljs$lang$applyTo;
assoc.cljs$core$IFn$_invoke$arity$3 = assoc__3;
assoc.cljs$core$IFn$_invoke$arity$variadic = assoc__4.cljs$core$IFn$_invoke$arity$variadic;
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__1 = (function (coll){
return coll;
});
var dissoc__2 = (function (coll,k){
if((coll == null)){
return null;
} else {
return cljs.core._dissoc(coll,k);
}
});
var dissoc__3 = (function() { 
var G__11976__delegate = function (coll,k,ks){
while(true){
if((coll == null)){
return null;
} else {
var ret = dissoc.cljs$core$IFn$_invoke$arity$2(coll,k);
if(cljs.core.truth_(ks)){
var G__11977 = ret;
var G__11978 = cljs.core.first(ks);
var G__11979 = cljs.core.next(ks);
coll = G__11977;
k = G__11978;
ks = G__11979;
continue;
} else {
return ret;
}
}
break;
}
};
var G__11976 = function (coll,k,var_args){
var ks = null;
if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11976__delegate.call(this,coll,k,ks);};
G__11976.cljs$lang$maxFixedArity = 2;
G__11976.cljs$lang$applyTo = (function (arglist__11980){
var coll = cljs.core.first(arglist__11980);
arglist__11980 = cljs.core.next(arglist__11980);
var k = cljs.core.first(arglist__11980);
var ks = cljs.core.rest(arglist__11980);
return G__11976__delegate(coll,k,ks);
});
G__11976.cljs$core$IFn$_invoke$arity$variadic = G__11976__delegate;
return G__11976;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return dissoc__1.call(this,coll);
case 2:
return dissoc__2.call(this,coll,k);
default:
return dissoc__3.cljs$core$IFn$_invoke$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__3.cljs$lang$applyTo;
dissoc.cljs$core$IFn$_invoke$arity$1 = dissoc__1;
dissoc.cljs$core$IFn$_invoke$arity$2 = dissoc__2;
dissoc.cljs$core$IFn$_invoke$arity$variadic = dissoc__3.cljs$core$IFn$_invoke$arity$variadic;
return dissoc;
})()
;
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
var or__3638__auto__ = (function (){var G__11985 = f;
return goog.isFunction(G__11985);
})();
if(cljs.core.truth_(or__3638__auto__)){
return or__3638__auto__;
} else {
var G__11986 = f;
if(G__11986){
var bit__4319__auto__ = null;
if(cljs.core.truth_((function (){var or__3638__auto____$1 = bit__4319__auto__;
if(cljs.core.truth_(or__3638__auto____$1)){
return or__3638__auto____$1;
} else {
return G__11986.cljs$core$Fn$;
}
})())){
return true;
} else {
if((!G__11986.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.Fn,G__11986);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.Fn,G__11986);
}
}
});

/**
* @constructor
*/
cljs.core.MetaFn = (function (afn,meta){
this.afn = afn;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
cljs.core.MetaFn.prototype.call = (function() {
var G__12452 = null;
var G__12452__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return (self__.afn.cljs$core$IFn$_invoke$arity$0 ? self__.afn.cljs$core$IFn$_invoke$arity$0() : self__.afn.call(null));
});
var G__12452__2 = (function (self__,a){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__11988 = a;
return (self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(G__11988) : self__.afn.call(null,G__11988));
});
var G__12452__3 = (function (self__,a,b){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__11989 = a;
var G__11990 = b;
return (self__.afn.cljs$core$IFn$_invoke$arity$2 ? self__.afn.cljs$core$IFn$_invoke$arity$2(G__11989,G__11990) : self__.afn.call(null,G__11989,G__11990));
});
var G__12452__4 = (function (self__,a,b,c){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__11991 = a;
var G__11992 = b;
var G__11993 = c;
return (self__.afn.cljs$core$IFn$_invoke$arity$3 ? self__.afn.cljs$core$IFn$_invoke$arity$3(G__11991,G__11992,G__11993) : self__.afn.call(null,G__11991,G__11992,G__11993));
});
var G__12452__5 = (function (self__,a,b,c,d){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__11994 = a;
var G__11995 = b;
var G__11996 = c;
var G__11997 = d;
return (self__.afn.cljs$core$IFn$_invoke$arity$4 ? self__.afn.cljs$core$IFn$_invoke$arity$4(G__11994,G__11995,G__11996,G__11997) : self__.afn.call(null,G__11994,G__11995,G__11996,G__11997));
});
var G__12452__6 = (function (self__,a,b,c,d,e){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__11998 = a;
var G__11999 = b;
var G__12000 = c;
var G__12001 = d;
var G__12002 = e;
return (self__.afn.cljs$core$IFn$_invoke$arity$5 ? self__.afn.cljs$core$IFn$_invoke$arity$5(G__11998,G__11999,G__12000,G__12001,G__12002) : self__.afn.call(null,G__11998,G__11999,G__12000,G__12001,G__12002));
});
var G__12452__7 = (function (self__,a,b,c,d,e,f){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__12003 = a;
var G__12004 = b;
var G__12005 = c;
var G__12006 = d;
var G__12007 = e;
var G__12008 = f;
return (self__.afn.cljs$core$IFn$_invoke$arity$6 ? self__.afn.cljs$core$IFn$_invoke$arity$6(G__12003,G__12004,G__12005,G__12006,G__12007,G__12008) : self__.afn.call(null,G__12003,G__12004,G__12005,G__12006,G__12007,G__12008));
});
var G__12452__8 = (function (self__,a,b,c,d,e,f,g){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__12009 = a;
var G__12010 = b;
var G__12011 = c;
var G__12012 = d;
var G__12013 = e;
var G__12014 = f;
var G__12015 = g;
return (self__.afn.cljs$core$IFn$_invoke$arity$7 ? self__.afn.cljs$core$IFn$_invoke$arity$7(G__12009,G__12010,G__12011,G__12012,G__12013,G__12014,G__12015) : self__.afn.call(null,G__12009,G__12010,G__12011,G__12012,G__12013,G__12014,G__12015));
});
var G__12452__9 = (function (self__,a,b,c,d,e,f,g,h){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__12016 = a;
var G__12017 = b;
var G__12018 = c;
var G__12019 = d;
var G__12020 = e;
var G__12021 = f;
var G__12022 = g;
var G__12023 = h;
return (self__.afn.cljs$core$IFn$_invoke$arity$8 ? self__.afn.cljs$core$IFn$_invoke$arity$8(G__12016,G__12017,G__12018,G__12019,G__12020,G__12021,G__12022,G__12023) : self__.afn.call(null,G__12016,G__12017,G__12018,G__12019,G__12020,G__12021,G__12022,G__12023));
});
var G__12452__10 = (function (self__,a,b,c,d,e,f,g,h,i){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__12024 = a;
var G__12025 = b;
var G__12026 = c;
var G__12027 = d;
var G__12028 = e;
var G__12029 = f;
var G__12030 = g;
var G__12031 = h;
var G__12032 = i;
return (self__.afn.cljs$core$IFn$_invoke$arity$9 ? self__.afn.cljs$core$IFn$_invoke$arity$9(G__12024,G__12025,G__12026,G__12027,G__12028,G__12029,G__12030,G__12031,G__12032) : self__.afn.call(null,G__12024,G__12025,G__12026,G__12027,G__12028,G__12029,G__12030,G__12031,G__12032));
});
var G__12452__11 = (function (self__,a,b,c,d,e,f,g,h,i,j){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__12033 = a;
var G__12034 = b;
var G__12035 = c;
var G__12036 = d;
var G__12037 = e;
var G__12038 = f;
var G__12039 = g;
var G__12040 = h;
var G__12041 = i;
var G__12042 = j;
return (self__.afn.cljs$core$IFn$_invoke$arity$10 ? self__.afn.cljs$core$IFn$_invoke$arity$10(G__12033,G__12034,G__12035,G__12036,G__12037,G__12038,G__12039,G__12040,G__12041,G__12042) : self__.afn.call(null,G__12033,G__12034,G__12035,G__12036,G__12037,G__12038,G__12039,G__12040,G__12041,G__12042));
});
var G__12452__12 = (function (self__,a,b,c,d,e,f,g,h,i,j,k){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__12043 = a;
var G__12044 = b;
var G__12045 = c;
var G__12046 = d;
var G__12047 = e;
var G__12048 = f;
var G__12049 = g;
var G__12050 = h;
var G__12051 = i;
var G__12052 = j;
var G__12053 = k;
return (self__.afn.cljs$core$IFn$_invoke$arity$11 ? self__.afn.cljs$core$IFn$_invoke$arity$11(G__12043,G__12044,G__12045,G__12046,G__12047,G__12048,G__12049,G__12050,G__12051,G__12052,G__12053) : self__.afn.call(null,G__12043,G__12044,G__12045,G__12046,G__12047,G__12048,G__12049,G__12050,G__12051,G__12052,G__12053));
});
var G__12452__13 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__12054 = a;
var G__12055 = b;
var G__12056 = c;
var G__12057 = d;
var G__12058 = e;
var G__12059 = f;
var G__12060 = g;
var G__12061 = h;
var G__12062 = i;
var G__12063 = j;
var G__12064 = k;
var G__12065 = l;
return (self__.afn.cljs$core$IFn$_invoke$arity$12 ? self__.afn.cljs$core$IFn$_invoke$arity$12(G__12054,G__12055,G__12056,G__12057,G__12058,G__12059,G__12060,G__12061,G__12062,G__12063,G__12064,G__12065) : self__.afn.call(null,G__12054,G__12055,G__12056,G__12057,G__12058,G__12059,G__12060,G__12061,G__12062,G__12063,G__12064,G__12065));
});
var G__12452__14 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__12066 = a;
var G__12067 = b;
var G__12068 = c;
var G__12069 = d;
var G__12070 = e;
var G__12071 = f;
var G__12072 = g;
var G__12073 = h;
var G__12074 = i;
var G__12075 = j;
var G__12076 = k;
var G__12077 = l;
var G__12078 = m;
return (self__.afn.cljs$core$IFn$_invoke$arity$13 ? self__.afn.cljs$core$IFn$_invoke$arity$13(G__12066,G__12067,G__12068,G__12069,G__12070,G__12071,G__12072,G__12073,G__12074,G__12075,G__12076,G__12077,G__12078) : self__.afn.call(null,G__12066,G__12067,G__12068,G__12069,G__12070,G__12071,G__12072,G__12073,G__12074,G__12075,G__12076,G__12077,G__12078));
});
var G__12452__15 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__12079 = a;
var G__12080 = b;
var G__12081 = c;
var G__12082 = d;
var G__12083 = e;
var G__12084 = f;
var G__12085 = g;
var G__12086 = h;
var G__12087 = i;
var G__12088 = j;
var G__12089 = k;
var G__12090 = l;
var G__12091 = m;
var G__12092 = n;
return (self__.afn.cljs$core$IFn$_invoke$arity$14 ? self__.afn.cljs$core$IFn$_invoke$arity$14(G__12079,G__12080,G__12081,G__12082,G__12083,G__12084,G__12085,G__12086,G__12087,G__12088,G__12089,G__12090,G__12091,G__12092) : self__.afn.call(null,G__12079,G__12080,G__12081,G__12082,G__12083,G__12084,G__12085,G__12086,G__12087,G__12088,G__12089,G__12090,G__12091,G__12092));
});
var G__12452__16 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__12093 = a;
var G__12094 = b;
var G__12095 = c;
var G__12096 = d;
var G__12097 = e;
var G__12098 = f;
var G__12099 = g;
var G__12100 = h;
var G__12101 = i;
var G__12102 = j;
var G__12103 = k;
var G__12104 = l;
var G__12105 = m;
var G__12106 = n;
var G__12107 = o;
return (self__.afn.cljs$core$IFn$_invoke$arity$15 ? self__.afn.cljs$core$IFn$_invoke$arity$15(G__12093,G__12094,G__12095,G__12096,G__12097,G__12098,G__12099,G__12100,G__12101,G__12102,G__12103,G__12104,G__12105,G__12106,G__12107) : self__.afn.call(null,G__12093,G__12094,G__12095,G__12096,G__12097,G__12098,G__12099,G__12100,G__12101,G__12102,G__12103,G__12104,G__12105,G__12106,G__12107));
});
var G__12452__17 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__12108 = a;
var G__12109 = b;
var G__12110 = c;
var G__12111 = d;
var G__12112 = e;
var G__12113 = f;
var G__12114 = g;
var G__12115 = h;
var G__12116 = i;
var G__12117 = j;
var G__12118 = k;
var G__12119 = l;
var G__12120 = m;
var G__12121 = n;
var G__12122 = o;
var G__12123 = p;
return (self__.afn.cljs$core$IFn$_invoke$arity$16 ? self__.afn.cljs$core$IFn$_invoke$arity$16(G__12108,G__12109,G__12110,G__12111,G__12112,G__12113,G__12114,G__12115,G__12116,G__12117,G__12118,G__12119,G__12120,G__12121,G__12122,G__12123) : self__.afn.call(null,G__12108,G__12109,G__12110,G__12111,G__12112,G__12113,G__12114,G__12115,G__12116,G__12117,G__12118,G__12119,G__12120,G__12121,G__12122,G__12123));
});
var G__12452__18 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__12124 = a;
var G__12125 = b;
var G__12126 = c;
var G__12127 = d;
var G__12128 = e;
var G__12129 = f;
var G__12130 = g;
var G__12131 = h;
var G__12132 = i;
var G__12133 = j;
var G__12134 = k;
var G__12135 = l;
var G__12136 = m;
var G__12137 = n;
var G__12138 = o;
var G__12139 = p;
var G__12140 = q;
return (self__.afn.cljs$core$IFn$_invoke$arity$17 ? self__.afn.cljs$core$IFn$_invoke$arity$17(G__12124,G__12125,G__12126,G__12127,G__12128,G__12129,G__12130,G__12131,G__12132,G__12133,G__12134,G__12135,G__12136,G__12137,G__12138,G__12139,G__12140) : self__.afn.call(null,G__12124,G__12125,G__12126,G__12127,G__12128,G__12129,G__12130,G__12131,G__12132,G__12133,G__12134,G__12135,G__12136,G__12137,G__12138,G__12139,G__12140));
});
var G__12452__19 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__12141 = a;
var G__12142 = b;
var G__12143 = c;
var G__12144 = d;
var G__12145 = e;
var G__12146 = f;
var G__12147 = g;
var G__12148 = h;
var G__12149 = i;
var G__12150 = j;
var G__12151 = k;
var G__12152 = l;
var G__12153 = m;
var G__12154 = n;
var G__12155 = o;
var G__12156 = p;
var G__12157 = q;
var G__12158 = r;
return (self__.afn.cljs$core$IFn$_invoke$arity$18 ? self__.afn.cljs$core$IFn$_invoke$arity$18(G__12141,G__12142,G__12143,G__12144,G__12145,G__12146,G__12147,G__12148,G__12149,G__12150,G__12151,G__12152,G__12153,G__12154,G__12155,G__12156,G__12157,G__12158) : self__.afn.call(null,G__12141,G__12142,G__12143,G__12144,G__12145,G__12146,G__12147,G__12148,G__12149,G__12150,G__12151,G__12152,G__12153,G__12154,G__12155,G__12156,G__12157,G__12158));
});
var G__12452__20 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__12159 = a;
var G__12160 = b;
var G__12161 = c;
var G__12162 = d;
var G__12163 = e;
var G__12164 = f;
var G__12165 = g;
var G__12166 = h;
var G__12167 = i;
var G__12168 = j;
var G__12169 = k;
var G__12170 = l;
var G__12171 = m;
var G__12172 = n;
var G__12173 = o;
var G__12174 = p;
var G__12175 = q;
var G__12176 = r;
var G__12177 = s;
return (self__.afn.cljs$core$IFn$_invoke$arity$19 ? self__.afn.cljs$core$IFn$_invoke$arity$19(G__12159,G__12160,G__12161,G__12162,G__12163,G__12164,G__12165,G__12166,G__12167,G__12168,G__12169,G__12170,G__12171,G__12172,G__12173,G__12174,G__12175,G__12176,G__12177) : self__.afn.call(null,G__12159,G__12160,G__12161,G__12162,G__12163,G__12164,G__12165,G__12166,G__12167,G__12168,G__12169,G__12170,G__12171,G__12172,G__12173,G__12174,G__12175,G__12176,G__12177));
});
var G__12452__21 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__12178 = a;
var G__12179 = b;
var G__12180 = c;
var G__12181 = d;
var G__12182 = e;
var G__12183 = f;
var G__12184 = g;
var G__12185 = h;
var G__12186 = i;
var G__12187 = j;
var G__12188 = k;
var G__12189 = l;
var G__12190 = m;
var G__12191 = n;
var G__12192 = o;
var G__12193 = p;
var G__12194 = q;
var G__12195 = r;
var G__12196 = s;
var G__12197 = t;
return (self__.afn.cljs$core$IFn$_invoke$arity$20 ? self__.afn.cljs$core$IFn$_invoke$arity$20(G__12178,G__12179,G__12180,G__12181,G__12182,G__12183,G__12184,G__12185,G__12186,G__12187,G__12188,G__12189,G__12190,G__12191,G__12192,G__12193,G__12194,G__12195,G__12196,G__12197) : self__.afn.call(null,G__12178,G__12179,G__12180,G__12181,G__12182,G__12183,G__12184,G__12185,G__12186,G__12187,G__12188,G__12189,G__12190,G__12191,G__12192,G__12193,G__12194,G__12195,G__12196,G__12197));
});
var G__12452__22 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__12198 = self__.afn;
var G__12199 = a;
var G__12200 = b;
var G__12201 = c;
var G__12202 = d;
var G__12203 = e;
var G__12204 = f;
var G__12205 = g;
var G__12206 = h;
var G__12207 = i;
var G__12208 = j;
var G__12209 = k;
var G__12210 = l;
var G__12211 = m;
var G__12212 = n;
var G__12213 = o;
var G__12214 = p;
var G__12215 = q;
var G__12216 = r;
var G__12217 = s;
var G__12218 = t;
var G__12219 = rest;
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$22 ? cljs.core.apply.cljs$core$IFn$_invoke$arity$22(G__12198,G__12199,G__12200,G__12201,G__12202,G__12203,G__12204,G__12205,G__12206,G__12207,G__12208,G__12209,G__12210,G__12211,G__12212,G__12213,G__12214,G__12215,G__12216,G__12217,G__12218,G__12219) : cljs.core.apply.call(null,G__12198,G__12199,G__12200,G__12201,G__12202,G__12203,G__12204,G__12205,G__12206,G__12207,G__12208,G__12209,G__12210,G__12211,G__12212,G__12213,G__12214,G__12215,G__12216,G__12217,G__12218,G__12219));
});
G__12452 = function(self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
switch(arguments.length){
case 1:
return G__12452__1.call(this,self__);
case 2:
return G__12452__2.call(this,self__,a);
case 3:
return G__12452__3.call(this,self__,a,b);
case 4:
return G__12452__4.call(this,self__,a,b,c);
case 5:
return G__12452__5.call(this,self__,a,b,c,d);
case 6:
return G__12452__6.call(this,self__,a,b,c,d,e);
case 7:
return G__12452__7.call(this,self__,a,b,c,d,e,f);
case 8:
return G__12452__8.call(this,self__,a,b,c,d,e,f,g);
case 9:
return G__12452__9.call(this,self__,a,b,c,d,e,f,g,h);
case 10:
return G__12452__10.call(this,self__,a,b,c,d,e,f,g,h,i);
case 11:
return G__12452__11.call(this,self__,a,b,c,d,e,f,g,h,i,j);
case 12:
return G__12452__12.call(this,self__,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return G__12452__13.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return G__12452__14.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return G__12452__15.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return G__12452__16.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return G__12452__17.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return G__12452__18.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return G__12452__19.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return G__12452__20.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return G__12452__21.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
case 22:
return G__12452__22.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12452.cljs$core$IFn$_invoke$arity$1 = G__12452__1;
G__12452.cljs$core$IFn$_invoke$arity$2 = G__12452__2;
G__12452.cljs$core$IFn$_invoke$arity$3 = G__12452__3;
G__12452.cljs$core$IFn$_invoke$arity$4 = G__12452__4;
G__12452.cljs$core$IFn$_invoke$arity$5 = G__12452__5;
G__12452.cljs$core$IFn$_invoke$arity$6 = G__12452__6;
G__12452.cljs$core$IFn$_invoke$arity$7 = G__12452__7;
G__12452.cljs$core$IFn$_invoke$arity$8 = G__12452__8;
G__12452.cljs$core$IFn$_invoke$arity$9 = G__12452__9;
G__12452.cljs$core$IFn$_invoke$arity$10 = G__12452__10;
G__12452.cljs$core$IFn$_invoke$arity$11 = G__12452__11;
G__12452.cljs$core$IFn$_invoke$arity$12 = G__12452__12;
G__12452.cljs$core$IFn$_invoke$arity$13 = G__12452__13;
G__12452.cljs$core$IFn$_invoke$arity$14 = G__12452__14;
G__12452.cljs$core$IFn$_invoke$arity$15 = G__12452__15;
G__12452.cljs$core$IFn$_invoke$arity$16 = G__12452__16;
G__12452.cljs$core$IFn$_invoke$arity$17 = G__12452__17;
G__12452.cljs$core$IFn$_invoke$arity$18 = G__12452__18;
G__12452.cljs$core$IFn$_invoke$arity$19 = G__12452__19;
G__12452.cljs$core$IFn$_invoke$arity$20 = G__12452__20;
G__12452.cljs$core$IFn$_invoke$arity$21 = G__12452__21;
G__12452.cljs$core$IFn$_invoke$arity$22 = G__12452__22;
return G__12452;
})()
;

cljs.core.MetaFn.prototype.apply = (function (self__,args11987){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args11987)));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
return (self__.afn.cljs$core$IFn$_invoke$arity$0 ? self__.afn.cljs$core$IFn$_invoke$arity$0() : self__.afn.call(null));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){
var self__ = this;
var _ = this;
var G__12220 = a;
return (self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(G__12220) : self__.afn.call(null,G__12220));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var self__ = this;
var _ = this;
var G__12221 = a;
var G__12222 = b;
return (self__.afn.cljs$core$IFn$_invoke$arity$2 ? self__.afn.cljs$core$IFn$_invoke$arity$2(G__12221,G__12222) : self__.afn.call(null,G__12221,G__12222));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var self__ = this;
var _ = this;
var G__12223 = a;
var G__12224 = b;
var G__12225 = c;
return (self__.afn.cljs$core$IFn$_invoke$arity$3 ? self__.afn.cljs$core$IFn$_invoke$arity$3(G__12223,G__12224,G__12225) : self__.afn.call(null,G__12223,G__12224,G__12225));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
var self__ = this;
var _ = this;
var G__12226 = a;
var G__12227 = b;
var G__12228 = c;
var G__12229 = d;
return (self__.afn.cljs$core$IFn$_invoke$arity$4 ? self__.afn.cljs$core$IFn$_invoke$arity$4(G__12226,G__12227,G__12228,G__12229) : self__.afn.call(null,G__12226,G__12227,G__12228,G__12229));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
var self__ = this;
var _ = this;
var G__12230 = a;
var G__12231 = b;
var G__12232 = c;
var G__12233 = d;
var G__12234 = e;
return (self__.afn.cljs$core$IFn$_invoke$arity$5 ? self__.afn.cljs$core$IFn$_invoke$arity$5(G__12230,G__12231,G__12232,G__12233,G__12234) : self__.afn.call(null,G__12230,G__12231,G__12232,G__12233,G__12234));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f){
var self__ = this;
var _ = this;
var G__12235 = a;
var G__12236 = b;
var G__12237 = c;
var G__12238 = d;
var G__12239 = e;
var G__12240 = f;
return (self__.afn.cljs$core$IFn$_invoke$arity$6 ? self__.afn.cljs$core$IFn$_invoke$arity$6(G__12235,G__12236,G__12237,G__12238,G__12239,G__12240) : self__.afn.call(null,G__12235,G__12236,G__12237,G__12238,G__12239,G__12240));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f,g){
var self__ = this;
var _ = this;
var G__12241 = a;
var G__12242 = b;
var G__12243 = c;
var G__12244 = d;
var G__12245 = e;
var G__12246 = f;
var G__12247 = g;
return (self__.afn.cljs$core$IFn$_invoke$arity$7 ? self__.afn.cljs$core$IFn$_invoke$arity$7(G__12241,G__12242,G__12243,G__12244,G__12245,G__12246,G__12247) : self__.afn.call(null,G__12241,G__12242,G__12243,G__12244,G__12245,G__12246,G__12247));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f,g,h){
var self__ = this;
var _ = this;
var G__12248 = a;
var G__12249 = b;
var G__12250 = c;
var G__12251 = d;
var G__12252 = e;
var G__12253 = f;
var G__12254 = g;
var G__12255 = h;
return (self__.afn.cljs$core$IFn$_invoke$arity$8 ? self__.afn.cljs$core$IFn$_invoke$arity$8(G__12248,G__12249,G__12250,G__12251,G__12252,G__12253,G__12254,G__12255) : self__.afn.call(null,G__12248,G__12249,G__12250,G__12251,G__12252,G__12253,G__12254,G__12255));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f,g,h,i){
var self__ = this;
var _ = this;
var G__12256 = a;
var G__12257 = b;
var G__12258 = c;
var G__12259 = d;
var G__12260 = e;
var G__12261 = f;
var G__12262 = g;
var G__12263 = h;
var G__12264 = i;
return (self__.afn.cljs$core$IFn$_invoke$arity$9 ? self__.afn.cljs$core$IFn$_invoke$arity$9(G__12256,G__12257,G__12258,G__12259,G__12260,G__12261,G__12262,G__12263,G__12264) : self__.afn.call(null,G__12256,G__12257,G__12258,G__12259,G__12260,G__12261,G__12262,G__12263,G__12264));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f,g,h,i,j){
var self__ = this;
var _ = this;
var G__12265 = a;
var G__12266 = b;
var G__12267 = c;
var G__12268 = d;
var G__12269 = e;
var G__12270 = f;
var G__12271 = g;
var G__12272 = h;
var G__12273 = i;
var G__12274 = j;
return (self__.afn.cljs$core$IFn$_invoke$arity$10 ? self__.afn.cljs$core$IFn$_invoke$arity$10(G__12265,G__12266,G__12267,G__12268,G__12269,G__12270,G__12271,G__12272,G__12273,G__12274) : self__.afn.call(null,G__12265,G__12266,G__12267,G__12268,G__12269,G__12270,G__12271,G__12272,G__12273,G__12274));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f,g,h,i,j,k){
var self__ = this;
var _ = this;
var G__12275 = a;
var G__12276 = b;
var G__12277 = c;
var G__12278 = d;
var G__12279 = e;
var G__12280 = f;
var G__12281 = g;
var G__12282 = h;
var G__12283 = i;
var G__12284 = j;
var G__12285 = k;
return (self__.afn.cljs$core$IFn$_invoke$arity$11 ? self__.afn.cljs$core$IFn$_invoke$arity$11(G__12275,G__12276,G__12277,G__12278,G__12279,G__12280,G__12281,G__12282,G__12283,G__12284,G__12285) : self__.afn.call(null,G__12275,G__12276,G__12277,G__12278,G__12279,G__12280,G__12281,G__12282,G__12283,G__12284,G__12285));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f,g,h,i,j,k,l){
var self__ = this;
var _ = this;
var G__12286 = a;
var G__12287 = b;
var G__12288 = c;
var G__12289 = d;
var G__12290 = e;
var G__12291 = f;
var G__12292 = g;
var G__12293 = h;
var G__12294 = i;
var G__12295 = j;
var G__12296 = k;
var G__12297 = l;
return (self__.afn.cljs$core$IFn$_invoke$arity$12 ? self__.afn.cljs$core$IFn$_invoke$arity$12(G__12286,G__12287,G__12288,G__12289,G__12290,G__12291,G__12292,G__12293,G__12294,G__12295,G__12296,G__12297) : self__.afn.call(null,G__12286,G__12287,G__12288,G__12289,G__12290,G__12291,G__12292,G__12293,G__12294,G__12295,G__12296,G__12297));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m){
var self__ = this;
var _ = this;
var G__12298 = a;
var G__12299 = b;
var G__12300 = c;
var G__12301 = d;
var G__12302 = e;
var G__12303 = f;
var G__12304 = g;
var G__12305 = h;
var G__12306 = i;
var G__12307 = j;
var G__12308 = k;
var G__12309 = l;
var G__12310 = m;
return (self__.afn.cljs$core$IFn$_invoke$arity$13 ? self__.afn.cljs$core$IFn$_invoke$arity$13(G__12298,G__12299,G__12300,G__12301,G__12302,G__12303,G__12304,G__12305,G__12306,G__12307,G__12308,G__12309,G__12310) : self__.afn.call(null,G__12298,G__12299,G__12300,G__12301,G__12302,G__12303,G__12304,G__12305,G__12306,G__12307,G__12308,G__12309,G__12310));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self__ = this;
var _ = this;
var G__12311 = a;
var G__12312 = b;
var G__12313 = c;
var G__12314 = d;
var G__12315 = e;
var G__12316 = f;
var G__12317 = g;
var G__12318 = h;
var G__12319 = i;
var G__12320 = j;
var G__12321 = k;
var G__12322 = l;
var G__12323 = m;
var G__12324 = n;
return (self__.afn.cljs$core$IFn$_invoke$arity$14 ? self__.afn.cljs$core$IFn$_invoke$arity$14(G__12311,G__12312,G__12313,G__12314,G__12315,G__12316,G__12317,G__12318,G__12319,G__12320,G__12321,G__12322,G__12323,G__12324) : self__.afn.call(null,G__12311,G__12312,G__12313,G__12314,G__12315,G__12316,G__12317,G__12318,G__12319,G__12320,G__12321,G__12322,G__12323,G__12324));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var self__ = this;
var _ = this;
var G__12325 = a;
var G__12326 = b;
var G__12327 = c;
var G__12328 = d;
var G__12329 = e;
var G__12330 = f;
var G__12331 = g;
var G__12332 = h;
var G__12333 = i;
var G__12334 = j;
var G__12335 = k;
var G__12336 = l;
var G__12337 = m;
var G__12338 = n;
var G__12339 = o;
return (self__.afn.cljs$core$IFn$_invoke$arity$15 ? self__.afn.cljs$core$IFn$_invoke$arity$15(G__12325,G__12326,G__12327,G__12328,G__12329,G__12330,G__12331,G__12332,G__12333,G__12334,G__12335,G__12336,G__12337,G__12338,G__12339) : self__.afn.call(null,G__12325,G__12326,G__12327,G__12328,G__12329,G__12330,G__12331,G__12332,G__12333,G__12334,G__12335,G__12336,G__12337,G__12338,G__12339));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var _ = this;
var G__12340 = a;
var G__12341 = b;
var G__12342 = c;
var G__12343 = d;
var G__12344 = e;
var G__12345 = f;
var G__12346 = g;
var G__12347 = h;
var G__12348 = i;
var G__12349 = j;
var G__12350 = k;
var G__12351 = l;
var G__12352 = m;
var G__12353 = n;
var G__12354 = o;
var G__12355 = p;
return (self__.afn.cljs$core$IFn$_invoke$arity$16 ? self__.afn.cljs$core$IFn$_invoke$arity$16(G__12340,G__12341,G__12342,G__12343,G__12344,G__12345,G__12346,G__12347,G__12348,G__12349,G__12350,G__12351,G__12352,G__12353,G__12354,G__12355) : self__.afn.call(null,G__12340,G__12341,G__12342,G__12343,G__12344,G__12345,G__12346,G__12347,G__12348,G__12349,G__12350,G__12351,G__12352,G__12353,G__12354,G__12355));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var self__ = this;
var _ = this;
var G__12356 = a;
var G__12357 = b;
var G__12358 = c;
var G__12359 = d;
var G__12360 = e;
var G__12361 = f;
var G__12362 = g;
var G__12363 = h;
var G__12364 = i;
var G__12365 = j;
var G__12366 = k;
var G__12367 = l;
var G__12368 = m;
var G__12369 = n;
var G__12370 = o;
var G__12371 = p;
var G__12372 = q;
return (self__.afn.cljs$core$IFn$_invoke$arity$17 ? self__.afn.cljs$core$IFn$_invoke$arity$17(G__12356,G__12357,G__12358,G__12359,G__12360,G__12361,G__12362,G__12363,G__12364,G__12365,G__12366,G__12367,G__12368,G__12369,G__12370,G__12371,G__12372) : self__.afn.call(null,G__12356,G__12357,G__12358,G__12359,G__12360,G__12361,G__12362,G__12363,G__12364,G__12365,G__12366,G__12367,G__12368,G__12369,G__12370,G__12371,G__12372));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var _ = this;
var G__12373 = a;
var G__12374 = b;
var G__12375 = c;
var G__12376 = d;
var G__12377 = e;
var G__12378 = f;
var G__12379 = g;
var G__12380 = h;
var G__12381 = i;
var G__12382 = j;
var G__12383 = k;
var G__12384 = l;
var G__12385 = m;
var G__12386 = n;
var G__12387 = o;
var G__12388 = p;
var G__12389 = q;
var G__12390 = r;
return (self__.afn.cljs$core$IFn$_invoke$arity$18 ? self__.afn.cljs$core$IFn$_invoke$arity$18(G__12373,G__12374,G__12375,G__12376,G__12377,G__12378,G__12379,G__12380,G__12381,G__12382,G__12383,G__12384,G__12385,G__12386,G__12387,G__12388,G__12389,G__12390) : self__.afn.call(null,G__12373,G__12374,G__12375,G__12376,G__12377,G__12378,G__12379,G__12380,G__12381,G__12382,G__12383,G__12384,G__12385,G__12386,G__12387,G__12388,G__12389,G__12390));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self__ = this;
var _ = this;
var G__12391 = a;
var G__12392 = b;
var G__12393 = c;
var G__12394 = d;
var G__12395 = e;
var G__12396 = f;
var G__12397 = g;
var G__12398 = h;
var G__12399 = i;
var G__12400 = j;
var G__12401 = k;
var G__12402 = l;
var G__12403 = m;
var G__12404 = n;
var G__12405 = o;
var G__12406 = p;
var G__12407 = q;
var G__12408 = r;
var G__12409 = s;
return (self__.afn.cljs$core$IFn$_invoke$arity$19 ? self__.afn.cljs$core$IFn$_invoke$arity$19(G__12391,G__12392,G__12393,G__12394,G__12395,G__12396,G__12397,G__12398,G__12399,G__12400,G__12401,G__12402,G__12403,G__12404,G__12405,G__12406,G__12407,G__12408,G__12409) : self__.afn.call(null,G__12391,G__12392,G__12393,G__12394,G__12395,G__12396,G__12397,G__12398,G__12399,G__12400,G__12401,G__12402,G__12403,G__12404,G__12405,G__12406,G__12407,G__12408,G__12409));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self__ = this;
var _ = this;
var G__12410 = a;
var G__12411 = b;
var G__12412 = c;
var G__12413 = d;
var G__12414 = e;
var G__12415 = f;
var G__12416 = g;
var G__12417 = h;
var G__12418 = i;
var G__12419 = j;
var G__12420 = k;
var G__12421 = l;
var G__12422 = m;
var G__12423 = n;
var G__12424 = o;
var G__12425 = p;
var G__12426 = q;
var G__12427 = r;
var G__12428 = s;
var G__12429 = t;
return (self__.afn.cljs$core$IFn$_invoke$arity$20 ? self__.afn.cljs$core$IFn$_invoke$arity$20(G__12410,G__12411,G__12412,G__12413,G__12414,G__12415,G__12416,G__12417,G__12418,G__12419,G__12420,G__12421,G__12422,G__12423,G__12424,G__12425,G__12426,G__12427,G__12428,G__12429) : self__.afn.call(null,G__12410,G__12411,G__12412,G__12413,G__12414,G__12415,G__12416,G__12417,G__12418,G__12419,G__12420,G__12421,G__12422,G__12423,G__12424,G__12425,G__12426,G__12427,G__12428,G__12429));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$21 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self__ = this;
var _ = this;
var G__12430 = self__.afn;
var G__12431 = a;
var G__12432 = b;
var G__12433 = c;
var G__12434 = d;
var G__12435 = e;
var G__12436 = f;
var G__12437 = g;
var G__12438 = h;
var G__12439 = i;
var G__12440 = j;
var G__12441 = k;
var G__12442 = l;
var G__12443 = m;
var G__12444 = n;
var G__12445 = o;
var G__12446 = p;
var G__12447 = q;
var G__12448 = r;
var G__12449 = s;
var G__12450 = t;
var G__12451 = rest;
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$22 ? cljs.core.apply.cljs$core$IFn$_invoke$arity$22(G__12430,G__12431,G__12432,G__12433,G__12434,G__12435,G__12436,G__12437,G__12438,G__12439,G__12440,G__12441,G__12442,G__12443,G__12444,G__12445,G__12446,G__12447,G__12448,G__12449,G__12450,G__12451) : cljs.core.apply.call(null,G__12430,G__12431,G__12432,G__12433,G__12434,G__12435,G__12436,G__12437,G__12438,G__12439,G__12440,G__12441,G__12442,G__12443,G__12444,G__12445,G__12446,G__12447,G__12448,G__12449,G__12450,G__12451));
});

cljs.core.MetaFn.prototype.cljs$core$Fn$ = true;

cljs.core.MetaFn.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new cljs.core.MetaFn(self__.afn,new_meta));
});

cljs.core.MetaFn.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
});

cljs.core.MetaFn.cljs$lang$type = true;

cljs.core.MetaFn.cljs$lang$ctorStr = "cljs.core/MetaFn";

cljs.core.MetaFn.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write(writer__4226__auto__,"cljs.core/MetaFn");
});

cljs.core.__GT_MetaFn = (function __GT_MetaFn(afn,meta){
return (new cljs.core.MetaFn(afn,meta));
});

/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){
if((cljs.core.fn_QMARK_(o)) && (!((function (){var G__12456 = o;
if(G__12456){
var bit__4319__auto__ = (G__12456.cljs$lang$protocol_mask$partition0$ & (262144));
if((bit__4319__auto__) || (G__12456.cljs$core$IWithMeta$)){
return true;
} else {
if((!G__12456.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,G__12456);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,G__12456);
}
})()))){
return (new cljs.core.MetaFn(o,meta));
} else {
if((o == null)){
return null;
} else {
return cljs.core._with_meta(o,meta);
}
}
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){
if((function (){var and__3626__auto__ = !((o == null));
if(and__3626__auto__){
var G__12460 = o;
if(G__12460){
var bit__4319__auto__ = (G__12460.cljs$lang$protocol_mask$partition0$ & (131072));
if((bit__4319__auto__) || (G__12460.cljs$core$IMeta$)){
return true;
} else {
if((!G__12460.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IMeta,G__12460);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IMeta,G__12460);
}
} else {
return and__3626__auto__;
}
})()){
return cljs.core._meta(o);
} else {
return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){
if((coll == null)){
return null;
} else {
return cljs.core._peek(coll);
}
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){
if((coll == null)){
return null;
} else {
return cljs.core._pop(coll);
}
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__1 = (function (coll){
return coll;
});
var disj__2 = (function (coll,k){
if((coll == null)){
return null;
} else {
return cljs.core._disjoin(coll,k);
}
});
var disj__3 = (function() { 
var G__12463__delegate = function (coll,k,ks){
while(true){
if((coll == null)){
return null;
} else {
var ret = disj.cljs$core$IFn$_invoke$arity$2(coll,k);
if(cljs.core.truth_(ks)){
var G__12464 = ret;
var G__12465 = cljs.core.first(ks);
var G__12466 = cljs.core.next(ks);
coll = G__12464;
k = G__12465;
ks = G__12466;
continue;
} else {
return ret;
}
}
break;
}
};
var G__12463 = function (coll,k,var_args){
var ks = null;
if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12463__delegate.call(this,coll,k,ks);};
G__12463.cljs$lang$maxFixedArity = 2;
G__12463.cljs$lang$applyTo = (function (arglist__12467){
var coll = cljs.core.first(arglist__12467);
arglist__12467 = cljs.core.next(arglist__12467);
var k = cljs.core.first(arglist__12467);
var ks = cljs.core.rest(arglist__12467);
return G__12463__delegate(coll,k,ks);
});
G__12463.cljs$core$IFn$_invoke$arity$variadic = G__12463__delegate;
return G__12463;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return disj__1.call(this,coll);
case 2:
return disj__2.call(this,coll,k);
default:
return disj__3.cljs$core$IFn$_invoke$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__3.cljs$lang$applyTo;
disj.cljs$core$IFn$_invoke$arity$1 = disj__1;
disj.cljs$core$IFn$_invoke$arity$2 = disj__2;
disj.cljs$core$IFn$_invoke$arity$variadic = disj__3.cljs$core$IFn$_invoke$arity$variadic;
return disj;
})()
;
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){
return ((coll == null)) || (cljs.core.not(cljs.core.seq(coll)));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){
if((x == null)){
return false;
} else {
var G__12469 = x;
if(G__12469){
var bit__4319__auto__ = (G__12469.cljs$lang$protocol_mask$partition0$ & (8));
if((bit__4319__auto__) || (G__12469.cljs$core$ICollection$)){
return true;
} else {
if((!G__12469.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ICollection,G__12469);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ICollection,G__12469);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if((x == null)){
return false;
} else {
var G__12471 = x;
if(G__12471){
var bit__4319__auto__ = (G__12471.cljs$lang$protocol_mask$partition0$ & (4096));
if((bit__4319__auto__) || (G__12471.cljs$core$ISet$)){
return true;
} else {
if((!G__12471.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ISet,G__12471);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ISet,G__12471);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var G__12473 = x;
if(G__12473){
var bit__4319__auto__ = (G__12473.cljs$lang$protocol_mask$partition0$ & (512));
if((bit__4319__auto__) || (G__12473.cljs$core$IAssociative$)){
return true;
} else {
if((!G__12473.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IAssociative,G__12473);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IAssociative,G__12473);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var G__12475 = x;
if(G__12475){
var bit__4319__auto__ = (G__12475.cljs$lang$protocol_mask$partition0$ & (16777216));
if((bit__4319__auto__) || (G__12475.cljs$core$ISequential$)){
return true;
} else {
if((!G__12475.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,G__12475);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,G__12475);
}
});
/**
* Returns true if coll satisfies ISorted
*/
cljs.core.sorted_QMARK_ = (function sorted_QMARK_(x){
var G__12477 = x;
if(G__12477){
var bit__4319__auto__ = (G__12477.cljs$lang$protocol_mask$partition0$ & (268435456));
if((bit__4319__auto__) || (G__12477.cljs$core$ISorted$)){
return true;
} else {
if((!G__12477.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ISorted,G__12477);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ISorted,G__12477);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){
var G__12479 = x;
if(G__12479){
var bit__4319__auto__ = (G__12479.cljs$lang$protocol_mask$partition0$ & (524288));
if((bit__4319__auto__) || (G__12479.cljs$core$IReduce$)){
return true;
} else {
if((!G__12479.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IReduce,G__12479);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IReduce,G__12479);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if((x == null)){
return false;
} else {
var G__12481 = x;
if(G__12481){
var bit__4319__auto__ = (G__12481.cljs$lang$protocol_mask$partition0$ & (1024));
if((bit__4319__auto__) || (G__12481.cljs$core$IMap$)){
return true;
} else {
if((!G__12481.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IMap,G__12481);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IMap,G__12481);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var G__12483 = x;
if(G__12483){
var bit__4319__auto__ = (G__12483.cljs$lang$protocol_mask$partition0$ & (16384));
if((bit__4319__auto__) || (G__12483.cljs$core$IVector$)){
return true;
} else {
if((!G__12483.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IVector,G__12483);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IVector,G__12483);
}
});

cljs.core.chunked_seq_QMARK_ = (function chunked_seq_QMARK_(x){
var G__12485 = x;
if(G__12485){
var bit__4312__auto__ = (G__12485.cljs$lang$protocol_mask$partition1$ & (512));
if((bit__4312__auto__) || (G__12485.cljs$core$IChunkedSeq$)){
return true;
} else {
return false;
}
} else {
return false;
}
});
/**
* @param {...*} var_args
*/
cljs.core.js_obj = (function() {
var js_obj = null;
var js_obj__0 = (function (){
var obj12491 = {};
return obj12491;
});
var js_obj__1 = (function() { 
var G__12494__delegate = function (keyvals){
var G__12492 = goog.object.create;
var G__12493 = keyvals;
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$2 ? cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__12492,G__12493) : cljs.core.apply.call(null,G__12492,G__12493));
};
var G__12494 = function (var_args){
var keyvals = null;
if (arguments.length > 0) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__12494__delegate.call(this,keyvals);};
G__12494.cljs$lang$maxFixedArity = 0;
G__12494.cljs$lang$applyTo = (function (arglist__12495){
var keyvals = cljs.core.seq(arglist__12495);
return G__12494__delegate(keyvals);
});
G__12494.cljs$core$IFn$_invoke$arity$variadic = G__12494__delegate;
return G__12494;
})()
;
js_obj = function(var_args){
var keyvals = var_args;
switch(arguments.length){
case 0:
return js_obj__0.call(this);
default:
return js_obj__1.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(arguments, 0));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
js_obj.cljs$lang$maxFixedArity = 0;
js_obj.cljs$lang$applyTo = js_obj__1.cljs$lang$applyTo;
js_obj.cljs$core$IFn$_invoke$arity$0 = js_obj__0;
js_obj.cljs$core$IFn$_invoke$arity$variadic = js_obj__1.cljs$core$IFn$_invoke$arity$variadic;
return js_obj;
})()
;
cljs.core.js_keys = (function js_keys(obj){
var keys = [];
var G__12498_12500 = obj;
var G__12499_12501 = ((function (G__12498_12500,keys){
return (function (val,key,obj__$1){
return keys.push(key);
});})(G__12498_12500,keys))
;
goog.object.forEach(G__12498_12500,G__12499_12501);

return keys;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.array_copy = (function array_copy(from,i,to,j,len){
var i__$1 = i;
var j__$1 = j;
var len__$1 = len;
while(true){
if((len__$1 === (0))){
return to;
} else {
(to[j__$1] = (from[i__$1]));

var G__12502 = (i__$1 + (1));
var G__12503 = (j__$1 + (1));
var G__12504 = (len__$1 - (1));
i__$1 = G__12502;
j__$1 = G__12503;
len__$1 = G__12504;
continue;
}
break;
}
});
cljs.core.array_copy_downward = (function array_copy_downward(from,i,to,j,len){
var i__$1 = (i + (len - (1)));
var j__$1 = (j + (len - (1)));
var len__$1 = len;
while(true){
if((len__$1 === (0))){
return to;
} else {
(to[j__$1] = (from[i__$1]));

var G__12505 = (i__$1 - (1));
var G__12506 = (j__$1 - (1));
var G__12507 = (len__$1 - (1));
i__$1 = G__12505;
j__$1 = G__12506;
len__$1 = G__12507;
continue;
}
break;
}
});
cljs.core.lookup_sentinel = (function (){var obj12509 = {};
return obj12509;
})();
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){
return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){
return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){
return (void 0 === x);
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if((s == null)){
return false;
} else {
var G__12511 = s;
if(G__12511){
var bit__4319__auto__ = (G__12511.cljs$lang$protocol_mask$partition0$ & (64));
if((bit__4319__auto__) || (G__12511.cljs$core$ISeq$)){
return true;
} else {
if((!G__12511.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ISeq,G__12511);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ISeq,G__12511);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){
var G__12513 = s;
if(G__12513){
var bit__4319__auto__ = (G__12513.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4319__auto__) || (G__12513.cljs$core$ISeqable$)){
return true;
} else {
if((!G__12513.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__12513);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__12513);
}
});
cljs.core.boolean$ = (function boolean$(x){
if(cljs.core.truth_(x)){
return true;
} else {
return false;
}
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){
var or__3638__auto__ = cljs.core.fn_QMARK_(f);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var G__12517 = f;
if(G__12517){
var bit__4319__auto__ = (G__12517.cljs$lang$protocol_mask$partition0$ & (1));
if((bit__4319__auto__) || (G__12517.cljs$core$IFn$)){
return true;
} else {
if((!G__12517.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IFn,G__12517);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IFn,G__12517);
}
}
});
/**
* Returns true if n is an integer.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
return (typeof n === 'number') && (cljs.core.not((function (){var G__12530 = n;
return isNaN(G__12530);
})())) && (!((n === Infinity))) && (((function (){var G__12531 = n;
return parseFloat(G__12531);
})() === (function (){var G__12532 = n;
var G__12533 = (10);
return parseInt(G__12532,G__12533);
})()));
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){
if((cljs.core.get.cljs$core$IFn$_invoke$arity$3(coll,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel)){
return false;
} else {
return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if((!((coll == null))) && (cljs.core.associative_QMARK_(coll)) && (cljs.core.contains_QMARK_(coll,k))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.get.cljs$core$IFn$_invoke$arity$2(coll,k)], null);
} else {
return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___1 = (function (x){
return true;
});
var distinct_QMARK___2 = (function (x,y){
return !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y));
});
var distinct_QMARK___3 = (function() { 
var G__12534__delegate = function (x,y,more){
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y))){
var s = cljs.core.PersistentHashSet.fromArray([x,y], true);
var xs = more;
while(true){
var x__$1 = cljs.core.first(xs);
var etc = cljs.core.next(xs);
if(cljs.core.truth_(xs)){
if(cljs.core.contains_QMARK_(s,x__$1)){
return false;
} else {
var G__12535 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(s,x__$1);
var G__12536 = etc;
s = G__12535;
xs = G__12536;
continue;
}
} else {
return true;
}
break;
}
} else {
return false;
}
};
var G__12534 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12534__delegate.call(this,x,y,more);};
G__12534.cljs$lang$maxFixedArity = 2;
G__12534.cljs$lang$applyTo = (function (arglist__12537){
var x = cljs.core.first(arglist__12537);
arglist__12537 = cljs.core.next(arglist__12537);
var y = cljs.core.first(arglist__12537);
var more = cljs.core.rest(arglist__12537);
return G__12534__delegate(x,y,more);
});
G__12534.cljs$core$IFn$_invoke$arity$variadic = G__12534__delegate;
return G__12534;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return distinct_QMARK___1.call(this,x);
case 2:
return distinct_QMARK___2.call(this,x,y);
default:
return distinct_QMARK___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___3.cljs$lang$applyTo;
distinct_QMARK_.cljs$core$IFn$_invoke$arity$1 = distinct_QMARK___1;
distinct_QMARK_.cljs$core$IFn$_invoke$arity$2 = distinct_QMARK___2;
distinct_QMARK_.cljs$core$IFn$_invoke$arity$variadic = distinct_QMARK___3.cljs$core$IFn$_invoke$arity$variadic;
return distinct_QMARK_;
})()
;
/**
* Coerces coll to a (possibly empty) sequence, if it is not already
* one. Will not force a lazy seq. (sequence nil) yields ()
*/
cljs.core.sequence = (function sequence(coll){
if(cljs.core.seq_QMARK_(coll)){
return coll;
} else {
var or__3638__auto__ = cljs.core.seq(coll);
if(or__3638__auto__){
return or__3638__auto__;
} else {
return cljs.core.List.EMPTY;
}
}
});
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses IComparable if available and google.array.defaultCompare for objects
* of the same type and special-cases nil to be less than any other object.
*/
cljs.core.compare = (function compare(x,y){
if((x === y)){
return (0);
} else {
if((x == null)){
return (-1);
} else {
if((y == null)){
return (1);
} else {
if((cljs.core.type(x) === cljs.core.type(y))){
if((function (){var G__12541 = x;
if(G__12541){
var bit__4312__auto__ = (G__12541.cljs$lang$protocol_mask$partition1$ & (2048));
if((bit__4312__auto__) || (G__12541.cljs$core$IComparable$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return x.cljs$core$IComparable$_compare$arity$2(null,y);
} else {
var G__12542 = x;
var G__12543 = y;
return goog.array.defaultCompare(G__12542,G__12543);
}
} else {
throw (new Error("compare on non-nil objects of different types"));

}
}
}
}
});
/**
* Compare indexed collection.
*/
cljs.core.compare_indexed = (function() {
var compare_indexed = null;
var compare_indexed__2 = (function (xs,ys){
var xl = cljs.core.count(xs);
var yl = cljs.core.count(ys);
if((xl < yl)){
return (-1);
} else {
if((xl > yl)){
return (1);
} else {
return compare_indexed.cljs$core$IFn$_invoke$arity$4(xs,ys,xl,(0));

}
}
});
var compare_indexed__4 = (function (xs,ys,len,n){
while(true){
var d = cljs.core.compare(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(xs,n),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ys,n));
if(((d === (0))) && (((n + (1)) < len))){
var G__12548 = xs;
var G__12549 = ys;
var G__12550 = len;
var G__12551 = (n + (1));
xs = G__12548;
ys = G__12549;
len = G__12550;
n = G__12551;
continue;
} else {
return d;
}
break;
}
});
compare_indexed = function(xs,ys,len,n){
switch(arguments.length){
case 2:
return compare_indexed__2.call(this,xs,ys);
case 4:
return compare_indexed__4.call(this,xs,ys,len,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compare_indexed.cljs$core$IFn$_invoke$arity$2 = compare_indexed__2;
compare_indexed.cljs$core$IFn$_invoke$arity$4 = compare_indexed__4;
return compare_indexed;
})()
;
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(f,cljs.core.compare)){
return cljs.core.compare;
} else {
return (function (x,y){
var r = (function (){var G__12556 = x;
var G__12557 = y;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__12556,G__12557) : f.call(null,G__12556,G__12557));
})();
if(typeof r === 'number'){
return r;
} else {
if(cljs.core.truth_(r)){
return (-1);
} else {
if(cljs.core.truth_((function (){var G__12558 = y;
var G__12559 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__12558,G__12559) : f.call(null,G__12558,G__12559));
})())){
return (1);
} else {
return (0);
}
}
}
});
}
});
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__1 = (function (coll){
return sort.cljs$core$IFn$_invoke$arity$2(cljs.core.compare,coll);
});
var sort__2 = (function (comp,coll){
if(cljs.core.seq(coll)){
var a = (function (){var G__12565 = coll;
return (cljs.core.to_array.cljs$core$IFn$_invoke$arity$1 ? cljs.core.to_array.cljs$core$IFn$_invoke$arity$1(G__12565) : cljs.core.to_array.call(null,G__12565));
})();
var G__12566_12568 = a;
var G__12567_12569 = cljs.core.fn__GT_comparator(comp);
goog.array.stableSort(G__12566_12568,G__12567_12569);

return cljs.core.seq(a);
} else {
return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case 1:
return sort__1.call(this,comp);
case 2:
return sort__2.call(this,comp,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sort.cljs$core$IFn$_invoke$arity$1 = sort__1;
sort.cljs$core$IFn$_invoke$arity$2 = sort__2;
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__2 = (function (keyfn,coll){
return sort_by.cljs$core$IFn$_invoke$arity$3(keyfn,cljs.core.compare,coll);
});
var sort_by__3 = (function (keyfn,comp,coll){
return cljs.core.sort.cljs$core$IFn$_invoke$arity$2((function (x,y){
return cljs.core.fn__GT_comparator(comp).call(null,(function (){var G__12575 = x;
return (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(G__12575) : keyfn.call(null,G__12575));
})(),(function (){var G__12576 = y;
return (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(G__12576) : keyfn.call(null,G__12576));
})());
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case 2:
return sort_by__2.call(this,keyfn,comp);
case 3:
return sort_by__3.call(this,keyfn,comp,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sort_by.cljs$core$IFn$_invoke$arity$2 = sort_by__2;
sort_by.cljs$core$IFn$_invoke$arity$3 = sort_by__3;
return sort_by;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__2 = (function (f,coll){
var temp__4124__auto__ = cljs.core.seq(coll);
if(temp__4124__auto__){
var s = temp__4124__auto__;
var G__12582 = f;
var G__12583 = cljs.core.first(s);
var G__12584 = cljs.core.next(s);
return (cljs.core.reduce.cljs$core$IFn$_invoke$arity$3 ? cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(G__12582,G__12583,G__12584) : cljs.core.reduce.call(null,G__12582,G__12583,G__12584));
} else {
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}
});
var seq_reduce__3 = (function (f,val,coll){
var val__$1 = val;
var coll__$1 = cljs.core.seq(coll);
while(true){
if(coll__$1){
var nval = (function (){var G__12585 = val__$1;
var G__12586 = cljs.core.first(coll__$1);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__12585,G__12586) : f.call(null,G__12585,G__12586));
})();
if(cljs.core.reduced_QMARK_(nval)){
return cljs.core.deref(nval);
} else {
var G__12587 = nval;
var G__12588 = cljs.core.next(coll__$1);
val__$1 = G__12587;
coll__$1 = G__12588;
continue;
}
} else {
return val__$1;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return seq_reduce__2.call(this,f,val);
case 3:
return seq_reduce__3.call(this,f,val,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
seq_reduce.cljs$core$IFn$_invoke$arity$2 = seq_reduce__2;
seq_reduce.cljs$core$IFn$_invoke$arity$3 = seq_reduce__3;
return seq_reduce;
})()
;
/**
* Return a random permutation of coll
*/
cljs.core.shuffle = (function shuffle(coll){
var a = (function (){var G__12592 = coll;
return (cljs.core.to_array.cljs$core$IFn$_invoke$arity$1 ? cljs.core.to_array.cljs$core$IFn$_invoke$arity$1(G__12592) : cljs.core.to_array.call(null,G__12592));
})();
var G__12593_12595 = a;
goog.array.shuffle(G__12593_12595);

var G__12594 = a;
return (cljs.core.vec.cljs$core$IFn$_invoke$arity$1 ? cljs.core.vec.cljs$core$IFn$_invoke$arity$1(G__12594) : cljs.core.vec.call(null,G__12594));
});
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__2 = (function (f,coll){
if((function (){var G__12598 = coll;
if(G__12598){
var bit__4312__auto__ = (G__12598.cljs$lang$protocol_mask$partition0$ & (524288));
if((bit__4312__auto__) || (G__12598.cljs$core$IReduce$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return coll.cljs$core$IReduce$_reduce$arity$2(null,f);
} else {
if(coll instanceof Array){
return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$2(coll,f);
} else {
if(typeof coll === 'string'){
return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$2(coll,f);
} else {
if(cljs.core.native_satisfies_QMARK_(cljs.core.IReduce,coll)){
return cljs.core._reduce.cljs$core$IFn$_invoke$arity$2(coll,f);
} else {
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll);

}
}
}
}
});
var reduce__3 = (function (f,val,coll){
if((function (){var G__12599 = coll;
if(G__12599){
var bit__4312__auto__ = (G__12599.cljs$lang$protocol_mask$partition0$ & (524288));
if((bit__4312__auto__) || (G__12599.cljs$core$IReduce$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return coll.cljs$core$IReduce$_reduce$arity$3(null,f,val);
} else {
if(coll instanceof Array){
return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$3(coll,f,val);
} else {
if(typeof coll === 'string'){
return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$3(coll,f,val);
} else {
if(cljs.core.native_satisfies_QMARK_(cljs.core.IReduce,coll)){
return cljs.core._reduce.cljs$core$IFn$_invoke$arity$3(coll,f,val);
} else {
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,val,coll);

}
}
}
}
});
reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return reduce__2.call(this,f,val);
case 3:
return reduce__3.call(this,f,val,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reduce.cljs$core$IFn$_invoke$arity$2 = reduce__2;
reduce.cljs$core$IFn$_invoke$arity$3 = reduce__3;
return reduce;
})()
;
/**
* Reduces an associative collection. f should be a function of 3
* arguments. Returns the result of applying f to init, the first key
* and the first value in coll, then applying f to that result and the
* 2nd key and value, etc. If coll contains no entries, returns init
* and f is not called. Note that reduce-kv is supported on vectors,
* where the keys will be the ordinals.
*/
cljs.core.reduce_kv = (function reduce_kv(f,init,coll){
if(!((coll == null))){
return cljs.core._kv_reduce(coll,f,init);
} else {
return init;
}
});
cljs.core.identity = (function identity(x){
return x;
});
cljs.core.completing = (function() {
var completing = null;
var completing__1 = (function (f){
return completing.cljs$core$IFn$_invoke$arity$2(f,cljs.core.identity);
});
var completing__2 = (function (f,cf){
return (function() {
var G__12608 = null;
var G__12608__0 = (function (){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var G__12608__1 = (function (x){
var G__12605 = x;
return (cf.cljs$core$IFn$_invoke$arity$1 ? cf.cljs$core$IFn$_invoke$arity$1(G__12605) : cf.call(null,G__12605));
});
var G__12608__2 = (function (x,y){
var G__12606 = x;
var G__12607 = y;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__12606,G__12607) : f.call(null,G__12606,G__12607));
});
G__12608 = function(x,y){
switch(arguments.length){
case 0:
return G__12608__0.call(this);
case 1:
return G__12608__1.call(this,x);
case 2:
return G__12608__2.call(this,x,y);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12608.cljs$core$IFn$_invoke$arity$0 = G__12608__0;
G__12608.cljs$core$IFn$_invoke$arity$1 = G__12608__1;
G__12608.cljs$core$IFn$_invoke$arity$2 = G__12608__2;
return G__12608;
})()
});
completing = function(f,cf){
switch(arguments.length){
case 1:
return completing__1.call(this,f);
case 2:
return completing__2.call(this,f,cf);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
completing.cljs$core$IFn$_invoke$arity$1 = completing__1;
completing.cljs$core$IFn$_invoke$arity$2 = completing__2;
return completing;
})()
;
/**
* reduce with a transformation of f (xf). If init is not
* supplied, (f) will be called to produce it. f should be a reducing
* step function that accepts both 1 and 2 arguments, if it accepts
* only 2 you can add the arity-1 with 'completing'. Returns the result
* of applying (the transformed) xf to init and the first item in coll,
* then applying xf to that result and the 2nd item, etc. If coll
* contains no items, returns init and f is not called. Note that
* certain transforms may inject or skip items.
*/
cljs.core.transduce = (function() {
var transduce = null;
var transduce__3 = (function (xform,f,coll){
return transduce.cljs$core$IFn$_invoke$arity$4(xform,f,(function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})(),coll);
});
var transduce__4 = (function (xform,f,init,coll){
var f__$1 = (function (){var G__12615 = f;
return (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(G__12615) : xform.call(null,G__12615));
})();
var ret = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(f__$1,init,coll);
var G__12616 = ret;
return (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__12616) : f__$1.call(null,G__12616));
});
transduce = function(xform,f,init,coll){
switch(arguments.length){
case 3:
return transduce__3.call(this,xform,f,init);
case 4:
return transduce__4.call(this,xform,f,init,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
transduce.cljs$core$IFn$_invoke$arity$3 = transduce__3;
transduce.cljs$core$IFn$_invoke$arity$4 = transduce__4;
return transduce;
})()
;
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___0 = (function (){
return (0);
});
var _PLUS___1 = (function (x){
return x;
});
var _PLUS___2 = (function (x,y){
return (x + y);
});
var _PLUS___3 = (function() { 
var G__12617__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(_PLUS_,(x + y),more);
};
var G__12617 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12617__delegate.call(this,x,y,more);};
G__12617.cljs$lang$maxFixedArity = 2;
G__12617.cljs$lang$applyTo = (function (arglist__12618){
var x = cljs.core.first(arglist__12618);
arglist__12618 = cljs.core.next(arglist__12618);
var y = cljs.core.first(arglist__12618);
var more = cljs.core.rest(arglist__12618);
return G__12617__delegate(x,y,more);
});
G__12617.cljs$core$IFn$_invoke$arity$variadic = G__12617__delegate;
return G__12617;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _PLUS___0.call(this);
case 1:
return _PLUS___1.call(this,x);
case 2:
return _PLUS___2.call(this,x,y);
default:
return _PLUS___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___3.cljs$lang$applyTo;
_PLUS_.cljs$core$IFn$_invoke$arity$0 = _PLUS___0;
_PLUS_.cljs$core$IFn$_invoke$arity$1 = _PLUS___1;
_PLUS_.cljs$core$IFn$_invoke$arity$2 = _PLUS___2;
_PLUS_.cljs$core$IFn$_invoke$arity$variadic = _PLUS___3.cljs$core$IFn$_invoke$arity$variadic;
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___1 = (function (x){
return (- x);
});
var ___2 = (function (x,y){
return (x - y);
});
var ___3 = (function() { 
var G__12619__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(_,(x - y),more);
};
var G__12619 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12619__delegate.call(this,x,y,more);};
G__12619.cljs$lang$maxFixedArity = 2;
G__12619.cljs$lang$applyTo = (function (arglist__12620){
var x = cljs.core.first(arglist__12620);
arglist__12620 = cljs.core.next(arglist__12620);
var y = cljs.core.first(arglist__12620);
var more = cljs.core.rest(arglist__12620);
return G__12619__delegate(x,y,more);
});
G__12619.cljs$core$IFn$_invoke$arity$variadic = G__12619__delegate;
return G__12619;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return ___1.call(this,x);
case 2:
return ___2.call(this,x,y);
default:
return ___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___3.cljs$lang$applyTo;
_.cljs$core$IFn$_invoke$arity$1 = ___1;
_.cljs$core$IFn$_invoke$arity$2 = ___2;
_.cljs$core$IFn$_invoke$arity$variadic = ___3.cljs$core$IFn$_invoke$arity$variadic;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___0 = (function (){
return (1);
});
var _STAR___1 = (function (x){
return x;
});
var _STAR___2 = (function (x,y){
return (x * y);
});
var _STAR___3 = (function() { 
var G__12621__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(_STAR_,(x * y),more);
};
var G__12621 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12621__delegate.call(this,x,y,more);};
G__12621.cljs$lang$maxFixedArity = 2;
G__12621.cljs$lang$applyTo = (function (arglist__12622){
var x = cljs.core.first(arglist__12622);
arglist__12622 = cljs.core.next(arglist__12622);
var y = cljs.core.first(arglist__12622);
var more = cljs.core.rest(arglist__12622);
return G__12621__delegate(x,y,more);
});
G__12621.cljs$core$IFn$_invoke$arity$variadic = G__12621__delegate;
return G__12621;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _STAR___0.call(this);
case 1:
return _STAR___1.call(this,x);
case 2:
return _STAR___2.call(this,x,y);
default:
return _STAR___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___3.cljs$lang$applyTo;
_STAR_.cljs$core$IFn$_invoke$arity$0 = _STAR___0;
_STAR_.cljs$core$IFn$_invoke$arity$1 = _STAR___1;
_STAR_.cljs$core$IFn$_invoke$arity$2 = _STAR___2;
_STAR_.cljs$core$IFn$_invoke$arity$variadic = _STAR___3.cljs$core$IFn$_invoke$arity$variadic;
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___1 = (function (x){
return _SLASH_.cljs$core$IFn$_invoke$arity$2((1),x);
});
var _SLASH___2 = (function (x,y){
return (x / y);
});
var _SLASH___3 = (function() { 
var G__12627__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(_SLASH_,_SLASH_.cljs$core$IFn$_invoke$arity$2(x,y),more);
};
var G__12627 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12627__delegate.call(this,x,y,more);};
G__12627.cljs$lang$maxFixedArity = 2;
G__12627.cljs$lang$applyTo = (function (arglist__12628){
var x = cljs.core.first(arglist__12628);
arglist__12628 = cljs.core.next(arglist__12628);
var y = cljs.core.first(arglist__12628);
var more = cljs.core.rest(arglist__12628);
return G__12627__delegate(x,y,more);
});
G__12627.cljs$core$IFn$_invoke$arity$variadic = G__12627__delegate;
return G__12627;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _SLASH___1.call(this,x);
case 2:
return _SLASH___2.call(this,x,y);
default:
return _SLASH___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___3.cljs$lang$applyTo;
_SLASH_.cljs$core$IFn$_invoke$arity$1 = _SLASH___1;
_SLASH_.cljs$core$IFn$_invoke$arity$2 = _SLASH___2;
_SLASH_.cljs$core$IFn$_invoke$arity$variadic = _SLASH___3.cljs$core$IFn$_invoke$arity$variadic;
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___1 = (function (x){
return true;
});
var _LT___2 = (function (x,y){
return (x < y);
});
var _LT___3 = (function() { 
var G__12629__delegate = function (x,y,more){
while(true){
if((x < y)){
if(cljs.core.next(more)){
var G__12630 = y;
var G__12631 = cljs.core.first(more);
var G__12632 = cljs.core.next(more);
x = G__12630;
y = G__12631;
more = G__12632;
continue;
} else {
return (y < cljs.core.first(more));
}
} else {
return false;
}
break;
}
};
var G__12629 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12629__delegate.call(this,x,y,more);};
G__12629.cljs$lang$maxFixedArity = 2;
G__12629.cljs$lang$applyTo = (function (arglist__12633){
var x = cljs.core.first(arglist__12633);
arglist__12633 = cljs.core.next(arglist__12633);
var y = cljs.core.first(arglist__12633);
var more = cljs.core.rest(arglist__12633);
return G__12629__delegate(x,y,more);
});
G__12629.cljs$core$IFn$_invoke$arity$variadic = G__12629__delegate;
return G__12629;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT___1.call(this,x);
case 2:
return _LT___2.call(this,x,y);
default:
return _LT___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___3.cljs$lang$applyTo;
_LT_.cljs$core$IFn$_invoke$arity$1 = _LT___1;
_LT_.cljs$core$IFn$_invoke$arity$2 = _LT___2;
_LT_.cljs$core$IFn$_invoke$arity$variadic = _LT___3.cljs$core$IFn$_invoke$arity$variadic;
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___1 = (function (x){
return true;
});
var _LT__EQ___2 = (function (x,y){
return (x <= y);
});
var _LT__EQ___3 = (function() { 
var G__12634__delegate = function (x,y,more){
while(true){
if((x <= y)){
if(cljs.core.next(more)){
var G__12635 = y;
var G__12636 = cljs.core.first(more);
var G__12637 = cljs.core.next(more);
x = G__12635;
y = G__12636;
more = G__12637;
continue;
} else {
return (y <= cljs.core.first(more));
}
} else {
return false;
}
break;
}
};
var G__12634 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12634__delegate.call(this,x,y,more);};
G__12634.cljs$lang$maxFixedArity = 2;
G__12634.cljs$lang$applyTo = (function (arglist__12638){
var x = cljs.core.first(arglist__12638);
arglist__12638 = cljs.core.next(arglist__12638);
var y = cljs.core.first(arglist__12638);
var more = cljs.core.rest(arglist__12638);
return G__12634__delegate(x,y,more);
});
G__12634.cljs$core$IFn$_invoke$arity$variadic = G__12634__delegate;
return G__12634;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT__EQ___1.call(this,x);
case 2:
return _LT__EQ___2.call(this,x,y);
default:
return _LT__EQ___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___3.cljs$lang$applyTo;
_LT__EQ_.cljs$core$IFn$_invoke$arity$1 = _LT__EQ___1;
_LT__EQ_.cljs$core$IFn$_invoke$arity$2 = _LT__EQ___2;
_LT__EQ_.cljs$core$IFn$_invoke$arity$variadic = _LT__EQ___3.cljs$core$IFn$_invoke$arity$variadic;
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___1 = (function (x){
return true;
});
var _GT___2 = (function (x,y){
return (x > y);
});
var _GT___3 = (function() { 
var G__12639__delegate = function (x,y,more){
while(true){
if((x > y)){
if(cljs.core.next(more)){
var G__12640 = y;
var G__12641 = cljs.core.first(more);
var G__12642 = cljs.core.next(more);
x = G__12640;
y = G__12641;
more = G__12642;
continue;
} else {
return (y > cljs.core.first(more));
}
} else {
return false;
}
break;
}
};
var G__12639 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12639__delegate.call(this,x,y,more);};
G__12639.cljs$lang$maxFixedArity = 2;
G__12639.cljs$lang$applyTo = (function (arglist__12643){
var x = cljs.core.first(arglist__12643);
arglist__12643 = cljs.core.next(arglist__12643);
var y = cljs.core.first(arglist__12643);
var more = cljs.core.rest(arglist__12643);
return G__12639__delegate(x,y,more);
});
G__12639.cljs$core$IFn$_invoke$arity$variadic = G__12639__delegate;
return G__12639;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT___1.call(this,x);
case 2:
return _GT___2.call(this,x,y);
default:
return _GT___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___3.cljs$lang$applyTo;
_GT_.cljs$core$IFn$_invoke$arity$1 = _GT___1;
_GT_.cljs$core$IFn$_invoke$arity$2 = _GT___2;
_GT_.cljs$core$IFn$_invoke$arity$variadic = _GT___3.cljs$core$IFn$_invoke$arity$variadic;
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___1 = (function (x){
return true;
});
var _GT__EQ___2 = (function (x,y){
return (x >= y);
});
var _GT__EQ___3 = (function() { 
var G__12644__delegate = function (x,y,more){
while(true){
if((x >= y)){
if(cljs.core.next(more)){
var G__12645 = y;
var G__12646 = cljs.core.first(more);
var G__12647 = cljs.core.next(more);
x = G__12645;
y = G__12646;
more = G__12647;
continue;
} else {
return (y >= cljs.core.first(more));
}
} else {
return false;
}
break;
}
};
var G__12644 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12644__delegate.call(this,x,y,more);};
G__12644.cljs$lang$maxFixedArity = 2;
G__12644.cljs$lang$applyTo = (function (arglist__12648){
var x = cljs.core.first(arglist__12648);
arglist__12648 = cljs.core.next(arglist__12648);
var y = cljs.core.first(arglist__12648);
var more = cljs.core.rest(arglist__12648);
return G__12644__delegate(x,y,more);
});
G__12644.cljs$core$IFn$_invoke$arity$variadic = G__12644__delegate;
return G__12644;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT__EQ___1.call(this,x);
case 2:
return _GT__EQ___2.call(this,x,y);
default:
return _GT__EQ___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___3.cljs$lang$applyTo;
_GT__EQ_.cljs$core$IFn$_invoke$arity$1 = _GT__EQ___1;
_GT__EQ_.cljs$core$IFn$_invoke$arity$2 = _GT__EQ___2;
_GT__EQ_.cljs$core$IFn$_invoke$arity$variadic = _GT__EQ___3.cljs$core$IFn$_invoke$arity$variadic;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){
return (x - (1));
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__1 = (function (x){
return x;
});
var max__2 = (function (x,y){
var x__3955__auto__ = x;
var y__3956__auto__ = y;
return ((x__3955__auto__ > y__3956__auto__) ? x__3955__auto__ : y__3956__auto__);
});
var max__3 = (function() { 
var G__12649__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(max,(function (){var x__3955__auto__ = x;
var y__3956__auto__ = y;
return ((x__3955__auto__ > y__3956__auto__) ? x__3955__auto__ : y__3956__auto__);
})(),more);
};
var G__12649 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12649__delegate.call(this,x,y,more);};
G__12649.cljs$lang$maxFixedArity = 2;
G__12649.cljs$lang$applyTo = (function (arglist__12650){
var x = cljs.core.first(arglist__12650);
arglist__12650 = cljs.core.next(arglist__12650);
var y = cljs.core.first(arglist__12650);
var more = cljs.core.rest(arglist__12650);
return G__12649__delegate(x,y,more);
});
G__12649.cljs$core$IFn$_invoke$arity$variadic = G__12649__delegate;
return G__12649;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return max__1.call(this,x);
case 2:
return max__2.call(this,x,y);
default:
return max__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__3.cljs$lang$applyTo;
max.cljs$core$IFn$_invoke$arity$1 = max__1;
max.cljs$core$IFn$_invoke$arity$2 = max__2;
max.cljs$core$IFn$_invoke$arity$variadic = max__3.cljs$core$IFn$_invoke$arity$variadic;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__1 = (function (x){
return x;
});
var min__2 = (function (x,y){
var x__3962__auto__ = x;
var y__3963__auto__ = y;
return ((x__3962__auto__ < y__3963__auto__) ? x__3962__auto__ : y__3963__auto__);
});
var min__3 = (function() { 
var G__12651__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(min,(function (){var x__3962__auto__ = x;
var y__3963__auto__ = y;
return ((x__3962__auto__ < y__3963__auto__) ? x__3962__auto__ : y__3963__auto__);
})(),more);
};
var G__12651 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12651__delegate.call(this,x,y,more);};
G__12651.cljs$lang$maxFixedArity = 2;
G__12651.cljs$lang$applyTo = (function (arglist__12652){
var x = cljs.core.first(arglist__12652);
arglist__12652 = cljs.core.next(arglist__12652);
var y = cljs.core.first(arglist__12652);
var more = cljs.core.rest(arglist__12652);
return G__12651__delegate(x,y,more);
});
G__12651.cljs$core$IFn$_invoke$arity$variadic = G__12651__delegate;
return G__12651;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return min__1.call(this,x);
case 2:
return min__2.call(this,x,y);
default:
return min__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__3.cljs$lang$applyTo;
min.cljs$core$IFn$_invoke$arity$1 = min__1;
min.cljs$core$IFn$_invoke$arity$2 = min__2;
min.cljs$core$IFn$_invoke$arity$variadic = min__3.cljs$core$IFn$_invoke$arity$variadic;
return min;
})()
;
cljs.core.byte$ = (function byte$(x){
return x;
});
/**
* Coerce to char
*/
cljs.core.char$ = (function char$(x){
if(typeof x === 'number'){
return String.fromCharCode(x);
} else {
if((typeof x === 'string') && ((x.length === (1)))){
return x;
} else {
throw (new Error("Argument to char must be a character or number"));

}
}
});
cljs.core.short$ = (function short$(x){
return x;
});
cljs.core.float$ = (function float$(x){
return x;
});
cljs.core.double$ = (function double$(x){
return x;
});
cljs.core.unchecked_byte = (function unchecked_byte(x){
return x;
});
cljs.core.unchecked_char = (function unchecked_char(x){
return x;
});
cljs.core.unchecked_short = (function unchecked_short(x){
return x;
});
cljs.core.unchecked_float = (function unchecked_float(x){
return x;
});
cljs.core.unchecked_double = (function unchecked_double(x){
return x;
});
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core.unchecked_add = (function() {
var unchecked_add = null;
var unchecked_add__0 = (function (){
return (0);
});
var unchecked_add__1 = (function (x){
return x;
});
var unchecked_add__2 = (function (x,y){
return (x + y);
});
var unchecked_add__3 = (function() { 
var G__12653__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_add,(x + y),more);
};
var G__12653 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12653__delegate.call(this,x,y,more);};
G__12653.cljs$lang$maxFixedArity = 2;
G__12653.cljs$lang$applyTo = (function (arglist__12654){
var x = cljs.core.first(arglist__12654);
arglist__12654 = cljs.core.next(arglist__12654);
var y = cljs.core.first(arglist__12654);
var more = cljs.core.rest(arglist__12654);
return G__12653__delegate(x,y,more);
});
G__12653.cljs$core$IFn$_invoke$arity$variadic = G__12653__delegate;
return G__12653;
})()
;
unchecked_add = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return unchecked_add__0.call(this);
case 1:
return unchecked_add__1.call(this,x);
case 2:
return unchecked_add__2.call(this,x,y);
default:
return unchecked_add__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_add.cljs$lang$maxFixedArity = 2;
unchecked_add.cljs$lang$applyTo = unchecked_add__3.cljs$lang$applyTo;
unchecked_add.cljs$core$IFn$_invoke$arity$0 = unchecked_add__0;
unchecked_add.cljs$core$IFn$_invoke$arity$1 = unchecked_add__1;
unchecked_add.cljs$core$IFn$_invoke$arity$2 = unchecked_add__2;
unchecked_add.cljs$core$IFn$_invoke$arity$variadic = unchecked_add__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_add;
})()
;
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core.unchecked_add_int = (function() {
var unchecked_add_int = null;
var unchecked_add_int__0 = (function (){
return (0);
});
var unchecked_add_int__1 = (function (x){
return x;
});
var unchecked_add_int__2 = (function (x,y){
return (x + y);
});
var unchecked_add_int__3 = (function() { 
var G__12655__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_add_int,(x + y),more);
};
var G__12655 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12655__delegate.call(this,x,y,more);};
G__12655.cljs$lang$maxFixedArity = 2;
G__12655.cljs$lang$applyTo = (function (arglist__12656){
var x = cljs.core.first(arglist__12656);
arglist__12656 = cljs.core.next(arglist__12656);
var y = cljs.core.first(arglist__12656);
var more = cljs.core.rest(arglist__12656);
return G__12655__delegate(x,y,more);
});
G__12655.cljs$core$IFn$_invoke$arity$variadic = G__12655__delegate;
return G__12655;
})()
;
unchecked_add_int = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return unchecked_add_int__0.call(this);
case 1:
return unchecked_add_int__1.call(this,x);
case 2:
return unchecked_add_int__2.call(this,x,y);
default:
return unchecked_add_int__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_add_int.cljs$lang$maxFixedArity = 2;
unchecked_add_int.cljs$lang$applyTo = unchecked_add_int__3.cljs$lang$applyTo;
unchecked_add_int.cljs$core$IFn$_invoke$arity$0 = unchecked_add_int__0;
unchecked_add_int.cljs$core$IFn$_invoke$arity$1 = unchecked_add_int__1;
unchecked_add_int.cljs$core$IFn$_invoke$arity$2 = unchecked_add_int__2;
unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic = unchecked_add_int__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_add_int;
})()
;
cljs.core.unchecked_dec = (function unchecked_dec(x){
return (x - (1));
});
cljs.core.unchecked_dec_int = (function unchecked_dec_int(x){
return (x - (1));
});
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core.unchecked_divide_int = (function() {
var unchecked_divide_int = null;
var unchecked_divide_int__1 = (function (x){
return unchecked_divide_int.cljs$core$IFn$_invoke$arity$2((1),x);
});
var unchecked_divide_int__2 = (function (x,y){
return (x / y);
});
var unchecked_divide_int__3 = (function() { 
var G__12661__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_divide_int,unchecked_divide_int.cljs$core$IFn$_invoke$arity$2(x,y),more);
};
var G__12661 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12661__delegate.call(this,x,y,more);};
G__12661.cljs$lang$maxFixedArity = 2;
G__12661.cljs$lang$applyTo = (function (arglist__12662){
var x = cljs.core.first(arglist__12662);
arglist__12662 = cljs.core.next(arglist__12662);
var y = cljs.core.first(arglist__12662);
var more = cljs.core.rest(arglist__12662);
return G__12661__delegate(x,y,more);
});
G__12661.cljs$core$IFn$_invoke$arity$variadic = G__12661__delegate;
return G__12661;
})()
;
unchecked_divide_int = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return unchecked_divide_int__1.call(this,x);
case 2:
return unchecked_divide_int__2.call(this,x,y);
default:
return unchecked_divide_int__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_divide_int.cljs$lang$maxFixedArity = 2;
unchecked_divide_int.cljs$lang$applyTo = unchecked_divide_int__3.cljs$lang$applyTo;
unchecked_divide_int.cljs$core$IFn$_invoke$arity$1 = unchecked_divide_int__1;
unchecked_divide_int.cljs$core$IFn$_invoke$arity$2 = unchecked_divide_int__2;
unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic = unchecked_divide_int__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_divide_int;
})()
;
cljs.core.unchecked_inc = (function unchecked_inc(x){
return (x + (1));
});
cljs.core.unchecked_inc_int = (function unchecked_inc_int(x){
return (x + (1));
});
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core.unchecked_multiply = (function() {
var unchecked_multiply = null;
var unchecked_multiply__0 = (function (){
return (1);
});
var unchecked_multiply__1 = (function (x){
return x;
});
var unchecked_multiply__2 = (function (x,y){
return (x * y);
});
var unchecked_multiply__3 = (function() { 
var G__12663__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_multiply,(x * y),more);
};
var G__12663 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12663__delegate.call(this,x,y,more);};
G__12663.cljs$lang$maxFixedArity = 2;
G__12663.cljs$lang$applyTo = (function (arglist__12664){
var x = cljs.core.first(arglist__12664);
arglist__12664 = cljs.core.next(arglist__12664);
var y = cljs.core.first(arglist__12664);
var more = cljs.core.rest(arglist__12664);
return G__12663__delegate(x,y,more);
});
G__12663.cljs$core$IFn$_invoke$arity$variadic = G__12663__delegate;
return G__12663;
})()
;
unchecked_multiply = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return unchecked_multiply__0.call(this);
case 1:
return unchecked_multiply__1.call(this,x);
case 2:
return unchecked_multiply__2.call(this,x,y);
default:
return unchecked_multiply__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_multiply.cljs$lang$maxFixedArity = 2;
unchecked_multiply.cljs$lang$applyTo = unchecked_multiply__3.cljs$lang$applyTo;
unchecked_multiply.cljs$core$IFn$_invoke$arity$0 = unchecked_multiply__0;
unchecked_multiply.cljs$core$IFn$_invoke$arity$1 = unchecked_multiply__1;
unchecked_multiply.cljs$core$IFn$_invoke$arity$2 = unchecked_multiply__2;
unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic = unchecked_multiply__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_multiply;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core.unchecked_multiply_int = (function() {
var unchecked_multiply_int = null;
var unchecked_multiply_int__0 = (function (){
return (1);
});
var unchecked_multiply_int__1 = (function (x){
return x;
});
var unchecked_multiply_int__2 = (function (x,y){
return (x * y);
});
var unchecked_multiply_int__3 = (function() { 
var G__12665__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_multiply_int,(x * y),more);
};
var G__12665 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12665__delegate.call(this,x,y,more);};
G__12665.cljs$lang$maxFixedArity = 2;
G__12665.cljs$lang$applyTo = (function (arglist__12666){
var x = cljs.core.first(arglist__12666);
arglist__12666 = cljs.core.next(arglist__12666);
var y = cljs.core.first(arglist__12666);
var more = cljs.core.rest(arglist__12666);
return G__12665__delegate(x,y,more);
});
G__12665.cljs$core$IFn$_invoke$arity$variadic = G__12665__delegate;
return G__12665;
})()
;
unchecked_multiply_int = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return unchecked_multiply_int__0.call(this);
case 1:
return unchecked_multiply_int__1.call(this,x);
case 2:
return unchecked_multiply_int__2.call(this,x,y);
default:
return unchecked_multiply_int__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_multiply_int.cljs$lang$maxFixedArity = 2;
unchecked_multiply_int.cljs$lang$applyTo = unchecked_multiply_int__3.cljs$lang$applyTo;
unchecked_multiply_int.cljs$core$IFn$_invoke$arity$0 = unchecked_multiply_int__0;
unchecked_multiply_int.cljs$core$IFn$_invoke$arity$1 = unchecked_multiply_int__1;
unchecked_multiply_int.cljs$core$IFn$_invoke$arity$2 = unchecked_multiply_int__2;
unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic = unchecked_multiply_int__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_multiply_int;
})()
;
cljs.core.unchecked_negate = (function unchecked_negate(x){
return (- x);
});
cljs.core.unchecked_negate_int = (function unchecked_negate_int(x){
return (- x);
});
cljs.core.unchecked_remainder_int = (function unchecked_remainder_int(x,n){
var G__12669 = x;
var G__12670 = n;
return (cljs.core.mod.cljs$core$IFn$_invoke$arity$2 ? cljs.core.mod.cljs$core$IFn$_invoke$arity$2(G__12669,G__12670) : cljs.core.mod.call(null,G__12669,G__12670));
});
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core.unchecked_subtract = (function() {
var unchecked_subtract = null;
var unchecked_subtract__1 = (function (x){
return (- x);
});
var unchecked_subtract__2 = (function (x,y){
return (x - y);
});
var unchecked_subtract__3 = (function() { 
var G__12671__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_subtract,(x - y),more);
};
var G__12671 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12671__delegate.call(this,x,y,more);};
G__12671.cljs$lang$maxFixedArity = 2;
G__12671.cljs$lang$applyTo = (function (arglist__12672){
var x = cljs.core.first(arglist__12672);
arglist__12672 = cljs.core.next(arglist__12672);
var y = cljs.core.first(arglist__12672);
var more = cljs.core.rest(arglist__12672);
return G__12671__delegate(x,y,more);
});
G__12671.cljs$core$IFn$_invoke$arity$variadic = G__12671__delegate;
return G__12671;
})()
;
unchecked_subtract = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return unchecked_subtract__1.call(this,x);
case 2:
return unchecked_subtract__2.call(this,x,y);
default:
return unchecked_subtract__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_subtract.cljs$lang$maxFixedArity = 2;
unchecked_subtract.cljs$lang$applyTo = unchecked_subtract__3.cljs$lang$applyTo;
unchecked_subtract.cljs$core$IFn$_invoke$arity$1 = unchecked_subtract__1;
unchecked_subtract.cljs$core$IFn$_invoke$arity$2 = unchecked_subtract__2;
unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic = unchecked_subtract__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_subtract;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core.unchecked_subtract_int = (function() {
var unchecked_subtract_int = null;
var unchecked_subtract_int__1 = (function (x){
return (- x);
});
var unchecked_subtract_int__2 = (function (x,y){
return (x - y);
});
var unchecked_subtract_int__3 = (function() { 
var G__12673__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_subtract_int,(x - y),more);
};
var G__12673 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12673__delegate.call(this,x,y,more);};
G__12673.cljs$lang$maxFixedArity = 2;
G__12673.cljs$lang$applyTo = (function (arglist__12674){
var x = cljs.core.first(arglist__12674);
arglist__12674 = cljs.core.next(arglist__12674);
var y = cljs.core.first(arglist__12674);
var more = cljs.core.rest(arglist__12674);
return G__12673__delegate(x,y,more);
});
G__12673.cljs$core$IFn$_invoke$arity$variadic = G__12673__delegate;
return G__12673;
})()
;
unchecked_subtract_int = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return unchecked_subtract_int__1.call(this,x);
case 2:
return unchecked_subtract_int__2.call(this,x,y);
default:
return unchecked_subtract_int__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_subtract_int.cljs$lang$maxFixedArity = 2;
unchecked_subtract_int.cljs$lang$applyTo = unchecked_subtract_int__3.cljs$lang$applyTo;
unchecked_subtract_int.cljs$core$IFn$_invoke$arity$1 = unchecked_subtract_int__1;
unchecked_subtract_int.cljs$core$IFn$_invoke$arity$2 = unchecked_subtract_int__2;
unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic = unchecked_subtract_int__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_subtract_int;
})()
;
cljs.core.fix = (function fix(q){
if((q >= (0))){
var G__12677 = q;
return (Math.floor.cljs$core$IFn$_invoke$arity$1 ? Math.floor.cljs$core$IFn$_invoke$arity$1(G__12677) : Math.floor.call(null,G__12677));
} else {
var G__12678 = q;
return (Math.ceil.cljs$core$IFn$_invoke$arity$1 ? Math.ceil.cljs$core$IFn$_invoke$arity$1(G__12678) : Math.ceil.call(null,G__12678));
}
});
/**
* Coerce to int by stripping decimal places.
*/
cljs.core.int$ = (function int$(x){
return (x | (0));
});
/**
* Coerce to int by stripping decimal places.
*/
cljs.core.unchecked_int = (function unchecked_int(x){
return cljs.core.fix(x);
});
/**
* Coerce to long by stripping decimal places. Identical to `int'.
*/
cljs.core.long$ = (function long$(x){
return cljs.core.fix(x);
});
/**
* Coerce to long by stripping decimal places. Identical to `int'.
*/
cljs.core.unchecked_long = (function unchecked_long(x){
return cljs.core.fix(x);
});
cljs.core.booleans = (function booleans(x){
return x;
});
cljs.core.bytes = (function bytes(x){
return x;
});
cljs.core.chars = (function chars(x){
return x;
});
cljs.core.shorts = (function shorts(x){
return x;
});
cljs.core.ints = (function ints(x){
return x;
});
cljs.core.floats = (function floats(x){
return x;
});
cljs.core.doubles = (function doubles(x){
return x;
});
cljs.core.longs = (function longs(x){
return x;
});
/**
* Modulus of num and div with original javascript behavior. i.e. bug for negative numbers
*/
cljs.core.js_mod = (function js_mod(n,d){
return (n % d);
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){
return (((n % d) + d) % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){
var rem = (n % d);
return cljs.core.fix(((n - rem) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q = cljs.core.quot(n,d);
return (n - (d * q));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){
return (Math.random.cljs$core$IFn$_invoke$arity$0 ? Math.random.cljs$core$IFn$_invoke$arity$0() : Math.random.call(null));
});
var rand__1 = (function (n){
return (n * rand.cljs$core$IFn$_invoke$arity$0());
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rand.cljs$core$IFn$_invoke$arity$0 = rand__0;
rand.cljs$core$IFn$_invoke$arity$1 = rand__1;
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return cljs.core.fix(cljs.core.rand.cljs$core$IFn$_invoke$arity$1(n));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){
return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){
return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){
return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){
return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){
return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){
return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){
return (~ x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){
return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){
return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){
return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){
return (x >> n);
});
/**
* DEPRECATED: Bitwise shift right with zero fill
*/
cljs.core.bit_shift_right_zero_fill = (function bit_shift_right_zero_fill(x,n){
return (x >>> n);
});
/**
* Bitwise shift right with zero fill
*/
cljs.core.unsigned_bit_shift_right = (function unsigned_bit_shift_right(x,n){
return (x >>> n);
});
/**
* Counts the number of bits set in n
*/
cljs.core.bit_count = (function bit_count(v){
var v__$1 = (v - ((v >> (1)) & (1431655765)));
var v__$2 = ((v__$1 & (858993459)) + ((v__$1 >> (2)) & (858993459)));
return ((((v__$2 + (v__$2 >> (4))) & (252645135)) * (16843009)) >> (24));
});
/**
* Returns non-nil if nums all have the equivalent
* value, otherwise false. Behavior on non nums is
* undefined.
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___1 = (function (x){
return true;
});
var _EQ__EQ___2 = (function (x,y){
return cljs.core._equiv(x,y);
});
var _EQ__EQ___3 = (function() { 
var G__12683__delegate = function (x,y,more){
while(true){
if(_EQ__EQ_.cljs$core$IFn$_invoke$arity$2(x,y)){
if(cljs.core.next(more)){
var G__12684 = y;
var G__12685 = cljs.core.first(more);
var G__12686 = cljs.core.next(more);
x = G__12684;
y = G__12685;
more = G__12686;
continue;
} else {
return _EQ__EQ_.cljs$core$IFn$_invoke$arity$2(y,cljs.core.first(more));
}
} else {
return false;
}
break;
}
};
var G__12683 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12683__delegate.call(this,x,y,more);};
G__12683.cljs$lang$maxFixedArity = 2;
G__12683.cljs$lang$applyTo = (function (arglist__12687){
var x = cljs.core.first(arglist__12687);
arglist__12687 = cljs.core.next(arglist__12687);
var y = cljs.core.first(arglist__12687);
var more = cljs.core.rest(arglist__12687);
return G__12683__delegate(x,y,more);
});
G__12683.cljs$core$IFn$_invoke$arity$variadic = G__12683__delegate;
return G__12683;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ__EQ___1.call(this,x);
case 2:
return _EQ__EQ___2.call(this,x,y);
default:
return _EQ__EQ___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___3.cljs$lang$applyTo;
_EQ__EQ_.cljs$core$IFn$_invoke$arity$1 = _EQ__EQ___1;
_EQ__EQ_.cljs$core$IFn$_invoke$arity$2 = _EQ__EQ___2;
_EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic = _EQ__EQ___3.cljs$core$IFn$_invoke$arity$variadic;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){
return (n > (0));
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){
return (n === (0));
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){
return (x < (0));
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){
var n__$1 = n;
var xs = cljs.core.seq(coll);
while(true){
if((xs) && ((n__$1 > (0)))){
var G__12688 = (n__$1 - (1));
var G__12689 = cljs.core.next(xs);
n__$1 = G__12688;
xs = G__12689;
continue;
} else {
return xs;
}
break;
}
});
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__0 = (function (){
return "";
});
var str__1 = (function (x){
if((x == null)){
return "";
} else {
var G__12693 = x;
return goog.string.buildString(G__12693);
}
});
var str__2 = (function() { 
var G__12694__delegate = function (x,ys){
var sb = (new goog.string.StringBuffer(str.cljs$core$IFn$_invoke$arity$1(x)));
var more = ys;
while(true){
if(cljs.core.truth_(more)){
var G__12695 = sb.append(str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(more)));
var G__12696 = cljs.core.next(more);
sb = G__12695;
more = G__12696;
continue;
} else {
return sb.toString();
}
break;
}
};
var G__12694 = function (x,var_args){
var ys = null;
if (arguments.length > 1) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12694__delegate.call(this,x,ys);};
G__12694.cljs$lang$maxFixedArity = 1;
G__12694.cljs$lang$applyTo = (function (arglist__12697){
var x = cljs.core.first(arglist__12697);
var ys = cljs.core.rest(arglist__12697);
return G__12694__delegate(x,ys);
});
G__12694.cljs$core$IFn$_invoke$arity$variadic = G__12694__delegate;
return G__12694;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case 0:
return str__0.call(this);
case 1:
return str__1.call(this,x);
default:
return str__2.cljs$core$IFn$_invoke$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__2.cljs$lang$applyTo;
str.cljs$core$IFn$_invoke$arity$0 = str__0;
str.cljs$core$IFn$_invoke$arity$1 = str__1;
str.cljs$core$IFn$_invoke$arity$variadic = str__2.cljs$core$IFn$_invoke$arity$variadic;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__2 = (function (s,start){
return s.substring(start);
});
var subs__3 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case 2:
return subs__2.call(this,s,start);
case 3:
return subs__3.call(this,s,start,end);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
subs.cljs$core$IFn$_invoke$arity$2 = subs__2;
subs.cljs$core$IFn$_invoke$arity$3 = subs__3;
return subs;
})()
;

/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){
return cljs.core.boolean$(((cljs.core.sequential_QMARK_(y))?(((cljs.core.counted_QMARK_(x)) && (cljs.core.counted_QMARK_(y)) && (!((cljs.core.count(x) === cljs.core.count(y)))))?false:(function (){var xs = cljs.core.seq(x);
var ys = cljs.core.seq(y);
while(true){
if((xs == null)){
return (ys == null);
} else {
if((ys == null)){
return false;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(xs),cljs.core.first(ys))){
var G__12698 = cljs.core.next(xs);
var G__12699 = cljs.core.next(ys);
xs = G__12698;
ys = G__12699;
continue;
} else {
return false;

}
}
}
break;
}
})()):null));
});
cljs.core.hash_coll = (function hash_coll(coll){
if(cljs.core.seq(coll)){
var res = cljs.core.hash(cljs.core.first(coll));
var s = cljs.core.next(coll);
while(true){
if((s == null)){
return res;
} else {
var G__12700 = cljs.core.hash_combine(res,cljs.core.hash(cljs.core.first(s)));
var G__12701 = cljs.core.next(s);
res = G__12700;
s = G__12701;
continue;
}
break;
}
} else {
return (0);
}
});

cljs.core.hash_imap = (function hash_imap(m){
var h = (0);
var s = cljs.core.seq(m);
while(true){
if(s){
var e = cljs.core.first(s);
var G__12706 = ((h + (cljs.core.hash((function (){var G__12704 = e;
return (cljs.core.key.cljs$core$IFn$_invoke$arity$1 ? cljs.core.key.cljs$core$IFn$_invoke$arity$1(G__12704) : cljs.core.key.call(null,G__12704));
})()) ^ cljs.core.hash((function (){var G__12705 = e;
return (cljs.core.val.cljs$core$IFn$_invoke$arity$1 ? cljs.core.val.cljs$core$IFn$_invoke$arity$1(G__12705) : cljs.core.val.call(null,G__12705));
})()))) % (4503599627370496));
var G__12707 = cljs.core.next(s);
h = G__12706;
s = G__12707;
continue;
} else {
return h;
}
break;
}
});
cljs.core.hash_iset = (function hash_iset(s){
var h = (0);
var s__$1 = cljs.core.seq(s);
while(true){
if(s__$1){
var e = cljs.core.first(s__$1);
var G__12708 = ((h + cljs.core.hash(e)) % (4503599627370496));
var G__12709 = cljs.core.next(s__$1);
h = G__12708;
s__$1 = G__12709;
continue;
} else {
return h;
}
break;
}
});


/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var seq__12720_12730 = cljs.core.seq(fn_map);
var chunk__12721_12731 = null;
var count__12722_12732 = (0);
var i__12723_12733 = (0);
while(true){
if((i__12723_12733 < count__12722_12732)){
var vec__12724_12734 = chunk__12721_12731.cljs$core$IIndexed$_nth$arity$2(null,i__12723_12733);
var key_name_12735 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12724_12734,(0),null);
var f_12736 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12724_12734,(1),null);
var str_name_12737 = (function (){var G__12725 = key_name_12735;
return (cljs.core.name.cljs$core$IFn$_invoke$arity$1 ? cljs.core.name.cljs$core$IFn$_invoke$arity$1(G__12725) : cljs.core.name.call(null,G__12725));
})();
(obj[str_name_12737] = f_12736);

var G__12738 = seq__12720_12730;
var G__12739 = chunk__12721_12731;
var G__12740 = count__12722_12732;
var G__12741 = (i__12723_12733 + (1));
seq__12720_12730 = G__12738;
chunk__12721_12731 = G__12739;
count__12722_12732 = G__12740;
i__12723_12733 = G__12741;
continue;
} else {
var temp__4126__auto___12742 = cljs.core.seq(seq__12720_12730);
if(temp__4126__auto___12742){
var seq__12720_12743__$1 = temp__4126__auto___12742;
if(cljs.core.chunked_seq_QMARK_(seq__12720_12743__$1)){
var c__4425__auto___12744 = (function (){var G__12726 = seq__12720_12743__$1;
return (cljs.core.chunk_first.cljs$core$IFn$_invoke$arity$1 ? cljs.core.chunk_first.cljs$core$IFn$_invoke$arity$1(G__12726) : cljs.core.chunk_first.call(null,G__12726));
})();
var G__12745 = (function (){var G__12727 = seq__12720_12743__$1;
return (cljs.core.chunk_rest.cljs$core$IFn$_invoke$arity$1 ? cljs.core.chunk_rest.cljs$core$IFn$_invoke$arity$1(G__12727) : cljs.core.chunk_rest.call(null,G__12727));
})();
var G__12746 = c__4425__auto___12744;
var G__12747 = cljs.core.count(c__4425__auto___12744);
var G__12748 = (0);
seq__12720_12730 = G__12745;
chunk__12721_12731 = G__12746;
count__12722_12732 = G__12747;
i__12723_12733 = G__12748;
continue;
} else {
var vec__12728_12749 = cljs.core.first(seq__12720_12743__$1);
var key_name_12750 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12728_12749,(0),null);
var f_12751 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12728_12749,(1),null);
var str_name_12752 = (function (){var G__12729 = key_name_12750;
return (cljs.core.name.cljs$core$IFn$_invoke$arity$1 ? cljs.core.name.cljs$core$IFn$_invoke$arity$1(G__12729) : cljs.core.name.call(null,G__12729));
})();
(obj[str_name_12752] = f_12751);

var G__12753 = cljs.core.next(seq__12720_12743__$1);
var G__12754 = null;
var G__12755 = (0);
var G__12756 = (0);
seq__12720_12730 = G__12753;
chunk__12721_12731 = G__12754;
count__12722_12732 = G__12755;
i__12723_12733 = G__12756;
continue;
}
} else {
}
}
break;
}

return obj;
});

/**
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 65937646;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.List.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.List.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.List.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.List(self__.meta,self__.first,self__.rest,self__.count,self__.__hash));
});

cljs.core.List.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.count === (1))){
return null;
} else {
return self__.rest;
}
});

cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.count;
});

cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.first;
});

cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core._rest(coll__$1);
});

cljs.core.List.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4059__auto__ = self__.__hash;
if(!((h__4059__auto__ == null))){
return h__4059__auto__;
} else {
var h__4059__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__4059__auto____$1;

return h__4059__auto____$1;
}
});

cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core._with_meta(cljs.core.List.EMPTY,self__.meta);
});

cljs.core.List.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});

cljs.core.List.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});

cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.first;
});

cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.count === (1))){
return cljs.core.List.EMPTY;
} else {
return self__.rest;
}
});

cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return coll__$1;
});

cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.List(meta__$1,self__.first,self__.rest,self__.count,self__.__hash));
});

cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.List(self__.meta,o,coll__$1,(self__.count + (1)),null));
});

cljs.core.List.cljs$lang$type = true;

cljs.core.List.cljs$lang$ctorStr = "cljs.core/List";

cljs.core.List.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write(writer__4226__auto__,"cljs.core/List");
});

cljs.core.__GT_List = (function __GT_List(meta,first,rest,count,__hash){
return (new cljs.core.List(meta,first,rest,count,__hash));
});

(cljs.core.List.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4616__auto__ = this;
return cljs.core.es6_iterator(this__4616__auto__);
}));

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
this.cljs$lang$protocol_mask$partition0$ = 65937614;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.EmptyList.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.EmptyList.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.EmptyList.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.EmptyList(self__.meta));
});

cljs.core.EmptyList.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return null;
});

cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (0);
});

cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return null;
});

cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
throw (new Error("Can't pop empty list"));
});

cljs.core.EmptyList.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (0);
});

cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return coll__$1;
});

cljs.core.EmptyList.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});

cljs.core.EmptyList.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});

cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return null;
});

cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.List.EMPTY;
});

cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return null;
});

cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.EmptyList(meta__$1));
});

cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.List(self__.meta,o,null,(1),null));
});

cljs.core.EmptyList.cljs$lang$type = true;

cljs.core.EmptyList.cljs$lang$ctorStr = "cljs.core/EmptyList";

cljs.core.EmptyList.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write(writer__4226__auto__,"cljs.core/EmptyList");
});

cljs.core.__GT_EmptyList = (function __GT_EmptyList(meta){
return (new cljs.core.EmptyList(meta));
});

cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
(cljs.core.EmptyList.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4616__auto__ = this;
return cljs.core.es6_iterator(this__4616__auto__);
}));
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){
var G__12758 = coll;
if(G__12758){
var bit__4319__auto__ = (G__12758.cljs$lang$protocol_mask$partition0$ & (134217728));
if((bit__4319__auto__) || (G__12758.cljs$core$IReversible$)){
return true;
} else {
if((!G__12758.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IReversible,G__12758);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IReversible,G__12758);
}
});
cljs.core.rseq = (function rseq(coll){
return cljs.core._rseq(coll);
});
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){
if(cljs.core.reversible_QMARK_(coll)){
return cljs.core.rseq(coll);
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.List.EMPTY,coll);
}
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() { 
var list__delegate = function (xs){
var arr = ((((xs instanceof cljs.core.IndexedSeq)) && ((xs.i === (0))))?xs.arr:(function (){var arr = [];
var xs__$1 = xs;
while(true){
if(!((xs__$1 == null))){
arr.push(xs__$1.cljs$core$ISeq$_first$arity$1(null));

var G__12759 = xs__$1.cljs$core$INext$_next$arity$1(null);
xs__$1 = G__12759;
continue;
} else {
return arr;
}
break;
}
})());
var i = arr.length;
var r = cljs.core.List.EMPTY;
while(true){
if((i > (0))){
var G__12760 = (i - (1));
var G__12761 = r.cljs$core$ICollection$_conj$arity$2(null,(arr[(i - (1))]));
i = G__12760;
r = G__12761;
continue;
} else {
return r;
}
break;
}
};
var list = function (var_args){
var xs = null;
if (arguments.length > 0) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return list__delegate.call(this,xs);};
list.cljs$lang$maxFixedArity = 0;
list.cljs$lang$applyTo = (function (arglist__12762){
var xs = cljs.core.seq(arglist__12762);
return list__delegate(xs);
});
list.cljs$core$IFn$_invoke$arity$variadic = list__delegate;
return list;
})()
;

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 65929452;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.Cons.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.Cons.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.Cons.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.Cons(self__.meta,self__.first,self__.rest,self__.__hash));
});

cljs.core.Cons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.rest == null)){
return null;
} else {
return cljs.core.seq(self__.rest);
}
});

cljs.core.Cons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4059__auto__ = self__.__hash;
if(!((h__4059__auto__ == null))){
return h__4059__auto__;
} else {
var h__4059__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__4059__auto____$1;

return h__4059__auto____$1;
}
});

cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});

cljs.core.Cons.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});

cljs.core.Cons.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});

cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.first;
});

cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.rest == null)){
return cljs.core.List.EMPTY;
} else {
return self__.rest;
}
});

cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return coll__$1;
});

cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.Cons(meta__$1,self__.first,self__.rest,self__.__hash));
});

cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.Cons(null,o,coll__$1,self__.__hash));
});

cljs.core.Cons.cljs$lang$type = true;

cljs.core.Cons.cljs$lang$ctorStr = "cljs.core/Cons";

cljs.core.Cons.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write(writer__4226__auto__,"cljs.core/Cons");
});

cljs.core.__GT_Cons = (function __GT_Cons(meta,first,rest,__hash){
return (new cljs.core.Cons(meta,first,rest,__hash));
});

(cljs.core.Cons.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4616__auto__ = this;
return cljs.core.es6_iterator(this__4616__auto__);
}));
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,coll){
if((function (){var or__3638__auto__ = (coll == null);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var G__12766 = coll;
if(G__12766){
var bit__4312__auto__ = (G__12766.cljs$lang$protocol_mask$partition0$ & (64));
if((bit__4312__auto__) || (G__12766.cljs$core$ISeq$)){
return true;
} else {
return false;
}
} else {
return false;
}
}
})()){
return (new cljs.core.Cons(null,x,coll,null));
} else {
return (new cljs.core.Cons(null,x,cljs.core.seq(coll),null));
}
});
cljs.core.list_QMARK_ = (function list_QMARK_(x){
var G__12768 = x;
if(G__12768){
var bit__4319__auto__ = (G__12768.cljs$lang$protocol_mask$partition0$ & (33554432));
if((bit__4319__auto__) || (G__12768.cljs$core$IList$)){
return true;
} else {
if((!G__12768.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IList,G__12768);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IList,G__12768);
}
});
cljs.core.hash_keyword = (function hash_keyword(k){
return ((cljs.core.hash_symbol(k) + (2654435769)) | (0));
});
cljs.core.compare_keywords = (function compare_keywords(a,b){
if((a.fqn === b.fqn)){
return (0);
} else {
if(cljs.core.truth_((function (){var and__3626__auto__ = cljs.core.not(a.ns);
if(and__3626__auto__){
return b.ns;
} else {
return and__3626__auto__;
}
})())){
return (-1);
} else {
if(cljs.core.truth_(a.ns)){
if(cljs.core.not(b.ns)){
return (1);
} else {
var nsc = (function (){var G__12775 = a.ns;
var G__12776 = b.ns;
return goog.array.defaultCompare(G__12775,G__12776);
})();
if(((0) === nsc)){
var G__12777 = a.name;
var G__12778 = b.name;
return goog.array.defaultCompare(G__12777,G__12778);
} else {
return nsc;
}
}
} else {
var G__12779 = a.name;
var G__12780 = b.name;
return goog.array.defaultCompare(G__12779,G__12780);

}
}
}
});

/**
* @constructor
*/
cljs.core.Keyword = (function (ns,name,fqn,_hash){
this.ns = ns;
this.name = name;
this.fqn = fqn;
this._hash = _hash;
this.cljs$lang$protocol_mask$partition0$ = 2153775105;
this.cljs$lang$protocol_mask$partition1$ = 4096;
})
cljs.core.Keyword.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (o,writer,_){
var self__ = this;
var o__$1 = this;
return cljs.core._write(writer,[cljs.core.str(":"),cljs.core.str(self__.fqn)].join(''));
});

cljs.core.Keyword.prototype.cljs$core$INamed$_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.name;
});

cljs.core.Keyword.prototype.cljs$core$INamed$_namespace$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ns;
});

cljs.core.Keyword.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var h__4059__auto__ = self__._hash;
if(!((h__4059__auto__ == null))){
return h__4059__auto__;
} else {
var h__4059__auto____$1 = cljs.core.hash_keyword(this$__$1);
self__._hash = h__4059__auto____$1;

return h__4059__auto____$1;
}
});

cljs.core.Keyword.prototype.call = (function() {
var G__12782 = null;
var G__12782__2 = (function (self__,coll){
var self__ = this;
var self____$1 = this;
var kw = self____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(coll,kw);
});
var G__12782__3 = (function (self__,coll,not_found){
var self__ = this;
var self____$1 = this;
var kw = self____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(coll,kw,not_found);
});
G__12782 = function(self__,coll,not_found){
switch(arguments.length){
case 2:
return G__12782__2.call(this,self__,coll);
case 3:
return G__12782__3.call(this,self__,coll,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12782.cljs$core$IFn$_invoke$arity$2 = G__12782__2;
G__12782.cljs$core$IFn$_invoke$arity$3 = G__12782__3;
return G__12782;
})()
;

cljs.core.Keyword.prototype.apply = (function (self__,args12781){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args12781)));
});

cljs.core.Keyword.prototype.cljs$core$IFn$_invoke$arity$1 = (function (coll){
var self__ = this;
var kw = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(coll,kw);
});

cljs.core.Keyword.prototype.cljs$core$IFn$_invoke$arity$2 = (function (coll,not_found){
var self__ = this;
var kw = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(coll,kw,not_found);
});

cljs.core.Keyword.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if((other instanceof cljs.core.Keyword)){
return (self__.fqn === other.fqn);
} else {
return false;
}
});

cljs.core.Keyword.prototype.toString = (function (){
var self__ = this;
var _ = this;
return [cljs.core.str(":"),cljs.core.str(self__.fqn)].join('');
});

cljs.core.Keyword.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.Keyword.cljs$lang$type = true;

cljs.core.Keyword.cljs$lang$ctorStr = "cljs.core/Keyword";

cljs.core.Keyword.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write(writer__4226__auto__,"cljs.core/Keyword");
});

cljs.core.__GT_Keyword = (function __GT_Keyword(ns,name,fqn,_hash){
return (new cljs.core.Keyword(ns,name,fqn,_hash));
});

cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
return (x instanceof cljs.core.Keyword);
});
cljs.core.keyword_identical_QMARK_ = (function keyword_identical_QMARK_(x,y){
if((x === y)){
return true;
} else {
if(((x instanceof cljs.core.Keyword)) && ((y instanceof cljs.core.Keyword))){
return (x.fqn === y.fqn);
} else {
return false;
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){
if((function (){var G__12784 = x;
if(G__12784){
var bit__4312__auto__ = (G__12784.cljs$lang$protocol_mask$partition1$ & (4096));
if((bit__4312__auto__) || (G__12784.cljs$core$INamed$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return x.cljs$core$INamed$_namespace$arity$1(null);
} else {
throw (new Error([cljs.core.str("Doesn't support namespace: "),cljs.core.str(x)].join('')));
}
});
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__1 = (function (name){
if((name instanceof cljs.core.Keyword)){
return name;
} else {
if((name instanceof cljs.core.Symbol)){
return (new cljs.core.Keyword(cljs.core.namespace(name),(function (){var G__12786 = name;
return (cljs.core.name.cljs$core$IFn$_invoke$arity$1 ? cljs.core.name.cljs$core$IFn$_invoke$arity$1(G__12786) : cljs.core.name.call(null,G__12786));
})(),name.str,null));
} else {
if(typeof name === 'string'){
var parts = name.split("/");
if((parts.length === (2))){
return (new cljs.core.Keyword((parts[(0)]),(parts[(1)]),name,null));
} else {
return (new cljs.core.Keyword(null,(parts[(0)]),name,null));
}
} else {
return null;
}
}
}
});
var keyword__2 = (function (ns,name){
return (new cljs.core.Keyword(ns,name,[cljs.core.str((cljs.core.truth_(ns)?[cljs.core.str(ns),cljs.core.str("/")].join(''):null)),cljs.core.str(name)].join(''),null));
});
keyword = function(ns,name){
switch(arguments.length){
case 1:
return keyword__1.call(this,ns);
case 2:
return keyword__2.call(this,ns,name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
keyword.cljs$core$IFn$_invoke$arity$1 = keyword__1;
keyword.cljs$core$IFn$_invoke$arity$2 = keyword__2;
return keyword;
})()
;

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,fn,s,__hash){
this.meta = meta;
this.fn = fn;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32374988;
})
cljs.core.LazySeq.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.LazySeq.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.LazySeq.prototype.sval = (function (){
var self__ = this;
var coll = this;
if((self__.fn == null)){
return self__.s;
} else {
self__.s = (function (){return (self__.fn.cljs$core$IFn$_invoke$arity$0 ? self__.fn.cljs$core$IFn$_invoke$arity$0() : self__.fn.call(null));
})();

self__.fn = null;

return self__.s;
}
});

cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.LazySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
cljs.core._seq(coll__$1);

if((self__.s == null)){
return null;
} else {
return cljs.core.next(self__.s);
}
});

cljs.core.LazySeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4059__auto__ = self__.__hash;
if(!((h__4059__auto__ == null))){
return h__4059__auto__;
} else {
var h__4059__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__4059__auto____$1;

return h__4059__auto____$1;
}
});

cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});

cljs.core.LazySeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});

cljs.core.LazySeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});

cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
cljs.core._seq(coll__$1);

if((self__.s == null)){
return null;
} else {
return cljs.core.first(self__.s);
}
});

cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
cljs.core._seq(coll__$1);

if(!((self__.s == null))){
return cljs.core.rest(self__.s);
} else {
return cljs.core.List.EMPTY;
}
});

cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
coll__$1.sval();

if((self__.s == null)){
return null;
} else {
var ls = self__.s;
while(true){
if((ls instanceof cljs.core.LazySeq)){
var G__12787 = ls.sval();
ls = G__12787;
continue;
} else {
self__.s = ls;

return cljs.core.seq(self__.s);
}
break;
}
}
});

cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.LazySeq(meta__$1,self__.fn,self__.s,self__.__hash));
});

cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return cljs.core.cons(o,coll__$1);
});

cljs.core.LazySeq.cljs$lang$type = true;

cljs.core.LazySeq.cljs$lang$ctorStr = "cljs.core/LazySeq";

cljs.core.LazySeq.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write(writer__4226__auto__,"cljs.core/LazySeq");
});

cljs.core.__GT_LazySeq = (function __GT_LazySeq(meta,fn,s,__hash){
return (new cljs.core.LazySeq(meta,fn,s,__hash));
});

(cljs.core.LazySeq.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4616__auto__ = this;
return cljs.core.es6_iterator(this__4616__auto__);
}));

/**
* @constructor
*/
cljs.core.ChunkBuffer = (function (buf,end){
this.buf = buf;
this.end = end;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2;
})
cljs.core.ChunkBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.end;
});

cljs.core.ChunkBuffer.prototype.add = (function (o){
var self__ = this;
var _ = this;
(self__.buf[self__.end] = o);

return self__.end = (self__.end + (1));
});

cljs.core.ChunkBuffer.prototype.chunk = (function (o){
var self__ = this;
var _ = this;
var ret = (new cljs.core.ArrayChunk(self__.buf,(0),self__.end));
self__.buf = null;

return ret;
});

cljs.core.ChunkBuffer.cljs$lang$type = true;

cljs.core.ChunkBuffer.cljs$lang$ctorStr = "cljs.core/ChunkBuffer";

cljs.core.ChunkBuffer.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write(writer__4226__auto__,"cljs.core/ChunkBuffer");
});

cljs.core.__GT_ChunkBuffer = (function __GT_ChunkBuffer(buf,end){
return (new cljs.core.ChunkBuffer(buf,end));
});

cljs.core.chunk_buffer = (function chunk_buffer(capacity){
return (new cljs.core.ChunkBuffer((new Array(capacity)),(0)));
});

/**
* @constructor
*/
cljs.core.ArrayChunk = (function (arr,off,end){
this.arr = arr;
this.off = off;
this.end = end;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 524306;
})
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$4(self__.arr,f,(self__.arr[self__.off]),(self__.off + (1)));
});

cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$4(self__.arr,f,start,self__.off);
});

cljs.core.ArrayChunk.prototype.cljs$core$IChunk$ = true;

cljs.core.ArrayChunk.prototype.cljs$core$IChunk$_drop_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.off === self__.end)){
throw (new Error("-drop-first of empty chunk"));
} else {
return (new cljs.core.ArrayChunk(self__.arr,(self__.off + (1)),self__.end));
}
});

cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,i){
var self__ = this;
var coll__$1 = this;
return (self__.arr[(self__.off + i)]);
});

cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,i,not_found){
var self__ = this;
var coll__$1 = this;
if(((i >= (0))) && ((i < (self__.end - self__.off)))){
return (self__.arr[(self__.off + i)]);
} else {
return not_found;
}
});

cljs.core.ArrayChunk.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.end - self__.off);
});

cljs.core.ArrayChunk.cljs$lang$type = true;

cljs.core.ArrayChunk.cljs$lang$ctorStr = "cljs.core/ArrayChunk";

cljs.core.ArrayChunk.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write(writer__4226__auto__,"cljs.core/ArrayChunk");
});

cljs.core.__GT_ArrayChunk = (function __GT_ArrayChunk(arr,off,end){
return (new cljs.core.ArrayChunk(arr,off,end));
});

cljs.core.array_chunk = (function() {
var array_chunk = null;
var array_chunk__1 = (function (arr){
return (new cljs.core.ArrayChunk(arr,(0),arr.length));
});
var array_chunk__2 = (function (arr,off){
return (new cljs.core.ArrayChunk(arr,off,arr.length));
});
var array_chunk__3 = (function (arr,off,end){
return (new cljs.core.ArrayChunk(arr,off,end));
});
array_chunk = function(arr,off,end){
switch(arguments.length){
case 1:
return array_chunk__1.call(this,arr);
case 2:
return array_chunk__2.call(this,arr,off);
case 3:
return array_chunk__3.call(this,arr,off,end);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
array_chunk.cljs$core$IFn$_invoke$arity$1 = array_chunk__1;
array_chunk.cljs$core$IFn$_invoke$arity$2 = array_chunk__2;
array_chunk.cljs$core$IFn$_invoke$arity$3 = array_chunk__3;
return array_chunk;
})()
;

/**
* @constructor
*/
cljs.core.ChunkedCons = (function (chunk,more,meta,__hash){
this.chunk = chunk;
this.more = more;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 31850732;
this.cljs$lang$protocol_mask$partition1$ = 1536;
})
cljs.core.ChunkedCons.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.ChunkedCons.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.ChunkedCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.ChunkedCons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((cljs.core._count(self__.chunk) > (1))){
return (new cljs.core.ChunkedCons(cljs.core._drop_first(self__.chunk),self__.more,self__.meta,null));
} else {
var more__$1 = cljs.core._seq(self__.more);
if((more__$1 == null)){
return null;
} else {
return more__$1;
}
}
});

cljs.core.ChunkedCons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4059__auto__ = self__.__hash;
if(!((h__4059__auto__ == null))){
return h__4059__auto__;
} else {
var h__4059__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__4059__auto____$1;

return h__4059__auto____$1;
}
});

cljs.core.ChunkedCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.ChunkedCons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});

cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(self__.chunk,(0));
});

cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((cljs.core._count(self__.chunk) > (1))){
return (new cljs.core.ChunkedCons(cljs.core._drop_first(self__.chunk),self__.more,self__.meta,null));
} else {
if((self__.more == null)){
return cljs.core.List.EMPTY;
} else {
return self__.more;
}
}
});

cljs.core.ChunkedCons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return coll__$1;
});

cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.chunk;
});

cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.more == null)){
return cljs.core.List.EMPTY;
} else {
return self__.more;
}
});

cljs.core.ChunkedCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.ChunkedCons(self__.chunk,self__.more,m,self__.__hash));
});

cljs.core.ChunkedCons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,o){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons(o,this$__$1);
});

cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.more == null)){
return null;
} else {
return self__.more;
}
});

cljs.core.ChunkedCons.cljs$lang$type = true;

cljs.core.ChunkedCons.cljs$lang$ctorStr = "cljs.core/ChunkedCons";

cljs.core.ChunkedCons.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write(writer__4226__auto__,"cljs.core/ChunkedCons");
});

cljs.core.__GT_ChunkedCons = (function __GT_ChunkedCons(chunk,more,meta,__hash){
return (new cljs.core.ChunkedCons(chunk,more,meta,__hash));
});

(cljs.core.ChunkedCons.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4616__auto__ = this;
return cljs.core.es6_iterator(this__4616__auto__);
}));
cljs.core.chunk_cons = (function chunk_cons(chunk,rest){
if((cljs.core._count(chunk) === (0))){
return rest;
} else {
return (new cljs.core.ChunkedCons(chunk,rest,null,null));
}
});
cljs.core.chunk_append = (function chunk_append(b,x){
return b.add(x);
});
cljs.core.chunk = (function chunk(b){
return b.chunk();
});
cljs.core.chunk_first = (function chunk_first(s){
return cljs.core._chunked_first(s);
});
cljs.core.chunk_rest = (function chunk_rest(s){
return cljs.core._chunked_rest(s);
});
cljs.core.chunk_next = (function chunk_next(s){
if((function (){var G__12789 = s;
if(G__12789){
var bit__4312__auto__ = (G__12789.cljs$lang$protocol_mask$partition1$ & (1024));
if((bit__4312__auto__) || (G__12789.cljs$core$IChunkedNext$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return cljs.core._chunked_next(s);
} else {
return cljs.core.seq(cljs.core._chunked_rest(s));
}
});
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary = [];
var s__$1 = s;
while(true){
if(cljs.core.seq(s__$1)){
ary.push(cljs.core.first(s__$1));

var G__12790 = cljs.core.next(s__$1);
s__$1 = G__12790;
continue;
} else {
return ary;
}
break;
}
});
/**
* Returns a (potentially-ragged) 2-dimensional array
* containing the contents of coll.
*/
cljs.core.to_array_2d = (function to_array_2d(coll){
var ret = (new Array(cljs.core.count(coll)));
var i_12791 = (0);
var xs_12792 = cljs.core.seq(coll);
while(true){
if(xs_12792){
(ret[i_12791] = cljs.core.to_array(cljs.core.first(xs_12792)));

var G__12793 = (i_12791 + (1));
var G__12794 = cljs.core.next(xs_12792);
i_12791 = G__12793;
xs_12792 = G__12794;
continue;
} else {
}
break;
}

return ret;
});
cljs.core.int_array = (function() {
var int_array = null;
var int_array__1 = (function (size_or_seq){
if(typeof size_or_seq === 'number'){
return int_array.cljs$core$IFn$_invoke$arity$2(size_or_seq,null);
} else {
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(size_or_seq);
}
});
var int_array__2 = (function (size,init_val_or_seq){
var a = (new Array(size));
if(cljs.core.seq_QMARK_(init_val_or_seq)){
var s = cljs.core.seq(init_val_or_seq);
var i = (0);
var s__$1 = s;
while(true){
if((s__$1) && ((i < size))){
(a[i] = cljs.core.first(s__$1));

var G__12797 = (i + (1));
var G__12798 = cljs.core.next(s__$1);
i = G__12797;
s__$1 = G__12798;
continue;
} else {
return a;
}
break;
}
} else {
var n__4525__auto___12799 = size;
var i_12800 = (0);
while(true){
if((i_12800 < n__4525__auto___12799)){
(a[i_12800] = init_val_or_seq);

var G__12801 = (i_12800 + (1));
i_12800 = G__12801;
continue;
} else {
}
break;
}

return a;
}
});
int_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return int_array__1.call(this,size);
case 2:
return int_array__2.call(this,size,init_val_or_seq);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
int_array.cljs$core$IFn$_invoke$arity$1 = int_array__1;
int_array.cljs$core$IFn$_invoke$arity$2 = int_array__2;
return int_array;
})()
;
cljs.core.long_array = (function() {
var long_array = null;
var long_array__1 = (function (size_or_seq){
if(typeof size_or_seq === 'number'){
return long_array.cljs$core$IFn$_invoke$arity$2(size_or_seq,null);
} else {
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(size_or_seq);
}
});
var long_array__2 = (function (size,init_val_or_seq){
var a = (new Array(size));
if(cljs.core.seq_QMARK_(init_val_or_seq)){
var s = cljs.core.seq(init_val_or_seq);
var i = (0);
var s__$1 = s;
while(true){
if((s__$1) && ((i < size))){
(a[i] = cljs.core.first(s__$1));

var G__12804 = (i + (1));
var G__12805 = cljs.core.next(s__$1);
i = G__12804;
s__$1 = G__12805;
continue;
} else {
return a;
}
break;
}
} else {
var n__4525__auto___12806 = size;
var i_12807 = (0);
while(true){
if((i_12807 < n__4525__auto___12806)){
(a[i_12807] = init_val_or_seq);

var G__12808 = (i_12807 + (1));
i_12807 = G__12808;
continue;
} else {
}
break;
}

return a;
}
});
long_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return long_array__1.call(this,size);
case 2:
return long_array__2.call(this,size,init_val_or_seq);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
long_array.cljs$core$IFn$_invoke$arity$1 = long_array__1;
long_array.cljs$core$IFn$_invoke$arity$2 = long_array__2;
return long_array;
})()
;
cljs.core.double_array = (function() {
var double_array = null;
var double_array__1 = (function (size_or_seq){
if(typeof size_or_seq === 'number'){
return double_array.cljs$core$IFn$_invoke$arity$2(size_or_seq,null);
} else {
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(size_or_seq);
}
});
var double_array__2 = (function (size,init_val_or_seq){
var a = (new Array(size));
if(cljs.core.seq_QMARK_(init_val_or_seq)){
var s = cljs.core.seq(init_val_or_seq);
var i = (0);
var s__$1 = s;
while(true){
if((s__$1) && ((i < size))){
(a[i] = cljs.core.first(s__$1));

var G__12811 = (i + (1));
var G__12812 = cljs.core.next(s__$1);
i = G__12811;
s__$1 = G__12812;
continue;
} else {
return a;
}
break;
}
} else {
var n__4525__auto___12813 = size;
var i_12814 = (0);
while(true){
if((i_12814 < n__4525__auto___12813)){
(a[i_12814] = init_val_or_seq);

var G__12815 = (i_12814 + (1));
i_12814 = G__12815;
continue;
} else {
}
break;
}

return a;
}
});
double_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return double_array__1.call(this,size);
case 2:
return double_array__2.call(this,size,init_val_or_seq);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
double_array.cljs$core$IFn$_invoke$arity$1 = double_array__1;
double_array.cljs$core$IFn$_invoke$arity$2 = double_array__2;
return double_array;
})()
;
cljs.core.object_array = (function() {
var object_array = null;
var object_array__1 = (function (size_or_seq){
if(typeof size_or_seq === 'number'){
return object_array.cljs$core$IFn$_invoke$arity$2(size_or_seq,null);
} else {
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(size_or_seq);
}
});
var object_array__2 = (function (size,init_val_or_seq){
var a = (new Array(size));
if(cljs.core.seq_QMARK_(init_val_or_seq)){
var s = cljs.core.seq(init_val_or_seq);
var i = (0);
var s__$1 = s;
while(true){
if((s__$1) && ((i < size))){
(a[i] = cljs.core.first(s__$1));

var G__12818 = (i + (1));
var G__12819 = cljs.core.next(s__$1);
i = G__12818;
s__$1 = G__12819;
continue;
} else {
return a;
}
break;
}
} else {
var n__4525__auto___12820 = size;
var i_12821 = (0);
while(true){
if((i_12821 < n__4525__auto___12820)){
(a[i_12821] = init_val_or_seq);

var G__12822 = (i_12821 + (1));
i_12821 = G__12822;
continue;
} else {
}
break;
}

return a;
}
});
object_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return object_array__1.call(this,size);
case 2:
return object_array__2.call(this,size,init_val_or_seq);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
object_array.cljs$core$IFn$_invoke$arity$1 = object_array__1;
object_array.cljs$core$IFn$_invoke$arity$2 = object_array__2;
return object_array;
})()
;
cljs.core.bounded_count = (function bounded_count(s,n){
if(cljs.core.counted_QMARK_(s)){
return cljs.core.count(s);
} else {
var s__$1 = s;
var i = n;
var sum = (0);
while(true){
if(((i > (0))) && (cljs.core.seq(s__$1))){
var G__12823 = cljs.core.next(s__$1);
var G__12824 = (i - (1));
var G__12825 = (sum + (1));
s__$1 = G__12823;
i = G__12824;
sum = G__12825;
continue;
} else {
return sum;
}
break;
}
}
});
cljs.core.spread = (function spread(arglist){
if((arglist == null)){
return null;
} else {
if((cljs.core.next(arglist) == null)){
return cljs.core.seq(cljs.core.first(arglist));
} else {
return cljs.core.cons(cljs.core.first(arglist),spread(cljs.core.next(arglist)));

}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__0 = (function (){
return (new cljs.core.LazySeq(null,(function (){
return null;
}),null,null));
});
var concat__1 = (function (x){
return (new cljs.core.LazySeq(null,(function (){
return x;
}),null,null));
});
var concat__2 = (function (x,y){
return (new cljs.core.LazySeq(null,(function (){
var s = cljs.core.seq(x);
if(s){
if(cljs.core.chunked_seq_QMARK_(s)){
return cljs.core.chunk_cons(cljs.core.chunk_first(s),concat.cljs$core$IFn$_invoke$arity$2(cljs.core.chunk_rest(s),y));
} else {
return cljs.core.cons(cljs.core.first(s),concat.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(s),y));
}
} else {
return y;
}
}),null,null));
});
var concat__3 = (function() { 
var G__12845__delegate = function (x,y,zs){
var cat = (function cat(xys,zs__$1){
return (new cljs.core.LazySeq(null,(function (){
var xys__$1 = cljs.core.seq(xys);
if(xys__$1){
if(cljs.core.chunked_seq_QMARK_(xys__$1)){
return cljs.core.chunk_cons(cljs.core.chunk_first(xys__$1),cat(cljs.core.chunk_rest(xys__$1),zs__$1));
} else {
return cljs.core.cons(cljs.core.first(xys__$1),cat(cljs.core.rest(xys__$1),zs__$1));
}
} else {
if(cljs.core.truth_(zs__$1)){
return cat(cljs.core.first(zs__$1),cljs.core.next(zs__$1));
} else {
return null;
}
}
}),null,null));
});
return cat(concat.cljs$core$IFn$_invoke$arity$2(x,y),zs);
};
var G__12845 = function (x,y,var_args){
var zs = null;
if (arguments.length > 2) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12845__delegate.call(this,x,y,zs);};
G__12845.cljs$lang$maxFixedArity = 2;
G__12845.cljs$lang$applyTo = (function (arglist__12846){
var x = cljs.core.first(arglist__12846);
arglist__12846 = cljs.core.next(arglist__12846);
var y = cljs.core.first(arglist__12846);
var zs = cljs.core.rest(arglist__12846);
return G__12845__delegate(x,y,zs);
});
G__12845.cljs$core$IFn$_invoke$arity$variadic = G__12845__delegate;
return G__12845;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return concat__0.call(this);
case 1:
return concat__1.call(this,x);
case 2:
return concat__2.call(this,x,y);
default:
return concat__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__3.cljs$lang$applyTo;
concat.cljs$core$IFn$_invoke$arity$0 = concat__0;
concat.cljs$core$IFn$_invoke$arity$1 = concat__1;
concat.cljs$core$IFn$_invoke$arity$2 = concat__2;
concat.cljs$core$IFn$_invoke$arity$variadic = concat__3.cljs$core$IFn$_invoke$arity$variadic;
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___1 = (function (args){
return cljs.core.seq(args);
});
var list_STAR___2 = (function (a,args){
return cljs.core.cons(a,args);
});
var list_STAR___3 = (function (a,b,args){
return cljs.core.cons(a,cljs.core.cons(b,args));
});
var list_STAR___4 = (function (a,b,c,args){
return cljs.core.cons(a,cljs.core.cons(b,cljs.core.cons(c,args)));
});
var list_STAR___5 = (function() { 
var G__12847__delegate = function (a,b,c,d,more){
return cljs.core.cons(a,cljs.core.cons(b,cljs.core.cons(c,cljs.core.cons(d,cljs.core.spread(more)))));
};
var G__12847 = function (a,b,c,d,var_args){
var more = null;
if (arguments.length > 4) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__12847__delegate.call(this,a,b,c,d,more);};
G__12847.cljs$lang$maxFixedArity = 4;
G__12847.cljs$lang$applyTo = (function (arglist__12848){
var a = cljs.core.first(arglist__12848);
arglist__12848 = cljs.core.next(arglist__12848);
var b = cljs.core.first(arglist__12848);
arglist__12848 = cljs.core.next(arglist__12848);
var c = cljs.core.first(arglist__12848);
arglist__12848 = cljs.core.next(arglist__12848);
var d = cljs.core.first(arglist__12848);
var more = cljs.core.rest(arglist__12848);
return G__12847__delegate(a,b,c,d,more);
});
G__12847.cljs$core$IFn$_invoke$arity$variadic = G__12847__delegate;
return G__12847;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return list_STAR___1.call(this,a);
case 2:
return list_STAR___2.call(this,a,b);
case 3:
return list_STAR___3.call(this,a,b,c);
case 4:
return list_STAR___4.call(this,a,b,c,d);
default:
return list_STAR___5.cljs$core$IFn$_invoke$arity$variadic(a,b,c,d, cljs.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___5.cljs$lang$applyTo;
list_STAR_.cljs$core$IFn$_invoke$arity$1 = list_STAR___1;
list_STAR_.cljs$core$IFn$_invoke$arity$2 = list_STAR___2;
list_STAR_.cljs$core$IFn$_invoke$arity$3 = list_STAR___3;
list_STAR_.cljs$core$IFn$_invoke$arity$4 = list_STAR___4;
list_STAR_.cljs$core$IFn$_invoke$arity$variadic = list_STAR___5.cljs$core$IFn$_invoke$arity$variadic;
return list_STAR_;
})()
;
/**
* Returns a new, transient version of the collection, in constant time.
*/
cljs.core.transient$ = (function transient$(coll){
return cljs.core._as_transient(coll);
});
/**
* Returns a new, persistent version of the transient collection, in
* constant time. The transient collection cannot be used after this
* call, any such use will throw an exception.
*/
cljs.core.persistent_BANG_ = (function persistent_BANG_(tcoll){
return cljs.core._persistent_BANG_(tcoll);
});
/**
* Adds x to the transient collection, and return coll. The 'addition'
* may happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj_BANG_ = (function() {
var conj_BANG_ = null;
var conj_BANG___0 = (function (){
return cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
});
var conj_BANG___1 = (function (coll){
return coll;
});
var conj_BANG___2 = (function (tcoll,val){
return cljs.core._conj_BANG_(tcoll,val);
});
var conj_BANG___3 = (function() { 
var G__12849__delegate = function (tcoll,val,vals){
while(true){
var ntcoll = cljs.core._conj_BANG_(tcoll,val);
if(cljs.core.truth_(vals)){
var G__12850 = ntcoll;
var G__12851 = cljs.core.first(vals);
var G__12852 = cljs.core.next(vals);
tcoll = G__12850;
val = G__12851;
vals = G__12852;
continue;
} else {
return ntcoll;
}
break;
}
};
var G__12849 = function (tcoll,val,var_args){
var vals = null;
if (arguments.length > 2) {
  vals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12849__delegate.call(this,tcoll,val,vals);};
G__12849.cljs$lang$maxFixedArity = 2;
G__12849.cljs$lang$applyTo = (function (arglist__12853){
var tcoll = cljs.core.first(arglist__12853);
arglist__12853 = cljs.core.next(arglist__12853);
var val = cljs.core.first(arglist__12853);
var vals = cljs.core.rest(arglist__12853);
return G__12849__delegate(tcoll,val,vals);
});
G__12849.cljs$core$IFn$_invoke$arity$variadic = G__12849__delegate;
return G__12849;
})()
;
conj_BANG_ = function(tcoll,val,var_args){
var vals = var_args;
switch(arguments.length){
case 0:
return conj_BANG___0.call(this);
case 1:
return conj_BANG___1.call(this,tcoll);
case 2:
return conj_BANG___2.call(this,tcoll,val);
default:
return conj_BANG___3.cljs$core$IFn$_invoke$arity$variadic(tcoll,val, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
conj_BANG_.cljs$lang$maxFixedArity = 2;
conj_BANG_.cljs$lang$applyTo = conj_BANG___3.cljs$lang$applyTo;
conj_BANG_.cljs$core$IFn$_invoke$arity$0 = conj_BANG___0;
conj_BANG_.cljs$core$IFn$_invoke$arity$1 = conj_BANG___1;
conj_BANG_.cljs$core$IFn$_invoke$arity$2 = conj_BANG___2;
conj_BANG_.cljs$core$IFn$_invoke$arity$variadic = conj_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return conj_BANG_;
})()
;
/**
* When applied to a transient map, adds mapping of key(s) to
* val(s). When applied to a transient vector, sets the val at index.
* Note - index must be <= (count vector). Returns coll.
* @param {...*} var_args
*/
cljs.core.assoc_BANG_ = (function() {
var assoc_BANG_ = null;
var assoc_BANG___3 = (function (tcoll,key,val){
return cljs.core._assoc_BANG_(tcoll,key,val);
});
var assoc_BANG___4 = (function() { 
var G__12854__delegate = function (tcoll,key,val,kvs){
while(true){
var ntcoll = cljs.core._assoc_BANG_(tcoll,key,val);
if(cljs.core.truth_(kvs)){
var G__12855 = ntcoll;
var G__12856 = cljs.core.first(kvs);
var G__12857 = cljs.core.second(kvs);
var G__12858 = cljs.core.nnext(kvs);
tcoll = G__12855;
key = G__12856;
val = G__12857;
kvs = G__12858;
continue;
} else {
return ntcoll;
}
break;
}
};
var G__12854 = function (tcoll,key,val,var_args){
var kvs = null;
if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12854__delegate.call(this,tcoll,key,val,kvs);};
G__12854.cljs$lang$maxFixedArity = 3;
G__12854.cljs$lang$applyTo = (function (arglist__12859){
var tcoll = cljs.core.first(arglist__12859);
arglist__12859 = cljs.core.next(arglist__12859);
var key = cljs.core.first(arglist__12859);
arglist__12859 = cljs.core.next(arglist__12859);
var val = cljs.core.first(arglist__12859);
var kvs = cljs.core.rest(arglist__12859);
return G__12854__delegate(tcoll,key,val,kvs);
});
G__12854.cljs$core$IFn$_invoke$arity$variadic = G__12854__delegate;
return G__12854;
})()
;
assoc_BANG_ = function(tcoll,key,val,var_args){
var kvs = var_args;
switch(arguments.length){
case 3:
return assoc_BANG___3.call(this,tcoll,key,val);
default:
return assoc_BANG___4.cljs$core$IFn$_invoke$arity$variadic(tcoll,key,val, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
assoc_BANG_.cljs$lang$maxFixedArity = 3;
assoc_BANG_.cljs$lang$applyTo = assoc_BANG___4.cljs$lang$applyTo;
assoc_BANG_.cljs$core$IFn$_invoke$arity$3 = assoc_BANG___3;
assoc_BANG_.cljs$core$IFn$_invoke$arity$variadic = assoc_BANG___4.cljs$core$IFn$_invoke$arity$variadic;
return assoc_BANG_;
})()
;
/**
* Returns a transient map that doesn't contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc_BANG_ = (function() {
var dissoc_BANG_ = null;
var dissoc_BANG___2 = (function (tcoll,key){
return cljs.core._dissoc_BANG_(tcoll,key);
});
var dissoc_BANG___3 = (function() { 
var G__12860__delegate = function (tcoll,key,ks){
while(true){
var ntcoll = cljs.core._dissoc_BANG_(tcoll,key);
if(cljs.core.truth_(ks)){
var G__12861 = ntcoll;
var G__12862 = cljs.core.first(ks);
var G__12863 = cljs.core.next(ks);
tcoll = G__12861;
key = G__12862;
ks = G__12863;
continue;
} else {
return ntcoll;
}
break;
}
};
var G__12860 = function (tcoll,key,var_args){
var ks = null;
if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12860__delegate.call(this,tcoll,key,ks);};
G__12860.cljs$lang$maxFixedArity = 2;
G__12860.cljs$lang$applyTo = (function (arglist__12864){
var tcoll = cljs.core.first(arglist__12864);
arglist__12864 = cljs.core.next(arglist__12864);
var key = cljs.core.first(arglist__12864);
var ks = cljs.core.rest(arglist__12864);
return G__12860__delegate(tcoll,key,ks);
});
G__12860.cljs$core$IFn$_invoke$arity$variadic = G__12860__delegate;
return G__12860;
})()
;
dissoc_BANG_ = function(tcoll,key,var_args){
var ks = var_args;
switch(arguments.length){
case 2:
return dissoc_BANG___2.call(this,tcoll,key);
default:
return dissoc_BANG___3.cljs$core$IFn$_invoke$arity$variadic(tcoll,key, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dissoc_BANG_.cljs$lang$maxFixedArity = 2;
dissoc_BANG_.cljs$lang$applyTo = dissoc_BANG___3.cljs$lang$applyTo;
dissoc_BANG_.cljs$core$IFn$_invoke$arity$2 = dissoc_BANG___2;
dissoc_BANG_.cljs$core$IFn$_invoke$arity$variadic = dissoc_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return dissoc_BANG_;
})()
;
/**
* Removes the last item from a transient vector. If
* the collection is empty, throws an exception. Returns coll
*/
cljs.core.pop_BANG_ = (function pop_BANG_(tcoll){
return cljs.core._pop_BANG_(tcoll);
});
/**
* disj[oin]. Returns a transient set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj_BANG_ = (function() {
var disj_BANG_ = null;
var disj_BANG___2 = (function (tcoll,val){
return cljs.core._disjoin_BANG_(tcoll,val);
});
var disj_BANG___3 = (function() { 
var G__12865__delegate = function (tcoll,val,vals){
while(true){
var ntcoll = cljs.core._disjoin_BANG_(tcoll,val);
if(cljs.core.truth_(vals)){
var G__12866 = ntcoll;
var G__12867 = cljs.core.first(vals);
var G__12868 = cljs.core.next(vals);
tcoll = G__12866;
val = G__12867;
vals = G__12868;
continue;
} else {
return ntcoll;
}
break;
}
};
var G__12865 = function (tcoll,val,var_args){
var vals = null;
if (arguments.length > 2) {
  vals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12865__delegate.call(this,tcoll,val,vals);};
G__12865.cljs$lang$maxFixedArity = 2;
G__12865.cljs$lang$applyTo = (function (arglist__12869){
var tcoll = cljs.core.first(arglist__12869);
arglist__12869 = cljs.core.next(arglist__12869);
var val = cljs.core.first(arglist__12869);
var vals = cljs.core.rest(arglist__12869);
return G__12865__delegate(tcoll,val,vals);
});
G__12865.cljs$core$IFn$_invoke$arity$variadic = G__12865__delegate;
return G__12865;
})()
;
disj_BANG_ = function(tcoll,val,var_args){
var vals = var_args;
switch(arguments.length){
case 2:
return disj_BANG___2.call(this,tcoll,val);
default:
return disj_BANG___3.cljs$core$IFn$_invoke$arity$variadic(tcoll,val, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
disj_BANG_.cljs$lang$maxFixedArity = 2;
disj_BANG_.cljs$lang$applyTo = disj_BANG___3.cljs$lang$applyTo;
disj_BANG_.cljs$core$IFn$_invoke$arity$2 = disj_BANG___2;
disj_BANG_.cljs$core$IFn$_invoke$arity$variadic = disj_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return disj_BANG_;
})()
;

cljs.core.apply_to = (function apply_to(f,argc,args){
var args__$1 = cljs.core.seq(args);
if((argc === (0))){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
var a4569 = cljs.core._first(args__$1);
var args__$2 = cljs.core._rest(args__$1);
if((argc === (1))){
if(f.cljs$core$IFn$_invoke$arity$1){
return f.cljs$core$IFn$_invoke$arity$1(a4569);
} else {
var G__13080 = a4569;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13080) : f.call(null,G__13080));
}
} else {
var b4570 = cljs.core._first(args__$2);
var args__$3 = cljs.core._rest(args__$2);
if((argc === (2))){
if(f.cljs$core$IFn$_invoke$arity$2){
return f.cljs$core$IFn$_invoke$arity$2(a4569,b4570);
} else {
var G__13081 = a4569;
var G__13082 = b4570;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__13081,G__13082) : f.call(null,G__13081,G__13082));
}
} else {
var c4571 = cljs.core._first(args__$3);
var args__$4 = cljs.core._rest(args__$3);
if((argc === (3))){
if(f.cljs$core$IFn$_invoke$arity$3){
return f.cljs$core$IFn$_invoke$arity$3(a4569,b4570,c4571);
} else {
var G__13083 = a4569;
var G__13084 = b4570;
var G__13085 = c4571;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__13083,G__13084,G__13085) : f.call(null,G__13083,G__13084,G__13085));
}
} else {
var d4572 = cljs.core._first(args__$4);
var args__$5 = cljs.core._rest(args__$4);
if((argc === (4))){
if(f.cljs$core$IFn$_invoke$arity$4){
return f.cljs$core$IFn$_invoke$arity$4(a4569,b4570,c4571,d4572);
} else {
var G__13086 = a4569;
var G__13087 = b4570;
var G__13088 = c4571;
var G__13089 = d4572;
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__13086,G__13087,G__13088,G__13089) : f.call(null,G__13086,G__13087,G__13088,G__13089));
}
} else {
var e4573 = cljs.core._first(args__$5);
var args__$6 = cljs.core._rest(args__$5);
if((argc === (5))){
if(f.cljs$core$IFn$_invoke$arity$5){
return f.cljs$core$IFn$_invoke$arity$5(a4569,b4570,c4571,d4572,e4573);
} else {
var G__13090 = a4569;
var G__13091 = b4570;
var G__13092 = c4571;
var G__13093 = d4572;
var G__13094 = e4573;
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(G__13090,G__13091,G__13092,G__13093,G__13094) : f.call(null,G__13090,G__13091,G__13092,G__13093,G__13094));
}
} else {
var f4574 = cljs.core._first(args__$6);
var args__$7 = cljs.core._rest(args__$6);
if((argc === (6))){
if(f.cljs$core$IFn$_invoke$arity$6){
return f.cljs$core$IFn$_invoke$arity$6(a4569,b4570,c4571,d4572,e4573,f4574);
} else {
var G__13095 = a4569;
var G__13096 = b4570;
var G__13097 = c4571;
var G__13098 = d4572;
var G__13099 = e4573;
var G__13100 = f4574;
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(G__13095,G__13096,G__13097,G__13098,G__13099,G__13100) : f.call(null,G__13095,G__13096,G__13097,G__13098,G__13099,G__13100));
}
} else {
var g4575 = cljs.core._first(args__$7);
var args__$8 = cljs.core._rest(args__$7);
if((argc === (7))){
if(f.cljs$core$IFn$_invoke$arity$7){
return f.cljs$core$IFn$_invoke$arity$7(a4569,b4570,c4571,d4572,e4573,f4574,g4575);
} else {
var G__13101 = a4569;
var G__13102 = b4570;
var G__13103 = c4571;
var G__13104 = d4572;
var G__13105 = e4573;
var G__13106 = f4574;
var G__13107 = g4575;
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(G__13101,G__13102,G__13103,G__13104,G__13105,G__13106,G__13107) : f.call(null,G__13101,G__13102,G__13103,G__13104,G__13105,G__13106,G__13107));
}
} else {
var h4576 = cljs.core._first(args__$8);
var args__$9 = cljs.core._rest(args__$8);
if((argc === (8))){
if(f.cljs$core$IFn$_invoke$arity$8){
return f.cljs$core$IFn$_invoke$arity$8(a4569,b4570,c4571,d4572,e4573,f4574,g4575,h4576);
} else {
var G__13108 = a4569;
var G__13109 = b4570;
var G__13110 = c4571;
var G__13111 = d4572;
var G__13112 = e4573;
var G__13113 = f4574;
var G__13114 = g4575;
var G__13115 = h4576;
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(G__13108,G__13109,G__13110,G__13111,G__13112,G__13113,G__13114,G__13115) : f.call(null,G__13108,G__13109,G__13110,G__13111,G__13112,G__13113,G__13114,G__13115));
}
} else {
var i4577 = cljs.core._first(args__$9);
var args__$10 = cljs.core._rest(args__$9);
if((argc === (9))){
if(f.cljs$core$IFn$_invoke$arity$9){
return f.cljs$core$IFn$_invoke$arity$9(a4569,b4570,c4571,d4572,e4573,f4574,g4575,h4576,i4577);
} else {
var G__13116 = a4569;
var G__13117 = b4570;
var G__13118 = c4571;
var G__13119 = d4572;
var G__13120 = e4573;
var G__13121 = f4574;
var G__13122 = g4575;
var G__13123 = h4576;
var G__13124 = i4577;
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(G__13116,G__13117,G__13118,G__13119,G__13120,G__13121,G__13122,G__13123,G__13124) : f.call(null,G__13116,G__13117,G__13118,G__13119,G__13120,G__13121,G__13122,G__13123,G__13124));
}
} else {
var j4578 = cljs.core._first(args__$10);
var args__$11 = cljs.core._rest(args__$10);
if((argc === (10))){
if(f.cljs$core$IFn$_invoke$arity$10){
return f.cljs$core$IFn$_invoke$arity$10(a4569,b4570,c4571,d4572,e4573,f4574,g4575,h4576,i4577,j4578);
} else {
var G__13125 = a4569;
var G__13126 = b4570;
var G__13127 = c4571;
var G__13128 = d4572;
var G__13129 = e4573;
var G__13130 = f4574;
var G__13131 = g4575;
var G__13132 = h4576;
var G__13133 = i4577;
var G__13134 = j4578;
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(G__13125,G__13126,G__13127,G__13128,G__13129,G__13130,G__13131,G__13132,G__13133,G__13134) : f.call(null,G__13125,G__13126,G__13127,G__13128,G__13129,G__13130,G__13131,G__13132,G__13133,G__13134));
}
} else {
var k4579 = cljs.core._first(args__$11);
var args__$12 = cljs.core._rest(args__$11);
if((argc === (11))){
if(f.cljs$core$IFn$_invoke$arity$11){
return f.cljs$core$IFn$_invoke$arity$11(a4569,b4570,c4571,d4572,e4573,f4574,g4575,h4576,i4577,j4578,k4579);
} else {
var G__13135 = a4569;
var G__13136 = b4570;
var G__13137 = c4571;
var G__13138 = d4572;
var G__13139 = e4573;
var G__13140 = f4574;
var G__13141 = g4575;
var G__13142 = h4576;
var G__13143 = i4577;
var G__13144 = j4578;
var G__13145 = k4579;
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(G__13135,G__13136,G__13137,G__13138,G__13139,G__13140,G__13141,G__13142,G__13143,G__13144,G__13145) : f.call(null,G__13135,G__13136,G__13137,G__13138,G__13139,G__13140,G__13141,G__13142,G__13143,G__13144,G__13145));
}
} else {
var l4580 = cljs.core._first(args__$12);
var args__$13 = cljs.core._rest(args__$12);
if((argc === (12))){
if(f.cljs$core$IFn$_invoke$arity$12){
return f.cljs$core$IFn$_invoke$arity$12(a4569,b4570,c4571,d4572,e4573,f4574,g4575,h4576,i4577,j4578,k4579,l4580);
} else {
var G__13146 = a4569;
var G__13147 = b4570;
var G__13148 = c4571;
var G__13149 = d4572;
var G__13150 = e4573;
var G__13151 = f4574;
var G__13152 = g4575;
var G__13153 = h4576;
var G__13154 = i4577;
var G__13155 = j4578;
var G__13156 = k4579;
var G__13157 = l4580;
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(G__13146,G__13147,G__13148,G__13149,G__13150,G__13151,G__13152,G__13153,G__13154,G__13155,G__13156,G__13157) : f.call(null,G__13146,G__13147,G__13148,G__13149,G__13150,G__13151,G__13152,G__13153,G__13154,G__13155,G__13156,G__13157));
}
} else {
var m4581 = cljs.core._first(args__$13);
var args__$14 = cljs.core._rest(args__$13);
if((argc === (13))){
if(f.cljs$core$IFn$_invoke$arity$13){
return f.cljs$core$IFn$_invoke$arity$13(a4569,b4570,c4571,d4572,e4573,f4574,g4575,h4576,i4577,j4578,k4579,l4580,m4581);
} else {
var G__13158 = a4569;
var G__13159 = b4570;
var G__13160 = c4571;
var G__13161 = d4572;
var G__13162 = e4573;
var G__13163 = f4574;
var G__13164 = g4575;
var G__13165 = h4576;
var G__13166 = i4577;
var G__13167 = j4578;
var G__13168 = k4579;
var G__13169 = l4580;
var G__13170 = m4581;
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(G__13158,G__13159,G__13160,G__13161,G__13162,G__13163,G__13164,G__13165,G__13166,G__13167,G__13168,G__13169,G__13170) : f.call(null,G__13158,G__13159,G__13160,G__13161,G__13162,G__13163,G__13164,G__13165,G__13166,G__13167,G__13168,G__13169,G__13170));
}
} else {
var n4582 = cljs.core._first(args__$14);
var args__$15 = cljs.core._rest(args__$14);
if((argc === (14))){
if(f.cljs$core$IFn$_invoke$arity$14){
return f.cljs$core$IFn$_invoke$arity$14(a4569,b4570,c4571,d4572,e4573,f4574,g4575,h4576,i4577,j4578,k4579,l4580,m4581,n4582);
} else {
var G__13171 = a4569;
var G__13172 = b4570;
var G__13173 = c4571;
var G__13174 = d4572;
var G__13175 = e4573;
var G__13176 = f4574;
var G__13177 = g4575;
var G__13178 = h4576;
var G__13179 = i4577;
var G__13180 = j4578;
var G__13181 = k4579;
var G__13182 = l4580;
var G__13183 = m4581;
var G__13184 = n4582;
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(G__13171,G__13172,G__13173,G__13174,G__13175,G__13176,G__13177,G__13178,G__13179,G__13180,G__13181,G__13182,G__13183,G__13184) : f.call(null,G__13171,G__13172,G__13173,G__13174,G__13175,G__13176,G__13177,G__13178,G__13179,G__13180,G__13181,G__13182,G__13183,G__13184));
}
} else {
var o4583 = cljs.core._first(args__$15);
var args__$16 = cljs.core._rest(args__$15);
if((argc === (15))){
if(f.cljs$core$IFn$_invoke$arity$15){
return f.cljs$core$IFn$_invoke$arity$15(a4569,b4570,c4571,d4572,e4573,f4574,g4575,h4576,i4577,j4578,k4579,l4580,m4581,n4582,o4583);
} else {
var G__13185 = a4569;
var G__13186 = b4570;
var G__13187 = c4571;
var G__13188 = d4572;
var G__13189 = e4573;
var G__13190 = f4574;
var G__13191 = g4575;
var G__13192 = h4576;
var G__13193 = i4577;
var G__13194 = j4578;
var G__13195 = k4579;
var G__13196 = l4580;
var G__13197 = m4581;
var G__13198 = n4582;
var G__13199 = o4583;
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(G__13185,G__13186,G__13187,G__13188,G__13189,G__13190,G__13191,G__13192,G__13193,G__13194,G__13195,G__13196,G__13197,G__13198,G__13199) : f.call(null,G__13185,G__13186,G__13187,G__13188,G__13189,G__13190,G__13191,G__13192,G__13193,G__13194,G__13195,G__13196,G__13197,G__13198,G__13199));
}
} else {
var p4584 = cljs.core._first(args__$16);
var args__$17 = cljs.core._rest(args__$16);
if((argc === (16))){
if(f.cljs$core$IFn$_invoke$arity$16){
return f.cljs$core$IFn$_invoke$arity$16(a4569,b4570,c4571,d4572,e4573,f4574,g4575,h4576,i4577,j4578,k4579,l4580,m4581,n4582,o4583,p4584);
} else {
var G__13200 = a4569;
var G__13201 = b4570;
var G__13202 = c4571;
var G__13203 = d4572;
var G__13204 = e4573;
var G__13205 = f4574;
var G__13206 = g4575;
var G__13207 = h4576;
var G__13208 = i4577;
var G__13209 = j4578;
var G__13210 = k4579;
var G__13211 = l4580;
var G__13212 = m4581;
var G__13213 = n4582;
var G__13214 = o4583;
var G__13215 = p4584;
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(G__13200,G__13201,G__13202,G__13203,G__13204,G__13205,G__13206,G__13207,G__13208,G__13209,G__13210,G__13211,G__13212,G__13213,G__13214,G__13215) : f.call(null,G__13200,G__13201,G__13202,G__13203,G__13204,G__13205,G__13206,G__13207,G__13208,G__13209,G__13210,G__13211,G__13212,G__13213,G__13214,G__13215));
}
} else {
var q4585 = cljs.core._first(args__$17);
var args__$18 = cljs.core._rest(args__$17);
if((argc === (17))){
if(f.cljs$core$IFn$_invoke$arity$17){
return f.cljs$core$IFn$_invoke$arity$17(a4569,b4570,c4571,d4572,e4573,f4574,g4575,h4576,i4577,j4578,k4579,l4580,m4581,n4582,o4583,p4584,q4585);
} else {
var G__13216 = a4569;
var G__13217 = b4570;
var G__13218 = c4571;
var G__13219 = d4572;
var G__13220 = e4573;
var G__13221 = f4574;
var G__13222 = g4575;
var G__13223 = h4576;
var G__13224 = i4577;
var G__13225 = j4578;
var G__13226 = k4579;
var G__13227 = l4580;
var G__13228 = m4581;
var G__13229 = n4582;
var G__13230 = o4583;
var G__13231 = p4584;
var G__13232 = q4585;
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(G__13216,G__13217,G__13218,G__13219,G__13220,G__13221,G__13222,G__13223,G__13224,G__13225,G__13226,G__13227,G__13228,G__13229,G__13230,G__13231,G__13232) : f.call(null,G__13216,G__13217,G__13218,G__13219,G__13220,G__13221,G__13222,G__13223,G__13224,G__13225,G__13226,G__13227,G__13228,G__13229,G__13230,G__13231,G__13232));
}
} else {
var r4586 = cljs.core._first(args__$18);
var args__$19 = cljs.core._rest(args__$18);
if((argc === (18))){
if(f.cljs$core$IFn$_invoke$arity$18){
return f.cljs$core$IFn$_invoke$arity$18(a4569,b4570,c4571,d4572,e4573,f4574,g4575,h4576,i4577,j4578,k4579,l4580,m4581,n4582,o4583,p4584,q4585,r4586);
} else {
var G__13233 = a4569;
var G__13234 = b4570;
var G__13235 = c4571;
var G__13236 = d4572;
var G__13237 = e4573;
var G__13238 = f4574;
var G__13239 = g4575;
var G__13240 = h4576;
var G__13241 = i4577;
var G__13242 = j4578;
var G__13243 = k4579;
var G__13244 = l4580;
var G__13245 = m4581;
var G__13246 = n4582;
var G__13247 = o4583;
var G__13248 = p4584;
var G__13249 = q4585;
var G__13250 = r4586;
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(G__13233,G__13234,G__13235,G__13236,G__13237,G__13238,G__13239,G__13240,G__13241,G__13242,G__13243,G__13244,G__13245,G__13246,G__13247,G__13248,G__13249,G__13250) : f.call(null,G__13233,G__13234,G__13235,G__13236,G__13237,G__13238,G__13239,G__13240,G__13241,G__13242,G__13243,G__13244,G__13245,G__13246,G__13247,G__13248,G__13249,G__13250));
}
} else {
var s4587 = cljs.core._first(args__$19);
var args__$20 = cljs.core._rest(args__$19);
if((argc === (19))){
if(f.cljs$core$IFn$_invoke$arity$19){
return f.cljs$core$IFn$_invoke$arity$19(a4569,b4570,c4571,d4572,e4573,f4574,g4575,h4576,i4577,j4578,k4579,l4580,m4581,n4582,o4583,p4584,q4585,r4586,s4587);
} else {
var G__13251 = a4569;
var G__13252 = b4570;
var G__13253 = c4571;
var G__13254 = d4572;
var G__13255 = e4573;
var G__13256 = f4574;
var G__13257 = g4575;
var G__13258 = h4576;
var G__13259 = i4577;
var G__13260 = j4578;
var G__13261 = k4579;
var G__13262 = l4580;
var G__13263 = m4581;
var G__13264 = n4582;
var G__13265 = o4583;
var G__13266 = p4584;
var G__13267 = q4585;
var G__13268 = r4586;
var G__13269 = s4587;
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(G__13251,G__13252,G__13253,G__13254,G__13255,G__13256,G__13257,G__13258,G__13259,G__13260,G__13261,G__13262,G__13263,G__13264,G__13265,G__13266,G__13267,G__13268,G__13269) : f.call(null,G__13251,G__13252,G__13253,G__13254,G__13255,G__13256,G__13257,G__13258,G__13259,G__13260,G__13261,G__13262,G__13263,G__13264,G__13265,G__13266,G__13267,G__13268,G__13269));
}
} else {
var t4588 = cljs.core._first(args__$20);
var args__$21 = cljs.core._rest(args__$20);
if((argc === (20))){
if(f.cljs$core$IFn$_invoke$arity$20){
return f.cljs$core$IFn$_invoke$arity$20(a4569,b4570,c4571,d4572,e4573,f4574,g4575,h4576,i4577,j4578,k4579,l4580,m4581,n4582,o4583,p4584,q4585,r4586,s4587,t4588);
} else {
var G__13270 = a4569;
var G__13271 = b4570;
var G__13272 = c4571;
var G__13273 = d4572;
var G__13274 = e4573;
var G__13275 = f4574;
var G__13276 = g4575;
var G__13277 = h4576;
var G__13278 = i4577;
var G__13279 = j4578;
var G__13280 = k4579;
var G__13281 = l4580;
var G__13282 = m4581;
var G__13283 = n4582;
var G__13284 = o4583;
var G__13285 = p4584;
var G__13286 = q4585;
var G__13287 = r4586;
var G__13288 = s4587;
var G__13289 = t4588;
return (f.cljs$core$IFn$_invoke$arity$20 ? f.cljs$core$IFn$_invoke$arity$20(G__13270,G__13271,G__13272,G__13273,G__13274,G__13275,G__13276,G__13277,G__13278,G__13279,G__13280,G__13281,G__13282,G__13283,G__13284,G__13285,G__13286,G__13287,G__13288,G__13289) : f.call(null,G__13270,G__13271,G__13272,G__13273,G__13274,G__13275,G__13276,G__13277,G__13278,G__13279,G__13280,G__13281,G__13282,G__13283,G__13284,G__13285,G__13286,G__13287,G__13288,G__13289));
}
} else {
throw (new Error("Only up to 20 arguments supported on functions"));
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
});

/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__2 = (function (f,args){
var fixed_arity = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo){
var bc = cljs.core.bounded_count(args,(fixed_arity + (1)));
if((bc <= fixed_arity)){
return cljs.core.apply_to(f,bc,args);
} else {
return f.cljs$lang$applyTo(args);
}
} else {
return f.apply(f,cljs.core.to_array(args));
}
});
var apply__3 = (function (f,x,args){
var arglist = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(x,args);
var fixed_arity = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo){
var bc = cljs.core.bounded_count(arglist,(fixed_arity + (1)));
if((bc <= fixed_arity)){
return cljs.core.apply_to(f,bc,arglist);
} else {
return f.cljs$lang$applyTo(arglist);
}
} else {
return f.apply(f,cljs.core.to_array(arglist));
}
});
var apply__4 = (function (f,x,y,args){
var arglist = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(x,y,args);
var fixed_arity = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo){
var bc = cljs.core.bounded_count(arglist,(fixed_arity + (1)));
if((bc <= fixed_arity)){
return cljs.core.apply_to(f,bc,arglist);
} else {
return f.cljs$lang$applyTo(arglist);
}
} else {
return f.apply(f,cljs.core.to_array(arglist));
}
});
var apply__5 = (function (f,x,y,z,args){
var arglist = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4(x,y,z,args);
var fixed_arity = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo){
var bc = cljs.core.bounded_count(arglist,(fixed_arity + (1)));
if((bc <= fixed_arity)){
return cljs.core.apply_to(f,bc,arglist);
} else {
return f.cljs$lang$applyTo(arglist);
}
} else {
return f.apply(f,cljs.core.to_array(arglist));
}
});
var apply__6 = (function() { 
var G__13290__delegate = function (f,a,b,c,d,args){
var arglist = cljs.core.cons(a,cljs.core.cons(b,cljs.core.cons(c,cljs.core.cons(d,cljs.core.spread(args)))));
var fixed_arity = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo){
var bc = cljs.core.bounded_count(arglist,(fixed_arity + (1)));
if((bc <= fixed_arity)){
return cljs.core.apply_to(f,bc,arglist);
} else {
return f.cljs$lang$applyTo(arglist);
}
} else {
return f.apply(f,cljs.core.to_array(arglist));
}
};
var G__13290 = function (f,a,b,c,d,var_args){
var args = null;
if (arguments.length > 5) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__13290__delegate.call(this,f,a,b,c,d,args);};
G__13290.cljs$lang$maxFixedArity = 5;
G__13290.cljs$lang$applyTo = (function (arglist__13291){
var f = cljs.core.first(arglist__13291);
arglist__13291 = cljs.core.next(arglist__13291);
var a = cljs.core.first(arglist__13291);
arglist__13291 = cljs.core.next(arglist__13291);
var b = cljs.core.first(arglist__13291);
arglist__13291 = cljs.core.next(arglist__13291);
var c = cljs.core.first(arglist__13291);
arglist__13291 = cljs.core.next(arglist__13291);
var d = cljs.core.first(arglist__13291);
var args = cljs.core.rest(arglist__13291);
return G__13290__delegate(f,a,b,c,d,args);
});
G__13290.cljs$core$IFn$_invoke$arity$variadic = G__13290__delegate;
return G__13290;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return apply__2.call(this,f,a);
case 3:
return apply__3.call(this,f,a,b);
case 4:
return apply__4.call(this,f,a,b,c);
case 5:
return apply__5.call(this,f,a,b,c,d);
default:
return apply__6.cljs$core$IFn$_invoke$arity$variadic(f,a,b,c,d, cljs.core.array_seq(arguments, 5));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__6.cljs$lang$applyTo;
apply.cljs$core$IFn$_invoke$arity$2 = apply__2;
apply.cljs$core$IFn$_invoke$arity$3 = apply__3;
apply.cljs$core$IFn$_invoke$arity$4 = apply__4;
apply.cljs$core$IFn$_invoke$arity$5 = apply__5;
apply.cljs$core$IFn$_invoke$arity$variadic = apply__6.cljs$core$IFn$_invoke$arity$variadic;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
cljs.core.vary_meta = (function() {
var vary_meta = null;
var vary_meta__2 = (function (obj,f){
return cljs.core.with_meta(obj,(function (){var G__13307 = cljs.core.meta(obj);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13307) : f.call(null,G__13307));
})());
});
var vary_meta__3 = (function (obj,f,a){
return cljs.core.with_meta(obj,(function (){var G__13308 = cljs.core.meta(obj);
var G__13309 = a;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__13308,G__13309) : f.call(null,G__13308,G__13309));
})());
});
var vary_meta__4 = (function (obj,f,a,b){
return cljs.core.with_meta(obj,(function (){var G__13310 = cljs.core.meta(obj);
var G__13311 = a;
var G__13312 = b;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__13310,G__13311,G__13312) : f.call(null,G__13310,G__13311,G__13312));
})());
});
var vary_meta__5 = (function (obj,f,a,b,c){
return cljs.core.with_meta(obj,(function (){var G__13313 = cljs.core.meta(obj);
var G__13314 = a;
var G__13315 = b;
var G__13316 = c;
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__13313,G__13314,G__13315,G__13316) : f.call(null,G__13313,G__13314,G__13315,G__13316));
})());
});
var vary_meta__6 = (function (obj,f,a,b,c,d){
return cljs.core.with_meta(obj,(function (){var G__13317 = cljs.core.meta(obj);
var G__13318 = a;
var G__13319 = b;
var G__13320 = c;
var G__13321 = d;
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(G__13317,G__13318,G__13319,G__13320,G__13321) : f.call(null,G__13317,G__13318,G__13319,G__13320,G__13321));
})());
});
var vary_meta__7 = (function() { 
var G__13322__delegate = function (obj,f,a,b,c,d,args){
return cljs.core.with_meta(obj,cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,cljs.core.meta(obj),a,b,c,cljs.core.array_seq([d,args], 0)));
};
var G__13322 = function (obj,f,a,b,c,d,var_args){
var args = null;
if (arguments.length > 6) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);
} 
return G__13322__delegate.call(this,obj,f,a,b,c,d,args);};
G__13322.cljs$lang$maxFixedArity = 6;
G__13322.cljs$lang$applyTo = (function (arglist__13323){
var obj = cljs.core.first(arglist__13323);
arglist__13323 = cljs.core.next(arglist__13323);
var f = cljs.core.first(arglist__13323);
arglist__13323 = cljs.core.next(arglist__13323);
var a = cljs.core.first(arglist__13323);
arglist__13323 = cljs.core.next(arglist__13323);
var b = cljs.core.first(arglist__13323);
arglist__13323 = cljs.core.next(arglist__13323);
var c = cljs.core.first(arglist__13323);
arglist__13323 = cljs.core.next(arglist__13323);
var d = cljs.core.first(arglist__13323);
var args = cljs.core.rest(arglist__13323);
return G__13322__delegate(obj,f,a,b,c,d,args);
});
G__13322.cljs$core$IFn$_invoke$arity$variadic = G__13322__delegate;
return G__13322;
})()
;
vary_meta = function(obj,f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return vary_meta__2.call(this,obj,f);
case 3:
return vary_meta__3.call(this,obj,f,a);
case 4:
return vary_meta__4.call(this,obj,f,a,b);
case 5:
return vary_meta__5.call(this,obj,f,a,b,c);
case 6:
return vary_meta__6.call(this,obj,f,a,b,c,d);
default:
return vary_meta__7.cljs$core$IFn$_invoke$arity$variadic(obj,f,a,b,c,d, cljs.core.array_seq(arguments, 6));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
vary_meta.cljs$lang$maxFixedArity = 6;
vary_meta.cljs$lang$applyTo = vary_meta__7.cljs$lang$applyTo;
vary_meta.cljs$core$IFn$_invoke$arity$2 = vary_meta__2;
vary_meta.cljs$core$IFn$_invoke$arity$3 = vary_meta__3;
vary_meta.cljs$core$IFn$_invoke$arity$4 = vary_meta__4;
vary_meta.cljs$core$IFn$_invoke$arity$5 = vary_meta__5;
vary_meta.cljs$core$IFn$_invoke$arity$6 = vary_meta__6;
vary_meta.cljs$core$IFn$_invoke$arity$variadic = vary_meta__7.cljs$core$IFn$_invoke$arity$variadic;
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___1 = (function (x){
return false;
});
var not_EQ___2 = (function (x,y){
return !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y));
});
var not_EQ___3 = (function() { 
var G__13324__delegate = function (x,y,more){
return cljs.core.not(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core._EQ_,x,y,more));
};
var G__13324 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__13324__delegate.call(this,x,y,more);};
G__13324.cljs$lang$maxFixedArity = 2;
G__13324.cljs$lang$applyTo = (function (arglist__13325){
var x = cljs.core.first(arglist__13325);
arglist__13325 = cljs.core.next(arglist__13325);
var y = cljs.core.first(arglist__13325);
var more = cljs.core.rest(arglist__13325);
return G__13324__delegate(x,y,more);
});
G__13324.cljs$core$IFn$_invoke$arity$variadic = G__13324__delegate;
return G__13324;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return not_EQ___1.call(this,x);
case 2:
return not_EQ___2.call(this,x,y);
default:
return not_EQ___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___3.cljs$lang$applyTo;
not_EQ_.cljs$core$IFn$_invoke$arity$1 = not_EQ___1;
not_EQ_.cljs$core$IFn$_invoke$arity$2 = not_EQ___2;
not_EQ_.cljs$core$IFn$_invoke$arity$variadic = not_EQ___3.cljs$core$IFn$_invoke$arity$variadic;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){
if(cljs.core.seq(coll)){
return coll;
} else {
return null;
}
});
cljs.core.nil_iter = (function nil_iter(){
if(typeof cljs.core.t13329 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.t13329 = (function (nil_iter,meta13330){
this.nil_iter = nil_iter;
this.meta13330 = meta13330;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.t13329.prototype.hasNext = (function (){
var self__ = this;
var _ = this;
return false;
});

cljs.core.t13329.prototype.next = (function (){
var self__ = this;
var _ = this;
return (new Error("No such element"));
});

cljs.core.t13329.prototype.remove = (function (){
var self__ = this;
var _ = this;
return (new Error("Unsupported operation"));
});

cljs.core.t13329.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13331){
var self__ = this;
var _13331__$1 = this;
return self__.meta13330;
});

cljs.core.t13329.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13331,meta13330__$1){
var self__ = this;
var _13331__$1 = this;
return (new cljs.core.t13329(self__.nil_iter,meta13330__$1));
});

cljs.core.t13329.cljs$lang$type = true;

cljs.core.t13329.cljs$lang$ctorStr = "cljs.core/t13329";

cljs.core.t13329.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write(writer__4226__auto__,"cljs.core/t13329");
});

cljs.core.__GT_t13329 = (function __GT_t13329(nil_iter__$1,meta13330){
return (new cljs.core.t13329(nil_iter__$1,meta13330));
});

}

return (new cljs.core.t13329(nil_iter,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$29,54,cljs.core.constant$keyword$30,3007,cljs.core.constant$keyword$31,3,cljs.core.constant$keyword$32,3003,cljs.core.constant$keyword$33,"/Users/twer/dev/clojure/async-tut1/target/cljsbuild-compiler-1/cljs/core.cljs"], null)));
});

/**
* @constructor
*/
cljs.core.StringIter = (function (s,i){
this.s = s;
this.i = i;
})
cljs.core.StringIter.prototype.hasNext = (function (){
var self__ = this;
var _ = this;
return (self__.i < self__.s.length);
});

cljs.core.StringIter.prototype.next = (function (){
var self__ = this;
var _ = this;
var ret = self__.s.charAt(self__.i);
self__.i = (self__.i + (1));

return ret;
});

cljs.core.StringIter.prototype.remove = (function (){
var self__ = this;
var _ = this;
return (new Error("Unsupported operation"));
});

cljs.core.StringIter.cljs$lang$type = true;

cljs.core.StringIter.cljs$lang$ctorStr = "cljs.core/StringIter";

cljs.core.StringIter.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write(writer__4226__auto__,"cljs.core/StringIter");
});

cljs.core.__GT_StringIter = (function __GT_StringIter(s,i){
return (new cljs.core.StringIter(s,i));
});

cljs.core.string_iter = (function string_iter(x){
return (new cljs.core.StringIter(x,(0)));
});

/**
* @constructor
*/
cljs.core.ArrayIter = (function (arr,i){
this.arr = arr;
this.i = i;
})
cljs.core.ArrayIter.prototype.hasNext = (function (){
var self__ = this;
var _ = this;
return (self__.i < self__.arr.length);
});

cljs.core.ArrayIter.prototype.next = (function (){
var self__ = this;
var _ = this;
var ret = (self__.arr[self__.i]);
self__.i = (self__.i + (1));

return ret;
});

cljs.core.ArrayIter.prototype.remove = (function (){
var self__ = this;
var _ = this;
return (new Error("Unsupported operation"));
});

cljs.core.ArrayIter.cljs$lang$type = true;

cljs.core.ArrayIter.cljs$lang$ctorStr = "cljs.core/ArrayIter";

cljs.core.ArrayIter.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write(writer__4226__auto__,"cljs.core/ArrayIter");
});

cljs.core.__GT_ArrayIter = (function __GT_ArrayIter(arr,i){
return (new cljs.core.ArrayIter(arr,i));
});

cljs.core.array_iter = (function array_iter(x){
return (new cljs.core.ArrayIter(x,(0)));
});
cljs.core.INIT = {};
cljs.core.START = {};

/**
* @constructor
*/
cljs.core.SeqIter = (function (_seq,_next){
this._seq = _seq;
this._next = _next;
})
cljs.core.SeqIter.prototype.hasNext = (function (){
var self__ = this;
var _ = this;
if((self__._seq === cljs.core.INIT)){
self__._seq = cljs.core.START;

self__._next = cljs.core.seq(self__._next);
} else {
if((self__._seq === self__._next)){
self__._next = cljs.core.next(self__._seq);
} else {
}
}

return !((self__._next == null));
});

cljs.core.SeqIter.prototype.next = (function (){
var self__ = this;
var this$ = this;
if(cljs.core.not(this$.hasNext())){
throw (new Error("No such element"));
} else {
self__._seq = self__._next;

return cljs.core.first(self__._next);
}
});

cljs.core.SeqIter.prototype.remove = (function (){
var self__ = this;
var _ = this;
return (new Error("Unsupported operation"));
});

cljs.core.SeqIter.cljs$lang$type = true;

cljs.core.SeqIter.cljs$lang$ctorStr = "cljs.core/SeqIter";

cljs.core.SeqIter.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write(writer__4226__auto__,"cljs.core/SeqIter");
});

cljs.core.__GT_SeqIter = (function __GT_SeqIter(_seq,_next){
return (new cljs.core.SeqIter(_seq,_next));
});

cljs.core.seq_iter = (function seq_iter(coll){
return (new cljs.core.SeqIter(cljs.core.INIT,coll));
});
cljs.core.iter = (function iter(coll){
if((coll == null)){
return cljs.core.nil_iter();
} else {
if(typeof coll === 'string'){
return cljs.core.string_iter(coll);
} else {
if(coll instanceof Array){
return cljs.core.array_iter(coll);
} else {
if(cljs.core.iterable_QMARK_(coll)){
return cljs.core._iterator(coll);
} else {
if(cljs.core.seqable_QMARK_(coll)){
return cljs.core.seq_iter(coll);
} else {
throw (new Error([cljs.core.str("Cannot create iterator from "),cljs.core.str(coll)].join('')));

}
}
}
}
}
});
cljs.core.lazy_transformer = (function lazy_transformer(stepper){
return (new cljs.core.LazyTransformer(stepper,null,null,null));
});

/**
* @constructor
*/
cljs.core.Stepper = (function (xform,iter){
this.xform = xform;
this.iter = iter;
})
cljs.core.Stepper.prototype.step = (function (lt){
var self__ = this;
var this$ = this;
while(true){
if(cljs.core.truth_((function (){var and__3626__auto__ = !((lt.stepper == null));
if(and__3626__auto__){
return self__.iter.hasNext();
} else {
return and__3626__auto__;
}
})())){
if(cljs.core.reduced_QMARK_((function (){var G__13332 = lt;
var G__13333 = self__.iter.next();
return (self__.xform.cljs$core$IFn$_invoke$arity$2 ? self__.xform.cljs$core$IFn$_invoke$arity$2(G__13332,G__13333) : self__.xform.call(null,G__13332,G__13333));
})())){
if((lt.rest == null)){
} else {
lt.rest.stepper = null;
}
} else {
continue;
}
} else {
}
break;
}

if((lt.stepper == null)){
return null;
} else {
var G__13334 = lt;
return (self__.xform.cljs$core$IFn$_invoke$arity$1 ? self__.xform.cljs$core$IFn$_invoke$arity$1(G__13334) : self__.xform.call(null,G__13334));
}
});

cljs.core.Stepper.cljs$lang$type = true;

cljs.core.Stepper.cljs$lang$ctorStr = "cljs.core/Stepper";

cljs.core.Stepper.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write(writer__4226__auto__,"cljs.core/Stepper");
});

cljs.core.__GT_Stepper = (function __GT_Stepper(xform,iter){
return (new cljs.core.Stepper(xform,iter));
});

cljs.core.stepper = (function stepper(xform,iter){
var stepfn = (function() {
var stepfn = null;
var stepfn__1 = (function (result){
var lt = ((cljs.core.reduced_QMARK_(result))?cljs.core.deref(result):result);
lt.stepper = null;

return result;
});
var stepfn__2 = (function (result,input){
var lt = result;
lt.first = input;

lt.rest = cljs.core.lazy_transformer(lt.stepper);

lt.stepper = null;

return lt.rest;
});
stepfn = function(result,input){
switch(arguments.length){
case 1:
return stepfn__1.call(this,result);
case 2:
return stepfn__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
stepfn.cljs$core$IFn$_invoke$arity$1 = stepfn__1;
stepfn.cljs$core$IFn$_invoke$arity$2 = stepfn__2;
return stepfn;
})()
;
return (new cljs.core.Stepper((function (){var G__13336 = stepfn;
return (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(G__13336) : xform.call(null,G__13336));
})(),iter));
});

/**
* @constructor
*/
cljs.core.MultiStepper = (function (xform,iters,nexts){
this.xform = xform;
this.iters = iters;
this.nexts = nexts;
})
cljs.core.MultiStepper.prototype.hasNext = (function (){
var self__ = this;
var _ = this;
var iters__$1 = cljs.core.seq(self__.iters);
while(true){
if(!((iters__$1 == null))){
var iter = cljs.core.first(iters__$1);
if(cljs.core.not(iter.hasNext())){
return false;
} else {
var G__13338 = cljs.core.next(iters__$1);
iters__$1 = G__13338;
continue;
}
} else {
return true;
}
break;
}
});

cljs.core.MultiStepper.prototype.next = (function (){
var self__ = this;
var _ = this;
var n__4525__auto___13339 = self__.iters.length;
var i_13340 = (0);
while(true){
if((i_13340 < n__4525__auto___13339)){
(self__.nexts[i_13340] = (self__.iters[i_13340]).next());

var G__13341 = (i_13340 + (1));
i_13340 = G__13341;
continue;
} else {
}
break;
}

return cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(self__.nexts,(0));
});

cljs.core.MultiStepper.prototype.step = (function (lt){
var self__ = this;
var this$ = this;
while(true){
if(cljs.core.truth_((function (){var and__3626__auto__ = !((lt.stepper == null));
if(and__3626__auto__){
return this$.hasNext();
} else {
return and__3626__auto__;
}
})())){
if(cljs.core.reduced_QMARK_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(self__.xform,cljs.core.cons(lt,this$.next())))){
if((lt.rest == null)){
} else {
lt.rest.stepper = null;
}
} else {
continue;
}
} else {
}
break;
}

if((lt.stepper == null)){
return null;
} else {
var G__13337 = lt;
return (self__.xform.cljs$core$IFn$_invoke$arity$1 ? self__.xform.cljs$core$IFn$_invoke$arity$1(G__13337) : self__.xform.call(null,G__13337));
}
});

cljs.core.MultiStepper.cljs$lang$type = true;

cljs.core.MultiStepper.cljs$lang$ctorStr = "cljs.core/MultiStepper";

cljs.core.MultiStepper.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write(writer__4226__auto__,"cljs.core/MultiStepper");
});

cljs.core.__GT_MultiStepper = (function __GT_MultiStepper(xform,iters,nexts){
return (new cljs.core.MultiStepper(xform,iters,nexts));
});

cljs.core.multi_stepper = (function() {
var multi_stepper = null;
var multi_stepper__2 = (function (xform,iters){
return multi_stepper.cljs$core$IFn$_invoke$arity$3(xform,iters,(new Array(iters.length)));
});
var multi_stepper__3 = (function (xform,iters,nexts){
var stepfn = (function() {
var stepfn = null;
var stepfn__1 = (function (result){
var lt = ((cljs.core.reduced_QMARK_(result))?cljs.core.deref(result):result);
lt.stepper = null;

return lt;
});
var stepfn__2 = (function (result,input){
var lt = result;
lt.first = input;

lt.rest = cljs.core.lazy_transformer(lt.stepper);

lt.stepper = null;

return lt.rest;
});
stepfn = function(result,input){
switch(arguments.length){
case 1:
return stepfn__1.call(this,result);
case 2:
return stepfn__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
stepfn.cljs$core$IFn$_invoke$arity$1 = stepfn__1;
stepfn.cljs$core$IFn$_invoke$arity$2 = stepfn__2;
return stepfn;
})()
;
return (new cljs.core.MultiStepper((function (){var G__13346 = stepfn;
return (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(G__13346) : xform.call(null,G__13346));
})(),iters,nexts));
});
multi_stepper = function(xform,iters,nexts){
switch(arguments.length){
case 2:
return multi_stepper__2.call(this,xform,iters);
case 3:
return multi_stepper__3.call(this,xform,iters,nexts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
multi_stepper.cljs$core$IFn$_invoke$arity$2 = multi_stepper__2;
multi_stepper.cljs$core$IFn$_invoke$arity$3 = multi_stepper__3;
return multi_stepper;
})()
;

/**
* @constructor
*/
cljs.core.LazyTransformer = (function (stepper,first,rest,meta){
this.stepper = stepper;
this.first = first;
this.rest = rest;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31719628;
})
cljs.core.LazyTransformer.prototype.cljs$core$INext$_next$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((self__.stepper == null)){
} else {
cljs.core._seq(this$__$1);
}

if((self__.rest == null)){
return null;
} else {
return cljs.core._seq(self__.rest);
}
});

cljs.core.LazyTransformer.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((self__.stepper == null)){
} else {
cljs.core._seq(this$__$1);
}

if((self__.rest == null)){
return null;
} else {
return self__.first;
}
});

cljs.core.LazyTransformer.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((self__.stepper == null)){
} else {
cljs.core._seq(this$__$1);
}

if((self__.rest == null)){
return cljs.core.List.EMPTY;
} else {
return self__.rest;
}
});

cljs.core.LazyTransformer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((self__.stepper == null)){
} else {
self__.stepper.step(this$__$1);
}

if((self__.rest == null)){
return null;
} else {
return this$__$1;
}
});

cljs.core.LazyTransformer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.hash_ordered_coll(this$__$1);
});

cljs.core.LazyTransformer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
var s = cljs.core._seq(this$__$1);
if(!((s == null))){
return cljs.core.equiv_sequential(this$__$1,other);
} else {
return (cljs.core.sequential_QMARK_(other)) && ((cljs.core.seq(other) == null));
}
});

cljs.core.LazyTransformer.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.List.EMPTY;
});

cljs.core.LazyTransformer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,o){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons(o,cljs.core._seq(this$__$1));
});

cljs.core.LazyTransformer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,new_meta){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.LazyTransformer(self__.stepper,self__.first,self__.rest,new_meta));
});

cljs.core.LazyTransformer.cljs$lang$type = true;

cljs.core.LazyTransformer.cljs$lang$ctorStr = "cljs.core/LazyTransformer";

cljs.core.LazyTransformer.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write(writer__4226__auto__,"cljs.core/LazyTransformer");
});

cljs.core.__GT_LazyTransformer = (function __GT_LazyTransformer(stepper,first,rest,meta){
return (new cljs.core.LazyTransformer(stepper,first,rest,meta));
});

(cljs.core.LazyTransformer.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4616__auto__ = this;
return cljs.core.es6_iterator(this__4616__auto__);
}));
cljs.core.LazyTransformer.create = (function (xform,coll){
return (new cljs.core.LazyTransformer(cljs.core.stepper(xform,cljs.core.iter(coll)),null,null,null));
});
cljs.core.LazyTransformer.createMulti = (function (xform,colls){
var iters = [];
var seq__13347_13351 = cljs.core.seq(colls);
var chunk__13348_13352 = null;
var count__13349_13353 = (0);
var i__13350_13354 = (0);
while(true){
if((i__13350_13354 < count__13349_13353)){
var coll_13355 = chunk__13348_13352.cljs$core$IIndexed$_nth$arity$2(null,i__13350_13354);
iters.push(cljs.core.iter(coll_13355));

var G__13356 = seq__13347_13351;
var G__13357 = chunk__13348_13352;
var G__13358 = count__13349_13353;
var G__13359 = (i__13350_13354 + (1));
seq__13347_13351 = G__13356;
chunk__13348_13352 = G__13357;
count__13349_13353 = G__13358;
i__13350_13354 = G__13359;
continue;
} else {
var temp__4126__auto___13360 = cljs.core.seq(seq__13347_13351);
if(temp__4126__auto___13360){
var seq__13347_13361__$1 = temp__4126__auto___13360;
if(cljs.core.chunked_seq_QMARK_(seq__13347_13361__$1)){
var c__4425__auto___13362 = cljs.core.chunk_first(seq__13347_13361__$1);
var G__13363 = cljs.core.chunk_rest(seq__13347_13361__$1);
var G__13364 = c__4425__auto___13362;
var G__13365 = cljs.core.count(c__4425__auto___13362);
var G__13366 = (0);
seq__13347_13351 = G__13363;
chunk__13348_13352 = G__13364;
count__13349_13353 = G__13365;
i__13350_13354 = G__13366;
continue;
} else {
var coll_13367 = cljs.core.first(seq__13347_13361__$1);
iters.push(cljs.core.iter(coll_13367));

var G__13368 = cljs.core.next(seq__13347_13361__$1);
var G__13369 = null;
var G__13370 = (0);
var G__13371 = (0);
seq__13347_13351 = G__13368;
chunk__13348_13352 = G__13369;
count__13349_13353 = G__13370;
i__13350_13354 = G__13371;
continue;
}
} else {
}
}
break;
}

return (new cljs.core.LazyTransformer(cljs.core.multi_stepper.cljs$core$IFn$_invoke$arity$3(xform,iters,(new Array(iters.length))),null,null,null));
});
/**
* Coerces coll to a (possibly empty) sequence, if it is not already
* one. Will not force a lazy seq. (sequence nil) yields (), When a
* transducer is supplied, returns a lazy sequence of applications of
* the transform to the items in coll(s), i.e. to the set of first
* items of each coll, followed by the set of second
* items in each coll, until any one of the colls is exhausted.  Any
* remaining items in other colls are ignored. The transform should accept
* number-of-colls arguments
* @param {...*} var_args
*/
cljs.core.sequence = (function() {
var sequence = null;
var sequence__1 = (function (coll){
if(cljs.core.seq_QMARK_(coll)){
return coll;
} else {
var or__3638__auto__ = cljs.core.seq(coll);
if(or__3638__auto__){
return or__3638__auto__;
} else {
return cljs.core.List.EMPTY;
}
}
});
var sequence__2 = (function (xform,coll){
return cljs.core.LazyTransformer.create(xform,coll);
});
var sequence__3 = (function() { 
var G__13372__delegate = function (xform,coll,colls){
return cljs.core.LazyTransformer.createMulti(xform,cljs.core.to_array(cljs.core.cons(coll,colls)));
};
var G__13372 = function (xform,coll,var_args){
var colls = null;
if (arguments.length > 2) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__13372__delegate.call(this,xform,coll,colls);};
G__13372.cljs$lang$maxFixedArity = 2;
G__13372.cljs$lang$applyTo = (function (arglist__13373){
var xform = cljs.core.first(arglist__13373);
arglist__13373 = cljs.core.next(arglist__13373);
var coll = cljs.core.first(arglist__13373);
var colls = cljs.core.rest(arglist__13373);
return G__13372__delegate(xform,coll,colls);
});
G__13372.cljs$core$IFn$_invoke$arity$variadic = G__13372__delegate;
return G__13372;
})()
;
sequence = function(xform,coll,var_args){
var colls = var_args;
switch(arguments.length){
case 1:
return sequence__1.call(this,xform);
case 2:
return sequence__2.call(this,xform,coll);
default:
return sequence__3.cljs$core$IFn$_invoke$arity$variadic(xform,coll, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sequence.cljs$lang$maxFixedArity = 2;
sequence.cljs$lang$applyTo = sequence__3.cljs$lang$applyTo;
sequence.cljs$core$IFn$_invoke$arity$1 = sequence__1;
sequence.cljs$core$IFn$_invoke$arity$2 = sequence__2;
sequence.cljs$core$IFn$_invoke$arity$variadic = sequence__3.cljs$core$IFn$_invoke$arity$variadic;
return sequence;
})()
;
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){
while(true){
if((cljs.core.seq(coll) == null)){
return true;
} else {
if(cljs.core.truth_((function (){var G__13375 = cljs.core.first(coll);
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__13375) : pred.call(null,G__13375));
})())){
var G__13376 = pred;
var G__13377 = cljs.core.next(coll);
pred = G__13376;
coll = G__13377;
continue;
} else {
return false;

}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){
return !(cljs.core.every_QMARK_(pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){
while(true){
if(cljs.core.seq(coll)){
var or__3638__auto__ = (function (){var G__13381 = cljs.core.first(coll);
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__13381) : pred.call(null,G__13381));
})();
if(cljs.core.truth_(or__3638__auto__)){
return or__3638__auto__;
} else {
var G__13382 = pred;
var G__13383 = cljs.core.next(coll);
pred = G__13382;
coll = G__13383;
continue;
}
} else {
return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){
return cljs.core.not(cljs.core.some(pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){
if(cljs.core.integer_QMARK_(n)){
return ((n & (1)) === (0));
} else {
throw (new Error([cljs.core.str("Argument must be an integer: "),cljs.core.str(n)].join('')));
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){
return !(cljs.core.even_QMARK_(n));
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){
return (function() {
var G__13390 = null;
var G__13390__0 = (function (){
return cljs.core.not((function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})());
});
var G__13390__1 = (function (x){
return cljs.core.not((function (){var G__13387 = x;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13387) : f.call(null,G__13387));
})());
});
var G__13390__2 = (function (x,y){
return cljs.core.not((function (){var G__13388 = x;
var G__13389 = y;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__13388,G__13389) : f.call(null,G__13388,G__13389));
})());
});
var G__13390__3 = (function() { 
var G__13391__delegate = function (x,y,zs){
return cljs.core.not(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(f,x,y,zs));
};
var G__13391 = function (x,y,var_args){
var zs = null;
if (arguments.length > 2) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__13391__delegate.call(this,x,y,zs);};
G__13391.cljs$lang$maxFixedArity = 2;
G__13391.cljs$lang$applyTo = (function (arglist__13392){
var x = cljs.core.first(arglist__13392);
arglist__13392 = cljs.core.next(arglist__13392);
var y = cljs.core.first(arglist__13392);
var zs = cljs.core.rest(arglist__13392);
return G__13391__delegate(x,y,zs);
});
G__13391.cljs$core$IFn$_invoke$arity$variadic = G__13391__delegate;
return G__13391;
})()
;
G__13390 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__13390__0.call(this);
case 1:
return G__13390__1.call(this,x);
case 2:
return G__13390__2.call(this,x,y);
default:
return G__13390__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13390.cljs$lang$maxFixedArity = 2;
G__13390.cljs$lang$applyTo = G__13390__3.cljs$lang$applyTo;
G__13390.cljs$core$IFn$_invoke$arity$0 = G__13390__0;
G__13390.cljs$core$IFn$_invoke$arity$1 = G__13390__1;
G__13390.cljs$core$IFn$_invoke$arity$2 = G__13390__2;
G__13390.cljs$core$IFn$_invoke$arity$variadic = G__13390__3.cljs$core$IFn$_invoke$arity$variadic;
return G__13390;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__13393__delegate = function (args){
return x;
};
var G__13393 = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__13393__delegate.call(this,args);};
G__13393.cljs$lang$maxFixedArity = 0;
G__13393.cljs$lang$applyTo = (function (arglist__13394){
var args = cljs.core.seq(arglist__13394);
return G__13393__delegate(args);
});
G__13393.cljs$core$IFn$_invoke$arity$variadic = G__13393__delegate;
return G__13393;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__0 = (function (){
return cljs.core.identity;
});
var comp__1 = (function (f){
return f;
});
var comp__2 = (function (f,g){
return (function() {
var G__13449 = null;
var G__13449__0 = (function (){
var G__13422 = (function (){return (g.cljs$core$IFn$_invoke$arity$0 ? g.cljs$core$IFn$_invoke$arity$0() : g.call(null));
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13422) : f.call(null,G__13422));
});
var G__13449__1 = (function (x){
var G__13423 = (function (){var G__13424 = x;
return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__13424) : g.call(null,G__13424));
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13423) : f.call(null,G__13423));
});
var G__13449__2 = (function (x,y){
var G__13425 = (function (){var G__13426 = x;
var G__13427 = y;
return (g.cljs$core$IFn$_invoke$arity$2 ? g.cljs$core$IFn$_invoke$arity$2(G__13426,G__13427) : g.call(null,G__13426,G__13427));
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13425) : f.call(null,G__13425));
});
var G__13449__3 = (function (x,y,z){
var G__13428 = (function (){var G__13429 = x;
var G__13430 = y;
var G__13431 = z;
return (g.cljs$core$IFn$_invoke$arity$3 ? g.cljs$core$IFn$_invoke$arity$3(G__13429,G__13430,G__13431) : g.call(null,G__13429,G__13430,G__13431));
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13428) : f.call(null,G__13428));
});
var G__13449__4 = (function() { 
var G__13450__delegate = function (x,y,z,args){
var G__13432 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(g,x,y,z,args);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13432) : f.call(null,G__13432));
};
var G__13450 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13450__delegate.call(this,x,y,z,args);};
G__13450.cljs$lang$maxFixedArity = 3;
G__13450.cljs$lang$applyTo = (function (arglist__13451){
var x = cljs.core.first(arglist__13451);
arglist__13451 = cljs.core.next(arglist__13451);
var y = cljs.core.first(arglist__13451);
arglist__13451 = cljs.core.next(arglist__13451);
var z = cljs.core.first(arglist__13451);
var args = cljs.core.rest(arglist__13451);
return G__13450__delegate(x,y,z,args);
});
G__13450.cljs$core$IFn$_invoke$arity$variadic = G__13450__delegate;
return G__13450;
})()
;
G__13449 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__13449__0.call(this);
case 1:
return G__13449__1.call(this,x);
case 2:
return G__13449__2.call(this,x,y);
case 3:
return G__13449__3.call(this,x,y,z);
default:
return G__13449__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13449.cljs$lang$maxFixedArity = 3;
G__13449.cljs$lang$applyTo = G__13449__4.cljs$lang$applyTo;
G__13449.cljs$core$IFn$_invoke$arity$0 = G__13449__0;
G__13449.cljs$core$IFn$_invoke$arity$1 = G__13449__1;
G__13449.cljs$core$IFn$_invoke$arity$2 = G__13449__2;
G__13449.cljs$core$IFn$_invoke$arity$3 = G__13449__3;
G__13449.cljs$core$IFn$_invoke$arity$variadic = G__13449__4.cljs$core$IFn$_invoke$arity$variadic;
return G__13449;
})()
});
var comp__3 = (function (f,g,h){
return (function() {
var G__13452 = null;
var G__13452__0 = (function (){
var G__13433 = (function (){var G__13434 = (function (){return (h.cljs$core$IFn$_invoke$arity$0 ? h.cljs$core$IFn$_invoke$arity$0() : h.call(null));
})();
return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__13434) : g.call(null,G__13434));
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13433) : f.call(null,G__13433));
});
var G__13452__1 = (function (x){
var G__13435 = (function (){var G__13436 = (function (){var G__13437 = x;
return (h.cljs$core$IFn$_invoke$arity$1 ? h.cljs$core$IFn$_invoke$arity$1(G__13437) : h.call(null,G__13437));
})();
return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__13436) : g.call(null,G__13436));
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13435) : f.call(null,G__13435));
});
var G__13452__2 = (function (x,y){
var G__13438 = (function (){var G__13439 = (function (){var G__13440 = x;
var G__13441 = y;
return (h.cljs$core$IFn$_invoke$arity$2 ? h.cljs$core$IFn$_invoke$arity$2(G__13440,G__13441) : h.call(null,G__13440,G__13441));
})();
return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__13439) : g.call(null,G__13439));
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13438) : f.call(null,G__13438));
});
var G__13452__3 = (function (x,y,z){
var G__13442 = (function (){var G__13443 = (function (){var G__13444 = x;
var G__13445 = y;
var G__13446 = z;
return (h.cljs$core$IFn$_invoke$arity$3 ? h.cljs$core$IFn$_invoke$arity$3(G__13444,G__13445,G__13446) : h.call(null,G__13444,G__13445,G__13446));
})();
return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__13443) : g.call(null,G__13443));
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13442) : f.call(null,G__13442));
});
var G__13452__4 = (function() { 
var G__13453__delegate = function (x,y,z,args){
var G__13447 = (function (){var G__13448 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(h,x,y,z,args);
return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__13448) : g.call(null,G__13448));
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13447) : f.call(null,G__13447));
};
var G__13453 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13453__delegate.call(this,x,y,z,args);};
G__13453.cljs$lang$maxFixedArity = 3;
G__13453.cljs$lang$applyTo = (function (arglist__13454){
var x = cljs.core.first(arglist__13454);
arglist__13454 = cljs.core.next(arglist__13454);
var y = cljs.core.first(arglist__13454);
arglist__13454 = cljs.core.next(arglist__13454);
var z = cljs.core.first(arglist__13454);
var args = cljs.core.rest(arglist__13454);
return G__13453__delegate(x,y,z,args);
});
G__13453.cljs$core$IFn$_invoke$arity$variadic = G__13453__delegate;
return G__13453;
})()
;
G__13452 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__13452__0.call(this);
case 1:
return G__13452__1.call(this,x);
case 2:
return G__13452__2.call(this,x,y);
case 3:
return G__13452__3.call(this,x,y,z);
default:
return G__13452__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13452.cljs$lang$maxFixedArity = 3;
G__13452.cljs$lang$applyTo = G__13452__4.cljs$lang$applyTo;
G__13452.cljs$core$IFn$_invoke$arity$0 = G__13452__0;
G__13452.cljs$core$IFn$_invoke$arity$1 = G__13452__1;
G__13452.cljs$core$IFn$_invoke$arity$2 = G__13452__2;
G__13452.cljs$core$IFn$_invoke$arity$3 = G__13452__3;
G__13452.cljs$core$IFn$_invoke$arity$variadic = G__13452__4.cljs$core$IFn$_invoke$arity$variadic;
return G__13452;
})()
});
var comp__4 = (function() { 
var G__13455__delegate = function (f1,f2,f3,fs){
var fs__$1 = cljs.core.reverse(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4(f1,f2,f3,fs));
return ((function (fs__$1){
return (function() { 
var G__13456__delegate = function (args){
var ret = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.first(fs__$1),args);
var fs__$2 = cljs.core.next(fs__$1);
while(true){
if(fs__$2){
var G__13457 = cljs.core.first(fs__$2).call(null,ret);
var G__13458 = cljs.core.next(fs__$2);
ret = G__13457;
fs__$2 = G__13458;
continue;
} else {
return ret;
}
break;
}
};
var G__13456 = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__13456__delegate.call(this,args);};
G__13456.cljs$lang$maxFixedArity = 0;
G__13456.cljs$lang$applyTo = (function (arglist__13459){
var args = cljs.core.seq(arglist__13459);
return G__13456__delegate(args);
});
G__13456.cljs$core$IFn$_invoke$arity$variadic = G__13456__delegate;
return G__13456;
})()
;
;})(fs__$1))
};
var G__13455 = function (f1,f2,f3,var_args){
var fs = null;
if (arguments.length > 3) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13455__delegate.call(this,f1,f2,f3,fs);};
G__13455.cljs$lang$maxFixedArity = 3;
G__13455.cljs$lang$applyTo = (function (arglist__13460){
var f1 = cljs.core.first(arglist__13460);
arglist__13460 = cljs.core.next(arglist__13460);
var f2 = cljs.core.first(arglist__13460);
arglist__13460 = cljs.core.next(arglist__13460);
var f3 = cljs.core.first(arglist__13460);
var fs = cljs.core.rest(arglist__13460);
return G__13455__delegate(f1,f2,f3,fs);
});
G__13455.cljs$core$IFn$_invoke$arity$variadic = G__13455__delegate;
return G__13455;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case 0:
return comp__0.call(this);
case 1:
return comp__1.call(this,f1);
case 2:
return comp__2.call(this,f1,f2);
case 3:
return comp__3.call(this,f1,f2,f3);
default:
return comp__4.cljs$core$IFn$_invoke$arity$variadic(f1,f2,f3, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__4.cljs$lang$applyTo;
comp.cljs$core$IFn$_invoke$arity$0 = comp__0;
comp.cljs$core$IFn$_invoke$arity$1 = comp__1;
comp.cljs$core$IFn$_invoke$arity$2 = comp__2;
comp.cljs$core$IFn$_invoke$arity$3 = comp__3;
comp.cljs$core$IFn$_invoke$arity$variadic = comp__4.cljs$core$IFn$_invoke$arity$variadic;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__1 = (function (f){
return f;
});
var partial__2 = (function (f,arg1){
return (function() {
var G__13545 = null;
var G__13545__0 = (function (){
var G__13503 = arg1;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13503) : f.call(null,G__13503));
});
var G__13545__1 = (function (x){
var G__13504 = arg1;
var G__13505 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__13504,G__13505) : f.call(null,G__13504,G__13505));
});
var G__13545__2 = (function (x,y){
var G__13506 = arg1;
var G__13507 = x;
var G__13508 = y;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__13506,G__13507,G__13508) : f.call(null,G__13506,G__13507,G__13508));
});
var G__13545__3 = (function (x,y,z){
var G__13509 = arg1;
var G__13510 = x;
var G__13511 = y;
var G__13512 = z;
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__13509,G__13510,G__13511,G__13512) : f.call(null,G__13509,G__13510,G__13511,G__13512));
});
var G__13545__4 = (function() { 
var G__13546__delegate = function (x,y,z,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,arg1,x,y,z,cljs.core.array_seq([args], 0));
};
var G__13546 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13546__delegate.call(this,x,y,z,args);};
G__13546.cljs$lang$maxFixedArity = 3;
G__13546.cljs$lang$applyTo = (function (arglist__13547){
var x = cljs.core.first(arglist__13547);
arglist__13547 = cljs.core.next(arglist__13547);
var y = cljs.core.first(arglist__13547);
arglist__13547 = cljs.core.next(arglist__13547);
var z = cljs.core.first(arglist__13547);
var args = cljs.core.rest(arglist__13547);
return G__13546__delegate(x,y,z,args);
});
G__13546.cljs$core$IFn$_invoke$arity$variadic = G__13546__delegate;
return G__13546;
})()
;
G__13545 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__13545__0.call(this);
case 1:
return G__13545__1.call(this,x);
case 2:
return G__13545__2.call(this,x,y);
case 3:
return G__13545__3.call(this,x,y,z);
default:
return G__13545__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13545.cljs$lang$maxFixedArity = 3;
G__13545.cljs$lang$applyTo = G__13545__4.cljs$lang$applyTo;
G__13545.cljs$core$IFn$_invoke$arity$0 = G__13545__0;
G__13545.cljs$core$IFn$_invoke$arity$1 = G__13545__1;
G__13545.cljs$core$IFn$_invoke$arity$2 = G__13545__2;
G__13545.cljs$core$IFn$_invoke$arity$3 = G__13545__3;
G__13545.cljs$core$IFn$_invoke$arity$variadic = G__13545__4.cljs$core$IFn$_invoke$arity$variadic;
return G__13545;
})()
});
var partial__3 = (function (f,arg1,arg2){
return (function() {
var G__13548 = null;
var G__13548__0 = (function (){
var G__13513 = arg1;
var G__13514 = arg2;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__13513,G__13514) : f.call(null,G__13513,G__13514));
});
var G__13548__1 = (function (x){
var G__13515 = arg1;
var G__13516 = arg2;
var G__13517 = x;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__13515,G__13516,G__13517) : f.call(null,G__13515,G__13516,G__13517));
});
var G__13548__2 = (function (x,y){
var G__13518 = arg1;
var G__13519 = arg2;
var G__13520 = x;
var G__13521 = y;
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__13518,G__13519,G__13520,G__13521) : f.call(null,G__13518,G__13519,G__13520,G__13521));
});
var G__13548__3 = (function (x,y,z){
var G__13522 = arg1;
var G__13523 = arg2;
var G__13524 = x;
var G__13525 = y;
var G__13526 = z;
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(G__13522,G__13523,G__13524,G__13525,G__13526) : f.call(null,G__13522,G__13523,G__13524,G__13525,G__13526));
});
var G__13548__4 = (function() { 
var G__13549__delegate = function (x,y,z,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,arg1,arg2,x,y,cljs.core.array_seq([z,args], 0));
};
var G__13549 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13549__delegate.call(this,x,y,z,args);};
G__13549.cljs$lang$maxFixedArity = 3;
G__13549.cljs$lang$applyTo = (function (arglist__13550){
var x = cljs.core.first(arglist__13550);
arglist__13550 = cljs.core.next(arglist__13550);
var y = cljs.core.first(arglist__13550);
arglist__13550 = cljs.core.next(arglist__13550);
var z = cljs.core.first(arglist__13550);
var args = cljs.core.rest(arglist__13550);
return G__13549__delegate(x,y,z,args);
});
G__13549.cljs$core$IFn$_invoke$arity$variadic = G__13549__delegate;
return G__13549;
})()
;
G__13548 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__13548__0.call(this);
case 1:
return G__13548__1.call(this,x);
case 2:
return G__13548__2.call(this,x,y);
case 3:
return G__13548__3.call(this,x,y,z);
default:
return G__13548__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13548.cljs$lang$maxFixedArity = 3;
G__13548.cljs$lang$applyTo = G__13548__4.cljs$lang$applyTo;
G__13548.cljs$core$IFn$_invoke$arity$0 = G__13548__0;
G__13548.cljs$core$IFn$_invoke$arity$1 = G__13548__1;
G__13548.cljs$core$IFn$_invoke$arity$2 = G__13548__2;
G__13548.cljs$core$IFn$_invoke$arity$3 = G__13548__3;
G__13548.cljs$core$IFn$_invoke$arity$variadic = G__13548__4.cljs$core$IFn$_invoke$arity$variadic;
return G__13548;
})()
});
var partial__4 = (function (f,arg1,arg2,arg3){
return (function() {
var G__13551 = null;
var G__13551__0 = (function (){
var G__13527 = arg1;
var G__13528 = arg2;
var G__13529 = arg3;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__13527,G__13528,G__13529) : f.call(null,G__13527,G__13528,G__13529));
});
var G__13551__1 = (function (x){
var G__13530 = arg1;
var G__13531 = arg2;
var G__13532 = arg3;
var G__13533 = x;
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__13530,G__13531,G__13532,G__13533) : f.call(null,G__13530,G__13531,G__13532,G__13533));
});
var G__13551__2 = (function (x,y){
var G__13534 = arg1;
var G__13535 = arg2;
var G__13536 = arg3;
var G__13537 = x;
var G__13538 = y;
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(G__13534,G__13535,G__13536,G__13537,G__13538) : f.call(null,G__13534,G__13535,G__13536,G__13537,G__13538));
});
var G__13551__3 = (function (x,y,z){
var G__13539 = arg1;
var G__13540 = arg2;
var G__13541 = arg3;
var G__13542 = x;
var G__13543 = y;
var G__13544 = z;
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(G__13539,G__13540,G__13541,G__13542,G__13543,G__13544) : f.call(null,G__13539,G__13540,G__13541,G__13542,G__13543,G__13544));
});
var G__13551__4 = (function() { 
var G__13552__delegate = function (x,y,z,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,arg1,arg2,arg3,x,cljs.core.array_seq([y,z,args], 0));
};
var G__13552 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13552__delegate.call(this,x,y,z,args);};
G__13552.cljs$lang$maxFixedArity = 3;
G__13552.cljs$lang$applyTo = (function (arglist__13553){
var x = cljs.core.first(arglist__13553);
arglist__13553 = cljs.core.next(arglist__13553);
var y = cljs.core.first(arglist__13553);
arglist__13553 = cljs.core.next(arglist__13553);
var z = cljs.core.first(arglist__13553);
var args = cljs.core.rest(arglist__13553);
return G__13552__delegate(x,y,z,args);
});
G__13552.cljs$core$IFn$_invoke$arity$variadic = G__13552__delegate;
return G__13552;
})()
;
G__13551 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__13551__0.call(this);
case 1:
return G__13551__1.call(this,x);
case 2:
return G__13551__2.call(this,x,y);
case 3:
return G__13551__3.call(this,x,y,z);
default:
return G__13551__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13551.cljs$lang$maxFixedArity = 3;
G__13551.cljs$lang$applyTo = G__13551__4.cljs$lang$applyTo;
G__13551.cljs$core$IFn$_invoke$arity$0 = G__13551__0;
G__13551.cljs$core$IFn$_invoke$arity$1 = G__13551__1;
G__13551.cljs$core$IFn$_invoke$arity$2 = G__13551__2;
G__13551.cljs$core$IFn$_invoke$arity$3 = G__13551__3;
G__13551.cljs$core$IFn$_invoke$arity$variadic = G__13551__4.cljs$core$IFn$_invoke$arity$variadic;
return G__13551;
})()
});
var partial__5 = (function() { 
var G__13554__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__13555__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,arg1,arg2,arg3,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(more,args));
};
var G__13555 = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__13555__delegate.call(this,args);};
G__13555.cljs$lang$maxFixedArity = 0;
G__13555.cljs$lang$applyTo = (function (arglist__13556){
var args = cljs.core.seq(arglist__13556);
return G__13555__delegate(args);
});
G__13555.cljs$core$IFn$_invoke$arity$variadic = G__13555__delegate;
return G__13555;
})()
;
};
var G__13554 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (arguments.length > 4) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__13554__delegate.call(this,f,arg1,arg2,arg3,more);};
G__13554.cljs$lang$maxFixedArity = 4;
G__13554.cljs$lang$applyTo = (function (arglist__13557){
var f = cljs.core.first(arglist__13557);
arglist__13557 = cljs.core.next(arglist__13557);
var arg1 = cljs.core.first(arglist__13557);
arglist__13557 = cljs.core.next(arglist__13557);
var arg2 = cljs.core.first(arglist__13557);
arglist__13557 = cljs.core.next(arglist__13557);
var arg3 = cljs.core.first(arglist__13557);
var more = cljs.core.rest(arglist__13557);
return G__13554__delegate(f,arg1,arg2,arg3,more);
});
G__13554.cljs$core$IFn$_invoke$arity$variadic = G__13554__delegate;
return G__13554;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return partial__1.call(this,f);
case 2:
return partial__2.call(this,f,arg1);
case 3:
return partial__3.call(this,f,arg1,arg2);
case 4:
return partial__4.call(this,f,arg1,arg2,arg3);
default:
return partial__5.cljs$core$IFn$_invoke$arity$variadic(f,arg1,arg2,arg3, cljs.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__5.cljs$lang$applyTo;
partial.cljs$core$IFn$_invoke$arity$1 = partial__1;
partial.cljs$core$IFn$_invoke$arity$2 = partial__2;
partial.cljs$core$IFn$_invoke$arity$3 = partial__3;
partial.cljs$core$IFn$_invoke$arity$4 = partial__4;
partial.cljs$core$IFn$_invoke$arity$variadic = partial__5.cljs$core$IFn$_invoke$arity$variadic;
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljs.core.fnil = (function() {
var fnil = null;
var fnil__2 = (function (f,x){
return (function() {
var G__13590 = null;
var G__13590__1 = (function (a){
var G__13574 = (((a == null))?x:a);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13574) : f.call(null,G__13574));
});
var G__13590__2 = (function (a,b){
var G__13575 = (((a == null))?x:a);
var G__13576 = b;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__13575,G__13576) : f.call(null,G__13575,G__13576));
});
var G__13590__3 = (function (a,b,c){
var G__13577 = (((a == null))?x:a);
var G__13578 = b;
var G__13579 = c;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__13577,G__13578,G__13579) : f.call(null,G__13577,G__13578,G__13579));
});
var G__13590__4 = (function() { 
var G__13591__delegate = function (a,b,c,ds){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,(((a == null))?x:a),b,c,ds);
};
var G__13591 = function (a,b,c,var_args){
var ds = null;
if (arguments.length > 3) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13591__delegate.call(this,a,b,c,ds);};
G__13591.cljs$lang$maxFixedArity = 3;
G__13591.cljs$lang$applyTo = (function (arglist__13592){
var a = cljs.core.first(arglist__13592);
arglist__13592 = cljs.core.next(arglist__13592);
var b = cljs.core.first(arglist__13592);
arglist__13592 = cljs.core.next(arglist__13592);
var c = cljs.core.first(arglist__13592);
var ds = cljs.core.rest(arglist__13592);
return G__13591__delegate(a,b,c,ds);
});
G__13591.cljs$core$IFn$_invoke$arity$variadic = G__13591__delegate;
return G__13591;
})()
;
G__13590 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__13590__1.call(this,a);
case 2:
return G__13590__2.call(this,a,b);
case 3:
return G__13590__3.call(this,a,b,c);
default:
return G__13590__4.cljs$core$IFn$_invoke$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13590.cljs$lang$maxFixedArity = 3;
G__13590.cljs$lang$applyTo = G__13590__4.cljs$lang$applyTo;
G__13590.cljs$core$IFn$_invoke$arity$1 = G__13590__1;
G__13590.cljs$core$IFn$_invoke$arity$2 = G__13590__2;
G__13590.cljs$core$IFn$_invoke$arity$3 = G__13590__3;
G__13590.cljs$core$IFn$_invoke$arity$variadic = G__13590__4.cljs$core$IFn$_invoke$arity$variadic;
return G__13590;
})()
});
var fnil__3 = (function (f,x,y){
return (function() {
var G__13593 = null;
var G__13593__2 = (function (a,b){
var G__13580 = (((a == null))?x:a);
var G__13581 = (((b == null))?y:b);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__13580,G__13581) : f.call(null,G__13580,G__13581));
});
var G__13593__3 = (function (a,b,c){
var G__13582 = (((a == null))?x:a);
var G__13583 = (((b == null))?y:b);
var G__13584 = c;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__13582,G__13583,G__13584) : f.call(null,G__13582,G__13583,G__13584));
});
var G__13593__4 = (function() { 
var G__13594__delegate = function (a,b,c,ds){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__13594 = function (a,b,c,var_args){
var ds = null;
if (arguments.length > 3) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13594__delegate.call(this,a,b,c,ds);};
G__13594.cljs$lang$maxFixedArity = 3;
G__13594.cljs$lang$applyTo = (function (arglist__13595){
var a = cljs.core.first(arglist__13595);
arglist__13595 = cljs.core.next(arglist__13595);
var b = cljs.core.first(arglist__13595);
arglist__13595 = cljs.core.next(arglist__13595);
var c = cljs.core.first(arglist__13595);
var ds = cljs.core.rest(arglist__13595);
return G__13594__delegate(a,b,c,ds);
});
G__13594.cljs$core$IFn$_invoke$arity$variadic = G__13594__delegate;
return G__13594;
})()
;
G__13593 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__13593__2.call(this,a,b);
case 3:
return G__13593__3.call(this,a,b,c);
default:
return G__13593__4.cljs$core$IFn$_invoke$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13593.cljs$lang$maxFixedArity = 3;
G__13593.cljs$lang$applyTo = G__13593__4.cljs$lang$applyTo;
G__13593.cljs$core$IFn$_invoke$arity$2 = G__13593__2;
G__13593.cljs$core$IFn$_invoke$arity$3 = G__13593__3;
G__13593.cljs$core$IFn$_invoke$arity$variadic = G__13593__4.cljs$core$IFn$_invoke$arity$variadic;
return G__13593;
})()
});
var fnil__4 = (function (f,x,y,z){
return (function() {
var G__13596 = null;
var G__13596__2 = (function (a,b){
var G__13585 = (((a == null))?x:a);
var G__13586 = (((b == null))?y:b);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__13585,G__13586) : f.call(null,G__13585,G__13586));
});
var G__13596__3 = (function (a,b,c){
var G__13587 = (((a == null))?x:a);
var G__13588 = (((b == null))?y:b);
var G__13589 = (((c == null))?z:c);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__13587,G__13588,G__13589) : f.call(null,G__13587,G__13588,G__13589));
});
var G__13596__4 = (function() { 
var G__13597__delegate = function (a,b,c,ds){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__13597 = function (a,b,c,var_args){
var ds = null;
if (arguments.length > 3) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13597__delegate.call(this,a,b,c,ds);};
G__13597.cljs$lang$maxFixedArity = 3;
G__13597.cljs$lang$applyTo = (function (arglist__13598){
var a = cljs.core.first(arglist__13598);
arglist__13598 = cljs.core.next(arglist__13598);
var b = cljs.core.first(arglist__13598);
arglist__13598 = cljs.core.next(arglist__13598);
var c = cljs.core.first(arglist__13598);
var ds = cljs.core.rest(arglist__13598);
return G__13597__delegate(a,b,c,ds);
});
G__13597.cljs$core$IFn$_invoke$arity$variadic = G__13597__delegate;
return G__13597;
})()
;
G__13596 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__13596__2.call(this,a,b);
case 3:
return G__13596__3.call(this,a,b,c);
default:
return G__13596__4.cljs$core$IFn$_invoke$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13596.cljs$lang$maxFixedArity = 3;
G__13596.cljs$lang$applyTo = G__13596__4.cljs$lang$applyTo;
G__13596.cljs$core$IFn$_invoke$arity$2 = G__13596__2;
G__13596.cljs$core$IFn$_invoke$arity$3 = G__13596__3;
G__13596.cljs$core$IFn$_invoke$arity$variadic = G__13596__4.cljs$core$IFn$_invoke$arity$variadic;
return G__13596;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case 2:
return fnil__2.call(this,f,x);
case 3:
return fnil__3.call(this,f,x,y);
case 4:
return fnil__4.call(this,f,x,y,z);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fnil.cljs$core$IFn$_invoke$arity$2 = fnil__2;
fnil.cljs$core$IFn$_invoke$arity$3 = fnil__3;
fnil.cljs$core$IFn$_invoke$arity$4 = fnil__4;
return fnil;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to 0
* and the first item of coll, followed by applying f to 1 and the second
* item in coll, etc, until coll is exhausted. Thus function f should
* accept 2 arguments, index and item.
*/
cljs.core.map_indexed = (function map_indexed(f,coll){
var mapi = (function mapi(idx,coll__$1){
return (new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.seq(coll__$1);
if(temp__4126__auto__){
var s = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s)){
var c = cljs.core.chunk_first(s);
var size = cljs.core.count(c);
var b = cljs.core.chunk_buffer(size);
var n__4525__auto___13647 = size;
var i_13648 = (0);
while(true){
if((i_13648 < n__4525__auto___13647)){
cljs.core.chunk_append(b,(function (){var G__13643 = (idx + i_13648);
var G__13644 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c,i_13648);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__13643,G__13644) : f.call(null,G__13643,G__13644));
})());

var G__13649 = (i_13648 + (1));
i_13648 = G__13649;
continue;
} else {
}
break;
}

return cljs.core.chunk_cons(cljs.core.chunk(b),mapi((idx + size),cljs.core.chunk_rest(s)));
} else {
return cljs.core.cons((function (){var G__13645 = idx;
var G__13646 = cljs.core.first(s);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__13645,G__13646) : f.call(null,G__13645,G__13646));
})(),mapi((idx + (1)),cljs.core.rest(s)));
}
} else {
return null;
}
}),null,null));
});
return mapi((0),coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.  Returns a transducer when no collection is provided.
*/
cljs.core.keep = (function() {
var keep = null;
var keep__1 = (function (f){
return (function (rf){
return (function() {
var G__13668 = null;
var G__13668__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__13668__1 = (function (result){
var G__13662 = result;
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__13662) : rf.call(null,G__13662));
});
var G__13668__2 = (function (result,input){
var v = (function (){var G__13663 = input;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13663) : f.call(null,G__13663));
})();
if((v == null)){
return result;
} else {
var G__13664 = result;
var G__13665 = v;
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__13664,G__13665) : rf.call(null,G__13664,G__13665));
}
});
G__13668 = function(result,input){
switch(arguments.length){
case 0:
return G__13668__0.call(this);
case 1:
return G__13668__1.call(this,result);
case 2:
return G__13668__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13668.cljs$core$IFn$_invoke$arity$0 = G__13668__0;
G__13668.cljs$core$IFn$_invoke$arity$1 = G__13668__1;
G__13668.cljs$core$IFn$_invoke$arity$2 = G__13668__2;
return G__13668;
})()
});
});
var keep__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.seq(coll);
if(temp__4126__auto__){
var s = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s)){
var c = cljs.core.chunk_first(s);
var size = cljs.core.count(c);
var b = cljs.core.chunk_buffer(size);
var n__4525__auto___13669 = size;
var i_13670 = (0);
while(true){
if((i_13670 < n__4525__auto___13669)){
var x_13671 = (function (){var G__13666 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c,i_13670);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13666) : f.call(null,G__13666));
})();
if((x_13671 == null)){
} else {
cljs.core.chunk_append(b,x_13671);
}

var G__13672 = (i_13670 + (1));
i_13670 = G__13672;
continue;
} else {
}
break;
}

return cljs.core.chunk_cons(cljs.core.chunk(b),keep.cljs$core$IFn$_invoke$arity$2(f,cljs.core.chunk_rest(s)));
} else {
var x = (function (){var G__13667 = cljs.core.first(s);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13667) : f.call(null,G__13667));
})();
if((x == null)){
return keep.cljs$core$IFn$_invoke$arity$2(f,cljs.core.rest(s));
} else {
return cljs.core.cons(x,keep.cljs$core$IFn$_invoke$arity$2(f,cljs.core.rest(s)));
}
}
} else {
return null;
}
}),null,null));
});
keep = function(f,coll){
switch(arguments.length){
case 1:
return keep__1.call(this,f);
case 2:
return keep__2.call(this,f,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
keep.cljs$core$IFn$_invoke$arity$1 = keep__1;
keep.cljs$core$IFn$_invoke$arity$2 = keep__2;
return keep;
})()
;

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 6455296;
this.cljs$lang$protocol_mask$partition1$ = 16386;
})
cljs.core.Atom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__13673 = this$__$1;
return goog.getUid(G__13673);
});

cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
var seq__13674 = cljs.core.seq(self__.watches);
var chunk__13675 = null;
var count__13676 = (0);
var i__13677 = (0);
while(true){
if((i__13677 < count__13676)){
var vec__13678 = chunk__13675.cljs$core$IIndexed$_nth$arity$2(null,i__13677);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13678,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13678,(1),null);
var G__13679_13688 = key;
var G__13680_13689 = this$__$1;
var G__13681_13690 = oldval;
var G__13682_13691 = newval;
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__13679_13688,G__13680_13689,G__13681_13690,G__13682_13691) : f.call(null,G__13679_13688,G__13680_13689,G__13681_13690,G__13682_13691));

var G__13692 = seq__13674;
var G__13693 = chunk__13675;
var G__13694 = count__13676;
var G__13695 = (i__13677 + (1));
seq__13674 = G__13692;
chunk__13675 = G__13693;
count__13676 = G__13694;
i__13677 = G__13695;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__13674);
if(temp__4126__auto__){
var seq__13674__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13674__$1)){
var c__4425__auto__ = cljs.core.chunk_first(seq__13674__$1);
var G__13696 = cljs.core.chunk_rest(seq__13674__$1);
var G__13697 = c__4425__auto__;
var G__13698 = cljs.core.count(c__4425__auto__);
var G__13699 = (0);
seq__13674 = G__13696;
chunk__13675 = G__13697;
count__13676 = G__13698;
i__13677 = G__13699;
continue;
} else {
var vec__13683 = cljs.core.first(seq__13674__$1);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13683,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13683,(1),null);
var G__13684_13700 = key;
var G__13685_13701 = this$__$1;
var G__13686_13702 = oldval;
var G__13687_13703 = newval;
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__13684_13700,G__13685_13701,G__13686_13702,G__13687_13703) : f.call(null,G__13684_13700,G__13685_13701,G__13686_13702,G__13687_13703));

var G__13704 = cljs.core.next(seq__13674__$1);
var G__13705 = null;
var G__13706 = (0);
var G__13707 = (0);
seq__13674 = G__13704;
chunk__13675 = G__13705;
count__13676 = G__13706;
i__13677 = G__13707;
continue;
}
} else {
return null;
}
}
break;
}
});

cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
this$__$1.watches = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.watches,key,f);

return this$__$1;
});

cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return this$__$1.watches = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.watches,key);
});

cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
});

cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

cljs.core.Atom.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.Atom.cljs$lang$type = true;

cljs.core.Atom.cljs$lang$ctorStr = "cljs.core/Atom";

cljs.core.Atom.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write(writer__4226__auto__,"cljs.core/Atom");
});

cljs.core.__GT_Atom = (function __GT_Atom(state,meta,validator,watches){
return (new cljs.core.Atom(state,meta,validator,watches));
});

/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an Error.  If either of these error conditions
* occur, then the value of the atom will not change.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__1 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__2 = (function() { 
var G__13711__delegate = function (x,p__13708){
var map__13710 = p__13708;
var map__13710__$1 = ((cljs.core.seq_QMARK_(map__13710))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13710):map__13710);
var validator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13710__$1,cljs.core.constant$keyword$34);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13710__$1,cljs.core.constant$keyword$24);
return (new cljs.core.Atom(x,meta,validator,null));
};
var G__13711 = function (x,var_args){
var p__13708 = null;
if (arguments.length > 1) {
  p__13708 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__13711__delegate.call(this,x,p__13708);};
G__13711.cljs$lang$maxFixedArity = 1;
G__13711.cljs$lang$applyTo = (function (arglist__13712){
var x = cljs.core.first(arglist__13712);
var p__13708 = cljs.core.rest(arglist__13712);
return G__13711__delegate(x,p__13708);
});
G__13711.cljs$core$IFn$_invoke$arity$variadic = G__13711__delegate;
return G__13711;
})()
;
atom = function(x,var_args){
var p__13708 = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
return atom__2.cljs$core$IFn$_invoke$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__2.cljs$lang$applyTo;
atom.cljs$core$IFn$_invoke$arity$1 = atom__1;
atom.cljs$core$IFn$_invoke$arity$variadic = atom__2.cljs$core$IFn$_invoke$arity$variadic;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
if((a instanceof cljs.core.Atom)){
var validate = a.validator;
if((validate == null)){
} else {
if(cljs.core.truth_((function (){var G__13715 = new_value;
return (validate.cljs$core$IFn$_invoke$arity$1 ? validate.cljs$core$IFn$_invoke$arity$1(G__13715) : validate.call(null,G__13715));
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str((function (){var G__13716 = cljs.core.list(new cljs.core.Symbol(null,"validate","validate",1439230700,null),new cljs.core.Symbol(null,"new-value","new-value",-1567397401,null));
return (cljs.core.pr_str.cljs$core$IFn$_invoke$arity$1 ? cljs.core.pr_str.cljs$core$IFn$_invoke$arity$1(G__13716) : cljs.core.pr_str.call(null,G__13716));
})())].join('')));
}
}

var old_value = a.state;
a.state = new_value;

if((a.watches == null)){
} else {
cljs.core._notify_watches(a,old_value,new_value);
}

return new_value;
} else {
return cljs.core._reset_BANG_(a,new_value);
}
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___2 = (function (a,f){
if((a instanceof cljs.core.Atom)){
return cljs.core.reset_BANG_(a,(function (){var G__13723 = a.state;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13723) : f.call(null,G__13723));
})());
} else {
return cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$2(a,f);
}
});
var swap_BANG___3 = (function (a,f,x){
if((a instanceof cljs.core.Atom)){
return cljs.core.reset_BANG_(a,(function (){var G__13724 = a.state;
var G__13725 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__13724,G__13725) : f.call(null,G__13724,G__13725));
})());
} else {
return cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$3(a,f,x);
}
});
var swap_BANG___4 = (function (a,f,x,y){
if((a instanceof cljs.core.Atom)){
return cljs.core.reset_BANG_(a,(function (){var G__13726 = a.state;
var G__13727 = x;
var G__13728 = y;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__13726,G__13727,G__13728) : f.call(null,G__13726,G__13727,G__13728));
})());
} else {
return cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$4(a,f,x,y);
}
});
var swap_BANG___5 = (function() { 
var G__13729__delegate = function (a,f,x,y,more){
if((a instanceof cljs.core.Atom)){
return cljs.core.reset_BANG_(a,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,a.state,x,y,more));
} else {
return cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$5(a,f,x,y,more);
}
};
var G__13729 = function (a,f,x,y,var_args){
var more = null;
if (arguments.length > 4) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__13729__delegate.call(this,a,f,x,y,more);};
G__13729.cljs$lang$maxFixedArity = 4;
G__13729.cljs$lang$applyTo = (function (arglist__13730){
var a = cljs.core.first(arglist__13730);
arglist__13730 = cljs.core.next(arglist__13730);
var f = cljs.core.first(arglist__13730);
arglist__13730 = cljs.core.next(arglist__13730);
var x = cljs.core.first(arglist__13730);
arglist__13730 = cljs.core.next(arglist__13730);
var y = cljs.core.first(arglist__13730);
var more = cljs.core.rest(arglist__13730);
return G__13729__delegate(a,f,x,y,more);
});
G__13729.cljs$core$IFn$_invoke$arity$variadic = G__13729__delegate;
return G__13729;
})()
;
swap_BANG_ = function(a,f,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return swap_BANG___2.call(this,a,f);
case 3:
return swap_BANG___3.call(this,a,f,x);
case 4:
return swap_BANG___4.call(this,a,f,x,y);
default:
return swap_BANG___5.cljs$core$IFn$_invoke$arity$variadic(a,f,x,y, cljs.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
swap_BANG_.cljs$lang$maxFixedArity = 4;
swap_BANG_.cljs$lang$applyTo = swap_BANG___5.cljs$lang$applyTo;
swap_BANG_.cljs$core$IFn$_invoke$arity$2 = swap_BANG___2;
swap_BANG_.cljs$core$IFn$_invoke$arity$3 = swap_BANG___3;
swap_BANG_.cljs$core$IFn$_invoke$arity$4 = swap_BANG___4;
swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = swap_BANG___5.cljs$core$IFn$_invoke$arity$variadic;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a.state,oldval)){
cljs.core.reset_BANG_(a,newval);

return true;
} else {
return false;
}
});
/**
* Sets the validator-fn for an atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an Error. If the current state
* is not acceptable to the new validator, an Error will be thrown and the
* validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){
return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){
return iref.validator;
});

/**
* @constructor
*/
cljs.core.Volatile = (function (state){
this.state = state;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32768;
})
cljs.core.Volatile.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

cljs.core.Volatile.prototype.cljs$core$IVolatile$ = true;

cljs.core.Volatile.prototype.cljs$core$IVolatile$_vreset_BANG_$arity$2 = (function (_,new_state){
var self__ = this;
var ___$1 = this;
return self__.state = new_state;
});

cljs.core.Volatile.cljs$lang$type = true;

cljs.core.Volatile.cljs$lang$ctorStr = "cljs.core/Volatile";

cljs.core.Volatile.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write(writer__4226__auto__,"cljs.core/Volatile");
});

cljs.core.__GT_Volatile = (function __GT_Volatile(state){
return (new cljs.core.Volatile(state));
});

/**
* Creates and returns a Volatile with an initial value of val.
*/
cljs.core.volatile_BANG_ = (function volatile_BANG_(val){
return (new cljs.core.Volatile(val));
});
/**
* Returns true if x is a volatile.
*/
cljs.core.volatile_QMARK_ = (function volatile_QMARK_(x){
return (x instanceof cljs.core.Volatile);
});
/**
* Sets the value of volatile to newval without regard for the
* current value. Returns newval.
*/
cljs.core.vreset_BANG_ = (function vreset_BANG_(vol,newval){
return cljs.core._vreset_BANG_(vol,newval);
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.  Returns a stateful transducer when no collection is
* provided.
*/
cljs.core.keep_indexed = (function() {
var keep_indexed = null;
var keep_indexed__1 = (function (f){
return (function (rf){
var ia = cljs.core.volatile_BANG_((-1));
return ((function (ia){
return (function() {
var G__13797 = null;
var G__13797__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__13797__1 = (function (result){
var G__13764 = result;
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__13764) : rf.call(null,G__13764));
});
var G__13797__2 = (function (result,input){
var i = ia.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(ia.cljs$core$IDeref$_deref$arity$1(null) + (1)));
var v = (function (){var G__13765 = i;
var G__13766 = input;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__13765,G__13766) : f.call(null,G__13765,G__13766));
})();
if((v == null)){
return result;
} else {
var G__13767 = result;
var G__13768 = v;
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__13767,G__13768) : rf.call(null,G__13767,G__13768));
}
});
G__13797 = function(result,input){
switch(arguments.length){
case 0:
return G__13797__0.call(this);
case 1:
return G__13797__1.call(this,result);
case 2:
return G__13797__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13797.cljs$core$IFn$_invoke$arity$0 = G__13797__0;
G__13797.cljs$core$IFn$_invoke$arity$1 = G__13797__1;
G__13797.cljs$core$IFn$_invoke$arity$2 = G__13797__2;
return G__13797;
})()
;})(ia))
});
});
var keep_indexed__2 = (function (f,coll){
var keepi = (function keepi(idx,coll__$1){
return (new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.seq(coll__$1);
if(temp__4126__auto__){
var s = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s)){
var c = cljs.core.chunk_first(s);
var size = cljs.core.count(c);
var b = cljs.core.chunk_buffer(size);
var n__4525__auto___13798 = size;
var i_13799 = (0);
while(true){
if((i_13799 < n__4525__auto___13798)){
var x_13800 = (function (){var G__13793 = (idx + i_13799);
var G__13794 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c,i_13799);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__13793,G__13794) : f.call(null,G__13793,G__13794));
})();
if((x_13800 == null)){
} else {
cljs.core.chunk_append(b,x_13800);
}

var G__13801 = (i_13799 + (1));
i_13799 = G__13801;
continue;
} else {
}
break;
}

return cljs.core.chunk_cons(cljs.core.chunk(b),keepi((idx + size),cljs.core.chunk_rest(s)));
} else {
var x = (function (){var G__13795 = idx;
var G__13796 = cljs.core.first(s);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__13795,G__13796) : f.call(null,G__13795,G__13796));
})();
if((x == null)){
return keepi((idx + (1)),cljs.core.rest(s));
} else {
return cljs.core.cons(x,keepi((idx + (1)),cljs.core.rest(s)));
}
}
} else {
return null;
}
}),null,null));
});
return keepi((0),coll);
});
keep_indexed = function(f,coll){
switch(arguments.length){
case 1:
return keep_indexed__1.call(this,f);
case 2:
return keep_indexed__2.call(this,f,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
keep_indexed.cljs$core$IFn$_invoke$arity$1 = keep_indexed__1;
keep_indexed.cljs$core$IFn$_invoke$arity$2 = keep_indexed__2;
return keep_indexed;
})()
;
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__1 = (function (p){
return (function() {
var ep1 = null;
var ep1__0 = (function (){
return true;
});
var ep1__1 = (function (x){
return cljs.core.boolean$((function (){var G__14015 = x;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__14015) : p.call(null,G__14015));
})());
});
var ep1__2 = (function (x,y){
return cljs.core.boolean$((function (){var and__3626__auto__ = (function (){var G__14017 = x;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__14017) : p.call(null,G__14017));
})();
if(cljs.core.truth_(and__3626__auto__)){
var G__14018 = y;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__14018) : p.call(null,G__14018));
} else {
return and__3626__auto__;
}
})());
});
var ep1__3 = (function (x,y,z){
return cljs.core.boolean$((function (){var and__3626__auto__ = (function (){var G__14020 = x;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__14020) : p.call(null,G__14020));
})();
if(cljs.core.truth_(and__3626__auto__)){
var and__3626__auto____$1 = (function (){var G__14022 = y;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__14022) : p.call(null,G__14022));
})();
if(cljs.core.truth_(and__3626__auto____$1)){
var G__14023 = z;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__14023) : p.call(null,G__14023));
} else {
return and__3626__auto____$1;
}
} else {
return and__3626__auto__;
}
})());
});
var ep1__4 = (function() { 
var G__14192__delegate = function (x,y,z,args){
return cljs.core.boolean$((ep1.cljs$core$IFn$_invoke$arity$3(x,y,z)) && (cljs.core.every_QMARK_(p,args)));
};
var G__14192 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14192__delegate.call(this,x,y,z,args);};
G__14192.cljs$lang$maxFixedArity = 3;
G__14192.cljs$lang$applyTo = (function (arglist__14193){
var x = cljs.core.first(arglist__14193);
arglist__14193 = cljs.core.next(arglist__14193);
var y = cljs.core.first(arglist__14193);
arglist__14193 = cljs.core.next(arglist__14193);
var z = cljs.core.first(arglist__14193);
var args = cljs.core.rest(arglist__14193);
return G__14192__delegate(x,y,z,args);
});
G__14192.cljs$core$IFn$_invoke$arity$variadic = G__14192__delegate;
return G__14192;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep1__0.call(this);
case 1:
return ep1__1.call(this,x);
case 2:
return ep1__2.call(this,x,y);
case 3:
return ep1__3.call(this,x,y,z);
default:
return ep1__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__4.cljs$lang$applyTo;
ep1.cljs$core$IFn$_invoke$arity$0 = ep1__0;
ep1.cljs$core$IFn$_invoke$arity$1 = ep1__1;
ep1.cljs$core$IFn$_invoke$arity$2 = ep1__2;
ep1.cljs$core$IFn$_invoke$arity$3 = ep1__3;
ep1.cljs$core$IFn$_invoke$arity$variadic = ep1__4.cljs$core$IFn$_invoke$arity$variadic;
return ep1;
})()
});
var every_pred__2 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__0 = (function (){
return true;
});
var ep2__1 = (function (x){
return cljs.core.boolean$((function (){var and__3626__auto__ = (function (){var G__14055 = x;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__14055) : p1.call(null,G__14055));
})();
if(cljs.core.truth_(and__3626__auto__)){
var G__14056 = x;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__14056) : p2.call(null,G__14056));
} else {
return and__3626__auto__;
}
})());
});
var ep2__2 = (function (x,y){
return cljs.core.boolean$((function (){var and__3626__auto__ = (function (){var G__14058 = x;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__14058) : p1.call(null,G__14058));
})();
if(cljs.core.truth_(and__3626__auto__)){
var and__3626__auto____$1 = (function (){var G__14060 = y;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__14060) : p1.call(null,G__14060));
})();
if(cljs.core.truth_(and__3626__auto____$1)){
var and__3626__auto____$2 = (function (){var G__14062 = x;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__14062) : p2.call(null,G__14062));
})();
if(cljs.core.truth_(and__3626__auto____$2)){
var G__14063 = y;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__14063) : p2.call(null,G__14063));
} else {
return and__3626__auto____$2;
}
} else {
return and__3626__auto____$1;
}
} else {
return and__3626__auto__;
}
})());
});
var ep2__3 = (function (x,y,z){
return cljs.core.boolean$((function (){var and__3626__auto__ = (function (){var G__14065 = x;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__14065) : p1.call(null,G__14065));
})();
if(cljs.core.truth_(and__3626__auto__)){
var and__3626__auto____$1 = (function (){var G__14067 = y;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__14067) : p1.call(null,G__14067));
})();
if(cljs.core.truth_(and__3626__auto____$1)){
var and__3626__auto____$2 = (function (){var G__14069 = z;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__14069) : p1.call(null,G__14069));
})();
if(cljs.core.truth_(and__3626__auto____$2)){
var and__3626__auto____$3 = (function (){var G__14071 = x;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__14071) : p2.call(null,G__14071));
})();
if(cljs.core.truth_(and__3626__auto____$3)){
var and__3626__auto____$4 = (function (){var G__14073 = y;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__14073) : p2.call(null,G__14073));
})();
if(cljs.core.truth_(and__3626__auto____$4)){
var G__14074 = z;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__14074) : p2.call(null,G__14074));
} else {
return and__3626__auto____$4;
}
} else {
return and__3626__auto____$3;
}
} else {
return and__3626__auto____$2;
}
} else {
return and__3626__auto____$1;
}
} else {
return and__3626__auto__;
}
})());
});
var ep2__4 = (function() { 
var G__14194__delegate = function (x,y,z,args){
return cljs.core.boolean$((ep2.cljs$core$IFn$_invoke$arity$3(x,y,z)) && (cljs.core.every_QMARK_((function (p1__13802_SHARP_){
var and__3626__auto__ = (function (){var G__14079 = p1__13802_SHARP_;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__14079) : p1.call(null,G__14079));
})();
if(cljs.core.truth_(and__3626__auto__)){
var G__14080 = p1__13802_SHARP_;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__14080) : p2.call(null,G__14080));
} else {
return and__3626__auto__;
}
}),args)));
};
var G__14194 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14194__delegate.call(this,x,y,z,args);};
G__14194.cljs$lang$maxFixedArity = 3;
G__14194.cljs$lang$applyTo = (function (arglist__14195){
var x = cljs.core.first(arglist__14195);
arglist__14195 = cljs.core.next(arglist__14195);
var y = cljs.core.first(arglist__14195);
arglist__14195 = cljs.core.next(arglist__14195);
var z = cljs.core.first(arglist__14195);
var args = cljs.core.rest(arglist__14195);
return G__14194__delegate(x,y,z,args);
});
G__14194.cljs$core$IFn$_invoke$arity$variadic = G__14194__delegate;
return G__14194;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep2__0.call(this);
case 1:
return ep2__1.call(this,x);
case 2:
return ep2__2.call(this,x,y);
case 3:
return ep2__3.call(this,x,y,z);
default:
return ep2__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__4.cljs$lang$applyTo;
ep2.cljs$core$IFn$_invoke$arity$0 = ep2__0;
ep2.cljs$core$IFn$_invoke$arity$1 = ep2__1;
ep2.cljs$core$IFn$_invoke$arity$2 = ep2__2;
ep2.cljs$core$IFn$_invoke$arity$3 = ep2__3;
ep2.cljs$core$IFn$_invoke$arity$variadic = ep2__4.cljs$core$IFn$_invoke$arity$variadic;
return ep2;
})()
});
var every_pred__3 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__0 = (function (){
return true;
});
var ep3__1 = (function (x){
return cljs.core.boolean$((function (){var and__3626__auto__ = (function (){var G__14126 = x;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__14126) : p1.call(null,G__14126));
})();
if(cljs.core.truth_(and__3626__auto__)){
var and__3626__auto____$1 = (function (){var G__14128 = x;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__14128) : p2.call(null,G__14128));
})();
if(cljs.core.truth_(and__3626__auto____$1)){
var G__14129 = x;
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__14129) : p3.call(null,G__14129));
} else {
return and__3626__auto____$1;
}
} else {
return and__3626__auto__;
}
})());
});
var ep3__2 = (function (x,y){
return cljs.core.boolean$((function (){var and__3626__auto__ = (function (){var G__14131 = x;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__14131) : p1.call(null,G__14131));
})();
if(cljs.core.truth_(and__3626__auto__)){
var and__3626__auto____$1 = (function (){var G__14133 = x;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__14133) : p2.call(null,G__14133));
})();
if(cljs.core.truth_(and__3626__auto____$1)){
var and__3626__auto____$2 = (function (){var G__14135 = x;
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__14135) : p3.call(null,G__14135));
})();
if(cljs.core.truth_(and__3626__auto____$2)){
var and__3626__auto____$3 = (function (){var G__14137 = y;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__14137) : p1.call(null,G__14137));
})();
if(cljs.core.truth_(and__3626__auto____$3)){
var and__3626__auto____$4 = (function (){var G__14139 = y;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__14139) : p2.call(null,G__14139));
})();
if(cljs.core.truth_(and__3626__auto____$4)){
var G__14140 = y;
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__14140) : p3.call(null,G__14140));
} else {
return and__3626__auto____$4;
}
} else {
return and__3626__auto____$3;
}
} else {
return and__3626__auto____$2;
}
} else {
return and__3626__auto____$1;
}
} else {
return and__3626__auto__;
}
})());
});
var ep3__3 = (function (x,y,z){
return cljs.core.boolean$((function (){var and__3626__auto__ = (function (){var G__14142 = x;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__14142) : p1.call(null,G__14142));
})();
if(cljs.core.truth_(and__3626__auto__)){
var and__3626__auto____$1 = (function (){var G__14144 = x;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__14144) : p2.call(null,G__14144));
})();
if(cljs.core.truth_(and__3626__auto____$1)){
var and__3626__auto____$2 = (function (){var G__14146 = x;
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__14146) : p3.call(null,G__14146));
})();
if(cljs.core.truth_(and__3626__auto____$2)){
var and__3626__auto____$3 = (function (){var G__14148 = y;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__14148) : p1.call(null,G__14148));
})();
if(cljs.core.truth_(and__3626__auto____$3)){
var and__3626__auto____$4 = (function (){var G__14150 = y;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__14150) : p2.call(null,G__14150));
})();
if(cljs.core.truth_(and__3626__auto____$4)){
var and__3626__auto____$5 = (function (){var G__14152 = y;
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__14152) : p3.call(null,G__14152));
})();
if(cljs.core.truth_(and__3626__auto____$5)){
var and__3626__auto____$6 = (function (){var G__14154 = z;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__14154) : p1.call(null,G__14154));
})();
if(cljs.core.truth_(and__3626__auto____$6)){
var and__3626__auto____$7 = (function (){var G__14156 = z;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__14156) : p2.call(null,G__14156));
})();
if(cljs.core.truth_(and__3626__auto____$7)){
var G__14157 = z;
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__14157) : p3.call(null,G__14157));
} else {
return and__3626__auto____$7;
}
} else {
return and__3626__auto____$6;
}
} else {
return and__3626__auto____$5;
}
} else {
return and__3626__auto____$4;
}
} else {
return and__3626__auto____$3;
}
} else {
return and__3626__auto____$2;
}
} else {
return and__3626__auto____$1;
}
} else {
return and__3626__auto__;
}
})());
});
var ep3__4 = (function() { 
var G__14196__delegate = function (x,y,z,args){
return cljs.core.boolean$((ep3.cljs$core$IFn$_invoke$arity$3(x,y,z)) && (cljs.core.every_QMARK_((function (p1__13803_SHARP_){
var and__3626__auto__ = (function (){var G__14164 = p1__13803_SHARP_;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__14164) : p1.call(null,G__14164));
})();
if(cljs.core.truth_(and__3626__auto__)){
var and__3626__auto____$1 = (function (){var G__14166 = p1__13803_SHARP_;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__14166) : p2.call(null,G__14166));
})();
if(cljs.core.truth_(and__3626__auto____$1)){
var G__14167 = p1__13803_SHARP_;
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__14167) : p3.call(null,G__14167));
} else {
return and__3626__auto____$1;
}
} else {
return and__3626__auto__;
}
}),args)));
};
var G__14196 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14196__delegate.call(this,x,y,z,args);};
G__14196.cljs$lang$maxFixedArity = 3;
G__14196.cljs$lang$applyTo = (function (arglist__14197){
var x = cljs.core.first(arglist__14197);
arglist__14197 = cljs.core.next(arglist__14197);
var y = cljs.core.first(arglist__14197);
arglist__14197 = cljs.core.next(arglist__14197);
var z = cljs.core.first(arglist__14197);
var args = cljs.core.rest(arglist__14197);
return G__14196__delegate(x,y,z,args);
});
G__14196.cljs$core$IFn$_invoke$arity$variadic = G__14196__delegate;
return G__14196;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep3__0.call(this);
case 1:
return ep3__1.call(this,x);
case 2:
return ep3__2.call(this,x,y);
case 3:
return ep3__3.call(this,x,y,z);
default:
return ep3__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__4.cljs$lang$applyTo;
ep3.cljs$core$IFn$_invoke$arity$0 = ep3__0;
ep3.cljs$core$IFn$_invoke$arity$1 = ep3__1;
ep3.cljs$core$IFn$_invoke$arity$2 = ep3__2;
ep3.cljs$core$IFn$_invoke$arity$3 = ep3__3;
ep3.cljs$core$IFn$_invoke$arity$variadic = ep3__4.cljs$core$IFn$_invoke$arity$variadic;
return ep3;
})()
});
var every_pred__4 = (function() { 
var G__14198__delegate = function (p1,p2,p3,ps){
var ps__$1 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4(p1,p2,p3,ps);
return ((function (ps__$1){
return (function() {
var epn = null;
var epn__0 = (function (){
return true;
});
var epn__1 = (function (x){
return cljs.core.every_QMARK_(((function (ps__$1){
return (function (p1__13804_SHARP_){
var G__14183 = x;
return (p1__13804_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__13804_SHARP_.cljs$core$IFn$_invoke$arity$1(G__14183) : p1__13804_SHARP_.call(null,G__14183));
});})(ps__$1))
,ps__$1);
});
var epn__2 = (function (x,y){
return cljs.core.every_QMARK_(((function (ps__$1){
return (function (p1__13805_SHARP_){
var and__3626__auto__ = (function (){var G__14185 = x;
return (p1__13805_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__13805_SHARP_.cljs$core$IFn$_invoke$arity$1(G__14185) : p1__13805_SHARP_.call(null,G__14185));
})();
if(cljs.core.truth_(and__3626__auto__)){
var G__14186 = y;
return (p1__13805_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__13805_SHARP_.cljs$core$IFn$_invoke$arity$1(G__14186) : p1__13805_SHARP_.call(null,G__14186));
} else {
return and__3626__auto__;
}
});})(ps__$1))
,ps__$1);
});
var epn__3 = (function (x,y,z){
return cljs.core.every_QMARK_(((function (ps__$1){
return (function (p1__13806_SHARP_){
var and__3626__auto__ = (function (){var G__14188 = x;
return (p1__13806_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__13806_SHARP_.cljs$core$IFn$_invoke$arity$1(G__14188) : p1__13806_SHARP_.call(null,G__14188));
})();
if(cljs.core.truth_(and__3626__auto__)){
var and__3626__auto____$1 = (function (){var G__14190 = y;
return (p1__13806_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__13806_SHARP_.cljs$core$IFn$_invoke$arity$1(G__14190) : p1__13806_SHARP_.call(null,G__14190));
})();
if(cljs.core.truth_(and__3626__auto____$1)){
var G__14191 = z;
return (p1__13806_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__13806_SHARP_.cljs$core$IFn$_invoke$arity$1(G__14191) : p1__13806_SHARP_.call(null,G__14191));
} else {
return and__3626__auto____$1;
}
} else {
return and__3626__auto__;
}
});})(ps__$1))
,ps__$1);
});
var epn__4 = (function() { 
var G__14199__delegate = function (x,y,z,args){
return cljs.core.boolean$((epn.cljs$core$IFn$_invoke$arity$3(x,y,z)) && (cljs.core.every_QMARK_(((function (ps__$1){
return (function (p1__13807_SHARP_){
return cljs.core.every_QMARK_(p1__13807_SHARP_,args);
});})(ps__$1))
,ps__$1)));
};
var G__14199 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14199__delegate.call(this,x,y,z,args);};
G__14199.cljs$lang$maxFixedArity = 3;
G__14199.cljs$lang$applyTo = (function (arglist__14200){
var x = cljs.core.first(arglist__14200);
arglist__14200 = cljs.core.next(arglist__14200);
var y = cljs.core.first(arglist__14200);
arglist__14200 = cljs.core.next(arglist__14200);
var z = cljs.core.first(arglist__14200);
var args = cljs.core.rest(arglist__14200);
return G__14199__delegate(x,y,z,args);
});
G__14199.cljs$core$IFn$_invoke$arity$variadic = G__14199__delegate;
return G__14199;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return epn__0.call(this);
case 1:
return epn__1.call(this,x);
case 2:
return epn__2.call(this,x,y);
case 3:
return epn__3.call(this,x,y,z);
default:
return epn__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__4.cljs$lang$applyTo;
epn.cljs$core$IFn$_invoke$arity$0 = epn__0;
epn.cljs$core$IFn$_invoke$arity$1 = epn__1;
epn.cljs$core$IFn$_invoke$arity$2 = epn__2;
epn.cljs$core$IFn$_invoke$arity$3 = epn__3;
epn.cljs$core$IFn$_invoke$arity$variadic = epn__4.cljs$core$IFn$_invoke$arity$variadic;
return epn;
})()
;})(ps__$1))
};
var G__14198 = function (p1,p2,p3,var_args){
var ps = null;
if (arguments.length > 3) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14198__delegate.call(this,p1,p2,p3,ps);};
G__14198.cljs$lang$maxFixedArity = 3;
G__14198.cljs$lang$applyTo = (function (arglist__14201){
var p1 = cljs.core.first(arglist__14201);
arglist__14201 = cljs.core.next(arglist__14201);
var p2 = cljs.core.first(arglist__14201);
arglist__14201 = cljs.core.next(arglist__14201);
var p3 = cljs.core.first(arglist__14201);
var ps = cljs.core.rest(arglist__14201);
return G__14198__delegate(p1,p2,p3,ps);
});
G__14198.cljs$core$IFn$_invoke$arity$variadic = G__14198__delegate;
return G__14198;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return every_pred__1.call(this,p1);
case 2:
return every_pred__2.call(this,p1,p2);
case 3:
return every_pred__3.call(this,p1,p2,p3);
default:
return every_pred__4.cljs$core$IFn$_invoke$arity$variadic(p1,p2,p3, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__4.cljs$lang$applyTo;
every_pred.cljs$core$IFn$_invoke$arity$1 = every_pred__1;
every_pred.cljs$core$IFn$_invoke$arity$2 = every_pred__2;
every_pred.cljs$core$IFn$_invoke$arity$3 = every_pred__3;
every_pred.cljs$core$IFn$_invoke$arity$variadic = every_pred__4.cljs$core$IFn$_invoke$arity$variadic;
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__1 = (function (p){
return (function() {
var sp1 = null;
var sp1__0 = (function (){
return null;
});
var sp1__1 = (function (x){
var G__14407 = x;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__14407) : p.call(null,G__14407));
});
var sp1__2 = (function (x,y){
var or__3638__auto__ = (function (){var G__14409 = x;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__14409) : p.call(null,G__14409));
})();
if(cljs.core.truth_(or__3638__auto__)){
return or__3638__auto__;
} else {
var G__14410 = y;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__14410) : p.call(null,G__14410));
}
});
var sp1__3 = (function (x,y,z){
var or__3638__auto__ = (function (){var G__14412 = x;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__14412) : p.call(null,G__14412));
})();
if(cljs.core.truth_(or__3638__auto__)){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (function (){var G__14414 = y;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__14414) : p.call(null,G__14414));
})();
if(cljs.core.truth_(or__3638__auto____$1)){
return or__3638__auto____$1;
} else {
var G__14415 = z;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__14415) : p.call(null,G__14415));
}
}
});
var sp1__4 = (function() { 
var G__14576__delegate = function (x,y,z,args){
var or__3638__auto__ = sp1.cljs$core$IFn$_invoke$arity$3(x,y,z);
if(cljs.core.truth_(or__3638__auto__)){
return or__3638__auto__;
} else {
return cljs.core.some(p,args);
}
};
var G__14576 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14576__delegate.call(this,x,y,z,args);};
G__14576.cljs$lang$maxFixedArity = 3;
G__14576.cljs$lang$applyTo = (function (arglist__14577){
var x = cljs.core.first(arglist__14577);
arglist__14577 = cljs.core.next(arglist__14577);
var y = cljs.core.first(arglist__14577);
arglist__14577 = cljs.core.next(arglist__14577);
var z = cljs.core.first(arglist__14577);
var args = cljs.core.rest(arglist__14577);
return G__14576__delegate(x,y,z,args);
});
G__14576.cljs$core$IFn$_invoke$arity$variadic = G__14576__delegate;
return G__14576;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp1__0.call(this);
case 1:
return sp1__1.call(this,x);
case 2:
return sp1__2.call(this,x,y);
case 3:
return sp1__3.call(this,x,y,z);
default:
return sp1__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__4.cljs$lang$applyTo;
sp1.cljs$core$IFn$_invoke$arity$0 = sp1__0;
sp1.cljs$core$IFn$_invoke$arity$1 = sp1__1;
sp1.cljs$core$IFn$_invoke$arity$2 = sp1__2;
sp1.cljs$core$IFn$_invoke$arity$3 = sp1__3;
sp1.cljs$core$IFn$_invoke$arity$variadic = sp1__4.cljs$core$IFn$_invoke$arity$variadic;
return sp1;
})()
});
var some_fn__2 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__0 = (function (){
return null;
});
var sp2__1 = (function (x){
var or__3638__auto__ = (function (){var G__14447 = x;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__14447) : p1.call(null,G__14447));
})();
if(cljs.core.truth_(or__3638__auto__)){
return or__3638__auto__;
} else {
var G__14448 = x;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__14448) : p2.call(null,G__14448));
}
});
var sp2__2 = (function (x,y){
var or__3638__auto__ = (function (){var G__14450 = x;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__14450) : p1.call(null,G__14450));
})();
if(cljs.core.truth_(or__3638__auto__)){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (function (){var G__14452 = y;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__14452) : p1.call(null,G__14452));
})();
if(cljs.core.truth_(or__3638__auto____$1)){
return or__3638__auto____$1;
} else {
var or__3638__auto____$2 = (function (){var G__14454 = x;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__14454) : p2.call(null,G__14454));
})();
if(cljs.core.truth_(or__3638__auto____$2)){
return or__3638__auto____$2;
} else {
var G__14455 = y;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__14455) : p2.call(null,G__14455));
}
}
}
});
var sp2__3 = (function (x,y,z){
var or__3638__auto__ = (function (){var G__14457 = x;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__14457) : p1.call(null,G__14457));
})();
if(cljs.core.truth_(or__3638__auto__)){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (function (){var G__14459 = y;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__14459) : p1.call(null,G__14459));
})();
if(cljs.core.truth_(or__3638__auto____$1)){
return or__3638__auto____$1;
} else {
var or__3638__auto____$2 = (function (){var G__14461 = z;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__14461) : p1.call(null,G__14461));
})();
if(cljs.core.truth_(or__3638__auto____$2)){
return or__3638__auto____$2;
} else {
var or__3638__auto____$3 = (function (){var G__14463 = x;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__14463) : p2.call(null,G__14463));
})();
if(cljs.core.truth_(or__3638__auto____$3)){
return or__3638__auto____$3;
} else {
var or__3638__auto____$4 = (function (){var G__14465 = y;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__14465) : p2.call(null,G__14465));
})();
if(cljs.core.truth_(or__3638__auto____$4)){
return or__3638__auto____$4;
} else {
var G__14466 = z;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__14466) : p2.call(null,G__14466));
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__14578__delegate = function (x,y,z,args){
var or__3638__auto__ = sp2.cljs$core$IFn$_invoke$arity$3(x,y,z);
if(cljs.core.truth_(or__3638__auto__)){
return or__3638__auto__;
} else {
return cljs.core.some(((function (or__3638__auto__){
return (function (p1__14202_SHARP_){
var or__3638__auto____$1 = (function (){var G__14468 = p1__14202_SHARP_;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__14468) : p1.call(null,G__14468));
})();
if(cljs.core.truth_(or__3638__auto____$1)){
return or__3638__auto____$1;
} else {
var G__14469 = p1__14202_SHARP_;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__14469) : p2.call(null,G__14469));
}
});})(or__3638__auto__))
,args);
}
};
var G__14578 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14578__delegate.call(this,x,y,z,args);};
G__14578.cljs$lang$maxFixedArity = 3;
G__14578.cljs$lang$applyTo = (function (arglist__14579){
var x = cljs.core.first(arglist__14579);
arglist__14579 = cljs.core.next(arglist__14579);
var y = cljs.core.first(arglist__14579);
arglist__14579 = cljs.core.next(arglist__14579);
var z = cljs.core.first(arglist__14579);
var args = cljs.core.rest(arglist__14579);
return G__14578__delegate(x,y,z,args);
});
G__14578.cljs$core$IFn$_invoke$arity$variadic = G__14578__delegate;
return G__14578;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp2__0.call(this);
case 1:
return sp2__1.call(this,x);
case 2:
return sp2__2.call(this,x,y);
case 3:
return sp2__3.call(this,x,y,z);
default:
return sp2__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__4.cljs$lang$applyTo;
sp2.cljs$core$IFn$_invoke$arity$0 = sp2__0;
sp2.cljs$core$IFn$_invoke$arity$1 = sp2__1;
sp2.cljs$core$IFn$_invoke$arity$2 = sp2__2;
sp2.cljs$core$IFn$_invoke$arity$3 = sp2__3;
sp2.cljs$core$IFn$_invoke$arity$variadic = sp2__4.cljs$core$IFn$_invoke$arity$variadic;
return sp2;
})()
});
var some_fn__3 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__0 = (function (){
return null;
});
var sp3__1 = (function (x){
var or__3638__auto__ = (function (){var G__14515 = x;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__14515) : p1.call(null,G__14515));
})();
if(cljs.core.truth_(or__3638__auto__)){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (function (){var G__14517 = x;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__14517) : p2.call(null,G__14517));
})();
if(cljs.core.truth_(or__3638__auto____$1)){
return or__3638__auto____$1;
} else {
var G__14518 = x;
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__14518) : p3.call(null,G__14518));
}
}
});
var sp3__2 = (function (x,y){
var or__3638__auto__ = (function (){var G__14520 = x;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__14520) : p1.call(null,G__14520));
})();
if(cljs.core.truth_(or__3638__auto__)){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (function (){var G__14522 = x;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__14522) : p2.call(null,G__14522));
})();
if(cljs.core.truth_(or__3638__auto____$1)){
return or__3638__auto____$1;
} else {
var or__3638__auto____$2 = (function (){var G__14524 = x;
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__14524) : p3.call(null,G__14524));
})();
if(cljs.core.truth_(or__3638__auto____$2)){
return or__3638__auto____$2;
} else {
var or__3638__auto____$3 = (function (){var G__14526 = y;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__14526) : p1.call(null,G__14526));
})();
if(cljs.core.truth_(or__3638__auto____$3)){
return or__3638__auto____$3;
} else {
var or__3638__auto____$4 = (function (){var G__14528 = y;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__14528) : p2.call(null,G__14528));
})();
if(cljs.core.truth_(or__3638__auto____$4)){
return or__3638__auto____$4;
} else {
var G__14529 = y;
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__14529) : p3.call(null,G__14529));
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){
var or__3638__auto__ = (function (){var G__14531 = x;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__14531) : p1.call(null,G__14531));
})();
if(cljs.core.truth_(or__3638__auto__)){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (function (){var G__14533 = x;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__14533) : p2.call(null,G__14533));
})();
if(cljs.core.truth_(or__3638__auto____$1)){
return or__3638__auto____$1;
} else {
var or__3638__auto____$2 = (function (){var G__14535 = x;
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__14535) : p3.call(null,G__14535));
})();
if(cljs.core.truth_(or__3638__auto____$2)){
return or__3638__auto____$2;
} else {
var or__3638__auto____$3 = (function (){var G__14537 = y;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__14537) : p1.call(null,G__14537));
})();
if(cljs.core.truth_(or__3638__auto____$3)){
return or__3638__auto____$3;
} else {
var or__3638__auto____$4 = (function (){var G__14539 = y;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__14539) : p2.call(null,G__14539));
})();
if(cljs.core.truth_(or__3638__auto____$4)){
return or__3638__auto____$4;
} else {
var or__3638__auto____$5 = (function (){var G__14541 = y;
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__14541) : p3.call(null,G__14541));
})();
if(cljs.core.truth_(or__3638__auto____$5)){
return or__3638__auto____$5;
} else {
var or__3638__auto____$6 = (function (){var G__14543 = z;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__14543) : p1.call(null,G__14543));
})();
if(cljs.core.truth_(or__3638__auto____$6)){
return or__3638__auto____$6;
} else {
var or__3638__auto____$7 = (function (){var G__14545 = z;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__14545) : p2.call(null,G__14545));
})();
if(cljs.core.truth_(or__3638__auto____$7)){
return or__3638__auto____$7;
} else {
var G__14546 = z;
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__14546) : p3.call(null,G__14546));
}
}
}
}
}
}
}
}
});
var sp3__4 = (function() { 
var G__14580__delegate = function (x,y,z,args){
var or__3638__auto__ = sp3.cljs$core$IFn$_invoke$arity$3(x,y,z);
if(cljs.core.truth_(or__3638__auto__)){
return or__3638__auto__;
} else {
return cljs.core.some(((function (or__3638__auto__){
return (function (p1__14203_SHARP_){
var or__3638__auto____$1 = (function (){var G__14548 = p1__14203_SHARP_;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__14548) : p1.call(null,G__14548));
})();
if(cljs.core.truth_(or__3638__auto____$1)){
return or__3638__auto____$1;
} else {
var or__3638__auto____$2 = (function (){var G__14550 = p1__14203_SHARP_;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__14550) : p2.call(null,G__14550));
})();
if(cljs.core.truth_(or__3638__auto____$2)){
return or__3638__auto____$2;
} else {
var G__14551 = p1__14203_SHARP_;
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__14551) : p3.call(null,G__14551));
}
}
});})(or__3638__auto__))
,args);
}
};
var G__14580 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14580__delegate.call(this,x,y,z,args);};
G__14580.cljs$lang$maxFixedArity = 3;
G__14580.cljs$lang$applyTo = (function (arglist__14581){
var x = cljs.core.first(arglist__14581);
arglist__14581 = cljs.core.next(arglist__14581);
var y = cljs.core.first(arglist__14581);
arglist__14581 = cljs.core.next(arglist__14581);
var z = cljs.core.first(arglist__14581);
var args = cljs.core.rest(arglist__14581);
return G__14580__delegate(x,y,z,args);
});
G__14580.cljs$core$IFn$_invoke$arity$variadic = G__14580__delegate;
return G__14580;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp3__0.call(this);
case 1:
return sp3__1.call(this,x);
case 2:
return sp3__2.call(this,x,y);
case 3:
return sp3__3.call(this,x,y,z);
default:
return sp3__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__4.cljs$lang$applyTo;
sp3.cljs$core$IFn$_invoke$arity$0 = sp3__0;
sp3.cljs$core$IFn$_invoke$arity$1 = sp3__1;
sp3.cljs$core$IFn$_invoke$arity$2 = sp3__2;
sp3.cljs$core$IFn$_invoke$arity$3 = sp3__3;
sp3.cljs$core$IFn$_invoke$arity$variadic = sp3__4.cljs$core$IFn$_invoke$arity$variadic;
return sp3;
})()
});
var some_fn__4 = (function() { 
var G__14582__delegate = function (p1,p2,p3,ps){
var ps__$1 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4(p1,p2,p3,ps);
return ((function (ps__$1){
return (function() {
var spn = null;
var spn__0 = (function (){
return null;
});
var spn__1 = (function (x){
return cljs.core.some(((function (ps__$1){
return (function (p1__14204_SHARP_){
var G__14567 = x;
return (p1__14204_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__14204_SHARP_.cljs$core$IFn$_invoke$arity$1(G__14567) : p1__14204_SHARP_.call(null,G__14567));
});})(ps__$1))
,ps__$1);
});
var spn__2 = (function (x,y){
return cljs.core.some(((function (ps__$1){
return (function (p1__14205_SHARP_){
var or__3638__auto__ = (function (){var G__14569 = x;
return (p1__14205_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__14205_SHARP_.cljs$core$IFn$_invoke$arity$1(G__14569) : p1__14205_SHARP_.call(null,G__14569));
})();
if(cljs.core.truth_(or__3638__auto__)){
return or__3638__auto__;
} else {
var G__14570 = y;
return (p1__14205_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__14205_SHARP_.cljs$core$IFn$_invoke$arity$1(G__14570) : p1__14205_SHARP_.call(null,G__14570));
}
});})(ps__$1))
,ps__$1);
});
var spn__3 = (function (x,y,z){
return cljs.core.some(((function (ps__$1){
return (function (p1__14206_SHARP_){
var or__3638__auto__ = (function (){var G__14572 = x;
return (p1__14206_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__14206_SHARP_.cljs$core$IFn$_invoke$arity$1(G__14572) : p1__14206_SHARP_.call(null,G__14572));
})();
if(cljs.core.truth_(or__3638__auto__)){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (function (){var G__14574 = y;
return (p1__14206_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__14206_SHARP_.cljs$core$IFn$_invoke$arity$1(G__14574) : p1__14206_SHARP_.call(null,G__14574));
})();
if(cljs.core.truth_(or__3638__auto____$1)){
return or__3638__auto____$1;
} else {
var G__14575 = z;
return (p1__14206_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__14206_SHARP_.cljs$core$IFn$_invoke$arity$1(G__14575) : p1__14206_SHARP_.call(null,G__14575));
}
}
});})(ps__$1))
,ps__$1);
});
var spn__4 = (function() { 
var G__14583__delegate = function (x,y,z,args){
var or__3638__auto__ = spn.cljs$core$IFn$_invoke$arity$3(x,y,z);
if(cljs.core.truth_(or__3638__auto__)){
return or__3638__auto__;
} else {
return cljs.core.some(((function (or__3638__auto__,ps__$1){
return (function (p1__14207_SHARP_){
return cljs.core.some(p1__14207_SHARP_,args);
});})(or__3638__auto__,ps__$1))
,ps__$1);
}
};
var G__14583 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14583__delegate.call(this,x,y,z,args);};
G__14583.cljs$lang$maxFixedArity = 3;
G__14583.cljs$lang$applyTo = (function (arglist__14584){
var x = cljs.core.first(arglist__14584);
arglist__14584 = cljs.core.next(arglist__14584);
var y = cljs.core.first(arglist__14584);
arglist__14584 = cljs.core.next(arglist__14584);
var z = cljs.core.first(arglist__14584);
var args = cljs.core.rest(arglist__14584);
return G__14583__delegate(x,y,z,args);
});
G__14583.cljs$core$IFn$_invoke$arity$variadic = G__14583__delegate;
return G__14583;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return spn__0.call(this);
case 1:
return spn__1.call(this,x);
case 2:
return spn__2.call(this,x,y);
case 3:
return spn__3.call(this,x,y,z);
default:
return spn__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__4.cljs$lang$applyTo;
spn.cljs$core$IFn$_invoke$arity$0 = spn__0;
spn.cljs$core$IFn$_invoke$arity$1 = spn__1;
spn.cljs$core$IFn$_invoke$arity$2 = spn__2;
spn.cljs$core$IFn$_invoke$arity$3 = spn__3;
spn.cljs$core$IFn$_invoke$arity$variadic = spn__4.cljs$core$IFn$_invoke$arity$variadic;
return spn;
})()
;})(ps__$1))
};
var G__14582 = function (p1,p2,p3,var_args){
var ps = null;
if (arguments.length > 3) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14582__delegate.call(this,p1,p2,p3,ps);};
G__14582.cljs$lang$maxFixedArity = 3;
G__14582.cljs$lang$applyTo = (function (arglist__14585){
var p1 = cljs.core.first(arglist__14585);
arglist__14585 = cljs.core.next(arglist__14585);
var p2 = cljs.core.first(arglist__14585);
arglist__14585 = cljs.core.next(arglist__14585);
var p3 = cljs.core.first(arglist__14585);
var ps = cljs.core.rest(arglist__14585);
return G__14582__delegate(p1,p2,p3,ps);
});
G__14582.cljs$core$IFn$_invoke$arity$variadic = G__14582__delegate;
return G__14582;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return some_fn__1.call(this,p1);
case 2:
return some_fn__2.call(this,p1,p2);
case 3:
return some_fn__3.call(this,p1,p2,p3);
default:
return some_fn__4.cljs$core$IFn$_invoke$arity$variadic(p1,p2,p3, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__4.cljs$lang$applyTo;
some_fn.cljs$core$IFn$_invoke$arity$1 = some_fn__1;
some_fn.cljs$core$IFn$_invoke$arity$2 = some_fn__2;
some_fn.cljs$core$IFn$_invoke$arity$3 = some_fn__3;
some_fn.cljs$core$IFn$_invoke$arity$variadic = some_fn__4.cljs$core$IFn$_invoke$arity$variadic;
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to
* the set of first items of each coll, followed by applying f to the
* set of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments. Returns a transducer when
* no collection is provided.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__1 = (function (f){
return (function (rf){
return (function() {
var G__14640 = null;
var G__14640__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__14640__1 = (function (result){
var G__14626 = result;
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__14626) : rf.call(null,G__14626));
});
var G__14640__2 = (function (result,input){
var G__14627 = result;
var G__14628 = (function (){var G__14629 = input;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__14629) : f.call(null,G__14629));
})();
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__14627,G__14628) : rf.call(null,G__14627,G__14628));
});
var G__14640__3 = (function() { 
var G__14641__delegate = function (result,input,inputs){
var G__14630 = result;
var G__14631 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,input,inputs);
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__14630,G__14631) : rf.call(null,G__14630,G__14631));
};
var G__14641 = function (result,input,var_args){
var inputs = null;
if (arguments.length > 2) {
  inputs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__14641__delegate.call(this,result,input,inputs);};
G__14641.cljs$lang$maxFixedArity = 2;
G__14641.cljs$lang$applyTo = (function (arglist__14642){
var result = cljs.core.first(arglist__14642);
arglist__14642 = cljs.core.next(arglist__14642);
var input = cljs.core.first(arglist__14642);
var inputs = cljs.core.rest(arglist__14642);
return G__14641__delegate(result,input,inputs);
});
G__14641.cljs$core$IFn$_invoke$arity$variadic = G__14641__delegate;
return G__14641;
})()
;
G__14640 = function(result,input,var_args){
var inputs = var_args;
switch(arguments.length){
case 0:
return G__14640__0.call(this);
case 1:
return G__14640__1.call(this,result);
case 2:
return G__14640__2.call(this,result,input);
default:
return G__14640__3.cljs$core$IFn$_invoke$arity$variadic(result,input, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14640.cljs$lang$maxFixedArity = 2;
G__14640.cljs$lang$applyTo = G__14640__3.cljs$lang$applyTo;
G__14640.cljs$core$IFn$_invoke$arity$0 = G__14640__0;
G__14640.cljs$core$IFn$_invoke$arity$1 = G__14640__1;
G__14640.cljs$core$IFn$_invoke$arity$2 = G__14640__2;
G__14640.cljs$core$IFn$_invoke$arity$variadic = G__14640__3.cljs$core$IFn$_invoke$arity$variadic;
return G__14640;
})()
});
});
var map__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.seq(coll);
if(temp__4126__auto__){
var s = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s)){
var c = cljs.core.chunk_first(s);
var size = cljs.core.count(c);
var b = cljs.core.chunk_buffer(size);
var n__4525__auto___14643 = size;
var i_14644 = (0);
while(true){
if((i_14644 < n__4525__auto___14643)){
cljs.core.chunk_append(b,(function (){var G__14632 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c,i_14644);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__14632) : f.call(null,G__14632));
})());

var G__14645 = (i_14644 + (1));
i_14644 = G__14645;
continue;
} else {
}
break;
}

return cljs.core.chunk_cons(cljs.core.chunk(b),map.cljs$core$IFn$_invoke$arity$2(f,cljs.core.chunk_rest(s)));
} else {
return cljs.core.cons((function (){var G__14633 = cljs.core.first(s);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__14633) : f.call(null,G__14633));
})(),map.cljs$core$IFn$_invoke$arity$2(f,cljs.core.rest(s)));
}
} else {
return null;
}
}),null,null));
});
var map__3 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,(function (){
var s1 = cljs.core.seq(c1);
var s2 = cljs.core.seq(c2);
if((s1) && (s2)){
return cljs.core.cons((function (){var G__14634 = cljs.core.first(s1);
var G__14635 = cljs.core.first(s2);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__14634,G__14635) : f.call(null,G__14634,G__14635));
})(),map.cljs$core$IFn$_invoke$arity$3(f,cljs.core.rest(s1),cljs.core.rest(s2)));
} else {
return null;
}
}),null,null));
});
var map__4 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,(function (){
var s1 = cljs.core.seq(c1);
var s2 = cljs.core.seq(c2);
var s3 = cljs.core.seq(c3);
if((s1) && (s2) && (s3)){
return cljs.core.cons((function (){var G__14636 = cljs.core.first(s1);
var G__14637 = cljs.core.first(s2);
var G__14638 = cljs.core.first(s3);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__14636,G__14637,G__14638) : f.call(null,G__14636,G__14637,G__14638));
})(),map.cljs$core$IFn$_invoke$arity$4(f,cljs.core.rest(s1),cljs.core.rest(s2),cljs.core.rest(s3)));
} else {
return null;
}
}),null,null));
});
var map__5 = (function() { 
var G__14646__delegate = function (f,c1,c2,c3,colls){
var step = (function step(cs){
return (new cljs.core.LazySeq(null,(function (){
var ss = map.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,cs);
if(cljs.core.every_QMARK_(cljs.core.identity,ss)){
return cljs.core.cons(map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,ss),step(map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,ss)));
} else {
return null;
}
}),null,null));
});
return map.cljs$core$IFn$_invoke$arity$2(((function (step){
return (function (p1__14586_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,p1__14586_SHARP_);
});})(step))
,step(cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(colls,c3,cljs.core.array_seq([c2,c1], 0))));
};
var G__14646 = function (f,c1,c2,c3,var_args){
var colls = null;
if (arguments.length > 4) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__14646__delegate.call(this,f,c1,c2,c3,colls);};
G__14646.cljs$lang$maxFixedArity = 4;
G__14646.cljs$lang$applyTo = (function (arglist__14647){
var f = cljs.core.first(arglist__14647);
arglist__14647 = cljs.core.next(arglist__14647);
var c1 = cljs.core.first(arglist__14647);
arglist__14647 = cljs.core.next(arglist__14647);
var c2 = cljs.core.first(arglist__14647);
arglist__14647 = cljs.core.next(arglist__14647);
var c3 = cljs.core.first(arglist__14647);
var colls = cljs.core.rest(arglist__14647);
return G__14646__delegate(f,c1,c2,c3,colls);
});
G__14646.cljs$core$IFn$_invoke$arity$variadic = G__14646__delegate;
return G__14646;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 1:
return map__1.call(this,f);
case 2:
return map__2.call(this,f,c1);
case 3:
return map__3.call(this,f,c1,c2);
case 4:
return map__4.call(this,f,c1,c2,c3);
default:
return map__5.cljs$core$IFn$_invoke$arity$variadic(f,c1,c2,c3, cljs.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__5.cljs$lang$applyTo;
map.cljs$core$IFn$_invoke$arity$1 = map__1;
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
map.cljs$core$IFn$_invoke$arity$4 = map__4;
map.cljs$core$IFn$_invoke$arity$variadic = map__5.cljs$core$IFn$_invoke$arity$variadic;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.  Returns a stateful transducer when
* no collection is provided.
*/
cljs.core.take = (function() {
var take = null;
var take__1 = (function (n){
return (function (rf){
var na = cljs.core.volatile_BANG_(n);
return ((function (na){
return (function() {
var G__14656 = null;
var G__14656__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__14656__1 = (function (result){
var G__14653 = result;
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__14653) : rf.call(null,G__14653));
});
var G__14656__2 = (function (result,input){
var n__$1 = cljs.core.deref(na);
var nn = na.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(na.cljs$core$IDeref$_deref$arity$1(null) - (1)));
var result__$1 = (((n__$1 > (0)))?(function (){var G__14654 = result;
var G__14655 = input;
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__14654,G__14655) : rf.call(null,G__14654,G__14655));
})():result);
if(!((nn > (0)))){
return cljs.core.ensure_reduced(result__$1);
} else {
return result__$1;
}
});
G__14656 = function(result,input){
switch(arguments.length){
case 0:
return G__14656__0.call(this);
case 1:
return G__14656__1.call(this,result);
case 2:
return G__14656__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14656.cljs$core$IFn$_invoke$arity$0 = G__14656__0;
G__14656.cljs$core$IFn$_invoke$arity$1 = G__14656__1;
G__14656.cljs$core$IFn$_invoke$arity$2 = G__14656__2;
return G__14656;
})()
;})(na))
});
});
var take__2 = (function (n,coll){
return (new cljs.core.LazySeq(null,(function (){
if((n > (0))){
var temp__4126__auto__ = cljs.core.seq(coll);
if(temp__4126__auto__){
var s = temp__4126__auto__;
return cljs.core.cons(cljs.core.first(s),take.cljs$core$IFn$_invoke$arity$2((n - (1)),cljs.core.rest(s)));
} else {
return null;
}
} else {
return null;
}
}),null,null));
});
take = function(n,coll){
switch(arguments.length){
case 1:
return take__1.call(this,n);
case 2:
return take__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$1 = take__1;
take.cljs$core$IFn$_invoke$arity$2 = take__2;
return take;
})()
;
/**
* Returns a lazy sequence of all but the first n items in coll.
* Returns a stateful transducer when no collection is provided.
*/
cljs.core.drop = (function() {
var drop = null;
var drop__1 = (function (n){
return (function (rf){
var na = cljs.core.volatile_BANG_(n);
return ((function (na){
return (function() {
var G__14663 = null;
var G__14663__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__14663__1 = (function (result){
var G__14660 = result;
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__14660) : rf.call(null,G__14660));
});
var G__14663__2 = (function (result,input){
var n__$1 = cljs.core.deref(na);
na.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(na.cljs$core$IDeref$_deref$arity$1(null) - (1)));

if((n__$1 > (0))){
return result;
} else {
var G__14661 = result;
var G__14662 = input;
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__14661,G__14662) : rf.call(null,G__14661,G__14662));
}
});
G__14663 = function(result,input){
switch(arguments.length){
case 0:
return G__14663__0.call(this);
case 1:
return G__14663__1.call(this,result);
case 2:
return G__14663__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14663.cljs$core$IFn$_invoke$arity$0 = G__14663__0;
G__14663.cljs$core$IFn$_invoke$arity$1 = G__14663__1;
G__14663.cljs$core$IFn$_invoke$arity$2 = G__14663__2;
return G__14663;
})()
;})(na))
});
});
var drop__2 = (function (n,coll){
var step = (function (n__$1,coll__$1){
while(true){
var s = cljs.core.seq(coll__$1);
if(((n__$1 > (0))) && (s)){
var G__14664 = (n__$1 - (1));
var G__14665 = cljs.core.rest(s);
n__$1 = G__14664;
coll__$1 = G__14665;
continue;
} else {
return s;
}
break;
}
});
return (new cljs.core.LazySeq(null,((function (step){
return (function (){
return step(n,coll);
});})(step))
,null,null));
});
drop = function(n,coll){
switch(arguments.length){
case 1:
return drop__1.call(this,n);
case 2:
return drop__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop.cljs$core$IFn$_invoke$arity$1 = drop__1;
drop.cljs$core$IFn$_invoke$arity$2 = drop__2;
return drop;
})()
;
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__1 = (function (s){
return drop_last.cljs$core$IFn$_invoke$arity$2((1),s);
});
var drop_last__2 = (function (n,s){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (x,_){
return x;
}),s,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case 1:
return drop_last__1.call(this,n);
case 2:
return drop_last__2.call(this,n,s);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_last.cljs$core$IFn$_invoke$arity$1 = drop_last__1;
drop_last.cljs$core$IFn$_invoke$arity$2 = drop_last__2;
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){
var s = cljs.core.seq(coll);
var lead = cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,coll));
while(true){
if(lead){
var G__14668 = cljs.core.next(s);
var G__14669 = cljs.core.next(lead);
s = G__14668;
lead = G__14669;
continue;
} else {
return s;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the
* first item for which (pred item) returns logical false.  Returns a
* stateful transducer when no collection is provided.
*/
cljs.core.drop_while = (function() {
var drop_while = null;
var drop_while__1 = (function (pred){
return (function (rf){
var da = cljs.core.volatile_BANG_(true);
return ((function (da){
return (function() {
var G__14682 = null;
var G__14682__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__14682__1 = (function (result){
var G__14676 = result;
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__14676) : rf.call(null,G__14676));
});
var G__14682__2 = (function (result,input){
var drop_QMARK_ = cljs.core.deref(da);
if(cljs.core.truth_((function (){var and__3626__auto__ = drop_QMARK_;
if(cljs.core.truth_(and__3626__auto__)){
var G__14677 = input;
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__14677) : pred.call(null,G__14677));
} else {
return and__3626__auto__;
}
})())){
return result;
} else {
cljs.core.vreset_BANG_(da,null);

var G__14678 = result;
var G__14679 = input;
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__14678,G__14679) : rf.call(null,G__14678,G__14679));
}
});
G__14682 = function(result,input){
switch(arguments.length){
case 0:
return G__14682__0.call(this);
case 1:
return G__14682__1.call(this,result);
case 2:
return G__14682__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14682.cljs$core$IFn$_invoke$arity$0 = G__14682__0;
G__14682.cljs$core$IFn$_invoke$arity$1 = G__14682__1;
G__14682.cljs$core$IFn$_invoke$arity$2 = G__14682__2;
return G__14682;
})()
;})(da))
});
});
var drop_while__2 = (function (pred,coll){
var step = (function (pred__$1,coll__$1){
while(true){
var s = cljs.core.seq(coll__$1);
if(cljs.core.truth_((function (){var and__3626__auto__ = s;
if(and__3626__auto__){
var G__14681 = cljs.core.first(s);
return (pred__$1.cljs$core$IFn$_invoke$arity$1 ? pred__$1.cljs$core$IFn$_invoke$arity$1(G__14681) : pred__$1.call(null,G__14681));
} else {
return and__3626__auto__;
}
})())){
var G__14683 = pred__$1;
var G__14684 = cljs.core.rest(s);
pred__$1 = G__14683;
coll__$1 = G__14684;
continue;
} else {
return s;
}
break;
}
});
return (new cljs.core.LazySeq(null,((function (step){
return (function (){
return step(pred,coll);
});})(step))
,null,null));
});
drop_while = function(pred,coll){
switch(arguments.length){
case 1:
return drop_while__1.call(this,pred);
case 2:
return drop_while__2.call(this,pred,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_while.cljs$core$IFn$_invoke$arity$1 = drop_while__1;
drop_while.cljs$core$IFn$_invoke$arity$2 = drop_while__2;
return drop_while;
})()
;
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.seq(coll);
if(temp__4126__auto__){
var s = temp__4126__auto__;
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(s,cycle(s));
} else {
return null;
}
}),null,null));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,coll),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,coll)], null);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__1 = (function (x){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons(x,repeat.cljs$core$IFn$_invoke$arity$1(x));
}),null,null));
});
var repeat__2 = (function (n,x){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,repeat.cljs$core$IFn$_invoke$arity$1(x));
});
repeat = function(n,x){
switch(arguments.length){
case 1:
return repeat__1.call(this,n);
case 2:
return repeat__2.call(this,n,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
repeat.cljs$core$IFn$_invoke$arity$1 = repeat__1;
repeat.cljs$core$IFn$_invoke$arity$2 = repeat__2;
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__1 = (function (f){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})(),repeatedly.cljs$core$IFn$_invoke$arity$1(f));
}),null,null));
});
var repeatedly__2 = (function (n,f){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,repeatedly.cljs$core$IFn$_invoke$arity$1(f));
});
repeatedly = function(n,f){
switch(arguments.length){
case 1:
return repeatedly__1.call(this,n);
case 2:
return repeatedly__2.call(this,n,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
repeatedly.cljs$core$IFn$_invoke$arity$1 = repeatedly__1;
repeatedly.cljs$core$IFn$_invoke$arity$2 = repeatedly__2;
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){
return cljs.core.cons(x,(new cljs.core.LazySeq(null,(function (){
return iterate(f,(function (){var G__14693 = x;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__14693) : f.call(null,G__14693));
})());
}),null,null)));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__2 = (function (c1,c2){
return (new cljs.core.LazySeq(null,(function (){
var s1 = cljs.core.seq(c1);
var s2 = cljs.core.seq(c2);
if((s1) && (s2)){
return cljs.core.cons(cljs.core.first(s1),cljs.core.cons(cljs.core.first(s2),interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(s1),cljs.core.rest(s2))));
} else {
return null;
}
}),null,null));
});
var interleave__3 = (function() { 
var G__14696__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,(function (){
var ss = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(colls,c2,cljs.core.array_seq([c1], 0)));
if(cljs.core.every_QMARK_(cljs.core.identity,ss)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,ss),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(interleave,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,ss)));
} else {
return null;
}
}),null,null));
};
var G__14696 = function (c1,c2,var_args){
var colls = null;
if (arguments.length > 2) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__14696__delegate.call(this,c1,c2,colls);};
G__14696.cljs$lang$maxFixedArity = 2;
G__14696.cljs$lang$applyTo = (function (arglist__14697){
var c1 = cljs.core.first(arglist__14697);
arglist__14697 = cljs.core.next(arglist__14697);
var c2 = cljs.core.first(arglist__14697);
var colls = cljs.core.rest(arglist__14697);
return G__14696__delegate(c1,c2,colls);
});
G__14696.cljs$core$IFn$_invoke$arity$variadic = G__14696__delegate;
return G__14696;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return interleave__2.call(this,c1,c2);
default:
return interleave__3.cljs$core$IFn$_invoke$arity$variadic(c1,c2, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__3.cljs$lang$applyTo;
interleave.cljs$core$IFn$_invoke$arity$2 = interleave__2;
interleave.cljs$core$IFn$_invoke$arity$variadic = interleave__3.cljs$core$IFn$_invoke$arity$variadic;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){
return cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){
var cat = (function cat(coll,colls__$1){
return (new cljs.core.LazySeq(null,(function (){
var temp__4124__auto__ = cljs.core.seq(coll);
if(temp__4124__auto__){
var coll__$1 = temp__4124__auto__;
return cljs.core.cons(cljs.core.first(coll__$1),cat(cljs.core.rest(coll__$1),colls__$1));
} else {
if(cljs.core.seq(colls__$1)){
return cat(cljs.core.first(colls__$1),cljs.core.rest(colls__$1));
} else {
return null;
}
}
}),null,null));
});
return cat(null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection. Returns
* a transducer when no collections are provided
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__1 = (function (f){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(f),cljs.core.cat);
});
var mapcat__2 = (function() { 
var G__14706__delegate = function (f,colls){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.map,f,colls));
};
var G__14706 = function (f,var_args){
var colls = null;
if (arguments.length > 1) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14706__delegate.call(this,f,colls);};
G__14706.cljs$lang$maxFixedArity = 1;
G__14706.cljs$lang$applyTo = (function (arglist__14707){
var f = cljs.core.first(arglist__14707);
var colls = cljs.core.rest(arglist__14707);
return G__14706__delegate(f,colls);
});
G__14706.cljs$core$IFn$_invoke$arity$variadic = G__14706__delegate;
return G__14706;
})()
;
mapcat = function(f,var_args){
var colls = var_args;
switch(arguments.length){
case 1:
return mapcat__1.call(this,f);
default:
return mapcat__2.cljs$core$IFn$_invoke$arity$variadic(f, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat.cljs$lang$maxFixedArity = 1;
mapcat.cljs$lang$applyTo = mapcat__2.cljs$lang$applyTo;
mapcat.cljs$core$IFn$_invoke$arity$1 = mapcat__1;
mapcat.cljs$core$IFn$_invoke$arity$variadic = mapcat__2.cljs$core$IFn$_invoke$arity$variadic;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
* Returns a transducer when no collection is provided.
*/
cljs.core.filter = (function() {
var filter = null;
var filter__1 = (function (pred){
return (function (rf){
return (function() {
var G__14726 = null;
var G__14726__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__14726__1 = (function (result){
var G__14720 = result;
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__14720) : rf.call(null,G__14720));
});
var G__14726__2 = (function (result,input){
if(cljs.core.truth_((function (){var G__14721 = input;
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__14721) : pred.call(null,G__14721));
})())){
var G__14722 = result;
var G__14723 = input;
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__14722,G__14723) : rf.call(null,G__14722,G__14723));
} else {
return result;
}
});
G__14726 = function(result,input){
switch(arguments.length){
case 0:
return G__14726__0.call(this);
case 1:
return G__14726__1.call(this,result);
case 2:
return G__14726__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14726.cljs$core$IFn$_invoke$arity$0 = G__14726__0;
G__14726.cljs$core$IFn$_invoke$arity$1 = G__14726__1;
G__14726.cljs$core$IFn$_invoke$arity$2 = G__14726__2;
return G__14726;
})()
});
});
var filter__2 = (function (pred,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.seq(coll);
if(temp__4126__auto__){
var s = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s)){
var c = cljs.core.chunk_first(s);
var size = cljs.core.count(c);
var b = cljs.core.chunk_buffer(size);
var n__4525__auto___14727 = size;
var i_14728 = (0);
while(true){
if((i_14728 < n__4525__auto___14727)){
if(cljs.core.truth_((function (){var G__14724 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c,i_14728);
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__14724) : pred.call(null,G__14724));
})())){
cljs.core.chunk_append(b,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c,i_14728));
} else {
}

var G__14729 = (i_14728 + (1));
i_14728 = G__14729;
continue;
} else {
}
break;
}

return cljs.core.chunk_cons(cljs.core.chunk(b),filter.cljs$core$IFn$_invoke$arity$2(pred,cljs.core.chunk_rest(s)));
} else {
var f = cljs.core.first(s);
var r = cljs.core.rest(s);
if(cljs.core.truth_((function (){var G__14725 = f;
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__14725) : pred.call(null,G__14725));
})())){
return cljs.core.cons(f,filter.cljs$core$IFn$_invoke$arity$2(pred,r));
} else {
return filter.cljs$core$IFn$_invoke$arity$2(pred,r);
}
}
} else {
return null;
}
}),null,null));
});
filter = function(pred,coll){
switch(arguments.length){
case 1:
return filter__1.call(this,pred);
case 2:
return filter__2.call(this,pred,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter.cljs$core$IFn$_invoke$arity$1 = filter__1;
filter.cljs$core$IFn$_invoke$arity$2 = filter__2;
return filter;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
* Returns a transducer when no collection is provided.
*/
cljs.core.remove = (function() {
var remove = null;
var remove__1 = (function (pred){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.complement(pred));
});
var remove__2 = (function (pred,coll){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(pred),coll);
});
remove = function(pred,coll){
switch(arguments.length){
case 1:
return remove__1.call(this,pred);
case 2:
return remove__2.call(this,pred,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove.cljs$core$IFn$_invoke$arity$1 = remove__1;
remove.cljs$core$IFn$_invoke$arity$2 = remove__2;
return remove;
})()
;
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){
var walk = (function walk(node){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons(node,(cljs.core.truth_((function (){var G__14736 = node;
return (branch_QMARK_.cljs$core$IFn$_invoke$arity$1 ? branch_QMARK_.cljs$core$IFn$_invoke$arity$1(G__14736) : branch_QMARK_.call(null,G__14736));
})())?cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(walk,cljs.core.array_seq([(function (){var G__14737 = node;
return (children.cljs$core$IFn$_invoke$arity$1 ? children.cljs$core$IFn$_invoke$arity$1(G__14737) : children.call(null,G__14737));
})()], 0)):null));
}),null,null));
});
return walk(root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__14738_SHARP_){
return !(cljs.core.sequential_QMARK_(p1__14738_SHARP_));
}),cljs.core.rest(cljs.core.tree_seq(cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined. A transducer may be supplied.
*/
cljs.core.into = (function() {
var into = null;
var into__2 = (function (to,from){
if(!((to == null))){
if((function (){var G__14741 = to;
if(G__14741){
var bit__4312__auto__ = (G__14741.cljs$lang$protocol_mask$partition1$ & (4));
if((bit__4312__auto__) || (G__14741.cljs$core$IEditableCollection$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return cljs.core.with_meta(cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj_BANG_,cljs.core.transient$(to),from)),cljs.core.meta(to));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,to,from);
}
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.List.EMPTY,from);
}
});
var into__3 = (function (to,xform,from){
if((function (){var G__14742 = to;
if(G__14742){
var bit__4312__auto__ = (G__14742.cljs$lang$protocol_mask$partition1$ & (4));
if((bit__4312__auto__) || (G__14742.cljs$core$IEditableCollection$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return cljs.core.with_meta(cljs.core.persistent_BANG_(cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(xform,cljs.core.conj_BANG_,cljs.core.transient$(to),from)),cljs.core.meta(to));
} else {
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(xform,cljs.core.conj,to,from);
}
});
into = function(to,xform,from){
switch(arguments.length){
case 2:
return into__2.call(this,to,xform);
case 3:
return into__3.call(this,to,xform,from);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
into.cljs$core$IFn$_invoke$arity$2 = into__2;
into.cljs$core$IFn$_invoke$arity$3 = into__3;
return into;
})()
;
/**
* Returns a vector consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.mapv = (function() {
var mapv = null;
var mapv__2 = (function (f,coll){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (v,o){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,(function (){var G__14744 = o;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__14744) : f.call(null,G__14744));
})());
}),cljs.core.transient$(cljs.core.PersistentVector.EMPTY),coll));
});
var mapv__3 = (function (f,c1,c2){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$3(f,c1,c2));
});
var mapv__4 = (function (f,c1,c2,c3){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$4(f,c1,c2,c3));
});
var mapv__5 = (function() { 
var G__14745__delegate = function (f,c1,c2,c3,colls){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(cljs.core.map,f,c1,c2,c3,cljs.core.array_seq([colls], 0)));
};
var G__14745 = function (f,c1,c2,c3,var_args){
var colls = null;
if (arguments.length > 4) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__14745__delegate.call(this,f,c1,c2,c3,colls);};
G__14745.cljs$lang$maxFixedArity = 4;
G__14745.cljs$lang$applyTo = (function (arglist__14746){
var f = cljs.core.first(arglist__14746);
arglist__14746 = cljs.core.next(arglist__14746);
var c1 = cljs.core.first(arglist__14746);
arglist__14746 = cljs.core.next(arglist__14746);
var c2 = cljs.core.first(arglist__14746);
arglist__14746 = cljs.core.next(arglist__14746);
var c3 = cljs.core.first(arglist__14746);
var colls = cljs.core.rest(arglist__14746);
return G__14745__delegate(f,c1,c2,c3,colls);
});
G__14745.cljs$core$IFn$_invoke$arity$variadic = G__14745__delegate;
return G__14745;
})()
;
mapv = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return mapv__2.call(this,f,c1);
case 3:
return mapv__3.call(this,f,c1,c2);
case 4:
return mapv__4.call(this,f,c1,c2,c3);
default:
return mapv__5.cljs$core$IFn$_invoke$arity$variadic(f,c1,c2,c3, cljs.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapv.cljs$lang$maxFixedArity = 4;
mapv.cljs$lang$applyTo = mapv__5.cljs$lang$applyTo;
mapv.cljs$core$IFn$_invoke$arity$2 = mapv__2;
mapv.cljs$core$IFn$_invoke$arity$3 = mapv__3;
mapv.cljs$core$IFn$_invoke$arity$4 = mapv__4;
mapv.cljs$core$IFn$_invoke$arity$variadic = mapv__5.cljs$core$IFn$_invoke$arity$variadic;
return mapv;
})()
;
/**
* Returns a vector of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filterv = (function filterv(pred,coll){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (v,o){
if(cljs.core.truth_((function (){var G__14748 = o;
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__14748) : pred.call(null,G__14748));
})())){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,o);
} else {
return v;
}
}),cljs.core.transient$(cljs.core.PersistentVector.EMPTY),coll));
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition upto n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljs.core.partition = (function() {
var partition = null;
var partition__2 = (function (n,coll){
return partition.cljs$core$IFn$_invoke$arity$3(n,n,coll);
});
var partition__3 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.seq(coll);
if(temp__4126__auto__){
var s = temp__4126__auto__;
var p = cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,s);
if((n === cljs.core.count(p))){
return cljs.core.cons(p,partition.cljs$core$IFn$_invoke$arity$3(n,step,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(step,s)));
} else {
return null;
}
} else {
return null;
}
}),null,null));
});
var partition__4 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.seq(coll);
if(temp__4126__auto__){
var s = temp__4126__auto__;
var p = cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,s);
if((n === cljs.core.count(p))){
return cljs.core.cons(p,partition.cljs$core$IFn$_invoke$arity$4(n,step,pad,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(step,s)));
} else {
return cljs.core._conj(cljs.core.List.EMPTY,cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(p,pad)));
}
} else {
return null;
}
}),null,null));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case 2:
return partition__2.call(this,n,step);
case 3:
return partition__3.call(this,n,step,pad);
case 4:
return partition__4.call(this,n,step,pad,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
partition.cljs$core$IFn$_invoke$arity$4 = partition__4;
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of keys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__2 = (function (m,ks){
return get_in.cljs$core$IFn$_invoke$arity$3(m,ks,null);
});
var get_in__3 = (function (m,ks,not_found){
var sentinel = cljs.core.lookup_sentinel;
var m__$1 = m;
var ks__$1 = cljs.core.seq(ks);
while(true){
if(ks__$1){
if(!((function (){var G__14763 = m__$1;
if(G__14763){
var bit__4319__auto__ = (G__14763.cljs$lang$protocol_mask$partition0$ & (256));
if((bit__4319__auto__) || (G__14763.cljs$core$ILookup$)){
return true;
} else {
if((!G__14763.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,G__14763);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,G__14763);
}
})())){
return not_found;
} else {
var m__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m__$1,cljs.core.first(ks__$1),sentinel);
if((sentinel === m__$2)){
return not_found;
} else {
var G__14764 = sentinel;
var G__14765 = m__$2;
var G__14766 = cljs.core.next(ks__$1);
sentinel = G__14764;
m__$1 = G__14765;
ks__$1 = G__14766;
continue;
}
}
} else {
return m__$1;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case 2:
return get_in__2.call(this,m,ks);
case 3:
return get_in__3.call(this,m,ks,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_in.cljs$core$IFn$_invoke$arity$2 = get_in__2;
get_in.cljs$core$IFn$_invoke$arity$3 = get_in__3;
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__14767,v){
var vec__14772 = p__14767;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14772,(0),null);
var ks = cljs.core.nthnext(vec__14772,(1));
if(ks){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,assoc_in(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks,v));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljs.core.update_in = (function() {
var update_in = null;
var update_in__3 = (function (m,p__14773,f){
var vec__14811 = p__14773;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14811,(0),null);
var ks = cljs.core.nthnext(vec__14811,(1));
if(ks){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks,f));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__14812 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__14812) : f.call(null,G__14812));
})());
}
});
var update_in__4 = (function (m,p__14774,f,a){
var vec__14813 = p__14774;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14813,(0),null);
var ks = cljs.core.nthnext(vec__14813,(1));
if(ks){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks,f,a));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__14814 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__14815 = a;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__14814,G__14815) : f.call(null,G__14814,G__14815));
})());
}
});
var update_in__5 = (function (m,p__14775,f,a,b){
var vec__14816 = p__14775;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14816,(0),null);
var ks = cljs.core.nthnext(vec__14816,(1));
if(ks){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,update_in.cljs$core$IFn$_invoke$arity$5(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks,f,a,b));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__14817 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__14818 = a;
var G__14819 = b;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__14817,G__14818,G__14819) : f.call(null,G__14817,G__14818,G__14819));
})());
}
});
var update_in__6 = (function (m,p__14776,f,a,b,c){
var vec__14820 = p__14776;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14820,(0),null);
var ks = cljs.core.nthnext(vec__14820,(1));
if(ks){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,update_in.cljs$core$IFn$_invoke$arity$6(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks,f,a,b,c));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__14821 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__14822 = a;
var G__14823 = b;
var G__14824 = c;
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__14821,G__14822,G__14823,G__14824) : f.call(null,G__14821,G__14822,G__14823,G__14824));
})());
}
});
var update_in__7 = (function() { 
var G__14826__delegate = function (m,p__14777,f,a,b,c,args){
var vec__14825 = p__14777;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14825,(0),null);
var ks = cljs.core.nthnext(vec__14825,(1));
if(ks){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(update_in,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks,f,a,cljs.core.array_seq([b,c,args], 0)));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),a,b,c,cljs.core.array_seq([args], 0)));
}
};
var G__14826 = function (m,p__14777,f,a,b,c,var_args){
var args = null;
if (arguments.length > 6) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);
} 
return G__14826__delegate.call(this,m,p__14777,f,a,b,c,args);};
G__14826.cljs$lang$maxFixedArity = 6;
G__14826.cljs$lang$applyTo = (function (arglist__14827){
var m = cljs.core.first(arglist__14827);
arglist__14827 = cljs.core.next(arglist__14827);
var p__14777 = cljs.core.first(arglist__14827);
arglist__14827 = cljs.core.next(arglist__14827);
var f = cljs.core.first(arglist__14827);
arglist__14827 = cljs.core.next(arglist__14827);
var a = cljs.core.first(arglist__14827);
arglist__14827 = cljs.core.next(arglist__14827);
var b = cljs.core.first(arglist__14827);
arglist__14827 = cljs.core.next(arglist__14827);
var c = cljs.core.first(arglist__14827);
var args = cljs.core.rest(arglist__14827);
return G__14826__delegate(m,p__14777,f,a,b,c,args);
});
G__14826.cljs$core$IFn$_invoke$arity$variadic = G__14826__delegate;
return G__14826;
})()
;
update_in = function(m,p__14777,f,a,b,c,var_args){
var args = var_args;
switch(arguments.length){
case 3:
return update_in__3.call(this,m,p__14777,f);
case 4:
return update_in__4.call(this,m,p__14777,f,a);
case 5:
return update_in__5.call(this,m,p__14777,f,a,b);
case 6:
return update_in__6.call(this,m,p__14777,f,a,b,c);
default:
return update_in__7.cljs$core$IFn$_invoke$arity$variadic(m,p__14777,f,a,b,c, cljs.core.array_seq(arguments, 6));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_in.cljs$lang$maxFixedArity = 6;
update_in.cljs$lang$applyTo = update_in__7.cljs$lang$applyTo;
update_in.cljs$core$IFn$_invoke$arity$3 = update_in__3;
update_in.cljs$core$IFn$_invoke$arity$4 = update_in__4;
update_in.cljs$core$IFn$_invoke$arity$5 = update_in__5;
update_in.cljs$core$IFn$_invoke$arity$6 = update_in__6;
update_in.cljs$core$IFn$_invoke$arity$variadic = update_in__7.cljs$core$IFn$_invoke$arity$variadic;
return update_in;
})()
;
/**
* 'Updates' a value in an associative structure, where k is a
* key and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* structure.  If the key does not exist, nil is passed as the old value.
* @param {...*} var_args
*/
cljs.core.update = (function() {
var update = null;
var update__3 = (function (m,k,f){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__14838 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__14838) : f.call(null,G__14838));
})());
});
var update__4 = (function (m,k,f,x){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__14839 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__14840 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__14839,G__14840) : f.call(null,G__14839,G__14840));
})());
});
var update__5 = (function (m,k,f,x,y){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__14841 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__14842 = x;
var G__14843 = y;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__14841,G__14842,G__14843) : f.call(null,G__14841,G__14842,G__14843));
})());
});
var update__6 = (function (m,k,f,x,y,z){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__14844 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__14845 = x;
var G__14846 = y;
var G__14847 = z;
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__14844,G__14845,G__14846,G__14847) : f.call(null,G__14844,G__14845,G__14846,G__14847));
})());
});
var update__7 = (function() { 
var G__14848__delegate = function (m,k,f,x,y,z,more){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),x,y,z,cljs.core.array_seq([more], 0)));
};
var G__14848 = function (m,k,f,x,y,z,var_args){
var more = null;
if (arguments.length > 6) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);
} 
return G__14848__delegate.call(this,m,k,f,x,y,z,more);};
G__14848.cljs$lang$maxFixedArity = 6;
G__14848.cljs$lang$applyTo = (function (arglist__14849){
var m = cljs.core.first(arglist__14849);
arglist__14849 = cljs.core.next(arglist__14849);
var k = cljs.core.first(arglist__14849);
arglist__14849 = cljs.core.next(arglist__14849);
var f = cljs.core.first(arglist__14849);
arglist__14849 = cljs.core.next(arglist__14849);
var x = cljs.core.first(arglist__14849);
arglist__14849 = cljs.core.next(arglist__14849);
var y = cljs.core.first(arglist__14849);
arglist__14849 = cljs.core.next(arglist__14849);
var z = cljs.core.first(arglist__14849);
var more = cljs.core.rest(arglist__14849);
return G__14848__delegate(m,k,f,x,y,z,more);
});
G__14848.cljs$core$IFn$_invoke$arity$variadic = G__14848__delegate;
return G__14848;
})()
;
update = function(m,k,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case 3:
return update__3.call(this,m,k,f);
case 4:
return update__4.call(this,m,k,f,x);
case 5:
return update__5.call(this,m,k,f,x,y);
case 6:
return update__6.call(this,m,k,f,x,y,z);
default:
return update__7.cljs$core$IFn$_invoke$arity$variadic(m,k,f,x,y,z, cljs.core.array_seq(arguments, 6));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update.cljs$lang$maxFixedArity = 6;
update.cljs$lang$applyTo = update__7.cljs$lang$applyTo;
update.cljs$core$IFn$_invoke$arity$3 = update__3;
update.cljs$core$IFn$_invoke$arity$4 = update__4;
update.cljs$core$IFn$_invoke$arity$5 = update__5;
update.cljs$core$IFn$_invoke$arity$6 = update__6;
update.cljs$core$IFn$_invoke$arity$variadic = update__7.cljs$core$IFn$_invoke$arity$variadic;
return update;
})()
;

/**
* @constructor
*/
cljs.core.VectorNode = (function (edit,arr){
this.edit = edit;
this.arr = arr;
})

cljs.core.VectorNode.cljs$lang$type = true;

cljs.core.VectorNode.cljs$lang$ctorStr = "cljs.core/VectorNode";

cljs.core.VectorNode.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write(writer__4226__auto__,"cljs.core/VectorNode");
});

cljs.core.__GT_VectorNode = (function __GT_VectorNode(edit,arr){
return (new cljs.core.VectorNode(edit,arr));
});

cljs.core.pv_fresh_node = (function pv_fresh_node(edit){
return (new cljs.core.VectorNode(edit,[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]));
});
cljs.core.pv_aget = (function pv_aget(node,idx){
return (node.arr[idx]);
});
cljs.core.pv_aset = (function pv_aset(node,idx,val){
return (node.arr[idx] = val);
});
cljs.core.pv_clone_node = (function pv_clone_node(node){
return (new cljs.core.VectorNode(node.edit,cljs.core.aclone(node.arr)));
});
cljs.core.tail_off = (function tail_off(pv){
var cnt = pv.cnt;
if((cnt < (32))){
return (0);
} else {
return (((cnt - (1)) >>> (5)) << (5));
}
});
cljs.core.new_path = (function new_path(edit,level,node){
var ll = level;
var ret = node;
while(true){
if((ll === (0))){
return ret;
} else {
var embed = ret;
var r = cljs.core.pv_fresh_node(edit);
var _ = cljs.core.pv_aset(r,(0),embed);
var G__14850 = (ll - (5));
var G__14851 = r;
ll = G__14850;
ret = G__14851;
continue;
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret = cljs.core.pv_clone_node(parent);
var subidx = (((pv.cnt - (1)) >>> level) & (31));
if(((5) === level)){
cljs.core.pv_aset(ret,subidx,tailnode);

return ret;
} else {
var child = cljs.core.pv_aget(parent,subidx);
if(!((child == null))){
var node_to_insert = push_tail(pv,(level - (5)),child,tailnode);
cljs.core.pv_aset(ret,subidx,node_to_insert);

return ret;
} else {
var node_to_insert = cljs.core.new_path(null,(level - (5)),tailnode);
cljs.core.pv_aset(ret,subidx,node_to_insert);

return ret;
}
}
});
cljs.core.vector_index_out_of_bounds = (function vector_index_out_of_bounds(i,cnt){
throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in vector of length "),cljs.core.str(cnt)].join('')));
});
cljs.core.first_array_for_longvec = (function first_array_for_longvec(pv){
var node = pv.root;
var level = pv.shift;
while(true){
if((level > (0))){
var G__14856 = cljs.core.pv_aget(node,(0));
var G__14857 = (level - (5));
node = G__14856;
level = G__14857;
continue;
} else {
return node.arr;
}
break;
}
});
cljs.core.unchecked_array_for = (function unchecked_array_for(pv,i){
if((i >= cljs.core.tail_off(pv))){
return pv.tail;
} else {
var node = pv.root;
var level = pv.shift;
while(true){
if((level > (0))){
var G__14858 = cljs.core.pv_aget(node,((i >>> level) & (31)));
var G__14859 = (level - (5));
node = G__14858;
level = G__14859;
continue;
} else {
return node.arr;
}
break;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if((((0) <= i)) && ((i < pv.cnt))){
return cljs.core.unchecked_array_for(pv,i);
} else {
return cljs.core.vector_index_out_of_bounds(i,pv.cnt);
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret = cljs.core.pv_clone_node(node);
if((level === (0))){
cljs.core.pv_aset(ret,(i & (31)),val);

return ret;
} else {
var subidx = ((i >>> level) & (31));
cljs.core.pv_aset(ret,subidx,do_assoc(pv,(level - (5)),cljs.core.pv_aget(node,subidx),i,val));

return ret;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx = (((pv.cnt - (2)) >>> level) & (31));
if((level > (5))){
var new_child = pop_tail(pv,(level - (5)),cljs.core.pv_aget(node,subidx));
if(((new_child == null)) && ((subidx === (0)))){
return null;
} else {
var ret = cljs.core.pv_clone_node(node);
cljs.core.pv_aset(ret,subidx,new_child);

return ret;
}
} else {
if((subidx === (0))){
return null;
} else {
var ret = cljs.core.pv_clone_node(node);
cljs.core.pv_aset(ret,subidx,null);

return ret;

}
}
});

/**
* @constructor
*/
cljs.core.RangedIterator = (function (i,base,arr,v,start,end){
this.i = i;
this.base = base;
this.arr = arr;
this.v = v;
this.start = start;
this.end = end;
})
cljs.core.RangedIterator.prototype.hasNext = (function (){
var self__ = this;
var this$ = this;
return (self__.i < self__.end);
});

cljs.core.RangedIterator.prototype.next = (function (){
var self__ = this;
var this$ = this;
if(((self__.i - self__.base) === (32))){
self__.arr = cljs.core.unchecked_array_for(self__.v,self__.i);

self__.base = (self__.base + (32));
} else {
}

var ret = (self__.arr[(self__.i & (31))]);
self__.i = (self__.i + (1));

return ret;
});

cljs.core.RangedIterator.cljs$lang$type = true;

cljs.core.RangedIterator.cljs$lang$ctorStr = "cljs.core/RangedIterator";

cljs.core.RangedIterator.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write(writer__4226__auto__,"cljs.core/RangedIterator");
});

cljs.core.__GT_RangedIterator = (function __GT_RangedIterator(i,base,arr,v,start,end){
return (new cljs.core.RangedIterator(i,base,arr,v,start,end));
});

cljs.core.ranged_iterator = (function ranged_iterator(v,start,end){
var i = start;
return (new cljs.core.RangedIterator(i,(i - (i % (32))),(((start < cljs.core.count(v)))?cljs.core.unchecked_array_for(v,i):null),v,start,end));
});







/**
* @constructor
*/
cljs.core.PersistentVector = (function (meta,cnt,shift,root,tail,__hash){
this.meta = meta;
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 167668511;
this.cljs$lang$protocol_mask$partition1$ = 8196;
})
cljs.core.PersistentVector.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.PersistentVector.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,k,null);
});

cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
var coll__$1 = this;
if(typeof k === 'number'){
return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(coll__$1,k,not_found);
} else {
return not_found;
}
});

cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){
var self__ = this;
var v__$1 = this;
var i = (0);
var init__$1 = init;
while(true){
if((i < self__.cnt)){
var arr = cljs.core.unchecked_array_for(v__$1,i);
var len = arr.length;
var init__$2 = (function (){var j = (0);
var init__$2 = init__$1;
while(true){
if((j < len)){
var init__$3 = (function (){var G__14869 = init__$2;
var G__14870 = (j + i);
var G__14871 = (arr[j]);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__14869,G__14870,G__14871) : f.call(null,G__14869,G__14870,G__14871));
})();
if(cljs.core.reduced_QMARK_(init__$3)){
return init__$3;
} else {
var G__14882 = (j + (1));
var G__14883 = init__$3;
j = G__14882;
init__$2 = G__14883;
continue;
}
} else {
return init__$2;
}
break;
}
})();
if(cljs.core.reduced_QMARK_(init__$2)){
var G__14872 = init__$2;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14872) : cljs.core.deref.call(null,G__14872));
} else {
var G__14884 = (i + len);
var G__14885 = init__$2;
i = G__14884;
init__$1 = G__14885;
continue;
}
} else {
return init__$1;
}
break;
}
});

cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var self__ = this;
var coll__$1 = this;
return (cljs.core.array_for(coll__$1,n)[(n & (31))]);
});

cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var self__ = this;
var coll__$1 = this;
if((((0) <= n)) && ((n < self__.cnt))){
return (cljs.core.unchecked_array_for(coll__$1,n)[(n & (31))]);
} else {
return not_found;
}
});

cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var self__ = this;
var coll__$1 = this;
if((((0) <= n)) && ((n < self__.cnt))){
if((cljs.core.tail_off(coll__$1) <= n)){
var new_tail = cljs.core.aclone(self__.tail);
(new_tail[(n & (31))] = val);

return (new cljs.core.PersistentVector(self__.meta,self__.cnt,self__.shift,self__.root,new_tail,null));
} else {
return (new cljs.core.PersistentVector(self__.meta,self__.cnt,self__.shift,cljs.core.do_assoc(coll__$1,self__.shift,self__.root,n,val),self__.tail,null));
}
} else {
if((n === self__.cnt)){
return cljs.core._conj(coll__$1,val);
} else {
throw (new Error([cljs.core.str("Index "),cljs.core.str(n),cljs.core.str(" out of bounds  [0,"),cljs.core.str(self__.cnt),cljs.core.str("]")].join('')));

}
}
});

cljs.core.PersistentVector.prototype.cljs$core$IIterable$ = true;

cljs.core.PersistentVector.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.ranged_iterator(this$__$1,(0),self__.cnt);
});

cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.PersistentVector.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.PersistentVector(self__.meta,self__.cnt,self__.shift,self__.root,self__.tail,self__.__hash));
});

cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.cnt;
});

cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(coll__$1,(0));
});

cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(coll__$1,(1));
});

cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.cnt > (0))){
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(coll__$1,(self__.cnt - (1)));
} else {
return null;
}
});

cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.cnt === (0))){
throw (new Error("Can't pop empty vector"));
} else {
if(((1) === self__.cnt)){
return cljs.core._with_meta(cljs.core.PersistentVector.EMPTY,self__.meta);
} else {
if(((1) < (self__.cnt - cljs.core.tail_off(coll__$1)))){
return (new cljs.core.PersistentVector(self__.meta,(self__.cnt - (1)),self__.shift,self__.root,self__.tail.slice((0),(-1)),null));
} else {
var new_tail = cljs.core.unchecked_array_for(coll__$1,(self__.cnt - (2)));
var nr = cljs.core.pop_tail(coll__$1,self__.shift,self__.root);
var new_root = (((nr == null))?cljs.core.PersistentVector.EMPTY_NODE:nr);
var cnt_1 = (self__.cnt - (1));
if((((5) < self__.shift)) && ((cljs.core.pv_aget(new_root,(1)) == null))){
return (new cljs.core.PersistentVector(self__.meta,cnt_1,(self__.shift - (5)),cljs.core.pv_aget(new_root,(0)),new_tail,null));
} else {
return (new cljs.core.PersistentVector(self__.meta,cnt_1,self__.shift,new_root,new_tail,null));
}

}
}
}
});

cljs.core.PersistentVector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.cnt > (0))){
return (new cljs.core.RSeq(coll__$1,(self__.cnt - (1)),null));
} else {
return null;
}
});

cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4059__auto__ = self__.__hash;
if(!((h__4059__auto__ == null))){
return h__4059__auto__;
} else {
var h__4059__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__4059__auto____$1;

return h__4059__auto____$1;
}
});

cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
if((other instanceof cljs.core.PersistentVector)){
if((self__.cnt === cljs.core.count(other))){
var me_iter = cljs.core._iterator(coll__$1);
var you_iter = cljs.core._iterator(other);
while(true){
if(cljs.core.truth_(me_iter.hasNext())){
var x = me_iter.next();
var y = you_iter.next();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y)){
continue;
} else {
return false;
}
} else {
return true;
}
break;
}
} else {
return false;
}
} else {
return cljs.core.equiv_sequential(coll__$1,other);
}
});

cljs.core.PersistentVector.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.TransientVector(self__.cnt,self__.shift,(function (){var G__14873 = self__.root;
return (cljs.core.tv_editable_root.cljs$core$IFn$_invoke$arity$1 ? cljs.core.tv_editable_root.cljs$core$IFn$_invoke$arity$1(G__14873) : cljs.core.tv_editable_root.call(null,G__14873));
})(),(function (){var G__14874 = self__.tail;
return (cljs.core.tv_editable_tail.cljs$core$IFn$_invoke$arity$1 ? cljs.core.tv_editable_tail.cljs$core$IFn$_invoke$arity$1(G__14874) : cljs.core.tv_editable_tail.call(null,G__14874));
})()));
});

cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,self__.meta);
});

cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var self__ = this;
var v__$1 = this;
return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2(v__$1,f);
});

cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,init){
var self__ = this;
var v__$1 = this;
var i = (0);
var init__$1 = init;
while(true){
if((i < self__.cnt)){
var arr = cljs.core.unchecked_array_for(v__$1,i);
var len = arr.length;
var init__$2 = (function (){var j = (0);
var init__$2 = init__$1;
while(true){
if((j < len)){
var init__$3 = (function (){var G__14875 = init__$2;
var G__14876 = (arr[j]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__14875,G__14876) : f.call(null,G__14875,G__14876));
})();
if(cljs.core.reduced_QMARK_(init__$3)){
return init__$3;
} else {
var G__14886 = (j + (1));
var G__14887 = init__$3;
j = G__14886;
init__$2 = G__14887;
continue;
}
} else {
return init__$2;
}
break;
}
})();
if(cljs.core.reduced_QMARK_(init__$2)){
var G__14877 = init__$2;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14877) : cljs.core.deref.call(null,G__14877));
} else {
var G__14888 = (i + len);
var G__14889 = init__$2;
i = G__14888;
init__$1 = G__14889;
continue;
}
} else {
return init__$1;
}
break;
}
});

cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var self__ = this;
var coll__$1 = this;
if(typeof k === 'number'){
return cljs.core._assoc_n(coll__$1,k,v);
} else {
throw (new Error("Vector's key for assoc must be a number."));
}
});

cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.cnt === (0))){
return null;
} else {
if((self__.cnt <= (32))){
return (new cljs.core.IndexedSeq(self__.tail,(0)));
} else {
var G__14878 = coll__$1;
var G__14879 = cljs.core.first_array_for_longvec(coll__$1);
var G__14880 = (0);
var G__14881 = (0);
return (cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4 ? cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4(G__14878,G__14879,G__14880,G__14881) : cljs.core.chunked_seq.call(null,G__14878,G__14879,G__14880,G__14881));

}
}
});

cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentVector(meta__$1,self__.cnt,self__.shift,self__.root,self__.tail,self__.__hash));
});

cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
if(((self__.cnt - cljs.core.tail_off(coll__$1)) < (32))){
var len = self__.tail.length;
var new_tail = (new Array((len + (1))));
var n__4525__auto___14890 = len;
var i_14891 = (0);
while(true){
if((i_14891 < n__4525__auto___14890)){
(new_tail[i_14891] = (self__.tail[i_14891]));

var G__14892 = (i_14891 + (1));
i_14891 = G__14892;
continue;
} else {
}
break;
}

(new_tail[len] = o);

return (new cljs.core.PersistentVector(self__.meta,(self__.cnt + (1)),self__.shift,self__.root,new_tail,null));
} else {
var root_overflow_QMARK_ = ((self__.cnt >>> (5)) > ((1) << self__.shift));
var new_shift = ((root_overflow_QMARK_)?(self__.shift + (5)):self__.shift);
var new_root = ((root_overflow_QMARK_)?(function (){var n_r = cljs.core.pv_fresh_node(null);
cljs.core.pv_aset(n_r,(0),self__.root);

cljs.core.pv_aset(n_r,(1),cljs.core.new_path(null,self__.shift,(new cljs.core.VectorNode(null,self__.tail))));

return n_r;
})():cljs.core.push_tail(coll__$1,self__.shift,self__.root,(new cljs.core.VectorNode(null,self__.tail))));
return (new cljs.core.PersistentVector(self__.meta,(self__.cnt + (1)),new_shift,new_root,[o],null));
}
});

cljs.core.PersistentVector.prototype.call = (function() {
var G__14893 = null;
var G__14893__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$IIndexed$_nth$arity$2(null,k);
});
var G__14893__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$IIndexed$_nth$arity$3(null,k,not_found);
});
G__14893 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__14893__2.call(this,self__,k);
case 3:
return G__14893__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14893.cljs$core$IFn$_invoke$arity$2 = G__14893__2;
G__14893.cljs$core$IFn$_invoke$arity$3 = G__14893__3;
return G__14893;
})()
;

cljs.core.PersistentVector.prototype.apply = (function (self__,args14868){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args14868)));
});

cljs.core.PersistentVector.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var coll = this;
return coll.cljs$core$IIndexed$_nth$arity$2(null,k);
});

cljs.core.PersistentVector.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var coll = this;
return coll.cljs$core$IIndexed$_nth$arity$3(null,k,not_found);
});

cljs.core.PersistentVector.cljs$lang$type = true;

cljs.core.PersistentVector.cljs$lang$ctorStr = "cljs.core/PersistentVector";

cljs.core.PersistentVector.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write(writer__4226__auto__,"cljs.core/PersistentVector");
});

cljs.core.__GT_PersistentVector = (function __GT_PersistentVector(meta,cnt,shift,root,tail,__hash){
return (new cljs.core.PersistentVector(meta,cnt,shift,root,tail,__hash));
});

cljs.core.PersistentVector.EMPTY_NODE = (new cljs.core.VectorNode(null,[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]));
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,(0),(5),cljs.core.PersistentVector.EMPTY_NODE,[],(0)));
cljs.core.PersistentVector.fromArray = (function (xs,no_clone){
var l = xs.length;
var xs__$1 = ((no_clone)?xs:cljs.core.aclone(xs));
if((l < (32))){
return (new cljs.core.PersistentVector(null,l,(5),cljs.core.PersistentVector.EMPTY_NODE,xs__$1,null));
} else {
var node = xs__$1.slice((0),(32));
var v = (new cljs.core.PersistentVector(null,(32),(5),cljs.core.PersistentVector.EMPTY_NODE,node,null));
var i = (32);
var out = v.cljs$core$IEditableCollection$_as_transient$arity$1(null);
while(true){
if((i < l)){
var G__14894 = (i + (1));
var G__14895 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(out,(xs__$1[i]));
i = G__14894;
out = G__14895;
continue;
} else {
return cljs.core.persistent_BANG_(out);
}
break;
}
}
});
(cljs.core.PersistentVector.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4616__auto__ = this;
return cljs.core.es6_iterator(this__4616__auto__);
}));
cljs.core.vec = (function vec(coll){
return cljs.core._persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj_BANG_,cljs.core._as_transient(cljs.core.PersistentVector.EMPTY),coll));
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){
if(((args instanceof cljs.core.IndexedSeq)) && ((args.i === (0)))){
return cljs.core.PersistentVector.fromArray(args.arr,true);
} else {
return cljs.core.vec(args);
}
};
var vector = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return vector__delegate.call(this,args);};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__14896){
var args = cljs.core.seq(arglist__14896);
return vector__delegate(args);
});
vector.cljs$core$IFn$_invoke$arity$variadic = vector__delegate;
return vector;
})()
;

/**
* @constructor
*/
cljs.core.ChunkedSeq = (function (vec,node,i,off,meta,__hash){
this.vec = vec;
this.node = node;
this.i = i;
this.off = off;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 32375020;
this.cljs$lang$protocol_mask$partition1$ = 1536;
})
cljs.core.ChunkedSeq.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.ChunkedSeq.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.ChunkedSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.ChunkedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if(((self__.off + (1)) < self__.node.length)){
var s = (function (){var G__14897 = self__.vec;
var G__14898 = self__.node;
var G__14899 = self__.i;
var G__14900 = (self__.off + (1));
return (cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4 ? cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4(G__14897,G__14898,G__14899,G__14900) : cljs.core.chunked_seq.call(null,G__14897,G__14898,G__14899,G__14900));
})();
if((s == null)){
return null;
} else {
return s;
}
} else {
return cljs.core._chunked_next(coll__$1);
}
});

cljs.core.ChunkedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4059__auto__ = self__.__hash;
if(!((h__4059__auto__ == null))){
return h__4059__auto__;
} else {
var h__4059__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__4059__auto____$1;

return h__4059__auto____$1;
}
});

cljs.core.ChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.ChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,self__.meta);
});

cljs.core.ChunkedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2((function (){var G__14901 = self__.vec;
var G__14902 = (self__.i + self__.off);
var G__14903 = cljs.core.count(self__.vec);
return (cljs.core.subvec.cljs$core$IFn$_invoke$arity$3 ? cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(G__14901,G__14902,G__14903) : cljs.core.subvec.call(null,G__14901,G__14902,G__14903));
})(),f);
});

cljs.core.ChunkedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$3((function (){var G__14904 = self__.vec;
var G__14905 = (self__.i + self__.off);
var G__14906 = cljs.core.count(self__.vec);
return (cljs.core.subvec.cljs$core$IFn$_invoke$arity$3 ? cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(G__14904,G__14905,G__14906) : cljs.core.subvec.call(null,G__14904,G__14905,G__14906));
})(),f,start);
});

cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (self__.node[self__.off]);
});

cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if(((self__.off + (1)) < self__.node.length)){
var s = (function (){var G__14907 = self__.vec;
var G__14908 = self__.node;
var G__14909 = self__.i;
var G__14910 = (self__.off + (1));
return (cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4 ? cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4(G__14907,G__14908,G__14909,G__14910) : cljs.core.chunked_seq.call(null,G__14907,G__14908,G__14909,G__14910));
})();
if((s == null)){
return cljs.core.List.EMPTY;
} else {
return s;
}
} else {
return cljs.core._chunked_rest(coll__$1);
}
});

cljs.core.ChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return coll__$1;
});

cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.array_chunk.cljs$core$IFn$_invoke$arity$2(self__.node,self__.off);
});

cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var end = (self__.i + self__.node.length);
if((end < cljs.core._count(self__.vec))){
var G__14911 = self__.vec;
var G__14912 = cljs.core.unchecked_array_for(self__.vec,end);
var G__14913 = end;
var G__14914 = (0);
return (cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4 ? cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4(G__14911,G__14912,G__14913,G__14914) : cljs.core.chunked_seq.call(null,G__14911,G__14912,G__14913,G__14914));
} else {
return cljs.core.List.EMPTY;
}
});

cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var self__ = this;
var coll__$1 = this;
var G__14915 = self__.vec;
var G__14916 = self__.node;
var G__14917 = self__.i;
var G__14918 = self__.off;
var G__14919 = m;
return (cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$5 ? cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$5(G__14915,G__14916,G__14917,G__14918,G__14919) : cljs.core.chunked_seq.call(null,G__14915,G__14916,G__14917,G__14918,G__14919));
});

cljs.core.ChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return cljs.core.cons(o,coll__$1);
});

cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var end = (self__.i + self__.node.length);
if((end < cljs.core._count(self__.vec))){
var G__14920 = self__.vec;
var G__14921 = cljs.core.unchecked_array_for(self__.vec,end);
var G__14922 = end;
var G__14923 = (0);
return (cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4 ? cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4(G__14920,G__14921,G__14922,G__14923) : cljs.core.chunked_seq.call(null,G__14920,G__14921,G__14922,G__14923));
} else {
return null;
}
});

cljs.core.ChunkedSeq.cljs$lang$type = true;

cljs.core.ChunkedSeq.cljs$lang$ctorStr = "cljs.core/ChunkedSeq";

cljs.core.ChunkedSeq.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write(writer__4226__auto__,"cljs.core/ChunkedSeq");
});

cljs.core.__GT_ChunkedSeq = (function __GT_ChunkedSeq(vec,node,i,off,meta,__hash){
return (new cljs.core.ChunkedSeq(vec,node,i,off,meta,__hash));
});

(cljs.core.ChunkedSeq.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4616__auto__ = this;
return cljs.core.es6_iterator(this__4616__auto__);
}));
cljs.core.chunked_seq = (function() {
var chunked_seq = null;
var chunked_seq__3 = (function (vec,i,off){
return (new cljs.core.ChunkedSeq(vec,cljs.core.array_for(vec,i),i,off,null,null));
});
var chunked_seq__4 = (function (vec,node,i,off){
return (new cljs.core.ChunkedSeq(vec,node,i,off,null,null));
});
var chunked_seq__5 = (function (vec,node,i,off,meta){
return (new cljs.core.ChunkedSeq(vec,node,i,off,meta,null));
});
chunked_seq = function(vec,node,i,off,meta){
switch(arguments.length){
case 3:
return chunked_seq__3.call(this,vec,node,i);
case 4:
return chunked_seq__4.call(this,vec,node,i,off);
case 5:
return chunked_seq__5.call(this,vec,node,i,off,meta);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chunked_seq.cljs$core$IFn$_invoke$arity$3 = chunked_seq__3;
chunked_seq.cljs$core$IFn$_invoke$arity$4 = chunked_seq__4;
chunked_seq.cljs$core$IFn$_invoke$arity$5 = chunked_seq__5;
return chunked_seq;
})()
;

/**
* @constructor
*/
cljs.core.Subvec = (function (meta,v,start,end,__hash){
this.meta = meta;
this.v = v;
this.start = start;
this.end = end;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 166617887;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.Subvec.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.Subvec.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,k,null);
});

cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
var coll__$1 = this;
if(typeof k === 'number'){
return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(coll__$1,k,not_found);
} else {
return not_found;
}
});

cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var self__ = this;
var coll__$1 = this;
if(((n < (0))) || ((self__.end <= (self__.start + n)))){
return cljs.core.vector_index_out_of_bounds(n,(self__.end - self__.start));
} else {
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(self__.v,(self__.start + n));
}
});

cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var self__ = this;
var coll__$1 = this;
if(((n < (0))) || ((self__.end <= (self__.start + n)))){
return not_found;
} else {
return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(self__.v,(self__.start + n),not_found);
}
});

cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var self__ = this;
var coll__$1 = this;
var v_pos = (self__.start + n);
var G__14925 = self__.meta;
var G__14926 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.v,v_pos,val);
var G__14927 = self__.start;
var G__14928 = (function (){var x__3955__auto__ = self__.end;
var y__3956__auto__ = (v_pos + (1));
return ((x__3955__auto__ > y__3956__auto__) ? x__3955__auto__ : y__3956__auto__);
})();
var G__14929 = null;
return (cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5 ? cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5(G__14925,G__14926,G__14927,G__14928,G__14929) : cljs.core.build_subvec.call(null,G__14925,G__14926,G__14927,G__14928,G__14929));
});

cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.Subvec.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.Subvec(self__.meta,self__.v,self__.start,self__.end,self__.__hash));
});

cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (self__.end - self__.start);
});

cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(self__.v,(self__.end - (1)));
});

cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.start === self__.end)){
throw (new Error("Can't pop empty vector"));
} else {
var G__14930 = self__.meta;
var G__14931 = self__.v;
var G__14932 = self__.start;
var G__14933 = (self__.end - (1));
var G__14934 = null;
return (cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5 ? cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5(G__14930,G__14931,G__14932,G__14933,G__14934) : cljs.core.build_subvec.call(null,G__14930,G__14931,G__14932,G__14933,G__14934));
}
});

cljs.core.Subvec.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if(!((self__.start === self__.end))){
return (new cljs.core.RSeq(coll__$1,((self__.end - self__.start) - (1)),null));
} else {
return null;
}
});

cljs.core.Subvec.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4059__auto__ = self__.__hash;
if(!((h__4059__auto__ == null))){
return h__4059__auto__;
} else {
var h__4059__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__4059__auto____$1;

return h__4059__auto____$1;
}
});

cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,self__.meta);
});

cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2(coll__$1,f);
});

cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start__$1){
var self__ = this;
var coll__$1 = this;
return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$3(coll__$1,f,start__$1);
});

cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,key,val){
var self__ = this;
var coll__$1 = this;
if(typeof key === 'number'){
return cljs.core._assoc_n(coll__$1,key,val);
} else {
throw (new Error("Subvec's key for assoc must be a number."));
}
});

cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var subvec_seq = ((function (coll__$1){
return (function subvec_seq(i){
if((i === self__.end)){
return null;
} else {
return cljs.core.cons(cljs.core._nth.cljs$core$IFn$_invoke$arity$2(self__.v,i),(new cljs.core.LazySeq(null,((function (coll__$1){
return (function (){
return subvec_seq((i + (1)));
});})(coll__$1))
,null,null)));
}
});})(coll__$1))
;
return subvec_seq(self__.start);
});

cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
var G__14936 = meta__$1;
var G__14937 = self__.v;
var G__14938 = self__.start;
var G__14939 = self__.end;
var G__14940 = self__.__hash;
return (cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5 ? cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5(G__14936,G__14937,G__14938,G__14939,G__14940) : cljs.core.build_subvec.call(null,G__14936,G__14937,G__14938,G__14939,G__14940));
});

cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
var G__14941 = self__.meta;
var G__14942 = cljs.core._assoc_n(self__.v,self__.end,o);
var G__14943 = self__.start;
var G__14944 = (self__.end + (1));
var G__14945 = null;
return (cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5 ? cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5(G__14941,G__14942,G__14943,G__14944,G__14945) : cljs.core.build_subvec.call(null,G__14941,G__14942,G__14943,G__14944,G__14945));
});

cljs.core.Subvec.prototype.call = (function() {
var G__14946 = null;
var G__14946__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$IIndexed$_nth$arity$2(null,k);
});
var G__14946__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$IIndexed$_nth$arity$3(null,k,not_found);
});
G__14946 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__14946__2.call(this,self__,k);
case 3:
return G__14946__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14946.cljs$core$IFn$_invoke$arity$2 = G__14946__2;
G__14946.cljs$core$IFn$_invoke$arity$3 = G__14946__3;
return G__14946;
})()
;

cljs.core.Subvec.prototype.apply = (function (self__,args14924){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args14924)));
});

cljs.core.Subvec.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var coll = this;
return coll.cljs$core$IIndexed$_nth$arity$2(null,k);
});

cljs.core.Subvec.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var coll = this;
return coll.cljs$core$IIndexed$_nth$arity$3(null,k,not_found);
});

cljs.core.Subvec.cljs$lang$type = true;

cljs.core.Subvec.cljs$lang$ctorStr = "cljs.core/Subvec";

cljs.core.Subvec.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write(writer__4226__auto__,"cljs.core/Subvec");
});

cljs.core.__GT_Subvec = (function __GT_Subvec(meta,v,start,end,__hash){
return (new cljs.core.Subvec(meta,v,start,end,__hash));
});

(cljs.core.Subvec.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4616__auto__ = this;
return cljs.core.es6_iterator(this__4616__auto__);
}));
cljs.core.build_subvec = (function build_subvec(meta,v,start,end,__hash){
while(true){
if((v instanceof cljs.core.Subvec)){
var G__14947 = meta;
var G__14948 = v.v;
var G__14949 = (v.start + start);
var G__14950 = (v.start + end);
var G__14951 = __hash;
meta = G__14947;
v = G__14948;
start = G__14949;
end = G__14950;
__hash = G__14951;
continue;
} else {
var c = cljs.core.count(v);
if(((start < (0))) || ((end < (0))) || ((start > c)) || ((end > c))){
throw (new Error("Index out of bounds"));
} else {
}

return (new cljs.core.Subvec(meta,v,start,end,__hash));
}
break;
}
});
/**
* Returns a persistent vector of the items in vector from
* start (inclusive) to end (exclusive).  If end is not supplied,
* defaults to (count vector). This operation is O(1) and very fast, as
* the resulting vector shares structure with the original and no
* trimming is done.
*/
cljs.core.subvec = (function() {
var subvec = null;
var subvec__2 = (function (v,start){
return subvec.cljs$core$IFn$_invoke$arity$3(v,start,cljs.core.count(v));
});
var subvec__3 = (function (v,start,end){
return cljs.core.build_subvec(null,v,start,end,null);
});
subvec = function(v,start,end){
switch(arguments.length){
case 2:
return subvec__2.call(this,v,start);
case 3:
return subvec__3.call(this,v,start,end);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
subvec.cljs$core$IFn$_invoke$arity$2 = subvec__2;
subvec.cljs$core$IFn$_invoke$arity$3 = subvec__3;
return subvec;
})()
;
cljs.core.tv_ensure_editable = (function tv_ensure_editable(edit,node){
if((edit === node.edit)){
return node;
} else {
return (new cljs.core.VectorNode(edit,cljs.core.aclone(node.arr)));
}
});
cljs.core.tv_editable_root = (function tv_editable_root(node){
return (new cljs.core.VectorNode((function (){var obj14958 = {};
return obj14958;
})(),cljs.core.aclone(node.arr)));
});
cljs.core.tv_editable_tail = (function tv_editable_tail(tl){
var ret = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
cljs.core.array_copy(tl,(0),ret,(0),tl.length);

return ret;
});
cljs.core.tv_push_tail = (function tv_push_tail(tv,level,parent,tail_node){
var ret = cljs.core.tv_ensure_editable(tv.root.edit,parent);
var subidx = (((tv.cnt - (1)) >>> level) & (31));
cljs.core.pv_aset(ret,subidx,(((level === (5)))?tail_node:(function (){var child = cljs.core.pv_aget(ret,subidx);
if(!((child == null))){
return tv_push_tail(tv,(level - (5)),child,tail_node);
} else {
return cljs.core.new_path(tv.root.edit,(level - (5)),tail_node);
}
})()));

return ret;
});
cljs.core.tv_pop_tail = (function tv_pop_tail(tv,level,node){
var node__$1 = cljs.core.tv_ensure_editable(tv.root.edit,node);
var subidx = (((tv.cnt - (2)) >>> level) & (31));
if((level > (5))){
var new_child = tv_pop_tail(tv,(level - (5)),cljs.core.pv_aget(node__$1,subidx));
if(((new_child == null)) && ((subidx === (0)))){
return null;
} else {
cljs.core.pv_aset(node__$1,subidx,new_child);

return node__$1;
}
} else {
if((subidx === (0))){
return null;
} else {
cljs.core.pv_aset(node__$1,subidx,null);

return node__$1;

}
}
});
cljs.core.unchecked_editable_array_for = (function unchecked_editable_array_for(tv,i){
if((i >= cljs.core.tail_off(tv))){
return tv.tail;
} else {
var root = tv.root;
var node = root;
var level = tv.shift;
while(true){
if((level > (0))){
var G__14966 = cljs.core.tv_ensure_editable(root.edit,cljs.core.pv_aget(node,((i >>> level) & (31))));
var G__14967 = (level - (5));
node = G__14966;
level = G__14967;
continue;
} else {
return node.arr;
}
break;
}
}
});

/**
* @constructor
*/
cljs.core.TransientVector = (function (cnt,shift,root,tail){
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.cljs$lang$protocol_mask$partition0$ = 275;
this.cljs$lang$protocol_mask$partition1$ = 88;
})
cljs.core.TransientVector.prototype.call = (function() {
var G__14971 = null;
var G__14971__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__14971__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__14971 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__14971__2.call(this,self__,k);
case 3:
return G__14971__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14971.cljs$core$IFn$_invoke$arity$2 = G__14971__2;
G__14971.cljs$core$IFn$_invoke$arity$3 = G__14971__3;
return G__14971;
})()
;

cljs.core.TransientVector.prototype.apply = (function (self__,args14968){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args14968)));
});

cljs.core.TransientVector.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});

cljs.core.TransientVector.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});

cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,k,null);
});

cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
var coll__$1 = this;
if(typeof k === 'number'){
return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(coll__$1,k,not_found);
} else {
return not_found;
}
});

cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var self__ = this;
var coll__$1 = this;
if(self__.root.edit){
return (cljs.core.array_for(coll__$1,n)[(n & (31))]);
} else {
throw (new Error("nth after persistent!"));
}
});

cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var self__ = this;
var coll__$1 = this;
if((((0) <= n)) && ((n < self__.cnt))){
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(coll__$1,n);
} else {
return not_found;
}
});

cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if(self__.root.edit){
return self__.cnt;
} else {
throw (new Error("count after persistent!"));
}
});

cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){
var self__ = this;
var tcoll__$1 = this;
if(self__.root.edit){
if((((0) <= n)) && ((n < self__.cnt))){
if((cljs.core.tail_off(tcoll__$1) <= n)){
(self__.tail[(n & (31))] = val);

return tcoll__$1;
} else {
var new_root = ((function (tcoll__$1){
return (function go(level,node){
var node__$1 = cljs.core.tv_ensure_editable(self__.root.edit,node);
if((level === (0))){
cljs.core.pv_aset(node__$1,(n & (31)),val);

return node__$1;
} else {
var subidx = ((n >>> level) & (31));
cljs.core.pv_aset(node__$1,subidx,go((level - (5)),cljs.core.pv_aget(node__$1,subidx)));

return node__$1;
}
});})(tcoll__$1))
.call(null,self__.shift,self__.root);
self__.root = new_root;

return tcoll__$1;
}
} else {
if((n === self__.cnt)){
return cljs.core._conj_BANG_(tcoll__$1,val);
} else {
throw (new Error([cljs.core.str("Index "),cljs.core.str(n),cljs.core.str(" out of bounds for TransientVector of length"),cljs.core.str(self__.cnt)].join('')));

}
}
} else {
throw (new Error("assoc! after persistent!"));
}
});

cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_pop_BANG_$arity$1 = (function (tcoll){
var self__ = this;
var tcoll__$1 = this;
if(self__.root.edit){
if((self__.cnt === (0))){
throw (new Error("Can't pop empty vector"));
} else {
if(((1) === self__.cnt)){
self__.cnt = (0);

return tcoll__$1;
} else {
if((((self__.cnt - (1)) & (31)) > (0))){
self__.cnt = (self__.cnt - (1));

return tcoll__$1;
} else {
var new_tail = cljs.core.unchecked_editable_array_for(tcoll__$1,(self__.cnt - (2)));
var new_root = (function (){var nr = cljs.core.tv_pop_tail(tcoll__$1,self__.shift,self__.root);
if(!((nr == null))){
return nr;
} else {
return (new cljs.core.VectorNode(self__.root.edit,[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]));
}
})();
if((((5) < self__.shift)) && ((cljs.core.pv_aget(new_root,(1)) == null))){
var new_root__$1 = cljs.core.tv_ensure_editable(self__.root.edit,cljs.core.pv_aget(new_root,(0)));
self__.root = new_root__$1;

self__.shift = (self__.shift - (5));

self__.cnt = (self__.cnt - (1));

self__.tail = new_tail;

return tcoll__$1;
} else {
self__.root = new_root;

self__.cnt = (self__.cnt - (1));

self__.tail = new_tail;

return tcoll__$1;
}

}
}
}
} else {
throw (new Error("pop! after persistent!"));
}
});

cljs.core.TransientVector.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var self__ = this;
var tcoll__$1 = this;
if(typeof key === 'number'){
return cljs.core._assoc_n_BANG_(tcoll__$1,key,val);
} else {
throw (new Error("TransientVector's key for assoc! must be a number."));
}
});

cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var self__ = this;
var tcoll__$1 = this;
if(self__.root.edit){
if(((self__.cnt - cljs.core.tail_off(tcoll__$1)) < (32))){
(self__.tail[(self__.cnt & (31))] = o);

self__.cnt = (self__.cnt + (1));

return tcoll__$1;
} else {
var tail_node = (new cljs.core.VectorNode(self__.root.edit,self__.tail));
var new_tail = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(new_tail[(0)] = o);

self__.tail = new_tail;

if(((self__.cnt >>> (5)) > ((1) << self__.shift))){
var new_root_array = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_shift = (self__.shift + (5));
(new_root_array[(0)] = self__.root);

(new_root_array[(1)] = cljs.core.new_path(self__.root.edit,self__.shift,tail_node));

self__.root = (new cljs.core.VectorNode(self__.root.edit,new_root_array));

self__.shift = new_shift;

self__.cnt = (self__.cnt + (1));

return tcoll__$1;
} else {
var new_root = cljs.core.tv_push_tail(tcoll__$1,self__.shift,self__.root,tail_node);
self__.root = new_root;

self__.cnt = (self__.cnt + (1));

return tcoll__$1;
}
}
} else {
throw (new Error("conj! after persistent!"));
}
});

cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var self__ = this;
var tcoll__$1 = this;
if(self__.root.edit){
self__.root.edit = null;

var len = (self__.cnt - cljs.core.tail_off(tcoll__$1));
var trimmed_tail = (new Array(len));
cljs.core.array_copy(self__.tail,(0),trimmed_tail,(0),len);

return (new cljs.core.PersistentVector(null,self__.cnt,self__.shift,self__.root,trimmed_tail,null));
} else {
throw (new Error("persistent! called twice"));
}
});

cljs.core.TransientVector.cljs$lang$type = true;

cljs.core.TransientVector.cljs$lang$ctorStr = "cljs.core/TransientVector";

cljs.core.TransientVector.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write(writer__4226__auto__,"cljs.core/TransientVector");
});

cljs.core.__GT_TransientVector = (function __GT_TransientVector(cnt,shift,root,tail){
return (new cljs.core.TransientVector(cnt,shift,root,tail));
});


/**
* @constructor
*/
cljs.core.PersistentQueueSeq = (function (meta,front,rear,__hash){
this.meta = meta;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.PersistentQueueSeq.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.PersistentQueueSeq.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4059__auto__ = self__.__hash;
if(!((h__4059__auto__ == null))){
return h__4059__auto__;
} else {
var h__4059__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__4059__auto____$1;

return h__4059__auto____$1;
}
});

cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});

cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.first(self__.front);
});

cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var temp__4124__auto__ = cljs.core.next(self__.front);
if(temp__4124__auto__){
var f1 = temp__4124__auto__;
return (new cljs.core.PersistentQueueSeq(self__.meta,f1,self__.rear,null));
} else {
if((self__.rear == null)){
return cljs.core._empty(coll__$1);
} else {
return (new cljs.core.PersistentQueueSeq(self__.meta,self__.rear,null,null));
}
}
});

cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return coll__$1;
});

cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentQueueSeq(meta__$1,self__.front,self__.rear,self__.__hash));
});

cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return cljs.core.cons(o,coll__$1);
});

cljs.core.PersistentQueueSeq.cljs$lang$type = true;

cljs.core.PersistentQueueSeq.cljs$lang$ctorStr = "cljs.core/PersistentQueueSeq";

cljs.core.PersistentQueueSeq.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write(writer__4226__auto__,"cljs.core/PersistentQueueSeq");
});

cljs.core.__GT_PersistentQueueSeq = (function __GT_PersistentQueueSeq(meta,front,rear,__hash){
return (new cljs.core.PersistentQueueSeq(meta,front,rear,__hash));
});

(cljs.core.PersistentQueueSeq.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4616__auto__ = this;
return cljs.core.es6_iterator(this__4616__auto__);
}));

/**
* @constructor
*/
cljs.core.PersistentQueue = (function (meta,count,front,rear,__hash){
this.meta = meta;
this.count = count;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 31858766;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.PersistentQueue.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.PersistentQueue.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.PersistentQueue.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentQueue(self__.meta,self__.count,self__.front,self__.rear,self__.__hash));
});

cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.count;
});

cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.first(self__.front);
});

cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if(cljs.core.truth_(self__.front)){
var temp__4124__auto__ = cljs.core.next(self__.front);
if(temp__4124__auto__){
var f1 = temp__4124__auto__;
return (new cljs.core.PersistentQueue(self__.meta,(self__.count - (1)),f1,self__.rear,null));
} else {
return (new cljs.core.PersistentQueue(self__.meta,(self__.count - (1)),cljs.core.seq(self__.rear),cljs.core.PersistentVector.EMPTY,null));
}
} else {
return coll__$1;
}
});

cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4059__auto__ = self__.__hash;
if(!((h__4059__auto__ == null))){
return h__4059__auto__;
} else {
var h__4059__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__4059__auto____$1;

return h__4059__auto____$1;
}
});

cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.PersistentQueue.EMPTY,self__.meta);
});

cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.first(self__.front);
});

cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.rest(cljs.core.seq(coll__$1));
});

cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var rear__$1 = cljs.core.seq(self__.rear);
if(cljs.core.truth_((function (){var or__3638__auto__ = self__.front;
if(cljs.core.truth_(or__3638__auto__)){
return or__3638__auto__;
} else {
return rear__$1;
}
})())){
return (new cljs.core.PersistentQueueSeq(null,self__.front,cljs.core.seq(rear__$1),null));
} else {
return null;
}
});

cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentQueue(meta__$1,self__.count,self__.front,self__.rear,self__.__hash));
});

cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
if(cljs.core.truth_(self__.front)){
return (new cljs.core.PersistentQueue(self__.meta,(self__.count + (1)),self__.front,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__3638__auto__ = self__.rear;
if(cljs.core.truth_(or__3638__auto__)){
return or__3638__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),o),null));
} else {
return (new cljs.core.PersistentQueue(self__.meta,(self__.count + (1)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.front,o),cljs.core.PersistentVector.EMPTY,null));
}
});

cljs.core.PersistentQueue.cljs$lang$type = true;

cljs.core.PersistentQueue.cljs$lang$ctorStr = "cljs.core/PersistentQueue";

cljs.core.PersistentQueue.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write(writer__4226__auto__,"cljs.core/PersistentQueue");
});

cljs.core.__GT_PersistentQueue = (function __GT_PersistentQueue(meta,count,front,rear,__hash){
return (new cljs.core.PersistentQueue(meta,count,front,rear,__hash));
});

cljs.core.PersistentQueue.EMPTY = (new cljs.core.PersistentQueue(null,(0),null,cljs.core.PersistentVector.EMPTY,(0)));
(cljs.core.PersistentQueue.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4616__auto__ = this;
return cljs.core.es6_iterator(this__4616__auto__);
}));

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2097152;
})
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return false;
});

cljs.core.NeverEquiv.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.NeverEquiv.cljs$lang$type = true;

cljs.core.NeverEquiv.cljs$lang$ctorStr = "cljs.core/NeverEquiv";

cljs.core.NeverEquiv.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write(writer__4226__auto__,"cljs.core/NeverEquiv");
});

cljs.core.__GT_NeverEquiv = (function __GT_NeverEquiv(){
return (new cljs.core.NeverEquiv());
});

cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$(((cljs.core.map_QMARK_(y))?(((cljs.core.count(x) === cljs.core.count(y)))?cljs.core.every_QMARK_(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (xkv){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(y,cljs.core.first(xkv),cljs.core.never_equiv),cljs.core.second(xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len = array.length;
var i = (0);
while(true){
if((i < len)){
if((k === (array[i]))){
return i;
} else {
var G__14972 = (i + incr);
i = G__14972;
continue;
}
} else {
return null;
}
break;
}
});
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__$1 = cljs.core.hash(a);
var b__$1 = cljs.core.hash(b);
if((a__$1 < b__$1)){
return (-1);
} else {
if((a__$1 > b__$1)){
return (1);
} else {
return (0);

}
}
});
cljs.core.obj_map__GT_hash_map = (function obj_map__GT_hash_map(m,k,v){
var ks = m.keys;
var len = ks.length;
var so = m.strobj;
var mm = cljs.core.meta(m);
var i = (0);
var out = cljs.core.transient$(cljs.core.PersistentHashMap.EMPTY);
while(true){
if((i < len)){
var k__$1 = (ks[i]);
var G__14973 = (i + (1));
var G__14974 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out,k__$1,(so[k__$1]));
i = G__14973;
out = G__14974;
continue;
} else {
return cljs.core.with_meta(cljs.core.persistent_BANG_(cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out,k,v)),mm);
}
break;
}
});
cljs.core.obj_clone = (function obj_clone(obj,ks){
var new_obj = (function (){var obj14978 = {};
return obj14978;
})();
var l = ks.length;
var i_14979 = (0);
while(true){
if((i_14979 < l)){
var k_14980 = (ks[i_14979]);
(new_obj[k_14980] = (obj[k_14980]));

var G__14981 = (i_14979 + (1));
i_14979 = G__14981;
continue;
} else {
}
break;
}

return new_obj;
});

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj,update_count,__hash){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
this.update_count = update_count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 16123663;
this.cljs$lang$protocol_mask$partition1$ = 4;
})
cljs.core.ObjMap.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.ObjMap.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,k,null);
});

cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
var coll__$1 = this;
if(cljs.core.truth_((function (){var and__3626__auto__ = (function (){var G__14985 = k;
return goog.isString(G__14985);
})();
if(cljs.core.truth_(and__3626__auto__)){
return !((cljs.core.scan_array((1),k,self__.keys) == null));
} else {
return and__3626__auto__;
}
})())){
return (self__.strobj[k]);
} else {
return not_found;
}
});

cljs.core.ObjMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var self__ = this;
var coll__$1 = this;
var len = self__.keys.length;
var keys__$1 = self__.keys.sort(cljs.core.obj_map_compare_keys);
var init__$1 = init;
while(true){
if(cljs.core.seq(keys__$1)){
var k = cljs.core.first(keys__$1);
var init__$2 = (function (){var G__14986 = init__$1;
var G__14987 = k;
var G__14988 = (self__.strobj[k]);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__14986,G__14987,G__14988) : f.call(null,G__14986,G__14987,G__14988));
})();
if(cljs.core.reduced_QMARK_(init__$2)){
var G__14989 = init__$2;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14989) : cljs.core.deref.call(null,G__14989));
} else {
var G__14995 = cljs.core.rest(keys__$1);
var G__14996 = init__$2;
keys__$1 = G__14995;
init__$1 = G__14996;
continue;
}
} else {
return init__$1;
}
break;
}
});

cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.keys.length;
});

cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4059__auto__ = self__.__hash;
if(!((h__4059__auto__ == null))){
return h__4059__auto__;
} else {
var h__4059__auto____$1 = cljs.core.hash_unordered_coll(coll__$1);
self__.__hash = h__4059__auto____$1;

return h__4059__auto____$1;
}
});

cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_map(coll__$1,other);
});

cljs.core.ObjMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.transient$(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashMap.EMPTY,coll__$1));
});

cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.ObjMap.EMPTY,self__.meta);
});

cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
if(cljs.core.truth_((function (){var and__3626__auto__ = (function (){var G__14991 = k;
return goog.isString(G__14991);
})();
if(cljs.core.truth_(and__3626__auto__)){
return !((cljs.core.scan_array((1),k,self__.keys) == null));
} else {
return and__3626__auto__;
}
})())){
var new_keys = cljs.core.aclone(self__.keys);
var new_strobj = cljs.core.obj_clone(self__.strobj,self__.keys);
new_keys.splice(cljs.core.scan_array((1),k,new_keys),(1));

delete new_strobj[k];

return (new cljs.core.ObjMap(self__.meta,new_keys,new_strobj,(self__.update_count + (1)),null));
} else {
return coll__$1;
}
});

cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var self__ = this;
var coll__$1 = this;
if(cljs.core.truth_((function (){var G__14992 = k;
return goog.isString(G__14992);
})())){
if(((self__.update_count > cljs.core.ObjMap.HASHMAP_THRESHOLD)) || ((self__.keys.length >= cljs.core.ObjMap.HASHMAP_THRESHOLD))){
return cljs.core.obj_map__GT_hash_map(coll__$1,k,v);
} else {
if(!((cljs.core.scan_array((1),k,self__.keys) == null))){
var new_strobj = cljs.core.obj_clone(self__.strobj,self__.keys);
(new_strobj[k] = v);

return (new cljs.core.ObjMap(self__.meta,self__.keys,new_strobj,(self__.update_count + (1)),null));
} else {
var new_strobj = cljs.core.obj_clone(self__.strobj,self__.keys);
var new_keys = cljs.core.aclone(self__.keys);
(new_strobj[k] = v);

new_keys.push(k);

return (new cljs.core.ObjMap(self__.meta,new_keys,new_strobj,(self__.update_count + (1)),null));
}
}
} else {
return cljs.core.obj_map__GT_hash_map(coll__$1,k,v);
}
});

cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
if(cljs.core.truth_((function (){var and__3626__auto__ = (function (){var G__14994 = k;
return goog.isString(G__14994);
})();
if(cljs.core.truth_(and__3626__auto__)){
return !((cljs.core.scan_array((1),k,self__.keys) == null));
} else {
return and__3626__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.keys.length > (0))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (coll__$1){
return (function (p1__14982_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__14982_SHARP_,(self__.strobj[p1__14982_SHARP_])],null));
});})(coll__$1))
,self__.keys.sort(cljs.core.obj_map_compare_keys));
} else {
return null;
}
});

cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.ObjMap(meta__$1,self__.keys,self__.strobj,self__.update_count,self__.__hash));
});

cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var self__ = this;
var coll__$1 = this;
if(cljs.core.vector_QMARK_(entry)){
return cljs.core._assoc(coll__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,coll__$1,entry);
}
});

cljs.core.ObjMap.prototype.call = (function() {
var G__14997 = null;
var G__14997__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__14997__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__14997 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__14997__2.call(this,self__,k);
case 3:
return G__14997__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14997.cljs$core$IFn$_invoke$arity$2 = G__14997__2;
G__14997.cljs$core$IFn$_invoke$arity$3 = G__14997__3;
return G__14997;
})()
;

cljs.core.ObjMap.prototype.apply = (function (self__,args14983){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args14983)));
});

cljs.core.ObjMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});

cljs.core.ObjMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});

cljs.core.ObjMap.cljs$lang$type = true;

cljs.core.ObjMap.cljs$lang$ctorStr = "cljs.core/ObjMap";

cljs.core.ObjMap.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write(writer__4226__auto__,"cljs.core/ObjMap");
});

cljs.core.__GT_ObjMap = (function __GT_ObjMap(meta,keys,strobj,update_count,__hash){
return (new cljs.core.ObjMap(meta,keys,strobj,update_count,__hash));
});

cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,[],(function (){var obj14999 = {};
return obj14999;
})(),(0),(0)));
cljs.core.ObjMap.HASHMAP_THRESHOLD = (8);
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj,(0),null));
});

/**
* @constructor
*/
cljs.core.ES6EntriesIterator = (function (s){
this.s = s;
})
cljs.core.ES6EntriesIterator.prototype.next = (function (){
var self__ = this;
var _ = this;
if(!((self__.s == null))){
var vec__15000 = cljs.core.first(self__.s);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15000,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15000,(1),null);
self__.s = cljs.core.next(self__.s);

return {"done": false, "value": [k,v]};
} else {
return {"done": true, "value": null};
}
});

cljs.core.ES6EntriesIterator.cljs$lang$type = true;

cljs.core.ES6EntriesIterator.cljs$lang$ctorStr = "cljs.core/ES6EntriesIterator";

cljs.core.ES6EntriesIterator.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write(writer__4226__auto__,"cljs.core/ES6EntriesIterator");
});

cljs.core.__GT_ES6EntriesIterator = (function __GT_ES6EntriesIterator(s){
return (new cljs.core.ES6EntriesIterator(s));
});

cljs.core.es6_entries_iterator = (function es6_entries_iterator(coll){
return (new cljs.core.ES6EntriesIterator(cljs.core.seq(coll)));
});

/**
* @constructor
*/
cljs.core.ES6SetEntriesIterator = (function (s){
this.s = s;
})
cljs.core.ES6SetEntriesIterator.prototype.next = (function (){
var self__ = this;
var _ = this;
if(!((self__.s == null))){
var x = cljs.core.first(self__.s);
self__.s = cljs.core.next(self__.s);

return {"done": false, "value": [x,x]};
} else {
return {"done": true, "value": null};
}
});

cljs.core.ES6SetEntriesIterator.cljs$lang$type = true;

cljs.core.ES6SetEntriesIterator.cljs$lang$ctorStr = "cljs.core/ES6SetEntriesIterator";

cljs.core.ES6SetEntriesIterator.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write(writer__4226__auto__,"cljs.core/ES6SetEntriesIterator");
});

cljs.core.__GT_ES6SetEntriesIterator = (function __GT_ES6SetEntriesIterator(s){
return (new cljs.core.ES6SetEntriesIterator(s));
});

cljs.core.es6_set_entries_iterator = (function es6_set_entries_iterator(coll){
return (new cljs.core.ES6SetEntriesIterator(cljs.core.seq(coll)));
});
cljs.core.array_map_index_of_nil_QMARK_ = (function array_map_index_of_nil_QMARK_(arr,m,k){
var len = arr.length;
var i = (0);
while(true){
if((len <= i)){
return (-1);
} else {
if(((arr[i]) == null)){
return i;
} else {
var G__15001 = (i + (2));
i = G__15001;
continue;

}
}
break;
}
});
cljs.core.array_map_index_of_keyword_QMARK_ = (function array_map_index_of_keyword_QMARK_(arr,m,k){
var len = arr.length;
var kstr = k.fqn;
var i = (0);
while(true){
if((len <= i)){
return (-1);
} else {
if((function (){var k_SINGLEQUOTE_ = (arr[i]);
return ((k_SINGLEQUOTE_ instanceof cljs.core.Keyword)) && ((kstr === k_SINGLEQUOTE_.fqn));
})()){
return i;
} else {
var G__15002 = (i + (2));
i = G__15002;
continue;

}
}
break;
}
});
cljs.core.array_map_index_of_symbol_QMARK_ = (function array_map_index_of_symbol_QMARK_(arr,m,k){
var len = arr.length;
var kstr = k.str;
var i = (0);
while(true){
if((len <= i)){
return (-1);
} else {
if((function (){var k_SINGLEQUOTE_ = (arr[i]);
return ((k_SINGLEQUOTE_ instanceof cljs.core.Symbol)) && ((kstr === k_SINGLEQUOTE_.str));
})()){
return i;
} else {
var G__15003 = (i + (2));
i = G__15003;
continue;

}
}
break;
}
});
cljs.core.array_map_index_of_identical_QMARK_ = (function array_map_index_of_identical_QMARK_(arr,m,k){
var len = arr.length;
var i = (0);
while(true){
if((len <= i)){
return (-1);
} else {
if((k === (arr[i]))){
return i;
} else {
var G__15004 = (i + (2));
i = G__15004;
continue;

}
}
break;
}
});
cljs.core.array_map_index_of_equiv_QMARK_ = (function array_map_index_of_equiv_QMARK_(arr,m,k){
var len = arr.length;
var i = (0);
while(true){
if((len <= i)){
return (-1);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,(arr[i]))){
return i;
} else {
var G__15005 = (i + (2));
i = G__15005;
continue;

}
}
break;
}
});
cljs.core.array_map_index_of = (function array_map_index_of(m,k){
var arr = m.arr;
if((k instanceof cljs.core.Keyword)){
return cljs.core.array_map_index_of_keyword_QMARK_(arr,m,k);
} else {
if(cljs.core.truth_((function (){var or__3638__auto__ = (function (){var G__15009 = k;
return goog.isString(G__15009);
})();
if(cljs.core.truth_(or__3638__auto__)){
return or__3638__auto__;
} else {
return typeof k === 'number';
}
})())){
return cljs.core.array_map_index_of_identical_QMARK_(arr,m,k);
} else {
if((k instanceof cljs.core.Symbol)){
return cljs.core.array_map_index_of_symbol_QMARK_(arr,m,k);
} else {
if((k == null)){
return cljs.core.array_map_index_of_nil_QMARK_(arr,m,k);
} else {
return cljs.core.array_map_index_of_equiv_QMARK_(arr,m,k);

}
}
}
}
});
cljs.core.array_map_extend_kv = (function array_map_extend_kv(m,k,v){
var arr = m.arr;
var l = arr.length;
var narr = (new Array((l + (2))));
var i_15010 = (0);
while(true){
if((i_15010 < l)){
(narr[i_15010] = (arr[i_15010]));

var G__15011 = (i_15010 + (1));
i_15010 = G__15011;
continue;
} else {
}
break;
}

(narr[l] = k);

(narr[(l + (1))] = v);

return narr;
});

/**
* @constructor
*/
cljs.core.PersistentArrayMapSeq = (function (arr,i,_meta){
this.arr = arr;
this.i = i;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32374990;
})
cljs.core.PersistentArrayMapSeq.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.PersistentArrayMapSeq.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__._meta;
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.i < (self__.arr.length - (2)))){
return (new cljs.core.PersistentArrayMapSeq(self__.arr,(self__.i + (2)),self__._meta));
} else {
return null;
}
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return ((self__.arr.length - self__.i) / (2));
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.hash_ordered_coll(coll__$1);
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,self__._meta);
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.arr[self__.i]),(self__.arr[(self__.i + (1))])], null);
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.i < (self__.arr.length - (2)))){
return (new cljs.core.PersistentArrayMapSeq(self__.arr,(self__.i + (2)),self__._meta));
} else {
return cljs.core.List.EMPTY;
}
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return coll__$1;
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentArrayMapSeq(self__.arr,self__.i,new_meta));
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return cljs.core.cons(o,coll__$1);
});

cljs.core.PersistentArrayMapSeq.cljs$lang$type = true;

cljs.core.PersistentArrayMapSeq.cljs$lang$ctorStr = "cljs.core/PersistentArrayMapSeq";

cljs.core.PersistentArrayMapSeq.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write(writer__4226__auto__,"cljs.core/PersistentArrayMapSeq");
});

cljs.core.__GT_PersistentArrayMapSeq = (function __GT_PersistentArrayMapSeq(arr,i,_meta){
return (new cljs.core.PersistentArrayMapSeq(arr,i,_meta));
});

(cljs.core.PersistentArrayMapSeq.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4616__auto__ = this;
return cljs.core.es6_iterator(this__4616__auto__);
}));
cljs.core.persistent_array_map_seq = (function persistent_array_map_seq(arr,i,_meta){
if((i <= (arr.length - (2)))){
return (new cljs.core.PersistentArrayMapSeq(arr,i,_meta));
} else {
return null;
}
});


/**
* @constructor
*/
cljs.core.PersistentArrayMapIterator = (function (arr,i,cnt){
this.arr = arr;
this.i = i;
this.cnt = cnt;
})
cljs.core.PersistentArrayMapIterator.prototype.hasNext = (function (){
var self__ = this;
var _ = this;
return (self__.i < self__.cnt);
});

cljs.core.PersistentArrayMapIterator.prototype.next = (function (){
var self__ = this;
var _ = this;
var ret = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.arr[self__.i]),(self__.arr[(self__.i + (1))])], null);
self__.i = (self__.i + (2));

return ret;
});

cljs.core.PersistentArrayMapIterator.cljs$lang$type = true;

cljs.core.PersistentArrayMapIterator.cljs$lang$ctorStr = "cljs.core/PersistentArrayMapIterator";

cljs.core.PersistentArrayMapIterator.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write(writer__4226__auto__,"cljs.core/PersistentArrayMapIterator");
});

cljs.core.__GT_PersistentArrayMapIterator = (function __GT_PersistentArrayMapIterator(arr,i,cnt){
return (new cljs.core.PersistentArrayMapIterator(arr,i,cnt));
});


/**
* @constructor
*/
cljs.core.PersistentArrayMap = (function (meta,cnt,arr,__hash){
this.meta = meta;
this.cnt = cnt;
this.arr = arr;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 16647951;
this.cljs$lang$protocol_mask$partition1$ = 8196;
})
cljs.core.PersistentArrayMap.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.PersistentArrayMap.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.PersistentArrayMap.prototype.keys = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_iterator((function (){var G__15013 = coll;
return (cljs.core.keys.cljs$core$IFn$_invoke$arity$1 ? cljs.core.keys.cljs$core$IFn$_invoke$arity$1(G__15013) : cljs.core.keys.call(null,G__15013));
})());
});

cljs.core.PersistentArrayMap.prototype.entries = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_entries_iterator(cljs.core.seq(coll));
});

cljs.core.PersistentArrayMap.prototype.values = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_iterator((function (){var G__15014 = coll;
return (cljs.core.vals.cljs$core$IFn$_invoke$arity$1 ? cljs.core.vals.cljs$core$IFn$_invoke$arity$1(G__15014) : cljs.core.vals.call(null,G__15014));
})());
});

cljs.core.PersistentArrayMap.prototype.has = (function (k){
var self__ = this;
var coll = this;
return cljs.core.contains_QMARK_(coll,k);
});

cljs.core.PersistentArrayMap.prototype.get = (function (k){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});

cljs.core.PersistentArrayMap.prototype.forEach = (function (f){
var self__ = this;
var coll = this;
var seq__15015 = cljs.core.seq(coll);
var chunk__15016 = null;
var count__15017 = (0);
var i__15018 = (0);
while(true){
if((i__15018 < count__15017)){
var vec__15019 = chunk__15016.cljs$core$IIndexed$_nth$arity$2(null,i__15018);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15019,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15019,(1),null);
var G__15020_15033 = v;
var G__15021_15034 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__15020_15033,G__15021_15034) : f.call(null,G__15020_15033,G__15021_15034));

var G__15035 = seq__15015;
var G__15036 = chunk__15016;
var G__15037 = count__15017;
var G__15038 = (i__15018 + (1));
seq__15015 = G__15035;
chunk__15016 = G__15036;
count__15017 = G__15037;
i__15018 = G__15038;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__15015);
if(temp__4126__auto__){
var seq__15015__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15015__$1)){
var c__4425__auto__ = cljs.core.chunk_first(seq__15015__$1);
var G__15039 = cljs.core.chunk_rest(seq__15015__$1);
var G__15040 = c__4425__auto__;
var G__15041 = cljs.core.count(c__4425__auto__);
var G__15042 = (0);
seq__15015 = G__15039;
chunk__15016 = G__15040;
count__15017 = G__15041;
i__15018 = G__15042;
continue;
} else {
var vec__15022 = cljs.core.first(seq__15015__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15022,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15022,(1),null);
var G__15023_15043 = v;
var G__15024_15044 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__15023_15043,G__15024_15044) : f.call(null,G__15023_15043,G__15024_15044));

var G__15045 = cljs.core.next(seq__15015__$1);
var G__15046 = null;
var G__15047 = (0);
var G__15048 = (0);
seq__15015 = G__15045;
chunk__15016 = G__15046;
count__15017 = G__15047;
i__15018 = G__15048;
continue;
}
} else {
return null;
}
}
break;
}
});

cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,k,null);
});

cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
var coll__$1 = this;
var idx = cljs.core.array_map_index_of(coll__$1,k);
if((idx === (-1))){
return not_found;
} else {
return (self__.arr[(idx + (1))]);
}
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var self__ = this;
var coll__$1 = this;
var len = self__.arr.length;
var i = (0);
var init__$1 = init;
while(true){
if((i < len)){
var init__$2 = (function (){var G__15025 = init__$1;
var G__15026 = (self__.arr[i]);
var G__15027 = (self__.arr[(i + (1))]);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__15025,G__15026,G__15027) : f.call(null,G__15025,G__15026,G__15027));
})();
if(cljs.core.reduced_QMARK_(init__$2)){
var G__15028 = init__$2;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15028) : cljs.core.deref.call(null,G__15028));
} else {
var G__15049 = (i + (2));
var G__15050 = init__$2;
i = G__15049;
init__$1 = G__15050;
continue;
}
} else {
return init__$1;
}
break;
}
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IIterable$ = true;

cljs.core.PersistentArrayMap.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.PersistentArrayMapIterator(self__.arr,(0),(self__.cnt * (2))));
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.PersistentArrayMap.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.PersistentArrayMap(self__.meta,self__.cnt,self__.arr,self__.__hash));
});

cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.cnt;
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4059__auto__ = self__.__hash;
if(!((h__4059__auto__ == null))){
return h__4059__auto__;
} else {
var h__4059__auto____$1 = cljs.core.hash_unordered_coll(coll__$1);
self__.__hash = h__4059__auto____$1;

return h__4059__auto____$1;
}
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
if((function (){var G__15029 = other;
if(G__15029){
var bit__4312__auto__ = (G__15029.cljs$lang$protocol_mask$partition0$ & (1024));
if((bit__4312__auto__) || (G__15029.cljs$core$IMap$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
var alen = self__.arr.length;
var other__$1 = other;
if((self__.cnt === other__$1.cljs$core$ICounted$_count$arity$1(null))){
var i = (0);
while(true){
if((i < alen)){
var v = other__$1.cljs$core$ILookup$_lookup$arity$3(null,(self__.arr[i]),cljs.core.lookup_sentinel);
if(!((v === cljs.core.lookup_sentinel))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((self__.arr[(i + (1))]),v)){
var G__15051 = (i + (2));
i = G__15051;
continue;
} else {
return false;
}
} else {
return false;
}
} else {
return true;
}
break;
}
} else {
return false;
}
} else {
return cljs.core.equiv_map(coll__$1,other);
}
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.TransientArrayMap((function (){var obj15031 = {};
return obj15031;
})(),self__.arr.length,cljs.core.aclone(self__.arr)));
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core._with_meta(cljs.core.PersistentArrayMap.EMPTY,self__.meta);
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
var idx = cljs.core.array_map_index_of(coll__$1,k);
if((idx >= (0))){
var len = self__.arr.length;
var new_len = (len - (2));
if((new_len === (0))){
return cljs.core._empty(coll__$1);
} else {
var new_arr = (new Array(new_len));
var s = (0);
var d = (0);
while(true){
if((s >= len)){
return (new cljs.core.PersistentArrayMap(self__.meta,(self__.cnt - (1)),new_arr,null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,(self__.arr[s]))){
var G__15052 = (s + (2));
var G__15053 = d;
s = G__15052;
d = G__15053;
continue;
} else {
(new_arr[d] = (self__.arr[s]));

(new_arr[(d + (1))] = (self__.arr[(s + (1))]));

var G__15054 = (s + (2));
var G__15055 = (d + (2));
s = G__15054;
d = G__15055;
continue;

}
}
break;
}
}
} else {
return coll__$1;
}
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var self__ = this;
var coll__$1 = this;
var idx = cljs.core.array_map_index_of(coll__$1,k);
if((idx === (-1))){
if((self__.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)){
var arr__$1 = cljs.core.array_map_extend_kv(coll__$1,k,v);
return (new cljs.core.PersistentArrayMap(self__.meta,(self__.cnt + (1)),arr__$1,null));
} else {
return cljs.core._with_meta(cljs.core._assoc(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashMap.EMPTY,coll__$1),k,v),self__.meta);
}
} else {
if((v === (self__.arr[(idx + (1))]))){
return coll__$1;
} else {
var arr__$1 = (function (){var G__15032 = cljs.core.aclone(self__.arr);
(G__15032[(idx + (1))] = v);

return G__15032;
})();
return (new cljs.core.PersistentArrayMap(self__.meta,self__.cnt,arr__$1,null));

}
}
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
return !((cljs.core.array_map_index_of(coll__$1,k) === (-1)));
});

cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.persistent_array_map_seq(self__.arr,(0),null);
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentArrayMap(meta__$1,self__.cnt,self__.arr,self__.__hash));
});

cljs.core.PersistentArrayMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var self__ = this;
var coll__$1 = this;
if(cljs.core.vector_QMARK_(entry)){
return cljs.core._assoc(coll__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(1)));
} else {
var ret = coll__$1;
var es = cljs.core.seq(entry);
while(true){
if((es == null)){
return ret;
} else {
var e = cljs.core.first(es);
if(cljs.core.vector_QMARK_(e)){
var G__15056 = cljs.core._assoc(ret,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(e,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(e,(1)));
var G__15057 = cljs.core.next(es);
ret = G__15056;
es = G__15057;
continue;
} else {
throw (new Error("conj on a map takes map entries or seqables of map entries"));
}
}
break;
}
}
});

cljs.core.PersistentArrayMap.prototype.call = (function() {
var G__15058 = null;
var G__15058__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__15058__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__15058 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__15058__2.call(this,self__,k);
case 3:
return G__15058__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15058.cljs$core$IFn$_invoke$arity$2 = G__15058__2;
G__15058.cljs$core$IFn$_invoke$arity$3 = G__15058__3;
return G__15058;
})()
;

cljs.core.PersistentArrayMap.prototype.apply = (function (self__,args15012){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args15012)));
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});

cljs.core.PersistentArrayMap.cljs$lang$type = true;

cljs.core.PersistentArrayMap.cljs$lang$ctorStr = "cljs.core/PersistentArrayMap";

cljs.core.PersistentArrayMap.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write(writer__4226__auto__,"cljs.core/PersistentArrayMap");
});

cljs.core.__GT_PersistentArrayMap = (function __GT_PersistentArrayMap(meta,cnt,arr,__hash){
return (new cljs.core.PersistentArrayMap(meta,cnt,arr,__hash));
});

cljs.core.PersistentArrayMap.EMPTY = (new cljs.core.PersistentArrayMap(null,(0),[],null));
cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD = (8);
cljs.core.PersistentArrayMap.fromArray = (function (arr,no_clone,no_check){
var arr__$1 = ((no_clone)?arr:cljs.core.aclone(arr));
if(no_check){
var cnt = (arr__$1.length / (2));
return (new cljs.core.PersistentArrayMap(null,cnt,arr__$1,null));
} else {
var len = arr__$1.length;
var i = (0);
var ret = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < len)){
var G__15059 = (i + (2));
var G__15060 = cljs.core._assoc_BANG_(ret,(arr__$1[i]),(arr__$1[(i + (1))]));
i = G__15059;
ret = G__15060;
continue;
} else {
return cljs.core._persistent_BANG_(ret);
}
break;
}
}
});
(cljs.core.PersistentArrayMap.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4616__auto__ = this;
return cljs.core.es6_iterator(this__4616__auto__);
}));

/**
* @constructor
*/
cljs.core.TransientArrayMap = (function (editable_QMARK_,len,arr){
this.editable_QMARK_ = editable_QMARK_;
this.len = len;
this.arr = arr;
this.cljs$lang$protocol_mask$partition1$ = 56;
this.cljs$lang$protocol_mask$partition0$ = 258;
})
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var self__ = this;
var tcoll__$1 = this;
if(cljs.core.truth_(self__.editable_QMARK_)){
var idx = cljs.core.array_map_index_of(tcoll__$1,key);
if((idx >= (0))){
(self__.arr[idx] = (self__.arr[(self__.len - (2))]));

(self__.arr[(idx + (1))] = (self__.arr[(self__.len - (1))]));

var G__15061_15069 = self__.arr;
G__15061_15069.pop();

G__15061_15069.pop();


self__.len = (self__.len - (2));
} else {
}

return tcoll__$1;
} else {
throw (new Error("dissoc! after persistent!"));
}
});

cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var self__ = this;
var tcoll__$1 = this;
if(cljs.core.truth_(self__.editable_QMARK_)){
var idx = cljs.core.array_map_index_of(tcoll__$1,key);
if((idx === (-1))){
if(((self__.len + (2)) <= ((2) * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))){
self__.len = (self__.len + (2));

self__.arr.push(key);

self__.arr.push(val);

return tcoll__$1;
} else {
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3((function (){var G__15062 = self__.len;
var G__15063 = self__.arr;
return (cljs.core.array__GT_transient_hash_map.cljs$core$IFn$_invoke$arity$2 ? cljs.core.array__GT_transient_hash_map.cljs$core$IFn$_invoke$arity$2(G__15062,G__15063) : cljs.core.array__GT_transient_hash_map.call(null,G__15062,G__15063));
})(),key,val);
}
} else {
if((val === (self__.arr[(idx + (1))]))){
return tcoll__$1;
} else {
(self__.arr[(idx + (1))] = val);

return tcoll__$1;
}
}
} else {
throw (new Error("assoc! after persistent!"));
}
});

cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var self__ = this;
var tcoll__$1 = this;
if(cljs.core.truth_(self__.editable_QMARK_)){
if((function (){var G__15064 = o;
if(G__15064){
var bit__4319__auto__ = (G__15064.cljs$lang$protocol_mask$partition0$ & (2048));
if((bit__4319__auto__) || (G__15064.cljs$core$IMapEntry$)){
return true;
} else {
if((!G__15064.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IMapEntry,G__15064);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IMapEntry,G__15064);
}
})()){
return cljs.core._assoc_BANG_(tcoll__$1,(function (){var G__15065 = o;
return (cljs.core.key.cljs$core$IFn$_invoke$arity$1 ? cljs.core.key.cljs$core$IFn$_invoke$arity$1(G__15065) : cljs.core.key.call(null,G__15065));
})(),(function (){var G__15066 = o;
return (cljs.core.val.cljs$core$IFn$_invoke$arity$1 ? cljs.core.val.cljs$core$IFn$_invoke$arity$1(G__15066) : cljs.core.val.call(null,G__15066));
})());
} else {
var es = cljs.core.seq(o);
var tcoll__$2 = tcoll__$1;
while(true){
var temp__4124__auto__ = cljs.core.first(es);
if(cljs.core.truth_(temp__4124__auto__)){
var e = temp__4124__auto__;
var G__15070 = cljs.core.next(es);
var G__15071 = cljs.core._assoc_BANG_(tcoll__$2,(function (){var G__15067 = e;
return (cljs.core.key.cljs$core$IFn$_invoke$arity$1 ? cljs.core.key.cljs$core$IFn$_invoke$arity$1(G__15067) : cljs.core.key.call(null,G__15067));
})(),(function (){var G__15068 = e;
return (cljs.core.val.cljs$core$IFn$_invoke$arity$1 ? cljs.core.val.cljs$core$IFn$_invoke$arity$1(G__15068) : cljs.core.val.call(null,G__15068));
})());
es = G__15070;
tcoll__$2 = G__15071;
continue;
} else {
return tcoll__$2;
}
break;
}
}
} else {
throw (new Error("conj! after persistent!"));
}
});

cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var self__ = this;
var tcoll__$1 = this;
if(cljs.core.truth_(self__.editable_QMARK_)){
self__.editable_QMARK_ = false;

return (new cljs.core.PersistentArrayMap(null,cljs.core.quot(self__.len,(2)),self__.arr,null));
} else {
throw (new Error("persistent! called twice"));
}
});

cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var self__ = this;
var tcoll__$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(tcoll__$1,k,null);
});

cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var self__ = this;
var tcoll__$1 = this;
if(cljs.core.truth_(self__.editable_QMARK_)){
var idx = cljs.core.array_map_index_of(tcoll__$1,k);
if((idx === (-1))){
return not_found;
} else {
return (self__.arr[(idx + (1))]);
}
} else {
throw (new Error("lookup after persistent!"));
}
});

cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var self__ = this;
var tcoll__$1 = this;
if(cljs.core.truth_(self__.editable_QMARK_)){
return cljs.core.quot(self__.len,(2));
} else {
throw (new Error("count after persistent!"));
}
});

cljs.core.TransientArrayMap.cljs$lang$type = true;

cljs.core.TransientArrayMap.cljs$lang$ctorStr = "cljs.core/TransientArrayMap";

cljs.core.TransientArrayMap.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write(writer__4226__auto__,"cljs.core/TransientArrayMap");
});

cljs.core.__GT_TransientArrayMap = (function __GT_TransientArrayMap(editable_QMARK_,len,arr){
return (new cljs.core.TransientArrayMap(editable_QMARK_,len,arr));
});


cljs.core.array__GT_transient_hash_map = (function array__GT_transient_hash_map(len,arr){
var out = cljs.core.transient$(cljs.core.PersistentHashMap.EMPTY);
var i = (0);
while(true){
if((i < len)){
var G__15072 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out,(arr[i]),(arr[(i + (1))]));
var G__15073 = (i + (2));
out = G__15072;
i = G__15073;
continue;
} else {
return out;
}
break;
}
});

/**
* @constructor
*/
cljs.core.Box = (function (val){
this.val = val;
})

cljs.core.Box.cljs$lang$type = true;

cljs.core.Box.cljs$lang$ctorStr = "cljs.core/Box";

cljs.core.Box.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write(writer__4226__auto__,"cljs.core/Box");
});

cljs.core.__GT_Box = (function __GT_Box(val){
return (new cljs.core.Box(val));
});






cljs.core.key_test = (function key_test(key,other){
if((key === other)){
return true;
} else {
if(cljs.core.keyword_identical_QMARK_(key,other)){
return true;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,other);

}
}
});
cljs.core.mask = (function mask(hash,shift){
return ((hash >>> shift) & (31));
});
cljs.core.clone_and_set = (function() {
var clone_and_set = null;
var clone_and_set__3 = (function (arr,i,a){
var G__15076 = cljs.core.aclone(arr);
(G__15076[i] = a);

return G__15076;
});
var clone_and_set__5 = (function (arr,i,a,j,b){
var G__15077 = cljs.core.aclone(arr);
(G__15077[i] = a);

(G__15077[j] = b);

return G__15077;
});
clone_and_set = function(arr,i,a,j,b){
switch(arguments.length){
case 3:
return clone_and_set__3.call(this,arr,i,a);
case 5:
return clone_and_set__5.call(this,arr,i,a,j,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
clone_and_set.cljs$core$IFn$_invoke$arity$3 = clone_and_set__3;
clone_and_set.cljs$core$IFn$_invoke$arity$5 = clone_and_set__5;
return clone_and_set;
})()
;
cljs.core.remove_pair = (function remove_pair(arr,i){
var new_arr = (new Array((arr.length - (2))));
cljs.core.array_copy(arr,(0),new_arr,(0),((2) * i));

cljs.core.array_copy(arr,((2) * (i + (1))),new_arr,((2) * i),(new_arr.length - ((2) * i)));

return new_arr;
});
cljs.core.bitmap_indexed_node_index = (function bitmap_indexed_node_index(bitmap,bit){
return cljs.core.bit_count((bitmap & (bit - (1))));
});
cljs.core.bitpos = (function bitpos(hash,shift){
return ((1) << ((hash >>> shift) & 0x01f));
});
cljs.core.edit_and_set = (function() {
var edit_and_set = null;
var edit_and_set__4 = (function (inode,edit,i,a){
var editable = inode.ensure_editable(edit);
(editable.arr[i] = a);

return editable;
});
var edit_and_set__6 = (function (inode,edit,i,a,j,b){
var editable = inode.ensure_editable(edit);
(editable.arr[i] = a);

(editable.arr[j] = b);

return editable;
});
edit_and_set = function(inode,edit,i,a,j,b){
switch(arguments.length){
case 4:
return edit_and_set__4.call(this,inode,edit,i,a);
case 6:
return edit_and_set__6.call(this,inode,edit,i,a,j,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
edit_and_set.cljs$core$IFn$_invoke$arity$4 = edit_and_set__4;
edit_and_set.cljs$core$IFn$_invoke$arity$6 = edit_and_set__6;
return edit_and_set;
})()
;
cljs.core.inode_kv_reduce = (function inode_kv_reduce(arr,f,init){
var len = arr.length;
var i = (0);
var init__$1 = init;
while(true){
if((i < len)){
var init__$2 = (function (){var k = (arr[i]);
if(!((k == null))){
var G__15082 = init__$1;
var G__15083 = k;
var G__15084 = (arr[(i + (1))]);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__15082,G__15083,G__15084) : f.call(null,G__15082,G__15083,G__15084));
} else {
var node = (arr[(i + (1))]);
if(!((node == null))){
return node.kv_reduce(f,init__$1);
} else {
return init__$1;
}
}
})();
if(cljs.core.reduced_QMARK_(init__$2)){
var G__15085 = init__$2;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15085) : cljs.core.deref.call(null,G__15085));
} else {
var G__15086 = (i + (2));
var G__15087 = init__$2;
i = G__15086;
init__$1 = G__15087;
continue;
}
} else {
return init__$1;
}
break;
}
});

/**
* @constructor
*/
cljs.core.BitmapIndexedNode = (function (edit,bitmap,arr){
this.edit = edit;
this.bitmap = bitmap;
this.arr = arr;
})
cljs.core.BitmapIndexedNode.prototype.ensure_editable = (function (e){
var self__ = this;
var inode = this;
if((e === self__.edit)){
return inode;
} else {
var n = cljs.core.bit_count(self__.bitmap);
var new_arr = (new Array((((n < (0)))?(4):((2) * (n + (1))))));
cljs.core.array_copy(self__.arr,(0),new_arr,(0),((2) * n));

return (new cljs.core.BitmapIndexedNode(e,self__.bitmap,new_arr));
}
});

cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = (function (edit__$1,shift,hash,key,removed_leaf_QMARK_){
var self__ = this;
var inode = this;
var bit = (1 << ((hash >>> shift) & 0x01f));
if(((self__.bitmap & bit) === (0))){
return inode;
} else {
var idx = cljs.core.bitmap_indexed_node_index(self__.bitmap,bit);
var key_or_nil = (self__.arr[((2) * idx)]);
var val_or_node = (self__.arr[(((2) * idx) + (1))]);
if((key_or_nil == null)){
var n = val_or_node.inode_without_BANG_(edit__$1,(shift + (5)),hash,key,removed_leaf_QMARK_);
if((n === val_or_node)){
return inode;
} else {
if(!((n == null))){
return cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(inode,edit__$1,(((2) * idx) + (1)),n);
} else {
if((self__.bitmap === bit)){
return null;
} else {
return inode.edit_and_remove_pair(edit__$1,bit,idx);

}
}
}
} else {
if(cljs.core.key_test(key,key_or_nil)){
(removed_leaf_QMARK_[(0)] = true);

return inode.edit_and_remove_pair(edit__$1,bit,idx);
} else {
return inode;

}
}
}
});

cljs.core.BitmapIndexedNode.prototype.edit_and_remove_pair = (function (e,bit,i){
var self__ = this;
var inode = this;
if((self__.bitmap === bit)){
return null;
} else {
var editable = inode.ensure_editable(e);
var earr = editable.arr;
var len = earr.length;
editable.bitmap = (bit ^ editable.bitmap);

cljs.core.array_copy(earr,((2) * (i + (1))),earr,((2) * i),(len - ((2) * (i + (1)))));

(earr[(len - (2))] = null);

(earr[(len - (1))] = null);

return editable;
}
});

cljs.core.BitmapIndexedNode.prototype.inode_seq = (function (){
var self__ = this;
var inode = this;
var G__15088 = self__.arr;
return (cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$1 ? cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$1(G__15088) : cljs.core.create_inode_seq.call(null,G__15088));
});

cljs.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){
var self__ = this;
var inode = this;
return cljs.core.inode_kv_reduce(self__.arr,f,init);
});

cljs.core.BitmapIndexedNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var self__ = this;
var inode = this;
var bit = (1 << ((hash >>> shift) & 0x01f));
if(((self__.bitmap & bit) === (0))){
return not_found;
} else {
var idx = cljs.core.bitmap_indexed_node_index(self__.bitmap,bit);
var key_or_nil = (self__.arr[((2) * idx)]);
var val_or_node = (self__.arr[(((2) * idx) + (1))]);
if((key_or_nil == null)){
return val_or_node.inode_lookup((shift + (5)),hash,key,not_found);
} else {
if(cljs.core.key_test(key,key_or_nil)){
return val_or_node;
} else {
return not_found;

}
}
}
});

cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = (function (edit__$1,shift,hash,key,val,added_leaf_QMARK_){
var self__ = this;
var inode = this;
var bit = (1 << ((hash >>> shift) & 0x01f));
var idx = cljs.core.bitmap_indexed_node_index(self__.bitmap,bit);
if(((self__.bitmap & bit) === (0))){
var n = cljs.core.bit_count(self__.bitmap);
if((((2) * n) < self__.arr.length)){
var editable = inode.ensure_editable(edit__$1);
var earr = editable.arr;
added_leaf_QMARK_.val = true;

cljs.core.array_copy_downward(earr,((2) * idx),earr,((2) * (idx + (1))),((2) * (n - idx)));

(earr[((2) * idx)] = key);

(earr[(((2) * idx) + (1))] = val);

editable.bitmap = (editable.bitmap | bit);

return editable;
} else {
if((n >= (16))){
var nodes = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var jdx = ((hash >>> shift) & 0x01f);
(nodes[jdx] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit__$1,(shift + (5)),hash,key,val,added_leaf_QMARK_));

var i_15102 = (0);
var j_15103 = (0);
while(true){
if((i_15102 < (32))){
if((((self__.bitmap >>> i_15102) & (1)) === (0))){
var G__15104 = (i_15102 + (1));
var G__15105 = j_15103;
i_15102 = G__15104;
j_15103 = G__15105;
continue;
} else {
(nodes[i_15102] = ((!(((self__.arr[j_15103]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit__$1,(shift + (5)),cljs.core.hash((self__.arr[j_15103])),(self__.arr[j_15103]),(self__.arr[(j_15103 + (1))]),added_leaf_QMARK_):(self__.arr[(j_15103 + (1))])));

var G__15106 = (i_15102 + (1));
var G__15107 = (j_15103 + (2));
i_15102 = G__15106;
j_15103 = G__15107;
continue;
}
} else {
}
break;
}

return (new cljs.core.ArrayNode(edit__$1,(n + (1)),nodes));
} else {
var new_arr = (new Array(((2) * (n + (4)))));
cljs.core.array_copy(self__.arr,(0),new_arr,(0),((2) * idx));

(new_arr[((2) * idx)] = key);

(new_arr[(((2) * idx) + (1))] = val);

cljs.core.array_copy(self__.arr,((2) * idx),new_arr,((2) * (idx + (1))),((2) * (n - idx)));

added_leaf_QMARK_.val = true;

var editable = inode.ensure_editable(edit__$1);
editable.arr = new_arr;

editable.bitmap = (editable.bitmap | bit);

return editable;

}
}
} else {
var key_or_nil = (self__.arr[((2) * idx)]);
var val_or_node = (self__.arr[(((2) * idx) + (1))]);
if((key_or_nil == null)){
var n = val_or_node.inode_assoc_BANG_(edit__$1,(shift + (5)),hash,key,val,added_leaf_QMARK_);
if((n === val_or_node)){
return inode;
} else {
return cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(inode,edit__$1,(((2) * idx) + (1)),n);
}
} else {
if(cljs.core.key_test(key,key_or_nil)){
if((val === val_or_node)){
return inode;
} else {
return cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(inode,edit__$1,(((2) * idx) + (1)),val);
}
} else {
added_leaf_QMARK_.val = true;

return cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$6(inode,edit__$1,((2) * idx),null,(((2) * idx) + (1)),(function (){var G__15089 = edit__$1;
var G__15090 = (shift + (5));
var G__15091 = key_or_nil;
var G__15092 = val_or_node;
var G__15093 = hash;
var G__15094 = key;
var G__15095 = val;
return (cljs.core.create_node.cljs$core$IFn$_invoke$arity$7 ? cljs.core.create_node.cljs$core$IFn$_invoke$arity$7(G__15089,G__15090,G__15091,G__15092,G__15093,G__15094,G__15095) : cljs.core.create_node.call(null,G__15089,G__15090,G__15091,G__15092,G__15093,G__15094,G__15095));
})());

}
}
}
});

cljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var self__ = this;
var inode = this;
var bit = (1 << ((hash >>> shift) & 0x01f));
var idx = cljs.core.bitmap_indexed_node_index(self__.bitmap,bit);
if(((self__.bitmap & bit) === (0))){
var n = cljs.core.bit_count(self__.bitmap);
if((n >= (16))){
var nodes = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var jdx = ((hash >>> shift) & 0x01f);
(nodes[jdx] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + (5)),hash,key,val,added_leaf_QMARK_));

var i_15108 = (0);
var j_15109 = (0);
while(true){
if((i_15108 < (32))){
if((((self__.bitmap >>> i_15108) & (1)) === (0))){
var G__15110 = (i_15108 + (1));
var G__15111 = j_15109;
i_15108 = G__15110;
j_15109 = G__15111;
continue;
} else {
(nodes[i_15108] = ((!(((self__.arr[j_15109]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + (5)),cljs.core.hash((self__.arr[j_15109])),(self__.arr[j_15109]),(self__.arr[(j_15109 + (1))]),added_leaf_QMARK_):(self__.arr[(j_15109 + (1))])));

var G__15112 = (i_15108 + (1));
var G__15113 = (j_15109 + (2));
i_15108 = G__15112;
j_15109 = G__15113;
continue;
}
} else {
}
break;
}

return (new cljs.core.ArrayNode(null,(n + (1)),nodes));
} else {
var new_arr = (new Array(((2) * (n + (1)))));
cljs.core.array_copy(self__.arr,(0),new_arr,(0),((2) * idx));

(new_arr[((2) * idx)] = key);

(new_arr[(((2) * idx) + (1))] = val);

cljs.core.array_copy(self__.arr,((2) * idx),new_arr,((2) * (idx + (1))),((2) * (n - idx)));

added_leaf_QMARK_.val = true;

return (new cljs.core.BitmapIndexedNode(null,(self__.bitmap | bit),new_arr));
}
} else {
var key_or_nil = (self__.arr[((2) * idx)]);
var val_or_node = (self__.arr[(((2) * idx) + (1))]);
if((key_or_nil == null)){
var n = val_or_node.inode_assoc((shift + (5)),hash,key,val,added_leaf_QMARK_);
if((n === val_or_node)){
return inode;
} else {
return (new cljs.core.BitmapIndexedNode(null,self__.bitmap,cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,(((2) * idx) + (1)),n)));
}
} else {
if(cljs.core.key_test(key,key_or_nil)){
if((val === val_or_node)){
return inode;
} else {
return (new cljs.core.BitmapIndexedNode(null,self__.bitmap,cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,(((2) * idx) + (1)),val)));
}
} else {
added_leaf_QMARK_.val = true;

return (new cljs.core.BitmapIndexedNode(null,self__.bitmap,cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$5(self__.arr,((2) * idx),null,(((2) * idx) + (1)),(function (){var G__15096 = (shift + (5));
var G__15097 = key_or_nil;
var G__15098 = val_or_node;
var G__15099 = hash;
var G__15100 = key;
var G__15101 = val;
return (cljs.core.create_node.cljs$core$IFn$_invoke$arity$6 ? cljs.core.create_node.cljs$core$IFn$_invoke$arity$6(G__15096,G__15097,G__15098,G__15099,G__15100,G__15101) : cljs.core.create_node.call(null,G__15096,G__15097,G__15098,G__15099,G__15100,G__15101));
})())));

}
}
}
});

cljs.core.BitmapIndexedNode.prototype.inode_find = (function (shift,hash,key,not_found){
var self__ = this;
var inode = this;
var bit = (1 << ((hash >>> shift) & 0x01f));
if(((self__.bitmap & bit) === (0))){
return not_found;
} else {
var idx = cljs.core.bitmap_indexed_node_index(self__.bitmap,bit);
var key_or_nil = (self__.arr[((2) * idx)]);
var val_or_node = (self__.arr[(((2) * idx) + (1))]);
if((key_or_nil == null)){
return val_or_node.inode_find((shift + (5)),hash,key,not_found);
} else {
if(cljs.core.key_test(key,key_or_nil)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_or_nil,val_or_node], null);
} else {
return not_found;

}
}
}
});

cljs.core.BitmapIndexedNode.prototype.inode_without = (function (shift,hash,key){
var self__ = this;
var inode = this;
var bit = (1 << ((hash >>> shift) & 0x01f));
if(((self__.bitmap & bit) === (0))){
return inode;
} else {
var idx = cljs.core.bitmap_indexed_node_index(self__.bitmap,bit);
var key_or_nil = (self__.arr[((2) * idx)]);
var val_or_node = (self__.arr[(((2) * idx) + (1))]);
if((key_or_nil == null)){
var n = val_or_node.inode_without((shift + (5)),hash,key);
if((n === val_or_node)){
return inode;
} else {
if(!((n == null))){
return (new cljs.core.BitmapIndexedNode(null,self__.bitmap,cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,(((2) * idx) + (1)),n)));
} else {
if((self__.bitmap === bit)){
return null;
} else {
return (new cljs.core.BitmapIndexedNode(null,(self__.bitmap ^ bit),cljs.core.remove_pair(self__.arr,idx)));

}
}
}
} else {
if(cljs.core.key_test(key,key_or_nil)){
return (new cljs.core.BitmapIndexedNode(null,(self__.bitmap ^ bit),cljs.core.remove_pair(self__.arr,idx)));
} else {
return inode;

}
}
}
});

cljs.core.BitmapIndexedNode.cljs$lang$type = true;

cljs.core.BitmapIndexedNode.cljs$lang$ctorStr = "cljs.core/BitmapIndexedNode";

cljs.core.BitmapIndexedNode.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write(writer__4226__auto__,"cljs.core/BitmapIndexedNode");
});

cljs.core.__GT_BitmapIndexedNode = (function __GT_BitmapIndexedNode(edit,bitmap,arr){
return (new cljs.core.BitmapIndexedNode(edit,bitmap,arr));
});

cljs.core.BitmapIndexedNode.EMPTY = (new cljs.core.BitmapIndexedNode(null,(0),[]));
cljs.core.pack_array_node = (function pack_array_node(array_node,edit,idx){
var arr = array_node.arr;
var len = arr.length;
var new_arr = (new Array(((2) * (array_node.cnt - (1)))));
var i = (0);
var j = (1);
var bitmap = (0);
while(true){
if((i < len)){
if((!((i === idx))) && (!(((arr[i]) == null)))){
(new_arr[j] = (arr[i]));

var G__15114 = (i + (1));
var G__15115 = (j + (2));
var G__15116 = (bitmap | ((1) << i));
i = G__15114;
j = G__15115;
bitmap = G__15116;
continue;
} else {
var G__15117 = (i + (1));
var G__15118 = j;
var G__15119 = bitmap;
i = G__15117;
j = G__15118;
bitmap = G__15119;
continue;
}
} else {
return (new cljs.core.BitmapIndexedNode(edit,bitmap,new_arr));
}
break;
}
});

/**
* @constructor
*/
cljs.core.ArrayNode = (function (edit,cnt,arr){
this.edit = edit;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.ArrayNode.prototype.ensure_editable = (function (e){
var self__ = this;
var inode = this;
if((e === self__.edit)){
return inode;
} else {
return (new cljs.core.ArrayNode(e,self__.cnt,cljs.core.aclone(self__.arr)));
}
});

cljs.core.ArrayNode.prototype.inode_without_BANG_ = (function (edit__$1,shift,hash,key,removed_leaf_QMARK_){
var self__ = this;
var inode = this;
var idx = ((hash >>> shift) & 0x01f);
var node = (self__.arr[idx]);
if((node == null)){
return inode;
} else {
var n = node.inode_without_BANG_(edit__$1,(shift + (5)),hash,key,removed_leaf_QMARK_);
if((n === node)){
return inode;
} else {
if((n == null)){
if((self__.cnt <= (8))){
return cljs.core.pack_array_node(inode,edit__$1,idx);
} else {
var editable = cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(inode,edit__$1,idx,n);
editable.cnt = (editable.cnt - (1));

return editable;
}
} else {
return cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(inode,edit__$1,idx,n);

}
}
}
});

cljs.core.ArrayNode.prototype.inode_seq = (function (){
var self__ = this;
var inode = this;
var G__15120 = self__.arr;
return (cljs.core.create_array_node_seq.cljs$core$IFn$_invoke$arity$1 ? cljs.core.create_array_node_seq.cljs$core$IFn$_invoke$arity$1(G__15120) : cljs.core.create_array_node_seq.call(null,G__15120));
});

cljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){
var self__ = this;
var inode = this;
var len = self__.arr.length;
var i = (0);
var init__$1 = init;
while(true){
if((i < len)){
var node = (self__.arr[i]);
if(!((node == null))){
var init__$2 = node.kv_reduce(f,init__$1);
if(cljs.core.reduced_QMARK_(init__$2)){
var G__15121 = init__$2;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15121) : cljs.core.deref.call(null,G__15121));
} else {
var G__15122 = (i + (1));
var G__15123 = init__$2;
i = G__15122;
init__$1 = G__15123;
continue;
}
} else {
var G__15124 = (i + (1));
var G__15125 = init__$1;
i = G__15124;
init__$1 = G__15125;
continue;
}
} else {
return init__$1;
}
break;
}
});

cljs.core.ArrayNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var self__ = this;
var inode = this;
var idx = ((hash >>> shift) & 0x01f);
var node = (self__.arr[idx]);
if(!((node == null))){
return node.inode_lookup((shift + (5)),hash,key,not_found);
} else {
return not_found;
}
});

cljs.core.ArrayNode.prototype.inode_assoc_BANG_ = (function (edit__$1,shift,hash,key,val,added_leaf_QMARK_){
var self__ = this;
var inode = this;
var idx = ((hash >>> shift) & 0x01f);
var node = (self__.arr[idx]);
if((node == null)){
var editable = cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(inode,edit__$1,idx,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit__$1,(shift + (5)),hash,key,val,added_leaf_QMARK_));
editable.cnt = (editable.cnt + (1));

return editable;
} else {
var n = node.inode_assoc_BANG_(edit__$1,(shift + (5)),hash,key,val,added_leaf_QMARK_);
if((n === node)){
return inode;
} else {
return cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(inode,edit__$1,idx,n);
}
}
});

cljs.core.ArrayNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var self__ = this;
var inode = this;
var idx = ((hash >>> shift) & 0x01f);
var node = (self__.arr[idx]);
if((node == null)){
return (new cljs.core.ArrayNode(null,(self__.cnt + (1)),cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,idx,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + (5)),hash,key,val,added_leaf_QMARK_))));
} else {
var n = node.inode_assoc((shift + (5)),hash,key,val,added_leaf_QMARK_);
if((n === node)){
return inode;
} else {
return (new cljs.core.ArrayNode(null,self__.cnt,cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,idx,n)));
}
}
});

cljs.core.ArrayNode.prototype.inode_find = (function (shift,hash,key,not_found){
var self__ = this;
var inode = this;
var idx = ((hash >>> shift) & 0x01f);
var node = (self__.arr[idx]);
if(!((node == null))){
return node.inode_find((shift + (5)),hash,key,not_found);
} else {
return not_found;
}
});

cljs.core.ArrayNode.prototype.inode_without = (function (shift,hash,key){
var self__ = this;
var inode = this;
var idx = ((hash >>> shift) & 0x01f);
var node = (self__.arr[idx]);
if(!((node == null))){
var n = node.inode_without((shift + (5)),hash,key);
if((n === node)){
return inode;
} else {
if((n == null)){
if((self__.cnt <= (8))){
return cljs.core.pack_array_node(inode,null,idx);
} else {
return (new cljs.core.ArrayNode(null,(self__.cnt - (1)),cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,idx,n)));
}
} else {
return (new cljs.core.ArrayNode(null,self__.cnt,cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,idx,n)));

}
}
} else {
return inode;
}
});

cljs.core.ArrayNode.cljs$lang$type = true;

cljs.core.ArrayNode.cljs$lang$ctorStr = "cljs.core/ArrayNode";

cljs.core.ArrayNode.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write(writer__4226__auto__,"cljs.core/ArrayNode");
});

cljs.core.__GT_ArrayNode = (function __GT_ArrayNode(edit,cnt,arr){
return (new cljs.core.ArrayNode(edit,cnt,arr));
});

cljs.core.hash_collision_node_find_index = (function hash_collision_node_find_index(arr,cnt,key){
var lim = ((2) * cnt);
var i = (0);
while(true){
if((i < lim)){
if(cljs.core.key_test(key,(arr[i]))){
return i;
} else {
var G__15126 = (i + (2));
i = G__15126;
continue;
}
} else {
return (-1);
}
break;
}
});

/**
* @constructor
*/
cljs.core.HashCollisionNode = (function (edit,collision_hash,cnt,arr){
this.edit = edit;
this.collision_hash = collision_hash;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.HashCollisionNode.prototype.ensure_editable = (function (e){
var self__ = this;
var inode = this;
if((e === self__.edit)){
return inode;
} else {
var new_arr = (new Array(((2) * (self__.cnt + (1)))));
cljs.core.array_copy(self__.arr,(0),new_arr,(0),((2) * self__.cnt));

return (new cljs.core.HashCollisionNode(e,self__.collision_hash,self__.cnt,new_arr));
}
});

cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = (function (edit__$1,shift,hash,key,removed_leaf_QMARK_){
var self__ = this;
var inode = this;
var idx = cljs.core.hash_collision_node_find_index(self__.arr,self__.cnt,key);
if((idx === (-1))){
return inode;
} else {
(removed_leaf_QMARK_[(0)] = true);

if((self__.cnt === (1))){
return null;
} else {
var editable = inode.ensure_editable(edit__$1);
var earr = editable.arr;
(earr[idx] = (earr[(((2) * self__.cnt) - (2))]));

(earr[(idx + (1))] = (earr[(((2) * self__.cnt) - (1))]));

(earr[(((2) * self__.cnt) - (1))] = null);

(earr[(((2) * self__.cnt) - (2))] = null);

editable.cnt = (editable.cnt - (1));

return editable;
}
}
});

cljs.core.HashCollisionNode.prototype.inode_seq = (function (){
var self__ = this;
var inode = this;
var G__15127 = self__.arr;
return (cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$1 ? cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$1(G__15127) : cljs.core.create_inode_seq.call(null,G__15127));
});

cljs.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){
var self__ = this;
var inode = this;
return cljs.core.inode_kv_reduce(self__.arr,f,init);
});

cljs.core.HashCollisionNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var self__ = this;
var inode = this;
var idx = cljs.core.hash_collision_node_find_index(self__.arr,self__.cnt,key);
if((idx < (0))){
return not_found;
} else {
if(cljs.core.key_test(key,(self__.arr[idx]))){
return (self__.arr[(idx + (1))]);
} else {
return not_found;

}
}
});

cljs.core.HashCollisionNode.prototype.inode_assoc_BANG_ = (function (edit__$1,shift,hash,key,val,added_leaf_QMARK_){
var self__ = this;
var inode = this;
if((hash === self__.collision_hash)){
var idx = cljs.core.hash_collision_node_find_index(self__.arr,self__.cnt,key);
if((idx === (-1))){
if((self__.arr.length > ((2) * self__.cnt))){
var editable = cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$6(inode,edit__$1,((2) * self__.cnt),key,(((2) * self__.cnt) + (1)),val);
added_leaf_QMARK_.val = true;

editable.cnt = (editable.cnt + (1));

return editable;
} else {
var len = self__.arr.length;
var new_arr = (new Array((len + (2))));
cljs.core.array_copy(self__.arr,(0),new_arr,(0),len);

(new_arr[len] = key);

(new_arr[(len + (1))] = val);

added_leaf_QMARK_.val = true;

return inode.ensure_editable_array(edit__$1,(self__.cnt + (1)),new_arr);
}
} else {
if(((self__.arr[(idx + (1))]) === val)){
return inode;
} else {
return cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(inode,edit__$1,(idx + (1)),val);
}
}
} else {
return (new cljs.core.BitmapIndexedNode(edit__$1,(1 << ((self__.collision_hash >>> shift) & 0x01f)),[null,inode,null,null])).inode_assoc_BANG_(edit__$1,shift,hash,key,val,added_leaf_QMARK_);
}
});

cljs.core.HashCollisionNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var self__ = this;
var inode = this;
if((hash === self__.collision_hash)){
var idx = cljs.core.hash_collision_node_find_index(self__.arr,self__.cnt,key);
if((idx === (-1))){
var len = ((2) * self__.cnt);
var new_arr = (new Array((len + (2))));
cljs.core.array_copy(self__.arr,(0),new_arr,(0),len);

(new_arr[len] = key);

(new_arr[(len + (1))] = val);

added_leaf_QMARK_.val = true;

return (new cljs.core.HashCollisionNode(null,self__.collision_hash,(self__.cnt + (1)),new_arr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((self__.arr[idx]),val)){
return inode;
} else {
return (new cljs.core.HashCollisionNode(null,self__.collision_hash,self__.cnt,cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,(idx + (1)),val)));
}
}
} else {
return (new cljs.core.BitmapIndexedNode(null,(1 << ((self__.collision_hash >>> shift) & 0x01f)),[null,inode])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_);
}
});

cljs.core.HashCollisionNode.prototype.ensure_editable_array = (function (e,count,array){
var self__ = this;
var inode = this;
if((e === self__.edit)){
self__.arr = array;

self__.cnt = count;

return inode;
} else {
return (new cljs.core.HashCollisionNode(self__.edit,self__.collision_hash,count,array));
}
});

cljs.core.HashCollisionNode.prototype.inode_find = (function (shift,hash,key,not_found){
var self__ = this;
var inode = this;
var idx = cljs.core.hash_collision_node_find_index(self__.arr,self__.cnt,key);
if((idx < (0))){
return not_found;
} else {
if(cljs.core.key_test(key,(self__.arr[idx]))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.arr[idx]),(self__.arr[(idx + (1))])], null);
} else {
return not_found;

}
}
});

cljs.core.HashCollisionNode.prototype.inode_without = (function (shift,hash,key){
var self__ = this;
var inode = this;
var idx = cljs.core.hash_collision_node_find_index(self__.arr,self__.cnt,key);
if((idx === (-1))){
return inode;
} else {
if((self__.cnt === (1))){
return null;
} else {
return (new cljs.core.HashCollisionNode(null,self__.collision_hash,(self__.cnt - (1)),cljs.core.remove_pair(self__.arr,cljs.core.quot(idx,(2)))));

}
}
});

cljs.core.HashCollisionNode.cljs$lang$type = true;

cljs.core.HashCollisionNode.cljs$lang$ctorStr = "cljs.core/HashCollisionNode";

cljs.core.HashCollisionNode.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write(writer__4226__auto__,"cljs.core/HashCollisionNode");
});

cljs.core.__GT_HashCollisionNode = (function __GT_HashCollisionNode(edit,collision_hash,cnt,arr){
return (new cljs.core.HashCollisionNode(edit,collision_hash,cnt,arr));
});

cljs.core.create_node = (function() {
var create_node = null;
var create_node__6 = (function (shift,key1,val1,key2hash,key2,val2){
var key1hash = cljs.core.hash(key1);
if((key1hash === key2hash)){
return (new cljs.core.HashCollisionNode(null,key1hash,(2),[key1,val1,key2,val2]));
} else {
var added_leaf_QMARK_ = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash,key1,val1,added_leaf_QMARK_).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK_);
}
});
var create_node__7 = (function (edit,shift,key1,val1,key2hash,key2,val2){
var key1hash = cljs.core.hash(key1);
if((key1hash === key2hash)){
return (new cljs.core.HashCollisionNode(null,key1hash,(2),[key1,val1,key2,val2]));
} else {
var added_leaf_QMARK_ = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,shift,key1hash,key1,val1,added_leaf_QMARK_).inode_assoc_BANG_(edit,shift,key2hash,key2,val2,added_leaf_QMARK_);
}
});
create_node = function(edit,shift,key1,val1,key2hash,key2,val2){
switch(arguments.length){
case 6:
return create_node__6.call(this,edit,shift,key1,val1,key2hash,key2);
case 7:
return create_node__7.call(this,edit,shift,key1,val1,key2hash,key2,val2);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
create_node.cljs$core$IFn$_invoke$arity$6 = create_node__6;
create_node.cljs$core$IFn$_invoke$arity$7 = create_node__7;
return create_node;
})()
;

/**
* @constructor
*/
cljs.core.NodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32374860;
})
cljs.core.NodeSeq.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.NodeSeq.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.NodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4059__auto__ = self__.__hash;
if(!((h__4059__auto__ == null))){
return h__4059__auto__;
} else {
var h__4059__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__4059__auto____$1;

return h__4059__auto____$1;
}
});

cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});

cljs.core.NodeSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});

cljs.core.NodeSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});

cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.s == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.nodes[self__.i]),(self__.nodes[(self__.i + (1))])], null);
} else {
return cljs.core.first(self__.s);
}
});

cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.s == null)){
var G__15128 = self__.nodes;
var G__15129 = (self__.i + (2));
var G__15130 = null;
return (cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$3 ? cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$3(G__15128,G__15129,G__15130) : cljs.core.create_inode_seq.call(null,G__15128,G__15129,G__15130));
} else {
var G__15131 = self__.nodes;
var G__15132 = self__.i;
var G__15133 = cljs.core.next(self__.s);
return (cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$3 ? cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$3(G__15131,G__15132,G__15133) : cljs.core.create_inode_seq.call(null,G__15131,G__15132,G__15133));
}
});

cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
});

cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.NodeSeq(meta__$1,self__.nodes,self__.i,self__.s,self__.__hash));
});

cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return cljs.core.cons(o,coll__$1);
});

cljs.core.NodeSeq.cljs$lang$type = true;

cljs.core.NodeSeq.cljs$lang$ctorStr = "cljs.core/NodeSeq";

cljs.core.NodeSeq.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write(writer__4226__auto__,"cljs.core/NodeSeq");
});

cljs.core.__GT_NodeSeq = (function __GT_NodeSeq(meta,nodes,i,s,__hash){
return (new cljs.core.NodeSeq(meta,nodes,i,s,__hash));
});

(cljs.core.NodeSeq.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4616__auto__ = this;
return cljs.core.es6_iterator(this__4616__auto__);
}));
cljs.core.create_inode_seq = (function() {
var create_inode_seq = null;
var create_inode_seq__1 = (function (nodes){
return create_inode_seq.cljs$core$IFn$_invoke$arity$3(nodes,(0),null);
});
var create_inode_seq__3 = (function (nodes,i,s){
if((s == null)){
var len = nodes.length;
var j = i;
while(true){
if((j < len)){
if(!(((nodes[j]) == null))){
return (new cljs.core.NodeSeq(null,nodes,j,null,null));
} else {
var temp__4124__auto__ = (nodes[(j + (1))]);
if(cljs.core.truth_(temp__4124__auto__)){
var node = temp__4124__auto__;
var temp__4124__auto____$1 = node.inode_seq();
if(cljs.core.truth_(temp__4124__auto____$1)){
var node_seq = temp__4124__auto____$1;
return (new cljs.core.NodeSeq(null,nodes,(j + (2)),node_seq,null));
} else {
var G__15137 = (j + (2));
j = G__15137;
continue;
}
} else {
var G__15138 = (j + (2));
j = G__15138;
continue;
}
}
} else {
return null;
}
break;
}
} else {
return (new cljs.core.NodeSeq(null,nodes,i,s,null));
}
});
create_inode_seq = function(nodes,i,s){
switch(arguments.length){
case 1:
return create_inode_seq__1.call(this,nodes);
case 3:
return create_inode_seq__3.call(this,nodes,i,s);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
create_inode_seq.cljs$core$IFn$_invoke$arity$1 = create_inode_seq__1;
create_inode_seq.cljs$core$IFn$_invoke$arity$3 = create_inode_seq__3;
return create_inode_seq;
})()
;

/**
* @constructor
*/
cljs.core.ArrayNodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32374860;
})
cljs.core.ArrayNodeSeq.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.ArrayNodeSeq.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.ArrayNodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4059__auto__ = self__.__hash;
if(!((h__4059__auto__ == null))){
return h__4059__auto__;
} else {
var h__4059__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__4059__auto____$1;

return h__4059__auto____$1;
}
});

cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});

cljs.core.ArrayNodeSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});

cljs.core.ArrayNodeSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});

cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.first(self__.s);
});

cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var G__15139 = null;
var G__15140 = self__.nodes;
var G__15141 = self__.i;
var G__15142 = cljs.core.next(self__.s);
return (cljs.core.create_array_node_seq.cljs$core$IFn$_invoke$arity$4 ? cljs.core.create_array_node_seq.cljs$core$IFn$_invoke$arity$4(G__15139,G__15140,G__15141,G__15142) : cljs.core.create_array_node_seq.call(null,G__15139,G__15140,G__15141,G__15142));
});

cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
});

cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.ArrayNodeSeq(meta__$1,self__.nodes,self__.i,self__.s,self__.__hash));
});

cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return cljs.core.cons(o,coll__$1);
});

cljs.core.ArrayNodeSeq.cljs$lang$type = true;

cljs.core.ArrayNodeSeq.cljs$lang$ctorStr = "cljs.core/ArrayNodeSeq";

cljs.core.ArrayNodeSeq.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write(writer__4226__auto__,"cljs.core/ArrayNodeSeq");
});

cljs.core.__GT_ArrayNodeSeq = (function __GT_ArrayNodeSeq(meta,nodes,i,s,__hash){
return (new cljs.core.ArrayNodeSeq(meta,nodes,i,s,__hash));
});

(cljs.core.ArrayNodeSeq.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4616__auto__ = this;
return cljs.core.es6_iterator(this__4616__auto__);
}));
cljs.core.create_array_node_seq = (function() {
var create_array_node_seq = null;
var create_array_node_seq__1 = (function (nodes){
return create_array_node_seq.cljs$core$IFn$_invoke$arity$4(null,nodes,(0),null);
});
var create_array_node_seq__4 = (function (meta,nodes,i,s){
if((s == null)){
var len = nodes.length;
var j = i;
while(true){
if((j < len)){
var temp__4124__auto__ = (nodes[j]);
if(cljs.core.truth_(temp__4124__auto__)){
var nj = temp__4124__auto__;
var temp__4124__auto____$1 = nj.inode_seq();
if(cljs.core.truth_(temp__4124__auto____$1)){
var ns = temp__4124__auto____$1;
return (new cljs.core.ArrayNodeSeq(meta,nodes,(j + (1)),ns,null));
} else {
var G__15147 = (j + (1));
j = G__15147;
continue;
}
} else {
var G__15148 = (j + (1));
j = G__15148;
continue;
}
} else {
return null;
}
break;
}
} else {
return (new cljs.core.ArrayNodeSeq(meta,nodes,i,s,null));
}
});
create_array_node_seq = function(meta,nodes,i,s){
switch(arguments.length){
case 1:
return create_array_node_seq__1.call(this,meta);
case 4:
return create_array_node_seq__4.call(this,meta,nodes,i,s);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
create_array_node_seq.cljs$core$IFn$_invoke$arity$1 = create_array_node_seq__1;
create_array_node_seq.cljs$core$IFn$_invoke$arity$4 = create_array_node_seq__4;
return create_array_node_seq;
})()
;

/**
* @constructor
*/
cljs.core.PersistentHashMap = (function (meta,cnt,root,has_nil_QMARK_,nil_val,__hash){
this.meta = meta;
this.cnt = cnt;
this.root = root;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 16123663;
this.cljs$lang$protocol_mask$partition1$ = 8196;
})
cljs.core.PersistentHashMap.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.PersistentHashMap.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.PersistentHashMap.prototype.keys = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_iterator((function (){var G__15150 = coll;
return (cljs.core.keys.cljs$core$IFn$_invoke$arity$1 ? cljs.core.keys.cljs$core$IFn$_invoke$arity$1(G__15150) : cljs.core.keys.call(null,G__15150));
})());
});

cljs.core.PersistentHashMap.prototype.entries = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_entries_iterator(cljs.core.seq(coll));
});

cljs.core.PersistentHashMap.prototype.values = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_iterator((function (){var G__15151 = coll;
return (cljs.core.vals.cljs$core$IFn$_invoke$arity$1 ? cljs.core.vals.cljs$core$IFn$_invoke$arity$1(G__15151) : cljs.core.vals.call(null,G__15151));
})());
});

cljs.core.PersistentHashMap.prototype.has = (function (k){
var self__ = this;
var coll = this;
return cljs.core.contains_QMARK_(coll,k);
});

cljs.core.PersistentHashMap.prototype.get = (function (k){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});

cljs.core.PersistentHashMap.prototype.forEach = (function (f){
var self__ = this;
var coll = this;
var seq__15152 = cljs.core.seq(coll);
var chunk__15153 = null;
var count__15154 = (0);
var i__15155 = (0);
while(true){
if((i__15155 < count__15154)){
var vec__15156 = chunk__15153.cljs$core$IIndexed$_nth$arity$2(null,i__15155);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15156,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15156,(1),null);
var G__15157_15168 = v;
var G__15158_15169 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__15157_15168,G__15158_15169) : f.call(null,G__15157_15168,G__15158_15169));

var G__15170 = seq__15152;
var G__15171 = chunk__15153;
var G__15172 = count__15154;
var G__15173 = (i__15155 + (1));
seq__15152 = G__15170;
chunk__15153 = G__15171;
count__15154 = G__15172;
i__15155 = G__15173;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__15152);
if(temp__4126__auto__){
var seq__15152__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15152__$1)){
var c__4425__auto__ = cljs.core.chunk_first(seq__15152__$1);
var G__15174 = cljs.core.chunk_rest(seq__15152__$1);
var G__15175 = c__4425__auto__;
var G__15176 = cljs.core.count(c__4425__auto__);
var G__15177 = (0);
seq__15152 = G__15174;
chunk__15153 = G__15175;
count__15154 = G__15176;
i__15155 = G__15177;
continue;
} else {
var vec__15159 = cljs.core.first(seq__15152__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15159,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15159,(1),null);
var G__15160_15178 = v;
var G__15161_15179 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__15160_15178,G__15161_15179) : f.call(null,G__15160_15178,G__15161_15179));

var G__15180 = cljs.core.next(seq__15152__$1);
var G__15181 = null;
var G__15182 = (0);
var G__15183 = (0);
seq__15152 = G__15180;
chunk__15153 = G__15181;
count__15154 = G__15182;
i__15155 = G__15183;
continue;
}
} else {
return null;
}
}
break;
}
});

cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,k,null);
});

cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
var coll__$1 = this;
if((k == null)){
if(self__.has_nil_QMARK_){
return self__.nil_val;
} else {
return not_found;
}
} else {
if((self__.root == null)){
return not_found;
} else {
return self__.root.inode_lookup((0),cljs.core.hash(k),k,not_found);

}
}
});

cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var self__ = this;
var coll__$1 = this;
var init__$1 = ((self__.has_nil_QMARK_)?(function (){var G__15162 = init;
var G__15163 = null;
var G__15164 = self__.nil_val;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__15162,G__15163,G__15164) : f.call(null,G__15162,G__15163,G__15164));
})():init);
if(cljs.core.reduced_QMARK_(init__$1)){
var G__15165 = init__$1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15165) : cljs.core.deref.call(null,G__15165));
} else {
if(!((self__.root == null))){
return self__.root.kv_reduce(f,init__$1);
} else {
return init__$1;

}
}
});

cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.PersistentHashMap.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.PersistentHashMap(self__.meta,self__.cnt,self__.root,self__.has_nil_QMARK_,self__.nil_val,self__.__hash));
});

cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.cnt;
});

cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4059__auto__ = self__.__hash;
if(!((h__4059__auto__ == null))){
return h__4059__auto__;
} else {
var h__4059__auto____$1 = cljs.core.hash_unordered_coll(coll__$1);
self__.__hash = h__4059__auto____$1;

return h__4059__auto____$1;
}
});

cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_map(coll__$1,other);
});

cljs.core.PersistentHashMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.TransientHashMap((function (){var obj15167 = {};
return obj15167;
})(),self__.root,self__.cnt,self__.has_nil_QMARK_,self__.nil_val));
});

cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core._with_meta(cljs.core.PersistentHashMap.EMPTY,self__.meta);
});

cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
if((k == null)){
if(self__.has_nil_QMARK_){
return (new cljs.core.PersistentHashMap(self__.meta,(self__.cnt - (1)),self__.root,false,null,null));
} else {
return coll__$1;
}
} else {
if((self__.root == null)){
return coll__$1;
} else {
var new_root = self__.root.inode_without((0),cljs.core.hash(k),k);
if((new_root === self__.root)){
return coll__$1;
} else {
return (new cljs.core.PersistentHashMap(self__.meta,(self__.cnt - (1)),new_root,self__.has_nil_QMARK_,self__.nil_val,null));
}

}
}
});

cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var self__ = this;
var coll__$1 = this;
if((k == null)){
if((self__.has_nil_QMARK_) && ((v === self__.nil_val))){
return coll__$1;
} else {
return (new cljs.core.PersistentHashMap(self__.meta,((self__.has_nil_QMARK_)?self__.cnt:(self__.cnt + (1))),self__.root,true,v,null));
}
} else {
var added_leaf_QMARK_ = (new cljs.core.Box(false));
var new_root = (((self__.root == null))?cljs.core.BitmapIndexedNode.EMPTY:self__.root).inode_assoc((0),cljs.core.hash(k),k,v,added_leaf_QMARK_);
if((new_root === self__.root)){
return coll__$1;
} else {
return (new cljs.core.PersistentHashMap(self__.meta,((added_leaf_QMARK_.val)?(self__.cnt + (1)):self__.cnt),new_root,self__.has_nil_QMARK_,self__.nil_val,null));
}
}
});

cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
if((k == null)){
return self__.has_nil_QMARK_;
} else {
if((self__.root == null)){
return false;
} else {
return !((self__.root.inode_lookup((0),cljs.core.hash(k),k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel));

}
}
});

cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.cnt > (0))){
var s = ((!((self__.root == null)))?self__.root.inode_seq():null);
if(self__.has_nil_QMARK_){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,self__.nil_val], null),s);
} else {
return s;
}
} else {
return null;
}
});

cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentHashMap(meta__$1,self__.cnt,self__.root,self__.has_nil_QMARK_,self__.nil_val,self__.__hash));
});

cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var self__ = this;
var coll__$1 = this;
if(cljs.core.vector_QMARK_(entry)){
return cljs.core._assoc(coll__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(1)));
} else {
var ret = coll__$1;
var es = cljs.core.seq(entry);
while(true){
if((es == null)){
return ret;
} else {
var e = cljs.core.first(es);
if(cljs.core.vector_QMARK_(e)){
var G__15184 = cljs.core._assoc(ret,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(e,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(e,(1)));
var G__15185 = cljs.core.next(es);
ret = G__15184;
es = G__15185;
continue;
} else {
throw (new Error("conj on a map takes map entries or seqables of map entries"));
}
}
break;
}
}
});

cljs.core.PersistentHashMap.prototype.call = (function() {
var G__15186 = null;
var G__15186__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__15186__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__15186 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__15186__2.call(this,self__,k);
case 3:
return G__15186__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15186.cljs$core$IFn$_invoke$arity$2 = G__15186__2;
G__15186.cljs$core$IFn$_invoke$arity$3 = G__15186__3;
return G__15186;
})()
;

cljs.core.PersistentHashMap.prototype.apply = (function (self__,args15149){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args15149)));
});

cljs.core.PersistentHashMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});

cljs.core.PersistentHashMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});

cljs.core.PersistentHashMap.cljs$lang$type = true;

cljs.core.PersistentHashMap.cljs$lang$ctorStr = "cljs.core/PersistentHashMap";

cljs.core.PersistentHashMap.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write(writer__4226__auto__,"cljs.core/PersistentHashMap");
});

cljs.core.__GT_PersistentHashMap = (function __GT_PersistentHashMap(meta,cnt,root,has_nil_QMARK_,nil_val,__hash){
return (new cljs.core.PersistentHashMap(meta,cnt,root,has_nil_QMARK_,nil_val,__hash));
});

cljs.core.PersistentHashMap.EMPTY = (new cljs.core.PersistentHashMap(null,(0),null,false,null,(0)));
cljs.core.PersistentHashMap.fromArrays = (function (ks,vs){
var len = ks.length;
var i = (0);
var out = cljs.core.transient$(cljs.core.PersistentHashMap.EMPTY);
while(true){
if((i < len)){
var G__15187 = (i + (1));
var G__15188 = out.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(null,(ks[i]),(vs[i]));
i = G__15187;
out = G__15188;
continue;
} else {
return cljs.core.persistent_BANG_(out);
}
break;
}
});
(cljs.core.PersistentHashMap.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4616__auto__ = this;
return cljs.core.es6_iterator(this__4616__auto__);
}));

/**
* @constructor
*/
cljs.core.TransientHashMap = (function (edit,root,count,has_nil_QMARK_,nil_val){
this.edit = edit;
this.root = root;
this.count = count;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.cljs$lang$protocol_mask$partition1$ = 56;
this.cljs$lang$protocol_mask$partition0$ = 258;
})
cljs.core.TransientHashMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var self__ = this;
var tcoll__$1 = this;
return tcoll__$1.without_BANG_(key);
});

cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var self__ = this;
var tcoll__$1 = this;
return tcoll__$1.assoc_BANG_(key,val);
});

cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,val){
var self__ = this;
var tcoll__$1 = this;
return tcoll__$1.conj_BANG_(val);
});

cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var self__ = this;
var tcoll__$1 = this;
return tcoll__$1.persistent_BANG_();
});

cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var self__ = this;
var tcoll__$1 = this;
if((k == null)){
if(self__.has_nil_QMARK_){
return self__.nil_val;
} else {
return null;
}
} else {
if((self__.root == null)){
return null;
} else {
return self__.root.inode_lookup((0),cljs.core.hash(k),k);
}
}
});

cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var self__ = this;
var tcoll__$1 = this;
if((k == null)){
if(self__.has_nil_QMARK_){
return self__.nil_val;
} else {
return not_found;
}
} else {
if((self__.root == null)){
return not_found;
} else {
return self__.root.inode_lookup((0),cljs.core.hash(k),k,not_found);
}
}
});

cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if(self__.edit){
return self__.count;
} else {
throw (new Error("count after persistent!"));
}
});

cljs.core.TransientHashMap.prototype.conj_BANG_ = (function (o){
var self__ = this;
var tcoll = this;
if(self__.edit){
if((function (){var G__15189 = o;
if(G__15189){
var bit__4319__auto__ = (G__15189.cljs$lang$protocol_mask$partition0$ & (2048));
if((bit__4319__auto__) || (G__15189.cljs$core$IMapEntry$)){
return true;
} else {
if((!G__15189.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IMapEntry,G__15189);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IMapEntry,G__15189);
}
})()){
return tcoll.assoc_BANG_((function (){var G__15190 = o;
return (cljs.core.key.cljs$core$IFn$_invoke$arity$1 ? cljs.core.key.cljs$core$IFn$_invoke$arity$1(G__15190) : cljs.core.key.call(null,G__15190));
})(),(function (){var G__15191 = o;
return (cljs.core.val.cljs$core$IFn$_invoke$arity$1 ? cljs.core.val.cljs$core$IFn$_invoke$arity$1(G__15191) : cljs.core.val.call(null,G__15191));
})());
} else {
var es = cljs.core.seq(o);
var tcoll__$1 = tcoll;
while(true){
var temp__4124__auto__ = cljs.core.first(es);
if(cljs.core.truth_(temp__4124__auto__)){
var e = temp__4124__auto__;
var G__15194 = cljs.core.next(es);
var G__15195 = tcoll__$1.assoc_BANG_((function (){var G__15192 = e;
return (cljs.core.key.cljs$core$IFn$_invoke$arity$1 ? cljs.core.key.cljs$core$IFn$_invoke$arity$1(G__15192) : cljs.core.key.call(null,G__15192));
})(),(function (){var G__15193 = e;
return (cljs.core.val.cljs$core$IFn$_invoke$arity$1 ? cljs.core.val.cljs$core$IFn$_invoke$arity$1(G__15193) : cljs.core.val.call(null,G__15193));
})());
es = G__15194;
tcoll__$1 = G__15195;
continue;
} else {
return tcoll__$1;
}
break;
}
}
} else {
throw (new Error("conj! after persistent"));
}
});

cljs.core.TransientHashMap.prototype.assoc_BANG_ = (function (k,v){
var self__ = this;
var tcoll = this;
if(self__.edit){
if((k == null)){
if((self__.nil_val === v)){
} else {
self__.nil_val = v;
}

if(self__.has_nil_QMARK_){
} else {
self__.count = (self__.count + (1));

self__.has_nil_QMARK_ = true;
}

return tcoll;
} else {
var added_leaf_QMARK_ = (new cljs.core.Box(false));
var node = (((self__.root == null))?cljs.core.BitmapIndexedNode.EMPTY:self__.root).inode_assoc_BANG_(self__.edit,(0),cljs.core.hash(k),k,v,added_leaf_QMARK_);
if((node === self__.root)){
} else {
self__.root = node;
}

if(added_leaf_QMARK_.val){
self__.count = (self__.count + (1));
} else {
}

return tcoll;
}
} else {
throw (new Error("assoc! after persistent!"));
}
});

cljs.core.TransientHashMap.prototype.without_BANG_ = (function (k){
var self__ = this;
var tcoll = this;
if(self__.edit){
if((k == null)){
if(self__.has_nil_QMARK_){
self__.has_nil_QMARK_ = false;

self__.nil_val = null;

self__.count = (self__.count - (1));

return tcoll;
} else {
return tcoll;
}
} else {
if((self__.root == null)){
return tcoll;
} else {
var removed_leaf_QMARK_ = (new cljs.core.Box(false));
var node = self__.root.inode_without_BANG_(self__.edit,(0),cljs.core.hash(k),k,removed_leaf_QMARK_);
if((node === self__.root)){
} else {
self__.root = node;
}

if(cljs.core.truth_((removed_leaf_QMARK_[(0)]))){
self__.count = (self__.count - (1));
} else {
}

return tcoll;
}
}
} else {
throw (new Error("dissoc! after persistent!"));
}
});

cljs.core.TransientHashMap.prototype.persistent_BANG_ = (function (){
var self__ = this;
var tcoll = this;
if(self__.edit){
self__.edit = null;

return (new cljs.core.PersistentHashMap(null,self__.count,self__.root,self__.has_nil_QMARK_,self__.nil_val,null));
} else {
throw (new Error("persistent! called twice"));
}
});

cljs.core.TransientHashMap.cljs$lang$type = true;

cljs.core.TransientHashMap.cljs$lang$ctorStr = "cljs.core/TransientHashMap";

cljs.core.TransientHashMap.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write(writer__4226__auto__,"cljs.core/TransientHashMap");
});

cljs.core.__GT_TransientHashMap = (function __GT_TransientHashMap(edit,root,count,has_nil_QMARK_,nil_val){
return (new cljs.core.TransientHashMap(edit,root,count,has_nil_QMARK_,nil_val));
});

cljs.core.tree_map_seq_push = (function tree_map_seq_push(node,stack,ascending_QMARK_){
var t = node;
var stack__$1 = stack;
while(true){
if(!((t == null))){
var G__15196 = ((ascending_QMARK_)?t.left:t.right);
var G__15197 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack__$1,t);
t = G__15196;
stack__$1 = G__15197;
continue;
} else {
return stack__$1;
}
break;
}
});

/**
* @constructor
*/
cljs.core.PersistentTreeMapSeq = (function (meta,stack,ascending_QMARK_,cnt,__hash){
this.meta = meta;
this.stack = stack;
this.ascending_QMARK_ = ascending_QMARK_;
this.cnt = cnt;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32374862;
})
cljs.core.PersistentTreeMapSeq.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.PersistentTreeMapSeq.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.cnt < (0))){
return (cljs.core.count(cljs.core.next(coll__$1)) + (1));
} else {
return self__.cnt;
}
});

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4059__auto__ = self__.__hash;
if(!((h__4059__auto__ == null))){
return h__4059__auto__;
} else {
var h__4059__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__4059__auto____$1;

return h__4059__auto____$1;
}
});

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.peek(self__.stack);
});

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var t = cljs.core.first(self__.stack);
var next_stack = cljs.core.tree_map_seq_push(((self__.ascending_QMARK_)?t.right:t.left),cljs.core.next(self__.stack),self__.ascending_QMARK_);
if(!((next_stack == null))){
return (new cljs.core.PersistentTreeMapSeq(null,next_stack,self__.ascending_QMARK_,(self__.cnt - (1)),null));
} else {
return cljs.core.List.EMPTY;
}
});

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
});

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentTreeMapSeq(meta__$1,self__.stack,self__.ascending_QMARK_,self__.cnt,self__.__hash));
});

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return cljs.core.cons(o,coll__$1);
});

cljs.core.PersistentTreeMapSeq.cljs$lang$type = true;

cljs.core.PersistentTreeMapSeq.cljs$lang$ctorStr = "cljs.core/PersistentTreeMapSeq";

cljs.core.PersistentTreeMapSeq.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write(writer__4226__auto__,"cljs.core/PersistentTreeMapSeq");
});

cljs.core.__GT_PersistentTreeMapSeq = (function __GT_PersistentTreeMapSeq(meta,stack,ascending_QMARK_,cnt,__hash){
return (new cljs.core.PersistentTreeMapSeq(meta,stack,ascending_QMARK_,cnt,__hash));
});

(cljs.core.PersistentTreeMapSeq.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4616__auto__ = this;
return cljs.core.es6_iterator(this__4616__auto__);
}));
cljs.core.create_tree_map_seq = (function create_tree_map_seq(tree,ascending_QMARK_,cnt){
return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.tree_map_seq_push(tree,null,ascending_QMARK_),ascending_QMARK_,cnt,null));
});

cljs.core.balance_left = (function balance_left(key,val,ins,right){
if((ins instanceof cljs.core.RedNode)){
if((ins.left instanceof cljs.core.RedNode)){
return (new cljs.core.RedNode(ins.key,ins.val,ins.left.blacken(),(new cljs.core.BlackNode(key,val,ins.right,right,null)),null));
} else {
if((ins.right instanceof cljs.core.RedNode)){
return (new cljs.core.RedNode(ins.right.key,ins.right.val,(new cljs.core.BlackNode(ins.key,ins.val,ins.left,ins.right.left,null)),(new cljs.core.BlackNode(key,val,ins.right.right,right,null)),null));
} else {
return (new cljs.core.BlackNode(key,val,ins,right,null));

}
}
} else {
return (new cljs.core.BlackNode(key,val,ins,right,null));
}
});
cljs.core.balance_right = (function balance_right(key,val,left,ins){
if((ins instanceof cljs.core.RedNode)){
if((ins.right instanceof cljs.core.RedNode)){
return (new cljs.core.RedNode(ins.key,ins.val,(new cljs.core.BlackNode(key,val,left,ins.left,null)),ins.right.blacken(),null));
} else {
if((ins.left instanceof cljs.core.RedNode)){
return (new cljs.core.RedNode(ins.left.key,ins.left.val,(new cljs.core.BlackNode(key,val,left,ins.left.left,null)),(new cljs.core.BlackNode(ins.key,ins.val,ins.left.right,ins.right,null)),null));
} else {
return (new cljs.core.BlackNode(key,val,left,ins,null));

}
}
} else {
return (new cljs.core.BlackNode(key,val,left,ins,null));
}
});
cljs.core.balance_left_del = (function balance_left_del(key,val,del,right){
if((del instanceof cljs.core.RedNode)){
return (new cljs.core.RedNode(key,val,del.blacken(),right,null));
} else {
if((right instanceof cljs.core.BlackNode)){
return cljs.core.balance_right(key,val,del,right.redden());
} else {
if(((right instanceof cljs.core.RedNode)) && ((right.left instanceof cljs.core.BlackNode))){
return (new cljs.core.RedNode(right.left.key,right.left.val,(new cljs.core.BlackNode(key,val,del,right.left.left,null)),cljs.core.balance_right(right.key,right.val,right.left.right,right.right.redden()),null));
} else {
throw (new Error("red-black tree invariant violation"));

}
}
}
});
cljs.core.balance_right_del = (function balance_right_del(key,val,left,del){
if((del instanceof cljs.core.RedNode)){
return (new cljs.core.RedNode(key,val,left,del.blacken(),null));
} else {
if((left instanceof cljs.core.BlackNode)){
return cljs.core.balance_left(key,val,left.redden(),del);
} else {
if(((left instanceof cljs.core.RedNode)) && ((left.right instanceof cljs.core.BlackNode))){
return (new cljs.core.RedNode(left.right.key,left.right.val,cljs.core.balance_left(left.key,left.val,left.left.redden(),left.right.left),(new cljs.core.BlackNode(key,val,left.right.right,del,null)),null));
} else {
throw (new Error("red-black tree invariant violation"));

}
}
}
});
cljs.core.tree_map_kv_reduce = (function tree_map_kv_reduce(node,f,init){
var init__$1 = ((!((node.left == null)))?tree_map_kv_reduce(node.left,f,init):init);
if(cljs.core.reduced_QMARK_(init__$1)){
var G__15210 = init__$1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15210) : cljs.core.deref.call(null,G__15210));
} else {
var init__$2 = (function (){var G__15211 = init__$1;
var G__15212 = node.key;
var G__15213 = node.val;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__15211,G__15212,G__15213) : f.call(null,G__15211,G__15212,G__15213));
})();
if(cljs.core.reduced_QMARK_(init__$2)){
var G__15214 = init__$2;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15214) : cljs.core.deref.call(null,G__15214));
} else {
var init__$3 = ((!((node.right == null)))?tree_map_kv_reduce(node.right,f,init__$2):init__$2);
if(cljs.core.reduced_QMARK_(init__$3)){
var G__15215 = init__$3;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15215) : cljs.core.deref.call(null,G__15215));
} else {
return init__$3;
}
}
}
});

/**
* @constructor
*/
cljs.core.BlackNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32402207;
})
cljs.core.BlackNode.prototype.add_right = (function (ins){
var self__ = this;
var node = this;
return ins.balance_right(node);
});

cljs.core.BlackNode.prototype.redden = (function (){
var self__ = this;
var node = this;
return (new cljs.core.RedNode(self__.key,self__.val,self__.left,self__.right,null));
});

cljs.core.BlackNode.prototype.blacken = (function (){
var self__ = this;
var node = this;
return node;
});

cljs.core.BlackNode.prototype.add_left = (function (ins){
var self__ = this;
var node = this;
return ins.balance_left(node);
});

cljs.core.BlackNode.prototype.replace = (function (key__$1,val__$1,left__$1,right__$1){
var self__ = this;
var node = this;
return (new cljs.core.BlackNode(key__$1,val__$1,left__$1,right__$1,null));
});

cljs.core.BlackNode.prototype.balance_left = (function (parent){
var self__ = this;
var node = this;
return (new cljs.core.BlackNode(parent.key,parent.val,node,parent.right,null));
});

cljs.core.BlackNode.prototype.balance_right = (function (parent){
var self__ = this;
var node = this;
return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node,null));
});

cljs.core.BlackNode.prototype.remove_left = (function (del){
var self__ = this;
var node = this;
return cljs.core.balance_left_del(self__.key,self__.val,del,self__.right);
});

cljs.core.BlackNode.prototype.kv_reduce = (function (f,init){
var self__ = this;
var node = this;
return cljs.core.tree_map_kv_reduce(node,f,init);
});

cljs.core.BlackNode.prototype.remove_right = (function (del){
var self__ = this;
var node = this;
return cljs.core.balance_right_del(self__.key,self__.val,self__.left,del);
});

cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var self__ = this;
var node__$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(node__$1,k,null);
});

cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var self__ = this;
var node__$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(node__$1,k,not_found);
});

cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var self__ = this;
var node__$1 = this;
if((n === (0))){
return self__.key;
} else {
if((n === (1))){
return self__.val;
} else {
return null;

}
}
});

cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){
var self__ = this;
var node__$1 = this;
if((n === (0))){
return self__.key;
} else {
if((n === (1))){
return self__.val;
} else {
return not_found;

}
}
});

cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var self__ = this;
var node__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val], null).cljs$core$IVector$_assoc_n$arity$3(null,n,v);
});

cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return null;
});

cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return (2);
});

cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return self__.key;
});

cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return self__.val;
});

cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return self__.val;
});

cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key], null);
});

cljs.core.BlackNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4059__auto__ = self__.__hash;
if(!((h__4059__auto__ == null))){
return h__4059__auto__;
} else {
var h__4059__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__4059__auto____$1;

return h__4059__auto____$1;
}
});

cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.BlackNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return cljs.core.PersistentVector.EMPTY;
});

cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var self__ = this;
var node__$1 = this;
return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2(node__$1,f);
});

cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var self__ = this;
var node__$1 = this;
return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$3(node__$1,f,start);
});

cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var self__ = this;
var node__$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val], null),k,v);
});

cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,self__.val),self__.key);
});

cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var self__ = this;
var node__$1 = this;
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val], null),meta);
});

cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var self__ = this;
var node__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val,o], null);
});

cljs.core.BlackNode.prototype.call = (function() {
var G__15217 = null;
var G__15217__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var node = self____$1;
return node.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__15217__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var node = self____$1;
return node.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__15217 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__15217__2.call(this,self__,k);
case 3:
return G__15217__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15217.cljs$core$IFn$_invoke$arity$2 = G__15217__2;
G__15217.cljs$core$IFn$_invoke$arity$3 = G__15217__3;
return G__15217;
})()
;

cljs.core.BlackNode.prototype.apply = (function (self__,args15216){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args15216)));
});

cljs.core.BlackNode.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var node = this;
return node.cljs$core$ILookup$_lookup$arity$2(null,k);
});

cljs.core.BlackNode.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var node = this;
return node.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});

cljs.core.BlackNode.cljs$lang$type = true;

cljs.core.BlackNode.cljs$lang$ctorStr = "cljs.core/BlackNode";

cljs.core.BlackNode.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write(writer__4226__auto__,"cljs.core/BlackNode");
});

cljs.core.__GT_BlackNode = (function __GT_BlackNode(key,val,left,right,__hash){
return (new cljs.core.BlackNode(key,val,left,right,__hash));
});

(cljs.core.BlackNode.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4616__auto__ = this;
return cljs.core.es6_iterator(this__4616__auto__);
}));

/**
* @constructor
*/
cljs.core.RedNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32402207;
})
cljs.core.RedNode.prototype.add_right = (function (ins){
var self__ = this;
var node = this;
return (new cljs.core.RedNode(self__.key,self__.val,self__.left,ins,null));
});

cljs.core.RedNode.prototype.redden = (function (){
var self__ = this;
var node = this;
throw (new Error("red-black tree invariant violation"));
});

cljs.core.RedNode.prototype.blacken = (function (){
var self__ = this;
var node = this;
return (new cljs.core.BlackNode(self__.key,self__.val,self__.left,self__.right,null));
});

cljs.core.RedNode.prototype.add_left = (function (ins){
var self__ = this;
var node = this;
return (new cljs.core.RedNode(self__.key,self__.val,ins,self__.right,null));
});

cljs.core.RedNode.prototype.replace = (function (key__$1,val__$1,left__$1,right__$1){
var self__ = this;
var node = this;
return (new cljs.core.RedNode(key__$1,val__$1,left__$1,right__$1,null));
});

cljs.core.RedNode.prototype.balance_left = (function (parent){
var self__ = this;
var node = this;
if((self__.left instanceof cljs.core.RedNode)){
return (new cljs.core.RedNode(self__.key,self__.val,self__.left.blacken(),(new cljs.core.BlackNode(parent.key,parent.val,self__.right,parent.right,null)),null));
} else {
if((self__.right instanceof cljs.core.RedNode)){
return (new cljs.core.RedNode(self__.right.key,self__.right.val,(new cljs.core.BlackNode(self__.key,self__.val,self__.left,self__.right.left,null)),(new cljs.core.BlackNode(parent.key,parent.val,self__.right.right,parent.right,null)),null));
} else {
return (new cljs.core.BlackNode(parent.key,parent.val,node,parent.right,null));

}
}
});

cljs.core.RedNode.prototype.balance_right = (function (parent){
var self__ = this;
var node = this;
if((self__.right instanceof cljs.core.RedNode)){
return (new cljs.core.RedNode(self__.key,self__.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,self__.left,null)),self__.right.blacken(),null));
} else {
if((self__.left instanceof cljs.core.RedNode)){
return (new cljs.core.RedNode(self__.left.key,self__.left.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,self__.left.left,null)),(new cljs.core.BlackNode(self__.key,self__.val,self__.left.right,self__.right,null)),null));
} else {
return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node,null));

}
}
});

cljs.core.RedNode.prototype.remove_left = (function (del){
var self__ = this;
var node = this;
return (new cljs.core.RedNode(self__.key,self__.val,del,self__.right,null));
});

cljs.core.RedNode.prototype.kv_reduce = (function (f,init){
var self__ = this;
var node = this;
return cljs.core.tree_map_kv_reduce(node,f,init);
});

cljs.core.RedNode.prototype.remove_right = (function (del){
var self__ = this;
var node = this;
return (new cljs.core.RedNode(self__.key,self__.val,self__.left,del,null));
});

cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var self__ = this;
var node__$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(node__$1,k,null);
});

cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var self__ = this;
var node__$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(node__$1,k,not_found);
});

cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var self__ = this;
var node__$1 = this;
if((n === (0))){
return self__.key;
} else {
if((n === (1))){
return self__.val;
} else {
return null;

}
}
});

cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){
var self__ = this;
var node__$1 = this;
if((n === (0))){
return self__.key;
} else {
if((n === (1))){
return self__.val;
} else {
return not_found;

}
}
});

cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var self__ = this;
var node__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val], null).cljs$core$IVector$_assoc_n$arity$3(null,n,v);
});

cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return null;
});

cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return (2);
});

cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return self__.key;
});

cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return self__.val;
});

cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return self__.val;
});

cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key], null);
});

cljs.core.RedNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4059__auto__ = self__.__hash;
if(!((h__4059__auto__ == null))){
return h__4059__auto__;
} else {
var h__4059__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__4059__auto____$1;

return h__4059__auto____$1;
}
});

cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.RedNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return cljs.core.PersistentVector.EMPTY;
});

cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var self__ = this;
var node__$1 = this;
return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2(node__$1,f);
});

cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var self__ = this;
var node__$1 = this;
return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$3(node__$1,f,start);
});

cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var self__ = this;
var node__$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val], null),k,v);
});

cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,self__.val),self__.key);
});

cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var self__ = this;
var node__$1 = this;
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val], null),meta);
});

cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var self__ = this;
var node__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val,o], null);
});

cljs.core.RedNode.prototype.call = (function() {
var G__15219 = null;
var G__15219__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var node = self____$1;
return node.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__15219__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var node = self____$1;
return node.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__15219 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__15219__2.call(this,self__,k);
case 3:
return G__15219__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15219.cljs$core$IFn$_invoke$arity$2 = G__15219__2;
G__15219.cljs$core$IFn$_invoke$arity$3 = G__15219__3;
return G__15219;
})()
;

cljs.core.RedNode.prototype.apply = (function (self__,args15218){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args15218)));
});

cljs.core.RedNode.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var node = this;
return node.cljs$core$ILookup$_lookup$arity$2(null,k);
});

cljs.core.RedNode.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var node = this;
return node.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});

cljs.core.RedNode.cljs$lang$type = true;

cljs.core.RedNode.cljs$lang$ctorStr = "cljs.core/RedNode";

cljs.core.RedNode.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write(writer__4226__auto__,"cljs.core/RedNode");
});

cljs.core.__GT_RedNode = (function __GT_RedNode(key,val,left,right,__hash){
return (new cljs.core.RedNode(key,val,left,right,__hash));
});

(cljs.core.RedNode.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4616__auto__ = this;
return cljs.core.es6_iterator(this__4616__auto__);
}));
cljs.core.tree_map_add = (function tree_map_add(comp,tree,k,v,found){
if((tree == null)){
return (new cljs.core.RedNode(k,v,null,null,null));
} else {
var c = (function (){var G__15232 = k;
var G__15233 = tree.key;
return (comp.cljs$core$IFn$_invoke$arity$2 ? comp.cljs$core$IFn$_invoke$arity$2(G__15232,G__15233) : comp.call(null,G__15232,G__15233));
})();
if((c === (0))){
(found[(0)] = tree);

return null;
} else {
if((c < (0))){
var ins = tree_map_add(comp,tree.left,k,v,found);
if(!((ins == null))){
return tree.add_left(ins);
} else {
return null;
}
} else {
var ins = tree_map_add(comp,tree.right,k,v,found);
if(!((ins == null))){
return tree.add_right(ins);
} else {
return null;
}

}
}
}
});
cljs.core.tree_map_append = (function tree_map_append(left,right){
if((left == null)){
return right;
} else {
if((right == null)){
return left;
} else {
if((left instanceof cljs.core.RedNode)){
if((right instanceof cljs.core.RedNode)){
var app = tree_map_append(left.right,right.left);
if((app instanceof cljs.core.RedNode)){
return (new cljs.core.RedNode(app.key,app.val,(new cljs.core.RedNode(left.key,left.val,left.left,app.left,null)),(new cljs.core.RedNode(right.key,right.val,app.right,right.right,null)),null));
} else {
return (new cljs.core.RedNode(left.key,left.val,left.left,(new cljs.core.RedNode(right.key,right.val,app,right.right,null)),null));
}
} else {
return (new cljs.core.RedNode(left.key,left.val,left.left,tree_map_append(left.right,right),null));
}
} else {
if((right instanceof cljs.core.RedNode)){
return (new cljs.core.RedNode(right.key,right.val,tree_map_append(left,right.left),right.right,null));
} else {
var app = tree_map_append(left.right,right.left);
if((app instanceof cljs.core.RedNode)){
return (new cljs.core.RedNode(app.key,app.val,(new cljs.core.BlackNode(left.key,left.val,left.left,app.left,null)),(new cljs.core.BlackNode(right.key,right.val,app.right,right.right,null)),null));
} else {
return cljs.core.balance_left_del(left.key,left.val,left.left,(new cljs.core.BlackNode(right.key,right.val,app,right.right,null)));
}

}
}
}
}
});
cljs.core.tree_map_remove = (function tree_map_remove(comp,tree,k,found){
if(!((tree == null))){
var c = (function (){var G__15252 = k;
var G__15253 = tree.key;
return (comp.cljs$core$IFn$_invoke$arity$2 ? comp.cljs$core$IFn$_invoke$arity$2(G__15252,G__15253) : comp.call(null,G__15252,G__15253));
})();
if((c === (0))){
(found[(0)] = tree);

return cljs.core.tree_map_append(tree.left,tree.right);
} else {
if((c < (0))){
var del = tree_map_remove(comp,tree.left,k,found);
if((!((del == null))) || (!(((found[(0)]) == null)))){
if((tree.left instanceof cljs.core.BlackNode)){
return cljs.core.balance_left_del(tree.key,tree.val,del,tree.right);
} else {
return (new cljs.core.RedNode(tree.key,tree.val,del,tree.right,null));
}
} else {
return null;
}
} else {
var del = tree_map_remove(comp,tree.right,k,found);
if((!((del == null))) || (!(((found[(0)]) == null)))){
if((tree.right instanceof cljs.core.BlackNode)){
return cljs.core.balance_right_del(tree.key,tree.val,tree.left,del);
} else {
return (new cljs.core.RedNode(tree.key,tree.val,tree.left,del,null));
}
} else {
return null;
}

}
}
} else {
return null;
}
});
cljs.core.tree_map_replace = (function tree_map_replace(comp,tree,k,v){
var tk = tree.key;
var c = (function (){var G__15264 = k;
var G__15265 = tk;
return (comp.cljs$core$IFn$_invoke$arity$2 ? comp.cljs$core$IFn$_invoke$arity$2(G__15264,G__15265) : comp.call(null,G__15264,G__15265));
})();
if((c === (0))){
return tree.replace(tk,v,tree.left,tree.right);
} else {
if((c < (0))){
return tree.replace(tk,tree.val,tree_map_replace(comp,tree.left,k,v),tree.right);
} else {
return tree.replace(tk,tree.val,tree.left,tree_map_replace(comp,tree.right,k,v));

}
}
});

/**
* @constructor
*/
cljs.core.PersistentTreeMap = (function (comp,tree,cnt,meta,__hash){
this.comp = comp;
this.tree = tree;
this.cnt = cnt;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 418776847;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.PersistentTreeMap.prototype.forEach = (function (f){
var self__ = this;
var coll = this;
var seq__15267 = cljs.core.seq(coll);
var chunk__15268 = null;
var count__15269 = (0);
var i__15270 = (0);
while(true){
if((i__15270 < count__15269)){
var vec__15271 = chunk__15268.cljs$core$IIndexed$_nth$arity$2(null,i__15270);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15271,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15271,(1),null);
var G__15272_15284 = v;
var G__15273_15285 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__15272_15284,G__15273_15285) : f.call(null,G__15272_15284,G__15273_15285));

var G__15286 = seq__15267;
var G__15287 = chunk__15268;
var G__15288 = count__15269;
var G__15289 = (i__15270 + (1));
seq__15267 = G__15286;
chunk__15268 = G__15287;
count__15269 = G__15288;
i__15270 = G__15289;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__15267);
if(temp__4126__auto__){
var seq__15267__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15267__$1)){
var c__4425__auto__ = cljs.core.chunk_first(seq__15267__$1);
var G__15290 = cljs.core.chunk_rest(seq__15267__$1);
var G__15291 = c__4425__auto__;
var G__15292 = cljs.core.count(c__4425__auto__);
var G__15293 = (0);
seq__15267 = G__15290;
chunk__15268 = G__15291;
count__15269 = G__15292;
i__15270 = G__15293;
continue;
} else {
var vec__15274 = cljs.core.first(seq__15267__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15274,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15274,(1),null);
var G__15275_15294 = v;
var G__15276_15295 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__15275_15294,G__15276_15295) : f.call(null,G__15275_15294,G__15276_15295));

var G__15296 = cljs.core.next(seq__15267__$1);
var G__15297 = null;
var G__15298 = (0);
var G__15299 = (0);
seq__15267 = G__15296;
chunk__15268 = G__15297;
count__15269 = G__15298;
i__15270 = G__15299;
continue;
}
} else {
return null;
}
}
break;
}
});

cljs.core.PersistentTreeMap.prototype.get = (function (k){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});

cljs.core.PersistentTreeMap.prototype.entries = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_entries_iterator(cljs.core.seq(coll));
});

cljs.core.PersistentTreeMap.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.PersistentTreeMap.prototype.keys = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_iterator((function (){var G__15277 = coll;
return (cljs.core.keys.cljs$core$IFn$_invoke$arity$1 ? cljs.core.keys.cljs$core$IFn$_invoke$arity$1(G__15277) : cljs.core.keys.call(null,G__15277));
})());
});

cljs.core.PersistentTreeMap.prototype.values = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_iterator((function (){var G__15278 = coll;
return (cljs.core.vals.cljs$core$IFn$_invoke$arity$1 ? cljs.core.vals.cljs$core$IFn$_invoke$arity$1(G__15278) : cljs.core.vals.call(null,G__15278));
})());
});

cljs.core.PersistentTreeMap.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.PersistentTreeMap.prototype.entry_at = (function (k){
var self__ = this;
var coll = this;
var t = self__.tree;
while(true){
if(!((t == null))){
var c = (function (){var G__15279 = k;
var G__15280 = t.key;
return (self__.comp.cljs$core$IFn$_invoke$arity$2 ? self__.comp.cljs$core$IFn$_invoke$arity$2(G__15279,G__15280) : self__.comp.call(null,G__15279,G__15280));
})();
if((c === (0))){
return t;
} else {
if((c < (0))){
var G__15300 = t.left;
t = G__15300;
continue;
} else {
var G__15301 = t.right;
t = G__15301;
continue;

}
}
} else {
return null;
}
break;
}
});

cljs.core.PersistentTreeMap.prototype.has = (function (k){
var self__ = this;
var coll = this;
return cljs.core.contains_QMARK_(coll,k);
});

cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,k,null);
});

cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
var coll__$1 = this;
var n = coll__$1.entry_at(k);
if(!((n == null))){
return n.val;
} else {
return not_found;
}
});

cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var self__ = this;
var coll__$1 = this;
if(!((self__.tree == null))){
return cljs.core.tree_map_kv_reduce(self__.tree,f,init);
} else {
return init;
}
});

cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.PersistentTreeMap.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.PersistentTreeMap(self__.comp,self__.tree,self__.cnt,self__.meta,self__.__hash));
});

cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.cnt;
});

cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.cnt > (0))){
return cljs.core.create_tree_map_seq(self__.tree,false,self__.cnt);
} else {
return null;
}
});

cljs.core.PersistentTreeMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4059__auto__ = self__.__hash;
if(!((h__4059__auto__ == null))){
return h__4059__auto__;
} else {
var h__4059__auto____$1 = cljs.core.hash_unordered_coll(coll__$1);
self__.__hash = h__4059__auto____$1;

return h__4059__auto____$1;
}
});

cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_map(coll__$1,other);
});

cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentTreeMap(self__.comp,null,(0),self__.meta,(0)));
});

cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
var found = [null];
var t = cljs.core.tree_map_remove(self__.comp,self__.tree,k,found);
if((t == null)){
if((cljs.core.nth.cljs$core$IFn$_invoke$arity$2(found,(0)) == null)){
return coll__$1;
} else {
return (new cljs.core.PersistentTreeMap(self__.comp,null,(0),self__.meta,null));
}
} else {
return (new cljs.core.PersistentTreeMap(self__.comp,t.blacken(),(self__.cnt - (1)),self__.meta,null));
}
});

cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var self__ = this;
var coll__$1 = this;
var found = [null];
var t = cljs.core.tree_map_add(self__.comp,self__.tree,k,v,found);
if((t == null)){
var found_node = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(found,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,found_node.val)){
return coll__$1;
} else {
return (new cljs.core.PersistentTreeMap(self__.comp,cljs.core.tree_map_replace(self__.comp,self__.tree,k,v),self__.cnt,self__.meta,null));
}
} else {
return (new cljs.core.PersistentTreeMap(self__.comp,t.blacken(),(self__.cnt + (1)),self__.meta,null));
}
});

cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
return !((coll__$1.entry_at(k) == null));
});

cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.cnt > (0))){
return cljs.core.create_tree_map_seq(self__.tree,true,self__.cnt);
} else {
return null;
}
});

cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentTreeMap(self__.comp,self__.tree,self__.cnt,meta__$1,self__.__hash));
});

cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var self__ = this;
var coll__$1 = this;
if(cljs.core.vector_QMARK_(entry)){
return cljs.core._assoc(coll__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(1)));
} else {
var ret = coll__$1;
var es = cljs.core.seq(entry);
while(true){
if((es == null)){
return ret;
} else {
var e = cljs.core.first(es);
if(cljs.core.vector_QMARK_(e)){
var G__15302 = cljs.core._assoc(ret,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(e,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(e,(1)));
var G__15303 = cljs.core.next(es);
ret = G__15302;
es = G__15303;
continue;
} else {
throw (new Error("conj on a map takes map entries or seqables of map entries"));
}
}
break;
}
}
});

cljs.core.PersistentTreeMap.prototype.call = (function() {
var G__15304 = null;
var G__15304__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__15304__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__15304 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__15304__2.call(this,self__,k);
case 3:
return G__15304__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15304.cljs$core$IFn$_invoke$arity$2 = G__15304__2;
G__15304.cljs$core$IFn$_invoke$arity$3 = G__15304__3;
return G__15304;
})()
;

cljs.core.PersistentTreeMap.prototype.apply = (function (self__,args15266){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args15266)));
});

cljs.core.PersistentTreeMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});

cljs.core.PersistentTreeMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});

cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var self__ = this;
var coll__$1 = this;
if((self__.cnt > (0))){
return cljs.core.create_tree_map_seq(self__.tree,ascending_QMARK_,self__.cnt);
} else {
return null;
}
});

cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var self__ = this;
var coll__$1 = this;
if((self__.cnt > (0))){
var stack = null;
var t = self__.tree;
while(true){
if(!((t == null))){
var c = (function (){var G__15281 = k;
var G__15282 = t.key;
return (self__.comp.cljs$core$IFn$_invoke$arity$2 ? self__.comp.cljs$core$IFn$_invoke$arity$2(G__15281,G__15282) : self__.comp.call(null,G__15281,G__15282));
})();
if((c === (0))){
return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,t),ascending_QMARK_,(-1),null));
} else {
if(cljs.core.truth_(ascending_QMARK_)){
if((c < (0))){
var G__15305 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,t);
var G__15306 = t.left;
stack = G__15305;
t = G__15306;
continue;
} else {
var G__15307 = stack;
var G__15308 = t.right;
stack = G__15307;
t = G__15308;
continue;
}
} else {
if((c > (0))){
var G__15309 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,t);
var G__15310 = t.right;
stack = G__15309;
t = G__15310;
continue;
} else {
var G__15311 = stack;
var G__15312 = t.left;
stack = G__15311;
t = G__15312;
continue;
}

}
}
} else {
if((stack == null)){
return null;
} else {
return (new cljs.core.PersistentTreeMapSeq(null,stack,ascending_QMARK_,(-1),null));
}
}
break;
}
} else {
return null;
}
});

cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var self__ = this;
var coll__$1 = this;
var G__15283 = entry;
return (cljs.core.key.cljs$core$IFn$_invoke$arity$1 ? cljs.core.key.cljs$core$IFn$_invoke$arity$1(G__15283) : cljs.core.key.call(null,G__15283));
});

cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.comp;
});

cljs.core.PersistentTreeMap.cljs$lang$type = true;

cljs.core.PersistentTreeMap.cljs$lang$ctorStr = "cljs.core/PersistentTreeMap";

cljs.core.PersistentTreeMap.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write(writer__4226__auto__,"cljs.core/PersistentTreeMap");
});

cljs.core.__GT_PersistentTreeMap = (function __GT_PersistentTreeMap(comp,tree,cnt,meta,__hash){
return (new cljs.core.PersistentTreeMap(comp,tree,cnt,meta,__hash));
});

cljs.core.PersistentTreeMap.EMPTY = (new cljs.core.PersistentTreeMap(cljs.core.compare,null,(0),null,(0)));
(cljs.core.PersistentTreeMap.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4616__auto__ = this;
return cljs.core.es6_iterator(this__4616__auto__);
}));
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in$ = cljs.core.seq(keyvals);
var out = cljs.core.transient$(cljs.core.PersistentHashMap.EMPTY);
while(true){
if(in$){
var G__15313 = cljs.core.nnext(in$);
var G__15314 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__15313;
out = G__15314;
continue;
} else {
return cljs.core.persistent_BANG_(out);
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;
if (arguments.length > 0) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return hash_map__delegate.call(this,keyvals);};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__15315){
var keyvals = cljs.core.seq(arglist__15315);
return hash_map__delegate(keyvals);
});
hash_map.cljs$core$IFn$_invoke$arity$variadic = hash_map__delegate;
return hash_map;
})()
;
/**
* keyval => key val
* Returns a new array map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.array_map = (function() { 
var array_map__delegate = function (keyvals){
return cljs.core.PersistentArrayMap.fromArray(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array,keyvals),true,false);
};
var array_map = function (var_args){
var keyvals = null;
if (arguments.length > 0) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return array_map__delegate.call(this,keyvals);};
array_map.cljs$lang$maxFixedArity = 0;
array_map.cljs$lang$applyTo = (function (arglist__15316){
var keyvals = cljs.core.seq(arglist__15316);
return array_map__delegate(keyvals);
});
array_map.cljs$core$IFn$_invoke$arity$variadic = array_map__delegate;
return array_map;
})()
;
/**
* keyval => key val
* Returns a new object map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.obj_map = (function() { 
var obj_map__delegate = function (keyvals){
var ks = [];
var obj = (function (){var obj15320 = {};
return obj15320;
})();
var kvs = cljs.core.seq(keyvals);
while(true){
if(kvs){
ks.push(cljs.core.first(kvs));

(obj[cljs.core.first(kvs)] = cljs.core.second(kvs));

var G__15321 = cljs.core.nnext(kvs);
kvs = G__15321;
continue;
} else {
return cljs.core.ObjMap.fromObject(ks,obj);
}
break;
}
};
var obj_map = function (var_args){
var keyvals = null;
if (arguments.length > 0) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return obj_map__delegate.call(this,keyvals);};
obj_map.cljs$lang$maxFixedArity = 0;
obj_map.cljs$lang$applyTo = (function (arglist__15322){
var keyvals = cljs.core.seq(arglist__15322);
return obj_map__delegate(keyvals);
});
obj_map.cljs$core$IFn$_invoke$arity$variadic = obj_map__delegate;
return obj_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.sorted_map = (function() { 
var sorted_map__delegate = function (keyvals){
var in$ = cljs.core.seq(keyvals);
var out = cljs.core.PersistentTreeMap.EMPTY;
while(true){
if(in$){
var G__15323 = cljs.core.nnext(in$);
var G__15324 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__15323;
out = G__15324;
continue;
} else {
return out;
}
break;
}
};
var sorted_map = function (var_args){
var keyvals = null;
if (arguments.length > 0) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return sorted_map__delegate.call(this,keyvals);};
sorted_map.cljs$lang$maxFixedArity = 0;
sorted_map.cljs$lang$applyTo = (function (arglist__15325){
var keyvals = cljs.core.seq(arglist__15325);
return sorted_map__delegate(keyvals);
});
sorted_map.cljs$core$IFn$_invoke$arity$variadic = sorted_map__delegate;
return sorted_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings, using the supplied comparator.
* @param {...*} var_args
*/
cljs.core.sorted_map_by = (function() { 
var sorted_map_by__delegate = function (comparator,keyvals){
var in$ = cljs.core.seq(keyvals);
var out = (new cljs.core.PersistentTreeMap(cljs.core.fn__GT_comparator(comparator),null,(0),null,(0)));
while(true){
if(in$){
var G__15326 = cljs.core.nnext(in$);
var G__15327 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__15326;
out = G__15327;
continue;
} else {
return out;
}
break;
}
};
var sorted_map_by = function (comparator,var_args){
var keyvals = null;
if (arguments.length > 1) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return sorted_map_by__delegate.call(this,comparator,keyvals);};
sorted_map_by.cljs$lang$maxFixedArity = 1;
sorted_map_by.cljs$lang$applyTo = (function (arglist__15328){
var comparator = cljs.core.first(arglist__15328);
var keyvals = cljs.core.rest(arglist__15328);
return sorted_map_by__delegate(comparator,keyvals);
});
sorted_map_by.cljs$core$IFn$_invoke$arity$variadic = sorted_map_by__delegate;
return sorted_map_by;
})()
;

/**
* @constructor
*/
cljs.core.KeySeq = (function (mseq,_meta){
this.mseq = mseq;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32374988;
})
cljs.core.KeySeq.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.KeySeq.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.KeySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__._meta;
});

cljs.core.KeySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var nseq = (((function (){var G__15329 = self__.mseq;
if(G__15329){
var bit__4319__auto__ = (G__15329.cljs$lang$protocol_mask$partition0$ & (128));
if((bit__4319__auto__) || (G__15329.cljs$core$INext$)){
return true;
} else {
if((!G__15329.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__15329);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__15329);
}
})())?self__.mseq.cljs$core$INext$_next$arity$1(null):cljs.core.next(self__.mseq));
if((nseq == null)){
return null;
} else {
return (new cljs.core.KeySeq(nseq,self__._meta));
}
});

cljs.core.KeySeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.hash_ordered_coll(coll__$1);
});

cljs.core.KeySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.KeySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,self__._meta);
});

cljs.core.KeySeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});

cljs.core.KeySeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});

cljs.core.KeySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var me = self__.mseq.cljs$core$ISeq$_first$arity$1(null);
return me.cljs$core$IMapEntry$_key$arity$1(null);
});

cljs.core.KeySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var nseq = (((function (){var G__15330 = self__.mseq;
if(G__15330){
var bit__4319__auto__ = (G__15330.cljs$lang$protocol_mask$partition0$ & (128));
if((bit__4319__auto__) || (G__15330.cljs$core$INext$)){
return true;
} else {
if((!G__15330.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__15330);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__15330);
}
})())?self__.mseq.cljs$core$INext$_next$arity$1(null):cljs.core.next(self__.mseq));
if(!((nseq == null))){
return (new cljs.core.KeySeq(nseq,self__._meta));
} else {
return cljs.core.List.EMPTY;
}
});

cljs.core.KeySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return coll__$1;
});

cljs.core.KeySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.KeySeq(self__.mseq,new_meta));
});

cljs.core.KeySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return cljs.core.cons(o,coll__$1);
});

cljs.core.KeySeq.cljs$lang$type = true;

cljs.core.KeySeq.cljs$lang$ctorStr = "cljs.core/KeySeq";

cljs.core.KeySeq.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write(writer__4226__auto__,"cljs.core/KeySeq");
});

cljs.core.__GT_KeySeq = (function __GT_KeySeq(mseq,_meta){
return (new cljs.core.KeySeq(mseq,_meta));
});

(cljs.core.KeySeq.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4616__auto__ = this;
return cljs.core.es6_iterator(this__4616__auto__);
}));
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){
var temp__4126__auto__ = cljs.core.seq(hash_map);
if(temp__4126__auto__){
var mseq = temp__4126__auto__;
return (new cljs.core.KeySeq(mseq,null));
} else {
return null;
}
});
/**
* Returns the key of the map entry.
*/
cljs.core.key = (function key(map_entry){
return cljs.core._key(map_entry);
});

/**
* @constructor
*/
cljs.core.ValSeq = (function (mseq,_meta){
this.mseq = mseq;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32374988;
})
cljs.core.ValSeq.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.ValSeq.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.ValSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__._meta;
});

cljs.core.ValSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var nseq = (((function (){var G__15331 = self__.mseq;
if(G__15331){
var bit__4319__auto__ = (G__15331.cljs$lang$protocol_mask$partition0$ & (128));
if((bit__4319__auto__) || (G__15331.cljs$core$INext$)){
return true;
} else {
if((!G__15331.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__15331);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__15331);
}
})())?self__.mseq.cljs$core$INext$_next$arity$1(null):cljs.core.next(self__.mseq));
if((nseq == null)){
return null;
} else {
return (new cljs.core.ValSeq(nseq,self__._meta));
}
});

cljs.core.ValSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.hash_ordered_coll(coll__$1);
});

cljs.core.ValSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.ValSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,self__._meta);
});

cljs.core.ValSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});

cljs.core.ValSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});

cljs.core.ValSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var me = self__.mseq.cljs$core$ISeq$_first$arity$1(null);
return me.cljs$core$IMapEntry$_val$arity$1(null);
});

cljs.core.ValSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var nseq = (((function (){var G__15332 = self__.mseq;
if(G__15332){
var bit__4319__auto__ = (G__15332.cljs$lang$protocol_mask$partition0$ & (128));
if((bit__4319__auto__) || (G__15332.cljs$core$INext$)){
return true;
} else {
if((!G__15332.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__15332);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__15332);
}
})())?self__.mseq.cljs$core$INext$_next$arity$1(null):cljs.core.next(self__.mseq));
if(!((nseq == null))){
return (new cljs.core.ValSeq(nseq,self__._meta));
} else {
return cljs.core.List.EMPTY;
}
});

cljs.core.ValSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return coll__$1;
});

cljs.core.ValSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.ValSeq(self__.mseq,new_meta));
});

cljs.core.ValSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return cljs.core.cons(o,coll__$1);
});

cljs.core.ValSeq.cljs$lang$type = true;

cljs.core.ValSeq.cljs$lang$ctorStr = "cljs.core/ValSeq";

cljs.core.ValSeq.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write(writer__4226__auto__,"cljs.core/ValSeq");
});

cljs.core.__GT_ValSeq = (function __GT_ValSeq(mseq,_meta){
return (new cljs.core.ValSeq(mseq,_meta));
});

(cljs.core.ValSeq.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4616__auto__ = this;
return cljs.core.es6_iterator(this__4616__auto__);
}));
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
var temp__4126__auto__ = cljs.core.seq(hash_map);
if(temp__4126__auto__){
var mseq = temp__4126__auto__;
return (new cljs.core.ValSeq(mseq,null));
} else {
return null;
}
});
/**
* Returns the value in the map entry.
*/
cljs.core.val = (function val(map_entry){
return cljs.core._val(map_entry);
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){
if(cljs.core.truth_(cljs.core.some(cljs.core.identity,maps))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__15333_SHARP_,p2__15334_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__3638__auto__ = p1__15333_SHARP_;
if(cljs.core.truth_(or__3638__auto__)){
return or__3638__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),p2__15334_SHARP_);
}),maps);
} else {
return null;
}
};
var merge = function (var_args){
var maps = null;
if (arguments.length > 0) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return merge__delegate.call(this,maps);};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__15335){
var maps = cljs.core.seq(arglist__15335);
return merge__delegate(maps);
});
merge.cljs$core$IFn$_invoke$arity$variadic = merge__delegate;
return merge;
})()
;
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by calling (f val-in-result val-in-latter).
* @param {...*} var_args
*/
cljs.core.merge_with = (function() { 
var merge_with__delegate = function (f,maps){
if(cljs.core.truth_(cljs.core.some(cljs.core.identity,maps))){
var merge_entry = (function (m,e){
var k = cljs.core.first(e);
var v = cljs.core.second(e);
if(cljs.core.contains_QMARK_(m,k)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__15338 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__15339 = v;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__15338,G__15339) : f.call(null,G__15338,G__15339));
})());
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
}
});
var merge2 = ((function (merge_entry){
return (function (m1,m2){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(merge_entry,(function (){var or__3638__auto__ = m1;
if(cljs.core.truth_(or__3638__auto__)){
return or__3638__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.seq(m2));
});})(merge_entry))
;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(merge2,maps);
} else {
return null;
}
};
var merge_with = function (f,var_args){
var maps = null;
if (arguments.length > 1) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return merge_with__delegate.call(this,f,maps);};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__15340){
var f = cljs.core.first(arglist__15340);
var maps = cljs.core.rest(arglist__15340);
return merge_with__delegate(f,maps);
});
merge_with.cljs$core$IFn$_invoke$arity$variadic = merge_with__delegate;
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret = cljs.core.PersistentArrayMap.EMPTY;
var keys = cljs.core.seq(keyseq);
while(true){
if(keys){
var key = cljs.core.first(keys);
var entry = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map,key,cljs.core.constant$keyword$35);
var G__15341 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(entry,cljs.core.constant$keyword$35))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,key,entry):ret);
var G__15342 = cljs.core.next(keys);
ret = G__15341;
keys = G__15342;
continue;
} else {
return cljs.core.with_meta(ret,cljs.core.meta(map));
}
break;
}
});

/**
* @constructor
*/
cljs.core.PersistentHashSet = (function (meta,hash_map,__hash){
this.meta = meta;
this.hash_map = hash_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 15077647;
this.cljs$lang$protocol_mask$partition1$ = 8196;
})
cljs.core.PersistentHashSet.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.PersistentHashSet.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.PersistentHashSet.prototype.keys = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_iterator(cljs.core.seq(coll));
});

cljs.core.PersistentHashSet.prototype.entries = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_set_entries_iterator(cljs.core.seq(coll));
});

cljs.core.PersistentHashSet.prototype.values = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_iterator(cljs.core.seq(coll));
});

cljs.core.PersistentHashSet.prototype.has = (function (k){
var self__ = this;
var coll = this;
return cljs.core.contains_QMARK_(coll,k);
});

cljs.core.PersistentHashSet.prototype.forEach = (function (f){
var self__ = this;
var coll = this;
var seq__15345 = cljs.core.seq(coll);
var chunk__15346 = null;
var count__15347 = (0);
var i__15348 = (0);
while(true){
if((i__15348 < count__15347)){
var vec__15349 = chunk__15346.cljs$core$IIndexed$_nth$arity$2(null,i__15348);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15349,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15349,(1),null);
var G__15350_15355 = v;
var G__15351_15356 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__15350_15355,G__15351_15356) : f.call(null,G__15350_15355,G__15351_15356));

var G__15357 = seq__15345;
var G__15358 = chunk__15346;
var G__15359 = count__15347;
var G__15360 = (i__15348 + (1));
seq__15345 = G__15357;
chunk__15346 = G__15358;
count__15347 = G__15359;
i__15348 = G__15360;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__15345);
if(temp__4126__auto__){
var seq__15345__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15345__$1)){
var c__4425__auto__ = cljs.core.chunk_first(seq__15345__$1);
var G__15361 = cljs.core.chunk_rest(seq__15345__$1);
var G__15362 = c__4425__auto__;
var G__15363 = cljs.core.count(c__4425__auto__);
var G__15364 = (0);
seq__15345 = G__15361;
chunk__15346 = G__15362;
count__15347 = G__15363;
i__15348 = G__15364;
continue;
} else {
var vec__15352 = cljs.core.first(seq__15345__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15352,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15352,(1),null);
var G__15353_15365 = v;
var G__15354_15366 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__15353_15365,G__15354_15366) : f.call(null,G__15353_15365,G__15354_15366));

var G__15367 = cljs.core.next(seq__15345__$1);
var G__15368 = null;
var G__15369 = (0);
var G__15370 = (0);
seq__15345 = G__15367;
chunk__15346 = G__15368;
count__15347 = G__15369;
i__15348 = G__15370;
continue;
}
} else {
return null;
}
}
break;
}
});

cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var self__ = this;
var coll__$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,v,null);
});

cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var self__ = this;
var coll__$1 = this;
if(cljs.core._contains_key_QMARK_(self__.hash_map,v)){
return v;
} else {
return not_found;
}
});

cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.PersistentHashSet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.PersistentHashSet(self__.meta,self__.hash_map,self__.__hash));
});

cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core._count(self__.hash_map);
});

cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4059__auto__ = self__.__hash;
if(!((h__4059__auto__ == null))){
return h__4059__auto__;
} else {
var h__4059__auto____$1 = cljs.core.hash_unordered_coll(coll__$1);
self__.__hash = h__4059__auto____$1;

return h__4059__auto____$1;
}
});

cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return (cljs.core.set_QMARK_(other)) && ((cljs.core.count(coll__$1) === cljs.core.count(other))) && (cljs.core.every_QMARK_(((function (coll__$1){
return (function (p1__15343_SHARP_){
return cljs.core.contains_QMARK_(coll__$1,p1__15343_SHARP_);
});})(coll__$1))
,other));
});

cljs.core.PersistentHashSet.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.TransientHashSet(cljs.core._as_transient(self__.hash_map)));
});

cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.PersistentHashSet.EMPTY,self__.meta);
});

cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentHashSet(self__.meta,cljs.core._dissoc(self__.hash_map,v),null));
});

cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.keys(self__.hash_map);
});

cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentHashSet(meta__$1,self__.hash_map,self__.__hash));
});

cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentHashSet(self__.meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.hash_map,o,null),null));
});

cljs.core.PersistentHashSet.prototype.call = (function() {
var G__15371 = null;
var G__15371__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__15371__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__15371 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__15371__2.call(this,self__,k);
case 3:
return G__15371__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15371.cljs$core$IFn$_invoke$arity$2 = G__15371__2;
G__15371.cljs$core$IFn$_invoke$arity$3 = G__15371__3;
return G__15371;
})()
;

cljs.core.PersistentHashSet.prototype.apply = (function (self__,args15344){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args15344)));
});

cljs.core.PersistentHashSet.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});

cljs.core.PersistentHashSet.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});

cljs.core.PersistentHashSet.cljs$lang$type = true;

cljs.core.PersistentHashSet.cljs$lang$ctorStr = "cljs.core/PersistentHashSet";

cljs.core.PersistentHashSet.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write(writer__4226__auto__,"cljs.core/PersistentHashSet");
});

cljs.core.__GT_PersistentHashSet = (function __GT_PersistentHashSet(meta,hash_map,__hash){
return (new cljs.core.PersistentHashSet(meta,hash_map,__hash));
});

cljs.core.PersistentHashSet.EMPTY = (new cljs.core.PersistentHashSet(null,cljs.core.PersistentArrayMap.EMPTY,(0)));
cljs.core.PersistentHashSet.fromArray = (function (items,no_clone){
var len = items.length;
if((len <= cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)){
var arr = ((no_clone)?items:cljs.core.aclone(items));
var i = (0);
var out = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < len)){
var G__15372 = (i + (1));
var G__15373 = cljs.core._assoc_BANG_(out,(items[i]),null);
i = G__15372;
out = G__15373;
continue;
} else {
return (new cljs.core.PersistentHashSet(null,cljs.core._persistent_BANG_(out),null));
}
break;
}
} else {
var i = (0);
var out = cljs.core.transient$(cljs.core.PersistentHashSet.EMPTY);
while(true){
if((i < len)){
var G__15374 = (i + (1));
var G__15375 = cljs.core._conj_BANG_(out,(items[i]));
i = G__15374;
out = G__15375;
continue;
} else {
return cljs.core._persistent_BANG_(out);
}
break;
}
}
});
(cljs.core.PersistentHashSet.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4616__auto__ = this;
return cljs.core.es6_iterator(this__4616__auto__);
}));

/**
* @constructor
*/
cljs.core.TransientHashSet = (function (transient_map){
this.transient_map = transient_map;
this.cljs$lang$protocol_mask$partition0$ = 259;
this.cljs$lang$protocol_mask$partition1$ = 136;
})
cljs.core.TransientHashSet.prototype.call = (function() {
var G__15377 = null;
var G__15377__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var tcoll = self____$1;
if((cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(self__.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel)){
return null;
} else {
return k;
}
});
var G__15377__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var tcoll = self____$1;
if((cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(self__.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel)){
return not_found;
} else {
return k;
}
});
G__15377 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__15377__2.call(this,self__,k);
case 3:
return G__15377__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15377.cljs$core$IFn$_invoke$arity$2 = G__15377__2;
G__15377.cljs$core$IFn$_invoke$arity$3 = G__15377__3;
return G__15377;
})()
;

cljs.core.TransientHashSet.prototype.apply = (function (self__,args15376){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args15376)));
});

cljs.core.TransientHashSet.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var tcoll = this;
if((cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(self__.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel)){
return null;
} else {
return k;
}
});

cljs.core.TransientHashSet.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var tcoll = this;
if((cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(self__.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel)){
return not_found;
} else {
return k;
}
});

cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,v){
var self__ = this;
var tcoll__$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(tcoll__$1,v,null);
});

cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,v,not_found){
var self__ = this;
var tcoll__$1 = this;
if((cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(self__.transient_map,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel)){
return not_found;
} else {
return v;
}
});

cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var self__ = this;
var tcoll__$1 = this;
return cljs.core.count(self__.transient_map);
});

cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (tcoll,v){
var self__ = this;
var tcoll__$1 = this;
self__.transient_map = cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(self__.transient_map,v);

return tcoll__$1;
});

cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var self__ = this;
var tcoll__$1 = this;
self__.transient_map = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(self__.transient_map,o,null);

return tcoll__$1;
});

cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var self__ = this;
var tcoll__$1 = this;
return (new cljs.core.PersistentHashSet(null,cljs.core.persistent_BANG_(self__.transient_map),null));
});

cljs.core.TransientHashSet.cljs$lang$type = true;

cljs.core.TransientHashSet.cljs$lang$ctorStr = "cljs.core/TransientHashSet";

cljs.core.TransientHashSet.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write(writer__4226__auto__,"cljs.core/TransientHashSet");
});

cljs.core.__GT_TransientHashSet = (function __GT_TransientHashSet(transient_map){
return (new cljs.core.TransientHashSet(transient_map));
});


/**
* @constructor
*/
cljs.core.PersistentTreeSet = (function (meta,tree_map,__hash){
this.meta = meta;
this.tree_map = tree_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 417730831;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.PersistentTreeSet.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.PersistentTreeSet.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.PersistentTreeSet.prototype.keys = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_iterator(cljs.core.seq(coll));
});

cljs.core.PersistentTreeSet.prototype.entries = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_set_entries_iterator(cljs.core.seq(coll));
});

cljs.core.PersistentTreeSet.prototype.values = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_iterator(cljs.core.seq(coll));
});

cljs.core.PersistentTreeSet.prototype.has = (function (k){
var self__ = this;
var coll = this;
return cljs.core.contains_QMARK_(coll,k);
});

cljs.core.PersistentTreeSet.prototype.forEach = (function (f){
var self__ = this;
var coll = this;
var seq__15380 = cljs.core.seq(coll);
var chunk__15381 = null;
var count__15382 = (0);
var i__15383 = (0);
while(true){
if((i__15383 < count__15382)){
var vec__15384 = chunk__15381.cljs$core$IIndexed$_nth$arity$2(null,i__15383);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15384,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15384,(1),null);
var G__15385_15390 = v;
var G__15386_15391 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__15385_15390,G__15386_15391) : f.call(null,G__15385_15390,G__15386_15391));

var G__15392 = seq__15380;
var G__15393 = chunk__15381;
var G__15394 = count__15382;
var G__15395 = (i__15383 + (1));
seq__15380 = G__15392;
chunk__15381 = G__15393;
count__15382 = G__15394;
i__15383 = G__15395;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__15380);
if(temp__4126__auto__){
var seq__15380__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15380__$1)){
var c__4425__auto__ = cljs.core.chunk_first(seq__15380__$1);
var G__15396 = cljs.core.chunk_rest(seq__15380__$1);
var G__15397 = c__4425__auto__;
var G__15398 = cljs.core.count(c__4425__auto__);
var G__15399 = (0);
seq__15380 = G__15396;
chunk__15381 = G__15397;
count__15382 = G__15398;
i__15383 = G__15399;
continue;
} else {
var vec__15387 = cljs.core.first(seq__15380__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15387,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15387,(1),null);
var G__15388_15400 = v;
var G__15389_15401 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__15388_15400,G__15389_15401) : f.call(null,G__15388_15400,G__15389_15401));

var G__15402 = cljs.core.next(seq__15380__$1);
var G__15403 = null;
var G__15404 = (0);
var G__15405 = (0);
seq__15380 = G__15402;
chunk__15381 = G__15403;
count__15382 = G__15404;
i__15383 = G__15405;
continue;
}
} else {
return null;
}
}
break;
}
});

cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var self__ = this;
var coll__$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,v,null);
});

cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var self__ = this;
var coll__$1 = this;
var n = self__.tree_map.entry_at(v);
if(!((n == null))){
return n.key;
} else {
return not_found;
}
});

cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.PersistentTreeSet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.PersistentTreeSet(self__.meta,self__.tree_map,self__.__hash));
});

cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.count(self__.tree_map);
});

cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((cljs.core.count(self__.tree_map) > (0))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.key,cljs.core.rseq(self__.tree_map));
} else {
return null;
}
});

cljs.core.PersistentTreeSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4059__auto__ = self__.__hash;
if(!((h__4059__auto__ == null))){
return h__4059__auto__;
} else {
var h__4059__auto____$1 = cljs.core.hash_unordered_coll(coll__$1);
self__.__hash = h__4059__auto____$1;

return h__4059__auto____$1;
}
});

cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return (cljs.core.set_QMARK_(other)) && ((cljs.core.count(coll__$1) === cljs.core.count(other))) && (cljs.core.every_QMARK_(((function (coll__$1){
return (function (p1__15378_SHARP_){
return cljs.core.contains_QMARK_(coll__$1,p1__15378_SHARP_);
});})(coll__$1))
,other));
});

cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentTreeSet(self__.meta,cljs.core._empty(self__.tree_map),(0)));
});

cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentTreeSet(self__.meta,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.tree_map,v),null));
});

cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.keys(self__.tree_map);
});

cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentTreeSet(meta__$1,self__.tree_map,self__.__hash));
});

cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentTreeSet(self__.meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.tree_map,o,null),null));
});

cljs.core.PersistentTreeSet.prototype.call = (function() {
var G__15406 = null;
var G__15406__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__15406__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__15406 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__15406__2.call(this,self__,k);
case 3:
return G__15406__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15406.cljs$core$IFn$_invoke$arity$2 = G__15406__2;
G__15406.cljs$core$IFn$_invoke$arity$3 = G__15406__3;
return G__15406;
})()
;

cljs.core.PersistentTreeSet.prototype.apply = (function (self__,args15379){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args15379)));
});

cljs.core.PersistentTreeSet.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});

cljs.core.PersistentTreeSet.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});

cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var self__ = this;
var coll__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.key,cljs.core._sorted_seq(self__.tree_map,ascending_QMARK_));
});

cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var self__ = this;
var coll__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.key,cljs.core._sorted_seq_from(self__.tree_map,k,ascending_QMARK_));
});

cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var self__ = this;
var coll__$1 = this;
return entry;
});

cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core._comparator(self__.tree_map);
});

cljs.core.PersistentTreeSet.cljs$lang$type = true;

cljs.core.PersistentTreeSet.cljs$lang$ctorStr = "cljs.core/PersistentTreeSet";

cljs.core.PersistentTreeSet.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write(writer__4226__auto__,"cljs.core/PersistentTreeSet");
});

cljs.core.__GT_PersistentTreeSet = (function __GT_PersistentTreeSet(meta,tree_map,__hash){
return (new cljs.core.PersistentTreeSet(meta,tree_map,__hash));
});

cljs.core.PersistentTreeSet.EMPTY = (new cljs.core.PersistentTreeSet(null,cljs.core.PersistentTreeMap.EMPTY,(0)));
(cljs.core.PersistentTreeSet.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4616__auto__ = this;
return cljs.core.es6_iterator(this__4616__auto__);
}));
cljs.core.set_from_indexed_seq = (function set_from_indexed_seq(iseq){
var arr = iseq.arr;
var ret = (function (){var a__4519__auto__ = arr;
var i = (0);
var res = cljs.core._as_transient(cljs.core.PersistentHashSet.EMPTY);
while(true){
if((i < a__4519__auto__.length)){
var G__15407 = (i + (1));
var G__15408 = res.cljs$core$ITransientCollection$_conj_BANG_$arity$2(null,(arr[i]));
i = G__15407;
res = G__15408;
continue;
} else {
return res;
}
break;
}
})();
return ret.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(null);
});
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$ = cljs.core.seq(coll);
if((in$ == null)){
return cljs.core.PersistentHashSet.EMPTY;
} else {
if(((in$ instanceof cljs.core.IndexedSeq)) && ((in$.i === (0)))){
return cljs.core.set_from_indexed_seq(in$);
} else {
var in$__$1 = in$;
var out = cljs.core._as_transient(cljs.core.PersistentHashSet.EMPTY);
while(true){
if(!((in$__$1 == null))){
var G__15409 = in$__$1.cljs$core$INext$_next$arity$1(null);
var G__15410 = out.cljs$core$ITransientCollection$_conj_BANG_$arity$2(null,in$__$1.cljs$core$ISeq$_first$arity$1(null));
in$__$1 = G__15409;
out = G__15410;
continue;
} else {
return out.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(null);
}
break;
}

}
}
});
/**
* @param {...*} var_args
*/
cljs.core.hash_set = (function() {
var hash_set = null;
var hash_set__0 = (function (){
return cljs.core.PersistentHashSet.EMPTY;
});
var hash_set__1 = (function() { 
var G__15411__delegate = function (keys){
return cljs.core.set(keys);
};
var G__15411 = function (var_args){
var keys = null;
if (arguments.length > 0) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__15411__delegate.call(this,keys);};
G__15411.cljs$lang$maxFixedArity = 0;
G__15411.cljs$lang$applyTo = (function (arglist__15412){
var keys = cljs.core.seq(arglist__15412);
return G__15411__delegate(keys);
});
G__15411.cljs$core$IFn$_invoke$arity$variadic = G__15411__delegate;
return G__15411;
})()
;
hash_set = function(var_args){
var keys = var_args;
switch(arguments.length){
case 0:
return hash_set__0.call(this);
default:
return hash_set__1.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(arguments, 0));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hash_set.cljs$lang$maxFixedArity = 0;
hash_set.cljs$lang$applyTo = hash_set__1.cljs$lang$applyTo;
hash_set.cljs$core$IFn$_invoke$arity$0 = hash_set__0;
hash_set.cljs$core$IFn$_invoke$arity$variadic = hash_set__1.cljs$core$IFn$_invoke$arity$variadic;
return hash_set;
})()
;
/**
* Returns a new sorted set with supplied keys.
* @param {...*} var_args
*/
cljs.core.sorted_set = (function() { 
var sorted_set__delegate = function (keys){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,cljs.core.PersistentTreeSet.EMPTY,keys);
};
var sorted_set = function (var_args){
var keys = null;
if (arguments.length > 0) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return sorted_set__delegate.call(this,keys);};
sorted_set.cljs$lang$maxFixedArity = 0;
sorted_set.cljs$lang$applyTo = (function (arglist__15413){
var keys = cljs.core.seq(arglist__15413);
return sorted_set__delegate(keys);
});
sorted_set.cljs$core$IFn$_invoke$arity$variadic = sorted_set__delegate;
return sorted_set;
})()
;
/**
* Returns a new sorted set with supplied keys, using the supplied comparator.
* @param {...*} var_args
*/
cljs.core.sorted_set_by = (function() { 
var sorted_set_by__delegate = function (comparator,keys){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,(new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map_by(comparator),(0))),keys);
};
var sorted_set_by = function (comparator,var_args){
var keys = null;
if (arguments.length > 1) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return sorted_set_by__delegate.call(this,comparator,keys);};
sorted_set_by.cljs$lang$maxFixedArity = 1;
sorted_set_by.cljs$lang$applyTo = (function (arglist__15414){
var comparator = cljs.core.first(arglist__15414);
var keys = cljs.core.rest(arglist__15414);
return sorted_set_by__delegate(comparator,keys);
});
sorted_set_by.cljs$core$IFn$_invoke$arity$variadic = sorted_set_by__delegate;
return sorted_set_by;
})()
;
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap.  Returns a transducer when no collection
* is provided.
*/
cljs.core.replace = (function() {
var replace = null;
var replace__1 = (function (smap){
return cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__15415_SHARP_){
var temp__4124__auto__ = cljs.core.find(smap,p1__15415_SHARP_);
if(cljs.core.truth_(temp__4124__auto__)){
var e = temp__4124__auto__;
return cljs.core.val(e);
} else {
return p1__15415_SHARP_;
}
}));
});
var replace__2 = (function (smap,coll){
if(cljs.core.vector_QMARK_(coll)){
var n = cljs.core.count(coll);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (n){
return (function (v,i){
var temp__4124__auto__ = cljs.core.find(smap,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,i));
if(cljs.core.truth_(temp__4124__auto__)){
var e = temp__4124__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,i,cljs.core.second(e));
} else {
return v;
}
});})(n))
,coll,cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.iterate(cljs.core.inc,(0))));
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__15416_SHARP_){
var temp__4124__auto__ = cljs.core.find(smap,p1__15416_SHARP_);
if(cljs.core.truth_(temp__4124__auto__)){
var e = temp__4124__auto__;
return cljs.core.second(e);
} else {
return p1__15416_SHARP_;
}
}),coll);
}
});
replace = function(smap,coll){
switch(arguments.length){
case 1:
return replace__1.call(this,smap);
case 2:
return replace__2.call(this,smap,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
replace.cljs$core$IFn$_invoke$arity$1 = replace__1;
replace.cljs$core$IFn$_invoke$arity$2 = replace__2;
return replace;
})()
;
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step = (function step(xs,seen){
return (new cljs.core.LazySeq(null,(function (){
return (function (p__15427,seen__$1){
while(true){
var vec__15428 = p__15427;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15428,(0),null);
var xs__$1 = vec__15428;
var temp__4126__auto__ = cljs.core.seq(xs__$1);
if(temp__4126__auto__){
var s = temp__4126__auto__;
if(cljs.core.contains_QMARK_(seen__$1,f)){
var G__15429 = cljs.core.rest(s);
var G__15430 = seen__$1;
p__15427 = G__15429;
seen__$1 = G__15430;
continue;
} else {
return cljs.core.cons(f,step(cljs.core.rest(s),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,f)));
}
} else {
return null;
}
break;
}
}).call(null,xs,seen);
}),null,null));
});
return step(coll,cljs.core.PersistentHashSet.EMPTY);
});
cljs.core.butlast = (function butlast(s){
var ret = cljs.core.PersistentVector.EMPTY;
var s__$1 = s;
while(true){
if(cljs.core.next(s__$1)){
var G__15431 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.first(s__$1));
var G__15432 = cljs.core.next(s__$1);
ret = G__15431;
s__$1 = G__15432;
continue;
} else {
return cljs.core.seq(ret);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if((function (){var G__15434 = x;
if(G__15434){
var bit__4312__auto__ = (G__15434.cljs$lang$protocol_mask$partition1$ & (4096));
if((bit__4312__auto__) || (G__15434.cljs$core$INamed$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return x.cljs$core$INamed$_name$arity$1(null);
} else {
if(typeof x === 'string'){
return x;
} else {
throw (new Error([cljs.core.str("Doesn't support name: "),cljs.core.str(x)].join('')));
}
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
var ks = cljs.core.seq(keys);
var vs = cljs.core.seq(vals);
while(true){
if((ks) && (vs)){
var G__15435 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(map,cljs.core.first(ks),cljs.core.first(vs));
var G__15436 = cljs.core.next(ks);
var G__15437 = cljs.core.next(vs);
map = G__15435;
ks = G__15436;
vs = G__15437;
continue;
} else {
return cljs.core.persistent_BANG_(map);
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljs.core.max_key = (function() {
var max_key = null;
var max_key__2 = (function (k,x){
return x;
});
var max_key__3 = (function (k,x,y){
if(((function (){var G__15448 = x;
return (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(G__15448) : k.call(null,G__15448));
})() > (function (){var G__15449 = y;
return (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(G__15449) : k.call(null,G__15449));
})())){
return x;
} else {
return y;
}
});
var max_key__4 = (function() { 
var G__15450__delegate = function (k,x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__15438_SHARP_,p2__15439_SHARP_){
return max_key.cljs$core$IFn$_invoke$arity$3(k,p1__15438_SHARP_,p2__15439_SHARP_);
}),max_key.cljs$core$IFn$_invoke$arity$3(k,x,y),more);
};
var G__15450 = function (k,x,y,var_args){
var more = null;
if (arguments.length > 3) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__15450__delegate.call(this,k,x,y,more);};
G__15450.cljs$lang$maxFixedArity = 3;
G__15450.cljs$lang$applyTo = (function (arglist__15451){
var k = cljs.core.first(arglist__15451);
arglist__15451 = cljs.core.next(arglist__15451);
var x = cljs.core.first(arglist__15451);
arglist__15451 = cljs.core.next(arglist__15451);
var y = cljs.core.first(arglist__15451);
var more = cljs.core.rest(arglist__15451);
return G__15450__delegate(k,x,y,more);
});
G__15450.cljs$core$IFn$_invoke$arity$variadic = G__15450__delegate;
return G__15450;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return max_key__2.call(this,k,x);
case 3:
return max_key__3.call(this,k,x,y);
default:
return max_key__4.cljs$core$IFn$_invoke$arity$variadic(k,x,y, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__4.cljs$lang$applyTo;
max_key.cljs$core$IFn$_invoke$arity$2 = max_key__2;
max_key.cljs$core$IFn$_invoke$arity$3 = max_key__3;
max_key.cljs$core$IFn$_invoke$arity$variadic = max_key__4.cljs$core$IFn$_invoke$arity$variadic;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__2 = (function (k,x){
return x;
});
var min_key__3 = (function (k,x,y){
if(((function (){var G__15462 = x;
return (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(G__15462) : k.call(null,G__15462));
})() < (function (){var G__15463 = y;
return (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(G__15463) : k.call(null,G__15463));
})())){
return x;
} else {
return y;
}
});
var min_key__4 = (function() { 
var G__15464__delegate = function (k,x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__15452_SHARP_,p2__15453_SHARP_){
return min_key.cljs$core$IFn$_invoke$arity$3(k,p1__15452_SHARP_,p2__15453_SHARP_);
}),min_key.cljs$core$IFn$_invoke$arity$3(k,x,y),more);
};
var G__15464 = function (k,x,y,var_args){
var more = null;
if (arguments.length > 3) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__15464__delegate.call(this,k,x,y,more);};
G__15464.cljs$lang$maxFixedArity = 3;
G__15464.cljs$lang$applyTo = (function (arglist__15465){
var k = cljs.core.first(arglist__15465);
arglist__15465 = cljs.core.next(arglist__15465);
var x = cljs.core.first(arglist__15465);
arglist__15465 = cljs.core.next(arglist__15465);
var y = cljs.core.first(arglist__15465);
var more = cljs.core.rest(arglist__15465);
return G__15464__delegate(k,x,y,more);
});
G__15464.cljs$core$IFn$_invoke$arity$variadic = G__15464__delegate;
return G__15464;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return min_key__2.call(this,k,x);
case 3:
return min_key__3.call(this,k,x,y);
default:
return min_key__4.cljs$core$IFn$_invoke$arity$variadic(k,x,y, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__4.cljs$lang$applyTo;
min_key.cljs$core$IFn$_invoke$arity$2 = min_key__2;
min_key.cljs$core$IFn$_invoke$arity$3 = min_key__3;
min_key.cljs$core$IFn$_invoke$arity$variadic = min_key__4.cljs$core$IFn$_invoke$arity$variadic;
return min_key;
})()
;

/**
* @constructor
*/
cljs.core.ArrayList = (function (arr){
this.arr = arr;
})
cljs.core.ArrayList.prototype.add = (function (x){
var self__ = this;
var _ = this;
return self__.arr.push(x);
});

cljs.core.ArrayList.prototype.size = (function (){
var self__ = this;
var _ = this;
return self__.arr.length;
});

cljs.core.ArrayList.prototype.clear = (function (){
var self__ = this;
var _ = this;
return self__.arr = [];
});

cljs.core.ArrayList.prototype.isEmpty = (function (){
var self__ = this;
var _ = this;
return (self__.arr.length === (0));
});

cljs.core.ArrayList.prototype.toArray = (function (){
var self__ = this;
var _ = this;
return self__.arr;
});

cljs.core.ArrayList.cljs$lang$type = true;

cljs.core.ArrayList.cljs$lang$ctorStr = "cljs.core/ArrayList";

cljs.core.ArrayList.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write(writer__4226__auto__,"cljs.core/ArrayList");
});

cljs.core.__GT_ArrayList = (function __GT_ArrayList(arr){
return (new cljs.core.ArrayList(arr));
});

cljs.core.array_list = (function array_list(){
return (new cljs.core.ArrayList([]));
});
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.  Returns a stateful
* transducer when no collection is provided.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__1 = (function (n){
return (function (rf){
var a = cljs.core.array_list();
return ((function (a){
return (function() {
var G__15482 = null;
var G__15482__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__15482__1 = (function (result){
var result__$1 = (cljs.core.truth_(a.isEmpty())?result:(function (){var v = cljs.core.vec(a.toArray());
a.clear();

return cljs.core.unreduced((function (){var G__15477 = result;
var G__15478 = v;
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__15477,G__15478) : rf.call(null,G__15477,G__15478));
})());
})());
var G__15479 = result__$1;
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__15479) : rf.call(null,G__15479));
});
var G__15482__2 = (function (result,input){
a.add(input);

if((n === a.size())){
var v = cljs.core.vec(a.toArray());
a.clear();

var G__15480 = result;
var G__15481 = v;
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__15480,G__15481) : rf.call(null,G__15480,G__15481));
} else {
return result;
}
});
G__15482 = function(result,input){
switch(arguments.length){
case 0:
return G__15482__0.call(this);
case 1:
return G__15482__1.call(this,result);
case 2:
return G__15482__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15482.cljs$core$IFn$_invoke$arity$0 = G__15482__0;
G__15482.cljs$core$IFn$_invoke$arity$1 = G__15482__1;
G__15482.cljs$core$IFn$_invoke$arity$2 = G__15482__2;
return G__15482;
})()
;})(a))
});
});
var partition_all__2 = (function (n,coll){
return partition_all.cljs$core$IFn$_invoke$arity$3(n,n,coll);
});
var partition_all__3 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.seq(coll);
if(temp__4126__auto__){
var s = temp__4126__auto__;
return cljs.core.cons(cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,s),partition_all.cljs$core$IFn$_invoke$arity$3(n,step,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(step,s)));
} else {
return null;
}
}),null,null));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case 1:
return partition_all__1.call(this,n);
case 2:
return partition_all__2.call(this,n,step);
case 3:
return partition_all__3.call(this,n,step,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_all.cljs$core$IFn$_invoke$arity$1 = partition_all__1;
partition_all.cljs$core$IFn$_invoke$arity$2 = partition_all__2;
partition_all.cljs$core$IFn$_invoke$arity$3 = partition_all__3;
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
* Returns a transducer when no collection is provided.
*/
cljs.core.take_while = (function() {
var take_while = null;
var take_while__1 = (function (pred){
return (function (rf){
return (function() {
var G__15495 = null;
var G__15495__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__15495__1 = (function (result){
var G__15490 = result;
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__15490) : rf.call(null,G__15490));
});
var G__15495__2 = (function (result,input){
if(cljs.core.truth_((function (){var G__15491 = input;
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__15491) : pred.call(null,G__15491));
})())){
var G__15492 = result;
var G__15493 = input;
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__15492,G__15493) : rf.call(null,G__15492,G__15493));
} else {
return cljs.core.reduced(result);
}
});
G__15495 = function(result,input){
switch(arguments.length){
case 0:
return G__15495__0.call(this);
case 1:
return G__15495__1.call(this,result);
case 2:
return G__15495__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15495.cljs$core$IFn$_invoke$arity$0 = G__15495__0;
G__15495.cljs$core$IFn$_invoke$arity$1 = G__15495__1;
G__15495.cljs$core$IFn$_invoke$arity$2 = G__15495__2;
return G__15495;
})()
});
});
var take_while__2 = (function (pred,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.seq(coll);
if(temp__4126__auto__){
var s = temp__4126__auto__;
if(cljs.core.truth_((function (){var G__15494 = cljs.core.first(s);
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__15494) : pred.call(null,G__15494));
})())){
return cljs.core.cons(cljs.core.first(s),take_while.cljs$core$IFn$_invoke$arity$2(pred,cljs.core.rest(s)));
} else {
return null;
}
} else {
return null;
}
}),null,null));
});
take_while = function(pred,coll){
switch(arguments.length){
case 1:
return take_while__1.call(this,pred);
case 2:
return take_while__2.call(this,pred,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_while.cljs$core$IFn$_invoke$arity$1 = take_while__1;
take_while.cljs$core$IFn$_invoke$arity$2 = take_while__2;
return take_while;
})()
;
cljs.core.mk_bound_fn = (function mk_bound_fn(sc,test,key){
return (function (e){
var comp = cljs.core._comparator(sc);
var G__15500 = (function (){var G__15502 = cljs.core._entry_key(sc,e);
var G__15503 = key;
return (comp.cljs$core$IFn$_invoke$arity$2 ? comp.cljs$core$IFn$_invoke$arity$2(G__15502,G__15503) : comp.call(null,G__15502,G__15503));
})();
var G__15501 = (0);
return (test.cljs$core$IFn$_invoke$arity$2 ? test.cljs$core$IFn$_invoke$arity$2(G__15500,G__15501) : test.call(null,G__15500,G__15501));
});
});
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.subseq = (function() {
var subseq = null;
var subseq__3 = (function (sc,test,key){
var include = cljs.core.mk_bound_fn(sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._GT_,cljs.core._GT__EQ_], true).call(null,test))){
var temp__4126__auto__ = cljs.core._sorted_seq_from(sc,key,true);
if(cljs.core.truth_(temp__4126__auto__)){
var vec__15507 = temp__4126__auto__;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15507,(0),null);
var s = vec__15507;
if(cljs.core.truth_((function (){var G__15508 = e;
return (include.cljs$core$IFn$_invoke$arity$1 ? include.cljs$core$IFn$_invoke$arity$1(G__15508) : include.call(null,G__15508));
})())){
return s;
} else {
return cljs.core.next(s);
}
} else {
return null;
}
} else {
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(include,cljs.core._sorted_seq(sc,true));
}
});
var subseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__4126__auto__ = cljs.core._sorted_seq_from(sc,start_key,true);
if(cljs.core.truth_(temp__4126__auto__)){
var vec__15509 = temp__4126__auto__;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15509,(0),null);
var s = vec__15509;
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.mk_bound_fn(sc,end_test,end_key),(cljs.core.truth_(cljs.core.mk_bound_fn(sc,start_test,start_key).call(null,e))?s:cljs.core.next(s)));
} else {
return null;
}
});
subseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return subseq__3.call(this,sc,start_test,start_key);
case 5:
return subseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
subseq.cljs$core$IFn$_invoke$arity$3 = subseq__3;
subseq.cljs$core$IFn$_invoke$arity$5 = subseq__5;
return subseq;
})()
;
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a reverse seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.rsubseq = (function() {
var rsubseq = null;
var rsubseq__3 = (function (sc,test,key){
var include = cljs.core.mk_bound_fn(sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._LT_,cljs.core._LT__EQ_], true).call(null,test))){
var temp__4126__auto__ = cljs.core._sorted_seq_from(sc,key,false);
if(cljs.core.truth_(temp__4126__auto__)){
var vec__15513 = temp__4126__auto__;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15513,(0),null);
var s = vec__15513;
if(cljs.core.truth_((function (){var G__15514 = e;
return (include.cljs$core$IFn$_invoke$arity$1 ? include.cljs$core$IFn$_invoke$arity$1(G__15514) : include.call(null,G__15514));
})())){
return s;
} else {
return cljs.core.next(s);
}
} else {
return null;
}
} else {
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(include,cljs.core._sorted_seq(sc,false));
}
});
var rsubseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__4126__auto__ = cljs.core._sorted_seq_from(sc,end_key,false);
if(cljs.core.truth_(temp__4126__auto__)){
var vec__15515 = temp__4126__auto__;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15515,(0),null);
var s = vec__15515;
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.mk_bound_fn(sc,start_test,start_key),(cljs.core.truth_(cljs.core.mk_bound_fn(sc,end_test,end_key).call(null,e))?s:cljs.core.next(s)));
} else {
return null;
}
});
rsubseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return rsubseq__3.call(this,sc,start_test,start_key);
case 5:
return rsubseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rsubseq.cljs$core$IFn$_invoke$arity$3 = rsubseq__3;
rsubseq.cljs$core$IFn$_invoke$arity$5 = rsubseq__5;
return rsubseq;
})()
;

/**
* @constructor
*/
cljs.core.RangeIterator = (function (i,end,step){
this.i = i;
this.end = end;
this.step = step;
})
cljs.core.RangeIterator.prototype.hasNext = (function (){
var self__ = this;
var _ = this;
if((self__.step > (0))){
return (self__.i < self__.end);
} else {
return (self__.i > self__.end);
}
});

cljs.core.RangeIterator.prototype.next = (function (){
var self__ = this;
var _ = this;
var ret = self__.i;
self__.i = (self__.i + self__.step);

return ret;
});

cljs.core.RangeIterator.cljs$lang$type = true;

cljs.core.RangeIterator.cljs$lang$ctorStr = "cljs.core/RangeIterator";

cljs.core.RangeIterator.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write(writer__4226__auto__,"cljs.core/RangeIterator");
});

cljs.core.__GT_RangeIterator = (function __GT_RangeIterator(i,end,step){
return (new cljs.core.RangeIterator(i,end,step));
});


/**
* @constructor
*/
cljs.core.Range = (function (meta,start,end,step,__hash){
this.meta = meta;
this.start = start;
this.end = end;
this.step = step;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 32375006;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.Range.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.Range.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (rng,n){
var self__ = this;
var rng__$1 = this;
if((n < cljs.core._count(rng__$1))){
return (self__.start + (n * self__.step));
} else {
if(((self__.start > self__.end)) && ((self__.step === (0)))){
return self__.start;
} else {
throw (new Error("Index out of bounds"));
}
}
});

cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (rng,n,not_found){
var self__ = this;
var rng__$1 = this;
if((n < cljs.core._count(rng__$1))){
return (self__.start + (n * self__.step));
} else {
if(((self__.start > self__.end)) && ((self__.step === (0)))){
return self__.start;
} else {
return not_found;
}
}
});

cljs.core.Range.prototype.cljs$core$IIterable$ = true;

cljs.core.Range.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.RangeIterator(self__.start,self__.end,self__.step));
});

cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (rng){
var self__ = this;
var rng__$1 = this;
return self__.meta;
});

cljs.core.Range.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.Range(self__.meta,self__.start,self__.end,self__.step,self__.__hash));
});

cljs.core.Range.prototype.cljs$core$INext$_next$arity$1 = (function (rng){
var self__ = this;
var rng__$1 = this;
if((self__.step > (0))){
if(((self__.start + self__.step) < self__.end)){
return (new cljs.core.Range(self__.meta,(self__.start + self__.step),self__.end,self__.step,null));
} else {
return null;
}
} else {
if(((self__.start + self__.step) > self__.end)){
return (new cljs.core.Range(self__.meta,(self__.start + self__.step),self__.end,self__.step,null));
} else {
return null;
}
}
});

cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = (function (rng){
var self__ = this;
var rng__$1 = this;
if(cljs.core.not(cljs.core._seq(rng__$1))){
return (0);
} else {
var G__15516 = ((self__.end - self__.start) / self__.step);
return (Math.ceil.cljs$core$IFn$_invoke$arity$1 ? Math.ceil.cljs$core$IFn$_invoke$arity$1(G__15516) : Math.ceil.call(null,G__15516));
}
});

cljs.core.Range.prototype.cljs$core$IHash$_hash$arity$1 = (function (rng){
var self__ = this;
var rng__$1 = this;
var h__4059__auto__ = self__.__hash;
if(!((h__4059__auto__ == null))){
return h__4059__auto__;
} else {
var h__4059__auto____$1 = cljs.core.hash_ordered_coll(rng__$1);
self__.__hash = h__4059__auto____$1;

return h__4059__auto____$1;
}
});

cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (rng,other){
var self__ = this;
var rng__$1 = this;
return cljs.core.equiv_sequential(rng__$1,other);
});

cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (rng){
var self__ = this;
var rng__$1 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});

cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (rng,f){
var self__ = this;
var rng__$1 = this;
return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2(rng__$1,f);
});

cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,init){
var self__ = this;
var rng__$1 = this;
var i = self__.start;
var ret = init;
while(true){
if((((self__.step > (0)))?(i < self__.end):(i > self__.end))){
var ret__$1 = (function (){var G__15517 = ret;
var G__15518 = i;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__15517,G__15518) : f.call(null,G__15517,G__15518));
})();
if(cljs.core.reduced_QMARK_(ret__$1)){
var G__15519 = ret__$1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15519) : cljs.core.deref.call(null,G__15519));
} else {
var G__15520 = (i + self__.step);
var G__15521 = ret__$1;
i = G__15520;
ret = G__15521;
continue;
}
} else {
return ret;
}
break;
}
});

cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = (function (rng){
var self__ = this;
var rng__$1 = this;
if((cljs.core._seq(rng__$1) == null)){
return null;
} else {
return self__.start;
}
});

cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = (function (rng){
var self__ = this;
var rng__$1 = this;
if(!((cljs.core._seq(rng__$1) == null))){
return (new cljs.core.Range(self__.meta,(self__.start + self__.step),self__.end,self__.step,null));
} else {
return cljs.core.List.EMPTY;
}
});

cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (rng){
var self__ = this;
var rng__$1 = this;
if((self__.step > (0))){
if((self__.start < self__.end)){
return rng__$1;
} else {
return null;
}
} else {
if((self__.start > self__.end)){
return rng__$1;
} else {
return null;
}
}
});

cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (rng,meta__$1){
var self__ = this;
var rng__$1 = this;
return (new cljs.core.Range(meta__$1,self__.start,self__.end,self__.step,self__.__hash));
});

cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = (function (rng,o){
var self__ = this;
var rng__$1 = this;
return cljs.core.cons(o,rng__$1);
});

cljs.core.Range.cljs$lang$type = true;

cljs.core.Range.cljs$lang$ctorStr = "cljs.core/Range";

cljs.core.Range.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write(writer__4226__auto__,"cljs.core/Range");
});

cljs.core.__GT_Range = (function __GT_Range(meta,start,end,step,__hash){
return (new cljs.core.Range(meta,start,end,step,__hash));
});

(cljs.core.Range.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4616__auto__ = this;
return cljs.core.es6_iterator(this__4616__auto__);
}));
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__0 = (function (){
return range.cljs$core$IFn$_invoke$arity$3((0),Number.MAX_VALUE,(1));
});
var range__1 = (function (end){
return range.cljs$core$IFn$_invoke$arity$3((0),end,(1));
});
var range__2 = (function (start,end){
return range.cljs$core$IFn$_invoke$arity$3(start,end,(1));
});
var range__3 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step,null));
});
range = function(start,end,step){
switch(arguments.length){
case 0:
return range__0.call(this);
case 1:
return range__1.call(this,start);
case 2:
return range__2.call(this,start,end);
case 3:
return range__3.call(this,start,end,step);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range.cljs$core$IFn$_invoke$arity$0 = range__0;
range.cljs$core$IFn$_invoke$arity$1 = range__1;
range.cljs$core$IFn$_invoke$arity$2 = range__2;
range.cljs$core$IFn$_invoke$arity$3 = range__3;
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.  Returns a stateful
* transducer when no collection is provided.
*/
cljs.core.take_nth = (function() {
var take_nth = null;
var take_nth__1 = (function (n){
return (function (rf){
var ia = cljs.core.volatile_BANG_((-1));
return ((function (ia){
return (function() {
var G__15539 = null;
var G__15539__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__15539__1 = (function (result){
var G__15536 = result;
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__15536) : rf.call(null,G__15536));
});
var G__15539__2 = (function (result,input){
var i = ia.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(ia.cljs$core$IDeref$_deref$arity$1(null) + (1)));
if((cljs.core.rem(i,n) === (0))){
var G__15537 = result;
var G__15538 = input;
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__15537,G__15538) : rf.call(null,G__15537,G__15538));
} else {
return result;
}
});
G__15539 = function(result,input){
switch(arguments.length){
case 0:
return G__15539__0.call(this);
case 1:
return G__15539__1.call(this,result);
case 2:
return G__15539__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15539.cljs$core$IFn$_invoke$arity$0 = G__15539__0;
G__15539.cljs$core$IFn$_invoke$arity$1 = G__15539__1;
G__15539.cljs$core$IFn$_invoke$arity$2 = G__15539__2;
return G__15539;
})()
;})(ia))
});
});
var take_nth__2 = (function (n,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.seq(coll);
if(temp__4126__auto__){
var s = temp__4126__auto__;
return cljs.core.cons(cljs.core.first(s),take_nth.cljs$core$IFn$_invoke$arity$2(n,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,s)));
} else {
return null;
}
}),null,null));
});
take_nth = function(n,coll){
switch(arguments.length){
case 1:
return take_nth__1.call(this,n);
case 2:
return take_nth__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_nth.cljs$core$IFn$_invoke$arity$1 = take_nth__1;
take_nth.cljs$core$IFn$_invoke$arity$2 = take_nth__2;
return take_nth;
})()
;
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(pred,coll),cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(pred,coll)], null);
});
/**
* Applies f to each value in coll, splitting it each time f returns a
* new value.  Returns a lazy seq of partitions.  Returns a stateful
* transducer when no collection is provided.
*/
cljs.core.partition_by = (function() {
var partition_by = null;
var partition_by__1 = (function (f){
return (function (rf){
var a = cljs.core.array_list();
var pa = cljs.core.volatile_BANG_(cljs.core.constant$keyword$36);
return ((function (a,pa){
return (function() {
var G__15561 = null;
var G__15561__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__15561__1 = (function (result){
var result__$1 = (cljs.core.truth_(a.isEmpty())?result:(function (){var v = cljs.core.vec(a.toArray());
a.clear();

return cljs.core.unreduced((function (){var G__15552 = result;
var G__15553 = v;
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__15552,G__15553) : rf.call(null,G__15552,G__15553));
})());
})());
var G__15554 = result__$1;
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__15554) : rf.call(null,G__15554));
});
var G__15561__2 = (function (result,input){
var pval = (function (){var G__15555 = pa;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15555) : cljs.core.deref.call(null,G__15555));
})();
var val = (function (){var G__15556 = input;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__15556) : f.call(null,G__15556));
})();
cljs.core.vreset_BANG_(pa,val);

if((cljs.core.keyword_identical_QMARK_(pval,cljs.core.constant$keyword$36)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,pval))){
a.add(input);

return result;
} else {
var v = cljs.core.vec(a.toArray());
a.clear();

var ret = (function (){var G__15557 = result;
var G__15558 = v;
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__15557,G__15558) : rf.call(null,G__15557,G__15558));
})();
if(cljs.core.reduced_QMARK_(ret)){
} else {
a.add(input);
}

return ret;
}
});
G__15561 = function(result,input){
switch(arguments.length){
case 0:
return G__15561__0.call(this);
case 1:
return G__15561__1.call(this,result);
case 2:
return G__15561__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15561.cljs$core$IFn$_invoke$arity$0 = G__15561__0;
G__15561.cljs$core$IFn$_invoke$arity$1 = G__15561__1;
G__15561.cljs$core$IFn$_invoke$arity$2 = G__15561__2;
return G__15561;
})()
;})(a,pa))
});
});
var partition_by__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.seq(coll);
if(temp__4126__auto__){
var s = temp__4126__auto__;
var fst = cljs.core.first(s);
var fv = (function (){var G__15559 = fst;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__15559) : f.call(null,G__15559));
})();
var run = cljs.core.cons(fst,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (fst,fv,s,temp__4126__auto__){
return (function (p1__15540_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fv,(function (){var G__15560 = p1__15540_SHARP_;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__15560) : f.call(null,G__15560));
})());
});})(fst,fv,s,temp__4126__auto__))
,cljs.core.next(s)));
return cljs.core.cons(run,partition_by.cljs$core$IFn$_invoke$arity$2(f,cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(cljs.core.count(run),s))));
} else {
return null;
}
}),null,null));
});
partition_by = function(f,coll){
switch(arguments.length){
case 1:
return partition_by__1.call(this,f);
case 2:
return partition_by__2.call(this,f,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$1 = partition_by__1;
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
return partition_by;
})()
;
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (counts,x){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(counts,x,(cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,x,(0)) + (1)));
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),coll));
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__4124__auto__ = cljs.core.seq(coll);
if(temp__4124__auto__){
var s = temp__4124__auto__;
return reductions.cljs$core$IFn$_invoke$arity$3(f,cljs.core.first(s),cljs.core.rest(s));
} else {
return cljs.core._conj(cljs.core.List.EMPTY,(function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})());
}
}),null,null));
});
var reductions__3 = (function (f,init,coll){
return cljs.core.cons(init,(new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.seq(coll);
if(temp__4126__auto__){
var s = temp__4126__auto__;
return reductions.cljs$core$IFn$_invoke$arity$3(f,(function (){var G__15570 = init;
var G__15571 = cljs.core.first(s);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__15570,G__15571) : f.call(null,G__15570,G__15571));
})(),cljs.core.rest(s));
} else {
return null;
}
}),null,null)));
});
reductions = function(f,init,coll){
switch(arguments.length){
case 2:
return reductions__2.call(this,f,init);
case 3:
return reductions__3.call(this,f,init,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reductions.cljs$core$IFn$_invoke$arity$2 = reductions__2;
reductions.cljs$core$IFn$_invoke$arity$3 = reductions__3;
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__1 = (function (f){
return (function() {
var G__15666 = null;
var G__15666__0 = (function (){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})()],null));
});
var G__15666__1 = (function (x){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__15624 = x;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__15624) : f.call(null,G__15624));
})()],null));
});
var G__15666__2 = (function (x,y){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__15625 = x;
var G__15626 = y;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__15625,G__15626) : f.call(null,G__15625,G__15626));
})()],null));
});
var G__15666__3 = (function (x,y,z){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__15627 = x;
var G__15628 = y;
var G__15629 = z;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__15627,G__15628,G__15629) : f.call(null,G__15627,G__15628,G__15629));
})()],null));
});
var G__15666__4 = (function() { 
var G__15667__delegate = function (x,y,z,args){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,x,y,z,args)],null));
};
var G__15667 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__15667__delegate.call(this,x,y,z,args);};
G__15667.cljs$lang$maxFixedArity = 3;
G__15667.cljs$lang$applyTo = (function (arglist__15668){
var x = cljs.core.first(arglist__15668);
arglist__15668 = cljs.core.next(arglist__15668);
var y = cljs.core.first(arglist__15668);
arglist__15668 = cljs.core.next(arglist__15668);
var z = cljs.core.first(arglist__15668);
var args = cljs.core.rest(arglist__15668);
return G__15667__delegate(x,y,z,args);
});
G__15667.cljs$core$IFn$_invoke$arity$variadic = G__15667__delegate;
return G__15667;
})()
;
G__15666 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__15666__0.call(this);
case 1:
return G__15666__1.call(this,x);
case 2:
return G__15666__2.call(this,x,y);
case 3:
return G__15666__3.call(this,x,y,z);
default:
return G__15666__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15666.cljs$lang$maxFixedArity = 3;
G__15666.cljs$lang$applyTo = G__15666__4.cljs$lang$applyTo;
G__15666.cljs$core$IFn$_invoke$arity$0 = G__15666__0;
G__15666.cljs$core$IFn$_invoke$arity$1 = G__15666__1;
G__15666.cljs$core$IFn$_invoke$arity$2 = G__15666__2;
G__15666.cljs$core$IFn$_invoke$arity$3 = G__15666__3;
G__15666.cljs$core$IFn$_invoke$arity$variadic = G__15666__4.cljs$core$IFn$_invoke$arity$variadic;
return G__15666;
})()
});
var juxt__2 = (function (f,g){
return (function() {
var G__15669 = null;
var G__15669__0 = (function (){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})(),(function (){return (g.cljs$core$IFn$_invoke$arity$0 ? g.cljs$core$IFn$_invoke$arity$0() : g.call(null));
})()],null));
});
var G__15669__1 = (function (x){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__15630 = x;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__15630) : f.call(null,G__15630));
})(),(function (){var G__15631 = x;
return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__15631) : g.call(null,G__15631));
})()],null));
});
var G__15669__2 = (function (x,y){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__15632 = x;
var G__15633 = y;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__15632,G__15633) : f.call(null,G__15632,G__15633));
})(),(function (){var G__15634 = x;
var G__15635 = y;
return (g.cljs$core$IFn$_invoke$arity$2 ? g.cljs$core$IFn$_invoke$arity$2(G__15634,G__15635) : g.call(null,G__15634,G__15635));
})()],null));
});
var G__15669__3 = (function (x,y,z){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__15636 = x;
var G__15637 = y;
var G__15638 = z;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__15636,G__15637,G__15638) : f.call(null,G__15636,G__15637,G__15638));
})(),(function (){var G__15639 = x;
var G__15640 = y;
var G__15641 = z;
return (g.cljs$core$IFn$_invoke$arity$3 ? g.cljs$core$IFn$_invoke$arity$3(G__15639,G__15640,G__15641) : g.call(null,G__15639,G__15640,G__15641));
})()],null));
});
var G__15669__4 = (function() { 
var G__15670__delegate = function (x,y,z,args){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,x,y,z,args),cljs.core.apply.cljs$core$IFn$_invoke$arity$5(g,x,y,z,args)],null));
};
var G__15670 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__15670__delegate.call(this,x,y,z,args);};
G__15670.cljs$lang$maxFixedArity = 3;
G__15670.cljs$lang$applyTo = (function (arglist__15671){
var x = cljs.core.first(arglist__15671);
arglist__15671 = cljs.core.next(arglist__15671);
var y = cljs.core.first(arglist__15671);
arglist__15671 = cljs.core.next(arglist__15671);
var z = cljs.core.first(arglist__15671);
var args = cljs.core.rest(arglist__15671);
return G__15670__delegate(x,y,z,args);
});
G__15670.cljs$core$IFn$_invoke$arity$variadic = G__15670__delegate;
return G__15670;
})()
;
G__15669 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__15669__0.call(this);
case 1:
return G__15669__1.call(this,x);
case 2:
return G__15669__2.call(this,x,y);
case 3:
return G__15669__3.call(this,x,y,z);
default:
return G__15669__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15669.cljs$lang$maxFixedArity = 3;
G__15669.cljs$lang$applyTo = G__15669__4.cljs$lang$applyTo;
G__15669.cljs$core$IFn$_invoke$arity$0 = G__15669__0;
G__15669.cljs$core$IFn$_invoke$arity$1 = G__15669__1;
G__15669.cljs$core$IFn$_invoke$arity$2 = G__15669__2;
G__15669.cljs$core$IFn$_invoke$arity$3 = G__15669__3;
G__15669.cljs$core$IFn$_invoke$arity$variadic = G__15669__4.cljs$core$IFn$_invoke$arity$variadic;
return G__15669;
})()
});
var juxt__3 = (function (f,g,h){
return (function() {
var G__15672 = null;
var G__15672__0 = (function (){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})(),(function (){return (g.cljs$core$IFn$_invoke$arity$0 ? g.cljs$core$IFn$_invoke$arity$0() : g.call(null));
})(),(function (){return (h.cljs$core$IFn$_invoke$arity$0 ? h.cljs$core$IFn$_invoke$arity$0() : h.call(null));
})()],null));
});
var G__15672__1 = (function (x){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__15642 = x;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__15642) : f.call(null,G__15642));
})(),(function (){var G__15643 = x;
return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__15643) : g.call(null,G__15643));
})(),(function (){var G__15644 = x;
return (h.cljs$core$IFn$_invoke$arity$1 ? h.cljs$core$IFn$_invoke$arity$1(G__15644) : h.call(null,G__15644));
})()],null));
});
var G__15672__2 = (function (x,y){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__15645 = x;
var G__15646 = y;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__15645,G__15646) : f.call(null,G__15645,G__15646));
})(),(function (){var G__15647 = x;
var G__15648 = y;
return (g.cljs$core$IFn$_invoke$arity$2 ? g.cljs$core$IFn$_invoke$arity$2(G__15647,G__15648) : g.call(null,G__15647,G__15648));
})(),(function (){var G__15649 = x;
var G__15650 = y;
return (h.cljs$core$IFn$_invoke$arity$2 ? h.cljs$core$IFn$_invoke$arity$2(G__15649,G__15650) : h.call(null,G__15649,G__15650));
})()],null));
});
var G__15672__3 = (function (x,y,z){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__15651 = x;
var G__15652 = y;
var G__15653 = z;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__15651,G__15652,G__15653) : f.call(null,G__15651,G__15652,G__15653));
})(),(function (){var G__15654 = x;
var G__15655 = y;
var G__15656 = z;
return (g.cljs$core$IFn$_invoke$arity$3 ? g.cljs$core$IFn$_invoke$arity$3(G__15654,G__15655,G__15656) : g.call(null,G__15654,G__15655,G__15656));
})(),(function (){var G__15657 = x;
var G__15658 = y;
var G__15659 = z;
return (h.cljs$core$IFn$_invoke$arity$3 ? h.cljs$core$IFn$_invoke$arity$3(G__15657,G__15658,G__15659) : h.call(null,G__15657,G__15658,G__15659));
})()],null));
});
var G__15672__4 = (function() { 
var G__15673__delegate = function (x,y,z,args){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,x,y,z,args),cljs.core.apply.cljs$core$IFn$_invoke$arity$5(g,x,y,z,args),cljs.core.apply.cljs$core$IFn$_invoke$arity$5(h,x,y,z,args)],null));
};
var G__15673 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__15673__delegate.call(this,x,y,z,args);};
G__15673.cljs$lang$maxFixedArity = 3;
G__15673.cljs$lang$applyTo = (function (arglist__15674){
var x = cljs.core.first(arglist__15674);
arglist__15674 = cljs.core.next(arglist__15674);
var y = cljs.core.first(arglist__15674);
arglist__15674 = cljs.core.next(arglist__15674);
var z = cljs.core.first(arglist__15674);
var args = cljs.core.rest(arglist__15674);
return G__15673__delegate(x,y,z,args);
});
G__15673.cljs$core$IFn$_invoke$arity$variadic = G__15673__delegate;
return G__15673;
})()
;
G__15672 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__15672__0.call(this);
case 1:
return G__15672__1.call(this,x);
case 2:
return G__15672__2.call(this,x,y);
case 3:
return G__15672__3.call(this,x,y,z);
default:
return G__15672__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15672.cljs$lang$maxFixedArity = 3;
G__15672.cljs$lang$applyTo = G__15672__4.cljs$lang$applyTo;
G__15672.cljs$core$IFn$_invoke$arity$0 = G__15672__0;
G__15672.cljs$core$IFn$_invoke$arity$1 = G__15672__1;
G__15672.cljs$core$IFn$_invoke$arity$2 = G__15672__2;
G__15672.cljs$core$IFn$_invoke$arity$3 = G__15672__3;
G__15672.cljs$core$IFn$_invoke$arity$variadic = G__15672__4.cljs$core$IFn$_invoke$arity$variadic;
return G__15672;
})()
});
var juxt__4 = (function() { 
var G__15675__delegate = function (f,g,h,fs){
var fs__$1 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4(f,g,h,fs);
return ((function (fs__$1){
return (function() {
var G__15676 = null;
var G__15676__0 = (function (){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (fs__$1){
return (function (p1__15572_SHARP_,p2__15573_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__15572_SHARP_,(function (){return (p2__15573_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p2__15573_SHARP_.cljs$core$IFn$_invoke$arity$0() : p2__15573_SHARP_.call(null));
})());
});})(fs__$1))
,cljs.core.PersistentVector.EMPTY,fs__$1);
});
var G__15676__1 = (function (x){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (fs__$1){
return (function (p1__15574_SHARP_,p2__15575_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__15574_SHARP_,(function (){var G__15660 = x;
return (p2__15575_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p2__15575_SHARP_.cljs$core$IFn$_invoke$arity$1(G__15660) : p2__15575_SHARP_.call(null,G__15660));
})());
});})(fs__$1))
,cljs.core.PersistentVector.EMPTY,fs__$1);
});
var G__15676__2 = (function (x,y){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (fs__$1){
return (function (p1__15576_SHARP_,p2__15577_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__15576_SHARP_,(function (){var G__15661 = x;
var G__15662 = y;
return (p2__15577_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p2__15577_SHARP_.cljs$core$IFn$_invoke$arity$2(G__15661,G__15662) : p2__15577_SHARP_.call(null,G__15661,G__15662));
})());
});})(fs__$1))
,cljs.core.PersistentVector.EMPTY,fs__$1);
});
var G__15676__3 = (function (x,y,z){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (fs__$1){
return (function (p1__15578_SHARP_,p2__15579_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__15578_SHARP_,(function (){var G__15663 = x;
var G__15664 = y;
var G__15665 = z;
return (p2__15579_SHARP_.cljs$core$IFn$_invoke$arity$3 ? p2__15579_SHARP_.cljs$core$IFn$_invoke$arity$3(G__15663,G__15664,G__15665) : p2__15579_SHARP_.call(null,G__15663,G__15664,G__15665));
})());
});})(fs__$1))
,cljs.core.PersistentVector.EMPTY,fs__$1);
});
var G__15676__4 = (function() { 
var G__15677__delegate = function (x,y,z,args){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (fs__$1){
return (function (p1__15580_SHARP_,p2__15581_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__15580_SHARP_,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(p2__15581_SHARP_,x,y,z,args));
});})(fs__$1))
,cljs.core.PersistentVector.EMPTY,fs__$1);
};
var G__15677 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__15677__delegate.call(this,x,y,z,args);};
G__15677.cljs$lang$maxFixedArity = 3;
G__15677.cljs$lang$applyTo = (function (arglist__15678){
var x = cljs.core.first(arglist__15678);
arglist__15678 = cljs.core.next(arglist__15678);
var y = cljs.core.first(arglist__15678);
arglist__15678 = cljs.core.next(arglist__15678);
var z = cljs.core.first(arglist__15678);
var args = cljs.core.rest(arglist__15678);
return G__15677__delegate(x,y,z,args);
});
G__15677.cljs$core$IFn$_invoke$arity$variadic = G__15677__delegate;
return G__15677;
})()
;
G__15676 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__15676__0.call(this);
case 1:
return G__15676__1.call(this,x);
case 2:
return G__15676__2.call(this,x,y);
case 3:
return G__15676__3.call(this,x,y,z);
default:
return G__15676__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15676.cljs$lang$maxFixedArity = 3;
G__15676.cljs$lang$applyTo = G__15676__4.cljs$lang$applyTo;
G__15676.cljs$core$IFn$_invoke$arity$0 = G__15676__0;
G__15676.cljs$core$IFn$_invoke$arity$1 = G__15676__1;
G__15676.cljs$core$IFn$_invoke$arity$2 = G__15676__2;
G__15676.cljs$core$IFn$_invoke$arity$3 = G__15676__3;
G__15676.cljs$core$IFn$_invoke$arity$variadic = G__15676__4.cljs$core$IFn$_invoke$arity$variadic;
return G__15676;
})()
;})(fs__$1))
};
var G__15675 = function (f,g,h,var_args){
var fs = null;
if (arguments.length > 3) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__15675__delegate.call(this,f,g,h,fs);};
G__15675.cljs$lang$maxFixedArity = 3;
G__15675.cljs$lang$applyTo = (function (arglist__15679){
var f = cljs.core.first(arglist__15679);
arglist__15679 = cljs.core.next(arglist__15679);
var g = cljs.core.first(arglist__15679);
arglist__15679 = cljs.core.next(arglist__15679);
var h = cljs.core.first(arglist__15679);
var fs = cljs.core.rest(arglist__15679);
return G__15675__delegate(f,g,h,fs);
});
G__15675.cljs$core$IFn$_invoke$arity$variadic = G__15675__delegate;
return G__15675;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case 1:
return juxt__1.call(this,f);
case 2:
return juxt__2.call(this,f,g);
case 3:
return juxt__3.call(this,f,g,h);
default:
return juxt__4.cljs$core$IFn$_invoke$arity$variadic(f,g,h, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__4.cljs$lang$applyTo;
juxt.cljs$core$IFn$_invoke$arity$1 = juxt__1;
juxt.cljs$core$IFn$_invoke$arity$2 = juxt__2;
juxt.cljs$core$IFn$_invoke$arity$3 = juxt__3;
juxt.cljs$core$IFn$_invoke$arity$variadic = juxt__4.cljs$core$IFn$_invoke$arity$variadic;
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljs.core.dorun = (function() {
var dorun = null;
var dorun__1 = (function (coll){
while(true){
if(cljs.core.seq(coll)){
var G__15680 = cljs.core.next(coll);
coll = G__15680;
continue;
} else {
return null;
}
break;
}
});
var dorun__2 = (function (n,coll){
while(true){
if((cljs.core.seq(coll)) && ((n > (0)))){
var G__15681 = (n - (1));
var G__15682 = cljs.core.next(coll);
n = G__15681;
coll = G__15682;
continue;
} else {
return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case 1:
return dorun__1.call(this,n);
case 2:
return dorun__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dorun.cljs$core$IFn$_invoke$arity$1 = dorun__1;
dorun.cljs$core$IFn$_invoke$arity$2 = dorun__2;
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljs.core.doall = (function() {
var doall = null;
var doall__1 = (function (coll){
cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(coll);

return coll;
});
var doall__2 = (function (n,coll){
cljs.core.dorun.cljs$core$IFn$_invoke$arity$2(n,coll);

return coll;
});
doall = function(n,coll){
switch(arguments.length){
case 1:
return doall__1.call(this,n);
case 2:
return doall__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
doall.cljs$core$IFn$_invoke$arity$1 = doall__1;
doall.cljs$core$IFn$_invoke$arity$2 = doall__2;
return doall;
})()
;
cljs.core.regexp_QMARK_ = (function regexp_QMARK_(o){
return (o instanceof RegExp);
});
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){
if(typeof s === 'string'){
var matches = re.exec(s);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(matches),s)){
if((cljs.core.count(matches) === (1))){
return cljs.core.first(matches);
} else {
return cljs.core.vec(matches);
}
} else {
return null;
}
} else {
throw (new TypeError("re-matches must match against a string."));
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){
if(typeof s === 'string'){
var matches = re.exec(s);
if((matches == null)){
return null;
} else {
if((cljs.core.count(matches) === (1))){
return cljs.core.first(matches);
} else {
return cljs.core.vec(matches);
}
}
} else {
throw (new TypeError("re-find must match against a string."));
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data = cljs.core.re_find(re,s);
var match_idx = s.search(re);
var match_str = ((cljs.core.coll_QMARK_(match_data))?cljs.core.first(match_data):match_data);
var post_match = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(match_idx + cljs.core.count(match_str)));
if(cljs.core.truth_(match_data)){
return (new cljs.core.LazySeq(null,((function (match_data,match_idx,match_str,post_match){
return (function (){
return cljs.core.cons(match_data,((cljs.core.seq(post_match))?re_seq(re,post_match):null));
});})(match_data,match_idx,match_str,post_match))
,null,null));
} else {
return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
if((s instanceof RegExp)){
return s;
} else {
var vec__15686 = cljs.core.re_find(/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15686,(0),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15686,(1),null);
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15686,(2),null);
return (new RegExp(pattern,flags));
}
});
cljs.core.pr_sequential_writer = (function pr_sequential_writer(writer,print_one,begin,sep,end,opts,coll){
var _STAR_print_level_STAR_15694 = cljs.core._STAR_print_level_STAR_;
try{cljs.core._STAR_print_level_STAR_ = (((cljs.core._STAR_print_level_STAR_ == null))?null:(cljs.core._STAR_print_level_STAR_ - (1)));

if((!((cljs.core._STAR_print_level_STAR_ == null))) && ((cljs.core._STAR_print_level_STAR_ < (0)))){
return cljs.core._write(writer,"#");
} else {
cljs.core._write(writer,begin);

if(cljs.core.seq(coll)){
var G__15695_15701 = cljs.core.first(coll);
var G__15696_15702 = writer;
var G__15697_15703 = opts;
(print_one.cljs$core$IFn$_invoke$arity$3 ? print_one.cljs$core$IFn$_invoke$arity$3(G__15695_15701,G__15696_15702,G__15697_15703) : print_one.call(null,G__15695_15701,G__15696_15702,G__15697_15703));
} else {
}

var coll_15704__$1 = cljs.core.next(coll);
var n_15705 = (cljs.core.constant$keyword$26.cljs$core$IFn$_invoke$arity$1(opts) - (1));
while(true){
if((coll_15704__$1) && (((n_15705 == null)) || (!((n_15705 === (0)))))){
cljs.core._write(writer,sep);

var G__15698_15706 = cljs.core.first(coll_15704__$1);
var G__15699_15707 = writer;
var G__15700_15708 = opts;
(print_one.cljs$core$IFn$_invoke$arity$3 ? print_one.cljs$core$IFn$_invoke$arity$3(G__15698_15706,G__15699_15707,G__15700_15708) : print_one.call(null,G__15698_15706,G__15699_15707,G__15700_15708));

var G__15709 = cljs.core.next(coll_15704__$1);
var G__15710 = (n_15705 - (1));
coll_15704__$1 = G__15709;
n_15705 = G__15710;
continue;
} else {
if((cljs.core.seq(coll_15704__$1)) && ((n_15705 === (0)))){
cljs.core._write(writer,sep);

cljs.core._write(writer,"...");
} else {
}
}
break;
}

return cljs.core._write(writer,end);
}
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_15694;
}});
/**
* @param {...*} var_args
*/
cljs.core.write_all = (function() { 
var write_all__delegate = function (writer,ss){
var seq__15715 = cljs.core.seq(ss);
var chunk__15716 = null;
var count__15717 = (0);
var i__15718 = (0);
while(true){
if((i__15718 < count__15717)){
var s = chunk__15716.cljs$core$IIndexed$_nth$arity$2(null,i__15718);
cljs.core._write(writer,s);

var G__15719 = seq__15715;
var G__15720 = chunk__15716;
var G__15721 = count__15717;
var G__15722 = (i__15718 + (1));
seq__15715 = G__15719;
chunk__15716 = G__15720;
count__15717 = G__15721;
i__15718 = G__15722;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__15715);
if(temp__4126__auto__){
var seq__15715__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15715__$1)){
var c__4425__auto__ = cljs.core.chunk_first(seq__15715__$1);
var G__15723 = cljs.core.chunk_rest(seq__15715__$1);
var G__15724 = c__4425__auto__;
var G__15725 = cljs.core.count(c__4425__auto__);
var G__15726 = (0);
seq__15715 = G__15723;
chunk__15716 = G__15724;
count__15717 = G__15725;
i__15718 = G__15726;
continue;
} else {
var s = cljs.core.first(seq__15715__$1);
cljs.core._write(writer,s);

var G__15727 = cljs.core.next(seq__15715__$1);
var G__15728 = null;
var G__15729 = (0);
var G__15730 = (0);
seq__15715 = G__15727;
chunk__15716 = G__15728;
count__15717 = G__15729;
i__15718 = G__15730;
continue;
}
} else {
return null;
}
}
break;
}
};
var write_all = function (writer,var_args){
var ss = null;
if (arguments.length > 1) {
  ss = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return write_all__delegate.call(this,writer,ss);};
write_all.cljs$lang$maxFixedArity = 1;
write_all.cljs$lang$applyTo = (function (arglist__15731){
var writer = cljs.core.first(arglist__15731);
var ss = cljs.core.rest(arglist__15731);
return write_all__delegate(writer,ss);
});
write_all.cljs$core$IFn$_invoke$arity$variadic = write_all__delegate;
return write_all;
})()
;
cljs.core.string_print = (function string_print(x){
(cljs.core._STAR_print_fn_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.core._STAR_print_fn_STAR_.cljs$core$IFn$_invoke$arity$1(x) : cljs.core._STAR_print_fn_STAR_.call(null,x));

return null;
});
cljs.core.flush = (function flush(){
return null;
});
cljs.core.char_escapes = (function (){var obj15733 = {"\"":"\\\"","\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t"};
return obj15733;
})();
cljs.core.quote_string = (function quote_string(s){
return [cljs.core.str("\""),cljs.core.str(s.replace((function (){var G__15736 = "[\\\\\"\b\f\n\r\t]";
var G__15737 = "g";
return RegExp(G__15736,G__15737);
})(),(function (match){
return (cljs.core.char_escapes[match]);
}))),cljs.core.str("\"")].join('');
});
/**
* Prefer this to pr-seq, because it makes the printing function
* configurable, allowing efficient implementations such as appending
* to a StringBuffer.
*/
cljs.core.pr_writer = (function pr_writer(obj,writer,opts){
if((obj == null)){
return cljs.core._write(writer,"nil");
} else {
if((void 0 === obj)){
return cljs.core._write(writer,"#<undefined>");
} else {
if(cljs.core.truth_((function (){var and__3626__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$24);
if(cljs.core.truth_(and__3626__auto__)){
var and__3626__auto____$1 = (function (){var G__15751 = obj;
if(G__15751){
var bit__4319__auto__ = (G__15751.cljs$lang$protocol_mask$partition0$ & (131072));
if((bit__4319__auto__) || (G__15751.cljs$core$IMeta$)){
return true;
} else {
if((!G__15751.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IMeta,G__15751);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IMeta,G__15751);
}
})();
if(and__3626__auto____$1){
return cljs.core.meta(obj);
} else {
return and__3626__auto____$1;
}
} else {
return and__3626__auto__;
}
})())){
cljs.core._write(writer,"^");

pr_writer(cljs.core.meta(obj),writer,opts);

cljs.core._write(writer," ");
} else {
}

if((obj == null)){
return cljs.core._write(writer,"nil");
} else {
if(obj.cljs$lang$type){
return obj.cljs$lang$ctorPrWriter(obj,writer,opts);
} else {
if((function (){var G__15752 = obj;
if(G__15752){
var bit__4312__auto__ = (G__15752.cljs$lang$protocol_mask$partition0$ & (2147483648));
if((bit__4312__auto__) || (G__15752.cljs$core$IPrintWithWriter$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return obj.cljs$core$IPrintWithWriter$_pr_writer$arity$3(null,writer,opts);
} else {
if(((cljs.core.type(obj) === Boolean)) || (typeof obj === 'number')){
return cljs.core._write(writer,[cljs.core.str(obj)].join(''));
} else {
if(cljs.core.object_QMARK_(obj)){
cljs.core._write(writer,"#js ");

var G__15753 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (k){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),(obj[k])], null);
}),cljs.core.js_keys(obj));
var G__15754 = pr_writer;
var G__15755 = writer;
var G__15756 = opts;
return (cljs.core.print_map.cljs$core$IFn$_invoke$arity$4 ? cljs.core.print_map.cljs$core$IFn$_invoke$arity$4(G__15753,G__15754,G__15755,G__15756) : cljs.core.print_map.call(null,G__15753,G__15754,G__15755,G__15756));
} else {
if(obj instanceof Array){
return cljs.core.pr_sequential_writer(writer,pr_writer,"#js ["," ","]",opts,obj);
} else {
if(cljs.core.truth_((function (){var G__15757 = obj;
return goog.isString(G__15757);
})())){
if(cljs.core.truth_(cljs.core.constant$keyword$23.cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core._write(writer,cljs.core.quote_string(obj));
} else {
return cljs.core._write(writer,obj);
}
} else {
if(cljs.core.fn_QMARK_(obj)){
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.array_seq(["#<",[cljs.core.str(obj)].join(''),">"], 0));
} else {
if((obj instanceof Date)){
var normalize = (function (n,len){
var ns = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count(ns) < len)){
var G__15759 = [cljs.core.str("0"),cljs.core.str(ns)].join('');
ns = G__15759;
continue;
} else {
return ns;
}
break;
}
});
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.array_seq(["#inst \"",[cljs.core.str(obj.getUTCFullYear())].join(''),"-",normalize((obj.getUTCMonth() + (1)),(2)),"-",normalize(obj.getUTCDate(),(2)),"T",normalize(obj.getUTCHours(),(2)),":",normalize(obj.getUTCMinutes(),(2)),":",normalize(obj.getUTCSeconds(),(2)),".",normalize(obj.getUTCMilliseconds(),(3)),"-","00:00\""], 0));
} else {
if(cljs.core.regexp_QMARK_(obj)){
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.array_seq(["#\"",obj.source,"\""], 0));
} else {
if((function (){var G__15758 = obj;
if(G__15758){
var bit__4319__auto__ = (G__15758.cljs$lang$protocol_mask$partition0$ & (2147483648));
if((bit__4319__auto__) || (G__15758.cljs$core$IPrintWithWriter$)){
return true;
} else {
if((!G__15758.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IPrintWithWriter,G__15758);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IPrintWithWriter,G__15758);
}
})()){
return cljs.core._pr_writer(obj,writer,opts);
} else {
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.array_seq(["#<",[cljs.core.str(obj)].join(''),">"], 0));

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
});
cljs.core.pr_seq_writer = (function pr_seq_writer(objs,writer,opts){
cljs.core.pr_writer(cljs.core.first(objs),writer,opts);

var seq__15764 = cljs.core.seq(cljs.core.next(objs));
var chunk__15765 = null;
var count__15766 = (0);
var i__15767 = (0);
while(true){
if((i__15767 < count__15766)){
var obj = chunk__15765.cljs$core$IIndexed$_nth$arity$2(null,i__15767);
cljs.core._write(writer," ");

cljs.core.pr_writer(obj,writer,opts);

var G__15768 = seq__15764;
var G__15769 = chunk__15765;
var G__15770 = count__15766;
var G__15771 = (i__15767 + (1));
seq__15764 = G__15768;
chunk__15765 = G__15769;
count__15766 = G__15770;
i__15767 = G__15771;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__15764);
if(temp__4126__auto__){
var seq__15764__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15764__$1)){
var c__4425__auto__ = cljs.core.chunk_first(seq__15764__$1);
var G__15772 = cljs.core.chunk_rest(seq__15764__$1);
var G__15773 = c__4425__auto__;
var G__15774 = cljs.core.count(c__4425__auto__);
var G__15775 = (0);
seq__15764 = G__15772;
chunk__15765 = G__15773;
count__15766 = G__15774;
i__15767 = G__15775;
continue;
} else {
var obj = cljs.core.first(seq__15764__$1);
cljs.core._write(writer," ");

cljs.core.pr_writer(obj,writer,opts);

var G__15776 = cljs.core.next(seq__15764__$1);
var G__15777 = null;
var G__15778 = (0);
var G__15779 = (0);
seq__15764 = G__15776;
chunk__15765 = G__15777;
count__15766 = G__15778;
i__15767 = G__15779;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.core.pr_sb_with_opts = (function pr_sb_with_opts(objs,opts){
var sb = (new goog.string.StringBuffer());
var writer = (new cljs.core.StringBufferWriter(sb));
cljs.core.pr_seq_writer(objs,writer,opts);

writer.cljs$core$IWriter$_flush$arity$1(null);

return sb;
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
if(cljs.core.empty_QMARK_(objs)){
return "";
} else {
return [cljs.core.str(cljs.core.pr_sb_with_opts(objs,opts))].join('');
}
});
/**
* Same as pr-str-with-opts followed by (newline)
*/
cljs.core.prn_str_with_opts = (function prn_str_with_opts(objs,opts){
if(cljs.core.empty_QMARK_(objs)){
return "\n";
} else {
var sb = cljs.core.pr_sb_with_opts(objs,opts);
sb.append("\n");

return [cljs.core.str(sb)].join('');
}
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
return cljs.core.string_print(cljs.core.pr_str_with_opts(objs,opts));
});
cljs.core.newline = (function newline(opts){
cljs.core.string_print("\n");

if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$22))){
return cljs.core.flush();
} else {
return null;
}
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintWithWriter.
* @param {...*} var_args
*/
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){
return cljs.core.pr_str_with_opts(objs,cljs.core.pr_opts());
};
var pr_str = function (var_args){
var objs = null;
if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr_str__delegate.call(this,objs);};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__15780){
var objs = cljs.core.seq(arglist__15780);
return pr_str__delegate(objs);
});
pr_str.cljs$core$IFn$_invoke$arity$variadic = pr_str__delegate;
return pr_str;
})()
;
/**
* Same as pr-str followed by (newline)
* @param {...*} var_args
*/
cljs.core.prn_str = (function() { 
var prn_str__delegate = function (objs){
return cljs.core.prn_str_with_opts(objs,cljs.core.pr_opts());
};
var prn_str = function (var_args){
var objs = null;
if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn_str__delegate.call(this,objs);};
prn_str.cljs$lang$maxFixedArity = 0;
prn_str.cljs$lang$applyTo = (function (arglist__15781){
var objs = cljs.core.seq(arglist__15781);
return prn_str__delegate(objs);
});
prn_str.cljs$core$IFn$_invoke$arity$variadic = prn_str__delegate;
return prn_str;
})()
;
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function() { 
var pr__delegate = function (objs){
return cljs.core.pr_with_opts(objs,cljs.core.pr_opts());
};
var pr = function (var_args){
var objs = null;
if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr__delegate.call(this,objs);};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__15782){
var objs = cljs.core.seq(arglist__15782);
return pr__delegate(objs);
});
pr.cljs$core$IFn$_invoke$arity$variadic = pr__delegate;
return pr;
})()
;
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function() { 
var cljs_core_print__delegate = function (objs){
return cljs.core.pr_with_opts(objs,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.pr_opts(),cljs.core.constant$keyword$23,false));
};
var cljs_core_print = function (var_args){
var objs = null;
if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return cljs_core_print__delegate.call(this,objs);};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__15783){
var objs = cljs.core.seq(arglist__15783);
return cljs_core_print__delegate(objs);
});
cljs_core_print.cljs$core$IFn$_invoke$arity$variadic = cljs_core_print__delegate;
return cljs_core_print;
})()
;
/**
* print to a string, returning it
* @param {...*} var_args
*/
cljs.core.print_str = (function() { 
var print_str__delegate = function (objs){
return cljs.core.pr_str_with_opts(objs,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.pr_opts(),cljs.core.constant$keyword$23,false));
};
var print_str = function (var_args){
var objs = null;
if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return print_str__delegate.call(this,objs);};
print_str.cljs$lang$maxFixedArity = 0;
print_str.cljs$lang$applyTo = (function (arglist__15784){
var objs = cljs.core.seq(arglist__15784);
return print_str__delegate(objs);
});
print_str.cljs$core$IFn$_invoke$arity$variadic = print_str__delegate;
return print_str;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){
cljs.core.pr_with_opts(objs,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.pr_opts(),cljs.core.constant$keyword$23,false));

if(cljs.core.truth_(cljs.core._STAR_print_newline_STAR_)){
return cljs.core.newline(cljs.core.pr_opts());
} else {
return null;
}
};
var println = function (var_args){
var objs = null;
if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println__delegate.call(this,objs);};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__15785){
var objs = cljs.core.seq(arglist__15785);
return println__delegate(objs);
});
println.cljs$core$IFn$_invoke$arity$variadic = println__delegate;
return println;
})()
;
/**
* println to a string, returning it
* @param {...*} var_args
*/
cljs.core.println_str = (function() { 
var println_str__delegate = function (objs){
return cljs.core.prn_str_with_opts(objs,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.pr_opts(),cljs.core.constant$keyword$23,false));
};
var println_str = function (var_args){
var objs = null;
if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println_str__delegate.call(this,objs);};
println_str.cljs$lang$maxFixedArity = 0;
println_str.cljs$lang$applyTo = (function (arglist__15786){
var objs = cljs.core.seq(arglist__15786);
return println_str__delegate(objs);
});
println_str.cljs$core$IFn$_invoke$arity$variadic = println_str__delegate;
return println_str;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function() { 
var prn__delegate = function (objs){
cljs.core.pr_with_opts(objs,cljs.core.pr_opts());

if(cljs.core.truth_(cljs.core._STAR_print_newline_STAR_)){
return cljs.core.newline(cljs.core.pr_opts());
} else {
return null;
}
};
var prn = function (var_args){
var objs = null;
if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn__delegate.call(this,objs);};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__15787){
var objs = cljs.core.seq(arglist__15787);
return prn__delegate(objs);
});
prn.cljs$core$IFn$_invoke$arity$variadic = prn__delegate;
return prn;
})()
;
cljs.core.print_map = (function print_map(m,print_one,writer,opts){
return cljs.core.pr_sequential_writer(writer,(function (e,w,opts__$1){
var G__15794_15800 = cljs.core.key(e);
var G__15795_15801 = w;
var G__15796_15802 = opts__$1;
(print_one.cljs$core$IFn$_invoke$arity$3 ? print_one.cljs$core$IFn$_invoke$arity$3(G__15794_15800,G__15795_15801,G__15796_15802) : print_one.call(null,G__15794_15800,G__15795_15801,G__15796_15802));

cljs.core._write(w," ");

var G__15797 = cljs.core.val(e);
var G__15798 = w;
var G__15799 = opts__$1;
return (print_one.cljs$core$IFn$_invoke$arity$3 ? print_one.cljs$core$IFn$_invoke$arity$3(G__15797,G__15798,G__15799) : print_one.call(null,G__15797,G__15798,G__15799));
}),"{",", ","}",opts,cljs.core.seq(m));
});
cljs.core.Volatile.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.Volatile.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var a__$1 = this;
cljs.core._write(writer,"#<Volatile: ");

cljs.core.pr_writer(a__$1.state,writer,opts);

return cljs.core._write(writer,">");
});

cljs.core.Var.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.Var.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var a__$1 = this;
cljs.core._write(writer,"#'");

return cljs.core.pr_writer(a__$1.sym,writer,opts);
});

cljs.core.IndexedSeq.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.IndexedSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.LazySeq.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.LazySeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.NodeSeq.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.NodeSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.BlackNode.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.BlackNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"["," ","]",opts,coll__$1);
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.ES6IteratorSeq.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.ES6IteratorSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"#{"," ","}",opts,coll__$1);
});

cljs.core.ChunkedSeq.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.ChunkedSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.ObjMap.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.ObjMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.print_map(coll__$1,cljs.core.pr_writer,writer,opts);
});

cljs.core.Cons.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.Cons.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.RSeq.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.RSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.PersistentHashMap.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.PersistentHashMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.print_map(coll__$1,cljs.core.pr_writer,writer,opts);
});

cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.Subvec.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.Subvec.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"["," ","]",opts,coll__$1);
});

cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.print_map(coll__$1,cljs.core.pr_writer,writer,opts);
});

cljs.core.PersistentHashSet.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.PersistentHashSet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"#{"," ","}",opts,coll__$1);
});

cljs.core.ChunkedCons.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.ChunkedCons.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.Atom.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.Atom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var a__$1 = this;
cljs.core._write(writer,"#<Atom: ");

cljs.core.pr_writer(a__$1.state,writer,opts);

return cljs.core._write(writer,">");
});

cljs.core.ValSeq.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.ValSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.RedNode.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.RedNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"["," ","]",opts,coll__$1);
});

cljs.core.PersistentVector.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.PersistentVector.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"["," ","]",opts,coll__$1);
});

cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.EmptyList.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.EmptyList.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core._write(writer,"()");
});

cljs.core.LazyTransformer.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.LazyTransformer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.PersistentQueue.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.PersistentQueue.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"#queue ["," ","]",opts,cljs.core.seq(coll__$1));
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.print_map(coll__$1,cljs.core.pr_writer,writer,opts);
});

cljs.core.Range.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.Range.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.KeySeq.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.KeySeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.List.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.List.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.PersistentVector.prototype.cljs$core$IComparable$ = true;

cljs.core.PersistentVector.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core.compare_indexed.cljs$core$IFn$_invoke$arity$2(x__$1,y);
});

cljs.core.Subvec.prototype.cljs$core$IComparable$ = true;

cljs.core.Subvec.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core.compare_indexed.cljs$core$IFn$_invoke$arity$2(x__$1,y);
});

cljs.core.Keyword.prototype.cljs$core$IComparable$ = true;

cljs.core.Keyword.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core.compare_keywords(x__$1,y);
});

cljs.core.Symbol.prototype.cljs$core$IComparable$ = true;

cljs.core.Symbol.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core.compare_symbols(x__$1,y);
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljs.core.alter_meta_BANG_ = (function() { 
var alter_meta_BANG___delegate = function (iref,f,args){
return iref.meta = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;
if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return alter_meta_BANG___delegate.call(this,iref,f,args);};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__15803){
var iref = cljs.core.first(arglist__15803);
arglist__15803 = cljs.core.next(arglist__15803);
var f = cljs.core.first(arglist__15803);
var args = cljs.core.rest(arglist__15803);
return alter_meta_BANG___delegate(iref,f,args);
});
alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic = alter_meta_BANG___delegate;
return alter_meta_BANG_;
})()
;
/**
* Atomically resets the metadata for an atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){
return iref.meta = m;
});
/**
* Alpha - subject to change.
* 
* Adds a watch function to an atom reference. The watch fn must be a
* fn of 4 args: a key, the reference, its old-state, its
* new-state. Whenever the reference's state might have been changed,
* any registered watches will have their functions called. The watch
* fn will be called synchronously. Note that an atom's state
* may have changed again prior to the fn call, so use old/new-state
* rather than derefing the reference. Keys must be unique per
* reference, and can be used to remove the watch with remove-watch,
* but are otherwise considered opaque by the watch mechanism.  Bear in
* mind that regardless of the result or action of the watch fns the
* atom's value will change.  Example:
* 
* (def a (atom 0))
* (add-watch a :inc (fn [k r o n] (assert (== 0 n))))
* (swap! a inc)
* ;; Assertion Error
* (deref a)
* ;=> 1
*/
cljs.core.add_watch = (function add_watch(iref,key,f){
return cljs.core._add_watch(iref,key,f);
});
/**
* Alpha - subject to change.
* 
* Removes a watch (set by add-watch) from a reference
*/
cljs.core.remove_watch = (function remove_watch(iref,key){
return cljs.core._remove_watch(iref,key);
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__0 = (function (){
return gensym.cljs$core$IFn$_invoke$arity$1("G__");
});
var gensym__1 = (function (prefix_string){
if((cljs.core.gensym_counter == null)){
cljs.core.gensym_counter = (function (){var G__15806 = (0);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15806) : cljs.core.atom.call(null,G__15806));
})();
} else {
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str(prefix_string),cljs.core.str(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.gensym_counter,cljs.core.inc))].join(''));
});
gensym = function(prefix_string){
switch(arguments.length){
case 0:
return gensym__0.call(this);
case 1:
return gensym__1.call(this,prefix_string);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gensym.cljs$core$IFn$_invoke$arity$0 = gensym__0;
gensym.cljs$core$IFn$_invoke$arity$1 = gensym__1;
return gensym;
})()
;
cljs.core.fixture1 = (1);
cljs.core.fixture2 = (2);

/**
* @constructor
*/
cljs.core.Delay = (function (f,value){
this.f = f;
this.value = value;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 32768;
})
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (d){
var self__ = this;
var d__$1 = this;
return cljs.core.not(self__.f);
});

cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.f)){
self__.value = (function (){return (self__.f.cljs$core$IFn$_invoke$arity$0 ? self__.f.cljs$core$IFn$_invoke$arity$0() : self__.f.call(null));
})();

self__.f = null;
} else {
}

return self__.value;
});

cljs.core.Delay.cljs$lang$type = true;

cljs.core.Delay.cljs$lang$ctorStr = "cljs.core/Delay";

cljs.core.Delay.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write(writer__4226__auto__,"cljs.core/Delay");
});

cljs.core.__GT_Delay = (function __GT_Delay(f,value){
return (new cljs.core.Delay(f,value));
});

/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){
return (x instanceof cljs.core.Delay);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){
if(cljs.core.delay_QMARK_(x)){
var G__15808 = x;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15808) : cljs.core.deref.call(null,G__15808));
} else {
return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){
return cljs.core._realized_QMARK_(d);
});
cljs.core.preserving_reduced = (function preserving_reduced(rf){
return (function (p1__15809_SHARP_,p2__15810_SHARP_){
var ret = (function (){var G__15813 = p1__15809_SHARP_;
var G__15814 = p2__15810_SHARP_;
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__15813,G__15814) : rf.call(null,G__15813,G__15814));
})();
if(cljs.core.reduced_QMARK_(ret)){
return cljs.core.reduced(ret);
} else {
return ret;
}
});
});
/**
* A transducer which concatenates the contents of each input, which must be a
* collection, into the reduction.
*/
cljs.core.cat = (function cat(rf){
var rf1 = cljs.core.preserving_reduced(rf);
return ((function (rf1){
return (function() {
var G__15817 = null;
var G__15817__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__15817__1 = (function (result){
var G__15816 = result;
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__15816) : rf.call(null,G__15816));
});
var G__15817__2 = (function (result,input){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf1,result,input);
});
G__15817 = function(result,input){
switch(arguments.length){
case 0:
return G__15817__0.call(this);
case 1:
return G__15817__1.call(this,result);
case 2:
return G__15817__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15817.cljs$core$IFn$_invoke$arity$0 = G__15817__0;
G__15817.cljs$core$IFn$_invoke$arity$1 = G__15817__1;
G__15817.cljs$core$IFn$_invoke$arity$2 = G__15817__2;
return G__15817;
})()
;})(rf1))
});
/**
* Returns a lazy sequence removing consecutive duplicates in coll.
* Returns a transducer when no collection is provided.
*/
cljs.core.dedupe = (function() {
var dedupe = null;
var dedupe__0 = (function (){
return (function (rf){
var pa = cljs.core.volatile_BANG_(cljs.core.constant$keyword$36);
return ((function (pa){
return (function() {
var G__15826 = null;
var G__15826__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__15826__1 = (function (result){
var G__15822 = result;
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__15822) : rf.call(null,G__15822));
});
var G__15826__2 = (function (result,input){
var prior = (function (){var G__15823 = pa;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15823) : cljs.core.deref.call(null,G__15823));
})();
cljs.core.vreset_BANG_(pa,input);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prior,input)){
return result;
} else {
var G__15824 = result;
var G__15825 = input;
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__15824,G__15825) : rf.call(null,G__15824,G__15825));
}
});
G__15826 = function(result,input){
switch(arguments.length){
case 0:
return G__15826__0.call(this);
case 1:
return G__15826__1.call(this,result);
case 2:
return G__15826__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15826.cljs$core$IFn$_invoke$arity$0 = G__15826__0;
G__15826.cljs$core$IFn$_invoke$arity$1 = G__15826__1;
G__15826.cljs$core$IFn$_invoke$arity$2 = G__15826__2;
return G__15826;
})()
;})(pa))
});
});
var dedupe__1 = (function (coll){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(dedupe.cljs$core$IFn$_invoke$arity$0(),coll);
});
dedupe = function(coll){
switch(arguments.length){
case 0:
return dedupe__0.call(this);
case 1:
return dedupe__1.call(this,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dedupe.cljs$core$IFn$_invoke$arity$0 = dedupe__0;
dedupe.cljs$core$IFn$_invoke$arity$1 = dedupe__1;
return dedupe;
})()
;
/**
* Returns items from coll with random probability of prob (0.0 -
* 1.0).  Returns a transducer when no collection is provided.
*/
cljs.core.random_sample = (function() {
var random_sample = null;
var random_sample__1 = (function (prob){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (_){
return (cljs.core.rand.cljs$core$IFn$_invoke$arity$0() < prob);
}));
});
var random_sample__2 = (function (prob,coll){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (_){
return (cljs.core.rand.cljs$core$IFn$_invoke$arity$0() < prob);
}),coll);
});
random_sample = function(prob,coll){
switch(arguments.length){
case 1:
return random_sample__1.call(this,prob);
case 2:
return random_sample__2.call(this,prob,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
random_sample.cljs$core$IFn$_invoke$arity$1 = random_sample__1;
random_sample.cljs$core$IFn$_invoke$arity$2 = random_sample__2;
return random_sample;
})()
;

/**
* @constructor
*/
cljs.core.Eduction = (function (xform,coll){
this.xform = xform;
this.coll = coll;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2173173760;
})
cljs.core.Eduction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll__$1,writer,opts){
var self__ = this;
var coll__$2 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$2);
});

cljs.core.Eduction.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(self__.xform,f,init,self__.coll);
});

cljs.core.Eduction.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.seq(cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(self__.xform,self__.coll));
});

cljs.core.Eduction.cljs$lang$type = true;

cljs.core.Eduction.cljs$lang$ctorStr = "cljs.core/Eduction";

cljs.core.Eduction.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write(writer__4226__auto__,"cljs.core/Eduction");
});

cljs.core.__GT_Eduction = (function __GT_Eduction(xform,coll){
return (new cljs.core.Eduction(xform,coll));
});

(cljs.core.Eduction.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4616__auto__ = this;
return cljs.core.es6_iterator(this__4616__auto__);
}));
/**
* Returns a reducible/iterable/seqable application of
* the transducer to the items in coll. Note that these applications
* will be performed every time iterator/seq/reduce is called.
*/
cljs.core.eduction = (function eduction(xform,coll){
return (new cljs.core.Eduction(xform,coll));
});
/**
* Runs the supplied procedure (via reduce), for purposes of side
* effects, on successive items in the collection. Returns nil
*/
cljs.core.run_BANG_ = (function run_BANG_(proc,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__15828_SHARP_,p2__15827_SHARP_){
var G__15830 = p2__15827_SHARP_;
return (proc.cljs$core$IFn$_invoke$arity$1 ? proc.cljs$core$IFn$_invoke$arity$1(G__15830) : proc.call(null,G__15830));
}),null,coll);
});

cljs.core.IEncodeJS = (function (){var obj15832 = {};
return obj15832;
})();

cljs.core._clj__GT_js = (function _clj__GT_js(x){
if((function (){var and__3626__auto__ = x;
if(and__3626__auto__){
return x.cljs$core$IEncodeJS$_clj__GT_js$arity$1;
} else {
return and__3626__auto__;
}
})()){
return x.cljs$core$IEncodeJS$_clj__GT_js$arity$1(x);
} else {
var x__4282__auto__ = (((x == null))?null:x);
return (function (){var or__3638__auto__ = (cljs.core._clj__GT_js[(function (){var G__15836 = x__4282__auto__;
return goog.typeOf(G__15836);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core._clj__GT_js["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("IEncodeJS.-clj->js",x);
}
}
})().call(null,x);
}
});

cljs.core._key__GT_js = (function _key__GT_js(x){
if((function (){var and__3626__auto__ = x;
if(and__3626__auto__){
return x.cljs$core$IEncodeJS$_key__GT_js$arity$1;
} else {
return and__3626__auto__;
}
})()){
return x.cljs$core$IEncodeJS$_key__GT_js$arity$1(x);
} else {
var x__4282__auto__ = (((x == null))?null:x);
return (function (){var or__3638__auto__ = (cljs.core._key__GT_js[(function (){var G__15840 = x__4282__auto__;
return goog.typeOf(G__15840);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core._key__GT_js["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("IEncodeJS.-key->js",x);
}
}
})().call(null,x);
}
});

cljs.core.key__GT_js = (function key__GT_js(k){
if((function (){var G__15843 = k;
if(G__15843){
var bit__4319__auto__ = null;
if(cljs.core.truth_((function (){var or__3638__auto__ = bit__4319__auto__;
if(cljs.core.truth_(or__3638__auto__)){
return or__3638__auto__;
} else {
return G__15843.cljs$core$IEncodeJS$;
}
})())){
return true;
} else {
if((!G__15843.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeJS,G__15843);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeJS,G__15843);
}
})()){
return cljs.core._clj__GT_js(k);
} else {
if((typeof k === 'string') || (typeof k === 'number') || ((k instanceof cljs.core.Keyword)) || ((k instanceof cljs.core.Symbol))){
var G__15844 = k;
return (cljs.core.clj__GT_js.cljs$core$IFn$_invoke$arity$1 ? cljs.core.clj__GT_js.cljs$core$IFn$_invoke$arity$1(G__15844) : cljs.core.clj__GT_js.call(null,G__15844));
} else {
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([k], 0));
}
}
});
/**
* Recursively transforms ClojureScript values to JavaScript.
* sets/vectors/lists become Arrays, Keywords and Symbol become Strings,
* Maps become Objects. Arbitrary keys are encoded to by key->js.
*/
cljs.core.clj__GT_js = (function clj__GT_js(x){
if((x == null)){
return null;
} else {
if((function (){var G__15860 = x;
if(G__15860){
var bit__4319__auto__ = null;
if(cljs.core.truth_((function (){var or__3638__auto__ = bit__4319__auto__;
if(cljs.core.truth_(or__3638__auto__)){
return or__3638__auto__;
} else {
return G__15860.cljs$core$IEncodeJS$;
}
})())){
return true;
} else {
if((!G__15860.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeJS,G__15860);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeJS,G__15860);
}
})()){
return cljs.core._clj__GT_js(x);
} else {
if((x instanceof cljs.core.Keyword)){
return cljs.core.name(x);
} else {
if((x instanceof cljs.core.Symbol)){
return [cljs.core.str(x)].join('');
} else {
if(cljs.core.map_QMARK_(x)){
var m = (function (){var obj15862 = {};
return obj15862;
})();
var seq__15863_15873 = cljs.core.seq(x);
var chunk__15864_15874 = null;
var count__15865_15875 = (0);
var i__15866_15876 = (0);
while(true){
if((i__15866_15876 < count__15865_15875)){
var vec__15867_15877 = chunk__15864_15874.cljs$core$IIndexed$_nth$arity$2(null,i__15866_15876);
var k_15878 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15867_15877,(0),null);
var v_15879 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15867_15877,(1),null);
(m[cljs.core.key__GT_js(k_15878)] = clj__GT_js(v_15879));

var G__15880 = seq__15863_15873;
var G__15881 = chunk__15864_15874;
var G__15882 = count__15865_15875;
var G__15883 = (i__15866_15876 + (1));
seq__15863_15873 = G__15880;
chunk__15864_15874 = G__15881;
count__15865_15875 = G__15882;
i__15866_15876 = G__15883;
continue;
} else {
var temp__4126__auto___15884 = cljs.core.seq(seq__15863_15873);
if(temp__4126__auto___15884){
var seq__15863_15885__$1 = temp__4126__auto___15884;
if(cljs.core.chunked_seq_QMARK_(seq__15863_15885__$1)){
var c__4425__auto___15886 = cljs.core.chunk_first(seq__15863_15885__$1);
var G__15887 = cljs.core.chunk_rest(seq__15863_15885__$1);
var G__15888 = c__4425__auto___15886;
var G__15889 = cljs.core.count(c__4425__auto___15886);
var G__15890 = (0);
seq__15863_15873 = G__15887;
chunk__15864_15874 = G__15888;
count__15865_15875 = G__15889;
i__15866_15876 = G__15890;
continue;
} else {
var vec__15868_15891 = cljs.core.first(seq__15863_15885__$1);
var k_15892 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15868_15891,(0),null);
var v_15893 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15868_15891,(1),null);
(m[cljs.core.key__GT_js(k_15892)] = clj__GT_js(v_15893));

var G__15894 = cljs.core.next(seq__15863_15885__$1);
var G__15895 = null;
var G__15896 = (0);
var G__15897 = (0);
seq__15863_15873 = G__15894;
chunk__15864_15874 = G__15895;
count__15865_15875 = G__15896;
i__15866_15876 = G__15897;
continue;
}
} else {
}
}
break;
}

return m;
} else {
if(cljs.core.coll_QMARK_(x)){
var arr = [];
var seq__15869_15898 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clj__GT_js,x));
var chunk__15870_15899 = null;
var count__15871_15900 = (0);
var i__15872_15901 = (0);
while(true){
if((i__15872_15901 < count__15871_15900)){
var x_15902__$1 = chunk__15870_15899.cljs$core$IIndexed$_nth$arity$2(null,i__15872_15901);
arr.push(x_15902__$1);

var G__15903 = seq__15869_15898;
var G__15904 = chunk__15870_15899;
var G__15905 = count__15871_15900;
var G__15906 = (i__15872_15901 + (1));
seq__15869_15898 = G__15903;
chunk__15870_15899 = G__15904;
count__15871_15900 = G__15905;
i__15872_15901 = G__15906;
continue;
} else {
var temp__4126__auto___15907 = cljs.core.seq(seq__15869_15898);
if(temp__4126__auto___15907){
var seq__15869_15908__$1 = temp__4126__auto___15907;
if(cljs.core.chunked_seq_QMARK_(seq__15869_15908__$1)){
var c__4425__auto___15909 = cljs.core.chunk_first(seq__15869_15908__$1);
var G__15910 = cljs.core.chunk_rest(seq__15869_15908__$1);
var G__15911 = c__4425__auto___15909;
var G__15912 = cljs.core.count(c__4425__auto___15909);
var G__15913 = (0);
seq__15869_15898 = G__15910;
chunk__15870_15899 = G__15911;
count__15871_15900 = G__15912;
i__15872_15901 = G__15913;
continue;
} else {
var x_15914__$1 = cljs.core.first(seq__15869_15908__$1);
arr.push(x_15914__$1);

var G__15915 = cljs.core.next(seq__15869_15908__$1);
var G__15916 = null;
var G__15917 = (0);
var G__15918 = (0);
seq__15869_15898 = G__15915;
chunk__15870_15899 = G__15916;
count__15871_15900 = G__15917;
i__15872_15901 = G__15918;
continue;
}
} else {
}
}
break;
}

return arr;
} else {
return x;

}
}
}
}
}
}
});

cljs.core.IEncodeClojure = (function (){var obj15920 = {};
return obj15920;
})();

cljs.core._js__GT_clj = (function _js__GT_clj(x,options){
if((function (){var and__3626__auto__ = x;
if(and__3626__auto__){
return x.cljs$core$IEncodeClojure$_js__GT_clj$arity$2;
} else {
return and__3626__auto__;
}
})()){
return x.cljs$core$IEncodeClojure$_js__GT_clj$arity$2(x,options);
} else {
var x__4282__auto__ = (((x == null))?null:x);
return (function (){var or__3638__auto__ = (cljs.core._js__GT_clj[(function (){var G__15924 = x__4282__auto__;
return goog.typeOf(G__15924);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core._js__GT_clj["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("IEncodeClojure.-js->clj",x);
}
}
})().call(null,x,options);
}
});

/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function() {
var js__GT_clj = null;
var js__GT_clj__1 = (function (x){
return js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$37,false], null)], 0));
});
var js__GT_clj__2 = (function() { 
var G__15981__delegate = function (x,opts){
var map__15954 = opts;
var map__15954__$1 = ((cljs.core.seq_QMARK_(map__15954))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15954):map__15954);
var keywordize_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15954__$1,cljs.core.constant$keyword$37);
var keyfn = (cljs.core.truth_(keywordize_keys)?cljs.core.keyword:cljs.core.str);
var f = ((function (map__15954,map__15954__$1,keywordize_keys,keyfn){
return (function thisfn(x__$1){
if((function (){var G__15970 = x__$1;
if(G__15970){
var bit__4319__auto__ = null;
if(cljs.core.truth_((function (){var or__3638__auto__ = bit__4319__auto__;
if(cljs.core.truth_(or__3638__auto__)){
return or__3638__auto__;
} else {
return G__15970.cljs$core$IEncodeClojure$;
}
})())){
return true;
} else {
if((!G__15970.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeClojure,G__15970);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeClojure,G__15970);
}
})()){
return cljs.core._js__GT_clj(x__$1,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,opts));
} else {
if(cljs.core.seq_QMARK_(x__$1)){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(thisfn,x__$1));
} else {
if(cljs.core.coll_QMARK_(x__$1)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(x__$1),cljs.core.map.cljs$core$IFn$_invoke$arity$2(thisfn,x__$1));
} else {
if(x__$1 instanceof Array){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(thisfn,x__$1));
} else {
if((cljs.core.type(x__$1) === Object)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4394__auto__ = ((function (map__15954,map__15954__$1,keywordize_keys,keyfn){
return (function iter__15971(s__15972){
return (new cljs.core.LazySeq(null,((function (map__15954,map__15954__$1,keywordize_keys,keyfn){
return (function (){
var s__15972__$1 = s__15972;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__15972__$1);
if(temp__4126__auto__){
var s__15972__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15972__$2)){
var c__4392__auto__ = cljs.core.chunk_first(s__15972__$2);
var size__4393__auto__ = cljs.core.count(c__4392__auto__);
var b__15974 = cljs.core.chunk_buffer(size__4393__auto__);
if((function (){var i__15973 = (0);
while(true){
if((i__15973 < size__4393__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4392__auto__,i__15973);
cljs.core.chunk_append(b__15974,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__15979 = k;
return (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(G__15979) : keyfn.call(null,G__15979));
})(),thisfn((x__$1[k]))], null));

var G__15982 = (i__15973 + (1));
i__15973 = G__15982;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15974),iter__15971(cljs.core.chunk_rest(s__15972__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15974),null);
}
} else {
var k = cljs.core.first(s__15972__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__15980 = k;
return (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(G__15980) : keyfn.call(null,G__15980));
})(),thisfn((x__$1[k]))], null),iter__15971(cljs.core.rest(s__15972__$2)));
}
} else {
return null;
}
break;
}
});})(map__15954,map__15954__$1,keywordize_keys,keyfn))
,null,null));
});})(map__15954,map__15954__$1,keywordize_keys,keyfn))
;
return iter__4394__auto__(cljs.core.js_keys(x__$1));
})());
} else {
return x__$1;

}
}
}
}
}
});})(map__15954,map__15954__$1,keywordize_keys,keyfn))
;
return f(x);
};
var G__15981 = function (x,var_args){
var opts = null;
if (arguments.length > 1) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15981__delegate.call(this,x,opts);};
G__15981.cljs$lang$maxFixedArity = 1;
G__15981.cljs$lang$applyTo = (function (arglist__15983){
var x = cljs.core.first(arglist__15983);
var opts = cljs.core.rest(arglist__15983);
return G__15981__delegate(x,opts);
});
G__15981.cljs$core$IFn$_invoke$arity$variadic = G__15981__delegate;
return G__15981;
})()
;
js__GT_clj = function(x,var_args){
var opts = var_args;
switch(arguments.length){
case 1:
return js__GT_clj__1.call(this,x);
default:
return js__GT_clj__2.cljs$core$IFn$_invoke$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = js__GT_clj__2.cljs$lang$applyTo;
js__GT_clj.cljs$core$IFn$_invoke$arity$1 = js__GT_clj__1;
js__GT_clj.cljs$core$IFn$_invoke$arity$variadic = js__GT_clj__2.cljs$core$IFn$_invoke$arity$variadic;
return js__GT_clj;
})()
;
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){
var mem = (function (){var G__15986 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15986) : cljs.core.atom.call(null,G__15986));
})();
return ((function (mem){
return (function() { 
var G__15988__delegate = function (args){
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$3((function (){var G__15987 = mem;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15987) : cljs.core.deref.call(null,G__15987));
})(),args,cljs.core.lookup_sentinel);
if((v === cljs.core.lookup_sentinel)){
var ret = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mem,cljs.core.assoc,args,ret);

return ret;
} else {
return v;
}
};
var G__15988 = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__15988__delegate.call(this,args);};
G__15988.cljs$lang$maxFixedArity = 0;
G__15988.cljs$lang$applyTo = (function (arglist__15989){
var args = cljs.core.seq(arglist__15989);
return G__15988__delegate(args);
});
G__15988.cljs$core$IFn$_invoke$arity$variadic = G__15988__delegate;
return G__15988;
})()
;
;})(mem))
});
/**
* trampoline can be used to convert algorithms requiring mutual
* recursion without stack consumption. Calls f with supplied args, if
* any. If f returns a fn, calls that fn with no arguments, and
* continues to repeat, until the return value is not a fn, then
* returns that non-fn value. Note that if you want to return a fn as a
* final value, you must wrap it in some data structure and unpack it
* after trampoline returns.
* @param {...*} var_args
*/
cljs.core.trampoline = (function() {
var trampoline = null;
var trampoline__1 = (function (f){
while(true){
var ret = (function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})();
if(cljs.core.fn_QMARK_(ret)){
var G__15991 = ret;
f = G__15991;
continue;
} else {
return ret;
}
break;
}
});
var trampoline__2 = (function() { 
var G__15992__delegate = function (f,args){
return trampoline.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}));
};
var G__15992 = function (f,var_args){
var args = null;
if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15992__delegate.call(this,f,args);};
G__15992.cljs$lang$maxFixedArity = 1;
G__15992.cljs$lang$applyTo = (function (arglist__15993){
var f = cljs.core.first(arglist__15993);
var args = cljs.core.rest(arglist__15993);
return G__15992__delegate(f,args);
});
G__15992.cljs$core$IFn$_invoke$arity$variadic = G__15992__delegate;
return G__15992;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case 1:
return trampoline__1.call(this,f);
default:
return trampoline__2.cljs$core$IFn$_invoke$arity$variadic(f, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__2.cljs$lang$applyTo;
trampoline.cljs$core$IFn$_invoke$arity$1 = trampoline__1;
trampoline.cljs$core$IFn$_invoke$arity$variadic = trampoline__2.cljs$core$IFn$_invoke$arity$variadic;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){
return rand.cljs$core$IFn$_invoke$arity$1((1));
});
var rand__1 = (function (n){
return ((function (){return (Math.random.cljs$core$IFn$_invoke$arity$0 ? Math.random.cljs$core$IFn$_invoke$arity$0() : Math.random.call(null));
})() * n);
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rand.cljs$core$IFn$_invoke$arity$0 = rand__0;
rand.cljs$core$IFn$_invoke$arity$1 = rand__1;
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
var G__15996 = ((function (){return (Math.random.cljs$core$IFn$_invoke$arity$0 ? Math.random.cljs$core$IFn$_invoke$arity$0() : Math.random.call(null));
})() * n);
return (Math.floor.cljs$core$IFn$_invoke$arity$1 ? Math.floor.cljs$core$IFn$_invoke$arity$1(G__15996) : Math.floor.call(null,G__15996));
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(coll,cljs.core.rand_int(cljs.core.count(coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret,x){
var k = (function (){var G__15998 = x;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__15998) : f.call(null,G__15998));
})();
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.PersistentVector.EMPTY),x));
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),coll));
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$38,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$39,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$40,cljs.core.PersistentArrayMap.EMPTY], null);
});
cljs.core._global_hierarchy = null;
cljs.core.get_global_hierarchy = (function get_global_hierarchy(){
if((cljs.core._global_hierarchy == null)){
cljs.core._global_hierarchy = (function (){var G__16000 = cljs.core.make_hierarchy();
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16000) : cljs.core.atom.call(null,G__16000));
})();
} else {
}

return cljs.core._global_hierarchy;
});
/**
* @param {...*} var_args
*/
cljs.core.swap_global_hierarchy_BANG_ = (function() { 
var swap_global_hierarchy_BANG___delegate = function (f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_BANG_,cljs.core.get_global_hierarchy(),f,args);
};
var swap_global_hierarchy_BANG_ = function (f,var_args){
var args = null;
if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return swap_global_hierarchy_BANG___delegate.call(this,f,args);};
swap_global_hierarchy_BANG_.cljs$lang$maxFixedArity = 1;
swap_global_hierarchy_BANG_.cljs$lang$applyTo = (function (arglist__16001){
var f = cljs.core.first(arglist__16001);
var args = cljs.core.rest(arglist__16001);
return swap_global_hierarchy_BANG___delegate(f,args);
});
swap_global_hierarchy_BANG_.cljs$core$IFn$_invoke$arity$variadic = swap_global_hierarchy_BANG___delegate;
return swap_global_hierarchy_BANG_;
})()
;
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a JavaScript type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___2 = (function (child,parent){
return isa_QMARK_.cljs$core$IFn$_invoke$arity$3((function (){var G__16066 = cljs.core.get_global_hierarchy();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16066) : cljs.core.deref.call(null,G__16066));
})(),child,parent);
});
var isa_QMARK___3 = (function (h,child,parent){
var or__3638__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child,parent);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = cljs.core.contains_QMARK_(cljs.core.constant$keyword$40.cljs$core$IFn$_invoke$arity$1(h).call(null,child),parent);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
var and__3626__auto__ = cljs.core.vector_QMARK_(parent);
if(and__3626__auto__){
var and__3626__auto____$1 = cljs.core.vector_QMARK_(child);
if(and__3626__auto____$1){
var and__3626__auto____$2 = (cljs.core.count(parent) === cljs.core.count(child));
if(and__3626__auto____$2){
var ret = true;
var i = (0);
while(true){
if((!(ret)) || ((i === cljs.core.count(parent)))){
return ret;
} else {
var G__16091 = isa_QMARK_.cljs$core$IFn$_invoke$arity$3(h,(function (){var G__16089 = i;
return (child.cljs$core$IFn$_invoke$arity$1 ? child.cljs$core$IFn$_invoke$arity$1(G__16089) : child.call(null,G__16089));
})(),(function (){var G__16090 = i;
return (parent.cljs$core$IFn$_invoke$arity$1 ? parent.cljs$core$IFn$_invoke$arity$1(G__16090) : parent.call(null,G__16090));
})());
var G__16092 = (i + (1));
ret = G__16091;
i = G__16092;
continue;
}
break;
}
} else {
return and__3626__auto____$2;
}
} else {
return and__3626__auto____$1;
}
} else {
return and__3626__auto__;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case 2:
return isa_QMARK___2.call(this,h,child);
case 3:
return isa_QMARK___3.call(this,h,child,parent);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
isa_QMARK_.cljs$core$IFn$_invoke$arity$2 = isa_QMARK___2;
isa_QMARK_.cljs$core$IFn$_invoke$arity$3 = isa_QMARK___3;
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__1 = (function (tag){
return parents.cljs$core$IFn$_invoke$arity$2((function (){var G__16096 = cljs.core.get_global_hierarchy();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16096) : cljs.core.deref.call(null,G__16096));
})(),tag);
});
var parents__2 = (function (h,tag){
return cljs.core.not_empty(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$38.cljs$core$IFn$_invoke$arity$1(h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case 1:
return parents__1.call(this,h);
case 2:
return parents__2.call(this,h,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
parents.cljs$core$IFn$_invoke$arity$1 = parents__1;
parents.cljs$core$IFn$_invoke$arity$2 = parents__2;
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__1 = (function (tag){
return ancestors.cljs$core$IFn$_invoke$arity$2((function (){var G__16100 = cljs.core.get_global_hierarchy();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16100) : cljs.core.deref.call(null,G__16100));
})(),tag);
});
var ancestors__2 = (function (h,tag){
return cljs.core.not_empty(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$40.cljs$core$IFn$_invoke$arity$1(h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case 1:
return ancestors__1.call(this,h);
case 2:
return ancestors__2.call(this,h,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ancestors.cljs$core$IFn$_invoke$arity$1 = ancestors__1;
ancestors.cljs$core$IFn$_invoke$arity$2 = ancestors__2;
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on JavaScript type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__1 = (function (tag){
return descendants.cljs$core$IFn$_invoke$arity$2((function (){var G__16104 = cljs.core.get_global_hierarchy();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16104) : cljs.core.deref.call(null,G__16104));
})(),tag);
});
var descendants__2 = (function (h,tag){
return cljs.core.not_empty(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$39.cljs$core$IFn$_invoke$arity$1(h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case 1:
return descendants__1.call(this,h);
case 2:
return descendants__2.call(this,h,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
descendants.cljs$core$IFn$_invoke$arity$1 = descendants__1;
descendants.cljs$core$IFn$_invoke$arity$2 = descendants__2;
return descendants;
})()
;
/**
* Establishes a parent/child relationship between parent and
* tag. Parent must be a namespace-qualified symbol or keyword and
* child can be either a namespace-qualified symbol or keyword or a
* class. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.derive = (function() {
var derive = null;
var derive__2 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace(parent))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"namespace","namespace",1263021155,null),new cljs.core.Symbol(null,"parent","parent",761652748,null))], 0)))].join('')));
}

cljs.core.swap_global_hierarchy_BANG_.cljs$core$IFn$_invoke$arity$variadic(derive,cljs.core.array_seq([tag,parent], 0));

return null;
});
var derive__3 = (function (h,tag,parent){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(tag,parent)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"parent","parent",761652748,null))], 0)))].join('')));
}

var tp = cljs.core.constant$keyword$38.cljs$core$IFn$_invoke$arity$1(h);
var td = cljs.core.constant$keyword$39.cljs$core$IFn$_invoke$arity$1(h);
var ta = cljs.core.constant$keyword$40.cljs$core$IFn$_invoke$arity$1(h);
var tf = ((function (tp,td,ta){
return (function (m,source,sources,target,targets){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (tp,td,ta){
return (function (ret,k){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.get.cljs$core$IFn$_invoke$arity$3(targets,k,cljs.core.PersistentHashSet.EMPTY),cljs.core.cons(target,(function (){var G__16113 = target;
return (targets.cljs$core$IFn$_invoke$arity$1 ? targets.cljs$core$IFn$_invoke$arity$1(G__16113) : targets.call(null,G__16113));
})())));
});})(tp,td,ta))
,m,cljs.core.cons(source,(function (){var G__16114 = source;
return (sources.cljs$core$IFn$_invoke$arity$1 ? sources.cljs$core$IFn$_invoke$arity$1(G__16114) : sources.call(null,G__16114));
})()));
});})(tp,td,ta))
;
var or__3638__auto__ = ((cljs.core.contains_QMARK_((function (){var G__16118 = tag;
return (tp.cljs$core$IFn$_invoke$arity$1 ? tp.cljs$core$IFn$_invoke$arity$1(G__16118) : tp.call(null,G__16118));
})(),parent))?null:(function (){
if(cljs.core.contains_QMARK_((function (){var G__16119 = tag;
return (ta.cljs$core$IFn$_invoke$arity$1 ? ta.cljs$core$IFn$_invoke$arity$1(G__16119) : ta.call(null,G__16119));
})(),parent)){
throw (new Error([cljs.core.str(tag),cljs.core.str("already has"),cljs.core.str(parent),cljs.core.str("as ancestor")].join('')));
} else {
}

if(cljs.core.contains_QMARK_((function (){var G__16120 = parent;
return (ta.cljs$core$IFn$_invoke$arity$1 ? ta.cljs$core$IFn$_invoke$arity$1(G__16120) : ta.call(null,G__16120));
})(),tag)){
throw (new Error([cljs.core.str("Cyclic derivation:"),cljs.core.str(parent),cljs.core.str("has"),cljs.core.str(tag),cljs.core.str("as ancestor")].join('')));
} else {
}

return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$38,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$38.cljs$core$IFn$_invoke$arity$1(h),tag,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(tp,tag,cljs.core.PersistentHashSet.EMPTY),parent)),cljs.core.constant$keyword$40,tf(cljs.core.constant$keyword$40.cljs$core$IFn$_invoke$arity$1(h),tag,td,parent,ta),cljs.core.constant$keyword$39,tf(cljs.core.constant$keyword$39.cljs$core$IFn$_invoke$arity$1(h),parent,ta,tag,td)], null);
})()
);
if(cljs.core.truth_(or__3638__auto__)){
return or__3638__auto__;
} else {
return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case 2:
return derive__2.call(this,h,tag);
case 3:
return derive__3.call(this,h,tag,parent);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
derive.cljs$core$IFn$_invoke$arity$2 = derive__2;
derive.cljs$core$IFn$_invoke$arity$3 = derive__3;
return derive;
})()
;
/**
* Removes a parent/child relationship between parent and
* tag. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.underive = (function() {
var underive = null;
var underive__2 = (function (tag,parent){
cljs.core.swap_global_hierarchy_BANG_.cljs$core$IFn$_invoke$arity$variadic(underive,cljs.core.array_seq([tag,parent], 0));

return null;
});
var underive__3 = (function (h,tag,parent){
var parentMap = cljs.core.constant$keyword$38.cljs$core$IFn$_invoke$arity$1(h);
var childsParents = (cljs.core.truth_((function (){var G__16127 = tag;
return (parentMap.cljs$core$IFn$_invoke$arity$1 ? parentMap.cljs$core$IFn$_invoke$arity$1(G__16127) : parentMap.call(null,G__16127));
})())?cljs.core.disj.cljs$core$IFn$_invoke$arity$2((function (){var G__16128 = tag;
return (parentMap.cljs$core$IFn$_invoke$arity$1 ? parentMap.cljs$core$IFn$_invoke$arity$1(G__16128) : parentMap.call(null,G__16128));
})(),parent):cljs.core.PersistentHashSet.EMPTY);
var newParents = (cljs.core.truth_(cljs.core.not_empty(childsParents))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parentMap,tag,childsParents):cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(parentMap,tag));
var deriv_seq = cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (parentMap,childsParents,newParents){
return (function (p1__16121_SHARP_){
return cljs.core.cons(cljs.core.first(p1__16121_SHARP_),cljs.core.interpose(cljs.core.first(p1__16121_SHARP_),cljs.core.second(p1__16121_SHARP_)));
});})(parentMap,childsParents,newParents))
,cljs.core.seq(newParents)));
if(cljs.core.contains_QMARK_((function (){var G__16129 = tag;
return (parentMap.cljs$core$IFn$_invoke$arity$1 ? parentMap.cljs$core$IFn$_invoke$arity$1(G__16129) : parentMap.call(null,G__16129));
})(),parent)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (parentMap,childsParents,newParents,deriv_seq){
return (function (p1__16122_SHARP_,p2__16123_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.derive,p1__16122_SHARP_,p2__16123_SHARP_);
});})(parentMap,childsParents,newParents,deriv_seq))
,cljs.core.make_hierarchy(),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),deriv_seq));
} else {
return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case 2:
return underive__2.call(this,h,tag);
case 3:
return underive__3.call(this,h,tag,parent);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
underive.cljs$core$IFn$_invoke$arity$2 = underive__2;
underive.cljs$core$IFn$_invoke$arity$3 = underive__3;
return underive;
})()
;
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(method_cache,(function (_){
var G__16132 = method_table;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16132) : cljs.core.deref.call(null,G__16132));
}));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cached_hierarchy,(function (_){
var G__16133 = hierarchy;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16133) : cljs.core.deref.call(null,G__16133));
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){
var xprefs = (function (){var G__16149 = prefer_table;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16149) : cljs.core.deref.call(null,G__16149));
})().call(null,x);
var or__3638__auto__ = (cljs.core.truth_((function (){var and__3626__auto__ = xprefs;
if(cljs.core.truth_(and__3626__auto__)){
var G__16151 = y;
return (xprefs.cljs$core$IFn$_invoke$arity$1 ? xprefs.cljs$core$IFn$_invoke$arity$1(G__16151) : xprefs.call(null,G__16151));
} else {
return and__3626__auto__;
}
})())?true:null);
if(cljs.core.truth_(or__3638__auto__)){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (function (){var ps = cljs.core.parents.cljs$core$IFn$_invoke$arity$1(y);
while(true){
if((cljs.core.count(ps) > (0))){
if(cljs.core.truth_(prefers_STAR_(x,cljs.core.first(ps),prefer_table))){
} else {
}

var G__16152 = cljs.core.rest(ps);
ps = G__16152;
continue;
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(or__3638__auto____$1)){
return or__3638__auto____$1;
} else {
var or__3638__auto____$2 = (function (){var ps = cljs.core.parents.cljs$core$IFn$_invoke$arity$1(x);
while(true){
if((cljs.core.count(ps) > (0))){
if(cljs.core.truth_(prefers_STAR_(cljs.core.first(ps),y,prefer_table))){
} else {
}

var G__16153 = cljs.core.rest(ps);
ps = G__16153;
continue;
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(or__3638__auto____$2)){
return or__3638__auto____$2;
} else {
return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3638__auto__ = cljs.core.prefers_STAR_(x,y,prefer_table);
if(cljs.core.truth_(or__3638__auto__)){
return or__3638__auto__;
} else {
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (be,p__16167){
var vec__16168 = p__16167;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16168,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16168,(1),null);
var e = vec__16168;
if(cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$3((function (){var G__16169 = hierarchy;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16169) : cljs.core.deref.call(null,G__16169));
})(),dispatch_val,k)){
var be2 = (cljs.core.truth_((function (){var or__3638__auto__ = (be == null);
if(or__3638__auto__){
return or__3638__auto__;
} else {
return cljs.core.dominates(k,cljs.core.first(be),prefer_table);
}
})())?e:be);
if(cljs.core.truth_(cljs.core.dominates(cljs.core.first(be2),k,prefer_table))){
} else {
throw (new Error([cljs.core.str("Multiple methods in multimethod '"),cljs.core.str(name),cljs.core.str("' match dispatch value: "),cljs.core.str(dispatch_val),cljs.core.str(" -> "),cljs.core.str(k),cljs.core.str(" and "),cljs.core.str(cljs.core.first(be2)),cljs.core.str(", and neither is preferred")].join('')));
}

return be2;
} else {
return be;
}
}),null,(function (){var G__16170 = method_table;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16170) : cljs.core.deref.call(null,G__16170));
})());
if(cljs.core.truth_(best_entry)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__16171 = cached_hierarchy;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16171) : cljs.core.deref.call(null,G__16171));
})(),(function (){var G__16172 = hierarchy;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16172) : cljs.core.deref.call(null,G__16172));
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(method_cache,cljs.core.assoc,dispatch_val,cljs.core.second(best_entry));

return cljs.core.second(best_entry);
} else {
cljs.core.reset_cache(method_cache,method_table,cached_hierarchy,hierarchy);

return find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else {
return null;
}
});

cljs.core.IMultiFn = (function (){var obj16174 = {};
return obj16174;
})();

cljs.core._reset = (function _reset(mf){
if((function (){var and__3626__auto__ = mf;
if(and__3626__auto__){
return mf.cljs$core$IMultiFn$_reset$arity$1;
} else {
return and__3626__auto__;
}
})()){
return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else {
var x__4282__auto__ = (((mf == null))?null:mf);
return (function (){var or__3638__auto__ = (cljs.core._reset[(function (){var G__16178 = x__4282__auto__;
return goog.typeOf(G__16178);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core._reset["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});

cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if((function (){var and__3626__auto__ = mf;
if(and__3626__auto__){
return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else {
return and__3626__auto__;
}
})()){
return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else {
var x__4282__auto__ = (((mf == null))?null:mf);
return (function (){var or__3638__auto__ = (cljs.core._add_method[(function (){var G__16182 = x__4282__auto__;
return goog.typeOf(G__16182);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core._add_method["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});

cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if((function (){var and__3626__auto__ = mf;
if(and__3626__auto__){
return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else {
return and__3626__auto__;
}
})()){
return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else {
var x__4282__auto__ = (((mf == null))?null:mf);
return (function (){var or__3638__auto__ = (cljs.core._remove_method[(function (){var G__16186 = x__4282__auto__;
return goog.typeOf(G__16186);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core._remove_method["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});

cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if((function (){var and__3626__auto__ = mf;
if(and__3626__auto__){
return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else {
return and__3626__auto__;
}
})()){
return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else {
var x__4282__auto__ = (((mf == null))?null:mf);
return (function (){var or__3638__auto__ = (cljs.core._prefer_method[(function (){var G__16190 = x__4282__auto__;
return goog.typeOf(G__16190);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core._prefer_method["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});

cljs.core._get_method = (function _get_method(mf,dispatch_val){
if((function (){var and__3626__auto__ = mf;
if(and__3626__auto__){
return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else {
return and__3626__auto__;
}
})()){
return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else {
var x__4282__auto__ = (((mf == null))?null:mf);
return (function (){var or__3638__auto__ = (cljs.core._get_method[(function (){var G__16194 = x__4282__auto__;
return goog.typeOf(G__16194);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core._get_method["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});

cljs.core._methods = (function _methods(mf){
if((function (){var and__3626__auto__ = mf;
if(and__3626__auto__){
return mf.cljs$core$IMultiFn$_methods$arity$1;
} else {
return and__3626__auto__;
}
})()){
return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else {
var x__4282__auto__ = (((mf == null))?null:mf);
return (function (){var or__3638__auto__ = (cljs.core._methods[(function (){var G__16198 = x__4282__auto__;
return goog.typeOf(G__16198);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core._methods["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});

cljs.core._prefers = (function _prefers(mf){
if((function (){var and__3626__auto__ = mf;
if(and__3626__auto__){
return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else {
return and__3626__auto__;
}
})()){
return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else {
var x__4282__auto__ = (((mf == null))?null:mf);
return (function (){var or__3638__auto__ = (cljs.core._prefers[(function (){var G__16202 = x__4282__auto__;
return goog.typeOf(G__16202);
})()]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core._prefers["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol("IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});

cljs.core.throw_no_method_error = (function throw_no_method_error(name,dispatch_val){
throw (new Error([cljs.core.str("No method in multimethod '"),cljs.core.str(name),cljs.core.str("' for dispatch value: "),cljs.core.str(dispatch_val)].join('')));
});

/**
* @constructor
*/
cljs.core.MultiFn = (function (name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
this.name = name;
this.dispatch_fn = dispatch_fn;
this.default_dispatch_val = default_dispatch_val;
this.hierarchy = hierarchy;
this.method_table = method_table;
this.prefer_table = prefer_table;
this.method_cache = method_cache;
this.cached_hierarchy = cached_hierarchy;
this.cljs$lang$protocol_mask$partition0$ = 4194305;
this.cljs$lang$protocol_mask$partition1$ = 4352;
})
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__16204 = this$__$1;
return goog.getUid(G__16204);
});

cljs.core.MultiFn.prototype.cljs$core$INamed$_name$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._name(self__.name);
});

cljs.core.MultiFn.prototype.cljs$core$INamed$_namespace$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._namespace(self__.name);
});

cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = (function (mf){
var self__ = this;
var mf__$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.method_table,((function (mf__$1){
return (function (mf__$2){
return cljs.core.PersistentArrayMap.EMPTY;
});})(mf__$1))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.method_cache,((function (mf__$1){
return (function (mf__$2){
return cljs.core.PersistentArrayMap.EMPTY;
});})(mf__$1))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.prefer_table,((function (mf__$1){
return (function (mf__$2){
return cljs.core.PersistentArrayMap.EMPTY;
});})(mf__$1))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.cached_hierarchy,((function (mf__$1){
return (function (mf__$2){
return null;
});})(mf__$1))
);

return mf__$1;
});

cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = (function (mf,dispatch_val,method){
var self__ = this;
var mf__$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.method_table,cljs.core.assoc,dispatch_val,method);

cljs.core.reset_cache(self__.method_cache,self__.method_table,self__.cached_hierarchy,self__.hierarchy);

return mf__$1;
});

cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = (function (mf,dispatch_val){
var self__ = this;
var mf__$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.method_table,cljs.core.dissoc,dispatch_val);

cljs.core.reset_cache(self__.method_cache,self__.method_table,self__.cached_hierarchy,self__.hierarchy);

return mf__$1;
});

cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = (function (mf,dispatch_val){
var self__ = this;
var mf__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__16205 = self__.cached_hierarchy;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16205) : cljs.core.deref.call(null,G__16205));
})(),(function (){var G__16206 = self__.hierarchy;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16206) : cljs.core.deref.call(null,G__16206));
})())){
} else {
cljs.core.reset_cache(self__.method_cache,self__.method_table,self__.cached_hierarchy,self__.hierarchy);
}

var temp__4124__auto__ = (function (){var G__16207 = self__.method_cache;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16207) : cljs.core.deref.call(null,G__16207));
})().call(null,dispatch_val);
if(cljs.core.truth_(temp__4124__auto__)){
var target_fn = temp__4124__auto__;
return target_fn;
} else {
var temp__4124__auto____$1 = cljs.core.find_and_cache_best_method(self__.name,dispatch_val,self__.hierarchy,self__.method_table,self__.prefer_table,self__.method_cache,self__.cached_hierarchy);
if(cljs.core.truth_(temp__4124__auto____$1)){
var target_fn = temp__4124__auto____$1;
return target_fn;
} else {
return (function (){var G__16208 = self__.method_table;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16208) : cljs.core.deref.call(null,G__16208));
})().call(null,self__.default_dispatch_val);
}
}
});

cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = (function (mf,dispatch_val_x,dispatch_val_y){
var self__ = this;
var mf__$1 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_(dispatch_val_x,dispatch_val_y,self__.prefer_table))){
throw (new Error([cljs.core.str("Preference conflict in multimethod '"),cljs.core.str(self__.name),cljs.core.str("': "),cljs.core.str(dispatch_val_y),cljs.core.str(" is already preferred to "),cljs.core.str(dispatch_val_x)].join('')));
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.prefer_table,((function (mf__$1){
return (function (old){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(old,dispatch_val_x,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(old,dispatch_val_x,cljs.core.PersistentHashSet.EMPTY),dispatch_val_y));
});})(mf__$1))
);

return cljs.core.reset_cache(self__.method_cache,self__.method_table,self__.cached_hierarchy,self__.hierarchy);
});

cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = (function (mf){
var self__ = this;
var mf__$1 = this;
var G__16209 = self__.method_table;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16209) : cljs.core.deref.call(null,G__16209));
});

cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){
var self__ = this;
var mf__$1 = this;
var G__16210 = self__.prefer_table;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16210) : cljs.core.deref.call(null,G__16210));
});

cljs.core.MultiFn.prototype.call = (function() {
var G__17051 = null;
var G__17051__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$0 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$0() : self__.dispatch_fn.call(null));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

return (target_fn.cljs$core$IFn$_invoke$arity$0 ? target_fn.cljs$core$IFn$_invoke$arity$0() : target_fn.call(null));
});
var G__17051__2 = (function (self__,a){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__16211 = a;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$1 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$1(G__16211) : self__.dispatch_fn.call(null,G__16211));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__16212 = a;
return (target_fn.cljs$core$IFn$_invoke$arity$1 ? target_fn.cljs$core$IFn$_invoke$arity$1(G__16212) : target_fn.call(null,G__16212));
});
var G__17051__3 = (function (self__,a,b){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__16213 = a;
var G__16214 = b;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$2 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$2(G__16213,G__16214) : self__.dispatch_fn.call(null,G__16213,G__16214));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__16215 = a;
var G__16216 = b;
return (target_fn.cljs$core$IFn$_invoke$arity$2 ? target_fn.cljs$core$IFn$_invoke$arity$2(G__16215,G__16216) : target_fn.call(null,G__16215,G__16216));
});
var G__17051__4 = (function (self__,a,b,c){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__16217 = a;
var G__16218 = b;
var G__16219 = c;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$3 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$3(G__16217,G__16218,G__16219) : self__.dispatch_fn.call(null,G__16217,G__16218,G__16219));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__16220 = a;
var G__16221 = b;
var G__16222 = c;
return (target_fn.cljs$core$IFn$_invoke$arity$3 ? target_fn.cljs$core$IFn$_invoke$arity$3(G__16220,G__16221,G__16222) : target_fn.call(null,G__16220,G__16221,G__16222));
});
var G__17051__5 = (function (self__,a,b,c,d){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__16223 = a;
var G__16224 = b;
var G__16225 = c;
var G__16226 = d;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$4 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$4(G__16223,G__16224,G__16225,G__16226) : self__.dispatch_fn.call(null,G__16223,G__16224,G__16225,G__16226));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__16227 = a;
var G__16228 = b;
var G__16229 = c;
var G__16230 = d;
return (target_fn.cljs$core$IFn$_invoke$arity$4 ? target_fn.cljs$core$IFn$_invoke$arity$4(G__16227,G__16228,G__16229,G__16230) : target_fn.call(null,G__16227,G__16228,G__16229,G__16230));
});
var G__17051__6 = (function (self__,a,b,c,d,e){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__16231 = a;
var G__16232 = b;
var G__16233 = c;
var G__16234 = d;
var G__16235 = e;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$5 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$5(G__16231,G__16232,G__16233,G__16234,G__16235) : self__.dispatch_fn.call(null,G__16231,G__16232,G__16233,G__16234,G__16235));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__16236 = a;
var G__16237 = b;
var G__16238 = c;
var G__16239 = d;
var G__16240 = e;
return (target_fn.cljs$core$IFn$_invoke$arity$5 ? target_fn.cljs$core$IFn$_invoke$arity$5(G__16236,G__16237,G__16238,G__16239,G__16240) : target_fn.call(null,G__16236,G__16237,G__16238,G__16239,G__16240));
});
var G__17051__7 = (function (self__,a,b,c,d,e,f){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__16241 = a;
var G__16242 = b;
var G__16243 = c;
var G__16244 = d;
var G__16245 = e;
var G__16246 = f;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$6 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$6(G__16241,G__16242,G__16243,G__16244,G__16245,G__16246) : self__.dispatch_fn.call(null,G__16241,G__16242,G__16243,G__16244,G__16245,G__16246));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__16247 = a;
var G__16248 = b;
var G__16249 = c;
var G__16250 = d;
var G__16251 = e;
var G__16252 = f;
return (target_fn.cljs$core$IFn$_invoke$arity$6 ? target_fn.cljs$core$IFn$_invoke$arity$6(G__16247,G__16248,G__16249,G__16250,G__16251,G__16252) : target_fn.call(null,G__16247,G__16248,G__16249,G__16250,G__16251,G__16252));
});
var G__17051__8 = (function (self__,a,b,c,d,e,f,g){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__16253 = a;
var G__16254 = b;
var G__16255 = c;
var G__16256 = d;
var G__16257 = e;
var G__16258 = f;
var G__16259 = g;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$7 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$7(G__16253,G__16254,G__16255,G__16256,G__16257,G__16258,G__16259) : self__.dispatch_fn.call(null,G__16253,G__16254,G__16255,G__16256,G__16257,G__16258,G__16259));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__16260 = a;
var G__16261 = b;
var G__16262 = c;
var G__16263 = d;
var G__16264 = e;
var G__16265 = f;
var G__16266 = g;
return (target_fn.cljs$core$IFn$_invoke$arity$7 ? target_fn.cljs$core$IFn$_invoke$arity$7(G__16260,G__16261,G__16262,G__16263,G__16264,G__16265,G__16266) : target_fn.call(null,G__16260,G__16261,G__16262,G__16263,G__16264,G__16265,G__16266));
});
var G__17051__9 = (function (self__,a,b,c,d,e,f,g,h){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__16267 = a;
var G__16268 = b;
var G__16269 = c;
var G__16270 = d;
var G__16271 = e;
var G__16272 = f;
var G__16273 = g;
var G__16274 = h;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$8 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$8(G__16267,G__16268,G__16269,G__16270,G__16271,G__16272,G__16273,G__16274) : self__.dispatch_fn.call(null,G__16267,G__16268,G__16269,G__16270,G__16271,G__16272,G__16273,G__16274));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__16275 = a;
var G__16276 = b;
var G__16277 = c;
var G__16278 = d;
var G__16279 = e;
var G__16280 = f;
var G__16281 = g;
var G__16282 = h;
return (target_fn.cljs$core$IFn$_invoke$arity$8 ? target_fn.cljs$core$IFn$_invoke$arity$8(G__16275,G__16276,G__16277,G__16278,G__16279,G__16280,G__16281,G__16282) : target_fn.call(null,G__16275,G__16276,G__16277,G__16278,G__16279,G__16280,G__16281,G__16282));
});
var G__17051__10 = (function (self__,a,b,c,d,e,f,g,h,i){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__16283 = a;
var G__16284 = b;
var G__16285 = c;
var G__16286 = d;
var G__16287 = e;
var G__16288 = f;
var G__16289 = g;
var G__16290 = h;
var G__16291 = i;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$9 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$9(G__16283,G__16284,G__16285,G__16286,G__16287,G__16288,G__16289,G__16290,G__16291) : self__.dispatch_fn.call(null,G__16283,G__16284,G__16285,G__16286,G__16287,G__16288,G__16289,G__16290,G__16291));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__16292 = a;
var G__16293 = b;
var G__16294 = c;
var G__16295 = d;
var G__16296 = e;
var G__16297 = f;
var G__16298 = g;
var G__16299 = h;
var G__16300 = i;
return (target_fn.cljs$core$IFn$_invoke$arity$9 ? target_fn.cljs$core$IFn$_invoke$arity$9(G__16292,G__16293,G__16294,G__16295,G__16296,G__16297,G__16298,G__16299,G__16300) : target_fn.call(null,G__16292,G__16293,G__16294,G__16295,G__16296,G__16297,G__16298,G__16299,G__16300));
});
var G__17051__11 = (function (self__,a,b,c,d,e,f,g,h,i,j){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__16301 = a;
var G__16302 = b;
var G__16303 = c;
var G__16304 = d;
var G__16305 = e;
var G__16306 = f;
var G__16307 = g;
var G__16308 = h;
var G__16309 = i;
var G__16310 = j;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$10 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$10(G__16301,G__16302,G__16303,G__16304,G__16305,G__16306,G__16307,G__16308,G__16309,G__16310) : self__.dispatch_fn.call(null,G__16301,G__16302,G__16303,G__16304,G__16305,G__16306,G__16307,G__16308,G__16309,G__16310));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__16311 = a;
var G__16312 = b;
var G__16313 = c;
var G__16314 = d;
var G__16315 = e;
var G__16316 = f;
var G__16317 = g;
var G__16318 = h;
var G__16319 = i;
var G__16320 = j;
return (target_fn.cljs$core$IFn$_invoke$arity$10 ? target_fn.cljs$core$IFn$_invoke$arity$10(G__16311,G__16312,G__16313,G__16314,G__16315,G__16316,G__16317,G__16318,G__16319,G__16320) : target_fn.call(null,G__16311,G__16312,G__16313,G__16314,G__16315,G__16316,G__16317,G__16318,G__16319,G__16320));
});
var G__17051__12 = (function (self__,a,b,c,d,e,f,g,h,i,j,k){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__16321 = a;
var G__16322 = b;
var G__16323 = c;
var G__16324 = d;
var G__16325 = e;
var G__16326 = f;
var G__16327 = g;
var G__16328 = h;
var G__16329 = i;
var G__16330 = j;
var G__16331 = k;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$11 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$11(G__16321,G__16322,G__16323,G__16324,G__16325,G__16326,G__16327,G__16328,G__16329,G__16330,G__16331) : self__.dispatch_fn.call(null,G__16321,G__16322,G__16323,G__16324,G__16325,G__16326,G__16327,G__16328,G__16329,G__16330,G__16331));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__16332 = a;
var G__16333 = b;
var G__16334 = c;
var G__16335 = d;
var G__16336 = e;
var G__16337 = f;
var G__16338 = g;
var G__16339 = h;
var G__16340 = i;
var G__16341 = j;
var G__16342 = k;
return (target_fn.cljs$core$IFn$_invoke$arity$11 ? target_fn.cljs$core$IFn$_invoke$arity$11(G__16332,G__16333,G__16334,G__16335,G__16336,G__16337,G__16338,G__16339,G__16340,G__16341,G__16342) : target_fn.call(null,G__16332,G__16333,G__16334,G__16335,G__16336,G__16337,G__16338,G__16339,G__16340,G__16341,G__16342));
});
var G__17051__13 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__16343 = a;
var G__16344 = b;
var G__16345 = c;
var G__16346 = d;
var G__16347 = e;
var G__16348 = f;
var G__16349 = g;
var G__16350 = h;
var G__16351 = i;
var G__16352 = j;
var G__16353 = k;
var G__16354 = l;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$12 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$12(G__16343,G__16344,G__16345,G__16346,G__16347,G__16348,G__16349,G__16350,G__16351,G__16352,G__16353,G__16354) : self__.dispatch_fn.call(null,G__16343,G__16344,G__16345,G__16346,G__16347,G__16348,G__16349,G__16350,G__16351,G__16352,G__16353,G__16354));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__16355 = a;
var G__16356 = b;
var G__16357 = c;
var G__16358 = d;
var G__16359 = e;
var G__16360 = f;
var G__16361 = g;
var G__16362 = h;
var G__16363 = i;
var G__16364 = j;
var G__16365 = k;
var G__16366 = l;
return (target_fn.cljs$core$IFn$_invoke$arity$12 ? target_fn.cljs$core$IFn$_invoke$arity$12(G__16355,G__16356,G__16357,G__16358,G__16359,G__16360,G__16361,G__16362,G__16363,G__16364,G__16365,G__16366) : target_fn.call(null,G__16355,G__16356,G__16357,G__16358,G__16359,G__16360,G__16361,G__16362,G__16363,G__16364,G__16365,G__16366));
});
var G__17051__14 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__16367 = a;
var G__16368 = b;
var G__16369 = c;
var G__16370 = d;
var G__16371 = e;
var G__16372 = f;
var G__16373 = g;
var G__16374 = h;
var G__16375 = i;
var G__16376 = j;
var G__16377 = k;
var G__16378 = l;
var G__16379 = m;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$13 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$13(G__16367,G__16368,G__16369,G__16370,G__16371,G__16372,G__16373,G__16374,G__16375,G__16376,G__16377,G__16378,G__16379) : self__.dispatch_fn.call(null,G__16367,G__16368,G__16369,G__16370,G__16371,G__16372,G__16373,G__16374,G__16375,G__16376,G__16377,G__16378,G__16379));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__16380 = a;
var G__16381 = b;
var G__16382 = c;
var G__16383 = d;
var G__16384 = e;
var G__16385 = f;
var G__16386 = g;
var G__16387 = h;
var G__16388 = i;
var G__16389 = j;
var G__16390 = k;
var G__16391 = l;
var G__16392 = m;
return (target_fn.cljs$core$IFn$_invoke$arity$13 ? target_fn.cljs$core$IFn$_invoke$arity$13(G__16380,G__16381,G__16382,G__16383,G__16384,G__16385,G__16386,G__16387,G__16388,G__16389,G__16390,G__16391,G__16392) : target_fn.call(null,G__16380,G__16381,G__16382,G__16383,G__16384,G__16385,G__16386,G__16387,G__16388,G__16389,G__16390,G__16391,G__16392));
});
var G__17051__15 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__16393 = a;
var G__16394 = b;
var G__16395 = c;
var G__16396 = d;
var G__16397 = e;
var G__16398 = f;
var G__16399 = g;
var G__16400 = h;
var G__16401 = i;
var G__16402 = j;
var G__16403 = k;
var G__16404 = l;
var G__16405 = m;
var G__16406 = n;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$14 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$14(G__16393,G__16394,G__16395,G__16396,G__16397,G__16398,G__16399,G__16400,G__16401,G__16402,G__16403,G__16404,G__16405,G__16406) : self__.dispatch_fn.call(null,G__16393,G__16394,G__16395,G__16396,G__16397,G__16398,G__16399,G__16400,G__16401,G__16402,G__16403,G__16404,G__16405,G__16406));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__16407 = a;
var G__16408 = b;
var G__16409 = c;
var G__16410 = d;
var G__16411 = e;
var G__16412 = f;
var G__16413 = g;
var G__16414 = h;
var G__16415 = i;
var G__16416 = j;
var G__16417 = k;
var G__16418 = l;
var G__16419 = m;
var G__16420 = n;
return (target_fn.cljs$core$IFn$_invoke$arity$14 ? target_fn.cljs$core$IFn$_invoke$arity$14(G__16407,G__16408,G__16409,G__16410,G__16411,G__16412,G__16413,G__16414,G__16415,G__16416,G__16417,G__16418,G__16419,G__16420) : target_fn.call(null,G__16407,G__16408,G__16409,G__16410,G__16411,G__16412,G__16413,G__16414,G__16415,G__16416,G__16417,G__16418,G__16419,G__16420));
});
var G__17051__16 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__16421 = a;
var G__16422 = b;
var G__16423 = c;
var G__16424 = d;
var G__16425 = e;
var G__16426 = f;
var G__16427 = g;
var G__16428 = h;
var G__16429 = i;
var G__16430 = j;
var G__16431 = k;
var G__16432 = l;
var G__16433 = m;
var G__16434 = n;
var G__16435 = o;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$15 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$15(G__16421,G__16422,G__16423,G__16424,G__16425,G__16426,G__16427,G__16428,G__16429,G__16430,G__16431,G__16432,G__16433,G__16434,G__16435) : self__.dispatch_fn.call(null,G__16421,G__16422,G__16423,G__16424,G__16425,G__16426,G__16427,G__16428,G__16429,G__16430,G__16431,G__16432,G__16433,G__16434,G__16435));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__16436 = a;
var G__16437 = b;
var G__16438 = c;
var G__16439 = d;
var G__16440 = e;
var G__16441 = f;
var G__16442 = g;
var G__16443 = h;
var G__16444 = i;
var G__16445 = j;
var G__16446 = k;
var G__16447 = l;
var G__16448 = m;
var G__16449 = n;
var G__16450 = o;
return (target_fn.cljs$core$IFn$_invoke$arity$15 ? target_fn.cljs$core$IFn$_invoke$arity$15(G__16436,G__16437,G__16438,G__16439,G__16440,G__16441,G__16442,G__16443,G__16444,G__16445,G__16446,G__16447,G__16448,G__16449,G__16450) : target_fn.call(null,G__16436,G__16437,G__16438,G__16439,G__16440,G__16441,G__16442,G__16443,G__16444,G__16445,G__16446,G__16447,G__16448,G__16449,G__16450));
});
var G__17051__17 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__16451 = a;
var G__16452 = b;
var G__16453 = c;
var G__16454 = d;
var G__16455 = e;
var G__16456 = f;
var G__16457 = g;
var G__16458 = h;
var G__16459 = i;
var G__16460 = j;
var G__16461 = k;
var G__16462 = l;
var G__16463 = m;
var G__16464 = n;
var G__16465 = o;
var G__16466 = p;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$16 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$16(G__16451,G__16452,G__16453,G__16454,G__16455,G__16456,G__16457,G__16458,G__16459,G__16460,G__16461,G__16462,G__16463,G__16464,G__16465,G__16466) : self__.dispatch_fn.call(null,G__16451,G__16452,G__16453,G__16454,G__16455,G__16456,G__16457,G__16458,G__16459,G__16460,G__16461,G__16462,G__16463,G__16464,G__16465,G__16466));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__16467 = a;
var G__16468 = b;
var G__16469 = c;
var G__16470 = d;
var G__16471 = e;
var G__16472 = f;
var G__16473 = g;
var G__16474 = h;
var G__16475 = i;
var G__16476 = j;
var G__16477 = k;
var G__16478 = l;
var G__16479 = m;
var G__16480 = n;
var G__16481 = o;
var G__16482 = p;
return (target_fn.cljs$core$IFn$_invoke$arity$16 ? target_fn.cljs$core$IFn$_invoke$arity$16(G__16467,G__16468,G__16469,G__16470,G__16471,G__16472,G__16473,G__16474,G__16475,G__16476,G__16477,G__16478,G__16479,G__16480,G__16481,G__16482) : target_fn.call(null,G__16467,G__16468,G__16469,G__16470,G__16471,G__16472,G__16473,G__16474,G__16475,G__16476,G__16477,G__16478,G__16479,G__16480,G__16481,G__16482));
});
var G__17051__18 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__16483 = a;
var G__16484 = b;
var G__16485 = c;
var G__16486 = d;
var G__16487 = e;
var G__16488 = f;
var G__16489 = g;
var G__16490 = h;
var G__16491 = i;
var G__16492 = j;
var G__16493 = k;
var G__16494 = l;
var G__16495 = m;
var G__16496 = n;
var G__16497 = o;
var G__16498 = p;
var G__16499 = q;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$17 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$17(G__16483,G__16484,G__16485,G__16486,G__16487,G__16488,G__16489,G__16490,G__16491,G__16492,G__16493,G__16494,G__16495,G__16496,G__16497,G__16498,G__16499) : self__.dispatch_fn.call(null,G__16483,G__16484,G__16485,G__16486,G__16487,G__16488,G__16489,G__16490,G__16491,G__16492,G__16493,G__16494,G__16495,G__16496,G__16497,G__16498,G__16499));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__16500 = a;
var G__16501 = b;
var G__16502 = c;
var G__16503 = d;
var G__16504 = e;
var G__16505 = f;
var G__16506 = g;
var G__16507 = h;
var G__16508 = i;
var G__16509 = j;
var G__16510 = k;
var G__16511 = l;
var G__16512 = m;
var G__16513 = n;
var G__16514 = o;
var G__16515 = p;
var G__16516 = q;
return (target_fn.cljs$core$IFn$_invoke$arity$17 ? target_fn.cljs$core$IFn$_invoke$arity$17(G__16500,G__16501,G__16502,G__16503,G__16504,G__16505,G__16506,G__16507,G__16508,G__16509,G__16510,G__16511,G__16512,G__16513,G__16514,G__16515,G__16516) : target_fn.call(null,G__16500,G__16501,G__16502,G__16503,G__16504,G__16505,G__16506,G__16507,G__16508,G__16509,G__16510,G__16511,G__16512,G__16513,G__16514,G__16515,G__16516));
});
var G__17051__19 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__16517 = a;
var G__16518 = b;
var G__16519 = c;
var G__16520 = d;
var G__16521 = e;
var G__16522 = f;
var G__16523 = g;
var G__16524 = h;
var G__16525 = i;
var G__16526 = j;
var G__16527 = k;
var G__16528 = l;
var G__16529 = m;
var G__16530 = n;
var G__16531 = o;
var G__16532 = p;
var G__16533 = q;
var G__16534 = r;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$18 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$18(G__16517,G__16518,G__16519,G__16520,G__16521,G__16522,G__16523,G__16524,G__16525,G__16526,G__16527,G__16528,G__16529,G__16530,G__16531,G__16532,G__16533,G__16534) : self__.dispatch_fn.call(null,G__16517,G__16518,G__16519,G__16520,G__16521,G__16522,G__16523,G__16524,G__16525,G__16526,G__16527,G__16528,G__16529,G__16530,G__16531,G__16532,G__16533,G__16534));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__16535 = a;
var G__16536 = b;
var G__16537 = c;
var G__16538 = d;
var G__16539 = e;
var G__16540 = f;
var G__16541 = g;
var G__16542 = h;
var G__16543 = i;
var G__16544 = j;
var G__16545 = k;
var G__16546 = l;
var G__16547 = m;
var G__16548 = n;
var G__16549 = o;
var G__16550 = p;
var G__16551 = q;
var G__16552 = r;
return (target_fn.cljs$core$IFn$_invoke$arity$18 ? target_fn.cljs$core$IFn$_invoke$arity$18(G__16535,G__16536,G__16537,G__16538,G__16539,G__16540,G__16541,G__16542,G__16543,G__16544,G__16545,G__16546,G__16547,G__16548,G__16549,G__16550,G__16551,G__16552) : target_fn.call(null,G__16535,G__16536,G__16537,G__16538,G__16539,G__16540,G__16541,G__16542,G__16543,G__16544,G__16545,G__16546,G__16547,G__16548,G__16549,G__16550,G__16551,G__16552));
});
var G__17051__20 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__16553 = a;
var G__16554 = b;
var G__16555 = c;
var G__16556 = d;
var G__16557 = e;
var G__16558 = f;
var G__16559 = g;
var G__16560 = h;
var G__16561 = i;
var G__16562 = j;
var G__16563 = k;
var G__16564 = l;
var G__16565 = m;
var G__16566 = n;
var G__16567 = o;
var G__16568 = p;
var G__16569 = q;
var G__16570 = r;
var G__16571 = s;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$19 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$19(G__16553,G__16554,G__16555,G__16556,G__16557,G__16558,G__16559,G__16560,G__16561,G__16562,G__16563,G__16564,G__16565,G__16566,G__16567,G__16568,G__16569,G__16570,G__16571) : self__.dispatch_fn.call(null,G__16553,G__16554,G__16555,G__16556,G__16557,G__16558,G__16559,G__16560,G__16561,G__16562,G__16563,G__16564,G__16565,G__16566,G__16567,G__16568,G__16569,G__16570,G__16571));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__16572 = a;
var G__16573 = b;
var G__16574 = c;
var G__16575 = d;
var G__16576 = e;
var G__16577 = f;
var G__16578 = g;
var G__16579 = h;
var G__16580 = i;
var G__16581 = j;
var G__16582 = k;
var G__16583 = l;
var G__16584 = m;
var G__16585 = n;
var G__16586 = o;
var G__16587 = p;
var G__16588 = q;
var G__16589 = r;
var G__16590 = s;
return (target_fn.cljs$core$IFn$_invoke$arity$19 ? target_fn.cljs$core$IFn$_invoke$arity$19(G__16572,G__16573,G__16574,G__16575,G__16576,G__16577,G__16578,G__16579,G__16580,G__16581,G__16582,G__16583,G__16584,G__16585,G__16586,G__16587,G__16588,G__16589,G__16590) : target_fn.call(null,G__16572,G__16573,G__16574,G__16575,G__16576,G__16577,G__16578,G__16579,G__16580,G__16581,G__16582,G__16583,G__16584,G__16585,G__16586,G__16587,G__16588,G__16589,G__16590));
});
var G__17051__21 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__16591 = a;
var G__16592 = b;
var G__16593 = c;
var G__16594 = d;
var G__16595 = e;
var G__16596 = f;
var G__16597 = g;
var G__16598 = h;
var G__16599 = i;
var G__16600 = j;
var G__16601 = k;
var G__16602 = l;
var G__16603 = m;
var G__16604 = n;
var G__16605 = o;
var G__16606 = p;
var G__16607 = q;
var G__16608 = r;
var G__16609 = s;
var G__16610 = t;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$20 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$20(G__16591,G__16592,G__16593,G__16594,G__16595,G__16596,G__16597,G__16598,G__16599,G__16600,G__16601,G__16602,G__16603,G__16604,G__16605,G__16606,G__16607,G__16608,G__16609,G__16610) : self__.dispatch_fn.call(null,G__16591,G__16592,G__16593,G__16594,G__16595,G__16596,G__16597,G__16598,G__16599,G__16600,G__16601,G__16602,G__16603,G__16604,G__16605,G__16606,G__16607,G__16608,G__16609,G__16610));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__16611 = a;
var G__16612 = b;
var G__16613 = c;
var G__16614 = d;
var G__16615 = e;
var G__16616 = f;
var G__16617 = g;
var G__16618 = h;
var G__16619 = i;
var G__16620 = j;
var G__16621 = k;
var G__16622 = l;
var G__16623 = m;
var G__16624 = n;
var G__16625 = o;
var G__16626 = p;
var G__16627 = q;
var G__16628 = r;
var G__16629 = s;
var G__16630 = t;
return (target_fn.cljs$core$IFn$_invoke$arity$20 ? target_fn.cljs$core$IFn$_invoke$arity$20(G__16611,G__16612,G__16613,G__16614,G__16615,G__16616,G__16617,G__16618,G__16619,G__16620,G__16621,G__16622,G__16623,G__16624,G__16625,G__16626,G__16627,G__16628,G__16629,G__16630) : target_fn.call(null,G__16611,G__16612,G__16613,G__16614,G__16615,G__16616,G__16617,G__16618,G__16619,G__16620,G__16621,G__16622,G__16623,G__16624,G__16625,G__16626,G__16627,G__16628,G__16629,G__16630));
});
var G__17051__22 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(self__.dispatch_fn,a,b,c,d,cljs.core.array_seq([e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(target_fn,a,b,c,d,cljs.core.array_seq([e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
});
G__17051 = function(self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
switch(arguments.length){
case 1:
return G__17051__1.call(this,self__);
case 2:
return G__17051__2.call(this,self__,a);
case 3:
return G__17051__3.call(this,self__,a,b);
case 4:
return G__17051__4.call(this,self__,a,b,c);
case 5:
return G__17051__5.call(this,self__,a,b,c,d);
case 6:
return G__17051__6.call(this,self__,a,b,c,d,e);
case 7:
return G__17051__7.call(this,self__,a,b,c,d,e,f);
case 8:
return G__17051__8.call(this,self__,a,b,c,d,e,f,g);
case 9:
return G__17051__9.call(this,self__,a,b,c,d,e,f,g,h);
case 10:
return G__17051__10.call(this,self__,a,b,c,d,e,f,g,h,i);
case 11:
return G__17051__11.call(this,self__,a,b,c,d,e,f,g,h,i,j);
case 12:
return G__17051__12.call(this,self__,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return G__17051__13.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return G__17051__14.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return G__17051__15.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return G__17051__16.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return G__17051__17.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return G__17051__18.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return G__17051__19.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return G__17051__20.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return G__17051__21.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
case 22:
return G__17051__22.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__17051.cljs$core$IFn$_invoke$arity$1 = G__17051__1;
G__17051.cljs$core$IFn$_invoke$arity$2 = G__17051__2;
G__17051.cljs$core$IFn$_invoke$arity$3 = G__17051__3;
G__17051.cljs$core$IFn$_invoke$arity$4 = G__17051__4;
G__17051.cljs$core$IFn$_invoke$arity$5 = G__17051__5;
G__17051.cljs$core$IFn$_invoke$arity$6 = G__17051__6;
G__17051.cljs$core$IFn$_invoke$arity$7 = G__17051__7;
G__17051.cljs$core$IFn$_invoke$arity$8 = G__17051__8;
G__17051.cljs$core$IFn$_invoke$arity$9 = G__17051__9;
G__17051.cljs$core$IFn$_invoke$arity$10 = G__17051__10;
G__17051.cljs$core$IFn$_invoke$arity$11 = G__17051__11;
G__17051.cljs$core$IFn$_invoke$arity$12 = G__17051__12;
G__17051.cljs$core$IFn$_invoke$arity$13 = G__17051__13;
G__17051.cljs$core$IFn$_invoke$arity$14 = G__17051__14;
G__17051.cljs$core$IFn$_invoke$arity$15 = G__17051__15;
G__17051.cljs$core$IFn$_invoke$arity$16 = G__17051__16;
G__17051.cljs$core$IFn$_invoke$arity$17 = G__17051__17;
G__17051.cljs$core$IFn$_invoke$arity$18 = G__17051__18;
G__17051.cljs$core$IFn$_invoke$arity$19 = G__17051__19;
G__17051.cljs$core$IFn$_invoke$arity$20 = G__17051__20;
G__17051.cljs$core$IFn$_invoke$arity$21 = G__17051__21;
G__17051.cljs$core$IFn$_invoke$arity$22 = G__17051__22;
return G__17051;
})()
;

cljs.core.MultiFn.prototype.apply = (function (self__,args16203){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args16203)));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var mf = this;
var dispatch_val = (function (){return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$0 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$0() : self__.dispatch_fn.call(null));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

return (target_fn.cljs$core$IFn$_invoke$arity$0 ? target_fn.cljs$core$IFn$_invoke$arity$0() : target_fn.call(null));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__16631 = a;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$1 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$1(G__16631) : self__.dispatch_fn.call(null,G__16631));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__16632 = a;
return (target_fn.cljs$core$IFn$_invoke$arity$1 ? target_fn.cljs$core$IFn$_invoke$arity$1(G__16632) : target_fn.call(null,G__16632));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__16633 = a;
var G__16634 = b;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$2 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$2(G__16633,G__16634) : self__.dispatch_fn.call(null,G__16633,G__16634));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__16635 = a;
var G__16636 = b;
return (target_fn.cljs$core$IFn$_invoke$arity$2 ? target_fn.cljs$core$IFn$_invoke$arity$2(G__16635,G__16636) : target_fn.call(null,G__16635,G__16636));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__16637 = a;
var G__16638 = b;
var G__16639 = c;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$3 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$3(G__16637,G__16638,G__16639) : self__.dispatch_fn.call(null,G__16637,G__16638,G__16639));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__16640 = a;
var G__16641 = b;
var G__16642 = c;
return (target_fn.cljs$core$IFn$_invoke$arity$3 ? target_fn.cljs$core$IFn$_invoke$arity$3(G__16640,G__16641,G__16642) : target_fn.call(null,G__16640,G__16641,G__16642));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__16643 = a;
var G__16644 = b;
var G__16645 = c;
var G__16646 = d;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$4 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$4(G__16643,G__16644,G__16645,G__16646) : self__.dispatch_fn.call(null,G__16643,G__16644,G__16645,G__16646));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__16647 = a;
var G__16648 = b;
var G__16649 = c;
var G__16650 = d;
return (target_fn.cljs$core$IFn$_invoke$arity$4 ? target_fn.cljs$core$IFn$_invoke$arity$4(G__16647,G__16648,G__16649,G__16650) : target_fn.call(null,G__16647,G__16648,G__16649,G__16650));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__16651 = a;
var G__16652 = b;
var G__16653 = c;
var G__16654 = d;
var G__16655 = e;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$5 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$5(G__16651,G__16652,G__16653,G__16654,G__16655) : self__.dispatch_fn.call(null,G__16651,G__16652,G__16653,G__16654,G__16655));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__16656 = a;
var G__16657 = b;
var G__16658 = c;
var G__16659 = d;
var G__16660 = e;
return (target_fn.cljs$core$IFn$_invoke$arity$5 ? target_fn.cljs$core$IFn$_invoke$arity$5(G__16656,G__16657,G__16658,G__16659,G__16660) : target_fn.call(null,G__16656,G__16657,G__16658,G__16659,G__16660));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__16661 = a;
var G__16662 = b;
var G__16663 = c;
var G__16664 = d;
var G__16665 = e;
var G__16666 = f;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$6 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$6(G__16661,G__16662,G__16663,G__16664,G__16665,G__16666) : self__.dispatch_fn.call(null,G__16661,G__16662,G__16663,G__16664,G__16665,G__16666));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__16667 = a;
var G__16668 = b;
var G__16669 = c;
var G__16670 = d;
var G__16671 = e;
var G__16672 = f;
return (target_fn.cljs$core$IFn$_invoke$arity$6 ? target_fn.cljs$core$IFn$_invoke$arity$6(G__16667,G__16668,G__16669,G__16670,G__16671,G__16672) : target_fn.call(null,G__16667,G__16668,G__16669,G__16670,G__16671,G__16672));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f,g){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__16673 = a;
var G__16674 = b;
var G__16675 = c;
var G__16676 = d;
var G__16677 = e;
var G__16678 = f;
var G__16679 = g;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$7 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$7(G__16673,G__16674,G__16675,G__16676,G__16677,G__16678,G__16679) : self__.dispatch_fn.call(null,G__16673,G__16674,G__16675,G__16676,G__16677,G__16678,G__16679));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__16680 = a;
var G__16681 = b;
var G__16682 = c;
var G__16683 = d;
var G__16684 = e;
var G__16685 = f;
var G__16686 = g;
return (target_fn.cljs$core$IFn$_invoke$arity$7 ? target_fn.cljs$core$IFn$_invoke$arity$7(G__16680,G__16681,G__16682,G__16683,G__16684,G__16685,G__16686) : target_fn.call(null,G__16680,G__16681,G__16682,G__16683,G__16684,G__16685,G__16686));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f,g,h){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__16687 = a;
var G__16688 = b;
var G__16689 = c;
var G__16690 = d;
var G__16691 = e;
var G__16692 = f;
var G__16693 = g;
var G__16694 = h;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$8 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$8(G__16687,G__16688,G__16689,G__16690,G__16691,G__16692,G__16693,G__16694) : self__.dispatch_fn.call(null,G__16687,G__16688,G__16689,G__16690,G__16691,G__16692,G__16693,G__16694));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__16695 = a;
var G__16696 = b;
var G__16697 = c;
var G__16698 = d;
var G__16699 = e;
var G__16700 = f;
var G__16701 = g;
var G__16702 = h;
return (target_fn.cljs$core$IFn$_invoke$arity$8 ? target_fn.cljs$core$IFn$_invoke$arity$8(G__16695,G__16696,G__16697,G__16698,G__16699,G__16700,G__16701,G__16702) : target_fn.call(null,G__16695,G__16696,G__16697,G__16698,G__16699,G__16700,G__16701,G__16702));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f,g,h,i){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__16703 = a;
var G__16704 = b;
var G__16705 = c;
var G__16706 = d;
var G__16707 = e;
var G__16708 = f;
var G__16709 = g;
var G__16710 = h;
var G__16711 = i;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$9 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$9(G__16703,G__16704,G__16705,G__16706,G__16707,G__16708,G__16709,G__16710,G__16711) : self__.dispatch_fn.call(null,G__16703,G__16704,G__16705,G__16706,G__16707,G__16708,G__16709,G__16710,G__16711));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__16712 = a;
var G__16713 = b;
var G__16714 = c;
var G__16715 = d;
var G__16716 = e;
var G__16717 = f;
var G__16718 = g;
var G__16719 = h;
var G__16720 = i;
return (target_fn.cljs$core$IFn$_invoke$arity$9 ? target_fn.cljs$core$IFn$_invoke$arity$9(G__16712,G__16713,G__16714,G__16715,G__16716,G__16717,G__16718,G__16719,G__16720) : target_fn.call(null,G__16712,G__16713,G__16714,G__16715,G__16716,G__16717,G__16718,G__16719,G__16720));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f,g,h,i,j){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__16721 = a;
var G__16722 = b;
var G__16723 = c;
var G__16724 = d;
var G__16725 = e;
var G__16726 = f;
var G__16727 = g;
var G__16728 = h;
var G__16729 = i;
var G__16730 = j;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$10 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$10(G__16721,G__16722,G__16723,G__16724,G__16725,G__16726,G__16727,G__16728,G__16729,G__16730) : self__.dispatch_fn.call(null,G__16721,G__16722,G__16723,G__16724,G__16725,G__16726,G__16727,G__16728,G__16729,G__16730));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__16731 = a;
var G__16732 = b;
var G__16733 = c;
var G__16734 = d;
var G__16735 = e;
var G__16736 = f;
var G__16737 = g;
var G__16738 = h;
var G__16739 = i;
var G__16740 = j;
return (target_fn.cljs$core$IFn$_invoke$arity$10 ? target_fn.cljs$core$IFn$_invoke$arity$10(G__16731,G__16732,G__16733,G__16734,G__16735,G__16736,G__16737,G__16738,G__16739,G__16740) : target_fn.call(null,G__16731,G__16732,G__16733,G__16734,G__16735,G__16736,G__16737,G__16738,G__16739,G__16740));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f,g,h,i,j,k){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__16741 = a;
var G__16742 = b;
var G__16743 = c;
var G__16744 = d;
var G__16745 = e;
var G__16746 = f;
var G__16747 = g;
var G__16748 = h;
var G__16749 = i;
var G__16750 = j;
var G__16751 = k;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$11 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$11(G__16741,G__16742,G__16743,G__16744,G__16745,G__16746,G__16747,G__16748,G__16749,G__16750,G__16751) : self__.dispatch_fn.call(null,G__16741,G__16742,G__16743,G__16744,G__16745,G__16746,G__16747,G__16748,G__16749,G__16750,G__16751));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__16752 = a;
var G__16753 = b;
var G__16754 = c;
var G__16755 = d;
var G__16756 = e;
var G__16757 = f;
var G__16758 = g;
var G__16759 = h;
var G__16760 = i;
var G__16761 = j;
var G__16762 = k;
return (target_fn.cljs$core$IFn$_invoke$arity$11 ? target_fn.cljs$core$IFn$_invoke$arity$11(G__16752,G__16753,G__16754,G__16755,G__16756,G__16757,G__16758,G__16759,G__16760,G__16761,G__16762) : target_fn.call(null,G__16752,G__16753,G__16754,G__16755,G__16756,G__16757,G__16758,G__16759,G__16760,G__16761,G__16762));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f,g,h,i,j,k,l){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__16763 = a;
var G__16764 = b;
var G__16765 = c;
var G__16766 = d;
var G__16767 = e;
var G__16768 = f;
var G__16769 = g;
var G__16770 = h;
var G__16771 = i;
var G__16772 = j;
var G__16773 = k;
var G__16774 = l;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$12 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$12(G__16763,G__16764,G__16765,G__16766,G__16767,G__16768,G__16769,G__16770,G__16771,G__16772,G__16773,G__16774) : self__.dispatch_fn.call(null,G__16763,G__16764,G__16765,G__16766,G__16767,G__16768,G__16769,G__16770,G__16771,G__16772,G__16773,G__16774));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__16775 = a;
var G__16776 = b;
var G__16777 = c;
var G__16778 = d;
var G__16779 = e;
var G__16780 = f;
var G__16781 = g;
var G__16782 = h;
var G__16783 = i;
var G__16784 = j;
var G__16785 = k;
var G__16786 = l;
return (target_fn.cljs$core$IFn$_invoke$arity$12 ? target_fn.cljs$core$IFn$_invoke$arity$12(G__16775,G__16776,G__16777,G__16778,G__16779,G__16780,G__16781,G__16782,G__16783,G__16784,G__16785,G__16786) : target_fn.call(null,G__16775,G__16776,G__16777,G__16778,G__16779,G__16780,G__16781,G__16782,G__16783,G__16784,G__16785,G__16786));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__16787 = a;
var G__16788 = b;
var G__16789 = c;
var G__16790 = d;
var G__16791 = e;
var G__16792 = f;
var G__16793 = g;
var G__16794 = h;
var G__16795 = i;
var G__16796 = j;
var G__16797 = k;
var G__16798 = l;
var G__16799 = m;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$13 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$13(G__16787,G__16788,G__16789,G__16790,G__16791,G__16792,G__16793,G__16794,G__16795,G__16796,G__16797,G__16798,G__16799) : self__.dispatch_fn.call(null,G__16787,G__16788,G__16789,G__16790,G__16791,G__16792,G__16793,G__16794,G__16795,G__16796,G__16797,G__16798,G__16799));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__16800 = a;
var G__16801 = b;
var G__16802 = c;
var G__16803 = d;
var G__16804 = e;
var G__16805 = f;
var G__16806 = g;
var G__16807 = h;
var G__16808 = i;
var G__16809 = j;
var G__16810 = k;
var G__16811 = l;
var G__16812 = m;
return (target_fn.cljs$core$IFn$_invoke$arity$13 ? target_fn.cljs$core$IFn$_invoke$arity$13(G__16800,G__16801,G__16802,G__16803,G__16804,G__16805,G__16806,G__16807,G__16808,G__16809,G__16810,G__16811,G__16812) : target_fn.call(null,G__16800,G__16801,G__16802,G__16803,G__16804,G__16805,G__16806,G__16807,G__16808,G__16809,G__16810,G__16811,G__16812));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__16813 = a;
var G__16814 = b;
var G__16815 = c;
var G__16816 = d;
var G__16817 = e;
var G__16818 = f;
var G__16819 = g;
var G__16820 = h;
var G__16821 = i;
var G__16822 = j;
var G__16823 = k;
var G__16824 = l;
var G__16825 = m;
var G__16826 = n;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$14 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$14(G__16813,G__16814,G__16815,G__16816,G__16817,G__16818,G__16819,G__16820,G__16821,G__16822,G__16823,G__16824,G__16825,G__16826) : self__.dispatch_fn.call(null,G__16813,G__16814,G__16815,G__16816,G__16817,G__16818,G__16819,G__16820,G__16821,G__16822,G__16823,G__16824,G__16825,G__16826));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__16827 = a;
var G__16828 = b;
var G__16829 = c;
var G__16830 = d;
var G__16831 = e;
var G__16832 = f;
var G__16833 = g;
var G__16834 = h;
var G__16835 = i;
var G__16836 = j;
var G__16837 = k;
var G__16838 = l;
var G__16839 = m;
var G__16840 = n;
return (target_fn.cljs$core$IFn$_invoke$arity$14 ? target_fn.cljs$core$IFn$_invoke$arity$14(G__16827,G__16828,G__16829,G__16830,G__16831,G__16832,G__16833,G__16834,G__16835,G__16836,G__16837,G__16838,G__16839,G__16840) : target_fn.call(null,G__16827,G__16828,G__16829,G__16830,G__16831,G__16832,G__16833,G__16834,G__16835,G__16836,G__16837,G__16838,G__16839,G__16840));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__16841 = a;
var G__16842 = b;
var G__16843 = c;
var G__16844 = d;
var G__16845 = e;
var G__16846 = f;
var G__16847 = g;
var G__16848 = h;
var G__16849 = i;
var G__16850 = j;
var G__16851 = k;
var G__16852 = l;
var G__16853 = m;
var G__16854 = n;
var G__16855 = o;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$15 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$15(G__16841,G__16842,G__16843,G__16844,G__16845,G__16846,G__16847,G__16848,G__16849,G__16850,G__16851,G__16852,G__16853,G__16854,G__16855) : self__.dispatch_fn.call(null,G__16841,G__16842,G__16843,G__16844,G__16845,G__16846,G__16847,G__16848,G__16849,G__16850,G__16851,G__16852,G__16853,G__16854,G__16855));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__16856 = a;
var G__16857 = b;
var G__16858 = c;
var G__16859 = d;
var G__16860 = e;
var G__16861 = f;
var G__16862 = g;
var G__16863 = h;
var G__16864 = i;
var G__16865 = j;
var G__16866 = k;
var G__16867 = l;
var G__16868 = m;
var G__16869 = n;
var G__16870 = o;
return (target_fn.cljs$core$IFn$_invoke$arity$15 ? target_fn.cljs$core$IFn$_invoke$arity$15(G__16856,G__16857,G__16858,G__16859,G__16860,G__16861,G__16862,G__16863,G__16864,G__16865,G__16866,G__16867,G__16868,G__16869,G__16870) : target_fn.call(null,G__16856,G__16857,G__16858,G__16859,G__16860,G__16861,G__16862,G__16863,G__16864,G__16865,G__16866,G__16867,G__16868,G__16869,G__16870));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__16871 = a;
var G__16872 = b;
var G__16873 = c;
var G__16874 = d;
var G__16875 = e;
var G__16876 = f;
var G__16877 = g;
var G__16878 = h;
var G__16879 = i;
var G__16880 = j;
var G__16881 = k;
var G__16882 = l;
var G__16883 = m;
var G__16884 = n;
var G__16885 = o;
var G__16886 = p;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$16 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$16(G__16871,G__16872,G__16873,G__16874,G__16875,G__16876,G__16877,G__16878,G__16879,G__16880,G__16881,G__16882,G__16883,G__16884,G__16885,G__16886) : self__.dispatch_fn.call(null,G__16871,G__16872,G__16873,G__16874,G__16875,G__16876,G__16877,G__16878,G__16879,G__16880,G__16881,G__16882,G__16883,G__16884,G__16885,G__16886));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__16887 = a;
var G__16888 = b;
var G__16889 = c;
var G__16890 = d;
var G__16891 = e;
var G__16892 = f;
var G__16893 = g;
var G__16894 = h;
var G__16895 = i;
var G__16896 = j;
var G__16897 = k;
var G__16898 = l;
var G__16899 = m;
var G__16900 = n;
var G__16901 = o;
var G__16902 = p;
return (target_fn.cljs$core$IFn$_invoke$arity$16 ? target_fn.cljs$core$IFn$_invoke$arity$16(G__16887,G__16888,G__16889,G__16890,G__16891,G__16892,G__16893,G__16894,G__16895,G__16896,G__16897,G__16898,G__16899,G__16900,G__16901,G__16902) : target_fn.call(null,G__16887,G__16888,G__16889,G__16890,G__16891,G__16892,G__16893,G__16894,G__16895,G__16896,G__16897,G__16898,G__16899,G__16900,G__16901,G__16902));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__16903 = a;
var G__16904 = b;
var G__16905 = c;
var G__16906 = d;
var G__16907 = e;
var G__16908 = f;
var G__16909 = g;
var G__16910 = h;
var G__16911 = i;
var G__16912 = j;
var G__16913 = k;
var G__16914 = l;
var G__16915 = m;
var G__16916 = n;
var G__16917 = o;
var G__16918 = p;
var G__16919 = q;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$17 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$17(G__16903,G__16904,G__16905,G__16906,G__16907,G__16908,G__16909,G__16910,G__16911,G__16912,G__16913,G__16914,G__16915,G__16916,G__16917,G__16918,G__16919) : self__.dispatch_fn.call(null,G__16903,G__16904,G__16905,G__16906,G__16907,G__16908,G__16909,G__16910,G__16911,G__16912,G__16913,G__16914,G__16915,G__16916,G__16917,G__16918,G__16919));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__16920 = a;
var G__16921 = b;
var G__16922 = c;
var G__16923 = d;
var G__16924 = e;
var G__16925 = f;
var G__16926 = g;
var G__16927 = h;
var G__16928 = i;
var G__16929 = j;
var G__16930 = k;
var G__16931 = l;
var G__16932 = m;
var G__16933 = n;
var G__16934 = o;
var G__16935 = p;
var G__16936 = q;
return (target_fn.cljs$core$IFn$_invoke$arity$17 ? target_fn.cljs$core$IFn$_invoke$arity$17(G__16920,G__16921,G__16922,G__16923,G__16924,G__16925,G__16926,G__16927,G__16928,G__16929,G__16930,G__16931,G__16932,G__16933,G__16934,G__16935,G__16936) : target_fn.call(null,G__16920,G__16921,G__16922,G__16923,G__16924,G__16925,G__16926,G__16927,G__16928,G__16929,G__16930,G__16931,G__16932,G__16933,G__16934,G__16935,G__16936));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__16937 = a;
var G__16938 = b;
var G__16939 = c;
var G__16940 = d;
var G__16941 = e;
var G__16942 = f;
var G__16943 = g;
var G__16944 = h;
var G__16945 = i;
var G__16946 = j;
var G__16947 = k;
var G__16948 = l;
var G__16949 = m;
var G__16950 = n;
var G__16951 = o;
var G__16952 = p;
var G__16953 = q;
var G__16954 = r;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$18 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$18(G__16937,G__16938,G__16939,G__16940,G__16941,G__16942,G__16943,G__16944,G__16945,G__16946,G__16947,G__16948,G__16949,G__16950,G__16951,G__16952,G__16953,G__16954) : self__.dispatch_fn.call(null,G__16937,G__16938,G__16939,G__16940,G__16941,G__16942,G__16943,G__16944,G__16945,G__16946,G__16947,G__16948,G__16949,G__16950,G__16951,G__16952,G__16953,G__16954));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__16955 = a;
var G__16956 = b;
var G__16957 = c;
var G__16958 = d;
var G__16959 = e;
var G__16960 = f;
var G__16961 = g;
var G__16962 = h;
var G__16963 = i;
var G__16964 = j;
var G__16965 = k;
var G__16966 = l;
var G__16967 = m;
var G__16968 = n;
var G__16969 = o;
var G__16970 = p;
var G__16971 = q;
var G__16972 = r;
return (target_fn.cljs$core$IFn$_invoke$arity$18 ? target_fn.cljs$core$IFn$_invoke$arity$18(G__16955,G__16956,G__16957,G__16958,G__16959,G__16960,G__16961,G__16962,G__16963,G__16964,G__16965,G__16966,G__16967,G__16968,G__16969,G__16970,G__16971,G__16972) : target_fn.call(null,G__16955,G__16956,G__16957,G__16958,G__16959,G__16960,G__16961,G__16962,G__16963,G__16964,G__16965,G__16966,G__16967,G__16968,G__16969,G__16970,G__16971,G__16972));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__16973 = a;
var G__16974 = b;
var G__16975 = c;
var G__16976 = d;
var G__16977 = e;
var G__16978 = f;
var G__16979 = g;
var G__16980 = h;
var G__16981 = i;
var G__16982 = j;
var G__16983 = k;
var G__16984 = l;
var G__16985 = m;
var G__16986 = n;
var G__16987 = o;
var G__16988 = p;
var G__16989 = q;
var G__16990 = r;
var G__16991 = s;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$19 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$19(G__16973,G__16974,G__16975,G__16976,G__16977,G__16978,G__16979,G__16980,G__16981,G__16982,G__16983,G__16984,G__16985,G__16986,G__16987,G__16988,G__16989,G__16990,G__16991) : self__.dispatch_fn.call(null,G__16973,G__16974,G__16975,G__16976,G__16977,G__16978,G__16979,G__16980,G__16981,G__16982,G__16983,G__16984,G__16985,G__16986,G__16987,G__16988,G__16989,G__16990,G__16991));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__16992 = a;
var G__16993 = b;
var G__16994 = c;
var G__16995 = d;
var G__16996 = e;
var G__16997 = f;
var G__16998 = g;
var G__16999 = h;
var G__17000 = i;
var G__17001 = j;
var G__17002 = k;
var G__17003 = l;
var G__17004 = m;
var G__17005 = n;
var G__17006 = o;
var G__17007 = p;
var G__17008 = q;
var G__17009 = r;
var G__17010 = s;
return (target_fn.cljs$core$IFn$_invoke$arity$19 ? target_fn.cljs$core$IFn$_invoke$arity$19(G__16992,G__16993,G__16994,G__16995,G__16996,G__16997,G__16998,G__16999,G__17000,G__17001,G__17002,G__17003,G__17004,G__17005,G__17006,G__17007,G__17008,G__17009,G__17010) : target_fn.call(null,G__16992,G__16993,G__16994,G__16995,G__16996,G__16997,G__16998,G__16999,G__17000,G__17001,G__17002,G__17003,G__17004,G__17005,G__17006,G__17007,G__17008,G__17009,G__17010));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__17011 = a;
var G__17012 = b;
var G__17013 = c;
var G__17014 = d;
var G__17015 = e;
var G__17016 = f;
var G__17017 = g;
var G__17018 = h;
var G__17019 = i;
var G__17020 = j;
var G__17021 = k;
var G__17022 = l;
var G__17023 = m;
var G__17024 = n;
var G__17025 = o;
var G__17026 = p;
var G__17027 = q;
var G__17028 = r;
var G__17029 = s;
var G__17030 = t;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$20 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$20(G__17011,G__17012,G__17013,G__17014,G__17015,G__17016,G__17017,G__17018,G__17019,G__17020,G__17021,G__17022,G__17023,G__17024,G__17025,G__17026,G__17027,G__17028,G__17029,G__17030) : self__.dispatch_fn.call(null,G__17011,G__17012,G__17013,G__17014,G__17015,G__17016,G__17017,G__17018,G__17019,G__17020,G__17021,G__17022,G__17023,G__17024,G__17025,G__17026,G__17027,G__17028,G__17029,G__17030));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__17031 = a;
var G__17032 = b;
var G__17033 = c;
var G__17034 = d;
var G__17035 = e;
var G__17036 = f;
var G__17037 = g;
var G__17038 = h;
var G__17039 = i;
var G__17040 = j;
var G__17041 = k;
var G__17042 = l;
var G__17043 = m;
var G__17044 = n;
var G__17045 = o;
var G__17046 = p;
var G__17047 = q;
var G__17048 = r;
var G__17049 = s;
var G__17050 = t;
return (target_fn.cljs$core$IFn$_invoke$arity$20 ? target_fn.cljs$core$IFn$_invoke$arity$20(G__17031,G__17032,G__17033,G__17034,G__17035,G__17036,G__17037,G__17038,G__17039,G__17040,G__17041,G__17042,G__17043,G__17044,G__17045,G__17046,G__17047,G__17048,G__17049,G__17050) : target_fn.call(null,G__17031,G__17032,G__17033,G__17034,G__17035,G__17036,G__17037,G__17038,G__17039,G__17040,G__17041,G__17042,G__17043,G__17044,G__17045,G__17046,G__17047,G__17048,G__17049,G__17050));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$21 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self__ = this;
var mf = this;
var dispatch_val = cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(self__.dispatch_fn,a,b,c,d,cljs.core.array_seq([e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(target_fn,a,b,c,d,cljs.core.array_seq([e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
});

cljs.core.MultiFn.cljs$lang$type = true;

cljs.core.MultiFn.cljs$lang$ctorStr = "cljs.core/MultiFn";

cljs.core.MultiFn.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write(writer__4226__auto__,"cljs.core/MultiFn");
});

cljs.core.__GT_MultiFn = (function __GT_MultiFn(name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
return (new cljs.core.MultiFn(name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy));
});

/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){
return cljs.core._reset(multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){
return cljs.core._remove_method(multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){
return cljs.core._prefer_method(multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){
return cljs.core._methods(multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){
return cljs.core._get_method(multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){
return cljs.core._prefers(multifn);
});

/**
* @constructor
*/
cljs.core.UUID = (function (uuid){
this.uuid = uuid;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2153775104;
})
cljs.core.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__17052 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([this$__$1], 0));
return goog.string.hashCode(G__17052);
});

cljs.core.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,___$1){
var self__ = this;
var ___$2 = this;
return cljs.core._write(writer,[cljs.core.str("#uuid \""),cljs.core.str(self__.uuid),cljs.core.str("\"")].join(''));
});

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return ((other instanceof cljs.core.UUID)) && ((self__.uuid === other.uuid));
});

cljs.core.UUID.prototype.toString = (function (){
var self__ = this;
var _ = this;
return self__.uuid;
});

cljs.core.UUID.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.UUID.cljs$lang$type = true;

cljs.core.UUID.cljs$lang$ctorStr = "cljs.core/UUID";

cljs.core.UUID.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write(writer__4226__auto__,"cljs.core/UUID");
});

cljs.core.__GT_UUID = (function __GT_UUID(uuid){
return (new cljs.core.UUID(uuid));
});


/**
* @constructor
*/
cljs.core.ExceptionInfo = (function (message,data,cause){
this.message = message;
this.data = data;
this.cause = cause;
})

cljs.core.ExceptionInfo.cljs$lang$type = true;

cljs.core.ExceptionInfo.cljs$lang$ctorStr = "cljs.core/ExceptionInfo";

cljs.core.ExceptionInfo.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write(writer__4226__auto__,"cljs.core/ExceptionInfo");
});

cljs.core.__GT_ExceptionInfo = (function __GT_ExceptionInfo(message,data,cause){
return (new cljs.core.ExceptionInfo(message,data,cause));
});

cljs.core.ExceptionInfo.prototype = (new Error());
cljs.core.ExceptionInfo.prototype.constructor = cljs.core.ExceptionInfo;
/**
* Alpha - subject to change.
* Create an instance of ExceptionInfo, an Error type that carries a
* map of additional data.
*/
cljs.core.ex_info = (function() {
var ex_info = null;
var ex_info__2 = (function (msg,map){
return (new cljs.core.ExceptionInfo(msg,map,null));
});
var ex_info__3 = (function (msg,map,cause){
return (new cljs.core.ExceptionInfo(msg,map,cause));
});
ex_info = function(msg,map,cause){
switch(arguments.length){
case 2:
return ex_info__2.call(this,msg,map);
case 3:
return ex_info__3.call(this,msg,map,cause);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ex_info.cljs$core$IFn$_invoke$arity$2 = ex_info__2;
ex_info.cljs$core$IFn$_invoke$arity$3 = ex_info__3;
return ex_info;
})()
;
/**
* Alpha - subject to change.
* Returns exception data (a map) if ex is an ExceptionInfo.
* Otherwise returns nil.
*/
cljs.core.ex_data = (function ex_data(ex){
if((ex instanceof cljs.core.ExceptionInfo)){
return ex.data;
} else {
return null;
}
});
/**
* Alpha - subject to change.
* Returns the message attached to the given Error / ExceptionInfo object.
* For non-Errors returns nil.
*/
cljs.core.ex_message = (function ex_message(ex){
if((ex instanceof Error)){
return ex.message;
} else {
return null;
}
});
/**
* Alpha - subject to change.
* Returns exception cause (an Error / ExceptionInfo) if ex is an
* ExceptionInfo.
* Otherwise returns nil.
*/
cljs.core.ex_cause = (function ex_cause(ex){
if((ex instanceof cljs.core.ExceptionInfo)){
return ex.cause;
} else {
return null;
}
});
/**
* Returns an JavaScript compatible comparator based upon pred.
*/
cljs.core.comparator = (function comparator(pred){
return (function (x,y){
if(cljs.core.truth_((function (){var G__17057 = x;
var G__17058 = y;
return (pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(G__17057,G__17058) : pred.call(null,G__17057,G__17058));
})())){
return (-1);
} else {
if(cljs.core.truth_((function (){var G__17059 = y;
var G__17060 = x;
return (pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(G__17059,G__17060) : pred.call(null,G__17059,G__17060));
})())){
return (1);
} else {
return (0);

}
}
});
});
cljs.core.special_symbol_QMARK_ = (function special_symbol_QMARK_(x){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 19, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null,new cljs.core.Symbol(null,"defrecord*","defrecord*",-1936366207,null),null,new cljs.core.Symbol(null,"try","try",-1273693247,null),null,new cljs.core.Symbol(null,"loop*","loop*",615029416,null),null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,new cljs.core.Symbol(null,"letfn*","letfn*",-110097810,null),null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,new cljs.core.Symbol(null,"ns","ns",2082130287,null),null,new cljs.core.Symbol(null,"deftype*","deftype*",962659890,null),null,new cljs.core.Symbol(null,"let*","let*",1920721458,null),null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,new cljs.core.Symbol(null,".",".",1975675962,null),null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,new cljs.core.Symbol(null,"def","def",597100991,null),null], null), null),x);
});
/**
* test [v] finds fn at key :test in var metadata and calls it,
* presuming failure will throw exception
*/
cljs.core.test = (function test(v){
var f = v.cljs$lang$test;
if(cljs.core.truth_(f)){
(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

return cljs.core.constant$keyword$41;
} else {
return cljs.core.constant$keyword$42;
}
});
