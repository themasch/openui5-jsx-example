sap.ui.define([], function() {
  "use strict";

  return function(definition) {
    var attributes = definition.attributes;
    if(typeof definition.elementName !== "string") {
      var Class = definition.elementName;
      if (Class.getMetadata) {
        var oMetadata = Class.getMetadata();
        var sDefaultAggregation = oMetadata._sDefaultAggregation;
        if (typeof sDefaultAggregation === "string") {
          attributes[sDefaultAggregation] = definition.children;
        }
      }
      return new Class(attributes);
    }
  };
}, true)