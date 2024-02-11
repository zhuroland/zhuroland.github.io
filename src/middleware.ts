import { defineMiddleware } from 'astro:middleware';

const actions = {
	'/': () => {
		console.log('Action "/"');
	},
	'/docs/astro': () => {
		console.log('Action "/docs/astro"');
	},
} satisfies Record<string, () => void>;

type ActionKey = keyof typeof actions;

const trackPage = async (pathname: string) => {
	const action =
		JSON.stringify(actions[pathname as ActionKey]) !== '{}'
			? actions[pathname as ActionKey]
			: () => {};

	if (!action) {
		console.log(`No track on page "${pathname}"`);
		return;
	}

	console.log(`Track page "${pathname}"`);
	action();
};

const trackAllPage = async (pathname: string) => {
	console.log(`Track all page "${pathname}"`);
	await fetch('https://ntfy.sh/h49z8eh4564hy6er84y', {
		method: 'POST', // PUT works too
		body: `Track all page "${pathname}"`,
	});
};

export const onRequest = defineMiddleware((ctx, next) => {
	const pathname = ctx.url.pathname;
	trackPage(pathname);
	trackAllPage(pathname);
	return next();
});
