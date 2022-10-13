
const doc = window.document;
const description = doc.querySelector("meta[name=description]").content;

export function getSettings(){
  //title
  const title = doc.title;
  const img = doc.querySelector("meta[property='og:image']").content;
  const links = doc.querySelectorAll("nav li a");
  const linksObj = Array.from(links).map(e=>{return { 
     href: e.getAttribute("href").replace(/#[^#]+$/ , ""),
     title: e.dataset.title || e.innerHTML,
     name: e.innerHTML


  }});

  return {  title: title , description: description , image: img , links: linksObj }
}

export function setSettings(s){
  console.log("setSettings()" , s);
  // doc.title.innerHTML = s.title;
  // description.content = s.description;
  //links
  const lnk = doc.querySelector("nav ul");
  const ifr = doc.querySelector("iframe");
  ifr.src = s.links[0].href+"#view";

  lnk.innerHTML = "";
  s.links.forEach(l=>{
      console.log("link" , l)
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = l.href + "#view";
      a.innerHTML = l.name;
      a.target="display";
      a.dataset.title = l.title || l.name;
      li.appendChild(a);
      lnk.appendChild(li);
  })
}

function saveFile(){
 
}
