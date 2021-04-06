(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = global || self, factory(global.microbundleIssue825 = {}));
}(this, (function (exports) {
    var print = function print() {
      var _console;

      (_console = console).log.apply(_console, [].slice.call(arguments));
    };

    exports.print = print;

})));
//# sourceMappingURL=a.umd.js.map
