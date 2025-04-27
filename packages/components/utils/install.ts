export const withInstall = <T, E extends Record<string, any>>(
  main: any,
  extra?: E
) => {
  main.install = (app: any): void => {
    for (const comp of [main, ...Object.values(extra ?? {})]) {
      app.component(comp.name, comp);
    }
  };

  if (extra) {
    for (const [key, comp] of Object.entries(extra)) {
      (main as any)[key] = comp;
    }
  }

  return main;
};

export const withInstallFunction = (fn: any, name: string) => {
  fn.install = (app: any) => {
    fn._context = app._context;
    app.config.globalProperties[name] = fn;
  };

  return fn;
};

export const withNoopInstall = <T>(component: any) => {
  component.install = () => {};

  return component;
};
