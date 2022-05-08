import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FormsModule } from '@angular/forms';
import { FrequenciesListComponent } from './components/frequencies-list/frequencies-list.component';
import { FrequenciesFormComponent } from './components/frequencies-form/frequencies-form.component';
import { FrequenciesService } from './services/frequencies.service';
import { PeriodsListComponent } from './components/periods-list/periods-list.component';
import { PeriodsFormComponent } from './components/periods-form/periods-form.component';
import { SchedulesFormComponent } from './components/schedules-form/schedules-form.component';
import { SchedulesListComponent } from './components/schedules-list/schedules-list.component';
import { ProgramsFormComponent } from './components/programs-form/programs-form.component';
import { ProgramsListComponent } from './components/programs-list/programs-list.component';
import { UsersFormComponent } from './components/users-form/users-form.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { StudentsListComponent } from './components/students-list/students-list.component';
import { StudentsFormComponent } from './components/students-form/students-form.component';
import { TeachersListComponent } from './components/teachers-list/teachers-list.component';
import { TeachersFormComponent } from './components/teachers-form/teachers-form.component';
import { CoursesFormComponent } from './components/courses-form/courses-form.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { CourseDetailsFormComponent } from './components/course-details-form/course-details-form.component';
import { CourseDetailsListComponent } from './components/course-details-list/course-details-list.component';
import { HomeComponent } from './components/home/home.component';
import { CoordinatorsListComponent } from './components/coordinators-list/coordinators-list.component';
import { CoordinatorsFormComponent } from './components/coordinators-form/coordinators-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginListComponent } from './components/login-list/login-list.component';
// import { CoursesFormComponent } from './components/courses-form/courses-form.component';
// import { CourseListComponent } from './components/course-list/course-list.component';
// import { StudentsCoursesFormComponent } from './components/students-courses-form/students-courses-form.component';
// import { StudentListComponent } from './components/student-list/student-list.component';
// import { StudentsFormComponent } from './components/students-form/students-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FrequenciesListComponent,
    FrequenciesFormComponent,
    PeriodsListComponent,
    PeriodsFormComponent,
    SchedulesFormComponent,
    SchedulesListComponent,
    ProgramsFormComponent,
    ProgramsListComponent,
    UsersFormComponent,
    UsersListComponent,
    StudentsListComponent,
    StudentsFormComponent,
    TeachersListComponent,
    TeachersFormComponent,
    CoursesFormComponent,
    CoursesListComponent,
    CourseDetailsFormComponent,
    CourseDetailsListComponent,
    HomeComponent,
    CoordinatorsListComponent,
    CoordinatorsFormComponent,
    LoginFormComponent,
    LoginListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [FrequenciesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
