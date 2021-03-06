const oneMinute = 1000 * 60,
	oneHour = oneMinute * 60,
	oneDay = oneHour * 24,
	oneWeek = oneDay * 7,
	oneMonth = oneDay * 30,
	oneYear = oneMonth * 12;

export const TimeUnits = {
	Min: 'minute',
	Hr: 'hour',
	D: 'day',
	M: 'month',
};

export const CIntervals = [{
		name: '1 minute',
		value: '1',
		label: 'M1',
		toReduce: oneHour * 3,
		valueFormatString: TimeUnits.Min,
		intervalVal: 60,
		intervalLen: 30
	},
	{
		name: '5 minute',
		value: '5',
		label: 'M5',
		toReduce: oneDay,
		valueFormatString: TimeUnits.Min,
		intervalVal: 5 * 60,
		intervalLen: 12
	},
	{
		name: '15 minute',
		value: '15',
		label: 'M15',
		toReduce: oneDay,
		valueFormatString: TimeUnits.Min,
		intervalVal: 15 * 60,
		intervalLen: 12
	},
	{
		name: '30 minute',
		value: '30',
		label: 'M30',
		toReduce: oneWeek * 2,
		valueFormatString: TimeUnits.Min,
		intervalVal: 30 * 60,
		intervalLen: 8
	},
	// { name: '45 minute', value: '45', label: 'M45', toReduce: oneWeek * 2, valueFormatString: TimeUnits.Min, intervalVal: 45 * 60, intervalLen: 8 },
	{
		name: '1 hour',
		value: '60',
		label: 'H1',
		toReduce: oneWeek * 2,
		valueFormatString: TimeUnits.Hr,
		intervalVal: 60 * 60,
		intervalLen: 12
	},
	{
		name: '2 hour',
		value: '120',
		label: 'H2',
		toReduce: oneWeek * 4,
		valueFormatString: TimeUnits.Hr,
		intervalVal: 120 * 60,
		intervalLen: 12
	},
	{
		name: '4 hour',
		value: '240',
		label: 'H4',
		toReduce: oneMonth * 2,
		valueFormatString: TimeUnits.Hr,
		intervalVal: 240 * 60,
		intervalLen: 6
	},
	// { name: '5 hour', value: '300', label: 'H5', toReduce: oneMonth * 3, valueFormatString: TimeUnits.Hr, intervalVal: 300 * 60, intervalLen: 12 },
	{
		name: '1 Day',
		value: 'D',
		label: 'D',
		toReduce: oneYear,
		valueFormatString: TimeUnits.D,
		intervalVal: 24 * 60 * 60,
		intervalLen: 30
	},
	{
		name: '1 Week',
		value: 'W',
		label: 'W',
		toReduce: oneYear * 3,
		valueFormatString: TimeUnits.D,
		intervalVal: 168 * 60 * 60,
		intervalLen: 12
	},
	{
		name: '1 Month',
		value: 'M',
		label: 'M',
		toReduce: oneYear * 10,
		valueFormatString: TimeUnits.M,
		intervalVal: 30 * 24 * 60 * 60,
		intervalLen: 12
	},
];

