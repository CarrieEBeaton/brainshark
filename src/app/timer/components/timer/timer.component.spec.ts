import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '../../../material/material.module';
import { TimerService } from '../../service/timer.service';
import { TimeDisplayComponent } from '../time-display/time-display.component';
import { TimerControlsComponent } from '../timer-controls/timer-controls.component';
import { TimerComponent } from './timer.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { getTime } from '../../store/selectors';

describe('TimerComponent', () => {
    let component: TimerComponent;
    let fixture: ComponentFixture<TimerComponent>;
    let store: MockStore;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [TimerComponent, TimeDisplayComponent],
            imports: [MaterialModule, FormsModule],
            providers: [TimerService, provideMockStore()]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TimerComponent);
        store = TestBed.inject(MockStore);
        component = fixture.componentInstance;
        store.overrideSelector(getTime, 0);
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
