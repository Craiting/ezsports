import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    console.log("elkajsd;lkf\n")
    this.element.textContent = "Hello World!"
  }
}
