// Compiled by ClojureScript 0.0-2511
goog.provide('async_tut1.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
cljs.core.enable_console_print_BANG_.call(null);
var ch_13720 = cljs.core.async.chan.call(null);
var c__5808__auto___13721 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5808__auto___13721,ch_13720){
return (function (){
var f__5809__auto__ = (function (){var switch__5793__auto__ = ((function (c__5808__auto___13721,ch_13720){
return (function (state_13685){
var state_val_13686 = (state_13685[(1)]);
if((state_val_13686 === (7))){
var inst_13676 = (state_13685[(2)]);
var inst_13677 = cljs.core.println.call(null,"read: ",inst_13676);
var state_13685__$1 = (function (){var statearr_13687 = state_13685;
(statearr_13687[(7)] = inst_13677);

return statearr_13687;
})();
var statearr_13688_13722 = state_13685__$1;
(statearr_13688_13722[(2)] = null);

(statearr_13688_13722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13686 === (6))){
var inst_13681 = (state_13685[(2)]);
var state_13685__$1 = state_13685;
var statearr_13689_13723 = state_13685__$1;
(statearr_13689_13723[(2)] = inst_13681);

(statearr_13689_13723[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13686 === (5))){
var state_13685__$1 = state_13685;
var statearr_13690_13724 = state_13685__$1;
(statearr_13690_13724[(2)] = null);

(statearr_13690_13724[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13686 === (4))){
var state_13685__$1 = state_13685;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13685__$1,(7),ch_13720);
} else {
if((state_val_13686 === (3))){
var inst_13683 = (state_13685[(2)]);
var state_13685__$1 = state_13685;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13685__$1,inst_13683);
} else {
if((state_val_13686 === (2))){
var state_13685__$1 = state_13685;
var statearr_13691_13725 = state_13685__$1;
(statearr_13691_13725[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13686 === (1))){
var state_13685__$1 = state_13685;
var statearr_13693_13726 = state_13685__$1;
(statearr_13693_13726[(2)] = null);

(statearr_13693_13726[(1)] = (2));


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
});})(c__5808__auto___13721,ch_13720))
;
return ((function (switch__5793__auto__,c__5808__auto___13721,ch_13720){
return (function() {
var state_machine__5794__auto__ = null;
var state_machine__5794__auto____0 = (function (){
var statearr_13697 = [null,null,null,null,null,null,null,null];
(statearr_13697[(0)] = state_machine__5794__auto__);

(statearr_13697[(1)] = (1));

return statearr_13697;
});
var state_machine__5794__auto____1 = (function (state_13685){
while(true){
var ret_value__5795__auto__ = (function (){try{while(true){
var result__5796__auto__ = switch__5793__auto__.call(null,state_13685);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5796__auto__;
}
break;
}
}catch (e13698){if((e13698 instanceof Object)){
var ex__5797__auto__ = e13698;
var statearr_13699_13727 = state_13685;
(statearr_13699_13727[(5)] = ex__5797__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13685);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13698;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13728 = state_13685;
state_13685 = G__13728;
continue;
} else {
return ret_value__5795__auto__;
}
break;
}
});
state_machine__5794__auto__ = function(state_13685){
switch(arguments.length){
case 0:
return state_machine__5794__auto____0.call(this);
case 1:
return state_machine__5794__auto____1.call(this,state_13685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5794__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5794__auto____0;
state_machine__5794__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5794__auto____1;
return state_machine__5794__auto__;
})()
;})(switch__5793__auto__,c__5808__auto___13721,ch_13720))
})();
var state__5810__auto__ = (function (){var statearr_13700 = f__5809__auto__.call(null);
(statearr_13700[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5808__auto___13721);

return statearr_13700;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5810__auto__);
});})(c__5808__auto___13721,ch_13720))
);


var c__5808__auto___13729 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5808__auto___13729,ch_13720){
return (function (){
var f__5809__auto__ = (function (){var switch__5793__auto__ = ((function (c__5808__auto___13729,ch_13720){
return (function (state_13709){
var state_val_13710 = (state_13709[(1)]);
if((state_val_13710 === (4))){
var inst_13707 = (state_13709[(2)]);
var state_13709__$1 = state_13709;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13709__$1,inst_13707);
} else {
if((state_val_13710 === (3))){
var inst_13705 = (state_13709[(2)]);
var state_13709__$1 = (function (){var statearr_13711 = state_13709;
(statearr_13711[(7)] = inst_13705);

return statearr_13711;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13709__$1,(4),ch_13720,"there");
} else {
if((state_val_13710 === (2))){
var inst_13702 = (state_13709[(2)]);
var inst_13703 = cljs.core.async.timeout.call(null,(1000));
var state_13709__$1 = (function (){var statearr_13712 = state_13709;
(statearr_13712[(8)] = inst_13702);

return statearr_13712;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13709__$1,(3),inst_13703);
} else {
if((state_val_13710 === (1))){
var state_13709__$1 = state_13709;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13709__$1,(2),ch_13720,"hi");
} else {
return null;
}
}
}
}
});})(c__5808__auto___13729,ch_13720))
;
return ((function (switch__5793__auto__,c__5808__auto___13729,ch_13720){
return (function() {
var state_machine__5794__auto__ = null;
var state_machine__5794__auto____0 = (function (){
var statearr_13716 = [null,null,null,null,null,null,null,null,null];
(statearr_13716[(0)] = state_machine__5794__auto__);

(statearr_13716[(1)] = (1));

return statearr_13716;
});
var state_machine__5794__auto____1 = (function (state_13709){
while(true){
var ret_value__5795__auto__ = (function (){try{while(true){
var result__5796__auto__ = switch__5793__auto__.call(null,state_13709);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5796__auto__;
}
break;
}
}catch (e13717){if((e13717 instanceof Object)){
var ex__5797__auto__ = e13717;
var statearr_13718_13730 = state_13709;
(statearr_13718_13730[(5)] = ex__5797__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13709);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13717;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13731 = state_13709;
state_13709 = G__13731;
continue;
} else {
return ret_value__5795__auto__;
}
break;
}
});
state_machine__5794__auto__ = function(state_13709){
switch(arguments.length){
case 0:
return state_machine__5794__auto____0.call(this);
case 1:
return state_machine__5794__auto____1.call(this,state_13709);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5794__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5794__auto____0;
state_machine__5794__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5794__auto____1;
return state_machine__5794__auto__;
})()
;})(switch__5793__auto__,c__5808__auto___13729,ch_13720))
})();
var state__5810__auto__ = (function (){var statearr_13719 = f__5809__auto__.call(null);
(statearr_13719[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5808__auto___13729);

return statearr_13719;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5810__auto__);
});})(c__5808__auto___13729,ch_13720))
);


//# sourceMappingURL=core.js.map