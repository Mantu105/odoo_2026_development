/* @odoo-module */

import { Component, useState } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { useService } from "@web/core/utils/hooks";
import { browser } from "@web/core/browser/browser";

export class DebugMode extends Component {
    static props = [];
    static template = "toggle_developer_mode_on.DebugMode";

    setup() {
        this.notification = useService("notification");
        
        // Check if debug mode is active from URL
        const url = new URL(window.location.href);
        const isDebugActive = url.searchParams.get("debug") === "1";
        
        this.state = useState({
            is_dev_mode: isDebugActive,
        });
    }

    toggle_dev_mode(event) {
        const isChecked = event.target.checked;
        const url = new URL(window.location.href);

        if (isChecked) {
            // Activate developer mode
            url.searchParams.set("debug", "1");
            this.state.is_dev_mode = true;
            this.notification.add("Developer Mode Activated", {
                type: "success",
                title: "Success",
            });
        } else {
            // Deactivate developer mode
            url.searchParams.delete("debug");
            this.state.is_dev_mode = false;
            this.notification.add("Developer Mode Deactivated", {
                type: "info",
                title: "Info",
            });
        }

        setTimeout(() => {
            browser.location.href = url.toString();
        }, 300);
    }
}

registry.category("systray").add("toggle_developer_mode_on.DebugMode", { Component: DebugMode }, { sequence: 15 });