sap.ui.define(
  ["sap/m/List", "sap/m/StandardListItem", "masch/jsx/createElement"], 
  function(List, StandardListItem, createElement) {
    "use strict"; 

    sap.ui.jsview("masch.jsx.TestView", {
      createContent: (oController) => {
        const test = "asdf";
        return (
          <List mode="MultiSelect">
            <StandardListItem title={test} />
          </List>
        );
      }
    })
  }, 
  true
);