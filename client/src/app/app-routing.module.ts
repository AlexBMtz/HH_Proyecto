import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { TeacherListComponent } from './components/teacher-list/teacher-list.component';
// import { TeacherFormComponent } from './components/teachers-form/teachers-form.component'
// import { SchedulesFormComponent } from './components/schedules-form/schedules-form.component';
 import { FrequenciesFormComponent } from './components/frequencies-form/frequencies-form.component';
 import { FrequenciesListComponent } from './components/frequencies-list/frequencies-list.component';
// import { SchedulesListComponent } from './components/schedules-list/schedules-list.component';
// import { CourseListComponent } from './components/course-list/course-list.component';
// import { CoursesFormComponent } from './components/courses-form/courses-form.component';
// import { StudentListComponent } from './components/student-list/student-list.component';
// import { StudentsFormComponent } from './components/students-form/students-form.component';
// import { StudentsCoursesFormComponent } from './components/students-courses-form/students-courses-form.component';

const routes: Routes = [
  //
  {
    path:'',
    redirectTo:'/frequencies',
    pathMatch:'full'
  },

//   {
//     path:'teachers',
//     component:TeacherListComponent
//   },
  
//   {
//     path:'teachers/add',
//     component:TeacherFormComponent
//   },

//   {
//     path:'teachers/edit/:teacherId',
//     component:TeacherFormComponent
//   },
//   {
//     path:'',
//     redirectTo:'/teachers',
//     pathMatch:'full'
//   },

//  //Schedules
//   {
//     path:'schedules',
//     component:SchedulesListComponent
//   },
  
//   {
//     path:'schedules/add',
//     component:SchedulesFormComponent
//   },

//   {
//     path:'schedules/edit/:scheduleId',
//     component:SchedulesFormComponent
//   },

   //Frequencies

  {
    path:'frequencies',
    component:FrequenciesListComponent
  },
  
  {
    path:'frequencies/add',
    component:FrequenciesFormComponent
  },

  {
    path:'frequencies/edit/:frequencyId',
    component:FrequenciesFormComponent
  },

//   //Courses
//   {
//     path:'courses',
//     component:CourseListComponent
//   },
  
//   {
//     path:'courses/add',
//     component:CoursesFormComponent
//   },

//   {
//     path:'courses/edit/:crn',
//     component:CoursesFormComponent
//   },

//   //Students
//   {
//     path:'students',
//     component:StudentListComponent
//   },
  
//   {
//     path:'students/add',
//     component:StudentsFormComponent
//   },

//   {
//     path:'students/edit/:studentId',
//     component:StudentsFormComponent
//   },

//   //StudentsCourses
//   {
//     path:'studentsCourses/add',
//     component:StudentsCoursesFormComponent
//   },

//   {
//     path:'studentsCourses/edit/:crn',
//     component:StudentsCoursesFormComponent
//   }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }