import { animate, query, stagger, style, transition, trigger, state } from '@angular/animations';

export const AboutAnimations = [
    trigger('profilePicture',[
        state('hidden', style({opacity: 0})),
        state('displayed', style({opacity: 1})),
        transition('hidden => displayed', [animate(0.3)])
    ]),
    trigger('profileContent',[
        state('hidden', style({opacity: 0})),
        state('displayed', style({opacity: 1})),
        transition('hidden => displayed', [animate(0.3)])
    ]),
    trigger('techGrid',[
        state('hidden', style({opacity: 0})),
        state('displayed', style({opacity: 1})),
        transition('hidden => displayed', [
            animate(0.3),
            query('.item', [
                stagger(0.2, [
                    animate(0.3, style({opacity:1}))
                ])
            ], {optional: true})
        ])
    ])
]