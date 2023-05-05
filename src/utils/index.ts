export const makeUrl = (graphName: string, pageName: string) => {
	// logseq://graph/ios?page=document%20automation%20tool
	const url = `logseq://graph/${graphName}?page=${encodeURIComponent(pageName)}`;

	// uuid seems to work too
	// logseq://graph/ios?page=6454dc14-bbf7-4b12-83d1-ea7653f620f2

	return url;
};


// export const makeWeblocContent = (url: string) => {
// 	const content = `<?xml version="1.0" encoding="UTF-8"?>
// <!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
// <plist version="1.0">
// <dict>
// 	<key>URL</key>
// 	<string>${url}</string>
// </dict>
// </plist>
// `;
// 	return content;
// };


// also supported by windows
export const makeUrlContent = (url: string) => {
	const content = `[InternetShortcut]
URL=${url}`;
	return content;
};


export const makeToolbarIcon = (cmdLabel: string) => {
	// data-on-click="invokeCommand"
	return `
		<div style="display: inline;">
			<button
				id="create-url-file"
				title="${cmdLabel}"
				class="button icon inline"
				style="width:32px;height:32px;display:flex;align-items:center;justify-content:center;"
			>
				<span class="ui__icon" style="position:relative;left:1px;">
					<svg
						width="22"
						height="22"
						viewBox="0 0 32 32"
						version="1.1"
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						xml:space="preserve"
						xmlns:serif="http://www.serif.com/"
						style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
					>
						<path d="M4,20L4,22L7.586,22L2,27.586L3.414,29L9,23.414L9,27L11,27L11,20L4,20Z" style="fill:currentColor;fill-rule:nonzero;"/>
						<rect x="19" y="10" width="7" height="2" style="fill:currentColor;"/>
						<rect x="19" y="15" width="7" height="2" style="fill:currentColor;"/>
						<rect x="19" y="20" width="7" height="2" style="fill:currentColor;"/>
						<path d="M28,5L4,5C2.903,5.001 2.001,5.903 2,7L2,17L4,17L4,7L15,7L15,27L28,27C29.097,26.999 29.999,26.097 30,25L30,7C29.999,5.903 29.097,5.001 28,5ZM17,25L17,7L28,7L28.002,25L17,25Z" style="fill:currentColor;fill-rule:nonzero;"/>
						<rect id="_Transparent_Rectangle_" x="0" y="0" width="32" height="32" style="fill:none;"/>
					</svg>
				</span>
			</button>
		</div>
	`;
};
