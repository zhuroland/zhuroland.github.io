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

export const onRequest = defineMiddleware((ctx, next) => {
	const pathname = ctx.url.pathname;
	const action = actions[pathname as ActionKey];

	if (!action) {
		console.log(`No track on page "${pathname}"`);
		return next();
	}

	console.log(`Track page "${pathname}"`);
	action();

	return next();
});
