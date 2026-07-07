export {};

declare global {
  interface Window {
    Webflow?: {
      destroy?: () => void;
      ready?: () => void;
      require?: (module: string) => {
        init?: () => void;
      };
    };
  }
}
