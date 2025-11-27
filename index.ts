import { Elysia, file } from 'elysia';

const app = new Elysia()
	.get('/', file('./index.html'))
	.get('/doc.kml', () => Bun.file('./doc.kml'));

export default app;
