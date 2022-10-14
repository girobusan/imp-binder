import {Component , createElement, createRef , h , render} from "preact";
import {If} from "./components/If";
import {html} from "htm/preact";
import { getSettings , setSettings , saveFile} from "./fileops";
require("./scss/editor.scss")

class LinkForm extends Component{

  constructor(props){
    super(props);
    this.state = {
       href: props.href || "index.html",
       title: props.title || "No title",
       name: props.name || "No  name",
       index: props.index || 0
    }
    this.linkF = createRef();
    this.titleF = createRef();
    this.itemF = createRef();
    this.onChange = this.onChange.bind(this);
    this.handler = props.handler || function(s,i){ console.log(s,i) } ;
    this.deleter = props.del || function(i){console.log("remove", i)}
    
  }

  componentDidUpdate(){

  }

  onChange(){
    // console.log('change...');
    this.setState({
       href: this.linkF.current.value,
       title: this.itemF.current.value,
       name: this.itemF.current.value,
    })

    this.handler({
       href: this.linkF.current.value,
       title: this.itemF.current.value,
       name: this.itemF.current.value,
    }, this.props.index);
          
  }
  
  render(){
    return html`<div class="linkForm">
    <input type="text" value=${this.state.name} ref=${this.itemF} onChange=${this.onChange}></input>
    <input type="text" value=${this.state.href} ref=${this.linkF} 
    onChange=${this.onChange}></input>
    <input type="button" value="del" onClick=${()=>this.deleter(this.props.index)}></input>
     </div>` 
  }
}


class BinderEditor extends Component{

  constructor(props){
    super(props);
    this.state = { open: false , links:props.settings.links};
    this.switchOpen = this.switchOpen.bind(this);
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.changeItem = this.changeItem.bind(this);
    // console.log("state" , props.settings.links )
  }
  componentDidUpdate(){
  console.log("Component updated");
  }

  switchOpen(){
    this.setState({open: !this.state.open});
  }

  addItem(href, name , title){
    const a = this.state.links.map(e=>e);
    a.push({href: href , title: title , name: name});
    this.setState({links: a})
    setSettings({
       links:a
    })
  }
  removeItem(idx){
    // console.log("delete" , idx);
    const a = this.state.links.filter((e,i)=>i!=idx);
    // console.log("a" , a);
    this.setState({links: a})
    setSettings({
       links:a
    })
  }
  changeItem(itm, idx){
  console.log("chanche item" , itm , idx);
    const a = this.state.links.map(e=>e);
    a[idx] = itm;
    this.setState({links: a});
    setSettings({
       links:a
    })
  }

  togglePageEditor(){
    let cp = window.currentPage;
    if(!cp){ return; }
    const hashIdx = cp.indexOf("#");
    const cph =hashIdx==-1 ? "" :  cp.substring(hashIdx);
    // console.log("cph" , cph);
    if(cph==="#view"){
       cp = cp.replace("#view" , "") 
    }
    if(cph==="#edit" ){
       cp = cp.replace("#edit" , "#view") 
    }
    if(!cph){
      cp= cp+="#view"
    }
    // console.log("Going to" , cp);
    const ifr = document.querySelector("#display");
    window.currentPage = cp;
    ifr.src = cp;
  }

  render(){
    //button if not active
    //editor panel if active
    //---
    //edit current page
    //close binder editor
    //save binder
    //add menuitem
    //---
    return html`<${If} condition=${!this.state.open}>
    <div class="BinderEditor buttons" >
    <input type="button" value="Edit binder" onClick=${this.switchOpen}></input>
    <input type="button" value="Edit page" onClick=${this.togglePageEditor}></input>
    </div>
    </${If}><${If} condition=${this.state.open}>
    <!--editor-->
    <div class="BinderEditor panel" >
      ${this.state.links.map((l,i)=>html`<${LinkForm} href=${l.href}
      key=${l.title+l.name+l.href+i}
      title=${l.title}
      name=${l.name}
      del=${this.removeItem}
      handler=${this.changeItem}
      index=${i} />`)}
      <div class="actions">
      <input type="button" value="add" onClick=${()=>this.addItem("href", "name", "title")}></input>
      <input type="button" value="close" onClick=${this.switchOpen}></input>
      <input type="button" value="save binder" onClick=${saveFile}></input>
      <input type="button" value="toggle page editor" onClick=${this.switchOpen}></input>
      </div>
    </div>
    </${If}>` ;
  } 

}

export function makeEditable(){
  //do save clicked 
  // const lnks = window.document.querySelectorAll("nav li a");
  // console.log("lnks" , lnks);
  // Array.from(lnks)
  window.addEventListener("click" , 
    (evt)=>{
       if(evt.target.getAttribute("href"))
       {
         window.currentPage=evt.target.getAttribute("href")
       }
    });

    console.log("editable.") 
    console.log( getSettings() )
    const s = document.querySelector("#editorScript");
    s.remove();
    const edel = document.createElement("div");
    edel.id="editorContainer";
    const ed = h(BinderEditor, {settings: getSettings()});
    window.document.body.appendChild(edel);
    render(ed , edel);


}

makeEditable();
