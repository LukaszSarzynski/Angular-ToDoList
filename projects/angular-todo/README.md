# AngularTodo

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.0.

## Instalation
### Step 1: Install `angular-todo`:

In your Angular project 

```shell
npm install --save angular-todo
```

### Step 2: Import the AngularTodoModule:
add AngularTodoModule intro `app.module.ts`
```js
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularTodoModule } from 'angular-todo';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AngularTodoModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

### Step 3: Include a theme: 
To allow customization and theming, please add this to your `styles.css` 

```css
@import "~@angular/material/prebuilt-themes/indigo-pink.css";
// ... or 
@import "~@angular/material/prebuilt-themes/purple-green.css";

```

### Step 4: add to app: 
Now need is only add this selector to `app.component.html` 

```html
<lf-angular-todo></lf-angular-todo>

```


### Step 5: Watch the effect: 
Run Angular Live Development Server, to check what ToDo Tasks Lists works.

```bash 
ng serve --open
```
