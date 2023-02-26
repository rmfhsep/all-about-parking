// import { css } from 'styled-components';

const size = {
	mobile: '640px',
	tabletMin: '641px',
	tabletMax: '1440px',
	wideMin: '1441px',
	wideMax: '1610px',
};

const responsive = {
	mobile: `(max-width: ${size.mobile})`,
	tablet: `(min-width: ${size.tabletMin}) and (max-width: ${size.tabletMax})`,
	wide: `(min-width: ${size.wideMin})`,
};

export default responsive;
