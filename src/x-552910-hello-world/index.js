import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';

const view = (state, {updateState}) => {
	return (
		<div><h1>Hello World</h1></div>
	);
};

createCustomElement('x-552910-hello-world', {
	renderer: {type: snabbdom},
	view,
	styles
});
