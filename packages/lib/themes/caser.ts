import { Theme, ThemeAppearance } from './type';
import lightTheme from './light';

const theme: Theme = {
	...lightTheme,

	appearance: ThemeAppearance.Dark,

	backgroundColor: '#1a1a2e',
	backgroundColorTransparent: 'rgba(26, 26, 46, 0.9)',
	oddBackgroundColor: '#16213e',
	color: '#e94560',
	colorError: '#ff4b2b',
	colorCorrect: '#0f3460',
	colorWarn: '#f0a500',
	colorWarnUrl: '#ffd369',
	colorFaded: '#95a5a6',
	dividerColor: '#0f3460',
	selectedColor: '#533483',
	urlColor: '#e94560',
	colorErrorSelected: '#ff7675',

	backgroundColor2: '#0f3460',
	color2: '#ffffff',
	selectedColor2: '#533483',
	colorError2: '#e94560',
	colorWarn2: '#f0a500',
	colorWarn3: '#f0a500',

	backgroundColor3: '#16213e',
	backgroundColorHover3: '#0f3460',
	color3: '#e94560',

	backgroundColor4: '#e94560',
	color4: '#ffffff',

	raisedBackgroundColor: '#533483',
	raisedColor: '#ffffff',
	searchMarkerBackgroundColor: '#ffd369',
	searchMarkerColor: 'black',

	warningBackgroundColor: '#533483',
	destructiveColor: '#e94560',

	tableBackgroundColor: '#16213e',
	codeBackgroundColor: '#0f3460',
	codeBorderColor: '#533483',
	codeColor: '#ffffff',

	codeMirrorTheme: 'material-darker',
	codeThemeCss: 'atom-one-dark-reasonable.css',

	headerBackgroundColor: '#0f3460',
	textSelectionColor: '#e94560',
};

export default theme;
