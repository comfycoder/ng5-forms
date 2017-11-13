import { Component, ElementRef, OnInit, OnDestroy, Input } from '@angular/core';
import { SpinnerService } from '../../services/spinner.service';
import { Subscription } from 'rxjs/Subscription';

declare var Spinner: any;

@Component({
    selector: 'app-spinner',
    templateUrl: './spinner.component.html',
    styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit, OnDestroy {

    private spinner: any;
    show = false;
    private element: any = null;
    private subscription: Subscription = null;

    @Input() lines = 12; // The number of lines to draw
    @Input() length = 20; // The length of each line
    @Input() width = 12; // The line thickness
    @Input() radius = 50; // The radius of the inner circle
    @Input() scale = 1.0; // Scales overall size of the spinner
    @Input() corners = 1; // Corner roundness (0..1)
    @Input() color = '#881635'; // #rgb or #rrggbb or array of colors
    @Input() opacity = 0.25; // Opacity of the lines
    @Input() rotate = 0; // The rotation offset
    @Input() direction = 1; // 1: clockwise, -1: counterclockwise
    @Input() speed = 0.8; // Rounds per second
    @Input() trail = 60; // Afterglow percentage
    @Input() fps = 20; // Frames per second when using setTimeout() as a fallback for CSS
    @Input() className = 'spinner'; // The CSS class to assign to the spinner
    @Input() top = '50%'; // Top position relative to parent
    @Input() left = '50%'; // Left position relative to parent
    @Input() shadow = true; // Whether to render a shadow
    @Input() hwaccel = true; // Whether to use hardware acceleration
    @Input() position = 'absolute'; // Element positioning

    constructor(
        private spinnerElement: ElementRef,
        private spinnerService: SpinnerService
    ) {
        this.element = spinnerElement.nativeElement;
    }

    ngOnInit() {
        this.initSpinner();
        this.createServiceSubscription();
    }

    private initSpinner() {
        const options = {
            lines: this.lines,
            length: this.length,
            width: this.width,
            radius: this.radius,
            scale: this.scale,
            corners: this.corners,
            color: this.color,
            opacity: this.opacity,
            rotate: this.rotate,
            direction: this.direction,
            speed: this.speed,
            trail: this.trail,
            fps: this.fps,
            zIndex: 2e9, // Artificially high z-index to keep on top
            className: this.className,
            top: this.top,
            left: this.left,
            shadow: this.shadow,
            hwaccel: this.hwaccel,
            position: this.position
        };
        console.log('Creating spinner with options:');
        // console.log(JSON.stringify((options)));
        this.spinner = new Spinner(options);
    }

    private createServiceSubscription() {
        this.subscription = this.spinnerService.spinnerObservable.subscribe(showSpinner => {
            if (showSpinner) {
                this.startSpinner();
            } else {
                this.stopSpinner();
            }
        });
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

    startSpinner() {
        this.show = true;
        this.spinner.spin(this.element.firstChild);
    }

    stopSpinner() {
        this.show = false;
        this.spinner.stop();
    }
}
