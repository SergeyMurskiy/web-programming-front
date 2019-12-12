import BaseAlert from "../components/base_components/BaseAlert";
import BaseButton from "../components/base_components/BaseButton";
import BaseInput from "../components/base_components/BaseInput";
import Card from "../components/base_components/Card";
import Header from "../components/header/Header"

export default {
  install(Vue) {
    Vue.component(BaseAlert.name, BaseAlert);
    Vue.component(BaseButton.name, BaseButton);
    Vue.component(BaseInput.name, BaseInput);
    Vue.component(Card.name, Card);
    Vue.component(Header.name, Header);
  }
};
