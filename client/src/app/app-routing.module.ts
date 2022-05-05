import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeachersListComponent } from './components/teachers-list/teachers-list.component';
import { TeachersFormComponent } from './components/teachers-form/teachers-form.component'
import { SchedulesFormComponent } from './components/schedules-form/schedules-form.component';
import { SchedulesListComponent } from './components/schedules-list/schedules-list.component';
 import { FrequenciesFormComponent } from './components/frequencies-form/frequencies-form.component';
 import { FrequenciesListComponent } from './components/frequencies-list/frequencies-list.component';
 import { PeriodsFormComponent } from './components/periods-form/periods-form.component';
 import { PeriodsListComponent } from './components/periods-list/periods-list.component';
 import { ProgramsFormComponent } from './components/programs-form/programs-form.component';
 import { ProgramsListComponent } from './components/programs-list/programs-list.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { CoursesFormComponent } from './components/courses-form/courses-form.component';
import { StudentsListComponent } from './components/students-list/students-list.component';
import { StudentsFormComponent } from './components/students-form/students-form.component';
// import { StudentsCoursesFormComponent } from './components/students-courses-form/students-courses-form.component';
import { UsersFormComponent } from './components/users-form/users-form.component';
import { UsersListComponent } from './components/users-list/users-list.component';

const routes: Routes = [
  //Teachers
  {
    path:'',
    redirectTo:'/frequencies',
    pathMatch:'full'
  },

  {
    path:'teachers',
    component:TeachersListComponent
  },
  
  {
    path:'teachers/add',
    component:TeachersFormComponent
  },

  {
    path:'teachers/edit/:teacherId/:userId',
    component:TeachersFormComponent
  },
  {
    path:'',
    redirectTo:'/teachers',
    pathMatch:'full'
  },

//  //Schedules
  {
    path:'schedules',
    component:SchedulesListComponent
  },
  
  {
    path:'schedules/add',
    component:SchedulesFormComponent
  },

  {
    path:'schedules/edit/:scheduleId',
    component:SchedulesFormComponent
  },

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

  //Periods
  {
    path:'periods',
    component:PeriodsListComponent
  },
  
  {
    path:'periods/add',
    component:PeriodsFormComponent
  },

  {
    path:'periods/edit/:periodId',
    component:PeriodsFormComponent
  },

  //Programs
  {
    path:'programs',
    component:ProgramsListComponent
  },
  
  {
    path:'programs/add',
    component:ProgramsFormComponent
  },

  {
    path:'programs/edit/:programId',
    component:ProgramsFormComponent
  },

  //Periods
  {
    path:'periods',
    component:PeriodsListComponent
  },
  
  {
    path:'periods/add',
    component:PeriodsFormComponent
  },

  {
    path:'periods/edit/:periodId',
    component:PeriodsFormComponent
  },
  //Users
  {
    path: 'users',
    component:UsersListComponent
  },

  {
    path: 'users/add',
    component:UsersFormComponent
  },

  {
    path: 'users',
    component:UsersFormComponent
  },

  //Courses
  {
    path:'courses',
    component:CoursesListComponent
  },
  
  {
    path:'courses/add',
    component:CoursesFormComponent
  },

  {
    path:'courses/edit/:crn',
    component:CoursesFormComponent
  },

  //Students
  {
    path:'students',
    component:StudentsListComponent
  },
  
  {
    path:'students/add',
    component:StudentsFormComponent
  },

  {
    path:'students/edit/:studentId',
    component:StudentsFormComponent
  },

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