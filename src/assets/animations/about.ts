import { animate, query, stagger, style, transition, trigger } from '@angular/animations';

export const AboutAnimations = [
    trigger('profilePicture',[
        transition(':enter', [
            query(':enter', [
                style({opacity: 0}),
                animate('0.1s', style({opacity: 1}))
            ], {optional: true})
        ])
    ]),
    trigger('profileContent',[
        transition(':enter', [
            query(':enter', [
                style({opacity: 0}),
                animate('0.1s', style({opacity: 1}))
            ],{optional: true})
        ]), 
    ]),
    trigger('techGrid',[
        transition(':enter', [
            query(".grid-row > ion-card", [
                style({opacity: 0}),
                stagger(500, [
                    animate('0.1s 0.5s', style({opacity: 1}))
                ]
            )], {optional: true}
        )])
    ])
]