import { createApp } from 'vue';
import Dashboard from './components/Dashboard.vue';

// MOUNT FUNCTION TO START UP THE APP
const mount = (el) => {
	const app = createApp(Dashboard);
  	app.mount(el);
};

// IF WE ARE IN DEVELOPMENT AND IN ISOLATION,
// CALL MOUNT INMEDIATELY
if(process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_dashboard-dev-root');
  if (devRoot){
    mount(devRoot);
  }
}

// WE ARE RUNNING THROUGH CONTAINER
// AND WE SHOULD EXPORT MOUNT FUNCTION

export { mount };
