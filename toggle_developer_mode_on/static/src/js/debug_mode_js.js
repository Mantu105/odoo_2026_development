/** @odoo-module **/

import { registry } from "@web/core/registry";
import { routeToUrl } from "@web/core/browser/router";
import { browser } from "@web/core/browser/browser";

function debugToggle(env) {
    const router = env.services.router;
    const url = new URL(window.location.href);
    const isDebug = url.searchParams.get("debug") === "1";

    return {
        type: "item",
        sequence: 21,
        description: isDebug
            ? "👁 Deactivate the developer mode"
            : "👁‍🗨 Activate the developer mode",
        callback: () => {
            if (isDebug) {
                const route = router?.current;
                if (route) {
                    route.search.debug = undefined;
                    browser.location.href =
                        browser.location.origin + routeToUrl(route);
                } else {
                    url.searchParams.delete("debug");
                    window.location.href = url.toString();
                }
            } else {
                url.searchParams.set("debug", "1");
                window.location.href = url.toString();
            }
        },
    };
}

registry.category("user_menuitems").add("debug_toggle", debugToggle);
