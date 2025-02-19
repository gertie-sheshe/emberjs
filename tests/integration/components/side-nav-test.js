import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Component | side-nav", function(hooks) {
  setupRenderingTest(hooks);

  test("it renders", async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<SideNav />`);

    assert.dom("div").hasClass("anapanda");
    assert.dom("img").hasClass("anapanda-image");
    assert.dom("ul").hasClass("side-nav-list");
    assert.dom("i").hasClass("material-icons");
  });
});
