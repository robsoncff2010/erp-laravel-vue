export default function registerComponents(app) {
  const uiComponents   = import.meta.glob('../Components/ui/*.vue', { eager: true });
  const prefComponents = import.meta.glob('../Components/preferences/PreferencesForm.vue', { eager: true });

  Object.entries(uiComponents).forEach(([path, definition]) => {
    const name = 'Base' + path.split('/').pop().replace('.vue', '');

    app.component(name, definition.default);
  });
  
  Object.entries(prefComponents).forEach(([path, definition]) => {
    const name = 'Base' + path.split('/').pop().replace('.vue', '');

    app.component(name, definition.default);
  });
}
