(function(){ function _getCompiled(nools){ return (function() { return function(options) { options = options || {}; var defined = options.defined || {}, scope = options.scope || {}; return nools.flow("orRule-compiled", function() { var Count = defined.Count = this.addDefined("Count", function() { var Defined = function() { this.called = 0; }, proto = Defined.prototype; return proto.constructor = function() { this.called = 0; }, Defined; }()); this.rule("hello", { scope: scope }, [ "or", , [ String, "s", "s == 'hello'" ], [ String, "s", "s == 'world'" ], [ Count, "count" ] ], function(facts) { var count = facts.count; count.called++; }); }); }; })(); } if ("undefined" !== typeof exports) { if ("undefined" !== typeof module && module.exports) { module.exports = _getCompiled(require("../../")); } } else if ("function" === typeof define && define.amd) { define(["../../"], function (nools) { return _getCompiled(nools); }); } else { _getCompiled(this.nools)(); } }).call(this);
