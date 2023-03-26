# Angular Syllabus

globally intallation of angular -- npm install -g @angular/cli
verstion check command -- ng version

# DATA Binding 

1. Interpolation / One way data Binding / <h1>{{Value}}</h1>
2. Property Binding / One Way data Binding / <img [src]="imageUrl">
3. Event Binding / One Way data Binding / <button (click)="onClick()">Click me</button>
5. Class Binding / One Way data Binding / <div [ngClass]="{ active: isActive }"> / change class on variable
6. Style Binding /  One Way data Binding / <div [ngStyle]="{ 'font-size': fontSize + 'px' }">
7. Attribute Binding / One Way data Binding / <h1 [attr.title]="isDisabled">Click me</h1>
4. Two way Binding / two way data Binding / <input [(ngModel)]="name"> / need to import formmodule