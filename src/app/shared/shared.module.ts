import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PageHeaderComponent } from './page-header/page-header.component';
import { PageFooterComponent } from './page-footer/page-footer.component';
import { SpinnerComponent } from './spinner/spinner.component';

import { FocusDirective } from './directives/focus.directive';
import { InputFilterDirective } from './directives/input-filter.directive';
import { ModalTriggerDirective } from './directives/modal-trigger.directive';
import { MyCurrencyFormatterDirective } from './directives/my-currency-formatter.directive';
import { MyNumericFormatterDirective } from './directives/my-numeric-formatter.directive';
import { MyPercentFormatterDirective } from './directives/my-percent-formatter.directive';

import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { InfoButtonComponent } from './info-button/info-button.component';
import { MessageDialogComponent } from './message-dialog/message-dialog.component';
import { PaginationComponent } from './pagination/pagination.component';
import { QuestionGroupComponent } from './question-group/question-group.component';
import { RxRadioButtonComponent } from './rx-radio-button/rx-radio-button.component';
import { TextInputComponent } from './text-input/text-input.component';

import { MyCurrencyPipe } from './pipes/my-currency.pipe';
import { MyNumericPipe } from './pipes/my-numeric.pipe';
import { MyPercentPipe } from './pipes/my-percent.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    PageHeaderComponent,
    PageFooterComponent,
    SpinnerComponent,
    ConfirmDialogComponent,
    InfoButtonComponent,
    MessageDialogComponent,
    PaginationComponent,
    QuestionGroupComponent,
    RxRadioButtonComponent,
    FocusDirective,
    InputFilterDirective,
    ModalTriggerDirective,
    MyCurrencyFormatterDirective,
    MyNumericFormatterDirective,
    MyPercentFormatterDirective,
    MyCurrencyPipe,
    MyNumericPipe,
    MyPercentPipe,
    TextInputComponent
  ],
  exports: [
    PageHeaderComponent,
    PageFooterComponent,
    SpinnerComponent,
    ConfirmDialogComponent,
    InfoButtonComponent,
    MessageDialogComponent,
    PaginationComponent,
    QuestionGroupComponent,
    RxRadioButtonComponent,
    FocusDirective,
    InputFilterDirective,
    ModalTriggerDirective,
    MyCurrencyFormatterDirective,
    MyNumericFormatterDirective,
    MyPercentFormatterDirective,
    MyCurrencyPipe,
    MyNumericPipe,
    MyPercentPipe
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [

      ]
    };
  }
}
