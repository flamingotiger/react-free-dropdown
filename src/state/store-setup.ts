import { applyMiddleware, compose, createStore, Store, Middleware, CombinedState } from 'redux';
import rootReducer from '../state/reducers';

const isDev = process.env.NODE_ENV === 'development';
const configureStore = (): Store<CombinedState<any>, any> => {
	const composeEnhancers =
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		isDev && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
			? // eslint-disable-next-line @typescript-eslint/no-explicit-any
			  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
			: compose;
	const middleware: Array<Middleware> = [];
	const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));
	// Hot reload reducers:
	// https://github.com/reactjs/react-redux/releases/tag/v2.0.0
	if (isDev && module.hot) {
		module.hot.accept('reducers', () => {
			const nextRootReducer = require('reducers').default;
			// eslint-disable-next-line @typescript-eslint/no-use-before-define
			store.replaceReducer(nextRootReducer);
		});
	}
	return store;
};

const store = configureStore();

(global as any).store = store;

export default store;
