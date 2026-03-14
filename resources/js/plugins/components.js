export default function registerComponents(app) {
  const uiComponents = import.meta.glob('../Components/ui/*.vue', { eager: true });
  Object.entries(uiComponents).forEach(([path, definition]) => {
    const name = 'Base' + path.split('/').pop().replace('.vue', '');

    app.component(name, definition.default);
  });

  const layoutComponents = import.meta.glob('../Components/layout/header/*.vue', { eager: true });
  Object.entries(layoutComponents).forEach(([path, definition]) => {
    const name = 'Base' + path.split('/').pop().replace('.vue', '');

    app.component(name, definition.default);
  });
}
