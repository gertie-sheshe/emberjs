import Controller from "@ember/controller";

export default class IndexController extends Controller {
  get results() {
    let dataResults = 0;
    dataResults = this.model.filter(task => task.isComplete === true);

    return dataResults.length;
  }
}
