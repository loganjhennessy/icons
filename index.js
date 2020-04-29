const tools = require('@iconify/tools');

tools.ImportSVG('handshake.svg').then(svg => {
    // SVG was imported
    // Variable 'svg' is instance of SVG class
    console.log(svg.toString());
    return tools.SVGO(svg);
}).then(svgo => {
    tools.ExportSVG(svgo, 'handshake-optimized.svg');
    return tools.Scale(svgo, 4);
}).then(svgScaled => {
    tools.ExportPNG(svgScaled, 'handshake-optimized.png');
}).catch(err => {
    console.error(err);
});