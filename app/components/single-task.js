import Component from "@glimmer/component";
import { action } from "@ember/object";

export default class SingleTaskComponent extends Component {
  @action toggleBody() {
    let { task } = this.args;

    task.isComplete = !task.isComplete;
  }
}
