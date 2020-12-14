const Router = require('./router')
const cloudflareSVG = require('simple-icons/icons/Cloudflare');
const javascriptSVG = require('simple-icons/icons/JavaScript');
const htmlSVG = require('simple-icons/icons/HTML5');

//Global array, available for use throughout the application.
const links = [
    { "name": "Author's Website", "url": "https://www.maitrapatel.info" },
    { "name": "Cloudflare", "url": "https://www.cloudflare.com/" },
    { "name": "Google", "url": "https://www.google.com" }
]
const svgIcons = [
    cloudflareSVG, javascriptSVG, htmlSVG
]
const profileImage = {
    "url": "https://maitrapatel-personalbucket.s3.amazonaws.com/IMG-2595.jpg"
}
//Main worker fetch event listener
addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
})
//_________________Rerouted handler for path: /links_________________
function linksPathHandler(request) {
    const init = {
        headers: { 'Content-Type': 'application/json' },
    }
    const body = JSON.stringify(links)
    return new Response(body, init)
}
//__________Rerouted handler for all paths except /links_____________
async function nonLinksPathHandler(request) {
    let URL = "https://static-links-page.signalnerve.workers.dev"

    const rewriter = await new HTMLRewriter()
        .on('div#links', new LinksTransformer(links))
        .on('div#profile', { element: e => e.removeAttribute('style') })
        .on('img#avatar', { element: e => { e.setAttribute('src', profileImage.url), e.setAttribute('alt', "Maitra's Profile Pic") } })
        .on('h1#name', { element: e => e.setInnerContent("Maitra Patel", { html: true }) })
        .on("div#social", { element: e => e.removeAttribute('style') })
        .on("div#social", new AddSVGIcons(svgIcons))
        .on("title", { element: e => e.setInnerContent("Maitra Patel", { html: true }) })
        .on("body", { element: e => e.setAttribute('class', "bg-orange-400") })
        .transform(await fetch(URL))

    const response = await rewriter.text();
    const init = {
        headers: { 'Content-Type': 'text/html' },
    }
    return new Response(response, init);
}

//________________________Links Transformer_____________________________
class LinksTransformer {
    constructor(links) {
        this.links = links
    }

    element(element) {
        let link;
        for (link in links) {
            //a tag for each link along with proper indentation
            let childLink = `\n\t\t\t\t<a href=${links[link].url}>${links[link].name}</a>`
            element.append(childLink, { html: true })
        }
        element.append("\n\t\t\t", { html: true }) //Indentation fix
    }
}
//________________________SVGIcons Transformer_____________________________
class AddSVGIcons {
    constructor(svgIcons) {
        this.svgIcons = svgIcons
    }

    element(element) {
        let icon;
        for (icon in svgIcons) {
            //a tag for each icon along with proper indentation
            let childLink = `\n\t\t\t\t<a href=${svgIcons[icon].source}>${svgIcons[icon].svg}</a>`
            element.append(childLink, { html: true })
        }
        element.append("\n\t\t\t", { html: true }) //Indentation fix
    }
}

//___________________Universal request handler_________________
async function handleRequest(request) {
    const r = new Router()

    //Routing of requests based on paths
    r.get('.*/links', request => linksPathHandler(request))
    r.get('.*/.*', request => nonLinksPathHandler(request))

    //Response received
    const resp = await r.route(request)
    return resp
}
