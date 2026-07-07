"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function WebflowRuntimeRefresh() {
  const pathname = usePathname();

  useEffect(() => {
    const webflow = window.Webflow;

    if (!webflow) return;

    try {
      webflow.destroy?.();
      webflow.ready?.();
      webflow.require?.("ix2")?.init?.();
    } catch (error) {
      console.warn("Webflow runtime refresh failed:", error);
    }
  }, [pathname]);

  return null;
}
