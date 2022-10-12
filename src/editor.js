import {Component , createRef} from "preact";
import {If} from "./components/If";
import {html} from "htm/preact";

class linkForm extends Component{

  constructor(props){
    super(props);
    this.state = {
       link: props.link,
       title: props.title,
       menuItem: props.menuItem
    }
    this.linkF = createRef();
    this.titleF = createRef();
    this.itemF = createRef();
  }
  
  render(){
    return html`<div class="linkForm">
     </div>` 
  }
}


class BinderEditor extends Component{

  constructor(props){
    super(props);
    this.state = { open: false };
    this.switchOpen = this.switchOpen.bind(this);
  }

  switchOpen(){
    this.setState({open: !this.state.open});
  }

  render(){
    //button if not active
    //editor panel if active
    return html`<${If} condition=${this.state.open}>
    <div clas="BinderEditor button" onClick=${this.switchOpen}>edit</div>
    </${If}><${If} condition=${!this.state.open}>
    <!--editor-->
    <div class="BinderEditor panel">editor</div>
    </${If}>` ;
  } 

}
