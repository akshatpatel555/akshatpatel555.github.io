"use client";

import { useState, useCallback } from "react";
import { Copy, Check } from "lucide-react";
import { Button, type ButtonProps } from "./button";
import { Toast } from "./toast";

interface CopyButtonProps extends Omit<ButtonProps, "onClick"> {
  text: string;
  toastMessage?: string;
}

export function CopyButton({
  text,
  toastMessage = "Copied to clipboard",
  children,
  ...props
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const textarea = document.createElement("textarea");
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [text]);

  return (
    <>
      <Button
        onClick={handleCopy}
        type="button"
        // No aria-label: the visible children ("Copy Email") are the better
        // accessible name, and an aria-label of "Copy" would override and
        // shorten it. State is announced via the toast's live region instead.
        {...props}
      >
        {copied ? (
          <Check className="h-4 w-4" />
        ) : (
          <Copy className="h-4 w-4" />
        )}
        {children}
      </Button>
      <Toast message={toastMessage} visible={copied} />
    </>
  );
}