export const leftTools = [{
		group: 'cursor',
		key: 'crosshair',
		icon: `<g fill-rule="nonzero">
		<path d="M18 15h8v-1h-8z"></path><path d="M14 18v8h1v-8zM14 3v8h1v-8zM3 15h8v-1h-8z"></path>
    </g>`,
		title: 'Crosshair',
	},
	{
		group: 'cursor',
		key: 'dot',
		icon: `<g fill-rule="nonzero">
		<circle cx="14" cy="14" r="3"></circle>
    </g>`,
		title: 'Dot',
	},
	{
		group: 'cursor',
		key: 'arrow',
		icon: `<g fill-rule="nonzero">
		<path d="M11.682 16.09l3.504 6.068 1.732-1-3.497-6.057 3.595-2.1L8 7.74v10.512l3.682-2.163zm-.362 1.372L7 20V6l12 7-4.216 2.462 3.5 6.062-3.464 2-3.5-6.062z"></path>
    </g>`,
		title: 'Arrow',
	},
	{
		group: 'lines',
		key: 'h-ray',
		icon: `<g fill-rule="nonzero">
      <path d="M8.5 15h16.5v-1h-16.5z"></path>
      <path d="M6.5 16c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5z"></path>
    </g>`,
		title: 'Horizontal Ray',
	},
	{
		group: 'lines',
		key: 'arrow',
		icon: `<g fill-rule="nonzero">
      <path fill-rule="nonzero" d="M7.354 21.354l14-14-.707-.707-14 14z"></path>
      <path d="M21 7l-8 3 5 5z"></path>
      <path fill-rule="nonzero" d="M22.5 7c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5zM5.5 24c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5z"></path>
    </g>`,
		title: 'Arrow',
	},
	{
		group: 'lines',
		key: 't-line',
		icon: `<g fill-rule="nonzero">
			<path d="M7.354 21.354l14-14-.707-.707-14 14z"></path>
			<path d="M22.5 7c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5zM5.5 24c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5z"></path>
		</g>`,
		title: 'Trend Line',
	},
	{
		group: 'lines',
		key: 'ray',
		icon: `<g fill-rule="nonzero">
			<path d="M8.354 20.354l5-5-.707-.707-5 5z"></path>
			<path d="M16.354 12.354l8-8-.707-.707-8 8z"></path>
			<path d="M14.5 15c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5zM6.5 23c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5z"></path>
		</g>`,
		title: 'Ray',
	},
	{
		group: 'lines',
		key: 'parallel',
		icon: `<g fill-rule="nonzero">
			<path d="M8.354 18.354l10-10-.707-.707-10 10zM12.354 25.354l5-5-.707-.707-5 5z"></path>
			<path d="M20.354 17.354l5-5-.707-.707-5 5z"></path>
			<path d="M19.5 8c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5zM6.5 21c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5zM18.5 20c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5z"></path>
		</g>`,
		title: 'Parallel Channel',
	},
	{
		group: 'fibs',
		key: 'fibonacci',
		icon: `<g fill-rule="nonzero">
      <path d="M3 5h22v-1h-22z"></path>
      <path d="M3 17h22v-1h-22z"></path>
      <path d="M3 11h19.5v-1h-19.5z"></path>
      <path d="M5.5 23h19.5v-1h-19.5z"></path>
      <path d="M3.5 24c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5zM24.5 12c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5z"></path>
    </g>`,
		title: 'Fibonacci Retracement',
	},
	{
		group: 'fibs',
		key: 'fib-extend',
		icon: `<g fill-rule="nonzero">
    <path d="M4 25h22v-1h-22z" id="Line"></path>
    <path d="M4 21h22v-1h-22z"></path>
    <path d="M6.5 17h19.5v-1h-19.5z"></path>
    <path d="M5 14.5v-3h-1v3zM6.617 9.275l10.158-3.628-.336-.942-10.158 3.628z"></path>
    <path d="M18.5 6c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5zM4.5 11c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5zM4.5 18c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5z"></path>
  </g>`,
		title: 'Fib Extension',
	},
	{
		group: 'shapes',
		key: 'rect',
		icon: `<g fill-rule="nonzero">
      <path d="M7.5 6h13v-1h-13z"></path>
      <path d="M7.5 23h13v-1h-13z"></path>
      <path d="M5 7.5v13h1v-13z"></path>
      <path d="M22 7.5v13h1v-13z"></path>
      <path d="M5.5 7c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5zM22.5 7c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5zM22.5 24c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5zM5.5 24c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5z"></path>
    </g>`,
		title: 'Rect',
	},
	{
		group: 'shapes',
		key: 'callout',
		icon: `<g fill-rule="nonzero">
      <path d="M6 21.586l3.586-3.586h13.407c.004 0 .007-11.993.007-11.993 0-.007-17-.007-17-.007v15.586zm-1 2.414v-18.005c0-.549.451-.995.995-.995h17.01c.549 0 .995.45.995 1.007v11.986c0 .556-.45 1.007-1.007 1.007h-12.993l-5 5z"></path>
    </g>`,
		title: 'Callout',
	},
	{
		group: 'patterns',
		key: 'xabcd',
		icon: `<g fill-rule="nonzero">
    <path d="M20.449 8.505l2.103 9.112.974-.225-2.103-9.112zM13.943 14.011l7.631 4.856.537-.844-7.631-4.856zM14.379 11.716l4.812-3.609-.6-.8-4.812 3.609zM10.96 13.828l-4.721 6.744.819.573 4.721-6.744zM6.331 20.67l2.31-13.088-.985-.174-2.31 13.088zM9.041 7.454l1.995 3.492.868-.496-1.995-3.492z"></path>
    <path d="M8.5 7c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5zM5.5 24c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5zM12.5 14c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5zM20.5 8c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5zM23.5 21c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5z"></path>
  </g>`,
		title: 'XABCD Pattern',
	},
	{
		group: 'patterns',
		key: 'cypher',
		icon: `<g fill-rule="nonzero">
    <path d="M15.246 21.895l1.121.355c-.172.625-.458 1.089-.857 1.393-.4.303-.907.455-1.521.455-.76 0-1.385-.26-1.875-.779-.49-.52-.734-1.23-.734-2.131 0-.953.246-1.693.738-2.221.492-.527 1.139-.791 1.941-.791.701 0 1.27.207 1.707.621.26.245.456.596.586 1.055l-1.145.273c-.068-.297-.209-.531-.424-.703-.215-.172-.476-.258-.783-.258-.424 0-.769.152-1.033.457-.264.305-.396.798-.396 1.48 0 .724.13 1.24.391 1.547.26.307.599.461 1.016.461.307 0 .572-.098.793-.293.221-.195.38-.503.477-.922z"></path>
    <path d="M20.449 8.505l2.103 9.112.974-.225-2.103-9.112zM13.943 14.011l7.631 4.856.537-.844-7.631-4.856zM14.379 11.716l4.812-3.609-.6-.8-4.812 3.609zM10.96 13.828l-4.721 6.744.819.573 4.721-6.744zM6.331 20.67l2.31-13.088-.985-.174-2.31 13.088zM9.041 7.454l1.995 3.492.868-.496-1.995-3.492z"></path>
    <path d="M8.5 7c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5zM5.5 24c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5zM12.5 14c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5zM20.5 8c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5zM23.5 21c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5z"></path>
  </g>`,
		title: 'Cypher Pattern',
	},
	{
		group: 'patterns',
		key: 'abcd',
		icon: `<g fill-rule="nonzero">
    <path d="M21.487 5.248l-12.019 1.502.124.992 12.019-1.502zM6.619 9.355l-2.217 11.083.981.196 2.217-11.083zM6.534 22.75l12.071-1.509-.124-.992-12.071 1.509zM21.387 18.612l2.21-11.048-.981-.196-2.21 11.048zM8.507 9.214l10.255 10.255.707-.707-10.255-10.255z"></path>
    <path d="M7.5 9c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5zM4.5 24c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5zM23.5 7c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5zM20.5 22c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5z"></path>
  </g>`,
		title: 'ABCD Pattern',
	},
	{
		group: 'patterns',
		key: 'tri_pattern',
		icon: `<g fill-rule="nonzero">
    <path d="M9.457 18.844l-5.371 2.4.408.913 5.371-2.4z"></path>
    <path d="M13.13 17.203l.408.913 13.688-6.116-6.736-3.01-.408.913 4.692 2.097z"></path>
    <path d="M11.077 5.88l5.34 2.386.408-.913-5.34-2.386z"></path>
    <path d="M7.401 4.237l.408-.913-5.809-2.595v19.771h1v-18.229z"></path>
    <path d="M3.708 20.772l5.51-14.169-.932-.362-5.51 14.169zM9.265 6.39l1.46 10.218.99-.141-1.46-10.218zM13.059 17.145l4.743-6.775-.819-.573-4.743 6.775z"></path>
    <path d="M9.5 6c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5zM11.5 20c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5zM18.5 10c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5zM2.5 24c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5z"></path>
  </g>`,
		title: 'Triangle Pattern',
	},
	{
		group: 'patterns',
		key: 'three_pattern',
		icon: `<g fill-rule="nonzero">
    <path d="M.303 17.674l1.104.473.394-.919-1.104-.473z"></path>
    <path d="M5.133 19.744l3.335 1.429.394-.919-3.335-1.429z"></path>
    <path d="M12.134 22.744l3.352 1.436.394-.919-3.352-1.436z"></path>
    <path d="M19.203 25.774l1.6.686.394-.919-1.6-.686z"></path>
    <path d="M.3 4.673l1.13.484.394-.919-1.13-.484-.394.919zm.394-.919l1.13.484-.394.919-1.13-.484.394-.919z"></path>
    <path d="M5.141 6.747l3.325 1.425.394-.919-3.325-1.425z"></path>
    <path d="M12.133 9.744l3.353 1.437.394-.919-3.353-1.437z"></path>
    <path d="M19.221 12.782l5.838 2.502.394-.919-5.838-2.502z"></path>
    <path d="M3 7.473v8.969h1v-8.969zM8.93 9.871l-4.616 6.594.819.573 4.616-6.594zM11 19.5v-9h-1v9zM15.898 12.916l-4.616 6.594.819.573 4.616-6.594zM18 22.5v-9h-1v9zM24.313 5.212l-6.57 17.247.934.356 6.57-17.247z"></path>
    <path d="M3.5 7c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5zM3.5 20c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5zM10.5 23c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5zM17.5 13c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5zM25.5 5c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5zM17.5 26c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5zM10.5 10c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5z">     </path>
  </g>`,
		title: 'Three Drives Pattern',
	},
	{
		group: 'patterns',
		key: 'head_shoulder',
		icon: `<g fill-rule="nonzero">
    <path d="M4.436 21.667l2.083-9.027-.974-.225-2.083 9.027zM10.046 16.474l-2.231-4.463-.894.447 2.231 4.463zM13.461 6.318l-2.88 10.079.962.275 2.88-10.079zM18.434 16.451l-2.921-10.224-.962.275 2.921 10.224zM21.147 12.089l-2.203 4.405.894.447 2.203-4.405zM25.524 21.383l-2.09-9.055-.974.225 2.09 9.055z"></path>
    <path d="M1 19h7.5v-1h-7.5z"></path>
    <path d="M12.5 19h4v-1h-4z"></path>
    <path d="M20.5 19h6.5v-1h-6.5z"></path>
    <path d="M.3 4.673l1.13.484.394-.919-1.13-.484-.394.919zm.394-.919l1.13.484-.394.919-1.13-.484.394-.919z"></path>
    <path d="M6.5 12c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5zM3.5 25c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5zM10.5 20c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5zM18.5 20c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5zM22.5 12c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5zM25.5 25c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5zM14.5 6c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5z"></path>
  </g>`,
		title: 'Head & Shoulders',
	},
	{
		group: 'patterns',
		key: 'impulse_wave',
		icon: `<g fill-rule="nonzero">
    <path d="M5.238 18.469l4.17-4.17-.707-.707-4.17 4.17zM16.47 17.763l-.707.707-4.265-4.265.707-.707zM22.747 13.546l-4.192 4.192.707.707 4.192-4.192z"></path>
    <path d="M10.5 14c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5zM17.5 21c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5zM24.5 14c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5zM3.5 21c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5z"></path>
    <path d="M11.148 7h-1.098v-4.137c-.401.375-.874.652-1.418.832v-.996c.286-.094.598-.271.934-.533.336-.262.566-.567.691-.916h.891v5.75z"></path>
    <path d="M23.355 5.527l1.094-.113c.031.247.124.443.277.588.154.145.331.217.531.217.229 0 .423-.093.582-.279.159-.186.238-.467.238-.842 0-.352-.079-.615-.236-.791-.158-.176-.363-.264-.615-.264-.315 0-.598.139-.848.418l-.891-.129.563-2.98h2.902v1.027h-2.07l-.172.973c.245-.122.495-.184.75-.184.487 0 .9.177 1.238.531.339.354.508.814.508 1.379 0 .471-.137.892-.41 1.262-.372.505-.889.758-1.551.758-.529 0-.96-.142-1.293-.426-.333-.284-.533-.665-.598-1.145z">               </path>
  </g>`,
		title: 'Elliott Impulse Wave(12345)',
	},
	{
		group: 'patterns',
		key: 'triangle_wave',
		icon: `<g fill-rule="nonzero">
    <path d="M5.238 18.469l4.17-4.17-.707-.707-4.17 4.17zM16.47 17.763l-.707.707-4.265-4.265.707-.707zM22.747 13.546l-4.192 4.192.707.707 4.192-4.192z"></path>
    <path d="M10.5 14c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5zM17.5 21c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5zM24.5 14c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5zM3.5 21c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5z"></path>
    <path d="M10.5 14c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5zM17.5 21c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5zM24.5 14c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5zM3.5 21c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5z"></path>
    <path d="M13.746 7h-1.258l-.5-1.301h-2.289l-.473 1.301h-1.227l2.23-5.727h1.223l2.293 5.727zm-2.129-2.266l-.789-2.125-.773 2.125h1.563z"></path>
    <path d="M22.582 7v-5.727h4.246v.969h-3.09v1.27h2.875v.965h-2.875v1.559h3.199v.965z"></path>
  </g>`,
		title: 'Elliott Triangle Wave(ABCDE)',
	},
	{
		group: 'patterns',
		key: 'triple_wave',
		icon: `<g fill-rule="nonzero">
    <path d="M5.238 18.469l4.17-4.17-.707-.707-4.17 4.17zM16.47 17.763l-.707.707-4.265-4.265.707-.707zM22.747 13.546l-4.192 4.192.707.707 4.192-4.192z"></path>
    <path d="M10.5 14c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5zM17.5 21c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5zM24.5 14c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5zM3.5 21c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5z"></path>
    <path d="M8.395 7l-1.367-5.727h1.184l.863 3.934 1.047-3.934h1.375l1.004 4 .879-4h1.164l-1.391 5.727h-1.227l-1.141-4.281-1.137 4.281z"></path>
    <path d="M22.086 7v-1.043l3.008-3.715h-2.668v-.969h4.191v.898l-3.137 3.863h3.258v.965z"></path>
  </g>`,
		title: 'Elliott Triple Combo Wave (WXYXZ)',
	},
	{
		group: 'patterns',
		key: 'correction_wave',
		icon: `<g fill-rule="nonzero">
    <path d="M5.238 18.469l4.17-4.17-.707-.707-4.17 4.17zM16.47 17.763l-.707.707-4.265-4.265.707-.707zM22.747 13.546l-4.192 4.192.707.707 4.192-4.192z"></path>
    <path d="M10.5 14c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5zM17.5 21c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5zM24.5 14c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5zM3.5 21c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5z"></path>
    <path d="M13.746 7h-1.258l-.5-1.301h-2.289l-.473 1.301h-1.227l2.23-5.727h1.223l2.293 5.727zm-2.129-2.266l-.789-2.125-.773 2.125h1.563z"></path>
    <path d="M26.246 4.895l1.121.355c-.172.625-.458 1.089-.857 1.393-.4.303-.907.455-1.521.455-.76 0-1.385-.26-1.875-.779-.49-.52-.734-1.23-.734-2.131 0-.953.246-1.693.738-2.221.492-.527 1.139-.791 1.941-.791.701 0 1.27.207 1.707.621.26.245.456.596.586 1.055l-1.145.273c-.068-.297-.209-.531-.424-.703-.215-.172-.476-.258-.783-.258-.424 0-.769.152-1.033.457-.264.305-.396.798-.396 1.48 0 .724.13 1.24.391 1.547.26.307.599.461 1.016.461.307 0 .572-.098.793-.293.221-.195.38-.503.477-.922z"></path>
  </g>`,
		title: 'Elliott Correction Wave (ABC)',
	},
	{
		group: 'patterns',
		key: 'double_wave',
		icon: `<g fill-rule="nonzero">
    <path d="M5.238 18.469l4.17-4.17-.707-.707-4.17 4.17zM16.47 17.763l-.707.707-4.265-4.265.707-.707zM22.747 13.546l-4.192 4.192.707.707 4.192-4.192z"></path>
    <path d="M10.5 14c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5zM17.5 21c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5zM24.5 14c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5zM3.5 21c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5z"></path>
    <path d="M8.395 7l-1.367-5.727h1.184l.863 3.934 1.047-3.934h1.375l1.004 4 .879-4h1.164l-1.391 5.727h-1.227l-1.141-4.281-1.137 4.281z"></path>
    <path d="M24.086 7v-2.41l-2.098-3.316h1.355l1.348 2.266 1.32-2.266h1.332l-2.105 3.324v2.402z"></path>
  </g>`,
		title: 'Elliott Double Combo Wave (WXY)',
	},
	{
		group: 'analysis',
		key: 'analysis',
		icon: `
		<path d='M4 5H8V6H4V5Z'></path>
		<path d='M4 3H10V4H4V3Z'></path>
		<path d='M4 1H10V2H4V1Z'></path>
		<path d='M2.3555 14L5.171 9.002L8.888 12.247C9.00036 12.347 9.13383 12.4203 9.27846 12.4616C9.4231 12.5028 9.57518 12.5109 9.72337 12.4853C9.87157 12.4596 10.0121 12.4009 10.1344 12.3134C10.2568 12.2259 10.3578 12.1119 10.43 11.98L13.915 6.7785L13.0845 6.2215L9.5845 11.4455L9.5495 11.497L5.832 8.252C5.71967 8.15259 5.58645 8.07968 5.44217 8.03865C5.29789 7.99762 5.14624 7.98953 4.99841 8.01497C4.85058 8.0404 4.71036 8.09872 4.58809 8.18562C4.46582 8.27251 4.36463 8.38576 4.292 8.517L2 12.5915V1H1V14C1.00026 14.2651 1.10571 14.5193 1.29319 14.7068C1.48066 14.8943 1.73486 14.9997 2 15H15V14H2.3555Z'></path>
		`,
		title: 'Analysis Manager',
	},
	{
		group: 'analysis',
		key: 'trade',
		icon: `
			<path d="M5.9652 3.33032L3.13185 0.0578172C3.1003 0.0213921 3.05024 4.18972e-05 3.00016 6.13288e-08C2.94998 -4.17745e-05 2.89978 0.0213224 2.86817 0.0578172L0.0348006 3.33032C-0.00410605 3.37521 -0.0109342 3.43592 0.0170661 3.48677C0.0450664 3.53775 0.103004 3.57001 0.166646 3.57001H0.866654C1.30849 3.57001 1.66666 3.88967 1.66666 4.284V6.99125C1.66666 7.07347 1.74121 7.14 1.83333 7.14H4.16668C4.25881 7.14 4.33336 7.07347 4.33336 6.99125V4.28399C4.33336 3.88966 4.69153 3.56999 5.13336 3.56999H5.83337C5.89701 3.56999 5.95495 3.53774 5.98295 3.48675C6.01094 3.43591 6.00409 3.37519 5.9652 3.33032Z"></path><path d="M0.0347996 11.9697L2.86815 15.2422C2.8997 15.2786 2.94976 15.3 2.99984 15.3C3.05002 15.3001 3.10022 15.2787 3.13183 15.2422L5.9652 11.9697C6.00411 11.9248 6.01093 11.8641 5.98293 11.8133C5.95493 11.7623 5.897 11.73 5.83335 11.73H5.13335C4.69151 11.73 4.33334 11.4103 4.33334 11.016V8.30877C4.33334 8.22655 4.25879 8.16002 4.16667 8.16002H1.83332C1.74119 8.16002 1.66664 8.22655 1.66664 8.30877V11.016C1.66664 11.4104 1.30847 11.73 0.866636 11.73H0.166629C0.102987 11.73 0.0450492 11.7623 0.0170488 11.8133C-0.0109358 11.8641 -0.00409126 11.9248 0.0347996 11.9697Z"></path>
		`,
		title: 'Create Idea',
	},
	{
		group: 'magnet',
		key: 1,
		icon: `<g fill-rule="evenodd">
			<path fill-rule="nonzero" d="M14 10a2 2 0 0 0-2 2v11H6V12c0-4.416 3.584-8 8-8s8 3.584 8 8v11h-6V12a2 2 0 0 0-2-2zm-3 2a3 3 0 0 1 6 0v10h4V12c0-3.864-3.136-7-7-7s-7 3.136-7 7v10h4V12z"></path>
			<path d="M6.5 18h5v1h-5zm10 0h5v1h-5z"></path>
		</g>`,
		title: 'Weak Magnet'
	},
	{
		group: 'magnet',
		key: 2,
		icon: `<g fill-rule="nonzero">
			<path fill-rule="nonzero" d="M14 5a7 7 0 0 0-7 7v3h4v-3a3 3 0 1 1 6 0v3h4v-3a7 7 0 0 0-7-7zm7 11h-4v3h4v-3zm-10 0H7v3h4v-3zm-5-4a8 8 0 1 1 16 0v8h-6v-8a2 2 0 1 0-4 0v8H6v-8zm3.293 11.294l-1.222-2.037.858-.514 1.777 2.963-2 1 1.223 2.037-.858.514-1.778-2.963 2-1zm9.778-2.551l.858.514-1.223 2.037 2 1-1.777 2.963-.858-.514 1.223-2.037-2-1 1.777-2.963z"></path>
		</g>`,
		title: 'Strong Magnet'
	}
];

export const CanvasChartOption = {
	interactivityEnabled: true,
	dataPointWidth: 4,
	toolTipContent: null,
	axisY2: {
		includeZero: false,
		gridThickness: 0.1,
		labelFontSize: 12,
		valueFormatString: "0.####",
		crosshair: {
			enabled: true,
			color: "orange",
		},
		stripLines: [{
			objectType: 'price',
			color: '#ff0000',
			showOnTop: true,
			labelFontColor: "white",
			labelAlign: 'near',
			labelBackgroundColor: '#ff0000',
			orgColor: '#ff0000',
			orgFontColor: 'white',
			labelFontSize: 12,
			lineDashType: 'dot',
			labelPlacement: "outside",
			labelWrap: true
		}]
	},
	axisX: {
		gridThickness: 0.2,
		labelAngle: 0,
		labelFontWeight: "bold",
		labelFontSize: 12,
		crosshair: {
			enabled: true,
			color: "orange"
		},
		labelAutoFit: false,
		scaleBreaks: {
			type: "straight",
			autoCalculate: false,
			customBreaks: []
		},
		stripLines: [],
	},
	data: []
};

export const CIndicators = [{
		key: 'ma',
		label: 'Moving Average',
		extra: false
	},
	{
		key: 'ema',
		label: 'Moving Average Exponential',
		extra: false
	},
	{
		key: 'wma',
		label: 'Moving Average Weighted',
		extra: false
	},
	{
		key: 'macd',
		label: 'MACD',
		extra: true
	},
	// { key: 'ichimoku2c', label: 'Ichimoku', extra: false },
	{
		key: 'ichimoku2c',
		label: 'Ichimoku Cloud',
		extra: false
	},
	{
		key: 'stochastic',
		label: 'Stochastic',
		extra: true
	},
	{
		key: 'rsi',
		label: 'RSI',
		extra: true
	},
	{
		key: 'atr',
		label: 'ATR',
		extra: true
	}
];

export const colorPalette = [
	["#000", "#444", "#666", "#999", "#ccc", "#eee", "#f3f3f3", "#fff"],
	["#f00", "#f90", "#ff0", "#0f0", "#0ff", "#00f", "#90f", "#f0f"],
	["#f4cccc", "#fce5cd", "#fff2cc", "#d9ead3", "#d0e0e3", "#cfe2f3", "#d9d2e9", "#ead1dc"],
	["#ea9999", "#f9cb9c", "#ffe599", "#b6d7a8", "#a2c4c9", "#9fc5e8", "#b4a7d6", "#d5a6bd"],
	["#e06666", "#f6b26b", "#ffd966", "#93c47d", "#76a5af", "#6fa8dc", "#8e7cc3", "#c27ba0"],
	["#c00", "#e69138", "#f1c232", "#6aa84f", "#45818e", "#3d85c6", "#674ea7", "#a64d79"],
	["#900", "#b45f06", "#bf9000", "#38761d", "#134f5c", "#0b5394", "#351c75", "#741b47"],
	["#600", "#783f04", "#7f6000", "#274e13", "#0c343d", "#073763", "#20124d", "#4c1130"]
];