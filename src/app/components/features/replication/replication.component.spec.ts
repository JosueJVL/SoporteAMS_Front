import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ReplicationComponent } from './replication.component';

describe('ReplicationComponent', () => {
  let component: ReplicationComponent;
  let fixture: ComponentFixture<ReplicationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ReplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
