// Compiled by ClojureScript 0.0-2511
goog.provide('async_tut1.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
cljs.core.enable_console_print_BANG_();
var ch_13779 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__5808__auto___13780 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5808__auto___13780,ch_13779){
return (function (){
var f__5809__auto__ = (function (){var switch__5793__auto__ = ((function (c__5808__auto___13780,ch_13779){
return (function (state_13744){
var state_val_13745 = (state_13744[(1)]);
if((state_val_13745 === (7))){
var inst_13735 = (state_13744[(2)]);
var inst_13736 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["read: ",inst_13735], 0));
var state_13744__$1 = (function (){var statearr_13746 = state_13744;
(statearr_13746[(7)] = inst_13736);

return statearr_13746;
})();
var statearr_13747_13781 = state_13744__$1;
(statearr_13747_13781[(2)] = null);

(statearr_13747_13781[(1)] = (2));


return cljs.core.constant$keyword$25;
} else {
if((state_val_13745 === (6))){
var inst_13740 = (state_13744[(2)]);
var state_13744__$1 = state_13744;
var statearr_13748_13782 = state_13744__$1;
(statearr_13748_13782[(2)] = inst_13740);

(statearr_13748_13782[(1)] = (3));


return cljs.core.constant$keyword$25;
} else {
if((state_val_13745 === (5))){
var state_13744__$1 = state_13744;
var statearr_13749_13783 = state_13744__$1;
(statearr_13749_13783[(2)] = null);

(statearr_13749_13783[(1)] = (6));


return cljs.core.constant$keyword$25;
} else {
if((state_val_13745 === (4))){
var state_13744__$1 = state_13744;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13744__$1,(7),ch_13779);
} else {
if((state_val_13745 === (3))){
var inst_13742 = (state_13744[(2)]);
var state_13744__$1 = state_13744;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13744__$1,inst_13742);
} else {
if((state_val_13745 === (2))){
var state_13744__$1 = state_13744;
var statearr_13750_13784 = state_13744__$1;
(statearr_13750_13784[(1)] = (4));



return cljs.core.constant$keyword$25;
} else {
if((state_val_13745 === (1))){
var state_13744__$1 = state_13744;
var statearr_13752_13785 = state_13744__$1;
(statearr_13752_13785[(2)] = null);

(statearr_13752_13785[(1)] = (2));


return cljs.core.constant$keyword$25;
} else {
return null;
}
}
}
}
}
}
}
});})(c__5808__auto___13780,ch_13779))
;
return ((function (switch__5793__auto__,c__5808__auto___13780,ch_13779){
return (function() {
var state_machine__5794__auto__ = null;
var state_machine__5794__auto____0 = (function (){
var statearr_13756 = [null,null,null,null,null,null,null,null];
(statearr_13756[(0)] = state_machine__5794__auto__);

(statearr_13756[(1)] = (1));

return statearr_13756;
});
var state_machine__5794__auto____1 = (function (state_13744){
while(true){
var ret_value__5795__auto__ = (function (){try{while(true){
var result__5796__auto__ = switch__5793__auto__(state_13744);
if(cljs.core.keyword_identical_QMARK_(result__5796__auto__,cljs.core.constant$keyword$25)){
continue;
} else {
return result__5796__auto__;
}
break;
}
}catch (e13757){if((e13757 instanceof Object)){
var ex__5797__auto__ = e13757;
var statearr_13758_13786 = state_13744;
(statearr_13758_13786[(5)] = ex__5797__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13744);

return cljs.core.constant$keyword$25;
} else {
throw e13757;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5795__auto__,cljs.core.constant$keyword$25)){
var G__13787 = state_13744;
state_13744 = G__13787;
continue;
} else {
return ret_value__5795__auto__;
}
break;
}
});
state_machine__5794__auto__ = function(state_13744){
switch(arguments.length){
case 0:
return state_machine__5794__auto____0.call(this);
case 1:
return state_machine__5794__auto____1.call(this,state_13744);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5794__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5794__auto____0;
state_machine__5794__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5794__auto____1;
return state_machine__5794__auto__;
})()
;})(switch__5793__auto__,c__5808__auto___13780,ch_13779))
})();
var state__5810__auto__ = (function (){var statearr_13759 = (function (){return (f__5809__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5809__auto__.cljs$core$IFn$_invoke$arity$0() : f__5809__auto__.call(null));
})();
(statearr_13759[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5808__auto___13780);

return statearr_13759;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5810__auto__);
});})(c__5808__auto___13780,ch_13779))
);


