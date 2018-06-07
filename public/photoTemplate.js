(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['photo'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<section class=\"photo\">\r\n	<div class=\"image-container\">\r\n		<img class=\"product-image\" src="
    + container.escapeExpression(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"url","hash":{},"data":data}) : helper)))
    + ">\r\n	</div>\r\n</section>";
},"useData":true});
})();