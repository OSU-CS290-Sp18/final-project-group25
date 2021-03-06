(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['review'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<article class=\"review\">\r\n	<div class=\"review-content\">\r\n		<p class=\"review-text\">\r\n			"
    + alias4(((helper = (helper = helpers.reviewContent || (depth0 != null ? depth0.reviewContent : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"reviewContent","hash":{},"data":data}) : helper)))
    + "\r\n		</p>\r\n		<p class=\"review-author\">\r\n			"
    + alias4(((helper = (helper = helpers.author || (depth0 != null ? depth0.author : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"author","hash":{},"data":data}) : helper)))
    + "\r\n		</p>\r\n	</div>\r\n</article>\r\n";
},"useData":true});
})();