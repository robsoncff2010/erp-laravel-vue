export default function registerComponents(app) {
  const uiComponents = import.meta.glob('../components/ui/*.vue', { eager: true });

  Object.entries(uiComponents).forEach(([path, definition]) => {
    const name = 'Base' + path.split('/').pop().replace('.vue', '');
    app.component(name, definition.default);
  });
}
