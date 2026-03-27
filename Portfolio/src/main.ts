import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import './snow'; // Importe o arquivo de neve para que ele seja executado

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));

  
