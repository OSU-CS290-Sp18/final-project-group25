(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['photoCard'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<section class=\"photo-item\">\r\n	<div class=\"image-container\">\r\n		<img class=\"product-image\" src="
    + alias4(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data}) : helper)))
<<<<<<< HEAD
    + ">\r\n	</div>\r\n	<div class=\"item-name\">\r\n		<a href = \"/people/"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "</a>\r\n	</div>\r\n</section>";
=======
    + ">\r\n	</div>\r\n	<div class=\"item-name\">\r\n		<a href = \"/featured/"
    + alias4(((helper = (helper = helpers.to || (depth0 != null ? depth0.to : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"to","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.item || (depth0 != null ? depth0.item : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"item","hash":{},"data":data}) : helper)))
    + "</a>\r\n	</div>\r\n</section>\r\n";
>>>>>>> 66b0387161c2832bbc80f4fff2bc0e8bfee8b7fa
},"useData":true});
})();