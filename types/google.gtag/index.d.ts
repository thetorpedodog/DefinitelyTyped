// Type definitions for Google gtag.js
// Project: https://developers.google.com/gtagjs/reference/api, https://developers.google.com/gtagjs
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

interface GlobalParameters {
    groups?: string | string[];
    send_to?: string | string[];
    event_callback?: () => void;
    event_timeout?: number;
    [custom_kvs: string]: any;
}

interface CartParameters {
    value?: any;
    currency?: any;
    items?: any;
}

interface RecommendedEventParamMap {
    'add_payment_info': {};
    'add_to_cart': CartParameters;
    'add_to_wishlist': CartParameters;
    'begin_checkout': CartParameters & { coupon?: any };
    'checkout_progress': CartParameters & {
        coupon?: any;
        checkout_step?: any;
        checkout_option?: any;
    };
    'exception': { description?: any; fatal?: any };
    'generate_lead': { value?: any; currency?: any; transaction_id?: any };
    'login': { method?: any };
    'page_view': {};
    'purchase': CartParameters & {
        transaction_id?: any;
        tax?: any;
        shipping?: any;
        coupon?: any;
    };
    'refund': CartParameters & {
        transaction_id?: any;
        tax?: any;
        shipping?: any;
    };
    'remove_from_cart': CartParameters;
    'screen_view': { screen_name?: any };
    'search': { search_term?: any };
    'select_content': {
        items?: any;
        promotions?: any;
        content_type?: any;
        content_id?: any;
    };
    'set_checkout_option': { checkout_step?: any; checkout_option?: any };
    'share': { method?: any; content_type?: any; content_id?: any };
    'sign_up': { method?: any };
    'timing_complete': { name?: any; value?: any };
    'view_item': { items?: any };
    'view_item_list': { items?: any };
    'view_promotion': { promotions?: any };
    'view_search_results': { search_term?: any };
    [customEvents: string]: {};
}

declare var gtag: {
    <K extends keyof RecommendedEventParamMap>(command: 'event', eventName: K, kvPairs: RecommendedEventParamMap[K] & GlobalParameters): void;
    (command: 'config', targetID: string, kvPairs: GlobalParameters): void;
    (command: 'set', kvPairs: GlobalParameters): void;
};
declare var dataLayer: any[];
