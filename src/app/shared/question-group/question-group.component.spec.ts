import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionGroupComponent } from './question-group.component';
import { InfoButtonComponent } from '../info-button/info-button.component';
import { MessageDialogComponent } from '../message-dialog/message-dialog.component';

describe('QuestionGroupComponent', () => {
  let component: QuestionGroupComponent;
  let fixture: ComponentFixture<QuestionGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        QuestionGroupComponent,
        InfoButtonComponent,
        MessageDialogComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
