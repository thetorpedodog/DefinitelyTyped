gtag('config', 'target', { groups: 'abc', send_to: ['c', 'd', 'e'], event_callback: () => { }, event_timeout: 123, custom: 'param' });
gtag('set', { key: 'value' });
gtag('event', 'login', { method: 'so.cl' });
gtag('event', 'add_to_cart', { currency: 'usd', value: '$1' });
gtag('event', 'custom event', { wild_custom: 'parameter' });

// $ExpectError
gtag('set', 'invalid');
// $ExpectError
gtag('config', 'target', { event_callback: 'not a function' });
// $ExpectError
gtag('event', 'custom', { groups: [1, 2, 3] });
// $ExpectError
gtag('set', { event_timeout: 'five million years' });
// $ExpectError
gtag('bogus');
