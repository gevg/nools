(function(){ function _getCompiled(nools){ return (function() { return function(options) { options = options || {}; var bind = function(scope, fn) { return function() { return fn.apply(scope, arguments); }; }, defined = options.defined || {}, scope = options.scope || {}; return nools.flow("agenda-group-compiled", function() { var Message = defined.Message = this.addDefined("Message", function() { var Defined = function(name) { this.name = name; }, proto = Defined.prototype; return proto.constructor = function(name) { this.name = name; }, Defined; }()); this.rule("Hello World", { agendaGroup: "ag1", scope: scope }, [ [ Message, "m", "m.name == 'hello'" ] ], function(facts, flow) { var m = facts.m, m = facts.m, modify = bind(flow, flow.modify); modify(m, function() { this.name = "goodbye"; }); }), this.rule("Hello World 2", { agendaGroup: "ag2", scope: scope }, [ [ Message, "m", "m.name == 'hello'" ] ], function(facts, flow) { var m = facts.m, m = facts.m, modify = bind(flow, flow.modify); modify(m, function() { this.name = "goodbye"; }); }), this.rule("GoodBye", { agendaGroup: "ag1", scope: scope }, [ [ Message, "m", "m.name == 'goodbye'" ] ], function() {}), this.rule("GoodBye 2", { agendaGroup: "ag2", scope: scope }, [ [ Message, "m", "m.name == 'goodbye'" ] ], function() {}); }); }; })(); } if ("undefined" !== typeof exports) { if ("undefined" !== typeof module && module.exports) { module.exports = _getCompiled(require("../../")); } } else if ("function" === typeof define && define.amd) { define(["../../"], function (nools) { return _getCompiled(nools); }); } else { _getCompiled(this.nools)(); } }).call(this);
