block('modal').content()(function() {
	return [{
		elem: 'table',
		content: {
			elem: 'cell',
			content: [{
				elem: 'title',
				content: ''
			}, {
				block: 'button',
				type: 'button',
				mix: { block: 'modal', elem: 'close-button' },
				icon: '<svg xmlns:dc="http://purl.org/dc/elements/1.1/"xmlns:cc="http://creativecommons.org/ns#"xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"xmlns:svg="http://www.w3.org/2000/svg"xmlns="http://www.w3.org/2000/svg"id="svg8"version="1.1"viewBox="0 0 5.5562499 5.5562502"height="21"width="21"> <defs id="defs2" /> <metadata id="metadata5"> <rdf:RDF> <cc:Work rdf:about=""> <dc:format>image/svg+xml</dc:format> <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage" /> <dc:title></dc:title> </cc:Work> </rdf:RDF> </metadata> <g transform="translate(0,-291.44373)"id="layer1"> <path d="m 5.2372797,291.76271 -4.91830945,4.9183 m -3.8e-7,-4.91831 4.91831023,4.91832"style="fill:none;fill-opacity:1;stroke:#636363;stroke-width:0.904875;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"id="path4509-3" /> </g> </svg>'
			}, {
				elem: 'content',
				content: [this.ctx.content]
			}]
		}
	}];
})
