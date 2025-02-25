import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomSanitizerComponent } from './dom-sanitizer.component';

describe('DomSanitizerComponent', () => {
  let component: DomSanitizerComponent;
  let fixture: ComponentFixture<DomSanitizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DomSanitizerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DomSanitizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