var c__5808__auto___13788 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5808__auto___13788,ch_13779){
return (function (){
var f__5809__auto__ = (function (){var switch__5793__auto__ = ((function (c__5808__auto___13788,ch_13779){
return (function (state_13768){
var state_val_13769 = (state_13768[(1)]);
if((state_val_13769 === (4))){
var inst_13766 = (state_13768[(2)]);
var state_13768__$1 = state_13768;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13768__$1,inst_13766);
} else {
if((state_val_13769 === (3))){
var inst_13764 = (state_13768[(2)]);
var state_13768__$1 = (function (){var statearr_13770 = state_13768;
(statearr_13770[(7)] = inst_13764);

return statearr_13770;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13768__$1,(4),ch_13779,"there");
} else {
if((state_val_13769 === (2))){
var inst_13761 = (state_13768[(2)]);
var inst_13762 = cljs.core.async.timeout((1000));
var state_13768__$1 = (function (){var statearr_13771 = state_13768;
(statearr_13771[(8)] = inst_13761);

return statearr_13771;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13768__$1,(3),inst_13762);
} else {
if((state_val_13769 === (1))){
var state_13768__$1 = state_13768;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13768__$1,(2),ch_13779,"hi");
} else {
return null;
}
}
}
}
});})(c__5808__auto___13788,ch_13779))
;
return ((function (switch__5793__auto__,c__5808__auto___13788,ch_13779){
return (function() {
var state_machine__5794__auto__ = null;
var state_machine__5794__auto____0 = (function (){
var statearr_13775 = [null,null,null,null,null,null,null,null,null];
(statearr_13775[(0)] = state_machine__5794__auto__);

(statearr_13775[(1)] = (1));

return statearr_13775;
});
var state_machine__5794__auto____1 = (function (state_13768){
while(true){
var ret_value__5795__auto__ = (function (){try{while(true){
var result__5796__auto__ = switch__5793__auto__(state_13768);
if(cljs.core.keyword_identical_QMARK_(result__5796__auto__,cljs.core.constant$keyword$25)){
continue;
} else {
return result__5796__auto__;
}
break;
}
}catch (e13776){if((e13776 instanceof Object)){
var ex__5797__auto__ = e13776;
var statearr_13777_13789 = state_13768;
(statearr_13777_13789[(5)] = ex__5797__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13768);

return cljs.core.constant$keyword$25;
} else {
throw e13776;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5795__auto__,cljs.core.constant$keyword$25)){
var G__13790 = state_13768;
state_13768 = G__13790;
continue;
} else {
return ret_value__5795__auto__;
}
break;
}
});
state_machine__5794__auto__ = function(state_13768){
switch(arguments.length){
case 0:
return state_machine__5794__auto____0.call(this);
case 1:
return state_machine__5794__auto____1.call(this,state_13768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5794__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5794__auto____0;
state_machine__5794__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5794__auto____1;
return state_machine__5794__auto__;
})()
;})(switch__5793__auto__,c__5808__auto___13788,ch_13779))
})();
var state__5810__auto__ = (function (){var statearr_13778 = (function (){return (f__5809__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5809__auto__.cljs$core$IFn$_invoke$arity$0() : f__5809__auto__.call(null));
})();
(statearr_13778[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5808__auto___13788);

return statearr_13778;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5810__auto__);
});})(c__5808__auto___13788,ch_13779))
);

