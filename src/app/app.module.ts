import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Если потребуется обработка форм
import { AppComponent } from './app.component';

/* Импорт компонентов */
import { TrayDataComponent } from './components/tray-data/tray-data.component';
import { TraySchematicComponent } from './components/tray-schematic/tray-schematic.component';
import { TrayOverviewComponent } from './components/tray-overview/tray-overview.component';

@NgModule({
  declarations: [
    AppComponent,            // Главный компонент приложения
    TrayDataComponent,       // Компонент для отображения данных о лотке
    TraySchematicComponent,  // Компонент для отображения схемы лотка
    TrayOverviewComponent    // Компонент для объединения данных и схемы
  ],
  imports: [
    BrowserModule,           // Модуль для работы с браузером
    FormsModule              // Модуль для работы с формами
  ],
  providers: [],
  bootstrap: [AppComponent]  // Компонент, с которого начинается приложение
})
export class AppModule { }