import Component from "@glimmer/component";
import { action } from "@ember/object";

export default class SingleTaskComponent extends Component {
  @action pinMe() {
    let { task } = this.args;

    task.isPinned = !task.isPinned;
  }

  @action toggleBody() {
    let { task } = this.args;

    task.isComplete = !task.isComplete;
  }
}
