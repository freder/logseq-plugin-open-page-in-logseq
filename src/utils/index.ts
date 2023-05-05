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
	return `
		<div style="display: inline;">
			<button
				id="create-url-file"
				__data-on-click="invokeCommand"
				title="${cmdLabel}"
				class="button icon inline"
				style="width:32px;height:32px;display:flex;align-items:center;justify-content:center;"
			>
				<span class="ui__icon" style="position:relative;left:1px;">
					o
				</span>
			</button>
		</div>
	`;
};
