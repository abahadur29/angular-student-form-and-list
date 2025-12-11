import { Routes } from '@angular/router';
import { StudentList } from './components/student-list/student-list';
import { StudentAdd } from './components/student-add/student-add';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, 
  { path: 'home', component: StudentList },
  { path: 'add-student', component: StudentAdd }
];