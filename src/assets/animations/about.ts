import { animate, query, stagger, style, transition, trigger, state } from '@angular/animations';

export const AboutAnimations = [
    trigger('profilePicture',[
        state('hidden', style({opacity: 0})),
        state('displayed', 
            style({opacity: 1, animation: 'scale-in-ver-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both'})),
        transition('hidden => displayed', [animate(0.1)])
    ]),
    trigger('profileContent',[
        state('hidden', style({opacity: 0})),
        state('displayed', 
            style({opacity: 1, animation: 'scale-in-hor-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both'})),
        transition('hidden => displayed', [animate(0.1)])
    ]),
    trigger('techGrid',[
        state('hidden', style({opacity: 0})),
        state('displayed', style({opacity: 1})),
        transition('hidden => displayed', [
            animate(0.3),
            query('.item', [
                stagger(0.2, [
                    animate(0.1, style({opacity:1}))
                ])
            ], {optional: true})
        ])
    ])
]