// Once generated by CoffeeScript 1.9.3, but now lives as pure JS
/* eslint-disable */
(function() {
  this.Conditional = (function() {
    function Conditional(element, callerElId) {
      var dependencies;
      this.el = $(element).find('.conditional-wrapper');
      this.callerElId = callerElId;
      if (callerElId !== void 0) {
        dependencies = this.el.data('depends');
        if ((typeof dependencies === 'string') && (dependencies.length > 0) && (dependencies.indexOf(callerElId) === -1)) {
          return;
        }
      }
      this.url = this.el.data('url');
      if (this.url) {
        this.render(element);
      }
    }

    Conditional.prototype.render = function(element) {
      return $.postWithPrefix(this.url + "/conditional_get", (function(_this) {
        return function(response) {
          var i, j, len, parentEl, parentId, ref;
          _this.el.html('');
          ref = response.html;
          for (j = 0, len = ref.length; j < len; j++) {
            i = ref[j];
            _this.el.append(i);
          }
          parentEl = $(element).parent();
          parentId = parentEl.attr('id');
          if (response.message === false) {
            if (parentEl.hasClass('vert')) {
              parentEl.hide();
            } else {
              $(element).hide();
            }
          } else {
            if (parentEl.hasClass('vert')) {
              parentEl.show();
            } else {
              $(element).show();
            }
          }

          /*
          The children are rendered with a new request, so they have a different request-token.
          Use that token instead of @requestToken by simply not passing a token into initializeBlocks.
           */
          return XBlock.initializeBlocks(_this.el);
        };
      })(this));
    };

    return Conditional;

  })();

}).call(this);