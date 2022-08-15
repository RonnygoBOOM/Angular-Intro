
import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({ /*This is called a decorator function */
    selector: 'courses',
    template: `
                <h2>{{ title }}<h2>
                    <ul>
                        <li *ngFor="let course of courses">{{course}}</li>
                    </ul>
            `
}) 
export class CoursesComponent {
    title = "List of courses";
    courses;

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }

    // the constructor could alternatively look like this without dependency injection: 
    // constructor(service: CoursesService) {
    //     let service = new CoursesService();
    //     this.courses = service.getCourses();
    // }
}

//courses.service.ts is the file where the logic for calling an http service. 
//This is so we dont rely on a live http endpoint for unit tests. 
//Components should only contain presentation logic