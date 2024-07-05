
function custonRender(element,container)
{
    console.log(container);
    const domElement=document.createElement(element.type);
    domElement.innerHTML=element.Children;
    console.log(domElement)
    for(const prop in element.props)
    {
        // if(prop == children) continue;
        domElement.setAttribute(prop,element.props[prop]);
    }
    container.appendChild(domElement);
}
const reactElement={
    type:'a',
    props:
    {
        href:'https//:google.com',
        target:'_blank'
    },
    Children:'click me to visit google'
}
const mainContainer=document.getElementById('root');
console.log(mainContainer)
custonRender(reactElement,mainContainer)