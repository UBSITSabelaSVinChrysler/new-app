import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInteractionComponent } from './user-interaction.component';

describe('UserInteractionComponent', () => {
  let component: UserInteractionComponent;
  let fixture: ComponentFixture<UserInteractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserInteractionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserInteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

export class UserInteractionComponent {
  message: string = 'Click the button!';
  clickCount: number = 0;

  onButtonClick(): void {
    this.clickCount++;
    this.message = `Button clicked ${this.clickCount} times!`;
  }

  onMouseEnter(): void {
    console.log('Mouse entered the div!');
  }

  onInputChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    console.log('Input changed:', target.value);
  }
}
