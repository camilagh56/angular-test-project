import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Badge } from './badge';

describe('Badge', () => {
  let component: Badge;
  let fixture: ComponentFixture<Badge>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Badge]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Badge);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return true when icon is provided', () => {
    component.icon = 'check';
    expect(component.hasIcon).toBeTrue();
  });

  it('should return false when icon is empty or whitespace', () => {
    component.icon = '   ';
    expect(component.hasIcon).toBeFalse();

    component.icon = undefined;
    expect(component.hasIcon).toBeFalse();
  });


  it('should emit onClose and set showButtonClose to false when handleClose is called', () => {
    spyOn(component.onClose, 'emit');
    const event = new MouseEvent('click');
    spyOn(event, 'stopPropagation');

    component.handleClose(event);

    expect(event.stopPropagation).toHaveBeenCalled();
    expect(component.onClose.emit).toHaveBeenCalled();
    expect(component['showButtonClose']()).toBeFalse();
  });

  it('should render label and icon in template', () => {
    component.label = 'Hola';
    component.icon = 'check';
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const labelEl = compiled.querySelector('span');
    const iconEl = compiled.querySelector('mat-icon');

    expect(labelEl?.textContent).toContain('Hola');
    expect(iconEl?.textContent).toContain('check');
  });

  it('should apply color and size classes', () => {
    component.color = 'danger';
    component.size = 'small';
    fixture.detectChanges();

    const badge = fixture.nativeElement.querySelector('.badge');
    expect(badge.classList).toContain('danger');
    expect(badge.classList).toContain('small');
  });
});
