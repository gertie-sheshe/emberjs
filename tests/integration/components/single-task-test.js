import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Component | single-task", function(hooks) {
  setupRenderingTest(hooks);

  test("it renders", async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    this.setProperties({
      task: {
        id: 1,
        name: "Solve all github issues",
        description: "Solve the world's Github issues.",
        isComplete: false,
        isPinned: false,
        creator: 2
      }
    });

    await render(hbs`<SingleTask @task={{this.task}}/>`);

    assert.dom("h5").hasClass("card-title");
    assert.dom("h5").hasText("Solve all github issues");
    assert.dom("button").hasClass("task-button");
    assert.dom("button").hasText("Done");
    assert
      .dom("div .task-description")
      .hasText("Solve the world's Github issues.");
    assert.dom("img").exists();
  });
});
