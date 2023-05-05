import '@logseq/libs';
import { saveAs } from 'file-saver';
import slugify from 'slugify';
import { makeToolbarIcon, makeUrl, makeUrlContent } from './utils';
// import type { SimpleCommandKeybinding } from '@logseq/libs/dist/LSPlugin';


const main = async () => {
	// add toolbar icon
	logseq.App.registerUIItem(
		'toolbar',
		{
			key: 'create-url-file',
			template: `${makeToolbarIcon('Create .url file pointing to current page')}\n`,
		}
	);

	// logseq.App.registerCommandPalette(
	// 	{
	// 		key: 'create-url-file',
	// 		label: 'Create .url file pointing to current page',
	// 		// keybinding: keyBinding,
	// 	},
	// 	copy
	// );

	// HACK: wait for the toolbar icon to be rendered
	setTimeout(() => {
		// we need a direct user interaction for this to work
		// otherwise the command fails with "DOMException: Document is not focused"
		const elem = window.parent.document.getElementById('create-url-file');
		if (elem) {
			elem.addEventListener('click', copy);
		}
	}, 1000);
};

const copy = async () => {
	if (!logseq) {
		alert('`logseq` object not available');
		return;
	}

	const page = await logseq.Editor.getCurrentPage();
	if (!page) {
		alert('Failed to get current page');
		return;
	}

	const graph = await logseq.App.getCurrentGraph();
	if (!graph) {
		alert('Failed to get current graph');
		return;
	}

	const url = makeUrl(graph.name, page.name);

	// for some reason finder does not want to open the webloc files we create
	// const content = makeWeblocContent(url);

	const content = makeUrlContent(url);
	const blob = new Blob([content]/* , { type: mimeType } */);

	// const item = new ClipboardItem({ [blob.type]: blob });
	// navigator.clipboard.write([item]);

	const name = slugify(page.name, { lower: true });
	const file = new File([blob], `logseq-page__${name}.url`/* , { type: mimeType } */);

	// const item = new ClipboardItem({ [file.type]: file });
	// navigator.clipboard.write([item]);

	saveAs(file);
};

// const model = {
// 	invokeCommand: copy,
// };

logseq.ready(/* model,  */main).catch(console.error);
